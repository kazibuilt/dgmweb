(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3185], {
        36584: (e, t, n) => {
            Promise.resolve().then(n.bind(n, 3361)), Promise.resolve().then(n.bind(n, 72529)), Promise.resolve().then(n.bind(n, 1746)), Promise.resolve().then(n.bind(n, 62312)), Promise.resolve().then(n.t.bind(n, 95623, 23)), Promise.resolve().then(n.t.bind(n, 17141, 23)), Promise.resolve().then(n.t.bind(n, 32494, 23)), Promise.resolve().then(n.t.bind(n, 54757, 23)), Promise.resolve().then(n.bind(n, 29993)), Promise.resolve().then(n.bind(n, 84063)), Promise.resolve().then(n.bind(n, 98675)), Promise.resolve().then(n.bind(n, 83688)), Promise.resolve().then(n.bind(n, 88326)), Promise.resolve().then(n.bind(n, 83221)), Promise.resolve().then(n.bind(n, 22868)), Promise.resolve().then(n.bind(n, 14874)), Promise.resolve().then(n.bind(n, 12778)), Promise.resolve().then(n.t.bind(n, 58762, 23)), Promise.resolve().then(n.bind(n, 73852))
        },
        73134: e => {
            "use strict";
            e.exports = function e(t, n) {
                if (t === n) return !0;
                if (t && n && "object" == typeof t && "object" == typeof n) {
                    if (t.constructor !== n.constructor) return !1;
                    if (Array.isArray(t)) {
                        if ((r = t.length) != n.length) return !1;
                        for (l = r; 0 != l--;)
                            if (!e(t[l], n[l])) return !1;
                        return !0
                    }
                    if (t.constructor === RegExp) return t.source === n.source && t.flags === n.flags;
                    if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === n.valueOf();
                    if (t.toString !== Object.prototype.toString) return t.toString() === n.toString();
                    if ((r = (o = Object.keys(t)).length) !== Object.keys(n).length) return !1;
                    for (l = r; 0 != l--;)
                        if (!Object.prototype.hasOwnProperty.call(n, o[l])) return !1;
                    for (l = r; 0 != l--;) {
                        var r, l, o, a = o[l];
                        if (("_owner" !== a || !t.$$typeof) && !e(t[a], n[a])) return !1
                    }
                    return !0
                }
                return t != t && n != n
            }
        },
        31686: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function () {
                    return o
                }
            });
            let r = n(65471);
            n(69797), n(15791);
            let l = r._(n(23645));

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
        78154: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "BailoutToCSR", {
                enumerable: !0,
                get: function () {
                    return l
                }
            });
            let r = n(19354);

            function l(e) {
                let {
                    reason: t,
                    children: n
                } = e;
                if ("undefined" == typeof window) throw new r.BailoutToCSRError(t);
                return n
            }
        },
        23645: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function () {
                    return c
                }
            });
            let r = n(69797),
                l = n(15791),
                o = n(78154),
                a = n(93627);

            function i(e) {
                return {
                    default: e && "default" in e ? e.default : e
                }
            }
            let s = {
                    loader: () => Promise.resolve(i(() => null)),
                    loading: null,
                    ssr: !0
                },
                c = function (e) {
                    let t = {
                            ...s,
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
                            s = t.ssr ? (0, r.jsxs)(r.Fragment, {
                                children: ["undefined" == typeof window ? (0, r.jsx)(a.PreloadCss, {
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
                            children: s
                        })
                    }
                    return u.displayName = "LoadableComponent", u
                }
        },
        93627: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "PreloadCss", {
                enumerable: !0,
                get: function () {
                    return o
                }
            });
            let r = n(69797),
                l = n(89312);

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
        43180: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            var r = n(15791),
                l = n(40024),
                o = n(73134);
            let a = n.n(o)();
            var i = l.ae ? navigator : void 0;
            let s = i && "function" == typeof i.getBattery ? function () {
                var e = (0, r.useState)({
                        isSupported: !0,
                        fetched: !1
                    }),
                    t = e[0],
                    n = e[1];
                return (0, r.useEffect)(function () {
                    var e = !0,
                        r = null,
                        o = function () {
                            if (e && r) {
                                var l = {
                                    isSupported: !0,
                                    fetched: !0,
                                    level: r.level,
                                    charging: r.charging,
                                    dischargingTime: r.dischargingTime,
                                    chargingTime: r.chargingTime
                                };
                                a(t, l) || n(l)
                            }
                        };
                    return i.getBattery().then(function (t) {
                            e && (r = t, (0, l.on)(r, "chargingchange", o), (0, l.on)(r, "chargingtimechange", o), (0, l.on)(r, "dischargingtimechange", o), (0, l.on)(r, "levelchange", o), o())
                        }),
                        function () {
                            e = !1, r && ((0, l.S1)(r, "chargingchange", o), (0, l.S1)(r, "chargingtimechange", o), (0, l.S1)(r, "dischargingtimechange", o), (0, l.S1)(r, "levelchange", o))
                        }
                }, []), t
            } : function () {
                return {
                    isSupported: !1
                }
            }
        },
        38047: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l
            });
            var r = n(15791);
            let l = function (e) {
                (0, r.useEffect)(e, [])
            }
        },
        9897: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            var r = n(15791),
                l = n(38047);
            let o = function (e) {
                    var t = (0, r.useRef)(e);
                    t.current = e, (0, l.Z)(function () {
                        return function () {
                            return t.current()
                        }
                    })
                },
                a = function (e) {
                    var t = (0, r.useRef)(0),
                        n = (0, r.useState)(e),
                        l = n[0],
                        a = n[1],
                        i = (0, r.useCallback)(function (e) {
                            cancelAnimationFrame(t.current), t.current = requestAnimationFrame(function () {
                                a(e)
                            })
                        }, []);
                    return o(function () {
                        cancelAnimationFrame(t.current)
                    }), [l, i]
                };
            var i = n(40024);
            let s = function (e, t) {
                void 0 === e && (e = 1 / 0), void 0 === t && (t = 1 / 0);
                var n = a({
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
        29993: (e, t, n) => {
            "use strict";
            n.d(t, {
                AppHooks: () => f
            });
            var r = n(62405),
                l = n(71502),
                o = n(15791),
                a = n(64243),
                i = n(22648),
                s = n(24364),
                c = n(22948),
                u = n(29512),
                d = n(57248);
            let f = () => ((0, o.useEffect)(() => {
                    c.BB && c.C5 && console.log(c.oW)
                }, []), (0, i.iB)(), b(), w(), y(), v(), g(), p(), m(), h(), null),
                h = () => {
                    let [e] = (0, d.s)({
                        folder: "Helpers",
                        key: "debugBodyHeight",
                        label: "Log body height",
                        defaultValue: !1
                    });
                    (0, o.useEffect)(() => {
                        let t = new ResizeObserver(t => {
                            for (let n of t) n.target === document.body && (e && console.log("Body height changed: ".concat(document.body.clientHeight, "px")), r.i.refresh())
                        });
                        return t.observe(document.body), () => {
                            t.disconnect()
                        }
                    }, [e])
                },
                m = () => {
                    let e = (0, o.useRef)(),
                        t = (0, l.usePathname)();
                    void 0 === e.current && (e.current = t), (0, o.useEffect)(() => {
                        e.current && e.current !== t && a.q.setState({
                            hasNavigated: !0
                        })
                    }, [t])
                },
                p = () => {
                    let e = (0, i.i8)(),
                        t = (0, a.q)(e => e.highPriorityAnimationRunning);
                    (0, o.useEffect)(() => {
                        if (e && !t) return u.c.run(), u.c.startRunAllInstantly(), () => {
                            u.c.killRunAllInstantly()
                        }
                    }, [e, t])
                },
                g = () => {
                    let e = (0, s.G)("(prefers-reduced-motion: reduce)");
                    (0, o.useEffect)(() => {
                        void 0 !== e && a.q.setState({
                            reducedMotion: e
                        })
                    }, [e])
                },
                v = () => {
                    (0, o.useLayoutEffect)(() => {
                        window.scrollTo(0, 0)
                    }, [])
                },
                b = () => {
                    (0, o.useEffect)(() => {
                        let e;
                        if (c.r8) return Promise.resolve().then(n.t.bind(n, 69815, 23)).then(t => {
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
                w = () => {
                    (0, o.useEffect)(() => {
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
                y = () => {
                    (0, o.useEffect)(() => {
                        let e = window.setTimeout(() => {
                            t()
                        }, 1500);

                        function t() {
                            window.clearTimeout(e), a.q.setState({
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
        84063: (e, t, n) => {
            "use strict";
            n.d(t, {
                LoadPageCanvas: () => r
            });
            let r = (0, n(14798).Q)(() => Promise.all([n.e(6558), n.e(9521), n.e(1318)]).then(n.bind(n, 41318)))
        },
        57248: (e, t, n) => {
            "use strict";
            n.d(t, {
                s: () => i
            });
            var r = n(84241),
                l = n(15791),
                o = n(47920);
            let a = e => e.toUpperCase().replace("SHIFT+", "⬆"),
                i = e => {
                    let {
                        folder: t,
                        key: n,
                        label: i,
                        shortcut: s,
                        defaultValue: c,
                        onChange: u
                    } = e, d = "".concat("string" == typeof i ? i : n).concat("string" == typeof s ? " (".concat(a(s), ")") : ""), [f, h] = (0, r.M4)(() => {
                        let e = {
                            [n]: {
                                label: d,
                                folder: t,
                                value: "boolean" == typeof c && c,
                                onChange: e => {
                                    u && u(e)
                                },
                                transient: !1
                            }
                        };
                        return "string" == typeof t ? {
                            [t]: (0, r.so)(e)
                        } : e
                    });
                    s && (0, o.z)([{
                        keys: s,
                        callback: () => {
                            h({
                                [n]: !f[n]
                            })
                        }
                    }]);
                    let m = (0, l.useMemo)(() => e => {
                        h({
                            [n]: e
                        })
                    }, [n, h]);
                    return [f[n], m]
                }
        },
        83688: (e, t, n) => {
            "use strict";
            n.d(t, {
                Providers: () => p
            });
            var r = n(69797),
                l = n(99570),
                o = n(16762),
                a = n(41199),
                i = n(49291),
                s = n(62405),
                c = n(15791),
                u = n(70560),
                d = n(71502);
            i.ZP.registerPlugin(s.i), i.ZP.registerPlugin(u.V);
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
                }, []), (0, r.jsx)(a.ZP, {
                    root: !0,
                    ref: n,
                    autoRaf: !1,
                    options: {
                        lerp: .13
                    },
                    children: t
                })
            };
            var h = n(46270);
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
        88326: (e, t, n) => {
            "use strict";
            n.d(t, {
                DeviceDetector: () => o
            });
            var r = n(15791),
                l = n(37553);
            let o = (0, r.memo)(() => ((0, r.useEffect)(() => {
                let e = new AbortController,
                    t = e.signal;
                return n.e(9006).then(n.bind(n, 69006)).then(e => {
                    if (t.aborted) return;
                    let n = e.getSelectorsByUserAgent(navigator.userAgent);
                    l.Fy.setState({
                        ...n
                    })
                }), n.e(5099).then(n.bind(n, 5099)).then(e => {
                    let {
                        getGPUTier: n
                    } = e;
                    t.aborted || n().then(e => {
                        t.aborted || l.Fy.setState({
                            gpu: e
                        })
                    })
                }), () => {
                    e.abort()
                }
            }, []), null))
        },
        83221: (e, t, n) => {
            "use strict";
            n.d(t, {
                LoadHalftone: () => r
            });
            let r = (0, n(14798).Q)(() => n.e(1646).then(n.bind(n, 61646)))
        },
        22868: (e, t, n) => {
            "use strict";
            n.d(t, {
                Header: () => A
            });
            var r = n(69797),
                l = n(87208),
                o = n.n(l);
            let a = e => {
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
            var i = n(41199),
                s = n(49291),
                c = n(15791),
                u = n(82372),
                d = n(40577);
            let f = (0, d.Ue)(e => ({
                type: "auto",
                set: t => {
                    document.body.style.cursor = t, e({
                        type: t
                    })
                }
            }));
            n(98625);
            let h = (0, d.Ue)(() => ({
                    runningSnapRef: {
                        current: !1
                    }
                })),
                m = () => {
                    let e = f(),
                        t = (0, c.useRef)(null),
                        [n, l] = (0, c.useState)(!1),
                        [a, d] = (0, c.useState)(!1),
                        [m, p] = (0, c.useState)(null),
                        g = (0, c.useRef)(a);
                    g.current = a, (0, c.useEffect)(() => {
                        if (a) {
                            e.set("grabbing");
                            return
                        }
                        n ? e.set("grab") : e.set("auto")
                    }, [n, a]);
                    let v = (0, i.LZ)(e => {
                        var n;
                        let r = 16 * e.progress;
                        null === (n = t.current) || void 0 === n || n.childNodes.forEach((e, t) => {
                            let n = Math.sin(s.ZP.utils.clamp(-Math.PI / 2, Math.PI / 2, r - t) + Math.PI / 2);
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
                            a = e => {
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
                                t && (l.y = (null == v ? void 0 : v.scroll) || 0, r.x = t.x, r.y = t.y)
                            },
                            i = e => {
                                let t;
                                if (!g.current) return;
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
                                h.getState().runningSnapRef.current = !1, null == v || v.scrollTo(l.y + n)
                            },
                            s = () => {
                                d(!1)
                            };
                        return null == o || o.addEventListener("mousedown", a), null === (e = window) || void 0 === e || e.addEventListener("mousemove", i), null === (n = window) || void 0 === n || n.addEventListener("mouseup", s), () => {
                            var e, t;
                            null == o || o.removeEventListener("mousedown", a), null === (e = window) || void 0 === e || e.removeEventListener("mousemove", i), null === (t = window) || void 0 === t || t.removeEventListener("mouseup", s)
                        }
                    }, [v]), (0, r.jsx)("div", {
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
            var p = n(71502),
                g = n(2643),
                v = n(22948);
            let b = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = (0, i.LZ)(v.lt);
                (0, c.useEffect)(() => {
                    if (t && e) return t.stop(), document.documentElement.classList.add("no-scroll"), () => {
                        t.start(), document.documentElement.classList.remove("no-scroll")
                    }
                }, [e, t])
            };
            var w = n(76215),
                y = n(64243),
                x = n(65792),
                _ = n(50080);
            let j = (0, d.Ue)(e => ({
                    isOpen: !1,
                    toggle: () => e(e => ({
                        isOpen: !e.isOpen
                    })),
                    setMenu: t => e({
                        isOpen: t
                    })
                })),
                P = [{
                    title: "Home",
                    href: "/"
                }, {
                    title: "Product",
                    href: "/product"
                }, {
                    title: "Support",
                    href: "https://support.daylightcomputer.com/?_gl=1*ptkduu*_ga*MTM4OTkzMTE3MC4xNzE2MzgzOTg4*_ga_V556R2N7QX*MTcxNzYxOTczOC4xOC4xLjE3MTc2MjExNzIuMC4wLjA.",
                    target: "_blank"
                }],
                E = () => {
                    let e = j(e => e.isOpen),
                        t = j(e => e.setMenu),
                        n = (0, c.useRef)(null),
                        l = (0, c.useRef)(null),
                        a = (0, c.useRef)(null),
                        i = (0, p.usePathname)();
                    b(e), (0, c.useLayoutEffect)(() => {
                        var e;
                        let t = n.current;
                        t && (s.ZP.set("#menu-container", {
                            xPercent: -10,
                            autoAlpha: 0
                        }), s.ZP.set(l.current, {
                            autoAlpha: 0
                        }), t.style.setProperty("display", "block"), null === (e = l.current) || void 0 === e || e.style.setProperty("display", "block"))
                    }, []), (0, c.useEffect)(() => {
                        t(!1)
                    }, [i, t]), (0, c.useEffect)(() => {
                        n.current && (a.current && a.current.kill(), a.current = s.ZP.to("#menu-container", {
                            xPercent: e ? 0 : -10,
                            autoAlpha: e ? 1 : 0,
                            duration: .4,
                            ease: "power3.out",
                            onStart: () => {
                                s.ZP.to(l.current, {
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
                    let d = (0, g.f)(e => e.headerDarkMode);
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
                                            children: P.map((e, t) => (0, r.jsx)("li", {
                                                className: "flex title-md lg:title-sm",
                                                children: (0, r.jsxs)(w.r, {
                                                    target: e.target,
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
                                        children: (0, r.jsx)(_.k, {
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
            var k = n(1278),
                S = n(9897),
                C = n(62405);
            let N = () => {
                let e = (0, c.useRef)(null),
                    t = (0, c.useRef)(null),
                    {
                        width: n,
                        height: l
                    } = (0, S.Z)(),
                    [o, a] = (0, c.useState)(null),
                    [i, s] = (0, c.useState)(null),
                    u = (0, p.usePathname)(),
                    d = (0, c.useCallback)(() => {
                        if (!n || n < v.vl.raw.lg) return;
                        let e = document.querySelectorAll("[data-index-title]");
                        e.length || (a([]), s(null));
                        let t = [];
                        e.forEach(e => {
                            let n = e.getAttribute("data-index-title");
                            null != n && t.push({
                                element: e,
                                value: n
                            })
                        }), a(t)
                    }, [n, l, u]);
                return (0, c.useLayoutEffect)(() => {
                    d()
                }, [u]), (0, k.ui)(() => {
                    let e = null == o ? void 0 : o.map(e => C.i.create({
                        trigger: e.element,
                        start: "top-=1px top",
                        end: "bottom top",
                        id: "MARKER" + e.value,
                        onEnter: () => {
                            s(e.value)
                        },
                        onEnterBack: () => {
                            s(e.value)
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
                    n && (t.current && t.current.kill(), t.current = k.p8.to(n, {
                        delay: .5,
                        opacity: 0,
                        filter: "blur(1px)",
                        duration: .5,
                        onComplete: () => {
                            n.textContent = null != i ? i : "", k.p8.to(n, {
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
            var L = n(27601),
                M = n(12795);
            let O = function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                        n = (0, c.useMemo)(() => {
                            if (v.C5) return e()
                        }, t);
                    return (0, c.useEffect)(() => () => {
                        null == n || n.kill()
                    }, [n]), n
                },
                R = e => {
                    let [t, n] = (0, c.useState)(!1), [l, a] = (0, c.useState)(!1), [d, f] = (0, c.useState)(!1), h = j(e => e.toggle), m = j(e => e.isOpen);
                    (0, i.LZ)(e => {
                        let t = e.dimensions.height,
                            n = e.scroll / t;
                        n > 1 && !l ? a(!0) : n < 1 && l && a(!1)
                    }, [l]);
                    let p = O(() => {
                            let e = s.ZP.timeline({
                                paused: !0,
                                repeatRefresh: !0
                            });
                            return e.to(".menu-open-rect", {
                                duration: .3,
                                stagger: -.06,
                                scaleX: 1.2,
                                ease: "power2.inOut"
                            }), e.to(".menu-open-rect", {
                                duration: .3,
                                stagger: -.06,
                                scaleX: 1,
                                ease: "power2.inOut"
                            }), (0, M.f)(e, {
                                label: "hoverAnimation"
                            }), e
                        }),
                        g = O(() => {
                            let e = s.ZP.timeline({
                                paused: !0,
                                repeatRefresh: !0
                            });
                            return e.to(".menu-open-rect", {
                                duration: .4,
                                opacity: 0,
                                stagger: -.075,
                                ease: "power2.in"
                            }), e.to(".menu-open-rect", {
                                duration: .4,
                                scaleX: .4,
                                stagger: -.075,
                                ease: "power2.in"
                            }, "<"), e.to(".menu-close-rect", {
                                duration: .2,
                                opacity: 1,
                                stagger: -.075,
                                ease: "power2.out"
                            }, ">-=50%"), e.to(".menu-close-rect", {
                                duration: .6,
                                scaleX: 1,
                                stagger: -.12,
                                ease: "power3.inOut"
                            }, "<"), (0, M.f)(e, {
                                label: "morphToOpen"
                            }), e
                        }),
                        v = O(() => {
                            let e = s.ZP.timeline({
                                paused: !0,
                                repeatRefresh: !0
                            });
                            return e.to(".menu-close-rect", {
                                duration: .6,
                                scaleX: 0,
                                stagger: -.12,
                                ease: "power3.out"
                            }), e.to(".menu-close-rect", {
                                duration: .2,
                                opacity: 0,
                                stagger: -.075,
                                ease: "power2.out"
                            }, "<+=50%"), e.to(".menu-open-rect", {
                                duration: .4,
                                opacity: 1,
                                stagger: -.075,
                                ease: "power2.out"
                            }, "<+=50%"), e.to(".menu-open-rect", {
                                duration: .4,
                                scaleX: 1,
                                stagger: -.075,
                                ease: "power2.out"
                            }, "<"), (0, M.f)(e, {
                                label: "morphToClose"
                            }), e
                        });
                    return (0, c.useEffect)(() => {
                        n(!m), m ? (null == v || v.pause(), null == p || p.pause(), null == g || g.invalidate(), null == g || g.restart()) : m || (null == g || g.pause(), null == p || p.pause(), null == v || v.invalidate(), null == v || v.restart())
                    }, [m, g, v]), (0, c.useEffect)(() => {
                        !d || (null == p ? void 0 : p.isActive()) || (null == g ? void 0 : g.isActive()) || (null == v ? void 0 : v.isActive()) || (null == p || p.invalidate(), null == p || p.restart())
                    }, [d, p, g, v]), (0, r.jsxs)("div", {
                        className: (0, u.L)(o()["menu-icon"], "lg:bg-transparent overflow-hidden", e.className),
                        children: [(0, r.jsx)(w.r, {
                            "aria-disabled": !t,
                            unstyled: !0,
                            className: (0, u.L)("lg:hidden h-auto will-change-[width] transition-[width]", !t && "pointer-events-none w-0", t && "max-lg:!w-[calc(var(--header-height)*3+8px)]"),
                            href: "/cart",
                            children: (0, r.jsxs)(L.Z, {
                                className: "min-w-0 text-sm overflow-hidden absolute right-[calc(var(--header-height)+4px)] h-[calc(100%-8px)] rounded-md w-[calc(var(--header-height)*3)]",
                                variant: "unstyled",
                                "aria-label": "Pre order",
                                children: [(0, r.jsx)("span", {
                                    className: (0, u.L)("absolute inset-0 bg-amber transition-colors duration-700", l ? "bg-amber" : "bg-night/20")
                                }), (0, r.jsx)("span", {
                                    className: "relative text-night",
                                    children: "Order now"
                                })]
                            })
                        }), (0, r.jsxs)("button", {
                            "aria-label": "Toggle menu",
                            onMouseEnter: () => {
                                f(!0)
                            },
                            onMouseLeave: () => {
                                f(!1)
                            },
                            ...e,
                            className: "relative right-0 block shrink-0 size-7",
                            onClick: h,
                            children: [(0, r.jsxs)("svg", {
                                className: "w-6 absolute-centered",
                                viewBox: "0 0 24 24",
                                id: "menu-open-icon",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [(0, r.jsx)("rect", {
                                    className: "menu-open-rect",
                                    y: "17",
                                    width: "16",
                                    height: "4",
                                    fill: "currentColor"
                                }), (0, r.jsx)("rect", {
                                    className: "menu-open-rect",
                                    y: "10",
                                    width: "24",
                                    height: "4",
                                    fill: "currentColor"
                                }), (0, r.jsx)("rect", {
                                    className: "menu-open-rect",
                                    y: "3",
                                    width: "20",
                                    height: "4",
                                    fill: "currentColor"
                                })]
                            }), (0, r.jsxs)("svg", {
                                id: "menu-close-icon",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "w-6 absolute-centered",
                                children: [(0, r.jsx)("rect", {
                                    x: "5.41602",
                                    y: "2.58838",
                                    width: "22.6119",
                                    height: "4",
                                    transform: "rotate(45 5.41602 2.58838)",
                                    className: "opacity-0 menu-close-rect",
                                    fill: "currentColor"
                                }), (0, r.jsx)("rect", {
                                    x: "2.58594",
                                    y: "18.5791",
                                    width: "22.6143",
                                    height: "4",
                                    transform: "rotate(-45 2.58594 18.5791)",
                                    className: "opacity-0 menu-close-rect",
                                    fill: "currentColor"
                                })]
                            })]
                        })]
                    })
                },
                A = () => {
                    let e = (0, p.usePathname)(),
                        t = (0, g.f)(e => e.headerDarkMode),
                        n = (0, i.LZ)(v.lt);
                    return (0, c.useEffect)(() => {
                        g.f.setState({
                            headerDarkMode: !1
                        })
                    }, [e]), (0, r.jsxs)("div", {
                        className: (0, u.L)(o()["header-wrapper"], "max-lg:hero-container", t ? "text-white" : "text-[#17190F]"),
                        children: [(0, r.jsxs)("header", {
                            ref: e => {
                                e && g.f.setState({
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
                                children: (0, r.jsx)(a, {
                                    className: (0, u.L)(o().logo, t ? "bg-night/80" : "bg-moonlight/80", "lg:bg-transparent")
                                })
                            }), (0, r.jsxs)("div", {
                                className: (0, u.L)("hidden lg:block", "transition-opacity duration-300", {
                                    "opacity-0": "/cart" === e
                                }),
                                children: [(0, r.jsx)(N, {}), (0, r.jsx)(m, {})]
                            }), (0, r.jsx)(R, {
                                className: t ? "bg-night/80" : "bg-moonlight/80"
                            })]
                        }), (0, r.jsx)(E, {})]
                    })
                }
        },
        14874: (e, t, n) => {
            "use strict";
            n.d(t, {
                Leva: () => c
            });
            var r = n(69797),
                l = n(84241),
                o = n(15791),
                a = n(2643),
                i = n(73161);
            let s = e => {
                    let {
                        children: t,
                        id: n = "basement-portal",
                        onMount: l,
                        className: a
                    } = e, s = o.useRef(), [c, u] = o.useState(!1);
                    return o.useEffect(() => {
                        let e;
                        let t = document.getElementById(n);
                        t ? e = t : ((e = document.createElement("div")).id = n, document.body.appendChild(e)), e.className = null != a ? a : "", s.current = e, u(!0)
                    }, [a, n]), o.useEffect(() => {
                        c && l && l()
                    }, [c, l]), c && s.current ? (0, i.createPortal)(t, s.current) : (0, r.jsx)(r.Fragment, {})
                },
                c = () => {
                    let e = (0, a.f)(e => e.isDebug);
                    return (0, r.jsx)(o.Suspense, {
                        children: (0, r.jsx)(s, {
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
        12778: (e, t, n) => {
            "use strict";
            n.d(t, {
                PreloadLinks: () => l
            });
            var r = n(73161);

            function l() {
                return r.preconnect("https://assets.vercel.com", {
                    crossOrigin: "anonymous"
                }), r.preconnect("https://image.mux.com", {
                    crossOrigin: "anonymous"
                }), null
            }
        },
        37553: (e, t, n) => {
            "use strict";
            n.d(t, {
                B$: () => i,
                Fy: () => a,
                qo: () => s
            });
            var r = n(40577),
                l = n(15791),
                o = n(43180);
            let a = (0, r.Ue)(() => ({})),
                i = () => {
                    let e = a(e => {
                            var t;
                            return null === (t = e.gpu) || void 0 === t ? void 0 : t.tier
                        }),
                        t = a(e => e.isMobile || e.isTablet),
                        n = s();
                    return (0, l.useMemo)(() => !t && (void 0 === e || e > 1 && !n), [e, , t])
                },
                s = () => {
                    let e = (0, o.Z)();
                    return (0, l.useMemo)(() => !!e.isSupported && !!e.fetched && (e.level < .1 || !e.charging && e.level < .3), [e])
                }
        },
        65792: (e, t, n) => {
            "use strict";
            n.d(t, {
                p: () => s
            });
            var r = n(69815),
                l = n.n(r),
                o = n(15791),
                a = n(38047);
            let i = (0, n(21434).O)(),
                s = function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                    (0, o.useEffect)(() => (i.addCallback(e), () => {
                        i.removeCallback(e)
                    }), t), (0, a.Z)(() => {
                        l().bind("esc", () => {
                            i.getCallbacks().forEach(e => e())
                        })
                    })
                }
        },
        47920: (e, t, n) => {
            "use strict";
            n.d(t, {
                z: () => a
            });
            var r = n(69815),
                l = n.n(r),
                o = n(15791);
            let a = function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                o.useEffect(() => {
                    if (t) return e.forEach(e => {
                        let {
                            keys: t,
                            callback: n,
                            action: r
                        } = e;
                        return l().bind(t, n, r)
                    }), () => {
                        e.forEach(e => {
                            let {
                                keys: t
                            } = e;
                            return l().unbind(t)
                        })
                    }
                }, [e, t])
            }
        },
        73852: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => c
            });
            var r = n(69797),
                l = n(15791),
                o = n(97068),
                a = n(2643),
                i = n(31686);
            let s = n.n(i)()(() => Promise.all([n.e(3375), n.e(1353)]).then(n.bind(n, 31353)).then(e => e.Visualizer), {
                loadableGenerated: {
                    webpack: () => [31353]
                },
                ssr: !1
            });

            function c() {
                let {
                    isDebug: e
                } = (0, a.f)(), [t, n] = (0, l.useState)(!1);
                return ((0, l.useEffect)(() => {
                    let e = window;
                    e.__scrollytelling_alreadyMountedDebuggerInstance || (n(!0), e.__scrollytelling_alreadyMountedDebuggerInstance = !0)
                }, []), t && e) ? (0, r.jsx)(o.h, {
                    "data-lenis-prevent": !0,
                    id: "visualizer-portal",
                    children: (0, r.jsx)(s, {})
                }) : (0, r.jsx)(r.Fragment, {})
            }
        },
        58762: () => {},
        87208: e => {
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
        17141: e => {
            e.exports = {
                style: {
                    fontFamily: "'__abcRoomFont_38b1ae', '__abcRoomFont_Fallback_38b1ae'"
                },
                className: "__className_38b1ae",
                variable: "__variable_38b1ae"
            }
        },
        32494: e => {
            e.exports = {
                style: {
                    fontFamily: "'__abcRoomExtendedFont_412c3c', '__abcRoomExtendedFont_Fallback_412c3c'",
                    fontWeight: 400
                },
                className: "__className_412c3c",
                variable: "__variable_412c3c"
            }
        },
        54757: e => {
            e.exports = {
                style: {
                    fontFamily: "'__abcArizonaFlareFont_498f8e', '__abcArizonaFlareFont_Fallback_498f8e'"
                },
                className: "__className_498f8e",
                variable: "__variable_498f8e"
            }
        },
        62312: (e, t, n) => {
            "use strict";
            n.d(t, {
                Analytics: () => s
            });
            var r = n(15791),
                l = () => {
                    window.va || (window.va = function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        (window.vaq = window.vaq || []).push(t)
                    })
                };

            function o() {
                return "undefined" != typeof window
            }

            function a() {
                return "production"
            }

            function i() {
                return "development" === ((o() ? window.vam : a()) || "production")
            }

            function s(e) {
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
                                window.vam = a();
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
        e.O(0, [9993, 4729, 1077, 6364, 7106, 9798, 2972, 6146, 1199, 5833, 150, 9815, 5691, 6603, 6713, 3028, 1744], () => t(36584)), _N_E = e.O()
    }
]);