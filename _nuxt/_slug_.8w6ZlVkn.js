import {
  Y as ge,
  z as We,
  A as Ve,
  y as Ue,
  T as x,
  d as q,
  a as K,
  Q as oe,
  Z as je,
  r as p,
  o as ae,
  $ as Xe,
  c,
  j as h,
  h as o,
  a0 as Ye,
  m as a,
  a1 as Ie,
  G as H,
  I as Q,
  s as te,
  x as F,
  b as ee,
  e as O,
  f as J,
  i as B,
  E as Ge,
  K as qe,
  t as y,
  a2 as Ce,
  p as X,
  B as ye,
  F as N,
  k as W,
  D as E,
  C as Ze,
  _ as me,
  l as he,
  g as ue,
  J as de,
  v as Me,
  n as Je,
  V as pe,
  a3 as Qe,
  R as Re,
  U as $e,
  M as Ke,
  a4 as Se,
  P as et,
  a5 as tt,
  w as ot,
  a6 as nt,
  a7 as be,
  a8 as we,
  a9 as st,
  u as at,
  L as lt,
  aa as it,
  N as rt,
  S as ct,
  ab as ut,
  ac as pt
} from "./entry.msGjDD6P.js";
import {
  _ as re,
  u as mt,
  a as dt
} from "./useSeo.composable.ciYHrDZC.js";
import {
  c as Y,
  m as D,
  F as ke,
  d as ze,
  u as Te,
  I as le,
  P as ie,
  e as Z,
  b as xe,
  a as Be,
  _ as _t,
  C as ft
} from "./Counter.psfJX26i.js";
import {
  _ as Pe
} from "./Video.vue.HUxPLu-j.js";
var M = (e => (e.Bottom = "Bottom", e.BottomCenter = "BottomCenter", e.BottomLeft = "BottomLeft", e.BottomRight = "BottomRight", e.Center = "Center", e.Left = "Left", e.Right = "Right", e.TopCenter = "TopCenter", e.TopLeft = "TopLeft", e))(M || {}),
  ve = (e => (e.Large = "Large", e.Small = "Small", e))(ve || {});

function ht(e) {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(e)
}

