(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{1127:function(t,e,a){},1140:function(t,e,a){"use strict";a.r(e);a(289);var n=a(212),i=(a(288),a(210)),r=(a(284),a(15)),s=a(111),c=a.n(s),l=a(204),o=a(80),u=a(81),h=a(83),d=a(82),m=a(84),p=a(0),g=a.n(p),v=a(1123),f=a.n(v),y=a(746),b=a.n(y),w=(a(1126),a(205)),k=(a(1127),new f.a.Renderer);f.a.setOptions({renderer:k,gfm:!0,pedantic:!1,sanitize:!1,tables:!0,breaks:!1,smartLists:!0,smartypants:!1,xhtml:!1,highlight:function(t){return b.a.highlightAuto(t).value}});var E=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(h.a)(this,Object(d.a)(e).call(this,t))).state={loading:!0,id:"",data:{title:""},html:""},a}return Object(m.a)(e,t),Object(u.a)(e,[{key:"componentWillReceiveProps",value:function(t){var e=t.match.params.id;e!==this.props.match.params.id&&this.getDetail(e)}},{key:"componentDidMount",value:function(){var t=this.props.match.params.id;this.getDetail(t)}},{key:"getDetail",value:function(){var t=Object(l.a)(c.a.mark(function t(e){var a,n,i,r;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.a.get("/article/detail",{id:e});case 2:a=t.sent,n=a.data,this.setState({data:n}),i=n.content,r=f()(i),this.setState({html:r,loading:!1});case 8:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state.data,e=g.a.createElement("div",{className:"content-extra"},g.a.createElement(r.a,{type:"calendar",style:{marginRight:8}}),t.createdAt,g.a.createElement(r.a,{type:"eye",style:{marginRight:8,marginLeft:8}}),t.readedCount," \u6b21\u9884\u89c8");return g.a.createElement("div",null,g.a.createElement(n.a,{title:t.title,extra:e},g.a.createElement(i.a,{className:"loading-contain",spinning:this.state.loading}),g.a.createElement("div",{dangerouslySetInnerHTML:{__html:f()(this.state.html)}})))}}]),e}(p.Component);e.default=E}}]);
//# sourceMappingURL=22.892831ad.chunk.js.map