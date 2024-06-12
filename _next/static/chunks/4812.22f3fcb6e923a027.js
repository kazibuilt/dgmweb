"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4812], {
        64812: (e, t, i) => {
            i.r(t), i.d(t, {
                default: () => S
            });
            var s = i(69797),
                l = i(71993),
                h = i(15791),
                n = i(22550),
                a = i(44562),
                r = i(56957);
            class o extends n.w {
                constructor(e = document.createElement("div")) {
                    super(), this.isCSS3DObject = !0, this.element = e, this.element.style.position = "absolute", this.element.style.pointerEvents = "auto", this.element.style.userSelect = "none", this.element.setAttribute("draggable", "false")
                }
            }
            let p = new r.y;
            class c {
                constructor(e) {
                    this._width = 0, this._height = 0, this._widthHalf = 0, this._heightHalf = 0, this.dispose = () => {
                        this.cameraElement.remove()
                    }, this.setSize = (e, t) => {
                        this._width = e, this._height = t, this._widthHalf = this._width / 2, this._heightHalf = this._height / 2, this.domElement.style.width = e + "px", this.domElement.style.height = t + "px", this.cameraElement.style.width = e + "px", this.cameraElement.style.height = t + "px"
                    }, this.getSize = () => ({
                        width: this._width,
                        height: this._height
                    }), this.render = (e, t) => {
                        let i = t.projectionMatrix[5] * this._heightHalf;
                        !0 === e.matrixAutoUpdate && e.updateMatrixWorld(), null === t.parent && !0 === t.matrixAutoUpdate && t.updateMatrixWorld();
                        let s = 0,
                            l = 0;
                        "orthographic" === t.type && (s = -(t.right + t.left) / 2, l = (t.top + t.bottom) / 2);
                        let h = p.copy(t.worldMatrix).inverse(),
                            n = "orthographic" === t.type ? "scale( ".concat(1, " )") + "scale(" + i + ")translate3d(" + this.epsilon(s) + "px," + this.epsilon(l) + "px, 0)" + this.getCameraCSSMatrix(h) : "scale( ".concat(1, " )") + "translateZ(" + i + "px)" + this.getCameraCSSMatrix(h),
                            a = ("perspective" === t.type ? "perspective(" + i + "px) " : "") + n + "translate3d(" + this._widthHalf + "px," + this._heightHalf + "px, 0)";
                        this.cache.camera.style !== a && (this.cameraElement.style.transform = a, this.cache.camera.style = a), this.renderObject(e, e, t, n)
                    }, this.epsilon = e => 1e-10 > Math.abs(e) ? 0 : e, this.getCameraCSSMatrix = e => "matrix3d(" + this.epsilon(e[0]) + "," + this.epsilon(-e[1]) + "," + this.epsilon(e[2]) + "," + this.epsilon(e[3]) + "," + this.epsilon(e[4]) + "," + this.epsilon(-e[5]) + "," + this.epsilon(e[6]) + "," + this.epsilon(e[7]) + "," + this.epsilon(e[8]) + "," + this.epsilon(-e[9]) + "," + this.epsilon(e[10]) + "," + this.epsilon(e[11]) + "," + this.epsilon(e[12]) + "," + this.epsilon(-e[13]) + "," + this.epsilon(e[14]) + "," + this.epsilon(e[15]) + ")", this.getObjectCSSMatrix = e => "translate(-50%,-50%)" + ("matrix3d(" + this.epsilon(e[0]) + "," + this.epsilon(e[1]) + "," + this.epsilon(e[2]) + "," + this.epsilon(e[3]) + "," + this.epsilon(-e[4]) + "," + this.epsilon(-e[5]) + "," + this.epsilon(-e[6]) + "," + this.epsilon(-e[7]) + "," + this.epsilon(e[8]) + "," + this.epsilon(e[9]) + "," + this.epsilon(e[10]) + "," + this.epsilon(e[11]) + "," + this.epsilon(e[12]) + "," + this.epsilon(e[13]) + "," + this.epsilon(e[14]) + ",") + this.epsilon(e[15]) + ")", this.renderObject = (e, t, i, s) => {
                        if ("isCSS3DObject" in e) {
                            let t = !0 === e.visible;
                            if (e.element.style.display = !0 === t ? "" : "none", !0 === t) {
                                let t;
                                t = "isCSS3DSprite" in e ? this.getObjectCSSMatrix(p) : this.getObjectCSSMatrix(e.worldMatrix);
                                let i = e.element,
                                    s = this.cache.objects.get(e);
                                (void 0 === s || s.style !== t) && (i.style.transform = t, this.cache.objects.set(e, {
                                    style: t
                                })), i.parentNode !== this.cameraElement && this.cameraElement.appendChild(i)
                            }
                        }
                        e.children.forEach(e => {
                            this.renderObject(e, t, i, s)
                        })
                    }, this.cache = {
                        camera: {
                            style: ""
                        },
                        objects: new WeakMap
                    };
                    let t = e.element;
                    t.style.overflow = "hidden", this.domElement = t, this.cameraElement = document.createElement("div"), this.cameraElement.style.transformStyle = "preserve-3d", this.domElement.appendChild(this.cameraElement)
                }
            }
            var d = i(1278),
                m = i(98625);
            let g = function (e, t) {
                let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    s = (0, h.useMemo)(() => null != t ? t : new n.w, [t]),
                    l = (0, h.useMemo)(() => new WeakMap, []),
                    [r, p, g] = (0, a.r)(null),
                    [u] = (0, m.Z)({
                        scroll: !1,
                        onChange(e) {
                            var t;
                            null === (t = g.current) || void 0 === t || t.setSize(e.width, e.height)
                        }
                    }),
                    x = (0, h.useCallback)(e => {
                        if (!e) return;
                        let t = new c({
                                element: e
                            }),
                            i = e.parentElement;
                        if (i) {
                            let {
                                width: e,
                                height: s
                            } = i.getBoundingClientRect();
                            t.setSize(e, s)
                        }
                        p(t)
                    }, []);
                return (0, h.useEffect)(() => {
                    if (!i) return;
                    let t = () => {
                        null == r || r.render(s, e)
                    };
                    return d.p8.ticker.add(t), () => {
                        d.p8.ticker.remove(t)
                    }
                }, [r, s, e, i]), (0, h.useEffect)(() => () => null == r ? void 0 : r.dispose(), []), [u, x, {
                    add: (0, h.useCallback)(t => {
                        if (!t || l.has(t)) return;
                        let i = new o(t);
                        return s.addChild(i), l.set(t, i), null == r || r.render(s, e), i
                    }, [s, e, r]),
                    scene: s,
                    setSize: (0, h.useCallback)((e, t) => {
                        var i;
                        null === (i = g.current) || void 0 === i || i.setSize(e, t)
                    }, []),
                    renderer: r
                }]
            };
            var u = i(9673),
                x = i(9897),
                w = i(82372);
            let f = (0, u.PF)("When the lights go off,"),
                v = (0, u.PF)(" enjoy the amber glow."),
                S = e => {
                    let {
                        scene: t,
                        render: i,
                        tabletTextRef: h
                    } = e, n = (0, x.Z)(), [a, r, {
                        add: o,
                        renderer: p
                    }] = g(l.Vw, t, i), c = n.width / n.height > 1;
                    return (0, s.jsx)("div", {
                        style: {
                            height: "100lvh",
                            width: "100vw",
                            visibility: i ? "visible" : "hidden"
                        },
                        className: "fixed top-0 left-0 pointer-events-none",
                        ref: a,
                        children: (0, s.jsx)("div", {
                            id: "viewport",
                            className: "w-full h-full",
                            ref: r,
                            children: p && (0, s.jsx)(s.Fragment, {
                                children: (0, s.jsxs)("h2", {
                                    id: "tablet-text-title",
                                    className: (0, w.L)("relative text-center title text-white lights-title !pointer-events-none", {
                                        "text-[56px]": c,
                                        "text-[36px] md:text-[44px]": !c
                                    }),
                                    ref: e => {
                                        let t = o(e);
                                        t && (null == h || h(t))
                                    },
                                    children: [(0, s.jsx)("div", {
                                        className: "[perspective:900px] title-a",
                                        children: f.chars.map((e, t) => (0, s.jsx)("span", {
                                            className: "inline-block whitespace-pre",
                                            children: e
                                        }, t))
                                    }), (0, s.jsx)("div", {
                                        className: "[perspective:900px] title-b",
                                        children: v.chars.map((e, t) => (0, s.jsx)("span", {
                                            className: "inline-block whitespace-pre",
                                            children: e
                                        }, t))
                                    })]
                                })
                            })
                        })
                    })
                }
        },
        71993: (e, t, i) => {
            i.d(t, {
                C2: () => h,
                Lq: () => c,
                Vw: () => p,
                em: () => a,
                r8: () => o,
                ui: () => n,
                xR: () => r
            });
            var s = i(88384),
                l = i(84391);
            let h = document.createElement("canvas");
            h.width = 0, h.height = 0;
            let n = new s.T({
                    antialias: !1,
                    powerPreference: "high-performance",
                    canvas: h,
                    width: h.width,
                    height: h.height
                }),
                a = {
                    x: 0,
                    y: 0,
                    get width() {
                        return h.width * n.dpr
                    },
                    get height() {
                        return h.height * n.dpr
                    }
                };
            n.gl.scissor(a.x, a.y, a.width, a.height), n.gl.enable(n.gl.SCISSOR_TEST);
            let r = n.gl;
            r.clearColor(250 / 255, 245 / 255, 242 / 255, 1);
            let o = new l.V(r, {
                    fov: 75,
                    aspect: h.width / h.height,
                    far: 1e3
                }),
                p = new l.V(r, {
                    fov: 75,
                    aspect: h.width / h.height,
                    far: 2e3
                }),
                c = 700;
            p.position.set(0, 0, c)
        }
    }
]);