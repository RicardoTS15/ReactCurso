(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,n){e.exports=n(39)},28:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(19),r=n.n(c),i=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function l(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var s=n(10),u=n(11),m=n(2),d=n(3),h=n(5),p=n(4),f=n(6),b=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return"LogIn"}}]),t}(o.a.Component),v=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return"Register"}}]),t}(o.a.Component),j=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return"Main"}}]),t}(o.a.Component),O=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return"Receta"}}]),t}(o.a.Component),g=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return"Profile"}}]),t}(o.a.Component),E=(n(28),n(29),n(20)),w=n.n(E),y=(n(30),function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement("ul",{className:this.props.className,id:this.props.navId},o.a.createElement("li",null,o.a.createElement(s.b,{to:"/Profile",className:"text-decoration-none"},"Perfil")),o.a.createElement("li",null,o.a.createElement(s.b,{to:"/Receta",className:"text-decoration-none"},"Recetas")),o.a.createElement("li",null,o.a.createElement(s.b,{to:"/",className:"text-decoration-none"},"JavaScript")))}}]),t}(o.a.Component)),k=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){w.a.AutoInit()}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("nav",{className:"nav-extended main-light-2"},o.a.createElement("div",{className:"nav-wrapper"},o.a.createElement(s.b,{to:"/",className:"brand-logo ml-2 text-decoration-none"},o.a.createElement("span",{className:"font-weight-bold text-white"},"Sin"),o.a.createElement("span",{className:"font-weight-light"},"Az\xfacar")),o.a.createElement(s.b,{to:"/","data-target":"mobile-demo",className:"sidenav-trigger"},o.a.createElement("i",{className:"material-icons"},"menu")),o.a.createElement(y,{navId:"nav-mobile",className:"right hide-on-med-and-down"}))),o.a.createElement(y,{navId:"mobile-demo",className:"sidenav"}))}}]),t}(o.a.Component);var N=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(k,null),e.children)},x=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Ups!"),o.a.createElement("br",null),"P\xe1gina no encontrada")}}]),t}(o.a.Component);var C=function(){return o.a.createElement(s.a,null,o.a.createElement(N,null,o.a.createElement(u.c,null,o.a.createElement(u.a,{exact:!0,path:"/login",component:b}),o.a.createElement(u.a,{exact:!0,path:"/Register",component:v}),o.a.createElement(u.a,{exact:!0,path:"/",component:j}),o.a.createElement(u.a,{exact:!0,path:"/Receta",component:O}),o.a.createElement(u.a,{exact:!0,path:"/Profile",component:g}),o.a.createElement(u.a,{component:x}))))},R=document.getElementById("root");r.a.render(o.a.createElement(C,null),R),function(e){if("serviceWorker"in navigator){if(new URL("/ReactCursoProduccion",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/ReactCursoProduccion","/service-worker.js");i?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):l(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):l(t,e)})}}()}},[[23,1,2]]]);
//# sourceMappingURL=main.079e0195.chunk.js.map