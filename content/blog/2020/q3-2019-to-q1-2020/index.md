---
title: "Progress Report - Q3 2019 To Q1 2020"
date: 2020-05-07T00:00:00
summary: "Progress Report - Q3 2019 To Q1 2020"
draft: false
tags:
  - "progress-report"
mainAuthor: lightningterror
secondaryAuthors:
  - turtleli
  - PSI
aliases:
  - "/292-progress-report-q3-2019-to-q1-2020"
  - "/292-progress-report-q3-2019-to-q1-2020.html"
  - "/292-progress-report-q3-2019-to-q1-2020.htm"
---

<div style="text-align:center;">

</div>

![progrepq32019q12020](./img/progrepq32019q12020.webp)

# GSdx Improvements

## Hardware rendering improvements for all renderers:**

{{< progress/github-link prNums="3018" title="Improve search/invalidate texture in render target by correctly matching vertex offsetted draws with buffer offsetted reads in the texture cache" authors="AlessandroVetere" >}}

This
behavior is enabled by default in Jak games to fix the Black Eye
rendering.

{{< img-cmp-slider before="./img/gsdx-3018-before.webp" after="./img/gsdx-3018-after">}}

{{< progress/github-link prNums="3001" title="Implemented Software Sprite Renderer feature which allows to CPU emulate (SSE accelerated) certain sprite draws directly from the HW renderer" authors="AlessandroVetere" >}}

This bypasses GPU
draw and texture cache mechanism. So far, its used to properly render
the palettes used in Jak games and remove previous inaccurate hacks that
dont do it correctly due to existing issues in texture cache. This
caused it to be much slower due to the required framebuffer readback to
get the drawn palette from GPU to CPU. There are plans to implement the
feature in other games such as DBZ BT2.

{{< img-cmp-slider before="./img/gsdx-3001-before.webp" after="./img/gsdx-3001-after.webp">}}

{{< progress/github-link prNums="3036" title="Added a dedicated fix for Big Mutha Truckers which allows to render the shadows properly" authors="lightningterror" >}}

This also allowed us to reduce the crc hack level so there are less effects skipped

{{< progress/github-link prNums="2998" title="Added a dedicated fix for Sonic Unleashed" authors="lightningterror" >}}

This allows it to render shadows properly. This also allowed us to remove crc hacks which previously skipped the incorrectly rendered effects.

{{< img-cmp-slider before="./img/gsdx-2998-before.webp" after="./img/gsdx-2998-after.webp">}}

{{< progress/github-link prNums="2993" title="Sprite Hack has been completely removed" authors="KrossX,lightningterror" >}}

It is no longer needed and is replaced by far better alternatives.

By continuing on our quest of removal obsolete hacks, there have been more CRC hacks
removed which were no longer needed; as the emulator can now properly
render these effects.

## Hardware rendering improvements for Direct3D10/11:

{{< progress/github-link prNums="3091" title="The TFX shader on Direct3D10/11 has been rewritten to match OpenGL code and its' accuracy for certain effects" authors="KrossX" >}}

With this in mind, a lot of games should see
improvements in rendering. Examples include: Silent Hill 4 having
shadows rendered properly, DBZ BT2 having more accurate bloom/blur
rendering, and Resident Evil 4's inaccurate fog rendering. Other games
may be affected as well

{{< img-cmp-slider before="./img/gsdx-3091-after.webp" after="./img/gsdx-3091-after1.webp">}}

{{< progress/github-link prNums="3003" title="Blend no Barrier has been ported from OpenGL to Direct3D 10/11" authors="lightningterror" >}}

As with previous blending
ports, this improves rendering blending effects across many games that
use them. Some examples include: Dragon Quest, Star Wars Battlefront 2,
and God of War. In the case of Dragon Quest, it renders glowing effects.
In SW mode, Battlefront 2 renders the window colors more accurately. For
God of War, it bypasses slower, HDR colclip algorithm which is a bit
slower, thus gaining some fps. Feature needs at least Basic Blending
enabled for it to be properly rendered.

{{< img-cmp-slider before="./img/gsdx-3003-before.webp" after="./img/gsdx-3003-after.webp">}}

# Core Improvements

## Recompiler

{{< progress/github-link prNums="3172" title="DI execution is delayed by one instruction" authors="refractionpcsx2,PSI-Rockin" >}}

