(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{292:function(e,a){e.exports=function(e){var a=typeof e;return!!e&&("object"==a||"function"==a)}},295:function(e,a,t){"use strict";var l=t(36),r=t(289),n=t(1),c=t.n(n),s=t(0),o=t.n(s),m=t(287),u=t.n(m),d=t(288),i={tag:d.q,noGutters:o.a.bool,className:o.a.string,cssModule:o.a.object,form:o.a.bool},E=function(e){var a=e.className,t=e.cssModule,n=e.noGutters,s=e.tag,o=e.form,m=Object(r.a)(e,["className","cssModule","noGutters","tag","form"]),i=Object(d.m)(u()(a,n?"no-gutters":null,o?"form-row":"row"),t);return c.a.createElement(s,Object(l.a)({},m,{className:i}))};E.propTypes=i,E.defaultProps={tag:"div"},a.a=E},296:function(e,a,t){"use strict";var l=t(36),r=t(289),n=t(292),c=t.n(n),s=t(1),o=t.n(s),m=t(0),u=t.n(m),d=t(287),i=t.n(d),E=t(288),b=u.a.oneOfType([u.a.number,u.a.string]),g=u.a.oneOfType([u.a.bool,u.a.number,u.a.string,u.a.shape({size:u.a.oneOfType([u.a.bool,u.a.number,u.a.string]),push:Object(E.h)(b,'Please use the prop "order"'),pull:Object(E.h)(b,'Please use the prop "order"'),order:b,offset:b})]),h={tag:E.q,xs:g,sm:g,md:g,lg:g,xl:g,className:u.a.string,cssModule:u.a.object,widths:u.a.array},N={tag:"div",widths:["xs","sm","md","lg","xl"]},f=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},p=function(e){var a=e.className,t=e.cssModule,n=e.widths,s=e.tag,m=Object(r.a)(e,["className","cssModule","widths","tag"]),u=[];n.forEach(function(a,l){var r=e[a];if(delete m[a],r||""===r){var n=!l;if(c()(r)){var s,o=n?"-":"-"+a+"-",d=f(n,a,r.size);u.push(Object(E.m)(i()(((s={})[d]=r.size||""===r.size,s["order"+o+r.order]=r.order||0===r.order,s["offset"+o+r.offset]=r.offset||0===r.offset,s)),t))}else{var b=f(n,a,r);u.push(b)}}}),u.length||u.push("col");var d=Object(E.m)(i()(a,u),t);return o.a.createElement(s,Object(l.a)({},m,{className:d}))};p.propTypes=h,p.defaultProps=N,a.a=p},521:function(e,a,t){"use strict";t.r(a);var l=t(95),r=t(96),n=t(98),c=t(97),s=t(99),o=t(1),m=t.n(o),u=t(101),d=t.n(u),i=t(287),E=t.n(i),b=t(296),g=t(295),h=t(345),N=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(n.a)(this,Object(c.a)(a).call(this,e))).state={bgColor:"rgb(255, 255, 255)"},t}return Object(s.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=d.a.findDOMNode(this).parentNode.firstChild,a=window.getComputedStyle(e).getPropertyValue("background-color");this.setState({bgColor:a||this.state.bgColor})}},{key:"render",value:function(){return m.a.createElement("table",{className:"w-100"},m.a.createElement("tbody",null,m.a.createElement("tr",null,m.a.createElement("td",{className:"text-muted"},"HEX:"),m.a.createElement("td",{className:"font-weight-bold"},Object(h.rgbToHex)(this.state.bgColor))),m.a.createElement("tr",null,m.a.createElement("td",{className:"text-muted"},"RGB:"),m.a.createElement("td",{className:"font-weight-bold"},this.state.bgColor))))}}]),a}(o.Component),f=function(e){function a(){return Object(l.a)(this,a),Object(n.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this.props,a=e.className,t=e.children,l=E()(a,"theme-color w-75 rounded mb-3");return m.a.createElement(b.a,{xl:"2",md:"4",sm:"6",xs:"12",className:"mb-4"},m.a.createElement("div",{className:l,style:{paddingTop:"75%"}}),t,m.a.createElement(N,null))}}]),a}(o.Component),p=function(e){function a(){return Object(l.a)(this,a),Object(n.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return m.a.createElement("div",{className:"animated fadeIn"},m.a.createElement("div",{className:"card"},m.a.createElement("div",{className:"card-header"},m.a.createElement("i",{className:"icon-drop"})," Theme colors"),m.a.createElement("div",{className:"card-body"},m.a.createElement(g.a,null,m.a.createElement(f,{className:"bg-primary"},m.a.createElement("h6",null,"Brand Primary Color")),m.a.createElement(f,{className:"bg-secondary"},m.a.createElement("h6",null,"Brand Secondary Color")),m.a.createElement(f,{className:"bg-success"},m.a.createElement("h6",null,"Brand Success Color")),m.a.createElement(f,{className:"bg-danger"},m.a.createElement("h6",null,"Brand Danger Color")),m.a.createElement(f,{className:"bg-warning"},m.a.createElement("h6",null,"Brand Warning Color")),m.a.createElement(f,{className:"bg-info"},m.a.createElement("h6",null,"Brand Info Color")),m.a.createElement(f,{className:"bg-light"},m.a.createElement("h6",null,"Brand Light Color")),m.a.createElement(f,{className:"bg-dark"},m.a.createElement("h6",null,"Brand Dark Color"))))),m.a.createElement("div",{className:"card"},m.a.createElement("div",{className:"card-header"},m.a.createElement("i",{className:"icon-drop"})," Grays"),m.a.createElement("div",{className:"card-body"},m.a.createElement(g.a,{className:"mb-3"},m.a.createElement(f,{className:"bg-gray-100"},m.a.createElement("h6",null,"Gray 100 Color")),m.a.createElement(f,{className:"bg-gray-200"},m.a.createElement("h6",null,"Gray 200 Color")),m.a.createElement(f,{className:"bg-gray-300"},m.a.createElement("h6",null,"Gray 300 Color")),m.a.createElement(f,{className:"bg-gray-400"},m.a.createElement("h6",null,"Gray 400 Color")),m.a.createElement(f,{className:"bg-gray-500"},m.a.createElement("h6",null,"Gray 500 Color")),m.a.createElement(f,{className:"bg-gray-600"},m.a.createElement("h6",null,"Gray 600 Color")),m.a.createElement(f,{className:"bg-gray-700"},m.a.createElement("h6",null,"Gray 700 Color")),m.a.createElement(f,{className:"bg-gray-800"},m.a.createElement("h6",null,"Gray 800 Color")),m.a.createElement(f,{className:"bg-gray-900"},m.a.createElement("h6",null,"Gray 900 Color"))))),m.a.createElement("div",{className:"card"},m.a.createElement("div",{className:"card-header"},m.a.createElement("i",{className:"icon-drop"})," Additional colors"),m.a.createElement("div",{className:"card-body"},m.a.createElement(g.a,null,m.a.createElement(f,{className:"bg-blue"},m.a.createElement("h6",null,"Blue Color")),m.a.createElement(f,{className:"bg-light-blue"},m.a.createElement("h6",null,"Light Blue Color")),m.a.createElement(f,{className:"bg-indigo"},m.a.createElement("h6",null,"Indigo Color")),m.a.createElement(f,{className:"bg-purple"},m.a.createElement("h6",null,"Purple Color")),m.a.createElement(f,{className:"bg-pink"},m.a.createElement("h6",null,"Pink Color")),m.a.createElement(f,{className:"bg-red"},m.a.createElement("h6",null,"Red Color")),m.a.createElement(f,{className:"bg-orange"},m.a.createElement("h6",null,"Orange Color")),m.a.createElement(f,{className:"bg-yellow"},m.a.createElement("h6",null,"Yellow Color")),m.a.createElement(f,{className:"bg-green"},m.a.createElement("h6",null,"Green Color")),m.a.createElement(f,{className:"bg-teal"},m.a.createElement("h6",null,"Teal Color")),m.a.createElement(f,{className:"bg-cyan"},m.a.createElement("h6",null,"Cyan Color"))))))}}]),a}(o.Component);a.default=p}}]);
//# sourceMappingURL=38.b9fc8d44.chunk.js.map