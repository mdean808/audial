import {
  S as Re,
  i as Ue,
  s as qe,
  l as n,
  r as e,
  a as m,
  m as o,
  n as c,
  u as s,
  h as r,
  c as p,
  p as a,
  b as ze,
  H as t,
  I as Be,
  v as x,
  E as Ce,
  o as Fe
} from '../chunks/index-82e3b787.js';
import { d as Me, g as ot, c as Te, t as Ye, r as je, b as Je } from '../chunks/util-4be2a3ca.js';
import { g as Ke } from '../chunks/navigation-75a744b1.js';
import '../chunks/singletons-eca981c1.js';
function Oe(i) {
  let d,
    v,
    W,
    E,
    L,
    h,
    I,
    N = i[0].length + '',
    X,
    ct,
    Et = Me(new Date(), i[5]) + '',
    f,
    l,
    It,
    H,
    Z = i[0].filter(Pe).length + '',
    it,
    bt,
    wt,
    R,
    me = i[6]() + '',
    yt,
    At,
    Dt,
    U,
    pe = i[7]() + '',
    St,
    Lt,
    Gt,
    q,
    ve = i[8]() + '',
    kt,
    Vt,
    Ct,
    Y,
    Pt,
    xt,
    $,
    A,
    w,
    tt = i[1].length + '',
    ut,
    Nt,
    j,
    Ht,
    Rt,
    et = ((i[1].filter(xe).length / i[1].length) * 100 || 0) + '',
    ft,
    Ut,
    qt,
    y,
    st = i[2].length + '',
    dt,
    zt,
    J,
    Bt,
    Ft,
    lt = ((i[2].filter(Ne).length / i[2].length) * 100 || 0) + '',
    ht,
    Mt,
    Tt,
    _,
    at = i[3].length + '',
    gt,
    Yt,
    K,
    jt,
    Jt,
    O,
    Kt,
    Ot,
    rt = ((i[3].filter(He).length / i[3].length) * 100 || 0) + '',
    mt,
    Qt,
    Wt,
    b,
    z,
    Xt,
    G,
    Zt,
    $t,
    te,
    B,
    ee,
    k,
    se,
    le,
    ae,
    V,
    re,
    C,
    ne,
    oe,
    ce,
    F,
    ie,
    ue,
    _e;
  return {
    c() {
      (d = n('div')),
        (v = n('h1')),
        (W = e('official stats')),
        (E = m()),
        (L = n('div')),
        (h = n('ul')),
        (I = n('li')),
        (X = e(N)),
        (ct = e('/')),
        (f = e(Et)),
        (l = e(` audials
                attempted.`)),
        (It = m()),
        (H = n('li')),
        (it = e(Z)),
        (bt = e(' correct guesses.')),
        (wt = m()),
        (R = n('li')),
        (yt = e(me)),
        (At = e(' correct artist guesses.')),
        (Dt = m()),
        (U = n('li')),
        (St = e(pe)),
        (Lt = e(' incorrect guesses.')),
        (Gt = m()),
        (q = n('li')),
        (kt = e(ve)),
        (Vt = e(' skips.')),
        (Ct = m()),
        (Y = n('h1')),
        (Pt = e('unofficial stats')),
        (xt = m()),
        ($ = n('div')),
        (A = n('ul')),
        (w = n('li')),
        (ut = e(tt)),
        (Nt = m()),
        (j = n('span')),
        (Ht = e('random')),
        (Rt = e(` attempts
                with `)),
        (ft = e(et)),
        (Ut = e('% correct.')),
        (qt = m()),
        (y = n('li')),
        (dt = e(st)),
        (zt = m()),
        (J = n('span')),
        (Bt = e('custom')),
        (Ft = e(` attempts
                with `)),
        (ht = e(lt)),
        (Mt = e('% correct.')),
        (Tt = m()),
        (_ = n('li')),
        (gt = e(at)),
        (Yt = m()),
        (K = n('span')),
        (jt = e('random')),
        (Jt = m()),
        (O = n('span')),
        (Kt = e('custom')),
        (Ot = e(` attempts
                with `)),
        (mt = e(rt)),
        (Qt = e(`%
                correct.`)),
        (Wt = m()),
        (b = n('div')),
        (z = n('div')),
        (Xt = e('open source on ')),
        (G = n('a')),
        (Zt = e('github')),
        ($t = e('.')),
        (te = m()),
        (B = n('div')),
        (ee = e('made by ')),
        (k = n('a')),
        (se = e('morgan dean')),
        (le = e(' with svelte, firebase, and github pages.')),
        (ae = m()),
        (V = n('div')),
        (re = e(`suggestions? contact me on
            `)),
        (C = n('a')),
        (ne = e('twitter')),
        (oe = e('.')),
        (ce = m()),
        (F = n('p')),
        (ie = e('reset local data')),
        this.h();
    },
    l(g) {
      d = o(g, 'DIV', { class: !0 });
      var u = c(d);
      v = o(u, 'H1', { class: !0 });
      var Ee = c(v);
      (W = s(Ee, 'official stats')), Ee.forEach(r), (E = p(u)), (L = o(u, 'DIV', {}));
      var Ie = c(L);
      h = o(Ie, 'UL', { class: !0 });
      var D = c(h);
      I = o(D, 'LI', { class: !0 });
      var nt = c(I);
      (X = s(nt, N)),
        (ct = s(nt, '/')),
        (f = s(nt, Et)),
        (l = s(
          nt,
          ` audials
                attempted.`
        )),
        nt.forEach(r),
        (It = p(D)),
        (H = o(D, 'LI', { class: !0 }));
      var fe = c(H);
      (it = s(fe, Z)),
        (bt = s(fe, ' correct guesses.')),
        fe.forEach(r),
        (wt = p(D)),
        (R = o(D, 'LI', { class: !0 }));
      var de = c(R);
      (yt = s(de, me)),
        (At = s(de, ' correct artist guesses.')),
        de.forEach(r),
        (Dt = p(D)),
        (U = o(D, 'LI', { class: !0 }));
      var he = c(U);
      (St = s(he, pe)),
        (Lt = s(he, ' incorrect guesses.')),
        he.forEach(r),
        (Gt = p(D)),
        (q = o(D, 'LI', { class: !0 }));
      var ge = c(q);
      (kt = s(ge, ve)),
        (Vt = s(ge, ' skips.')),
        ge.forEach(r),
        D.forEach(r),
        Ie.forEach(r),
        (Ct = p(u)),
        (Y = o(u, 'H1', { class: !0 }));
      var be = c(Y);
      (Pt = s(be, 'unofficial stats')), be.forEach(r), (xt = p(u)), ($ = o(u, 'DIV', {}));
      var we = c($);
      A = o(we, 'UL', { class: !0 });
      var Q = c(A);
      w = o(Q, 'LI', { class: !0 });
      var M = c(w);
      (ut = s(M, tt)), (Nt = p(M)), (j = o(M, 'SPAN', { class: !0 }));
      var ye = c(j);
      (Ht = s(ye, 'random')),
        ye.forEach(r),
        (Rt = s(
          M,
          ` attempts
                with `
        )),
        (ft = s(M, et)),
        (Ut = s(M, '% correct.')),
        M.forEach(r),
        (qt = p(Q)),
        (y = o(Q, 'LI', { class: !0 }));
      var T = c(y);
      (dt = s(T, st)), (zt = p(T)), (J = o(T, 'SPAN', { class: !0 }));
      var Ae = c(J);
      (Bt = s(Ae, 'custom')),
        Ae.forEach(r),
        (Ft = s(
          T,
          ` attempts
                with `
        )),
        (ht = s(T, lt)),
        (Mt = s(T, '% correct.')),
        T.forEach(r),
        (Tt = p(Q)),
        (_ = o(Q, 'LI', { class: !0 }));
      var S = c(_);
      (gt = s(S, at)), (Yt = p(S)), (K = o(S, 'SPAN', { class: !0 }));
      var De = c(K);
      (jt = s(De, 'random')), De.forEach(r), (Jt = p(S)), (O = o(S, 'SPAN', { class: !0 }));
      var Se = c(O);
      (Kt = s(Se, 'custom')),
        Se.forEach(r),
        (Ot = s(
          S,
          ` attempts
                with `
        )),
        (mt = s(S, rt)),
        (Qt = s(
          S,
          `%
                correct.`
        )),
        S.forEach(r),
        Q.forEach(r),
        we.forEach(r),
        (Wt = p(u)),
        (b = o(u, 'DIV', { class: !0 }));
      var P = c(b);
      z = o(P, 'DIV', {});
      var pt = c(z);
      (Xt = s(pt, 'open source on ')), (G = o(pt, 'A', { class: !0, href: !0, target: !0 }));
      var Le = c(G);
      (Zt = s(Le, 'github')),
        Le.forEach(r),
        ($t = s(pt, '.')),
        pt.forEach(r),
        (te = p(P)),
        (B = o(P, 'DIV', {}));
      var vt = c(B);
      (ee = s(vt, 'made by ')), (k = o(vt, 'A', { class: !0, href: !0, target: !0 }));
      var Ge = c(k);
      (se = s(Ge, 'morgan dean')),
        Ge.forEach(r),
        (le = s(vt, ' with svelte, firebase, and github pages.')),
        vt.forEach(r),
        (ae = p(P)),
        (V = o(P, 'DIV', { class: !0 }));
      var _t = c(V);
      (re = s(
        _t,
        `suggestions? contact me on
            `
      )),
        (C = o(_t, 'A', { class: !0, href: !0, target: !0 }));
      var ke = c(C);
      (ne = s(ke, 'twitter')),
        ke.forEach(r),
        (oe = s(_t, '.')),
        _t.forEach(r),
        (ce = p(P)),
        (F = o(P, 'P', { class: !0 }));
      var Ve = c(F);
      (ie = s(Ve, 'reset local data')), Ve.forEach(r), P.forEach(r), u.forEach(r), this.h();
    },
    h() {
      a(v, 'class', 'text-4xl text-white'),
        a(I, 'class', 'text-blue-500'),
        a(H, 'class', 'text-green-500'),
        a(R, 'class', 'text-amber-400'),
        a(U, 'class', 'text-red-600'),
        a(q, 'class', 'text-gray-400'),
        a(h, 'class', 'ml-4 mt-2'),
        a(Y, 'class', 'text-4xl text-white mt-3'),
        a(j, 'class', 'text-red-600'),
        a(w, 'class', 'text-gray-300'),
        a(J, 'class', 'text-green-500'),
        a(y, 'class', 'text-gray-300'),
        a(K, 'class', 'text-red-600'),
        a(O, 'class', 'text-green-500'),
        a(_, 'class', 'text-gray-300'),
        a(A, 'class', 'ml-4 mt-2'),
        a(G, 'class', 'underline-offset-1 underline text-blue-500'),
        a(G, 'href', 'https://github.com/mdean808/audial'),
        a(G, 'target', '_blank'),
        a(k, 'class', 'underline-offset-1 underline text-blue-500'),
        a(k, 'href', 'https://mogdan.xyz'),
        a(k, 'target', '_blank'),
        a(C, 'class', 'underline underline-offset-1 text-blue-500'),
        a(C, 'href', 'https://twitter.com/mdean808'),
        a(C, 'target', '_blank'),
        a(V, 'class', 'mt-6'),
        a(F, 'class', 'cursor-pointer text-red-400 underline-offset-1 underline mt-8'),
        a(b, 'class', 'mt-10 text-gray-400'),
        a(d, 'class', 'w-8/12 mx-auto mt-2');
    },
    m(g, u) {
      ze(g, d, u),
        t(d, v),
        t(v, W),
        t(d, E),
        t(d, L),
        t(L, h),
        t(h, I),
        t(I, X),
        t(I, ct),
        t(I, f),
        t(I, l),
        t(h, It),
        t(h, H),
        t(H, it),
        t(H, bt),
        t(h, wt),
        t(h, R),
        t(R, yt),
        t(R, At),
        t(h, Dt),
        t(h, U),
        t(U, St),
        t(U, Lt),
        t(h, Gt),
        t(h, q),
        t(q, kt),
        t(q, Vt),
        t(d, Ct),
        t(d, Y),
        t(Y, Pt),
        t(d, xt),
        t(d, $),
        t($, A),
        t(A, w),
        t(w, ut),
        t(w, Nt),
        t(w, j),
        t(j, Ht),
        t(w, Rt),
        t(w, ft),
        t(w, Ut),
        t(A, qt),
        t(A, y),
        t(y, dt),
        t(y, zt),
        t(y, J),
        t(J, Bt),
        t(y, Ft),
        t(y, ht),
        t(y, Mt),
        t(A, Tt),
        t(A, _),
        t(_, gt),
        t(_, Yt),
        t(_, K),
        t(K, jt),
        t(_, Jt),
        t(_, O),
        t(O, Kt),
        t(_, Ot),
        t(_, mt),
        t(_, Qt),
        t(d, Wt),
        t(d, b),
        t(b, z),
        t(z, Xt),
        t(z, G),
        t(G, Zt),
        t(z, $t),
        t(b, te),
        t(b, B),
        t(B, ee),
        t(B, k),
        t(k, se),
        t(B, le),
        t(b, ae),
        t(b, V),
        t(V, re),
        t(V, C),
        t(C, ne),
        t(V, oe),
        t(b, ce),
        t(b, F),
        t(F, ie),
        ue || ((_e = Be(F, 'click', i[4])), (ue = !0));
    },
    p(g, [u]) {
      u & 1 && N !== (N = g[0].length + '') && x(X, N),
        u & 1 && Z !== (Z = g[0].filter(Pe).length + '') && x(it, Z),
        u & 2 && tt !== (tt = g[1].length + '') && x(ut, tt),
        u & 2 &&
          et !== (et = ((g[1].filter(xe).length / g[1].length) * 100 || 0) + '') &&
          x(ft, et),
        u & 4 && st !== (st = g[2].length + '') && x(dt, st),
        u & 4 &&
          lt !== (lt = ((g[2].filter(Ne).length / g[2].length) * 100 || 0) + '') &&
          x(ht, lt),
        u & 8 && at !== (at = g[3].length + '') && x(gt, at),
        u & 8 &&
          rt !== (rt = ((g[3].filter(He).length / g[3].length) * 100 || 0) + '') &&
          x(mt, rt);
    },
    i: Ce,
    o: Ce,
    d(g) {
      g && r(d), (ue = !1), _e();
    }
  };
}
const Pe = i => i.correct,
  xe = i => i.correct,
  Ne = i => i.correct,
  He = i => i.correct;
