(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1752], {
        67277: (e, t, a) => {
            Promise.resolve().then(a.t.bind(a, 20810, 23)), Promise.resolve().then(a.bind(a, 4590)), Promise.resolve().then(a.bind(a, 80778)), Promise.resolve().then(a.bind(a, 89142)), Promise.resolve().then(a.bind(a, 78883)), Promise.resolve().then(a.bind(a, 44019)), Promise.resolve().then(a.bind(a, 78659)), Promise.resolve().then(a.bind(a, 46895)), Promise.resolve().then(a.bind(a, 62707)), Promise.resolve().then(a.bind(a, 39251)), Promise.resolve().then(a.bind(a, 69682)), Promise.resolve().then(a.bind(a, 9925)), Promise.resolve().then(a.bind(a, 59667)), Promise.resolve().then(a.bind(a, 49461)), Promise.resolve().then(a.bind(a, 85278)), Promise.resolve().then(a.bind(a, 60609)), Promise.resolve().then(a.bind(a, 47076))
        },
        44019: (e, t, a) => {
            "use strict";
            a.d(t, {
                Device: () => N
            });
            var l = a(69797),
                s = a(24248);
            let A = {
                    src: "/_next/static/media/case.95fd272f.webp",
                    height: 1514,
                    width: 1114,
                    blurDataURL: "data:image/webp;base64,UklGRpQAAABXRUJQVlA4WAoAAAAQAAAABQAABwAAQUxQSCwAAAABR6CQjSQ4ubv3QxzXoVxEBPacE3wYhCRFIYQQHiGZJpUljyGi/1F7Td4hAFZQOCBCAAAAUAIAnQEqBgAIAAJAOCWwAnS6AfgAAyEHLBkAAP7ri2SZ/rMkYCXFz1bf/ho0E52j2zXztQ/+XGS7ytr14ydDrQAA",
                    blurWidth: 6,
                    blurHeight: 8
                },
                i = {
                    src: "/_next/static/media/product-2.78916bca.png",
                    height: 698,
                    width: 984,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAM1BMVEXZsrLi29bf087k29fh2dXc1dDv6+nq5uTVzsrr5+bazs7p5uXGwLzf19Pm397n39v//PoX39fIAAAAD3RSTlMBZLzaKO3+/v7KFeX8mpNZfL13AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAMUlEQVR4nC3GQRKAIAwDwKgtSVEM/3+tI8OeFh1bvTFiZd7O409rtM9AWaR8ofiIUn4bpwE4UP466AAAAABJRU5ErkJggg==",
                    blurWidth: 8,
                    blurHeight: 6
                },
                r = {
                    src: "/_next/static/media/battery.225a999b.png",
                    height: 698,
                    width: 1010,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAG1BMVEVMaXHV1dPUz8//4+OwsLCpqKje3tzY1tTi4t+yVkmlAAAACXRSTlMAkQsBGzV7Pmo91hIbAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAKElEQVR4nBXGAQoAMAzCwMxqt/+/eHgQCNQ0Sercs7vPnTI4SSyYAj4LRQB1bAO6fgAAAABJRU5ErkJggg==",
                    blurWidth: 8,
                    blurHeight: 6
                },
                n = {
                    src: "/_next/static/media/stylus.01a5174a.png",
                    height: 540,
                    width: 2090,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAElBMVEXq5+Td1tLZ1tJMaXHk29vS0tJdE65WAAAABnRSTlNVS0sAHRctbMFqAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAFUlEQVR4nGNgZmGAAGZWRkZGJiYmAADbABmY/lGcAAAAAElFTkSuQmCC",
                    blurWidth: 8,
                    blurHeight: 2
                };
            var c = a(50080),
                d = a(49371),
                o = a(67294),
                g = a(15791),
                m = a(62707),
                h = a(22948),
                u = a(42257),
                p = a(82372),
                x = a(84862),
                w = a(1278),
                b = a(56486),
                f = a(22648);
            let v = (e, t, a) => {
                let l = (0, g.useRef)(!1),
                    s = (0, g.useRef)([]),
                    [A, i] = (0, g.useState)(!1),
                    r = (0, o.Z)(h.vl.query.lg),
                    n = (0, g.useMemo)(() => new b.TinyEmitter, []),
                    c = (0, g.useCallback)(async e => {
                        let [t, a] = e, l = new window.Image;
                        return l.src = t, await new Promise(e => {
                            l.onload = () => {
                                s.current[a] = l, n.emit("load", [a, l]), e(null)
                            }
                        }), () => {
                            l.src = "", s.current[a] = void 0
                        }
                    }, []),
                    d = (0, g.useMemo)(() => {
                        let l = [],
                            s = [];
                        return Array.from({
                            length: e
                        }).forEach((e, A) => {
                            A % t == 0 ? l.push([a(A), A]) : s.push([a(A), A])
                        }), {
                            eagerFrames: l,
                            lazyFrames: s
                        }
                    }, []);
                (0, g.useEffect)(() => {
                    i(!0)
                }, [d]), (0, f.lG)(() => {
                    let e;
                    if (A) return Promise.all(d.lazyFrames.map(c)).then(t => {
                        e = () => {
                            t.forEach(e => e())
                        }
                    }), () => {
                        null == e || e()
                    }
                }, [A, c, d.lazyFrames]), (0, g.useLayoutEffect)(() => {
                    let e;
                    if (!l.current) return Promise.all(d.eagerFrames.map(c)).then(t => {
                        i(!0), e = () => {
                            t.forEach(e => e())
                        }
                    }), l.current = !0, () => {
                        i(!1), l.current = !1, null == e || e()
                    }
                }, [r, l, c]);
                let m = (0, g.useCallback)(t => {
                    let a = Math.floor(t * (e - 1));
                    return s.current[a]
                }, [e]);
                return {
                    frames: d,
                    loadedImagesRef: s,
                    highPriorityLoaded: A,
                    emitter: n,
                    getFrameByProgress: m
                }
            };
            var j = a(62405);
            let E = e => {
                    let {
                        title: t,
                        image: a,
                        description: s,
                        wide: A = !1,
                        imageClassName: i,
                        video: r,
                        getSequenceImage: n,
                        frames: c,
                        transformCallback: d,
                        canvasWrapperClassName: m,
                        loop: b = !1,
                        ...f
                    } = e, E = (0, g.useRef)(null), y = (0, g.useRef)(0), N = (0, o.Z)(h.vl.query.lg), {
                        loadedImagesRef: B,
                        emitter: C,
                        getFrameByProgress: R
                    } = v(c, 2, n), [U, Q, {
                        ctx: M,
                        width: k,
                        height: S
                    }] = (0, x.A)({
                        offscreen: !1,
                        maxDpr: 3,
                        options: {
                            alpha: !0,
                            desynchronized: !0,
                            willReadFrequently: !1
                        }
                    }), L = (0, g.useCallback)(e => {
                        var t;
                        if (!M) return;
                        M.clearRect(0, 0, M.canvas.width, M.canvas.height), M.save();
                        let {
                            drawX: a,
                            drawY: l,
                            drawWidth: s,
                            drawHeight: A
                        } = null !== (t = null == d ? void 0 : d(e, M)) && void 0 !== t ? t : (0, u.rF)(M.canvas.width, M.canvas.height, e.width, e.height, "contain");
                        M.drawImage(e, a, l, s, A), M.restore()
                    }, [M, d, k, S]);
                    (0, g.useEffect)(() => {
                        let e = R(y.current);
                        e && L(e)
                    }, [L]), (0, g.useEffect)(() => {
                        if (B.current[0]) {
                            L(B.current[0]);
                            return
                        }
                        let e = t => {
                            let [a, l] = t;
                            0 === a && (L(l), C.off("load", e))
                        };
                        return C.on("load", e), () => {
                            C.off("load", e)
                        }
                    }, [L, C]);
                    let V = (0, g.useCallback)(() => {
                            w.p8.to(y, {
                                overwrite: !0,
                                current: 1,
                                ease: "none",
                                duration: .8 * (1 - y.current),
                                onUpdate: () => {
                                    let e = R(y.current);
                                    e && L(e)
                                }
                            })
                        }, [L]),
                        I = (0, g.useCallback)(() => {
                            w.p8.to(y, {
                                overwrite: !0,
                                current: 0,
                                ease: "none",
                                duration: .8 * y.current,
                                onUpdate: () => {
                                    let e = R(y.current);
                                    e && L(e)
                                }
                            })
                        }, [L]);
                    return (0, g.useEffect)(() => {
                        if (void 0 === N || !0 === N) return;
                        let e = j.i.create({
                            trigger: E.current,
                            markers: h.r8,
                            start: "top center",
                            end: "bottom center",
                            onEnter: V,
                            onEnterBack: V,
                            onLeave: I,
                            onLeaveBack: I
                        });
                        return () => {
                            e.kill()
                        }
                    }, [L, V, I]), (0, l.jsxs)("div", {
                        ...f,
                        className: (0, p.L)("relative paragraph-sm lg:paragraph-md aspect-[327/453] flex flex-col items-end bg-[#EFE7E2] rounded-lg overflow-hidden", f.className),
                        onPointerEnter: N ? V : void 0,
                        onPointerLeave: N ? I : void 0,
                        ref: E,
                        children: [(0, l.jsx)("div", {
                            className: (0, p.L)("relative flex-1 w-full", i),
                            children: (0, l.jsx)("div", {
                                className: (0, p.L)("absolute inset-0", m),
                                ref: Q,
                                children: (0, l.jsx)("canvas", {
                                    className: "w-full",
                                    ref: U
                                })
                            })
                        }), (0, l.jsxs)("div", {
                            className: (0, p.L)("relative w-full mt-auto bg-[#EFE7E2] p-[1em] flex gap-[1.25em]", {
                                "flex-col": !A,
                                "flex-col lg:flex-row justify-between": A
                            }),
                            children: [(0, l.jsx)("p", {
                                className: "font-medium text-pretty text-night",
                                children: t
                            }), (0, l.jsx)("p", {
                                className: "text-pretty max-w-[22.5em] text-night text-opacity-50",
                                children: s
                            })]
                        })]
                    })
                },
                y = e => {
                    let {
                        title: t,
                        specs: a
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: "paragraph-sm lg:paragraph-md",
                        children: [(0, l.jsxs)(s.ck, {
                            className: "md:hidden group",
                            value: t,
                            children: [(0, l.jsxs)(s.xz, {
                                className: "flex items-center justify-between w-full title-sm",
                                children: [(0, l.jsx)("h4", {
                                    className: "text-[0.8em]",
                                    children: t
                                }), (0, l.jsx)("span", {
                                    className: "block rotate-90 group-data-[state=open]:-rotate-90",
                                    children: (0, l.jsx)("svg", {
                                        width: "0.6em",
                                        viewBox: "0 0 32 32",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: (0, l.jsx)("path", {
                                            d: "M7.344 14.84L30 14.84L30 17.24L7.344 17.24L7.344 17.432L16.608 26.6L14.112 27.128L1.68 16.088L1.68 16.04L14.112 5L16.656 5.528L7.344 14.648L7.344 14.84Z",
                                            fill: "currentColor"
                                        })
                                    })
                                })]
                            }), (0, l.jsx)(s.VY, {
                                className: "mt-[2em]",
                                children: (0, l.jsx)("ul", {
                                    className: "list-inside",
                                    children: a.map((e, t) => (0, l.jsx)("li", {
                                        className: "border-b first:pt-0 border-dashed py-[0.75em] border-opacity-20 text-pretty border-night",
                                        children: (0, l.jsx)("p", {
                                            className: "text-opacity-50 text-night",
                                            children: e
                                        })
                                    }, t))
                                })
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "hidden md:flex flex-col gap-y-[2.66em]",
                            children: [(0, l.jsx)("h4", {
                                className: "title-sm",
                                children: t
                            }), (0, l.jsx)("ul", {
                                className: "list-inside",
                                children: a.map((e, t) => (0, l.jsx)("li", {
                                    className: "border-b first:pt-0 border-dashed py-[0.75em] border-opacity-20 text-pretty border-night",
                                    children: (0, l.jsx)("p", {
                                        className: "text-opacity-50 text-night",
                                        children: e
                                    })
                                }, t))
                            })]
                        })]
                    })
                },
                N = () => {
                    let e = (0, g.useRef)(null),
                        t = (0, d.Z)(e, {}),
                        a = (0, o.Z)(h.vl.query.lg);
                    (0, g.useEffect)(() => {
                        if (!t) return;
                        let e = !t.isIntersecting && t.boundingClientRect.top > 0;
                        m.a.setState({
                            hide: !e
                        })
                    }, [t]);
                    let p = function (e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4,
                            a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "png";
                        return l => "/sequences/product-".concat(e, "/Comp_").concat(l.toString().padStart(t, "0"), ".").concat(a)
                    };
                    return (0, l.jsxs)("section", {
                        ref: e,
                        className: "relative z-section pt-vw-14 pb-vw-16 md:pt-vw-20 md:pb-vw-32 bg-[#E7DED8]",
                        children: [(0, l.jsx)("div", {
                            className: "max-lg:container lg:contents",
                            children: (0, l.jsxs)("div", {
                                className: "max-lg:rounded-lg flex-col gap-[0.8em] md:flex-row rounded-tl-lg z-modal rounded-bl-lg mb-vw-4 flex items-center justify-between lg:sticky lg:w-[92%] ml-auto top-vw-3 col-[2/13] max-lg:p-[0.8em] lg:px-[0.66em] lg:py-[0.5em] bg-night title-sm text-moonlight",
                                children: [(0, l.jsx)("h3", {
                                    className: "text-pretty",
                                    children: "What’s in the Daylight Box?"
                                }), (0, l.jsx)(c.k, {
                                    className: "max-md:w-full"
                                })]
                            })
                        }), (0, l.jsxs)("div", {
                            className: "relative grid grid-cols-1 max-lg:container lg:avoid-desktop-header lg:px-vw-6 gap-x-vw-8 lg:grid-cols-12 lg:gap-x-vw-6",
                            children: [(0, l.jsx)("div", {
                                id: "device-container",
                                className: "col-[1/13] lg:col-[2/13]",
                                children: (0, l.jsxs)("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-vw-4",
                                    children: [(0, l.jsx)(E, {
                                        image: A,
                                        className: "col-[1] !aspect-[490/430] max-lg:md:aspect-[490/300] lg:!aspect-auto lg:col-[1] lg:row-[1/3]",
                                        canvasWrapperClassName: "inset-4 lg:inset-16",
                                        title: "Comfy case",
                                        description: (0, l.jsxs)(l.Fragment, {
                                            children: ["Soft-touch fabric case — the coziest case you’ve ever tried", " ", (0, l.jsx)("span", {
                                                className: "italic",
                                                children: "(* available Fall 2024)"
                                            })]
                                        }),
                                        transformCallback: (e, t) => {
                                            let l = a ? (0, u.rF)(t.canvas.width, t.canvas.height, e.width, e.height, "cover") : (0, u.rF)(t.canvas.width, t.canvas.height, e.height, e.width, "cover");
                                            if (!a) {
                                                let e = l.drawHeight,
                                                    a = l.drawWidth;
                                                t.translate(a, 0), t.rotate(Math.PI / 2), l.drawX = 0, l.drawY = 0, l.drawHeight = a, l.drawWidth = e
                                            }
                                            return {
                                                drawX: l.drawX,
                                                drawY: l.drawY,
                                                drawWidth: l.drawWidth,
                                                drawHeight: l.drawHeight
                                            }
                                        },
                                        getSequenceImage: p("case", 5, "webp"),
                                        frames: 31
                                    }), (0, l.jsx)(E, {
                                        image: i,
                                        className: "col-[1] md:col-[2] lg:col-[2] lg:row-[1] aspect-[490/430] lg:aspect-[490/430]",
                                        title: "Action buttons",
                                        getSequenceImage: p("tablet", 5, "webp"),
                                        frames: 30,
                                        description: "Action buttons for quick access and page turns. Customizable."
                                    }), (0, l.jsx)(E, {
                                        image: r,
                                        className: "col-[1] md:col-[1] lg:col-[3] lg:row-[1] aspect-[490/430] lg:aspect-[490/430]",
                                        title: "Extended battery life",
                                        description: (0, l.jsx)("span", {
                                            className: "inline-block max-w-[14em]",
                                            children: "Enough battery to last you days on a single charge."
                                        }),
                                        frames: 30,
                                        getSequenceImage: p("battery", 5, "webp")
                                    }), (0, l.jsx)(E, {
                                        wide: !0,
                                        className: "col-[1] md:col-[2] lg:row-[2] !aspect-[490/430] lg:!aspect-auto max-lg:md:aspect-[490/300] lg:col-[2/4]",
                                        image: n,
                                        title: "Stylus",
                                        transformCallback: (e, t) => {
                                            let l = (0, u.rF)(t.canvas.width, t.canvas.height, e.width, e.height, "contain");
                                            return a || (l.drawX = 0, l.drawHeight = 1.5 * l.drawHeight, l.drawWidth = 1.5 * l.drawWidth), {
                                                drawX: l.drawX,
                                                drawY: l.drawY,
                                                drawWidth: l.drawWidth,
                                                drawHeight: l.drawHeight
                                            }
                                        },
                                        description: "Wacom. With a button. Removable tips for an always-fresh writing experience. Doesn’t need to be charged.",
                                        getSequenceImage: p("stylus", 5, "webp"),
                                        frames: 30
                                    })]
                                })
                            }), (0, l.jsxs)(s.fC, {
                                type: "multiple",
                                defaultValue: ["Display"],
                                className: "grid grid-cols-1 md:grid-cols-2 col-[1/13] lg:col-[2/13] gap-x-vw-20 gap-y-vw-9 md:gap-y-vw-24 mt-vw-24 md:mt-vw-32",
                                children: [(0, l.jsx)(y, {
                                    title: "Display",
                                    specs: ["10.5in Live Paper™ Display", "1600 x 1200  •  190dpi", "Pure Amber Backlight: Optional  •  DC Dimming  (No PWM)", "Wacom EMR Passive Stylus"]
                                }), (0, l.jsx)(y, {
                                    title: "Performance",
                                    specs: [(0, l.jsxs)(g.Fragment, {
                                        children: [(0, l.jsx)("span", {
                                            className: "font-medium",
                                            children: "RAM"
                                        }), ": 8GB"]
                                    }, "ram"), (0, l.jsxs)(g.Fragment, {
                                        children: [(0, l.jsx)("span", {
                                            className: "font-medium",
                                            children: "Storage"
                                        }), ": 128GB"]
                                    }, "storage"), (0, l.jsxs)(g.Fragment, {
                                        children: [(0, l.jsx)("span", {
                                            className: "font-medium",
                                            children: "CPU"
                                        }), ": MediaTek Helio G99"]
                                    }, "cpu"), (0, l.jsxs)(g.Fragment, {
                                        children: [(0, l.jsx)("span", {
                                            className: "font-medium",
                                            children: "Battery"
                                        }), ": 8000mAh"]
                                    }, "battery")]
                                }), (0, l.jsx)(y, {
                                    title: "Connectivity",
                                    specs: ["Wi-Fi 6", "Bluetooth 5.0", "USB Type-C with PD", "MicroSD slot", "Pogo Pins"]
                                }), (0, l.jsx)(y, {
                                    title: "Device",
                                    specs: [(0, l.jsxs)(g.Fragment, {
                                        children: [(0, l.jsx)("span", {
                                            className: "font-medium",
                                            children: "Weight"
                                        }), ": 1.2 lbs (550g)"]
                                    }, "weight"), "Stereo speakers  •  Microphone", "Customizable Action Buttons"]
                                }), (0, l.jsx)(y, {
                                    title: "Software",
                                    specs: ["Android 13"]
                                })]
                            })]
                        })]
                    })
                }
        },
        78659: (e, t, a) => {
            "use strict";
            a.d(t, {
                Divider: () => p
            });
            var l = a(69797);
            let s = {
                    src: "/_next/static/media/device-dark.4ba41fb0.gif",
                    height: 360,
                    width: 394,
                    blurWidth: 0,
                    blurHeight: 0
                },
                A = {
                    src: "/_next/static/media/software-dark.551fd24e.gif",
                    height: 360,
                    width: 394,
                    blurWidth: 0,
                    blurHeight: 0
                },
                i = {
                    src: "/_next/static/media/display-dark.71beb1b1.gif",
                    height: 360,
                    width: 394,
                    blurWidth: 0,
                    blurHeight: 0
                };
            var r = a(48795),
                n = a(82372),
                c = a(9673),
                d = a(22948),
                o = a(15791),
                g = a(1278),
                m = a(12795),
                h = a(41199),
                u = a(70634);
            let p = e => {
                    let {
                        current: t
                    } = e, a = (0, o.useRef)(null);
                    return (0, g.ui)(() => {
                        if (!a.current) return;
                        let e = g.p8.timeline({
                                scrollTrigger: {
                                    trigger: a.current,
                                    start: "top top",
                                    end: "bottom bottom",
                                    scrub: !0,
                                    id: "divider" + t
                                },
                                defaults: {
                                    ease: "none"
                                }
                            }),
                            {
                                get: l
                            } = (0, g.xy)(e),
                            s = t - 1;
                        s >= 0 && e.fromTo('[data-index="'.concat(s, '"]'), {
                            opacity: 1
                        }, ...l({
                            opacity: .1,
                            start: 10,
                            end: 90
                        })), e.fromTo('[data-index="'.concat(t, '"]'), {
                            opacity: .1
                        }, ...l({
                            opacity: 1,
                            start: 10,
                            end: 90
                        })), (0, m.f)(e, {
                            label: "divider-" + t
                        })
                    }, {
                        dependencies: [t],
                        scope: a,
                        revertOnUpdate: !0
                    }), (0, l.jsxs)("section", {
                        className: "relative z-section h-[200svh]",
                        ref: a,
                        children: [(0, l.jsxs)("div", {
                            className: "container sticky top-0 flex flex-col items-center justify-center lg:justify-between lg:flex-row title text-scale-6xl/9xl max-2xl:lg:text-screen-lg/3xl lg:text-scale-6xl/8xl gap-vw-8 2xl:gap-0 min-h-svh",
                            children: [(0, l.jsx)(x, {
                                index: "0",
                                text: "Display",
                                image: i
                            }), (0, l.jsx)(x, {
                                index: "1",
                                text: "Software",
                                image: A
                            }), (0, l.jsx)(x, {
                                index: "2",
                                text: "Device",
                                image: s
                            })]
                        }), (0, l.jsx)("div", {
                            className: "absolute bottom-0 w-full h-[100svh] pointer-events-none",
                            id: ["Display", "Software", "Device"][t]
                        })]
                    })
                },
                x = e => {
                    let {
                        text: t,
                        image: a,
                        index: s
                    } = e, A = (0, h.LZ)(d.lt);
                    return (0, l.jsxs)("div", {
                        "data-index": s,
                        onClick: () => {
                            let e = document.getElementById(t);
                            e && (null == A || A.scrollTo(e, {
                                duration: 1.5,
                                easing: u.Cg
                            }))
                        },
                        className: (0, n.L)("flex cursor-pointer items-center gap-vw-8 opacity-10"),
                        children: [(0, l.jsx)("span", {
                            children: t
                        }), (0, l.jsx)("div", {
                            className: "relative h-[1.5em] aspect-square",
                            children: (0, l.jsx)(r.default, {
                                src: a,
                                sizes: (0, c.TQ)([{
                                    breakpoint: d.vl.query.lg,
                                    width: "15vw"
                                }, {
                                    breakpoint: d.vl.query.md,
                                    width: "30vw"
                                }, "50vw"]),
                                alt: "",
                                fill: !0,
                                draggable: "false",
                                quality: 100,
                                className: "object-contain"
                            })
                        })]
                    })
                }
        },
        46895: (e, t, a) => {
            "use strict";
            a.d(t, {
                Features: () => g
            });
            var l = a(69797),
                s = a(48795),
                A = a(1278);
            let i = {
                    src: "/_next/static/media/features.1110c0e2.png",
                    height: 1880,
                    width: 3840,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAGFBMVEUMDwAWGQUeIAjWjQJAMQM2KwOndQP9owOg1EpRAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAI0lEQVR4nB3GwREAIAgEsd0DpP+OHc0rANNJAM6OL1b5Qxq9BF0AON1vKzsAAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 4
                },
                r = {
                    src: "/_next/static/media/features-tablet.8cffd323.png",
                    height: 2048,
                    width: 1528,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAHlBMVEUWGA0LEAIpJQUcHQtZPwjdkQVQNgX2qgRuUAKTZwQjM/9nAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAKklEQVR4nE3EsQ0AIAzAsKS0Bf5/GCEWPBhVBroywJhzi13VQmQOrvfnAAzoAFt3uTwDAAAAAElFTkSuQmCC",
                    blurWidth: 6,
                    blurHeight: 8
                };
            var n = a(82372),
                c = a(22948),
                d = a(12795);
            let o = e => {
                    let {
                        number: t,
                        title: a,
                        align: s,
                        titleClassname: A
                    } = e;
                    return (0, l.jsxs)("div", {
                        "data-align": s,
                        className: (0, n.L)("flex items-end px-[1px] paragraph-sm lg:paragraph-md leading-none pb-[0.6em] border-b border-amber gap-vw-4 feature overflow-hidden", {
                            "justify-between lg:justify-start flex-row-reverse lg:flex-row lg:pr-[2em]": "right" === s,
                            "justify-between lg:justify-end flex-row-reverse lg:pl-[2em]": "left" === s
                        }),
                        children: [(0, l.jsxs)("div", {
                            className: "font-sans flex text-[0.5em] gap-vw-2",
                            children: [(0, l.jsx)("span", {
                                className: "inline-flex items-center justify-center font-bold h-[1.7em] bg-white rounded-full px-[0.9em] text-night",
                                children: (0, l.jsx)("span", {
                                    className: "translate-x-[-0.05em]",
                                    children: "H"
                                })
                            }), (0, l.jsx)("span", {
                                className: "inline-flex items-center justify-center font-medium h-[1.7em] border border-white rounded-full px-[0.9em]",
                                children: (0, l.jsx)("span", {
                                    children: t
                                })
                            })]
                        }), (0, l.jsx)("p", {
                            className: (0, n.L)(A, "text-pretty text-[0.9em] lg:max-w-[17em]"),
                            children: a
                        })]
                    })
                },
                g = () => {
                    (0, A.ui)(() => {
                        A.p8.effects.imageParallax("#features-section .parallax-target", {
                            amount: .1,
                            trigger: "#features-section"
                        });
                        let e = A.p8.timeline({
                            paused: !0,
                            delay: .5,
                            scrollTrigger: {
                                trigger: "#features-section",
                                start: "top bottom",
                                end: "bottom top",
                                toggleActions: "restart none restart none"
                            }
                        });
                        e.set("#features-section .feature-wrapper", {
                            opacity: 1
                        }), e.fromTo("#features-section .feature", {
                            scaleX: 0,
                            transformOrigin: (e, t) => "left" === t.dataset.align ? "left" : "right"
                        }, {
                            scaleX: 1,
                            duration: 1,
                            stagger: .2,
                            ease: "power3.out"
                        }), e.fromTo("#features-section .feature > *", {
                            yPercent: 175
                        }, {
                            delay: 1,
                            yPercent: 0,
                            duration: 1,
                            stagger: .1,
                            ease: "power3.out"
                        }, "<"), (0, d.f)(e, {
                            label: "features"
                        })
                    }, {
                        dependencies: [],
                        revertOnUpdate: !0
                    });
                    let e = {
                            alt: "Daylight tablet over the sheets",
                            sizes: "100vw",
                            quality: 100,
                            draggable: !1,
                            className: "max-lg:absolute !object-top contained-image parallax-target"
                        },
                        {
                            props: {
                                srcSet: t
                            }
                        } = (0, s.getImageProps)({
                            ...e,
                            ...i
                        }),
                        {
                            props: {
                                ...a
                            }
                        } = (0, s.getImageProps)({
                            ...e,
                            ...r
                        });
                    return (0, l.jsxs)("section", {
                        id: "features-section",
                        className: "relative w-full overflow-hidden z-section mt-vw-28 lg:mt-vw-48 lg:aspect-auto",
                        children: [(0, l.jsxs)("picture", {
                            style: {
                                "--desktop-ratio": i.width / i.height
                            },
                            className: "block w-full h-full max-lg:absolute lg:aspect-[var(--desktop-ratio)]",
                            children: [(0, l.jsx)("source", {
                                media: c.vl.query.lg,
                                srcSet: t
                            }), (0, l.jsx)("img", {
                                ...a
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "relative inset-0 h-full max-md:pt-4 max-lg:py-vw-8 lg:absolute text-moonlight max-lg:bg-gradient-to-b from-transparent from-20% via-green-darkest/90 via-70% to-green-darkest",
                            children: [(0, l.jsx)("div", {
                                className: "container lg:absolute inset-0 lg:translate-y-[14%]",
                                children: (0, l.jsx)("h2", {
                                    className: "lg:absolute title-md text-pretty max-w-[7em] max-lg:text-center max-lg:mx-auto",
                                    children: "Warmer evenings for your eyes"
                                })
                            }), (0, l.jsxs)("div", {
                                className: "inset-0 space-y-8 max-lg:mt-80 max-lg:container lg:absolute",
                                children: [(0, l.jsx)("div", {
                                    className: "relative max-lg:mx-auto lg:absolute md:max-w-[50%] lg:max-w-[30%] lg:top-[37%] lg:left-[69%] lg:opacity-0 feature-wrapper lg:text-right",
                                    children: (0, l.jsx)(o, {
                                        number: "1",
                                        title: (0, l.jsx)(l.Fragment, {
                                            children: "Pure amber backlight emits 0% blue light"
                                        }),
                                        align: "left"
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "relative max-lg:mx-auto lg:absolute md:max-w-[50%] lg:max-w-[28%] lg:top-[57%] lg:left-[34%] lg:-translate-x-full lg:opacity-0 feature-wrapper",
                                    children: (0, l.jsx)(o, {
                                        number: "2",
                                        title: "Easy on the eyes in dark environments",
                                        align: "right"
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "relative max-lg:mx-auto lg:absolute md:max-w-[50%] lg:max-w-[30%] lg:top-[75%] lg:left-[64%] lg:opacity-0 feature-wrapper lg:text-right",
                                    children: (0, l.jsx)(o, {
                                        number: "3",
                                        title: "Protects circadian rhythm and helps you get to sleep",
                                        align: "left"
                                    })
                                })]
                            })]
                        })]
                    })
                }
        },
        62707: (e, t, a) => {
            "use strict";
            a.d(t, {
                FoundersCta: () => m,
                a: () => g
            });
            var l = a(69797),
                s = a(41199),
                A = a(15791),
                i = a(82372),
                r = a(43018),
                n = a.n(r),
                c = a(50080);
            let d = {
                src: "/_next/static/media/founders-edition-logo.42816168.png",
                height: 1071,
                width: 990,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAElBMVEUXGQ4VGA8eJwoWGA4WFw4WFg4FsbYMAAAABnRSTlMYQAJSSirNzIMiAAAACXBIWXMAACE4AAAhOAFFljFgAAAALUlEQVR4nBXLwQkAMBDDMMfJ7b9y6VcgVFAkCULaBq7LeqTZPqzrwNt2/nLoAw4bAICVXbXOAAAAAElFTkSuQmCC",
                blurWidth: 7,
                blurHeight: 8
            };
            var o = a(48795);
            let g = (0, a(40577).Ue)(() => ({
                    hide: !1
                })),
                m = () => {
                    let e = (0, A.useRef)(!1),
                        t = g(e => e.hide),
                        [a, r] = (0, A.useState)(!1),
                        [m, h] = (0, A.useState)(!1),
                        [u, p] = (0, A.useState)(!1),
                        x = (0, A.useRef)(null),
                        w = (0, A.useCallback)((t, l) => {
                            if (!x.current) return;
                            x.current.style.setProperty("--p", "".concat(Math.max(1 - t / l, 0)));
                            let s = Math.max(0, l - t) > 0;
                            if (!s && e.current !== s) {
                                e.current = s;
                                return
                            }
                            let A = x.current.clientHeight;
                            A < 750 && !m ? h(!0) : A >= 750 && m && h(!1), A < 500 && !u ? p(!0) : A >= 500 && u && p(!1), A < 300 && !a ? r(!0) : A >= 300 && a && r(!1)
                        }, [a, u, m]);
                    return (0, s.LZ)(e => {
                        w(e.scroll, e.dimensions.height)
                    }, [w]), (0, l.jsxs)("div", {
                        ref: x,
                        className: (0, i.L)("fixed z-modal overflow-hidden hidden transition-opacity duration-500 opacity-100 lg:block lg:right-vw-14 bg-[#E8DED8]/70 w-[15em] top-vw-14 rounded-3xl backdrop-blur-md", "h-[calc((100vh*var(--p,1))-(var(--spacing-vw-14)*2))] min-h-[7.5em] xl:min-h-[7em]", "text-lg xl:text-xl min-[2000px]:text-2xl", t && "opacity-0 pointer-events-none"),
                        children: [(0, l.jsxs)("h2", {
                            className: (0, i.L)("relative font-serif font-light leading-none tracking-so-tight ease-in", a ? "text-[1.8em]" : "text-[3em]"),
                            children: [(0, l.jsxs)("span", {
                                className: (0, i.L)(n()["title-word"], a && n()["title-collapsed"], "absolute will-change-auto", a ? "top-[0.5em] left-[1em] translate-x-0" : "top-[0.95em] left-1/2 -translate-x-1/2"),
                                children: ["Founders", " "]
                            }), (0, l.jsx)("span", {
                                className: (0, i.L)(n()["title-word"], a && n()["title-collapsed"], "absolute will-change-auto", a ? "top-[0.5em] right-[1em] translate-x-0" : "top-[2em] right-1/2 translate-x-1/2"),
                                children: "Edition"
                            })]
                        }), (0, l.jsxs)("div", {
                            className: (0, i.L)("tracking-so-tight absolute top-[8.5em] bottom-[4em] flex flex-col py-[1em] gap-[1em] opacity-100 transition-opacity", u && "opacity-0"),
                            children: [(0, l.jsxs)("p", {
                                className: "text-center px-[1em]",
                                children: [(0, l.jsx)("span", {
                                    className: "font-medium",
                                    children: "For a limited time"
                                }), " ", (0, l.jsx)("br", {}), "get the founder’s edition complete with accessories"]
                            }), (0, l.jsx)("div", {
                                className: (0, i.L)("grow flex items-stretch opacity-100 transition-opacity overflow-hidden w-full justify-center", m && "opacity-0"),
                                children: (0, l.jsx)("div", {
                                    className: "relative h-full aspect-[990/1071]",
                                    children: (0, l.jsx)(o.default, {
                                        src: d,
                                        alt: "Founders Edition badge",
                                        fill: !0,
                                        draggable: !1,
                                        className: "absolute inset-0 object-contain object-center"
                                    })
                                })
                            }), (0, l.jsxs)("p", {
                                className: "text-center px-[1em]",
                                children: ["Tablet, stylus, charging", " ", (0, l.jsx)("span", {
                                    className: "whitespace-nowrap",
                                    children: "cable + extras"
                                })]
                            })]
                        }), (0, l.jsx)("div", {
                            className: "absolute bottom-0 w-full p-[1em]",
                            children: (0, l.jsx)(c.k, {
                                className: "w-full min-w-0 !text-lg lg:!text-lg"
                            })
                        })]
                    })
                }
        },
        39251: (e, t, a) => {
            "use strict";
            a.d(t, {
                Hero: () => g
            });
            var l = a(69797);
            let s = (0, a(14798).Q)(() => Promise.all([a.e(3506), a.e(7604)]).then(a.bind(a, 27604)));
            var A = a(15791),
                i = a(82372),
                r = a(64243);
            let n = {
                    src: "/_next/static/media/hero-video-placeholder-desktop.07c2ed5b.png",
                    height: 1080,
                    width: 1920,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAP1BMVEUyJBiLVjOtq5qRhXYhHBY9LyNnORsZFhIsHhRWLxh7c2Jva2LEwbaRdl2yek52TTM+JxdcSDSmjnVOQzScYDTtu/I6AAAACXBIWXMAAAAAAAAAAAHqZRakAAAALklEQVR4nAXBhQEAIAzAsKLbcPv/VhIg3e1cxqz7M14GLT5Mgyi1haURUUuoyAcbYAEwtuRG8wAAAABJRU5ErkJggg==",
                    blurWidth: 8,
                    blurHeight: 5
                },
                c = {
                    src: "/_next/static/media/hero-video-placeholder-mobile.92fb190b.jpg",
                    height: 1440,
                    width: 1920,
                    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAGAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//aAAwDAQACEAMQAAABiib/AP/EABYQAQEBAAAAAAAAAAAAAAAAAAIDAf/aAAgBAQABBQI1OR//xAAWEQADAAAAAAAAAAAAAAAAAAAAARL/2gAIAQMBAT8Bpn//xAAWEQADAAAAAAAAAAAAAAAAAAAAARL/2gAIAQIBAT8BlH//xAAXEAADAQAAAAAAAAAAAAAAAAAAESIx/9oACAEBAAY/Aspn/8QAGBABAAMBAAAAAAAAAAAAAAAAAQARMVH/2gAIAQEAAT8hVq3LlT//2gAMAwEAAgADAAAAEP8A/8QAFhEAAwAAAAAAAAAAAAAAAAAAABFB/9oACAEDAQE/EE0//8QAFhEAAwAAAAAAAAAAAAAAAAAAABFB/9oACAECAQE/EGQ//8QAGRAAAgMBAAAAAAAAAAAAAAAAAREAITFx/9oACAEBAAE/ECJKQJ0Tuuf/2Q==",
                    blurWidth: 8,
                    blurHeight: 6
                };
            var d = a(48795);
            let o = e => {
                    let {
                        desktop: t,
                        mobile: a,
                        ...s
                    } = e;
                    return !0 === s.priority && console.warn('ResponsiveImage: You shouldn\'t use priority prop on responsive images. This will cause both images to be fetched. This component uses fetchPriority="high" instead.'), (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(d.default, {
                            src: t,
                            ...s,
                            className: (0, i.L)(s.className, "hidden md:block")
                        }), (0, l.jsx)(d.default, {
                            src: a,
                            ...s,
                            className: (0, i.L)(s.className, "block md:hidden")
                        })]
                    })
                },
                g = () => {
                    let [e, t] = (0, A.useState)(!1), a = (0, r.q)(e => e.hasNavigated);
                    return (0, l.jsx)("section", {
                        style: {
                            "--animation-duration": "400ms"
                        },
                        "data-index-title": "",
                        className: (0, i.L)("relative text-white z-section", {
                            "animate-slide-fade-in": a
                        }),
                        children: (0, l.jsx)("div", {
                            className: "hero-container",
                            children: (0, l.jsxs)("div", {
                                className: "relative h-full overflow-hidden rounded-2xl lg:rounded-3xl",
                                children: [(0, l.jsx)(o, {
                                    alt: "daylight tablet with pen on a desk",
                                    fill: !0,
                                    sizes: "100vw",
                                    className: (0, i.L)("absolute inset-0 object-cover md:object-center opacity-100 transition-opacity duration-200", e && "opacity-0"),
                                    draggable: "false",
                                    placeholder: "blur",
                                    quality: 100,
                                    desktop: n,
                                    mobile: c
                                }), (0, l.jsx)("div", {
                                    className: "absolute inset-0",
                                    children: (0, l.jsx)(s, {
                                        onStarted: t
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "h-full hero-inner-tight",
                                    children: (0, l.jsxs)("div", {
                                        className: "relative hero-inner-loose",
                                        children: [(0, l.jsxs)("h1", {
                                            className: "title-md text-drop-shadow leading-none max-w-[10em]",
                                            children: ["Magic. Paper.", (0, l.jsx)("br", {}), "Computer."]
                                        }), (0, l.jsx)("p", {
                                            className: "paragraph-md text-drop-shadow mt-[1.25em] text-scale-[20px]/[32px] max-w-[13em]",
                                            children: "Meet DC-1 , the world’s first 60fps paper-like computer. It’s also blue-light free."
                                        })]
                                    })
                                })]
                            })
                        })
                    })
                }
        },
        69682: (e, t, a) => {
            "use strict";
            a.d(t, {
                Paperlike: () => r
            });
            var l = a(69797),
                s = a(48795),
                A = a(1278),
                i = a(27279);
            let r = () => ((0, A.ui)(() => {
                A.p8.effects.imageParallax("#paperlike-section .parallax-target", {
                    amount: .1,
                    trigger: "#paperlike-section .parallax-trigger"
                })
            }, {
                revertOnUpdate: !0
            }), (0, l.jsxs)("section", {
                id: "paperlike-section",
                className: "container relative z-section mt-vw-28 lg:mt-vw-48",
                children: [(0, l.jsx)("div", {
                    className: "overflow-hidden rounded-2xl parallax-trigger",
                    children: (0, l.jsx)(s.default, {
                        className: "contained-image parallax-target lg:aspect-[1556/769]",
                        src: i.Z,
                        alt: "Person writing on a paper-like tablet surface",
                        quality: 100,
                        draggable: "false"
                    })
                }), (0, l.jsxs)("div", {
                    className: "flex flex-col justify-between paragraph-md gap-[1em] lg:flex-row mt-[2em]",
                    children: [(0, l.jsxs)("h4", {
                        className: "title-md",
                        children: [(0, l.jsx)("span", {
                            className: "italic",
                            children: "Paper-like"
                        }), " finish"]
                    }), (0, l.jsx)("p", {
                        className: "opacity-50 text-night max-w-[25.6em]",
                        children: "Write like on real paper, with a matte finish and textured surface that provide a natural, tactile writing experience— a glare-free note pad for the next chapter of your life."
                    })]
                })]
            }))
        },
        9925: (e, t, a) => {
            "use strict";
            a.d(t, {
                SolOS: () => g
            });
            var l = a(69797),
                s = a(48795),
                A = a(82372);
            let i = {
                    src: "/_next/static/media/sol-os-1.04ac5227.png",
                    height: 713,
                    width: 1138,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAJ1BMVEXSysPUwbbX0crf1c7Nxb7ZzMTEu7K4rqWdlIzGv7jGvre1raW2q6L8X39kAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKklEQVR4nAXBiQHAMAgDsbMx5Ov+81aiqruh6NyTxGgmNiC9DzDS2lP2Dw1FAJEIyUQVAAAAAElFTkSuQmCC",
                    blurWidth: 8,
                    blurHeight: 5
                },
                r = {
                    src: "/_next/static/media/sol-os-2.9639d2ee.png",
                    height: 596,
                    width: 555,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAM1BMVEXCrp2xnYyjnpSrl4WsqJ6oo5u9v7uxraHItKO2tKubk4m4q6DBtq1qZVqLhXmmkHyznozRx7dfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAANUlEQVR4nCXHyQ3AMAwEsbGsSOs7/VcbBH4RhGq214L6tPR9tY7Kf79mouIR0YAx5+hIgvd8KcUBZ2X8lE8AAAAASUVORK5CYII=",
                    blurWidth: 7,
                    blurHeight: 8
                },
                n = {
                    src: "/_next/static/media/sol-os-3.8a3a9546.png",
                    height: 596,
                    width: 555,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAANlBMVEWyqJmgnJGYjn3JuanEs6O8tae2oYzQvq/NvazHwruXel+rj3OjlYXFvLK+rZqRhXK2mH2oknwoVkNIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAN0lEQVR4nBXGSRLAIAgAwWERUEnM/1+b8tRNVVnsj6w3GifL0aOkzQHKvCD4czdIj24R0mKvpT8sQQFRlpfUdgAAAABJRU5ErkJggg==",
                    blurWidth: 7,
                    blurHeight: 8
                },
                c = {
                    src: "/_next/static/media/sol-os-4.0cd5846f.png",
                    height: 596,
                    width: 555,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAVFBMVEV/VzjGtafk4NiinZXj3NO0rqPXwK/KrpvLrpqqh2uppJyVdFyGZUvPtaPGu7HTzcTt6ePQy8LKxb+4pZbZ1MrcxbW8tam7t62tmYq2lHuggGl2UTMWv6KPAAAACnRSTlP+///////+/f39FwwY2QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAD5JREFUeJwFwQcCgCAMBLArHShlu/X//zRB/vLr7gAypzSxPvelo8OszrMFyEGse4AVYpWOxShVCYhl0yHtB1H9AlMkjR6kAAAAAElFTkSuQmCC",
                    blurWidth: 7,
                    blurHeight: 8
                };
            var d = a(78931);
            let o = e => {
                    let {
                        title: t,
                        description: a,
                        image: i,
                        imageClassName: r,
                        icon: n,
                        main: c
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: (0, A.L)("title-sm gap-y-[0.6em] h-full", {
                            "flex flex-col justify-end lg:flex-col-reverse lg:gap-y-[0.66em]": !c,
                            "flex flex-col lg:grid lg:grid-cols-3 lg:gap-x-vw-6": c
                        }),
                        children: [(0, l.jsxs)("div", {
                            className: (0, A.L)({
                                "lg:pt-[1em]": c,
                                "lg:px-[0.45em]": !c
                            }),
                            children: [t && (0, l.jsxs)("div", {
                                className: "mb-[0.6em] lg:mb-[0.67em] flex gap-x-[0.6em] items-start justify-between w-full",
                                children: [(0, l.jsx)("h5", {
                                    className: (0, A.L)("text-balance", {
                                        "max-lg:text-[1.3em] lg:title-md": c
                                    }),
                                    children: t
                                }), n && (0, l.jsx)("div", {
                                    className: "shrink-0 w-[1.5em] h-max aspect-square hidden lg:block",
                                    children: (0, l.jsx)(d.R, {
                                        name: n
                                    })
                                })]
                            }), a && (0, l.jsx)("p", {
                                className: (0, A.L)("opacity-50  lg:max-w-[20em] text-balance paragraph-sm", {
                                    "md:paragraph-md": c
                                }),
                                children: a
                            })]
                        }), (0, l.jsx)("div", {
                            className: (0, A.L)("overflow-hidden rounded-lg", {
                                "col-[2/4]": c
                            }),
                            children: (0, l.jsx)(s.default, {
                                className: (0, A.L)("contained-image parallax-target aspect-[555/596]", r),
                                src: i,
                                alt: "os",
                                quality: 100,
                                draggable: "false"
                            })
                        })]
                    })
                },
                g = () => (0, l.jsx)("div", {
                    id: "sol-os-section",
                    className: "relative grid grid-cols-1 z-section max-lg:container lg:avoid-desktop-header lg:px-vw-6 gap-vw-8 lg:grid-cols-12 lg:gap-y-vw-18 lg:gap-x-vw-6",
                    children: (0, l.jsxs)("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-vw-12 md:gap-vw-10 lg:gap-vw-6 lg:col-[2/13]",
                        children: [(0, l.jsx)("div", {
                            className: "md:col-[1/3] lg:col-[1/4]",
                            children: (0, l.jsx)(o, {
                                title: "Introducing Sol:OS",
                                description: "A distraction-free operating system with everything you need, and nothing you don't.",
                                imageClassName: "aspect-[1135/726]",
                                main: !0,
                                image: i
                            })
                        }), (0, l.jsx)("div", {
                            className: "lg:col-[1]",
                            children: (0, l.jsx)(o, {
                                icon: "simplicity-dark",
                                image: r,
                                title: "Intentional simplicity",
                                imageClassName: "max-md:aspect-[1135/726]",
                                description: "Sol:OS is a custom Android OS carefully crafted to minimize distractions, with a clean, intuitive interface that keeps you in the flow."
                            })
                        }), (0, l.jsx)("div", {
                            className: "lg:col-[2]",
                            children: (0, l.jsx)(o, {
                                icon: "media-dark",
                                image: n,
                                title: "Better reading experience",
                                imageClassName: "max-md:aspect-[1135/726]",
                                description: "We built what we think is the world’s best PDF reader. Flip through pages and write notes in the margins just like a real book."
                            })
                        }), (0, l.jsx)("div", {
                            className: "md:col-[1/3] lg:col-[3]",
                            children: (0, l.jsx)(o, {
                                image: c,
                                imageClassName: "max-lg:aspect-[1135/726]",
                                title: "All your content in one place",
                                icon: "content-dark",
                                description: "Integrates with all your cloud services to deliver a unified reading and annotating experience for your content library."
                            })
                        })]
                    })
                })
        },
        59667: (e, t, a) => {
            "use strict";
            a.d(t, {
                LoadVideo: () => c
            });
            var l = a(69797),
                s = a(48795),
                A = a(15791),
                i = a(14798),
                r = a(82372);
            let n = (0, i.Q)(() => Promise.all([a.e(3506), a.e(332)]).then(a.bind(a, 80332))),
                c = () => {
                    let [e, t] = (0, A.useState)(!1);
                    return (0, l.jsxs)("div", {
                        className: "absolute inset-0",
                        children: [(0, l.jsx)(n, {
                            onStarted: t
                        }), (0, l.jsx)(s.default, {
                            alt: "",
                            src: "https://image.mux.com/NLoatvxCpuPG1cWEpX8Vz2ywOl8nWic99K11jsKlu4I/thumbnail.png?width=1920&height=1080&time=0.5",
                            fill: !0,
                            sizes: "100vw",
                            priority: !0,
                            className: (0, r.L)("absolute inset-0 object-cover object-[40%] md:object-center opacity-100 transition-opacity duration-200", e && "opacity-0"),
                            draggable: "false",
                            quality: 100
                        })]
                    })
                }
        },
        47076: (e, t, a) => {
            "use strict";
            a.d(t, {
                Marquee: () => m
            });
            var l = a(69797),
                s = a(41199),
                A = a(15791),
                i = a(1278),
                r = a(8840),
                n = a(22948),
                c = a(82372),
                d = a(33307),
                o = a.n(d);
            let g = function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                    (0, A.useEffect)(() => (i.p8.ticker.add(e), () => i.p8.ticker.remove(e)), [e, ...t])
                },
                m = e => {
                    let {
                        children: t,
                        speed: a = 1,
                        inverted: d = !1,
                        className: m
                    } = e, [h, u] = (0, A.useState)(null), p = (0, A.useRef)(0), x = (0, A.useRef)(1), w = (0, s.LZ)(n.lt), b = (0, A.useMemo)(() => i.p8.quickSetter(h, "x", "%"), [h]);
                    return g((e, t) => {
                        if (!w) return;
                        let l = Math.sign(w.velocity);
                        l !== x.current && 0 !== l && (x.current = l), p.current += ((0, r.XL)(t) * a + .005 * Math.abs(w.velocity)) * x.current * (d ? -1 : 1), b(-50 + (0, r.wQ)(p.current, 50))
                    }, [b, w, a]), (0, l.jsx)("div", {
                        className: (0, c.L)(o()["marquee-wrapper"], m),
                        children: (0, l.jsxs)("div", {
                            className: o().marquee,
                            ref: u,
                            children: [t, t]
                        })
                    })
                }
        },
        42257: (e, t, a) => {
            "use strict";
            a.d(t, {
                fV: () => l,
                rF: () => s
            });
            let l = (e, t) => {
                    e.disable(e.SCISSOR_TEST), t(), e.enable(e.SCISSOR_TEST)
                },
                s = (e, t, a, l, s) => {
                    let A = a / l,
                        i = e / t,
                        r = e,
                        n = t,
                        c = 0,
                        d = 0;
                    return "cover" === s && (A < i ? d = (t - (n = e / A)) / 2 : c = (e - (r = t * A)) / 2), "contain" === s && (A < i ? c = (e - (r = t * A)) / 2 : d = (t - (n = e / A)) / 2), {
                        drawWidth: r,
                        drawHeight: n,
                        drawX: c,
                        drawY: d
                    }
                }
        },
        33307: e => {
            e.exports = {
                "marquee-wrapper": "marquee_marquee-wrapper__icj52",
                marquee: "marquee_marquee__UwD2j"
            }
        },
        43018: e => {
            e.exports = {
                "title-word": "founders_title-word__ytHbL",
                "title-collapsed": "founders_title-collapsed__Hs74l"
            }
        },
        78883: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => l
            });
            let l = {
                src: "/_next/static/media/OG-product.3a410372.png",
                height: 642,
                width: 1200,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAMFBMVEUoGRIOAwE3HRNcPigZCwcwIhtAKyamgGSPb1RlVU4gDQVHLxt0WktrTjZfRjrRpGlIfxrJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKElEQVR4nAXBhwEAIAjAsLIEnP9/awJDrXSC2jrPRBAqMzxwYd/u8QEK+ACtomPwLQAAAABJRU5ErkJggg==",
                blurWidth: 8,
                blurHeight: 4
            }
        },
        4590: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => l
            });
            let l = {
                src: "/_next/static/media/fps-dark.726251c9.png",
                height: 78,
                width: 78,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAS1BMVEUZHBIWFg0XGRAAAAAQEgpQUkkEBQETFgwZGw8PEggTFQtFRz6YmZSLjIZjZFx2d3GBgnsXGA+wsKsSEgsQFQk0NiwiJBkUFgs9PjVPEbgNAAAAFXRSTlNWLEQDqP5oZE6yz/75+vr++4X8b22kvxYgAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAQklEQVR4nBXGSRKAIBAEsAZmYwcV8P8vtcwpcPBmsABMIqLkYfFkrvsB4lt6yQLEdfWx9U8d7Sg0rca8FcFuEVX3AVGRAns13fP9AAAAAElFTkSuQmCC",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        80778: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => l
            });
            let l = {
                src: "/_next/static/media/ghost.e5650ef1.png",
                height: 78,
                width: 86,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAIVBMVEVMaXEWGA4VFw8VGQ8bGwkWGA4WGA4WGA4YGA0UGA0XGQ45xnN4AAAAC3RSTlMAm0MxDmUhgkg9Vbq8Fc0AAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAySURBVHicHYrJDQAwCMMcjgLdf+CK5mNLDsA5/FmVL0MxWvEy08bO29nAVaZsPzPuwQMSGwCsq+A6aQAAAABJRU5ErkJggg==",
                blurWidth: 8,
                blurHeight: 7
            }
        },
        89142: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => l
            });
            let l = {
                src: "/_next/static/media/inches.bbb43166.png",
                height: 78,
                width: 86,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAGFBMVEVMaXEVGA4UGAsWGA4XGA4WGA4XGA8YGAluvd0LAAAACHRSTlMAJwxWQItqGIdmGIQAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAtSURBVHicHYpBDgAwCMIKOv3/jxfsqSUAeNcEzas01ElbrYm8wkv26btaEvABDksAbVzXQSMAAAAASUVORK5CYII=",
                blurWidth: 8,
                blurHeight: 7
            }
        },
        49461: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => l
            });
            let l = {
                src: "/_next/static/media/split-comparison-1.4f9e14b7.png",
                height: 896,
                width: 764,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAHlBMVEU5NzE1MixQSBwpJiQlIhM9OBdnXyozMhBbUB9EQhg/YXH0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nB3Ixw0AMBDDMNnX9184QPgkW3s3g+2cTOzJiOCcQrBdIUF3CcBdgfQf8QAeEQDL8WXyWgAAAABJRU5ErkJggg==",
                blurWidth: 7,
                blurHeight: 8
            }
        },
        85278: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => l
            });
            let l = {
                src: "/_next/static/media/split-comparison-2.dd0a3a74.png",
                height: 896,
                width: 764,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAQlBMVEWFcV1DRRGpkn+um4I6PQ5bWCRUUCeSfWlWWhiJeGVNRxxPURRrZil3YU9rYzBgYxR0ZViDeC6KhVEtLgkjJgSWjXA1H2XuAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAOUlEQVR4nAXBBwLAIAgAsUNBwFE7///VJsjzqk6jfnmPaNRSmNeAtc7WhXQvFkY62WID1EMDcO8qPzmpAZO5EpqBAAAAAElFTkSuQmCC",
                blurWidth: 7,
                blurHeight: 8
            }
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [4729, 9993, 6364, 7106, 9798, 810, 2972, 6146, 1199, 5833, 8754, 4941, 5691, 7874, 6713, 3028, 1744], () => t(67277)), _N_E = e.O()
    }
]);