"use strict";(self.webpackChunkreact_homework_hw_5=self.webpackChunkreact_homework_hw_5||[]).push([[415,969],{958:function(t,n,c){c.d(n,{AW:function(){return a},IQ:function(){return h},Mc:function(){return f},bI:function(){return u},sQ:function(){return s},tx:function(){return d}});var e=c(243),o="https://api.themoviedb.org/3",r="c86b3c21f50eab5c7ad4f0c864f19af2",i="".concat(o,"/search/movie?api_key=").concat(r),u=function(t){return e.Z.get("".concat(i,"&query=").concat(t))},a=function(){return e.Z.get("".concat("https://api.themoviedb.org/3/movie/top_rated","?api_key=").concat(r))},f=function(t){return e.Z.get("".concat(o,"/movie/").concat(t,"?api_key=").concat(r))},s=function(t){return"".concat("https://image.tmdb.org/t/p/w500").concat(t)},d=function(t){return e.Z.get("".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(r))},h=function(t){return e.Z.get("".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(r))}},969:function(t,n,c){c.r(n),c.d(n,{default:function(){return i}});var e=c(791),o=c(689),r=c(184);function i(){var t=(0,o.s0)();return(0,e.useEffect)((function(){setTimeout((function(){t("/")}),1500)})),(0,r.jsx)("h1",{children:" Page is not found "})}},415:function(t,n,c){c.r(n),c.d(n,{default:function(){return d}});var e=c(439),o=c(958),r=c(969),i=c(303),u=c(791),a=c(87),f=c(989),s=c(184);function d(){var t=(0,u.useState)([]),n=(0,e.Z)(t,2),c=n[0],d=n[1],h=(0,u.useState)(!1),l=(0,e.Z)(h,2),v=l[0],p=l[1];return(0,u.useEffect)((function(){(0,o.AW)().then((function(t){var n=t.data;d(n.results)})).catch((function(){p(!0)}))}),[]),(0,s.jsxs)("div",{children:[v&&(0,s.jsx)(r.default,{}),(0,s.jsx)("h2",{children:"Trending Today"}),(0,s.jsx)("ul",{children:c.map((function(t){var n;return(0,s.jsx)("li",{children:(0,s.jsx)(a.rU,{to:(0,f.Gn)(i.H.movieDetails,{movieId:t.id}),children:null!==(n=t.title)&&void 0!==n?n:t.original_title})},t.id)}))})]})}}}]);
//# sourceMappingURL=415.6112008c.chunk.js.map