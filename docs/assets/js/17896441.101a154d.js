"use strict";(self.webpackChunkpcsx_2_net=self.webpackChunkpcsx_2_net||[]).push([[7918],{31986:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(87462),l=n(67294),r=n(86010),c=n(35281),s=n(52802),i=n(48596),o=n(39960),m=n(44996),d=n(95999);function u(e){return l.createElement("svg",(0,a.Z)({viewBox:"0 0 24 24"},e),l.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const g={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function h(e){let{children:t,href:n,isLast:a}=e;const r="breadcrumbs__link";return a?l.createElement("span",{className:r,itemProp:"name"},t):n?l.createElement(o.Z,{className:r,href:n,itemProp:"item"},l.createElement("span",{itemProp:"name"},t)):l.createElement("span",{className:r},t)}function f(e){let{children:t,active:n,index:c,addMicrodata:s}=e;return l.createElement("li",(0,a.Z)({},s&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,r.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,l.createElement("meta",{itemProp:"position",content:String(c+1)}))}function v(){const e=(0,m.Z)("/");return l.createElement("li",{className:"breadcrumbs__item"},l.createElement(o.Z,{"aria-label":(0,d.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,r.Z)("breadcrumbs__link",g.breadcrumbsItemLink),href:e},l.createElement(u,{className:g.breadcrumbHomeIcon})))}function p(){const e=(0,s.s1)(),t=(0,i.Ns)();return e?l.createElement("nav",{className:(0,r.Z)(c.k.docs.docBreadcrumbs,g.breadcrumbsContainer),"aria-label":(0,d.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},l.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&l.createElement(v,null),e.map(((t,n)=>{const a=n===e.length-1;return l.createElement(f,{key:n,active:a,index:n,addMicrodata:!!t.href},l.createElement(h,{href:t.href,isLast:a},t.label))})))):null}},15154:(e,t,n)=>{n.r(t),n.d(t,{default:()=>G});var a=n(67294),l=n(1944),r=n(902);const c=a.createContext(null);function s(e){let{children:t,content:n}=e;const l=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return a.createElement(c.Provider,{value:l},t)}function i(){const e=(0,a.useContext)(c);if(null===e)throw new r.i6("DocProvider");return e}function o(){const{metadata:e,frontMatter:t,assets:n}=i();return a.createElement(l.d,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var m=n(86010),d=n(87524),u=n(80049);function g(){const{metadata:e}=i();return a.createElement(u.Z,{previous:e.previous,next:e.next})}var h=n(23120),f=n(44364),v=n(35281),p=n(95999);function E(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return a.createElement(p.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function b(e){let{lastUpdatedBy:t}=e;return a.createElement(p.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function Z(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:l}=e;return a.createElement("span",{className:v.k.common.lastUpdated},a.createElement(p.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(E,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:l?a.createElement(b,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var L=n(84881),N=n(71526);const k="lastUpdated_vwxv";function _(e){return a.createElement("div",{className:(0,m.Z)(v.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(N.Z,e)))}function y(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:l,formattedLastUpdatedAt:r}=e;return a.createElement("div",{className:(0,m.Z)(v.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(L.Z,{editUrl:t})),a.createElement("div",{className:(0,m.Z)("col",k)},(n||l)&&a.createElement(Z,{lastUpdatedAt:n,formattedLastUpdatedAt:r,lastUpdatedBy:l})))}function C(){const{metadata:e}=i(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:l,lastUpdatedBy:r,tags:c}=e,s=c.length>0,o=!!(t||n||r);return s||o?a.createElement("footer",{className:(0,m.Z)(v.k.docs.docFooter,"docusaurus-mt-lg")},s&&a.createElement(_,{tags:c}),o&&a.createElement(y,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:r,formattedLastUpdatedAt:l})):null}var x=n(86043),T=n(93743),w=n(87462);const H="tocCollapsibleButton_TO0P",U="tocCollapsibleButtonExpanded_MG3E";function A(e){let{collapsed:t,...n}=e;return a.createElement("button",(0,w.Z)({type:"button"},n,{className:(0,m.Z)("clean-btn",H,!t&&U,n.className)}),a.createElement(p.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const M="tocCollapsible_ETCw",P="tocCollapsibleContent_vkbj",I="tocCollapsibleExpanded_sAul";function B(e){let{toc:t,className:n,minHeadingLevel:l,maxHeadingLevel:r}=e;const{collapsed:c,toggleCollapsed:s}=(0,x.u)({initialState:!0});return a.createElement("div",{className:(0,m.Z)(M,!c&&I,n)},a.createElement(A,{collapsed:c,onClick:s}),a.createElement(x.z,{lazy:!0,className:P,collapsed:c},a.createElement(T.Z,{toc:t,minHeadingLevel:l,maxHeadingLevel:r})))}const S="tocMobile_ITEo";function z(){const{toc:e,frontMatter:t}=i();return a.createElement(B,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,m.Z)(v.k.docs.docTocMobile,S)})}var R=n(39407);function O(){const{toc:e,frontMatter:t}=i();return a.createElement(R.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:v.k.docs.docTocDesktop})}var V=n(92503),D=n(45042);function $(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=i();return t.hide_title||void 0!==n?null:e.title}();return a.createElement("div",{className:(0,m.Z)(v.k.docs.docMarkdown,"markdown")},n&&a.createElement("header",null,a.createElement(V.Z,{as:"h1"},n)),a.createElement(D.Z,null,t))}var F=n(31986);const j="docItemContainer_Djhp",q="docItemCol_VOVn";function X(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=i(),n=(0,d.i)(),l=e.hide_table_of_contents,r=!l&&t.length>0;return{hidden:l,mobile:r?a.createElement(z,null):void 0,desktop:!r||"desktop"!==n&&"ssr"!==n?void 0:a.createElement(O,null)}}();return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,m.Z)("col",!n.hidden&&q)},a.createElement(h.Z,null),a.createElement("div",{className:j},a.createElement("article",null,a.createElement(F.Z,null),a.createElement(f.Z,null),n.mobile,a.createElement($,null,t),a.createElement(C,null)),a.createElement(g,null))),n.desktop&&a.createElement("div",{className:"col col--3"},n.desktop))}function G(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,n=e.content;return a.createElement(s,{content:e.content},a.createElement(l.FG,{className:t},a.createElement(o,null),a.createElement(X,null,a.createElement(n,null))))}},80049:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(87462),l=n(67294),r=n(95999),c=n(32244);function s(e){const{previous:t,next:n}=e;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&l.createElement(c.Z,(0,a.Z)({},t,{subLabel:l.createElement(r.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&l.createElement(c.Z,(0,a.Z)({},n,{subLabel:l.createElement(r.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},44364:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),l=n(86010),r=n(95999),c=n(35281),s=n(74477);function i(e){let{className:t}=e;const n=(0,s.E)();return n.badge?a.createElement("span",{className:(0,l.Z)(t,c.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(r.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}},23120:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(67294),l=n(86010),r=n(52263),c=n(39960),s=n(95999),i=n(80143),o=n(35281),m=n(60373),d=n(74477);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(s.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(s.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function g(e){const t=u[e.versionMetadata.banner];return a.createElement(t,e)}function h(e){let{versionLabel:t,to:n,onClick:l}=e;return a.createElement(s.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(c.Z,{to:n,onClick:l},a.createElement(s.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function f(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:c}}=(0,r.Z)(),{pluginId:s}=(0,i.gA)({failfast:!0}),{savePreferredVersionName:d}=(0,m.J)(s),{latestDocSuggestion:u,latestVersionSuggestion:f}=(0,i.Jo)(s),v=u??(p=f).docs.find((e=>e.id===p.mainDocId));var p;return a.createElement("div",{className:(0,l.Z)(t,o.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(g,{siteTitle:c,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(h,{versionLabel:f.label,to:v.path,onClick:()=>d(f.name)})))}function v(e){let{className:t}=e;const n=(0,d.E)();return n.banner?a.createElement(f,{className:t,versionMetadata:n}):null}},84881:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(67294),l=n(95999),r=n(35281),c=n(87462),s=n(86010);const i="iconEdit_Z9Sw";function o(e){let{className:t,...n}=e;return a.createElement("svg",(0,c.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(i,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function m(e){let{editUrl:t}=e;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:r.k.common.editThisPage},a.createElement(o,null),a.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},32244:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(67294),l=n(86010),r=n(39960);function c(e){const{permalink:t,title:n,subLabel:c,isNext:s}=e;return a.createElement(r.Z,{className:(0,l.Z)("pagination-nav__link",s?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},c&&a.createElement("div",{className:"pagination-nav__sublabel"},c),a.createElement("div",{className:"pagination-nav__label"},n))}},93743:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(87462),l=n(67294),r=n(86668);function c(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):a.push(l)})),a}function s(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=s({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function i(e){const t=e.getBoundingClientRect();return t.top===t.bottom?i(e.parentNode):t}function o(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>i(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(i(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function m(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.L)();return(0,l.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,l.useRef)(void 0),n=m();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:c}=e;function s(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),s=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let l=t;l<=n;l+=1)a.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:c}),i=o(s,{anchorTopOffset:n.current}),m=e.find((e=>i&&i.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===m)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),()=>{document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,n])}function u(e){let{toc:t,className:n,linkClassName:a,isChild:r}=e;return t.length?l.createElement("ul",{className:r?void 0:n},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(u,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const g=l.memo(u);function h(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:i="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:m,maxHeadingLevel:u,...h}=e;const f=(0,r.L)(),v=m??f.tableOfContents.minHeadingLevel,p=u??f.tableOfContents.maxHeadingLevel,E=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,l.useMemo)((()=>s({toc:c(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:v,maxHeadingLevel:p});return d((0,l.useMemo)((()=>{if(i&&o)return{linkClassName:i,linkActiveClassName:o,minHeadingLevel:v,maxHeadingLevel:p}}),[i,o,v,p])),l.createElement(g,(0,a.Z)({toc:E,className:n,linkClassName:i},h))}},39407:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(87462),l=n(67294),r=n(86010),c=n(93743);const s="tableOfContents_bqdL";function i(e){let{className:t,...n}=e;return l.createElement("div",{className:(0,r.Z)(s,"thin-scrollbar",t)},l.createElement(c.Z,(0,a.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},13008:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),l=n(86010),r=n(39960);const c="tag_zVej",s="tagRegular_sFm0",i="tagWithCount_h2kH";function o(e){let{permalink:t,label:n,count:o}=e;return a.createElement(r.Z,{href:t,className:(0,l.Z)(c,o?i:s)},n,o&&a.createElement("span",null,o))}},71526:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),l=n(86010),r=n(95999),c=n(13008);const s="tags_jXut",i="tag_QGVx";function o(e){let{tags:t}=e;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,l.Z)(s,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:n}=e;return a.createElement("li",{key:n,className:i},a.createElement(c.Z,{label:t,permalink:n}))}))))}},35518:(e,t,n)=>{n.d(t,{Z:()=>k});var a=n(67294),l=n(53238),r=n(66653),c=n(35724),s=n(39372),i=n(22553),o=n(88357);const m=["github-actions"];var d=n(64040),u=n(10154),g=n(90605),h=n(9253),f=n(4668),v=n(14195),p=n(3023),E=n(75358),b=n(25048),Z=n(14888),L=n(44141),N=n(38388);const k={...l.Z,PCSX2PRLink:function(e){let{children:t,prNums:n,shas:l,authors:d}=e;return a.createElement(i.ZP.Container,{className:"pr-link"},a.createElement(i.ZP,{xs:12,alignItems:"center"},a.createElement("span",{style:{marginRight:"1.5em"}},t)),a.createElement(i.ZP,{xs:12,alignItems:"center",css:{ml:"0.75em"}},function(e){if(!e)return null;const t=e.split(",");if(0===t.length)return null;let n=[],l=0;for(const r of t)n.push(a.createElement(c.ZP,{key:l++,content:r},a.createElement(s.ZP,{size:"md",src:m.includes(r.toLowerCase())?void 0:`https://github.com/${r}.png?size=40`,text:r,alt:r,bordered:!0,color:"gradient",stacked:!0})));return a.createElement(s.ZP.Group,{animated:n.length>1,style:{marginRight:"0.5em"}},n)}(d),function(e){if(!e)return null;const t=e.split(",");if(0===t.length)return null;let n=[],l=0;for(const c of t)n.push(a.createElement("a",{key:l++,href:`https://github.com/PCSX2/pcsx2/pull/${c}`},a.createElement(o.Pd.Provider,{value:{style:{verticalAlign:"middle"}}},a.createElement(r.yjI,{size:24})),c));return n}(n),function(e){if(!e)return null;const t=e.split(",");if(0===t.length)return null;let n=[],l=0;for(const c of t)n.push(a.createElement("a",{key:l++,href:`https://github.com/PCSX2/pcsx2/commit/${c}`},a.createElement(r.S0$,{size:24}),c));return n}(l)))},SliderCompare:function(e){let{children:t,cols:n,before:l,after:r}=e,c=!1;const s=(0,a.useRef)(null),o=(0,a.useRef)(null),m=(0,a.useRef)(null);function d(e){c=!0;let t=e.target,n=t.getBoundingClientRect(),a=(e.pageX-n.left)/t.offsetWidth*100;a<=100&&(s.current.style.width=a+"%",o.current.style.width=100/a*100+"%",o.current.style.zIndex=3)}return a.createElement(i.ZP.Container,{style:{marginBottom:"1em"}},a.createElement(i.ZP,{xs:12,md:Math.min(12,n??12)},a.createElement("div",{ref:m,className:"img-compare-container",onMouseUp:function(e){c=!1},onMouseDown:d,onTouchStart:d,onMouseMove:function(e){if(!c)return;let t=e.target,n=t.getBoundingClientRect(),a=(e.pageX-n.left)/t.offsetWidth*100;a<=100&&(s.current.style.width=a+"%",o.current.style.width=100/a*100+"%",o.current.style.zIndex=3)}},a.createElement("img",{src:r,loading:"lazy",alt:"",draggable:"false",onLoad:function(e){let t=e.target.naturalWidth/e.target.naturalHeight;m.current.style["aspect-ratio"]=t}}),a.createElement("div",{ref:s,className:"img-clipper"},a.createElement("img",{ref:o,src:l,loading:"lazy",alt:"",draggable:"false"}),a.createElement("div",{className:"img-cmp-label before"},"Before")),a.createElement("div",{className:"img-cmp-label after"},"After"))))},Image:function(e){let{children:t,cols:n,src:l,alt:r}=e;return a.createElement(i.ZP.Container,{style:{marginBottom:"1em"}},a.createElement(i.ZP,{xs:12,md:Math.min(12,n??12)},a.createElement("img",{src:l,loading:"lazy",alt:r??""})))},ImageCompare:function(e){let{children:t,left:n,right:l,altLeft:r,altRight:c}=e;return a.createElement(i.ZP.Container,{gap:1,style:{marginBottom:"1em"}},a.createElement(i.ZP,{xs:6},a.createElement("img",{src:n,loading:"lazy",alt:r??""})),a.createElement(i.ZP,{xs:6},a.createElement("img",{src:l,loading:"lazy",alt:c??""})))},TextGradient:function(e){let{children:t,startColor:n,endColor:l}=e;return a.createElement("span",{style:{backgroundImage:`linear-gradient(45deg, ${n} -20%, ${l} 100%)`,backgroundClip:"text",WebkitTextFillColor:"transparent"}},t)},BarChart:function(e){const[t,n]=(0,a.useState)(void 0);return(0,a.useEffect)((async()=>{const t=await fetch(e.chartDataUrl),a=await t.text(),l=N.ZP.parse(a);n(l)}),[null==e?void 0:e.chartDataUrl]),a.createElement("div",null,e.title?a.createElement(d.Z,{css:{mb:"1em",mt:"1em",textAlign:"center"}},a.createElement(u.Z,{span:12},e.title)):null,a.createElement(d.Z,{css:{mb:"1em",mt:"1em"}},a.createElement(u.Z,{span:12},void 0===t?"Loading Chart Data":function(e){let t=[];return Object.keys(e.barOptions).forEach((function(n,l){t.push(a.createElement(g.$,{key:l,dataKey:n,fill:e.barOptions[n].fillColor}))})),a.createElement("div",{style:{paddingBottom:"56.25%",position:"relative",height:0}},a.createElement("div",{style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}},a.createElement(h.h,null,a.createElement(f.v,{data:e.data,margin:{top:5,right:30,left:20,bottom:5}},a.createElement(v.q,null),a.createElement(p.K,{dataKey:e.axis.x.dataKey,interval:0,textAnchor:"middle"}),a.createElement(E.B,null,a.createElement(b._,{angle:-90,value:e.axis.y.label,position:"insideLeft",style:{textAnchor:"middle",fill:"var(--ifm-font-color-base)"}})),a.createElement(Z.u,{contentStyle:{backgroundColor:"var(--ifm-background-color)"},labelStyle:{color:"var(--ifm-font-color-base)"}}),a.createElement(L.D,null),t))))}(t))))}}}}]);