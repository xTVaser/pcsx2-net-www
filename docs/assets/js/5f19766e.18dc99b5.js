"use strict";(self.webpackChunkpcsx_2_net=self.webpackChunkpcsx_2_net||[]).push([[9505],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=c(n),d=r,f=h["".concat(s,".").concat(d)]||h[d]||u[d]||a;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},50006:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const a={authors:["gregory"],date:new Date("2015-06-08T00:00:00.000Z"),description:"The goal of blending is to combine two colors",draft:!1,tags:["devblog"],title:"Explanation Impossible Blend"},i=void 0,l={permalink:"/pcsx2-net-www/blog/2015/explanation-impossible-blend",editUrl:"https://github.com/PCSX2/pcsx2-net-www/tree/master/blog/2015/explanation-impossible-blend/index.mdx",source:"@site/blog/2015/explanation-impossible-blend/index.mdx",title:"Explanation Impossible Blend",description:"The goal of blending is to combine two colors",date:"2015-06-08T00:00:00.000Z",formattedDate:"June 8, 2015",tags:[{label:"devblog",permalink:"/pcsx2-net-www/blog/tags/devblog"}],readingTime:2.54,hasTruncateMarker:!0,authors:[{name:"Gregory",url:"https://github.com/gregory38",imageURL:"https://github.com/gregory38.png",key:"gregory"}],frontMatter:{authors:["gregory"],date:"2015-06-08T00:00:00.000Z",description:"The goal of blending is to combine two colors",draft:!1,tags:["devblog"],title:"Explanation Impossible Blend"},prevItem:{title:"Explanation Hacks Needed For Upscaling Glitches",permalink:"/pcsx2-net-www/blog/2015/explanation-hacks-needed-for-upscaling-glitches"},nextItem:{title:"Linux News",permalink:"/pcsx2-net-www/blog/2015/linux-news"}},s={authorsImageUrls:[void 0]},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The goal of blending is to combine two colors. The general equation on a\nmodern GPU is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"coefficient1 * color1 +/- coefficient2 * color2\n")),(0,r.kt)("p",null,"Color1/Color 2 are either the source color or the destination color.\nCoefficient1/Coefficient2 are either the alpha value (transparency) of\nsource/source2/destination, 1 - alpha, or a constant. The GPU will clamp\nthe coefficients to ","[","0;1","]"),(0,r.kt)("p",null,"The general equation on the PS2 however is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"(Color1 - Color2) * Coefficient + Color3\n")),(0,r.kt)("p",null,"Color1/Color2/Color3 are either the source or destination color or zero."),(0,r.kt)("p",null,"Coefficient is the alpha value (transparency) of the source or\ndestination, or a constant."),(0,r.kt)("p",null,"The issues we have with this are as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the PS2, the coefficient factor could range from ","[","0;2","]","\n(fortunately this almost never happens)"),(0,r.kt)("li",{parentName:"ol"},"If Color3 and Color1 are the same source, the equation will be:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"Color1 * (1+Coefficient) - Color2 *Coefficient\n")),(0,r.kt)("p",null,"which will result in the first half of this equation always being larger\nthan 1. This is a problem because the GPU is limited to 1. This is why\nthis type of blending is impossible on the fixed function unit of a PC's\nGPU."),(0,r.kt)("p",null,"Our recent update fixed the second case. Since it is impossible to do\nthat blending on the fixed function unit, we instead emulate them in the\nGPU's fragment shader. Fragment shaders are very small dedicated CPUs so\nit is quite easy to do a few small operations on them."),(0,r.kt)("p",null,"There is a catch however. Fragment shaders (like any CPU) are relatively\nslow. In order to compensate for this the fragments are executed\nout-of-order. For example, if you do a draw call consisting of 2\ntriangles, it is possible that the second triangle will be computed\nbefore the first one. It is quite annoying because blending is an\nin-order operation. However as long as primitives don't self overlap,\nonly a single fragment shader must execute and therefore there is no\nissue with order."),(0,r.kt)("p",null,"Great. At this point we just need to split the draw calls into N draw\ncalls without primitive overlap. It's not free performance wise to do\nthis, but it remains reasonable in some cases."),(0,r.kt)("p",null,"Moving on, we need to access the destination value to compute the final\nvalue, however the GPU has a texture cache. The texture cache is read\nonly so that there is no coherency issue. The target value can be\nwritten but all the subsequent reads will be wrong because of the\ndiscrepancy with the cache. Getting back to the input texture case, the\ntexture is read only during the draw but this could change on the\nfollowing draw. There must be a way to invalidate the cache if you\nupload a new texture to the same location. The driver has this ability,\nbut until recently applications did not. GL 4.5 changes this. A function\nis provided to invalidate the cache"),(0,r.kt)("p",null,"The end result is that we can implement basic blending in the fragment\nshader instead of relying on the limited GPU core."),(0,r.kt)("p",null,"Proofread and corrected by ",(0,r.kt)("a",{parentName:"p",href:"http://forums.pcsx2.net/User-Blyss-Sarania"},"Blyss\nSarania")))}u.isMDXComponent=!0}}]);