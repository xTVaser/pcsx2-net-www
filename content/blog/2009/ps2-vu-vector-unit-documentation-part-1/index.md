---
title: "Ps2 VU Vector Unit Documentation Part 1"
date: 2009-09-02T00:00:00
summary: "This begins a series of blog posts intended for ps2 developers and ps2 emu authors"
draft: false
tags:
  - devblog
mainAuthor: cottonvibes
aliases:
  - "/developer-blog/208-ps2-vu-vector-unit-documentation-part-1"
  - "/developer-blog/208-ps2-vu-vector-unit-documentation-part-1.html"
  - "/developer-blog/208-ps2-vu-vector-unit-documentation-part-1.htm"
---


This begins a series of blog posts intended for ps2 developers and ps2
emu authors.
Its purpose is to give some light to some of the secrets I've learned
about the VUs while developing my mVU recompilers, and to describe what
happens in situations that are a bit questionable.

All information has been at least somewhat tested, but of course there
may be some errors.
I should also mention that everything described here mVU implements in
some way (unless specifically noted otherwise).
I may even describe some tricks and clever optimizations I used in my
recompilers in future articles.

Since these articles are intended to describe advance secrets, I will
**not** bother to explain common concepts about the VUs, and reading
this implies you have at least an intermediate level of how the VUs work
or how to program for them.


**Note 1: VI lower instructions**

For lower opcode operations dealing with VI regs, there is a 5 bit range
for VI operands. But only VI regs 0 to 15 are accessible, for values
greater than 15, the value is ANDed with 0xf. So effectively there is
only a 4 bit range.
Example

```cpp
IAND: 1000000 | 0000 | it x 5 | is x 5 | id x 5 | 110100
```


If for 'id' we have '18', then the destination would be

```cpp
18 &= 0xf;
```

Resulting in the destination reg being vi02.

**Note 2: VI Reg Delays on Conditional Branches**

If a VI integer reg is modified before a conditional branch, the
previous value of the integer is used for the calculation.
This only applies to conditional branches, and not to jumps (JR/JALR).

Example:

```cpp
IADDIU vi05, vi00, 100
IBNE vi05, vi00 &lt; // ---- vi05's value is before the 100 was added
```


The only exception to this are Flag reading lower instructions
(FSxxx/FMxxx/FCxxx). In those cases the current value is read.

```cpp
FSAND vi05, 0xfff
IBNE vi05, vi00 &lt; // ---- vi05's value is the Status Reg
```

The situation becomes complex however when a VI reg is read AND written
to in a sequence of instructions.

```cpp
IADDIU vi05, vi00, 100
IADDIU vi05, vi05, 100
IADDIU vi05, vi05, 100
IADDIU vi05, vi05, 100
IBNE vi05, vi00 &lt; // ---- vi05's value is before any 100 value was added. (the value before the first IADDIU)
```

When a VI reg is first written to, a 'chain' starts, and then if the
next instruction reads AND writes to the same VI reg, the chain
continues. It does this for a maximum of 4 instructions (the example
above is the maximum). Then when the branch comes, the value that should
be read is the value before the chain!

In a few games this commonly happens with a sequence of SQI
instructions, and improperly emulating this causes problems.

It should also be noted that this behavior also occurs through branches.
For example, Champions Return to Arms does something especially evil to
emulate correctly (mVU does however emulate it correctly).

It does:

```cpp
[08b0] (000002ff) NOP
[08b0] (100310fb) IADDIU vi03, vi02, 251
[08b8] (000002ff) NOP
[08b8] (81e2a37d) SQI.xyzw vf20, vi02++
[08c0] (000002ff) NOP
[08c0] (81e2ab7d) SQI.xyzw vf21, vi02++
[08c8] (000002ff) NOP
[08c8] (81e2b37d) SQI.xyzw vf22, vi02++
[08d0] (000002ff) NOP
[08d0] (520317fc) IBNE vi03, vi02 [08b8]
[08d8] (000002ff) NOP
[08d8] (81e2bb7d) SQI.xyzw vf23, vi02++
```


The first time the above block of code is run, the IBNE value for vi02
is the same value as it's value at \[08b0\] (before the chain starts).
Next (assuming the branch is taken), the delay slot is ran and a NEW vi2
chain begins. When the vi2 is read on the second loop, it should be the
value vi2 had BEFORE \[08d8\]. So it reads the result of \[08c8\] from
the first loop! (Remember these chains last for 4 instructions maximum,
so it makes sense when you think about it).

Currently I'm not 100% sure what happens if a stall occurs in one of
these VI chains, but I'm 95% sure it breaks the chain, making it start
on the instruction where the stall occurred (wouldn't make sense
otherwise).

**Note 3: ADD/SUB Precision and Normalization**

When performing ADD/SUB operations, the ps2 VU's and the FPU act closely
to SSE's "Round to Zero" mode (but of course they don't support
INF/NaNs).
Triace games however rely on bit-accurate ADD opcodes (ADDI
specifically) to boot (presumably due to some decompression algorithm or
an encryption key).

Nneeve found out the VU's act as if they have only 1 guard bit during
mantissa normlization (as opposed to SSE which uses 3 guard bits that
STILL appear during normalization when using Round to Zero in add/sub
SSE instructions).

By using a custom ADD routine Nneeve wrote that simulates only 1 guard
bit during single-precision float mantissa normalization, pcsx2 is able
to boot and run Triace games with a playable status. (Refer to pcsx2's
source for the custom routines)

**Note 4: MAX/MINI with Denormals**

The ps2's Max and Min logic compares and transfers denormals to the
result, as opposed to SSE with DaZ On which will treat any Denormal as
Zero and just transfer Zero as the result.
Example:

```cpp
MAX vf02.x, vf00.x, vf01.x
```


Assuming vf01.x holds a positive denormal, the result in vf02.x will be
that same denormal.
Using SSE with DaZ however will just make the result '0' in that case
(which is incorrect).

Some games rely on this correct behavior for MAX/MINI or else have
graphical problems

<span style="color: #1e90ff;">
**Big Special thanks to:** </span>
Nneeve, Tmkk, Rama, and ZeroFrog who all helped in finding some of the
secrets described in this documentation.
