(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{292:function(e,a){e.exports=function(e){var a=typeof e;return!!e&&("object"==a||"function"==a)}},295:function(e,a,l){"use strict";var t=l(36),c=l(289),r=l(1),n=l.n(r),m=l(0),o=l.n(m),s=l(287),d=l.n(s),i=l(288),u={tag:i.q,noGutters:o.a.bool,className:o.a.string,cssModule:o.a.object,form:o.a.bool},E=function(e){var a=e.className,l=e.cssModule,r=e.noGutters,m=e.tag,o=e.form,s=Object(c.a)(e,["className","cssModule","noGutters","tag","form"]),u=Object(i.m)(d()(a,r?"no-gutters":null,o?"form-row":"row"),l);return n.a.createElement(m,Object(t.a)({},s,{className:u}))};E.propTypes=u,E.defaultProps={tag:"div"},a.a=E},296:function(e,a,l){"use strict";var t=l(36),c=l(289),r=l(292),n=l.n(r),m=l(1),o=l.n(m),s=l(0),d=l.n(s),i=l(287),u=l.n(i),E=l(288),h=d.a.oneOfType([d.a.number,d.a.string]),b=d.a.oneOfType([d.a.bool,d.a.number,d.a.string,d.a.shape({size:d.a.oneOfType([d.a.bool,d.a.number,d.a.string]),push:Object(E.h)(h,'Please use the prop "order"'),pull:Object(E.h)(h,'Please use the prop "order"'),order:h,offset:h})]),f={tag:E.q,xs:b,sm:b,md:b,lg:b,xl:b,className:d.a.string,cssModule:d.a.object,widths:d.a.array},N={tag:"div",widths:["xs","sm","md","lg","xl"]},x=function(e,a,l){return!0===l||""===l?e?"col":"col-"+a:"auto"===l?e?"col-auto":"col-"+a+"-auto":e?"col-"+l:"col-"+a+"-"+l},p=function(e){var a=e.className,l=e.cssModule,r=e.widths,m=e.tag,s=Object(c.a)(e,["className","cssModule","widths","tag"]),d=[];r.forEach(function(a,t){var c=e[a];if(delete s[a],c||""===c){var r=!t;if(n()(c)){var m,o=r?"-":"-"+a+"-",i=x(r,a,c.size);d.push(Object(E.m)(u()(((m={})[i]=c.size||""===c.size,m["order"+o+c.order]=c.order||0===c.order,m["offset"+o+c.offset]=c.offset||0===c.offset,m)),l))}else{var h=x(r,a,c);d.push(h)}}}),d.length||d.push("col");var i=Object(E.m)(u()(a,d),l);return o.a.createElement(m,Object(t.a)({},s,{className:i}))};p.propTypes=f,p.defaultProps=N,a.a=p},298:function(e,a,l){"use strict";var t=l(36),c=l(289),r=l(1),n=l.n(r),m=l(0),o=l.n(m),s=l(287),d=l.n(s),i=l(288),u={tag:i.q,inverse:o.a.bool,color:o.a.string,block:Object(i.h)(o.a.bool,'Please use the props "body"'),body:o.a.bool,outline:o.a.bool,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},E=function(e){var a=e.className,l=e.cssModule,r=e.color,m=e.block,o=e.body,s=e.inverse,u=e.outline,E=e.tag,h=e.innerRef,b=Object(c.a)(e,["className","cssModule","color","block","body","inverse","outline","tag","innerRef"]),f=Object(i.m)(d()(a,"card",!!s&&"text-white",!(!m&&!o)&&"card-body",!!r&&(u?"border":"bg")+"-"+r),l);return n.a.createElement(E,Object(t.a)({},b,{className:f,ref:h}))};E.propTypes=u,E.defaultProps={tag:"div"},a.a=E},299:function(e,a,l){"use strict";var t=l(36),c=l(289),r=l(1),n=l.n(r),m=l(0),o=l.n(m),s=l(287),d=l.n(s),i=l(288),u={tag:i.q,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},E=function(e){var a=e.className,l=e.cssModule,r=e.innerRef,m=e.tag,o=Object(c.a)(e,["className","cssModule","innerRef","tag"]),s=Object(i.m)(d()(a,"card-body"),l);return n.a.createElement(m,Object(t.a)({},o,{className:s,ref:r}))};E.propTypes=u,E.defaultProps={tag:"div"},a.a=E},300:function(e,a,l){"use strict";var t=l(36),c=l(289),r=l(1),n=l.n(r),m=l(0),o=l.n(m),s=l(287),d=l.n(s),i=l(288),u={tag:i.q,className:o.a.string,cssModule:o.a.object},E=function(e){var a=e.className,l=e.cssModule,r=e.tag,m=Object(c.a)(e,["className","cssModule","tag"]),o=Object(i.m)(d()(a,"card-header"),l);return n.a.createElement(r,Object(t.a)({},m,{className:o}))};E.propTypes=u,E.defaultProps={tag:"div"},a.a=E},487:function(e,a,l){"use strict";var t=l(36),c=l(289),r=l(1),n=l.n(r),m=l(0),o=l.n(m),s=l(287),d=l.n(s),i=l(288),u={className:o.a.string,cssModule:o.a.object,size:o.a.string,bordered:o.a.bool,borderless:o.a.bool,striped:o.a.bool,inverse:Object(i.h)(o.a.bool,'Please use the prop "dark"'),dark:o.a.bool,hover:o.a.bool,responsive:o.a.oneOfType([o.a.bool,o.a.string]),tag:i.q,responsiveTag:i.q,innerRef:o.a.oneOfType([o.a.func,o.a.string,o.a.object])},E=function(e){var a=e.className,l=e.cssModule,r=e.size,m=e.bordered,o=e.borderless,s=e.striped,u=e.inverse,E=e.dark,h=e.hover,b=e.responsive,f=e.tag,N=e.responsiveTag,x=e.innerRef,p=Object(c.a)(e,["className","cssModule","size","bordered","borderless","striped","inverse","dark","hover","responsive","tag","responsiveTag","innerRef"]),k=Object(i.m)(d()(a,"table",!!r&&"table-"+r,!!m&&"table-bordered",!!o&&"table-borderless",!!s&&"table-striped",!(!E&&!u)&&"table-dark",!!h&&"table-hover"),l),v=n.a.createElement(f,Object(t.a)({},p,{ref:x,className:k}));if(b){var g=!0===b?"table-responsive":"table-responsive-"+b;return n.a.createElement(N,{className:g},v)}return v};E.propTypes=u,E.defaultProps={tag:"table",responsiveTag:"div"},a.a=E},509:function(e,a,l){"use strict";l.r(a);var t=l(95),c=l(96),r=l(98),n=l(97),m=l(99),o=l(1),s=l.n(o),d=l(295),i=l(296),u=l(298),E=l(300),h=l(299),b=l(487),f=l(318),N=function(e){function a(){return Object(t.a)(this,a),Object(r.a)(this,Object(n.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"animated fadeIn"},s.a.createElement(d.a,null,s.a.createElement(i.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Switch default"),s.a.createElement(h.a,null,s.a.createElement(f.l,{className:"mx-1",color:"primary",checked:!0}),s.a.createElement(f.l,{className:"mx-1",color:"secondary",checked:!0}),s.a.createElement(f.l,{className:"mx-1",color:"success",checked:!0}),s.a.createElement(f.l,{className:"mx-1",color:"warning",checked:!0}),s.a.createElement(f.l,{className:"mx-1",color:"info",checked:!0}),s.a.createElement(f.l,{className:"mx-1",color:"danger",checked:!0}),s.a.createElement(f.l,{className:"mx-1",color:"light",checked:!0}),s.a.createElement(f.l,{className:"mx-1",color:"dark",checked:!0}),s.a.createElement(f.l,{className:"mx-1",color:"primary",disabled:!0})))),s.a.createElement(i.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Switch pills"),s.a.createElement(h.a,null,s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"primary",checked:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"secondary",checked:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"success",checked:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"warning",checked:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"info",checked:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"danger",checked:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"light",checked:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"dark",checked:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"primary",disabled:!0})))),s.a.createElement(i.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"3d Switch"," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(h.a,null,s.a.createElement(f.l,{className:"mx-1",variant:"3d",color:"primary",defaultChecked:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"3d",color:"secondary",defaultChecked:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"3d",color:"success",defaultChecked:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"3d",color:"warning",defaultChecked:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"3d",color:"info",defaultChecked:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"3d",color:"danger",defaultChecked:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"3d",color:"light",defaultChecked:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"3d",color:"dark",defaultChecked:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"3d",color:"primary"})))),s.a.createElement(i.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"3d Switch ",s.a.createElement("small",null,s.a.createElement("code",null,"disabled"))," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(h.a,null,s.a.createElement(f.l,{className:"mx-1",variant:"3d",color:"primary",checked:!0,disabled:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"3d",color:"secondary",checked:!0,disabled:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"3d",color:"success",checked:!0,disabled:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"3d",color:"warning",checked:!0,disabled:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"3d",color:"info",checked:!0,disabled:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"3d",color:"danger",checked:!0,disabled:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"3d",color:"light",checked:!0,disabled:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"3d",color:"dark",checked:!0,disabled:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"3d",color:"primary",disabled:!0})))),s.a.createElement(i.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"3d Switch ",s.a.createElement("small",null,s.a.createElement("code",null,'outline="alt"'))," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(h.a,null,s.a.createElement(f.l,{className:"mx-1",variant:"3d",color:"primary",checked:!0,outline:"alt"}),s.a.createElement(f.l,{className:"mx-1",variant:"3d",color:"secondary",checked:!0,outline:"alt"}),s.a.createElement(f.l,{className:"mx-1",variant:"3d",color:"success",checked:!0,outline:"alt"}),s.a.createElement(f.l,{className:"mx-1",variant:"3d",color:"warning",checked:!0,outline:"alt"}),s.a.createElement(f.l,{className:"mx-1",variant:"3d",color:"info",checked:!0,outline:"alt"}),s.a.createElement(f.l,{className:"mx-1",variant:"3d",color:"danger",checked:!0,outline:"alt"}),s.a.createElement(f.l,{className:"mx-1",variant:"3d",color:"light",checked:!0,outline:"alt"}),s.a.createElement(f.l,{className:"mx-1",variant:"3d",color:"dark",checked:!0,outline:"alt"}),s.a.createElement(f.l,{className:"mx-1",variant:"3d",color:"primary",outline:"alt",disabled:!0})))),s.a.createElement(i.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"3d Switch ",s.a.createElement("small",null,s.a.createElement("code",null,"label"))," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(h.a,null,s.a.createElement(f.l,{className:"mx-1",variant:"3d",color:"primary",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.l,{className:"mx-1",variant:"3d",color:"secondary",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.l,{className:"mx-1",variant:"3d",color:"success",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.l,{className:"mx-1",variant:"3d",color:"warning",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.l,{className:"mx-1",variant:"3d",color:"info",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.l,{className:"mx-1",variant:"3d",color:"danger",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.l,{className:"mx-1",variant:"3d",color:"light",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.l,{className:"mx-1",variant:"3d",color:"dark",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.l,{className:"mx-1",variant:"3d",color:"primary",label:!0,dataOn:"\u2713",dataOff:"\u2715"})))),s.a.createElement(i.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"3d Switch ",s.a.createElement("small",null,s.a.createElement("code",null,'outline="alt" label'))," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(h.a,null,s.a.createElement(f.l,{className:"mx-1",variant:"3d",outline:"alt",color:"primary",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.l,{className:"mx-1",variant:"3d",outline:"alt",color:"secondary",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.l,{className:"mx-1",variant:"3d",outline:"alt",color:"success",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.l,{className:"mx-1",variant:"3d",outline:"alt",color:"warning",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.l,{className:"mx-1",variant:"3d",outline:"alt",color:"info",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.l,{className:"mx-1",variant:"3d",outline:"alt",color:"danger",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.l,{className:"mx-1",variant:"3d",outline:"alt",color:"light",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.l,{className:"mx-1",variant:"3d",outline:"alt",color:"dark",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.l,{className:"mx-1",variant:"3d",outline:"alt",color:"primary",label:!0,dataOn:"\u2713",dataOff:"\u2715"})))),s.a.createElement(i.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"3d Switch ",s.a.createElement("small",null,s.a.createElement("code",null,'outline="alt" label'))," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(h.a,null,s.a.createElement(f.l,{className:"mx-1",variant:"3d",outline:"alt",color:"primary",defaultChecked:!0,label:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"3d",outline:"alt",color:"secondary",defaultChecked:!0,label:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"3d",outline:"alt",color:"success",defaultChecked:!0,label:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"3d",outline:"alt",color:"warning",defaultChecked:!0,label:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"3d",outline:"alt",color:"info",defaultChecked:!0,label:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"3d",outline:"alt",color:"danger",defaultChecked:!0,label:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"3d",outline:"alt",color:"light",defaultChecked:!0,label:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"3d",outline:"alt",color:"dark",defaultChecked:!0,label:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"3d",outline:"alt",color:"primary",label:!0})))),s.a.createElement(i.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Switch outline"," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(h.a,null,s.a.createElement(f.l,{className:"mx-1",color:"primary",outline:!0,checked:!0}),s.a.createElement(f.l,{className:"mx-1",color:"secondary",outline:!0,checked:!0}),s.a.createElement(f.l,{className:"mx-1",color:"success",outline:!0,checked:!0}),s.a.createElement(f.l,{className:"mx-1",color:"warning",outline:!0,checked:!0}),s.a.createElement(f.l,{className:"mx-1",color:"info",outline:!0,checked:!0}),s.a.createElement(f.l,{className:"mx-1",color:"danger",outline:!0,checked:!0}),s.a.createElement(f.l,{className:"mx-1",color:"light",outline:!0,checked:!0}),s.a.createElement(f.l,{className:"mx-1",color:"dark",outline:!0,checked:!0}),s.a.createElement(f.l,{className:"mx-1",color:"primary",outline:!0,disabled:!0})))),s.a.createElement(i.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Switch outline pills"," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(h.a,null,s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"primary",outline:!0,checked:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"secondary",outline:!0,checked:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"success",outline:!0,checked:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"warning",outline:!0,checked:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"info",outline:!0,checked:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"danger",outline:!0,checked:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"light",outline:!0,checked:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"dark",outline:!0,checked:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"primary",outline:!0,disabled:!0})))),s.a.createElement(i.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Switch outline alternative"," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(h.a,null,s.a.createElement(f.l,{className:"mx-1",color:"primary",outline:"alt",checked:!0}),s.a.createElement(f.l,{className:"mx-1",color:"secondary",outline:"alt",checked:!0}),s.a.createElement(f.l,{className:"mx-1",color:"success",outline:"alt",checked:!0}),s.a.createElement(f.l,{className:"mx-1",color:"warning",outline:"alt",checked:!0}),s.a.createElement(f.l,{className:"mx-1",color:"info",outline:"alt",checked:!0}),s.a.createElement(f.l,{className:"mx-1",color:"danger",outline:"alt",checked:!0}),s.a.createElement(f.l,{className:"mx-1",color:"light",outline:"alt",checked:!0}),s.a.createElement(f.l,{className:"mx-1",color:"dark",outline:"alt",checked:!0}),s.a.createElement(f.l,{className:"mx-1",color:"primary",outline:"alt",disabled:!0})))),s.a.createElement(i.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Switch outline alternative - pills"," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(h.a,null,s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"primary",outline:"alt",checked:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"secondary",outline:"alt",checked:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"success",outline:"alt",checked:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"warning",outline:"alt",checked:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"info",outline:"alt",checked:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"danger",outline:"alt",checked:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"light",outline:"alt",checked:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"dark",outline:"alt",checked:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"primary",outline:"alt",disabled:!0})))),s.a.createElement(i.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Switch with text"," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(h.a,null,s.a.createElement(f.l,{className:"mx-1",color:"primary",label:!0,checked:!0}),s.a.createElement(f.l,{className:"mx-1",color:"secondary",label:!0,checked:!0}),s.a.createElement(f.l,{className:"mx-1",color:"success",label:!0,checked:!0}),s.a.createElement(f.l,{className:"mx-1",color:"warning",label:!0,checked:!0}),s.a.createElement(f.l,{className:"mx-1",color:"info",label:!0,checked:!0}),s.a.createElement(f.l,{className:"mx-1",color:"danger",label:!0,checked:!0}),s.a.createElement(f.l,{className:"mx-1",color:"light",label:!0,checked:!0}),s.a.createElement(f.l,{className:"mx-1",color:"dark",label:!0,checked:!0}),s.a.createElement(f.l,{className:"mx-1",color:"primary",label:!0,disabled:!0})))),s.a.createElement(i.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Switch with text pills"," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(h.a,null,s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"primary",label:!0,checked:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"secondary",label:!0,checked:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"success",label:!0,checked:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"warning",label:!0,checked:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"info",label:!0,checked:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"danger",label:!0,checked:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"light",label:!0,checked:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"dark",label:!0,checked:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"primary",label:!0,disabled:!0})))),s.a.createElement(i.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Switch with text outline"," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(h.a,null,s.a.createElement(f.l,{className:"mx-1",color:"primary",outline:!0,label:!0,checked:!0}),s.a.createElement(f.l,{className:"mx-1",color:"secondary",outline:!0,label:!0,checked:!0}),s.a.createElement(f.l,{className:"mx-1",color:"success",outline:!0,label:!0,checked:!0}),s.a.createElement(f.l,{className:"mx-1",color:"warning",outline:!0,label:!0,checked:!0}),s.a.createElement(f.l,{className:"mx-1",color:"info",outline:!0,label:!0,checked:!0}),s.a.createElement(f.l,{className:"mx-1",color:"danger",outline:!0,label:!0,checked:!0}),s.a.createElement(f.l,{className:"mx-1",color:"light",outline:!0,label:!0,checked:!0}),s.a.createElement(f.l,{className:"mx-1",color:"dark",outline:!0,label:!0,checked:!0}),s.a.createElement(f.l,{className:"mx-1",color:"primary",outline:!0,label:!0,disabled:!0})))),s.a.createElement(i.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Switch with text outline pills"," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(h.a,null,s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"primary",outline:!0,label:!0,checked:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"secondary",outline:!0,label:!0,checked:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"success",outline:!0,label:!0,checked:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"warning",outline:!0,label:!0,checked:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"info",outline:!0,label:!0,checked:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"danger",outline:!0,label:!0,checked:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"light",outline:!0,label:!0,checked:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"dark",outline:!0,label:!0,checked:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"primary",outline:!0,label:!0,disabled:!0})))),s.a.createElement(i.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Switch with text outline alternative pills"," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(h.a,null,s.a.createElement(f.l,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0}),s.a.createElement(f.l,{className:"mx-1",color:"secondary",outline:"alt",label:!0,checked:!0}),s.a.createElement(f.l,{className:"mx-1",color:"success",outline:"alt",label:!0,checked:!0}),s.a.createElement(f.l,{className:"mx-1",color:"warning",outline:"alt",label:!0,checked:!0}),s.a.createElement(f.l,{className:"mx-1",color:"info",outline:"alt",label:!0,checked:!0}),s.a.createElement(f.l,{className:"mx-1",color:"danger",outline:"alt",label:!0,checked:!0}),s.a.createElement(f.l,{className:"mx-1",color:"light",outline:"alt",label:!0,checked:!0}),s.a.createElement(f.l,{className:"mx-1",color:"dark",outline:"alt",label:!0,checked:!0}),s.a.createElement(f.l,{className:"mx-1",color:"primary",outline:"alt",label:!0,disabled:!0})))),s.a.createElement(i.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Switch with text outline alternative pills"," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(h.a,null,s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"primary",outline:"alt",label:!0,checked:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"secondary",outline:"alt",label:!0,checked:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"success",outline:"alt",label:!0,checked:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"warning",outline:"alt",label:!0,checked:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"info",outline:"alt",label:!0,checked:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"danger",outline:"alt",label:!0,checked:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"light",outline:"alt",label:!0,checked:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"dark",outline:"alt",label:!0,checked:!0}),s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"primary",outline:"alt",label:!0,disabled:!0})))),s.a.createElement(i.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Switch with text outline alternative"," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(h.a,null,s.a.createElement(f.l,{className:"mx-1",color:"primary",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.l,{className:"mx-1",color:"secondary",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.l,{className:"mx-1",color:"success",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.l,{className:"mx-1",color:"warning",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.l,{className:"mx-1",color:"info",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.l,{className:"mx-1",color:"danger",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.l,{className:"mx-1",color:"light",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.l,{className:"mx-1",color:"dark",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.l,{className:"mx-1",color:"primary",outline:!0,disabled:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"})))),s.a.createElement(i.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Switch with text outline alternative pills"," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(h.a,null,s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"primary",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"secondary",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"success",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"warning",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"info",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"danger",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"light",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"dark",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"primary",outline:!0,disabled:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"})))),s.a.createElement(i.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Switch with text outline alternative"," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(h.a,null,s.a.createElement(f.l,{className:"mx-1",color:"primary",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.l,{className:"mx-1",color:"secondary",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.l,{className:"mx-1",color:"success",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.l,{className:"mx-1",color:"warning",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.l,{className:"mx-1",color:"info",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.l,{className:"mx-1",color:"danger",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.l,{className:"mx-1",color:"light",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.l,{className:"mx-1",color:"dark",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.l,{className:"mx-1",color:"primary",outline:"alt",disabled:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"})))),s.a.createElement(i.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Switch with text outline alternative pills"," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(h.a,null,s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"primary",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"secondary",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"success",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"warning",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"info",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"danger",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"light",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"dark",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.l,{className:"mx-1",variant:"pill",color:"primary",outline:"alt",disabled:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"})))),s.a.createElement(i.a,{xs:"12"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Sizes"),s.a.createElement(h.a,{className:"p-0"},s.a.createElement(b.a,{hover:!0,striped:!0,className:"table-align-middle mb-0"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Size"),s.a.createElement("th",null,"Example"),s.a.createElement("th",null,"Props"))),s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null,"Large"),s.a.createElement("td",null,s.a.createElement(f.l,{className:"mx-1",variant:"3d",color:"primary",checked:!0,size:"lg"})),s.a.createElement("td",null,"Add ",s.a.createElement("code",null,"size=","lg"))),s.a.createElement("tr",null,s.a.createElement("td",null,"Normal"),s.a.createElement("td",null,s.a.createElement(f.l,{className:"mx-1",variant:"3d",color:"primary",checked:!0})),s.a.createElement("td",null,"-")),s.a.createElement("tr",null,s.a.createElement("td",null,"Small"),s.a.createElement("td",null,s.a.createElement(f.l,{className:"mx-1",variant:"3d",color:"primary",checked:!0,size:"sm"})),s.a.createElement("td",null,"Add ",s.a.createElement("code",null,"size=","sm"))))))))))}}]),a}(o.Component);a.default=N}}]);
//# sourceMappingURL=20.40b0687b.chunk.js.map