(this.webpackJsonpvakaren=this.webpackJsonpvakaren||[]).push([[0],{30:function(e,t,n){e.exports=n.p+"static/media/github.d22ee372.png"},33:function(e,t,n){e.exports=n(47)},43:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(16),s=n.n(r),o=n(20),i=n(22),u=n(8),p=n(12),l=n(32),E=n(29),_=n(5),d=function(){return{type:"GET_AUTH_TOKEN"}},h=function(){return{type:"GET_POPULAR_MOVIES"}},O=function(e){return{type:"RECEIVE_POPULAR_MOVIES",data:e}},b=function(e){return{type:"RECEIVE_MOVIE_SEARCH",data:e}},v=function(e){return{type:"RECEIVE_LATEST_MOVIE_SEARCH",data:e}},f=function(e){return{type:"REQUEST_SESSION_ID",data:e}},S=function(e){return{type:"RECEIVE_MOVIE_BY_ID",data:e}},m=function(e){return{type:"RECEIVE_MOVIE_VIDEOS",data:e}},g=function(e){return{type:"RECEIVE_MOVIE_POSTERS",data:e}},I=function(){return{type:"GET_ACCOUNT_DETAILS"}},j=function(e){return{type:"RECEIVE_ACCOUNT_DETAILS",data:e}},T=function(e){return{type:"RECEIVE_FAV_LIST",data:e}},x=function(e){return{type:"RECEIVE_WATCH_LIST",data:e}},R=function(){return{type:"RESET_SEARCH_RESULTS"}},k={apiToken:{},searchResults:{results:[]},searchHasResults:!1,isAuthenticated:!1,movieDetails:{},movieVideos:{},moviePosters:{},accountDetails:{}},A=Object(p.combineReducers)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.data;switch(n){case"RECEIVE_REQUEST_TOKEN":return Object(_.a)(Object(_.a)({},e),{},{apiToken:a});case"RECEIVE_POPULAR_MOVIES":return Object(_.a)(Object(_.a)({},e),{},{popularMovies:a});case"RECEIVE_MOVIE_SEARCH":return Object(_.a)(Object(_.a)({},e),{},{searchResults:a});case"RECEIVE_LATEST_MOVIE_SEARCH":return Object(_.a)(Object(_.a)({},e),{},{latestMovieResultId:a.id});case"REQUEST_SESSION_ID":return Object(_.a)(Object(_.a)({},e),{},{isAuthenticated:!!a});case"RECEIVE_MOVIE_BY_ID":return Object(_.a)(Object(_.a)({},e),{},{movieDetails:a});case"ADD_TO_LIST_RESPONSE":return Object(_.a)(Object(_.a)({},e),{},{favoriteMovies:Object(_.a)(Object(_.a)({},e.favoriteMovies),{},{data:a})});case"RECEIVE_API_DATA":return Object(_.a)(Object(_.a)({},e),{},{movieDetails:a});case"RECEIVE_MOVIE_VIDEOS":return Object(_.a)(Object(_.a)({},e),{},{movieVideos:a});case"RECEIVE_MOVIE_POSTERS":return Object(_.a)(Object(_.a)({},e),{},{moviePosters:a});case"RECEIVE_ACCOUNT_DETAILS":return Object(_.a)(Object(_.a)({},e),{},{accountDetails:a});case"RECEIVE_FAV_LIST":return Object(_.a)(Object(_.a)({},e),{},{userFavList:a});case"RECEIVE_WATCH_LIST":return Object(_.a)(Object(_.a)({},e),{},{userWatchList:a});case"RESET_SEARCH_RESULTS":return Object(_.a)(Object(_.a)({},e),{},{searchResults:k.searchResults});default:return e}}}),w=n(19),y=n(6),V=n.n(y),C=n(7),D=V.a.mark(K),L=V.a.mark(Y),M=V.a.mark($),N=V.a.mark(z),U=V.a.mark(X),P=V.a.mark(Z),H=V.a.mark(ee),G=V.a.mark(te),J=V.a.mark(ne),q=V.a.mark(ae),W=V.a.mark(ce),B="e5c773d40d5142e17f768f45190d5a5b",F=function(){fetch("https://api.themoviedb.org/3/authentication/token/new?api_key=".concat(B)).then((function(e){return e.json()})).then((function(e){var t=window.location,n=e.request_token;window.location="https://www.themoviedb.org/authenticate/".concat(n,"?redirect_to=").concat(t)})).catch((function(e){return console.log(e)}))},Q=function(e){var t="https://api.themoviedb.org/3/authentication/session/new?api_key=".concat(B),n=JSON.stringify({request_token:e.data});fetch(t,{method:"POST",body:n,headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){var t=e.success,n=e.session_id;t&&localStorage.setItem("vakaren_session_id",JSON.stringify({session_id:n}))})).catch((function(e){return console.log(e)}))};function K(){var e,t,n;return V.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return e=JSON.parse(localStorage.getItem("vakaren_session_id")),a.prev=1,a.next=4,fetch("https://api.themoviedb.org/3/account?api_key=".concat(B,"&session_id=").concat(e.session_id));case 4:return t=a.sent,a.next=7,t.json();case 7:return n=a.sent,a.next=10,Object(C.a)(j(n));case 10:a.next=15;break;case 12:a.prev=12,a.t0=a.catch(1),console.log(a.t0);case 15:case"end":return a.stop()}}),D,null,[[1,12]])}function Y(e){var t,n;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(B));case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.next=9,Object(C.a)(O(n));case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),L,null,[[0,11]])}function $(e){var t,n;return V.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(e.id,"?api_key=").concat(B));case 3:return t=a.sent,a.next=6,t.json();case 6:return n=a.sent,a.next=9,Object(C.a)(S(n));case 9:a.next=14;break;case 11:a.prev=11,a.t0=a.catch(0),console.log(a.t0);case 14:case"end":return a.stop()}}),M,null,[[0,11]])}function z(e){var t,n;return V.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(e.id,"/videos?api_key=").concat(B,"&language=en-US"));case 3:return t=a.sent,a.next=6,t.json();case 6:return n=a.sent,a.next=9,Object(C.a)(m(n));case 9:a.next=14;break;case 11:a.prev=11,a.t0=a.catch(0),console.log(a.t0);case 14:case"end":return a.stop()}}),N,null,[[0,11]])}function X(e){var t,n;return V.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(e.id,"/images?api_key=").concat(B,"&language=en-US&include_image_language=en,null"));case 3:return t=a.sent,a.next=6,t.json();case 6:return n=a.sent,a.next=9,Object(C.a)(g(n));case 9:a.next=14;break;case 11:a.prev=11,a.t0=a.catch(0),console.log(a.t0);case 14:case"end":return a.stop()}}),U,null,[[0,11]])}function Z(e){var t,n;return V.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(B,"&language=en-US&query=").concat(e.query,"&page=").concat(e.page,"&include_adult=false"));case 3:return t=a.sent,a.next=6,t.json();case 6:return n=a.sent,a.next=9,Object(C.a)(b(n));case 9:a.next=14;break;case 11:a.prev=11,a.t0=a.catch(0),console.log(a.t0);case 14:case"end":return a.stop()}}),P,null,[[0,11]])}function ee(){var e,t;return V.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://api.themoviedb.org/3/movie/latest?api_key=".concat(B,"&language=en-US"));case 3:return e=n.sent,n.next=6,e.json();case 6:return t=n.sent,n.next=9,Object(C.a)(v(t));case 9:n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),console.log(n.t0);case 14:case"end":return n.stop()}}),H,null,[[0,11]])}function te(e){var t,n,a,c,r,s,o,i;return V.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return t=e.accountId,n=e.movieId,a=e.listType,e.type,u.prev=1,c=JSON.parse(localStorage.getItem("vakaren_session_id")),r="https://api.themoviedb.org/3/account/".concat(t,"/").concat(a,"?api_key=").concat(B,"&session_id=").concat(c.session_id),s=JSON.stringify(Object(w.a)({media_type:"movie",media_id:n},a,!0)),u.next=7,fetch(r,{method:"POST",body:s,headers:{"Content-Type":"application/json;charset=utf-8"}});case 7:return o=u.sent,u.next=10,o.json();case 10:if(i=u.sent,!i.success){u.next=17;break}return u.next=15,Object(C.a)({type:"ADD_TO_LIST_RESPONSE",data:{movieId:n,favorited:!0}});case 15:u.next=18;break;case 17:console.log("Action failed");case 18:u.next=23;break;case 20:u.prev=20,u.t0=u.catch(1),console.log(u.t0);case 23:case"end":return u.stop()}}),G,null,[[1,20]])}function ne(e){var t,n,a,c;return V.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.accountId,n=JSON.parse(localStorage.getItem("vakaren_session_id")),r.prev=2,r.next=5,fetch("https://api.themoviedb.org/3/account/".concat(t,"/favorite/movies?api_key=").concat(B,"&language=en-US&session_id=").concat(n.session_id,"&sort_by=created_at.asc&page=1"));case 5:return a=r.sent,r.next=8,a.json();case 8:return c=r.sent,r.next=11,Object(C.a)(T(c));case 11:r.next=16;break;case 13:r.prev=13,r.t0=r.catch(2),console.log(r.t0);case 16:case"end":return r.stop()}}),J,null,[[2,13]])}function ae(e){var t,n,a,c;return V.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.accountId,n=JSON.parse(localStorage.getItem("vakaren_session_id")),r.prev=2,r.next=5,fetch("https://api.themoviedb.org/3/account/".concat(t,"/watchlist/movies?api_key=").concat(B,"&language=en-US&session_id=").concat(n.session_id,"&sort_by=created_at.asc&page=1"));case 5:return a=r.sent,r.next=8,a.json();case 8:return c=r.sent,r.next=11,Object(C.a)(x(c));case 11:r.next=16;break;case 13:r.prev=13,r.t0=r.catch(2),console.log(r.t0);case 16:case"end":return r.stop()}}),q,null,[[2,13]])}function ce(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.b)("GET_AUTH_TOKEN",F);case 2:return e.next=4,Object(C.b)("GET_POPULAR_MOVIES",Y);case 4:return e.next=6,Object(C.b)("GET_SEARCH_RESULT",Z);case 6:return e.next=8,Object(C.b)("GET_LATEST_MOVIE_SEARCH",ee);case 8:return e.next=10,Object(C.b)("REQUEST_SESSION_ID",Q);case 10:return e.next=12,Object(C.b)("GET_MOVIE_BY_ID",$);case 12:return e.next=14,Object(C.b)("GET_MOVIE_VIDEOS",z);case 14:return e.next=16,Object(C.b)("GET_MOVIE_POSTERS",X);case 16:return e.next=18,Object(C.b)("GET_ACCOUNT_DETAILS",K);case 18:return e.next=20,Object(C.b)("ADD_TO_LIST",te);case 20:return e.next=22,Object(C.b)("GET_FAV_LIST",ne);case 22:return e.next=24,Object(C.b)("GET_WATCH_LIST",ae);case 24:case"end":return e.stop()}}),W)}var re=Object(l.a)(),se=Object(p.createStore)(A,Object(E.composeWithDevTools)(Object(p.applyMiddleware)(re)));re.run(ce);var oe=n(31),ie=(n(43),n(30)),ue=n.n(ie),pe=(n(44),function(){return c.a.createElement("div",{className:"contact"},c.a.createElement("a",{href:"https://www.github.com/gokhanipek"},c.a.createElement("img",{alt:"github",className:"contact-image",src:ue.a})))}),le=Object(u.f)(Object(o.b)((function(e){return{searchResults:e.data.searchResults.results||null}}),(function(e){return Object(p.bindActionCreators)({getAuthTokenAction:d,getPopularMoviesAction:h,requestSessionId:f,getAccountDetails:I,resetSearchResults:R},e)}))((function(e){e.getAuthTokenAction;var t=e.location,n=e.searchResults,r=e.requestSessionId;e.resetSearchResults;Object(a.useEffect)((function(){var e=(t.search.includes("approved=true")?s():{}).request_token;r(e)}),[]);JSON.parse(localStorage.getItem("vakaren_session_id"));var s=function(){if(""===t.search)return null;var e=t.search.substring(1).split("&"),n={};return e.map((function(e){var t=e.split("="),a=Object(oe.a)(t,2),c=a[0],r=a[1];n[c]=r})),n};return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"home-wrapper ".concat(n.length>0?"top":"bottom")},c.a.createElement(pe,null)))}))),Ee=function(){return c.a.createElement(o.a,{store:se},c.a.createElement(i.a,null,c.a.createElement(u.c,null,c.a.createElement(u.a,{exact:!0,path:"/"},c.a.createElement(le,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(46);s.a.render(c.a.createElement(Ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.ddbfd704.chunk.js.map