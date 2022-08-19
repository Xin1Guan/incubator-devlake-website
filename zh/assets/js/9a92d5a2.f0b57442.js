"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[890],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>m});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(i),m=n,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return i?r.createElement(h,a(a({ref:t},u),{},{components:i})):r.createElement(h,a({ref:t},u))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,a=new Array(o);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var l=2;l<o;l++)a[l]=i[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}p.displayName="MDXCreateElement"},75094:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=i(87462),n=(i(67294),i(3905));const o={title:"PR Size",description:"PR Size\n",sidebar_position:2},a=void 0,s={unversionedId:"Metrics/PRSize",id:"Metrics/PRSize",title:"PR Size",description:"PR Size\n",source:"@site/docs/Metrics/PRSize.md",sourceDirName:"Metrics",slug:"/Metrics/PRSize",permalink:"/zh/docs/Metrics/PRSize",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/Metrics/PRSize.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"PR Size",description:"PR Size\n",sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Pull Request Pass Rate",permalink:"/zh/docs/Metrics/MergeRate"},next:{title:"PR Pickup Time",permalink:"/zh/docs/Metrics/PickupTime"}},c={},l=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in?",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2},{value:"How to improve?",id:"how-to-improve",level:2}],u={toc:l};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,n.kt)("p",null,"The average code changes (in Lines of Code) of PRs in the selected time range."),(0,n.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,n.kt)("p",null,"Small PRs can reduce risks of introducing new bugs and increase code review quality, as problems may often be hidden in big chuncks of code and difficult to identify."),(0,n.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Engineering Throughput and Cycle Time"),(0,n.kt)("li",{parentName:"ul"},"Engineering Throughput and Cycle Time - Team View")),(0,n.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,n.kt)("p",null,"This metric is calculated by counting the total number of code changes (in LOC) divided by the total number of PRs in the selected time range."),(0,n.kt)("b",null,"Data Sources Required"),"This metric relies on PR/MRs collected from GitHub or GitLab.",(0,n.kt)("b",null,"Transformation Rules Required"),"N/A",(0,n.kt)("b",null,"SQL Queries"),(0,n.kt)("h2",{id:"how-to-improve"},"How to improve?"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Divide coding tasks into workable and manageable pieces;"),(0,n.kt)("li",{parentName:"ol"},"Encourage developers to submit small PRs and only keep related changes in the same PR.")))}d.isMDXComponent=!0}}]);