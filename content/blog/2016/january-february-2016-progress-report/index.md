---
title: "January - February 2016 Progress Report"
date: 2016-03-02T00:00:00
summary: "Hello everyone and welcome to another glorious PCSX2 progress report!"
draft: false
tags:
  - "progress-report"
mainAuthor: bositman
aliases:
  - "/274-jan-feb-2016-progress-report"
  - "/274-jan-feb-2016-progress-report.html"
  - "/274-jan-feb-2016-progress-report.htm"
---

![](./img/progress-rep-1-2-2016.jpg)

Hello everyone and welcome to another glorious PCSX2 progress report!
This time we've got a lot of GSdx improvements to share with you. We
also have an announcement regarding the progress reports.

Those of you who have been following them probably know that we've been
a little late with them pretty much every time. The reason for this is
lack of manpower - for the most part, the same people that work on the
emulator itself write the progress reports. Because of that there are
many times when they'd rather spend their free time improving the
emulator rather than writing about the improvements. With this in mind
we have decided that from now on *our progress reports will be released
every three months* .

This will enable us to release higher quality progress reports as well
as dedicate more time to development.
If you wish to follow development more closely then you can always check
out what's going on over at [Github](https://github.com/PCSX2/pcsx2) .

Now with that out of the way, let's get down to it!

## GSDX-OpenGL: Fast accurate blending
- by [Gregory](https://github.com/gregory38) and [Turtleli](https://github.com/turtleli)

As most of you know, Blending Unit Accuracy is an option where a SW
blending unit is emulated through the fragment shader with the intent of
reproducing the blending unit output of the GS. This option fixes
blending issues in a lot of games - Valkyrie Profile 2, Rule of Rose and
Bakugan Battle Brawlers are examples. One of the major disadvantages of
this from a user perspective is that increasing the accuracy increases
the demand on the system. In a worst case scenario this can drop
performance well below an acceptable level.

Two reasons why poor performance was observed on some games while using
accurate blending:

-   Primitives being drawn one by one when any primitive overlap is
    detected
-   The GPU Texture Cache needs to be flushed at each instances of
    reading a target.


<span style="font-weight: bold;"> Turtleli </span> fixed the first issue
by reworking the code so that non-overlapping consecutive sprite
primitives are drawn together when sprite overlap is detected, which can
greatly reduce the number of barriers used and therefore improve
rendering speed when accurate blending is enabled.

<span style="font-weight: bold;"> Gregory </span> has tackled the second
issue by not flushing the texture cache between primitives when we are
emulating the Frame buffer mask on an alpha channel. Normally if you
don't flush the cache you wouldn't know what you're reading - it could
be an old cached value or it could be a value written in the render
target or it could even be something undefined. Fortunately the
"Undefined" case is rather unlikely as read and write paths are
separated for performance and memory is designed to handle both
read/write at the same time/same address.

In the end, it all comes down to the case of "Cached value" VS "Current
value". In order to generate an effect, the fragment shader needs to
read the masked bits and then merge them with the new alpha value. Since
the alpha channel isn't blended (due to GS limitations), the masked bits
in the target are constant. This also means that said bits are the same
in the cache (which contains the value of rendering target at a random
time). Because of this we don't care which data is read, cached or not,
the required bits will be the same. This provides a significant increase
at speed on games like <span style="font-style: italic;"> Xenosaga
</span> .

<span style="font-weight: bold;"> Note: </span> The former slow method
of accurate blending can still be used by enabling "Safe Accurate
blending" on HW hacks. ( useful for checking on regressions caused by
the current fast blending)

|      **Game**      | **Blending unit accuracy \[disabled\]** | **Blending unit accuracy \[medium\] (before)** | **Blending unit accuracy \[medium\] (now)** |
|:------------------:|:---------------------------------------:|:----------------------------------------------:|:-------------------------------------------:|
|      Xenosaga      |                   172                   |                       36                       |                     153                     |
| Zone of the Enders |                   172                   |                       27                       |                     156                     |

<span style="color: #3a90dc;"> <span style="font-size: large;"> Speed
impact of Fast accurate blending </span> </span>



