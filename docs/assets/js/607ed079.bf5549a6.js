"use strict";(self.webpackChunkpcsx_2_net=self.webpackChunkpcsx_2_net||[]).push([[2615],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),h=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=h(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=h(n),d=a,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var h=2;h<o;h++)i[h]=n[h];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},97164:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>h});var r=n(87462),a=(n(67294),n(3905));const o={authors:["jake stine"],date:new Date("2009-10-13T00:00:00.000Z"),description:"One thing is for sure: The new 0.9.7 betas will use a lot more threads than the current 0.9.6 releases",draft:!1,tags:["devblog"],title:"Thread Counting"},i=void 0,s={permalink:"/pcsx2-net-www/blog/2009/thread-counting",editUrl:"https://github.com/PCSX2/pcsx2-net-www/tree/master/blog/2009/thread-counting/index.mdx",source:"@site/blog/2009/thread-counting/index.mdx",title:"Thread Counting",description:"One thing is for sure: The new 0.9.7 betas will use a lot more threads than the current 0.9.6 releases",date:"2009-10-13T00:00:00.000Z",formattedDate:"October 13, 2009",tags:[{label:"devblog",permalink:"/pcsx2-net-www/blog/tags/devblog"}],readingTime:2.665,hasTruncateMarker:!0,authors:[{name:"Jake Stine",key:"jake stine"}],frontMatter:{authors:["jake stine"],date:"2009-10-13T00:00:00.000Z",description:"One thing is for sure: The new 0.9.7 betas will use a lot more threads than the current 0.9.6 releases",draft:!1,tags:["devblog"],title:"Thread Counting"},prevItem:{title:"Global Visitor Stats",permalink:"/pcsx2-net-www/blog/2009/global-visitor-stats"},nextItem:{title:"Thread Synchronization",permalink:"/pcsx2-net-www/blog/2009/thread-synchronization"}},l={authorsImageUrls:[void 0]},h=[],c={toc:h};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"One thing is for sure: The new 0.9.7 betas will use a ",(0,a.kt)("em",{parentName:"p"},"lot")," more threads\nthan the current 0.9.6 releases. Now this doesn't necessarily mean the\nemulator will take advantage of quad core CPUs better than 0.9.6, least\nnot in a gameplay sense. As I explained in my previous blog, threading\nis as much a function of improving responsiveness and recoverability as\nit is about sharing a workload across multi-core cpus, and so far most\nof the threading implemented into 0.9.7 is the scalable/responsive\nsort."),(0,a.kt)("p",null,"One of the major changes in 0.9.7 will be the removal of what I call an\n",(0,a.kt)("strong",{parentName:"p"},'"aggressive spinwait"')," in the ",(0,a.kt)("em",{parentName:"p"},"EmotionEngine (EEcore)")," emulation\nunit. A spinwait is a simple loop that waits on a variable to change,\nlike so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"volatile bool IsRunning = true;\nStartThreadedAction();\nwhile( IsRunning );\n// When the above while() exits, the ThreadedAction is done.\n")),(0,a.kt)("p",null,"This is a very simple threading design, but it's mostly drawbacks and\nnot many advantages. We've continued to use it up to now in PCSX2's\nEEcore because there wasn't much reason to do away with it; and with the\nEEcore being the main orchestrator of everything in PCSX2 (gui\nincluded!), having the high-resolution responsiveness of a spinwait made\nsome sense."),(0,a.kt)("p",null,"On the current design in 0.9.6, the EEcore and the GUI share time on the\nsame thread, and when the GS thread is busy, the EEcore will split time\nbetween waiting on the GS (via the spinwait) and processing GUI\nmessages. This transition from EEcore emulation to GUI message\nprocessing was typically costly, but was necessary to handle input from\nthe user. In the new 0.9.7 design, the EEcore has its own thread\nseparate from the GUI. This allows us to remove the overhead of having\nto switch to/from GUI processing code, but it came with a somewhat\nunexpected drawback: the EEcore's aggressive spinwait is now suddenly\n",(0,a.kt)("em",{parentName:"p"},"very")," aggressive when a game becomes GS-limited. In 0.9.6 the spinwait\nbreaks from time to time to splice in some gui messages and make time\nfor the GS to do its thing too. This kept everything pretty happy. But\nwith the splicing gone, the EEcore is allowed to run free, soaking up\ntons of resources simply re-testing the same variable over and over."),(0,a.kt)("p",null,"The full impact became obvious when we realized that setting 2 software\nthreads in GSdx caused PCSX2 to slow to a crawl (sub 1fps!) on dual core\nsystems. That's what happens when you have three threads using spinwaits\non a dual core system -- they completely starved out everything else,\nand to some extent each other as well. (yes, GSdx software uses\nspinwaits also!)"),(0,a.kt)("p",null,"The primary solution is to get rid of the spinwait in the EEcore. In its\nwake we'll put the EEcore to sleep and have it wake up only once the\nMTGS ringbuffer has emptied to a satisfactory percentage. With the\nEEcore asleep, the GSdx thread(s) will have full reign over all the\nresources of the cpu; which will allow it to play \"catch up\" more\nefficiently than it can even in 0.9.6. This model will be an obvious win\nfor both software rendering, and possibly DX11's multithreaded pipeline\nin the future."))}p.isMDXComponent=!0}}]);