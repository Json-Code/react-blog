(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1128:function(e,t,n){},1143:function(e,t,n){"use strict";n.r(t);n(289);var r=n(212),o=(n(284),n(15)),a=(n(40),n(1128),n(0)),i=n.n(a),c=n(3),l=n.n(c),s=n(22),u=n(203);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},y=function(e){return a.createElement(u.a,null,function(t){var n,r,o=t.getPrefixCls,i=e.prefixCls,c=e.className,u=e.color,y=void 0===u?"":u,d=e.children,b=e.pending,h=e.dot,v=m(e,["prefixCls","className","color","children","pending","dot"]),g=o("timeline",i),O=l()((f(n={},"".concat(g,"-item"),!0),f(n,"".concat(g,"-item-pending"),b),n),c),j=l()((f(r={},"".concat(g,"-item-head"),!0),f(r,"".concat(g,"-item-head-custom"),h),f(r,"".concat(g,"-item-head-").concat(y),!0),r));return a.createElement("li",p({},Object(s.a)(v,["position"]),{className:O}),a.createElement("div",{className:"".concat(g,"-item-tail")}),a.createElement("div",{className:j,style:{borderColor:/blue|red|green|gray/.test(y)?void 0:y}},h),a.createElement("div",{className:"".concat(g,"-item-content")},d))})};y.defaultProps={color:"blue",pending:!1,position:""};var d=y;function b(e){return(b="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function v(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t){return!t||"object"!==b(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var P=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},x=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=j(this,w(t).apply(this,arguments))).renderTimeline=function(t){var n,r=t.getPrefixCls,i=e.props,c=i.prefixCls,s=i.pending,u=void 0===s?null:s,p=i.pendingDot,f=i.children,m=i.className,y=i.reverse,b=i.mode,O=P(i,["prefixCls","pending","pendingDot","children","className","reverse","mode"]),j=r("timeline",c),w="boolean"===typeof u?null:u,E=l()(j,(g(n={},"".concat(j,"-pending"),!!u),g(n,"".concat(j,"-reverse"),!!y),g(n,"".concat(j,"-").concat(b),!!b),n),m),x=u?a.createElement(d,{pending:!!u,dot:p||a.createElement(o.a,{type:"loading"})},w):null,S=y?[x].concat(v(a.Children.toArray(f).reverse())):[].concat(v(a.Children.toArray(f)),[x]),k=function(e,t){return"alternate"===b?"right"===e.props.position?"".concat(j,"-item-right"):"left"===e.props.position?"".concat(j,"-item-left"):"".concat(j,t%2===0?"-item-left":"-item-right"):"left"===b?"".concat(j,"-item-left"):"right"===b?"".concat(j,"-item-right"):"right"===e.props.position?"".concat(j,"-item-right"):""},C=S.filter(function(e){return!!e}),A=a.Children.count(C),N="".concat(j,"-item-last"),_=a.Children.map(C,function(e,t){var n=t===A-2?N:"",r=t===A-1?N:"";return a.cloneElement(e,{className:l()([e.props.className,!y&&u?n:r,k(e,t)])})});return a.createElement("ul",h({},O,{className:E}),_)},e}var n,r,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,a["Component"]),n=t,(r=[{key:"render",value:function(){return a.createElement(u.a,null,this.renderTimeline)}}])&&O(n.prototype,r),i&&O(n,i),t}();x.Item=d,x.defaultProps={reverse:!1,mode:""};var S=x,k=n(111),C=n.n(k),A=n(204),N=n(80),_=n(81),L=n(83),T=n(82),I=n(84),D=n(205),J=n(1132),R=function(e){function t(e){var n;return Object(N.a)(this,t),(n=Object(L.a)(this,Object(T.a)(t).call(this,e))).state={title:2020,data:[]},n}return Object(I.a)(t,e),Object(_.a)(t,[{key:"getList",value:function(){var e=this;this.props.match.params.id?this.setState({title:this.props.history.location.state.name},function(){e.getTagsArticleList({name:e.state.title})}):this.getArticleList()}},{key:"componentDidMount",value:function(){this.getList()}},{key:"componentWillReceiveProps",value:function(e){e.match.params.id!==this.props.match.params.id&&this.getList()}},{key:"getArticleList",value:function(){var e=Object(A.a)(C.a.mark(function e(){var t,n;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.get("/article/list/all");case 2:t=e.sent,n=t.data,1e3===t.code&&this.setState({data:n});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getTagsArticleList",value:function(){var e=Object(A.a)(C.a.mark(function e(t){var n,r;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.get("/article/list/tags",t);case 2:n=e.sent,r=n.data,1e3===n.code&&this.setState({data:r});case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.data.map(function(e,t){return i.a.createElement(S.Item,{key:t},i.a.createElement(J.a,{to:"/web/detail/".concat(e.id)},i.a.createElement("span",{className:"mr20"},e.createdAt.slice(0,10)),i.a.createElement("span",null,e.title)))});return i.a.createElement(r.a,{bordered:!1},i.a.createElement(S,null,i.a.createElement(S.Item,{dot:i.a.createElement(o.a,{type:"clock-circle-o"}),color:"red",style:{lineHeight:"20px"}},i.a.createElement("span",{style:{fontSize:"20px"}},this.state.title)),e))}}]),t}(a.Component);t.default=R}}]);
//# sourceMappingURL=21.06aebffb.chunk.js.map