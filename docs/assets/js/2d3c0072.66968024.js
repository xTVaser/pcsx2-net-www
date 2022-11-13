"use strict";(self.webpackChunkpcsx_2_net=self.webpackChunkpcsx_2_net||[]).push([[3427],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,f=c["".concat(s,".").concat(d)]||c[d]||u[d]||o;return a?n.createElement(f,i(i({ref:t},m),{},{components:a})):n.createElement(f,i({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},58891:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={authors:["bositman"],date:new Date("2010-05-29T00:00:00.000Z"),description:"After more than a year since the last stable 0.9.6 release and 8 months since the last beta release of PCSX2, the new beta version is finally ready!",draft:!1,tags:["progress-report"],title:"PCSX2 0.9.7 Beta Released!"},i=void 0,l={permalink:"/pcsx2-net-www/blog/2010/pcsx2-0-9-7-beta-released",editUrl:"https://github.com/PCSX2/pcsx2-net-www/tree/master/blog/2010/pcsx2-0-9-7-beta-released/index.mdx",source:"@site/blog/2010/pcsx2-0-9-7-beta-released/index.mdx",title:"PCSX2 0.9.7 Beta Released!",description:"After more than a year since the last stable 0.9.6 release and 8 months since the last beta release of PCSX2, the new beta version is finally ready!",date:"2010-05-29T00:00:00.000Z",formattedDate:"May 29, 2010",tags:[{label:"progress-report",permalink:"/pcsx2-net-www/blog/tags/progress-report"}],readingTime:1.74,hasTruncateMarker:!0,authors:[{name:"Bositman",url:"https://github.com/bositman",imageURL:"https://github.com/bositman.png",key:"bositman"}],frontMatter:{authors:["bositman"],date:"2010-05-29T00:00:00.000Z",description:"After more than a year since the last stable 0.9.6 release and 8 months since the last beta release of PCSX2, the new beta version is finally ready!",draft:!1,tags:["progress-report"],title:"PCSX2 0.9.7 Beta Released!"},prevItem:{title:"Facebook, Twitter And Exposure!",permalink:"/pcsx2-net-www/blog/2010/facebook-twitter-and-exposure"},nextItem:{title:"SPU2 Is More Than Just Sound",permalink:"/pcsx2-net-www/blog/2010/spu2-is-more-than-just-sound"}},s={authorsImageUrls:[void 0]},p=[],m={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"After more than a year since the last stable 0.9.6 release and 8 months since the last beta release of PCSX2, the new beta version is finally ready!\nThe most notable change is the all new GUI powered by wxWidgets, but the\namount of improvements in this release is really amazing\n\ud83d\ude0a"),(0,r.kt)("p",null,"This 0.9.7 release is marked as unstable/beta, meaning it still has some\nknown bugs and unimplemented features but it is fully supported by the\nPCSX2 team. For more info, check the included readme file."),(0,r.kt)("p",null,"Without further delay, here's the extensive changelog:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"New GUI based on wxWidgets working on a separate thread"),(0,r.kt)("li",{parentName:"ul"},"microVU, an all new VU0/VU1/COP2 recompiler"),(0,r.kt)("li",{parentName:"ul"},"VIF rewritten and a new Vif Unpack recompiler"),(0,r.kt)("li",{parentName:"ul"},"IPU improvements, many more videos now play perfectly"),(0,r.kt)("li",{parentName:"ul"},"Stable full screen operation with GSdx"),(0,r.kt)("li",{parentName:"ul"},"Alt+Enter Hotkey for real-time fullscreen/window mode switching"),(0,r.kt)("li",{parentName:"ul"},"Many new emulation options, complete with tooltips"),(0,r.kt)("li",{parentName:"ul"},"New MTGS, much more efficient and compatible"),(0,r.kt)("li",{parentName:"ul"},"New BIOS skipping method, more compatible and correct"),(0,r.kt)("li",{parentName:"ul"},"New Host File System Support"),(0,r.kt)("li",{parentName:"ul"},"Turbo/Slow motion settings for the frame limiter"),(0,r.kt)("li",{parentName:"ul"},"On the fly changing of settings and plugins"),(0,r.kt)("li",{parentName:"ul"},"Threaded Saving/Loading states, so it does not pause gameplay"),(0,r.kt)("li",{parentName:"ul"},"Built in ISO reader with a recently used ISO list"),(0,r.kt)("li",{parentName:"ul"},"Suspend / Resume emulation safely and fast"),(0,r.kt)("li",{parentName:"ul"},"Simplified plugin configuration dialog, with more options"),(0,r.kt)("li",{parentName:"ul"},"Full DVD9 game support (for example God of War, Xenosaga, Gran\nTurismo 4 etc)"),(0,r.kt)("li",{parentName:"ul"},"First time configuration wizard"),(0,r.kt)("li",{parentName:"ul"},"Settings stored in your User documents folder by default to prevent\nVista / Windows 7 permission issues"),(0,r.kt)("li",{parentName:"ul"},"New Game database detects the game you run, displays compatibility\ninfo, and auto applies special game fixes/patches if needed"),(0,r.kt)("li",{parentName:"ul"},'Cheats are now separate from patches, cheats can be placed in the\n"cheats" folder and enabled/disabled from pcsx2\'s file-menu'),(0,r.kt)("li",{parentName:"ul"},"Many important plugin updates, GSdx has many bugs and memory leaks\nfixed, SPU2-X makes dozens of games boot which never did before"),(0,r.kt)("li",{parentName:"ul"},"And a huge amount of improvements and bug fixes which we don't\nremember anymore")))}u.isMDXComponent=!0}}]);