function lt(e, t, n, r, i) {
  for (t = t.split ? t.split('.') : t, r = 0; r < t.length; r++) e = e ? e[t[r]] : i;
  return e === i ? n : e;
}
var ke = 'undefined',
  ft = 'object',
  Ut = 'any',
  zt = '*',
  ae = '__',
  Ce = typeof process < 'u' ? process : {};
Ce.env && Ce.env.NODE_ENV;
var F = typeof window < 'u';
Ce.versions != null && Ce.versions.node != null;
typeof Deno < 'u' && Deno.core;
(F && window.name === 'nodejs') ||
  (typeof navigator < 'u' &&
    (navigator.userAgent.includes('Node.js') || navigator.userAgent.includes('jsdom')));
function Ct(e, t) {
  return t.charAt(0)[e]() + t.slice(1);
}
var un = Ct.bind(null, 'toUpperCase'),
  sn = Ct.bind(null, 'toLowerCase');
function cn(e) {
  return Rt(e)
    ? un('null')
    : typeof e == 'object'
    ? gn(e)
    : Object.prototype.toString.call(e).slice(8, -1);
}
function Re(e, t) {
  t === void 0 && (t = !0);
  var n = cn(e);
  return t ? sn(n) : n;
}
function Ne(e, t) {
  return typeof t === e;
}
var Y = Ne.bind(null, 'function'),
  pe = Ne.bind(null, 'string'),
  fe = Ne.bind(null, 'undefined'),
  ln = Ne.bind(null, 'boolean');
Ne.bind(null, 'symbol');
function Rt(e) {
  return e === null;
}
function fn(e) {
  return Re(e) === 'number' && !isNaN(e);
}
function dn(e) {
  return Re(e) === 'array';
}
function W(e) {
  if (!pn(e)) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function pn(e) {
  return e && (typeof e == 'object' || e !== null);
}
function gn(e) {
  return Y(e.constructor) ? e.constructor.name : null;
}
function mn(e) {
  return (
    e instanceof Error || (pe(e.message) && e.constructor && fn(e.constructor.stackTraceLimit))
  );
}
function qt(e, t) {
  if (typeof t != 'object' || Rt(t)) return !1;
  if (t instanceof e) return !0;
  var n = Re(new e(''));
  if (mn(t))
    for (; t; ) {
      if (Re(t) === n) return !0;
      t = Object.getPrototypeOf(t);
    }
  return !1;
}
qt.bind(null, TypeError);
qt.bind(null, SyntaxError);
function Ve(e, t) {
  var n = e instanceof Element || e instanceof HTMLDocument;
  return n && t ? vn(e, t) : n;
}
function vn(e, t) {
  return t === void 0 && (t = ''), e && e.nodeName === t.toUpperCase();
}
function Be(e) {
  var t = [].slice.call(arguments, 1);
  return function () {
    return e.apply(void 0, [].slice.call(arguments).concat(t));
  };
}
Be(Ve, 'form');
Be(Ve, 'button');
Be(Ve, 'input');
Be(Ve, 'select');
function dt(e) {
  try {
    return decodeURIComponent(e.replace(/\+/g, ' '));
  } catch {
    return null;
  }
}
function yn() {
  if (F) {
    var e = navigator,
      t = e.languages;
    return e.userLanguage || (t && t.length ? t[0] : e.language);
  }
}
function hn() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {}
}
function bn(e) {
  return (function (t) {
    for (var n, r = Object.create(null), i = /([^&=]+)=?([^&]*)/g; (n = i.exec(t)); ) {
      var a = dt(n[1]),
        u = dt(n[2]);
      a.substring(a.length - 2) === '[]'
        ? (r[(a = a.substring(0, a.length - 2))] || (r[a] = [])).push(u)
        : (r[a] = u === '' || u);
    }
    for (var l in r) {
      var d = l.split('[');
      d.length > 1 &&
        (wn(
          r,
          d.map(function (f) {
            return f.replace(/[?[\]\\ ]/g, '');
          }),
          r[l]
        ),
        delete r[l]);
    }
    return r;
  })(
    (function (t) {
      if (t) {
        var n = t.match(/\?(.*)/);
        return n && n[1] ? n[1].split('#')[0] : '';
      }
      return F && window.location.search.substring(1);
    })(e)
  );
}
function wn(e, t, n) {
  for (var r = t.length - 1, i = 0; i < r; ++i) {
    var a = t[i];
    if (a === '__proto__' || a === 'constructor') break;
    a in e || (e[a] = {}), (e = e[a]);
  }
  e[t[r]] = n;
}
function Je() {
  for (var e = '', t = 0, n = (4294967295 * Math.random()) | 0; t++ < 36; ) {
    var r = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'[t - 1],
      i = 15 & n;
    (e += r == '-' || r == '4' ? r : (r == 'x' ? i : (3 & i) | 8).toString(16)),
      (n = t % 8 == 0 ? (4294967295 * Math.random()) | 0 : n >> 4);
  }
  return e;
}
var Ee = 'global',
  ye = ae + 'global' + ae,
  he =
    (typeof self === ft && self.self === self && self) ||
    (typeof global === ft && global.global === global && global) ||
    void 0;
