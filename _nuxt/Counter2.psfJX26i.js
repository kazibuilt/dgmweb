import {
  V as ee,
  d as z,
  r as l,
  b as H,
  c as b,
  e as O,
  f as Y,
  l as ue,
  t as N,
  J as ae,
  a2 as ce,
  p as S,
  x as L,
  a as te,
  Q as se,
  o as J,
  j as E,
  h,
  a1 as ve,
  a0 as j,
  m as w,
  i as K,
  I as Q,
  s as oe,
  _ as de,
  R as re,
  U as ne,
  g as fe,
  v as pe,
  n as me,
  B as Z,
  ad as he,
  F as ge,
  k as _e,
  G as le,
  w as we
} from "./entry.msGjDD6P.js";
const Pe = (a, e, t) => Math.abs(a / (t - e) + e),
  U = (a, e, t) => e[0] + (t - a[0]) * (e[1] - e[0]) / (a[1] - a[0]),
  q = (a, e, t) => Math.max(e, Math.min(a, t)),
  be = (a, e, t) => (1 - t) * a + t * e;
var X = (a => (a.Cover = "Cover", a.Horizontal = "Horizontal", a.Vertical = "Vertical", a))(X || {}),
  ie = (a => (a.ACF01 = "ACF-01", a))(ie || {}),
  A = (a => (a.AmbxWishbones = "AmbxWishbones", a.ArmsBackPlate = "ArmsBackPlate", a.Homepage = "Homepage", a.InspirationMaterial = "InspirationMaterial", a.WeightEngravedGlass = "WeightEngravedGlass", a))(A || {}),
  ke = (a => (a.Dual = "Dual", a.Labels = "Labels", a.SectionTitle = "SectionTitle", a.Single = "Single", a))(ke || {});
