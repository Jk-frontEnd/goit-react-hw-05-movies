"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[881],{881:(e,s,t)=>{t.r(s),t.d(s,{Movies:()=>l});var a=t(791);const r={MoviesBox:"Movies_MoviesBox__jPCE3",form:"Movies_form__4ow+Z",input:"Movies_input__KrUqs",btn:"Movies_btn__TlfBQ",link:"Movies_link__MzAfU",item:"Movies_item__Ba4aJ"};var o=t(689),c=t(87),i=t(184);const l=()=>{const[e,s]=(0,a.useState)(""),[t,l]=(0,a.useState)([]),[n]=(0,a.useState)("6ec0ba8fa041ffdfd513a6b00a854a64"),[u,h]=(0,a.useState)(!1),[m,_]=(0,a.useState)(null),v=(0,o.s0)(),d=(0,o.TH)();console.log(d);const f=(0,a.useCallback)((async e=>{const s="https://api.themoviedb.org/3/search/movie?query=".concat(e,"&api_key=").concat(n);try{h(!0);const e=await fetch(s),t=await e.json();e.ok?(l(t.results),_(null)):(_("Failed to fetch search results"),l([]))}catch(m){console.error("Error fetching search results:",m),_("Failed to fetch search results"),l([])}finally{h(!1)}}),[n]);return(0,i.jsxs)("div",{className:r.MoviesBox,children:[(0,i.jsxs)("form",{className:r.form,onSubmit:async s=>{if(s.preventDefault(),""!==e.trim())try{localStorage.setItem("searchQuery",e),await f(e),v("/movies?query=".concat(e))}catch(m){console.error("Error during search:",m)}},children:[(0,i.jsx)("input",{className:r.input,onChange:e=>{s(e.target.value)},type:"text",value:e}),(0,i.jsx)("button",{className:r.btn,type:"submit",children:"Search"})]}),u&&(0,i.jsx)("p",{children:"Loading..."}),m&&(0,i.jsxs)("p",{children:["Error: ",m]}),t.length>0&&(0,i.jsx)("ul",{className:r.searchResults,children:t.map((e=>(0,i.jsx)("li",{className:r.item,children:e.original_title&&(0,i.jsx)(c.rU,{className:r.link,to:"/movies/".concat(e.id),children:e.original_title})},e.id)))})]})}}}]);
//# sourceMappingURL=881.c414006c.chunk.js.map