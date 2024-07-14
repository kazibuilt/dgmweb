(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [185], {
        9713: function (e, t, n) {
            Promise.resolve().then(n.bind(n, 6506)), Promise.resolve().then(n.bind(n, 7118)), Promise.resolve().then(n.t.bind(n, 9025, 23)), Promise.resolve().then(n.t.bind(n, 9108, 23)), Promise.resolve().then(n.t.bind(n, 8877, 23))
        },
        6506: function (e, t, n) {
            "use strict";
            n.d(t, {
                t: function () {
                    return a
                }
            });
            var i = n(7437),
                r = n(804),
                o = n(5282),
                d = n(2265);
            let s = (0, d.createContext)({
                    x: new r.Hg,
                    y: new r.Hg,
                    isPressed: !1
                }),
                a = () => (0, d.useContext)(s);
            t.default = e => {
                let {
                    children: t
                } = e, n = (0, o.c)(0), r = (0, o.c)(0), [a, l] = (0, d.useState)(!1);
                return (0, d.useEffect)(() => {
                    let e = e => {
                            n.set(e.clientX), r.set(e.clientY)
                        },
                        t = () => l(!0),
                        i = () => l(!1);
                    return window.addEventListener("pointermove", e), window.addEventListener("pointerdown", t), window.addEventListener("pointerup", i), () => {
                        window.removeEventListener("pointermove", e), window.removeEventListener("pointerdown", t), window.removeEventListener("pointerup", i)
                    }
                }, [n, r]), (0, i.jsx)(s.Provider, {
                    value: {
                        x: n,
                        y: r,
                        isPressed: a
                    },
                    children: t
                })
            }
        },
        7118: function (e, t, n) {
            "use strict";
            n.d(t, {
                $: function () {
                    return s
                },
                WindowDimensionContextProvider: function () {
                    return d
                }
            });
            var i = n(7437),
                r = n(2265);
            let o = (0, r.createContext)({
                    width: 0,
                    height: 0,
                    debounced: {
                        width: 0,
                        height: 0
                    },
                    isResizing: !1
                }),
                d = e => {
                    let {
                        children: t
                    } = e, [n, d] = (0, r.useState)({
                        width: 0,
                        height: 0
                    }), [s, a] = (0, r.useState)({
                        width: 0,
                        height: 0
                    }), [l, u] = (0, r.useState)(!1);
                    return (0, r.useEffect)(() => {
                        let e;
                        let t = () => {
                            d({
                                width: window.innerWidth,
                                height: window.innerHeight
                            }), e && clearTimeout(e), e = setTimeout(() => {
                                a({
                                    width: window.innerWidth,
                                    height: window.innerHeight
                                }), u(!1)
                            }, 500), u(!0)
                        };
                        return t(), window.addEventListener("resize", t), () => {
                            e && clearTimeout(e), window.removeEventListener("resize", t)
                        }
                    }, []), (0, i.jsx)(o.Provider, {
                        value: {
                            ...n,
                            debounced: {
                                ...s
                            },
                            isResizing: l
                        },
                        children: t
                    })
                },
                s = () => (0, r.useContext)(o)
        },
        8877: function () {},
        9108: function (e) {
            e.exports = {
                style: {
                    fontFamily: "'__nb_international_mono_94bd81', '__nb_international_mono_Fallback_94bd81'",
                    fontWeight: 400
                },
                className: "__className_94bd81",
                variable: "__variable_94bd81"
            }
        },
        9025: function (e) {
            e.exports = {
                style: {
                    fontFamily: "'__nb_international_regular_de439d', '__nb_international_regular_Fallback_de439d'",
                    fontWeight: 400
                },
                className: "__className_de439d",
                variable: "__variable_de439d"
            }
        }
    },
    function (e) {
        e.O(0, [49, 282, 971, 23, 744], function () {
            return e(e.s = 9713)
        }), _N_E = e.O()
    }
]);