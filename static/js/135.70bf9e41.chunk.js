"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[135],{240:function(t,e,r){r.d(e,{Df:function(){return s},M1:function(){return p},Pg:function(){return o},gH:function(){return i},tx:function(){return f}});var n=r(861),a=r(757),c=r.n(a),u=r(912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"9c2333b586e6b509eeb062d943ee4684"}}),s=function(){var t=(0,n.Z)(c().mark((function t(){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/trending/movie/day");case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(c().mark((function t(){var e,r,n,a=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:"",t.next=3,u.get("/search/movie",{params:{query:e}});case 3:return r=t.sent,n=r.data,t.abrupt("return",n);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/movie/".concat(e));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/movie/".concat(e,"/credits"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/movie/".concat(e,"/reviews"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},135:function(t,e,r){r.r(e),r.d(e,{default:function(){return d}});var n=r(861),a=r(439),c=r(757),u=r.n(c),s=r(686),i=r.n(s),o=r(791),p=r(689),f=r(240),v="cast_castList__xGPn0",h=r(184),d=function(){var t=(0,p.UO)().id,e=(0,o.useState)([]),r=(0,a.Z)(e,2),c=r[0],s=r[1];(0,o.useEffect)((function(){var e=function(){var e=(0,n.Z)(u().mark((function e(){var r,n,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.M1)(t);case 3:r=e.sent,n=r.cast,s(n),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),a=e.t0.response,console.log(a.data.message),i().Notify.failure("".concat(a.data.message),{timeout:5e3});case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]);var d=c.map((function(t){var e=t.id,r=t.name,n=t.profile_path,a=t.character;return(0,h.jsxs)("li",{children:[null!==n?(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(n),alt:"poster",width:"200"}):"No image",(0,h.jsx)("p",{children:r}),(0,h.jsx)("p",{children:a})]},e)}));return(0,h.jsx)(h.Fragment,{children:d.length>0?(0,h.jsx)("ul",{className:v,children:d}):(0,h.jsx)("p",{children:"Sorry, we don't have any cast for this movie."})})}}}]);
//# sourceMappingURL=135.70bf9e41.chunk.js.map