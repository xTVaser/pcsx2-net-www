---
title: "And The Sources Follow"
date: 2007-04-01T00:00:00
summary: "It took only a couple of hours to convince us that it is impossible to make a Linux release without also releasing the source"
draft: false
tags:
  - devblog
mainAuthor: ZeroFrog
aliases:
  - "/149-and-the-sources-follow"
  - "/149-and-the-sources-follow.html"
  - "/149-and-the-sources-follow.htm"
---


It took only a couple of hours to convince us that it is impossible to
make a Linux release without also releasing the source. For those people
that had problems with the binaries, they can now go to [our
downloads](/download/viewcategory/31-pcsx2-v0-9-3.html) and compile
their own executables! Hopefully this will resolve all the random
crashes and exceptions. Note that the [**Cg
Toolkit**](http://developer.nvidia.com/object/cg_toolkit.html)
is required for successful compilation. To compile everything type

> sh build.sh all

at the root SVN directory. Look at the INSTALL file in the root
directory for more options.

Please keep in mind that the graphics in linux are a little lacking due
to an incomplete ZeroGS OpenGL plugin. Anti-aliasing and hardcore
graphics have not been tested thoroughly; however, the linux builds are
still very good. From the tests we've done, performance and features
are pretty much the same when compared to the Windows version... which
is a tremendous leap for pcsx2. A lot of time was put in to make this
release possible.

**Windows Users** : You can similarly compile your own binaries if you
are curious what the team has been up to lately. We will not be
officially supporting any windows specific bugs or compilation problems
from 0.9.3. 0.9.3 is specifically meant for linux.

**Beryl users** : Turn it off or otherwise pcsx2 will go very slow.

Some final words: try not to have any Linux vs Windows or x86 vs x86-64
recompiler wars until 0.9.4 comes out.
