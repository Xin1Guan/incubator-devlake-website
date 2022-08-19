"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[2407],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>p});var r=i(67294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,o=function(e,t){if(null==e)return{};var i,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var i=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(i),p=o,h=d["".concat(s,".").concat(p)]||d[p]||m[p]||n;return i?r.createElement(h,a(a({ref:t},u),{},{components:i})):r.createElement(h,a({ref:t},u))}));function p(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=i.length,a=new Array(n);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<n;c++)a[c]=i[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}d.displayName="MDXCreateElement"},99083:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var r=i(87462),o=(i(67294),i(3905));const n={title:"PR Review Time",description:"PR Review Time\n",sidebar_position:2},a=void 0,l={unversionedId:"Metrics/ReviewTime",id:"Metrics/ReviewTime",title:"PR Review Time",description:"PR Review Time\n",source:"@site/docs/Metrics/ReviewTime.md",sourceDirName:"Metrics",slug:"/Metrics/ReviewTime",permalink:"/zh/docs/Metrics/ReviewTime",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/Metrics/ReviewTime.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"PR Review Time",description:"PR Review Time\n",sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Pull Request Review Rounds",permalink:"/zh/docs/Metrics/ReviewRounds"},next:{title:"PR Time To Merge",permalink:"/zh/docs/Metrics/TimeToMerge"}},s={},c=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in?",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2},{value:"How to improve?",id:"how-to-improve",level:2}],u={toc:c};function m(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,o.kt)("p",null,"The time it takes to complete a code review of a PR before it gets merged. "),(0,o.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,o.kt)("p",null,"Code review should be conducted almost in real-time and usually take less than two days. Abnormally long PR Review Time may indicate one or more of the following problems:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The PR size is too large that makes it difficult to review."),(0,o.kt)("li",{parentName:"ol"},"The team is too busy to review code.")),(0,o.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Engineering Throughput and Cycle Time"),(0,o.kt)("li",{parentName:"ul"},"Engineering Throughput and Cycle Time - Team View")),(0,o.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,o.kt)("p",null,"This metric is the time frame between when the first comment is added to a PR, to when the PR is merged."),(0,o.kt)("b",null,"Data Sources Required"),"This metric relies on PR/MRs collected from GitHub or GitLab.",(0,o.kt)("b",null,"Transformation Rules Required"),"N/A",(0,o.kt)("b",null,"SQL Queries"),(0,o.kt)("h2",{id:"how-to-improve"},"How to improve?"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Use DevLake's dashboards to monitor your delivery progress;"),(0,o.kt)("li",{parentName:"ol"},"Use automated tests for the initial work;"),(0,o.kt)("li",{parentName:"ol"},"Reduce PR size;"),(0,o.kt)("li",{parentName:"ol"},"Analyze the causes for long reviews.")))}m.isMDXComponent=!0}}]);