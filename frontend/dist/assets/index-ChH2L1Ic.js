(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r);
  new MutationObserver((r) => {
    for (const o of r)
      if (o.type === 'childList')
        for (const i of o.addedNodes)
          i.tagName === 'LINK' && i.rel === 'modulepreload' && s(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(r) {
    const o = {};
    return (
      r.integrity && (o.integrity = r.integrity),
      r.referrerPolicy && (o.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : r.crossOrigin === 'anonymous'
          ? (o.credentials = 'omit')
          : (o.credentials = 'same-origin'),
      o
    );
  }
  function s(r) {
    if (r.ep) return;
    r.ep = !0;
    const o = n(r);
    fetch(r.href, o);
  }
})();
/**
 * @vue/shared v3.5.22
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function Ds(e) {
  const t = Object.create(null);
  for (const n of e.split(',')) t[n] = 1;
  return (n) => n in t;
}
const Y = {},
  Tt = [],
  qe = () => {},
  oo = () => !1,
  Mn = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  js = (e) => e.startsWith('onUpdate:'),
  pe = Object.assign,
  $s = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  zi = Object.prototype.hasOwnProperty,
  J = (e, t) => zi.call(e, t),
  I = Array.isArray,
  At = (e) => Dn(e) === '[object Map]',
  io = (e) => Dn(e) === '[object Set]',
  U = (e) => typeof e == 'function',
  oe = (e) => typeof e == 'string',
  at = (e) => typeof e == 'symbol',
  ee = (e) => e !== null && typeof e == 'object',
  lo = (e) => (ee(e) || U(e)) && U(e.then) && U(e.catch),
  co = Object.prototype.toString,
  Dn = (e) => co.call(e),
  Ji = (e) => Dn(e).slice(8, -1),
  ao = (e) => Dn(e) === '[object Object]',
  Us = (e) =>
    oe(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  Kt = Ds(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted',
  ),
  jn = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  Gi = /-\w/g,
  it = jn((e) => e.replace(Gi, (t) => t.slice(1).toUpperCase())),
  Xi = /\B([A-Z])/g,
  wt = jn((e) => e.replace(Xi, '-$1').toLowerCase()),
  uo = jn((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  ts = jn((e) => (e ? `on${uo(e)}` : '')),
  st = (e, t) => !Object.is(e, t),
  wn = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  },
  fo = (e, t, n, s = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: s,
      value: n,
    });
  },
  gs = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
let lr;
const $n = () =>
  lr ||
  (lr =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : {});
function Bs(e) {
  if (I(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        r = oe(s) ? el(s) : Bs(s);
      if (r) for (const o in r) t[o] = r[o];
    }
    return t;
  } else if (oe(e) || ee(e)) return e;
}
const Yi = /;(?![^(]*\))/g,
  Zi = /:([^]+)/,
  Qi = /\/\*[^]*?\*\//g;
function el(e) {
  const t = {};
  return (
    e
      .replace(Qi, '')
      .split(Yi)
      .forEach((n) => {
        if (n) {
          const s = n.split(Zi);
          s.length > 1 && (t[s[0].trim()] = s[1].trim());
        }
      }),
    t
  );
}
function Un(e) {
  let t = '';
  if (oe(e)) t = e;
  else if (I(e))
    for (let n = 0; n < e.length; n++) {
      const s = Un(e[n]);
      s && (t += s + ' ');
    }
  else if (ee(e)) for (const n in e) e[n] && (t += n + ' ');
  return t.trim();
}
const tl =
    'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  nl = Ds(tl);
function ho(e) {
  return !!e || e === '';
}
const po = (e) => !!(e && e.__v_isRef === !0),
  Xe = (e) =>
    oe(e)
      ? e
      : e == null
        ? ''
        : I(e) || (ee(e) && (e.toString === co || !U(e.toString)))
          ? po(e)
            ? Xe(e.value)
            : JSON.stringify(e, mo, 2)
          : String(e),
  mo = (e, t) =>
    po(t)
      ? mo(e, t.value)
      : At(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (n, [s, r], o) => ((n[ns(s, o) + ' =>'] = r), n),
              {},
            ),
          }
        : io(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((n) => ns(n)) }
          : at(t)
            ? ns(t)
            : ee(t) && !I(t) && !ao(t)
              ? String(t)
              : t,
  ns = (e, t = '') => {
    var n;
    return at(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
/**
 * @vue/reactivity v3.5.22
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let fe;
class go {
  constructor(t = !1) {
    ((this.detached = t),
      (this._active = !0),
      (this._on = 0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = fe),
      !t &&
        fe &&
        (this.index = (fe.scopes || (fe.scopes = [])).push(this) - 1));
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause();
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = fe;
      try {
        return ((fe = this), t());
      } finally {
        fe = n;
      }
    }
  }
  on() {
    ++this._on === 1 && ((this.prevScope = fe), (fe = this));
  }
  off() {
    this._on > 0 &&
      --this._on === 0 &&
      ((fe = this.prevScope), (this.prevScope = void 0));
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop();
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (((this.cleanups.length = 0), this.scopes)) {
        for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r &&
          r !== this &&
          ((this.parent.scopes[this.index] = r), (r.index = this.index));
      }
      this.parent = void 0;
    }
  }
}
function bo(e) {
  return new go(e);
}
function yo() {
  return fe;
}
function sl(e, t = !1) {
  fe && fe.cleanups.push(e);
}
let Q;
const ss = new WeakSet();
class _o {
  constructor(t) {
    ((this.fn = t),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      fe && fe.active && fe.effects.push(this));
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 &&
      ((this.flags &= -65), ss.has(this) && (ss.delete(this), this.trigger()));
  }
  notify() {
    (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || So(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    ((this.flags |= 2), cr(this), vo(this));
    const t = Q,
      n = Le;
    ((Q = this), (Le = !0));
    try {
      return this.fn();
    } finally {
      (xo(this), (Q = t), (Le = n), (this.flags &= -3));
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) Vs(t);
      ((this.deps = this.depsTail = void 0),
        cr(this),
        this.onStop && this.onStop(),
        (this.flags &= -2));
    }
  }
  trigger() {
    this.flags & 64
      ? ss.add(this)
      : this.scheduler
        ? this.scheduler()
        : this.runIfDirty();
  }
  runIfDirty() {
    bs(this) && this.run();
  }
  get dirty() {
    return bs(this);
  }
}
let wo = 0,
  Wt,
  zt;
function So(e, t = !1) {
  if (((e.flags |= 8), t)) {
    ((e.next = zt), (zt = e));
    return;
  }
  ((e.next = Wt), (Wt = e));
}
function ks() {
  wo++;
}
function Hs() {
  if (--wo > 0) return;
  if (zt) {
    let t = zt;
    for (zt = void 0; t; ) {
      const n = t.next;
      ((t.next = void 0), (t.flags &= -9), (t = n));
    }
  }
  let e;
  for (; Wt; ) {
    let t = Wt;
    for (Wt = void 0; t; ) {
      const n = t.next;
      if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function vo(e) {
  for (let t = e.deps; t; t = t.nextDep)
    ((t.version = -1),
      (t.prevActiveLink = t.dep.activeLink),
      (t.dep.activeLink = t));
}
function xo(e) {
  let t,
    n = e.depsTail,
    s = n;
  for (; s; ) {
    const r = s.prevDep;
    (s.version === -1 ? (s === n && (n = r), Vs(s), rl(s)) : (t = s),
      (s.dep.activeLink = s.prevActiveLink),
      (s.prevActiveLink = void 0),
      (s = r));
  }
  ((e.deps = t), (e.depsTail = n));
}
function bs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && (Eo(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0;
  return !!e._dirty;
}
function Eo(e) {
  if (
    (e.flags & 4 && !(e.flags & 16)) ||
    ((e.flags &= -17), e.globalVersion === tn) ||
    ((e.globalVersion = tn),
    !e.isSSR && e.flags & 128 && ((!e.deps && !e._dirty) || !bs(e)))
  )
    return;
  e.flags |= 2;
  const t = e.dep,
    n = Q,
    s = Le;
  ((Q = e), (Le = !0));
  try {
    vo(e);
    const r = e.fn(e._value);
    (t.version === 0 || st(r, e._value)) &&
      ((e.flags |= 128), (e._value = r), t.version++);
  } catch (r) {
    throw (t.version++, r);
  } finally {
    ((Q = n), (Le = s), xo(e), (e.flags &= -3));
  }
}
function Vs(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e;
  if (
    (s && ((s.nextSub = r), (e.prevSub = void 0)),
    r && ((r.prevSub = s), (e.nextSub = void 0)),
    n.subs === e && ((n.subs = s), !s && n.computed))
  ) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep) Vs(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function rl(e) {
  const { prevDep: t, nextDep: n } = e;
  (t && ((t.nextDep = n), (e.prevDep = void 0)),
    n && ((n.prevDep = t), (e.nextDep = void 0)));
}
let Le = !0;
const Ro = [];
function Ye() {
  (Ro.push(Le), (Le = !1));
}
function Ze() {
  const e = Ro.pop();
  Le = e === void 0 ? !0 : e;
}
function cr(e) {
  const { cleanup: t } = e;
  if (((e.cleanup = void 0), t)) {
    const n = Q;
    Q = void 0;
    try {
      t();
    } finally {
      Q = n;
    }
  }
}
let tn = 0;
class ol {
  constructor(t, n) {
    ((this.sub = t),
      (this.dep = n),
      (this.version = n.version),
      (this.nextDep =
        this.prevDep =
        this.nextSub =
        this.prevSub =
        this.prevActiveLink =
          void 0));
  }
}
class qs {
  constructor(t) {
    ((this.computed = t),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0),
      (this.__v_skip = !0));
  }
  track(t) {
    if (!Q || !Le || Q === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Q)
      ((n = this.activeLink = new ol(Q, this)),
        Q.deps
          ? ((n.prevDep = Q.depsTail),
            (Q.depsTail.nextDep = n),
            (Q.depsTail = n))
          : (Q.deps = Q.depsTail = n),
        Oo(n));
    else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
      const s = n.nextDep;
      ((s.prevDep = n.prevDep),
        n.prevDep && (n.prevDep.nextDep = s),
        (n.prevDep = Q.depsTail),
        (n.nextDep = void 0),
        (Q.depsTail.nextDep = n),
        (Q.depsTail = n),
        Q.deps === n && (Q.deps = s));
    }
    return n;
  }
  trigger(t) {
    (this.version++, tn++, this.notify(t));
  }
  notify(t) {
    ks();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Hs();
    }
  }
}
function Oo(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep) Oo(s);
    }
    const n = e.dep.subs;
    (n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e));
  }
}
const On = new WeakMap(),
  gt = Symbol(''),
  ys = Symbol(''),
  nn = Symbol('');
function de(e, t, n) {
  if (Le && Q) {
    let s = On.get(e);
    s || On.set(e, (s = new Map()));
    let r = s.get(n);
    (r || (s.set(n, (r = new qs())), (r.map = s), (r.key = n)), r.track());
  }
}
function Je(e, t, n, s, r, o) {
  const i = On.get(e);
  if (!i) {
    tn++;
    return;
  }
  const l = (c) => {
    c && c.trigger();
  };
  if ((ks(), t === 'clear')) i.forEach(l);
  else {
    const c = I(e),
      f = c && Us(n);
    if (c && n === 'length') {
      const a = Number(s);
      i.forEach((h, y) => {
        (y === 'length' || y === nn || (!at(y) && y >= a)) && l(h);
      });
    } else
      switch (
        ((n !== void 0 || i.has(void 0)) && l(i.get(n)), f && l(i.get(nn)), t)
      ) {
        case 'add':
          c ? f && l(i.get('length')) : (l(i.get(gt)), At(e) && l(i.get(ys)));
          break;
        case 'delete':
          c || (l(i.get(gt)), At(e) && l(i.get(ys)));
          break;
        case 'set':
          At(e) && l(i.get(gt));
          break;
      }
  }
  Hs();
}
function il(e, t) {
  const n = On.get(e);
  return n && n.get(t);
}
function Et(e) {
  const t = z(e);
  return t === e ? t : (de(t, 'iterate', nn), Ne(e) ? t : t.map(ae));
}
function Bn(e) {
  return (de((e = z(e)), 'iterate', nn), e);
}
const ll = {
  __proto__: null,
  [Symbol.iterator]() {
    return rs(this, Symbol.iterator, ae);
  },
  concat(...e) {
    return Et(this).concat(...e.map((t) => (I(t) ? Et(t) : t)));
  },
  entries() {
    return rs(this, 'entries', (e) => ((e[1] = ae(e[1])), e));
  },
  every(e, t) {
    return We(this, 'every', e, t, void 0, arguments);
  },
  filter(e, t) {
    return We(this, 'filter', e, t, (n) => n.map(ae), arguments);
  },
  find(e, t) {
    return We(this, 'find', e, t, ae, arguments);
  },
  findIndex(e, t) {
    return We(this, 'findIndex', e, t, void 0, arguments);
  },
  findLast(e, t) {
    return We(this, 'findLast', e, t, ae, arguments);
  },
  findLastIndex(e, t) {
    return We(this, 'findLastIndex', e, t, void 0, arguments);
  },
  forEach(e, t) {
    return We(this, 'forEach', e, t, void 0, arguments);
  },
  includes(...e) {
    return os(this, 'includes', e);
  },
  indexOf(...e) {
    return os(this, 'indexOf', e);
  },
  join(e) {
    return Et(this).join(e);
  },
  lastIndexOf(...e) {
    return os(this, 'lastIndexOf', e);
  },
  map(e, t) {
    return We(this, 'map', e, t, void 0, arguments);
  },
  pop() {
    return Bt(this, 'pop');
  },
  push(...e) {
    return Bt(this, 'push', e);
  },
  reduce(e, ...t) {
    return ar(this, 'reduce', e, t);
  },
  reduceRight(e, ...t) {
    return ar(this, 'reduceRight', e, t);
  },
  shift() {
    return Bt(this, 'shift');
  },
  some(e, t) {
    return We(this, 'some', e, t, void 0, arguments);
  },
  splice(...e) {
    return Bt(this, 'splice', e);
  },
  toReversed() {
    return Et(this).toReversed();
  },
  toSorted(e) {
    return Et(this).toSorted(e);
  },
  toSpliced(...e) {
    return Et(this).toSpliced(...e);
  },
  unshift(...e) {
    return Bt(this, 'unshift', e);
  },
  values() {
    return rs(this, 'values', ae);
  },
};
function rs(e, t, n) {
  const s = Bn(e),
    r = s[t]();
  return (
    s !== e &&
      !Ne(e) &&
      ((r._next = r.next),
      (r.next = () => {
        const o = r._next();
        return (o.done || (o.value = n(o.value)), o);
      })),
    r
  );
}
const cl = Array.prototype;
function We(e, t, n, s, r, o) {
  const i = Bn(e),
    l = i !== e && !Ne(e),
    c = i[t];
  if (c !== cl[t]) {
    const h = c.apply(e, o);
    return l ? ae(h) : h;
  }
  let f = n;
  i !== e &&
    (l
      ? (f = function (h, y) {
          return n.call(this, ae(h), y, e);
        })
      : n.length > 2 &&
        (f = function (h, y) {
          return n.call(this, h, y, e);
        }));
  const a = c.call(i, f, s);
  return l && r ? r(a) : a;
}
function ar(e, t, n, s) {
  const r = Bn(e);
  let o = n;
  return (
    r !== e &&
      (Ne(e)
        ? n.length > 3 &&
          (o = function (i, l, c) {
            return n.call(this, i, l, c, e);
          })
        : (o = function (i, l, c) {
            return n.call(this, i, ae(l), c, e);
          })),
    r[t](o, ...s)
  );
}
function os(e, t, n) {
  const s = z(e);
  de(s, 'iterate', nn);
  const r = s[t](...n);
  return (r === -1 || r === !1) && zs(n[0])
    ? ((n[0] = z(n[0])), s[t](...n))
    : r;
}
function Bt(e, t, n = []) {
  (Ye(), ks());
  const s = z(e)[t].apply(e, n);
  return (Hs(), Ze(), s);
}
const al = Ds('__proto__,__v_isRef,__isVue'),
  Co = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== 'arguments' && e !== 'caller')
      .map((e) => Symbol[e])
      .filter(at),
  );
function ul(e) {
  at(e) || (e = String(e));
  const t = z(this);
  return (de(t, 'has', e), t.hasOwnProperty(e));
}
class To {
  constructor(t = !1, n = !1) {
    ((this._isReadonly = t), (this._isShallow = n));
  }
  get(t, n, s) {
    if (n === '__v_skip') return t.__v_skip;
    const r = this._isReadonly,
      o = this._isShallow;
    if (n === '__v_isReactive') return !r;
    if (n === '__v_isReadonly') return r;
    if (n === '__v_isShallow') return o;
    if (n === '__v_raw')
      return s === (r ? (o ? wl : No) : o ? Fo : Po).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(s)
        ? t
        : void 0;
    const i = I(t);
    if (!r) {
      let c;
      if (i && (c = ll[n])) return c;
      if (n === 'hasOwnProperty') return ul;
    }
    const l = Reflect.get(t, n, se(t) ? t : s);
    if ((at(n) ? Co.has(n) : al(n)) || (r || de(t, 'get', n), o)) return l;
    if (se(l)) {
      const c = i && Us(n) ? l : l.value;
      return r && ee(c) ? ws(c) : c;
    }
    return ee(l) ? (r ? ws(l) : kn(l)) : l;
  }
}
class Ao extends To {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let o = t[n];
    if (!this._isShallow) {
      const c = lt(o);
      if (
        (!Ne(s) && !lt(s) && ((o = z(o)), (s = z(s))), !I(t) && se(o) && !se(s))
      )
        return (c || (o.value = s), !0);
    }
    const i = I(t) && Us(n) ? Number(n) < t.length : J(t, n),
      l = Reflect.set(t, n, s, se(t) ? t : r);
    return (
      t === z(r) && (i ? st(s, o) && Je(t, 'set', n, s) : Je(t, 'add', n, s)),
      l
    );
  }
  deleteProperty(t, n) {
    const s = J(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return (r && s && Je(t, 'delete', n, void 0), r);
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return ((!at(n) || !Co.has(n)) && de(t, 'has', n), s);
  }
  ownKeys(t) {
    return (de(t, 'iterate', I(t) ? 'length' : gt), Reflect.ownKeys(t));
  }
}
class fl extends To {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const dl = new Ao(),
  hl = new fl(),
  pl = new Ao(!0);
const _s = (e) => e,
  mn = (e) => Reflect.getPrototypeOf(e);
function ml(e, t, n) {
  return function (...s) {
    const r = this.__v_raw,
      o = z(r),
      i = At(o),
      l = e === 'entries' || (e === Symbol.iterator && i),
      c = e === 'keys' && i,
      f = r[e](...s),
      a = n ? _s : t ? Cn : ae;
    return (
      !t && de(o, 'iterate', c ? ys : gt),
      {
        next() {
          const { value: h, done: y } = f.next();
          return y
            ? { value: h, done: y }
            : { value: l ? [a(h[0]), a(h[1])] : a(h), done: y };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function gn(e) {
  return function (...t) {
    return e === 'delete' ? !1 : e === 'clear' ? void 0 : this;
  };
}
function gl(e, t) {
  const n = {
    get(r) {
      const o = this.__v_raw,
        i = z(o),
        l = z(r);
      e || (st(r, l) && de(i, 'get', r), de(i, 'get', l));
      const { has: c } = mn(i),
        f = t ? _s : e ? Cn : ae;
      if (c.call(i, r)) return f(o.get(r));
      if (c.call(i, l)) return f(o.get(l));
      o !== i && o.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return (!e && de(z(r), 'iterate', gt), r.size);
    },
    has(r) {
      const o = this.__v_raw,
        i = z(o),
        l = z(r);
      return (
        e || (st(r, l) && de(i, 'has', r), de(i, 'has', l)),
        r === l ? o.has(r) : o.has(r) || o.has(l)
      );
    },
    forEach(r, o) {
      const i = this,
        l = i.__v_raw,
        c = z(l),
        f = t ? _s : e ? Cn : ae;
      return (
        !e && de(c, 'iterate', gt),
        l.forEach((a, h) => r.call(o, f(a), f(h), i))
      );
    },
  };
  return (
    pe(
      n,
      e
        ? {
            add: gn('add'),
            set: gn('set'),
            delete: gn('delete'),
            clear: gn('clear'),
          }
        : {
            add(r) {
              !t && !Ne(r) && !lt(r) && (r = z(r));
              const o = z(this);
              return (
                mn(o).has.call(o, r) || (o.add(r), Je(o, 'add', r, r)),
                this
              );
            },
            set(r, o) {
              !t && !Ne(o) && !lt(o) && (o = z(o));
              const i = z(this),
                { has: l, get: c } = mn(i);
              let f = l.call(i, r);
              f || ((r = z(r)), (f = l.call(i, r)));
              const a = c.call(i, r);
              return (
                i.set(r, o),
                f ? st(o, a) && Je(i, 'set', r, o) : Je(i, 'add', r, o),
                this
              );
            },
            delete(r) {
              const o = z(this),
                { has: i, get: l } = mn(o);
              let c = i.call(o, r);
              (c || ((r = z(r)), (c = i.call(o, r))), l && l.call(o, r));
              const f = o.delete(r);
              return (c && Je(o, 'delete', r, void 0), f);
            },
            clear() {
              const r = z(this),
                o = r.size !== 0,
                i = r.clear();
              return (o && Je(r, 'clear', void 0, void 0), i);
            },
          },
    ),
    ['keys', 'values', 'entries', Symbol.iterator].forEach((r) => {
      n[r] = ml(r, e, t);
    }),
    n
  );
}
function Ks(e, t) {
  const n = gl(e, t);
  return (s, r, o) =>
    r === '__v_isReactive'
      ? !e
      : r === '__v_isReadonly'
        ? e
        : r === '__v_raw'
          ? s
          : Reflect.get(J(n, r) && r in s ? n : s, r, o);
}
const bl = { get: Ks(!1, !1) },
  yl = { get: Ks(!1, !0) },
  _l = { get: Ks(!0, !1) };
const Po = new WeakMap(),
  Fo = new WeakMap(),
  No = new WeakMap(),
  wl = new WeakMap();
function Sl(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1;
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2;
    default:
      return 0;
  }
}
function vl(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Sl(Ji(e));
}
function kn(e) {
  return lt(e) ? e : Ws(e, !1, dl, bl, Po);
}
function xl(e) {
  return Ws(e, !1, pl, yl, Fo);
}
function ws(e) {
  return Ws(e, !0, hl, _l, No);
}
function Ws(e, t, n, s, r) {
  if (!ee(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const o = vl(e);
  if (o === 0) return e;
  const i = r.get(e);
  if (i) return i;
  const l = new Proxy(e, o === 2 ? s : n);
  return (r.set(e, l), l);
}
function rt(e) {
  return lt(e) ? rt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function lt(e) {
  return !!(e && e.__v_isReadonly);
}
function Ne(e) {
  return !!(e && e.__v_isShallow);
}
function zs(e) {
  return e ? !!e.__v_raw : !1;
}
function z(e) {
  const t = e && e.__v_raw;
  return t ? z(t) : e;
}
function Js(e) {
  return (
    !J(e, '__v_skip') && Object.isExtensible(e) && fo(e, '__v_skip', !0),
    e
  );
}
const ae = (e) => (ee(e) ? kn(e) : e),
  Cn = (e) => (ee(e) ? ws(e) : e);
function se(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Pe(e) {
  return El(e, !1);
}
function El(e, t) {
  return se(e) ? e : new Rl(e, t);
}
class Rl {
  constructor(t, n) {
    ((this.dep = new qs()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = n ? t : z(t)),
      (this._value = n ? t : ae(t)),
      (this.__v_isShallow = n));
  }
  get value() {
    return (this.dep.track(), this._value);
  }
  set value(t) {
    const n = this._rawValue,
      s = this.__v_isShallow || Ne(t) || lt(t);
    ((t = s ? t : z(t)),
      st(t, n) &&
        ((this._rawValue = t),
        (this._value = s ? t : ae(t)),
        this.dep.trigger()));
  }
}
function Vt(e) {
  return se(e) ? e.value : e;
}
const Ol = {
  get: (e, t, n) => (t === '__v_raw' ? e : Vt(Reflect.get(e, t, n))),
  set: (e, t, n, s) => {
    const r = e[t];
    return se(r) && !se(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, s);
  },
};
function Lo(e) {
  return rt(e) ? e : new Proxy(e, Ol);
}
function Cl(e) {
  const t = I(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = Al(e, n);
  return t;
}
class Tl {
  constructor(t, n, s) {
    ((this._object = t),
      (this._key = n),
      (this._defaultValue = s),
      (this.__v_isRef = !0),
      (this._value = void 0));
  }
  get value() {
    const t = this._object[this._key];
    return (this._value = t === void 0 ? this._defaultValue : t);
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return il(z(this._object), this._key);
  }
}
function Al(e, t, n) {
  const s = e[t];
  return se(s) ? s : new Tl(e, t, n);
}
class Pl {
  constructor(t, n, s) {
    ((this.fn = t),
      (this.setter = n),
      (this._value = void 0),
      (this.dep = new qs(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = tn - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !n),
      (this.isSSR = s));
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && Q !== this))
      return (So(this, !0), !0);
  }
  get value() {
    const t = this.dep.track();
    return (Eo(this), t && (t.version = this.dep.version), this._value);
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Fl(e, t, n = !1) {
  let s, r;
  return (U(e) ? (s = e) : ((s = e.get), (r = e.set)), new Pl(s, r, n));
}
const bn = {},
  Tn = new WeakMap();
let ht;
function Nl(e, t = !1, n = ht) {
  if (n) {
    let s = Tn.get(n);
    (s || Tn.set(n, (s = [])), s.push(e));
  }
}
function Ll(e, t, n = Y) {
  const {
      immediate: s,
      deep: r,
      once: o,
      scheduler: i,
      augmentJob: l,
      call: c,
    } = n,
    f = (A) => (r ? A : Ne(A) || r === !1 || r === 0 ? Ge(A, 1) : Ge(A));
  let a,
    h,
    y,
    E,
    m = !1,
    b = !1;
  if (
    (se(e)
      ? ((h = () => e.value), (m = Ne(e)))
      : rt(e)
        ? ((h = () => f(e)), (m = !0))
        : I(e)
          ? ((b = !0),
            (m = e.some((A) => rt(A) || Ne(A))),
            (h = () =>
              e.map((A) => {
                if (se(A)) return A.value;
                if (rt(A)) return f(A);
                if (U(A)) return c ? c(A, 2) : A();
              })))
          : U(e)
            ? t
              ? (h = c ? () => c(e, 2) : e)
              : (h = () => {
                  if (y) {
                    Ye();
                    try {
                      y();
                    } finally {
                      Ze();
                    }
                  }
                  const A = ht;
                  ht = a;
                  try {
                    return c ? c(e, 3, [E]) : e(E);
                  } finally {
                    ht = A;
                  }
                })
            : (h = qe),
    t && r)
  ) {
    const A = h,
      j = r === !0 ? 1 / 0 : r;
    h = () => Ge(A(), j);
  }
  const S = yo(),
    P = () => {
      (a.stop(), S && S.active && $s(S.effects, a));
    };
  if (o && t) {
    const A = t;
    t = (...j) => {
      (A(...j), P());
    };
  }
  let D = b ? new Array(e.length).fill(bn) : bn;
  const M = (A) => {
    if (!(!(a.flags & 1) || (!a.dirty && !A)))
      if (t) {
        const j = a.run();
        if (r || m || (b ? j.some((le, G) => st(le, D[G])) : st(j, D))) {
          y && y();
          const le = ht;
          ht = a;
          try {
            const G = [j, D === bn ? void 0 : b && D[0] === bn ? [] : D, E];
            ((D = j), c ? c(t, 3, G) : t(...G));
          } finally {
            ht = le;
          }
        }
      } else a.run();
  };
  return (
    l && l(M),
    (a = new _o(h)),
    (a.scheduler = i ? () => i(M, !1) : M),
    (E = (A) => Nl(A, !1, a)),
    (y = a.onStop =
      () => {
        const A = Tn.get(a);
        if (A) {
          if (c) c(A, 4);
          else for (const j of A) j();
          Tn.delete(a);
        }
      }),
    t ? (s ? M(!0) : (D = a.run())) : i ? i(M.bind(null, !0), !0) : a.run(),
    (P.pause = a.pause.bind(a)),
    (P.resume = a.resume.bind(a)),
    (P.stop = P),
    P
  );
}
function Ge(e, t = 1 / 0, n) {
  if (
    t <= 0 ||
    !ee(e) ||
    e.__v_skip ||
    ((n = n || new Map()), (n.get(e) || 0) >= t)
  )
    return e;
  if ((n.set(e, t), t--, se(e))) Ge(e.value, t, n);
  else if (I(e)) for (let s = 0; s < e.length; s++) Ge(e[s], t, n);
  else if (io(e) || At(e))
    e.forEach((s) => {
      Ge(s, t, n);
    });
  else if (ao(e)) {
    for (const s in e) Ge(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && Ge(e[s], t, n);
  }
  return e;
}
/**
 * @vue/runtime-core v3.5.22
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function ln(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    Hn(r, t, n);
  }
}
function Ke(e, t, n, s) {
  if (U(e)) {
    const r = ln(e, t, n, s);
    return (
      r &&
        lo(r) &&
        r.catch((o) => {
          Hn(o, t, n);
        }),
      r
    );
  }
  if (I(e)) {
    const r = [];
    for (let o = 0; o < e.length; o++) r.push(Ke(e[o], t, n, s));
    return r;
  }
}
function Hn(e, t, n, s = !0) {
  const r = t ? t.vnode : null,
    { errorHandler: o, throwUnhandledErrorInProduction: i } =
      (t && t.appContext.config) || Y;
  if (t) {
    let l = t.parent;
    const c = t.proxy,
      f = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const a = l.ec;
      if (a) {
        for (let h = 0; h < a.length; h++) if (a[h](e, c, f) === !1) return;
      }
      l = l.parent;
    }
    if (o) {
      (Ye(), ln(o, null, 10, [e, c, f]), Ze());
      return;
    }
  }
  Il(e, n, r, s, i);
}
function Il(e, t, n, s = !0, r = !1) {
  if (r) throw e;
  console.error(e);
}
const ye = [];
let He = -1;
const Pt = [];
let tt = null,
  Ot = 0;
const Io = Promise.resolve();
let An = null;
function Mo(e) {
  const t = An || Io;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ml(e) {
  let t = He + 1,
    n = ye.length;
  for (; t < n; ) {
    const s = (t + n) >>> 1,
      r = ye[s],
      o = sn(r);
    o < e || (o === e && r.flags & 2) ? (t = s + 1) : (n = s);
  }
  return t;
}
function Gs(e) {
  if (!(e.flags & 1)) {
    const t = sn(e),
      n = ye[ye.length - 1];
    (!n || (!(e.flags & 2) && t >= sn(n)) ? ye.push(e) : ye.splice(Ml(t), 0, e),
      (e.flags |= 1),
      Do());
  }
}
function Do() {
  An || (An = Io.then($o));
}
function Dl(e) {
  (I(e)
    ? Pt.push(...e)
    : tt && e.id === -1
      ? tt.splice(Ot + 1, 0, e)
      : e.flags & 1 || (Pt.push(e), (e.flags |= 1)),
    Do());
}
function ur(e, t, n = He + 1) {
  for (; n < ye.length; n++) {
    const s = ye[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid) continue;
      (ye.splice(n, 1),
        n--,
        s.flags & 4 && (s.flags &= -2),
        s(),
        s.flags & 4 || (s.flags &= -2));
    }
  }
}
function jo(e) {
  if (Pt.length) {
    const t = [...new Set(Pt)].sort((n, s) => sn(n) - sn(s));
    if (((Pt.length = 0), tt)) {
      tt.push(...t);
      return;
    }
    for (tt = t, Ot = 0; Ot < tt.length; Ot++) {
      const n = tt[Ot];
      (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2));
    }
    ((tt = null), (Ot = 0));
  }
}
const sn = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id);
function $o(e) {
  try {
    for (He = 0; He < ye.length; He++) {
      const t = ye[He];
      t &&
        !(t.flags & 8) &&
        (t.flags & 4 && (t.flags &= -2),
        ln(t, t.i, t.i ? 15 : 14),
        t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; He < ye.length; He++) {
      const t = ye[He];
      t && (t.flags &= -2);
    }
    ((He = -1),
      (ye.length = 0),
      jo(),
      (An = null),
      (ye.length || Pt.length) && $o());
  }
}
let Fe = null,
  Uo = null;
function Pn(e) {
  const t = Fe;
  return ((Fe = e), (Uo = (e && e.type.__scopeId) || null), t);
}
function jl(e, t = Fe, n) {
  if (!t || e._n) return e;
  const s = (...r) => {
    s._d && vr(-1);
    const o = Pn(t);
    let i;
    try {
      i = e(...r);
    } finally {
      (Pn(o), s._d && vr(1));
    }
    return i;
  };
  return ((s._n = !0), (s._c = !0), (s._d = !0), s);
}
function fr(e, t) {
  if (Fe === null) return e;
  const n = zn(Fe),
    s = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [o, i, l, c = Y] = t[r];
    o &&
      (U(o) && (o = { mounted: o, updated: o }),
      o.deep && Ge(i),
      s.push({
        dir: o,
        instance: n,
        value: i,
        oldValue: void 0,
        arg: l,
        modifiers: c,
      }));
  }
  return e;
}
function ft(e, t, n, s) {
  const r = e.dirs,
    o = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const l = r[i];
    o && (l.oldValue = o[i].value);
    let c = l.dir[s];
    c && (Ye(), Ke(c, n, 8, [e.el, l, e, t]), Ze());
  }
}
const $l = Symbol('_vte'),
  Ul = (e) => e.__isTeleport,
  Bl = Symbol('_leaveCb');
function Xs(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), Xs(e.component.subTree, t))
    : e.shapeFlag & 128
      ? ((e.ssContent.transition = t.clone(e.ssContent)),
        (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t);
}
function Vn(e, t) {
  return U(e) ? pe({ name: e.name }, t, { setup: e }) : e;
}
function Bo(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + '-', 0, 0];
}
const Fn = new WeakMap();
function Jt(e, t, n, s, r = !1) {
  if (I(e)) {
    e.forEach((m, b) => Jt(m, t && (I(t) ? t[b] : t), n, s, r));
    return;
  }
  if (Gt(s) && !r) {
    s.shapeFlag & 512 &&
      s.type.__asyncResolved &&
      s.component.subTree.component &&
      Jt(e, t, n, s.component.subTree);
    return;
  }
  const o = s.shapeFlag & 4 ? zn(s.component) : s.el,
    i = r ? null : o,
    { i: l, r: c } = e,
    f = t && t.r,
    a = l.refs === Y ? (l.refs = {}) : l.refs,
    h = l.setupState,
    y = z(h),
    E = h === Y ? oo : (m) => J(y, m);
  if (f != null && f !== c) {
    if ((dr(t), oe(f))) ((a[f] = null), E(f) && (h[f] = null));
    else if (se(f)) {
      f.value = null;
      const m = t;
      m.k && (a[m.k] = null);
    }
  }
  if (U(c)) ln(c, l, 12, [i, a]);
  else {
    const m = oe(c),
      b = se(c);
    if (m || b) {
      const S = () => {
        if (e.f) {
          const P = m ? (E(c) ? h[c] : a[c]) : c.value;
          if (r) I(P) && $s(P, o);
          else if (I(P)) P.includes(o) || P.push(o);
          else if (m) ((a[c] = [o]), E(c) && (h[c] = a[c]));
          else {
            const D = [o];
            ((c.value = D), e.k && (a[e.k] = D));
          }
        } else
          m
            ? ((a[c] = i), E(c) && (h[c] = i))
            : b && ((c.value = i), e.k && (a[e.k] = i));
      };
      if (i) {
        const P = () => {
          (S(), Fn.delete(e));
        };
        ((P.id = -1), Fn.set(e, P), Te(P, n));
      } else (dr(e), S());
    }
  }
}
function dr(e) {
  const t = Fn.get(e);
  t && ((t.flags |= 8), Fn.delete(e));
}
$n().requestIdleCallback;
$n().cancelIdleCallback;
const Gt = (e) => !!e.type.__asyncLoader,
  ko = (e) => e.type.__isKeepAlive;
function kl(e, t) {
  Ho(e, 'a', t);
}
function Hl(e, t) {
  Ho(e, 'da', t);
}
function Ho(e, t, n = we) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let r = n;
      for (; r; ) {
        if (r.isDeactivated) return;
        r = r.parent;
      }
      return e();
    });
  if ((qn(t, s, n), n)) {
    let r = n.parent;
    for (; r && r.parent; )
      (ko(r.parent.vnode) && Vl(s, t, n, r), (r = r.parent));
  }
}
function Vl(e, t, n, s) {
  const r = qn(t, e, s, !0);
  Ko(() => {
    $s(s[t], r);
  }, n);
}
function qn(e, t, n = we, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []),
      o =
        t.__weh ||
        (t.__weh = (...i) => {
          Ye();
          const l = cn(n),
            c = Ke(t, n, e, i);
          return (l(), Ze(), c);
        });
    return (s ? r.unshift(o) : r.push(o), o);
  }
}
const Qe =
    (e) =>
    (t, n = we) => {
      (!on || e === 'sp') && qn(e, (...s) => t(...s), n);
    },
  ql = Qe('bm'),
  Vo = Qe('m'),
  Kl = Qe('bu'),
  Wl = Qe('u'),
  qo = Qe('bum'),
  Ko = Qe('um'),
  zl = Qe('sp'),
  Jl = Qe('rtg'),
  Gl = Qe('rtc');
function Xl(e, t = we) {
  qn('ec', e, t);
}
const Yl = Symbol.for('v-ndc');
function hr(e, t, n, s) {
  let r;
  const o = n,
    i = I(e);
  if (i || oe(e)) {
    const l = i && rt(e);
    let c = !1,
      f = !1;
    (l && ((c = !Ne(e)), (f = lt(e)), (e = Bn(e))), (r = new Array(e.length)));
    for (let a = 0, h = e.length; a < h; a++)
      r[a] = t(c ? (f ? Cn(ae(e[a])) : ae(e[a])) : e[a], a, void 0, o);
  } else if (typeof e == 'number') {
    r = new Array(e);
    for (let l = 0; l < e; l++) r[l] = t(l + 1, l, void 0, o);
  } else if (ee(e))
    if (e[Symbol.iterator]) r = Array.from(e, (l, c) => t(l, c, void 0, o));
    else {
      const l = Object.keys(e);
      r = new Array(l.length);
      for (let c = 0, f = l.length; c < f; c++) {
        const a = l[c];
        r[c] = t(e[a], a, c, o);
      }
    }
  else r = [];
  return r;
}
const Ss = (e) => (e ? (pi(e) ? zn(e) : Ss(e.parent)) : null),
  Xt = pe(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Ss(e.parent),
    $root: (e) => Ss(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => zo(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        Gs(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = Mo.bind(e.proxy)),
    $watch: (e) => wc.bind(e),
  }),
  is = (e, t) => e !== Y && !e.__isScriptSetup && J(e, t),
  Zl = {
    get({ _: e }, t) {
      if (t === '__v_skip') return !0;
      const {
        ctx: n,
        setupState: s,
        data: r,
        props: o,
        accessCache: i,
        type: l,
        appContext: c,
      } = e;
      let f;
      if (t[0] !== '$') {
        const E = i[t];
        if (E !== void 0)
          switch (E) {
            case 1:
              return s[t];
            case 2:
              return r[t];
            case 4:
              return n[t];
            case 3:
              return o[t];
          }
        else {
          if (is(s, t)) return ((i[t] = 1), s[t]);
          if (r !== Y && J(r, t)) return ((i[t] = 2), r[t]);
          if ((f = e.propsOptions[0]) && J(f, t)) return ((i[t] = 3), o[t]);
          if (n !== Y && J(n, t)) return ((i[t] = 4), n[t]);
          vs && (i[t] = 0);
        }
      }
      const a = Xt[t];
      let h, y;
      if (a) return (t === '$attrs' && de(e.attrs, 'get', ''), a(e));
      if ((h = l.__cssModules) && (h = h[t])) return h;
      if (n !== Y && J(n, t)) return ((i[t] = 4), n[t]);
      if (((y = c.config.globalProperties), J(y, t))) return y[t];
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: r, ctx: o } = e;
      return is(r, t)
        ? ((r[t] = n), !0)
        : s !== Y && J(s, t)
          ? ((s[t] = n), !0)
          : J(e.props, t) || (t[0] === '$' && t.slice(1) in e)
            ? !1
            : ((o[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: s,
          appContext: r,
          propsOptions: o,
          type: i,
        },
      },
      l,
    ) {
      let c, f;
      return !!(
        n[l] ||
        (e !== Y && l[0] !== '$' && J(e, l)) ||
        is(t, l) ||
        ((c = o[0]) && J(c, l)) ||
        J(s, l) ||
        J(Xt, l) ||
        J(r.config.globalProperties, l) ||
        ((f = i.__cssModules) && f[l])
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : J(n, 'value') && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
function pr(e) {
  return I(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
let vs = !0;
function Ql(e) {
  const t = zo(e),
    n = e.proxy,
    s = e.ctx;
  ((vs = !1), t.beforeCreate && mr(t.beforeCreate, e, 'bc'));
  const {
    data: r,
    computed: o,
    methods: i,
    watch: l,
    provide: c,
    inject: f,
    created: a,
    beforeMount: h,
    mounted: y,
    beforeUpdate: E,
    updated: m,
    activated: b,
    deactivated: S,
    beforeDestroy: P,
    beforeUnmount: D,
    destroyed: M,
    unmounted: A,
    render: j,
    renderTracked: le,
    renderTriggered: G,
    errorCaptured: k,
    serverPrefetch: H,
    expose: te,
    inheritAttrs: me,
    components: ge,
    directives: Se,
    filters: Oe,
  } = t;
  if ((f && ec(f, s, null), i))
    for (const B in i) {
      const V = i[B];
      U(V) && (s[B] = V.bind(n));
    }
  if (r) {
    const B = r.call(n, n);
    ee(B) && (e.data = kn(B));
  }
  if (((vs = !0), o))
    for (const B in o) {
      const V = o[B],
        De = U(V) ? V.bind(n, n) : U(V.get) ? V.get.bind(n, n) : qe,
        St = !U(V) && U(V.set) ? V.set.bind(n) : qe,
        ue = Qt({ get: De, set: St });
      Object.defineProperty(s, B, {
        enumerable: !0,
        configurable: !0,
        get: () => ue.value,
        set: (ce) => (ue.value = ce),
      });
    }
  if (l) for (const B in l) Wo(l[B], s, n, B);
  if (c) {
    const B = U(c) ? c.call(n) : c;
    Reflect.ownKeys(B).forEach((V) => {
      ic(V, B[V]);
    });
  }
  a && mr(a, e, 'c');
  function W(B, V) {
    I(V) ? V.forEach((De) => B(De.bind(n))) : V && B(V.bind(n));
  }
  if (
    (W(ql, h),
    W(Vo, y),
    W(Kl, E),
    W(Wl, m),
    W(kl, b),
    W(Hl, S),
    W(Xl, k),
    W(Gl, le),
    W(Jl, G),
    W(qo, D),
    W(Ko, A),
    W(zl, H),
    I(te))
  )
    if (te.length) {
      const B = e.exposed || (e.exposed = {});
      te.forEach((V) => {
        Object.defineProperty(B, V, {
          get: () => n[V],
          set: (De) => (n[V] = De),
          enumerable: !0,
        });
      });
    } else e.exposed || (e.exposed = {});
  (j && e.render === qe && (e.render = j),
    me != null && (e.inheritAttrs = me),
    ge && (e.components = ge),
    Se && (e.directives = Se),
    H && Bo(e));
}
function ec(e, t, n = qe) {
  I(e) && (e = xs(e));
  for (const s in e) {
    const r = e[s];
    let o;
    (ee(r)
      ? 'default' in r
        ? (o = Yt(r.from || s, r.default, !0))
        : (o = Yt(r.from || s))
      : (o = Yt(r)),
      se(o)
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: (i) => (o.value = i),
          })
        : (t[s] = o));
  }
}
function mr(e, t, n) {
  Ke(I(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Wo(e, t, n, s) {
  let r = s.includes('.') ? ii(n, s) : () => n[s];
  if (oe(e)) {
    const o = t[e];
    U(o) && Ft(r, o);
  } else if (U(e)) Ft(r, e.bind(n));
  else if (ee(e))
    if (I(e)) e.forEach((o) => Wo(o, t, n, s));
    else {
      const o = U(e.handler) ? e.handler.bind(n) : t[e.handler];
      U(o) && Ft(r, o, e);
    }
}
function zo(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: r,
      optionsCache: o,
      config: { optionMergeStrategies: i },
    } = e.appContext,
    l = o.get(t);
  let c;
  return (
    l
      ? (c = l)
      : !r.length && !n && !s
        ? (c = t)
        : ((c = {}),
          r.length && r.forEach((f) => Nn(c, f, i, !0)),
          Nn(c, t, i)),
    ee(t) && o.set(t, c),
    c
  );
}
function Nn(e, t, n, s = !1) {
  const { mixins: r, extends: o } = t;
  (o && Nn(e, o, n, !0), r && r.forEach((i) => Nn(e, i, n, !0)));
  for (const i in t)
    if (!(s && i === 'expose')) {
      const l = tc[i] || (n && n[i]);
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const tc = {
  data: gr,
  props: br,
  emits: br,
  methods: qt,
  computed: qt,
  beforeCreate: be,
  created: be,
  beforeMount: be,
  mounted: be,
  beforeUpdate: be,
  updated: be,
  beforeDestroy: be,
  beforeUnmount: be,
  destroyed: be,
  unmounted: be,
  activated: be,
  deactivated: be,
  errorCaptured: be,
  serverPrefetch: be,
  components: qt,
  directives: qt,
  watch: sc,
  provide: gr,
  inject: nc,
};
function gr(e, t) {
  return t
    ? e
      ? function () {
          return pe(
            U(e) ? e.call(this, this) : e,
            U(t) ? t.call(this, this) : t,
          );
        }
      : t
    : e;
}
function nc(e, t) {
  return qt(xs(e), xs(t));
}
function xs(e) {
  if (I(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function be(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function qt(e, t) {
  return e ? pe(Object.create(null), e, t) : t;
}
function br(e, t) {
  return e
    ? I(e) && I(t)
      ? [...new Set([...e, ...t])]
      : pe(Object.create(null), pr(e), pr(t ?? {}))
    : t;
}
function sc(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = pe(Object.create(null), e);
  for (const s in t) n[s] = be(e[s], t[s]);
  return n;
}
function Jo() {
  return {
    app: null,
    config: {
      isNativeTag: oo,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let rc = 0;
function oc(e, t) {
  return function (s, r = null) {
    (U(s) || (s = pe({}, s)), r != null && !ee(r) && (r = null));
    const o = Jo(),
      i = new WeakSet(),
      l = [];
    let c = !1;
    const f = (o.app = {
      _uid: rc++,
      _component: s,
      _props: r,
      _container: null,
      _context: o,
      _instance: null,
      version: Bc,
      get config() {
        return o.config;
      },
      set config(a) {},
      use(a, ...h) {
        return (
          i.has(a) ||
            (a && U(a.install)
              ? (i.add(a), a.install(f, ...h))
              : U(a) && (i.add(a), a(f, ...h))),
          f
        );
      },
      mixin(a) {
        return (o.mixins.includes(a) || o.mixins.push(a), f);
      },
      component(a, h) {
        return h ? ((o.components[a] = h), f) : o.components[a];
      },
      directive(a, h) {
        return h ? ((o.directives[a] = h), f) : o.directives[a];
      },
      mount(a, h, y) {
        if (!c) {
          const E = f._ceVNode || Ie(s, r);
          return (
            (E.appContext = o),
            y === !0 ? (y = 'svg') : y === !1 && (y = void 0),
            e(E, a, y),
            (c = !0),
            (f._container = a),
            (a.__vue_app__ = f),
            zn(E.component)
          );
        }
      },
      onUnmount(a) {
        l.push(a);
      },
      unmount() {
        c &&
          (Ke(l, f._instance, 16),
          e(null, f._container),
          delete f._container.__vue_app__);
      },
      provide(a, h) {
        return ((o.provides[a] = h), f);
      },
      runWithContext(a) {
        const h = bt;
        bt = f;
        try {
          return a();
        } finally {
          bt = h;
        }
      },
    });
    return f;
  };
}
let bt = null;
function ic(e, t) {
  if (we) {
    let n = we.provides;
    const s = we.parent && we.parent.provides;
    (s === n && (n = we.provides = Object.create(s)), (n[e] = t));
  }
}
function Yt(e, t, n = !1) {
  const s = hi();
  if (s || bt) {
    let r = bt
      ? bt._context.provides
      : s
        ? s.parent == null || s.ce
          ? s.vnode.appContext && s.vnode.appContext.provides
          : s.parent.provides
        : void 0;
    if (r && e in r) return r[e];
    if (arguments.length > 1) return n && U(t) ? t.call(s && s.proxy) : t;
  }
}
function lc() {
  return !!(hi() || bt);
}
const Go = {},
  Xo = () => Object.create(Go),
  Yo = (e) => Object.getPrototypeOf(e) === Go;
function cc(e, t, n, s = !1) {
  const r = {},
    o = Xo();
  ((e.propsDefaults = Object.create(null)), Zo(e, t, r, o));
  for (const i in e.propsOptions[0]) i in r || (r[i] = void 0);
  (n ? (e.props = s ? r : xl(r)) : e.type.props ? (e.props = r) : (e.props = o),
    (e.attrs = o));
}
function ac(e, t, n, s) {
  const {
      props: r,
      attrs: o,
      vnode: { patchFlag: i },
    } = e,
    l = z(r),
    [c] = e.propsOptions;
  let f = !1;
  if ((s || i > 0) && !(i & 16)) {
    if (i & 8) {
      const a = e.vnode.dynamicProps;
      for (let h = 0; h < a.length; h++) {
        let y = a[h];
        if (Kn(e.emitsOptions, y)) continue;
        const E = t[y];
        if (c)
          if (J(o, y)) E !== o[y] && ((o[y] = E), (f = !0));
          else {
            const m = it(y);
            r[m] = Es(c, l, m, E, e, !1);
          }
        else E !== o[y] && ((o[y] = E), (f = !0));
      }
    }
  } else {
    Zo(e, t, r, o) && (f = !0);
    let a;
    for (const h in l)
      (!t || (!J(t, h) && ((a = wt(h)) === h || !J(t, a)))) &&
        (c
          ? n &&
            (n[h] !== void 0 || n[a] !== void 0) &&
            (r[h] = Es(c, l, h, void 0, e, !0))
          : delete r[h]);
    if (o !== l) for (const h in o) (!t || !J(t, h)) && (delete o[h], (f = !0));
  }
  f && Je(e.attrs, 'set', '');
}
function Zo(e, t, n, s) {
  const [r, o] = e.propsOptions;
  let i = !1,
    l;
  if (t)
    for (let c in t) {
      if (Kt(c)) continue;
      const f = t[c];
      let a;
      r && J(r, (a = it(c)))
        ? !o || !o.includes(a)
          ? (n[a] = f)
          : ((l || (l = {}))[a] = f)
        : Kn(e.emitsOptions, c) ||
          ((!(c in s) || f !== s[c]) && ((s[c] = f), (i = !0)));
    }
  if (o) {
    const c = z(n),
      f = l || Y;
    for (let a = 0; a < o.length; a++) {
      const h = o[a];
      n[h] = Es(r, c, h, f[h], e, !J(f, h));
    }
  }
  return i;
}
function Es(e, t, n, s, r, o) {
  const i = e[n];
  if (i != null) {
    const l = J(i, 'default');
    if (l && s === void 0) {
      const c = i.default;
      if (i.type !== Function && !i.skipFactory && U(c)) {
        const { propsDefaults: f } = r;
        if (n in f) s = f[n];
        else {
          const a = cn(r);
          ((s = f[n] = c.call(null, t)), a());
        }
      } else s = c;
      r.ce && r.ce._setProp(n, s);
    }
    i[0] &&
      (o && !l ? (s = !1) : i[1] && (s === '' || s === wt(n)) && (s = !0));
  }
  return s;
}
const uc = new WeakMap();
function Qo(e, t, n = !1) {
  const s = n ? uc : t.propsCache,
    r = s.get(e);
  if (r) return r;
  const o = e.props,
    i = {},
    l = [];
  let c = !1;
  if (!U(e)) {
    const a = (h) => {
      c = !0;
      const [y, E] = Qo(h, t, !0);
      (pe(i, y), E && l.push(...E));
    };
    (!n && t.mixins.length && t.mixins.forEach(a),
      e.extends && a(e.extends),
      e.mixins && e.mixins.forEach(a));
  }
  if (!o && !c) return (ee(e) && s.set(e, Tt), Tt);
  if (I(o))
    for (let a = 0; a < o.length; a++) {
      const h = it(o[a]);
      yr(h) && (i[h] = Y);
    }
  else if (o)
    for (const a in o) {
      const h = it(a);
      if (yr(h)) {
        const y = o[a],
          E = (i[h] = I(y) || U(y) ? { type: y } : pe({}, y)),
          m = E.type;
        let b = !1,
          S = !0;
        if (I(m))
          for (let P = 0; P < m.length; ++P) {
            const D = m[P],
              M = U(D) && D.name;
            if (M === 'Boolean') {
              b = !0;
              break;
            } else M === 'String' && (S = !1);
          }
        else b = U(m) && m.name === 'Boolean';
        ((E[0] = b), (E[1] = S), (b || J(E, 'default')) && l.push(h));
      }
    }
  const f = [i, l];
  return (ee(e) && s.set(e, f), f);
}
function yr(e) {
  return e[0] !== '$' && !Kt(e);
}
const Ys = (e) => e === '_' || e === '_ctx' || e === '$stable',
  Zs = (e) => (I(e) ? e.map(Ve) : [Ve(e)]),
  fc = (e, t, n) => {
    if (t._n) return t;
    const s = jl((...r) => Zs(t(...r)), n);
    return ((s._c = !1), s);
  },
  ei = (e, t, n) => {
    const s = e._ctx;
    for (const r in e) {
      if (Ys(r)) continue;
      const o = e[r];
      if (U(o)) t[r] = fc(r, o, s);
      else if (o != null) {
        const i = Zs(o);
        t[r] = () => i;
      }
    }
  },
  ti = (e, t) => {
    const n = Zs(t);
    e.slots.default = () => n;
  },
  ni = (e, t, n) => {
    for (const s in t) (n || !Ys(s)) && (e[s] = t[s]);
  },
  dc = (e, t, n) => {
    const s = (e.slots = Xo());
    if (e.vnode.shapeFlag & 32) {
      const r = t._;
      r ? (ni(s, t, n), n && fo(s, '_', r, !0)) : ei(t, s);
    } else t && ti(e, t);
  },
  hc = (e, t, n) => {
    const { vnode: s, slots: r } = e;
    let o = !0,
      i = Y;
    if (s.shapeFlag & 32) {
      const l = t._;
      (l
        ? n && l === 1
          ? (o = !1)
          : ni(r, t, n)
        : ((o = !t.$stable), ei(t, r)),
        (i = t));
    } else t && (ti(e, t), (i = { default: 1 }));
    if (o) for (const l in r) !Ys(l) && i[l] == null && delete r[l];
  },
  Te = Tc;
function pc(e) {
  return mc(e);
}
function mc(e, t) {
  const n = $n();
  n.__VUE__ = !0;
  const {
      insert: s,
      remove: r,
      patchProp: o,
      createElement: i,
      createText: l,
      createComment: c,
      setText: f,
      setElementText: a,
      parentNode: h,
      nextSibling: y,
      setScopeId: E = qe,
      insertStaticContent: m,
    } = e,
    b = (
      u,
      d,
      g,
      v = null,
      _ = null,
      w = null,
      C = void 0,
      O = null,
      R = !!d.dynamicChildren,
    ) => {
      if (u === d) return;
      (u && !kt(u, d) && ((v = pn(u)), ce(u, _, w, !0), (u = null)),
        d.patchFlag === -2 && ((R = !1), (d.dynamicChildren = null)));
      const { type: x, ref: N, shapeFlag: T } = d;
      switch (x) {
        case Wn:
          S(u, d, g, v);
          break;
        case ct:
          P(u, d, g, v);
          break;
        case cs:
          u == null && D(d, g, v, C);
          break;
        case _e:
          ge(u, d, g, v, _, w, C, O, R);
          break;
        default:
          T & 1
            ? j(u, d, g, v, _, w, C, O, R)
            : T & 6
              ? Se(u, d, g, v, _, w, C, O, R)
              : (T & 64 || T & 128) && x.process(u, d, g, v, _, w, C, O, R, $t);
      }
      N != null && _
        ? Jt(N, u && u.ref, w, d || u, !d)
        : N == null && u && u.ref != null && Jt(u.ref, null, w, u, !0);
    },
    S = (u, d, g, v) => {
      if (u == null) s((d.el = l(d.children)), g, v);
      else {
        const _ = (d.el = u.el);
        d.children !== u.children && f(_, d.children);
      }
    },
    P = (u, d, g, v) => {
      u == null ? s((d.el = c(d.children || '')), g, v) : (d.el = u.el);
    },
    D = (u, d, g, v) => {
      [u.el, u.anchor] = m(u.children, d, g, v, u.el, u.anchor);
    },
    M = ({ el: u, anchor: d }, g, v) => {
      let _;
      for (; u && u !== d; ) ((_ = y(u)), s(u, g, v), (u = _));
      s(d, g, v);
    },
    A = ({ el: u, anchor: d }) => {
      let g;
      for (; u && u !== d; ) ((g = y(u)), r(u), (u = g));
      r(d);
    },
    j = (u, d, g, v, _, w, C, O, R) => {
      (d.type === 'svg' ? (C = 'svg') : d.type === 'math' && (C = 'mathml'),
        u == null ? le(d, g, v, _, w, C, O, R) : H(u, d, _, w, C, O, R));
    },
    le = (u, d, g, v, _, w, C, O) => {
      let R, x;
      const { props: N, shapeFlag: T, transition: F, dirs: L } = u;
      if (
        ((R = u.el = i(u.type, w, N && N.is, N)),
        T & 8
          ? a(R, u.children)
          : T & 16 && k(u.children, R, null, v, _, ls(u, w), C, O),
        L && ft(u, null, v, 'created'),
        G(R, u, u.scopeId, C, v),
        N)
      ) {
        for (const Z in N) Z !== 'value' && !Kt(Z) && o(R, Z, null, N[Z], w, v);
        ('value' in N && o(R, 'value', null, N.value, w),
          (x = N.onVnodeBeforeMount) && Be(x, v, u));
      }
      L && ft(u, null, v, 'beforeMount');
      const q = gc(_, F);
      (q && F.beforeEnter(R),
        s(R, d, g),
        ((x = N && N.onVnodeMounted) || q || L) &&
          Te(() => {
            (x && Be(x, v, u), q && F.enter(R), L && ft(u, null, v, 'mounted'));
          }, _));
    },
    G = (u, d, g, v, _) => {
      if ((g && E(u, g), v)) for (let w = 0; w < v.length; w++) E(u, v[w]);
      if (_) {
        let w = _.subTree;
        if (
          d === w ||
          (ci(w.type) && (w.ssContent === d || w.ssFallback === d))
        ) {
          const C = _.vnode;
          G(u, C, C.scopeId, C.slotScopeIds, _.parent);
        }
      }
    },
    k = (u, d, g, v, _, w, C, O, R = 0) => {
      for (let x = R; x < u.length; x++) {
        const N = (u[x] = O ? nt(u[x]) : Ve(u[x]));
        b(null, N, d, g, v, _, w, C, O);
      }
    },
    H = (u, d, g, v, _, w, C) => {
      const O = (d.el = u.el);
      let { patchFlag: R, dynamicChildren: x, dirs: N } = d;
      R |= u.patchFlag & 16;
      const T = u.props || Y,
        F = d.props || Y;
      let L;
      if (
        (g && dt(g, !1),
        (L = F.onVnodeBeforeUpdate) && Be(L, g, d, u),
        N && ft(d, u, g, 'beforeUpdate'),
        g && dt(g, !0),
        ((T.innerHTML && F.innerHTML == null) ||
          (T.textContent && F.textContent == null)) &&
          a(O, ''),
        x
          ? te(u.dynamicChildren, x, O, g, v, ls(d, _), w)
          : C || V(u, d, O, null, g, v, ls(d, _), w, !1),
        R > 0)
      ) {
        if (R & 16) me(O, T, F, g, _);
        else if (
          (R & 2 && T.class !== F.class && o(O, 'class', null, F.class, _),
          R & 4 && o(O, 'style', T.style, F.style, _),
          R & 8)
        ) {
          const q = d.dynamicProps;
          for (let Z = 0; Z < q.length; Z++) {
            const X = q[Z],
              ve = T[X],
              xe = F[X];
            (xe !== ve || X === 'value') && o(O, X, ve, xe, _, g);
          }
        }
        R & 1 && u.children !== d.children && a(O, d.children);
      } else !C && x == null && me(O, T, F, g, _);
      ((L = F.onVnodeUpdated) || N) &&
        Te(() => {
          (L && Be(L, g, d, u), N && ft(d, u, g, 'updated'));
        }, v);
    },
    te = (u, d, g, v, _, w, C) => {
      for (let O = 0; O < d.length; O++) {
        const R = u[O],
          x = d[O],
          N =
            R.el && (R.type === _e || !kt(R, x) || R.shapeFlag & 198)
              ? h(R.el)
              : g;
        b(R, x, N, null, v, _, w, C, !0);
      }
    },
    me = (u, d, g, v, _) => {
      if (d !== g) {
        if (d !== Y)
          for (const w in d) !Kt(w) && !(w in g) && o(u, w, d[w], null, _, v);
        for (const w in g) {
          if (Kt(w)) continue;
          const C = g[w],
            O = d[w];
          C !== O && w !== 'value' && o(u, w, O, C, _, v);
        }
        'value' in g && o(u, 'value', d.value, g.value, _);
      }
    },
    ge = (u, d, g, v, _, w, C, O, R) => {
      const x = (d.el = u ? u.el : l('')),
        N = (d.anchor = u ? u.anchor : l(''));
      let { patchFlag: T, dynamicChildren: F, slotScopeIds: L } = d;
      (L && (O = O ? O.concat(L) : L),
        u == null
          ? (s(x, g, v), s(N, g, v), k(d.children || [], g, N, _, w, C, O, R))
          : T > 0 && T & 64 && F && u.dynamicChildren
            ? (te(u.dynamicChildren, F, g, _, w, C, O),
              (d.key != null || (_ && d === _.subTree)) && si(u, d, !0))
            : V(u, d, g, N, _, w, C, O, R));
    },
    Se = (u, d, g, v, _, w, C, O, R) => {
      ((d.slotScopeIds = O),
        u == null
          ? d.shapeFlag & 512
            ? _.ctx.activate(d, g, v, C, R)
            : Oe(d, g, v, _, w, C, R)
          : ut(u, d, R));
    },
    Oe = (u, d, g, v, _, w, C) => {
      const O = (u.component = Ic(u, v, _));
      if ((ko(u) && (O.ctx.renderer = $t), Mc(O, !1, C), O.asyncDep)) {
        if ((_ && _.registerDep(O, W, C), !u.el)) {
          const R = (O.subTree = Ie(ct));
          (P(null, R, d, g), (u.placeholder = R.el));
        }
      } else W(O, u, d, g, _, w, C);
    },
    ut = (u, d, g) => {
      const v = (d.component = u.component);
      if (Oc(u, d, g))
        if (v.asyncDep && !v.asyncResolved) {
          B(v, d, g);
          return;
        } else ((v.next = d), v.update());
      else ((d.el = u.el), (v.vnode = d));
    },
    W = (u, d, g, v, _, w, C) => {
      const O = () => {
        if (u.isMounted) {
          let { next: T, bu: F, u: L, parent: q, vnode: Z } = u;
          {
            const $e = ri(u);
            if ($e) {
              (T && ((T.el = Z.el), B(u, T, C)),
                $e.asyncDep.then(() => {
                  u.isUnmounted || O();
                }));
              return;
            }
          }
          let X = T,
            ve;
          (dt(u, !1),
            T ? ((T.el = Z.el), B(u, T, C)) : (T = Z),
            F && wn(F),
            (ve = T.props && T.props.onVnodeBeforeUpdate) && Be(ve, q, T, Z),
            dt(u, !0));
          const xe = wr(u),
            je = u.subTree;
          ((u.subTree = xe),
            b(je, xe, h(je.el), pn(je), u, _, w),
            (T.el = xe.el),
            X === null && Cc(u, xe.el),
            L && Te(L, _),
            (ve = T.props && T.props.onVnodeUpdated) &&
              Te(() => Be(ve, q, T, Z), _));
        } else {
          let T;
          const { el: F, props: L } = d,
            { bm: q, m: Z, parent: X, root: ve, type: xe } = u,
            je = Gt(d);
          (dt(u, !1),
            q && wn(q),
            !je && (T = L && L.onVnodeBeforeMount) && Be(T, X, d),
            dt(u, !0));
          {
            ve.ce &&
              ve.ce._def.shadowRoot !== !1 &&
              ve.ce._injectChildStyle(xe);
            const $e = (u.subTree = wr(u));
            (b(null, $e, g, v, u, _, w), (d.el = $e.el));
          }
          if ((Z && Te(Z, _), !je && (T = L && L.onVnodeMounted))) {
            const $e = d;
            Te(() => Be(T, X, $e), _);
          }
          ((d.shapeFlag & 256 ||
            (X && Gt(X.vnode) && X.vnode.shapeFlag & 256)) &&
            u.a &&
            Te(u.a, _),
            (u.isMounted = !0),
            (d = g = v = null));
        }
      };
      u.scope.on();
      const R = (u.effect = new _o(O));
      u.scope.off();
      const x = (u.update = R.run.bind(R)),
        N = (u.job = R.runIfDirty.bind(R));
      ((N.i = u), (N.id = u.uid), (R.scheduler = () => Gs(N)), dt(u, !0), x());
    },
    B = (u, d, g) => {
      d.component = u;
      const v = u.vnode.props;
      ((u.vnode = d),
        (u.next = null),
        ac(u, d.props, v, g),
        hc(u, d.children, g),
        Ye(),
        ur(u),
        Ze());
    },
    V = (u, d, g, v, _, w, C, O, R = !1) => {
      const x = u && u.children,
        N = u ? u.shapeFlag : 0,
        T = d.children,
        { patchFlag: F, shapeFlag: L } = d;
      if (F > 0) {
        if (F & 128) {
          St(x, T, g, v, _, w, C, O, R);
          return;
        } else if (F & 256) {
          De(x, T, g, v, _, w, C, O, R);
          return;
        }
      }
      L & 8
        ? (N & 16 && jt(x, _, w), T !== x && a(g, T))
        : N & 16
          ? L & 16
            ? St(x, T, g, v, _, w, C, O, R)
            : jt(x, _, w, !0)
          : (N & 8 && a(g, ''), L & 16 && k(T, g, v, _, w, C, O, R));
    },
    De = (u, d, g, v, _, w, C, O, R) => {
      ((u = u || Tt), (d = d || Tt));
      const x = u.length,
        N = d.length,
        T = Math.min(x, N);
      let F;
      for (F = 0; F < T; F++) {
        const L = (d[F] = R ? nt(d[F]) : Ve(d[F]));
        b(u[F], L, g, null, _, w, C, O, R);
      }
      x > N ? jt(u, _, w, !0, !1, T) : k(d, g, v, _, w, C, O, R, T);
    },
    St = (u, d, g, v, _, w, C, O, R) => {
      let x = 0;
      const N = d.length;
      let T = u.length - 1,
        F = N - 1;
      for (; x <= T && x <= F; ) {
        const L = u[x],
          q = (d[x] = R ? nt(d[x]) : Ve(d[x]));
        if (kt(L, q)) b(L, q, g, null, _, w, C, O, R);
        else break;
        x++;
      }
      for (; x <= T && x <= F; ) {
        const L = u[T],
          q = (d[F] = R ? nt(d[F]) : Ve(d[F]));
        if (kt(L, q)) b(L, q, g, null, _, w, C, O, R);
        else break;
        (T--, F--);
      }
      if (x > T) {
        if (x <= F) {
          const L = F + 1,
            q = L < N ? d[L].el : v;
          for (; x <= F; )
            (b(null, (d[x] = R ? nt(d[x]) : Ve(d[x])), g, q, _, w, C, O, R),
              x++);
        }
      } else if (x > F) for (; x <= T; ) (ce(u[x], _, w, !0), x++);
      else {
        const L = x,
          q = x,
          Z = new Map();
        for (x = q; x <= F; x++) {
          const Ce = (d[x] = R ? nt(d[x]) : Ve(d[x]));
          Ce.key != null && Z.set(Ce.key, x);
        }
        let X,
          ve = 0;
        const xe = F - q + 1;
        let je = !1,
          $e = 0;
        const Ut = new Array(xe);
        for (x = 0; x < xe; x++) Ut[x] = 0;
        for (x = L; x <= T; x++) {
          const Ce = u[x];
          if (ve >= xe) {
            ce(Ce, _, w, !0);
            continue;
          }
          let Ue;
          if (Ce.key != null) Ue = Z.get(Ce.key);
          else
            for (X = q; X <= F; X++)
              if (Ut[X - q] === 0 && kt(Ce, d[X])) {
                Ue = X;
                break;
              }
          Ue === void 0
            ? ce(Ce, _, w, !0)
            : ((Ut[Ue - q] = x + 1),
              Ue >= $e ? ($e = Ue) : (je = !0),
              b(Ce, d[Ue], g, null, _, w, C, O, R),
              ve++);
        }
        const rr = je ? bc(Ut) : Tt;
        for (X = rr.length - 1, x = xe - 1; x >= 0; x--) {
          const Ce = q + x,
            Ue = d[Ce],
            or = d[Ce + 1],
            ir = Ce + 1 < N ? or.el || or.placeholder : v;
          Ut[x] === 0
            ? b(null, Ue, g, ir, _, w, C, O, R)
            : je && (X < 0 || x !== rr[X] ? ue(Ue, g, ir, 2) : X--);
        }
      }
    },
    ue = (u, d, g, v, _ = null) => {
      const { el: w, type: C, transition: O, children: R, shapeFlag: x } = u;
      if (x & 6) {
        ue(u.component.subTree, d, g, v);
        return;
      }
      if (x & 128) {
        u.suspense.move(d, g, v);
        return;
      }
      if (x & 64) {
        C.move(u, d, g, $t);
        return;
      }
      if (C === _e) {
        s(w, d, g);
        for (let T = 0; T < R.length; T++) ue(R[T], d, g, v);
        s(u.anchor, d, g);
        return;
      }
      if (C === cs) {
        M(u, d, g);
        return;
      }
      if (v !== 2 && x & 1 && O)
        if (v === 0) (O.beforeEnter(w), s(w, d, g), Te(() => O.enter(w), _));
        else {
          const { leave: T, delayLeave: F, afterLeave: L } = O,
            q = () => {
              u.ctx.isUnmounted ? r(w) : s(w, d, g);
            },
            Z = () => {
              (w._isLeaving && w[Bl](!0),
                T(w, () => {
                  (q(), L && L());
                }));
            };
          F ? F(w, q, Z) : Z();
        }
      else s(w, d, g);
    },
    ce = (u, d, g, v = !1, _ = !1) => {
      const {
        type: w,
        props: C,
        ref: O,
        children: R,
        dynamicChildren: x,
        shapeFlag: N,
        patchFlag: T,
        dirs: F,
        cacheIndex: L,
      } = u;
      if (
        (T === -2 && (_ = !1),
        O != null && (Ye(), Jt(O, null, g, u, !0), Ze()),
        L != null && (d.renderCache[L] = void 0),
        N & 256)
      ) {
        d.ctx.deactivate(u);
        return;
      }
      const q = N & 1 && F,
        Z = !Gt(u);
      let X;
      if ((Z && (X = C && C.onVnodeBeforeUnmount) && Be(X, d, u), N & 6))
        hn(u.component, g, v);
      else {
        if (N & 128) {
          u.suspense.unmount(g, v);
          return;
        }
        (q && ft(u, null, d, 'beforeUnmount'),
          N & 64
            ? u.type.remove(u, d, g, $t, v)
            : x && !x.hasOnce && (w !== _e || (T > 0 && T & 64))
              ? jt(x, d, g, !1, !0)
              : ((w === _e && T & 384) || (!_ && N & 16)) && jt(R, d, g),
          v && vt(u));
      }
      ((Z && (X = C && C.onVnodeUnmounted)) || q) &&
        Te(() => {
          (X && Be(X, d, u), q && ft(u, null, d, 'unmounted'));
        }, g);
    },
    vt = (u) => {
      const { type: d, el: g, anchor: v, transition: _ } = u;
      if (d === _e) {
        xt(g, v);
        return;
      }
      if (d === cs) {
        A(u);
        return;
      }
      const w = () => {
        (r(g), _ && !_.persisted && _.afterLeave && _.afterLeave());
      };
      if (u.shapeFlag & 1 && _ && !_.persisted) {
        const { leave: C, delayLeave: O } = _,
          R = () => C(g, w);
        O ? O(u.el, w, R) : R();
      } else w();
    },
    xt = (u, d) => {
      let g;
      for (; u !== d; ) ((g = y(u)), r(u), (u = g));
      r(d);
    },
    hn = (u, d, g) => {
      const { bum: v, scope: _, job: w, subTree: C, um: O, m: R, a: x } = u;
      (_r(R),
        _r(x),
        v && wn(v),
        _.stop(),
        w && ((w.flags |= 8), ce(C, u, d, g)),
        O && Te(O, d),
        Te(() => {
          u.isUnmounted = !0;
        }, d));
    },
    jt = (u, d, g, v = !1, _ = !1, w = 0) => {
      for (let C = w; C < u.length; C++) ce(u[C], d, g, v, _);
    },
    pn = (u) => {
      if (u.shapeFlag & 6) return pn(u.component.subTree);
      if (u.shapeFlag & 128) return u.suspense.next();
      const d = y(u.anchor || u.el),
        g = d && d[$l];
      return g ? y(g) : d;
    };
  let es = !1;
  const sr = (u, d, g) => {
      (u == null
        ? d._vnode && ce(d._vnode, null, null, !0)
        : b(d._vnode || null, u, d, null, null, null, g),
        (d._vnode = u),
        es || ((es = !0), ur(), jo(), (es = !1)));
    },
    $t = {
      p: b,
      um: ce,
      m: ue,
      r: vt,
      mt: Oe,
      mc: k,
      pc: V,
      pbc: te,
      n: pn,
      o: e,
    };
  return { render: sr, hydrate: void 0, createApp: oc(sr) };
}
function ls({ type: e, props: t }, n) {
  return (n === 'svg' && e === 'foreignObject') ||
    (n === 'mathml' &&
      e === 'annotation-xml' &&
      t &&
      t.encoding &&
      t.encoding.includes('html'))
    ? void 0
    : n;
}
function dt({ effect: e, job: t }, n) {
  n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5));
}
function gc(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function si(e, t, n = !1) {
  const s = e.children,
    r = t.children;
  if (I(s) && I(r))
    for (let o = 0; o < s.length; o++) {
      const i = s[o];
      let l = r[o];
      (l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = r[o] = nt(r[o])), (l.el = i.el)),
        !n && l.patchFlag !== -2 && si(i, l)),
        l.type === Wn && l.patchFlag !== -1 && (l.el = i.el),
        l.type === ct && !l.el && (l.el = i.el));
    }
}
function bc(e) {
  const t = e.slice(),
    n = [0];
  let s, r, o, i, l;
  const c = e.length;
  for (s = 0; s < c; s++) {
    const f = e[s];
    if (f !== 0) {
      if (((r = n[n.length - 1]), e[r] < f)) {
        ((t[s] = r), n.push(s));
        continue;
      }
      for (o = 0, i = n.length - 1; o < i; )
        ((l = (o + i) >> 1), e[n[l]] < f ? (o = l + 1) : (i = l));
      f < e[n[o]] && (o > 0 && (t[s] = n[o - 1]), (n[o] = s));
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; ) ((n[o] = i), (i = t[i]));
  return n;
}
function ri(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : ri(t);
}
function _r(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
const yc = Symbol.for('v-scx'),
  _c = () => Yt(yc);
function Ft(e, t, n) {
  return oi(e, t, n);
}
function oi(e, t, n = Y) {
  const { immediate: s, deep: r, flush: o, once: i } = n,
    l = pe({}, n),
    c = (t && s) || (!t && o !== 'post');
  let f;
  if (on) {
    if (o === 'sync') {
      const E = _c();
      f = E.__watcherHandles || (E.__watcherHandles = []);
    } else if (!c) {
      const E = () => {};
      return ((E.stop = qe), (E.resume = qe), (E.pause = qe), E);
    }
  }
  const a = we;
  l.call = (E, m, b) => Ke(E, a, m, b);
  let h = !1;
  (o === 'post'
    ? (l.scheduler = (E) => {
        Te(E, a && a.suspense);
      })
    : o !== 'sync' &&
      ((h = !0),
      (l.scheduler = (E, m) => {
        m ? E() : Gs(E);
      })),
    (l.augmentJob = (E) => {
      (t && (E.flags |= 4),
        h && ((E.flags |= 2), a && ((E.id = a.uid), (E.i = a))));
    }));
  const y = Ll(e, t, l);
  return (on && (f ? f.push(y) : c && y()), y);
}
function wc(e, t, n) {
  const s = this.proxy,
    r = oe(e) ? (e.includes('.') ? ii(s, e) : () => s[e]) : e.bind(s, s);
  let o;
  U(t) ? (o = t) : ((o = t.handler), (n = t));
  const i = cn(this),
    l = oi(r, o.bind(s), n);
  return (i(), l);
}
function ii(e, t) {
  const n = t.split('.');
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++) s = s[n[r]];
    return s;
  };
}
const Sc = (e, t) =>
  t === 'modelValue' || t === 'model-value'
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${it(t)}Modifiers`] || e[`${wt(t)}Modifiers`];
function vc(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || Y;
  let r = n;
  const o = t.startsWith('update:'),
    i = o && Sc(s, t.slice(7));
  i &&
    (i.trim && (r = n.map((a) => (oe(a) ? a.trim() : a))),
    i.number && (r = n.map(gs)));
  let l,
    c = s[(l = ts(t))] || s[(l = ts(it(t)))];
  (!c && o && (c = s[(l = ts(wt(t)))]), c && Ke(c, e, 6, r));
  const f = s[l + 'Once'];
  if (f) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[l]) return;
    ((e.emitted[l] = !0), Ke(f, e, 6, r));
  }
}
const xc = new WeakMap();
function li(e, t, n = !1) {
  const s = n ? xc : t.emitsCache,
    r = s.get(e);
  if (r !== void 0) return r;
  const o = e.emits;
  let i = {},
    l = !1;
  if (!U(e)) {
    const c = (f) => {
      const a = li(f, t, !0);
      a && ((l = !0), pe(i, a));
    };
    (!n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c));
  }
  return !o && !l
    ? (ee(e) && s.set(e, null), null)
    : (I(o) ? o.forEach((c) => (i[c] = null)) : pe(i, o),
      ee(e) && s.set(e, i),
      i);
}
function Kn(e, t) {
  return !e || !Mn(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      J(e, t[0].toLowerCase() + t.slice(1)) || J(e, wt(t)) || J(e, t));
}
function wr(e) {
  const {
      type: t,
      vnode: n,
      proxy: s,
      withProxy: r,
      propsOptions: [o],
      slots: i,
      attrs: l,
      emit: c,
      render: f,
      renderCache: a,
      props: h,
      data: y,
      setupState: E,
      ctx: m,
      inheritAttrs: b,
    } = e,
    S = Pn(e);
  let P, D;
  try {
    if (n.shapeFlag & 4) {
      const A = r || s,
        j = A;
      ((P = Ve(f.call(j, A, a, h, E, y, m))), (D = l));
    } else {
      const A = t;
      ((P = Ve(
        A.length > 1 ? A(h, { attrs: l, slots: i, emit: c }) : A(h, null),
      )),
        (D = t.props ? l : Ec(l)));
    }
  } catch (A) {
    ((Zt.length = 0), Hn(A, e, 1), (P = Ie(ct)));
  }
  let M = P;
  if (D && b !== !1) {
    const A = Object.keys(D),
      { shapeFlag: j } = M;
    A.length &&
      j & 7 &&
      (o && A.some(js) && (D = Rc(D, o)), (M = Nt(M, D, !1, !0)));
  }
  return (
    n.dirs &&
      ((M = Nt(M, null, !1, !0)),
      (M.dirs = M.dirs ? M.dirs.concat(n.dirs) : n.dirs)),
    n.transition && Xs(M, n.transition),
    (P = M),
    Pn(S),
    P
  );
}
const Ec = (e) => {
    let t;
    for (const n in e)
      (n === 'class' || n === 'style' || Mn(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  Rc = (e, t) => {
    const n = {};
    for (const s in e) (!js(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
    return n;
  };
function Oc(e, t, n) {
  const { props: s, children: r, component: o } = e,
    { props: i, children: l, patchFlag: c } = t,
    f = o.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && c >= 0) {
    if (c & 1024) return !0;
    if (c & 16) return s ? Sr(s, i, f) : !!i;
    if (c & 8) {
      const a = t.dynamicProps;
      for (let h = 0; h < a.length; h++) {
        const y = a[h];
        if (i[y] !== s[y] && !Kn(f, y)) return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable)
      ? !0
      : s === i
        ? !1
        : s
          ? i
            ? Sr(s, i, f)
            : !0
          : !!i;
  return !1;
}
function Sr(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length) return !0;
  for (let r = 0; r < s.length; r++) {
    const o = s[r];
    if (t[o] !== e[o] && !Kn(n, o)) return !0;
  }
  return !1;
}
function Cc({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if ((s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e))
      (((e = t.vnode).el = n), (t = t.parent));
    else break;
  }
}
const ci = (e) => e.__isSuspense;
function Tc(e, t) {
  t && t.pendingBranch
    ? I(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Dl(e);
}
const _e = Symbol.for('v-fgt'),
  Wn = Symbol.for('v-txt'),
  ct = Symbol.for('v-cmt'),
  cs = Symbol.for('v-stc'),
  Zt = [];
let Ae = null;
function ne(e = !1) {
  Zt.push((Ae = e ? null : []));
}
function Ac() {
  (Zt.pop(), (Ae = Zt[Zt.length - 1] || null));
}
let rn = 1;
function vr(e, t = !1) {
  ((rn += e), e < 0 && Ae && t && (Ae.hasOnce = !0));
}
function ai(e) {
  return (
    (e.dynamicChildren = rn > 0 ? Ae || Tt : null),
    Ac(),
    rn > 0 && Ae && Ae.push(e),
    e
  );
}
function ie(e, t, n, s, r, o) {
  return ai(K(e, t, n, s, r, o, !0));
}
function Rs(e, t, n, s, r) {
  return ai(Ie(e, t, n, s, r, !0));
}
function ui(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function kt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const fi = ({ key: e }) => e ?? null,
  Sn = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == 'number' && (e = '' + e),
    e != null
      ? oe(e) || se(e) || U(e)
        ? { i: Fe, r: e, k: t, f: !!n }
        : e
      : null
  );
function K(
  e,
  t = null,
  n = null,
  s = 0,
  r = null,
  o = e === _e ? 0 : 1,
  i = !1,
  l = !1,
) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && fi(t),
    ref: t && Sn(t),
    scopeId: Uo,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: Fe,
  };
  return (
    l
      ? (Qs(c, n), o & 128 && e.normalize(c))
      : n && (c.shapeFlag |= oe(n) ? 8 : 16),
    rn > 0 &&
      !i &&
      Ae &&
      (c.patchFlag > 0 || o & 6) &&
      c.patchFlag !== 32 &&
      Ae.push(c),
    c
  );
}
const Ie = Pc;
function Pc(e, t = null, n = null, s = 0, r = null, o = !1) {
  if (((!e || e === Yl) && (e = ct), ui(e))) {
    const l = Nt(e, t, !0);
    return (
      n && Qs(l, n),
      rn > 0 &&
        !o &&
        Ae &&
        (l.shapeFlag & 6 ? (Ae[Ae.indexOf(e)] = l) : Ae.push(l)),
      (l.patchFlag = -2),
      l
    );
  }
  if ((Uc(e) && (e = e.__vccOpts), t)) {
    t = Fc(t);
    let { class: l, style: c } = t;
    (l && !oe(l) && (t.class = Un(l)),
      ee(c) && (zs(c) && !I(c) && (c = pe({}, c)), (t.style = Bs(c))));
  }
  const i = oe(e) ? 1 : ci(e) ? 128 : Ul(e) ? 64 : ee(e) ? 4 : U(e) ? 2 : 0;
  return K(e, t, n, s, r, i, o, !0);
}
function Fc(e) {
  return e ? (zs(e) || Yo(e) ? pe({}, e) : e) : null;
}
function Nt(e, t, n = !1, s = !1) {
  const { props: r, ref: o, patchFlag: i, children: l, transition: c } = e,
    f = t ? di(r || {}, t) : r,
    a = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: f,
      key: f && fi(f),
      ref:
        t && t.ref
          ? n && o
            ? I(o)
              ? o.concat(Sn(t))
              : [o, Sn(t)]
            : Sn(t)
          : o,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: l,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== _e ? (i === -1 ? 16 : i | 16) : i,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: c,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && Nt(e.ssContent),
      ssFallback: e.ssFallback && Nt(e.ssFallback),
      placeholder: e.placeholder,
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    };
  return (c && s && Xs(a, c.clone(a)), a);
}
function Os(e = ' ', t = 0) {
  return Ie(Wn, null, e, t);
}
function Lt(e = '', t = !1) {
  return t ? (ne(), Rs(ct, null, e)) : Ie(ct, null, e);
}
function Ve(e) {
  return e == null || typeof e == 'boolean'
    ? Ie(ct)
    : I(e)
      ? Ie(_e, null, e.slice())
      : ui(e)
        ? nt(e)
        : Ie(Wn, null, String(e));
}
function nt(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Nt(e);
}
function Qs(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null) t = null;
  else if (I(t)) n = 16;
  else if (typeof t == 'object')
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Qs(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !Yo(t)
        ? (t._ctx = Fe)
        : r === 3 &&
          Fe &&
          (Fe.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    U(t)
      ? ((t = { default: t, _ctx: Fe }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [Os(t)])) : (n = 8));
  ((e.children = t), (e.shapeFlag |= n));
}
function di(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === 'class')
        t.class !== s.class && (t.class = Un([t.class, s.class]));
      else if (r === 'style') t.style = Bs([t.style, s.style]);
      else if (Mn(r)) {
        const o = t[r],
          i = s[r];
        i &&
          o !== i &&
          !(I(o) && o.includes(i)) &&
          (t[r] = o ? [].concat(o, i) : i);
      } else r !== '' && (t[r] = s[r]);
  }
  return t;
}
function Be(e, t, n, s = null) {
  Ke(e, t, 7, [n, s]);
}
const Nc = Jo();
let Lc = 0;
function Ic(e, t, n) {
  const s = e.type,
    r = (t ? t.appContext : e.appContext) || Nc,
    o = {
      uid: Lc++,
      vnode: e,
      type: s,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new go(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(r.provides),
      ids: t ? t.ids : ['', 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Qo(s, r),
      emitsOptions: li(s, r),
      emit: null,
      emitted: null,
      propsDefaults: Y,
      inheritAttrs: s.inheritAttrs,
      ctx: Y,
      data: Y,
      props: Y,
      attrs: Y,
      slots: Y,
      refs: Y,
      setupState: Y,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (o.ctx = { _: o }),
    (o.root = t ? t.root : o),
    (o.emit = vc.bind(null, o)),
    e.ce && e.ce(o),
    o
  );
}
let we = null;
const hi = () => we || Fe;
let Ln, Cs;
{
  const e = $n(),
    t = (n, s) => {
      let r;
      return (
        (r = e[n]) || (r = e[n] = []),
        r.push(s),
        (o) => {
          r.length > 1 ? r.forEach((i) => i(o)) : r[0](o);
        }
      );
    };
  ((Ln = t('__VUE_INSTANCE_SETTERS__', (n) => (we = n))),
    (Cs = t('__VUE_SSR_SETTERS__', (n) => (on = n))));
}
const cn = (e) => {
    const t = we;
    return (
      Ln(e),
      e.scope.on(),
      () => {
        (e.scope.off(), Ln(t));
      }
    );
  },
  xr = () => {
    (we && we.scope.off(), Ln(null));
  };
function pi(e) {
  return e.vnode.shapeFlag & 4;
}
let on = !1;
function Mc(e, t = !1, n = !1) {
  t && Cs(t);
  const { props: s, children: r } = e.vnode,
    o = pi(e);
  (cc(e, s, o, t), dc(e, r, n || t));
  const i = o ? Dc(e, t) : void 0;
  return (t && Cs(!1), i);
}
function Dc(e, t) {
  const n = e.type;
  ((e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, Zl)));
  const { setup: s } = n;
  if (s) {
    Ye();
    const r = (e.setupContext = s.length > 1 ? $c(e) : null),
      o = cn(e),
      i = ln(s, e, 0, [e.props, r]),
      l = lo(i);
    if ((Ze(), o(), (l || e.sp) && !Gt(e) && Bo(e), l)) {
      if ((i.then(xr, xr), t))
        return i
          .then((c) => {
            Er(e, c);
          })
          .catch((c) => {
            Hn(c, e, 0);
          });
      e.asyncDep = i;
    } else Er(e, i);
  } else mi(e);
}
function Er(e, t, n) {
  (U(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : ee(t) && (e.setupState = Lo(t)),
    mi(e));
}
function mi(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || qe);
  {
    const r = cn(e);
    Ye();
    try {
      Ql(e);
    } finally {
      (Ze(), r());
    }
  }
}
const jc = {
  get(e, t) {
    return (de(e, 'get', ''), e[t]);
  },
};
function $c(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, jc),
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function zn(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(Lo(Js(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n];
            if (n in Xt) return Xt[n](e);
          },
          has(t, n) {
            return n in t || n in Xt;
          },
        }))
    : e.proxy;
}
function Uc(e) {
  return U(e) && '__vccOpts' in e;
}
const Qt = (e, t) => Fl(e, t, on),
  Bc = '3.5.22';
/**
 * @vue/runtime-dom v3.5.22
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Ts;
const Rr = typeof window < 'u' && window.trustedTypes;
if (Rr)
  try {
    Ts = Rr.createPolicy('vue', { createHTML: (e) => e });
  } catch {}
const gi = Ts ? (e) => Ts.createHTML(e) : (e) => e,
  kc = 'http://www.w3.org/2000/svg',
  Hc = 'http://www.w3.org/1998/Math/MathML',
  ze = typeof document < 'u' ? document : null,
  Or = ze && ze.createElement('template'),
  Vc = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, s) => {
      const r =
        t === 'svg'
          ? ze.createElementNS(kc, e)
          : t === 'mathml'
            ? ze.createElementNS(Hc, e)
            : n
              ? ze.createElement(e, { is: n })
              : ze.createElement(e);
      return (
        e === 'select' &&
          s &&
          s.multiple != null &&
          r.setAttribute('multiple', s.multiple),
        r
      );
    },
    createText: (e) => ze.createTextNode(e),
    createComment: (e) => ze.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => ze.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '');
    },
    insertStaticContent(e, t, n, s, r, o) {
      const i = n ? n.previousSibling : t.lastChild;
      if (r && (r === o || r.nextSibling))
        for (
          ;
          t.insertBefore(r.cloneNode(!0), n),
            !(r === o || !(r = r.nextSibling));
        );
      else {
        Or.innerHTML = gi(
          s === 'svg'
            ? `<svg>${e}</svg>`
            : s === 'mathml'
              ? `<math>${e}</math>`
              : e,
        );
        const l = Or.content;
        if (s === 'svg' || s === 'mathml') {
          const c = l.firstChild;
          for (; c.firstChild; ) l.appendChild(c.firstChild);
          l.removeChild(c);
        }
        t.insertBefore(l, n);
      }
      return [
        i ? i.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  },
  qc = Symbol('_vtc');
function Kc(e, t, n) {
  const s = e[qc];
  (s && (t = (t ? [t, ...s] : [...s]).join(' ')),
    t == null
      ? e.removeAttribute('class')
      : n
        ? e.setAttribute('class', t)
        : (e.className = t));
}
const Cr = Symbol('_vod'),
  Wc = Symbol('_vsh'),
  zc = Symbol(''),
  Jc = /(?:^|;)\s*display\s*:/;
function Gc(e, t, n) {
  const s = e.style,
    r = oe(n);
  let o = !1;
  if (n && !r) {
    if (t)
      if (oe(t))
        for (const i of t.split(';')) {
          const l = i.slice(0, i.indexOf(':')).trim();
          n[l] == null && vn(s, l, '');
        }
      else for (const i in t) n[i] == null && vn(s, i, '');
    for (const i in n) (i === 'display' && (o = !0), vn(s, i, n[i]));
  } else if (r) {
    if (t !== n) {
      const i = s[zc];
      (i && (n += ';' + i), (s.cssText = n), (o = Jc.test(n)));
    }
  } else t && e.removeAttribute('style');
  Cr in e && ((e[Cr] = o ? s.display : ''), e[Wc] && (s.display = 'none'));
}
const Tr = /\s*!important$/;
function vn(e, t, n) {
  if (I(n)) n.forEach((s) => vn(e, t, s));
  else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n);
  else {
    const s = Xc(e, t);
    Tr.test(n)
      ? e.setProperty(wt(s), n.replace(Tr, ''), 'important')
      : (e[s] = n);
  }
}
const Ar = ['Webkit', 'Moz', 'ms'],
  as = {};
function Xc(e, t) {
  const n = as[t];
  if (n) return n;
  let s = it(t);
  if (s !== 'filter' && s in e) return (as[t] = s);
  s = uo(s);
  for (let r = 0; r < Ar.length; r++) {
    const o = Ar[r] + s;
    if (o in e) return (as[t] = o);
  }
  return t;
}
const Pr = 'http://www.w3.org/1999/xlink';
function Fr(e, t, n, s, r, o = nl(t)) {
  s && t.startsWith('xlink:')
    ? n == null
      ? e.removeAttributeNS(Pr, t.slice(6, t.length))
      : e.setAttributeNS(Pr, t, n)
    : n == null || (o && !ho(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, o ? '' : at(n) ? String(n) : n);
}
function Nr(e, t, n, s, r) {
  if (t === 'innerHTML' || t === 'textContent') {
    n != null && (e[t] = t === 'innerHTML' ? gi(n) : n);
    return;
  }
  const o = e.tagName;
  if (t === 'value' && o !== 'PROGRESS' && !o.includes('-')) {
    const l = o === 'OPTION' ? e.getAttribute('value') || '' : e.value,
      c = n == null ? (e.type === 'checkbox' ? 'on' : '') : String(n);
    ((l !== c || !('_value' in e)) && (e.value = c),
      n == null && e.removeAttribute(t),
      (e._value = n));
    return;
  }
  let i = !1;
  if (n === '' || n == null) {
    const l = typeof e[t];
    l === 'boolean'
      ? (n = ho(n))
      : n == null && l === 'string'
        ? ((n = ''), (i = !0))
        : l === 'number' && ((n = 0), (i = !0));
  }
  try {
    e[t] = n;
  } catch {}
  i && e.removeAttribute(r || t);
}
function Ct(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Yc(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Lr = Symbol('_vei');
function Zc(e, t, n, s, r = null) {
  const o = e[Lr] || (e[Lr] = {}),
    i = o[t];
  if (s && i) i.value = s;
  else {
    const [l, c] = Qc(t);
    if (s) {
      const f = (o[t] = na(s, r));
      Ct(e, l, f, c);
    } else i && (Yc(e, l, i, c), (o[t] = void 0));
  }
}
const Ir = /(?:Once|Passive|Capture)$/;
function Qc(e) {
  let t;
  if (Ir.test(e)) {
    t = {};
    let s;
    for (; (s = e.match(Ir)); )
      ((e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0));
  }
  return [e[2] === ':' ? e.slice(3) : wt(e.slice(2)), t];
}
let us = 0;
const ea = Promise.resolve(),
  ta = () => us || (ea.then(() => (us = 0)), (us = Date.now()));
function na(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now();
    else if (s._vts <= n.attached) return;
    Ke(sa(s, n.value), t, 5, [s]);
  };
  return ((n.value = e), (n.attached = ta()), n);
}
function sa(e, t) {
  if (I(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        (n.call(e), (e._stopped = !0));
      }),
      t.map((s) => (r) => !r._stopped && s && s(r))
    );
  } else return t;
}
const Mr = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  ra = (e, t, n, s, r, o) => {
    const i = r === 'svg';
    t === 'class'
      ? Kc(e, s, i)
      : t === 'style'
        ? Gc(e, n, s)
        : Mn(t)
          ? js(t) || Zc(e, t, n, s, o)
          : (
                t[0] === '.'
                  ? ((t = t.slice(1)), !0)
                  : t[0] === '^'
                    ? ((t = t.slice(1)), !1)
                    : oa(e, t, s, i)
              )
            ? (Nr(e, t, s),
              !e.tagName.includes('-') &&
                (t === 'value' || t === 'checked' || t === 'selected') &&
                Fr(e, t, s, i, o, t !== 'value'))
            : e._isVueCE && (/[A-Z]/.test(t) || !oe(s))
              ? Nr(e, it(t), s, o, t)
              : (t === 'true-value'
                  ? (e._trueValue = s)
                  : t === 'false-value' && (e._falseValue = s),
                Fr(e, t, s, i));
  };
function oa(e, t, n, s) {
  if (s)
    return !!(
      t === 'innerHTML' ||
      t === 'textContent' ||
      (t in e && Mr(t) && U(n))
    );
  if (
    t === 'spellcheck' ||
    t === 'draggable' ||
    t === 'translate' ||
    t === 'autocorrect' ||
    t === 'form' ||
    (t === 'list' && e.tagName === 'INPUT') ||
    (t === 'type' && e.tagName === 'TEXTAREA')
  )
    return !1;
  if (t === 'width' || t === 'height') {
    const r = e.tagName;
    if (r === 'IMG' || r === 'VIDEO' || r === 'CANVAS' || r === 'SOURCE')
      return !1;
  }
  return Mr(t) && oe(n) ? !1 : t in e;
}
const Dr = (e) => {
  const t = e.props['onUpdate:modelValue'] || !1;
  return I(t) ? (n) => wn(t, n) : t;
};
function ia(e) {
  e.target.composing = !0;
}
function jr(e) {
  const t = e.target;
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event('input')));
}
const fs = Symbol('_assign'),
  $r = {
    created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
      e[fs] = Dr(r);
      const o = s || (r.props && r.props.type === 'number');
      (Ct(e, t ? 'change' : 'input', (i) => {
        if (i.target.composing) return;
        let l = e.value;
        (n && (l = l.trim()), o && (l = gs(l)), e[fs](l));
      }),
        n &&
          Ct(e, 'change', () => {
            e.value = e.value.trim();
          }),
        t ||
          (Ct(e, 'compositionstart', ia),
          Ct(e, 'compositionend', jr),
          Ct(e, 'change', jr)));
    },
    mounted(e, { value: t }) {
      e.value = t ?? '';
    },
    beforeUpdate(
      e,
      { value: t, oldValue: n, modifiers: { lazy: s, trim: r, number: o } },
      i,
    ) {
      if (((e[fs] = Dr(i)), e.composing)) return;
      const l =
          (o || e.type === 'number') && !/^0\d/.test(e.value)
            ? gs(e.value)
            : e.value,
        c = t ?? '';
      l !== c &&
        ((document.activeElement === e &&
          e.type !== 'range' &&
          ((s && t === n) || (r && e.value.trim() === c))) ||
          (e.value = c));
    },
  },
  la = ['ctrl', 'shift', 'alt', 'meta'],
  ca = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => 'button' in e && e.button !== 0,
    middle: (e) => 'button' in e && e.button !== 1,
    right: (e) => 'button' in e && e.button !== 2,
    exact: (e, t) => la.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  pt = (e, t) => {
    const n = e._withMods || (e._withMods = {}),
      s = t.join('.');
    return (
      n[s] ||
      (n[s] = (r, ...o) => {
        for (let i = 0; i < t.length; i++) {
          const l = ca[t[i]];
          if (l && l(r, t)) return;
        }
        return e(r, ...o);
      })
    );
  },
  aa = pe({ patchProp: ra }, Vc);
let Ur;
function ua() {
  return Ur || (Ur = pc(aa));
}
const fa = (...e) => {
  const t = ua().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (s) => {
      const r = ha(s);
      if (!r) return;
      const o = t._component;
      (!U(o) && !o.render && !o.template && (o.template = r.innerHTML),
        r.nodeType === 1 && (r.textContent = ''));
      const i = n(r, !1, da(r));
      return (
        r instanceof Element &&
          (r.removeAttribute('v-cloak'), r.setAttribute('data-v-app', '')),
        i
      );
    }),
    t
  );
};
function da(e) {
  if (e instanceof SVGElement) return 'svg';
  if (typeof MathMLElement == 'function' && e instanceof MathMLElement)
    return 'mathml';
}
function ha(e) {
  return oe(e) ? document.querySelector(e) : e;
}
/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */ let bi;
const Jn = (e) => (bi = e),
  yi = Symbol();
function As(e) {
  return (
    e &&
    typeof e == 'object' &&
    Object.prototype.toString.call(e) === '[object Object]' &&
    typeof e.toJSON != 'function'
  );
}
var en;
(function (e) {
  ((e.direct = 'direct'),
    (e.patchObject = 'patch object'),
    (e.patchFunction = 'patch function'));
})(en || (en = {}));
function pa() {
  const e = bo(!0),
    t = e.run(() => Pe({}));
  let n = [],
    s = [];
  const r = Js({
    install(o) {
      (Jn(r),
        (r._a = o),
        o.provide(yi, r),
        (o.config.globalProperties.$pinia = r),
        s.forEach((i) => n.push(i)),
        (s = []));
    },
    use(o) {
      return (this._a ? n.push(o) : s.push(o), this);
    },
    _p: n,
    _a: null,
    _e: e,
    _s: new Map(),
    state: t,
  });
  return r;
}
const _i = () => {};
function Br(e, t, n, s = _i) {
  e.push(t);
  const r = () => {
    const o = e.indexOf(t);
    o > -1 && (e.splice(o, 1), s());
  };
  return (!n && yo() && sl(r), r);
}
function Rt(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const ma = (e) => e(),
  kr = Symbol(),
  ds = Symbol();
function Ps(e, t) {
  e instanceof Map && t instanceof Map
    ? t.forEach((n, s) => e.set(s, n))
    : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n)) continue;
    const s = t[n],
      r = e[n];
    As(r) && As(s) && e.hasOwnProperty(n) && !se(s) && !rt(s)
      ? (e[n] = Ps(r, s))
      : (e[n] = s);
  }
  return e;
}
const ga = Symbol();
function ba(e) {
  return !As(e) || !Object.prototype.hasOwnProperty.call(e, ga);
}
const { assign: et } = Object;
function ya(e) {
  return !!(se(e) && e.effect);
}
function _a(e, t, n, s) {
  const { state: r, actions: o, getters: i } = t,
    l = n.state.value[e];
  let c;
  function f() {
    l || (n.state.value[e] = r ? r() : {});
    const a = Cl(n.state.value[e]);
    return et(
      a,
      o,
      Object.keys(i || {}).reduce(
        (h, y) => (
          (h[y] = Js(
            Qt(() => {
              Jn(n);
              const E = n._s.get(e);
              return i[y].call(E, E);
            }),
          )),
          h
        ),
        {},
      ),
    );
  }
  return ((c = wi(e, f, t, n, s, !0)), c);
}
function wi(e, t, n = {}, s, r, o) {
  let i;
  const l = et({ actions: {} }, n),
    c = { deep: !0 };
  let f,
    a,
    h = [],
    y = [],
    E;
  const m = s.state.value[e];
  (!o && !m && (s.state.value[e] = {}), Pe({}));
  let b;
  function S(k) {
    let H;
    ((f = a = !1),
      typeof k == 'function'
        ? (k(s.state.value[e]),
          (H = { type: en.patchFunction, storeId: e, events: E }))
        : (Ps(s.state.value[e], k),
          (H = { type: en.patchObject, payload: k, storeId: e, events: E })));
    const te = (b = Symbol());
    (Mo().then(() => {
      b === te && (f = !0);
    }),
      (a = !0),
      Rt(h, H, s.state.value[e]));
  }
  const P = o
    ? function () {
        const { state: H } = n,
          te = H ? H() : {};
        this.$patch((me) => {
          et(me, te);
        });
      }
    : _i;
  function D() {
    (i.stop(), (h = []), (y = []), s._s.delete(e));
  }
  const M = (k, H = '') => {
      if (kr in k) return ((k[ds] = H), k);
      const te = function () {
        Jn(s);
        const me = Array.from(arguments),
          ge = [],
          Se = [];
        function Oe(B) {
          ge.push(B);
        }
        function ut(B) {
          Se.push(B);
        }
        Rt(y, { args: me, name: te[ds], store: j, after: Oe, onError: ut });
        let W;
        try {
          W = k.apply(this && this.$id === e ? this : j, me);
        } catch (B) {
          throw (Rt(Se, B), B);
        }
        return W instanceof Promise
          ? W.then((B) => (Rt(ge, B), B)).catch(
              (B) => (Rt(Se, B), Promise.reject(B)),
            )
          : (Rt(ge, W), W);
      };
      return ((te[kr] = !0), (te[ds] = H), te);
    },
    A = {
      _p: s,
      $id: e,
      $onAction: Br.bind(null, y),
      $patch: S,
      $reset: P,
      $subscribe(k, H = {}) {
        const te = Br(h, k, H.detached, () => me()),
          me = i.run(() =>
            Ft(
              () => s.state.value[e],
              (ge) => {
                (H.flush === 'sync' ? a : f) &&
                  k({ storeId: e, type: en.direct, events: E }, ge);
              },
              et({}, c, H),
            ),
          );
        return te;
      },
      $dispose: D,
    },
    j = kn(A);
  s._s.set(e, j);
  const G = ((s._a && s._a.runWithContext) || ma)(() =>
    s._e.run(() => (i = bo()).run(() => t({ action: M }))),
  );
  for (const k in G) {
    const H = G[k];
    if ((se(H) && !ya(H)) || rt(H))
      o ||
        (m && ba(H) && (se(H) ? (H.value = m[k]) : Ps(H, m[k])),
        (s.state.value[e][k] = H));
    else if (typeof H == 'function') {
      const te = M(H, k);
      ((G[k] = te), (l.actions[k] = H));
    }
  }
  return (
    et(j, G),
    et(z(j), G),
    Object.defineProperty(j, '$state', {
      get: () => s.state.value[e],
      set: (k) => {
        S((H) => {
          et(H, k);
        });
      },
    }),
    s._p.forEach((k) => {
      et(
        j,
        i.run(() => k({ store: j, app: s._a, pinia: s, options: l })),
      );
    }),
    m && o && n.hydrate && n.hydrate(j.$state, m),
    (f = !0),
    (a = !0),
    j
  );
}
/*! #__NO_SIDE_EFFECTS__ */ function Si(e, t, n) {
  let s;
  const r = typeof t == 'function';
  s = r ? n : t;
  function o(i, l) {
    const c = lc();
    return (
      (i = i || (c ? Yt(yi, null) : null)),
      i && Jn(i),
      (i = bi),
      i._s.has(e) || (r ? wi(e, t, s, i) : _a(e, s, i)),
      i._s.get(e)
    );
  }
  return ((o.$id = e), o);
}
function vi(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: wa } = Object.prototype,
  { getPrototypeOf: er } = Object,
  { iterator: Gn, toStringTag: xi } = Symbol,
  Xn = ((e) => (t) => {
    const n = wa.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Me = (e) => ((e = e.toLowerCase()), (t) => Xn(t) === e),
  Yn = (e) => (t) => typeof t === e,
  { isArray: Mt } = Array,
  It = Yn('undefined');
function an(e) {
  return (
    e !== null &&
    !It(e) &&
    e.constructor !== null &&
    !It(e.constructor) &&
    Ee(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Ei = Me('ArrayBuffer');
function Sa(e) {
  let t;
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Ei(e.buffer)),
    t
  );
}
const va = Yn('string'),
  Ee = Yn('function'),
  Ri = Yn('number'),
  un = (e) => e !== null && typeof e == 'object',
  xa = (e) => e === !0 || e === !1,
  xn = (e) => {
    if (Xn(e) !== 'object') return !1;
    const t = er(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(xi in e) &&
      !(Gn in e)
    );
  },
  Ea = (e) => {
    if (!un(e) || an(e)) return !1;
    try {
      return (
        Object.keys(e).length === 0 &&
        Object.getPrototypeOf(e) === Object.prototype
      );
    } catch {
      return !1;
    }
  },
  Ra = Me('Date'),
  Oa = Me('File'),
  Ca = Me('Blob'),
  Ta = Me('FileList'),
  Aa = (e) => un(e) && Ee(e.pipe),
  Pa = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == 'function' && e instanceof FormData) ||
        (Ee(e.append) &&
          ((t = Xn(e)) === 'formdata' ||
            (t === 'object' &&
              Ee(e.toString) &&
              e.toString() === '[object FormData]'))))
    );
  },
  Fa = Me('URLSearchParams'),
  [Na, La, Ia, Ma] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(
    Me,
  ),
  Da = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
