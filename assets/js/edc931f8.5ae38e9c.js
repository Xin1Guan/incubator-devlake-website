"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[160],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=i,g=p["".concat(c,".").concat(f)]||p[f]||m[f]||r;return n?o.createElement(g,a(a({ref:t},u),{},{components:n})):o.createElement(g,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<r;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9074:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return m}});var o=n(7462),i=n(3366),r=(n(7294),n(3905)),a=["components"],s={sidebar_position:1,title:"How to Make Contribution?",linkTitle:"How to Make Contribution?",tags:[],categories:[],weight:1e4,description:"The steps and specs to contribute to DevLake.\n"},c=void 0,l={unversionedId:"index",id:"index",title:"How to Make Contribution?",description:"The steps and specs to contribute to DevLake.\n",source:"@site/community/index.md",sourceDirName:".",slug:"/",permalink:"/community/",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"How to Make Contribution?",linkTitle:"How to Make Contribution?",tags:[],categories:[],weight:1e4,description:"The steps and specs to contribute to DevLake.\n"},sidebar:"communitySidebar",next:{title:"How to Submit a Blog?",permalink:"/community/BlogSubmission"}},u={},m=[{value:"How Can I Contribute?",id:"how-can-i-contribute",level:2},{value:"Maintainer team @ Merico",id:"maintainer-team--merico",level:2},{value:"Style guides",id:"style-guides",level:2},{value:"Git Commit message",id:"git-commit-message",level:3},{value:"Commit tool",id:"commit-tool",level:4}],p={toc:m};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\ud83d\udc4d\ud83c\udf89 First off, thanks for taking the time to contribute! \ud83c\udf89\ud83d\udc4d"),(0,r.kt)("p",null,"The following is a set of guidelines for contributing to Lake. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.*"),(0,r.kt)("h2",{id:"how-can-i-contribute"},"How Can I Contribute?"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Reporting bugs by filling out the required issue template and labeling the new issue as 'bug'.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Suggesting enhancements."))),(0,r.kt)("p",null,"If you intend to change the public API, or make any non-trivial changes to the implementation, we recommend filing an issue. This lets us reach an agreement on your proposal before you put significant effort into it."),(0,r.kt)("p",null,"If you\u2019re only fixing a bug, it\u2019s fine to submit a pull request right away but we still recommend to file an issue detailing what you\u2019re fixing. This is helpful in case we don\u2019t accept that specific fix but want to keep track of the issue."),(0,r.kt)("h2",{id:"maintainer-team--merico"},"Maintainer team @ Merico"),(0,r.kt)("p",null,"Dev Lake is maintained by a group of engineers at Merico, led by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hezyin"},"@hezyin"),". We aim to achieve an SLA of 24 hrs for replying to issues."),(0,r.kt)("h2",{id:"style-guides"},"Style guides"),(0,r.kt)("h3",{id:"git-commit-message"},"Git Commit message"),(0,r.kt)("p",null,"We follow the ",(0,r.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/en/v1.0.0/#summary"},"conventional commits")," guidelines."),(0,r.kt)("h4",{id:"commit-tool"},"Commit tool"),(0,r.kt)("p",null,"We use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lintingzhen/commitizen-go"},"https://github.com/lintingzhen/commitizen-go")," to author our commits."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"make commit\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> lake@1.0.0 commit /home/code/merico-dev/lake\n> cz\n\ncz-cli@4.2.4, cz-conventional-changelog@3.3.0\n\n? Select the type of change that you're committing: (Use arrow keys)\n> feat:     A new feature\n  fix:      A bug fix\n  docs:     Documentation only changes\n  style:    Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)\n  refactor: A code change that neither fixes a bug nor adds a feature\n  perf:     A code change that improves performance\n  test:     Adding missing tests or correcting existing tests\n(Move up and down to reveal more choices)\n? What is the scope of this change (e.g. component or file name): (press enter to skip)\n? Write a short, imperative tense description of the change (max 93 chars):\n (23) add commit message tool\n? Provide a longer description of the change: (press enter to skip)\n\n? Are there any breaking changes? No\n? Does this change affect any open issues? No\n[chore/commit_message dc34f57] chore: add commit message tool\n 5 files changed, 585 insertions(+), 4 deletions(-)\n")),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("br",null))}f.isMDXComponent=!0}}]);