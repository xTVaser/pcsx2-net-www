"use strict";(self.webpackChunkpcsx_2_net=self.webpackChunkpcsx_2_net||[]).push([[7632],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=l,b=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(b,a(a({ref:t},p),{},{components:n})):r.createElement(b,a({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},62739:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(87462),l=(n(67294),n(3905));const o={authors:["gregory"],date:new Date("2015-02-08T00:00:00.000Z"),description:"Hello guys, here are some news on the Linux front",draft:!1,tags:["devblog"],title:"Linux News"},a=void 0,i={permalink:"/pcsx2-net-www/blog/2015/linux-news",editUrl:"https://github.com/PCSX2/pcsx2-net-www/tree/master/blog/2015/linux-news/index.mdx",source:"@site/blog/2015/linux-news/index.mdx",title:"Linux News",description:"Hello guys, here are some news on the Linux front",date:"2015-02-08T00:00:00.000Z",formattedDate:"February 8, 2015",tags:[{label:"devblog",permalink:"/pcsx2-net-www/blog/tags/devblog"}],readingTime:2.07,hasTruncateMarker:!0,authors:[{name:"Gregory",url:"https://github.com/gregory38",imageURL:"https://github.com/gregory38.png",key:"gregory"}],frontMatter:{authors:["gregory"],date:"2015-02-08T00:00:00.000Z",description:"Hello guys, here are some news on the Linux front",draft:!1,tags:["devblog"],title:"Linux News"},prevItem:{title:"Explanation Impossible Blend",permalink:"/pcsx2-net-www/blog/2015/explanation-impossible-blend"},nextItem:{title:"Mmu Mini Series Part2 4",permalink:"/pcsx2-net-www/blog/2015/mmu-mini-series-part2-4"}},s={authorsImageUrls:[void 0]},u=[],p={toc:u};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Hello guys, here are some news on the Linux front. Yes I know, I ought\nto do that more regularly \ud83d\ude1b"),(0,l.kt)("p",null,"In short progress is slow but steady\n\ud83d\ude0a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A port to wxWidget 3.0 was done recently, mostly because Debian will\ndrop wxWidget 2.8 . It is enabled by default but wx2.8 is still there,\nyou can restore is with the -DWX28_API=TRUE build option.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Most of regressions were fixed so it will work as bad as before\n\ud83d\ude09 No I'm kidding, it actually works better on\nmy PC. Feel free to test it."),(0,l.kt)("li",{parentName:"ul"},"Unfortunately Windows is still blocked to wx2.8, ","[ contributions are\nwelcome (first step is to add a wx3.0 library build)\n]",'{style="color: #1e90ff;"}'),(0,l.kt)("li",{parentName:"ul"},"Some wxWidget libraries depend on GTK3. PCSX2 code was updated to\nsupport GTK3 but wxWidget is not as stable as expected.\nNevertheless, you can enable GTK3 with the -DGTK3_API=TRUE build\noption (debug build only).")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Better support of cross-building (thanks to Micove). Cmake used to\nselect wrong libraries between lib32/lib64/lib/...")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"You need to use this new option on 64 bits machines\n-DCMAKE_TOOLCHAIN_FILE=cmake/linux-compiler-i386-multilib.cmake"),(0,l.kt)("li",{parentName:"ul"},"Note: build.sh will do it by default, so just build.sh")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Support of AVX")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"code is now compiled with -march=native to support all optimizations\nof your CPU. It can be disabled with the -DISABLE_ADVANCE_SIMD=TRUE\nbuild option (for example distribution or inside VM)"),(0,l.kt)("li",{parentName:"ul"},"Note: GSdx (Linux) needs a couple of updates to support SSE4x. ","[\nAgain contributions are welcome ]",'{style="color: #1e90ff;"} , check\nthis issue ',(0,l.kt)("a",{parentName:"li",href:"https://github.com/PCSX2/pcsx2/issues/438"},"https://github.com/PCSX2/pcsx2/issues/438"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"New (nearly) playable game: Bouken Jidai Katsugeki Goemon")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Full support of MMU with the interpreter, and a dedicated game-fix\nfor the recompiler"),(0,l.kt)("li",{parentName:"ul"},"No more TLB misses!"),(0,l.kt)("li",{parentName:"ul"},"Crashes are reported on GSdx windows not sure on Linux.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Finally, Ubuntu PPA is up to date with the latest feature. However,\nUbuntu 12.04 support is discontinued!")),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Ongoing work (aka the plan for the next months):"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"port lilypad to Linux")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"It will bring Force Feedback, MultiTap and it might work better in\nseveral games."),(0,l.kt)("li",{parentName:"ul"},"I'm close to have keyboard support ","[ but help would be appreciated\nto build a full GUI. Please contact us if you are interested.\n]",'{style="color: #1e90ff;"}')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"port GSdx to openGL 4.5")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A long time ago, I planned to update the code to support\nGL_ARB_direct_state_access. It was postponed because no official\ndriver supported it.")),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Last but not least, thanks to all contributors. Even the smallest\npatches are a big help."))}c.isMDXComponent=!0}}]);