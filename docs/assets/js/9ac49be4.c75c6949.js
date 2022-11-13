"use strict";(self.webpackChunkpcsx_2_net=self.webpackChunkpcsx_2_net||[]).push([[9179],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=i,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||o;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},73901:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const o={authors:["jake stine"],date:new Date("2009-06-02T00:00:00.000Z"),description:"One of the less obvious things that has plagued PCSX2's compatibility over the years is its event handling system",draft:!1,tags:["devblog"],title:"Events Plenty"},r=void 0,s={permalink:"/pcsx2-net-www/blog/2009/events-plenty",editUrl:"https://github.com/PCSX2/pcsx2-net-www/tree/master/blog/2009/events-plenty/index.mdx",source:"@site/blog/2009/events-plenty/index.mdx",title:"Events Plenty",description:"One of the less obvious things that has plagued PCSX2's compatibility over the years is its event handling system",date:"2009-06-02T00:00:00.000Z",formattedDate:"June 2, 2009",tags:[{label:"devblog",permalink:"/pcsx2-net-www/blog/tags/devblog"}],readingTime:3.37,hasTruncateMarker:!0,authors:[{name:"Jake Stine",key:"jake stine"}],frontMatter:{authors:["jake stine"],date:"2009-06-02T00:00:00.000Z",description:"One of the less obvious things that has plagued PCSX2's compatibility over the years is its event handling system",draft:!1,tags:["devblog"],title:"Events Plenty"},prevItem:{title:"Recompilers All Dems Buzzwords",permalink:"/pcsx2-net-www/blog/2009/recompilers-all-dems-buzzwords"},nextItem:{title:"PCSX2 Logo Design Contest",permalink:"/pcsx2-net-www/blog/2009/pcsx2-logo-design-contest"}},l={authorsImageUrls:[void 0]},c=[],p={toc:c};function h(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"One of the less obvious things that has plagued Pcsx2's compatibility\nover the years is its event handling system. The system in place as of\n0.9.6 is adequate for interpreter-based emulation but is not\nwell-equipped to handle the methods that a recompiler uses to manage cpu\ncycle updates. This is something we aim to fix in the coming weeks."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Cycle-based Timing Explained")),(0,i.kt)("p",null,"All cpus have a cycle rate, which is typically the Mhz/Ghz values you're\nmost familiar with when talking about any cpu. An i7 clocked at 2.83ghz\nhas a 2.83ghz cycle rate. Now, the actual throughput of instructions can\nvary greatly since each cycle of the cpu consists of several ",(0,i.kt)("em",{parentName:"p"},"stages"),"\nand multiple piplines, each of which can have dependency stalls and has\nvarying rules for when such stalls occur. The cycle rate, however, is\nalways 2.83ghz. Because cycle rates are a known constant, they make a\ngood barometer for synchronizing the activities of a multi-processor\ndesign like the Playstation 2."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Why do Recompilers Complicate Event Testing?")),(0,i.kt)("p",null,"Recompilers work as a significant speedup over interpreters by doing two\nthings:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Recompile the machine code of a emulated CPU (in our case MIPS\ninstructions) into code native to the host machine (ix86\ninstructions)."),(0,i.kt)("li",{parentName:"ul"},"Prefetch and pre-decode emulated instructions, and inline them into\nblocks.")),(0,i.kt)("p",null,"The thing recompilers are most well-known for -- recompiling to native\nmachine code -- is actually the less effective of the two things\nrecompilers do for speeding up emulation. The primary speedup typically\ncomes from the prefetching and inlining of instructions, which in\naddition to eliminating the instruction fetch/decode stage (by far the\nslowest part of any interpreter), also allows for cross-instruction\noptimizations such as constant propagation and register caching/mapping.\nIn other words, a recompiler is effectively executing emulated\ninstructions in pre-compiled ",(0,i.kt)("em",{parentName:"p"},"bursts")," . This is so important to\nperformance that a recompiler without block-level execution would hardly\nbe any faster than an interpreter."),(0,i.kt)("p",null,"As part of the design of block-level execution, the recompiled code only\nupdates cpu cycle counts and tests for scheduled events at block\nboundaries. Blocks typically span 5 to 35 cycles, but in some cases can\nspan a hundred cycles or more. When the subsequent Event Test is\nperformed, several scheduled events may be pending execution. This is\nwhere problems can occur: The current event system implemented into\nPcsx2 executes all pending events in no particular order, leading to\nevents being executed out-of-order when multiple events time-out during\na single block. Typically most events don't have dependencies on each\nother, or games don't use them in a way that execution order matters.\nBut sometimes they do, and in those cases behavior can be unpredictable,\nor can cause the game to fail outright. To make matters worse, the\npending events typically don't know how late they are, and will\nre-schedule subsequent events in increasingly belated fashion. The\ncurrent implementation of EE and IOP counters have tons of complicated\ncode meant to compensate for this limitation (both slow and were nearly\nimpossible to get right)."),(0,i.kt)("p",null,"The fix for this is to use an event system I'll call ",(0,i.kt)("strong",{parentName:"p"},"decremental delta\ntime.")," It has three advantages:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Makes it easy to execute events in scheduled order regardless of the\namount of time which has passed since the last Event Test."),(0,i.kt)("li",{parentName:"ul"},'Maintains relative cycle scheduling at a high level so that none of\nthe events being re-scheduled "lose time" due to belated\nblock-boundary event testing.'),(0,i.kt)("li",{parentName:"ul"},"Simplifies event handling on all levels, and provides significant\nspeedups for event testing and event dispatching.")),(0,i.kt)("p",null,"It's hard to know beforehand just how beneficial in-order execution of\nevents will be. I'm anticipating that it might actually fix a few\nemulation problems on the IOP recompiler in particular, since it has a\nslow cycle rate and also has a handful of events which can have\npotential inter-dependencies. For that reason I'll be implementing the\nsystem first into the IOP, and then when all the chinks in its armor are\nworked free we'll port the EE side of the emulator over to it."))}h.isMDXComponent=!0}}]);