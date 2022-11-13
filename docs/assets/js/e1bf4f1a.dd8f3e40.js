"use strict";(self.webpackChunkpcsx_2_net=self.webpackChunkpcsx_2_net||[]).push([[7665],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),h=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=h(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=h(r),m=a,d=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return r?n.createElement(d,s(s({ref:t},p),{},{components:r})):n.createElement(d,s({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var h=2;h<o;h++)s[h]=r[h];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},9320:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>h});var n=r(87462),a=(r(67294),r(3905));const o={authors:["lightningterror","ck1"],date:new Date("2018-04-10T00:00:00.000Z"),description:"What sorcery is this, we are on time with the progress report",draft:!1,tags:["progress-report"],title:"Q1 2018 Progress Report"},s=void 0,i={permalink:"/pcsx2-net-www/blog/2018/q1-2018-progress-report",editUrl:"https://github.com/PCSX2/pcsx2-net-www/tree/master/blog/2018/q1-2018-progress-report/index.mdx",source:"@site/blog/2018/q1-2018-progress-report/index.mdx",title:"Q1 2018 Progress Report",description:"What sorcery is this, we are on time with the progress report",date:"2018-04-10T00:00:00.000Z",formattedDate:"April 10, 2018",tags:[{label:"progress-report",permalink:"/pcsx2-net-www/blog/tags/progress-report"}],readingTime:5.47,hasTruncateMarker:!0,authors:[{name:"LightningTerror",url:"https://github.com/LightningTerror",imageURL:"https://github.com/LightningTerror.png",key:"lightningterror"},{name:"CK1",url:"https://github.com/MrCK1",imageURL:"https://github.com/MrCK1.png",key:"ck1"}],frontMatter:{authors:["lightningterror","ck1"],date:"2018-04-10T00:00:00.000Z",description:"What sorcery is this, we are on time with the progress report",draft:!1,tags:["progress-report"],title:"Q1 2018 Progress Report"},prevItem:{title:"Merry Christmas From The PCSX2 Team",permalink:"/pcsx2-net-www/blog/2018/merry-christmas-from-the-pcsx2-team"},nextItem:{title:'The PCSX2 Team\'s Statement Regarding The "DamonPS2" Emulator',permalink:"/pcsx2-net-www/blog/2018/the-pcsx2-teams-statement-regarding-the-damonps2-emulator"}},l={authorsImageUrls:[void 0,void 0]},h=[],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},u=p("PCSX2PRLink"),c=p("Image"),m=p("SliderCompare"),d={toc:h};function g(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"What sorcery is this, we are on time with the progress report"),(0,a.kt)("p",null,"We bring to you another progress report like usual. Enjoy!"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(52852).Z,width:"563",height:"104"})),(0,a.kt)(u,{authors:"AlessandroVetere",prNums:"1944",mdxType:"PCSX2PRLink"},"GSdx-TC: Performance improvement by using custom container"),(0,a.kt)("p",null,"A massive improvement on GSdx was done in Q2 2017 that we forgot to\nmention which improves the performance on both hardware and software\nmode around 1-15% give or take depending on the game and configuration.\nIt's a bit technical so all we can say is that it improves performance\nbut if anyone wishes to read the more technical stuff then it's best to\ncheckout the Pull Request on GitHub."),(0,a.kt)(u,{authors:"ssakash",prNums:"2122",mdxType:"PCSX2PRLink"},"GSdx-TC: Load size calculation in target update"),(0,a.kt)("p",null,"Akash also updated the texture cache that fixed/improved a few issues as\nwell as solved a couple of regressions. These changes should help with\nimproving emulation accuracy on native and upscaled resolutions."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fix the load size calculation in target update."),(0,a.kt)("li",{parentName:"ul"},"Add an optional macro (ENABLE","_","ACCURATE","_","BUFFER","_","EMULATION) for\nenabling more accurate emulation of the buffer size."),(0,a.kt)("li",{parentName:"ul"},"Fixed a regression that caused many games to crash with custom\nresolutions (Gran Turismo series, Silent Hill series, Persona\nseries, Metal Gear Solid series and others as well)."),(0,a.kt)("li",{parentName:"ul"},"Fixed a regression on Beyond Good And Evil that exhibited FMV\nflickering.")),(0,a.kt)(u,{authors:"lightningterror",prNums:"2347",mdxType:"PCSX2PRLink"},"GSdx: Texture Shuffle port to Direct3D"),(0,a.kt)("p",null,"Previously texture shuffle only worked if CRC hack level was below full\nsince it was in beta stage. lightningterror did the testing, adjusted\nthe code and properly ported it without relying on the CRC hack level.\nThis will fix glitchy graphics (green/brown vertical lines sometimes) on\ngames that make use of the same effect.\nThe Godfather, Urban Chaos, 50 Cent Bulletproof, Metal Gear solid\nseries,God of War series, Final Fight Streetwise,The Suffering Ties that\nBind,Sengoku Basara and many others."),(0,a.kt)("p",null,"Note that texture shuffle is only supported by Direct3D10/11, however a\npartial port has been done for Direct3D9 as well. Direct3D 9 will skip\nsome of the bad draw calls but the screen may still look a bit glitchy\non some games. I guess better than nothing"),(0,a.kt)("p",null,"Here are some example comparisons on Direct3D11."),(0,a.kt)("p",null,"1.Sengoku Basara."),(0,a.kt)("p",null,"2.50 Cent Bulletproof."),(0,a.kt)("p",null,"3","."," The Suffering Ties that Bind."),(0,a.kt)(c,{cols:6,src:r(21662).Z,mdxType:"Image"}),(0,a.kt)(u,{authors:"lightningterror",prNums:"2347",mdxType:"PCSX2PRLink"},"GSdx: Channel Shuffle improvements on Direct3D"),(0,a.kt)("p",null,"A small adjustment has been made in the channel shuffle detection on\nDirect3D, a lot of games should see an improvement where the top left\ncorner issue has been resolved /improved."),(0,a.kt)("p",null,"Metal Gear Solid series, Urban Chaos, Stolen and possibly other games\nthat use the effect are resolved/improved.\nDirect3D still misses the proper shaders to emulate the effect and need\nto be ported from OpenGL one day but it's a nice improvement for users\nthat don't use OpenGL."),(0,a.kt)("p",null,"It's worth keeping in mind just like before the channel shuffle effect\nonly skips the bad draw calls so it kinda works like a CRC hack just\nsomewhat better since it only skips the channel shuffle draw calls and\nnot any other post processing effects."),(0,a.kt)("h1",{id:"gsdx-crc-hacks-adjustments"},"GSdx: CRC hacks adjustments"),(0,a.kt)("p",null,"People usually say that PCSX2 uses a lot of hacks so we are gonna\nhighlight some changes to CRC hacks"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"List of purged CRC hacks:"),(0,a.kt)("li",{parentName:"ul"},"Gran Turismo Concept - All hacks removed. ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/PCSX2/pcsx2/pull/2335"},"#","2335")),(0,a.kt)("li",{parentName:"ul"},"Gran Turismo 3 A spec - All hacks removed. ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/PCSX2/pcsx2/pull/2335"},"#","2335")),(0,a.kt)("li",{parentName:"ul"},"Gran Turismo 4 - All hacks removed. ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/PCSX2/pcsx2/pull/2304"},"#","2304")),(0,a.kt)("li",{parentName:"ul"},"Tourist Trophy - All hacks removed. ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/PCSX2/pcsx2/pull/2304"},"#","2304")),(0,a.kt)("li",{parentName:"ul"},"God Of War 1 - One hack removed. ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/PCSX2/pcsx2/pull/2350"},"#","2350")),(0,a.kt)("li",{parentName:"ul"},"God Of War 2 - One hack removed. ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/PCSX2/pcsx2/pull/2350"},"#","2350")),(0,a.kt)("li",{parentName:"ul"},"SSX 3 - All hacks removed. ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/PCSX2/pcsx2/pull/2259"},"#","2259")),(0,a.kt)("li",{parentName:"ul"},"Tekken 5 - One hack removed. ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/PCSX2/pcsx2/pull/2205"},"#","2205")),(0,a.kt)("li",{parentName:"ul"},"Final Fight Streetwise - One hack removed. ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/PCSX2/pcsx2/pull/2343"},"#","2343")),(0,a.kt)("li",{parentName:"ul"},"The Simpsons Game - One hack removed. ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/PCSX2/pcsx2/pull/2149"},"#","2149")),(0,a.kt)("li",{parentName:"ul"},"Sengoku Basara - All hacks removed. ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/PCSX2/pcsx2/pull/2357"},"#","2357")),(0,a.kt)("li",{parentName:"ul"},"Naruto - Narutimate Hero 3 - One hack removed. ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/PCSX2/pcsx2/pull/2361"},"#","2361")),(0,a.kt)("li",{parentName:"ul"},"Naruto Shippuuden: Narutimate Accel - One hack removed. ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/PCSX2/pcsx2/pull/2361"},"#","2361"))),(0,a.kt)("p",null,"And since we are mentioning removed we will also mention added CRC\nhacks. Not much right ?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"List of added CRC hacks:"),(0,a.kt)("li",{parentName:"ul"},"Final Fight Streetwise - One hack added. ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/PCSX2/pcsx2/pull/2343"},"#","2343"))),(0,a.kt)("p",null,"There have been more changes such as moving some CRC hacks to Aggressive\nstate that can be used as speedhacks, some moved to Direct3D only but\nthe list will be quite big if we include everything, all the other\nchanges can be viewed on GitHub."),(0,a.kt)("p",null,"The CRC hack code was also cleaned up a bit, many games\n(prequels/sequels) shared code, which has now been merged making it more\ncompact, readable and cleaner."),(0,a.kt)(u,{authors:"ssakash",prNums:"2239",mdxType:"PCSX2PRLink"},"PCSX2-Counters: Fix Hblank calculation for DVD video modes"),(0,a.kt)("p",null,"Previously, the DVD variant NTSC/PAL modes used the horizontal blanking\ninterval calculation algorithm used by digital video modes, which\nshouldn't be used and also the rounding error check was neglected. Added\nthe DVD variant modes to the list in analog video mode finder\nsubroutine. This should impact timing/vertical synchronization in PSX\ngames significantly."),(0,a.kt)("p",null,"So far the only affected PSX title isLego Rock Raiders' which has the\ngraphic corruptions resolved."),(0,a.kt)("h1",{id:"gui-changes-and-enhancements"},"GUI Changes and Enhancements"),(0,a.kt)(u,{authors:"lightningterror",prNums:"2272",mdxType:"PCSX2PRLink"},"Add configurable Cheats folder to Components Selectors"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Add GUI option to Plugins Components Selectors to change the default "Cheats" folder location. Similar to savestates/logs/..etc..')),(0,a.kt)(u,{authors:"ssakash",prNums:"2237",mdxType:"PCSX2PRLink"},"Display the video mode on titlebar"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Display current video mode at the title bar. (Useful for debugging purposes and for user feedback at cases when video mode is being changed)")),(0,a.kt)("h1",{id:"other-enhancements"},"Other Enhancements"),(0,a.kt)(u,{authors:"FlatOutPS2",prNums:"2295",mdxType:"PCSX2PRLink"},"XPad andUSBqemu have been moved to Legacy solution/plugins"),(0,a.kt)("p",null,"No need to keep old legacy and outdated plugins in the main\nbranch anyway. They also won't be included in the 1.6 release.\nIf people want to use them they can be found on the website."),(0,a.kt)("h1",{id:"the-pcsx2-code-has-gone-through-a-lot-of-cleanup-by-turtleli"},"The PCSX2 code has gone through a lot of cleanup by ",(0,a.kt)("a",{parentName:"h1",href:"https://github.com/turtleli"},"turtleli")),(0,a.kt)("p",null,"fixing warnings, fixing a lot of annoying bugs and just making things more tidy in general."),(0,a.kt)("h1",{id:"spux-2-also-received-some-clean-up-by-flatout-and-mrck1"},"SPUX-2 Also received some clean up by ",(0,a.kt)("a",{parentName:"h1",href:"https://github.com/FlatOutps2"},"FlatOut")," and ",(0,a.kt)("a",{parentName:"h1",href:"https://github.com/mrck1"},"MrCK1")),(0,a.kt)("p",null,"A lot of specific game CRC ID's have been added as well. These are\nusually needed for CRC hacks to function properly as well as\nautomatic mipmapping detection for games that require it."),(0,a.kt)("p",null,"Many fixes and patches were added to the GameDB to fix various\nissues such as the broken graphics in Spongebob: Creature from the\nKrusty Krab.\nHere is an example how the game looks right now:"),(0,a.kt)(m,{before:r(83984).Z,after:r(59019).Z,mdxType:"SliderCompare"}),(0,a.kt)("p",null,"There are other additions that haven't been mentioned as well but those\ncan be viewed on GitHub and these are just the highlights we thought\nwould be worth mentioning."),(0,a.kt)("p",null,"Best regards from the PCSX2 Team."))}g.isMDXComponent=!0},21662:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/d3d-fixes-before-after-567a1453f9e685593f4ea9c25c32860f.jpg"},59019:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/sbb-after-s-bc15bc885b19706510a509f189fbbd34.jpg"},83984:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/sbb-before-s-30576837e2c91cd61162576978cf18c9.jpg"},52852:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/progrepq12018-4068129f49e60fbbef454a42bfe6e82c.jpg"}}]);