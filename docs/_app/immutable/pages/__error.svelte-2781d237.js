import {
  S as C,
  i as D,
  s as I,
  l as p,
  r as _,
  a as P,
  m as v,
  n as x,
  u as E,
  h,
  c as q,
  p as g,
  b as N,
  H as r,
  v as w,
  E as A
} from '../chunks/index-82e3b787.js';
function V(l) {
  let t,
    s,
    i,
    c,
    e,
    o,
    d,
    S,
    b,
    u = l[1].message.split(':')[0] + '',
    m;
  return {
    c() {
      (t = p('div')),
        (s = p('h1')),
        (i = _('error')),
        (c = P()),
        (e = p('p')),
        (o = p('span')),
        (d = _(l[0])),
        (S = _(':')),
        (b = P()),
        (m = _(u)),
        this.h();
    },
    l(n) {
      t = v(n, 'DIV', { class: !0 });
      var a = x(t);
      s = v(a, 'H1', { class: !0 });
      var H = x(s);
      (i = E(H, 'error')), H.forEach(h), (c = q(a)), (e = v(a, 'P', { class: !0 }));
      var f = x(e);
      o = v(f, 'SPAN', { class: !0 });
      var y = x(o);
      (d = E(y, l[0])),
        (S = E(y, ':')),
        y.forEach(h),
        (b = q(f)),
        (m = E(f, u)),
        f.forEach(h),
        a.forEach(h),
        this.h();
    },
    h() {
      g(s, 'class', 'text-5xl text-red-600'),
        g(o, 'class', 'text-amber-400'),
        g(e, 'class', 'text-lg'),
        g(t, 'class', 'max-w-screen-md mx-auto px-4 py-2');
    },
    m(n, a) {
      N(n, t, a), r(t, s), r(s, i), r(t, c), r(t, e), r(e, o), r(o, d), r(o, S), r(e, b), r(e, m);
    },
    p(n, [a]) {
      a & 1 && w(d, n[0]), a & 2 && u !== (u = n[1].message.split(':')[0] + '') && w(m, u);
    },
    i: A,
    o: A,
    d(n) {
      n && h(t);
    }
  };
}
function z({ error: l, status: t }) {
  return { props: { status: t, error: l } };
}
function j(l, t, s) {
  let { status: i } = t,
    { error: c } = t;
  return (
    (l.$$set = e => {
      'status' in e && s(0, (i = e.status)), 'error' in e && s(1, (c = e.error));
    }),
    [i, c]
  );
}
class B extends C {
  constructor(t) {
    super(), D(this, t, j, V, I, { status: 0, error: 1 });
  }
}
export { B as default, z as load };
