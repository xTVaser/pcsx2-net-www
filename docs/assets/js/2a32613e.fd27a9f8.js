"use strict";(self.webpackChunkpcsx_2_net=self.webpackChunkpcsx_2_net||[]).push([[5150],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=p(n),d=a,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||r;return n?o.createElement(m,s(s({ref:t},c),{},{components:n})):o.createElement(m,s({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<r;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},92099:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const r={authors:["cottonvibes"],date:new Date("2009-09-02T00:00:00.000Z"),description:"This begins a series of blog posts intended for ps2 developers and ps2 emu authors",draft:!1,tags:["devblog"],title:"Ps2 VU Vector Unit Documentation Part 1"},s=void 0,i={permalink:"/blog/2009/ps2-vu-vector-unit-documentation-part-1",editUrl:"https://github.com/PCSX2/pcsx2-net-www/tree/master/blog/2009/ps2-vu-vector-unit-documentation-part-1/index.mdx",source:"@site/blog/2009/ps2-vu-vector-unit-documentation-part-1/index.mdx",title:"Ps2 VU Vector Unit Documentation Part 1",description:"This begins a series of blog posts intended for ps2 developers and ps2 emu authors",date:"2009-09-02T00:00:00.000Z",formattedDate:"September 2, 2009",tags:[{label:"devblog",permalink:"/blog/tags/devblog"}],readingTime:4.68,hasTruncateMarker:!0,authors:[{name:"cottonvibes",key:"cottonvibes"}],frontMatter:{authors:["cottonvibes"],date:"2009-09-02T00:00:00.000Z",description:"This begins a series of blog posts intended for ps2 developers and ps2 emu authors",draft:!1,tags:["devblog"],title:"Ps2 VU Vector Unit Documentation Part 1"},prevItem:{title:"Progress flood",permalink:"/blog/2009/progress-flood"},nextItem:{title:"Whats Clamping Why Do We Need It",permalink:"/blog/2009/whats-clamping-why-do-we-need-it"}},l={authorsImageUrls:[void 0]},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This begins a series of blog posts intended for ps2 developers and ps2\nemu authors.\nIts purpose is to give some light to some of the secrets I've learned\nabout the VUs while developing my mVU recompilers, and to describe what\nhappens in situations that are a bit questionable."),(0,a.kt)("p",null,"All information has been at least somewhat tested, but of course there\nmay be some errors.\nI should also mention that everything described here mVU implements in\nsome way (unless specifically noted otherwise).\nI may even describe some tricks and clever optimizations I used in my\nrecompilers in future articles."),(0,a.kt)("p",null,"Since these articles are intended to describe advance secrets, I will\n",(0,a.kt)("strong",{parentName:"p"},"not")," bother to explain common concepts about the VUs, and reading\nthis implies you have at least an intermediate level of how the VUs work\nor how to program for them."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note 1: VI lower instructions")),(0,a.kt)("p",null,"For lower opcode operations dealing with VI regs, there is a 5 bit range\nfor VI operands. But only VI regs 0 to 15 are accessible, for values\ngreater than 15, the value is ANDed with 0xf. So effectively there is\nonly a 4 bit range.\nExample"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"IAND: 1000000 | 0000 | it x 5 | is x 5 | id x 5 | 110100\n")),(0,a.kt)("p",null,"If for 'id' we have '18', then the destination would be"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"18 &= 0xf;\n")),(0,a.kt)("p",null,"Resulting in the destination reg being vi02."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note 2: VI Reg Delays on Conditional Branches")),(0,a.kt)("p",null,"If a VI integer reg is modified before a conditional branch, the\nprevious value of the integer is used for the calculation.\nThis only applies to conditional branches, and not to jumps (JR/JALR)."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"IADDIU vi05, vi00, 100\nIBNE vi05, vi00 &lt; // ---- vi05's value is before the 100 was added\n")),(0,a.kt)("p",null,"The only exception to this are Flag reading lower instructions\n(FSxxx/FMxxx/FCxxx). In those cases the current value is read."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"FSAND vi05, 0xfff\nIBNE vi05, vi00 &lt; // ---- vi05's value is the Status Reg\n")),(0,a.kt)("p",null,"The situation becomes complex however when a VI reg is read AND written\nto in a sequence of instructions."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"IADDIU vi05, vi00, 100\nIADDIU vi05, vi05, 100\nIADDIU vi05, vi05, 100\nIADDIU vi05, vi05, 100\nIBNE vi05, vi00 &lt; // ---- vi05's value is before any 100 value was added. (the value before the first IADDIU)\n")),(0,a.kt)("p",null,"When a VI reg is first written to, a 'chain' starts, and then if the\nnext instruction reads AND writes to the same VI reg, the chain\ncontinues. It does this for a maximum of 4 instructions (the example\nabove is the maximum). Then when the branch comes, the value that should\nbe read is the value before the chain!"),(0,a.kt)("p",null,"In a few games this commonly happens with a sequence of SQI\ninstructions, and improperly emulating this causes problems."),(0,a.kt)("p",null,"It should also be noted that this behavior also occurs through branches.\nFor example, Champions Return to Arms does something especially evil to\nemulate correctly (mVU does however emulate it correctly)."),(0,a.kt)("p",null,"It does:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"[08b0] (000002ff) NOP\n[08b0] (100310fb) IADDIU vi03, vi02, 251\n[08b8] (000002ff) NOP\n[08b8] (81e2a37d) SQI.xyzw vf20, vi02++\n[08c0] (000002ff) NOP\n[08c0] (81e2ab7d) SQI.xyzw vf21, vi02++\n[08c8] (000002ff) NOP\n[08c8] (81e2b37d) SQI.xyzw vf22, vi02++\n[08d0] (000002ff) NOP\n[08d0] (520317fc) IBNE vi03, vi02 [08b8]\n[08d8] (000002ff) NOP\n[08d8] (81e2bb7d) SQI.xyzw vf23, vi02++\n")),(0,a.kt)("p",null,"The first time the above block of code is run, the IBNE value for vi02\nis the same value as it's value at ","[","08b0","]"," (before the chain starts).\nNext (assuming the branch is taken), the delay slot is ran and a NEW vi2\nchain begins. When the vi2 is read on the second loop, it should be the\nvalue vi2 had BEFORE ","[","08d8","]",". So it reads the result of ","[","08c8","]"," from\nthe first loop! (Remember these chains last for 4 instructions maximum,\nso it makes sense when you think about it)."),(0,a.kt)("p",null,"Currently I'm not 100% sure what happens if a stall occurs in one of\nthese VI chains, but I'm 95% sure it breaks the chain, making it start\non the instruction where the stall occurred (wouldn't make sense\notherwise)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note 3: ADD/SUB Precision and Normalization")),(0,a.kt)("p",null,"When performing ADD/SUB operations, the ps2 VU's and the FPU act closely\nto SSE's \"Round to Zero\" mode (but of course they don't support\nINF/NaNs).\nTriace games however rely on bit-accurate ADD opcodes (ADDI\nspecifically) to boot (presumably due to some decompression algorithm or\nan encryption key)."),(0,a.kt)("p",null,"Nneeve found out the VU's act as if they have only 1 guard bit during\nmantissa normlization (as opposed to SSE which uses 3 guard bits that\nSTILL appear during normalization when using Round to Zero in add/sub\nSSE instructions)."),(0,a.kt)("p",null,"By using a custom ADD routine Nneeve wrote that simulates only 1 guard\nbit during single-precision float mantissa normalization, pcsx2 is able\nto boot and run Triace games with a playable status. (Refer to pcsx2's\nsource for the custom routines)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note 4: MAX/MINI with Denormals")),(0,a.kt)("p",null,"The ps2's Max and Min logic compares and transfers denormals to the\nresult, as opposed to SSE with DaZ On which will treat any Denormal as\nZero and just transfer Zero as the result.\nExample:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"MAX vf02.x, vf00.x, vf01.x\n")),(0,a.kt)("p",null,"Assuming vf01.x holds a positive denormal, the result in vf02.x will be\nthat same denormal.\nUsing SSE with DaZ however will just make the result '0' in that case\n(which is incorrect)."),(0,a.kt)("p",null,"Some games rely on this correct behavior for MAX/MINI or else have\ngraphical problems"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Big Special thanks to:"),"\nNneeve, Tmkk, Rama, and ZeroFrog who all helped in finding some of the\nsecrets described in this documentation."))}u.isMDXComponent=!0}}]);