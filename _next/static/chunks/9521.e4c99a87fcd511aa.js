"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9521], {
        9521: (e, t, a) => {
            a.d(t, {
                g: () => j
            });
            var r = a(69797),
                n = a(2643),
                i = a(31547),
                o = a(94071),
                s = a(5870),
                h = a(77726),
                l = a(930),
                m = a(15791),
                p = a(42983),
                d = a(71993);
            let c = "\n attribute vec3 position;\n  attribute vec2 uv;\n\n  uniform mat4 modelViewMatrix;\n  uniform mat4 projectionMatrix;\n\n  varying vec2 vUv;\n\n  void main() {\n      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n      vUv = uv;\n  }\n",
                g = "\n  precision highp float;\n\n  uniform sampler2D tAlphaMap;\n\n  varying vec2 vUv;\n\n  vec4 packRGBA (float v) {\n      vec4 pack = fract(vec4(1.0, 255.0, 65025.0, 16581375.0) * v);\n      pack -= pack.yzww * vec2(1.0 / 255.0, 0.0).xxxy;\n      return pack;\n  }\n\n  void main() {\n    float alpha = texture2D(tAlphaMap, vUv).g;\n    if (alpha < 0.01) discard;\n    gl_FragColor = packRGBA(gl_FragCoord.z);\n  }\n";
            new h.$(d.xR, {
                vertex: c,
                fragment: g,
                uniforms: {
                    tAlphaMap: {
                        value: null
                    }
                }
            }), new h.$(d.xR, {
                vertex: c,
                fragment: "\n    precision highp float;\n\n    varying vec2 vUv;\n\n    uniform sampler2D tAlphaMap;\n\n    void main() {\n      vec4 sample = texture2D(tAlphaMap, vUv);\n      float alpha = sample.g;\n      if (alpha < 0.01) discard;\n      gl_FragColor.rgb = sample.rgb;\n      gl_FragColor.a = 1.0;\n    }\n  ",
                uniforms: {
                    tAlphaMap: {
                        value: null
                    }
                }
            });
            var u = a(31202);
            let v = "\n  attribute vec2 uv;\n  attribute vec3 position;\n\n  // Add instanced attributes just like any attribute\n  attribute vec3 leafOffset;\n  attribute vec3 random;\n\n  uniform mat4 modelViewMatrix;\n  uniform mat4 projectionMatrix;\n  uniform float uTime;\n\n  varying vec2 vUv;\n  varying vec3 vNormal;\n\n  void rotate2d(inout vec2 v, float a){\n    mat2 m = mat2(cos(a), -sin(a), sin(a),  cos(a));\n    v = m * v;\n  }\n\n  void main() {\n    vUv = uv;\n\n    // copy position so that we can modify the instances\n    vec3 pos = position;\n    vec3 off = leafOffset;\n\n    // scale first\n    pos *= 0.9 + (random.y - 0.5) * 0.2;\n\n    // rotate around y axis\n    rotate2d(pos.xz, random.x * 6.28 + 4.0 * uTime * (random.y - 0.5) * 0.1);\n\n    // rotate around z axis\n    rotate2d(pos.xy, random.x * 6.28 + 4.0 * uTime * (random.y - 0.5) * 0.1);\n\n    // rotate around x axis just to add some extra variation\n    rotate2d(pos.zy, random.z * 0.5 * sin(uTime * random.x + random.z * 3.14));\n\n    float yRange = 30.;\n    off.y = mod(off.y - uTime, yRange) - yRange * 0.5;\n\n    pos += off;\n\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n  }\n",
                f = new Float32Array(15),
                w = new Float32Array(15);
            for (let e = 0; e < 5; e++) f.set([(Math.random() - .5) * 8, (Math.random() - .5) * 15, (Math.random() - .5) * 3], 3 * e), w.set([Math.random(), Math.random(), Math.random()], 3 * e);
            let x = e => {
                    let t = (0, p.Cp)(e => {
                            let {
                                gl: t
                            } = e;
                            return t
                        }),
                        a = (0, p.U2)(o.d, "/textures/leaf.jpg"),
                        {
                            mesh: n,
                            colorProgram: i
                        } = (0, m.useMemo)(() => {
                            let e = new s.J(t, {
                                    width: 1,
                                    height: 1,
                                    attributes: {
                                        leafOffset: {
                                            instanced: !0,
                                            size: 3,
                                            data: f
                                        },
                                        random: {
                                            instanced: !0,
                                            size: 3,
                                            data: w
                                        }
                                    }
                                }),
                                r = new h.$(t, {
                                    vertex: v,
                                    fragment: "\n        precision highp float;\n\n        varying vec2 vUv;\n\n        uniform sampler2D tAlphaMap;\n\n        void main() {\n          float alpha = texture2D(tAlphaMap, vUv).g;\n          if (alpha < 0.01) discard;\n          gl_FragColor.rgb = vec3(1.0, 0.0, 0.0);\n          gl_FragColor.a = 1.0;\n        }\n      ",
                                    uniforms: {
                                        uTime: {
                                            value: 0
                                        },
                                        tAlphaMap: {
                                            value: a
                                        }
                                    },
                                    cullFace: !1
                                }),
                                n = new h.$(t, {
                                    vertex: v,
                                    fragment: g,
                                    uniforms: {
                                        uTime: r.uniforms.uTime,
                                        tAlphaMap: {
                                            value: a
                                        }
                                    },
                                    cullFace: !1
                                }),
                                i = new l.K(t, {
                                    geometry: e,
                                    program: r
                                });
                            return i.depthProgram = n, {
                                leafOffset: f,
                                mesh: i,
                                depthProgram: n,
                                colorProgram: r
                            }
                        }, [t, 5]);
                    (0, p.xQ)((e, t) => {
                        i.uniforms.uTime.value = .001 * t
                    });
                    let d = (0, u.G)(e => e.shadowRenderer);
                    return (0, m.useEffect)(() => (d.add({
                        mesh: n,
                        cast: !0
                    }), () => {
                        d.remove(n)
                    }), []), (0, r.jsx)("transform", {
                        ...e,
                        children: (0, r.jsx)("primitive", {
                            dispose: null,
                            object: n
                        })
                    })
                },
                M = (0, m.forwardRef)((e, t) => {
                    let {
                        src: a,
                        width: n,
                        height: i,
                        ...s
                    } = e, h = (0, p.U2)(o.d, a), [l, d] = (0, m.useState)([h.width, h.height]);
                    (0, p.xQ)(() => {
                        (l[0] !== h.width || l[1] !== h.height) && d([h.width, h.height])
                    });
                    let u = (0, m.useMemo)(() => {
                        let e = "number" == typeof n,
                            t = "number" == typeof i;
                        if (e && t) return {
                            width: n,
                            height: i
                        };
                        let a = l[0] / l[1];
                        return e ? {
                            width: n,
                            height: n / a
                        } : t ? {
                            width: i * a,
                            height: i
                        } : {
                            width: l[0],
                            height: l[1]
                        }
                    }, [n, i, h, l]);
                    return (0, r.jsxs)("mesh", {
                        ref: t,
                        ...s,
                        children: [(0, r.jsx)("plane", {
                            args: [u]
                        }), (0, r.jsx)("program", {
                            attach: "program",
                            vertex: c,
                            fragment: "\nprecision highp float;\n\nvarying vec2 vUv;\n\nuniform sampler2D tAlphaMap;\n\nvoid main() {\n  vec4 sample = texture2D(tAlphaMap, vUv);\n  float alpha = sample.g;\n  if (alpha < 0.9) discard;\n  gl_FragColor.rgb = vec3(1.,0.,0.);\n  gl_FragColor.a = 1.0;\n}\n",
                            uniforms: {
                                tAlphaMap: {
                                    value: h
                                }
                            }
                        }), (0, r.jsx)("program", {
                            attach: "depthProgram",
                            vertex: c,
                            fragment: g,
                            uniforms: {
                                tAlphaMap: {
                                    value: h
                                }
                            }
                        })]
                    })
                }),
                y = e => {
                    let t = (0, m.useMemo)(() => Math.random(), []),
                        a = (0, m.useRef)(null);
                    return (0, p.xQ)((e, r) => {
                        let {} = e;
                        a.current && (a.current.rotation.z = .1 * Math.sin((r + 31415 * t) * 2e-4))
                    }), (0, r.jsx)("transform", {
                        ref: a,
                        ...e,
                        children: (0, r.jsx)(M, {
                            position: [-3.5, 0, 0],
                            width: 7,
                            src: "/textures/tree-3.jpg"
                        })
                    })
                },
                j = () => {
                    let e = (0, n.f)(e => e.aspect);
                    return (0, r.jsxs)("transform", {
                        position: [4.9 * e, 5, 0],
                        rotation: [0, .5, 0],
                        children: [(0, r.jsx)(y, {
                            rotation: [-.2, 0, 0],
                            position: [2, 1, 3]
                        }), (0, r.jsx)(y, {
                            rotation: [0, 0, 0],
                            scale: [1.2, 1.2, 1.2],
                            position: [2, -2, 6]
                        }), (0, r.jsx)(i.y, {
                            position: [-(4.9 * e) + 1, 0, 2]
                        }), (0, r.jsx)(x, {
                            position: [0, 0, 0]
                        })]
                    })
                }
        },
        31202: (e, t, a) => {
            a.d(t, {
                G: () => c
            });
            var r = a(22550),
                n = a(87213),
                i = a(84391),
                o = a(40577),
                s = a(71993),
                h = a(77726);
            class l {
                updateProjectionUniforms() {
                    this.shadowMeshes.forEach(e => {
                        e.receiveShadow && (e.program.uniforms[e.uniformProjectionName] = {
                            value: this.light.projectionMatrix
                        }, e.program.uniforms[e.uniformViewName] = {
                            value: this.light.viewMatrix
                        }, e.program.uniforms[e.uniformShadowTextureName] = this.targetUniform)
                    })
                }
                add(e) {
                    let {
                        mesh: t,
                        receive: a = !0,
                        cast: r = !0,
                        vertex: n = m,
                        fragment: i = p,
                        uniformProjectionName: o = "shadowProjectionMatrix",
                        uniformViewName: s = "shadowViewMatrix",
                        uniformShadowTextureName: l = "tShadow"
                    } = e;
                    if (a && (t.receiveShadow = !0, t.uniformProjectionName = o, t.uniformViewName = s, t.uniformShadowTextureName = l, t.program.uniforms[o] = {
                            value: this.light.projectionMatrix
                        }, t.program.uniforms[s] = {
                            value: this.light.viewMatrix
                        }, t.program.uniforms[l] = this.targetUniform), t.castShadow = r, t.colorProgram = t.program, ~this.shadowMeshes.indexOf(t) || this.shadowMeshes.push(t), !t.depthProgram) {
                        if (n === m && i === p) {
                            t.depthProgram = this.depthProgram;
                            return
                        }
                        t.depthProgram = new h.$(this.gl, {
                            vertex: n,
                            fragment: i,
                            cullFace: !1
                        })
                    }
                }
                remove(e) {
                    let t = this.shadowMeshes.indexOf(e);
                    t > -1 && this.shadowMeshes.splice(t, 1)
                }
                setSize(e) {
                    let {
                        width: t = 1024,
                        height: a = t
                    } = e;
                    this.target.setSize(t, a), this.targetUniform.value = this.target.texture, this.updateProjectionUniforms()
                }
                render(e) {
                    let {
                        scene: t
                    } = e;
                    t.traverse(e => {
                        e.draw && (~this.shadowMeshes.indexOf(e) && e.castShadow ? e.program = e.depthProgram : (e.isForceVisibility = e.visible, e.visible = !1))
                    }), this.gl.renderer.render({
                        scene: t,
                        camera: this.light,
                        target: this.target
                    }), t.traverse(e => {
                        e.draw && (~this.shadowMeshes.indexOf(e) && e.castShadow ? e.program = e.colorProgram : e.visible = e.isForceVisibility)
                    })
                }
                constructor(e, {
                    light: t = new i.V(e),
                    width: a = 1024,
                    height: r = a,
                    target: o,
                    depthProgram: s
                }) {
                    this.gl = e, this.light = t, this.target = o || new n.A(e, {
                        width: a,
                        height: r
                    }), this.targetUniform = {
                        value: this.target.texture
                    }, this.depthProgram = s || new h.$(e, {
                        vertex: m,
                        fragment: p,
                        cullFace: !1
                    }), this.shadowMeshes = []
                }
            }
            let m = "\n    attribute vec3 position;\n    attribute vec2 uv;\n\n    uniform mat4 modelViewMatrix;\n    uniform mat4 projectionMatrix;\n\n    void main() {\n      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n    }\n",
                p = "\n    precision highp float;\n\n    vec4 packRGBA (float v) {\n        vec4 pack = fract(vec4(1.0, 255.0, 65025.0, 16581375.0) * v);\n        pack -= pack.yzww * vec2(1.0 / 255.0, 0.0).xxxy;\n        return pack;\n    }\n\n    void main() {\n        gl_FragColor = packRGBA(gl_FragCoord.z);\n    }\n";
            var d = a(8840);
            let c = (0, o.Ue)(e => {
                let t = s.xR;
                if (!t) return {};
                let a = new r.w,
                    o = new n.A(t, {
                        width: 1024,
                        height: 1024,
                        minFilter: t.LINEAR,
                        magFilter: t.LINEAR
                    }),
                    h = new i.V(t, {
                        top: 8,
                        bottom: -8,
                        left: -8,
                        right: 8,
                        near: 5,
                        far: 32
                    }),
                    m = new l(t, {
                        light: h,
                        target: o
                    }),
                    p = new r.w,
                    c = new n.A(t, {
                        width: 1024,
                        height: 1024,
                        minFilter: t.LINEAR,
                        magFilter: t.LINEAR
                    }),
                    g = new i.V(t, {
                        top: 5,
                        bottom: -5,
                        left: -5,
                        right: 5,
                        near: 1,
                        far: 32
                    });
                return g.position.set(0, 0, 2), {
                    renderer: s.ui,
                    gl: t,
                    shadowScene: a,
                    shadowFbo: o,
                    light: h,
                    shadowRenderer: m,
                    dayProgress: {
                        current: 0
                    },
                    shadowBurnerScene: p,
                    shadowBurnerFbo: c,
                    shadowBurnerCameraSize: 5,
                    shadowBurnerCamera: g,
                    aspect: 1,
                    setAspect: t => {
                        let a = (0, d.ol)(t, .5, 4, .3, 2.2),
                            r = (0, d.ol)(t, 1, 5, 1, 1.3);
                        h.left = -8 * a, h.right = 8 * a, h.top = 8 * r, h.bottom = -8 * r, h.orthographic();
                        let n = 1024 * t;
                        c.setSize(n, 1024), m.setSize({
                            width: n,
                            height: 1024
                        }), e({
                            aspect: t
                        })
                    }
                }
            })
        },
        71993: (e, t, a) => {
            a.d(t, {
                C2: () => i,
                Lq: () => p,
                Vw: () => m,
                em: () => s,
                r8: () => l,
                ui: () => o,
                xR: () => h
            });
            var r = a(88384),
                n = a(84391);
            let i = document.createElement("canvas");
            i.width = 0, i.height = 0;
            let o = new r.T({
                    antialias: !1,
                    powerPreference: "high-performance",
                    canvas: i,
                    width: i.width,
                    height: i.height
                }),
                s = {
                    x: 0,
                    y: 0,
                    get width() {
                        return i.width * o.dpr
                    },
                    get height() {
                        return i.height * o.dpr
                    }
                };
            o.gl.scissor(s.x, s.y, s.width, s.height), o.gl.enable(o.gl.SCISSOR_TEST);
            let h = o.gl;
            h.clearColor(250 / 255, 245 / 255, 242 / 255, 1);
            let l = new n.V(h, {
                    fov: 75,
                    aspect: i.width / i.height,
                    far: 1e3
                }),
                m = new n.V(h, {
                    fov: 75,
                    aspect: i.width / i.height,
                    far: 2e3
                }),
                p = 700;
            m.position.set(0, 0, p)
        }
    }
]);