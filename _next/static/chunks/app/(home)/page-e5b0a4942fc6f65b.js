(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5608], {
        44040: (e, t, a) => {
            Promise.resolve().then(a.t.bind(a, 20810, 23)), Promise.resolve().then(a.bind(a, 44585)), Promise.resolve().then(a.bind(a, 51910)), Promise.resolve().then(a.bind(a, 5155)), Promise.resolve().then(a.bind(a, 23777)), Promise.resolve().then(a.bind(a, 35679)), Promise.resolve().then(a.bind(a, 1539)), Promise.resolve().then(a.bind(a, 29537)), Promise.resolve().then(a.bind(a, 99360)), Promise.resolve().then(a.bind(a, 79054)), Promise.resolve().then(a.bind(a, 28227)), Promise.resolve().then(a.bind(a, 15020)), Promise.resolve().then(a.bind(a, 67661)), Promise.resolve().then(a.bind(a, 18645)), Promise.resolve().then(a.bind(a, 61992)), Promise.resolve().then(a.bind(a, 15470)), Promise.resolve().then(a.bind(a, 21334)), Promise.resolve().then(a.bind(a, 79312)), Promise.resolve().then(a.bind(a, 16861)), Promise.resolve().then(a.bind(a, 66069)), Promise.resolve().then(a.bind(a, 96172)), Promise.resolve().then(a.bind(a, 23253)), Promise.resolve().then(a.bind(a, 420)), Promise.resolve().then(a.bind(a, 47003)), Promise.resolve().then(a.bind(a, 79964)), Promise.resolve().then(a.bind(a, 28426)), Promise.resolve().then(a.bind(a, 14214)), Promise.resolve().then(a.bind(a, 52874)), Promise.resolve().then(a.bind(a, 2133)), Promise.resolve().then(a.bind(a, 62985)), Promise.resolve().then(a.bind(a, 24938)), Promise.resolve().then(a.bind(a, 72874)), Promise.resolve().then(a.bind(a, 71463)), Promise.resolve().then(a.bind(a, 67527)), Promise.resolve().then(a.bind(a, 1)), Promise.resolve().then(a.bind(a, 40669)), Promise.resolve().then(a.bind(a, 75026)), Promise.resolve().then(a.bind(a, 60609)), Promise.resolve().then(a.bind(a, 67080))
        },
        62985: (e, t, a) => {
            "use strict";
            a.d(t, {
                LoadGl: () => l
            });
            let l = (0, a(14798).Q)(() => Promise.all([a.e(6558), a.e(9521), a.e(4522)]).then(a.bind(a, 4522)))
        },
        24938: (e, t, a) => {
            "use strict";
            a.d(t, {
                DiveDeeper: () => u
            });
            var l = a(69797),
                i = a(27601),
                s = a(45848),
                r = a(48795);
            let n = {
                    src: "/_next/dive-depper-day.png",
                    height: 1022,
                    width: 1532,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAP1BMVEVTTRiFeU1pXyrBt21zWTNxZDB3aTJdTSdVRBthVyuRiESNdT9yX0HIvXWkk092bTB9gSCrqEaDZza1plloUimu7n5+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nAXBiQHAIAgAsVNBQOvT6v6zNmGUd7felHKm1pWCrPnrUROAi5gT+LXH5AceAAE2IQ+7xgAAAABJRU5ErkJggg==",
                    blurWidth: 8,
                    blurHeight: 5
                },
                o = {
                    src: "/_next/dive-depper-night.png",
                    height: 1762,
                    width: 1532,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAANlBMVEUqEQtyQhJqZ0xKKAkqHQ4iDAgSCAM0GhFIJRpGJxeFWCDcul5GQS5hXUSNUgY5IAXmr0hdJgWekjHhAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAOElEQVR4nBXFSRLAMAgEscYGBuys//9sKrqIvGeTk3gtJVjPFVXN3qv+zdTVwj3QOHERcQwcgvQPMVUBYFFFFfgAAAAASUVORK5CYII=",
                    blurWidth: 7,
                    blurHeight: 8
                };
            var A = a(9673),
                d = a(22948),
                c = a(1278),
                h = a(64243),
                m = a(50080),
                g = a(76215);
            let u = () => {
                let e = (0, h.q)(e => e.reducedMotion);
                return (0, c.ui)(() => {
                    e || c.p8.matchMedia().add({
                        isLg: d.vl.query.lg,
                        isntLg: d.vl.query.maxLg
                    }, e => {
                        var t;
                        c.p8.effects.imageParallax("#dive-deeper-section .day-image", {
                            amount: .2
                        }), c.p8.effects.imageParallax("#dive-deeper-section .night-image", {
                            amount: (null === (t = e.conditions) || void 0 === t || t.isLg, .2)
                        })
                    })
                }, {
                    revertOnUpdate: !0,
                    dependencies: [e]
                }), (0, l.jsx)("section", {
                    id: "dive-deeper-section",
                    "data-index-title": "",
                    className: "relative font-serif text-white py-vw-32 lg:py-vw-64 lg:pt-vw-32 z-section bg-night",
                    children: (0, l.jsxs)("div", {
                        className: "container space-y-12 lg:space-y-vw-24",
                        children: [(0, l.jsxs)("div", {
                            className: "flex flex-col items-end justify-between title-lg lg:flex-row xl:px-vw-20 2xl:px-vw-40",
                            children: [(0, l.jsxs)("div", {
                                className: "w-full lg:max-w-max",
                                children: [(0, l.jsx)(s.Ob, {
                                    className: "w-[3rem] opacity-50 mb-4"
                                }), (0, l.jsxs)("h2", {
                                    className: "lg:mb-[-0.14em]",
                                    children: ["Dive deeper", (0, l.jsx)("br", {}), "into Daylight"]
                                })]
                            }), (0, l.jsx)("p", {
                                className: "w-full mx-auto paragraph-sm my-[1.8em] lg:hidden text-balance",
                                children: "Experience 60fps refresh rates for swift interaction across all apps. This advanced display supports robust software capabilities."
                            }), (0, l.jsxs)("div", {
                                className: "flex w-full lg:w-auto justify-stretch gap-x-vw-4",
                                children: [(0, l.jsx)(m.k, {
                                    className: "flex-shrink w-full max-sm:min-w-0 md:w-auto"
                                }), (0, l.jsx)(g.r, {
                                    href: "/product",
                                    className: "contents",
                                    unstyled: !0,
                                    children: (0, l.jsx)(i.Z, {
                                        className: "flex-shrink w-full max-sm:min-w-0 md:w-auto",
                                        variant: "secondary",
                                        children: "Learn more"
                                    })
                                })]
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "grid items-stretch md:grid-cols-2 lg:flex-row gap-vw-6",
                            children: [(0, l.jsxs)("div", {
                                children: [(0, l.jsxs)("div", {
                                    className: "relative w-full aspect-[766/511] overflow-hidden rounded-2xl",
                                    children: [(0, l.jsx)(r.default, {
                                        src: n,
                                        alt: "Daylight tablet on a table",
                                        sizes: (0, A.TQ)([{
                                            breakpoint: d.vl.raw.lg + "px",
                                            width: "50vw"
                                        }, "100vw"]),
                                        className: "absolute top-0 left-0 object-cover w-full h-full max-h-none day-image",
                                        draggable: !1
                                    }), (0, l.jsx)("span", {
                                        className: "absolute left-vw-4 bottom-vw-5 lg:bottom-vw-6 lg:left-vw-8 title-sm text-scale-[32px]/[48px]",
                                        children: "Day"
                                    })]
                                }), (0, l.jsx)("div", {
                                    className: "hidden lg:block lg:px-vw-20 2xl:px-vw-40 py-vw-24",
                                    children: (0, l.jsxs)("p", {
                                        className: "paragraph-sm lg:paragraph-md max-w-[19em] w-full",
                                        children: ["Our hope is that it will be a better foundation for what matters most to you.", (0, l.jsx)("br", {}), (0, l.jsx)("br", {}), "A more balanced life, a flourishing mind, and a more creative way of being."]
                                    })
                                })]
                            }), (0, l.jsxs)("div", {
                                className: "relative w-full aspect-[766/511] overflow-hidden rounded-2xl",
                                children: [(0, l.jsx)(r.default, {
                                    placeholder: "blur",
                                    src: o,
                                    alt: "Person on a bed turning off the light",
                                    className: "absolute top-0 left-0 object-cover w-full h-full night-image",
                                    draggable: !1,
                                    sizes: (0, A.TQ)([{
                                        breakpoint: d.vl.raw.lg + "px",
                                        width: "50vw"
                                    }, "100vw"])
                                }), (0, l.jsx)("span", {
                                    className: "absolute left-vw-4 bottom-vw-5 lg:bottom-vw-6 lg:left-vw-8 title-sm text-scale-[32px]/[48px]",
                                    children: "Night"
                                })]
                            })]
                        })]
                    })
                })
            }
        },
        45848: (e, t, a) => {
            "use strict";
            a.d(t, {
                Ob: () => i,
                bA: () => s
            });
            var l = a(69797);
            let i = e => (0, l.jsx)("svg", {
                    width: "44",
                    height: "12",
                    viewBox: "0 0 44 12",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e,
                    children: (0, l.jsxs)("g", {
                        children: [(0, l.jsx)("path", {
                            d: "M5.99871 12C9.31279 12 11.9994 9.31371 11.9994 6C11.9994 2.68629 9.31279 0 5.99871 0C2.68464 0 -0.00195312 2.68629 -0.00195312 6C-0.00195312 9.31371 2.68464 12 5.99871 12Z",
                            fill: "currentColor"
                        }), (0, l.jsx)("path", {
                            d: "M22.3459 0V6.3452H16C16.1808 9.50137 18.7948 12 21.9924 12C25.1901 12 28.0013 9.31233 28.0013 5.99178C28.0013 2.67123 25.5024 0.180822 22.3459 0Z",
                            fill: "currentColor"
                        }), (0, l.jsx)("path", {
                            d: "M40.212 0V8.21111H32C32.9583 10.436 35.1725 12 37.7501 12C41.2034 12 44.0013 9.20239 44.0013 5.74943C44.0013 3.1721 42.4427 0.958238 40.212 0Z",
                            fill: "currentColor"
                        })]
                    })
                }),
                s = e => (0, l.jsxs)("svg", {
                    viewBox: "0 0 33 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e,
                    children: [(0, l.jsx)("path", {
                        d: "M1 13.4375C2.84751 11.6186 4.07242 8.43012 5.80981 6.34038C9.36295 2.06666 14.3946 1.31535 18.7498 1.4523C24.4783 1.63244 28.5195 6.6885 32 13.0145",
                        stroke: "#FAF4F2",
                        strokeLinecap: "round"
                    }), (0, l.jsx)("path", {
                        d: "M1 5.44267C3.57344 6.76366 5.38819 9.13554 7.76696 10.8408C11.0508 13.1949 15.0422 14.8663 18.8928 14.3403C24.2179 13.6129 28.2123 8.62293 32 4.4375",
                        stroke: "#FAF4F2",
                        strokeLinecap: "round"
                    }), (0, l.jsx)("path", {
                        d: "M14.7625 7.81534C15.248 8.88851 16.1328 9.75155 17.4262 9.49246C18.566 9.26412 20.1828 8.09174 19.3674 6.78354C17.9937 4.57987 14.8937 5.84098 14.1244 7.88137",
                        stroke: "#FAF4F2",
                        strokeLinecap: "round"
                    })]
                })
        },
        71463: (e, t, a) => {
            "use strict";
            a.d(t, {
                HorizontalScrollSection: () => S
            });
            var l = a(69797),
                i = a(82372);
            let s = {
                    src: "/_next/use-outside-background.webp",
                    height: 1222,
                    width: 2800,
                    blurDataURL: "data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAADQAQCdASoIAAMAAkA4JQBOkBsjA1AMEAD+2+lxmNnJBL9rtq4sLlBeqNJwJuW9HelFeg2r82LPoRKW4zJumZVrmAAAAA==",
                    blurWidth: 8,
                    blurHeight: 3
                },
                r = {
                    src: "/_next/use-outside-background-mobile-2.webp",
                    height: 1933,
                    width: 934,
                    blurDataURL: "data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAACwAQCdASoEAAgAAkA4JZgCdACyahCAAKjB8mRExFQSZRpqBrOKx8vHQGdV/j2Ilx//b6AZ3ICk+NGu4AA=",
                    blurWidth: 4,
                    blurHeight: 8
                };
            var n = a(45848),
                o = a(67527),
                A = a(48795),
                d = a(15791),
                c = a(22648);
            let h = (0, d.memo)(e => {
                let {
                    randomDelay: t = !0,
                    maxDelay: a = 7e3,
                    minDelay: i = 1e3,
                    ...s
                } = e, [r, n] = (0, d.useState)(!1), o = (0, c.i8)();
                return (0, d.useEffect)(() => {
                    if (!o) return;
                    if (!t) {
                        n(!0);
                        return
                    }
                    let e = new AbortController,
                        l = setTimeout(() => {
                            e.signal.aborted || n(!0)
                        }, Math.random() * (a - i) + i);
                    return () => {
                        e.abort(), clearTimeout(l)
                    }
                }, [o]), (0, l.jsx)(A.default, {
                    priority: r || s.priority,
                    ...s
                })
            });
            var m = a(9673),
                g = a(41199),
                u = a(49371),
                p = a(2643),
                x = a(24364),
                w = a(8840);
            let b = e => {
                    let {
                        children: t,
                        sections: a
                    } = e, [i, s] = (0, d.useState)(null), r = (0, d.useRef)(null), n = a.reduce((e, t, a) => {
                        let {
                            width: l = 100
                        } = t;
                        return e + l + (0 === a ? 0 : 20)
                    }, 0), o = (0, d.useRef)(null), A = (0, x.G)("(min-width: 1024px)"), c = (0, u.Z)(r, {
                        threshold: 0
                    });
                    return (0, d.useEffect)(() => {
                        p.f.setState({
                            scrollerContainer: i
                        })
                    }, [i]), (0, g.LZ)(e => {
                        if (!c || !c.isIntersecting || !o.current || !r.current) return;
                        let t = r.current.getBoundingClientRect(),
                            a = o.current.getBoundingClientRect(),
                            l = e.dimensions.height,
                            i = e.dimensions.width,
                            s = (0, w.uZ)(0, 1, -t.top / (t.height - l)),
                            n = Math.round((a.width - i) * s);
                        o.current.style.transform = "translate3d(-".concat(n, "px, 0, 0)")
                    }, [i, A, n, c]), (0, l.jsx)(l.Fragment, {
                        children: (0, l.jsxs)("div", {
                            style: {
                                "--h": "calc(".concat(n, "vh)")
                            },
                            className: "relative w-full motion-safe:lg:h-[var(--h)]",
                            ref: e => {
                                e && (s(e), r.current = e)
                            },
                            children: [(0, l.jsx)("div", {
                                className: "absolute inset-0 pointer-events-none",
                                children: a.map((e, t) => {
                                    var a, i;
                                    return (0, l.jsx)(f, {
                                        ...e
                                    }, null !== (i = null === (a = e.props) || void 0 === a ? void 0 : a.id) && void 0 !== i ? i : t)
                                })
                            }), (0, l.jsx)("div", {
                                className: "top-0 w-full overflow-hidden motion-safe:lg:h-screen motion-safe:lg:sticky",
                                children: (0, l.jsx)("div", {
                                    className: "motion-safe:lg:absolute will-change-transform w-screen lg:w-[initial] motion-safe:lg:h-screen flex motion-safe:lg:flex-row flex-col gap-y-[25vh] motion-safe:lg:gap-y-0 motion-safe:lg:gap-x-[20vw] motion-reduce:lg:gap-y-[20vh] lg:[&>*]:shrink-0 lg:[&>*]:grow-0",
                                    ref: o,
                                    children: t
                                })
                            })]
                        })
                    })
                },
                f = e => {
                    let {
                        width: t = 100,
                        ...a
                    } = e;
                    return (0, l.jsx)("div", {
                        ...a.props,
                        style: {
                            "--h": "".concat(t, "vh")
                        },
                        className: "w-full h-[var(--h)] mb-[25vh] lg:mb-[20vh] last:mb-0"
                    })
                };
            var v = a(20513),
                j = a(78931);
            let y = (0, a(14798).Q)(() => Promise.all([a.e(3506), a.e(4702)]).then(a.bind(a, 24702)));
            var N = a(27279);
            let C = {
                    src: "/_next/reading-outside.png",
                    height: 726,
                    width: 1174,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAASFBMVEWYkH+lkoGScGZ3aBl+dhqWgDeIgGOIgm12QC14alerhlVaKhthMyOUhkRsYU2demrAj3uGgVWVlYqBVztlPi5cUg2CckmjZU7/WCIUAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAMklEQVR4nAXBCQLAEAwAwSVIhFYP2v//1AyvrA99CtM9aCFjf6TqLbTWI+FImI16XjltIbABZjgyihYAAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 5
                },
                R = {
                    src: "/_next/taking-notes.7f8041cb.png",
                    height: 726,
                    width: 1174,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAPFBMVEVaSjtoUDh+ZFSMa1VuXk1HMiXAl4RKOy10TDxWQzSEcmfQybGWemF/dHOfkIxkVEdzamVqNSazsZSNfXTsqg7eAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAL0lEQVR4nAXBhwGAIBAAsQO+gjTdf1cT1FOyPPCOIV5aQD+brMEN1SbVMbOPvuYPGQkBKGAaXFAAAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 5
                },
                U = e => {
                    let {
                        src: t,
                        title: a,
                        caption: i
                    } = e;
                    return (0, l.jsx)("div", {
                        className: "span-3 xl:span-1 paragraph-sm lg:paragraph-md",
                        children: (0, l.jsxs)("figure", {
                            children: [(0, l.jsx)("div", {
                                className: "relative w-full mb-4 overflow-hidden rounded-xl aspect-[10/6] md:aspect-[4/3] xl:aspect-video",
                                children: (0, l.jsx)(h, {
                                    src: t,
                                    alt: i,
                                    fill: !0,
                                    className: "object-cover",
                                    quality: 100,
                                    draggable: !1,
                                    placeholder: "blur",
                                    sizes: "(max-width: 1024px) 100vw, 30vw"
                                })
                            }), (0, l.jsxs)("div", {
                                className: "flex max-xl:flex-col justify-between gap-y-[0.5em] gap-x-[2em]",
                                children: [(0, l.jsx)("p", {
                                    className: "font-medium whitespace-nowrap opacity-90",
                                    children: a
                                }), (0, l.jsx)("figcaption", {
                                    className: "paragraph lg:max-w-[15em] opacity-50 leading-tight tracking-tighter",
                                    children: i
                                })]
                            })]
                        })
                    })
                },
                B = {
                    src: "/_next/h-scroll-vision.png",
                    height: 442,
                    width: 454,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAACVBMVEUZGQoVFxMZGQ+fu2QZAAAAA3RSTlMEDBqsqNp0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJElEQVR4nGNgYGBgYAQRDIxgAGYwwRlMTMgMRhADKgVRAtMNAAbjADAm66rnAAAAAElFTkSuQmCC",
                    blurWidth: 8,
                    blurHeight: 8
                },
                E = {
                    src: "/_next/h-scroll-grass.png",
                    height: 1306,
                    width: 1328,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAY1BMVEXXtCyhknA1IARmTQyplGx3WgydjGq7mymcfhlCLAR9cVJeUTOKZgVNOxW/pHuSglxLMQquiRBtVRHJroOAaT9aPgk9MR5sZEKRiGmIe1h9ZjOkiFrRqDqvjD/Ut5GSdTKdgEfaI96BAAAACXRSTlP+/////////v4HKoILAAAACXBIWXMAABYlAAAWJQFJUiTwAAAARUlEQVR4nAXBBwKAIAwEsANasGzEvf//ShMMzGPVNcK9RCVohvuevq+JgbvT5hcBrqyUDRqtndkqLzDxKGQngbBJZhb5AW/XAvw9n8oNAAAAAElFTkSuQmCC",
                    blurWidth: 8,
                    blurHeight: 8
                },
                k = {
                    src: "/_next/tablet-bag.png",
                    height: 1220,
                    width: 1078,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAclBMVEUeCAOznHl+foxmTU1HT2WKbV7awZ4BAAESJzgICRIPFSBPOh8/HiBMJzZ2Q0piQys1HQ/PqYbTtpN2XE80FxgpIRGIRzF2STGUZFFeXmqmaVMzJCuWgWXAr5RmOzmYjIVmfZs0PFOIiJlobYZOPUUqNUjhuuA0AAAAC3RSTlP+/v7++/7++fb69r6yuOgAAAAJcEhZcwAAEJwAABCcASbNOjQAAABCSURBVHicBcEHAoAgDASwU9GClO2euP7/RRM4rbXpgH5kbxmYjyUGa3DnPU4DQ1xn2JyHqsqiqYH3+VJaCaIlRVL+dGsDgd5LnMAAAAAASUVORK5CYII=",
                    blurWidth: 7,
                    blurHeight: 8
                },
                G = [{
                    src: "/_next/app-icon-7.png",
                    height: 156,
                    width: 157,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJ1BMVEVMaXEWGA4WGA8WGA4WGA8XGA4XGQ8WGg8XFw0VGQ0WGA8WGA4XGQ9msoYmAAAADXRSTlMAkWGidon6IUs/Unzmx0a4QwAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAADNJREFUeJxFykcOACEQxED3JNL+/70ItBK+1MXwmlK/upkGkOYeAchUtYDuUV8708i8/m0VeACioGHpswAAAABJRU5ErkJggg==",
                    blurWidth: 8,
                    blurHeight: 8
                }, {
                    src: "/_next/app-icon-4.png",
                    height: 156,
                    width: 157,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAALVBMVEUWGA4WGA4AAABMaXEVGxAVGg0XGA4WGA4WGQ8XGA8XGg4YGA8WGQ8WGQ8UGAyrxmPPAAAAD3RSTlPxhwEALzmsnd65V1TLyj6/00aSAAAACXBIWXMAABYlAAAWJQFJUiTwAAAANklEQVR4nC2LSQ6AMBCAmKGrrf7/uabGGwmAqZqS1t6LiQ8DitjuiBHi3BEcWPCp9JqtnvjfXyH9AO09ttLeAAAAAElFTkSuQmCC",
                    blurWidth: 8,
                    blurHeight: 8
                }, {
                    src: "/_next/app-icon-5.png",
                    height: 157,
                    width: 157,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAG1BMVEUQEAAWGA4VGA8SEhIWGQ4XGA4VGhEXFw4VGA0yaH7zAAAACXRSTlMBmkkNxokcX1brQQ8rAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAK0lEQVR4nG3LqQEAIBDEwOze23/FCAyC6Al8cslA2MocCNUoFcBIe1H3+xwLDQBYfgzI3AAAAABJRU5ErkJggg==",
                    blurWidth: 8,
                    blurHeight: 8
                }, {
                    src: "/_next/app-icon-6.png",
                    height: 156,
                    width: 157,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJFBMVEVMaXEXGA8WGQ4WGA4XGA8WGQ4ZGQ8WGQ8VGA0VGQwWFhEWGQ+UM0kXAAAADHRSTlMAUoOSqJgxw2w7LdV9UxjmAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAMklEQVR4nD3KQQ4AIAgDQWhBUP//X1NN3NMc1uy33H0IscGaQmTTBbIgIBopGBK89+sAFPAAjZzCFpcAAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 8
                }, {
                    src: "/_next/app-icon-0.png",
                    height: 156,
                    width: 157,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAG1BMVEUXGQ4WGQ4AAABMaXEWFhEVGA4WGA0XGQ4WGQ71sfGhAAAACXRSTlOCdQEADhpKPWs0EdbKAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAM0lEQVR4nDXLuQ0AQQyAQGz89V/xaYMLkCYBM32R1kwrdhy0OEew4hLEQx8RJVo7ZfLvHx0sAM3Rc52cAAAAAElFTkSuQmCC",
                    blurWidth: 8,
                    blurHeight: 8
                }, {
                    src: "/_next/app-icon-3.png",
                    height: 156,
                    width: 157,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEVMaXEWGA4WFgwXGA0VGA4WGA4WGA4XGQ/MZHq4AAAAB3RSTlMAvBilintxFSJz4wAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAClJREFUeJxFxskJAAAIA0ETr/47FiLoso8x+0hSCCCEdE8B3VhULaivAQn8AEU/s8h6AAAAAElFTkSuQmCC",
                    blurWidth: 8,
                    blurHeight: 8
                }, {
                    src: "/_next/app-icon-2.png",
                    height: 156,
                    width: 157,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJ1BMVEVMaXEXGQ8VFg0VFQoXGA8WGQ4XGA4WFgwXGQ8VFg4WGA8XGA4WGA9WnCx4AAAADXRSTlMA8zEX/oGhC5No1c/jLmTyAAAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAADNJREFUeJw9ikkKACAMxDJtbV3+/19RxFwCIfApd/cCWkjRgD7XXHnLGNEBkyQ7t2VePzYZSACmo9h19wAAAABJRU5ErkJggg==",
                    blurWidth: 8,
                    blurHeight: 8
                }, {
                    src: "/_next/app-icon-1.png",
                    height: 156,
                    width: 157,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAIVBMVEUODggXGA4XGQ4WGQ4XFw8WGQ4ZGQ8XGA8YGAwWGBAXGQ5bUlIIAAAAC3RSTlMBUXC0MjxkkCl+7498GrsAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAuSURBVHicVYtLCgAgEIWcf3X/A8dbRa4EET6qAFu5uwEvjzGJRxyJjRFKIvOdFxCkAHAU7GAMAAAAAElFTkSuQmCC",
                    blurWidth: 8,
                    blurHeight: 8
                }, {
                    src: "/_next/app-icon-8.png",
                    height: 156,
                    width: 157,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJ1BMVEVMaXEWGA4XGQ0WGA4XGA4WGA0WGA4XGA4WGQ8WGQ8XGQ8WGA4WGQ/MEknGAAAADXRSTlMAgCBMbTBZPWKh++HUwLLg1AAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAADRJREFUeJw9ykkOwCAQxEA3mQ3C/9+LBkXxqQ6GP6/KGEBqMh4gdtiF1ps0bE3zhkuynr8OGgcAra6a/ucAAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 8
                }],
                Q = () => {
                    let {
                        isDebug: e
                    } = (0, p.f)();
                    return (0, l.jsx)("div", {
                        className: (0, i.L)("w-screen h-screen z-section motion-reduce:hidden shrink-0", {
                            "bg-[red] bg-opacity-20": e
                        })
                    })
                },
                M = [{
                    magnet: !1,
                    width: 100,
                    Component: Q
                }, {
                    props: {
                        id: "h-scroll-wake-up",
                        "data-index-title": "Magic paper"
                    },
                    magnet: !0,
                    width: 100,
                    Component: () => (0, l.jsx)("section", {
                        id: "h-scroll-wake-up-section",
                        className: "text-white shadow-container w-[100vw]",
                        children: (0, l.jsx)("div", {
                            className: "hero-container",
                            children: (0, l.jsxs)("div", {
                                className: "relative flex items-end w-full h-full hero-inner-tight",
                                children: [(0, l.jsx)(o.D, {
                                    className: "absolute inset-0",
                                    containerClassName: "rounded-2xl lg:rounded-3xl overflow-hidden",
                                    children: (0, l.jsx)(y, {})
                                }), (0, l.jsxs)("div", {
                                    className: "relative flex flex-col justify-between w-full h-full xl:h-auto hero-inner-loose xl:flex-row gap-x-[5em]",
                                    children: [(0, l.jsxs)("h1", {
                                        className: "title-md shrink-0",
                                        children: ["The world’s first", " ", (0, l.jsx)("span", {
                                            className: "whitespace-nowrap",
                                            children: "full-speed"
                                        }), (0, l.jsx)("br", {}), (0, l.jsx)("span", {
                                            className: "italic",
                                            children: "paper-like"
                                        }), " display"]
                                    }), (0, l.jsxs)("div", {
                                        className: "grid max-w-full grid-cols-1 lg:grid-cols-2 gap-vw-6 lg:grid-flow-col",
                                        children: [(0, l.jsx)(v.y, {
                                            iconComponent: (0, l.jsx)(j.R, {
                                                className: "w-full h-auto",
                                                name: "fps-light"
                                            }),
                                            title: "Smooth interactions",
                                            text: "Scroll, zoom, turn pages—even watch video— without any lag",
                                            className: "max-w-[10em]"
                                        }), (0, l.jsx)(v.y, {
                                            iconComponent: (0, l.jsx)(j.R, {
                                                className: "w-full h-auto",
                                                name: "smile-light"
                                            }),
                                            title: "A calm experience",
                                            text: "Stay connected with yourself and what’s around you",
                                            className: "max-lg:row-[2] max-w-[10em]"
                                        }), (0, l.jsx)(v.y, {
                                            iconComponent: (0, l.jsx)(j.R, {
                                                className: "w-full h-auto",
                                                name: "heart-light"
                                            }),
                                            title: "For your health",
                                            text: "Say goodbye to eye-strain—designed for full sunlight and nighttime",
                                            className: "max-lg:row-[3] max-w-[10em]"
                                        })]
                                    })]
                                })]
                            })
                        })
                    })
                }, {
                    Component: () => (0, l.jsxs)("div", {
                        className: "flex flex-col justify-between p-0 font-serif lg:gap-vw-16 lg:flex-col-reverse lg:p-vw-6 lg:pb-vw-8 lg:shadow-container avoid-desktop-header",
                        children: [(0, l.jsxs)("div", {
                            className: "grid items-end grid-cols-1 max-2xl:lg:text-scale-[18px]/[24px] max-lg:container lg:grid-cols-3 lg:gap-vw-8 xl:gap-vw-4 gap-vw-4",
                            children: [(0, l.jsxs)("h2", {
                                className: "title-md text-scale-[40px]/[80px] col-span-2 w-full xl:max-w-[13.3em]",
                                children: ["A distraction-free space for ", (0, l.jsx)("br", {
                                    className: "max-lg:hidden"
                                }), " learning & creativity"]
                            }), (0, l.jsxs)("div", {
                                className: "lg:max-w-[20em] paragraph-sm text-night/50",
                                children: [(0, l.jsx)("p", {
                                    className: "paragraph hidden gap-x-[1.1em] lg:flex text-scale-lg/2xl font-medium",
                                    children: "Live Paper display"
                                }), (0, l.jsx)("p", {
                                    className: "mt-[0.8em] lg:mt-[1em] text-pretty max-lg:mb-[2em]",
                                    children: "We invented a new type of display that’s like E Ink, but faster. It looks and feels like paper, but runs at 60fps, so you can work fluidly, and use all your apps without compromise."
                                })]
                            })]
                        }), (0, l.jsx)("div", {
                            className: "w-full",
                            children: (0, l.jsxs)("div", {
                                className: "max-lg:container lg:min-w-[900px] grid grid-cols-1 md:grid-cols-3 gap-vw-4 gap-y-vw-12",
                                children: [(0, l.jsx)(U, {
                                    src: C,
                                    fig: 1,
                                    title: "Reading",
                                    caption: "Your new favorite reading app for books and documents"
                                }), (0, l.jsx)(U, {
                                    src: N.Z,
                                    fig: 2,
                                    title: "Note-taking",
                                    caption: "Write, draw and annotate on a fast, paper-like surface"
                                }), (0, l.jsx)(U, {
                                    src: R,
                                    fig: 3,
                                    title: "Writing",
                                    caption: "A sacred space for focused writing without distraction"
                                })]
                            })
                        })]
                    }),
                    width: 100,
                    magnet: !0
                }, {
                    width: 50,
                    Component: () => (0, l.jsxs)("div", {
                        className: "lg:w-[50vw] container flex flex-col items-center lg:items-start justify-center lg:!max-w-min paragraph-md",
                        children: [(0, l.jsx)(n.Ob, {
                            className: "opacity-50 mb-[1.6em]"
                        }), (0, l.jsxs)("h2", {
                            className: "max-w-full text-center lg:text-left text-pretty title-md",
                            children: ["With all the", (0, l.jsx)("br", {
                                className: "hidden lg:block"
                            }), " apps you need"]
                        }), (0, l.jsx)("p", {
                            className: "text-center lg:text-left text-pretty max-w-full mt-[1.6em] mb-[2em] md:mb-[3.6em]",
                            children: "Use all your favorite apps without the distractions—it’s the best of both worlds."
                        }), (0, l.jsx)("div", {
                            className: "grid grid-cols-3 grid-rows-3 gap-[0.5em] mx-auto md:gap-[1.1em] w-full max-md:max-w-[12em] md:w-[16.3em]",
                            children: G.map((e, t) => (0, l.jsx)("div", {
                                className: "col-span-1 aspect-square bg-[#E8DED8] rounded-2xl shadow-lg shadow-black/5 w-full flex items-center justify-center",
                                children: (0, l.jsx)(h, {
                                    src: e,
                                    quality: 70,
                                    sizes: "10vw",
                                    alt: "app icon",
                                    className: "object-contain opacity-70 w-[70%]",
                                    draggable: !1
                                })
                            }, t))
                        })]
                    })
                }, {
                    width: 50,
                    props: {
                        "data-index-title": ""
                    },
                    Component: () => (0, l.jsx)("div", {
                        className: "container w-full shrink-0 lg:w-[50vw] motion-reduce:lg:h-screen",
                        children: (0, l.jsx)("div", {
                            className: "relative lg:h-full max-lg:aspect-square",
                            children: (0, l.jsx)(o.D, {
                                className: "absolute inset-0",
                                children: (0, l.jsx)(h, {
                                    alt: "Daylight tablet on a bag",
                                    src: k,
                                    placeholder: "blur",
                                    fill: !0,
                                    sizes: "(max-width: 1024px) 100vw, 50vw",
                                    className: "absolute inset-0 object-cover w-full h-full max-lg:rounded-2xl",
                                    quality: 100,
                                    draggable: !1
                                })
                            })
                        })
                    })
                }, {
                    width: 40,
                    magnet: !0,
                    Component: () => (0, l.jsx)("div", {
                        className: "w-full lg:w-[40vw] container font-serif",
                        children: (0, l.jsxs)("div", {
                            className: "relative flex flex-col items-center justify-center lg:h-screen paragraph-md max-lg:space-y-vw-10 lg:gap-[3.5em]",
                            children: [(0, l.jsx)(h, {
                                src: B,
                                alt: "vision illustration",
                                width: 450,
                                height: 450,
                                className: "object-contain motion-safe:animate-spin-slow max-w-[80%] lg:w-[28.5vw] aspect-square",
                                draggable: !1,
                                quality: 100,
                                placeholder: "blur"
                            }), (0, l.jsx)(n.Ob, {
                                className: "opacity-50"
                            }), (0, l.jsx)("p", {
                                className: "text-center font-serif font-light max-w-[20em]",
                                children: "The vision for Daylight is to build a whole ecosystem of healthier, more humane computers that respect our health, attention, and freedom."
                            })]
                        })
                    })
                }, {
                    props: {
                        id: "h-scroll-routine"
                    },
                    width: 120,
                    magnet: !0,
                    Component: () => (0, l.jsxs)("div", {
                        id: "h-scroll-routine-section",
                        className: "relative max-lg:min-h-[56rem] overflow-hidden text-center text-white shadow-container lg:w-[120vw] lg:text-left max-lg:flex max-lg:items-start",
                        children: [(0, l.jsxs)(o.D, {
                            className: "absolute inset-0",
                            children: [(0, l.jsx)(h, {
                                sizes: "150vw",
                                alt: "girl holding a tablet with a blue sky background",
                                src: r,
                                fill: !0,
                                className: "absolute object-cover object-top [@media(min-aspect-ratio:10/20)]:object-[10%] w-full lg:hidden background",
                                draggable: !1,
                                placeholder: "blur",
                                quality: 70
                            }), (0, l.jsx)(h, {
                                sizes: (0, m.TQ)(["120vw"]),
                                alt: "girl holding a tablet with a blue sky background",
                                src: s,
                                fill: !0,
                                className: "absolute object-cover object-center w-full max-lg:hidden background",
                                draggable: !1,
                                placeholder: "blur",
                                quality: 70
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "container relative flex flex-col items-center justify-between mx-auto max-w-screen gap-x-vw-24 lg:items-end py-vw-16 lg:py-vw-24 lg:flex-row",
                            children: [(0, l.jsxs)("div", {
                                className: "",
                                children: [(0, l.jsxs)("p", {
                                    className: "paragraph-md text-moonlight",
                                    children: ["outdoor computing", (0, l.jsx)(n.bA, {
                                        className: "ml-[0.7em] h-[0.8em] inline-block"
                                    })]
                                }), (0, l.jsxs)("h2", {
                                    className: "title-md mt-[0.4em]",
                                    children: ["it's a ", (0, l.jsx)("span", {
                                        className: "italic",
                                        children: "computer"
                                    }), " you", (0, l.jsx)("br", {}), "can use ", (0, l.jsx)("span", {
                                        className: "italic",
                                        children: "outside"
                                    })]
                                })]
                            }), (0, l.jsxs)("p", {
                                className: "relative mt-[2em] text-pretty lg:mt-0 flex-1 paragraph-sm mx-auto max-w-[22em] lg:mx-0 lg:ml-auto",
                                children: ["Read in broad daylight with a screen that uses the sun as its backlight.", (0, l.jsx)("br", {}), (0, l.jsx)("br", {}), "DC-1 lights up beautifully outdoors without distracting reflections, so you can read outside any time of the day."]
                            })]
                        })]
                    })
                }, {
                    props: {
                        id: "h-scroll-outside-features"
                    },
                    width: 100,
                    magnet: !1,
                    Component: () => (0, l.jsx)("div", {
                        className: "container w-screen",
                        children: (0, l.jsxs)("div", {
                            className: "flex flex-col items-center w-full h-full lg:flex-col-reverse gap-vw-10 lg:gap-vw-24 lg:pb-vw-18 lg:max-w-max",
                            children: [(0, l.jsxs)("div", {
                                className: "grid justify-between w-full grid-cols-1 lg:grid-cols-3 gap-vw-12 lg:gap-vw-20 lg:grid-flow-col px-vw-6",
                                children: [(0, l.jsx)(v.y, {
                                    iconComponent: (0, l.jsx)(j.R, {
                                        name: "eye-dark"
                                    }),
                                    title: "No eye-strain",
                                    text: (0, l.jsxs)(l.Fragment, {
                                        children: ["Flicker-free display is", (0, l.jsx)("br", {
                                            className: "hidden lg:block"
                                        }), " easy on the eyes"]
                                    }),
                                    className: "max-lg:row-[2] lg:max-w-[10em]"
                                }), (0, l.jsx)(v.y, {
                                    iconComponent: (0, l.jsx)(j.R, {
                                        name: "battery-dark"
                                    }),
                                    title: "Extended battery",
                                    text: (0, l.jsxs)(l.Fragment, {
                                        children: ["Days of use on a", (0, l.jsx)("br", {
                                            className: "hidden lg:block"
                                        }), " single charge"]
                                    }),
                                    className: "max-lg:row-[3] lg:max-w-[10em]"
                                }), (0, l.jsx)(v.y, {
                                    iconComponent: (0, l.jsx)(j.R, {
                                        name: "reflection-dark"
                                    }),
                                    title: "Backlight optional",
                                    text: (0, l.jsxs)(l.Fragment, {
                                        children: ["Read in direct sunlight,", (0, l.jsx)("br", {
                                            className: "hidden lg:block"
                                        }), " no backlight needed"]
                                    }),
                                    className: "lg:max-w-[10em]"
                                })]
                            }), (0, l.jsx)("div", {
                                className: "relative flex-1 block w-full h-full max-lg:aspect-square grow",
                                children: (0, l.jsx)(h, {
                                    fill: !0,
                                    placeholder: "blur",
                                    src: E,
                                    alt: "A Daylight tablet on the grass",
                                    sizes: "(max-width: 1024px) 100vw, 50vw",
                                    quality: 70,
                                    className: "object-cover w-full h-full max-lg:rounded-2xl lg:rounded-b-lg",
                                    draggable: !1
                                })
                            })]
                        })
                    })
                }, {
                    props: {
                        id: "h-scroll-last-extra-space"
                    },
                    width: 100,
                    magnet: !1,
                    Component: Q
                }],
                S = () => (0, l.jsx)("section", {
                    className: "motion-safe:mt-[calc(-200vh-30vh)] relative z-[calc(var(--z-index-3)+1)]",
                    children: (0, l.jsx)(b, {
                        sections: M,
                        children: M.map((e, t) => {
                            let {
                                Component: a
                            } = e;
                            return (0, l.jsx)(a, {}, t)
                        })
                    })
                })
        },
        67527: (e, t, a) => {
            "use strict";
            a.d(t, {
                MultiplyPortalOut: () => m,
                D: () => g
            });
            var l = a(69797),
                i = a(15791),
                s = a(10382),
                r = a(37553),
                n = a(41199),
                o = a(48024),
                A = a(44562);
            let d = e => {
                let {
                    scroll: t = !1,
                    scrollDebounce: a = !1,
                    debounce: l = 11,
                    onChange: s
                } = e, [r, d] = (0, i.useState)(null), c = (0, A.h)(r), h = (0, A.h)(s), m = (0, i.useRef)({
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
                }), g = (0, i.useCallback)(() => {
                    if (!c.current || !window) return;
                    let e = c.current.getBoundingClientRect();
                    Object.assign(m.current, {
                        left: e.left,
                        top: e.top,
                        width: e.width,
                        height: e.height,
                        bottom: e.bottom,
                        right: e.right,
                        x: e.x,
                        y: e.y,
                        offsetLeft: e.left + window.scrollX,
                        offsetTop: e.top + window.scrollY,
                        hasMeasured: !0
                    }), h.current && h.current(m.current)
                }, [h, m]), u = (0, o.zl)(g, l);
                return (0, n.LZ)(() => {
                    t && (a ? u() : g())
                }, [r, u, t]), [d, m.current]
            };
            var c = a(82372);
            let h = (0, s.Z)(),
                m = () => (0, l.jsx)("div", {
                    className: "fixed inset-0 mix-blend-multiply z-[calc(var(--z-index-2)+10)] pointer-events-none",
                    children: (0, l.jsx)(h.Out, {})
                }),
                g = e => {
                    let {
                        isMobile: t
                    } = (0, r.Fy)();
                    return void 0 === t ? null : t ? (0, l.jsx)(u, {
                        ...e
                    }) : (0, l.jsx)(p, {
                        ...e
                    })
                },
                u = e => {
                    let {
                        children: t,
                        containerClassName: a,
                        className: i,
                        ...s
                    } = e;
                    return (0, l.jsx)("div", {
                        ...s,
                        className: (0, c.L)("pointer-events-none relative", i),
                        children: (0, l.jsx)("div", {
                            className: (0, c.L)("absolute inset-0", a),
                            children: t
                        })
                    })
                },
                p = e => {
                    let {
                        children: t,
                        containerClassName: a,
                        className: s,
                        ...r
                    } = e, n = (0, i.useRef)(null), [o] = d({
                        scroll: !0,
                        debounce: 1,
                        onChange: e => {
                            n.current && (n.current.style.width = "".concat(e.width, "px"), n.current.style.height = "".concat(e.height, "px"), n.current.style.transform = "translate3d(".concat(e.left, "px, ").concat(e.top, "px, 0)"))
                        }
                    });
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)("div", {
                            ...r,
                            className: (0, c.L)("pointer-events-none relative", s),
                            ref: o
                        }), (0, l.jsx)(h.In, {
                            children: (0, l.jsx)("div", {
                                ref: n,
                                className: (0, c.L)("absolute will-change-transform top-0 left-0", a),
                                children: t
                            })
                        })]
                    })
                }
        },
        1: (e, t, a) => {
            "use strict";
            a.d(t, {
                Hero: () => U
            });
            var l = a(69797),
                i = a(41199),
                s = a(48795),
                r = a(15791),
                n = a(2643),
                o = a(24364),
                A = a(82372),
                d = a(22948),
                c = a(70634),
                h = a(4247);
            let m = {
                    src: "/_next/hero-mobile.png",
                    height: 1456,
                    width: 712,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAMAAADp7a43AAAAJ1BMVEU5MAUzLA1DOAkdGgNAOx5hVjrPu6MAAwC2mnaGemBQTDqqmX7s1ryqs2vHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAJ0lEQVR4nAXBhwEAMAzCMANJ9//3VkLRwplNzi5yX6MxCqoFyNjwAQtpAHrhrl2ZAAAAAElFTkSuQmCC",
                    blurWidth: 4,
                    blurHeight: 8
                },
                g = {
                    src: "/_next/hero-video-thumb.png",
                    height: 1080,
                    width: 1920,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAP1BMVEVUYUiCiXo2PjFZYFnZ3d+5vMh4fnaSl51uc2ZfbUk/QT5sfFCLlmxgYnfJzdFGUTqrsKvS0tmxt7mZoIh5hVoa+utUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAL0lEQVR4nBXBhREAIAwEsIdCDZf9Z+VIkFIPI0bGynnCnSDSZGswqBKfWi8+K8UeGwMBOeIPCsYAAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 5
                },
                u = e => (0, l.jsx)("svg", {
                    viewBox: "0 0 40 46",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e,
                    children: (0, l.jsx)("path", {
                        d: "M40 23L0 46L2.01894e-06 0L40 23Z",
                        fill: "currentColor"
                    })
                }),
                p = {
                    src: "/_next/home-hero-video-placeholder.webp",
                    height: 940,
                    width: 1920,
                    blurDataURL: "data:image/webp;base64,UklGRioAAABXRUJQVlA4IB4AAAAwAQCdASoIAAQAAkA4JaQAA3AA/vsks3pevpAAAAA=",
                    blurWidth: 8,
                    blurHeight: 4
                },
                x = {
                    src: "/_next/home-hero-video-placeholder-mobile.webp",
                    height: 1920,
                    width: 940,
                    blurDataURL: "data:image/webp;base64,UklGRigAAABXRUJQVlA4IBwAAAAwAQCdASoEAAgAAkA4JaQAA3AA/vskt+4bxAAA",
                    blurWidth: 4,
                    blurHeight: 8
                };
            var w = a(14798),
                b = a(9673),
                f = a(9981),
                v = a.n(f),
                j = a(50080),
                y = a(64243);
            let N = (0, w.Q)(() => Promise.all([a.e(3506), a.e(9815), a.e(2047)]).then(a.bind(a, 72047))),
                C = (0, w.Q)(() => a.e(4326).then(a.bind(a, 64326))),
                R = (0, w.Q)(() => Promise.all([a.e(3506), a.e(1950)]).then(a.bind(a, 31950))),
                U = () => {
                    let [e, t] = (0, r.useState)(null), a = (0, y.q)(e => e.hasNavigated), w = (0, o.G)(d.vl.query.lg), [f, U] = (0, r.useState)(!1), [B, E] = (0, r.useState)(!1), [k, G] = (0, r.useState)(!1), [Q, M] = (0, r.useState)(!1), S = (0, i.LZ)(d.lt), V = (0, r.useCallback)(() => {
                        if (!S) return;
                        let e = S.dimensions.height,
                            t = S.dimensions.width < 1024,
                            a = S.scroll / e;
                        (t ? a > 0 : a > 1) ? null == S || S.scrollTo(0, {
                            duration: t ? .3 : .7,
                            easing: c.Cg,
                            onComplete: () => {
                                t && (null == S || S.stop()), U(!0), E(!0)
                            }
                        }): (t && (null == S || S.stop()), U(!0), E(!0))
                    }, [S]), W = (0, r.useCallback)(() => {
                        (null == S ? void 0 : S.isStopped) && (null == S || S.start()), E(!1)
                    }, [E, S]);
                    (0, r.useEffect)(() => () => {
                        W()
                    }, [W]), (0, r.useEffect)(() => (n.f.setState({
                        headerDarkMode: B
                    }), () => {
                        n.f.setState({
                            headerDarkMode: !1
                        })
                    }), [B]);
                    let D = {
                            alt: "flower illustration",
                            priority: !0,
                            quality: 70,
                            fill: !0
                        },
                        {
                            props: {
                                srcSet: F
                            }
                        } = (0, s.getImageProps)({
                            ...D,
                            src: p
                        }),
                        {
                            props: {
                                ...I
                            }
                        } = (0, s.getImageProps)({
                            ...D,
                            className: "object-center object-cover",
                            src: x
                        });
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)("div", {
                            className: (0, A.L)("z-[calc(var(--z-index-3)+1)] opacity-0 transition-opacity duration-500 bg-night pointer-events-none fixed inset-0", B && "opacity-100")
                        }), (0, l.jsx)("section", {
                            ref: e => {
                                e && t(e)
                            },
                            "data-index-title": "",
                            style: {
                                "--animation-duration": "400ms"
                            },
                            className: (0, A.L)("relative lg:h-[200vh] text-white z-[calc(var(--z-index-3)+1)]", {
                                "animate-slide-fade-in": a
                            }),
                            children: (0, l.jsx)("div", {
                                className: "sticky top-0 hero-container",
                                children: (0, l.jsxs)("div", {
                                    className: "relative w-full h-full overflow-hidden rounded-2xl lg:rounded-3xl",
                                    children: [w && (0, l.jsx)(C, {
                                        container: e,
                                        onDrawChange: M
                                    }), (0, l.jsx)(s.default, {
                                        fill: !0,
                                        src: h.Z,
                                        priority: !0,
                                        alt: "Daylight tablet on the grass",
                                        className: (0, A.L)("absolute object-cover top-0 left-0 w-full h-full object-[40%] lg:object-center max-lg:hidden", {
                                            invisible: !!w && Q
                                        }),
                                        unoptimized: !0,
                                        placeholder: "blur",
                                        draggable: !1,
                                        sizes: "100vw"
                                    }), (0, l.jsx)(s.default, {
                                        fill: !0,
                                        src: m,
                                        priority: !0,
                                        alt: "Daylight tablet on the grass",
                                        className: (0, A.L)("absolute object-cover top-0 left-0 w-full h-full object-[40%] sm:object-[10%] lg:hidden", {
                                            invisible: !!w && Q
                                        }),
                                        placeholder: "blur",
                                        quality: 100,
                                        draggable: !1,
                                        sizes: "100vh"
                                    }), (0, l.jsxs)("picture", {
                                        className: (0, A.L)("absolute contained-image top-0 left-0 w-full h-full mix-blend-multiply opacity-100 transition-opacity duration-0", k && "opacity-0"),
                                        children: [(0, l.jsx)("source", {
                                            media: d.vl.query.lg,
                                            srcSet: F
                                        }), (0, l.jsx)("img", {
                                            ...I
                                        })]
                                    }), (0, l.jsx)(R, {
                                        onReady: () => G(!0)
                                    }), (0, l.jsxs)("div", {
                                        className: "relative flex flex-col justify-between h-full hero-inner-tight",
                                        children: [(0, l.jsxs)("div", {
                                            className: "flex flex-col w-full hero-inner-loose",
                                            children: [(0, l.jsxs)("h1", {
                                                className: "title-md text-drop-shadow leading-none max-w-[10em] op0",
                                                children: ["The computer,", " ", (0, l.jsx)("span", {
                                                    className: "whitespace-nowrap",
                                                    children: "de-invented"
                                                })]
                                            }), (0, l.jsx)("p", {
                                                className: "paragraph-md text-drop-shadow text-scale-[20px]/[32px] max-w-[17em] mt-[1.25em] op0",
                                                children: "Meet DC-1. A new kind of computer, designed for deep focus and wellbeing."
                                            })]
                                        }), (0, l.jsxs)("div", {
                                            className: "flex flex-col justify-between lg:items-end lg:flex-row",
                                            children: [(0, l.jsx)("div", {
                                                className: "max-md:px-0",
                                                children: (0, l.jsx)("button", {
                                                    "aria-label": "Play video",
                                                    onClick: V,
                                                    className: (0, A.L)("aspect-[326/204] group mt-auto flex-shrink-0 w-[40vw] lg:w-vw-96 bg-amber rounded-[10px] p-[4px] md:rounded-2xl md:p-1", v()["video-button"]),
                                                    children: (0, l.jsxs)("div", {
                                                        className: "relative flex items-center justify-center w-full h-full overflow-hidden rounded-[6px] md:rounded-xl group",
                                                        children: [(0, l.jsx)(s.default, {
                                                            alt: "a girl sitting on a park bench with Daylight tablet in her hands",
                                                            fill: !0,
                                                            priority: !0,
                                                            src: g,
                                                            quality: 100,
                                                            sizes: (0, b.TQ)([{
                                                                breakpoint: d.vl.raw.lg + "px",
                                                                width: "20vw"
                                                            }, "100vw"]),
                                                            className: "absolute inset-0 object-cover",
                                                            placeholder: "blur",
                                                            draggable: !1
                                                        }), (0, l.jsx)(s.default, {
                                                            className: "absolute inset-0 object-cover transition-opacity duration-200 opacity-0 pointer-events-none group-hover:opacity-100",
                                                            src: "https://image.mux.com/Ts531Ns2iJv3KKlKABXulho7BQYRRxQmT2AO600rECCE/animated.webp?width=640&start=17&end=23",
                                                            fill: !0,
                                                            draggable: !1,
                                                            unoptimized: !0,
                                                            alt: "Daylight video preview",
                                                            sizes: (0, b.TQ)([{
                                                                breakpoint: d.vl.raw.lg + "px",
                                                                width: "20vw"
                                                            }, "60vw"])
                                                        }), (0, l.jsx)("span", {
                                                            className: "absolute inset-0 transition-opacity duration-200 opacity-100 bg-night/30 md:bg-night/20 group-hover:opacity-0"
                                                        }), (0, l.jsx)(u, {
                                                            className: "relative w-5 transition-transform duration-500 scale-100 text-amber lg:w-9 drop-shadow-lg group-hover:scale-110"
                                                        })]
                                                    })
                                                })
                                            }), (0, l.jsx)("div", {
                                                className: (0, A.L)("absolute inset-0 bg-black transition-opacity duration-500 lg:[&_video]:object-cover", B ? "opacity-100" : "opacity-0 pointer-events-none"),
                                                children: f && (0, l.jsx)(N, {
                                                    isPlaying: B,
                                                    onClose: W
                                                })
                                            }), (0, l.jsx)(j.k, {
                                                className: "hidden lg:block max-lg:min-w-0 text-night",
                                                size: "lg"
                                            })]
                                        })]
                                    })]
                                })
                            })
                        })]
                    })
                }
        },
        20513: (e, t, a) => {
            "use strict";
            a.d(t, {
                y: () => r
            });
            var l = a(69797),
                i = a(48795),
                s = a(82372);
            let r = e => {
                let {
                    icon: t,
                    title: a,
                    text: r,
                    className: n,
                    iconComponent: o
                } = e;
                return (0, l.jsxs)("div", {
                    className: (0, s.L)("flex-shrink-0 col-span-1 paragraph-md flex lg:flex-col gap-vw-4", n),
                    children: [t && (0, l.jsx)(i.default, {
                        src: t,
                        className: "object-contain min-w-0 w-[1.75em] max-w-max",
                        alt: "cloud",
                        quality: 100,
                        draggable: !1,
                        placeholder: "blur"
                    }), o && (0, l.jsx)("div", {
                        className: "w-[1.75em] shrink-0",
                        children: o
                    }), (0, l.jsxs)("div", {
                        className: "",
                        children: [(0, l.jsx)("h3", {
                            className: "!font-medium paragraph-sm md:paragraph-md",
                            children: a
                        }), (0, l.jsx)("p", {
                            className: "mt-[0.8em] font-light text-pretty paragraph-sm",
                            children: r
                        })]
                    })]
                })
            }
        },
        40669: (e, t, a) => {
            "use strict";
            a.d(t, {
                ModernDevices: () => p
            });
            var l = a(69797),
                i = a(15791),
                s = a(1278),
                r = a(9673),
                n = a(12795),
                o = a(2643),
                A = a(82372),
                d = a(64243),
                c = a(8929),
                h = a.n(c),
                m = a(31547);
            let g = (0, r.PF)("We refuse to accept a future where our devices are exhausting, addictive, and distracting"),
                u = (0, r.PF)("Introducing Daylight — a healthier, more human-friendly computer"),
                p = () => {
                    let e = (0, i.useRef)(null),
                        t = (0, d.q)(e => e.reducedMotion);
                    return (0, s.ui)(() => {
                        if (t) return;
                        let a = s.p8.timeline({
                                scrollTrigger: {
                                    trigger: e.current,
                                    start: "top top",
                                    end: "bottom bottom",
                                    scrub: !0
                                }
                            }),
                            {
                                get: l,
                                utils: i
                            } = (0, s.xy)(a),
                            [r, A] = l({
                                start: 15,
                                end: 35
                            }),
                            [d, c] = l({
                                start: 50,
                                end: 70
                            });
                        a.set(e.current, {
                            visibility: "visible"
                        }, 0).add(s.p8.effects.textFadeIn("h2 span.title-a .char", {
                            duration: r.duration * (2 / 6),
                            stagger: {
                                amount: r.duration * (4 / 6)
                            }
                        }), A).to(["h2.first-words"], ...l({
                            start: 41,
                            end: 51,
                            opacity: 0
                        })).add(s.p8.effects.textFadeIn("h2 span.title-b .char", {
                            duration: d.duration * (4 / 6),
                            stagger: {
                                amount: d.duration * (2 / 6)
                            }
                        }), c).to(["h2.second-words"], ...l({
                            start: 76,
                            end: 86,
                            opacity: 0
                        })).fromTo(".".concat(h().container), {
                            "--swipe-out-factor": "100%"
                        }, ...l({
                            "--swipe-out-factor": "-10%",
                            start: 78,
                            end: 99
                        }));
                        let g = s.p8.timeline({
                            paused: !0
                        }).to('h2 [data-word="distracting"]', {
                            color: "#FF6F6F",
                            duration: .2
                        }).fromTo("#notifications", {
                            y: 0,
                            opacity: 0
                        }, {
                            y: -5,
                            opacity: 1,
                            ease: "power2.out",
                            duration: .2
                        }, "<").to("#notifications", {
                            y: 0,
                            ease: "power2.in",
                            duration: .1
                        });
                        (0, n.f)(g, {
                            label: "Notification"
                        }), i.waypoint({
                            at: 62,
                            onCall() {
                                o.f.setState({
                                    blinder: -.35
                                })
                            },
                            onReverseCall() {
                                o.f.setState({
                                    blinder: m.J
                                })
                            }
                        }).waypoint({
                            at: 35,
                            onCall() {
                                g.play()
                            },
                            onReverseCall() {
                                g.reverse()
                            }
                        }).waypoint({
                            at: 99.9,
                            onCall() {
                                s.p8.set(e.current, {
                                    opacity: 0
                                })
                            },
                            onReverseCall() {
                                s.p8.set(e.current, {
                                    opacity: 1
                                })
                            }
                        }), (0, n.f)(a, {
                            label: "Attention"
                        })
                    }, {
                        scope: e,
                        dependencies: [t],
                        revertOnUpdate: !0
                    }), (0, l.jsxs)("section", {
                        id: "introduction-section",
                        ref: e,
                        className: (0, A.L)("relative motion-safe:invisible motion-safe:h-[500vh] motion-safe:mt-[-100vh] motion-reduce:my-vw-72 z-section mix-blend-multiply pointer-events-none"),
                        children: [(0, l.jsx)("div", {
                            "data-index-title": "Why?",
                            className: "absolute bottom-[130vh] top-[100vh] w-full"
                        }), (0, l.jsxs)("div", {
                            className: (0, A.L)("sticky top-0 flex flex-col items-center justify-center w-full motion-safe:h-screen motion-reduce:h-initial motion-reduce:relative gap-y-vw-40 motion-reduce:gap-y-vw-80", h().container),
                            children: [(0, l.jsxs)("h2", {
                                className: "p-vw-4 absolute motion-reduce:relative text-center title-md text-scale-[40px]/[72px] first-words max-w-[18em]",
                                children: [(0, l.jsxs)("div", {
                                    className: "[perspective:900px]",
                                    children: [(0, l.jsx)(x, {
                                        className: "title-a",
                                        text: g
                                    }), (0, l.jsx)("span", {
                                        className: "relative inline-block h-[0.83em]",
                                        children: (0, l.jsx)("span", {
                                            id: "notifications",
                                            className: "motion-safe:lg:opacity-0 lg:opacity-0 top-[0.2em] left-[0.4em] font-medium rounded-full w-[1.75em] text-[0.25em] aspect-square inline-flex justify-center items-center bg-[#FF6F6F] text-cream absolute overflow-hidden",
                                            children: (0, l.jsx)("span", {
                                                className: "absolute title font-bold translate-x-[-0.21em] translate-y-[-0.47em] top-1/2 left-1/2",
                                                children: "1"
                                            })
                                        })
                                    })]
                                }), (0, l.jsx)("div", {
                                    className: "[perspective:900px]"
                                })]
                            }), (0, l.jsx)("h2", {
                                className: "[&_[data-word=Daylight]]:italic p-vw-4 text-center absolute motion-reduce:relative title-md text-scale-[40px]/[72px] second-words max-w-[9em] md:max-w-[15em]",
                                children: (0, l.jsx)("div", {
                                    className: "[perspective:900px]",
                                    children: (0, l.jsx)(x, {
                                        className: "title-b",
                                        text: u
                                    })
                                })
                            })]
                        })]
                    })
                },
                x = e => {
                    let {
                        text: t,
                        className: a,
                        charClassName: i
                    } = e;
                    return (0, l.jsx)(l.Fragment, {
                        children: t.words.map((e, t) => (0, l.jsx)("span", {
                            className: (0, A.L)("inline-block whitespace-nowrap", a),
                            children: e[1].map((t, a) => (0, l.jsx)("span", {
                                className: (0, A.L)("inline-block whitespace-pre char", i),
                                "data-word": e[0],
                                children: t
                            }, a))
                        }, t))
                    })
                }
        },
        75026: (e, t, a) => {
            "use strict";
            a.d(t, {
                TabletReveal: () => G
            });
            var l = a(69797),
                i = a(64243),
                s = a(49291),
                r = a(15791),
                n = a(2643),
                o = a(9897);
            let A = function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    a = (0, r.useRef)({
                        x: 0,
                        y: 0
                    }),
                    l = (0, o.Z)(),
                    i = (0, r.useRef)(l),
                    s = (0, r.useRef)(e);
                return s.current = e, (0, r.useEffect)(() => {
                    i.current = l
                }, [l]), (0, r.useEffect)(() => {
                    let e = e => {
                        var t;
                        let {
                            clientX: l,
                            clientY: r
                        } = e;
                        a.current.x = (l - i.current.width / 2) / i.current.width, a.current.y = (r - i.current.height / 2) / i.current.height, null === (t = s.current) || void 0 === t || t.call(s, a.current)
                    };
                    return window.addEventListener("mousemove", e), () => {
                        window.removeEventListener("mousemove", e)
                    }
                }, t), a.current
            };
            var d = a(1278),
                c = a(98675),
                h = a(22550),
                m = a(12795),
                g = a(61646);
            let u = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    [t, a] = (0, r.useState)(e),
                    l = (0, r.useCallback)(() => {
                        a(!0)
                    }, []),
                    i = (0, r.useCallback)(() => {
                        a(!1)
                    }, []);
                return {
                    isOn: t,
                    handleToggle: (0, r.useCallback)(() => {
                        a(e => !e)
                    }, []),
                    handleOn: l,
                    handleOff: i
                }
            };
            var p = a(22948),
                x = a(20513),
                w = a(82372),
                b = a(78931);
            let f = e => {
                let {
                    className: t,
                    ...a
                } = e;
                return (0, l.jsxs)("div", {
                    id: "tablet-aside",
                    className: (0, w.L)("max-lg:container max-lg:text-4xl title-md text-center pt-[2em] md:pt-[3em] lg:px-[1em] lg:pt-0 lg:text-left text-moonlight", t),
                    ...a,
                    children: [(0, l.jsx)("h3", {
                        id: "tablet-aside-title",
                        className: "max-lg:mx-auto",
                        children: "Goodbye, blue\xa0light"
                    }), (0, l.jsx)("p", {
                        id: "tablet-aside-description",
                        className: "paragraph-sm text-base md:paragraph-md max-lg:mx-auto mt-[1em] max-w-[23em]",
                        children: "Most devices emit blue light that affects your circadian rhythm, even in night mode. Daylight doesn’t."
                    }), (0, l.jsxs)("div", {
                        id: "tablet-aside-columns",
                        className: "flex max-lg:flex-col text-left max-lg:px-vw-2 md:justify-between gap-y-[2em] md:gap-x-[0.5em] lg:gap-x-[2em] text-[0.4em] mt-[2em]",
                        children: [(0, l.jsx)(x.y, {
                            className: "opacity-70 lg:max-w-[7em]",
                            iconComponent: (0, l.jsx)(b.R, {
                                className: "w-full mb-4 max-w-[1.5em]",
                                name: "sleep-light"
                            }),
                            title: "Better sleep",
                            text: "Can be used in the direct sun glare free"
                        }), (0, l.jsx)(x.y, {
                            className: "opacity-70 lg:max-w-[7em]",
                            iconComponent: (0, l.jsx)(b.R, {
                                className: "w-full mb-4 max-w-[1.5em]",
                                name: "afternoon-light"
                            }),
                            title: "In sync with sun",
                            text: "Unlike a conventional screen, our display is even more visible in the direct sun!"
                        }), (0, l.jsx)(x.y, {
                            className: "opacity-70 lg:max-w-[7em]",
                            iconComponent: (0, l.jsx)(b.R, {
                                className: "w-full mb-4 max-w-[1.5em]",
                                name: "campfire-light"
                            }),
                            title: "Pure amber",
                            text: "Enable spending more time outdoors when using a computer"
                        })]
                    })]
                })
            };
            var v = a(14798);
            let j = (0, v.Q)(() => a.e(4812).then(a.bind(a, 64812))),
                y = (0, v.Q)(() => Promise.all([a.e(6558), a.e(8471)]).then(a.bind(a, 48471))),
                N = {
                    value: 0
                },
                C = 5 / 6,
                R = () => {
                    let e = (0, r.useRef)(null),
                        [t, a] = (0, r.useState)(null),
                        [i, o] = (0, r.useState)(null),
                        {
                            isOn: x,
                            handleOn: w,
                            handleOff: b
                        } = u(!1),
                        [v, R] = (0, r.useState)([0, 0, 0]),
                        U = (0, n.f)(e => e.canvasElement),
                        B = (0, r.useMemo)(() => {
                            let e = new h.w;
                            return e.updateMatrixWorld(!0), e.updateMatrix(), e
                        }, []),
                        [E, k] = (0, r.useState)(null),
                        [G, Q] = (0, r.useState)(null);
                    return A(e => {
                        let a = .025 * Math.PI * e.y * N.value,
                            l = .025 * Math.PI * e.x * N.value;
                        null == t || t.rotation.set(a, l, 0), null == G || G.rotation.set(a, l, 0), (null == i ? void 0 : i.uOffset) && (i.uOffset.value[0] = -e.x * N.value, i.uOffset.value[1] = e.y * N.value)
                    }, [t, G, i]), (0, d.ui)(() => {
                        let a = s.ZP.matchMedia();
                        return a.add({
                            horizontal: p.vl.query.lg,
                            vertical: p.vl.query.maxLg
                        }, a => {
                            var l;
                            let r = e.current,
                                o = null == U ? void 0 : U.closest("#canvas-container");
                            if (!t || !i || !r || "undefined" == typeof document || !U || !o || !G || !E || 0 === v[0] || !a.selector) return;
                            let A = a.selector("#tablet-aside")[0].getBoundingClientRect(),
                                c = A.width,
                                h = A.height,
                                u = s.ZP.timeline({
                                    scrollTrigger: {
                                        trigger: e.current,
                                        start: "top bottom",
                                        end: "bottom top",
                                        toggleActions: "restart none none reverse",
                                        scrub: !0
                                    }
                                }),
                                p = (0, d.xy)(u),
                                x = p.get;
                            p.get = e => x({
                                ...e,
                                start: e.start * C,
                                end: e.end * C
                            }), u.to(G.position, ...p.get({
                                start: 50,
                                end: 65,
                                id: "plane-scale",
                                z: -0,
                                ease: "power2.inOut"
                            })).fromTo([t.position], {
                                z: 100
                            }, ...p.get({
                                start: 50,
                                end: 65,
                                id: "title-z",
                                z: -0,
                                ease: "power2.inOut"
                            })).fromTo([N], {
                                value: 0
                            }, ...p.get({
                                start: 50,
                                end: 65,
                                id: "tilt-factor",
                                value: 1
                            }));
                            let [f, j] = p.get({
                                start: 5,
                                end: 25
                            });
                            u.fromTo(".lights-title .title-a span", {
                                opacity: 0,
                                y: -10,
                                z: 25,
                                rotationX: 10
                            }, {
                                id: "first-title",
                                duration: f.duration * (4 / 6),
                                onReverseComplete: () => {
                                    n.f.setState({
                                        shadowSceneActive: !0
                                    }), o.style.removeProperty("mix-blend-mode")
                                },
                                ease: "power3.out",
                                y: 0,
                                z: 0,
                                rotationX: 0,
                                opacity: 1,
                                stagger: {
                                    amount: f.duration * (2 / 6)
                                }
                            }, j);
                            let [y, R] = p.get({
                                start: 20,
                                end: 40
                            });
                            return u.set("#tablet-reveal-3d-text-container", {
                                visibility: "visible"
                            }, 0).fromTo(".lights-title .title-b span", {
                                opacity: 0,
                                y: -10,
                                z: 25,
                                rotationX: 10
                            }, {
                                id: "second-title",
                                ease: "power3.out",
                                duration: .5 * y.duration,
                                y: 0,
                                z: 0,
                                rotationX: 0,
                                opacity: 1,
                                stagger: {
                                    amount: .5 * y.duration
                                }
                            }, R).fromTo([null == i ? void 0 : i.uAlpha], {
                                value: 0
                            }, ...p.get({
                                start: 40,
                                end: 50,
                                value: 1
                            })).to([".lights-title .title-b", ".lights-title .title-a"], ...p.get({
                                start: 40,
                                end: 50,
                                color: "#000",
                                ease: "power1.inOut"
                            })).to([g.mix], ...p.get({
                                start: 40,
                                end: 50,
                                value: 1,
                                ease: "power1.inOut"
                            })).set([i.uBackgroundAlpha], {
                                id: "render-background",
                                value: 1
                            }, 50 * C).to([E.position], ...p.get({
                                start: 70,
                                end: 92.5,
                                id: "move-aside",
                                ease: "power2.inOut",
                                ...(null === (l = a.conditions) || void 0 === l ? void 0 : l.horizontal) ? {
                                    x: -c / v[2]
                                } : {
                                    y: -(.75 * h) / v[2]
                                }
                            })).to([N], ...p.get({
                                start: 70,
                                end: 92.5,
                                id: "tilt-factor-aside",
                                value: 0
                            })).to("#tablet-text-title", ...p.get({
                                start: 65,
                                end: 72.5,
                                id: "move-aside",
                                ease: "power2.inOut",
                                opacity: 0
                            })).fromTo(["#tablet-aside-title", "#tablet-aside-description", "#tablet-aside-columns"], {
                                x: 120
                            }, ...p.get({
                                start: 70,
                                end: 95,
                                id: "side-text",
                                x: 0,
                                stagger: .5,
                                ease: "power2.inOut",
                                clearProps: "transform"
                            })).fromTo(["#tablet-aside-title", "#tablet-aside-description", "#tablet-aside-columns"], {
                                opacity: 0
                            }, ...p.get({
                                start: 85,
                                end: 100,
                                id: "side-text",
                                stagger: .5,
                                opacity: 1,
                                ease: "power2.out"
                            })), p.utils.waypoint({
                                at: .01,
                                onCall: () => {
                                    w()
                                },
                                onReverseCall: () => {
                                    b()
                                }
                            }), p.utils.waypoint({
                                at: 99.99,
                                onCall: () => {
                                    b()
                                },
                                onReverseCall: () => {
                                    w()
                                }
                            }), p.utils.waypoint({
                                at: 42 * C,
                                onCall: () => {
                                    n.f.setState({
                                        headerDarkMode: !0
                                    })
                                },
                                onReverseCall: () => {
                                    n.f.setState({
                                        headerDarkMode: !1
                                    })
                                }
                            }), (0, m.f)(u, {
                                label: "Tablet Reveal"
                            }), () => {
                                u.revert(), u.kill()
                            }
                        }), () => {
                            a.revert(), a.kill()
                        }
                    }, {
                        scope: e,
                        dependencies: [e, U, E, G, B, i, t, v],
                        revertOnUpdate: !0
                    }), (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(c.X.In, {
                            id: "tablet-reveal-gl",
                            children: (0, l.jsx)(y, {
                                render: x,
                                setRootScene: k,
                                setTabletScene: Q,
                                setTabletPlaneSize: R,
                                uniformsRef: o
                            })
                        }), (0, l.jsxs)("section", {
                            id: "tablet-reveal-3d-text-container",
                            "data-index-title": "Night",
                            style: {
                                height: "500vh"
                            },
                            ref: e,
                            className: "invisible relative w-full -mt-[100vh] z-section",
                            children: [(0, l.jsx)(j, {
                                render: x,
                                scene: B,
                                tabletTextRef: a
                            }), (0, l.jsx)("div", {
                                id: "tablet-aside-container",
                                style: {
                                    height: "100lvh",
                                    visibility: x ? "visible" : "hidden"
                                },
                                className: "fixed top-0 left-0 flex items-start justify-center w-screen pointer-events-none lg:items-center lg:justify-end z-section",
                                children: (0, l.jsx)(f, {
                                    className: "absolute"
                                })
                            })]
                        })]
                    })
                },
                U = {
                    src: "/_next/product-reveal-color.webp",
                    height: 1080,
                    width: 1920,
                    blurDataURL: "data:image/webp;base64,UklGRqQAAABXRUJQVlA4WAoAAAAQAAAABwAABAAAQUxQSCkAAAAAJHx8fHx7DwCg//////9XAPX///////cw+f///////GTQfHx8fHvKWwBWUDggVAAAALABAJ0BKggABQACQDglsAJ0APH5cEAA/q33KF22HvjlR6nc9Od0ZvO+yNrx4awIzfjz29hFsSn/hobRCude3o/9j3nhkw/chqz69203MIvm6xQAAA==",
                    blurWidth: 8,
                    blurHeight: 5
                },
                B = {
                    src: "/_next/product-reveal-color-portrait.webp",
                    height: 1920,
                    width: 1080,
                    blurDataURL: "data:image/webp;base64,UklGRq4AAABXRUJQVlA4WAoAAAAQAAAABAAABwAAQUxQSCkAAAAADy4uLg97////e5L///+u4v////f0////+fH////GKltbWygAAAAAAABWUDggXgAAAFACAJ0BKgUACAACQDglsAJ0UoB0/4G4xAbUlAD+ikny/d5GT0dApjfUj30IBXvMWnwSjdTNeQ/k2D1Pytjf/lXxrfx77/hcRRb2jkbrfXO4f7FSFMjfcPCIZkE2AAA=",
                    blurWidth: 5,
                    blurHeight: 8
                };
            var E = a(48795);
            let k = () => {
                    let e = (0, r.useRef)(null);
                    return (0, d.ui)(() => {
                        let e = s.ZP.timeline({
                            scrollTrigger: {
                                trigger: "#motion-reduced-tablet",
                                start: "top center",
                                end: "bottom center",
                                scrub: !0
                            }
                        });
                        (0, d.xy)(e).utils.waypoint({
                            at: .1,
                            onCall: () => {
                                n.f.setState({
                                    headerDarkMode: !0
                                })
                            },
                            onReverseCall: () => {
                                n.f.setState({
                                    headerDarkMode: !1
                                })
                            }
                        })
                    }, {
                        scope: e
                    }), (0, l.jsxs)("section", {
                        ref: e,
                        className: "relative bg-night z-section mt-vw-32",
                        children: [(0, l.jsxs)("div", {
                            id: "motion-reduced-tablet",
                            className: "h-[100svh] w-full relative flex items-center justify-center",
                            children: [(0, l.jsx)(E.default, {
                                src: U,
                                placeholder: "blur",
                                fill: !0,
                                className: "absolute inset-0 object-contain max-lg:hidden",
                                alt: ""
                            }), (0, l.jsx)(E.default, {
                                src: B,
                                placeholder: "blur",
                                fill: !0,
                                className: "absolute inset-0 object-cover lg:hidden",
                                alt: ""
                            }), (0, l.jsxs)("h2", {
                                className: " relative text-center title text-white lights-title [@media(min-aspect-ratio:1/1)]:text-[56px] text-[36px] md:text-[44px] ",
                                children: ["When lights go off,", (0, l.jsx)("br", {}), "enjoy the warm glow."]
                            })]
                        }), (0, l.jsx)("div", {
                            className: "container pb-[10em] lg:py-[10em]",
                            children: (0, l.jsx)(f, {})
                        })]
                    })
                },
                G = () => (0, i.q)(e => e.reducedMotion) ? (0, l.jsx)(k, {}) : (0, l.jsx)(R, {})
        },
        61646: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => g,
                mix: () => m
            });
            var l = a(69797),
                i = a(15791),
                s = a(48024),
                r = a(49291);
            let n = function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                (0, i.useEffect)(() => {
                    function t(t) {
                        e(1e3 * t)
                    }
                    return r.ZP.ticker.add(t), () => {
                        r.ZP.ticker.remove(t)
                    }
                }, t)
            };
            var o = a(84862),
                A = a(37553),
                d = a(44562),
                c = a(82372),
                h = a(8840);
            let m = {
                    value: 0
                },
                g = (0, i.memo)(() => {
                    let [e, t, {
                        ctx: a
                    }] = (0, o.A)({
                        offscreen: !0,
                        maxDpr: 2,
                        options: {
                            alpha: !1,
                            desynchronized: !0,
                            willReadFrequently: !1
                        }
                    }), [r, g, u] = (0, d.r)(!1), p = (0, i.useMemo)(() => {
                        if (!a) return () => {};
                        let e = new Image,
                            t = new DOMMatrix,
                            l = !1;
                        e.src = "/textures/noise-2.png";
                        let i = new Image,
                            s = !1;
                        i.src = "/textures/halftone.png";
                        let r = 0,
                            n = (e, t) => {
                                let l = Math.max(a.canvas.width, a.canvas.height),
                                    i = Math.sqrt(l * l + l * l);
                                if (!(a instanceof OffscreenCanvasRenderingContext2D)) return () => {};
                                a.clearRect(0, 0, l, l), a.fillStyle = "#777", a.globalAlpha = 1, a.fillRect(0, 0, a.canvas.width, a.canvas.height), a.save(), 1 !== m.value && (a.globalAlpha = .7 * (1 - m.value), a.fillStyle = e, a.translate(l / 2, l / 2), a.rotate((0, h.Id)(45 * r)), r++, a.fillRect(-i / 2, -i / 2, i, i), a.restore()), 0 !== m.value && (a.globalAlpha = .3 * m.value, a.fillStyle = t, a.fillRect(0, 0, l, l))
                            },
                            o = null,
                            A = () => {
                                if (!s || !l || !(a instanceof OffscreenCanvasRenderingContext2D)) return;
                                let r = a.createPattern(e, "repeat"),
                                    n = a.createPattern(i, "repeat");
                                r && n && (r.setTransform(t.scale(.25, .25)), o = {
                                    noisePattern: r,
                                    dottedPattern: n
                                })
                            };
                        return i.onload = () => {
                            s = !0, A()
                        }, e.onload = () => {
                            l = !0, A()
                        }, () => {
                            o && (u.current || g(!0), n(o.noisePattern, o.dottedPattern))
                        }
                    }, [a]), x = (0, s.zl)(p, 1e3 / 30);
                    n(x, [x]);
                    let w = (0, A.Fy)(e => e.isFirefox),
                        b = (0, A.Fy)(e => e.isSafari),
                        f = (0, A.Fy)(e => e.isMobileSafari),
                        v = (0, A.Fy)(e => {
                            var t;
                            return (null === (t = e.gpu) || void 0 === t ? void 0 : t.tier) || 3
                        }),
                        j = (0, A.qo)();
                    return w || b || f || v <= 2 || j ? null : (0, l.jsx)("div", {
                        style: {
                            willChange: "transform",
                            backfaceVisibility: "hidden"
                        },
                        id: "noise-canvas",
                        className: (0, c.L)("fixed top-0 left-0 w-full opacity-0 pointer-events-none h-lvh z-modal mix-blend-overlay transition-opacity duration-700", r && "opacity-100"),
                        ref: t,
                        children: (0, l.jsx)("canvas", {
                            ref: e
                        })
                    })
                })
        },
        37553: (e, t, a) => {
            "use strict";
            a.d(t, {
                B$: () => n,
                Fy: () => r,
                qo: () => o
            });
            var l = a(40577),
                i = a(15791),
                s = a(43180);
            let r = (0, l.Ue)(() => ({})),
                n = () => {
                    let e = r(e => {
                            var t;
                            return null === (t = e.gpu) || void 0 === t ? void 0 : t.tier
                        }),
                        t = r(e => e.isMobile || e.isTablet),
                        a = o();
                    return (0, i.useMemo)(() => !t && (void 0 === e || e > 1 && !a), [e, , t])
                },
                o = () => {
                    let e = (0, s.Z)();
                    return (0, i.useMemo)(() => !!e.isSupported && !!e.fetched && (e.level < .1 || !e.charging && e.level < .3), [e])
                }
        },
        24364: (e, t, a) => {
            "use strict";
            a.d(t, {
                G: () => s
            });
            var l = a(15791),
                i = a(9673);
            let s = (e, t) => {
                let [a, s] = l.useState(t);
                return l.useEffect(() => {
                    if (!(0, i.Q3)("matchMedia")) {
                        console.warn("matchMedia is not supported by your current browser");
                        return
                    }
                    let t = window.matchMedia(e),
                        a = () => s(!!t.matches);
                    return (a(), "function" == typeof t.addEventListener) ? (t.addEventListener("change", a), () => {
                        t.removeEventListener("change", a)
                    }) : "function" == typeof t.addListener ? (t.addListener(a), () => {
                        t.removeListener(a)
                    }) : void 0
                }, [e]), a
            }
        },
        44562: (e, t, a) => {
            "use strict";
            a.d(t, {
                h: () => s,
                r: () => i
            });
            var l = a(15791);
            let i = e => {
                    let [t, a] = (0, l.useState)(e), i = (0, l.useRef)(t);
                    return (0, l.useEffect)(() => {
                        i.current = t
                    }, [t]), [t, a, i]
                },
                s = e => {
                    let t = (0, l.useRef)(e);
                    return (0, l.useEffect)(() => {
                        t.current = e
                    }, [e]), t
                }
        },
        9981: e => {
            e.exports = {
                "video-button": "hero_video-button__0tW5t"
            }
        },
        8929: e => {
            e.exports = {
                container: "modern-devices_container__nWyUA"
            }
        },
        2133: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => l
            });
            let l = {
                src: "/_next/OG-homepage.png",
                height: 642,
                width: 1200,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAM1BMVEU+NiLOvat5cGNQSjpaVEROS0HYxbIzMSYgHhIsKBziz71CPzJNRCQVEwuVi3zDrZW7rJqXxVISAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKElEQVR4nAXBhQEAIAwDsM4FGf9fSwKsOMZaQFReb8bOxBsSqIV4U30PdQDYwsyPHAAAAABJRU5ErkJggg==",
                blurWidth: 8,
                blurHeight: 4
            }
        },
        4247: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => l
            });
            let l = {
                src: "/_next/Comp_00000.webp",
                height: 940,
                width: 1920,
                blurDataURL: "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAACwAQCdASoIAAQAAkA4JQBOgB6Q9fKAAP74lWB2TZi4mBy7qK7Pf9B9cPxUylTNEFwaBZAt7LoOQAAA",
                blurWidth: 8,
                blurHeight: 4
            }
        },
        72874: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => l
            });
            let l = {
                src: "/_next/sun.png",
                height: 756,
                width: 728,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAElBMVEX/nAD/nAD/nAD/lAD/nAD/lADG4+B2AAAABnRSTlNGHFEBKwr2YYLkAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAKElEQVR4nEWLsQ0AIACDoO3/NzupGwlA62ZLBbBIkiAjEPbhqRff/QAO6ABpQiYD+wAAAABJRU5ErkJggg==",
                blurWidth: 8,
                blurHeight: 8
            }
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [4729, 9993, 6364, 7106, 9798, 810, 2972, 6146, 1199, 5833, 2969, 5691, 7874, 6713, 3028, 1744], () => t(44040)), _N_E = e.O()
    }
]);