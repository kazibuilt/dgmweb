"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7046], {
        70809: function (e, t, n) {
            var r = n(95495);
            n.o(r, "usePathname") && n.d(t, {
                usePathname: function () {
                    return r.usePathname
                }
            }), n.o(r, "useRouter") && n.d(t, {
                useRouter: function () {
                    return r.useRouter
                }
            }), n.o(r, "useSearchParams") && n.d(t, {
                useSearchParams: function () {
                    return r.useSearchParams
                }
            }), n.o(r, "useServerInsertedHTML") && n.d(t, {
                useServerInsertedHTML: function () {
                    return r.useServerInsertedHTML
                }
            })
        },
        87296: function (e, t, n) {
            Object.defineProperty(t, "$", {
                enumerable: !0,
                get: function () {
                    return i
                }
            });
            let r = n(2675);

            function i(e) {
                let {
                    createServerReference: t
                } = n(2288);
                return t(e, r.callServer)
            }
        },
        33151: function (e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "Image", {
                enumerable: !0,
                get: function () {
                    return v
                }
            });
            let r = n(36316),
                i = n(76561),
                o = n(86592),
                a = i._(n(92114)),
                u = r._(n(63032)),
                l = r._(n(80141)),
                s = n(29165),
                c = n(73596),
                d = n(45169);
            n(1498);
            let f = n(29378),
                p = r._(n(43529)),
                h = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !1
                };

            function m(e, t, n, r, i, o, a) {
                let u = null == e ? void 0 : e.src;
                e && e["data-loaded-src"] !== u && (e["data-loaded-src"] = u, ("decode" in e ? e.decode() : Promise.resolve()).catch(() => {}).then(() => {
                    if (e.parentElement && e.isConnected) {
                        if ("empty" !== t && i(!0), null == n ? void 0 : n.current) {
                            let t = new Event("load");
                            Object.defineProperty(t, "target", {
                                writable: !1,
                                value: e
                            });
                            let r = !1,
                                i = !1;
                            n.current({
                                ...t,
                                nativeEvent: t,
                                currentTarget: e,
                                target: e,
                                isDefaultPrevented: () => r,
                                isPropagationStopped: () => i,
                                persist: () => {},
                                preventDefault: () => {
                                    r = !0, t.preventDefault()
                                },
                                stopPropagation: () => {
                                    i = !0, t.stopPropagation()
                                }
                            })
                        }(null == r ? void 0 : r.current) && r.current(e)
                    }
                }))
            }

            function g(e) {
                return a.use ? {
                    fetchPriority: e
                } : {
                    fetchpriority: e
                }
            }
            "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
            let y = (0, a.forwardRef)((e, t) => {
                let {
                    src: n,
                    srcSet: r,
                    sizes: i,
                    height: u,
                    width: l,
                    decoding: s,
                    className: c,
                    style: d,
                    fetchPriority: f,
                    placeholder: p,
                    loading: h,
                    unoptimized: y,
                    fill: b,
                    onLoadRef: v,
                    onLoadingCompleteRef: w,
                    setBlurComplete: _,
                    setShowAltText: S,
                    sizesInput: P,
                    onLoad: j,
                    onError: x,
                    ...C
                } = e;
                return (0, o.jsx)("img", {
                    ...C,
                    ...g(f),
                    loading: h,
                    width: l,
                    height: u,
                    decoding: s,
                    "data-nimg": b ? "fill" : "1",
                    className: c,
                    style: d,
                    sizes: i,
                    srcSet: r,
                    src: n,
                    ref: (0, a.useCallback)(e => {
                        t && ("function" == typeof t ? t(e) : "object" == typeof t && (t.current = e)), e && (x && (e.src = e.src), e.complete && m(e, p, v, w, _, y, P))
                    }, [n, p, v, w, _, x, y, P, t]),
                    onLoad: e => {
                        m(e.currentTarget, p, v, w, _, y, P)
                    },
                    onError: e => {
                        S(!0), "empty" !== p && _(!0), x && x(e)
                    }
                })
            });

            function b(e) {
                let {
                    isAppRouter: t,
                    imgAttributes: n
                } = e, r = {
                    as: "image",
                    imageSrcSet: n.srcSet,
                    imageSizes: n.sizes,
                    crossOrigin: n.crossOrigin,
                    referrerPolicy: n.referrerPolicy,
                    ...g(n.fetchPriority)
                };
                return t && u.default.preload ? (u.default.preload(n.src, r), null) : (0, o.jsx)(l.default, {
                    children: (0, o.jsx)("link", {
                        rel: "preload",
                        href: n.srcSet ? void 0 : n.src,
                        ...r
                    }, "__nimg-" + n.src + n.srcSet + n.sizes)
                })
            }
            let v = (0, a.forwardRef)((e, t) => {
                let n = (0, a.useContext)(f.RouterContext),
                    r = (0, a.useContext)(d.ImageConfigContext),
                    i = (0, a.useMemo)(() => {
                        let e = h || r || c.imageConfigDefault,
                            t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
                            n = e.deviceSizes.sort((e, t) => e - t);
                        return {
                            ...e,
                            allSizes: t,
                            deviceSizes: n
                        }
                    }, [r]),
                    {
                        onLoad: u,
                        onLoadingComplete: l
                    } = e,
                    m = (0, a.useRef)(u);
                (0, a.useEffect)(() => {
                    m.current = u
                }, [u]);
                let g = (0, a.useRef)(l);
                (0, a.useEffect)(() => {
                    g.current = l
                }, [l]);
                let [v, w] = (0, a.useState)(!1), [_, S] = (0, a.useState)(!1), {
                    props: P,
                    meta: j
                } = (0, s.getImgProps)(e, {
                    defaultLoader: p.default,
                    imgConf: i,
                    blurComplete: v,
                    showAltText: _
                });
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(y, {
                        ...P,
                        unoptimized: j.unoptimized,
                        placeholder: j.placeholder,
                        fill: j.fill,
                        onLoadRef: m,
                        onLoadingCompleteRef: g,
                        setBlurComplete: w,
                        setShowAltText: S,
                        sizesInput: e.sizes,
                        ref: t
                    }), j.priority ? (0, o.jsx)(b, {
                        isAppRouter: !n,
                        imgAttributes: P
                    }) : null]
                })
            });
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        73127: function (e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "AmpStateContext", {
                enumerable: !0,
                get: function () {
                    return r
                }
            });
            let r = n(36316)._(n(92114)).default.createContext({})
        },
        52661: function (e, t) {
            function n(e) {
                let {
                    ampFirst: t = !1,
                    hybrid: n = !1,
                    hasQuery: r = !1
                } = void 0 === e ? {} : e;
                return t || n && r
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "isInAmpMode", {
                enumerable: !0,
                get: function () {
                    return n
                }
            })
        },
        29165: function (e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getImgProps", {
                enumerable: !0,
                get: function () {
                    return u
                }
            }), n(1498);
            let r = n(24421),
                i = n(73596);

            function o(e) {
                return void 0 !== e.default
            }

            function a(e) {
                return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
            }

            function u(e, t) {
                var n;
                let u, l, s, {
                        src: c,
                        sizes: d,
                        unoptimized: f = !1,
                        priority: p = !1,
                        loading: h,
                        className: m,
                        quality: g,
                        width: y,
                        height: b,
                        fill: v = !1,
                        style: w,
                        overrideSrc: _,
                        onLoad: S,
                        onLoadingComplete: P,
                        placeholder: j = "empty",
                        blurDataURL: x,
                        fetchPriority: C,
                        layout: E,
                        objectFit: O,
                        objectPosition: M,
                        lazyBoundary: z,
                        lazyRoot: k,
                        ...R
                    } = e,
                    {
                        imgConf: I,
                        showAltText: A,
                        blurComplete: L,
                        defaultLoader: T
                    } = t,
                    D = I || i.imageConfigDefault;
                if ("allSizes" in D) u = D;
                else {
                    let e = [...D.deviceSizes, ...D.imageSizes].sort((e, t) => e - t),
                        t = D.deviceSizes.sort((e, t) => e - t);
                    u = {
                        ...D,
                        allSizes: e,
                        deviceSizes: t
                    }
                }
                if (void 0 === T) throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");
                let U = R.loader || T;
                delete R.loader, delete R.srcSet;
                let N = "__next_img_default" in U;
                if (N) {
                    if ("custom" === u.loader) throw Error('Image with src "' + c + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')
                } else {
                    let e = U;
                    U = t => {
                        let {
                            config: n,
                            ...r
                        } = t;
                        return e(r)
                    }
                }
                if (E) {
                    "fill" === E && (v = !0);
                    let e = {
                        intrinsic: {
                            maxWidth: "100%",
                            height: "auto"
                        },
                        responsive: {
                            width: "100%",
                            height: "auto"
                        }
                    } [E];
                    e && (w = {
                        ...w,
                        ...e
                    });
                    let t = {
                        responsive: "100vw",
                        fill: "100vw"
                    } [E];
                    t && !d && (d = t)
                }
                let B = "",
                    W = a(y),
                    F = a(b);
                if ("object" == typeof (n = c) && (o(n) || void 0 !== n.src)) {
                    let e = o(c) ? c.default : c;
                    if (!e.src) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(e));
                    if (!e.height || !e.width) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(e));
                    if (l = e.blurWidth, s = e.blurHeight, x = x || e.blurDataURL, B = e.src, !v) {
                        if (W || F) {
                            if (W && !F) {
                                let t = W / e.width;
                                F = Math.round(e.height * t)
                            } else if (!W && F) {
                                let t = F / e.height;
                                W = Math.round(e.width * t)
                            }
                        } else W = e.width, F = e.height
                    }
                }
                let G = !p && ("lazy" === h || void 0 === h);
                (!(c = "string" == typeof c ? c : B) || c.startsWith("data:") || c.startsWith("blob:")) && (f = !0, G = !1), u.unoptimized && (f = !0), N && c.endsWith(".svg") && !u.dangerouslyAllowSVG && (f = !0), p && (C = "high");
                let H = a(g),
                    q = Object.assign(v ? {
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        objectFit: O,
                        objectPosition: M
                    } : {}, A ? {} : {
                        color: "transparent"
                    }, w),
                    $ = L || "empty" === j ? null : "blur" === j ? 'url("data:image/svg+xml;charset=utf-8,' + (0, r.getImageBlurSvg)({
                        widthInt: W,
                        heightInt: F,
                        blurWidth: l,
                        blurHeight: s,
                        blurDataURL: x || "",
                        objectFit: q.objectFit
                    }) + '")' : 'url("' + j + '")',
                    V = $ ? {
                        backgroundSize: q.objectFit || "cover",
                        backgroundPosition: q.objectPosition || "50% 50%",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: $
                    } : {},
                    J = function (e) {
                        let {
                            config: t,
                            src: n,
                            unoptimized: r,
                            width: i,
                            quality: o,
                            sizes: a,
                            loader: u
                        } = e;
                        if (r) return {
                            src: n,
                            srcSet: void 0,
                            sizes: void 0
                        };
                        let {
                            widths: l,
                            kind: s
                        } = function (e, t, n) {
                            let {
                                deviceSizes: r,
                                allSizes: i
                            } = e;
                            if (n) {
                                let e = /(^|\s)(1?\d?\d)vw/g,
                                    t = [];
                                for (let r; r = e.exec(n); r) t.push(parseInt(r[2]));
                                if (t.length) {
                                    let e = .01 * Math.min(...t);
                                    return {
                                        widths: i.filter(t => t >= r[0] * e),
                                        kind: "w"
                                    }
                                }
                                return {
                                    widths: i,
                                    kind: "w"
                                }
                            }
                            return "number" != typeof t ? {
                                widths: r,
                                kind: "w"
                            } : {
                                widths: [...new Set([t, 2 * t].map(e => i.find(t => t >= e) || i[i.length - 1]))],
                                kind: "x"
                            }
                        }(t, i, a), c = l.length - 1;
                        return {
                            sizes: a || "w" !== s ? a : "100vw",
                            srcSet: l.map((e, r) => u({
                                config: t,
                                src: n,
                                quality: o,
                                width: e
                            }) + " " + ("w" === s ? e : r + 1) + s).join(", "),
                            src: u({
                                config: t,
                                src: n,
                                quality: o,
                                width: l[c]
                            })
                        }
                    }({
                        config: u,
                        src: c,
                        unoptimized: f,
                        width: W,
                        quality: H,
                        sizes: d,
                        loader: U
                    });
                return {
                    props: {
                        ...R,
                        loading: G ? "lazy" : h,
                        fetchPriority: C,
                        width: W,
                        height: F,
                        decoding: "async",
                        className: m,
                        style: {
                            ...q,
                            ...V
                        },
                        sizes: J.sizes,
                        srcSet: J.srcSet,
                        src: _ || J.src
                    },
                    meta: {
                        unoptimized: f,
                        priority: p,
                        placeholder: j,
                        fill: v
                    }
                }
            }
        },
        80141: function (e, t, n) {
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function (e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    default: function () {
                        return m
                    },
                    defaultHead: function () {
                        return d
                    }
                });
            let r = n(36316),
                i = n(76561),
                o = n(86592),
                a = i._(n(92114)),
                u = r._(n(34458)),
                l = n(73127),
                s = n(77817),
                c = n(52661);

            function d(e) {
                void 0 === e && (e = !1);
                let t = [(0, o.jsx)("meta", {
                    charSet: "utf-8"
                })];
                return e || t.push((0, o.jsx)("meta", {
                    name: "viewport",
                    content: "width=device-width"
                })), t
            }

            function f(e, t) {
                return "string" == typeof t || "number" == typeof t ? e : t.type === a.default.Fragment ? e.concat(a.default.Children.toArray(t.props.children).reduce((e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
            }
            n(1498);
            let p = ["name", "httpEquiv", "charSet", "itemProp"];

            function h(e, t) {
                let {
                    inAmpMode: n
                } = t;
                return e.reduce(f, []).reverse().concat(d(n).reverse()).filter(function () {
                    let e = new Set,
                        t = new Set,
                        n = new Set,
                        r = {};
                    return i => {
                        let o = !0,
                            a = !1;
                        if (i.key && "number" != typeof i.key && i.key.indexOf("$") > 0) {
                            a = !0;
                            let t = i.key.slice(i.key.indexOf("$") + 1);
                            e.has(t) ? o = !1 : e.add(t)
                        }
                        switch (i.type) {
                            case "title":
                            case "base":
                                t.has(i.type) ? o = !1 : t.add(i.type);
                                break;
                            case "meta":
                                for (let e = 0, t = p.length; e < t; e++) {
                                    let t = p[e];
                                    if (i.props.hasOwnProperty(t)) {
                                        if ("charSet" === t) n.has(t) ? o = !1 : n.add(t);
                                        else {
                                            let e = i.props[t],
                                                n = r[t] || new Set;
                                            ("name" !== t || !a) && n.has(e) ? o = !1 : (n.add(e), r[t] = n)
                                        }
                                    }
                                }
                        }
                        return o
                    }
                }()).reverse().map((e, t) => {
                    let r = e.key || t;
                    if (!n && "link" === e.type && e.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some(t => e.props.href.startsWith(t))) {
                        let t = {
                            ...e.props || {}
                        };
                        return t["data-href"] = t.href, t.href = void 0, t["data-optimized-fonts"] = !0, a.default.cloneElement(e, t)
                    }
                    return a.default.cloneElement(e, {
                        key: r
                    })
                })
            }
            let m = function (e) {
                let {
                    children: t
                } = e, n = (0, a.useContext)(l.AmpStateContext), r = (0, a.useContext)(s.HeadManagerContext);
                return (0, o.jsx)(u.default, {
                    reduceComponentsToState: h,
                    headManager: r,
                    inAmpMode: (0, c.isInAmpMode)(n),
                    children: t
                })
            };
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        24421: function (e, t) {
            function n(e) {
                let {
                    widthInt: t,
                    heightInt: n,
                    blurWidth: r,
                    blurHeight: i,
                    blurDataURL: o,
                    objectFit: a
                } = e, u = r ? 40 * r : t, l = i ? 40 * i : n, s = u && l ? "viewBox='0 0 " + u + " " + l + "'" : "";
                return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + s + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + (s ? "none" : "contain" === a ? "xMidYMid" : "cover" === a ? "xMidYMid slice" : "none") + "' style='filter: url(%23b);' href='" + o + "'/%3E%3C/svg%3E"
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getImageBlurSvg", {
                enumerable: !0,
                get: function () {
                    return n
                }
            })
        },
        45169: function (e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ImageConfigContext", {
                enumerable: !0,
                get: function () {
                    return o
                }
            });
            let r = n(36316)._(n(92114)),
                i = n(73596),
                o = r.default.createContext(i.imageConfigDefault)
        },
        73596: function (e, t) {
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function (e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    VALID_LOADERS: function () {
                        return n
                    },
                    imageConfigDefault: function () {
                        return r
                    }
                });
            let n = ["default", "imgix", "cloudinary", "akamai", "custom"],
                r = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    loaderFile: "",
                    domains: [],
                    disableStaticImages: !1,
                    minimumCacheTTL: 60,
                    formats: ["image/webp"],
                    dangerouslyAllowSVG: !1,
                    contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
                    contentDispositionType: "inline",
                    remotePatterns: [],
                    unoptimized: !1
                }
        },
        43529: function (e, t) {
            function n(e) {
                let {
                    config: t,
                    src: n,
                    width: r,
                    quality: i
                } = e;
                return n
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function () {
                    return r
                }
            }), n.__next_img_default = !0;
            let r = n
        },
        18935: function (e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "BailoutToCSR", {
                enumerable: !0,
                get: function () {
                    return i
                }
            });
            let r = n(39350);

            function i(e) {
                let {
                    reason: t,
                    children: n
                } = e;
                if ("undefined" == typeof window) throw new r.BailoutToCSRError(t);
                return n
            }
        },
        47444: function (e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "PreloadCss", {
                enumerable: !0,
                get: function () {
                    return o
                }
            });
            let r = n(86592),
                i = n(45966);

            function o(e) {
                let {
                    moduleIds: t
                } = e;
                if ("undefined" != typeof window) return null;
                let n = (0, i.getExpectedRequestStore)("next/dynamic css"),
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
        34458: function (e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function () {
                    return u
                }
            });
            let r = n(92114),
                i = "undefined" == typeof window,
                o = i ? () => {} : r.useLayoutEffect,
                a = i ? () => {} : r.useEffect;

            function u(e) {
                let {
                    headManager: t,
                    reduceComponentsToState: n
                } = e;

                function u() {
                    if (t && t.mountedInstances) {
                        let i = r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                        t.updateHead(n(i, e))
                    }
                }
                if (i) {
                    var l;
                    null == t || null == (l = t.mountedInstances) || l.add(e.children), u()
                }
                return o(() => {
                    var n;
                    return null == t || null == (n = t.mountedInstances) || n.add(e.children), () => {
                        var n;
                        null == t || null == (n = t.mountedInstances) || n.delete(e.children)
                    }
                }), o(() => (t && (t._pendingUpdate = u), () => {
                    t && (t._pendingUpdate = u)
                })), a(() => (t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null), () => {
                    t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null)
                })), null
            }
        },
        2582: function (e, t, n) {
            n.r(t), n.d(t, {
                default: function () {
                    return s
                }
            });
            var r = n(70809);
            n(2675);
            var i = (0, n(87296).$)("31798a209daade2e8b256a2fb8a8fff811de61e8"),
                o = n(92114);

            function a(e) {
                let t = e.indexOf("#"),
                    n = e.indexOf("?"),
                    r = n > -1 && (t < 0 || n < t);
                return r || t > -1 ? {
                    pathname: e.substring(0, r ? n : t),
                    query: r ? e.substring(n, t > -1 ? t : void 0) : "",
                    hash: t > -1 ? e.slice(t) : ""
                } : {
                    pathname: e,
                    query: "",
                    hash: ""
                }
            }

            function u(e, t) {
                if (! function (e, t) {
                        if ("string" != typeof e) return !1;
                        let {
                            pathname: n
                        } = a(e);
                        return n === t || n.startsWith("".concat(t, "/"))
                    }(e, t)) return e;
                let n = e.slice(t.length);
                return n.startsWith("/") ? n : "/".concat(n)
            }
            let l = (e, t) => {
                let {
                    pathname: n,
                    query: r,
                    hash: i
                } = a(e);
                return t ? n.endsWith("/") ? "".concat(n).concat(r).concat(i) : "".concat(n, "/").concat(r).concat(i) : "".concat(n.replace(/\/$/, "") || "/").concat(r).concat(i)
            };

            function s(e) {
                let {
                    refresh: t,
                    zIndex: s,
                    basePath: c = "",
                    trailingSlash: d = !1
                } = e, f = (0, r.useRouter)(), p = (0, o.useRef)(f), [h, m] = (0, o.useState)();
                (0, o.useEffect)(() => {
                    p.current = f
                }, [f]), (0, o.useEffect)(() => {
                    let e = function (e = {}) {
                            let t = new AbortController;
                            return Promise.all([n.e(2938), n.e(3139)]).then(n.bind(n, 44477)).then(({
                                renderVisualEditing: n
                            }) => {
                                let {
                                    signal: r
                                } = t;
                                r.aborted || n(r, e)
                            }), () => {
                                t.abort()
                            }
                        }({
                            zIndex: s,
                            refresh: t || (e => {
                                switch (e.source) {
                                    case "manual":
                                        return e.livePreviewEnabled ? r() : o();
                                    case "mutation":
                                        return e.livePreviewEnabled ? a() : l();
                                    default:
                                        throw Error("Unknown refresh source", {
                                            cause: e
                                        })
                                }
                            }),
                            history: {
                                subscribe: e => (m(() => e), () => m(void 0)),
                                update: e => {
                                    switch (e.type) {
                                        case "push":
                                            return p.current.push(u(e.url, c));
                                        case "pop":
                                            return p.current.back();
                                        case "replace":
                                            return p.current.replace(u(e.url, c));
                                        default:
                                            throw Error("Unknown update type: ".concat(e.type))
                                    }
                                }
                            }
                        }),
                        r = () => (console.debug("Live preview is setup, calling router.refresh() to refresh the server components without refetching cached data"), p.current.refresh(), Promise.resolve()),
                        o = () => (console.debug("No loaders in live mode detected, or preview kit setup, revalidating root layout"), i()),
                        a = () => (console.debug("Live preview is setup, mutation is skipped assuming its handled by the live preview"), !1),
                        l = () => (console.debug("No loaders in live mode detected, or preview kit setup, revalidating root layout"), i());
                    return () => e()
                }, [c, t, s]);
                let g = (0, r.usePathname)(),
                    y = (0, r.useSearchParams)();
                return (0, o.useEffect)(() => {
                    h && h({
                        type: "push",
                        url: l(function (e, t) {
                            if (!e.startsWith("/") || !t) return e;
                            if ("/" === e && t) return t;
                            let {
                                pathname: n,
                                query: r,
                                hash: i
                            } = a(e);
                            return "".concat(t).concat(n).concat(r).concat(i)
                        }("".concat(g).concat((null == y ? void 0 : y.size) ? "?".concat(y) : ""), c), d)
                    })
                }, [c, h, g, y, d]), null
            }
        }
    }
]);