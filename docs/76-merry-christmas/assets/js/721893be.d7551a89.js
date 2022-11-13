"use strict";(self.webpackChunkpcsx_2_net=self.webpackChunkpcsx_2_net||[]).push([[6031],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||a;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},13290:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={authors:["ckemu"],date:new Date("2006-06-26T00:00:00.000Z"),description:"In a previous news post we 'hinted' at work being done by **zerofrog** with regards to a new *eeREC*",draft:!1,tags:["devblog"],title:"Level Up! - Erm Speed Up!"},i=void 0,p={permalink:"/blog/2006/level-up-erm-speed-up",editUrl:"https://github.com/PCSX2/pcsx2-net-www/tree/master/blog/2006/level-up-erm-speed-up/index.mdx",source:"@site/blog/2006/level-up-erm-speed-up/index.mdx",title:"Level Up! - Erm Speed Up!",description:"In a previous news post we 'hinted' at work being done by **zerofrog** with regards to a new *eeREC*",date:"2006-06-26T00:00:00.000Z",formattedDate:"June 26, 2006",tags:[{label:"devblog",permalink:"/blog/tags/devblog"}],readingTime:.825,hasTruncateMarker:!0,authors:[{name:"ckemu",key:"ckemu"}],frontMatter:{authors:["ckemu"],date:"2006-06-26T00:00:00.000Z",description:"In a previous news post we 'hinted' at work being done by **zerofrog** with regards to a new *eeREC*",draft:!1,tags:["devblog"],title:"Level Up! - Erm Speed Up!"},prevItem:{title:"PCSX2 0.9.1 - Release",permalink:"/blog/2006/pcsx2-0-9-1-release"},nextItem:{title:"Interview Refraction",permalink:"/blog/2006/interview-refraction"}},s={authorsImageUrls:[void 0]},l=[],c={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In a previous news post we 'hinted' at work being done by ",(0,o.kt)("strong",{parentName:"p"},"zerofrog"),"\nwith regards to a new ",(0,o.kt)("em",{parentName:"p"},"eeREC")," (Emotion Engine Recompiler) and ",(0,o.kt)("em",{parentName:"p"},"vuREC"),"\n(Vector Unit Recompiler (VU0 and VU1))."),(0,o.kt)("p",null,"The goal of this complete rewrite is to increase speed, whilst at the\nsame time improve, or at least maintain current compatibility."),(0,o.kt)("p",null,"This rewrite has been going on for sometime now, and is starting to\ntruly show fascinating results, many games now run up to 4x faster, an\nexample of this would be ",(0,o.kt)("em",{parentName:"p"},"Sonic Riders")," - previous betas ran at 3.x to\n12.x FPS whilst racing, it now runs at 12.x to 35.x FPS"),(0,o.kt)("p",null,"Testing and bug chasing continues, meanwhile a\n",(0,o.kt)("a",{parentName:"p",href:"http://forums.ngemu.com/pcsx2-official-forum/73799-level-up-erm-speed-up.html"},"thread"),"\nhas been created for testers and developers to demonstrate - in\nscreenshot form some of these speed increases. Take ",(0,o.kt)("strong",{parentName:"p"},"careful")," note of\nthe CPU specification given in the post, for instance ",(0,o.kt)("strong",{parentName:"p"},"Refraction")," can\nget significantly faster speeds than myself"),(0,o.kt)("p",null,":: ",(0,o.kt)("a",{parentName:"p",href:"http://forums.ngemu.com/pcsx2-official-forum/73799-level-up-erm-speed-up.html"},"Screenshots\nthread")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Check it out, plenty more to come!")))}u.isMDXComponent=!0}}]);