function Qe(i, d, v) {
  const W = () => {
    Te.set({ attempts: 0, guesses: [], correct: !1, date: new Date() }),
      Ye.set({ attempts: 0, guesses: [], correct: !1, date: new Date() }),
      je.set(!1),
      Je.set({}),
      ot.set({ array: [] }),
      Ke('/');
  };
  let E = [],
    L = [],
    h = [],
    I = [];
  const N = new Date('4/12/2022');
  return (
    Fe(() => {
      const f = ot.get().array;
      v(0, (E = f.filter(l => l.type === 'default'))),
        v(1, (L = f.filter(l => l.type === 'random'))),
        v(2, (h = f.filter(l => l.type === 'custom'))),
        v(3, (I = f.filter(l => l.type === 'custom_random')));
    }),
    [
      E,
      L,
      h,
      I,
      W,
      N,
      () => {
        v(0, (E = ot.get().array.filter(l => l.type === 'default')));
        let f = [];
        for (const l of E) f = f.concat(l.guesses);
        return f.filter(l => l.artistCorrect && !l.correct).length;
      },
      () => {
        v(0, (E = ot.get().array.filter(l => l.type === 'default')));
        let f = [];
        for (const l of E) f = f.concat(l.guesses);
        return f.filter(l => !l.artistCorrect && !l.correct && l.song).length;
      },
      () => {
        v(0, (E = ot.get().array.filter(l => l.type === 'default')));
        let f = [];
        for (const l of E) f = f.concat(l.guesses);
        return f.filter(l => !l.artistCorrect && !l.correct && !l.song).length;
      }
    ]
  );
}
class ts extends Re {
  constructor(d) {
    super(), Ue(this, d, Qe, Oe, qe, {});
  }
}
export { ts as default };