const Re = (a, e, t = "desktop") => {
    var r;
    const o = "webp",
      c = {
        [ie.ACF01]: {
          [A.AmbxWishbones]: {
            images: Array(317).fill("").map((s, n) => `/img/acf-01/01-ambx-wishbones/${t}/1-1-Mechanical-Marvel-Dark-x1.5_${15+n}.${o}`),
            enterFrame: 15,
            firstFrame: 15,
            totalFrames: 317
          },
          [A.ArmsBackPlate]: {
            images: Array(159).fill("").map((s, n) => `/img/acf-01/02-arms-backplate/${t}/1-2-TRIMMED-TO-THE-BONE-Dark_${24+n}.${o}`),
            enterFrame: 24,
            firstFrame: 24,
            totalFrames: 159
          },
          [A.Homepage]: {
            images: Array(131).fill("").map((s, n) => `/img/acf-01/home/${t}/2-1-1-IBM180deg-3.${o}`),
            enterFrame: 21,
            firstFrame: 44,
            totalFrames: 131
          },
          [A.InspirationMaterial]: {
            images: Array(88).fill("").map((s, n) => `/img/acf-01/03-inspiration-material/${t}/2-1_INSPIRED_BY_MOVEMENT-DARK_${21+n}.${o}`),
            enterFrame: 21,
            firstFrame: 21,
            totalFrames: 88
          },
          [A.WeightEngravedGlass]: {
            images: Array(165).fill("").map((s, n) => `/img/acf-01/04-weight-engraved-glass/${t}/2-2-Time-Set-In-Stone-Dark_x1-5_${24+n}.${o}`),
            enterFrame: 24,
            firstFrame: 24,
            totalFrames: 165
          }
        }
      };
    return (r = c == null ? void 0 : c[a]) == null ? void 0 : r[e]
  },
  Ve = ({
    imageEls: a,
    imageSequenceName: e,
    product: t
  }) => {
    const o = new Worker("/image-worker.js");
    o.addEventListener("message", s => {
      const {
        blob: n,
        index: u
      } = s.data, f = URL.createObjectURL(n), v = new Image;
      v.src = f, a.value.push({
        image: v,
        index: u
      }), a.value.sort((m, p) => m.index - p.index)
    });
    const c = window.innerWidth < ee.Small ? "mobile" : "desktop";
    (Re(t, e, c).images ?? []).forEach((s, n) => {
      o.postMessage({
        imageUrl: s,
        index: n
      })
    })
  },
  ye = ({
    ctx: a,
    img: e,
    canvasWidth: t,
    canvasHeight: o,
    fit: c,
    y: r
  }) => {
    const s = t / e.width,
      n = o / e.height;
    let u;
    c === X.Horizontal ? u = s : c === X.Vertical ? u = n : u = Math.min(s, n);
    const f = (t - e.width * u) / 2,
      v = (o - e.height * u) / 2;
    a.clearRect(0, 0, t, o), a.drawImage(e, 0, -r, e.width, e.height, f, v, e.width * u, e.height * u)
  },
  Fe = z({
    __name: "CopyReveal",
    props: {
      copy: {},
      tag: {
        default: "p"
      }
    },
    setup(a, {
      expose: e
    }) {
      const t = l(null);
      let o;
      return H(() => {
        o && o.kill()
      }), e({
        enter: () => {
          if (t.value) {
            const r = new ce(t.value, {
              type: "lines"
            });
            o = S.timeline({
              paused: !0,
              defaults: {
                ease: "power3.out",
                stagger: .08
              }
            }), o.addLabel("start").set(t.value, {
              autoAlpha: 1
            }).fromTo(r.lines, {
              y: 60
            }, {
              duration: 1.3,
              y: 0
            }, "start").fromTo(r.lines, {
              autoAlpha: 0
            }, {
              autoAlpha: 1,
              duration: 1.5
            }, "start").play()
          }
        }
      }), (r, s) => (b(), O(ae(r.tag), {
        ref_key: "elRef",
        ref: t,
        class: "copy-reveal"
      }, {
        default: Y(() => [ue(N(r.copy), 1)]),
        _: 1
      }, 512))
    }
  }),
  Ge = L(Fe, [
    ["__scopeId", "data-v-22b378cb"]
  ]),
  $e = a => (re("data-v-533c08bf"), a = a(), ne(), a),
  xe = {
    class: "bottom"
  },
  Te = $e(() => h("div", {
    class: "pattern"
  }, null, -1)),
  Ce = z({
    __name: "Carousel",
    props: {
      items: {},
      showBottomBorder: {
        type: Boolean,
        default: !1
      }
    },
    setup(a) {
      const e = a,
        {
          hook: t,
          hooks: o
        } = oe(),
        c = te(),
        {
          windowSize: r
        } = se(c),
        s = l(!1),
        n = l(null),
        u = l(0),
        f = l(0),
        v = l(0),
        m = l(0),
        p = l(null),
        k = l(null),
        R = l(0),
        I = l(0),
        T = l(0),
        C = l(0),
        _ = l(0),
        y = l(0);
      J(() => {
        B(), t("window:raf", $), t("window:resize", P)
      }), H(() => {
        o.removeHook("window:raf", $), o.removeHook("window:resize", P)
      });
      const B = () => {
          if (n.value) {
            const {
              right: i
            } = n.value.children[e.items.length - 1].getBoundingClientRect();
            u.value = r.value.width - i
          }
          if (p.value && k.value) {
            const {
              width: i
            } = p.value.getBoundingClientRect(), {
              width: g
            } = k.value.getBoundingClientRect();
            R.value = i - g + 4
          }
          v.value = u.value * _.value, T.value = R.value * _.value
        },
        P = () => {
          B()
        },
        V = i => {
          s.value = !0, f.value = i.clientX ?? i.touches[0].clientX
        },
        G = i => {
          if (!s.value) return;
          const g = i.clientX ?? i.touches[0].clientX,
            M = v.value + (g - f.value) * 1.5;
          m.value = q(M, u.value, 0), _.value = U([0, u.value], [0, 1], m.value)
        },
        D = () => {
          s.value = !1, v.value = m.value, setTimeout(() => {
            T.value = R.value * _.value
          }, 500)
        },
        d = i => {
          s.value = !0, I.value = i.clientX ?? i.touches[0].clientX
        },
        W = i => {
          if (s.value && k.value) {
            const g = i.clientX ?? i.touches[0].clientX,
              M = T.value + (g - I.value);
            C.value = q(M, 0, R.value), _.value = U([0, R.value], [0, 1], C.value)
          }
        },
        x = () => {
          s.value = !1, T.value = C.value, setTimeout(() => {
            v.value = u.value * _.value
          }, 500)
        },
        F = () => {
          x()
        },
        $ = () => {
          y.value = be(y.value, _.value, .1);
          const i = U([0, 1], [0, u.value], y.value),
            g = U([0, 1], [0, R.value], y.value);
          n.value && (n.value.style.transform = `translate3d(${i}px, 0, 0)`), k.value && (k.value.style.transform = `translate3d(${g}px, 0, 0)`)
        };
      return (i, g) => {
        const M = de;
        return b(), E("div", {
          class: Q(["carousel", w(s) && "dragging", i.showBottomBorder && "bottom-border"])
        }, [h("div", {
          ref_key: "trackRef",
          ref: n,
          class: "track",
          style: j({
            gridTemplateColumns: `repeat(${i.items.length}, 1fr)`
          }),
          onMousedown: V,
          onMousemove: G,
          onMouseup: D,
          onMouseleave: D,
          onTouchstart: V,
          onTouchmove: G,
          onTouchend: D
        }, [ve(i.$slots, "default", {}, void 0, !0)], 36), h("div", xe, [h("div", {
          ref_key: "progressWrapperRef",
          ref: p,
          class: "progress-wrapper",
          onMousemove: W,
          onMouseleave: F,
          onMouseup: x,
          onTouchmove: W
        }, [Te, h("div", {
          class: "pattern",
          style: j({
            width: `${w(y)*100}%`
          })
        }, null, 4), h("div", {
          ref_key: "scrubberRef",
          ref: k,
          class: "scrubber",
          onMousedown: d,
          onMouseup: x,
          onTouchstart: d,
          onTouchend: x
        }, [K(M, {
          class: "arrow",
          name: "ArrowLeft"
        }), K(M, {
          class: "arrow",
          name: "ArrowRight"
        })], 544)], 544), h("div", {
          class: Q(["instructions", w(s) && "hidden"])
        }, "Swipe to Explore", 2)])], 2)
      }
    }
  }),
  Ue = L(Ce, [
    ["__scopeId", "data-v-533c08bf"]
  ]),
  Se = a => (re("data-v-379af825"), a = a(), ne(), a),
  Me = {
    class: "inner"
  },
  Ae = Se(() => h("circle", {
    cx: "50",
    cy: "50",
    r: "50",
    fill: "none",
    stroke: "var(--color-darkGrey)",
    "stroke-width": "0.2"
  }, null, -1)),
  Ee = [Ae],
  Ie = z({
    __name: "Hotspot",
    props: {
      label: {},
      scale: {
        default: 1
      },
      visible: {
        type: Boolean
      }
    },
    setup(a) {
      const e = a,
        t = l(null),
        o = l(null),
        c = l(null),
        r = l();
      let s;
      H(() => {
        f()
      });
      const n = () => {
          s = S.timeline({
            paused: !0
          }), s.addLabel("start").set(t.value, {
            autoAlpha: 1
          }).fromTo(o.value, {
            scale: 0
          }, {
            duration: .5,
            ease: "power3.inOut",
            scale: e.scale
          }, "start").fromTo(c.value, {
            scale: 1
          }, {
            duration: 2,
            ease: "power3.out",
            scale: 3
          }, "start").fromTo(c.value, {
            autoAlpha: 1
          }, {
            autoAlpha: 0,
            duration: 1.5,
            ease: "power3.out"
          }, "start+=0.5"), r.value = setInterval(() => {
            S.fromTo(c.value, {
              scale: 1
            }, {
              duration: 2,
              ease: "power3.out",
              scale: 3
            }), S.fromTo(c.value, {
              autoAlpha: 1
            }, {
              autoAlpha: 0,
              delay: .5,
              duration: 1.5,
              ease: "power3.out"
            })
          }, 2050), s.play()
        },
        u = (v, m) => {
          f(), S.to(o.value, {
            duration: .5,
            ease: "power3.inOut",
            scale: 0,
            onComplete: m
          })
        },
        f = () => {
          s && s.kill(), r.value && clearInterval(r.value)
        };
      return (v, m) => (b(), O(me, {
        name: "hotspotTransition",
        css: !1,
        onEnter: n,
        onLeave: u
      }, {
        default: Y(() => [fe(h("div", {
          ref_key: "elRef",
          ref: t,
          class: "hotspot"
        }, [h("div", {
          ref_key: "buttonRef",
          ref: o,
          class: "button"
        }, [h("span", Me, N(v.label), 1), (b(), E("svg", {
          ref_key: "ringRef",
          ref: c,
          class: "ring",
          viewBox: "0 0 100 100",
          xmlns: "http://www.w3.org/2000/svg"
        }, Ee, 512))], 512)], 512), [
          [pe, v.visible]
        ])]),
        _: 1
      }))
    }
  }),
  Be = L(Ie, [
    ["__scopeId", "data-v-379af825"]
  ]),
  De = {
    class: "image-sequence"
  },
  We = z({
    __name: "ImageSequence",
    props: {
      bounds: {},
      hasEnter: {
        type: Boolean,
        default: !1
      },
      hotspots: {},
      fit: {
        default: X.Cover
      },
      imageEls: {},
      onGetFrame: {},
      progress: {},
      scale: {
        default: 1
      },
      enterFrame: {},
      firstFrame: {},
      totalFrames: {}
    },
    setup(a) {
      const e = a,
        {
          hook: t,
          hooks: o
        } = oe(),
        c = te(),
        {
          windowSize: r
        } = se(c),
        s = l(null),
        n = l(null),
        u = l(0),
        f = l(0),
        v = l(0),
        m = l(-1),
        p = l(null),
        k = l(!1),
        R = l(!1),
        I = Z(() => r.value.width < ee.Small);
      J(() => {
        s.value && (p.value = s.value.getContext("2d"), p.value && p.value.scale(window.devicePixelRatio, window.devicePixelRatio)), t("window:raf", _), t("window:resize", C), C()
      }), H(() => {
        o.removeHook("window:raf", _), o.removeHook("window:resize", C)
      });
      const T = Z(() => e.fit === X.Vertical ? "svh" : "svw"),
        C = () => {
          u.value = r.value.width * window.devicePixelRatio, f.value = r.value.height * window.devicePixelRatio, s.value && p.value && (s.value.width = u.value, s.value.height = f.value, s.value.style.width = `${r.value.width}px`, s.value.style.height = `${r.value.height}px`, he(() => {
            y()
          })), n.value && (n.value.style.width = `${r.value.width}px`, n.value.style.height = `${r.value.height}px`)
        },
        _ = () => {
          e.bounds.top <= r.value.height && e.bounds.bottom > 0 && p.value && (e.hasEnter && !R.value ? k.value || G() : (B(), P()))
        },
        y = (d = void 0, W = 0) => {
          if (p.value) {
            p.value.clearRect(0, 0, u.value, f.value);
            const x = d ?? v.value,
              F = e.imageEls[x];
            F != null && F.complete && ye({
              ctx: p.value,
              img: F,
              canvasWidth: u.value,
              canvasHeight: f.value,
              fit: e.fit,
              y: W
            })
          }
        },
        B = () => {
          V(Math.ceil((e.totalFrames - (e.firstFrame - e.enterFrame) - 1) * e.progress))
        },
        P = () => {
          m.value !== v.value && (m.value = v.value, y())
        },
        V = d => {
          v.value = d + e.firstFrame - e.enterFrame, e.onGetFrame && e.onGetFrame(d + e.firstFrame - e.enterFrame)
        },
        G = () => {
          k.value = !0, B();
          const d = {
            frame: 1,
            y: 200
          };
          S.fromTo(d, {
            frame: d.frame,
            y: d.y
          }, {
            delay: .2,
            duration: 1,
            ease: "sine.out",
            roundProps: "frame,y",
            frame: e.firstFrame - e.enterFrame,
            y: 0,
            onUpdate: () => {
              y(d.frame, d.y)
            },
            onComplete: D
          })
        },
        D = () => {
          R.value = !0
        };
      return (d, W) => {
        var F;
        const x = Be;
        return b(), E("div", De, [h("canvas", {
          ref_key: "canvasRef",
          ref: s,
          class: "canvas"
        }, null, 512), ((F = d.hotspots) == null ? void 0 : F.length) > 0 ? (b(), E("div", {
          key: 0,
          ref_key: "hotspotsRef",
          ref: n,
          class: "hotspots"
        }, [(b(!0), E(ge, null, _e(d.hotspots, $ => {
          var i, g;
          return b(), O(x, {
            key: $._uid,
            label: $.label,
            style: j({
              transform: `
              translate3d(
                ${$.position.x}${w(T)},
                ${$.position.y}${w(T)},
                0
              )
            `
            }),
            scale: 1 / e.scale,
            visible: w(m) >= ((i = $.frame[w(I) ? "mobile" : "desktop"]) == null ? void 0 : i.start) && w(m) <= ((g = $.frame[w(I) ? "mobile" : "desktop"]) == null ? void 0 : g.end)
          }, null, 8, ["label", "style", "scale", "visible"])
        }), 128))], 512)) : le("", !0)])
      }
    }
  }),
  Ne = L(We, [
    ["__scopeId", "data-v-dbfc8f3d"]
  ]),
  Xe = {
    class: "number"
  },
  ze = {
    key: 0
  },
  He = z({
    __name: "Counter",
    props: {
      decimals: {
        default: 3
      },
      duration: {
        default: .7
      },
      label: {},
      number: {},
      start: {
        type: Boolean,
        default: !0
      },
      tag: {
        default: "div"
      }
    },
    setup(a) {
      const e = a,
        t = l(e.number);
      let o;
      we(() => e.start, () => {
        e.start ? c() : o && o.kill()
      }), J(() => {
        e.start && c()
      }), H(() => {
        o && o.kill()
      });
      const c = () => {
        const r = e.number;
        o = S.fromTo(t, {
          value: 0
        }, {
          duration: e.duration,
          ease: "expo.out",
          value: r
        })
      };
      return (r, s) => (b(), O(ae(r.tag), {
        class: "counter"
      }, {
        default: Y(() => [h("span", Xe, N(Number(w(t)).toFixed(r.decimals)), 1), r.label ? (b(), E("span", ze, " " + N(r.label), 1)) : le("", !0)]),
        _: 1
      }))
    }
  }),
  Oe = L(He, [
    ["__scopeId", "data-v-73fc3884"]
  ]);
export {
  Ge as C, X as F, A as I, ie as P, Ue as _, Ve as a, Ne as b, q as c, Oe as d, ke as e, U as m, Pe as p, Re as u
};