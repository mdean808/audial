import {
  S as q,
  i as A,
  s as H,
  e as w,
  b as $,
  t as _,
  d as C,
  f as d,
  h as p,
  K as L,
  o as K,
  g as F,
  l as h,
  r as R,
  a as G,
  w as x,
  m as k,
  n as v,
  u as S,
  c as P,
  x as I,
  p as y,
  H as b,
  a8 as N,
  y as D,
  I as M,
  B as E
} from '../../chunks/index-82e3b787.js';
import { g as T } from '../../chunks/navigation-75a744b1.js';
import { p as U, t as j, B as z } from '../../chunks/Button-88d2cbd5.js';
import { t as J, l as O, a as Q } from '../../chunks/util-4be2a3ca.js';
import { G as W, F as X, L as Y } from '../../chunks/Game-d358db62.js';
import '../../chunks/singletons-eca981c1.js';
import '../../chunks/index-950c601e.js';
function Z(u) {
  let t, e, s, o, l, r, i, a, c, n, V;
  return (
    (a = new z({
      props: {
        title: 'start custom audial',
        type: 'submit',
        $$slots: { default: [et] },
        $$scope: { ctx: u }
      }
    })),
    a.$on('click', u[5]),
    {
      c() {
        (t = h('div')),
          (e = h('div')),
          (s = R('paste the link to any spotify playlist below')),
          (o = G()),
          (l = h('input')),
          (r = G()),
          (i = h('div')),
          x(a.$$.fragment),
          this.h();
      },
      l(m) {
        t = k(m, 'DIV', { class: !0 });
        var f = v(t);
        e = k(f, 'DIV', { class: !0 });
        var g = v(e);
        (s = S(g, 'paste the link to any spotify playlist below')),
          g.forEach(p),
          (o = P(f)),
          (l = k(f, 'INPUT', { class: !0, name: !0, placeholder: !0 })),
          (r = P(f)),
          (i = k(f, 'DIV', { class: !0 }));
        var B = v(i);
        I(a.$$.fragment, B), B.forEach(p), f.forEach(p), this.h();
      },
      h() {
        y(e, 'class', 'text-center mx-auto w-full text-blue-100 mb-2'),
          y(
            l,
            'class',
            'p-2 border-2 w-full text-gray-400 rounded-sm border-gray-600 bg-gray-900 hover:border-gray-400 focus:border-gray-400 outline-none transition-all duration-200'
          ),
          y(l, 'name', 'spotify playlist input'),
          y(l, 'placeholder', 'spotify playlist link'),
          y(i, 'class', 'w-full mx-auto text-center my-4'),
          y(t, 'class', 'w-full w-10/12 max-w-2xl mx-auto my-5');
      },
      m(m, f) {
        $(m, t, f),
          b(t, e),
          b(e, s),
          b(t, o),
          b(t, l),
          N(l, u[0]),
          b(t, r),
          b(t, i),
          D(a, i, null),
          (c = !0),
          n || ((V = M(l, 'input', u[4])), (n = !0));
      },
      p(m, f) {
        f & 1 && l.value !== m[0] && N(l, m[0]);
        const g = {};
        f & 128 && (g.$$scope = { dirty: f, ctx: m }), a.$set(g);
      },
      i(m) {
        c || (d(a.$$.fragment, m), (c = !0));
      },
      o(m) {
        _(a.$$.fragment, m), (c = !1);
      },
      d(m) {
        m && p(t), E(a), (n = !1), V();
      }
    }
  );
}
function tt(u) {
  let t, e, s, o;
  const l = [rt, at],
    r = [];
  function i(a, c) {
    return a[2] ? 0 : 1;
  }
  return (
    (t = i(u)),
    (e = r[t] = l[t](u)),
    {
      c() {
        e.c(), (s = w());
      },
      l(a) {
        e.l(a), (s = w());
      },
      m(a, c) {
        r[t].m(a, c), $(a, s, c), (o = !0);
      },
      p(a, c) {
        let n = t;
        (t = i(a)),
          t !== n &&
            (F(),
            _(r[n], 1, 1, () => {
              r[n] = null;
            }),
            C(),
            (e = r[t]),
            e || ((e = r[t] = l[t](a)), e.c()),
            d(e, 1),
            e.m(s.parentNode, s));
      },
      i(a) {
        o || (d(e), (o = !0));
      },
      o(a) {
        _(e), (o = !1);
      },
      d(a) {
        r[t].d(a), a && p(s);
      }
    }
  );
}
function et(u) {
  let t;
  return {
    c() {
      t = R('start your custom audial');
    },
    l(e) {
      t = S(e, 'start your custom audial');
    },
    m(e, s) {
      $(e, t, s);
    },
    d(e) {
      e && p(t);
    }
  };
}
function at(u) {
  let t, e, s, o, l;
  return (
    (e = new W({ props: { custom: !0, random: !0 } })),
    (o = new X({ props: { custom: !0 } })),
    {
      c() {
        (t = h('div')), x(e.$$.fragment), (s = G()), x(o.$$.fragment), this.h();
      },
      l(r) {
        t = k(r, 'DIV', { class: !0 });
        var i = v(t);
        I(e.$$.fragment, i), i.forEach(p), (s = P(r)), I(o.$$.fragment, r), this.h();
      },
      h() {
        y(t, 'class', 'max-w-screen-md text-center p-3 mx-auto');
      },
      m(r, i) {
        $(r, t, i), D(e, t, null), $(r, s, i), D(o, r, i), (l = !0);
      },
      i(r) {
        l || (d(e.$$.fragment, r), d(o.$$.fragment, r), (l = !0));
      },
      o(r) {
        _(e.$$.fragment, r), _(o.$$.fragment, r), (l = !1);
      },
      d(r) {
        r && p(t), E(e), r && p(s), E(o, r);
      }
    }
  );
}
function rt(u) {
  let t, e;
  return (
    (t = new Y({})),
    {
      c() {
        x(t.$$.fragment);
      },
      l(s) {
        I(t.$$.fragment, s);
      },
      m(s, o) {
        D(t, s, o), (e = !0);
      },
      i(s) {
        e || (d(t.$$.fragment, s), (e = !0));
      },
      o(s) {
        _(t.$$.fragment, s), (e = !1);
      },
      d(s) {
        E(t, s);
      }
    }
  );
}
function st(u) {
  let t, e, s, o;
  const l = [tt, Z],
    r = [];
  function i(a, c) {
    return a[1] ? 0 : 1;
  }
  return (
    (t = i(u)),
    (e = r[t] = l[t](u)),
    {
      c() {
        e.c(), (s = w());
      },
      l(a) {
        e.l(a), (s = w());
      },
      m(a, c) {
        r[t].m(a, c), $(a, s, c), (o = !0);
      },
      p(a, [c]) {
        let n = t;
        (t = i(a)),
          t === n
            ? r[t].p(a, c)
            : (F(),
              _(r[n], 1, 1, () => {
                r[n] = null;
              }),
              C(),
              (e = r[t]),
              e ? e.p(a, c) : ((e = r[t] = l[t](a)), e.c()),
              d(e, 1),
              e.m(s.parentNode, s));
      },
      i(a) {
        o || (d(e), (o = !0));
      },
      o(a) {
        _(e), (o = !1);
      },
      d(a) {
        r[t].d(a), a && p(s);
      }
    }
  );
}
function lt(u, t, e) {
  let s, o;
  L(u, U, n => e(6, (s = n))), L(u, Q, n => e(2, (o = n)));
  let l = '',
    r = !1;
  U.subscribe(n => {
    !n.url.searchParams.get('playlist') && n.url.pathname.includes('custom') && e(1, (r = !1));
  }),
    K(async () => {
      s.url.searchParams.get('playlist') && (await i(s.url.searchParams.get('playlist')));
    });
  const i = async n => {
    if (!l && !n) return j.push('please provide a valid spotify playlist url.');
    (n = n || new URL(l).pathname.split('/')[2]),
      await T('/custom/random?playlist=' + n),
      e(1, (r = !0)),
      J.set({ attempts: 0, type: 'custom_random', guesses: [], date: new Date(), correct: !1 }),
      await O(n, !0);
  };
  function a() {
    (l = this.value), e(0, l);
  }
  return [l, r, o, i, a, () => i()];
}
class pt extends q {
  constructor(t) {
    super(), A(this, t, lt, st, H, {});
  }
}
export { pt as default };
