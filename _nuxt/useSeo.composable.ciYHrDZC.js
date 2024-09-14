import {
    ah as Q,
    ai as ce,
    aj as E,
    ak as X,
    al as Z,
    am as de,
    an as ue,
    a9 as fe,
    s as K,
    B as I,
    d as G,
    ao as ee,
    r as f,
    o as te,
    ap as F,
    c as M,
    e as ie,
    D as me,
    a as ge,
    Q as he,
    b as pe,
    p as A,
    j,
    G as P,
    h as u,
    i as N,
    F as ve,
    k as ye,
    f as we,
    l as U,
    t as D,
    m as z,
    a4 as H,
    _ as _e,
    q as ke,
    R as be,
    U as Re,
    x as Ae,
    u as $e
} from "./entry.msGjDD6P.js";
import {
    _ as Se
} from "./SocialLinks.SPTxo4wa.js";
async function Te(e, t) {
    return await Ie(t).catch(i => (console.error("Failed to get image meta for " + t, i + ""), {
        width: 0,
        height: 0,
        ratio: 0
    }))
}
async function Ie(e) {
    if (typeof Image > "u") throw new TypeError("Image not supported");
    return new Promise((t, o) => {
        const i = new Image;
        i.onload = () => {
            const n = {
                width: i.width,
                height: i.height,
                ratio: i.width / i.height
            };
            t(n)
        }, i.onerror = n => o(n), i.src = e
    })
}

function xe(e = "") {
    return e.split(/[?#]/).shift().split("/").pop().split(".").pop()
}

function W(e = "") {
    if (typeof e == "number") return e;
    if (typeof e == "string" && e.replace("px", "").match(/^\d+$/g)) return parseInt(e, 10)
}

function De(e = "") {
    if (e === void 0 || !e.length) return [];
    const t = new Set;
    for (const o of e.split(" ")) {
        const i = parseInt(o.replace("x", ""));
        i && t.add(i)
    }
    return Array.from(t)
}

function ze(e) {
    if (e.length === 0) throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)")
}

function Me(e) {
    const t = {};
    if (typeof e == "string")
        for (const o of e.split(/[\s,]+/).filter(i => i)) {
            const i = o.split(":");
            i.length !== 2 ? t["1px"] = i[0].trim() : t[i[0].trim()] = i[1].trim()
        } else Object.assign(t, e);
    return t
}

function We(e) {
    const t = {
            options: e
        },
        o = (n, a = {}) => oe(t, n, a),
        i = (n, a = {}, s = {}) => o(n, {
            ...s,
            modifiers: Z(a, s.modifiers || {})
        }).url;
    for (const n in e.presets) i[n] = (a, s, r) => i(a, s, {
        ...e.presets[n],
        ...r
    });
    return i.options = e, i.getImage = o, i.getMeta = (n, a) => Le(t, n, a), i.getSizes = (n, a) => Be(t, n, a), t.$img = i, i
}
async function Le(e, t, o) {
    const i = oe(e, t, {
        ...o
    });
    return typeof i.getMeta == "function" ? await i.getMeta() : await Te(e, i.url)
}

function oe(e, t, o) {
    var d, m;
    if (typeof t != "string" || t === "") throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);
    if (t.startsWith("data:")) return {
        url: t
    };
    const {
        provider: i,
        defaults: n
    } = Ce(e, o.provider || e.options.provider), a = je(e, o.preset);
    if (t = Q(t) ? t : ce(t), !i.supportsAlias)
        for (const v in e.options.alias) t.startsWith(v) && (t = E(e.options.alias[v], t.substr(v.length)));
    if (i.validateDomains && Q(t)) {
        const v = X(t).host;
        if (!e.options.domains.find(y => y === v)) return {
            url: t
        }
    }
    const s = Z(o, a, n);
    s.modifiers = {
        ...s.modifiers
    };
    const r = s.modifiers.format;
    (d = s.modifiers) != null && d.width && (s.modifiers.width = W(s.modifiers.width)), (m = s.modifiers) != null && m.height && (s.modifiers.height = W(s.modifiers.height));
    const c = i.getImage(t, s, e);
    return c.format = c.format || r || "", c
}

function Ce(e, t) {
    const o = e.options.providers[t];
    if (!o) throw new Error("Unknown provider: " + t);
    return o
}

function je(e, t) {
    if (!t) return {};
    if (!e.options.presets[t]) throw new Error("Unknown preset: " + t);
    return e.options.presets[t]
}

