"use strict";(self.webpackChunkpcsx_2_net=self.webpackChunkpcsx_2_net||[]).push([[3225],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),h=a,g=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return r?n.createElement(g,s(s({ref:t},p),{},{components:r})):n.createElement(g,s({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},12595:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={authors:["zerofrog"],date:new Date("2007-08-07T00:00:00.000Z"),description:"It was apparent early on the project that the GS plugin was going to be a big bottleneck during 3D scenes",draft:!1,tags:["devblog"],title:"Graphics Synthesizer Gpus And Dual Cores"},s=void 0,i={permalink:"/blog/2007/graphics-synthesizer-gpus-and-dual-cores",editUrl:"https://github.com/PCSX2/pcsx2-net-www/tree/master/blog/2007/graphics-synthesizer-gpus-and-dual-cores/index.mdx",source:"@site/blog/2007/graphics-synthesizer-gpus-and-dual-cores/index.mdx",title:"Graphics Synthesizer Gpus And Dual Cores",description:"It was apparent early on the project that the GS plugin was going to be a big bottleneck during 3D scenes",date:"2007-08-07T00:00:00.000Z",formattedDate:"August 7, 2007",tags:[{label:"devblog",permalink:"/blog/tags/devblog"}],readingTime:4.46,hasTruncateMarker:!0,authors:[{name:"zerofrog",key:"zerofrog"}],frontMatter:{authors:["zerofrog"],date:"2007-08-07T00:00:00.000Z",description:"It was apparent early on the project that the GS plugin was going to be a big bottleneck during 3D scenes",draft:!1,tags:["devblog"],title:"Graphics Synthesizer Gpus And Dual Cores"},prevItem:{title:"Dynasty Warriors And Fullmetal Alchemist Videos On 0.9.4!",permalink:"/blog/2007/dynasty-warriors-and-fullmetal-alchemist-videos-on-0-9-4"},nextItem:{title:"2 New Plugins For Download",permalink:"/blog/2007/2-new-plugins-for-download"}},l={authorsImageUrls:[void 0]},c=[],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"It was apparent early on the project that the GS plugin was going to be\na big bottleneck during 3D scenes. It isn't that the GS plugin itself\ndoes a lot of computation on the CPU, but the fact that it needs to\ncommunicate with the graphics card means that unnecessary stalls will\noccur in the graphics driver as the GPU and CPU are synchronized. During\nthese stalls, the CPU basically goes to lunch until the GPU is ready.\nGraphics drivers and libraries are aware of this and try as little as\npossible to communicate with the graphics card. They usually cache\nrender state changes, shader changes, and texture changes up until\nactual geometry is rendered. They also take advantage of FIFOs (first in\nfirst out buffers). The CPU just writes to the FIFO and the GPU just\nreads from it, this makes all the difference in terms of keeping the GPU\nactive while the CPU isn't and vise versa."))}u.isMDXComponent=!0}}]);