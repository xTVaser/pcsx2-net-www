---
title: "So Maybe It's About Time We Explained Vtlb"
date: 2009-02-13T00:00:00
summary: "Zerofrog documented the concepts of Virtual Memory a few years back. So now I figure it's VTLB's turn"
draft: false
tags:
  - devblog
mainAuthor: Jake Stine
aliases:
  - "/developer-blog/218-so-maybe-it-s-about-time-we-explained-vtlb"
  - "/developer-blog/218-so-maybe-it-s-about-time-we-explained-vtlb.html"
  - "/developer-blog/218-so-maybe-it-s-about-time-we-explained-vtlb.htm"
---

Zerofrog documented the concepts of Virtual Memory a few years back. So
now I figure it's VTLB's turn, since it's the new exclusive memory model
used in current AVNs and any future releases.

So what is VTLB? VTLB stands for Virtual Translation Look-aside Buffer,
which for most of us is a lot of common everyday words that, when put
together like that, don't mean much at all.

Firstly, the memory model names VM and VTLB refer to the systems in
place inside PCSX2 for emulating the Playstation2's memory, and don't
actually refer to what's being emulated. In fact, neither VM or VTLB
builds emulate the PS2's own TLB memory model, which can be misleading
since VTLB contains the letters "TLB." The VM build was incapable of
emulating the PS2's TLB without significant speed penalties and
complications. VTLB on the other hand has the potential to emulate the
PS2 TLB, but we haven't added functionality for it since it also depends
on some other not-yet-complete areas of emulation (namely MIPS TLBMiss
exceptions). As Zerofrog explained in an earlier blog, very few games
utilize the TLB features of the PS2 anyway, so it's pretty much at the
bottom of our wishlist at this time.

Conceptually, VTLB is surprisingly simple. It works by building a
look-up of the PS2's physical memory on a per-page basis, and then
defining actions or "handlers" for some pages, and defining other pages
as "direct access" (fast mode). A page of memory is 4096 bytes long, so
the PS2's 32Meg physical address space translates into 8192 total pages
of memory, which ends up being a pretty small and efficient size as far
as lookup tables are concerned. By comparison the current EErec uses a
lookup table with *8 million entries* !

So when a PS2 instruction performs a memory operation (usually referred
to as a memOp), the VTLB grabs the lookup address. If the address has
the "special handler" bit set, it routes to that handler. If the handler
bit is not set, the address is treated like a normal pointer to physical
memory. As an optimization, VTLB uses the sign bit of the 32 bit address
for the purpose of differentiating handled memory pages from direct
memory pages.

The pseudo-code looks like this, as performed for a write memOp:

```cpp
uint page = ps2_addr/4096;
uptr pc_addr = vtlb_lookup[page];
if( pc_addr & 0x80000000 ) // sign bit check
  *pc_addr = data;
else {
  handler[page]( ps2_addr, data );
}
```

By default, Pcsx2 utilizes the VTLB's handlers for several areas of Ps2
memory that hold hardware registers. Hardware registers are memory
addresses that control the whats, whens, and hows of the Ps2 -- write to
a specific memory address and the PS2 starts a DMA transfer, or changes
the video mode, or plays a new audio sample. These writes have to be
intercepted and handled by the emulator. The VTLB allows us to do that
very efficiently.

The reason why VTLB is able to emulate the PS2's own TLB is thanks to
the handlers, which can remap memory anywhere at any time, with any set
of permissions. If a game decided to remap some pages of memory to a
different virtual address, those pages would have the "handler bit" set
TRUE, and then the handler for those pages would be instructed to remap
the memOp to the appropriate physical address.

Thus, the flow would be as such:

**Ps2\_Virtual\_Address -&gt; VTLB\_Lookup -&gt; Handler -&gt;
Ps2\_Physical\_Address**

The benefits of this model are three-fold: efficiency, extensibility,
and ease of debugging. If a game doesn't use the Ps2's TLB, then the
VTLB will simply use direct memOps (fast!). If a game does happen to use
the TLB, then VTLB can remap the memory as needed, allowing that game to
emulate correctly also without having to needlessly burden other games
with the overhead of virtual memory remapping logic. And to top it all
off, handler mappings can be traced and dumped quickly and easily at any
stage of emulation.
