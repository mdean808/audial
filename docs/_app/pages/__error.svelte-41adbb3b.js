import{S as w,i as A,s as C,e as _,t as p,k as P,c as x,a as v,h as g,d,m as j,b as E,g as D,H as r,j as k,K as q}from"../chunks/vendor-89bed0de.js";function I(l){let t,s,i,c,e,o,h,S,b,u=l[1].message.split(":")[0]+"",m;return{c(){t=_("div"),s=_("h1"),i=p("error"),c=P(),e=_("p"),o=_("span"),h=p(l[0]),S=p(":"),b=P(),m=p(u),this.h()},l(n){t=x(n,"DIV",{class:!0});var a=v(t);s=x(a,"H1",{class:!0});var H=v(s);i=g(H,"error"),H.forEach(d),c=j(a),e=x(a,"P",{class:!0});var f=v(e);o=x(f,"SPAN",{class:!0});var y=v(o);h=g(y,l[0]),S=g(y,":"),y.forEach(d),b=j(f),m=g(f,u),f.forEach(d),a.forEach(d),this.h()},h(){E(s,"class","text-5xl text-red-600"),E(o,"class","text-amber-400"),E(e,"class","text-lg"),E(t,"class","max-w-screen-md mx-auto px-4 py-2")},m(n,a){D(n,t,a),r(t,s),r(s,i),r(t,c),r(t,e),r(e,o),r(o,h),r(o,S),r(e,b),r(e,m)},p(n,[a]){a&1&&k(h,n[0]),a&2&&u!==(u=n[1].message.split(":")[0]+"")&&k(m,u)},i:q,o:q,d(n){n&&d(t)}}}function V({error:l,status:t}){return{props:{status:t,error:l}}}function K(l,t,s){let{status:i}=t,{error:c}=t;return l.$$set=e=>{"status"in e&&s(0,i=e.status),"error"in e&&s(1,c=e.error)},[i,c]}class z extends w{constructor(t){super();A(this,t,K,I,C,{status:0,error:1})}}export{z as default,V as load};
