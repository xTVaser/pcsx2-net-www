---
title: "QA Picking Our Noes"
date: 2017-02-14T00:00:00
summary: "Quality & assurance is a full time job and it is a complex topic"
draft: false
tags:
  - devblog
mainAuthor: Gregory
aliases:
  - "/developer-blog/282-q-a-picking-our-noes"
  - "/developer-blog/282-q-a-picking-our-noes.html"
  - "/developer-blog/282-q-a-picking-our-noes.htm"
---

# Quality Assurance

<span style="text-align: justify;"> Quality & assurance is a full time
job and it is a complex topic. Quality always comes with a trade-off of
time vs cost. By definition, open source projects make a false start
here. Spending $100,000 on a formal analysis tool isn't possible.
Neither is dedicating the only dev to full-time testing. Fortunately,
some tools are free (even open source) such as Valgrind or Clang-Tidy
and some services are free to use, such as Coverity. We currently don't
have a high number of committers, but we have lots of dedicated testers
and users.Big thanks to all of them, because without them nothing would
have been possible. So quality is possible. Maybe we can't reach the
100% perfect quality state but we can reach a decent level. </span>

<span style="text-align: justify;">
The project took various actions in order to improve the quality and
robustness of PCSX2. Some actions started a long time ago, most of them
are still on-going, some are still planned. You won't find any
ground-breaking methodology here. Nevertheless, I wanted to do a summary
of what is going on. </span>

<span style="font-weight: bold; text-align: center;"> Continuous
Integration </span>

<span style="text-align: left;"> The first step of QA is called
Continuous Integration. The goal is to ensure correctness of the project
at every commit done. That's easy to say but quite hard to do.

</span> <span style="text-align: justify;"> \* Most of you know about
the PCSX2 buildbot. It provides compiled snapshots regularly. It allows
testers and users to play with the latest features. It also gives them
the opportunity to report regressions much sooner in the development.
Therefore, we can fix them better. Regressions are the highest priority
bug reports for me.

</span> <span style="text-align: justify;"> \* The migration to Github
allowed us to add additional bots to ensure compilation works fine with
various compilers. PCSX2's buildbot is limited to a single version of
the Microsoft compiler. Appveyor & Travis allow us to test multiple
versions of Visual Studio (VS2013 & VS2015) but also clang/gcc. We even
have a 64 bits compilation test validation.

</span> <span style="text-align: left;"> \* The buildbot is limited to
Windows, therefore a daily PPA build was added too. </span>

<span style="font-weight: bold; text-align: center;"> Compiler </span>

The 2nd step of QA is compiler support. The compiler is the first tool
of any developer. Of course, compilation errors are bad, but compilers
can also report constructs that are prone to errors. These are called
compiler warnings. Often there are false positives, the code is correct
and behaves as expected but the compiler still reports it as dangerous.
You could say "It's not a big deal.", but when you have thousands of
false positives, you don't see the bad warnings anymore. So the goal is
to have 0 warnings for all compilers. Note that some warnings were
disabled because they report too many false positives. But they are a
conscious exception and additional work has been done to re-enable them
when possible.

\* GCC warning counts are rather low (less than 20) but not 0 yet. And
we even enabled most of the extra warnings.
\* Clang reports lots of warnings because I asked clang to report some
old code that I marked as deprecated. Otherwise we'd be around 50. I'm
sure we can do better here too.

Global status is rather good but not yet perfect. GCC used to have 500+
warnings with less warnings enabled. Clang used to be unable to compile
the code. The road was quite long but we started to see the light

<span style="font-weight: bold; text-align: center;"> Formal/Lint Tool
</span>

<span style="text-align: justify;"> Compilers are nice at reporting
various problems but it isn't their main job. So dedicated tools were
created with the single objective of finding all your bugs. In reality
it is closer to "some bugs" but less bugs is always nice and good for
e-reputation of a project. I decided to integrate those tools with the
Linux build.sh script. This way, you can easily run them. If you want a
report, I will gladly send it to you.

I) Cppcheck

Cppcheck is an open-source lint tool to check code quality. For the
1.2/1.4 release we tried to fix the big errors. So far it reports 838
warnings. The number is quite high but warnings are very minor
(micro-optimization and style). It would require some analysis/fixes to
improve the situation. I guess some minor style warning could be
filtered.

II) Coverity

Coverity is an expensive lint tool to ensure code robustness. It is very
nice of Synopsys to allow open source projects to use it for free.
Coverity is based on a compiler back-end so it tries harder than
Cppcheck to find issues. Coverity found a couple of nasty ones but also
various false positives. We're currently around 70 issue reports. I'm
not sure we will be able to fix all the reports but we can target a goal
of nearly 0 Coverity issues.

III) Clang-tidy

Clang-tidy is an open-source lint tool based on the Clang/LLVM compiler.
It is based on rule checks from the Clang / C++ core guidelines and C++
ISO certification. The tool reports a massive number of warnings,
currently 49000+ !!!