function fn(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > 'u') return;
  let s, r;
  if ((typeof e != 'object' && (e = [e]), Mt(e)))
    for (s = 0, r = e.length; s < r; s++) t.call(null, e[s], s, e);
  else {
    if (an(e)) return;
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      i = o.length;
    let l;
    for (s = 0; s < i; s++) ((l = o[s]), t.call(null, e[l], l, e));
  }
}
function Oi(e, t) {
  if (an(e)) return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let s = n.length,
    r;
  for (; s-- > 0; ) if (((r = n[s]), t === r.toLowerCase())) return r;
  return null;
}
const mt =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : global,
  Ci = (e) => !It(e) && e !== mt;
function Fs() {
  const { caseless: e, skipUndefined: t } = (Ci(this) && this) || {},
    n = {},
    s = (r, o) => {
      const i = (e && Oi(n, o)) || o;
      xn(n[i]) && xn(r)
        ? (n[i] = Fs(n[i], r))
        : xn(r)
          ? (n[i] = Fs({}, r))
          : Mt(r)
            ? (n[i] = r.slice())
            : (!t || !It(r)) && (n[i] = r);
    };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && fn(arguments[r], s);
  return n;
}
const ja = (e, t, n, { allOwnKeys: s } = {}) => (
    fn(
      t,
      (r, o) => {
        n && Ee(r) ? (e[o] = vi(r, n)) : (e[o] = r);
      },
      { allOwnKeys: s },
    ),
    e
  ),
  $a = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  Ua = (e, t, n, s) => {
    ((e.prototype = Object.create(t.prototype, s)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, 'super', { value: t.prototype }),
      n && Object.assign(e.prototype, n));
  },
  Ba = (e, t, n, s) => {
    let r, o, i;
    const l = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (r = Object.getOwnPropertyNames(e), o = r.length; o-- > 0; )
        ((i = r[o]),
          (!s || s(i, e, t)) && !l[i] && ((t[i] = e[i]), (l[i] = !0)));
      e = n !== !1 && er(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  ka = (e, t, n) => {
    ((e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length));
    const s = e.indexOf(t, n);
    return s !== -1 && s === n;
  },
  Ha = (e) => {
    if (!e) return null;
    if (Mt(e)) return e;
    let t = e.length;
    if (!Ri(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  Va = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < 'u' && er(Uint8Array)),
  qa = (e, t) => {
    const s = (e && e[Gn]).call(e);
    let r;
    for (; (r = s.next()) && !r.done; ) {
      const o = r.value;
      t.call(e, o[0], o[1]);
    }
  },
  Ka = (e, t) => {
    let n;
    const s = [];
    for (; (n = e.exec(t)) !== null; ) s.push(n);
    return s;
  },
  Wa = Me('HTMLFormElement'),
  za = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, s, r) {
      return s.toUpperCase() + r;
    }),
  Hr = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  Ja = Me('RegExp'),
  Ti = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      s = {};
    (fn(n, (r, o) => {
      let i;
      (i = t(r, o, e)) !== !1 && (s[o] = i || r);
    }),
      Object.defineProperties(e, s));
  },
  Ga = (e) => {
    Ti(e, (t, n) => {
      if (Ee(e) && ['arguments', 'caller', 'callee'].indexOf(n) !== -1)
        return !1;
      const s = e[n];
      if (Ee(s)) {
        if (((t.enumerable = !1), 'writable' in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  Xa = (e, t) => {
    const n = {},
      s = (r) => {
        r.forEach((o) => {
          n[o] = !0;
        });
      };
    return (Mt(e) ? s(e) : s(String(e).split(t)), n);
  },
  Ya = () => {},
  Za = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t);
function Qa(e) {
  return !!(e && Ee(e.append) && e[xi] === 'FormData' && e[Gn]);
}
const eu = (e) => {
    const t = new Array(10),
      n = (s, r) => {
        if (un(s)) {
          if (t.indexOf(s) >= 0) return;
          if (an(s)) return s;
          if (!('toJSON' in s)) {
            t[r] = s;
            const o = Mt(s) ? [] : {};
            return (
              fn(s, (i, l) => {
                const c = n(i, r + 1);
                !It(c) && (o[l] = c);
              }),
              (t[r] = void 0),
              o
            );
          }
        }
        return s;
      };
    return n(e, 0);
  },
  tu = Me('AsyncFunction'),
  nu = (e) => e && (un(e) || Ee(e)) && Ee(e.then) && Ee(e.catch),
  Ai = ((e, t) =>
    e
      ? setImmediate
      : t
        ? ((n, s) => (
            mt.addEventListener(
              'message',
              ({ source: r, data: o }) => {
                r === mt && o === n && s.length && s.shift()();
              },
              !1,
            ),
            (r) => {
              (s.push(r), mt.postMessage(n, '*'));
            }
          ))(`axios@${Math.random()}`, [])
        : (n) => setTimeout(n))(
    typeof setImmediate == 'function',
    Ee(mt.postMessage),
  ),
  su =
    typeof queueMicrotask < 'u'
      ? queueMicrotask.bind(mt)
      : (typeof process < 'u' && process.nextTick) || Ai,
  ru = (e) => e != null && Ee(e[Gn]),
  p = {
    isArray: Mt,
    isArrayBuffer: Ei,
    isBuffer: an,
    isFormData: Pa,
    isArrayBufferView: Sa,
    isString: va,
    isNumber: Ri,
    isBoolean: xa,
    isObject: un,
    isPlainObject: xn,
    isEmptyObject: Ea,
    isReadableStream: Na,
    isRequest: La,
    isResponse: Ia,
    isHeaders: Ma,
    isUndefined: It,
    isDate: Ra,
    isFile: Oa,
    isBlob: Ca,
    isRegExp: Ja,
    isFunction: Ee,
    isStream: Aa,
    isURLSearchParams: Fa,
    isTypedArray: Va,
    isFileList: Ta,
    forEach: fn,
    merge: Fs,
    extend: ja,
    trim: Da,
    stripBOM: $a,
    inherits: Ua,
    toFlatObject: Ba,
    kindOf: Xn,
    kindOfTest: Me,
    endsWith: ka,
    toArray: Ha,
    forEachEntry: qa,
    matchAll: Ka,
    isHTMLForm: Wa,
    hasOwnProperty: Hr,
    hasOwnProp: Hr,
    reduceDescriptors: Ti,
    freezeMethods: Ga,
    toObjectSet: Xa,
    toCamelCase: za,
    noop: Ya,
    toFiniteNumber: Za,
    findKey: Oi,
    global: mt,
    isContextDefined: Ci,
    isSpecCompliantForm: Qa,
    toJSONObject: eu,
    isAsyncFn: tu,
    isThenable: nu,
    setImmediate: Ai,
    asap: su,
    isIterable: ru,
  };
function $(e, t, n, s, r) {
  (Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = 'AxiosError'),
    t && (this.code = t),
    n && (this.config = n),
    s && (this.request = s),
    r && ((this.response = r), (this.status = r.status ? r.status : null)));
}
p.inherits($, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: p.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const Pi = $.prototype,
  Fi = {};
[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL',
].forEach((e) => {
  Fi[e] = { value: e };
});
Object.defineProperties($, Fi);
Object.defineProperty(Pi, 'isAxiosError', { value: !0 });
$.from = (e, t, n, s, r, o) => {
  const i = Object.create(Pi);
  p.toFlatObject(
    e,
    i,
    function (a) {
      return a !== Error.prototype;
    },
    (f) => f !== 'isAxiosError',
  );
  const l = e && e.message ? e.message : 'Error',
    c = t == null && e ? e.code : t;
  return (
    $.call(i, l, c, n, s, r),
    e &&
      i.cause == null &&
      Object.defineProperty(i, 'cause', { value: e, configurable: !0 }),
    (i.name = (e && e.name) || 'Error'),
    o && Object.assign(i, o),
    i
  );
};
const ou = null;
function Ns(e) {
  return p.isPlainObject(e) || p.isArray(e);
}
function Ni(e) {
  return p.endsWith(e, '[]') ? e.slice(0, -2) : e;
}
function Vr(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (r, o) {
          return ((r = Ni(r)), !n && o ? '[' + r + ']' : r);
        })
        .join(n ? '.' : '')
    : t;
}
function iu(e) {
  return p.isArray(e) && !e.some(Ns);
}
const lu = p.toFlatObject(p, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Zn(e, t, n) {
  if (!p.isObject(e)) throw new TypeError('target must be an object');
  ((t = t || new FormData()),
    (n = p.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (b, S) {
        return !p.isUndefined(S[b]);
      },
    )));
  const s = n.metaTokens,
    r = n.visitor || a,
    o = n.dots,
    i = n.indexes,
    c = (n.Blob || (typeof Blob < 'u' && Blob)) && p.isSpecCompliantForm(t);
  if (!p.isFunction(r)) throw new TypeError('visitor must be a function');
  function f(m) {
    if (m === null) return '';
    if (p.isDate(m)) return m.toISOString();
    if (p.isBoolean(m)) return m.toString();
    if (!c && p.isBlob(m))
      throw new $('Blob is not supported. Use a Buffer instead.');
    return p.isArrayBuffer(m) || p.isTypedArray(m)
      ? c && typeof Blob == 'function'
        ? new Blob([m])
        : Buffer.from(m)
      : m;
  }
  function a(m, b, S) {
    let P = m;
    if (m && !S && typeof m == 'object') {
      if (p.endsWith(b, '{}'))
        ((b = s ? b : b.slice(0, -2)), (m = JSON.stringify(m)));
      else if (
        (p.isArray(m) && iu(m)) ||
        ((p.isFileList(m) || p.endsWith(b, '[]')) && (P = p.toArray(m)))
      )
        return (
          (b = Ni(b)),
          P.forEach(function (M, A) {
            !(p.isUndefined(M) || M === null) &&
              t.append(
                i === !0 ? Vr([b], A, o) : i === null ? b : b + '[]',
                f(M),
              );
          }),
          !1
        );
    }
    return Ns(m) ? !0 : (t.append(Vr(S, b, o), f(m)), !1);
  }
  const h = [],
    y = Object.assign(lu, {
      defaultVisitor: a,
      convertValue: f,
      isVisitable: Ns,
    });
  function E(m, b) {
    if (!p.isUndefined(m)) {
      if (h.indexOf(m) !== -1)
        throw Error('Circular reference detected in ' + b.join('.'));
      (h.push(m),
        p.forEach(m, function (P, D) {
          (!(p.isUndefined(P) || P === null) &&
            r.call(t, P, p.isString(D) ? D.trim() : D, b, y)) === !0 &&
            E(P, b ? b.concat(D) : [D]);
        }),
        h.pop());
    }
  }
  if (!p.isObject(e)) throw new TypeError('data must be an object');
  return (E(e), t);
}
function qr(e) {
  const t = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\0',
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (s) {
    return t[s];
  });
}
function tr(e, t) {
  ((this._pairs = []), e && Zn(e, this, t));
}
const Li = tr.prototype;
Li.append = function (t, n) {
  this._pairs.push([t, n]);
};
Li.toString = function (t) {
  const n = t
    ? function (s) {
        return t.call(this, s, qr);
      }
    : qr;
  return this._pairs
    .map(function (r) {
      return n(r[0]) + '=' + n(r[1]);
    }, '')
    .join('&');
};
function cu(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+');
}
function Ii(e, t, n) {
  if (!t) return e;
  const s = (n && n.encode) || cu;
  p.isFunction(n) && (n = { serialize: n });
  const r = n && n.serialize;
  let o;
  if (
    (r
      ? (o = r(t, n))
      : (o = p.isURLSearchParams(t) ? t.toString() : new tr(t, n).toString(s)),
    o)
  ) {
    const i = e.indexOf('#');
    (i !== -1 && (e = e.slice(0, i)),
      (e += (e.indexOf('?') === -1 ? '?' : '&') + o));
  }
  return e;
}
class Kr {
  constructor() {
    this.handlers = [];
  }
  use(t, n, s) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: s ? s.synchronous : !1,
        runWhen: s ? s.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    p.forEach(this.handlers, function (s) {
      s !== null && t(s);
    });
  }
}
const Mi = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  au = typeof URLSearchParams < 'u' ? URLSearchParams : tr,
  uu = typeof FormData < 'u' ? FormData : null,
  fu = typeof Blob < 'u' ? Blob : null,
  du = {
    isBrowser: !0,
    classes: { URLSearchParams: au, FormData: uu, Blob: fu },
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  },
  nr = typeof window < 'u' && typeof document < 'u',
  Ls = (typeof navigator == 'object' && navigator) || void 0,
  hu =
    nr &&
    (!Ls || ['ReactNative', 'NativeScript', 'NS'].indexOf(Ls.product) < 0),
  pu =
    typeof WorkerGlobalScope < 'u' &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == 'function',
  mu = (nr && window.location.href) || 'http://localhost',
  gu = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: nr,
        hasStandardBrowserEnv: hu,
        hasStandardBrowserWebWorkerEnv: pu,
        navigator: Ls,
        origin: mu,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  he = { ...gu, ...du };
function bu(e, t) {
  return Zn(e, new he.classes.URLSearchParams(), {
    visitor: function (n, s, r, o) {
      return he.isNode && p.isBuffer(n)
        ? (this.append(s, n.toString('base64')), !1)
        : o.defaultVisitor.apply(this, arguments);
    },
    ...t,
  });
}
function yu(e) {
  return p
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((t) => (t[0] === '[]' ? '' : t[1] || t[0]));
}
function _u(e) {
  const t = {},
    n = Object.keys(e);
  let s;
  const r = n.length;
  let o;
  for (s = 0; s < r; s++) ((o = n[s]), (t[o] = e[o]));
  return t;
}
function Di(e) {
  function t(n, s, r, o) {
    let i = n[o++];
    if (i === '__proto__') return !0;
    const l = Number.isFinite(+i),
      c = o >= n.length;
    return (
      (i = !i && p.isArray(r) ? r.length : i),
      c
        ? (p.hasOwnProp(r, i) ? (r[i] = [r[i], s]) : (r[i] = s), !l)
        : ((!r[i] || !p.isObject(r[i])) && (r[i] = []),
          t(n, s, r[i], o) && p.isArray(r[i]) && (r[i] = _u(r[i])),
          !l)
    );
  }
  if (p.isFormData(e) && p.isFunction(e.entries)) {
    const n = {};
    return (
      p.forEachEntry(e, (s, r) => {
        t(yu(s), r, n, 0);
      }),
      n
    );
  }
  return null;
}
function wu(e, t, n) {
  if (p.isString(e))
    try {
      return ((t || JSON.parse)(e), p.trim(e));
    } catch (s) {
      if (s.name !== 'SyntaxError') throw s;
    }
  return (n || JSON.stringify)(e);
}
const dn = {
  transitional: Mi,
  adapter: ['xhr', 'http', 'fetch'],
  transformRequest: [
    function (t, n) {
      const s = n.getContentType() || '',
        r = s.indexOf('application/json') > -1,
        o = p.isObject(t);
      if ((o && p.isHTMLForm(t) && (t = new FormData(t)), p.isFormData(t)))
        return r ? JSON.stringify(Di(t)) : t;
      if (
        p.isArrayBuffer(t) ||
        p.isBuffer(t) ||
        p.isStream(t) ||
        p.isFile(t) ||
        p.isBlob(t) ||
        p.isReadableStream(t)
      )
        return t;
      if (p.isArrayBufferView(t)) return t.buffer;
      if (p.isURLSearchParams(t))
        return (
          n.setContentType(
            'application/x-www-form-urlencoded;charset=utf-8',
            !1,
          ),
          t.toString()
        );
      let l;
      if (o) {
        if (s.indexOf('application/x-www-form-urlencoded') > -1)
          return bu(t, this.formSerializer).toString();
        if ((l = p.isFileList(t)) || s.indexOf('multipart/form-data') > -1) {
          const c = this.env && this.env.FormData;
          return Zn(
            l ? { 'files[]': t } : t,
            c && new c(),
            this.formSerializer,
          );
        }
      }
      return o || r ? (n.setContentType('application/json', !1), wu(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || dn.transitional,
        s = n && n.forcedJSONParsing,
        r = this.responseType === 'json';
      if (p.isResponse(t) || p.isReadableStream(t)) return t;
      if (t && p.isString(t) && ((s && !this.responseType) || r)) {
        const i = !(n && n.silentJSONParsing) && r;
        try {
          return JSON.parse(t, this.parseReviver);
        } catch (l) {
          if (i)
            throw l.name === 'SyntaxError'
              ? $.from(l, $.ERR_BAD_RESPONSE, this, null, this.response)
              : l;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: he.classes.FormData, Blob: he.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': void 0,
    },
  },
};
p.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (e) => {
  dn.headers[e] = {};
});
const Su = p.toObjectSet([
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent',
  ]),
  vu = (e) => {
    const t = {};
    let n, s, r;
    return (
      e &&
        e
          .split(
            `
`,
          )
          .forEach(function (i) {
            ((r = i.indexOf(':')),
              (n = i.substring(0, r).trim().toLowerCase()),
              (s = i.substring(r + 1).trim()),
              !(!n || (t[n] && Su[n])) &&
                (n === 'set-cookie'
                  ? t[n]
                    ? t[n].push(s)
                    : (t[n] = [s])
                  : (t[n] = t[n] ? t[n] + ', ' + s : s)));
          }),
      t
    );
  },
  Wr = Symbol('internals');
function Ht(e) {
  return e && String(e).trim().toLowerCase();
}
function En(e) {
  return e === !1 || e == null ? e : p.isArray(e) ? e.map(En) : String(e);
}
function xu(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; (s = n.exec(e)); ) t[s[1]] = s[2];
  return t;
}
const Eu = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function hs(e, t, n, s, r) {
  if (p.isFunction(s)) return s.call(this, t, n);
  if ((r && (t = n), !!p.isString(t))) {
    if (p.isString(s)) return t.indexOf(s) !== -1;
    if (p.isRegExp(s)) return s.test(t);
  }
}
function Ru(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, s) => n.toUpperCase() + s);
}
function Ou(e, t) {
  const n = p.toCamelCase(' ' + t);
  ['get', 'set', 'has'].forEach((s) => {
    Object.defineProperty(e, s + n, {
      value: function (r, o, i) {
        return this[s].call(this, t, r, o, i);
      },
      configurable: !0,
    });
  });
}
let Re = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, s) {
    const r = this;
    function o(l, c, f) {
      const a = Ht(c);
      if (!a) throw new Error('header name must be a non-empty string');
      const h = p.findKey(r, a);
      (!h || r[h] === void 0 || f === !0 || (f === void 0 && r[h] !== !1)) &&
        (r[h || c] = En(l));
    }
    const i = (l, c) => p.forEach(l, (f, a) => o(f, a, c));
    if (p.isPlainObject(t) || t instanceof this.constructor) i(t, n);
    else if (p.isString(t) && (t = t.trim()) && !Eu(t)) i(vu(t), n);
    else if (p.isObject(t) && p.isIterable(t)) {
      let l = {},
        c,
        f;
      for (const a of t) {
        if (!p.isArray(a))
          throw TypeError('Object iterator must return a key-value pair');
        l[(f = a[0])] = (c = l[f])
          ? p.isArray(c)
            ? [...c, a[1]]
            : [c, a[1]]
          : a[1];
      }
      i(l, n);
    } else t != null && o(n, t, s);
    return this;
  }
  get(t, n) {
    if (((t = Ht(t)), t)) {
      const s = p.findKey(this, t);
      if (s) {
        const r = this[s];
        if (!n) return r;
        if (n === !0) return xu(r);
        if (p.isFunction(n)) return n.call(this, r, s);
        if (p.isRegExp(n)) return n.exec(r);
        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }
  has(t, n) {
    if (((t = Ht(t)), t)) {
      const s = p.findKey(this, t);
      return !!(s && this[s] !== void 0 && (!n || hs(this, this[s], s, n)));
    }
    return !1;
  }
  delete(t, n) {
    const s = this;
    let r = !1;
    function o(i) {
      if (((i = Ht(i)), i)) {
        const l = p.findKey(s, i);
        l && (!n || hs(s, s[l], l, n)) && (delete s[l], (r = !0));
      }
    }
    return (p.isArray(t) ? t.forEach(o) : o(t), r);
  }
  clear(t) {
    const n = Object.keys(this);
    let s = n.length,
      r = !1;
    for (; s--; ) {
      const o = n[s];
      (!t || hs(this, this[o], o, t, !0)) && (delete this[o], (r = !0));
    }
    return r;
  }
  normalize(t) {
    const n = this,
      s = {};
    return (
      p.forEach(this, (r, o) => {
        const i = p.findKey(s, o);
        if (i) {
          ((n[i] = En(r)), delete n[o]);
          return;
        }
        const l = t ? Ru(o) : String(o).trim();
        (l !== o && delete n[o], (n[l] = En(r)), (s[l] = !0));
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      p.forEach(this, (s, r) => {
        s != null && s !== !1 && (n[r] = t && p.isArray(s) ? s.join(', ') : s);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ': ' + n).join(`
`);
  }
  getSetCookie() {
    return this.get('set-cookie') || [];
  }
  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const s = new this(t);
    return (n.forEach((r) => s.set(r)), s);
  }
  static accessor(t) {
    const s = (this[Wr] = this[Wr] = { accessors: {} }).accessors,
      r = this.prototype;
    function o(i) {
      const l = Ht(i);
      s[l] || (Ou(r, i), (s[l] = !0));
    }
    return (p.isArray(t) ? t.forEach(o) : o(t), this);
  }
};
Re.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
  'Authorization',
]);
p.reduceDescriptors(Re.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(s) {
      this[n] = s;
    },
  };
});
p.freezeMethods(Re);
function ps(e, t) {
  const n = this || dn,
    s = t || n,
    r = Re.from(s.headers);
  let o = s.data;
  return (
    p.forEach(e, function (l) {
      o = l.call(n, o, r.normalize(), t ? t.status : void 0);
    }),
    r.normalize(),
    o
  );
}
function ji(e) {
  return !!(e && e.__CANCEL__);
}
function Dt(e, t, n) {
  ($.call(this, e ?? 'canceled', $.ERR_CANCELED, t, n),
    (this.name = 'CanceledError'));
}
p.inherits(Dt, $, { __CANCEL__: !0 });
function $i(e, t, n) {
  const s = n.config.validateStatus;
  !n.status || !s || s(n.status)
    ? e(n)
    : t(
        new $(
          'Request failed with status code ' + n.status,
          [$.ERR_BAD_REQUEST, $.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n,
        ),
      );
}
function Cu(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || '';
}
function Tu(e, t) {
  e = e || 10;
  const n = new Array(e),
    s = new Array(e);
  let r = 0,
    o = 0,
    i;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (c) {
      const f = Date.now(),
        a = s[o];
      (i || (i = f), (n[r] = c), (s[r] = f));
      let h = o,
        y = 0;
      for (; h !== r; ) ((y += n[h++]), (h = h % e));
      if (((r = (r + 1) % e), r === o && (o = (o + 1) % e), f - i < t)) return;
      const E = a && f - a;
      return E ? Math.round((y * 1e3) / E) : void 0;
    }
  );
}
function Au(e, t) {
  let n = 0,
    s = 1e3 / t,
    r,
    o;
  const i = (f, a = Date.now()) => {
    ((n = a), (r = null), o && (clearTimeout(o), (o = null)), e(...f));
  };
  return [
    (...f) => {
      const a = Date.now(),
        h = a - n;
      h >= s
        ? i(f, a)
        : ((r = f),
          o ||
            (o = setTimeout(() => {
              ((o = null), i(r));
            }, s - h)));
    },
    () => r && i(r),
  ];
}
const In = (e, t, n = 3) => {
    let s = 0;
    const r = Tu(50, 250);
    return Au((o) => {
      const i = o.loaded,
        l = o.lengthComputable ? o.total : void 0,
        c = i - s,
        f = r(c),
        a = i <= l;
      s = i;
      const h = {
        loaded: i,
        total: l,
        progress: l ? i / l : void 0,
        bytes: c,
        rate: f || void 0,
        estimated: f && l && a ? (l - i) / f : void 0,
        event: o,
        lengthComputable: l != null,
        [t ? 'download' : 'upload']: !0,
      };
      e(h);
    }, n);
  },
  zr = (e, t) => {
    const n = e != null;
    return [(s) => t[0]({ lengthComputable: n, total: e, loaded: s }), t[1]];
  },
  Jr =
    (e) =>
    (...t) =>
      p.asap(() => e(...t)),
  Pu = he.hasStandardBrowserEnv
    ? ((e, t) => (n) => (
        (n = new URL(n, he.origin)),
        e.protocol === n.protocol &&
          e.host === n.host &&
          (t || e.port === n.port)
      ))(
        new URL(he.origin),
        he.navigator && /(msie|trident)/i.test(he.navigator.userAgent),
      )
    : () => !0,
  Fu = he.hasStandardBrowserEnv
    ? {
        write(e, t, n, s, r, o) {
          const i = [e + '=' + encodeURIComponent(t)];
          (p.isNumber(n) && i.push('expires=' + new Date(n).toGMTString()),
            p.isString(s) && i.push('path=' + s),
            p.isString(r) && i.push('domain=' + r),
            o === !0 && i.push('secure'),
            (document.cookie = i.join('; ')));
        },
        read(e) {
          const t = document.cookie.match(
            new RegExp('(^|;\\s*)(' + e + ')=([^;]*)'),
          );
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, '', Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function Nu(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Lu(e, t) {
  return t ? e.replace(/\/?\/$/, '') + '/' + t.replace(/^\/+/, '') : e;
}
function Ui(e, t, n) {
  let s = !Nu(t);
  return e && (s || n == !1) ? Lu(e, t) : t;
}
const Gr = (e) => (e instanceof Re ? { ...e } : e);
function _t(e, t) {
  t = t || {};
  const n = {};
  function s(f, a, h, y) {
    return p.isPlainObject(f) && p.isPlainObject(a)
      ? p.merge.call({ caseless: y }, f, a)
      : p.isPlainObject(a)
        ? p.merge({}, a)
        : p.isArray(a)
          ? a.slice()
          : a;
  }
  function r(f, a, h, y) {
    if (p.isUndefined(a)) {
      if (!p.isUndefined(f)) return s(void 0, f, h, y);
    } else return s(f, a, h, y);
  }
  function o(f, a) {
    if (!p.isUndefined(a)) return s(void 0, a);
  }
  function i(f, a) {
    if (p.isUndefined(a)) {
      if (!p.isUndefined(f)) return s(void 0, f);
    } else return s(void 0, a);
  }
  function l(f, a, h) {
    if (h in t) return s(f, a);
    if (h in e) return s(void 0, f);
  }
  const c = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: l,
    headers: (f, a, h) => r(Gr(f), Gr(a), h, !0),
  };
  return (
    p.forEach(Object.keys({ ...e, ...t }), function (a) {
      const h = c[a] || r,
        y = h(e[a], t[a], a);
      (p.isUndefined(y) && h !== l) || (n[a] = y);
    }),
    n
  );
}
const Bi = (e) => {
    const t = _t({}, e);
    let {
      data: n,
      withXSRFToken: s,
      xsrfHeaderName: r,
      xsrfCookieName: o,
      headers: i,
      auth: l,
    } = t;
    if (
      ((t.headers = i = Re.from(i)),
      (t.url = Ii(
        Ui(t.baseURL, t.url, t.allowAbsoluteUrls),
        e.params,
        e.paramsSerializer,
      )),
      l &&
        i.set(
          'Authorization',
          'Basic ' +
            btoa(
              (l.username || '') +
                ':' +
                (l.password ? unescape(encodeURIComponent(l.password)) : ''),
            ),
        ),
      p.isFormData(n))
    ) {
      if (he.hasStandardBrowserEnv || he.hasStandardBrowserWebWorkerEnv)
        i.setContentType(void 0);
      else if (p.isFunction(n.getHeaders)) {
        const c = n.getHeaders(),
          f = ['content-type', 'content-length'];
        Object.entries(c).forEach(([a, h]) => {
          f.includes(a.toLowerCase()) && i.set(a, h);
        });
      }
    }
    if (
      he.hasStandardBrowserEnv &&
      (s && p.isFunction(s) && (s = s(t)), s || (s !== !1 && Pu(t.url)))
    ) {
      const c = r && o && Fu.read(o);
      c && i.set(r, c);
    }
    return t;
  },
  Iu = typeof XMLHttpRequest < 'u',
  Mu =
    Iu &&
    function (e) {
      return new Promise(function (n, s) {
        const r = Bi(e);
        let o = r.data;
        const i = Re.from(r.headers).normalize();
        let { responseType: l, onUploadProgress: c, onDownloadProgress: f } = r,
          a,
          h,
          y,
          E,
          m;
        function b() {
          (E && E(),
            m && m(),
            r.cancelToken && r.cancelToken.unsubscribe(a),
            r.signal && r.signal.removeEventListener('abort', a));
        }
        let S = new XMLHttpRequest();
        (S.open(r.method.toUpperCase(), r.url, !0), (S.timeout = r.timeout));
        function P() {
          if (!S) return;
          const M = Re.from(
              'getAllResponseHeaders' in S && S.getAllResponseHeaders(),
            ),
            j = {
              data:
                !l || l === 'text' || l === 'json'
                  ? S.responseText
                  : S.response,
              status: S.status,
              statusText: S.statusText,
              headers: M,
              config: e,
              request: S,
            };
          ($i(
            function (G) {
              (n(G), b());
            },
            function (G) {
              (s(G), b());
            },
            j,
          ),
            (S = null));
        }
        ('onloadend' in S
          ? (S.onloadend = P)
          : (S.onreadystatechange = function () {
              !S ||
                S.readyState !== 4 ||
                (S.status === 0 &&
                  !(S.responseURL && S.responseURL.indexOf('file:') === 0)) ||
                setTimeout(P);
            }),
          (S.onabort = function () {
            S &&
              (s(new $('Request aborted', $.ECONNABORTED, e, S)), (S = null));
          }),
          (S.onerror = function (A) {
            const j = A && A.message ? A.message : 'Network Error',
              le = new $(j, $.ERR_NETWORK, e, S);
            ((le.event = A || null), s(le), (S = null));
          }),
          (S.ontimeout = function () {
            let A = r.timeout
              ? 'timeout of ' + r.timeout + 'ms exceeded'
              : 'timeout exceeded';
            const j = r.transitional || Mi;
            (r.timeoutErrorMessage && (A = r.timeoutErrorMessage),
              s(
                new $(
                  A,
                  j.clarifyTimeoutError ? $.ETIMEDOUT : $.ECONNABORTED,
                  e,
                  S,
                ),
              ),
              (S = null));
          }),
          o === void 0 && i.setContentType(null),
          'setRequestHeader' in S &&
            p.forEach(i.toJSON(), function (A, j) {
              S.setRequestHeader(j, A);
            }),
          p.isUndefined(r.withCredentials) ||
            (S.withCredentials = !!r.withCredentials),
          l && l !== 'json' && (S.responseType = r.responseType),
          f && (([y, m] = In(f, !0)), S.addEventListener('progress', y)),
          c &&
            S.upload &&
            (([h, E] = In(c)),
            S.upload.addEventListener('progress', h),
            S.upload.addEventListener('loadend', E)),
          (r.cancelToken || r.signal) &&
            ((a = (M) => {
              S &&
                (s(!M || M.type ? new Dt(null, e, S) : M),
                S.abort(),
                (S = null));
            }),
            r.cancelToken && r.cancelToken.subscribe(a),
            r.signal &&
              (r.signal.aborted
                ? a()
                : r.signal.addEventListener('abort', a))));
        const D = Cu(r.url);
        if (D && he.protocols.indexOf(D) === -1) {
          s(new $('Unsupported protocol ' + D + ':', $.ERR_BAD_REQUEST, e));
          return;
        }
        S.send(o || null);
      });
    },
  Du = (e, t) => {
    const { length: n } = (e = e ? e.filter(Boolean) : []);
    if (t || n) {
      let s = new AbortController(),
        r;
      const o = function (f) {
        if (!r) {
          ((r = !0), l());
          const a = f instanceof Error ? f : this.reason;
          s.abort(
            a instanceof $ ? a : new Dt(a instanceof Error ? a.message : a),
          );
        }
      };
      let i =
        t &&
        setTimeout(() => {
          ((i = null), o(new $(`timeout ${t} of ms exceeded`, $.ETIMEDOUT)));
        }, t);
      const l = () => {
        e &&
          (i && clearTimeout(i),
          (i = null),
          e.forEach((f) => {
            f.unsubscribe
              ? f.unsubscribe(o)
              : f.removeEventListener('abort', o);
          }),
          (e = null));
      };
      e.forEach((f) => f.addEventListener('abort', o));
      const { signal: c } = s;
      return ((c.unsubscribe = () => p.asap(l)), c);
    }
  },
  ju = function* (e, t) {
    let n = e.byteLength;
    if (n < t) {
      yield e;
      return;
    }
    let s = 0,
      r;
    for (; s < n; ) ((r = s + t), yield e.slice(s, r), (s = r));
  },
  $u = async function* (e, t) {
    for await (const n of Uu(e)) yield* ju(n, t);
  },
  Uu = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const t = e.getReader();
    try {
      for (;;) {
        const { done: n, value: s } = await t.read();
        if (n) break;
        yield s;
      }
    } finally {
      await t.cancel();
    }
  },
  Xr = (e, t, n, s) => {
    const r = $u(e, t);
    let o = 0,
      i,
      l = (c) => {
        i || ((i = !0), s && s(c));
      };
    return new ReadableStream(
      {
        async pull(c) {
          try {
            const { done: f, value: a } = await r.next();
            if (f) {
              (l(), c.close());
              return;
            }
            let h = a.byteLength;
            if (n) {
              let y = (o += h);
              n(y);
            }
            c.enqueue(new Uint8Array(a));
          } catch (f) {
            throw (l(f), f);
          }
        },
        cancel(c) {
          return (l(c), r.return());
        },
      },
      { highWaterMark: 2 },
    );
  },
  Yr = 64 * 1024,
  { isFunction: yn } = p,
  Bu = (({ Request: e, Response: t }) => ({ Request: e, Response: t }))(
    p.global,
  ),
  { ReadableStream: Zr, TextEncoder: Qr } = p.global,
  eo = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  ku = (e) => {
    e = p.merge.call({ skipUndefined: !0 }, Bu, e);
    const { fetch: t, Request: n, Response: s } = e,
      r = t ? yn(t) : typeof fetch == 'function',
      o = yn(n),
      i = yn(s);
    if (!r) return !1;
    const l = r && yn(Zr),
      c =
        r &&
        (typeof Qr == 'function'
          ? (
              (m) => (b) =>
                m.encode(b)
            )(new Qr())
          : async (m) => new Uint8Array(await new n(m).arrayBuffer())),
      f =
        o &&
        l &&
        eo(() => {
          let m = !1;
          const b = new n(he.origin, {
            body: new Zr(),
            method: 'POST',
            get duplex() {
              return ((m = !0), 'half');
            },
          }).headers.has('Content-Type');
          return m && !b;
        }),
      a = i && l && eo(() => p.isReadableStream(new s('').body)),
      h = { stream: a && ((m) => m.body) };
    r &&
      ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach((m) => {
        !h[m] &&
          (h[m] = (b, S) => {
            let P = b && b[m];
            if (P) return P.call(b);
            throw new $(
              `Response type '${m}' is not supported`,
              $.ERR_NOT_SUPPORT,
              S,
            );
          });
      });
    const y = async (m) => {
        if (m == null) return 0;
        if (p.isBlob(m)) return m.size;
        if (p.isSpecCompliantForm(m))
          return (
            await new n(he.origin, { method: 'POST', body: m }).arrayBuffer()
          ).byteLength;
        if (p.isArrayBufferView(m) || p.isArrayBuffer(m)) return m.byteLength;
        if ((p.isURLSearchParams(m) && (m = m + ''), p.isString(m)))
          return (await c(m)).byteLength;
      },
      E = async (m, b) => {
        const S = p.toFiniteNumber(m.getContentLength());
        return S ?? y(b);
      };
    return async (m) => {
      let {
          url: b,
          method: S,
          data: P,
          signal: D,
          cancelToken: M,
          timeout: A,
          onDownloadProgress: j,
          onUploadProgress: le,
          responseType: G,
          headers: k,
          withCredentials: H = 'same-origin',
          fetchOptions: te,
        } = Bi(m),
        me = t || fetch;
      G = G ? (G + '').toLowerCase() : 'text';
      let ge = Du([D, M && M.toAbortSignal()], A),
        Se = null;
      const Oe =
        ge &&
        ge.unsubscribe &&
        (() => {
          ge.unsubscribe();
        });
      let ut;
      try {
        if (
          le &&
          f &&
          S !== 'get' &&
          S !== 'head' &&
          (ut = await E(k, P)) !== 0
        ) {
          let ue = new n(b, { method: 'POST', body: P, duplex: 'half' }),
            ce;
          if (
            (p.isFormData(P) &&
              (ce = ue.headers.get('content-type')) &&
              k.setContentType(ce),
            ue.body)
          ) {
            const [vt, xt] = zr(ut, In(Jr(le)));
            P = Xr(ue.body, Yr, vt, xt);
          }
        }
        p.isString(H) || (H = H ? 'include' : 'omit');
        const W = o && 'credentials' in n.prototype,
          B = {
            ...te,
            signal: ge,
            method: S.toUpperCase(),
            headers: k.normalize().toJSON(),
            body: P,
            duplex: 'half',
            credentials: W ? H : void 0,
          };
        Se = o && new n(b, B);
        let V = await (o ? me(Se, te) : me(b, B));
        const De = a && (G === 'stream' || G === 'response');
        if (a && (j || (De && Oe))) {
          const ue = {};
          ['status', 'statusText', 'headers'].forEach((hn) => {
            ue[hn] = V[hn];
          });
          const ce = p.toFiniteNumber(V.headers.get('content-length')),
            [vt, xt] = (j && zr(ce, In(Jr(j), !0))) || [];
          V = new s(
            Xr(V.body, Yr, vt, () => {
              (xt && xt(), Oe && Oe());
            }),
            ue,
          );
        }
        G = G || 'text';
        let St = await h[p.findKey(h, G) || 'text'](V, m);
        return (
          !De && Oe && Oe(),
          await new Promise((ue, ce) => {
            $i(ue, ce, {
              data: St,
              headers: Re.from(V.headers),
              status: V.status,
              statusText: V.statusText,
              config: m,
              request: Se,
            });
          })
        );
      } catch (W) {
        throw (
          Oe && Oe(),
          W && W.name === 'TypeError' && /Load failed|fetch/i.test(W.message)
            ? Object.assign(new $('Network Error', $.ERR_NETWORK, m, Se), {
                cause: W.cause || W,
              })
            : $.from(W, W && W.code, m, Se)
        );
      }
    };
  },
  Hu = new Map(),
  ki = (e) => {
    let t = e ? e.env : {};
    const { fetch: n, Request: s, Response: r } = t,
      o = [s, r, n];
    let i = o.length,
      l = i,
      c,
      f,
      a = Hu;
    for (; l--; )
      ((c = o[l]),
        (f = a.get(c)),
        f === void 0 && a.set(c, (f = l ? new Map() : ku(t))),
        (a = f));
    return f;
  };
ki();
const Is = { http: ou, xhr: Mu, fetch: { get: ki } };
p.forEach(Is, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, 'name', { value: t });
    } catch {}
    Object.defineProperty(e, 'adapterName', { value: t });
  }
});
const to = (e) => `- ${e}`,
  Vu = (e) => p.isFunction(e) || e === null || e === !1,
  Hi = {
    getAdapter: (e, t) => {
      e = p.isArray(e) ? e : [e];
      const { length: n } = e;
      let s, r;
      const o = {};
      for (let i = 0; i < n; i++) {
        s = e[i];
        let l;
        if (
          ((r = s),
          !Vu(s) && ((r = Is[(l = String(s)).toLowerCase()]), r === void 0))
        )
          throw new $(`Unknown adapter '${l}'`);
        if (r && (p.isFunction(r) || (r = r.get(t)))) break;
        o[l || '#' + i] = r;
      }
      if (!r) {
        const i = Object.entries(o).map(
          ([c, f]) =>
            `adapter ${c} ` +
            (f === !1
              ? 'is not supported by the environment'
              : 'is not available in the build'),
        );
        let l = n
          ? i.length > 1
            ? `since :
` +
              i.map(to).join(`
`)
            : ' ' + to(i[0])
          : 'as no adapter specified';
        throw new $(
          'There is no suitable adapter to dispatch the request ' + l,
          'ERR_NOT_SUPPORT',
        );
      }
      return r;
    },
    adapters: Is,
  };
