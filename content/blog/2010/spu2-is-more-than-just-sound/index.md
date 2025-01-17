---
title: "SPU2 Is More Than Just Sound"
date: 2010-03-22T00:00:00
summary: "The SPU2 is the Sound Processing Unit for the Playstation 2, and works a lot like the sound card in your own PC"
draft: false
tags:
  - devblog
mainAuthor: Jake Stine
aliases:
  - "/developer-blog/199-spu2-is-more-than-just-sound"
  - "/developer-blog/199-spu2-is-more-than-just-sound.html"
  - "/developer-blog/199-spu2-is-more-than-just-sound.htm"
---

The SPU2 is the *Sound Processing Unit* for the Playstation 2, and works
a lot like the sound card in your own PC; albeit still quite unique in
its approach to mixing sounds/voices and the programmable interface it
provides for that. But the SPU2 is more than just sound. It's one of the
more reliable timing mechanisms on the PS2 and games tend to use it as
such. Without at least basic SPU2 emulation, no games will boot at all.
This isn't too surprising if you understand how console hardware
typically works, but what might be surprising is realizing how many
games won't boot even with what *appears* to be fairly competent SPU2
emulation.

Until SPU2-X 1.4, no SPU2 plugin had gone the distance on implementing
**IRQs** ( *Interrupt Requests* ). IRQs are scheduled via specific SPU2
memory addresses. When a marked memory address is accessed *anywhere* in
SPU2 memory (either read or write), the IRQ is signaled to the IOP. The
most important IRQs on DMAs and audible voice playback have been
supported for eons; without these no games would boot, period!
Meanwhile, many of the lacking IRQ checks were known, but glossed over
because of overhead required for the checks (a couple other checks were
simply overlooked). The three main culprits for causing emulation errors
were as follows:

1) the "free run" feature of SPU2 voices.
2) the write-back areas for each core's mixed output.
3) Reverb Processing, which uses a series of overlapping buffers to
generate feedback.

**Free Running Voices**

The SPU2 has 48 total voices (24 voices for each core), plus two
dedicated streaming audio input sources. Each voice can play a sound
effect or stream audio, and can either be stopped, looping, or 'free
running.' Free running voices typically zero out their volume rather
than stopping or looping, and continue to 'play' forever (albeit
silently). These free running voices access inaudible areas of SPU2
memory and thus trigger IRQs unexpectedly -- except, of course, some
games are cleverly designed to expect these unexpected IRQs!

Because of the overhead required to free-run otherwise silent voices,
all other SPU2 plugins (until now!) have opted to ignore processing
them. This is the feature that fixes Fatal Frame 2 (Project Zero 2) and
a dozen more games.

**Output Write-back Areas**

The SPU2 defines a handful of special areas of memory where it writes
back sound data at various stages of the mixing process. It's perfectly
legal for a game to set an IRQ address within these buffers, and then
expect it to trigger when the SPU2 does its write-back to that address.
The write-back areas are mapped as follows:

```cpp
0x0400 - 0x05FF  :  Core 0, Voice 1
0x0600 - 0x07FF  :  Core 0, Voice 3
0x0800 - 0x09FF  :  Core 0 Output (Left) [includes Wet/Dry/ADMA sources]
0x0A00 - 0x0BFF  :  Core 0 Output (Right) [includes Wet/Dry/ADMA sources]
0x0C00 - 0x0DFF  :  Core 1, Voice 1
0x0E00 - 0x0FFF  :  Core 1, Voice 3

// Following are results of mixing all 24 voices for the given Core.

0x1000 - 0x11FF  :  Core 0, Dry Mix (Left)
0x1200 - 0x13FF  :  Core 0, Dry Mix (Right)
0x1400 - 0x15FF  :  Core 0, Wet Mix (Left)
0x1600 - 0x17FF  :  Core 0, Wet Mix (Right)
0x1800 - 0x19FF  :  Core 1, Dry Mix (Left)
0x1A00 - 0x1BFF  :  Core 1, Dry Mix (Right)
0x1C00 - 0x1DFF  :  Core 1, Wet Mix (Left)
0x1E00 - 0x1FFF  :  Core 1, Wet Mix (Right)
```


In specific, some games set an IRQA for Core0's write-back area. The IRQ
can either be used as a timing mechanism, or as a synchronization point
for post-processing audio effects. Most SPU2 plugins properly handled
the write-backs, but overlooked the necessity of doing IRQ checks for
them.

**Reverb Processing**

The SPU2 employs a clever reverberation algorithm that utilizes multiple
overlapping read and writeback buffers within SPU2 memory to generate
feedback. Each step of the reverb process accesses memory and must test
against the IRQ address; for a grand total of 24 IRQ tests per Core.
Fortunately, all reverb activity occurs within a specified area of SPU2
memory, so for most games a single simple test can be used to exclude
the IRQ test.


**And It All Applies to SPU2null!**

This is the boring part that I'm going to look to implementing soon: In
order for SPU2null to be fully emulation-compliant, it must properly
simulate *all* of these things, which basically means it needs to have a
complete sound mixer implemented; including reverb buffering/addressing
logic. It probably seems silly, but SPU2null would still be without any
platform dependent code or sound drivers, making it an ideal base for
emulation analysis and as a base for future plugins.
