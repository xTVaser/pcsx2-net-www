"use strict";(self.webpackChunkpcsx_2_net=self.webpackChunkpcsx_2_net||[]).push([[4246],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?o.createElement(y,a(a({ref:t},l),{},{components:n})):o.createElement(y,a({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},663:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const i={authors:["cottonvibes"],date:new Date("2010-03-13T00:00:00.000Z"),description:"his blog post is an introduction to dynamic recompilers (dynarecs), and hopes to provide some insight on how they work and why pcsx2 uses them to speed up emulation",draft:!1,tags:["devblog"],title:"Introduction To Dynamic Recompilation"},a=void 0,c={permalink:"/blog/2010/introduction-to-dynamic-recompilation",editUrl:"https://github.com/PCSX2/pcsx2-net-www/tree/master/blog/2010/introduction-to-dynamic-recompilation/index.mdx",source:"@site/blog/2010/introduction-to-dynamic-recompilation/index.mdx",title:"Introduction To Dynamic Recompilation",description:"his blog post is an introduction to dynamic recompilers (dynarecs), and hopes to provide some insight on how they work and why pcsx2 uses them to speed up emulation",date:"2010-03-13T00:00:00.000Z",formattedDate:"March 13, 2010",tags:[{label:"devblog",permalink:"/blog/tags/devblog"}],readingTime:9.24,hasTruncateMarker:!0,authors:[{name:"cottonvibes",key:"cottonvibes"}],frontMatter:{authors:["cottonvibes"],date:"2010-03-13T00:00:00.000Z",description:"his blog post is an introduction to dynamic recompilers (dynarecs), and hopes to provide some insight on how they work and why pcsx2 uses them to speed up emulation",draft:!1,tags:["devblog"],title:"Introduction To Dynamic Recompilation"},prevItem:{title:"Updated Plugins On The Beta Downloads Page",permalink:"/blog/2010/updated-plugins-on-the-beta-downloads-page"},nextItem:{title:"PCSX2 0.9.7 Sneak Peek!",permalink:"/blog/2010/pcsx2-0-9-7-sneak-peek"}},s={authorsImageUrls:[void 0]},p=[],l={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This blog post is an introduction to dynamic recompilers (dynarecs), and\nhopes to provide some insight on how they work and why pcsx2 uses them\nto speed up emulation.\nIt is probably easier to read on our forums, because some of the code\ndidn't wrap nicely on our main blog page....\n( ",(0,r.kt)("a",{parentName:"p",href:"http://forums.pcsx2.net/thread-13453-post-101560.html"},"Click here to view blog post in\nforum")," )"))}d.isMDXComponent=!0}}]);