function Be(e, t, o) {
    var S, l, R, k, T;
    const i = W((S = o.modifiers) == null ? void 0 : S.width),
        n = W((l = o.modifiers) == null ? void 0 : l.height),
        a = Me(o.sizes),
        s = (R = o.densities) != null && R.trim() ? De(o.densities.trim()) : e.options.densities;
    ze(s);
    const r = i && n ? n / i : 0,
        c = [],
        d = [];
    if (Object.keys(a).length >= 1) {
        for (const g in a) {
            const p = Y(g, String(a[g]), n, r, e);
            if (p !== void 0) {
                c.push({
                    size: p.size,
                    screenMaxWidth: p.screenMaxWidth,
                    media: `(max-width: ${p.screenMaxWidth}px)`
                });
                for (const b of s) d.push({
                    width: p._cWidth * b,
                    src: J(e, t, o, p, b)
                })
            }
        }
        Ve(c)
    } else
        for (const g of s) {
            const p = Object.keys(a)[0];
            let b = Y(p, String(a[p]), n, r, e);
            b === void 0 && (b = {
                size: "",
                screenMaxWidth: 0,
                _cWidth: (k = o.modifiers) == null ? void 0 : k.width,
                _cHeight: (T = o.modifiers) == null ? void 0 : T.height
            }), d.push({
                width: g,
                src: J(e, t, o, b, g)
            })
        }
    Pe(d);
    const m = d[d.length - 1],
        v = c.length ? c.map(g => `${g.media?g.media+" ":""}${g.size}`).join(", ") : void 0,
        y = v ? "w" : "x",
        $ = d.map(g => `${g.src} ${g.width}${y}`).join(", ");
    return {
        sizes: v,
        srcset: $,
        src: m == null ? void 0 : m.src
    }
}

function Y(e, t, o, i, n) {
    const a = n.options.screens && n.options.screens[e] || parseInt(e),
        s = t.endsWith("vw");
    if (!s && /^\d+$/.test(t) && (t = t + "px"), !s && !t.endsWith("px")) return;
    let r = parseInt(t);
    if (!a || !r) return;
    s && (r = Math.round(r / 100 * a));
    const c = i ? Math.round(r * i) : o;
    return {
        size: t,
        screenMaxWidth: a,
        _cWidth: r,
        _cHeight: c
    }
}

function J(e, t, o, i, n) {
    return e.$img(t, {
        ...o.modifiers,
        width: i._cWidth ? i._cWidth * n : void 0,
        height: i._cHeight ? i._cHeight * n : void 0
    }, o)
}

function Ve(e) {
    var o;
    e.sort((i, n) => i.screenMaxWidth - n.screenMaxWidth);
    let t = null;
    for (let i = e.length - 1; i >= 0; i--) {
        const n = e[i];
        n.media === t && e.splice(i, 1), t = n.media
    }
    for (let i = 0; i < e.length; i++) e[i].media = ((o = e[i + 1]) == null ? void 0 : o.media) || ""
}

