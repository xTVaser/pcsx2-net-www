"use strict";(self.webpackChunkpcsx_2_net=self.webpackChunkpcsx_2_net||[]).push([[7368],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},40552:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={authors:["jake stine"],date:new Date("2009-10-03T00:00:00.000Z"),description:"As of Sept 30th, we've re-enabled user comments at our SVN repository",draft:!1,tags:["devblog"],title:"Svn Comments Are Re Enabled"},i=void 0,s={permalink:"/blog/2009/svn-comments-are-re-enabled",editUrl:"https://github.com/PCSX2/pcsx2-net-www/tree/master/blog/2009/svn-comments-are-re-enabled/index.mdx",source:"@site/blog/2009/svn-comments-are-re-enabled/index.mdx",title:"Svn Comments Are Re Enabled",description:"As of Sept 30th, we've re-enabled user comments at our SVN repository",date:"2009-10-03T00:00:00.000Z",formattedDate:"October 3, 2009",tags:[{label:"devblog",permalink:"/blog/tags/devblog"}],readingTime:.565,hasTruncateMarker:!0,authors:[{name:"Jake Stine",key:"jake stine"}],frontMatter:{authors:["jake stine"],date:"2009-10-03T00:00:00.000Z",description:"As of Sept 30th, we've re-enabled user comments at our SVN repository",draft:!1,tags:["devblog"],title:"Svn Comments Are Re Enabled"},prevItem:{title:"Thread Synchronization",permalink:"/blog/2009/thread-synchronization"},nextItem:{title:"New Versioning Release Pattern",permalink:"/blog/2009/new-versioning-release-pattern"}},l={authorsImageUrls:[void 0]},p=[],c={toc:p};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"As of ",(0,o.kt)("strong",{parentName:"p"},"Sept 30th")," , we've re-enabled\nuser comments at our SVN repository PCSX2 @ Googlecode."),(0,o.kt)("p",null,"Comments have been re-enabled primarily so that we can get user feedback\nagain on plugins and the current ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"legacy gui")),' updates. The trunk of\nsvn (the new wx gui) is still too volatile for user comments to be of\nmuch use, so don\'t be surprised if we pretty well blow off "bug reports"\nrelating to it.'),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"(and yes, top priorities for implementation in the new gui are\nframelimiter, savestates, and the advanced cpu options -- along with bug\nfixes and memory leak fixes. No timeframe estimates: They'll all get\ndone when they get done!)")))}m.isMDXComponent=!0}}]);