function vt(e) {
  return e.replace(/<[^>]*>/g, "")
}
const Fe = (e, t) => {
    const l = new Intl.NumberFormat("nl-BE", {
      style: "currency",
      currency: "EUR"
    });
    return {
      _uid: (e == null ? void 0 : e._uid) ?? "",
      image: ge(e.image),
      name: (e == null ? void 0 : e.name) ?? "",
      price: e != null && e.price ? l.format(parseInt(e.price, 10)) : 0,
      product: t ?? "",
      strapsIncluded: (e == null ? void 0 : e.straps_included) ?? !0,
      straps: ((e == null ? void 0 : e.straps) ?? []).map(r => ({
        _uid: (r == null ? void 0 : r._uid) ?? "",
        colors: parseInt((r == null ? void 0 : r.colors) ?? "0", 10) ?? 0,
        material: (r == null ? void 0 : r.material) ?? "",
        name: (r == null ? void 0 : r.name) ?? ""
      }))
    }
  },
  gt = e => ({
    _uid: e._uid ?? "",
    items: (e.items ?? []).map(t => ({
      _uid: e._uid ?? "",
      item: t.item ?? null,
      material: t.material ?? null,
      quality: t.quality ?? null,
      weight: t.weight ?? 0
    })),
    totalWeight: parseFloat((e == null ? void 0 : e.total_weight) ?? "0")
  }),
  yt = e => ({
    _uid: e._uid ?? "",
    copy: e.copy ?? null,
    media: (e.media || []).map(t => Ve(t)),
    subtitle: e.subtitle ?? null,
    title: e.title ?? null
  }),
  bt = e => ({
    copy: e.copy ?? "",
    hotspotCopy: e.hotspot_copy ?? "",
    hotspotTitle: e.hotspot_title ?? null,
    image: ge(e.image),
    menuTitle: e.menu_title ?? "",
    subtitle: e.subtitle ?? null,
    title: e.title ?? null
  }),
  kt = e => {
    var t;
    return {
      copy: e.copy ?? null,
      image: ge(e.image),
      labelLeft: e.label_left ?? null,
      labelRight: e.label_right ?? null,
      tags: ((t = e.tags) == null ? void 0 : t.value) ?? [],
      menuTitle: e.menu_title ?? "",
      title: e.title ?? ""
    }
  },
  Rt = (e, t) => ({
    blocks: (e.blocks ?? []).map(l => ({
      _uid: l._uid ?? "",
      name: l.component ?? "",
      data: wt(l, t)
    })),
    copy: e.copy ?? "",
    menuTitle: e.menu_title ?? "",
    subtitle: e.subtitle ?? "",
    title: e.title ?? ""
  }),
  $t = (e, t) => {
    var l;
    return {
      copy: e.copy ?? "",
      image: ((l = e.image) == null ? void 0 : l.filename) && Ve(e.image),
      label: Ue(e.label),
      name: t.name ?? "",
      labels: (e.labels.value || []).map(r => r)
    }
  },
  wt = (e, t) => {
    switch (e.component) {
      case "Product Grid":
        return Tt(e, t);
      case "Order Steps":
        return St(e);
      case "Order Form":
        return Ct(e, t)
    }
  },
  St = e => ({
    steps: ((e == null ? void 0 : e.steps) ?? []).map(t => ({
      _uid: (t == null ? void 0 : t._uid) ?? "",
      copy: (t == null ? void 0 : t.copy) ?? null,
      subtitle: (t == null ? void 0 : t.subtitle) ?? null,
      title: (t == null ? void 0 : t.title) ?? null
    })),
    title: (e == null ? void 0 : e.title) ?? null
  }),
  Ct = (e, t) => ({
    copy: e.copy ?? null,
    label: e.label ?? "",
    product: (t == null ? void 0 : t.name) ?? null
  }),
  Tt = (e, t) => {
    const {
      name: l,
      variants: r
    } = t ?? {};
    return {
      items: (r ?? []).map(n => Fe(n, l)),
      name: l ?? null
    }
  },
  xt = e => ({
    blocks: (e.blocks ?? []).map(t => ({
      _uid: t._uid ?? "",
      name: t.component ?? "",
      data: Bt(t)
    })),
    menuTitle: e.menu_title ?? ""
  }),
  Bt = e => {
    switch (e.component) {
      case "Text Media Breaker":
        return Gt(e);
      case "Timeline":
        return Vt(e);
      case "Specs":
        return It(e)
    }
  },
  Lt = e => ({
    blocks: (e.blocks ?? []).map(t => ({
      _uid: t._uid ?? "",
      name: t.component ?? "",
      data: At(t)
    })),
    copy: e.copy ?? null,
    menuTitle: e.menu_title ?? "",
    render: e.render ?? null,
    subtitle: e.subtitle ?? null,
    title: e.title ?? null
  }),
  At = e => {
    switch (e.component) {
      case "Description List":
        return gt(e);
      case "Gallery":
        return yt(e)
    }
  },
  It = e => ({
    copy: e.copy ?? null,
    title: e.title ?? null,
    items: (e.items ?? []).map(t => ({
      _uid: t._uid ?? "",
      count: t.rows.reduce((l, r) => {
        var n;
        return l + ((n = r.sub_items) == null ? void 0 : n.length)
      }, 0) ?? 0,
      title: t.title ?? null,
      rows: (t.rows ?? []).map(l => {
        var r;
        return {
          _uid: l._uid ?? "",
          count: ((r = l.sub_items) == null ? void 0 : r.length) ?? 2,
          subItems: (l.sub_items ?? []).map(n => ({
            _uid: n._uid,
            depth: n.depth ?? "",
            grade: n.grade ?? "",
            height: n.height ?? "",
            image: ge(n.image),
            imageBackgroundColor: n.image_background_color ?? x.OffBlack,
            material: n.material ?? "",
            title: n.title ?? null,
            weight: n.weight ?? "0",
            width: n.width ?? ""
          }))
        }
      })
    }))
  }),
  Gt = e => ({
    copy: e.copy ?? null,
    video: e.video ?? "",
    subCopy: e.sub_copy ?? null,
    subtitle: e.subtitle ?? null,
    title: e.title ?? null
  }),
  Vt = e => ({
    items: (e.items ?? []).map(t => ({
      _uid: t._uid ?? "",
      copy: t.copy ?? "",
      image: ge(t.image),
      title: t.title ?? null,
      year: Number(t.year) ?? new Date().getFullYear()
    }))
  }),
  qt = e => {
    var t, l, r, n, m, d, u, i, s, _, v, R, w, S, $, L, A, C, T, I, z;
    return {
      _uid: (t = e.value) == null ? void 0 : t.content._uid,
      blocks: (((r = (l = e.value) == null ? void 0 : l.content) == null ? void 0 : r.blocks) ?? []).map(f => {
        var G;
        const b = {
          _uid: f._uid,
          name: f.component,
          data: null
        };
        switch (f.component) {
          case "Crown":
            b.data = bt(f);
            break;
          case "Manifesto":
            b.data = kt(f);
            break;
          case "Order":
            b.data = Rt(f, (G = e == null ? void 0 : e.value) == null ? void 0 : G.content);
            break;
          case "Reassurance Specs":
            b.data = xt(f);
            break;
          case "Scene":
            b.data = Lt(f);
            break;
          default:
            b.data = null
        }
        return b
      }),
      description: ((n = e.value) == null ? void 0 : n.content.description) ?? "",
      hero: $t((d = (m = e.value) == null ? void 0 : m.content.hero) == null ? void 0 : d[0], (u = e == null ? void 0 : e.value) == null ? void 0 : u.content),
      image: ge((i = e.value) == null ? void 0 : i.content.image),
      labelLeft: ((s = e.value) == null ? void 0 : s.content.label_left) ?? "",
      labelRight: ((_ = e.value) == null ? void 0 : _.content.label_right) ?? "",
      menuItems: (((R = (v = e.value) == null ? void 0 : v.content) == null ? void 0 : R.blocks) ?? []).map(f => f.menu_title).filter(f => !!f),
      name: ((w = e.value) == null ? void 0 : w.content.name) ?? "",
      seo: We(($ = (S = e.value) == null ? void 0 : S.content.seo) == null ? void 0 : $[0]),
      shippingDate: parseInt(e.value.content.shipping_date ?? "0", 10),
      usps: ((I = (T = (C = (A = (L = e.value) == null ? void 0 : L.content.hero) == null ? void 0 : A[0]) == null ? void 0 : C.usps) == null ? void 0 : T.value) == null ? void 0 : I.slice(0, 2)) ?? [],
      variants: (((z = e.value) == null ? void 0 : z.content.variants) ?? []).map(f => {
        var b;
        return Fe(f, (b = e.value) == null ? void 0 : b.content.name)
      })
    }
  },
  Mt = {
    key: 1,
    class: "sticky-content-wrapper"
  },
  zt = q({
    __name: "Section",
    props: {
      enterThreshold: {
        default: .6
      },
      onGetBounds: {},
      onGetSetHeight: {},
      onProgress: {},
      onStartLoading: {},
      onEnter: {},
      sequenceHeight: {},
      theme: {
        default: x.LightGrey
      }
    },
    setup(e) {
      const t = e,
        {
          hook: l,
          hooks: r
        } = te(),
        n = K(),
        {
          windowSize: m
        } = oe(n),
        d = je(),
        u = p(null),
        i = p(null),
        s = p(null),
        _ = p(null),
        v = p(null),
        R = p(null),
        w = p(!0),
        S = p(!1),
        $ = p(!1);
      ae(() => {
        L(), l("window:raf", C), l("window:resize", A), l("section:resize", A), l("section:setHeight", L)
      }), Xe(() => {
        r.removeHook("window:raf", C), r.removeHook("window:resize", A), r.removeHook("section:resize", A), r.removeHook("section:setHeight", L)
      });
      const L = () => {
          if (u.value && i.value) {
            const {
              height: z
            } = i.value.getBoundingClientRect();
            u.value.style.height = `${z}px`
          }
          R.value && (R.value.style.height = `${m.value.height}px`)
        },
        A = () => {
          L()
        },
        C = () => {
          if (u.value) {
            const {
              bottom: z,
              top: f
            } = T(), {
              height: b
            } = m.value;
            if (i.value && (w.value = !(f <= 0)), s.value) {
              const U = Y(D([b * .95, b / 3], [1, 0], f), 0, 1);
              s.value.style.opacity = U.toString()
            }
            if (t.onProgress && _.value) {
              const {
                bottom: U,
                height: P
              } = _.value.getBoundingClientRect();
              if (U >= b) {
                const j = f,
                  ne = b,
                  fe = -P + b,
                  se = Y(D([ne, fe], [0, 1], j), 0, 1);
                t.onProgress && t.onProgress(se)
              }
            }
            f <= 0 && z >= 0 && n.theme !== t.theme && n.setTheme(t.theme);
            const G = b * 2,
              g = f - G <= b;
            !S.value && g && (S.value = !0, t.onStartLoading && t.onStartLoading());
            const k = f <= b * t.enterThreshold;
            !$.value && k && ($.value = !0, t.onEnter && t.onEnter()), f < b && z >= 0 ? (u.value.style.visibility = "visible", u.value.style.opacity = "1") : (u.value.style.visibility = "hidden", u.value.style.opacity = "0")
          }
        },
        T = () => {
          if (u.value) {
            const {
              bottom: z,
              height: f,
              top: b
            } = u.value.getBoundingClientRect();
            return t.onGetBounds && t.onGetBounds({
              bottom: z,
              height: f,
              top: b
            }), {
              bottom: z,
              height: f,
              top: b
            }
          }
          return {
            bottom: 0,
            height: 0,
            top: 0
          }
        },
        I = new Map([
          [x.Black, "black"],
          [x.BurnedOrange, "burned-orange"],
          [x.LightGrey, "light-grey"],
          [x.OffBlack, "off-black"]
        ]);
      return (z, f) => (c(), h("section", {
        ref_key: "elRef",
        ref: u,
        class: Q(["section", a(I).get(z.theme)])
      }, [o("div", {
        ref_key: "innerRef",
        ref: i,
        class: Q(["inner", a(w) && "is-fixed"])
      }, [o("div", {
        ref_key: "imageSequenceWrapperRef",
        ref: _,
        class: "image-sequence-wrapper",
        style: Ye({
          height: z.sequenceHeight
        })
      }, [a(d).imageSequence ? (c(), h("div", {
        key: 0,
        ref_key: "imageSequenceRef",
        ref: v,
        class: "image-sequence"
      }, [Ie(z.$slots, "imageSequence", {}, void 0, !0)], 512)) : H("", !0), a(d).stickyContent ? (c(), h("div", Mt, [o("div", {
        ref_key: "stickyContentRef",
        ref: R,
        class: "sticky-content"
      }, [Ie(z.$slots, "stickyContent", {}, void 0, !0)], 512)])) : H("", !0)], 4), Ie(z.$slots, "components", {}, void 0, !0), o("div", {
        ref_key: "backgroundRef",
        ref: s,
        class: "background"
      }, null, 512)], 2)], 2))
    }
  }),
  ce = F(zt, [
    ["__scopeId", "data-v-2c2fed7d"]
  ]),
  Pt = {
    class: "content"
  },
  Ft = {
    class: "image-wrapper"
  },
  Ot = {
    class: "hotspot"
  },
  Et = {
    class: "hotspot-content"
  },
  Ht = {
    class: "copy-wrapper"
  },
  Dt = q({
    __name: "Crown",
    props: {
      copy: {},
      hotspotCopy: {},
      hotspotTitle: {},
      image: {},
      menuTitle: {},
      subtitle: {},
      title: {}
    },
    setup(e) {
      const t = p(null),
        l = p(null),
        r = p(null),
        n = p(null),
        m = p(null),
        d = p(null),
        u = p(null);
      let i;
      ee(() => {
        i && i.kill()
      });
      const s = () => {
        if (t.value) {
          const _ = new Ce(u.value, {
            type: "lines"
          });
          i = X.timeline({
            paused: !0,
            defaults: {
              ease: "power3.out",
              stagger: .08
            }
          }), i.addLabel("start").set(t.value, {
            autoAlpha: 1
          }).fromTo([m.value, d.value], {
            autoAlpha: 0,
            y: 60
          }, {
            autoAlpha: 1,
            duration: 1.5,
            stagger: .05,
            y: 0
          }, "start"), _ && i.fromTo(_.lines, {
            y: 60
          }, {
            duration: 1.3,
            y: 0
          }, "start+=0.2").fromTo(_.lines, {
            autoAlpha: 0
          }, {
            autoAlpha: 1,
            duration: 1.5
          }, "start+=0.2"), i.fromTo(n.value, {
            scaleY: 0
          }, {
            duration: 1.5,
            scaleY: 1
          }, "start").fromTo(l.value, {
            autoAlpha: 0,
            y: 80
          }, {
            autoAlpha: 1,
            duration: 1,
            stagger: .05,
            y: 0
          }, "start+=0.45"), r.value && i.fromTo(r.value, {
            autoAlpha: 0,
            y: 80
          }, {
            autoAlpha: 1,
            duration: 1,
            stagger: .05,
            y: 0
          }, "start+=0.5"), i.play()
        }
      };
      return (_, v) => {
        const R = re,
          w = ce;
        return c(), O(w, {
          id: _.menuTitle,
          class: "crown",
          "on-enter": s,
          theme: a(x).Black
        }, {
          components: J(() => [o("div", Pt, [o("div", Ft, [B(R, Ge(qe(_.image)), null, 16)]), o("div", {
            ref_key: "bottomRef",
            ref: t,
            class: "bottom"
          }, [o("div", Ot, [o("div", Et, [o("div", {
            ref_key: "hotspotTitleRef",
            ref: l,
            class: "hotspot-title"
          }, y(_.hotspotTitle), 513), _.hotspotCopy ? (c(), h("p", {
            key: 0,
            ref_key: "hotspotCopyRef",
            ref: r,
            class: "hotspot-copy"
          }, y(_.hotspotCopy), 513)) : H("", !0)]), o("div", {
            ref_key: "hotspotLineRef",
            ref: n,
            class: "hotspot-line"
          }, null, 512)]), o("div", Ht, [o("div", null, [o("h2", {
            ref_key: "titleRef",
            ref: m,
            class: "title"
          }, y(_.title), 513), o("h3", {
            ref_key: "subtitleRef",
            ref: d,
            class: "subtitle"
          }, y(_.subtitle), 513)]), o("p", {
            ref_key: "copyRef",
            ref: u,
            class: "copy"
          }, y(_.copy), 513)])], 512)])]),
          _: 1
        }, 8, ["id", "theme"])
      }
    }
  }),
  Nt = F(Dt, [
    ["__scopeId", "data-v-1e4c6e96"]
  ]),
  Wt = {
    class: "content"
  },
  Ut = {
    class: "tag-mobile"
  },
  jt = ["innerHTML"],
  Xt = {
    class: "tags"
  },
  Yt = {
    class: "image-wrapper"
  },
  Zt = q({
    __name: "Manifesto",
    props: {
      copy: {},
      image: {},
      labelLeft: {},
      labelRight: {},
      menuTitle: {},
      tags: {},
      title: {}
    },
    setup(e) {
      const t = e,
        l = ye(() => Ze(t.copy)),
        r = p(null),
        n = p(null),
        m = p(null),
        d = p(null),
        u = p([]);
      let i;
      ee(() => {
        i && i.kill()
      });
      const s = () => {
        var _, v;
        r.value && (i = X.timeline({
          paused: !0,
          defaults: {
            ease: "power3.out",
            stagger: .08
          }
        }), i.addLabel("start").set(r.value, {
          autoAlpha: 1
        }), (_ = d.value) != null && _.children && i.fromTo(d.value.children, {
          autoAlpha: 0,
          y: 60
        }, {
          autoAlpha: 1,
          duration: 1.5,
          stagger: .05,
          y: 0
        }, "start"), i.fromTo([n.value, m.value], {
          autoAlpha: 0,
          y: 100
        }, {
          autoAlpha: 1,
          duration: 1.3,
          y: 0
        }, "start"), ((v = u.value) == null ? void 0 : v.length) > 0 && i.fromTo(u.value, {
          autoAlpha: 0
        }, {
          autoAlpha: 1,
          duration: 1,
          stagger: .15,
          y: 0
        }, "start+=0.5"), i.play())
      };
      return (_, v) => {
        const R = me,
          w = re,
          S = ce;
        return c(), O(S, {
          id: _.menuTitle,
          class: "manifesto",
          "on-enter": s,
          theme: a(x).BurnedOrange
        }, {
          components: J(() => [o("div", Wt, [o("div", {
            ref_key: "wrapperRef",
            ref: r,
            class: "wrapper"
          }, [o("span", Ut, [o("span", null, y(_.tags[0]), 1), B(R, {
            name: "Crosshair"
          })]), o("span", {
            ref_key: "labelLeftRef",
            ref: n,
            class: "label left"
          }, y(_.labelLeft), 513), o("div", {
            ref_key: "copyRef",
            ref: d,
            class: "copy",
            innerHTML: a(l)
          }, null, 8, jt), o("span", {
            ref_key: "labelRightRef",
            ref: m,
            class: "label right"
          }, y(_.labelRight), 513), o("div", Xt, [(c(!0), h(N, null, W(_.tags, $ => (c(), h("span", {
            ref_for: !0,
            ref_key: "tagRefs",
            ref: u,
            key: `manifesto-tag-${$}`,
            class: "tag"
          }, [B(R, {
            name: "Crosshair"
          }), o("span", null, y($), 1)]))), 128))])], 512), o("div", Yt, [B(w, E({
            sizes: "xs:500px sm:600px md:600px lg:700px xl:700px xxl:900px"
          }, _.image), null, 16)])])]),
          _: 1
        }, 8, ["id", "theme"])
      }
    }
  }),
  Jt = F(Zt, [
    ["__scopeId", "data-v-daef796f"]
  ]),
  Qt = {
    key: 0,
    class: "label"
  },
  Kt = q({
    __name: "Copy",
    props: {
      size: {},
      theme: {},
      _uid: {},
      copy: {},
      hotspot: {},
      label: {},
      title: {}
    },
    setup(e, {
      expose: t
    }) {
      const l = p(null),
        r = p(null),
        n = p(null);
      let m, d;
      return t({
        enter: () => {
          if (l.value) {
            m = X.timeline({
              paused: !0,
              defaults: {
                ease: "power3.out"
              }
            });
            const s = 25;
            if (m.addLabel("start").set(l.value, {
                autoAlpha: 1
              }), r.value && m.fromTo(r.value, {
                autoAlpha: 0,
                y: s
              }, {
                autoAlpha: 1,
                duration: .7,
                y: 0
              }, "start"), n.value) {
              d = new Ce(n.value, {
                type: "lines"
              });
              const _ = r.value ? .05 : 0;
              m.fromTo(d.lines, {
                y: s
              }, {
                duration: 1,
                stagger: .1,
                y: 0
              }, `start+=${_}`).fromTo(d.lines, {
                autoAlpha: 0
              }, {
                autoAlpha: 1,
                duration: 1.5,
                stagger: .1
              }, `start+=${_}`)
            }
            m.play()
          }
        },
        leave: (s, _) => {
          m && m.kill(), X.to(s, {
            autoAlpha: 0,
            duration: .3,
            onComplete: () => {
              d && d.revert(), _()
            }
          })
        }
      }), (s, _) => (c(), h("div", {
        ref_key: "elRef",
        ref: l,
        class: Q(["copy", s.theme === a(x).Black && "black", s.size === a(ve).Large && "large"])
      }, [s.title ? (c(), h("div", {
        key: 0,
        ref_key: "titleRef",
        ref: r,
        class: "title"
      }, [s.label ? (c(), h("span", Qt, y(s.label) + ".", 1)) : H("", !0), he(" " + y(s.title), 1)], 512)) : H("", !0), o("p", {
        ref_key: "copyRef",
        ref: n,
        class: "text"
      }, y(s.copy), 513)], 2))
    }
  }),
  Oe = F(Kt, [
    ["__scopeId", "data-v-879cd05a"]
  ]),
  eo = q({
    __name: "Dual",
    props: {
      _uid: {},
      alignment: {},
      component: {},
      data: {},
      frame: {},
      mobileVariant: {},
      size: {},
      theme: {},
      visible: {
        type: Boolean
      }
    },
    setup(e, {
      expose: t
    }) {
      const l = p(null),
        r = p(null),
        n = p(!1);
      return t({
        enter: () => {
          n.value = !0, l.value && X.set(l.value, {
            autoAlpha: 1
          }), r.value.length > 0 && r.value.forEach(u => {
            u.enter()
          })
        },
        leave: (u, i) => {
          n.value = !1, X.to(u, {
            autoAlpha: 0,
            duration: .3,
            onComplete: i
          })
        }
      }), (u, i) => (c(), h("div", {
        ref_key: "elRef",
        ref: l,
        class: Q(["dual", a(n) && "entered"])
      }, [(c(!0), h(N, null, W(u.data.blocks, s => (c(), O(a(Oe), E({
        ref_for: !0,
        ref_key: "copyRefs",
        ref: r,
        key: s._uid,
        size: u.size,
        theme: u.theme
      }, s), null, 16, ["size", "theme"]))), 128))], 2))
    }
  }),
  to = F(eo, [
    ["__scopeId", "data-v-1e8e1c8d"]
  ]),
  oo = {
    class: "text"
  },
  no = {
    key: 0,
    class: "arrow"
  },
  so = q({
    __name: "Label",
    props: {
      hasArrow: {
        type: Boolean,
        default: !1
      },
      text: {},
      theme: {
        default: x.MidGrey
      }
    },
    setup(e) {
      return (t, l) => {
        const r = me;
        return c(), h("span", {
          class: Q(["label", t.theme === a(x).OffBlack && "off-black"])
        }, [o("span", oo, y(t.text), 1), t.hasArrow ? (c(), h("span", no, [B(r, {
          name: "ArrowRight"
        })])) : H("", !0)], 2)
      }
    }
  }),
  Ee = F(so, [
    ["__scopeId", "data-v-76775a58"]
  ]),
  ao = {
    class: "label-wrapper"
  },
  lo = {
    key: 1
  },
  io = {
    key: 1
  },
  ro = q({
    __name: "Labels",
    props: {
      _uid: {},
      alignment: {},
      component: {},
      data: {},
      frame: {},
      mobileVariant: {},
      size: {},
      theme: {},
      visible: {
        type: Boolean
      }
    },
    setup(e, {
      expose: t
    }) {
      const l = p(null),
        r = p(null),
        n = p(null),
        m = p(null);
      let d;
      return t({
        enter: () => {
          var s, _;
          l.value && (d = X.timeline({
            paused: !0,
            defaults: {
              ease: "power3.out"
            }
          }), d.addLabel("start").set(l.value, {
            autoAlpha: 1
          }), r.value && d.fromTo(r.value, {
            autoAlpha: 0
          }, {
            autoAlpha: 1,
            duration: .7
          }, "start"), (s = m.value) != null && s.$el && d.fromTo((_ = m.value) == null ? void 0 : _.$el, {
            autoAlpha: 0
          }, {
            autoAlpha: 1,
            duration: .7
          }, "start+=0.1"), n.value && d.fromTo(n.value, {
            autoAlpha: 0
          }, {
            autoAlpha: 1,
            duration: .7
          }, "start"), d.play())
        },
        leave: (s, _) => {
          d && d.kill(), X.to(s, {
            autoAlpha: 0,
            duration: .3,
            onComplete: _
          })
        }
      }), (s, _) => {
        const v = ze;
        return c(), h("div", {
          ref_key: "elRef",
          ref: l,
          class: Q(["labels", s.theme === a(x).Black && "black", s.mobileVariant === a(ke).Vertical && "vertical"])
        }, [o("div", ao, [o("div", {
          ref_key: "labelLeftRef",
          ref: r,
          class: "label left"
        }, [s.data.labelLeft.number ? (c(), O(v, E({
          key: 0,
          start: s.visible
        }, s.data.labelLeft), null, 16, ["start"])) : (c(), h("div", lo, y(s.data.labelLeft.label), 1))], 512), s.data.tag ? (c(), O(a(Ee), {
          key: 0,
          ref_key: "pillRef",
          ref: m,
          "has-arrow": !0,
          text: s.data.tag,
          theme: a(x).OffBlack
        }, null, 8, ["text", "theme"])) : H("", !0)]), o("div", {
          ref_key: "labelRightRef",
          ref: n,
          class: "label right"
        }, [s.data.labelRight.number ? (c(), O(v, Ge(E({
          key: 0
        }, s.data.labelRight)), null, 16)) : (c(), h("div", io, y(s.data.labelRight.label), 1))], 512)], 2)
      }
    }
  }),
  co = F(ro, [
    ["__scopeId", "data-v-020bdae2"]
  ]),
  uo = q({
    __name: "SectionTitle",
    props: {
      _uid: {},
      alignment: {},
      component: {},
      data: {},
      frame: {},
      mobileVariant: {},
      size: {},
      theme: {},
      visible: {
        type: Boolean
      }
    },
    setup(e, {
      expose: t
    }) {
      const l = p(null),
        r = p(null),
        n = p(null),
        m = p(null);
      let d, u;
      ee(() => {
        d && d.kill()
      });
      const i = new Map([
        [M.TopCenter, "top-center"],
        [M.Left, "left"],
        [M.Bottom, "bottom"],
        [M.BottomCenter, "bottom-center"]
      ]);
      return t({
        enter: () => {
          if (l.value) {
            d = X.timeline({
              paused: !0,
              defaults: {
                ease: "power3.out"
              }
            });
            const v = 25;
            d.addLabel("start").set(l.value, {
              autoAlpha: 1
            }), r.value && d.fromTo(r.value, {
              autoAlpha: 0,
              y: v
            }, {
              autoAlpha: 1,
              duration: .7,
              y: 0
            }, "start"), n.value && d.fromTo(n.value, {
              autoAlpha: 0,
              y: v
            }, {
              autoAlpha: 1,
              duration: .7,
              y: 0
            }, "start+=0.1"), m.value && (u = new Ce(m.value, {
              type: "lines"
            }), d.fromTo(u.lines, {
              y: v
            }, {
              duration: 1,
              stagger: .1,
              y: 0
            }, "start+=0.2").fromTo(u.lines, {
              autoAlpha: 0
            }, {
              autoAlpha: 1,
              duration: 1.5,
              stagger: .1
            }, "start+=0.2")), d.play()
          }
        },
        leave: (v, R) => {
          d && d.kill(), X.to(v, {
            autoAlpha: 0,
            duration: .3,
            onComplete: () => {
              u && u.revert(), R()
            }
          })
        }
      }), (v, R) => (c(), h("div", {
        ref_key: "elRef",
        ref: l,
        class: Q(["section-title", a(i).get(v.alignment ?? a(M).Center), v.theme === a(x).Black && "black"])
      }, [o("div", null, [o("h2", {
        ref_key: "titleRef",
        ref: r,
        class: "title"
      }, y(v.data.title), 513), o("h3", {
        ref_key: "subtitleRef",
        ref: n,
        class: "subtitle"
      }, y(v.data.subtitle), 513)]), v.data.copy ? (c(), h("p", {
        key: 0,
        ref_key: "copyRef",
        ref: m,
        class: "copy"
      }, y(v.data.copy), 513)) : H("", !0)], 2))
    }
  }),
  po = F(uo, [
    ["__scopeId", "data-v-e8ab0469"]
  ]),
  mo = q({
    __name: "Single",
    props: {
      _uid: {},
      alignment: {},
      component: {},
      data: {},
      frame: {},
      mobileVariant: {},
      size: {},
      theme: {},
      visible: {
        type: Boolean
      }
    },
    setup(e, {
      expose: t
    }) {
      const l = e,
        r = p(null),
        n = p(null);
      return t({
        enter: () => {
          r.value && X.set(r.value, {
            autoAlpha: 1
          }), n.value && n.value.enter()
        },
        leave: (u, i) => {
          n.value && n.value.leave(u, i)
        }
      }), (u, i) => (c(), h("div", {
        ref_key: "elRef",
        ref: r,
        class: "single"
      }, [B(a(Oe), E({
        ref_key: "copyRef",
        ref: n,
        size: u.size,
        theme: u.theme
      }, l.data), null, 16, ["size", "theme"])], 512))
    }
  }),
  _o = F(mo, [
    ["__scopeId", "data-v-30f709e9"]
  ]),
  fo = q({
    __name: "ImageSequenceBlock",
    props: {
      _uid: {},
      alignment: {
        default: M.BottomLeft
      },
      component: {},
      data: {},
      frame: {},
      mobileVariant: {},
      size: {
        default: ve.Small
      },
      theme: {
        default: x.LightGrey
      },
      visible: {
        type: Boolean
      }
    },
    setup(e) {
      const t = e,
        l = p(null),
        r = new Map([
          [M.Center, "center"],
          [M.Bottom, "bottom"],
          [M.BottomCenter, "bottom-center"],
          [M.BottomLeft, "bottom-left"],
          [M.BottomRight, "bottom-right"],
          [M.TopLeft, "top-left"],
          [M.TopCenter, "top-center"]
        ]),
        n = new Map([
          ["Dual", to],
          ["Labels", co],
          ["SectionTitle", po],
          ["Single", _o]
        ]),
        m = () => {
          l.value && l.value.enter()
        },
        d = (u, i) => {
          l.value && l.value.leave(u, i)
        };
      return (u, i) => (c(), O(Je, {
        name: "imageSequenceBlockTransition",
        css: !1,
        onEnter: m,
        onLeave: d
      }, {
        default: J(() => [ue((c(), O(de(a(n).get(u.component)), E({
          ref_key: "blockRef",
          ref: l,
          class: ["image-sequence-block", a(r).get(u.alignment)]
        }, t), null, 16, ["class"])), [
          [Me, u.visible]
        ])]),
        _: 1
      }))
    }
  }),
  Le = F(fo, [
    ["__scopeId", "data-v-3c6c172b"]
  ]),
  ho = q({
    __name: "AmbxWishbones",
    props: {
      blocks: {},
      copy: {},
      menuTitle: {},
      render: {},
      subtitle: {},
      title: {}
    },
    setup(e) {
      const t = e,
        {
          hook: l,
          hooks: r
        } = te(),
        n = K(),
        {
          windowSize: m
        } = oe(n),
        {
          enterFrame: d,
          firstFrame: u,
          totalFrames: i
        } = Te(ie.ACF01, le.AmbxWishbones),
        s = p(0),
        _ = p({
          bottom: 0,
          height: 0,
          top: 0
        }),
        v = p(0),
        R = p(null),
        w = p([]),
        S = p(1),
        $ = ye(() => m.value.width < pe.Small);
      ae(() => {
        l("window:raf", I)
      }), ee(() => {
        r.removeHook("window:raf", I)
      });
      const L = ({
          bottom: b,
          height: G,
          top: g
        }) => {
          _.value = {
            bottom: b,
            height: G,
            top: g
          }
        },
        A = b => {
          v.value = b
        },
        C = b => {
          s.value = b
        },
        T = () => {
          setTimeout(() => {
            Be({
              imageEls: w,
              imageSequenceName: le.AmbxWishbones,
              product: ie.ACF01
            })
          }, 700)
        },
        I = () => {
          if (R.value && s.value) {
            if ($.value) {
              const b = {
                  frameRange: [0, 90],
                  min: 30,
                  max: 0
                },
                G = {
                  frameRange: [140, 158],
                  min: 0,
                  max: -7
                },
                g = {
                  frameRange: [158, 247],
                  min: -7,
                  max: 10
                },
                k = {
                  frameRange: [0, 90],
                  min: 1,
                  max: 2
                },
                V = Y(D(b.frameRange, [b.min, b.max], s.value), b.max, b.min),
                U = Y(D(G.frameRange, [G.min, G.max], s.value), G.max, G.min),
                P = Y(D(g.frameRange, [g.min, g.max], s.value), g.min, g.max);
              S.value = Y(D(k.frameRange, [k.max, k.min], s.value), k.min, k.max);
              let j = V;
              s.value > g.frameRange[0] ? j = P : s.value > G.frameRange[0] && (j = U), R.value.$el.style.transform = `translate3d(0, ${j}vh, 0) scale(${S.value})`
            }
            if (!$.value) {
              const b = {
                  frameRange: [0, 150],
                  min: 30,
                  max: -57
                },
                G = {
                  frameRange: [172, 247],
                  min: -57,
                  max: -21
                },
                g = {
                  frameRange: [0, 172],
                  min: 1.6,
                  max: 3
                },
                k = Y(D(b.frameRange, [b.min, b.max], s.value), b.max, b.min),
                V = Y(D(G.frameRange, [G.min, G.max], s.value), G.min, G.max);
              S.value = Y(D(g.frameRange, [g.max, g.min], s.value), g.min, g.max);
              const U = s.value > G.frameRange[0] ? V : k;
              R.value.$el.style.transform = `translate3d(0, ${U}vh, 0) scale(${S.value})`
            }
          }
        },
        z = [{
          _uid: "hotspot-1-A",
          frame: {
            mobile: {
              start: 81,
              end: 100
            },
            desktop: {
              start: 48,
              end: 90
            }
          },
          label: "A",
          position: {
            x: -9,
            y: -24
          }
        }, {
          _uid: "hotspot-1-B",
          frame: {
            mobile: {
              start: 100,
              end: 120
            },
            desktop: {
              start: 90,
              end: 120
            }
          },
          label: "B",
          position: {
            x: -12.5,
            y: -10
          }
        }, {
          _uid: "hotspot-1-C",
          frame: {
            mobile: {
              start: 120,
              end: 140
            },
            desktop: {
              start: 112,
              end: 148
            }
          },
          label: "C",
          position: {
            x: 17.5,
            y: -2
          }
        }],
        f = [{
          _uid: "ambx-content-block-01",
          alignment: M.TopCenter,
          component: Z.SectionTitle,
          data: {
            _uid: "ambx-content-block-01-01",
            copy: t.copy ?? "",
            subtitle: t.subtitle ?? "",
            title: t.title ?? ""
          },
          frame: {
            mobile: {
              start: 48,
              end: 70
            },
            desktop: {
              start: 48,
              end: 89
            }
          },
          theme: x.LightGrey
        }, {
          _uid: "ambx-content-block-01",
          alignment: M.BottomLeft,
          component: Z.Single,
          data: {
            _uid: "ambx-content-block-01-01",
            copy: "Open worked to control visually the mainspring. Equipped with slipping bridle to avoid excessive tension.",
            label: "A",
            title: "Barrel"
          },
          frame: {
            mobile: {
              start: 70,
              end: 100
            },
            desktop: {
              start: 48,
              end: 90
            }
          },
          theme: x.LightGrey
        }, {
          _uid: "ambx-content-block-02",
          alignment: M.TopLeft,
          component: Z.Single,
          data: {
            _uid: "ambx-content-block-02-01",
            copy: "Optimized transmission of torque from the barrel to the tourbillon. Enhanced accuracy.",
            label: "B",
            title: "Geartrain"
          },
          frame: {
            mobile: {
              start: 100,
              end: 120
            },
            desktop: {
              start: 90,
              end: 120
            }
          },
          theme: x.LightGrey
        }, {
          _uid: "ambx-content-block-03",
          alignment: M.BottomRight,
          component: Z.Single,
          data: {
            _uid: "ambx-content-block-03-01",
            copy: "Improved smooth winding and time-setting.",
            label: "C",
            title: "Setting System"
          },
          frame: {
            mobile: {
              start: 120,
              end: 140
            },
            desktop: {
              start: 112,
              end: 148
            }
          },
          theme: x.LightGrey
        }, {
          _uid: "ambx-content-block-04",
          alignment: M.BottomCenter,
          component: Z.SectionTitle,
          data: {
            _uid: "ambx-content-block-04-01",
            copy: "A captivating sophistication of horological kinematics. 60-second rotating cage.",
            subtitle: "Mesmerizing by the Minute",
            title: "Flying Tourbillon"
          },
          frame: {
            mobile: {
              start: 148,
              end: 195
            },
            desktop: {
              start: 153,
              end: 195
            }
          },
          theme: x.LightGrey
        }, {
          _uid: "ambx-content-block-05",
          alignment: M.TopCenter,
          component: Z.SectionTitle,
          data: {
            _uid: "ambx-content-block-05-01",
            copy: "Scaling down the double-wishbone system requires exceptional Engineering expertise and precision. Arms in Titanium Grade 5.",
            subtitle: "A technical tour de force.",
            title: "Double-wishbone System"
          },
          frame: {
            mobile: {
              start: 217,
              end: i
            },
            desktop: {
              start: 237,
              end: i
            }
          },
          theme: x.LightGrey
        }];
      return (b, G) => {
        const g = Le,
          k = ce;
        return c(), O(k, {
          class: "ambx-wishbones",
          "on-get-bounds": L,
          "on-progress": A,
          "on-start-loading": T,
          "sequence-height": "500lvh"
        }, {
          imageSequence: J(() => [B(a(xe), {
            ref_key: "imageSequenceRef",
            ref: R,
            bounds: a(_),
            "enter-frame": a(d),
            "first-frame": a(u),
            fit: a(ke).Vertical,
            hotspots: z,
            "image-els": a(w).map(V => V.image),
            "on-get-frame": C,
            progress: a(v),
            scale: a(S),
            "total-frames": a(i)
          }, null, 8, ["bounds", "enter-frame", "first-frame", "fit", "image-els", "progress", "scale", "total-frames"])]),
          stickyContent: J(() => [(c(), h(N, null, W(f, V => {
            var U, P, j, ne;
            return B(g, E({
              key: V._uid,
              visible: a(s) >= ((P = (U = V.frame) == null ? void 0 : U[a($) ? "mobile" : "desktop"]) == null ? void 0 : P.start) && a(s) <= ((ne = (j = V.frame) == null ? void 0 : j[a($) ? "mobile" : "desktop"]) == null ? void 0 : ne.end)
            }, V), null, 16, ["visible"])
          }), 64))]),
          _: 1
        })
      }
    }
  }),
  vo = F(ho, [
    ["__scopeId", "data-v-1487a088"]
  ]),
  go = q({
    __name: "ArmsBackplate",
    props: {
      blocks: {},
      copy: {},
      menuTitle: {},
      render: {},
      subtitle: {},
      title: {}
    },
    setup(e) {
      const t = e,
        l = K(),
        {
          windowSize: r
        } = oe(l),
        {
          enterFrame: n,
          firstFrame: m,
          totalFrames: d
        } = Te(ie.ACF01, le.ArmsBackPlate),
        u = p(0),
        i = p({
          bottom: 0,
          height: 0,
          top: 0
        }),
        s = p(0),
        _ = p([]),
        v = ye(() => r.value.width < pe.Small),
        R = ({
          bottom: A,
          height: C,
          top: T
        }) => {
          i.value = {
            bottom: A,
            height: C,
            top: T
          }
        },
        w = A => {
          u.value = A, A > 96 && l.theme !== x.LightGrey ? l.setTheme(x.LightGrey) : l.theme !== x.Black && l.setTheme(x.Black), v.value
        },
        S = A => {
          s.value = A
        },
        $ = () => {
          Be({
            imageEls: _,
            imageSequenceName: le.ArmsBackPlate,
            product: ie.ACF01
          })
        },
        L = [{
          _uid: "arms-bp-content-block-01",
          alignment: M.Left,
          component: Z.SectionTitle,
          data: {
            _uid: "arms-bp-content-block-01-01",
            copy: t.copy ?? "",
            subtitle: t.subtitle ?? "",
            title: t.title ?? ""
          },
          frame: {
            mobile: {
              start: 58,
              end: 96
            },
            desktop: {
              start: 58,
              end: 96
            }
          },
          theme: x.Black
        }, {
          _uid: "arms-bp-content-block-02",
          alignment: M.Center,
          component: Z.Labels,
          data: {
            _uid: "arms-bp-content-block-02-01",
            labelLeft: {
              label: "Sapphire caseback"
            },
            labelRight: {
              label: "Available as an option."
            }
          },
          frame: {
            mobile: {
              start: 100,
              end: 159
            },
            desktop: {
              start: 100,
              end: 159
            }
          },
          mobileVariant: ke.Vertical,
          theme: x.LightGrey
        }, {
          _uid: "arms-bp-content-block-03",
          alignment: M.BottomLeft,
          component: Z.Single,
          data: {
            _uid: "ambx-content-block-03-01",
            copy: "The rigidity prevents distortion in the event of impact or other shocks.",
            title: "Baseplate"
          },
          frame: {
            mobile: {
              start: 100,
              end: 159
            },
            desktop: {
              start: 100,
              end: 159
            }
          },
          size: ve.Large,
          theme: x.LightGrey
        }];
      return (A, C) => {
        const T = xe,
          I = Le,
          z = ce;
        return c(), O(z, {
          class: "arms-backplate",
          "on-get-bounds": R,
          "on-progress": S,
          "on-start-loading": $,
          "sequence-height": "250lvh",
          theme: a(u) > 96 ? a(x).LightGrey : a(x).Black
        }, {
          imageSequence: J(() => [B(T, {
            bounds: a(i),
            class: "image-sequence",
            "enter-frame": a(n),
            "first-frame": a(m),
            fit: a(ke).Vertical,
            "image-els": a(_).map(f => f.image),
            "on-get-frame": w,
            progress: a(s),
            "total-frames": a(d)
          }, null, 8, ["bounds", "enter-frame", "first-frame", "fit", "image-els", "progress", "total-frames"])]),
          stickyContent: J(() => [(c(), h(N, null, W(L, f => {
            var b, G, g, k;
            return B(I, E({
              key: f._uid,
              visible: a(u) >= ((G = (b = f.frame) == null ? void 0 : b[a(v) ? "mobile" : "desktop"]) == null ? void 0 : G.start) && a(u) <= ((k = (g = f.frame) == null ? void 0 : g[a(v) ? "mobile" : "desktop"]) == null ? void 0 : k.end)
            }, f), null, 16, ["visible"])
          }), 64))]),
          _: 1
        }, 8, ["theme"])
      }
    }
  }),
  yo = F(go, [
    ["__scopeId", "data-v-e42eb66d"]
  ]),
  bo = e => (Re("data-v-da05b940"), e = e(), $e(), e),
  ko = {
    class: "description-list"
  },
  Ro = {
    class: "head"
  },
  $o = bo(() => o("div", {
    class: "label right hidden-mobile"
  }, "Total", -1)),
  wo = {
    class: "items"
  },
  So = Qe('<div class="row row-head" data-v-da05b940><div class="group" data-v-da05b940><span class="column" data-v-da05b940>Item</span><span class="column" data-v-da05b940>Material</span></div><div class="group" data-v-da05b940><span class="column" data-v-da05b940>Quality</span><span class="column" data-v-da05b940>Weight</span></div></div>', 1),
  Co = {
    class: "items-list"
  },
  To = {
    class: "group"
  },
  xo = {
    class: "column"
  },
  Bo = {
    class: "column"
  },
  Lo = {
    class: "group"
  },
  Ao = {
    class: "column"
  },
  Io = {
    class: "column"
  },
  Go = q({
    __name: "DescriptionList",
    props: {
      _uid: {},
      totalWeight: {},
      items: {}
    },
    setup(e) {
      const {
        hooks: t
      } = te(), l = K(), {
        windowSize: r
      } = oe(l), n = p(null), m = p(!1);
      ae(() => {
        t.hook("window:raf", d)
      }), ee(() => {
        t.removeHook("window:raf", d)
      });
      const d = () => {
        var u;
        if ((u = n.value) != null && u.$el) {
          const {
            bottom: s,
            top: _
          } = n.value.$el.getBoundingClientRect();
          m.value = _ <= r.value.height - 50 && s >= 50
        }
      };
      return (u, i) => (c(), h("div", ko, [o("div", Ro, [B(a(ze), {
        ref_key: "counterRef",
        ref: n,
        class: "label left",
        label: "G",
        number: u.totalWeight,
        start: a(m)
      }, null, 8, ["number", "start"]), $o]), o("div", wo, [So, o("ul", Co, [(c(!0), h(N, null, W(u.items, s => (c(), h("li", {
        key: s._uid,
        class: "row"
      }, [o("div", To, [o("span", xo, y(s.item), 1), o("span", Bo, y(s.material), 1)]), o("div", Lo, [o("span", Ao, y(s.quality), 1), o("span", Io, y(s.weight) + " G", 1)])]))), 128))])])]))
    }
  }),
  He = F(Go, [
    ["__scopeId", "data-v-da05b940"]
  ]),
  Vo = {
    class: "gallery"
  },
  qo = {
    class: "content"
  },
  Mo = {
    class: "head"
  },
  zo = {
    class: "title"
  },
  Po = {
    class: "subtitle"
  },
  Fo = {
    class: "copy"
  },
  Oo = {
    class: "inner"
  },
  Eo = {
    class: "media-indicator-wrapper"
  },
  Ho = {
    class: "indicator-title-wrapper"
  },
  Do = {
    class: "indicator-section-number-wrapper"
  },
  No = {
    class: "indicator-count-wrapper"
  },
  Wo = {
    class: "indicator-current"
  },
  Uo = {
    class: "indicator-caption-wrapper"
  },
  jo = q({
    __name: "Gallery",
    props: {
      _uid: {},
      copy: {},
      media: {},
      subtitle: {},
      title: {}
    },
    setup(e, {
      expose: t
    }) {
      const l = e,
        {
          hook: r,
          hooks: n
        } = te(),
        m = K(),
        {
          windowSize: d
        } = oe(m),
        u = p(null),
        i = p([]),
        s = p(1),
        _ = p("Ergonomic Curve"),
        v = p("Image caption"),
        R = p(null),
        w = p(null),
        S = p(null),
        $ = p(null),
        L = p(null),
        A = p(null),
        C = p(!1),
        T = p(!1);
      let I;
      ae(() => {
        var g;
        r("window:raf", z), ((g = i.value) == null ? void 0 : g.length) > 0 && i.value.forEach(k => {
          const V = k.querySelector("video");
          V && V.addEventListener("loadeddata", () => {
            n.callHook("section:setHeight")
          }, !1)
        })
      }), ee(() => {
        I && I.kill(), n.removeHook("window:raf", z)
      });
      const z = () => {
          if (u.value) {
            const {
              bottom: g,
              top: k
            } = u.value.getBoundingClientRect();
            k <= d.value.height / 2 && g >= d.value.height / 2 ? C.value || (C.value = !0, f()) : C.value && (C.value = !1, b())
          }((i == null ? void 0 : i.value) || []).forEach((g, k) => {
            const {
              bottom: V,
              height: U,
              top: P
            } = g.getBoundingClientRect(), j = d.value.height / 2;
            if (g.firstChild) {
              const ne = j,
                fe = j - U,
                se = 3,
                Ne = Y(D([ne, fe], [-se, se], P), -se, se);
              X.set(g.firstChild, {
                yPercent: Ne
              })
            }
            P <= j && V >= j && (s.value = k + 1, _.value = l.media[k].tag ?? "", v.value = l.media[k].alt)
          })
        },
        f = () => {
          if (R.value) {
            I && I.kill(), I = X.timeline({
              paused: !0
            });
            const g = d.value.width >= pe.Small,
              k = 30;
            I.addLabel("start").set(R.value, {
              autoAlpha: 1
            }).fromTo(w.value, {
              scaleX: 0
            }, {
              duration: .7,
              ease: "power3.out",
              scaleX: 1
            }, "start").fromTo(S.value, {
              y: k
            }, {
              duration: .6,
              ease: "expo.out",
              y: 0
            }, "start+=0.3").fromTo($.value, {
              y: g ? k : -k
            }, {
              duration: .6,
              ease: "expo.out",
              y: 0
            }, `start+=${g?"0.4":"0.3"}`).fromTo(L.value, {
              y: g ? k : -k
            }, {
              duration: .6,
              ease: "expo.out",
              y: 0
            }, `start+=${g?"0.5":"0.3"}`).fromTo(A.value, {
              y: k
            }, {
              duration: .6,
              ease: "expo.out",
              y: 0
            }, `start+=${g?"0.6":"0.3"}`), I.play()
          }
        },
        b = () => {
          I && I.kill(), I = X.timeline({
            paused: !0
          });
          const g = d.value.width >= pe.Small,
            k = 30;
          I.addLabel("start").fromTo(w.value, {
            scaleX: 1
          }, {
            duration: .7,
            ease: "power3.out",
            scaleX: 0
          }, "start+=0.15").fromTo(S.value, {
            y: 0
          }, {
            duration: .6,
            ease: "expo.out",
            y: k
          }, "start").fromTo($.value, {
            y: 0
          }, {
            duration: .6,
            ease: "expo.out",
            y: g ? k : -k
          }, "start").fromTo(L.value, {
            y: 0
          }, {
            duration: .6,
            ease: "expo.out",
            y: g ? k : -k
          }, "start").fromTo(A.value, {
            y: 0
          }, {
            duration: .6,
            ease: "expo.out",
            y: k
          }, "start").set(R.value, {
            autoAlpha: 0
          }), I.play()
        };
      return t({
        loadVideo: () => {
          T.value = !0
        }
      }), (g, k) => {
        const V = Pe,
          U = re;
        return c(), h("div", Vo, [o("div", qo, [o("div", Mo, [o("div", null, [o("h2", zo, y(g.title), 1), o("h3", Po, y(g.subtitle), 1)]), o("p", Fo, y(g.copy), 1)])]), o("div", {
          ref_key: "itemsRef",
          ref: u,
          class: "items"
        }, [(c(!0), h(N, null, W(g.media, P => (c(), h("div", {
          ref_for: !0,
          ref_key: "mediaElRefs",
          ref: i,
          key: P._uid,
          class: "item"
        }, [o("div", Oo, [P.type === a(Ke).Video ? (c(), O(V, E({
          key: 0,
          autoplay: "",
          muted: "",
          loop: "",
          playsinline: "",
          "start-loading": a(T)
        }, P), null, 16, ["start-loading"])) : (c(), O(U, E({
          key: 1,
          sizes: "xs:500px sm:300px md:400px lg:500px xl:600px xxl:800px"
        }, P), null, 16))])]))), 128)), o("div", Eo, [o("div", {
          ref_key: "indicatorRef",
          ref: R,
          class: "media-indicator"
        }, [o("div", {
          ref_key: "indicatorLineRef",
          ref: w,
          class: "indicator-line"
        }, null, 512), o("div", Ho, [o("div", {
          ref_key: "indicatorTitleRef",
          ref: S,
          class: "indicator-title"
        }, y(a(_)), 513)]), o("div", Do, [o("div", {
          ref_key: "indicatorSectionNumberRef",
          ref: $,
          class: "indicator-section-number"
        }, y(2.1), 512)]), o("div", No, [o("div", {
          ref_key: "indicatorCountRef",
          ref: L,
          class: "indicator-count"
        }, [o("span", Wo, y(a(s)), 1), he(" / " + y(g.media.length), 1)], 512)]), o("div", Uo, [o("div", {
          ref_key: "indicatorCaptionRef",
          ref: A,
          class: "indicator-caption"
        }, y(a(v)), 513)])], 512)])], 512)])
      }
    }
  }),
  De = F(jo, [
    ["__scopeId", "data-v-b7906946"]
  ]),
  Xo = q({
    __name: "InspirationMaterial",
    props: {
      blocks: {},
      copy: {},
      menuTitle: {},
      render: {},
      subtitle: {},
      title: {}
    },
    setup(e) {
      const t = e,
        {
          hook: l,
          hooks: r
        } = te(),
        n = K(),
        {
          windowSize: m
        } = oe(n),
        {
          enterFrame: d,
          firstFrame: u,
          totalFrames: i
        } = Te(ie.ACF01, le.InspirationMaterial),
        s = p(0),
        _ = p({
          bottom: 0,
          height: 0,
          top: 0
        }),
        v = p(0),
        R = p(null),
        w = p([]),
        S = p([]),
        $ = ye(() => m.value.width < pe.Small);
      ae(() => {
        l("window:raf", z)
      }), ee(() => {
        r.removeHook("window:raf", z)
      });
      const L = ({
          bottom: g,
          height: k,
          top: V
        }) => {
          _.value = {
            bottom: g,
            height: k,
            top: V
          }
        },
        A = g => {
          s.value = g
        },
        C = g => {
          v.value = g
        },
        T = () => {
          Be({
            imageEls: w,
            imageSequenceName: le.InspirationMaterial,
            product: ie.ACF01
          })
        },
        I = () => {
          (S.value ?? []).forEach(g => {
            g.loadVideo && g.loadVideo()
          })
        },
        z = () => {
          if (R.value && s.value) {
            if ($.value) {
              const g = {
                  frameRange: [10, 80],
                  min: 20,
                  max: 5
                },
                k = {
                  frameRange: [10, 80],
                  min: 1.56,
                  max: 1.44
                },
                V = {
                  frameRange: [10, 80],
                  min: -45,
                  max: 0
                },
                U = Y(D(g.frameRange, [g.min, g.max], s.value), g.max, g.min),
                P = Y(D(k.frameRange, [k.min, k.max], s.value), k.max, k.min),
                j = Y(D(V.frameRange, [V.min, V.max], s.value), V.min, V.max);
              R.value.$el.firstChild.style.transform = `translate3d(0, ${U}vh, 0) scale(${P}) rotate(${j}deg)`
            }
            if (!$.value) {
              const g = {
                  frameRange: [10, 80],
                  min: 20,
                  max: 5
                },
                k = Y(D(g.frameRange, [g.min, g.max], s.value), g.max, g.min);
              R.value.$el.style.transform = `translate3d(0, ${k}vh, 0)`
            }
          }
        },
        f = new Map([
          ["Description List", He],
          ["Gallery", De]
        ]),
        b = [{
          _uid: "hotspot-2-d",
          frame: {
            mobile: {
              start: 80,
              end: 88
            },
            desktop: {
              start: 75,
              end: 88
            }
          },
          label: "D",
          position: {
            x: -23,
            y: 1
          }
        }, {
          _uid: "hotspot-2-e",
          frame: {
            mobile: {
              start: 80,
              end: 88
            },
            desktop: {
              start: 75,
              end: 88
            }
          },
          label: "E",
          position: {
            x: 10,
            y: -8.5
          }
        }],
        G = [{
          _uid: "ambx-content-block-01",
          alignment: M.TopCenter,
          component: Z.SectionTitle,
          data: {
            _uid: "ambx-content-block-01-01",
            copy: t.copy ?? "",
            subtitle: t.subtitle ?? "",
            title: t.title ?? ""
          },
          frame: {
            mobile: {
              start: 45,
              end: 88
            },
            desktop: {
              start: 45,
              end: 88
            }
          },
          theme: x.LightGrey
        }, {
          _uid: "im-content-block-01",
          alignment: M.Bottom,
          component: Z.Dual,
          data: {
            blocks: [{
              _uid: "im-content-01-01",
              copy: "The case embodies a seamless fusion of form and function, embracing the principles of minimalism while incorporating futuristic elements.",
              label: "D",
              title: "Case"
            }, {
              _uid: "im-content-01-02",
              copy: "Perfectly sized and curved. Water Resistance 3 ATM. Bead blasted to enhance its softness and unique grey colour.",
              label: "E",
              title: "Ergonomics"
            }]
          },
          frame: {
            mobile: {
              start: 75,
              end: 88
            },
            desktop: {
              start: 75,
              end: 88
            }
          },
          theme: x.Black
        }];
      return (g, k) => {
        const V = Le,
          U = ce;
        return c(), O(U, {
          class: "inspiration-material",
          "on-enter": I,
          "on-get-bounds": L,
          "on-progress": C,
          "on-start-loading": T,
          "sequence-height": "150lvh",
          theme: a(x).Black
        }, {
          imageSequence: J(() => [B(a(xe), {
            ref_key: "imageSequenceRef",
            ref: R,
            bounds: a(_),
            "enter-frame": a(d),
            "first-frame": a(u),
            fit: a(ke).Horizontal,
            hotspots: b,
            "image-els": a(w).map(P => P.image),
            "on-get-frame": A,
            progress: a(v),
            "total-frames": a(i)
          }, null, 8, ["bounds", "enter-frame", "first-frame", "fit", "image-els", "progress", "total-frames"])]),
          stickyContent: J(() => [(c(), h(N, null, W(G, P => {
            var j, ne, fe, se;
            return B(V, E({
              key: P._uid,
              visible: a(s) >= ((ne = (j = P.frame) == null ? void 0 : j[a($) ? "mobile" : "desktop"]) == null ? void 0 : ne.start) && a(s) <= ((se = (fe = P.frame) == null ? void 0 : fe[a($) ? "mobile" : "desktop"]) == null ? void 0 : se.end)
            }, P), null, 16, ["visible"])
          }), 64))]),
          components: J(() => [(c(!0), h(N, null, W(g.blocks, P => (c(), O(de(a(f).get(P.name)), E({
            ref_for: !0,
            ref_key: "componentRefs",
            ref: S,
            key: P._uid
          }, P.data), null, 16))), 128))]),
          _: 1
        }, 8, ["theme"])
      }
    }
  }),
  Yo = F(Xo, [
    ["__scopeId", "data-v-1d18f605"]
  ]),
  Zo = q({
    __name: "WeightEngravedGlass",
    props: {
      blocks: {},
      copy: {},
      menuTitle: {},
      render: {},
      subtitle: {},
      title: {}
    },
    setup(e) {
      const t = e,
        {
          hook: l,
          hooks: r
        } = te(),
        n = K(),
        {
          windowSize: m
        } = oe(n),
        {
          enterFrame: d,
          firstFrame: u,
          totalFrames: i
        } = Te(ie.ACF01, le.WeightEngravedGlass),
        s = p(0),
        _ = p({
          bottom: 0,
          height: 0,
          top: 0
        }),
        v = p(0),
        R = p(null),
        w = p([]),
        S = ye(() => m.value.width < pe.Small);
      ae(() => {
        l("window:raf", T)
      }), ee(() => {
        r.removeHook("window:raf", T)
      });
      const $ = ({
          bottom: f,
          height: b,
          top: G
        }) => {
          _.value = {
            bottom: f,
            height: b,
            top: G
          }
        },
        L = f => {
          s.value = f
        },
        A = f => {
          v.value = f
        },
        C = () => {
          Be({
            imageEls: w,
            imageSequenceName: le.WeightEngravedGlass,
            product: ie.ACF01
          })
        },
        T = () => {
          if (R.value && s.value) {
            if (S.value) {
              const f = {
                  frameRange: [10, 70],
                  min: .75,
                  max: 2.5
                },
                b = {
                  frameRange: [10, i],
                  min: 100,
                  max: -10
                },
                G = Y(D(f.frameRange, [f.max, f.min], s.value), f.min, f.max),
                g = Y(D(b.frameRange, [b.min, b.max], s.value), b.max, b.min);
              R.value.$el.style.transform = `translate3d(0, ${g}vh, 0) scale(${G})`
            }
            if (!S.value) {
              const f = {
                  frameRange: [10, 70],
                  min: 2.5,
                  max: 1
                },
                b = {
                  frameRange: [10, i],
                  min: 100,
                  max: -38
                },
                G = Y(D(f.frameRange, [f.min, f.max], s.value), f.max, f.min),
                g = Y(D(b.frameRange, [b.min, b.max], s.value), b.max, b.min);
              R.value.$el.style.transform = `translate3d(0, ${g}vh, 0) scale(${G})`
            }
          }
        },
        I = new Map([
          ["Description List", He],
          ["Gallery", De]
        ]),
        z = [{
          _uid: "weight-eng-content-block-03",
          alignment: M.BottomLeft,
          component: Z.Single,
          data: {
            _uid: "ambx-content-block-03-01",
            subtitle: "Time, Set in Stone",
            copy: "Holistic approach involving materials selection and ergonomic considerations."
          },
          frame: {
            mobile: {
              start: 1,
              end: 41
            },
            desktop: {
              start: 65,
              end: 153
            }
          },
          size: ve.Large,
          theme: x.LightGrey
        }, {
          _uid: "weight-eng-content-block-01",
          alignment: M.TopCenter,
          component: Z.SectionTitle,
          data: {
            _uid: "weight-eng-content-block-01-01",
            copy: t.copy ?? "",
            subtitle: t.subtitle ?? "",
            title: t.title ?? ""
          },
          frame: {
            mobile: {
              start: 39,
              end: 120
            },
            desktop: {
              start: 44,
              end: 93
            }
          },
          theme: x.LightGrey
        }, {
          _uid: "weight-eng-content-block-02",
          alignment: M.Center,
          component: Z.Labels,
          data: {
            _uid: "weight-eng-content-block-02-01",
            labelLeft: {
              label: "G",
              number: 10.74,
              decimals: 2
            },
            labelRight: {
              label: "Case"
            }
          },
          frame: {
            mobile: {
              start: 98,
              end: 123
            },
            desktop: {
              start: 71,
              end: 105
            }
          },
          theme: x.LightGrey
        }, {
          _uid: "weight-eng-content-block-04",
          alignment: M.Center,
          component: Z.Labels,
          data: {
            _uid: "weight-eng-content-block-04-01",
            labelLeft: {
              label: "G",
              number: 11.026,
              decimals: 3
            },
            labelRight: {
              label: "Calibre"
            }
          },
          frame: {
            mobile: {
              start: 123,
              end: 149
            },
            desktop: {
              start: 105,
              end: 140
            }
          },
          theme: x.LightGrey
        }, {
          _uid: "weight-eng-content-block-04",
          alignment: M.Center,
          component: Z.Labels,
          data: {
            _uid: "weight-eng-content-block-04-01",
            labelLeft: {
              label: "G",
              number: 8.95,
              decimals: 2
            },
            labelRight: {
              label: "Caseback"
            }
          },
          frame: {
            mobile: {
              start: 149,
              end: 166
            },
            desktop: {
              start: 140,
              end: 165
            }
          },
          theme: x.LightGrey
        }, {
          _uid: "weight-eng-content-block-05",
          alignment: M.BottomLeft,
          component: Z.Single,
          data: {
            _uid: "ambx-content-block-05-01",
            subtitle: "Time, Set in Stone",
            copy: "Holistic approach involving materials selection and ergonomic considerations."
          },
          frame: {
            mobile: {
              start: 116,
              end: 162
            },
            desktop: {
              start: -1,
              end: -1
            }
          },
          size: ve.Large,
          theme: x.LightGrey
        }];
      return (f, b) => {
        const G = Le,
          g = ce;
        return c(), O(g, {
          class: "weight-engraved-glass",
          "on-get-bounds": $,
          "on-progress": A,
          "on-start-loading": C,
          "sequence-height": "300lvh"
        }, {
          imageSequence: J(() => [B(a(xe), {
            ref_key: "imageSequenceRef",
            ref: R,
            class: "image-sequence",
            bounds: a(_),
            "enter-frame": a(d),
            "first-frame": a(u),
            "image-els": a(w).map(k => k.image),
            "on-get-frame": L,
            progress: a(v),
            "total-frames": a(i)
          }, null, 8, ["bounds", "enter-frame", "first-frame", "image-els", "progress", "total-frames"])]),
          stickyContent: J(() => [(c(), h(N, null, W(z, k => {
            var V, U, P, j;
            return B(G, E({
              key: k._uid,
              visible: a(s) >= ((U = (V = k.frame) == null ? void 0 : V[a(S) ? "mobile" : "desktop"]) == null ? void 0 : U.start) && a(s) <= ((j = (P = k.frame) == null ? void 0 : P[a(S) ? "mobile" : "desktop"]) == null ? void 0 : j.end)
            }, k), null, 16, ["visible"])
          }), 64))]),
          components: J(() => [(c(!0), h(N, null, W(f.blocks, k => (c(), O(de(a(I).get(k.name)), E({
            key: k._uid
          }, k.data), null, 16))), 128))]),
          _: 1
        })
      }
    }
  }),
  Jo = F(Zo, [
    ["__scopeId", "data-v-6efd89e1"]
  ]),
  Qo = q({
    __name: "Scene",
    props: {
      blocks: {},
      copy: {},
      menuTitle: {},
      render: {},
      subtitle: {},
      title: {}
    },
    setup(e) {
      const t = e,
        l = new Map([
          ["ambx-wishbones", vo],
          ["arms-backplate", yo],
          ["inspiration-material", Yo],
          ["weight-engraved-glass", Jo]
        ]);
      return (r, n) => (c(), O(de(a(l).get(r.render)), E({
        id: r.menuTitle
      }, t), null, 16, ["id"]))
    }
  }),
  Ko = e => (Re("data-v-7c0dbdf0"), e = e(), $e(), e),
  en = {
    class: "product-card"
  },
  tn = {
    class: "image-wrapper"
  },
  on = {
    class: "head"
  },
  nn = {
    class: "name"
  },
  sn = {
    class: "content"
  },
  an = {
    key: 0,
    class: "straps-included"
  },
  ln = Ko(() => o("span", null, "Straps Included", -1)),
  rn = {
    key: 0
  },
  cn = {
    class: "strap-wrapper"
  },
  un = {
    class: "strap-name"
  },
  pn = {
    class: "strap-material"
  },
  mn = {
    class: "strap-colors"
  },
  dn = q({
    __name: "OrderCard",
    props: {
      _uid: {},
      image: {},
      name: {},
      price: {},
      product: {},
      strapsIncluded: {
        type: Boolean
      },
      straps: {}
    },
    setup(e) {
      const {
        hooks: t
      } = te(), l = K(), r = e, n = () => {
        l.setActiveModal(Se.Order), t.callHook("orderModal:setVariant", r.name)
      };
      return (m, d) => {
        const u = re,
          i = et,
          s = me;
        return c(), h("div", en, [o("div", tn, [B(u, E({
          sizes: "xs:400px sm:250px md:300px lg:350px xl:400px xxl:500px"
        }, m.image), null, 16)]), o("div", on, [o("h4", nn, y(m.name), 1), B(i, {
          disabled: !0,
          label: "Unavailable",
          onClick: n
        })]), o("div", sn, [o("ul", null, [m.strapsIncluded ? (c(), h("li", an, [ln, m.price ? (c(), h("span", rn, y(m.price), 1)) : H("", !0)])) : H("", !0), (c(!0), h(N, null, W(m.straps, _ => (c(), h("li", {
          key: _._uid,
          class: "strap"
        }, [o("div", cn, [o("span", un, y(_.name), 1), B(s, {
          class: "strap-separator",
          name: "Slash"
        }), o("span", pn, y(_.material), 1)]), o("span", mn, y(_.colors) + " " + y(`Color${_.colors>1&&"s"}`), 1)]))), 128))])])])
      }
    }
  }),
  _n = F(dn, [
    ["__scopeId", "data-v-7c0dbdf0"]
  ]),
  fn = {
    class: "product-grid"
  },
  hn = {
    class: "head"
  },
  vn = {
    class: "title"
  },
  gn = {
    class: "items"
  },
  yn = q({
    __name: "ProductGrid",
    props: {
      items: {},
      name: {}
    },
    setup(e) {
      return (t, l) => {
        const r = me,
          n = _n;
        return c(), h("div", fn, [o("div", hn, [o("h3", vn, y(t.name), 1), B(r, {
          class: "arrow",
          name: "DoubleArrowDown"
        })]), o("div", gn, [(c(!0), h(N, null, W(t.items, m => (c(), O(n, E({
          key: m._uid,
          class: "item"
        }, m), null, 16))), 128))])])
      }
    }
  }),
  bn = F(yn, [
    ["__scopeId", "data-v-f4d0ac06"]
  ]),
  kn = {
    class: "title"
  },
  Rn = {
    class: "steps"
  },
  $n = {
    class: "step-head"
  },
  wn = {
    class: "step-number"
  },
  Sn = {
    class: "step-title-wrapper"
  },
  Cn = {
    class: "step-title"
  },
  Tn = {
    class: "step-subtitle"
  },
  xn = {
    class: "step-copy"
  },
  Bn = q({
    __name: "OrderSteps",
    props: {
      steps: {},
      title: {}
    },
    setup(e) {
      const t = e,
        l = K(),
        {
          windowSize: r
        } = oe(l),
        n = p(null),
        m = p([]),
        d = p([]),
        u = p(0),
        i = p();
      let s;
      ae(() => {
        r.value.width >= pe.Small && (_(), n.value && (i.value = new IntersectionObserver(R), i.value.observe(n.value)))
      }), ee(() => {
        s && s.kill(), i.value && i.value.disconnect()
      });
      const _ = () => {
          if (m != null && m.value && (d != null && d.value)) {
            const w = m.value[u.value],
              S = d.value[u.value];
            s && s.kill(), s = X.timeline({
              onComplete: v,
              paused: !0
            }), s.addLabel("start").fromTo(w, {
              autoAlpha: .3
            }, {
              autoAlpha: 1,
              duration: .8,
              ease: "power1.inOut"
            }, "start").fromTo(S, {
              scaleX: 0
            }, {
              scaleX: 1,
              duration: 6,
              ease: "power1.inOut"
            }, "start").addLabel("animated").set(w, {
              autoAlpha: .3
            }, "animated+=0.01").set(S, {
              scaleX: 0
            }, "animated+=0.01").addLabel("end")
          }
        },
        v = () => {
          u.value = (u.value + 1) % t.steps.length, _(), s && s.play()
        },
        R = ([w]) => {
          s && (w && w.isIntersecting ? s.play() : s.pause())
        };
      return (w, S) => (c(), h("div", {
        ref_key: "elRef",
        ref: n,
        class: "order-steps"
      }, [o("h2", kn, y(w.title), 1), o("ul", Rn, [(c(!0), h(N, null, W(w.steps, ($, L) => (c(), h("li", {
        key: $._uid,
        ref_for: !0,
        ref_key: "stepElsRef",
        ref: m,
        class: "step"
      }, [o("div", {
        ref_for: !0,
        ref_key: "progressElsRef",
        ref: d,
        class: "step-progress"
      }, null, 512), o("div", $n, [o("div", wn, y(L + 1), 1), o("div", Sn, [o("div", Cn, y($.title), 1), o("div", Tn, y($.subtitle), 1)])]), o("p", xn, y($.copy), 1)]))), 128))])], 512))
    }
  }),
  Ln = F(Bn, [
    ["__scopeId", "data-v-3473e95b"]
  ]),
  An = {
    class: "variant-card"
  },
  In = {
    class: "title"
  },
  Gn = {
    key: 0,
    class: "price"
  },
  Vn = {
    class: "image-wrapper"
  },
  qn = q({
    __name: "VariantCard",
    props: {
      image: {},
      price: {},
      title: {}
    },
    setup(e) {
      return (t, l) => {
        const r = re;
        return c(), h("div", An, [o("div", In, y(t.title), 1), t.price ? (c(), h("div", Gn, y(t.price), 1)) : H("", !0), o("div", Vn, [B(r, E({
          sizes: "xs:788px sm:318px md:397px lg:446px xl:522px xxl:650px"
        }, t.image), null, 16)])])
      }
    }
  }),
  Mn = F(qn, [
    ["__scopeId", "data-v-5262b2f0"]
  ]),
  zn = ["disabled"],
  Pn = {
    class: "title"
  },
  Fn = {
    key: 0
  },
  On = {
    key: 1
  },
  En = {
    key: 2
  },
  Hn = {
    key: 0,
    class: "subtitle"
  },
  Dn = {
    key: 1,
    class: "subtitle"
  },
  Nn = {
    key: 0,
    class: "bottom"
  },
  Wn = {
    class: "copy-wrapper"
  },
  Un = {
    class: "copy"
  },
  jn = q({
    __name: "OrderButton",
    props: {
      disabled: {
        type: Boolean,
        default: !0
      },
      loading: {
        type: Boolean,
        default: !1
      },
      submitFn: {},
      success: {
        type: Boolean
      },
      activeVariant: {},
      compact: {
        type: Boolean
      },
      inModal: {
        type: Boolean
      },
      label: {},
      product: {},
      shippingDate: {},
      showVariants: {
        type: Boolean
      },
      termsConditions: {},
      variants: {}
    },
    setup(e) {
      const t = K(),
        l = n => {
          X.fromTo(n, {
            autoAlpha: 1,
            y: 60
          }, {
            y: 0,
            delay: .2,
            duration: .3,
            ease: "power3.out"
          })
        },
        r = (n, m) => {
          X.to(n, {
            y: -60,
            duration: .3,
            ease: "power3.in",
            onComplete: m
          })
        };
      return (n, m) => {
        const d = me;
        return c(), h("div", {
          class: Q(["order-button", n.disabled && "disabled", n.success && "success", n.compact && "compact", n.loading && "loading"])
        }, [o("button", {
          class: "button",
          disabled: n.disabled,
          type: "button",
          onClick: m[0] || (m[0] = (...u) => n.submitFn && n.submitFn(...u))
        }, [o("span", Pn, [B(tt, {
          name: "titleTransition",
          css: !1,
          onEnter: l,
          onLeave: r
        }, {
          default: J(() => [!n.loading && !n.success ? (c(), h("span", Fn, [he(" Submit "), B(d, {
            class: "icon",
            name: "DoubleArrowRight"
          })])) : H("", !0), n.loading ? (c(), h("span", On, "Submitting")) : H("", !0), !n.loading && n.success ? (c(), h("span", En, [he(" Submission sent "), B(d, {
            class: "icon",
            name: "Checkmark"
          })])) : H("", !0)]),
          _: 1
        })]), n.success ? (c(), h("span", Dn, " We’ll Contact You Shortly. ")) : (c(), h("span", Hn, [he(y(n.product) + " ", 1), B(d, {
          class: "trademark",
          name: "Trademark"
        })]))], 8, zn), n.termsConditions.title ? (c(), h("div", Nn, [o("div", Wn, [o("button", {
          class: "link",
          type: "button",
          onClick: m[1] || (m[1] = u => a(t).setActiveModal(n.inModal ? a(Se).TermsConditionsOverlay : a(Se).TermsConditions))
        }, y(n.termsConditions.title), 1), o("p", Un, y(n.termsConditions.teaser), 1)])])) : H("", !0)], 2)
      }
    }
  }),
  Xn = F(jn, [
    ["__scopeId", "data-v-958d0e3d"]
  ]),
  Ae = e => (Re("data-v-ddd643cd"), e = e(), $e(), e),
  Yn = {
    key: 0,
    class: "cards"
  },
  Zn = ["value", "onClick"],
  Jn = {
    class: "form-fields"
  },
  Qn = Ae(() => o("label", {
    class: "form-label",
    for: "email"
  }, "Email", -1)),
  Kn = Ae(() => o("label", {
    class: "form-label",
    for: "name"
  }, "Name", -1)),
  es = Ae(() => o("label", {
    class: "form-label",
    for: "phone"
  }, "Phone", -1)),
  ts = Ae(() => o("label", {
    class: "form-label",
    for: "country"
  }, "Country", -1)),
  os = q({
    __name: "OrderForm",
    props: {
      activeVariant: {
        default: ""
      },
      compact: {
        type: Boolean,
        default: !1
      },
      inModal: {
        type: Boolean,
        default: !1
      },
      label: {},
      product: {},
      shippingDate: {},
      showVariants: {
        type: Boolean,
        default: !1
      },
      termsConditions: {},
      variants: {}
    },
    setup(e) {
      const t = e,
        l = st(),
        r = p(""),
        n = p(""),
        m = p(""),
        d = p(""),
        u = p(""),
        i = p({
          email: !1,
          name: !1
        }),
        s = p(!1),
        _ = p(!1),
        v = p(null),
        R = ye(() => r.value.length === 0 || n.value.length === 0 || m.value.length === 0 || d.value.length === 0 || w);
      ot(() => t.activeVariant, () => {
        u.value = t.activeVariant
      });
      const w = Object.values(i.value).some(C => C),
        S = (C, T) => {
          const I = vt(C.target.value);
          switch (T) {
            case "email":
              i.value = {
                ...i.value,
                email: !ht(I)
              };
              break;
            case "name":
              i.value = {
                ...i.value,
                name: I.length === 0
              };
              break;
            case "phone":
              i.value = {
                ...i.value,
                phone: I.length === 0
              };
              break;
            case "country":
              i.value = {
                ...i.value,
                country: I.length === 0
              };
              break
          }
        },
        $ = C => {
          C.name === u.value && (u.value = "")
        },
        L = () => {
          i.value = {
            email: !1,
            name: !1,
            phone: !1,
            country: !1
          }, v.value = null
        },
        A = async () => {
          if (!w) try {
            s.value = !0;
            const C = await fetch(`${l.public.apiBaseUrl}/mail/send`, {
              method: "post",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                email: r.value,
                name: n.value,
                phone: m.value,
                country: d.value,
                variant: u.value
              })
            });
            s.value = !1, _.value = C.status === 200, _.value ? (r.value = "", n.value = "", m.value = "", d.value = "", u.value = "") : i.value = {
              email: !0,
              name: !0,
              phone: !0,
              country: !0
            }
          } catch {
            setTimeout(() => {
              i.value = {
                email: !0,
                name: !0,
                phone: !0,
                country: !0
              }, s.value = !1, _.value = !1, v.value = !0
            }, 2e3)
          }
        };
      return (C, T) => {
        const I = Mn,
          z = Xn;
        return c(), h("div", {
          class: Q(["order-form", C.compact && "compact", C.inModal && "in-modal"])
        }, [o("form", {
          class: "form",
          novalidate: "",
          onInput: L
        }, [C.showVariants ? (c(), h("div", Yn, [(c(!0), h(N, null, W(C.variants, f => (c(), h("div", {
          key: f._uid,
          class: "card-wrapper"
        }, [ue(o("input", {
          "onUpdate:modelValue": T[0] || (T[0] = b => be(u) ? u.value = b : null),
          type: "radio",
          class: "radio",
          name: "variant",
          value: f.name,
          onChange: T[1] || (T[1] = b => S(b, "variant")),
          onClick: () => $(f)
        }, null, 40, Zn), [
          [nt, a(u)]
        ]), B(I, {
          class: "card",
          image: f.image,
          price: f.price,
          title: f.name
        }, null, 8, ["image", "price", "title"])]))), 128))])) : H("", !0), o("div", Jn, [o("div", {
          class: Q(["form-group", a(i).email && "invalid"])
        }, [Qn, ue(o("input", {
          "onUpdate:modelValue": T[2] || (T[2] = f => be(r) ? r.value = f : null),
          class: "form-input",
          name: "email",
          placeholder: "john@doe.com",
          type: "email",
          onChange: T[3] || (T[3] = f => S(f, "email"))
        }, null, 544), [
          [we, a(r)]
        ])], 2), o("div", {
          class: Q(["form-group", a(i).name && "invalid"])
        }, [Kn, ue(o("input", {
          "onUpdate:modelValue": T[4] || (T[4] = f => be(n) ? n.value = f : null),
          class: "form-input",
          name: "name",
          placeholder: "John Doe",
          type: "text",
          onChange: T[5] || (T[5] = f => S(f, "name"))
        }, null, 544), [
          [we, a(n)]
        ])], 2), o("div", {
          class: Q(["form-group", a(i).phone && "invalid"])
        }, [es, ue(o("input", {
          "onUpdate:modelValue": T[6] || (T[6] = f => be(m) ? m.value = f : null),
          class: "form-input",
          name: "phone",
          placeholder: "+00 00 00 00 00",
          type: "tel",
          onChange: T[7] || (T[7] = f => S(f, "phone"))
        }, null, 544), [
          [we, a(m)]
        ])], 2), o("div", {
          class: Q(["form-group", a(i).name && "invalid"])
        }, [ts, ue(o("input", {
          "onUpdate:modelValue": T[8] || (T[8] = f => be(d) ? d.value = f : null),
          class: "form-input",
          name: "country",
          placeholder: "France",
          type: "text",
          onChange: T[9] || (T[9] = f => S(f, "country"))
        }, null, 544), [
          [we, a(d)]
        ])], 2)]), B(z, E({
          disabled: a(v) ?? a(R),
          loading: a(s),
          success: a(_),
          "submit-fn": () => A()
        }, t), null, 16, ["disabled", "loading", "success", "submit-fn"])], 32)], 2)
      }
    }
  }),
  ns = F(os, [
    ["__scopeId", "data-v-ddd643cd"]
  ]),
  ss = {
    class: "head"
  },
  as = {
    class: "title"
  },
  ls = {
    class: "copy-wrapper"
  },
  is = {
    class: "subtitle"
  },
  rs = {
    class: "copy"
  },
  cs = q({
    __name: "Order",
    props: {
      blocks: {},
      copy: {},
      menuTitle: {},
      subtitle: {},
      shippingDate: {},
      termsConditions: {},
      title: {}
    },
    setup(e) {
      const t = new Map([
        ["Product Grid", bn],
        ["Order Steps", Ln],
        ["Order Form", ns]
      ]);
      return (l, r) => {
        const n = ce;
        return c(), O(n, {
          id: l.menuTitle,
          class: "order",
          theme: a(x).Black
        }, {
          components: J(() => [o("div", ss, [o("h2", as, y(l.title), 1), o("div", ls, [o("h3", is, y(l.subtitle), 1), o("p", rs, y(l.copy), 1)])]), (c(!0), h(N, null, W(l.blocks, m => (c(), O(de(a(t).get(m.name)), E({
            key: m._uid,
            "shipping-date": m.name === "Order Form" && l.shippingDate,
            "terms-conditions": m.name === "Order Form" && l.termsConditions
          }, m.data), null, 16, ["shipping-date", "terms-conditions"]))), 128))]),
          _: 1
        }, 8, ["id", "theme"])
      }
    }
  }),
  us = F(cs, [
    ["__scopeId", "data-v-2d3fbdc5"]
  ]),
  ps = {
    class: "text-media-breaker"
  },
  ms = {
    class: "head"
  },
  ds = {
    class: "title"
  },
  _s = {
    class: "copy"
  },
  fs = {
    class: "media-wrapper"
  },
  hs = q({
    __name: "TextMediaBreaker",
    props: {
      copy: {},
      subCopy: {},
      subtitle: {},
      title: {},
      video: {}
    },
    setup(e, {
      expose: t
    }) {
      const {
        hooks: l
      } = te(), r = K(), {
        windowSize: n
      } = oe(r), m = p(null), d = p(null), u = p(null), i = p(!1);
      let s;
      ae(() => {
        l.hook("window:raf", _)
      }), ee(() => {
        l.removeHook("window:raf", _)
      });
      const _ = () => {
          if (m.value) {
            const {
              bottom: S,
              top: $
            } = m.value.getBoundingClientRect();
            $ <= n.value.height - 150 && S >= -150 && (v(), l.removeHook("window:raf", _))
          }
        },
        v = () => {
          if (m.value) {
            s = X.timeline({
              paused: !0,
              defaults: {
                ease: "power3.out"
              }
            });
            const w = 25;
            if (s.addLabel("start").set(m.value, {
                autoAlpha: 1
              }), d.value && s.fromTo(d.value, {
                autoAlpha: 0,
                y: w
              }, {
                autoAlpha: 1,
                duration: .7,
                y: 0
              }, "start+=0.1"), u.value) {
              const S = new Ce(u.value, {
                type: "lines"
              });
              s.fromTo(S.lines, {
                y: w
              }, {
                duration: 1,
                stagger: .1,
                y: 0
              }, "start+=0.05").fromTo(S.lines, {
                autoAlpha: 0
              }, {
                autoAlpha: 1,
                duration: 1.5,
                stagger: .1
              }, "start+=0.15")
            }
            s.play()
          }
        };
      return t({
        loadVideo: () => {
          i.value = !0
        }
      }), (w, S) => {
        const $ = Pe;
        return c(), h("div", ps, [o("div", ms, [o("h2", ds, y(w.title), 1), o("p", _s, y(w.copy), 1)]), o("div", fs, [B($, {
          autoplay: "",
          muted: "",
          loop: "",
          playsinline: "",
          preload: "none",
          src: w.video,
          "start-loading": a(i)
        }, null, 8, ["src", "start-loading"])]), o("div", {
          ref_key: "bottomRef",
          ref: m,
          class: "bottom"
        }, [o("h3", {
          ref_key: "subtitleRef",
          ref: d,
          class: "subtitle"
        }, y(w.subtitle), 513), o("p", {
          ref_key: "subCopyRef",
          ref: u,
          class: "sub-copy"
        }, y(w.subCopy), 513)], 512)])
      }
    }
  }),
  vs = F(hs, [
    ["__scopeId", "data-v-a484dc71"]
  ]),
  gs = e => (Re("data-v-4080db63"), e = e(), $e(), e),
  ys = {
    class: "timeline-item"
  },
  bs = {
    class: "head"
  },
  ks = {
    class: "year"
  },
  Rs = {
    class: "title"
  },
  $s = {
    key: 0,
    class: "copy"
  },
  ws = {
    key: 1,
    class: "image-wrapper"
  },
  Ss = gs(() => o("div", {
    class: "separator"
  }, [o("div", {
    class: "dot"
  }), o("div", {
    class: "dot"
  })], -1)),
  Cs = q({
    __name: "TimelineItem",
    props: {
      _uid: {},
      copy: {},
      image: {},
      title: {},
      year: {}
    },
    setup(e) {
      return (t, l) => {
        var n;
        const r = re;
        return c(), h("div", ys, [o("div", bs, [o("div", ks, y(t.year), 1), o("div", Rs, y(t.title), 1)]), t.copy ? (c(), h("p", $s, y(t.copy), 1)) : (n = t.image) != null && n.src ? (c(), h("div", ws, [B(r, E({
          sizes: "xs:267px sm:260px md:250px lg:244px xl:284px xxl:320px"
        }, t.image), null, 16)])) : H("", !0), Ss])
      }
    }
  }),
  Ts = F(Cs, [
    ["__scopeId", "data-v-4080db63"]
  ]),
  xs = q({
    __name: "Timeline",
    props: {
      items: {},
      showBottomBorder: {
        type: Boolean
      }
    },
    setup(e) {
      return (t, l) => {
        const r = Ts,
          n = _t;
        return c(), O(n, {
          class: "timeline",
          items: t.items,
          "show-bottom-border": !0
        }, {
          default: J(() => [(c(!0), h(N, null, W(t.items, m => (c(), O(r, E({
            key: m._uid,
            class: "item"
          }, m), null, 16))), 128))]),
          _: 1
        }, 8, ["items"])
      }
    }
  }),
  Bs = F(xs, [
    ["__scopeId", "data-v-b70d0c94"]
  ]),
  _e = e => (Re("data-v-432f86c2"), e = e(), $e(), e),
  Ls = {
    class: "specs"
  },
  As = {
    class: "head"
  },
  Is = {
    class: "title"
  },
  Gs = {
    class: "copy"
  },
  Vs = {
    class: "items"
  },
  qs = ["id", "aria-expanded", "onClick"],
  Ms = {
    class: "panel-head-title"
  },
  zs = {
    class: "panel-head-count"
  },
  Ps = ["aria-labelledby"],
  Fs = {
    class: "sub-item-title"
  },
  Os = _e(() => o("span", {
    class: "circle"
  }, "●", -1)),
  Es = {
    class: "sub-item-list"
  },
  Hs = {
    key: 0,
    class: "sub-item-list-item"
  },
  Ds = _e(() => o("span", null, "Weight", -1)),
  Ns = {
    class: "sub-item-list-separator"
  },
  Ws = {
    class: "mono"
  },
  Us = {
    key: 1,
    class: "sub-item-list-item"
  },
  js = _e(() => o("span", null, "Material", -1)),
  Xs = {
    class: "sub-item-list-separator"
  },
  Ys = {
    class: "mono"
  },
  Zs = {
    key: 2,
    class: "sub-item-list-item"
  },
  Js = _e(() => o("span", null, "Grade", -1)),
  Qs = {
    class: "sub-item-list-separator"
  },
  Ks = {
    class: "mono"
  },
  ea = {
    key: 3,
    class: "sub-item-list-item"
  },
  ta = _e(() => o("span", null, "Width", -1)),
  oa = {
    class: "sub-item-list-separator"
  },
  na = {
    class: "mono"
  },
  sa = {
    key: 4,
    class: "sub-item-list-item"
  },
  aa = _e(() => o("span", null, "Height", -1)),
  la = {
    class: "sub-item-list-separator"
  },
  ia = {
    class: "mono"
  },
  ra = {
    key: 5,
    class: "sub-item-list-item"
  },
  ca = _e(() => o("span", null, "Depth", -1)),
  ua = {
    class: "sub-item-list-separator"
  },
  pa = {
    class: "mono"
  },
  ma = q({
    __name: "Specs",
    props: {
      copy: {},
      items: {},
      title: {}
    },
    setup(e) {
      const {
        callHook: t
      } = te(), l = p(0), r = n => {
        l.value === n ? l.value = null : l.value = n, t("section:resize")
      };
      return (n, m) => {
        const d = me,
          u = re;
        return c(), h("div", Ls, [o("div", As, [o("h2", Is, y(n.title), 1), o("p", Gs, y(n.copy), 1)]), o("div", Vs, [(c(!0), h(N, null, W(n.items, (i, s) => (c(), h("div", {
          key: i._uid,
          class: Q(["panel", a(l) === s && "open"])
        }, [o("button", {
          id: i._uid,
          class: "panel-head",
          "aria-expanded": a(l) === s,
          type: "button",
          onClick: _ => r(s)
        }, [o("span", Ms, y(i.title), 1), o("span", zs, y(i.count) + " Items", 1), B(d, {
          class: "panel-head-icon",
          name: a(l) === s ? "Minus" : "Plus"
        }, null, 8, ["name"])], 8, qs), o("div", {
          class: "panel-content",
          "aria-labelledby": i._uid ?? ""
        }, [(c(!0), h(N, null, W(i.rows, _ => (c(), h("div", {
          key: _._uid,
          class: Q(["panel-row", _.count === 3 ? "three-column" : _.count === 4 ? "four-column" : ""])
        }, [(c(!0), h(N, null, W(_.subItems, v => {
          var R;
          return c(), h("div", {
            key: v._uid,
            class: "sub-item"
          }, [o("div", Fs, [Os, he(y(v.title), 1)]), o("ul", Es, [v.weight ? (c(), h("li", Hs, [Ds, o("span", Ns, [B(d, {
            name: "Slash"
          })]), o("span", Ws, y(v.weight) + " Gram", 1)])) : H("", !0), v.weight ? (c(), h("li", Us, [js, o("span", Xs, [B(d, {
            name: "Slash"
          })]), o("span", Ys, y(v.material), 1)])) : H("", !0), v.weight ? (c(), h("li", Zs, [Js, o("span", Qs, [B(d, {
            name: "Slash"
          })]), o("span", Ks, y(v.grade), 1)])) : H("", !0), v.width ? (c(), h("li", ea, [ta, o("span", oa, [B(d, {
            name: "Slash"
          })]), o("span", na, y(v.width), 1)])) : H("", !0), v.height ? (c(), h("li", sa, [aa, o("span", la, [B(d, {
            name: "Slash"
          })]), o("span", ia, y(v.height), 1)])) : H("", !0), v.depth ? (c(), h("li", ra, [ca, o("span", ua, [B(d, {
            name: "Slash"
          })]), o("span", pa, y(v.depth), 1)])) : H("", !0)]), (R = v.image) != null && R.src ? (c(), h("div", {
            key: 0,
            class: Q(["sub-item-image-wrapper", v.imageBackgroundColor === a(x).PaperGrey && "paper-grey"])
          }, [B(u, E({
            sizes: "xs:500px sm:300px md:400px lg:450px xl:500px xxl:600px"
          }, v.image), null, 16)], 2)) : H("", !0)])
        }), 128))], 2))), 128))], 8, Ps)], 2))), 128))])])
      }
    }
  }),
  da = F(ma, [
    ["__scopeId", "data-v-432f86c2"]
  ]),
  _a = q({
    __name: "ReassuranceSpecs",
    props: {
      blocks: {},
      copy: {},
      menuTitle: {},
      subtitle: {},
      shippingDate: {},
      termsConditions: {},
      title: {}
    },
    setup(e) {
      const t = p([]),
        l = () => {
          (t.value ?? []).forEach(n => {
            n.loadVideo && n.loadVideo()
          })
        },
        r = new Map([
          ["Text Media Breaker", vs],
          ["Timeline", Bs],
          ["Specs", da]
        ]);
      return (n, m) => {
        const d = ce;
        return c(), O(d, {
          id: n.menuTitle,
          class: "reassurance-specs",
          "enter-threshold": 1,
          "on-enter": l,
          theme: a(x).LightGrey
        }, {
          components: J(() => [(c(!0), h(N, null, W(n.blocks, u => (c(), O(de(a(r).get(u.name)), E({
            ref_for: !0,
            ref_key: "componentRefs",
            ref: t,
            key: u._uid
          }, u.data), null, 16))), 128))]),
          _: 1
        }, 8, ["id", "theme"])
      }
    }
  }),
  fa = F(_a, [
    ["__scopeId", "data-v-fba1c76a"]
  ]),
  ha = q({
    __name: "ScrollIndicator",
    setup(e) {
      const {
        $smoothScroll: t
      } = te(), l = K(), {
        windowSize: r
      } = oe(l), n = () => {
        const m = t.scroll + r.value.height;
        t.scrollTo(m, {
          duration: 1
        })
      };
      return (m, d) => {
        const u = me;
        return c(), h("button", {
          class: "scroll-indicator",
          type: "button",
          onClick: n
        }, [B(u, {
          name: "ArrowDown"
        })])
      }
    }
  }),
  va = F(ha, [
    ["__scopeId", "data-v-102e1f40"]
  ]),
  ga = ["innerHTML"],
  ya = {
    class: "bottom"
  },
  ba = {
    class: "usps"
  },
  ka = q({
    __name: "PDPHero",
    props: {
      copy: {},
      image: {},
      label: {},
      name: {},
      labels: {}
    },
    setup(e) {
      const {
        hook: t,
        hooks: l
      } = te(), r = K(), n = p(null), m = p(null), d = p(null), u = p(null), i = p(null), s = p(null), _ = p([]), v = p(!1);
      let R;
      ae(() => {
        t("window:raf", w), S()
      }), ee(() => {
        R && R.kill(), l.removeHook("window:raf", w)
      });
      const w = () => {
          if (n.value && d.value) {
            const {
              height: $,
              top: L
            } = n.value.getBoundingClientRect(), A = D([0, -$], [-30, -7], L), C = D([0, -$], [1.3, 1.7], L), T = D([0, -$], [1, -.3], L), I = D([0, -$], [0, 25], L);
            d.value.style.transform = `rotate(${A}deg) scale(${C}) translate3d(0, ${I}vh, 0)`, d.value.style.opacity = `${T}`
          }
          if (n.value) {
            const {
              bottom: $,
              top: L
            } = n.value.getBoundingClientRect();
            L <= 0 && $ >= 0 && r.theme !== x.Black && r.setTheme(x.Black)
          }
        },
        S = () => {
          var $, L;
          if (R = X.timeline({
              paused: !0
            }), R.addLabel("start"), u.value && R.fromTo(u.value, {
              autoAlpha: 0
            }, {
              autoAlpha: 1,
              duration: 7,
              ease: "power3.out",
              onComplete: () => {
                v.value = !0
              }
            }, "start+=0.3"), m.value && R.fromTo(m.value, {
              autoAlpha: 0,
              y: 60
            }, {
              autoAlpha: 1,
              duration: 1,
              ease: "power2.out",
              y: 0
            }, "start"), ($ = i.value) != null && $.$el && R.fromTo(i.value.$el, {
              autoAlpha: 0,
              y: 40
            }, {
              autoAlpha: 1,
              duration: 1,
              ease: "power3.out",
              y: 0
            }, "start+=0.1"), s.value && R.call(s.value.enter, [], "start+=0.2"), ((L = _.value) == null ? void 0 : L.length) > 0) {
            let A = 0;
            _.value.forEach(C => {
              R.fromTo(C.$el, {
                autoAlpha: 0
              }, {
                autoAlpha: 1,
                delay: A,
                duration: .7
              }, "start+=0.6"), A += .08
            })
          }
          R.play()
        };
      return ($, L) => {
        const A = re;
        return c(), h("header", {
          ref_key: "headerRef",
          ref: n,
          class: "pdp-hero"
        }, [o("div", {
          class: "labels",
          innerHTML: $.label
        }, null, 8, ga), o("h1", {
          ref_key: "nameRef",
          ref: m,
          class: "name"
        }, y($.name), 513), B(a(va), {
          "aria-label": "Scroll to next section",
          ref_key: "scrollIndicatorRef",
          ref: i
        }, null, 512), o("div", ya, [o("div", ba, [(c(!0), h(N, null, W($.labels, C => (c(), O(a(Ee), {
          ref_for: !0,
          ref_key: "labelRefs",
          ref: _,
          key: `pdp-hero-tag-${C}`,
          class: "usp",
          text: C
        }, null, 8, ["text"]))), 128))]), B(a(ft), {
          ref_key: "copyRevealRef",
          ref: s,
          class: "copy",
          copy: $.copy
        }, null, 8, ["copy"])]), o("div", {
          ref_key: "imageWrapperRef",
          ref: d,
          class: "image-wrapper"
        }, [o("div", {
          ref_key: "imageContainerRef",
          ref: u,
          class: "image-container"
        }, [B(A, E({
          preload: !0,
          loading: "eager",
          sizes: "xs:768px sm:900px md:1000px lg:1100px xl:1300px xxl:1600px"
        }, $.image), null, 16)], 512)], 512)], 512)
      }
    }
  }),
  Ra = F(ka, [
    ["__scopeId", "data-v-b379d1b6"]
  ]),
  $a = ut(() => pt(() => import("./OrderModal.ChfwH9ZZ.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
    import.meta.url).then(e => e.default || e)),
  wa = q({
    __name: "[slug]",
    props: {
      articleStories: {},
      siteSettings: {}
    },
    async setup(e) {
      var _;
      let t, l;
      const r = e,
        n = K(),
        d = at().params.slug,
        u = ([t, l] = lt(() => rt(`${ct.Products}/${d}`)), t = await t, l(), t),
        i = qt(u);
      mt(i.seo, (_ = r.siteSettings) == null ? void 0 : _.seo), it(() => {
        n.setContextualMenuData({
          title: (i == null ? void 0 : i.name) ?? "",
          sections: (i == null ? void 0 : i.menuItems) ?? []
        })
      }), ee(() => {
        n.setTheme(x.LightGrey)
      });
      const s = new Map([
        ["Crown", Nt],
        ["Manifesto", Jt],
        ["Scene", Qo],
        ["Order", us],
        ["Reassurance Specs", fa]
      ]);
      return (v, R) => {
        var L, A;
        const w = Ra,
          S = $a,
          $ = dt;
        return c(), h("div", null, [B(w, Ge(qe(a(i).hero)), null, 16), o("main", null, [(c(!0), h(N, null, W(a(i).blocks, C => {
          var T;
          return c(), O(de(a(s).get(C.name)), E({
            key: C._uid,
            "shipping-date": C.name === "Order" ? a(i).shippingDate : null,
            "terms-conditions": C.name === "Order" ? (T = v.siteSettings) == null ? void 0 : T.termsConditions : null,
            variants: a(i).variants ?? []
          }, C.data), null, 16, ["shipping-date", "terms-conditions", "variants"])
        }), 128)), ue(B(S, {
          "on-close": () => a(n).setActiveModal(null),
          product: a(i).name,
          "shipping-date": a(i).shippingDate ?? 0,
          subtitle: "Select:",
          "terms-conditions": (L = v.siteSettings) == null ? void 0 : L.termsConditions,
          title: `Reserve ${a(i).name}`,
          variants: a(i).variants ?? []
        }, null, 8, ["on-close", "product", "shipping-date", "terms-conditions", "title", "variants"]), [
          [Me, a(n).activeModal === a(Se).Order]
        ])]), (A = v.siteSettings) != null && A.footer ? (c(), O($, E({
          key: 0,
          "hide-arrow": !0,
          "social-links": v.siteSettings.socialLinks
        }, v.siteSettings.footer), null, 16, ["social-links"])) : H("", !0)])
      }
    }
  }),
  Ba = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: wa
  }, Symbol.toStringTag, {
    value: "Module"
  }));
export {
  ns as _, Ba as a
};

function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./OrderModal.ChfwH9ZZ.js", "./entry.msGjDD6P.js", "./entry.RYkM-SUb.css", "./useSeo.composable.ciYHrDZC.js", "./SocialLinks.SPTxo4wa.js", "./SocialLinks.TtlthVPv.css", "./useSeo.NjJVBzoO.css", "./Counter.psfJX26i.js", "./Counter.fl8yw9K1.css", "./Video.vue.HUxPLu-j.js", "./OrderModal.H003xe2L.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}