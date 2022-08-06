function w() {}
const K = t => t;
function $t(t, e) {
  for (const n in e) t[n] = e[n];
  return t;
}
function lt(t) {
  return t();
}
function nt() {
  return Object.create(null);
}
function C(t) {
  t.forEach(lt);
}
function Q(t) {
  return typeof t == 'function';
}
function Qt(t, e) {
  return t != t ? e == e : t !== e || (t && typeof t == 'object') || typeof t == 'function';
}
function wt(t) {
  return Object.keys(t).length === 0;
}
function vt(t, ...e) {
  if (t == null) return w;
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function Ut(t, e, n) {
  t.$$.on_destroy.push(vt(e, n));
}
function Vt(t, e, n, i) {
  if (t) {
    const s = ot(t, e, n, i);
    return t[0](s);
  }
}
function ot(t, e, n, i) {
  return t[1] && i ? $t(n.ctx.slice(), t[1](i(e))) : n.ctx;
}
function Xt(t, e, n, i) {
  if (t[2] && i) {
    const s = t[2](i(n));
    if (e.dirty === void 0) return s;
    if (typeof s == 'object') {
      const o = [],
        r = Math.max(e.dirty.length, s.length);
      for (let c = 0; c < r; c += 1) o[c] = e.dirty[c] | s[c];
      return o;
    }
    return e.dirty | s;
  }
  return e.dirty;
}
function Yt(t, e, n, i, s, o) {
  if (s) {
    const r = ot(e, n, i, o);
    t.p(r, s);
  }
}
function Zt(t) {
  if (t.ctx.length > 32) {
    const e = [],
      n = t.ctx.length / 32;
    for (let i = 0; i < n; i++) e[i] = -1;
    return e;
  }
  return -1;
}
function te(t) {
  return t == null ? '' : t;
}
const ct = typeof window < 'u';
let U = ct ? () => window.performance.now() : () => Date.now(),
  V = ct ? t => requestAnimationFrame(t) : w;
const E = new Set();
function at(t) {
  E.forEach(e => {
    e.c(t) || (E.delete(e), e.f());
  }),
    E.size !== 0 && V(at);
}
function X(t) {
  let e;
  return (
    E.size === 0 && V(at),
    {
      promise: new Promise(n => {
        E.add((e = { c: t, f: n }));
      }),
      abort() {
        E.delete(e);
      }
    }
  );
}
let F = !1;
function kt() {
  F = !0;
}
function Et() {
  F = !1;
}
function Ct(t, e, n, i) {
  for (; t < e; ) {
    const s = t + ((e - t) >> 1);
    n(s) <= i ? (t = s + 1) : (e = s);
  }
  return t;
}
function At(t) {
  if (t.hydrate_init) return;
  t.hydrate_init = !0;
  let e = t.childNodes;
  if (t.nodeName === 'HEAD') {
    const l = [];
    for (let a = 0; a < e.length; a++) {
      const f = e[a];
      f.claim_order !== void 0 && l.push(f);
    }
    e = l;
  }
  const n = new Int32Array(e.length + 1),
    i = new Int32Array(e.length);
  n[0] = -1;
  let s = 0;
  for (let l = 0; l < e.length; l++) {
    const a = e[l].claim_order,
      f = (s > 0 && e[n[s]].claim_order <= a ? s + 1 : Ct(1, s, _ => e[n[_]].claim_order, a)) - 1;
    i[l] = n[f] + 1;
    const u = f + 1;
    (n[u] = l), (s = Math.max(u, s));
  }
  const o = [],
    r = [];
  let c = e.length - 1;
  for (let l = n[s] + 1; l != 0; l = i[l - 1]) {
    for (o.push(e[l - 1]); c >= l; c--) r.push(e[c]);
    c--;
  }
  for (; c >= 0; c--) r.push(e[c]);
  o.reverse(), r.sort((l, a) => l.claim_order - a.claim_order);
  for (let l = 0, a = 0; l < r.length; l++) {
    for (; a < o.length && r[l].claim_order >= o[a].claim_order; ) a++;
    const f = a < o.length ? o[a] : null;
    t.insertBefore(r[l], f);
  }
}
function Nt(t, e) {
  t.appendChild(e);
}
function ut(t) {
  if (!t) return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && e.host ? e : t.ownerDocument;
}
function St(t) {
  const e = Y('style');
  return Tt(ut(t), e), e.sheet;
}
function Tt(t, e) {
  Nt(t.head || t, e);
}
function Mt(t, e) {
  if (F) {
    for (
      At(t),
        (t.actual_end_child === void 0 ||
          (t.actual_end_child !== null && t.actual_end_child.parentElement !== t)) &&
          (t.actual_end_child = t.firstChild);
      t.actual_end_child !== null && t.actual_end_child.claim_order === void 0;

    )
      t.actual_end_child = t.actual_end_child.nextSibling;
    e !== t.actual_end_child
      ? (e.claim_order !== void 0 || e.parentNode !== t) && t.insertBefore(e, t.actual_end_child)
      : (t.actual_end_child = e.nextSibling);
  } else (e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e);
}
function jt(t, e, n) {
  t.insertBefore(e, n || null);
}
function Rt(t, e, n) {
  F && !n ? Mt(t, e) : (e.parentNode !== t || e.nextSibling != n) && t.insertBefore(e, n || null);
}
function L(t) {
  t.parentNode.removeChild(t);
}
function ee(t, e) {
  for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
}
function Y(t) {
  return document.createElement(t);
}
function ft(t) {
  return document.createElementNS('http://www.w3.org/2000/svg', t);
}
function Z(t) {
  return document.createTextNode(t);
}
function ne() {
  return Z(' ');
}
function ie() {
  return Z('');
}
function se(t, e, n, i) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function re(t) {
  return function (e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function le(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function Bt(t) {
  return Array.from(t.childNodes);
}
function _t(t) {
  t.claim_info === void 0 && (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function dt(t, e, n, i, s = !1) {
  _t(t);
  const o = (() => {
    for (let r = t.claim_info.last_index; r < t.length; r++) {
      const c = t[r];
      if (e(c)) {
        const l = n(c);
        return l === void 0 ? t.splice(r, 1) : (t[r] = l), s || (t.claim_info.last_index = r), c;
      }
    }
    for (let r = t.claim_info.last_index - 1; r >= 0; r--) {
      const c = t[r];
      if (e(c)) {
        const l = n(c);
        return (
          l === void 0 ? t.splice(r, 1) : (t[r] = l),
          s ? l === void 0 && t.claim_info.last_index-- : (t.claim_info.last_index = r),
          c
        );
      }
    }
    return i();
  })();
  return (o.claim_order = t.claim_info.total_claimed), (t.claim_info.total_claimed += 1), o;
}
function ht(t, e, n, i) {
  return dt(
    t,
    s => s.nodeName === e,
    s => {
      const o = [];
      for (let r = 0; r < s.attributes.length; r++) {
        const c = s.attributes[r];
        n[c.name] || o.push(c.name);
      }
      o.forEach(r => s.removeAttribute(r));
    },
    () => i(e)
  );
}
function oe(t, e, n) {
  return ht(t, e, n, Y);
}
function ce(t, e, n) {
  return ht(t, e, n, ft);
}
function Dt(t, e) {
  return dt(
    t,
    n => n.nodeType === 3,
    n => {
      const i = '' + e;
      if (n.data.startsWith(i)) {
        if (n.data.length !== i.length) return n.splitText(i.length);
      } else n.data = i;
    },
    () => Z(e),
    !0
  );
}
function ae(t) {
  return Dt(t, ' ');
}
function it(t, e, n) {
  for (let i = n; i < t.length; i += 1) {
    const s = t[i];
    if (s.nodeType === 8 && s.textContent.trim() === e) return i;
  }
  return t.length;
}
function ue(t, e) {
  const n = it(t, 'HTML_TAG_START', 0),
    i = it(t, 'HTML_TAG_END', n);
  if (n === i) return new st(void 0, e);
  _t(t);
  const s = t.splice(n, i - n + 1);
  L(s[0]), L(s[s.length - 1]);
  const o = s.slice(1, s.length - 1);
  for (const r of o)
    (r.claim_order = t.claim_info.total_claimed), (t.claim_info.total_claimed += 1);
  return new st(o, e);
}
function fe(t, e) {
  (e = '' + e), t.wholeText !== e && (t.data = e);
}
function _e(t, e) {
  t.value = e == null ? '' : e;
}
function de(t, e, n, i) {
  n === null ? t.style.removeProperty(e) : t.style.setProperty(e, n, i ? 'important' : '');
}
function he(t, e, n) {
  t.classList[n ? 'add' : 'remove'](e);
}
function Ht(t, e, { bubbles: n = !1, cancelable: i = !1 } = {}) {
  const s = document.createEvent('CustomEvent');
  return s.initCustomEvent(t, n, i, e), s;
}
function me(t, e = document.body) {
  return Array.from(e.querySelectorAll(t));
}
class Lt {
  constructor(e = !1) {
    (this.is_svg = !1), (this.is_svg = e), (this.e = this.n = null);
  }
  c(e) {
    this.h(e);
  }
  m(e, n, i = null) {
    this.e ||
      (this.is_svg ? (this.e = ft(n.nodeName)) : (this.e = Y(n.nodeName)), (this.t = n), this.c(e)),
      this.i(i);
  }
  h(e) {
    (this.e.innerHTML = e), (this.n = Array.from(this.e.childNodes));
  }
  i(e) {
    for (let n = 0; n < this.n.length; n += 1) jt(this.t, this.n[n], e);
  }
  p(e) {
    this.d(), this.h(e), this.i(this.a);
  }
  d() {
    this.n.forEach(L);
  }
}
class st extends Lt {
  constructor(e, n = !1) {
    super(n), (this.e = this.n = null), (this.l = e);
  }
  c(e) {
    this.l ? (this.n = this.l) : super.c(e);
  }
  i(e) {
    for (let n = 0; n < this.n.length; n += 1) Rt(this.t, this.n[n], e);
  }
}
const O = new Map();
let P = 0;
function Ot(t) {
  let e = 5381,
    n = t.length;
  for (; n--; ) e = ((e << 5) - e) ^ t.charCodeAt(n);
  return e >>> 0;
}
function Pt(t, e) {
  const n = { stylesheet: St(e), rules: {} };
  return O.set(t, n), n;
}
function tt(t, e, n, i, s, o, r, c = 0) {
  const l = 16.666 / i;
  let a = `{
`;
  for (let m = 0; m <= 1; m += l) {
    const g = e + (n - e) * o(m);
    a +=
      m * 100 +
      `%{${r(g, 1 - g)}}
`;
  }
  const f =
      a +
      `100% {${r(n, 1 - n)}}
}`,
    u = `__svelte_${Ot(f)}_${c}`,
    _ = ut(t),
    { stylesheet: d, rules: h } = O.get(_) || Pt(_, t);
  h[u] || ((h[u] = !0), d.insertRule(`@keyframes ${u} ${f}`, d.cssRules.length));
  const y = t.style.animation || '';
  return (t.style.animation = `${y ? `${y}, ` : ''}${u} ${i}ms linear ${s}ms 1 both`), (P += 1), u;
}
function q(t, e) {
  const n = (t.style.animation || '').split(', '),
    i = n.filter(e ? o => o.indexOf(e) < 0 : o => o.indexOf('__svelte') === -1),
    s = n.length - i.length;
  s && ((t.style.animation = i.join(', ')), (P -= s), P || qt());
}
function qt() {
  V(() => {
    P ||
      (O.forEach(t => {
        const { stylesheet: e } = t;
        let n = e.cssRules.length;
        for (; n--; ) e.deleteRule(n);
        t.rules = {};
      }),
      O.clear());
  });
}
function pe(t, e, n, i) {
  if (!e) return w;
  const s = t.getBoundingClientRect();
  if (e.left === s.left && e.right === s.right && e.top === s.top && e.bottom === s.bottom)
    return w;
  const {
    delay: o = 0,
    duration: r = 300,
    easing: c = K,
    start: l = U() + o,
    end: a = l + r,
    tick: f = w,
    css: u
  } = n(t, { from: e, to: s }, i);
  let _ = !0,
    d = !1,
    h;
  function y() {
    u && (h = tt(t, 0, 1, r, o, c, u)), o || (d = !0);
  }
  function m() {
    u && q(t, h), (_ = !1);
  }
  return (
    X(g => {
      if ((!d && g >= l && (d = !0), d && g >= a && (f(1, 0), m()), !_)) return !1;
      if (d) {
        const $ = g - l,
          v = 0 + 1 * c($ / r);
        f(v, 1 - v);
      }
      return !0;
    }),
    y(),
    f(0, 1),
    m
  );
}
function ye(t) {
  const e = getComputedStyle(t);
  if (e.position !== 'absolute' && e.position !== 'fixed') {
    const { width: n, height: i } = e,
      s = t.getBoundingClientRect();
    (t.style.position = 'absolute'), (t.style.width = n), (t.style.height = i), zt(t, s);
  }
}
function zt(t, e) {
  const n = t.getBoundingClientRect();
  if (e.left !== n.left || e.top !== n.top) {
    const i = getComputedStyle(t),
      s = i.transform === 'none' ? '' : i.transform;
    t.style.transform = `${s} translate(${e.left - n.left}px, ${e.top - n.top}px)`;
  }
}
let T;
function S(t) {
  T = t;
}
function j() {
  if (!T) throw new Error('Function called outside component initialization');
  return T;
}
function ge(t) {
  j().$$.on_mount.push(t);
}
function xe(t) {
  j().$$.after_update.push(t);
}
function be(t) {
  j().$$.on_destroy.push(t);
}
function $e(t, e) {
  return j().$$.context.set(t, e), e;
}
function we(t) {
  return j().$$.context.get(t);
}
function ve(t, e) {
  const n = t.$$.callbacks[e.type];
  n && n.slice().forEach(i => i.call(this, e));
}
const N = [],
  rt = [],
  D = [],
  W = [],
  mt = Promise.resolve();
let J = !1;
function pt() {
  J || ((J = !0), mt.then(yt));
}
function ke() {
  return pt(), mt;
}
function M(t) {
  D.push(t);
}
function Ee(t) {
  W.push(t);
}
const I = new Set();
let B = 0;
function yt() {
  const t = T;
  do {
    for (; B < N.length; ) {
      const e = N[B];
      B++, S(e), Ft(e.$$);
    }
    for (S(null), N.length = 0, B = 0; rt.length; ) rt.pop()();
    for (let e = 0; e < D.length; e += 1) {
      const n = D[e];
      I.has(n) || (I.add(n), n());
    }
    D.length = 0;
  } while (N.length);
  for (; W.length; ) W.pop()();
  (J = !1), I.clear(), S(t);
}
function Ft(t) {
  if (t.fragment !== null) {
    t.update(), C(t.before_update);
    const e = t.dirty;
    (t.dirty = [-1]), t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(M);
  }
}
let A;
function gt() {
  return (
    A ||
      ((A = Promise.resolve()),
      A.then(() => {
        A = null;
      })),
    A
  );
}
function z(t, e, n) {
  t.dispatchEvent(Ht(`${e ? 'intro' : 'outro'}${n}`));
}
const H = new Set();
let k;
function Ce() {
  k = { r: 0, c: [], p: k };
}
function Ae() {
  k.r || C(k.c), (k = k.p);
}
function xt(t, e) {
  t && t.i && (H.delete(t), t.i(e));
}
function Gt(t, e, n, i) {
  if (t && t.o) {
    if (H.has(t)) return;
    H.add(t),
      k.c.push(() => {
        H.delete(t), i && (n && t.d(1), i());
      }),
      t.o(e);
  }
}
const bt = { duration: 0 };
function Ne(t, e, n) {
  let i = e(t, n),
    s = !1,
    o,
    r,
    c = 0;
  function l() {
    o && q(t, o);
  }
  function a() {
    const { delay: u = 0, duration: _ = 300, easing: d = K, tick: h = w, css: y } = i || bt;
    y && (o = tt(t, 0, 1, _, u, d, y, c++)), h(0, 1);
    const m = U() + u,
      g = m + _;
    r && r.abort(),
      (s = !0),
      M(() => z(t, !0, 'start')),
      (r = X($ => {
        if (s) {
          if ($ >= g) return h(1, 0), z(t, !0, 'end'), l(), (s = !1);
          if ($ >= m) {
            const v = d(($ - m) / _);
            h(v, 1 - v);
          }
        }
        return s;
      }));
  }
  let f = !1;
  return {
    start() {
      f || ((f = !0), q(t), Q(i) ? ((i = i()), gt().then(a)) : a());
    },
    invalidate() {
      f = !1;
    },
    end() {
      s && (l(), (s = !1));
    }
  };
}
function Se(t, e, n) {
  let i = e(t, n),
    s = !0,
    o;
  const r = k;
  r.r += 1;
  function c() {
    const { delay: l = 0, duration: a = 300, easing: f = K, tick: u = w, css: _ } = i || bt;
    _ && (o = tt(t, 1, 0, a, l, f, _));
    const d = U() + l,
      h = d + a;
    M(() => z(t, !1, 'start')),
      X(y => {
        if (s) {
          if (y >= h) return u(0, 1), z(t, !1, 'end'), --r.r || C(r.c), !1;
          if (y >= d) {
            const m = f((y - d) / a);
            u(1 - m, m);
          }
        }
        return s;
      });
  }
  return (
    Q(i)
      ? gt().then(() => {
          (i = i()), c();
        })
      : c(),
    {
      end(l) {
        l && i.tick && i.tick(1, 0), s && (o && q(t, o), (s = !1));
      }
    }
  );
}
function It(t, e) {
  Gt(t, 1, 1, () => {
    e.delete(t.key);
  });
}
function Te(t, e) {
  t.f(), It(t, e);
}
function Me(t, e, n, i, s, o, r, c, l, a, f, u) {
  let _ = t.length,
    d = o.length,
    h = _;
  const y = {};
  for (; h--; ) y[t[h].key] = h;
  const m = [],
    g = new Map(),
    $ = new Map();
  for (h = d; h--; ) {
    const p = u(s, o, h),
      x = n(p);
    let b = r.get(x);
    b ? i && b.p(p, e) : ((b = a(x, p)), b.c()),
      g.set(x, (m[h] = b)),
      x in y && $.set(x, Math.abs(h - y[x]));
  }
  const v = new Set(),
    et = new Set();
  function G(p) {
    xt(p, 1), p.m(c, f), r.set(p.key, p), (f = p.first), d--;
  }
  for (; _ && d; ) {
    const p = m[d - 1],
      x = t[_ - 1],
      b = p.key,
      R = x.key;
    p === x
      ? ((f = p.first), _--, d--)
      : g.has(R)
      ? !r.has(b) || v.has(b)
        ? G(p)
        : et.has(R)
        ? _--
        : $.get(b) > $.get(R)
        ? (et.add(b), G(p))
        : (v.add(R), _--)
      : (l(x, r), _--);
  }
  for (; _--; ) {
    const p = t[_];
    g.has(p.key) || l(p, r);
  }
  for (; d; ) G(m[d - 1]);
  return m;
}
function je(t, e) {
  const n = {},
    i = {},
    s = { $$scope: 1 };
  let o = t.length;
  for (; o--; ) {
    const r = t[o],
      c = e[o];
    if (c) {
      for (const l in r) l in c || (i[l] = 1);
      for (const l in c) s[l] || ((n[l] = c[l]), (s[l] = 1));
      t[o] = c;
    } else for (const l in r) s[l] = 1;
  }
  for (const r in i) r in n || (n[r] = void 0);
  return n;
}
function Re(t) {
  return typeof t == 'object' && t !== null ? t : {};
}
function Be(t, e, n) {
  const i = t.$$.props[e];
  i !== void 0 && ((t.$$.bound[i] = n), n(t.$$.ctx[i]));
}
function De(t) {
  t && t.c();
}
function He(t, e) {
  t && t.l(e);
}
function Wt(t, e, n, i) {
  const { fragment: s, on_mount: o, on_destroy: r, after_update: c } = t.$$;
  s && s.m(e, n),
    i ||
      M(() => {
        const l = o.map(lt).filter(Q);
        r ? r.push(...l) : C(l), (t.$$.on_mount = []);
      }),
    c.forEach(M);
}
function Jt(t, e) {
  const n = t.$$;
  n.fragment !== null &&
    (C(n.on_destroy),
    n.fragment && n.fragment.d(e),
    (n.on_destroy = n.fragment = null),
    (n.ctx = []));
}
function Kt(t, e) {
  t.$$.dirty[0] === -1 && (N.push(t), pt(), t.$$.dirty.fill(0)),
    (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function Le(t, e, n, i, s, o, r, c = [-1]) {
  const l = T;
  S(t);
  const a = (t.$$ = {
    fragment: null,
    ctx: null,
    props: o,
    update: w,
    not_equal: s,
    bound: nt(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (l ? l.$$.context : [])),
    callbacks: nt(),
    dirty: c,
    skip_bound: !1,
    root: e.target || l.$$.root
  });
  r && r(a.root);
  let f = !1;
  if (
    ((a.ctx = n
      ? n(t, e.props || {}, (u, _, ...d) => {
          const h = d.length ? d[0] : _;
          return (
            a.ctx &&
              s(a.ctx[u], (a.ctx[u] = h)) &&
              (!a.skip_bound && a.bound[u] && a.bound[u](h), f && Kt(t, u)),
            _
          );
        })
      : []),
    a.update(),
    (f = !0),
    C(a.before_update),
    (a.fragment = i ? i(a.ctx) : !1),
    e.target)
  ) {
    if (e.hydrate) {
      kt();
      const u = Bt(e.target);
      a.fragment && a.fragment.l(u), u.forEach(L);
    } else a.fragment && a.fragment.c();
    e.intro && xt(t.$$.fragment), Wt(t, e.target, e.anchor, e.customElement), Et(), yt();
  }
  S(l);
}
class Oe {
  $destroy() {
    Jt(this, 1), (this.$destroy = w);
  }
  $on(e, n) {
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return (
      i.push(n),
      () => {
        const s = i.indexOf(n);
        s !== -1 && i.splice(s, 1);
      }
    );
  }
  $set(e) {
    this.$$set && !wt(e) && ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
  }
}
export {
  Se as $,
  Re as A,
  Jt as B,
  $t as C,
  ke as D,
  w as E,
  ft as F,
  ce as G,
  Mt as H,
  se as I,
  C as J,
  Ut as K,
  K as L,
  Q as M,
  U as N,
  X as O,
  he as P,
  be as Q,
  st as R,
  Oe as S,
  ue as T,
  Me as U,
  te as V,
  ye as W,
  zt as X,
  pe as Y,
  M as Z,
  Ne as _,
  ne as a,
  Te as a0,
  Vt as a1,
  me as a2,
  Yt as a3,
  Zt as a4,
  Xt as a5,
  we as a6,
  ve as a7,
  _e as a8,
  ee as a9,
  rt as aa,
  re as ab,
  Be as ac,
  Ee as ad,
  Rt as b,
  ae as c,
  Ae as d,
  ie as e,
  xt as f,
  Ce as g,
  L as h,
  Le as i,
  $e as j,
  xe as k,
  Y as l,
  oe as m,
  Bt as n,
  ge as o,
  le as p,
  de as q,
  Z as r,
  Qt as s,
  Gt as t,
  Dt as u,
  fe as v,
  De as w,
  He as x,
  Wt as y,
  je as z
};
