---
title: "Recompilers All Dems Buzzwords"
date: 2009-06-23T00:00:00
summary: "There are a lot of buzzwords in emulator recompilation"
draft: false
tags:
  - devblog
mainAuthor: Jake Stine
aliases:
  - "/developer-blog/215-recompilers-all-dems-buzzwords"
  - "/developer-blog/215-recompilers-all-dems-buzzwords.html"
  - "/developer-blog/215-recompilers-all-dems-buzzwords.htm"
---

There are a lot of buzzwords in emulator recompilation. Popular ones
include:

-   Intermediate Representation
-   Intermediate Language
-   Register Mapping
-   Register Allocation
-   Constant Propagation
-   Constant Folding
-   Register coloring
-   SSA (static single assignment optimization)


What do they mean? And perhaps more importantly, what do they mean to a
user of the emulator? Truth is, not much usually. Most of these things
are technologies and strategies borrowed from high level language
compilers like those for C/C++, C\#, Java, etc. Some of them are useful
to emulator recompilers, some not so much.

The first thing to consider when working on a recompiler is that we are
working with what is most likely *optimized code* . The machine code
that your favorite games are running on your PS2 is already parsed and
optimized by a compiler (or in the case of older consoles,
hand-optimized). Secondly, recompilers typically have a single-block
scope limitation (which is hard to explain, but basically means that
compilation stops when branch conditionals are encountered). This all
but eliminates the usefulness of **SSA** and **register coloring**
techniques, since their main benefits are in applying optimizations over
a series of conditional code blocks, and elimination of dead code.
Furthermore, even when higher level optimizations can be applied, the
emulated CPU/Register states must still be guaranteed at frequent
intervals. Unlike high level languages, an emulator must manually track
things like the Program Counter, instruction pipeline stalls, and other
hardware complications. So typically the benefits of such cross-block
optimizations get watered down anyway.

**Constant Folding** and **Constant Propagation** are, for all intents
and purposes, the same thing. They always work together, and most people
use the terms interchangeably. You'll never really find a practical
situation where one is used without the other. Constant folding refers
to the evaluation of constant expressions like **100 \* 5** . Constant
propagation refers to the substitution of variables with known
constants, like:

<span style="font-weight: bold;"> x = 100 \* 5;
y = x \* 10; </span>

... in which case, the value of 'y' is known at compilation time, and
can be further substituted (propagated) anywhere 'y' is used (this
should remind you of your 5th grade algebraic homework!). As mentioned
before, many people use the terms interchangeably, so when you see
another emulator talk of Constant Folding, they mean the same thing I do
when I talk of Constant Propagation. The term 'propagation' is
technically more correct, but folding is easier to type and looks nicer
when naming functions in your recompiler.

**Intermediate Language (IL)** and **Intermediate Representation (IR)**
are more or less the same thing as well. IL simply implies an IR that
has a (mostly) human-readable form. That is, an IL is in fact a
programming language, usually bearing some similarity to assembly code,
but simpler and more sensible. An IR is just a raw collection of data
sufficient to represent all information needed to optimize code and
generate the final recompiled product.

In either case, the dual purposes of an IR/IL are:

-   To simplify the instruction set as much as possible so that
    optimizations can be analyzed without requiring a lot of
    special-case code.
-   To provide a platform-independent "stage" to the compilation
    process, so that ports of the recompiler to new target platforms
    need not be rewritten from the ground up.


Because of the complicated nature of an emulator, an IL itself is
virtually useless. There's typically too much per-instruction cpu state
information that has to be tracked for a human-readable language output
to be viable. But for the same reason an IR can be remarkably helpful in
reducing the overall complexity of a recompiler implementation, and is
almost a foregone necessity when implementing Register Mapping.

**Register Mapping** and **Register Allocation** are once again a set of
fairly interchangeable terms. I prefer the term mapping, but other folks
like to call it allocation. Register mapping/allocation is typically one
of the final stages of recompilation since it's dependent on the target
platform (in our case x86), and is also one of the most complex. It's
also typically *not* very beneficial for performance when the target
platform is an x86 machine (which in our case it is), unless register
mapping algorithms are *very* clever.

As I mentioned in my previous blog entry, the *most significant* factor
in a recompiler's speed is simply the fact that it's acting as a
decoded-instruction cache, and that it executes instructions in bursts
(a block at a time instead of one-by-one). All the rest of these
techniques tend to be more for the factors of code maintainability and
academic challenge than for end-user performance gains.
