"use strict";(self.webpackChunkpcsx_2_net=self.webpackChunkpcsx_2_net||[]).push([[5076],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=p(n),m=a,d=f["".concat(s,".").concat(m)]||f[m]||c[m]||o;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},21068:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={authors:["ckemu"],date:new Date("2006-09-06T00:00:00.000Z"),description:"Current WIP on the PCSX2 0.9.2 beta has led to the PAL (SCES 5049x) version of Final Fantasy X being Playable",draft:!1,tags:["devblog"],title:"Finally!"},l=void 0,i={permalink:"/pcsx2-net-www/blog/2006/finally",editUrl:"https://github.com/PCSX2/pcsx2-net-www/tree/master/blog/2006/finally/index.mdx",source:"@site/blog/2006/finally/index.mdx",title:"Finally!",description:"Current WIP on the PCSX2 0.9.2 beta has led to the PAL (SCES 5049x) version of Final Fantasy X being Playable",date:"2006-09-06T00:00:00.000Z",formattedDate:"September 6, 2006",tags:[{label:"devblog",permalink:"/pcsx2-net-www/blog/tags/devblog"}],readingTime:.855,hasTruncateMarker:!0,authors:[{name:"ckemu",key:"ckemu"}],frontMatter:{authors:["ckemu"],date:"2006-09-06T00:00:00.000Z",description:"Current WIP on the PCSX2 0.9.2 beta has led to the PAL (SCES 5049x) version of Final Fantasy X being Playable",draft:!1,tags:["devblog"],title:"Finally!"},prevItem:{title:"Sound, Everywhere!",permalink:"/pcsx2-net-www/blog/2006/sound-everywhere"},nextItem:{title:"Ssspsx Pad V1.7 Released!",permalink:"/pcsx2-net-www/blog/2006/ssspsx-pad-v1-7-released"}},s={authorsImageUrls:[void 0]},p=[],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Current WIP on the PCSX2 0.9.2 beta has led to the PAL (SCES 5049x)\nversion of Final Fantasy X being ",(0,a.kt)("strong",{parentName:"p"},"Playable")," . Thanks to a variety of\nfixes made by various members of the team, including;"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"MTGS / DC mode stability - Great for Dual Core / CPU users!"),(0,a.kt)("li",{parentName:"ul"},"IPU fixes, including fully working sound in videos"),(0,a.kt)("li",{parentName:"ul"},"Pause and sync issues, no more random hangs, looping etc"),(0,a.kt)("li",{parentName:"ul"},"SPU2 fixes, including ADMA, and timing related issues.")),(0,a.kt)("p",null,"With MTGS (Multi Threaded GS) / DC (Dual Core) features gaining improved\nstability, the game can be played at 'enjoyable' speeds, ranging from\na base speed of 29 FPS in the most intense areas, right up to the peak\nspeeds of over 140 FPS.","[1]"),(0,a.kt)("p",null,"This means that the US, Japanese and ",(0,a.kt)("em",{parentName:"p"},"finally")," the European versions of\nFinal Fantasy X are fully playable!"),(0,a.kt)("p",null,"Enjoy the shots posted on the PCSX2 official forums!\n",(0,a.kt)("a",{parentName:"p",href:"http://forums.ngemu.com/pcsx2-official-forum/77644-0-9-2-final-fantasy-x-stable-playable.html%20"},"here")),(0,a.kt)("p",null,"[1]"," Speed based on:\nAMD64 X2 4400+ @ 2.2GHz | 1GB RAM | Any PS2.0 supporting GPU"))}c.isMDXComponent=!0}}]);