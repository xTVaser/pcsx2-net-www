"use strict";(self.webpackChunkpcsx_2_net=self.webpackChunkpcsx_2_net||[]).push([[9241],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=u(n),m=a,d=h["".concat(s,".").concat(m)]||h[m]||p[m]||r;return n?o.createElement(d,i(i({ref:t},c),{},{components:n})):o.createElement(d,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},96158:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var o=n(87462),a=(n(67294),n(3905));const r={authors:["bositman"],date:new Date("2010-02-10T00:00:00.000Z"),description:"Development of the new 0.9.7 version of the emulator with the all new GUI is going strong and soon all the old GUI functionality will be implemented. After that it's bug hunting time and then a beta release!",draft:!1,tags:["devblog"],title:"PCSX2 0.9.7 Sneak Peek!"},i=void 0,l={permalink:"/blog/2010/pcsx2-0-9-7-sneak-peek",editUrl:"https://github.com/PCSX2/pcsx2-net-www/tree/master/blog/2010/pcsx2-0-9-7-sneak-peek/index.mdx",source:"@site/blog/2010/pcsx2-0-9-7-sneak-peek/index.mdx",title:"PCSX2 0.9.7 Sneak Peek!",description:"Development of the new 0.9.7 version of the emulator with the all new GUI is going strong and soon all the old GUI functionality will be implemented. After that it's bug hunting time and then a beta release!",date:"2010-02-10T00:00:00.000Z",formattedDate:"February 10, 2010",tags:[{label:"devblog",permalink:"/blog/tags/devblog"}],readingTime:1.78,hasTruncateMarker:!0,authors:[{name:"Bositman",url:"https://github.com/bositman",imageURL:"https://github.com/bositman.png",key:"bositman"}],frontMatter:{authors:["bositman"],date:"2010-02-10T00:00:00.000Z",description:"Development of the new 0.9.7 version of the emulator with the all new GUI is going strong and soon all the old GUI functionality will be implemented. After that it's bug hunting time and then a beta release!",draft:!1,tags:["devblog"],title:"PCSX2 0.9.7 Sneak Peek!"},prevItem:{title:"Introduction To Dynamic Recompilation",permalink:"/blog/2010/introduction-to-dynamic-recompilation"},nextItem:{title:"A New Kind Of Fullscreen",permalink:"/blog/2010/a-new-kind-of-fullscreen"}},s={authorsImageUrls:[void 0]},u=[],c={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"It has been a long time since the last news concerning PCSX2, so I\nthought I'd bring you up to date\n\ud83d\ude0a\nDevelopment of the new 0.9.7 version of the emulator with the all new GUI is going strong and soon all the old GUI functionality will be implemented. After that it's bug hunting time and then a beta release!"),(0,a.kt)("p",null,"In this news post I'll present some of the exciting new features of the\nnew GUI builds, for those of you who haven't checked it out yet!\nClick the images to view them in normal size"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"All new menus, for improved usability and faster configuration"),(0,a.kt)("li",{parentName:"ul"},"On the fly suspend and resume, perfectly stable, safe and fast"),(0,a.kt)("li",{parentName:"ul"},"On the fly setting switching or even plugin switching"),(0,a.kt)("li",{parentName:"ul"},"Compatible with Aero Glass and Windows eye goodies")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(17420).Z,width:"300",height:"197"}),"\n",(0,a.kt)("img",{src:n(15548).Z,width:"300",height:"187"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Threaded GUI, for better responsiveness, usability and error\nhandling"),(0,a.kt)("li",{parentName:"ul"},"Simplified plugin configuration dialog, with more options"),(0,a.kt)("li",{parentName:"ul"},"Console output will no longer slow down the emulator when flooded\nthanks to threading"),(0,a.kt)("li",{parentName:"ul"},"Saving states done in the new thread, so gameplay doesn't even\nflinch when you save")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(15548).Z,width:"300",height:"187"}),"\n",(0,a.kt)("img",{src:n(84487).Z,width:"250",height:"234"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"New CPU configuration, more user friendly and noob proof with a\nrestore defaults button"),(0,a.kt)("li",{parentName:"ul"},"New GS configuration, with more options like Turbo and Slow motion\nFPS adjustments")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(38340).Z,width:"250",height:"236"}),"\n",(0,a.kt)("img",{src:n(38340).Z,width:"250",height:"236"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"New Speed hacks configuration, with more warnings ( like anyone\nreads them!) and a restore defaults button"),(0,a.kt)("li",{parentName:"ul"},"All options have tooltips (text that appears after you leave the\ncursor on a control for some secs) explaining what each of them do"),(0,a.kt)("li",{parentName:"ul"},"Screen shot button in every dialog (lower left corner) to easily\ntake shots of your configurations")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(81707).Z,width:"250",height:"236"}),"\n",(0,a.kt)("img",{src:n(21869).Z,width:"250",height:"152"})),(0,a.kt)("p",null,"That's it! Hope you like the new look and functionality, we are doing\nour best to make PCSX2 as user friendly as possible. Of course there are\nstill some features not shown here, we have to keep something to\nsurprise you!"),(0,a.kt)("p",null,"There is no set date for the beta release, since there are still a bunch\nof bugs lying around but it's safe to say we are getting close\n\ud83d\ude0a"))}p.isMDXComponent=!0},38340:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/0.9.7_2_thumb-34e8fe15915a5725dbc949817ee44380.jpg"},81707:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/0.9.7_4_thumb-a41a7522aa9912bbd659ccacd5290fbc.jpg"},84487:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/0.9.7_5_thumb-0c082b6cea306ea4741a2ce8b0573a57.jpg"},15548:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/0.9.7_6_thumb-c46951f638bc0cadb6871fd539866c71.jpg"},17420:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/0.9.7_7_thumb-b9ce3b28f4fa971ad08ecf98054bf215.jpg"},21869:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/0.9.7_8_thumb-285e779f41dbc46925a6bec38427ceb1.jpg"}}]);