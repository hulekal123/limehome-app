(this["webpackJsonplimehome-app"]=this["webpackJsonplimehome-app"]||[]).push([[0],[,,,,,,function(e,t,n){},,function(e,t,n){e.exports=n.p+"static/media/hotel.56ae9f15.jpg"},function(e,t,n){e.exports=n.p+"static/media/limehome_logo.202fcb30.svg"},function(e,t,n){e.exports=n.p+"static/media/map_burger.079652e9.svg"},function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(7),c=n.n(r),s=(n(16),n(1)),o=n(2),l=n(4),u=n(3),p=(n(6),n(8)),m=n.n(p),v=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).vicinity=null,e.state={title:null,address:null},e}return Object(o.a)(n,[{key:"componentDidUpdate",value:function(){var e=this.props.places[1];void 0!==e.vicinity&&(this.vicinity=e.vicinity.replace(/<br\s*\/?>/gi,"\r\n")),this.state.title!==e.title&&this.state.vicinity!==this.vicinity&&(this.setState({title:e.title}),this.setState({address:this.vicinity}))}},{key:"render",value:function(){return i.a.createElement("div",{class:"card"},i.a.createElement("div",{class:"image"},i.a.createElement("img",{src:m.a})),i.a.createElement("div",{class:"content"},i.a.createElement("div",null," ",i.a.createElement("h4",null,this.state.title," ")),i.a.createElement("div",null,this.state.address),i.a.createElement("button",{class:"button"},"Book")))}}]),n}(i.a.Component),h=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var i=arguments.length,r=new Array(i),c=0;c<i;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).mapRef=a.createRef(),e.lat=0,e.long=0,e.apiKey="NU6enez-BoXwzhlae5czA3JS8UzkTuDWg8cUtToWeME",e.state={map:null,isEmptyState:!1},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=window.H,t=new e.service.Platform({apikey:this.apiKey}).createDefaultLayers(),n=new e.Map(this.mapRef.current,t.vector.normal.map,{center:{lat:50,lng:5},zoom:4,pixelRatio:window.devicePixelRatio||1});window.addEventListener("resize",(function(){return n.getViewPort().resize()}));new e.mapevents.Behavior(new e.mapevents.MapEvents(n)),e.ui.UI.createDefault(n,t);this.setState({map:n}),this.setUpClickListener(n)}},{key:"setUpClickListener",value:function(e){var t=this;e.addEventListener("tap",(function(n){var a=e.screenToGeo(n.currentPointer.viewportX,n.currentPointer.viewportY);t.lat=Math.abs(a.lat.toFixed(4)),t.long=Math.abs(a.lng.toFixed(4)),t.setState({isEmptyState:!0}),t.getProperties()}))}},{key:"getProperties",value:function(){var e=this,t=new URL("/api/properties"),n={lat:this.lat,long:this.long,apiKey:this.apiKey};t.search=new URLSearchParams(n).toString(),fetch(t).then((function(e){return e.json()})).then((function(t){console.log(t.results),e.setState({places:t.results})}))}},{key:"componentWillUnmount",value:function(){this.state.map.dispose()}},{key:"render",value:function(){return a.createElement("div",{class:"container"},a.createElement("div",{class:"box",ref:this.mapRef,style:{height:"500px"}}),a.createElement("div",{class:"stack-top"}," ",this.state.isEmptyState&&a.createElement(v,{places:this.state.places})))}}]),n}(a.Component),d=n(9),f=n.n(d),g=n(10),y=n.n(g),E=(n(17),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return a.createElement("div",{class:"nav"},a.createElement("div",{class:"logo"},a.createElement("img",{src:f.a})," "),a.createElement("div",{class:"burger"},a.createElement("img",{src:y.a})," "))}}]),n}(a.Component));var w=function(){return i.a.createElement("div",null,i.a.createElement(E,null),i.a.createElement("div",null,i.a.createElement(h,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.bfe3a5e6.chunk.js.map