function oe(e) {
  return he[ye][e];
}
function ue(e, t) {
  return (he[ye][e] = t);
}
function we(e) {
  delete he[ye][e];
}
function Se(e, t, n) {
  var r;
  try {
    if (tt(e)) {
      var i = window[e];
      r = i[t].bind(i);
    }
  } catch {}
  return r || n;
}
he[ye] || (he[ye] = {});
var je = {};
function tt(e) {
  if (typeof je[e] !== ke) return je[e];
  try {
    var t = window[e];
    t.setItem(ke, ke), t.removeItem(ke);
  } catch {
    return (je[e] = !1);
  }
  return (je[e] = !0);
}
function h() {
  return (
    (h =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    h.apply(this, arguments)
  );
}
var ee = 'function',
  Z = 'undefined',
  Sn = '@@redux/' + Math.random().toString(36),
  pt = (function () {
    return (typeof Symbol === ee && Symbol.observable) || '@@observable';
  })(),
  Te = ' != ' + ee;
function Vt(e, t, n) {
  var r;
  if ((typeof t === ee && typeof n === Z && ((n = t), (t = void 0)), typeof n !== Z)) {
    if (typeof n !== ee) throw new Error('enhancer' + Te);
    return n(Vt)(e, t);
  }
  if (typeof e !== ee) throw new Error('reducer' + Te);
  var i = e,
    a = t,
    u = [],
    l = u,
    d = !1;
  function f() {
    l === u && (l = u.slice());
  }
  function m() {
    return a;
  }
  function g(v) {
    if (typeof v !== ee) throw new Error('Listener' + Te);
    var E = !0;
    return (
      f(),
      l.push(v),
      function () {
        if (E) {
          (E = !1), f();
          var w = l.indexOf(v);
          l.splice(w, 1);
        }
      }
    );
  }
  function _(v) {
    if (!W(v)) throw new Error('Act != obj');
    if (typeof v.type === Z) throw new Error('ActType ' + Z);
    if (d) throw new Error('Dispatch in reducer');
    try {
      (d = !0), (a = i(a, v));
    } finally {
      d = !1;
    }
    for (var E = (u = l), w = 0; w < E.length; w++) (0, E[w])();
    return v;
  }
  return (
    _({ type: '@@redux/INIT' }),
    ((r = {
      dispatch: _,
      subscribe: g,
      getState: m,
      replaceReducer: function (v) {
        if (typeof v !== ee) throw new Error('next reducer' + Te);
        (i = v), _({ type: '@@redux/INIT' });
      }
    })[pt] = function () {
      var v,
        E = g;
      return (
        ((v = {
          subscribe: function (w) {
            if (typeof w != 'object') throw new TypeError('Observer != obj');
            function b() {
              w.next && w.next(m());
            }
            return b(), { unsubscribe: E(b) };
          }
        })[pt] = function () {
          return this;
        }),
        v
      );
    }),
    r
  );
}
function In(e, t) {
  var n = t && t.type;
  return 'action ' + ((n && n.toString()) || '?') + 'reducer ' + e + ' returns ' + Z;
}
function be() {
  var e = [].slice.call(arguments);
  return e.length === 0
    ? function (t) {
        return t;
      }
    : e.length === 1
    ? e[0]
    : e.reduce(function (t, n) {
        return function () {
          return t(n.apply(void 0, [].slice.call(arguments)));
        };
      });
}
function En() {
  var e = arguments;
  return function (t) {
    return function (n, r, i) {
      var a,
        u = t(n, r, i),
        l = u.dispatch,
        d = {
          getState: u.getState,
          dispatch: function (f) {
            return l(f);
          }
        };
      return (
        (a = [].slice.call(e).map(function (f) {
          return f(d);
        })),
        h({}, u, { dispatch: (l = be.apply(void 0, a)(u.dispatch)) })
      );
    };
  };
}
var te = ae + 'anon_id',
  ie = ae + 'user_id',
  ge = ae + 'user_traits',
  K = 'userId',
  de = 'anonymousId',
  ze = [
    'bootstrap',
    'params',
    'campaign',
    'initializeStart',
    'initialize',
    'initializeEnd',
    'ready',
    'resetStart',
    'reset',
    'resetEnd',
    'pageStart',
    'page',
    'pageEnd',
    'pageAborted',
    'trackStart',
    'track',
    'trackEnd',
    'trackAborted',
    'identifyStart',
    'identify',
    'identifyEnd',
    'identifyAborted',
    'userIdChanged',
    'registerPlugins',
    'enablePlugin',
    'disablePlugin',
    'online',
    'offline',
    'setItemStart',
    'setItem',
    'setItemEnd',
    'setItemAborted',
    'removeItemStart',
    'removeItem',
    'removeItemEnd',
    'removeItemAborted'
  ],
  Ke = ['name', 'EVENTS', 'config', 'loaded'],
  y = ze.reduce(
    function (e, t) {
      return (e[t] = t), e;
    },
    {
      registerPluginType: function (e) {
        return 'registerPlugin:' + e;
      },
      pluginReadyType: function (e) {
        return 'ready:' + e;
      }
    }
  ),
  gt = /^utm_/,
  mt = /^an_prop_/,
  vt = /^an_trait_/;
function On(e) {
  var t = e.storage.setItem;
  return function (n) {
    return function (r) {
      return function (i) {
        if (i.type === y.bootstrap) {
          var a = i.params,
            u = i.user,
            l = i.persistedUser,
            d = i.initialUser,
            f = l.userId === u.userId;
          l.anonymousId !== u.anonymousId && t(te, u.anonymousId),
            f || t(ie, u.userId),
            d.traits && t(ge, h({}, f && l.traits ? l.traits : {}, d.traits));
          var m = Object.keys(i.params);
          if (m.length) {
            var g = a.an_uid,
              _ = a.an_event,
              v = m.reduce(
                function (E, w) {
                  if (w.match(gt) || w.match(/^(d|g)clid/)) {
                    var b = w.replace(gt, '');
                    E.campaign[b === 'campaign' ? 'name' : b] = a[w];
                  }
                  return (
                    w.match(mt) && (E.props[w.replace(mt, '')] = a[w]),
                    w.match(vt) && (E.traits[w.replace(vt, '')] = a[w]),
                    E
                  );
                },
                { campaign: {}, props: {}, traits: {} }
              );
            n.dispatch(h({ type: y.params, raw: a }, v, g ? { userId: g } : {})),
              g &&
                setTimeout(function () {
                  return e.identify(g, v.traits);
                }, 0),
              _ &&
                setTimeout(function () {
                  return e.track(_, v.props);
                }, 0),
              Object.keys(v.campaign).length &&
                n.dispatch({ type: y.campaign, campaign: v.campaign });
          }
        }
        return r(i);
      };
    };
  };
}
function _n(e) {
  return function (t, n) {
    if ((t === void 0 && (t = {}), n === void 0 && (n = {}), n.type === y.setItemEnd)) {
      if (n.key === te) return h({}, t, { anonymousId: n.value });
      if (n.key === ie) return h({}, t, { userId: n.value });
    }
    switch (n.type) {
      case y.identify:
        return Object.assign({}, t, { userId: n.userId, traits: h({}, t.traits, n.traits) });
      case y.reset:
        return (
          [ie, te, ge].forEach(function (r) {
            e.removeItem(r);
          }),
          Object.assign({}, t, { userId: null, anonymousId: null, traits: {} })
        );
      default:
        return t;
    }
  };
}
function yt(e) {
  return { userId: e.getItem(ie), anonymousId: e.getItem(te), traits: e.getItem(ge) };
}
var et = function (e) {
  return ae + 'TEMP' + ae + e;
};
function Pn(e) {
  var t = e.storage,
    n = t.setItem,
    r = t.removeItem,
    i = t.getItem;
  return function (a) {
    return function (u) {
      return function (l) {
        var d = l.userId,
          f = l.traits,
          m = l.options;
        if (
          (l.type === y.reset &&
            ([ie, ge, te].forEach(function (v) {
              r(v);
            }),
            [K, de, 'traits'].forEach(function (v) {
              we(et(v));
            })),
          l.type === y.identify)
        ) {
          i(te) || n(te, Je());
          var g = i(ie),
            _ = i(ge) || {};
          g &&
            g !== d &&
            a.dispatch({
              type: y.userIdChanged,
              old: { userId: g, traits: _ },
              new: { userId: d, traits: f },
              options: m
            }),
            d && n(ie, d),
            f && n(ge, h({}, _, f));
        }
        return u(l);
      };
    };
  };
}
var Ie = {};
function ht(e, t) {
  Ie[e] && Y(Ie[e]) && (Ie[e](t), delete Ie[e]);
}
function Bt(e, t, n) {
  return new Promise(function (r, i) {
    return t()
      ? r(e)
      : n < 1
      ? i(h({}, e, { queue: !0 }))
      : new Promise(function (a) {
          return setTimeout(a, 10);
        }).then(function (a) {
          return Bt(e, t, n - 10).then(r, i);
        });
  });
}
function Jt(e, t, n) {
  var r = t(),
    i = e.getState(),
    a = i.plugins,
    u = i.queue,
    l = i.user;
  if (!i.context.offline && u && u.actions && u.actions.length) {
    var d = u.actions.reduce(
      function (m, g, _) {
        return (
          a[g.plugin].loaded
            ? (m.process.push(g), m.processIndex.push(_))
            : (m.requeue.push(g), m.requeueIndex.push(_)),
          m
        );
      },
      { processIndex: [], process: [], requeue: [], requeueIndex: [] }
    );
    if (d.processIndex && d.processIndex.length) {
      d.processIndex.forEach(function (m) {
        var g = u.actions[m],
          _ = g.plugin,
          v = g.payload.type,
          E = r[_][v];
        if (E && Y(E)) {
          var w = (function (S, P) {
            return (
              S === void 0 && (S = {}),
              P === void 0 && (P = {}),
              [K, de].reduce(function (k, c) {
                return S.hasOwnProperty(c) && P[c] && P[c] !== S[c] && (k[c] = P[c]), k;
              }, S)
            );
          })(g.payload, l);
          E({ payload: w, config: a[_].config, instance: n });
          var b = v + ':' + _;
          e.dispatch(h({}, w, { type: b, _: { called: b, from: 'queueDrain' } }));
        }
      });
      var f = u.actions.filter(function (m, g) {
        return !~d.processIndex.indexOf(g);
      });
      u.actions = f;
    }
  }
}
var Ge = function (e) {
    var t = e.data,
      n = e.action,
      r = e.instance,
      i = e.state,
      a = e.allPlugins,
      u = e.allMatches,
      l = e.store,
      d = e.EVENTS;
    try {
      var f = i.plugins,
        m = i.context,
        g = n.type,
        _ = g.match(me),
        v = t.exact.map(function (b) {
          return b.pluginName;
        });
      _ &&
        (v = u.during.map(function (b) {
          return b.pluginName;
        }));
      var E = (function (b, S) {
          return function (P, k, c) {
            var I = k.config,
              A = k.name,
              D = A + '.' + P.type;
            c && (D = c.event);
            var j = P.type.match(me)
              ? (function (L, z, V, C, J) {
                  return function (x, U) {
                    var X = C ? C.name : L,
                      B = U && xe(U) ? U : V;
                    if (C && (!(B = U && xe(U) ? U : [L]).includes(L) || B.length !== 1))
                      throw new Error(
                        'Method ' +
                          z +
                          ' can only abort ' +
                          L +
                          ' plugin. ' +
                          JSON.stringify(B) +
                          ' input valid'
                      );
                    return h({}, J, { abort: { reason: x, plugins: B, caller: z, _: X } });
                  };
                })(A, D, S, c, P)
              : (function (L, z) {
                  return function () {
                    throw new Error(L.type + ' action not cancellable. Remove abort in ' + z);
                  };
                })(P, D);
            return { payload: xn(P), instance: b, config: I || {}, abort: j };
          };
        })(r, v),
        w = t.exact.reduce(function (b, S) {
          var P = S.pluginName,
            k = S.methodName,
            c = !1;
          return (
            k.match(/^initialize/) || k.match(/^reset/) || (c = !f[P].loaded),
            m.offline && k.match(/^(page|track|identify)/) && (c = !0),
            (b['' + P] = c),
            b
          );
        }, {});
      return Promise.resolve(
        t.exact.reduce(function (b, S, P) {
          var k = S.pluginName;
          return Promise.resolve(b).then(function (c) {
            function I() {
              return Promise.resolve(c);
            }
            var A = (function () {
              if (t.namespaced && t.namespaced[k])
                return Promise.resolve(
                  t.namespaced[k].reduce(function (D, j, L) {
                    return Promise.resolve(D).then(function (z) {
                      return j.method && Y(j.method)
                        ? ((function (x, U) {
                            var X = _t(x);
                            if (X && X.name === U) {
                              var B = _t(X.method);
                              throw new Error(
                                [
                                  U + ' plugin is calling method ' + x,
                                  'Plugins cant call self',
                                  'Use ' +
                                    X.method +
                                    ' ' +
                                    (B ? 'or ' + B.method : '') +
                                    ' in ' +
                                    U +
                                    ' plugin insteadof ' +
                                    x
                                ].join(`
`)
                              );
                            }
                          })(j.methodName, j.pluginName),
                          Promise.resolve(
                            j.method({
                              payload: z,
                              instance: r,
                              abort:
                                ((V = z),
                                (C = k),
                                (J = j.pluginName),
                                function (x, U) {
                                  return h({}, V, {
                                    abort: { reason: x, plugins: U || [C], caller: g, from: J || C }
                                  });
                                }),
                              config: St(j.pluginName, f, a),
                              plugins: f
                            })
                          ).then(function (x) {
                            var U = W(x) ? x : {};
                            return Promise.resolve(h({}, z, U));
                          }))
                        : z;
                      var V, C, J;
                    });
                  }, Promise.resolve(n))
                ).then(function (D) {
                  c[k] = D;
                });
              c[k] = n;
            })();
            return A && A.then ? A.then(I) : I();
          });
        }, Promise.resolve({}))
      ).then(function (b) {
        return Promise.resolve(
          t.exact.reduce(function (S, P, k) {
            try {
              var c = t.exact.length === k + 1,
                I = P.pluginName,
                A = a[I];
              return Promise.resolve(S).then(function (D) {
                var j = b[I] ? b[I] : {};
                if ((_ && (j = D), Qe(j, I)))
                  return (
                    He({ data: j, method: g, instance: r, pluginName: I, store: l }),
                    Promise.resolve(D)
                  );
                if (Qe(D, I))
                  return c && He({ data: D, method: g, instance: r, store: l }), Promise.resolve(D);
                if (w.hasOwnProperty(I) && w[I] === !0)
                  return (
                    l.dispatch({
                      type: 'queue',
                      plugin: I,
                      payload: j,
                      _: { called: 'queue', from: 'queueMechanism' }
                    }),
                    Promise.resolve(D)
                  );
                var L = E(b[I], a[I]);
                return Promise.resolve(
                  A[g]({ abort: L.abort, payload: j, instance: r, config: St(I, f, a), plugins: f })
                ).then(function (z) {
                  var V = W(z) ? z : {},
                    C = h({}, D, V),
                    J = b[I];
                  if (Qe(J, I)) He({ data: J, method: g, instance: r, pluginName: I, store: l });
                  else {
                    var x = g + ':' + I;
                    (x.match(/:/g) || []).length < 2 &&
                      !g.match(bt) &&
                      !g.match(wt) &&
                      r.dispatch(
                        h({}, _ ? C : j, { type: x, _: { called: x, from: 'submethod' } })
                      );
                  }
                  return Promise.resolve(C);
                });
              });
            } catch (D) {
              return Promise.reject(D);
            }
          }, Promise.resolve(n))
        ).then(function (S) {
          if (
            !(
              g.match(me) ||
              g.match(/^registerPlugin/) ||
              g.match(wt) ||
              g.match(bt) ||
              g.match(/^params/) ||
              g.match(/^userIdChanged/)
            )
          ) {
            if ((d.plugins.includes(g), S._ && S._.originalAction === g)) return S;
            var P = h({}, S, { _: { originalAction: S.type, called: S.type, from: 'engineEnd' } });
            Wt(S, t.exact.length) &&
              !g.match(/End$/) &&
              (P = h({}, P, { type: S.type + 'Aborted' })),
              l.dispatch(P);
          }
          return S;
        });
      });
    } catch (b) {
      return Promise.reject(b);
    }
  },
  me = /Start$/,
  bt = /^bootstrap/,
  wt = /^ready/;
function He(e) {
  var t = e.pluginName,
    n = e.method + 'Aborted' + (t ? ':' + t : '');
  e.store.dispatch(h({}, e.data, { type: n, _: { called: n, from: 'abort' } }));
}
function St(e, t, n) {
  var r = t[e] || n[e];
  return r && r.config ? r.config : {};
}
function It(e, t) {
  return t.reduce(function (n, r) {
    return r[e] ? n.concat({ methodName: e, pluginName: r.name, method: r[e] }) : n;
  }, []);
}
function Et(e, t) {
  var n = e.replace(me, ''),
    r = t ? ':' + t : '';
  return ['' + e + r, '' + n + r, n + 'End' + r];
}
function Qe(e, t) {
  var n = e.abort;
  return !!n && (n === !0 || Ot(n, t) || (n && Ot(n.plugins, t)));
}
function Wt(e, t) {
  var n = e.abort;
  if (!n) return !1;
  if (n === !0 || pe(n)) return !0;
  var r = n.plugins;
  return (xe(n) && n.length === t) || (xe(r) && r.length === t);
}
function xe(e) {
  return Array.isArray(e);
}
function Ot(e, t) {
  return !(!e || !xe(e)) && e.includes(t);
}
function _t(e) {
  var t = e.match(/(.*):(.*)/);
  return !!t && { method: t[1], name: t[2] };
}
function xn(e) {
  return Object.keys(e).reduce(function (t, n) {
    return n === 'type' || (t[n] = W(e[n]) ? Object.assign({}, e[n]) : e[n]), t;
  }, {});
}
function Nn(e, t, n) {
  var r = {};
  return function (i) {
    return function (a) {
      return function (u) {
        try {
          var l,
            d = function (c) {
              return l ? c : a(g);
            },
            f = u.type,
            m = u.plugins,
            g = u;
          if (u.abort) return Promise.resolve(a(u));
          if (
            (f === y.enablePlugin &&
              i.dispatch({
                type: y.initializeStart,
                plugins: m,
                disabled: [],
                fromEnable: !0,
                meta: u.meta
              }),
            f === y.disablePlugin &&
              setTimeout(function () {
                return ht(u.meta.rid, { payload: u });
              }, 0),
            f === y.initializeEnd)
          ) {
            var _ = t(),
              v = Object.keys(_),
              E = v
                .filter(function (c) {
                  return m.includes(c);
                })
                .map(function (c) {
                  return _[c];
                }),
              w = [],
              b = [],
              S = u.disabled,
              P = E.map(function (c) {
                var I = c.name;
                return Bt(c, c.loaded, 1e4)
                  .then(function (A) {
                    return (
                      r[I] ||
                        (i.dispatch({
                          type: y.pluginReadyType(I),
                          name: I,
                          events: Object.keys(c).filter(function (D) {
                            return !Ke.includes(D);
                          })
                        }),
                        (r[I] = !0)),
                      (w = w.concat(I)),
                      c
                    );
                  })
                  .catch(function (A) {
                    if (A instanceof Error) throw new Error(A);
                    return (b = b.concat(A.name)), A;
                  });
              });
            Promise.all(P).then(function (c) {
              var I = { plugins: w, failed: b, disabled: S };
              setTimeout(function () {
                v.length === P.length + S.length && i.dispatch(h({}, { type: y.ready }, I));
              }, 0);
            });
          }
          var k = (function () {
            if (f !== y.bootstrap)
              return (
                /^ready:([^:]*)$/.test(f) &&
                  setTimeout(function () {
                    return Jt(i, t, e);
                  }, 0),
                Promise.resolve(
                  (function (c, I, A, D, j) {
                    try {
                      var L = Y(I) ? I() : I,
                        z = c.type,
                        V = z.replace(me, '');
                      if (c._ && c._.called) return Promise.resolve(c);
                      var C = A.getState(),
                        J =
                          ((X = L),
                          (B = C.plugins) === void 0 && (B = {}),
                          (s = c.options) === void 0 && (s = {}),
                          Object.keys(X)
                            .filter(function (o) {
                              var p = s.plugins || {};
                              return ln(p[o])
                                ? p[o]
                                : p.all !== !1 && (!B[o] || B[o].enabled !== !1);
                            })
                            .map(function (o) {
                              return X[o];
                            }));
                      z === y.initializeStart &&
                        c.fromEnable &&
                        (J = Object.keys(C.plugins)
                          .filter(function (o) {
                            var p = C.plugins[o];
                            return c.plugins.includes(o) && !p.initialized;
                          })
                          .map(function (o) {
                            return L[o];
                          }));
                      var x = J.map(function (o) {
                          return o.name;
                        }),
                        U = (function (o, p, N) {
                          var T = Et(o).map(function (O) {
                            return It(O, p);
                          });
                          return p.reduce(
                            function (O, q) {
                              var $ = q.name,
                                R = Et(o, $).map(function (le) {
                                  return It(le, p);
                                }),
                                M = R[0],
                                G = R[1],
                                ce = R[2];
                              return (
                                M.length && (O.beforeNS[$] = M),
                                G.length && (O.duringNS[$] = G),
                                ce.length && (O.afterNS[$] = ce),
                                O
                              );
                            },
                            {
                              before: T[0],
                              beforeNS: {},
                              during: T[1],
                              duringNS: {},
                              after: T[2],
                              afterNS: {}
                            }
                          );
                        })(z, J);
                      return Promise.resolve(
                        Ge({
                          action: c,
                          data: { exact: U.before, namespaced: U.beforeNS },
                          state: C,
                          allPlugins: L,
                          allMatches: U,
                          instance: A,
                          store: D,
                          EVENTS: j
                        })
                      ).then(function (o) {
                        function p() {
                          var O = (function () {
                            if (z.match(me))
                              return Promise.resolve(
                                Ge({
                                  action: h({}, N, { type: V + 'End' }),
                                  data: { exact: U.after, namespaced: U.afterNS },
                                  state: C,
                                  allPlugins: L,
                                  allMatches: U,
                                  instance: A,
                                  store: D,
                                  EVENTS: j
                                })
                              ).then(function (q) {
                                q.meta && q.meta.hasCallback && ht(q.meta.rid, { payload: q });
                              });
                          })();
                          return O && O.then
                            ? O.then(function () {
                                return o;
                              })
                            : o;
                        }
                        if (Wt(o, x.length)) return o;
                        var N,
                          T = (function () {
                            if (z !== V)
                              return Promise.resolve(
                                Ge({
                                  action: h({}, o, { type: V }),
                                  data: { exact: U.during, namespaced: U.duringNS },
                                  state: C,
                                  allPlugins: L,
                                  allMatches: U,
                                  instance: A,
                                  store: D,
                                  EVENTS: j
                                })
                              ).then(function (O) {
                                N = O;
                              });
                            N = o;
                          })();
                        return T && T.then ? T.then(p) : p();
                      });
                    } catch (o) {
                      return Promise.reject(o);
                    }
                    var X, B, s;
                  })(u, t, e, i, n)
                ).then(function (c) {
                  var I = a(c);
                  return (l = 1), I;
                })
              );
          })();
          return Promise.resolve(k && k.then ? k.then(d) : d(k));
        } catch (c) {
          return Promise.reject(c);
        }
      };
    };
  };
}
function kn(e) {
  return function (t) {
    return function (n) {
      return function (r) {
        var i = r.type,
          a = r.key,
          u = r.value,
          l = r.options;
        if (i === y.setItem || i === y.removeItem) {
          if (r.abort) return n(r);
          i === y.setItem ? e.setItem(a, u, l) : e.removeItem(a, l);
        }
        return n(r);
      };
    };
  };
}
var jn = function () {
  var e = this;
  (this.before = []),
    (this.after = []),
    (this.addMiddleware = function (t, n) {
      e[n] = e[n].concat(t);
    }),
    (this.removeMiddleware = function (t, n) {
      var r = e[n].findIndex(function (i) {
        return i === t;
      });
      r !== -1 && (e[n] = [].concat(e[n].slice(0, r), e[n].slice(r + 1)));
    }),
    (this.dynamicMiddlewares = function (t) {
      return function (n) {
        return function (r) {
          return function (i) {
            var a = {
                getState: n.getState,
                dispatch: function (l) {
                  return n.dispatch(l);
                }
              },
              u = e[t].map(function (l) {
                return l(a);
              });
            return be.apply(void 0, u)(r)(i);
          };
        };
      };
    });
};
function Tn(e) {
  return function (t, n) {
    t === void 0 && (t = {});
    var r = {};
    if (n.type === 'initialize:aborted') return t;
    if (/^registerPlugin:([^:]*)$/.test(n.type)) {
      var i = Pt(n.type, 'registerPlugin'),
        a = e()[i];
      if (!a || !i) return t;
      var u = n.enabled;
      return (
        (r[i] = {
          enabled: u,
          initialized: !!u && Boolean(!a.initialize),
          loaded: !!u && Boolean(a.loaded()),
          config: a.config || {}
        }),
        h({}, t, r)
      );
    }
    if (/^initialize:([^:]*)$/.test(n.type)) {
      var l = Pt(n.type, y.initialize),
        d = e()[l];
      return d && l
        ? ((r[l] = h({}, t[l], { initialized: !0, loaded: Boolean(d.loaded()) })), h({}, t, r))
        : t;
    }
    if (/^ready:([^:]*)$/.test(n.type))
      return (r[n.name] = h({}, t[n.name], { loaded: !0 })), h({}, t, r);
    switch (n.type) {
      case y.disablePlugin:
        return h({}, t, xt(n.plugins, !1, t));
      case y.enablePlugin:
        return h({}, t, xt(n.plugins, !0, t));
      default:
        return t;
    }
  };
}
function Pt(e, t) {
  return e.substring(t.length + 1, e.length);
}
function xt(e, t, n) {
  return e.reduce(function (r, i) {
    return (r[i] = h({}, n[i], { enabled: t })), r;
  }, n);
}
function Xt(e) {
  try {
    return JSON.parse(JSON.stringify(e));
  } catch {}
  return e;
}
var An = { last: {}, history: [] };
function Ln(e, t) {
  e === void 0 && (e = An);
  var n = t.options,
    r = t.meta;
  if (t.type === y.track) {
    var i = Xt(
      h({ event: t.event, properties: t.properties }, Object.keys(n).length && { options: n }, {
        meta: r
      })
    );
    return h({}, e, { last: i, history: e.history.concat(i) });
  }
  return e;
}
var $n = { actions: [] };
function Mn(e, t) {
  e === void 0 && (e = $n);
  var n = t.payload;
  switch (t.type) {
    case 'queue':
      var r;
      return (
        (r = n && n.type && n.type === y.identify ? [t].concat(e.actions) : e.actions.concat(t)),
        h({}, e, { actions: r })
      );
    case 'dequeue':
      return [];
    default:
      return e;
  }
}
var Ft = /#.*$/;
function Dn(e) {
  var t = /(http[s]?:\/\/)?([^\/\s]+\/)(.*)/g.exec(e);
  return '/' + (t && t[3] ? t[3].split('?')[0].replace(Ft, '') : '');
}
var Gt,
  Ht,
  Qt,
  Yt,
  Un = function (e) {
    if ((e === void 0 && (e = {}), !F)) return e;
    var t = document,
      n = t.title,
      r = t.referrer,
      i = window,
      a = i.location,
      u = i.innerWidth,
      l = i.innerHeight,
      d = a.hash,
      f = a.search,
      m = (function (_) {
        var v = (function () {
          if (F) {
            for (var E, w = document.getElementsByTagName('link'), b = 0; (E = w[b]); b++)
              if (E.getAttribute('rel') === 'canonical') return E.getAttribute('href');
          }
        })();
        return v ? (v.match(/\?/) ? v : v + _) : window.location.href.replace(Ft, '');
      })(f),
      g = { title: n, url: m, path: Dn(m), hash: d, search: f, width: u, height: l };
    return r && r !== '' && (g.referrer = r), h({}, g, e);
  },
  zn = { last: {}, history: [] };
function Cn(e, t) {
  e === void 0 && (e = zn);
  var n = t.options;
  if (t.type === y.page) {
    var r = Xt(
      h({ properties: t.properties, meta: t.meta }, Object.keys(n).length && { options: n })
    );
    return h({}, e, { last: r, history: e.history.concat(r) });
  }
  return e;
}
(Gt = (function () {
  if (!F) return !1;
  var e = navigator.appVersion;
  return ~e.indexOf('Win')
    ? 'Windows'
    : ~e.indexOf('Mac')
    ? 'MacOS'
    : ~e.indexOf('X11')
    ? 'UNIX'
    : ~e.indexOf('Linux')
    ? 'Linux'
    : 'Unknown OS';
})()),
  (Ht = F ? document.referrer : null),
  (Qt = yn()),
  (Yt = hn());
var Nt = {
  initialized: !1,
  sessionId: Je(),
  app: null,
  version: null,
  debug: !1,
  offline: !!F && !navigator.onLine,
  os: { name: Gt },
  userAgent: F ? navigator.userAgent : 'node',
  library: { name: 'analytics', version: '0.11.0' },
  timezone: Yt,
  locale: Qt,
  campaign: {},
  referrer: Ht
};
function Rn(e, t) {
  e === void 0 && (e = Nt);
  var n = e.initialized,
    r = t.campaign;
  switch (t.type) {
    case y.campaign:
      return h({}, e, { campaign: r });
    case y.offline:
      return h({}, e, { offline: !0 });
    case y.online:
      return h({}, e, { offline: !1 });
    default:
      return n ? e : h({}, Nt, e, { initialized: !0 });
  }
}
var qn = ['plugins', 'reducers', 'storage'];
function Vn(e, t, n) {
  if (F) {
    var r = window[(n ? 'add' : 'remove') + 'EventListener'];
    e.split(' ').forEach(function (i) {
      r(i, t);
    });
  }
}
function Bn(e) {
  var t = Vn.bind(null, 'online offline', function (n) {
    return Promise.resolve(!navigator.onLine).then(e);
  });
  return (
    t(!0),
    function (n) {
      return t(!1);
    }
  );
}
function Zt() {
  return (
    ue('analytics', []),
    function (e) {
      return function (t, n, r) {
        var i = e(t, n, r),
          a = i.dispatch;
        return Object.assign(i, {
          dispatch: function (u) {
            return he[ye].analytics.push(u.action || u), a(u);
          }
        });
      };
    }
  );
}
function kt(e) {
  return function () {
    return be(be.apply(null, arguments), Zt());
  };
}
function Ye(e) {
  return e ? (dn(e) ? e : [e]) : [];
}
function jt(e, t, n) {
  e === void 0 && (e = {});
  var r,
    i,
    a = Je();
  return (
    t &&
      (Ie[a] =
        ((r = t),
        (i = (function (u) {
          for (var l, d = u || Array.prototype.slice.call(arguments), f = 0; f < d.length; f++)
            if (Y(d[f])) {
              l = d[f];
              break;
            }
          return l;
        })(n)),
        function (u) {
          i && i(u), r(u);
        })),
    h({}, e, { rid: a, ts: new Date().getTime() }, t ? { hasCallback: !0 } : {})
  );
}
function Jn(e) {
  e === void 0 && (e = {});
  var t = e.reducers || {},
    n = e.initialUser || {},
    r = (e.plugins || []).reduce(
      function (s, o) {
        if (Y(o)) return (s.middlewares = s.middlewares.concat(o)), s;
        if ((o.NAMESPACE && (o.name = o.NAMESPACE), !o.name))
          throw new Error('https://lytics.dev/errors/1');
        var p = o.EVENTS
          ? Object.keys(o.EVENTS).map(function (O) {
              return o.EVENTS[O];
            })
          : [];
        (s.pluginEnabled[o.name] = !(o.enabled === !1 || (o.config && o.config.enabled === !1))),
          delete o.enabled,
          o.methods &&
            ((s.methods[o.name] = Object.keys(o.methods).reduce(function (O, q) {
              var $;
              return (
                (O[q] =
                  (($ = o.methods[q]),
                  function () {
                    for (
                      var R = Array.prototype.slice.call(arguments), M = new Array($.length), G = 0;
                      G < R.length;
                      G++
                    )
                      M[G] = R[G];
                    return (M[M.length] = c), $.apply({ instance: c }, M);
                  })),
                O
              );
            }, {})),
            delete o.methods);
        var N = Object.keys(o).concat(p),
          T = new Set(s.events.concat(N));
        if (
          ((s.events = Array.from(T)),
          (s.pluginsArray = s.pluginsArray.concat(o)),
          s.plugins[o.name])
        )
          throw new Error(o.name + 'AlreadyLoaded');
        return (
          (s.plugins[o.name] = o),
          s.plugins[o.name].loaded ||
            (s.plugins[o.name].loaded = function () {
              return !0;
            }),
          s
        );
      },
      { plugins: {}, pluginEnabled: {}, methods: {}, pluginsArray: [], middlewares: [], events: [] }
    ),
    i = e.storage ? e.storage : { getItem: oe, setItem: ue, removeItem: we },
    a = (function (s) {
      return function (o, p, N) {
        return p.getState('user')[o] || (N && W(N) && N[o] ? N[o] : yt(s)[o] || oe(et(o)) || null);
      };
    })(i),
    u = r.plugins,
    l = r.events
      .filter(function (s) {
        return !Ke.includes(s);
      })
      .sort(),
    d = new Set(
      l.concat(ze).filter(function (s) {
        return !Ke.includes(s);
      })
    ),
    f = Array.from(d).sort(),
    m = function () {
      return u;
    },
    g = new jn(),
    _ = g.addMiddleware,
    v = g.removeMiddleware,
    E = g.dynamicMiddlewares,
    w = function () {
      throw new Error('Abort disabled inListener');
    },
    b = bn(),
    S = yt(i),
    P = h(
      {},
      S,
      n,
      b.an_uid ? { userId: b.an_uid } : {},
      b.an_aid ? { anonymousId: b.an_aid } : {}
    );
  P.anonymousId || (P.anonymousId = Je());
  var k = h(
      {
        enable: function (s, o) {
          return new Promise(function (p) {
            x.dispatch(
              { type: y.enablePlugin, plugins: Ye(s), _: { originalAction: y.enablePlugin } },
              p,
              [o]
            );
          });
        },
        disable: function (s, o) {
          return new Promise(function (p) {
            x.dispatch(
              { type: y.disablePlugin, plugins: Ye(s), _: { originalAction: y.disablePlugin } },
              p,
              [o]
            );
          });
        }
      },
      r.methods
    ),
    c = {
      identify: function (s, o, p, N) {
        try {
          var T = pe(s) ? s : null,
            O = W(s) ? s : o,
            q = p || {},
            $ = c.user();
          ue(et(K), T);
          var R = T || O.userId || a(K, c, O);
          return Promise.resolve(
            new Promise(function (M) {
              x.dispatch(
                h(
                  {
                    type: y.identifyStart,
                    userId: R,
                    traits: O || {},
                    options: q,
                    anonymousId: $.anonymousId
                  },
                  $.id && $.id !== T && { previousId: $.id }
                ),
                M,
                [o, p, N]
              );
            })
          );
        } catch (M) {
          return Promise.reject(M);
        }
      },
      track: function (s, o, p, N) {
        try {
          var T = W(s) ? s.event : s;
          if (!T || !pe(T)) throw new Error('EventMissing');
          var O = W(s) ? s : o || {},
            q = W(p) ? p : {};
          return Promise.resolve(
            new Promise(function ($) {
              x.dispatch(
                {
                  type: y.trackStart,
                  event: T,
                  properties: O,
                  options: q,
                  userId: a(K, c, o),
                  anonymousId: a(de, c, o)
                },
                $,
                [o, p, N]
              );
            })
          );
        } catch ($) {
          return Promise.reject($);
        }
      },
      page: function (s, o, p) {
        try {
          var N = W(s) ? s : {},
            T = W(o) ? o : {};
          return Promise.resolve(
            new Promise(function (O) {
              x.dispatch(
                {
                  type: y.pageStart,
                  properties: Un(N),
                  options: T,
                  userId: a(K, c, N),
                  anonymousId: a(de, c, N)
                },
                O,
                [s, o, p]
              );
            })
          );
        } catch (O) {
          return Promise.reject(O);
        }
      },
      user: function (s) {
        if (s === K || s === 'id') return a(K, c);
        if (s === de || s === 'anonId') return a(de, c);
        var o = c.getState('user');
        return s ? lt(o, s) : o;
      },
      reset: function (s) {
        return new Promise(function (o) {
          x.dispatch({ type: y.resetStart }, o, s);
        });
      },
      ready: function (s) {
        return c.on(y.ready, s);
      },
      on: function (s, o) {
        if (!s || !Y(o)) return !1;
        if (s === y.bootstrap) throw new Error('.on disabled for ' + s);
        var p = /Start$|Start:/;
        if (s === '*') {
          var N = function ($) {
              return function (R) {
                return function (M) {
                  return M.type.match(p) && o({ payload: M, instance: c, plugins: u }), R(M);
                };
              };
            },
            T = function ($) {
              return function (R) {
                return function (M) {
                  return M.type.match(p) || o({ payload: M, instance: c, plugins: u }), R(M);
                };
              };
            };
          return (
            _(N, Ae),
            _(T, Le),
            function () {
              v(N, Ae), v(T, Le);
            }
          );
        }
        var O = s.match(p) ? Ae : Le,
          q = function ($) {
            return function (R) {
              return function (M) {
                return M.type === s && o({ payload: M, instance: c, plugins: u, abort: w }), R(M);
              };
            };
          };
        return (
          _(q, O),
          function () {
            return v(q, O);
          }
        );
      },
      once: function (s, o) {
        if (!s || !Y(o)) return !1;
        if (s === y.bootstrap) throw new Error('.once disabled for ' + s);
        var p = c.on(s, function (N) {
          o({ payload: N.payload, instance: c, plugins: u, abort: w }), p();
        });
        return p;
      },
      getState: function (s) {
        var o = x.getState();
        return s ? lt(o, s) : Object.assign({}, o);
      },
      dispatch: function (s) {
        var o = pe(s) ? { type: s } : s;
        if (ze.includes(o.type)) throw new Error('reserved action ' + o.type);
        var p = h({}, o, { _: h({ originalAction: o.type }, s._ || {}) });
        x.dispatch(p);
      },
      enablePlugin: k.enable,
      disablePlugin: k.disable,
      plugins: k,
      storage: {
        getItem: i.getItem,
        setItem: function (s, o, p) {
          x.dispatch({ type: y.setItemStart, key: s, value: o, options: p });
        },
        removeItem: function (s, o) {
          x.dispatch({ type: y.removeItemStart, key: s, options: o });
        }
      },
      setAnonymousId: function (s, o) {
        c.storage.setItem(te, s, o);
      },
      events: { core: ze, plugins: l }
    },
    I = r.middlewares.concat([
      function (s) {
        return function (o) {
          return function (p) {
            return p.meta || (p.meta = jt()), o(p);
          };
        };
      },
      E(Ae),
      Nn(c, m, { all: f, plugins: l }),
      kn(i),
      On(c),
      Pn(c),
      E(Le)
    ]),
    A = { context: Rn, user: _n(i), page: Cn, track: Ln, plugins: Tn(m), queue: Mn },
    D = be,
    j = be;
  if (F && e.debug) {
    var L = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    L && (D = L({ trace: !0, traceLimit: 25 })),
      (j = function () {
        return arguments.length === 0
          ? Zt()
          : W(typeof arguments[0])
          ? kt()
          : kt().apply(null, arguments);
      });
  }
  var z,
    V = (function (s) {
      return Object.keys(s).reduce(function (o, p) {
        return qn.includes(p) || (o[p] = s[p]), o;
      }, {});
    })(e),
    C = r.pluginsArray.reduce(function (s, o) {
      var p = o.name,
        N = o.config,
        T = o.loaded,
        O = r.pluginEnabled[p];
      return (
        (s[p] = {
          enabled: O,
          initialized: !!O && Boolean(!o.initialize),
          loaded: Boolean(T()),
          config: N || {}
        }),
        s
      );
    }, {}),
    J = { context: V, user: P, plugins: C },
    x = Vt(
      (function (s) {
        for (var o = Object.keys(s), p = {}, N = 0; N < o.length; N++) {
          var T = o[N];
          typeof s[T] === ee && (p[T] = s[T]);
        }
        var O,
          q = Object.keys(p);
        try {
          (function ($) {
            Object.keys($).forEach(function (R) {
              var M = $[R];
              if (
                typeof M(void 0, { type: '@@redux/INIT' }) === Z ||
                typeof M(void 0, { type: Sn }) === Z
              )
                throw new Error('reducer ' + R + ' ' + Z);
            });
          })(p);
        } catch ($) {
          O = $;
        }
        return function ($, R) {
          if (($ === void 0 && ($ = {}), O)) throw O;
          for (var M = !1, G = {}, ce = 0; ce < q.length; ce++) {
            var le = q[ce],
              ct = $[le],
              Fe = (0, p[le])(ct, R);
            if (typeof Fe === Z) {
              var on = In(le, R);
              throw new Error(on);
            }
            (G[le] = Fe), (M = M || Fe !== ct);
          }
          return M ? G : $;
        };
      })(h({}, A, t)),
      J,
      j(D(En.apply(void 0, I)))
    );
  x.dispatch =
    ((z = x.dispatch),
    function (s, o, p) {
      var N = h({}, s, { meta: jt(s.meta, o, Ye(p)) });
      return z.apply(null, [N]);
    });
  var U = Object.keys(u);
  x.dispatch({
    type: y.bootstrap,
    plugins: U,
    config: V,
    params: b,
    user: P,
    initialUser: n,
    persistedUser: S
  });
  var X = U.filter(function (s) {
      return r.pluginEnabled[s];
    }),
    B = U.filter(function (s) {
      return !r.pluginEnabled[s];
    });
  return (
    x.dispatch({ type: y.registerPlugins, plugins: U, enabled: r.pluginEnabled }),
    r.pluginsArray.map(function (s, o) {
      var p = s.bootstrap,
        N = s.config,
        T = s.name;
      p && Y(p) && p({ instance: c, config: N, payload: s }),
        x.dispatch({
          type: y.registerPluginType(T),
          name: T,
          enabled: r.pluginEnabled[T],
          plugin: s
        }),
        r.pluginsArray.length === o + 1 &&
          x.dispatch({ type: y.initializeStart, plugins: X, disabled: B });
    }),
    Bn(function (s) {
      x.dispatch({ type: s ? y.offline : y.online });
    }),
    (function (s, o, p) {
      setInterval(function () {
        return Jt(s, o, p);
      }, 3e3);
    })(x, m, c),
    c
  );
}
var Ae = 'before',
  Le = 'after',
  Oe = 'cookie',
  re = tn(),
  Kt = We,
  Wn = We;
function en(e) {
  return re ? We(e, '', -1) : we(e);
}
function tn() {
  if (re !== void 0) return re;
  var e = 'cookiecookie';
  try {
    We(e, e), (re = document.cookie.indexOf(e) !== -1), en(e);
  } catch {
    re = !1;
  }
  return re;
}
function We(e, t, n, r, i, a) {
  if (typeof window < 'u') {
    var u = arguments.length > 1;
    return (
      re === !1 && (u ? ue(e, t) : oe(e)),
      u
        ? (document.cookie =
            e +
            '=' +
            encodeURIComponent(t) +
            (n
              ? '; expires=' +
                new Date(+new Date() + 1e3 * n).toUTCString() +
                (r ? '; path=' + r : '') +
                (i ? '; domain=' + i : '') +
                (a ? '; secure' : '')
              : ''))
        : decodeURIComponent(
            (('; ' + document.cookie).split('; ' + e + '=')[1] || '').split(';')[0]
          )
    );
  }
}
var _e = 'localStorage',
  Xn = tt.bind(null, 'localStorage');
Se('localStorage', 'getItem', oe);
Se('localStorage', 'setItem', ue);
Se('localStorage', 'removeItem', we);
var Pe = 'sessionStorage',
  Fn = tt.bind(null, 'sessionStorage');
Se('sessionStorage', 'getItem', oe);
Se('sessionStorage', 'setItem', ue);
Se('sessionStorage', 'removeItem', we);
function ve(e) {
  var t = e;
  try {
    if ((t = JSON.parse(e)) === 'true') return !0;
    if (t === 'false') return !1;
    if (W(t)) return t;
    parseFloat(t) === t && (t = parseFloat(t));
  } catch {}
  if (t !== null && t !== '') return t;
}
var Gn = Xn(),
  Hn = Fn(),
  Qn = tn();
function nn(e, t) {
  if (e) {
    var n = nt(t),
      r = !ot(n),
      i = rt(n) ? ve(localStorage.getItem(e)) : void 0;
    if (r && !fe(i)) return i;
    var a = it(n) ? ve(Kt(e)) : void 0;
    if (r && a) return a;
    var u = at(n) ? ve(sessionStorage.getItem(e)) : void 0;
    if (r && u) return u;
    var l = oe(e);
    return r ? l : { localStorage: i, sessionStorage: u, cookie: a, global: l };
  }
}
function Yn(e, t, n) {
  if (e && !fe(t)) {
    var r = {},
      i = nt(n),
      a = JSON.stringify(t),
      u = !ot(i);
    return rt(i) &&
      ((r[_e] = $e(_e, t, ve(localStorage.getItem(e)))), localStorage.setItem(e, a), u)
      ? r[_e]
      : it(i) && ((r[Oe] = $e(Oe, t, ve(Kt(e)))), Wn(e, a), u)
      ? r[Oe]
      : at(i) &&
        ((r[Pe] = $e(Pe, t, ve(sessionStorage.getItem(e)))), sessionStorage.setItem(e, a), u)
      ? r[Pe]
      : ((r[Ee] = $e(Ee, t, oe(e))), ue(e, t), u ? r[Ee] : r);
  }
}
function Zn(e, t) {
  if (e) {
    var n = nt(t),
      r = nn(e, zt),
      i = {};
    return (
      !fe(r.localStorage) && rt(n) && (localStorage.removeItem(e), (i[_e] = r.localStorage)),
      !fe(r.cookie) && it(n) && (en(e), (i[Oe] = r.cookie)),
      !fe(r.sessionStorage) && at(n) && (sessionStorage.removeItem(e), (i[Pe] = r.sessionStorage)),
      !fe(r.global) && Xe(n, Ee) && (we(e), (i[Ee] = r.global)),
      i
    );
  }
}
function nt(e) {
  return e ? (pe(e) ? e : e.storage) : Ut;
}
function rt(e) {
  return Gn && Xe(e, _e);
}
function it(e) {
  return Qn && Xe(e, Oe);
}
function at(e) {
  return Hn && Xe(e, Pe);
}
function ot(e) {
  return e === zt || e === 'all';
}
function Xe(e, t) {
  return e === Ut || e === t || ot(e);
}
function $e(e, t, n) {
  return { location: e, current: t, previous: n };
}
var Kn = { setItem: Yn, getItem: nn, removeItem: Zn };
function er(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function Tt(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function At(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Tt(Object(n), !0).forEach(function (r) {
          er(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Tt(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function tr() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    t = { storage: Kn };
  return Jn(At(At({}, t), e));
}
function nr(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function Ze(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {},
      r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == 'function' &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function (i) {
          return Object.getOwnPropertyDescriptor(n, i).enumerable;
        })
      )),
      r.forEach(function (i) {
        nr(e, i, n[i]);
      });
  }
  return e;
}
var rr = {
    debug: !1,
    containerId: null,
    dataLayerName: 'dataLayer',
    dataLayer: void 0,
    preview: void 0,
    auth: void 0,
    execution: 'async'
  },
  Me;
function ir() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return {
    name: 'google-tag-manager',
    config: Ze({}, rr, e),
    initialize: function (n) {
      var r = n.config,
        i = r.containerId,
        a = r.dataLayerName,
        u = r.customScriptSrc,
        l = r.preview,
        d = r.auth,
        f = r.execution;
      if (!i) throw new Error('No google tag manager containerId defined');
      if (l && !d)
        throw new Error(
          'When enabling preview mode, both preview and auth parameters must be defined'
        );
      var m = u || 'https://www.googletagmanager.com/gtm.js';
      $t(i) ||
        ((function (g, _, v, E, w) {
          (g[E] = g[E] || []), g[E].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
          var b = _.getElementsByTagName(v)[0],
            S = _.createElement(v),
            P = E != 'dataLayer' ? '&l=' + E : '',
            k = l ? '&gtm_preview=' + l + '&gtm_auth=' + d + '&gtm_cookies_win=x' : '';
          f && (S[f] = !0),
            (S.src = ''.concat(m, '?id=') + w + P + k),
            b.parentNode.insertBefore(S, b);
        })(window, document, 'script', a, i),
        (Me = a),
        (r.dataLayer = window[a]));
    },
    page: function (n) {
      var r = n.payload;
      n.options, n.instance;
      var i = n.config;
      typeof i.dataLayer < 'u' && i.dataLayer.push(r.properties);
    },
    track: function (n) {
      var r = n.payload;
      n.options;
      var i = n.config;
      if (typeof i.dataLayer < 'u') {
        var a = r.anonymousId,
          u = r.userId,
          l = r.properties,
          d = l;
        u && (d.userId = u),
          a && (d.anonymousId = a),
          l.category || (d.category = 'All'),
          i.debug && console.log('gtag push', Ze({ event: r.event }, d)),
          i.dataLayer.push(Ze({ event: r.event }, d));
      }
    },
    loaded: function () {
      var n = !!Me && !!(window[Me] && Array.prototype.push !== window[Me].push);
      return $t(e.containerId) && n;
    }
  };
}
var Lt = {};
function $t(e) {
  var t = Lt[e];
  t || ((t = new RegExp('googletagmanager\\.com\\/gtm\\.js.*[?&]id=' + e)), (Lt[e] = t));
  var n = document.querySelectorAll('script[src]');
  return !!Object.keys(n).filter(function (r) {
    return (n[r].src || '').match(t);
  }).length;
}
var ar = ir;
function or(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function Mt(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function ur(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Mt(n, !0).forEach(function (r) {
          or(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Mt(n).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function sr() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return {
    name: 'mixpanel',
    config: e,
    initialize: function (n) {
      var r = n.config,
        i = r.token,
        a = r.customScriptSrc,
        u = r.options,
        l = u === void 0 ? {} : u;
      if (!i) throw new Error('No mixpanel token defined');
      typeof window.mixpanel < 'u' ||
        ((function (d, f) {
          if (!f.__SV) {
            var m = window;
            try {
              var g,
                _,
                v,
                E = m.location,
                w = E.hash;
              (g = function (k, c) {
                return (_ = k.match(RegExp(c + '=([^&]*)'))) ? _[1] : null;
              }),
                w &&
                  g(w, 'state') &&
                  ((v = JSON.parse(decodeURIComponent(g(w, 'state')))),
                  v.action === 'mpeditor' &&
                    (m.sessionStorage.setItem('_mpcehash', w),
                    history.replaceState(v.desiredHash || '', d.title, E.pathname + E.search)));
            } catch {}
            var b, S;
            (window.mixpanel = f),
              (f._i = []),
              (f.init = function (P, k, c) {
                function I(j, L) {
                  var z = L.split('.');
                  z.length == 2 && ((j = j[z[0]]), (L = z[1])),
                    (j[L] = function () {
                      j.push([L].concat(Array.prototype.slice.call(arguments, 0)));
                    });
                }
                var A = f;
                for (
                  typeof c < 'u' ? (A = f[c] = []) : (c = 'mixpanel'),
                    A.people = A.people || [],
                    A.toString = function (j) {
                      var L = 'mixpanel';
                      return c !== 'mixpanel' && (L += '.' + c), j || (L += ' (stub)'), L;
                    },
                    A.people.toString = function () {
                      return A.toString(1) + '.people (stub)';
                    },
                    b =
                      'disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove'.split(
                        ' '
                      ),
                    S = 0;
                  S < b.length;
                  S++
                )
                  I(A, b[S]);
                var D = 'set set_once union unset remove delete'.split(' ');
                (A.get_group = function () {
                  function j(C) {
                    L[C] = function () {
                      (call2_args = arguments),
                        (call2 = [C].concat(Array.prototype.slice.call(call2_args, 0))),
                        A.push([z, call2]);
                    };
                  }
                  for (
                    var L = {},
                      z = ['get_group'].concat(Array.prototype.slice.call(arguments, 0)),
                      V = 0;
                    V < D.length;
                    V++
                  )
                    j(D[V]);
                  return L;
                }),
                  f._i.push([P, k, c]);
              }),
              (f.__SV = 1.2),
              (m = d.createElement('script')),
              (m.type = 'text/javascript'),
              (m.async = !0),
              (m.src =
                a ||
                (typeof MIXPANEL_CUSTOM_LIB_URL < 'u'
                  ? MIXPANEL_CUSTOM_LIB_URL
                  : d.location.protocol === 'file:' &&
                    '//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js'.match(/^\/\//)
                  ? 'https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js'
                  : '//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js')),
              (g = d.getElementsByTagName('script')[0]),
              g.parentNode.insertBefore(m, g);
          }
        })(document, window.mixpanel || []),
        mixpanel.init(r.token, ur({ batch_requests: !0 }, l)));
    },
    identify: function (n) {
      var r = n.payload,
        i = r.userId,
        a = r.traits;
      typeof i == 'string' && mixpanel.identify(i), a && mixpanel.people.set(a);
    },
    page: function (n) {
      var r = n.payload;
      mixpanel.track(e.pageEvent || r.properties.path, r.properties);
    },
    track: function (n) {
      var r = n.payload;
      mixpanel.track(r.event, r.properties);
    },
    loaded: function () {
      return !!window.mixpanel;
    },
    reset: function () {
      mixpanel.reset();
    },
    methods: {
      alias: function (n, r) {
        mixpanel.alias(n, r);
      }
    }
  };
}
var cr = sr;
const lr = tr({
    app: 'audial',
    plugins: [ar({ containerId: 'GTM-TNTJT9T' }), cr({ token: '69da06a4f6f6e3802f4ae5b4c3a716c2' })]
  }),
  fr = 5,
  De = 6,
  Ue = 10;
let dr = (e, t, n, r) => (
    (e.events = e.events || {}),
    e.events[n + Ue] ||
      (e.events[n + Ue] = r(i => {
        e.events[n].reduceRight((a, u) => (u(a), a), { shared: {}, ...i });
      })),
    (e.events[n] = e.events[n] || []),
    e.events[n].push(t),
    () => {
      let i = e.events[n],
        a = i.indexOf(t);
      i.splice(a, 1), i.length || (delete e.events[n], e.events[n + Ue](), delete e.events[n + Ue]);
    }
  ),
  pr = 1e3,
  rn = (e, t) =>
    dr(
      e,
      () => {
        let r = t();
        r && e.events[De].push(r);
      },
      fr,
      r => {
        let i = e.listen;
        e.listen = u => (!e.lc && !e.active && (r(), (e.active = !0)), i(u));
        let a = e.off;
        return (
          (e.events[De] = []),
          (e.off = () => {
            setTimeout(() => {
              if (e.active && !e.lc) {
                e.active = !1;
                for (let u of e.events[De]) u();
                (e.events[De] = []), a();
              }
            }, pr);
          }),
          () => {
            (e.listen = i), (e.off = a);
          }
        );
      }
    ),
  ne = [],
  se = e => {
    let t,
      n = [],
      r = {
        lc: 0,
        value: e,
        set(i) {
          (r.value = i), r.notify();
        },
        get() {
          return r.lc || r.listen(() => {})(), r.value;
        },
        notify(i) {
          t = n;
          let a = !ne.length;
          for (let u = 0; u < t.length; u++) ne.push(t[u], r.value, i);
          if (a) {
            for (let u = 0; u < ne.length; u += 3) ne[u](ne[u + 1], ne[u + 2]);
            ne.length = 0;
          }
        },
        listen(i) {
          return (
            n === t && (n = n.slice()),
            (r.lc = n.push(i)),
            () => {
              n === t && (n = n.slice());
              let a = n.indexOf(i);
              ~a && (n.splice(a, 1), r.lc--, r.lc || r.off());
            }
          );
        },
        subscribe(i) {
          let a = r.listen(i);
          return i(r.value), a;
        },
        off() {}
      };
    return r;
  },
  an = (e = {}) => {
    let t = se(e);
    return (
      (t.setKey = function (n, r) {
        typeof r > 'u'
          ? n in t.value && ((t.value = { ...t.value }), delete t.value[n], t.notify(n))
          : t.value[n] !== r && ((t.value = { ...t.value, [n]: r }), t.notify(n));
      }),
      t
    );
  },
  qe = e => e,
  Q = {},
  H = { addEventListener() {}, removeEventListener() {} };
typeof localStorage < 'u' && (Q = localStorage);
let gr = {
  addEventListener(e, t) {
    window.addEventListener('storage', t);
  },
  removeEventListener(e, t) {
    window.removeEventListener('storage', t);
  }
};
typeof window < 'u' && (H = gr);
function mr(e, t = void 0, n = {}) {
  let r = n.encode || qe,
    i = n.decode || qe,
    a = se(t),
    u = a.set;
  a.set = d => {
    typeof d > 'u' ? delete Q[e] : (Q[e] = r(d)), u(d);
  };
  function l(d) {
    d.key === e ? (d.newValue === null ? u(void 0) : u(i(d.newValue))) : Q[e] || u(void 0);
  }
  return (
    rn(a, () => {
      if ((u(Q[e] ? i(Q[e]) : t), n.listen !== !1))
        return (
          H.addEventListener(e, l),
          () => {
            H.removeEventListener(e, l);
          }
        );
    }),
    a
  );
}
function ut(e, t = {}, n = {}) {
  let r = n.encode || qe,
    i = n.decode || qe,
    a = an(),
    u = a.setKey;
  a.setKey = (f, m) => {
    typeof m > 'u'
      ? (n.listen !== !1 && H.perKey && H.removeEventListener(e + f, d), delete Q[e + f])
      : (n.listen !== !1 && H.perKey && !(f in a.value) && H.addEventListener(e + f, d),
        (Q[e + f] = r(m))),
      u(f, m);
  };
  let l = a.set;
  a.set = function (f) {
    for (let m in f) a.setKey(m, f[m]);
    for (let m in a.value) m in f || a.setKey(m);
  };
  function d(f) {
    f.key
      ? f.key.startsWith(e) &&
        (f.newValue === null
          ? u(f.key.slice(e.length), void 0)
          : u(f.key.slice(e.length), i(f.newValue)))
      : l({});
  }
  return (
    rn(a, () => {
      let f = { ...t };
      for (let m in Q) m.startsWith(e) && (f[m.slice(e.length)] = i(Q[m]));
      if ((a.set(f), n.listen !== !1))
        return (
          H.addEventListener(e, d),
          () => {
            H.removeEventListener(e, d);
            for (let m in a.value) H.removeEventListener(e + m, d);
          }
        );
    }),
    a
  );
}
const st = {
    encode(e) {
      return JSON.stringify(e);
    },
    decode(e) {
      try {
        return JSON.parse(e);
      } catch (t) {
        console.log(t, e);
      }
    }
  },
  vr = {
    encode(e) {
      return e ? '1' : '0';
    },
    decode(e) {
      return e === '1';
    }
  },
  Er = ut('current_attempt', { attempts: 0, guesses: [], correct: !1, date: new Date() }, st),
  Or = ut('past_attempts', { array: [] }, st),
  _r = mr('read_instructions', !0, vr),
  yr = ut('current_song', {}, st),
  Pr = se(!0),
  xr = an({ attempts: 0, guesses: [], correct: !1, date: new Date() }),
  Nr = se(!1),
  hr = se(''),
  Dt = se(!0),
  br = se([]),
  wr = 'https://us-central1-audial-6e1bd.cloudfunctions.net',
  Sr = async (e, t) => {
    const n = await fetch(
      `${wr}/daily?playlist=${e}&random=${t}&locale=${new Date().toDateString()}`,
      { method: 'GET', cache: 'reload' }
    );
    return (
      await lr.track('get-track', { playlist: e || 'default', random: t }), n.status, await n.json()
    );
  },
  Ir = e => ({
    name: e.name,
    artist: e.artists ? e.artists[0].name : 'unknown artist',
    id: e.id,
    preview: e.preview_url
  }),
  kr = (e, t) => {
    const n = Math.abs(e.getTime() - t.getTime());
    return Math.ceil(n / (1e3 * 60 * 60 * 24));
  },
  jr = async (e, t) => {
    Dt.set(!0);
    const n = await Sr(e, t);
    br.set(n.tracks);
    const r = Ir(n.daily);
    yr.set(r), hr.set(e), Dt.set(!1);
  };
export {
  Dt as a,
  yr as b,
  Er as c,
  kr as d,
  lr as e,
  br as f,
  Or as g,
  Ir as h,
  Nr as i,
  jr as l,
  hr as p,
  _r as r,
  Pr as s,
  xr as t
};
