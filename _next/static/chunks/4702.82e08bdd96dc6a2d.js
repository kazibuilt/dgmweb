"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4702], {
        24702: (e, t, s) => {
            s.r(t), s.d(t, {
                default: () => r
            });
            var i = s(69797),
                l = s(48795),
                o = s(15791),
                a = s(33506),
                c = s.n(a),
                n = s(49371),
                u = s(82372);
            let r = () => {
                let [e, t] = (0, o.useState)(!1), s = (0, o.useRef)(null), a = (0, n.Z)(s, {});
                return (0, i.jsxs)("div", {
                    ref: s,
                    className: "absolute inset-0 [&_video]:object-cover",
                    children: [(0, i.jsx)(c(), {
                        onProgress: e => {
                            e.playedSeconds > .3 && t(!0)
                        },
                        url: "https://stream.mux.com/",
                        playing: null == a ? void 0 : a.isIntersecting,
                        playsinline: !0,
                        controls: !1,
                        loop: !0,
                        muted: !0,
                        width: "100%",
                        height: "100%",
                        style: {
                            "--media-object-size": "cover",
                            opacity: "0",
                            position: "relative"
                        }
                    }), (0, i.jsx)(l.default, {
                        className: (0, u.L)("absolute inset-0 object-cover block opacity-100", e && "opacity-0 transition-opacity duration-200"),
                        alt: "",
                        src: "/_next/team-desktop.webp",
                        fill: !0,
                        sizes: "100vw",
                        priority: !0
                    })]
                })
            }
        }
    }
]);