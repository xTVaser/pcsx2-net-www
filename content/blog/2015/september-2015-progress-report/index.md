---
title: "September 2015 Progress Report"
date: 2015-10-01T00:00:00
summary: "Now its time to present this month's changes."
draft: false
tags:
  - "progress-report"
mainAuthor: bositman
aliases:
  - "/272-september-2015-progress-report"
  - "/272-september-2015-progress-report.html"
  - "/272-september-2015-progress-report.htm"
---

![](./img/progrepsept.jpg)

Dear PCSX2 followers,

Please find the new monthly report below. First things first - sorry for
the delay. As you may know, our team is pretty small and two members
have been out of action due to their real lives (Blyss and Gregory). The
past two months were full of activity but first of all I want to share
some good news with you. Not one but two new developers joined the
project. Please welcome Micove and Turtleli! We wish them thousands of
commits

They have already done a damn good job at improving the project, well
done guys!

Now its time to present this month's changes.

## Windows Visual Studio improvement
- by [Micove](https://github.com/micove) [Pistachioman](https://github.com/Pistachioman)

Windows build management had become very disorganized recently, however
that has been improved a good deal thanks to the following changes:

-   In a gigantic PR started by Micove, Visual Studio 2012 support was
    dropped and Visual Studio 2015 support was added. As a bonus some
    build targets that weren't working for quite a while were fixed as
    well as the compilation issues with the newly released update 5 of
    Visual Studio 2013. Maintaining the old versions was pretty tiresome
    but now we've been relieved of that burden.
-   The version-specific Visual Studio solution and project files were
    replaced with a single set of multi-version files. This removed 30k
    lines of code and it allows us to easily support new versions of
    Visual Studio.
-   Sometimes builds failed to compile due to a strange environment
    setup. After hours of debugging the culprit was found - missing
    dependencies and a header conflict.


Relevant commits and PRs:
[Visual Studio: Fixes for
Compilation](https://github.com/PCSX2/pcsx2/pull/773)
[Avoid potential header clash between DirectX' and lilypad's
xinput.h](https://github.com/PCSX2/pcsx2/pull/786)
[Fix git version detection](https://github.com/PCSX2/pcsx2/pull/817)
[Visual Studio - Universal Solution
file](https://github.com/PCSX2/pcsx2/pull/690)
[Remove Dependency and UAC info from the manifest
file](https://github.com/PCSX2/pcsx2/commit/4a743ac2fbebc28e7b85edb0a4d6c17810445d52)


## Windows version detection
- by [Micove](https://github.com/micove)

After the big improvement to the build system, Micove decided to fix the
bad detection of some Windows versions in the console log. It's very
useful since it helps the community support new users on the forum. The
Windows version is now displayed correctly in the console log. There was
also a fix related to displaying Windows XP Professional as Home and
vice versa.

Relevant PR:
[Recognize Win 8, 8.1 and 10](https://github.com/PCSX2/pcsx2/pull/795)



## GSdx GUI revamp
- by [Turtleli](https://github.com/turtleli), [ssakash](https://github.com/ssakash) and [gregory](https://github.com/gregory38)

In the meantime, Turtleli revamped the GSdx GUI with some help from
Ssakash. Instead of a long complicated description, let's compare two
screenshots of the GUI.

Before changes on the left, after changes on the right

{{< img-cmp-slider before="./img/gsdx-before.png" after="./img/gsdx-after.png">}}

-   As you can see, the Anisotropic Filtering Checkbox was removed as it
    was redundant with the 1x state (called OFF now).
-   Most of the options now have a nice tooltip to describe them. It is
    not as complete as a full guide but it's handy to see the impact of
    an option without 10 minutes of googling. Hovering the cursor over
    an option will display some quick info about it.
-   CRC hack selection was moved from the hack section to the main
    panel. The main reason is that that option was independent of the
    "Enable HW hacks" checkbox.
-   Confusing 3 state checkboxes were replaced by much nicer comboboxes.
-   Various options are OpenGL or DirectX renderer specific. Those
    options will be hidden based on the renderer selection.


Relevant PRs:
[little changes on AF value
behavior.](https://github.com/PCSX2/pcsx2/pull/754)
[Gsdx: gui changes](https://github.com/PCSX2/pcsx2/pull/791)
[GSDX: Rework Internal resolution function.
(windows)](https://github.com/PCSX2/pcsx2/pull/829/commits)



## PCSX2: Revamped FPS counter
- by [avih](https://github.com/avih) and [ssakash](https://github.com/ssakash)



<span style="color: #2737d7; text-decoration: underline;"> Old FPS
Counter </span>
{{< img cols="6" src="./img/fpsold.webp">}}

<span style="color: #b5473a; text-decoration: underline;"> New FPS
Counter </span>
{{< img cols="6" src="./img/fpsnew.webp">}}

The new format is specifically aimed to create less confusion for the
users who assumed the previous FPS value as the original In-game FPS.
The new implementation replaces "FPS" with "Speed" along with a
percentage value with respect to the region based frame limit. The old
FPS value is stored at a parenthesis alongside the percentage value. (It
would be useful for identifying NTSC/PAL variable rates and the older
value is still used for lots of benchmark by members)

Relevant Commits:

[PCSX2: Add Percentage Counter for
FPS](https://github.com/PCSX2/pcsx2/commit/304fc990a1d9ddb93e8f60e4ee365b582439c700)
[FixedInt - round instead of truncate on
construction](https://github.com/PCSX2/pcsx2/commit/d10bbb73f78379270a6a9f09f7c8b871075b89ef)
[GS window title: remove "align" space at fps
value](https://github.com/PCSX2/pcsx2/commit/ece9c7f2d257a56e5e3aa03e6985e2fcec64051e)
[Custom frame rate: improve message, respect also for
NTSC-progressive](https://github.com/PCSX2/pcsx2/commit/a6737b87fdf9214bc4bb544010f4533f5dd77069)

## (Windows) Request the use of the high-performance graphics card on systems where multiple graphics processors are available (nVidia Optimus, AMD Hybrid Graphics)
- by [charliebruce](https://github.com/charliebruce)

Before this fix, PCSX2 would always use the default video adapter of
your system which was usually an onboard graphics chip. This had a major
performance impact since users were not aware they had to select their
dedicated graphics card in GSdx for PCSX2 to actually use it. It mainly
affected laptop users (Nvidia Optimus, AMD Hybrid). With this fix,
hopefully PCSX2 will be able to automatically select the dedicated
graphics card with no user input

Relevant PR:
[Improve nVidia Optimus and AMD PowerXpress
compatibility](https://github.com/PCSX2/pcsx2/pull/767)


## (Windows) Lilypad: Fix Local Volume control checkbox behavior
- by [ssakash](https://github.com/ssakash)

A bug was fixed where the local volume control feature would always be
enabled if the user used the Lilypad config dialog, even if the
corresponding checkbox was unchecked.

Relevant PR:
[Lilypad: Fix Local Volume control CB function and few other
stuff](https://github.com/PCSX2/pcsx2/pull/781)


## (Windows) Third-party libraries updates
- by [Micove](https://github.com/micove)

Micove performed a much needed update to (most) of the third-party
libraries that PCSX2 is using. Some of them were over 2 years old! The
libraries that were updated are as follows: bzip to bzip2, zlib,
SoundTouch and the OpenGL extensions header file (glext).

Relevant commit:
[Update 3rdparty](https://github.com/PCSX2/pcsx2/pull/790)

Finally comes a very important note. The next progress report will
likely be delayed until around the end of the year. Why, you ask? Our
team is quite small as a lot of you know and we are currently working on
releasing a new stable build! Because of that we decided it would be
best to consolidate our efforts on that in order to get it done as soon
as possible. So look forward to that, it's definitely exciting!

