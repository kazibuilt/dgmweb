(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [931], {
        4449: function (e, t, i) {
            Promise.resolve().then(i.bind(i, 5917))
        },
        5917: function (e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function () {
                    return tJ
                }
            });
            var s, n, r, a, l = i(7437),
                o = i(2265),
                c = i(5481),
                d = i.n(c),
                h = i(4988),
                m = i.n(h);
            (s = r || (r = {})).sm = "sm", s.md = "md", s.lg = "lg", s.xl = "xl", s["2xl"] = "2xl", s.default = "default";
            let x = m().withOptions(e => t => {
                    let {
                        addComponents: i
                    } = t;
                    Object.entries(e).forEach(e => {
                        let [t, s] = e;
                        Object.entries(s).forEach(e => {
                            let [s, n] = e;
                            i("default" === t ? function (e, t) {
                                let i = {};
                                return i[".".concat(e)] = t, i
                            }("font-".concat(s), n) : function (e, t, i) {
                                let s = "@media screen(".concat(e, ")"),
                                    n = {};
                                return n[s] = {}, n[s][".".concat(t)] = i, n
                            }(t, "font-".concat(s), n))
                        })
                    })
                }),
                u = {
                    content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
                    theme: {
                        screens: {
                            sm: "640px",
                            md: "768px",
                            lg: "1024px",
                            xl: "1280px",
                            "2xl": "1536px",
                            "3xl": "2400px"
                        },
                        extend: {
                            backgroundImage: {
                                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
                            },
                            colors: {
                                vermilion: {
                                    900: "#FC5F2B",
                                    700: "#F7861E",
                                    500: "#FDBA74",
                                    300: "#FED7AA",
                                    100: "#FFEDD5"
                                }
                            },
                            backgroundColor: {
                                blur: "rgba(255,255,255,.05)",
                                vermilion: {
                                    900: "#FC5F2B",
                                    700: "#F7861E",
                                    500: "#FDBA74",
                                    300: "#FED7AA",
                                    100: "#FFEDD5"
                                }
                            },
                            fontFamily: {
                                sans: ["var(--font-nb-international)", "ui-sans-serif", "system-ui"],
                                mono: ["var(--font-nb-international-mono)", "ui-monospace", "SFMono-Regular"]
                            },
                            keyframes: {
                                "accordion-down": {
                                    from: {
                                        height: "0"
                                    },
                                    to: {
                                        height: "var(--radix-accordion-content-height)"
                                    }
                                },
                                "accordion-up": {
                                    from: {
                                        height: "var(--radix-accordion-content-height)"
                                    },
                                    to: {
                                        height: "0"
                                    }
                                }
                            },
                            animation: {
                                "accordion-down": "accordion-down 0.2s ease-out",
                                "accordion-up": "accordion-up 0.2s ease-out"
                            },
                            borderRadius: {
                                "ipad-inner": "2.5vw",
                                "ipad-inner-md": "3.3vh",
                                "ipad-outer": "2.6vw",
                                "ipad-outer-md": "3.4vh"
                            }
                        }
                    },
                    plugins: [i(7229), x({
                        default: {
                            "mono-xs": {
                                "font-family": "var(--font-nb-international-mono)",
                                "font-size": ".75rem",
                                "letter-spacing": "-0.03rem",
                                "line-height": "130%",
                                "text-transform": "uppercase"
                            },
                            "mono-sm": {
                                "font-family": "var(--font-nb-international-mono)",
                                "font-size": ".875rem",
                                "letter-spacing": "-0.035rem",
                                "line-height": "130%",
                                "text-transform": "uppercase"
                            },
                            "mono-md": {
                                "font-family": "var(--font-nb-international-mono)",
                                "font-size": "1rem",
                                "letter-spacing": "-0.035rem",
                                "line-height": "130%",
                                "text-transform": "uppercase"
                            },
                            "mono-xl": {
                                "font-family": "var(--font-nb-international-mono)",
                                "font-size": "1rem",
                                "letter-spacing": "-0.01rem",
                                "line-height": "130%",
                                "text-transform": "uppercase"
                            },
                            "sans-xs": {
                                "font-size": ".75rem",
                                "letter-spacing": "0rem",
                                "line-height": "150%"
                            },
                            "sans-sm": {
                                "font-size": ".875rem",
                                "letter-spacing": "0rem",
                                "line-height": "150%"
                            },
                            "sans-md": {
                                "font-size": "1rem",
                                "letter-spacing": "0rem",
                                "line-height": "150%"
                            },
                            "sans-lg": {
                                "font-size": "1rem",
                                "letter-spacing": "0rem",
                                "line-height": "150%"
                            },
                            "sans-xl": {
                                "font-size": "1.25rem",
                                "letter-spacing": "-0.025rem",
                                "line-height": "-0.025rem"
                            },
                            "sans-2xl": {
                                "font-size": "1.25rem",
                                "letter-spacing": "-0.0125rem",
                                "line-height": "1.25em"
                            },
                            "sans-3xl": {
                                "font-size": "2rem",
                                "letter-spacing": "-0.03em",
                                "line-height": "1.25em"
                            },
                            "sans-4xl": {
                                "font-size": "2rem",
                                "letter-spacing": "-0.03em",
                                "line-height": "1.25em"
                            }
                        },
                        lg: {
                            "mono-xs": {
                                "letter-spacing": "-0.03rem"
                            },
                            "mono-sm": {
                                "letter-spacing": "-0.035rem"
                            },
                            "mono-md": {
                                "font-size": "1.25rem"
                            },
                            "mono-xl": {
                                "font-size": "2.75rem"
                            },
                            "sans-xs": {
                                "font-size": ".75rem",
                                "letter-spacing": "0rem",
                                "line-height": "110%"
                            },
                            "sans-sm": {
                                "font-size": "1rem",
                                "letter-spacing": "-0.02em",
                                "line-height": "110%"
                            },
                            "sans-md": {
                                "font-size": "1.125rem",
                                "letter-spacing": "-0.01125rem",
                                "line-height": "110%"
                            },
                            "sans-lg": {
                                "font-size": "1.25rem",
                                "letter-spacing": "-0.025rem",
                                "line-height": "-0.025rem"
                            },
                            "sans-xl": {
                                "font-size": "1.5rem",
                                "letter-spacing": "-0.015rem",
                                "line-height": "2rem"
                            },
                            "sans-2xl": {
                                "font-size": "4rem",
                                "letter-spacing": "-0.12rem",
                                "line-height": "90%"
                            },
                            "sans-3xl": {
                                "font-size": "5.125rem",
                                "letter-spacing": "-0.1025rem",
                                "line-height": "90%"
                            },
                            "sans-4xl": {
                                "font-size": "6rem",
                                "letter-spacing": "85%",
                                "line-height": "103%"
                            }
                        }
                    })]
                };
            var p = i(7118);
            let f = d()(u);

            function g(e) {
                let t = (0, p.$)(),
                    [i, s] = (0, o.useState)(!1);
                return (0, o.useEffect)(() => {
                    s(t.width > e)
                }, [t.width, e]), i
            }
            let v = {
                sm: parseInt(f.theme.screens.sm),
                md: parseInt(f.theme.screens.md),
                lg: parseInt(f.theme.screens.lg),
                xl: parseInt(f.theme.screens.xl),
                "2xl": parseInt(f.theme.screens["2xl"])
            };
            var w = () => {
                g(parseInt(f.theme.screens.sm));
                let e = e => {
                    let {
                        children: t,
                        href: i
                    } = e;
                    return (0, l.jsxs)("span", {
                        className: "flex items-baseline gap-1.5",
                        children: [(0, l.jsx)(j, {
                            className: "inline-block fill-none"
                        }), (0, l.jsxs)("a", {
                            className: "inline-block text-black hover:text-[#FE8000]",
                            style: {
                                transition: "0.3s ease-in-out"
                            },
                            target: "_blank",
                            rel: "noreferrer",
                            href: i,
                            children: [t, " "]
                        })]
                    })
                };
                return (0, l.jsx)(l.Fragment, {
                    children: (0, l.jsx)("section", {
                        className: "mx-4 flex flex-col gap-20 pb-8 lg:mx-14 lg:gap-10 lg:pb-12",
                        style: {
                            textRendering: "geometricPrecision"
                        },
                        children: (0, l.jsxs)("div", {
                            className: "relative",
                            children: [(0, l.jsxs)("div", {
                                className: "flex flex-col-reverse lg:flex-col",
                                children: [(0, l.jsx)("div", {
                                    className: "relative flex w-full flex-col gap-6 self-center object-center",
                                    children: (0, l.jsx)("video", {
                                        src: "footer-section/bg-vid.webm",
                                        className: "h-[16vw] w-full bg-cover object-cover lg:h-[14vw]",
                                        style: {
                                            maskRepeat: "no-repeat",
                                            maskImage: "url(../footer-section/logo.svg)",
                                            maskOrigin: "left",
                                            maskSize: "100%",
                                            maskPosition: "top left"
                                        },
                                        autoPlay: !0,
                                        muted: !0,
                                        loop: !0,
                                        playsInline: !0
                                    })
                                }), (0, l.jsxs)("div", {
                                    className: "flex-row-reverse items-end justify-between lg:flex",
                                    children: [(0, l.jsxs)("nav", {
                                        className: "hidden grid-cols-2 gap-4 pb-10 sm:w-[500px] sm:grid-cols-3 lg:grid lg:pb-0",
                                        children: [(0, l.jsx)(e, {
                                            href: "https://twitter.com/superpower",
                                            children: "Twitter"
                                        }), (0, l.jsx)(e, {
                                            href: "https://www.instagram.com/superpower.health",
                                            children: "Instagram"
                                        }), (0, l.jsx)(e, {
                                            href: "https://www.linkedin.com/company/superpower-health",
                                            children: "LinkedIn"
                                        }), (0, l.jsx)(e, {
                                            href: "https://superpowerhealth.notion.site/Build-Superpower-with-us-484d862f400a4bcd95c5e15c406e720f?pvs=4",
                                            children: "Join the Team"
                                        }), (0, l.jsx)(e, {
                                            href: "/manifesto",
                                            children: "Manifesto"
                                        }), (0, l.jsx)(e, {
                                            href: "https://app.superpower.com/signin",
                                            children: "Log in"
                                        }), (0, l.jsx)(e, {
                                            href: "/medical-group-of-informed-consent",
                                            children: "Clinical Policy"
                                        }), (0, l.jsx)(e, {
                                            href: "/terms",
                                            children: "Terms of Service"
                                        }), (0, l.jsx)(e, {
                                            href: "/privacy",
                                            children: "Privacy Policy"
                                        })]
                                    }), (0, l.jsxs)("nav", {
                                        className: "grid grid-cols-2 gap-4 pb-10 sm:w-[500px] sm:grid-cols-3 lg:hidden lg:pb-0",
                                        children: [(0, l.jsx)(e, {
                                            href: "https://twitter.com/superpower",
                                            children: "Twitter"
                                        }), (0, l.jsx)(e, {
                                            href: "https://superpowerhealth.notion.site/Build-Superpower-with-us-484d862f400a4bcd95c5e15c406e720f?pvs=4",
                                            children: "Join the Team"
                                        }), (0, l.jsx)(e, {
                                            href: "/medical-group-of-informed-consent",
                                            children: "Clinical Policy"
                                        }), (0, l.jsx)(e, {
                                            href: "https://www.instagram.com/superpower.health",
                                            children: "Instagram"
                                        }), (0, l.jsx)(e, {
                                            href: "/manifesto",
                                            children: "Manifesto"
                                        }), (0, l.jsx)(e, {
                                            href: "/terms",
                                            children: "Terms of Service"
                                        }), (0, l.jsx)(e, {
                                            href: "https://www.linkedin.com/company/superpower-health",
                                            children: "LinkedIn"
                                        }), (0, l.jsx)(e, {
                                            href: "https://app.superpower.com/signin",
                                            children: "Log in"
                                        }), (0, l.jsx)(e, {
                                            href: "/privacy",
                                            children: "Privacy Policy"
                                        })]
                                    }), (0, l.jsx)("div", {
                                        className: "hidden lg:block",
                                        children: (0, l.jsxs)("small", {
                                            className: "font-mono-xs leading-4",
                                            children: ["2024 Superpower Health, Inc.", (0, l.jsx)("br", {}), "All Rights Reserved"]
                                        })
                                    })]
                                })]
                            }), (0, l.jsx)("div", {
                                children: (0, l.jsxs)("small", {
                                    className: "font-mono-xs block leading-4 lg:hidden",
                                    children: ["2024 Superpower Health, Inc.", (0, l.jsx)("br", {}), "All Rights Reserved"]
                                })
                            })]
                        })
                    })
                })
            };
            let j = e => (0, l.jsx)("svg", {
                className: e,
                fill: "none",
                height: "10",
                width: "10",
                viewBox: "0 0 7 10",
                xmlns: "http://www.w3.org/2000/svg",
                children: (0, l.jsx)("path", {
                    d: "M1.5 1L5.5 5L1.5 9",
                    stroke: "#FE8000",
                    strokeWidth: "2"
                })
            });
            var b = i(804),
                y = i(5282),
                N = i(1871),
                E = i(6179),
                S = i(1419);

            function C(e) {
                let [t, i] = (0, o.useState)(!1);
                return (0, o.useLayoutEffect)(() => {
                    e.current.play().catch(e => {
                        "NotAllowedError" === e.name && i(!0)
                    }), requestAnimationFrame(() => e.current.pause())
                }, [e]), t
            }
            var k = i(1506);

            function A(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
                    i = null;
                return Object.assign(function () {
                    for (var s = arguments.length, n = Array(s), r = 0; r < s; r++) n[r] = arguments[r];
                    null !== i && clearTimeout(i), i = setTimeout(() => {
                        e(...n), i = null
                    }, t)
                }, {
                    abort: () => {
                        null !== i && (clearTimeout(i), i = null)
                    }
                })
            }
            let F = e => "function" == typeof e;
            var L = e => {
                    let [t, i] = (0, o.useState)(e), s = (0, o.useRef)(t);
                    return [t, (0, o.useCallback)(e => {
                        s.current = F(e) ? e(s.current) : e, i(s.current)
                    }, []), s]
                },
                M = i(6227);

            function z() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    t = (0, y.c)(0),
                    {
                        videoRef: i,
                        duration: s,
                        isVideoReady: n,
                        canPlayThrough: r
                    } = function () {
                        let [e, t] = (0, o.useState)(0), [i, s] = (0, o.useState)(!1), [n, r, a] = L(!1), l = (0, o.useRef)();
                        return (0, o.useEffect)(() => {
                            l.current.readyState > 0 && (t(l.current.duration), s(!0));
                            let e = () => {
                                    let e = l.current;
                                    e && (t(e.duration), s(!0), console.log("The video is ".concat(e.duration, " seconds long.")))
                                },
                                i = A(e => {
                                    a.current !== e && r(e)
                                }, 500),
                                n = () => {
                                    i(!0)
                                },
                                o = () => {
                                    i(!1)
                                };
                            return l.current.addEventListener("canplaythrough", n), l.current.addEventListener("seeking", o), l.current.addEventListener("loadedmetadata", e), () => {
                                l.current && (l.current.removeEventListener("loadedmetadata", e), l.current.removeEventListener("seeking", o), l.current.removeEventListener("canplaythrough", n), i.abort())
                            }
                        }, []), {
                            videoRef: l,
                            duration: e,
                            isVideoReady: i,
                            canPlayThrough: n
                        }
                    }(),
                    a = (0, o.useMemo)(() => s - e, [s, e]),
                    l = function (e) {
                        let {
                            videoRef: t,
                            isVideoReady: i
                        } = e, s = (0, o.useRef)(0), n = (0, o.useRef)(!1), r = (0, o.useRef)(0);
                        return (0, M.p)(() => {
                            if (!i || !n.current || isNaN(s.current) || s.current === 1 / 0) return;
                            t.current.currentTime = s.current;
                            let e = Math.round(1e3 * s.current) / 1e3;
                            Math.abs(e - r.current) > .05 && (t.current.currentTime = e), s.current = e, n.current = !1
                        }), e => {
                            s.current = e, n.current = !0
                        }
                    }({
                        videoRef: i,
                        isVideoReady: n
                    });
                return (0, E.W)(t, "change", t => {
                    if (!n) return;
                    let i = (a - e) * t + e;
                    l((0, k.u)(0, a - 1, i))
                }), (0, o.useEffect)(() => {
                    if (!n) return;
                    i.current.pause();
                    let s = a * t.get() + e;
                    l((0, k.u)(0, a - 1, s))
                }, [a, n, t, l, i, e]), {
                    videoRef: i,
                    duration: s,
                    isVideoReady: n,
                    videoProgress: t,
                    canPlayThrough: r
                }
            }

            function B(e) {
                let t = (e % 60).toFixed(2),
                    i = Math.floor(e / 3600).toString().padStart(2, "0"),
                    s = Math.floor(e % 3600 / 60).toString().padStart(2, "0"),
                    [n, r] = t.split("."),
                    a = n.padStart(2, "0"),
                    l = (r || "00").padEnd(2, "0");
                return "".concat(i, ":").concat(s, ":").concat(a, ".").concat(l)
            }
            let H = (0, o.createContext)({
                    duration: 0,
                    progress: new b.Hg,
                    currentTime: new b.Hg
                }),
                W = () => (0, o.useContext)(H);
            var I = e => {
                    let {
                        playbackConst: t,
                        children: i,
                        sources: s,
                        onVideoReady: n,
                        onCanPlayThough: r,
                        onLowPowerModeDetected: a,
                        offset: c = 0,
                        showDebugTimestamp: d
                    } = e, {
                        videoRef: h,
                        duration: m,
                        isVideoReady: x,
                        videoProgress: u,
                        canPlayThrough: p
                    } = z(c), f = t * m, g = (0, y.c)(0), v = (0, o.useRef)(), {
                        scrollYProgress: w
                    } = (0, N.v)({
                        target: v
                    }), [j, b] = (0, o.useState)(0);
                    (0, E.W)(w, "change", e => {
                        u.set(e), g.set(e * m), d && b(e * m)
                    }), (0, o.useEffect)(() => {
                        x && (null == n || n())
                    }, [x]), (0, o.useEffect)(() => {
                        p && (null == r || r())
                    }, [p]);
                    let k = C(h);
                    return (0, o.useEffect)(() => {
                        k && (null == a || a())
                    }, [k]), (0, l.jsxs)(S.E.div, {
                        className: "relative flex items-start",
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: x ? 1 : 0
                        },
                        style: {
                            height: f / 6.6 + "vh"
                        },
                        ref: v,
                        children: [(0, l.jsx)("video", {
                            className: "pointer-events-none sticky top-0 h-screen w-full bg-black object-cover",
                            autobuffer: "autobuffer",
                            disablePictureInPicture: !0,
                            ref: h,
                            preload: "preload",
                            playsInline: !0,
                            loop: !0,
                            muted: !0,
                            autoPlay: !0,
                            children: s.map((e, t) => {
                                let {
                                    type: i,
                                    src: s
                                } = e;
                                return (0, l.jsx)("source", {
                                    type: i,
                                    src: s
                                }, t)
                            })
                        }), (0, l.jsx)(H.Provider, {
                            value: {
                                duration: m,
                                progress: w,
                                currentTime: g
                            },
                            children: i
                        }), d && (0, l.jsxs)("div", {
                            className: "fixed bottom-0 left-0 z-50",
                            children: [(0, l.jsx)("span", {
                                className: "ml-r",
                                children: B(j)
                            }), ":", (0, l.jsx)("span", {
                                className: "ml-1 opacity-50",
                                children: B(m)
                            })]
                        })]
                    })
                },
                R = e => {
                    let {
                        topLeft: t,
                        topRight: i,
                        bottomLeft: s,
                        bottomRight: n,
                        size: r = 8,
                        color: a = "#000"
                    } = e;
                    return (0, l.jsx)("div", {
                        className: "\n                ".concat(t && "border-t border-l", " \n                ").concat(i && "border-r border-t", " \n                ").concat(s && "border-b border-l", " \n                ").concat(n && "border-b border-r"),
                        style: {
                            width: r,
                            height: r,
                            borderColor: a
                        }
                    })
                },
                P = i(831),
                O = i(6391);
            let T = {
                VERY_FAST: .12,
                FAST: .2,
                NORMAL: .3,
                SLOW: .5,
                VERY_SLOW: .7,
                EASING: [.22, 1, .36, 1],
                EASING_IN_OUT: [.81, .03, .06, 1]
            };
            var G = i(6506);

            function V(e, t) {
                let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "center",
                    s = function (e) {
                        let t = (0, G.t)(),
                            i = (0, y.c)(0),
                            s = (0, y.c)(0);
                        return (0, o.useEffect)(() => {
                            if (!e) return;
                            let n = t.x.on("change", e => i.set(e)),
                                r = t.y.on("change", e => s.set(e));
                            return () => {
                                n(), r()
                            }
                        }, [i, s, t, e]), {
                            x: i,
                            y: s
                        }
                    }(e),
                    n = (0, P.H)([s.x, s.y], () => {
                        var e;
                        let i = (null === (e = t.current) || void 0 === e ? void 0 : e.getBoundingClientRect()) || {};
                        return {
                            left: i.left || 0,
                            top: i.top || 0,
                            right: i.right || 0,
                            bottom: i.bottom || 0,
                            width: i.width || 0,
                            height: i.height || 0,
                            x: i.x || 0,
                            y: i.y || 0
                        }
                    });
                return {
                    x: (0, P.H)(s.x, e => {
                        let t = n.get();
                        return "center" === i ? e - (t.left + t.width / 2) : e - t.left
                    }),
                    y: (0, P.H)(s.y, e => {
                        let t = n.get();
                        return "center" === i ? e - (t.top + t.height / 2) : e - t.top
                    }),
                    bounds: n,
                    anchor: i
                }
            }

            function _(e) {
                return {
                    x: (0, P.H)(e.x, t => t / e.bounds.get().width),
                    y: (0, P.H)(e.y, t => t / e.bounds.get().height)
                }
            }

            function D() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    t = (0, o.useRef)(),
                    [i, s] = (0, o.useState)({
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0,
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    });
                return (0, o.useLayoutEffect)(() => {
                    let e = () => {
                        let e = t.current.getBoundingClientRect(),
                            i = window.scrollY;
                        s({
                            x: e.x,
                            y: e.y + i,
                            width: e.width,
                            height: e.height,
                            left: e.left,
                            right: e.right,
                            top: e.top + i,
                            bottom: e.bottom + i
                        })
                    };
                    return window.addEventListener("resize", e), e(), () => {
                        window.removeEventListener("resize", e)
                    }
                }, e), [t, i]
            }
            let Y = e => {
                    let {
                        href: t,
                        children: i,
                        hover: s,
                        isVisible: n = !0
                    } = e, r = (0, o.useRef)(), [a, c] = (0, o.useState)(s || !1), d = function (e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                            [i, s] = (0, o.useState)({
                                x: 0,
                                y: 0,
                                width: 0,
                                height: 0,
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0
                            });
                        return (0, o.useLayoutEffect)(() => {
                            let t = () => {
                                let t = e.current.getBoundingClientRect();
                                s({
                                    x: t.x,
                                    y: t.y,
                                    width: t.width,
                                    height: t.height,
                                    left: t.left,
                                    right: t.right,
                                    top: t.top,
                                    bottom: t.bottom
                                })
                            };
                            return window.addEventListener("resize", t), t(), () => {
                                window.removeEventListener("resize", t)
                            }
                        }, t), i
                    }(r), h = V(a, r, "center"), m = _(h), x = (0, P.H)(m.x, e => a ? 15 * e : 0), u = (0, P.H)(m.y, e => a ? 4 * e : 0), p = (0, O.q)(x, {
                        stiffness: 300,
                        damping: 50
                    }), f = (0, O.q)(u, {
                        stiffness: 300,
                        damping: 50
                    }), g = (0, P.H)(h.x, [-d.width / 2, d.width / 2], [-d.width / 4, d.width / 4]), v = (0, P.H)(h.y, [-d.height / 2, d.height / 2], [-d.height / 4, d.height / 4]), w = (0, O.q)(g, {
                        stiffness: 200,
                        damping: 100
                    }), j = (0, O.q)(v, {
                        stiffness: 200,
                        damping: 100
                    }), b = (0, l.jsxs)(S.E.div, {
                        onPointerEnter: () => c(!0),
                        onPointerLeave: () => c(s || !1),
                        initial: {
                            opacity: 1,
                            scale: 1,
                            backgroundColor: s ? "#FC5F2B" : void 0
                        },
                        whileHover: {
                            scale: 1.05,
                            backgroundColor: "#FC5F2B",
                            transition: {
                                duration: T.SLOW
                            }
                        },
                        whileTap: {
                            scale: .98
                        },
                        ref: r,
                        className: "\n    font-mono-sm\n      relative inline-flex\n      items-center\n      justify-center\n      px-8\n      py-4\n      text-zinc-900\n      ",
                        style: {
                            "--border-color": "#18181b"
                        },
                        children: [(0, l.jsx)("div", {
                            className: "absolute left-0 right-0 top-0 flex justify-center",
                            children: (0, l.jsxs)(S.E.div, {
                                className: "flex justify-between",
                                initial: {
                                    width: 0
                                },
                                animate: {
                                    width: n ? "100%" : 0,
                                    opacity: n ? 1 : 0,
                                    y: n ? 0 : 20,
                                    transition: {
                                        duration: T.SLOW,
                                        ease: T.EASING,
                                        delay: n ? .3 : 0
                                    }
                                },
                                children: [(0, l.jsx)(R, {
                                    topLeft: !0,
                                    color: a ? "#F7791E" : "#000"
                                }), (0, l.jsx)(R, {
                                    topRight: !0,
                                    color: a ? "#F7791E" : "#000"
                                })]
                            })
                        }), (0, l.jsx)(S.E.div, {
                            initial: {
                                opacity: 0,
                                scale: 1
                            },
                            animate: {
                                opacity: n ? [0, 1, 0, 1] : 0,
                                transition: {
                                    duration: T.NORMAL,
                                    ease: "linear",
                                    delay: n ? T.FAST + .3 : 0
                                }
                            },
                            children: (0, l.jsx)(S.E.div, {
                                animate: {
                                    color: a ? "white" : "#18181b",
                                    scale: a ? .95 : 1,
                                    transition: {
                                        duration: T.NORMAL
                                    }
                                },
                                style: {
                                    x: p,
                                    y: f
                                },
                                children: i
                            })
                        }), (0, l.jsx)("div", {
                            className: "absolute bottom-0 left-0 right-0 flex justify-center",
                            children: (0, l.jsxs)(S.E.div, {
                                initial: {
                                    width: 0
                                },
                                animate: {
                                    width: n ? "100%" : 0,
                                    y: n ? 0 : -20,
                                    opacity: n ? 1 : 0,
                                    transition: {
                                        duration: T.SLOW,
                                        ease: T.EASING,
                                        delay: n ? .3 : 0
                                    }
                                },
                                className: "flex justify-between",
                                children: [(0, l.jsx)(R, {
                                    bottomLeft: !0,
                                    color: a ? "#F7791E" : "#000"
                                }), (0, l.jsx)(R, {
                                    bottomRight: !0,
                                    color: a ? "#F7791E" : "#000"
                                })]
                            })
                        }), (0, l.jsx)(S.E.div, {
                            style: {
                                x: w,
                                y: j
                            },
                            animate: {
                                scale: a ? 1 : .8,
                                opacity: a ? .5 : 0,
                                transition: {
                                    duration: T.SLOW,
                                    ease: "linear"
                                }
                            },
                            className: "pointer-events-none absolute inset-0 z-0 bg-[#F7791E] blur-2xl"
                        })]
                    });
                    return t ? (0, l.jsx)("a", {
                        href: t || "#",
                        target: "blank",
                        children: b
                    }) : b
                },
                q = e => {
                    let {
                        href: t,
                        children: i,
                        outline: s
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: "relative inline-block",
                        children: [(0, l.jsx)("div", {
                            className: "\n      font-mono-sm \n      relative z-10 \n      inline-block bg-white px-8 \n      py-4\n      text-zinc-900\n    ",
                            children: (0, l.jsx)("span", {
                                children: i
                            })
                        }), (0, l.jsx)("div", {
                            className: "absolute inset-0 z-0 bg-white blur-2xl"
                        })]
                    })
                };
            var X = e => {
                let {
                    outline: t,
                    ...i
                } = e;
                return (0, l.jsxs)(l.Fragment, {
                    children: [t && (0, l.jsx)(Y, {
                        ...i
                    }), !t && (0, l.jsx)(q, {
                        ...i
                    })]
                })
            };
            let J = (0, o.createContext)(new b.Hg),
                U = () => (0, o.useContext)(J);
            var Z = e => {
                let {
                    progress: t,
                    children: i
                } = e;
                return (0, l.jsx)(J.Provider, {
                    value: t,
                    children: i
                })
            };

            function $(e, t) {
                let [i, s] = (0, o.useState)(!1);
                return (0, E.W)(e, "change", e => {
                    t(e) ? s(!0) : s(!1)
                }), i
            }
            var Q = i(8646),
                K = i(4846);

            function ee() {
                let e = (0, Q._)(["", "px 0px"]);
                return ee = function () {
                    return e
                }, e
            }
            var et = e => {
                    let {
                        children: t,
                        progress: i
                    } = e, [s, n] = D([t]), r = (0, P.H)(i, [0, 1], [0, 1]), a = (0, P.H)(r, [0, 1], [-(9 * n.width), 0]), o = (0, K.Y)(ee(), a), c = 9.9 * n.width;
                    return (0, l.jsx)(S.E.div, {
                        style: {
                            mask: "linear-gradient(45deg, \n          rgba(0,0,0,0) 0%, \n          rgba(0,0,0,0) ".concat(13.5, "%, \n          rgba(0,0,0,.99) ").concat(31.5, "%,\n          rgba(0,0,0,.99) ").concat(58.5, "%, \n          rgba(0,0,0,0) ").concat(77.39999999999999, "%, \n          rgba(0,0,0,0) 100%)"),
                            maskPosition: o,
                            maskSize: "".concat(c, "px ").concat(n.height, "px"),
                            maskComposite: "exclude",
                            maskRepeat: "revert"
                        },
                        ref: s,
                        children: t
                    })
                },
                ei = i(2973),
                es = i(7025),
                en = i(4839),
                er = i(6164);

            function ea() {
                for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                return (0, er.m6)((0, en.W)(t))
            }
            let el = ei.fC,
                eo = ei.xz,
                ec = ei.h_,
                ed = ei.x8,
                eh = o.forwardRef((e, t) => {
                    let {
                        className: i,
                        ...s
                    } = e;
                    return (0, l.jsx)(ei.aV, {
                        ref: t,
                        className: ea("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0  fixed inset-0 z-50 bg-black/80", i),
                        ...s
                    })
                });
            eh.displayName = ei.aV.displayName;
            let em = o.forwardRef((e, t) => {
                let {
                    className: i,
                    children: s,
                    ...n
                } = e;
                return (0, l.jsxs)(ec, {
                    children: [(0, l.jsx)(eh, {}), (0, l.jsxs)(ei.VY, {
                        ref: t,
                        className: ea("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-right-1/2 data-[state=closed]:slide-out-to-top-[30px] data-[state=open]:slide-in-from-right-1/2 data-[state=open]:slide-in-from-top-[30px] fixed bottom-[30px] right-[30px] z-50 grid w-full gap-4 bg-white px-6 shadow-lg duration-200 sm:rounded-lg", i),
                        ...n,
                        children: [(0, l.jsxs)(ed, {
                            className: "absolute left-0 z-[200] rounded-full rounded-sm p-4 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none data-[state=open]:text-slate-500 md:-left-20",
                            style: {
                                backgroundColor: "white",
                                borderRadius: "100%"
                            },
                            children: [(0, l.jsx)(es.Z, {
                                className: "h-6 w-6"
                            }), (0, l.jsx)("span", {
                                className: "sr-only",
                                children: "Close"
                            })]
                        }), (0, l.jsx)("div", {
                            className: "max-h-[85vh] overflow-y-scroll",
                            children: s
                        })]
                    })]
                })
            });
            em.displayName = ei.VY.displayName, o.forwardRef((e, t) => {
                let {
                    className: i,
                    ...s
                } = e;
                return (0, l.jsx)(ei.Dx, {
                    ref: t,
                    className: ea("text-lg font-semibold leading-none tracking-tight", i),
                    ...s
                })
            }).displayName = ei.Dx.displayName, o.forwardRef((e, t) => {
                let {
                    className: i,
                    ...s
                } = e;
                return (0, l.jsx)(ei.dk, {
                    ref: t,
                    className: ea("text-sm text-slate-500 dark:text-slate-400", i),
                    ...s
                })
            }).displayName = ei.dk.displayName;
            var ex = i(1799);

            function eu(e) {
                let {
                    children: t
                } = e, i = (0, ex.LZ)();
                return (0, l.jsxs)(el, {
                    onOpenChange: e => {
                        e ? null == i || i.stop() : null == i || i.start()
                    },
                    children: [(0, l.jsx)(eo, {
                        children: t
                    }), (0, l.jsx)(em, {
                        className: "z-[200] ml-[10%] max-h-[90vh] w-[85%] overflow-x-visible md:max-w-xl",
                        style: {
                            borderRadius: 32
                        },
                        "data-lenis-prevent": "true",
                        forceMount: !0,
                        children: (0, l.jsxs)("div", {
                            className: "px-8 lg:px-12",
                            children: [(0, l.jsx)("div", {
                                className: "-mt-6 overflow-hidden",
                                children: (0, l.jsx)("img", {
                                    src: "/dialog-feature.png",
                                    className: "-mt-14 mb-12 max-h-[550px] w-full rounded-3xl"
                                })
                            }), (0, l.jsx)("div", {
                                className: "space-y-12",
                                children: (0, l.jsxs)("div", {
                                    className: "space-y-4",
                                    children: [(0, l.jsx)("h3", {
                                        className: "text-4xl lg:text-5xl",
                                        children: "Get early access"
                                    }), (0, l.jsx)("p", {
                                        className: "text-xl text-zinc-500",
                                        children: "Join the waitlist for early access to Superpower. We'll reach out to you as more spots become available."
                                    })]
                                })
                            }), (0, l.jsx)("div", {
                                className: "-ml-[15px] -mr-[15px]",
                                children: (0, l.jsx)("form-widget", {
                                    ucid: "2X8NEjvQ9c5KJYR7178Sizt9pxM"
                                })
                            })]
                        })
                    }), (0, l.jsx)("div", {
                        className: "hidden",
                        children: (0, l.jsx)("form-widget", {
                            ucid: "2X8NEjvQ9c5KJYR7178Sizt9pxM"
                        })
                    })]
                })
            }
            var ep = e => {
                let {
                    shouldShowContent: t
                } = e, i = U(), s = $(i, e => e > .001 && e < 1), n = $(i, e => e > .18 && e < .52), r = (0, P.H)(i, [.05, .2, .4, .5], [0, .6, .6, 1]), a = (0, P.H)(i, [.1, .25, .48, .53], [0, .6, .6, 1]);
                return (0, l.jsx)(S.E.div, {
                    className: "fixed left-0 right-0 top-0 z-10 h-screen w-full pl-60",
                    style: {
                        display: s ? "block" : "none"
                    },
                    children: (0, l.jsx)("div", {
                        className: "mt-[30vh] flex w-full lg:flex-row",
                        children: (0, l.jsxs)("h1", {
                            className: "font-sans-2xl max-w-[12ch] space-y-4",
                            children: [(0, l.jsx)(et, {
                                progress: r,
                                children: (0, l.jsx)("span", {
                                    className: "block",
                                    children: "A new era of personal health"
                                })
                            }), (0, l.jsx)("div", {
                                className: "flex w-full max-w-[500px] flex-row",
                                children: (0, l.jsxs)("div", {
                                    className: "pointer-events-auto z-50 flex h-full max-w-[500px] flex-col",
                                    children: [(0, l.jsx)(et, {
                                        progress: a,
                                        children: (0, l.jsx)("p", {
                                            className: "font-sans-xl mb-8 leading-tight text-white/70",
                                            children: "The world’s most advanced digital clinic to help you live longer, prevent disease, and feel your best"
                                        })
                                    }), (0, l.jsx)(S.E.div, {
                                        className: "-mt-2",
                                        initial: {
                                            opacity: 0
                                        },
                                        animate: {
                                            opacity: n ? 1 : 0,
                                            transition: {
                                                duration: n ? T.VERY_SLOW : T.FAST,
                                                ease: "linear",
                                                delay: 0
                                            }
                                        },
                                        children: (0, l.jsx)(eu, {
                                            children: (0, l.jsx)(X, {
                                                children: "Join waitlist"
                                            })
                                        })
                                    })]
                                })
                            })]
                        })
                    })
                })
            };

            function ef() {
                let e = (0, Q._)(["blur(", "px)"]);
                return ef = function () {
                    return e
                }, e
            }
            var eg = e => {
                let {
                    scrollTopOffset: t
                } = e, {
                    scrollY: i
                } = (0, N.v)(), [s, n] = D([]), r = (0, p.$)();
                $(i, e => e >= 0 && e < t + r.height / 2);
                let a = .65 * r.height,
                    o = (0, P.H)(i, [n.height - a + t, n.height + t], [1, 0]),
                    c = (0, P.H)(o, [1, 0], [0, 100]),
                    d = (0, K.Y)(ef(), c);
                return (0, l.jsx)(l.Fragment, {
                    children: (0, l.jsx)(S.E.div, {
                        initial: {
                            opacity: 0,
                            y: t
                        },
                        animate: {
                            opacity: 1
                        },
                        style: {
                            opacity: 1,
                            filter: d
                        },
                        ref: s,
                        className: "absolute left-0 right-0 top-0 z-10 flex min-h-screen w-full flex-col items-center px-4",
                        children: (0, l.jsxs)("div", {
                            className: "mb-12 mt-[65vh] flex flex-col items-center text-center",
                            children: [(0, l.jsx)("h1", {
                                className: "font-sans-3xl max-w-[13ch]",
                                children: "A new era of personal health"
                            }), (0, l.jsx)("div", {
                                className: "my-12 max-w-[28ch] text-center",
                                children: (0, l.jsx)("p", {
                                    className: "font-sans-xl mb-3 leading-tight",
                                    children: "The world’s most advanced digital clinic to help you live longer, prevent disease, and feel your best"
                                })
                            }), (0, l.jsx)(eu, {
                                children: (0, l.jsx)(X, {
                                    children: "Join waitlist"
                                })
                            })]
                        })
                    })
                })
            };
            let ev = e => {
                    let {
                        children: t,
                        scrollHeight: i
                    } = e, {
                        scrollY: s
                    } = (0, N.v)(), n = (0, y.c)(0), [r, a] = D([i]), [c, d] = (0, o.useState)(!1), [h, m] = (0, o.useState)(!1);
                    return (0, o.useEffect)(() => {
                        if (!c) return;
                        let e = () => {
                            let e = s.get();
                            if (e >= a.top && e <= a.bottom) {
                                n.set((e - a.top) / a.height), m(!0);
                                return
                            }
                            m(!1)
                        };
                        e();
                        let t = s.on("change", e);
                        return () => {
                            t()
                        }
                    }, [c, a]), (0, l.jsx)(S.E.div, {
                        className: "-z-10",
                        ref: r,
                        style: {
                            height: i,
                            pointerEvents: c ? "all" : "none"
                        },
                        onViewportEnter: () => d(!0),
                        onViewportLeave: () => d(!1),
                        children: (0, l.jsx)(S.E.div, {
                            className: "relative",
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: h ? 1 : 0,
                                transition: {
                                    duration: T.NORMAL,
                                    ease: "linear"
                                }
                            },
                            children: (0, l.jsx)(Z, {
                                progress: n,
                                children: t
                            })
                        })
                    })
                },
                ew = e => {
                    let {
                        children: t
                    } = e;
                    return (0, l.jsx)("div", {
                        className: "min-h-screen pb-[100vh]",
                        children: t
                    })
                };

            function ej(e) {
                let t = e.split(":");
                if (1 === t.length) {
                    let e = parseInt(t[0], 10);
                    if (isNaN(e) || e < 0 || e >= 60) throw Error("Invalid time string format. Please provide numerical values for seconds between 0 and 59.");
                    return e
                }
                if (2 === t.length) {
                    let [e, i] = t, s = parseInt(e, 10), n = parseInt(i, 10);
                    if (isNaN(s) || isNaN(n) || s < 0 || s >= 60 || n < 0 || n >= 60) throw Error("Invalid time string format. Please provide numerical values for minutes and seconds between 0 and 59.");
                    return 60 * s + n
                }
                if (3 === t.length) {
                    let [e, i, s] = t.map(e => parseInt(e, 10));
                    if (isNaN(e) || isNaN(i) || isNaN(s)) throw Error("Invalid time string format. Please provide numerical values for hours, minutes, and seconds.");
                    let n = e || 0,
                        r = i || 0,
                        a = s || 0;
                    if (n < 0 || n >= 24 || r < 0 || r >= 60 || a < 0 || a >= 60) throw Error("Invalid time values. Hours must be between 0 and 23, minutes and seconds must be between 0 and 59.");
                    return 3600 * n + 60 * r + a
                }
                throw Error("Invalid time string format. Please provide a string in the format 'HH:MM:SS'.")
            }
            let eb = (e, t) => {
                if ("string" == typeof e) {
                    let t = ej(e);
                    if (null == t) throw "Cannot convert to seconds from time string";
                    return t
                }
                if ("number" == typeof e) return e * t;
                throw "Time format does not match either timestring(hh:mm:ss) or progress value(0-1)"
            };
            var ey = e => {
                let {
                    children: t,
                    enter: i,
                    exit: s
                } = e, {
                    currentTime: n,
                    duration: r
                } = W(), a = (0, o.useMemo)(() => eb(i, r), [i, r]), c = (0, o.useMemo)(() => eb(s, r), [s, r]), d = (0, P.H)(n, [a, c], [0, 1]);
                return (0, l.jsx)("div", {
                    className: "pointer-events-none fixed inset-0",
                    children: (0, l.jsx)(Z, {
                        progress: d,
                        children: t
                    })
                })
            };

            function eN(e, t) {
                let {
                    min: i = 0,
                    max: s = 1 / 0,
                    responsiveness: n = .15,
                    dampingConst: r = 8,
                    dampingMargin: a = 1e3
                } = t, l = (0, y.c)(0), c = (0, o.useRef)(), [d, h] = (0, o.useState)(!1);
                return (0, E.W)(e, "change", e => {
                    c.current && cancelAnimationFrame(c.current), h(!0), c.current = requestAnimationFrame(function t() {
                        let o = l.get(),
                            d = (0, k.u)(i, s, e),
                            m = d > e ? -1 : 1,
                            x = -Math.abs(d - e),
                            u = d - x / (r * (1 - x / a)) * m,
                            p = (u - o) * n;
                        if (Math.abs(p) > .1) {
                            l.set(o + p), c.current = requestAnimationFrame(t);
                            return
                        }
                        l.set(u), h(!1)
                    })
                }), [l, d]
            }
            var eE = e => {
                    let {
                        isLoaded: t = !1
                    } = e;
                    return (0, o.useLayoutEffect)(() => {
                        if (t) return;
                        window.scrollTo(0, 0);
                        let e = function () {
                            var e = {
                                37: 1,
                                38: 1,
                                39: 1,
                                40: 1
                            };

                            function t(e) {
                                e.preventDefault()
                            }

                            function i(i) {
                                if (e[i.keyCode]) return t(i), !1
                            }
                            return document.createElement("div"), window.addEventListener("wheel", t, {
                                passive: !1
                            }), window.addEventListener("touchmove", t, {
                                passive: !1
                            }), window.addEventListener("keydown", i, !1), () => {
                                window.removeEventListener("wheel", t, {
                                    passive: !1
                                }), window.removeEventListener("touchmove", t, {
                                    passive: !1
                                }), window.removeEventListener("keydown", i, !1)
                            }
                        }();
                        return () => e()
                    }, [t]), (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)("style", {
                            children: ".glowing-pulse {\n            z-index: 0;\n            position:absolute;\n            inset: 0px;\n            width: 100%;\n            height: 100%;\n            background: radial-gradient(farthest-side, #2e120d, transparent) center no-repeat;\n            animation:pulse 2s linear infinite alternate;\n          }\n          @keyframes pulse{\n            from {\n              background-size:50% 50%;\n              opacity: 1;\n            }\n            to {\n              background-size:100% 100%;\n              opacity: 1;\n            }\n          }\n\n          @keyframes pulse-opacity {\n            from {\n              opacity:0;\n            }\n            to {\n              opacity:.5;\n            }\n          }\n\n          .pulsing-text {\n            animation:pulse-opacity .2s linear infinite alternate;\n          }\n          \n          .spinner {\n            z-index: 10;\n            width:8px;\n            height:1px;\n            opacity:.5;\n            background-color: #fff; \n          }\n\n          .spinner-anim-1 {\n            animation:spinner-rotation-anim-1 5s cubic-bezier(0.16, 1, 0.3, 1) infinite alternate;\n          }\n          .spinner-anim-2 {\n            animation:spinner-rotation-anim-2 3s cubic-bezier(0.16, 1, 0.3, 1) infinite alternate;\n          }\n          .spinner-anim-3 {\n            animation:spinner-rotation-anim-3 5s cubic-bezier(0.16, 1, 0.3, 1) infinite alternate;\n          }\n\n          @keyframes spinner-rotation-anim-1 {\n            0% {\n              transform: rotate(0deg);\n            }\n            20% {\n              transform: rotate(49deg);\n            }\n            69% {\n              transform: rotate(200deg);\n            }\n            100% {\n              transform: rotate(365deg);\n            }\n          }\n          @keyframes spinner-rotation-anim-2 {\n            0% {\n              transform: rotate(0deg);\n            }\n            10% {\n              transform: rotate(365deg);\n            }\n            60% {\n              transform: rotate(49deg);\n            }\n            100% {\n              transform: rotate(200deg);\n            }\n          }\n\n          @keyframes spinner-rotation-anim-3 {\n            0% {\n              transform: rotate(0deg);\n            }\n            40% {\n              transform: rotate(365deg);\n            }\n            69% {\n              transform: rotate(49deg);\n            }\n            100% {\n              transform: rotate(300deg);\n            }\n          }\n          \n          "
                        }), (0, l.jsx)(S.E.div, {
                            className: "pointer-events-none fixed inset-0 z-[9999999999] flex items-center justify-center bg-black",
                            initial: {
                                opacity: 1
                            },
                            animate: {
                                opacity: t ? 0 : 1
                            },
                            children: (0, l.jsxs)("div", {
                                className: "flex items-center justify-center gap-4",
                                children: [(0, l.jsx)("div", {
                                    className: "spinner spinner-anim-1"
                                }), (0, l.jsx)("div", {
                                    className: "spinner spinner-anim-2"
                                }), (0, l.jsx)("div", {
                                    className: "spinner spinner-anim-3"
                                }), (0, l.jsx)("div", {
                                    className: "pulsing-text font-mono-xs z-10",
                                    children: "Loading"
                                }), (0, l.jsx)("div", {
                                    className: "spinner spinner-anim-3"
                                }), (0, l.jsx)("div", {
                                    className: "spinner spinner-anim-1"
                                }), (0, l.jsx)("div", {
                                    className: "spinner spinner-anim-2"
                                })]
                            })
                        })]
                    })
                },
                eS = i(4398);
            let eC = (e, t) => e * t,
                ek = e => {
                    let {
                        children: t
                    } = e, i = U();
                    return (0, l.jsx)("div", {
                        className: "font-sans-3xl fixed inset-0 flex h-full w-full items-center justify-center",
                        children: (0, l.jsx)(et, {
                            progress: i,
                            children: (0, l.jsx)("div", {
                                className: "leading-normal",
                                children: t
                            })
                        })
                    })
                };
            var eA = e => {
                let t = (0, p.$)(),
                    i = g(v.md),
                    [s, n] = (0, o.useState)(!1),
                    [r, a] = (0, o.useState)(!1),
                    c = ej("0:02"),
                    d = (0, o.useMemo)(() => eC(c, 400), [c]),
                    {
                        scrollY: h
                    } = (0, N.v)(),
                    m = (0, y.c)(0),
                    [x, u] = (0, o.useState)(!1),
                    [f, w] = eN(m, {
                        responsiveness: .03
                    });
                (0, E.W)(f, "change", e => {
                    if (x) {
                        f.set(h.get()), m.set(h.get());
                        return
                    }
                    window.scrollTo(0, f.get())
                }), (0, E.W)(h, "change", e => f.set(e)), (0, o.useEffect)(() => {
                    let e = A(() => {
                            u(!1)
                        }, 100),
                        t = t => {
                            u(!0), e()
                        },
                        i = () => {},
                        s = () => {
                            u(!0)
                        };
                    return window.addEventListener("wheel", t), window.addEventListener("touchend", i), window.addEventListener("touchstart", s), () => {
                        window.removeEventListener("wheel", t), window.addEventListener("touchstart", s), window.removeEventListener("touchend", i), e.abort()
                    }
                }, []), (0, o.useEffect)(() => {
                    let e = h.get();
                    if (!x && r && e < d) {
                        m.set(d);
                        return
                    }
                }, [d, h, x, m, f, r]);
                let j = (0, o.useRef)(Date.now());
                return (0, o.useEffect)(() => {
                    if (!r) return;
                    let e = Date.now() - j.current;
                    console.log("Video loaded in ".concat(B(e / 1e3))), window.scrollTo(0, 0)
                }, [r]), (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsxs)("section", {
                        className: "relative z-10 min-h-screen bg-zinc-900 text-white",
                        children: [(0, l.jsx)(eE, {
                            isLoaded: r
                        }), !s && (0, l.jsx)(I, {
                            offset: ej("0:0"),
                            playbackConst: 400,
                            onVideoReady: () => {
                                eS.G6 && setTimeout(() => a(!0), 100)
                            },
                            onCanPlayThough: () => {
                                eS.G6 || (window.scrollTo(0, 0), a(!0))
                            },
                            sources: [{
                                type: 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',
                                src: "/hero-section/sp-wormhole-final.mp4"
                            }],
                            children: (0, l.jsx)(ey, {
                                enter: "0:00",
                                exit: "0:06",
                                children: i && (0, l.jsx)(ep, {
                                    shouldShowContent: !0
                                })
                            })
                        }), s && (0, l.jsxs)(ew, {
                            children: [(0, l.jsx)(ev, {
                                scrollHeight: .5 * t.height,
                                children: (0, l.jsx)("img", {
                                    src: "/hero-section/hero-mobile-slide-1.jpg",
                                    width: 393,
                                    height: 852,
                                    alt: "",
                                    className: "fixed inset-0 h-screen w-full object-cover"
                                })
                            }), (0, l.jsx)(ev, {
                                scrollHeight: 1 * t.height,
                                children: (0, l.jsx)("img", {
                                    src: "/hero-section/hero-mobile-slide-2.jpg",
                                    width: 393,
                                    height: 852,
                                    alt: "",
                                    className: "fixed inset-0 h-screen w-full object-cover opacity-20"
                                })
                            }), (0, l.jsxs)(ev, {
                                scrollHeight: 2 * t.height,
                                children: [(0, l.jsx)("img", {
                                    src: "/hero-section/hero-mobile-slide-3.jpg",
                                    width: 393,
                                    height: 852,
                                    alt: "",
                                    className: "fixed inset-0 h-screen w-full object-cover"
                                }), (0, l.jsx)(ek, {
                                    children: "Slow aging. Feel energized."
                                })]
                            })]
                        }), !i && (0, l.jsx)(eg, {
                            scrollTopOffset: d - 140
                        })]
                    }), r && e.children]
                })
            };
            let eF = e => {
                let {
                    width: t = 0,
                    height: i = 0,
                    color: s = "#FFF"
                } = e;
                return (0, l.jsx)("div", {
                    style: {
                        height: "auto" === t ? "100%" : t,
                        width: "auto" === i ? "100%" : i,
                        backgroundColor: s
                    }
                })
            };
            var eL = e => {
                let {
                    length: t,
                    vertical: i,
                    head: s,
                    weight: n = 1,
                    tail: r,
                    color: a = "#FFF",
                    gap: o = !1
                } = e;
                return (0, l.jsxs)("div", {
                    className: "flex items-center justify-center",
                    style: {
                        flexDirection: i ? "column" : "row",
                        height: i && "auto" === t ? "100%" : void 0,
                        width: i || "auto" !== t ? void 0 : "100%",
                        gap: o ? 8 : 0
                    },
                    children: [s && (0, l.jsx)(eF, {
                        width: i ? n : s,
                        height: i ? s : n,
                        color: a
                    }), (0, l.jsx)(eF, {
                        width: i ? t : n,
                        height: i ? n : t,
                        color: a
                    }), r && (0, l.jsx)(eF, {
                        width: i ? n : r,
                        height: i ? r : n,
                        color: a
                    })]
                })
            };
            let eM = e => {
                    let {
                        width: t,
                        healthArea: i,
                        left: s,
                        isExpanded: n
                    } = e;
                    return (0, l.jsx)(S.E.div, {
                        className: "font-sans-sm pointer-events-none \n    absolute\n      flex flex-row\n      ".concat(s ? "left-0" : "right-0", " \n       h-full w-full\n      ").concat(s ? "border-l border-l-zinc-300" : "border-r border-r-zinc-300"),
                        style: {
                            width: 1.2 * t
                        },
                        animate: {
                            opacity: n ? 1 : 0,
                            transition: {
                                duration: T.SLOW,
                                ease: "linear"
                            }
                        },
                        children: (0, l.jsxs)("div", {
                            className: "flex w-full flex-col items-center justify-center",
                            children: [1 === i.length && i.map((e, t) => (0, l.jsxs)("div", {
                                className: "flex h-full w-full items-center justify-center",
                                children: [(0, l.jsx)(eL, {
                                    length: "auto",
                                    color: "#d4d4d8"
                                }), (0, l.jsx)(S.E.div, {
                                    className: "mx-4 leading-tight",
                                    animate: {
                                        opacity: n ? 1 : 0,
                                        transition: {
                                            duration: T.FAST,
                                            delay: T.VERY_FAST,
                                            ease: "linear"
                                        }
                                    },
                                    children: e
                                }), (0, l.jsx)(eL, {
                                    length: "auto",
                                    color: "#d4d4d8"
                                })]
                            }, t)), i.length > 1 && i.map((e, t) => (0, l.jsx)(S.E.div, {
                                animate: {
                                    opacity: n ? 1 : 0,
                                    transition: {
                                        duration: T.FAST,
                                        delay: T.VERY_FAST,
                                        ease: "linear"
                                    }
                                },
                                className: "flex h-full w-full items-center justify-center border-b border-b-zinc-300 px-2 leading-tight last:border-b-transparent",
                                children: e
                            }, t))]
                        })
                    })
                },
                ez = e => {
                    let {
                        name: t,
                        image: i,
                        icon: s,
                        areas: n,
                        onExpand: r,
                        onUnexpand: a,
                        isCollapsed: c,
                        isExpanded: d,
                        itemWidth: h,
                        expandWidth: m,
                        collapseWidth: x
                    } = e, u = (0, o.useRef)(), p = (0, o.useMemo)(() => d ? m : c ? x : h, [d, m, c, x, h]), [f, g] = (0, o.useMemo)(() => [
                        [n[0], n[1]],
                        [n[2]]
                    ], [n]);
                    return (0, o.useEffect)(() => {
                        d && u.current.focus()
                    }, [d]), (0, l.jsxs)(S.E.button, {
                        animate: {
                            "--greyscale-progress": d ? 0 : 1,
                            cursor: d ? "default" : "pointer",
                            width: p,
                            transition: {
                                duration: T.VERY_SLOW,
                                ease: T.EASING
                            }
                        },
                        ref: u,
                        className: "relative flex h-full w-screen grow items-center justify-center overflow-hidden outline-none",
                        initial: {},
                        onMouseEnter: () => r(),
                        onMouseLeave: () => a(),
                        whileHover: {
                            "--greyscale-progress": 0
                        },
                        children: [(0, l.jsx)(eM, {
                            left: !0,
                            healthArea: f,
                            width: h / 2,
                            isExpanded: d
                        }), (0, l.jsxs)(S.E.div, {
                            style: {
                                filter: "grayscale(var(--greyscale-progress))"
                            },
                            className: "relative z-10 h-full overflow-hidden rounded-2xl",
                            animate: {
                                width: d ? 1.2 * h : h,
                                transition: {
                                    duration: T.VERY_SLOW,
                                    ease: T.EASING
                                }
                            },
                            children: [(0, l.jsx)("div", {
                                className: "absolute bottom-0 left-0 h-full w-full overflow-hidden rounded-bl-2xl rounded-br-2xl",
                                style: {
                                    background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 67%, rgba(0, 0, 0, 0.587121) 80.5%, rgba(0, 0, 0, 0.757576) 87%, #000000 100%)",
                                    opacity: "0.5"
                                }
                            }), (0, l.jsx)("img", {
                                className: "h-full w-full object-cover",
                                src: i,
                                alt: "",
                                width: 256,
                                height: 256
                            })]
                        }), (0, l.jsx)(eM, {
                            right: !0,
                            healthArea: g,
                            width: h / 2,
                            isExpanded: d
                        }), (0, l.jsxs)("div", {
                            className: "absolute inset-0 z-20 flex flex-col items-center justify-between p-3 text-white",
                            children: [(0, l.jsx)(S.E.div, {
                                animate: {
                                    scale: c ? .6 : 1,
                                    transition: {
                                        duration: T.FAST,
                                        ease: T.EASING
                                    }
                                },
                                children: (0, l.jsx)("img", {
                                    src: s,
                                    width: 20,
                                    height: 20,
                                    alt: ""
                                })
                            }), (0, l.jsx)(S.E.div, {
                                className: "flex flex-col leading-tight",
                                animate: {
                                    scale: c ? .8 : 1,
                                    transition: {
                                        duration: T.FAST,
                                        ease: T.EASING
                                    }
                                },
                                children: t.split(" ").map((e, t) => (0, l.jsx)("span", {
                                    children: e
                                }, t))
                            })]
                        })]
                    })
                },
                eB = e => {
                    let {
                        row: t,
                        protocols: i,
                        onExpand: s,
                        expandedRow: n
                    } = e, [r, a] = (0, o.useState)(null), c = n === t, d = null === n, h = !d && !c, m = e => {
                        a(e), null === e ? s(null) : s(t)
                    }, [x, u] = D([]), p = (0, o.useMemo)(() => 14 * (i.length - 1), [14, i]), f = (0, o.useMemo)(() => (u.width - p) / i.length, [u, i, p]), g = .72 * f, v = (0, o.useMemo)(() => f / 4, [f]), w = (0, o.useMemo)(() => 2 * f, [f]);
                    return (0, l.jsx)(S.E.div, {
                        className: "flex flex-grow flex-row gap-[14px]",
                        ref: x,
                        animate: {
                            height: d ? g : c ? g * (1 + 1 / 3) : 2 / 3 * g,
                            transition: {
                                duration: T.VERY_SLOW,
                                ease: T.EASING
                            }
                        },
                        children: i.map((e, t) => (0, l.jsx)(ez, {
                            itemWidth: f,
                            isExpanded: r === t,
                            isCollapsed: r !== t && null !== r || h,
                            collapseWidth: v,
                            expandWidth: w,
                            onExpand: () => m(t),
                            onUnexpand: () => m(null),
                            ...e
                        }, t))
                    })
                };
            var eH = e => {
                    let {
                        protocols: t
                    } = e, [i, s] = (0, o.useState)(null);
                    return (0, l.jsxs)("div", {
                        className: "mx-auto my-8 flex w-screen max-w-[1550px] flex-col gap-[14px] px-8",
                        children: [(0, l.jsx)(eB, {
                            protocols: t.slice(t.length / 2, t.length),
                            onExpand: s,
                            row: 0,
                            expandedRow: i
                        }), (0, l.jsx)(eB, {
                            row: 1,
                            protocols: t.slice(0, t.length / 2),
                            onExpand: s,
                            expandedRow: i
                        })]
                    })
                },
                eW = e => {
                    let {
                        protocols: t
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: "mb-12",
                        children: [(0, l.jsx)(eL, {
                            length: 48,
                            color: "#BBBBBB",
                            vertical: !0
                        }), (0, l.jsx)(eH, {
                            protocols: t
                        })]
                    })
                };
            let eI = [{
                name: "Gut Health",
                icon: "/protocol-section/gut-health.svg",
                image: "/protocol-section/gut-health.png",
                areas: ["Microbiome Diversity", "Digestion", "Nutrient Absorption"]
            }, {
                name: "Male Hormones",
                icon: "/protocol-section/male-hormones.svg",
                image: "/protocol-section/male-hormones.png",
                areas: ["Testosterone", "Free Testosterone", "Thyroid"]
            }, {
                name: "Female Hormones",
                icon: "/protocol-section/female-hormones.svg",
                image: "/protocol-section/female-hormones.png",
                areas: ["Estrogen", "Progesterone", "Thyroid"]
            }, {
                name: "Aging",
                icon: "/protocol-section/ageing.svg",
                image: "/protocol-section/ageing.png",
                areas: ["Epigenetics", "Senescence", "Mitochondria"]
            }, {
                name: "Toxins",
                icon: "/protocol-section/toxins.svg",
                image: "/protocol-section/toxins.png",
                areas: ["Plastics", "Heavy Metals", "Mold"]
            }, {
                name: "Disease Risk",
                icon: "/protocol-section/disease-risk.svg",
                image: "/protocol-section/disease-risk.png",
                areas: ["Heart Disease", "Cancer", "And 100s More"]
            }, {
                name: "Body Composition",
                icon: "/protocol-section/body-composition.svg",
                image: "/protocol-section/body-composition.png",
                areas: ["Gain Muscle", "Lose Weight", "Grip Strength"]
            }, {
                name: "Sleep Optimization",
                icon: "/protocol-section/sleep-optimization.svg",
                image: "/protocol-section/sleep-optimization.png",
                areas: ["Sleep Quality", "Stress Level", "Nervous System Calibration"]
            }, {
                name: "Cognitive Health",
                icon: "/protocol-section/cognitive-health.svg",
                image: "/protocol-section/cognitive-health.png",
                areas: ["Focus", "Memory", "Mental Acuity"]
            }, {
                name: "Metabolic Health",
                icon: "/protocol-section/metabolic-health.svg",
                image: "/protocol-section/metabolic-health.png",
                areas: ["Energy", "HbA1c", "VO2 Max"]
            }];
            var eR = e => {
                    let {
                        protocol: t,
                        isCurrent: i
                    } = e;
                    return (0, l.jsxs)(S.E.div, {
                        className: "relative flex w-full flex-row",
                        animate: {
                            "--greyscale-progress": i ? 0 : 1
                        },
                        children: [(0, l.jsxs)(S.E.div, {
                            className: "font-sans-xl absolute right-20 -mt-1 flex h-full flex-row items-center gap-4 text-right leading-tight",
                            animate: {
                                opacity: i ? 1 : 0,
                                x: i ? 0 : 40,
                                transition: {
                                    duration: T.SLOW,
                                    ease: T.EASING
                                }
                            },
                            children: [(0, l.jsx)(S.E.div, {
                                animate: {
                                    opacity: i ? 1 : 0,
                                    x: i ? 0 : 10,
                                    transition: {
                                        duration: T.VERY_SLOW,
                                        ease: T.EASING,
                                        delay: 0
                                    }
                                },
                                children: t.name
                            }), (0, l.jsx)(eL, {
                                length: 12,
                                color: "#BBBBBB"
                            })]
                        }), (0, l.jsx)(S.E.div, {
                            animate: {
                                scale: i ? 1 : .6,
                                transition: {
                                    duration: T.NORMAL,
                                    ease: T.EASING
                                }
                            },
                            children: (0, l.jsx)("img", {
                                style: {
                                    filter: "grayscale(var(--greyscale-progress))"
                                },
                                className: "mb-2 rounded-xl",
                                src: t.image,
                                alt: "",
                                width: 64,
                                height: 64
                            })
                        }), (0, l.jsxs)(S.E.div, {
                            className: "font-sans-sm absolute left-20 -mt-1 flex h-full flex-row items-center text-left leading-none",
                            animate: {
                                opacity: i ? 1 : 0,
                                x: i ? 0 : -40,
                                transition: {
                                    duration: T.SLOW,
                                    ease: T.EASING,
                                    delay: i ? .2 : 0
                                }
                            },
                            children: [(0, l.jsx)(eL, {
                                length: 12,
                                color: "#BBBBBB"
                            }), (0, l.jsx)("div", {
                                className: "flex w-[30vw] flex-col gap-4 text-wrap border-l  border-l-[#BBB] pl-4",
                                children: t.areas.map((e, t) => (0, l.jsx)(S.E.div, {
                                    animate: {
                                        opacity: i ? 1 : 0,
                                        x: i ? 0 : -10,
                                        transition: {
                                            duration: T.SLOW,
                                            ease: T.EASING,
                                            delay: i ? T.FAST * t * .4 + .2 : 0
                                        }
                                    },
                                    children: e
                                }, t))
                            })]
                        })]
                    })
                },
                eP = e => {
                    let {
                        protocols: t
                    } = e, [i, s] = function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                            {
                                scrollY: t
                            } = (0, N.v)(),
                            [i, s] = D(e);
                        return [i, (0, P.H)(t, e => (e - s.top) / s.height)]
                    }(), [n, r] = (0, o.useState)(0);
                    return (0, E.W)(s, "change", e => {
                        r(Math.round((e + .5) * t.length))
                    }), (0, l.jsx)("div", {
                        className: "mt-32",
                        children: (0, l.jsx)("div", {
                            className: "flex flex-col items-center",
                            ref: i,
                            children: t.map((e, i) => {
                                let s = i === t.length - 1;
                                return (0, l.jsxs)("div", {
                                    className: "-z-10 mb-2",
                                    children: [(0, l.jsx)(eR, {
                                        protocol: e,
                                        isCurrent: n === i
                                    }), (0, l.jsx)(eL, {
                                        length: 8,
                                        color: s ? "" : "#BBBBBB",
                                        vertical: !0
                                    })]
                                }, i)
                            })
                        })
                    })
                },
                eO = e => {
                    let {
                        height: t,
                        color: i = "rgbrgba(255,255,255,1)"
                    } = e, s = (0, o.useMemo)(() => i.replace(/[\d.]+\)$/g, "0)"), [i]);
                    return (0, l.jsx)("div", {
                        className: "pointer-events-none relative h-0 w-full overflow-visible",
                        children: (0, l.jsx)("div", {
                            className: "w-full",
                            style: {
                                height: t,
                                backgroundImage: "linear-gradient(to bottom, ".concat(i, " 0%, ").concat(s, " 100%)")
                            }
                        })
                    })
                },
                eT = i(7476);
            let eG = ["Apolipoprotein B (Apo B)", "C-Reactive Protein (CRP)", "Thyroid-Stimulating Hormone (TSH)", "Testosterone", "Estrogen", "Uric Acid", "Homocysteine", "Hemoglobin A1c", "Vitamin D", "Mercury", "Cortisol", "HDL Cholesterol", "Lipoprotein (a)"];
            var eV = i(6993);
            let e_ = ["#F7791E", "#6268EB", "#35BE95", "#F71E1E"];
            var eD = e => {
                    let {
                        isVisible: t = !0
                    } = e, i = function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                            [t, i] = (0, o.useState)(0);
                        return (0, o.useEffect)(() => i(Math.random()), e), t
                    }([t]), s = (0, o.useMemo)(() => 0 == i ? eG : eG.sort(() => i - .5), [i]), n = (0, o.useMemo)(() => s.slice(0, 6), [s]), r = (0, o.useMemo)(() => s.slice(6, s.length), [s]), a = (0, o.useMemo)(() => new eV.L, []);
                    return (0, l.jsx)("div", {
                        className: "flex-column relative flex flex-col gap-2 py-16",
                        children: [n, r].map((e, s) => (0, l.jsx)(S.E.div, {
                            className: "relative flex flex-row justify-center gap-6",
                            initial: {
                                x: 0 === s ? "200%" : "-200%"
                            },
                            animate: {
                                x: t ? "0%" : 0 === s ? "200%" : "-200%",
                                transition: {
                                    duration: 1,
                                    ease: T.EASING_IN_OUT,
                                    delay: t ? .6 : 0
                                }
                            },
                            children: e.map((e, t) => {
                                let n = Math.floor(Math.abs(a.noise(i * s * t, 0) * e_.length)),
                                    r = t % 2 == 0 ? e_[n] : "#000000";
                                return (0, l.jsx)("div", {
                                    className: "font-mono-xl relative left-0 top-0 h-full w-full whitespace-nowrap bg-gradient-conic",
                                    style: {
                                        color: r
                                    },
                                    children: e
                                }, t)
                            })
                        }, s))
                    })
                },
                eY = e => {
                    let t = g(v.md),
                        i = (0, o.useRef)(),
                        s = (0, eT.Y)(i),
                        n = (0, o.useRef)(),
                        r = (0, eT.Y)(n);
                    return (0, l.jsxs)("section", {
                        className: "relative z-10 bg-white",
                        children: [(0, l.jsxs)(S.E.div, {
                            className: "z-10 mb-16 flex h-fit flex-col items-center bg-white pt-[72px]",
                            style: {
                                position: t ? "relative" : "sticky",
                                marginTop: t ? 0 : 100,
                                top: 0
                            },
                            children: [(0, l.jsxs)("div", {
                                className: "mb-16 flex flex-col items-center",
                                style: {
                                    display: t ? "block" : "none"
                                },
                                children: [(0, l.jsx)(eL, {
                                    length: 0,
                                    color: "#bbb",
                                    vertical: !0,
                                    head: 40
                                }), (0, l.jsx)(eL, {
                                    length: 170,
                                    color: "#bbb",
                                    vertical: !0,
                                    tail: 600
                                })]
                            }), (0, l.jsx)("h2", {
                                className: "font-sans-3xl mx-4 mb-6 max-w-[16ch] text-center lg:font-sans-2xl",
                                children: "Finally, healthcare that looks at the whole you"
                            }), (0, l.jsx)("p", {
                                className: "font-sans-lg mx-4 mb-6 max-w-[24ch] text-center opacity-50",
                                children: "Personalized programs to improve every aspect of your health."
                            }), (0, l.jsx)(eO, {
                                height: "64px"
                            })]
                        }), t && (0, l.jsx)(eW, {
                            protocols: eI
                        }), !t && (0, l.jsx)(eP, {
                            protocols: eI
                        }), (0, l.jsxs)("div", {
                            className: "-mt-4 flex flex-col items-center justify-center gap-8",
                            children: [(0, l.jsx)(eL, {
                                length: 48,
                                color: "#BBBBBB",
                                vertical: !0
                            }), (0, l.jsx)("div", {
                                ref: i,
                                children: (0, l.jsx)(eu, {
                                    children: (0, l.jsx)(X, {
                                        outline: !0,
                                        isVisible: s,
                                        children: "Join waitlist"
                                    })
                                })
                            }), (0, l.jsx)(eL, {
                                length: 48,
                                color: "#BBBBBB",
                                vertical: !0
                            })]
                        }), (0, l.jsx)("div", {
                            className: "mx-auto w-[80%]",
                            children: (0, l.jsx)(eL, {
                                length: "auto",
                                color: "#BBBBBB",
                                horizontal: !0
                            })
                        }), (0, l.jsx)("div", {
                            ref: n,
                            className: "w-full overflow-x-hidden",
                            children: (0, l.jsx)(eD, {
                                isVisible: r
                            })
                        }), (0, l.jsxs)("div", {
                            className: "mx-auto w-[80%]",
                            children: [(0, l.jsx)(eL, {
                                length: "auto",
                                color: "#BBBBBB",
                                horizontal: !0
                            }), (0, l.jsx)(eL, {
                                length: 200,
                                color: "#BBBBBB",
                                vertical: !0
                            })]
                        })]
                    })
                },
                eq = e => {
                    let {
                        mobileSrc: t,
                        desktopSrc: i,
                        isExpanded: s,
                        onSelect: n,
                        header: r,
                        description: a,
                        index: o
                    } = e;
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(S.E.div, {
                            className: "relative",
                            animate: {
                                height: s ? "4" == o ? 112 : 92 : 40
                            },
                            children: (0, l.jsxs)("div", {
                                className: "flex flex-col items-center gap-2 text-center",
                                children: [(0, l.jsx)(S.E.div, {
                                    className: "font-sans-xs h-0 text-nowrap xl:font-sans-sm xl:min-w-56",
                                    animate: {
                                        fontSize: s ? "32px" : "18px",
                                        color: s ? "#18181B" : "#696969",
                                        transition: {
                                            ease: T.EASING,
                                            duration: T.SLOW
                                        }
                                    },
                                    children: r
                                }), (0, l.jsx)(S.E.div, {
                                    className: "font-sans-sm mt-12 h-0 max-w-[700px] text-[#696969] xl:font-sans-sm xl:min-w-56",
                                    animate: {
                                        opacity: s ? 1 : 0,
                                        y: s ? 0 : -10,
                                        transition: {
                                            delay: s ? T.FAST : 0,
                                            duration: s ? T.SLOW : T.FAST,
                                            ease: T.EASING
                                        }
                                    },
                                    children: a
                                })]
                            })
                        }), (0, l.jsx)("button", {
                            onPointerEnter: () => n(),
                            className: "relative mt-2 flex flex-col items-center gap-6",
                            children: (0, l.jsxs)("div", {
                                className: "max-w-[600px]",
                                children: [(0, l.jsxs)("div", {
                                    className: "flex flex-row items-center",
                                    children: [(0, l.jsxs)(S.E.div, {
                                        className: "relative z-0 flex flex-col items-center justify-center overflow-hidden rounded-[20px]",
                                        initial: {
                                            width: 340,
                                            height: 160
                                        },
                                        animate: {
                                            width: s ? "auto" : 340,
                                            height: s ? "auto" : 160,
                                            transition: {
                                                ease: T.EASING,
                                                duration: T.SLOW
                                            }
                                        },
                                        children: [(0, l.jsx)(S.E.div, {
                                            className: "h-full w-full",
                                            children: (0, l.jsx)("img", {
                                                className: "absolute left-0 top-0 -z-10 h-full w-full object-cover",
                                                src: i,
                                                width: 340,
                                                height: 0,
                                                alt: ""
                                            })
                                        }), (0, l.jsx)(S.E.div, {
                                            className: "h-full max-w-[40vw]",
                                            animate: {
                                                opacity: s ? 1 : 0
                                            },
                                            children: (0, l.jsx)("img", {
                                                src: i,
                                                width: 830,
                                                height: 362,
                                                alt: ""
                                            })
                                        })]
                                    }), (0, l.jsxs)(S.E.div, {
                                        className: "absolute flex flex-row items-center gap-2 px-4",
                                        animate: {
                                            left: -100,
                                            transition: {
                                                ease: T.EASING,
                                                duration: T.SLOW
                                            }
                                        },
                                        children: [(0, l.jsx)("div", {
                                            className: "font-mono-xs flex h-[26px] items-center justify-center rounded-lg border border-zinc-900 p-2",
                                            style: {
                                                borderColor: s ? "#FC5F2B" : "#18181B",
                                                color: s ? "#FC5F2B" : "#18181B"
                                            },
                                            children: o
                                        }), (0, l.jsx)("div", {
                                            className: "w-6 border-t border-zinc-500",
                                            style: {
                                                borderColor: s ? "#FC5F2B" : "#18181B"
                                            }
                                        })]
                                    }), (0, l.jsxs)(S.E.div, {
                                        className: "absolute flex flex-row items-center gap-2 px-4",
                                        animate: {
                                            right: -100,
                                            transition: {
                                                ease: T.EASING,
                                                duration: T.SLOW
                                            }
                                        },
                                        children: [(0, l.jsx)("div", {
                                            className: "w-6 border-t border-zinc-500",
                                            style: {
                                                borderColor: s ? "#FC5F2B" : "#18181B"
                                            }
                                        }), (0, l.jsx)("div", {
                                            className: "font-mono-xs flex h-[26px] items-center justify-center rounded-lg border border-zinc-900 p-2",
                                            style: {
                                                borderColor: s ? "#FC5F2B" : "#18181B",
                                                color: s ? "#FC5F2B" : "#18181B"
                                            },
                                            children: o
                                        })]
                                    })]
                                }), (0, l.jsx)("div", {
                                    style: {
                                        display: "4" == o ? "none" : "block"
                                    },
                                    children: (0, l.jsx)(eL, {
                                        length: 16,
                                        color: "#bbb",
                                        vertical: !0
                                    })
                                })]
                            })
                        })]
                    })
                },
                eX = e => {
                    let {
                        slides: t
                    } = e, [i, s] = (0, o.useState)(0);
                    return (0, l.jsx)("div", {
                        className: "mt-12 flex w-full flex-col items-center gap-3 overflow-x-hidden",
                        children: t.map((e, t) => (0, l.jsx)(eq, {
                            index: "".concat(t + 1),
                            ...e,
                            isExpanded: i === t,
                            onSelect: () => s(t)
                        }, t))
                    })
                };
            (n = a || (a = {})).x = "x", n.y = "y";
            var eJ = function () {
                let e = (0, o.useRef)(!0);
                return e.current ? (e.current = !1, !0) : e.current
            };
            let eU = (e, t, i) => Math.round(-(0, k.u)(-i.totalSlidesWidth, 0, e) / i.totalScrollWidth * (t - 1)),
                eZ = (e, t, i) => -(0, k.u)(0, t - 1, e) * (i.slideWidth + i.gap),
                e$ = (0, o.createContext)({
                    index: 0,
                    isCurrent: !1,
                    currentSlide: 0,
                    dimensions: {
                        width: 0,
                        x: 0,
                        gap: 0
                    },
                    isPointerDown: !1,
                    scrollOffset: new b.Hg
                }),
                eQ = () => (0, o.useContext)(e$),
                eK = () => (function () {
                    let e = (0, o.useRef)(),
                        t = eJ();
                    null === e.current || t || Error("Internal function not ready after first render: Make sure the controller is connected to a child component. Or the child component has provided the function");
                    let i = t => {
                            e.current = t
                        },
                        s = e.current;
                    if (e.current) {
                        let t = Object.keys(e.current),
                            s = {};
                        return t.forEach(t => {
                            s[t] = function () {
                                let i = Array.prototype.slice.call(arguments, 0);
                                e.current[t].apply(null, i)
                            }
                        }), {
                            ...s,
                            exposeInternalFunctions: i
                        }
                    }
                    return {
                        ...s,
                        exposeInternalFunctions: i
                    }
                })();
            var e0 = e => {
                    let {
                        children: t,
                        controls: i,
                        onSlideChange: s = () => {}
                    } = e, [n, r] = (0, o.useState)(0), [a, c] = (0, o.useState)(!1), d = (0, p.$)(), [h, m] = D([]), x = o.Children.toArray(t), u = x.length, f = (0, o.useMemo)(() => {
                        let e = m.width,
                            t = e * (u - 1),
                            i = 0 * (u - 1);
                        return {
                            slideWidth: e,
                            gap: 0,
                            totalSlidesWidth: t,
                            totalGapSpacing: i,
                            totalScrollWidth: t + i
                        }
                    }, [m.width, u]), [g, v, w, j] = function (e) {
                        let {
                            maxDistance: t = 1 / 0,
                            canUseMouseWheel: i = !1,
                            direction: s = "x",
                            maxWheelDelta: n = 100,
                            responsiveness: r = .2,
                            dampingConst: a = 8,
                            dampingMargin: l = 1e3
                        } = e, c = (0, o.useRef)(), d = (0, y.c)(0), [h, m] = eN(d, {
                            min: -t,
                            max: 0,
                            responsiveness: r,
                            dampingConst: a,
                            dampingMargin: l
                        }), [x, u] = (0, o.useState)(!1), [f, g] = (0, o.useState)(!1);
                        (0, o.useEffect)(() => {
                            f || d.set((0, k.u)(-t, 0, h.get()))
                        }, [h, f, t, d]), (0, o.useEffect)(() => {
                            m || x || g(!1)
                        }, [m, x]);
                        let v = (0, p.$)(),
                            w = (0, o.useCallback)(e => d.get() + e, [d]);
                        return (0, o.useEffect)(() => {
                            let e = c.current,
                                t = !1,
                                i = 0,
                                n = e => {
                                    t = !0, i = "x" === s ? e.clientX : e.clientY, g(!0), u(!0)
                                },
                                r = e => {
                                    if (!t) return;
                                    let n = "x" === s ? e.clientX : e.clientY,
                                        r = w(n - i);
                                    d.set(r), i = n
                                },
                                a = e => {
                                    t = !1, u(!1)
                                },
                                l = e => {
                                    t = !1, u(!1)
                                };
                            return e.addEventListener("pointerdown", n), window.addEventListener("pointerup", a), window.addEventListener("pointermove", r), window.addEventListener("pointercancel", l), () => {
                                e.removeEventListener("pointerdown", n), window.removeEventListener("pointerup", a), window.removeEventListener("pointermove", r), window.removeEventListener("pointercancel", l)
                            }
                        }, [c, t, v, s, w, d]), (0, o.useEffect)(() => {
                            if (!i) return;
                            let e = c.current,
                                t = e => {
                                    let t = "x" === s ? e.deltaX : e.deltaY,
                                        i = -(0, k.u)(-n, n, 1 * t);
                                    d.set(w(i)), g(!0)
                                };
                            return e.addEventListener("wheel", t, {
                                passive: !0
                            }), () => {
                                e.removeEventListener("wheel", t)
                            }
                        }, [t, i, v.width, v.height, c, s, n, d, w]), [c, h, d, f]
                    }({
                        maxDistance: f.totalScrollWidth,
                        canUseMouseWheel: !0,
                        responsiveness: .17,
                        dampingConst: 6
                    }), [b, N] = (0, o.useState)(!1);
                    (0, o.useEffect)(() => {
                        j && N(!1)
                    }, [j]), (0, o.useEffect)(() => {
                        if (!i) return;
                        let e = e => {
                            w.set(eZ(e, u, f)), N(!0)
                        };
                        i.exposeInternalFunctions({
                            next: () => e(n + 1),
                            prev: () => e(n - 1),
                            goto: e
                        })
                    }, [i, n, w, f, u]), (0, o.useEffect)(() => {
                        s(n)
                    }, [n, s]);
                    let C = (0, o.useMemo)(() => g.current ? g.current.getBoundingClientRect().width : d.width, [d.width, g]),
                        A = (0, o.useMemo)(() => (C - f.slideWidth) / 2, [C, f.slideWidth]),
                        F = !j && !b;
                    (0, o.useEffect)(() => {
                        F && w.set(eZ(n, u, f))
                    }, [n, F, u, f, w]), (0, o.useEffect)(() => {
                        if (a || !j) return;
                        let e = v.getVelocity() > 0 ? 1 : -1,
                            t = eU(v.get() + e * Math.abs(.2 * v.getVelocity()), u, f);
                        w.set(eZ(t, u, f))
                    }, [a, j, v, u, f, w]), (0, E.W)(v, "change", e => {
                        r(eU(e, u, f))
                    });
                    let L = (0, P.H)(v, e => A + e);
                    return (0, l.jsx)("div", {
                        onPointerDown: e => {
                            c(!0)
                        },
                        onPointerUp: () => {
                            c(!1)
                        },
                        ref: g,
                        className: "w-full touch-pan-y overflow-x-hidden",
                        style: {
                            cursor: a ? "grabbing" : "grab"
                        },
                        children: (0, l.jsx)(S.E.div, {
                            style: {
                                x: L,
                                gap: f.gap
                            },
                            className: "pointer-events-none flex select-none flex-row items-center",
                            children: x.map((e, t) => (0, l.jsx)("div", {
                                className: "flex-shrink-0",
                                ref: h,
                                children: (0, l.jsx)(e$.Provider, {
                                    value: {
                                        index: t,
                                        isCurrent: n === t,
                                        currentSlide: n,
                                        isPointerDown: a,
                                        scrollOffset: v,
                                        dimensions: {
                                            gap: f.gap,
                                            x: f.gap * t + f.slideWidth * t,
                                            width: f.slideWidth
                                        }
                                    },
                                    children: e
                                })
                            }, t))
                        })
                    })
                },
                e1 = e => {
                    let {
                        children: t,
                        color: i,
                        elevation: s = 0,
                        lightSourceOffset: n
                    } = e, r = (0, y.c)(0), a = (0, P.H)(n || r, [-100, 0, 100], [2 * s, 1 * s, 2 * s], {
                        clamp: !1
                    });
                    return (0, l.jsxs)("div", {
                        className: "relative",
                        children: [t, (0, l.jsx)("div", {
                            className: "absolute -bottom-3 flex w-full",
                            children: (0, l.jsx)(S.E.div, {
                                className: "-z-10 mx-auto h-16 w-[70%] blur-2xl",
                                initial: {
                                    opacity: 0
                                },
                                style: {
                                    backgroundColor: i,
                                    x: n || r,
                                    scaleX: a
                                },
                                animate: {
                                    opacity: 1,
                                    y: s / 1 * 100 - 100,
                                    scale: s,
                                    transition: {
                                        ease: T.EASING,
                                        duration: T.SLOW
                                    }
                                }
                            })
                        })]
                    })
                },
                e2 = e => {
                    let {
                        slide: t
                    } = e, {
                        isCurrent: i,
                        isPointerDown: s,
                        scrollOffset: n,
                        dimensions: r
                    } = eQ(), a = s ? .98 : 1, o = r.x, c = r.x + r.width, d = (0, P.H)(n, [-o, -c], [0, 1], {
                        clamp: !1
                    }), h = (0, P.H)(d, [-1, 0, 1], [70, 0, -70]);
                    return (0, l.jsx)(e1, {
                        color: t.color,
                        elevation: i ? s ? .9 : 1 : 0,
                        lightSourceOffset: h,
                        children: (0, l.jsxs)(S.E.div, {
                            className: "relative mb-32 h-[100vw] max-h-[500px] w-[70vw] overflow-hidden rounded-3xl sm:w-[60vw]",
                            initial: {
                                opacity: 0,
                                scale: i ? 1 : .7
                            },
                            animate: {
                                opacity: 1,
                                scale: i ? 1 * a : .7 * a,
                                transition: {
                                    duration: T.SLOW,
                                    ease: T.EASING
                                }
                            },
                            children: [(0, l.jsx)(S.E.div, {
                                className: "h-full w-full",
                                children: (0, l.jsx)("img", {
                                    className: "h-full w-full object-cover",
                                    src: t.mobileSrc,
                                    width: 282,
                                    height: 122,
                                    alt: ""
                                })
                            }), (0, l.jsxs)(S.E.div, {
                                animate: {
                                    opacity: i ? 1 : 0,
                                    transition: {
                                        ease: T.EASING,
                                        duration: T.VERY_SLOW
                                    }
                                },
                                className: "absolute bottom-0 left-0 right-0 z-10 m-2 rounded-2xl border border-[rgba(255,255,255,.2)] bg-blur p-6 text-white backdrop-blur-lg",
                                children: [(0, l.jsx)("h3", {
                                    className: "font-mono-xs mb-4",
                                    children: t.header
                                }), (0, l.jsx)("p", {
                                    className: "font-sans-sm opacity-70",
                                    children: t.description
                                })]
                            })]
                        })
                    })
                };
            let e5 = e => {
                    let {
                        currentSlide: t,
                        slides: i
                    } = e, [s, n] = D([]);
                    return (0, l.jsx)(S.E.div, {
                        className: "relative left-1/2 flex flex-row items-center justify-center gap-10",
                        animate: {
                            x: -t * n.width / (i.length - 1),
                            transition: {
                                duration: T.FAST,
                                ease: T.EASING
                            }
                        },
                        ref: s,
                        children: i.map((e, i) => (0, l.jsx)(e4, {
                            isCurrent: t === i,
                            index: i
                        }, i))
                    })
                },
                e4 = e => {
                    let {
                        isCurrent: t,
                        index: i
                    } = e;
                    return (0, l.jsx)("div", {
                        className: "h-0 w-0 -translate-x-4",
                        children: (0, l.jsx)(S.E.div, {
                            className: "flex h-8 w-8 items-center justify-center rounded-lg border p-2",
                            initial: {
                                borderWidth: t ? 1 : 3,
                                opacity: 0
                            },
                            animate: {
                                borderColor: t ? "#FC5F2B" : "#18181B",
                                color: t ? "#FC5F2B" : "#18181B",
                                borderWidth: t ? 1 : 3,
                                scale: t ? 1 : .3,
                                opacity: 1,
                                transition: {
                                    duration: T.NORMAL,
                                    ease: T.EASING
                                }
                            },
                            children: (0, l.jsx)(S.E.div, {
                                className: "font-mono-sm leading-none",
                                animate: {
                                    opacity: t ? 1 : 0
                                },
                                children: i + 1
                            })
                        })
                    })
                };
            var e3 = e => {
                let {
                    slides: t
                } = e, [i, s] = (0, o.useState)(0), n = eK();
                return (0, l.jsxs)("div", {
                    className: "flex w-full flex-col pt-12",
                    children: [(0, l.jsx)(e0, {
                        controls: n,
                        onSlideChange: s,
                        children: t.map((e, t) => (0, l.jsx)(e2, {
                            slide: e
                        }, t))
                    }), (0, l.jsxs)("div", {
                        className: "pointer-events-none mx-auto -mt-24 flex h-24 flex-col items-center",
                        children: [(0, l.jsx)("div", {
                            className: "mb-4 h-8 w-[1px] bg-[#FC5F2B] opacity-40"
                        }), (0, l.jsx)(e5, {
                            currentSlide: i,
                            slides: t
                        })]
                    })]
                })
            };
            let e6 = [{
                mobileSrc: "/baseline-section/baseline-1-m.png",
                desktopSrc: "/baseline-section/baseline-1.png",
                header: "Test your whole body and visualize all your data.",
                description: "Hormones, thyroid, heart, toxins, genetics, microbiome, cancer risk, wearables, & more.",
                color: "#063D2A"
            }, {
                mobileSrc: "/baseline-section/baseline-2-m.png",
                desktopSrc: "/baseline-section/baseline-2.png",
                header: "Get an annual roadmap so you know exactly what to do.",
                description: "Go from in the dark to in control – we’ll show you how to improve every aspect of your health.",
                color: "#B9431C"
            }, {
                mobileSrc: "/baseline-section/baseline-3-m.png",
                desktopSrc: "/baseline-section/baseline-3.png",
                header: "Access your private concierge doctor.",
                description: "Text your health concierge at any time, from help with orders and scheduling to questions and coaching.",
                color: "#12495B"
            }, {
                mobileSrc: "/baseline-section/baseline-4-m.png",
                desktopSrc: "/baseline-section/baseline-4.png",
                header: "Everything you need in one place.",
                description: "Save 1,000s of hours on research. Get the best health products, tests, & services at insider prices. New additions every week",
                color: "#4E1308"
            }];
            var e9 = function (e) {
                    let {} = e, t = g(v.lg);
                    return (0, l.jsxs)("section", {
                        className: "relative z-10 mt-4 flex flex-col items-center bg-white",
                        children: [(0, l.jsx)(eL, {
                            length: t ? 288 : 144,
                            color: "#bbb",
                            vertical: !0,
                            tail: 40
                        }), (0, l.jsx)("div", {
                            className: "font-mono-sm mx-4 mb-4 mt-16 text-center",
                            children: "How it works"
                        }), (0, l.jsx)("h2", {
                            className: "font-sans-3xl mx-4 mb-6 max-w-[17ch] text-center lg:font-sans-2xl",
                            children: "An all-in-one health membership, for people who want more"
                        }), (0, l.jsx)(eL, {
                            length: 40,
                            color: "#bbb",
                            vertical: !0,
                            tail: 40
                        }), t && (0, l.jsx)(eX, {
                            slides: e6
                        }), !t && (0, l.jsx)(e3, {
                            slides: e6
                        }), (0, l.jsx)(eL, {
                            length: t ? 200 : 100,
                            color: "#bbb",
                            vertical: !0,
                            tail: 40
                        })]
                    })
                },
                e8 = i(3194),
                e7 = i(9805);
            let te = (0, o.createContext)({
                    currentPage: 0,
                    setCurrentPage: e => {},
                    currentBottonBounds: {
                        offsetX: 0,
                        offsetY: 0,
                        width: 0,
                        height: 0
                    },
                    setCurrentButtonBounds: e => {},
                    setCurrentColor: e => {}
                }),
                tt = e => {
                    let {
                        children: t,
                        onChange: i,
                        currentPage: s = 0
                    } = e, [n, r] = (0, o.useState)(s), [a, c] = D([]), [d, h] = (0, o.useState)({
                        offsetX: 0,
                        offsetY: 0,
                        width: 0,
                        height: 0
                    });
                    (0, o.useEffect)(() => {
                        r(s)
                    }, [s]);
                    let [m, x] = (0, o.useState)("#000"), u = (0, O.q)(0, {
                        stiffness: 1500,
                        damping: 100
                    }), p = (0, P.H)(u, e => Math.round(e)), f = (0, e7._)(), g = (0, e7._)();
                    return (0, o.useEffect)(() => {
                        let e = {
                            width: Math.round(d.width),
                            x: Math.round(d.offsetX - c.left)
                        };
                        u.set(e.x), f.start({
                            width: e.width,
                            transition: {
                                duration: T.NORMAL,
                                ease: T.EASING
                            }
                        }), g.start({
                            width: e.width,
                            backgroundColor: m,
                            transition: {
                                duration: T.NORMAL,
                                ease: T.EASING
                            }
                        })
                    }, [g, c, d, f, u, m]), (0, o.useEffect)(() => {
                        null == i || i(n)
                    }, [n, i]), (0, l.jsx)(te.Provider, {
                        value: {
                            currentPage: n,
                            setCurrentPage: r,
                            currentBottonBounds: d,
                            setCurrentButtonBounds: h,
                            setCurrentColor: x
                        },
                        children: (0, l.jsxs)("div", {
                            className: "relative w-fit rounded-full border border-[rgba(0,0,0,.05)] bg-[#fff] px-1 py-1",
                            ref: a,
                            children: [(0, l.jsx)(S.E.div, {
                                className: "absolute left-0 top-6 -z-20 h-full w-full rounded-full bg-zinc-700 opacity-10 blur-lg"
                            }), (0, l.jsx)(S.E.div, {
                                className: "mix-blend-invert absolute left-0 top-2 -z-10 h-full rounded-full bg-vermilion-900 opacity-50 blur-xl",
                                animate: g,
                                style: {
                                    x: p
                                }
                            }), (0, l.jsx)(S.E.div, {
                                className: "absolute bottom-1 left-0 top-1 z-0 rounded-full bg-vermilion-900",
                                animate: g,
                                style: {
                                    x: p
                                }
                            }), (0, l.jsxs)("div", {
                                className: "relative flex",
                                children: [(0, l.jsx)(S.E.div, {
                                    className: "absolute inset-0 h-full backdrop-invert",
                                    animate: f,
                                    style: {
                                        x: p,
                                        zIndex: 0
                                    }
                                }), (0, l.jsx)("div", {
                                    className: "flex",
                                    style: {
                                        zIndex: 1
                                    },
                                    children: t
                                }), (0, l.jsx)(S.E.div, {
                                    className: "absolute inset-0 h-full backdrop-invert",
                                    animate: f,
                                    style: {
                                        x: p,
                                        zIndex: 3
                                    }
                                })]
                            })]
                        })
                    })
                },
                ti = e => {
                    let {
                        children: t,
                        pageIndex: i,
                        color: s = "#000"
                    } = e, {
                        currentPage: n,
                        setCurrentPage: r,
                        setCurrentColor: a,
                        setCurrentButtonBounds: c
                    } = (0, o.useContext)(te), [d, h] = D([]), m = n === i;
                    return (0, o.useEffect)(() => {
                        0 === i && (r(0), a(s), c({
                            offsetX: h.x,
                            offsetY: h.y,
                            width: h.width,
                            height: h.height
                        }))
                    }, []), (0, o.useEffect)(() => {
                        m && (a(s), c({
                            offsetX: h.x,
                            offsetY: h.y,
                            width: h.width,
                            height: h.height
                        }))
                    }, [h.height, h.width, h.x, h.y, m, c, s, a]), (0, l.jsx)(S.E.button, {
                        ref: d,
                        className: "font-sans-sm relative flex flex-row items-center gap-2 rounded-full px-4 py-3 leading-none text-zinc-900 duration-300 hover:opacity-30",
                        animate: {
                            color: m ? "black" : "",
                            "--invert-color": m ? 1 : 0
                        },
                        whileTap: {
                            scale: .95
                        },
                        onClick: () => {
                            r(i)
                        },
                        children: t
                    })
                },
                ts = () => (0, l.jsxs)("svg", {
                    width: "12",
                    height: "12",
                    viewBox: "0 0 12 12",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsx)("g", {
                        "clip-path": "url(#clip0_3214_52)",
                        children: (0, l.jsx)("path", {
                            d: "M0 4.85106L6 0L12 4.85106V12H0L0 4.85106Z",
                            fill: "black"
                        })
                    }), (0, l.jsx)("defs", {
                        children: (0, l.jsx)("clipPath", {
                            id: "clip0_3214_52",
                            children: (0, l.jsx)("rect", {
                                width: "12",
                                height: "12",
                                fill: "black"
                            })
                        })
                    })]
                }),
                tn = () => (0, l.jsxs)("svg", {
                    width: "12",
                    height: "12",
                    viewBox: "0 0 12 12",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsxs)("g", {
                        "clip-path": "url(#clip0_3214_53)",
                        children: [(0, l.jsx)("rect", {
                            y: "6.3999",
                            width: "5.60009",
                            height: "5.60009",
                            rx: "0.686508",
                            fill: "black"
                        }), (0, l.jsx)("rect", {
                            width: "5.59992",
                            height: "5.59992",
                            rx: "0.686508",
                            fill: "black"
                        }), (0, l.jsx)("rect", {
                            x: "6.40039",
                            y: "6.3999",
                            width: "5.60009",
                            height: "5.60009",
                            rx: "0.686508",
                            fill: "black"
                        }), (0, l.jsx)("rect", {
                            x: "6.40039",
                            width: "5.60009",
                            height: "5.60009",
                            rx: "0.686508",
                            fill: "black"
                        })]
                    }), (0, l.jsx)("defs", {
                        children: (0, l.jsx)("clipPath", {
                            id: "clip0_3214_53",
                            children: (0, l.jsx)("rect", {
                                width: "12",
                                height: "12",
                                fill: "black"
                            })
                        })
                    })]
                }),
                tr = () => (0, l.jsxs)("svg", {
                    width: "12",
                    height: "12",
                    viewBox: "0 0 12 12",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsx)("g", {
                        "clip-path": "url(#clip0_3214_65)",
                        children: (0, l.jsx)("path", {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M8.29668 11.5447C7.56859 11.8463 6.78808 12.001 6 12C5.21192 12.001 4.43142 11.8463 3.70333 11.5447C2.97524 11.2431 2.31394 10.8006 1.7574 10.2426C1.19941 9.68607 0.756904 9.02477 0.45531 8.29668C0.153717 7.56859 -0.00101608 6.78808 5.02096e-06 6C-0.000999644 5.21192 0.153741 4.43142 0.455333 3.70333C0.756926 2.97524 1.19943 2.31394 1.7574 1.7574C2.31394 1.19943 2.97524 0.756926 3.70333 0.455333C4.43142 0.153741 5.21192 -0.000999644 6 5.02096e-06C6.78808 -0.00101608 7.56859 0.153717 8.29668 0.45531C9.02477 0.756904 9.68607 1.19941 10.2426 1.7574C10.8006 2.31394 11.2431 2.97524 11.5447 3.70333C11.8463 4.43142 12.001 5.21192 12 6C12.001 6.78808 11.8463 7.56859 11.5447 8.29668C11.2431 9.02477 10.8006 9.68607 10.2426 10.2426C9.68607 10.8006 9.02477 11.2431 8.29668 11.5447ZM9.49189 4.74129C9.81633 4.41685 9.81633 3.89084 9.49189 3.5664C9.16745 3.24197 8.64144 3.24197 8.317 3.5664L5.21214 6.67127L3.95343 5.41256C3.62899 5.08812 3.10298 5.08812 2.77854 5.41256C2.45411 5.73699 2.45411 6.26301 2.77854 6.58744L4.6247 8.4336C4.94913 8.75803 5.47515 8.75803 5.79958 8.4336L9.49189 4.74129Z",
                            fill: "black"
                        })
                    }), (0, l.jsx)("defs", {
                        children: (0, l.jsx)("clipPath", {
                            id: "clip0_3214_65",
                            children: (0, l.jsx)("rect", {
                                width: "12",
                                height: "12",
                                fill: "black"
                            })
                        })
                    })]
                }),
                ta = () => (0, l.jsxs)("svg", {
                    width: "12",
                    height: "12",
                    viewBox: "0 0 12 12",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsx)("rect", {
                        x: "1",
                        y: "3.62646",
                        width: "3.14281",
                        height: "8.15921",
                        rx: "0.686508",
                        fill: "black"
                    }), (0, l.jsx)("rect", {
                        x: "4.92773",
                        width: "3.14281",
                        height: "11.7855",
                        rx: "0.686508",
                        fill: "black"
                    }), (0, l.jsx)("rect", {
                        x: "8.85742",
                        y: "3.62646",
                        width: "3.14281",
                        height: "8.15921",
                        rx: "0.686508",
                        fill: "black"
                    })]
                });
            var tl = e => {
                let {
                    onChange: t,
                    currentPage: i
                } = e;
                return (0, l.jsxs)(tt, {
                    onChange: t,
                    currentPage: i,
                    children: [(0, l.jsxs)(ti, {
                        pageIndex: 0,
                        color: "#FF68DE",
                        children: [(0, l.jsx)(ts, {}), (0, l.jsx)("div", {
                            className: "hidden md:block",
                            children: "Home"
                        })]
                    }), (0, l.jsxs)(ti, {
                        pageIndex: 1,
                        color: "#FC5F2B",
                        children: [(0, l.jsx)(tn, {}), (0, l.jsx)("div", {
                            className: "hidden md:block",
                            children: "Services"
                        })]
                    }), (0, l.jsxs)(ti, {
                        pageIndex: 2,
                        color: "#11C182",
                        children: [(0, l.jsx)(tr, {}), (0, l.jsx)("div", {
                            className: "hidden md:block",
                            children: "Action Plan"
                        })]
                    }), (0, l.jsxs)(ti, {
                        pageIndex: 3,
                        color: "#F7861E",
                        children: [(0, l.jsx)(ta, {}), (0, l.jsx)("div", {
                            className: "hidden md:block",
                            children: "Data"
                        })]
                    }), (0, l.jsxs)(ti, {
                        pageIndex: 4,
                        color: "#3F3F46",
                        children: [(0, l.jsxs)(S.E.div, {
                            className: "flex flex-row",
                            animate: {
                                filter: "invert(var(--invert-color))"
                            },
                            children: [(0, l.jsx)("img", {
                                className: "-mr-2 rounded-full border border-[#F0EAE6]",
                                src: "/doctor-icon-1.png",
                                alt: "",
                                width: 13,
                                height: 13
                            }), (0, l.jsx)("img", {
                                className: "rounded-full border border-[#F0EAE6]",
                                src: "/doctor-icon-2.png",
                                alt: "",
                                width: 13,
                                height: 13
                            })]
                        }), (0, l.jsx)("div", {
                            className: "hidden md:block",
                            children: "Doctors"
                        })]
                    })]
                })
            };

            function to(e, t, i) {
                return (0, P.H)(e, e => t ? e : i)
            }
            var tc = e => {
                let {
                    children: t,
                    scale: i,
                    glareOpacity: s,
                    canInteract: n
                } = e, r = (0, o.useRef)(), a = _(V((0, eT.Y)(r), r)), c = (0, p.$)(), d = to(a.x, n, 0), h = to(a.y, n, 0), m = (0, P.H)(d, [-1, 1], [-10, 10]), x = (0, P.H)(h, [-1, 1], [10, -10]), u = .3 * c.width, f = (0, P.H)(m, [-10, 10], [u - c.width, -u - c.width]), g = (0, P.H)(x, [-10, 10], [-u - c.height, u - c.height]);
                return (0, l.jsxs)(S.E.div, {
                    className: "relative z-10 h-fit",
                    style: {
                        rotateY: eS.G6 ? "0" : m,
                        rotateX: eS.G6 ? "0" : x,
                        x: 0,
                        transformStyle: eS.G6 ? "flat" : "preserve-3d",
                        transformPerspective: eS.G6 ? 0 : "2000px",
                        transformOrigin: "center center",
                        transition: "transform 1s cubic-bezier(0.16, 1, 0.3, 1)"
                    },
                    ref: r,
                    children: [(0, l.jsx)("div", {
                        className: "absolute inset-0 grid grid-cols-1 grid-rows-1 px-[0.3%] py-[0.4%]",
                        children: (0, l.jsx)(S.E.div, {
                            className: "relative overflow-hidden rounded-ipad-outer md:rounded-ipad-outer-md",
                            style: {
                                scale: i
                            },
                            children: (0, l.jsx)(S.E.div, {
                                style: {
                                    minWidth: "300%",
                                    opacity: s,
                                    y: eS.G6 ? "0" : g,
                                    x: eS.G6 ? "0" : f,
                                    transition: "transform 1s cubic-bezier(0.16, 1, 0.3, 1)"
                                },
                                className: "relative inset-0 left-[100%] top-[50vw]",
                                children: (0, l.jsx)("img", {
                                    className: "w-full",
                                    src: "/ipad-section/glare-edges.png",
                                    width: 4e3,
                                    height: 3e3,
                                    alt: ""
                                })
                            })
                        })
                    }), (0, l.jsx)("div", {
                        className: "absolute inset-0 z-10 overflow-hidden rounded-full p-[5%]",
                        children: (0, l.jsx)("div", {
                            className: "h-full w-full bg-black"
                        })
                    }), (0, l.jsx)("div", {
                        className: "absolute inset-0 grid grid-cols-1 grid-rows-1 px-[0.6%] py-[0.7%]",
                        children: (0, l.jsx)(S.E.div, {
                            className: "relative overflow-hidden rounded-ipad-inner bg-black md:rounded-ipad-inner-md",
                            style: {
                                scale: i
                            }
                        })
                    }), t, (0, l.jsx)("div", {
                        className: "absolute inset-0 grid grid-cols-1 grid-rows-1 p-[0.3%] pl-[0.5%] pt-[0.5%]",
                        children: (0, l.jsx)(S.E.div, {
                            className: "relative z-20 overflow-hidden rounded-ipad-inner md:rounded-ipad-inner-md",
                            style: {
                                scale: i
                            },
                            children: (0, l.jsx)(S.E.div, {
                                style: {
                                    minWidth: "300%",
                                    opacity: s,
                                    y: eS.G6 ? "0" : g,
                                    x: eS.G6 ? "0" : f,
                                    transition: "transform 1s cubic-bezier(0.16, 1, 0.3, 1)"
                                },
                                className: "relative inset-0 left-[100%] top-[50vw]",
                                children: (0, l.jsx)("img", {
                                    alt: "",
                                    className: "w-full",
                                    src: "/ipad-section/glare.png",
                                    width: 4e3,
                                    height: 3e3
                                })
                            })
                        })
                    }), (0, l.jsx)(S.E.div, {
                        className: "relative h-fit w-[70vw] max-w-[calc(90vw-5em)] md:w-[90vh]",
                        style: {
                            zIndex: -1,
                            scale: i
                        },
                        children: (0, l.jsx)("img", {
                            src: "/ipad-section/ipad.png",
                            className: "",
                            alt: "",
                            width: 3e3,
                            height: 1e3
                        })
                    })]
                })
            };
            let td = [{
                src: "/ipad-section/screen-1.png"
            }, {
                src: "/ipad-section/screen-2.png"
            }, {
                src: "/ipad-section/screen-3.png"
            }, {
                src: "/ipad-section/screen-4.png"
            }, {
                src: "/ipad-section/screen-5.png"
            }];
            var th = e => {
                    let {
                        playbackConst: t,
                        children: i,
                        headline: s,
                        onLowPowerModeDetected: n
                    } = e, {
                        width: r
                    } = (0, p.$)(), a = (0, o.useRef)(), {
                        videoRef: c,
                        videoProgress: d,
                        isVideoReady: h,
                        duration: m
                    } = z(), x = $(d, e => e > 0), u = C(c);
                    (0, o.useEffect)(() => {
                        u && (null == n || n())
                    }, [u, n]);
                    let {
                        scrollYProgress: f
                    } = (0, N.v)({
                        target: a
                    });
                    (0, E.W)(f, "change", e => {
                        d.set(2.3 * e)
                    });
                    let g = (0, P.H)(f, [.4, 1], [10, 1], {
                            ease: (0, e8._)(.16, 1, .3, 1)
                        }),
                        v = (0, P.H)(f, [.4, .7], ["-50%", "-20%"], {
                            ease: (0, e8._)(.16, 1, .3, 1)
                        }),
                        w = (0, P.H)(f, [.7, 1], [0, 1], {
                            ease: (0, e8._)(.16, 1, .3, 1)
                        }),
                        j = (0, P.H)(f, [.8, 1], [0, 1], {
                            ease: (0, e8._)(.16, 1, .3, 1)
                        }),
                        b = (0, P.H)(f, [.1, .2], [0, 1]),
                        y = $(w, e => e >= .8),
                        [k, A] = (0, o.useState)(0);
                    return (0, o.useEffect)(() => {
                        y || A(0)
                    }, [y]), (0, l.jsx)(S.E.div, {
                        className: "relative mt-[-200vh] flex w-full items-start bg-white",
                        initial: {
                            opacity: 0
                        },
                        style: {
                            opacity: b,
                            height: t * m * 1,
                            pointerEvents: x ? "all" : "none"
                        },
                        ref: a,
                        children: (0, l.jsxs)("div", {
                            className: "sticky top-0 -mb-40 flex h-screen w-full flex-col items-center justify-center overflow-hidden lg:mb-0",
                            children: [(0, l.jsx)(S.E.h2, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: y ? 1 : 0,
                                    transition: {
                                        duration: y ? T.VERY_SLOW : T.NORMAL,
                                        ease: "linear"
                                    }
                                },
                                className: "font-sans-3xl absolute mx-4 my-12 mb-32 max-w-[20ch] translate-y-[-35vw] text-center lg:font-sans-2xl lg:font-sans-2xl md:translate-y-[-40vh] lg:mb-0",
                                children: s
                            }), (0, l.jsxs)(tc, {
                                scale: g,
                                glareOpacity: j,
                                canInteract: y,
                                children: [(0, l.jsx)(S.E.div, {
                                    className: "absolute inset-0 z-20 overflow-hidden p-[3%] pr-[3%]",
                                    style: {
                                        opacity: w,
                                        scale: g
                                    },
                                    children: (0, l.jsx)("div", {
                                        className: "relative",
                                        children: td.map((e, t) => {
                                            let {
                                                src: i
                                            } = e;
                                            return (0, l.jsx)(S.E.div, {
                                                className: "absolute inset-0",
                                                children: (0, l.jsx)(S.E.div, {
                                                    animate: {
                                                        opacity: k === t ? 1 : 0
                                                    },
                                                    children: (0, l.jsx)("img", {
                                                        className: "",
                                                        src: i,
                                                        alt: "",
                                                        width: 3e3,
                                                        height: 0
                                                    })
                                                })
                                            }, t)
                                        })
                                    })
                                }), (0, l.jsx)(S.E.div, {
                                    className: "absolute left-[50%] top-[50%] z-10 h-fit w-[50%]",
                                    animate: {
                                        opacity: 0 === k ? 1 : 0
                                    },
                                    style: {
                                        x: "-50%",
                                        y: v,
                                        scale: g
                                    },
                                    children: (0, l.jsx)("video", {
                                        className: "w-full object-cover",
                                        autobuffer: "autobuffer",
                                        disablePictureInPicture: !0,
                                        ref: c,
                                        preload: "preload",
                                        playsInline: !0,
                                        loop: !0,
                                        muted: !0,
                                        autoPlay: !0,
                                        children: i
                                    })
                                })]
                            }), (0, l.jsxs)(S.E.div, {
                                className: "absolute bottom-[15%] z-[50] flex translate-y-[30vw] flex-col items-center gap-[3vh] lg:bottom-[3vh] lg:top-auto lg:translate-y-0",
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: y ? 1 : 0,
                                    y: y ? 0 : 30,
                                    transition: {
                                        duration: y ? T.VERY_SLOW : T.NORMAL,
                                        ease: T.EASING,
                                        delay: y ? T.NORMAL : 0
                                    }
                                },
                                children: [(0, l.jsx)("div", {
                                    children: (0, l.jsx)(tl, {
                                        currentPage: k,
                                        onChange: A
                                    })
                                }), (0, l.jsx)("p", {
                                    className: "font-sans-lg mx-4 max-w-[32ch] text-center opacity-50",
                                    children: "Combining whole-body testing, leading doctors and personalized health programs."
                                })]
                            })]
                        })
                    })
                },
                tm = e => {
                    let [t, i] = (0, o.useState)(!1);
                    return (0, l.jsxs)("section", {
                        className: "relative z-10 flex w-full",
                        children: [!t && (0, l.jsx)(th, {
                            playbackConst: 400,
                            onLowPowerModeDetected: () => i(!0),
                            headline: "The most complete picture of your health you’ve ever had",
                            children: (0, l.jsx)("source", {
                                type: 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',
                                src: "/ipad-section/transition.mp4"
                            })
                        }), t && (0, l.jsx)("div", {})]
                    })
                },
                tx = i(5127),
                tu = i(8298),
                tp = e => {
                    let {
                        active: t,
                        size: i
                    } = e;
                    return (0, l.jsx)("div", {
                        children: !0 === t ? (0, l.jsx)("div", {
                            className: "h-3 w-3 bg-[#FC5F2B]",
                            style: {
                                width: i,
                                height: i
                            }
                        }) : (0, l.jsx)("div", {
                            className: "h-3 w-3 border border-solid border-[#bbb]",
                            style: {
                                width: i,
                                height: i
                            }
                        })
                    })
                },
                tf = e => {
                    let {
                        cornerSize: t,
                        cornerColor: i
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: "pointer-events-none absolute left-0 top-0 h-full w-full",
                        children: [(0, l.jsx)("div", {
                            className: "absolute left-0 top-0",
                            children: (0, l.jsx)(R, {
                                topLeft: !0,
                                size: t,
                                color: i
                            })
                        }), (0, l.jsx)("div", {
                            className: "absolute right-0 top-0",
                            children: (0, l.jsx)(R, {
                                topRight: !0,
                                size: t,
                                color: i
                            })
                        }), (0, l.jsx)("div", {
                            className: "absolute bottom-0 left-0",
                            children: (0, l.jsx)(R, {
                                bottomLeft: !0,
                                size: t,
                                color: i
                            })
                        }), (0, l.jsx)("div", {
                            className: "absolute bottom-0 right-0",
                            children: (0, l.jsx)(R, {
                                bottomRight: !0,
                                size: t,
                                color: i
                            })
                        })]
                    })
                },
                tg = e => {
                    let {
                        clapTime: t,
                        intervalTime: i,
                        isVisible: s = !0,
                        quotesList: n
                    } = e, [r, a] = (0, o.useState)(0);
                    return (0, o.useEffect)(() => {
                        let e = setInterval(() => {
                            a(e => (e + 1) % n.length)
                        }, i);
                        return () => clearInterval(e)
                    }, [i, n.length]), (0, l.jsx)(S.E.div, {
                        className: "flex items-center justify-center overflow-hidden",
                        children: (0, l.jsx)(tx.M, {
                            children: (0, l.jsxs)(S.E.div, {
                                className: "relative flex items-center justify-center overflow-hidden",
                                initial: {
                                    width: 600
                                },
                                animate: {
                                    width: [600, 0, 0, 600]
                                },
                                exit: {
                                    width: 600
                                },
                                transition: {
                                    duration: t / 1e3,
                                    repeat: 1 / 0,
                                    repeatDelay: i / 1e3 - t / 1e3,
                                    delay: i / 1e3 - t / 1e3 / 2,
                                    times: [0, .4, .6, 1],
                                    ease: [tu.YQ, tu.YQ, tu.Vv, tu.Vv]
                                },
                                children: [(0, l.jsx)(tf, {
                                    cornerSize: 20,
                                    cornerColor: "#000"
                                }), (0, l.jsxs)(S.E.div, {
                                    className: "flex min-h-[500px] min-w-[600px] flex-col flex-wrap items-center justify-between p-4 text-center",
                                    children: [(0, l.jsx)("div", {
                                        className: "flex gap-3",
                                        children: n.map((e, t) => (0, l.jsx)(tp, {
                                            active: t === r,
                                            size: 12
                                        }, t))
                                    }), (0, l.jsx)("p", {
                                        className: "font-sans-2xl mx-4 mb-6 max-w-[20ch] text-center",
                                        children: n[r].quote
                                    }), (0, l.jsxs)("div", {
                                        className: "flex items-center justify-center gap-4",
                                        children: [(0, l.jsx)("div", {
                                            className: "relative h-8 w-8 overflow-hidden rounded-full",
                                            children: (0, l.jsx)("img", {
                                                src: n[r].photo,
                                                alt: n[r].name,
                                                className: "bg-cover"
                                            })
                                        }), (0, l.jsxs)("p", {
                                            className: "font-mono-sm text-center",
                                            children: [n[r].name, ", ", n[r].title]
                                        })]
                                    })]
                                })]
                            })
                        })
                    })
                },
                tv = e => {
                    let {
                        clapTime: t,
                        intervalTime: i,
                        isVisible: s = !0,
                        quotesList: n
                    } = e, [r, a] = (0, o.useState)(0);
                    return (0, o.useEffect)(() => {
                        let e = setInterval(() => {
                            a(e => (e + 1) % n.length)
                        }, i);
                        return () => clearInterval(e)
                    }, [i, n.length]), (0, l.jsx)(S.E.div, {
                        className: "flex items-center justify-center overflow-hidden",
                        initial: {
                            height: 0
                        },
                        animate: {
                            height: s ? "auto" : 0,
                            transition: {
                                duration: T.VERY_SLOW,
                                ease: T.EASING_IN_OUT,
                                delay: s ? .4 : 0
                            }
                        },
                        children: (0, l.jsx)("div", {
                            children: (0, l.jsx)(tx.M, {
                                children: (0, l.jsxs)(S.E.div, {
                                    className: "relative flex w-full items-center justify-center overflow-hidden",
                                    initial: {
                                        height: 500
                                    },
                                    animate: {
                                        height: [500, 0, 0, 500]
                                    },
                                    exit: {
                                        height: 500
                                    },
                                    transition: {
                                        duration: t / 1e3,
                                        repeat: 1 / 0,
                                        repeatDelay: i / 1e3 - t / 1e3,
                                        delay: i / 1e3 - t / 1e3 / 2,
                                        times: [0, .4, .6, 1],
                                        ease: [tu.YQ, tu.YQ, tu.Vv, tu.Vv]
                                    },
                                    children: [(0, l.jsx)(tf, {
                                        cornerSize: 12,
                                        cornerColor: "#000"
                                    }), (0, l.jsxs)(S.E.div, {
                                        className: "flex min-h-[500px] min-w-[330px] flex-col flex-wrap items-center justify-evenly p-4 text-center",
                                        initial: {
                                            opacity: 0
                                        },
                                        animate: {
                                            opacity: s ? [0, 1, 0, 1] : 0,
                                            transition: {
                                                duration: T.NORMAL,
                                                ease: "linear",
                                                delay: s ? T.FAST + .6 : 0
                                            }
                                        },
                                        children: [(0, l.jsx)("div", {
                                            className: "flex gap-2",
                                            children: n.map((e, t) => (0, l.jsx)(tp, {
                                                active: t === r,
                                                size: 8
                                            }, t))
                                        }), (0, l.jsx)("p", {
                                            className: "font-sans-4xl mx-4 mb-6 max-w-[20ch] text-center",
                                            children: n[r].quote
                                        }), (0, l.jsxs)("div", {
                                            className: "flex flex-col items-center justify-center gap-4",
                                            children: [(0, l.jsx)("div", {
                                                className: "relative h-8 w-8 overflow-hidden rounded-full",
                                                children: (0, l.jsx)("img", {
                                                    src: n[r].photo,
                                                    alt: n[r].name,
                                                    className: "bg-cover"
                                                })
                                            }), (0, l.jsxs)("p", {
                                                className: "font-mono-sm text-center",
                                                children: [n[r].name, ",", (0, l.jsx)("br", {}), n[r].title]
                                            })]
                                        })]
                                    })]
                                })
                            })
                        })
                    })
                };
            let tw = [{
                quote: "Exactly what healthcare should be.",
                name: "Erin Sharoni",
                title: "Harvard Medical School",
                photo: "/testimonials-section/erin-sharoni.png"
            }, {
                quote: "Superpower put me on the road to feeling great.",
                name: "Vinay Hiremath",
                title: "Founder of Loom",
                photo: "/testimonials-section/vinay-hiremath.png"
            }, {
                quote: "Becoming a healthier dad for my kids - priceless.",
                name: "Jordi Hays",
                title: "Founder of Capital",
                photo: "/testimonials-section/jordi-hays.png"
            }];
            var tj = e => {
                    let t = g(v.lg),
                        i = (0, o.useRef)(),
                        s = (0, eT.Y)(i);
                    return (0, l.jsx)("section", {
                        className: "relative z-10 h-svh overflow-hidden bg-white",
                        children: (0, l.jsxs)("div", {
                            className: "absolute flex h-full w-full flex-col items-center justify-center gap-6",
                            children: [(0, l.jsx)("div", {
                                className: "flex h-full"
                            }), (0, l.jsxs)("div", {
                                className: "flex w-full flex-row items-center justify-center gap-12",
                                children: [(0, l.jsx)("div", {
                                    className: "flex w-full flex-row",
                                    children: (0, l.jsx)(eL, {
                                        length: "auto",
                                        color: "#bbb",
                                        horizontal: !0,
                                        tail: 16
                                    })
                                }), (0, l.jsxs)("div", {
                                    ref: i,
                                    children: [t && (0, l.jsx)(tg, {
                                        isVisible: s,
                                        quotesList: tw,
                                        intervalTime: 4e3,
                                        clapTime: 800
                                    }), !t && (0, l.jsx)(tv, {
                                        isVisible: s,
                                        quotesList: tw,
                                        intervalTime: 4e3,
                                        clapTime: 800
                                    })]
                                }), (0, l.jsx)("div", {
                                    className: "flex w-full flex-row",
                                    children: (0, l.jsx)(eL, {
                                        length: "auto",
                                        color: "#bbb",
                                        horizontal: !0,
                                        head: 16
                                    })
                                })]
                            }), (0, l.jsx)("div", {
                                className: "flex h-full",
                                children: (0, l.jsx)(eL, {
                                    length: "auto",
                                    color: "#bbb",
                                    vertical: !0,
                                    head: 16
                                })
                            })]
                        })
                    })
                },
                tb = e => {
                    let {
                        direction: t
                    } = e;
                    g(v.lg);
                    let i = (0, o.useRef)(),
                        [s, n] = (0, o.useState)(!1),
                        r = _(V(s, i, "center")),
                        a = (0, P.H)(r.x, e => s ? 1 + e : 1);
                    (0, O.q)(a, {
                        stiffness: 400,
                        damping: 100
                    });
                    let {
                        scrollYProgress: c
                    } = (0, N.v)({
                        target: i
                    }), d = (0, P.H)(c, e => 18 * Math.pow(.75 * e, 3)), h = (0, P.H)(c, e => -18 * Math.pow(.75 * (1 - e), 3));
                    return (0, l.jsx)("div", {
                        className: " flex h-full w-full",
                        style: {
                            alignItems: "up" == t ? "flex-end" : "flex-start"
                        },
                        children: (0, l.jsx)("div", {
                            onPointerEnter: () => n(!0),
                            onPointerLeave: () => n(!1),
                            ref: i,
                            className: " relative h-[225vh] w-screen",
                            children: (0, l.jsx)("div", {
                                className: "sticky top-0 flex h-screen w-full",
                                style: {
                                    alignItems: "up" == t ? "flex-end" : "flex-start"
                                },
                                children: (0, l.jsx)("div", {
                                    className: "absolute left-0 h-auto w-full",
                                    style: {
                                        bottom: "up" == t ? "-5px" : "auto",
                                        top: "down" == t ? "-5px" : "auto"
                                    },
                                    children: (0, l.jsx)(S.E.div, {
                                        className: "flex origin-bottom flex-row",
                                        style: {
                                            scaleY: "up" == t ? d : h,
                                            y: "up" == t ? "0" : "-32vw"
                                        },
                                        children: (0, l.jsx)("img", {
                                            src: "/transition-section/transition.png",
                                            width: "0",
                                            height: "0",
                                            sizes: "100vw",
                                            className: "pointer-events-none h-full grow origin-bottom-left",
                                            alt: "transition-bg"
                                        })
                                    })
                                })
                            })
                        })
                    })
                },
                ty = e => (0, l.jsx)("section", {
                    className: "pointer-events-none relative z-10 h-[75vh] bg-white",
                    children: (0, l.jsx)(tb, {
                        direction: "up"
                    })
                }),
                tN = e => (0, l.jsx)("section", {
                    className: "pointer-events-none relative z-10 h-[75vh] bg-white",
                    children: (0, l.jsx)(tb, {
                        direction: "down"
                    })
                });
            let tE = [{
                name: "VO2 Max",
                image: "/ecosystem-section/vo2-max.png",
                desktopAngle: {
                    y: 60,
                    x: -35
                },
                mobileAngle: {
                    y: 35,
                    x: -35
                },
                desktopWidth: 420,
                mobileWidth: 450
            }, {
                name: "Full Genome Sequencing",
                image: "/ecosystem-section/genomic-test-kit.png",
                desktopAngle: {
                    y: 0,
                    x: -45
                },
                mobileAngle: {
                    y: 0,
                    x: -45
                },
                desktopWidth: 194,
                mobileWidth: 250
            }, {
                name: "Continuous Glucose Monitoring",
                image: "/ecosystem-section/cgm-charts.png",
                desktopAngle: {
                    y: -60,
                    x: -35
                },
                mobileAngle: {
                    y: -35,
                    x: -35
                },
                desktopWidth: 505,
                mobileWidth: 400
            }, {
                name: "Biomarker Tracking",
                image: "/ecosystem-section/blood-biomarker-chart.png",
                desktopAngle: {
                    y: 70,
                    x: 0
                },
                mobileAngle: {
                    y: 35,
                    x: -60
                },
                desktopWidth: 250,
                mobileWidth: 300
            }, {
                name: "Grail Cancer Test",
                image: "/ecosystem-section/grail-cancer-test.png",
                desktopAngle: {
                    y: -70,
                    x: 0
                },
                mobileAngle: {
                    y: -35,
                    x: 35
                },
                desktopWidth: 250,
                mobileWidth: 350
            }, {
                name: "Intestinal Permeability Panel",
                image: "/ecosystem-section/intestinal-permeability-panel.png",
                desktopAngle: {
                    y: 60,
                    x: 35
                },
                mobileAngle: {
                    y: 0,
                    x: 35
                },
                desktopWidth: 363,
                mobileWidth: 400
            }, {
                name: "Prescriptions",
                image: "/ecosystem-section/prescriptions.png",
                desktopAngle: {
                    y: 0,
                    x: 45
                },
                mobileAngle: {
                    y: 35,
                    x: 35
                },
                desktopWidth: 253,
                mobileWidth: 300
            }, {
                name: "DEXA Scan",
                image: "/ecosystem-section/dexa-scan.png",
                desktopAngle: {
                    y: -60,
                    x: 35
                },
                mobileAngle: {
                    y: -35,
                    x: 60
                },
                desktopWidth: 280,
                mobileWidth: 320
            }, {
                name: "Microbiome Test Kit",
                image: "/ecosystem-section/microbiome-test-kit.png",
                desktopAngle: {
                    y: 25,
                    x: -30
                },
                mobileAngle: {
                    y: -35,
                    x: -60
                },
                desktopWidth: 160,
                mobileWidth: 160
            }, {
                name: "MRIs",
                image: "/ecosystem-section/mris.png",
                desktopAngle: {
                    y: -30,
                    x: 30
                },
                mobileAngle: {
                    y: 35,
                    x: 60
                },
                desktopWidth: 130,
                mobileWidth: 300
            }];
            var tS = e => {
                    let {
                        isMouseInSection: t,
                        isSectionInView: i,
                        pointerOffsetPercent: s,
                        item: n
                    } = e, r = g(v.md), a = "10000px";
                    (0, o.useMemo)(() => 200 * Math.random() + 200, []);
                    let c = (0, P.H)(s.x, e => r ? t ? n.desktopAngle.y + 30 * e : n.desktopAngle.y : n.mobileAngle.y),
                        d = (0, P.H)(s.y, e => r ? t ? n.desktopAngle.x + -15 * e : n.desktopAngle.x : n.mobileAngle.x);
                    (0, P.H)(s.x, e => t ? (n.desktopAngle.y + 70) / 140 * (e + .5) + .5 : 1);
                    let h = (0, O.q)(c, {
                            stiffness: 400,
                            damping: 100
                        }),
                        m = (0, O.q)(d, {
                            stiffness: 400,
                            damping: 100
                        });
                    return (0, l.jsx)(S.E.div, {
                        className: "relative",
                        initial: {
                            perspective: a
                        },
                        animate: {
                            perspective: i ? "1600px" : a,
                            transition: {
                                duration: 2,
                                ease: [0, 1, 0, 1]
                            }
                        },
                        style: {
                            transformStyle: "preserve-3d",
                            perspectiveOrigin: "50% 50%",
                            rotateY: h
                        },
                        children: (0, l.jsx)(S.E.div, {
                            style: {
                                transformStyle: "preserve-3d",
                                perspectiveOrigin: "50% 50%",
                                rotateX: m
                            },
                            children: (0, l.jsx)(S.E.div, {
                                style: {
                                    z: r ? "-80vw" : "-110vw"
                                },
                                children: (0, l.jsxs)("div", {
                                    className: "absolute flex translate-x-[-50%] translate-y-[-50%] flex-col items-center gap-4 duration-300 hover:opacity-80",
                                    children: [(0, l.jsx)("img", {
                                        src: n.image,
                                        alt: n.name,
                                        style: {
                                            minWidth: r ? "".concat(n.desktopWidth / 10, "vw") : "".concat(n.mobileWidth / 10, "vw")
                                        },
                                        className: "rounded-3xl",
                                        width: 500,
                                        height: 500
                                    }), (0, l.jsx)("div", {
                                        className: "font-sans-lg text-center text-black 2xl:text-[2vw]",
                                        children: n.name
                                    })]
                                })
                            })
                        })
                    })
                },
                tC = e => {
                    let t = (0, o.useRef)(),
                        i = (0, eT.Y)(t),
                        [s, n] = (0, o.useState)(!1),
                        r = _(V(s, t, "center"));
                    return (0, l.jsxs)("section", {
                        className: "relative mb-[5vh] mt-[10vh] h-screen w-screen bg-white",
                        onPointerEnter: () => n(!0),
                        onPointerLeave: () => n(!1),
                        ref: t,
                        children: [(0, l.jsx)(S.E.div, {
                            className: "absolute left-[50%] top-[50%]",
                            initial: {
                                opacity: 0,
                                perspective: "0px"
                            },
                            animate: {
                                opacity: i ? 1 : 0,
                                perspective: i ? "1600px" : "0px",
                                transition: {
                                    duration: 2,
                                    delay: 0,
                                    ease: [0, .7, .5, 1]
                                }
                            },
                            children: tE.map((e, t) => (0, l.jsx)(o.Fragment, {
                                children: (0, l.jsx)(tS, {
                                    isMouseInSection: s,
                                    isSectionInView: i,
                                    pointerOffsetPercent: r,
                                    item: e
                                })
                            }, t))
                        }), (0, l.jsx)("div", {
                            className: "z-1 pointer-events-none absolute flex h-full w-full flex-col items-center justify-center",
                            children: (0, l.jsxs)("div", {
                                className: "flex w-full max-w-[585px] flex-col items-center gap-6 px-4",
                                children: [(0, l.jsx)("div", {
                                    className: "font-sans-3xl text-center text-black lg:font-sans-2xl",
                                    children: (0, l.jsx)("h1", {
                                        children: "Get exclusive access to our marketplace"
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "w-full max-w-[533px]",
                                    children: (0, l.jsx)("p", {
                                        className: "font-sans-lg text-center text-black opacity-50",
                                        children: "Unlimited tools to transform your health and change your life."
                                    })
                                })]
                            })
                        })]
                    })
                };
            let tk = [{
                    path: "M1 2C299.481 2 593.937 49.2507 835.5 142.213",
                    waypoints: [{
                        age: "Born",
                        action: "C-Section",
                        details: ["Microbiome optimization", "Genetic test"],
                        direction: "right"
                    }]
                }, {
                    path: "M835.5 142.213C1143.67 260.81 1365.77 453.804 1400.3 718",
                    waypoints: [{
                        age: "Age 22",
                        action: "Annual Superpower Baseline",
                        details: ["60 biomarker blood test", "Microbiome test"],
                        direction: "right"
                    }]
                }, {
                    path: "M1400.3 718C1403.41 741.749 1405 766.074 1405 790.972C1405 1015.35 1206.5 1177.61 971 1343.12",
                    waypoints: [{
                        age: "Age 26",
                        action: "Gut health protocol",
                        details: ["Personalized probiotic", "Gut lining peptide"],
                        direction: "left"
                    }]
                }, {
                    path: "M971 1343.12C752.77 1496.48 502.766 1652.64 349.5 1863.6",
                    waypoints: [{
                        age: "Age 31",
                        action: "Fertility protocol",
                        details: ["Pre-natal vitamin stack", "Post-partum nutrients"],
                        direction: "left"
                    }]
                }, {
                    path: "M349.5 1863.6C261.584 1984.61 205.499 2123.65 205.499 2290.54C205.499 2453.35 257.153 2581.89 336.864 2690.5",
                    waypoints: [{
                        age: "Age 41",
                        action: "Hormone optimization protocol",
                        details: ["Testosterone", "Estrogren"],
                        direction: "left"
                    }]
                }, {
                    path: "M336.864 2690.5C493.17 2903.47 757.359 3039.79 951.5 3207.49",
                    waypoints: [{
                        age: "Age 45",
                        action: "Disease prevention program",
                        details: ["Full body MRI", "Grail cancer screening"],
                        direction: "right"
                    }]
                }, {
                    path: "M951.5 3207.49C1091.79 3328.68 1195.5 3466.25 1195.5 3660.98C1195.5 3836.03 1099.14 3925.77 980.477 4006.5",
                    waypoints: [{
                        age: "Age 60",
                        action: "Longevity protocol",
                        details: ["Prevent Alzheimer’s, heart disease, cancer", "Reduce skin age"],
                        direction: "right"
                    }]
                }, {
                    path: "M980.478,4006.5C790.36,4135.85 542.999,4242.07 542.999,4639",
                    waypoints: [{
                        age: "Age 120",
                        action: "Aging goal",
                        details: [],
                        direction: "left"
                    }]
                }],
                tA = e => {
                    let {
                        segmentInfo: t,
                        progress: i,
                        segmentIndex: s,
                        segmentCount: n,
                        graphScale: r,
                        isLowPerformanceMode: a,
                        cameraRotation: c
                    } = e, {
                        head: d,
                        tail: h,
                        length: m
                    } = t, [x, u] = (0, o.useState)(!1), [p, f] = (0, o.useState)(!1), g = (0, P.H)(i, [s / n, (s + 1) / n], [1, 0], {
                        clamp: !1
                    });
                    (0, E.W)(g, "change", e => {
                        e < 8 && (e > -8 || a && e > -4) ? f(!0) : f(!1), e < 2 && e > -3 && !a ? u(!0) : u(!1)
                    });
                    let v = (0, P.H)(g, [0, 1], [0, m]),
                        w = (0, o.useMemo)(() => Math.abs(t.head.x - t.tail.x), [t]),
                        j = (0, o.useMemo)(() => Math.abs(t.head.y - t.tail.y), [t]),
                        b = s === n - 1,
                        y = (0, l.jsxs)("linearGradient", {
                            id: "linear-gradient-black",
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "0%",
                            children: [(0, l.jsx)("stop", {
                                offset: "0%",
                                stopColor: "#000"
                            }), (0, l.jsx)("stop", {
                                offset: "100%",
                                stopColor: "#FFF"
                            })]
                        }),
                        N = (0, l.jsxs)("linearGradient", {
                            id: "linear-gradient-vermillion",
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "0%",
                            children: [(0, l.jsx)("stop", {
                                offset: "0%",
                                stopColor: "#000"
                            }), (0, l.jsx)("stop", {
                                offset: "100%",
                                stopColor: "#FE8000"
                            })]
                        });
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(S.E.div, {
                            className: "absolute left-0 top-0 h-0 w-0",
                            style: {
                                left: d.x * r,
                                top: d.y * r,
                                rotateX: -c,
                                display: p ? "block" : "hidden"
                            },
                            children: (0, l.jsx)("div", {
                                className: "relative -z-10 h-[30vw] w-[2px] bg-gradient-to-b from-white to-transparent opacity-30"
                            })
                        }), (0, l.jsxs)("svg", {
                            viewBox: "0 0 ".concat(w, " ").concat(j),
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "absolute overflow-visible",
                            style: {
                                visibility: p ? "visible" : "hidden",
                                width: w * r,
                                height: j * r,
                                transform: "translate3d(".concat(d.x * r, "px,").concat(d.y * r, "px,0px)")
                            },
                            children: [b && y, b && N, (0, l.jsx)(S.E.path, {
                                d: t.path,
                                stroke: b ? "url(#linear-gradient-black)" : "#FFF",
                                strokeWidth: "5",
                                style: {
                                    x: -t.head.x,
                                    y: -t.head.y
                                }
                            }), (0, l.jsx)(S.E.path, {
                                d: t.path,
                                stroke: b ? "url(#linear-gradient-vermillion)" : "#FE8000",
                                strokeWidth: "5",
                                style: {
                                    strokeDasharray: m,
                                    strokeDashoffset: v,
                                    x: -t.head.x,
                                    y: -t.head.y
                                }
                            }), x && !a && !eS.G6 && (0, l.jsx)(S.E.path, {
                                d: t.path,
                                stroke: b ? "url(#linear-gradient-vermillion)" : "#FE8000",
                                filter: "url(#blurMe)",
                                strokeWidth: "24",
                                style: {
                                    filter: "blur(48px)",
                                    x: -t.head.x,
                                    y: -t.head.y,
                                    strokeDasharray: m,
                                    strokeDashoffset: v
                                }
                            })]
                        })]
                    })
                },
                tF = () => (0, l.jsx)("path", {
                    d: "M541.998 4639C541.998 3994.33 1194.5 4116.5 1194.5 3660.98C1194.5 3059.35 204.498 3003.29 204.498 2290.54C204.498 1518.73 1404 1342.55 1404 790.972C1404 272 713.5 2 0 2",
                    stroke: "#FFF",
                    strokeWidth: "5"
                });
            var tL = e => {
                    let {
                        progress: t,
                        segmentsInfo: i,
                        graphScale: s,
                        isLowPerformanceMode: n,
                        cameraRotation: r
                    } = e;
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(tF, {}), i.map((e, i) => (0, l.jsx)(tA, {
                            segmentInfo: e,
                            progress: t,
                            segmentIndex: i,
                            segmentCount: tk.length,
                            graphScale: s,
                            isLowPerformanceMode: n,
                            cameraRotation: r
                        }, i))]
                    })
                },
                tM = i(6151);
            let tz = () => (0, l.jsx)("svg", {
                    width: "7",
                    height: "10",
                    viewBox: "0 0 7 10",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, l.jsx)("path", {
                        d: "M1.5 1L5.5 5L1.5 9",
                        stroke: "#FE8000",
                        strokeWidth: "2"
                    })
                }),
                tB = e => {
                    let {
                        isActive: t
                    } = e;
                    return (0, l.jsx)("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, l.jsx)(S.E.path, {
                            d: "M4 14.5C4.39782 14.5 4.77936 14.658 5.06066 14.9393C5.34196 15.2206 5.5 15.6022 5.5 16V18.5H9C9.39782 18.5 9.77936 18.658 10.0607 18.9393C10.342 19.2206 10.5 19.6022 10.5 20C10.5 20.3978 10.342 20.7794 10.0607 21.0607C9.77936 21.342 9.39782 21.5 9 21.5H5C4.33696 21.5 3.70107 21.2366 3.23223 20.7678C2.76339 20.2989 2.5 19.663 2.5 19V16C2.5 15.6022 2.65804 15.2206 2.93934 14.9393C3.22064 14.658 3.60218 14.5 4 14.5ZM20 14.5C20.3729 14.5 20.7324 14.6389 21.0084 14.8896C21.2844 15.1403 21.4572 15.4848 21.493 15.856L21.5 16V19C21.5001 19.6347 21.2588 20.2457 20.825 20.709C20.3912 21.1724 19.7973 21.4534 19.164 21.495L19 21.5H15C14.6148 21.4998 14.2444 21.3514 13.9656 21.0856C13.6868 20.8198 13.521 20.4569 13.5025 20.0721C13.484 19.6873 13.6142 19.3102 13.8662 19.0188C14.1182 18.7274 14.4726 18.5442 14.856 18.507L15 18.5H18.5V16C18.5 15.6022 18.658 15.2206 18.9393 14.9393C19.2206 14.658 19.6022 14.5 20 14.5ZM20 10.5C20.3852 10.5002 20.7556 10.6486 21.0344 10.9144C21.3132 11.1802 21.479 11.5431 21.4975 11.9279C21.516 12.3127 21.3858 12.6898 21.1338 12.9812C20.8818 13.2726 20.5274 13.4558 20.144 13.493L20 13.5H4C3.61478 13.4998 3.24441 13.3514 2.96561 13.0856C2.68682 12.8198 2.52099 12.4569 2.50248 12.0721C2.48396 11.6873 2.61419 11.3102 2.86618 11.0188C3.11816 10.7274 3.47258 10.5442 3.856 10.507L4 10.5H20ZM9 2.5C9.38522 2.50019 9.75559 2.64858 10.0344 2.91441C10.3132 3.18024 10.479 3.54314 10.4975 3.92791C10.516 4.31269 10.3858 4.68983 10.1338 4.9812C9.88184 5.27257 9.52742 5.45583 9.144 5.493L9 5.5H5.5V8C5.49981 8.38522 5.35142 8.75559 5.08559 9.03439C4.81976 9.31318 4.45686 9.47901 4.07209 9.49752C3.68731 9.51604 3.31017 9.38581 3.0188 9.13382C2.72743 8.88184 2.54417 8.52742 2.507 8.144L2.5 8V5C2.4999 4.36528 2.74123 3.75429 3.17504 3.29095C3.60885 2.82762 4.20265 2.54664 4.836 2.505L5 2.5H9ZM19 2.5C19.6347 2.4999 20.2457 2.74123 20.709 3.17504C21.1724 3.60885 21.4534 4.20265 21.495 4.836L21.5 5V8C21.4998 8.38522 21.3514 8.75559 21.0856 9.03439C20.8198 9.31318 20.4569 9.47901 20.0721 9.49752C19.6873 9.51604 19.3102 9.38581 19.0188 9.13382C18.7274 8.88184 18.5442 8.52742 18.507 8.144L18.5 8V5.5H15C14.6148 5.49981 14.2444 5.35142 13.9656 5.08559C13.6868 4.81976 13.521 4.45686 13.5025 4.07209C13.484 3.68731 13.6142 3.31017 13.8662 3.0188C14.1182 2.72743 14.4726 2.54417 14.856 2.507L15 2.5H19Z",
                            animate: {
                                fill: t ? "#FE8000" : "#FFF"
                            }
                        })
                    })
                };
            var tH = e => {
                    let {
                        waypoint: t,
                        isActive: i,
                        progress: s,
                        totalWaypointsCount: n,
                        index: r,
                        isLowPerformanceMode: a,
                        withDetails: c,
                        offsetHeight: d
                    } = e, h = r / n, [m, x] = (0, o.useState)(!0), u = (0, P.H)(s, [h - .1, h - .05, h + .06, h + .1], [-1, 0, 0, 1], {
                        clamp: !1
                    });
                    (0, E.W)(u, "change", e => {
                        if (e < 3 && e > -2) {
                            x(!0);
                            return
                        }
                        x(!1)
                    });
                    let p = (0, P.H)(u, [-1, 0, 1], [1.5, 0, 1.5]);
                    (0, P.H)(p, e => m && !a ? "blur(".concat(e, "px)") : "none");
                    let f = d - 50;
                    return (0, l.jsxs)(S.E.div, {
                        className: "relative flex  w-0 text-white",
                        style: {
                            height: f + 50
                        },
                        animate: {
                            opacity: m ? 1 : .4
                        },
                        children: [(0, l.jsxs)("div", {
                            className: "absolute ".concat("left" == t.direction ? "right-0 flex-col text-right" : "flex-col", " -mt-1 flex w-fit justify-between gap-4 text-nowrap sm:-mt-2"),
                            children: [(0, l.jsxs)(S.E.div, {
                                className: "left" == t.direction ? "mr-6" : "ml-6",
                                children: [(0, l.jsx)(S.E.div, {
                                    animate: {
                                        y: i ? 0 : f,
                                        color: i ? "#FE8000" : "#FFF",
                                        transition: {
                                            duration: i ? T.SLOW : T.FAST,
                                            ease: T.EASING
                                        }
                                    },
                                    className: "font-mono-md mb-2 ",
                                    children: t.age
                                }), c && (0, l.jsx)(S.E.div, {
                                    animate: {
                                        opacity: i ? 1 : 0,
                                        y: i ? 0 : 10,
                                        transition: {
                                            duration: i ? T.SLOW : T.FAST,
                                            ease: T.EASING,
                                            delay: i ? T.VERY_FAST : 0
                                        }
                                    },
                                    className: "font-sans-xl",
                                    children: t.action
                                })]
                            }), (0, l.jsx)(S.E.div, {
                                animate: {
                                    opacity: i ? 1 : 0,
                                    y: i ? 0 : 10,
                                    transition: {
                                        duration: T.SLOW,
                                        ease: T.EASING
                                    }
                                },
                                className: "flex h-fit flex-col gap-2 ".concat("left" == t.direction ? "border-r pr-4" : "border-l pl-4", " border-[rgba(255,255,255,.2)] "),
                                children: c && t.details.map((e, t) => (0, l.jsxs)(S.E.div, {
                                    animate: {
                                        opacity: i ? 1 : 0,
                                        x: i ? 0 : -10,
                                        transition: {
                                            duration: i ? T.SLOW : T.FAST,
                                            ease: T.EASING,
                                            delay: i ? .1 + T.VERY_FAST * t : 0
                                        }
                                    },
                                    className: "font-sans-md flex items-center gap-2 leading-none",
                                    children: [(0, l.jsx)(tz, {}), e]
                                }, t))
                            })]
                        }), (0, l.jsx)(S.E.div, {
                            animate: {
                                y: i ? 0 : f,
                                transition: {
                                    duration: T.NORMAL,
                                    ease: T.EASING
                                }
                            },
                            className: "absolute top-1 -ml-3 -mt-3",
                            children: (0, l.jsx)(tB, {
                                isActive: i
                            })
                        }), (0, l.jsx)(S.E.div, {
                            animate: {
                                opacity: i ? 1 : 0,
                                scaleY: i ? 1 : 0,
                                transformOrigin: "center bottom",
                                transition: {
                                    duration: T.NORMAL,
                                    ease: T.EASING
                                }
                            },
                            className: "absolute bottom-0 left-0 top-6 w-[2px] bg-gradient-to-b from-vermilion-700 to-transparent"
                        }), (0, l.jsx)(S.E.div, {
                            animate: {
                                scale: i ? 1 : 0,
                                transition: {
                                    duration: T.NORMAL,
                                    ease: T.EASING
                                }
                            },
                            style: {
                                x: -6,
                                y: 6
                            },
                            className: "absolute bottom-0 h-3 w-3 rounded-full bg-vermilion-700"
                        })]
                    })
                },
                tW = e => {
                    let {
                        isActive: t,
                        waypoint: i
                    } = e;
                    return (0, l.jsxs)(S.E.div, {
                        className: "gap-auto absolute bottom-0 px-4 py-6",
                        style: {
                            opacity: t ? 1 : 0
                        },
                        children: [(0, l.jsxs)("div", {
                            className: "flex flex-col",
                            children: [(0, l.jsx)("span", {
                                className: "font-mono-xs text-vermilion-700",
                                children: i.age
                            }), (0, l.jsx)("span", {
                                className: "mb-1",
                                children: i.action
                            })]
                        }), (0, l.jsx)("div", {
                            className: "flex flex-col gap-1",
                            children: i.details.map((e, i) => (0, l.jsxs)(S.E.div, {
                                animate: {
                                    opacity: t ? 1 : 0,
                                    x: t ? 0 : -10,
                                    transition: {
                                        duration: t ? T.SLOW : T.FAST,
                                        ease: T.EASING,
                                        delay: t ? .1 + T.VERY_FAST * i : 0
                                    }
                                },
                                className: "font-sans-md flex items-center gap-5 leading-none",
                                children: [(0, l.jsx)(tz, {}), e]
                            }, i))
                        })]
                    })
                },
                tI = e => {
                    let {
                        timelineProgress: t,
                        transitionProgress: i
                    } = e, s = (0, o.useRef)(), n = (0, p.$)(), r = g(v.sm), a = (0, o.useMemo)(() => tk.map(e => (function (e) {
                        let t, i;
                        let s = (0, tM.parseSVG)(e.path);
                        return {
                            head: (() => {
                                let e = s[0];
                                return "M" !== e.code ? {
                                    x: 0,
                                    y: 0
                                } : {
                                    x: e.x,
                                    y: e.y
                                }
                            })(),
                            tail: (() => {
                                let e = s[s.length - 1];
                                return "C" !== e.code ? {
                                    x: 0,
                                    y: 0
                                } : {
                                    x: e.x,
                                    y: e.y
                                }
                            })(),
                            length: (t = 0, i = {
                                x: 0,
                                y: 0
                            }, s.forEach(e => {
                                if ("M" === e.code) {
                                    i.x = e.x, i.y = e.y;
                                    return
                                }
                                if ("C" === e.code) {
                                    let s = {
                                            x: e.x1,
                                            y: e.y1
                                        },
                                        n = {
                                            x: e.x2,
                                            y: e.y2
                                        },
                                        r = {
                                            x: e.x,
                                            y: e.y
                                        };
                                    t += function (e, t, i, s) {
                                        let n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
                                        if (0 === n) return 0;
                                        let r = (e, t, i, s, n) => e * (e * (-3 * t + 9 * i - 9 * s + 3 * n) + 6 * t - 12 * i + 6 * s) - 3 * t + 3 * i,
                                            a = (n = n > 1 ? 1 : n < 0 ? 0 : n) / 2,
                                            l = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816],
                                            o = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472],
                                            c = l.length,
                                            d = 0;
                                        for (let n = 0; n < c; n++) {
                                            let c = a * l[n] + a,
                                                h = r(c, e.x, t.x, i.x, s.x),
                                                m = r(c, e.y, t.y, i.y, s.y),
                                                x = h * h + m * m;
                                            d += o[n] * Math.sqrt(x)
                                        }
                                        return a * d
                                    }(i, s, n, r, 1), i.x = e.x, i.y = e.y
                                }
                            }), t),
                            path: e.path,
                            waypoints: e.waypoints
                        }
                    })(e)), []), c = (0, o.useMemo)(() => a.map(e => e.head), [a]), d = (0, o.useMemo)(() => c.map(e => {
                        let {
                            x: t
                        } = e;
                        return -(.25 * t)
                    }), [c]), h = (0, o.useMemo)(() => c.map((e, t) => t / (c.length - 1)), [c]), m = (0, o.useMemo)(() => c.map(e => {
                        let {
                            y: t
                        } = e, i = r ? 8e-4 : 9e-4;
                        return -(n.width * i * t) + -700
                    }), [c, n.width, r]), x = (0, o.useMemo)(() => {
                        let e = r ? .35 : .8;
                        return m.map(t => t * e + 720 - 0)
                    }, [m, r]), [u, f] = (0, o.useState)(0), {
                        isLowPerformance: w
                    } = function () {
                        let [e, t] = (0, o.useState)(!1), {
                            isResizing: i
                        } = (0, p.$)();
                        return (0, o.useEffect)(() => {
                            let e;
                            if (i) return;
                            t(!1);
                            let s = 1e3 / 24,
                                n = 0,
                                r = 0,
                                a = null,
                                l = null;
                            return e = window.requestAnimationFrame(function i(o) {
                                null == a && (l = a = o);
                                let c = o - l;
                                if (l = o, c < s) {
                                    e = window.requestAnimationFrame(i);
                                    return
                                }
                                let d = o - n <= 2e3;
                                if (n = o, d ? r++ : (r = 1, console.log("Frame drop detection reset")), console.log("Frame drop detected - fps: ".concat(1e3 / c, " , ").concat(10 - r + 1, " drops before activating low performance mode")), r > 10) {
                                    console.log("Low performance mode activated"), t(!0);
                                    return
                                }
                                e = window.requestAnimationFrame(i)
                            }), () => {
                                cancelAnimationFrame(e)
                            }
                        }, [i]), {
                            isLowPerformance: e
                        }
                    }();
                    (0, E.W)(t, "change", e => {
                        f(Math.floor(e / (1 / a.length)))
                    });
                    let j = r ? 70 : 60,
                        b = n.width < 720 ? .5120910384068279 : n.width / 1406,
                        y = (0, P.H)(t, h, m),
                        N = (0, P.H)(i, [0, .5, .5, 1], [3 * n.height, 0, 0, -(6 * n.height)], {
                            ease: (0, e8._)(.7, 0, .84, 0)
                        }),
                        C = (0, P.H)([y, N], e => {
                            let [t, i] = e;
                            return t + i
                        }),
                        k = (0, P.H)(i, [0, .5, .5, 1], [0, 0, 0, 2 * n.height], {
                            ease: (0, e8._)(.7, 0, .84, 0)
                        }),
                        A = (0, P.H)(t, h, x),
                        F = (0, P.H)([A, k], e => {
                            let [t, i] = e;
                            return t + i
                        }),
                        L = (0, P.H)(t, h, d),
                        M = (0, P.H)(L, e => r ? 0 : e),
                        z = $(t, e => e > 0 && e < 1);
                    return (0, l.jsxs)("div", {
                        className: "mt-[800px] flex h-[7000px] w-full overflow-hidden bg-black",
                        ref: s,
                        children: [(0, l.jsxs)(S.E.div, {
                            className: "fixed top-[30vh] w-screen sm:top-[20vh] ",
                            style: {
                                minWidth: 720,
                                z: C,
                                x: M,
                                y: F,
                                scale: r ? 1 : .9,
                                transformOrigin: "center top",
                                transformStyle: "preserve-3d",
                                transformPerspective: "2000px",
                                rotateX: j,
                                transition: "transform .8s cubic-bezier(0.16, 1, 0.3, 1)",
                                willChange: "transform"
                            },
                            children: [(0, l.jsx)(tL, {
                                segmentsInfo: a,
                                progress: t,
                                graphScale: b,
                                isLowPerformanceMode: w,
                                cameraRotation: j
                            }), a.map((e, i) => {
                                let {
                                    head: s,
                                    tail: n,
                                    waypoints: o
                                } = e, c = r ? 180 : 70;
                                return (0, l.jsx)(l.Fragment, {
                                    children: (0, l.jsx)(S.E.div, {
                                        className: "absolute left-0 top-0 z-20",
                                        style: {
                                            rotateX: -j,
                                            transformOrigin: "center bottom",
                                            height: c,
                                            x: s.x * b,
                                            y: s.y * b - c
                                        },
                                        children: (0, l.jsx)(tH, {
                                            waypoint: o[0],
                                            isActive: u === i,
                                            index: i,
                                            totalWaypointsCount: a.length + 1,
                                            progress: t,
                                            isLowPerformanceMode: w,
                                            withDetails: r,
                                            offsetHeight: c
                                        })
                                    }, i)
                                })
                            })]
                        }), !r && (0, l.jsx)(S.E.div, {
                            animate: {
                                opacity: z ? 1 : 0
                            },
                            className: "pointer-events-none fixed bottom-0 left-0 right-0 z-50 h-80 bg-gradient-to-t from-black to-transparent text-white",
                            children: a.map((e, t) => {
                                let {
                                    head: i,
                                    tail: s,
                                    waypoints: n
                                } = e;
                                return (0, l.jsx)(tW, {
                                    isActive: u === t,
                                    waypoint: n[0]
                                }, t)
                            })
                        })]
                    })
                },
                tR = e => {
                    let {
                        progress: t
                    } = e;
                    return (0, l.jsx)("div", {
                        className: "h-full max-h-[200px] w-0.5 bg-[rgba(255,255,255,.2)]",
                        children: (0, l.jsx)(S.E.div, {
                            className: "bg-primary h-full origin-top bg-[rgba(255,255,255,.4)]",
                            style: {
                                scaleY: t
                            }
                        })
                    })
                },
                tP = e => {
                    let t = (0, o.useRef)(),
                        {
                            scrollYProgress: i
                        } = (0, N.v)({
                            target: t,
                            offset: ["start start", "end end"]
                        }),
                        s = (0, y.c)(0);
                    (0, M.p)(() => {
                        s.set(i.get())
                    });
                    let n = (0, P.H)(s, [0, .1, .9, 1], [.1, .5, .5, 1]),
                        r = (0, P.H)(s, [.1, .9], [0, 1]),
                        a = (0, P.H)(s, [0, .1, .5, 1], [0, .5, .5, 1]),
                        c = (0, P.H)(n, [0, .5], [1, 1]),
                        d = (0, P.H)(n, [0, .5], [200, 0]),
                        h = (0, P.H)(s, [.925, 1], [1, 0]),
                        [m, x] = (0, o.useState)(!0);
                    (0, E.W)(h, "change", e => {
                        if (0 === e) {
                            x(!1);
                            return
                        }
                        x(!0)
                    });
                    let u = $(s, e => e > 0 && e < 1);
                    return (0, l.jsxs)("section", {
                        className: "w-full bg-black pt-24",
                        ref: t,
                        children: [(0, l.jsxs)(S.E.div, {
                            style: {
                                scale: c,
                                y: d
                            },
                            className: "sticky top-0 z-20 h-fit w-full bg-[rgba(0,0,0,.8)] pt-12 text-center text-white",
                            children: [(0, l.jsx)("div", {
                                className: "flex flex-col items-center justify-center gap-2",
                                children: (0, l.jsx)("h3", {
                                    className: "font-sans-3xl mx-auto mb-4 max-w-[18ch] lg:font-sans-2xl",
                                    children: (0, l.jsx)(et, {
                                        progress: n,
                                        children: (0, l.jsx)("div", {
                                            className: "mt-20 h-fit",
                                            children: "Unlock all the potential your life holds"
                                        })
                                    })
                                })
                            }), (0, l.jsx)("div", {
                                style: {
                                    visibility: m ? "visible" : "hidden"
                                },
                                children: (0, l.jsx)(eO, {
                                    height: "200px",
                                    color: "rgba(0,0,0,.8)"
                                })
                            })]
                        }), (0, l.jsx)(S.E.div, {
                            style: {
                                opacity: h
                            },
                            children: (0, l.jsx)(tI, {
                                timelineProgress: r,
                                transitionProgress: a
                            })
                        }), (0, l.jsx)(S.E.div, {
                            className: "pointer-events-none fixed bottom-6 right-4 z-50 h-24 md:bottom-16 md:left-16",
                            animate: {
                                opacity: u ? 1 : 0
                            },
                            children: (0, l.jsx)(tR, {
                                progress: s
                            })
                        })]
                    })
                };
            let tO = [{
                name: "Arielle Zuckerberg",
                title: "Partner at Long Journey Ventures, formerly Coatue",
                image: "/advisors-section/arielle.png"
            }, {
                name: "Dr. Jordan Shlain, MD",
                title: "Founder of Private Medical, America's top concierge medicine service",
                image: "/advisors-section/jordan.png"
            }, {
                name: "Shaan Puri",
                title: "6x Founder, investor, co-host of My First Million podcast",
                image: "/advisors-section/shaan.png"
            }, {
                name: "Justin Mares",
                title: "Founder, Kettle & Fire, TrueMed, Surely, Perfect Keto",
                image: "/advisors-section/justin.png"
            }, {
                name: "Dr. Derick En'Wezoh, MD",
                title: "Partner at Susa Ventures, Harvard Medical School, Stanford MBA",
                image: "/advisors-section/derick.png"
            }, {
                name: "Dr. Robert Lufkin, MD",
                title: "Physician & medical school professor at UCLA & USC, author, entrepreneur",
                image: "/advisors-section/robert.png"
            }, {
                name: "Dr. Leigh Erin Connealy, MD",
                title: "Physician & founder of The Centre for New Medicine",
                image: "/advisors-section/leigh.png"
            }, {
                name: "Balaji Srinivasan",
                title: "Investor & entrepreneur, former CTO of Coinbase, former General Partner at Andreessen Horowitz",
                image: "/advisors-section/balaji.png"
            }, {
                name: "Cyan Bannister",
                title: "Investor at Long Journey Ventures, former Partner at Founders Fund",
                image: "/advisors-section/cyan.png"
            }, {
                name: "Dr. Abe Malkin, MD",
                title: "Physician Entrepreneur, Founder at Drip Hydration & Concierge MD",
                image: "/advisors-section/abe.png"
            }];
            var tT = e => {
                let t = (0, o.useRef)(),
                    i = (0, eT.Y)(t);
                return (0, l.jsx)("section", {
                    className: "relative mt-[10vw] flex h-auto w-screen flex-col items-center bg-white px-4",
                    ref: t,
                    children: (0, l.jsxs)("div", {
                        className: "flex max-w-[1132px] flex-col items-center gap-[72px]",
                        children: [(0, l.jsxs)("div", {
                            className: "flex w-full max-w-[585px] flex-col items-center gap-6 px-4",
                            children: [(0, l.jsx)("div", {
                                className: "font-sans-3xl text-center text-black lg:font-sans-2xl",
                                children: (0, l.jsx)("h1", {
                                    children: "Backed by the best"
                                })
                            }), (0, l.jsx)("div", {
                                className: "w-full max-w-[533px]",
                                children: (0, l.jsxs)("p", {
                                    className: "font-sans-lg text-center text-black opacity-50",
                                    children: ["Supported by the world's top longevity doctors,", (0, l.jsx)("br", {}), " scientists, and technologists."]
                                })
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "relative grid gap-x-8 md:grid-cols-2",
                            children: [(0, l.jsx)("div", {
                                className: "absolute left-[50%] top-[50%] hidden h-[115%] translate-x-[-50%] translate-y-[-50%] md:block",
                                children: (0, l.jsx)(eL, {
                                    length: "auto",
                                    color: "#E4E4E7",
                                    vertical: !0,
                                    head: 32
                                })
                            }), tO.map((e, t) => (0, l.jsx)(o.Fragment, {
                                children: (0, l.jsxs)(S.E.div, {
                                    className: "my-[-0.5px] flex flex-row items-center gap-6 border-y border-[#E4E4E7] py-4",
                                    animate: {
                                        opacity: i ? 1 : 0
                                    },
                                    transition: {
                                        duration: 1,
                                        delay: .1 * t
                                    },
                                    children: [(0, l.jsx)("img", {
                                        className: "width-[72px] height-[72px]",
                                        src: e.image,
                                        alt: "",
                                        width: 72,
                                        height: 72
                                    }), (0, l.jsxs)("div", {
                                        className: "flex flex-col gap-1",
                                        children: [(0, l.jsx)("div", {
                                            className: "font-sans-md",
                                            children: e.name
                                        }), (0, l.jsx)("div", {
                                            className: "font-sans-sm text-[#8e8e9d]",
                                            children: e.title
                                        })]
                                    })]
                                })
                            }, t))]
                        })]
                    })
                })
            };
            let tG = "We believe that if you improve your health, you can improve every other aspect of your life. < But mainstream medicine hasn’t helped many of us do that. It ignores red flags, reacts too late, and misses the full picture. < Our vision of the future is a completely different way of looking at health. A system where proactive health is the norm. Where it’s easy to slow aging and prevent disease. Where our food and environments are default healthy and toxin free. Where everyone is able to reach their peak potential. < It’s time to unleash your inner Superpower.".split(" ").concat("Read our manifesto."),
                tV = e => {
                    let {
                        word: t,
                        isVisible: i
                    } = e;
                    return (0, l.jsxs)(S.E.span, {
                        initial: {
                            opacity: .1,
                            filter: "blur(10px)"
                        },
                        animate: {
                            opacity: i ? 1 : 0,
                            filter: i ? "blur(0px)" : "blur(10px)"
                        },
                        transition: {
                            duration: .4
                        },
                        children: [t, ""]
                    })
                };
            var t_ = e => {
                    let t = (0, o.useRef)(),
                        i = (0, o.useRef)(),
                        {
                            scrollYProgress: s
                        } = (0, N.v)({
                            target: i,
                            offset: ["start end", "40% 50%"]
                        }),
                        n = tG.length,
                        [r, a] = (0, o.useState)(0);
                    (0, E.W)(s, "change", e => {
                        a(Math.round(e * n))
                    });
                    let c = $(s, e => e >= 1);
                    return (0, l.jsx)("section", {
                        className: "relative",
                        children: (0, l.jsx)("div", {
                            className: "align-center flex justify-center px-6",
                            children: (0, l.jsxs)("div", {
                                className: "flex w-full max-w-[600px] flex-col items-center justify-center gap-[30px] py-[200px] lg:max-w-[670px] lg:py-[300px] ",
                                children: [(0, l.jsx)("h2", {
                                    className: "font-sans-3xl mx-4 mb-6 max-w-[450px] text-center lg:font-sans-2xl",
                                    children: "For people who want more"
                                }), (0, l.jsx)("h2", {
                                    className: "font-sans-xl text-center text-[#5a5a5a]",
                                    ref: i,
                                    children: tG.map((e, t) => "<" === e ? (0, l.jsx)("div", {
                                        children: (0, l.jsx)("br", {})
                                    }, t) : t === tG.length - 1 ? (0, l.jsx)("div", {
                                        children: (0, l.jsx)("a", {
                                            className: "cursor-pointer underline duration-300 hover:text-[#FC5F2B]",
                                            href: "https://www.superpower.com/manifesto",
                                            target: "_blank",
                                            children: (0, l.jsx)(tV, {
                                                word: "".concat(e, " "),
                                                isVisible: r > t
                                            }, t)
                                        })
                                    }, t) : (0, l.jsx)(tV, {
                                        word: "".concat(e, " "),
                                        isVisible: r > t
                                    }, t))
                                }), (0, l.jsx)("div", {
                                    className: "pt-8",
                                    ref: t,
                                    children: (0, l.jsx)(eu, {
                                        children: (0, l.jsx)(X, {
                                            outline: !0,
                                            isVisible: c,
                                            hover: !0,
                                            children: "Join waitlist"
                                        })
                                    })
                                })]
                            })
                        })
                    })
                },
                tD = e => {
                    let {
                        href: t,
                        children: i
                    } = e;
                    return (0, l.jsx)("a", {
                        href: t,
                        className: "",
                        style: {
                            textDecoration: "none"
                        },
                        target: "_black",
                        rel: "noreferrer",
                        children: i
                    })
                },
                tY = e => {
                    let [t, i] = (0, o.useState)("scrolling down"), [s, n] = (0, o.useState)(!1), r = g(v.md);
                    return (0, o.useEffect)(() => {
                        let e = window.pageYOffset,
                            t = !1,
                            s = () => {
                                let s = window.pageYOffset;
                                if (0 > Math.abs(s - e)) {
                                    t = !1;
                                    return
                                }
                                i(s > e ? "scrolling down" : "scrolling up"), e = s > 0 ? s : 0, t = !1
                            },
                            r = () => {
                                t || (window.requestAnimationFrame(s), t = !0), window.pageYOffset > window.innerHeight ? n(!0) : n(!1)
                            };
                        return window.addEventListener("scroll", r), () => window.removeEventListener("scroll", r)
                    }, [t]), (0, l.jsxs)("nav", {
                        className: "font-mono-xs text-[8px] sm:text-[12px]",
                        children: [(0, l.jsx)("div", {
                            className: "fixed left-0 top-0 z-[100] block h-14 w-full bg-[rgba(0,0,0,0.5)] backdrop-blur-sm sm:hidden"
                        }), (0, l.jsx)("div", {
                            className: "fixed left-0 top-0 z-[100] flex h-auto w-full items-center justify-center sm:mix-blend-normal",
                            style: {
                                mixBlendMode: r && !0 == s ? "difference" : "normal"
                            },
                            children: (0, l.jsxs)("div", {
                                className: "relative flex h-14 w-full items-center justify-center p-2 pl-3 sm:h-[68px] sm:p-3 sm:pl-5",
                                children: [(0, l.jsx)("a", {
                                    href: "/",
                                    className: "w-[140px] sm:w-[200px]",
                                    children: (0, l.jsx)("img", {
                                        className: "w-full",
                                        src: "/logo.svg",
                                        alt: "logo",
                                        width: 180,
                                        height: 100
                                    })
                                }), (0, l.jsxs)("div", {
                                    className: "flex h-full w-full items-center justify-end gap-6 tracking-tighter sm:gap-8",
                                    children: [(0, l.jsxs)("ul", {
                                        className: "flex items-center justify-between gap-6 text-white sm:gap-8",
                                        children: [(0, l.jsx)(tD, {
                                            href: "/manifesto",
                                            children: "Manifesto"
                                        }), (0, l.jsx)(tD, {
                                            href: "https://app.superpower.com/signin",
                                            children: "Log in"
                                        })]
                                    }), (0, l.jsx)(tq, {})]
                                })]
                            })
                        }), (0, l.jsx)(eu, {
                            children: (0, l.jsx)("a", {
                                className: " fixed right-0 top-0 z-[101] h-14 cursor-pointer p-2 pl-3 sm:h-[68px] sm:p-3 sm:pl-5",
                                children: (0, l.jsx)(tq, {})
                            })
                        })]
                    })
                };
            let tq = e => {
                let {
                    className: t
                } = e;
                return (0, l.jsx)("button", {
                    className: "h-full w-auto bg-[#FC5F2B] px-2 uppercase text-white hover:bg-[rgba(252,95,43,0.8)] sm:px-4",
                    style: {
                        transition: "0.3s ease-in-out"
                    },
                    children: "Join Waitlist"
                })
            };
            var tX = () => (0, l.jsx)(S.E.div, {
                className: "pointer-events-none fixed inset-0 z-[9999999999] flex items-center justify-center bg-black",
                initial: {
                    opacity: 1
                },
                animate: {
                    opacity: 0,
                    transition: {
                        delay: .5
                    }
                }
            });

            function tJ() {
                return (0, l.jsx)(ex.pi, {
                    root: !0,
                    options: {
                        lerp: .1,
                        duration: 1.5
                    },
                    children: (0, l.jsxs)("main", {
                        className: "bg-white",
                        children: [(0, l.jsx)(tY, {}), (0, l.jsx)(tX, {}), (0, l.jsxs)(eA, {
                            children: [(0, l.jsx)(tm, {}), (0, l.jsx)(e9, {}), (0, l.jsx)(tC, {}), (0, l.jsx)(eY, {}), (0, l.jsx)(tT, {}), (0, l.jsx)(tj, {}), (0, l.jsx)(ty, {}), (0, l.jsx)(tP, {}), (0, l.jsx)(tN, {}), (0, l.jsx)(t_, {}), (0, l.jsx)(w, {})]
                        })]
                    })
                })
            }
        },
        6506: function (e, t, i) {
            "use strict";
            i.d(t, {
                t: function () {
                    return o
                }
            });
            var s = i(7437),
                n = i(804),
                r = i(5282),
                a = i(2265);
            let l = (0, a.createContext)({
                    x: new n.Hg,
                    y: new n.Hg,
                    isPressed: !1
                }),
                o = () => (0, a.useContext)(l);
            t.default = e => {
                let {
                    children: t
                } = e, i = (0, r.c)(0), n = (0, r.c)(0), [o, c] = (0, a.useState)(!1);
                return (0, a.useEffect)(() => {
                    let e = e => {
                            i.set(e.clientX), n.set(e.clientY)
                        },
                        t = () => c(!0),
                        s = () => c(!1);
                    return window.addEventListener("pointermove", e), window.addEventListener("pointerdown", t), window.addEventListener("pointerup", s), () => {
                        window.removeEventListener("pointermove", e), window.removeEventListener("pointerdown", t), window.removeEventListener("pointerup", s)
                    }
                }, [i, n]), (0, s.jsx)(l.Provider, {
                    value: {
                        x: i,
                        y: n,
                        isPressed: o
                    },
                    children: t
                })
            }
        },
        7118: function (e, t, i) {
            "use strict";
            i.d(t, {
                $: function () {
                    return l
                },
                WindowDimensionContextProvider: function () {
                    return a
                }
            });
            var s = i(7437),
                n = i(2265);
            let r = (0, n.createContext)({
                    width: 0,
                    height: 0,
                    debounced: {
                        width: 0,
                        height: 0
                    },
                    isResizing: !1
                }),
                a = e => {
                    let {
                        children: t
                    } = e, [i, a] = (0, n.useState)({
                        width: 0,
                        height: 0
                    }), [l, o] = (0, n.useState)({
                        width: 0,
                        height: 0
                    }), [c, d] = (0, n.useState)(!1);
                    return (0, n.useEffect)(() => {
                        let e;
                        let t = () => {
                            a({
                                width: window.innerWidth,
                                height: window.innerHeight
                            }), e && clearTimeout(e), e = setTimeout(() => {
                                o({
                                    width: window.innerWidth,
                                    height: window.innerHeight
                                }), d(!1)
                            }, 500), d(!0)
                        };
                        return t(), window.addEventListener("resize", t), () => {
                            e && clearTimeout(e), window.removeEventListener("resize", t)
                        }
                    }, []), (0, s.jsx)(r.Provider, {
                        value: {
                            ...i,
                            debounced: {
                                ...l
                            },
                            isResizing: c
                        },
                        children: t
                    })
                },
                l = () => (0, n.useContext)(r)
        }
    },
    function (e) {
        e.O(0, [282, 701, 971, 23, 744], function () {
            return e(e.s = 4449)
        }), _N_E = e.O()
    }
]);