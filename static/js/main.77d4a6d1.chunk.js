(this["webpackJsonpapp-minin"]=this["webpackJsonpapp-minin"]||[]).push([[1],{108:function(e,t,a){e.exports=a(211)},113:function(e,t,a){},21:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"d",(function(){return d})),a.d(t,"c",(function(){return p})),a.d(t,"b",(function(){return m}));var n,r=a(7),o=a.n(r),c=a(14),i=a(33),s=a.n(i),u="https://react-todolist-10bf5.firebaseio.com",l=s.a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"c8ea854d-e495-4696-9913-9b1e4acda573"}});!function(e){e[e.Success=200]="Success"}(n||(n={}));var d={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return Object(c.a)(o.a.mark((function a(){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",l.get("users?page=".concat(e,"&count=").concat(t)));case 1:case"end":return a.stop()}}),a)})))()}},p={getCoins:function(){return Object(c.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s.a.get("https://www.binance.com/exchange-api/v1/public/asset-service/product/get-products",{withCredentials:!0}).then((function(e){return e.data})));case 1:case"end":return e.stop()}}),e)})))()}},m={getChatRoom:function(e){return Object(c.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",s.a.get("".concat(u,"/chat/room").concat(e,".json"),{headers:{"Access-Control-Allow-Origin":u}}));case 1:case"end":return t.stop()}}),t)})))()},postChatRoom:function(e){return Object(c.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",s.a.post("".concat(u,"/chat/room").concat(e.room,".json"),e,{headers:{"Access-Control-Allow-Origin":u}}));case 1:case"end":return t.stop()}}),t)})))()}}},211:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),c=a.n(o),i=(a(113),a(30)),s=a(26),u=a(242),l=a(245),d=a(247),p=a(102),m=a(248),f=a(57),b=Object(u.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},titleNavbarUI:{fontWeight:"normal"},appBar:{backgroundColor:f.a[700],color:"#fff"},navLink:{color:"#fff"},navbarButtons:{"&:focus":{backgroundColor:"unset"}}}})),E=r.a.memo((function(){var e=b();return r.a.createElement("div",{className:e.root},r.a.createElement(l.a,{position:"static",className:e.appBar},r.a.createElement(d.a,{className:"navbarBlock"},r.a.createElement(p.a,{variant:"h6",className:"titleNavbarWrap ".concat(e.title)},r.a.createElement(s.b,{className:"titleNavbar ".concat(e.navLink," ").concat(e.titleNavbarUI),to:"/"},"React + Typescript")),r.a.createElement(s.b,{style:{fontWeight:"normal",margin:"0px 5px"},className:e.navLink,to:"/chat"},r.a.createElement(m.a,{className:e.navbarButtons,color:"inherit"},"Chat")),r.a.createElement(s.b,{style:{fontWeight:"normal",margin:"0px 5px"},className:e.navLink,to:"/cryptoCurrencies"},r.a.createElement(m.a,{className:e.navbarButtons,color:"inherit"},"Crypto currencies")),r.a.createElement(s.b,{style:{fontWeight:"normal",margin:"0px 5px"},className:e.navLink,to:"/"},r.a.createElement(m.a,{className:e.navbarButtons,color:"inherit"},"Todolist")),r.a.createElement(s.b,{style:{fontWeight:"normal",margin:"0px 5px"},className:e.navLink,to:"/about"},r.a.createElement(m.a,{className:e.navbarButtons,color:"inherit"},"Information")))))})),O=a(8),g=a(67),h=a.n(g),v=a(96),S=a.n(v),w=a(47),I=function(e){return function(t){var a=S()(Object(O.a)({},h.a.selectedPage,!0),h.a.pageNumber),n=r.a.createElement("div",{className:a},r.a.createElement(w.a,null));return r.a.createElement(r.a.Suspense,{fallback:n},r.a.createElement(e,t))}},y=a(34),j=a(27),_=a(35),N=a(253),T=a(256),C=a(252),P=a(250),A=a(251),R=a(249),D={setDataModalWindow:_.b.setDataModalWindow},k=Object(y.b)((function(e){return{}}),D)((function(e){var t=e.isOpen,a=e.title,n=e.setDataModalWindow,o=function(){n(!1,a)};return r.a.createElement("div",null,r.a.createElement(T.a,{open:t,onClose:o,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(R.a,{id:"alert-dialog-title"},"Attention!"),r.a.createElement(P.a,null,r.a.createElement(A.a,{id:"alert-dialog-description"},a)),r.a.createElement(C.a,null,r.a.createElement(m.a,{onClick:function(){n(!1,a)},color:"primary"},"OK"),r.a.createElement(m.a,{onClick:o,color:"primary"},"CANCEL"))))})),x=r.a.lazy((function(){return Promise.all([a.e(0),a.e(5),a.e(8)]).then(a.bind(null,308))})),L=r.a.lazy((function(){return a.e(7).then(a.bind(null,303))})),M=r.a.lazy((function(){return a.e(6).then(a.bind(null,305))})),z=r.a.lazy((function(){return Promise.all([a.e(0),a.e(4)]).then(a.bind(null,310))})),W=I(x),G=I(L),U=I(M),B=I(z),F={initializeApp:_.a},H=Object(j.d)(Object(y.b)((function(e){return{initialized:e.mainApp.initialized,dataForModalWindow:e.mainApp.dataForModalWindow}}),F))((function(e){var t=e.initializeApp,a=e.dataForModalWindow,o=e.initialized,c=function(e){console.log("Error! Reason: "+e.reason.message)};return Object(n.useEffect)((function(){return t(),window.addEventListener("unhandledrejection",c),function(){return window.removeEventListener("unhandledrejection",c)}}),[t]),o?r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement(N.a,{maxWidth:"lg"},r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",exact:!0,render:function(){return r.a.createElement(W,null)}}),r.a.createElement(i.a,{path:"/about",render:function(){return r.a.createElement(G,null)}}),r.a.createElement(i.a,{path:"/cryptoCurrencies",render:function(){return r.a.createElement(U,null)}}),r.a.createElement(i.a,{path:"/chat",render:function(){return r.a.createElement(B,null)}})),r.a.createElement(k,a))):r.a.createElement("div",{className:"appPreloaderBlock"},r.a.createElement(w.a,null))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Z=a(84),X=a(99),q=a(254),J=Object(j.c)({mainApp:_.c,form:q.a,chat:Z.c}),K=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||j.d,Q=Object(j.e)(J,K(Object(j.a)(X.a)));window.__store__=Q;var V=Q;c.a.render(r.a.createElement(s.a,null,r.a.createElement(y.a,{store:V},r.a.createElement(H,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},35:function(e,t,a){"use strict";a.d(t,"c",(function(){return l})),a.d(t,"b",(function(){return d})),a.d(t,"d",(function(){return p})),a.d(t,"a",(function(){return m}));var n=a(7),r=a.n(n),o=a(14),c=a(11),i=a(6),s=a(21),u={messagesData:[{id:1,message:"Hi"},{id:2,message:"How are you doing?"},{id:3,message:"GG"},{id:4,message:"GG"},{id:5,message:"GG"},{id:6,message:"GG"}],users:[],postMessages:[],initialized:!1,followingInProgress:[],propsIsEditTodo:!0,dataForModalWindow:{isOpen:!1,title:"Unknown error"},coins:[]},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POST":var a=Object(i.a)({},t.payload);return Object(i.a)({},e,{messagesData:[].concat(Object(c.a)(e.messagesData),[{id:e.messagesData.length+1,message:a.value}])});case"SET_USERS":var n=Object(i.a)({},t.payload);return Object(i.a)({},e,{users:Object(c.a)(n.items)});case"POST_MESSAGES":var r=Object(i.a)({},t.payload);return Object(i.a)({},e,{postMessages:[].concat(Object(c.a)(e.postMessages),[{id:e.postMessages.length+1,title:r.value}])});case"INITIALIZED_SUCCESS":var o=Object(i.a)({},t.payload);return Object(i.a)({},e,{initialized:o.isInitialized});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(i.a)({},e,{followingInProgress:t.isFollowingInProgress?[].concat(Object(c.a)(e.followingInProgress),[t.userId]):Object(c.a)(e.followingInProgress.filter((function(e){return e!==t.userId})))});case"SET_PROPS_IS_EDIT_TODO":var s=Object(i.a)({},t.payload);return Object(i.a)({},e,{propsIsEditTodo:s.isEditTodo});case"SET_DATA_MODAL_WINDOW":var l=Object(i.a)({},t.payload);return Object(i.a)({},e,{dataForModalWindow:{isOpen:l.isOpen,title:l.title}});case"SET_COINS":var d=Object(i.a)({},t.payload);return Object(i.a)({},e,{coins:Object(c.a)(d.data)});default:return e}},d={addPostCreator:function(e){return{type:"ADD_POST",payload:{value:e}}},setUsers:function(e){return{type:"SET_USERS",payload:{items:e}}},sendMessage:function(e){return{type:"POST_MESSAGES",payload:{value:e}}},toggleFollowingProgress:function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFollowingInProgress:e,userId:t}},setPropsIsEditTodo:function(e){return{type:"SET_PROPS_IS_EDIT_TODO",payload:{isEditTodo:e}}},setDataModalWindow:function(e,t){return{type:"SET_DATA_MODAL_WINDOW",payload:{isOpen:e,title:t}}},setCoins:function(e){return{type:"SET_COINS",payload:{data:e}}},initializeAppSuccess:function(){return{type:"INITIALIZED_SUCCESS",payload:{isInitialized:!0}}}},p=function(){return function(){var e=Object(o.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.c.getCoins();case 2:(a=e.sent).success&&(n=a.data.filter((function(e){return"RUB"===e.q})),t(d.setCoins(n)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},m=function(){return function(){var e=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.onload=function(){setTimeout((function(){t(d.initializeAppSuccess())}),1e3)};case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},47:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(97),c=a.n(o);t.a=function(e){return r.a.createElement("div",{className:"appPreloaderBlockSvg"},r.a.createElement("img",{src:c.a,alt:"preloader"}))}},67:function(e,t,a){e.exports={selectedPage:"withSuspense_selectedPage__24RfB"}},84:function(e,t,a){"use strict";a.d(t,"c",(function(){return l})),a.d(t,"b",(function(){return d})),a.d(t,"a",(function(){return p})),a.d(t,"e",(function(){return m})),a.d(t,"d",(function(){return f}));var n=a(7),r=a.n(n),o=a(14),c=a(11),i=a(6),s=a(21),u={person:{id:null,firstName:"",lastName:"",colorIcon:[],room:null,autorizatedId:null},messagesInRoom:[],autorizatedPerson:!1,isPersonFromLocalStrorage:!1,isPersonExitChat:!1,isLoadingChat:!1},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHAT_INITIALIZED_PERSON":var a=Object(i.a)({},t.payload.person),n=Object.values(a).length===Object.keys(a).length&&Object.values(a).every((function(e){return e}));return Object(i.a)({},e,{person:Object(i.a)({},a),isPersonFromLocalStrorage:!0,autorizatedPerson:n});case"AUTHORIZATION_PERSON":var r=Object(i.a)({},t.payload.person),o=Math.floor(200*Math.random()+1),s=Math.floor(200*Math.random()+1),l=Math.floor(200*Math.random()+1);return Object(i.a)({},e,{person:Object(i.a)({},e.person,{firstName:r.firstName,lastName:r.lastName,colorIcon:[o,s,l],room:r.room,autorizatedId:Date.now()}),autorizatedPerson:!0});case"REQUEST_ROOM_SUCCESS":return Object(i.a)({},e,{messagesInRoom:Object(c.a)(t.payload.messagesInRoom),isLoadingChat:!0});case"SET_DATA_EXIT_CHAT":return Object(i.a)({},e,{person:Object(i.a)({},e.person,{firstName:"",lastName:"",colorIcon:[],room:null,autorizatedId:null}),messagesInRoom:[],autorizatedPerson:!1,isPersonFromLocalStrorage:!1,isPersonExitChat:!0});default:return e}},d={chatInitialedPerson:function(e){return{type:"CHAT_INITIALIZED_PERSON",payload:{person:e}}},authorizationPersonSuccess:function(e){return{type:"AUTHORIZATION_PERSON",payload:{person:e}}},requestRoomSuccess:function(e){return{type:"REQUEST_ROOM_SUCCESS",payload:{messagesInRoom:e}}},setDataExitChat:function(){return{type:"SET_DATA_EXIT_CHAT",payload:{}}}},p=function(e,t,a){return function(){var n=Object(o.a)(r.a.mark((function n(o,c){var s;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:s=Object(i.a)({},c().chat.person,{},{room:e,firstName:t,lastName:a}),o(d.authorizationPersonSuccess(s));case 2:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(a){var n,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.getChatRoom(e);case 2:(n=t.sent).status===s.a.Success&&(o=n.data?Object(c.a)(Object.keys(n.data).map((function(e){return n.data[e]}))):[],a(d.requestRoomSuccess(o)));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},f=function(e,t){return function(){var a=Object(o.a)(r.a.mark((function a(n){var o,c,u;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return o={month:"long",day:"numeric",hour:"numeric",minute:"numeric",hour12:!1},c=(new Date).toLocaleString("en-US",o).split(", ").reverse().join(", "),u=Object(i.a)({},e,{message:t,date:c,messageId:Date.now()}),a.next=5,s.b.postChatRoom(u);case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}},97:function(e,t,a){e.exports=a.p+"static/media/preloader.94251f4a.svg"}},[[108,2,3]]]);
//# sourceMappingURL=main.77d4a6d1.chunk.js.map