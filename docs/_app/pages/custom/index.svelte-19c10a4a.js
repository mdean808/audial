import{S as A,i as H,s as K,l as w,g as $,o as _,p as U,q as d,d as p,K as C,v as M,n as q,e as h,t as F,k as G,w as x,c as k,a as v,h as S,m as P,x as I,b as y,H as b,a7 as L,y as D,I as R,B as E}from"../../chunks/index-86d43578.js";import{g as T}from"../../chunks/navigation-0e6511d1.js";import{p as N,t as j,B as z}from"../../chunks/Button-2f2ed635.js";import{t as J,l as O,a as Q}from"../../chunks/util-172ab80f.js";import{G as W,F as X,L as Y}from"../../chunks/Game-4d035d60.js";import"../../chunks/singletons-d1fb5791.js";import"../../chunks/index-cde1e508.js";function Z(u){let t,e,s,o,l,r,i,a,c,n,V;return a=new z({props:{title:"start custom audial",type:"submit",$$slots:{default:[et]},$$scope:{ctx:u}}}),a.$on("click",u[5]),{c(){t=h("div"),e=h("div"),s=F("paste the link to any spotify playlist below"),o=G(),l=h("input"),r=G(),i=h("div"),x(a.$$.fragment),this.h()},l(f){t=k(f,"DIV",{class:!0});var m=v(t);e=k(m,"DIV",{class:!0});var g=v(e);s=S(g,"paste the link to any spotify playlist below"),g.forEach(p),o=P(m),l=k(m,"INPUT",{class:!0,name:!0,placeholder:!0}),r=P(m),i=k(m,"DIV",{class:!0});var B=v(i);I(a.$$.fragment,B),B.forEach(p),m.forEach(p),this.h()},h(){y(e,"class","text-center mx-auto w-full text-blue-100 mb-2"),y(l,"class","p-2 border-2 w-full text-gray-400 rounded-sm border-gray-600 bg-gray-900 hover:border-gray-400 focus:border-gray-400 outline-none transition-all duration-200"),y(l,"name","spotify playlist input"),y(l,"placeholder","spotify playlist link"),y(i,"class","w-full mx-auto text-center my-4"),y(t,"class","w-full w-10/12 max-w-2xl mx-auto my-5")},m(f,m){$(f,t,m),b(t,e),b(e,s),b(t,o),b(t,l),L(l,u[0]),b(t,r),b(t,i),D(a,i,null),c=!0,n||(V=R(l,"input",u[4]),n=!0)},p(f,m){m&1&&l.value!==f[0]&&L(l,f[0]);const g={};m&128&&(g.$$scope={dirty:m,ctx:f}),a.$set(g)},i(f){c||(d(a.$$.fragment,f),c=!0)},o(f){_(a.$$.fragment,f),c=!1},d(f){f&&p(t),E(a),n=!1,V()}}}function tt(u){let t,e,s,o;const l=[rt,at],r=[];function i(a,c){return a[2]?0:1}return t=i(u),e=r[t]=l[t](u),{c(){e.c(),s=w()},l(a){e.l(a),s=w()},m(a,c){r[t].m(a,c),$(a,s,c),o=!0},p(a,c){let n=t;t=i(a),t!==n&&(q(),_(r[n],1,1,()=>{r[n]=null}),U(),e=r[t],e||(e=r[t]=l[t](a),e.c()),d(e,1),e.m(s.parentNode,s))},i(a){o||(d(e),o=!0)},o(a){_(e),o=!1},d(a){r[t].d(a),a&&p(s)}}}function et(u){let t;return{c(){t=F("start your custom audial")},l(e){t=S(e,"start your custom audial")},m(e,s){$(e,t,s)},d(e){e&&p(t)}}}function at(u){let t,e,s,o,l;return e=new W({props:{custom:!0,random:!1}}),o=new X({props:{custom:!0}}),{c(){t=h("div"),x(e.$$.fragment),s=G(),x(o.$$.fragment),this.h()},l(r){t=k(r,"DIV",{class:!0});var i=v(t);I(e.$$.fragment,i),i.forEach(p),s=P(r),I(o.$$.fragment,r),this.h()},h(){y(t,"class","max-w-screen-md text-center p-3 mx-auto")},m(r,i){$(r,t,i),D(e,t,null),$(r,s,i),D(o,r,i),l=!0},i(r){l||(d(e.$$.fragment,r),d(o.$$.fragment,r),l=!0)},o(r){_(e.$$.fragment,r),_(o.$$.fragment,r),l=!1},d(r){r&&p(t),E(e),r&&p(s),E(o,r)}}}function rt(u){let t,e;return t=new Y({}),{c(){x(t.$$.fragment)},l(s){I(t.$$.fragment,s)},m(s,o){D(t,s,o),e=!0},i(s){e||(d(t.$$.fragment,s),e=!0)},o(s){_(t.$$.fragment,s),e=!1},d(s){E(t,s)}}}function st(u){let t,e,s,o;const l=[tt,Z],r=[];function i(a,c){return a[1]?0:1}return t=i(u),e=r[t]=l[t](u),{c(){e.c(),s=w()},l(a){e.l(a),s=w()},m(a,c){r[t].m(a,c),$(a,s,c),o=!0},p(a,[c]){let n=t;t=i(a),t===n?r[t].p(a,c):(q(),_(r[n],1,1,()=>{r[n]=null}),U(),e=r[t],e?e.p(a,c):(e=r[t]=l[t](a),e.c()),d(e,1),e.m(s.parentNode,s))},i(a){o||(d(e),o=!0)},o(a){_(e),o=!1},d(a){r[t].d(a),a&&p(s)}}}function lt(u,t,e){let s,o;C(u,N,n=>e(6,s=n)),C(u,Q,n=>e(2,o=n));let l="",r=!1;N.subscribe(n=>{!n.url.searchParams.get("playlist")&&n.url.pathname.includes("custom")&&e(1,r=!1)}),M(async()=>{s.url.searchParams.get("playlist")&&await i(s.url.searchParams.get("playlist"))});const i=async n=>{if(!l&&!n)return j.push("please provide a valid spotify playlist url.");n=n||new URL(l).pathname.split("/")[2],await T("/custom?playlist="+n),e(1,r=!0),J.set({attempts:0,type:"custom",guesses:[],date:new Date,correct:!1}),await O(n,!1)};function a(){l=this.value,e(0,l)}return[l,r,o,i,a,()=>i()]}class pt extends A{constructor(t){super(),H(this,t,lt,st,K,{})}}export{pt as default};
