---
title: "New Versioning Release Pattern"
date: 2009-09-11T00:00:00
summary: "So starting with our next release of PCSX2 we'll be using an established versioning pattern"
draft: false
tags:
  - devblog
mainAuthor: Jake Stine
aliases:
  - "/developer-blog/207-new-versioning-release-pattern"
  - "/developer-blog/207-new-versioning-release-pattern.html"
  - "/developer-blog/207-new-versioning-release-pattern.htm"
---


From 0.9.5 onward PCSX2 has been a mostly open SVN revisioning process,
where beta builds are SVN-marked and are widely built and distributed to
users. 0.9.5 itself was never released as an official 'stable' build,
and after the release of 0.9.6 we just called all subsequent SVN builds
of PCSX2 "betas." (mostly because we were too lazy and/or busy to bother
worrying of version numbers). This lackadaisical version pattern was a
source of confusion for users and developers alike.

So starting with our next release of PCSX2 we'll be using an established
versioning pattern (which likely won't be for some time -- implementing
a new GUI is a complicated ordeal). The new patter will be based on some
standard Open Source convention, where odd-numbered versions denote
SVN/devel builds (and will have SVN numbers affixed to the version) and
even numbered versions denote stable releases. By chance this is already
how things have been playing out since 0.9.5, so mostly it just means
we're making a conscious effort to continue to apply the pattern in the
future. Thus, the past-present-future will look something like this:

Past:
**0.9.4** - Official stable release
**0.9.5** - Development build (SVN)

Present:
**0.9.6** - Official stable release
**0.9.7** - Development build (SVN) *\[wx-enhanced!\]*

Future:
**0.9.8** - Official stable release
**0.9.9** - Development build (SVN)
**1.0.0** - Official stable release
**1.1.0** - Development build (SVN)

This way when people file bug reports we can know from the main version
number alone if the report is regarding a stable release or an SVN
build, and furthermore users can have a clearer guide to the status of
versions being released and such. Furthermore, odd versions will have
the SVN revision appended to them by default, like **0.9.7.r1880** .

... and yes the *hope* is that we're going to go to 1.0.0 after 0.9.9,
and use a 1.0, 1.1, 1.2, 1.3, etc version pattern, shortening the
primary version numbers from three digits to two. But that's a long way
down the road yet, and anything could happen between now and then.
