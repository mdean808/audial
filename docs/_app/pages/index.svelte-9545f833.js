import{S as x,i as E,s as I,e as _,c as d,a as $,d as m,g,o as f,p as T,q as u,K as y,v as D,n as G,w as k,k as V,x as v,m as q,b as w,H as F,y as b,B as h,E as L}from"../chunks/index-3e5c58ca.js";import{G as S,F as B,L as C}from"../chunks/LoadingIndicator-931afec2.js";import{l as H,a as K}from"../chunks/store-394a188d.js";import{l as M}from"../chunks/util-cd1c5341.js";import"../chunks/stores-051684e8.js";import"../chunks/Button-007fe1e2.js";import"../chunks/index-f751c6c9.js";function R(c){let a,t,e,s,o,i;return e=new S({props:{custom:!1,random:!1,$allTracks:c[1]}}),o=new B({props:{custom:!1}}),{c(){a=_("div"),t=_("div"),k(e.$$.fragment),s=V(),k(o.$$.fragment),this.h()},l(n){a=d(n,"DIV",{class:!0});var r=$(a);t=d(r,"DIV",{class:!0});var l=$(t);v(e.$$.fragment,l),l.forEach(m),r.forEach(m),s=q(n),v(o.$$.fragment,n),this.h()},h(){w(t,"class","text-center p-3"),w(a,"class","max-w-screen-md mx-auto")},m(n,r){g(n,a,r),F(a,t),b(e,t,null),g(n,s,r),b(o,n,r),i=!0},p(n,r){const l={};r&2&&(l.$allTracks=n[1]),e.$set(l)},i(n){i||(u(e.$$.fragment,n),u(o.$$.fragment,n),i=!0)},o(n){f(e.$$.fragment,n),f(o.$$.fragment,n),i=!1},d(n){n&&m(a),h(e),n&&m(s),h(o,n)}}}function j(c){let a,t;return a=new C({}),{c(){k(a.$$.fragment)},l(e){v(a.$$.fragment,e)},m(e,s){b(a,e,s),t=!0},p:L,i(e){t||(u(a.$$.fragment,e),t=!0)},o(e){f(a.$$.fragment,e),t=!1},d(e){h(a,e)}}}function z(c){let a,t,e,s;const o=[j,R],i=[];function n(r,l){return r[0]?0:1}return t=n(c),e=i[t]=o[t](c),{c(){a=_("div"),e.c()},l(r){a=d(r,"DIV",{});var l=$(a);e.l(l),l.forEach(m)},m(r,l){g(r,a,l),i[t].m(a,null),s=!0},p(r,[l]){let p=t;t=n(r),t===p?i[t].p(r,l):(G(),f(i[p],1,1,()=>{i[p]=null}),T(),e=i[t],e?e.p(r,l):(e=i[t]=o[t](r),e.c()),u(e,1),e.m(a,null))},i(r){s||(u(e),s=!0)},o(r){f(e),s=!1},d(r){r&&m(a),i[t].d()}}}function A(c,a,t){let e,s;return y(c,H,o=>t(0,e=o)),y(c,K,o=>t(1,s=o)),D(async()=>{await M("",!1)}),[e,s]}class X extends x{constructor(a){super(),E(this,a,A,z,I,{})}}export{X as default};