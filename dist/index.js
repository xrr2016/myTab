!function(t){function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var e={};n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=49)}([function(t,n,e){t.exports=!e(7)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n){var e=t.exports={version:"2.5.1"};"number"==typeof __e&&(__e=e)},function(t,n,e){var i=e(1),r=e(2),o=e(20),a=e(22),s=function(t,n,e){var c,u,l,d=t&s.F,f=t&s.G,h=t&s.S,p=t&s.P,b=t&s.B,y=t&s.W,m=f?r:r[n]||(r[n]={}),v=m.prototype,x=f?i:h?i[n]:(i[n]||{}).prototype;f&&(e=n);for(c in e)(u=!d&&x&&void 0!==x[c])&&c in m||(l=u?x[c]:e[c],m[c]=f&&"function"!=typeof x[c]?e[c]:b&&u?o(l,i):y&&x[c]==l?function(t){var n=function(n,e,i){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,i)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(l):p&&"function"==typeof l?o(Function.call,l):l,p&&((m.virtual||(m.virtual={}))[c]=l,t&s.R&&v&&!v[c]&&a(v,c,l)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,n,e){var i=e(5),r=e(23),o=e(24),a=Object.defineProperty;n.f=e(0)?Object.defineProperty:function(t,n,e){if(i(t),n=o(n,!0),i(e),r)try{return a(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var i=e(6);t.exports=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){var i=e(6),r=e(1).document,o=i(r)&&i(r.createElement);t.exports=function(t){return o?r.createElement(t):{}}},function(t,n,e){var i=e(27),r=e(15);t.exports=Object.keys||function(t){return i(t,r)}},function(t,n,e){var i=e(11),r=e(12);t.exports=function(t){return i(r(t))}},function(t,n,e){var i=e(29);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==i(t)?t.split(""):Object(t)}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n){var e=Math.ceil,i=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?i:e)(t)}},function(t,n,e){var i=e(33)("keys"),r=e(34);t.exports=function(t){return i[t]||(i[t]=r(t))}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,e){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0});var r=e(17),o=i(r),a=e(38),s=i(a),c=e(44),u=i(c),l=e(45),d=i(l),f=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,u.default)(this,t);var e=(0,s.default)(t.opts);if(e=(0,o.default)(e,n),!e.selector)throw new Error("需要一个放置Tab的容器。");this.selector=e.selector,this.currentIndex=e.currentIndex,this.defaultIndex=e.defaultIndex,this.theme=e.theme,this.fixedWidth=e.fixedWidth,this.color=e.color,this.fontSize=e.fontSize,this.tabHeight=e.tabHeight,this.timingFunc=e.timingFunc,this.width=e.width,this.tabs=e.tabs,this.triggerEvent=e.triggerEvent,this.loop=e.loop,this.container=document.querySelector(this.selector),this.insertStyle(),this.init()}return(0,d.default)(t,[{key:"init",value:function(){var t=this;if(this.container.classList.add("my-tab"),"card"===this.theme&&this.container.classList.add("card"),this.tabList=this.generateTabs(),this.tabContent=this.container.querySelector(".my-tab-content"),!this.tabContent)throw new Error("需要添加内容。");this.tabContent.style.width=100*this.tabs.length+"%",this.container.insertBefore(this.tabList,this.tabContent),this.tabWidth=this.tabList.firstChild.getBoundingClientRect().width,this.indicator=this.generateIndicator(),this.tabList.appendChild(this.indicator),this.node2Array(this.tabList.children).forEach(function(n){n.addEventListener(t.triggerEvent,t.handleTabChange.bind(t),!1)}),this.node2Array(this.tabContent.children).forEach(function(n){n.addEventListener("touchstart",t.moveStart.bind(t),!1),n.addEventListener("touchend",t.moveEnd.bind(t),!1)}),this.indexContentItem()}},{key:"node2Array",value:function(t){return Array.prototype.slice.call(t)}},{key:"indexContentItem",value:function(){var t=this,n=this.node2Array(this.tabContent.children);this.tabs.forEach(function(e,i){i>=t.tabs.length||(n[i].dataset.index=i)})}},{key:"generateTabs",value:function(){var t=this,n=document.createElement("ul");return n.classList.add("my-tab-list"),this.tabs.forEach(function(e,i){var r=document.createElement("li");r.classList.add("tab"),r.innerHTML=e.title,r.dataset.index=i,r.style.color=t.color,r.style.fontSize=t.fontSize,r.style.height=t.tabHeight,i===t.defaultIndex&&r.classList.add("active"),t.fixedWidth&&r.classList.add("fixed-width"),e.disabled&&r.classList.add("disabled"),n.appendChild(r)}),"card"===this.theme&&(n.classList.add("card"),n.firstChild.classList.add("card")),this.fixedWidth&&n.classList.add("fixed-width"),n}},{key:"generateIndicator",value:function(){var t=Math.floor(this.tabList.firstChild.getBoundingClientRect().width),n=document.createElement("div");return n.classList.add("indicator"),"card"===this.theme&&n.classList.add("hide"),n.style.width=t+"px",n.style.background=this.color,n}},{key:"insertStyle",value:function(){var t=document.createElement("style");t.innerHTML=".my-tab * {\n      box-sizing: border-box;\n    }\n    .my-tab {\n      width: 90%;\n      max-width: 1000px;\n      margin: 10px auto;\n      overflow: hidden;\n      background: #ffffff;\n      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),\n        0 3px 1px -2px rgba(0, 0, 0, 0.2);\n    }\n    .my-tab.card {\n      border: 1px solid #e2e2e2;\n      box-shadow: 0 2px 5px 0 rgba(0,0,0,.1);\n    }\n    .my-tab .my-tab-list {\n      position: relative;\n      margin: 0;\n      padding: 0;\n      list-style: none;\n      border-bottom: 1px solid #e2e2e2;\n    }\n    .my-tab .my-tab-list.card {\n      background: #f2f2f2;\n    }\n    .my-tab .my-tab-list.fixed-width {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n    }\n    .my-tab .my-tab-list .indicator {\n      position: absolute;\n      left: 0;\n      bottom: -1px;\n      height: 2px;\n      background: blueviolet;\n      will-change: left, right, transform;\n      transition: all .3s ease-in-out;\n      transform: scaleX(1);\n    }\n    .my-tab .my-tab-list .indicator.hide {\n      opacity: 0;\n    }\n    .my-tab .my-tab-list .tab {\n      position: relative;\n      display: inline-block;\n      padding: 0 24px;\n      height: 40px;\n      line-height: 40px;\n      font-weight: 500;\n      text-align: center;\n      opacity: .6;\n      cursor: pointer;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      vertical-align: baseline;\n      border: 1px solid transparent;\n    }\n    @media  (max-width: 575px) {\n      .my-tab .my-tab-list .tab {\n        padding: 0 12px;\n        font-size: 12px;\n      }\n    }\n    .my-tab .my-tab-list .tab.active {\n      opacity: 1;\n    }\n    .my-tab .my-tab-list .tab.card {\n      border-left: 1px solid #e2e2e2;\n      border-right: 1px solid #e2e2e2;\n      background: #ffffff;\n    }\n    .my-tab .my-tab-list .tab.fixed-width {\n      flex: 1;\n    }\n    .my-tab .my-tab-list .tab.card::after {\n      position: absolute;\n      left: 0;\n      bottom: -2px;\n      content: '';\n      width: 100%;\n      height: 1px;\n      z-index: 100;\n      background: #ffffff;\n    }\n    .my-tab .my-tab-list .tab.disabled {\n      cursor: default;\n    }\n    .my-tab .my-tab-content {\n      position: relative;\n      display: flex;\n      justify-content: flex-start;\n      align-content: center;\n    }\n    \n    .my-tab .my-tab-content .item {\n      width: 100%;\n      max-width: 100%;\n      height: 100%;\n      padding: 12px 24px;\n      transform: translateX(0px);\n      transition: all .3s ease-in-out;\n    }\n    .my-tab .my-tab-content .item.img {\n      padding: 0;\n    }\n    .my-tab .my-tab-content .item img {\n      width: 100%;\n      display: block;\n    }\n    ",document.head.appendChild(t)}},{key:"handleTabChange",value:function(t){var n=t.target;if(!n.classList.contains("disabled")){var e=(this.node2Array(this.tabList.children),parseInt(n.dataset.index,10));this.currentIndex=e,this.changeTab(this.currentIndex,n)}}},{key:"moveStart",value:function(t){this.touchStart=0;var n=t.targetTouches;this.touchStart=n[0].pageX}},{key:"moveEnd",value:function(t){this.touchEnd=0;var n=t.changedTouches;this.touchEnd=n[0].pageX;var e=this.touchEnd-this.touchStart;Math.abs(e)>=50&&e>0?this.nextTab():this.prevTab()}},{key:"nextTab",value:function(){++this.currentIndex,this.currentIndex=Math.min(this.tabs.length-1,this.currentIndex),this.changeTab(this.currentIndex)}},{key:"prevTab",value:function(){--this.currentIndex,this.currentIndex=Math.max(0,this.currentIndex),this.changeTab(this.currentIndex)}},{key:"changeTab",value:function(t){var n=this.node2Array(this.tabList.children);"card"===this.theme&&(n.forEach(function(t){return t.classList.remove("card")}),n[t].classList.add("card")),n.forEach(function(t){return t.classList.remove("active")}),n[t].classList.add("active"),this.moveIndicator(t),this.changeContentItem(t)}},{key:"moveIndicator",value:function(t){var n=this;this.indicator.style.transform="scaleX(.7)",this.indicator.style.left=t*this.tabWidth+"px",setTimeout(function(){n.indicator.style.transform="scaleX(1)"},this.moveTime)}},{key:"changeContentItem",value:function(t){this.node2Array(this.tabContent.children).forEach(function(n){n.style.transform="translateX("+100*-t+"%)"})}}]),t}();n.default=f,f.opts={selector:"my-tab",currentIndex:0,defaultIndex:0,theme:"flat",fixedWidth:!1,color:"blueviolet",fontSize:14,width:600,tabHeight:40,timingFunc:"ease-in-out",tabs:[{title:"选项1",disabled:!1},{title:"选项2",disabled:!1},{title:"选项3",disabled:!1}],triggerEvent:"click",loop:!1,moveTime:300}},function(t,n,e){t.exports={default:e(18),__esModule:!0}},function(t,n,e){e(19),t.exports=e(2).Object.assign},function(t,n,e){var i=e(3);i(i.S+i.F,"Object",{assign:e(26)})},function(t,n,e){var i=e(21);t.exports=function(t,n,e){if(i(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,i){return t.call(n,e,i)};case 3:return function(e,i,r){return t.call(n,e,i,r)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var i=e(4),r=e(25);t.exports=e(0)?function(t,n,e){return i.f(t,n,r(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){t.exports=!e(0)&&!e(7)(function(){return 7!=Object.defineProperty(e(8)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){var i=e(6);t.exports=function(t,n){if(!i(t))return t;var e,r;if(n&&"function"==typeof(e=t.toString)&&!i(r=e.call(t)))return r;if("function"==typeof(e=t.valueOf)&&!i(r=e.call(t)))return r;if(!n&&"function"==typeof(e=t.toString)&&!i(r=e.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){"use strict";var i=e(9),r=e(35),o=e(36),a=e(37),s=e(11),c=Object.assign;t.exports=!c||e(7)(function(){var t={},n={},e=Symbol(),i="abcdefghijklmnopqrst";return t[e]=7,i.split("").forEach(function(t){n[t]=t}),7!=c({},t)[e]||Object.keys(c({},n)).join("")!=i})?function(t,n){for(var e=a(t),c=arguments.length,u=1,l=r.f,d=o.f;c>u;)for(var f,h=s(arguments[u++]),p=l?i(h).concat(l(h)):i(h),b=p.length,y=0;b>y;)d.call(h,f=p[y++])&&(e[f]=h[f]);return e}:c},function(t,n,e){var i=e(28),r=e(10),o=e(30)(!1),a=e(14)("IE_PROTO");t.exports=function(t,n){var e,s=r(t),c=0,u=[];for(e in s)e!=a&&i(s,e)&&u.push(e);for(;n.length>c;)i(s,e=n[c++])&&(~o(u,e)||u.push(e));return u}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var i=e(10),r=e(31),o=e(32);t.exports=function(t){return function(n,e,a){var s,c=i(n),u=r(c.length),l=o(a,u);if(t&&e!=e){for(;u>l;)if((s=c[l++])!=s)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===e)return t||l||0;return!t&&-1}}},function(t,n,e){var i=e(13),r=Math.min;t.exports=function(t){return t>0?r(i(t),9007199254740991):0}},function(t,n,e){var i=e(13),r=Math.max,o=Math.min;t.exports=function(t,n){return t=i(t),t<0?r(t+n,0):o(t,n)}},function(t,n,e){var i=e(1),r=i["__core-js_shared__"]||(i["__core-js_shared__"]={});t.exports=function(t){return r[t]||(r[t]={})}},function(t,n){var e=0,i=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+i).toString(36))}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,e){var i=e(12);t.exports=function(t){return Object(i(t))}},function(t,n,e){t.exports={default:e(39),__esModule:!0}},function(t,n,e){e(40);var i=e(2).Object;t.exports=function(t,n){return i.create(t,n)}},function(t,n,e){var i=e(3);i(i.S,"Object",{create:e(41)})},function(t,n,e){var i=e(5),r=e(42),o=e(15),a=e(14)("IE_PROTO"),s=function(){},c=function(){var t,n=e(8)("iframe"),i=o.length;for(n.style.display="none",e(43).appendChild(n),n.src="javascript:",t=n.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;i--;)delete c.prototype[o[i]];return c()};t.exports=Object.create||function(t,n){var e;return null!==t?(s.prototype=i(t),e=new s,s.prototype=null,e[a]=t):e=c(),void 0===n?e:r(e,n)}},function(t,n,e){var i=e(4),r=e(5),o=e(9);t.exports=e(0)?Object.defineProperties:function(t,n){r(t);for(var e,a=o(n),s=a.length,c=0;s>c;)i.f(t,e=a[c++],n[e]);return t}},function(t,n,e){var i=e(1).document;t.exports=i&&i.documentElement},function(t,n,e){"use strict";n.__esModule=!0,n.default=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}},function(t,n,e){"use strict";n.__esModule=!0;var i=e(46),r=function(t){return t&&t.__esModule?t:{default:t}}(i);n.default=function(){function t(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),(0,r.default)(t,i.key,i)}}return function(n,e,i){return e&&t(n.prototype,e),i&&t(n,i),n}}()},function(t,n,e){t.exports={default:e(47),__esModule:!0}},function(t,n,e){e(48);var i=e(2).Object;t.exports=function(t,n,e){return i.defineProperty(t,n,e)}},function(t,n,e){var i=e(3);i(i.S+i.F*!e(0),"Object",{defineProperty:e(4).f})},function(t,n,e){"use strict";var i=e(16),r=function(t){return t&&t.__esModule?t:{default:t}}(i);console.log("index");new r.default({selector:".my-tab-1"}),new r.default({selector:".my-tab-2",theme:"card",color:"#3498db"}),new r.default({selector:".my-tab-3",color:"#e74c3c",fixedWidth:!0,tabs:[{title:"选项1",disabled:!1},{title:"选项2",disabled:!1},{title:"选项3",disabled:!1},{title:"选项4",disabled:!1},{title:"选项5",disabled:!1}]}),new r.default({selector:".my-tab-4",color:"#00a497",tabs:[{title:"我",disabled:!1},{title:"火",disabled:!1},{title:"总",disabled:!1},{title:"冠",disabled:!1},{title:"军",disabled:!1}]})}]);