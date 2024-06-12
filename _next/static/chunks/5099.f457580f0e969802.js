"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5099], {
        5099: (e, r, t) => {
            function n(e, r, t, n) {
                return new(t || (t = Promise))(function (a, o) {
                    function i(e) {
                        try {
                            d(n.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function l(e) {
                        try {
                            d(n.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function d(e) {
                        var r;
                        e.done ? a(e.value) : ((r = e.value) instanceof t ? r : new t(function (e) {
                            e(r)
                        })).then(i, l)
                    }
                    d((n = n.apply(e, r || [])).next())
                })
            }
            t.r(r), t.d(r, {
                getGPUTier: () => s
            }), "function" == typeof SuppressedError && SuppressedError;
            let a = ["geforce 320m", "geforce 8600", "geforce 8600m gt", "geforce 8800 gs", "geforce 8800 gt", "geforce 9400", "geforce 9400m g", "geforce 9400m", "geforce 9600m gt", "geforce 9600m", "geforce fx go5200", "geforce gt 120", "geforce gt 130", "geforce gt 330m", "geforce gtx 285", "google swiftshader", "intel g41", "intel g45", "intel gma 4500mhd", "intel gma x3100", "intel hd 3000", "intel q45", "legacy", "mali-2", "mali-3", "mali-4", "quadro fx 1500", "quadro fx 4", "quadro fx 5", "radeon hd 2400", "radeon hd 2600", "radeon hd 4670", "radeon hd 4850", "radeon hd 4870", "radeon hd 5670", "radeon hd 5750", "radeon hd 6290", "radeon hd 6300", "radeon hd 6310", "radeon hd 6320", "radeon hd 6490m", "radeon hd 6630m", "radeon hd 6750m", "radeon hd 6770m", "radeon hd 6970m", "sgx 543", "sgx543"];

            function o(e) {
                return e = e.toLowerCase().replace(/.*angle ?\((.+)\)(?: on vulkan [0-9.]+)?$/i, "$1").replace(/\s(\d{1,2}gb|direct3d.+$)|\(r\)| \([^)]+\)$/g, "").replace(/(?:vulkan|opengl) \d+\.\d+(?:\.\d+)?(?: \((.*)\))?/, "$1")
            }
            let i = "undefined" == typeof window,
                l = (() => {
                    if (i) return;
                    let {
                        userAgent: e,
                        platform: r,
                        maxTouchPoints: t
                    } = window.navigator, n = /(iphone|ipod|ipad)/i.test(e), a = "iPad" === r || "MacIntel" === r && t > 0 && !window.MSStream;
                    return {
                        isIpad: a,
                        isMobile: /android/i.test(e) || n || a,
                        isSafari12: /Version\/12.+Safari/.test(e),
                        isFirefox: /Firefox/.test(e)
                    }
                })();
            class d extends Error {
                constructor(e) {
                    super(e), Object.setPrototypeOf(this, new.target.prototype)
                }
            }
            let c = [],
                f = [];

            function u(e) {
                return null != e
            }
            let s = ({
                mobileTiers: e = [0, 15, 30, 60],
                desktopTiers: r = [0, 15, 30, 60],
                override: t = {},
                glContext: s,
                failIfMajorPerformanceCaveat: h = !1,
                benchmarksURL: g = "https://unpkg.com/detect-gpu@5.0.38/dist/benchmarks"
            } = {}) => n(void 0, void 0, void 0, function* () {
                let p = {};
                if (i) return {
                    tier: 0,
                    type: "SSR"
                };
                let {
                    isIpad: m = !!(null == l ? void 0 : l.isIpad),
                    isMobile: v = !!(null == l ? void 0 : l.isMobile),
                    screenSize: w = window.screen,
                    loadBenchmarks: x = e => n(void 0, void 0, void 0, function* () {
                        let r = yield fetch(`${g}/${e}`).then(e => e.json());
                        if (4 > parseInt(r.shift().split(".")[0], 10)) throw new d("Detect GPU benchmark data is out of date. Please update to version 4x");
                        return r
                    })
                } = t, {
                    renderer: A
                } = t, P = (e, r, t, n, a) => ({
                    device: a,
                    fps: n,
                    gpu: t,
                    isMobile: v,
                    tier: e,
                    type: r
                }), b, S = "";
                if (A) b = [A = o(A)];
                else {
                    var E;
                    let e = s || function (e, r = !1) {
                        let t = {
                            alpha: !1,
                            antialias: !1,
                            depth: !1,
                            failIfMajorPerformanceCaveat: r,
                            powerPreference: "high-performance",
                            stencil: !1
                        };
                        e && delete t.powerPreference;
                        let n = window.document.createElement("canvas"),
                            a = n.getContext("webgl", t) || n.getContext("experimental-webgl", t);
                        return null != a ? a : void 0
                    }(null == l ? void 0 : l.isSafari12, h);
                    if (!e) return P(0, "WEBGL_UNSUPPORTED");
                    let r = (null == l ? void 0 : l.isFirefox) ? null : e.getExtension("WEBGL_debug_renderer_info");
                    if (!(A = r ? e.getParameter(r.UNMASKED_RENDERER_WEBGL) : e.getParameter(e.RENDERER))) return P(1, "FALLBACK");
                    S = A, b = "apple gpu" === (E = A = o(A)) ? function (e, r, t) {
                        let n;
                        if (!t) return [r];
                        let a = function (e) {
                                let r = e.createShader(35633),
                                    t = e.createShader(35632),
                                    n = e.createProgram();
                                if (!(t && r && n)) return;
                                e.shaderSource(r, "\n    precision highp float;\n    attribute vec3 aPosition;\n    varying float vvv;\n    void main() {\n      vvv = 0.31622776601683794;\n      gl_Position = vec4(aPosition, 1.0);\n    }\n  "), e.shaderSource(t, "\n    precision highp float;\n    varying float vvv;\n    void main() {\n      vec4 enc = vec4(1.0, 255.0, 65025.0, 16581375.0) * vvv;\n      enc = fract(enc);\n      enc -= enc.yzww * vec4(1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0, 0.0);\n      gl_FragColor = enc;\n    }\n  "), e.compileShader(r), e.compileShader(t), e.attachShader(n, r), e.attachShader(n, t), e.linkProgram(n), e.detachShader(n, r), e.detachShader(n, t), e.deleteShader(r), e.deleteShader(t), e.useProgram(n);
                                let a = e.createBuffer();
                                e.bindBuffer(34962, a), e.bufferData(34962, new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), 35044);
                                let o = e.getAttribLocation(n, "aPosition");
                                e.vertexAttribPointer(o, 3, 5126, !1, 0, 0), e.enableVertexAttribArray(o), e.clearColor(1, 1, 1, 1), e.clear(16384), e.viewport(0, 0, 1, 1), e.drawArrays(4, 0, 3);
                                let i = new Uint8Array(4);
                                return e.readPixels(0, 0, 1, 1, 6408, 5121, i), e.deleteProgram(n), e.deleteBuffer(a), i.join("")
                            }(e),
                            o = "801621810",
                            i = "8016218135",
                            d = "80162181161",
                            c = (null == l ? void 0 : l.isIpad) ? [
                                ["a7", d, 12],
                                ["a8", i, 15],
                                ["a8x", i, 15],
                                ["a9", i, 15],
                                ["a9x", i, 15],
                                ["a10", i, 15],
                                ["a10x", i, 15],
                                ["a12", o, 15],
                                ["a12x", o, 15],
                                ["a12z", o, 15],
                                ["a14", o, 15],
                                ["m1", o, 15]
                            ] : [
                                ["a7", d, 12],
                                ["a8", i, 12],
                                ["a9", i, 15],
                                ["a10", i, 15],
                                ["a11", o, 15],
                                ["a12", o, 15],
                                ["a13", o, 15],
                                ["a14", o, 15],
                                ["a15", o, 15],
                                ["a16", o, 15],
                                ["a17", o, 15]
                            ];
                        return "80162181255" === a ? n = c.filter(([, , e]) => e >= 14) : (n = c.filter(([, e]) => e === a)).length || (n = c), n.map(([e]) => `apple ${e} gpu`)
                    }(e, E, v) : [E]
                }
                let y = (yield Promise.all(b.map(function (e) {
                    var r;
                    return n(this, void 0, void 0, function* () {
                        let t;
                        let n = (e => {
                            for (let r of v ? ["adreno", "apple", "mali-t", "mali", "nvidia", "powervr", "samsung"] : ["intel", "apple", "amd", "radeon", "nvidia", "geforce", "adreno"])
                                if (e.includes(r)) return r
                        })(e);
                        if (!n) return;
                        let a = `${v?"m":"d"}-${n}${m?"-ipad":""}.json`,
                            o = p[a] = null !== (r = p[a]) && void 0 !== r ? r : x(a);
                        try {
                            t = yield o
                        } catch (e) {
                            if (e instanceof d) throw e;
                            return
                        }
                        let i = function (e) {
                                var r;
                                let t = (e = e.replace(/\([^)]+\)/, "")).match(/\d+/) || e.match(/(\W|^)([A-Za-z]{1,3})(\W|$)/g);
                                return null !== (r = null == t ? void 0 : t.join("").replace(/\W|amd/g, "")) && void 0 !== r ? r : ""
                            }(e),
                            l = t.filter(([, e]) => e === i);
                        l.length || (l = t.filter(([r]) => r.includes(e)));
                        let u = l.length;
                        if (0 === u) return;
                        let s = e.split(/[.,()\[\]/\s]/g).sort().filter((e, r, t) => 0 === r || e !== t[r - 1]).join(" "),
                            h, [g, , , , A] = u > 1 ? l.map(e => [e, function (e, r) {
                                if (e === r) return 0;
                                let t = e;
                                e.length > r.length && (e = r, r = t);
                                let n = e.length,
                                    a = r.length;
                                for (; n > 0 && e.charCodeAt(~-n) === r.charCodeAt(~-a);) n--, a--;
                                let o, i = 0;
                                for (; i < n && e.charCodeAt(i) === r.charCodeAt(i);) i++;
                                if (n -= i, a -= i, 0 === n) return a;
                                let l, d, u = 0,
                                    s = 0,
                                    h = 0;
                                for (; s < n;) f[s] = e.charCodeAt(i + s), c[s] = ++s;
                                for (; h < a;)
                                    for (o = r.charCodeAt(i + h), l = h++, u = h, s = 0; s < n; s++) d = o === f[s] ? l : l + 1, l = c[s], u = c[s] = l > u ? d > u ? u + 1 : d : d > l ? l + 1 : d;
                                return u
                            }(s, e[2])]).sort(([, e], [, r]) => e - r)[0][0] : l[0],
                            P = Number.MAX_VALUE,
                            {
                                devicePixelRatio: b
                            } = window,
                            S = w.width * b * w.height * b;
                        for (let e of A) {
                            let [r, t] = e, n = Math.abs(S - r * t);
                            n < P && (P = n, h = e)
                        }
                        if (!h) return;
                        let [, , E, y] = h;
                        return [P, E, g, y]
                    })
                }))).filter(u).sort(([e = Number.MAX_VALUE, r], [t = Number.MAX_VALUE, n]) => e === t ? r - n : e - t);
                if (!y.length) {
                    let e = a.find(e => A.includes(e));
                    return e ? P(0, "BLOCKLISTED", e) : P(1, "FALLBACK", `${A} (${S})`)
                }
                let [, C, L, _] = y[0];
                if (-1 === C) return P(0, "BLOCKLISTED", L, C, _);
                let M = v ? e : r,
                    $ = 0;
                for (let e = 0; e < M.length; e++) C >= M[e] && ($ = e);
                return P($, "BENCHMARK", L, C, _)
            })
        }
    }
]);