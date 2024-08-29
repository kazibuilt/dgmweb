import {
    ae as z,
    y as E,
    O as G,
    z as q,
    A as B,
    X as J,
    d as f,
    B as O,
    c as a,
    j as r,
    t as A,
    G as w,
    h as o,
    m as n,
    C as U,
    x as k,
    M as m,
    e as D,
    D as L,
    J as H,
    F as N,
    k as R,
    E as x,
    K as X,
    i as v,
    f as Q,
    _ as W,
    q as Y,
    R as Z,
    U as ss,
    u as ts,
    L as es,
    N as os,
    S as ns
} from "./entry.msGjDD6P.js";
import {
    _ as F,
    u as as,
    a as is
} from "./useSeo.composable.ciYHrDZC.js";
import {
    _ as j
} from "./Video.vue.HUxPLu-j.js";
import {
    _ as cs
} from "./TextHero.xF4mS2MY.js";
import {
    A as ls
} from "./ArticleList.he8A4ctB.js";
import "./SocialLinks.SPTxo4wa.js";
const rs = s => {
        var c, e, _, i, $, l, h, S, y, p, u, b, C, M, I, g, d, P, V;
        const t = z(((e = (c = s.value) == null ? void 0 : c.content) == null ? void 0 : e.date) ?? new Date);
        return {
            blocks: (((i = (_ = s.value) == null ? void 0 : _.content) == null ? void 0 : i.blocks) ?? []).map(T => ({
                _uid: T._uid ?? "",
                name: T.component ?? "",
                data: _s(T)
            })),
            date: t,
            hero: {
                title: `<span>${t}</span>`,
                copy: ((l = ($ = s.value) == null ? void 0 : $.content) == null ? void 0 : l.title) ?? ""
            },
            id: ((h = s.value) == null ? void 0 : h.id) ?? "",
            label: E((y = (S = s.value) == null ? void 0 : S.content) == null ? void 0 : y.label),
            pressKit: (b = (u = (p = s.value) == null ? void 0 : p.content) == null ? void 0 : u.press_kit) != null && b[0] ? G((I = (M = (C = s.value) == null ? void 0 : C.content) == null ? void 0 : M.press_kit) == null ? void 0 : I[0]) : void 0,
            seo: q((d = (g = s.value) == null ? void 0 : g.content.seo) == null ? void 0 : d[0]),
            tags: ((V = (P = s.value) == null ? void 0 : P.tag_list) == null ? void 0 : V.join(", ")) ?? ""
        }
    },
    _s = s => {
        switch (s.component) {
            case "Article Copy":
                return ps(s);
            case "Article Single Asset":
                return us(s);
            case "Article Multi Assets":
                return ds(s)
        }
    },
    ps = s => ({
        copy: s.copy,
        title: s.title ?? ""
    }),
    us = s => ({
        asset: B(s.asset)
    }),
    ds = s => ({
        assets: s.assets.map(t => B(t))
    }),
    ms = s => s.map(t => J(t)),
    hs = {
        class: "article-copy"
    },
    ys = {
        key: 0,
        class: "title"
    },
    gs = ["innerHTML"],
    As = f({
        __name: "ArticleCopy",
        props: {
            title: {},
            copy: {}
        },
        setup(s) {
            const t = s,
                c = O(() => U(t.copy));
            return (e, _) => (a(), r("div", hs, [e.title ? (a(), r("div", ys, A(e.title), 1)) : w("", !0), o("div", {
                class: "copy",
                innerHTML: n(c)
            }, null, 8, gs)]))
        }
    }),
    vs = k(As, [
        ["__scopeId", "data-v-7d9b3c0e"]
    ]),
    fs = {
        class: "article-single-asset"
    },
    ks = f({
        __name: "ArticleSingleAsset",
        props: {
            asset: {}
        },
        setup(s) {
            const t = {
                    autoplay: !0,
                    muted: !0,
                    playsinline: !0,
                    loop: !0
                },
                c = new Map([
                    [m.Image, F],
                    [m.Video, j]
                ]);
            return (e, _) => (a(), r("div", fs, [(a(), D(H(n(c).get(e.asset.type)), L(e.asset.type === n(m).Video ? {
                ...e.asset,
                ...t
            } : e.asset, {
                key: e.asset._uid,
                preload: !0,
                class: "media"
            }), null, 16))]))
        }
    }),
    $s = k(ks, [
        ["__scopeId", "data-v-e381cf05"]
    ]),
    Ss = {
        class: "article-multi-assets"
    },
    bs = f({
        __name: "ArticleMultiAssets",
        props: {
            assets: {}
        },
        setup(s) {
            const t = {
                    autoPlay: !0,
                    muted: !0,
                    playsinline: !0,
                    loop: !0
                },
                c = new Map([
                    [m.Image, F],
                    [m.Video, j]
                ]);
            return (e, _) => (a(), r("div", Ss, [(a(!0), r(N, null, R(e.assets, i => (a(), r("div", {
                class: "media",
                key: i._uid
            }, [(a(), D(H(n(c).get(i.type)), x(X(i.type === n(m).Video ? {
                ...i,
                ...t
            } : i)), null, 16))]))), 128))]))
        }
    }),
    Cs = k(bs, [
        ["__scopeId", "data-v-9972a164"]
    ]),
    K = s => (Z("data-v-22a1babc"), s = s(), ss(), s),
    Ms = {
        class: "article-head"
    },
    Is = ["innerHTML"],
    Ls = {
        class: "list"
    },
    ws = {
        class: "list-item"
    },
    Ds = K(() => o("span", {
        class: "list-title"
    }, "Date", -1)),
    Ks = {
        class: "list-copy"
    },
    Ts = {
        class: "list-item"
    },
    Hs = K(() => o("span", {
        class: "list-title"
    }, "TAGS", -1)),
    Ps = {
        class: "list-copy"
    },
    Vs = {
        class: "list-item"
    },
    Bs = K(() => o("span", {
        class: "list-title"
    }, "ID", -1)),
    Ns = {
        class: "list-copy"
    },
    Rs = {
        key: 0,
        class: "list-item"
    },
    xs = K(() => o("span", {
        class: "list-title"
    }, "Press Kit", -1)),
    Fs = f({
        __name: "ArticleHead",
        props: {
            date: {},
            id: {},
            label: {},
            pressKit: {},
            tags: {}
        },
        setup(s) {
            return (t, c) => {
                var i;
                const e = W,
                    _ = Y;
                return a(), r("div", Ms, [o("div", {
                    class: "label",
                    innerHTML: t.label
                }, null, 8, Is), o("ul", Ls, [o("li", ws, [Ds, o("span", Ks, A(t.date), 1)]), o("li", Ts, [Hs, o("span", Ps, A(t.tags), 1)]), o("li", Vs, [Bs, o("span", Ns, A(t.id), 1)]), (i = t.pressKit) != null && i.href ? (a(), r("li", Rs, [xs, v(_, {
                    class: "list-copy",
                    to: t.pressKit.href,
                    target: t.pressKit.target
                }, {
                    default: Q(() => [o("span", null, A(t.pressKit.label), 1), v(e, {
                        class: "list-icon",
                        name: "Download"
                    })]),
                    _: 1
                }, 8, ["to", "target"])])) : w("", !0)])])
            }
        }
    }),
    js = k(Fs, [
        ["__scopeId", "data-v-22a1babc"]
    ]),
    zs = {
        class: "blocks"
    },
    Es = {
        key: 0,
        class: "list"
    },
    Gs = f({
        __name: "[slug]",
        props: {
            articleStories: {},
            siteSettings: {}
        },
        async setup(s) {
            var y;
            let t, c;
            const e = s,
                i = ts().params.slug,
                $ = ([t, c] = es(() => os(`${ns.Research}/${i}`)), t = await t, c(), t),
                l = rs($),
                h = ms(e.articleStories ?? []).filter(p => {
                    var u;
                    return `research/${i}` !== ((u = p.link) == null ? void 0 : u.href)
                });
            as(l.seo, (y = e.siteSettings) == null ? void 0 : y.seo);
            const S = new Map([
                ["Article Copy", vs],
                ["Article Single Asset", $s],
                ["Article Multi Assets", Cs]
            ]);
            return (p, u) => {
                var g;
                const b = cs,
                    C = js,
                    M = ls,
                    I = is;
                return a(), r("div", null, [v(b, L(n(l).hero, {
                    large: !0
                }), null, 16), o("main", null, [v(C, {
                    id: n(l).id,
                    date: n(l).date,
                    label: n(l).label,
                    "press-kit": n(l).pressKit,
                    tags: n(l).tags
                }, null, 8, ["id", "date", "label", "press-kit", "tags"]), o("div", zs, [(a(!0), r(N, null, R(n(l).blocks, d => (a(), D(H(n(S).get(d.name)), L({
                    key: d._uid,
                    class: "block"
                }, d.data), null, 16))), 128))]), n(h).length > 0 ? (a(), r("section", Es, [v(M, {
                    title: "More Research",
                    articles: n(h)
                }, null, 8, ["articles"])])) : w("", !0)]), (g = p.siteSettings) != null && g.footer ? (a(), D(I, x(L({
                    key: 0
                }, p.siteSettings.footer)), null, 16)) : w("", !0)])
            }
        }
    }),
    Ws = k(Gs, [
        ["__scopeId", "data-v-8f1f6f37"]
    ]);
export {
    Ws as
    default
};