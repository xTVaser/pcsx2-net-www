---
title: "PCSX2 0.9.6 Released"
date: 2009-03-01T00:00:00
summary: "After nearly 16 months, here comes a new Pcsx2 version. Pcsx2 0.9.6"
draft: false
tags:
  - "progress-report"
mainAuthor: bositman
aliases:
  - "/121-pcsx2-0-9-6-released"
  - "/121-pcsx2-0-9-6-released.html"
  - "/121-pcsx2-0-9-6-released.htm"
---

After nearly 16 months, here comes a new Pcsx2 version. Pcsx2 0.9.6

These months were somewhat problematic for pcsx2, due to an initial
slowdown of the development process. Then, last fall, the Playground
branch was created, and development picked up again. Finally, with the
merge of Pcsx2 and Pcsx2 playground, the emulator's development
returned once again as it was before, and now we can give you a release
which should (we hope!) leave you happy.

We would like to thank everyone that was still waiting for a release,
and coming to our forums. We would also like to thank everyone to
encouraged and otherwise supported us. This release is especially for
you.

Important note: you NEED to update DirectX or you won't be able to use
the emulator! You can do it with either of the links below:
**[THIS](http://www.microsoft.com/en-us/download/details.aspx?id=35)**
--- DirectX End-User Runtime Web Installer
or
**[THIS](http://www.microsoft.com/en-us/download/details.aspx?id=19743)**
--- DirectX End-User Runtimes (March 2009)

What's new in 0.9.6?

- Huge rewrite, mainly from the new members of the Playground branch!
Too many speedups, optimizations and other fixes to write here! Many
famous games will now work.
- Dropped VM build replaced by the all new Vtlb, meaning no more
'Cannot allocate memory' errors at start up, more accurate emulation,
slightly lower speeds but with many optimizations to come
- Full memcard support, working in all games
- Improved Frameskip/VU-skip
- Special Game Fixes Section
- Advanced Options Section for custom tweaking VU/FPU behavior.
- Rewritten Multithreaded GS (MTGS) mode, with as much as 15% speedup
for HT machines (only 3-5% for Dual Core), and fixes many
instabilities.
- Improved VU/FPU Flags and Clamping support (helps fix odd behaviors
and SPS in some games)
- Improved EE/IOP synchronization (fixes many freeze-ups and vmhacks).
- Improved CDVD support.

The older versions will **NOT** be supported in our forums,so
0.9.4,0.9.5 and playground are not supported anymore
😊
