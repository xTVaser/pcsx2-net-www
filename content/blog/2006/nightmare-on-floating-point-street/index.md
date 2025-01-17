---
title: "Nightmare On Floating Point Street"
date: 2006-07-24T00:00:00
summary: "It is very hard to emulate the floating-point calculations of the R5900 FPU and the Vector Units on an x86 CPU because the Playstation 2 does not follow the IEEE standard"
draft: false
tags:
  - devblog
mainAuthor: ZeroFrog
aliases:
  - "/developer-blog/232-nightmare-on-floating-point-street"
  - "/developer-blog/232-nightmare-on-floating-point-street.html"
  - "/developer-blog/232-nightmare-on-floating-point-street.htm"
---

It is very hard to emulate the floating-point calculations of the R5900
FPU and the Vector Units on an x86 CPU because the Playstation 2 does
not follow the IEEE standard. Multiplying two numbers on the FPU, VU,
and an x86 processor can give you 3 different results all differing by a
couple of bits! Operations like square root and division are even more
imprecise.

Originally, we thought that a couple of bits shouldn't matter, that game
developers would be crazy to rely on such precise calculation. Floating
points are mostly used for world transformations or interpolation
calculations, so no one would care if their Holy Sword of Armageddon was
0.00001 meters off from the main player's hand. To put it shortly, we
were wrong and game developers are crazier than we thought. Games
started breaking just by changing the floating point rounding mode!

While rounding mode is a problem, the bigger nightmare is the
floating-point infinities. The IEEE standard states that when a number
overflows (meaning that it is larger than 3.4028234663852886E+38), the
result will be infinity. Any number multiplied by infinity is infinity
(even 0 \* infinity = infinity). That sounds great until you figure out
that the VUs don't support infinities. Instead they clamp all large
numbers to the max floating point possible. This discrepancy breaks a
lot of games!

For example, let's say a game developer tries to normalize a zero vector
by dividing by its length, which is 0. On the VU, the end result will be
(0,0,0). On x86/IEEE, the result will be (infinity, infinity, infinity).
Now if the game developer uses this vector to perturb some faces for
artificial hair or some type of animation, all final positions on the
PS2 will remain the same. All final positions on x86 will go to
infinity... and there goes the game's graphics, now figure out where the
problem occurred.

The simplest solution is to clamp the written vector of the current
instruction. This requires 2 SSE operations and is SLOW; and it doesn't
work sometimes. To top it off, you can never dismiss the fact that game
developers can be loading bad floating-point data to the VUs to begin
with! Some games zero out vectors by multiplying them with a zero, so
the VU doesn't care at all what kind of garbage the original vector's
data has, x86 does care.

These two problems make floating-point emulation very hard to do fast
and accurate. The range of bugs are from screen flickering when a fade
occurs, to disappearing characters, to spiky polygon syndrome (the most
common problem and widely known as SPS).

In the end Pcsx2 does all its floating-point operations with SSE since
it is easier to cache the registers. Two different rounding modes are
used for the FPU and VUs. Whenever a divide or rsqrt occur on the FPU,
overflow is checked. Overflow is checked much more frequently with the
VUs. The fact that VUs handle both integer and floating-point data in
the same SSE register makes the checking a little longer. In the future,
Pcsx2 will read the rounding mode and overflow settings from the patch
files. This is so that all games can be accommodated with the
best/fastest settings.

**Moral of the blog** When comparing two floating point numbers *a* and
*b* , never use *a* == *b* . Instead use something along the lines of

```
fabs(a-b) < epsilon
```

> where *epsilon* is some very small number.