Fixes booting issues in the following games:
Jak X, Namco 50th anniversary, Spongebob the Movie, Spongebob Battle for
Bikini Bottom, The Incredibles, The Incredibles rize of the underminer,
Soukou kihei armodyne, Garfield Saving Arlene, Tales of Fandom Vol. 2.
For more technical information what the changes do see
[this](https://github.com/PCSX2/pcsx2/pull/3172#issuecomment-568205531)
post.

## Counters

{{< progress/github-link prNums="2835" title="Reverted back to older VRender/VBlank timings" authors="FlatOutPS2,turtleli" >}}

This fixes timing issues in Dynasty
Warriors 3 Xtreme Legends (fake save corruption), Jak II (random speedup
issues) and Shadow of Rome (FMV audio issues).

## IPU

{{< progress/github-link prNums="3119" title="Partially fixed IPU pack command" authors="turtleli" >}}

The Image Processing Unit (IPU) pack command is capable of
converting 32-bit RGB data to either 16-bit RGB data or 4-bit indexed
RGB data. Due to the lack of games that actually use this command, it
was not noticed that the code was attempting to convert from YCbCr data
instead of from 32-bit RGB data.

Everyone loves pachinko... right?. Hisshou Pachinko PachiSlot Kouryaku
series uses the IPU colour space conversion (CSC) command to convert
YCbCr data to 32-bit RGB data. The IPU pack command is then used to
convert the resultant 32-bit RGB data to 16-bit RGB data. The IPU CSC
command, however, is capable of converting directly from YCbCr data to
16-bit RGB data...

So, thanks to some unusual test cases, the IPU pack command has now been
partially fixed (the conversion to 4-bit indexed RGB data is still
unimplemented due to a lack of test cases).

{{< img-cmp-slider before="./img/core-3119-before.webp" after="./img/core-3119-after.webp">}}

## Other

{{< progress/github-link prNums="3063" title="Fixed the emulator hanging when pressing F4 too fast when toggling the Frame Limiter in some occasions" authors="KrossX" >}}

{{< progress/github-link prNums="3072" title="Fixed the emulator hanging when pressing F9 to toggle rendering between Hardware and Software in some occasions" authors="KrossX" >}}

{{< progress/github-link prNums="3052" title="Fixed the emulator hanging when pressing F9 to toggle rendering between Hardware and Software mode too fast" authors="KrossX" >}}

{{< progress/github-link prNums="3013" title="First Time Wizard now properly selects the correct GSdx plugin based on the highest instruction set supported by the CPU" authors="KrossX" >}}

{{< progress/github-link prNums="3135" title="Improved pointer patch command handling" authors="Some1fromthedark" >}}

The parsing for pointer patch commands, which
copies a value to the address stored in another memory address, has been
improved. It now properly handles the case where the value is 0 and no
longer terminates early when multiple offsets are specified.

{{< progress/github-link prNums="3059" title="GSdx Hardware hacks GUI has been updated to improve usability" authors="lightningterror" >}}

{{< progress/github-link prNums="3059" title="PCSX2 GUP DPI scaling has been improved" authors="lightningterror,turtleli" >}}

# SPU2-X Improvements

{{< progress/github-link prNums="3030" title="Fixed the noise generator outputting 4.8 kHz tone instead of white noise" authors="monster860" >}}

Known affected games so far are: Ape Escape 3, Ratchet and Clank 1, and Neopets The Darkest Faerie.

# CDVD Improvements

{{< progress/github-link prNums="3051" title="PCSX2 now ignores non-existent disc sector reads" authors="turtleli" >}}

Some games attempt to read disc sectors that do not exist. PCSX2 would
fail at loading most of these games when these sectors are read. By
changing the disc reading code to ignore requests to read the
non-existent disc sectors, PCSX2 now manages to load the affected games
successfully.

# GameDB Improvements

As usual, weve updated our GameDB with hundreds of new changes
containing added or removed gamefixes that can be enabled with Automatic
Gamefixes. This should greatly improve and ease configurations for our
users as they don't need to trouble themselves with searching and
manually applying gamefixes and patches for the games that require them.

# True Crime: Streets of L.A. (patched)

True Crime: Streets of L.A. hasnt been playable until recently. After
several days of reverse-engineering the game, PSI (the developer of
[DobieStation](https://github.com/PSI-Rockin/DobieStation) ) figured out
what was going wrong and applied a patch to it. The game relies on
undefined behavior in certain SIF DMA transfers. SIF DMA is how the
Emotion Engine (EE) and Input/Output Processor (IOP) communicate with
each other. For example, if a game wants to read something from the
disc, it will send a read disc command through SIF1. The IOP will
process this command and send a reply through SIF0.

One quirk is that EE DMA transfers in quadwords (16 bytes) at a time,
whereas IOP DMA transfers in words (4 bytes) at a time. So what happens
when the IOP wants to send 3 words of data? This is 12 bytes, which is
not enough for a quadword. There is no documentation on this behavior,
other than garbage being sent after the 3 words. PCSX2 handles this by
appending zeros to the data. Unfortunately, True Crime stores important
initialization variables right next to the reply buffer on the EE side.
PCSX2s behavior caused these variables to be reset to 0, which makes
True Crime reinitialize its DVD streaming library. When this happens,
the game promptly crashes after trying to stream data from the disc.

So how do you properly handle this? We have not confirmed this on
hardware, but it appears the correct behavior is to append the oldest
values from previous transfers. This makes sense when you consider that
SIF has its own FIFO to store data. If 3 words are sent, the 3 words
will be popped along with the oldest value still in the FIFO to create a
quadword. PSI has stated that he has chosen to patch the game instead
because he is not comfortable implementing this, as there is a potential
to break something else. The patch forces the game to use a different
method of transferring streaming commands. This is important as the
reply buffer here is in a different region of memory, so the
initialization variables mentioned above will not be overwritten.

NOTE: The patch is currently only for NTSC-U. Other patches will be made
on demand.
