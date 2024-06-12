"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4326], {
        67294: (e, t, r) => {
            r.d(t, {
                Z: () => c
            });
            var n = r(15791),
                a = r(40024);
            let c = function (e, t) {
                var r = (0, n.useState)(void 0 !== t ? t : !!a.jU && window.matchMedia(e).matches),
                    c = r[0],
                    u = r[1];
                return (0, n.useEffect)(function () {
                    var t = !0,
                        r = window.matchMedia(e),
                        n = function () {
                            t && u(!!r.matches)
                        };
                    return r.addEventListener("change", n), u(r.matches),
                        function () {
                            t = !1, r.removeEventListener("change", n)
                        }
                }, [e]), c
            }
        },
        64326: (e, t, r) => {
            let n;
            r.r(t), r.d(t, {
                default: () => v
            });
            var a = r(69797),
                c = r(49291),
                u = r(15791),
                i = r(67294),
                l = r(84862),
                o = r(22648),
                s = r(44562),
                h = r(22948),
                d = r(1278);
            let f = e => "/sequences/home-hero/Comp_".concat(e.toString().padStart(5, "0"), ".webp"),
                m = [],
                w = [];
            Array.from({
                length: 170
            }).forEach((e, t) => {
                t % 4 == 0 ? m.push([f(t), t]) : w.push([f(t), t])
            });
            let v = e => {
                let {
                    container: t,
                    onDrawChange: r
                } = e, f = (0, i.Z)(h.vl.query.lg), v = (0, u.useRef)([]), g = (0, u.useRef)(0), p = (0, u.useRef)(!1), [b, E] = (0, u.useState)(!1), [y, k, C] = (0, s.r)(!1);
                (0, u.useEffect)(() => {
                    r(y)
                }, [y, r]);
                let R = (0, u.useCallback)(async e => {
                    let [t, r] = e, n = new window.Image;
                    return n.src = t, await new Promise(e => {
                        n.onload = () => {
                            v.current[r] = n, e(null)
                        }
                    }), () => {
                        n.src = "", v.current[r] = void 0
                    }
                }, []);
                (0, o.lG)(() => {
                    let e;
                    if (b && f) return Promise.all(w.map(R)).then(t => {
                        e = () => {
                            t.forEach(e => e())
                        }
                    }), () => {
                        null == e || e()
                    }
                }, [b, R]);
                let [q, A, {
                    ctx: L
                }] = (0, l.A)({
                    offscreen: !1,
                    onResize: () => {
                        n && cancelAnimationFrame(n), n = requestAnimationFrame(() => {
                            _.current(g.current)
                        })
                    },
                    options: {
                        willReadFrequently: !1,
                        alpha: !1
                    }
                }), S = (0, u.useCallback)(e => {
                    let t = v.current[e];
                    if (!t || !L) return;
                    let r = L.canvas;
                    L.clearRect(0, 0, r.width, r.height);
                    let {
                        width: n,
                        height: a
                    } = t, c = n / a, u = r.width / r.height, i = r.width, l = r.height, o = 0, s = 0;
                    c < u ? (l = r.width / c, s = (r.height - l) / 2) : (i = r.height * c, o = (r.width - i) / 2);
                    try {
                        L.drawImage(t, o, s, i, l), C.current || requestAnimationFrame(() => {
                            k(!0)
                        })
                    } catch (t) {
                        h.r8 && console.error("Couldn't draw frame ".concat(e))
                    }
                }, [L]), _ = (0, u.useRef)(S);
                return _.current = S, (0, u.useLayoutEffect)(() => {
                    let e;
                    if (!f || p.current) return;
                    Promise.all(m.map(R)).then(t => {
                        S(0), E(!0), e = () => {
                            t.forEach(e => e())
                        }
                    }), p.current = !0;
                    let t = () => {
                        document.hidden || _.current(g.current)
                    };
                    return document.addEventListener("visibilitychange", t), () => {
                        E(!1), p.current = !1, k(!1), null == e || e(), document.removeEventListener("visibilitychange", t)
                    }
                }, [f, p, R]), (0, d.ui)(() => {
                    if (!f || !t) return;
                    let e = c.ZP.timeline({
                            scrollTrigger: {
                                trigger: t,
                                start: "top top",
                                end: "bottom bottom",
                                scrub: !0
                            }
                        }),
                        r = {
                            current: 0
                        };
                    e.to(r, {
                        current: 169,
                        onStart: () => {
                            S(0)
                        },
                        onUpdate: () => {
                            let e = Math.floor(r.current);
                            S(e), g.current = e
                        },
                        onComplete: () => {
                            S(169)
                        }
                    })
                }, {
                    dependencies: [S, f, t],
                    revertOnUpdate: !0
                }), (0, a.jsx)("div", {
                    ref: A,
                    className: "absolute inset-0",
                    children: (0, a.jsx)("canvas", {
                        id: "hero-canvas",
                        ref: q,
                        className: "absolute inset-0 hidden w-full h-full lg:block op0"
                    })
                })
            }
        }
    }
]);