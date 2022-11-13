"use strict";(self.webpackChunkpcsx_2_net=self.webpackChunkpcsx_2_net||[]).push([[3515],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4762:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={authors:["bositman"],date:new Date("2014-09-09T00:00:00.000Z"),description:"After a brief period of slowed development, PCSX2 has started picking up speed again with the help of new contributors as well as familiar faces",draft:!1,tags:["devblog"],title:"PCSX2 Development Picks Up Speed"},i=void 0,l={permalink:"/blog/2014/pcsx2-development-picks-up-speed",editUrl:"https://github.com/PCSX2/pcsx2-net-www/tree/master/blog/2014/pcsx2-development-picks-up-speed/index.mdx",source:"@site/blog/2014/pcsx2-development-picks-up-speed/index.mdx",title:"PCSX2 Development Picks Up Speed",description:"After a brief period of slowed development, PCSX2 has started picking up speed again with the help of new contributors as well as familiar faces",date:"2014-09-09T00:00:00.000Z",formattedDate:"September 9, 2014",tags:[{label:"devblog",permalink:"/blog/tags/devblog"}],readingTime:2.83,hasTruncateMarker:!0,authors:[{name:"Bositman",url:"https://github.com/bositman",imageURL:"https://github.com/bositman.png",key:"bositman"}],frontMatter:{authors:["bositman"],date:"2014-09-09T00:00:00.000Z",description:"After a brief period of slowed development, PCSX2 has started picking up speed again with the help of new contributors as well as familiar faces",draft:!1,tags:["devblog"],title:"PCSX2 Development Picks Up Speed"},prevItem:{title:"First 60 Fps Video And Some Website News",permalink:"/blog/2014/first-60-fps-video-and-some-website-news"},nextItem:{title:"PCSX2 Drops Avg Toolbar",permalink:"/blog/2014/pcsx2-drops-avg-toolbar"}},s={authorsImageUrls:[void 0]},p=[],u=(c="Image",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var c;const d={toc:p};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"After a brief period of slowed development, PCSX2 has started picking up\nspeed again with the help of new contributors as well as familiar faces.\nSeveral important improvements have been made since the last\nannouncement."),(0,r.kt)("p",null,"The most important of these improvements is undoubtedly the new\ndebugger. Our debugger has long been an area in need of attention, and\nthanks to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Kingcom"},"Kingcom")," it has finally received\na much needed overhaul. This new debugger will make it much easier to\nchase down the problems in broken games. Rama has already managed to get\nthe NHL series working by using it! Featuring a live instruction\nassembler, thread view, full register view, a function list and more,\nthis improved debugger will certainly be a boon for our developers."),(0,r.kt)("p",null,"Another area that has received welcome attention is work towards 64 bit\ncompatibility. Although there is still a lot of work to be done before\nwe release a 64 bit build, the foundation has been laid. GSdx compiles\nfor x64 now, and several key changes have been made to the PCSX2 core to\nsupport x64 as well. These changes include preparing the emitter for 64\nbit jumps, updating vtlb to work on x64, and changing instances of 32bit\nonly code to be universal. These improvements help move us closer to\nhaving a true 64 bit build."),(0,r.kt)("p",null,"Linux matters have improved as well. Many of the new contributors use\nthat OS instead of Windows and improvements here always help general\nportability in the long run."),(0,r.kt)("p",null,"Lastly, a few important changes have been made to some of the plugins.\nOn top of general bug fixes, CDVDgigaherz now tries to keep the disc\nalways spinning at a low speed instead of letting the drive spin all the\nway down. This improves game performance when using a physical disc\nbecause the drive is always ready to provide data. Lilypad also supports\nhot-plugging of Xinput devices now. That means if you forget to plug in\nyour Xinput device before starting PCSX2, it will recognize it when it\nis plugged in without requiring a restart."),(0,r.kt)("p",null,"Here is a rundown of the most significant changes:"),(0,r.kt)("p",null,"64 bit related:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Changed instances of u32 to uptr"),(0,r.kt)("li",{parentName:"ul"},"Prepared emitter for 64 bit jumps"),(0,r.kt)("li",{parentName:"ul"},"Made yuv2rgb and hashmap functions 64 bit ready"),(0,r.kt)("li",{parentName:"ul"},"vtlb now works on on x64"),(0,r.kt)("li",{parentName:"ul"},"Supported grabbing the MXCSR mask on x86_64 in cpudetect"),(0,r.kt)("li",{parentName:"ul"},"GSdx now compiles for x64")),(0,r.kt)("p",null,"VIF:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed Looney Tunes: Back in Action")),(0,r.kt)("p",null,"Improved Debugger:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Allows much easier debugging of broken games"),(0,r.kt)("li",{parentName:"ul"},"Already used to get NHL games working"),(0,r.kt)("li",{parentName:"ul"},"Features a live assembler (e.g. mark an instruction, type nop to\nreplace that instruction with nop)")),(0,r.kt)("p",null,"Plugins:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bug fixes for CDVDgigaherz"),(0,r.kt)("li",{parentName:"ul"},"CDVDgigaherz now prevents the drive from spinning all the way down\nwhich improves performance when playing from disc"),(0,r.kt)("li",{parentName:"ul"},"Lilypad supports hot-plugging of Xinput devices")),(0,r.kt)("p",null,"Code cleanup:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Changed int to bool for variables that only hold 0/1"),(0,r.kt)("li",{parentName:"ul"},"Fixes for potential crashes"),(0,r.kt)("li",{parentName:"ul"},"Fixes for potential variable leaks"),(0,r.kt)("li",{parentName:"ul"},"Preparation for WX3 (for now we still use a custom 2.8)"),(0,r.kt)("li",{parentName:"ul"},"Removed managed Vsync"),(0,r.kt)("li",{parentName:"ul"},"Folder name fixes for Windows/Linux"),(0,r.kt)("li",{parentName:"ul"},"Improved use of namespaces"),(0,r.kt)("li",{parentName:"ul"},"Fixes for ELF parser"),(0,r.kt)("li",{parentName:"ul"},"Started using generic memcpy instead of custom one(this actually\nbrings a small speedup!)")),(0,r.kt)("p",null,"Misc:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Updated translations for several languages")),(0,r.kt)("p",null,"Check out the new debugger below:"),(0,r.kt)(u,{cols:6,src:n(89382).Z,mdxType:"Image"}))}m.isMDXComponent=!0},89382:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/debugger_s-1c38c021c95415b022178cb66eb4e13c.webp"}}]);