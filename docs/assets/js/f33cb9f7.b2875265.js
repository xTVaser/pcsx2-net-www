"use strict";(self.webpackChunkpcsx_2_net=self.webpackChunkpcsx_2_net||[]).push([[7286],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(67294);function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){A(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,A=function(e,t){if(null==e)return{};var n,r,A={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(A[n]=e[n]);return A}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(A[n]=e[n])}return A}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,A=e.mdxType,a=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=c(n),h=A,g=m["".concat(s,".").concat(h)]||m[h]||p[h]||a;return n?r.createElement(g,i(i({ref:t},l),{},{components:n})):r.createElement(g,i({ref:t},l))}));function h(e,t){var n=arguments,A=t&&t.mdxType;if("string"==typeof e||A){var a=n.length,i=new Array(a);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:A,i[1]=o;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50933:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(87462),A=(n(67294),n(3905));const a={authors:["falcon4ever"],date:new Date("2006-09-29T00:00:00.000Z"),description:"Since the launch of the new site last year, several improvements have been made to the site. Some of you may have noticed that the site is looking a bit different since yesterday",draft:!1,tags:["devblog"],title:"Site Improvements Part 1"},i=void 0,o={permalink:"/pcsx2-net-www/blog/2006/site-improvements-part-1",editUrl:"https://github.com/PCSX2/pcsx2-net-www/tree/master/blog/2006/site-improvements-part-1/index.mdx",source:"@site/blog/2006/site-improvements-part-1/index.mdx",title:"Site Improvements Part 1",description:"Since the launch of the new site last year, several improvements have been made to the site. Some of you may have noticed that the site is looking a bit different since yesterday",date:"2006-09-29T00:00:00.000Z",formattedDate:"September 29, 2006",tags:[{label:"devblog",permalink:"/pcsx2-net-www/blog/tags/devblog"}],readingTime:1.485,hasTruncateMarker:!0,authors:[{name:"falcon4ever",url:"https://github.com/falcon4ever",imageURL:"https://github.com/falcon4ever.png",key:"falcon4ever"}],frontMatter:{authors:["falcon4ever"],date:"2006-09-29T00:00:00.000Z",description:"Since the launch of the new site last year, several improvements have been made to the site. Some of you may have noticed that the site is looking a bit different since yesterday",draft:!1,tags:["devblog"],title:"Site Improvements Part 1"},prevItem:{title:"A Little Fix Here, Alittle Fix There...Vvvroom!",permalink:"/pcsx2-net-www/blog/2006/a-little-fix-here-alittle-fix-there"},nextItem:{title:"Sound, Everywhere!",permalink:"/pcsx2-net-www/blog/2006/sound-everywhere"}},s={authorsImageUrls:[void 0]},c=[],l={toc:c};function p(e){let{components:t,...a}=e;return(0,A.kt)("wrapper",(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,A.kt)("p",null,"Since the launch of the new site last year, several improvements have\nbeen made to the site. Some of you may have noticed that the site is\nlooking a bit different since yesterday."),(0,A.kt)("p",null,"The site now contains several navigation panels to look up old news.\nAnother (maybe) less noticeable improvement has been made to the page\ncaching engine. Over the past year, PCSX2.net has been using a custom\nwritten cache engine. Whilst this had been functioning well enough for\nsometime now, it still had a few nasty bugs which where hard to trace,\nleading to glitches such as ",(0,A.kt)("em",{parentName:"p"},"Page 1 of 0")," ."),(0,A.kt)("p",null,"Also due to a demand for a cleaner (and easier to maintain) code, we\nhave been looking into several template engines. Thus the engine used to\ncache pages has be switched."),(0,A.kt)("p",null,"For the current version of the portal, we're using the ",(0,A.kt)("em",{parentName:"p"},"Smarty")," template\nengine. More information on how smarty works will follow in a later blog\narticle."),(0,A.kt)("p",null,"The pcsx2.net community is pretty large (including Windows and Linux\nusers) it's no surprise that users are using different kinds of\nbrowsers. To be compatible with most recent browsers, most pages are\nXHTML 1.1 compatible (the compat page is the only exception at the\nmoment), because of this standard, PCSX2.net should be viewable in\nFirefox 1.5.x, IE6, IE7 beta, Opera 8.x and Opera 9.x."),(0,A.kt)("p",null,"An interesting result of this high browser compatibility, is that\nPCSX2.net can be browsed on SONY's PSP unit! To give you an impression\non how this looks, here are a few shots:"),(0,A.kt)("p",null,(0,A.kt)("strong",{parentName:"p"},"[","News page","]")," and ",(0,A.kt)("strong",{parentName:"p"},"[","Screenshots page","]")),(0,A.kt)("p",null,(0,A.kt)("img",{src:n(2577).Z,width:"250",height:"142"}),"\n",(0,A.kt)("img",{src:n(48404).Z,width:"250",height:"142"})),(0,A.kt)("p",null,(0,A.kt)("strong",{parentName:"p"},"[","Compat page - using the search!","]")," and ",(0,A.kt)("strong",{parentName:"p"},"[","Contact page","]")),(0,A.kt)("p",null,(0,A.kt)("img",{src:n(14175).Z,width:"250",height:"142"}),"\n",(0,A.kt)("img",{src:n(70240).Z,width:"250",height:"142"})),(0,A.kt)("p",null,"The upcoming weeks a new function will be added to the compat page. To\ngive you a small hint:"),(0,A.kt)("p",null,(0,A.kt)("img",{src:n(70979).Z,width:"274",height:"34"})))}p.isMDXComponent=!0},2577:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/site-impr1s-eae987a4272456d343913295d66d9b41.jpg"},48404:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/site-impr2s-7e161abcc93735735f36bca65692964a.jpg"},14175:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/site-impr3s-cfaf33adbf0afe6fbd680bf0a96489fe.jpg"},70240:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/site-impr4s-9dd39d6d84f211781f3c87e4de84984a.jpg"},70979:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/gif;base64,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"}}]);