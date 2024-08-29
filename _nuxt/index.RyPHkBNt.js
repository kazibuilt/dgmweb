import {
    _ as A
} from "./TextHero.xF4mS2MY.js";
import {
    _ as G
} from "./ProductCard.qzsoy1aF.js";
import {
    z as $,
    d as v,
    c as n,
    j as a,
    h as r,
    t as p,
    F as y,
    k as P,
    e as i,
    D as _,
    I as x,
    x as S,
    L as B,
    i as N,
    E as h,
    K as z,
    m as f,
    G as F,
    N as I,
    S as L
} from "./entry.msGjDD6P.js";
import {
    u as V,
    a as w
} from "./useSeo.composable.ciYHrDZC.js";
import {
    a as D
} from "./Cards.adaptor.JdMwi8y7.js";
import {
    t as E
} from "./TextHero.adaptor.dqRL3CNW.js";
import "./SocialLinks.SPTxo4wa.js";
const H = e => {
        var o, c, l, s, t;
        return {
            _uid: (o = e.value) == null ? void 0 : o.content._uid,
            groups: (c = e.value) == null ? void 0 : c.content.groups.map(u => j(u)),
            hero: {
                ...E((l = e == null ? void 0 : e.value.content.hero) == null ? void 0 : l[0])
            },
            seo: $((t = (s = e.value) == null ? void 0 : s.content.seo) == null ? void 0 : t[0])
        }
    },
    j = e => ({
        _uid: e._uid ?? "",
        copy: e.copy ?? "",
        label: `${e.products.length} Product${e.products.length>1?"s":""}`,
        products: (e.products || []).map(o => D(o)),
        title: e.title ?? ""
    }),
    K = {
        class: "head"
    },
    R = {
        class: "title"
    },
    T = {
        class: "label"
    },
    q = {
        class: "copy"
    },
    J = v({
        __name: "ProductGroup",
        props: {
            _uid: {},
            copy: {},
            label: {},
            products: {},
            title: {}
        },
        setup(e) {
            return (o, c) => {
                const l = G;
                return n(), a("section", null, [r("div", K, [r("div", R, p(o.title), 1), r("div", T, p(o.label), 1), r("p", q, p(o.copy), 1)]), r("div", {
                    class: x(["items", o.products.length === 1 && "single"])
                }, [(n(!0), a(y, null, P(o.products, (s, t) => (n(), i(l, _({
                    key: s._uid,
                    class: ["card", o.products.length % 2 === 1 && t === o.products.length - 1 && "large"],
                    large: o.products.length === 1
                }, s), null, 16, ["class", "large"]))), 128))], 2)])
            }
        }
    }),
    M = S(J, [
        ["__scopeId", "data-v-d0a420ef"]
    ]),
    O = {
        class: "blocks"
    },
    Q = v({
        __name: "index",
        props: {
            articleStories: {},
            siteSettings: {}
        },
        async setup(e) {
            var u;
            let o, c;
            const l = e,
                s = ([o, c] = B(() => I(L.ProductListing, {
                    version: "published",
                    resolve_relations: ["Product Group.products"]
                })), o = await o, c(), o),
                t = H(s);
            return V(t.seo, (u = l.siteSettings) == null ? void 0 : u.seo), (d, U) => {
                var m;
                const k = A,
                    b = M,
                    C = w;
                return n(), a("div", null, [N(k, h(z(f(t).hero)), null, 16), r("main", null, [r("div", O, [(n(!0), a(y, null, P(f(t).groups, g => (n(), i(b, _({
                    key: g._uid
                }, g), null, 16))), 128))])]), (m = d.siteSettings) != null && m.footer ? (n(), i(C, h(_({
                    key: 0
                }, d.siteSettings.footer)), null, 16)) : F("", !0)])
            }
        }
    }),
    so = S(Q, [
        ["__scopeId", "data-v-2e70a31d"]
    ]);
export {
    so as
    default
};