---
title: "PCSX2 64Bit Recompilation"
date: 2006-10-29T00:00:00
summary: "Many 64 bit architectures have been proposed; however, the x86-64 (aka AMD64) architecture has picked up a lot of speed since its initial proposal a couple of years ago"
draft: false
tags:
  - devblog
mainAuthor: ZeroFrog
aliases:
  - "/developer-blog/228-pcsx2-64bit-recompilation"
  - "/developer-blog/228-pcsx2-64bit-recompilation.html"
  - "/developer-blog/228-pcsx2-64bit-recompilation.htm"
---

Many 64 bit architectures have been proposed; however, the x86-64 (aka
AMD64) architecture has picked up a lot of speed since its initial
proposal a couple of years ago. Most 64bit CPUs today support it, so it
looks like a good candidate for 64bit recompilation. The x86-64
architecture offers many more registers and can potentially speed up
games by a significant amount. Up to now, Pcsx2 has largely been
ignoring the 64 bit arena because there have been massive compatibility
issues, the developers weren't sure if it was really worth it, and
adding a new bug-free and fast recompiler to the existing code base is a
very painful process. Anyone seriously suggesting this to a dev would
have been laughed out of the chat room. However, the upcoming 0.9.2
release is looking very stable and after doing some research, we have
decided to add support for x86-64 recompilation, both for 64bit versions
of Linux and Windows (yes, Linux support is returning).

Before going into technical details, I want to cover the current Pcsx2
recompilation model.

**Pcsx2 Recompilation**

Every different instruction set requires either an interpreter or a
recompiler to execute it on the PC. Both are important in emulation.
Interpreters are implemented with regular high-level languages and are
platform independent. They are easy to program, easy to debug, but slow.
They are extremely important for testing and debugging purposes. For
example, interpreting a simple 32bit EE MIPS instruction (code) might
look like:

```cpp
switch(code>>26) {
  case 0x02: // J - jump to
    pc = (code & 0x03ffffff)*4; // change the program counter
    break;
  case 0x23: // LW - load word, sign extend
    gpr[Rt] = (long long)*(long*)(memory+gpr[Rs]+(short)code);
    break;
  ...
  }
```

Recompilers, on the other hand, try to cut as many corners as possible.
For example, we know the instruction at address 0x1000 will never
change, so there is no reason why the CPU needs to execute the switch
statement and decode the instruction every single time it executes it.
So recompilers generate the minimal amount of assembly the CPU needs to
execute to emulate that instruction. Because we're working with
assembly, recompilation is a very platform dependent process.

Simple recompilers look at one instruction at a time and keep all target
platform (in this case, the PS2) registers in memory. For every new
instruction, the used registers are read from memory and stored in real
CPU registers, then some instructions are executed, and finally the
register with the result is stored back in memory. Before 0.9, Pcsx2
used to employ this type of recompilation.

More complex recompilers divide the code into simple blocks (no
jumps/branches) and try to preserve target platform registers across
instructions in the real CPU registers. There are many different types
of register allocation algorithms using graph coloring. Such compilers
might also do constant propagation elimination. A common pattern in the
MIPS Emotion Engine is something like:

lui s0, 0x1000
lw s0, 0x2000(s0)

If we propagated the constants at the lw, we know that the read address
is 0x10002000.

A little more complex recompiler will know that 0x10002000 corresponds
to the IPU, so the assembly will call the IPU straight away (without
worrying about memory location translation).

There are many such local optimizations, however they aren't enough. At
the end of every block, all the registers will have to be pushed to
memory because the next simple block that needs to be executed can't be
predicted at recompilation time (ie: branch if x &gt;= 0 depends on the
value of x at runtime).

An even more complex recompiler can work on the global scale by finding
out which simple blocks are connected to which. Once it knows, it can
get rid of the register flushing at the end of every simple block by
simply telling the next blocks to allocate the same real CPU register to
the same target platform register. This is called global register
allocation and sometimes uses Markov blankets for block synchronization.
For those people that know Bayes nets, this is very similar, except it
applies to the global simple block graph. Just think about the nodes
necessary for making a specific node independent with respect to the
whole graph. This will include the node's parents, children, and the
children's parents. For those that just got lost... don't worry.

The Pcsx2 recompilers also use **MMX** and **SSE(1/2/3)**
interchangeably. So an EE register can be in an MMX, SSE, or regular x86
register at any point in time depending on the current types of
instructions (this is a nightmare to manage).