function ms(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Dt(null, e);
}
function no(e) {
  return (
    ms(e),
    (e.headers = Re.from(e.headers)),
    (e.data = ps.call(e, e.transformRequest)),
    ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
      e.headers.setContentType('application/x-www-form-urlencoded', !1),
    Hi.getAdapter(
      e.adapter || dn.adapter,
      e,
    )(e).then(
      function (s) {
        return (
          ms(e),
          (s.data = ps.call(e, e.transformResponse, s)),
          (s.headers = Re.from(s.headers)),
          s
        );
      },
      function (s) {
        return (
          ji(s) ||
            (ms(e),
            s &&
              s.response &&
              ((s.response.data = ps.call(e, e.transformResponse, s.response)),
              (s.response.headers = Re.from(s.response.headers)))),
          Promise.reject(s)
        );
      },
    )
  );
}
const Vi = '1.12.2',
  Qn = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
  (e, t) => {
    Qn[e] = function (s) {
      return typeof s === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
    };
  },
);
const so = {};
Qn.transitional = function (t, n, s) {
  function r(o, i) {
    return (
      '[Axios v' +
      Vi +
      "] Transitional option '" +
      o +
      "'" +
      i +
      (s ? '. ' + s : '')
    );
  }
  return (o, i, l) => {
    if (t === !1)
      throw new $(
        r(i, ' has been removed' + (n ? ' in ' + n : '')),
        $.ERR_DEPRECATED,
      );
    return (
      n &&
        !so[i] &&
        ((so[i] = !0),
        console.warn(
          r(
            i,
            ' has been deprecated since v' +
              n +
              ' and will be removed in the near future',
          ),
        )),
      t ? t(o, i, l) : !0
    );
  };
};
Qn.spelling = function (t) {
  return (n, s) => (console.warn(`${s} is likely a misspelling of ${t}`), !0);
};
function qu(e, t, n) {
  if (typeof e != 'object')
    throw new $('options must be an object', $.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(e);
  let r = s.length;
  for (; r-- > 0; ) {
    const o = s[r],
      i = t[o];
    if (i) {
      const l = e[o],
        c = l === void 0 || i(l, o, e);
      if (c !== !0)
        throw new $('option ' + o + ' must be ' + c, $.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new $('Unknown option ' + o, $.ERR_BAD_OPTION);
  }
}
const Rn = { assertOptions: qu, validators: Qn },
  ke = Rn.validators;
let yt = class {
  constructor(t) {
    ((this.defaults = t || {}),
      (this.interceptors = { request: new Kr(), response: new Kr() }));
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (s) {
      if (s instanceof Error) {
        let r = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(r)
          : (r = new Error());
        const o = r.stack ? r.stack.replace(/^.+\n/, '') : '';
        try {
          s.stack
            ? o &&
              !String(s.stack).endsWith(o.replace(/^.+\n.+\n/, '')) &&
              (s.stack +=
                `
` + o)
            : (s.stack = o);
        } catch {}
      }
      throw s;
    }
  }
  _request(t, n) {
    (typeof t == 'string' ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = _t(this.defaults, n)));
    const { transitional: s, paramsSerializer: r, headers: o } = n;
    (s !== void 0 &&
      Rn.assertOptions(
        s,
        {
          silentJSONParsing: ke.transitional(ke.boolean),
          forcedJSONParsing: ke.transitional(ke.boolean),
          clarifyTimeoutError: ke.transitional(ke.boolean),
        },
        !1,
      ),
      r != null &&
        (p.isFunction(r)
          ? (n.paramsSerializer = { serialize: r })
          : Rn.assertOptions(
              r,
              { encode: ke.function, serialize: ke.function },
              !0,
            )),
      n.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (n.allowAbsoluteUrls = !0)),
      Rn.assertOptions(
        n,
        {
          baseUrl: ke.spelling('baseURL'),
          withXsrfToken: ke.spelling('withXSRFToken'),
        },
        !0,
      ),
      (n.method = (n.method || this.defaults.method || 'get').toLowerCase()));
    let i = o && p.merge(o.common, o[n.method]);
    (o &&
      p.forEach(
        ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
        (m) => {
          delete o[m];
        },
      ),
      (n.headers = Re.concat(i, o)));
    const l = [];
    let c = !0;
    this.interceptors.request.forEach(function (b) {
      (typeof b.runWhen == 'function' && b.runWhen(n) === !1) ||
        ((c = c && b.synchronous), l.unshift(b.fulfilled, b.rejected));
    });
    const f = [];
    this.interceptors.response.forEach(function (b) {
      f.push(b.fulfilled, b.rejected);
    });
    let a,
      h = 0,
      y;
    if (!c) {
      const m = [no.bind(this), void 0];
      for (
        m.unshift(...l), m.push(...f), y = m.length, a = Promise.resolve(n);
        h < y;
      )
        a = a.then(m[h++], m[h++]);
      return a;
    }
    y = l.length;
    let E = n;
    for (; h < y; ) {
      const m = l[h++],
        b = l[h++];
      try {
        E = m(E);
      } catch (S) {
        b.call(this, S);
        break;
      }
    }
    try {
      a = no.call(this, E);
    } catch (m) {
      return Promise.reject(m);
    }
    for (h = 0, y = f.length; h < y; ) a = a.then(f[h++], f[h++]);
    return a;
  }
  getUri(t) {
    t = _t(this.defaults, t);
    const n = Ui(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Ii(n, t.params, t.paramsSerializer);
  }
};
p.forEach(['delete', 'get', 'head', 'options'], function (t) {
  yt.prototype[t] = function (n, s) {
    return this.request(
      _t(s || {}, { method: t, url: n, data: (s || {}).data }),
    );
  };
});
p.forEach(['post', 'put', 'patch'], function (t) {
  function n(s) {
    return function (o, i, l) {
      return this.request(
        _t(l || {}, {
          method: t,
          headers: s ? { 'Content-Type': 'multipart/form-data' } : {},
          url: o,
          data: i,
        }),
      );
    };
  }
  ((yt.prototype[t] = n()), (yt.prototype[t + 'Form'] = n(!0)));
});
let Ku = class qi {
  constructor(t) {
    if (typeof t != 'function')
      throw new TypeError('executor must be a function.');
    let n;
    this.promise = new Promise(function (o) {
      n = o;
    });
    const s = this;
    (this.promise.then((r) => {
      if (!s._listeners) return;
      let o = s._listeners.length;
      for (; o-- > 0; ) s._listeners[o](r);
      s._listeners = null;
    }),
      (this.promise.then = (r) => {
        let o;
        const i = new Promise((l) => {
          (s.subscribe(l), (o = l));
        }).then(r);
        return (
          (i.cancel = function () {
            s.unsubscribe(o);
          }),
          i
        );
      }),
      t(function (o, i, l) {
        s.reason || ((s.reason = new Dt(o, i, l)), n(s.reason));
      }));
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(),
      n = (s) => {
        t.abort(s);
      };
    return (
      this.subscribe(n),
      (t.signal.unsubscribe = () => this.unsubscribe(n)),
      t.signal
    );
  }
  static source() {
    let t;
    return {
      token: new qi(function (r) {
        t = r;
      }),
      cancel: t,
    };
  }
};
function Wu(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function zu(e) {
  return p.isObject(e) && e.isAxiosError === !0;
}
const Ms = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Ms).forEach(([e, t]) => {
  Ms[t] = e;
});
function Ki(e) {
  const t = new yt(e),
    n = vi(yt.prototype.request, t);
  return (
    p.extend(n, yt.prototype, t, { allOwnKeys: !0 }),
    p.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (r) {
      return Ki(_t(e, r));
    }),
    n
  );
}
const re = Ki(dn);
re.Axios = yt;
re.CanceledError = Dt;
re.CancelToken = Ku;
re.isCancel = ji;
re.VERSION = Vi;
re.toFormData = Zn;
re.AxiosError = $;
re.Cancel = re.CanceledError;
re.all = function (t) {
  return Promise.all(t);
};
re.spread = Wu;
re.isAxiosError = zu;
re.mergeConfig = _t;
re.AxiosHeaders = Re;
re.formToJSON = (e) => Di(p.isHTMLForm(e) ? new FormData(e) : e);
re.getAdapter = Hi.getAdapter;
re.HttpStatusCode = Ms;
re.default = re;
const {
    Axios: Cf,
    AxiosError: Tf,
    CanceledError: Af,
    isCancel: Pf,
    CancelToken: Ff,
    VERSION: Nf,
    all: Lf,
    Cancel: If,
    isAxiosError: Mf,
    spread: Df,
    toFormData: jf,
    AxiosHeaders: $f,
    HttpStatusCode: Uf,
    formToJSON: Bf,
    getAdapter: kf,
    mergeConfig: Hf,
  } = re,
  Ju = 'http://localhost:5174',
  ot = re.create({ baseURL: Ju });
function _n(e) {
  e
    ? (ot.defaults.headers.common.Authorization = `Bearer ${e}`)
    : delete ot.defaults.headers.common.Authorization;
}
const Wi = Si('auth', {
    state: () => ({
      token: localStorage.getItem('token'),
      loading: !1,
      error: '',
    }),
    getters: { isAuthed: (e) => !!e.token },
    actions: {
      init() {
        this.token && _n(this.token);
      },
      async register(e, t) {
        ((this.loading = !0), (this.error = ''));
        try {
          const { data: n } = await ot.post('/auth/register', {
            email: e,
            password: t,
          });
          ((this.token = n.token),
            localStorage.setItem('token', n.token),
            _n(n.token));
        } catch (n) {
          this.error = n.response?.data?.error || 'Error';
        } finally {
          this.loading = !1;
        }
      },
      async login(e, t) {
        ((this.loading = !0), (this.error = ''));
        try {
          const { data: n } = await ot.post('/auth/login', {
            email: e,
            password: t,
          });
          ((this.token = n.token),
            localStorage.setItem('token', n.token),
            _n(n.token));
        } catch (n) {
          this.error = n.response?.data?.error || 'Error';
        } finally {
          this.loading = !1;
        }
      },
      logout() {
        ((this.token = null), localStorage.removeItem('token'), _n(void 0));
      },
    },
  }),
  Gu = Si('favorites', {
    state: () => ({ items: [], loading: !1 }),
    actions: {
      async load() {
        this.loading = !0;
        try {
          const { data: e } = await ot.get('/favorites');
          this.items = e.items;
        } finally {
          this.loading = !1;
        }
      },
      isFavorited(e) {
        return this.items.some((t) => t.image_url === e);
      },
      findByImage(e) {
        return this.items.find((t) => t.image_url === e);
      },
      async add(e) {
        if (!this.isFavorited(e.image_url))
          try {
            const { data: t } = await ot.post('/favorites', e);
            this.items.unshift({
              id: t.id,
              created_at: new Date().toISOString(),
              ...e,
            });
          } catch (t) {
            if (t?.response?.status === 409) return;
            throw t;
          }
      },
      async remove(e) {
        (await ot.delete(`/favorites/${e}`),
          (this.items = this.items.filter((t) => t.id !== e)));
      },
      async removeByImage(e) {
        const t = this.findByImage(e);
        if (t) return (await this.remove(t.id), t);
      },
    },
  }),
  Xu = { class: 'card-inner' },
  Yu = { class: 'face front' },
  Zu = ['src'],
  Qu = { class: 'title' },
  ef = { class: 'face back' },
  tf = { class: 'small' },
  nf = {
    class: 'row',
    style: { 'justify-content': 'space-between', 'margin-top': 'auto' },
  },
  sf = ['disabled'],
  ro = Vn({
    __name: 'CatCard',
    props: {
      image_url: {},
      fact: {},
      name: {},
      isFavorite: { type: Boolean },
      removable: { type: Boolean },
    },
    setup(e) {
      const t = Pe(!1);
      return (n, s) => (
        ne(),
        ie(
          'div',
          {
            class: Un(['card', { flip: t.value }]),
            onClick: s[4] || (s[4] = (r) => (t.value = !t.value)),
          },
          [
            K('div', Xu, [
              K('div', Yu, [
                e.removable
                  ? (ne(),
                    ie(
                      'button',
                      {
                        key: 0,
                        class: 'icon-btn remove',
                        title: 'Remove',
                        onClick:
                          s[0] ||
                          (s[0] = pt((r) => n.$emit('remove'), ['stop'])),
                      },
                      '✕',
                    ))
                  : Lt('', !0),
                K(
                  'img',
                  {
                    class: 'img',
                    src: e.image_url,
                    alt: 'cat',
                    loading: 'lazy',
                  },
                  null,
                  8,
                  Zu,
                ),
                K('div', Qu, Xe(e.name), 1),
              ]),
              K('div', ef, [
                s[5] || (s[5] = K('div', { class: 'title' }, 'Fun fact', -1)),
                K('div', tf, Xe(e.fact), 1),
                K('div', nf, [
                  K(
                    'button',
                    {
                      class: 'btn secondary',
                      onClick:
                        s[1] ||
                        (s[1] = pt((r) => n.$emit('refresh'), ['stop'])),
                    },
                    '↻ Another',
                  ),
                  e.removable
                    ? (ne(),
                      ie(
                        'button',
                        {
                          key: 0,
                          class: 'btn',
                          onClick:
                            s[2] ||
                            (s[2] = pt((r) => n.$emit('remove'), ['stop'])),
                        },
                        'Remove',
                      ))
                    : (ne(),
                      ie(
                        'button',
                        {
                          key: 1,
                          class: 'btn',
                          disabled: e.isFavorite,
                          onClick:
                            s[3] ||
                            (s[3] = pt((r) => n.$emit('favorite'), ['stop'])),
                        },
                        Xe(e.isFavorite ? '★ Favorited' : '★ Favorite'),
                        9,
                        sf,
                      )),
                ]),
              ]),
            ]),
          ],
          2,
        )
      );
    },
  }),
  rf = { class: 'auth' },
  of = { class: 'modal-card' },
  lf = { class: 'row' },
  cf = { class: 'row' },
  af = {
    class: 'row',
    style: { 'justify-content': 'space-between', 'margin-top': '10px' },
  },
  uf = ['disabled'],
  ff = { key: 0, class: 'small' },
  df = { class: 'small', style: { 'margin-top': '8px' } },
  hf = Vn({
    __name: 'HeaderAuth',
    setup(e) {
      const t = Wi(),
        n = Pe(!1),
        s = Pe('login'),
        r = Pe(''),
        o = Pe(''),
        i = Qt(() => t.loading),
        l = Qt(() => t.error),
        c = Qt(() => t.isAuthed);
      function f(m) {
        ((s.value = m), (n.value = !0));
      }
      function a() {
        n.value = !1;
      }
      function h() {
        ((r.value = ''), (o.value = ''));
      }
      async function y() {
        (s.value === 'login'
          ? await t.login(r.value, o.value)
          : await t.register(r.value, o.value),
          t.isAuthed && ((n.value = !1), h()));
      }
      function E() {
        t.logout();
      }
      return (
        Ft(n, (m) => {
          m || h();
        }),
        (m, b) => (
          ne(),
          ie('div', rf, [
            c.value
              ? (ne(),
                ie(
                  _e,
                  { key: 0 },
                  [
                    b[6] ||
                      (b[6] = K(
                        'button',
                        {
                          class: 'btn secondary status',
                          type: 'button',
                          'aria-disabled': 'true',
                          tabindex: '-1',
                        },
                        ' Logged in ',
                        -1,
                      )),
                    K(
                      'button',
                      { class: 'btn secondary', onClick: E },
                      'Logout',
                    ),
                  ],
                  64,
                ))
              : (ne(),
                ie(
                  _e,
                  { key: 1 },
                  [
                    K(
                      'button',
                      {
                        class: 'btn',
                        onClick: b[0] || (b[0] = (S) => f('login')),
                      },
                      'Login',
                    ),
                    K(
                      'button',
                      {
                        class: 'btn secondary',
                        onClick: b[1] || (b[1] = (S) => f('register')),
                      },
                      'Register',
                    ),
                  ],
                  64,
                )),
            n.value
              ? (ne(),
                ie(
                  'div',
                  { key: 2, class: 'modal', onClick: pt(a, ['self']) },
                  [
                    K('div', of, [
                      K(
                        'h3',
                        null,
                        Xe(
                          s.value === 'login' ? 'Log in' : 'Create an account',
                        ),
                        1,
                      ),
                      K('div', lf, [
                        fr(
                          K(
                            'input',
                            {
                              class: 'input',
                              'onUpdate:modelValue':
                                b[2] || (b[2] = (S) => (r.value = S)),
                              placeholder: 'Email',
                            },
                            null,
                            512,
                          ),
                          [[$r, r.value]],
                        ),
                      ]),
                      K('div', cf, [
                        fr(
                          K(
                            'input',
                            {
                              class: 'input',
                              type: 'password',
                              'onUpdate:modelValue':
                                b[3] || (b[3] = (S) => (o.value = S)),
                              placeholder: 'Password',
                            },
                            null,
                            512,
                          ),
                          [[$r, o.value]],
                        ),
                      ]),
                      K('div', af, [
                        K(
                          'button',
                          { class: 'btn', onClick: y, disabled: i.value },
                          Xe(s.value === 'login' ? 'Login' : 'Register'),
                          9,
                          uf,
                        ),
                        l.value
                          ? (ne(), ie('span', ff, Xe(l.value), 1))
                          : Lt('', !0),
                      ]),
                      K('div', df, [
                        s.value === 'login'
                          ? (ne(),
                            ie(
                              _e,
                              { key: 0 },
                              [
                                b[7] || (b[7] = Os(' No account? ', -1)),
                                K(
                                  'a',
                                  {
                                    href: '#',
                                    class: 'text-link',
                                    onClick:
                                      b[4] ||
                                      (b[4] = pt(
                                        (S) => (s.value = 'register'),
                                        ['prevent'],
                                      )),
                                  },
                                  'Register',
                                ),
                              ],
                              64,
                            ))
                          : (ne(),
                            ie(
                              _e,
                              { key: 1 },
                              [
                                b[8] ||
                                  (b[8] = Os(' Already have an account? ', -1)),
                                K(
                                  'a',
                                  {
                                    href: '#',
                                    class: 'text-link',
                                    onClick:
                                      b[5] ||
                                      (b[5] = pt(
                                        (S) => (s.value = 'login'),
                                        ['prevent'],
                                      )),
                                  },
                                  'Login',
                                ),
                              ],
                              64,
                            )),
                      ]),
                    ]),
                  ],
                ))
              : Lt('', !0),
          ])
        )
      );
    },
  }),
  pf = { key: 0, class: 'toast' },
  mf = { class: 'tag' },
  gf = { key: 0, class: 'actions' },
  bf = Vn({
    __name: 'Toast',
    props: { text: {}, undo: { type: Boolean }, duration: {} },
    emits: ['cleared', 'undo'],
    setup(e, { emit: t }) {
      const n = e,
        s = t,
        r = Pe(''),
        o = Pe(!1);
      let i = null;
      function l() {
        if ((i && (clearTimeout(i), (i = null)), !n.text && !n.undo)) {
          ((o.value = !1), (r.value = ''));
          return;
        }
        ((r.value = n.text ?? ''),
          (o.value = !0),
          (i = setTimeout(() => {
            ((o.value = !1), (r.value = ''), s('cleared'));
          }, n.duration ?? 5e3)));
      }
      return (
        Ft(() => [n.text, n.undo, n.duration], l, { immediate: !0 }),
        qo(() => {
          i && clearTimeout(i);
        }),
        (c, f) =>
          o.value
            ? (ne(),
              ie('div', pf, [
                K('div', mf, [
                  K('span', null, Xe(r.value), 1),
                  e.undo
                    ? (ne(),
                      ie('span', gf, [
                        K(
                          'button',
                          {
                            class: 'link',
                            onClick: f[0] || (f[0] = (a) => c.$emit('undo')),
                          },
                          'Undo',
                        ),
                      ]))
                    : Lt('', !0),
                ]),
              ]))
            : Lt('', !0)
      );
    },
  }),
  yf = { class: 'container' },
  _f = { class: 'header' },
  wf = { class: 'row', style: { margin: '8px 0 16px' } },
  Sf = { key: 0, class: 'grid' },
  vf = { key: 1, class: 'grid' },
  xf = Vn({
    __name: 'App',
    setup(e) {
      const t = Wi(),
        n = Gu(),
        s = Pe(''),
        r = Pe(!1),
        o = Pe([]);
      async function i() {
        const { data: m } = await ot.get('/cats/random');
        return m;
      }
      async function l() {
        o.value = await Promise.all(Array.from({ length: 8 }).map(() => i()));
      }
      async function c(m) {
        o.value[m] = await i();
      }
      async function f() {
        ((r.value = !1), await l());
      }
      async function a(m) {
        if (!t.isAuthed) {
          s.value = 'Log in to add a favorite';
          return;
        }
        if (n.isFavorited(m.image_url)) {
          s.value = 'Already in favorites';
          return;
        }
        (await n.add(m), (s.value = 'Added to favorites!'));
      }
      async function h(m) {
        (await n.remove(m), (s.value = 'Favorite removed'));
      }
      function y() {
        ((r.value = !r.value), r.value && n.load());
      }
      function E() {}
      return (
        Vo(() => {
          (t.init(), l());
        }),
        (m, b) => (
          ne(),
          ie('div', yf, [
            K('header', _f, [
              b[0] || (b[0] = K('div', { class: 'brand' }, '🐾 Cozy Cats', -1)),
              Ie(hf),
            ]),
            K('div', wf, [
              K('button', { class: 'btn', onClick: f }, 'New cats'),
              Vt(t).isAuthed
                ? (ne(),
                  ie(
                    'button',
                    { key: 0, class: 'btn secondary', onClick: y },
                    Xe(r.value ? 'Show cards' : 'View my favorites'),
                    1,
                  ))
                : Lt('', !0),
            ]),
            !r.value || !Vt(t).isAuthed
              ? (ne(),
                ie('section', Sf, [
                  (ne(!0),
                  ie(
                    _e,
                    null,
                    hr(
                      o.value,
                      (S, P) => (
                        ne(),
                        Rs(
                          ro,
                          di({ key: P }, { ref_for: !0 }, S, {
                            'is-favorite': Vt(n).isFavorited(S.image_url),
                            onRefresh: (D) => c(P),
                            onFavorite: (D) => a(S),
                          }),
                          null,
                          16,
                          ['is-favorite', 'onRefresh', 'onFavorite'],
                        )
                      ),
                    ),
                    128,
                  )),
                ]))
              : (ne(),
                ie('section', vf, [
                  (ne(!0),
                  ie(
                    _e,
                    null,
                    hr(
                      Vt(n).items,
                      (S) => (
                        ne(),
                        Rs(
                          ro,
                          {
                            key: S.id,
                            image_url: S.image_url,
                            fact: S.fact,
                            name: S.name,
                            'is-favorite': !0,
                            removable: !0,
                            onRemove: (P) => h(S.id),
                            onRefresh: E,
                            onFavorite: E,
                          },
                          null,
                          8,
                          ['image_url', 'fact', 'name', 'onRemove'],
                        )
                      ),
                    ),
                    128,
                  )),
                ])),
            Ie(bf, { text: s.value }, null, 8, ['text']),
          ])
        )
      );
    },
  });
fa(xf).use(pa()).mount('#app');
