"use strict";(self.webpackChunkpcsx_2_net=self.webpackChunkpcsx_2_net||[]).push([[2929],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=d(n),u=r,h=m["".concat(l,".").concat(u)]||m[u]||c[u]||o;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var d=2;d<o;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},56693:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const o={authors:["jake stine"],date:new Date("2009-02-13T00:00:00.000Z"),description:"Zerofrog documented the concepts of Virtual Memory a few years back. So now I figure it's VTLB's turn",draft:!1,tags:["devblog"],title:"So Maybe It's About Time We Explained Vtlb"},s=void 0,i={permalink:"/pcsx2-net-www/blog/2009/so-maybe-it-s-about-time-we-explained-vtlb",editUrl:"https://github.com/PCSX2/pcsx2-net-www/tree/master/blog/2009/so-maybe-it-s-about-time-we-explained-vtlb/index.mdx",source:"@site/blog/2009/so-maybe-it-s-about-time-we-explained-vtlb/index.mdx",title:"So Maybe It's About Time We Explained Vtlb",description:"Zerofrog documented the concepts of Virtual Memory a few years back. So now I figure it's VTLB's turn",date:"2009-02-13T00:00:00.000Z",formattedDate:"February 13, 2009",tags:[{label:"devblog",permalink:"/pcsx2-net-www/blog/tags/devblog"}],readingTime:3.34,hasTruncateMarker:!0,authors:[{name:"Jake Stine",key:"jake stine"}],frontMatter:{authors:["jake stine"],date:"2009-02-13T00:00:00.000Z",description:"Zerofrog documented the concepts of Virtual Memory a few years back. So now I figure it's VTLB's turn",draft:!1,tags:["devblog"],title:"So Maybe It's About Time We Explained Vtlb"},prevItem:{title:"PCSX2 0.9.6 Released",permalink:"/pcsx2-net-www/blog/2009/pcsx2-0-9-6-released"},nextItem:{title:"Challenges Of A Public Release",permalink:"/pcsx2-net-www/blog/2009/challenges-of-a-public-release"}},l={authorsImageUrls:[void 0]},d=[],p={toc:d};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Zerofrog documented the concepts of Virtual Memory a few years back. So\nnow I figure it's VTLB's turn, since it's the new exclusive memory model\nused in current AVNs and any future releases."),(0,r.kt)("p",null,"So what is VTLB? VTLB stands for Virtual Translation Look-aside Buffer,\nwhich for most of us is a lot of common everyday words that, when put\ntogether like that, don't mean much at all."),(0,r.kt)("p",null,"Firstly, the memory model names VM and VTLB refer to the systems in\nplace inside PCSX2 for emulating the Playstation2's memory, and don't\nactually refer to what's being emulated. In fact, neither VM or VTLB\nbuilds emulate the PS2's own TLB memory model, which can be misleading\nsince VTLB contains the letters \"TLB.\" The VM build was incapable of\nemulating the PS2's TLB without significant speed penalties and\ncomplications. VTLB on the other hand has the potential to emulate the\nPS2 TLB, but we haven't added functionality for it since it also depends\non some other not-yet-complete areas of emulation (namely MIPS TLBMiss\nexceptions). As Zerofrog explained in an earlier blog, very few games\nutilize the TLB features of the PS2 anyway, so it's pretty much at the\nbottom of our wishlist at this time."),(0,r.kt)("p",null,'Conceptually, VTLB is surprisingly simple. It works by building a\nlook-up of the PS2\'s physical memory on a per-page basis, and then\ndefining actions or "handlers" for some pages, and defining other pages\nas "direct access" (fast mode). A page of memory is 4096 bytes long, so\nthe PS2\'s 32Meg physical address space translates into 8192 total pages\nof memory, which ends up being a pretty small and efficient size as far\nas lookup tables are concerned. By comparison the current EErec uses a\nlookup table with ',(0,r.kt)("em",{parentName:"p"},"8 million entries")," !"),(0,r.kt)("p",null,'So when a PS2 instruction performs a memory operation (usually referred\nto as a memOp), the VTLB grabs the lookup address. If the address has\nthe "special handler" bit set, it routes to that handler. If the handler\nbit is not set, the address is treated like a normal pointer to physical\nmemory. As an optimization, VTLB uses the sign bit of the 32 bit address\nfor the purpose of differentiating handled memory pages from direct\nmemory pages.'),(0,r.kt)("p",null,"The pseudo-code looks like this, as performed for a write memOp:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"uint page = ps2_addr/4096;\nuptr pc_addr = vtlb_lookup[page];\nif( pc_addr & 0x80000000 ) // sign bit check\n*pc_addr = data;\nelse {\nhandler[page]( ps2_addr, data );\n}\n")),(0,r.kt)("p",null,"By default, Pcsx2 utilizes the VTLB's handlers for several areas of Ps2\nmemory that hold hardware registers. Hardware registers are memory\naddresses that control the whats, whens, and hows of the Ps2 -- write to\na specific memory address and the PS2 starts a DMA transfer, or changes\nthe video mode, or plays a new audio sample. These writes have to be\nintercepted and handled by the emulator. The VTLB allows us to do that\nvery efficiently."),(0,r.kt)("p",null,'The reason why VTLB is able to emulate the PS2\'s own TLB is thanks to\nthe handlers, which can remap memory anywhere at any time, with any set\nof permissions. If a game decided to remap some pages of memory to a\ndifferent virtual address, those pages would have the "handler bit" set\nTRUE, and then the handler for those pages would be instructed to remap\nthe memOp to the appropriate physical address.'),(0,r.kt)("p",null,"Thus, the flow would be as such:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Ps2","_","Virtual","_","Address -",">"," VTLB","_","Lookup -",">"," Handler -",">","\nPs2","_","Physical","_","Address")),(0,r.kt)("p",null,"The benefits of this model are three-fold: efficiency, extensibility,\nand ease of debugging. If a game doesn't use the Ps2's TLB, then the\nVTLB will simply use direct memOps (fast!). If a game does happen to use\nthe TLB, then VTLB can remap the memory as needed, allowing that game to\nemulate correctly also without having to needlessly burden other games\nwith the overhead of virtual memory remapping logic. And to top it all\noff, handler mappings can be traced and dumped quickly and easily at any\nstage of emulation."))}c.isMDXComponent=!0}}]);