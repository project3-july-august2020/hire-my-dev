(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{35:function(e,t,n){e.exports=n(64)},40:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a,r=n(0),o=n.n(r),c=n(32),u=n.n(c),i=(n(40),n(4)),s=n(2),l=n.n(s),p=n(8),f=n(10),h=n(11),m=n(13),d=n(12),g=n(15),v=n(1),b=n(33);a="window.location.origin";var O=n.n(b).a.create({withCredentials:!0,baseURL:a}),E={isLoggedIn:function(){var e=Object(p.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.get("/is-logged-in");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),signUp:function(){var e=Object(p.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.post("/signup",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),logIn:function(){var e=Object(p.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.post("/login",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),logOut:function(){var e=Object(p.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.get("/logout");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),fileUpload:function(){var e=Object(p.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.post("/fileupload",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},j=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){return Object(f.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=Object(p.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return o.a.createElement("div",null)}}]),n}(r.Component);var w=function(){return o.a.createElement("div",null,o.a.createElement("h2",null,"Not found"))},y=n(16),S=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(f.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e.handleChange=function(t){return e.setState(Object(y.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),E.signUp(e.state).then((function(t){e.props.setUser(Object(i.a)({},t.data))})).catch((function(e){var t=e.response;return console.error(t.data)}))},e}return Object(h.a)(n,[{key:"render",value:function(){return o.a.createElement(r.Fragment,null,o.a.createElement("h2",null,"SignUP"),o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{name:"email",type:"email",onChange:this.handleChange}),o.a.createElement("input",{name:"password",type:"password",onChange:this.handleChange}),o.a.createElement("input",{type:"submit",value:"Sign Up"})))}}]),n}(r.Component),C=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(f.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e.handleChange=function(t){return e.setState(Object(y.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),E.logIn(e.state).then((function(t){e.props.setUser(Object(i.a)({},t.data))})).catch((function(e){var t=e.response;return console.error(t.data)}))},e}return Object(h.a)(n,[{key:"render",value:function(){return o.a.createElement(r.Fragment,null,o.a.createElement("h2",null,"LogIn"),o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{name:"email",type:"email",onChange:this.handleChange}),o.a.createElement("input",{name:"password",type:"password",onChange:this.handleChange}),o.a.createElement("input",{type:"submit",value:"Log In"})))}}]),n}(r.Component),U=function(e){return e.user.email||e.history.push("/log-in"),o.a.createElement("div",null,"Profile Welcome ",e.user.email," !!!")},_=n(18),x=function(e){console.log(e);var t=function(t){var n,a=Object(i.a)(Object(i.a)({},t.profileObj),{},{password:null===(n=t.profileObj)||void 0===n?void 0:n.googleId});E.signUp(a).then((function(t){e.setUser(Object(i.a)({},t.data))})).catch((function(e){var t=e.response;return console.error(t.data)}))};return o.a.createElement(_.GoogleLogin,{clientId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GOOGLEID,buttonText:"Signup",onSuccess:t,onFailure:t,cookiePolicy:"single_host_origin"})},k=function(e){console.log(e);var t=function(t){var n,a=Object(i.a)(Object(i.a)({},t.profileObj),{},{password:null===(n=t.profileObj)||void 0===n?void 0:n.googleId});E.logIn(a).then((function(t){e.setUser(Object(i.a)({},t.data))})).catch((function(e){var t=e.response;return console.error(t.data)}))};return o.a.createElement(_.GoogleLogin,{clientId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GOOGLEID,buttonText:"Login",onSuccess:t,onFailure:t,cookiePolicy:"single_host_origin"})},I=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(f.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e.setUser=function(t){return e.setState(t)},e.logOut=Object(p.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.logOut();case 2:t.sent,e.setUser({email:null,createdAt:null,updatedAt:null,_id:null});case 4:case"end":return t.stop()}}),t)}))),e.handlechange=function(){var e=Object(p.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("upload",t.target.files[0]),e.next=4,E.fileUpload(n);case 4:a=e.sent,console.log(a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=Object(p.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.isLoggedIn();case 2:t=e.sent,this.setState(Object(i.a)({},t.data)),console.log("coolest ");case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return o.a.createElement(g.a,null,this.state.email,o.a.createElement("nav",null,o.a.createElement(g.b,{to:"/"},"Home |"),this.state.email?o.a.createElement(r.Fragment,null,o.a.createElement(g.b,{onClick:this.logOut,to:"/"},"Log Out |"),o.a.createElement(g.b,{to:"/profile"},"Profile|")):o.a.createElement(r.Fragment,null,o.a.createElement(g.b,{to:"/sign-up"},"Sign Up |"),o.a.createElement(g.b,{to:"/log-in"},"Log In |"))),o.a.createElement(v.c,null,o.a.createElement(v.a,{exact:!0,path:"/",render:function(e){return o.a.createElement(j,e)}}),o.a.createElement(v.a,{exact:!0,path:"/sign-up",render:function(t){return o.a.createElement(S,Object.assign({},t,{setUser:e.setUser}))}}),o.a.createElement(v.a,{exact:!0,path:"/log-in",render:function(t){return o.a.createElement(C,Object.assign({},t,{setUser:e.setUser}))}}),o.a.createElement(v.a,{exact:!0,path:"/profile",render:function(t){return o.a.createElement(U,Object.assign({},t,{user:e.state}))}}),o.a.createElement(v.a,{component:w})),!this.state.email&&o.a.createElement(x,{setUser:this.setUser}),!this.state.email&&o.a.createElement(k,{setUser:this.setUser}),o.a.createElement("form",null,o.a.createElement("input",{type:"file",onChange:this.handlechange})))}}]),n}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(o.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.80fe9c85.chunk.js.map