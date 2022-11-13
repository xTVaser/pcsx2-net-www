"use strict";(self.webpackChunkpcsx_2_net=self.webpackChunkpcsx_2_net||[]).push([[5881],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),h=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=h(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=h(a),c=r,g=u["".concat(l,".").concat(c)]||u[c]||p[c]||s;return a?n.createElement(g,i(i({ref:t},d),{},{components:a})):n.createElement(g,i({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var h=2;h<s;h++)i[h]=a[h];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},76191:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>s,metadata:()=>o,toc:()=>h});var n=a(87462),r=(a(67294),a(3905));const s={authors:["blyss sarania"],date:new Date("2015-07-26T00:00:00.000Z"),description:"As promised in last month's update, welcome to PCSX2's very first monthly progress report!",draft:!1,tags:["progress-report"],title:"June 2015 Progress Report"},i=void 0,o={permalink:"/blog/2015/june-2015-progress-report",editUrl:"https://github.com/PCSX2/pcsx2-net-www/tree/master/blog/2015/june-2015-progress-report/index.mdx",source:"@site/blog/2015/june-2015-progress-report/index.mdx",title:"June 2015 Progress Report",description:"As promised in last month's update, welcome to PCSX2's very first monthly progress report!",date:"2015-07-26T00:00:00.000Z",formattedDate:"July 26, 2015",tags:[{label:"progress-report",permalink:"/blog/tags/progress-report"}],readingTime:8.085,hasTruncateMarker:!0,authors:[{name:"Blyss Sarania",url:"https://github.com/Sarania",imageURL:"https://github.com/Sarania.png",key:"blyss sarania"}],frontMatter:{authors:["blyss sarania"],date:"2015-07-26T00:00:00.000Z",description:"As promised in last month's update, welcome to PCSX2's very first monthly progress report!",draft:!1,tags:["progress-report"],title:"June 2015 Progress Report"},prevItem:{title:"July-August 2015 Progress Report",permalink:"/blog/2015/july-august-2015-progress-report"},nextItem:{title:"Major Gsdx Progress And Monthly Progress Reports!",permalink:"/blog/2015/major-gsdx-progress-and-monthly-progress-reports"}},l={authorsImageUrls:[void 0]},h=[{value:"GSdx: Hardware rendering Snowblind Game fix",id:"gsdx-hardware-rendering-snowblind-game-fix",level:2},{value:"GSdx: Usage of programmable blending instead of fixed blending",id:"gsdx-usage-of-programmable-blending-instead-of-fixed-blending",level:2},{value:"Log message and Title bar for showcasing Renderer change",id:"log-message-and-title-bar-for-showcasing-renderer-change",level:2},{value:"Stuart Little 3: VIF-MFIFO Stall Issue &amp; Dev9ghz: Unique MAC",id:"stuart-little-3-vif-mfifo-stall-issue--dev9ghz-unique-mac",level:2},{value:"Dev9ghz: Improvement in Log file handling",id:"dev9ghz-improvement-in-log-file-handling",level:2},{value:"Custom Patches to fix game crashes/hangs",id:"custom-patches-to-fix-game-crasheshangs",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},p=d("Image"),u=d("SliderCompare"),c={toc:h};function g(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(14712).Z,width:"562",height:"104"})),(0,r.kt)("p",null,"As promised in last month's update, welcome to PCSX2's very first\nmonthly progress report! Sorry that it's a bit later than I had said -\ntotally my fault! Let's start things off with a bang, shall we? A\nquestion that often gets asked on the forum to a surprising degree is a\nvariation of the following: How can I get XYZ Snowblind engine game\nworking in hardware mode? the answer up until very recently was You\ncan't, use software mode and expect it to be ridiculously demanding. For\nthose of you unfamiliar with it, the Snowblind engine was used for games\nlike Baldur's Gate: Dark Alliance, Champions of Norrath, Champions:\nReturn to Arms, and a few miscellaneous others. The Snowblind engine\ndoes some pretty crazy stuff on the PS2, like using 2x Super Sample Anti\nAliasing! Because of that, it's very demanding and even ultra powerful\nrigs would have issues running these games in software mode. Running\nthem in hardware mode would result in only half the screen being visible\nbecause of the way the engine achieves the 2x SSAA."),(0,r.kt)("h2",{id:"gsdx-hardware-rendering-snowblind-game-fix"},"GSdx: Hardware rendering Snowblind Game fix"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"by ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/gregory38"},"Gregory")," & ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/refractionpcsx2"},"Refraction"))),(0,r.kt)("p",null,"However the situation has changed drastically thanks to Gregory.\nSnowblind engine games are now supported in hardware mode! Now these\npopular games can be enjoyed in HD resolutions and without owning a\nsuper computer! It is important to note however that they are still\nrelatively demanding, just not quite as much as before."),(0,r.kt)("p",null,"Aside from that, June has once again seen a host of GSdx improvements!\nMost of these improvements have been on the accuracy side of things this\ntime, with Gregory taking on the GS and Refraction taking on the VU.\nThere is quite a lot to cover, so let's get started!"),(0,r.kt)("h2",{id:"gsdx-usage-of-programmable-blending-instead-of-fixed-blending"},"GSdx: Usage of programmable blending instead of fixed blending"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"by ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/gregory38"},"Gregory"))),(0,r.kt)("p",null,"To understand the following issues and their solutions, you must\nunderstand the difference between Fixed function and Shader based\nfunction."),(0,r.kt)("p",null,"With Fixed function programming, as the name suggests, the functionality\nis fixed and hence it's not very flexible to work with when trying to\nemulate the GS, which is not at all similar to a normal GPU."),(0,r.kt)("p",null,"Here's an example comparing clamping behavior of a normal GPU and the\nGS:"),(0,r.kt)("p",null,"Channel colors are coded in the 0-255 luminance range. There are four\nchannels - red, green, blue, alpha. Also it's important to remember that\nthe output of the blending unit can be out of the valid range. Normally\nthis is no problem - a GPU will clamp it. But things get a little\ndifferent in the case of the GS which also wraps it."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"th"},"Blending unit (Output)")),(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"th"},"Result")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"-10"),(0,r.kt)("td",{parentName:"tr",align:"center"},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"300"),(0,r.kt)("td",{parentName:"tr",align:"center"},"255")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Standard GPU")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"th"},"Blending unit (Output)")),(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"th"},"Result")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"-10"),(0,r.kt)("td",{parentName:"tr",align:"center"},"246")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"300"),(0,r.kt)("td",{parentName:"tr",align:"center"},"44")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Graphics Synthesizer")),(0,r.kt)("p",null,"In order to remedy this discrepancy between GS and standard GPU behavior\nwe are using a shader that emulates the blending in a proper way with\nrespect to the GS, instead of the fixed function unit of the GPU.\nHowever, wrapping is only one difference between the GS and GPU - there\nare still a lot more differences. Here is a graphical breakdown of the\ndifference between the GS and a GPU in this regard:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," Standard GPU behavior is a bit more complex, the diagram is\nonly made to showcase how PCSX2 deals with some of the differences\nbetween the GS and a GPU."),(0,r.kt)(p,{cols:6,src:a(59866).Z,mdxType:"Image"}),(0,r.kt)(p,{cols:6,src:a(16644).Z,mdxType:"Image"}),(0,r.kt)("p",null,"Since we have already seen examples of accurate blending in our previous\ndeveloper blogs and accurate color clipping was explained just now, all\nthat's left is the accurate framebuffer mask."),(0,r.kt)("p",null,"The standard GPU blending unit allows masking the shader output only\nchannel by channel. The problem is that as the image shows, the GS can\ndo it bit by bit. Yes, that means it's possible to write only the most\nsignificant bit of the channel on the GS. Again this issue can be solved\nby using a shader to emulate this feature instead of doing it on the\nfixed function unit of the GPU. Accurate frame buffer mask is just a\nfeature for handling bit masking instead of channel masking. It's\nimportant to note that the new features which use shaders in place of\nthe fixed function unit do so at the expense of some speed. High end\nmachines should have no problems, but people with weaker machines may\nexperience some slowdown when using a lot of the accurate options."),(0,r.kt)("p",null,"Now let's take a look at how some of the games look with a shader that\nproperly emulates blending ","[","Accurate options enabled","]"," compared to\nnormal GPU Blending ","[","Accurate options disabled","]","."),(0,r.kt)(u,{before:a(89246).Z,after:a(227).Z,mdxType:"SliderCompare"}),(0,r.kt)(u,{before:a(63423).Z,after:a(1899).Z,mdxType:"SliderCompare"}),(0,r.kt)(u,{before:a(12585).Z,after:a(36289).Z,mdxType:"SliderCompare"}),(0,r.kt)(u,{before:a(50400).Z,after:a(44470).Z,mdxType:"SliderCompare"}),(0,r.kt)(u,{before:a(46900).Z,after:a(90013).Z,mdxType:"SliderCompare"}),(0,r.kt)(u,{before:a(69748).Z,after:a(6124).Z,mdxType:"SliderCompare"}),(0,r.kt)("p",null,"Lastly, it should be noted that accurate date isn't the same as the\nother accurate options. Accurate date implements an even more accurate\nalgorithm to compute GS destination alpha testing."),(0,r.kt)("p",null,'The only drawback of the current situation is that there are lots of\nsettings for the user to tweak in order to check which accurate option\nhelps with which game. This will be changing in the future, since\nGregory is currently working on a branch merging all the separate\noptions into a single one called "Blending Unit Accuracy" with different\nmodes with respect to it\'s accuracy and impact on performance.'),(0,r.kt)("h2",{id:"log-message-and-title-bar-for-showcasing-renderer-change"},"Log message and Title bar for showcasing Renderer change"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"by ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/turtleli"},"Turtleli")," & ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ssakash"},"ssakash"))),(0,r.kt)(p,{cols:6,src:a(6630).Z,mdxType:"Image"}),(0,r.kt)(p,{cols:6,src:a(69993).Z,mdxType:"Image"}),(0,r.kt)("p",null,"The following feature had been requested a few times but was very low\npriority, since the setting could easily be identified by taking a look\nat the ",(0,r.kt)("em",{parentName:"p"},"GSdx Plugin settings"),".\nBut this wasn't actually as simple a case as it could have been. There\nis a Shortcut key (F9) for toggling the mode of a specific renderer from\nsoftware to hardware mode. Using said shortcut key and changing the\nrenderer in the plugin settings can lead to a lot of confusion and\nkeeping track of what's what can get messy. Because of that the title\nbar status was added by Turtleli and the console message was added by\nssakash."),(0,r.kt)("p",null,"Relevant PR:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/PCSX2/pcsx2/pull/606"},"TitleBar")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/PCSX2/pcsx2/pull/617"},"Console Message"))),(0,r.kt)("h2",{id:"stuart-little-3-vif-mfifo-stall-issue--dev9ghz-unique-mac"},"Stuart Little 3: VIF-MFIFO Stall Issue & Dev9ghz: Unique MAC"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"by ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/refractionpcsx2"},"Refraction"))),(0,r.kt)("p",null,"This issue was a regression which happened sometime between 1.0.0 and\n1.2.1. The issue was quickly fixed by Refraction."),(0,r.kt)("p",null,'The issue was actually caused by a VIF interrupt firing on a "Wait for\nGS Paths" instruction before the flushing was complete which caused the\nemulator to hang. The condition check has been made a lot more stable\nnow so such issues should never happen again.'),(0,r.kt)("p",null,"In some unrelated work, there was an issue while using the Dev9ghz\nplugin where users were being kicked from online servers because of\nhaving similar MAC address. This was fixed by generating a unique MAC\nbased on the host's MAC address."),(0,r.kt)("p",null,"Relevant commit:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/PCSX2/pcsx2/commit/c753f0d206d0da7a59d4bd771fffc52fbd0a6d94"},"VIF-MFIFO: Fix for stalls on wait instructions, fixes Stuart Little\n3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/PCSX2/pcsx2/commit/819133ee45834548bd5e4f248c0234584cb0ebb5"},"dev9ghzdrk: Make the MAC truely\nunique"))),(0,r.kt)("h2",{id:"dev9ghz-improvement-in-log-file-handling"},"Dev9ghz: Improvement in Log file handling"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"by ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/TheLastRar"},"TheLastRar"))),(0,r.kt)("p",null,"Previously the Dev9ghz plugin used the system registry for saving\nsettings. This has now been replaced by usage of an .ini file like all\nthe modern plugins. Furthermore, the plugin looks in the registry for\nold settings and if it finds them, they are imported into an .ini file\nand then deleted from the registry."),(0,r.kt)("p",null,"There were also instances of crashing when the ethernet adapter was not\nselected, this was fixed by TheLastRar by using a conditional\nstatement."),(0,r.kt)("p",null,"Relevant PR:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/PCSX2/pcsx2/pull/654"},"Fix Ethernet adapter\ncrash")," ."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/PCSX2/pcsx2/pull/607"},"INI files for saving\nsettings")," .")),(0,r.kt)("h2",{id:"custom-patches-to-fix-game-crasheshangs"},"Custom Patches to fix game crashes/hangs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"by ",(0,r.kt)("a",{parentName:"li",href:"http://forums.pcsx2.net/User-prafull"},"prafull"))),(0,r.kt)("p",null,'The number of PS2 games playable with PCSX2 has vastly increased over\nthe years but there are still some games which crash/hang at the Intro\nscenes/Menus/Ingame and as a result are considered "Unplayable" in the\ngame database. Accurate debugging to find the conflict takes time, but\nof course developers intend to fix them properly in the future. In the\nmean time some of these unplayable games are now playable in PCSX2 using\ncustom patches. Such a custom patch might not seem like an ideal\nsolution from a developer\'s perspective, but it will surely be good news\nfor users who were waiting to play these games.'),(0,r.kt)("p",null,"Games that have become playable with patches this month include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Spongebob Squarepants - The Movie"),(0,r.kt)("li",{parentName:"ul"},"Neo Contra"),(0,r.kt)("li",{parentName:"ul"},"World Rally Championship 3"),(0,r.kt)("li",{parentName:"ul"},"The Incredibles"),(0,r.kt)("li",{parentName:"ul"},"The Incredibles - Rise of the Underminer"),(0,r.kt)("li",{parentName:"ul"},"Dead or Alive 2 Hardcore"),(0,r.kt)("li",{parentName:"ul"},"NHL 2K8")),(0,r.kt)("p",null,'These new patches have been merged into the GameDB so that every user\ncan make use of them by enabling "Automatic Gamefixes" option when\nplaying the game. This option is enabled by default. The patch is\napplied by matching the game\'s serial with the list present in our\ndatabase. Thanks to Prafull for spending countless of nights fixing\nthese games. You can check the progress on the patches\n',(0,r.kt)("a",{parentName:"p",href:"http://forums.pcsx2.net/Thread-Fixing-unplayable-games"},"here"),"."),(0,r.kt)("p",null,"Lastly, a brief mention of something exciting. Along with these changes,\nGSdx was bumped to version 1.0. On the OGL side of things, this negated\nthe need for a lot of game specific hacks. Once someone ports those\nchanges to the DX backend, those hacks can be removed entirely! Exciting\nstuff!"),(0,r.kt)("p",null,"Thanks to all the GIT contributions during the month of June and to all\nthe active testers who encourage development to continue!"))}g.isMDXComponent=!0},63423:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/castlevania_broken_s-916ec8029dc5ebfafa73e22f409b772b.jpg"},1899:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/castlevania_fixed_s-3c66f9bf14b1cb94ddca7ba5709bbd03.jpg"},89246:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/fbmask_broken_s-f621f8e810df77db57f6b186801dd39d.jpg"},227:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/fbmask_fixed_s-177638af52f200b2bbf1124743fd85e2.jpg"},46900:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/fifa_street_broken_s-5e7eac109c66299897e2de453b1f6112.jpg"},90013:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/fifa_street_fixed_s-9e5e66762326e8b59286fb5bd7972f02.jpg"},16644:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/gpu-gs-chart2_s-5676755fdf0eb6aa46e3d3fee1657c6a.webp"},59866:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/webp;base64,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"},69993:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/gsdx_console_displ-dc49ff76d0ebded15fdae4003fbaaa85.webp"},6630:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/gsdx_renderer_displ-ac056e80bb52f46221e39a4fe5958af9.webp"},69748:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/hulk_broken_s-ac7f6d46fafc9f363457d783bda9c1d6.jpg"},6124:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/hulk_fixed_s-1e9da6fd882fe018ac0f39564ff05ae7.jpg"},12585:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/moh_broken_s-aebbce9f2dbff416f9d95d764d114f52.jpg"},36289:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/moh_fixed_s-9b7f87c4ad842cc1005b739bb282f313.jpg"},50400:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/nemo_broken_s-351e337fe6af18b84cabef5da32be084.jpg"},44470:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/nemo_fixed_s-591006df5e45661ac1ee9d1d227798db.jpg"},14712:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/6-2015-logo-bbfcef270d0d54ee9af4716b1a131777.jpg"}}]);