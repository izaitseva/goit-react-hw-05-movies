"use strict";(self.webpackChunkreact_homework_hw_5=self.webpackChunkreact_homework_hw_5||[]).push([[884],{82:function(n,e,t){t.d(e,{AW:function(){return s},IQ:function(){return h},Mc:function(){return d},bI:function(){return a},sQ:function(){return u},tx:function(){return l}});var r=t(243),i="https://api.themoviedb.org/3",c="c86b3c21f50eab5c7ad4f0c864f19af2",o="".concat(i,"/search/movie?api_key=").concat(c),a=function(n){return r.Z.get("".concat(o,"&query=").concat(n))},s=function(){return r.Z.get("".concat("https://api.themoviedb.org/3/movie/top_rated","?api_key=").concat(c))},d=function(n){return r.Z.get("".concat(i,"/movie/").concat(n,"?api_key=").concat(c))},u=function(n){return"".concat("https://image.tmdb.org/t/p/w500").concat(n)},l=function(n){return r.Z.get("".concat(i,"/movie/").concat(n,"/reviews?api_key=").concat(c))},h=function(n){return r.Z.get("".concat(i,"/movie/").concat(n,"/credits?api_key=").concat(c))}},884:function(n,e,t){t.r(e);var r=t(439),i=t(82),c=t(303),o=t(791),a=t(689),s=t(87),d=t(184);e.default=function(){var n=(0,a.UO)().movieId,e=(0,o.useState)(null),t=(0,r.Z)(e,2),u=t[0],l=t[1],h=(0,o.useState)(!1),v=(0,r.Z)(h,2),f=v[0],p=v[1],j=(0,o.useState)("idle"),x=(0,r.Z)(j,2),g=x[0],m=x[1],_=(0,a.s0)();if((0,o.useEffect)((function(){p(!0),m("loading"),(0,i.Mc)(n).then((function(n){var e=n.data;l(e)})).catch((function(n){m("error")})).finally((function(){p(!1)}))}),[n]),"idle"===g||f)return(0,d.jsx)(d.Fragment,{children:"Loading..."});if("error"===g)return(0,d.jsxs)("div",{children:["There was an error. Please return",(0,d.jsx)(s.rU,{to:c.H.home,children:" HOME"})]});var k=" (".concat(null===u||void 0===u?void 0:u.release_date.split("-")[0],")"),w=null===u||void 0===u?void 0:u.vote_average.toFixed(1),b=(0,i.sQ)(null===u||void 0===u?void 0:u.poster_path);return(0,d.jsxs)("div",{children:[(0,d.jsx)(s.rU,{onClick:function(){return _(-1)},children:"Go back"}),(0,d.jsxs)("div",{children:[u.poster_path?(0,d.jsx)("img",{src:b,alt:"actor's pic",width:350}):(0,d.jsx)("img",{src:"https://rb.gy/ycrvka",alt:"no pic",width:350}),(0,d.jsxs)("h2",{children:[" ",(null===u||void 0===u?void 0:u.title)+k," "]}),(0,d.jsxs)("p",{children:["User rating: ",w]}),(0,d.jsx)("h4",{children:"Overview"}),(0,d.jsx)("p",{children:null===u||void 0===u?void 0:u.overview}),(0,d.jsx)("h4",{children:"Genres"}),(0,d.jsx)("p",{children:null===u||void 0===u?void 0:u.genres.map((function(n){return n.name})).join(", ")})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{children:"Additional information"}),(0,d.jsxs)("div",{children:[(0,d.jsx)(s.rU,{to:c.H.cast,children:"Cast"}),(0,d.jsx)(s.rU,{to:c.H.reviews,children:"Reviews"})]})]}),(0,d.jsx)(o.Suspense,{fallback:(0,d.jsx)("p",{children:"Loading Page"}),children:(0,d.jsx)(a.j3,{})})]})}}}]);
//# sourceMappingURL=884.cc2202ac.chunk.js.map