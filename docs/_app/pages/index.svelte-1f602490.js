import{S as le,i as ae,s as oe,e as b,k as V,c as w,a as v,d as m,m as T,b as d,g as C,H as h,K as fe,t as D,h as S,j as se,w as Z,F as U,x as J,G as K,y as x,I as re,q as B,o as z,B as ee,L as Ue,v as Be,M as Ke,N as He,O as Ye,P as qe,U as Qe,V as ye,n as ze,p as Oe,l as Ee,W as Ie,X as We,Y as Xe,Z as Ze,_ as Je,$ as xe,f as ue}from"../chunks/vendor-832d971d.js";import{c as R,a as X,s as ce,r as Fe}from"../chunks/store-a531a00f.js";function et(l){let e,t,s,r,a,f,n,c,o,i,u,p,k,$,g,_,y,N;return{c(){e=b("div"),t=b("div"),r=V(),a=b("div"),n=V(),c=b("div"),i=V(),u=b("div"),k=V(),$=b("div"),_=V(),y=b("div"),this.h()},l(I){e=w(I,"DIV",{class:!0});var E=v(e);t=w(E,"DIV",{class:!0}),v(t).forEach(m),r=T(E),a=w(E,"DIV",{class:!0}),v(a).forEach(m),n=T(E),c=w(E,"DIV",{class:!0}),v(c).forEach(m),i=T(E),u=w(E,"DIV",{class:!0}),v(u).forEach(m),k=T(E),$=w(E,"DIV",{class:!0}),v($).forEach(m),_=T(E),y=w(E,"DIV",{class:!0}),v(y).forEach(m),E.forEach(m),this.h()},h(){d(t,"class",s=`w-2/12 ${l[1](0,l[0].attempts)} border-r border-l`),d(a,"class",f=`w-2/12 ${l[1](1,l[0].attempts)} border-r border-l`),d(c,"class",o=`w-4/12 ${l[1](2,l[0].attempts)} border-r border-l`),d(u,"class",p=`w-4/12 ${l[1](3,l[0].attempts)} border-r border-l`),d($,"class",g=`w-6/12 ${l[1](4,l[0].attempts)} border-r border-l`),d(y,"class",N=`w-6/12 ${l[1](5,l[0].attempts)} border-r border-l`),d(e,"class","max-w-3xl mx-auto flex h-3")},m(I,E){C(I,e,E),h(e,t),h(e,r),h(e,a),h(e,n),h(e,c),h(e,i),h(e,u),h(e,k),h(e,$),h(e,_),h(e,y)},p(I,[E]){E&1&&s!==(s=`w-2/12 ${I[1](0,I[0].attempts)} border-r border-l`)&&d(t,"class",s),E&1&&f!==(f=`w-2/12 ${I[1](1,I[0].attempts)} border-r border-l`)&&d(a,"class",f),E&1&&o!==(o=`w-4/12 ${I[1](2,I[0].attempts)} border-r border-l`)&&d(c,"class",o),E&1&&p!==(p=`w-4/12 ${I[1](3,I[0].attempts)} border-r border-l`)&&d(u,"class",p),E&1&&g!==(g=`w-6/12 ${I[1](4,I[0].attempts)} border-r border-l`)&&d($,"class",g),E&1&&N!==(N=`w-6/12 ${I[1](5,I[0].attempts)} border-r border-l`)&&d(y,"class",N)},i:fe,o:fe,d(I){I&&m(e)}}}function tt(l,e,t){let{attempt:s}=e;const r=(a,f)=>{let n="bg-black opacity-40";return f===a&&!s.correct?n="bg-blue-500":f===a+1&&s.correct?n="bg-green-600":f>a&&s.guesses[a].artistCorrect?n="bg-amber-400":f>a&&(n="bg-red-600"),n};return l.$$set=a=>{"attempt"in a&&t(0,s=a.attempt)},[s,r]}class st extends le{constructor(e){super();ae(this,e,tt,et,oe,{attempt:0})}}function De(l){let e,t;return{c(){e=b("div"),t=D(l[4]),this.h()},l(s){e=w(s,"DIV",{class:!0});var r=v(e);t=S(r,l[4]),r.forEach(m),this.h()},h(){d(e,"class","flex flex-1 justify-start font-mono")},m(s,r){C(s,e,r),h(e,t)},p(s,r){r&16&&se(t,s[4])},d(s){s&&m(e)}}}function Se(l){let e,t=Math.floor(l[3]/60)+":"+(Math.round(l[3]%60)<10?"0"+Math.round(l[3]%60):Math.round(l[3]%60)),s;return{c(){e=b("div"),s=D(t),this.h()},l(r){e=w(r,"DIV",{class:!0});var a=v(e);s=S(a,t),a.forEach(m),this.h()},h(){d(e,"class","flex flex-1 justify-end font-mono")},m(r,a){C(r,e,a),h(e,s)},p(r,a){a&8&&t!==(t=Math.floor(r[3]/60)+":"+(Math.round(r[3]%60)<10?"0"+Math.round(r[3]%60):Math.round(r[3]%60)))&&se(s,t)},d(r){r&&m(e)}}}function rt(l){let e,t,s,r,a,f,n,c,o,i,u,p,k,$,g,_,y,N,I,E,O,H,G;s=new st({props:{attempt:l[1]}});let M=l[0]&&De(l),P=l[0]&&Se(l);return{c(){e=b("footer"),t=b("div"),Z(s.$$.fragment),r=V(),a=b("div"),f=b("div"),M&&M.c(),n=V(),c=b("div"),o=b("button"),i=U("svg"),u=U("path"),p=U("path"),$=V(),g=b("button"),_=U("svg"),y=U("path"),N=U("path"),E=V(),P&&P.c(),this.h()},l(A){e=w(A,"FOOTER",{class:!0});var j=v(e);t=w(j,"DIV",{class:!0});var Y=v(t);J(s.$$.fragment,Y),Y.forEach(m),r=T(j),a=w(j,"DIV",{class:!0});var ne=v(a);f=w(ne,"DIV",{class:!0});var q=v(f);M&&M.l(q),n=T(q),c=w(q,"DIV",{class:!0});var L=v(c);o=w(L,"BUTTON",{title:!0,class:!0});var F=v(o);i=K(F,"svg",{class:!0,fill:!0,stroke:!0,viewBox:!0,xmlns:!0});var Q=v(i);u=K(Q,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),v(u).forEach(m),p=K(Q,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),v(p).forEach(m),Q.forEach(m),F.forEach(m),$=T(L),g=w(L,"BUTTON",{title:!0,class:!0});var W=v(g);_=K(W,"svg",{xmlns:!0,class:!0,fill:!0,viewBox:!0,stroke:!0,"stroke-width":!0});var ie=v(_);y=K(ie,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),v(y).forEach(m),N=K(ie,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),v(N).forEach(m),ie.forEach(m),W.forEach(m),L.forEach(m),E=T(q),P&&P.l(q),q.forEach(m),ne.forEach(m),j.forEach(m),this.h()},h(){d(t,"class","border-b"),d(u,"stroke-linecap","round"),d(u,"stroke-linejoin","round"),d(u,"stroke-width","2"),d(u,"d","M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"),d(p,"stroke-linecap","round"),d(p,"stroke-linejoin","round"),d(p,"stroke-width","2"),d(p,"d","M21 12a9 9 0 11-18 0 9 9 0 0118 0z"),d(i,"class","w-14 h-14 mx-auto"),d(i,"fill","none"),d(i,"stroke","currentColor"),d(i,"viewBox","0 0 24 24"),d(i,"xmlns","http://www.w3.org/2000/svg"),d(o,"title","Play Song"),d(o,"class",k=`hover:text-green-600 transition-colors duration-200 ${l[2]?"":"hidden"}`),d(y,"stroke-linecap","round"),d(y,"stroke-linejoin","round"),d(y,"d","M21 12a9 9 0 11-18 0 9 9 0 0118 0z"),d(N,"stroke-linecap","round"),d(N,"stroke-linejoin","round"),d(N,"d","M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"),d(_,"xmlns","http://www.w3.org/2000/svg"),d(_,"class","w-14 h-14 mx-auto"),d(_,"fill","none"),d(_,"viewBox","0 0 24 24"),d(_,"stroke","currentColor"),d(_,"stroke-width","2"),d(g,"title","Pause Song"),d(g,"class",I=`hover:text-green-600 transition-colors duration-200 ${l[2]?"hidden":""}`),d(c,"class","text-center flex-1 justify-center"),d(f,"class","flex justify-evenly items-center w-full"),d(a,"class","max-w-screen-md mx-auto p-3"),d(e,"class","border-t border-gray-500 bottom-0 w-full fixed bg-gray-800")},m(A,j){C(A,e,j),h(e,t),x(s,t,null),h(e,r),h(e,a),h(a,f),M&&M.m(f,null),h(f,n),h(f,c),h(c,o),h(o,i),h(i,u),h(i,p),h(c,$),h(c,g),h(g,_),h(_,y),h(_,N),h(f,E),P&&P.m(f,null),O=!0,H||(G=[re(o,"click",l[5]),re(g,"click",l[6])],H=!0)},p(A,[j]){const Y={};j&2&&(Y.attempt=A[1]),s.$set(Y),A[0]?M?M.p(A,j):(M=De(A),M.c(),M.m(f,n)):M&&(M.d(1),M=null),(!O||j&4&&k!==(k=`hover:text-green-600 transition-colors duration-200 ${A[2]?"":"hidden"}`))&&d(o,"class",k),(!O||j&4&&I!==(I=`hover:text-green-600 transition-colors duration-200 ${A[2]?"hidden":""}`))&&d(g,"class",I),A[0]?P?P.p(A,j):(P=Se(A),P.c(),P.m(f,null)):P&&(P.d(1),P=null)},i(A){O||(B(s.$$.fragment,A),O=!0)},o(A){z(s.$$.fragment,A),O=!1},d(A){A&&m(e),ee(s),M&&M.d(),P&&P.d(),H=!1,Ue(G)}}}function lt(l,e,t){let s,r={attempts:0,guesses:[],correct:!1,date:new Date},a=!0,f=0,n="0:00",c;return Be(()=>{t(1,r=R.get()),t(0,s=new Audio(X.get().preview)),s.addEventListener("loadedmetadata",()=>t(3,f=s.duration))}),R.listen(u=>t(1,r=u)),X.listen(u=>t(0,s=new Audio(u.preview))),ce.listen(u=>t(2,a=u)),[s,r,a,f,n,()=>{ce.set(!1),s.play(),t(4,n="0:00");let u=12-r.attempts*6;const p=.08333333;switch(r.attempts){case 0:u=p;break;case 1:u=p*2;break;case 2:u=p*4;break;case 3:u=.5;break;case 4:u=.75;break;default:u=1;break}const k=r.correct?s.duration*1e3:s.duration/2*1e3*u;setTimeout(()=>{s.pause(),t(0,s.currentTime=0,s),ce.set(!0),clearInterval(c)},k),c=setInterval(()=>{t(4,n=`${Math.floor(s.currentTime/60)}:${s.currentTime%60<10?"0"+Math.round(s.currentTime%60):Math.round(s.currentTime%60)}`)},1e3)},()=>{s.pause(),t(0,s.currentTime=0,s),ce.set(!0)}]}class at extends le{constructor(e){super();ae(this,e,lt,rt,oe,{})}}function ot(l){let e,t,s,r,a;const f=l[5].default,n=Ke(f,l,l[4],null);return{c(){e=b("button"),n&&n.c(),this.h()},l(c){e=w(c,"BUTTON",{title:!0,class:!0});var o=v(e);n&&n.l(o),o.forEach(m),this.h()},h(){d(e,"title",l[1]),d(e,"class",t=`p-2 text-white ${l[2]} rounded-md shadow hover:shadow-lg transition-all duration-200 ${l[0]}`)},m(c,o){C(c,e,o),n&&n.m(e,null),s=!0,r||(a=re(e,"click",l[6]),r=!0)},p(c,[o]){n&&n.p&&(!s||o&16)&&He(n,f,c,c[4],s?qe(f,c[4],o,null):Ye(c[4]),null),(!s||o&2)&&d(e,"title",c[1]),(!s||o&5&&t!==(t=`p-2 text-white ${c[2]} rounded-md shadow hover:shadow-lg transition-all duration-200 ${c[0]}`))&&d(e,"class",t)},i(c){s||(B(n,c),s=!0)},o(c){z(n,c),s=!1},d(c){c&&m(e),n&&n.d(c),r=!1,a()}}}function nt(l,e,t){let{$$slots:s={},$$scope:r}=e,{type:a}=e,{className:f=""}=e,{title:n}=e,c;switch(a){case"primary":c="bg-blue-600 hover:bg-blue-500";break;case"submit":c="bg-green-600 hover:bg-green-500";break;case"warning":c="bg-orange-600 hover:bg-orange-500";break;case"breaking":c="bg-red-600 hover:bg-red-500";break;default:c="bg-blue-600 hover:bg-blue-500";break}function o(i){Qe.call(this,l,i)}return l.$$set=i=>{"type"in i&&t(3,a=i.type),"className"in i&&t(0,f=i.className),"title"in i&&t(1,n=i.title),"$$scope"in i&&t(4,r=i.$$scope)},[f,n,c,a,r,s,o]}class he extends le{constructor(e){super();ae(this,e,nt,ot,oe,{type:3,className:0,title:1})}}function it(l){let e;return{c(){e=D("sounds cool")},l(t){e=S(t,"sounds cool")},m(t,s){C(t,e,s)},d(t){t&&m(e)}}}function ct(l){let e,t,s,r,a,f,n,c,o,i,u,p,k,$,g,_,y,N,I,E,O,H,G,M,P,A,j,Y,ne,q;return j=new he({props:{title:"Close Popup",type:"primary",$$slots:{default:[it]},$$scope:{ctx:l}}}),j.$on("click",l[2]),{c(){e=b("div"),t=b("div"),s=V(),r=b("div"),a=b("div"),f=b("h1"),n=D("Instructions"),c=V(),o=b("div"),i=b("ul"),u=b("li"),p=b("span"),k=D("press the play button"),$=V(),g=b("li"),_=b("span"),y=D("listen to the song snippet"),N=V(),I=b("li"),E=b("span"),O=D("type the name of the song or song artist into the box"),H=V(),G=b("li"),M=b("span"),P=D("if you get the song incorrect or press skip, more of the song will be revealed"),A=V(),Z(j.$$.fragment),this.h()},l(L){e=w(L,"DIV",{});var F=v(e);t=w(F,"DIV",{class:!0}),v(t).forEach(m),s=T(F),r=w(F,"DIV",{class:!0});var Q=v(r);a=w(Q,"DIV",{class:!0});var W=v(a);f=w(W,"H1",{class:!0});var ie=v(f);n=S(ie,"Instructions"),ie.forEach(m),c=T(W),o=w(W,"DIV",{class:!0});var pe=v(o);i=w(pe,"UL",{class:!0});var te=v(i);u=w(te,"LI",{});var me=v(u);p=w(me,"SPAN",{});var ge=v(p);k=S(ge,"press the play button"),ge.forEach(m),me.forEach(m),$=T(te),g=w(te,"LI",{});var ve=v(g);_=w(ve,"SPAN",{});var _e=v(_);y=S(_e,"listen to the song snippet"),_e.forEach(m),ve.forEach(m),N=T(te),I=w(te,"LI",{});var be=v(I);E=w(be,"SPAN",{});var we=v(E);O=S(we,"type the name of the song or song artist into the box"),we.forEach(m),be.forEach(m),H=T(te),G=w(te,"LI",{});var ke=v(G);M=w(ke,"SPAN",{});var $e=v(M);P=S($e,"if you get the song incorrect or press skip, more of the song will be revealed"),$e.forEach(m),ke.forEach(m),te.forEach(m),pe.forEach(m),A=T(W),J(j.$$.fragment,W),W.forEach(m),Q.forEach(m),F.forEach(m),this.h()},h(){d(t,"class","flex overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-40 justify-center items-center h-modal md:h-full md:inset-0 bg-black opacity-50"),d(f,"class","text-3xl"),d(i,"class","text-left"),d(o,"class","p-4"),d(a,"class","relative rounded-lg bg-gray-700 p-3 opacity-100 shadow"),d(r,"class","relative px-4 w-full max-w-2xl h-full md:h-auto mx-auto z-50"),ye(e,"hidden",l[0])},m(L,F){C(L,e,F),h(e,t),h(e,s),h(e,r),h(r,a),h(a,f),h(f,n),h(a,c),h(a,o),h(o,i),h(i,u),h(u,p),h(p,k),h(i,$),h(i,g),h(g,_),h(_,y),h(i,N),h(i,I),h(I,E),h(E,O),h(i,H),h(i,G),h(G,M),h(M,P),h(a,A),x(j,a,null),Y=!0,ne||(q=re(t,"click",l[1]),ne=!0)},p(L,[F]){const Q={};F&8&&(Q.$$scope={dirty:F,ctx:L}),j.$set(Q),F&1&&ye(e,"hidden",L[0])},i(L){Y||(B(j.$$.fragment,L),Y=!0)},o(L){z(j.$$.fragment,L),Y=!1},d(L){L&&m(e),ee(j),ne=!1,q()}}}function ut(l,e,t){let{hidden:s=!0}=e;const r=()=>t(0,s=!0),a=()=>{t(0,s=!0),Fe.set(!0)};return l.$$set=f=>{"hidden"in f&&t(0,s=f.hidden)},[s,r,a]}class ft extends le{constructor(e){super();ae(this,e,ut,ct,oe,{hidden:0})}}const de=l=>({name:l.name,artist:l.artists?l.artists[0].name:"unknown artist",id:l.id,preview:l.preview_url}),Ge=(l,e)=>{const t=Math.abs(l.getTime()-e.getTime());return Math.ceil(t/(1e3*60*60*24))};function dt(l){let e,t=X.get().name+"",s,r,a=X.get().artist+"",f,n,c,o;return{c(){e=b("div"),s=D(t),r=D(" by "),f=D(a),this.h()},l(i){e=w(i,"DIV",{title:!0,class:!0});var u=v(e);s=S(u,t),r=S(u," by "),f=S(u,a),u.forEach(m),this.h()},h(){d(e,"title","Open in Spotify"),d(e,"class",n="cursor-pointer border-blue-600 border-2 h-10 p-2 my-2 w-full text-left rounded-sm bg-gray-900 overflow-ellipsis whitespace-nowrap overflow-hidden")},m(i,u){C(i,e,u),h(e,s),h(e,r),h(e,f),c||(o=re(e,"click",l[5]),c=!0)},p:fe,d(i){i&&m(e),c=!1,o()}}}function Ve(l){let e,t,s=Ge(new Date,l[2])+"",r;return{c(){e=b("span"),t=D("audial #"),r=D(s),this.h()},l(a){e=w(a,"SPAN",{class:!0});var f=v(e);t=S(f,"audial #"),r=S(f,s),f.forEach(m),this.h()},h(){d(e,"class","my-2")},m(a,f){C(a,e,f),h(e,t),h(e,r)},p:fe,d(a){a&&m(e)}}}function Te(l){let e,t,s,r,a,f,n;return t=new he({props:{title:"Share Score",className:"block mx-auto",type:"submit",$$slots:{default:[ht]},$$scope:{ctx:l}}}),t.$on("click",l[4]),{c(){e=b("div"),Z(t.$$.fragment),s=V(),r=b("p"),a=D("copied to clipboard."),this.h()},l(c){e=w(c,"DIV",{class:!0});var o=v(e);J(t.$$.fragment,o),s=T(o),r=w(o,"P",{class:!0});var i=v(r);a=S(i,"copied to clipboard."),i.forEach(m),o.forEach(m),this.h()},h(){d(r,"class",f=`${l[1]?"opacity-100":"opacity-0"} text-blue-100 font-semibold transition-all duration-500 my-2`),d(e,"class","w-full mx-auto my-2")},m(c,o){C(c,e,o),x(t,e,null),h(e,s),h(e,r),h(r,a),n=!0},p(c,o){const i={};o&64&&(i.$$scope={dirty:o,ctx:c}),t.$set(i),(!n||o&2&&f!==(f=`${c[1]?"opacity-100":"opacity-0"} text-blue-100 font-semibold transition-all duration-500 my-2`))&&d(r,"class",f)},i(c){n||(B(t.$$.fragment,c),n=!0)},o(c){z(t.$$.fragment,c),n=!1},d(c){c&&m(e),ee(t)}}}function ht(l){let e;return{c(){e=D("share")},l(t){e=S(t,"share")},m(t,s){C(t,e,s)},d(t){t&&m(e)}}}function pt(l){let e,t=!R.get().correct,s,r,a,f=l[3]()+"",n,c,o,i=t&&dt(l),u=!l[0]&&Ve(l),p=!l[0]&&Te(l);return{c(){e=b("div"),i&&i.c(),s=V(),u&&u.c(),r=V(),a=b("span"),n=D(f),c=V(),p&&p.c(),this.h()},l(k){e=w(k,"DIV",{class:!0});var $=v(e);i&&i.l($),s=T($),u&&u.l($),r=T($),a=w($,"SPAN",{});var g=v(a);n=S(g,f),g.forEach(m),c=T($),p&&p.l($),$.forEach(m),this.h()},h(){d(e,"class","py-3")},m(k,$){C(k,e,$),i&&i.m(e,null),h(e,s),u&&u.m(e,null),h(e,r),h(e,a),h(a,n),h(e,c),p&&p.m(e,null),o=!0},p(k,[$]){t&&i.p(k,$),k[0]?u&&(u.d(1),u=null):u?u.p(k,$):(u=Ve(k),u.c(),u.m(e,r)),k[0]?p&&(ze(),z(p,1,1,()=>{p=null}),Oe()):p?(p.p(k,$),$&1&&B(p,1)):(p=Te(k),p.c(),B(p,1),p.m(e,null))},i(k){o||(B(p),o=!0)},o(k){z(p),o=!1},d(k){k&&m(e),i&&i.d(),u&&u.d(),p&&p.d()}}}function mt(l,e,t){let{forceRandom:s}=e,r=!1;const a=new Date("3/29/2022"),f=()=>{let o="";for(const i of R.get().guesses||[])i.correct?o+="\u{1F7E9} ":i.artistCorrect?o+="\u{1F7E8} ":o+="\u{1F7E5} ";for(let i=0;i<6-R.get().attempts;i++)o+="\u2B1B ";return o},n=()=>{let o="audial #"+Ge(new Date,a);o+=`
`+f(),o+=`
https://audial.mogdan.xyz`,navigator.clipboard.writeText(o),t(1,r=!0)},c=()=>{window.open(`https://open.spotify.com/track/${X.get().id}`,"_blank").focus()};return l.$$set=o=>{"forceRandom"in o&&t(0,s=o.forceRandom)},[s,r,a,f,n,c]}class gt extends le{constructor(e){super();ae(this,e,mt,pt,oe,{forceRandom:0})}}const vt=async l=>await(await fetch(`https://us-central1-audial-6e1bd.cloudfunctions.net/tracks?playlist=${l.id}`,{method:"GET"})).json(),_t=async(l,e)=>await(await fetch(`https://us-central1-audial-6e1bd.cloudfunctions.net/daily?playlist=${l.id}&random=${e}`,{method:"GET"})).json();function Ne(l,e,t){const s=l.slice();return s[14]=e[t],s}function Ce(l,e,t){const s=l.slice();return s[14]=e[t],s}function Ae(l){let e,t,s;return{c(){e=b("div"),t=b("span"),s=D("listen to the song and try to guess it correctly. you have 6 attempts."),this.h()},l(r){e=w(r,"DIV",{class:!0});var a=v(e);t=w(a,"SPAN",{class:!0});var f=v(t);s=S(f,"listen to the song and try to guess it correctly. you have 6 attempts."),f.forEach(m),a.forEach(m),this.h()},h(){d(t,"class","text-center mx-auto w-full text-blue-100"),d(e,"class","w-full px-0 sm:px-20 transition-all duration-200")},m(r,a){C(r,e,a),h(e,t),h(t,s)},d(r){r&&m(e)}}}function Me(l){let e,t,s=l[1].guesses.filter(Le),r=[];for(let n=0;n<s.length;n+=1)r[n]=je(Ce(l,s,n));let a=l[1].guesses.filter(Re),f=[];for(let n=0;n<a.length;n+=1)f[n]=Pe(Ne(l,a,n));return{c(){for(let n=0;n<r.length;n+=1)r[n].c();e=V();for(let n=0;n<f.length;n+=1)f[n].c();t=Ee()},l(n){for(let c=0;c<r.length;c+=1)r[c].l(n);e=T(n);for(let c=0;c<f.length;c+=1)f[c].l(n);t=Ee()},m(n,c){for(let o=0;o<r.length;o+=1)r[o].m(n,c);C(n,e,c);for(let o=0;o<f.length;o+=1)f[o].m(n,c);C(n,t,c)},p(n,c){if(c&2){s=n[1].guesses.filter(Le);let o;for(o=0;o<s.length;o+=1){const i=Ce(n,s,o);r[o]?r[o].p(i,c):(r[o]=je(i),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=s.length}if(c&2){a=n[1].guesses.filter(Re);let o;for(o=0;o<a.length;o+=1){const i=Ne(n,a,o);f[o]?f[o].p(i,c):(f[o]=Pe(i),f[o].c(),f[o].m(t.parentNode,t))}for(;o<f.length;o+=1)f[o].d(1);f.length=a.length}},d(n){Ie(r,n),n&&m(e),Ie(f,n),n&&m(t)}}}function je(l){let e,t=l[14].song.name+"",s,r,a=l[14].song.artist+"",f,n,c,o;function i(){return l[7](l[14])}return{c(){e=b("div"),s=D(t),r=D(" by "),f=D(a),this.h()},l(u){e=w(u,"DIV",{title:!0,class:!0});var p=v(e);s=S(p,t),r=S(p," by "),f=S(p,a),p.forEach(m),this.h()},h(){d(e,"title","Open in Spotify"),d(e,"class",n=`cursor-pointer ${l[14].artistCorrect?"border-amber-400":"border-red-600"} border-2 h-10 p-2 my-2 w-full text-left rounded-sm bg-gray-900 overflow-ellipsis whitespace-nowrap overflow-hidden`)},m(u,p){C(u,e,p),h(e,s),h(e,r),h(e,f),c||(o=re(e,"click",i),c=!0)},p(u,p){l=u,p&2&&t!==(t=l[14].song.name+"")&&se(s,t),p&2&&a!==(a=l[14].song.artist+"")&&se(f,a),p&2&&n!==(n=`cursor-pointer ${l[14].artistCorrect?"border-amber-400":"border-red-600"} border-2 h-10 p-2 my-2 w-full text-left rounded-sm bg-gray-900 overflow-ellipsis whitespace-nowrap overflow-hidden`)&&d(e,"class",n)},d(u){u&&m(e),c=!1,o()}}}function Pe(l){let e,t=l[14].song.name+"",s,r,a=l[14].song.artist+"",f,n,c,o;function i(){return l[8](l[14])}return{c(){e=b("div"),s=D(t),r=D(" by "),f=D(a),n=V(),this.h()},l(u){e=w(u,"DIV",{title:!0,class:!0});var p=v(e);s=S(p,t),r=S(p," by "),f=S(p,a),n=T(p),p.forEach(m),this.h()},h(){d(e,"title","Open in Spotify"),d(e,"class","cursor-pointer border-green-600 border-2 h-10 p-2 my-2 w-full text-left rounded-sm bg-gray-900 overflow-ellipsis whitespace-nowrap overflow-hidden")},m(u,p){C(u,e,p),h(e,s),h(e,r),h(e,f),h(e,n),c||(o=re(e,"click",i),c=!0)},p(u,p){l=u,p&2&&t!==(t=l[14].song.name+"")&&se(s,t),p&2&&a!==(a=l[14].song.artist+"")&&se(f,a)},d(u){u&&m(e),c=!1,o()}}}function bt(l){let e,t;return e=new gt({props:{forceRandom:l[0]}}),{c(){Z(e.$$.fragment)},l(s){J(e.$$.fragment,s)},m(s,r){x(e,s,r),t=!0},p(s,r){const a={};r&1&&(a.forceRandom=s[0]),e.$set(a)},i(s){t||(B(e.$$.fragment,s),t=!0)},o(s){z(e.$$.fragment,s),t=!1},d(s){ee(e,s)}}}function wt(l){let e,t,s,r,a,f,n;function c(i){l[9](i)}let o={name:"song-selection",className:"w-10/12",inputClassName:"border-gray-600 border-2 w-full h-8 px-2 py-5 rounded-sm bg-gray-900 hover:border-gray-400 focus:border-gray-400 outline-none transition-all duration-200",dropdownClassName:"p-0 bg-gray-900",placeholder:`${6-l[1].attempts} ${6-l[1].attempts!==1?"attempts":"attempt"} left`,items:l[2],minCharactersToSearch:2,searchFunction:l[6],labelFieldName:"name",valueFieldName:"id",showLoadingIndicator:!0,noInputStyles:!0,hideArrow:!0,$$slots:{loading:[yt],"no-results":[$t],item:[kt,({label:i,item:u})=>({12:i,13:u}),({label:i,item:u})=>(i?4096:0)|(u?8192:0)]},$$scope:{ctx:l}};return l[3]!==void 0&&(o.selectedItem=l[3]),t=new Xe({props:o}),Ze.push(()=>Je(t,"selectedItem",c)),f=new he({props:{title:"Submit Song Guess",type:"primary",className:"w-full",$$slots:{default:[Et]},$$scope:{ctx:l}}}),f.$on("click",l[5]),{c(){e=b("div"),Z(t.$$.fragment),r=V(),a=b("div"),Z(f.$$.fragment),this.h()},l(i){e=w(i,"DIV",{class:!0,title:!0});var u=v(e);J(t.$$.fragment,u),r=T(u),a=w(u,"DIV",{class:!0,title:!0});var p=v(a);J(f.$$.fragment,p),p.forEach(m),u.forEach(m),this.h()},h(){d(a,"class","w-2/12 pl-4 mt-0.5"),d(a,"title","guess selected song"),d(e,"class","flex my-6"),d(e,"title","guess a song")},m(i,u){C(i,e,u),x(t,e,null),h(e,r),h(e,a),x(f,a,null),n=!0},p(i,u){const p={};u&2&&(p.placeholder=`${6-i[1].attempts} ${6-i[1].attempts!==1?"attempts":"attempt"} left`),u&4&&(p.items=i[2]),u&532480&&(p.$$scope={dirty:u,ctx:i}),!s&&u&8&&(s=!0,p.selectedItem=i[3],xe(()=>s=!1)),t.$set(p);const k={};u&524288&&(k.$$scope={dirty:u,ctx:i}),f.$set(k)},i(i){n||(B(t.$$.fragment,i),B(f.$$.fragment,i),n=!0)},o(i){z(t.$$.fragment,i),z(f.$$.fragment,i),n=!1},d(i){i&&m(e),ee(t),ee(f)}}}function kt(l){let e,t,s=l[13].name+"",r,a,f=l[13].artist+"",n;return{c(){e=b("div"),t=b("span"),r=D(s),a=D(" by "),n=D(f),this.h()},l(c){e=w(c,"DIV",{slot:!0,class:!0});var o=v(e);t=w(o,"SPAN",{});var i=v(t);r=S(i,s),a=S(i," by "),n=S(i,f),i.forEach(m),o.forEach(m),this.h()},h(){d(e,"slot","item"),d(e,"class","border-2 h-10 px-2 py-3 w-full text-left rounded-sm bg-gray-900 text-white hover:text-blue-500 hover:border-blue-500 overflow-ellipsis whitespace-nowrap overflow-hidden transition-colors duration-150")},m(c,o){C(c,e,o),h(e,t),h(t,r),h(t,a),h(t,n)},p(c,o){o&8192&&s!==(s=c[13].name+"")&&se(r,s),o&8192&&f!==(f=c[13].artist+"")&&se(n,f)},d(c){c&&m(e)}}}function $t(l){let e,t,s;return{c(){e=b("div"),t=b("span"),s=D("could not find this song in our list."),this.h()},l(r){e=w(r,"DIV",{slot:!0,class:!0});var a=v(e);t=w(a,"SPAN",{});var f=v(t);s=S(f,"could not find this song in our list."),f.forEach(m),a.forEach(m),this.h()},h(){d(e,"slot","no-results"),d(e,"class","py-1")},m(r,a){C(r,e,a),h(e,t),h(t,s)},d(r){r&&m(e)}}}function yt(l){let e,t,s;return{c(){e=b("div"),t=b("span"),s=D("searching for songs..."),this.h()},l(r){e=w(r,"DIV",{slot:!0,class:!0});var a=v(e);t=w(a,"SPAN",{});var f=v(t);s=S(f,"searching for songs..."),f.forEach(m),a.forEach(m),this.h()},h(){d(e,"slot","loading"),d(e,"class","py-1")},m(r,a){C(r,e,a),h(e,t),h(t,s)},d(r){r&&m(e)}}}function Et(l){let e,t;return{c(){e=U("svg"),t=U("path"),this.h()},l(s){e=K(s,"svg",{xmlns:!0,class:!0,fill:!0,viewBox:!0,stroke:!0,"stroke-width":!0});var r=v(e);t=K(r,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),v(t).forEach(m),r.forEach(m),this.h()},h(){d(t,"stroke-linecap","round"),d(t,"stroke-linejoin","round"),d(t,"d","M13 7l5 5m0 0l-5 5m5-5H6"),d(e,"xmlns","http://www.w3.org/2000/svg"),d(e,"class","h-6 w-6 mx-auto"),d(e,"fill","none"),d(e,"viewBox","0 0 24 24"),d(e,"stroke","currentColor"),d(e,"stroke-width","2")},m(s,r){C(s,e,r),h(e,t)},d(s){s&&m(e)}}}function It(l){let e,t,s,r,a,f,n,c,o;t=new ft({props:{hidden:l[4]}});let i=l[1].attempts===0&&Ae(),u=l[1].guesses&&Me(l);const p=[wt,bt],k=[];function $(g,_){return g[1].attempts<6&&!g[1].correct?0:1}return n=$(l),c=k[n]=p[n](l),{c(){e=b("div"),Z(t.$$.fragment),s=V(),i&&i.c(),r=V(),a=b("div"),u&&u.c(),f=V(),c.c(),this.h()},l(g){e=w(g,"DIV",{});var _=v(e);J(t.$$.fragment,_),s=T(_),i&&i.l(_),r=T(_),a=w(_,"DIV",{class:!0});var y=v(a);u&&u.l(y),f=T(y),c.l(y),y.forEach(m),_.forEach(m),this.h()},h(){d(a,"class","w-full px-0 transition-all sm:px-20 items-center game")},m(g,_){C(g,e,_),x(t,e,null),h(e,s),i&&i.m(e,null),h(e,r),h(e,a),u&&u.m(a,null),h(a,f),k[n].m(a,null),o=!0},p(g,[_]){const y={};_&16&&(y.hidden=g[4]),t.$set(y),g[1].attempts===0?i||(i=Ae(),i.c(),i.m(e,r)):i&&(i.d(1),i=null),g[1].guesses?u?u.p(g,_):(u=Me(g),u.c(),u.m(a,f)):u&&(u.d(1),u=null);let N=n;n=$(g),n===N?k[n].p(g,_):(ze(),z(k[N],1,1,()=>{k[N]=null}),Oe(),c=k[n],c?c.p(g,_):(c=k[n]=p[n](g),c.c()),B(c,1),c.m(a,null))},i(g){o||(B(t.$$.fragment,g),B(c),o=!0)},o(g){z(t.$$.fragment,g),z(c),o=!1},d(g){g&&m(e),ee(t),i&&i.d(),u&&u.d(),k[n].d()}}}const Le=l=>!l.correct,Re=l=>l.correct;function Dt(l,e,t){let s;We(l,Fe,g=>t(4,s=g));let r=!1,a={},f={},n=[];Be(async()=>{f.id=new URL(window.location.href).searchParams.get("playlist")||"5LQuCyn8AhcHpl31DgLaxL",t(0,r=new URL(window.location.href).searchParams.get("random")==="true"||!1),n=await vt(f);const g=await _t(f,r);if(new Date(R.get().date)!==new Date||r){const _=de(g);R.set({guesses:[],date:new Date,correct:!1,attempts:0}),X.set(_)}t(1,a=R.get())}),R.listen(g=>t(1,a=g));let c=[],o={};const i=()=>{if(!o)return;const g=[...a.guesses||[]];if(o.id===X.get().id)g.push({song:X.get(),correct:!0,artistCorrect:!0}),R.setKey("guesses",g),R.setKey("correct",!0),R.setKey("attempts",a.attempts+1);else{const _=n.find(y=>y.id==o.id);g.push({song:de(_),correct:!1,artistCorrect:o.artist.includes(X.get().artist)}),R.setKey("guesses",g),R.setKey("attempts",a.attempts+1)}t(3,o=void 0),ce.set(!0)},u=async g=>(t(2,c=n.filter(_=>(_.name+" "+_.artists[0].name).toLowerCase().includes(g.toLowerCase()))),t(2,c=c.map(_=>de(_))),c),p=g=>{window.open(`https://open.spotify.com/track/${g.song.id}`,"_blank").focus()},k=g=>{window.open(`https://open.spotify.com/track/${g.song.id}`,"_blank").focus()};function $(g){o=g,t(3,o)}return[r,a,c,o,s,i,u,p,k,$]}class St extends le{constructor(e){super();ae(this,e,Dt,It,oe,{})}}function Vt(l){let e,t,s,r,a,f,n,c,o,i,u,p,k,$,g;return a=new St({}),n=new at({}),{c(){e=b("div"),t=b("div"),s=b("div"),r=b("div"),Z(a.$$.fragment),f=V(),Z(n.$$.fragment),o=V(),i=b("div"),u=U("svg"),p=U("circle"),k=U("animateTransform"),this.h()},l(_){e=w(_,"DIV",{});var y=v(e);t=w(y,"DIV",{class:!0});var N=v(t);s=w(N,"DIV",{class:!0});var I=v(s);r=w(I,"DIV",{class:!0});var E=v(r);J(a.$$.fragment,E),E.forEach(m),I.forEach(m),f=T(N),J(n.$$.fragment,N),N.forEach(m),o=T(y),i=w(y,"DIV",{class:!0});var O=v(i);u=K(O,"svg",{xmlns:!0,"xmlns:xlink":!0,style:!0,width:!0,height:!0,viewBox:!0,preserveAspectRatio:!0});var H=v(u);p=K(H,"circle",{cx:!0,cy:!0,fill:!0,stroke:!0,"stroke-width":!0,r:!0,"stroke-dasharray":!0});var G=v(p);k=K(G,"animateTransform",{attributeName:!0,type:!0,repeatCount:!0,dur:!0,values:!0,keyTimes:!0}),v(k).forEach(m),G.forEach(m),H.forEach(m),O.forEach(m),y.forEach(m),this.h()},h(){d(r,"class","text-center p-3"),d(s,"class","max-w-screen-md mx-auto"),d(t,"class",c=`${l[0]?"hidden":""}`),d(k,"attributeName","transform"),d(k,"type","rotate"),d(k,"repeatCount","indefinite"),d(k,"dur","0.9345794392523364s"),d(k,"values","0 50 50;360 50 50"),d(k,"keyTimes","0;1"),d(p,"cx","50"),d(p,"cy","50"),d(p,"fill","none"),d(p,"stroke","currentColor"),d(p,"stroke-width","7"),d(p,"r","38"),d(p,"stroke-dasharray","179.0707812546182 61.690260418206066"),d(u,"xmlns","http://www.w3.org/2000/svg"),d(u,"xmlns:xlink","http://www.w3.org/1999/xlink"),ue(u,"margin","auto"),ue(u,"background","transparent"),ue(u,"display","block"),ue(u,"shape-rendering","auto"),d(u,"width","100px"),d(u,"height","100px"),d(u,"viewBox","0 0 100 100"),d(u,"preserveAspectRatio","xMidYMid"),d(i,"class",$=`w-full mx-auto text-center mt-20 ${l[0]?"":"hidden"} text-blue-600`)},m(_,y){C(_,e,y),h(e,t),h(t,s),h(s,r),x(a,r,null),h(t,f),x(n,t,null),h(e,o),h(e,i),h(i,u),h(u,p),h(p,k),g=!0},p(_,[y]){(!g||y&1&&c!==(c=`${_[0]?"hidden":""}`))&&d(t,"class",c),(!g||y&1&&$!==($=`w-full mx-auto text-center mt-20 ${_[0]?"":"hidden"} text-blue-600`))&&d(i,"class",$)},i(_){g||(B(a.$$.fragment,_),B(n.$$.fragment,_),g=!0)},o(_){z(a.$$.fragment,_),z(n.$$.fragment,_),g=!1},d(_){_&&m(e),ee(a),ee(n)}}}function Tt(l,e,t){let s=!0;return R.listen(r=>{r.date&&t(0,s=!1)}),[s]}class At extends le{constructor(e){super();ae(this,e,Tt,Vt,oe,{})}}export{At as default};