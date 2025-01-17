---
title: "PCSX2 Development Picks Up Speed"
date: 2014-09-09T00:00:00
summary: "After a brief period of slowed development, PCSX2 has started picking up speed again with the help of new contributors as well as familiar faces"
draft: false
tags:
  - devblog
mainAuthor: bositman
aliases:
  - "/260-pcsx2-development-picks-up-speed"
  - "/260-pcsx2-development-picks-up-speed.html"
  - "/260-pcsx2-development-picks-up-speed.htm"
---


After a brief period of slowed development, PCSX2 has started picking up
speed again with the help of new contributors as well as familiar faces.
Several important improvements have been made since the last
announcement.

The most important of these improvements is undoubtedly the new
debugger. Our debugger has long been an area in need of attention, and
thanks to [Kingcom](https://github.com/Kingcom) it has finally received
a much needed overhaul. This new debugger will make it much easier to
chase down the problems in broken games. Rama has already managed to get
the NHL series working by using it! Featuring a live instruction
assembler, thread view, full register view, a function list and more,
this improved debugger will certainly be a boon for our developers.

Another area that has received welcome attention is work towards 64 bit
compatibility. Although there is still a lot of work to be done before
we release a 64 bit build, the foundation has been laid. GSdx compiles
for x64 now, and several key changes have been made to the PCSX2 core to
support x64 as well. These changes include preparing the emitter for 64
bit jumps, updating vtlb to work on x64, and changing instances of 32bit
only code to be universal. These improvements help move us closer to
having a true 64 bit build.

Linux matters have improved as well. Many of the new contributors use
that OS instead of Windows and improvements here always help general
portability in the long run.

Lastly, a few important changes have been made to some of the plugins.
On top of general bug fixes, CDVDgigaherz now tries to keep the disc
always spinning at a low speed instead of letting the drive spin all the
way down. This improves game performance when using a physical disc
because the drive is always ready to provide data. Lilypad also supports
hot-plugging of Xinput devices now. That means if you forget to plug in
your Xinput device before starting PCSX2, it will recognize it when it
is plugged in without requiring a restart.

Here is a rundown of the most significant changes:

64 bit related:

-   Changed instances of u32 to uptr
-   Prepared emitter for 64 bit jumps
-   Made yuv2rgb and hashmap functions 64 bit ready
-   vtlb now works on on x64
-   Supported grabbing the MXCSR mask on x86_64 in cpudetect
-   GSdx now compiles for x64

VIF:

-   Fixed Looney Tunes: Back in Action


Improved Debugger:

-   Allows much easier debugging of broken games
-   Already used to get NHL games working
-   Features a live assembler (e.g. mark an instruction, type nop to
    replace that instruction with nop)

Plugins:

-   Bug fixes for CDVDgigaherz
-   CDVDgigaherz now prevents the drive from spinning all the way down
    which improves performance when playing from disc
-   Lilypad supports hot-plugging of Xinput devices

Code cleanup:

-   Changed int to bool for variables that only hold 0/1
-   Fixes for potential crashes
-   Fixes for potential variable leaks
-   Preparation for WX3 (for now we still use a custom 2.8)
-   Removed managed Vsync
-   Folder name fixes for Windows/Linux
-   Improved use of namespaces
-   Fixes for ELF parser
-   Started using generic memcpy instead of custom one(this actually
    brings a small speedup!)

Misc:

-   Updated translations for several languages

Check out the new debugger below:

{{< img cols="6" src="./img/debugger_s.webp">}}
