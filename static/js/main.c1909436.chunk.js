(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{18:function(e,t,c){},19:function(e,t,c){},20:function(e,t,c){},23:function(e,t,c){},24:function(e,t,c){"use strict";c.r(t);var i=c(7),a=c.n(i),s=(c(17),c(12)),n=c(2),r=c(1),l=c.n(r),o=(c(18),c(19),c(20),c(0)),d=l.a.memo((function(e){var t=e.movie,c=t.imdbUrl,i=t.imgUrl,a=t.title,s=t.description;return Object(o.jsxs)("div",{className:"card","data-cy":"movieCard",children:[Object(o.jsx)("div",{className:"card-image",children:Object(o.jsx)("figure",{className:"image is-4by3",children:Object(o.jsx)("img",{"data-cy":"moviePoster",src:i,alt:"Film logo"})})}),Object(o.jsxs)("div",{className:"card-content",children:[Object(o.jsxs)("div",{className:"media",children:[Object(o.jsx)("div",{className:"media-left",children:Object(o.jsx)("figure",{className:"image is-48x48",children:Object(o.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(o.jsx)("div",{className:"media-content",children:Object(o.jsx)("p",{className:"title is-8","data-cy":"movieTitle",children:a})})]}),Object(o.jsxs)("div",{className:"content","data-cy":"movieDescription",children:[s,Object(o.jsx)("br",{}),Object(o.jsx)("a",{href:c,"data-cy":"movieURL",children:"IMDB"})]})]})]})})),j=function(e){var t=e.movies;return Object(o.jsx)("div",{className:"movies",children:t.map((function(e){return Object(o.jsx)(d,{movie:e},e.imdbId)}))})},m=c(8),b=c(6),u=c.n(b),h=(c(23),c(9)),v=c.n(h);function O(e){return fetch("".concat("https://www.omdbapi.com/?apikey=de0f1d00","&t=").concat(e)).then((function(e){return e.json()})).catch((function(){return{Response:"False",Error:"unexpected error"}}))}var x=c(10),p=c(11),f=Object(x.a)((function e(t,c,i,a,s){Object(p.a)(this,e),this.title=t,this.description=c,this.imgUrl=i,this.imdbUrl=a,this.imdbId=s})),N=function(e){var t=e.Title,c=e.Plot,i=e.Poster,a=e.imdbID,s="N/A"===i?"https://via.placeholder.com/360x270.png?text=no%20preview":i,n="https://www.imdb.com/title/".concat(a);return new f(t,c,s,n,a)},g=function(e){var t,c=e.addMovie,i=Object(r.useState)(""),a=Object(n.a)(i,2),s=a[0],l=a[1],j=Object(r.useState)(!1),b=Object(n.a)(j,2),h=b[0],x=b[1],p=Object(r.useState)(""),f=Object(n.a)(p,2),g=f[0],y=f[1],w=Object(r.useState)(null),k=Object(n.a)(w,2),I=k[0],S=k[1],C=function(){var e=Object(m.a)(u.a.mark((function e(t){var c,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),x(!0),e.next=5,O(s);case 5:if(!("Error"in(c=e.sent))){e.next=9;break}return y(c.Error),e.abrupt("return");case 9:i=N(c),S(i);case 11:return e.prev=11,x(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,,11,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("form",{className:"find-movie",onSubmit:C,children:[Object(o.jsxs)("div",{className:"field",children:[Object(o.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("input",{"data-cy":"titleField",type:"text",id:"movie-title",placeholder:"Enter a title to search",className:"input is-dander",value:s,onChange:function(e){y(""),l(e.target.value)}})}),g&&Object(o.jsx)("p",{className:"help is-danger","data-cy":"errorMessage",children:(t=g,"Movie not found!"===t?"Can't find a movie with such a title":"Unexpected error")})]}),Object(o.jsxs)("div",{className:"field is-grouped",children:[Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("button",{"data-cy":"searchButton",type:"submit",className:v()("button","is-light",{"is-loading":h}),disabled:!s.trim(),children:I?"Search again":"Find a movie"})}),I&&Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("button",{"data-cy":"addButton",type:"button",className:"button is-primary",onClick:function(){I&&(c(I),S(null),l(""))},children:"Add to the list"})})]})]}),I&&Object(o.jsxs)("div",{className:"container","data-cy":"previewContainer",children:[Object(o.jsx)("h2",{className:"title",children:"Preview"}),Object(o.jsx)(d,{movie:I})]})]})},y=function(){var e=Object(r.useState)([]),t=Object(n.a)(e,2),c=t[0],i=t[1],a=Object(r.useCallback)((function(e){c.some((function(t){return e.imdbId===t.imdbId}))||i((function(t){return[].concat(Object(s.a)(t),[e])}))}),[c]);return Object(o.jsxs)("div",{className:"page",children:[Object(o.jsx)("div",{className:"page-content",children:Object(o.jsx)(j,{movies:c})}),Object(o.jsx)("div",{className:"sidebar",children:Object(o.jsx)(g,{addMovie:a})})]})};a.a.render(Object(o.jsx)(y,{}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.c1909436.chunk.js.map