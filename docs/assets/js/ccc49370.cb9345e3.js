"use strict";(self.webpackChunkpcsx_2_net=self.webpackChunkpcsx_2_net||[]).push([[6103],{65203:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var a=n(67294),l=n(86010),r=n(1944),o=n(35281),i=n(9460),c=n(39058),s=n(30390),m=n(87462),u=n(95999),d=n(32244);function g(e){const{nextItem:t,prevItem:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,u.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&a.createElement(d.Z,(0,m.Z)({},n,{subLabel:a.createElement(u.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&a.createElement(d.Z,(0,m.Z)({},t,{subLabel:a.createElement(u.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}function f(){const{assets:e,metadata:t}=(0,i.C)(),{title:n,description:l,date:o,tags:c,authors:s,frontMatter:m}=t,{keywords:u}=m,d=e.image??m.image;return a.createElement(r.d,{title:n,description:l,keywords:u,image:d},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:o}),s.some((e=>e.url))&&a.createElement("meta",{property:"article:author",content:s.map((e=>e.url)).filter(Boolean).join(",")}),c.length>0&&a.createElement("meta",{property:"article:tag",content:c.map((e=>e.label)).join(",")}))}var h=n(39407);function p(e){let{sidebar:t,children:n}=e;const{metadata:l,toc:r}=(0,i.C)(),{nextItem:o,prevItem:m,frontMatter:u}=l,{hide_table_of_contents:d,toc_min_heading_level:f,toc_max_heading_level:p}=u;return a.createElement(c.Z,{sidebar:t,toc:!d&&r.length>0?a.createElement(h.Z,{toc:r,minHeadingLevel:f,maxHeadingLevel:p}):void 0},a.createElement(s.Z,null,n),(o||m)&&a.createElement(g,{nextItem:o,prevItem:m}))}function v(e){const t=e.content;return a.createElement(i.n,{content:e.content,isBlogPostPage:!0},a.createElement(r.FG,{className:(0,l.Z)(o.k.wrapper.blogPages,o.k.page.blogPostPage)},a.createElement(f,null),a.createElement(p,{sidebar:e.sidebar},a.createElement(t,null))))}},93743:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(87462),l=n(67294),r=n(86668);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):a.push(l)})),a}function i(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=i({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function c(e){const t=e.getBoundingClientRect();return t.top===t.bottom?c(e.parentNode):t}function s(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>c(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function m(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.L)();return(0,l.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function u(e){const t=(0,l.useRef)(void 0),n=m();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:o}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let l=t;l<=n;l+=1)a.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:o}),c=s(i,{anchorTopOffset:n.current}),m=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===m)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}function d(e){let{toc:t,className:n,linkClassName:a,isChild:r}=e;return t.length?l.createElement("ul",{className:r?void 0:n},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(d,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const g=l.memo(d);function f(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:c="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:m,maxHeadingLevel:d,...f}=e;const h=(0,r.L)(),p=m??h.tableOfContents.minHeadingLevel,v=d??h.tableOfContents.maxHeadingLevel,E=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,l.useMemo)((()=>i({toc:o(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:p,maxHeadingLevel:v});return u((0,l.useMemo)((()=>{if(c&&s)return{linkClassName:c,linkActiveClassName:s,minHeadingLevel:p,maxHeadingLevel:v}}),[c,s,p,v])),l.createElement(g,(0,a.Z)({toc:E,className:n,linkClassName:c},f))}},39407:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(87462),l=n(67294),r=n(86010),o=n(93743);const i="tableOfContents_bqdL";function c(e){let{className:t,...n}=e;return l.createElement("div",{className:(0,r.Z)(i,"thin-scrollbar",t)},l.createElement(o.Z,(0,a.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},35518:(e,t,n)=>{n.d(t,{Z:()=>C});var a=n(67294),l=n(53238),r=n(66653),o=n(35724),i=n(39372),c=n(22553),s=n(88357);const m=["github-actions"];var u=n(64040),d=n(10154),g=n(90605),f=n(9253),h=n(4668),p=n(14195),v=n(3023),E=n(75358),b=n(25048),y=n(14888),x=n(44141),L=n(38388);const C={...l.Z,PCSX2PRLink:function(e){let{children:t,prNums:n,shas:l,authors:u}=e;return a.createElement(c.ZP.Container,{className:"pr-link"},a.createElement(c.ZP,{xs:12,alignItems:"center"},a.createElement("span",{style:{marginRight:"1.5em"}},t)),a.createElement(c.ZP,{xs:12,alignItems:"center",css:{ml:"0.75em"}},function(e){if(!e)return null;const t=e.split(",");if(0===t.length)return null;let n=[],l=0;for(const r of t)n.push(a.createElement(o.ZP,{key:l++,content:r},a.createElement(i.ZP,{size:"md",src:m.includes(r.toLowerCase())?void 0:`https://github.com/${r}.png?size=40`,text:r,alt:r,bordered:!0,color:"gradient",stacked:!0})));return a.createElement(i.ZP.Group,{animated:n.length>1,style:{marginRight:"0.5em"}},n)}(u),function(e){if(!e)return null;const t=e.split(",");if(0===t.length)return null;let n=[],l=0;for(const o of t)n.push(a.createElement("a",{key:l++,href:`https://github.com/PCSX2/pcsx2/pull/${o}`},a.createElement(s.Pd.Provider,{value:{style:{verticalAlign:"middle"}}},a.createElement(r.yjI,{size:24})),o));return n}(n),function(e){if(!e)return null;const t=e.split(",");if(0===t.length)return null;let n=[],l=0;for(const o of t)n.push(a.createElement("a",{key:l++,href:`https://github.com/PCSX2/pcsx2/commit/${o}`},a.createElement(r.S0$,{size:24}),o));return n}(l)))},SliderCompare:function(e){let{children:t,cols:n,before:l,after:r}=e,o=!1;const i=(0,a.useRef)(null),s=(0,a.useRef)(null),m=(0,a.useRef)(null);function u(e){o=!0;let t=e.target,n=t.getBoundingClientRect(),a=(e.pageX-n.left)/t.offsetWidth*100;a<=100&&(i.current.style.width=a+"%",s.current.style.width=100/a*100+"%",s.current.style.zIndex=3)}return a.createElement(c.ZP.Container,{style:{marginBottom:"1em"}},a.createElement(c.ZP,{xs:12,md:Math.min(12,n??12)},a.createElement("div",{ref:m,className:"img-compare-container",onMouseUp:function(e){o=!1},onMouseDown:u,onTouchStart:u,onMouseMove:function(e){if(!o)return;let t=e.target,n=t.getBoundingClientRect(),a=(e.pageX-n.left)/t.offsetWidth*100;a<=100&&(i.current.style.width=a+"%",s.current.style.width=100/a*100+"%",s.current.style.zIndex=3)}},a.createElement("img",{src:r,loading:"lazy",alt:"",draggable:"false",onLoad:function(e){let t=e.target.naturalWidth/e.target.naturalHeight;m.current.style["aspect-ratio"]=t}}),a.createElement("div",{ref:i,className:"img-clipper"},a.createElement("img",{ref:s,src:l,loading:"lazy",alt:"",draggable:"false"}),a.createElement("div",{className:"img-cmp-label before"},"Before")),a.createElement("div",{className:"img-cmp-label after"},"After"))))},Image:function(e){let{children:t,cols:n,src:l,alt:r}=e;return a.createElement(c.ZP.Container,{style:{marginBottom:"1em"}},a.createElement(c.ZP,{xs:12,md:Math.min(12,n??12)},a.createElement("img",{src:l,loading:"lazy",alt:r??""})))},ImageCompare:function(e){let{children:t,left:n,right:l,altLeft:r,altRight:o}=e;return a.createElement(c.ZP.Container,{gap:1,style:{marginBottom:"1em"}},a.createElement(c.ZP,{xs:6},a.createElement("img",{src:n,loading:"lazy",alt:r??""})),a.createElement(c.ZP,{xs:6},a.createElement("img",{src:l,loading:"lazy",alt:o??""})))},TextGradient:function(e){let{children:t,startColor:n,endColor:l}=e;return a.createElement("span",{style:{backgroundImage:`linear-gradient(45deg, ${n} -20%, ${l} 100%)`,backgroundClip:"text",WebkitTextFillColor:"transparent"}},t)},BarChart:function(e){const[t,n]=(0,a.useState)(void 0);return(0,a.useEffect)((async()=>{const t=await fetch(e.chartDataUrl),a=await t.text(),l=L.ZP.parse(a);n(l)}),[null==e?void 0:e.chartDataUrl]),a.createElement("div",null,e.title?a.createElement(u.Z,{css:{mb:"1em",mt:"1em",textAlign:"center"}},a.createElement(d.Z,{span:12},e.title)):null,a.createElement(u.Z,{css:{mb:"1em",mt:"1em"}},a.createElement(d.Z,{span:12},void 0===t?"Loading Chart Data":function(e){let t=[];return Object.keys(e.barOptions).forEach((function(n,l){t.push(a.createElement(g.$,{key:l,dataKey:n,fill:e.barOptions[n].fillColor}))})),a.createElement("div",{style:{paddingBottom:"56.25%",position:"relative",height:0}},a.createElement("div",{style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}},a.createElement(f.h,null,a.createElement(h.v,{data:e.data,margin:{top:5,right:30,left:20,bottom:5}},a.createElement(p.q,null),a.createElement(v.K,{dataKey:e.axis.x.dataKey,interval:0,textAnchor:"middle"}),a.createElement(E.B,null,a.createElement(b._,{angle:-90,value:e.axis.y.label,position:"insideLeft",style:{textAnchor:"middle",fill:"var(--ifm-font-color-base)"}})),a.createElement(y.u,{contentStyle:{backgroundColor:"var(--ifm-background-color)"},labelStyle:{color:"var(--ifm-font-color-base)"}}),a.createElement(x.D,null),t))))}(t))))}}}}]);