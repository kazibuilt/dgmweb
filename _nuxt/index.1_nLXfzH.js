import {
  z as He,
  O as me,
  y as fe,
  S as te,
  d as B,
  c as h,
  j as k,
  h as c,
  t as $,
  e as L,
  G as O,
  P as _e,
  x as A,
  i as b,
  E as he,
  K as Se,
  r,
  m as s,
  l as Be,
  p as T,
  a as q,
  Q as G,
  o as F,
  b as M,
  F as K,
  k as U,
  D as z,
  s as W,
  f as Ie,
  B as Q,
  I as N,
  T as Ae,
  J as ve,
  R as ge,
  U as ye,
  V as ke,
  _ as Le,
  W as Te,
  L as Fe,
  X as Pe,
  N as Ve
} from "./entry.msGjDD6P.js";
import {
  A as Ne
} from "./ArticleList.he8A4ctB.js";
import {
  _ as ze
} from "./Video.vue.HUxPLu-j.js";
import {
  C as Ee,
  _ as qe,
  u as we,
  I as Z,
  P as ee,
  a as Ge,
  F as Me,
  p as We,
  b as xe,
  c as D,
  m as Y,
  d as De
} from "./Counter.psfJX26i.js";
import {
  _ as Ye
} from "./ProductCard.qzsoy1aF.js";
import {
  u as Oe,
  a as Ke
} from "./useSeo.composable.ciYHrDZC.js";
import {
  t as Ue,
  a as Xe
} from "./Cards.adaptor.JdMwi8y7.js";
import "./SocialLinks.SPTxo4wa.js";
const je = (t, e) => {
    var l, d, u, f, o, a;
    return {
      blocks: (((d = (l = t.value) == null ? void 0 : l.content) == null ? void 0 : d.blocks) ?? []).map(n => {
        const i = {
          _uid: n._uid,
          name: n.component,
          data: null
        };
        switch (n.component) {
          case "Article List":
            i.data = Je(n, e);
            break;
          case "Cards Grid":
            i.data = Qe(n);
            break;
          case "Copy Breaker":
            i.data = Ze(n);
            break;
          case "Product Carousel":
            i.data = tt(n);
            break;
          default:
            i.data = null
        }
        return i
      }),
      featuredProducts: ot((u = t.value.content) == null ? void 0 : u.featured_products) ?? [],
      hero: {
        ...et((f = t == null ? void 0 : t.value.content.hero) == null ? void 0 : f[0])
      },
      seo: He((a = (o = t.value) == null ? void 0 : o.content.seo) == null ? void 0 : a[0])
    }
  },
  Je = (t, e) => {
    var l;
    return {
      articleList: {
        articles: e,
        title: t.subtitle ?? ""
      },
      copy: t.copy ?? "",
      link: me((l = t.link) == null ? void 0 : l[0]),
      title: t.title ?? ""
    }
  },
  Qe = t => {
    var e;
    return {
      cards: (t.cards || []).map(l => Ue(l)),
      copy: t.copy ?? "",
      link: me((e = t.link) == null ? void 0 : e[0]),
      subtitle: t.subtitle ?? "",
      title: t.title ?? ""
    }
  },
  Ze = t => ({
    copy: t.copy ?? ""
  }),
  et = t => ({
    description: t.description ?? "",
    labelLeft: fe(t.label_left),
    labelRight: fe(t.label_right)
  }),
  tt = t => ({
    copy: t.copy ?? "",
    items: (t.products ?? []).map(e => Xe(e)),
    title: t.title ?? ""
  }),
  ot = t => (t || []).map(e => {
    var l, d, u, f, o, a, n, i;
    return {
      description: ((l = e.content) == null ? void 0 : l.description) ?? "",
      grade: ((d = e.content) == null ? void 0 : d.grade) ?? "",
      link: {
        href: `${te.ProductListing}/${e.slug}`,
        label: `See ${e.name}`
      },
      material: ((u = e.content) == null ? void 0 : u.material) ?? "",
      name: ((f = e.content) == null ? void 0 : f.name) ?? e.name ?? "",
      usps: ((n = (a = (o = e.content) == null ? void 0 : o.usps) == null ? void 0 : a.value) == null ? void 0 : n.slice(0, 3)) ?? [],
      weight: ((i = e.content) == null ? void 0 : i.weight) ?? ""
    }
  }),
  st = {
    class: "homepage-block-head"
  },
  nt = {
    class: "title"
  },
  at = {
    class: "copy"
  },
  lt = B({
    __name: "HomepageBlockHead",
    props: {
      copy: {},
      link: {},
      title: {}
    },
    setup(t) {
      return (e, l) => {
        var u;
        const d = _e;
        return h(), k("div", st, [c("div", nt, $(e.title), 1), c("p", at, $(e.copy), 1), (u = e.link) != null && u.href ? (h(), L(d, {
          key: 0,
          "aria-label": `Learn more about ${e.title}`,
          class: "link",
          "has-plus": !0,
          href: e.link.href,
          label: e.link.label
        }, null, 8, ["aria-label", "href", "label"])) : O("", !0)])
      }
    }
  }),
  oe = A(lt, [
    ["__scopeId", "data-v-7aae8291"]
  ]),
  rt = {
    class: "homepage-article-list"
  },
  ct = B({
    __name: "HomepageArticleList",
    props: {
      articleList: {},
      copy: {},
      link: {},
      title: {}
    },
    setup(t) {
      return (e, l) => {
        const d = oe,
          u = Ne;
        return h(), k("div", rt, [b(d, {
          copy: e.copy,
          link: e.link,
          title: e.title
        }, null, 8, ["copy", "link", "title"]), b(u, he(Se(e.articleList)), null, 16)])
      }
    }
  }),
  it = {
    class: "default-card"
  },
  ut = {
    class: "image-wrapper"
  },
  pt = {
    class: "content"
  },
  dt = {
    class: "title"
  },
  ft = {
    key: 0,
    class: "index"
  },
  mt = {
    class: "copy"
  },
  _t = B({
    __name: "DefaultCard",
    props: {
      _uid: {},
      copy: {},
      index: {},
      title: {},
      video: {}
    },
    setup(t, {
      expose: e
    }) {
      const l = r(null),
        d = r(!1);
      return e({
        enter: () => {
          var o;
          if ((o = l.value) != null && o.$el) {
            const a = l.value.$el.querySelector("img") ?? l.value.$el;
            T.fromTo(a, {
              scale: 1.2
            }, {
              duration: 1.5,
              ease: "power4.out",
              scale: 1
            })
          }
        },
        loadVideo: () => {
          d.value = !0
        }
      }), (o, a) => (h(), k("div", it, [c("div", ut, [b(s(ze), {
        ref_key: "mediaRef",
        ref: l,
        autoplay: "",
        muted: "",
        loop: "",
        playsinline: "",
        src: o.video,
        "start-loading": s(d)
      }, null, 8, ["src", "start-loading"])]), c("div", pt, [c("div", dt, [o.index ? (h(), k("span", ft, $(o.index), 1)) : O("", !0), Be(" " + $(o.title), 1)]), c("p", mt, $(o.copy), 1)])]))
    }
  }),
  ht = A(_t, [
    ["__scopeId", "data-v-4eb6a740"]
  ]),
  vt = {
    class: "head"
  },
  gt = {
    class: "title"
  },
  yt = B({
    __name: "HomepageCardsGrid",
    props: {
      cards: {},
      copy: {},
      link: {},
      subtitle: {},
      title: {}
    },
    setup(t) {
      const {
        hooks: e
      } = W(), l = q(), {
        windowSize: d
      } = G(l), u = r(null), f = r([]), o = r(null), a = r(!1), n = r(!1);
      F(() => {
        e.hook("window:raf", i)
      }), M(() => {
        e.removeHook("window:raf", i)
      });
      const i = () => {
        var p;
        if (u.value && !a.value) {
          const {
            bottom: v,
            top: _
          } = u.value.getBoundingClientRect();
          _ <= d.value.height && v >= 0 && ((o.value ?? []).forEach(m => {
            m.loadVideo && m.loadVideo()
          }), a.value = !0)
        }
        if (f.value && ((p = o.value) == null ? void 0 : p.length) > 0) {
          const {
            bottom: _,
            top: w
          } = f.value.getBoundingClientRect(), m = w <= d.value.height - 250 && _ >= -250;
          let g = 0;
          m && !n.value && ((o.value ?? []).forEach(H => {
            T.delayedCall(g, H.enter), g += .2
          }), e.removeHook("window:raf", i), n.value = !0)
        }
      };
      return (p, v) => {
        const _ = oe;
        return h(), k("div", {
          ref_key: "elRef",
          ref: u,
          class: "homepage-cards-grid"
        }, [b(_, {
          copy: p.copy,
          title: p.title,
          link: p.link
        }, null, 8, ["copy", "title", "link"]), c("div", vt, [c("div", gt, $(p.subtitle), 1)]), c("div", {
          ref_key: "cardsWrapperRef",
          ref: f,
          class: "cards"
        }, [(h(!0), k(K, null, U(p.cards, (w, m) => (h(), L(s(ht), z({
          ref_for: !0,
          ref_key: "cardRefs",
          ref: o,
          key: w._uid,
          index: `${m+1<10?0:""}${m+1}`
        }, w), null, 16, ["index"]))), 128))], 512)], 512)
      }
    }
  }),
  kt = A(yt, [
    ["__scopeId", "data-v-ced70df2"]
  ]),
  wt = B({
    __name: "HomepageCopyBreaker",
    props: {
      copy: {}
    },
    setup(t) {
      const {
        hooks: e
      } = W(), l = q(), {
        windowSize: d
      } = G(l), u = r(null), f = r(!1);
      F(() => {
        e.hook("window:raf", o)
      }), M(() => {
        e.removeHook("window:raf", o)
      });
      const o = () => {
        var a;
        if ((a = u.value) != null && a.$el) {
          const {
            bottom: i,
            top: p
          } = u.value.$el.getBoundingClientRect();
          p <= d.value.height - 150 && i >= -150 && !f.value && (u.value.enter(), f.value = !0, e.removeHook("window:raf", o))
        }
      };
      return (a, n) => (h(), L(s(Ee), {
        ref_key: "elRef",
        ref: u,
        class: "homepage-copy-breaker",
        copy: a.copy,
        tag: "p"
      }, null, 8, ["copy"]))
    }
  }),
  Rt = A(wt, [
    ["__scopeId", "data-v-558f2aa2"]
  ]),
  bt = {
    class: "product-carousel"
  },
  $t = B({
    __name: "HomepageProductCarousel",
    props: {
      copy: {},
      title: {},
      items: {},
      showBottomBorder: {
        type: Boolean
      }
    },
    setup(t) {
      const {
        hooks: e
      } = W(), l = q(), {
        windowSize: d
      } = G(l), u = r(null), f = r(null), o = r(!1);
      F(() => {
        e.hook("window:raf", a)
      }), M(() => {
        e.removeHook("window:raf", a)
      });
      const a = () => {
        var n, i;
        if ((n = u.value) != null && n.$el && ((i = f.value) == null ? void 0 : i.length) > 0) {
          const {
            bottom: v,
            top: _
          } = u.value.$el.getBoundingClientRect(), w = _ <= d.value.height - 250 && v >= -250;
          let m = 0;
          w && !o.value && ((f.value ?? []).forEach(g => {
            T.delayedCall(m, g.enter), m += .15
          }), e.removeHook("window:raf", a), o.value = !0)
        }
      };
      return (n, i) => {
        const p = oe,
          v = Ye;
        return h(), k("div", bt, [b(p, {
          copy: n.copy,
          title: n.title
        }, null, 8, ["copy", "title"]), b(s(qe), {
          ref_key: "carouselRef",
          ref: u,
          items: n.items
        }, {
          default: Ie(() => [(h(!0), k(K, null, U(n.items, _ => (h(), L(v, z({
            ref_for: !0,
            ref_key: "cardRefs",
            ref: f,
            key: _._uid,
            class: "item"
          }, _), null, 16))), 128))]),
          _: 1
        }, 8, ["items"])])
      }
    }
  }),
  Ct = A($t, [
    ["__scopeId", "data-v-a1a5c980"]
  ]),
  Ht = B({
    __name: "Acf01",
    props: {
      bounds: {},
      onGetFrame: {
        type: Function
      },
      progress: {},
      description: {},
      grade: {},
      link: {},
      material: {},
      name: {},
      usps: {},
      weight: {}
    },
    setup(t) {
      const e = t,
        l = r([]),
        {
          enterFrame: d,
          firstFrame: u,
          totalFrames: f
        } = we(ee.ACF01, Z.Homepage);
      F(() => {
        Ge({
          imageEls: l,
          imageSequenceName: Z.Homepage,
          product: ee.ACF01
        })
      });
      const o = a => {
        e.onGetFrame({
          current: a,
          total: f
        })
      };
      return (a, n) => {
        const i = xe;
        return h(), L(i, {
          bounds: a.bounds,
          fit: s(Me).Horizontal,
          "has-enter": !0,
          "image-els": s(l).map(p => p.image),
          "on-get-frame": o,
          progress: "progress" in a ? a.progress : s(We),
          "enter-frame": s(d),
          "first-frame": s(u),
          "total-frames": s(f)
        }, null, 8, ["bounds", "fit", "image-els", "progress", "enter-frame", "first-frame", "total-frames"])
      }
    }
  }),
  St = A(Ht, [
    ["__scopeId", "data-v-5615ac5e"]
  ]),
  Re = t => (ge("data-v-9adf3058"), t = t(), ye(), t),
  Bt = {
    class: "name"
  },
  It = Re(() => c("div", null, "Gastro technik", -1)),
  At = {
    class: "sticky-content-wrapper"
  },
  Lt = Re(() => c("div", {
    class: "label"
  }, "Timepieces", -1)),
  Tt = {
    class: "description"
  },
  Ft = B({
    __name: "HomepageFeaturedProducts",
    props: {
      products: {}
    },
    setup(t, {
      expose: e
    }) {
      const l = t,
        {
          hook: d,
          hooks: u
        } = W(),
        f = q(),
        {
          windowSize: o
        } = G(f),
        {
          totalFrames: a
        } = we(ee.ACF01, Z.Homepage),
        n = r(0),
        i = r(null),
        p = r(null),
        v = r(null),
        _ = r(null),
        w = r(null),
        m = r(null),
        g = r(null),
        H = r(null),
        I = r(null),
        se = r({
          bottom: 0,
          height: 0,
          top: 0
        }),
        ne = r(0),
        ae = r(!1),
        X = r(!1),
        j = r(!1),
        J = r(!1),
        C = Q(() => l.products[0]),
        le = r(),
        P = Q(() => o.value.width < ke.Small);
      F(() => {
        d("window:raf", ue), d("window:resize", ie), re(), ce()
      }), M(() => {
        u.removeHook("window:raf", ue), u.removeHook("window:resize", ie), le.value && clearInterval(le.value)
      });
      const be = ({
          current: y
        }) => {
          n.value = y
        },
        re = () => {
          if (v.value) {
            const y = document.querySelector(".homepage-hero");
            if (y && m.value) {
              const {
                height: S
              } = y.getBoundingClientRect(), {
                height: R
              } = m.value.getBoundingClientRect(), V = P.value ? R : S + R;
              v.value.style.height = `${V}px`
            }
          }
          if (_.value && w.value) {
            const {
              height: y
            } = w.value.getBoundingClientRect(), S = P.value ? 150 : o.value.height / 2 - y / 2;
            _.value.style.top = `${S}px`;
            const R = P.value ? o.value.height - 150 : o.value.height - S;
            _.value.style.height = `${R}px`
          }
          g.value && (g.value.style.height = `${o.value.height}px`), I.value && (I.value.style.height = `${o.value.height}px`)
        },
        ce = () => {
          if (i.value) {
            const {
              top: y,
              height: S,
              bottom: R
            } = i.value.getBoundingClientRect();
            se.value = {
              bottom: R + window.scrollY,
              height: S,
              top: y + window.scrollY
            }
          }
        },
        ie = () => {
          re(), ce()
        },
        ue = () => {
          var y;
          if (i.value) {
            const {
              height: S,
              top: R
            } = i.value.getBoundingClientRect(), V = i.value.offsetTop, {
              height: x
            } = o.value;
            if (R < V && R > -S && (ne.value = D(Y([V, -(S - x)], [0, 1], R), 0, 1)), I.value && ((y = p == null ? void 0 : p.value) != null && y.$el)) {
              const E = D(Y([90, a], [1, .75], n.value), .75, 1),
                pe = D(Y([90, a], [1, .5], n.value), .6, 1),
                de = D(Y([0, a], [25, 0], n.value), 0, 25);
              P.value ? (I.value.style.transform = `
          scaleX(${E})
          scaleY(${pe})
        `, p.value.$el.style.transform = `
          translate3d(0, ${de}lvh, 0)
          scale(${E})
        `) : (I.value.style.transform = `
          scaleX(${E})
          scaleY(${P.value?pe:E})
        `, p.value.$el.style.transform = `
          translate3d(0, ${de}lvh, 0)
          scale(${E})
        `)
            }
            X.value = n.value >= 50 && n.value < 91, j.value = n.value < 50, P.value && (ae.value = J.value && n.value < 91)
          }
        },
        $e = () => {
          J.value = !0, _.value && T.fromTo(_.value, {
            autoAlpha: 0,
            y: 80
          }, {
            autoAlpha: 1,
            duration: 1.2,
            ease: "power3.out",
            y: 0,
            onComplete: () => {
              J.value = !0
            }
          })
        },
        Ce = new Map([
          ["ACF-01", St]
        ]);
      return e({
        enter: $e
      }), (y, S) => {
        const R = _e,
          V = De;
        return h(), k("div", {
          ref_key: "elRef",
          ref: i,
          class: "homepage-featured-products"
        }, [c("div", {
          ref_key: "centerCopyWrapperRef",
          ref: v,
          class: "center-copy-wrapper"
        }, [c("div", {
          ref_key: "centerCopyRef",
          ref: _,
          class: N(["center-copy", s(ae) && "visible"])
        }, [c("div", {
          ref_key: "centerCopyInnerRef",
          ref: w,
          class: "center-copy-inner"
        }, [c("div", Bt, [It, c("div", null, $(s(C).name), 1)]), b(R, {
          class: "link",
          "has-plus": !0,
          href: s(C).link.href,
          label: s(C).link.label,
          theme: s(Ae).OffWhite
        }, null, 8, ["href", "label", "theme"]), c("div", {
          class: N(["labels left", s(j) && "visible"])
        }, [(h(!0), k(K, null, U(s(C).usps, x => (h(), k("div", {
          key: `homepage-featured-products-${x}`
        }, $(x), 1))), 128))], 2), c("div", {
          class: N(["labels right", s(j) && "visible"])
        }, [c("div", null, $(s(C).material), 1), c("div", null, "Grade " + $(s(C).grade), 1), b(V, {
          duration: 1.3,
          number: Number(s(C).weight),
          label: "G"
        }, null, 8, ["number"])], 2)], 512)], 2)], 512), c("div", {
          ref_key: "innerRef",
          ref: m,
          class: "inner"
        }, [(h(), L(ve(s(Ce).get(s(C).name)), z({
          ref_key: "imageSequenceRef",
          ref: p,
          class: "image-sequence",
          bounds: s(se),
          "on-get-frame": be,
          progress: s(ne)
        }, s(C)), null, 16, ["bounds", "progress"])), c("div", At, [c("div", {
          ref_key: "stickyContentRef",
          ref: g,
          class: "sticky-content"
        }, [c("div", {
          class: N(["ui", s(X) && "visible"])
        }, [Lt, b(R, {
          class: "cta",
          "has-plus": !0,
          label: "All Timepieces",
          href: ("Slugs" in y ? y.Slugs : s(te)).ProductListing
        }, null, 8, ["href"])], 2)], 512), s(C).description ? (h(), k("div", {
          key: 0,
          ref_key: "blendedContentRef",
          ref: H,
          class: "sticky-content blended"
        }, [c("div", {
          class: N(["ui", s(X) && "visible"])
        }, [c("p", Tt, $(s(C).description), 1)], 2)], 512)) : O("", !0), c("div", {
          ref_key: "backgroundRef",
          ref: I,
          class: "background"
        }, null, 512)])], 512)], 512)
      }
    }
  }),
  Pt = A(Ft, [
    ["__scopeId", "data-v-9adf3058"]
  ]),
  Vt = t => (ge("data-v-258010f2"), t = t(), ye(), t),
  Nt = {
    class: "homepage-hero"
  },
  zt = Vt(() => c("h1", {
    class: "title"
  }, "DGM", -1)),
  Et = ["innerHTML"],
  qt = {
    class: "label right"
  },
  Gt = ["innerHTML"],
  Mt = {
    class: "copy"
  },
  Wt = B({
    __name: "HomepageHero",
    props: {
      description: {},
      labelLeft: {},
      labelRight: {}
    },
    setup(t, {
      expose: e
    }) {
      const {
        callHook: l,
        hook: d,
        hooks: u
      } = W(), f = q(), {
        windowSize: o
      } = G(f), a = r(null), n = r(null), i = r(null), p = r(!0);
      F(() => {
        v.value || (l("topNav:hide"), d("window:raf", _))
      }), M(() => {
        v.value || (l("topNav:show"), u.removeHook("window:raf", _))
      });
      const v = Q(() => o.value.width < ke.Small),
        _ = () => {
          var m;
          if (!v.value && ((m = i.value) != null && m.$el)) {
            const {
              top: g
            } = i.value.$el.getBoundingClientRect(), H = document.querySelector(".top-nav .burger"), {
              top: I
            } = H.getBoundingClientRect();
            p.value && g <= I && (l("topNav:show"), p.value = !1), !p.value && g > I && (l("topNav:hide"), p.value = !0)
          }
        };
      return e({
        enter: () => {
          var m;
          (m = a.value) != null && m.$el && n.value && (T.fromTo(a.value.$el, {
            autoAlpha: 0,
            y: 80
          }, {
            autoAlpha: 1,
            duration: 1.2,
            ease: "power3.out",
            y: 0
          }), T.fromTo(n.value, {
            autoAlpha: 0,
            y: 80
          }, {
            autoAlpha: 1,
            delay: .08,
            duration: 1.2,
            ease: "power3.out",
            y: 0
          }))
        }
      }), (m, g) => (h(), k("header", Nt, [zt, b(s(Le), {
        ref_key: "nameRef",
        ref: a,
        "aria-hidden": "true",
        class: "name",
        name: "DGM"
      }, null, 512), c("div", {
        ref_key: "contentRef",
        ref: n,
        class: "content"
      }, [c("div", {
        class: "label left",
        innerHTML: m.labelLeft
      }, null, 8, Et), c("div", qt, [c("div", {
        innerHTML: m.labelRight
      }, null, 8, Gt)]), c("p", Mt, $(m.description), 1), b(s(Te), {
        ref_key: "burgerRef",
        ref: i,
        class: N(["burger", s(p) && "visible"]),
        onClick: g[0] || (g[0] = H => s(f).setMenuOpen(!s(f).menuOpen))
      }, null, 8, ["class"])], 512)]))
    }
  }),
  xt = A(Wt, [
    ["__scopeId", "data-v-258010f2"]
  ]),
  Dt = {
    class: "blocks"
  },
  Yt = B({
    __name: "index",
    props: {
      articleStories: {},
      siteSettings: {}
    },
    async setup(t) {
      var v;
      let e, l;
      const d = t,
        u = ([e, l] = Fe(() => Ve(te.Homepage, {
          resolve_relations: ["Homepage.featured_products", "Product Carousel.products"]
        })), e = await e, l(), e),
        f = (d.articleStories ?? []).map(Pe),
        o = je(u, f) ?? [],
        a = r(null),
        n = r(null);
      Oe(o.seo, (v = d.siteSettings) == null ? void 0 : v.seo), F(() => {
        i()
      });
      const i = () => {
          a.value && T.delayedCall(.16, a.value.enter), n.value && T.delayedCall(.32, n.value.enter)
        },
        p = new Map([
          ["Article List", ct],
          ["Cards Grid", kt],
          ["Copy Breaker", Rt],
          ["Product Carousel", Ct]
        ]);
      return (_, w) => {
        var g;
        const m = Ke;
        return h(), k("div", null, [b(s(xt), z({
          ref_key: "heroRef",
          ref: a
        }, s(o).hero), null, 16), c("main", null, [b(s(Pt), {
          ref_key: "featuredProductsRef",
          ref: n,
          products: s(o).featuredProducts
        }, null, 8, ["products"]), c("div", Dt, [(h(!0), k(K, null, U(s(o).blocks, H => (h(), L(ve(s(p).get(H.name)), z({
          key: H._uid
        }, H.data), null, 16))), 128))])]), (g = _.siteSettings) != null && g.footer ? (h(), L(m, he(z({
          key: 0
        }, _.siteSettings.footer)), null, 16)) : O("", !0)])
      }
    }
  }),
  to = A(Yt, [
    ["__scopeId", "data-v-2aeaf1d6"]
  ]);
export {
  to as
  default
};