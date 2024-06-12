"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8471], {
        48471: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => x
            });
            var n = r(69797),
                a = r(15791),
                i = r(42983),
                o = r(26558),
                u = r(94071),
                l = r(22550),
                c = r(88957),
                s = r(41199),
                h = r(71993),
                p = r(18167);
            let d = new p.A,
                f = (e, t, r) => (0, a.useMemo)(() => (function (e, t, r) {
                    let {
                        width: n,
                        height: a
                    } = r, i = n / a;
                    t instanceof p.A ? d.copy(t) : d.set(...t), e.updateMatrixWorld();
                    let o = e.worldPosition.distance(d);
                    if ("orthographic" === e.type) return {
                        width: n / e.zoom,
                        height: a / e.zoom,
                        factor: 1,
                        distance: o,
                        aspect: i
                    }; {
                        let t = 2 * Math.tan(e.fov * Math.PI / 180 / 2) * o,
                            r = n / a * t;
                        return {
                            width: r,
                            height: t,
                            factor: n / r,
                            distance: o,
                            aspect: i
                        }
                    }
                })(e, t, r), [e, r]);
            var g = r(8840);
            class v {
                constructor(e) {
                    var t = this;
                    this.getDistanceToFitBox = function (e, r, n) {
                        let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                        if ("orthographic" === t.camera.type) throw Error("getDistanceToFitBox is not implemented for orthographic cameras");
                        let i = e / r,
                            o = (0, g.Id)(t.camera.fov),
                            u = t.camera.aspect;
                        return .5 * ((a ? i > u : i < u) ? r : e / u) / Math.tan(.5 * o) + .5 * n
                    }, this.camera = e
                }
            }
            let m = e => (0, a.useMemo)(() => new v(e), [e]);
            h.Vw.aspect = h.C2.width / h.C2.height;
            let x = e => {
                let {
                    render: t,
                    setRootScene: r,
                    setTabletScene: p,
                    setTabletPlaneSize: d,
                    uniformsRef: g
                } = e, v = (0, i.Cp)(e => e.renderer), x = (0, a.useRef)(null), w = (0, i.Cp)(e => e.size), M = f(h.Vw, [0, 0, 0], w), U = m(h.Vw), V = (0, i.U2)(u.d, "/textures/product-reveal-color.webp"), b = (0, i.U2)(u.d, "/textures/product-reveal-depth.jpg"), T = (0, i.U2)(u.d, "/textures/product-reveal-color-portrait.webp"), j = (0, i.U2)(u.d, "/textures/product-reveal-depth-portrait.jpg"), [C, E] = (0, a.useState)(1), [F, D] = (0, a.useState)(V), [A, y] = (0, a.useState)(b), S = (0, a.useMemo)(() => new l.w, []), _ = w.width / w.height, z = _ > 1, B = (0, a.useRef)({
                    uColorTexture: {
                        value: F
                    },
                    uDepthTexture: {
                        value: A
                    },
                    uOffset: {
                        value: [0, 0]
                    },
                    uAlpha: {
                        value: 0
                    },
                    uBackgroundAlpha: {
                        value: 0
                    },
                    aspect: {
                        value: 1
                    },
                    screenAspect: {
                        value: _
                    },
                    textureAspect: {
                        value: [1, 1]
                    },
                    uEdgeSize: {
                        value: .3
                    }
                });
                g(B.current), (0, a.useEffect)(() => {
                    h.Vw.aspect = _, h.Vw.perspective();
                    let e = z ? V : T,
                        t = z ? b : j;
                    B.current.uEdgeSize.value = z ? .3 : .15;
                    let r = e.width / e.height;
                    F === e || (D(e), B.current.uColorTexture.value = e, B.current.uDepthTexture.value = t, y(t), isNaN(r) || E(r))
                }, [F, _, z]), (0, s.LZ)(() => {
                    let e = F.width / F.height;
                    !isNaN(e) && Math.abs(C - e) > .1 && E(e)
                }, [F, C]), (0, a.useEffect)(() => {
                    let e, t;
                    B.current.aspect.value = C, B.current.screenAspect.value = _, e = C < _ ? _ / C : 1, t = C > _ ? C / _ : 1, B.current.textureAspect.value = [e, t]
                }, [C, _]), (0, i.xQ)(() => {
                    t && (v.bindFramebuffer(), v.setViewport(v.width * v.dpr, v.height * v.dpr), v.gl.clearDepth(1), v.gl.clear(v.gl.DEPTH_BUFFER_BIT), v.render({
                        scene: S,
                        clear: !1,
                        camera: h.Vw,
                        sort: !0
                    }))
                });
                let k = M.width,
                    R = M.height;
                (0, a.useEffect)(() => {
                    d([k, R, M.factor])
                }, [k, R, M.factor]);
                let I = {
                        x: 1 / (C < _ ? _ / C : 1),
                        y: 1 / (C > _ ? C / _ : 1)
                    },
                    N = z ? {
                        width: .5 * k * I.x,
                        height: .67 * R * I.y
                    } : {
                        width: .65 * k * I.x,
                        height: .5 * R * I.y
                    },
                    P = U.getDistanceToFitBox(N.width, N.height, 0, !0);
                return (0, o.jz)((0, n.jsxs)("transform", {
                    children: [(0, n.jsx)("primitive", {
                        dispose: null,
                        object: h.Vw,
                        position: [0, 0, h.Lq]
                    }), (0, n.jsx)("transform", {
                        ref: e => {
                            e && r(e)
                        },
                        children: (0, n.jsxs)("transform", {
                            position: [0, 0, h.Lq - P],
                            ref: e => {
                                e && p(e)
                            },
                            children: [(0, n.jsxs)("mesh", {
                                position: [0, 0, 0],
                                ref: x,
                                children: [(0, n.jsx)("program", {
                                    uniforms: B.current,
                                    vertex: "\n                attribute vec3 position;\n                attribute vec2 uv;\n\n                uniform mat4 modelViewMatrix;\n                uniform mat4 projectionMatrix;\n\n                varying vec2 vUv;\n\n                void main() {\n                  vUv = uv;\n                  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n                }\n              ",
                                    fragment: "\n                precision highp float;\n\n                uniform sampler2D uColorTexture;\n                uniform sampler2D uDepthTexture;\n                uniform vec2 uOffset;\n                uniform vec2 textureAspect;\n                uniform float uAlpha;\n                // Used to fade out image\n                uniform float uEdgeSize;\n\n                varying vec2 vUv;\n\n\n                ".concat(c.D, "\n\n                vec2 getFitUv() {\n                  vec2 centeredUv = vUv - 0.5;\n                  centeredUv *= textureAspect;\n                  return centeredUv + 0.5;\n                }\n\n                vec3 rgb(float r, float g, float b) {\n                  return vec3(r/255.0, g/255.0, b/255.0);\n                }\n\n                float easeInExpo(float t) {\n                  return t == 0.0 ? 0.0 : pow(2.0, 10.0 * (t - 1.0));\n                }\n\n                void main() {\n\n                  vec2 fitUV = getFitUv();\n\n                  vec4 depth = texture2D(uDepthTexture, fitUV);\n\n                  float d = easeInExpo(clamp(1.0 - depth.r, 0.2, 1.0));\n                  vec4 sample = texture2D(uColorTexture, fitUV + uOffset * d * 0.02);\n                  vec3 color = sample.rgb;\n                  \n                  float edgeFactor = smoothstep(0.0, uEdgeSize, fitUV.y);\n                  vec2 centeredUv = abs((fitUV - 0.5) * 2.);\n                  edgeFactor = max(centeredUv.x, centeredUv.y);\n                  edgeFactor = smoothstep(1., 1. - uEdgeSize, edgeFactor);\n                  color *= edgeFactor;\n\n                  gl_FragColor.rgb = color;\n                  gl_FragColor.a = uAlpha * edgeFactor * sample.a;\n                }\n              "),
                                    depthTest: !1,
                                    transparent: !0
                                }), (0, n.jsx)("plane", {
                                    args: [{
                                        width: k,
                                        height: R
                                    }]
                                })]
                            }), !1, (0, n.jsxs)("mesh", {
                                frustumCulled: !1,
                                renderOrder: -1,
                                children: [(0, n.jsx)("program", {
                                    vertex: "\n                attribute vec3 position;\n                uniform mat4 modelViewMatrix;\n                uniform mat4 projectionMatrix;\n\n                void main() {  \n                 gl_Position = vec4(position.xy, 0.0, 1.0);\n                }\n              ",
                                    fragment: "\n              precision highp float;\n\n              uniform float uBackgroundAlpha;\n\n              void main() {\n                gl_FragColor = vec4(0.0, 0.0, 0.0, uBackgroundAlpha);\n              }\n              ",
                                    depthWrite: !1,
                                    depthTest: !1,
                                    uniforms: B.current,
                                    transparent: !0
                                }), (0, n.jsx)("plane", {
                                    args: [{
                                        width: 2,
                                        height: 2
                                    }]
                                })]
                            })]
                        })
                    })]
                }), S, {
                    camera: h.Vw
                })
            }
        },
        71993: (e, t, r) => {
            r.d(t, {
                C2: () => i,
                Lq: () => h,
                Vw: () => s,
                em: () => u,
                r8: () => c,
                ui: () => o,
                xR: () => l
            });
            var n = r(88384),
                a = r(84391);
            let i = document.createElement("canvas");
            i.width = 0, i.height = 0;
            let o = new n.T({
                    antialias: !1,
                    powerPreference: "high-performance",
                    canvas: i,
                    width: i.width,
                    height: i.height
                }),
                u = {
                    x: 0,
                    y: 0,
                    get width() {
                        return i.width * o.dpr
                    },
                    get height() {
                        return i.height * o.dpr
                    }
                };
            o.gl.scissor(u.x, u.y, u.width, u.height), o.gl.enable(o.gl.SCISSOR_TEST);
            let l = o.gl;
            l.clearColor(250 / 255, 245 / 255, 242 / 255, 1);
            let c = new a.V(l, {
                    fov: 75,
                    aspect: i.width / i.height,
                    far: 1e3
                }),
                s = new a.V(l, {
                    fov: 75,
                    aspect: i.width / i.height,
                    far: 2e3
                }),
                h = 700;
            s.position.set(0, 0, h)
        },
        88957: (e, t, r) => {
            r.d(t, {
                D: () => n
            });
            let n = "\nfloat valueRemap(float value, float inMin, float inMax, float outMin, float outMax) {\n  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;\n}\n"
        }
    }
]);