Console emulators rarely need to go through such complex recompilers
because up until a couple of years ago, consoles weren't that powerful.
But starting with the PS2, consoles got powerful and the Pcsx2
recompilers for the EmotionEngine and Vectors Units got complex really
fast. Pcsx2 0.9.1 supports all the above mentioned optimizations plus
many more unmentioned ones. The VU recompiler (code named **SuperVU** )
is by far the most complex and fastest. Anyone who wants to keep their
sanity should stay away from it.

For those that remember what it was like in the 0.8.1 days can
appreciate how powerful the 0.9.1 Pcsx2 optimizations are.

**x86-64**

So why isn't x86-32 enough? Well, for starters the Playstation 2 EE has
32 128bit regular registers, 32 32bit floating point registers, and some
COP0 registers. Most instructions work on 64 bits, the MMI instructions
work on the full 128bits. On the other hand, the x86 CPU has 8 32bit
general purpose registers (one is for stack), 8 64bit registers (MMX),
and 8 128bit registers(SSE). And you can't combine the three that easily
(ie: you can't add an x86 register with a SSE register before first
transferring the x86 to SSE or vice versa). So there's a very big
difference in registers sizes. Because of the small number of x86
registers, the recompiler does a lot of register thrashing (registers
are spilled to memory very frequently). Each memory read/write is pretty
slow, so the more thrashing, the slower the recompiler becomes. Also,
x86-32 is inherently 32bit, so a 64bit add would require 2 32bit
instructions and 4 regular x86 registers for the source and result (2 if
reading from memory). The EE recompiler tries to alleviate the register
pressure by using the 64bit arithmetic capabilities of MMX, but MMX has
a pretty limited ISA and intra-register set transfers kill
performance.

The registers on the x86-64 architecture are: 16 64bit general purpose
registers, 8 64bit MMX registers, and 16 128bit SSE registers. This
amounts to twice the number of register memory! This means much less
register thrashing. On top of that, 64bit adds/shifts/etc can all be
done in one instruction.

However, the story isn't as simple as it sounds. The recompiler has to
interface with regular C++ code constantly (ie: calling plugin
functions), so the calling conventions on the recompiler boundaries must
be followed exactly. The x86-64 specification can be found
[**here**](http://www.x86-64.org/) and is pretty straightforward.
However, Microsoft decided that it wanted its own specification (for
reasons not quite known to anyone else).. so now there are two different
calling conventions with a different set of registers specifying
arguments to functions and another different set acting as non-volatile
data! (Thanks Microsoft, it wasn't difficult enough)

Because the size of the registers changed, all pointers are now 64 bits,
which adds many difficulties to reading and writing from memory,
incrementing the stack, etc.

Virtual memory is yet another obstacle to overcome with 64bit OSs. The
AWE mapping trick (described in an early blog) has to be refined. But
now that the address range is much bigger, there are less limitations.
VM builds for Linux also need a completely new implementation.

Finally, if anyone has seen Pcsx2 code, they would know that inline
assembly is pretty frequent in the recompilers. The reasons we use
inline assembly rather than C++ code are many. Actually, some things
like dynamic dispatching become impossible to do with C++ code. So,
inline is necessary... and it looks like Microsoft has disabled **all**
functionality for inline assembly in 64bit editions of Visual C++!!!!
(Thanks again Microsoft, you just know where to strike hardest)

With all the mentioned challenges, it will take a couple of months to
get things working reasonably stable. By that time, more people would
have switched to 64bit OSs. If we're even half right in our estimates,
Pcsx2 will run much faster on a 64bit OS than on a 32bit OS on the same
computer once x86-64 recompilation is done.

zerofrog,

**Moral of the blog** Most recompiler theory discussed here actually
comes straight from compiler theory. Compilers will always be necessary
as long as engineers keep coming with new instruction set architectures
(ISAs). Learn how a compiler works. I recommend [**Compilers:
Principles, Techniques, and
Tools**](http://www.amazon.com/Compilers-Principles-Techniques-Alfred-Aho/dp/0201100886/sr=8-2/qid=1162088515/ref=pd_bbs_2/002-1428306-8445667?ie=UTF8&s=books)
by Alfred V. Aho, Ravi Sethi, and Jeffrey D. Ullman.
