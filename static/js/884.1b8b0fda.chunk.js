"use strict";(self.webpackChunkreact_homework_hw_5=self.webpackChunkreact_homework_hw_5||[]).push([[884],{82:function(n,e,t){t.d(e,{AW:function(){return s},IQ:function(){return v},Pg:function(){return u},bI:function(){return a},sQ:function(){return d},tx:function(){return l}});var r=t(243),i="https://api.themoviedb.org/3",c="c86b3c21f50eab5c7ad4f0c864f19af2",o="".concat(i,"/search/movie?api_key=").concat(c),a=function(n){return r.Z.get("".concat(o,"&query=").concat(n))},s=function(){return r.Z.get("".concat("https://api.themoviedb.org/3/movie/top_rated","?api_key=").concat(c))},u=function(n){return r.Z.get("".concat(i,"/movie/").concat(n,"?api_key=").concat(c))},d=function(n){return"".concat("https://image.tmdb.org/t/p/w500").concat(n)},l=function(n){return r.Z.get("".concat(i,"/movie/").concat(n,"/reviews?api_key=").concat(c))},v=function(n){return r.Z.get("".concat(i,"/movie/").concat(n,"/credits?api_key=").concat(c))}},884:function(n,e,t){t.r(e);var r=t(861),i=t(439),c=t(757),o=t.n(c),a=t(82),s=t(303),u=t(791),d=t(689),l=t(87),v=t(184);e.default=function(){var n,e,t=(0,d.UO)().movieId,c=(0,u.useState)(null),h=(0,i.Z)(c,2),f=h[0],p=h[1],x=(0,u.useState)(!1),m=(0,i.Z)(x,2),j=m[0],g=m[1],w=(0,u.useState)(!1),k=(0,i.Z)(w,2),_=k[0],b=k[1],y=(0,d.TH)(),Z=(0,d.s0)(),H=null!==(n=null===y||void 0===y||null===(e=y.state)||void 0===e?void 0:e.from)&&void 0!==n?n:s.H.home;if((0,u.useEffect)((function(){var n=function(){var n=(0,r.Z)(o().mark((function n(){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,g(!0),n.next=4,(0,a.Pg)(t);case 4:e=n.sent,r=e.data,p(r),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),b(!0);case 12:return n.prev=12,g(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})));return function(){return n.apply(this,arguments)}}();n()}),[t]),j)return(0,v.jsx)(v.Fragment,{children:"Loading..."});if(_)return(0,v.jsxs)("div",{children:["There was an error. Please return",(0,v.jsx)(l.rU,{to:s.H.home,children:"HOME"})]});var P=" (".concat(null===f||void 0===f?void 0:f.release_date.split("-")[0],")"),U=null===f||void 0===f?void 0:f.vote_average.toFixed(1),C=(0,a.sQ)(null===f||void 0===f?void 0:f.poster_path);return(0,v.jsxs)("div",{children:[(0,v.jsx)("button",{onClick:function(){return Z(H)},children:"Go back"}),(0,v.jsxs)("div",{children:[null!==f&&void 0!==f&&f.poster_path?(0,v.jsx)("img",{src:C,alt:"actor's pic",width:350}):(0,v.jsx)("img",{src:"https://rb.gy/ycrvka",alt:"no pic",width:350}),(0,v.jsxs)("h2",{children:[" ",(null===f||void 0===f?void 0:f.title)+P," "]}),(0,v.jsxs)("p",{children:["User rating: ",U]}),(0,v.jsx)("h4",{children:"Overview"}),(0,v.jsx)("p",{children:null===f||void 0===f?void 0:f.overview}),(0,v.jsx)("h4",{children:"Genres"}),(0,v.jsx)("p",{children:null===f||void 0===f?void 0:f.genres.map((function(n){return n.name})).join(", ")})]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("p",{children:"Additional information"}),(0,v.jsxs)("div",{children:[(0,v.jsx)(l.rU,{to:s.H.cast,state:{from:H},children:"Cast"}),(0,v.jsx)(l.rU,{to:s.H.reviews,state:{from:H},children:"Reviews"})]})]}),(0,v.jsx)(u.Suspense,{fallback:(0,v.jsx)("p",{children:"Loading Page"}),children:(0,v.jsx)(d.j3,{})})]})}},861:function(n,e,t){function r(n,e,t,r,i,c,o){try{var a=n[c](o),s=a.value}catch(u){return void t(u)}a.done?e(s):Promise.resolve(s).then(r,i)}function i(n){return function(){var e=this,t=arguments;return new Promise((function(i,c){var o=n.apply(e,t);function a(n){r(o,i,c,a,s,"next",n)}function s(n){r(o,i,c,a,s,"throw",n)}a(void 0)}))}}t.d(e,{Z:function(){return i}})}}]);
//# sourceMappingURL=884.1b8b0fda.chunk.js.map