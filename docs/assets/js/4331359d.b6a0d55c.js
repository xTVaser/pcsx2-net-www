"use strict";(self.webpackChunkpcsx_2_net=self.webpackChunkpcsx_2_net||[]).push([[8658],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=o,d=m["".concat(l,".").concat(u)]||m[u]||h[u]||i;return n?r.createElement(d,a(a({ref:t},p),{},{components:n})):r.createElement(d,a({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94274:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={authors:["zerofrog"],date:new Date("2006-10-29T00:00:00.000Z"),description:"Many 64 bit architectures have been proposed; however, the x86-64 (aka AMD64) architecture has picked up a lot of speed since its initial proposal a couple of years ago",draft:!1,tags:["devblog"],title:"PCSX2 64Bit Recompilation"},a=void 0,s={permalink:"/pcsx2-net-www/blog/2006/pcsx2-64bit-recompilation",editUrl:"https://github.com/PCSX2/pcsx2-net-www/tree/master/blog/2006/pcsx2-64bit-recompilation/index.mdx",source:"@site/blog/2006/pcsx2-64bit-recompilation/index.mdx",title:"PCSX2 64Bit Recompilation",description:"Many 64 bit architectures have been proposed; however, the x86-64 (aka AMD64) architecture has picked up a lot of speed since its initial proposal a couple of years ago",date:"2006-10-29T00:00:00.000Z",formattedDate:"October 29, 2006",tags:[{label:"devblog",permalink:"/pcsx2-net-www/blog/tags/devblog"}],readingTime:7.37,hasTruncateMarker:!0,authors:[{name:"zerofrog",key:"zerofrog"}],frontMatter:{authors:["zerofrog"],date:"2006-10-29T00:00:00.000Z",description:"Many 64 bit architectures have been proposed; however, the x86-64 (aka AMD64) architecture has picked up a lot of speed since its initial proposal a couple of years ago",draft:!1,tags:["devblog"],title:"PCSX2 64Bit Recompilation"},prevItem:{title:"Touche Toupee!",permalink:"/pcsx2-net-www/blog/2006/touche-toupee"},nextItem:{title:"A Little Fix Here, Alittle Fix There...Vvvroom!",permalink:"/pcsx2-net-www/blog/2006/a-little-fix-here-alittle-fix-there"}},l={authorsImageUrls:[void 0]},c=[],p={toc:c};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Many 64 bit architectures have been proposed; however, the x86-64 (aka\nAMD64) architecture has picked up a lot of speed since its initial\nproposal a couple of years ago. Most 64bit CPUs today support it, so it\nlooks like a good candidate for 64bit recompilation. The x86-64\narchitecture offers many more registers and can potentially speed up\ngames by a significant amount. Up to now, Pcsx2 has largely been\nignoring the 64 bit arena because there have been massive compatibility\nissues, the developers weren't sure if it was really worth it, and\nadding a new bug-free and fast recompiler to the existing code base is a\nvery painful process. Anyone seriously suggesting this to a dev would\nhave been laughed out of the chat room. However, the upcoming 0.9.2\nrelease is looking very stable and after doing some research, we have\ndecided to add support for x86-64 recompilation, both for 64bit versions\nof Linux and Windows (yes, Linux support is returning)."),(0,o.kt)("p",null,"Before going into technical details, I want to cover the current Pcsx2\nrecompilation model."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Pcsx2 Recompilation")),(0,o.kt)("p",null,"Every different instruction set requires either an interpreter or a\nrecompiler to execute it on the PC. Both are important in emulation.\nInterpreters are implemented with regular high-level languages and are\nplatform independent. They are easy to program, easy to debug, but slow.\nThey are extremely important for testing and debugging purposes. For\nexample, interpreting a simple 32bit EE MIPS instruction (code) might\nlook like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"switch(code>>26) {\ncase 0x02: // J - jump to\npc = (code & 0x03ffffff)*4; // change the program counter\nbreak;\ncase 0x23: // LW - load word, sign extend\ngpr[Rt] = (long long)*(long*)(memory+gpr[Rs]+(short)code);\nbreak;\n...\n}\n")),(0,o.kt)("p",null,"Recompilers, on the other hand, try to cut as many corners as possible.\nFor example, we know the instruction at address 0x1000 will never\nchange, so there is no reason why the CPU needs to execute the switch\nstatement and decode the instruction every single time it executes it.\nSo recompilers generate the minimal amount of assembly the CPU needs to\nexecute to emulate that instruction. Because we're working with\nassembly, recompilation is a very platform dependent process."),(0,o.kt)("p",null,"Simple recompilers look at one instruction at a time and keep all target\nplatform (in this case, the PS2) registers in memory. For every new\ninstruction, the used registers are read from memory and stored in real\nCPU registers, then some instructions are executed, and finally the\nregister with the result is stored back in memory. Before 0.9, Pcsx2\nused to employ this type of recompilation."),(0,o.kt)("p",null,"More complex recompilers divide the code into simple blocks (no\njumps/branches) and try to preserve target platform registers across\ninstructions in the real CPU registers. There are many different types\nof register allocation algorithms using graph coloring. Such compilers\nmight also do constant propagation elimination. A common pattern in the\nMIPS Emotion Engine is something like:"),(0,o.kt)("p",null,"lui s0, 0x1000\nlw s0, 0x2000(s0)"),(0,o.kt)("p",null,"If we propagated the constants at the lw, we know that the read address\nis 0x10002000."),(0,o.kt)("p",null,"A little more complex recompiler will know that 0x10002000 corresponds\nto the IPU, so the assembly will call the IPU straight away (without\nworrying about memory location translation)."),(0,o.kt)("p",null,"There are many such local optimizations, however they aren't enough. At\nthe end of every block, all the registers will have to be pushed to\nmemory because the next simple block that needs to be executed can't be\npredicted at recompilation time (ie: branch if x ",">","= 0 depends on the\nvalue of x at runtime)."),(0,o.kt)("p",null,"An even more complex recompiler can work on the global scale by finding\nout which simple blocks are connected to which. Once it knows, it can\nget rid of the register flushing at the end of every simple block by\nsimply telling the next blocks to allocate the same real CPU register to\nthe same target platform register. This is called global register\nallocation and sometimes uses Markov blankets for block synchronization.\nFor those people that know Bayes nets, this is very similar, except it\napplies to the global simple block graph. Just think about the nodes\nnecessary for making a specific node independent with respect to the\nwhole graph. This will include the node's parents, children, and the\nchildren's parents. For those that just got lost... don't worry."),(0,o.kt)("p",null,"The Pcsx2 recompilers also use ",(0,o.kt)("strong",{parentName:"p"},"MMX")," and ",(0,o.kt)("strong",{parentName:"p"},"SSE(1/2/3)"),"\ninterchangeably. So an EE register can be in an MMX, SSE, or regular x86\nregister at any point in time depending on the current types of\ninstructions (this is a nightmare to manage)."),(0,o.kt)("p",null,"Console emulators rarely need to go through such complex recompilers\nbecause up until a couple of years ago, consoles weren't that powerful.\nBut starting with the PS2, consoles got powerful and the Pcsx2\nrecompilers for the EmotionEngine and Vectors Units got complex really\nfast. Pcsx2 0.9.1 supports all the above mentioned optimizations plus\nmany more unmentioned ones. The VU recompiler (code named ",(0,o.kt)("strong",{parentName:"p"},"SuperVU")," )\nis by far the most complex and fastest. Anyone who wants to keep their\nsanity should stay away from it."),(0,o.kt)("p",null,"For those that remember what it was like in the 0.8.1 days can\nappreciate how powerful the 0.9.1 Pcsx2 optimizations are."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"x86-64")),(0,o.kt)("p",null,"So why isn't x86-32 enough? Well, for starters the Playstation 2 EE has\n32 128bit regular registers, 32 32bit floating point registers, and some\nCOP0 registers. Most instructions work on 64 bits, the MMI instructions\nwork on the full 128bits. On the other hand, the x86 CPU has 8 32bit\ngeneral purpose registers (one is for stack), 8 64bit registers (MMX),\nand 8 128bit registers(SSE). And you can't combine the three that easily\n(ie: you can't add an x86 register with a SSE register before first\ntransferring the x86 to SSE or vice versa). So there's a very big\ndifference in registers sizes. Because of the small number of x86\nregisters, the recompiler does a lot of register thrashing (registers\nare spilled to memory very frequently). Each memory read/write is pretty\nslow, so the more thrashing, the slower the recompiler becomes. Also,\nx86-32 is inherently 32bit, so a 64bit add would require 2 32bit\ninstructions and 4 regular x86 registers for the source and result (2 if\nreading from memory). The EE recompiler tries to alleviate the register\npressure by using the 64bit arithmetic capabilities of MMX, but MMX has\na pretty limited ISA and intra-register set transfers kill\nperformance."),(0,o.kt)("p",null,"The registers on the x86-64 architecture are: 16 64bit general purpose\nregisters, 8 64bit MMX registers, and 16 128bit SSE registers. This\namounts to twice the number of register memory! This means much less\nregister thrashing. On top of that, 64bit adds/shifts/etc can all be\ndone in one instruction."),(0,o.kt)("p",null,"However, the story isn't as simple as it sounds. The recompiler has to\ninterface with regular C++ code constantly (ie: calling plugin\nfunctions), so the calling conventions on the recompiler boundaries must\nbe followed exactly. The x86-64 specification can be found\n",(0,o.kt)("a",{parentName:"p",href:"http://www.x86-64.org/"},(0,o.kt)("strong",{parentName:"a"},"here"))," and is pretty straightforward.\nHowever, Microsoft decided that it wanted its own specification (for\nreasons not quite known to anyone else).. so now there are two different\ncalling conventions with a different set of registers specifying\narguments to functions and another different set acting as non-volatile\ndata! (Thanks Microsoft, it wasn't difficult enough)"),(0,o.kt)("p",null,"Because the size of the registers changed, all pointers are now 64 bits,\nwhich adds many difficulties to reading and writing from memory,\nincrementing the stack, etc."),(0,o.kt)("p",null,"Virtual memory is yet another obstacle to overcome with 64bit OSs. The\nAWE mapping trick (described in an early blog) has to be refined. But\nnow that the address range is much bigger, there are less limitations.\nVM builds for Linux also need a completely new implementation."),(0,o.kt)("p",null,"Finally, if anyone has seen Pcsx2 code, they would know that inline\nassembly is pretty frequent in the recompilers. The reasons we use\ninline assembly rather than C++ code are many. Actually, some things\nlike dynamic dispatching become impossible to do with C++ code. So,\ninline is necessary... and it looks like Microsoft has disabled ",(0,o.kt)("strong",{parentName:"p"},"all"),"\nfunctionality for inline assembly in 64bit editions of Visual C++!!!!\n(Thanks again Microsoft, you just know where to strike hardest)"),(0,o.kt)("p",null,"With all the mentioned challenges, it will take a couple of months to\nget things working reasonably stable. By that time, more people would\nhave switched to 64bit OSs. If we're even half right in our estimates,\nPcsx2 will run much faster on a 64bit OS than on a 32bit OS on the same\ncomputer once x86-64 recompilation is done."),(0,o.kt)("p",null,"zerofrog,"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Moral of the blog")," Most recompiler theory discussed here actually\ncomes straight from compiler theory. Compilers will always be necessary\nas long as engineers keep coming with new instruction set architectures\n(ISAs). Learn how a compiler works. I recommend ",(0,o.kt)("a",{parentName:"p",href:"http://www.amazon.com/Compilers-Principles-Techniques-Alfred-Aho/dp/0201100886/sr=8-2/qid=1162088515/ref=pd_bbs_2/002-1428306-8445667?ie=UTF8&s=books"},(0,o.kt)("strong",{parentName:"a"},"Compilers:\nPrinciples, Techniques, and\nTools")),"\nby Alfred V. Aho, Ravi Sethi, and Jeffrey D. Ullman."))}h.isMDXComponent=!0}}]);