function Pe(e) {
    e.sort((o, i) => o.width - i.width);
    let t = null;
    for (let o = e.length - 1; o >= 0; o--) {
        const i = e[o];
        i.width === t && e.splice(o, 1), t = i.width
    }
}
const Ne = "https://a.storyblok.com",
    Oe = (e, {
        modifiers: t = {},
        baseURL: o = Ne
    } = {}) => {
        const {
            fit: i,
            smart: n,
            width: a = "0",
            height: s = "0",
            filters: r = {},
            format: c,
            quality: d
        } = t, m = e.endsWith(".svg"), v = !m && (a !== "0" || s !== "0");
        m || (c && (r.format = c + ""), d && (r.quality = d + ""));
        const y = Object.entries(r || {}).map(k => `${k[0]}(${k[1]})`).join(":"),
            $ = E(i ? `fit-${i}` : "", v ? `${a}x${s}` : "", n ? "smart" : "", y ? "filters:" + y : ""),
            {
                pathname: S
            } = X(e);
        return {
            url: de(E(S, $ ? "/m/" : "", $), o)
        }
    },
    qe = Object.freeze(Object.defineProperty({
        __proto__: null,
        getImage: Oe
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Fe = (e, {
        modifiers: t,
        baseURL: o = "/_vercel/image"
    } = {}, i) => {
        const n = Object.values(i.options.screens || {}).sort((r, c) => r - c),
            a = n[n.length - 1];
        let s = Number((t == null ? void 0 : t.width) || 0);
        return s ? n.includes(s) || (s = n.find(r => r > s) || a) : s = a, {
            url: o + "?" + ue({
                url: e,
                w: String(s),
                q: String((t == null ? void 0 : t.quality) || "100")
            })
        }
    },
    He = !0,
    Ee = Object.freeze(Object.defineProperty({
        __proto__: null,
        getImage: Fe,
        validateDomains: He
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    ne = {
        screens: {
            xs: 375,
            sm: 834,
            md: 1024,
            lg: 1280,
            xl: 1440,
            xxl: 1680,
            "2xl": 1536
        },
        presets: {},
        provider: "vercel",
        domains: [],
        alias: {},
        densities: [1, 2],
        format: ["webp"]
    };
ne.providers = {
    storyblok: {
        provider: qe,
        defaults: {
            baseURL: "https://a.storyblok.com"
        }
    },
    vercel: {
        provider: Ee,
        defaults: {}
    }
};
const se = () => {
        const e = fe(),
            t = K();
        return t.$img || t._img || (t._img = We({
            ...ne,
            nuxt: {
                baseURL: e.app.baseURL
            }
        }))
    },
    ae = {
        src: {
            type: String,
            required: !0
        },
        format: {
            type: String,
            default: void 0
        },
        quality: {
            type: [Number, String],
            default: void 0
        },
        background: {
            type: String,
            default: void 0
        },
        fit: {
            type: String,
            default: void 0
        },
        modifiers: {
            type: Object,
            default: void 0
        },
        preset: {
            type: String,
            default: void 0
        },
        provider: {
            type: String,
            default: void 0
        },
        sizes: {
            type: [Object, String],
            default: void 0
        },
        densities: {
            type: String,
            default: void 0
        },
        preload: {
            type: Boolean,
            default: void 0
        },
        width: {
            type: [String, Number],
            default: void 0
        },
        height: {
            type: [String, Number],
            default: void 0
        },
        alt: {
            type: String,
            default: void 0
        },
        referrerpolicy: {
            type: String,
            default: void 0
        },
        usemap: {
            type: String,
            default: void 0
        },
        longdesc: {
            type: String,
            default: void 0
        },
        ismap: {
            type: Boolean,
            default: void 0
        },
        loading: {
            type: String,
            default: void 0,
            validator: e => ["lazy", "eager"].includes(e)
        },
        crossorigin: {
            type: [Boolean, String],
            default: void 0,
            validator: e => ["anonymous", "use-credentials", "", !0, !1].includes(e)
        },
        decoding: {
            type: String,
            default: void 0,
            validator: e => ["async", "auto", "sync"].includes(e)
        },
        nonce: {
            type: [String],
            default: void 0
        }
    },
    Ue = e => {
        const t = I(() => ({
                provider: e.provider,
                preset: e.preset
            })),
            o = I(() => ({
                width: W(e.width),
                height: W(e.height),
                alt: e.alt,
                referrerpolicy: e.referrerpolicy,
                usemap: e.usemap,
                longdesc: e.longdesc,
                ismap: e.ismap,
                crossorigin: e.crossorigin === !0 ? "anonymous" : e.crossorigin || void 0,
                loading: e.loading,
                decoding: e.decoding,
                nonce: e.nonce
            })),
            i = se(),
            n = I(() => ({
                ...e.modifiers,
                width: W(e.width),
                height: W(e.height),
                format: e.format,
                quality: e.quality || i.options.quality,
                background: e.background,
                fit: e.fit
            }));
        return {
            options: t,
            attrs: o,
            modifiers: n
        }
    },
    Ke = {
        ...ae,
        legacyFormat: {
            type: String,
            default: null
        },
        imgAttrs: {
            type: Object,
            default: null
        }
    },
    Ge = G({
        name: "NuxtPicture",
        props: Ke,
        emits: ["load"],
        setup: (e, t) => {
            var $, S;
            const o = se(),
                i = Ue(e),
                n = I(() => xe(e.src)),
                a = I(() => ["png", "webp", "gif", "svg"].includes(n.value)),
                s = I(() => e.legacyFormat ? e.legacyFormat : a.value ? "png" : "jpeg"),
                r = I(() => {
                    var R, k;
                    const l = ((R = e.format) == null ? void 0 : R.split(",")) || (n.value === "svg" ? ["svg"] : (k = o.options.format) != null && k.length ? [...o.options.format] : ["webp"]);
                    return l[0] === "svg" ? [{
                        src: e.src
                    }] : (l.includes(s.value) && l.splice(l.indexOf(s.value), 1), l.push(s.value), l.map(T => {
                        const {
                            srcset: g,
                            sizes: p,
                            src: b
                        } = o.getSizes(e.src, {
                            ...i.options.value,
                            sizes: e.sizes || o.options.screens,
                            densities: e.densities,
                            modifiers: {
                                ...i.modifiers.value,
                                format: T
                            }
                        });
                        return {
                            src: b,
                            type: `image/${T}`,
                            sizes: p,
                            srcset: g
                        }
                    }))
                }),
                c = I(() => r.value.length - 1);
            if (e.preload) {
                const l = {
                    rel: "preload",
                    as: "image",
                    imagesrcset: r.value[0].srcset,
                    nonce: e.nonce
                };
                (S = ($ = r.value) == null ? void 0 : $[0]) != null && S.sizes && (l.imagesizes = r.value[0].sizes), ee({
                    link: [l]
                })
            }
            const d = {
                ...e.imgAttrs,
                "data-nuxt-pic": ""
            };
            for (const l in t.attrs) l in ae && !(l in d) && (d[l] = t.attrs[l]);
            const m = f(),
                y = K().isHydrating;
            return te(() => {
                m.value && (m.value.complete && y && !m.value.getAttribute("data-error") && t.emit("load", new Event("load")), m.value.onload = l => {
                    t.emit("load", l)
                })
            }), () => F("picture", null, [...r.value.slice(0, -1).map(l => F("source", {
                type: l.type,
                sizes: l.sizes,
                srcset: l.srcset
            })), F("img", {
                ref: m,
                ...i.attrs.value,
                ...d,
                src: r.value[c.value].src,
                sizes: r.value[c.value].sizes,
                srcset: r.value[c.value].srcset
            })])
        }
    }),
    mt = G({
        __name: "Image",
        props: {
            _uid: {},
            alt: {},
            height: {},
            loading: {
                default: "lazy"
            },
            preload: {
                type: Boolean,
                default: !1
            },
            src: {},
            quality: {
                default: 70
            },
            sizes: {
                default: "xs:788px sm:986px md:1234px lg:1388px xl:1620px xxl:2000px"
            },
            tag: {},
            type: {},
            width: {}
        },
        setup(e) {
            const t = e;
            return (o, i) => {
                const n = Ge;
                return M(), ie(n, me({
                    format: "webp",
                    provider: "storyblok"
                }, t), null, 16)
            }
        }
    }),
    re = e => (be("data-v-6c0e4a05"), e = e(), Re(), e),
    Qe = {
        class: "container"
    },
    Ye = ["innerHTML"],
    Je = {
        class: "primary-list-items"
    },
    Xe = {
        class: "info-title"
    },
    Ze = {
        key: 0
    },
    et = {
        key: 1
    },
    tt = {
        key: 2
    },
    it = re(() => u("div", {
        class: "info-title contact"
    }, "Contact", -1)),
    ot = ["href"],
    nt = {
        class: "copyright"
    },
    st = {
        class: "legal-links"
    },
    at = re(() => u("div", {
        class: "credits"
    }, [U(" Designed + developed with ♥︎ by "), u("a", {
        href: "https://matthew.ke",
        target: "_blank"
    }, "Matthew Herren"), U("  at  "), u("a", {
        href: "https://kazi.ke",
        target: "_blank"
    }, "KAZI")], -1)),
    rt = G({
        __name: "Footer",
        props: {
            companyDetails: {},
            hideArrow: {
                type: Boolean,
                default: !1
            },
            primaryLinks: {},
            socialLinks: {}
        },
        setup(e) {
            const {
                hooks: t
            } = K(), o = ge(), {
                windowSize: i
            } = he(o), n = f(null), a = f(!1), s = f(null), r = f(!1), c = f(null), d = f(null), m = f(null), v = f(!1), y = f(null), $ = f(null), S = f([]), l = f(!1), R = f(null), k = f(!1), T = f(null), g = f(!1), p = f(null), b = f(!1), V = f(null), le = I(() => new Date().getFullYear());
            te(() => {
                t.hook("window:raf", O)
            }), pe(() => {
                t.removeHook("window:raf", O)
            });
            const O = () => {
                var h;
                if (n.value) {
                    const {
                        bottom: x,
                        top: B
                    } = n.value.getBoundingClientRect(), q = B <= i.value.height && x >= 0;
                    if (a.value && r.value && v.value && l.value && k.value && g.value && b.value && t.removeHook("window:raf", O), q) {
                        if (s.value) {
                            const {
                                bottom: w,
                                top: _
                            } = s.value.getBoundingClientRect();
                            _ <= i.value.height && w >= 0 && !a.value && (A.fromTo(s.value, {
                                autoAlpha: 0
                            }, {
                                autoAlpha: 1,
                                duration: .6
                            }), a.value = !0)
                        }
                        if (c.value) {
                            const {
                                bottom: w,
                                top: _
                            } = c.value.getBoundingClientRect();
                            _ <= i.value.height && w >= 0 && !r.value && (A.set(c.value, {
                                autoAlpha: 1
                            }), A.fromTo(d.value, {
                                autoAlpha: 0,
                                y: 40
                            }, {
                                autoAlpha: 1,
                                duration: .9,
                                ease: "power3.inOut",
                                y: 0
                            }), A.fromTo(m.value.children, {
                                autoAlpha: 0,
                                y: 40
                            }, {
                                autoAlpha: 1,
                                duration: .9,
                                delay: .1,
                                ease: "power3.inOut",
                                stagger: .03,
                                y: 0
                            }), r.value = !0)
                        }
                        if (y.value) {
                            const {
                                bottom: w,
                                top: _
                            } = y.value.getBoundingClientRect();
                            _ <= i.value.height && w >= 0 && !v.value && (A.set(y.value, {
                                autoAlpha: 1
                            }), A.fromTo($.value, {
                                autoAlpha: 0,
                                y: 40
                            }, {
                                autoAlpha: 1,
                                delay: .15,
                                duration: .9,
                                ease: "power3.inOut",
                                y: 0
                            }), A.fromTo(S.value, {
                                autoAlpha: 0,
                                y: 40
                            }, {
                                autoAlpha: 1,
                                delay: .25,
                                duration: .9,
                                ease: "power3.inOut",
                                stagger: .03,
                                y: 0
                            }), v.value = !0)
                        }
                        if ((h = R.value) != null && h.$el) {
                            const {
                                bottom: w,
                                top: _
                            } = R.value.$el.getBoundingClientRect();
                            _ <= i.value.height - 50 && w >= 50 && !l.value && (A.fromTo(R.value.$el, {
                                autoAlpha: 0
                            }, {
                                autoAlpha: 1,
                                delay: .3,
                                duration: .6
                            }), l.value = !0)
                        }
                        if (T.value) {
                            const {
                                bottom: w,
                                top: _
                            } = T.value.getBoundingClientRect();
                            _ <= i.value.height - 50 && w >= 50 && !k.value && (A.fromTo(T.value, {
                                autoAlpha: 0
                            }, {
                                autoAlpha: 1,
                                delay: .3,
                                duration: .6
                            }), k.value = !0)
                        }
                        if (p.value) {
                            const {
                                bottom: w,
                                top: _
                            } = p.value.getBoundingClientRect();
                            _ <= i.value.height - 50 && w >= 50 && !g.value && (A.fromTo(p.value, {
                                autoAlpha: 0
                            }, {
                                autoAlpha: 1,
                                delay: .3,
                                duration: .6
                            }), g.value = !0)
                        }
                        if (V.value) {
                            const {
                                bottom: w,
                                top: _
                            } = V.value.getBoundingClientRect();
                            _ <= i.value.height - 50 && w >= 50 && !b.value && (A.fromTo(V.value, {
                                autoAlpha: 0
                            }, {
                                autoAlpha: 1,
                                delay: .3,
                                duration: .6
                            }), b.value = !0)
                        }
                    }
                }
            };
            return (h, x) => {
                const B = _e,
                    q = ke;
                return M(), j("footer", {
                    ref_key: "elRef",
                    ref: n,
                    class: "footer"
                }, [h.hideArrow ? P("", !0) : (M(), ie(B, {
                    key: 0,
                    class: "arrow",
                    name: "DoubleArrowDown"
                })), u("div", Qe, [u("div", {
                    ref_key: "headRef",
                    ref: s,
                    class: "head"
                }, [N(B, {
                    class: "name",
                    name: "DGM"
                })], 512), u("div", {
                    ref_key: "taglineWrapperRef",
                    ref: c,
                    class: "tagline-wrapper"
                }, [u("div", {
                    ref_key: "taglineTitleRef",
                    ref: d,
                    class: "content-title"
                }, "DGM", 512), u("div", {
                    ref_key: "taglineRef",
                    ref: m,
                    class: "tagline",
                    innerHTML: h.companyDetails.tagline
                }, null, 8, Ye)], 512), u("div", {
                    ref_key: "primaryListRef",
                    ref: y,
                    class: "primary-list"
                }, [u("div", {
                    ref_key: "primaryListTitleRef",
                    ref: $,
                    class: "content-title"
                }, "Menu", 512), u("ul", Je, [(M(!0), j(ve, null, ye(h.primaryLinks, L => (M(), j("li", {
                    ref_for: !0,
                    ref_key: "primaryLinkRefs",
                    ref: S,
                    key: L._uid
                }, [N(q, {
                    class: "primary-list-link",
                    to: L.href
                }, {
                    default: we(() => [U(D(L.label) + " ", 1), N(B, {
                        class: "link-arrow",
                        name: "ArrowRight"
                    })]),
                    _: 2
                }, 1032, ["to"])]))), 128))])], 512), N(z(Se), {
                    ref_key: "socialLinksRef",
                    ref: R,
                    class: "social-links",
                    links: h.socialLinks
                }, null, 8, ["links"]), u("ul", {
                    ref_key: "companyInfoRef",
                    ref: T,
                    class: "company-info"
                }, [u("li", Xe, D(h.companyDetails.name), 1), h.companyDetails.address ? (M(), j("li", Ze, D(h.companyDetails.address), 1)) : P("", !0), h.companyDetails.zip && h.companyDetails.city ? (M(), j("li", et, D(h.companyDetails.zip) + " " + D(h.companyDetails.city), 1)) : P("", !0), h.companyDetails.country ? (M(), j("li", tt, D(h.companyDetails.country), 1)) : P("", !0)], 512), u("div", {
                    ref_key: "contactInfoRef",
                    ref: p,
                    class: "contact-info"
                }, [it, u("a", {
                    href: `mailto:${h.companyDetails.email}`
                }, D(h.companyDetails.email), 9, ot), u("div", nt, "© DGM " + D(z(le)), 1)], 512), u("div", {
                    ref_key: "bottomRef",
                    ref: V,
                    class: "bottom"
                }, [u("div", st, [u("button", {
                    type: "button",
                    class: "legal-link",
                    onClick: x[0] || (x[0] = L => z(o).setActiveModal(z(H).Privacy))
                }, " Privacy "), u("button", {
                    type: "button",
                    class: "legal-link",
                    onClick: x[1] || (x[1] = L => z(o).setActiveModal(z(H).TermsConditions))
                }, " Terms & Conditions "), u("button", {
                    type: "button",
                    class: "legal-link",
                    onClick: x[2] || (x[2] = L => z(o).setActiveModal(z(H).CookiePolicy))
                }, " Cookie Policy ")]), at], 512)])], 512)
            }
        }
    }),
    gt = Ae(rt, [
        ["__scopeId", "data-v-6c0e4a05"]
    ]),
    ht = (e, t) => {
        const o = $e(),
            i = (e.description || (t == null ? void 0 : t.description)) ?? "",
            n = [{
                name: "description",
                hid: "description",
                content: i
            }, {
                property: "og:description",
                hid: "og_description",
                content: i
            }, {
                name: "twitter:description",
                hid: "twitter_description",
                content: i
            }],
            a = e.image ?? (t == null ? void 0 : t.image),
            s = [{
                property: "og:image",
                hid: "og_image",
                content: a == null ? void 0 : a.src
            }, {
                name: "twitter:image:src",
                hid: "twitter_image",
                content: a == null ? void 0 : a.src
            }],
            r = (e.title || (t == null ? void 0 : t.title)) ?? "",
            d = {
                meta: [...r ? [{
                    name: "keywords",
                    content: r
                }, {
                    property: "og:title",
                    hid: "og_title",
                    content: r
                }, {
                    name: "twitter:title",
                    hid: "twitter_title",
                    content: r
                }] : [], ...i ? n : [], ...a ? s : []],
                link: [{
                    rel: "canonical",
                    href: `https://wrk-timepieces.com${o.path}`
                }]
            };
        r && (d.title = r), ee(d)
    };
export {
    mt as _, gt as a, ht as u
};