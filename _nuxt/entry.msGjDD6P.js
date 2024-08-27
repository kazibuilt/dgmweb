var xp = Object.defineProperty;
var Sp = (t, e, n) => e in t ? xp(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : t[e] = n;
var Bt = (t, e, n) => (Sp(t, typeof e != "symbol" ? e + "" : e, n),
n);
/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function qa(t, e) {
    const n = new Set(t.split(","));
    return e ? r => n.has(r.toLowerCase()) : r => n.has(r)
}
const Ee = {}
  , Cr = []
  , wt = () => {}
  , kp = () => !1
  , Ns = t => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && (t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97)
  , Ka = t => t.startsWith("onUpdate:")
  , Ne = Object.assign
  , Ga = (t, e) => {
    const n = t.indexOf(e);
    n > -1 && t.splice(n, 1)
}
  , Rp = Object.prototype.hasOwnProperty
  , ue = (t, e) => Rp.call(t, e)
  , Q = Array.isArray
  , wr = t => Wr(t) === "[object Map]"
  , qc = t => Wr(t) === "[object Set]"
  , Ql = t => Wr(t) === "[object Date]"
  , Ap = t => Wr(t) === "[object RegExp]"
  , ne = t => typeof t == "function"
  , Fe = t => typeof t == "string"
  , An = t => typeof t == "symbol"
  , ye = t => t !== null && typeof t == "object"
  , Ya = t => (ye(t) || ne(t)) && ne(t.then) && ne(t.catch)
  , Kc = Object.prototype.toString
  , Wr = t => Kc.call(t)
  , Fp = t => Wr(t).slice(8, -1)
  , Gc = t => Wr(t) === "[object Object]"
  , Xa = t => Fe(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t
  , ls = qa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted")
  , Wi = t => {
    const e = Object.create(null);
    return n => e[n] || (e[n] = t(n))
}
  , Pp = /-(\w)/g
  , Gt = Wi(t => t.replace(Pp, (e, n) => n ? n.toUpperCase() : ""))
  , Op = /\B([A-Z])/g
  , qr = Wi(t => t.replace(Op, "-$1").toLowerCase())
  , qi = Wi(t => t.charAt(0).toUpperCase() + t.slice(1))
  , mo = Wi(t => t ? `on${qi(t)}` : "")
  , Fn = (t, e) => !Object.is(t, e)
  , Er = (t, e) => {
    for (let n = 0; n < t.length; n++)
        t[n](e)
}
  , gi = (t, e, n) => {
    Object.defineProperty(t, e, {
        configurable: !0,
        enumerable: !1,
        value: n
    })
}
  , Ko = t => {
    const e = parseFloat(t);
    return isNaN(e) ? t : e
}
  , Yc = t => {
    const e = Fe(t) ? Number(t) : NaN;
    return isNaN(e) ? t : e
}
;
let Zl;
const Xc = () => Zl || (Zl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ki(t) {
    if (Q(t)) {
        const e = {};
        for (let n = 0; n < t.length; n++) {
            const r = t[n]
              , s = Fe(r) ? $p(r) : Ki(r);
            if (s)
                for (const i in s)
                    e[i] = s[i]
        }
        return e
    } else if (Fe(t) || ye(t))
        return t
}
const Mp = /;(?![^(]*\))/g
  , Lp = /:([^]+)/
  , Ip = /\/\*[^]*?\*\//g;
function $p(t) {
    const e = {};
    return t.replace(Ip, "").split(Mp).forEach(n => {
        if (n) {
            const r = n.split(Lp);
            r.length > 1 && (e[r[0].trim()] = r[1].trim())
        }
    }
    ),
    e
}
function rr(t) {
    let e = "";
    if (Fe(t))
        e = t;
    else if (Q(t))
        for (let n = 0; n < t.length; n++) {
            const r = rr(t[n]);
            r && (e += r + " ")
        }
    else if (ye(t))
        for (const n in t)
            t[n] && (e += n + " ");
    return e.trim()
}
function Zw(t) {
    if (!t)
        return null;
    let {class: e, style: n} = t;
    return e && !Fe(e) && (t.class = rr(e)),
    n && (t.style = Ki(n)),
    t
}
const Np = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"
  , Bp = qa(Np);
function Jc(t) {
    return !!t || t === ""
}
function Hp(t, e) {
    if (t.length !== e.length)
        return !1;
    let n = !0;
    for (let r = 0; n && r < t.length; r++)
        n = mi(t[r], e[r]);
    return n
}
function mi(t, e) {
    if (t === e)
        return !0;
    let n = Ql(t)
      , r = Ql(e);
    if (n || r)
        return n && r ? t.getTime() === e.getTime() : !1;
    if (n = An(t),
    r = An(e),
    n || r)
        return t === e;
    if (n = Q(t),
    r = Q(e),
    n || r)
        return n && r ? Hp(t, e) : !1;
    if (n = ye(t),
    r = ye(e),
    n || r) {
        if (!n || !r)
            return !1;
        const s = Object.keys(t).length
          , i = Object.keys(e).length;
        if (s !== i)
            return !1;
        for (const o in t) {
            const a = t.hasOwnProperty(o)
              , l = e.hasOwnProperty(o);
            if (a && !l || !a && l || !mi(t[o], e[o]))
                return !1
        }
    }
    return String(t) === String(e)
}
const qt = t => Fe(t) ? t : t == null ? "" : Q(t) || ye(t) && (t.toString === Kc || !ne(t.toString)) ? JSON.stringify(t, Qc, 2) : String(t)
  , Qc = (t, e) => e && e.__v_isRef ? Qc(t, e.value) : wr(e) ? {
    [`Map(${e.size})`]: [...e.entries()].reduce( (n, [r,s], i) => (n[yo(r, i) + " =>"] = s,
    n), {})
} : qc(e) ? {
    [`Set(${e.size})`]: [...e.values()].map(n => yo(n))
} : An(e) ? yo(e) : ye(e) && !Q(e) && !Gc(e) ? String(e) : e
  , yo = (t, e="") => {
    var n;
    return An(t) ? `Symbol(${(n = t.description) != null ? n : e})` : t
}
;
/**
* @vue/reactivity v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ht;
class Zc {
    constructor(e=!1) {
        this.detached = e,
        this._active = !0,
        this.effects = [],
        this.cleanups = [],
        this.parent = ht,
        !e && ht && (this.index = (ht.scopes || (ht.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    run(e) {
        if (this._active) {
            const n = ht;
            try {
                return ht = this,
                e()
            } finally {
                ht = n
            }
        }
    }
    on() {
        ht = this
    }
    off() {
        ht = this.parent
    }
    stop(e) {
        if (this._active) {
            let n, r;
            for (n = 0,
            r = this.effects.length; n < r; n++)
                this.effects[n].stop();
            for (n = 0,
            r = this.cleanups.length; n < r; n++)
                this.cleanups[n]();
            if (this.scopes)
                for (n = 0,
                r = this.scopes.length; n < r; n++)
                    this.scopes[n].stop(!0);
            if (!this.detached && this.parent && !e) {
                const s = this.parent.scopes.pop();
                s && s !== this && (this.parent.scopes[this.index] = s,
                s.index = this.index)
            }
            this.parent = void 0,
            this._active = !1
        }
    }
}
function Ja(t) {
    return new Zc(t)
}
function jp(t, e=ht) {
    e && e.active && e.effects.push(t)
}
function ef() {
    return ht
}
function Vp(t) {
    ht && ht.cleanups.push(t)
}
let Xn;
class Qa {
    constructor(e, n, r, s) {
        this.fn = e,
        this.trigger = n,
        this.scheduler = r,
        this.active = !0,
        this.deps = [],
        this._dirtyLevel = 2,
        this._trackId = 0,
        this._runnings = 0,
        this._shouldSchedule = !1,
        this._depsLength = 0,
        jp(this, s)
    }
    get dirty() {
        if (this._dirtyLevel === 1) {
            lr();
            for (let e = 0; e < this._depsLength; e++) {
                const n = this.deps[e];
                if (n.computed && (Up(n.computed),
                this._dirtyLevel >= 2))
                    break
            }
            this._dirtyLevel < 2 && (this._dirtyLevel = 0),
            ur()
        }
        return this._dirtyLevel >= 2
    }
    set dirty(e) {
        this._dirtyLevel = e ? 2 : 0
    }
    run() {
        if (this._dirtyLevel = 0,
        !this.active)
            return this.fn();
        let e = xn
          , n = Xn;
        try {
            return xn = !0,
            Xn = this,
            this._runnings++,
            eu(this),
            this.fn()
        } finally {
            tu(this),
            this._runnings--,
            Xn = n,
            xn = e
        }
    }
    stop() {
        var e;
        this.active && (eu(this),
        tu(this),
        (e = this.onStop) == null || e.call(this),
        this.active = !1)
    }
}
function Up(t) {
    return t.value
}
function eu(t) {
    t._trackId++,
    t._depsLength = 0
}
function tu(t) {
    if (t.deps && t.deps.length > t._depsLength) {
        for (let e = t._depsLength; e < t.deps.length; e++)
            tf(t.deps[e], t);
        t.deps.length = t._depsLength
    }
}
function tf(t, e) {
    const n = t.get(e);
    n !== void 0 && e._trackId !== n && (t.delete(e),
    t.size === 0 && t.cleanup())
}
let xn = !0
  , Go = 0;
const nf = [];
function lr() {
    nf.push(xn),
    xn = !1
}
function ur() {
    const t = nf.pop();
    xn = t === void 0 ? !0 : t
}
function Za() {
    Go++
}
function el() {
    for (Go--; !Go && Yo.length; )
        Yo.shift()()
}
function rf(t, e, n) {
    if (e.get(t) !== t._trackId) {
        e.set(t, t._trackId);
        const r = t.deps[t._depsLength];
        r !== e ? (r && tf(r, t),
        t.deps[t._depsLength++] = e) : t._depsLength++
    }
}
const Yo = [];
function sf(t, e, n) {
    Za();
    for (const r of t.keys())
        if (r._dirtyLevel < e && t.get(r) === r._trackId) {
            const s = r._dirtyLevel;
            r._dirtyLevel = e,
            s === 0 && (r._shouldSchedule = !0,
            r.trigger())
        }
    of(t),
    el()
}
function of(t) {
    for (const e of t.keys())
        e.scheduler && e._shouldSchedule && (!e._runnings || e.allowRecurse) && t.get(e) === e._trackId && (e._shouldSchedule = !1,
        Yo.push(e.scheduler))
}
const af = (t, e) => {
    const n = new Map;
    return n.cleanup = t,
    n.computed = e,
    n
}
  , yi = new WeakMap
  , Jn = Symbol("")
  , Xo = Symbol("");
function lt(t, e, n) {
    if (xn && Xn) {
        let r = yi.get(t);
        r || yi.set(t, r = new Map);
        let s = r.get(n);
        s || r.set(n, s = af( () => r.delete(n))),
        rf(Xn, s)
    }
}
function nn(t, e, n, r, s, i) {
    const o = yi.get(t);
    if (!o)
        return;
    let a = [];
    if (e === "clear")
        a = [...o.values()];
    else if (n === "length" && Q(t)) {
        const l = Number(r);
        o.forEach( (u, c) => {
            (c === "length" || !An(c) && c >= l) && a.push(u)
        }
        )
    } else
        switch (n !== void 0 && a.push(o.get(n)),
        e) {
        case "add":
            Q(t) ? Xa(n) && a.push(o.get("length")) : (a.push(o.get(Jn)),
            wr(t) && a.push(o.get(Xo)));
            break;
        case "delete":
            Q(t) || (a.push(o.get(Jn)),
            wr(t) && a.push(o.get(Xo)));
            break;
        case "set":
            wr(t) && a.push(o.get(Jn));
            break
        }
    Za();
    for (const l of a)
        l && sf(l, 2);
    el()
}
function zp(t, e) {
    var n;
    return (n = yi.get(t)) == null ? void 0 : n.get(e)
}
const Wp = qa("__proto__,__v_isRef,__isVue")
  , lf = new Set(Object.getOwnPropertyNames(Symbol).filter(t => t !== "arguments" && t !== "caller").map(t => Symbol[t]).filter(An))
  , nu = qp();
function qp() {
    const t = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach(e => {
        t[e] = function(...n) {
            const r = oe(this);
            for (let i = 0, o = this.length; i < o; i++)
                lt(r, "get", i + "");
            const s = r[e](...n);
            return s === -1 || s === !1 ? r[e](...n.map(oe)) : s
        }
    }
    ),
    ["push", "pop", "shift", "unshift", "splice"].forEach(e => {
        t[e] = function(...n) {
            lr(),
            Za();
            const r = oe(this)[e].apply(this, n);
            return el(),
            ur(),
            r
        }
    }
    ),
    t
}
function Kp(t) {
    const e = oe(this);
    return lt(e, "has", t),
    e.hasOwnProperty(t)
}
class uf {
    constructor(e=!1, n=!1) {
        this._isReadonly = e,
        this._shallow = n
    }
    get(e, n, r) {
        const s = this._isReadonly
          , i = this._shallow;
        if (n === "__v_isReactive")
            return !s;
        if (n === "__v_isReadonly")
            return s;
        if (n === "__v_isShallow")
            return i;
        if (n === "__v_raw")
            return r === (s ? i ? o_ : df : i ? hf : ff).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(r) ? e : void 0;
        const o = Q(e);
        if (!s) {
            if (o && ue(nu, n))
                return Reflect.get(nu, n, r);
            if (n === "hasOwnProperty")
                return Kp
        }
        const a = Reflect.get(e, n, r);
        return (An(n) ? lf.has(n) : Wp(n)) || (s || lt(e, "get", n),
        i) ? a : Oe(a) ? o && Xa(n) ? a : a.value : ye(a) ? s ? pf(a) : Yt(a) : a
    }
}
class cf extends uf {
    constructor(e=!1) {
        super(!1, e)
    }
    set(e, n, r, s) {
        let i = e[n];
        if (!this._shallow) {
            const l = sr(i);
            if (!Di(r) && !sr(r) && (i = oe(i),
            r = oe(r)),
            !Q(e) && Oe(i) && !Oe(r))
                return l ? !1 : (i.value = r,
                !0)
        }
        const o = Q(e) && Xa(n) ? Number(n) < e.length : ue(e, n)
          , a = Reflect.set(e, n, r, s);
        return e === oe(s) && (o ? Fn(r, i) && nn(e, "set", n, r) : nn(e, "add", n, r)),
        a
    }
    deleteProperty(e, n) {
        const r = ue(e, n);
        e[n];
        const s = Reflect.deleteProperty(e, n);
        return s && r && nn(e, "delete", n, void 0),
        s
    }
    has(e, n) {
        const r = Reflect.has(e, n);
        return (!An(n) || !lf.has(n)) && lt(e, "has", n),
        r
    }
    ownKeys(e) {
        return lt(e, "iterate", Q(e) ? "length" : Jn),
        Reflect.ownKeys(e)
    }
}
class Gp extends uf {
    constructor(e=!1) {
        super(!0, e)
    }
    set(e, n) {
        return !0
    }
    deleteProperty(e, n) {
        return !0
    }
}
const Yp = new cf
  , Xp = new Gp
  , Jp = new cf(!0)
  , tl = t => t
  , Gi = t => Reflect.getPrototypeOf(t);
function Gs(t, e, n=!1, r=!1) {
    t = t.__v_raw;
    const s = oe(t)
      , i = oe(e);
    n || (Fn(e, i) && lt(s, "get", e),
    lt(s, "get", i));
    const {has: o} = Gi(s)
      , a = r ? tl : n ? sl : bs;
    if (o.call(s, e))
        return a(t.get(e));
    if (o.call(s, i))
        return a(t.get(i));
    t !== s && t.get(e)
}
function Ys(t, e=!1) {
    const n = this.__v_raw
      , r = oe(n)
      , s = oe(t);
    return e || (Fn(t, s) && lt(r, "has", t),
    lt(r, "has", s)),
    t === s ? n.has(t) : n.has(t) || n.has(s)
}
function Xs(t, e=!1) {
    return t = t.__v_raw,
    !e && lt(oe(t), "iterate", Jn),
    Reflect.get(t, "size", t)
}
function ru(t) {
    t = oe(t);
    const e = oe(this);
    return Gi(e).has.call(e, t) || (e.add(t),
    nn(e, "add", t, t)),
    this
}
function su(t, e) {
    e = oe(e);
    const n = oe(this)
      , {has: r, get: s} = Gi(n);
    let i = r.call(n, t);
    i || (t = oe(t),
    i = r.call(n, t));
    const o = s.call(n, t);
    return n.set(t, e),
    i ? Fn(e, o) && nn(n, "set", t, e) : nn(n, "add", t, e),
    this
}
function iu(t) {
    const e = oe(this)
      , {has: n, get: r} = Gi(e);
    let s = n.call(e, t);
    s || (t = oe(t),
    s = n.call(e, t)),
    r && r.call(e, t);
    const i = e.delete(t);
    return s && nn(e, "delete", t, void 0),
    i
}
function ou() {
    const t = oe(this)
      , e = t.size !== 0
      , n = t.clear();
    return e && nn(t, "clear", void 0, void 0),
    n
}
function Js(t, e) {
    return function(r, s) {
        const i = this
          , o = i.__v_raw
          , a = oe(o)
          , l = e ? tl : t ? sl : bs;
        return !t && lt(a, "iterate", Jn),
        o.forEach( (u, c) => r.call(s, l(u), l(c), i))
    }
}
function Qs(t, e, n) {
    return function(...r) {
        const s = this.__v_raw
          , i = oe(s)
          , o = wr(i)
          , a = t === "entries" || t === Symbol.iterator && o
          , l = t === "keys" && o
          , u = s[t](...r)
          , c = n ? tl : e ? sl : bs;
        return !e && lt(i, "iterate", l ? Xo : Jn),
        {
            next() {
                const {value: f, done: h} = u.next();
                return h ? {
                    value: f,
                    done: h
                } : {
                    value: a ? [c(f[0]), c(f[1])] : c(f),
                    done: h
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}
function hn(t) {
    return function(...e) {
        return t === "delete" ? !1 : t === "clear" ? void 0 : this
    }
}
function Qp() {
    const t = {
        get(i) {
            return Gs(this, i)
        },
        get size() {
            return Xs(this)
        },
        has: Ys,
        add: ru,
        set: su,
        delete: iu,
        clear: ou,
        forEach: Js(!1, !1)
    }
      , e = {
        get(i) {
            return Gs(this, i, !1, !0)
        },
        get size() {
            return Xs(this)
        },
        has: Ys,
        add: ru,
        set: su,
        delete: iu,
        clear: ou,
        forEach: Js(!1, !0)
    }
      , n = {
        get(i) {
            return Gs(this, i, !0)
        },
        get size() {
            return Xs(this, !0)
        },
        has(i) {
            return Ys.call(this, i, !0)
        },
        add: hn("add"),
        set: hn("set"),
        delete: hn("delete"),
        clear: hn("clear"),
        forEach: Js(!0, !1)
    }
      , r = {
        get(i) {
            return Gs(this, i, !0, !0)
        },
        get size() {
            return Xs(this, !0)
        },
        has(i) {
            return Ys.call(this, i, !0)
        },
        add: hn("add"),
        set: hn("set"),
        delete: hn("delete"),
        clear: hn("clear"),
        forEach: Js(!0, !0)
    };
    return ["keys", "values", "entries", Symbol.iterator].forEach(i => {
        t[i] = Qs(i, !1, !1),
        n[i] = Qs(i, !0, !1),
        e[i] = Qs(i, !1, !0),
        r[i] = Qs(i, !0, !0)
    }
    ),
    [t, n, e, r]
}
const [Zp,e_,t_,n_] = Qp();
function nl(t, e) {
    const n = e ? t ? n_ : t_ : t ? e_ : Zp;
    return (r, s, i) => s === "__v_isReactive" ? !t : s === "__v_isReadonly" ? t : s === "__v_raw" ? r : Reflect.get(ue(n, s) && s in r ? n : r, s, i)
}
const r_ = {
    get: nl(!1, !1)
}
  , s_ = {
    get: nl(!1, !0)
}
  , i_ = {
    get: nl(!0, !1)
}
  , ff = new WeakMap
  , hf = new WeakMap
  , df = new WeakMap
  , o_ = new WeakMap;
function a_(t) {
    switch (t) {
    case "Object":
    case "Array":
        return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
        return 2;
    default:
        return 0
    }
}
function l_(t) {
    return t.__v_skip || !Object.isExtensible(t) ? 0 : a_(Fp(t))
}
function Yt(t) {
    return sr(t) ? t : rl(t, !1, Yp, r_, ff)
}
function Bs(t) {
    return rl(t, !1, Jp, s_, hf)
}
function pf(t) {
    return rl(t, !0, Xp, i_, df)
}
function rl(t, e, n, r, s) {
    if (!ye(t) || t.__v_raw && !(e && t.__v_isReactive))
        return t;
    const i = s.get(t);
    if (i)
        return i;
    const o = l_(t);
    if (o === 0)
        return t;
    const a = new Proxy(t,o === 2 ? r : n);
    return s.set(t, a),
    a
}
function rn(t) {
    return sr(t) ? rn(t.__v_raw) : !!(t && t.__v_isReactive)
}
function sr(t) {
    return !!(t && t.__v_isReadonly)
}
function Di(t) {
    return !!(t && t.__v_isShallow)
}
function _f(t) {
    return rn(t) || sr(t)
}
function oe(t) {
    const e = t && t.__v_raw;
    return e ? oe(e) : t
}
function Yi(t) {
    return gi(t, "__v_skip", !0),
    t
}
const bs = t => ye(t) ? Yt(t) : t
  , sl = t => ye(t) ? pf(t) : t;
class gf {
    constructor(e, n, r, s) {
        this._setter = n,
        this.dep = void 0,
        this.__v_isRef = !0,
        this.__v_isReadonly = !1,
        this.effect = new Qa( () => e(this._value), () => li(this, 1), () => this.dep && of(this.dep)),
        this.effect.computed = this,
        this.effect.active = this._cacheable = !s,
        this.__v_isReadonly = r
    }
    get value() {
        const e = oe(this);
        return (!e._cacheable || e.effect.dirty) && Fn(e._value, e._value = e.effect.run()) && li(e, 2),
        mf(e),
        e.effect._dirtyLevel >= 1 && li(e, 1),
        e._value
    }
    set value(e) {
        this._setter(e)
    }
    get _dirty() {
        return this.effect.dirty
    }
    set _dirty(e) {
        this.effect.dirty = e
    }
}
function u_(t, e, n=!1) {
    let r, s;
    const i = ne(t);
    return i ? (r = t,
    s = wt) : (r = t.get,
    s = t.set),
    new gf(r,s,i || !s,n)
}
function mf(t) {
    xn && Xn && (t = oe(t),
    rf(Xn, t.dep || (t.dep = af( () => t.dep = void 0, t instanceof gf ? t : void 0))))
}
function li(t, e=2, n) {
    t = oe(t);
    const r = t.dep;
    r && sf(r, e)
}
function Oe(t) {
    return !!(t && t.__v_isRef === !0)
}
function ae(t) {
    return yf(t, !1)
}
function Pr(t) {
    return yf(t, !0)
}
function yf(t, e) {
    return Oe(t) ? t : new c_(t,e)
}
class c_ {
    constructor(e, n) {
        this.__v_isShallow = n,
        this.dep = void 0,
        this.__v_isRef = !0,
        this._rawValue = n ? e : oe(e),
        this._value = n ? e : bs(e)
    }
    get value() {
        return mf(this),
        this._value
    }
    set value(e) {
        const n = this.__v_isShallow || Di(e) || sr(e);
        e = n ? e : oe(e),
        Fn(e, this._rawValue) && (this._rawValue = e,
        this._value = n ? e : bs(e),
        li(this, 2))
    }
}
function q(t) {
    return Oe(t) ? t.value : t
}
const f_ = {
    get: (t, e, n) => q(Reflect.get(t, e, n)),
    set: (t, e, n, r) => {
        const s = t[e];
        return Oe(s) && !Oe(n) ? (s.value = n,
        !0) : Reflect.set(t, e, n, r)
    }
};
function Df(t) {
    return rn(t) ? t : new Proxy(t,f_)
}
function h_(t) {
    const e = Q(t) ? new Array(t.length) : {};
    for (const n in t)
        e[n] = vf(t, n);
    return e
}
class d_ {
    constructor(e, n, r) {
        this._object = e,
        this._key = n,
        this._defaultValue = r,
        this.__v_isRef = !0
    }
    get value() {
        const e = this._object[this._key];
        return e === void 0 ? this._defaultValue : e
    }
    set value(e) {
        this._object[this._key] = e
    }
    get dep() {
        return zp(oe(this._object), this._key)
    }
}
class p_ {
    constructor(e) {
        this._getter = e,
        this.__v_isRef = !0,
        this.__v_isReadonly = !0
    }
    get value() {
        return this._getter()
    }
}
function Xi(t, e, n) {
    return Oe(t) ? t : ne(t) ? new p_(t) : ye(t) && arguments.length > 1 ? vf(t, e, n) : ae(t)
}
function vf(t, e, n) {
    const r = t[e];
    return Oe(r) ? r : new d_(t,e,n)
}
/**
* @vue/runtime-core v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Sn(t, e, n, r) {
    let s;
    try {
        s = r ? t(...r) : t()
    } catch (i) {
        Kr(i, e, n)
    }
    return s
}
function St(t, e, n, r) {
    if (ne(t)) {
        const i = Sn(t, e, n, r);
        return i && Ya(i) && i.catch(o => {
            Kr(o, e, n)
        }
        ),
        i
    }
    const s = [];
    for (let i = 0; i < t.length; i++)
        s.push(St(t[i], e, n, r));
    return s
}
function Kr(t, e, n, r=!0) {
    const s = e ? e.vnode : null;
    if (e) {
        let i = e.parent;
        const o = e.proxy
          , a = `https://vuejs.org/error-reference/#runtime-${n}`;
        for (; i; ) {
            const u = i.ec;
            if (u) {
                for (let c = 0; c < u.length; c++)
                    if (u[c](t, o, a) === !1)
                        return
            }
            i = i.parent
        }
        const l = e.appContext.config.errorHandler;
        if (l) {
            Sn(l, null, 10, [t, o, a]);
            return
        }
    }
    __(t, n, s, r)
}
function __(t, e, n, r=!0) {
    console.error(t)
}
let Cs = !1
  , Jo = !1;
const Ke = [];
let Ut = 0;
const Tr = [];
let yn = null
  , Wn = 0;
const bf = Promise.resolve();
let il = null;
function Ln(t) {
    const e = il || bf;
    return t ? e.then(this ? t.bind(this) : t) : e
}
function g_(t) {
    let e = Ut + 1
      , n = Ke.length;
    for (; e < n; ) {
        const r = e + n >>> 1
          , s = Ke[r]
          , i = ws(s);
        i < t || i === t && s.pre ? e = r + 1 : n = r
    }
    return e
}
function Ji(t) {
    (!Ke.length || !Ke.includes(t, Cs && t.allowRecurse ? Ut + 1 : Ut)) && (t.id == null ? Ke.push(t) : Ke.splice(g_(t.id), 0, t),
    Cf())
}
function Cf() {
    !Cs && !Jo && (Jo = !0,
    il = bf.then(wf))
}
function m_(t) {
    const e = Ke.indexOf(t);
    e > Ut && Ke.splice(e, 1)
}
function Qo(t) {
    Q(t) ? Tr.push(...t) : (!yn || !yn.includes(t, t.allowRecurse ? Wn + 1 : Wn)) && Tr.push(t),
    Cf()
}
function au(t, e, n=Cs ? Ut + 1 : 0) {
    for (; n < Ke.length; n++) {
        const r = Ke[n];
        if (r && r.pre) {
            if (t && r.id !== t.uid)
                continue;
            Ke.splice(n, 1),
            n--,
            r()
        }
    }
}
function vi(t) {
    if (Tr.length) {
        const e = [...new Set(Tr)].sort( (n, r) => ws(n) - ws(r));
        if (Tr.length = 0,
        yn) {
            yn.push(...e);
            return
        }
        for (yn = e,
        Wn = 0; Wn < yn.length; Wn++)
            yn[Wn]();
        yn = null,
        Wn = 0
    }
}
const ws = t => t.id == null ? 1 / 0 : t.id
  , y_ = (t, e) => {
    const n = ws(t) - ws(e);
    if (n === 0) {
        if (t.pre && !e.pre)
            return -1;
        if (e.pre && !t.pre)
            return 1
    }
    return n
}
;
function wf(t) {
    Jo = !1,
    Cs = !0,
    Ke.sort(y_);
    try {
        for (Ut = 0; Ut < Ke.length; Ut++) {
            const e = Ke[Ut];
            e && e.active !== !1 && Sn(e, null, 14)
        }
    } finally {
        Ut = 0,
        Ke.length = 0,
        vi(),
        Cs = !1,
        il = null,
        (Ke.length || Tr.length) && wf()
    }
}
function D_(t, e, ...n) {
    if (t.isUnmounted)
        return;
    const r = t.vnode.props || Ee;
    let s = n;
    const i = e.startsWith("update:")
      , o = i && e.slice(7);
    if (o && o in r) {
        const c = `${o === "modelValue" ? "model" : o}Modifiers`
          , {number: f, trim: h} = r[c] || Ee;
        h && (s = n.map(d => Fe(d) ? d.trim() : d)),
        f && (s = n.map(Ko))
    }
    let a, l = r[a = mo(e)] || r[a = mo(Gt(e))];
    !l && i && (l = r[a = mo(qr(e))]),
    l && St(l, t, 6, s);
    const u = r[a + "Once"];
    if (u) {
        if (!t.emitted)
            t.emitted = {};
        else if (t.emitted[a])
            return;
        t.emitted[a] = !0,
        St(u, t, 6, s)
    }
}
function Ef(t, e, n=!1) {
    const r = e.emitsCache
      , s = r.get(t);
    if (s !== void 0)
        return s;
    const i = t.emits;
    let o = {}
      , a = !1;
    if (!ne(t)) {
        const l = u => {
            const c = Ef(u, e, !0);
            c && (a = !0,
            Ne(o, c))
        }
        ;
        !n && e.mixins.length && e.mixins.forEach(l),
        t.extends && l(t.extends),
        t.mixins && t.mixins.forEach(l)
    }
    return !i && !a ? (ye(t) && r.set(t, null),
    null) : (Q(i) ? i.forEach(l => o[l] = null) : Ne(o, i),
    ye(t) && r.set(t, o),
    o)
}
function Qi(t, e) {
    return !t || !Ns(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""),
    ue(t, e[0].toLowerCase() + e.slice(1)) || ue(t, qr(e)) || ue(t, e))
}
let $e = null
  , Zi = null;
function bi(t) {
    const e = $e;
    return $e = t,
    Zi = t && t.type.__scopeId || null,
    e
}
function ol(t) {
    Zi = t
}
function al() {
    Zi = null
}
function Pn(t, e=$e, n) {
    if (!e || t._n)
        return t;
    const r = (...s) => {
        r._d && vu(-1);
        const i = bi(e);
        let o;
        try {
            o = t(...s)
        } finally {
            bi(i),
            r._d && vu(1)
        }
        return o
    }
    ;
    return r._n = !0,
    r._c = !0,
    r._d = !0,
    r
}
function Do(t) {
    const {type: e, vnode: n, proxy: r, withProxy: s, props: i, propsOptions: [o], slots: a, attrs: l, emit: u, render: c, renderCache: f, data: h, setupState: d, ctx: _, inheritAttrs: p} = t;
    let m, v;
    const D = bi(t);
    try {
        if (n.shapeFlag & 4) {
            const y = s || r
              , C = y;
            m = Ct(c.call(C, y, f, i, d, h, _)),
            v = l
        } else {
            const y = e;
            m = Ct(y.length > 1 ? y(i, {
                attrs: l,
                slots: a,
                emit: u
            }) : y(i, null)),
            v = e.props ? l : b_(l)
        }
    } catch (y) {
        hs.length = 0,
        Kr(y, t, 1),
        m = te(tt)
    }
    let g = m;
    if (v && p !== !1) {
        const y = Object.keys(v)
          , {shapeFlag: C} = g;
        y.length && C & 7 && (o && y.some(Ka) && (v = C_(v, o)),
        g = on(g, v))
    }
    return n.dirs && (g = on(g),
    g.dirs = g.dirs ? g.dirs.concat(n.dirs) : n.dirs),
    n.transition && (g.transition = n.transition),
    m = g,
    bi(D),
    m
}
function v_(t, e=!0) {
    let n;
    for (let r = 0; r < t.length; r++) {
        const s = t[r];
        if (Ir(s)) {
            if (s.type !== tt || s.children === "v-if") {
                if (n)
                    return;
                n = s
            }
        } else
            return
    }
    return n
}
const b_ = t => {
    let e;
    for (const n in t)
        (n === "class" || n === "style" || Ns(n)) && ((e || (e = {}))[n] = t[n]);
    return e
}
  , C_ = (t, e) => {
    const n = {};
    for (const r in t)
        (!Ka(r) || !(r.slice(9)in e)) && (n[r] = t[r]);
    return n
}
;
function w_(t, e, n) {
    const {props: r, children: s, component: i} = t
      , {props: o, children: a, patchFlag: l} = e
      , u = i.emitsOptions;
    if (e.dirs || e.transition)
        return !0;
    if (n && l >= 0) {
        if (l & 1024)
            return !0;
        if (l & 16)
            return r ? lu(r, o, u) : !!o;
        if (l & 8) {
            const c = e.dynamicProps;
            for (let f = 0; f < c.length; f++) {
                const h = c[f];
                if (o[h] !== r[h] && !Qi(u, h))
                    return !0
            }
        }
    } else
        return (s || a) && (!a || !a.$stable) ? !0 : r === o ? !1 : r ? o ? lu(r, o, u) : !0 : !!o;
    return !1
}
function lu(t, e, n) {
    const r = Object.keys(e);
    if (r.length !== Object.keys(t).length)
        return !0;
    for (let s = 0; s < r.length; s++) {
        const i = r[s];
        if (e[i] !== t[i] && !Qi(n, i))
            return !0
    }
    return !1
}
function ll({vnode: t, parent: e}, n) {
    for (; e; ) {
        const r = e.subTree;
        if (r.suspense && r.suspense.activeBranch === t && (r.el = t.el),
        r === t)
            (t = e.vnode).el = n,
            e = e.parent;
        else
            break
    }
}
const ul = "components";
function E_(t, e) {
    return xf(ul, t, !0, e) || t
}
const Tf = Symbol.for("v-ndc");
function us(t) {
    return Fe(t) ? xf(ul, t, !1) || t : t || Tf
}
function xf(t, e, n=!0, r=!1) {
    const s = $e || je;
    if (s) {
        const i = s.type;
        if (t === ul) {
            const a = aa(i, !1);
            if (a && (a === e || a === Gt(e) || a === qi(Gt(e))))
                return i
        }
        const o = uu(s[t] || i[t], e) || uu(s.appContext[t], e);
        return !o && r ? i : o
    }
}
function uu(t, e) {
    return t && (t[e] || t[Gt(e)] || t[qi(Gt(e))])
}
const Sf = t => t.__isSuspense;
let Zo = 0;
const T_ = {
    name: "Suspense",
    __isSuspense: !0,
    process(t, e, n, r, s, i, o, a, l, u) {
        if (t == null)
            x_(e, n, r, s, i, o, a, l, u);
        else {
            if (i && i.deps > 0) {
                e.suspense = t.suspense;
                return
            }
            S_(t, e, n, r, s, o, a, l, u)
        }
    },
    hydrate: k_,
    create: cl,
    normalize: R_
}
  , kf = T_;
function Es(t, e) {
    const n = t.props && t.props[e];
    ne(n) && n()
}
function x_(t, e, n, r, s, i, o, a, l) {
    const {p: u, o: {createElement: c}} = l
      , f = c("div")
      , h = t.suspense = cl(t, s, r, e, f, n, i, o, a, l);
    u(null, h.pendingBranch = t.ssContent, f, null, r, h, i, o),
    h.deps > 0 ? (Es(t, "onPending"),
    Es(t, "onFallback"),
    u(null, t.ssFallback, e, n, r, null, i, o),
    xr(h, t.ssFallback)) : h.resolve(!1, !0)
}
function S_(t, e, n, r, s, i, o, a, {p: l, um: u, o: {createElement: c}}) {
    const f = e.suspense = t.suspense;
    f.vnode = e,
    e.el = t.el;
    const h = e.ssContent
      , d = e.ssFallback
      , {activeBranch: _, pendingBranch: p, isInFallback: m, isHydrating: v} = f;
    if (p)
        f.pendingBranch = h,
        Lt(h, p) ? (l(p, h, f.hiddenContainer, null, s, f, i, o, a),
        f.deps <= 0 ? f.resolve() : m && (v || (l(_, d, n, r, s, null, i, o, a),
        xr(f, d)))) : (f.pendingId = Zo++,
        v ? (f.isHydrating = !1,
        f.activeBranch = p) : u(p, s, f),
        f.deps = 0,
        f.effects.length = 0,
        f.hiddenContainer = c("div"),
        m ? (l(null, h, f.hiddenContainer, null, s, f, i, o, a),
        f.deps <= 0 ? f.resolve() : (l(_, d, n, r, s, null, i, o, a),
        xr(f, d))) : _ && Lt(h, _) ? (l(_, h, n, r, s, f, i, o, a),
        f.resolve(!0)) : (l(null, h, f.hiddenContainer, null, s, f, i, o, a),
        f.deps <= 0 && f.resolve()));
    else if (_ && Lt(h, _))
        l(_, h, n, r, s, f, i, o, a),
        xr(f, h);
    else if (Es(e, "onPending"),
    f.pendingBranch = h,
    h.shapeFlag & 512 ? f.pendingId = h.component.suspenseId : f.pendingId = Zo++,
    l(null, h, f.hiddenContainer, null, s, f, i, o, a),
    f.deps <= 0)
        f.resolve();
    else {
        const {timeout: D, pendingId: g} = f;
        D > 0 ? setTimeout( () => {
            f.pendingId === g && f.fallback(d)
        }
        , D) : D === 0 && f.fallback(d)
    }
}
function cl(t, e, n, r, s, i, o, a, l, u, c=!1) {
    const {p: f, m: h, um: d, n: _, o: {parentNode: p, remove: m}} = u;
    let v;
    const D = A_(t);
    D && e != null && e.pendingBranch && (v = e.pendingId,
    e.deps++);
    const g = t.props ? Yc(t.props.timeout) : void 0
      , y = i
      , C = {
        vnode: t,
        parent: e,
        parentComponent: n,
        namespace: o,
        container: r,
        hiddenContainer: s,
        deps: 0,
        pendingId: Zo++,
        timeout: typeof g == "number" ? g : -1,
        activeBranch: null,
        pendingBranch: null,
        isInFallback: !c,
        isHydrating: c,
        isUnmounted: !1,
        effects: [],
        resolve(E=!1, S=!1) {
            const {vnode: T, activeBranch: x, pendingBranch: k, pendingId: $, effects: A, parentComponent: N, container: ee} = C;
            let X = !1;
            C.isHydrating ? C.isHydrating = !1 : E || (X = x && k.transition && k.transition.mode === "out-in",
            X && (x.transition.afterLeave = () => {
                $ === C.pendingId && (h(k, ee, i === y ? _(x) : i, 0),
                Qo(A))
            }
            ),
            x && (p(x.el) !== C.hiddenContainer && (i = _(x)),
            d(x, N, C, !0)),
            X || h(k, ee, i, 0)),
            xr(C, k),
            C.pendingBranch = null,
            C.isInFallback = !1;
            let F = C.parent
              , j = !1;
            for (; F; ) {
                if (F.pendingBranch) {
                    F.effects.push(...A),
                    j = !0;
                    break
                }
                F = F.parent
            }
            !j && !X && Qo(A),
            C.effects = [],
            D && e && e.pendingBranch && v === e.pendingId && (e.deps--,
            e.deps === 0 && !S && e.resolve()),
            Es(T, "onResolve")
        },
        fallback(E) {
            if (!C.pendingBranch)
                return;
            const {vnode: S, activeBranch: T, parentComponent: x, container: k, namespace: $} = C;
            Es(S, "onFallback");
            const A = _(T)
              , N = () => {
                C.isInFallback && (f(null, E, k, A, x, null, $, a, l),
                xr(C, E))
            }
              , ee = E.transition && E.transition.mode === "out-in";
            ee && (T.transition.afterLeave = N),
            C.isInFallback = !0,
            d(T, x, null, !0),
            ee || N()
        },
        move(E, S, T) {
            C.activeBranch && h(C.activeBranch, E, S, T),
            C.container = E
        },
        next() {
            return C.activeBranch && _(C.activeBranch)
        },
        registerDep(E, S) {
            const T = !!C.pendingBranch;
            T && C.deps++;
            const x = E.vnode.el;
            E.asyncDep.catch(k => {
                Kr(k, E, 0)
            }
            ).then(k => {
                if (E.isUnmounted || C.isUnmounted || C.pendingId !== E.suspenseId)
                    return;
                E.asyncResolved = !0;
                const {vnode: $} = E;
                oa(E, k, !1),
                x && ($.el = x);
                const A = !x && E.subTree.el;
                S(E, $, p(x || E.subTree.el), x ? null : _(E.subTree), C, o, l),
                A && m(A),
                ll(E, $.el),
                T && --C.deps === 0 && C.resolve()
            }
            )
        },
        unmount(E, S) {
            C.isUnmounted = !0,
            C.activeBranch && d(C.activeBranch, n, E, S),
            C.pendingBranch && d(C.pendingBranch, n, E, S)
        }
    };
    return C
}
function k_(t, e, n, r, s, i, o, a, l) {
    const u = e.suspense = cl(e, r, n, t.parentNode, document.createElement("div"), null, s, i, o, a, !0)
      , c = l(t, u.pendingBranch = e.ssContent, n, u, i, o);
    return u.deps === 0 && u.resolve(!1, !0),
    c
}
function R_(t) {
    const {shapeFlag: e, children: n} = t
      , r = e & 32;
    t.ssContent = cu(r ? n.default : n),
    t.ssFallback = r ? cu(n.fallback) : te(tt)
}
function cu(t) {
    let e;
    if (ne(t)) {
        const n = Lr && t._c;
        n && (t._d = !1,
        Te()),
        t = t(),
        n && (t._d = !0,
        e = Et,
        Zf())
    }
    return Q(t) && (t = v_(t)),
    t = Ct(t),
    e && !t.dynamicChildren && (t.dynamicChildren = e.filter(n => n !== t)),
    t
}
function Rf(t, e) {
    e && e.pendingBranch ? Q(t) ? e.effects.push(...t) : e.effects.push(t) : Qo(t)
}
function xr(t, e) {
    t.activeBranch = e;
    const {vnode: n, parentComponent: r} = t;
    let s = e.el;
    for (; !s && e.component; )
        e = e.component.subTree,
        s = e.el;
    n.el = s,
    r && r.subTree === n && (r.vnode.el = s,
    ll(r, s))
}
function A_(t) {
    var e;
    return ((e = t.props) == null ? void 0 : e.suspensible) != null && t.props.suspensible !== !1
}
const F_ = Symbol.for("v-scx")
  , P_ = () => et(F_);
function Af(t, e) {
    return fl(t, null, e)
}
const Zs = {};
function kt(t, e, n) {
    return fl(t, e, n)
}
function fl(t, e, {immediate: n, deep: r, flush: s, once: i, onTrack: o, onTrigger: a}=Ee) {
    if (e && i) {
        const E = e;
        e = (...S) => {
            E(...S),
            C()
        }
    }
    const l = je
      , u = E => r === !0 ? E : Kn(E, r === !1 ? 1 : void 0);
    let c, f = !1, h = !1;
    if (Oe(t) ? (c = () => t.value,
    f = Di(t)) : rn(t) ? (c = () => u(t),
    f = !0) : Q(t) ? (h = !0,
    f = t.some(E => rn(E) || Di(E)),
    c = () => t.map(E => {
        if (Oe(E))
            return E.value;
        if (rn(E))
            return u(E);
        if (ne(E))
            return Sn(E, l, 2)
    }
    )) : ne(t) ? e ? c = () => Sn(t, l, 2) : c = () => (d && d(),
    St(t, l, 3, [_])) : c = wt,
    e && r) {
        const E = c;
        c = () => Kn(E())
    }
    let d, _ = E => {
        d = g.onStop = () => {
            Sn(E, l, 4),
            d = g.onStop = void 0
        }
    }
    , p;
    if (Vs)
        if (_ = wt,
        e ? n && St(e, l, 3, [c(), h ? [] : void 0, _]) : c(),
        s === "sync") {
            const E = P_();
            p = E.__watcherHandles || (E.__watcherHandles = [])
        } else
            return wt;
    let m = h ? new Array(t.length).fill(Zs) : Zs;
    const v = () => {
        if (!(!g.active || !g.dirty))
            if (e) {
                const E = g.run();
                (r || f || (h ? E.some( (S, T) => Fn(S, m[T])) : Fn(E, m))) && (d && d(),
                St(e, l, 3, [E, m === Zs ? void 0 : h && m[0] === Zs ? [] : m, _]),
                m = E)
            } else
                g.run()
    }
    ;
    v.allowRecurse = !!e;
    let D;
    s === "sync" ? D = v : s === "post" ? D = () => We(v, l && l.suspense) : (v.pre = !0,
    l && (v.id = l.uid),
    D = () => Ji(v));
    const g = new Qa(c,wt,D)
      , y = ef()
      , C = () => {
        g.stop(),
        y && Ga(y.effects, g)
    }
    ;
    return e ? n ? v() : m = g.run() : s === "post" ? We(g.run.bind(g), l && l.suspense) : g.run(),
    p && p.push(C),
    C
}
function O_(t, e, n) {
    const r = this.proxy
      , s = Fe(t) ? t.includes(".") ? Ff(r, t) : () => r[t] : t.bind(r, r);
    let i;
    ne(e) ? i = e : (i = e.handler,
    n = e);
    const o = ir(this)
      , a = fl(s, i.bind(r), n);
    return o(),
    a
}
function Ff(t, e) {
    const n = e.split(".");
    return () => {
        let r = t;
        for (let s = 0; s < n.length && r; s++)
            r = r[n[s]];
        return r
    }
}
function Kn(t, e, n=0, r) {
    if (!ye(t) || t.__v_skip)
        return t;
    if (e && e > 0) {
        if (n >= e)
            return t;
        n++
    }
    if (r = r || new Set,
    r.has(t))
        return t;
    if (r.add(t),
    Oe(t))
        Kn(t.value, e, n, r);
    else if (Q(t))
        for (let s = 0; s < t.length; s++)
            Kn(t[s], e, n, r);
    else if (qc(t) || wr(t))
        t.forEach(s => {
            Kn(s, e, n, r)
        }
        );
    else if (Gc(t))
        for (const s in t)
            Kn(t[s], e, n, r);
    return t
}
function ns(t, e) {
    if ($e === null)
        return t;
    const n = ro($e) || $e.proxy
      , r = t.dirs || (t.dirs = []);
    for (let s = 0; s < e.length; s++) {
        let[i,o,a,l=Ee] = e[s];
        i && (ne(i) && (i = {
            mounted: i,
            updated: i
        }),
        i.deep && Kn(o),
        r.push({
            dir: i,
            instance: n,
            value: o,
            oldValue: void 0,
            arg: a,
            modifiers: l
        }))
    }
    return t
}
function jt(t, e, n, r) {
    const s = t.dirs
      , i = e && e.dirs;
    for (let o = 0; o < s.length; o++) {
        const a = s[o];
        i && (a.oldValue = i[o].value);
        let l = a.dir[r];
        l && (lr(),
        St(l, n, 8, [t.el, a, t, e]),
        ur())
    }
}
const Dn = Symbol("_leaveCb")
  , ei = Symbol("_enterCb");
function Pf() {
    const t = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map
    };
    return cn( () => {
        t.isMounted = !0
    }
    ),
    js( () => {
        t.isUnmounting = !0
    }
    ),
    t
}
const vt = [Function, Array]
  , Of = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: vt,
    onEnter: vt,
    onAfterEnter: vt,
    onEnterCancelled: vt,
    onBeforeLeave: vt,
    onLeave: vt,
    onAfterLeave: vt,
    onLeaveCancelled: vt,
    onBeforeAppear: vt,
    onAppear: vt,
    onAfterAppear: vt,
    onAppearCancelled: vt
}
  , M_ = {
    name: "BaseTransition",
    props: Of,
    setup(t, {slots: e}) {
        const n = In()
          , r = Pf();
        let s;
        return () => {
            const i = e.default && hl(e.default(), !0);
            if (!i || !i.length)
                return;
            let o = i[0];
            if (i.length > 1) {
                for (const p of i)
                    if (p.type !== tt) {
                        o = p;
                        break
                    }
            }
            const a = oe(t)
              , {mode: l} = a;
            if (r.isLeaving)
                return vo(o);
            const u = fu(o);
            if (!u)
                return vo(o);
            const c = Ts(u, a, r, n);
            Or(u, c);
            const f = n.subTree
              , h = f && fu(f);
            let d = !1;
            const {getTransitionKey: _} = u.type;
            if (_) {
                const p = _();
                s === void 0 ? s = p : p !== s && (s = p,
                d = !0)
            }
            if (h && h.type !== tt && (!Lt(u, h) || d)) {
                const p = Ts(h, a, r, n);
                if (Or(h, p),
                l === "out-in")
                    return r.isLeaving = !0,
                    p.afterLeave = () => {
                        r.isLeaving = !1,
                        n.update.active !== !1 && (n.effect.dirty = !0,
                        n.update())
                    }
                    ,
                    vo(o);
                l === "in-out" && u.type !== tt && (p.delayLeave = (m, v, D) => {
                    const g = Mf(r, h);
                    g[String(h.key)] = h,
                    m[Dn] = () => {
                        v(),
                        m[Dn] = void 0,
                        delete c.delayedLeave
                    }
                    ,
                    c.delayedLeave = D
                }
                )
            }
            return o
        }
    }
}
  , L_ = M_;
function Mf(t, e) {
    const {leavingVNodes: n} = t;
    let r = n.get(e.type);
    return r || (r = Object.create(null),
    n.set(e.type, r)),
    r
}
function Ts(t, e, n, r) {
    const {appear: s, mode: i, persisted: o=!1, onBeforeEnter: a, onEnter: l, onAfterEnter: u, onEnterCancelled: c, onBeforeLeave: f, onLeave: h, onAfterLeave: d, onLeaveCancelled: _, onBeforeAppear: p, onAppear: m, onAfterAppear: v, onAppearCancelled: D} = e
      , g = String(t.key)
      , y = Mf(n, t)
      , C = (T, x) => {
        T && St(T, r, 9, x)
    }
      , E = (T, x) => {
        const k = x[1];
        C(T, x),
        Q(T) ? T.every($ => $.length <= 1) && k() : T.length <= 1 && k()
    }
      , S = {
        mode: i,
        persisted: o,
        beforeEnter(T) {
            let x = a;
            if (!n.isMounted)
                if (s)
                    x = p || a;
                else
                    return;
            T[Dn] && T[Dn](!0);
            const k = y[g];
            k && Lt(t, k) && k.el[Dn] && k.el[Dn](),
            C(x, [T])
        },
        enter(T) {
            let x = l
              , k = u
              , $ = c;
            if (!n.isMounted)
                if (s)
                    x = m || l,
                    k = v || u,
                    $ = D || c;
                else
                    return;
            let A = !1;
            const N = T[ei] = ee => {
                A || (A = !0,
                ee ? C($, [T]) : C(k, [T]),
                S.delayedLeave && S.delayedLeave(),
                T[ei] = void 0)
            }
            ;
            x ? E(x, [T, N]) : N()
        },
        leave(T, x) {
            const k = String(t.key);
            if (T[ei] && T[ei](!0),
            n.isUnmounting)
                return x();
            C(f, [T]);
            let $ = !1;
            const A = T[Dn] = N => {
                $ || ($ = !0,
                x(),
                N ? C(_, [T]) : C(d, [T]),
                T[Dn] = void 0,
                y[k] === t && delete y[k])
            }
            ;
            y[k] = t,
            h ? E(h, [T, A]) : A()
        },
        clone(T) {
            return Ts(T, e, n, r)
        }
    };
    return S
}
function vo(t) {
    if (Hs(t))
        return t = on(t),
        t.children = null,
        t
}
function fu(t) {
    return Hs(t) ? t.children ? t.children[0] : void 0 : t
}
function Or(t, e) {
    t.shapeFlag & 6 && t.component ? Or(t.component.subTree, e) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent),
    t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e
}
function hl(t, e=!1, n) {
    let r = []
      , s = 0;
    for (let i = 0; i < t.length; i++) {
        let o = t[i];
        const a = n == null ? o.key : String(n) + String(o.key != null ? o.key : i);
        o.type === He ? (o.patchFlag & 128 && s++,
        r = r.concat(hl(o.children, e, a))) : (e || o.type !== tt) && r.push(a != null ? on(o, {
            key: a
        }) : o)
    }
    if (s > 1)
        for (let i = 0; i < r.length; i++)
            r[i].patchFlag = -2;
    return r
}
/*! #__NO_SIDE_EFFECTS__ */
function Je(t, e) {
    return ne(t) ? Ne({
        name: t.name
    }, e, {
        setup: t
    }) : t
}
const Qn = t => !!t.type.__asyncLoader;
/*! #__NO_SIDE_EFFECTS__ */
function Gr(t) {
    ne(t) && (t = {
        loader: t
    });
    const {loader: e, loadingComponent: n, errorComponent: r, delay: s=200, timeout: i, suspensible: o=!0, onError: a} = t;
    let l = null, u, c = 0;
    const f = () => (c++,
    l = null,
    h())
      , h = () => {
        let d;
        return l || (d = l = e().catch(_ => {
            if (_ = _ instanceof Error ? _ : new Error(String(_)),
            a)
                return new Promise( (p, m) => {
                    a(_, () => p(f()), () => m(_), c + 1)
                }
                );
            throw _
        }
        ).then(_ => d !== l && l ? l : (_ && (_.__esModule || _[Symbol.toStringTag] === "Module") && (_ = _.default),
        u = _,
        _)))
    }
    ;
    return Je({
        name: "AsyncComponentWrapper",
        __asyncLoader: h,
        get __asyncResolved() {
            return u
        },
        setup() {
            const d = je;
            if (u)
                return () => bo(u, d);
            const _ = D => {
                l = null,
                Kr(D, d, 13, !r)
            }
            ;
            if (o && d.suspense || Vs)
                return h().then(D => () => bo(D, d)).catch(D => (_(D),
                () => r ? te(r, {
                    error: D
                }) : null));
            const p = ae(!1)
              , m = ae()
              , v = ae(!!s);
            return s && setTimeout( () => {
                v.value = !1
            }
            , s),
            i != null && setTimeout( () => {
                if (!p.value && !m.value) {
                    const D = new Error(`Async component timed out after ${i}ms.`);
                    _(D),
                    m.value = D
                }
            }
            , i),
            h().then( () => {
                p.value = !0,
                d.parent && Hs(d.parent.vnode) && (d.parent.effect.dirty = !0,
                Ji(d.parent.update))
            }
            ).catch(D => {
                _(D),
                m.value = D
            }
            ),
            () => {
                if (p.value && u)
                    return bo(u, d);
                if (m.value && r)
                    return te(r, {
                        error: m.value
                    });
                if (n && !v.value)
                    return te(n)
            }
        }
    })
}
function bo(t, e) {
    const {ref: n, props: r, children: s, ce: i} = e.vnode
      , o = te(t, r, s);
    return o.ref = n,
    o.ce = i,
    delete e.vnode.ce,
    o
}
const Hs = t => t.type.__isKeepAlive
  , I_ = {
    name: "KeepAlive",
    __isKeepAlive: !0,
    props: {
        include: [String, RegExp, Array],
        exclude: [String, RegExp, Array],
        max: [String, Number]
    },
    setup(t, {slots: e}) {
        const n = In()
          , r = n.ctx;
        if (!r.renderer)
            return () => {
                const D = e.default && e.default();
                return D && D.length === 1 ? D[0] : D
            }
            ;
        const s = new Map
          , i = new Set;
        let o = null;
        const a = n.suspense
          , {renderer: {p: l, m: u, um: c, o: {createElement: f}}} = r
          , h = f("div");
        r.activate = (D, g, y, C, E) => {
            const S = D.component;
            u(D, g, y, 0, a),
            l(S.vnode, D, g, y, S, a, C, D.slotScopeIds, E),
            We( () => {
                S.isDeactivated = !1,
                S.a && Er(S.a);
                const T = D.props && D.props.onVnodeMounted;
                T && rt(T, S.parent, D)
            }
            , a)
        }
        ,
        r.deactivate = D => {
            const g = D.component;
            u(D, h, null, 1, a),
            We( () => {
                g.da && Er(g.da);
                const y = D.props && D.props.onVnodeUnmounted;
                y && rt(y, g.parent, D),
                g.isDeactivated = !0
            }
            , a)
        }
        ;
        function d(D) {
            Co(D),
            c(D, n, a, !0)
        }
        function _(D) {
            s.forEach( (g, y) => {
                const C = aa(g.type);
                C && (!D || !D(C)) && p(y)
            }
            )
        }
        function p(D) {
            const g = s.get(D);
            !o || !Lt(g, o) ? d(g) : o && Co(o),
            s.delete(D),
            i.delete(D)
        }
        kt( () => [t.include, t.exclude], ([D,g]) => {
            D && _(y => rs(D, y)),
            g && _(y => !rs(g, y))
        }
        , {
            flush: "post",
            deep: !0
        });
        let m = null;
        const v = () => {
            m != null && s.set(m, wo(n.subTree))
        }
        ;
        return cn(v),
        dl(v),
        js( () => {
            s.forEach(D => {
                const {subTree: g, suspense: y} = n
                  , C = wo(g);
                if (D.type === C.type && D.key === C.key) {
                    Co(C);
                    const E = C.component.da;
                    E && We(E, y);
                    return
                }
                d(D)
            }
            )
        }
        ),
        () => {
            if (m = null,
            !e.default)
                return null;
            const D = e.default()
              , g = D[0];
            if (D.length > 1)
                return o = null,
                D;
            if (!Ir(g) || !(g.shapeFlag & 4) && !(g.shapeFlag & 128))
                return o = null,
                g;
            let y = wo(g);
            const C = y.type
              , E = aa(Qn(y) ? y.type.__asyncResolved || {} : C)
              , {include: S, exclude: T, max: x} = t;
            if (S && (!E || !rs(S, E)) || T && E && rs(T, E))
                return o = y,
                g;
            const k = y.key == null ? C : y.key
              , $ = s.get(k);
            return y.el && (y = on(y),
            g.shapeFlag & 128 && (g.ssContent = y)),
            m = k,
            $ ? (y.el = $.el,
            y.component = $.component,
            y.transition && Or(y, y.transition),
            y.shapeFlag |= 512,
            i.delete(k),
            i.add(k)) : (i.add(k),
            x && i.size > parseInt(x, 10) && p(i.values().next().value)),
            y.shapeFlag |= 256,
            o = y,
            Sf(g.type) ? g : y
        }
    }
}
  , $_ = I_;
function rs(t, e) {
    return Q(t) ? t.some(n => rs(n, e)) : Fe(t) ? t.split(",").includes(e) : Ap(t) ? t.test(e) : !1
}
function Lf(t, e) {
    $f(t, "a", e)
}
function If(t, e) {
    $f(t, "da", e)
}
function $f(t, e, n=je) {
    const r = t.__wdc || (t.__wdc = () => {
        let s = n;
        for (; s; ) {
            if (s.isDeactivated)
                return;
            s = s.parent
        }
        return t()
    }
    );
    if (eo(e, r, n),
    n) {
        let s = n.parent;
        for (; s && s.parent; )
            Hs(s.parent.vnode) && N_(r, e, n, s),
            s = s.parent
    }
}
function N_(t, e, n, r) {
    const s = eo(e, t, r, !0);
    sn( () => {
        Ga(r[e], s)
    }
    , n)
}
function Co(t) {
    t.shapeFlag &= -257,
    t.shapeFlag &= -513
}
function wo(t) {
    return t.shapeFlag & 128 ? t.ssContent : t
}
function eo(t, e, n=je, r=!1) {
    if (n) {
        const s = n[t] || (n[t] = [])
          , i = e.__weh || (e.__weh = (...o) => {
            if (n.isUnmounted)
                return;
            lr();
            const a = ir(n)
              , l = St(e, n, t, o);
            return a(),
            ur(),
            l
        }
        );
        return r ? s.unshift(i) : s.push(i),
        i
    }
}
const un = t => (e, n=je) => (!Vs || t === "sp") && eo(t, (...r) => e(...r), n)
  , Nf = un("bm")
  , cn = un("m")
  , B_ = un("bu")
  , dl = un("u")
  , js = un("bum")
  , sn = un("um")
  , H_ = un("sp")
  , j_ = un("rtg")
  , V_ = un("rtc");
function Bf(t, e=je) {
    eo("ec", t, e)
}
function U_(t, e, n, r) {
    let s;
    const i = n && n[r];
    if (Q(t) || Fe(t)) {
        s = new Array(t.length);
        for (let o = 0, a = t.length; o < a; o++)
            s[o] = e(t[o], o, void 0, i && i[o])
    } else if (typeof t == "number") {
        s = new Array(t);
        for (let o = 0; o < t; o++)
            s[o] = e(o + 1, o, void 0, i && i[o])
    } else if (ye(t))
        if (t[Symbol.iterator])
            s = Array.from(t, (o, a) => e(o, a, void 0, i && i[a]));
        else {
            const o = Object.keys(t);
            s = new Array(o.length);
            for (let a = 0, l = o.length; a < l; a++) {
                const u = o[a];
                s[a] = e(t[u], u, a, i && i[a])
            }
        }
    else
        s = [];
    return n && (n[r] = s),
    s
}
function Hf(t, e, n={}, r, s) {
    if ($e.isCE || $e.parent && Qn($e.parent) && $e.parent.isCE)
        return e !== "default" && (n.name = e),
        te("slot", n, r && r());
    let i = t[e];
    i && i._c && (i._d = !1),
    Te();
    const o = i && jf(i(n))
      , a = Mt(He, {
        key: n.key || o && o.key || `_${e}`
    }, o || (r ? r() : []), o && t._ === 1 ? 64 : -2);
    return !s && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]),
    i && i._c && (i._d = !0),
    a
}
function jf(t) {
    return t.some(e => Ir(e) ? !(e.type === tt || e.type === He && !jf(e.children)) : !0) ? t : null
}
const ea = t => t ? nh(t) ? ro(t) || t.proxy : ea(t.parent) : null
  , cs = Ne(Object.create(null), {
    $: t => t,
    $el: t => t.vnode.el,
    $data: t => t.data,
    $props: t => t.props,
    $attrs: t => t.attrs,
    $slots: t => t.slots,
    $refs: t => t.refs,
    $parent: t => ea(t.parent),
    $root: t => ea(t.root),
    $emit: t => t.emit,
    $options: t => pl(t),
    $forceUpdate: t => t.f || (t.f = () => {
        t.effect.dirty = !0,
        Ji(t.update)
    }
    ),
    $nextTick: t => t.n || (t.n = Ln.bind(t.proxy)),
    $watch: t => O_.bind(t)
})
  , Eo = (t, e) => t !== Ee && !t.__isScriptSetup && ue(t, e)
  , z_ = {
    get({_: t}, e) {
        const {ctx: n, setupState: r, data: s, props: i, accessCache: o, type: a, appContext: l} = t;
        let u;
        if (e[0] !== "$") {
            const d = o[e];
            if (d !== void 0)
                switch (d) {
                case 1:
                    return r[e];
                case 2:
                    return s[e];
                case 4:
                    return n[e];
                case 3:
                    return i[e]
                }
            else {
                if (Eo(r, e))
                    return o[e] = 1,
                    r[e];
                if (s !== Ee && ue(s, e))
                    return o[e] = 2,
                    s[e];
                if ((u = t.propsOptions[0]) && ue(u, e))
                    return o[e] = 3,
                    i[e];
                if (n !== Ee && ue(n, e))
                    return o[e] = 4,
                    n[e];
                ta && (o[e] = 0)
            }
        }
        const c = cs[e];
        let f, h;
        if (c)
            return e === "$attrs" && lt(t, "get", e),
            c(t);
        if ((f = a.__cssModules) && (f = f[e]))
            return f;
        if (n !== Ee && ue(n, e))
            return o[e] = 4,
            n[e];
        if (h = l.config.globalProperties,
        ue(h, e))
            return h[e]
    },
    set({_: t}, e, n) {
        const {data: r, setupState: s, ctx: i} = t;
        return Eo(s, e) ? (s[e] = n,
        !0) : r !== Ee && ue(r, e) ? (r[e] = n,
        !0) : ue(t.props, e) || e[0] === "$" && e.slice(1)in t ? !1 : (i[e] = n,
        !0)
    },
    has({_: {data: t, setupState: e, accessCache: n, ctx: r, appContext: s, propsOptions: i}}, o) {
        let a;
        return !!n[o] || t !== Ee && ue(t, o) || Eo(e, o) || (a = i[0]) && ue(a, o) || ue(r, o) || ue(cs, o) || ue(s.config.globalProperties, o)
    },
    defineProperty(t, e, n) {
        return n.get != null ? t._.accessCache[e] = 0 : ue(n, "value") && this.set(t, e, n.value, null),
        Reflect.defineProperty(t, e, n)
    }
};
function e1() {
    return W_().slots
}
function W_() {
    const t = In();
    return t.setupContext || (t.setupContext = sh(t))
}
function hu(t) {
    return Q(t) ? t.reduce( (e, n) => (e[n] = null,
    e), {}) : t
}
function xs(t) {
    const e = In();
    let n = t();
    return ia(),
    Ya(n) && (n = n.catch(r => {
        throw ir(e),
        r
    }
    )),
    [n, () => ir(e)]
}
let ta = !0;
function q_(t) {
    const e = pl(t)
      , n = t.proxy
      , r = t.ctx;
    ta = !1,
    e.beforeCreate && du(e.beforeCreate, t, "bc");
    const {data: s, computed: i, methods: o, watch: a, provide: l, inject: u, created: c, beforeMount: f, mounted: h, beforeUpdate: d, updated: _, activated: p, deactivated: m, beforeDestroy: v, beforeUnmount: D, destroyed: g, unmounted: y, render: C, renderTracked: E, renderTriggered: S, errorCaptured: T, serverPrefetch: x, expose: k, inheritAttrs: $, components: A, directives: N, filters: ee} = e;
    if (u && K_(u, r, null),
    o)
        for (const j in o) {
            const V = o[j];
            ne(V) && (r[j] = V.bind(n))
        }
    if (s) {
        const j = s.call(n, n);
        ye(j) && (t.data = Yt(j))
    }
    if (ta = !0,
    i)
        for (const j in i) {
            const V = i[j]
              , L = ne(V) ? V.bind(n, n) : ne(V.get) ? V.get.bind(n, n) : wt
              , Me = !ne(V) && ne(V.set) ? V.set.bind(n) : wt
              , ve = qe({
                get: L,
                set: Me
            });
            Object.defineProperty(r, j, {
                enumerable: !0,
                configurable: !0,
                get: () => ve.value,
                set: he => ve.value = he
            })
        }
    if (a)
        for (const j in a)
            Vf(a[j], r, n, j);
    if (l) {
        const j = ne(l) ? l.call(n) : l;
        Reflect.ownKeys(j).forEach(V => {
            Sr(V, j[V])
        }
        )
    }
    c && du(c, t, "c");
    function F(j, V) {
        Q(V) ? V.forEach(L => j(L.bind(n))) : V && j(V.bind(n))
    }
    if (F(Nf, f),
    F(cn, h),
    F(B_, d),
    F(dl, _),
    F(Lf, p),
    F(If, m),
    F(Bf, T),
    F(V_, E),
    F(j_, S),
    F(js, D),
    F(sn, y),
    F(H_, x),
    Q(k))
        if (k.length) {
            const j = t.exposed || (t.exposed = {});
            k.forEach(V => {
                Object.defineProperty(j, V, {
                    get: () => n[V],
                    set: L => n[V] = L
                })
            }
            )
        } else
            t.exposed || (t.exposed = {});
    C && t.render === wt && (t.render = C),
    $ != null && (t.inheritAttrs = $),
    A && (t.components = A),
    N && (t.directives = N)
}
function K_(t, e, n=wt) {
    Q(t) && (t = na(t));
    for (const r in t) {
        const s = t[r];
        let i;
        ye(s) ? "default"in s ? i = et(s.from || r, s.default, !0) : i = et(s.from || r) : i = et(s),
        Oe(i) ? Object.defineProperty(e, r, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: o => i.value = o
        }) : e[r] = i
    }
}
function du(t, e, n) {
    St(Q(t) ? t.map(r => r.bind(e.proxy)) : t.bind(e.proxy), e, n)
}
function Vf(t, e, n, r) {
    const s = r.includes(".") ? Ff(n, r) : () => n[r];
    if (Fe(t)) {
        const i = e[t];
        ne(i) && kt(s, i)
    } else if (ne(t))
        kt(s, t.bind(n));
    else if (ye(t))
        if (Q(t))
            t.forEach(i => Vf(i, e, n, r));
        else {
            const i = ne(t.handler) ? t.handler.bind(n) : e[t.handler];
            ne(i) && kt(s, i, t)
        }
}
function pl(t) {
    const e = t.type
      , {mixins: n, extends: r} = e
      , {mixins: s, optionsCache: i, config: {optionMergeStrategies: o}} = t.appContext
      , a = i.get(e);
    let l;
    return a ? l = a : !s.length && !n && !r ? l = e : (l = {},
    s.length && s.forEach(u => Ci(l, u, o, !0)),
    Ci(l, e, o)),
    ye(e) && i.set(e, l),
    l
}
function Ci(t, e, n, r=!1) {
    const {mixins: s, extends: i} = e;
    i && Ci(t, i, n, !0),
    s && s.forEach(o => Ci(t, o, n, !0));
    for (const o in e)
        if (!(r && o === "expose")) {
            const a = G_[o] || n && n[o];
            t[o] = a ? a(t[o], e[o]) : e[o]
        }
    return t
}
const G_ = {
    data: pu,
    props: _u,
    emits: _u,
    methods: ss,
    computed: ss,
    beforeCreate: Qe,
    created: Qe,
    beforeMount: Qe,
    mounted: Qe,
    beforeUpdate: Qe,
    updated: Qe,
    beforeDestroy: Qe,
    beforeUnmount: Qe,
    destroyed: Qe,
    unmounted: Qe,
    activated: Qe,
    deactivated: Qe,
    errorCaptured: Qe,
    serverPrefetch: Qe,
    components: ss,
    directives: ss,
    watch: X_,
    provide: pu,
    inject: Y_
};
function pu(t, e) {
    return e ? t ? function() {
        return Ne(ne(t) ? t.call(this, this) : t, ne(e) ? e.call(this, this) : e)
    }
    : e : t
}
function Y_(t, e) {
    return ss(na(t), na(e))
}
function na(t) {
    if (Q(t)) {
        const e = {};
        for (let n = 0; n < t.length; n++)
            e[t[n]] = t[n];
        return e
    }
    return t
}
function Qe(t, e) {
    return t ? [...new Set([].concat(t, e))] : e
}
function ss(t, e) {
    return t ? Ne(Object.create(null), t, e) : e
}
function _u(t, e) {
    return t ? Q(t) && Q(e) ? [...new Set([...t, ...e])] : Ne(Object.create(null), hu(t), hu(e ?? {})) : e
}
function X_(t, e) {
    if (!t)
        return e;
    if (!e)
        return t;
    const n = Ne(Object.create(null), t);
    for (const r in e)
        n[r] = Qe(t[r], e[r]);
    return n
}
function Uf() {
    return {
        app: null,
        config: {
            isNativeTag: kp,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let J_ = 0;
function Q_(t, e) {
    return function(r, s=null) {
        ne(r) || (r = Ne({}, r)),
        s != null && !ye(s) && (s = null);
        const i = Uf()
          , o = new WeakSet;
        let a = !1;
        const l = i.app = {
            _uid: J_++,
            _component: r,
            _props: s,
            _container: null,
            _context: i,
            _instance: null,
            version: ih,
            get config() {
                return i.config
            },
            set config(u) {},
            use(u, ...c) {
                return o.has(u) || (u && ne(u.install) ? (o.add(u),
                u.install(l, ...c)) : ne(u) && (o.add(u),
                u(l, ...c))),
                l
            },
            mixin(u) {
                return i.mixins.includes(u) || i.mixins.push(u),
                l
            },
            component(u, c) {
                return c ? (i.components[u] = c,
                l) : i.components[u]
            },
            directive(u, c) {
                return c ? (i.directives[u] = c,
                l) : i.directives[u]
            },
            mount(u, c, f) {
                if (!a) {
                    const h = te(r, s);
                    return h.appContext = i,
                    f === !0 ? f = "svg" : f === !1 && (f = void 0),
                    c && e ? e(h, u) : t(h, u, f),
                    a = !0,
                    l._container = u,
                    u.__vue_app__ = l,
                    ro(h.component) || h.component.proxy
                }
            },
            unmount() {
                a && (t(null, l._container),
                delete l._container.__vue_app__)
            },
            provide(u, c) {
                return i.provides[u] = c,
                l
            },
            runWithContext(u) {
                Ss = l;
                try {
                    return u()
                } finally {
                    Ss = null
                }
            }
        };
        return l
    }
}
let Ss = null;
function Sr(t, e) {
    if (je) {
        let n = je.provides;
        const r = je.parent && je.parent.provides;
        r === n && (n = je.provides = Object.create(r)),
        n[t] = e
    }
}
function et(t, e, n=!1) {
    const r = je || $e;
    if (r || Ss) {
        const s = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : Ss._context.provides;
        if (s && t in s)
            return s[t];
        if (arguments.length > 1)
            return n && ne(e) ? e.call(r && r.proxy) : e
    }
}
function _l() {
    return !!(je || $e || Ss)
}
function Z_(t, e, n, r=!1) {
    const s = {}
      , i = {};
    gi(i, to, 1),
    t.propsDefaults = Object.create(null),
    zf(t, e, s, i);
    for (const o in t.propsOptions[0])
        o in s || (s[o] = void 0);
    n ? t.props = r ? s : Bs(s) : t.type.props ? t.props = s : t.props = i,
    t.attrs = i
}
function eg(t, e, n, r) {
    const {props: s, attrs: i, vnode: {patchFlag: o}} = t
      , a = oe(s)
      , [l] = t.propsOptions;
    let u = !1;
    if ((r || o > 0) && !(o & 16)) {
        if (o & 8) {
            const c = t.vnode.dynamicProps;
            for (let f = 0; f < c.length; f++) {
                let h = c[f];
                if (Qi(t.emitsOptions, h))
                    continue;
                const d = e[h];
                if (l)
                    if (ue(i, h))
                        d !== i[h] && (i[h] = d,
                        u = !0);
                    else {
                        const _ = Gt(h);
                        s[_] = ra(l, a, _, d, t, !1)
                    }
                else
                    d !== i[h] && (i[h] = d,
                    u = !0)
            }
        }
    } else {
        zf(t, e, s, i) && (u = !0);
        let c;
        for (const f in a)
            (!e || !ue(e, f) && ((c = qr(f)) === f || !ue(e, c))) && (l ? n && (n[f] !== void 0 || n[c] !== void 0) && (s[f] = ra(l, a, f, void 0, t, !0)) : delete s[f]);
        if (i !== a)
            for (const f in i)
                (!e || !ue(e, f)) && (delete i[f],
                u = !0)
    }
    u && nn(t, "set", "$attrs")
}
function zf(t, e, n, r) {
    const [s,i] = t.propsOptions;
    let o = !1, a;
    if (e)
        for (let l in e) {
            if (ls(l))
                continue;
            const u = e[l];
            let c;
            s && ue(s, c = Gt(l)) ? !i || !i.includes(c) ? n[c] = u : (a || (a = {}))[c] = u : Qi(t.emitsOptions, l) || (!(l in r) || u !== r[l]) && (r[l] = u,
            o = !0)
        }
    if (i) {
        const l = oe(n)
          , u = a || Ee;
        for (let c = 0; c < i.length; c++) {
            const f = i[c];
            n[f] = ra(s, l, f, u[f], t, !ue(u, f))
        }
    }
    return o
}
function ra(t, e, n, r, s, i) {
    const o = t[n];
    if (o != null) {
        const a = ue(o, "default");
        if (a && r === void 0) {
            const l = o.default;
            if (o.type !== Function && !o.skipFactory && ne(l)) {
                const {propsDefaults: u} = s;
                if (n in u)
                    r = u[n];
                else {
                    const c = ir(s);
                    r = u[n] = l.call(null, e),
                    c()
                }
            } else
                r = l
        }
        o[0] && (i && !a ? r = !1 : o[1] && (r === "" || r === qr(n)) && (r = !0))
    }
    return r
}
function Wf(t, e, n=!1) {
    const r = e.propsCache
      , s = r.get(t);
    if (s)
        return s;
    const i = t.props
      , o = {}
      , a = [];
    let l = !1;
    if (!ne(t)) {
        const c = f => {
            l = !0;
            const [h,d] = Wf(f, e, !0);
            Ne(o, h),
            d && a.push(...d)
        }
        ;
        !n && e.mixins.length && e.mixins.forEach(c),
        t.extends && c(t.extends),
        t.mixins && t.mixins.forEach(c)
    }
    if (!i && !l)
        return ye(t) && r.set(t, Cr),
        Cr;
    if (Q(i))
        for (let c = 0; c < i.length; c++) {
            const f = Gt(i[c]);
            gu(f) && (o[f] = Ee)
        }
    else if (i)
        for (const c in i) {
            const f = Gt(c);
            if (gu(f)) {
                const h = i[c]
                  , d = o[f] = Q(h) || ne(h) ? {
                    type: h
                } : Ne({}, h);
                if (d) {
                    const _ = Du(Boolean, d.type)
                      , p = Du(String, d.type);
                    d[0] = _ > -1,
                    d[1] = p < 0 || _ < p,
                    (_ > -1 || ue(d, "default")) && a.push(f)
                }
            }
        }
    const u = [o, a];
    return ye(t) && r.set(t, u),
    u
}
function gu(t) {
    return t[0] !== "$"
}
function mu(t) {
    const e = t && t.toString().match(/^\s*(function|class) (\w+)/);
    return e ? e[2] : t === null ? "null" : ""
}
function yu(t, e) {
    return mu(t) === mu(e)
}
function Du(t, e) {
    return Q(e) ? e.findIndex(n => yu(n, t)) : ne(e) && yu(e, t) ? 0 : -1
}
const qf = t => t[0] === "_" || t === "$stable"
  , gl = t => Q(t) ? t.map(Ct) : [Ct(t)]
  , tg = (t, e, n) => {
    if (e._n)
        return e;
    const r = Pn( (...s) => gl(e(...s)), n);
    return r._c = !1,
    r
}
  , Kf = (t, e, n) => {
    const r = t._ctx;
    for (const s in t) {
        if (qf(s))
            continue;
        const i = t[s];
        if (ne(i))
            e[s] = tg(s, i, r);
        else if (i != null) {
            const o = gl(i);
            e[s] = () => o
        }
    }
}
  , Gf = (t, e) => {
    const n = gl(e);
    t.slots.default = () => n
}
  , ng = (t, e) => {
    if (t.vnode.shapeFlag & 32) {
        const n = e._;
        n ? (t.slots = oe(e),
        gi(e, "_", n)) : Kf(e, t.slots = {})
    } else
        t.slots = {},
        e && Gf(t, e);
    gi(t.slots, to, 1)
}
  , rg = (t, e, n) => {
    const {vnode: r, slots: s} = t;
    let i = !0
      , o = Ee;
    if (r.shapeFlag & 32) {
        const a = e._;
        a ? n && a === 1 ? i = !1 : (Ne(s, e),
        !n && a === 1 && delete s._) : (i = !e.$stable,
        Kf(e, s)),
        o = e
    } else
        e && (Gf(t, e),
        o = {
            default: 1
        });
    if (i)
        for (const a in s)
            !qf(a) && o[a] == null && delete s[a]
}
;
function wi(t, e, n, r, s=!1) {
    if (Q(t)) {
        t.forEach( (h, d) => wi(h, e && (Q(e) ? e[d] : e), n, r, s));
        return
    }
    if (Qn(r) && !s)
        return;
    const i = r.shapeFlag & 4 ? ro(r.component) || r.component.proxy : r.el
      , o = s ? null : i
      , {i: a, r: l} = t
      , u = e && e.r
      , c = a.refs === Ee ? a.refs = {} : a.refs
      , f = a.setupState;
    if (u != null && u !== l && (Fe(u) ? (c[u] = null,
    ue(f, u) && (f[u] = null)) : Oe(u) && (u.value = null)),
    ne(l))
        Sn(l, a, 12, [o, c]);
    else {
        const h = Fe(l)
          , d = Oe(l)
          , _ = t.f;
        if (h || d) {
            const p = () => {
                if (_) {
                    const m = h ? ue(f, l) ? f[l] : c[l] : l.value;
                    s ? Q(m) && Ga(m, i) : Q(m) ? m.includes(i) || m.push(i) : h ? (c[l] = [i],
                    ue(f, l) && (f[l] = c[l])) : (l.value = [i],
                    t.k && (c[t.k] = l.value))
                } else
                    h ? (c[l] = o,
                    ue(f, l) && (f[l] = o)) : d && (l.value = o,
                    t.k && (c[t.k] = o))
            }
            ;
            s || _ ? p() : (p.id = -1,
            We(p, n))
        }
    }
}
let dn = !1;
const sg = t => t.namespaceURI.includes("svg") && t.tagName !== "foreignObject"
  , ig = t => t.namespaceURI.includes("MathML")
  , ti = t => {
    if (sg(t))
        return "svg";
    if (ig(t))
        return "mathml"
}
  , ni = t => t.nodeType === 8;
function og(t) {
    const {mt: e, p: n, o: {patchProp: r, createText: s, nextSibling: i, parentNode: o, remove: a, insert: l, createComment: u}} = t
      , c = (g, y) => {
        if (!y.hasChildNodes()) {
            n(null, g, y),
            vi(),
            y._vnode = g;
            return
        }
        dn = !1,
        f(y.firstChild, g, null, null, null),
        vi(),
        y._vnode = g,
        dn && console.error("Hydration completed but contains mismatches.")
    }
      , f = (g, y, C, E, S, T=!1) => {
        const x = ni(g) && g.data === "["
          , k = () => p(g, y, C, E, S, x)
          , {type: $, ref: A, shapeFlag: N, patchFlag: ee} = y;
        let X = g.nodeType;
        y.el = g,
        ee === -2 && (T = !1,
        y.dynamicChildren = null);
        let F = null;
        switch ($) {
        case Mr:
            X !== 3 ? y.children === "" ? (l(y.el = s(""), o(g), g),
            F = g) : F = k() : (g.data !== y.children && (dn = !0,
            g.data = y.children),
            F = i(g));
            break;
        case tt:
            D(g) ? (F = i(g),
            v(y.el = g.content.firstChild, g, C)) : X !== 8 || x ? F = k() : F = i(g);
            break;
        case fs:
            if (x && (g = i(g),
            X = g.nodeType),
            X === 1 || X === 3) {
                F = g;
                const j = !y.children.length;
                for (let V = 0; V < y.staticCount; V++)
                    j && (y.children += F.nodeType === 1 ? F.outerHTML : F.data),
                    V === y.staticCount - 1 && (y.anchor = F),
                    F = i(F);
                return x ? i(F) : F
            } else
                k();
            break;
        case He:
            x ? F = _(g, y, C, E, S, T) : F = k();
            break;
        default:
            if (N & 1)
                (X !== 1 || y.type.toLowerCase() !== g.tagName.toLowerCase()) && !D(g) ? F = k() : F = h(g, y, C, E, S, T);
            else if (N & 6) {
                y.slotScopeIds = S;
                const j = o(g);
                if (x ? F = m(g) : ni(g) && g.data === "teleport start" ? F = m(g, g.data, "teleport end") : F = i(g),
                e(y, j, null, C, E, ti(j), T),
                Qn(y)) {
                    let V;
                    x ? (V = te(He),
                    V.anchor = F ? F.previousSibling : j.lastChild) : V = g.nodeType === 3 ? ks("") : te("div"),
                    V.el = g,
                    y.component.subTree = V
                }
            } else
                N & 64 ? X !== 8 ? F = k() : F = y.type.hydrate(g, y, C, E, S, T, t, d) : N & 128 && (F = y.type.hydrate(g, y, C, E, ti(o(g)), S, T, t, f))
        }
        return A != null && wi(A, null, E, y),
        F
    }
      , h = (g, y, C, E, S, T) => {
        T = T || !!y.dynamicChildren;
        const {type: x, props: k, patchFlag: $, shapeFlag: A, dirs: N, transition: ee} = y
          , X = x === "input" || x === "option";
        if (X || $ !== -1) {
            N && jt(y, null, C, "created");
            let F = !1;
            if (D(g)) {
                F = Xf(E, ee) && C && C.vnode.props && C.vnode.props.appear;
                const V = g.content.firstChild;
                F && ee.beforeEnter(V),
                v(V, g, C),
                y.el = g = V
            }
            if (A & 16 && !(k && (k.innerHTML || k.textContent))) {
                let V = d(g.firstChild, y, g, C, E, S, T);
                for (; V; ) {
                    dn = !0;
                    const L = V;
                    V = V.nextSibling,
                    a(L)
                }
            } else
                A & 8 && g.textContent !== y.children && (dn = !0,
                g.textContent = y.children);
            if (k)
                if (X || !T || $ & 48)
                    for (const V in k)
                        (X && (V.endsWith("value") || V === "indeterminate") || Ns(V) && !ls(V) || V[0] === ".") && r(g, V, null, k[V], void 0, void 0, C);
                else
                    k.onClick && r(g, "onClick", null, k.onClick, void 0, void 0, C);
            let j;
            (j = k && k.onVnodeBeforeMount) && rt(j, C, y),
            N && jt(y, null, C, "beforeMount"),
            ((j = k && k.onVnodeMounted) || N || F) && Rf( () => {
                j && rt(j, C, y),
                F && ee.enter(g),
                N && jt(y, null, C, "mounted")
            }
            , E)
        }
        return g.nextSibling
    }
      , d = (g, y, C, E, S, T, x) => {
        x = x || !!y.dynamicChildren;
        const k = y.children
          , $ = k.length;
        for (let A = 0; A < $; A++) {
            const N = x ? k[A] : k[A] = Ct(k[A]);
            if (g)
                g = f(g, N, E, S, T, x);
            else {
                if (N.type === Mr && !N.children)
                    continue;
                dn = !0,
                n(null, N, C, null, E, S, ti(C), T)
            }
        }
        return g
    }
      , _ = (g, y, C, E, S, T) => {
        const {slotScopeIds: x} = y;
        x && (S = S ? S.concat(x) : x);
        const k = o(g)
          , $ = d(i(g), y, k, C, E, S, T);
        return $ && ni($) && $.data === "]" ? i(y.anchor = $) : (dn = !0,
        l(y.anchor = u("]"), k, $),
        $)
    }
      , p = (g, y, C, E, S, T) => {
        if (dn = !0,
        y.el = null,
        T) {
            const $ = m(g);
            for (; ; ) {
                const A = i(g);
                if (A && A !== $)
                    a(A);
                else
                    break
            }
        }
        const x = i(g)
          , k = o(g);
        return a(g),
        n(null, y, k, x, C, E, ti(k), S),
        x
    }
      , m = (g, y="[", C="]") => {
        let E = 0;
        for (; g; )
            if (g = i(g),
            g && ni(g) && (g.data === y && E++,
            g.data === C)) {
                if (E === 0)
                    return i(g);
                E--
            }
        return g
    }
      , v = (g, y, C) => {
        const E = y.parentNode;
        E && E.replaceChild(g, y);
        let S = C;
        for (; S; )
            S.vnode.el === y && (S.vnode.el = S.subTree.el = g),
            S = S.parent
    }
      , D = g => g.nodeType === 1 && g.tagName.toLowerCase() === "template";
    return [c, f]
}
const We = Rf;
function ag(t) {
    return Yf(t)
}
function lg(t) {
    return Yf(t, og)
}
function Yf(t, e) {
    const n = Xc();
    n.__VUE__ = !0;
    const {insert: r, remove: s, patchProp: i, createElement: o, createText: a, createComment: l, setText: u, setElementText: c, parentNode: f, nextSibling: h, setScopeId: d=wt, insertStaticContent: _} = t
      , p = (b, w, R, M=null, O=null, H=null, W=void 0, B=null, U=!!w.dynamicChildren) => {
        if (b === w)
            return;
        b && !Lt(b, w) && (M = P(b),
        he(b, O, H, !0),
        b = null),
        w.patchFlag === -2 && (U = !1,
        w.dynamicChildren = null);
        const {type: I, ref: G, shapeFlag: Z} = w;
        switch (I) {
        case Mr:
            m(b, w, R, M);
            break;
        case tt:
            v(b, w, R, M);
            break;
        case fs:
            b == null && D(w, R, M, W);
            break;
        case He:
            A(b, w, R, M, O, H, W, B, U);
            break;
        default:
            Z & 1 ? C(b, w, R, M, O, H, W, B, U) : Z & 6 ? N(b, w, R, M, O, H, W, B, U) : (Z & 64 || Z & 128) && I.process(b, w, R, M, O, H, W, B, U, Y)
        }
        G != null && O && wi(G, b && b.ref, H, w || b, !w)
    }
      , m = (b, w, R, M) => {
        if (b == null)
            r(w.el = a(w.children), R, M);
        else {
            const O = w.el = b.el;
            w.children !== b.children && u(O, w.children)
        }
    }
      , v = (b, w, R, M) => {
        b == null ? r(w.el = l(w.children || ""), R, M) : w.el = b.el
    }
      , D = (b, w, R, M) => {
        [b.el,b.anchor] = _(b.children, w, R, M, b.el, b.anchor)
    }
      , g = ({el: b, anchor: w}, R, M) => {
        let O;
        for (; b && b !== w; )
            O = h(b),
            r(b, R, M),
            b = O;
        r(w, R, M)
    }
      , y = ({el: b, anchor: w}) => {
        let R;
        for (; b && b !== w; )
            R = h(b),
            s(b),
            b = R;
        s(w)
    }
      , C = (b, w, R, M, O, H, W, B, U) => {
        w.type === "svg" ? W = "svg" : w.type === "math" && (W = "mathml"),
        b == null ? E(w, R, M, O, H, W, B, U) : x(b, w, O, H, W, B, U)
    }
      , E = (b, w, R, M, O, H, W, B) => {
        let U, I;
        const {props: G, shapeFlag: Z, transition: J, dirs: re} = b;
        if (U = b.el = o(b.type, H, G && G.is, G),
        Z & 8 ? c(U, b.children) : Z & 16 && T(b.children, U, null, M, O, To(b, H), W, B),
        re && jt(b, null, M, "created"),
        S(U, b, b.scopeId, W, M),
        G) {
            for (const me in G)
                me !== "value" && !ls(me) && i(U, me, null, G[me], H, b.children, M, O, Be);
            "value"in G && i(U, "value", null, G.value, H),
            (I = G.onVnodeBeforeMount) && rt(I, M, b)
        }
        re && jt(b, null, M, "beforeMount");
        const ie = Xf(O, J);
        ie && J.beforeEnter(U),
        r(U, w, R),
        ((I = G && G.onVnodeMounted) || ie || re) && We( () => {
            I && rt(I, M, b),
            ie && J.enter(U),
            re && jt(b, null, M, "mounted")
        }
        , O)
    }
      , S = (b, w, R, M, O) => {
        if (R && d(b, R),
        M)
            for (let H = 0; H < M.length; H++)
                d(b, M[H]);
        if (O) {
            let H = O.subTree;
            if (w === H) {
                const W = O.vnode;
                S(b, W, W.scopeId, W.slotScopeIds, O.parent)
            }
        }
    }
      , T = (b, w, R, M, O, H, W, B, U=0) => {
        for (let I = U; I < b.length; I++) {
            const G = b[I] = B ? vn(b[I]) : Ct(b[I]);
            p(null, G, w, R, M, O, H, W, B)
        }
    }
      , x = (b, w, R, M, O, H, W) => {
        const B = w.el = b.el;
        let {patchFlag: U, dynamicChildren: I, dirs: G} = w;
        U |= b.patchFlag & 16;
        const Z = b.props || Ee
          , J = w.props || Ee;
        let re;
        if (R && Bn(R, !1),
        (re = J.onVnodeBeforeUpdate) && rt(re, R, w, b),
        G && jt(w, b, R, "beforeUpdate"),
        R && Bn(R, !0),
        I ? k(b.dynamicChildren, I, B, R, M, To(w, O), H) : W || V(b, w, B, null, R, M, To(w, O), H, !1),
        U > 0) {
            if (U & 16)
                $(B, w, Z, J, R, M, O);
            else if (U & 2 && Z.class !== J.class && i(B, "class", null, J.class, O),
            U & 4 && i(B, "style", Z.style, J.style, O),
            U & 8) {
                const ie = w.dynamicProps;
                for (let me = 0; me < ie.length; me++) {
                    const Se = ie[me]
                      , Ve = Z[Se]
                      , Ft = J[Se];
                    (Ft !== Ve || Se === "value") && i(B, Se, Ve, Ft, O, b.children, R, M, Be)
                }
            }
            U & 1 && b.children !== w.children && c(B, w.children)
        } else
            !W && I == null && $(B, w, Z, J, R, M, O);
        ((re = J.onVnodeUpdated) || G) && We( () => {
            re && rt(re, R, w, b),
            G && jt(w, b, R, "updated")
        }
        , M)
    }
      , k = (b, w, R, M, O, H, W) => {
        for (let B = 0; B < w.length; B++) {
            const U = b[B]
              , I = w[B]
              , G = U.el && (U.type === He || !Lt(U, I) || U.shapeFlag & 70) ? f(U.el) : R;
            p(U, I, G, null, M, O, H, W, !0)
        }
    }
      , $ = (b, w, R, M, O, H, W) => {
        if (R !== M) {
            if (R !== Ee)
                for (const B in R)
                    !ls(B) && !(B in M) && i(b, B, R[B], null, W, w.children, O, H, Be);
            for (const B in M) {
                if (ls(B))
                    continue;
                const U = M[B]
                  , I = R[B];
                U !== I && B !== "value" && i(b, B, I, U, W, w.children, O, H, Be)
            }
            "value"in M && i(b, "value", R.value, M.value, W)
        }
    }
      , A = (b, w, R, M, O, H, W, B, U) => {
        const I = w.el = b ? b.el : a("")
          , G = w.anchor = b ? b.anchor : a("");
        let {patchFlag: Z, dynamicChildren: J, slotScopeIds: re} = w;
        re && (B = B ? B.concat(re) : re),
        b == null ? (r(I, R, M),
        r(G, R, M),
        T(w.children || [], R, G, O, H, W, B, U)) : Z > 0 && Z & 64 && J && b.dynamicChildren ? (k(b.dynamicChildren, J, R, O, H, W, B),
        (w.key != null || O && w === O.subTree) && Jf(b, w, !0)) : V(b, w, R, G, O, H, W, B, U)
    }
      , N = (b, w, R, M, O, H, W, B, U) => {
        w.slotScopeIds = B,
        b == null ? w.shapeFlag & 512 ? O.ctx.activate(w, R, M, W, U) : ee(w, R, M, O, H, W, U) : X(b, w, U)
    }
      , ee = (b, w, R, M, O, H, W) => {
        const B = b.component = gg(b, M, O);
        if (Hs(b) && (B.ctx.renderer = Y),
        mg(B),
        B.asyncDep) {
            if (O && O.registerDep(B, F),
            !b.el) {
                const U = B.subTree = te(tt);
                v(null, U, w, R)
            }
        } else
            F(B, b, w, R, O, H, W)
    }
      , X = (b, w, R) => {
        const M = w.component = b.component;
        if (w_(b, w, R))
            if (M.asyncDep && !M.asyncResolved) {
                j(M, w, R);
                return
            } else
                M.next = w,
                m_(M.update),
                M.effect.dirty = !0,
                M.update();
        else
            w.el = b.el,
            M.vnode = w
    }
      , F = (b, w, R, M, O, H, W) => {
        const B = () => {
            if (b.isMounted) {
                let {next: G, bu: Z, u: J, parent: re, vnode: ie} = b;
                {
                    const dr = Qf(b);
                    if (dr) {
                        G && (G.el = ie.el,
                        j(b, G, W)),
                        dr.asyncDep.then( () => {
                            b.isUnmounted || B()
                        }
                        );
                        return
                    }
                }
                let me = G, Se;
                Bn(b, !1),
                G ? (G.el = ie.el,
                j(b, G, W)) : G = ie,
                Z && Er(Z),
                (Se = G.props && G.props.onVnodeBeforeUpdate) && rt(Se, re, G, ie),
                Bn(b, !0);
                const Ve = Do(b)
                  , Ft = b.subTree;
                b.subTree = Ve,
                p(Ft, Ve, f(Ft.el), P(Ft), b, O, H),
                G.el = Ve.el,
                me === null && ll(b, Ve.el),
                J && We(J, O),
                (Se = G.props && G.props.onVnodeUpdated) && We( () => rt(Se, re, G, ie), O)
            } else {
                let G;
                const {el: Z, props: J} = w
                  , {bm: re, m: ie, parent: me} = b
                  , Se = Qn(w);
                if (Bn(b, !1),
                re && Er(re),
                !Se && (G = J && J.onVnodeBeforeMount) && rt(G, me, w),
                Bn(b, !0),
                Z && xe) {
                    const Ve = () => {
                        b.subTree = Do(b),
                        xe(Z, b.subTree, b, O, null)
                    }
                    ;
                    Se ? w.type.__asyncLoader().then( () => !b.isUnmounted && Ve()) : Ve()
                } else {
                    const Ve = b.subTree = Do(b);
                    p(null, Ve, R, M, b, O, H),
                    w.el = Ve.el
                }
                if (ie && We(ie, O),
                !Se && (G = J && J.onVnodeMounted)) {
                    const Ve = w;
                    We( () => rt(G, me, Ve), O)
                }
                (w.shapeFlag & 256 || me && Qn(me.vnode) && me.vnode.shapeFlag & 256) && b.a && We(b.a, O),
                b.isMounted = !0,
                w = R = M = null
            }
        }
          , U = b.effect = new Qa(B,wt, () => Ji(I),b.scope)
          , I = b.update = () => {
            U.dirty && U.run()
        }
        ;
        I.id = b.uid,
        Bn(b, !0),
        I()
    }
      , j = (b, w, R) => {
        w.component = b;
        const M = b.vnode.props;
        b.vnode = w,
        b.next = null,
        eg(b, w.props, M, R),
        rg(b, w.children, R),
        lr(),
        au(b),
        ur()
    }
      , V = (b, w, R, M, O, H, W, B, U=!1) => {
        const I = b && b.children
          , G = b ? b.shapeFlag : 0
          , Z = w.children
          , {patchFlag: J, shapeFlag: re} = w;
        if (J > 0) {
            if (J & 128) {
                Me(I, Z, R, M, O, H, W, B, U);
                return
            } else if (J & 256) {
                L(I, Z, R, M, O, H, W, B, U);
                return
            }
        }
        re & 8 ? (G & 16 && Be(I, O, H),
        Z !== I && c(R, Z)) : G & 16 ? re & 16 ? Me(I, Z, R, M, O, H, W, B, U) : Be(I, O, H, !0) : (G & 8 && c(R, ""),
        re & 16 && T(Z, R, M, O, H, W, B, U))
    }
      , L = (b, w, R, M, O, H, W, B, U) => {
        b = b || Cr,
        w = w || Cr;
        const I = b.length
          , G = w.length
          , Z = Math.min(I, G);
        let J;
        for (J = 0; J < Z; J++) {
            const re = w[J] = U ? vn(w[J]) : Ct(w[J]);
            p(b[J], re, R, null, O, H, W, B, U)
        }
        I > G ? Be(b, O, H, !0, !1, Z) : T(w, R, M, O, H, W, B, U, Z)
    }
      , Me = (b, w, R, M, O, H, W, B, U) => {
        let I = 0;
        const G = w.length;
        let Z = b.length - 1
          , J = G - 1;
        for (; I <= Z && I <= J; ) {
            const re = b[I]
              , ie = w[I] = U ? vn(w[I]) : Ct(w[I]);
            if (Lt(re, ie))
                p(re, ie, R, null, O, H, W, B, U);
            else
                break;
            I++
        }
        for (; I <= Z && I <= J; ) {
            const re = b[Z]
              , ie = w[J] = U ? vn(w[J]) : Ct(w[J]);
            if (Lt(re, ie))
                p(re, ie, R, null, O, H, W, B, U);
            else
                break;
            Z--,
            J--
        }
        if (I > Z) {
            if (I <= J) {
                const re = J + 1
                  , ie = re < G ? w[re].el : M;
                for (; I <= J; )
                    p(null, w[I] = U ? vn(w[I]) : Ct(w[I]), R, ie, O, H, W, B, U),
                    I++
            }
        } else if (I > J)
            for (; I <= Z; )
                he(b[I], O, H, !0),
                I++;
        else {
            const re = I
              , ie = I
              , me = new Map;
            for (I = ie; I <= J; I++) {
                const ct = w[I] = U ? vn(w[I]) : Ct(w[I]);
                ct.key != null && me.set(ct.key, I)
            }
            let Se, Ve = 0;
            const Ft = J - ie + 1;
            let dr = !1
              , Yl = 0;
            const Xr = new Array(Ft);
            for (I = 0; I < Ft; I++)
                Xr[I] = 0;
            for (I = re; I <= Z; I++) {
                const ct = b[I];
                if (Ve >= Ft) {
                    he(ct, O, H, !0);
                    continue
                }
                let Nt;
                if (ct.key != null)
                    Nt = me.get(ct.key);
                else
                    for (Se = ie; Se <= J; Se++)
                        if (Xr[Se - ie] === 0 && Lt(ct, w[Se])) {
                            Nt = Se;
                            break
                        }
                Nt === void 0 ? he(ct, O, H, !0) : (Xr[Nt - ie] = I + 1,
                Nt >= Yl ? Yl = Nt : dr = !0,
                p(ct, w[Nt], R, null, O, H, W, B, U),
                Ve++)
            }
            const Xl = dr ? ug(Xr) : Cr;
            for (Se = Xl.length - 1,
            I = Ft - 1; I >= 0; I--) {
                const ct = ie + I
                  , Nt = w[ct]
                  , Jl = ct + 1 < G ? w[ct + 1].el : M;
                Xr[I] === 0 ? p(null, Nt, R, Jl, O, H, W, B, U) : dr && (Se < 0 || I !== Xl[Se] ? ve(Nt, R, Jl, 2) : Se--)
            }
        }
    }
      , ve = (b, w, R, M, O=null) => {
        const {el: H, type: W, transition: B, children: U, shapeFlag: I} = b;
        if (I & 6) {
            ve(b.component.subTree, w, R, M);
            return
        }
        if (I & 128) {
            b.suspense.move(w, R, M);
            return
        }
        if (I & 64) {
            W.move(b, w, R, Y);
            return
        }
        if (W === He) {
            r(H, w, R);
            for (let Z = 0; Z < U.length; Z++)
                ve(U[Z], w, R, M);
            r(b.anchor, w, R);
            return
        }
        if (W === fs) {
            g(b, w, R);
            return
        }
        if (M !== 2 && I & 1 && B)
            if (M === 0)
                B.beforeEnter(H),
                r(H, w, R),
                We( () => B.enter(H), O);
            else {
                const {leave: Z, delayLeave: J, afterLeave: re} = B
                  , ie = () => r(H, w, R)
                  , me = () => {
                    Z(H, () => {
                        ie(),
                        re && re()
                    }
                    )
                }
                ;
                J ? J(H, ie, me) : me()
            }
        else
            r(H, w, R)
    }
      , he = (b, w, R, M=!1, O=!1) => {
        const {type: H, props: W, ref: B, children: U, dynamicChildren: I, shapeFlag: G, patchFlag: Z, dirs: J} = b;
        if (B != null && wi(B, null, R, b, !0),
        G & 256) {
            w.ctx.deactivate(b);
            return
        }
        const re = G & 1 && J
          , ie = !Qn(b);
        let me;
        if (ie && (me = W && W.onVnodeBeforeUnmount) && rt(me, w, b),
        G & 6)
            ce(b.component, R, M);
        else {
            if (G & 128) {
                b.suspense.unmount(R, M);
                return
            }
            re && jt(b, null, w, "beforeUnmount"),
            G & 64 ? b.type.remove(b, w, R, O, Y, M) : I && (H !== He || Z > 0 && Z & 64) ? Be(I, w, R, !1, !0) : (H === He && Z & 384 || !O && G & 16) && Be(U, w, R),
            M && Dt(b)
        }
        (ie && (me = W && W.onVnodeUnmounted) || re) && We( () => {
            me && rt(me, w, b),
            re && jt(b, null, w, "unmounted")
        }
        , R)
    }
      , Dt = b => {
        const {type: w, el: R, anchor: M, transition: O} = b;
        if (w === He) {
            be(R, M);
            return
        }
        if (w === fs) {
            y(b);
            return
        }
        const H = () => {
            s(R),
            O && !O.persisted && O.afterLeave && O.afterLeave()
        }
        ;
        if (b.shapeFlag & 1 && O && !O.persisted) {
            const {leave: W, delayLeave: B} = O
              , U = () => W(R, H);
            B ? B(b.el, H, U) : U()
        } else
            H()
    }
      , be = (b, w) => {
        let R;
        for (; b !== w; )
            R = h(b),
            s(b),
            b = R;
        s(w)
    }
      , ce = (b, w, R) => {
        const {bum: M, scope: O, update: H, subTree: W, um: B} = b;
        M && Er(M),
        O.stop(),
        H && (H.active = !1,
        he(W, b, w, R)),
        B && We(B, w),
        We( () => {
            b.isUnmounted = !0
        }
        , w),
        w && w.pendingBranch && !w.isUnmounted && b.asyncDep && !b.asyncResolved && b.suspenseId === w.pendingId && (w.deps--,
        w.deps === 0 && w.resolve())
    }
      , Be = (b, w, R, M=!1, O=!1, H=0) => {
        for (let W = H; W < b.length; W++)
            he(b[W], w, R, M, O)
    }
      , P = b => b.shapeFlag & 6 ? P(b.component.subTree) : b.shapeFlag & 128 ? b.suspense.next() : h(b.anchor || b.el);
    let K = !1;
    const z = (b, w, R) => {
        b == null ? w._vnode && he(w._vnode, null, null, !0) : p(w._vnode || null, b, w, null, null, null, R),
        K || (K = !0,
        au(),
        vi(),
        K = !1),
        w._vnode = b
    }
      , Y = {
        p,
        um: he,
        m: ve,
        r: Dt,
        mt: ee,
        mc: T,
        pc: V,
        pbc: k,
        n: P,
        o: t
    };
    let de, xe;
    return e && ([de,xe] = e(Y)),
    {
        render: z,
        hydrate: de,
        createApp: Q_(z, de)
    }
}
function To({type: t, props: e}, n) {
    return n === "svg" && t === "foreignObject" || n === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : n
}
function Bn({effect: t, update: e}, n) {
    t.allowRecurse = e.allowRecurse = n
}
function Xf(t, e) {
    return (!t || t && !t.pendingBranch) && e && !e.persisted
}
function Jf(t, e, n=!1) {
    const r = t.children
      , s = e.children;
    if (Q(r) && Q(s))
        for (let i = 0; i < r.length; i++) {
            const o = r[i];
            let a = s[i];
            a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = s[i] = vn(s[i]),
            a.el = o.el),
            n || Jf(o, a)),
            a.type === Mr && (a.el = o.el)
        }
}
function ug(t) {
    const e = t.slice()
      , n = [0];
    let r, s, i, o, a;
    const l = t.length;
    for (r = 0; r < l; r++) {
        const u = t[r];
        if (u !== 0) {
            if (s = n[n.length - 1],
            t[s] < u) {
                e[r] = s,
                n.push(r);
                continue
            }
            for (i = 0,
            o = n.length - 1; i < o; )
                a = i + o >> 1,
                t[n[a]] < u ? i = a + 1 : o = a;
            u < t[n[i]] && (i > 0 && (e[r] = n[i - 1]),
            n[i] = r)
        }
    }
    for (i = n.length,
    o = n[i - 1]; i-- > 0; )
        n[i] = o,
        o = e[o];
    return n
}
function Qf(t) {
    const e = t.subTree.component;
    if (e)
        return e.asyncDep && !e.asyncResolved ? e : Qf(e)
}
const cg = t => t.__isTeleport
  , He = Symbol.for("v-fgt")
  , Mr = Symbol.for("v-txt")
  , tt = Symbol.for("v-cmt")
  , fs = Symbol.for("v-stc")
  , hs = [];
let Et = null;
function Te(t=!1) {
    hs.push(Et = t ? null : [])
}
function Zf() {
    hs.pop(),
    Et = hs[hs.length - 1] || null
}
let Lr = 1;
function vu(t) {
    Lr += t
}
function eh(t) {
    return t.dynamicChildren = Lr > 0 ? Et || Cr : null,
    Zf(),
    Lr > 0 && Et && Et.push(t),
    t
}
function _t(t, e, n, r, s, i) {
    return eh(se(t, e, n, r, s, i, !0))
}
function Mt(t, e, n, r, s) {
    return eh(te(t, e, n, r, s, !0))
}
function Ir(t) {
    return t ? t.__v_isVNode === !0 : !1
}
function Lt(t, e) {
    return t.type === e.type && t.key === e.key
}
const to = "__vInternal"
  , th = ({key: t}) => t ?? null
  , ui = ({ref: t, ref_key: e, ref_for: n}) => (typeof t == "number" && (t = "" + t),
t != null ? Fe(t) || Oe(t) || ne(t) ? {
    i: $e,
    r: t,
    k: e,
    f: !!n
} : t : null);
function se(t, e=null, n=null, r=0, s=null, i=t === He ? 0 : 1, o=!1, a=!1) {
    const l = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: t,
        props: e,
        key: e && th(e),
        ref: e && ui(e),
        scopeId: Zi,
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
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: i,
        patchFlag: r,
        dynamicProps: s,
        dynamicChildren: null,
        appContext: null,
        ctx: $e
    };
    return a ? (ml(l, n),
    i & 128 && t.normalize(l)) : n && (l.shapeFlag |= Fe(n) ? 8 : 16),
    Lr > 0 && !o && Et && (l.patchFlag > 0 || i & 6) && l.patchFlag !== 32 && Et.push(l),
    l
}
const te = fg;
function fg(t, e=null, n=null, r=0, s=null, i=!1) {
    if ((!t || t === Tf) && (t = tt),
    Ir(t)) {
        const a = on(t, e, !0);
        return n && ml(a, n),
        Lr > 0 && !i && Et && (a.shapeFlag & 6 ? Et[Et.indexOf(t)] = a : Et.push(a)),
        a.patchFlag |= -2,
        a
    }
    if (vg(t) && (t = t.__vccOpts),
    e) {
        e = hg(e);
        let {class: a, style: l} = e;
        a && !Fe(a) && (e.class = rr(a)),
        ye(l) && (_f(l) && !Q(l) && (l = Ne({}, l)),
        e.style = Ki(l))
    }
    const o = Fe(t) ? 1 : Sf(t) ? 128 : cg(t) ? 64 : ye(t) ? 4 : ne(t) ? 2 : 0;
    return se(t, e, n, r, s, o, i, !0)
}
function hg(t) {
    return t ? _f(t) || to in t ? Ne({}, t) : t : null
}
function on(t, e, n=!1) {
    const {props: r, ref: s, patchFlag: i, children: o} = t
      , a = e ? no(r || {}, e) : r;
    return {
        __v_isVNode: !0,
        __v_skip: !0,
        type: t.type,
        props: a,
        key: a && th(a),
        ref: e && e.ref ? n && s ? Q(s) ? s.concat(ui(e)) : [s, ui(e)] : ui(e) : s,
        scopeId: t.scopeId,
        slotScopeIds: t.slotScopeIds,
        children: o,
        target: t.target,
        targetAnchor: t.targetAnchor,
        staticCount: t.staticCount,
        shapeFlag: t.shapeFlag,
        patchFlag: e && t.type !== He ? i === -1 ? 16 : i | 16 : i,
        dynamicProps: t.dynamicProps,
        dynamicChildren: t.dynamicChildren,
        appContext: t.appContext,
        dirs: t.dirs,
        transition: t.transition,
        component: t.component,
        suspense: t.suspense,
        ssContent: t.ssContent && on(t.ssContent),
        ssFallback: t.ssFallback && on(t.ssFallback),
        el: t.el,
        anchor: t.anchor,
        ctx: t.ctx,
        ce: t.ce
    }
}
function ks(t=" ", e=0) {
    return te(Mr, null, t, e)
}
function t1(t, e) {
    const n = te(fs, null, t);
    return n.staticCount = e,
    n
}
function dg(t="", e=!1) {
    return e ? (Te(),
    Mt(tt, null, t)) : te(tt, null, t)
}
function Ct(t) {
    return t == null || typeof t == "boolean" ? te(tt) : Q(t) ? te(He, null, t.slice()) : typeof t == "object" ? vn(t) : te(Mr, null, String(t))
}
function vn(t) {
    return t.el === null && t.patchFlag !== -1 || t.memo ? t : on(t)
}
function ml(t, e) {
    let n = 0;
    const {shapeFlag: r} = t;
    if (e == null)
        e = null;
    else if (Q(e))
        n = 16;
    else if (typeof e == "object")
        if (r & 65) {
            const s = e.default;
            s && (s._c && (s._d = !1),
            ml(t, s()),
            s._c && (s._d = !0));
            return
        } else {
            n = 32;
            const s = e._;
            !s && !(to in e) ? e._ctx = $e : s === 3 && $e && ($e.slots._ === 1 ? e._ = 1 : (e._ = 2,
            t.patchFlag |= 1024))
        }
    else
        ne(e) ? (e = {
            default: e,
            _ctx: $e
        },
        n = 32) : (e = String(e),
        r & 64 ? (n = 16,
        e = [ks(e)]) : n = 8);
    t.children = e,
    t.shapeFlag |= n
}
function no(...t) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
        const r = t[n];
        for (const s in r)
            if (s === "class")
                e.class !== r.class && (e.class = rr([e.class, r.class]));
            else if (s === "style")
                e.style = Ki([e.style, r.style]);
            else if (Ns(s)) {
                const i = e[s]
                  , o = r[s];
                o && i !== o && !(Q(i) && i.includes(o)) && (e[s] = i ? [].concat(i, o) : o)
            } else
                s !== "" && (e[s] = r[s])
    }
    return e
}
function rt(t, e, n, r=null) {
    St(t, e, 7, [n, r])
}
const pg = Uf();
let _g = 0;
function gg(t, e, n) {
    const r = t.type
      , s = (e ? e.appContext : t.appContext) || pg
      , i = {
        uid: _g++,
        vnode: t,
        type: r,
        parent: e,
        appContext: s,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        scope: new Zc(!0),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: e ? e.provides : Object.create(s.provides),
        accessCache: null,
        renderCache: [],
        components: null,
        directives: null,
        propsOptions: Wf(r, s),
        emitsOptions: Ef(r, s),
        emit: null,
        emitted: null,
        propsDefaults: Ee,
        inheritAttrs: r.inheritAttrs,
        ctx: Ee,
        data: Ee,
        props: Ee,
        attrs: Ee,
        slots: Ee,
        refs: Ee,
        setupState: Ee,
        setupContext: null,
        attrsProxy: null,
        slotsProxy: null,
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
        sp: null
    };
    return i.ctx = {
        _: i
    },
    i.root = e ? e.root : i,
    i.emit = D_.bind(null, i),
    t.ce && t.ce(i),
    i
}
let je = null;
const In = () => je || $e;
let Ei, sa;
{
    const t = Xc()
      , e = (n, r) => {
        let s;
        return (s = t[n]) || (s = t[n] = []),
        s.push(r),
        i => {
            s.length > 1 ? s.forEach(o => o(i)) : s[0](i)
        }
    }
    ;
    Ei = e("__VUE_INSTANCE_SETTERS__", n => je = n),
    sa = e("__VUE_SSR_SETTERS__", n => Vs = n)
}
const ir = t => {
    const e = je;
    return Ei(t),
    t.scope.on(),
    () => {
        t.scope.off(),
        Ei(e)
    }
}
  , ia = () => {
    je && je.scope.off(),
    Ei(null)
}
;
function nh(t) {
    return t.vnode.shapeFlag & 4
}
let Vs = !1;
function mg(t, e=!1) {
    e && sa(e);
    const {props: n, children: r} = t.vnode
      , s = nh(t);
    Z_(t, n, s, e),
    ng(t, r);
    const i = s ? yg(t, e) : void 0;
    return e && sa(!1),
    i
}
function yg(t, e) {
    const n = t.type;
    t.accessCache = Object.create(null),
    t.proxy = Yi(new Proxy(t.ctx,z_));
    const {setup: r} = n;
    if (r) {
        const s = t.setupContext = r.length > 1 ? sh(t) : null
          , i = ir(t);
        lr();
        const o = Sn(r, t, 0, [t.props, s]);
        if (ur(),
        i(),
        Ya(o)) {
            if (o.then(ia, ia),
            e)
                return o.then(a => {
                    oa(t, a, e)
                }
                ).catch(a => {
                    Kr(a, t, 0)
                }
                );
            t.asyncDep = o
        } else
            oa(t, o, e)
    } else
        rh(t, e)
}
function oa(t, e, n) {
    ne(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : ye(e) && (t.setupState = Df(e)),
    rh(t, n)
}
let bu;
function rh(t, e, n) {
    const r = t.type;
    if (!t.render) {
        if (!e && bu && !r.render) {
            const s = r.template || pl(t).template;
            if (s) {
                const {isCustomElement: i, compilerOptions: o} = t.appContext.config
                  , {delimiters: a, compilerOptions: l} = r
                  , u = Ne(Ne({
                    isCustomElement: i,
                    delimiters: a
                }, o), l);
                r.render = bu(s, u)
            }
        }
        t.render = r.render || wt
    }
    {
        const s = ir(t);
        lr();
        try {
            q_(t)
        } finally {
            ur(),
            s()
        }
    }
}
function Dg(t) {
    return t.attrsProxy || (t.attrsProxy = new Proxy(t.attrs,{
        get(e, n) {
            return lt(t, "get", "$attrs"),
            e[n]
        }
    }))
}
function sh(t) {
    const e = n => {
        t.exposed = n || {}
    }
    ;
    return {
        get attrs() {
            return Dg(t)
        },
        slots: t.slots,
        emit: t.emit,
        expose: e
    }
}
function ro(t) {
    if (t.exposed)
        return t.exposeProxy || (t.exposeProxy = new Proxy(Df(Yi(t.exposed)),{
            get(e, n) {
                if (n in e)
                    return e[n];
                if (n in cs)
                    return cs[n](t)
            },
            has(e, n) {
                return n in e || n in cs
            }
        }))
}
function aa(t, e=!0) {
    return ne(t) ? t.displayName || t.name : t.name || e && t.__name
}
function vg(t) {
    return ne(t) && "__vccOpts"in t
}
const qe = (t, e) => u_(t, e, Vs);
function It(t, e, n) {
    const r = arguments.length;
    return r === 2 ? ye(e) && !Q(e) ? Ir(e) ? te(t, null, [e]) : te(t, e) : te(t, null, e) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Ir(n) && (n = [n]),
    te(t, e, n))
}
const ih = "3.4.15";
/**
* @vue/runtime-dom v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const bg = "http://www.w3.org/2000/svg"
  , Cg = "http://www.w3.org/1998/Math/MathML"
  , bn = typeof document < "u" ? document : null
  , Cu = bn && bn.createElement("template")
  , wg = {
    insert: (t, e, n) => {
        e.insertBefore(t, n || null)
    }
    ,
    remove: t => {
        const e = t.parentNode;
        e && e.removeChild(t)
    }
    ,
    createElement: (t, e, n, r) => {
        const s = e === "svg" ? bn.createElementNS(bg, t) : e === "mathml" ? bn.createElementNS(Cg, t) : bn.createElement(t, n ? {
            is: n
        } : void 0);
        return t === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple),
        s
    }
    ,
    createText: t => bn.createTextNode(t),
    createComment: t => bn.createComment(t),
    setText: (t, e) => {
        t.nodeValue = e
    }
    ,
    setElementText: (t, e) => {
        t.textContent = e
    }
    ,
    parentNode: t => t.parentNode,
    nextSibling: t => t.nextSibling,
    querySelector: t => bn.querySelector(t),
    setScopeId(t, e) {
        t.setAttribute(e, "")
    },
    insertStaticContent(t, e, n, r, s, i) {
        const o = n ? n.previousSibling : e.lastChild;
        if (s && (s === i || s.nextSibling))
            for (; e.insertBefore(s.cloneNode(!0), n),
            !(s === i || !(s = s.nextSibling)); )
                ;
        else {
            Cu.innerHTML = r === "svg" ? `<svg>${t}</svg>` : r === "mathml" ? `<math>${t}</math>` : t;
            const a = Cu.content;
            if (r === "svg" || r === "mathml") {
                const l = a.firstChild;
                for (; l.firstChild; )
                    a.appendChild(l.firstChild);
                a.removeChild(l)
            }
            e.insertBefore(a, n)
        }
        return [o ? o.nextSibling : e.firstChild, n ? n.previousSibling : e.lastChild]
    }
}
  , pn = "transition"
  , Jr = "animation"
  , $r = Symbol("_vtc")
  , Us = (t, {slots: e}) => It(L_, ah(t), e);
Us.displayName = "Transition";
const oh = {
    name: String,
    type: String,
    css: {
        type: Boolean,
        default: !0
    },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
}
  , Eg = Us.props = Ne({}, Of, oh)
  , Hn = (t, e=[]) => {
    Q(t) ? t.forEach(n => n(...e)) : t && t(...e)
}
  , wu = t => t ? Q(t) ? t.some(e => e.length > 1) : t.length > 1 : !1;
function ah(t) {
    const e = {};
    for (const A in t)
        A in oh || (e[A] = t[A]);
    if (t.css === !1)
        return e;
    const {name: n="v", type: r, duration: s, enterFromClass: i=`${n}-enter-from`, enterActiveClass: o=`${n}-enter-active`, enterToClass: a=`${n}-enter-to`, appearFromClass: l=i, appearActiveClass: u=o, appearToClass: c=a, leaveFromClass: f=`${n}-leave-from`, leaveActiveClass: h=`${n}-leave-active`, leaveToClass: d=`${n}-leave-to`} = t
      , _ = Tg(s)
      , p = _ && _[0]
      , m = _ && _[1]
      , {onBeforeEnter: v, onEnter: D, onEnterCancelled: g, onLeave: y, onLeaveCancelled: C, onBeforeAppear: E=v, onAppear: S=D, onAppearCancelled: T=g} = e
      , x = (A, N, ee) => {
        gn(A, N ? c : a),
        gn(A, N ? u : o),
        ee && ee()
    }
      , k = (A, N) => {
        A._isLeaving = !1,
        gn(A, f),
        gn(A, d),
        gn(A, h),
        N && N()
    }
      , $ = A => (N, ee) => {
        const X = A ? S : D
          , F = () => x(N, A, ee);
        Hn(X, [N, F]),
        Eu( () => {
            gn(N, A ? l : i),
            Qt(N, A ? c : a),
            wu(X) || Tu(N, r, p, F)
        }
        )
    }
    ;
    return Ne(e, {
        onBeforeEnter(A) {
            Hn(v, [A]),
            Qt(A, i),
            Qt(A, o)
        },
        onBeforeAppear(A) {
            Hn(E, [A]),
            Qt(A, l),
            Qt(A, u)
        },
        onEnter: $(!1),
        onAppear: $(!0),
        onLeave(A, N) {
            A._isLeaving = !0;
            const ee = () => k(A, N);
            Qt(A, f),
            uh(),
            Qt(A, h),
            Eu( () => {
                A._isLeaving && (gn(A, f),
                Qt(A, d),
                wu(y) || Tu(A, r, m, ee))
            }
            ),
            Hn(y, [A, ee])
        },
        onEnterCancelled(A) {
            x(A, !1),
            Hn(g, [A])
        },
        onAppearCancelled(A) {
            x(A, !0),
            Hn(T, [A])
        },
        onLeaveCancelled(A) {
            k(A),
            Hn(C, [A])
        }
    })
}
function Tg(t) {
    if (t == null)
        return null;
    if (ye(t))
        return [xo(t.enter), xo(t.leave)];
    {
        const e = xo(t);
        return [e, e]
    }
}
function xo(t) {
    return Yc(t)
}
function Qt(t, e) {
    e.split(/\s+/).forEach(n => n && t.classList.add(n)),
    (t[$r] || (t[$r] = new Set)).add(e)
}
function gn(t, e) {
    e.split(/\s+/).forEach(r => r && t.classList.remove(r));
    const n = t[$r];
    n && (n.delete(e),
    n.size || (t[$r] = void 0))
}
function Eu(t) {
    requestAnimationFrame( () => {
        requestAnimationFrame(t)
    }
    )
}
let xg = 0;
function Tu(t, e, n, r) {
    const s = t._endId = ++xg
      , i = () => {
        s === t._endId && r()
    }
    ;
    if (n)
        return setTimeout(i, n);
    const {type: o, timeout: a, propCount: l} = lh(t, e);
    if (!o)
        return r();
    const u = o + "end";
    let c = 0;
    const f = () => {
        t.removeEventListener(u, h),
        i()
    }
      , h = d => {
        d.target === t && ++c >= l && f()
    }
    ;
    setTimeout( () => {
        c < l && f()
    }
    , a + 1),
    t.addEventListener(u, h)
}
function lh(t, e) {
    const n = window.getComputedStyle(t)
      , r = _ => (n[_] || "").split(", ")
      , s = r(`${pn}Delay`)
      , i = r(`${pn}Duration`)
      , o = xu(s, i)
      , a = r(`${Jr}Delay`)
      , l = r(`${Jr}Duration`)
      , u = xu(a, l);
    let c = null
      , f = 0
      , h = 0;
    e === pn ? o > 0 && (c = pn,
    f = o,
    h = i.length) : e === Jr ? u > 0 && (c = Jr,
    f = u,
    h = l.length) : (f = Math.max(o, u),
    c = f > 0 ? o > u ? pn : Jr : null,
    h = c ? c === pn ? i.length : l.length : 0);
    const d = c === pn && /\b(transform|all)(,|$)/.test(r(`${pn}Property`).toString());
    return {
        type: c,
        timeout: f,
        propCount: h,
        hasTransform: d
    }
}
function xu(t, e) {
    for (; t.length < e.length; )
        t = t.concat(t);
    return Math.max(...e.map( (n, r) => Su(n) + Su(t[r])))
}
function Su(t) {
    return t === "auto" ? 0 : Number(t.slice(0, -1).replace(",", ".")) * 1e3
}
function uh() {
    return document.body.offsetHeight
}
function Sg(t, e, n) {
    const r = t[$r];
    r && (e = (e ? [e, ...r] : [...r]).join(" ")),
    e == null ? t.removeAttribute("class") : n ? t.setAttribute("class", e) : t.className = e
}
const yl = Symbol("_vod")
  , is = {
    beforeMount(t, {value: e}, {transition: n}) {
        t[yl] = t.style.display === "none" ? "" : t.style.display,
        n && e ? n.beforeEnter(t) : Qr(t, e)
    },
    mounted(t, {value: e}, {transition: n}) {
        n && e && n.enter(t)
    },
    updated(t, {value: e, oldValue: n}, {transition: r}) {
        !e != !n && (r ? e ? (r.beforeEnter(t),
        Qr(t, !0),
        r.enter(t)) : r.leave(t, () => {
            Qr(t, !1)
        }
        ) : Qr(t, e))
    },
    beforeUnmount(t, {value: e}) {
        Qr(t, e)
    }
};
function Qr(t, e) {
    t.style.display = e ? t[yl] : "none"
}
const kg = Symbol("");
function Rg(t, e, n) {
    const r = t.style
      , s = r.display
      , i = Fe(n);
    if (n && !i) {
        if (e && !Fe(e))
            for (const o in e)
                n[o] == null && la(r, o, "");
        for (const o in n)
            la(r, o, n[o])
    } else if (i) {
        if (e !== n) {
            const o = r[kg];
            o && (n += ";" + o),
            r.cssText = n
        }
    } else
        e && t.removeAttribute("style");
    yl in t && (r.display = s)
}
const ku = /\s*!important$/;
function la(t, e, n) {
    if (Q(n))
        n.forEach(r => la(t, e, r));
    else if (n == null && (n = ""),
    e.startsWith("--"))
        t.setProperty(e, n);
    else {
        const r = Ag(t, e);
        ku.test(n) ? t.setProperty(qr(r), n.replace(ku, ""), "important") : t[r] = n
    }
}
const Ru = ["Webkit", "Moz", "ms"]
  , So = {};
function Ag(t, e) {
    const n = So[e];
    if (n)
        return n;
    let r = Gt(e);
    if (r !== "filter" && r in t)
        return So[e] = r;
    r = qi(r);
    for (let s = 0; s < Ru.length; s++) {
        const i = Ru[s] + r;
        if (i in t)
            return So[e] = i
    }
    return e
}
const Au = "http://www.w3.org/1999/xlink";
function Fg(t, e, n, r, s) {
    if (r && e.startsWith("xlink:"))
        n == null ? t.removeAttributeNS(Au, e.slice(6, e.length)) : t.setAttributeNS(Au, e, n);
    else {
        const i = Bp(e);
        n == null || i && !Jc(n) ? t.removeAttribute(e) : t.setAttribute(e, i ? "" : n)
    }
}
function Pg(t, e, n, r, s, i, o) {
    if (e === "innerHTML" || e === "textContent") {
        r && o(r, s, i),
        t[e] = n ?? "";
        return
    }
    const a = t.tagName;
    if (e === "value" && a !== "PROGRESS" && !a.includes("-")) {
        t._value = n;
        const u = a === "OPTION" ? t.getAttribute("value") : t.value
          , c = n ?? "";
        u !== c && (t.value = c),
        n == null && t.removeAttribute(e);
        return
    }
    let l = !1;
    if (n === "" || n == null) {
        const u = typeof t[e];
        u === "boolean" ? n = Jc(n) : n == null && u === "string" ? (n = "",
        l = !0) : u === "number" && (n = 0,
        l = !0)
    }
    try {
        t[e] = n
    } catch {}
    l && t.removeAttribute(e)
}
function qn(t, e, n, r) {
    t.addEventListener(e, n, r)
}
function Og(t, e, n, r) {
    t.removeEventListener(e, n, r)
}
const Fu = Symbol("_vei");
function Mg(t, e, n, r, s=null) {
    const i = t[Fu] || (t[Fu] = {})
      , o = i[e];
    if (r && o)
        o.value = r;
    else {
        const [a,l] = Lg(e);
        if (r) {
            const u = i[e] = Ng(r, s);
            qn(t, a, u, l)
        } else
            o && (Og(t, a, o, l),
            i[e] = void 0)
    }
}
const Pu = /(?:Once|Passive|Capture)$/;
function Lg(t) {
    let e;
    if (Pu.test(t)) {
        e = {};
        let r;
        for (; r = t.match(Pu); )
            t = t.slice(0, t.length - r[0].length),
            e[r[0].toLowerCase()] = !0
    }
    return [t[2] === ":" ? t.slice(3) : qr(t.slice(2)), e]
}
let ko = 0;
const Ig = Promise.resolve()
  , $g = () => ko || (Ig.then( () => ko = 0),
ko = Date.now());
function Ng(t, e) {
    const n = r => {
        if (!r._vts)
            r._vts = Date.now();
        else if (r._vts <= n.attached)
            return;
        St(Bg(r, n.value), e, 5, [r])
    }
    ;
    return n.value = t,
    n.attached = $g(),
    n
}
function Bg(t, e) {
    if (Q(e)) {
        const n = t.stopImmediatePropagation;
        return t.stopImmediatePropagation = () => {
            n.call(t),
            t._stopped = !0
        }
        ,
        e.map(r => s => !s._stopped && r && r(s))
    } else
        return e
}
const Ou = t => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123
  , Hg = (t, e, n, r, s, i, o, a, l) => {
    const u = s === "svg";
    e === "class" ? Sg(t, r, u) : e === "style" ? Rg(t, n, r) : Ns(e) ? Ka(e) || Mg(t, e, n, r, o) : (e[0] === "." ? (e = e.slice(1),
    !0) : e[0] === "^" ? (e = e.slice(1),
    !1) : jg(t, e, r, u)) ? Pg(t, e, r, i, o, a, l) : (e === "true-value" ? t._trueValue = r : e === "false-value" && (t._falseValue = r),
    Fg(t, e, r, u))
}
;
function jg(t, e, n, r) {
    if (r)
        return !!(e === "innerHTML" || e === "textContent" || e in t && Ou(e) && ne(n));
    if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA")
        return !1;
    if (e === "width" || e === "height") {
        const s = t.tagName;
        if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
            return !1
    }
    return Ou(e) && Fe(n) ? !1 : e in t
}
const ch = new WeakMap
  , fh = new WeakMap
  , Ti = Symbol("_moveCb")
  , Mu = Symbol("_enterCb")
  , hh = {
    name: "TransitionGroup",
    props: Ne({}, Eg, {
        tag: String,
        moveClass: String
    }),
    setup(t, {slots: e}) {
        const n = In()
          , r = Pf();
        let s, i;
        return dl( () => {
            if (!s.length)
                return;
            const o = t.moveClass || `${t.name || "v"}-move`;
            if (!qg(s[0].el, n.vnode.el, o))
                return;
            s.forEach(Ug),
            s.forEach(zg);
            const a = s.filter(Wg);
            uh(),
            a.forEach(l => {
                const u = l.el
                  , c = u.style;
                Qt(u, o),
                c.transform = c.webkitTransform = c.transitionDuration = "";
                const f = u[Ti] = h => {
                    h && h.target !== u || (!h || /transform$/.test(h.propertyName)) && (u.removeEventListener("transitionend", f),
                    u[Ti] = null,
                    gn(u, o))
                }
                ;
                u.addEventListener("transitionend", f)
            }
            )
        }
        ),
        () => {
            const o = oe(t)
              , a = ah(o);
            let l = o.tag || He;
            s = i,
            i = e.default ? hl(e.default()) : [];
            for (let u = 0; u < i.length; u++) {
                const c = i[u];
                c.key != null && Or(c, Ts(c, a, r, n))
            }
            if (s)
                for (let u = 0; u < s.length; u++) {
                    const c = s[u];
                    Or(c, Ts(c, a, r, n)),
                    ch.set(c, c.el.getBoundingClientRect())
                }
            return te(l, null, i)
        }
    }
}
  , Vg = t => delete t.mode;
hh.props;
const n1 = hh;
function Ug(t) {
    const e = t.el;
    e[Ti] && e[Ti](),
    e[Mu] && e[Mu]()
}
function zg(t) {
    fh.set(t, t.el.getBoundingClientRect())
}
function Wg(t) {
    const e = ch.get(t)
      , n = fh.get(t)
      , r = e.left - n.left
      , s = e.top - n.top;
    if (r || s) {
        const i = t.el.style;
        return i.transform = i.webkitTransform = `translate(${r}px,${s}px)`,
        i.transitionDuration = "0s",
        t
    }
}
function qg(t, e, n) {
    const r = t.cloneNode()
      , s = t[$r];
    s && s.forEach(a => {
        a.split(/\s+/).forEach(l => l && r.classList.remove(l))
    }
    ),
    n.split(/\s+/).forEach(a => a && r.classList.add(a)),
    r.style.display = "none";
    const i = e.nodeType === 1 ? e : e.parentNode;
    i.appendChild(r);
    const {hasTransform: o} = lh(r);
    return i.removeChild(r),
    o
}
const xi = t => {
    const e = t.props["onUpdate:modelValue"] || !1;
    return Q(e) ? n => Er(e, n) : e
}
;
function Kg(t) {
    t.target.composing = !0
}
function Lu(t) {
    const e = t.target;
    e.composing && (e.composing = !1,
    e.dispatchEvent(new Event("input")))
}
const kr = Symbol("_assign")
  , r1 = {
    created(t, {modifiers: {lazy: e, trim: n, number: r}}, s) {
        t[kr] = xi(s);
        const i = r || s.props && s.props.type === "number";
        qn(t, e ? "change" : "input", o => {
            if (o.target.composing)
                return;
            let a = t.value;
            n && (a = a.trim()),
            i && (a = Ko(a)),
            t[kr](a)
        }
        ),
        n && qn(t, "change", () => {
            t.value = t.value.trim()
        }
        ),
        e || (qn(t, "compositionstart", Kg),
        qn(t, "compositionend", Lu),
        qn(t, "change", Lu))
    },
    mounted(t, {value: e}) {
        t.value = e ?? ""
    },
    beforeUpdate(t, {value: e, modifiers: {lazy: n, trim: r, number: s}}, i) {
        if (t[kr] = xi(i),
        t.composing)
            return;
        const o = s || t.type === "number" ? Ko(t.value) : t.value
          , a = e ?? "";
        o !== a && (document.activeElement === t && t.type !== "range" && (n || r && t.value.trim() === a) || (t.value = a))
    }
}
  , s1 = {
    created(t, {value: e}, n) {
        t.checked = mi(e, n.props.value),
        t[kr] = xi(n),
        qn(t, "change", () => {
            t[kr](Gg(t))
        }
        )
    },
    beforeUpdate(t, {value: e, oldValue: n}, r) {
        t[kr] = xi(r),
        e !== n && (t.checked = mi(e, r.props.value))
    }
};
function Gg(t) {
    return "_value"in t ? t._value : t.value
}
const dh = Ne({
    patchProp: Hg
}, wg);
let ds, Iu = !1;
function Yg() {
    return ds || (ds = ag(dh))
}
function Xg() {
    return ds = Iu ? ds : lg(dh),
    Iu = !0,
    ds
}
const Jg = (...t) => {
    const e = Yg().createApp(...t)
      , {mount: n} = e;
    return e.mount = r => {
        const s = _h(r);
        if (!s)
            return;
        const i = e._component;
        !ne(i) && !i.render && !i.template && (i.template = s.innerHTML),
        s.innerHTML = "";
        const o = n(s, !1, ph(s));
        return s instanceof Element && (s.removeAttribute("v-cloak"),
        s.setAttribute("data-v-app", "")),
        o
    }
    ,
    e
}
  , Qg = (...t) => {
    const e = Xg().createApp(...t)
      , {mount: n} = e;
    return e.mount = r => {
        const s = _h(r);
        if (s)
            return n(s, !0, ph(s))
    }
    ,
    e
}
;
function ph(t) {
    if (t instanceof SVGElement)
        return "svg";
    if (typeof MathMLElement == "function" && t instanceof MathMLElement)
        return "mathml"
}
function _h(t) {
    return Fe(t) ? document.querySelector(t) : t
}
const Zg = /#/g
  , em = /&/g
  , tm = /\//g
  , nm = /=/g
  , Dl = /\+/g
  , rm = /%5e/gi
  , sm = /%60/gi
  , im = /%7c/gi
  , om = /%20/gi;
function am(t) {
    return encodeURI("" + t).replace(im, "|")
}
function ua(t) {
    return am(typeof t == "string" ? t : JSON.stringify(t)).replace(Dl, "%2B").replace(om, "+").replace(Zg, "%23").replace(em, "%26").replace(sm, "`").replace(rm, "^").replace(tm, "%2F")
}
function Ro(t) {
    return ua(t).replace(nm, "%3D")
}
function Si(t="") {
    try {
        return decodeURIComponent("" + t)
    } catch {
        return "" + t
    }
}
function lm(t) {
    return Si(t.replace(Dl, " "))
}
function um(t) {
    return Si(t.replace(Dl, " "))
}
function gh(t="") {
    const e = {};
    t[0] === "?" && (t = t.slice(1));
    for (const n of t.split("&")) {
        const r = n.match(/([^=]+)=?(.*)/) || [];
        if (r.length < 2)
            continue;
        const s = lm(r[1]);
        if (s === "__proto__" || s === "constructor")
            continue;
        const i = um(r[2] || "");
        e[s] === void 0 ? e[s] = i : Array.isArray(e[s]) ? e[s].push(i) : e[s] = [e[s], i]
    }
    return e
}
function cm(t, e) {
    return (typeof e == "number" || typeof e == "boolean") && (e = String(e)),
    e ? Array.isArray(e) ? e.map(n => `${Ro(t)}=${ua(n)}`).join("&") : `${Ro(t)}=${ua(e)}` : Ro(t)
}
function fm(t) {
    return Object.keys(t).filter(e => t[e] !== void 0).map(e => cm(e, t[e])).filter(Boolean).join("&")
}
const hm = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/
  , dm = /^[\s\w\0+.-]{2,}:([/\\]{2})?/
  , pm = /^([/\\]\s*){2,}[^/\\]/
  , _m = /^[\s\0]*(blob|data|javascript|vbscript):$/i
  , gm = /\/$|\/\?|\/#/
  , mm = /^\.?\//;
function cr(t, e={}) {
    return typeof e == "boolean" && (e = {
        acceptRelative: e
    }),
    e.strict ? hm.test(t) : dm.test(t) || (e.acceptRelative ? pm.test(t) : !1)
}
function ym(t) {
    return !!t && _m.test(t)
}
function ca(t="", e) {
    return e ? gm.test(t) : t.endsWith("/")
}
function so(t="", e) {
    if (!e)
        return (ca(t) ? t.slice(0, -1) : t) || "/";
    if (!ca(t, !0))
        return t || "/";
    let n = t
      , r = "";
    const s = t.indexOf("#");
    s >= 0 && (n = t.slice(0, s),
    r = t.slice(s));
    const [i,...o] = n.split("?");
    return (i.slice(0, -1) || "/") + (o.length > 0 ? `?${o.join("?")}` : "") + r
}
function ki(t="", e) {
    if (!e)
        return t.endsWith("/") ? t : t + "/";
    if (ca(t, !0))
        return t || "/";
    let n = t
      , r = "";
    const s = t.indexOf("#");
    if (s >= 0 && (n = t.slice(0, s),
    r = t.slice(s),
    !n))
        return r;
    const [i,...o] = n.split("?");
    return i + "/" + (o.length > 0 ? `?${o.join("?")}` : "") + r
}
function Dm(t="") {
    return t.startsWith("/")
}
function $u(t="") {
    return Dm(t) ? t : "/" + t
}
function vm(t, e) {
    if (mh(e) || cr(t))
        return t;
    const n = so(e);
    return t.startsWith(n) ? t : Yr(n, t)
}
function Nu(t, e) {
    if (mh(e))
        return t;
    const n = so(e);
    if (!t.startsWith(n))
        return t;
    const r = t.slice(n.length);
    return r[0] === "/" ? r : "/" + r
}
function io(t, e) {
    const n = zs(t)
      , r = {
        ...gh(n.search),
        ...e
    };
    return n.search = fm(r),
    wm(n)
}
function mh(t) {
    return !t || t === "/"
}
function bm(t) {
    return t && t !== "/"
}
function Yr(t, ...e) {
    let n = t || "";
    for (const r of e.filter(s => bm(s)))
        if (n) {
            const s = r.replace(mm, "");
            n = ki(n) + s
        } else
            n = r;
    return n
}
function Cm(t, e, n={}) {
    return n.trailingSlash || (t = ki(t),
    e = ki(e)),
    n.leadingSlash || (t = $u(t),
    e = $u(e)),
    n.encoding || (t = Si(t),
    e = Si(e)),
    t === e
}
const yh = Symbol.for("ufo:protocolRelative");
function zs(t="", e) {
    const n = t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);
    if (n) {
        const [,f,h=""] = n;
        return {
            protocol: f.toLowerCase(),
            pathname: h,
            href: f + h,
            auth: "",
            host: "",
            search: "",
            hash: ""
        }
    }
    if (!cr(t, {
        acceptRelative: !0
    }))
        return e ? zs(e + t) : Bu(t);
    const [,r="",s,i=""] = t.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || []
      , [,o="",a=""] = i.match(/([^#/?]*)(.*)?/) || []
      , {pathname: l, search: u, hash: c} = Bu(a.replace(/\/(?=[A-Za-z]:)/, ""));
    return {
        protocol: r.toLowerCase(),
        auth: s ? s.slice(0, Math.max(0, s.length - 1)) : "",
        host: o,
        pathname: l,
        search: u,
        hash: c,
        [yh]: !r
    }
}
function Bu(t="") {
    const [e="",n="",r=""] = (t.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
    return {
        pathname: e,
        search: n,
        hash: r
    }
}
function wm(t) {
    const e = t.pathname || ""
      , n = t.search ? (t.search.startsWith("?") ? "" : "?") + t.search : ""
      , r = t.hash || ""
      , s = t.auth ? t.auth + "@" : ""
      , i = t.host || "";
    return (t.protocol || t[yh] ? (t.protocol || "") + "//" : "") + s + i + e + n + r
}
const Em = () => {
    var t;
    return ((t = window == null ? void 0 : window.__NUXT__) == null ? void 0 : t.config) || {}
}
  , Ri = Em().app
  , Tm = () => Ri.baseURL
  , xm = () => Ri.buildAssetsDir
  , vl = (...t) => Yr(Dh(), xm(), ...t)
  , Dh = (...t) => {
    const e = Ri.cdnURL || Ri.baseURL;
    return t.length ? Yr(e, ...t) : e
}
;
globalThis.__buildAssetsURL = vl,
globalThis.__publicAssetsURL = Dh;
const Sm = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/
  , km = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/
  , Rm = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function Am(t, e) {
    if (t === "__proto__" || t === "constructor" && e && typeof e == "object" && "prototype"in e) {
        Fm(t);
        return
    }
    return e
}
function Fm(t) {
    console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)
}
function Ai(t, e={}) {
    if (typeof t != "string")
        return t;
    const n = t.trim();
    if (t[0] === '"' && t.at(-1) === '"' && !t.includes("\\"))
        return n.slice(1, -1);
    if (n.length <= 9) {
        const r = n.toLowerCase();
        if (r === "true")
            return !0;
        if (r === "false")
            return !1;
        if (r === "undefined")
            return;
        if (r === "null")
            return null;
        if (r === "nan")
            return Number.NaN;
        if (r === "infinity")
            return Number.POSITIVE_INFINITY;
        if (r === "-infinity")
            return Number.NEGATIVE_INFINITY
    }
    if (!Rm.test(t)) {
        if (e.strict)
            throw new SyntaxError("[destr] Invalid JSON");
        return t
    }
    try {
        if (Sm.test(t) || km.test(t)) {
            if (e.strict)
                throw new Error("[destr] Possible prototype pollution");
            return JSON.parse(t, Am)
        }
        return JSON.parse(t)
    } catch (r) {
        if (e.strict)
            throw r;
        return t
    }
}
class Pm extends Error {
    constructor(e, n) {
        super(e, n),
        this.name = "FetchError",
        n != null && n.cause && !this.cause && (this.cause = n.cause)
    }
}
function Om(t) {
    var l, u, c, f, h;
    const e = ((l = t.error) == null ? void 0 : l.message) || ((u = t.error) == null ? void 0 : u.toString()) || ""
      , n = ((c = t.request) == null ? void 0 : c.method) || ((f = t.options) == null ? void 0 : f.method) || "GET"
      , r = ((h = t.request) == null ? void 0 : h.url) || String(t.request) || "/"
      , s = `[${n}] ${JSON.stringify(r)}`
      , i = t.response ? `${t.response.status} ${t.response.statusText}` : "<no response>"
      , o = `${s}: ${i}${e ? ` ${e}` : ""}`
      , a = new Pm(o,t.error ? {
        cause: t.error
    } : void 0);
    for (const d of ["request", "options", "response"])
        Object.defineProperty(a, d, {
            get() {
                return t[d]
            }
        });
    for (const [d,_] of [["data", "_data"], ["status", "status"], ["statusCode", "status"], ["statusText", "statusText"], ["statusMessage", "statusText"]])
        Object.defineProperty(a, d, {
            get() {
                return t.response && t.response[_]
            }
        });
    return a
}
const Mm = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));
function Hu(t="GET") {
    return Mm.has(t.toUpperCase())
}
function Lm(t) {
    if (t === void 0)
        return !1;
    const e = typeof t;
    return e === "string" || e === "number" || e === "boolean" || e === null ? !0 : e !== "object" ? !1 : Array.isArray(t) ? !0 : t.buffer ? !1 : t.constructor && t.constructor.name === "Object" || typeof t.toJSON == "function"
}
const Im = new Set(["image/svg", "application/xml", "application/xhtml", "application/html"])
  , $m = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function Nm(t="") {
    if (!t)
        return "json";
    const e = t.split(";").shift() || "";
    return $m.test(e) ? "json" : Im.has(e) || e.startsWith("text/") ? "text" : "blob"
}
function Bm(t, e, n=globalThis.Headers) {
    const r = {
        ...e,
        ...t
    };
    if (e != null && e.params && (t != null && t.params) && (r.params = {
        ...e == null ? void 0 : e.params,
        ...t == null ? void 0 : t.params
    }),
    e != null && e.query && (t != null && t.query) && (r.query = {
        ...e == null ? void 0 : e.query,
        ...t == null ? void 0 : t.query
    }),
    e != null && e.headers && (t != null && t.headers)) {
        r.headers = new n((e == null ? void 0 : e.headers) || {});
        for (const [s,i] of new n((t == null ? void 0 : t.headers) || {}))
            r.headers.set(s, i)
    }
    return r
}
const Hm = new Set([408, 409, 425, 429, 500, 502, 503, 504])
  , jm = new Set([101, 204, 205, 304]);
function vh(t={}) {
    const {fetch: e=globalThis.fetch, Headers: n=globalThis.Headers, AbortController: r=globalThis.AbortController} = t;
    async function s(a) {
        const l = a.error && a.error.name === "AbortError" && !a.options.timeout || !1;
        if (a.options.retry !== !1 && !l) {
            let c;
            typeof a.options.retry == "number" ? c = a.options.retry : c = Hu(a.options.method) ? 0 : 1;
            const f = a.response && a.response.status || 500;
            if (c > 0 && (Array.isArray(a.options.retryStatusCodes) ? a.options.retryStatusCodes.includes(f) : Hm.has(f))) {
                const h = a.options.retryDelay || 0;
                return h > 0 && await new Promise(d => setTimeout(d, h)),
                i(a.request, {
                    ...a.options,
                    retry: c - 1,
                    timeout: a.options.timeout
                })
            }
        }
        const u = Om(a);
        throw Error.captureStackTrace && Error.captureStackTrace(u, i),
        u
    }
    const i = async function(l, u={}) {
        var h;
        const c = {
            request: l,
            options: Bm(u, t.defaults, n),
            response: void 0,
            error: void 0
        };
        if (c.options.method = (h = c.options.method) == null ? void 0 : h.toUpperCase(),
        c.options.onRequest && await c.options.onRequest(c),
        typeof c.request == "string" && (c.options.baseURL && (c.request = vm(c.request, c.options.baseURL)),
        (c.options.query || c.options.params) && (c.request = io(c.request, {
            ...c.options.params,
            ...c.options.query
        }))),
        c.options.body && Hu(c.options.method) && (Lm(c.options.body) ? (c.options.body = typeof c.options.body == "string" ? c.options.body : JSON.stringify(c.options.body),
        c.options.headers = new n(c.options.headers || {}),
        c.options.headers.has("content-type") || c.options.headers.set("content-type", "application/json"),
        c.options.headers.has("accept") || c.options.headers.set("accept", "application/json")) : ("pipeTo"in c.options.body && typeof c.options.body.pipeTo == "function" || typeof c.options.body.pipe == "function") && ("duplex"in c.options || (c.options.duplex = "half"))),
        !c.options.signal && c.options.timeout) {
            const d = new r;
            setTimeout( () => d.abort(), c.options.timeout),
            c.options.signal = d.signal
        }
        try {
            c.response = await e(c.request, c.options)
        } catch (d) {
            return c.error = d,
            c.options.onRequestError && await c.options.onRequestError(c),
            await s(c)
        }
        if (c.response.body && !jm.has(c.response.status) && c.options.method !== "HEAD") {
            const d = (c.options.parseResponse ? "json" : c.options.responseType) || Nm(c.response.headers.get("content-type") || "");
            switch (d) {
            case "json":
                {
                    const _ = await c.response.text()
                      , p = c.options.parseResponse || Ai;
                    c.response._data = p(_);
                    break
                }
            case "stream":
                {
                    c.response._data = c.response.body;
                    break
                }
            default:
                c.response._data = await c.response[d]()
            }
        }
        return c.options.onResponse && await c.options.onResponse(c),
        !c.options.ignoreResponseError && c.response.status >= 400 && c.response.status < 600 ? (c.options.onResponseError && await c.options.onResponseError(c),
        await s(c)) : c.response
    }
      , o = async function(l, u) {
        return (await i(l, u))._data
    };
    return o.raw = i,
    o.native = (...a) => e(...a),
    o.create = (a={}) => vh({
        ...t,
        defaults: {
            ...t.defaults,
            ...a
        }
    }),
    o
}
const bl = function() {
    if (typeof globalThis < "u")
        return globalThis;
    if (typeof self < "u")
        return self;
    if (typeof window < "u")
        return window;
    if (typeof global < "u")
        return global;
    throw new Error("unable to locate global object")
}()
  , Vm = bl.fetch || ( () => Promise.reject(new Error("[ofetch] global.fetch is not supported!")))
  , Um = bl.Headers
  , zm = bl.AbortController
  , Wm = vh({
    fetch: Vm,
    Headers: Um,
    AbortController: zm
})
  , qm = Wm;
globalThis.$fetch || (globalThis.$fetch = qm.create({
    baseURL: Tm()
}));
function fa(t, e={}, n) {
    for (const r in t) {
        const s = t[r]
          , i = n ? `${n}:${r}` : r;
        typeof s == "object" && s !== null ? fa(s, e, i) : typeof s == "function" && (e[i] = s)
    }
    return e
}
const Km = {
    run: t => t()
}
  , Gm = () => Km
  , bh = typeof console.createTask < "u" ? console.createTask : Gm;
function Ym(t, e) {
    const n = e.shift()
      , r = bh(n);
    return t.reduce( (s, i) => s.then( () => r.run( () => i(...e))), Promise.resolve())
}
function Xm(t, e) {
    const n = e.shift()
      , r = bh(n);
    return Promise.all(t.map(s => r.run( () => s(...e))))
}
function Ao(t, e) {
    for (const n of [...t])
        n(e)
}
class Jm {
    constructor() {
        this._hooks = {},
        this._before = void 0,
        this._after = void 0,
        this._deprecatedMessages = void 0,
        this._deprecatedHooks = {},
        this.hook = this.hook.bind(this),
        this.callHook = this.callHook.bind(this),
        this.callHookWith = this.callHookWith.bind(this)
    }
    hook(e, n, r={}) {
        if (!e || typeof n != "function")
            return () => {}
            ;
        const s = e;
        let i;
        for (; this._deprecatedHooks[e]; )
            i = this._deprecatedHooks[e],
            e = i.to;
        if (i && !r.allowDeprecated) {
            let o = i.message;
            o || (o = `${s} hook has been deprecated` + (i.to ? `, please use ${i.to}` : "")),
            this._deprecatedMessages || (this._deprecatedMessages = new Set),
            this._deprecatedMessages.has(o) || (console.warn(o),
            this._deprecatedMessages.add(o))
        }
        if (!n.name)
            try {
                Object.defineProperty(n, "name", {
                    get: () => "_" + e.replace(/\W+/g, "_") + "_hook_cb",
                    configurable: !0
                })
            } catch {}
        return this._hooks[e] = this._hooks[e] || [],
        this._hooks[e].push(n),
        () => {
            n && (this.removeHook(e, n),
            n = void 0)
        }
    }
    hookOnce(e, n) {
        let r, s = (...i) => (typeof r == "function" && r(),
        r = void 0,
        s = void 0,
        n(...i));
        return r = this.hook(e, s),
        r
    }
    removeHook(e, n) {
        if (this._hooks[e]) {
            const r = this._hooks[e].indexOf(n);
            r !== -1 && this._hooks[e].splice(r, 1),
            this._hooks[e].length === 0 && delete this._hooks[e]
        }
    }
    deprecateHook(e, n) {
        this._deprecatedHooks[e] = typeof n == "string" ? {
            to: n
        } : n;
        const r = this._hooks[e] || [];
        delete this._hooks[e];
        for (const s of r)
            this.hook(e, s)
    }
    deprecateHooks(e) {
        Object.assign(this._deprecatedHooks, e);
        for (const n in e)
            this.deprecateHook(n, e[n])
    }
    addHooks(e) {
        const n = fa(e)
          , r = Object.keys(n).map(s => this.hook(s, n[s]));
        return () => {
            for (const s of r.splice(0, r.length))
                s()
        }
    }
    removeHooks(e) {
        const n = fa(e);
        for (const r in n)
            this.removeHook(r, n[r])
    }
    removeAllHooks() {
        for (const e in this._hooks)
            delete this._hooks[e]
    }
    callHook(e, ...n) {
        return n.unshift(e),
        this.callHookWith(Ym, e, ...n)
    }
    callHookParallel(e, ...n) {
        return n.unshift(e),
        this.callHookWith(Xm, e, ...n)
    }
    callHookWith(e, n, ...r) {
        const s = this._before || this._after ? {
            name: n,
            args: r,
            context: {}
        } : void 0;
        this._before && Ao(this._before, s);
        const i = e(n in this._hooks ? [...this._hooks[n]] : [], r);
        return i instanceof Promise ? i.finally( () => {
            this._after && s && Ao(this._after, s)
        }
        ) : (this._after && s && Ao(this._after, s),
        i)
    }
    beforeEach(e) {
        return this._before = this._before || [],
        this._before.push(e),
        () => {
            if (this._before !== void 0) {
                const n = this._before.indexOf(e);
                n !== -1 && this._before.splice(n, 1)
            }
        }
    }
    afterEach(e) {
        return this._after = this._after || [],
        this._after.push(e),
        () => {
            if (this._after !== void 0) {
                const n = this._after.indexOf(e);
                n !== -1 && this._after.splice(n, 1)
            }
        }
    }
}
function Ch() {
    return new Jm
}
function Qm(t={}) {
    let e, n = !1;
    const r = o => {
        if (e && e !== o)
            throw new Error("Context conflict")
    }
    ;
    let s;
    if (t.asyncContext) {
        const o = t.AsyncLocalStorage || globalThis.AsyncLocalStorage;
        o ? s = new o : console.warn("[unctx] `AsyncLocalStorage` is not provided.")
    }
    const i = () => {
        if (s && e === void 0) {
            const o = s.getStore();
            if (o !== void 0)
                return o
        }
        return e
    }
    ;
    return {
        use: () => {
            const o = i();
            if (o === void 0)
                throw new Error("Context is not available");
            return o
        }
        ,
        tryUse: () => i(),
        set: (o, a) => {
            a || r(o),
            e = o,
            n = !0
        }
        ,
        unset: () => {
            e = void 0,
            n = !1
        }
        ,
        call: (o, a) => {
            r(o),
            e = o;
            try {
                return s ? s.run(o, a) : a()
            } finally {
                n || (e = void 0)
            }
        }
        ,
        async callAsync(o, a) {
            e = o;
            const l = () => {
                e = o
            }
              , u = () => e === o ? l : void 0;
            ha.add(u);
            try {
                const c = s ? s.run(o, a) : a();
                return n || (e = void 0),
                await c
            } finally {
                ha.delete(u)
            }
        }
    }
}
function Zm(t={}) {
    const e = {};
    return {
        get(n, r={}) {
            return e[n] || (e[n] = Qm({
                ...t,
                ...r
            })),
            e[n],
            e[n]
        }
    }
}
const Fi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof global < "u" ? global : typeof window < "u" ? window : {}
  , ju = "__unctx__"
  , ey = Fi[ju] || (Fi[ju] = Zm())
  , ty = (t, e={}) => ey.get(t, e)
  , Vu = "__unctx_async_handlers__"
  , ha = Fi[Vu] || (Fi[Vu] = new Set);
function Rs(t) {
    const e = [];
    for (const s of ha) {
        const i = s();
        i && e.push(i)
    }
    const n = () => {
        for (const s of e)
            s()
    }
    ;
    let r = t();
    return r && typeof r == "object" && "catch"in r && (r = r.catch(s => {
        throw n(),
        s
    }
    )),
    [r, n]
}
const wh = ty("nuxt-app", {
    asyncContext: !1
})
  , ny = "__nuxt_plugin";
function ry(t) {
    let e = 0;
    const n = {
        _scope: Ja(),
        provide: void 0,
        globalName: "nuxt",
        versions: {
            get nuxt() {
                return "3.9.3"
            },
            get vue() {
                return n.vueApp.version
            }
        },
        payload: Yt({
            data: {},
            state: {},
            once: new Set,
            _errors: {},
            ...window.__NUXT__ ?? {}
        }),
        static: {
            data: {}
        },
        runWithContext: s => n._scope.run( () => oy(n, s)),
        isHydrating: !0,
        deferHydration() {
            if (!n.isHydrating)
                return () => {}
                ;
            e++;
            let s = !1;
            return () => {
                if (!s && (s = !0,
                e--,
                e === 0))
                    return n.isHydrating = !1,
                    n.callHook("app:suspense:resolve")
            }
        },
        _asyncDataPromises: {},
        _asyncData: {},
        _payloadRevivers: {},
        ...t
    };
    n.hooks = Ch(),
    n.hook = n.hooks.hook,
    n.callHook = n.hooks.callHook,
    n.provide = (s, i) => {
        const o = "$" + s;
        ri(n, o, i),
        ri(n.vueApp.config.globalProperties, o, i)
    }
    ,
    ri(n.vueApp, "$nuxt", n),
    ri(n.vueApp.config.globalProperties, "$nuxt", n);
    {
        window.addEventListener("nuxt.preloadError", i => {
            n.callHook("app:chunkError", {
                error: i.payload
            })
        }
        ),
        window.useNuxtApp = window.useNuxtApp || ge;
        const s = n.hook("app:error", (...i) => {
            console.error("[nuxt] error caught during app initialization", ...i)
        }
        );
        n.hook("app:mounted", s)
    }
    const r = Yt(n.payload.config);
    return n.provide("config", r),
    n
}
async function sy(t, e) {
    if (e.hooks && t.hooks.addHooks(e.hooks),
    typeof e == "function") {
        const {provide: n} = await t.runWithContext( () => e(t)) || {};
        if (n && typeof n == "object")
            for (const r in n)
                t.provide(r, n[r])
    }
}
async function iy(t, e) {
    const n = []
      , r = []
      , s = []
      , i = [];
    let o = 0;
    async function a(l) {
        if (l.dependsOn && !l.dependsOn.every(u => n.includes(u)))
            r.push([new Set(l.dependsOn), l]);
        else {
            const u = sy(t, l).then(async () => {
                l._name && (n.push(l._name),
                await Promise.all(r.map(async ([c,f]) => {
                    c.has(l._name) && (c.delete(l._name),
                    c.size === 0 && (o++,
                    await a(f)))
                }
                )))
            }
            );
            l.parallel ? s.push(u.catch(c => i.push(c))) : await u
        }
    }
    for (const l of e)
        await a(l);
    if (await Promise.all(s),
    o)
        for (let l = 0; l < o; l++)
            await Promise.all(s);
    if (i.length)
        throw i[0]
}
function At(t) {
    if (typeof t == "function")
        return t;
    const e = t._name || t.name;
    return delete t.name,
    Object.assign(t.setup || ( () => {}
    ), t, {
        [ny]: !0,
        _name: e
    })
}
function oy(t, e, n) {
    const r = () => n ? e(...n) : e();
    return wh.set(t),
    t.vueApp.runWithContext(r)
}
function ge() {
    var e;
    let t;
    if (_l() && (t = (e = In()) == null ? void 0 : e.appContext.app.$nuxt),
    t = t || wh.tryUse(),
    !t)
        throw new Error("[nuxt] instance unavailable");
    return t
}
function fr() {
    return ge().$config
}
function ri(t, e, n) {
    Object.defineProperty(t, e, {
        get: () => n
    })
}
const ay = "modulepreload"
  , ly = function(t, e) {
    return t[0] === "." ? new URL(t,e).href : t
}
  , Uu = {}
  , uy = function(e, n, r) {
    let s = Promise.resolve();
    if (n && n.length > 0) {
        const i = document.getElementsByTagName("link");
        s = Promise.all(n.map(o => {
            if (o = ly(o, r),
            o in Uu)
                return;
            Uu[o] = !0;
            const a = o.endsWith(".css")
              , l = a ? '[rel="stylesheet"]' : "";
            if (!!r)
                for (let f = i.length - 1; f >= 0; f--) {
                    const h = i[f];
                    if (h.href === o && (!a || h.rel === "stylesheet"))
                        return
                }
            else if (document.querySelector(`link[href="${o}"]${l}`))
                return;
            const c = document.createElement("link");
            if (c.rel = a ? "stylesheet" : ay,
            a || (c.as = "script",
            c.crossOrigin = ""),
            c.href = o,
            document.head.appendChild(c),
            a)
                return new Promise( (f, h) => {
                    c.addEventListener("load", f),
                    c.addEventListener("error", () => h(new Error(`Unable to preload CSS for ${o}`)))
                }
                )
        }
        ))
    }
    return s.then( () => e()).catch(i => {
        const o = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (o.payload = i,
        window.dispatchEvent(o),
        !o.defaultPrevented)
            throw i
    }
    )
}
  , fe = (...t) => uy(...t).catch(e => {
    const n = new Event("nuxt.preloadError");
    throw n.payload = e,
    window.dispatchEvent(n),
    e
}
)
  , cy = -1
  , fy = -2
  , hy = -3
  , dy = -4
  , py = -5
  , _y = -6;
function gy(t, e) {
    return my(JSON.parse(t), e)
}
function my(t, e) {
    if (typeof t == "number")
        return s(t, !0);
    if (!Array.isArray(t) || t.length === 0)
        throw new Error("Invalid input");
    const n = t
      , r = Array(n.length);
    function s(i, o=!1) {
        if (i === cy)
            return;
        if (i === hy)
            return NaN;
        if (i === dy)
            return 1 / 0;
        if (i === py)
            return -1 / 0;
        if (i === _y)
            return -0;
        if (o)
            throw new Error("Invalid input");
        if (i in r)
            return r[i];
        const a = n[i];
        if (!a || typeof a != "object")
            r[i] = a;
        else if (Array.isArray(a))
            if (typeof a[0] == "string") {
                const l = a[0]
                  , u = e == null ? void 0 : e[l];
                if (u)
                    return r[i] = u(s(a[1]));
                switch (l) {
                case "Date":
                    r[i] = new Date(a[1]);
                    break;
                case "Set":
                    const c = new Set;
                    r[i] = c;
                    for (let d = 1; d < a.length; d += 1)
                        c.add(s(a[d]));
                    break;
                case "Map":
                    const f = new Map;
                    r[i] = f;
                    for (let d = 1; d < a.length; d += 2)
                        f.set(s(a[d]), s(a[d + 1]));
                    break;
                case "RegExp":
                    r[i] = new RegExp(a[1],a[2]);
                    break;
                case "Object":
                    r[i] = Object(a[1]);
                    break;
                case "BigInt":
                    r[i] = BigInt(a[1]);
                    break;
                case "null":
                    const h = Object.create(null);
                    r[i] = h;
                    for (let d = 1; d < a.length; d += 2)
                        h[a[d]] = s(a[d + 1]);
                    break;
                default:
                    throw new Error(`Unknown type ${l}`)
                }
            } else {
                const l = new Array(a.length);
                r[i] = l;
                for (let u = 0; u < a.length; u += 1) {
                    const c = a[u];
                    c !== fy && (l[u] = s(c))
                }
            }
        else {
            const l = {};
            r[i] = l;
            for (const u in a) {
                const c = a[u];
                l[u] = s(c)
            }
        }
        return r[i]
    }
    return s(0)
}
function yy(t) {
    return Array.isArray(t) ? t : [t]
}
const Dy = ["title", "titleTemplate", "script", "style", "noscript"]
  , ci = ["base", "meta", "link", "style", "script", "noscript"]
  , vy = ["title", "titleTemplate", "templateParams", "base", "htmlAttrs", "bodyAttrs", "meta", "link", "style", "script", "noscript"]
  , by = ["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs", "templateParams"]
  , Eh = ["tagPosition", "tagPriority", "tagDuplicateStrategy", "children", "innerHTML", "textContent", "processTemplateParams"]
  , Cy = typeof window < "u";
function Cl(t) {
    let e = 9;
    for (let n = 0; n < t.length; )
        e = Math.imul(e ^ t.charCodeAt(n++), 9 ** 9);
    return ((e ^ e >>> 9) + 65536).toString(16).substring(1, 8).toLowerCase()
}
function zu(t) {
    return t._h || Cl(t._d ? t._d : `${t.tag}:${t.textContent || t.innerHTML || ""}:${Object.entries(t.props).map( ([e,n]) => `${e}:${String(n)}`).join(",")}`)
}
function Th(t, e) {
    const {props: n, tag: r} = t;
    if (by.includes(r))
        return r;
    if (r === "link" && n.rel === "canonical")
        return "canonical";
    if (n.charset)
        return "charset";
    const s = ["id"];
    r === "meta" && s.push("name", "property", "http-equiv");
    for (const i of s)
        if (typeof n[i] < "u") {
            const o = String(n[i]);
            return e && !e(o) ? !1 : `${r}:${i}:${o}`
        }
    return !1
}
function Wu(t, e) {
    return t == null ? e || null : typeof t == "function" ? t(e) : t
}
async function wy(t, e, n) {
    const r = {
        tag: t,
        props: await xh(typeof e == "object" && typeof e != "function" && !(e instanceof Promise) ? {
            ...e
        } : {
            [["script", "noscript", "style"].includes(t) ? "innerHTML" : "textContent"]: e
        }, ["templateParams", "titleTemplate"].includes(t))
    };
    return Eh.forEach(s => {
        const i = typeof r.props[s] < "u" ? r.props[s] : n[s];
        typeof i < "u" && ((!["innerHTML", "textContent", "children"].includes(s) || Dy.includes(r.tag)) && (r[s === "children" ? "innerHTML" : s] = i),
        delete r.props[s])
    }
    ),
    r.props.body && (r.tagPosition = "bodyClose",
    delete r.props.body),
    r.tag === "script" && typeof r.innerHTML == "object" && (r.innerHTML = JSON.stringify(r.innerHTML),
    r.props.type = r.props.type || "application/json"),
    Array.isArray(r.props.content) ? r.props.content.map(s => ({
        ...r,
        props: {
            ...r.props,
            content: s
        }
    })) : r
}
function Ey(t) {
    return typeof t == "object" && !Array.isArray(t) && (t = Object.keys(t).filter(e => t[e])),
    (Array.isArray(t) ? t.join(" ") : t).split(" ").filter(e => e.trim()).filter(Boolean).join(" ")
}
async function xh(t, e) {
    for (const n of Object.keys(t)) {
        if (n === "class") {
            t[n] = Ey(t[n]);
            continue
        }
        if (t[n]instanceof Promise && (t[n] = await t[n]),
        !e && !Eh.includes(n)) {
            const r = String(t[n])
              , s = n.startsWith("data-");
            r === "true" || r === "" ? t[n] = s ? "true" : !0 : t[n] || (s && r === "false" ? t[n] = "false" : delete t[n])
        }
    }
    return t
}
const Ty = 10;
async function xy(t) {
    const e = [];
    return Object.entries(t.resolvedInput).filter( ([n,r]) => typeof r < "u" && vy.includes(n)).forEach( ([n,r]) => {
        const s = yy(r);
        e.push(...s.map(i => wy(n, i, t)).flat())
    }
    ),
    (await Promise.all(e)).flat().filter(Boolean).map( (n, r) => (n._e = t._i,
    t.mode && (n._m = t.mode),
    n._p = (t._i << Ty) + r,
    n))
}
const qu = {
    base: -10,
    title: 10
}
  , Ku = {
    critical: -80,
    high: -10,
    low: 20
};
function Pi(t) {
    let e = 100;
    const n = t.tagPriority;
    return typeof n == "number" ? n : (t.tag === "meta" ? (t.props["http-equiv"] === "content-security-policy" && (e = -30),
    t.props.charset && (e = -20),
    t.props.name === "viewport" && (e = -15)) : t.tag === "link" && t.props.rel === "preconnect" ? e = 20 : t.tag in qu && (e = qu[t.tag]),
    typeof n == "string" && n in Ku ? e + Ku[n] : e)
}
const Sy = [{
    prefix: "before:",
    offset: -1
}, {
    prefix: "after:",
    offset: 1
}]
  , Sh = ["onload", "onerror", "onabort", "onprogress", "onloadstart"]
  , _n = "%separator";
function fi(t, e, n) {
    if (typeof t != "string" || !t.includes("%"))
        return t;
    function r(o) {
        let a;
        return ["s", "pageTitle"].includes(o) ? a = e.pageTitle : o.includes(".") ? a = o.split(".").reduce( (l, u) => l && l[u] || void 0, e) : a = e[o],
        typeof a < "u" ? (a || "").replace(/"/g, '\\"') : !1
    }
    let s = t;
    try {
        s = decodeURI(t)
    } catch {}
    return (s.match(/%(\w+\.+\w+)|%(\w+)/g) || []).sort().reverse().forEach(o => {
        const a = r(o.slice(1));
        typeof a == "string" && (t = t.replace(new RegExp(`\\${o}(\\W|$)`,"g"), (l, u) => `${a}${u}`).trim())
    }
    ),
    t.includes(_n) && (t.endsWith(_n) && (t = t.slice(0, -_n.length).trim()),
    t.startsWith(_n) && (t = t.slice(_n.length).trim()),
    t = t.replace(new RegExp(`\\${_n}\\s*\\${_n}`,"g"), _n),
    t = fi(t, {
        separator: n
    }, n)),
    t
}
async function ky(t) {
    const e = {
        tag: t.tagName.toLowerCase(),
        props: await xh(t.getAttributeNames().reduce( (n, r) => ({
            ...n,
            [r]: t.getAttribute(r)
        }), {})),
        innerHTML: t.innerHTML
    };
    return e._d = Th(e),
    e
}
async function kh(t, e={}) {
    var c;
    const n = e.document || t.resolvedOptions.document;
    if (!n)
        return;
    const r = {
        shouldRender: t.dirty,
        tags: []
    };
    if (await t.hooks.callHook("dom:beforeRender", r),
    !r.shouldRender)
        return;
    const s = (await t.resolveTags()).map(f => ({
        tag: f,
        id: ci.includes(f.tag) ? zu(f) : f.tag,
        shouldRender: !0
    }));
    let i = t._dom;
    if (!i) {
        i = {
            elMap: {
                htmlAttrs: n.documentElement,
                bodyAttrs: n.body
            }
        };
        for (const f of ["body", "head"]) {
            const h = (c = n == null ? void 0 : n[f]) == null ? void 0 : c.children;
            for (const d of [...h].filter(_ => ci.includes(_.tagName.toLowerCase())))
                i.elMap[d.getAttribute("data-hid") || zu(await ky(d))] = d
        }
    }
    i.pendingSideEffects = {
        ...i.sideEffects || {}
    },
    i.sideEffects = {};
    function o(f, h, d) {
        const _ = `${f}:${h}`;
        i.sideEffects[_] = d,
        delete i.pendingSideEffects[_]
    }
    function a({id: f, $el: h, tag: d}) {
        const _ = d.tag.endsWith("Attrs");
        i.elMap[f] = h,
        _ || (["textContent", "innerHTML"].forEach(p => {
            d[p] && d[p] !== h[p] && (h[p] = d[p])
        }
        ),
        o(f, "el", () => {
            i.elMap[f].remove(),
            delete i.elMap[f]
        }
        )),
        Object.entries(d.props).forEach( ([p,m]) => {
            const v = `attr:${p}`;
            if (p === "class")
                for (const D of (m || "").split(" ").filter(Boolean))
                    _ && o(f, `${v}:${D}`, () => h.classList.remove(D)),
                    !h.classList.contains(D) && h.classList.add(D);
            else
                h.getAttribute(p) !== m && h.setAttribute(p, m === !0 ? "" : String(m)),
                _ && o(f, v, () => h.removeAttribute(p))
        }
        )
    }
    const l = []
      , u = {
        bodyClose: void 0,
        bodyOpen: void 0,
        head: void 0
    };
    for (const f of s) {
        const {tag: h, shouldRender: d, id: _} = f;
        if (d) {
            if (h.tag === "title") {
                n.title = h.textContent;
                continue
            }
            f.$el = f.$el || i.elMap[_],
            f.$el ? a(f) : ci.includes(h.tag) && l.push(f)
        }
    }
    for (const f of l) {
        const h = f.tag.tagPosition || "head";
        f.$el = n.createElement(f.tag.tag),
        a(f),
        u[h] = u[h] || n.createDocumentFragment(),
        u[h].appendChild(f.$el)
    }
    for (const f of s)
        await t.hooks.callHook("dom:renderTag", f, n, o);
    u.head && n.head.appendChild(u.head),
    u.bodyOpen && n.body.insertBefore(u.bodyOpen, n.body.firstChild),
    u.bodyClose && n.body.appendChild(u.bodyClose),
    Object.values(i.pendingSideEffects).forEach(f => f()),
    t._dom = i,
    t.dirty = !1,
    await t.hooks.callHook("dom:rendered", {
        renders: s
    })
}
async function Ry(t, e={}) {
    const n = e.delayFn || (r => setTimeout(r, 10));
    return t._domUpdatePromise = t._domUpdatePromise || new Promise(r => n(async () => {
        await kh(t, e),
        delete t._domUpdatePromise,
        r()
    }
    ))
}
function Ay(t) {
    return e => {
        var r, s;
        const n = ((s = (r = e.resolvedOptions.document) == null ? void 0 : r.head.querySelector('script[id="unhead:payload"]')) == null ? void 0 : s.innerHTML) || !1;
        return n && e.push(JSON.parse(n)),
        {
            mode: "client",
            hooks: {
                "entries:updated": function(i) {
                    Ry(i, t)
                }
            }
        }
    }
}
const Fy = ["templateParams", "htmlAttrs", "bodyAttrs"]
  , Py = {
    hooks: {
        "tag:normalise": function({tag: t}) {
            ["hid", "vmid", "key"].forEach(r => {
                t.props[r] && (t.key = t.props[r],
                delete t.props[r])
            }
            );
            const n = Th(t) || (t.key ? `${t.tag}:${t.key}` : !1);
            n && (t._d = n)
        },
        "tags:resolve": function(t) {
            const e = {};
            t.tags.forEach(r => {
                const s = (r.key ? `${r.tag}:${r.key}` : r._d) || r._p
                  , i = e[s];
                if (i) {
                    let a = r == null ? void 0 : r.tagDuplicateStrategy;
                    if (!a && Fy.includes(r.tag) && (a = "merge"),
                    a === "merge") {
                        const l = i.props;
                        ["class", "style"].forEach(u => {
                            l[u] && (r.props[u] ? (u === "style" && !l[u].endsWith(";") && (l[u] += ";"),
                            r.props[u] = `${l[u]} ${r.props[u]}`) : r.props[u] = l[u])
                        }
                        ),
                        e[s].props = {
                            ...l,
                            ...r.props
                        };
                        return
                    } else if (r._e === i._e) {
                        i._duped = i._duped || [],
                        r._d = `${i._d}:${i._duped.length + 1}`,
                        i._duped.push(r);
                        return
                    } else if (Pi(r) > Pi(i))
                        return
                }
                const o = Object.keys(r.props).length + (r.innerHTML ? 1 : 0) + (r.textContent ? 1 : 0);
                if (ci.includes(r.tag) && o === 0) {
                    delete e[s];
                    return
                }
                e[s] = r
            }
            );
            const n = [];
            Object.values(e).forEach(r => {
                const s = r._duped;
                delete r._duped,
                n.push(r),
                s && n.push(...s)
            }
            ),
            t.tags = n,
            t.tags = t.tags.filter(r => !(r.tag === "meta" && (r.props.name || r.props.property) && !r.props.content))
        }
    }
}
  , Oy = {
    mode: "server",
    hooks: {
        "tags:resolve": function(t) {
            const e = {};
            t.tags.filter(n => ["titleTemplate", "templateParams", "title"].includes(n.tag) && n._m === "server").forEach(n => {
                e[n.tag] = n.tag.startsWith("title") ? n.textContent : n.props
            }
            ),
            Object.keys(e).length && t.tags.push({
                tag: "script",
                innerHTML: JSON.stringify(e),
                props: {
                    id: "unhead:payload",
                    type: "application/json"
                }
            })
        }
    }
}
  , My = ["script", "link", "bodyAttrs"];
function Ly(t) {
    const e = {}
      , n = {};
    return Object.entries(t.props).forEach( ([r,s]) => {
        r.startsWith("on") && typeof s == "function" ? (Sh.includes(r) && (e[r] = `this.dataset.${r} = true`),
        n[r] = s) : e[r] = s
    }
    ),
    {
        props: e,
        eventHandlers: n
    }
}
const Iy = t => ({
    hooks: {
        "tags:resolve": function(e) {
            for (const n of e.tags)
                if (My.includes(n.tag)) {
                    const {props: r, eventHandlers: s} = Ly(n);
                    n.props = r,
                    Object.keys(s).length && ((n.props.src || n.props.href) && (n.key = n.key || Cl(n.props.src || n.props.href)),
                    n._eventHandlers = s)
                }
        },
        "dom:renderTag": function(e, n, r) {
            if (!e.tag._eventHandlers)
                return;
            const s = e.tag.tag === "bodyAttrs" ? n.defaultView : e.$el;
            Object.entries(e.tag._eventHandlers).forEach( ([i,o]) => {
                const a = `${e.tag._d || e.tag._p}:${i}`
                  , l = i.slice(2).toLowerCase()
                  , u = `data-h-${l}`;
                if (r(e.id, a, () => {}
                ),
                e.$el.hasAttribute(u))
                    return;
                e.$el.setAttribute(u, "");
                let c;
                const f = h => {
                    o(h),
                    c == null || c.disconnect()
                }
                ;
                i in e.$el.dataset ? f(new Event(i.replace("on", ""))) : Sh.includes(i) && typeof MutationObserver < "u" ? (c = new MutationObserver(h => {
                    h.some(_ => _.attributeName === `data-${i}`) && (f(new Event(i.replace("on", ""))),
                    c == null || c.disconnect())
                }
                ),
                c.observe(e.$el, {
                    attributes: !0
                })) : s.addEventListener(l, f),
                r(e.id, a, () => {
                    c == null || c.disconnect(),
                    s.removeEventListener(l, f),
                    e.$el.removeAttribute(u)
                }
                )
            }
            )
        }
    }
})
  , $y = ["link", "style", "script", "noscript"]
  , Ny = {
    hooks: {
        "tag:normalise": ({tag: t}) => {
            t.key && $y.includes(t.tag) && (t.props["data-hid"] = t._h = Cl(t.key))
        }
    }
}
  , By = {
    hooks: {
        "tags:resolve": t => {
            const e = n => {
                var r;
                return (r = t.tags.find(s => s._d === n)) == null ? void 0 : r._p
            }
            ;
            for (const {prefix: n, offset: r} of Sy)
                for (const s of t.tags.filter(i => typeof i.tagPriority == "string" && i.tagPriority.startsWith(n))) {
                    const i = e(s.tagPriority.replace(n, ""));
                    typeof i < "u" && (s._p = i + r)
                }
            t.tags.sort( (n, r) => n._p - r._p).sort( (n, r) => Pi(n) - Pi(r))
        }
    }
}
  , Hy = {
    meta: "content",
    link: "href",
    htmlAttrs: "lang"
}
  , jy = t => ({
    hooks: {
        "tags:resolve": e => {
            var a;
            const {tags: n} = e
              , r = (a = n.find(l => l.tag === "title")) == null ? void 0 : a.textContent
              , s = n.findIndex(l => l.tag === "templateParams")
              , i = s !== -1 ? n[s].props : {}
              , o = i.separator || "|";
            delete i.separator,
            i.pageTitle = fi(i.pageTitle || r || "", i, o);
            for (const l of n.filter(u => u.processTemplateParams !== !1)) {
                const u = Hy[l.tag];
                u && typeof l.props[u] == "string" ? l.props[u] = fi(l.props[u], i, o) : (l.processTemplateParams === !0 || ["titleTemplate", "title"].includes(l.tag)) && ["innerHTML", "textContent"].forEach(c => {
                    typeof l[c] == "string" && (l[c] = fi(l[c], i, o))
                }
                )
            }
            t._templateParams = i,
            t._separator = o,
            e.tags = n.filter(l => l.tag !== "templateParams")
        }
    }
})
  , Vy = {
    hooks: {
        "tags:resolve": t => {
            const {tags: e} = t;
            let n = e.findIndex(s => s.tag === "titleTemplate");
            const r = e.findIndex(s => s.tag === "title");
            if (r !== -1 && n !== -1) {
                const s = Wu(e[n].textContent, e[r].textContent);
                s !== null ? e[r].textContent = s || e[r].textContent : delete e[r]
            } else if (n !== -1) {
                const s = Wu(e[n].textContent);
                s !== null && (e[n].textContent = s,
                e[n].tag = "title",
                n = -1)
            }
            n !== -1 && delete e[n],
            t.tags = e.filter(Boolean)
        }
    }
}
  , Uy = {
    hooks: {
        "tags:afterResolve": function(t) {
            for (const e of t.tags)
                typeof e.innerHTML == "string" && (e.innerHTML && ["application/ld+json", "application/json"].includes(e.props.type) ? e.innerHTML = e.innerHTML.replace(/</g, "\\u003C") : e.innerHTML = e.innerHTML.replace(new RegExp(`</${e.tag}`,"g"), `<\\/${e.tag}`))
        }
    }
};
let Rh;
function zy(t={}) {
    const e = Wy(t);
    return e.use(Ay()),
    Rh = e
}
function Gu(t, e) {
    return !t || t === "server" && e || t === "client" && !e
}
function Wy(t={}) {
    const e = Ch();
    e.addHooks(t.hooks || {}),
    t.document = t.document || (Cy ? document : void 0);
    const n = !t.document
      , r = () => {
        a.dirty = !0,
        e.callHook("entries:updated", a)
    }
    ;
    let s = 0
      , i = [];
    const o = []
      , a = {
        plugins: o,
        dirty: !1,
        resolvedOptions: t,
        hooks: e,
        headEntries() {
            return i
        },
        use(l) {
            const u = typeof l == "function" ? l(a) : l;
            (!u.key || !o.some(c => c.key === u.key)) && (o.push(u),
            Gu(u.mode, n) && e.addHooks(u.hooks || {}))
        },
        push(l, u) {
            u == null || delete u.head;
            const c = {
                _i: s++,
                input: l,
                ...u
            };
            return Gu(c.mode, n) && (i.push(c),
            r()),
            {
                dispose() {
                    i = i.filter(f => f._i !== c._i),
                    e.callHook("entries:updated", a),
                    r()
                },
                patch(f) {
                    i = i.map(h => (h._i === c._i && (h.input = c.input = f),
                    h)),
                    r()
                }
            }
        },
        async resolveTags() {
            const l = {
                tags: [],
                entries: [...i]
            };
            await e.callHook("entries:resolve", l);
            for (const u of l.entries) {
                const c = u.resolvedInput || u.input;
                if (u.resolvedInput = await (u.transform ? u.transform(c) : c),
                u.resolvedInput)
                    for (const f of await xy(u)) {
                        const h = {
                            tag: f,
                            entry: u,
                            resolvedOptions: a.resolvedOptions
                        };
                        await e.callHook("tag:normalise", h),
                        l.tags.push(h.tag)
                    }
            }
            return await e.callHook("tags:beforeResolve", l),
            await e.callHook("tags:resolve", l),
            await e.callHook("tags:afterResolve", l),
            l.tags
        },
        ssr: n
    };
    return [Py, Oy, Iy, Ny, By, jy, Vy, Uy, ...(t == null ? void 0 : t.plugins) || []].forEach(l => a.use(l)),
    a.hooks.callHook("init", a),
    a
}
function qy() {
    return Rh
}
const Ky = ih.startsWith("3");
function Gy(t) {
    return typeof t == "function" ? t() : q(t)
}
function Oi(t, e="") {
    if (t instanceof Promise)
        return t;
    const n = Gy(t);
    return !t || !n ? n : Array.isArray(n) ? n.map(r => Oi(r, e)) : typeof n == "object" ? Object.fromEntries(Object.entries(n).map( ([r,s]) => r === "titleTemplate" || r.startsWith("on") ? [r, q(s)] : [r, Oi(s, r)])) : n
}
const Yy = {
    hooks: {
        "entries:resolve": function(t) {
            for (const e of t.entries)
                e.resolvedInput = Oi(e.input)
        }
    }
}
  , Ah = "usehead";
function Xy(t) {
    return {
        install(n) {
            Ky && (n.config.globalProperties.$unhead = t,
            n.config.globalProperties.$head = t,
            n.provide(Ah, t))
        }
    }.install
}
function Jy(t={}) {
    t.domDelayFn = t.domDelayFn || (n => Ln( () => setTimeout( () => n(), 0)));
    const e = zy(t);
    return e.use(Yy),
    e.install = Xy(e),
    e
}
const da = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}
  , pa = "__unhead_injection_handler__";
function Qy(t) {
    da[pa] = t
}
function Zy() {
    if (pa in da)
        return da[pa]();
    const t = et(Ah);
    return t || qy()
}
function Fh(t, e={}) {
    const n = e.head || Zy();
    if (n)
        return n.ssr ? n.push(t, e) : e0(n, t, e)
}
function e0(t, e, n={}) {
    const r = ae(!1)
      , s = ae({});
    Af( () => {
        s.value = r.value ? {} : Oi(e)
    }
    );
    const i = t.push(s.value, n);
    return kt(s, a => {
        i.patch(a)
    }
    ),
    In() && (js( () => {
        i.dispose()
    }
    ),
    If( () => {
        r.value = !0
    }
    ),
    Lf( () => {
        r.value = !1
    }
    )),
    i
}
function t0(t) {
    return {
        ctx: {
            table: t
        },
        matchAll: e => Oh(e, t)
    }
}
function Ph(t) {
    const e = {};
    for (const n in t)
        e[n] = n === "dynamic" ? new Map(Object.entries(t[n]).map( ([r,s]) => [r, Ph(s)])) : new Map(Object.entries(t[n]));
    return e
}
function n0(t) {
    return t0(Ph(t))
}
function Oh(t, e) {
    const n = [];
    for (const [s,i] of Yu(e.wildcard))
        t.startsWith(s) && n.push(i);
    for (const [s,i] of Yu(e.dynamic))
        if (t.startsWith(s + "/")) {
            const o = "/" + t.slice(s.length).split("/").splice(2).join("/");
            n.push(...Oh(o, i))
        }
    const r = e.static.get(t);
    return r && n.push(r),
    n.filter(Boolean)
}
function Yu(t) {
    return [...t.entries()].sort( (e, n) => e[0].length - n[0].length)
}
function Fo(t) {
    if (t === null || typeof t != "object")
        return !1;
    const e = Object.getPrototypeOf(t);
    return e !== null && e !== Object.prototype && Object.getPrototypeOf(e) !== null || Symbol.iterator in t ? !1 : Symbol.toStringTag in t ? Object.prototype.toString.call(t) === "[object Module]" : !0
}
function _a(t, e, n=".", r) {
    if (!Fo(e))
        return _a(t, {}, n, r);
    const s = Object.assign({}, e);
    for (const i in t) {
        if (i === "__proto__" || i === "constructor")
            continue;
        const o = t[i];
        o != null && (r && r(s, i, o, n) || (Array.isArray(o) && Array.isArray(s[i]) ? s[i] = [...o, ...s[i]] : Fo(o) && Fo(s[i]) ? s[i] = _a(o, s[i], (n ? `${n}.` : "") + i.toString(), r) : s[i] = o))
    }
    return s
}
function Mh(t) {
    return (...e) => e.reduce( (n, r) => _a(n, r, "", t), {})
}
const Lh = Mh()
  , r0 = Mh( (t, e, n) => {
    if (t[e] !== void 0 && typeof n == "function")
        return t[e] = n(t[e]),
        !0
}
);
function s0(t, e) {
    try {
        return e in t
    } catch {
        return !1
    }
}
var i0 = Object.defineProperty
  , o0 = (t, e, n) => e in t ? i0(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : t[e] = n
  , Un = (t, e, n) => (o0(t, typeof e != "symbol" ? e + "" : e, n),
n);
class ga extends Error {
    constructor(e, n={}) {
        super(e, n),
        Un(this, "statusCode", 500),
        Un(this, "fatal", !1),
        Un(this, "unhandled", !1),
        Un(this, "statusMessage"),
        Un(this, "data"),
        Un(this, "cause"),
        n.cause && !this.cause && (this.cause = n.cause)
    }
    toJSON() {
        const e = {
            message: this.message,
            statusCode: ya(this.statusCode, 500)
        };
        return this.statusMessage && (e.statusMessage = Ih(this.statusMessage)),
        this.data !== void 0 && (e.data = this.data),
        e
    }
}
Un(ga, "__h3_error__", !0);
function ma(t) {
    if (typeof t == "string")
        return new ga(t);
    if (a0(t))
        return t;
    const e = new ga(t.message ?? t.statusMessage ?? "",{
        cause: t.cause || t
    });
    if (s0(t, "stack"))
        try {
            Object.defineProperty(e, "stack", {
                get() {
                    return t.stack
                }
            })
        } catch {
            try {
                e.stack = t.stack
            } catch {}
        }
    if (t.data && (e.data = t.data),
    t.statusCode ? e.statusCode = ya(t.statusCode, e.statusCode) : t.status && (e.statusCode = ya(t.status, e.statusCode)),
    t.statusMessage ? e.statusMessage = t.statusMessage : t.statusText && (e.statusMessage = t.statusText),
    e.statusMessage) {
        const n = e.statusMessage;
        Ih(e.statusMessage) !== n && console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")
    }
    return t.fatal !== void 0 && (e.fatal = t.fatal),
    t.unhandled !== void 0 && (e.unhandled = t.unhandled),
    e
}
function a0(t) {
    var e;
    return ((e = t == null ? void 0 : t.constructor) == null ? void 0 : e.__h3_error__) === !0
}
const l0 = /[^\u0009\u0020-\u007E]/g;
function Ih(t="") {
    return t.replace(l0, "")
}
function ya(t, e=200) {
    return !t || (typeof t == "string" && (t = Number.parseInt(t, 10)),
    t < 100 || t > 999) ? e : t
}
const u0 = Symbol("layout-meta")
  , oo = Symbol("route")
  , $h = "__nuxt_error"
  , ao = () => Xi(ge().payload, "error")
  , yr = t => {
    const e = lo(t);
    try {
        const n = ge()
          , r = ao();
        n.hooks.callHook("app:error", e),
        r.value = r.value || e
    } catch {
        throw e
    }
    return e
}
  , c0 = async (t={}) => {
    const e = ge()
      , n = ao();
    e.callHook("app:error:cleared", t),
    t.redirect && await fn().replace(t.redirect),
    n.value = null
}
  , f0 = t => !!t && typeof t == "object" && $h in t
  , lo = t => {
    const e = ma(t);
    return Object.defineProperty(e, $h, {
        value: !0,
        configurable: !1,
        writable: !1
    }),
    e
}
  , fn = () => {
    var t;
    return (t = ge()) == null ? void 0 : t.$router
}
  , uo = () => _l() ? et(oo, ge()._route) : ge()._route;
const h0 = () => {
    try {
        if (ge()._processingMiddleware)
            return !0
    } catch {
        return !0
    }
    return !1
}
  , d0 = (t, e) => {
    t || (t = "/");
    const n = typeof t == "string" ? t : io(t.path || "/", t.query || {}) + (t.hash || "");
    if (e != null && e.open) {
        {
            const {target: a="_blank", windowFeatures: l={}} = e.open
              , u = Object.entries(l).filter( ([c,f]) => f !== void 0).map( ([c,f]) => `${c.toLowerCase()}=${f}`).join(", ");
            open(n, a, u)
        }
        return Promise.resolve()
    }
    const r = (e == null ? void 0 : e.external) || cr(n, {
        acceptRelative: !0
    });
    if (r) {
        if (!(e != null && e.external))
            throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
        const a = zs(n).protocol;
        if (a && ym(a))
            throw new Error(`Cannot navigate to a URL with '${a}' protocol.`)
    }
    const s = h0();
    if (!r && s)
        return t;
    const i = fn()
      , o = ge();
    return r ? (o._scope.stop(),
    e != null && e.replace ? location.replace(n) : location.href = n,
    s ? o.isHydrating ? new Promise( () => {}
    ) : !1 : Promise.resolve()) : e != null && e.replace ? i.replace(t) : i.push(t)
}
  , p0 = {
    nuxt: {
        buildId: "b90a06fc-06d4-4029-8b71-23fa2f428405"
    }
}
  , _0 = r0(p0);
function g0() {
    const t = ge();
    return t._appConfig || (t._appConfig = Yt(_0)),
    t._appConfig
}
const Da = {
    name: "page",
    mode: "out-in"
}
  , m0 = !1
  , y0 = {
    componentName: "NuxtLink"
}
  , D0 = {
    deep: !0
}
  , v0 = "#__nuxt";
let hi, Nh;
function b0() {
    var e;
    const t = (e = g0().nuxt) == null ? void 0 : e.buildId;
    return hi = $fetch(vl(`builds/meta/${t}.json`)),
    hi.then(n => {
        Nh = n0(n.matcher)
    }
    ),
    hi
}
function co() {
    return hi || b0()
}
async function Bh(t) {
    return await co(),
    Lh({}, ...Nh.matchAll(t).reverse())
}
function Xu(t, e={}) {
    const n = C0(t, e)
      , r = ge()
      , s = r._payloadCache = r._payloadCache || {};
    return n in s || (s[n] = w0(t).then(i => i ? Hh(n).then(o => o || (delete s[n],
    null)) : (s[n] = null,
    null))),
    s[n]
}
const Ju = "json";
function C0(t, e={}) {
    const n = new URL(t,"http://localhost");
    if (n.search)
        throw new Error("Payload URL cannot contain search params: " + t);
    if (n.host !== "localhost" || cr(n.pathname, {
        acceptRelative: !0
    }))
        throw new Error("Payload URL must not include hostname: " + t);
    const r = e.hash || (e.fresh ? Date.now() : "");
    return Yr(fr().app.baseURL, n.pathname, r ? `_payload.${r}.${Ju}` : `_payload.${Ju}`)
}
async function Hh(t) {
    const e = fetch(t).then(n => n.text().then(jh));
    try {
        return await e
    } catch (n) {
        console.warn("[nuxt] Cannot load payload ", t, n)
    }
    return null
}
async function w0(t=uo().path) {
    if (t = so(t),
    (await co()).prerendered.includes(t))
        return !0;
    const n = await Bh(t);
    return !!n.prerender && !n.redirect
}
let si = null;
async function E0() {
    if (si)
        return si;
    const t = document.getElementById("__NUXT_DATA__");
    if (!t)
        return {};
    const e = await jh(t.textContent || "")
      , n = t.dataset.src ? await Hh(t.dataset.src) : void 0;
    return si = {
        ...e,
        ...n,
        ...window.__NUXT__
    },
    si
}
async function jh(t) {
    return await gy(t, ge()._payloadRevivers)
}
function T0(t, e) {
    ge()._payloadRevivers[t] = e
}
const Qu = {
    NuxtError: t => lo(t),
    EmptyShallowRef: t => Pr(t === "_" ? void 0 : t === "0n" ? BigInt(0) : Ai(t)),
    EmptyRef: t => ae(t === "_" ? void 0 : t === "0n" ? BigInt(0) : Ai(t)),
    ShallowRef: t => Pr(t),
    ShallowReactive: t => Bs(t),
    Ref: t => ae(t),
    Reactive: t => Yt(t)
}
  , x0 = At({
    name: "nuxt:revive-payload:client",
    order: -30,
    async setup(t) {
        let e, n;
        for (const r in Qu)
            T0(r, Qu[r]);
        Object.assign(t.payload, ([e,n] = Rs( () => t.runWithContext(E0)),
        e = await e,
        n(),
        e)),
        window.__NUXT__ = t.payload
    }
})
  , S0 = []
  , k0 = At({
    name: "nuxt:head",
    enforce: "pre",
    setup(t) {
        const e = Jy({
            plugins: S0
        });
        Qy( () => ge().vueApp._context.provides.usehead),
        t.vueApp.use(e);
        {
            let n = !0;
            const r = async () => {
                n = !1,
                await kh(e)
            }
            ;
            e.hooks.hook("dom:beforeRender", s => {
                s.shouldRender = !n
            }
            ),
            t.hooks.hook("page:start", () => {
                n = !0
            }
            ),
            t.hooks.hook("page:finish", () => {
                t.isHydrating || r()
            }
            ),
            t.hooks.hook("app:error", r),
            t.hooks.hook("app:suspense:resolve", r)
        }
    }
});
/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
const mr = typeof window < "u";
function R0(t) {
    return t.__esModule || t[Symbol.toStringTag] === "Module"
}
const pe = Object.assign;
function Po(t, e) {
    const n = {};
    for (const r in e) {
        const s = e[r];
        n[r] = $t(s) ? s.map(t) : t(s)
    }
    return n
}
const ps = () => {}
  , $t = Array.isArray
  , A0 = /\/$/
  , F0 = t => t.replace(A0, "");
function Oo(t, e, n="/") {
    let r, s = {}, i = "", o = "";
    const a = e.indexOf("#");
    let l = e.indexOf("?");
    return a < l && a >= 0 && (l = -1),
    l > -1 && (r = e.slice(0, l),
    i = e.slice(l + 1, a > -1 ? a : e.length),
    s = t(i)),
    a > -1 && (r = r || e.slice(0, a),
    o = e.slice(a, e.length)),
    r = L0(r ?? e, n),
    {
        fullPath: r + (i && "?") + i + o,
        path: r,
        query: s,
        hash: o
    }
}
function P0(t, e) {
    const n = e.query ? t(e.query) : "";
    return e.path + (n && "?") + n + (e.hash || "")
}
function Zu(t, e) {
    return !e || !t.toLowerCase().startsWith(e.toLowerCase()) ? t : t.slice(e.length) || "/"
}
function O0(t, e, n) {
    const r = e.matched.length - 1
      , s = n.matched.length - 1;
    return r > -1 && r === s && Nr(e.matched[r], n.matched[s]) && Vh(e.params, n.params) && t(e.query) === t(n.query) && e.hash === n.hash
}
function Nr(t, e) {
    return (t.aliasOf || t) === (e.aliasOf || e)
}
function Vh(t, e) {
    if (Object.keys(t).length !== Object.keys(e).length)
        return !1;
    for (const n in t)
        if (!M0(t[n], e[n]))
            return !1;
    return !0
}
function M0(t, e) {
    return $t(t) ? ec(t, e) : $t(e) ? ec(e, t) : t === e
}
function ec(t, e) {
    return $t(e) ? t.length === e.length && t.every( (n, r) => n === e[r]) : t.length === 1 && t[0] === e
}
function L0(t, e) {
    if (t.startsWith("/"))
        return t;
    if (!t)
        return e;
    const n = e.split("/")
      , r = t.split("/")
      , s = r[r.length - 1];
    (s === ".." || s === ".") && r.push("");
    let i = n.length - 1, o, a;
    for (o = 0; o < r.length; o++)
        if (a = r[o],
        a !== ".")
            if (a === "..")
                i > 1 && i--;
            else
                break;
    return n.slice(0, i).join("/") + "/" + r.slice(o - (o === r.length ? 1 : 0)).join("/")
}
var As;
(function(t) {
    t.pop = "pop",
    t.push = "push"
}
)(As || (As = {}));
var _s;
(function(t) {
    t.back = "back",
    t.forward = "forward",
    t.unknown = ""
}
)(_s || (_s = {}));
function I0(t) {
    if (!t)
        if (mr) {
            const e = document.querySelector("base");
            t = e && e.getAttribute("href") || "/",
            t = t.replace(/^\w+:\/\/[^\/]+/, "")
        } else
            t = "/";
    return t[0] !== "/" && t[0] !== "#" && (t = "/" + t),
    F0(t)
}
const $0 = /^[^#]+#/;
function N0(t, e) {
    return t.replace($0, "#") + e
}
function B0(t, e) {
    const n = document.documentElement.getBoundingClientRect()
      , r = t.getBoundingClientRect();
    return {
        behavior: e.behavior,
        left: r.left - n.left - (e.left || 0),
        top: r.top - n.top - (e.top || 0)
    }
}
const fo = () => ({
    left: window.pageXOffset,
    top: window.pageYOffset
});
function H0(t) {
    let e;
    if ("el"in t) {
        const n = t.el
          , r = typeof n == "string" && n.startsWith("#")
          , s = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
        if (!s)
            return;
        e = B0(s, t)
    } else
        e = t;
    "scrollBehavior"in document.documentElement.style ? window.scrollTo(e) : window.scrollTo(e.left != null ? e.left : window.pageXOffset, e.top != null ? e.top : window.pageYOffset)
}
function tc(t, e) {
    return (history.state ? history.state.position - e : -1) + t
}
const va = new Map;
function j0(t, e) {
    va.set(t, e)
}
function V0(t) {
    const e = va.get(t);
    return va.delete(t),
    e
}
let U0 = () => location.protocol + "//" + location.host;
function Uh(t, e) {
    const {pathname: n, search: r, hash: s} = e
      , i = t.indexOf("#");
    if (i > -1) {
        let a = s.includes(t.slice(i)) ? t.slice(i).length : 1
          , l = s.slice(a);
        return l[0] !== "/" && (l = "/" + l),
        Zu(l, "")
    }
    return Zu(n, t) + r + s
}
function z0(t, e, n, r) {
    let s = []
      , i = []
      , o = null;
    const a = ({state: h}) => {
        const d = Uh(t, location)
          , _ = n.value
          , p = e.value;
        let m = 0;
        if (h) {
            if (n.value = d,
            e.value = h,
            o && o === _) {
                o = null;
                return
            }
            m = p ? h.position - p.position : 0
        } else
            r(d);
        s.forEach(v => {
            v(n.value, _, {
                delta: m,
                type: As.pop,
                direction: m ? m > 0 ? _s.forward : _s.back : _s.unknown
            })
        }
        )
    }
    ;
    function l() {
        o = n.value
    }
    function u(h) {
        s.push(h);
        const d = () => {
            const _ = s.indexOf(h);
            _ > -1 && s.splice(_, 1)
        }
        ;
        return i.push(d),
        d
    }
    function c() {
        const {history: h} = window;
        h.state && h.replaceState(pe({}, h.state, {
            scroll: fo()
        }), "")
    }
    function f() {
        for (const h of i)
            h();
        i = [],
        window.removeEventListener("popstate", a),
        window.removeEventListener("beforeunload", c)
    }
    return window.addEventListener("popstate", a),
    window.addEventListener("beforeunload", c, {
        passive: !0
    }),
    {
        pauseListeners: l,
        listen: u,
        destroy: f
    }
}
function nc(t, e, n, r=!1, s=!1) {
    return {
        back: t,
        current: e,
        forward: n,
        replaced: r,
        position: window.history.length,
        scroll: s ? fo() : null
    }
}
function W0(t) {
    const {history: e, location: n} = window
      , r = {
        value: Uh(t, n)
    }
      , s = {
        value: e.state
    };
    s.value || i(r.value, {
        back: null,
        current: r.value,
        forward: null,
        position: e.length - 1,
        replaced: !0,
        scroll: null
    }, !0);
    function i(l, u, c) {
        const f = t.indexOf("#")
          , h = f > -1 ? (n.host && document.querySelector("base") ? t : t.slice(f)) + l : U0() + t + l;
        try {
            e[c ? "replaceState" : "pushState"](u, "", h),
            s.value = u
        } catch (d) {
            console.error(d),
            n[c ? "replace" : "assign"](h)
        }
    }
    function o(l, u) {
        const c = pe({}, e.state, nc(s.value.back, l, s.value.forward, !0), u, {
            position: s.value.position
        });
        i(l, c, !0),
        r.value = l
    }
    function a(l, u) {
        const c = pe({}, s.value, e.state, {
            forward: l,
            scroll: fo()
        });
        i(c.current, c, !0);
        const f = pe({}, nc(r.value, l, null), {
            position: c.position + 1
        }, u);
        i(l, f, !1),
        r.value = l
    }
    return {
        location: r,
        state: s,
        push: a,
        replace: o
    }
}
function zh(t) {
    t = I0(t);
    const e = W0(t)
      , n = z0(t, e.state, e.location, e.replace);
    function r(i, o=!0) {
        o || n.pauseListeners(),
        history.go(i)
    }
    const s = pe({
        location: "",
        base: t,
        go: r,
        createHref: N0.bind(null, t)
    }, e, n);
    return Object.defineProperty(s, "location", {
        enumerable: !0,
        get: () => e.location.value
    }),
    Object.defineProperty(s, "state", {
        enumerable: !0,
        get: () => e.state.value
    }),
    s
}
function q0(t) {
    return t = location.host ? t || location.pathname + location.search : "",
    t.includes("#") || (t += "#"),
    zh(t)
}
function K0(t) {
    return typeof t == "string" || t && typeof t == "object"
}
function Wh(t) {
    return typeof t == "string" || typeof t == "symbol"
}
const Pt = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
}
  , qh = Symbol("");
var rc;
(function(t) {
    t[t.aborted = 4] = "aborted",
    t[t.cancelled = 8] = "cancelled",
    t[t.duplicated = 16] = "duplicated"
}
)(rc || (rc = {}));
function Br(t, e) {
    return pe(new Error, {
        type: t,
        [qh]: !0
    }, e)
}
function Jt(t, e) {
    return t instanceof Error && qh in t && (e == null || !!(t.type & e))
}
const sc = "[^/]+?"
  , G0 = {
    sensitive: !1,
    strict: !1,
    start: !0,
    end: !0
}
  , Y0 = /[.+*?^${}()[\]/\\]/g;
function X0(t, e) {
    const n = pe({}, G0, e)
      , r = [];
    let s = n.start ? "^" : "";
    const i = [];
    for (const u of t) {
        const c = u.length ? [] : [90];
        n.strict && !u.length && (s += "/");
        for (let f = 0; f < u.length; f++) {
            const h = u[f];
            let d = 40 + (n.sensitive ? .25 : 0);
            if (h.type === 0)
                f || (s += "/"),
                s += h.value.replace(Y0, "\\$&"),
                d += 40;
            else if (h.type === 1) {
                const {value: _, repeatable: p, optional: m, regexp: v} = h;
                i.push({
                    name: _,
                    repeatable: p,
                    optional: m
                });
                const D = v || sc;
                if (D !== sc) {
                    d += 10;
                    try {
                        new RegExp(`(${D})`)
                    } catch (y) {
                        throw new Error(`Invalid custom RegExp for param "${_}" (${D}): ` + y.message)
                    }
                }
                let g = p ? `((?:${D})(?:/(?:${D}))*)` : `(${D})`;
                f || (g = m && u.length < 2 ? `(?:/${g})` : "/" + g),
                m && (g += "?"),
                s += g,
                d += 20,
                m && (d += -8),
                p && (d += -20),
                D === ".*" && (d += -50)
            }
            c.push(d)
        }
        r.push(c)
    }
    if (n.strict && n.end) {
        const u = r.length - 1;
        r[u][r[u].length - 1] += .7000000000000001
    }
    n.strict || (s += "/?"),
    n.end ? s += "$" : n.strict && (s += "(?:/|$)");
    const o = new RegExp(s,n.sensitive ? "" : "i");
    function a(u) {
        const c = u.match(o)
          , f = {};
        if (!c)
            return null;
        for (let h = 1; h < c.length; h++) {
            const d = c[h] || ""
              , _ = i[h - 1];
            f[_.name] = d && _.repeatable ? d.split("/") : d
        }
        return f
    }
    function l(u) {
        let c = ""
          , f = !1;
        for (const h of t) {
            (!f || !c.endsWith("/")) && (c += "/"),
            f = !1;
            for (const d of h)
                if (d.type === 0)
                    c += d.value;
                else if (d.type === 1) {
                    const {value: _, repeatable: p, optional: m} = d
                      , v = _ in u ? u[_] : "";
                    if ($t(v) && !p)
                        throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);
                    const D = $t(v) ? v.join("/") : v;
                    if (!D)
                        if (m)
                            h.length < 2 && (c.endsWith("/") ? c = c.slice(0, -1) : f = !0);
                        else
                            throw new Error(`Missing required param "${_}"`);
                    c += D
                }
        }
        return c || "/"
    }
    return {
        re: o,
        score: r,
        keys: i,
        parse: a,
        stringify: l
    }
}
function J0(t, e) {
    let n = 0;
    for (; n < t.length && n < e.length; ) {
        const r = e[n] - t[n];
        if (r)
            return r;
        n++
    }
    return t.length < e.length ? t.length === 1 && t[0] === 80 ? -1 : 1 : t.length > e.length ? e.length === 1 && e[0] === 80 ? 1 : -1 : 0
}
function Q0(t, e) {
    let n = 0;
    const r = t.score
      , s = e.score;
    for (; n < r.length && n < s.length; ) {
        const i = J0(r[n], s[n]);
        if (i)
            return i;
        n++
    }
    if (Math.abs(s.length - r.length) === 1) {
        if (ic(r))
            return 1;
        if (ic(s))
            return -1
    }
    return s.length - r.length
}
function ic(t) {
    const e = t[t.length - 1];
    return t.length > 0 && e[e.length - 1] < 0
}
const Z0 = {
    type: 0,
    value: ""
}
  , eD = /[a-zA-Z0-9_]/;
function tD(t) {
    if (!t)
        return [[]];
    if (t === "/")
        return [[Z0]];
    if (!t.startsWith("/"))
        throw new Error(`Invalid path "${t}"`);
    function e(d) {
        throw new Error(`ERR (${n})/"${u}": ${d}`)
    }
    let n = 0
      , r = n;
    const s = [];
    let i;
    function o() {
        i && s.push(i),
        i = []
    }
    let a = 0, l, u = "", c = "";
    function f() {
        u && (n === 0 ? i.push({
            type: 0,
            value: u
        }) : n === 1 || n === 2 || n === 3 ? (i.length > 1 && (l === "*" || l === "+") && e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),
        i.push({
            type: 1,
            value: u,
            regexp: c,
            repeatable: l === "*" || l === "+",
            optional: l === "*" || l === "?"
        })) : e("Invalid state to consume buffer"),
        u = "")
    }
    function h() {
        u += l
    }
    for (; a < t.length; ) {
        if (l = t[a++],
        l === "\\" && n !== 2) {
            r = n,
            n = 4;
            continue
        }
        switch (n) {
        case 0:
            l === "/" ? (u && f(),
            o()) : l === ":" ? (f(),
            n = 1) : h();
            break;
        case 4:
            h(),
            n = r;
            break;
        case 1:
            l === "(" ? n = 2 : eD.test(l) ? h() : (f(),
            n = 0,
            l !== "*" && l !== "?" && l !== "+" && a--);
            break;
        case 2:
            l === ")" ? c[c.length - 1] == "\\" ? c = c.slice(0, -1) + l : n = 3 : c += l;
            break;
        case 3:
            f(),
            n = 0,
            l !== "*" && l !== "?" && l !== "+" && a--,
            c = "";
            break;
        default:
            e("Unknown state");
            break
        }
    }
    return n === 2 && e(`Unfinished custom RegExp for param "${u}"`),
    f(),
    o(),
    s
}
function nD(t, e, n) {
    const r = X0(tD(t.path), n)
      , s = pe(r, {
        record: t,
        parent: e,
        children: [],
        alias: []
    });
    return e && !s.record.aliasOf == !e.record.aliasOf && e.children.push(s),
    s
}
function rD(t, e) {
    const n = []
      , r = new Map;
    e = lc({
        strict: !1,
        end: !0,
        sensitive: !1
    }, e);
    function s(c) {
        return r.get(c)
    }
    function i(c, f, h) {
        const d = !h
          , _ = sD(c);
        _.aliasOf = h && h.record;
        const p = lc(e, c)
          , m = [_];
        if ("alias"in c) {
            const g = typeof c.alias == "string" ? [c.alias] : c.alias;
            for (const y of g)
                m.push(pe({}, _, {
                    components: h ? h.record.components : _.components,
                    path: y,
                    aliasOf: h ? h.record : _
                }))
        }
        let v, D;
        for (const g of m) {
            const {path: y} = g;
            if (f && y[0] !== "/") {
                const C = f.record.path
                  , E = C[C.length - 1] === "/" ? "" : "/";
                g.path = f.record.path + (y && E + y)
            }
            if (v = nD(g, f, p),
            h ? h.alias.push(v) : (D = D || v,
            D !== v && D.alias.push(v),
            d && c.name && !ac(v) && o(c.name)),
            _.children) {
                const C = _.children;
                for (let E = 0; E < C.length; E++)
                    i(C[E], v, h && h.children[E])
            }
            h = h || v,
            (v.record.components && Object.keys(v.record.components).length || v.record.name || v.record.redirect) && l(v)
        }
        return D ? () => {
            o(D)
        }
        : ps
    }
    function o(c) {
        if (Wh(c)) {
            const f = r.get(c);
            f && (r.delete(c),
            n.splice(n.indexOf(f), 1),
            f.children.forEach(o),
            f.alias.forEach(o))
        } else {
            const f = n.indexOf(c);
            f > -1 && (n.splice(f, 1),
            c.record.name && r.delete(c.record.name),
            c.children.forEach(o),
            c.alias.forEach(o))
        }
    }
    function a() {
        return n
    }
    function l(c) {
        let f = 0;
        for (; f < n.length && Q0(c, n[f]) >= 0 && (c.record.path !== n[f].record.path || !Kh(c, n[f])); )
            f++;
        n.splice(f, 0, c),
        c.record.name && !ac(c) && r.set(c.record.name, c)
    }
    function u(c, f) {
        let h, d = {}, _, p;
        if ("name"in c && c.name) {
            if (h = r.get(c.name),
            !h)
                throw Br(1, {
                    location: c
                });
            p = h.record.name,
            d = pe(oc(f.params, h.keys.filter(D => !D.optional).map(D => D.name)), c.params && oc(c.params, h.keys.map(D => D.name))),
            _ = h.stringify(d)
        } else if ("path"in c)
            _ = c.path,
            h = n.find(D => D.re.test(_)),
            h && (d = h.parse(_),
            p = h.record.name);
        else {
            if (h = f.name ? r.get(f.name) : n.find(D => D.re.test(f.path)),
            !h)
                throw Br(1, {
                    location: c,
                    currentLocation: f
                });
            p = h.record.name,
            d = pe({}, f.params, c.params),
            _ = h.stringify(d)
        }
        const m = [];
        let v = h;
        for (; v; )
            m.unshift(v.record),
            v = v.parent;
        return {
            name: p,
            path: _,
            params: d,
            matched: m,
            meta: oD(m)
        }
    }
    return t.forEach(c => i(c)),
    {
        addRoute: i,
        resolve: u,
        removeRoute: o,
        getRoutes: a,
        getRecordMatcher: s
    }
}
function oc(t, e) {
    const n = {};
    for (const r of e)
        r in t && (n[r] = t[r]);
    return n
}
function sD(t) {
    return {
        path: t.path,
        redirect: t.redirect,
        name: t.name,
        meta: t.meta || {},
        aliasOf: void 0,
        beforeEnter: t.beforeEnter,
        props: iD(t),
        children: t.children || [],
        instances: {},
        leaveGuards: new Set,
        updateGuards: new Set,
        enterCallbacks: {},
        components: "components"in t ? t.components || null : t.component && {
            default: t.component
        }
    }
}
function iD(t) {
    const e = {}
      , n = t.props || !1;
    if ("component"in t)
        e.default = n;
    else
        for (const r in t.components)
            e[r] = typeof n == "object" ? n[r] : n;
    return e
}
function ac(t) {
    for (; t; ) {
        if (t.record.aliasOf)
            return !0;
        t = t.parent
    }
    return !1
}
function oD(t) {
    return t.reduce( (e, n) => pe(e, n.meta), {})
}
function lc(t, e) {
    const n = {};
    for (const r in t)
        n[r] = r in e ? e[r] : t[r];
    return n
}
function Kh(t, e) {
    return e.children.some(n => n === t || Kh(t, n))
}
const Gh = /#/g
  , aD = /&/g
  , lD = /\//g
  , uD = /=/g
  , cD = /\?/g
  , Yh = /\+/g
  , fD = /%5B/g
  , hD = /%5D/g
  , Xh = /%5E/g
  , dD = /%60/g
  , Jh = /%7B/g
  , pD = /%7C/g
  , Qh = /%7D/g
  , _D = /%20/g;
function wl(t) {
    return encodeURI("" + t).replace(pD, "|").replace(fD, "[").replace(hD, "]")
}
function gD(t) {
    return wl(t).replace(Jh, "{").replace(Qh, "}").replace(Xh, "^")
}
function ba(t) {
    return wl(t).replace(Yh, "%2B").replace(_D, "+").replace(Gh, "%23").replace(aD, "%26").replace(dD, "`").replace(Jh, "{").replace(Qh, "}").replace(Xh, "^")
}
function mD(t) {
    return ba(t).replace(uD, "%3D")
}
function yD(t) {
    return wl(t).replace(Gh, "%23").replace(cD, "%3F")
}
function DD(t) {
    return t == null ? "" : yD(t).replace(lD, "%2F")
}
function Mi(t) {
    try {
        return decodeURIComponent("" + t)
    } catch {}
    return "" + t
}
function vD(t) {
    const e = {};
    if (t === "" || t === "?")
        return e;
    const r = (t[0] === "?" ? t.slice(1) : t).split("&");
    for (let s = 0; s < r.length; ++s) {
        const i = r[s].replace(Yh, " ")
          , o = i.indexOf("=")
          , a = Mi(o < 0 ? i : i.slice(0, o))
          , l = o < 0 ? null : Mi(i.slice(o + 1));
        if (a in e) {
            let u = e[a];
            $t(u) || (u = e[a] = [u]),
            u.push(l)
        } else
            e[a] = l
    }
    return e
}
function uc(t) {
    let e = "";
    for (let n in t) {
        const r = t[n];
        if (n = mD(n),
        r == null) {
            r !== void 0 && (e += (e.length ? "&" : "") + n);
            continue
        }
        ($t(r) ? r.map(i => i && ba(i)) : [r && ba(r)]).forEach(i => {
            i !== void 0 && (e += (e.length ? "&" : "") + n,
            i != null && (e += "=" + i))
        }
        )
    }
    return e
}
function bD(t) {
    const e = {};
    for (const n in t) {
        const r = t[n];
        r !== void 0 && (e[n] = $t(r) ? r.map(s => s == null ? null : "" + s) : r == null ? r : "" + r)
    }
    return e
}
const CD = Symbol("")
  , cc = Symbol("")
  , El = Symbol("")
  , Zh = Symbol("")
  , Ca = Symbol("");
function Zr() {
    let t = [];
    function e(r) {
        return t.push(r),
        () => {
            const s = t.indexOf(r);
            s > -1 && t.splice(s, 1)
        }
    }
    function n() {
        t = []
    }
    return {
        add: e,
        list: () => t.slice(),
        reset: n
    }
}
function Cn(t, e, n, r, s) {
    const i = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || []);
    return () => new Promise( (o, a) => {
        const l = f => {
            f === !1 ? a(Br(4, {
                from: n,
                to: e
            })) : f instanceof Error ? a(f) : K0(f) ? a(Br(2, {
                from: e,
                to: f
            })) : (i && r.enterCallbacks[s] === i && typeof f == "function" && i.push(f),
            o())
        }
          , u = t.call(r && r.instances[s], e, n, l);
        let c = Promise.resolve(u);
        t.length < 3 && (c = c.then(l)),
        c.catch(f => a(f))
    }
    )
}
function Mo(t, e, n, r) {
    const s = [];
    for (const i of t)
        for (const o in i.components) {
            let a = i.components[o];
            if (!(e !== "beforeRouteEnter" && !i.instances[o]))
                if (wD(a)) {
                    const u = (a.__vccOpts || a)[e];
                    u && s.push(Cn(u, n, r, i, o))
                } else {
                    let l = a();
                    s.push( () => l.then(u => {
                        if (!u)
                            return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));
                        const c = R0(u) ? u.default : u;
                        i.components[o] = c;
                        const h = (c.__vccOpts || c)[e];
                        return h && Cn(h, n, r, i, o)()
                    }
                    ))
                }
        }
    return s
}
function wD(t) {
    return typeof t == "object" || "displayName"in t || "props"in t || "__vccOpts"in t
}
function fc(t) {
    const e = et(El)
      , n = et(Zh)
      , r = qe( () => e.resolve(q(t.to)))
      , s = qe( () => {
        const {matched: l} = r.value
          , {length: u} = l
          , c = l[u - 1]
          , f = n.matched;
        if (!c || !f.length)
            return -1;
        const h = f.findIndex(Nr.bind(null, c));
        if (h > -1)
            return h;
        const d = hc(l[u - 2]);
        return u > 1 && hc(c) === d && f[f.length - 1].path !== d ? f.findIndex(Nr.bind(null, l[u - 2])) : h
    }
    )
      , i = qe( () => s.value > -1 && SD(n.params, r.value.params))
      , o = qe( () => s.value > -1 && s.value === n.matched.length - 1 && Vh(n.params, r.value.params));
    function a(l={}) {
        return xD(l) ? e[q(t.replace) ? "replace" : "push"](q(t.to)).catch(ps) : Promise.resolve()
    }
    return {
        route: r,
        href: qe( () => r.value.href),
        isActive: i,
        isExactActive: o,
        navigate: a
    }
}
const ED = Je({
    name: "RouterLink",
    compatConfig: {
        MODE: 3
    },
    props: {
        to: {
            type: [String, Object],
            required: !0
        },
        replace: Boolean,
        activeClass: String,
        exactActiveClass: String,
        custom: Boolean,
        ariaCurrentValue: {
            type: String,
            default: "page"
        }
    },
    useLink: fc,
    setup(t, {slots: e}) {
        const n = Yt(fc(t))
          , {options: r} = et(El)
          , s = qe( () => ({
            [dc(t.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
            [dc(t.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
        }));
        return () => {
            const i = e.default && e.default(n);
            return t.custom ? i : It("a", {
                "aria-current": n.isExactActive ? t.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: s.value
            }, i)
        }
    }
})
  , TD = ED;
function xD(t) {
    if (!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey) && !t.defaultPrevented && !(t.button !== void 0 && t.button !== 0)) {
        if (t.currentTarget && t.currentTarget.getAttribute) {
            const e = t.currentTarget.getAttribute("target");
            if (/\b_blank\b/i.test(e))
                return
        }
        return t.preventDefault && t.preventDefault(),
        !0
    }
}
function SD(t, e) {
    for (const n in e) {
        const r = e[n]
          , s = t[n];
        if (typeof r == "string") {
            if (r !== s)
                return !1
        } else if (!$t(s) || s.length !== r.length || r.some( (i, o) => i !== s[o]))
            return !1
    }
    return !0
}
function hc(t) {
    return t ? t.aliasOf ? t.aliasOf.path : t.path : ""
}
const dc = (t, e, n) => t ?? e ?? n
  , kD = Je({
    name: "RouterView",
    inheritAttrs: !1,
    props: {
        name: {
            type: String,
            default: "default"
        },
        route: Object
    },
    compatConfig: {
        MODE: 3
    },
    setup(t, {attrs: e, slots: n}) {
        const r = et(Ca)
          , s = qe( () => t.route || r.value)
          , i = et(cc, 0)
          , o = qe( () => {
            let u = q(i);
            const {matched: c} = s.value;
            let f;
            for (; (f = c[u]) && !f.components; )
                u++;
            return u
        }
        )
          , a = qe( () => s.value.matched[o.value]);
        Sr(cc, qe( () => o.value + 1)),
        Sr(CD, a),
        Sr(Ca, s);
        const l = ae();
        return kt( () => [l.value, a.value, t.name], ([u,c,f], [h,d,_]) => {
            c && (c.instances[f] = u,
            d && d !== c && u && u === h && (c.leaveGuards.size || (c.leaveGuards = d.leaveGuards),
            c.updateGuards.size || (c.updateGuards = d.updateGuards))),
            u && c && (!d || !Nr(c, d) || !h) && (c.enterCallbacks[f] || []).forEach(p => p(u))
        }
        , {
            flush: "post"
        }),
        () => {
            const u = s.value
              , c = t.name
              , f = a.value
              , h = f && f.components[c];
            if (!h)
                return pc(n.default, {
                    Component: h,
                    route: u
                });
            const d = f.props[c]
              , _ = d ? d === !0 ? u.params : typeof d == "function" ? d(u) : d : null
              , m = It(h, pe({}, _, e, {
                onVnodeUnmounted: v => {
                    v.component.isUnmounted && (f.instances[c] = null)
                }
                ,
                ref: l
            }));
            return pc(n.default, {
                Component: m,
                route: u
            }) || m
        }
    }
});
function pc(t, e) {
    if (!t)
        return null;
    const n = t(e);
    return n.length === 1 ? n[0] : n
}
const ed = kD;
function RD(t) {
    const e = rD(t.routes, t)
      , n = t.parseQuery || vD
      , r = t.stringifyQuery || uc
      , s = t.history
      , i = Zr()
      , o = Zr()
      , a = Zr()
      , l = Pr(Pt);
    let u = Pt;
    mr && t.scrollBehavior && "scrollRestoration"in history && (history.scrollRestoration = "manual");
    const c = Po.bind(null, P => "" + P)
      , f = Po.bind(null, DD)
      , h = Po.bind(null, Mi);
    function d(P, K) {
        let z, Y;
        return Wh(P) ? (z = e.getRecordMatcher(P),
        Y = K) : Y = P,
        e.addRoute(Y, z)
    }
    function _(P) {
        const K = e.getRecordMatcher(P);
        K && e.removeRoute(K)
    }
    function p() {
        return e.getRoutes().map(P => P.record)
    }
    function m(P) {
        return !!e.getRecordMatcher(P)
    }
    function v(P, K) {
        if (K = pe({}, K || l.value),
        typeof P == "string") {
            const w = Oo(n, P, K.path)
              , R = e.resolve({
                path: w.path
            }, K)
              , M = s.createHref(w.fullPath);
            return pe(w, R, {
                params: h(R.params),
                hash: Mi(w.hash),
                redirectedFrom: void 0,
                href: M
            })
        }
        let z;
        if ("path"in P)
            z = pe({}, P, {
                path: Oo(n, P.path, K.path).path
            });
        else {
            const w = pe({}, P.params);
            for (const R in w)
                w[R] == null && delete w[R];
            z = pe({}, P, {
                params: f(w)
            }),
            K.params = f(K.params)
        }
        const Y = e.resolve(z, K)
          , de = P.hash || "";
        Y.params = c(h(Y.params));
        const xe = P0(r, pe({}, P, {
            hash: gD(de),
            path: Y.path
        }))
          , b = s.createHref(xe);
        return pe({
            fullPath: xe,
            hash: de,
            query: r === uc ? bD(P.query) : P.query || {}
        }, Y, {
            redirectedFrom: void 0,
            href: b
        })
    }
    function D(P) {
        return typeof P == "string" ? Oo(n, P, l.value.path) : pe({}, P)
    }
    function g(P, K) {
        if (u !== P)
            return Br(8, {
                from: K,
                to: P
            })
    }
    function y(P) {
        return S(P)
    }
    function C(P) {
        return y(pe(D(P), {
            replace: !0
        }))
    }
    function E(P) {
        const K = P.matched[P.matched.length - 1];
        if (K && K.redirect) {
            const {redirect: z} = K;
            let Y = typeof z == "function" ? z(P) : z;
            return typeof Y == "string" && (Y = Y.includes("?") || Y.includes("#") ? Y = D(Y) : {
                path: Y
            },
            Y.params = {}),
            pe({
                query: P.query,
                hash: P.hash,
                params: "path"in Y ? {} : P.params
            }, Y)
        }
    }
    function S(P, K) {
        const z = u = v(P)
          , Y = l.value
          , de = P.state
          , xe = P.force
          , b = P.replace === !0
          , w = E(z);
        if (w)
            return S(pe(D(w), {
                state: typeof w == "object" ? pe({}, de, w.state) : de,
                force: xe,
                replace: b
            }), K || z);
        const R = z;
        R.redirectedFrom = K;
        let M;
        return !xe && O0(r, Y, z) && (M = Br(16, {
            to: R,
            from: Y
        }),
        ve(Y, Y, !0, !1)),
        (M ? Promise.resolve(M) : k(R, Y)).catch(O => Jt(O) ? Jt(O, 2) ? O : Me(O) : V(O, R, Y)).then(O => {
            if (O) {
                if (Jt(O, 2))
                    return S(pe({
                        replace: b
                    }, D(O.to), {
                        state: typeof O.to == "object" ? pe({}, de, O.to.state) : de,
                        force: xe
                    }), K || R)
            } else
                O = A(R, Y, !0, b, de);
            return $(R, Y, O),
            O
        }
        )
    }
    function T(P, K) {
        const z = g(P, K);
        return z ? Promise.reject(z) : Promise.resolve()
    }
    function x(P) {
        const K = be.values().next().value;
        return K && typeof K.runWithContext == "function" ? K.runWithContext(P) : P()
    }
    function k(P, K) {
        let z;
        const [Y,de,xe] = AD(P, K);
        z = Mo(Y.reverse(), "beforeRouteLeave", P, K);
        for (const w of Y)
            w.leaveGuards.forEach(R => {
                z.push(Cn(R, P, K))
            }
            );
        const b = T.bind(null, P, K);
        return z.push(b),
        Be(z).then( () => {
            z = [];
            for (const w of i.list())
                z.push(Cn(w, P, K));
            return z.push(b),
            Be(z)
        }
        ).then( () => {
            z = Mo(de, "beforeRouteUpdate", P, K);
            for (const w of de)
                w.updateGuards.forEach(R => {
                    z.push(Cn(R, P, K))
                }
                );
            return z.push(b),
            Be(z)
        }
        ).then( () => {
            z = [];
            for (const w of xe)
                if (w.beforeEnter)
                    if ($t(w.beforeEnter))
                        for (const R of w.beforeEnter)
                            z.push(Cn(R, P, K));
                    else
                        z.push(Cn(w.beforeEnter, P, K));
            return z.push(b),
            Be(z)
        }
        ).then( () => (P.matched.forEach(w => w.enterCallbacks = {}),
        z = Mo(xe, "beforeRouteEnter", P, K),
        z.push(b),
        Be(z))).then( () => {
            z = [];
            for (const w of o.list())
                z.push(Cn(w, P, K));
            return z.push(b),
            Be(z)
        }
        ).catch(w => Jt(w, 8) ? w : Promise.reject(w))
    }
    function $(P, K, z) {
        a.list().forEach(Y => x( () => Y(P, K, z)))
    }
    function A(P, K, z, Y, de) {
        const xe = g(P, K);
        if (xe)
            return xe;
        const b = K === Pt
          , w = mr ? history.state : {};
        z && (Y || b ? s.replace(P.fullPath, pe({
            scroll: b && w && w.scroll
        }, de)) : s.push(P.fullPath, de)),
        l.value = P,
        ve(P, K, z, b),
        Me()
    }
    let N;
    function ee() {
        N || (N = s.listen( (P, K, z) => {
            if (!ce.listening)
                return;
            const Y = v(P)
              , de = E(Y);
            if (de) {
                S(pe(de, {
                    replace: !0
                }), Y).catch(ps);
                return
            }
            u = Y;
            const xe = l.value;
            mr && j0(tc(xe.fullPath, z.delta), fo()),
            k(Y, xe).catch(b => Jt(b, 12) ? b : Jt(b, 2) ? (S(b.to, Y).then(w => {
                Jt(w, 20) && !z.delta && z.type === As.pop && s.go(-1, !1)
            }
            ).catch(ps),
            Promise.reject()) : (z.delta && s.go(-z.delta, !1),
            V(b, Y, xe))).then(b => {
                b = b || A(Y, xe, !1),
                b && (z.delta && !Jt(b, 8) ? s.go(-z.delta, !1) : z.type === As.pop && Jt(b, 20) && s.go(-1, !1)),
                $(Y, xe, b)
            }
            ).catch(ps)
        }
        ))
    }
    let X = Zr(), F = Zr(), j;
    function V(P, K, z) {
        Me(P);
        const Y = F.list();
        return Y.length ? Y.forEach(de => de(P, K, z)) : console.error(P),
        Promise.reject(P)
    }
    function L() {
        return j && l.value !== Pt ? Promise.resolve() : new Promise( (P, K) => {
            X.add([P, K])
        }
        )
    }
    function Me(P) {
        return j || (j = !P,
        ee(),
        X.list().forEach( ([K,z]) => P ? z(P) : K()),
        X.reset()),
        P
    }
    function ve(P, K, z, Y) {
        const {scrollBehavior: de} = t;
        if (!mr || !de)
            return Promise.resolve();
        const xe = !z && V0(tc(P.fullPath, 0)) || (Y || !z) && history.state && history.state.scroll || null;
        return Ln().then( () => de(P, K, xe)).then(b => b && H0(b)).catch(b => V(b, P, K))
    }
    const he = P => s.go(P);
    let Dt;
    const be = new Set
      , ce = {
        currentRoute: l,
        listening: !0,
        addRoute: d,
        removeRoute: _,
        hasRoute: m,
        getRoutes: p,
        resolve: v,
        options: t,
        push: y,
        replace: C,
        go: he,
        back: () => he(-1),
        forward: () => he(1),
        beforeEach: i.add,
        beforeResolve: o.add,
        afterEach: a.add,
        onError: F.add,
        isReady: L,
        install(P) {
            const K = this;
            P.component("RouterLink", TD),
            P.component("RouterView", ed),
            P.config.globalProperties.$router = K,
            Object.defineProperty(P.config.globalProperties, "$route", {
                enumerable: !0,
                get: () => q(l)
            }),
            mr && !Dt && l.value === Pt && (Dt = !0,
            y(s.location).catch(de => {}
            ));
            const z = {};
            for (const de in Pt)
                Object.defineProperty(z, de, {
                    get: () => l.value[de],
                    enumerable: !0
                });
            P.provide(El, K),
            P.provide(Zh, Bs(z)),
            P.provide(Ca, l);
            const Y = P.unmount;
            be.add(P),
            P.unmount = function() {
                be.delete(P),
                be.size < 1 && (u = Pt,
                N && N(),
                N = null,
                l.value = Pt,
                Dt = !1,
                j = !1),
                Y()
            }
        }
    };
    function Be(P) {
        return P.reduce( (K, z) => K.then( () => x(z)), Promise.resolve())
    }
    return ce
}
function AD(t, e) {
    const n = []
      , r = []
      , s = []
      , i = Math.max(e.matched.length, t.matched.length);
    for (let o = 0; o < i; o++) {
        const a = e.matched[o];
        a && (t.matched.find(u => Nr(u, a)) ? r.push(a) : n.push(a));
        const l = t.matched[o];
        l && (e.matched.find(u => Nr(u, l)) || s.push(l))
    }
    return [n, r, s]
}
const FD = (t, e) => e.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, n => {
    var r;
    return ((r = t.params[n.slice(1)]) == null ? void 0 : r.toString()) || ""
}
)
  , wa = (t, e) => {
    const n = t.route.matched.find(s => {
        var i;
        return ((i = s.components) == null ? void 0 : i.default) === t.Component.type
    }
    )
      , r = e ?? (n == null ? void 0 : n.meta.key) ?? (n && FD(t.route, n));
    return typeof r == "function" ? r(t.route) : r
}
  , PD = (t, e) => ({
    default: () => t ? It($_, t === !0 ? {} : t, e) : e
});
function Tl(t) {
    return Array.isArray(t) ? t : [t]
}
const _c = [{
    name: "ethos",
    path: "/ethos",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => fe( () => import("./ethos.KPeKMrmB.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), import.meta.url).then(t => t.default || t)
}, {
    name: "index",
    path: "/",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => fe( () => import("./index.1_nLXfzH.js"), __vite__mapDeps([10, 11, 4, 5, 6, 7, 12, 3, 13, 14, 15, 16, 17, 18]), import.meta.url).then(t => t.default || t)
}, {
    name: "products-slug",
    path: "/products/:slug()",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => fe( () => import("./_slug_.8w6ZlVkn.js").then(t => t.a), __vite__mapDeps([19, 4, 5, 6, 7, 13, 14, 3, 20]), import.meta.url).then(t => t.default || t)
}, {
    name: "products",
    path: "/products",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => fe( () => import("./index.RyPHkBNt.js"), __vite__mapDeps([21, 1, 2, 15, 4, 5, 6, 7, 16, 17, 8, 22]), import.meta.url).then(t => t.default || t)
}, {
    name: "research-slug",
    path: "/research/:slug()",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => fe( () => import("./_slug_.N4QnrVBC.js"), __vite__mapDeps([23, 4, 5, 6, 7, 3, 1, 2, 11, 12, 24]), import.meta.url).then(t => t.default || t)
}, {
    name: "research",
    path: "/research",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => fe( () => import("./index.0gWfotEC.js"), __vite__mapDeps([25, 1, 2, 4, 5, 6, 7, 17, 8, 11, 12, 26]), import.meta.url).then(t => t.default || t)
}]
  , OD = (t, e, n) => (e = e === !0 ? {} : e,
{
    default: () => {
        var r;
        return e ? It(t, e, n) : (r = n.default) == null ? void 0 : r.call(n)
    }
});
function gc(t) {
    const e = (t == null ? void 0 : t.meta.key) ?? t.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, n => {
        var r;
        return ((r = t.params[n.slice(1)]) == null ? void 0 : r.toString()) || ""
    }
    );
    return typeof e == "function" ? e(t) : e
}
function MD(t, e) {
    return t === e || e === Pt ? !1 : gc(t) !== gc(e) ? !0 : !t.matched.every( (r, s) => {
        var i, o;
        return r.components && r.components.default === ((o = (i = e.matched[s]) == null ? void 0 : i.components) == null ? void 0 : o.default)
    }
    )
}
const LD = {
    scrollBehavior(t, e, n) {
        var u;
        const r = ge()
          , s = ((u = fn().options) == null ? void 0 : u.scrollBehaviorType) ?? "auto";
        let i = n || void 0;
        const o = typeof t.meta.scrollToTop == "function" ? t.meta.scrollToTop(t, e) : t.meta.scrollToTop;
        if (!i && e && t && o !== !1 && MD(t, e) && (i = {
            left: 0,
            top: 0
        }),
        t.path === e.path) {
            if (e.hash && !t.hash)
                return {
                    left: 0,
                    top: 0
                };
            if (t.hash)
                return {
                    el: t.hash,
                    top: mc(t.hash),
                    behavior: s
                }
        }
        const a = c => !!(c.meta.pageTransition ?? Da)
          , l = a(e) && a(t) ? "page:transition:finish" : "page:finish";
        return new Promise(c => {
            r.hooks.hookOnce(l, async () => {
                await Ln(),
                t.hash && (i = {
                    el: t.hash,
                    top: mc(t.hash),
                    behavior: s
                }),
                c(i)
            }
            )
        }
        )
    }
};
function mc(t) {
    try {
        const e = document.querySelector(t);
        if (e)
            return parseFloat(getComputedStyle(e).scrollMarginTop)
    } catch {}
    return 0
}
const ID = {
    hashMode: !1,
    scrollBehaviorType: "auto"
}
  , nt = {
    ...ID,
    ...LD
}
  , $D = async t => {
    var l;
    let e, n;
    if (!((l = t.meta) != null && l.validate))
        return;
    const r = ge()
      , s = fn();
    if (([e,n] = Rs( () => Promise.resolve(t.meta.validate(t))),
    e = await e,
    n(),
    e) === !0)
        return;
    const o = lo({
        statusCode: 404,
        statusMessage: `Page Not Found: ${t.fullPath}`,
        data: {
            path: t.fullPath
        }
    })
      , a = s.beforeResolve(u => {
        if (a(),
        u === t) {
            const c = s.afterEach(async () => {
                c(),
                await r.runWithContext( () => yr(o)),
                window.history.pushState({}, "", t.fullPath)
            }
            );
            return !1
        }
    }
    )
}
  , ND = async t => {
    let e, n;
    const r = ([e,n] = Rs( () => Bh(t.path)),
    e = await e,
    n(),
    e);
    if (r.redirect)
        return r.redirect
}
  , BD = [$D, ND]
  , gs = {};
function HD(t, e, n) {
    const {pathname: r, search: s, hash: i} = e
      , o = t.indexOf("#");
    if (o > -1) {
        const u = i.includes(t.slice(o)) ? t.slice(o).length : 1;
        let c = i.slice(u);
        return c[0] !== "/" && (c = "/" + c),
        Nu(c, "")
    }
    const a = Nu(r, t)
      , l = !n || Cm(a, n, {
        trailingSlash: !0
    }) ? a : n;
    return l + (l.includes("?") ? "" : s) + i
}
const jD = At({
    name: "nuxt:router",
    enforce: "pre",
    async setup(t) {
        var p, m;
        let e, n, r = fr().app.baseURL;
        nt.hashMode && !r.includes("#") && (r += "#");
        const s = ((p = nt.history) == null ? void 0 : p.call(nt, r)) ?? (nt.hashMode ? q0(r) : zh(r))
          , i = ((m = nt.routes) == null ? void 0 : m.call(nt, _c)) ?? _c;
        let o;
        const a = HD(r, window.location, t.payload.path)
          , l = RD({
            ...nt,
            scrollBehavior: (v, D, g) => {
                var y;
                if (D === Pt) {
                    o = g;
                    return
                }
                return l.options.scrollBehavior = nt.scrollBehavior,
                (y = nt.scrollBehavior) == null ? void 0 : y.call(nt, v, Pt, o || g)
            }
            ,
            history: s,
            routes: i
        });
        t.vueApp.use(l);
        const u = Pr(l.currentRoute.value);
        l.afterEach( (v, D) => {
            u.value = D
        }
        ),
        Object.defineProperty(t.vueApp.config.globalProperties, "previousRoute", {
            get: () => u.value
        });
        const c = Pr(l.resolve(a))
          , f = () => {
            c.value = l.currentRoute.value
        }
        ;
        t.hook("page:finish", f),
        l.afterEach( (v, D) => {
            var g, y, C, E;
            ((y = (g = v.matched[0]) == null ? void 0 : g.components) == null ? void 0 : y.default) === ((E = (C = D.matched[0]) == null ? void 0 : C.components) == null ? void 0 : E.default) && f()
        }
        );
        const h = {};
        for (const v in c.value)
            Object.defineProperty(h, v, {
                get: () => c.value[v]
            });
        t._route = Bs(h),
        t._middleware = t._middleware || {
            global: [],
            named: {}
        };
        const d = ao();
        try {
            [e,n] = Rs( () => l.isReady()),
            await e,
            n()
        } catch (v) {
            [e,n] = Rs( () => t.runWithContext( () => yr(v))),
            await e,
            n()
        }
        const _ = t.payload.state._layout;
        return l.beforeEach(async (v, D) => {
            var g;
            await t.callHook("page:loading:start"),
            v.meta = Yt(v.meta),
            t.isHydrating && _ && !sr(v.meta.layout) && (v.meta.layout = _),
            t._processingMiddleware = !0;
            {
                const y = new Set([...BD, ...t._middleware.global]);
                for (const C of v.matched) {
                    const E = C.meta.middleware;
                    if (E)
                        for (const S of Tl(E))
                            y.add(S)
                }
                for (const C of y) {
                    const E = typeof C == "string" ? t._middleware.named[C] || await ((g = gs[C]) == null ? void 0 : g.call(gs).then(T => T.default || T)) : C;
                    if (!E)
                        throw new Error(`Unknown route middleware: '${C}'.`);
                    const S = await t.runWithContext( () => E(v, D));
                    if (!t.payload.serverRendered && t.isHydrating && (S === !1 || S instanceof Error)) {
                        const T = S || ma({
                            statusCode: 404,
                            statusMessage: `Page Not Found: ${a}`
                        });
                        return await t.runWithContext( () => yr(T)),
                        !1
                    }
                    if (S !== !0 && (S || S === !1))
                        return S
                }
            }
        }
        ),
        l.onError(async () => {
            delete t._processingMiddleware,
            await t.callHook("page:loading:end")
        }
        ),
        l.afterEach(async (v, D, g) => {
            delete t._processingMiddleware,
            !t.isHydrating && d.value && await t.runWithContext(c0),
            g && await t.callHook("page:loading:end"),
            v.matched.length === 0 && await t.runWithContext( () => yr(ma({
                statusCode: 404,
                fatal: !1,
                statusMessage: `Page not found: ${v.fullPath}`,
                data: {
                    path: v.fullPath
                }
            })))
        }
        ),
        t.hooks.hookOnce("app:created", async () => {
            try {
                await l.replace({
                    ...l.resolve(a),
                    name: void 0,
                    force: !0
                }),
                l.options.scrollBehavior = nt.scrollBehavior
            } catch (v) {
                await t.runWithContext( () => yr(v))
            }
        }
        ),
        {
            provide: {
                router: l
            }
        }
    }
})
  , Ea = globalThis.requestIdleCallback || (t => {
    const e = Date.now()
      , n = {
        didTimeout: !1,
        timeRemaining: () => Math.max(0, 50 - (Date.now() - e))
    };
    return setTimeout( () => {
        t(n)
    }
    , 1)
}
)
  , VD = globalThis.cancelIdleCallback || (t => {
    clearTimeout(t)
}
)
  , xl = t => {
    const e = ge();
    e.isHydrating ? e.hooks.hookOnce("app:suspense:resolve", () => {
        Ea(t)
    }
    ) : Ea(t)
}
  , UD = At({
    name: "nuxt:payload",
    setup(t) {
        fn().beforeResolve(async (e, n) => {
            if (e.path === n.path)
                return;
            const r = await Xu(e.path);
            r && Object.assign(t.static.data, r.data)
        }
        ),
        xl( () => {
            var e;
            t.hooks.hook("link:prefetch", async n => {
                zs(n).protocol || await Xu(n)
            }
            ),
            ((e = navigator.connection) == null ? void 0 : e.effectiveType) !== "slow-2g" && setTimeout(co, 1e3)
        }
        )
    }
})
  , zD = At(t => {
    let e;
    async function n() {
        const r = await co();
        e && clearTimeout(e),
        e = setTimeout(n, 1e3 * 60 * 60);
        const s = await $fetch(vl("builds/latest.json"));
        s.id !== r.id && t.hooks.callHook("app:manifest:update", s)
    }
    xl( () => {
        e = setTimeout(n, 1e3 * 60 * 60)
    }
    )
}
)
  , WD = !1;
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
let td;
const Ws = t => td = t
  , nd = Symbol();
function Ta(t) {
    return t && typeof t == "object" && Object.prototype.toString.call(t) === "[object Object]" && typeof t.toJSON != "function"
}
var ms;
(function(t) {
    t.direct = "direct",
    t.patchObject = "patch object",
    t.patchFunction = "patch function"
}
)(ms || (ms = {}));
function qD() {
    const t = Ja(!0)
      , e = t.run( () => ae({}));
    let n = []
      , r = [];
    const s = Yi({
        install(i) {
            Ws(s),
            s._a = i,
            i.provide(nd, s),
            i.config.globalProperties.$pinia = s,
            r.forEach(o => n.push(o)),
            r = []
        },
        use(i) {
            return !this._a && !WD ? r.push(i) : n.push(i),
            this
        },
        _p: n,
        _a: null,
        _e: t,
        _s: new Map,
        state: e
    });
    return s
}
const rd = () => {}
;
function yc(t, e, n, r=rd) {
    t.push(e);
    const s = () => {
        const i = t.indexOf(e);
        i > -1 && (t.splice(i, 1),
        r())
    }
    ;
    return !n && ef() && Vp(s),
    s
}
function pr(t, ...e) {
    t.slice().forEach(n => {
        n(...e)
    }
    )
}
const KD = t => t();
function xa(t, e) {
    t instanceof Map && e instanceof Map && e.forEach( (n, r) => t.set(r, n)),
    t instanceof Set && e instanceof Set && e.forEach(t.add, t);
    for (const n in e) {
        if (!e.hasOwnProperty(n))
            continue;
        const r = e[n]
          , s = t[n];
        Ta(s) && Ta(r) && t.hasOwnProperty(n) && !Oe(r) && !rn(r) ? t[n] = xa(s, r) : t[n] = r
    }
    return t
}
const GD = Symbol();
function YD(t) {
    return !Ta(t) || !t.hasOwnProperty(GD)
}
const {assign: mn} = Object;
function XD(t) {
    return !!(Oe(t) && t.effect)
}
function JD(t, e, n, r) {
    const {state: s, actions: i, getters: o} = e
      , a = n.state.value[t];
    let l;
    function u() {
        a || (n.state.value[t] = s ? s() : {});
        const c = h_(n.state.value[t]);
        return mn(c, i, Object.keys(o || {}).reduce( (f, h) => (f[h] = Yi(qe( () => {
            Ws(n);
            const d = n._s.get(t);
            return o[h].call(d, d)
        }
        )),
        f), {}))
    }
    return l = sd(t, u, e, n, r, !0),
    l
}
function sd(t, e, n={}, r, s, i) {
    let o;
    const a = mn({
        actions: {}
    }, n)
      , l = {
        deep: !0
    };
    let u, c, f = [], h = [], d;
    const _ = r.state.value[t];
    !i && !_ && (r.state.value[t] = {}),
    ae({});
    let p;
    function m(T) {
        let x;
        u = c = !1,
        typeof T == "function" ? (T(r.state.value[t]),
        x = {
            type: ms.patchFunction,
            storeId: t,
            events: d
        }) : (xa(r.state.value[t], T),
        x = {
            type: ms.patchObject,
            payload: T,
            storeId: t,
            events: d
        });
        const k = p = Symbol();
        Ln().then( () => {
            p === k && (u = !0)
        }
        ),
        c = !0,
        pr(f, x, r.state.value[t])
    }
    const v = i ? function() {
        const {state: x} = n
          , k = x ? x() : {};
        this.$patch($ => {
            mn($, k)
        }
        )
    }
    : rd;
    function D() {
        o.stop(),
        f = [],
        h = [],
        r._s.delete(t)
    }
    function g(T, x) {
        return function() {
            Ws(r);
            const k = Array.from(arguments)
              , $ = []
              , A = [];
            function N(F) {
                $.push(F)
            }
            function ee(F) {
                A.push(F)
            }
            pr(h, {
                args: k,
                name: T,
                store: C,
                after: N,
                onError: ee
            });
            let X;
            try {
                X = x.apply(this && this.$id === t ? this : C, k)
            } catch (F) {
                throw pr(A, F),
                F
            }
            return X instanceof Promise ? X.then(F => (pr($, F),
            F)).catch(F => (pr(A, F),
            Promise.reject(F))) : (pr($, X),
            X)
        }
    }
    const y = {
        _p: r,
        $id: t,
        $onAction: yc.bind(null, h),
        $patch: m,
        $reset: v,
        $subscribe(T, x={}) {
            const k = yc(f, T, x.detached, () => $())
              , $ = o.run( () => kt( () => r.state.value[t], A => {
                (x.flush === "sync" ? c : u) && T({
                    storeId: t,
                    type: ms.direct,
                    events: d
                }, A)
            }
            , mn({}, l, x)));
            return k
        },
        $dispose: D
    }
      , C = Yt(y);
    r._s.set(t, C);
    const S = (r._a && r._a.runWithContext || KD)( () => r._e.run( () => (o = Ja()).run(e)));
    for (const T in S) {
        const x = S[T];
        if (Oe(x) && !XD(x) || rn(x))
            i || (_ && YD(x) && (Oe(x) ? x.value = _[T] : xa(x, _[T])),
            r.state.value[t][T] = x);
        else if (typeof x == "function") {
            const k = g(T, x);
            S[T] = k,
            a.actions[T] = x
        }
    }
    return mn(C, S),
    mn(oe(C), S),
    Object.defineProperty(C, "$state", {
        get: () => r.state.value[t],
        set: T => {
            m(x => {
                mn(x, T)
            }
            )
        }
    }),
    r._p.forEach(T => {
        mn(C, o.run( () => T({
            store: C,
            app: r._a,
            pinia: r,
            options: a
        })))
    }
    ),
    _ && i && n.hydrate && n.hydrate(C.$state, _),
    u = !0,
    c = !0,
    C
}
function QD(t, e, n) {
    let r, s;
    const i = typeof e == "function";
    typeof t == "string" ? (r = t,
    s = i ? n : e) : (s = t,
    r = t.id);
    function o(a, l) {
        const u = _l();
        return a = a || (u ? et(nd, null) : null),
        a && Ws(a),
        a = td,
        a._s.has(r) || (i ? sd(r, e, s, a) : JD(r, s, a)),
        a._s.get(r)
    }
    return o.$id = r,
    o
}
function ZD(t) {
    {
        t = oe(t);
        const e = {};
        for (const n in t) {
            const r = t[n];
            (Oe(r) || rn(r)) && (e[n] = Xi(t, n))
        }
        return e
    }
}
const ev = t => t === "defer" || t === !1;
function id(...t) {
    var d;
    const e = typeof t[t.length - 1] == "string" ? t.pop() : void 0;
    typeof t[0] != "string" && t.unshift(e);
    let[n,r,s={}] = t;
    if (typeof n != "string")
        throw new TypeError("[nuxt] [asyncData] key must be a string.");
    if (typeof r != "function")
        throw new TypeError("[nuxt] [asyncData] handler must be a function.");
    const i = ge()
      , o = () => null
      , a = () => i.isHydrating ? i.payload.data[n] : i.static.data[n];
    s.server = s.server ?? !0,
    s.default = s.default ?? o,
    s.getCachedData = s.getCachedData ?? a,
    s.lazy = s.lazy ?? !1,
    s.immediate = s.immediate ?? !0,
    s.deep = s.deep ?? D0.deep,
    s.dedupe = s.dedupe ?? "cancel";
    const l = () => ![null, void 0].includes(s.getCachedData(n));
    if (!i._asyncData[n] || !s.immediate) {
        (d = i.payload._errors)[n] ?? (d[n] = null);
        const _ = s.deep ? ae : Pr;
        i._asyncData[n] = {
            data: _(s.getCachedData(n) ?? s.default()),
            pending: ae(!l()),
            error: Xi(i.payload._errors, n),
            status: ae("idle")
        }
    }
    const u = {
        ...i._asyncData[n]
    };
    u.refresh = u.execute = (_={}) => {
        if (i._asyncDataPromises[n]) {
            if (ev(_.dedupe ?? s.dedupe))
                return i._asyncDataPromises[n];
            i._asyncDataPromises[n].cancelled = !0
        }
        if ((_._initial || i.isHydrating && _._initial !== !1) && l())
            return Promise.resolve(s.getCachedData(n));
        u.pending.value = !0,
        u.status.value = "pending";
        const p = new Promise( (m, v) => {
            try {
                m(r(i))
            } catch (D) {
                v(D)
            }
        }
        ).then(m => {
            if (p.cancelled)
                return i._asyncDataPromises[n];
            let v = m;
            s.transform && (v = s.transform(m)),
            s.pick && (v = tv(v, s.pick)),
            i.payload.data[n] = v,
            u.data.value = v,
            u.error.value = null,
            u.status.value = "success"
        }
        ).catch(m => {
            if (p.cancelled)
                return i._asyncDataPromises[n];
            u.error.value = lo(m),
            u.data.value = q(s.default()),
            u.status.value = "error"
        }
        ).finally( () => {
            p.cancelled || (u.pending.value = !1,
            delete i._asyncDataPromises[n])
        }
        );
        return i._asyncDataPromises[n] = p,
        i._asyncDataPromises[n]
    }
    ;
    const c = () => u.refresh({
        _initial: !0
    })
      , f = s.server !== !1 && i.payload.serverRendered;
    {
        const _ = In();
        if (_ && !_._nuxtOnBeforeMountCbs) {
            _._nuxtOnBeforeMountCbs = [];
            const m = _._nuxtOnBeforeMountCbs;
            _ && (Nf( () => {
                m.forEach(v => {
                    v()
                }
                ),
                m.splice(0, m.length)
            }
            ),
            sn( () => m.splice(0, m.length)))
        }
        f && i.isHydrating && (u.error.value || l()) ? (u.pending.value = !1,
        u.status.value = u.error.value ? "error" : "success") : _ && (i.payload.serverRendered && i.isHydrating || s.lazy) && s.immediate ? _._nuxtOnBeforeMountCbs.push(c) : s.immediate && c(),
        s.watch && kt(s.watch, () => u.refresh());
        const p = i.hook("app:data:refresh", async m => {
            (!m || m.includes(n)) && await u.refresh()
        }
        );
        _ && sn(p)
    }
    const h = Promise.resolve(i._asyncDataPromises[n]).then( () => u);
    return Object.assign(h, u),
    h
}
function tv(t, e) {
    const n = {};
    for (const r of e)
        n[r] = t[r];
    return n
}
const nv = "$s";
function rv(...t) {
    const e = typeof t[t.length - 1] == "string" ? t.pop() : void 0;
    typeof t[0] != "string" && t.unshift(e);
    const [n,r] = t;
    if (!n || typeof n != "string")
        throw new TypeError("[nuxt] [useState] key must be a string: " + n);
    if (r !== void 0 && typeof r != "function")
        throw new Error("[nuxt] [useState] init must be a function: " + r);
    const s = nv + n
      , i = ge()
      , o = Xi(i.payload.state, s);
    if (o.value === void 0 && r) {
        const a = r();
        if (Oe(a))
            return i.payload.state[s] = a,
            a;
        o.value = a
    }
    return o
}
async function od(t, e=fn()) {
    const {path: n, matched: r} = e.resolve(t);
    if (!r.length || (e._routePreloaded || (e._routePreloaded = new Set),
    e._routePreloaded.has(n)))
        return;
    const s = e._preloadPromises = e._preloadPromises || [];
    if (s.length > 4)
        return Promise.all(s).then( () => od(t, e));
    e._routePreloaded.add(n);
    const i = r.map(o => {
        var a;
        return (a = o.components) == null ? void 0 : a.default
    }
    ).filter(o => typeof o == "function");
    for (const o of i) {
        const a = Promise.resolve(o()).catch( () => {}
        ).finally( () => s.splice(s.indexOf(a)));
        s.push(a)
    }
    await Promise.all(s)
}
function sv(t={}) {
    const e = t.path || window.location.pathname;
    let n = {};
    try {
        n = Ai(sessionStorage.getItem("nuxt:reload") || "{}")
    } catch {}
    if (t.force || (n == null ? void 0 : n.path) !== e || (n == null ? void 0 : n.expires) < Date.now()) {
        try {
            sessionStorage.setItem("nuxt:reload", JSON.stringify({
                path: e,
                expires: Date.now() + (t.ttl ?? 1e4)
            }))
        } catch {}
        if (t.persistState)
            try {
                sessionStorage.setItem("nuxt:reload:state", JSON.stringify({
                    state: ge().payload.state
                }))
            } catch {}
        window.location.pathname !== e ? window.location.href = e : window.location.reload()
    }
}
const iv = (...t) => t.find(e => e !== void 0)
  , ov = "noopener noreferrer";
function av(t) {
    const e = t.componentName || "NuxtLink"
      , n = (r, s) => {
        if (!r || t.trailingSlash !== "append" && t.trailingSlash !== "remove")
            return r;
        if (typeof r == "string")
            return Dc(r, t.trailingSlash);
        const i = "path"in r ? r.path : s(r).path;
        return {
            ...r,
            name: void 0,
            path: Dc(i, t.trailingSlash)
        }
    }
    ;
    return Je({
        name: e,
        props: {
            to: {
                type: [String, Object],
                default: void 0,
                required: !1
            },
            href: {
                type: [String, Object],
                default: void 0,
                required: !1
            },
            target: {
                type: String,
                default: void 0,
                required: !1
            },
            rel: {
                type: String,
                default: void 0,
                required: !1
            },
            noRel: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            prefetch: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            noPrefetch: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            activeClass: {
                type: String,
                default: void 0,
                required: !1
            },
            exactActiveClass: {
                type: String,
                default: void 0,
                required: !1
            },
            prefetchedClass: {
                type: String,
                default: void 0,
                required: !1
            },
            replace: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            ariaCurrentValue: {
                type: String,
                default: void 0,
                required: !1
            },
            external: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            custom: {
                type: Boolean,
                default: void 0,
                required: !1
            }
        },
        setup(r, {slots: s}) {
            const i = fn()
              , o = fr()
              , a = qe( () => {
                const d = r.to || r.href || "";
                return n(d, i.resolve)
            }
            )
              , l = qe( () => typeof a.value == "string" && cr(a.value, {
                acceptRelative: !0
            }))
              , u = qe( () => r.external || r.target && r.target !== "_self" ? !0 : typeof a.value == "object" ? !1 : a.value === "" || l.value)
              , c = ae(!1)
              , f = ae(null)
              , h = d => {
                var _;
                f.value = r.custom ? (_ = d == null ? void 0 : d.$el) == null ? void 0 : _.nextElementSibling : d == null ? void 0 : d.$el
            }
            ;
            if (r.prefetch !== !1 && r.noPrefetch !== !0 && r.target !== "_blank" && !uv()) {
                const _ = ge();
                let p, m = null;
                cn( () => {
                    const v = lv();
                    xl( () => {
                        p = Ea( () => {
                            var D;
                            (D = f == null ? void 0 : f.value) != null && D.tagName && (m = v.observe(f.value, async () => {
                                m == null || m(),
                                m = null;
                                const g = typeof a.value == "string" ? a.value : i.resolve(a.value).fullPath;
                                await Promise.all([_.hooks.callHook("link:prefetch", g).catch( () => {}
                                ), !u.value && od(a.value, i).catch( () => {}
                                )]),
                                c.value = !0
                            }
                            ))
                        }
                        )
                    }
                    )
                }
                ),
                js( () => {
                    p && VD(p),
                    m == null || m(),
                    m = null
                }
                )
            }
            return () => {
                var v, D;
                if (!u.value) {
                    const g = {
                        ref: h,
                        to: a.value,
                        activeClass: r.activeClass || t.activeClass,
                        exactActiveClass: r.exactActiveClass || t.exactActiveClass,
                        replace: r.replace,
                        ariaCurrentValue: r.ariaCurrentValue,
                        custom: r.custom
                    };
                    return r.custom || (c.value && (g.class = r.prefetchedClass || t.prefetchedClass),
                    g.rel = r.rel),
                    It(E_("RouterLink"), g, s.default)
                }
                const d = typeof a.value == "object" ? ((v = i.resolve(a.value)) == null ? void 0 : v.href) ?? null : a.value && !r.external && !l.value ? n(Yr(o.app.baseURL, a.value), i.resolve) : a.value || null
                  , _ = r.target || null
                  , p = r.noRel ? null : iv(r.rel, t.externalRelAttribute, d ? ov : "") || null
                  , m = () => d0(d, {
                    replace: r.replace
                });
                return r.custom ? s.default ? s.default({
                    href: d,
                    navigate: m,
                    get route() {
                        if (!d)
                            return;
                        const g = zs(d);
                        return {
                            path: g.pathname,
                            fullPath: g.pathname,
                            get query() {
                                return gh(g.search)
                            },
                            hash: g.hash,
                            params: {},
                            name: void 0,
                            matched: [],
                            redirectedFrom: void 0,
                            meta: {},
                            href: d
                        }
                    },
                    rel: p,
                    target: _,
                    isExternal: u.value,
                    isActive: !1,
                    isExactActive: !1
                }) : null : It("a", {
                    ref: f,
                    href: d,
                    rel: p,
                    target: _
                }, (D = s.default) == null ? void 0 : D.call(s))
            }
        }
    })
}
const ad = av(y0);
function Dc(t, e) {
    const n = e === "append" ? ki : so;
    return cr(t) && !t.startsWith("http") ? t : n(t, !0)
}
function lv() {
    const t = ge();
    if (t._observer)
        return t._observer;
    let e = null;
    const n = new Map
      , r = (i, o) => (e || (e = new IntersectionObserver(a => {
        for (const l of a) {
            const u = n.get(l.target);
            (l.isIntersecting || l.intersectionRatio > 0) && u && u()
        }
    }
    )),
    n.set(i, o),
    e.observe(i),
    () => {
        n.delete(i),
        e.unobserve(i),
        n.size === 0 && (e.disconnect(),
        e = null)
    }
    );
    return t._observer = {
        observe: r
    }
}
function uv() {
    const t = navigator.connection;
    return !!(t && (t.saveData || /2g/.test(t.effectiveType)))
}
const cv = At(t => {
    const e = qD();
    return t.vueApp.use(e),
    Ws(e),
    t.payload && t.payload.pinia && (e.state.value = t.payload.pinia),
    {
        provide: {
            pinia: e
        }
    }
}
)
  , fv = Gr( () => fe( () => import("./nuxt-icon.yFeawKXi.js"), __vite__mapDeps([]), import.meta.url).then(t => t.default))
  , hv = [["NuxtIcon", fv]]
  , dv = At({
    name: "nuxt:global-components",
    setup(t) {
        for (const [e,n] of hv)
            t.vueApp.component(e, n),
            t.vueApp.component("Lazy" + e, n)
    }
})
  , ii = {}
  , pv = At({
    name: "nuxt:prefetch",
    setup(t) {
        const e = fn();
        t.hooks.hook("app:mounted", () => {
            e.beforeEach(async n => {
                var s;
                const r = (s = n == null ? void 0 : n.meta) == null ? void 0 : s.layout;
                r && typeof ii[r] == "function" && await ii[r]()
            }
            )
        }
        ),
        t.hooks.hook("link:prefetch", n => {
            if (cr(n))
                return;
            const r = e.resolve(n);
            if (!r)
                return;
            const s = r.meta.layout;
            let i = Tl(r.meta.middleware);
            i = i.filter(o => typeof o == "string");
            for (const o of i)
                typeof gs[o] == "function" && gs[o]();
            s && typeof ii[s] == "function" && ii[s]()
        }
        )
    }
});
function Sa(t, ...e) {
    var n;
    (n = window.dataLayer) == null || n.push(arguments)
}
function ld({tags: t}) {
    window.dataLayer = window.dataLayer || [],
    Sa("js", new Date);
    for (const e of t)
        Sa("config", e.id, e.config)
}
function _v(t) {
    window[`ga-disable-${t}`] = !0
}
function gv(t) {
    const e = `ga-disable-${t}`;
    e in window && delete window[e]
}
function ud(t) {
    const e = [...t.tags].filter(Boolean).map(n => typeof n == "string" ? {
        id: n
    } : n);
    return t.id && e.unshift({
        id: t.id,
        config: t.config
    }),
    e
}
const mv = At({
    parallel: !0,
    setup() {
        const t = fr().public.gtag
          , e = ud(t);
        if (!e.length || (ld({
            tags: e
        }),
        !t.initialConsent))
            return;
        const n = t.loadingStrategy === "async" ? "async" : "defer";
        Fh({
            script: [{
                src: io(t.url, {
                    id: e[0].id
                }),
                [n]: !0
            }]
        })
    }
});
let vc = !1;
const bc = []
  , yv = t => new Promise( (e, n) => {
    if (typeof window > "u" || (window.storyblokRegisterEvent = s => {
        if (window.location === window.parent.location) {
            console.warn("You are not in Draft Mode or in the Visual Editor.");
            return
        }
        vc ? s() : bc.push(s)
    }
    ,
    document.getElementById("storyblok-javascript-bridge")))
        return;
    const r = document.createElement("script");
    r.async = !0,
    r.src = t,
    r.id = "storyblok-javascript-bridge",
    r.onerror = s => n(s),
    r.onload = s => {
        bc.forEach(i => i()),
        vc = !0,
        e(s)
    }
    ,
    document.getElementsByTagName("head")[0].appendChild(r)
}
);
var Dv = Object.defineProperty
  , vv = (t, e, n) => e in t ? Dv(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : t[e] = n
  , _e = (t, e, n) => (vv(t, typeof e != "symbol" ? e + "" : e, n),
n);
function Cc(t) {
    return !(t !== t || t === 1 / 0 || t === -1 / 0)
}
function bv(t, e, n) {
    if (!Cc(e))
        throw new TypeError("Expected `limit` to be a finite number");
    if (!Cc(n))
        throw new TypeError("Expected `interval` to be a finite number");
    const r = [];
    let s = []
      , i = 0;
    const o = function() {
        i++;
        const l = setTimeout(function() {
            i--,
            r.length > 0 && o(),
            s = s.filter(function(c) {
                return c !== l
            })
        }, n);
        s.indexOf(l) < 0 && s.push(l);
        const u = r.shift();
        u.resolve(t.apply(u.self, u.args))
    }
      , a = function(...l) {
        const u = this;
        return new Promise(function(c, f) {
            r.push({
                resolve: c,
                reject: f,
                args: l,
                self: u
            }),
            i < e && o()
        }
        )
    };
    return a.abort = function() {
        s.forEach(clearTimeout),
        s = [],
        r.forEach(function(l) {
            l.reject(function() {
                Error.call(this, "Throttled function aborted"),
                this.name = "AbortError"
            })
        }),
        r.length = 0
    }
    ,
    a
}
class Li {
    constructor() {
        _e(this, "isCDNUrl", (e="") => e.indexOf("/cdn/") > -1),
        _e(this, "getOptionsPage", (e, n=25, r=1) => ({
            ...e,
            per_page: n,
            page: r
        })),
        _e(this, "delay", e => new Promise(n => setTimeout(n, e))),
        _e(this, "arrayFrom", (e=0, n) => [...Array(e)].map(n)),
        _e(this, "range", (e=0, n=e) => {
            const r = Math.abs(n - e) || 0
              , s = e < n ? 1 : -1;
            return this.arrayFrom(r, (i, o) => o * s + e)
        }
        ),
        _e(this, "asyncMap", async (e, n) => Promise.all(e.map(n))),
        _e(this, "flatMap", (e=[], n) => e.map(n).reduce( (r, s) => [...r, ...s], [])),
        _e(this, "escapeHTML", function(e) {
            const n = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            }
              , r = /[&<>"']/g
              , s = RegExp(r.source);
            return e && s.test(e) ? e.replace(r, i => n[i]) : e
        })
    }
    stringify(e, n, r) {
        const s = [];
        for (const i in e) {
            if (!Object.prototype.hasOwnProperty.call(e, i))
                continue;
            const o = e[i]
              , a = r ? "" : encodeURIComponent(i);
            let l;
            typeof o == "object" ? l = this.stringify(o, n ? n + encodeURIComponent("[" + a + "]") : a, Array.isArray(o)) : l = (n ? n + encodeURIComponent("[" + a + "]") : a) + "=" + encodeURIComponent(o),
            s.push(l)
        }
        return s.join("&")
    }
    getRegionURL(e) {
        const n = "api.storyblok.com"
          , r = "api-us.storyblok.com"
          , s = "app.storyblokchina.cn";
        switch (e) {
        case "us":
            return r;
        case "cn":
            return s;
        default:
            return n
        }
    }
}
const Cv = function(t, e) {
    const n = {};
    for (const r in t) {
        const s = t[r];
        e.indexOf(r) > -1 && s !== null && (n[r] = s)
    }
    return n
}
  , wv = t => t === "email"
  , Ev = () => ({
    singleTag: "hr"
})
  , Tv = () => ({
    tag: "blockquote"
})
  , xv = () => ({
    tag: "ul"
})
  , Sv = t => ({
    tag: ["pre", {
        tag: "code",
        attrs: t.attrs
    }]
})
  , kv = () => ({
    singleTag: "br"
})
  , Rv = t => ({
    tag: `h${t.attrs.level}`
})
  , Av = t => ({
    singleTag: [{
        tag: "img",
        attrs: Cv(t.attrs, ["src", "alt", "title"])
    }]
})
  , Fv = () => ({
    tag: "li"
})
  , Pv = () => ({
    tag: "ol"
})
  , Ov = () => ({
    tag: "p"
})
  , Mv = t => ({
    tag: [{
        tag: "span",
        attrs: {
            "data-type": "emoji",
            "data-name": t.attrs.name,
            emoji: t.attrs.emoji
        }
    }]
})
  , Lv = () => ({
    tag: "b"
})
  , Iv = () => ({
    tag: "strike"
})
  , $v = () => ({
    tag: "u"
})
  , Nv = () => ({
    tag: "strong"
})
  , Bv = () => ({
    tag: "code"
})
  , Hv = () => ({
    tag: "i"
})
  , jv = t => {
    const e = new Li().escapeHTML
      , n = {
        ...t.attrs
    }
      , {linktype: r="url"} = t.attrs;
    if (n.href && (n.href = e(t.attrs.href || "")),
    wv(r) && (n.href = `mailto:${n.href}`),
    n.anchor && (n.href = `${n.href}#${n.anchor}`,
    delete n.anchor),
    n.custom) {
        for (const s in n.custom)
            n[s] = n.custom[s];
        delete n.custom
    }
    return {
        tag: [{
            tag: "a",
            attrs: n
        }]
    }
}
  , Vv = t => ({
    tag: [{
        tag: "span",
        attrs: t.attrs
    }]
})
  , Uv = () => ({
    tag: "sub"
})
  , zv = () => ({
    tag: "sup"
})
  , Wv = t => ({
    tag: [{
        tag: "span",
        attrs: t.attrs
    }]
})
  , qv = t => {
    var e;
    return (e = t.attrs) != null && e.color ? {
        tag: [{
            tag: "span",
            attrs: {
                style: `background-color:${t.attrs.color};`
            }
        }]
    } : {
        tag: ""
    }
}
  , Kv = t => {
    var e;
    return (e = t.attrs) != null && e.color ? {
        tag: [{
            tag: "span",
            attrs: {
                style: `color:${t.attrs.color}`
            }
        }]
    } : {
        tag: ""
    }
}
  , Gv = {
    nodes: {
        horizontal_rule: Ev,
        blockquote: Tv,
        bullet_list: xv,
        code_block: Sv,
        hard_break: kv,
        heading: Rv,
        image: Av,
        list_item: Fv,
        ordered_list: Pv,
        paragraph: Ov,
        emoji: Mv
    },
    marks: {
        bold: Lv,
        strike: Iv,
        underline: $v,
        strong: Nv,
        code: Bv,
        italic: Hv,
        link: jv,
        styled: Vv,
        subscript: Uv,
        superscript: zv,
        anchor: Wv,
        highlight: qv,
        textStyle: Kv
    }
}
  , Yv = function(t) {
    const e = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    }
      , n = /[&<>"']/g
      , r = RegExp(n.source);
    return t && r.test(t) ? t.replace(n, s => e[s]) : t
};
class Ii {
    constructor(e) {
        _e(this, "marks"),
        _e(this, "nodes"),
        e || (e = Gv),
        this.marks = e.marks || [],
        this.nodes = e.nodes || []
    }
    addNode(e, n) {
        this.nodes[e] = n
    }
    addMark(e, n) {
        this.marks[e] = n
    }
    render(e, n={
        optimizeImages: !1
    }) {
        if (e && e.content && Array.isArray(e.content)) {
            let r = "";
            return e.content.forEach(s => {
                r += this.renderNode(s)
            }
            ),
            n.optimizeImages ? this.optimizeImages(r, n.optimizeImages) : r
        }
        return console.warn(`The render method must receive an Object with a "content" field.
			The "content" field must be an array of nodes as the type ISbRichtext.
			ISbRichtext:
				content?: ISbRichtext[]
				marks?: ISbRichtext[]
				attrs?: any
				text?: string
				type: string
				
				Example:
				{
					content: [
						{
							content: [
								{
									text: 'Hello World',
									type: 'text'
								}
							],
							type: 'paragraph'
						}
					],
					type: 'doc'
				}`),
        ""
    }
    optimizeImages(e, n) {
        let r = 0
          , s = 0
          , i = ""
          , o = "";
        typeof n != "boolean" && (typeof n.width == "number" && n.width > 0 && (i += `width="${n.width}" `,
        r = n.width),
        typeof n.height == "number" && n.height > 0 && (i += `height="${n.height}" `,
        s = n.height),
        (n.loading === "lazy" || n.loading === "eager") && (i += `loading="${n.loading}" `),
        typeof n.class == "string" && n.class.length > 0 && (i += `class="${n.class}" `),
        n.filters && (typeof n.filters.blur == "number" && n.filters.blur >= 0 && n.filters.blur <= 100 && (o += `:blur(${n.filters.blur})`),
        typeof n.filters.brightness == "number" && n.filters.brightness >= -100 && n.filters.brightness <= 100 && (o += `:brightness(${n.filters.brightness})`),
        n.filters.fill && (n.filters.fill.match(/[0-9A-Fa-f]{6}/g) || n.filters.fill === "transparent") && (o += `:fill(${n.filters.fill})`),
        n.filters.format && ["webp", "png", "jpeg"].includes(n.filters.format) && (o += `:format(${n.filters.format})`),
        typeof n.filters.grayscale == "boolean" && n.filters.grayscale && (o += ":grayscale()"),
        typeof n.filters.quality == "number" && n.filters.quality >= 0 && n.filters.quality <= 100 && (o += `:quality(${n.filters.quality})`),
        n.filters.rotate && [90, 180, 270].includes(n.filters.rotate) && (o += `:rotate(${n.filters.rotate})`),
        o.length > 0 && (o = "/filters" + o))),
        i.length > 0 && (e = e.replace(/<img/g, `<img ${i.trim()}`));
        const a = r > 0 || s > 0 || o.length > 0 ? `${r}x${s}${o}` : "";
        return e = e.replace(/a.storyblok.com\/f\/(\d+)\/([^.]+)\.(gif|jpg|jpeg|png|tif|tiff|bmp)/g, `a.storyblok.com/f/$1/$2.$3/m/${a}`),
        typeof n != "boolean" && (n.sizes || n.srcset) && (e = e.replace(/<img.*?src=["|'](.*?)["|']/g, l => {
            var u, c;
            const f = l.match(/a.storyblok.com\/f\/(\d+)\/([^.]+)\.(gif|jpg|jpeg|png|tif|tiff|bmp)/g);
            if (f && f.length > 0) {
                const h = {
                    srcset: (u = n.srcset) == null ? void 0 : u.map(_ => {
                        if (typeof _ == "number")
                            return `//${f}/m/${_}x0${o} ${_}w`;
                        if (typeof _ == "object" && _.length === 2) {
                            let p = 0
                              , m = 0;
                            return typeof _[0] == "number" && (p = _[0]),
                            typeof _[1] == "number" && (m = _[1]),
                            `//${f}/m/${p}x${m}${o} ${p}w`
                        }
                    }
                    ).join(", "),
                    sizes: (c = n.sizes) == null ? void 0 : c.map(_ => _).join(", ")
                };
                let d = "";
                return h.srcset && (d += `srcset="${h.srcset}" `),
                h.sizes && (d += `sizes="${h.sizes}" `),
                l.replace(/<img/g, `<img ${d.trim()}`)
            }
            return l
        }
        )),
        e
    }
    renderNode(e) {
        const n = [];
        e.marks && e.marks.forEach(s => {
            const i = this.getMatchingMark(s);
            i && i.tag !== "" && n.push(this.renderOpeningTag(i.tag))
        }
        );
        const r = this.getMatchingNode(e);
        return r && r.tag && n.push(this.renderOpeningTag(r.tag)),
        e.content ? e.content.forEach(s => {
            n.push(this.renderNode(s))
        }
        ) : e.text ? n.push(Yv(e.text)) : r && r.singleTag ? n.push(this.renderTag(r.singleTag, " /")) : r && r.html ? n.push(r.html) : e.type === "emoji" && n.push(this.renderEmoji(e)),
        r && r.tag && n.push(this.renderClosingTag(r.tag)),
        e.marks && e.marks.slice(0).reverse().forEach(s => {
            const i = this.getMatchingMark(s);
            i && i.tag !== "" && n.push(this.renderClosingTag(i.tag))
        }
        ),
        n.join("")
    }
    renderTag(e, n) {
        return e.constructor === String ? `<${e}${n}>` : e.map(r => {
            if (r.constructor === String)
                return `<${r}${n}>`;
            {
                let s = `<${r.tag}`;
                if (r.attrs)
                    for (const i in r.attrs) {
                        const o = r.attrs[i];
                        o !== null && (s += ` ${i}="${o}"`)
                    }
                return `${s}${n}>`
            }
        }
        ).join("")
    }
    renderOpeningTag(e) {
        return this.renderTag(e, "")
    }
    renderClosingTag(e) {
        return e.constructor === String ? `</${e}>` : e.slice(0).reverse().map(n => n.constructor === String ? `</${n}>` : `</${n.tag}>`).join("")
    }
    getMatchingNode(e) {
        const n = this.nodes[e.type];
        if (typeof n == "function")
            return n(e)
    }
    getMatchingMark(e) {
        const n = this.marks[e.type];
        if (typeof n == "function")
            return n(e)
    }
    renderEmoji(e) {
        if (e.attrs.emoji)
            return e.attrs.emoji;
        const n = [{
            tag: "img",
            attrs: {
                src: e.attrs.fallbackImage,
                draggable: "false",
                loading: "lazy",
                align: "absmiddle"
            }
        }];
        return this.renderTag(n, " /")
    }
}
class Xv {
    constructor(e) {
        _e(this, "baseURL"),
        _e(this, "timeout"),
        _e(this, "headers"),
        _e(this, "responseInterceptor"),
        _e(this, "fetch"),
        _e(this, "ejectInterceptor"),
        _e(this, "url"),
        _e(this, "parameters"),
        this.baseURL = e.baseURL,
        this.headers = e.headers || new Headers,
        this.timeout = e != null && e.timeout ? e.timeout * 1e3 : 0,
        this.responseInterceptor = e.responseInterceptor,
        this.fetch = (...n) => e.fetch ? e.fetch(...n) : fetch(...n),
        this.ejectInterceptor = !1,
        this.url = "",
        this.parameters = {}
    }
    get(e, n) {
        return this.url = e,
        this.parameters = n,
        this._methodHandler("get")
    }
    post(e, n) {
        return this.url = e,
        this.parameters = n,
        this._methodHandler("post")
    }
    put(e, n) {
        return this.url = e,
        this.parameters = n,
        this._methodHandler("put")
    }
    delete(e, n) {
        return this.url = e,
        this.parameters = n,
        this._methodHandler("delete")
    }
    async _responseHandler(e) {
        const n = []
          , r = {
            data: {},
            headers: {},
            status: 0,
            statusText: ""
        };
        e.status !== 204 && await e.json().then(s => {
            r.data = s
        }
        );
        for (const s of e.headers.entries())
            n[s[0]] = s[1];
        return r.headers = {
            ...n
        },
        r.status = e.status,
        r.statusText = e.statusText,
        r
    }
    async _methodHandler(e) {
        let n = `${this.baseURL}${this.url}`
          , r = null;
        if (e === "get") {
            const l = new Li;
            n = `${this.baseURL}${this.url}?${l.stringify(this.parameters)}`
        } else
            r = JSON.stringify(this.parameters);
        const s = new URL(n)
          , i = new AbortController
          , {signal: o} = i;
        let a;
        this.timeout && (a = setTimeout( () => i.abort(), this.timeout));
        try {
            const l = await this.fetch(`${s}`, {
                method: e,
                headers: this.headers,
                body: r,
                signal: o
            });
            this.timeout && clearTimeout(a);
            const u = await this._responseHandler(l);
            return this.responseInterceptor && !this.ejectInterceptor ? this._statusHandler(this.responseInterceptor(u)) : this._statusHandler(u)
        } catch (l) {
            return {
                message: l
            }
        }
    }
    eject() {
        this.ejectInterceptor = !0
    }
    _statusHandler(e) {
        const n = /20[0-6]/g;
        return new Promise(r => {
            if (n.test(`${e.status}`))
                return r(e);
            const s = {
                message: e.statusText,
                status: e.status,
                response: Array.isArray(e.data) ? e.data[0] : e.data.error || e.data.slug
            };
            throw new Error(JSON.stringify(s))
        }
        )
    }
}
const wc = "SB-Agent"
  , Lo = {
    defaultAgentName: "SB-JS-CLIENT",
    defaultAgentVersion: "SB-Agent-Version",
    packageVersion: "5.14.2"
};
let oi = {};
const _r = {};
class Jv {
    constructor(e, n) {
        _e(this, "client"),
        _e(this, "maxRetries"),
        _e(this, "throttle"),
        _e(this, "accessToken"),
        _e(this, "cache"),
        _e(this, "helpers"),
        _e(this, "resolveCounter"),
        _e(this, "relations"),
        _e(this, "links"),
        _e(this, "richTextResolver"),
        _e(this, "resolveNestedRelations");
        let r = e.endpoint || n;
        if (!r) {
            const o = new Li().getRegionURL
              , a = e.https === !1 ? "http" : "https";
            e.oauthToken ? r = `${a}://${o(e.region)}/v1` : r = `${a}://${o(e.region)}/v2`
        }
        const s = new Headers;
        if (s.set("Content-Type", "application/json"),
        s.set("Accept", "application/json"),
        e.headers)
            for (const o in e.headers)
                s.set(o, e.headers[o]);
        s.has(wc) || (s.set(wc, Lo.defaultAgentName),
        s.set(Lo.defaultAgentVersion, Lo.packageVersion));
        let i = 5;
        e.oauthToken && (s.set("Authorization", e.oauthToken),
        i = 3),
        e.rateLimit && (i = e.rateLimit),
        e.richTextSchema ? this.richTextResolver = new Ii(e.richTextSchema) : this.richTextResolver = new Ii,
        e.componentResolver && this.setComponentResolver(e.componentResolver),
        this.maxRetries = e.maxRetries || 5,
        this.throttle = bv(this.throttledRequest, i, 1e3),
        this.accessToken = e.accessToken || "",
        this.relations = {},
        this.links = {},
        this.cache = e.cache || {
            clear: "manual"
        },
        this.helpers = new Li,
        this.resolveCounter = 0,
        this.resolveNestedRelations = e.resolveNestedRelations || !0,
        this.client = new Xv({
            baseURL: r,
            timeout: e.timeout || 0,
            headers: s,
            responseInterceptor: e.responseInterceptor,
            fetch: e.fetch
        })
    }
    setComponentResolver(e) {
        this.richTextResolver.addNode("blok", n => {
            let r = "";
            return n.attrs.body && n.attrs.body.forEach(s => {
                r += e(s.component, s)
            }
            ),
            {
                html: r
            }
        }
        )
    }
    parseParams(e) {
        return e.version || (e.version = "published"),
        e.token || (e.token = this.getToken()),
        e.cv || (e.cv = _r[e.token]),
        Array.isArray(e.resolve_relations) && (e.resolve_relations = e.resolve_relations.join(",")),
        e
    }
    factoryParamOptions(e, n) {
        return this.helpers.isCDNUrl(e) ? this.parseParams(n) : n
    }
    makeRequest(e, n, r, s) {
        const i = this.factoryParamOptions(e, this.helpers.getOptionsPage(n, r, s));
        return this.cacheResponse(e, i)
    }
    get(e, n) {
        n || (n = {});
        const r = `/${e}`
          , s = this.factoryParamOptions(r, n);
        return this.cacheResponse(r, s)
    }
    async getAll(e, n, r) {
        const s = (n == null ? void 0 : n.per_page) || 25
          , i = `/${e}`
          , o = i.split("/")
          , a = r || o[o.length - 1]
          , l = 1
          , u = await this.makeRequest(i, n, s, l)
          , c = u.total ? Math.ceil(u.total / s) : 1
          , f = await this.helpers.asyncMap(this.helpers.range(l, c), h => this.makeRequest(i, n, s, h + 1));
        return this.helpers.flatMap([u, ...f], h => Object.values(h.data[a]))
    }
    post(e, n) {
        const r = `/${e}`;
        return Promise.resolve(this.throttle("post", r, n))
    }
    put(e, n) {
        const r = `/${e}`;
        return Promise.resolve(this.throttle("put", r, n))
    }
    delete(e, n) {
        const r = `/${e}`;
        return Promise.resolve(this.throttle("delete", r, n))
    }
    getStories(e) {
        return this.get("cdn/stories", e)
    }
    getStory(e, n) {
        return this.get(`cdn/stories/${e}`, n)
    }
    getToken() {
        return this.accessToken
    }
    ejectInterceptor() {
        this.client.eject()
    }
    _cleanCopy(e) {
        return JSON.parse(JSON.stringify(e))
    }
    _insertLinks(e, n, r) {
        const s = e[n];
        s && s.fieldtype == "multilink" && s.linktype == "story" && typeof s.id == "string" && this.links[r][s.id] ? s.story = this._cleanCopy(this.links[r][s.id]) : s && s.linktype === "story" && typeof s.uuid == "string" && this.links[r][s.uuid] && (s.story = this._cleanCopy(this.links[r][s.uuid]))
    }
    _insertRelations(e, n, r, s) {
        if (r.indexOf(`${e.component}.${n}`) > -1) {
            if (typeof e[n] == "string")
                this.relations[s][e[n]] && (e[n] = this._cleanCopy(this.relations[s][e[n]]));
            else if (e[n] && e[n].constructor === Array) {
                const i = [];
                e[n].forEach(o => {
                    this.relations[s][o] && i.push(this._cleanCopy(this.relations[s][o]))
                }
                ),
                e[n] = i
            }
        }
    }
    iterateTree(e, n, r) {
        const s = i => {
            if (i != null) {
                if (i.constructor === Array)
                    for (let o = 0; o < i.length; o++)
                        s(i[o]);
                else if (i.constructor === Object) {
                    if (i._stopResolving)
                        return;
                    for (const o in i)
                        (i.component && i._uid || i.type === "link") && (this._insertRelations(i, o, n, r),
                        this._insertLinks(i, o, r)),
                        s(i[o])
                }
            }
        }
        ;
        s(e.content)
    }
    async resolveLinks(e, n, r) {
        let s = [];
        if (e.link_uuids) {
            const i = e.link_uuids.length
              , o = []
              , a = 50;
            for (let l = 0; l < i; l += a) {
                const u = Math.min(i, l + a);
                o.push(e.link_uuids.slice(l, u))
            }
            for (let l = 0; l < o.length; l++)
                (await this.getStories({
                    per_page: a,
                    language: n.language,
                    version: n.version,
                    by_uuids: o[l].join(",")
                })).data.stories.forEach(u => {
                    s.push(u)
                }
                )
        } else
            s = e.links;
        s.forEach(i => {
            this.links[r][i.uuid] = {
                ...i,
                _stopResolving: !0
            }
        }
        )
    }
    async resolveRelations(e, n, r) {
        let s = [];
        if (e.rel_uuids) {
            const i = e.rel_uuids.length
              , o = []
              , a = 50;
            for (let l = 0; l < i; l += a) {
                const u = Math.min(i, l + a);
                o.push(e.rel_uuids.slice(l, u))
            }
            for (let l = 0; l < o.length; l++)
                (await this.getStories({
                    per_page: a,
                    language: n.language,
                    version: n.version,
                    by_uuids: o[l].join(",")
                })).data.stories.forEach(u => {
                    s.push(u)
                }
                )
        } else
            s = e.rels;
        s && s.length > 0 && s.forEach(i => {
            this.relations[r][i.uuid] = {
                ...i,
                _stopResolving: !0
            }
        }
        )
    }
    async resolveStories(e, n, r) {
        var s, i;
        let o = [];
        if (this.links[r] = {},
        this.relations[r] = {},
        typeof n.resolve_relations < "u" && n.resolve_relations.length > 0 && (typeof n.resolve_relations == "string" && (o = n.resolve_relations.split(",")),
        await this.resolveRelations(e, n, r)),
        n.resolve_links && ["1", "story", "url", "link"].indexOf(n.resolve_links) > -1 && ((s = e.links) != null && s.length || (i = e.link_uuids) != null && i.length) && await this.resolveLinks(e, n, r),
        this.resolveNestedRelations)
            for (const a in this.relations[r])
                this.iterateTree(this.relations[r][a], o, r);
        e.story ? this.iterateTree(e.story, o, r) : e.stories.forEach(a => {
            this.iterateTree(a, o, r)
        }
        ),
        delete this.links[r],
        delete this.relations[r]
    }
    async cacheResponse(e, n, r) {
        (typeof r > "u" || !r) && (r = 0);
        const s = this.helpers.stringify({
            url: e,
            params: n
        })
          , i = this.cacheProvider();
        if (this.cache.clear === "auto" && n.version === "draft" && await this.flushCache(),
        n.version === "published" && e != "/cdn/spaces/me") {
            const o = await i.get(s);
            if (o)
                return Promise.resolve(o)
        }
        return new Promise(async (o, a) => {
            var l;
            try {
                const u = await this.throttle("get", e, n);
                if (u.status !== 200)
                    return a(u);
                let c = {
                    data: u.data,
                    headers: u.headers
                };
                if ((l = u.headers) != null && l["per-page"] && (c = Object.assign({}, c, {
                    perPage: u.headers["per-page"] ? parseInt(u.headers["per-page"]) : 0,
                    total: u.headers["per-page"] ? parseInt(u.headers.total) : 0
                })),
                c.data.story || c.data.stories) {
                    const f = this.resolveCounter = ++this.resolveCounter % 1e3;
                    await this.resolveStories(c.data, n, `${f}`)
                }
                return n.version === "published" && e != "/cdn/spaces/me" && await i.set(s, c),
                c.data.cv && n.token && (n.version == "draft" && _r[n.token] != c.data.cv && await this.flushCache(),
                _r[n.token] = c.data.cv),
                o(c)
            } catch (u) {
                if (u.response && u.response.status === 429 && (r = r ? r + 1 : 0,
                r < this.maxRetries))
                    return console.log(`Hit rate limit. Retrying in ${r} seconds.`),
                    await this.helpers.delay(1e3 * r),
                    this.cacheResponse(e, n, r).then(o).catch(a);
                a(u.message)
            }
        }
        )
    }
    throttledRequest(e, n, r) {
        return this.client[e](n, r)
    }
    cacheVersions() {
        return _r
    }
    cacheVersion() {
        return _r[this.accessToken]
    }
    setCacheVersion(e) {
        this.accessToken && (_r[this.accessToken] = e)
    }
    cacheProvider() {
        switch (this.cache.type) {
        case "memory":
            return {
                get(e) {
                    return Promise.resolve(oi[e])
                },
                getAll() {
                    return Promise.resolve(oi)
                },
                set(e, n) {
                    return oi[e] = n,
                    Promise.resolve(void 0)
                },
                flush() {
                    return oi = {},
                    Promise.resolve(void 0)
                }
            };
        case "custom":
            if (this.cache.custom)
                return this.cache.custom;
        default:
            return {
                get() {
                    return Promise.resolve(void 0)
                },
                getAll() {
                    return Promise.resolve(void 0)
                },
                set() {
                    return Promise.resolve(void 0)
                },
                flush() {
                    return Promise.resolve(void 0)
                }
            }
        }
    }
    async flushCache() {
        return await this.cacheProvider().flush(),
        this
    }
}
const Qv = (t={}) => {
    const {apiOptions: e} = t;
    if (!e.accessToken) {
        console.error("You need to provide an access token to interact with Storyblok API. Read https://www.storyblok.com/docs/api/content-delivery#topics/authentication");
        return
    }
    return {
        storyblokApi: new Jv(e)
    }
}
  , Zv = t => {
    if (typeof t != "object" || typeof t._editable > "u")
        return {};
    const e = JSON.parse(t._editable.replace(/^<!--#storyblok#/, "").replace(/-->$/, ""));
    return e ? {
        "data-blok-c": JSON.stringify(e),
        "data-blok-uid": e.id + "-" + e.uid
    } : {}
}
;
let ka, Ec = "https://app.storyblok.com/f/storyblok-v2-latest.js";
const eb = (t, e, n={}) => {
    var r;
    const s = !(typeof window > "u") && typeof window.storyblokRegisterEvent < "u"
      , i = +new URL((r = window.location) == null ? void 0 : r.href).searchParams.get("_storyblok") === t;
    if (!(!s || !i)) {
        if (!t) {
            console.warn("Story ID is not defined. Please provide a valid ID.");
            return
        }
        window.storyblokRegisterEvent( () => {
            new window.StoryblokBridge(n).on(["input", "published", "change"], o => {
                o.action === "input" && o.story.id === t ? e(o.story) : (o.action === "change" || o.action === "published") && o.storyId === t && window.location.reload()
            }
            )
        }
        )
    }
}
  , tb = (t={}) => {
    var e, n;
    const {bridge: r, accessToken: s, use: i=[], apiOptions: o={}, richText: a={}, bridgeUrl: l} = t;
    o.accessToken = o.accessToken || s;
    const u = {
        bridge: r,
        apiOptions: o
    };
    let c = {};
    i.forEach(h => {
        c = {
            ...c,
            ...h(u)
        }
    }
    ),
    l && (Ec = l);
    const f = !(typeof window > "u") && ((n = (e = window.location) == null ? void 0 : e.search) == null ? void 0 : n.includes("_storyblok_tk"));
    return r !== !1 && f && yv(Ec),
    ka = new Ii(a.schema),
    a.resolver && cd(ka, a.resolver),
    c
}
  , cd = (t, e) => {
    t.addNode("blok", n => {
        let r = "";
        return n.attrs.body.forEach(s => {
            r += e(s.component, s)
        }
        ),
        {
            html: r
        }
    }
    )
}
  , nb = t => !t || !(t != null && t.content.some(e => e.content || e.type === "blok" || e.type === "horizontal_rule"))
  , rb = (t, e, n) => {
    let r = n || ka;
    if (!r) {
        console.error("Please initialize the Storyblok SDK before calling the renderRichText function");
        return
    }
    return nb(t) ? "" : (e && (r = new Ii(e.schema),
    e.resolver && cd(r, e.resolver)),
    r.render(t))
}
  , sb = Je({
    __name: "StoryblokComponent",
    props: {
        blok: {}
    },
    setup(t, {expose: e}) {
        const n = t
          , r = ae();
        e({
            value: r
        });
        const s = typeof us(n.blok.component) != "string"
          , i = et("VueSDKOptions")
          , o = ae(n.blok.component);
        return s || (i.enableFallbackComponent ? (o.value = i.customFallbackComponent ?? "FallbackComponent",
        typeof us(o.value) == "string" && console.error(`Is the Fallback component "${o.value}" registered properly?`)) : console.error(`Component could not be found for blok "${n.blok.component}"! Is it defined in main.ts as "app.component("${n.blok.component}", ${n.blok.component});"?`)),
        (a, l) => (Te(),
        Mt(us(o.value), no({
            ref_key: "blokRef",
            ref: r
        }, {
            ...a.$props,
            ...a.$attrs
        }), null, 16))
    }
})
  , ib = {
    beforeMount(t, e) {
        if (e.value) {
            const n = Zv(e.value);
            Object.keys(n).length > 0 && (t.setAttribute("data-blok-c", n["data-blok-c"]),
            t.setAttribute("data-blok-uid", n["data-blok-uid"]),
            t.classList.add("storyblok__outline"))
        }
    }
}
  , ob = t => {
    console.error(`You can't use ${t} if you're not loading apiPlugin. Please provide it on StoryblokVue initialization.
    `)
}
;
let Ra = null;
const Sl = () => (Ra || ob("useStoryblokApi"),
Ra)
  , ab = {
    install(t, e={}) {
        t.directive("editable", ib),
        t.component("StoryblokComponent", sb),
        e.enableFallbackComponent && !e.customFallbackComponent && t.component("FallbackComponent", Gr( () => fe( () => import("./FallbackComponent-ddf2f161.lVLyRjYn.js"), __vite__mapDeps([]), import.meta.url)));
        const {storyblokApi: n} = tb(e);
        Ra = n,
        t.provide("VueSDKOptions", e)
    }
}
  , lb = At( ({vueApp: t}) => {
    let {storyblok: e} = fr().public;
    e = JSON.parse(JSON.stringify(e)),
    t.use(ab, {
        ...e,
        use: [Qv]
    })
}
)
  , ub = At({
    name: "nuxt:chunk-reload",
    setup(t) {
        const e = fn()
          , n = fr()
          , r = new Set;
        e.beforeEach( () => {
            r.clear()
        }
        ),
        t.hook("app:chunkError", ({error: i}) => {
            r.add(i)
        }
        );
        function s(i) {
            const a = "href"in i && i.href[0] === "#" ? n.app.baseURL + i.href : Yr(n.app.baseURL, i.fullPath);
            sv({
                path: a,
                persistState: !0
            })
        }
        t.hook("app:manifest:update", () => {
            e.beforeResolve(s)
        }
        ),
        e.onError( (i, o) => {
            r.has(i) && s(o)
        }
        )
    }
});
function $i(t, e, n) {
    return Math.max(t, Math.min(e, n))
}
class cb {
    advance(e) {
        var a;
        if (!this.isRunning)
            return;
        let n = !1;
        if (this.lerp)
            this.value = (r = this.value,
            s = this.to,
            i = 60 * this.lerp,
            o = e,
            function(l, u, c) {
                return (1 - c) * l + c * u
            }(r, s, 1 - Math.exp(-i * o))),
            Math.round(this.value) === this.to && (this.value = this.to,
            n = !0);
        else {
            this.currentTime += e;
            const l = $i(0, this.currentTime / this.duration, 1);
            n = l >= 1;
            const u = n ? 1 : this.easing(l);
            this.value = this.from + (this.to - this.from) * u
        }
        var r, s, i, o;
        (a = this.onUpdate) == null || a.call(this, this.value, n),
        n && this.stop()
    }
    stop() {
        this.isRunning = !1
    }
    fromTo(e, n, {lerp: r=.1, duration: s=1, easing: i=l => l, onStart: o, onUpdate: a}) {
        this.from = this.value = e,
        this.to = n,
        this.lerp = r,
        this.duration = s,
        this.easing = i,
        this.currentTime = 0,
        this.isRunning = !0,
        o == null || o(),
        this.onUpdate = a
    }
}
class fb {
    constructor({wrapper: e, content: n, autoResize: r=!0}={}) {
        Bt(this, "resize", () => {
            this.onWrapperResize(),
            this.onContentResize()
        }
        );
        Bt(this, "onWrapperResize", () => {
            this.wrapper === window ? (this.width = window.innerWidth,
            this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth,
            this.height = this.wrapper.clientHeight)
        }
        );
        Bt(this, "onContentResize", () => {
            this.scrollHeight = this.content.scrollHeight,
            this.scrollWidth = this.content.scrollWidth
        }
        );
        if (this.wrapper = e,
        this.content = n,
        r) {
            const s = function(i, o) {
                let a;
                return function() {
                    let l = arguments
                      , u = this;
                    clearTimeout(a),
                    a = setTimeout(function() {
                        i.apply(u, l)
                    }, o)
                }
            }(this.resize, 250);
            this.wrapper !== window && (this.wrapperResizeObserver = new ResizeObserver(s),
            this.wrapperResizeObserver.observe(this.wrapper)),
            this.contentResizeObserver = new ResizeObserver(s),
            this.contentResizeObserver.observe(this.content)
        }
        this.resize()
    }
    destroy() {
        var e, n;
        (e = this.wrapperResizeObserver) == null || e.disconnect(),
        (n = this.contentResizeObserver) == null || n.disconnect()
    }
    get limit() {
        return {
            x: this.scrollWidth - this.width,
            y: this.scrollHeight - this.height
        }
    }
}
class fd {
    constructor() {
        this.events = {}
    }
    emit(e, ...n) {
        let r = this.events[e] || [];
        for (let s = 0, i = r.length; s < i; s++)
            r[s](...n)
    }
    on(e, n) {
        var r;
        return (r = this.events[e]) != null && r.push(n) || (this.events[e] = [n]),
        () => {
            var s;
            this.events[e] = (s = this.events[e]) == null ? void 0 : s.filter(i => n !== i)
        }
    }
    off(e, n) {
        var r;
        this.events[e] = (r = this.events[e]) == null ? void 0 : r.filter(s => n !== s)
    }
    destroy() {
        this.events = {}
    }
}
class hb {
    constructor(e, {wheelMultiplier: n=1, touchMultiplier: r=2, normalizeWheel: s=!1}) {
        Bt(this, "onTouchStart", e => {
            const {clientX: n, clientY: r} = e.targetTouches ? e.targetTouches[0] : e;
            this.touchStart.x = n,
            this.touchStart.y = r,
            this.lastDelta = {
                x: 0,
                y: 0
            },
            this.emitter.emit("scroll", {
                deltaX: 0,
                deltaY: 0,
                event: e
            })
        }
        );
        Bt(this, "onTouchMove", e => {
            const {clientX: n, clientY: r} = e.targetTouches ? e.targetTouches[0] : e
              , s = -(n - this.touchStart.x) * this.touchMultiplier
              , i = -(r - this.touchStart.y) * this.touchMultiplier;
            this.touchStart.x = n,
            this.touchStart.y = r,
            this.lastDelta = {
                x: s,
                y: i
            },
            this.emitter.emit("scroll", {
                deltaX: s,
                deltaY: i,
                event: e
            })
        }
        );
        Bt(this, "onTouchEnd", e => {
            this.emitter.emit("scroll", {
                deltaX: this.lastDelta.x,
                deltaY: this.lastDelta.y,
                event: e
            })
        }
        );
        Bt(this, "onWheel", e => {
            let {deltaX: n, deltaY: r} = e;
            this.normalizeWheel && (n = $i(-100, n, 100),
            r = $i(-100, r, 100)),
            n *= this.wheelMultiplier,
            r *= this.wheelMultiplier,
            this.emitter.emit("scroll", {
                deltaX: n,
                deltaY: r,
                event: e
            })
        }
        );
        this.element = e,
        this.wheelMultiplier = n,
        this.touchMultiplier = r,
        this.normalizeWheel = s,
        this.touchStart = {
            x: null,
            y: null
        },
        this.emitter = new fd,
        this.element.addEventListener("wheel", this.onWheel, {
            passive: !1
        }),
        this.element.addEventListener("touchstart", this.onTouchStart, {
            passive: !1
        }),
        this.element.addEventListener("touchmove", this.onTouchMove, {
            passive: !1
        }),
        this.element.addEventListener("touchend", this.onTouchEnd, {
            passive: !1
        })
    }
    on(e, n) {
        return this.emitter.on(e, n)
    }
    destroy() {
        this.emitter.destroy(),
        this.element.removeEventListener("wheel", this.onWheel, {
            passive: !1
        }),
        this.element.removeEventListener("touchstart", this.onTouchStart, {
            passive: !1
        }),
        this.element.removeEventListener("touchmove", this.onTouchMove, {
            passive: !1
        }),
        this.element.removeEventListener("touchend", this.onTouchEnd, {
            passive: !1
        })
    }
}
class db {
    constructor({wrapper: e=window, content: n=document.documentElement, wheelEventsTarget: r=e, eventsTarget: s=r, smoothWheel: i=!0, syncTouch: o=!1, syncTouchLerp: a=.075, touchInertiaMultiplier: l=35, duration: u, easing: c=g => Math.min(1, 1.001 - Math.pow(2, -10 * g)), lerp: f=!u && .1, infinite: h=!1, orientation: d="vertical", gestureOrientation: _="vertical", touchMultiplier: p=1, wheelMultiplier: m=1, normalizeWheel: v=!1, autoResize: D=!0}={}) {
        Bt(this, "onVirtualScroll", ({deltaX: e, deltaY: n, event: r}) => {
            if (r.ctrlKey)
                return;
            const s = r.type.includes("touch")
              , i = r.type.includes("wheel");
            if (this.options.syncTouch && s && r.type === "touchstart")
                return void this.reset();
            const o = e === 0 && n === 0
              , a = this.options.gestureOrientation === "vertical" && n === 0 || this.options.gestureOrientation === "horizontal" && e === 0;
            if (o || a)
                return;
            let l = r.composedPath();
            if (l = l.slice(0, l.indexOf(this.rootElement)),
            l.find(h => {
                var d, _, p, m;
                return ((d = h.hasAttribute) == null ? void 0 : d.call(h, "data-lenis-prevent")) || s && ((_ = h.hasAttribute) == null ? void 0 : _.call(h, "data-lenis-prevent-touch")) || i && ((p = h.hasAttribute) == null ? void 0 : p.call(h, "data-lenis-prevent-wheel")) || ((m = h.classList) == null ? void 0 : m.contains("lenis"))
            }
            ))
                return;
            if (this.isStopped || this.isLocked)
                return void r.preventDefault();
            if (this.isSmooth = this.options.syncTouch && s || this.options.smoothWheel && i,
            !this.isSmooth)
                return this.isScrolling = !1,
                void this.animate.stop();
            r.preventDefault();
            let u = n;
            this.options.gestureOrientation === "both" ? u = Math.abs(n) > Math.abs(e) ? n : e : this.options.gestureOrientation === "horizontal" && (u = e);
            const c = s && this.options.syncTouch
              , f = s && r.type === "touchend" && Math.abs(u) > 5;
            f && (u = this.velocity * this.options.touchInertiaMultiplier),
            this.scrollTo(this.targetScroll + u, {
                programmatic: !1,
                ...c ? {
                    lerp: f ? this.options.syncTouchLerp : 1
                } : {
                    lerp: this.options.lerp,
                    duration: this.options.duration,
                    easing: this.options.easing
                }
            })
        }
        );
        Bt(this, "onNativeScroll", () => {
            if (!this.__preventNextScrollEvent && !this.isScrolling) {
                const e = this.animatedScroll;
                this.animatedScroll = this.targetScroll = this.actualScroll,
                this.velocity = 0,
                this.direction = Math.sign(this.animatedScroll - e),
                this.emit()
            }
        }
        );
        window.lenisVersion = "1.0.34",
        e !== document.documentElement && e !== document.body || (e = window),
        this.options = {
            wrapper: e,
            content: n,
            wheelEventsTarget: r,
            eventsTarget: s,
            smoothWheel: i,
            syncTouch: o,
            syncTouchLerp: a,
            touchInertiaMultiplier: l,
            duration: u,
            easing: c,
            lerp: f,
            infinite: h,
            gestureOrientation: _,
            orientation: d,
            touchMultiplier: p,
            wheelMultiplier: m,
            normalizeWheel: v,
            autoResize: D
        },
        this.animate = new cb,
        this.emitter = new fd,
        this.dimensions = new fb({
            wrapper: e,
            content: n,
            autoResize: D
        }),
        this.toggleClass("lenis", !0),
        this.velocity = 0,
        this.isLocked = !1,
        this.isStopped = !1,
        this.isSmooth = o || i,
        this.isScrolling = !1,
        this.targetScroll = this.animatedScroll = this.actualScroll,
        this.options.wrapper.addEventListener("scroll", this.onNativeScroll, {
            passive: !1
        }),
        this.virtualScroll = new hb(s,{
            touchMultiplier: p,
            wheelMultiplier: m,
            normalizeWheel: v
        }),
        this.virtualScroll.on("scroll", this.onVirtualScroll)
    }
    destroy() {
        this.emitter.destroy(),
        this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, {
            passive: !1
        }),
        this.virtualScroll.destroy(),
        this.dimensions.destroy(),
        this.toggleClass("lenis", !1),
        this.toggleClass("lenis-smooth", !1),
        this.toggleClass("lenis-scrolling", !1),
        this.toggleClass("lenis-stopped", !1),
        this.toggleClass("lenis-locked", !1)
    }
    on(e, n) {
        return this.emitter.on(e, n)
    }
    off(e, n) {
        return this.emitter.off(e, n)
    }
    setScroll(e) {
        this.isHorizontal ? this.rootElement.scrollLeft = e : this.rootElement.scrollTop = e
    }
    resize() {
        this.dimensions.resize()
    }
    emit() {
        this.emitter.emit("scroll", this)
    }
    reset() {
        this.isLocked = !1,
        this.isScrolling = !1,
        this.animatedScroll = this.targetScroll = this.actualScroll,
        this.velocity = 0,
        this.animate.stop()
    }
    start() {
        this.isStopped = !1,
        this.reset()
    }
    stop() {
        this.isStopped = !0,
        this.animate.stop(),
        this.reset()
    }
    raf(e) {
        const n = e - (this.time || e);
        this.time = e,
        this.animate.advance(.001 * n)
    }
    scrollTo(e, {offset: n=0, immediate: r=!1, lock: s=!1, duration: i=this.options.duration, easing: o=this.options.easing, lerp: a=!i && this.options.lerp, onComplete: l=null, force: u=!1, programmatic: c=!0}={}) {
        if (!this.isStopped && !this.isLocked || u) {
            if (["top", "left", "start"].includes(e))
                e = 0;
            else if (["bottom", "right", "end"].includes(e))
                e = this.limit;
            else {
                let f;
                if (typeof e == "string" ? f = document.querySelector(e) : e != null && e.nodeType && (f = e),
                f) {
                    if (this.options.wrapper !== window) {
                        const d = this.options.wrapper.getBoundingClientRect();
                        n -= this.isHorizontal ? d.left : d.top
                    }
                    const h = f.getBoundingClientRect();
                    e = (this.isHorizontal ? h.left : h.top) + this.animatedScroll
                }
            }
            if (typeof e == "number") {
                if (e += n,
                e = Math.round(e),
                this.options.infinite ? c && (this.targetScroll = this.animatedScroll = this.scroll) : e = $i(0, e, this.limit),
                r)
                    return this.animatedScroll = this.targetScroll = e,
                    this.setScroll(this.scroll),
                    this.reset(),
                    void (l == null ? void 0 : l(this));
                if (!c) {
                    if (e === this.targetScroll)
                        return;
                    this.targetScroll = e
                }
                this.animate.fromTo(this.animatedScroll, e, {
                    duration: i,
                    easing: o,
                    lerp: a,
                    onStart: () => {
                        s && (this.isLocked = !0),
                        this.isScrolling = !0
                    }
                    ,
                    onUpdate: (f, h) => {
                        this.isScrolling = !0,
                        this.velocity = f - this.animatedScroll,
                        this.direction = Math.sign(this.velocity),
                        this.animatedScroll = f,
                        this.setScroll(this.scroll),
                        c && (this.targetScroll = f),
                        h || this.emit(),
                        h && (this.reset(),
                        this.emit(),
                        l == null || l(this),
                        this.__preventNextScrollEvent = !0,
                        requestAnimationFrame( () => {
                            delete this.__preventNextScrollEvent
                        }
                        ))
                    }
                })
            }
        }
    }
    get rootElement() {
        return this.options.wrapper === window ? document.documentElement : this.options.wrapper
    }
    get limit() {
        return this.dimensions.limit[this.isHorizontal ? "x" : "y"]
    }
    get isHorizontal() {
        return this.options.orientation === "horizontal"
    }
    get actualScroll() {
        return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop
    }
    get scroll() {
        return this.options.infinite ? (e = this.animatedScroll,
        n = this.limit,
        (e % n + n) % n) : this.animatedScroll;
        var e, n
    }
    get progress() {
        return this.limit === 0 ? 1 : this.scroll / this.limit
    }
    get isSmooth() {
        return this.__isSmooth
    }
    set isSmooth(e) {
        this.__isSmooth !== e && (this.__isSmooth = e,
        this.toggleClass("lenis-smooth", e))
    }
    get isScrolling() {
        return this.__isScrolling
    }
    set isScrolling(e) {
        this.__isScrolling !== e && (this.__isScrolling = e,
        this.toggleClass("lenis-scrolling", e))
    }
    get isStopped() {
        return this.__isStopped
    }
    set isStopped(e) {
        this.__isStopped !== e && (this.__isStopped = e,
        this.toggleClass("lenis-stopped", e))
    }
    get isLocked() {
        return this.__isLocked
    }
    set isLocked(e) {
        this.__isLocked !== e && (this.__isLocked = e,
        this.toggleClass("lenis-locked", e))
    }
    get className() {
        let e = "lenis";
        return this.isStopped && (e += " lenis-stopped"),
        this.isLocked && (e += " lenis-locked"),
        this.isScrolling && (e += " lenis-scrolling"),
        this.isSmooth && (e += " lenis-smooth"),
        e
    }
    toggleClass(e, n) {
        this.rootElement.classList.toggle(e, n),
        this.emitter.emit("className change", this)
    }
}
const pb = At({
    name: "smoothScroll",
    async setup({callHook: t, hook: e}) {
        const n = new db({
            duration: .8,
            easing: i => 1 - Math.pow(1 - i, 4)
        })
          , r = i => {
            n.raf(i)
        }
          , s = ({scroll: i}) => {
            t("smoothScroll:scroll", {
                progress: i
            })
        }
        ;
        return e("window:raf", r),
        n.on("scroll", s),
        {
            provide: {
                smoothScroll: n
            }
        }
    }
})
  , _b = [x0, k0, jD, UD, zD, cv, dv, pv, mv, lb, ub, pb]
  , gb = ["innerHTML"]
  , kl = Je({
    __name: "nuxt-icon",
    props: {
        name: {},
        filled: {
            type: Boolean,
            default: !1
        }
    },
    async setup(t) {
        let e, n;
        const r = t
          , s = ae("");
        let i = !1;
        async function o() {
            try {
                const l = await Object.assign({
                    "/assets/icons/ArrowDown.svg": () => fe( () => import("./ArrowDown.Q0ow1Z9Z.js"), __vite__mapDeps([]), import.meta.url).then(u => u.default),
                    "/assets/icons/ArrowLeft.svg": () => fe( () => import("./ArrowLeft.jA-dhFhh.js"), __vite__mapDeps([]), import.meta.url).then(u => u.default),
                    "/assets/icons/ArrowRight.svg": () => fe( () => import("./ArrowRight.DhCbkTlG.js"), __vite__mapDeps([]), import.meta.url).then(u => u.default),
                    "/assets/icons/Burger.svg": () => fe( () => import("./Burger.H4FNvg8n.js"), __vite__mapDeps([]), import.meta.url).then(u => u.default),
                    "/assets/icons/Checkmark.svg": () => fe( () => import("./Checkmark.frXQa_nP.js"), __vite__mapDeps([]), import.meta.url).then(u => u.default),
                    "/assets/icons/Chevron.svg": () => fe( () => import("./Chevron.uli4ZrMR.js"), __vite__mapDeps([]), import.meta.url).then(u => u.default),
                    "/assets/icons/Close.svg": () => fe( () => import("./Close.i9BYJ7XJ.js"), __vite__mapDeps([]), import.meta.url).then(u => u.default),
                    "/assets/icons/Crosshair.svg": () => fe( () => import("./Crosshair.6yjmxHZs.js"), __vite__mapDeps([]), import.meta.url).then(u => u.default),
                    "/assets/icons/DoubleArrowDown.svg": () => fe( () => import("./DoubleArrowDown.uX6Y46dH.js"), __vite__mapDeps([]), import.meta.url).then(u => u.default),
                    "/assets/icons/DoubleArrowRight.svg": () => fe( () => import("./DoubleArrowRight.klS7I1nI.js"), __vite__mapDeps([]), import.meta.url).then(u => u.default),
                    "/assets/icons/Download.svg": () => fe( () => import("./Download.DI8YKCLe.js"), __vite__mapDeps([]), import.meta.url).then(u => u.default),
                    "/assets/icons/Logo.svg": () => fe( () => import("./Logo.Vk4czSey.js"), __vite__mapDeps([]), import.meta.url).then(u => u.default),
                    "/assets/icons/Minus.svg": () => fe( () => import("./Minus.1M1b04tl.js"), __vite__mapDeps([]), import.meta.url).then(u => u.default),
                    "/assets/icons/Pause.svg": () => fe( () => import("./Pause.4uoj_TaE.js"), __vite__mapDeps([]), import.meta.url).then(u => u.default),
                    "/assets/icons/Play.svg": () => fe( () => import("./Play.BvNof2x6.js"), __vite__mapDeps([]), import.meta.url).then(u => u.default),
                    "/assets/icons/Plus.svg": () => fe( () => import("./Plus.4lnAvnXY.js"), __vite__mapDeps([]), import.meta.url).then(u => u.default),
                    "/assets/icons/Slash.svg": () => fe( () => import("./Slash.xunOZJNK.js"), __vite__mapDeps([]), import.meta.url).then(u => u.default),
                    "/assets/icons/Trademark.svg": () => fe( () => import("./Trademark.PtL2wIHv.js"), __vite__mapDeps([]), import.meta.url).then(u => u.default),
                    "/assets/icons/DGM.svg": () => fe( () => import("./DGM.g9Zlzamm.js"), __vite__mapDeps([]), import.meta.url).then(u => u.default)
                })[`/assets/icons/${r.name}.svg`]();
                l.includes("stroke") && (i = !0),
                s.value = l
            } catch {
                console.error(`[nuxt-icons] Icon '${r.name}' doesn't exist in 'assets/icons'`)
            }
        }
        return [e,n] = xs( () => o()),
        await e,
        n(),
        Af(o),
        (a, l) => (Te(),
        _t("span", {
            class: rr(["nuxt-icon", {
                "nuxt-icon--fill": !a.filled,
                "nuxt-icon--stroke": q(i) && !a.filled
            }]),
            innerHTML: q(s)
        }, null, 10, gb))
    }
});
var hd = (t => (t[t.XSmall = 367] = "XSmall",
t[t.Small = 834] = "Small",
t[t.Medium = 1024] = "Medium",
t[t.Large = 1280] = "Large",
t[t.Xlarge = 1440] = "Xlarge",
t[t.XXLarge = 1680] = "XXLarge",
t))(hd || {})
  , ft = (t => (t.Early = "Early",
t.Mid = "Mid",
t.Late = "Late",
t))(ft || {})
  , Rl = (t => (t.Image = "Image",
t.Video = "Video",
t))(Rl || {})
  , Gn = (t => (t.CookiePolicy = "CookiePolicy",
t.Order = "Order",
t.TermsConditions = "TermsConditions",
t.TermsConditionsOverlay = "TermsConditionsOverlay",
t.Privacy = "Privacy",
t))(Gn || {})
  , tn = (t => (t.Ethos = "ethos",
t.Homepage = "homepage",
t.ProductListing = "products",
t.Products = "products-group",
t.Research = "research-group",
t.ResearchListing = "research",
t))(tn || {})
  , Ot = (t => (t.Black = "Black",
t.BurnedOrange = "BurnedOrange",
t.DarkGrey = "DarkGrey",
t.LightGrey = "LightGrey",
t.MidGrey = "MidGrey",
t.OffBlack = "OffBlack",
t.OffWhite = "OffWhite",
t.Orange = "Orange",
t.PaperGrey = "PaperGrey",
t.White = "White",
t))(Ot || {});
function Zt(t) {
    if (t === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t
}
function dd(t, e) {
    t.prototype = Object.create(e.prototype),
    t.prototype.constructor = t,
    t.__proto__ = e
}
/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var mt = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
        lineHeight: ""
    }
}, Hr = {
    duration: .5,
    overwrite: !1,
    delay: 0
}, Al, Ye, ke, Tt = 1e8, we = 1 / Tt, Aa = Math.PI * 2, mb = Aa / 4, yb = 0, pd = Math.sqrt, Db = Math.cos, vb = Math.sin, ze = function(e) {
    return typeof e == "string"
}, Pe = function(e) {
    return typeof e == "function"
}, an = function(e) {
    return typeof e == "number"
}, Fl = function(e) {
    return typeof e > "u"
}, Xt = function(e) {
    return typeof e == "object"
}, st = function(e) {
    return e !== !1
}, Pl = function() {
    return typeof window < "u"
}, ai = function(e) {
    return Pe(e) || ze(e)
}, _d = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {}
, Xe = Array.isArray, Fa = /(?:-?\.?\d|\.)+/gi, gd = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, Dr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Io = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, md = /[+-]=-?[.\d]+/, yd = /[^,'"\[\]\s]+/gi, bb = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, Re, Vt, Pa, Ol, yt = {}, Ni = {}, Dd, vd = function(e) {
    return (Ni = or(e, yt)) && ut
}, Ml = function(e, n) {
    return console.warn("Invalid property", e, "set to", n, "Missing plugin? gsap.registerPlugin()")
}, Fs = function(e, n) {
    return !n && console.warn(e)
}, bd = function(e, n) {
    return e && (yt[e] = n) && Ni && (Ni[e] = n) || yt
}, Ps = function() {
    return 0
}, Cb = {
    suppressEvents: !0,
    isStart: !0,
    kill: !1
}, di = {
    suppressEvents: !0,
    kill: !1
}, wb = {
    suppressEvents: !0
}, Ll = {}, kn = [], Oa = {}, Cd, dt = {}, $o = {}, Tc = 30, pi = [], Il = "", $l = function(e) {
    var n = e[0], r, s;
    if (Xt(n) || Pe(n) || (e = [e]),
    !(r = (n._gsap || {}).harness)) {
        for (s = pi.length; s-- && !pi[s].targetTest(n); )
            ;
        r = pi[s]
    }
    for (s = e.length; s--; )
        e[s] && (e[s]._gsap || (e[s]._gsap = new qd(e[s],r))) || e.splice(s, 1);
    return e
}, Zn = function(e) {
    return e._gsap || $l(xt(e))[0]._gsap
}, wd = function(e, n, r) {
    return (r = e[n]) && Pe(r) ? e[n]() : Fl(r) && e.getAttribute && e.getAttribute(n) || r
}, it = function(e, n) {
    return (e = e.split(",")).forEach(n) || e
}, Le = function(e) {
    return Math.round(e * 1e5) / 1e5 || 0
}, Ue = function(e) {
    return Math.round(e * 1e7) / 1e7 || 0
}, Rr = function(e, n) {
    var r = n.charAt(0)
      , s = parseFloat(n.substr(2));
    return e = parseFloat(e),
    r === "+" ? e + s : r === "-" ? e - s : r === "*" ? e * s : e / s
}, Eb = function(e, n) {
    for (var r = n.length, s = 0; e.indexOf(n[s]) < 0 && ++s < r; )
        ;
    return s < r
}, Bi = function() {
    var e = kn.length, n = kn.slice(0), r, s;
    for (Oa = {},
    kn.length = 0,
    r = 0; r < e; r++)
        s = n[r],
        s && s._lazy && (s.render(s._lazy[0], s._lazy[1], !0)._lazy = 0)
}, Ed = function(e, n, r, s) {
    kn.length && !Ye && Bi(),
    e.render(n, r, s || Ye && n < 0 && (e._initted || e._startAt)),
    kn.length && !Ye && Bi()
}, Td = function(e) {
    var n = parseFloat(e);
    return (n || n === 0) && (e + "").match(yd).length < 2 ? n : ze(e) ? e.trim() : e
}, xd = function(e) {
    return e
}, Rt = function(e, n) {
    for (var r in n)
        r in e || (e[r] = n[r]);
    return e
}, Tb = function(e) {
    return function(n, r) {
        for (var s in r)
            s in n || s === "duration" && e || s === "ease" || (n[s] = r[s])
    }
}, or = function(e, n) {
    for (var r in n)
        e[r] = n[r];
    return e
}, xc = function t(e, n) {
    for (var r in n)
        r !== "__proto__" && r !== "constructor" && r !== "prototype" && (e[r] = Xt(n[r]) ? t(e[r] || (e[r] = {}), n[r]) : n[r]);
    return e
}, Hi = function(e, n) {
    var r = {}, s;
    for (s in e)
        s in n || (r[s] = e[s]);
    return r
}, ys = function(e) {
    var n = e.parent || Re
      , r = e.keyframes ? Tb(Xe(e.keyframes)) : Rt;
    if (st(e.inherit))
        for (; n; )
            r(e, n.vars.defaults),
            n = n.parent || n._dp;
    return e
}, xb = function(e, n) {
    for (var r = e.length, s = r === n.length; s && r-- && e[r] === n[r]; )
        ;
    return r < 0
}, Sd = function(e, n, r, s, i) {
    r === void 0 && (r = "_first"),
    s === void 0 && (s = "_last");
    var o = e[s], a;
    if (i)
        for (a = n[i]; o && o[i] > a; )
            o = o._prev;
    return o ? (n._next = o._next,
    o._next = n) : (n._next = e[r],
    e[r] = n),
    n._next ? n._next._prev = n : e[s] = n,
    n._prev = o,
    n.parent = n._dp = e,
    n
}, ho = function(e, n, r, s) {
    r === void 0 && (r = "_first"),
    s === void 0 && (s = "_last");
    var i = n._prev
      , o = n._next;
    i ? i._next = o : e[r] === n && (e[r] = o),
    o ? o._prev = i : e[s] === n && (e[s] = i),
    n._next = n._prev = n.parent = null
}, On = function(e, n) {
    e.parent && (!n || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e),
    e._act = 0
}, er = function(e, n) {
    if (e && (!n || n._end > e._dur || n._start < 0))
        for (var r = e; r; )
            r._dirty = 1,
            r = r.parent;
    return e
}, Sb = function(e) {
    for (var n = e.parent; n && n.parent; )
        n._dirty = 1,
        n.totalDuration(),
        n = n.parent;
    return e
}, Ma = function(e, n, r, s) {
    return e._startAt && (Ye ? e._startAt.revert(di) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(n, !0, s))
}, kb = function t(e) {
    return !e || e._ts && t(e.parent)
}, Sc = function(e) {
    return e._repeat ? jr(e._tTime, e = e.duration() + e._rDelay) * e : 0
}, jr = function(e, n) {
    var r = Math.floor(e /= n);
    return e && r === e ? r - 1 : r
}, ji = function(e, n) {
    return (e - n._start) * n._ts + (n._ts >= 0 ? 0 : n._dirty ? n.totalDuration() : n._tDur)
}, po = function(e) {
    return e._end = Ue(e._start + (e._tDur / Math.abs(e._ts || e._rts || we) || 0))
}, _o = function(e, n) {
    var r = e._dp;
    return r && r.smoothChildTiming && e._ts && (e._start = Ue(r._time - (e._ts > 0 ? n / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - n) / -e._ts)),
    po(e),
    r._dirty || er(r, e)),
    e
}, kd = function(e, n) {
    var r;
    if ((n._time || !n._dur && n._initted || n._start < e._time && (n._dur || !n.add)) && (r = ji(e.rawTime(), n),
    (!n._dur || qs(0, n.totalDuration(), r) - n._tTime > we) && n.render(r, !0)),
    er(e, n)._dp && e._initted && e._time >= e._dur && e._ts) {
        if (e._dur < e.duration())
            for (r = e; r._dp; )
                r.rawTime() >= 0 && r.totalTime(r._tTime),
                r = r._dp;
        e._zTime = -we
    }
}, zt = function(e, n, r, s) {
    return n.parent && On(n),
    n._start = Ue((an(r) ? r : r || e !== Re ? bt(e, r, n) : e._time) + n._delay),
    n._end = Ue(n._start + (n.totalDuration() / Math.abs(n.timeScale()) || 0)),
    Sd(e, n, "_first", "_last", e._sort ? "_start" : 0),
    La(n) || (e._recent = n),
    s || kd(e, n),
    e._ts < 0 && _o(e, e._tTime),
    e
}, Rd = function(e, n) {
    return (yt.ScrollTrigger || Ml("scrollTrigger", n)) && yt.ScrollTrigger.create(n, e)
}, Ad = function(e, n, r, s, i) {
    if (Bl(e, n, i),
    !e._initted)
        return 1;
    if (!r && e._pt && !Ye && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && Cd !== pt.frame)
        return kn.push(e),
        e._lazy = [i, s],
        1
}, Rb = function t(e) {
    var n = e.parent;
    return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n))
}, La = function(e) {
    var n = e.data;
    return n === "isFromStart" || n === "isStart"
}, Ab = function(e, n, r, s) {
    var i = e.ratio, o = n < 0 || !n && (!e._start && Rb(e) && !(!e._initted && La(e)) || (e._ts < 0 || e._dp._ts < 0) && !La(e)) ? 0 : 1, a = e._rDelay, l = 0, u, c, f;
    if (a && e._repeat && (l = qs(0, e._tDur, n),
    c = jr(l, a),
    e._yoyo && c & 1 && (o = 1 - o),
    c !== jr(e._tTime, a) && (i = 1 - o,
    e.vars.repeatRefresh && e._initted && e.invalidate())),
    o !== i || Ye || s || e._zTime === we || !n && e._zTime) {
        if (!e._initted && Ad(e, n, s, r, l))
            return;
        for (f = e._zTime,
        e._zTime = n || (r ? we : 0),
        r || (r = n && !f),
        e.ratio = o,
        e._from && (o = 1 - o),
        e._time = 0,
        e._tTime = l,
        u = e._pt; u; )
            u.r(o, u.d),
            u = u._next;
        n < 0 && Ma(e, n, r, !0),
        e._onUpdate && !r && gt(e, "onUpdate"),
        l && e._repeat && !r && e.parent && gt(e, "onRepeat"),
        (n >= e._tDur || n < 0) && e.ratio === o && (o && On(e, 1),
        !r && !Ye && (gt(e, o ? "onComplete" : "onReverseComplete", !0),
        e._prom && e._prom()))
    } else
        e._zTime || (e._zTime = n)
}, Fb = function(e, n, r) {
    var s;
    if (r > n)
        for (s = e._first; s && s._start <= r; ) {
            if (s.data === "isPause" && s._start > n)
                return s;
            s = s._next
        }
    else
        for (s = e._last; s && s._start >= r; ) {
            if (s.data === "isPause" && s._start < n)
                return s;
            s = s._prev
        }
}, Vr = function(e, n, r, s) {
    var i = e._repeat
      , o = Ue(n) || 0
      , a = e._tTime / e._tDur;
    return a && !s && (e._time *= o / e._dur),
    e._dur = o,
    e._tDur = i ? i < 0 ? 1e10 : Ue(o * (i + 1) + e._rDelay * i) : o,
    a > 0 && !s && _o(e, e._tTime = e._tDur * a),
    e.parent && po(e),
    r || er(e.parent, e),
    e
}, kc = function(e) {
    return e instanceof Ze ? er(e) : Vr(e, e._dur)
}, Pb = {
    _start: 0,
    endTime: Ps,
    totalDuration: Ps
}, bt = function t(e, n, r) {
    var s = e.labels, i = e._recent || Pb, o = e.duration() >= Tt ? i.endTime(!1) : e._dur, a, l, u;
    return ze(n) && (isNaN(n) || n in s) ? (l = n.charAt(0),
    u = n.substr(-1) === "%",
    a = n.indexOf("="),
    l === "<" || l === ">" ? (a >= 0 && (n = n.replace(/=/, "")),
    (l === "<" ? i._start : i.endTime(i._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) * (u ? (a < 0 ? i : r).totalDuration() / 100 : 1)) : a < 0 ? (n in s || (s[n] = o),
    s[n]) : (l = parseFloat(n.charAt(a - 1) + n.substr(a + 1)),
    u && r && (l = l / 100 * (Xe(r) ? r[0] : r).totalDuration()),
    a > 1 ? t(e, n.substr(0, a - 1), r) + l : o + l)) : n == null ? o : +n
}, Ds = function(e, n, r) {
    var s = an(n[1]), i = (s ? 2 : 1) + (e < 2 ? 0 : 1), o = n[i], a, l;
    if (s && (o.duration = n[1]),
    o.parent = r,
    e) {
        for (a = o,
        l = r; l && !("immediateRender"in a); )
            a = l.vars.defaults || {},
            l = st(l.vars.inherit) && l.parent;
        o.immediateRender = st(a.immediateRender),
        e < 2 ? o.runBackwards = 1 : o.startAt = n[i - 1]
    }
    return new Ie(n[0],o,n[i + 1])
}, $n = function(e, n) {
    return e || e === 0 ? n(e) : n
}, qs = function(e, n, r) {
    return r < e ? e : r > n ? n : r
}, Ge = function(e, n) {
    return !ze(e) || !(n = bb.exec(e)) ? "" : n[1]
}, Ob = function(e, n, r) {
    return $n(r, function(s) {
        return qs(e, n, s)
    })
}, Ia = [].slice, Fd = function(e, n) {
    return e && Xt(e) && "length"in e && (!n && !e.length || e.length - 1 in e && Xt(e[0])) && !e.nodeType && e !== Vt
}, Mb = function(e, n, r) {
    return r === void 0 && (r = []),
    e.forEach(function(s) {
        var i;
        return ze(s) && !n || Fd(s, 1) ? (i = r).push.apply(i, xt(s)) : r.push(s)
    }) || r
}, xt = function(e, n, r) {
    return ke && !n && ke.selector ? ke.selector(e) : ze(e) && !r && (Pa || !Ur()) ? Ia.call((n || Ol).querySelectorAll(e), 0) : Xe(e) ? Mb(e, r) : Fd(e) ? Ia.call(e, 0) : e ? [e] : []
}, $a = function(e) {
    return e = xt(e)[0] || Fs("Invalid scope") || {},
    function(n) {
        var r = e.current || e.nativeElement || e;
        return xt(n, r.querySelectorAll ? r : r === e ? Fs("Invalid scope") || Ol.createElement("div") : e)
    }
}, Pd = function(e) {
    return e.sort(function() {
        return .5 - Math.random()
    })
}, Od = function(e) {
    if (Pe(e))
        return e;
    var n = Xt(e) ? e : {
        each: e
    }
      , r = tr(n.ease)
      , s = n.from || 0
      , i = parseFloat(n.base) || 0
      , o = {}
      , a = s > 0 && s < 1
      , l = isNaN(s) || a
      , u = n.axis
      , c = s
      , f = s;
    return ze(s) ? c = f = {
        center: .5,
        edges: .5,
        end: 1
    }[s] || 0 : !a && l && (c = s[0],
    f = s[1]),
    function(h, d, _) {
        var p = (_ || n).length, m = o[p], v, D, g, y, C, E, S, T, x;
        if (!m) {
            if (x = n.grid === "auto" ? 0 : (n.grid || [1, Tt])[1],
            !x) {
                for (S = -Tt; S < (S = _[x++].getBoundingClientRect().left) && x < p; )
                    ;
                x < p && x--
            }
            for (m = o[p] = [],
            v = l ? Math.min(x, p) * c - .5 : s % x,
            D = x === Tt ? 0 : l ? p * f / x - .5 : s / x | 0,
            S = 0,
            T = Tt,
            E = 0; E < p; E++)
                g = E % x - v,
                y = D - (E / x | 0),
                m[E] = C = u ? Math.abs(u === "y" ? y : g) : pd(g * g + y * y),
                C > S && (S = C),
                C < T && (T = C);
            s === "random" && Pd(m),
            m.max = S - T,
            m.min = T,
            m.v = p = (parseFloat(n.amount) || parseFloat(n.each) * (x > p ? p - 1 : u ? u === "y" ? p / x : x : Math.max(x, p / x)) || 0) * (s === "edges" ? -1 : 1),
            m.b = p < 0 ? i - p : i,
            m.u = Ge(n.amount || n.each) || 0,
            r = r && p < 0 ? Ud(r) : r
        }
        return p = (m[h] - m.min) / m.max || 0,
        Ue(m.b + (r ? r(p) : p) * m.v) + m.u
    }
}, Na = function(e) {
    var n = Math.pow(10, ((e + "").split(".")[1] || "").length);
    return function(r) {
        var s = Ue(Math.round(parseFloat(r) / e) * e * n);
        return (s - s % 1) / n + (an(r) ? 0 : Ge(r))
    }
}, Md = function(e, n) {
    var r = Xe(e), s, i;
    return !r && Xt(e) && (s = r = e.radius || Tt,
    e.values ? (e = xt(e.values),
    (i = !an(e[0])) && (s *= s)) : e = Na(e.increment)),
    $n(n, r ? Pe(e) ? function(o) {
        return i = e(o),
        Math.abs(i - o) <= s ? i : o
    }
    : function(o) {
        for (var a = parseFloat(i ? o.x : o), l = parseFloat(i ? o.y : 0), u = Tt, c = 0, f = e.length, h, d; f--; )
            i ? (h = e[f].x - a,
            d = e[f].y - l,
            h = h * h + d * d) : h = Math.abs(e[f] - a),
            h < u && (u = h,
            c = f);
        return c = !s || u <= s ? e[c] : o,
        i || c === o || an(o) ? c : c + Ge(o)
    }
    : Na(e))
}, Ld = function(e, n, r, s) {
    return $n(Xe(e) ? !n : r === !0 ? !!(r = 0) : !s, function() {
        return Xe(e) ? e[~~(Math.random() * e.length)] : (r = r || 1e-5) && (s = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((e - r / 2 + Math.random() * (n - e + r * .99)) / r) * r * s) / s
    })
}, Lb = function() {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
        n[r] = arguments[r];
    return function(s) {
        return n.reduce(function(i, o) {
            return o(i)
        }, s)
    }
}, Ib = function(e, n) {
    return function(r) {
        return e(parseFloat(r)) + (n || Ge(r))
    }
}, $b = function(e, n, r) {
    return $d(e, n, 0, 1, r)
}, Id = function(e, n, r) {
    return $n(r, function(s) {
        return e[~~n(s)]
    })
}, Nb = function t(e, n, r) {
    var s = n - e;
    return Xe(e) ? Id(e, t(0, e.length), n) : $n(r, function(i) {
        return (s + (i - e) % s) % s + e
    })
}, Bb = function t(e, n, r) {
    var s = n - e
      , i = s * 2;
    return Xe(e) ? Id(e, t(0, e.length - 1), n) : $n(r, function(o) {
        return o = (i + (o - e) % i) % i || 0,
        e + (o > s ? i - o : o)
    })
}, Os = function(e) {
    for (var n = 0, r = "", s, i, o, a; ~(s = e.indexOf("random(", n)); )
        o = e.indexOf(")", s),
        a = e.charAt(s + 7) === "[",
        i = e.substr(s + 7, o - s - 7).match(a ? yd : Fa),
        r += e.substr(n, s - n) + Ld(a ? i : +i[0], a ? 0 : +i[1], +i[2] || 1e-5),
        n = o + 1;
    return r + e.substr(n, e.length - n)
}, $d = function(e, n, r, s, i) {
    var o = n - e
      , a = s - r;
    return $n(i, function(l) {
        return r + ((l - e) / o * a || 0)
    })
}, Hb = function t(e, n, r, s) {
    var i = isNaN(e + n) ? 0 : function(d) {
        return (1 - d) * e + d * n
    }
    ;
    if (!i) {
        var o = ze(e), a = {}, l, u, c, f, h;
        if (r === !0 && (s = 1) && (r = null),
        o)
            e = {
                p: e
            },
            n = {
                p: n
            };
        else if (Xe(e) && !Xe(n)) {
            for (c = [],
            f = e.length,
            h = f - 2,
            u = 1; u < f; u++)
                c.push(t(e[u - 1], e[u]));
            f--,
            i = function(_) {
                _ *= f;
                var p = Math.min(h, ~~_);
                return c[p](_ - p)
            }
            ,
            r = n
        } else
            s || (e = or(Xe(e) ? [] : {}, e));
        if (!c) {
            for (l in n)
                Nl.call(a, e, l, "get", n[l]);
            i = function(_) {
                return Vl(_, a) || (o ? e.p : e)
            }
        }
    }
    return $n(r, i)
}, Rc = function(e, n, r) {
    var s = e.labels, i = Tt, o, a, l;
    for (o in s)
        a = s[o] - n,
        a < 0 == !!r && a && i > (a = Math.abs(a)) && (l = o,
        i = a);
    return l
}, gt = function(e, n, r) {
    var s = e.vars, i = s[n], o = ke, a = e._ctx, l, u, c;
    if (i)
        return l = s[n + "Params"],
        u = s.callbackScope || e,
        r && kn.length && Bi(),
        a && (ke = a),
        c = l ? i.apply(u, l) : i.call(u),
        ke = o,
        c
}, os = function(e) {
    return On(e),
    e.scrollTrigger && e.scrollTrigger.kill(!!Ye),
    e.progress() < 1 && gt(e, "onInterrupt"),
    e
}, vr, Nd = [], Bd = function(e) {
    if (e)
        if (e = !e.name && e.default || e,
        Pl() || e.headless) {
            var n = e.name
              , r = Pe(e)
              , s = n && !r && e.init ? function() {
                this._props = []
            }
            : e
              , i = {
                init: Ps,
                render: Vl,
                add: Nl,
                kill: nC,
                modifier: tC,
                rawVars: 0
            }
              , o = {
                targetTest: 0,
                get: 0,
                getSetter: jl,
                aliases: {},
                register: 0
            };
            if (Ur(),
            e !== s) {
                if (dt[n])
                    return;
                Rt(s, Rt(Hi(e, i), o)),
                or(s.prototype, or(i, Hi(e, o))),
                dt[s.prop = n] = s,
                e.targetTest && (pi.push(s),
                Ll[n] = 1),
                n = (n === "css" ? "CSS" : n.charAt(0).toUpperCase() + n.substr(1)) + "Plugin"
            }
            bd(n, s),
            e.register && e.register(ut, s, ot)
        } else
            Nd.push(e)
}, De = 255, as = {
    aqua: [0, De, De],
    lime: [0, De, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, De],
    navy: [0, 0, 128],
    white: [De, De, De],
    olive: [128, 128, 0],
    yellow: [De, De, 0],
    orange: [De, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [De, 0, 0],
    pink: [De, 192, 203],
    cyan: [0, De, De],
    transparent: [De, De, De, 0]
}, No = function(e, n, r) {
    return e += e < 0 ? 1 : e > 1 ? -1 : 0,
    (e * 6 < 1 ? n + (r - n) * e * 6 : e < .5 ? r : e * 3 < 2 ? n + (r - n) * (2 / 3 - e) * 6 : n) * De + .5 | 0
}, Hd = function(e, n, r) {
    var s = e ? an(e) ? [e >> 16, e >> 8 & De, e & De] : 0 : as.black, i, o, a, l, u, c, f, h, d, _;
    if (!s) {
        if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)),
        as[e])
            s = as[e];
        else if (e.charAt(0) === "#") {
            if (e.length < 6 && (i = e.charAt(1),
            o = e.charAt(2),
            a = e.charAt(3),
            e = "#" + i + i + o + o + a + a + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")),
            e.length === 9)
                return s = parseInt(e.substr(1, 6), 16),
                [s >> 16, s >> 8 & De, s & De, parseInt(e.substr(7), 16) / 255];
            e = parseInt(e.substr(1), 16),
            s = [e >> 16, e >> 8 & De, e & De]
        } else if (e.substr(0, 3) === "hsl") {
            if (s = _ = e.match(Fa),
            !n)
                l = +s[0] % 360 / 360,
                u = +s[1] / 100,
                c = +s[2] / 100,
                o = c <= .5 ? c * (u + 1) : c + u - c * u,
                i = c * 2 - o,
                s.length > 3 && (s[3] *= 1),
                s[0] = No(l + 1 / 3, i, o),
                s[1] = No(l, i, o),
                s[2] = No(l - 1 / 3, i, o);
            else if (~e.indexOf("="))
                return s = e.match(gd),
                r && s.length < 4 && (s[3] = 1),
                s
        } else
            s = e.match(Fa) || as.transparent;
        s = s.map(Number)
    }
    return n && !_ && (i = s[0] / De,
    o = s[1] / De,
    a = s[2] / De,
    f = Math.max(i, o, a),
    h = Math.min(i, o, a),
    c = (f + h) / 2,
    f === h ? l = u = 0 : (d = f - h,
    u = c > .5 ? d / (2 - f - h) : d / (f + h),
    l = f === i ? (o - a) / d + (o < a ? 6 : 0) : f === o ? (a - i) / d + 2 : (i - o) / d + 4,
    l *= 60),
    s[0] = ~~(l + .5),
    s[1] = ~~(u * 100 + .5),
    s[2] = ~~(c * 100 + .5)),
    r && s.length < 4 && (s[3] = 1),
    s
}, jd = function(e) {
    var n = []
      , r = []
      , s = -1;
    return e.split(Rn).forEach(function(i) {
        var o = i.match(Dr) || [];
        n.push.apply(n, o),
        r.push(s += o.length + 1)
    }),
    n.c = r,
    n
}, Ac = function(e, n, r) {
    var s = "", i = (e + s).match(Rn), o = n ? "hsla(" : "rgba(", a = 0, l, u, c, f;
    if (!i)
        return e;
    if (i = i.map(function(h) {
        return (h = Hd(h, n, 1)) && o + (n ? h[0] + "," + h[1] + "%," + h[2] + "%," + h[3] : h.join(",")) + ")"
    }),
    r && (c = jd(e),
    l = r.c,
    l.join(s) !== c.c.join(s)))
        for (u = e.replace(Rn, "1").split(Dr),
        f = u.length - 1; a < f; a++)
            s += u[a] + (~l.indexOf(a) ? i.shift() || o + "0,0,0,0)" : (c.length ? c : i.length ? i : r).shift());
    if (!u)
        for (u = e.split(Rn),
        f = u.length - 1; a < f; a++)
            s += u[a] + i[a];
    return s + u[f]
}, Rn = function() {
    var t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
    for (e in as)
        t += "|" + e + "\\b";
    return new RegExp(t + ")","gi")
}(), jb = /hsl[a]?\(/, Vd = function(e) {
    var n = e.join(" "), r;
    if (Rn.lastIndex = 0,
    Rn.test(n))
        return r = jb.test(n),
        e[1] = Ac(e[1], r),
        e[0] = Ac(e[0], r, jd(e[1])),
        !0
}, Ms, pt = function() {
    var t = Date.now, e = 500, n = 33, r = t(), s = r, i = 1e3 / 240, o = i, a = [], l, u, c, f, h, d, _ = function p(m) {
        var v = t() - s, D = m === !0, g, y, C, E;
        if ((v > e || v < 0) && (r += v - n),
        s += v,
        C = s - r,
        g = C - o,
        (g > 0 || D) && (E = ++f.frame,
        h = C - f.time * 1e3,
        f.time = C = C / 1e3,
        o += g + (g >= i ? 4 : i - g),
        y = 1),
        D || (l = u(p)),
        y)
            for (d = 0; d < a.length; d++)
                a[d](C, h, E, m)
    };
    return f = {
        time: 0,
        frame: 0,
        tick: function() {
            _(!0)
        },
        deltaRatio: function(m) {
            return h / (1e3 / (m || 60))
        },
        wake: function() {
            Dd && (!Pa && Pl() && (Vt = Pa = window,
            Ol = Vt.document || {},
            yt.gsap = ut,
            (Vt.gsapVersions || (Vt.gsapVersions = [])).push(ut.version),
            vd(Ni || Vt.GreenSockGlobals || !Vt.gsap && Vt || {}),
            Nd.forEach(Bd)),
            c = typeof requestAnimationFrame < "u" && requestAnimationFrame,
            l && f.sleep(),
            u = c || function(m) {
                return setTimeout(m, o - f.time * 1e3 + 1 | 0)
            }
            ,
            Ms = 1,
            _(2))
        },
        sleep: function() {
            (c ? cancelAnimationFrame : clearTimeout)(l),
            Ms = 0,
            u = Ps
        },
        lagSmoothing: function(m, v) {
            e = m || 1 / 0,
            n = Math.min(v || 33, e)
        },
        fps: function(m) {
            i = 1e3 / (m || 240),
            o = f.time * 1e3 + i
        },
        add: function(m, v, D) {
            var g = v ? function(y, C, E, S) {
                m(y, C, E, S),
                f.remove(g)
            }
            : m;
            return f.remove(m),
            a[D ? "unshift" : "push"](g),
            Ur(),
            g
        },
        remove: function(m, v) {
            ~(v = a.indexOf(m)) && a.splice(v, 1) && d >= v && d--
        },
        _listeners: a
    },
    f
}(), Ur = function() {
    return !Ms && pt.wake()
}, le = {}, Vb = /^[\d.\-M][\d.\-,\s]/, Ub = /["']/g, zb = function(e) {
    for (var n = {}, r = e.substr(1, e.length - 3).split(":"), s = r[0], i = 1, o = r.length, a, l, u; i < o; i++)
        l = r[i],
        a = i !== o - 1 ? l.lastIndexOf(",") : l.length,
        u = l.substr(0, a),
        n[s] = isNaN(u) ? u.replace(Ub, "").trim() : +u,
        s = l.substr(a + 1).trim();
    return n
}, Wb = function(e) {
    var n = e.indexOf("(") + 1
      , r = e.indexOf(")")
      , s = e.indexOf("(", n);
    return e.substring(n, ~s && s < r ? e.indexOf(")", r + 1) : r)
}, qb = function(e) {
    var n = (e + "").split("(")
      , r = le[n[0]];
    return r && n.length > 1 && r.config ? r.config.apply(null, ~e.indexOf("{") ? [zb(n[1])] : Wb(e).split(",").map(Td)) : le._CE && Vb.test(e) ? le._CE("", e) : r
}, Ud = function(e) {
    return function(n) {
        return 1 - e(1 - n)
    }
}, zd = function t(e, n) {
    for (var r = e._first, s; r; )
        r instanceof Ze ? t(r, n) : r.vars.yoyoEase && (!r._yoyo || !r._repeat) && r._yoyo !== n && (r.timeline ? t(r.timeline, n) : (s = r._ease,
        r._ease = r._yEase,
        r._yEase = s,
        r._yoyo = n)),
        r = r._next
}, tr = function(e, n) {
    return e && (Pe(e) ? e : le[e] || qb(e)) || n
}, hr = function(e, n, r, s) {
    r === void 0 && (r = function(l) {
        return 1 - n(1 - l)
    }
    ),
    s === void 0 && (s = function(l) {
        return l < .5 ? n(l * 2) / 2 : 1 - n((1 - l) * 2) / 2
    }
    );
    var i = {
        easeIn: n,
        easeOut: r,
        easeInOut: s
    }, o;
    return it(e, function(a) {
        le[a] = yt[a] = i,
        le[o = a.toLowerCase()] = r;
        for (var l in i)
            le[o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = le[a + "." + l] = i[l]
    }),
    i
}, Wd = function(e) {
    return function(n) {
        return n < .5 ? (1 - e(1 - n * 2)) / 2 : .5 + e((n - .5) * 2) / 2
    }
}, Bo = function t(e, n, r) {
    var s = n >= 1 ? n : 1
      , i = (r || (e ? .3 : .45)) / (n < 1 ? n : 1)
      , o = i / Aa * (Math.asin(1 / s) || 0)
      , a = function(c) {
        return c === 1 ? 1 : s * Math.pow(2, -10 * c) * vb((c - o) * i) + 1
    }
      , l = e === "out" ? a : e === "in" ? function(u) {
        return 1 - a(1 - u)
    }
    : Wd(a);
    return i = Aa / i,
    l.config = function(u, c) {
        return t(e, u, c)
    }
    ,
    l
}, Ho = function t(e, n) {
    n === void 0 && (n = 1.70158);
    var r = function(o) {
        return o ? --o * o * ((n + 1) * o + n) + 1 : 0
    }
      , s = e === "out" ? r : e === "in" ? function(i) {
        return 1 - r(1 - i)
    }
    : Wd(r);
    return s.config = function(i) {
        return t(e, i)
    }
    ,
    s
};
it("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
    var n = e < 5 ? e + 1 : e;
    hr(t + ",Power" + (n - 1), e ? function(r) {
        return Math.pow(r, n)
    }
    : function(r) {
        return r
    }
    , function(r) {
        return 1 - Math.pow(1 - r, n)
    }, function(r) {
        return r < .5 ? Math.pow(r * 2, n) / 2 : 1 - Math.pow((1 - r) * 2, n) / 2
    })
});
le.Linear.easeNone = le.none = le.Linear.easeIn;
hr("Elastic", Bo("in"), Bo("out"), Bo());
(function(t, e) {
    var n = 1 / e
      , r = 2 * n
      , s = 2.5 * n
      , i = function(a) {
        return a < n ? t * a * a : a < r ? t * Math.pow(a - 1.5 / e, 2) + .75 : a < s ? t * (a -= 2.25 / e) * a + .9375 : t * Math.pow(a - 2.625 / e, 2) + .984375
    };
    hr("Bounce", function(o) {
        return 1 - i(1 - o)
    }, i)
}
)(7.5625, 2.75);
hr("Expo", function(t) {
    return t ? Math.pow(2, 10 * (t - 1)) : 0
});
hr("Circ", function(t) {
    return -(pd(1 - t * t) - 1)
});
hr("Sine", function(t) {
    return t === 1 ? 1 : -Db(t * mb) + 1
});
hr("Back", Ho("in"), Ho("out"), Ho());
le.SteppedEase = le.steps = yt.SteppedEase = {
    config: function(e, n) {
        e === void 0 && (e = 1);
        var r = 1 / e
          , s = e + (n ? 0 : 1)
          , i = n ? 1 : 0
          , o = 1 - we;
        return function(a) {
            return ((s * qs(0, o, a) | 0) + i) * r
        }
    }
};
Hr.ease = le["quad.out"];
it("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
    return Il += t + "," + t + "Params,"
});
var qd = function(e, n) {
    this.id = yb++,
    e._gsap = this,
    this.target = e,
    this.harness = n,
    this.get = n ? n.get : wd,
    this.set = n ? n.getSetter : jl
}
  , Ls = function() {
    function t(n) {
        this.vars = n,
        this._delay = +n.delay || 0,
        (this._repeat = n.repeat === 1 / 0 ? -2 : n.repeat || 0) && (this._rDelay = n.repeatDelay || 0,
        this._yoyo = !!n.yoyo || !!n.yoyoEase),
        this._ts = 1,
        Vr(this, +n.duration, 1, 1),
        this.data = n.data,
        ke && (this._ctx = ke,
        ke.data.push(this)),
        Ms || pt.wake()
    }
    var e = t.prototype;
    return e.delay = function(r) {
        return r || r === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + r - this._delay),
        this._delay = r,
        this) : this._delay
    }
    ,
    e.duration = function(r) {
        return arguments.length ? this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r) : this.totalDuration() && this._dur
    }
    ,
    e.totalDuration = function(r) {
        return arguments.length ? (this._dirty = 0,
        Vr(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
    }
    ,
    e.totalTime = function(r, s) {
        if (Ur(),
        !arguments.length)
            return this._tTime;
        var i = this._dp;
        if (i && i.smoothChildTiming && this._ts) {
            for (_o(this, r),
            !i._dp || i.parent || kd(i, this); i && i.parent; )
                i.parent._time !== i._start + (i._ts >= 0 ? i._tTime / i._ts : (i.totalDuration() - i._tTime) / -i._ts) && i.totalTime(i._tTime, !0),
                i = i.parent;
            !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && r < this._tDur || this._ts < 0 && r > 0 || !this._tDur && !r) && zt(this._dp, this, this._start - this._delay)
        }
        return (this._tTime !== r || !this._dur && !s || this._initted && Math.abs(this._zTime) === we || !r && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = r),
        Ed(this, r, s)),
        this
    }
    ,
    e.time = function(r, s) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), r + Sc(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), s) : this._time
    }
    ,
    e.totalProgress = function(r, s) {
        return arguments.length ? this.totalTime(this.totalDuration() * r, s) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0
    }
    ,
    e.progress = function(r, s) {
        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + Sc(this), s) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0
    }
    ,
    e.iteration = function(r, s) {
        var i = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (r - 1) * i, s) : this._repeat ? jr(this._tTime, i) + 1 : 1
    }
    ,
    e.timeScale = function(r, s) {
        if (!arguments.length)
            return this._rts === -we ? 0 : this._rts;
        if (this._rts === r)
            return this;
        var i = this.parent && this._ts ? ji(this.parent._time, this) : this._tTime;
        return this._rts = +r || 0,
        this._ts = this._ps || r === -we ? 0 : this._rts,
        this.totalTime(qs(-Math.abs(this._delay), this._tDur, i), s !== !1),
        po(this),
        Sb(this)
    }
    ,
    e.paused = function(r) {
        return arguments.length ? (this._ps !== r && (this._ps = r,
        r ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
        this._ts = this._act = 0) : (Ur(),
        this._ts = this._rts,
        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== we && (this._tTime -= we)))),
        this) : this._ps
    }
    ,
    e.startTime = function(r) {
        if (arguments.length) {
            this._start = r;
            var s = this.parent || this._dp;
            return s && (s._sort || !this.parent) && zt(s, this, r - this._delay),
            this
        }
        return this._start
    }
    ,
    e.endTime = function(r) {
        return this._start + (st(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
    }
    ,
    e.rawTime = function(r) {
        var s = this.parent || this._dp;
        return s ? r && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? ji(s.rawTime(r), this) : this._tTime : this._tTime
    }
    ,
    e.revert = function(r) {
        r === void 0 && (r = wb);
        var s = Ye;
        return Ye = r,
        (this._initted || this._startAt) && (this.timeline && this.timeline.revert(r),
        this.totalTime(-.01, r.suppressEvents)),
        this.data !== "nested" && r.kill !== !1 && this.kill(),
        Ye = s,
        this
    }
    ,
    e.globalTime = function(r) {
        for (var s = this, i = arguments.length ? r : s.rawTime(); s; )
            i = s._start + i / (Math.abs(s._ts) || 1),
            s = s._dp;
        return !this.parent && this._sat ? this._sat.globalTime(r) : i
    }
    ,
    e.repeat = function(r) {
        return arguments.length ? (this._repeat = r === 1 / 0 ? -2 : r,
        kc(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
    }
    ,
    e.repeatDelay = function(r) {
        if (arguments.length) {
            var s = this._time;
            return this._rDelay = r,
            kc(this),
            s ? this.time(s) : this
        }
        return this._rDelay
    }
    ,
    e.yoyo = function(r) {
        return arguments.length ? (this._yoyo = r,
        this) : this._yoyo
    }
    ,
    e.seek = function(r, s) {
        return this.totalTime(bt(this, r), st(s))
    }
    ,
    e.restart = function(r, s) {
        return this.play().totalTime(r ? -this._delay : 0, st(s))
    }
    ,
    e.play = function(r, s) {
        return r != null && this.seek(r, s),
        this.reversed(!1).paused(!1)
    }
    ,
    e.reverse = function(r, s) {
        return r != null && this.seek(r || this.totalDuration(), s),
        this.reversed(!0).paused(!1)
    }
    ,
    e.pause = function(r, s) {
        return r != null && this.seek(r, s),
        this.paused(!0)
    }
    ,
    e.resume = function() {
        return this.paused(!1)
    }
    ,
    e.reversed = function(r) {
        return arguments.length ? (!!r !== this.reversed() && this.timeScale(-this._rts || (r ? -we : 0)),
        this) : this._rts < 0
    }
    ,
    e.invalidate = function() {
        return this._initted = this._act = 0,
        this._zTime = -we,
        this
    }
    ,
    e.isActive = function() {
        var r = this.parent || this._dp, s = this._start, i;
        return !!(!r || this._ts && this._initted && r.isActive() && (i = r.rawTime(!0)) >= s && i < this.endTime(!0) - we)
    }
    ,
    e.eventCallback = function(r, s, i) {
        var o = this.vars;
        return arguments.length > 1 ? (s ? (o[r] = s,
        i && (o[r + "Params"] = i),
        r === "onUpdate" && (this._onUpdate = s)) : delete o[r],
        this) : o[r]
    }
    ,
    e.then = function(r) {
        var s = this;
        return new Promise(function(i) {
            var o = Pe(r) ? r : xd
              , a = function() {
                var u = s.then;
                s.then = null,
                Pe(o) && (o = o(s)) && (o.then || o === s) && (s.then = u),
                i(o),
                s.then = u
            };
            s._initted && s.totalProgress() === 1 && s._ts >= 0 || !s._tTime && s._ts < 0 ? a() : s._prom = a
        }
        )
    }
    ,
    e.kill = function() {
        os(this)
    }
    ,
    t
}();
Rt(Ls.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -we,
    _prom: 0,
    _ps: !1,
    _rts: 1
});
var Ze = function(t) {
    dd(e, t);
    function e(r, s) {
        var i;
        return r === void 0 && (r = {}),
        i = t.call(this, r) || this,
        i.labels = {},
        i.smoothChildTiming = !!r.smoothChildTiming,
        i.autoRemoveChildren = !!r.autoRemoveChildren,
        i._sort = st(r.sortChildren),
        Re && zt(r.parent || Re, Zt(i), s),
        r.reversed && i.reverse(),
        r.paused && i.paused(!0),
        r.scrollTrigger && Rd(Zt(i), r.scrollTrigger),
        i
    }
    var n = e.prototype;
    return n.to = function(s, i, o) {
        return Ds(0, arguments, this),
        this
    }
    ,
    n.from = function(s, i, o) {
        return Ds(1, arguments, this),
        this
    }
    ,
    n.fromTo = function(s, i, o, a) {
        return Ds(2, arguments, this),
        this
    }
    ,
    n.set = function(s, i, o) {
        return i.duration = 0,
        i.parent = this,
        ys(i).repeatDelay || (i.repeat = 0),
        i.immediateRender = !!i.immediateRender,
        new Ie(s,i,bt(this, o),1),
        this
    }
    ,
    n.call = function(s, i, o) {
        return zt(this, Ie.delayedCall(0, s, i), o)
    }
    ,
    n.staggerTo = function(s, i, o, a, l, u, c) {
        return o.duration = i,
        o.stagger = o.stagger || a,
        o.onComplete = u,
        o.onCompleteParams = c,
        o.parent = this,
        new Ie(s,o,bt(this, l)),
        this
    }
    ,
    n.staggerFrom = function(s, i, o, a, l, u, c) {
        return o.runBackwards = 1,
        ys(o).immediateRender = st(o.immediateRender),
        this.staggerTo(s, i, o, a, l, u, c)
    }
    ,
    n.staggerFromTo = function(s, i, o, a, l, u, c, f) {
        return a.startAt = o,
        ys(a).immediateRender = st(a.immediateRender),
        this.staggerTo(s, i, a, l, u, c, f)
    }
    ,
    n.render = function(s, i, o) {
        var a = this._time, l = this._dirty ? this.totalDuration() : this._tDur, u = this._dur, c = s <= 0 ? 0 : Ue(s), f = this._zTime < 0 != s < 0 && (this._initted || !u), h, d, _, p, m, v, D, g, y, C, E, S;
        if (this !== Re && c > l && s >= 0 && (c = l),
        c !== this._tTime || o || f) {
            if (a !== this._time && u && (c += this._time - a,
            s += this._time - a),
            h = c,
            y = this._start,
            g = this._ts,
            v = !g,
            f && (u || (a = this._zTime),
            (s || !i) && (this._zTime = s)),
            this._repeat) {
                if (E = this._yoyo,
                m = u + this._rDelay,
                this._repeat < -1 && s < 0)
                    return this.totalTime(m * 100 + s, i, o);
                if (h = Ue(c % m),
                c === l ? (p = this._repeat,
                h = u) : (p = ~~(c / m),
                p && p === c / m && (h = u,
                p--),
                h > u && (h = u)),
                C = jr(this._tTime, m),
                !a && this._tTime && C !== p && this._tTime - C * m - this._dur <= 0 && (C = p),
                E && p & 1 && (h = u - h,
                S = 1),
                p !== C && !this._lock) {
                    var T = E && C & 1
                      , x = T === (E && p & 1);
                    if (p < C && (T = !T),
                    a = T ? 0 : c % u ? u : c,
                    this._lock = 1,
                    this.render(a || (S ? 0 : Ue(p * m)), i, !u)._lock = 0,
                    this._tTime = c,
                    !i && this.parent && gt(this, "onRepeat"),
                    this.vars.repeatRefresh && !S && (this.invalidate()._lock = 1),
                    a && a !== this._time || v !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
                        return this;
                    if (u = this._dur,
                    l = this._tDur,
                    x && (this._lock = 2,
                    a = T ? u : -1e-4,
                    this.render(a, !0),
                    this.vars.repeatRefresh && !S && this.invalidate()),
                    this._lock = 0,
                    !this._ts && !v)
                        return this;
                    zd(this, S)
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (D = Fb(this, Ue(a), Ue(h)),
            D && (c -= h - (h = D._start))),
            this._tTime = c,
            this._time = h,
            this._act = !g,
            this._initted || (this._onUpdate = this.vars.onUpdate,
            this._initted = 1,
            this._zTime = s,
            a = 0),
            !a && h && !i && !p && (gt(this, "onStart"),
            this._tTime !== c))
                return this;
            if (h >= a && s >= 0)
                for (d = this._first; d; ) {
                    if (_ = d._next,
                    (d._act || h >= d._start) && d._ts && D !== d) {
                        if (d.parent !== this)
                            return this.render(s, i, o);
                        if (d.render(d._ts > 0 ? (h - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (h - d._start) * d._ts, i, o),
                        h !== this._time || !this._ts && !v) {
                            D = 0,
                            _ && (c += this._zTime = -we);
                            break
                        }
                    }
                    d = _
                }
            else {
                d = this._last;
                for (var k = s < 0 ? s : h; d; ) {
                    if (_ = d._prev,
                    (d._act || k <= d._end) && d._ts && D !== d) {
                        if (d.parent !== this)
                            return this.render(s, i, o);
                        if (d.render(d._ts > 0 ? (k - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (k - d._start) * d._ts, i, o || Ye && (d._initted || d._startAt)),
                        h !== this._time || !this._ts && !v) {
                            D = 0,
                            _ && (c += this._zTime = k ? -we : we);
                            break
                        }
                    }
                    d = _
                }
            }
            if (D && !i && (this.pause(),
            D.render(h >= a ? 0 : -we)._zTime = h >= a ? 1 : -1,
            this._ts))
                return this._start = y,
                po(this),
                this.render(s, i, o);
            this._onUpdate && !i && gt(this, "onUpdate", !0),
            (c === l && this._tTime >= this.totalDuration() || !c && a) && (y === this._start || Math.abs(g) !== Math.abs(this._ts)) && (this._lock || ((s || !u) && (c === l && this._ts > 0 || !c && this._ts < 0) && On(this, 1),
            !i && !(s < 0 && !a) && (c || a || !l) && (gt(this, c === l && s >= 0 ? "onComplete" : "onReverseComplete", !0),
            this._prom && !(c < l && this.timeScale() > 0) && this._prom())))
        }
        return this
    }
    ,
    n.add = function(s, i) {
        var o = this;
        if (an(i) || (i = bt(this, i, s)),
        !(s instanceof Ls)) {
            if (Xe(s))
                return s.forEach(function(a) {
                    return o.add(a, i)
                }),
                this;
            if (ze(s))
                return this.addLabel(s, i);
            if (Pe(s))
                s = Ie.delayedCall(0, s);
            else
                return this
        }
        return this !== s ? zt(this, s, i) : this
    }
    ,
    n.getChildren = function(s, i, o, a) {
        s === void 0 && (s = !0),
        i === void 0 && (i = !0),
        o === void 0 && (o = !0),
        a === void 0 && (a = -Tt);
        for (var l = [], u = this._first; u; )
            u._start >= a && (u instanceof Ie ? i && l.push(u) : (o && l.push(u),
            s && l.push.apply(l, u.getChildren(!0, i, o)))),
            u = u._next;
        return l
    }
    ,
    n.getById = function(s) {
        for (var i = this.getChildren(1, 1, 1), o = i.length; o--; )
            if (i[o].vars.id === s)
                return i[o]
    }
    ,
    n.remove = function(s) {
        return ze(s) ? this.removeLabel(s) : Pe(s) ? this.killTweensOf(s) : (ho(this, s),
        s === this._recent && (this._recent = this._last),
        er(this))
    }
    ,
    n.totalTime = function(s, i) {
        return arguments.length ? (this._forcing = 1,
        !this._dp && this._ts && (this._start = Ue(pt.time - (this._ts > 0 ? s / this._ts : (this.totalDuration() - s) / -this._ts))),
        t.prototype.totalTime.call(this, s, i),
        this._forcing = 0,
        this) : this._tTime
    }
    ,
    n.addLabel = function(s, i) {
        return this.labels[s] = bt(this, i),
        this
    }
    ,
    n.removeLabel = function(s) {
        return delete this.labels[s],
        this
    }
    ,
    n.addPause = function(s, i, o) {
        var a = Ie.delayedCall(0, i || Ps, o);
        return a.data = "isPause",
        this._hasPause = 1,
        zt(this, a, bt(this, s))
    }
    ,
    n.removePause = function(s) {
        var i = this._first;
        for (s = bt(this, s); i; )
            i._start === s && i.data === "isPause" && On(i),
            i = i._next
    }
    ,
    n.killTweensOf = function(s, i, o) {
        for (var a = this.getTweensOf(s, o), l = a.length; l--; )
            wn !== a[l] && a[l].kill(s, i);
        return this
    }
    ,
    n.getTweensOf = function(s, i) {
        for (var o = [], a = xt(s), l = this._first, u = an(i), c; l; )
            l instanceof Ie ? Eb(l._targets, a) && (u ? (!wn || l._initted && l._ts) && l.globalTime(0) <= i && l.globalTime(l.totalDuration()) > i : !i || l.isActive()) && o.push(l) : (c = l.getTweensOf(a, i)).length && o.push.apply(o, c),
            l = l._next;
        return o
    }
    ,
    n.tweenTo = function(s, i) {
        i = i || {};
        var o = this, a = bt(o, s), l = i, u = l.startAt, c = l.onStart, f = l.onStartParams, h = l.immediateRender, d, _ = Ie.to(o, Rt({
            ease: i.ease || "none",
            lazy: !1,
            immediateRender: !1,
            time: a,
            overwrite: "auto",
            duration: i.duration || Math.abs((a - (u && "time"in u ? u.time : o._time)) / o.timeScale()) || we,
            onStart: function() {
                if (o.pause(),
                !d) {
                    var m = i.duration || Math.abs((a - (u && "time"in u ? u.time : o._time)) / o.timeScale());
                    _._dur !== m && Vr(_, m, 0, 1).render(_._time, !0, !0),
                    d = 1
                }
                c && c.apply(_, f || [])
            }
        }, i));
        return h ? _.render(0) : _
    }
    ,
    n.tweenFromTo = function(s, i, o) {
        return this.tweenTo(i, Rt({
            startAt: {
                time: bt(this, s)
            }
        }, o))
    }
    ,
    n.recent = function() {
        return this._recent
    }
    ,
    n.nextLabel = function(s) {
        return s === void 0 && (s = this._time),
        Rc(this, bt(this, s))
    }
    ,
    n.previousLabel = function(s) {
        return s === void 0 && (s = this._time),
        Rc(this, bt(this, s), 1)
    }
    ,
    n.currentLabel = function(s) {
        return arguments.length ? this.seek(s, !0) : this.previousLabel(this._time + we)
    }
    ,
    n.shiftChildren = function(s, i, o) {
        o === void 0 && (o = 0);
        for (var a = this._first, l = this.labels, u; a; )
            a._start >= o && (a._start += s,
            a._end += s),
            a = a._next;
        if (i)
            for (u in l)
                l[u] >= o && (l[u] += s);
        return er(this)
    }
    ,
    n.invalidate = function(s) {
        var i = this._first;
        for (this._lock = 0; i; )
            i.invalidate(s),
            i = i._next;
        return t.prototype.invalidate.call(this, s)
    }
    ,
    n.clear = function(s) {
        s === void 0 && (s = !0);
        for (var i = this._first, o; i; )
            o = i._next,
            this.remove(i),
            i = o;
        return this._dp && (this._time = this._tTime = this._pTime = 0),
        s && (this.labels = {}),
        er(this)
    }
    ,
    n.totalDuration = function(s) {
        var i = 0, o = this, a = o._last, l = Tt, u, c, f;
        if (arguments.length)
            return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -s : s));
        if (o._dirty) {
            for (f = o.parent; a; )
                u = a._prev,
                a._dirty && a.totalDuration(),
                c = a._start,
                c > l && o._sort && a._ts && !o._lock ? (o._lock = 1,
                zt(o, a, c - a._delay, 1)._lock = 0) : l = c,
                c < 0 && a._ts && (i -= c,
                (!f && !o._dp || f && f.smoothChildTiming) && (o._start += c / o._ts,
                o._time -= c,
                o._tTime -= c),
                o.shiftChildren(-c, !1, -1 / 0),
                l = 0),
                a._end > i && a._ts && (i = a._end),
                a = u;
            Vr(o, o === Re && o._time > i ? o._time : i, 1, 1),
            o._dirty = 0
        }
        return o._tDur
    }
    ,
    e.updateRoot = function(s) {
        if (Re._ts && (Ed(Re, ji(s, Re)),
        Cd = pt.frame),
        pt.frame >= Tc) {
            Tc += mt.autoSleep || 120;
            var i = Re._first;
            if ((!i || !i._ts) && mt.autoSleep && pt._listeners.length < 2) {
                for (; i && !i._ts; )
                    i = i._next;
                i || pt.sleep()
            }
        }
    }
    ,
    e
}(Ls);
Rt(Ze.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var Kb = function(e, n, r, s, i, o, a) {
    var l = new ot(this._pt,e,n,0,1,Qd,null,i), u = 0, c = 0, f, h, d, _, p, m, v, D;
    for (l.b = r,
    l.e = s,
    r += "",
    s += "",
    (v = ~s.indexOf("random(")) && (s = Os(s)),
    o && (D = [r, s],
    o(D, e, n),
    r = D[0],
    s = D[1]),
    h = r.match(Io) || []; f = Io.exec(s); )
        _ = f[0],
        p = s.substring(u, f.index),
        d ? d = (d + 1) % 5 : p.substr(-5) === "rgba(" && (d = 1),
        _ !== h[c++] && (m = parseFloat(h[c - 1]) || 0,
        l._pt = {
            _next: l._pt,
            p: p || c === 1 ? p : ",",
            s: m,
            c: _.charAt(1) === "=" ? Rr(m, _) - m : parseFloat(_) - m,
            m: d && d < 4 ? Math.round : 0
        },
        u = Io.lastIndex);
    return l.c = u < s.length ? s.substring(u, s.length) : "",
    l.fp = a,
    (md.test(s) || v) && (l.e = 0),
    this._pt = l,
    l
}, Nl = function(e, n, r, s, i, o, a, l, u, c) {
    Pe(s) && (s = s(i || 0, e, o));
    var f = e[n], h = r !== "get" ? r : Pe(f) ? u ? e[n.indexOf("set") || !Pe(e["get" + n.substr(3)]) ? n : "get" + n.substr(3)](u) : e[n]() : f, d = Pe(f) ? u ? Qb : Xd : Hl, _;
    if (ze(s) && (~s.indexOf("random(") && (s = Os(s)),
    s.charAt(1) === "=" && (_ = Rr(h, s) + (Ge(h) || 0),
    (_ || _ === 0) && (s = _))),
    !c || h !== s || Ba)
        return !isNaN(h * s) && s !== "" ? (_ = new ot(this._pt,e,n,+h || 0,s - (h || 0),typeof f == "boolean" ? eC : Jd,0,d),
        u && (_.fp = u),
        a && _.modifier(a, this, e),
        this._pt = _) : (!f && !(n in e) && Ml(n, s),
        Kb.call(this, e, n, h, s, d, l || mt.stringFilter, u))
}, Gb = function(e, n, r, s, i) {
    if (Pe(e) && (e = vs(e, i, n, r, s)),
    !Xt(e) || e.style && e.nodeType || Xe(e) || _d(e))
        return ze(e) ? vs(e, i, n, r, s) : e;
    var o = {}, a;
    for (a in e)
        o[a] = vs(e[a], i, n, r, s);
    return o
}, Kd = function(e, n, r, s, i, o) {
    var a, l, u, c;
    if (dt[e] && (a = new dt[e]).init(i, a.rawVars ? n[e] : Gb(n[e], s, i, o, r), r, s, o) !== !1 && (r._pt = l = new ot(r._pt,i,e,0,1,a.render,a,0,a.priority),
    r !== vr))
        for (u = r._ptLookup[r._targets.indexOf(i)],
        c = a._props.length; c--; )
            u[a._props[c]] = l;
    return a
}, wn, Ba, Bl = function t(e, n, r) {
    var s = e.vars, i = s.ease, o = s.startAt, a = s.immediateRender, l = s.lazy, u = s.onUpdate, c = s.runBackwards, f = s.yoyoEase, h = s.keyframes, d = s.autoRevert, _ = e._dur, p = e._startAt, m = e._targets, v = e.parent, D = v && v.data === "nested" ? v.vars.targets : m, g = e._overwrite === "auto" && !Al, y = e.timeline, C, E, S, T, x, k, $, A, N, ee, X, F, j;
    if (y && (!h || !i) && (i = "none"),
    e._ease = tr(i, Hr.ease),
    e._yEase = f ? Ud(tr(f === !0 ? i : f, Hr.ease)) : 0,
    f && e._yoyo && !e._repeat && (f = e._yEase,
    e._yEase = e._ease,
    e._ease = f),
    e._from = !y && !!s.runBackwards,
    !y || h && !s.stagger) {
        if (A = m[0] ? Zn(m[0]).harness : 0,
        F = A && s[A.prop],
        C = Hi(s, Ll),
        p && (p._zTime < 0 && p.progress(1),
        n < 0 && c && a && !d ? p.render(-1, !0) : p.revert(c && _ ? di : Cb),
        p._lazy = 0),
        o) {
            if (On(e._startAt = Ie.set(m, Rt({
                data: "isStart",
                overwrite: !1,
                parent: v,
                immediateRender: !0,
                lazy: !p && st(l),
                startAt: null,
                delay: 0,
                onUpdate: u && function() {
                    return gt(e, "onUpdate")
                }
                ,
                stagger: 0
            }, o))),
            e._startAt._dp = 0,
            e._startAt._sat = e,
            n < 0 && (Ye || !a && !d) && e._startAt.revert(di),
            a && _ && n <= 0 && r <= 0) {
                n && (e._zTime = n);
                return
            }
        } else if (c && _ && !p) {
            if (n && (a = !1),
            S = Rt({
                overwrite: !1,
                data: "isFromStart",
                lazy: a && !p && st(l),
                immediateRender: a,
                stagger: 0,
                parent: v
            }, C),
            F && (S[A.prop] = F),
            On(e._startAt = Ie.set(m, S)),
            e._startAt._dp = 0,
            e._startAt._sat = e,
            n < 0 && (Ye ? e._startAt.revert(di) : e._startAt.render(-1, !0)),
            e._zTime = n,
            !a)
                t(e._startAt, we, we);
            else if (!n)
                return
        }
        for (e._pt = e._ptCache = 0,
        l = _ && st(l) || l && !_,
        E = 0; E < m.length; E++) {
            if (x = m[E],
            $ = x._gsap || $l(m)[E]._gsap,
            e._ptLookup[E] = ee = {},
            Oa[$.id] && kn.length && Bi(),
            X = D === m ? E : D.indexOf(x),
            A && (N = new A).init(x, F || C, e, X, D) !== !1 && (e._pt = T = new ot(e._pt,x,N.name,0,1,N.render,N,0,N.priority),
            N._props.forEach(function(V) {
                ee[V] = T
            }),
            N.priority && (k = 1)),
            !A || F)
                for (S in C)
                    dt[S] && (N = Kd(S, C, e, X, x, D)) ? N.priority && (k = 1) : ee[S] = T = Nl.call(e, x, S, "get", C[S], X, D, 0, s.stringFilter);
            e._op && e._op[E] && e.kill(x, e._op[E]),
            g && e._pt && (wn = e,
            Re.killTweensOf(x, ee, e.globalTime(n)),
            j = !e.parent,
            wn = 0),
            e._pt && l && (Oa[$.id] = 1)
        }
        k && Zd(e),
        e._onInit && e._onInit(e)
    }
    e._onUpdate = u,
    e._initted = (!e._op || e._pt) && !j,
    h && n <= 0 && y.render(Tt, !0, !0)
}, Yb = function(e, n, r, s, i, o, a, l) {
    var u = (e._pt && e._ptCache || (e._ptCache = {}))[n], c, f, h, d;
    if (!u)
        for (u = e._ptCache[n] = [],
        h = e._ptLookup,
        d = e._targets.length; d--; ) {
            if (c = h[d][n],
            c && c.d && c.d._pt)
                for (c = c.d._pt; c && c.p !== n && c.fp !== n; )
                    c = c._next;
            if (!c)
                return Ba = 1,
                e.vars[n] = "+=0",
                Bl(e, a),
                Ba = 0,
                l ? Fs(n + " not eligible for reset") : 1;
            u.push(c)
        }
    for (d = u.length; d--; )
        f = u[d],
        c = f._pt || f,
        c.s = (s || s === 0) && !i ? s : c.s + (s || 0) + o * c.c,
        c.c = r - c.s,
        f.e && (f.e = Le(r) + Ge(f.e)),
        f.b && (f.b = c.s + Ge(f.b))
}, Xb = function(e, n) {
    var r = e[0] ? Zn(e[0]).harness : 0, s = r && r.aliases, i, o, a, l;
    if (!s)
        return n;
    i = or({}, n);
    for (o in s)
        if (o in i)
            for (l = s[o].split(","),
            a = l.length; a--; )
                i[l[a]] = i[o];
    return i
}, Jb = function(e, n, r, s) {
    var i = n.ease || s || "power1.inOut", o, a;
    if (Xe(n))
        a = r[e] || (r[e] = []),
        n.forEach(function(l, u) {
            return a.push({
                t: u / (n.length - 1) * 100,
                v: l,
                e: i
            })
        });
    else
        for (o in n)
            a = r[o] || (r[o] = []),
            o === "ease" || a.push({
                t: parseFloat(e),
                v: n[o],
                e: i
            })
}, vs = function(e, n, r, s, i) {
    return Pe(e) ? e.call(n, r, s, i) : ze(e) && ~e.indexOf("random(") ? Os(e) : e
}, Gd = Il + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", Yd = {};
it(Gd + ",id,stagger,delay,duration,paused,scrollTrigger", function(t) {
    return Yd[t] = 1
});
var Ie = function(t) {
    dd(e, t);
    function e(r, s, i, o) {
        var a;
        typeof s == "number" && (i.duration = s,
        s = i,
        i = null),
        a = t.call(this, o ? s : ys(s)) || this;
        var l = a.vars, u = l.duration, c = l.delay, f = l.immediateRender, h = l.stagger, d = l.overwrite, _ = l.keyframes, p = l.defaults, m = l.scrollTrigger, v = l.yoyoEase, D = s.parent || Re, g = (Xe(r) || _d(r) ? an(r[0]) : "length"in s) ? [r] : xt(r), y, C, E, S, T, x, k, $;
        if (a._targets = g.length ? $l(g) : Fs("GSAP target " + r + " not found. https://gsap.com", !mt.nullTargetWarn) || [],
        a._ptLookup = [],
        a._overwrite = d,
        _ || h || ai(u) || ai(c)) {
            if (s = a.vars,
            y = a.timeline = new Ze({
                data: "nested",
                defaults: p || {},
                targets: D && D.data === "nested" ? D.vars.targets : g
            }),
            y.kill(),
            y.parent = y._dp = Zt(a),
            y._start = 0,
            h || ai(u) || ai(c)) {
                if (S = g.length,
                k = h && Od(h),
                Xt(h))
                    for (T in h)
                        ~Gd.indexOf(T) && ($ || ($ = {}),
                        $[T] = h[T]);
                for (C = 0; C < S; C++)
                    E = Hi(s, Yd),
                    E.stagger = 0,
                    v && (E.yoyoEase = v),
                    $ && or(E, $),
                    x = g[C],
                    E.duration = +vs(u, Zt(a), C, x, g),
                    E.delay = (+vs(c, Zt(a), C, x, g) || 0) - a._delay,
                    !h && S === 1 && E.delay && (a._delay = c = E.delay,
                    a._start += c,
                    E.delay = 0),
                    y.to(x, E, k ? k(C, x, g) : 0),
                    y._ease = le.none;
                y.duration() ? u = c = 0 : a.timeline = 0
            } else if (_) {
                ys(Rt(y.vars.defaults, {
                    ease: "none"
                })),
                y._ease = tr(_.ease || s.ease || "none");
                var A = 0, N, ee, X;
                if (Xe(_))
                    _.forEach(function(F) {
                        return y.to(g, F, ">")
                    }),
                    y.duration();
                else {
                    E = {};
                    for (T in _)
                        T === "ease" || T === "easeEach" || Jb(T, _[T], E, _.easeEach);
                    for (T in E)
                        for (N = E[T].sort(function(F, j) {
                            return F.t - j.t
                        }),
                        A = 0,
                        C = 0; C < N.length; C++)
                            ee = N[C],
                            X = {
                                ease: ee.e,
                                duration: (ee.t - (C ? N[C - 1].t : 0)) / 100 * u
                            },
                            X[T] = ee.v,
                            y.to(g, X, A),
                            A += X.duration;
                    y.duration() < u && y.to({}, {
                        duration: u - y.duration()
                    })
                }
            }
            u || a.duration(u = y.duration())
        } else
            a.timeline = 0;
        return d === !0 && !Al && (wn = Zt(a),
        Re.killTweensOf(g),
        wn = 0),
        zt(D, Zt(a), i),
        s.reversed && a.reverse(),
        s.paused && a.paused(!0),
        (f || !u && !_ && a._start === Ue(D._time) && st(f) && kb(Zt(a)) && D.data !== "nested") && (a._tTime = -we,
        a.render(Math.max(0, -c) || 0)),
        m && Rd(Zt(a), m),
        a
    }
    var n = e.prototype;
    return n.render = function(s, i, o) {
        var a = this._time, l = this._tDur, u = this._dur, c = s < 0, f = s > l - we && !c ? l : s < we ? 0 : s, h, d, _, p, m, v, D, g, y;
        if (!u)
            Ab(this, s, i, o);
        else if (f !== this._tTime || !s || o || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== c) {
            if (h = f,
            g = this.timeline,
            this._repeat) {
                if (p = u + this._rDelay,
                this._repeat < -1 && c)
                    return this.totalTime(p * 100 + s, i, o);
                if (h = Ue(f % p),
                f === l ? (_ = this._repeat,
                h = u) : (_ = ~~(f / p),
                _ && _ === Ue(f / p) && (h = u,
                _--),
                h > u && (h = u)),
                v = this._yoyo && _ & 1,
                v && (y = this._yEase,
                h = u - h),
                m = jr(this._tTime, p),
                h === a && !o && this._initted && _ === m)
                    return this._tTime = f,
                    this;
                _ !== m && (g && this._yEase && zd(g, v),
                this.vars.repeatRefresh && !v && !this._lock && this._time !== p && this._initted && (this._lock = o = 1,
                this.render(Ue(p * _), !0).invalidate()._lock = 0))
            }
            if (!this._initted) {
                if (Ad(this, c ? s : h, o, i, f))
                    return this._tTime = 0,
                    this;
                if (a !== this._time && !(o && this.vars.repeatRefresh && _ !== m))
                    return this;
                if (u !== this._dur)
                    return this.render(s, i, o)
            }
            if (this._tTime = f,
            this._time = h,
            !this._act && this._ts && (this._act = 1,
            this._lazy = 0),
            this.ratio = D = (y || this._ease)(h / u),
            this._from && (this.ratio = D = 1 - D),
            h && !a && !i && !_ && (gt(this, "onStart"),
            this._tTime !== f))
                return this;
            for (d = this._pt; d; )
                d.r(D, d.d),
                d = d._next;
            g && g.render(s < 0 ? s : g._dur * g._ease(h / this._dur), i, o) || this._startAt && (this._zTime = s),
            this._onUpdate && !i && (c && Ma(this, s, i, o),
            gt(this, "onUpdate")),
            this._repeat && _ !== m && this.vars.onRepeat && !i && this.parent && gt(this, "onRepeat"),
            (f === this._tDur || !f) && this._tTime === f && (c && !this._onUpdate && Ma(this, s, !0, !0),
            (s || !u) && (f === this._tDur && this._ts > 0 || !f && this._ts < 0) && On(this, 1),
            !i && !(c && !a) && (f || a || v) && (gt(this, f === l ? "onComplete" : "onReverseComplete", !0),
            this._prom && !(f < l && this.timeScale() > 0) && this._prom()))
        }
        return this
    }
    ,
    n.targets = function() {
        return this._targets
    }
    ,
    n.invalidate = function(s) {
        return (!s || !this.vars.runBackwards) && (this._startAt = 0),
        this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0,
        this._ptLookup = [],
        this.timeline && this.timeline.invalidate(s),
        t.prototype.invalidate.call(this, s)
    }
    ,
    n.resetTo = function(s, i, o, a, l) {
        Ms || pt.wake(),
        this._ts || this.play();
        var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts), c;
        return this._initted || Bl(this, u),
        c = this._ease(u / this._dur),
        Yb(this, s, i, o, a, c, u, l) ? this.resetTo(s, i, o, a, 1) : (_o(this, 0),
        this.parent || Sd(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0),
        this.render(0))
    }
    ,
    n.kill = function(s, i) {
        if (i === void 0 && (i = "all"),
        !s && (!i || i === "all"))
            return this._lazy = this._pt = 0,
            this.parent ? os(this) : this;
        if (this.timeline) {
            var o = this.timeline.totalDuration();
            return this.timeline.killTweensOf(s, i, wn && wn.vars.overwrite !== !0)._first || os(this),
            this.parent && o !== this.timeline.totalDuration() && Vr(this, this._dur * this.timeline._tDur / o, 0, 1),
            this
        }
        var a = this._targets, l = s ? xt(s) : a, u = this._ptLookup, c = this._pt, f, h, d, _, p, m, v;
        if ((!i || i === "all") && xb(a, l))
            return i === "all" && (this._pt = 0),
            os(this);
        for (f = this._op = this._op || [],
        i !== "all" && (ze(i) && (p = {},
        it(i, function(D) {
            return p[D] = 1
        }),
        i = p),
        i = Xb(a, i)),
        v = a.length; v--; )
            if (~l.indexOf(a[v])) {
                h = u[v],
                i === "all" ? (f[v] = i,
                _ = h,
                d = {}) : (d = f[v] = f[v] || {},
                _ = i);
                for (p in _)
                    m = h && h[p],
                    m && ((!("kill"in m.d) || m.d.kill(p) === !0) && ho(this, m, "_pt"),
                    delete h[p]),
                    d !== "all" && (d[p] = 1)
            }
        return this._initted && !this._pt && c && os(this),
        this
    }
    ,
    e.to = function(s, i) {
        return new e(s,i,arguments[2])
    }
    ,
    e.from = function(s, i) {
        return Ds(1, arguments)
    }
    ,
    e.delayedCall = function(s, i, o, a) {
        return new e(i,0,{
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: s,
            onComplete: i,
            onReverseComplete: i,
            onCompleteParams: o,
            onReverseCompleteParams: o,
            callbackScope: a
        })
    }
    ,
    e.fromTo = function(s, i, o) {
        return Ds(2, arguments)
    }
    ,
    e.set = function(s, i) {
        return i.duration = 0,
        i.repeatDelay || (i.repeat = 0),
        new e(s,i)
    }
    ,
    e.killTweensOf = function(s, i, o) {
        return Re.killTweensOf(s, i, o)
    }
    ,
    e
}(Ls);
Rt(Ie.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
});
it("staggerTo,staggerFrom,staggerFromTo", function(t) {
    Ie[t] = function() {
        var e = new Ze
          , n = Ia.call(arguments, 0);
        return n.splice(t === "staggerFromTo" ? 5 : 4, 0, 0),
        e[t].apply(e, n)
    }
});
var Hl = function(e, n, r) {
    return e[n] = r
}
  , Xd = function(e, n, r) {
    return e[n](r)
}
  , Qb = function(e, n, r, s) {
    return e[n](s.fp, r)
}
  , Zb = function(e, n, r) {
    return e.setAttribute(n, r)
}
  , jl = function(e, n) {
    return Pe(e[n]) ? Xd : Fl(e[n]) && e.setAttribute ? Zb : Hl
}
  , Jd = function(e, n) {
    return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e6) / 1e6, n)
}
  , eC = function(e, n) {
    return n.set(n.t, n.p, !!(n.s + n.c * e), n)
}
  , Qd = function(e, n) {
    var r = n._pt
      , s = "";
    if (!e && n.b)
        s = n.b;
    else if (e === 1 && n.e)
        s = n.e;
    else {
        for (; r; )
            s = r.p + (r.m ? r.m(r.s + r.c * e) : Math.round((r.s + r.c * e) * 1e4) / 1e4) + s,
            r = r._next;
        s += n.c
    }
    n.set(n.t, n.p, s, n)
}
  , Vl = function(e, n) {
    for (var r = n._pt; r; )
        r.r(e, r.d),
        r = r._next
}
  , tC = function(e, n, r, s) {
    for (var i = this._pt, o; i; )
        o = i._next,
        i.p === s && i.modifier(e, n, r),
        i = o
}
  , nC = function(e) {
    for (var n = this._pt, r, s; n; )
        s = n._next,
        n.p === e && !n.op || n.op === e ? ho(this, n, "_pt") : n.dep || (r = 1),
        n = s;
    return !r
}
  , rC = function(e, n, r, s) {
    s.mSet(e, n, s.m.call(s.tween, r, s.mt), s)
}
  , Zd = function(e) {
    for (var n = e._pt, r, s, i, o; n; ) {
        for (r = n._next,
        s = i; s && s.pr > n.pr; )
            s = s._next;
        (n._prev = s ? s._prev : o) ? n._prev._next = n : i = n,
        (n._next = s) ? s._prev = n : o = n,
        n = r
    }
    e._pt = i
}
  , ot = function() {
    function t(n, r, s, i, o, a, l, u, c) {
        this.t = r,
        this.s = i,
        this.c = o,
        this.p = s,
        this.r = a || Jd,
        this.d = l || this,
        this.set = u || Hl,
        this.pr = c || 0,
        this._next = n,
        n && (n._prev = this)
    }
    var e = t.prototype;
    return e.modifier = function(r, s, i) {
        this.mSet = this.mSet || this.set,
        this.set = rC,
        this.m = r,
        this.mt = i,
        this.tween = s
    }
    ,
    t
}();
it(Il + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
    return Ll[t] = 1
});
yt.TweenMax = yt.TweenLite = Ie;
yt.TimelineLite = yt.TimelineMax = Ze;
Re = new Ze({
    sortChildren: !1,
    defaults: Hr,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
});
mt.stringFilter = Vd;
var nr = []
  , _i = {}
  , sC = []
  , Fc = 0
  , iC = 0
  , jo = function(e) {
    return (_i[e] || sC).map(function(n) {
        return n()
    })
}
  , Ha = function() {
    var e = Date.now()
      , n = [];
    e - Fc > 2 && (jo("matchMediaInit"),
    nr.forEach(function(r) {
        var s = r.queries, i = r.conditions, o, a, l, u;
        for (a in s)
            o = Vt.matchMedia(s[a]).matches,
            o && (l = 1),
            o !== i[a] && (i[a] = o,
            u = 1);
        u && (r.revert(),
        l && n.push(r))
    }),
    jo("matchMediaRevert"),
    n.forEach(function(r) {
        return r.onMatch(r, function(s) {
            return r.add(null, s)
        })
    }),
    Fc = e,
    jo("matchMedia"))
}
  , ep = function() {
    function t(n, r) {
        this.selector = r && $a(r),
        this.data = [],
        this._r = [],
        this.isReverted = !1,
        this.id = iC++,
        n && this.add(n)
    }
    var e = t.prototype;
    return e.add = function(r, s, i) {
        Pe(r) && (i = s,
        s = r,
        r = Pe);
        var o = this
          , a = function() {
            var u = ke, c = o.selector, f;
            return u && u !== o && u.data.push(o),
            i && (o.selector = $a(i)),
            ke = o,
            f = s.apply(o, arguments),
            Pe(f) && o._r.push(f),
            ke = u,
            o.selector = c,
            o.isReverted = !1,
            f
        };
        return o.last = a,
        r === Pe ? a(o, function(l) {
            return o.add(null, l)
        }) : r ? o[r] = a : a
    }
    ,
    e.ignore = function(r) {
        var s = ke;
        ke = null,
        r(this),
        ke = s
    }
    ,
    e.getTweens = function() {
        var r = [];
        return this.data.forEach(function(s) {
            return s instanceof t ? r.push.apply(r, s.getTweens()) : s instanceof Ie && !(s.parent && s.parent.data === "nested") && r.push(s)
        }),
        r
    }
    ,
    e.clear = function() {
        this._r.length = this.data.length = 0
    }
    ,
    e.kill = function(r, s) {
        var i = this;
        if (r ? function() {
            for (var a = i.getTweens(), l = i.data.length, u; l--; )
                u = i.data[l],
                u.data === "isFlip" && (u.revert(),
                u.getChildren(!0, !0, !1).forEach(function(c) {
                    return a.splice(a.indexOf(c), 1)
                }));
            for (a.map(function(c) {
                return {
                    g: c._dur || c._delay || c._sat && !c._sat.vars.immediateRender ? c.globalTime(0) : -1 / 0,
                    t: c
                }
            }).sort(function(c, f) {
                return f.g - c.g || -1 / 0
            }).forEach(function(c) {
                return c.t.revert(r)
            }),
            l = i.data.length; l--; )
                u = i.data[l],
                u instanceof Ze ? u.data !== "nested" && (u.scrollTrigger && u.scrollTrigger.revert(),
                u.kill()) : !(u instanceof Ie) && u.revert && u.revert(r);
            i._r.forEach(function(c) {
                return c(r, i)
            }),
            i.isReverted = !0
        }() : this.data.forEach(function(a) {
            return a.kill && a.kill()
        }),
        this.clear(),
        s)
            for (var o = nr.length; o--; )
                nr[o].id === this.id && nr.splice(o, 1)
    }
    ,
    e.revert = function(r) {
        this.kill(r || {})
    }
    ,
    t
}()
  , oC = function() {
    function t(n) {
        this.contexts = [],
        this.scope = n,
        ke && ke.data.push(this)
    }
    var e = t.prototype;
    return e.add = function(r, s, i) {
        Xt(r) || (r = {
            matches: r
        });
        var o = new ep(0,i || this.scope), a = o.conditions = {}, l, u, c;
        ke && !o.selector && (o.selector = ke.selector),
        this.contexts.push(o),
        s = o.add("onMatch", s),
        o.queries = r;
        for (u in r)
            u === "all" ? c = 1 : (l = Vt.matchMedia(r[u]),
            l && (nr.indexOf(o) < 0 && nr.push(o),
            (a[u] = l.matches) && (c = 1),
            l.addListener ? l.addListener(Ha) : l.addEventListener("change", Ha)));
        return c && s(o, function(f) {
            return o.add(null, f)
        }),
        this
    }
    ,
    e.revert = function(r) {
        this.kill(r || {})
    }
    ,
    e.kill = function(r) {
        this.contexts.forEach(function(s) {
            return s.kill(r, !0)
        })
    }
    ,
    t
}()
  , Vi = {
    registerPlugin: function() {
        for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
        n.forEach(function(s) {
            return Bd(s)
        })
    },
    timeline: function(e) {
        return new Ze(e)
    },
    getTweensOf: function(e, n) {
        return Re.getTweensOf(e, n)
    },
    getProperty: function(e, n, r, s) {
        ze(e) && (e = xt(e)[0]);
        var i = Zn(e || {}).get
          , o = r ? xd : Td;
        return r === "native" && (r = ""),
        e && (n ? o((dt[n] && dt[n].get || i)(e, n, r, s)) : function(a, l, u) {
            return o((dt[a] && dt[a].get || i)(e, a, l, u))
        }
        )
    },
    quickSetter: function(e, n, r) {
        if (e = xt(e),
        e.length > 1) {
            var s = e.map(function(c) {
                return ut.quickSetter(c, n, r)
            })
              , i = s.length;
            return function(c) {
                for (var f = i; f--; )
                    s[f](c)
            }
        }
        e = e[0] || {};
        var o = dt[n]
          , a = Zn(e)
          , l = a.harness && (a.harness.aliases || {})[n] || n
          , u = o ? function(c) {
            var f = new o;
            vr._pt = 0,
            f.init(e, r ? c + r : c, vr, 0, [e]),
            f.render(1, f),
            vr._pt && Vl(1, vr)
        }
        : a.set(e, l);
        return o ? u : function(c) {
            return u(e, l, r ? c + r : c, a, 1)
        }
    },
    quickTo: function(e, n, r) {
        var s, i = ut.to(e, or((s = {},
        s[n] = "+=0.1",
        s.paused = !0,
        s), r || {})), o = function(l, u, c) {
            return i.resetTo(n, l, u, c)
        };
        return o.tween = i,
        o
    },
    isTweening: function(e) {
        return Re.getTweensOf(e, !0).length > 0
    },
    defaults: function(e) {
        return e && e.ease && (e.ease = tr(e.ease, Hr.ease)),
        xc(Hr, e || {})
    },
    config: function(e) {
        return xc(mt, e || {})
    },
    registerEffect: function(e) {
        var n = e.name
          , r = e.effect
          , s = e.plugins
          , i = e.defaults
          , o = e.extendTimeline;
        (s || "").split(",").forEach(function(a) {
            return a && !dt[a] && !yt[a] && Fs(n + " effect requires " + a + " plugin.")
        }),
        $o[n] = function(a, l, u) {
            return r(xt(a), Rt(l || {}, i), u)
        }
        ,
        o && (Ze.prototype[n] = function(a, l, u) {
            return this.add($o[n](a, Xt(l) ? l : (u = l) && {}, this), u)
        }
        )
    },
    registerEase: function(e, n) {
        le[e] = tr(n)
    },
    parseEase: function(e, n) {
        return arguments.length ? tr(e, n) : le
    },
    getById: function(e) {
        return Re.getById(e)
    },
    exportRoot: function(e, n) {
        e === void 0 && (e = {});
        var r = new Ze(e), s, i;
        for (r.smoothChildTiming = st(e.smoothChildTiming),
        Re.remove(r),
        r._dp = 0,
        r._time = r._tTime = Re._time,
        s = Re._first; s; )
            i = s._next,
            (n || !(!s._dur && s instanceof Ie && s.vars.onComplete === s._targets[0])) && zt(r, s, s._start - s._delay),
            s = i;
        return zt(Re, r, 0),
        r
    },
    context: function(e, n) {
        return e ? new ep(e,n) : ke
    },
    matchMedia: function(e) {
        return new oC(e)
    },
    matchMediaRefresh: function() {
        return nr.forEach(function(e) {
            var n = e.conditions, r, s;
            for (s in n)
                n[s] && (n[s] = !1,
                r = 1);
            r && e.revert()
        }) || Ha()
    },
    addEventListener: function(e, n) {
        var r = _i[e] || (_i[e] = []);
        ~r.indexOf(n) || r.push(n)
    },
    removeEventListener: function(e, n) {
        var r = _i[e]
          , s = r && r.indexOf(n);
        s >= 0 && r.splice(s, 1)
    },
    utils: {
        wrap: Nb,
        wrapYoyo: Bb,
        distribute: Od,
        random: Ld,
        snap: Md,
        normalize: $b,
        getUnit: Ge,
        clamp: Ob,
        splitColor: Hd,
        toArray: xt,
        selector: $a,
        mapRange: $d,
        pipe: Lb,
        unitize: Ib,
        interpolate: Hb,
        shuffle: Pd
    },
    install: vd,
    effects: $o,
    ticker: pt,
    updateRoot: Ze.updateRoot,
    plugins: dt,
    globalTimeline: Re,
    core: {
        PropTween: ot,
        globals: bd,
        Tween: Ie,
        Timeline: Ze,
        Animation: Ls,
        getCache: Zn,
        _removeLinkedListItem: ho,
        reverting: function() {
            return Ye
        },
        context: function(e) {
            return e && ke && (ke.data.push(e),
            e._ctx = ke),
            ke
        },
        suppressOverwrites: function(e) {
            return Al = e
        }
    }
};
it("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
    return Vi[t] = Ie[t]
});
pt.add(Ze.updateRoot);
vr = Vi.to({}, {
    duration: 0
});
var aC = function(e, n) {
    for (var r = e._pt; r && r.p !== n && r.op !== n && r.fp !== n; )
        r = r._next;
    return r
}
  , lC = function(e, n) {
    var r = e._targets, s, i, o;
    for (s in n)
        for (i = r.length; i--; )
            o = e._ptLookup[i][s],
            o && (o = o.d) && (o._pt && (o = aC(o, s)),
            o && o.modifier && o.modifier(n[s], e, r[i], s))
}
  , Vo = function(e, n) {
    return {
        name: e,
        rawVars: 1,
        init: function(s, i, o) {
            o._onInit = function(a) {
                var l, u;
                if (ze(i) && (l = {},
                it(i, function(c) {
                    return l[c] = 1
                }),
                i = l),
                n) {
                    l = {};
                    for (u in i)
                        l[u] = n(i[u]);
                    i = l
                }
                lC(a, i)
            }
        }
    }
}
  , ut = Vi.registerPlugin({
    name: "attr",
    init: function(e, n, r, s, i) {
        var o, a, l;
        this.tween = r;
        for (o in n)
            l = e.getAttribute(o) || "",
            a = this.add(e, "setAttribute", (l || 0) + "", n[o], s, i, 0, 0, o),
            a.op = o,
            a.b = l,
            this._props.push(o)
    },
    render: function(e, n) {
        for (var r = n._pt; r; )
            Ye ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d),
            r = r._next
    }
}, {
    name: "endArray",
    init: function(e, n) {
        for (var r = n.length; r--; )
            this.add(e, r, e[r] || 0, n[r], 0, 0, 0, 0, 0, 1)
    }
}, Vo("roundProps", Na), Vo("modifiers"), Vo("snap", Md)) || Vi;
Ie.version = Ze.version = ut.version = "3.12.5";
Dd = 1;
Pl() && Ur();
le.Power0;
le.Power1;
le.Power2;
le.Power3;
le.Power4;
le.Linear;
le.Quad;
le.Cubic;
le.Quart;
le.Quint;
le.Strong;
le.Elastic;
le.Back;
le.SteppedEase;
le.Bounce;
le.Sine;
le.Expo;
le.Circ;
/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Pc, En, Ar, Ul, Yn, Oc, zl, uC = function() {
    return typeof window < "u"
}, ln = {}, zn = 180 / Math.PI, Fr = Math.PI / 180, gr = Math.atan2, Mc = 1e8, Wl = /([A-Z])/g, cC = /(left|right|width|margin|padding|x)/i, fC = /[\s,\(]\S/, Wt = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
}, ja = function(e, n) {
    return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u, n)
}, hC = function(e, n) {
    return n.set(n.t, n.p, e === 1 ? n.e : Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u, n)
}, dC = function(e, n) {
    return n.set(n.t, n.p, e ? Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u : n.b, n)
}, pC = function(e, n) {
    var r = n.s + n.c * e;
    n.set(n.t, n.p, ~~(r + (r < 0 ? -.5 : .5)) + n.u, n)
}, tp = function(e, n) {
    return n.set(n.t, n.p, e ? n.e : n.b, n)
}, np = function(e, n) {
    return n.set(n.t, n.p, e !== 1 ? n.b : n.e, n)
}, _C = function(e, n, r) {
    return e.style[n] = r
}, gC = function(e, n, r) {
    return e.style.setProperty(n, r)
}, mC = function(e, n, r) {
    return e._gsap[n] = r
}, yC = function(e, n, r) {
    return e._gsap.scaleX = e._gsap.scaleY = r
}, DC = function(e, n, r, s, i) {
    var o = e._gsap;
    o.scaleX = o.scaleY = r,
    o.renderTransform(i, o)
}, vC = function(e, n, r, s, i) {
    var o = e._gsap;
    o[n] = r,
    o.renderTransform(i, o)
}, Ae = "transform", at = Ae + "Origin", bC = function t(e, n) {
    var r = this
      , s = this.target
      , i = s.style
      , o = s._gsap;
    if (e in ln && i) {
        if (this.tfm = this.tfm || {},
        e !== "transform")
            e = Wt[e] || e,
            ~e.indexOf(",") ? e.split(",").forEach(function(a) {
                return r.tfm[a] = en(s, a)
            }) : this.tfm[e] = o.x ? o[e] : en(s, e),
            e === at && (this.tfm.zOrigin = o.zOrigin);
        else
            return Wt.transform.split(",").forEach(function(a) {
                return t.call(r, a, n)
            });
        if (this.props.indexOf(Ae) >= 0)
            return;
        o.svg && (this.svgo = s.getAttribute("data-svg-origin"),
        this.props.push(at, n, "")),
        e = Ae
    }
    (i || n) && this.props.push(e, n, i[e])
}, rp = function(e) {
    e.translate && (e.removeProperty("translate"),
    e.removeProperty("scale"),
    e.removeProperty("rotate"))
}, CC = function() {
    var e = this.props, n = this.target, r = n.style, s = n._gsap, i, o;
    for (i = 0; i < e.length; i += 3)
        e[i + 1] ? n[e[i]] = e[i + 2] : e[i + 2] ? r[e[i]] = e[i + 2] : r.removeProperty(e[i].substr(0, 2) === "--" ? e[i] : e[i].replace(Wl, "-$1").toLowerCase());
    if (this.tfm) {
        for (o in this.tfm)
            s[o] = this.tfm[o];
        s.svg && (s.renderTransform(),
        n.setAttribute("data-svg-origin", this.svgo || "")),
        i = zl(),
        (!i || !i.isStart) && !r[Ae] && (rp(r),
        s.zOrigin && r[at] && (r[at] += " " + s.zOrigin + "px",
        s.zOrigin = 0,
        s.renderTransform()),
        s.uncache = 1)
    }
}, sp = function(e, n) {
    var r = {
        target: e,
        props: [],
        revert: CC,
        save: bC
    };
    return e._gsap || ut.core.getCache(e),
    n && n.split(",").forEach(function(s) {
        return r.save(s)
    }),
    r
}, ip, Va = function(e, n) {
    var r = En.createElementNS ? En.createElementNS((n || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : En.createElement(e);
    return r && r.style ? r : En.createElement(e)
}, Kt = function t(e, n, r) {
    var s = getComputedStyle(e);
    return s[n] || s.getPropertyValue(n.replace(Wl, "-$1").toLowerCase()) || s.getPropertyValue(n) || !r && t(e, zr(n) || n, 1) || ""
}, Lc = "O,Moz,ms,Ms,Webkit".split(","), zr = function(e, n, r) {
    var s = n || Yn
      , i = s.style
      , o = 5;
    if (e in i && !r)
        return e;
    for (e = e.charAt(0).toUpperCase() + e.substr(1); o-- && !(Lc[o] + e in i); )
        ;
    return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? Lc[o] : "") + e
}, Ua = function() {
    uC() && window.document && (Pc = window,
    En = Pc.document,
    Ar = En.documentElement,
    Yn = Va("div") || {
        style: {}
    },
    Va("div"),
    Ae = zr(Ae),
    at = Ae + "Origin",
    Yn.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
    ip = !!zr("perspective"),
    zl = ut.core.reverting,
    Ul = 1)
}, Uo = function t(e) {
    var n = Va("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = this.parentNode, s = this.nextSibling, i = this.style.cssText, o;
    if (Ar.appendChild(n),
    n.appendChild(this),
    this.style.display = "block",
    e)
        try {
            o = this.getBBox(),
            this._gsapBBox = this.getBBox,
            this.getBBox = t
        } catch {}
    else
        this._gsapBBox && (o = this._gsapBBox());
    return r && (s ? r.insertBefore(this, s) : r.appendChild(this)),
    Ar.removeChild(n),
    this.style.cssText = i,
    o
}, Ic = function(e, n) {
    for (var r = n.length; r--; )
        if (e.hasAttribute(n[r]))
            return e.getAttribute(n[r])
}, op = function(e) {
    var n;
    try {
        n = e.getBBox()
    } catch {
        n = Uo.call(e, !0)
    }
    return n && (n.width || n.height) || e.getBBox === Uo || (n = Uo.call(e, !0)),
    n && !n.width && !n.x && !n.y ? {
        x: +Ic(e, ["x", "cx", "x1"]) || 0,
        y: +Ic(e, ["y", "cy", "y1"]) || 0,
        width: 0,
        height: 0
    } : n
}, ap = function(e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && op(e))
}, ar = function(e, n) {
    if (n) {
        var r = e.style, s;
        n in ln && n !== at && (n = Ae),
        r.removeProperty ? (s = n.substr(0, 2),
        (s === "ms" || n.substr(0, 6) === "webkit") && (n = "-" + n),
        r.removeProperty(s === "--" ? n : n.replace(Wl, "-$1").toLowerCase())) : r.removeAttribute(n)
    }
}, Tn = function(e, n, r, s, i, o) {
    var a = new ot(e._pt,n,r,0,1,o ? np : tp);
    return e._pt = a,
    a.b = s,
    a.e = i,
    e._props.push(r),
    a
}, $c = {
    deg: 1,
    rad: 1,
    turn: 1
}, wC = {
    grid: 1,
    flex: 1
}, Mn = function t(e, n, r, s) {
    var i = parseFloat(r) || 0, o = (r + "").trim().substr((i + "").length) || "px", a = Yn.style, l = cC.test(n), u = e.tagName.toLowerCase() === "svg", c = (u ? "client" : "offset") + (l ? "Width" : "Height"), f = 100, h = s === "px", d = s === "%", _, p, m, v;
    if (s === o || !i || $c[s] || $c[o])
        return i;
    if (o !== "px" && !h && (i = t(e, n, r, "px")),
    v = e.getCTM && ap(e),
    (d || o === "%") && (ln[n] || ~n.indexOf("adius")))
        return _ = v ? e.getBBox()[l ? "width" : "height"] : e[c],
        Le(d ? i / _ * f : i / 100 * _);
    if (a[l ? "width" : "height"] = f + (h ? o : s),
    p = ~n.indexOf("adius") || s === "em" && e.appendChild && !u ? e : e.parentNode,
    v && (p = (e.ownerSVGElement || {}).parentNode),
    (!p || p === En || !p.appendChild) && (p = En.body),
    m = p._gsap,
    m && d && m.width && l && m.time === pt.time && !m.uncache)
        return Le(i / m.width * f);
    if (d && (n === "height" || n === "width")) {
        var D = e.style[n];
        e.style[n] = f + s,
        _ = e[c],
        D ? e.style[n] = D : ar(e, n)
    } else
        (d || o === "%") && !wC[Kt(p, "display")] && (a.position = Kt(e, "position")),
        p === e && (a.position = "static"),
        p.appendChild(Yn),
        _ = Yn[c],
        p.removeChild(Yn),
        a.position = "absolute";
    return l && d && (m = Zn(p),
    m.time = pt.time,
    m.width = p[c]),
    Le(h ? _ * i / f : _ && i ? f / _ * i : 0)
}, en = function(e, n, r, s) {
    var i;
    return Ul || Ua(),
    n in Wt && n !== "transform" && (n = Wt[n],
    ~n.indexOf(",") && (n = n.split(",")[0])),
    ln[n] && n !== "transform" ? (i = $s(e, s),
    i = n !== "transformOrigin" ? i[n] : i.svg ? i.origin : zi(Kt(e, at)) + " " + i.zOrigin + "px") : (i = e.style[n],
    (!i || i === "auto" || s || ~(i + "").indexOf("calc(")) && (i = Ui[n] && Ui[n](e, n, r) || Kt(e, n) || wd(e, n) || (n === "opacity" ? 1 : 0))),
    r && !~(i + "").trim().indexOf(" ") ? Mn(e, n, i, r) + r : i
}, EC = function(e, n, r, s) {
    if (!r || r === "none") {
        var i = zr(n, e, 1)
          , o = i && Kt(e, i, 1);
        o && o !== r ? (n = i,
        r = o) : n === "borderColor" && (r = Kt(e, "borderTopColor"))
    }
    var a = new ot(this._pt,e.style,n,0,1,Qd), l = 0, u = 0, c, f, h, d, _, p, m, v, D, g, y, C;
    if (a.b = r,
    a.e = s,
    r += "",
    s += "",
    s === "auto" && (p = e.style[n],
    e.style[n] = s,
    s = Kt(e, n) || s,
    p ? e.style[n] = p : ar(e, n)),
    c = [r, s],
    Vd(c),
    r = c[0],
    s = c[1],
    h = r.match(Dr) || [],
    C = s.match(Dr) || [],
    C.length) {
        for (; f = Dr.exec(s); )
            m = f[0],
            D = s.substring(l, f.index),
            _ ? _ = (_ + 1) % 5 : (D.substr(-5) === "rgba(" || D.substr(-5) === "hsla(") && (_ = 1),
            m !== (p = h[u++] || "") && (d = parseFloat(p) || 0,
            y = p.substr((d + "").length),
            m.charAt(1) === "=" && (m = Rr(d, m) + y),
            v = parseFloat(m),
            g = m.substr((v + "").length),
            l = Dr.lastIndex - g.length,
            g || (g = g || mt.units[n] || y,
            l === s.length && (s += g,
            a.e += g)),
            y !== g && (d = Mn(e, n, p, g) || 0),
            a._pt = {
                _next: a._pt,
                p: D || u === 1 ? D : ",",
                s: d,
                c: v - d,
                m: _ && _ < 4 || n === "zIndex" ? Math.round : 0
            });
        a.c = l < s.length ? s.substring(l, s.length) : ""
    } else
        a.r = n === "display" && s === "none" ? np : tp;
    return md.test(s) && (a.e = 0),
    this._pt = a,
    a
}, Nc = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
}, TC = function(e) {
    var n = e.split(" ")
      , r = n[0]
      , s = n[1] || "50%";
    return (r === "top" || r === "bottom" || s === "left" || s === "right") && (e = r,
    r = s,
    s = e),
    n[0] = Nc[r] || r,
    n[1] = Nc[s] || s,
    n.join(" ")
}, xC = function(e, n) {
    if (n.tween && n.tween._time === n.tween._dur) {
        var r = n.t, s = r.style, i = n.u, o = r._gsap, a, l, u;
        if (i === "all" || i === !0)
            s.cssText = "",
            l = 1;
        else
            for (i = i.split(","),
            u = i.length; --u > -1; )
                a = i[u],
                ln[a] && (l = 1,
                a = a === "transformOrigin" ? at : Ae),
                ar(r, a);
        l && (ar(r, Ae),
        o && (o.svg && r.removeAttribute("transform"),
        $s(r, 1),
        o.uncache = 1,
        rp(s)))
    }
}, Ui = {
    clearProps: function(e, n, r, s, i) {
        if (i.data !== "isFromStart") {
            var o = e._pt = new ot(e._pt,n,r,0,0,xC);
            return o.u = s,
            o.pr = -10,
            o.tween = i,
            e._props.push(r),
            1
        }
    }
}, Is = [1, 0, 0, 1, 0, 0], lp = {}, up = function(e) {
    return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e
}, Bc = function(e) {
    var n = Kt(e, Ae);
    return up(n) ? Is : n.substr(7).match(gd).map(Le)
}, ql = function(e, n) {
    var r = e._gsap || Zn(e), s = e.style, i = Bc(e), o, a, l, u;
    return r.svg && e.getAttribute("transform") ? (l = e.transform.baseVal.consolidate().matrix,
    i = [l.a, l.b, l.c, l.d, l.e, l.f],
    i.join(",") === "1,0,0,1,0,0" ? Is : i) : (i === Is && !e.offsetParent && e !== Ar && !r.svg && (l = s.display,
    s.display = "block",
    o = e.parentNode,
    (!o || !e.offsetParent) && (u = 1,
    a = e.nextElementSibling,
    Ar.appendChild(e)),
    i = Bc(e),
    l ? s.display = l : ar(e, "display"),
    u && (a ? o.insertBefore(e, a) : o ? o.appendChild(e) : Ar.removeChild(e))),
    n && i.length > 6 ? [i[0], i[1], i[4], i[5], i[12], i[13]] : i)
}, za = function(e, n, r, s, i, o) {
    var a = e._gsap, l = i || ql(e, !0), u = a.xOrigin || 0, c = a.yOrigin || 0, f = a.xOffset || 0, h = a.yOffset || 0, d = l[0], _ = l[1], p = l[2], m = l[3], v = l[4], D = l[5], g = n.split(" "), y = parseFloat(g[0]) || 0, C = parseFloat(g[1]) || 0, E, S, T, x;
    r ? l !== Is && (S = d * m - _ * p) && (T = y * (m / S) + C * (-p / S) + (p * D - m * v) / S,
    x = y * (-_ / S) + C * (d / S) - (d * D - _ * v) / S,
    y = T,
    C = x) : (E = op(e),
    y = E.x + (~g[0].indexOf("%") ? y / 100 * E.width : y),
    C = E.y + (~(g[1] || g[0]).indexOf("%") ? C / 100 * E.height : C)),
    s || s !== !1 && a.smooth ? (v = y - u,
    D = C - c,
    a.xOffset = f + (v * d + D * p) - v,
    a.yOffset = h + (v * _ + D * m) - D) : a.xOffset = a.yOffset = 0,
    a.xOrigin = y,
    a.yOrigin = C,
    a.smooth = !!s,
    a.origin = n,
    a.originIsAbsolute = !!r,
    e.style[at] = "0px 0px",
    o && (Tn(o, a, "xOrigin", u, y),
    Tn(o, a, "yOrigin", c, C),
    Tn(o, a, "xOffset", f, a.xOffset),
    Tn(o, a, "yOffset", h, a.yOffset)),
    e.setAttribute("data-svg-origin", y + " " + C)
}, $s = function(e, n) {
    var r = e._gsap || new qd(e);
    if ("x"in r && !n && !r.uncache)
        return r;
    var s = e.style, i = r.scaleX < 0, o = "px", a = "deg", l = getComputedStyle(e), u = Kt(e, at) || "0", c, f, h, d, _, p, m, v, D, g, y, C, E, S, T, x, k, $, A, N, ee, X, F, j, V, L, Me, ve, he, Dt, be, ce;
    return c = f = h = p = m = v = D = g = y = 0,
    d = _ = 1,
    r.svg = !!(e.getCTM && ap(e)),
    l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (s[Ae] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[Ae] !== "none" ? l[Ae] : "")),
    s.scale = s.rotate = s.translate = "none"),
    S = ql(e, r.svg),
    r.svg && (r.uncache ? (V = e.getBBox(),
    u = r.xOrigin - V.x + "px " + (r.yOrigin - V.y) + "px",
    j = "") : j = !n && e.getAttribute("data-svg-origin"),
    za(e, j || u, !!j || r.originIsAbsolute, r.smooth !== !1, S)),
    C = r.xOrigin || 0,
    E = r.yOrigin || 0,
    S !== Is && ($ = S[0],
    A = S[1],
    N = S[2],
    ee = S[3],
    c = X = S[4],
    f = F = S[5],
    S.length === 6 ? (d = Math.sqrt($ * $ + A * A),
    _ = Math.sqrt(ee * ee + N * N),
    p = $ || A ? gr(A, $) * zn : 0,
    D = N || ee ? gr(N, ee) * zn + p : 0,
    D && (_ *= Math.abs(Math.cos(D * Fr))),
    r.svg && (c -= C - (C * $ + E * N),
    f -= E - (C * A + E * ee))) : (ce = S[6],
    Dt = S[7],
    Me = S[8],
    ve = S[9],
    he = S[10],
    be = S[11],
    c = S[12],
    f = S[13],
    h = S[14],
    T = gr(ce, he),
    m = T * zn,
    T && (x = Math.cos(-T),
    k = Math.sin(-T),
    j = X * x + Me * k,
    V = F * x + ve * k,
    L = ce * x + he * k,
    Me = X * -k + Me * x,
    ve = F * -k + ve * x,
    he = ce * -k + he * x,
    be = Dt * -k + be * x,
    X = j,
    F = V,
    ce = L),
    T = gr(-N, he),
    v = T * zn,
    T && (x = Math.cos(-T),
    k = Math.sin(-T),
    j = $ * x - Me * k,
    V = A * x - ve * k,
    L = N * x - he * k,
    be = ee * k + be * x,
    $ = j,
    A = V,
    N = L),
    T = gr(A, $),
    p = T * zn,
    T && (x = Math.cos(T),
    k = Math.sin(T),
    j = $ * x + A * k,
    V = X * x + F * k,
    A = A * x - $ * k,
    F = F * x - X * k,
    $ = j,
    X = V),
    m && Math.abs(m) + Math.abs(p) > 359.9 && (m = p = 0,
    v = 180 - v),
    d = Le(Math.sqrt($ * $ + A * A + N * N)),
    _ = Le(Math.sqrt(F * F + ce * ce)),
    T = gr(X, F),
    D = Math.abs(T) > 2e-4 ? T * zn : 0,
    y = be ? 1 / (be < 0 ? -be : be) : 0),
    r.svg && (j = e.getAttribute("transform"),
    r.forceCSS = e.setAttribute("transform", "") || !up(Kt(e, Ae)),
    j && e.setAttribute("transform", j))),
    Math.abs(D) > 90 && Math.abs(D) < 270 && (i ? (d *= -1,
    D += p <= 0 ? 180 : -180,
    p += p <= 0 ? 180 : -180) : (_ *= -1,
    D += D <= 0 ? 180 : -180)),
    n = n || r.uncache,
    r.x = c - ((r.xPercent = c && (!n && r.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-c) ? -50 : 0))) ? e.offsetWidth * r.xPercent / 100 : 0) + o,
    r.y = f - ((r.yPercent = f && (!n && r.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-f) ? -50 : 0))) ? e.offsetHeight * r.yPercent / 100 : 0) + o,
    r.z = h + o,
    r.scaleX = Le(d),
    r.scaleY = Le(_),
    r.rotation = Le(p) + a,
    r.rotationX = Le(m) + a,
    r.rotationY = Le(v) + a,
    r.skewX = D + a,
    r.skewY = g + a,
    r.transformPerspective = y + o,
    (r.zOrigin = parseFloat(u.split(" ")[2]) || !n && r.zOrigin || 0) && (s[at] = zi(u)),
    r.xOffset = r.yOffset = 0,
    r.force3D = mt.force3D,
    r.renderTransform = r.svg ? kC : ip ? cp : SC,
    r.uncache = 0,
    r
}, zi = function(e) {
    return (e = e.split(" "))[0] + " " + e[1]
}, zo = function(e, n, r) {
    var s = Ge(n);
    return Le(parseFloat(n) + parseFloat(Mn(e, "x", r + "px", s))) + s
}, SC = function(e, n) {
    n.z = "0px",
    n.rotationY = n.rotationX = "0deg",
    n.force3D = 0,
    cp(e, n)
}, jn = "0deg", es = "0px", Vn = ") ", cp = function(e, n) {
    var r = n || this
      , s = r.xPercent
      , i = r.yPercent
      , o = r.x
      , a = r.y
      , l = r.z
      , u = r.rotation
      , c = r.rotationY
      , f = r.rotationX
      , h = r.skewX
      , d = r.skewY
      , _ = r.scaleX
      , p = r.scaleY
      , m = r.transformPerspective
      , v = r.force3D
      , D = r.target
      , g = r.zOrigin
      , y = ""
      , C = v === "auto" && e && e !== 1 || v === !0;
    if (g && (f !== jn || c !== jn)) {
        var E = parseFloat(c) * Fr, S = Math.sin(E), T = Math.cos(E), x;
        E = parseFloat(f) * Fr,
        x = Math.cos(E),
        o = zo(D, o, S * x * -g),
        a = zo(D, a, -Math.sin(E) * -g),
        l = zo(D, l, T * x * -g + g)
    }
    m !== es && (y += "perspective(" + m + Vn),
    (s || i) && (y += "translate(" + s + "%, " + i + "%) "),
    (C || o !== es || a !== es || l !== es) && (y += l !== es || C ? "translate3d(" + o + ", " + a + ", " + l + ") " : "translate(" + o + ", " + a + Vn),
    u !== jn && (y += "rotate(" + u + Vn),
    c !== jn && (y += "rotateY(" + c + Vn),
    f !== jn && (y += "rotateX(" + f + Vn),
    (h !== jn || d !== jn) && (y += "skew(" + h + ", " + d + Vn),
    (_ !== 1 || p !== 1) && (y += "scale(" + _ + ", " + p + Vn),
    D.style[Ae] = y || "translate(0, 0)"
}, kC = function(e, n) {
    var r = n || this, s = r.xPercent, i = r.yPercent, o = r.x, a = r.y, l = r.rotation, u = r.skewX, c = r.skewY, f = r.scaleX, h = r.scaleY, d = r.target, _ = r.xOrigin, p = r.yOrigin, m = r.xOffset, v = r.yOffset, D = r.forceCSS, g = parseFloat(o), y = parseFloat(a), C, E, S, T, x;
    l = parseFloat(l),
    u = parseFloat(u),
    c = parseFloat(c),
    c && (c = parseFloat(c),
    u += c,
    l += c),
    l || u ? (l *= Fr,
    u *= Fr,
    C = Math.cos(l) * f,
    E = Math.sin(l) * f,
    S = Math.sin(l - u) * -h,
    T = Math.cos(l - u) * h,
    u && (c *= Fr,
    x = Math.tan(u - c),
    x = Math.sqrt(1 + x * x),
    S *= x,
    T *= x,
    c && (x = Math.tan(c),
    x = Math.sqrt(1 + x * x),
    C *= x,
    E *= x)),
    C = Le(C),
    E = Le(E),
    S = Le(S),
    T = Le(T)) : (C = f,
    T = h,
    E = S = 0),
    (g && !~(o + "").indexOf("px") || y && !~(a + "").indexOf("px")) && (g = Mn(d, "x", o, "px"),
    y = Mn(d, "y", a, "px")),
    (_ || p || m || v) && (g = Le(g + _ - (_ * C + p * S) + m),
    y = Le(y + p - (_ * E + p * T) + v)),
    (s || i) && (x = d.getBBox(),
    g = Le(g + s / 100 * x.width),
    y = Le(y + i / 100 * x.height)),
    x = "matrix(" + C + "," + E + "," + S + "," + T + "," + g + "," + y + ")",
    d.setAttribute("transform", x),
    D && (d.style[Ae] = x)
}, RC = function(e, n, r, s, i) {
    var o = 360, a = ze(i), l = parseFloat(i) * (a && ~i.indexOf("rad") ? zn : 1), u = l - s, c = s + u + "deg", f, h;
    return a && (f = i.split("_")[1],
    f === "short" && (u %= o,
    u !== u % (o / 2) && (u += u < 0 ? o : -o)),
    f === "cw" && u < 0 ? u = (u + o * Mc) % o - ~~(u / o) * o : f === "ccw" && u > 0 && (u = (u - o * Mc) % o - ~~(u / o) * o)),
    e._pt = h = new ot(e._pt,n,r,s,u,hC),
    h.e = c,
    h.u = "deg",
    e._props.push(r),
    h
}, Hc = function(e, n) {
    for (var r in n)
        e[r] = n[r];
    return e
}, AC = function(e, n, r) {
    var s = Hc({}, r._gsap), i = "perspective,force3D,transformOrigin,svgOrigin", o = r.style, a, l, u, c, f, h, d, _;
    s.svg ? (u = r.getAttribute("transform"),
    r.setAttribute("transform", ""),
    o[Ae] = n,
    a = $s(r, 1),
    ar(r, Ae),
    r.setAttribute("transform", u)) : (u = getComputedStyle(r)[Ae],
    o[Ae] = n,
    a = $s(r, 1),
    o[Ae] = u);
    for (l in ln)
        u = s[l],
        c = a[l],
        u !== c && i.indexOf(l) < 0 && (d = Ge(u),
        _ = Ge(c),
        f = d !== _ ? Mn(r, l, u, _) : parseFloat(u),
        h = parseFloat(c),
        e._pt = new ot(e._pt,a,l,f,h - f,ja),
        e._pt.u = _ || 0,
        e._props.push(l));
    Hc(a, s)
};
it("padding,margin,Width,Radius", function(t, e) {
    var n = "Top"
      , r = "Right"
      , s = "Bottom"
      , i = "Left"
      , o = (e < 3 ? [n, r, s, i] : [n + i, n + r, s + r, s + i]).map(function(a) {
        return e < 2 ? t + a : "border" + a + t
    });
    Ui[e > 1 ? "border" + t : t] = function(a, l, u, c, f) {
        var h, d;
        if (arguments.length < 4)
            return h = o.map(function(_) {
                return en(a, _, u)
            }),
            d = h.join(" "),
            d.split(h[0]).length === 5 ? h[0] : d;
        h = (c + "").split(" "),
        d = {},
        o.forEach(function(_, p) {
            return d[_] = h[p] = h[p] || h[(p - 1) / 2 | 0]
        }),
        a.init(l, d, f)
    }
});
var fp = {
    name: "css",
    register: Ua,
    targetTest: function(e) {
        return e.style && e.nodeType
    },
    init: function(e, n, r, s, i) {
        var o = this._props, a = e.style, l = r.vars.startAt, u, c, f, h, d, _, p, m, v, D, g, y, C, E, S, T;
        Ul || Ua(),
        this.styles = this.styles || sp(e),
        T = this.styles.props,
        this.tween = r;
        for (p in n)
            if (p !== "autoRound" && (c = n[p],
            !(dt[p] && Kd(p, n, r, s, e, i)))) {
                if (d = typeof c,
                _ = Ui[p],
                d === "function" && (c = c.call(r, s, e, i),
                d = typeof c),
                d === "string" && ~c.indexOf("random(") && (c = Os(c)),
                _)
                    _(this, e, p, c, r) && (S = 1);
                else if (p.substr(0, 2) === "--")
                    u = (getComputedStyle(e).getPropertyValue(p) + "").trim(),
                    c += "",
                    Rn.lastIndex = 0,
                    Rn.test(u) || (m = Ge(u),
                    v = Ge(c)),
                    v ? m !== v && (u = Mn(e, p, u, v) + v) : m && (c += m),
                    this.add(a, "setProperty", u, c, s, i, 0, 0, p),
                    o.push(p),
                    T.push(p, 0, a[p]);
                else if (d !== "undefined") {
                    if (l && p in l ? (u = typeof l[p] == "function" ? l[p].call(r, s, e, i) : l[p],
                    ze(u) && ~u.indexOf("random(") && (u = Os(u)),
                    Ge(u + "") || u === "auto" || (u += mt.units[p] || Ge(en(e, p)) || ""),
                    (u + "").charAt(1) === "=" && (u = en(e, p))) : u = en(e, p),
                    h = parseFloat(u),
                    D = d === "string" && c.charAt(1) === "=" && c.substr(0, 2),
                    D && (c = c.substr(2)),
                    f = parseFloat(c),
                    p in Wt && (p === "autoAlpha" && (h === 1 && en(e, "visibility") === "hidden" && f && (h = 0),
                    T.push("visibility", 0, a.visibility),
                    Tn(this, a, "visibility", h ? "inherit" : "hidden", f ? "inherit" : "hidden", !f)),
                    p !== "scale" && p !== "transform" && (p = Wt[p],
                    ~p.indexOf(",") && (p = p.split(",")[0]))),
                    g = p in ln,
                    g) {
                        if (this.styles.save(p),
                        y || (C = e._gsap,
                        C.renderTransform && !n.parseTransform || $s(e, n.parseTransform),
                        E = n.smoothOrigin !== !1 && C.smooth,
                        y = this._pt = new ot(this._pt,a,Ae,0,1,C.renderTransform,C,0,-1),
                        y.dep = 1),
                        p === "scale")
                            this._pt = new ot(this._pt,C,"scaleY",C.scaleY,(D ? Rr(C.scaleY, D + f) : f) - C.scaleY || 0,ja),
                            this._pt.u = 0,
                            o.push("scaleY", p),
                            p += "X";
                        else if (p === "transformOrigin") {
                            T.push(at, 0, a[at]),
                            c = TC(c),
                            C.svg ? za(e, c, 0, E, 0, this) : (v = parseFloat(c.split(" ")[2]) || 0,
                            v !== C.zOrigin && Tn(this, C, "zOrigin", C.zOrigin, v),
                            Tn(this, a, p, zi(u), zi(c)));
                            continue
                        } else if (p === "svgOrigin") {
                            za(e, c, 1, E, 0, this);
                            continue
                        } else if (p in lp) {
                            RC(this, C, p, h, D ? Rr(h, D + c) : c);
                            continue
                        } else if (p === "smoothOrigin") {
                            Tn(this, C, "smooth", C.smooth, c);
                            continue
                        } else if (p === "force3D") {
                            C[p] = c;
                            continue
                        } else if (p === "transform") {
                            AC(this, c, e);
                            continue
                        }
                    } else
                        p in a || (p = zr(p) || p);
                    if (g || (f || f === 0) && (h || h === 0) && !fC.test(c) && p in a)
                        m = (u + "").substr((h + "").length),
                        f || (f = 0),
                        v = Ge(c) || (p in mt.units ? mt.units[p] : m),
                        m !== v && (h = Mn(e, p, u, v)),
                        this._pt = new ot(this._pt,g ? C : a,p,h,(D ? Rr(h, D + f) : f) - h,!g && (v === "px" || p === "zIndex") && n.autoRound !== !1 ? pC : ja),
                        this._pt.u = v || 0,
                        m !== v && v !== "%" && (this._pt.b = u,
                        this._pt.r = dC);
                    else if (p in a)
                        EC.call(this, e, p, u, D ? D + c : c);
                    else if (p in e)
                        this.add(e, p, u || e[p], D ? D + c : c, s, i);
                    else if (p !== "parseTransform") {
                        Ml(p, c);
                        continue
                    }
                    g || (p in a ? T.push(p, 0, a[p]) : T.push(p, 1, u || e[p])),
                    o.push(p)
                }
            }
        S && Zd(this)
    },
    render: function(e, n) {
        if (n.tween._time || !zl())
            for (var r = n._pt; r; )
                r.r(e, r.d),
                r = r._next;
        else
            n.styles.revert()
    },
    get: en,
    aliases: Wt,
    getSetter: function(e, n, r) {
        var s = Wt[n];
        return s && s.indexOf(",") < 0 && (n = s),
        n in ln && n !== at && (e._gsap.x || en(e, "x")) ? r && Oc === r ? n === "scale" ? yC : mC : (Oc = r || {}) && (n === "scale" ? DC : vC) : e.style && !Fl(e.style[n]) ? _C : ~n.indexOf("-") ? gC : jl(e, n)
    },
    core: {
        _removeProperty: ar,
        _getMatrix: ql
    }
};
ut.utils.checkPrefix = zr;
ut.core.getStyleSaver = sp;
(function(t, e, n, r) {
    var s = it(t + "," + e + "," + n, function(i) {
        ln[i] = 1
    });
    it(e, function(i) {
        mt.units[i] = "deg",
        lp[i] = 1
    }),
    Wt[s[13]] = t + "," + e,
    it(r, function(i) {
        var o = i.split(":");
        Wt[o[1]] = s[o[0]]
    })
}
)("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
it("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
    mt.units[t] = "px"
});
ut.registerPlugin(fp);
var Ce = ut.registerPlugin(fp) || ut;
Ce.core.Tween;
const FC = {
    key: 0,
    class: "circle"
}
  , PC = Je({
    __name: "BaseButton",
    props: {
        hasPlus: {
            type: Boolean,
            default: !1
        },
        href: {},
        label: {},
        theme: {
            default: Ot.Orange
        },
        type: {}
    },
    setup(t) {
        const e = t
          , n = ae(null)
          , r = ae(null)
          , s = ae(null)
          , i = ae();
        let o;
        const a = qe( () => !!e.href)
          , l = new Map([["NuxtLink", ad], ["button", "button"]]);
        sn( () => {
            u()
        }
        );
        const u = () => {
            o && o.kill(),
            i.value && clearInterval(i.value)
        }
          , c = () => {
            n.value && r.value && (o = Ce.timeline({
                paused: !0
            }),
            o.addLabel("start").to(n.value, {
                y: -50,
                duration: .3,
                ease: "power3.in"
            }, "start").fromTo(r.value, {
                autoAlpha: 1,
                y: 50
            }, {
                y: 0,
                duration: .3,
                ease: "power3.out"
            }, "start+=0.15").set(n.value, {
                y: 0
            }).set(r.value, {
                autoAlpha: 0,
                y: 50
            }),
            e.hasPlus && s.value && (o.to(s.value, {
                duration: .3,
                ease: "power3.inOut",
                rotate: "+=90"
            }, "start"),
            i.value = setInterval( () => {
                Ce.to(s.value, {
                    duration: .3,
                    ease: "power3.inOut",
                    rotate: "+=90"
                })
            }
            , 1e3)),
            o.play())
        }
          , f = () => {
            if (u(),
            Ce.set(n.value, {
                y: 0
            }),
            Ce.set(r.value, {
                y: 50
            }),
            e.hasPlus && s.value) {
                const h = Ce.getProperty(s.value, "rotate")
                  , d = Math.ceil(h / 90);
                Ce.to(s.value, {
                    duration: .3,
                    ease: "power3.inOut",
                    rotate: 90 * d
                })
            }
        }
        ;
        return (h, d) => {
            const _ = kl;
            return Te(),
            Mt(us(q(l).get(q(a) ? "NuxtLink" : "button")), no({
                class: ["base-button", h.theme === q(Ot).OffWhite && "off-white", h.theme === q(Ot).White && "white"],
                disabled: h.disable
            }, e, {
                onMouseenter: c,
                onMouseleave: f
            }), {
                default: Pn( () => [h.hasPlus ? (Te(),
                _t("span", {
                    key: 1,
                    ref_key: "plusIconRef",
                    ref: s,
                    class: "plus"
                }, [te(_, {
                    name: "Plus"
                })], 512)) : (Te(),
                _t("span", FC, "●")), se("span", {
                    ref_key: "firstLabelRef",
                    ref: n,
                    class: "label"
                }, qt(h.label), 513), se("span", {
                    ref_key: "secondLabelRef",
                    ref: r,
                    "aria-label": "hidden",
                    class: "label"
                }, qt(h.label), 513)]),
                _: 1
            }, 16, ["class", "disabled"])
        }
    }
})
  , Nn = (t, e) => {
    const n = t.__vccOpts || t;
    for (const [r,s] of e)
        n[r] = s;
    return n
}
  , hp = Nn(PC, [["__scopeId", "data-v-f6be74cd"]])
  , OC = {}
  , dp = t => (ol("data-v-bb8c1073"),
t = t(),
al(),
t)
  , MC = {
    "aria-label": "toggle menu",
    class: "burger",
    type: "button"
}
  , LC = dp( () => se("span", null, null, -1))
  , IC = dp( () => se("span", null, null, -1))
  , $C = [LC, IC];
function NC(t, e) {
    return Te(),
    _t("button", MC, $C)
}
const BC = Nn(OC, [["render", NC], ["__scopeId", "data-v-bb8c1073"]])
  , HC = t => {
    const {$smoothScroll: e} = ge()
      , n = document.getElementById(t);
    n && e.scrollTo(n, {
        offset: 1
    })
}
  , Ks = QD("app", {
    state: () => ({
        activeModal: null,
        contextualMenuOpen: !1,
        contextualMenuData: null,
        menuOpen: !1,
        theme: Ot.LightGrey,
        windowSize: {
            width: 0,
            height: 0
        }
    }),
    actions: {
        setActiveModal(t) {
            this.activeModal = t
        },
        setContextualMenuData(t) {
            this.contextualMenuData = t
        },
        setContextualMenuOpen(t) {
            this.contextualMenuOpen = t
        },
        setMenuOpen(t) {
            this.menuOpen = t
        },
        setTheme(t) {
            this.theme = t
        },
        setWindowSize(t) {
            this.windowSize = t
        }
    }
})
  , jC = t => (ol("data-v-1c5af07a"),
t = t(),
al(),
t)
  , VC = {
    key: 0,
    class: "contextual-bar"
}
  , UC = {
    class: "title-wrapper"
}
  , zC = jC( () => se("div", {
    class: "break"
}, null, -1))
  , WC = {
    class: "jump-links"
}
  , qC = ["onClick"]
  , KC = {
    class: "number"
}
  , GC = Je({
    __name: "TopNav",
    setup(t) {
        const e = uo()
          , {hook: n, hooks: r} = ge()
          , s = Ks()
          , {windowSize: i} = ZD(s)
          , o = ae(null)
          , a = ae(null)
          , l = ae(null)
          , u = ae(!0);
        kt( () => e.path, () => {
            e.name !== "products-slug" && s.setContextualMenuData(null),
            setTimeout( () => {
                !u.value && e.name !== "index" && (Ce.fromTo(o.value, {
                    autoAlpha: 0
                }, {
                    autoAlpha: 1,
                    duration: .3
                }),
                u.value = !0)
            }
            , 500)
        }
        ),
        cn( () => {
            n("topNav:hide", c),
            n("topNav:show", f),
            n("window:raf", _),
            Ln(h)
        }
        ),
        sn( () => {
            r.removeHook("topNav:hide", c),
            r.removeHook("topNav:show", f),
            r.removeHook("window:raf", _)
        }
        );
        const c = () => {
            Ce.fromTo(a.value, {
                autoAlpha: 1
            }, {
                autoAlpha: 0,
                duration: .15
            }),
            Ce.set(l.value.$el, {
                autoAlpha: 0
            }),
            setTimeout( () => {
                Ce.set(o.value, {
                    autoAlpha: 0
                }),
                Ce.set(l.value.$el, {
                    autoAlpha: 1
                })
            }
            , .15 * 1e3),
            u.value = !1
        }
          , f = () => {
            Ce.set(o.value, {
                autoAlpha: 1
            }),
            Ce.fromTo(a.value, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                duration: .15
            }),
            u.value = !0
        }
          , h = () => {
            o.value && u.value && Ce.fromTo(o.value, {
                autoAlpha: 0,
                y: -70
            }, {
                autoAlpha: 1,
                delay: .3,
                duration: 1,
                ease: "power3.out",
                y: 0
            })
        }
          , d = D => {
            HC(D),
            i.value.width < hd.Medium && s.setContextualMenuOpen(!1)
        }
          , _ = () => {
            const D = document.querySelector(".footer");
            if (o.value && D) {
                const {height: g, top: y} = o.value.getBoundingClientRect()
                  , {top: C} = D.getBoundingClientRect();
                C <= g + y * 2 + 100 ? u.value && (Ce.fromTo(o.value, {
                    autoAlpha: 1
                }, {
                    autoAlpha: 0,
                    duration: .3
                }),
                u.value = !1) : !u.value && window.scrollY > i.value.height && (Ce.fromTo(o.value, {
                    autoAlpha: 0
                }, {
                    autoAlpha: 1,
                    duration: .3
                }),
                u.value = !0)
            }
        }
          , p = D => {
            Ce.fromTo(D, {
                autoAlpha: 0,
                y: -70
            }, {
                autoAlpha: 1,
                delay: .7,
                duration: .7,
                ease: "power3.out",
                y: 0
            })
        }
          , m = (D, g) => {
            Ce.to(D, {
                autoAlpha: 0,
                duration: .5,
                onComplete: g
            })
        }
          , v = new Map([[Ot.Black, "black"], [Ot.BurnedOrange, "orange"], [Ot.LightGrey, "light-grey"]]);
        return (D, g) => {
            const y = kl
              , C = ad
              , E = hp;
            return Te(),
            _t("nav", {
                ref_key: "elRef",
                ref: o,
                class: rr(["top-nav", q(v).get(q(s).theme)])
            }, [se("div", {
                ref_key: "logoRef",
                ref: a,
                class: "main"
            }, [te(C, {
                "aria-label": "Navigate to homepage",
                class: "logo",
                to: "/"
            }, {
                default: Pn( () => [te(y, {
                    name: "Logo"
                })]),
                _: 1
            })], 512), te(q(BC), {
                ref_key: "burgerRef",
                ref: l,
                class: "burger",
                onClick: g[0] || (g[0] = S => q(s).setMenuOpen(!q(s).menuOpen))
            }, null, 512), se("div", {
                class: rr(["contextual", q(s).contextualMenuOpen && "open"])
            }, [te(Us, {
                name: "contextualMenuTransition",
                css: !1,
                onEnter: p,
                onLeave: m
            }, {
                default: Pn( () => {
                    var S;
                    return [q(s).contextualMenuData ? (Te(),
                    _t("div", VC, [se("div", UC, [se("button", {
                        class: "title",
                        type: "button",
                        onClick: g[1] || (g[1] = T => q(s).setContextualMenuOpen(!q(s).contextualMenuOpen))
                    }, [te(y, {
                        class: "chevron",
                        name: "Chevron"
                    }), ks(" " + qt(((S = q(s).contextualMenuData) == null ? void 0 : S.title) ?? "") + " ", 1), te(y, {
                        class: "trademark",
                        name: "Trademark"
                    })])]), te(E, {
                        class: "button",
                        disabled: !0,
                        "has-plus": !0,
                        label: "Unavailable",
                        theme: q(s).theme === q(Ot).BurnedOrange ? q(Ot).OffWhite : q(Ot).Orange,
                        onClick: g[2] || (g[2] = T => q(s).setActiveModal(q(Gn).Order))
                    }, null, 8, ["theme"]), zC, ns(se("div", WC, [(Te(!0),
                    _t(He, null, U_(q(s).contextualMenuData.sections, (T, x) => (Te(),
                    _t("button", {
                        key: `top-nav-section-${T}`,
                        class: "jump-link",
                        onClick: k => d(T)
                    }, [se("span", null, [se("span", KC, qt(x + 1) + ".0", 1), ks(" " + qt(T), 1)]), te(y, {
                        class: "arrow",
                        name: "ArrowRight"
                    })], 8, qC))), 128))], 512), [[is, q(s).contextualMenuOpen && q(s).contextualMenuData.sections.length > 0]])])) : dg("", !0)]
                }
                ),
                _: 1
            })], 2)], 2)
        }
    }
})
  , pp = Nn(GC, [["__scopeId", "data-v-1c5af07a"]])
  , YC = Je({
    props: {
        vnode: {
            type: Object,
            required: !0
        },
        route: {
            type: Object,
            required: !0
        },
        vnodeRef: Object,
        renderKey: String,
        trackRootNodes: Boolean
    },
    setup(t) {
        const e = t.renderKey
          , n = t.route
          , r = {};
        for (const s in t.route)
            Object.defineProperty(r, s, {
                get: () => e === t.renderKey ? t.route[s] : n[s]
            });
        return Sr(oo, Bs(r)),
        () => It(t.vnode, {
            ref: t.vnodeRef
        })
    }
})
  , XC = Je({
    name: "NuxtPage",
    inheritAttrs: !1,
    props: {
        name: {
            type: String
        },
        transition: {
            type: [Boolean, Object],
            default: void 0
        },
        keepalive: {
            type: [Boolean, Object],
            default: void 0
        },
        route: {
            type: Object
        },
        pageKey: {
            type: [Function, String],
            default: null
        }
    },
    setup(t, {attrs: e, expose: n}) {
        const r = ge()
          , s = ae()
          , i = et(oo, null);
        let o;
        n({
            pageRef: s
        });
        const a = et(u0, null);
        let l;
        const u = r.deferHydration();
        return t.pageKey && kt( () => t.pageKey, (c, f) => {
            c !== f && r.callHook("page:loading:start")
        }
        ),
        () => It(ed, {
            name: t.name,
            route: t.route,
            ...e
        }, {
            default: c => {
                const f = QC(i, c.route, c.Component)
                  , h = i && i.matched.length === c.route.matched.length;
                if (!c.Component) {
                    if (l && !h)
                        return l;
                    u();
                    return
                }
                if (l && a && !a.isCurrent(c.route))
                    return l;
                if (f && i && (!a || a != null && a.isCurrent(i)))
                    return h ? l : null;
                const d = wa(c, t.pageKey);
                !r.isHydrating && !ZC(i, c.route, c.Component) && o === d && r.callHook("page:loading:end"),
                o = d;
                const _ = !!(t.transition ?? c.route.meta.pageTransition ?? Da)
                  , p = _ && JC([t.transition, c.route.meta.pageTransition, Da, {
                    onAfterLeave: () => {
                        r.callHook("page:transition:finish", c.Component)
                    }
                }].filter(Boolean))
                  , m = t.keepalive ?? c.route.meta.keepalive ?? m0;
                return l = OD(Us, _ && p, PD(m, It(kf, {
                    suspensible: !0,
                    onPending: () => r.callHook("page:start", c.Component),
                    onResolve: () => {
                        Ln( () => r.callHook("page:finish", c.Component).then( () => r.callHook("page:loading:end")).finally(u))
                    }
                }, {
                    default: () => {
                        const v = It(YC, {
                            key: d || void 0,
                            vnode: c.Component,
                            route: c.route,
                            renderKey: d || void 0,
                            trackRootNodes: _,
                            vnodeRef: s
                        });
                        return m && (v.type.name = c.Component.type.name || c.Component.type.__name || "RouteProvider"),
                        v
                    }
                }))).default(),
                l
            }
        })
    }
});
function JC(t) {
    const e = t.map(n => ({
        ...n,
        onAfterLeave: n.onAfterLeave ? Tl(n.onAfterLeave) : void 0
    }));
    return Lh(...e)
}
function QC(t, e, n) {
    if (!t)
        return !1;
    const r = e.matched.findIndex(s => {
        var i;
        return ((i = s.components) == null ? void 0 : i.default) === (n == null ? void 0 : n.type)
    }
    );
    return !r || r === -1 ? !1 : e.matched.slice(0, r).some( (s, i) => {
        var o, a, l;
        return ((o = s.components) == null ? void 0 : o.default) !== ((l = (a = t.matched[i]) == null ? void 0 : a.components) == null ? void 0 : l.default)
    }
    ) || n && wa({
        route: e,
        Component: n
    }) !== wa({
        route: t,
        Component: n
    })
}
function ZC(t, e, n) {
    return t ? e.matched.findIndex(s => {
        var i;
        return ((i = s.components) == null ? void 0 : i.default) === (n == null ? void 0 : n.type)
    }
    ) < e.matched.length - 1 : !1
}
const ew = {
    class: "modal"
}
  , tw = {
    class: "scroll"
}
  , nw = {
    class: "head"
}
  , rw = {
    class: "title"
}
  , sw = {
    class: "subtitle"
}
  , iw = Je({
    __name: "Modal",
    props: {
        onBack: {
            type: Function
        },
        onClose: {
            type: Function
        },
        subtitle: {},
        title: {}
    },
    setup(t) {
        const e = t
          , n = ae(null)
          , r = ae(null)
          , s = ae(!1)
          , i = ae(!1);
        cn( () => {
            window.addEventListener("keyup", a)
        }
        ),
        sn( () => {
            window.removeEventListener("keyup", a)
        }
        );
        const o = () => {
            i.value || e.onClose()
        }
          , a = ({key: c}) => {
            s.value && c === "Escape" && o()
        }
          , l = () => {
            s.value = !0,
            i.value = !0,
            n.value && Ce.fromTo(n.value, {
                autoAlpha: 0,
                y: 50
            }, {
                autoAlpha: 1,
                duration: 1,
                ease: "power4.inOut",
                y: 0,
                onComplete: () => {
                    i.value = !1
                }
            }),
            r.value && Ce.fromTo(r.value, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                duration: 1,
                ease: "power4.inOut"
            })
        }
          , u = (c, f) => {
            s.value = !1,
            i.value = !0,
            n.value && Ce.fromTo(n.value, {
                autoAlpha: 1,
                y: 0
            }, {
                autoAlpha: 0,
                duration: 1,
                ease: "power4.inOut",
                y: 50,
                onComplete: () => {
                    i.value = !1,
                    f()
                }
            }),
            r.value && Ce.fromTo(r.value, {
                autoAlpha: 1
            }, {
                autoAlpha: 0,
                duration: 1,
                ease: "power4.inOut"
            })
        }
        ;
        return (c, f) => {
            const h = kl;
            return Te(),
            Mt(Us, {
                name: "modalTransition",
                css: !1,
                onEnter: l,
                onLeave: u
            }, {
                default: Pn( () => [se("aside", ew, [se("div", {
                    ref_key: "contentRef",
                    ref: n,
                    class: "content",
                    "data-lenis-prevent": ""
                }, [se("div", tw, [se("div", nw, [se("div", rw, qt(c.title), 1), se("div", sw, qt(c.subtitle), 1), se("button", {
                    class: "close",
                    type: "button",
                    onClick: o
                }, [te(h, {
                    name: "Close"
                })])]), Hf(c.$slots, "default", {}, void 0, !0)])], 512), se("div", {
                    ref_key: "backgroundRef",
                    ref: r,
                    class: "background",
                    onClick: o
                }, null, 512)])]),
                _: 3
            })
        }
    }
})
  , ow = Nn(iw, [["__scopeId", "data-v-d0581897"]]);
function _p() {
    const t = fr().public.gtag
      , e = ud(t);
    let n;
    n = Sa;
    const r = ({id: o, hasConsent: a=!0}) => {
        {
            const l = [...e];
            let u = l.find(c => c.id === o);
            if (u || (o ? (u = {
                id: o
            },
            l.unshift(u)) : u = l[0]),
            !u) {
                console.error("[nuxt-gtag] Missing Google tag ID");
                return
            }
            if (!a) {
                _v(u.id);
                return
            }
            if (window.dataLayer || ld({
                tags: l
            }),
            window.dataLayer.length > 2) {
                gv(u.id);
                return
            }
            Fh({
                script: [{
                    src: io(t.url, {
                        id: u.id
                    })
                }]
            })
        }
    }
    ;
    return {
        gtag: n,
        setConsent: r,
        grantConsent: o => {
            r({
                id: o,
                hasConsent: !0
            })
        }
        ,
        revokeConsent: o => {
            r({
                id: o,
                hasConsent: !1
            })
        }
    }
}
const aw = ["innerHTML"]
  , lw = Je({
    __name: "CookiePolicyModal",
    props: {
        subtitle: {},
        title: {},
        copy: {},
        onBack: {
            type: Function
        },
        onClose: {
            type: Function
        }
    },
    setup(t) {
        const e = t
          , n = qe( () => rb(e.copy ?? {}))
          , {grantConsent: r, revokeConsent: s} = _p()
          , i = Ks()
          , o = () => {
            r(),
            i.setActiveModal(null)
        }
          , a = () => {
            s(),
            i.setActiveModal(null)
        }
        ;
        return (l, u) => {
            const c = ow;
            return Te(),
            Mt(c, no({
                class: ["cookie-policy-modal"]
            }, e), {
                default: Pn( () => [se("div", {
                    class: "buttons-wrapper"
                }, [se("div", {
                    class: "buttons-wrapper"
                }, [se("button", {
                    class: "button primary",
                    type: "button",
                    onClick: o
                }, "Accept"), se("button", {
                    class: "button secondary",
                    type: "button",
                    onClick: a
                }, "Dismiss")])]), se("div", {
                    class: "copy",
                    innerHTML: q(n)
                }, null, 8, aw)]),
                _: 1
            }, 16)
        }
    }
})
  , uw = Nn(lw, [["__scopeId", "data-v-57cd41bd"]])
  , cw = Gr( () => fe( () => import("./TermsConditionsModal.78uGmbwE.js"), __vite__mapDeps([27, 28]), import.meta.url).then(t => t.default || t))
  , fw = Gr( () => fe( () => import("./PrivacyModal.1N6bqCQV.js"), __vite__mapDeps([29, 30]), import.meta.url).then(t => t.default || t))
  , hw = Je({
    __name: "Modals",
    props: {
        siteSettings: {}
    },
    setup(t) {
        const {$smoothScroll: e} = ge()
          , n = Ks();
        return kt( () => n.activeModal, () => {
            n.activeModal ? e.stop() : e.start()
        }
        ),
        (r, s) => {
            var l, u, c, f, h, d, _, p, m, v, D, g, y, C, E, S, T, x, k, $, A, N;
            const i = cw
              , o = fw
              , a = uw;
            return Te(),
            _t(He, null, [ns(te(i, {
                "on-close": () => q(n).setActiveModal(null),
                copy: ((u = (l = r.siteSettings) == null ? void 0 : l.termsConditions) == null ? void 0 : u.copy) ?? null,
                title: ((f = (c = r.siteSettings) == null ? void 0 : c.termsConditions) == null ? void 0 : f.title) ?? "Terms & Conditions"
            }, null, 8, ["on-close", "copy", "title"]), [[is, q(n).activeModal === q(Gn).TermsConditions && ((h = r.siteSettings) == null ? void 0 : h.termsConditions)]]), ns(te(i, {
                "on-close": () => q(n).setActiveModal(null),
                copy: ((_ = (d = r.siteSettings) == null ? void 0 : d.termsConditions) == null ? void 0 : _.copy) ?? null,
                "has-back-button": !0,
                title: ((m = (p = r.siteSettings) == null ? void 0 : p.termsConditions) == null ? void 0 : m.title) ?? "Terms & Conditions"
            }, null, 8, ["on-close", "copy", "title"]), [[is, q(n).activeModal === q(Gn).TermsConditionsOverlay && ((v = r.siteSettings) == null ? void 0 : v.termsConditions)]]), ns(te(o, {
                "on-close": () => q(n).setActiveModal(null),
                copy: ((g = (D = r.siteSettings) == null ? void 0 : D.privacy) == null ? void 0 : g.copy) ?? null,
                title: ((C = (y = r.siteSettings) == null ? void 0 : y.privacy) == null ? void 0 : C.title) ?? "Privacy Policy"
            }, null, 8, ["on-close", "copy", "title"]), [[is, q(n).activeModal === q(Gn).Privacy && ((E = r.siteSettings) == null ? void 0 : E.privacy)]]), ns(te(a, {
                "on-close": () => q(n).setActiveModal(null),
                copy: ((T = (S = r.siteSettings) == null ? void 0 : S.cookiePolicy) == null ? void 0 : T.copy) ?? null,
                subtitle: ((k = (x = r.siteSettings) == null ? void 0 : x.cookiePolicy) == null ? void 0 : k.subtitle) ?? null,
                title: ((A = ($ = r.siteSettings) == null ? void 0 : $.cookiePolicy) == null ? void 0 : A.title) ?? "Privacy Policy"
            }, null, 8, ["on-close", "copy", "subtitle", "title"]), [[is, q(n).activeModal === q(Gn).CookiePolicy && ((N = r.siteSettings) == null ? void 0 : N.cookiePolicy)]])], 64)
        }
    }
})
  , dw = t => {
    const e = t + "="
      , n = document.cookie.split(";");
    for (let r = 0; r < n.length; r++) {
        let s = n[r];
        for (; s.charAt(0) == " "; )
            s = s.substring(1);
        if (s.indexOf(e) == 0)
            return s.substring(e.length, s.length)
    }
    return ""
}
  , pw = Je({
    __name: "CookieConsent",
    setup(t) {
        const {grantConsent: e, revokeConsent: n} = _p()
          , r = Ks()
          , s = uo()
          , i = ae(null)
          , o = ae(!1);
        let a;
        kt( () => s.path, () => {
            o.value || (o.value = !0,
            l())
        }
        ),
        cn( () => {
            dw("_ga") || (a = setTimeout(f, 1300))
        }
        ),
        sn( () => {
            a && clearTimeout(a)
        }
        );
        const l = () => {
            o.value = !0,
            e(),
            h()
        }
          , u = () => {
            o.value = !0,
            n(),
            h()
        }
          , c = () => {
            r.setActiveModal(Gn.CookiePolicy),
            h()
        }
          , f = () => {
            i.value && Ce.fromTo(i.value, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                duration: .3
            })
        }
          , h = () => {
            i.value && Ce.to(i.value, {
                autoAlpha: 0,
                duration: .3,
                onComplete: () => {
                    i.value.remove()
                }
            })
        }
        ;
        return (d, _) => (Te(),
        _t("div", {
            ref_key: "elRef",
            ref: i,
            class: "cookie-consent"
        }, [se("p", {
            class: "copy"
        }, [ks(" Our Cookie Policy ensures your optimal browsing experience. Learn about cookies, how we use them, and your options. "), se("button", {
            "aria-label": "Open cookie policy",
            class: "link",
            type: "button",
            onClick: c
        }, " Read more ")]), se("div", {
            class: "buttons-wrapper"
        }, [se("button", {
            class: "button primary",
            type: "button",
            onClick: l
        }, "Accept"), se("button", {
            class: "button secondary",
            type: "button",
            onClick: u
        }, "Dismiss")])], 512))
    }
})
  , _w = Nn(pw, [["__scopeId", "data-v-89a46fbc"]])
  , gp = async (t, e={}, n={}) => {
    const r = `${JSON.stringify(e)}${t}`
      , s = rv(`${r}-state`)
      , i = Sl();
    if (cn( () => {
        s.value && s.value.id && eb(s.value.id, o => s.value = o, n)
    }
    ),
    !s.value) {
        const {data: o} = await i.get(`cdn/stories/${t}`, e);
        s.value = o.story
    }
    return s
}
  , i1 = t => new Intl.DateTimeFormat("en-GB",{
    year: "numeric",
    month: "numeric",
    day: "numeric"
}).format(new Date(t.replace(/-/g, "/"))).replaceAll("/", ".")
  , gw = t => new Intl.DateTimeFormat("en-GB",{
    year: "numeric"
}).format(new Date(t.replace(/-/g, "/")))
  , o1 = t => new Date().getTime() - new Date(t.replace(/-/g, "/")).getTime() < 0;
ft.Early,
ft.Early,
ft.Early,
ft.Early,
ft.Mid,
ft.Mid,
ft.Mid,
ft.Mid,
ft.Late,
ft.Late,
ft.Late,
ft.Late;
const mw = t => t.includes(".mp4")
  , yw = t => (t == null ? void 0 : t.split(`
`).filter(e => !!e).map(e => `<span>${e}</span>`).join("")) ?? ""
  , jc = (t, e=0, n=!1) => {
    let r;
    return () => {
        const i = () => {
            r = null,
            n || t.apply(void 0)
        }
          , o = n && !r;
        clearTimeout(r),
        r = setTimeout(i, e),
        o && t.apply(void 0)
    }
}
  , Dw = t => {
    const {filename: e} = t || {};
    return mw(e ?? "") ? vw(t) : mp(t)
}
  , mp = t => {
    const {id: e, alt: n, filename: r, title: s} = t || {}
      , {height: i, width: o} = bw(r);
    return {
        _uid: (e == null ? void 0 : e.toString()) ?? "",
        alt: n ?? "",
        height: i,
        src: r ?? "",
        tag: s ?? "",
        type: Rl.Image,
        width: o
    }
}
  , vw = t => {
    const {id: e, alt: n, filename: r, title: s} = t || {};
    return {
        _uid: (e == null ? void 0 : e.toString()) ?? "",
        alt: n ?? "",
        poster: "",
        src: r ?? "",
        tag: s ?? "",
        type: Rl.Video
    }
}
  , bw = (t="") => {
    if (!t)
        return {
            width: 0,
            height: 0
        };
    const [e,n] = t.split("/")[5].split("x").map(Number);
    return {
        width: e,
        height: n
    }
}
  , yp = t => {
    var e, n, r, s, i, o, a, l, u, c;
    return {
        _uid: ((e = t.content) == null ? void 0 : e._uid) ?? "",
        tags: ((n = t.tag_list) == null ? void 0 : n[0]) ?? "",
        date: gw(((r = t.content) == null ? void 0 : r.date) ?? new Date),
        image: ((i = (s = t.content) == null ? void 0 : s.image) == null ? void 0 : i.filename) && Dw((o = t.content) == null ? void 0 : o.image),
        link: {
            href: `/${tn.ResearchListing}/${t.slug}`
        },
        product: ((u = (l = (a = t.content) == null ? void 0 : a.product) == null ? void 0 : l.content) == null ? void 0 : u.name) ?? "",
        title: ((c = t.content) == null ? void 0 : c.title) ?? ""
    }
}
  , Cw = t => {
    const {description: e, image: n, title: r} = t || {};
    return {
        title: r ?? "",
        description: e ?? "",
        image: mp(n)
    }
}
  , ww = ["http", "//", "www", "tel"]
  , Wo = t => {
    const {_uid: e, label: n, link: r} = t || {}
      , s = ww.find(a => {
        var l;
        return ((l = r == null ? void 0 : r.url) == null ? void 0 : l.indexOf(a)) === 0
    }
    )
      , i = (r == null ? void 0 : r.linktype) === "email";
    let o;
    return i ? o = `mailto:${r == null ? void 0 : r.url}` : s ? o = r == null ? void 0 : r.url : (o = ((r == null ? void 0 : r.cached_url) ?? (r == null ? void 0 : r.url) ?? "").replace(tn.Products, tn.ProductListing).replace(tn.Research, tn.ResearchListing).replace(tn.Homepage, ""),
    o = `/${o}${r != null && r.anchor ? `#${r.anchor}` : ""}`),
    {
        _uid: e ?? "",
        label: n ?? "",
        href: o,
        target: (r == null ? void 0 : r.target) ?? "_self"
    }
}
  , Dp = t => {
    var r, s, i, o, a, l, u, c, f, h, d, _, p, m, v, D, g, y, C, E, S, T, x, k;
    const e = (((s = (r = t.value) == null ? void 0 : r.content.menu_primary_list) == null ? void 0 : s[0].links) ?? []).map(Wo)
      , n = (((i = t.value) == null ? void 0 : i.content.social_links) ?? []).map(Wo);
    return {
        _uid: ((o = t.value) == null ? void 0 : o.content._uid) ?? "",
        cookiePolicy: {
            copy: ((a = t.value) == null ? void 0 : a.content.cookie_policy_copy) ?? null,
            subtitle: ((l = t.value) == null ? void 0 : l.content.cookie_policy_subtitle) ?? "",
            title: ((u = t.value) == null ? void 0 : u.content.cookie_policy_title) ?? ""
        },
        footer: {
            companyDetails: {
                name: (c = t.value) == null ? void 0 : c.content.company_name,
                address: (f = t.value) == null ? void 0 : f.content.company_address,
                zip: (h = t.value) == null ? void 0 : h.content.company_zip,
                city: (d = t.value) == null ? void 0 : d.content.company_city,
                country: (_ = t.value) == null ? void 0 : _.content.company_country,
                email: (p = t.value) == null ? void 0 : p.content.company_email,
                tagline: yw((m = t.value) == null ? void 0 : m.content.company_tagline)
            },
            primaryLinks: e,
            socialLinks: n
        },
        primaryLinks: e,
        quickLinks: (((D = (v = t.value) == null ? void 0 : v.content.menu_secondary_list) == null ? void 0 : D[0].links) ?? []).map(Wo),
        seo: Cw((y = (g = t.value) == null ? void 0 : g.content.seo) == null ? void 0 : y[0]),
        socialLinks: n,
        termsConditions: {
            copy: ((C = t.value) == null ? void 0 : C.content.terms_conditions_copy) ?? null,
            subtitle: ((E = t.value) == null ? void 0 : E.content.terms_conditions_subtitle) ?? "",
            teaser: ((S = t.value) == null ? void 0 : S.content.terms_conditions_teaser) ?? "",
            title: ((T = t.value) == null ? void 0 : T.content.terms_conditions_title) ?? ""
        },
        privacy: {
            copy: ((x = t.value) == null ? void 0 : x.content.privacy_copy) ?? null,
            title: ((k = t.value) == null ? void 0 : k.content.privacy_title) ?? ""
        }
    }
}
;
/*!
 * strings: 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Ew = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
function vp(t) {
    var e = t.nodeType
      , n = "";
    if (e === 1 || e === 9 || e === 11) {
        if (typeof t.textContent == "string")
            return t.textContent;
        for (t = t.firstChild; t; t = t.nextSibling)
            n += vp(t)
    } else if (e === 3 || e === 4)
        return t.nodeValue;
    return n
}
/*!
 * SplitText: 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var br, Wa, bp, ts, Cp, go, Tw = /(?:\r|\n|\t\t)/g, xw = /(?:\s\s+)/g, Sw = " ", wp = function(e) {
    br = document,
    Wa = window,
    ts = ts || e || Wa.gsap || console.warn("Please gsap.registerPlugin(SplitText)"),
    ts && (go = ts.utils.toArray,
    Cp = ts.core.context || function() {}
    ,
    bp = 1)
}, Ep = function(e) {
    return Wa.getComputedStyle(e)
}, Kl = function(e) {
    return e.position === "absolute" || e.absolute === !0
}, kw = function(e, n) {
    for (var r = n.length, s; --r > -1; )
        if (s = n[r],
        e.substr(0, s.length) === s)
            return s.length
}, Rw = " style='position:relative;display:inline-block;'", Vc = function(e, n) {
    e === void 0 && (e = "");
    var r = ~e.indexOf("++")
      , s = 1;
    return r && (e = e.split("++").join("")),
    function() {
        return "<" + n + Rw + (e ? " class='" + e + (r ? s++ : "") + "'>" : ">")
    }
}, Tp = function t(e, n, r) {
    var s = e.nodeType;
    if (s === 1 || s === 9 || s === 11)
        for (e = e.firstChild; e; e = e.nextSibling)
            t(e, n, r);
    else
        (s === 3 || s === 4) && (e.nodeValue = e.nodeValue.split(n).join(r))
}, qo = function(e, n) {
    for (var r = n.length; --r > -1; )
        e.push(n[r])
}, Uc = function(e, n, r) {
    for (var s; e && e !== n; ) {
        if (s = e._next || e.nextSibling,
        s)
            return s.textContent.charAt(0) === r;
        e = e.parentNode || e._parent
    }
}, Aw = function t(e) {
    var n = go(e.childNodes), r = n.length, s, i;
    for (s = 0; s < r; s++)
        i = n[s],
        i._isSplit ? t(i) : s && i.previousSibling && i.previousSibling.nodeType === 3 ? (i.previousSibling.nodeValue += i.nodeType === 3 ? i.nodeValue : i.firstChild.nodeValue,
        e.removeChild(i)) : i.nodeType !== 3 && (e.insertBefore(i.firstChild, i),
        e.removeChild(i))
}, Ht = function(e, n) {
    return parseFloat(n[e]) || 0
}, Fw = function(e, n, r, s, i, o, a) {
    var l = Ep(e), u = Ht("paddingLeft", l), c = -999, f = Ht("borderBottomWidth", l) + Ht("borderTopWidth", l), h = Ht("borderLeftWidth", l) + Ht("borderRightWidth", l), d = Ht("paddingTop", l) + Ht("paddingBottom", l), _ = Ht("paddingLeft", l) + Ht("paddingRight", l), p = Ht("fontSize", l) * (n.lineThreshold || .2), m = l.textAlign, v = [], D = [], g = [], y = n.wordDelimiter || " ", C = n.tag ? n.tag : n.span ? "span" : "div", E = n.type || n.split || "chars,words,lines", S = i && ~E.indexOf("lines") ? [] : null, T = ~E.indexOf("words"), x = ~E.indexOf("chars"), k = Kl(n), $ = n.linesClass, A = ~($ || "").indexOf("++"), N = [], ee = l.display === "flex", X = e.style.display, F, j, V, L, Me, ve, he, Dt, be, ce, Be, P;
    for (A && ($ = $.split("++").join("")),
    ee && (e.style.display = "block"),
    j = e.getElementsByTagName("*"),
    V = j.length,
    Me = [],
    F = 0; F < V; F++)
        Me[F] = j[F];
    if (S || k)
        for (F = 0; F < V; F++)
            L = Me[F],
            ve = L.parentNode === e,
            (ve || k || x && !T) && (P = L.offsetTop,
            S && ve && Math.abs(P - c) > p && (L.nodeName !== "BR" || F === 0) && (he = [],
            S.push(he),
            c = P),
            k && (L._x = L.offsetLeft,
            L._y = P,
            L._w = L.offsetWidth,
            L._h = L.offsetHeight),
            S && ((L._isSplit && ve || !x && ve || T && ve || !T && L.parentNode.parentNode === e && !L.parentNode._isSplit) && (he.push(L),
            L._x -= u,
            Uc(L, e, y) && (L._wordEnd = !0)),
            L.nodeName === "BR" && (L.nextSibling && L.nextSibling.nodeName === "BR" || F === 0) && S.push([])));
    for (F = 0; F < V; F++) {
        if (L = Me[F],
        ve = L.parentNode === e,
        L.nodeName === "BR") {
            S || k ? (L.parentNode && L.parentNode.removeChild(L),
            Me.splice(F--, 1),
            V--) : T || e.appendChild(L);
            continue
        }
        if (k && (be = L.style,
        !T && !ve && (L._x += L.parentNode._x,
        L._y += L.parentNode._y),
        be.left = L._x + "px",
        be.top = L._y + "px",
        be.position = "absolute",
        be.display = "block",
        be.width = L._w + 1 + "px",
        be.height = L._h + "px"),
        !T && x)
            if (L._isSplit)
                for (L._next = j = L.nextSibling,
                L.parentNode.appendChild(L); j && j.nodeType === 3 && j.textContent === " "; )
                    L._next = j.nextSibling,
                    L.parentNode.appendChild(j),
                    j = j.nextSibling;
            else
                L.parentNode._isSplit ? (L._parent = L.parentNode,
                !L.previousSibling && L.firstChild && (L.firstChild._isFirst = !0),
                L.nextSibling && L.nextSibling.textContent === " " && !L.nextSibling.nextSibling && N.push(L.nextSibling),
                L._next = L.nextSibling && L.nextSibling._isFirst ? null : L.nextSibling,
                L.parentNode.removeChild(L),
                Me.splice(F--, 1),
                V--) : ve || (P = !L.nextSibling && Uc(L.parentNode, e, y),
                L.parentNode._parent && L.parentNode._parent.appendChild(L),
                P && L.parentNode.appendChild(br.createTextNode(" ")),
                C === "span" && (L.style.display = "inline"),
                v.push(L));
        else
            L.parentNode._isSplit && !L._isSplit && L.innerHTML !== "" ? D.push(L) : x && !L._isSplit && (C === "span" && (L.style.display = "inline"),
            v.push(L))
    }
    for (F = N.length; --F > -1; )
        N[F].parentNode.removeChild(N[F]);
    if (S) {
        for (k && (ce = br.createElement(C),
        e.appendChild(ce),
        Be = ce.offsetWidth + "px",
        P = ce.offsetParent === e ? 0 : e.offsetLeft,
        e.removeChild(ce)),
        be = e.style.cssText,
        e.style.cssText = "display:none;"; e.firstChild; )
            e.removeChild(e.firstChild);
        for (Dt = y === " " && (!k || !T && !x),
        F = 0; F < S.length; F++) {
            for (he = S[F],
            ce = br.createElement(C),
            ce.style.cssText = "display:block;text-align:" + m + ";position:" + (k ? "absolute;" : "relative;"),
            $ && (ce.className = $ + (A ? F + 1 : "")),
            g.push(ce),
            V = he.length,
            j = 0; j < V; j++)
                he[j].nodeName !== "BR" && (L = he[j],
                ce.appendChild(L),
                Dt && L._wordEnd && ce.appendChild(br.createTextNode(" ")),
                k && (j === 0 && (ce.style.top = L._y + "px",
                ce.style.left = u + P + "px"),
                L.style.top = "0px",
                P && (L.style.left = L._x - P + "px")));
            V === 0 ? ce.innerHTML = "&nbsp;" : !T && !x && (Aw(ce),
            Tp(ce, " ", " ")),
            k && (ce.style.width = Be,
            ce.style.height = L._h + "px"),
            e.appendChild(ce)
        }
        e.style.cssText = be
    }
    k && (a > e.clientHeight && (e.style.height = a - d + "px",
    e.clientHeight < a && (e.style.height = a + f + "px")),
    o > e.clientWidth && (e.style.width = o - _ + "px",
    e.clientWidth < o && (e.style.width = o + h + "px"))),
    ee && (X ? e.style.display = X : e.style.removeProperty("display")),
    qo(r, v),
    T && qo(s, D),
    qo(i, g)
}, Pw = function(e, n, r, s) {
    var i = n.tag ? n.tag : n.span ? "span" : "div", o = n.type || n.split || "chars,words,lines", a = ~o.indexOf("chars"), l = Kl(n), u = n.wordDelimiter || " ", c = function(k) {
        return k === u || k === Sw && u === " "
    }, f = u !== " " ? "" : l ? "&#173; " : " ", h = "</" + i + ">", d = 1, _ = n.specialChars ? typeof n.specialChars == "function" ? n.specialChars : kw : null, p, m, v, D, g, y, C, E, S = br.createElement("div"), T = e.parentNode;
    for (T.insertBefore(S, e),
    S.textContent = e.nodeValue,
    T.removeChild(e),
    e = S,
    p = vp(e),
    C = p.indexOf("<") !== -1,
    n.reduceWhiteSpace !== !1 && (p = p.replace(xw, " ").replace(Tw, "")),
    C && (p = p.split("<").join("{{LT}}")),
    g = p.length,
    m = (p.charAt(0) === " " ? f : "") + r(),
    v = 0; v < g; v++)
        if (y = p.charAt(v),
        _ && (E = _(p.substr(v), n.specialChars)))
            y = p.substr(v, E || 1),
            m += a && y !== " " ? s() + y + "</" + i + ">" : y,
            v += E - 1;
        else if (c(y) && !c(p.charAt(v - 1)) && v) {
            for (m += d ? h : "",
            d = 0; c(p.charAt(v + 1)); )
                m += f,
                v++;
            v === g - 1 ? m += f : p.charAt(v + 1) !== ")" && (m += f + r(),
            d = 1)
        } else
            y === "{" && p.substr(v, 6) === "{{LT}}" ? (m += a ? s() + "{{LT}}</" + i + ">" : "{{LT}}",
            v += 5) : y.charCodeAt(0) >= 55296 && y.charCodeAt(0) <= 56319 || p.charCodeAt(v + 1) >= 65024 && p.charCodeAt(v + 1) <= 65039 ? (D = ((p.substr(v, 12).split(Ew) || [])[1] || "").length || 2,
            m += a && y !== " " ? s() + p.substr(v, D) + "</" + i + ">" : p.substr(v, D),
            v += D - 1) : m += a && y !== " " ? s() + y + "</" + i + ">" : y;
    e.outerHTML = m + (d ? h : ""),
    C && Tp(T, "{{LT}}", "<")
}, Ow = function t(e, n, r, s) {
    var i = go(e.childNodes), o = i.length, a = Kl(n), l, u;
    if (e.nodeType !== 3 || o > 1) {
        for (n.absolute = !1,
        l = 0; l < o; l++)
            u = i[l],
            u._next = u._isFirst = u._parent = u._wordEnd = null,
            (u.nodeType !== 3 || /\S+/.test(u.nodeValue)) && (a && u.nodeType !== 3 && Ep(u).display === "inline" && (u.style.display = "inline-block",
            u.style.position = "relative"),
            u._isSplit = !0,
            t(u, n, r, s));
        n.absolute = a,
        e._isSplit = !0;
        return
    }
    Pw(e, n, r, s)
}, Gl = function() {
    function t(n, r) {
        bp || wp(),
        this.elements = go(n),
        this.chars = [],
        this.words = [],
        this.lines = [],
        this._originals = [],
        this.vars = r || {},
        Cp(this),
        this.split(r)
    }
    var e = t.prototype;
    return e.split = function(r) {
        this.isSplit && this.revert(),
        this.vars = r = r || this.vars,
        this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
        for (var s = this.elements.length, i = r.tag ? r.tag : r.span ? "span" : "div", o = Vc(r.wordsClass, i), a = Vc(r.charsClass, i), l, u, c; --s > -1; )
            c = this.elements[s],
            this._originals[s] = {
                html: c.innerHTML,
                style: c.getAttribute("style")
            },
            l = c.clientHeight,
            u = c.clientWidth,
            Ow(c, r, o, a),
            Fw(c, r, this.chars, this.words, this.lines, u, l);
        return this.chars.reverse(),
        this.words.reverse(),
        this.lines.reverse(),
        this.isSplit = !0,
        this
    }
    ,
    e.revert = function() {
        var r = this._originals;
        if (!r)
            throw "revert() call wasn't scoped properly.";
        return this.elements.forEach(function(s, i) {
            s.innerHTML = r[i].html,
            s.setAttribute("style", r[i].style)
        }),
        this.chars = [],
        this.words = [],
        this.lines = [],
        this.isSplit = !1,
        this
    }
    ,
    t.create = function(r, s) {
        return new t(r,s)
    }
    ,
    t
}();
Gl.version = "3.12.5";
Gl.register = wp;
const Mw = Gr( () => fe( () => import("./Menu.aH2ySuw5.js"), __vite__mapDeps([31, 5, 6, 32]), import.meta.url).then(t => t.default || t))
  , Lw = Je({
    __name: "app",
    async setup(t) {
        var p, m, v, D;
        let e, n;
        Ce.registerPlugin(Gl);
        const r = ([e,n] = xs( () => gp("site-settings")),
        e = await e,
        n(),
        e)
          , s = Dp(r)
          , i = Sl()
          , o = ([e,n] = xs( () => id("related-research-articles", async () => i.get("cdn/stories", {
            resolve_relations: ["Research Article.product"],
            starts_with: `${tn.Research}/`,
            sort_by: "content.date:desc",
            per_page: 13
        }))),
        e = await e,
        n(),
        e)
          , a = ((v = (m = (p = o == null ? void 0 : o.data) == null ? void 0 : p.value) == null ? void 0 : m.data) == null ? void 0 : v.stories) ?? []
          , l = (D = a.map(yp)) == null ? void 0 : D.slice(0, 4)
          , {callHook: u} = ge()
          , c = Ks()
          , f = ae(0)
          , h = () => {
            const {innerWidth: g, innerHeight: y} = window;
            c.setWindowSize({
                width: g,
                height: y
            });
            const C = y * .01;
            document.documentElement.style.setProperty("--vh", `${C}px`)
        }
          , d = () => {
            h(),
            u("window:resize")
        }
          , _ = g => {
            u("window:raf", g),
            f.value = requestAnimationFrame(_)
        }
        ;
        return cn( () => {
            h(),
            requestAnimationFrame(_),
            window.addEventListener("resize", jc(d, 66), !1)
        }
        ),
        sn( () => {
            cancelAnimationFrame(f.value),
            window.addEventListener("resize", jc(d, 66))
        }
        ),
        (g, y) => {
            var k, $, A;
            const C = pp
              , E = Mw
              , S = XC
              , T = hw
              , x = _w;
            return Te(),
            _t(He, null, [te(C), te(E, {
                articles: q(l),
                "primary-links": (k = q(s)) == null ? void 0 : k.primaryLinks,
                "quick-links": ($ = q(s)) == null ? void 0 : $.quickLinks,
                "social-links": (A = q(s)) == null ? void 0 : A.socialLinks
            }, null, 8, ["articles", "primary-links", "quick-links", "social-links"]), te(S, {
                "article-stories": q(a),
                "site-settings": q(s)
            }, null, 8, ["article-stories", "site-settings"]), te(T, {
                "site-settings": q(s)
            }, null, 8, ["site-settings"]), te(x)], 64)
        }
    }
})
  , Iw = {}
  , $w = {
    class: "container"
};
function Nw(t, e) {
    return Te(),
    _t("div", $w, [Hf(t.$slots, "default", {}, void 0, !0)])
}
const Bw = Nn(Iw, [["render", Nw], ["__scopeId", "data-v-3bf90bcf"]])
  , Hw = Gr( () => fe( () => import("./Menu.aH2ySuw5.js"), __vite__mapDeps([31, 5, 6, 32]), import.meta.url).then(t => t.default || t))
  , jw = t => (ol("data-v-6a0afaa0"),
t = t(),
al(),
t)
  , Vw = {
    class: "error"
}
  , Uw = {
    class: "head"
}
  , zw = jw( () => se("span", {
    class: "subtitle"
}, "Error code", -1))
  , Ww = {
    class: "title"
}
  , qw = {
    class: "content"
}
  , Kw = {
    class: "label"
}
  , Gw = {
    class: "copy"
}
  , Yw = Je({
    __name: "error",
    props: {
        error: {}
    },
    async setup(t) {
        var f, h, d, _;
        let e, n;
        const r = ([e,n] = xs( () => gp("site-settings")),
        e = await e,
        n(),
        e)
          , s = Dp(r)
          , i = Sl()
          , o = ([e,n] = xs( () => id("related-research-articles", async () => i.get("cdn/stories", {
            resolve_relations: ["Research Article.product"],
            starts_with: `${tn.Research}/`,
            sort_by: "content.date:desc",
            per_page: 13
        }))),
        e = await e,
        n(),
        e)
          , l = (_ = (((d = (h = (f = o == null ? void 0 : o.data) == null ? void 0 : f.value) == null ? void 0 : h.data) == null ? void 0 : d.stories) ?? []).map(yp)) == null ? void 0 : _.slice(0, 4)
          , u = new Map([[400, "Bad request"], [401, "Unauthorized"], [403, "Forbidden"], [404, "Page not found"], [408, "Request timeout"], [503, "Service Unavailable"], [500, "Internal server error"]])
          , c = new Map([[404, "The page you are looking for has been moved or renamed."]]);
        return (p, m) => {
            var C, E, S;
            const v = pp
              , D = Hw
              , g = hp
              , y = Bw;
            return Te(),
            _t(He, null, [te(v), te(D, {
                articles: q(l),
                "primary-links": (C = q(s)) == null ? void 0 : C.primaryLinks,
                "quick-links": (E = q(s)) == null ? void 0 : E.quickLinks,
                "social-links": (S = q(s)) == null ? void 0 : S.socialLinks
            }, null, 8, ["articles", "primary-links", "quick-links", "social-links"]), se("div", Vw, [te(y, null, {
                default: Pn( () => [se("div", Uw, [zw, se("h1", Ww, qt(p.error.statusCode), 1)]), se("div", qw, [se("span", Kw, qt(q(u).get(p.error.statusCode) ?? ""), 1), se("p", Gw, qt(q(c).get(p.error.statusCode) ?? p.error.message ?? p.error.statusMessage), 1), te(g, {
                    class: "button",
                    "has-plus": !0,
                    href: "/",
                    label: "Go Home"
                })])]),
                _: 1
            })])], 64)
        }
    }
})
  , Xw = Nn(Yw, [["__scopeId", "data-v-6a0afaa0"]])
  , Jw = {
    __name: "nuxt-root",
    setup(t) {
        const e = () => null
          , n = ge()
          , r = n.deferHydration()
          , s = !1;
        Sr(oo, uo()),
        n.hooks.callHookWith(a => a.map(l => l()), "vue:setup");
        const i = ao();
        Bf( (a, l, u) => {
            if (n.hooks.callHook("vue:error", a, l, u).catch(c => console.error("[nuxt] Error in `vue:error` hook", c)),
            f0(a) && (a.fatal || a.unhandled))
                return n.runWithContext( () => yr(a)),
                !1
        }
        );
        const o = !1;
        return (a, l) => (Te(),
        Mt(kf, {
            onResolve: q(r)
        }, {
            default: Pn( () => [q(i) ? (Te(),
            Mt(q(Xw), {
                key: 0,
                error: q(i)
            }, null, 8, ["error"])) : q(o) ? (Te(),
            Mt(q(e), {
                key: 1,
                context: q(o)
            }, null, 8, ["context"])) : q(s) ? (Te(),
            Mt(us(q(s)), {
                key: 2
            })) : (Te(),
            Mt(q(Lw), {
                key: 3
            }))]),
            _: 1
        }, 8, ["onResolve"]))
    }
}
  , zc = Jw;
let Wc;
{
    let t;
    Wc = async function() {
        var o, a;
        if (t)
            return t;
        const r = !!((o = window.__NUXT__) != null && o.serverRendered || ((a = document.getElementById("__NUXT_DATA__")) == null ? void 0 : a.dataset.ssr) === "true") ? Qg(zc) : Jg(zc)
          , s = ry({
            vueApp: r
        });
        async function i(l) {
            await s.callHook("app:error", l),
            s.payload.error = s.payload.error || l
        }
        r.config.errorHandler = i;
        try {
            await iy(s, _b)
        } catch (l) {
            i(l)
        }
        try {
            await s.hooks.callHook("app:created", r),
            await s.hooks.callHook("app:beforeMount", r),
            r.mount(v0),
            await s.hooks.callHook("app:mounted", r),
            await Ln()
        } catch (l) {
            i(l)
        }
        return r.config.errorHandler === i && (r.config.errorHandler = void 0),
        r
    }
    ,
    t = Wc().catch(e => {
        throw console.error("Error while mounting app:", e),
        e
    }
    )
}
export {js as $, Dw as A, qe as B, rb as C, no as D, Zw as E, He as F, dg as G, Bw as H, rr as I, us as J, hg as K, xs as L, Rl as M, gp as N, Wo as O, hp as P, ZD as Q, ol as R, tn as S, Ot as T, al as U, hd as V, BC as W, yp as X, mp as Y, e1 as Z, kl as _, Ks as a, Ki as a0, Hf as a1, Gl as a2, t1 as a3, Gn as a4, n1 as a5, s1 as a6, Oe as a7, r1 as a8, fr as a9, Nf as aa, Gr as ab, fe as ac, Ln as ad, i1 as ae, o1 as af, gw as ag, cr as ah, $u as ai, Yr as aj, zs as ak, Lh as al, vm as am, fm as an, Fh as ao, It as ap, ow as aq, sn as b, Te as c, Je as d, Mt as e, Pn as f, ns as g, se as h, te as i, _t as j, U_ as k, ks as l, q as m, Us as n, cn as o, Ce as p, ad as q, ae as r, ge as s, qt as t, uo as u, is as v, kt as w, Nn as x, yw as y, Cw as z};
function __vite__mapDeps(indexes) {
    if (!__vite__mapDeps.viteFileDeps) {
        __vite__mapDeps.viteFileDeps = ["./ethos.KPeKMrmB.js", "./TextHero.xF4mS2MY.js", "./TextHero.4Gl0Py50.css", "./Video.vue.HUxPLu-j.js", "./useSeo.composable.ciYHrDZC.js", "./SocialLinks.SPTxo4wa.js", "./SocialLinks.TtlthVPv.css", "./useSeo.NjJVBzoO.css", "./TextHero.adaptor.dqRL3CNW.js", "./ethos.0d1bJ1nh.css", "./index.1_nLXfzH.js", "./ArticleList.he8A4ctB.js", "./ArticleList.upcb4pZg.css", "./Counter.psfJX26i.js", "./Counter.fl8yw9K1.css", "./ProductCard.qzsoy1aF.js", "./ProductCard.OdX5E_8w.css", "./Cards.adaptor.JdMwi8y7.js", "./index.BlDOlSfX.css", "./_slug_.8w6ZlVkn.js", "./_slug_.mfJf7Bk1.css", "./index.RyPHkBNt.js", "./index.-X0jCGKX.css", "./_slug_.N4QnrVBC.js", "./_slug_.hpYWGRtl.css", "./index.0gWfotEC.js", "./index.SDEVyosW.css", "./TermsConditionsModal.78uGmbwE.js", "./TermsConditionsModal.CrrEFCdV.css", "./PrivacyModal.1N6bqCQV.js", "./PrivacyModal.ts9TkpHM.css", "./Menu.aH2ySuw5.js", "./Menu.DXJwOVfI.css"]
    }
    return indexes.map( (i) => __vite__mapDeps.viteFileDeps[i])
}
