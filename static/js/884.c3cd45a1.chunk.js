"use strict";(self.webpackChunkreact_homework_hw_5=self.webpackChunkreact_homework_hw_5||[]).push([[884],{82:function(n,e,t){t.d(e,{AW:function(){return s},IQ:function(){return h},Mc:function(){return d},bI:function(){return a},sQ:function(){return u},tx:function(){return l}});var i=t(243),r="https://api.themoviedb.org/3",c="c86b3c21f50eab5c7ad4f0c864f19af2",o="".concat(r,"/search/movie?api_key=").concat(c),a=function(n){return i.Z.get("".concat(o,"&query=").concat(n))},s=function(){return i.Z.get("".concat("https://api.themoviedb.org/3/movie/top_rated","?api_key=").concat(c))},d=function(n){return i.Z.get("".concat(r,"/movie/").concat(n,"?api_key=").concat(c))},u=function(n){return"".concat("https://image.tmdb.org/t/p/w500").concat(n)},l=function(n){return i.Z.get("".concat(r,"/movie/").concat(n,"/reviews?api_key=").concat(c))},h=function(n){return i.Z.get("".concat(r,"/movie/").concat(n,"/credits?api_key=").concat(c))}},884:function(n,e,t){t.r(e);var i=t(439),r=t(82),c=t(303),o=t(791),a=t(689),s=t(87),d=t(184);e.default=function(){var n,e,t=(0,a.UO)().movieId,u=(0,o.useState)(null),l=(0,i.Z)(u,2),h=l[0],v=l[1],f=(0,o.useState)(!1),p=(0,i.Z)(f,2),j=p[0],x=p[1],m=(0,o.useState)("idle"),g=(0,i.Z)(m,2),_=g[0],k=g[1],w=(0,a.TH)(),b=(0,a.s0)(),y=null!==(n=null===w||void 0===w||null===(e=w.state)||void 0===e?void 0:e.from)&&void 0!==n?n:c.H.home;if((0,o.useEffect)((function(){x(!0),k("loading"),(0,r.Mc)(t).then((function(n){var e=n.data;v(e)})).catch((function(n){k("error")})).finally((function(){x(!1)}))}),[t]),"idle"===_||j)return(0,d.jsx)(d.Fragment,{children:"Loading..."});if("error"===_)return(0,d.jsxs)("div",{children:["There was an error. Please return",(0,d.jsx)(s.rU,{to:c.H.home,children:" HOME"})]});var Z=" (".concat(null===h||void 0===h?void 0:h.release_date.split("-")[0],")"),H=null===h||void 0===h?void 0:h.vote_average.toFixed(1),U=(0,r.sQ)(null===h||void 0===h?void 0:h.poster_path);return(0,d.jsxs)("div",{children:[(0,d.jsx)("button",{onClick:function(){return b(y)},children:"Go back"}),(0,d.jsxs)("div",{children:[h.poster_path?(0,d.jsx)("img",{src:U,alt:"actor's pic",width:350}):(0,d.jsx)("img",{src:"https://rb.gy/ycrvka",alt:"no pic",width:350}),(0,d.jsxs)("h2",{children:[" ",(null===h||void 0===h?void 0:h.title)+Z," "]}),(0,d.jsxs)("p",{children:["User rating: ",H]}),(0,d.jsx)("h4",{children:"Overview"}),(0,d.jsx)("p",{children:null===h||void 0===h?void 0:h.overview}),(0,d.jsx)("h4",{children:"Genres"}),(0,d.jsx)("p",{children:null===h||void 0===h?void 0:h.genres.map((function(n){return n.name})).join(", ")})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{children:"Additional information"}),(0,d.jsxs)("div",{children:[(0,d.jsx)(s.rU,{to:c.H.cast,state:{from:y},children:"Cast"}),(0,d.jsx)(s.rU,{to:c.H.reviews,state:{from:y},children:"Reviews"})]})]}),(0,d.jsx)(o.Suspense,{fallback:(0,d.jsx)("p",{children:"Loading Page"}),children:(0,d.jsx)(a.j3,{})})]})}}}]);
//# sourceMappingURL=884.c3cd45a1.chunk.js.map