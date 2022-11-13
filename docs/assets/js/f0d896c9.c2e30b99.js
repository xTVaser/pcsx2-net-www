"use strict";(self.webpackChunkpcsx_2_net=self.webpackChunkpcsx_2_net||[]).push([[1595],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(a),u=n,b=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return a?r.createElement(b,s(s({ref:t},p),{},{components:a})):r.createElement(b,s({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6914:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=a(87462),n=(a(67294),a(3905));const o={authors:["bositman"],date:new Date("2012-07-02T00:00:00.000Z"),description:"The developer of the Mac port of PCSX2 zedr0n came back with a bang",draft:!1,tags:["devblog"],title:"PCSX2 Mac Updates"},s=void 0,i={permalink:"/pcsx2-net-www/blog/2012/pcsx2-mac-updates",editUrl:"https://github.com/PCSX2/pcsx2-net-www/tree/master/blog/2012/pcsx2-mac-updates/index.mdx",source:"@site/blog/2012/pcsx2-mac-updates/index.mdx",title:"PCSX2 Mac Updates",description:"The developer of the Mac port of PCSX2 zedr0n came back with a bang",date:"2012-07-02T00:00:00.000Z",formattedDate:"July 2, 2012",tags:[{label:"devblog",permalink:"/pcsx2-net-www/blog/tags/devblog"}],readingTime:1.645,hasTruncateMarker:!0,authors:[{name:"Bositman",url:"https://github.com/bositman",imageURL:"https://github.com/bositman.png",key:"bositman"}],frontMatter:{authors:["bositman"],date:"2012-07-02T00:00:00.000Z",description:"The developer of the Mac port of PCSX2 zedr0n came back with a bang",draft:!1,tags:["devblog"],title:"PCSX2 Mac Updates"},prevItem:{title:"PCSX2 1.0 Released!",permalink:"/pcsx2-net-www/blog/2012/pcsx2-1.0-released"},nextItem:{title:"PCSX2.Net Revamped",permalink:"/pcsx2-net-www/blog/2012/pcsx2-net-revamped"}},c={authorsImageUrls:[void 0]},l=[],p=(d="Image",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var d;const m={toc:l};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The developer of the Mac port of PCSX2,\n",(0,n.kt)("a",{parentName:"p",href:"http://forums.pcsx2.net/User-zedr0n"},"zedr0n")," , came back with a bang\nafter some time of silence! He has released a new version of his 0.9.6\nport of PCSX2 for Lion with some additional compatibility fixes. Here is\nwhat he had to say about it:"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"I'm releasing a slightly updated version of pcsx2 0.9.6 it\nshould crash less because of the audio plugin. 0.9.7 is proving very\ndifficult so no update for now."),(0,n.kt)("p",{parentName:"blockquote"},"From this version onwards this becomes a regular .dmg bundle with\npcsx2.app separated from the required libraries package which is still\nincluded in the dmg by default.\nYou can get it from Downloads or direct link pcsx2.dmg"),(0,n.kt)("p",{parentName:"blockquote"},"The package has been cleaned so that all libraries reside in\n/usr/local/pcsx2 and can be removed easily. The Uninstaller.pkg\nincluded in the dmg will do that for you."),(0,n.kt)("p",{parentName:"blockquote"},"Latest version of XQuartz and CG framework still required")),(0,n.kt)("p",null,"In addition, he released an early 0.9.7 alpha port. This version should\nbe considered unstable and pre-beta but you can give it a try. Here is\nwhat was posted about this:"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"And the day has come Im releasing a very early alpha\nversion of 0.9.7 it does play some games but you are advised to do a\nlot of save states."),(0,n.kt)("p",{parentName:"blockquote"},"Im going to continue working on this so hopefully will get better as\nthe time goes on."),(0,n.kt)("p",{parentName:"blockquote"},"You can grab it here: pcsx2 0.9.7.dmg"),(0,n.kt)("p",{parentName:"blockquote"},"The installer includes another mandatory package WXWidgets.pkg which\nshould be installed after Libraries.pkg. Note that Uninstaller.pkg is\ngoing to delete the whole install but otherwise 0.9.6 and 0.9.7\ncoexist well.")),(0,n.kt)("p",null,"Here are some comparative screenshots of Final Fantasy X, 0.9.6 (left)\nvs 0.9.7 (right)"),(0,n.kt)(p,{cols:4,src:a(8177).Z,mdxType:"Image"}),(0,n.kt)(p,{cols:4,src:a(24362).Z,mdxType:"Image"}),(0,n.kt)(p,{cols:4,src:a(2665).Z,mdxType:"Image"}),(0,n.kt)(p,{cols:4,src:a(23393).Z,mdxType:"Image"}),(0,n.kt)(p,{cols:4,src:a(56229).Z,mdxType:"Image"}))}u.isMDXComponent=!0},8177:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/comp1s-4f0eec3db2ebec5b22b26e7c74cfd7fb.jpg"},24362:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/comp2s-b9a8fda48417e0085d9c459308d478a9.jpg"},2665:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/comp3s-8b87e64484020fbb3e0c19299ab9fc3a.jpg"},23393:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/comp4s-32b0c23ba5037f20326f5eeb34f58897.jpg"},56229:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/comp5s-7e8655266f40fc0b54f33de955d1196c.jpg"}}]);