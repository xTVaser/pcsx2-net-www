"use strict";(self.webpackChunkpcsx_2_net=self.webpackChunkpcsx_2_net||[]).push([[2349],{3905:(e,t,r)=>{r.d(t,{Zo:()=>h,kt:()=>m});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},h=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,d=p["".concat(l,".").concat(m)]||p[m]||u[m]||n;return r?a.createElement(d,s(s({ref:t},h),{},{components:r})):a.createElement(d,s({ref:t},h))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<n;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},59446:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var a=r(87462),o=(r(67294),r(3905));const n={authors:["gregory"],date:new Date("2014-11-23T00:00:00.000Z"),description:"It's been a while since the last developer blog entry. I would like to resume this old tradition",draft:!1,tags:["devblog"],title:"Mmu Mini Series"},s=void 0,i={permalink:"/pcsx2-net-www/blog/2014/mmu-mini-series",editUrl:"https://github.com/PCSX2/pcsx2-net-www/tree/master/blog/2014/mmu-mini-series/index.mdx",source:"@site/blog/2014/mmu-mini-series/index.mdx",title:"Mmu Mini Series",description:"It's been a while since the last developer blog entry. I would like to resume this old tradition",date:"2014-11-23T00:00:00.000Z",formattedDate:"November 23, 2014",tags:[{label:"devblog",permalink:"/pcsx2-net-www/blog/tags/devblog"}],readingTime:5.3,hasTruncateMarker:!0,authors:[{name:"Gregory",url:"https://github.com/gregory38",imageURL:"https://github.com/gregory38.png",key:"gregory"}],frontMatter:{authors:["gregory"],date:"2014-11-23T00:00:00.000Z",description:"It's been a while since the last developer blog entry. I would like to resume this old tradition",draft:!1,tags:["devblog"],title:"Mmu Mini Series"},prevItem:{title:"Merry Christmas From The PCSX2 Team",permalink:"/pcsx2-net-www/blog/2014/merry-christmas-from-the-pcsx2-team"},nextItem:{title:"Contriibute To PCSX2 Wiki",permalink:"/pcsx2-net-www/blog/2014/contriibute-to-pcsx2-wiki"}},l={authorsImageUrls:[void 0]},c=[],h={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Hello PCSX2 followers,"),(0,o.kt)("p",null,"It's been a while since the last developer blog entry. I would like to\nresume this old tradition."),(0,o.kt)("p",null,"I will present you a mini series on the MMU (memory management unit) and\nvirtual memory. Jake and ZeroFrog already wrote some posts relating to\nthis topic:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/blog/2009/so-maybe-it-s-about-time-we-explained-vtlb/"},"So Maybe It's About Time We Explained Vtlb")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/blog/2006/virtual-memory/"},"Virtual Memory"))),(0,o.kt)("p",null,"This time, I will explain the goal of MMU and why it is mandatory for\nmodern systems. The MMU is a cornerstone for stability and security. I\nwill also explain why it could be costly for the performance on the\nnative system."),(0,o.kt)("p",null,"On the next article, I will present you the PS2 address space and how\nthe MMU is really used."),(0,o.kt)("p",null,"Let's begin with the root, the Operating System (OS). Hardware can run\nwithout any OS but it is often a necessary evil. The OS has 2 major\ngoals:"),(0,o.kt)("p",null,"1/ The first goal of the OS is to control privilege access of\nprocesses.\nMaybe you want to keep a resource for the hardware or OS internal, for\nexample a hardware watchdog. Maybe you only want to check the validity\nof a command. It could be as simple as only allowing a stop command\nafter a start command."),(0,o.kt)("p",null,"Let's see a basic example: starting some hardware counters"),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(81840).Z,width:"449",height:"415"})),(0,o.kt)("p",null,"As you can see, without any OS you could easily kill your system. The OS\nallows the separation of privileged and standard resources."),(0,o.kt)("p",null,"2/ The second goal is to share the resources between processes\nYou need to understand that processes are independent for coding\nsimplicity and security.\nLet's reuse our hardware counter example"),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(82730).Z,width:"399",height:"371"})),(0,o.kt)("p",null,"This time we want to start the same counter from two different threads.\nUnfortunately process 1 will be corrupted by process 2. It's pretty bad,\nprocess 1 will likely crash. Again the OS is the solution. It replaces\nthe corruption with an error that can be handled by the process."),(0,o.kt)("p",null,'Concluding this mini presentation, the OS is the gatekeeper of the\nhardware. The OS is a real god but be aware "with great power, comes\ngreat responsibility". System stability depends on the quality of the\nOS. On the contrary the process is isolated. A bad process will die\nalone, yes life is tough.'),(0,o.kt)("p",null,"Now let's talk about virtualization. In our 2nd example, the OS throws\nan error because the counter is already used by another process. However\nour system can support several counters, it is a shame to wait for the\nfirst counter to be available. The process wants to start a counter, it\ndoesn't care which one. So it might be possible to handle this situation\nbetter. The solution is virtualization."),(0,o.kt)("p",null,"Here's the idea, let's create a pool of virtual counters by process and\nthen the OS will remap them to a real physical counter. As a bonus, we\ndon't need to limit the number of counters based on the hardware. You\ncan have 10 virtual counters for only 2 physical counters."),(0,o.kt)("p",null,"Let's redo the previous example with a virtualization layer in the OS."),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(87119).Z,width:"415",height:"219"})),(0,o.kt)("p",null,"As a side note, virtualization is a common solution for resource\nmanagement. On the internet you have a logical IP address instead of\nusing the Mac address directly. HDD access can be virtualized too with a\ntool like LVM\n",(0,o.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Logical_Volume_Manager_%28Linux%29"},"http://en.wikipedia.org/wiki/Logical_Volume_Manager_%28Linux%29")," .\nSometimes the whole machine is virtual, see VirtualBox or even PCSX2."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"The hardware counter was an example but the subject of the blog is the\nMMU so let's get back to virtual memory. And yes you got it right,\nvirtual memory is the same concept as we discussed earlier. The process\nwill access virtual memory. The OS will translate it to the physical\naddress."),(0,o.kt)("p",null,"I said that the OS will remap the virtual memory to physical memory but\nthat is not exactly correct. Memory access is very common in a process,\nlet's say every 2 or 5 instructions. Imagine if the kernel did a lookup\nof the physical address every 4 instructions, it would be slow as hell.\nActually it is even worse because the program counter (PC) is also a\nvirtual address. Software is deemed to be slow, it needs to be hardware\naccelerated."),(0,o.kt)("p",null,"Here comes the MMU that allows the CPU to do the conversion on the fly.\nThe MMU uses a dedicated cache named TLB (Translation Lookup-aside\nBuffer). However a hardware cache is very costly, you can't store a\nphysical address for each logical address, besides remember that the\nvirtual memory could be bigger than the physical memory. So the memory\naddress space is split in pages, often 4K but various CPUs can support\nseveral page sizes. The PS2 supports 7 sizes of pages from 4K to 16MB."),(0,o.kt)("p",null,'A TLB miss will cost you hundreds of CPU cycles and for good reason, a\n4GB virtual space requires 1 million table entries of 4K-pages. A common\ntrick to reduce cache misses is to increase the page size so you can fit\n"more memory" in the TLB cache. However there is a terrible issue, the\nwaste of resources. One page is an atomic resource, that means either\nthe page is free or the page is locked by the process. If the process\nallocates a single byte on a 16MB page, nearly 16MB is lost for other\nprocesses. It\'s not a real solution for the PC which uses hundreds of\nprocesses but that is very different for the PS2. We will discuss this\nnext time.'),(0,o.kt)("p",null,"See below a typical use model of the MMU:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(22188).Z,width:"621",height:"415"})),(0,o.kt)("p",null,"The MMU is a nice and complex solution to handle memory access. But\nthere is more. You can attach some flags to each page. For example on a\nmodern PC, you have readable/writable/executable. The PS2 doesn't\nsupport all those flags, yes it's not modern anymore, however it has\nanother class of flag that controls cache behavior: cacheable/uncached\naccelerated/uncached. Note for completeness sake that the PS2 also has\nread only flags. It is a powerful mechanism but we will discuss the\nimplications on the next chapter."),(0,o.kt)("p",null,"Mini quiz:\n","*"," The first 512KB of RAM is not virtually mapped because it is at the\nlocation of the OS, do you know how the kernel will access this\nlocation?\n","*"," A hardware component needs to access the memory without the CPUs\nintervention. Do you know which one? Do you know how the addresses are\nhandled?"))}u.isMDXComponent=!0},81840:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/mmu-schematic-1s-c9922d78fa64bb6d2410e268129630b4.webp"},82730:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/mmu-schematic-2s-df94106b988d01922191a774d3d9fb4a.webp"},87119:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/mmu-schematic-3s-4da648f69530f8a2bacbe945bf862468.webp"},22188:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/mmu-schematic-4s-8c98cfc208a2a2fed57a0ba67895c9c8.webp"}}]);