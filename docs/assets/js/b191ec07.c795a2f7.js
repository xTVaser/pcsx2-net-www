"use strict";(self.webpackChunkpcsx_2_net=self.webpackChunkpcsx_2_net||[]).push([[7339],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var h=o.createContext({}),l=function(e){var t=o.useContext(h),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(h.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,h=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),p=a,d=u["".concat(h,".").concat(p)]||u[p]||m[p]||i;return n?o.createElement(d,r(r({ref:t},c),{},{components:n})):o.createElement(d,r({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var h in t)hasOwnProperty.call(t,h)&&(s[h]=t[h]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},94182:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=n(87462),a=(n(67294),n(3905));const i={authors:["zerofrog"],date:new Date("2007-01-30T00:00:00.000Z"),description:"Many people have visited the forums giving ideas on how and where PCSX2 should be optimized",draft:!1,tags:["devblog"],title:"PCSX2 Optimization"},r=void 0,s={permalink:"/pcsx2-net-www/blog/2007/pcsx2-optimization",editUrl:"https://github.com/PCSX2/pcsx2-net-www/tree/master/blog/2007/pcsx2-optimization/index.mdx",source:"@site/blog/2007/pcsx2-optimization/index.mdx",title:"PCSX2 Optimization",description:"Many people have visited the forums giving ideas on how and where PCSX2 should be optimized",date:"2007-01-30T00:00:00.000Z",formattedDate:"January 30, 2007",tags:[{label:"devblog",permalink:"/pcsx2-net-www/blog/tags/devblog"}],readingTime:10.08,hasTruncateMarker:!0,authors:[{name:"zerofrog",key:"zerofrog"}],frontMatter:{authors:["zerofrog"],date:"2007-01-30T00:00:00.000Z",description:"Many people have visited the forums giving ideas on how and where PCSX2 should be optimized",draft:!1,tags:["devblog"],title:"PCSX2 Optimization"},prevItem:{title:"Work in progress",permalink:"/pcsx2-net-www/blog/2007/work-in-progress"},nextItem:{title:"Merry Christmas!",permalink:"/pcsx2-net-www/blog/2006/merry-christmas"}},h={authorsImageUrls:[void 0]},l=[],c={toc:l};function m(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Many people have visited the forums giving ideas on how and where Pcsx2\nshould be optimized. While most ideas sound solid on the outside, they\nusually will not work in practice for various reasons. This blog will\nanswer some of those burning questions on what Pcsx2 optimizations are\nimportant and where development work should be put in to make things run\nfaster. We will touch on why the GPU is the bottleneck on some games and\nwhy the CPU is on others. We will also go into the distribution of\nworkload of the various components of Pcsx2 as it is computing away. And\nmost important, we will cover plugin design so that system resources are\ndistributed nicely."),(0,a.kt)("p",null,"First a note to the people that have played around with optimization or\nwill play around with it. Be careful when measuring performance with\nframes per second! If anyone told me their optimization gained 5 fps for\na certain game, I would not understand what that means! Why? Well if a\ngame went from 5 fps to 10 fps, that means each frame took 200ms and now\nit takes 100ms. The optimization saved 100ms of CPU time per frame and\nnow the game is 2x faster (this doesn't happen anymore)! If a game went\nfrom 60 fps to 65 fps, each frame took 16.6 ms and now it takes 15.4 ms.\nThis is only 1.2 ms of saved time per frame, and the game is only 1.06\ntimes faster. Which optimization do you think is better? Also a 1-2%\nspeed difference is ",(0,a.kt)("strong",{parentName:"p"},"not")," statistically big enough to say that the\noptimization is useful. In fact, the fps counter in the title bar\nfluctuates between 1-2% all the time. So you'll just be picking up\nnoise."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Introduction")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(71876).Z,width:"589",height:"341"})),(0,a.kt)("p",null,"The major components of Pcsx2 are shown in the figure. The heart of\nPcsx2 is the dynamic translators of the various PS2 instruction sets,\nmost often called the recompilers. Note that there are three hearts that\nPcsx2 can be compiled with depending on your CPU: the interpreter\n(actually always present), x86, and x86-64. Starting with 0.9.3, Pcsx2\nhas been retrofitted to compile the interpreter on any little-endian CPU\narchitecture by compiling with the PCSX2","_","NORECBUILD define. There is\nalso the memory management scheme that factors into dynamic translation\nsince memory accesses can be optimized away instead of calling one huge\nMemoryRead(address, value) that redirects execution to the various\nhardware components. The DMA connects all data that is passed to the\nsub-components of Pcsx2. To the right are the components that are just\ninterface stubs that interact with the plugins. At the bottom are the\ncomponents that are implemented in Pcsx2 without any plugins. The reason\nfor no plugins is that these components require tight synchronization\nbetween the Pcsx2 hardware registers, so having the component in a\nplugin will unnecessarily complicate and slow down things. Note that IPU\ncan be argued to be a plugin on its own, however the actual MPEG2\ndecoding part of IPU is not the problem as much as the DMA communication\nbetween it and the EE."),(0,a.kt)("p",null,'The Graphysic Synthesizer (GS) plugin accepts a stream of commands to\nrender geometry to its 4Mb video memory. This stream usually comes from\nVU1, VIF, or a DMA transfer. Data from VU1 is usually 3d geometry, data\nfrom VIF/DMA is usually textures or static 2D geometry. From time to\ntime, the EE can request to read the GS memory from the VIF. Also, the\nGS sets various hardware registers so that the EE can synchronize with\nit. In MTGS mode, the GS has its own thread to do the stream processing\nand these hardware registers are emulated on the main EE thread to avoid\nhaving the EE wait for the GS to complete. In this way, the GS and EE\ncan be detached and memory won\'t get corrupted. Ideally the GS plugin\nshould offload as much computation off to the GPU and leave the CPU\nalone, this however is possible to a certain degree because of drivers\n(see the "Graphics Synthesizer, GPUs, and Dual Cores" blog).'),(0,a.kt)("p",null,"The Sound Processing Unit (SPU2) plugin accepts a stream of commands\nthrough DMA. The stream usually writes/reads SPU2 memory and sets\nvarious channel modes. These channels play their data on a separate\nthread that produces raw PCM data to send to the sound card. At the\nmoment, the communication between SPU2 and DMA is pretty buggy."),(0,a.kt)("p",null,"The CDVD plugin just worries about reading data from ISOs or DVD drives.\nVarious caching and read-ahead techniques have to be applied in order to\nmake the reading fast and not noticeable to the user."),(0,a.kt)("p",null,"The rest of the plugins are either not implemented like USB and FireWire\nor are pretty standard across emulators."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Optimization")),(0,a.kt)("p",null,"When running, Pcsx2 spends most of its time in recompiled code (EE/IOP\nor VUs). When in the EE recompiler, most components are executed as\nhardware registers are written through the memory write functions. About\nevery 512 EE cycles, the recompilers call cpuBranchTest to update\ncounters, give IOP enough time to catch up, and perform other system\nstuff. The VU programs are usually executed as soon as the program is\nstarted in the VIF. If VU1 is executed, the recompilers don't exit until\nthe VU program exits. If VU0 is executed, only 512 VU cycles are\nexecuted then control is given to the EE so it can catch up\n(synchronizing VU0 can be very tricky). IOP recompilers usually don't\ntake up a lot of CPU time. Besides the fact that IOP runs 8 times slower\nthan EE, it is also a 32bit processor, so things are fairly quick.\nThe rest of Pcsx2 time is spent in pipelining the data through the\nvarious components. A good amount of time is also spend in the VIF\nUNPACK function, however this function is super-optimized (see iVif.cpp\nor iVif.S) so nothing can be done about that anymore. IPU also does\nMPEG2 decompression, so it is arguably computationally intensive during\nmovies (however this isn't the case at all)."),(0,a.kt)("p",null,"Because Pcsx2 is written in C/C++, function calls and pipelining is very\nfast. Many people believe that rearranging code and optimizing the\ncalling conventions will speed things up. This is ",(0,a.kt)("strong",{parentName:"p"},"not")," the case at\nall. Although there do exist functions that could benefit from some\nhand-coded assembly, you will not see a statistical speed difference\nbecause the assembly code might not have improved speed too much, or the\nfunction is not called often enough to really matter. For example, it is\nstupid to optimize the recInit function, it is called only once per\ngame!"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Recompiler Optimizations")),(0,a.kt)("p",null,"In short, don't waste your time optimizing the ADD or MULT instruction\n...or any single instruction for that matter. The bottleneck of the\nrecompilers is the way the registers are allocated. Also, registers are\nnot tracked across simple blocks meaning that they are all dumped to\nmemory at the end of each block, which is very suboptimal. My advice is\nnot to touch any recompiler unless you know what is going on. If you are\ninclined to optimize recompilers, do the EE. The VU recompilers are\n",(0,a.kt)("strong",{parentName:"p"},"very")," fast at the moment, so don't waste your time because you might\nkill compatibility... and IOP is just not worth it. When running a\nprofiler, you might see the cpuBranchTest function pop up a lot... don't\nwaste your time by rearranging code out of the function or trying to\ncall the function less frequently, it won't work."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"GS plugin optimizations")),(0,a.kt)("p",null,"There have been various suggestions to use shaders to offload as much\ncomputation as possible. This is exactly what ZeroGS does! In fact,\nZeroGS does it so well that your GPU will cry (hence the name KOSMOS).\nThe biggest problem with the GS plugin is managing the render targets\nand caching the textures. Also, the trick to everything is ",(0,a.kt)("strong",{parentName:"p"},"never"),"\n(and I really mean never) to transfer GPU memory to system memory. This\nproblem is actually very common with many games because game developers\njust do crazy shit with the GS... sometimes I get the urge to email\ncompanies asking them 'what were you on when you programmed this?'. This\nis the reason why certain games are much slower than others. Sometimes\nthe problem is fixable, sometimes it isn't (this is a good time to\nmention that the ocean zbuffer bug in FF12 is exactly due to this\nproblem... and ZeroGS ingeniously ignores the memory transfer so FF12 is\nnice and fast... hence the bug)."),(0,a.kt)("p",null,"Someone in the forums suggested executing VU1 instructions in the GPU\nvertex shaders. If you look at the shader and VU instruction sets,\nyou'll see that they are very similar, so I can understand why someone\nwould think this. However this is not possible because VUs are ",(0,a.kt)("strong",{parentName:"p"},"way"),"\nmore complex than vertex shaders! In fact, it is suicide to consider the\namount of code reengineering that would have to be done just to get the\nGPU to execute a simple VU program... the GPU already has enough work to\ndo. While on the subject of VU, it is also useful to mention that it is\nsuicide to even consider putting the VU recompilers in their own CPU\nthread that can execute concurrently with the EE! Making things\nmulti-threaded is tricky because of the data sharing between the two\nthreads. In fact, putting the VU execution on another thread would\nprobably slow things down more than speed up. The reason multithreading\non the GS works so well is because the EE doesn't have to stop to\nsynchronize with the GS, all it has to do is copy the stream it wants to\nsend to the GS in a temporary buffer. The GS plugin will process it when\nit gets the time."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"SPU2 optimizations")),(0,a.kt)("p",null,"Don't know what's going on here. SPU2 really needs reworking. And it\nisn't just the plugin, there is a whole synchronization issue with DMA\nand SPU2 that has to be taken care of. The SPU2 should be multithreaded\nand it shouldn't require any huge synchronization with the main thread.\nIf anyone will work on something, it should be SPU2."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Other optimizations")),(0,a.kt)("p",null,"Most other components of Pcsx2 are already pretty optimized. To\nsummarize, the biggest bottlenecks are the recompilers, GS plugin, and\nSPU2. Currently x86-64 versions of the recompilers are being developed.\nZeroGS OpenGL will be released as open source soon, so people can\ncontribute their own changes if necessary. Actually, future versions of\nZeroGS will have a complex patch system that will enable gamers to tweak\nsettings so that the game is as fast as possible (even dual core users\ncan see a big performance gain with the correctly tweaked settings). No\none is maintaining SPU2.... but that will change if this continues."),(0,a.kt)("p",null,"The last hope for optimization is actually x86-64. As to how much\nperformance will increase... not even I know, but we shall see later in\nthe year when Pcsx2 x64 releases (for Linux too)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Moral of the blog")," Optimization is time consuming and it is more of\nan art than science. Programs are developed much faster and have less\nbugs when you don't have to worry about optimizing (Java is a great\nexample of a language where it is easy to develop programs, but very\nhard to have it run fast.. by design I guess). But no matter the\napplication, having it go faster is much better than having it go\nslower. A lot of game companies spend a lot of money optimizing their\ncode because it is that important. The reason most newer games have\nbeautiful graphics running in real-time is not just because GPUs are\ngetting faster, but also companies are getting better at optimizing\ntheir game engines. For example, games when the PS2 was first released\nlook inferior to what new PS2 games look today. And with the way things\nare going in the software industry, it looks like C++ will stick around\nfor a very long time because of its optimization capabilities. Learn\nC++, there are many books I can recommend, but the best way to learn is\nto actually go and program something."))}m.isMDXComponent=!0},71876:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/pcsx2-optimization-bcf1c3d78caf5fe4df44483e8a882fa4.jpg"}}]);