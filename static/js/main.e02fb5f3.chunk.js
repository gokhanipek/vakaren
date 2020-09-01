(this.webpackJsonpvakaren=this.webpackJsonpvakaren||[]).push([[0],{31:function(e,t,n){e.exports=n(43)},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(16),s=n.n(r),o=n(29),i=n(28),u=n(8),p=n(13),E=n(30),_=n(27),l=n(5),d=function(e){return{type:"RECEIVE_POPULAR_MOVIES",data:e}},O=function(e){return{type:"RECEIVE_MOVIE_SEARCH",data:e}},b=function(e){return{type:"RECEIVE_LATEST_MOVIE_SEARCH",data:e}},v=function(e){return{type:"RECEIVE_MOVIE_BY_ID",data:e}},h=function(e){return{type:"RECEIVE_MOVIE_VIDEOS",data:e}},f=function(e){return{type:"RECEIVE_MOVIE_POSTERS",data:e}},j=function(e){return{type:"RECEIVE_ACCOUNT_DETAILS",data:e}},I=function(e){return{type:"RECEIVE_FAV_LIST",data:e}},S=function(e){return{type:"RECEIVE_WATCH_LIST",data:e}},m={apiToken:{},searchResults:{results:[]},searchHasResults:!1,isAuthenticated:!1,movieDetails:{},movieVideos:{},moviePosters:{},accountDetails:{}},x=Object(p.combineReducers)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.data;switch(n){case"RECEIVE_REQUEST_TOKEN":return Object(l.a)(Object(l.a)({},e),{},{apiToken:a});case"RECEIVE_POPULAR_MOVIES":return Object(l.a)(Object(l.a)({},e),{},{popularMovies:a});case"RECEIVE_MOVIE_SEARCH":return Object(l.a)(Object(l.a)({},e),{},{searchResults:a});case"RECEIVE_LATEST_MOVIE_SEARCH":return Object(l.a)(Object(l.a)({},e),{},{latestMovieResultId:a.id});case"REQUEST_SESSION_ID":return Object(l.a)(Object(l.a)({},e),{},{isAuthenticated:!!a});case"RECEIVE_MOVIE_BY_ID":return Object(l.a)(Object(l.a)({},e),{},{movieDetails:a});case"ADD_TO_LIST_RESPONSE":return Object(l.a)(Object(l.a)({},e),{},{favoriteMovies:Object(l.a)(Object(l.a)({},e.favoriteMovies),{},{data:a})});case"RECEIVE_API_DATA":return Object(l.a)(Object(l.a)({},e),{},{movieDetails:a});case"RECEIVE_MOVIE_VIDEOS":return Object(l.a)(Object(l.a)({},e),{},{movieVideos:a});case"RECEIVE_MOVIE_POSTERS":return Object(l.a)(Object(l.a)({},e),{},{moviePosters:a});case"RECEIVE_ACCOUNT_DETAILS":return Object(l.a)(Object(l.a)({},e),{},{accountDetails:a});case"RECEIVE_FAV_LIST":return Object(l.a)(Object(l.a)({},e),{},{userFavList:a});case"RECEIVE_WATCH_LIST":return Object(l.a)(Object(l.a)({},e),{},{userWatchList:a});case"RESET_SEARCH_RESULTS":return Object(l.a)(Object(l.a)({},e),{},{searchResults:m.searchResults});default:return e}}}),g=n(19),T=n(6),k=n.n(T),R=n(7),V=k.a.mark(W),w=k.a.mark(B),y=k.a.mark(q),C=k.a.mark(F),A=k.a.mark(Q),D=k.a.mark(Y),L=k.a.mark(K),M=k.a.mark($),U=k.a.mark(z),N=k.a.mark(X),P=k.a.mark(Z),H="e5c773d40d5142e17f768f45190d5a5b",G=function(){fetch("https://api.themoviedb.org/3/authentication/token/new?api_key=".concat(H)).then((function(e){return e.json()})).then((function(e){var t=window.location,n=e.request_token;window.location="https://www.themoviedb.org/authenticate/".concat(n,"?redirect_to=").concat(t)})).catch((function(e){return console.log(e)}))},J=function(e){var t="https://api.themoviedb.org/3/authentication/session/new?api_key=".concat(H),n=JSON.stringify({request_token:e.data});fetch(t,{method:"POST",body:n,headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){var t=e.success,n=e.session_id;t&&localStorage.setItem("vakaren_session_id",JSON.stringify({session_id:n}))})).catch((function(e){return console.log(e)}))};function W(){var e,t,n;return k.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return e=JSON.parse(localStorage.getItem("vakaren_session_id")),a.prev=1,a.next=4,fetch("https://api.themoviedb.org/3/account?api_key=".concat(H,"&session_id=").concat(e.session_id));case 4:return t=a.sent,a.next=7,t.json();case 7:return n=a.sent,a.next=10,Object(R.a)(j(n));case 10:a.next=15;break;case 12:a.prev=12,a.t0=a.catch(1),console.log(a.t0);case 15:case"end":return a.stop()}}),V,null,[[1,12]])}function B(e){var t,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(H));case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.next=9,Object(R.a)(d(n));case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),w,null,[[0,11]])}function q(e){var t,n;return k.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(e.id,"?api_key=").concat(H));case 3:return t=a.sent,a.next=6,t.json();case 6:return n=a.sent,a.next=9,Object(R.a)(v(n));case 9:a.next=14;break;case 11:a.prev=11,a.t0=a.catch(0),console.log(a.t0);case 14:case"end":return a.stop()}}),y,null,[[0,11]])}function F(e){var t,n;return k.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(e.id,"/videos?api_key=").concat(H,"&language=en-US"));case 3:return t=a.sent,a.next=6,t.json();case 6:return n=a.sent,a.next=9,Object(R.a)(h(n));case 9:a.next=14;break;case 11:a.prev=11,a.t0=a.catch(0),console.log(a.t0);case 14:case"end":return a.stop()}}),C,null,[[0,11]])}function Q(e){var t,n;return k.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(e.id,"/images?api_key=").concat(H,"&language=en-US&include_image_language=en,null"));case 3:return t=a.sent,a.next=6,t.json();case 6:return n=a.sent,a.next=9,Object(R.a)(f(n));case 9:a.next=14;break;case 11:a.prev=11,a.t0=a.catch(0),console.log(a.t0);case 14:case"end":return a.stop()}}),A,null,[[0,11]])}function Y(e){var t,n;return k.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(H,"&language=en-US&query=").concat(e.query,"&page=").concat(e.page,"&include_adult=false"));case 3:return t=a.sent,a.next=6,t.json();case 6:return n=a.sent,a.next=9,Object(R.a)(O(n));case 9:a.next=14;break;case 11:a.prev=11,a.t0=a.catch(0),console.log(a.t0);case 14:case"end":return a.stop()}}),D,null,[[0,11]])}function K(){var e,t;return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://api.themoviedb.org/3/movie/latest?api_key=".concat(H,"&language=en-US"));case 3:return e=n.sent,n.next=6,e.json();case 6:return t=n.sent,n.next=9,Object(R.a)(b(t));case 9:n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),console.log(n.t0);case 14:case"end":return n.stop()}}),L,null,[[0,11]])}function $(e){var t,n,a,c,r,s,o,i;return k.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return t=e.accountId,n=e.movieId,a=e.listType,e.type,u.prev=1,c=JSON.parse(localStorage.getItem("vakaren_session_id")),r="https://api.themoviedb.org/3/account/".concat(t,"/").concat(a,"?api_key=").concat(H,"&session_id=").concat(c.session_id),s=JSON.stringify(Object(g.a)({media_type:"movie",media_id:n},a,!0)),u.next=7,fetch(r,{method:"POST",body:s,headers:{"Content-Type":"application/json;charset=utf-8"}});case 7:return o=u.sent,u.next=10,o.json();case 10:if(i=u.sent,!i.success){u.next=17;break}return u.next=15,Object(R.a)({type:"ADD_TO_LIST_RESPONSE",data:{movieId:n,favorited:!0}});case 15:u.next=18;break;case 17:console.log("Action failed");case 18:u.next=23;break;case 20:u.prev=20,u.t0=u.catch(1),console.log(u.t0);case 23:case"end":return u.stop()}}),M,null,[[1,20]])}function z(e){var t,n,a,c;return k.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.accountId,n=JSON.parse(localStorage.getItem("vakaren_session_id")),r.prev=2,r.next=5,fetch("https://api.themoviedb.org/3/account/".concat(t,"/favorite/movies?api_key=").concat(H,"&language=en-US&session_id=").concat(n.session_id,"&sort_by=created_at.asc&page=1"));case 5:return a=r.sent,r.next=8,a.json();case 8:return c=r.sent,r.next=11,Object(R.a)(I(c));case 11:r.next=16;break;case 13:r.prev=13,r.t0=r.catch(2),console.log(r.t0);case 16:case"end":return r.stop()}}),U,null,[[2,13]])}function X(e){var t,n,a,c;return k.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.accountId,n=JSON.parse(localStorage.getItem("vakaren_session_id")),r.prev=2,r.next=5,fetch("https://api.themoviedb.org/3/account/".concat(t,"/watchlist/movies?api_key=").concat(H,"&language=en-US&session_id=").concat(n.session_id,"&sort_by=created_at.asc&page=1"));case 5:return a=r.sent,r.next=8,a.json();case 8:return c=r.sent,r.next=11,Object(R.a)(S(c));case 11:r.next=16;break;case 13:r.prev=13,r.t0=r.catch(2),console.log(r.t0);case 16:case"end":return r.stop()}}),N,null,[[2,13]])}function Z(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(R.b)("GET_AUTH_TOKEN",G);case 2:return e.next=4,Object(R.b)("GET_POPULAR_MOVIES",B);case 4:return e.next=6,Object(R.b)("GET_SEARCH_RESULT",Y);case 6:return e.next=8,Object(R.b)("GET_LATEST_MOVIE_SEARCH",K);case 8:return e.next=10,Object(R.b)("REQUEST_SESSION_ID",J);case 10:return e.next=12,Object(R.b)("GET_MOVIE_BY_ID",q);case 12:return e.next=14,Object(R.b)("GET_MOVIE_VIDEOS",F);case 14:return e.next=16,Object(R.b)("GET_MOVIE_POSTERS",Q);case 16:return e.next=18,Object(R.b)("GET_ACCOUNT_DETAILS",W);case 18:return e.next=20,Object(R.b)("ADD_TO_LIST",$);case 20:return e.next=22,Object(R.b)("GET_FAV_LIST",z);case 22:return e.next=24,Object(R.b)("GET_WATCH_LIST",X);case 24:case"end":return e.stop()}}),P)}var ee=Object(E.a)(),te=Object(p.createStore)(x,Object(_.composeWithDevTools)(Object(p.applyMiddleware)(ee)));ee.run(Z);var ne=function(){return c.a.createElement(o.a,{store:te},c.a.createElement(i.a,null,c.a.createElement(u.c,null,c.a.createElement(u.a,{exact:!0,path:"/"},c.a.createElement("h1",null,"Hello")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(42);s.a.render(c.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.e02fb5f3.chunk.js.map