"use strict";(self.webpackChunkpcsx_2_net=self.webpackChunkpcsx_2_net||[]).push([[3462],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4917:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={authors:["jake stine"],date:new Date("2009-06-23T00:00:00.000Z"),description:"There are a lot of buzzwords in emulator recompilation",draft:!1,tags:["devblog"],title:"Recompilers All Dems Buzzwords"},i=void 0,l={permalink:"/blog/2009/recompilers-all-dems-buzzwords",editUrl:"https://github.com/PCSX2/pcsx2-net-www/tree/master/blog/2009/recompilers-all-dems-buzzwords/index.mdx",source:"@site/blog/2009/recompilers-all-dems-buzzwords/index.mdx",title:"Recompilers All Dems Buzzwords",description:"There are a lot of buzzwords in emulator recompilation",date:"2009-06-23T00:00:00.000Z",formattedDate:"June 23, 2009",tags:[{label:"devblog",permalink:"/blog/tags/devblog"}],readingTime:3.855,hasTruncateMarker:!0,authors:[{name:"Jake Stine",key:"jake stine"}],frontMatter:{authors:["jake stine"],date:"2009-06-23T00:00:00.000Z",description:"There are a lot of buzzwords in emulator recompilation",draft:!1,tags:["devblog"],title:"Recompilers All Dems Buzzwords"},prevItem:{title:"Logo Design Contest Closed",permalink:"/blog/2009/logo-design-contest-closed"},nextItem:{title:"Events Plenty",permalink:"/blog/2009/events-plenty"}},s={authorsImageUrls:[void 0]},p=[],c={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"There are a lot of buzzwords in emulator recompilation. Popular ones\ninclude:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Intermediate Representation"),(0,o.kt)("li",{parentName:"ul"},"Intermediate Language"),(0,o.kt)("li",{parentName:"ul"},"Register Mapping"),(0,o.kt)("li",{parentName:"ul"},"Register Allocation"),(0,o.kt)("li",{parentName:"ul"},"Constant Propagation"),(0,o.kt)("li",{parentName:"ul"},"Constant Folding"),(0,o.kt)("li",{parentName:"ul"},"Register coloring"),(0,o.kt)("li",{parentName:"ul"},"SSA (static single assignment optimization)")),(0,o.kt)("p",null,"What do they mean? And perhaps more importantly, what do they mean to a\nuser of the emulator? Truth is, not much usually. Most of these things\nare technologies and strategies borrowed from high level language\ncompilers like those for C/C++, C","#",", Java, etc. Some of them are useful\nto emulator recompilers, some not so much."),(0,o.kt)("p",null,"The first thing to consider when working on a recompiler is that we are\nworking with what is most likely ",(0,o.kt)("em",{parentName:"p"},"optimized code")," . The machine code\nthat your favorite games are running on your PS2 is already parsed and\noptimized by a compiler (or in the case of older consoles,\nhand-optimized). Secondly, recompilers typically have a single-block\nscope limitation (which is hard to explain, but basically means that\ncompilation stops when branch conditionals are encountered). This all\nbut eliminates the usefulness of ",(0,o.kt)("strong",{parentName:"p"},"SSA")," and ",(0,o.kt)("strong",{parentName:"p"},"register coloring"),"\ntechniques, since their main benefits are in applying optimizations over\na series of conditional code blocks, and elimination of dead code.\nFurthermore, even when higher level optimizations can be applied, the\nemulated CPU/Register states must still be guaranteed at frequent\nintervals. Unlike high level languages, an emulator must manually track\nthings like the Program Counter, instruction pipeline stalls, and other\nhardware complications. So typically the benefits of such cross-block\noptimizations get watered down anyway."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constant Folding")," and ",(0,o.kt)("strong",{parentName:"p"},"Constant Propagation")," are, for all intents\nand purposes, the same thing. They always work together, and most people\nuse the terms interchangeably. You'll never really find a practical\nsituation where one is used without the other. Constant folding refers\nto the evaluation of constant expressions like ",(0,o.kt)("strong",{parentName:"p"},"100 ","*"," 5")," . Constant\npropagation refers to the substitution of variables with known\nconstants, like:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"x = 100 * 5;"),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"y = x \\* 10;")),(0,o.kt)("p",null,"... in which case, the value of 'y' is known at compilation time, and\ncan be further substituted (propagated) anywhere 'y' is used (this\nshould remind you of your 5th grade algebraic homework!). As mentioned\nbefore, many people use the terms interchangeably, so when you see\nanother emulator talk of Constant Folding, they mean the same thing I do\nwhen I talk of Constant Propagation. The term 'propagation' is\ntechnically more correct, but folding is easier to type and looks nicer\nwhen naming functions in your recompiler."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Intermediate Language (IL)")," and ",(0,o.kt)("strong",{parentName:"p"},"Intermediate Representation (IR)"),"\nare more or less the same thing as well. IL simply implies an IR that\nhas a (mostly) human-readable form. That is, an IL is in fact a\nprogramming language, usually bearing some similarity to assembly code,\nbut simpler and more sensible. An IR is just a raw collection of data\nsufficient to represent all information needed to optimize code and\ngenerate the final recompiled product."),(0,o.kt)("p",null,"In either case, the dual purposes of an IR/IL are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To simplify the instruction set as much as possible so that\noptimizations can be analyzed without requiring a lot of\nspecial-case code."),(0,o.kt)("li",{parentName:"ul"},'To provide a platform-independent "stage" to the compilation\nprocess, so that ports of the recompiler to new target platforms\nneed not be rewritten from the ground up.')),(0,o.kt)("p",null,"Because of the complicated nature of an emulator, an IL itself is\nvirtually useless. There's typically too much per-instruction cpu state\ninformation that has to be tracked for a human-readable language output\nto be viable. But for the same reason an IR can be remarkably helpful in\nreducing the overall complexity of a recompiler implementation, and is\nalmost a foregone necessity when implementing Register Mapping."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Register Mapping")," and ",(0,o.kt)("strong",{parentName:"p"},"Register Allocation")," are once again a set of\nfairly interchangeable terms. I prefer the term mapping, but other folks\nlike to call it allocation. Register mapping/allocation is typically one\nof the final stages of recompilation since it's dependent on the target\nplatform (in our case x86), and is also one of the most complex. It's\nalso typically ",(0,o.kt)("em",{parentName:"p"},"not")," very beneficial for performance when the target\nplatform is an x86 machine (which in our case it is), unless register\nmapping algorithms are ",(0,o.kt)("em",{parentName:"p"},"very")," clever."),(0,o.kt)("p",null,"As I mentioned in my previous blog entry, the ",(0,o.kt)("em",{parentName:"p"},"most significant")," factor\nin a recompiler's speed is simply the fact that it's acting as a\ndecoded-instruction cache, and that it executes instructions in bursts\n(a block at a time instead of one-by-one). All the rest of these\ntechniques tend to be more for the factors of code maintainability and\nacademic challenge than for end-user performance gains."))}m.isMDXComponent=!0}}]);