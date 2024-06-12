"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1950], {
        67294: (e, t, n) => {
            n.d(t, {
                Z: () => o
            });
            var i = n(15791),
                a = n(40024);
            let o = function (e, t) {
                var n = (0, i.useState)(void 0 !== t ? t : !!a.jU && window.matchMedia(e).matches),
                    o = n[0],
                    u = n[1];
                return (0, i.useEffect)(function () {
                    var t = !0,
                        n = window.matchMedia(e),
                        i = function () {
                            t && u(!!n.matches)
                        };
                    return n.addEventListener("change", i), u(n.matches),
                        function () {
                            t = !1, n.removeEventListener("change", i)
                        }
                }, [e]), o
            }
        },
        31950: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => l
            });
            var i = n(69797),
                a = n(15791),
                o = n(33506),
                u = n.n(o),
                c = n(67294),
                r = n(82372),
                s = n(22948);
            let l = e => {
                let {
                    onReady: t
                } = e, [n, o] = (0, a.useState)(!1), l = (0, c.Z)(s.vl.query.lg), d = (0, a.useMemo)(() => "https://stream.mux.com/".concat(l ? "SH2mU4hEbicCWYE6DeODNxuigQb01KkvPxiGVonk01dQo" : "1SDs5t2ZkR5fNO5u02qb801p47T1k96CEnaKfdEfLNXJk", "?min_resolution=1080p&rendition_order=desc"), [l]);
                return (0, i.jsx)("div", {
                    className: (0, r.L)("mix-blend-multiply absolute top-0 left-0 w-full h-full [&_mux-player]:[--media-object-fit:cover] [&_mux-player]:[--media-object-position:center] opacity-0 transition-opacity duration-0 op0", n && "opacity-0 "),
                    children: (0, i.jsx)(u(), {
                        onReady: () => {
                            t(), o(!0)
                        },
                        url: d,
                        playing: !0,
                        muted: !0,
                        loop: !0,
                        width: "100%",
                        height: "100%"
                    })
                })
            }
        }
    }
]);