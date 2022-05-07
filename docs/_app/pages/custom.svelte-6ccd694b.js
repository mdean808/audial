import{S as X,i as Z,s as tt,w as q,x as G,y as M,q as D,o as V,B as A,e as S,k as B,G as Y,t as H,c as T,a as R,m as L,d as $,H as j,h as J,b as o,f as C,g as F,I as w,p as z,v as et,n as K,a6 as O,J as st}from"../chunks/index-b7303fea.js";import{I as rt,g as at,F as ot,B as nt,G as lt}from"../chunks/spotify-8734f69d.js";import{r as Q,c as it}from"../chunks/store-2c78cdb7.js";import{g as ct}from"../chunks/navigation-0e6511d1.js";import{c as ut}from"../chunks/util-9cdfb41e.js";import"../chunks/SvelteToast.svelte_svelte_type_style_lang-d8fc43ab.js";import"../chunks/index-684da568.js";import"../chunks/singletons-d1fb5791.js";function ft(u){let t,e,a,l,s,r,f,m,g,i,_;return m=new nt({props:{title:"start custom audial",type:"submit",$$slots:{default:[mt]},$$scope:{ctx:u}}}),m.$on("click",u[8]),{c(){t=S("div"),e=S("div"),a=H("paste the link to any spotify playlist below"),l=B(),s=S("input"),r=B(),f=S("div"),q(m.$$.fragment),this.h()},l(p){t=T(p,"DIV",{class:!0});var d=R(t);e=T(d,"DIV",{class:!0});var v=R(e);a=J(v,"paste the link to any spotify playlist below"),v.forEach($),l=L(d),s=T(d,"INPUT",{class:!0,placeholder:!0,name:!0}),r=L(d),f=T(d,"DIV",{class:!0});var b=R(f);G(m.$$.fragment,b),b.forEach($),d.forEach($),this.h()},h(){o(e,"class","text-center mx-auto w-full text-blue-100 mb-2"),o(s,"class","p-2 border-2 w-full text-gray-400 rounded-sm border-gray-600 bg-gray-900 hover:border-gray-400 focus:border-gray-400 outline-none transition-all duration-200"),o(s,"placeholder","spotify playlist link"),o(s,"name","spotify playlist input"),o(f,"class","w-full mx-auto text-center my-4"),o(t,"class","w-full w-10/12 mx-auto my-5")},m(p,d){F(p,t,d),w(t,e),w(e,a),w(t,l),w(t,s),O(s,u[3]),w(t,r),w(t,f),M(m,f,null),g=!0,i||(_=st(s,"input",u[7]),i=!0)},p(p,d){d&8&&s.value!==p[3]&&O(s,p[3]);const v={};d&2048&&(v.$$scope={dirty:d,ctx:p}),m.$set(v)},i(p){g||(D(m.$$.fragment,p),g=!0)},o(p){V(m.$$.fragment,p),g=!1},d(p){p&&$(t),A(m),i=!1,_()}}}function dt(u){let t,e,a,l;return e=new lt({props:{custom:!0,forceRandom:u[4],allTracks:u[5]}}),{c(){t=S("div"),q(e.$$.fragment),this.h()},l(s){t=T(s,"DIV",{class:!0});var r=R(t);G(e.$$.fragment,r),r.forEach($),this.h()},h(){o(t,"class",a=`text-center p-3 ${!u[1]||u[0]?"hidden":""}`)},m(s,r){F(s,t,r),M(e,t,null),l=!0},p(s,r){const f={};r&16&&(f.forceRandom=s[4]),r&32&&(f.allTracks=s[5]),e.$set(f),(!l||r&3&&a!==(a=`text-center p-3 ${!s[1]||s[0]?"hidden":""}`))&&o(t,"class",a)},i(s){l||(D(e.$$.fragment,s),l=!0)},o(s){V(e.$$.fragment,s),l=!1},d(s){s&&$(t),A(e)}}}function mt(u){let t;return{c(){t=H("start your custom audial")},l(e){t=J(e,"start your custom audial")},m(e,a){F(e,t,a)},d(e){e&&$(t)}}}function W(u){let t,e;return t=new ot({props:{custom:!0}}),{c(){q(t.$$.fragment)},l(a){G(t.$$.fragment,a)},m(a,l){M(t,a,l),e=!0},i(a){e||(D(t.$$.fragment,a),e=!0)},o(a){V(t.$$.fragment,a),e=!1},d(a){A(t,a)}}}function pt(u){let t,e,a,l,s,r,f,m,g,i,_,p,d,v,b,k;e=new rt({props:{hidden:u[1]}});const I=[dt,ft],x=[];function U(c,h){return c[2]?0:1}s=U(u),r=x[s]=I[s](u);let n=u[2]&&!u[0]&&W();return{c(){t=S("div"),q(e.$$.fragment),a=B(),l=S("div"),r.c(),f=B(),n&&n.c(),m=B(),g=S("div"),i=Y("svg"),_=Y("circle"),p=B(),d=S("p"),v=H("please note that your custom audial may take longer to load"),this.h()},l(c){t=T(c,"DIV",{});var h=R(t);G(e.$$.fragment,h),a=L(h),l=T(h,"DIV",{class:!0});var E=R(l);r.l(E),E.forEach($),f=L(h),n&&n.l(h),m=L(h),g=T(h,"DIV",{class:!0});var y=R(g);i=j(y,"svg",{height:!0,preserveAspectRatio:!0,class:!0,style:!0,viewBox:!0,width:!0,xmlns:!0});var P=R(i);_=j(P,"circle",{cx:!0,cy:!0,fill:!0,r:!0,stroke:!0,"stroke-dasharray":!0,"stroke-width":!0}),R(_).forEach($),P.forEach($),p=L(y),d=T(y,"P",{class:!0});var N=R(d);v=J(N,"please note that your custom audial may take longer to load"),N.forEach($),y.forEach($),h.forEach($),this.h()},h(){o(l,"class","max-w-screen-md mx-auto"),o(_,"cx","50"),o(_,"cy","50"),o(_,"fill","none"),o(_,"r","38"),o(_,"stroke","currentColor"),o(_,"stroke-dasharray","179.0707812546182 61.690260418206066"),o(_,"stroke-width","7"),o(i,"height","100px"),o(i,"preserveAspectRatio","xMidYMid"),o(i,"class","animate-spin"),C(i,"margin","auto"),C(i,"background","transparent"),C(i,"display","block"),C(i,"shape-rendering","auto"),o(i,"viewBox","0 0 100 100"),o(i,"width","100px"),o(i,"xmlns","http://www.w3.org/2000/svg"),o(d,"class","w-full mx-auto text-center text-gray-400 mt-4"),o(g,"class",b=`w-full mx-auto text-center mt-20 text-blue-600 ${u[0]?"":"hidden"}`)},m(c,h){F(c,t,h),M(e,t,null),w(t,a),w(t,l),x[s].m(l,null),w(t,f),n&&n.m(t,null),w(t,m),w(t,g),w(g,i),w(i,_),w(g,p),w(g,d),w(d,v),k=!0},p(c,[h]){const E={};h&2&&(E.hidden=c[1]),e.$set(E);let y=s;s=U(c),s===y?x[s].p(c,h):(K(),V(x[y],1,1,()=>{x[y]=null}),z(),r=x[s],r?r.p(c,h):(r=x[s]=I[s](c),r.c()),D(r,1),r.m(l,null)),c[2]&&!c[0]?n?h&5&&D(n,1):(n=W(),n.c(),D(n,1),n.m(t,m)):n&&(K(),V(n,1,1,()=>{n=null}),z()),(!k||h&1&&b!==(b=`w-full mx-auto text-center mt-20 text-blue-600 ${c[0]?"":"hidden"}`))&&o(g,"class",b)},i(c){k||(D(e.$$.fragment,c),D(r),D(n),k=!0)},o(c){V(e.$$.fragment,c),V(r),V(n),k=!1},d(c){c&&$(t),A(e),x[s].d(),n&&n.d()}}}function ht(u,t,e){var a=this&&this.__awaiter||function(v,b,k,I){function x(U){return U instanceof k?U:new k(function(n){n(U)})}return new(k||(k=Promise))(function(U,n){function c(y){try{E(I.next(y))}catch(P){n(P)}}function h(y){try{E(I.throw(y))}catch(P){n(P)}}function E(y){y.done?U(y.value):x(y.value).then(c,h)}E((I=I.apply(v,b||[])).next())})};let l=!1,s,r,f,m=!1,g,i;et(()=>a(void 0,void 0,void 0,function*(){e(1,s=Q.get()),Q.listen(v=>{e(1,s=v)}),e(4,m=new URL(window.location.href).searchParams.get("random")==="true"||!1),new URL(window.location.href).searchParams.get("playlist")&&(e(2,r=!0),yield _(new URL(window.location.href).searchParams.get("playlist")))}));const _=v=>a(void 0,void 0,void 0,function*(){if(!f&&!v)return;const b=typeof v=="string"?v:new URL(f).pathname.split("/")[2];e(0,l=!0);const k=new URL(window.location.href).searchParams;k.set("playlist",b),k.set("random",m?"true":"false"),yield ct("/custom?"+k.toString());const I=yield at(b,m);i=I.daily,e(5,g=I.tracks);const x=ut(i);it.set(x),e(0,l=!1),e(2,r=!0)});function p(){f=this.value,e(3,f)}return[l,s,r,f,m,g,_,p,()=>_()]}class xt extends X{constructor(t){super(),Z(this,t,ht,pt,tt,{})}}export{xt as default};
