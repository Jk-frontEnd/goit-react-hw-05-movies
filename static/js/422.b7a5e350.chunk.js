"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[422],{422:(e,s,i)=>{i.r(s),i.d(s,{default:()=>h});var a=i(791),t=i(689),n=i(87);const l={container:"MovieDetails_container__Ys+c9",mainDiv:"MovieDetails_mainDiv__mnn5F",poster:"MovieDetails_poster__yO7gD",posterPlaceholder:"MovieDetails_posterPlaceholder__XKKLE",info:"MovieDetails_info__qv2SI",linkBox:"MovieDetails_linkBox__W4fcK",link:"MovieDetails_link__U+v+7"};var c=i(184);const o=(0,a.lazy)((()=>i.e(76).then(i.bind(i,76)))),r=(0,a.lazy)((()=>i.e(168).then(i.bind(i,168)))),d=(0,a.lazy)((()=>i.e(906).then(i.bind(i,906)))),h=()=>{var e,s;const[i,h]=(0,a.useState)(null),{movieId:v}=(0,t.UO)(),x=(0,t.TH)(),m=(0,t.s0)();(0,a.useEffect)((()=>{(async()=>{try{const e=await(async e=>{const s="".concat("https://api.themoviedb.org/3","/movie/").concat(e,"?api_key=").concat("6ec0ba8fa041ffdfd513a6b00a854a64");try{const e=await fetch(s);return await e.json()}catch(i){throw console.error("Error fetching movie details:",i),i}})(v);h(e)}catch(e){console.error("Error fetching movie details:",e)}})()}),[v]),console.log(x),(0,a.useEffect)((()=>{x.state&&m(x.state.previousUrl)}),[x.state,m]);const p=i?null===(e=i.release_date)||void 0===e?void 0:e.slice(0,4):"";return(0,c.jsxs)("div",{className:l.container,children:[(0,c.jsx)(a.Suspense,{fallback:(0,c.jsx)("div",{children:"Loading..."}),children:(0,c.jsx)(d,{to:(null===(s=x.state)||void 0===s?void 0:s.previousUrl)||"/",children:"Go back"})}),i&&(0,c.jsxs)("div",{className:l.mainDiv,children:[(0,c.jsx)("div",{className:l.posterPlaceholder,children:i.poster_path?(0,c.jsx)("img",{className:l.poster,src:"https://image.tmdb.org/t/p/w500".concat(i.poster_path),alt:i.title,height:"440px"}):(0,c.jsx)("div",{className:l.placeholderText,children:"No Poster Available"})}),(0,c.jsxs)("div",{className:l.info,children:[(0,c.jsx)("h1",{children:"".concat(i.title," (").concat(p,")")}),(0,c.jsxs)("p",{children:["User Score: ",i.vote_average]}),(0,c.jsx)("h2",{children:"Overview"}),(0,c.jsx)("p",{children:i.overview}),(0,c.jsx)("h2",{children:"Genres"}),i.genres&&i.genres.length>0?(0,c.jsx)("ul",{children:i.genres.map((e=>(0,c.jsx)("li",{children:e.name},e.id)))}):(0,c.jsxs)("p",{children:["Oops! ",(0,c.jsx)("br",{})," No genres assigned for this movie."]})]})]}),(0,c.jsxs)("div",{className:l.linkBox,children:[(0,c.jsx)(n.rU,{className:l.link,to:"/movies/".concat(v,"/cast"),children:"Cast"}),(0,c.jsx)(n.rU,{className:l.link,to:"/movies/".concat(v,"/reviews"),children:"Reviews"})]}),(0,c.jsx)(a.Suspense,{fallback:(0,c.jsx)("div",{children:"Loading..."}),children:(0,c.jsxs)(t.Z5,{children:[(0,c.jsx)(t.AW,{path:"/",element:(0,c.jsx)(t.j3,{})}),(0,c.jsx)(t.AW,{path:"cast",element:(0,c.jsx)(o,{movieId:v})}),(0,c.jsx)(t.AW,{path:"reviews",element:(0,c.jsx)(r,{})})]})})]})}}}]);
//# sourceMappingURL=422.b7a5e350.chunk.js.map