## GSDX-OpenGL: Depth buffer lookup optimization
- by [Gregory](https://github.com/gregory38)

The Graphics synthesizer (GS) is allowed to overlap the depth buffer and
the color buffer. In order to support it on a standard PC GPU, HW depth
was created to convert between the depth and color format which resolves
tons of issues related to the depth textures. Unfortunately it is quite
costly on performance.

After some observations, it was found that at several instances the
depth buffer is useless, not read, not written. GSdx was updated to not
handle the depth buffer when it isn't used by the game. It removes most
of the overhead of the HW depth option on games like Tekken 5.

| **Game** | **HW depth \[disabled\]** | **HW depth \[enabled\] (before)** | **HW depth \[enabled\] (now)** |
|----------|:-------------------------:|:---------------------------------:|:------------------------------:|
| Tekken 5 |            215            |                32                 |              205               |

<span style="color: #3a90dc;"> <span style="font-size: large;"> Speed
impact of depth buffer lookup optimization </span> </span>



## GSDX-FX: Post-Processing updates
-  [Asmodean](https://github.com/Asmodean)

Asmodean has updated his effects suite with improved cel edges of the
cel shader and a new debanding shader along with Timothy Lottes' CRT
emulation shader.

Here are some comparison screenshots showing the effect of the CRT
emulation shader:

{{< img-cmp-slider before="./img/gundam-noshader.png" after="./img/gundam-shader.png">}}

{{< img-cmp-slider before="./img/dmc3-noshader.png" after="./img/dmc3-shader.png">}}


## GSDX: Proper handling of 576P/720P/1080I video modes
- by [ssakash](https://github.com/ssakash)

<span style="font-weight: bold;"> 1080P (before/after) </span>

{{< img-cmp-slider before="./img/height-broken.png" after="./img/height-fixed.png">}}

> Note: This screenshot is of an ELF file called "Video mode test" which was designed to observe the Display/SMODE registers value changes at each video modes.

<span style="font-weight: bold;"> Gitaroo Man \[PAL\] (before/after) </span>

{{< img-cmp-slider before="./img/gitarooman-broken.png" after="./img/gitarooman-fixed.png">}}

>  Note: The NTSC version of Gitaroo Man didn't suffer the following issue since it uses a height of 448 whereas the PAL version uses 576.

The physical display dimensions (CRTC size) of the video modes can be
found using the value of the following display registers:

-   DW - Display Width
-   DH - Display Height
-   MAGH - Horizontal Magnification factor
-   MAGV - Vertical Magnification factor


The width and height are calculated by the formula <span
style="font-weight: bold;"> (DW+1) / (MAGH + 1) </span> and <span
style="font-weight: bold;"> (DH+1) / (MAGV + 1) </span> respectively.
Different video modes use different magnification factors and it depends
on the game as well.

Previously there was a saturation limit for display height (DH) as it's
generally not higher than 640 for NTSC / PAL video modes. However, that
wasn't the case for other VESA/DTV (576P,720P...1080I) video modes since
they utilize a bigger display height (DH) and scale it according to the
magnification factor. To solve this, the saturation limit is ignored for
video modes other than NTSC/PAL as those do have the possibility of
producing a higher DH value. The check was ultimately placed on CRTC
height instead of DH to avoid any possible conflicts with the vertical
magnification factor scaling.

Another part of the fix was to prevent a bad division of height when the
<span style="font-weight: bold;"> INT </span> and <span
style="font-weight: bold;"> FFMD </span> register values were set.
Previously the code did the division twice since we were receiving the
height of the device size instead of the display rectangle. We don't
need to divide once again as device size already goes through the
halving of height when the respective register values are set.


## PCSX2: GUI Improvements
- [ssakash](https://github.com/ssakash), [Turtleli](https://github.com/turtleli) and [NZJenkins](https://github.com/NZJenkins)

-   Console Window: Improved size handling and better autodock behavior
    when maximized.
-   Console Window: make enable/disable/restore defaults affect all menu
    items.
-   Debugger: proper deletion of breakpoint when multiple breakpoints
    are present.
-   Debugger: prevent unexpected resuming when stepping into/over
    disabled breakpoints.
-   Debugger: stepout works without any preceding step in / step over.
-   GSFrame: Resolution is displayed at titlebar with respect to
    upscaling value.
-   VideoPanel: Better gray out of dialog elements.


## PCSX2-Auto test suite
- by [Gregory](https://github.com/gregory38), [Rama](https://github.com/ramapcsx2) and [Refraction](https://github.com/refractionpcsx2)

The [PS2 Autotests](https://github.com/unknownbrackets/ps2autotests) is
a repository created by [Unknown
brackets](https://github.com/unknownbrackets) .

PS2 Autotests consists of multiple small programs for the PS2 with each
one being a different test. It tests certain things and then simply
writes out a log of what it did and what happened when it did those
things. These tests are run on real hardware and then we save that
log.

After that an emulator can execute the same small program and get its
own log. If what happened on the real hardware is different from what
happened in the emulator then guess what? You've got a bug, or at least
a potential problem. Even better, it's quite easy to reproduce.

Gregory has recently added a perl script which makes it easier to run
such tests and allows faster debugging for the developers - these tests
have already helped our developers fix a couple of issues. (few of them
are listed below for reference)

-   [EE-Interpreter: Fix a subtle bug in a
    QFSRV](https://github.com/PCSX2/pcsx2/commit/46a2f6ed24067dfdc2002ff9a1a365d941ff7779)
-   [IOP: Fix MTLO
    Instruction](https://github.com/PCSX2/pcsx2/commit/ba62ce9e933499f94a613f34a0a02361fd870fc6)
-   [DMAC: Most significant bits of MADR is fixed to 0 in 8/9
    channels](https://github.com/PCSX2/pcsx2/commit/5efbf2a8023432d4ff6f9564e77eda7714c4f91d)
-   [Vif-Recompiler: Fix skip size
    calculation.](https://github.com/PCSX2/pcsx2/commit/cf993c2a3632a6371fc807da1ee6b945ccca5b9d)
-   [Vif-Recompiler: Proper handling when domode is set
    to 3.](https://github.com/PCSX2/pcsx2/commit/e5e0f85b50feb943e761944ca4a368402a1600f2)


## PCSX2-Vector Units: Scarface I bit hack
- by [Refraction](https://github.com/refractionpcsx2)

<span style="font-weight: bold;"> Scarface - The World is Yours </span>
has a certain way of doing it's vector programs which is a pain for
recompilers, most games upload a program with specific instructions to
process vectors in a set of order with a common outcome. However the
following game does things a little bit differently, instead of having a
vector program for certain processes and then just changing the input
data, scarface constantly changes what is known as the <span
style="font-weight: bold;"> I bit </span> in its VU program.

The issue here is that the recompiler creates a hexadecimal hash of the
entire program, one little change to the program (in this case, an I bit
value in place of an operation code) and then the hash changes
completely, telling the recompiler that this is a new program and not
the same one it had previously recompiled, so it recompiles it over and
over again until it runs out of memory.

To workaround the following issue, a new hack was added to check for the
status of the I bit value and then avoid constant recompilation when
only the I bit value has been changed at the specific address. Maybe in
the future we can deal with this in a accurate way, but it's not an easy
thing to check without compromising on speed.

This is an optional hack which can be found under the <span
style="font-weight: bold;"> Gamefixes </span> tab of the emulator as it
is slower to handle things this way and is quite specific, but it was
requested by quite a few users, so we obliged!


## LilyPad: Add Pop'n Music controller support
- by [ekudritski](https://github.com/ekudritski)

{{< img cols="6" src="./img/lilypad-pop-n-music.png">}}

Native support for the <span style="font-weight: bold;"> Pop'n Music
controller </span> has been added to LilyPad. Several users had
requested this feature since a few games rely on said controller and
it's quite hard and troublesome to simulate the behavior of the
controller using macros and third party programs.

That was it for these 2 months!. The next report will come around June,
but hopefully we will show signs of life before that

As always, check out our [github
repository](https://github.com/PCSX2/pcsx2) for daily updates to PCSX2.
