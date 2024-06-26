"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4941], {
        67037: (e, t, r) => {
            Object.defineProperty(t, "$", {
                enumerable: !0,
                get: function () {
                    return o
                }
            });
            let n = r(3692);

            function o(e) {
                let {
                    createServerReference: t
                } = r(26916);
                return t(e, n.callServer)
            }
        },
        49371: (e, t, r) => {
            r.d(t, {
                Z: () => o
            });
            var n = r(15791);
            let o = function (e, t) {
                var r = (0, n.useState)(null),
                    o = r[0],
                    a = r[1];
                return (0, n.useEffect)(function () {
                    if (e.current && "function" == typeof IntersectionObserver) {
                        var r = new IntersectionObserver(function (e) {
                            a(e[0])
                        }, t);
                        return r.observe(e.current),
                            function () {
                                a(null), r.disconnect()
                            }
                    }
                    return function () {}
                }, [e.current, t.threshold, t.root, t.rootMargin]), o
            }
        },
        67294: (e, t, r) => {
            r.d(t, {
                Z: () => a
            });
            var n = r(15791),
                o = r(40024);
            let a = function (e, t) {
                var r = (0, n.useState)(void 0 !== t ? t : !!o.jU && window.matchMedia(e).matches),
                    a = r[0],
                    l = r[1];
                return (0, n.useEffect)(function () {
                    var t = !0,
                        r = window.matchMedia(e),
                        n = function () {
                            t && l(!!r.matches)
                        };
                    return r.addEventListener("change", n), l(r.matches),
                        function () {
                            t = !1, r.removeEventListener("change", n)
                        }
                }, [e]), a
            }
        },
        24248: (e, t, r) => {
            r.d(t, {
                VY: () => ee,
                ck: () => Q,
                fC: () => J,
                xz: () => X
            });
            var n = r(38641),
                o = r(15791),
                a = r(16698),
                l = r(72287),
                i = r(73456),
                c = r(90209),
                d = r(78119),
                s = r(5141),
                u = r(75298),
                p = r(74826),
                f = r(204);
            let m = "Collapsible",
                [b, v] = (0, a.b)(m),
                [g, h] = b(m),
                E = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeCollapsible: r,
                        open: a,
                        defaultOpen: l,
                        disabled: i,
                        onOpenChange: c,
                        ...u
                    } = e, [p = !1, m] = (0, d.T)({
                        prop: a,
                        defaultProp: l,
                        onChange: c
                    });
                    return (0, o.createElement)(g, {
                        scope: r,
                        disabled: i,
                        contentId: (0, f.M)(),
                        open: p,
                        onOpenToggle: (0, o.useCallback)(() => m(e => !e), [m])
                    }, (0, o.createElement)(s.WV.div, (0, n.Z)({
                        "data-state": A(p),
                        "data-disabled": i ? "" : void 0
                    }, u, {
                        ref: t
                    })))
                }),
                w = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeCollapsible: r,
                        ...a
                    } = e, l = h("CollapsibleTrigger", r);
                    return (0, o.createElement)(s.WV.button, (0, n.Z)({
                        type: "button",
                        "aria-controls": l.contentId,
                        "aria-expanded": l.open || !1,
                        "data-state": A(l.open),
                        "data-disabled": l.disabled ? "" : void 0,
                        disabled: l.disabled
                    }, a, {
                        ref: t,
                        onClick: (0, c.M)(e.onClick, l.onOpenToggle)
                    }))
                }),
                y = "CollapsibleContent",
                _ = (0, o.forwardRef)((e, t) => {
                    let {
                        forceMount: r,
                        ...a
                    } = e, l = h(y, e.__scopeCollapsible);
                    return (0, o.createElement)(p.z, {
                        present: r || l.open
                    }, ({
                        present: e
                    }) => (0, o.createElement)(C, (0, n.Z)({}, a, {
                        ref: t,
                        present: e
                    })))
                }),
                C = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeCollapsible: r,
                        present: a,
                        children: l,
                        ...c
                    } = e, d = h(y, r), [p, f] = (0, o.useState)(a), m = (0, o.useRef)(null), b = (0, i.e)(t, m), v = (0, o.useRef)(0), g = v.current, E = (0, o.useRef)(0), w = E.current, _ = d.open || p, C = (0, o.useRef)(_), R = (0, o.useRef)();
                    return (0, o.useEffect)(() => {
                        let e = requestAnimationFrame(() => C.current = !1);
                        return () => cancelAnimationFrame(e)
                    }, []), (0, u.b)(() => {
                        let e = m.current;
                        if (e) {
                            R.current = R.current || {
                                transitionDuration: e.style.transitionDuration,
                                animationName: e.style.animationName
                            }, e.style.transitionDuration = "0s", e.style.animationName = "none";
                            let t = e.getBoundingClientRect();
                            v.current = t.height, E.current = t.width, C.current || (e.style.transitionDuration = R.current.transitionDuration, e.style.animationName = R.current.animationName), f(a)
                        }
                    }, [d.open, a]), (0, o.createElement)(s.WV.div, (0, n.Z)({
                        "data-state": A(d.open),
                        "data-disabled": d.disabled ? "" : void 0,
                        id: d.contentId,
                        hidden: !_
                    }, c, {
                        ref: b,
                        style: {
                            "--radix-collapsible-content-height": g ? `${g}px` : void 0,
                            "--radix-collapsible-content-width": w ? `${w}px` : void 0,
                            ...e.style
                        }
                    }), _ && l)
                });

            function A(e) {
                return e ? "open" : "closed"
            }
            var R = r(63512);
            let I = "Accordion",
                k = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
                [x, Z, V] = (0, l.B)(I),
                [O, D] = (0, a.b)(I, [V, v]),
                M = v(),
                T = o.forwardRef((e, t) => {
                    let {
                        type: r,
                        ...a
                    } = e;
                    return o.createElement(x.Provider, {
                        scope: e.__scopeAccordion
                    }, "multiple" === r ? o.createElement(W, (0, n.Z)({}, a, {
                        ref: t
                    })) : o.createElement(L, (0, n.Z)({}, a, {
                        ref: t
                    })))
                });
            T.propTypes = {
                type(e) {
                    let t = e.value || e.defaultValue;
                    return e.type && !["single", "multiple"].includes(e.type) ? Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`.") : "multiple" === e.type && "string" == typeof t ? Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`.") : "single" === e.type && Array.isArray(t) ? Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`.") : null
                }
            };
            let [N, S] = O(I), [P, z] = O(I, {
                collapsible: !1
            }), L = o.forwardRef((e, t) => {
                let {
                    value: r,
                    defaultValue: a,
                    onValueChange: l = () => {},
                    collapsible: i = !1,
                    ...c
                } = e, [s, u] = (0, d.T)({
                    prop: r,
                    defaultProp: a,
                    onChange: l
                });
                return o.createElement(N, {
                    scope: e.__scopeAccordion,
                    value: s ? [s] : [],
                    onItemOpen: u,
                    onItemClose: o.useCallback(() => i && u(""), [i, u])
                }, o.createElement(P, {
                    scope: e.__scopeAccordion,
                    collapsible: i
                }, o.createElement(j, (0, n.Z)({}, c, {
                    ref: t
                }))))
            }), W = o.forwardRef((e, t) => {
                let {
                    value: r,
                    defaultValue: a,
                    onValueChange: l = () => {},
                    ...i
                } = e, [c = [], s] = (0, d.T)({
                    prop: r,
                    defaultProp: a,
                    onChange: l
                }), u = o.useCallback(e => s((t = []) => [...t, e]), [s]), p = o.useCallback(e => s((t = []) => t.filter(t => t !== e)), [s]);
                return o.createElement(N, {
                    scope: e.__scopeAccordion,
                    value: c,
                    onItemOpen: u,
                    onItemClose: p
                }, o.createElement(P, {
                    scope: e.__scopeAccordion,
                    collapsible: !0
                }, o.createElement(j, (0, n.Z)({}, i, {
                    ref: t
                }))))
            }), [U, $] = O(I), j = o.forwardRef((e, t) => {
                let {
                    __scopeAccordion: r,
                    disabled: a,
                    dir: l,
                    orientation: d = "vertical",
                    ...u
                } = e, p = o.useRef(null), f = (0, i.e)(p, t), m = Z(r), b = "ltr" === (0, R.gm)(l), v = (0, c.M)(e.onKeyDown, e => {
                    var t;
                    if (!k.includes(e.key)) return;
                    let r = e.target,
                        n = m().filter(e => {
                            var t;
                            return !(null !== (t = e.ref.current) && void 0 !== t && t.disabled)
                        }),
                        o = n.findIndex(e => e.ref.current === r),
                        a = n.length;
                    if (-1 === o) return;
                    e.preventDefault();
                    let l = o,
                        i = a - 1,
                        c = () => {
                            (l = o + 1) > i && (l = 0)
                        },
                        s = () => {
                            (l = o - 1) < 0 && (l = i)
                        };
                    switch (e.key) {
                        case "Home":
                            l = 0;
                            break;
                        case "End":
                            l = i;
                            break;
                        case "ArrowRight":
                            "horizontal" === d && (b ? c() : s());
                            break;
                        case "ArrowDown":
                            "vertical" === d && c();
                            break;
                        case "ArrowLeft":
                            "horizontal" === d && (b ? s() : c());
                            break;
                        case "ArrowUp":
                            "vertical" === d && s()
                    }
                    null === (t = n[l % a].ref.current) || void 0 === t || t.focus()
                });
                return o.createElement(U, {
                    scope: r,
                    disabled: a,
                    direction: l,
                    orientation: d
                }, o.createElement(x.Slot, {
                    scope: r
                }, o.createElement(s.WV.div, (0, n.Z)({}, u, {
                    "data-orientation": d,
                    ref: f,
                    onKeyDown: a ? void 0 : v
                }))))
            }), B = "AccordionItem", [F, H] = O(B), K = o.forwardRef((e, t) => {
                let {
                    __scopeAccordion: r,
                    value: a,
                    ...l
                } = e, i = $(B, r), c = S(B, r), d = M(r), s = (0, f.M)(), u = a && c.value.includes(a) || !1, p = i.disabled || e.disabled;
                return o.createElement(F, {
                    scope: r,
                    open: u,
                    disabled: p,
                    triggerId: s
                }, o.createElement(E, (0, n.Z)({
                    "data-orientation": i.orientation,
                    "data-state": function (e) {
                        return e ? "open" : "closed"
                    }(u)
                }, d, l, {
                    ref: t,
                    disabled: p,
                    open: u,
                    onOpenChange: e => {
                        e ? c.onItemOpen(a) : c.onItemClose(a)
                    }
                })))
            }), q = "AccordionTrigger", Y = o.forwardRef((e, t) => {
                let {
                    __scopeAccordion: r,
                    ...a
                } = e, l = $(I, r), i = H(q, r), c = z(q, r), d = M(r);
                return o.createElement(x.ItemSlot, {
                    scope: r
                }, o.createElement(w, (0, n.Z)({
                    "aria-disabled": i.open && !c.collapsible || void 0,
                    "data-orientation": l.orientation,
                    id: i.triggerId
                }, d, a, {
                    ref: t
                })))
            }), G = o.forwardRef((e, t) => {
                let {
                    __scopeAccordion: r,
                    ...a
                } = e, l = $(I, r), i = H("AccordionContent", r), c = M(r);
                return o.createElement(_, (0, n.Z)({
                    role: "region",
                    "aria-labelledby": i.triggerId,
                    "data-orientation": l.orientation
                }, c, a, {
                    ref: t,
                    style: {
                        "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
                        "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
                        ...e.style
                    }
                }))
            }), J = T, Q = K, X = Y, ee = G
        }
    }
]);