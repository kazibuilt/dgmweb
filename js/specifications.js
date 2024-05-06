(() => {
    var e = {
            33: (e, t, s) => {
                "use strict";
                s.d(t, {
                    Z: () => S
                });
                var i = function() {
                        if ("undefined" != typeof Map)
                            return Map;
                        function e(e, t) {
                            var s = -1;
                            return e.some((function(e, i) {
                                return e[0] === t && (s = i, !0)
                            })), s
                        }
                        return function() {
                            function t() {
                                this.__entries__ = []
                            }
                            return Object.defineProperty(t.prototype, "size", {
                                get: function() {
                                    return this.__entries__.length
                                },
                                enumerable: !0,
                                configurable: !0
                            }), t.prototype.get = function(t) {
                                var s = e(this.__entries__, t),
                                    i = this.__entries__[s];
                                return i && i[1]
                            }, t.prototype.set = function(t, s) {
                                var i = e(this.__entries__, t);
                                ~i ? this.__entries__[i][1] = s : this.__entries__.push([t, s])
                            }, t.prototype.delete = function(t) {
                                var s = this.__entries__,
                                    i = e(s, t);
                                ~i && s.splice(i, 1)
                            }, t.prototype.has = function(t) {
                                return !!~e(this.__entries__, t)
                            }, t.prototype.clear = function() {
                                this.__entries__.splice(0)
                            }, t.prototype.forEach = function(e, t) {
                                void 0 === t && (t = null);
                                for (var s = 0, i = this.__entries__; s < i.length; s++) {
                                    var n = i[s];
                                    e.call(t, n[1], n[0])
                                }
                            }, t
                        }()
                    }(),
                    n = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
                    r = void 0 !== s.g && s.g.Math === Math ? s.g : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(),
                    o = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(r) : function(e) {
                        return setTimeout((function() {
                            return e(Date.now())
                        }), 1e3 / 60)
                    },
                    a = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
                    c = "undefined" != typeof MutationObserver,
                    l = function() {
                        function e() {
                            this.connected_ = !1,
                            this.mutationEventsAdded_ = !1,
                            this.mutationsObserver_ = null,
                            this.observers_ = [],
                            this.onTransitionEnd_ = this.onTransitionEnd_.bind(this),
                            this.refresh = function(e, t) {
                                var s = !1,
                                    i = !1,
                                    n = 0;
                                function r() {
                                    s && (s = !1, e()),
                                    i && c()
                                }
                                function a() {
                                    o(r)
                                }
                                function c() {
                                    var e = Date.now();
                                    if (s) {
                                        if (e - n < 2)
                                            return;
                                        i = !0
                                    } else
                                        s = !0,
                                        i = !1,
                                        setTimeout(a, 20);
                                    n = e
                                }
                                return c
                            }(this.refresh.bind(this))
                        }
                        return e.prototype.addObserver = function(e) {
                            ~this.observers_.indexOf(e) || this.observers_.push(e),
                            this.connected_ || this.connect_()
                        }, e.prototype.removeObserver = function(e) {
                            var t = this.observers_,
                                s = t.indexOf(e);
                            ~s && t.splice(s, 1),
                            !t.length && this.connected_ && this.disconnect_()
                        }, e.prototype.refresh = function() {
                            this.updateObservers_() && this.refresh()
                        }, e.prototype.updateObservers_ = function() {
                            var e = this.observers_.filter((function(e) {
                                return e.gatherActive(), e.hasActive()
                            }));
                            return e.forEach((function(e) {
                                return e.broadcastActive()
                            })), e.length > 0
                        }, e.prototype.connect_ = function() {
                            n && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), c ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                                attributes: !0,
                                childList: !0,
                                characterData: !0,
                                subtree: !0
                            })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
                        }, e.prototype.disconnect_ = function() {
                            n && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
                        }, e.prototype.onTransitionEnd_ = function(e) {
                            var t = e.propertyName,
                                s = void 0 === t ? "" : t;
                            a.some((function(e) {
                                return !!~s.indexOf(e)
                            })) && this.refresh()
                        }, e.getInstance = function() {
                            return this.instance_ || (this.instance_ = new e), this.instance_
                        }, e.instance_ = null, e
                    }(),
                    f = function(e, t) {
                        for (var s = 0, i = Object.keys(t); s < i.length; s++) {
                            var n = i[s];
                            Object.defineProperty(e, n, {
                                value: t[n],
                                enumerable: !1,
                                writable: !1,
                                configurable: !0
                            })
                        }
                        return e
                    },
                    p = function(e) {
                        return e && e.ownerDocument && e.ownerDocument.defaultView || r
                    },
                    u = y(0, 0, 0, 0);
                function d(e) {
                    return parseFloat(e) || 0
                }
                function h(e) {
                    for (var t = [], s = 1; s < arguments.length; s++)
                        t[s - 1] = arguments[s];
                    return t.reduce((function(t, s) {
                        return t + d(e["border-" + s + "-width"])
                    }), 0)
                }
                var m = "undefined" != typeof SVGGraphicsElement ? function(e) {
                    return e instanceof p(e).SVGGraphicsElement
                } : function(e) {
                    return e instanceof p(e).SVGElement && "function" == typeof e.getBBox
                };
                function g(e) {
                    return n ? m(e) ? function(e) {
                        var t = e.getBBox();
                        return y(0, 0, t.width, t.height)
                    }(e) : function(e) {
                        var t = e.clientWidth,
                            s = e.clientHeight;
                        if (!t && !s)
                            return u;
                        var i = p(e).getComputedStyle(e),
                            n = function(e) {
                                for (var t = {}, s = 0, i = ["top", "right", "bottom", "left"]; s < i.length; s++) {
                                    var n = i[s],
                                        r = e["padding-" + n];
                                    t[n] = d(r)
                                }
                                return t
                            }(i),
                            r = n.left + n.right,
                            o = n.top + n.bottom,
                            a = d(i.width),
                            c = d(i.height);
                        if ("border-box" === i.boxSizing && (Math.round(a + r) !== t && (a -= h(i, "left", "right") + r), Math.round(c + o) !== s && (c -= h(i, "top", "bottom") + o)), !function(e) {
                            return e === p(e).document.documentElement
                        }(e)) {
                            var l = Math.round(a + r) - t,
                                f = Math.round(c + o) - s;
                            1 !== Math.abs(l) && (a -= l),
                            1 !== Math.abs(f) && (c -= f)
                        }
                        return y(n.left, n.top, a, c)
                    }(e) : u
                }
                function y(e, t, s, i) {
                    return {
                        x: e,
                        y: t,
                        width: s,
                        height: i
                    }
                }
                var _ = function() {
                        function e(e) {
                            this.broadcastWidth = 0,
                            this.broadcastHeight = 0,
                            this.contentRect_ = y(0, 0, 0, 0),
                            this.target = e
                        }
                        return e.prototype.isActive = function() {
                            var e = g(this.target);
                            return this.contentRect_ = e, e.width !== this.broadcastWidth || e.height !== this.broadcastHeight
                        }, e.prototype.broadcastRect = function() {
                            var e = this.contentRect_;
                            return this.broadcastWidth = e.width, this.broadcastHeight = e.height, e
                        }, e
                    }(),
                    v = function(e, t) {
                        var s,
                            i,
                            n,
                            r,
                            o,
                            a,
                            c,
                            l = (i = (s = t).x, n = s.y, r = s.width, o = s.height, a = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object, c = Object.create(a.prototype), f(c, {
                                x: i,
                                y: n,
                                width: r,
                                height: o,
                                top: n,
                                right: i + r,
                                bottom: o + n,
                                left: i
                            }), c);
                        f(this, {
                            target: e,
                            contentRect: l
                        })
                    },
                    b = function() {
                        function e(e, t, s) {
                            if (this.activeObservations_ = [], this.observations_ = new i, "function" != typeof e)
                                throw new TypeError("The callback provided as parameter 1 is not a function.");
                            this.callback_ = e,
                            this.controller_ = t,
                            this.callbackCtx_ = s
                        }
                        return e.prototype.observe = function(e) {
                            if (!arguments.length)
                                throw new TypeError("1 argument required, but only 0 present.");
                            if ("undefined" != typeof Element && Element instanceof Object) {
                                if (!(e instanceof p(e).Element))
                                    throw new TypeError('parameter 1 is not of type "Element".');
                                var t = this.observations_;
                                t.has(e) || (t.set(e, new _(e)), this.controller_.addObserver(this), this.controller_.refresh())
                            }
                        }, e.prototype.unobserve = function(e) {
                            if (!arguments.length)
                                throw new TypeError("1 argument required, but only 0 present.");
                            if ("undefined" != typeof Element && Element instanceof Object) {
                                if (!(e instanceof p(e).Element))
                                    throw new TypeError('parameter 1 is not of type "Element".');
                                var t = this.observations_;
                                t.has(e) && (t.delete(e), t.size || this.controller_.removeObserver(this))
                            }
                        }, e.prototype.disconnect = function() {
                            this.clearActive(),
                            this.observations_.clear(),
                            this.controller_.removeObserver(this)
                        }, e.prototype.gatherActive = function() {
                            var e = this;
                            this.clearActive(),
                            this.observations_.forEach((function(t) {
                                t.isActive() && e.activeObservations_.push(t)
                            }))
                        }, e.prototype.broadcastActive = function() {
                            if (this.hasActive()) {
                                var e = this.callbackCtx_,
                                    t = this.activeObservations_.map((function(e) {
                                        return new v(e.target, e.broadcastRect())
                                    }));
                                this.callback_.call(e, t, e),
                                this.clearActive()
                            }
                        }, e.prototype.clearActive = function() {
                            this.activeObservations_.splice(0)
                        }, e.prototype.hasActive = function() {
                            return this.activeObservations_.length > 0
                        }, e
                    }(),
                    w = "undefined" != typeof WeakMap ? new WeakMap : new i,
                    O = function e(t) {
                        if (!(this instanceof e))
                            throw new TypeError("Cannot call a class as a function.");
                        if (!arguments.length)
                            throw new TypeError("1 argument required, but only 0 present.");
                        var s = l.getInstance(),
                            i = new b(t, s, this);
                        w.set(this, i)
                    };
                ["observe", "unobserve", "disconnect"].forEach((function(e) {
                    O.prototype[e] = function() {
                        var t;
                        return (t = w.get(this))[e].apply(t, arguments)
                    }
                }));
                const S = void 0 !== r.ResizeObserver ? r.ResizeObserver : O
            },
            896: e => {
                e.exports = {
                    ulWallDesigns: {
                        title: "UL Wall Designs",
                        items: [{
                            title: "Single Stud Walls",
                            img: "/assets/img/specifications/stc_1_1.png",
                            lines: [{
                                name: "U419",
                                subname: "USG",
                                url: "https://iq.ulprospector.com/en/profile?e=14979"
                            }, {
                                name: "U465",
                                subname: "Generic",
                                url: "https://iq.ulprospector.com/en/profile?e=15021"
                            }, {
                                name: "V438",
                                subname: "National Gypsum",
                                url: "https://iq.ulprospector.com/en/profile?e=15204"
                            }, {
                                name: "W440",
                                subname: "CertainTeed",
                                url: "https://iq.ulprospector.com/en/profile?e=15300"
                            }]
                        }, {
                            title: "Chase Walls",
                            img: "/assets/img/specifications/stc_1_1_chase.png",
                            lines: [{
                                name: "U493",
                                subname: "USG",
                                url: "https://iq.ulprospector.com/en/profile?e=15040"
                            }, {
                                name: "V469",
                                subname: "CertainTeed",
                                url: "https://iq.ulprospector.com/en/profile?e=15232"
                            }, {
                                name: "V488",
                                subname: "National Gypsum",
                                url: "https://iq.ulprospector.com/en/profile?e=15250"
                            }]
                        }]
                    },
                    stcRatings: {
                        title: "STC Ratings",
                        items: [{
                            img: "/assets/img/specifications/stc_1_1_chase.png",
                            stc: "59",
                            framing: 'Double row 3-5/8" Hyperstud®, 18 mil, 24" OC, braced with spacer bar',
                            insulation: '3-1/2" glass fiber both sides',
                            side1: '5/8" Type X gypsum',
                            side2: '5/8" Type X gypsum',
                            file: "/assets/files/specifications/noal/NOAL_23-09003.pdf"
                        }, {
                            img: "/assets/img/specifications/stc_1_1_chase.png",
                            stc: "59",
                            framing: 'Double row 3-5/8" Hyperstud®, 33 mil, 24" OC, braced with spacer bar',
                            insulation: '3-1/2" glass fiber both sides',
                            side1: '5/8" Type X gypsum',
                            side2: '5/8" Type X gypsum',
                            file: "/assets/files/specifications/noal/NOAL_23-09004.pdf"
                        }, {
                            img: "/assets/img/specifications/stc_1_1_chase.png",
                            stc: "57",
                            framing: 'Double row 3-5/8" Hyperstud®, 18 mil, 16" OC, braced with spacer bar',
                            insulation: '3-1/2" glass fiber both sides',
                            side1: '5/8" Type X gypsum',
                            side2: '5/8" Type X gypsum',
                            file: "/assets/files/specifications/noal/NOAL_23-08050.pdf"
                        }, {
                            img: "/assets/img/specifications/stc_1_1_chase.png",
                            stc: "54",
                            framing: 'Double row 3-5/8" Hyperstud®, 33 mil, 16" OC, braced with spacer bar',
                            insulation: '3-1/2" glass fiber both sides',
                            side1: '5/8" Type X gypsum',
                            side2: '5/8" Type X gypsum',
                            file: "/assets/files/specifications/noal/NOAL_23-08049.pdf"
                        }, {
                            img: "/assets/img/specifications/stc_2_1_rc.png",
                            stc: "56",
                            framing: '3-5/8" Hyperstud®, 18 mil, 24" OC',
                            insulation: '3-1/2" glass fiber',
                            side1: '2 layers 5/8" Type X gypsum',
                            side2: '5/8" type X gypsum on RC',
                            file: "/assets/files/specifications/noal/NOAL_23-08033.pdf"
                        }, {
                            img: "/assets/img/specifications/stc_2_1_rc.png",
                            stc: "55",
                            framing: '3-5/8" Hyperstud®, 33 mil, 24" OC',
                            insulation: '3-1/2" glass fiber',
                            side1: '2 layers 5/8" Type X gypsum',
                            side2: '5/8" type X gypsum on RC',
                            file: "/assets/files/specifications/noal/NOAL_23-08040.pdf"
                        }, {
                            img: "/assets/img/specifications/stc_2_1_rc.png",
                            stc: "55",
                            framing: '3-5/8" Hyperstud®, 18 mil, 16" OC',
                            insulation: '3-1/2" glass fiber',
                            side1: '2 layers 5/8" Type X gypsum',
                            side2: '5/8" type X gypsum on RC',
                            file: "/assets/files/specifications/noal/NOAL_23-08035.pdf"
                        }, {
                            img: "/assets/img/specifications/stc_2_1_rc.png",
                            stc: "54",
                            framing: '3-5/8" Hyperstud®, 33 mil, 16" OC',
                            insulation: '3-1/2" glass fiber',
                            side1: '2 layers 5/8" Type X gypsum',
                            side2: '5/8" type X gypsum on RC',
                            file: "/assets/files/specifications/noal/NOAL_23-08045.pdf"
                        }, {
                            img: "/assets/img/specifications/stc_1_1_rc.png",
                            stc: "51",
                            framing: '3-5/8" Hyperstud®, 18 mil, 24" OC',
                            insulation: '3-1/2" glass fiber',
                            side1: '5/8" Type X gypsum',
                            side2: '5/8" type X gypsum on RC',
                            file: "/assets/files/specifications/noal/NOAL_23-08032.pdf"
                        }, {
                            img: "/assets/img/specifications/stc_1_1_rc.png",
                            stc: "50",
                            framing: '3-5/8" Hyperstud®, 33 mil, 24" OC',
                            insulation: '3-1/2" glass fiber',
                            side1: '5/8" Type X gypsum',
                            side2: '5/8" type X gypsum on RC',
                            file: "/assets/files/specifications/noal/NOAL_23-08039.pdf"
                        }, {
                            img: "/assets/img/specifications/stc_1_1_rc.png",
                            stc: "50",
                            framing: '3-5/8" Hyperstud®, 18 mil, 16" OC',
                            insulation: '3-1/2" glass fiber',
                            side1: '5/8" Type X gypsum',
                            side2: '5/8" type X gypsum on RC',
                            file: "/assets/files/specifications/noal/NOAL_23-08034.pdf"
                        }, {
                            img: "/assets/img/specifications/stc_1_1_rc.png",
                            stc: "48",
                            framing: '3-5/8" Hyperstud®, 33 mil, 16" OC',
                            insulation: '3-1/2" glass fiber',
                            side1: '5/8" Type X gypsum',
                            side2: '5/8" type X gypsum on RC',
                            file: "/assets/files/specifications/noal/NOAL_23-08044.pdf"
                        }, {
                            img: "/assets/img/specifications/stc_2_2.png",
                            stc: "54",
                            framing: '3-5/8" Hyperstud®, 18 mil, 24" OC',
                            insulation: '3-1/2" glass fiber',
                            side1: '2 layers 5/8" Type X gypsum',
                            side2: '2 layers 5/8" Type X gypsum',
                            file: "/assets/files/specifications/noal/NOAL_23-08031.pdf"
                        }, {
                            img: "/assets/img/specifications/stc_2_2.png",
                            stc: "52",
                            framing: '3-5/8" Hyperstud®, 33 mil, 24" OC',
                            insulation: '3-1/2" glass fiber',
                            side1: '2 layers 5/8" Type X gypsum',
                            side2: '2 layers 5/8" Type X gypsum',
                            file: "/assets/files/specifications/noal/NOAL_23-08043.pdf"
                        }, {
                            img: "/assets/img/specifications/stc_2_2.png",
                            stc: "45",
                            framing: '3-5/8" Hyperstud®, 18 mil, 16" OC',
                            insulation: '3-1/2" glass fiber',
                            side1: '2 layers 5/8" Type X gypsum',
                            side2: '2 layers 5/8" Type X gypsum',
                            file: "/assets/files/specifications/noal/NOAL_23-08038.pdf"
                        }, {
                            img: "/assets/img/specifications/stc_2_2.png",
                            stc: "44",
                            framing: '3-5/8" Hyperstud®, 33 mil, 16" OC',
                            insulation: '3-1/2" glass fiber',
                            side1: '2 layers 5/8" Type X gypsum',
                            side2: '2 layers 5/8" Type X gypsum',
                            file: "/assets/files/specifications/noal/NOAL_23-08048.pdf"
                        }, {
                            img: "/assets/img/specifications/stc_2_1.png",
                            stc: "50",
                            framing: '3-5/8" Hyperstud®, 18 mil, 24" OC',
                            insulation: '3-1/2" glass fiber',
                            side1: '2 layers 5/8" Type X gypsum',
                            side2: '5/8" Type X gypsum',
                            file: "/assets/files/specifications/noal/NOAL_23-08030.pdf"
                        }, {
                            img: "/assets/img/specifications/stc_2_1.png",
                            stc: "47",
                            framing: '3-5/8" Hyperstud®, 33 mil, 24" OC',
                            insulation: '3-1/2" glass fiber',
                            side1: '2 layers 5/8" Type X gypsum',
                            side2: '5/8" Type X gypsum',
                            file: "/assets/files/specifications/noal/NOAL_23-08041.pdf"
                        }, {
                            img: "/assets/img/specifications/stc_2_1.png",
                            stc: "43",
                            framing: '3-5/8" Hyperstud®, 18 mil, 16" OC',
                            insulation: '3-1/2" glass fiber',
                            side1: '2 layers 5/8" Type X gypsum',
                            side2: '5/8" Type X gypsum',
                            file: "/assets/files/specifications/noal/NOAL_23-08036.pdf"
                        }, {
                            img: "/assets/img/specifications/stc_2_1.png",
                            stc: "41",
                            framing: '3-5/8" Hyperstud®, 33 mil, 16" OC',
                            insulation: '3-1/2" glass fiber',
                            side1: '2 layers 5/8" Type X gypsum',
                            side2: '5/8" Type X gypsum',
                            file: "/assets/files/specifications/noal/NOAL_23-08046.pdf"
                        }, {
                            img: "/assets/img/specifications/stc_1_1.png",
                            stc: "46",
                            framing: '3-5/8" Hyperstud®, 18 mil, 24" OC',
                            insulation: '3-1/2" glass fiber',
                            side1: '5/8" Type X gypsum',
                            side2: '5/8" Type X gypsum',
                            file: "/assets/files/specifications/noal/NOAL_23-08029.pdf"
                        }, {
                            img: "/assets/img/specifications/stc_1_1.png",
                            stc: "42",
                            framing: '3-5/8" Hyperstud®, 33 mil, 24" OC',
                            insulation: '3-1/2" glass fiber',
                            side1: '5/8" Type X gypsum',
                            side2: '5/8" Type X gypsum',
                            file: "/assets/files/specifications/noal/NOAL_23-08042.pdf"
                        }]
                    },
                    profileSubmittalSheets: {
                        title: "Profile Data Sheets",
                        items: [{
                            name: "362VS125-18-70",
                            url: "/assets/files/specifications/profiles/362VS125_18_70_20EQ.pdf"
                        }, {
                            name: "362VS125-30 ",
                            url: "/assets/files/specifications/profiles/362VS125_30-1.pdf"
                        }, {
                            name: "362VS125-33",
                            url: "/assets/files/specifications/profiles/362VS125_33-1.pdf"
                        }, {
                            name: "362VXS144-18 ",
                            url: "/assets/files/specifications/profiles/362VXS144_18-1.pdf"
                        }, {
                            name: "362VXS144-22",
                            url: "/assets/files/specifications/profiles/362VXS144_22.pdf"
                        }, {
                            name: "362S137-33",
                            url: "/assets/files/specifications/profiles/362S137_33-1.pdf"
                        }, {
                            name: "362S137-43",
                            url: "/assets/files/specifications/profiles/362S137_43-1.pdf"
                        }, {
                            name: "362S137-54",
                            url: "/assets/files/specifications/profiles/362S137_54-2.pdf"
                        }, {
                            name: "362S162-33",
                            url: "/assets/files/specifications/profiles/362S162_33-1.pdf"
                        }, {
                            name: "362S162-43",
                            url: "/assets/files/specifications/profiles/362S162_43-2.pdf"
                        }, {
                            name: "362S162-54",
                            url: "/assets/files/specifications/profiles/362S162_54-2.pdf"
                        }, {
                            name: "362S200-33",
                            url: "/assets/files/specifications/profiles/362S200_33-1.pdf"
                        }, {
                            name: "3362S200-43",
                            url: "/assets/files/specifications/profiles/362S200_43-1.pdf"
                        }, {
                            name: "362S200-54",
                            url: "/assets/files/specifications/profiles/362S200_54-1.pdf"
                        }, {
                            name: "362S250-43",
                            url: "/assets/files/specifications/profiles/362S250_43-1.pdf"
                        }, {
                            name: "362S250-54",
                            url: "/assets/files/specifications/profiles/362S250_54-2.pdf"
                        }, {
                            name: "362S300-54",
                            url: "/assets/files/specifications/profiles/362S300_54-1.pdf"
                        }, {
                            name: "362S300-68",
                            url: "/assets/files/specifications/profiles/362S300_68-1.pdf"
                        }]
                    }
                }
            },
            832: (e, t, s) => {
                s(658).debounce;
                const i = s(658).throttle,
                    n = s(33).Z;
                var r = function() {
                    const e = {};
                    this.trigger = (t, s) => {
                        let i = e[t],
                            n = s;
                        if (i && i.length)
                            for (let e = 0; e < i.length; e++)
                                i[e].call(null, n)
                    },
                    this.addListener = (t, s) => {
                        e[t] || (e[t] = []),
                        e[t].push(s)
                    },
                    this.on = (e, t) => {
                        this.addListener(e, t)
                    },
                    this.off = (e, t) => {
                        this.removeListener(e, t)
                    },
                    this.removeListener = (t, s) => {
                        let i = e[t];
                        if (i) {
                            for (var n = 0; n < i.length; n++)
                                i[n] == s && i.splice(n, 1);
                            0 == e[t].length && delete e[t]
                        }
                    }
                };
                e.exports = {
                    Events: r,
                    ClientEvents: function(e) {
                        this.options = e || {};
                        let t = null;
                        t = document.querySelector("#main"),
                        this.init = () => {
                            this.events = new r,
                            this.trigger = this.events.trigger,
                            this.addListener = this.events.addListener,
                            this.on = this.events.on,
                            this.removeListener = this.events.removeListener,
                            this.off = this.events.off,
                            this.resizeObserver = new n(this.onWindowResizeEnd),
                            this.resizeObserver.observe(t),
                            window.addEventListener("resize", this.onWindowResizeEnd),
                            t.addEventListener("scroll", this.onScroll)
                        },
                        this.onScroll = i((() => {
                            const e = t.scrollTop,
                                i = s(e);
                            this.scrollY = e,
                            this.trigger("scroll", this.scrollY),
                            i != this.scrollDir && (this.scrollDir = i, this.trigger("scrolldir", this.scrollDir))
                        }), 16.666666666666668),
                        this.onWindowResizeEnd = () => {
                            this.trigger("windowresizeend", {
                                width: window.innerWidth,
                                height: window.innerHeight
                            })
                        };
                        var s = e => e > this.scrollY ? "down" : e < this.scrollY ? "up" : "none";
                        this.init()
                    }
                }
            },
            658: e => {
                function t(e, t) {
                    return e.filter((e => !t.includes(e)))
                }
                e.exports = {
                    deepclone: function(e) {
                        return Object.assign({}, e)
                    },
                    diff: t,
                    uniques: function(e, s) {
                        let i = t(e, s),
                            n = t(s, e);
                        return i.concat(n)
                    },
                    intersection: function(e, t) {
                        return e.filter((e => t.includes(e)))
                    },
                    map: function(e, t, s, i, n) {
                        return (e - t) * (n - i) / (s - t) + i
                    },
                    lerp: function(e, t, s) {
                        return (1 - s) * e + s * t
                    },
                    debounce: function(e, t, s) {
                        var i;
                        return function() {
                            var n = this,
                                r = arguments,
                                o = function() {
                                    i = null,
                                    s || e.apply(n, r)
                                },
                                a = s && !i;
                            clearTimeout(i),
                            i = setTimeout(o, t),
                            a && e.apply(n, r)
                        }
                    },
                    throttle: function(e, t, s) {
                        var i,
                            n,
                            r,
                            o,
                            a = 0;
                        s || (s = {});
                        var c = function() {
                                a = !1 === s.leading ? 0 : Date.now(),
                                i = null,
                                o = e.apply(n, r),
                                i || (n = r = null)
                            },
                            l = function() {
                                var l = Date.now();
                                a || !1 !== s.leading || (a = l);
                                var f = t - (l - a);
                                return n = this, r = arguments, f <= 0 || f > t ? (i && (clearTimeout(i), i = null), a = l, o = e.apply(n, r), i || (n = r = null)) : i || !1 === s.trailing || (i = setTimeout(c, f)), o
                            };
                        return l.cancel = function() {
                            clearTimeout(i),
                            a = 0,
                            i = n = r = null
                        }, l
                    },
                    clamp: function(e, t, s) {
                        return Math.max(Math.min(e, Math.max(t, s)), Math.min(t, s))
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
    function s(i) {
        var n = t[i];
        if (void 0 !== n)
            return n.exports;
        var r = t[i] = {
            exports: {}
        };
        return e[i](r, r.exports, s), r.exports
    }
    s.d = (e, t) => {
        for (var i in t)
            s.o(t, i) && !s.o(e, i) && Object.defineProperty(e, i, {
                enumerable: !0,
                get: t[i]
            })
    },
    s.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
    (() => {
        const e = s(896);
        var t,
            i,
            n,
            r,
            o,
            a,
            c,
            l,
            f,
            p = s(832).ClientEvents;
        let u;
        function d() {
            let e = window.matchMedia("(max-width: 767px)");
            u = e.matches,
            a = m(),
            n = i.offsetTop,
            r = n + i.clientHeight - (o.offsetTop + o.clientHeight),
            g()
        }
        function h(e) {
            g(e)
        }
        var m = () => {
                let e = [];
                var t = document.querySelectorAll(".specifications-nav-section");
                let s = o.querySelector(".specifications-nav-links"),
                    i = o.offsetTop + s.clientHeight / 2,
                    n = document.querySelector("#main").scrollTop;
                for (var r = 0; r < t.length; r++) {
                    let s = t[r],
                        o = s.id,
                        a = Math.floor(n + s.getBoundingClientRect().top),
                        c = a - i,
                        l = Math.floor(a + s.clientHeight - i);
                    e.push({
                        id: o,
                        min: c,
                        max: l
                    })
                }
                return e
            },
            g = e => {
                e >= n && e < r ? y("fixed") : e < n ? y("top") : e > r && y("bottom"),
                _(e)
            },
            y = e => {
                e != c && (c = e, o.setAttribute("data-state", c))
            },
            _ = e => {
                if ("fixed" == c)
                    for (let t = 0; t < a.length; t++) {
                        let s = a[t];
                        if (e >= s.min && e < s.max) {
                            v(s.id);
                            break
                        }
                    }
                else
                    "top" == c ? v(a[0].id) : "bottom" == c && v(a[a.length - 1].id)
            },
            v = e => {
                if (f != l[e]) {
                    let t = o.querySelector(".current");
                    t && (t.classList.remove("current"), f = null),
                    l[e].classList.add("current"),
                    f = l[e]
                }
            };
        !function() {
            t = new p,
            i = document.querySelector(".nav-scroll-area"),
            o = document.querySelector(".specifications-nav");
            let s = window.matchMedia("(max-width: 767px)");
            u = s.matches,
            l = {},
            o.querySelectorAll("a").forEach((e => {
                let t = e.hash.replace("#", "");
                l[t] = e,
                e.addEventListener("click", (t => {
                    t.preventDefault();
                    let s = document.querySelector(`section${e.hash}`),
                        i = document.querySelector("#main"),
                        n = i.scrollTop + s.getBoundingClientRect().top;
                    i.scrollTo(0, n)
                }))
            })),
            d(),
            h(window.scrollY),
            t.on("windowresizeend", d),
            t.on("scroll", h),
            function() {
                var e = [];
                var t = new IntersectionObserver((t => {
                    let s = t.filter((e => e.isIntersecting));
                    e.push(s)
                }), {
                    threshold: .1
                });
                let s = document.querySelectorAll("[data-appear]");
                for (let e = 0; e < s.length; e++) {
                    let i = s[e];
                    t.observe(i)
                }
                let i = document.querySelectorAll(".specifications-section");
                for (let e = 0; e < i.length; e++) {
                    let s = i[e];
                    e % 2 == 0 ? s.classList.add("black") : s.classList.add("darkgray"),
                    s.querySelectorAll("figure, video").forEach((e => {
                        t.observe(e)
                    })),
                    s.querySelectorAll(".title").forEach((e => {
                        t.observe(e)
                    })),
                    s.querySelectorAll(".specificationsLine").forEach((e => {
                        t.observe(e)
                    }))
                }
                window.setInterval((() => {
                    if (e.length) {
                        var t = e.splice(0, 1)[0];
                        const s = u ? 0 : 1;
                        for (let e = 0; e < t.length; e++) {
                            let i = t[e];
                            window.setTimeout((() => {
                                i.target.setAttribute("data-revealed", "true")
                            }), 150 * e * s)
                        }
                    }
                }), 30)
            }();
            const n = document.querySelector("#specifications-nb-items");
            let r = 0;
            for (let t = 0; t < e.ulWallDesigns.items.length; t++)
                r += e.ulWallDesigns.items[t].lines.length;
            e.ulHeadOfWallDesigns?.lines && (r += e.ulHeadOfWallDesigns.lines.length),
            r += e.stcRatings.items.length,
            e.engineeringPlanSheets?.items && (r += e.engineeringPlanSheets.items.length),
            e.architecturalSpecifications?.items && (r += e.architecturalSpecifications.items.length),
            e.connectorSubmittalSheets?.items && (r += e.connectorSubmittalSheets.items.length),
            r += e.profileSubmittalSheets.items.length,
            n.innerHTML = r
        }()
    })()
})();
