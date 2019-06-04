(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{376:function(e,t,a){!function(e){"use strict";function t(e){var t=this,a={ABOVE:"above",BELOW:"below",CHARTJS_TOOLTIP:"chartjs-tooltip",NO_TRANSFORM:"no-transform",TOOLTIP_BODY:"tooltip-body",TOOLTIP_BODY_ITEM:"tooltip-body-item",TOOLTIP_BODY_ITEM_COLOR:"tooltip-body-item-color",TOOLTIP_BODY_ITEM_LABEL:"tooltip-body-item-label",TOOLTIP_BODY_ITEM_VALUE:"tooltip-body-item-value",TOOLTIP_HEADER:"tooltip-header",TOOLTIP_HEADER_ITEM:"tooltip-header-item"},s={DIV:"div",SPAN:"span",TOOLTIP:(this._chart.canvas.id||function(){var e=function(){return(65536*(1+Math.random())|0).toString(16)},a="_canvas-"+(e()+e());return t._chart.canvas.id=a,a}())+"-tooltip"},r=document.getElementById(s.TOOLTIP);if(r||((r=document.createElement("div")).id=s.TOOLTIP,r.className=a.CHARTJS_TOOLTIP,this._chart.canvas.parentNode.appendChild(r)),0!==e.opacity){if(r.classList.remove(a.ABOVE,a.BELOW,a.NO_TRANSFORM),e.yAlign?r.classList.add(e.yAlign):r.classList.add(a.NO_TRANSFORM),e.body){var i=e.title||[],n=document.createElement(s.DIV);n.className=a.TOOLTIP_HEADER,i.forEach(function(e){var t=document.createElement(s.DIV);t.className=a.TOOLTIP_HEADER_ITEM,t.innerHTML=e,n.appendChild(t)});var l=document.createElement(s.DIV);l.className=a.TOOLTIP_BODY;var o=e.body.map(function(e){return e.lines});o.forEach(function(t,r){var i=document.createElement(s.DIV);i.className=a.TOOLTIP_BODY_ITEM;var n=e.labelColors[r],o=document.createElement(s.SPAN);if(o.className=a.TOOLTIP_BODY_ITEM_COLOR,o.style.backgroundColor=n.backgroundColor,i.appendChild(o),t[0].split(":").length>1){var c=document.createElement(s.SPAN);c.className=a.TOOLTIP_BODY_ITEM_LABEL,c.innerHTML=t[0].split(": ")[0],i.appendChild(c);var d=document.createElement(s.SPAN);d.className=a.TOOLTIP_BODY_ITEM_VALUE,d.innerHTML=t[0].split(": ").pop(),i.appendChild(d)}else{var h=document.createElement(s.SPAN);h.className=a.TOOLTIP_BODY_ITEM_VALUE,h.innerHTML=t[0],i.appendChild(h)}l.appendChild(i)}),r.innerHTML="",r.appendChild(n),r.appendChild(l)}var c=this._chart.canvas.getBoundingClientRect(),d=this._chart.canvas.offsetTop,h=this._chart.canvas.offsetLeft,m=h+e.caretX,p=d+e.caretY,u=e.width/2;m+u>c.width?m-=u:m<u&&(m+=u),r.style.opacity=1,r.style.left=m+"px",r.style.top=p+"px"}else r.style.opacity=0}var a=t;e.CustomTooltips=t,e.customTooltips=a,Object.defineProperty(e,"__esModule",{value:!0})}(t)},470:function(e,t,a){"use strict";var s=a(36),r=a(289),i=a(1),n=a.n(i),l=a(0),o=a.n(l),c=a(287),d=a.n(c),h=a(288),m={tag:h.q,"aria-label":o.a.string,className:o.a.string,cssModule:o.a.object,role:o.a.string,size:o.a.string,vertical:o.a.bool},p=function(e){var t=e.className,a=e.cssModule,i=e.size,l=e.vertical,o=e.tag,c=Object(r.a)(e,["className","cssModule","size","vertical","tag"]),m=Object(h.m)(d()(t,!!i&&"btn-group-"+i,l?"btn-group-vertical":"btn-group"),a);return n.a.createElement(o,Object(s.a)({},c,{className:m}))};p.propTypes=m,p.defaultProps={tag:"div",role:"group"},t.a=p},525:function(e,t,a){"use strict";function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),r.forEach(function(t){s(e,t,a[t])})}return e}a.r(t);for(var i=a(95),n=a(96),l=a(98),o=a(97),c=a(99),d=a(1),h=a.n(d),m=a(295),p=a(296),u=a(298),b=a(299),v=a(470),E=a(376),g=a(345),f=Object(g.getStyle)("--success"),O=Object(g.getStyle)("--info"),y=Object(g.getStyle)("--warning"),T=Object(g.getStyle)("--danger"),N=[],x=0;x<200;x++)N.push("");var C={tooltips:{enabled:!1,custom:E.CustomTooltips,intersect:!0,mode:"index",position:"nearest",callbacks:{labelColor:function(e,t){return{backgroundColor:t.data.datasets[e.datasetIndex].borderColor}}}},maintainAspectRatio:!1,legend:{display:!0},scales:{xAxes:[{display:!1,gridLines:{drawOnChartArea:!0}}],yAxes:[{display:!0,ticks:{beginAtZero:!0}}]},elements:{point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3},line:{tension:0}},animation:{duration:0}},_={labels:N,datasets:[{label:"Power",fill:!1,backgroundColor:O,borderColor:O,pointHoverBackgroundColor:"#fff",borderWidth:2,data:[]},{label:"Cadence",fill:!1,backgroundColor:f,borderColor:f,pointHoverBackgroundColor:"#fff",borderWidth:2,data:[]},{label:"Speed",fill:!1,backgroundColor:y,borderColor:y,pointHoverBackgroundColor:"#fff",borderWidth:2,data:[]},{label:"Heartrate",fill:!1,backgroundColor:T,borderColor:T,pointHoverBackgroundColor:"#fff",borderWidth:2,data:[]}]},A=[];for(x=0;x<50;x++)A.push("");var L={labels:A,datasets:[{backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)",data:[]}]},w={tooltips:{enabled:!1},maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{display:!1}],yAxes:[{display:!1,ticks:{beginAtZero:!0,max:450}}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:0}},animation:{duration:0}},I={labels:A,datasets:[{backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)",data:[]}]},k={tooltips:{enabled:!1},maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{display:!1}],yAxes:[{display:!1,ticks:{min:50,max:150}}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:0}},animation:{duration:0}},P={labels:A,datasets:[{backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)",data:[]}]},j={tooltips:{enabled:!1},maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{display:!1}],yAxes:[{display:!1,ticks:{beginAtZero:!0,max:160}}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:0}},animation:{duration:0}},D={labels:A,datasets:[{backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)",data:[]}]},R={tooltips:{enabled:!1},maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{display:!1}],yAxes:[{display:!1,ticks:{min:100,max:200}}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:0}},animation:{duration:0}},M=a(346),S=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(o.a)(t).call(this,e))).data=a.props.data,a.history=a.props.history,a.state=a.props.state,a.manageHistory(a.state,a.history),a}return Object(c.a)(t,e),Object(n.a)(t,[{key:"manageHistory",value:function(e,t){e.datasets[0].data=t.power,e.datasets[1].data=t.cadence,e.datasets[2].data=t.speed,e.datasets[3].data=t.heartrate}},{key:"componentDidUpdate",value:function(){if(this.data!==this.props.data){this.data=this.props.data;for(var e=this.state.datasets[0],t=this.state.datasets[1],a=this.state.datasets[2],s=this.state.datasets[3],i=this.state.labels,n=[],l=[],o=[],c=[],d=1;d<this.state.labels.length;d++){var h=e.data[d],m=t.data[d],p=a.data[d],u=s.data[d];void 0!==h?(n.push(h),l.push(m),o.push(p),c.push(u)):(n.unshift(h),l.unshift(m),o.unshift(p),c.unshift(u))}i.shift(),i.push(""),n.push(this.data.power),l.push(this.data.cadence),o.push(this.data.speed),c.push(this.data.heartrate);var b=r({},e),v=r({},t),E=r({},a),g=r({},s);b.data=n,v.data=l,E.data=o,g.data=c;var f=r({},this.state,{datasets:[b,v,E,g]});this.setState(f)}}},{key:"render",value:function(){return h.a.createElement(M.a,{data:this.state,options:this.props.opts})}}]),t}(d.Component),B=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(o.a)(t).call(this,e))).state=a.props.state,a.data=a.props.data,a.value=a.props.value,a.history=a.props.history,a.manageHistory(a.state,a.history),a}return Object(c.a)(t,e),Object(n.a)(t,[{key:"manageHistory",value:function(e,t){e.datasets[0].data=t[this.value]}},{key:"componentDidUpdate",value:function(){if(this.data!==this.props.data){this.data=this.props.data;for(var e=this.state.datasets[0],t=this.state.labels,a=[],s=1;s<this.state.labels.length;s++){var i=e.data[s];void 0!==i?a.push(i):a.unshift(i)}t.shift(),t.push("");var n=this.data[this.value];a.push(n);var l=r({},e);l.data=a;var o=r({},this.state,{datasets:[l]});this.setState(o)}}},{key:"render",value:function(){return h.a.createElement(M.a,{data:this.state,options:this.props.opts})}}]),t}(d.Component),H=a(103);function W(e){return e.showExtra?h.a.createElement(m.a,null,h.a.createElement(p.a,{xs:"12",sm:"6",lg:"3"},h.a.createElement(u.a,{className:"text-white bg-primary"},h.a.createElement(b.a,{className:"pb-2"},h.a.createElement("div",null,"Time"),h.a.createElement("div",{className:"text-value text-center"},e.time)))),h.a.createElement(p.a,{xs:"12",sm:"6",lg:"3"},h.a.createElement(u.a,{className:"text-white bg-dark"},h.a.createElement(b.a,{className:"pb-2"},h.a.createElement("div",null,"Gear"),h.a.createElement("div",{className:"text-value text-center"},e.gear)))),h.a.createElement(p.a,{xs:"12",sm:"6",lg:"3"},h.a.createElement(u.a,{className:"text-dark bg-secondary"},h.a.createElement(b.a,{className:"pb-2"},h.a.createElement("div",null,"Distance"),h.a.createElement("div",{className:"text-value text-center"},e.distance))))):null}var Y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(o.a)(t).call(this,e)))._isMounted=!1,a.loading=function(){return h.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},a.state={data:"",history:"",showExtra:!0},H.a.getHistory(function(e){return a.history(e)}),H.a.requestData(),a}return Object(c.a)(t,e),Object(n.a)(t,[{key:"history",value:function(e){var t=["heartrate","cadence","power","speed"],a={heartrate:[],cadence:[],power:[],speed:[]},s={heartrate:[],cadence:[],power:[],speed:[]},i=e.reverse(),n=i.slice(0,200),l=i.slice(0,50);n.reverse(),l.reverse();for(var o=0;o<n.length&&o<200;o++)for(var c=0;c<t.length;c++)a[t[c]].push(JSON.parse(n[o])[t[c]]),o<50&&s[t[c]].push(JSON.parse(l[o])[t[c]]);var d=r({},this.state,{history:{chart:a,miniChart:s}});this.setState(d)}},{key:"updateData",value:function(e){this.setState({data:e}),this._isMounted&&setTimeout(function(){H.a.requestData()},300)}},{key:"componentDidMount",value:function(){var e=this;this._isMounted=!0,H.a.getHistory(function(t){return e.history(t)}),H.a.getData(function(t){e.updateData(t)})}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){return""===this.state.history?null:h.a.createElement("div",{className:"animated fadeIn"},h.a.createElement(m.a,null,h.a.createElement(p.a,{xs:"12",sm:"6",lg:"3"},h.a.createElement(u.a,{className:"text-white bg-info"},h.a.createElement(b.a,{className:"pb-0"},h.a.createElement(v.a,{id:"card1",className:"float-right"},h.a.createElement("i",{className:"icon-settings"})),h.a.createElement("div",{className:"text-value"},this.state.data.power),h.a.createElement("div",null,"Power")),h.a.createElement("div",{className:"chart-wrapper",style:{height:"70px"}},h.a.createElement(B,{state:L,opts:w,value:"power",data:this.state.data,history:this.state.history.miniChart})))),h.a.createElement(p.a,{xs:"12",sm:"6",lg:"3"},h.a.createElement(u.a,{className:"text-white bg-success"},h.a.createElement(b.a,{className:"pb-0"},h.a.createElement(v.a,{id:"card2",className:"float-right"},h.a.createElement("i",{className:"icon-location-pin"})),h.a.createElement("div",{className:"text-value"},this.state.data.cadence),h.a.createElement("div",null,"Cadence")),h.a.createElement("div",{className:"chart-wrapper",style:{height:"70px"}},h.a.createElement(B,{state:I,opts:k,value:"cadence",data:this.state.data,history:this.state.history.miniChart})))),h.a.createElement(p.a,{xs:"12",sm:"6",lg:"3"},h.a.createElement(u.a,{className:"text-white bg-warning"},h.a.createElement(b.a,{className:"pb-0"},h.a.createElement(v.a,{id:"card3",className:"float-right"},h.a.createElement("i",{className:"icon-settings"})),h.a.createElement("div",{className:"text-value"},this.state.data.speed),h.a.createElement("div",null,"Speed")),h.a.createElement("div",{className:"chart-wrapper",style:{height:"70px"}},h.a.createElement(B,{state:P,opts:j,value:"speed",data:this.state.data,history:this.state.history.miniChart})))),h.a.createElement(p.a,{xs:"12",sm:"6",lg:"3"},h.a.createElement(u.a,{className:"text-white bg-danger"},h.a.createElement(b.a,{className:"pb-0"},h.a.createElement(v.a,{id:"card4",className:"float-right"},h.a.createElement("i",{className:"icon-settings"})),h.a.createElement("div",{className:"text-value"},this.state.data.heartrate),h.a.createElement("div",null,"Heartrate")),h.a.createElement("div",{className:"chart-wrapper",style:{height:"70px"}},h.a.createElement(B,{state:D,opts:R,value:"heartrate",data:this.state.data,history:this.state.history.miniChart}))))),h.a.createElement(m.a,null,h.a.createElement(p.a,null,h.a.createElement(u.a,null,h.a.createElement(b.a,null,h.a.createElement("div",{className:"chart-wrapper",style:{height:"340px",marginTop:"0px"}},h.a.createElement(S,{state:_,opts:C,data:this.state.data,history:this.state.history.chart})))))),h.a.createElement(W,{showExtra:this.state.showExtra,gear:this.state.data.gear,distance:this.state.data.distance,time:this.state.data.time}))}}]),t}(d.Component);t.default=Y}}]);
//# sourceMappingURL=39.81d0974e.chunk.js.map