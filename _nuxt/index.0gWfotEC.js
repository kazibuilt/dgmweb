import {
    _ as $
} from "./TextHero.xF4mS2MY.js";
import {
    _ as w,
    u as D,
    a as N
} from "./useSeo.composable.ciYHrDZC.js";
import {
    z as B,
    X as z,
    d as u,
    c as n,
    e as l,
    f as F,
    h as r,
    t as d,
    j as a,
    G as _,
    D as h,
    q as G,
    R as P,
    U as R,
    x as y,
    F as V,
    k as b,
    L as E,
    i as m,
    E as k,
    K as H,
    m as i,
    N as j,
    S as q
} from "./entry.msGjDD6P.js";
import {
    b as K
} from "./Cards.adaptor.JdMwi8y7.js";
import {
    t as T
} from "./TextHero.adaptor.dqRL3CNW.js";
import {
    A as U
} from "./ArticleList.he8A4ctB.js";
import "./SocialLinks.SPTxo4wa.js";
const X = t => {
        var e, o, s;
        return {
            hero: {
                ...T((e = t == null ? void 0 : t.value.content.hero) == null ? void 0 : e[0])
            },
            seo: B((s = (o = t.value) == null ? void 0 : o.content.seo) == null ? void 0 : s[0])
        }
    },
    J = t => {
        const e = t.slice(0, 8),
            o = t.toSpliced(0, 8);
        return {
            primaryArticles: e.map(s => K(s)),
            secondaryArticles: o.map(s => z(s))
        }
    },
    M = t => (P("data-v-43a42da2"), t = t(), R(), t),
    O = {
        class: "head"
    },
    Q = {
        class: "date"
    },
    W = {
        class: "title"
    },
    Y = {
        class: "content"
    },
    Z = {
        key: 0,
        class: "copy"
    },
    ee = M(() => r("span", null, "Description", -1)),
    te = {
        class: "image-wrapper"
    },
    se = u({
        __name: "ArticleCard",
        props: {
            _uid: {},
            copy: {},
            date: {},
            image: {},
            title: {},
            link: {}
        },
        setup(t) {
            return (e, o) => {
                const s = w,
                    c = G;
                return n(), l(c, {
                    to: e.link.href,
                    class: "article-card"
                }, {
                    default: F(() => [r("div", O, [r("div", Q, d(e.date), 1), r("div", W, d(e.title), 1)]), r("div", Y, [e.copy ? (n(), a("div", Z, [ee, r("p", null, d(e.copy), 1)])) : _("", !0), r("div", te, [e.image ? (n(), l(s, h({
                        key: 0,
                        sizes: "xs:385px sm:234px md:294px lg:340px xl:385px xxl:500px",
                        class: "image"
                    }, e.image), null, 16)) : _("", !0)])])]),
                    _: 1
                }, 8, ["to"])
            }
        }
    }),
    oe = y(se, [
        ["__scopeId", "data-v-43a42da2"]
    ]),
    re = {
        class: "article-grid"
    },
    ne = u({
        __name: "ArticleGrid",
        props: {
            articles: {}
        },
        setup(t) {
            return (e, o) => {
                const s = oe;
                return n(), a("div", re, [(n(!0), a(V, null, b(e.articles, c => (n(), l(s, h({
                    key: c._uid,
                    class: "card"
                }, c), null, 16))), 128))])
            }
        }
    }),
    ce = y(ne, [
        ["__scopeId", "data-v-014d7599"]
    ]),
    ae = {
        key: 0,
        class: "list"
    },
    ie = u({
        __name: "index",
        props: {
            articleStories: {},
            siteSettings: {}
        },
        async setup(t) {
            var g;
            let e, o;
            const s = t,
                c = ([e, o] = E(() => j(q.ResearchListing)), e = await e, o(), e),
                A = X(c),
                p = J(s.articleStories ?? []);
            return D(A.seo, (g = s.siteSettings) == null ? void 0 : g.seo), (f, le) => {
                var x, v, S;
                const I = $,
                    C = ce,
                    L = N;
                return n(), a("div", null, [m(I, k(H(i(A).hero)), null, 16), r("main", null, [r("section", null, [m(C, {
                    articles: (x = i(p)) == null ? void 0 : x.primaryArticles
                }, null, 8, ["articles"])]), ((v = i(p)) == null ? void 0 : v.secondaryArticles.length) > 0 ? (n(), a("section", ae, [m(U, {
                    title: "Archive",
                    articles: i(p).secondaryArticles
                }, null, 8, ["articles"])])) : _("", !0)]), (S = f.siteSettings) != null && S.footer ? (n(), l(L, k(h({
                    key: 0
                }, f.siteSettings.footer)), null, 16)) : _("", !0)])
            }
        }
    }),
    Ae = y(ie, [
        ["__scopeId", "data-v-79ad49c0"]
    ]);
export {
    Ae as
    default
};