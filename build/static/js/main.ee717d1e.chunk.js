(window["webpackJsonpprime-solo-project"]=window["webpackJsonpprime-solo-project"]||[]).push([[0],{45:function(e,t,a){e.exports=a(79)},74:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(40),c=a.n(s),i=a(14),o=a(7),l=a(43),u=(a(54),Object(i.c)({loginMessage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CLEAR_LOGIN_ERROR":return"";case"LOGIN_INPUT_ERROR":return"Enter your username and password!";case"LOGIN_FAILED":return"Oops! The username and password didn't match. Try again!";case"LOGIN_FAILED_NO_CODE":return"Oops! Something went wrong! Is the server running?";default:return e}},registrationMessage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CLEAR_REGISTRATION_ERROR":return"";case"REGISTRATION_INPUT_ERROR":return"Choose a username and password!";case"REGISTRATION_FAILED":return"Oops! That didn't work. The username might already be taken. Try again!";default:return e}}})),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"login",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TO_LOGIN_MODE":return"login";case"SET_TO_REGISTER_MODE":return"register";default:return e}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return t.payload;case"UNSET_USER":return{};default:return e}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CIGAR_INFO":return t.payload;default:return e}},h=Object(i.c)({errors:u,loginMode:m,user:p,cigarReducer:d}),E=a(5),b=a.n(E),g=a(6),f=a(20),v=a.n(f),O=b.a.mark(R),y=b.a.mark(w),j=b.a.mark(_);function R(e){var t;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(g.b)({type:"CLEAR_LOGIN_ERROR"});case 3:return t={headers:{"Content-Type":"application/json"},withCredentials:!0},a.next=6,v.a.post("api/user/login",e.payload,t);case 6:return a.next=8,Object(g.b)({type:"FETCH_USER"});case 8:a.next=20;break;case 10:if(a.prev=10,a.t0=a.catch(0),console.log("Error with user login:",a.t0),401!==a.t0.response.status){a.next=18;break}return a.next=16,Object(g.b)({type:"LOGIN_FAILED"});case 16:a.next=20;break;case 18:return a.next=20,Object(g.b)({type:"LOGIN_FAILED_NO_CODE"});case 20:case"end":return a.stop()}}),O,null,[[0,10]])}function w(e){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={headers:{"Content-Type":"application/json"},withCredentials:!0},e.next=4,v.a.post("api/user/logout",t);case 4:return e.next=6,Object(g.b)({type:"UNSET_USER"});case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Error with user logout:",e.t0);case 11:case"end":return e.stop()}}),y,null,[[0,8]])}function _(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.c)("LOGIN",R);case 2:return e.next=4,Object(g.c)("LOGOUT",w);case 4:case"end":return e.stop()}}),j)}var I=_,N=b.a.mark(T),x=b.a.mark(C);function T(e){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(g.b)({type:"CLEAR_REGISTRATION_ERROR"});case 3:return t.next=5,v.a.post("api/user/register",e.payload);case 5:return t.next=7,Object(g.b)({type:"LOGIN",payload:e.payload});case 7:return t.next=9,Object(g.b)({type:"SET_TO_LOGIN_MODE"});case 9:t.next=16;break;case 11:return t.prev=11,t.t0=t.catch(0),console.log("Error with user registration:",t.t0),t.next=16,Object(g.b)({type:"REGISTRATION_FAILED"});case 16:case"end":return t.stop()}}),N,null,[[0,11]])}function C(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.c)("REGISTER",T);case 2:case"end":return e.stop()}}),x)}var S=C,k=b.a.mark(G),L=b.a.mark(A);function G(){var e,t;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,e={headers:{"Content-Type":"application/json"},withCredentials:!0},a.next=4,v.a.get("api/user",e);case 4:return t=a.sent,a.next=7,Object(g.b)({type:"SET_USER",payload:t.data});case 7:a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.log("User get request failed",a.t0);case 12:case"end":return a.stop()}}),k,null,[[0,9]])}function A(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.c)("FETCH_USER",G);case 2:case"end":return e.stop()}}),L)}var F=A,D=b.a.mark(M),U=b.a.mark(P);function M(e){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("/api/cigar");case 3:return t=e.sent,e.next=6,Object(g.b)({type:"SET_CIGAR_INFO",payload:t.data});case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("GET cigars error: ",e.t0);case 11:case"end":return e.stop()}}),D,null,[[0,8]])}function P(e){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.c)("GET_CIGAR_INFO",M);case 2:case"end":return e.stop()}}),U)}var q=P,H=b.a.mark(V);function V(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.a)([I(),S(),F(),q()]);case 2:case"end":return e.stop()}}),H)}var z=a(15),J=a(16),B=a(18),Q=a(17),W=a(19),Y=a(21),K=a(22),X=Object(o.b)()((function(e){return r.a.createElement("button",{className:e.className,onClick:function(){return e.dispatch({type:"LOGOUT"})}},"Log Out")})),Z=(a(74),function(e){return{store:e,user:e.user,loginMode:e.loginMode,errors:e.errors}}),$=Object(o.b)(Z)((function(e){return r.a.createElement("div",{className:"nav"},r.a.createElement(Y.b,{to:"/home"},r.a.createElement("h2",{className:"nav-title"},"Prime Solo Project")),r.a.createElement("div",{className:"nav-right"},r.a.createElement(Y.b,{className:"nav-link",to:"/home"},e.store.user.id?"Home":"Login / Register"),e.store.user.id&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Y.b,{className:"nav-link",to:"/library"},"Info Page"),r.a.createElement(X,{className:"nav-link"})),r.a.createElement(Y.b,{className:"nav-link",to:"/about"},"About")))})),ee=(a(76),function(){return r.a.createElement("footer",null,"\xa9 Prime Digital Academy")}),te=a(44),ae=a(27),ne=function(e){function t(){var e,a;Object(z.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(B.a)(this,(e=Object(Q.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},a.login=function(e){e.preventDefault(),a.state.username&&a.state.password?a.props.dispatch({type:"LOGIN",payload:{username:a.state.username,password:a.state.password}}):a.props.dispatch({type:"LOGIN_INPUT_ERROR"})},a.handleInputChangeFor=function(e){return function(t){a.setState(Object(ae.a)({},e,t.target.value))}},a}return Object(W.a)(t,e),Object(J.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.props.store.errors.loginMessage&&r.a.createElement("h2",{className:"alert",role:"alert"},this.props.store.errors.loginMessage),r.a.createElement("form",{onSubmit:this.login},r.a.createElement("h1",null,"Login"),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"username"},"Username:",r.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:this.handleInputChangeFor("username")}))),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"password"},"Password:",r.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:this.handleInputChangeFor("password")}))),r.a.createElement("div",null,r.a.createElement("input",{className:"log-in",type:"submit",name:"submit",value:"Log In"}))),r.a.createElement("center",null,r.a.createElement("button",{type:"button",className:"link-button",onClick:function(){e.props.dispatch({type:"SET_TO_REGISTER_MODE"})}},"Register")))}}]),t}(n.Component),re=Object(o.b)(Z)(ne),se=function(e){function t(){var e,a;Object(z.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(B.a)(this,(e=Object(Q.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},a.registerUser=function(e){e.preventDefault(),a.state.username&&a.state.password?a.props.dispatch({type:"REGISTER",payload:{username:a.state.username,password:a.state.password}}):a.props.dispatch({type:"REGISTRATION_INPUT_ERROR"})},a.handleInputChangeFor=function(e){return function(t){a.setState(Object(ae.a)({},e,t.target.value))}},a}return Object(W.a)(t,e),Object(J.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.props.errors.registrationMessage&&r.a.createElement("h2",{className:"alert",role:"alert"},this.props.errors.registrationMessage),r.a.createElement("form",{onSubmit:this.registerUser},r.a.createElement("h1",null,"Register User"),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"username"},"Username:",r.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:this.handleInputChangeFor("username")}))),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"password"},"Password:",r.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:this.handleInputChangeFor("password")}))),r.a.createElement("div",null,r.a.createElement("input",{className:"register",type:"submit",name:"submit",value:"Register"}))),r.a.createElement("center",null,r.a.createElement("button",{type:"button",className:"link-button",onClick:function(){e.props.dispatch({type:"SET_TO_LOGIN_MODE"})}},"Login")))}}]),t}(n.Component),ce=Object(o.b)(Z)(se),ie=Object(o.b)(Z)((function(e){var t,a=e.component,n=e.authRedirect,s=e.store,c=Object(te.a)(e,["component","authRedirect","store"]);return t=s.user.id?a:"login"===s.loginMode?re:ce,s.user.id&&null!=n?r.a.createElement(K.a,{exact:!0,from:c.path,to:n}):r.a.createElement(K.b,Object.assign({},c,{component:t}))})),oe=function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("p",null,"This about page is for anyone to read!")))},le=Object(o.b)(Z)((function(e){return r.a.createElement("div",null,r.a.createElement("h1",{id:"welcome"},"Welcome, ",e.store.user.username,"!"),r.a.createElement("p",null,"Your ID is: ",e.store.user.id),r.a.createElement(X,{className:"log-in"}))})),ue=function(e){function t(){return Object(z.a)(this,t),Object(B.a)(this,Object(Q.a)(t).apply(this,arguments))}return Object(W.a)(t,e),Object(J.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch({type:"GET_CIGAR_INFO"})}},{key:"render",value:function(){var e=this.props.store.cigarReducer.map((function(e,t){return r.a.createElement("div",{key:t,class:"table-responsive"},r.a.createElement("table",{class:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,e.brand),r.a.createElement("th",null,e.cigar_name),r.a.createElement("th",null,e.country),r.a.createElement("th",null,e.strength),r.a.createElement("th",null,e.size_type),r.a.createElement("th",null,e.ring_gauge),r.a.createElement("th",null,e.filler),r.a.createElement("th",null,e.binder),r.a.createElement("th",null,e.wrapper)))))}));return r.a.createElement("div",{class:"container"},r.a.createElement("h1",null,"Cigar Library"),e)}}]),t}(n.Component),me=Object(o.b)(Z)(Object(K.g)(ue)),pe=(a(77),function(e){function t(){var e,a;Object(z.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(B.a)(this,(e=Object(Q.a)(t)).call.apply(e,[this].concat(r)))).state={heading:"Class Component"},a.onLogin=function(e){a.props.history.push("/login")},a}return Object(W.a)(t,e),Object(J.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,this.state.heading),r.a.createElement("div",{className:"grid"},r.a.createElement("div",{className:"grid-col grid-col_8"},r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id felis metus. Vestibulum et pulvinar tortor. Morbi pharetra lacus ut ex molestie blandit. Etiam et turpis sit amet risus mollis interdum. Suspendisse et justo vitae metus bibendum fringilla sed sed justo. Aliquam sollicitudin dapibus lectus, vitae consequat odio elementum eget. Praesent efficitur eros vitae nunc interdum, eu interdum justo facilisis. Sed pulvinar nulla ac dignissim efficitur. Quisque eget eros metus. Vestibulum bibendum fringilla nibh a luctus. Duis a sapien metus."),r.a.createElement("p",null,"Praesent consectetur orci dui, id elementum eros facilisis id. Sed id dolor in augue porttitor faucibus eget sit amet ante. Nunc consectetur placerat pharetra. Aenean gravida ex ut erat commodo, ut finibus metus facilisis. Nullam eget lectus non urna rhoncus accumsan quis id massa. Curabitur sit amet dolor nisl. Proin euismod, augue at condimentum rhoncus, massa lorem semper lacus, sed lobortis augue mi vel felis. Duis ultrices sapien at est convallis congue."),r.a.createElement("p",null,"Fusce porta diam ac tortor elementum, ut imperdiet metus volutpat. Suspendisse posuere dapibus maximus. Aliquam vitae felis libero. In vehicula sapien at semper ultrices. Vivamus sed feugiat libero. Sed sagittis neque id diam euismod, ut egestas felis ultricies. Nullam non fermentum mauris. Sed in enim ac turpis faucibus pretium in sit amet nisi.")),r.a.createElement("div",{className:"grid-col grid-col_4"},r.a.createElement("h3",null,"Already a Member?"),r.a.createElement("button",{className:"btn btn_sizeFull",onClick:this.onLogin},"Login"))))}}]),t}(n.Component)),de=Object(o.b)(Z)(pe),he=(a(78),function(e){function t(){return Object(z.a)(this,t),Object(B.a)(this,Object(Q.a)(t).apply(this,arguments))}return Object(W.a)(t,e),Object(J.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch({type:"FETCH_USER"})}},{key:"render",value:function(){return r.a.createElement(Y.a,null,r.a.createElement("div",null,r.a.createElement($,null),r.a.createElement(K.d,null,r.a.createElement(K.a,{exact:!0,from:"/",to:"/home"}),r.a.createElement(K.b,{exact:!0,path:"/about",component:oe}),r.a.createElement(K.b,{exact:!0,path:"/home",component:de}),r.a.createElement(ie,{exact:!0,path:"/admin",component:le}),r.a.createElement(ie,{exact:!0,path:"/info",component:me}),r.a.createElement(ie,{exact:!0,path:"/login",authRedirect:"/admin",component:re}),r.a.createElement(ie,{exact:!0,path:"/registration",authRedirect:"/admin",component:ce}),r.a.createElement(K.b,{render:function(){return r.a.createElement("h1",null,"404")}})),r.a.createElement(ee,null)))}}]),t}(n.Component)),Ee=Object(o.b)()(he),be=Object(l.a)(),ge=[be],fe=Object(i.e)(h,i.a.apply(void 0,ge));be.run(V),c.a.render(r.a.createElement(o.a,{store:fe},r.a.createElement(Ee,null)),document.getElementById("react-root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.ee717d1e.chunk.js.map