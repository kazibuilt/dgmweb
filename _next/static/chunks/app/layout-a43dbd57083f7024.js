(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3185], {
        55593: (e, t, n) => {
            Promise.resolve().then(n.bind(n, 29809)), Promise.resolve().then(n.bind(n, 70337)), Promise.resolve().then(n.bind(n, 31945)), Promise.resolve().then(n.bind(n, 84967)), Promise.resolve().then(n.t.bind(n, 24526, 23)), Promise.resolve().then(n.t.bind(n, 87485, 23)), Promise.resolve().then(n.t.bind(n, 78656, 23)), Promise.resolve().then(n.t.bind(n, 43700, 23)), Promise.resolve().then(n.bind(n, 91300)), Promise.resolve().then(n.bind(n, 16148)), Promise.resolve().then(n.bind(n, 89099)), Promise.resolve().then(n.bind(n, 82642)), Promise.resolve().then(n.bind(n, 67459)), Promise.resolve().then(n.bind(n, 76004)), Promise.resolve().then(n.bind(n, 15530)), Promise.resolve().then(n.bind(n, 48247)), Promise.resolve().then(n.t.bind(n, 99810, 23)), Promise.resolve().then(n.bind(n, 59710))
        },
        51417: e => {
            function t(e, t = 100, n = {}) {
                let r, l, o, s, i;
                if ("function" != typeof e) throw TypeError(`Expected the first parameter to be a function, got \`${typeof e}\`.`);
                if (t < 0) throw RangeError("`wait` must not be negative.");
                let {
                    immediate: a
                } = "boolean" == typeof n ? {
                    immediate: n
                } : n;

                function c() {
                    let n = Date.now() - s;
                    if (n < t && n >= 0) o = setTimeout(c, t - n);
                    else if (o = void 0, !a) {
                        let t = r,
                            n = l;
                        r = void 0, l = void 0, i = e.apply(t, n)
                    }
                }
                let u = function (...n) {
                    if (r && this !== r) throw Error("Debounced method called with different contexts.");
                    r = this, l = n, s = Date.now();
                    let u = a && !o;
                    if (o || (o = setTimeout(c, t)), u) {
                        let t = r,
                            n = l;
                        r = void 0, l = void 0, i = e.apply(t, n)
                    }
                    return i
                };
                return u.clear = () => {
                    o && (clearTimeout(o), o = void 0)
                }, u.flush = () => {
                    if (!o) return;
                    let t = r,
                        n = l;
                    r = void 0, l = void 0, i = e.apply(t, n), clearTimeout(o), o = void 0
                }, u
            }
            e.exports.debounce = t, e.exports = t
        },
        66824: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function () {
                    return o
                }
            });
            let r = n(83871);
            n(37859), n(83331);
            let l = r._(n(44925));

            function o(e, t) {
                var n;
                let r = {
                    loading: e => {
                        let {
                            error: t,
                            isLoading: n,
                            pastDelay: r
                        } = e;
                        return null
                    }
                };
                "function" == typeof e && (r.loader = e);
                let o = {
                    ...r,
                    ...t
                };
                return (0, l.default)({
                    ...o,
                    modules: null == (n = o.loadableGenerated) ? void 0 : n.modules
                })
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        644: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "BailoutToCSR", {
                enumerable: !0,
                get: function () {
                    return l
                }
            });
            let r = n(90594);

            function l(e) {
                let {
                    reason: t,
                    children: n
                } = e;
                if ("undefined" == typeof window) throw new r.BailoutToCSRError(t);
                return n
            }
        },
        44925: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function () {
                    return c
                }
            });
            let r = n(37859),
                l = n(83331),
                o = n(644),
                s = n(25858);

            function i(e) {
                return {
                    default: e && "default" in e ? e.default : e
                }
            }
            let a = {
                    loader: () => Promise.resolve(i(() => null)),
                    loading: null,
                    ssr: !0
                },
                c = function (e) {
                    let t = {
                            ...a,
                            ...e
                        },
                        n = (0, l.lazy)(() => t.loader().then(i)),
                        c = t.loading;

                    function u(e) {
                        let i = c ? (0, r.jsx)(c, {
                                isLoading: !0,
                                pastDelay: !0,
                                error: null
                            }) : null,
                            a = t.ssr ? (0, r.jsxs)(r.Fragment, {
                                children: ["undefined" == typeof window ? (0, r.jsx)(s.PreloadCss, {
                                    moduleIds: t.modules
                                }) : null, (0, r.jsx)(n, {
                                    ...e
                                })]
                            }) : (0, r.jsx)(o.BailoutToCSR, {
                                reason: "next/dynamic",
                                children: (0, r.jsx)(n, {
                                    ...e
                                })
                            });
                        return (0, r.jsx)(l.Suspense, {
                            fallback: i,
                            children: a
                        })
                    }
                    return u.displayName = "LoadableComponent", u
                }
        },
        25858: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "PreloadCss", {
                enumerable: !0,
                get: function () {
                    return o
                }
            });
            let r = n(37859),
                l = n(5209);

            function o(e) {
                let {
                    moduleIds: t
                } = e;
                if ("undefined" != typeof window) return null;
                let n = (0, l.getExpectedRequestStore)("next/dynamic css"),
                    o = [];
                if (n.reactLoadableManifest && t) {
                    let e = n.reactLoadableManifest;
                    for (let n of t) {
                        if (!e[n]) continue;
                        let t = e[n].files.filter(e => e.endsWith(".css"));
                        o.push(...t)
                    }
                }
                return 0 === o.length ? null : (0, r.jsx)(r.Fragment, {
                    children: o.map(e => (0, r.jsx)("link", {
                        precedence: "dynamic",
                        rel: "stylesheet",
                        href: n.assetPrefix + "/_next/" + encodeURI(e),
                        as: "style"
                    }, e))
                })
            }
        },
        69659: (e, t, n) => {
            "use strict";

            function r(e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                e && e.addEventListener && e.addEventListener.apply(e, t)
            }

            function l(e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                e && e.removeEventListener && e.removeEventListener.apply(e, t)
            }
            n.d(t, {
                S1: () => l,
                jU: () => o,
                on: () => r
            });
            var o = "undefined" != typeof window
        },
        98623: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l
            });
            var r = n(83331);
            let l = function (e) {
                (0, r.useEffect)(e, [])
            }
        },
        5087: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => a
            });
            var r = n(83331),
                l = n(98623);
            let o = function (e) {
                    var t = (0, r.useRef)(e);
                    t.current = e, (0, l.Z)(function () {
                        return function () {
                            return t.current()
                        }
                    })
                },
                s = function (e) {
                    var t = (0, r.useRef)(0),
                        n = (0, r.useState)(e),
                        l = n[0],
                        s = n[1],
                        i = (0, r.useCallback)(function (e) {
                            cancelAnimationFrame(t.current), t.current = requestAnimationFrame(function () {
                                s(e)
                            })
                        }, []);
                    return o(function () {
                        cancelAnimationFrame(t.current)
                    }), [l, i]
                };
            var i = n(69659);
            let a = function (e, t) {
                void 0 === e && (e = 1 / 0), void 0 === t && (t = 1 / 0);
                var n = s({
                        width: i.jU ? window.innerWidth : e,
                        height: i.jU ? window.innerHeight : t
                    }),
                    l = n[0],
                    o = n[1];
                return (0, r.useEffect)(function () {
                    if (i.jU) {
                        var e = function () {
                            o({
                                width: window.innerWidth,
                                height: window.innerHeight
                            })
                        };
                        return (0, i.on)(window, "resize", e),
                            function () {
                                (0, i.S1)(window, "resize", e)
                            }
                    }
                }, []), l
            }
        },
        91300: (e, t, n) => {
            "use strict";
            n.d(t, {
                AppHooks: () => u
            });
            var r = n(22300),
                l = n(83331),
                o = n(83203),
                s = n(7818),
                i = n(15928),
                a = n(23491),
                c = n(31832);
            let u = () => ((0, l.useEffect)(() => {
                    a.BB && a.C5 && console.log(a.oW)
                }, []), (0, s.iB)(), v(), g(), b(), p(), m(), h(), f(), a.r8 && d(), null),
                d = () => {
                    (0, l.useEffect)(() => {
                        let e = new ResizeObserver(e => {
                            for (let t of e) t.target === document.body && console.log("Body height changed: ".concat(document.body.clientHeight, "px"))
                        });
                        return e.observe(document.body), () => {
                            e.disconnect()
                        }
                    }, [])
                },
                f = () => {
                    let e = (0, l.useRef)(),
                        t = (0, r.usePathname)();
                    void 0 === e.current && (e.current = t), (0, l.useEffect)(() => {
                        e.current && e.current !== t && o.q.setState({
                            hasNavigated: !0
                        })
                    }, [t])
                },
                h = () => {
                    let e = (0, s.i8)(),
                        t = (0, o.q)(e => e.highPriorityAnimationRunning);
                    (0, l.useEffect)(() => {
                        if (e && !t) return c.c.run(), c.c.startRunAllInstantly(), () => {
                            c.c.killRunAllInstantly()
                        }
                    }, [e, t])
                },
                m = () => {
                    let e = (0, i.G)("(prefers-reduced-motion: reduce)");
                    (0, l.useEffect)(() => {
                        void 0 !== e && o.q.setState({
                            reducedMotion: e
                        })
                    }, [e])
                },
                p = () => {
                    (0, l.useLayoutEffect)(() => {
                        window.scrollTo(0, 0)
                    }, [])
                },
                v = () => {
                    (0, l.useEffect)(() => {
                        let e;
                        if (a.r8) return Promise.resolve().then(n.t.bind(n, 86130, 23)).then(t => {
                            let {
                                default: n
                            } = t;
                            e = n.bind(["command+i", "ctrl+i", "alt+i"], () => {
                                document.body.classList.toggle("inspect")
                            })
                        }), () => {
                            null == e || e.unbind(["command+i", "ctrl+i", "alt+i"])
                        }
                    }, [])
                },
                g = () => {
                    (0, l.useEffect)(() => {
                        function e(e) {
                            "Tab" === e.code && document.body.classList.add("user-is-tabbing")
                        }

                        function t() {
                            document.body.classList.remove("user-is-tabbing")
                        }
                        return window.addEventListener("keydown", e), window.addEventListener("mousedown", t), () => {
                            window.removeEventListener("keydown", e), window.removeEventListener("mousedown", t)
                        }
                    }, [])
                },
                b = () => {
                    (0, l.useEffect)(() => {
                        let e = window.setTimeout(() => {
                            t()
                        }, 1500);

                        function t() {
                            window.clearTimeout(e), o.q.setState({
                                fontsLoaded: !0
                            }), document.documentElement.classList.add("fonts-loaded")
                        }
                        try {
                            document.fonts.ready.then(() => {
                                t()
                            }).catch(e => {
                                console.error(e), t()
                            })
                        } catch (e) {
                            console.error(e), t()
                        }
                    }, [])
                }
        },
        16148: (e, t, n) => {
            "use strict";
            n.d(t, {
                LoadPageCanvas: () => r
            });
            let r = (0, n(76669).Q)(() => Promise.all([n.e(679), n.e(6646), n.e(6418), n.e(9211)]).then(n.bind(n, 73832)))
        },
        89099: (e, t, n) => {
            "use strict";
            n.d(t, {
                Providers: () => p
            });
            var r = n(37859),
                l = n(8174),
                o = n(65349),
                s = n(23294),
                i = n(92915),
                a = n(95275),
                c = n(83331),
                u = n(9078),
                d = n(22300);
            i.ZP.registerPlugin(a.i), i.ZP.registerPlugin(u.V);
            let f = e => {
                let {
                    children: t
                } = e, n = (0, c.useRef)(null), l = (0, d.usePathname)();
                return (0, c.useEffect)(() => {
                    var e, t;
                    window.scroll({
                        top: 0,
                        behavior: "instant"
                    }), null === (t = n.current) || void 0 === t || null === (e = t.lenis) || void 0 === e || e.scrollTo(0, {
                        immediate: !0
                    })
                }, [l]), (0, c.useEffect)(() => {
                    function e(e) {
                        var t, r;
                        null === (r = n.current) || void 0 === r || null === (t = r.lenis) || void 0 === t || t.raf(1e3 * e)
                    }
                    return i.ZP.ticker.add(e), () => {
                        i.ZP.ticker.remove(e)
                    }
                }, []), (0, r.jsx)(s.ZP, {
                    root: !0,
                    ref: n,
                    autoRaf: !1,
                    options: {
                        lerp: .13
                    },
                    children: t
                })
            };
            var h = n(47470);
            let m = new l.S,
                p = e => {
                    let {
                        children: t
                    } = e;
                    return (0, r.jsx)(f, {
                        children: (0, r.jsx)(h.aH, {
                            children: (0, r.jsx)(o.aH, {
                                client: m,
                                children: t
                            })
                        })
                    })
                }
        },
        82642: (e, t, n) => {
            "use strict";
            n.d(t, {
                DeviceDetector: () => o
            });
            var r = n(83331),
                l = n(84251);
            let o = () => ((0, r.useEffect)(() => {
                let e = new AbortController,
                    t = e.signal;
                return n.e(5923).then(n.bind(n, 35923)).then(e => {
                    t.aborted || l.F.setState({
                        ...e.getSelectorsByUserAgent(navigator.userAgent)
                    })
                }), () => {
                    e.abort()
                }
            }, []), null)
        },
        67459: (e, t, n) => {
            "use strict";
            n.d(t, {
                LoadHalftone: () => r
            });
            let r = (0, n(76669).Q)(() => n.e(2101).then(n.bind(n, 2101)))
        },
        76004: (e, t, n) => {
            "use strict";
            n.d(t, {
                Header: () => M
            });
            var r = n(37859),
                l = n(92552),
                o = n.n(l);
            let s = e => {
                let {
                    fill: t = "currentColor",
                    width: n = 22,
                    height: l = 22,
                    ...o
                } = e;
                return (0, r.jsxs)("svg", {
                    width: n,
                    height: l,
                    viewBox: "0 0 22 22",
                    fill: t,
                    xmlns: "http://www.w3.org/2000/svg",
                    ...o,
                    children: [(0, r.jsx)("path", {
                        d: "M15.2329 0.561035V15.2278H0.564453C2.27626 19.2019 6.23112 21.9956 10.8353 21.9956C17.0037 21.9956 22.0014 16.9984 22.0014 10.8307C22.0014 6.22707 19.2172 2.27265 15.2329 0.561035Z",
                        fill: "currentColor"
                    }), (0, r.jsx)("path", {
                        d: "M7.61248 0.0200195V7.61408H0.0175781C0.234013 11.3914 3.36249 14.3819 7.18946 14.3819C11.0164 14.3819 14.381 11.1652 14.381 7.1911C14.381 3.217 11.3903 0.236431 7.61248 0.0200195Z",
                        fill: "currentColor"
                    }), (0, r.jsx)("path", {
                        d: "M3.38426 6.76777C5.25333 6.76777 6.76852 5.25275 6.76852 3.38388C6.76852 1.51502 5.25333 0 3.38426 0C1.51518 0 0 1.51502 0 3.38388C0 5.25275 1.51518 6.76777 3.38426 6.76777Z",
                        fill: "currentColor"
                    })]
                })
            };
            var i = n(23294),
                a = n(92915),
                c = n(83331),
                u = n(57331),
                d = n(9479);
            let f = (0, d.Ue)(e => ({
                type: "auto",
                set: t => {
                    document.body.style.cursor = t, e({
                        type: t
                    })
                }
            }));
            var h = n(84674);
            let m = () => {
                let e = f(),
                    t = (0, c.useRef)(null),
                    [n, l] = (0, c.useState)(!1),
                    [s, d] = (0, c.useState)(!1),
                    [m, p] = (0, c.useState)(null),
                    v = (0, c.useRef)(s);
                v.current = s, (0, c.useEffect)(() => {
                    if (s) {
                        e.set("grabbing");
                        return
                    }
                    n ? e.set("grab") : e.set("auto")
                }, [n, s]);
                let g = (0, i.LZ)(e => {
                    var n;
                    let r = 16 * e.progress;
                    null === (n = t.current) || void 0 === n || n.childNodes.forEach((e, t) => {
                        let n = Math.sin(a.ZP.utils.clamp(-Math.PI / 2, Math.PI / 2, r - t) + Math.PI / 2);
                        e.style.setProperty("--opacity", "".concat(.3 + .7 * n)), e.style.setProperty("--line-progress", "".concat(n)), e.style.setProperty("--scaleX", "".concat(1 + .5 * n))
                    })
                });
                return (0, c.useEffect)(() => {
                    var e, n;
                    let r = {
                            x: 0,
                            y: 0
                        },
                        l = {
                            y: 0
                        },
                        o = t.current,
                        s = e => {
                            let t;
                            if (d(!0), "mousedown" === e.type) t = {
                                x: e.clientX,
                                y: e.clientY
                            };
                            else if ("touchstart" === e.type) {
                                let n = e.touches[0];
                                if (!n) return;
                                t = {
                                    x: n.clientX,
                                    y: n.clientY
                                }
                            } else throw Error("Invalid event type");
                            t && (l.y = (null == g ? void 0 : g.scroll) || 0, r.x = t.x, r.y = t.y)
                        },
                        i = e => {
                            let t;
                            if (!v.current) return;
                            if ("mousemove" === e.type) t = {
                                x: e.clientX,
                                y: e.clientY
                            };
                            else if ("touchmove" === e.type) {
                                let n = e.touches[0];
                                if (!n) return;
                                t = {
                                    x: n.clientX,
                                    y: n.clientY
                                }
                            } else throw Error("Invalid event type");
                            let n = (t.y - r.y) * 20;
                            h.B.getState().runningSnapRef.current = !1, null == g || g.scrollTo(l.y + n)
                        },
                        a = () => {
                            d(!1)
                        };
                    return null == o || o.addEventListener("mousedown", s), null === (e = window) || void 0 === e || e.addEventListener("mousemove", i), null === (n = window) || void 0 === n || n.addEventListener("mouseup", a), () => {
                        var e, t;
                        null == o || o.removeEventListener("mousedown", s), null === (e = window) || void 0 === e || e.removeEventListener("mousemove", i), null === (t = window) || void 0 === t || t.removeEventListener("mouseup", a)
                    }
                }, [g]), (0, r.jsx)("div", {
                    className: (0, u.L)(o()["scroll-indicator"]),
                    onPointerLeave: () => {
                        l(!1), p(null)
                    },
                    onPointerEnter: () => {
                        l(!0)
                    },
                    ref: t,
                    children: Array.from({
                        length: 16
                    }).map((e, t) => (0, r.jsx)("span", {
                        onPointerEnter: () => {
                            p(t)
                        },
                        style: {
                            "--scale-factor": m ? t === m ? 1.3 : t === m - 1 || t === m + 1 ? 1.2 : t === m - 2 || t === m + 2 ? 1.1 : 1 : 1
                        },
                        className: (0, u.L)(o()["scroll-indicator-line"]),
                        children: (0, r.jsx)("span", {})
                    }, t))
                })
            };
            var p = n(22300),
                v = n(40645),
                g = n(23491);
            let b = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = (0, i.LZ)(g.lt);
                (0, c.useEffect)(() => {
                    if (t && e) return t.stop(), document.documentElement.classList.add("no-scroll"), () => {
                        t.start(), document.documentElement.classList.remove("no-scroll")
                    }
                }, [e, t])
            };
            var w = n(48861),
                y = n(83203),
                x = n(47841),
                E = n(8107);
            let _ = (0, d.Ue)(e => ({
                    isOpen: !1,
                    toggle: () => e(e => ({
                        isOpen: !e.isOpen
                    })),
                    setMenu: t => e({
                        isOpen: t
                    })
                })),
                j = [{
                    title: "Home",
                    href: "/"
                }, {
                    title: "Product",
                    href: "/product"
                }],
                P = () => {
                    let e = _(e => e.isOpen),
                        t = _(e => e.setMenu),
                        n = (0, c.useRef)(null),
                        l = (0, c.useRef)(null),
                        s = (0, c.useRef)(null),
                        i = (0, p.usePathname)();
                    b(e), (0, c.useLayoutEffect)(() => {
                        var e;
                        let t = n.current;
                        t && (a.ZP.set("#menu-container", {
                            xPercent: -10,
                            autoAlpha: 0
                        }), a.ZP.set(l.current, {
                            autoAlpha: 0
                        }), t.style.setProperty("display", "block"), null === (e = l.current) || void 0 === e || e.style.setProperty("display", "block"))
                    }, []), (0, c.useEffect)(() => {
                        t(!1)
                    }, [i, t]), (0, c.useEffect)(() => {
                        n.current && (s.current && s.current.kill(), s.current = a.ZP.to("#menu-container", {
                            xPercent: e ? 0 : -10,
                            autoAlpha: e ? 1 : 0,
                            duration: .4,
                            ease: "power3.out",
                            onStart: () => {
                                a.ZP.to(l.current, {
                                    autoAlpha: e ? 1 : 0,
                                    duration: 1.4,
                                    ease: "power3.out"
                                }), y.q.setState({
                                    highPriorityAnimationRunning: !0
                                })
                            },
                            onComplete: () => {
                                y.q.setState({
                                    highPriorityAnimationRunning: !1
                                })
                            }
                        }))
                    }, [e]), (0, x.p)(() => {
                        e && t(!1)
                    }, [e, t]);
                    let d = (0, v.f)(e => e.headerDarkMode);
                    return (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsxs)("div", {
                            ref: n,
                            style: {
                                display: "none"
                            },
                            children: [(0, r.jsx)("div", {
                                ref: l,
                                onClick: () => {
                                    t(!1)
                                },
                                style: {
                                    transitionProperty: "backdrop-filter"
                                },
                                className: (0, u.L)("fixed inset-0 cursor-pointer bg-night/20 duration-[400ms] ease-linear transition-['backdrop-filter']", e ? "backdrop-blur-[2px]" : "backdrop-blur-0")
                            }), (0, r.jsx)("div", {
                                id: "menu-container",
                                className: (0, u.L)("avoid-desktop-header fixed top-0 left-0 w-full h-full lg:max-w-[30vw] backdrop-blur-lg shadow-lg", o()["header-menu-color-transition"], d ? "bg-night/90" : "bg-moonlight/90"),
                                children: (0, r.jsxs)("div", {
                                    className: "flex flex-col justify-between w-full h-full max-lg:hero-container lg:px-3 lg:pb-8 lg:pt-6 lg:pr-8",
                                    children: [(0, r.jsx)("div", {
                                        className: "max-lg:hero-inner-tight max-lg:!px-0",
                                        children: (0, r.jsx)("ul", {
                                            className: "flex flex-col gap-vw-6 max-lg:hero-inner-loose",
                                            children: j.map((e, t) => (0, r.jsx)("li", {
                                                className: "flex title-md lg:title-sm",
                                                children: (0, r.jsxs)(w.r, {
                                                    onClick: () => {
                                                        y.q.setState({
                                                            highPriorityAnimationRunning: !0
                                                        })
                                                    },
                                                    href: e.href,
                                                    className: "inline-flex items-center",
                                                    children: [e.href === i && (0, r.jsx)("span", {
                                                        className: "inline-block size-[0.15em] mr-vw-2 rounded-full bg-[currentColor]"
                                                    }), e.title]
                                                })
                                            }, t))
                                        })
                                    }), (0, r.jsx)("div", {
                                        className: "shrink-0 grow-0",
                                        children: (0, r.jsx)(E.k, {
                                            size: "lg",
                                            className: "w-full min-w-0",
                                            variant: "primary"
                                        })
                                    })]
                                })
                            })]
                        })
                    })
                };
            var C = n(93136),
                L = n(5087),
                k = n(95275);
            let S = () => {
                let e = (0, c.useRef)(null),
                    t = (0, c.useRef)(null),
                    {
                        width: n,
                        height: l
                    } = (0, L.Z)(),
                    [o, s] = (0, c.useState)(null),
                    [i, a] = (0, c.useState)(null),
                    u = (0, p.usePathname)(),
                    d = (0, c.useCallback)(() => {
                        if (!n || n < g.vl.raw.lg) return;
                        let e = document.querySelectorAll("[data-index-title]");
                        e.length || (s([]), a(null));
                        let t = [];
                        e.forEach(e => {
                            let n = e.getAttribute("data-index-title");
                            null != n && t.push({
                                element: e,
                                value: n
                            })
                        }), s(t)
                    }, [n, l, u]);
                return (0, c.useLayoutEffect)(() => {
                    d()
                }, [u]), (0, C.ui)(() => {
                    let e = null == o ? void 0 : o.map(e => k.i.create({
                        trigger: e.element,
                        start: "top-=1px top",
                        end: "bottom top",
                        id: "MARKER" + e.value,
                        onEnter: () => {
                            a(e.value)
                        },
                        onEnterBack: () => {
                            a(e.value)
                        }
                    }));
                    return () => {
                        null == e || e.forEach(e => {
                            e.kill()
                        })
                    }
                }, {
                    dependencies: [o],
                    revertOnUpdate: !0
                }), (0, c.useEffect)(() => {
                    let n = e.current;
                    n && (t.current && t.current.kill(), t.current = C.p8.to(n, {
                        delay: .5,
                        opacity: 0,
                        filter: "blur(1px)",
                        duration: .5,
                        onComplete: () => {
                            n.textContent = null != i ? i : "", C.p8.to(n, {
                                opacity: 1,
                                filter: "blur(0px)",
                                duration: .5
                            })
                        }
                    }))
                }, [i]), (0, r.jsx)("div", {
                    children: (0, r.jsx)("p", {
                        ref: e,
                        style: {
                            writingMode: "vertical-rl",
                            height: "10ch"
                        },
                        className: "whitespace-nowrap font-sans text-[16px] leading-[1.1] tracking-[-0.05em] rotate-180"
                    })
                })
            };
            var R = n(19807);
            let N = e => {
                    let [t, n] = (0, c.useState)(!1);
                    (0, i.LZ)(e => {
                        let r = e.dimensions.height,
                            l = e.scroll / r;
                        l > 1 && !t ? n(!0) : l <= 1 && t && n(!1)
                    }, [t]);
                    let l = _(e => e.toggle),
                        s = (0, c.useCallback)(() => {
                            let e = a.ZP.timeline({
                                paused: !1
                            });
                            e.to(".menu-toggle-rect", {
                                duration: .2,
                                stagger: .1,
                                "--tw-scale-x": 1.2,
                                ease: "power2.in"
                            }), e.to(".menu-toggle-rect", {
                                duration: .2,
                                stagger: .1,
                                "--tw-scale-x": 1,
                                ease: "power2.out"
                            }), e.play()
                        }, []);
                    return (0, r.jsxs)("div", {
                        className: (0, u.L)(o()["menu-icon"], "lg:bg-transparent overflow-hidden", "w-[calc(var(--header-height)*1)] justify-end transition-[width] duration-500 lg:aspect-square", t && "max-lg:w-[calc(var(--header-height)*4)]", e.className),
                        children: [(0, r.jsx)(w.r, {
                            "aria-disabled": !t,
                            unstyled: !0,
                            className: (0, u.L)("contents lg:hidden", !t && "pointer-events-none"),
                            href: "/cart",
                            children: (0, r.jsxs)(R.Z, {
                                className: "min-w-0 text-sm overflow-hidden absolute right-[calc(var(--header-height)*1)] h-[calc(100%-8px)] rounded-md w-[calc(var(--header-height)*3-4px)]",
                                variant: "unstyled",
                                "aria-label": "Pre order",
                                children: [(0, r.jsx)("span", {
                                    className: "absolute inset-0 bg-current opacity-20"
                                }), (0, r.jsx)("span", {
                                    className: "relative text-current",
                                    children: "Order now"
                                })]
                            })
                        }), (0, r.jsx)("button", {
                            "aria-label": "Toggle menu",
                            onMouseEnter: () => {
                                s()
                            },
                            ...e,
                            className: "absolute flex items-center justify-center aspect-square w-[calc(var(--header-height))] right-0",
                            onClick: l,
                            children: (0, r.jsxs)("svg", {
                                width: "25",
                                height: "25",
                                viewBox: "0 0 25 25",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                id: "menu-toggle-icon",
                                children: [(0, r.jsx)("rect", {
                                    className: "scale-x-100 menu-toggle-rect",
                                    y: "4",
                                    width: "21",
                                    height: "4",
                                    fill: "currentColor"
                                }), (0, r.jsx)("rect", {
                                    className: "scale-x-100 menu-toggle-rect",
                                    y: "11",
                                    width: "25",
                                    height: "4",
                                    fill: "currentColor"
                                }), (0, r.jsx)("rect", {
                                    className: "scale-x-100 menu-toggle-rect",
                                    y: "18",
                                    width: "17",
                                    height: "4",
                                    fill: "currentColor"
                                })]
                            })
                        })]
                    })
                },
                M = () => {
                    let e = (0, p.usePathname)(),
                        t = (0, v.f)(e => e.headerDarkMode),
                        n = (0, i.LZ)(g.lt);
                    return (0, c.useEffect)(() => {
                        v.f.setState({
                            headerDarkMode: !1
                        })
                    }, [e]), (0, r.jsxs)("div", {
                        className: (0, u.L)(o()["header-wrapper"], "max-lg:hero-container", t ? "text-white" : "text-[#17190F]"),
                        children: [(0, r.jsxs)("header", {
                            ref: e => {
                                e && v.f.setState({
                                    headerElement: e
                                })
                            },
                            className: (0, u.L)(o().header, "max-lg:hero-inner-tight", o()["header-menu-color-transition"]),
                            children: [(0, r.jsx)(w.r, {
                                "aria-label": "Home",
                                href: "/",
                                unstyled: !0,
                                onClick: () => {
                                    "/" === window.location.pathname && (null == n || n.scrollTo(0, {
                                        immediate: !0
                                    }))
                                },
                                children: (0, r.jsx)(s, {
                                    className: (0, u.L)(o().logo, t ? "bg-night/80" : "bg-moonlight/80", "lg:bg-transparent")
                                })
                            }), (0, r.jsxs)("div", {
                                className: (0, u.L)("hidden lg:block", "transition-opacity duration-300", {
                                    "opacity-0": "/cart" === e
                                }),
                                children: [(0, r.jsx)(S, {}), (0, r.jsx)(m, {})]
                            }), (0, r.jsx)(N, {
                                className: t ? "bg-night/80" : "bg-moonlight/80"
                            })]
                        }), (0, r.jsx)(P, {})]
                    })
                }
        },
        15530: (e, t, n) => {
            "use strict";
            n.d(t, {
                Leva: () => c
            });
            var r = n(37859),
                l = n(92560),
                o = n(83331),
                s = n(40645),
                i = n(18253);
            let a = e => {
                    let {
                        children: t,
                        id: n = "basement-portal",
                        onMount: l,
                        className: s
                    } = e, a = o.useRef(), [c, u] = o.useState(!1);
                    return o.useEffect(() => {
                        let e;
                        let t = document.getElementById(n);
                        t ? e = t : ((e = document.createElement("div")).id = n, document.body.appendChild(e)), e.className = null != s ? s : "", a.current = e, u(!0)
                    }, [s, n]), o.useEffect(() => {
                        c && l && l()
                    }, [c, l]), c && a.current ? (0, i.createPortal)(t, a.current) : (0, r.jsx)(r.Fragment, {})
                },
                c = () => {
                    let e = (0, s.f)(e => e.isDebug);
                    return (0, r.jsx)(o.Suspense, {
                        children: (0, r.jsx)(a, {
                            children: (0, r.jsx)(l.Zf, {
                                theme: {
                                    space: {
                                        xs: "0px",
                                        sm: "5px",
                                        md: "10px",
                                        colGap: "2px",
                                        rowGap: "2px"
                                    },
                                    sizes: {
                                        rootWidth: "350px"
                                    }
                                },
                                flat: !0,
                                collapsed: !0,
                                hidden: !e
                            })
                        })
                    })
                }
        },
        48247: (e, t, n) => {
            "use strict";
            n.d(t, {
                PreloadLinks: () => l
            });
            var r = n(18253);

            function l() {
                return r.preconnect("https://assets.vercel.com", {
                    crossOrigin: "anonymous"
                }), r.preconnect("https://image.mux.com", {
                    crossOrigin: "anonymous"
                }), null
            }
        },
        84251: (e, t, n) => {
            "use strict";
            n.d(t, {
                F: () => r
            });
            let r = (0, n(9479).Ue)(() => ({}))
        },
        47841: (e, t, n) => {
            "use strict";
            n.d(t, {
                p: () => a
            });
            var r = n(86130),
                l = n.n(r),
                o = n(83331),
                s = n(98623);
            let i = (0, n(33776).O)(),
                a = function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                    (0, o.useEffect)(() => (i.addCallback(e), () => {
                        i.removeCallback(e)
                    }), t), (0, s.Z)(() => {
                        l().bind("esc", () => {
                            i.getCallbacks().forEach(e => e())
                        })
                    })
                }
        },
        60112: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => a
            });
            var r = n(83331),
                l = n(51417),
                o = n.n(l);
            let s = ["x", "y", "top", "bottom", "left", "right", "width", "height"],
                i = (e, t) => s.every(n => e[n] === t[n]),
                a = function () {
                    var e;
                    let {
                        debounce: t,
                        scroll: n,
                        polyfill: l,
                        offsetSize: s,
                        offsetCoords: a,
                        onChange: c
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        debounce: 0,
                        scroll: !1,
                        offsetSize: !1,
                        offsetCoords: !1
                    }, u = l || window.ResizeObserver;
                    if (!u) throw Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");
                    let [d, f] = (0, r.useState)({
                        left: 0,
                        top: 0,
                        width: 0,
                        height: 0,
                        bottom: 0,
                        right: 0,
                        x: 0,
                        y: 0,
                        offsetLeft: 0,
                        offsetTop: 0,
                        hasMeasured: !1
                    }), h = (0, r.useRef)({
                        element: null,
                        scrollContainers: null,
                        resizeObserver: null,
                        lastBounds: d
                    }), m = t ? "number" == typeof t ? t : t.scroll : null, p = t ? "number" == typeof t ? t : t.resize : null, v = (0, r.useRef)(!1);
                    (0, r.useEffect)(() => (v.current = !0, () => void(v.current = !1)));
                    let [g, b, w] = (0, r.useMemo)(() => {
                        let e = () => {
                            if (!h.current.element) return;
                            let {
                                left: e,
                                top: t,
                                width: n,
                                height: r,
                                bottom: l,
                                right: o,
                                x: u,
                                y: d
                            } = h.current.element.getBoundingClientRect(), m = {
                                left: e,
                                top: t,
                                width: n,
                                height: r,
                                bottom: l,
                                right: o,
                                x: u,
                                y: d,
                                offsetLeft: 0,
                                offsetTop: 0,
                                hasMeasured: !0
                            };
                            h.current.element instanceof HTMLElement && s && (m.height = h.current.element.offsetHeight, m.width = h.current.element.offsetWidth), h.current.element instanceof HTMLElement && a && (m.offsetTop = h.current.element.offsetTop, m.offsetLeft = h.current.element.offsetLeft), Object.freeze(m), v.current && !i(h.current.lastBounds, m) && (f(h.current.lastBounds = m), null == c || c(m))
                        };
                        return [e, p ? o()(e, p) : e, m ? o()(e, m) : e]
                    }, [f, s, m, p]);

                    function y() {
                        h.current.scrollContainers && (h.current.scrollContainers.forEach(e => e.removeEventListener("scroll", w, !0)), h.current.scrollContainers = null), h.current.resizeObserver && (h.current.resizeObserver.disconnect(), h.current.resizeObserver = null)
                    }

                    function x() {
                        h.current.element && (h.current.resizeObserver = new u(w), h.current.resizeObserver.observe(h.current.element), n && h.current.scrollContainers && h.current.scrollContainers.forEach(e => e.addEventListener("scroll", w, {
                            capture: !0,
                            passive: !0
                        })))
                    }
                    return e = !!n, (0, r.useEffect)(() => {
                        if (e) return window.addEventListener("scroll", w, {
                            capture: !0,
                            passive: !0
                        }), () => void window.removeEventListener("scroll", w, !0)
                    }, [w, e]), (0, r.useEffect)(() => (window.addEventListener("resize", b), () => void window.removeEventListener("resize", b)), [b]), (0, r.useEffect)(() => {
                        y(), x()
                    }, [n, w, b]), (0, r.useEffect)(() => y, []), [e => {
                        e && e !== h.current.element && (y(), h.current.element = e, h.current.scrollContainers = function e(t) {
                            let n = [];
                            if (!t || t === document.body) return n;
                            let {
                                overflow: r,
                                overflowX: l,
                                overflowY: o
                            } = window.getComputedStyle(t);
                            return [r, l, o].some(e => "auto" === e || "scroll" === e) && n.push(t), [...n, ...e(t.parentElement)]
                        }(e), x())
                    }, d, g]
                }
        },
        84674: (e, t, n) => {
            "use strict";
            n.d(t, {
                B: () => c,
                Q: () => u
            });
            var r = n(83331),
                l = n(60112),
                o = n(23294),
                s = n(5087),
                i = n(9479),
                a = n(45876);
            let c = (0, i.Ue)(() => ({
                    runningSnapRef: {
                        current: !1
                    }
                })),
                u = function () {
                    let {
                        duration: e = 1,
                        offsetTop: t = 0,
                        offsetBottom: n = 0,
                        easing: i = a.mE,
                        enabled: u = !0,
                        markers: d = !1
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, f = c(e => e.runningSnapRef), h = (0, s.Z)(), [m, {
                        offsetTop: p,
                        height: v
                    }] = (0, l.Z)({
                        offsetCoords: !0
                    }), g = (0, r.useRef)(), b = (0, r.useCallback)(r => {
                        let l = p + t,
                            o = r.scroll - l,
                            s = p + v - h.height + n,
                            a = r.scroll - s,
                            c = r.direction;
                        if (!(o > 0 && a < 0) || !c) return;
                        let d = 1 === c ? s : l,
                            m = r.velocity,
                            g = Math.abs(r.scroll - d),
                            b = v - h.height - t + n;
                        4 > Math.abs(m) && !f.current && u && (f.current = !0, r.scrollTo(d, {
                            duration: g / b * e,
                            programmatic: !0,
                            easing: i,
                            onComplete: () => {
                                f.current = !1
                            }
                        }))
                    }, [p, v]);
                    g.current = b;
                    let w = (0, o.LZ)(e => {
                        var t;
                        null === (t = g.current) || void 0 === t || t.call(g, e)
                    });
                    return (0, r.useEffect)(() => {
                        var e;
                        if (null == w || null === (e = w.rootElement) || void 0 === e || e.addEventListener("wheel", () => {
                                f.current = !1
                            }), d) return (() => {
                            let e = "999999999",
                                r = "14px",
                                l = "20px",
                                o = document.createElement("div");
                            o.style.position = "absolute", o.style.color = "green", o.style.fontSize = r, o.style.whiteSpace = "nowrap", o.style.paddingBottom = "5px", o.style.paddingRight = l, o.style.borderTop = "1px solid ".concat("green"), o.style.top = "".concat(p + t, "px"), o.style.left = "auto", o.style.right = "0", o.style.zIndex = e, o.style.pointerEvents = "none", o.textContent = "snap-start", document.body.appendChild(o);
                            let s = document.createElement("div");
                            return s.style.position = "absolute", s.style.color = "red", s.style.fontSize = r, s.style.whiteSpace = "nowrap", s.style.paddingBottom = "5px", s.style.paddingRight = l, s.style.borderTop = "1px solid ".concat("red"), s.style.top = "".concat(p + v - h.height + n, "px"), s.style.left = "auto", s.style.right = "0", s.style.zIndex = e, s.style.pointerEvents = "none", s.textContent = "snap-end", document.body.appendChild(s), () => {
                                o.remove(), s.remove()
                            }
                        })()
                    }, [w]), m
                }
        },
        59710: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => c
            });
            var r = n(37859),
                l = n(83331),
                o = n(13574),
                s = n(40645),
                i = n(66824);
            let a = n.n(i)()(() => Promise.all([n.e(8785), n.e(9961)]).then(n.bind(n, 49961)).then(e => e.Visualizer), {
                loadableGenerated: {
                    webpack: () => [49961]
                },
                ssr: !1
            });

            function c() {
                let {
                    isDebug: e
                } = (0, s.f)(), [t, n] = (0, l.useState)(!1);
                return ((0, l.useEffect)(() => {
                    let e = window;
                    e.__scrollytelling_alreadyMountedDebuggerInstance || (n(!0), e.__scrollytelling_alreadyMountedDebuggerInstance = !0)
                }, []), t && e) ? (0, r.jsx)(o.h, {
                    "data-lenis-prevent": !0,
                    id: "visualizer-portal",
                    children: (0, r.jsx)(a, {})
                }) : (0, r.jsx)(r.Fragment, {})
            }
        },
        99810: () => {},
        92552: e => {
            e.exports = {
                "header-wrapper": "header_header-wrapper__3S3ls",
                header: "header_header__w2BOs",
                "scroll-indicator": "header_scroll-indicator__m98CM",
                "scroll-indicator-line": "header_scroll-indicator-line__jaFTV",
                "menu-icon": "header_menu-icon__qpdmJ",
                logo: "header_logo__9b1Md",
                "header-menu-color-transition": "header_header-menu-color-transition__1qECW"
            }
        },
        87485: e => {
            e.exports = {
                style: {
                    fontFamily: "'__abcRoomFont_38b1ae', '__abcRoomFont_Fallback_38b1ae'"
                },
                className: "__className_38b1ae",
                variable: "__variable_38b1ae"
            }
        },
        78656: e => {
            e.exports = {
                style: {
                    fontFamily: "'__abcRoomExtendedFont_412c3c', '__abcRoomExtendedFont_Fallback_412c3c'",
                    fontWeight: 400
                },
                className: "__className_412c3c",
                variable: "__variable_412c3c"
            }
        },
        43700: e => {
            e.exports = {
                style: {
                    fontFamily: "'__abcArizonaFlareFont_498f8e', '__abcArizonaFlareFont_Fallback_498f8e'"
                },
                className: "__className_498f8e",
                variable: "__variable_498f8e"
            }
        },
        84967: (e, t, n) => {
            "use strict";
            n.d(t, {
                Analytics: () => a
            });
            var r = n(83331),
                l = () => {
                    window.va || (window.va = function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        (window.vaq = window.vaq || []).push(t)
                    })
                };

            function o() {
                return "undefined" != typeof window
            }

            function s() {
                return "production"
            }

            function i() {
                return "development" === ((o() ? window.vam : s()) || "production")
            }

            function a(e) {
                return (0, r.useEffect)(() => {
                    ! function () {
                        var e;
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                            debug: !0
                        };
                        if (!o()) return;
                        (function () {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "auto";
                            if ("auto" === e) {
                                window.vam = s();
                                return
                            }
                            window.vam = e
                        })(t.mode), l(), t.beforeSend && (null == (e = window.va) || e.call(window, "beforeSend", t.beforeSend));
                        let n = t.scriptSrc || (i() ? "https://va.vercel-scripts.com/v1/script.debug.js" : "/_vercel/insights/script.js");
                        if (document.head.querySelector('script[src*="'.concat(n, '"]'))) return;
                        let r = document.createElement("script");
                        r.src = n, r.defer = !0, r.dataset.sdkn = "@vercel/analytics" + (t.framework ? "/".concat(t.framework) : ""), r.dataset.sdkv = "1.3.1", t.disableAutoTrack && (r.dataset.disableAutoTrack = "1"), t.endpoint && (r.dataset.endpoint = t.endpoint), t.dsn && (r.dataset.dsn = t.dsn), r.onerror = () => {
                            let e = i() ? "Please check if any ad blockers are enabled and try again." : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
                            console.log("[Vercel Web Analytics] Failed to load script from ".concat(n, ". ").concat(e))
                        }, i() && !1 === t.debug && (r.dataset.debug = "false"), document.head.appendChild(r)
                    }({
                        framework: e.framework || "react",
                        ...void 0 !== e.route && {
                            disableAutoTrack: !0
                        },
                        ...e
                    })
                }, []), (0, r.useEffect)(() => {
                    e.route && e.path && function (e) {
                        var t;
                        let {
                            route: n,
                            path: r
                        } = e;
                        null == (t = window.va) || t.call(window, "pageview", {
                            route: n,
                            path: r
                        })
                    }({
                        route: e.route,
                        path: e.path
                    })
                }, [e.route, e.path]), null
            }
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [8690, 2465, 9520, 6364, 5352, 4011, 659, 9424, 3963, 3294, 2560, 5275, 6792, 6130, 7190, 2725, 6185, 2644, 1744], () => t(55593)), _N_E = e.O()
    }
]);