"use strict";(self.webpackChunkreact_homework_hw_5=self.webpackChunkreact_homework_hw_5||[]).push([[134,969],{958:function(t,n,e){e.d(n,{AW:function(){return a},IQ:function(){return l},Mc:function(){return f},bI:function(){return u},sQ:function(){return s},tx:function(){return d}});var c=e(243),i="https://api.themoviedb.org/3",r="c86b3c21f50eab5c7ad4f0c864f19af2",o="".concat(i,"/search/movie?api_key=").concat(r),u=function(t){return c.Z.get("".concat(o,"&query=").concat(t))},a=function(){return c.Z.get("".concat("https://api.themoviedb.org/3/movie/top_rated","?api_key=").concat(r))},f=function(t){return c.Z.get("".concat(i,"/movie/").concat(t,"?api_key=").concat(r))},s=function(t){return"".concat("https://image.tmdb.org/t/p/w500").concat(t)},d=function(t){return c.Z.get("".concat(i,"/movie/").concat(t,"/reviews?api_key=").concat(r))},l=function(t){return c.Z.get("".concat(i,"/movie/").concat(t,"/credits?api_key=").concat(r))}},969:function(t,n,e){e.r(n),e.d(n,{default:function(){return o}});var c=e(791),i=e(689),r=e(184);function o(){var t=(0,i.s0)();return(0,c.useEffect)((function(){setTimeout((function(){t("/")}),1750)})),(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:" Page is not found "}),(0,r.jsx)("img",{src:"https://i.pinimg.com/originals/11/dc/96/11dc96d2e4daca3ea8ff6aa41299b5e1.gif",alt:"what?"})]})}},134:function(t,n,e){e.r(n),e.d(n,{default:function(){return d}});var c=e(439),i=e(958),r=e(969),o=e(303),u=e(791),a=e(87),f=e(989),s=e(184);function d(){var t=(0,a.lr)({query:""}),n=(0,c.Z)(t,2),e=n[0],d=n[1],l=(0,u.useState)([]),h=(0,c.Z)(l,2),v=h[0],m=h[1],p=(0,u.useState)(""),g=(0,c.Z)(p,2),b=g[0],x=g[1],_=(0,u.useState)(!1),j=(0,c.Z)(_,2),k=j[0],y=j[1],w=e.get("query");return(0,u.useEffect)((function(){(0,i.bI)(w).then((function(t){var n=t.data.results;console.log(n),m(n)})).catch((function(){y(!0)}))}),[w]),(0,s.jsx)("div",{children:(0,s.jsxs)("div",{children:[k&&(0,s.jsx)(r.default,{}),(0,s.jsxs)("form",{onSubmit:function(t){t.preventDefault(),""!==b.trim()&&d({query:b})},children:[(0,s.jsx)("input",{placeholder:"Let's find a movie for you",onChange:function(t){var n=t.target.value.toLowerCase();x(n)},value:b}),(0,s.jsx)("button",{type:"submit",children:"Search"})]}),(0,s.jsx)("ul",{children:v.map((function(t){var n;return(0,s.jsx)("li",{children:(0,s.jsx)(a.rU,{to:(0,f.Gn)(o.H.movieDetails,{movieId:t.id}),children:null!==(n=t.title)&&void 0!==n?n:t.original_title})},t.id)}))})]})})}}}]);
//# sourceMappingURL=134.1dfde3b3.chunk.js.map