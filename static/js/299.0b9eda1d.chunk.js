"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[299],{299:function(t,n,e){e.r(n);var c=e(861),r=e(439),i=e(757),o=e.n(i),a=e(82),u=e(791),s=e(689),f=e(184);n.default=function(){var t=(0,s.UO)().movieId,n=(0,u.useState)([]),e=(0,r.Z)(n,2),i=e[0],v=e[1],d=(0,u.useState)(!1),p=(0,r.Z)(d,2),h=p[0],l=p[1],m=(0,u.useState)(!1),_=(0,r.Z)(m,2),g=_[0],x=_[1];return(0,u.useEffect)((function(){var n=function(){var n=(0,c.Z)(o().mark((function n(){var e,c;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,l(!0),n.next=4,(0,a.tx)(t);case 4:e=n.sent,c=e.data.results,v(c),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),x(!0);case 12:return n.prev=12,l(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})));return function(){return n.apply(this,arguments)}}();n()}),[t]),(0,f.jsxs)("div",{children:[g&&(0,f.jsx)("p",{children:"There are no reviews..."}),h&&(0,f.jsx)("p",{children:"Please wait..."}),(0,f.jsx)("ul",{children:null===i||void 0===i?void 0:i.map((function(t){return(0,f.jsxs)("li",{children:[(0,f.jsxs)("h4",{children:["Author: ",null===t||void 0===t?void 0:t.author_details.username," "]}),(0,f.jsx)("p",{children:null===t||void 0===t?void 0:t.content})]},t.id)}))})]})}},82:function(t,n,e){e.d(n,{AW:function(){return u},IQ:function(){return d},Pg:function(){return s},bI:function(){return a},sQ:function(){return f},tx:function(){return v}});var c=e(243),r="https://api.themoviedb.org/3",i="c86b3c21f50eab5c7ad4f0c864f19af2",o="".concat(r,"/search/movie?api_key=").concat(i),a=function(t){return c.Z.get("".concat(o,"&query=").concat(t))},u=function(){return c.Z.get("".concat("https://api.themoviedb.org/3/movie/top_rated","?api_key=").concat(i))},s=function(t){return c.Z.get("".concat(r,"/movie/").concat(t,"?api_key=").concat(i))},f=function(t){return"".concat("https://image.tmdb.org/t/p/w500").concat(t)},v=function(t){return c.Z.get("".concat(r,"/movie/").concat(t,"/reviews?api_key=").concat(i))},d=function(t){return c.Z.get("".concat(r,"/movie/").concat(t,"/credits?api_key=").concat(i))}}}]);
//# sourceMappingURL=299.0b9eda1d.chunk.js.map