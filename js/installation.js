(() => {
    var t = {
            33: (t, e, i) => {
                "use strict";
                i.d(e, {
                    Z: () => E
                });
                var r = function () {
                        if ("undefined" != typeof Map) return Map;

                        function t(t, e) {
                            var i = -1;
                            return t.some((function (t, r) {
                                return t[0] === e && (i = r, !0)
                            })), i
                        }
                        return function () {
                            function e() {
                                this.__entries__ = []
                            }
                            return Object.defineProperty(e.prototype, "size", {
                                get: function () {
                                    return this.__entries__.length
                                },
                                enumerable: !0,
                                configurable: !0
                            }), e.prototype.get = function (e) {
                                var i = t(this.__entries__, e),
                                    r = this.__entries__[i];
                                return r && r[1]
                            }, e.prototype.set = function (e, i) {
                                var r = t(this.__entries__, e);
                                ~r ? this.__entries__[r][1] = i : this.__entries__.push([e, i])
                            }, e.prototype.delete = function (e) {
                                var i = this.__entries__,
                                    r = t(i, e);
                                ~r && i.splice(r, 1)
                            }, e.prototype.has = function (e) {
                                return !!~t(this.__entries__, e)
                            }, e.prototype.clear = function () {
                                this.__entries__.splice(0)
                            }, e.prototype.forEach = function (t, e) {
                                void 0 === e && (e = null);
                                for (var i = 0, r = this.__entries__; i < r.length; i++) {
                                    var n = r[i];
                                    t.call(e, n[1], n[0])
                                }
                            }, e
                        }()
                    }(),
                    n = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
                    s = void 0 !== i.g && i.g.Math === Math ? i.g : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(),
                    o = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(s) : function (t) {
                        return setTimeout((function () {
                            return t(Date.now())
                        }), 1e3 / 60)
                    },
                    l = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
                    h = "undefined" != typeof MutationObserver,
                    a = function () {
                        function t() {
                            this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function (t, e) {
                                var i = !1,
                                    r = !1,
                                    n = 0;

                                function s() {
                                    i && (i = !1, t()), r && h()
                                }

                                function l() {
                                    o(s)
                                }

                                function h() {
                                    var t = Date.now();
                                    if (i) {
                                        if (t - n < 2) return;
                                        r = !0
                                    } else i = !0, r = !1, setTimeout(l, 20);
                                    n = t
                                }
                                return h
                            }(this.refresh.bind(this))
                        }
                        return t.prototype.addObserver = function (t) {
                            ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_()
                        }, t.prototype.removeObserver = function (t) {
                            var e = this.observers_,
                                i = e.indexOf(t);
                            ~i && e.splice(i, 1), !e.length && this.connected_ && this.disconnect_()
                        }, t.prototype.refresh = function () {
                            this.updateObservers_() && this.refresh()
                        }, t.prototype.updateObservers_ = function () {
                            var t = this.observers_.filter((function (t) {
                                return t.gatherActive(), t.hasActive()
                            }));
                            return t.forEach((function (t) {
                                return t.broadcastActive()
                            })), t.length > 0
                        }, t.prototype.connect_ = function () {
                            n && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), h ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                                attributes: !0,
                                childList: !0,
                                characterData: !0,
                                subtree: !0
                            })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
                        }, t.prototype.disconnect_ = function () {
                            n && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
                        }, t.prototype.onTransitionEnd_ = function (t) {
                            var e = t.propertyName,
                                i = void 0 === e ? "" : e;
                            l.some((function (t) {
                                return !!~i.indexOf(t)
                            })) && this.refresh()
                        }, t.getInstance = function () {
                            return this.instance_ || (this.instance_ = new t), this.instance_
                        }, t.instance_ = null, t
                    }(),
                    c = function (t, e) {
                        for (var i = 0, r = Object.keys(e); i < r.length; i++) {
                            var n = r[i];
                            Object.defineProperty(t, n, {
                                value: e[n],
                                enumerable: !1,
                                writable: !1,
                                configurable: !0
                            })
                        }
                        return t
                    },
                    d = function (t) {
                        return t && t.ownerDocument && t.ownerDocument.defaultView || s
                    },
                    u = g(0, 0, 0, 0);

                function f(t) {
                    return parseFloat(t) || 0
                }

                function p(t) {
                    for (var e = [], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
                    return e.reduce((function (e, i) {
                        return e + f(t["border-" + i + "-width"])
                    }), 0)
                }
                var m = "undefined" != typeof SVGGraphicsElement ? function (t) {
                    return t instanceof d(t).SVGGraphicsElement
                } : function (t) {
                    return t instanceof d(t).SVGElement && "function" == typeof t.getBBox
                };

                function v(t) {
                    return n ? m(t) ? function (t) {
                        var e = t.getBBox();
                        return g(0, 0, e.width, e.height)
                    }(t) : function (t) {
                        var e = t.clientWidth,
                            i = t.clientHeight;
                        if (!e && !i) return u;
                        var r = d(t).getComputedStyle(t),
                            n = function (t) {
                                for (var e = {}, i = 0, r = ["top", "right", "bottom", "left"]; i < r.length; i++) {
                                    var n = r[i],
                                        s = t["padding-" + n];
                                    e[n] = f(s)
                                }
                                return e
                            }(r),
                            s = n.left + n.right,
                            o = n.top + n.bottom,
                            l = f(r.width),
                            h = f(r.height);
                        if ("border-box" === r.boxSizing && (Math.round(l + s) !== e && (l -= p(r, "left", "right") + s), Math.round(h + o) !== i && (h -= p(r, "top", "bottom") + o)), ! function (t) {
                                return t === d(t).document.documentElement
                            }(t)) {
                            var a = Math.round(l + s) - e,
                                c = Math.round(h + o) - i;
                            1 !== Math.abs(a) && (l -= a), 1 !== Math.abs(c) && (h -= c)
                        }
                        return g(n.left, n.top, l, h)
                    }(t) : u
                }

                function g(t, e, i, r) {
                    return {
                        x: t,
                        y: e,
                        width: i,
                        height: r
                    }
                }
                var y = function () {
                        function t(t) {
                            this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = g(0, 0, 0, 0), this.target = t
                        }
                        return t.prototype.isActive = function () {
                            var t = v(this.target);
                            return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
                        }, t.prototype.broadcastRect = function () {
                            var t = this.contentRect_;
                            return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t
                        }, t
                    }(),
                    w = function (t, e) {
                        var i, r, n, s, o, l, h, a = (r = (i = e).x, n = i.y, s = i.width, o = i.height, l = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object, h = Object.create(l.prototype), c(h, {
                            x: r,
                            y: n,
                            width: s,
                            height: o,
                            top: n,
                            right: r + s,
                            bottom: o + n,
                            left: r
                        }), h);
                        c(this, {
                            target: t,
                            contentRect: a
                        })
                    },
                    b = function () {
                        function t(t, e, i) {
                            if (this.activeObservations_ = [], this.observations_ = new r, "function" != typeof t) throw new TypeError("The callback provided as parameter 1 is not a function.");
                            this.callback_ = t, this.controller_ = e, this.callbackCtx_ = i
                        }
                        return t.prototype.observe = function (t) {
                            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                            if ("undefined" != typeof Element && Element instanceof Object) {
                                if (!(t instanceof d(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                                var e = this.observations_;
                                e.has(t) || (e.set(t, new y(t)), this.controller_.addObserver(this), this.controller_.refresh())
                            }
                        }, t.prototype.unobserve = function (t) {
                            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                            if ("undefined" != typeof Element && Element instanceof Object) {
                                if (!(t instanceof d(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                                var e = this.observations_;
                                e.has(t) && (e.delete(t), e.size || this.controller_.removeObserver(this))
                            }
                        }, t.prototype.disconnect = function () {
                            this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
                        }, t.prototype.gatherActive = function () {
                            var t = this;
                            this.clearActive(), this.observations_.forEach((function (e) {
                                e.isActive() && t.activeObservations_.push(e)
                            }))
                        }, t.prototype.broadcastActive = function () {
                            if (this.hasActive()) {
                                var t = this.callbackCtx_,
                                    e = this.activeObservations_.map((function (t) {
                                        return new w(t.target, t.broadcastRect())
                                    }));
                                this.callback_.call(t, e, t), this.clearActive()
                            }
                        }, t.prototype.clearActive = function () {
                            this.activeObservations_.splice(0)
                        }, t.prototype.hasActive = function () {
                            return this.activeObservations_.length > 0
                        }, t
                    }(),
                    _ = "undefined" != typeof WeakMap ? new WeakMap : new r,
                    M = function t(e) {
                        if (!(this instanceof t)) throw new TypeError("Cannot call a class as a function.");
                        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                        var i = a.getInstance(),
                            r = new b(e, i, this);
                        _.set(this, r)
                    };
                ["observe", "unobserve", "disconnect"].forEach((function (t) {
                    M.prototype[t] = function () {
                        var e;
                        return (e = _.get(this))[t].apply(e, arguments)
                    }
                }));
                const E = void 0 !== s.ResizeObserver ? s.ResizeObserver : M
            },
            523: t => {
                ! function () {
                    "use strict";
                    t.exports = {
                        polyfill: function () {
                            var t = window,
                                e = document;
                            if (!("scrollBehavior" in e.documentElement.style) || !0 === t.__forceSmoothScrollPolyfill__) {
                                var i, r = t.HTMLElement || t.Element,
                                    n = {
                                        scroll: t.scroll || t.scrollTo,
                                        scrollBy: t.scrollBy,
                                        elementScroll: r.prototype.scroll || l,
                                        scrollIntoView: r.prototype.scrollIntoView
                                    },
                                    s = t.performance && t.performance.now ? t.performance.now.bind(t.performance) : Date.now,
                                    o = (i = t.navigator.userAgent, new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(i) ? 1 : 0);
                                t.scroll = t.scrollTo = function () {
                                    void 0 !== arguments[0] && (!0 !== h(arguments[0]) ? p.call(t, e.body, void 0 !== arguments[0].left ? ~~arguments[0].left : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : t.scrollY || t.pageYOffset) : n.scroll.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : t.scrollY || t.pageYOffset))
                                }, t.scrollBy = function () {
                                    void 0 !== arguments[0] && (h(arguments[0]) ? n.scrollBy.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : p.call(t, e.body, ~~arguments[0].left + (t.scrollX || t.pageXOffset), ~~arguments[0].top + (t.scrollY || t.pageYOffset)))
                                }, r.prototype.scroll = r.prototype.scrollTo = function () {
                                    if (void 0 !== arguments[0])
                                        if (!0 !== h(arguments[0])) {
                                            var t = arguments[0].left,
                                                e = arguments[0].top;
                                            p.call(this, this, void 0 === t ? this.scrollLeft : ~~t, void 0 === e ? this.scrollTop : ~~e)
                                        } else {
                                            if ("number" == typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
                                            n.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
                                        }
                                }, r.prototype.scrollBy = function () {
                                    void 0 !== arguments[0] && (!0 !== h(arguments[0]) ? this.scroll({
                                        left: ~~arguments[0].left + this.scrollLeft,
                                        top: ~~arguments[0].top + this.scrollTop,
                                        behavior: arguments[0].behavior
                                    }) : n.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
                                }, r.prototype.scrollIntoView = function () {
                                    if (!0 !== h(arguments[0])) {
                                        var i = u(this),
                                            r = i.getBoundingClientRect(),
                                            s = this.getBoundingClientRect();
                                        i !== e.body ? (p.call(this, i, i.scrollLeft + s.left - r.left, i.scrollTop + s.top - r.top), "fixed" !== t.getComputedStyle(i).position && t.scrollBy({
                                            left: r.left,
                                            top: r.top,
                                            behavior: "smooth"
                                        })) : t.scrollBy({
                                            left: s.left,
                                            top: s.top,
                                            behavior: "smooth"
                                        })
                                    } else n.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
                                }
                            }

                            function l(t, e) {
                                this.scrollLeft = t, this.scrollTop = e
                            }

                            function h(t) {
                                if (null === t || "object" != typeof t || void 0 === t.behavior || "auto" === t.behavior || "instant" === t.behavior) return !0;
                                if ("object" == typeof t && "smooth" === t.behavior) return !1;
                                throw new TypeError("behavior member of ScrollOptions " + t.behavior + " is not a valid value for enumeration ScrollBehavior.")
                            }

                            function a(t, e) {
                                return "Y" === e ? t.clientHeight + o < t.scrollHeight : "X" === e ? t.clientWidth + o < t.scrollWidth : void 0
                            }

                            function c(e, i) {
                                var r = t.getComputedStyle(e, null)["overflow" + i];
                                return "auto" === r || "scroll" === r
                            }

                            function d(t) {
                                var e = a(t, "Y") && c(t, "Y"),
                                    i = a(t, "X") && c(t, "X");
                                return e || i
                            }

                            function u(t) {
                                for (; t !== e.body && !1 === d(t);) t = t.parentNode || t.host;
                                return t
                            }

                            function f(e) {
                                var i, r, n, o, l = (s() - e.startTime) / 468;
                                o = l = l > 1 ? 1 : l, i = .5 * (1 - Math.cos(Math.PI * o)), r = e.startX + (e.x - e.startX) * i, n = e.startY + (e.y - e.startY) * i, e.method.call(e.scrollable, r, n), r === e.x && n === e.y || t.requestAnimationFrame(f.bind(t, e))
                            }

                            function p(i, r, o) {
                                var h, a, c, d, u = s();
                                i === e.body ? (h = t, a = t.scrollX || t.pageXOffset, c = t.scrollY || t.pageYOffset, d = n.scroll) : (h = i, a = i.scrollLeft, c = i.scrollTop, d = l), f({
                                    scrollable: h,
                                    method: d,
                                    startTime: u,
                                    startX: a,
                                    startY: c,
                                    x: r,
                                    y: o
                                })
                            }
                        }
                    }
                }()
            },
            832: (t, e, i) => {
                i(658).debounce;
                const r = i(658).throttle,
                    n = i(33).Z;
                var s = function () {
                    const t = {};
                    this.trigger = (e, i) => {
                        let r = t[e],
                            n = i;
                        if (r && r.length)
                            for (let t = 0; t < r.length; t++) r[t].call(null, n)
                    }, this.addListener = (e, i) => {
                        t[e] || (t[e] = []), t[e].push(i)
                    }, this.on = (t, e) => {
                        this.addListener(t, e)
                    }, this.off = (t, e) => {
                        this.removeListener(t, e)
                    }, this.removeListener = (e, i) => {
                        let r = t[e];
                        if (r) {
                            for (var n = 0; n < r.length; n++) r[n] == i && r.splice(n, 1);
                            0 == t[e].length && delete t[e]
                        }
                    }
                };
                t.exports = {
                    Events: s,
                    ClientEvents: function (t) {
                        this.options = t || {};
                        let e = null;
                        e = document.querySelector("#main"), this.init = () => {
                            this.events = new s, this.trigger = this.events.trigger, this.addListener = this.events.addListener, this.on = this.events.on, this.removeListener = this.events.removeListener, this.off = this.events.off, this.resizeObserver = new n(this.onWindowResizeEnd), this.resizeObserver.observe(e), window.addEventListener("resize", this.onWindowResizeEnd), e.addEventListener("scroll", this.onScroll)
                        }, this.onScroll = r((() => {
                            const t = e.scrollTop,
                                r = i(t);
                            this.scrollY = t, this.trigger("scroll", this.scrollY), r != this.scrollDir && (this.scrollDir = r, this.trigger("scrolldir", this.scrollDir))
                        }), 16.666666666666668), this.onWindowResizeEnd = () => {
                            this.trigger("windowresizeend", {
                                width: window.innerWidth,
                                height: window.innerHeight
                            })
                        };
                        var i = t => t > this.scrollY ? "down" : t < this.scrollY ? "up" : "none";
                        this.init()
                    }
                }
            },
            794: (t, e, i) => {
                const r = i(658).map,
                    n = i(832).ClientEvents,
                    s = i(658).clamp,
                    o = i(658).debounce,
                    l = i(523),
                    h = (d = window.chrome, u = window.navigator, f = u.vendor, p = void 0 !== window.opr, m = u.userAgent.indexOf("Edge") > -1, u.userAgent.match("CriOS"), null != d && "Google Inc." === f && !1 === p && !1 === m),
                    a = !("scrollBehavior" in document.documentElement.style),
                    c = () => document.querySelector("#main");
                var d, u, f, p, m;
                let v = !1;
                const g = o((t => {
                        if (v = t, v) {
                            const t = c(),
                                e = t.scrollTop;
                            if (c().style = "scroll-snap-type: y mandatory", a) {
                                let i = 5;
                                t.scrollTop = e;
                                const r = () => {
                                    i -= 1, t.scrollTop = e, i > 0 && requestAnimationFrame(r)
                                };
                                requestAnimationFrame(r)
                            }
                        } else c().style = "scroll-snap-type: none"
                    }), 100, !0),
                    y = t => {
                        t !== v && g(t)
                    };
                let w = !1,
                    b = !1;
                const _ = [];
                let M = 0;
                t.exports = function (t) {
                    this.config = t;
                    const e = t.fps || 30,
                        i = 1e3 / e;
                    var o = 0,
                        d = () => this.renderer.clientWidth < 640 ? this.config.sDataMobile : this.config.sData,
                        u = () => this.renderer.clientWidth < 640 ? {
                            width: this.config.mobileRes || 640,
                            height: this.config.mobileRes || 640
                        } : {
                            width: 1920,
                            height: 1080
                        },
                        f = () => {
                            const t = d();
                            if (t && t.frames) {
                                var e, i = this.config.keyframes.length,
                                    n = r(this.time, 0, 1, 0, i - 1),
                                    o = Math.min(Math.floor(n), i - 1),
                                    l = n - o,
                                    h = this.config.keyframes[o];
                                return e = o < i - 1 ? this.config.keyframes[o + 1] : t.frames.length - 1, p(s(Math.round(n), 0, i - 1)), Math.round(h + (e - h) * l)
                            }
                            return 0
                        },
                        p = t => {
                            if (t === this.lastKeyframe) return;
                            this.lastKeyframe = t, this.element.setAttribute("data-scroll-direction", this.scrollDir);
                            let e = this.element.querySelector('.sequence-item[data-state="outgoing"]');
                            e && e.setAttribute("data-state", "");
                            let i = this.element.querySelector('.sequence-item[data-state="activated"]');
                            i && i.setAttribute("data-state", "outgoing");
                            let r = this.element.querySelector(`.sequence-item[data-index="${t}"]`);
                            r && r.setAttribute("data-state", "activated")
                        },
                        m = () => {
                            this.element.setAttribute("data-in-viewport", !0), this.scrollDir ? "down" == this.scrollDir || this.scrollDir : this.time = 0
                        },
                        g = () => {
                            this.element.setAttribute("data-in-viewport", !1), "down" == this.scrollDir || this.scrollDir
                        },
                        E = t => {
                            void 0 !== t && (this.scrollY = t), t && 0 === Object.keys(t).length && t.constructor === Object && (this.scrollY = 0);
                            let e = this.element.getAttribute("data-renderer-position");
                            this.scrollY > this.yMax ? "bottom" != e && (this.time = 1, this.bottom()) : this.scrollY < this.yMin ? ("top" != e && (this.time = 0, this.top()), this.scrollY < this.yMin - .5 * this.viewport.height ? p(null) : p(0)) : (this.time = s((this.scrollY - this.yMin) / (this.sectionHeight - this.viewport.height), 0, 1), this.time > .95 && (this.time = 1), "fixed" != e && this.fix())
                        },
                        x = () => {
                            this.viewport = O();
                            var t = this.scrollContent.getBoundingClientRect();
                            this.sectionHeight = t.height, this.yMin = this.scrollY + this.element.getBoundingClientRect().top, this.yMax = this.yMin + this.element.clientHeight - window.innerHeight, this.rendererCanvas.width = this.renderer.clientWidth, this.rendererCanvas.height = this.renderer.clientHeight, this.renderParams = T();
                            const e = d();
                            this.sData !== e && (this.sData = e, e && (this.lastImg = null, A())), document.documentElement.style.setProperty("--vh", `${document.documentElement.getBoundingClientRect().height}px`), this.events.onScroll()
                        },
                        T = () => {
                            const t = u();
                            let e = this.rendererCanvas.height / t.height,
                                i = this.rendererCanvas.height,
                                r = t.width * e;
                            if (this.viewport.width > r) {
                                let t = this.rendererCanvas.width / r;
                                r *= t, i *= t
                            }
                            let n = (this.rendererCanvas.width - r) / 2,
                                s = (this.rendererCanvas.height - i) / 2;
                            return i = Math.floor(i), r = Math.floor(r), n = Math.floor(n), s = Math.floor(s), {
                                width: r,
                                height: i,
                                x: n,
                                y: s
                            }
                        },
                        O = () => {
                            let t = {
                                height: window.innerHeight,
                                width: window.innerWidth,
                                y: {
                                    min: this.scrollY,
                                    max: this.scrollY + window.innerHeight
                                }
                            };
                            return t.y.mid = t.y.min + t.height / 2, t
                        },
                        A = () => {
                            this.frameCache || (this.frameCache = {});
                            let t = this.events;
                            const e = d();
                            if (this.frameCache[e.name] = this.frameCache[e.name] || [], this.frames = this.frameCache[e.name], this.frames.length > 0) return;
                            let i = e.frames,
                                r = e.frames.length;
                            for (var n = 0; n < r; n++) {
                                let e = i[n];
                                var s = new Image;
                                let r = {
                                    index: n,
                                    frameURL: e,
                                    img: s
                                };
                                this.frames[n] = r;
                                let l = this.frames[n];
                                var o = () => {
                                    s.removeEventListener("load", o), t.trigger("frameloaded", l)
                                };
                                s.addEventListener("load", o), s.src = e
                            }
                        };
                    this.renderLoop = t => {
                        let r = null;
                        void 0 !== this.lastTimestamp && void 0 !== t && (r = (t - this.lastTimestamp) / 1e3), this.lastTimestamp = t;
                        const n = f(),
                            l = (this.keyframes[0], this.keyframes[this.keyframes.length - 1]);
                        if ((this.time >= 1 || n === l && this.currentFrame === l) && this.config.endsSnap ? y(!1) : o > 0 && this.time < 1 && y(!0), 0 !== o || n != this.currentFrame || !this.fresh) {
                            if (null != n && (this.currentFrame != n || !this.fresh)) {
                                let t = n - this.currentFrame;
                                t = null !== r ? Math.round(s(t, -r * e, r * e)) : s(t, -1, 1), this.currentFrame += t, D(this.currentFrame)
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
                        1 === (o += 1) && this.renderLoop(), document.addEventListener("keyup", S)
                    }, this.deactivate = () => {
                        o > 0 && (o -= 1), document.removeEventListener("keyup", S)
                    };
                    var S = t => {
                            switch (t.key) {
                                case "ArrowDown":
                                case "ArrowRight":
                                    t.preventDefault(), t.stopPropagation(), L();
                                    break;
                                case "ArrowUp":
                                case "ArrowLeft":
                                    t.preventDefault(), t.stopPropagation(), q()
                            }
                        },
                        L = () => {
                            let t = this.element.querySelectorAll(".sequence-item").length,
                                e = this.element.querySelector('.sequence-item[data-state="activated"]');
                            parseInt(e.getAttribute("data-index")) == t - 1 ? this.scrollElement.scrollBy(0, window.innerHeight) : this.scrollElement.scrollBy(0, 1)
                        },
                        q = () => {
                            let t = this.element.querySelector('.sequence-item[data-state="activated"]');
                            0 == parseInt(t.getAttribute("data-index")) ? this.scrollElement.scrollBy(0, -window.innerHeight) : this.scrollElement.scrollBy(0, -1)
                        };
                    this.fresh = !1;
                    var D = t => {
                        this.fresh = !!(this.frames[t] && this.frames[t].img && this.frames[t].img.complete), this.fresh && (this.lastImg = this.frames[t].img || this.lastImg), this.lastImg ? this.rendererCTX.drawImage(this.lastImg, this.renderParams.x, this.renderParams.y, this.renderParams.width, this.renderParams.height) : (this.rendererCTX.fillStyle = "#191919", this.rendererCTX.fillRect(this.renderParams.x, this.renderParams.y, this.renderParams.width, this.renderParams.height))
                    };
                    this.renderFrame = D, (() => {
                        _.push(this), this.events = new n, this.scrollElement = c(), this.element = this.config.element, this.keyframes = this.config.keyframes, this.length = this.keyframes.length, this.scrollContent = this.element.querySelector(".snap-sequence-scroll-content"), this.renderer = this.element.querySelector(".snap-sequence-renderer"), this.rendererCanvas = this.renderer.querySelector(".snap-sequence-canvas"), this.rendererCTX = this.rendererCanvas.getContext("2d", {
                            alpha: !1
                        }), this.scrollY = 0, x(), this.currentFrame = 0, this.lastImg = null, this.lastKeyframe = null, E(), (() => {
                            if (b) return;
                            b = !0, l.polyfill();
                            const t = c();
                            (h || a) && t.addEventListener("wheel", (e => {
                                const i = window.innerHeight,
                                    r = t.scrollTop - e.wheelDelta,
                                    n = (Math.round(t.scrollTop / i) - Math.sign(e.wheelDelta)) * i;
                                if (!(Math.abs(e.wheelDeltaY) < 10 && Math.abs(e.wheelDeltaX) > 10)) return M > 0 ? (e.preventDefault(), void e.stopPropagation()) : void(_.some((t => t.yMin < r)) && _.some((t => t.yMax > r)) && (e.preventDefault(), e.stopPropagation(), ((t, e) => {
                                    w || (w = !0, a ? c().style = "scroll-snap-type: none" : y(!0), M += 1, t.scrollTo({
                                        left: 0,
                                        top: e,
                                        behavior: "smooth"
                                    }), window.setTimeout((() => {
                                        if (v) {
                                            const t = c(),
                                                e = t.scrollTop;
                                            if (t.style = "scroll-snap-type: y mandatory", a) {
                                                let i = 5;
                                                t.scrollTop = e;
                                                const r = () => {
                                                    i -= 1, t.scrollTop = e, i > 0 && requestAnimationFrame(r)
                                                };
                                                requestAnimationFrame(r)
                                            }
                                        }
                                    }), 500), window.setTimeout((() => {
                                        w = !1, M -= 1
                                    }), 1500))
                                })(t, n)))
                            }), {
                                passive: !1
                            })
                        })(), this.time = 0;
                        let t = this.frames[0];
                        var e = () => {
                            t.img.removeEventListener("load", e), D(t.index)
                        };
                        t.img.addEventListener("load", e), this.events.on("windowresizeend", (() => {
                            x(), D(this.currentFrame)
                        })), this.events.on("scroll", E), this.events.on("scrolldir", (t => {
                            this.scrollDir = t
                        })), this.events.on("frameloaded", (t => {
                            t.index === this.currentFrame && D(t.index)
                        })), new IntersectionObserver((t => {
                            t[0].isIntersecting ? m() : g()
                        })).observe(this.element)
                    })()
                }
            },
            68: (t, e, i) => {
                const r = i(658).lerp,
                    n = i(832).ClientEvents,
                    s = i(658).map,
                    o = i(658).clamp,
                    l = i(658).EasingFunctions;
                t.exports = function (t) {
                    this.config = t, this.activated = !1;
                    const e = this.config.timingFn || "linear",
                        i = 1e3 / (t.fps || 60),
                        h = t.lerp || .5;
                    var a, c = 0,
                        d = () => {
                            this.viewport = m();
                            var t = this.element.getBoundingClientRect();
                            this.sectionHeight = t.height;
                            var e = c + t.top;
                            this.yMin = e + this.viewport.height, this.yMax = e + this.sectionHeight, g(), y(), this.events.trigger("layout")
                        },
                        u = () => {
                            this.activated = !0, this.element.setAttribute("data-in-viewport", this.activated), this.events.trigger("activate", this), this.events.on("scroll", p), v()
                        },
                        f = () => {
                            this.activated = !1, d(), this.element.setAttribute("data-in-viewport", this.activated), this.events.trigger("deactivate", this), this.events.off("scroll", p)
                        },
                        p = t => {
                            c = t
                        },
                        m = () => ({
                            yMin: c,
                            yMid: c + window.innerHeight / 2,
                            yMax: c + window.innerHeight,
                            height: window.innerHeight,
                            width: window.innerWidth
                        }),
                        v = () => {
                            g(), y(), this.element.setAttribute("data-scroll-direction", this.scrollDir), this.events.trigger("render"), this.activated && setTimeout((() => {
                                requestAnimationFrame(v)
                            }), i)
                        },
                        g = () => {
                            a = this.scrollY || 0, this.scrollY = c, this.scrollYLerped = r(this.scrollYLerped || a, this.scrollY, h), this.scrollRaw = M(this.scrollY, this.yMin, this.yMax), this.scrollLerped = M(this.scrollYLerped, this.yMin, this.yMax), this.time = this.timingFn(this.scrollLerped)
                        },
                        y = () => {
                            this.scrollRaw > 0 && this.scrollRaw < 1 ? b() : 1 == this.scrollRaw ? _() : w()
                        },
                        w = () => {
                            "start" != this.rendererPosition && (this.element.setAttribute("data-renderer-position", "fixed"), this.rendererPosition = "start", this.element.setAttribute("data-live", !0))
                        },
                        b = () => {
                            "fixed" != this.rendererPosition && (this.events.trigger("renderer-position", "fixed"), this.element.setAttribute("data-renderer-position", "fixed"), this.rendererPosition = "fixed", this.element.setAttribute("data-live", !0))
                        },
                        _ = () => {
                            "end" != this.rendererPosition && (this.rendererPosition = "end")
                        },
                        M = (t, e, i) => o(s(t + this.viewport.height, e, i, 0, 1), 0, 1);
                    (() => {
                        this.events = new n, this.element = this.config.el || this.config.element, this.screenfuls = this.config.screenfuls || 5, this.element.style.height = 100 * this.screenfuls + "vh", this.timingFn = l[e], d(), this.events.on("windowresizeend", d), this.events.on("scrolldir", (t => {
                            this.scrollDir = t
                        })), new IntersectionObserver((t => {
                            t[0].isIntersecting ? u() : f()
                        })).observe(this.element)
                    })()
                }
            },
            658: t => {
                function e(t, e) {
                    return t.filter((t => !e.includes(t)))
                }
                t.exports = {
                    deepclone: function (t) {
                        return Object.assign({}, t)
                    },
                    diff: e,
                    uniques: function (t, i) {
                        let r = e(t, i),
                            n = e(i, t);
                        return r.concat(n)
                    },
                    intersection: function (t, e) {
                        return t.filter((t => e.includes(t)))
                    },
                    map: function (t, e, i, r, n) {
                        return (t - e) * (n - r) / (i - e) + r
                    },
                    lerp: function (t, e, i) {
                        return (1 - i) * t + i * e
                    },
                    debounce: function (t, e, i) {
                        var r;
                        return function () {
                            var n = this,
                                s = arguments,
                                o = function () {
                                    r = null, i || t.apply(n, s)
                                },
                                l = i && !r;
                            clearTimeout(r), r = setTimeout(o, e), l && t.apply(n, s)
                        }
                    },
                    throttle: function (t, e, i) {
                        var r, n, s, o, l = 0;
                        i || (i = {});
                        var h = function () {
                                l = !1 === i.leading ? 0 : Date.now(), r = null, o = t.apply(n, s), r || (n = s = null)
                            },
                            a = function () {
                                var a = Date.now();
                                l || !1 !== i.leading || (l = a);
                                var c = e - (a - l);
                                return n = this, s = arguments, c <= 0 || c > e ? (r && (clearTimeout(r), r = null), l = a, o = t.apply(n, s), r || (n = s = null)) : r || !1 === i.trailing || (r = setTimeout(h, c)), o
                            };
                        return a.cancel = function () {
                            clearTimeout(r), l = 0, r = n = s = null
                        }, a
                    },
                    clamp: function (t, e, i) {
                        return Math.max(Math.min(t, Math.max(e, i)), Math.min(e, i))
                    },
                    EasingFunctions: {
                        linear: t => t,
                        easeInQuad: t => t * t,
                        easeOutQuad: t => t * (2 - t),
                        easeInOutQuad: t => t < .5 ? 2 * t * t : (4 - 2 * t) * t - 1,
                        easeInCubic: t => t * t * t,
                        easeOutCubic: t => --t * t * t + 1,
                        easeInOutCubic: t => t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
                        easeInQuart: t => t * t * t * t,
                        easeOutQuart: t => 1 - --t * t * t * t,
                        easeInOutQuart: t => t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t,
                        easeInQuint: t => t * t * t * t * t,
                        easeOutQuint: t => 1 + --t * t * t * t * t,
                        easeInOutQuint: t => t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t
                    }
                }
            }
        },
        e = {};

    function i(r) {
        var n = e[r];
        if (void 0 !== n) return n.exports;
        var s = e[r] = {
            exports: {}
        };
        return t[r](s, s.exports, i), s.exports
    }
    i.d = (t, e) => {
        for (var r in e) i.o(e, r) && !i.o(t, r) && Object.defineProperty(t, r, {
            enumerable: !0,
            get: e[r]
        })
    }, i.g = function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (t) {
            if ("object" == typeof window) return window
        }
    }(), i.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), (() => {
        const t = i(794),
            e = i(68),
            r = i(832).Events,
            n = i(658).map;
        var s;
        s = function () {
            var t = document.querySelector("#sdata");
            if (t) return JSON.parse(t.innerHTML);
            throw new Error("missing sequence data")
        }(), new t({
            element: document.querySelector("#intro"),
            sData: s["10-installation"],
            sDataMobile: s["10-installation-mobile"],
            keyframes: [20, 46, 95, 125, 186, 235, 298],
            rendererNativeSize: {
                width: 1920,
                height: 1080
            },
            mobileRes: 1080,
            fps: 30,
            ease: 6,
            beginsSnap: !0,
            endsSnap: !0
        }), new function (t) {
            var i, s, o, l, h, a, c, d;
            this.config = t;
            var u = t => {
                    switch (t.key) {
                        case "ArrowDown":
                        case "ArrowRight":
                            t.stopPropagation(), t.preventDefault(), f();
                            break;
                        case "ArrowUp":
                        case "ArrowLeft":
                            t.stopPropagation(), t.preventDefault(), p()
                    }
                },
                f = () => {
                    m();
                    let t = this.yMin - window.innerHeight,
                        e = this.scrollEl.scrollTop;
                    if (e <= t) this.scrollEl.scrollTo(0, this.yMin);
                    else if (e >= this.yMax) this.scrollEl.scrollTo(0, this.yMax);
                    else if (e < this.yMin && e + window.innerHeight > this.yMin) this.scrollEl.scrollTo(0, this.yMin);
                    else {
                        let t = this.currentIndex + 1;
                        if (t >= c.length) return void this.scrollEl.scrollTo(0, this.yMax);
                        let e = c[t] / a * (this.yMaxInner - this.yMin);
                        e = Math.ceil(this.yMin + e), e += 1, this.scrollEl.scrollTo(0, e)
                    }
                },
                p = () => {
                    m();
                    let t = this.yMin - window.innerHeight;
                    if (this.scrollEl.scrollTop < t) this.scrollEl.scrollTo(0, t);
                    else if (this.scrollEl.scrollTop <= this.yMax && this.scrollEl.scrollTop + window.innerHeight > this.yMax) {
                        let t = c[c.length - 1] / a * (this.yMaxInner - this.yMin);
                        t = Math.ceil(this.yMin + t), this.scrollEl.scrollTo(0, t)
                    } else {
                        let e = this.currentIndex - 1;
                        if (e < 0) return void this.scrollEl.scrollTo(0, t);
                        let i = c[e] / a * (this.yMaxInner - this.yMin);
                        i = Math.ceil(this.yMin + i), this.scrollEl.scrollTo(0, i)
                    }
                },
                m = () => {
                    a = l.clientHeight, c = [];
                    for (var t = 0; t < i.length; t++) c[t] = i[t].offsetTop;
                    this.yMin = this.scrollEl.scrollTop + this.config.el.getBoundingClientRect().top, this.yMax = this.yMin + this.config.el.clientHeight, this.yMaxInner = this.yMax - window.innerHeight;
                    let e = window.matchMedia("(max-width: 767px)");
                    this.isMobile = e.matches
                },
                v = () => {
                    if (!this.isMobile) {
                        h.style.height = 100 * this.scrollSection.time + "%", d = n(this.scrollSection.time, 0, 1, 0, a);
                        for (var t = 0, e = 0; e < c.length; e++) d >= c[e] && (t = e);
                        t != this.currentIndex && g(t)
                    }
                },
                g = t => {
                    this.currentIndex = t, i[t].setAttribute("data-state", "current");
                    for (let e = 0; e < t; e++) i[e].setAttribute("data-state", "past");
                    for (let e = t + 1; e < i.length; e++) i[e].setAttribute("data-state", "");
                    let e = this.config.el.querySelector('.details [data-state="past"]');
                    e && e.setAttribute("data-state", "");
                    let r = this.config.el.querySelector('.details [data-state="current"]');
                    r && r.setAttribute("data-state", "past"), s[t].setAttribute("data-state", "current")
                };
            (() => {
                this.events = new r, i = this.config.el.querySelectorAll(".steps .item"), s = this.config.el.querySelectorAll(".details .item"), o = this.config.el.querySelector(".steps .progress-bar"), l = o.querySelector(".progress-bar-inner"), h = o.querySelector(".progress-bar-progress"), this.scrollEl = document.querySelector("#main"), m(), this.scrollSection = new e(t), this.scrollSection.events.on("render", v), this.scrollSection.events.on("layout", m), this.scrollSection.events.on("activate", (() => {
                    document.addEventListener("keyup", u)
                })), this.scrollSection.events.on("deactivate", (() => {
                    document.removeEventListener("keyup", u)
                }));
                var n = 0,
                    a = this.config.el.getAttribute("data-scroll-reveal-threshold");
                a && (n = parseFloat(a)), new IntersectionObserver((t => {
                    t[0].isIntersecting && this.config.el.classList.add("on-screen")
                }), {
                    threshold: n
                }).observe(this.config.el)
            })()
        }({
            el: document.querySelector("#process .sequence"),
            screenfuls: 5,
            debug: !0,
            lerp: .2
        })
    })()
})();