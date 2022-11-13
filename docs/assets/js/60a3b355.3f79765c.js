"use strict";(self.webpackChunkpcsx_2_net=self.webpackChunkpcsx_2_net||[]).push([[8755],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),h=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=h(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=h(n),f=o,d=c["".concat(l,".").concat(f)]||c[f]||p[f]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var h=2;h<a;h++)i[h]=n[h];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},48806:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>h});var r=n(87462),o=(n(67294),n(3905));const a={authors:["jake stine"],date:new Date("2009-07-22T00:00:00.000Z"),description:'One of the major changes planned for the next release of PCSX2 is a complete overhaul of the gui/frontend, switching from the current "native" Windows/Linux interfaces to a single unified interface that\'s (more or less) the same for both platforms',draft:!1,tags:["devblog"],title:"Measuring The Benefits Of Wxwidgets"},i=void 0,s={permalink:"/pcsx2-net-www/blog/2009/measuring-the-benefits-of-wxwidgets",editUrl:"https://github.com/PCSX2/pcsx2-net-www/tree/master/blog/2009/measuring-the-benefits-of-wxwidgets/index.mdx",source:"@site/blog/2009/measuring-the-benefits-of-wxwidgets/index.mdx",title:"Measuring The Benefits Of Wxwidgets",description:'One of the major changes planned for the next release of PCSX2 is a complete overhaul of the gui/frontend, switching from the current "native" Windows/Linux interfaces to a single unified interface that\'s (more or less) the same for both platforms',date:"2009-07-22T00:00:00.000Z",formattedDate:"July 22, 2009",tags:[{label:"devblog",permalink:"/pcsx2-net-www/blog/tags/devblog"}],readingTime:2.87,hasTruncateMarker:!0,authors:[{name:"Jake Stine",key:"jake stine"}],frontMatter:{authors:["jake stine"],date:"2009-07-22T00:00:00.000Z",description:'One of the major changes planned for the next release of PCSX2 is a complete overhaul of the gui/frontend, switching from the current "native" Windows/Linux interfaces to a single unified interface that\'s (more or less) the same for both platforms',draft:!1,tags:["devblog"],title:"Measuring The Benefits Of Wxwidgets"},prevItem:{title:"The Pros And Cons Of Googlecode",permalink:"/pcsx2-net-www/blog/2009/the-pros-and-cons-of-googlecode"},nextItem:{title:"A Moment Of Zen",permalink:"/pcsx2-net-www/blog/2009/a-moment-of-zen"}},l={authorsImageUrls:[void 0]},h=[],u={toc:h};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'One of the major changes planned for the next release of PCSX2 is a\ncomplete overhaul of the gui/frontend, switching from the current\n"native" Windows/Linux interfaces to a single unified interface that\'s\n(more or less) the same for both platforms. To make such a grand vision\npossible we needed the help of a third party gui tooolkit, from which\nthere were several to choose from. After much consideration we settled\non ',(0,o.kt)("a",{parentName:"p",href:"http://www.wxwidgets.org"},"wxWidgets")," , which is the same toolkit\nused by a few other notable emulators, such as\n",(0,o.kt)("a",{parentName:"p",href:"http://www.dolphin-emulator.com/"},"Dolphin")," ."),(0,o.kt)("p",null,"So what ",(0,o.kt)("em",{parentName:"p"},"are")," the benefits of the new PCSX2 interface in development?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1. A vastly improved Linux interface.")),(0,o.kt)("p",null,"... and not just in terms of what you see, but how the emulator\ncooperates with the operating system as a whole. wxWidgets provides\ndozens of very useful cross-platform tools that are much more\nwell-suited to Linux functionality than the current PCSX2 codebase. The\nnew interface will have a smarter plugin loader, and multilingual\nsupport as well. It will also be easier to install and run as a user\nother than root."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2. Windows XP/Vista Themed appearances will finally work!")),(0,o.kt)("p",null,"Until now, PCSX2 used the old Win95 ASCII-based Common Controls\nlibraries, and this forced Windows to disable themes support when\nrendering the PCSX2 interface. Buttons were plain and unshaded, and\ndialog boxes such as the File and Folder pickers were small, ugly, and\nlacking in features. All of this will be fixed in the next release."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3. More complete internationalization support.")),(0,o.kt)("p",null,"Translations of the PCSX2 interface will be easier to make and maintain,\nand shouldn't become broken or obsolete from program updates, which was\na persistent problem in the older PCSX2 interface design. In addition,\nPCSX2 will be fully Unicode compliant on both Windows and Linux\nplatforms, which should help resolve various oddball problems the\nemulator may have encountered on non-English operating systems."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4. A more responsive multithreaded interface which will remain fully accessible even while games are running!")),(0,o.kt)("p",null,'The new interface will run on its own thread separate from the\nemulator\'s EE/MTGS threads, allowing it to remain open and accessible in\nthe background, without the need to shut down the GS window. This should\nimprove the stability of "pausing" emulation, and also opens the door\nfor expanding on interface integration; such as binding popup menus,\ntoolbars, status bars, or other useful things to the GS window.'),(0,o.kt)("p",null,"Furthermore, if a game deadlocks the system, the interface will usually\nremain responsive even as the rest of the emulator freezes up (which\nmight not be much of a feature for end users, but is quite handy for us\ndevelopers)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"5. The Teaser Image!")),(0,o.kt)("p",null,"And here's a sneak peek at the current GUI-Work-in-Progress:"),(0,o.kt)("p",null,"... yeah it's not a whole lot to see yet -- I might post some more as\ndevelopment progresses."),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"From a coder's perspective:")),(0,o.kt)("p",null,"In all the wxWidgets experience so far has been a decent one. There are\na few annoyances, but those tend to be more the fault of cross-platform\nconsiderations (some things are not supported well under Linux, or vice\nversa), or more commonly due to limitations and design flaws in the C++\nlanguage itself rather than of wxWidgets (in particular, C/C++ make it\nespecially difficult to work with unicode strings in a 'nice' way). For\nthe most part wx tries to model itself in the image of the .NET\nFramework and Java Framework API designs, which are good designs to\nfollow."))}p.isMDXComponent=!0}}]);