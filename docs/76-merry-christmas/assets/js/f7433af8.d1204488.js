"use strict";(self.webpackChunkpcsx_2_net=self.webpackChunkpcsx_2_net||[]).push([[8149],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,y=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(y,s(s({ref:t},p),{},{components:n})):r.createElement(y,s({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82522:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={authors:["jake stine"],date:new Date("2009-06-02T00:00:00.000Z"),description:"One of the less obvious things that has plagued PCSX2's compatibility over the years is its event handling system",draft:!1,tags:["devblog"],title:"Events Plenty"},s=void 0,i={permalink:"/blog/2009/events-plenty",editUrl:"https://github.com/PCSX2/pcsx2-net-www/tree/master/blog/2009/events-plenty/index.mdx",source:"@site/blog/2009/events-plenty/index.mdx",title:"Events Plenty",description:"One of the less obvious things that has plagued PCSX2's compatibility over the years is its event handling system",date:"2009-06-02T00:00:00.000Z",formattedDate:"June 2, 2009",tags:[{label:"devblog",permalink:"/blog/tags/devblog"}],readingTime:3.37,hasTruncateMarker:!0,authors:[{name:"Jake Stine",key:"jake stine"}],frontMatter:{authors:["jake stine"],date:"2009-06-02T00:00:00.000Z",description:"One of the less obvious things that has plagued PCSX2's compatibility over the years is its event handling system",draft:!1,tags:["devblog"],title:"Events Plenty"},prevItem:{title:"Recompilers All Dems Buzzwords",permalink:"/blog/2009/recompilers-all-dems-buzzwords"},nextItem:{title:"PCSX2 Logo Design Contest",permalink:"/blog/2009/pcsx2-logo-design-contest"}},l={authorsImageUrls:[void 0]},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"One of the less obvious things that has plagued Pcsx2's compatibility\nover the years is its event handling system. The system in place as of\n0.9.6 is adequate for interpreter-based emulation but is not\nwell-equipped to handle the methods that a recompiler uses to manage cpu\ncycle updates. This is something we aim to fix in the coming weeks."))}u.isMDXComponent=!0}}]);