(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9815], {
        69815: (e, t, n) => {
            var r;
            ! function (i, o, a) {
                if (i) {
                    for (var c, s = {
                            8: "backspace",
                            9: "tab",
                            13: "enter",
                            16: "shift",
                            17: "ctrl",
                            18: "alt",
                            20: "capslock",
                            27: "esc",
                            32: "space",
                            33: "pageup",
                            34: "pagedown",
                            35: "end",
                            36: "home",
                            37: "left",
                            38: "up",
                            39: "right",
                            40: "down",
                            45: "ins",
                            46: "del",
                            91: "meta",
                            93: "meta",
                            224: "meta"
                        }, l = {
                            106: "*",
                            107: "+",
                            109: "-",
                            110: ".",
                            111: "/",
                            186: ";",
                            187: "=",
                            188: ",",
                            189: "-",
                            190: ".",
                            191: "/",
                            192: "`",
                            219: "[",
                            220: "\\",
                            221: "]",
                            222: "'"
                        }, u = {
                            "~": "`",
                            "!": "1",
                            "@": "2",
                            "#": "3",
                            $: "4",
                            "%": "5",
                            "^": "6",
                            "&": "7",
                            "*": "8",
                            "(": "9",
                            ")": "0",
                            _: "-",
                            "+": "=",
                            ":": ";",
                            '"': "'",
                            "<": ",",
                            ">": ".",
                            "?": "/",
                            "|": "\\"
                        }, f = {
                            option: "alt",
                            command: "meta",
                            return: "enter",
                            escape: "esc",
                            plus: "+",
                            mod: /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "meta" : "ctrl"
                        }, p = 1; p < 20; ++p) s[111 + p] = "f" + p;
                    for (p = 0; p <= 9; ++p) s[p + 96] = p.toString();
                    m.prototype.bind = function (e, t, n) {
                        return e = e instanceof Array ? e : [e], this._bindMultiple.call(this, e, t, n), this
                    }, m.prototype.unbind = function (e, t) {
                        return this.bind.call(this, e, function () {}, t)
                    }, m.prototype.trigger = function (e, t) {
                        return this._directMap[e + ":" + t] && this._directMap[e + ":" + t]({}, e), this
                    }, m.prototype.reset = function () {
                        return this._callbacks = {}, this._directMap = {}, this
                    }, m.prototype.stopCallback = function (e, t) {
                        if ((" " + t.className + " ").indexOf(" mousetrap ") > -1 || function e(t, n) {
                                return null !== t && t !== o && (t === n || e(t.parentNode, n))
                            }(t, this.target)) return !1;
                        if ("composedPath" in e && "function" == typeof e.composedPath) {
                            var n = e.composedPath()[0];
                            n !== e.target && (t = n)
                        }
                        return "INPUT" == t.tagName || "SELECT" == t.tagName || "TEXTAREA" == t.tagName || t.isContentEditable
                    }, m.prototype.handleKey = function () {
                        return this._handleKey.apply(this, arguments)
                    }, m.addKeycodes = function (e) {
                        for (var t in e) e.hasOwnProperty(t) && (s[t] = e[t]);
                        c = null
                    }, m.init = function () {
                        var e = m(o);
                        for (var t in e) "_" !== t.charAt(0) && (m[t] = function (t) {
                            return function () {
                                return e[t].apply(e, arguments)
                            }
                        }(t))
                    }, m.init(), i.Mousetrap = m, e.exports && (e.exports = m), a !== (r = (function () {
                        return m
                    }).call(t, n, t, e)) && (e.exports = r)
                }

                function h(e, t, n) {
                    if (e.addEventListener) {
                        e.addEventListener(t, n, !1);
                        return
                    }
                    e.attachEvent("on" + t, n)
                }

                function d(e) {
                    if ("keypress" == e.type) {
                        var t = String.fromCharCode(e.which);
                        return e.shiftKey || (t = t.toLowerCase()), t
                    }
                    return s[e.which] ? s[e.which] : l[e.which] ? l[e.which] : String.fromCharCode(e.which).toLowerCase()
                }

                function y(e) {
                    return "shift" == e || "ctrl" == e || "alt" == e || "meta" == e
                }

                function k(e, t) {
                    var n, r, i, o, a, l, p = [];
                    for (l = 0, o = "+" === (n = e) ? ["+"] : (n = n.replace(/\+{2}/g, "+plus")).split("+"); l < o.length; ++l) f[a = o[l]] && (a = f[a]), t && "keypress" != t && u[a] && (a = u[a], p.push("shift")), y(a) && p.push(a);
                    return r = a, (i = t) || (i = function () {
                        if (!c)
                            for (var e in c = {}, s)(!(e > 95) || !(e < 112)) && s.hasOwnProperty(e) && (c[s[e]] = e);
                        return c
                    }()[r] ? "keydown" : "keypress"), "keypress" == i && p.length && (i = "keydown"), {
                        key: a,
                        modifiers: p,
                        action: t = i
                    }
                }

                function m(e) {
                    var t, n = this;
                    if (e = e || o, !(n instanceof m)) return new m(e);
                    n.target = e, n._callbacks = {}, n._directMap = {};
                    var r = {},
                        i = !1,
                        a = !1,
                        c = !1;

                    function s(e) {
                        e = e || {};
                        var t, n = !1;
                        for (t in r) {
                            if (e[t]) {
                                n = !0;
                                continue
                            }
                            r[t] = 0
                        }
                        n || (c = !1)
                    }

                    function l(e, t, i, o, a, c) {
                        var s, l, u = [],
                            f = i.type;
                        if (!n._callbacks[e]) return [];
                        for ("keyup" == f && y(e) && (t = [e]), s = 0; s < n._callbacks[e].length; ++s)
                            if (l = n._callbacks[e][s], (o || !l.seq || r[l.seq] == l.level) && f == l.action && ("keypress" == f && !i.metaKey && !i.ctrlKey || (p = t, h = l.modifiers, p.sort().join(",") === h.sort().join(",")))) {
                                var p, h, d = !o && l.combo == a,
                                    k = o && l.seq == o && l.level == c;
                                (d || k) && n._callbacks[e].splice(s, 1), u.push(l)
                            } return u
                    }

                    function u(e, t, r, i) {
                        n.stopCallback(t, t.target || t.srcElement, r, i) || !1 !== e(t, r) || (! function (e) {
                            if (e.preventDefault) {
                                e.preventDefault();
                                return
                            }
                            e.returnValue = !1
                        }(t), function (e) {
                            if (e.stopPropagation) {
                                e.stopPropagation();
                                return
                            }
                            e.cancelBubble = !0
                        }(t))
                    }

                    function f(e) {
                        "number" != typeof e.which && (e.which = e.keyCode);
                        var t, r = d(e);
                        if (r) {
                            if ("keyup" == e.type && i === r) {
                                i = !1;
                                return
                            }
                            n.handleKey(r, (t = [], e.shiftKey && t.push("shift"), e.altKey && t.push("alt"), e.ctrlKey && t.push("ctrl"), e.metaKey && t.push("meta"), t), e)
                        }
                    }
                    n._handleKey = function (e, t, n) {
                        var r, i = l(e, t, n),
                            o = {},
                            f = 0,
                            p = !1;
                        for (r = 0; r < i.length; ++r) i[r].seq && (f = Math.max(f, i[r].level));
                        for (r = 0; r < i.length; ++r) {
                            if (i[r].seq) {
                                if (i[r].level != f) continue;
                                p = !0, o[i[r].seq] = 1, u(i[r].callback, n, i[r].combo, i[r].seq);
                                continue
                            }
                            p || u(i[r].callback, n, i[r].combo)
                        }
                        var h = "keypress" == n.type && a;
                        n.type != c || y(e) || h || s(o), a = p && "keydown" == n.type
                    }, n._bindMultiple = function (e, o, a) {
                        for (var f = 0; f < e.length; ++f)(function e(o, a, f, p, h) {
                            n._directMap[o + ":" + f] = a;
                            var y, m = (o = o.replace(/\s+/g, " ")).split(" ");
                            if (m.length > 1) {
                                ! function (n, o, a, l) {
                                    function f(e) {
                                        u(a, e, n), "keyup" !== l && (i = d(e)), setTimeout(s, 10)
                                    }
                                    r[n] = 0;
                                    for (var p = 0; p < o.length; ++p) {
                                        var h = p + 1 === o.length ? f : function (e) {
                                            return function () {
                                                c = e, ++r[n], clearTimeout(t), t = setTimeout(s, 1e3)
                                            }
                                        }(l || k(o[p + 1]).action);
                                        e(o[p], h, l, n, p)
                                    }
                                }(o, m, a, f);
                                return
                            }
                            y = k(o, f), n._callbacks[y.key] = n._callbacks[y.key] || [], l(y.key, y.modifiers, {
                                type: y.action
                            }, p, o, h), n._callbacks[y.key][p ? "unshift" : "push"]({
                                callback: a,
                                modifiers: y.modifiers,
                                action: y.action,
                                seq: p,
                                level: h,
                                combo: o
                            })
                        })(e[f], o, a)
                    }, h(e, "keypress", f), h(e, "keydown", f), h(e, "keyup", f)
                }
            }("undefined" != typeof window ? window : null, "undefined" != typeof window ? document : null)
        }
    }
]);