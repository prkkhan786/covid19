(this.webpackJsonpcovidapp=this.webpackJsonpcovidapp||[]).push([[0],{180:function(e,t,a){"use strict";a.r(t);var r=a(0),l=a.n(r),o=a(57),c=a.n(o),n=(a(67),a(68),a(61)),s=a(28),i=a.n(s),d=a(58),m=a(3);a(70);function u(e){var t=e.coviddata,a=e.onsort,r=e.dataType,o=e.onclickhandler;return o||(o=function(){console.log("")}),l.a.createElement("div",null,l.a.createElement("table",{className:"table",style:{background:"",color:"#6c757d"}},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col",onClick:function(){return a("Country")}},r),l.a.createElement("th",{scope:"col",onClick:function(){return a("TotalConfirmed")}},"Confirmed"),l.a.createElement("th",{scope:"col",onClick:function(){return a("TotalConfirmed")}},"Active"),l.a.createElement("th",{scope:"col",onClick:function(){return a("TotalRecovered")}},"Recovered"),l.a.createElement("th",{scope:"col",onClick:function(){return a("TotalDeaths")}},"Deaths"),l.a.createElement("th",null))),l.a.createElement("tbody",null,t.map((function(e,t){return l.a.createElement("tr",{key:e.Country,onClick:function(){return o(e)},style:{cursor:"pointer"}},l.a.createElement("td",{className:"clickable"},"Countries"===r?e.Country:e.state),l.a.createElement("td",{className:"clickable"},"Countries"===r?e.TotalConfirmed:e.confirmed),l.a.createElement("td",{className:"clickable"},"Countries"===r?e.TotalConfirmed-(e.TotalRecovered+e.TotalDeaths):e.confirmed-(e.recovered+e.deaths)),l.a.createElement("td",{className:"clickable"},"Countries"===r?e.TotalRecovered:e.recovered),l.a.createElement("td",{className:"clickable"},"Countries"===r?e.TotalDeaths:e.deaths))})))))}var p=a(59),v=a.n(p);function h(e){var t=e.color,a=e.value,r=e.title,o="card-body text-".concat(t);return l.a.createElement("div",{className:"card text-white border-primary mb-3",style:{height:"5em",padding:"10"}},l.a.createElement("div",{className:o},l.a.createElement("p",{className:"card-text",style:{margin:"0"}},r," "),l.a.createElement("p",{className:"card-text",style:{margin:"0"}},a)))}function b(e){var t=e.data,a=e.place;return console.log("the data us ",t),l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("h1",null,a," "),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}},l.a.createElement(h,{color:"primary",title:"Confirmed",value:t.TotalConfirmed}),l.a.createElement(h,{color:"danger",title:"Deaths",value:t.TotalDeaths}),l.a.createElement(h,{color:"success",title:"Recovered",value:t.TotalRecovered}),l.a.createElement(h,{color:"primary",title:"Active",value:t.TotalConfirmed-t.TotalRecovered-t.TotalDeaths})))}var E=a(29),f=a.n(E),y=a(30);function g(){return l.a.createElement("div",{class:"spinner-border text-primary",style:{textAlign:"center",position:"relative",top:"50%",left:"50%"},role:"status"},l.a.createElement("span",{class:"sr-only"},"Loading..."))}var C=function(){var e=Object(r.useState)([]),t=Object(m.a)(e,2),a=t[0],o=t[1],c=Object(r.useState)({}),s=Object(m.a)(c,2),p=s[0],h=s[1],E=Object(r.useState)({}),C=Object(m.a)(E,2),T=C[0],k=C[1],N=Object(r.useState)([]),j=Object(m.a)(N,2),O=j[0],w=j[1],x=Object(r.useState)([]),D=Object(m.a)(x,2),S=D[0],A=D[1],R=Object(r.useState)(),I=Object(m.a)(R,2),B=I[0],W=I[1],z=Object(r.useState)([]),L=Object(m.a)(z,2),G=L[0],J=L[1],M=Object(r.useState)("None"),P=Object(m.a)(M,2),U=P[0],V=P[1],$=Object(r.useState)(!1),_=Object(m.a)($,2),q=_[0],F=_[1];Object(r.useEffect)((function(){Q()}),[]);var H={labels:["Confirmed","Active","Recovered","Deaths"],datasets:[{label:"Number",backgroundColor:"rgba(75,192,192,1)",borderColor:"rgba(0,0,0,1)",borderWidth:2,data:S}]},K={labels:["Confirmed","Active","Recovered","Deaths"],datasets:[{label:"Number",backgroundColor:"rgba(75,192,192,1)",borderColor:"rgba(0,0,0,1)",borderWidth:2,data:G}]},Q=function(){var e=Object(d.a)(i.a.mark((function e(){var t,a,r,l,c,n,s,d,u,p;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([f.a.get("https://api.covid19api.com/summary"),f.a.get("https://api.covidindiatracker.com/state_data.json")]);case 3:t=e.sent,a=Object(m.a)(t,2),r=a[0].data,l=a[1].data,console.log("The states data",l),c=r.Countries,n=r.Date,s=r.Global,d=c.find((function(e){return"India"===e.Country})),console.log("india data",d),u=[],p=d.TotalConfirmed-(d.TotalRecovered+d.TotalDeaths),u.push(d.TotalConfirmed,p,d.TotalRecovered,d.TotalDeaths),console.log("The pei data is ",T.TotalRecovered),o(c),h(s),k(d),W(n),w(l),A(u),F(!0),e.next=30;break;case 26:e.prev=26,e.t0=e.catch(0),Q(),console.log(e.t0);case 30:case"end":return e.stop()}}),e,null,[[0,26]])})));return function(){return e.apply(this,arguments)}}();function X(e){var t=Object(n.a)(a);t.path===e?t.order="asc"===t.order?"desc":"asc":(t.path=e,t.order="desc");var r=v.a.orderBy(t,t.path,t.order);o(r)}return l.a.createElement("div",{className:"container",style:{animationDelay:"1.5s"}},l.a.createElement("div",{style:{borderBottom:"1px solid black",marginBottom:"2%"}},l.a.createElement("h1",{className:"App display-1"},"COVID19"),l.a.createElement("p",{className:"App"}," Last Updated : ",B)),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-sm-5",style:{}},q?l.a.createElement("div",{style:{animationDelay:"1.5s"}},l.a.createElement(b,{data:p,place:"GLOBAL"}),l.a.createElement(b,{data:T,place:"INDIA"})):l.a.createElement(g,null)),l.a.createElement("div",{className:"col-12 col-sm-7"},l.a.createElement("div",{style:{width:"auto",height:"30em",overflow:"scroll"}},l.a.createElement(u,{coviddata:a,onsort:X,dataType:"Countries"})))),l.a.createElement("div",{className:"row",style:{marginTop:"5em"}},l.a.createElement("div",{className:"col-xl-12 col-12"},l.a.createElement("h1",{className:"App display-1",style:{fontSize:"6vw"}},"Indian States")),l.a.createElement("div",{className:"col-xl-7 col-12",style:{width:"auto",height:"30em",overflow:"scroll"}},l.a.createElement(u,{coviddata:O,onsort:X,dataType:"States",onclickhandler:function(e){console.log("onclick event triggered",e);var t=[];t.push(e.confirmed,e.active,e.recovered,e.deaths),V(e.state),J(t)}})),l.a.createElement("div",{className:"col-xl-5 col-12"},F?l.a.createElement(y.a,{data:H,options:{title:{display:!0,text:"India Cases ",fontSize:20},legend:{display:!0,position:"right"}}}):l.a.createElement(g,null),l.a.createElement(y.a,{data:K,options:{title:{display:!0,text:U,fontSize:20},legend:{display:!0,position:"right"}}}))),l.a.createElement("div",{className:"row",style:{margin:"5em"}},l.a.createElement("div",{className:"col-12 col-xl-12 App"},"Made with \u2764 by Parvez khan.")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},62:function(e,t,a){e.exports=a(180)},68:function(e,t,a){},70:function(e,t,a){}},[[62,1,2]]]);
//# sourceMappingURL=main.652aef6c.chunk.js.map