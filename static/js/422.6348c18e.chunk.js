"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[422],{422:(e,s,a)=>{a.r(s),a.d(s,{default:()=>d});var i=a(791),t=a(689),c=a(87);const n={container:"MovieDetails_container__Ys+c9",mainDiv:"MovieDetails_mainDiv__mnn5F",poster:"MovieDetails_poster__yO7gD",posterPlaceholder:"MovieDetails_posterPlaceholder__XKKLE",info:"MovieDetails_info__qv2SI",linkBox:"MovieDetails_linkBox__W4fcK",backLink:"MovieDetails_backLink__dzd-p",link:"MovieDetails_link__U+v+7"};var o=a(184);const l=(0,i.lazy)((()=>a.e(76).then(a.bind(a,76)))),r=(0,i.lazy)((()=>a.e(866).then(a.bind(a,866)))),d=()=>{var e;const[s,a]=(0,i.useState)(null),{movieId:d}=(0,t.UO)(),h=(0,t.TH)(),v=(0,t.s0)();(0,i.useEffect)((()=>{(async()=>{try{const e=await(async e=>{const s="".concat("https://api.themoviedb.org/3","/movie/").concat(e,"?api_key=").concat("6ec0ba8fa041ffdfd513a6b00a854a64");try{const e=await fetch(s);return await e.json()}catch(a){throw console.error("Error fetching movie details:",a),a}})(d);a(e)}catch(e){console.error("Error fetching movie details:",e)}})()}),[d]);const m=s?s.release_date.slice(0,4):"";return(0,o.jsxs)("div",{className:n.container,children:[(0,o.jsx)(c.rU,{to:"/"===(null===(e=h.state)||void 0===e?void 0:e.from)?"/":"/movies",className:n.backLink,onClick:()=>v(-1),children:"Go back"}),s&&(0,o.jsxs)("div",{className:n.mainDiv,children:[(0,o.jsx)("div",{className:n.posterPlaceholder,children:s.poster_path?(0,o.jsx)("img",{className:n.poster,src:"https://image.tmdb.org/t/p/w500".concat(s.poster_path),alt:s.title,height:"440px"}):(0,o.jsx)("div",{className:n.placeholderText,children:"No Poster Available"})}),(0,o.jsxs)("div",{className:n.info,children:[(0,o.jsx)("h1",{children:"".concat(s.title," (").concat(m,")")}),(0,o.jsxs)("p",{children:["User Score: ",s.vote_average]}),(0,o.jsx)("h2",{children:"Overview"}),(0,o.jsx)("p",{children:s.overview}),(0,o.jsx)("h2",{children:"Genres"}),s.genres&&(0,o.jsx)("ul",{children:s.genres.map((e=>(0,o.jsx)("li",{children:e.name},e.id)))})]})]}),(0,o.jsxs)("div",{className:n.linkBox,children:[(0,o.jsx)(c.rU,{className:n.link,to:"/movies/".concat(d,"/cast"),children:"Cast"}),(0,o.jsx)(c.rU,{className:n.link,to:"/movies/".concat(d,"/reviews"),children:"Reviews"})]}),(0,o.jsx)(i.Suspense,{fallback:(0,o.jsx)("div",{children:"Loading..."}),children:(0,o.jsxs)(t.Z5,{children:[(0,o.jsx)(t.AW,{path:"/",element:(0,o.jsx)(t.j3,{})}),(0,o.jsx)(t.AW,{path:"cast",element:(0,o.jsx)(l,{movieId:d})}),(0,o.jsx)(t.AW,{path:"reviews",element:(0,o.jsx)(r,{})})]})})]})}}}]);
//# sourceMappingURL=422.6348c18e.chunk.js.map