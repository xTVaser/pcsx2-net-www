"use strict";(self.webpackChunkpcsx_2_net=self.webpackChunkpcsx_2_net||[]).push([[8177],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var h=a.createContext({}),d=function(e){var t=a.useContext(h),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=d(e.components);return a.createElement(h.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,h=e.parentName,l=r(e,["components","mdxType","originalType","parentName"]),m=d(n),u=o,p=m["".concat(h,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(p,s(s({ref:t},l),{},{components:n})):a.createElement(p,s({ref:t},l))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=m;var r={};for(var h in t)hasOwnProperty.call(t,h)&&(r[h]=t[h]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var d=2;d<i;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},87950:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var a=n(87462),o=(n(67294),n(3905));const i={authors:["cottonvibes"],date:new Date("2011-08-14T00:00:00.000Z"),description:"Getting pcsx2 to use more cores is something many people have asked for, and they wondered why we werent doing it",draft:!1,tags:["devblog"],title:"Threading Vu1"},s=void 0,r={permalink:"/pcsx2-net-www/blog/2011/threading-vu1",editUrl:"https://github.com/PCSX2/pcsx2-net-www/tree/master/blog/2011/threading-vu1/index.mdx",source:"@site/blog/2011/threading-vu1/index.mdx",title:"Threading Vu1",description:"Getting pcsx2 to use more cores is something many people have asked for, and they wondered why we werent doing it",date:"2011-08-14T00:00:00.000Z",formattedDate:"August 14, 2011",tags:[{label:"devblog",permalink:"/pcsx2-net-www/blog/tags/devblog"}],readingTime:15.535,hasTruncateMarker:!0,authors:[{name:"cottonvibes",key:"cottonvibes"}],frontMatter:{authors:["cottonvibes"],date:"2011-08-14T00:00:00.000Z",description:"Getting pcsx2 to use more cores is something many people have asked for, and they wondered why we werent doing it",draft:!1,tags:["devblog"],title:"Threading Vu1"},prevItem:{title:"Path masking and geometry syncing",permalink:"/pcsx2-net-www/blog/2011/path-masking-geometry-syncing"},nextItem:{title:"PCSX2 On Youtube And Vimeo",permalink:"/pcsx2-net-www/blog/2011/pcsx2-on-youtube-and-vimeo"}},h={authorsImageUrls:[void 0]},d=[],l={toc:d};function c(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Well if you've kept up with pcsx2's\nSVN, you'll notice we recently added a\nMTVU (Multi-Threaded microVU1) option, which runs VU1 on its own\nthread."),(0,o.kt)("p",null,"Getting pcsx2 to use more cores is something many people have asked for,\nand they wondered why we werent doing it. Some users would go as far as\nto flame us pcsx2 coders saying we didnt have the skills to do it or\nwould say some other nonsense."),(0,o.kt)("p",null,"In reality, there are plenty of reasons why its taken so long for us to\ncode something like MTVU. The key reason is that emulation in general\ndoes not lend itself well to threading components. If you want to be\nsafe and accurate at a hardware emulation level, you generally take the\napproach of running the core CPU of the system (the EE-core in ps2s\ncase), and then based off the cycles you ran the CPU for, you time the\nexecution of all the other processing units in the system (DMAC (GIF,\nVIF, SIF, ), VU0/VU1, IPU, IOP, etc)."),(0,o.kt)("p",null,"If you try to naively thread the components in the above model, youll\nhave 2 huge problems which may not be apparent to non-emu coders. One\nproblem is that threading the components (say GIF and VU1) at the same\ntime, will lead to very bad syncing errors if the GIF and VU1 need to\ncommunicate with each other (and they do). The other problem is that\njust running a component on a thread is actually going to be a slow-down\nunless the thread is doing a lot of work without having to sync with\nother components. As an example, both Jake Stine (Air) and I have in the\npast experimented with naively threading VU1, and in addition to getting\nunstable graphics and crashes, our attempts also ran slower."),(0,o.kt)("p",null,"So now you may be wondering, If threading has all those problems how can\nyou get a speedup? Well we had to be smart about it, and figure out a\nway to make threading work based on the properties of the hardware. One\nthing we know is that for a component to even be worth-while to thread,\nit needs to have relatively low interaction with other components (which\nwill limit the amount of syncing needed with other components; and\ntherefore increase the thread throughput), and it also needs to be a\ncomponent that is used frequently and is computationally expensive to\nemulate (or else theres no point in threading it). Luckily the GS fit\nthat bill very well (which gave us MTGS), and to a lesser extent VU1\ndoes (giving us MTVU)."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(36415).Z,width:"430",height:"248"}),"\n(Some key components in the ps2; these arent drawn to any relative\nscale)"),(0,o.kt)("p",null,"In the above diagram, I have drawn some of the key components which must\nbe considered when threading VU1 and the GS. The dark arrows show common\ndata paths where data is transferred frequently between the components\nin games. The white arrow heads show data paths that are possible in\ngames, but are rarely used due to various reasons. There are some more\ndata paths and more components to the ps2, but theyre excluded for\nsimplicity (the actual grouping of the components in the ps2 also is a\nbit different, but drawing them that way would complicate the\ndiagram)."),(0,o.kt)("p",null,"Just so youre not left in the dark Ill briefly explain what the above\ncomponents are used for. The EE-core is the main CPU of the ps2 and\nmostly handles game logic; using the GIF FIFO and Path 3, games\ngenerally send image data (textures) to the GS (the gpu of the ps2). VU1\n(Vector Unit 1) is used for coordinate, matrix, and vector calculations\ngames need to do for 3d graphics; when its done calculating it sends the\nprocessed data over to the GS via GIFs Path 1. The VIF1 unit is in\ncharge of sending micro-programs to VU1, unpacking compressed data to\nVU1s data memory, signaling VU1 to start executing its micro-program,\nand it also can send data to the GS via GIFs Path 2. The GIF Unit is in\ncharge of managing the Path 1/2/3 transfers that are being sent to the\nGS, and it does this according to path priority (Path 1 ",">"," Path 2 ",">","\nPath 3) and some other specific rules."),(0,o.kt)("p",null,"If you notice in the diagram, the GS (Graphics Synthesizer) has data\ncoming into it frequently, and rarely ever needs to send data back to\nother components. When threading the GS, what we essentially do is\nbuffer GIF transfers that are being sent to the GS, and then once we\nhave enough buffered data we kick-start the MTGS thread and have it\nstart processing the GIF packets we previously buffered. While its\nprocessing this buffered data, the EE main thread is still running and\nmore GIF transfers are being buffered so that MTGS can process them when\nit gets the chance"),(0,o.kt)("p",null,"The key to making something like this work from an emulation standpoint\nis that the main emulation thread thinks that nothing is being threaded\nat all; it sends data to the GIF Unit like normal, and this gets\nprocessed according to the timing information from the EE core. However\nthat GIF transfer data is being buffered which allows the MTGS thread to\nprocess the buffered data in parallel with the main emulation thread. If\nyou notice though this design means that the MTGS thread is actually\nrunning behind the main emulation thread in terms of the data its\nprocessing, because the buffered data is old data that the main\nemulation thread has generated. The only time this can be a problem, is\nif the main emulation thread ever needs to read back data from the MTGS\nthread. In this case what needs to happen is the main emulation thread\nneeds to stall and wait until the MTGS thread is done processing. Once\nthat is done, the MTGS thread should have up-to-date status information,\nand the main emulation thread can read back the appropriate data from\nthe MTGS thread. This syncing is slow and if emulation needs to do it a\nlot it eliminates the speedup from threading (and can even be a big\nslowdown), however as noted in the above diagram, the GS rarely ever\nneeds to transfer data back; so that means threading the GS is almost\nalways a speedup for us."),(0,o.kt)("p",null,"Now that we understand the basics of how the MTGS thread works, we can\nmove onto MTVU. Since the GS was already the best candidate for\nthreading in a ps2 emulator, it meant that threading any other component\nwould be even more of a challenge. From analyzing pcsx2s activity and\ndesign, the next component that made sense to thread was VU1. It is\nrelatively isolated compared to the other components, and it takes a lot\nof computation power to emulate. However, there are some big problems\nwhich must be solved to get a fast and working threaded VU1."),(0,o.kt)("p",null,"One of the problems deals with what was talked about in the beginning of\nthis article, how typical emulation runs the different components based\noff the cycles of the main CPU. With the typical emulation approach we\nwould run the EE for say 2048 cycles, and then we would run VU1 for its\nequivalent amount of cycles which would be 1024 vu cycles (VU1 runs at\nhalf the clock speed of the EE). This approach would be very problematic\nfor us with threading, because it would mean VU1 doesnt run long enough\nfor threading to be a speedup. However we are very fortunate because on\nthe PS2 games cant be as cycle-critical as they are with older systems.\nAny well coded ps2 game has to have thread safe code and account for\npossible timing inconsistencies (if the game doesnt do this, then it\nlikely wont be stable on the real console, or between minor variations\nof the console). This means we can generally get away with running VU1\nprograms disregarding EE timing completely, and pcsx2 has actually been\nusing this approach for VU1 for years now (because even in a\nnon-threaded design its faster to emulate this way). Instead of running\nVU1 for X amount of cycles based off EE cycles, we have code it so that\nVU1 executes its complete micro-program till its finished. This is great\nnews for threading VU1 because it means that we can run VU1 on a thread\nregardless of any EE timing and it wont be a problem. It also means that\nsince VU1 has been running in its entirety this whole time, from the EEs\npoint of view it has always seen that VU1s status is finished (because\nit never gets a chance to read the status as executing). This means that\nyou can actually queue multiple VU1 programs, and run them at a later\ntime as far as the EE is concerned, because it doesnt really care about\nVU1s status. This is even more good news for threading since it means\nmore through-put for the VU1 thread if it can be queuing and\nsequentially executing multiple VU1 programs (as opposed to running only\none VU1 program while the EE waits on it to finish)."),(0,o.kt)("p",null,"There is another big problem with VU1 threading however: the VU1\nprocessor works closely with the GIF Unit, and the GIF Unit is timed and\nexecuted according to the main emulation thread. So that means sending\ndata to the GIF Unit from the VU1 thread would be at totally incorrect\ntimes with respect to core emulation timing. Now our solution for this\nis a bit tricky. What we end up doing is assume every VU1 program will\nsend data to the GIF Unit. So immediately when the main emulation thread\nfinds out it needs to execute a VU1 program, it sends a fake GIF\ntransfer packet to pcsx2s GIF Unit (and immediately after starts\nexecuting the VU1 program on the MTVU thread). The GIF Unit then acts\nlike normal on the main emulation thread with its path arbitration and\neventually uploads this fake GIF packet to the MTGS thread. The MTGS\nthread acts like normal telling the GS plugin to process real Path\n2/Path 3 GIF packets until it reaches the fake Path 1 packet. When it\ndoes this, the MTGS thread asks the MTVU thread if at least 1 VU1\nprogram has finished since the uploading of the fake GIF packet. If it\nhasnt, then the MTGS thread stalls until the MTVU thread can finish a\nVU1 program. If the MTVU thread has already finished a VU1 program, it\nsignals the MTGS thread and then the MTGS thread wakes up and starts\ntalking to pcsx2s GIF Unit. At this point the GIF Unit should have a\nPath 1 packet pending which the MTGS thread can process, because while\nthe MTGS thread was waiting, the MTVU thread had been communicating with\nthe GIF Unit and uploading real Path 1 packet data asynchronously to a\nbuffer. When the MTVU thread finishes the VU1 program, just before it\nsignals the MTGS thread that its done, it talks to the GIF Unit and\ntells it that all the Path 1 data that was just transferred to it should\nbe considered a full Path 1 packet (and if no data was written to it,\nconsider it a full Path 1 packet with size = 0). So going back to the\nMTGS thread, at this point it requests a full Path 1 packet from the GIF\nUnit, and the GIF Unit gives it one of the Path 1 packets that the MTVU\nthread has finished. Then the MTGS thread tells the GS plugin to process\nthis Path 1 packet, and the cycle just continues over and over every\ntime a VU1 program is run."),(0,o.kt)("p",null,"The only flaw in the above solution for GIF processing is that in\nreality pcsx2 needs to do some additional processing of GIF packet data\non the main emulation thread to check if certain privileged GS registers\nare being written to (SIGNAL/FINISH/LABEL). With the approach described\nabove, we first send fake GIF packet data that the GIF Unit processes\ninstead of the real one; but if the game was really supposed to send a\nGIF packet which writes to the GSs SIGNAL/FINISH/LABEL registers, then\nwe dont know about it and were out of luck. The game in this case will\nlikely hang. There is no 100% reliable solution to this problem that\nstill allows a fast threaded VU1, because in order to know for sure that\nthose privileged registers will not be written, you need to execute the\nVU1 program and find out that it is not sending a GIF packet which\nwrites to them. The best you can do is predict what the VU1 program will\ndo based off what it did last time, but this is still not fully\nreliable, and a lot more complicated, it also will have a lot more\noverhead compared to the way were currently threading VU1, so in my\nopinion its not worth it. The good news is that its very rare for a game\nto write to the privileged registers from VU1s GIF Path 1 (they usually\ndo it from Path 2/Path 3), so that means that MTVU should be very\ncompatible, however due to this potential problem, MTVU has to remain a\nspeedhack instead of adding it as a normal option."),(0,o.kt)("p",null,"The third big problem with VU1 emulation is the communication with VIF1.\nThe VIF1 if you remember is in charge of sending new micro-programs to\nVU1 and decompressing data onto VU1 memory. In addition to this it has\ncommands to tell VU1 to start executing, and it has commands to wait on\nVU1 to finish executing. All this VIF1 - VU communication screams\nproblems for a threaded VU1 design. However we have a clever solution\nfor this too. What we essentially do is duplicate VIF1, we have one\ninstance on the main emulation thread, and we have another instance on\nthe MTVU thread. Whenever VIF1 is told to do something on the main\nemulation thread, it runs like normal until it reaches a command which\ninteracts with VU1. If the command is to wait on VU1, it just ignores\nit, because remember pcsx2 already has been used to VU1 running in its\nentirety, so VU1 is always complete when VIF1 has a command to wait on\nit; so theres no need to wait on VU1. If the command is to transfer data\nto VU1s memory, things get a tad more complex. What we do is write the\ncommand in the MTVU threads internal ring buffer. The MTVU thread is\nessentially just a ring buffer with queued commands which get processed\nin-order. The VIF1 writes a command in MTVUs ring buffer to say upload\n1024 bytes of data to VU1 micro-memory, and then the 1024 bytes of data\nis also written to the ring buffer. Next VIF1 can send a command that\nsays execute VU1 with PC address = 0x1000, and this command gets written\nto MTVUs ring buffer as well. Finally MTVU decides its time to start\nexecuting commands in its ring buffer, and it sees the VIF1 command that\nwrites 1024 bytes to VU1 micro-memory, and it executes this command on\nthe MTVU thread. Then it sees the command to start VU1 executing at\naddress 0x1000, and it starts executing the microVU1 recompiler with PC\n= 0x1000. This is the basics of how it works, the reason I said we have\nto duplicate VIF1 between the main emulation thread, and the MTVU\nthread, is that some VIF1 commands like VIF Unpack rely on status\ninformation from VIF1s registers. To get this working on the MTVU thread\nwe need a separate state of VIF1 registers and status information,\nbecause the VIF1s status on the main emulation thread would be different\nby the time the commands are executed on the MTVU thread. Essentially\nfrom this description, you can see that the MTVU thread not only threads\nVU1, but also threads VIF1 command too. This is another speedup since\nVIF1 Unpacks are very computationally expensive (and thats why we even\nhave a VIF Unpack recompiler)."),(0,o.kt)("p",null,"The remaining problems of VU1 threading are handling the cases where the\nEE or other processors like VU0 ever need to read back from VU1. This\nhappens very rarely, but in this situation all we need to do is call a\nWait on VU1 Thread function immediately before trying to read from VU1\nmemory. If it happened often it would ruin any chance of speedups\nthreading VU1 had, but luckily it rarely happens. The EE actually works\nvery closely with VU0 as opposed to VU1, and so threading VU0 would not\nbe a speedup because the EE would end up reading back from it too much.\nThe good thing is that VU0 is rarely a bottleneck in games; this is\nevident because you can usually run VU0 interpreters and get a minimal\nspeed-hit (if you try to run vu1 interpreters on the other hand, your\nspeed will usually crawl to ","~","2fps)."),(0,o.kt)("p",null,"By now you should hopefully have a better understanding of how pcsx2s\nVU1 and GS threading basically works, but you may still have questions\non why its taken so long for us to do it. Well as shown above there were\na lot of problems with threading VU1 which needed to be solved, and we\nwerent sure about the best ways to handle them. Another huge reason is\npcsx2 was not in a good state to make VU1 threading a reality until\nrecently. We didnt have a centralized GIF Unit like the ps2 does;\ninstead we had code that was all over the place and running the GIF\npaths without proper scheduling. The new GIF Unit rewrite solved this\nproblem for us. Another problem was that Super VU1, the old VU1\nrecompiler, was not thread safe (it combines stuff for VU0 and VU1\nemulation together), so a new thread safe recompiler was needed, which\nwas one of the goals for the microVU recompiler I wrote. Another problem\nwas the sloppiness of a lot of old pcsx2 code which had needless inter\ndependencies between various other code modules; we needed to isolate\nthe related code with code refactoring and rewrites to clearly separate\nthe code and make it thread safe. We also needed a thread-safe code\nemitter which allowed us to run multiple dynamic-recompilers in\nparallel; we solved this by a code emitter rewrite and using thread\nlocal storage for the emitters global data. Lastly we needed someone who\nknew about all these various components and was bored enough to try\nmaking something like this work"))}c.isMDXComponent=!0},36415:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/webp;base64,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"}}]);