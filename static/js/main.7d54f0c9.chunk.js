(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n(30)},22:function(e,t,n){},23:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(14),o=n.n(s),c=(n(22),n(5)),i=n(6),l=n(8),u=n(7),h=n(9),m=n(1),S=n(2),b=n(10),d=n(11),v="redux",f=function(e){var t=e.onClick,n=e.className,a=void 0===n?"":n,s=e.children;return r.a.createElement("button",{onClick:t,className:a,type:"submit"},s)},p=function(e){var t=e.onClick,n=e.className,a=void 0===n?"":n,s=e.children;return r.a.createElement("button",{onClick:t,className:a,type:"button"},s)},y=(n(23),n(3)),E=n(4),O=n.n(E),j=n(15),T=n.n(j),g=function(e){var t=e.sortKey,n=e.onSort,a=e.children,s=e.activeSortKey,o=T()("button-inline",{"button-inline--active":t===s});return r.a.createElement(p,{onClick:function(){return n(t)},className:o}," ",a," ")};g.protoTypes={sortKey:O.a.string.isRequired,children:O.a.node,onSort:O.a.func.isRequired,activeSortKey:O.a.string.isRequired};var N=g,k=(n(27),{NONE:function(e){return e},TITLE:function(e){return Object(y.sortBy)(e,"title")},AUTHOR:function(e){return Object(y.sortBy)(e,"author")},COMMENTS:function(e){return Object(y.sortBy)(e,"num_comments").reverse()},POINTS:function(e){return Object(y.sortBy)(e,"points").reverse()}}),w=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={sortKey:"NONE",isSortReverse:!1},n.onSort=n.onSort.bind(Object(m.a)(Object(m.a)(n))),n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"onSort",value:function(e){var t=this.state.sortKey===e&&!this.state.isSortReverse;this.setState({sortKey:e,isSortReverse:t})}},{key:"render",value:function(){var e=this.props,t=e.list,n=e.onDismiss,a=this.state,s=a.sortKey,o=a.isSortReverse,c=k[s](t),i=o?c.reverse():c;return r.a.createElement("div",{className:"table"},r.a.createElement("div",{className:"table-header"},r.a.createElement("span",{style:{width:"40%"}},r.a.createElement(N,{sortKey:"TITLE",onSort:this.onSort,activeSortKey:s},"Title")),r.a.createElement("span",{style:{width:"30%"}},r.a.createElement(N,{sortKey:"AUTHOR",onSort:this.onSort,activeSortKey:s},"Author")),r.a.createElement("span",{style:{width:"10%"}},r.a.createElement(N,{sortKey:"COMMENTS",onSort:this.onSort,activeSortKey:s},"Comments")),r.a.createElement("span",{style:{width:"10%"}},r.a.createElement(N,{sortKey:"POINTS",onSort:this.onSort,activeSortKey:s},"Points")),r.a.createElement("span",{style:{width:"10%"}},"Archive")),i.map(function(e){return r.a.createElement("div",{key:e.objectID,className:"table-row"},r.a.createElement("span",{style:{width:"40%"}},r.a.createElement("a",{href:e.url},e.title)),r.a.createElement("span",{style:{width:"30%"}},e.author),r.a.createElement("span",{style:{width:"10%"}},e.num_comments),r.a.createElement("span",{style:{width:"10%"}},e.points),r.a.createElement("span",null,r.a.createElement(p,{onClick:function(){return n(e.objectID)},className:"button-inline"},"Dismiss")))}))}}]),t}(a.Component),K=function(e){var t=e.value,n=e.onChange,a=e.onSubmit,s=e.children;return r.a.createElement("form",{onSubmit:a},r.a.createElement("input",{type:"text",value:t,onChange:n}),r.a.createElement(f,{className:"button"},s))},C=n(16),D=(n(28),function(){return r.a.createElement("div",{className:"lds"},r.a.createElement("h4",null," Loading... "),r.a.createElement("div",{className:"lds-facebook"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))}),L=function(e){return function(t){var n=t.isLoading,a=Object(C.a)(t,["isLoading"]);return n?r.a.createElement(D,null):r.a.createElement(e,a)}},R=(n(29),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e)))._isMounted=!1,n.state={results:null,searchKey:"",searchTerm:v,isLoading:!1},n.needsToSearchTopstories=n.needsToSearchTopstories.bind(Object(m.a)(Object(m.a)(n))),n.setSearchTopStories=n.setSearchTopStories.bind(Object(m.a)(Object(m.a)(n))),n.fetchSearchTopstories=n.fetchSearchTopstories.bind(Object(m.a)(Object(m.a)(n))),n.onDismiss=n.onDismiss.bind(Object(m.a)(Object(m.a)(n))),n.onSearchSubmit=n.onSearchSubmit.bind(Object(m.a)(Object(m.a)(n))),n.onSearchChange=n.onSearchChange.bind(Object(m.a)(Object(m.a)(n))),n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"needsToSearchTopstories",value:function(e){return!this.state.results[e]}},{key:"setSearchTopStories",value:function(e){var t=e.hits,n=e.page;this.setState(function(e,t){return function(n){var a=n.searchKey,r=n.results,s=r&&r[a]?r[a].hits:[],o=[].concat(Object(d.a)(s),Object(d.a)(e));return{results:Object(b.a)({},r,Object(S.a)({},a,{hits:o,page:t})),isLoading:!1}}}(t,n))}},{key:"fetchSearchTopstories",value:function(e,t){var n=this;this.setState({isLoading:!0}),fetch("".concat("https://hn.algolia.com/api/v1").concat("/search","?").concat("query=").concat(e,"&").concat("page=").concat(t,"&").concat("hitsPerPage=").concat("100")).then(function(e){return e.json()}).then(function(e){return n.setSearchTopStories(e)})}},{key:"componentDidMount",value:function(){var e=this.state.searchTerm;this.setState({searchKey:e}),this.fetchSearchTopstories(e,0)}},{key:"onSearchSubmit",value:function(e){var t=this.state.searchTerm;this.setState({searchKey:t}),this.needsToSearchTopstories(t)&&this.fetchSearchTopstories(t,0),e.preventDefault()}},{key:"onSearchChange",value:function(e){this.setState({searchTerm:e.target.value})}},{key:"onDismiss",value:function(e){var t=this.state,n=t.searchKey,a=t.results,r=a[n],s=r.hits,o=r.page,c=s.filter(function(t){return t.objectID!==e});this.setState({results:Object(b.a)({},a,Object(S.a)({},n,{hits:c,page:o}))})}},{key:"render",value:function(){var e=this,t=this.state,n=t.searchTerm,a=t.results,s=t.searchKey,o=t.isLoading,c=a&&a[s]&&a[s].page||0,i=a&&a[s]&&a[s].hits||[],l=L(p);return r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"interactions"},r.a.createElement(K,{value:n,onChange:this.onSearchChange,onSubmit:this.onSearchSubmit},"Search")),r.a.createElement(w,{list:i,onDismiss:this.onDismiss}),r.a.createElement("div",{className:"interactions"},r.a.createElement(l,{isLoading:o,className:"button",onClick:function(){return e.fetchSearchTopstories(s,c+1)}},"More")))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.7d54f0c9.chunk.js.map