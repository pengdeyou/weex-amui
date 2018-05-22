// { "framework": "Vue"} 

!function(t){function e(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=124)}({0:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(6);Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r(a).default}})},1:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={search:"",reload:"","arrow-down":"","arrow-up":"","arrow-right":"","arrow-left":"",down:"",up:"",right:"",left:"","warning-circle":"","warning-circle-o":"","close-circle":"","close-circle-o":"","check-circle":"","check-circle-o":"",check:"","clock-circle":"","clock-circle-o":"",ellipsis:"",loading:""};e.default=r},10:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["am-nav-bar","am-nav-bar-"+t.mode]},[n("div",{staticClass:["am-nav-bar-left"]},[t._t("left",t._l(t.left,function(e,r){return n("div",{key:r,class:["am-nav-bar-btn","am-nav-bar-"+t.mode+"-btn"],on:{click:function(n){t.handleClick(e)}}},["icon"===e.is?n("am-icon",{class:["am-nav-bar-btn-icon","am-nav-bar-"+t.mode+"-btn-icon"],attrs:{type:e.type}}):"text"===e.is?n("text",{class:["am-nav-bar-btn-text","am-nav-bar-"+t.mode+"-btn-text"]},[t._v(t._s(e.text))]):t._e()],1)}))],2),t._t("title",[n("text",{class:["am-nav-bar-title","am-nav-bar-"+t.mode+"-title"],on:{click:function(e){t.handleClick({key:"title"})}}},[t._v(t._s(t.title))])]),n("div",{staticClass:["am-nav-bar-right"]},[t._t("right",t._l(t.right,function(e,r){return n("div",{key:r,class:["am-nav-bar-btn","am-nav-bar-"+t.mode+"-btn"],on:{click:function(n){t.handleClick(e)}}},["icon"===e.is?n("am-icon",{class:["am-nav-bar-btn-icon","am-nav-bar-"+t.mode+"-btn-icon"],attrs:{type:e.type}}):"text"===e.is?n("text",{class:["am-nav-bar-btn-text","am-nav-bar-"+t.mode+"-btn-text"]},[t._v(t._s(e.text))]):t._e()],1)}))],2)],2)},staticRenderFns:[]}},124:function(t,e,n){var r,a,i=[];i.push(n(125)),r=n(126);var o=n(127);a=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(a=r=r.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,a._scopeId="data-v-05f991a9",a.style=a.style||{},i.forEach(function(t){for(var e in t)a.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(a._scopeId,i),t.exports=r,t.exports.el="true",new Vue(t.exports)},125:function(t,e){t.exports={demo:{backgroundColor:"#f5f5f9"}}},126:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(14),i=r(a),o=n(2),c=r(o),s=weex.requireModule("modal");e.default={components:{AmNavBar:c.default,AmWhiteSpace:i.default},methods:{handleClick:function(t){s.toast({message:t})}}}},127:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["demo"]},[n("am-nav-bar",{attrs:{title:"am-nav-bar"}}),n("scroller",[n("am-white-space"),n("am-nav-bar",{attrs:{title:"标题",rightBtn:["search","ellipsis"]},on:{click:t.handleClick}}),n("am-white-space"),n("am-nav-bar",{attrs:{mode:"light",title:"标题",leftBtn:[{is:"text",text:"返回",key:"back"}],rightBtn:[{is:"text",text:"编辑",key:"edit"}]},on:{click:t.handleClick}})],1)],1)},staticRenderFns:[]}},14:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(15);Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r(a).default}})},15:function(t,e,n){var r,a,i=[];i.push(n(16)),r=n(17);var o=n(18);a=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(a=r=r.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,a._scopeId="data-v-ed673070",a.style=a.style||{},i.forEach(function(t){for(var e in t)a.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(a._scopeId,i),t.exports=r},16:function(t,e){t.exports={"am-white-space-xs":{height:"6"},"am-white-space-sm":{height:"12"},"am-white-space-md":{height:"18"},"am-white-space-lg":{height:"30"},"am-white-space-xl":{height:"42"}}},17:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"am-white-space",props:{size:{type:String,default:"md"}}}},18:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:["am-white-space-"+t.size]})},staticRenderFns:[]}},2:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(3);Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r(a).default}})},3:function(t,e,n){var r,a,i=[];i.push(n(4)),r=n(5);var o=n(10);a=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(a=r=r.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,a._scopeId="data-v-49b3ea8f",a.style=a.style||{},i.forEach(function(t){for(var e in t)a.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(a._scopeId,i),t.exports=r},4:function(t,e){t.exports={"am-nav-bar":{alignItems:"center",height:"90",backgroundColor:"#108ee9",flexDirection:"row"},"am-nav-bar-left":{flex:1,alignItems:"center",flexDirection:"row"},"am-nav-bar-title":{flex:1,alignItems:"center",flexDirection:"row",textAlign:"center",justifyContent:"center",fontSize:"36",whiteSpace:"nowrap",color:"#ffffff"},"am-nav-bar-right":{flex:1,alignItems:"center",flexDirection:"row",justifyContent:"flex-end"},"am-nav-bar-btn":{height:"90",minWidth:"90",paddingLeft:"23",paddingRight:"23",alignItems:"center",justifyContent:"center","backgroundColor:active":"#0e80d2"},"am-nav-bar-btn-icon":{color:"#ffffff"},"am-nav-bar-btn-text":{fontSize:"32",color:"#ffffff"},"am-nav-bar-light":{backgroundColor:"#ffffff",color:"#108ee9"},"am-nav-bar-light-title":{color:"#000000"},"am-nav-bar-light-btn":{"backgroundColor:active":"#dddddd"},"am-nav-bar-light-btn-icon":{color:"#000000"},"am-nav-bar-light-btn-text":{color:"#000000"}}},5:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),i=r(a),o=weex.requireModule("navigator");e.default={name:"am-nav-bar",props:{mode:{type:String,default:"dark"},title:{type:String,default:null},leftBtn:{type:Array,default:function(){return[{is:"icon",type:"left",onClick:function(){o.pop({},function(t){})}}]}},rightBtn:{type:Array,default:function(){return[]}}},components:{AmIcon:i.default},computed:{navBarClass:function(){return["am-nav-bar-"+this.mode]},titleClass:function(){return["am-nav-bar-"+this.mode+"-title"]},left:function(){return this.makeBtn(this.leftBtn)},right:function(){return this.makeBtn(this.rightBtn)}},methods:{makeBtn:function(t){return t.map(function(t){var e=t;return"string"==typeof t&&(e={is:"icon",type:t}),e})},handleClick:function(t){"function"==typeof t.onClick?t.onClick():this.$emit("click",t.key||t.type||t.text||t.src)}}}},6:function(t,e,n){var r,a,i=[];i.push(n(7)),r=n(8);var o=n(9);a=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(a=r=r.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,a._scopeId="data-v-cc094c2e",a.style=a.style||{},i.forEach(function(t){for(var e in t)a.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(a._scopeId,i),t.exports=r},7:function(t,e){t.exports={"am-icon-xxs":{fontSize:"30",lineHeight:"30"},"am-icon-xs":{fontSize:"36",lineHeight:"36"},"am-icon-sm":{fontSize:"42",lineHeight:"42"},"am-icon-md":{fontSize:"44",lineHeight:"44"},"am-icon-lg":{fontSize:"72",lineHeight:"72"}}},8:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(1),i=r(a),o=weex.requireModule("dom");e.default={name:"am-icon",props:{type:{type:String,default:null},size:{type:[String,Number],default:"md"},color:{type:String,default:null},fontFamily:{type:String,default:"AMUIIconFont"}},data:function(){return{Icon:i.default}},computed:{iconClass:function(){return isNaN(this.size)?["am-icon-"+this.size]:null},iconStyle:function(){var t={color:this.color,fontFamily:this.fontFamily};return isNaN(this.size)||(t.fontSize=this.size+"px",t.lineHeight=this.size+"px"),t}},beforeCreate:function(){o.addRule("fontFace",{fontFamily:"AMUIIconFont",src:"url('https://at.alicdn.com/t/font_666184_6i47o5l7pbiysyvi.ttf')"})}}},9:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.type?n("text",{staticClass:["am-icon"],class:t.iconClass,style:t.iconStyle},[t._v(t._s(t.Icon[t.type]||t.type))]):t._e()},staticRenderFns:[]}}});