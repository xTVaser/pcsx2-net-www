"use strict";(self.webpackChunkpcsx_2_net=self.webpackChunkpcsx_2_net||[]).push([[217],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),c=u(n),d=o,f=c["".concat(l,".").concat(d)]||c[d]||p[d]||i;return n?a.createElement(f,s(s({ref:t},h),{},{components:n})):a.createElement(f,s({ref:t},h))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=c;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var u=2;u<i;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1318:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>u});var a=n(87462),o=(n(67294),n(3905));const i={authors:["gregory"],date:new Date("2015-06-08T00:00:00.000Z"),description:"First, let's explain aliasing and why people are so keen on removing it with anti-aliasing",draft:!1,tags:["devblog"],title:"Explanation Hacks Needed For Upscaling Glitches"},s=void 0,r={permalink:"/pcsx2-net-www/blog/2015/explanation-hacks-needed-for-upscaling-glitches",editUrl:"https://github.com/PCSX2/pcsx2-net-www/tree/master/blog/2015/explanation-hacks-needed-for-upscaling-glitches/index.mdx",source:"@site/blog/2015/explanation-hacks-needed-for-upscaling-glitches/index.mdx",title:"Explanation Hacks Needed For Upscaling Glitches",description:"First, let's explain aliasing and why people are so keen on removing it with anti-aliasing",date:"2015-06-08T00:00:00.000Z",formattedDate:"June 8, 2015",tags:[{label:"devblog",permalink:"/pcsx2-net-www/blog/tags/devblog"}],readingTime:4.45,hasTruncateMarker:!0,authors:[{name:"Gregory",url:"https://github.com/gregory38",imageURL:"https://github.com/gregory38.png",key:"gregory"}],frontMatter:{authors:["gregory"],date:"2015-06-08T00:00:00.000Z",description:"First, let's explain aliasing and why people are so keen on removing it with anti-aliasing",draft:!1,tags:["devblog"],title:"Explanation Hacks Needed For Upscaling Glitches"},prevItem:{title:"Major Gsdx Progress And Monthly Progress Reports!",permalink:"/pcsx2-net-www/blog/2015/major-gsdx-progress-and-monthly-progress-reports"},nextItem:{title:"Explanation Impossible Blend",permalink:"/pcsx2-net-www/blog/2015/explanation-impossible-blend"}},l={authorsImageUrls:[void 0]},u=[],h={toc:u};function p(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"First, let's explain aliasing and why people are so keen on removing it\nwith anti-aliasing. Let's start with some math"),(0,o.kt)("p",null,'In the real world, signals are often "continuous." If you take two\npoints A and B and A is very close to B then F(A) is very close to F(B).\nBut a screen is not continuous. If you take two pixels side by side, one\ncan be white while the other is black.'),(0,o.kt)("p",null,"Typical example of some continuous/discrete signals:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(60923).Z,width:"384",height:"302"})),(0,o.kt)("p",null,"It is very easy and accurate to transform a continuous signal into a non\ncontinuous signal. You just need to sample it, i.e. take a subset of\nvalues. It is often used in computer science to reduce the quantity of\ninformation compared to the original signal. Otherwise it simply\nrequires to much power to process it."),(0,o.kt)("p",null,"The thing is that later, when you render it, you need to do the reverse\ntransformation. Human senses expect continuous video and sound. The\ntransformation above is very easy, but this time things are much more\ncomplicated. If you need a value exactly at a sample point - it's fine,\nyou have it"),(0,o.kt)("p",null,"But what happens if you need a value that is between two samples? It\ndoesn't exist, so you need to create it. This is called aliasing - any\nrandom value is an alias of the original value."),(0,o.kt)("p",null,"The purpose of anti aliasing is to predict a value between samples that\nis as close as possible to what the original value would have been by\nusing the samples that you do have to estimate what is missing."),(0,o.kt)("p",null,"For example, let's imagine that sample 1 is white and sample 2 is black.\nWhat will the value of a pixel between sample1 and sample 2 be? It could\nbe white or black (Nearest filtering.) It could be a mixture of both, so\ngray (Linear filtering.) Note that nothing prevents the true value of\nthat pixel from being red, blue, yellow or anything, but it is\nimpossible to predict that based on the data we have."),(0,o.kt)("p",null,"Let's get back to GS emulation now."),(0,o.kt)("p",null,'Primitives sent to the GPU/GS are continuous. For example, you ask the\nGPU to draw a triangle, not to draw N pixels. However due to limited\nresources, your GPU will only compute the colors of N pixels on your\nscreen/framebuffer. The rendering will be exactly the same as if you had\nasked the GPU to draw N pixels in a triangle shape. Nobody will see the\n"holes." However, if you increase the frequency of the sampling (i.e.\nuse a bigger resolution) you will see those holes. If your screen had\ninfinite resolution you would be able to see that the rendering is\nvarious points shaped like a triangle - not a real triangle.'),(0,o.kt)("p",null,'The PS2 does something similar. It sends various rectangles that fill\nthe screen, but they have holes. Due to aliasing you never see them at\nnative resolution. Upscaling however increases the frequency of sampling\nbecause it is "emulating" a higher resolution output. As with the\nprevious example, the holes become visible. In the case of Namco games\nthey manifest as black vertical lines.'),(0,o.kt)("p",null,"In other words, when upscaling, the emulation of the GS is more accurate\nthan the real GS that the PS2 has. Unfortunately, humans don't like\ntheir images full of pointless black lines. So to fix it, we added\nanother hack. The hack will detect rectangle primitives that are too\nsmall and then extend them half a pixel to fill the hole. It does the\njob well and it doesn't impact speed much."),(0,o.kt)("p",null,"Now let's explain the other new hack. Primitives have only color\ninformation - this is enough for a small surface but not efficient to\ndraw a big surface. In order to reduce computational load they just map\na texture on to the primitive. You just need to provide the texture\ncoordinates. Instead of a lengthy explanation, let's just use an\nexample."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(34117).Z,width:"362",height:"391"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(96932).Z,width:"448",height:"389"})),(0,o.kt)("p",null,"As you can see in the picture, you will sample an invalid value at 2x\nresolution. Generally games use a texture atlas so you inadvertently\nsample from the next texture. This is quite noticeable on font textures.\nThe idea of this hack is to shift and round the texture size to better\nfit the intended behavior of the game. There are various corner cases so\nit is difficult to have something both fast and accurate. Many games are\nbetter but they're not perfect."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(3466).Z,width:"387",height:"341"})),(0,o.kt)("p",null,"The hack also disables extra linear filtering. Globally the upscaling\nissue is caused by a texture that is too small. This was likely done on\npurpose to reduce memory usage (PS2 video memory is only 4MB, compared\nto multiple gigabytes that we have today). Linear filtering allows\ninterpolating a color based on the texels around it. But it requires\nthat those texels exist"),(0,o.kt)("p",null,"So textures need to be one texel bigger than they are for linear\ninterpolation. We don't have that possibility, unfortunately."),(0,o.kt)("p",null,"In conclusion, native resolution works because of aliasing issues. The\nholes and errors in the image are below the sampling rate of the PS2's\ntraditional output and therefore you never see them. Once you enable\nsome form of anti aliasing (linear filtering/upscaling/MSAA/","*","*","AA),\nthey become visible as the sample rate is high enough to expose them."),(0,o.kt)("p",null,"Proofread and corrected by ",(0,o.kt)("a",{parentName:"p",href:"http://forums.pcsx2.net/User-Blyss-Sarania"},"Blyss\nSarania")))}p.isMDXComponent=!0},3466:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/webp;base64,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"},34117:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/native_res_s-972d961f63604fc4935af0ebdc902d9b.webp"},96932:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/native_x2_s-fd93f568cd3a824b4e80471ae40a1084.webp"},60923:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/signals_s-daf897bf4c077ad44863946f5df08658.webp"}}]);