(() => {
    var e = {
            33: (e, t, i) => {
                "use strict";
                i.d(t, {
                    Z: () => _
                });
                var n = function () {
                        if ("undefined" != typeof Map) return Map;

                        function e(e, t) {
                            var i = -1;
                            return e.some((function (e, n) {
                                return e[0] === t && (i = n, !0)
                            })), i
                        }
                        return function () {
                            function t() {
                                this.__entries__ = []
                            }
                            return Object.defineProperty(t.prototype, "size", {
                                get: function () {
                                    return this.__entries__.length
                                },
                                enumerable: !0,
                                configurable: !0
                            }), t.prototype.get = function (t) {
                                var i = e(this.__entries__, t),
                                    n = this.__entries__[i];
                                return n && n[1]
                            }, t.prototype.set = function (t, i) {
                                var n = e(this.__entries__, t);
                                ~n ? this.__entries__[n][1] = i : this.__entries__.push([t, i])
                            }, t.prototype.delete = function (t) {
                                var i = this.__entries__,
                                    n = e(i, t);
                                ~n && i.splice(n, 1)
                            }, t.prototype.has = function (t) {
                                return !!~e(this.__entries__, t)
                            }, t.prototype.clear = function () {
                                this.__entries__.splice(0)
                            }, t.prototype.forEach = function (e, t) {
                                void 0 === t && (t = null);
                                for (var i = 0, n = this.__entries__; i < n.length; i++) {
                                    var s = n[i];
                                    e.call(t, s[1], s[0])
                                }
                            }, t
                        }()
                    }(),
                    s = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
                    r = void 0 !== i.g && i.g.Math === Math ? i.g : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(),
                    o = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(r) : function (e) {
                        return setTimeout((function () {
                            return e(Date.now())
                        }), 1e3 / 60)
                    },
                    a = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
                    l = "undefined" != typeof MutationObserver,
                    h = function () {
                        function e() {
                            this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function (e, t) {
                                var i = !1,
                                    n = !1,
                                    s = 0;

                                function r() {
                                    i && (i = !1, e()), n && l()
                                }

                                function a() {
                                    o(r)
                                }

                                function l() {
                                    var e = Date.now();
                                    if (i) {
                                        if (e - s < 2) return;
                                        n = !0
                                    } else i = !0, n = !1, setTimeout(a, 20);
                                    s = e
                                }
                                return l
                            }(this.refresh.bind(this))
                        }
                        return e.prototype.addObserver = function (e) {
                            ~this.observers_.indexOf(e) || this.observers_.push(e), this.connected_ || this.connect_()
                        }, e.prototype.removeObserver = function (e) {
                            var t = this.observers_,
                                i = t.indexOf(e);
                            ~i && t.splice(i, 1), !t.length && this.connected_ && this.disconnect_()
                        }, e.prototype.refresh = function () {
                            this.updateObservers_() && this.refresh()
                        }, e.prototype.updateObservers_ = function () {
                            var e = this.observers_.filter((function (e) {
                                return e.gatherActive(), e.hasActive()
                            }));
                            return e.forEach((function (e) {
                                return e.broadcastActive()
                            })), e.length > 0
                        }, e.prototype.connect_ = function () {
                            s && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), l ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                                attributes: !0,
                                childList: !0,
                                characterData: !0,
                                subtree: !0
                            })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
                        }, e.prototype.disconnect_ = function () {
                            s && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
                        }, e.prototype.onTransitionEnd_ = function (e) {
                            var t = e.propertyName,
                                i = void 0 === t ? "" : t;
                            a.some((function (e) {
                                return !!~i.indexOf(e)
                            })) && this.refresh()
                        }, e.getInstance = function () {
                            return this.instance_ || (this.instance_ = new e), this.instance_
                        }, e.instance_ = null, e
                    }(),
                    c = function (e, t) {
                        for (var i = 0, n = Object.keys(t); i < n.length; i++) {
                            var s = n[i];
                            Object.defineProperty(e, s, {
                                value: t[s],
                                enumerable: !1,
                                writable: !1,
                                configurable: !0
                            })
                        }
                        return e
                    },
                    d = function (e) {
                        return e && e.ownerDocument && e.ownerDocument.defaultView || r
                    },
                    u = g(0, 0, 0, 0);

                function m(e) {
                    return parseFloat(e) || 0
                }

                function f(e) {
                    for (var t = [], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
                    return t.reduce((function (t, i) {
                        return t + m(e["border-" + i + "-width"])
                    }), 0)
                }
                var v = "undefined" != typeof SVGGraphicsElement ? function (e) {
                    return e instanceof d(e).SVGGraphicsElement
                } : function (e) {
                    return e instanceof d(e).SVGElement && "function" == typeof e.getBBox
                };

                function p(e) {
                    return s ? v(e) ? function (e) {
                        var t = e.getBBox();
                        return g(0, 0, t.width, t.height)
                    }(e) : function (e) {
                        var t = e.clientWidth,
                            i = e.clientHeight;
                        if (!t && !i) return u;
                        var n = d(e).getComputedStyle(e),
                            s = function (e) {
                                for (var t = {}, i = 0, n = ["top", "right", "bottom", "left"]; i < n.length; i++) {
                                    var s = n[i],
                                        r = e["padding-" + s];
                                    t[s] = m(r)
                                }
                                return t
                            }(n),
                            r = s.left + s.right,
                            o = s.top + s.bottom,
                            a = m(n.width),
                            l = m(n.height);
                        if ("border-box" === n.boxSizing && (Math.round(a + r) !== t && (a -= f(n, "left", "right") + r), Math.round(l + o) !== i && (l -= f(n, "top", "bottom") + o)), ! function (e) {
                                return e === d(e).document.documentElement
                            }(e)) {
                            var h = Math.round(a + r) - t,
                                c = Math.round(l + o) - i;
                            1 !== Math.abs(h) && (a -= h), 1 !== Math.abs(c) && (l -= c)
                        }
                        return g(s.left, s.top, a, l)
                    }(e) : u
                }

                function g(e, t, i, n) {
                    return {
                        x: e,
                        y: t,
                        width: i,
                        height: n
                    }
                }
                var y = function () {
                        function e(e) {
                            this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = g(0, 0, 0, 0), this.target = e
                        }
                        return e.prototype.isActive = function () {
                            var e = p(this.target);
                            return this.contentRect_ = e, e.width !== this.broadcastWidth || e.height !== this.broadcastHeight
                        }, e.prototype.broadcastRect = function () {
                            var e = this.contentRect_;
                            return this.broadcastWidth = e.width, this.broadcastHeight = e.height, e
                        }, e
                    }(),
                    b = function (e, t) {
                        var i, n, s, r, o, a, l, h = (n = (i = t).x, s = i.y, r = i.width, o = i.height, a = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object, l = Object.create(a.prototype), c(l, {
                            x: n,
                            y: s,
                            width: r,
                            height: o,
                            top: s,
                            right: n + r,
                            bottom: o + s,
                            left: n
                        }), l);
                        c(this, {
                            target: e,
                            contentRect: h
                        })
                    },
                    w = function () {
                        function e(e, t, i) {
                            if (this.activeObservations_ = [], this.observations_ = new n, "function" != typeof e) throw new TypeError("The callback provided as parameter 1 is not a function.");
                            this.callback_ = e, this.controller_ = t, this.callbackCtx_ = i
                        }
                        return e.prototype.observe = function (e) {
                            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                            if ("undefined" != typeof Element && Element instanceof Object) {
                                if (!(e instanceof d(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                                var t = this.observations_;
                                t.has(e) || (t.set(e, new y(e)), this.controller_.addObserver(this), this.controller_.refresh())
                            }
                        }, e.prototype.unobserve = function (e) {
                            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                            if ("undefined" != typeof Element && Element instanceof Object) {
                                if (!(e instanceof d(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                                var t = this.observations_;
                                t.has(e) && (t.delete(e), t.size || this.controller_.removeObserver(this))
                            }
                        }, e.prototype.disconnect = function () {
                            this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
                        }, e.prototype.gatherActive = function () {
                            var e = this;
                            this.clearActive(), this.observations_.forEach((function (t) {
                                t.isActive() && e.activeObservations_.push(t)
                            }))
                        }, e.prototype.broadcastActive = function () {
                            if (this.hasActive()) {
                                var e = this.callbackCtx_,
                                    t = this.activeObservations_.map((function (e) {
                                        return new b(e.target, e.broadcastRect())
                                    }));
                                this.callback_.call(e, t, e), this.clearActive()
                            }
                        }, e.prototype.clearActive = function () {
                            this.activeObservations_.splice(0)
                        }, e.prototype.hasActive = function () {
                            return this.activeObservations_.length > 0
                        }, e
                    }(),
                    E = "undefined" != typeof WeakMap ? new WeakMap : new n,
                    L = function e(t) {
                        if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function.");
                        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                        var i = h.getInstance(),
                            n = new w(t, i, this);
                        E.set(this, n)
                    };
                ["observe", "unobserve", "disconnect"].forEach((function (e) {
                    L.prototype[e] = function () {
                        var t;
                        return (t = E.get(this))[e].apply(t, arguments)
                    }
                }));
                const _ = void 0 !== r.ResizeObserver ? r.ResizeObserver : L
            },
            523: e => {
                ! function () {
                    "use strict";
                    e.exports = {
                        polyfill: function () {
                            var e = window,
                                t = document;
                            if (!("scrollBehavior" in t.documentElement.style) || !0 === e.__forceSmoothScrollPolyfill__) {
                                var i, n = e.HTMLElement || e.Element,
                                    s = {
                                        scroll: e.scroll || e.scrollTo,
                                        scrollBy: e.scrollBy,
                                        elementScroll: n.prototype.scroll || a,
                                        scrollIntoView: n.prototype.scrollIntoView
                                    },
                                    r = e.performance && e.performance.now ? e.performance.now.bind(e.performance) : Date.now,
                                    o = (i = e.navigator.userAgent, new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(i) ? 1 : 0);
                                e.scroll = e.scrollTo = function () {
                                    void 0 !== arguments[0] && (!0 !== l(arguments[0]) ? f.call(e, t.body, void 0 !== arguments[0].left ? ~~arguments[0].left : e.scrollX || e.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : e.scrollY || e.pageYOffset) : s.scroll.call(e, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : e.scrollX || e.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : e.scrollY || e.pageYOffset))
                                }, e.scrollBy = function () {
                                    void 0 !== arguments[0] && (l(arguments[0]) ? s.scrollBy.call(e, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : f.call(e, t.body, ~~arguments[0].left + (e.scrollX || e.pageXOffset), ~~arguments[0].top + (e.scrollY || e.pageYOffset)))
                                }, n.prototype.scroll = n.prototype.scrollTo = function () {
                                    if (void 0 !== arguments[0])
                                        if (!0 !== l(arguments[0])) {
                                            var e = arguments[0].left,
                                                t = arguments[0].top;
                                            f.call(this, this, void 0 === e ? this.scrollLeft : ~~e, void 0 === t ? this.scrollTop : ~~t)
                                        } else {
                                            if ("number" == typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
                                            s.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
                                        }
                                }, n.prototype.scrollBy = function () {
                                    void 0 !== arguments[0] && (!0 !== l(arguments[0]) ? this.scroll({
                                        left: ~~arguments[0].left + this.scrollLeft,
                                        top: ~~arguments[0].top + this.scrollTop,
                                        behavior: arguments[0].behavior
                                    }) : s.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
                                }, n.prototype.scrollIntoView = function () {
                                    if (!0 !== l(arguments[0])) {
                                        var i = u(this),
                                            n = i.getBoundingClientRect(),
                                            r = this.getBoundingClientRect();
                                        i !== t.body ? (f.call(this, i, i.scrollLeft + r.left - n.left, i.scrollTop + r.top - n.top), "fixed" !== e.getComputedStyle(i).position && e.scrollBy({
                                            left: n.left,
                                            top: n.top,
                                            behavior: "smooth"
                                        })) : e.scrollBy({
                                            left: r.left,
                                            top: r.top,
                                            behavior: "smooth"
                                        })
                                    } else s.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
                                }
                            }

                            function a(e, t) {
                                this.scrollLeft = e, this.scrollTop = t
                            }

                            function l(e) {
                                if (null === e || "object" != typeof e || void 0 === e.behavior || "auto" === e.behavior || "instant" === e.behavior) return !0;
                                if ("object" == typeof e && "smooth" === e.behavior) return !1;
                                throw new TypeError("behavior member of ScrollOptions " + e.behavior + " is not a valid value for enumeration ScrollBehavior.")
                            }

                            function h(e, t) {
                                return "Y" === t ? e.clientHeight + o < e.scrollHeight : "X" === t ? e.clientWidth + o < e.scrollWidth : void 0
                            }

                            function c(t, i) {
                                var n = e.getComputedStyle(t, null)["overflow" + i];
                                return "auto" === n || "scroll" === n
                            }

                            function d(e) {
                                var t = h(e, "Y") && c(e, "Y"),
                                    i = h(e, "X") && c(e, "X");
                                return t || i
                            }

                            function u(e) {
                                for (; e !== t.body && !1 === d(e);) e = e.parentNode || e.host;
                                return e
                            }

                            function m(t) {
                                var i, n, s, o, a = (r() - t.startTime) / 468;
                                o = a = a > 1 ? 1 : a, i = .5 * (1 - Math.cos(Math.PI * o)), n = t.startX + (t.x - t.startX) * i, s = t.startY + (t.y - t.startY) * i, t.method.call(t.scrollable, n, s), n === t.x && s === t.y || e.requestAnimationFrame(m.bind(e, t))
                            }

                            function f(i, n, o) {
                                var l, h, c, d, u = r();
                                i === t.body ? (l = e, h = e.scrollX || e.pageXOffset, c = e.scrollY || e.pageYOffset, d = s.scroll) : (l = i, h = i.scrollLeft, c = i.scrollTop, d = a), m({
                                    scrollable: l,
                                    method: d,
                                    startTime: u,
                                    startX: h,
                                    startY: c,
                                    x: n,
                                    y: o
                                })
                            }
                        }
                    }
                }()
            },
            832: (e, t, i) => {
                i(658).debounce;
                const n = i(658).throttle,
                    s = i(33).Z;
                var r = function () {
                    const e = {};
                    this.trigger = (t, i) => {
                        let n = e[t],
                            s = i;
                        if (n && n.length)
                            for (let e = 0; e < n.length; e++) n[e].call(null, s)
                    }, this.addListener = (t, i) => {
                        e[t] || (e[t] = []), e[t].push(i)
                    }, this.on = (e, t) => {
                        this.addListener(e, t)
                    }, this.off = (e, t) => {
                        this.removeListener(e, t)
                    }, this.removeListener = (t, i) => {
                        let n = e[t];
                        if (n) {
                            for (var s = 0; s < n.length; s++) n[s] == i && n.splice(s, 1);
                            0 == e[t].length && delete e[t]
                        }
                    }
                };
                e.exports = {
                    Events: r,
                    ClientEvents: function (e) {
                        this.options = e || {};
                        let t = null;
                        t = document.querySelector("#main"), this.init = () => {
                            this.events = new r, this.trigger = this.events.trigger, this.addListener = this.events.addListener, this.on = this.events.on, this.removeListener = this.events.removeListener, this.off = this.events.off, this.resizeObserver = new s(this.onWindowResizeEnd), this.resizeObserver.observe(t), window.addEventListener("resize", this.onWindowResizeEnd), t.addEventListener("scroll", this.onScroll)
                        }, this.onScroll = n((() => {
                            const e = t.scrollTop,
                                n = i(e);
                            this.scrollY = e, this.trigger("scroll", this.scrollY), n != this.scrollDir && (this.scrollDir = n, this.trigger("scrolldir", this.scrollDir))
                        }), 16.666666666666668), this.onWindowResizeEnd = () => {
                            this.trigger("windowresizeend", {
                                width: window.innerWidth,
                                height: window.innerHeight
                            })
                        };
                        var i = e => e > this.scrollY ? "down" : e < this.scrollY ? "up" : "none";
                        this.init()
                    }
                }
            },
            794: (e, t, i) => {
                const n = i(658).map,
                    s = i(832).ClientEvents,
                    r = i(658).clamp,
                    o = i(658).debounce,
                    a = i(523),
                    l = (d = window.chrome, u = window.navigator, m = u.vendor, f = void 0 !== window.opr, v = u.userAgent.indexOf("Edge") > -1, u.userAgent.match("CriOS"), null != d && "Google Inc." === m && !1 === f && !1 === v),
                    h = !("scrollBehavior" in document.documentElement.style),
                    c = () => document.querySelector("#main");
                var d, u, m, f, v;
                let p = !1;
                const g = o((e => {
                        if (p = e, p) {
                            const e = c(),
                                t = e.scrollTop;
                            if (c().style = "scroll-snap-type: y mandatory", h) {
                                let i = 5;
                                e.scrollTop = t;
                                const n = () => {
                                    i -= 1, e.scrollTop = t, i > 0 && requestAnimationFrame(n)
                                };
                                requestAnimationFrame(n)
                            }
                        } else c().style = "scroll-snap-type: none"
                    }), 100, !0),
                    y = e => {
                        e !== p && g(e)
                    };
                let b = !1,
                    w = !1;
                const E = [];
                let L = 0;
                e.exports = function (e) {
                    this.config = e;
                    const t = e.fps || 30,
                        i = 1e3 / t;
                    var o = 0,
                        d = () => this.renderer.clientWidth < 640 ? this.config.sDataMobile : this.config.sData,
                        u = () => this.renderer.clientWidth < 640 ? {
                            width: this.config.mobileRes || 640,
                            height: this.config.mobileRes || 640
                        } : {
                            width: 1920,
                            height: 1080
                        },
                        m = () => {
                            const e = d();
                            if (e && e.frames) {
                                var t, i = this.config.keyframes.length,
                                    s = n(this.time, 0, 1, 0, i - 1),
                                    o = Math.min(Math.floor(s), i - 1),
                                    a = s - o,
                                    l = this.config.keyframes[o];
                                return t = o < i - 1 ? this.config.keyframes[o + 1] : e.frames.length - 1, f(r(Math.round(s), 0, i - 1)), Math.round(l + (t - l) * a)
                            }
                            return 0
                        },
                        f = e => {
                            if (e === this.lastKeyframe) return;
                            this.lastKeyframe = e, this.element.setAttribute("data-scroll-direction", this.scrollDir);
                            let t = this.element.querySelector('.sequence-item[data-state="outgoing"]');
                            t && t.setAttribute("data-state", "");
                            let i = this.element.querySelector('.sequence-item[data-state="activated"]');
                            i && i.setAttribute("data-state", "outgoing");
                            let n = this.element.querySelector(`.sequence-item[data-index="${e}"]`);
                            n && n.setAttribute("data-state", "activated")
                        },
                        v = () => {
                            this.element.setAttribute("data-in-viewport", !0), this.scrollDir ? "down" == this.scrollDir || this.scrollDir : this.time = 0
                        },
                        g = () => {
                            this.element.setAttribute("data-in-viewport", !1), "down" == this.scrollDir || this.scrollDir
                        },
                        _ = e => {
                            void 0 !== e && (this.scrollY = e), e && 0 === Object.keys(e).length && e.constructor === Object && (this.scrollY = 0);
                            let t = this.element.getAttribute("data-renderer-position");
                            this.scrollY > this.yMax ? "bottom" != t && (this.time = 1, this.bottom()) : this.scrollY < this.yMin ? ("top" != t && (this.time = 0, this.top()), this.scrollY < this.yMin - .5 * this.viewport.height ? f(null) : f(0)) : (this.time = r((this.scrollY - this.yMin) / (this.sectionHeight - this.viewport.height), 0, 1), this.time > .95 && (this.time = 1), "fixed" != t && this.fix())
                        },
                        q = () => {
                            this.viewport = x();
                            var e = this.scrollContent.getBoundingClientRect();
                            this.sectionHeight = e.height, this.yMin = this.scrollY + this.element.getBoundingClientRect().top, this.yMax = this.yMin + this.element.clientHeight - window.innerHeight, this.rendererCanvas.width = this.renderer.clientWidth, this.rendererCanvas.height = this.renderer.clientHeight, this.renderParams = S();
                            const t = d();
                            this.sData !== t && (this.sData = t, t && (this.lastImg = null, M())), document.documentElement.style.setProperty("--vh", `${document.documentElement.getBoundingClientRect().height}px`), this.events.onScroll()
                        },
                        S = () => {
                            const e = u();
                            let t = this.rendererCanvas.height / e.height,
                                i = this.rendererCanvas.height,
                                n = e.width * t;
                            if (this.viewport.width > n) {
                                let e = this.rendererCanvas.width / n;
                                n *= e, i *= e
                            }
                            let s = (this.rendererCanvas.width - n) / 2,
                                r = (this.rendererCanvas.height - i) / 2;
                            return i = Math.floor(i), n = Math.floor(n), s = Math.floor(s), r = Math.floor(r), {
                                width: n,
                                height: i,
                                x: s,
                                y: r
                            }
                        },
                        x = () => {
                            let e = {
                                height: window.innerHeight,
                                width: window.innerWidth,
                                y: {
                                    min: this.scrollY,
                                    max: this.scrollY + window.innerHeight
                                }
                            };
                            return e.y.mid = e.y.min + e.height / 2, e
                        },
                        M = () => {
                            this.frameCache || (this.frameCache = {});
                            let e = this.events;
                            const t = d();
                            if (this.frameCache[t.name] = this.frameCache[t.name] || [], this.frames = this.frameCache[t.name], this.frames.length > 0) return;
                            let i = t.frames,
                                n = t.frames.length;
                            for (var s = 0; s < n; s++) {
                                let t = i[s];
                                var r = new Image;
                                let n = {
                                    index: s,
                                    frameURL: t,
                                    img: r
                                };
                                this.frames[s] = n;
                                let a = this.frames[s];
                                var o = () => {
                                    r.removeEventListener("load", o), e.trigger("frameloaded", a)
                                };
                                r.addEventListener("load", o), r.src = t
                            }
                        };
                    this.renderLoop = e => {
                        let n = null;
                        void 0 !== this.lastTimestamp && void 0 !== e && (n = (e - this.lastTimestamp) / 1e3), this.lastTimestamp = e;
                        const s = m(),
                            a = (this.keyframes[0], this.keyframes[this.keyframes.length - 1]);
                        if ((this.time >= 1 || s === a && this.currentFrame === a) && this.config.endsSnap ? y(!1) : o > 0 && this.time < 1 && y(!0), 0 !== o || s != this.currentFrame || !this.fresh) {
                            if (null != s && (this.currentFrame != s || !this.fresh)) {
                                let e = s - this.currentFrame;
                                e = null !== n ? Math.round(r(e, -n * t, n * t)) : r(e, -1, 1), this.currentFrame += e, k(this.currentFrame)
                            }
                            setTimeout((() => {
                                requestAnimationFrame(this.renderLoop)
                            }), i)
                        }
                    }, this.top = () => {
                        this.element.setAttribute("data-renderer-position", "top"), this.deactivate()
                    }, this.bottom = () => {
                        this.element.setAttribute("data-renderer-position", "bottom"), this.deactivate()
                    }, this.fix = () => {
                        this.element.setAttribute("data-renderer-position", "fixed"), this.activate(), y(!0)
                    }, this.activate = () => {
                        1 === (o += 1) && this.renderLoop(), document.addEventListener("keyup", A)
                    }, this.deactivate = () => {
                        o > 0 && (o -= 1), document.removeEventListener("keyup", A)
                    };
                    var A = e => {
                            switch (e.key) {
                                case "ArrowDown":
                                case "ArrowRight":
                                    e.preventDefault(), e.stopPropagation(), T();
                                    break;
                                case "ArrowUp":
                                case "ArrowLeft":
                                    e.preventDefault(), e.stopPropagation(), O()
                            }
                        },
                        T = () => {
                            let e = this.element.querySelectorAll(".sequence-item").length,
                                t = this.element.querySelector('.sequence-item[data-state="activated"]');
                            parseInt(t.getAttribute("data-index")) == e - 1 ? this.scrollElement.scrollBy(0, window.innerHeight) : this.scrollElement.scrollBy(0, 1)
                        },
                        O = () => {
                            let e = this.element.querySelector('.sequence-item[data-state="activated"]');
                            0 == parseInt(e.getAttribute("data-index")) ? this.scrollElement.scrollBy(0, -window.innerHeight) : this.scrollElement.scrollBy(0, -1)
                        };
                    this.fresh = !1;
                    var k = e => {
                        this.fresh = !!(this.frames[e] && this.frames[e].img && this.frames[e].img.complete), this.fresh && (this.lastImg = this.frames[e].img || this.lastImg), this.lastImg ? this.rendererCTX.drawImage(this.lastImg, this.renderParams.x, this.renderParams.y, this.renderParams.width, this.renderParams.height) : (this.rendererCTX.fillStyle = "#191919", this.rendererCTX.fillRect(this.renderParams.x, this.renderParams.y, this.renderParams.width, this.renderParams.height))
                    };
                    this.renderFrame = k, (() => {
                        E.push(this), this.events = new s, this.scrollElement = c(), this.element = this.config.element, this.keyframes = this.config.keyframes, this.length = this.keyframes.length, this.scrollContent = this.element.querySelector(".snap-sequence-scroll-content"), this.renderer = this.element.querySelector(".snap-sequence-renderer"), this.rendererCanvas = this.renderer.querySelector(".snap-sequence-canvas"), this.rendererCTX = this.rendererCanvas.getContext("2d", {
                            alpha: !1
                        }), this.scrollY = 0, q(), this.currentFrame = 0, this.lastImg = null, this.lastKeyframe = null, _(), (() => {
                            if (w) return;
                            w = !0, a.polyfill();
                            const e = c();
                            (l || h) && e.addEventListener("wheel", (t => {
                                const i = window.innerHeight,
                                    n = e.scrollTop - t.wheelDelta,
                                    s = (Math.round(e.scrollTop / i) - Math.sign(t.wheelDelta)) * i;
                                if (!(Math.abs(t.wheelDeltaY) < 10 && Math.abs(t.wheelDeltaX) > 10)) return L > 0 ? (t.preventDefault(), void t.stopPropagation()) : void(E.some((e => e.yMin < n)) && E.some((e => e.yMax > n)) && (t.preventDefault(), t.stopPropagation(), ((e, t) => {
                                    b || (b = !0, h ? c().style = "scroll-snap-type: none" : y(!0), L += 1, e.scrollTo({
                                        left: 0,
                                        top: t,
                                        behavior: "smooth"
                                    }), window.setTimeout((() => {
                                        if (p) {
                                            const e = c(),
                                                t = e.scrollTop;
                                            if (e.style = "scroll-snap-type: y mandatory", h) {
                                                let i = 5;
                                                e.scrollTop = t;
                                                const n = () => {
                                                    i -= 1, e.scrollTop = t, i > 0 && requestAnimationFrame(n)
                                                };
                                                requestAnimationFrame(n)
                                            }
                                        }
                                    }), 500), window.setTimeout((() => {
                                        b = !1, L -= 1
                                    }), 1500))
                                })(e, s)))
                            }), {
                                passive: !1
                            })
                        })(), this.time = 0;
                        let e = this.frames[0];
                        var t = () => {
                            e.img.removeEventListener("load", t), k(e.index)
                        };
                        e.img.addEventListener("load", t), this.events.on("windowresizeend", (() => {
                            q(), k(this.currentFrame)
                        })), this.events.on("scroll", _), this.events.on("scrolldir", (e => {
                            this.scrollDir = e
                        })), this.events.on("frameloaded", (e => {
                            e.index === this.currentFrame && k(e.index)
                        })), new IntersectionObserver((e => {
                            e[0].isIntersecting ? v() : g()
                        })).observe(this.element)
                    })()
                }
            },
            392: (e, t, i) => {
                const n = i(651),
                    s = i(832).Events,
                    r = i(658).map,
                    o = i(658).clamp;
                var a = function (e) {
                        this.el = e.el;
                        var t, i = !1,
                            n = e => {
                                let t = this.slider.clientWidth,
                                    i = r(e.x, 0, t, this.min, this.max);
                                this.valuePercentage = r(e.x, 0, t, 0, 1), this.handleX = e.x;
                                let n = i - i % this.incrementSize;
                                this.value = n, this.events.trigger("render")
                            },
                            a = () => {
                                if ("stud-height" == this.id) {
                                    let e = Math.floor(this.value / 12),
                                        t = Math.floor(this.value) % 12;
                                    this.currentValueDisplay.innerHTML = `${e}'${t}"`
                                } else "lineal-feet" == this.id ? this.currentValueDisplay.innerHTML = this.value.toLocaleString() : this.currentValueDisplay.innerHTML = this.value;
                                l(), this.events.trigger("update")
                            },
                            l = () => {
                                this.el.querySelector(".slider-line-progress").style.width = 100 * this.valuePercentage + "%"
                            },
                            h = e => {
                                e.preventDefault(), e.stopPropagation(), i = !0;
                                var n = Math.round(this.slider.clientWidth),
                                    s = (this.max - this.min) / this.incrementSize;
                                let r = e.clientX;
                                null == r && (r = e.touches && e.touches[0] ? e.touches[0].clientX : e.pageX), t = {
                                    xStart: r,
                                    handleXStart: this.handle.getBoundingClientRect().left - this.slider.getBoundingClientRect().left,
                                    max: n,
                                    increments: s
                                }, document.addEventListener("pointermove", c), document.addEventListener("pointerup", d)
                            },
                            c = e => {
                                if (i) {
                                    let i = e.pageX - t.xStart,
                                        n = t.handleXStart + i;
                                    n = o(n, 0, t.max), this.handle.style.transform = `translate(${n}px, -50%)`, this.events.trigger("onhandledragmove", {
                                        x: n
                                    })
                                }
                            },
                            d = e => {
                                i = !1, document.removeEventListener("pointermove", c), document.removeEventListener("pointerup", d), t = null
                            };
                        this.layout = () => {
                            l();
                            let e = this.slider.clientWidth * this.valuePercentage;
                            this.handle.style.transform = `translate(${e}px, -50%)`
                        }, (() => {
                            this.events = new s, this.id = this.el.id, this.min = parseInt(this.el.querySelector(".min").getAttribute("data-value")), this.max = parseInt(this.el.querySelector(".max").getAttribute("data-value"));
                            let e = this.el.getAttribute("data-increment-size");
                            this.incrementSize = e ? parseInt(e) : 1, this.slider = this.el.querySelector(".slider-control"), this.handle = this.el.querySelector(".handle-location"), this.currentValueDisplay = this.el.querySelector(".current-value-display"), this.value = this.min, this.valueRaw = r(this.value, this.min, this.max, 0, this.slider.clientWidth), this.handle.addEventListener("mousedown", h), this.handle.addEventListener("touchstart", h), this.events.on("render", a), this.events.on("onhandledragmove", n), this.events.trigger("render")
                        })()
                    },
                    l = function (e) {
                        this.el = e;
                        var t = e => {
                            var t = this.el.querySelector(".radio-value.current");
                            t && t.classList.remove("current");
                            var i = this.choices[e];
                            i.classList.add("current");
                            var n = parseFloat(i.getAttribute("data-value"));
                            this.value = n, this.events.trigger("update")
                        };
                        (() => {
                            this.events = new s, this.id = this.el.id, this.choices = this.el.querySelectorAll(".radio-value");
                            var e = parseInt(this.el.getAttribute("data-default-index"));
                            t(e);
                            for (let e = 0; e < this.choices.length; e++) this.choices[e].addEventListener("click", (i => {
                                i.preventDefault(), t(e)
                            }))
                        })()
                    };
                e.exports = function () {
                    var e = () => {
                            var e = this.el.querySelector(".advanced-content");
                            t(), e.classList.add("expanded")
                        },
                        t = () => {
                            var e = this.el.querySelector(".advanced-content-wrapper"),
                                t = this.el.querySelector(".advanced-content-controls").clientHeight;
                            e.style.height = `${t}px`
                        },
                        i = () => {
                            var e = this.el.querySelector(".advanced-content"),
                                t = e.querySelector(".advanced-content-wrapper");
                            e.classList.remove("expanded"), t.style.height = "0px"
                        },
                        s = () => {
                            var e = this.params["hourly-rate"].value,
                                t = this.params["stud-height"].value,
                                i = this.params["lineal-feet"].value,
                                n = this.params["material-thickness"].value,
                                s = this.params["stud-web-size"].value,
                                r = this.params["stud-flange-size"].value,
                                o = this.params["stud-spacing"].value,
                                a = Math.round((50 * e + (t * i + n * r * o) / s) / 15),
                                l = Math.round(1.18 * a),
                                h = Math.round(a / 50),
                                c = Math.round(l / 50),
                                d = this.el.querySelector(".calculator-results"),
                                u = d.querySelector(".results-table.installed-cost"),
                                m = u.querySelector(".row.hyperframe .value-number"),
                                f = u.querySelector(".row.traditional .value-number"),
                                v = d.querySelector(".results-table.installation-time"),
                                p = v.querySelector(".row.hyperframe .value-number"),
                                g = v.querySelector(".row.traditional .value-number");
                            m.innerHTML = a.toLocaleString(), f.innerHTML = l.toLocaleString(), p.innerHTML = h.toLocaleString(), g.innerHTML = c.toLocaleString()
                        };
                    (() => {
                        this.mc = new n({
                            launchers: document.querySelectorAll("#calculator-launcher")
                        }), this.mc.events.on("open-start", (() => {
                            this.params = {}, this.el = this.mc.modal.element, this.params["hourly-rate"] = new a({
                                el: this.el.querySelector("#hourly-rate")
                            }), this.params["stud-height"] = new a({
                                el: this.el.querySelector("#stud-height")
                            }), this.params["lineal-feet"] = new a({
                                el: this.el.querySelector("#lineal-feet")
                            }), this.params["material-thickness"] = new l(this.el.querySelector("#material-thickness")), this.params["stud-web-size"] = new l(this.el.querySelector("#stud-web-size")), this.params["stud-flange-size"] = new l(this.el.querySelector("#stud-flange-size")), this.params["stud-spacing"] = new l(this.el.querySelector("#stud-spacing")), this.el.querySelector(".advanced-content").querySelector("a.advanced").addEventListener("click", (t => {
                                t.preventDefault(), this.expanded ? (i(), this.expanded = !1) : (e(), this.expanded = !0)
                            }));
                            for (const [e, t] of Object.entries(this.params)) this.params[e].events.on("update", s);
                            s()
                        })), this.mc.events.on("windowresizeend", (() => {
                            if (this.expanded && t(), this.params)
                                for (const [e] of Object.entries(this.params)) {
                                    let t = this.params[e];
                                    t.layout && t.layout()
                                }
                        }))
                    })()
                }
            },
            525: e => {
                e.exports = function (e) {
                    this.config = e, this.leftNavClick = () => {
                        this.slider.scrollTo({
                            left: this.slider.scrollLeft - 500,
                            top: 0,
                            behavior: "smooth"
                        })
                    }, this.rightNavClick = () => {
                        this.slider.scrollTo({
                            left: this.slider.scrollLeft + 500,
                            top: 0,
                            behavior: "smooth"
                        })
                    }, this.setCardBubblePosition = e => {
                        const t = e.currentTarget,
                            i = t.querySelector(".cursor-bubble"),
                            n = t.getBoundingClientRect(),
                            s = e.clientX - n.left,
                            r = e.clientY - n.top;
                        if (i) {
                            let e = s - i.clientWidth / 2,
                                t = r - i.clientHeight / 2;
                            i.style.left = `${e}px`, i.style.top = `${t}px`
                        }
                    }, this.addCardBubbleListeners = () => {
                        this.cards.forEach((e => {
                            e.addEventListener("mousemove", this.setCardBubblePosition)
                        }))
                    }, (() => {
                        this.element = this.config.el, this.slider = this.element.querySelector(".slider-container"), this.leftNav = this.element.querySelector(".left-nav"), this.rightNav = this.element.querySelector(".right-nav"), this.cards = this.element.querySelectorAll(".card"), this.leftNav.addEventListener("click", this.leftNavClick), this.rightNav.addEventListener("click", this.rightNavClick), this.addCardBubbleListeners()
                    })()
                }
            },
            172: (e, t, i) => {
                const n = i(832).ClientEvents;
                e.exports = function () {
                    this.open = (t, n, s = !0) => {
                        document.body.setAttribute("data-modal-active", !0);
                        var r = e(n);
                        this.element = r.querySelector(".hf-modal"), this.element.style.paddingLeft = s ? "0" : "17%";
                        var o = this.element.querySelector(".modal-content"),
                            a = this.element.querySelector(".modal-content h1"),
                            l = this.element.querySelector(".modal-content-body"),
                            h = this.element.querySelector(".close");
                        a && a.setAttribute("data-revealed", "true"), l && l.setAttribute("data-revealed", "true");
                        var c = () => {
                            this.element.setAttribute("data-modal-animation", "none"), this.element.removeEventListener("animationend", c), this.element.addEventListener("click", this.close), h.addEventListener("click", this.close), document.addEventListener("keyup", i)
                        };
                        h.addEventListener("animationend", c), this.element.setAttribute("data-modal-animation", "slide-in"), o.addEventListener("click", (function (e) {
                            e.stopPropagation()
                        })), this.element.setAttribute("data-open", !0), document.body.appendChild(r)
                    };
                    var e = e => {
                        const t = new DocumentFragment,
                            i = document.createElement("div");
                        i.classList.add("hf-modal", "offset-20");
                        const n = document.createElement("div");
                        n.classList.add("container");
                        const s = document.createElement("div");
                        return s.classList.add("circle-button", "s", "close"), n.innerHTML = e, n.querySelector(".modal-content").appendChild(s), i.appendChild(n), t.appendChild(i), t
                    };
                    this.close = () => {
                        var e = () => {
                            this.element.setAttribute("data-modal-animation", "none"), this.element.removeEventListener("animationend", e), document.body.removeChild(this.element)
                        };
                        this.element.addEventListener("animationend", e), this.element.setAttribute("data-modal-animation", "slide-out"), document.removeEventListener("keyup", i), this.element.setAttribute("data-open", !1), document.body.setAttribute("data-modal-active", !1)
                    };
                    var t = () => "true" == this.element.getAttribute("data-open"),
                        i = e => {
                            if (t()) switch (e.key) {
                                case "Escape":
                                    this.close()
                            }
                        };
                    (() => {
                        this.events = new n
                    })()
                }
            },
            651: (e, t, i) => {
                const n = i(832).ClientEvents;

                function s(e) {
                    this.config = e;
                    var t = () => {
                        let e = window.matchMedia("(max-width: 767px)");
                        this.isMobile = e.matches
                    };
                    this.open = () => new Promise(((e, t) => {
                        var i, n = t => {
                            t.target == t.currentTarget && (this.content.removeEventListener("transitionend", n), this.backdrop.addEventListener("click", (() => {
                                this.config.events.trigger("close-requested")
                            })), this.closeButton.addEventListener("click", (e => {
                                e.preventDefault(), e.stopPropagation(), this.config.events.trigger("close-requested")
                            })), this.config.events.trigger("open"), e())
                        };
                        this.content.addEventListener("transitionend", n), this.config.events.trigger("open-start"), i = () => {
                            this.element.setAttribute("data-open", !0)
                        }, requestAnimationFrame((() => {
                            setTimeout(i)
                        }))
                    })), this.close = () => new Promise(((e, i) => {
                        var n = t => {
                            t.target == t.currentTarget && (this.backdrop.removeEventListener("transitionend", n), this.config.events.trigger("closed"), e())
                        };
                        this.config.events.off("windowresizeend", t), this.backdrop.addEventListener("transitionend", n), this.config.events.trigger("close-start"), this.element.setAttribute("data-open", !1)
                    })), (() => {
                        this.element = document.createElement("div"), this.element.classList.add("hypermodal"), this.config.style && this.element.setAttribute("data-style", this.config.style), this.content = document.createElement("div"), this.content.classList.add("hypermodal-content"), this.element.appendChild(this.content), this.content.innerHTML = this.config.content, this.backdrop = document.createElement("div"), this.backdrop.classList.add("hypermodal-backdrop"), this.element.prepend(this.backdrop), this.element.setAttribute("data-animation", "slide-in"), this.closeButton = document.createElement("div"), this.closeButton.classList.add("circle-button", "s", "close"), this.content.appendChild(this.closeButton), this.modalBody = this.element.querySelector(".hypermodal-content-body"), this.scrollElement = this.modalBody, this.scrollElementMobile = this.element.querySelector(".hypermodal-content"), document.body.appendChild(this.element), t(), this.config.events.on("windowresizeend", t)
                    })()
                }
                e.exports = function (e) {
                    this.config = e || {};
                    var t = e => {
                            if (this.launchers = e, this.launchers && this.launchers.length)
                                for (let e = 0; e < this.launchers.length; e++) this.launchers[e].addEventListener("click", i)
                        },
                        i = e => {
                            e.preventDefault();
                            let t = e.currentTarget,
                                i = t.querySelector('script[type="text/template"').innerHTML,
                                n = t.getAttribute("data-modal-style");
                            this.openModal({
                                content: i,
                                style: n,
                                events: this.events
                            })
                        };
                    this.openModal = e => {
                        this.modal || (document.body.setAttribute("data-modal-open", !0), this.modal = new s(e), this.modal.open().then((() => {
                            document.addEventListener("keyup", o)
                        })), document.addEventListener("keyup", o))
                    }, this.closeModal = () => {
                        document.removeEventListener("keyup", o), this.modal.close().then((() => {
                            document.body.removeChild(this.modal.element), this.modal = null
                        })), document.body.setAttribute("data-modal-open", !1)
                    };
                    var r = () => this.modal && "true" == this.modal.element.getAttribute("data-open"),
                        o = e => {
                            if (r()) switch (e.key) {
                                case "Escape":
                                    this.closeModal()
                            }
                        };
                    (() => {
                        this.events = new n, t(this.config.launchers), this.events.on("close-requested", this.closeModal)
                    })()
                }
            },
            658: e => {
                function t(e, t) {
                    return e.filter((e => !t.includes(e)))
                }
                e.exports = {
                    deepclone: function (e) {
                        return Object.assign({}, e)
                    },
                    diff: t,
                    uniques: function (e, i) {
                        let n = t(e, i),
                            s = t(i, e);
                        return n.concat(s)
                    },
                    intersection: function (e, t) {
                        return e.filter((e => t.includes(e)))
                    },
                    map: function (e, t, i, n, s) {
                        return (e - t) * (s - n) / (i - t) + n
                    },
                    lerp: function (e, t, i) {
                        return (1 - i) * e + i * t
                    },
                    debounce: function (e, t, i) {
                        var n;
                        return function () {
                            var s = this,
                                r = arguments,
                                o = function () {
                                    n = null, i || e.apply(s, r)
                                },
                                a = i && !n;
                            clearTimeout(n), n = setTimeout(o, t), a && e.apply(s, r)
                        }
                    },
                    throttle: function (e, t, i) {
                        var n, s, r, o, a = 0;
                        i || (i = {});
                        var l = function () {
                                a = !1 === i.leading ? 0 : Date.now(), n = null, o = e.apply(s, r), n || (s = r = null)
                            },
                            h = function () {
                                var h = Date.now();
                                a || !1 !== i.leading || (a = h);
                                var c = t - (h - a);
                                return s = this, r = arguments, c <= 0 || c > t ? (n && (clearTimeout(n), n = null), a = h, o = e.apply(s, r), n || (s = r = null)) : n || !1 === i.trailing || (n = setTimeout(l, c)), o
                            };
                        return h.cancel = function () {
                            clearTimeout(n), a = 0, n = s = r = null
                        }, h
                    },
                    clamp: function (e, t, i) {
                        return Math.max(Math.min(e, Math.max(t, i)), Math.min(t, i))
                    },
                    EasingFunctions: {
                        linear: e => e,
                        easeInQuad: e => e * e,
                        easeOutQuad: e => e * (2 - e),
                        easeInOutQuad: e => e < .5 ? 2 * e * e : (4 - 2 * e) * e - 1,
                        easeInCubic: e => e * e * e,
                        easeOutCubic: e => --e * e * e + 1,
                        easeInOutCubic: e => e < .5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1,
                        easeInQuart: e => e * e * e * e,
                        easeOutQuart: e => 1 - --e * e * e * e,
                        easeInOutQuart: e => e < .5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e,
                        easeInQuint: e => e * e * e * e * e,
                        easeOutQuint: e => 1 + --e * e * e * e * e,
                        easeInOutQuint: e => e < .5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e
                    }
                }
            }
        },
        t = {};

    function i(n) {
        var s = t[n];
        if (void 0 !== s) return s.exports;
        var r = t[n] = {
            exports: {}
        };
        return e[n](r, r.exports, i), r.exports
    }
    i.d = (e, t) => {
        for (var n in t) i.o(t, n) && !i.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
        })
    }, i.g = function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
        const e = i(794),
            t = i(525),
            n = (i(172), i(651)),
            s = i(392),
            r = i(658).lerp,
            o = i(658).map,
            a = i(658).clamp;

        function l() {
            var e = document.querySelector("#sdata");
            if (e) return JSON.parse(e.innerHTML);
            throw new Error("missing sequence data")
        }
        var h = function () {
                (() => {
                    this.element = document.querySelector("#intro");
                    let t = l()["00-intro"],
                        i = l()["00-intro-mobile"];
                    this.sequence = new e({
                        element: this.element,
                        sData: t,
                        sDataMobile: i,
                        keyframes: [58, 104, 142, 159, 190],
                        fps: 45,
                        addedScreenfuls: 1,
                        beginsSnap: !0
                    })
                })()
            },
            c = function () {
                var t, i, n, s;
                let h = 0,
                    c = [44, 161, 230];
                var d = () => {
                        let e = this.controls.getBoundingClientRect();
                        i = e.width, n = e.left, s = this.knob.getBoundingClientRect().width / 2
                    },
                    u = () => {
                        this.controls = this.element.querySelector(".snap-slider"), this.knobPosition = this.controls.querySelector(".knob-position"), this.knob = this.knobPosition.querySelector(".knob"), d(), this.sequence.events.on("windowresizeend", d), this.knob.addEventListener("mousedown", p), this.knob.addEventListener("touchstart", m)
                    },
                    m = e => {
                        1 === e.touches.length && (e.preventDefault(), e.stopPropagation(), t = !0, e.touches[0].clientX, e.touches[0].clientY, document.addEventListener("touchmove", f), document.addEventListener("touchend", v), this.sequence.activate(), b())
                    },
                    f = e => {
                        if (1 !== e.touches.length && v(e), t) {
                            let t = e.touches[0],
                                o = a(t.clientX - n, 0, i);
                            h = r(h, o, .3), this.knobPosition.style.left = `${h}px`, h + s > i - 20 ? this.controls.setAttribute("data-state", "complete") : this.controls.setAttribute("data-state", "rendering")
                        }
                    },
                    v = e => {
                        t = !1, document.removeEventListener("touchmove", f), document.removeEventListener("touchend", v);
                        let s = 1 === e.touches.length ? a(e.touches[0].clientX - n, 0, i) : h;
                        s < 10 && (s = 0, w(230)), s > i - 50 && (s = i, w(this.sequence.frames.length - 1)), this.knobPosition.style.left = `${s}px`, this.sequence.deactivate()
                    },
                    p = e => {
                        e.preventDefault(), e.stopPropagation(), t = !0, e.clientX, e.clientY, document.addEventListener("mouseup", y), document.addEventListener("mousemove", g), this.sequence.activate(), b()
                    },
                    g = e => {
                        if (t) {
                            let t = a(e.clientX - n, 0, i);
                            h = r(h, t, .3), this.knobPosition.style.left = `${h}px`, h + s > 380 ? this.controls.setAttribute("data-state", "complete") : this.controls.setAttribute("data-state", "rendering")
                        }
                    },
                    y = e => {
                        t = !1, document.removeEventListener("mousemove", g), document.removeEventListener("mouseup", y);
                        let s = a(e.clientX - n, 0, i);
                        s < 10 && (s = 0, w(230)), s > i - 50 && (s = i, w(this.sequence.frames.length - 1)), this.knobPosition.style.left = `${s}px`, this.sequence.deactivate()
                    },
                    b = () => {
                        if (!t) return;
                        let e = this.sequence.frames.length,
                            n = o(h, 0, i, 230, e);
                        n = Math.floor(n), this.sequence.frames && this.sequence.frames.length && w(n), setTimeout((() => {
                            requestAnimationFrame(b)
                        }), 1e3 / 60)
                    },
                    w = e => {
                        c[c.length - 1] = e, this.sequence.currentFrame = e, this.sequence.renderFrame(e)
                    };
                (() => {
                    this.element = document.querySelector("#install-on-site");
                    let t = l()["01-no-tools"],
                        i = l()["01-no-tools-mobile"];
                    this.sequence = new e({
                        element: this.element,
                        sData: t,
                        sDataMobile: i,
                        keyframes: c,
                        fps: 45,
                        endsSnap: !0
                    }), this.sequence.events.on("windowresizeend", d), u()
                })()
            };
        ! function () {
            new h, new c;
            var e = new t({
                el: document.querySelector("#benefits")
            });
            e.mc = new n({
                launchers: e.element.querySelectorAll(".hovercard")
            }), new t({
                el: document.querySelector("#testimonials")
            }), new s
        }()
    })()
})();