I can hear you yelling "This is insane, PCSX2 code must suck so bad".
But when you look at the report, the huge number comes from C/C++
constructs that are sane but not safe. There is a strong bias on
robustness/pure C++, rather than performance/C. For example, every time
you access an array, you must check the array boundary. For sure, this
is robust but it is also slow. I'm not sure we want this kind of
robustness in performance critical code. That being said, all cold paths
(i.e. code that doesn't impact performance) would be better with safer
code. Another recommendation is to use Boost classes. Boost is a nice
beast but it is a mammoth. The full include on my system is 155MB ! I
think we will wait until the interesting bits are included in the C++
library. A lot of warnings remain to be fixed but we are now far from
the 49K number.

For the record, here is the current summary report on the latest master.
You can google the rule name to find what the exact issue is.

```cpp
cert (665)
cert-dcl50-cpp => 85
cert-err52-cpp => 3
cert-err58-cpp => 360
cert-err60-cpp => 148
cert-err61-cpp => 69

clang (496)
clang-diagnostic-deprecated-declarations => 475
clang-diagnostic-missing-braces => 2
clang-diagnostic-shift-negative-value => 3
clang-diagnostic-sign-compare => 4
clang-diagnostic-unused-const-variable => 10
clang-diagnostic-unused-variable => 2

cppcoreguidelines (33701)
cppcoreguidelines-pro-bounds-array-to-pointer-decay => 2883
cppcoreguidelines-pro-bounds-constant-array-index => 7697
cppcoreguidelines-pro-bounds-pointer-arithmetic => 3763
cppcoreguidelines-pro-type-const-cast => 66
cppcoreguidelines-pro-type-cstyle-cast => 3478
cppcoreguidelines-pro-type-reinterpret-cast => 42
cppcoreguidelines-pro-type-static-cast-downcast => 83
cppcoreguidelines-pro-type-union-access => 12405
cppcoreguidelines-pro-type-vararg => 3284

misc (905)
misc-macro-parentheses => 157
misc-throw-by-value-catch-by-reference => 18
misc-unused-alias-decls => 1
misc-unused-parameters => 729

modernize (2527)
modernize-loop-convert => 146
modernize-make-unique => 20
modernize-pass-by-value => 6
modernize-redundant-void-arg => 35
modernize-use-auto => 127
modernize-use-default => 107
modernize-use-nullptr => 1824
modernize-use-override => 262

readability (10996)
readability-braces-around-statements => 6739
readability-else-after-return => 124
readability-function-size => 1
readability-implicit-bool-cast => 3760
readability-inconsistent-declaration-parameter-name => 326
readability-named-parameter => 36
readability-simplify-boolean-expr => 10
```

To conclude this section, lint tools are quite powerful. They can find
bugs that will take days of tests. But they're also dull as they reports
tons of false positives. Therefore it is required to filter the results.
It is clearly not feasible nor desirable to reach a 0 warnings target.
However we can target a better and saner status.

# Dynamic Tools

Formal tools can't find all classes of bugs. Luckily for me, Linux comes
with 2 additional tools to ensure correct behavior at run time.

I) Valgrind

Valgrind is a virtual machine or a X86 CPU emulator. So yes, we are
running an emulator inside an emulator

The interesting stuff with virtual machines is that they can see all
memory accesses. It comes with a cost, it is damn slow. Another drawback
is that Valgrind doesn't support all SIMD instruction such as AVX.
Running the tool allows you to detect memory leaks (ouch), memory
overflows (ouch, ouch), code execution that depends on uninitialized
values (ouch, ouch, ouch). Quite a nice tool; You even find bugs in 3rd
party libraries/drivers...

II) Address sanitizer

Valgrind is very powerful but too slow. The address sanitizer is a much
faster alternative but less powerful. The code will be instrumented
during the compilation. So every time you do a memory access, a small
check is done. The main goal is to ensure the correctness of the memory
access, a big source of crashes and security flaws of all programs. It
greatly helps us to find wrong stack management on the recompiler.

Dynamic tools can greatly help to detect very bad stuff. Unlike formal
tools that give you a status in 2 minutes, you need to actually run the
program and play some games. So it is time consuming.

# Code Formatting

Last but not least, code formatting. The project is a mix of various
plugins of various developers with various coding styles. It became even
worse recently. We spend too much time in external contributions,
reviewing the formatting rather than the real patch improvement.

As we said, desperate times call for desperate measures. So I decided
that we will automatically format the code with the help of the
clang-format tool. The tool isn't perfect unlike us, Humans

But it will give us a much nicer consistency.

Contributing will be easier as you don't need to learn the current
coding style of the current file. I hope to provide a git hook on Linux
to automatically format the code before the commit. Reviewing will be
faster as the syntax will be automatically checked by the build bot.
This way we could concentrate on the meat. So far a couple of plugins
were converted to the new syntax. The remaining code will be converted
step by step in order to avoid conflicts with current Pull Requests.

# Conclusion

To conclude this blog post, we have plenty of tools and methods to
improve the projects quality. We've worked on it for a long time and
slowly it's getting better and better. In the end, QA is like ageing
wine, it's a slow process that requires time.
