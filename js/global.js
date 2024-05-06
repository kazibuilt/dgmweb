(() => {
    var e = {
            33: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => _
                });
                var o = function () {
                        if ("undefined" != typeof Map) return Map;

                        function e(e, t) {
                            var n = -1;
                            return e.some((function (e, o) {
                                return e[0] === t && (n = o, !0)
                            })), n
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
                                var n = e(this.__entries__, t),
                                    o = this.__entries__[n];
                                return o && o[1]
                            }, t.prototype.set = function (t, n) {
                                var o = e(this.__entries__, t);
                                ~o ? this.__entries__[o][1] = n : this.__entries__.push([t, n])
                            }, t.prototype.delete = function (t) {
                                var n = this.__entries__,
                                    o = e(n, t);
                                ~o && n.splice(o, 1)
                            }, t.prototype.has = function (t) {
                                return !!~e(this.__entries__, t)
                            }, t.prototype.clear = function () {
                                this.__entries__.splice(0)
                            }, t.prototype.forEach = function (e, t) {
                                void 0 === t && (t = null);
                                for (var n = 0, o = this.__entries__; n < o.length; n++) {
                                    var r = o[n];
                                    e.call(t, r[1], r[0])
                                }
                            }, t
                        }()
                    }(),
                    r = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
                    i = void 0 !== n.g && n.g.Math === Math ? n.g : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(),
                    s = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(i) : function (e) {
                        return setTimeout((function () {
                            return e(Date.now())
                        }), 1e3 / 60)
                    },
                    a = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
                    l = "undefined" != typeof MutationObserver,
                    c = function () {
                        function e() {
                            this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function (e, t) {
                                var n = !1,
                                    o = !1,
                                    r = 0;

                                function i() {
                                    n && (n = !1, e()), o && l()
                                }

                                function a() {
                                    s(i)
                                }

                                function l() {
                                    var e = Date.now();
                                    if (n) {
                                        if (e - r < 2) return;
                                        o = !0
                                    } else n = !0, o = !1, setTimeout(a, 20);
                                    r = e
                                }
                                return l
                            }(this.refresh.bind(this))
                        }
                        return e.prototype.addObserver = function (e) {
                            ~this.observers_.indexOf(e) || this.observers_.push(e), this.connected_ || this.connect_()
                        }, e.prototype.removeObserver = function (e) {
                            var t = this.observers_,
                                n = t.indexOf(e);
                            ~n && t.splice(n, 1), !t.length && this.connected_ && this.disconnect_()
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
                            r && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), l ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                                attributes: !0,
                                childList: !0,
                                characterData: !0,
                                subtree: !0
                            })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
                        }, e.prototype.disconnect_ = function () {
                            r && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
                        }, e.prototype.onTransitionEnd_ = function (e) {
                            var t = e.propertyName,
                                n = void 0 === t ? "" : t;
                            a.some((function (e) {
                                return !!~n.indexOf(e)
                            })) && this.refresh()
                        }, e.getInstance = function () {
                            return this.instance_ || (this.instance_ = new e), this.instance_
                        }, e.instance_ = null, e
                    }(),
                    h = function (e, t) {
                        for (var n = 0, o = Object.keys(t); n < o.length; n++) {
                            var r = o[n];
                            Object.defineProperty(e, r, {
                                value: t[r],
                                enumerable: !1,
                                writable: !1,
                                configurable: !0
                            })
                        }
                        return e
                    },
                    d = function (e) {
                        return e && e.ownerDocument && e.ownerDocument.defaultView || i
                    },
                    u = y(0, 0, 0, 0);

                function m(e) {
                    return parseFloat(e) || 0
                }

                function p(e) {
                    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                    return t.reduce((function (t, n) {
                        return t + m(e["border-" + n + "-width"])
                    }), 0)
                }
                var v = "undefined" != typeof SVGGraphicsElement ? function (e) {
                    return e instanceof d(e).SVGGraphicsElement
                } : function (e) {
                    return e instanceof d(e).SVGElement && "function" == typeof e.getBBox
                };

                function f(e) {
                    return r ? v(e) ? function (e) {
                        var t = e.getBBox();
                        return y(0, 0, t.width, t.height)
                    }(e) : function (e) {
                        var t = e.clientWidth,
                            n = e.clientHeight;
                        if (!t && !n) return u;
                        var o = d(e).getComputedStyle(e),
                            r = function (e) {
                                for (var t = {}, n = 0, o = ["top", "right", "bottom", "left"]; n < o.length; n++) {
                                    var r = o[n],
                                        i = e["padding-" + r];
                                    t[r] = m(i)
                                }
                                return t
                            }(o),
                            i = r.left + r.right,
                            s = r.top + r.bottom,
                            a = m(o.width),
                            l = m(o.height);
                        if ("border-box" === o.boxSizing && (Math.round(a + i) !== t && (a -= p(o, "left", "right") + i), Math.round(l + s) !== n && (l -= p(o, "top", "bottom") + s)), ! function (e) {
                                return e === d(e).document.documentElement
                            }(e)) {
                            var c = Math.round(a + i) - t,
                                h = Math.round(l + s) - n;
                            1 !== Math.abs(c) && (a -= c), 1 !== Math.abs(h) && (l -= h)
                        }
                        return y(r.left, r.top, a, l)
                    }(e) : u
                }

                function y(e, t, n, o) {
                    return {
                        x: e,
                        y: t,
                        width: n,
                        height: o
                    }
                }
                var g = function () {
                        function e(e) {
                            this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = y(0, 0, 0, 0), this.target = e
                        }
                        return e.prototype.isActive = function () {
                            var e = f(this.target);
                            return this.contentRect_ = e, e.width !== this.broadcastWidth || e.height !== this.broadcastHeight
                        }, e.prototype.broadcastRect = function () {
                            var e = this.contentRect_;
                            return this.broadcastWidth = e.width, this.broadcastHeight = e.height, e
                        }, e
                    }(),
                    b = function (e, t) {
                        var n, o, r, i, s, a, l, c = (o = (n = t).x, r = n.y, i = n.width, s = n.height, a = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object, l = Object.create(a.prototype), h(l, {
                            x: o,
                            y: r,
                            width: i,
                            height: s,
                            top: r,
                            right: o + i,
                            bottom: s + r,
                            left: o
                        }), l);
                        h(this, {
                            target: e,
                            contentRect: c
                        })
                    },
                    w = function () {
                        function e(e, t, n) {
                            if (this.activeObservations_ = [], this.observations_ = new o, "function" != typeof e) throw new TypeError("The callback provided as parameter 1 is not a function.");
                            this.callback_ = e, this.controller_ = t, this.callbackCtx_ = n
                        }
                        return e.prototype.observe = function (e) {
                            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                            if ("undefined" != typeof Element && Element instanceof Object) {
                                if (!(e instanceof d(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                                var t = this.observations_;
                                t.has(e) || (t.set(e, new g(e)), this.controller_.addObserver(this), this.controller_.refresh())
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
                    E = "undefined" != typeof WeakMap ? new WeakMap : new o,
                    k = function e(t) {
                        if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function.");
                        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                        var n = c.getInstance(),
                            o = new w(t, n, this);
                        E.set(this, o)
                    };
                ["observe", "unobserve", "disconnect"].forEach((function (e) {
                    k.prototype[e] = function () {
                        var t;
                        return (t = E.get(this))[e].apply(t, arguments)
                    }
                }));
                const _ = void 0 !== i.ResizeObserver ? i.ResizeObserver : k
            },
            832: (e, t, n) => {
                n(658).debounce;
                const o = n(658).throttle,
                    r = n(33).Z;
                var i = function () {
                    const e = {};
                    this.trigger = (t, n) => {
                        let o = e[t],
                            r = n;
                        if (o && o.length)
                            for (let e = 0; e < o.length; e++) o[e].call(null, r)
                    }, this.addListener = (t, n) => {
                        e[t] || (e[t] = []), e[t].push(n)
                    }, this.on = (e, t) => {
                        this.addListener(e, t)
                    }, this.off = (e, t) => {
                        this.removeListener(e, t)
                    }, this.removeListener = (t, n) => {
                        let o = e[t];
                        if (o) {
                            for (var r = 0; r < o.length; r++) o[r] == n && o.splice(r, 1);
                            0 == e[t].length && delete e[t]
                        }
                    }
                };
                e.exports = {
                    Events: i,
                    ClientEvents: function (e) {
                        this.options = e || {};
                        let t = null;
                        t = document.querySelector("#main"), this.init = () => {
                            this.events = new i, this.trigger = this.events.trigger, this.addListener = this.events.addListener, this.on = this.events.on, this.removeListener = this.events.removeListener, this.off = this.events.off, this.resizeObserver = new r(this.onWindowResizeEnd), this.resizeObserver.observe(t), window.addEventListener("resize", this.onWindowResizeEnd), t.addEventListener("scroll", this.onScroll)
                        }, this.onScroll = o((() => {
                            const e = t.scrollTop,
                                o = n(e);
                            this.scrollY = e, this.trigger("scroll", this.scrollY), o != this.scrollDir && (this.scrollDir = o, this.trigger("scrolldir", this.scrollDir))
                        }), 16.666666666666668), this.onWindowResizeEnd = () => {
                            this.trigger("windowresizeend", {
                                width: window.innerWidth,
                                height: window.innerHeight
                            })
                        };
                        var n = e => e > this.scrollY ? "down" : e < this.scrollY ? "up" : "none";
                        this.init()
                    }
                }
            },
            406: (e, t, n) => {
                const o = n(658).lerp,
                    r = n(832).ClientEvents,
                    i = n(658).map,
                    s = n(658).clamp;
                e.exports = function () {
                    var e, t, n, a = 0,
                        l = () => {
                            this.height = this.element.clientHeight;
                            let e = document.querySelector("#main");
                            t = this.element.getBoundingClientRect().top + e.scrollTop - window.innerHeight, t = Math.floor(t)
                        },
                        c = () => {
                            l()
                        },
                        h = () => {
                            l(), e = !1, m(), this.events.on("scroll", u), this.element.setAttribute("data-position", "onscreen")
                        },
                        d = () => {
                            this.element.setAttribute("data-position", "offscreen"), this.events.off("scroll", u), v()
                        },
                        u = e => {
                            a = e
                        },
                        m = () => {
                            if (e) return;
                            setTimeout((() => {
                                requestAnimationFrame(m)
                            }), 10);
                            let t = p();
                            n = null != n ? o(n, t, .8) : t, Math.abs(n) < .001 && (n = 0), this.content.style.transform = `translate3d(0, ${n}px, 0)`
                        },
                        p = () => {
                            let e = a - t;
                            return e = s(e, 0, this.height), i(e, 0, this.height, -250, 0)
                        },
                        v = () => {
                            e = !0
                        };
                    (() => {
                        this.events = new r, this.element = document.querySelector("#hf-footer"), this.content = this.element.querySelector(".content"), l();
                        let e = p();
                        this.content.style.transform = `translate3d(0, ${e}px, 0)`, new IntersectionObserver((e => {
                            e[0].isIntersecting ? h() : d()
                        })).observe(this.element), this.events.on("scrolldir", (e => {
                            this.scrollDir = e
                        })), this.events.on("windowresizeend", c)
                    })()
                }
            },
            172: (e, t, n) => {
                const o = n(832).ClientEvents;
                e.exports = function () {
                    this.open = (t, o, r = !0) => {
                        document.body.setAttribute("data-modal-active", !0);
                        var i = e(o);
                        this.element = i.querySelector(".hf-modal"), this.element.style.paddingLeft = r ? "0" : "17%";
                        var s = this.element.querySelector(".modal-content"),
                            a = this.element.querySelector(".modal-content h1"),
                            l = this.element.querySelector(".modal-content-body"),
                            c = this.element.querySelector(".close");
                        a && a.setAttribute("data-revealed", "true"), l && l.setAttribute("data-revealed", "true");
                        var h = () => {
                            this.element.setAttribute("data-modal-animation", "none"), this.element.removeEventListener("animationend", h), this.element.addEventListener("click", this.close), c.addEventListener("click", this.close), document.addEventListener("keyup", n)
                        };
                        c.addEventListener("animationend", h), this.element.setAttribute("data-modal-animation", "slide-in"), s.addEventListener("click", (function (e) {
                            e.stopPropagation()
                        })), this.element.setAttribute("data-open", !0), document.body.appendChild(i)
                    };
                    var e = e => {
                        const t = new DocumentFragment,
                            n = document.createElement("div");
                        n.classList.add("hf-modal", "offset-20");
                        const o = document.createElement("div");
                        o.classList.add("container");
                        const r = document.createElement("div");
                        return r.classList.add("circle-button", "s", "close"), o.innerHTML = e, o.querySelector(".modal-content").appendChild(r), n.appendChild(o), t.appendChild(n), t
                    };
                    this.close = () => {
                        var e = () => {
                            this.element.setAttribute("data-modal-animation", "none"), this.element.removeEventListener("animationend", e), document.body.removeChild(this.element)
                        };
                        this.element.addEventListener("animationend", e), this.element.setAttribute("data-modal-animation", "slide-out"), document.removeEventListener("keyup", n), this.element.setAttribute("data-open", !1), document.body.setAttribute("data-modal-active", !1)
                    };
                    var t = () => "true" == this.element.getAttribute("data-open"),
                        n = e => {
                            if (t()) switch (e.key) {
                                case "Escape":
                                    this.close()
                            }
                        };
                    (() => {
                        this.events = new o
                    })()
                }
            },
            651: (e, t, n) => {
                const o = n(832).ClientEvents;

                function r(e) {
                    this.config = e;
                    var t = () => {
                        let e = window.matchMedia("(max-width: 767px)");
                        this.isMobile = e.matches
                    };
                    this.open = () => new Promise(((e, t) => {
                        var n, o = t => {
                            t.target == t.currentTarget && (this.content.removeEventListener("transitionend", o), this.backdrop.addEventListener("click", (() => {
                                this.config.events.trigger("close-requested")
                            })), this.closeButton.addEventListener("click", (e => {
                                e.preventDefault(), e.stopPropagation(), this.config.events.trigger("close-requested")
                            })), this.config.events.trigger("open"), e())
                        };
                        this.content.addEventListener("transitionend", o), this.config.events.trigger("open-start"), n = () => {
                            this.element.setAttribute("data-open", !0)
                        }, requestAnimationFrame((() => {
                            setTimeout(n)
                        }))
                    })), this.close = () => new Promise(((e, n) => {
                        var o = t => {
                            t.target == t.currentTarget && (this.backdrop.removeEventListener("transitionend", o), this.config.events.trigger("closed"), e())
                        };
                        this.config.events.off("windowresizeend", t), this.backdrop.addEventListener("transitionend", o), this.config.events.trigger("close-start"), this.element.setAttribute("data-open", !1)
                    })), (() => {
                        this.element = document.createElement("div"), this.element.classList.add("hypermodal"), this.config.style && this.element.setAttribute("data-style", this.config.style), this.content = document.createElement("div"), this.content.classList.add("hypermodal-content"), this.element.appendChild(this.content), this.content.innerHTML = this.config.content, this.backdrop = document.createElement("div"), this.backdrop.classList.add("hypermodal-backdrop"), this.element.prepend(this.backdrop), this.element.setAttribute("data-animation", "slide-in"), this.closeButton = document.createElement("div"), this.closeButton.classList.add("circle-button", "s", "close"), this.content.appendChild(this.closeButton), this.modalBody = this.element.querySelector(".hypermodal-content-body"), this.scrollElement = this.modalBody, this.scrollElementMobile = this.element.querySelector(".hypermodal-content"), document.body.appendChild(this.element), t(), this.config.events.on("windowresizeend", t)
                    })()
                }
                e.exports = function (e) {
                    this.config = e || {};
                    var t = e => {
                            if (this.launchers = e, this.launchers && this.launchers.length)
                                for (let e = 0; e < this.launchers.length; e++) this.launchers[e].addEventListener("click", n)
                        },
                        n = e => {
                            e.preventDefault();
                            let t = e.currentTarget,
                                n = t.querySelector('script[type="text/template"').innerHTML,
                                o = t.getAttribute("data-modal-style");
                            this.openModal({
                                content: n,
                                style: o,
                                events: this.events
                            })
                        };
                    this.openModal = e => {
                        this.modal || (document.body.setAttribute("data-modal-open", !0), this.modal = new r(e), this.modal.open().then((() => {
                            document.addEventListener("keyup", s)
                        })), document.addEventListener("keyup", s))
                    }, this.closeModal = () => {
                        document.removeEventListener("keyup", s), this.modal.close().then((() => {
                            document.body.removeChild(this.modal.element), this.modal = null
                        })), document.body.setAttribute("data-modal-open", !1)
                    };
                    var i = () => this.modal && "true" == this.modal.element.getAttribute("data-open"),
                        s = e => {
                            if (i()) switch (e.key) {
                                case "Escape":
                                    this.closeModal()
                            }
                        };
                    (() => {
                        this.events = new o, t(this.config.launchers), this.events.on("close-requested", this.closeModal)
                    })()
                }
            },
            620: e => {
                e.exports = function () {
                    const e = new Event("validate-fields");
                    var t = (e, t, n, o) => {
                            var r = t => {
                                t.target.value.length || (n.textContent = `${e} is required`, n.style.opacity = 1, o.style.opacity = 1)
                            };
                            t.addEventListener("blur", r), t.addEventListener("validate-fields", r), t.addEventListener("input", (() => {
                                n.style.opacity = 0, o.style.opacity = 0
                            }))
                        },
                        n = () => {
                            this.firstNameError.style.opacity = 0, this.firstNameErrorIcon.style.opacity = 0, this.lastNameError.style.opacity = 0, this.lastNameErrorIcon.style.opacity = 0, this.emailError.style.opacity = 0, this.emailErrorIcon.style.opacity = 0, this.companyError.style.opacity = 0, this.companyErrorIcon.style.opacity = 0, this.firstName.value = "", this.lastName.value = "", this.email.value = "", this.company.value = ""
                        };
                    this.open = () => {
                        let e = this.element.getAttribute("data-state");
                        "closing-form" != e && "closing-confirm" != e && (ga("send", "event", "subscribe", "open"), document.body.setAttribute("data-modal-active", !0), this.element.setAttribute("data-state", "open-form"), document.addEventListener("keyup", r))
                    }, this.close = () => {
                        document.removeEventListener("keyup", r);
                        var e = t => {
                            t.target == this.element && (this.element.setAttribute("data-state", "closed"), this.element.removeEventListener("transitionend", e), this.scrollContent.scrollTop = 0)
                        };
                        this.element.addEventListener("transitionend", e), "open-form" == this.element.getAttribute("data-state") ? this.element.setAttribute("data-state", "closing-form") : this.element.setAttribute("data-state", "closing-confirm"), document.body.setAttribute("data-modal-active", !1), n()
                    };
                    var o = () => {
                            var e = this.element.getAttribute("data-state");
                            return "open-form" == e || "open-confirm" == e
                        },
                        r = e => {
                            if (o()) switch (e.key) {
                                case "Escape":
                                    this.close()
                            }
                        },
                        i = () => {
                            s() ? (l(), this.element.setAttribute("data-state", "open-confirm")) : (a(), this.element.dispatchEvent(e))
                        },
                        s = () => this.firstName.value.length && this.lastName.value.length && this.email.value.length && this.company.value.length,
                        a = () => {
                            this.firstName.dispatchEvent(e), this.lastName.dispatchEvent(e), this.email.dispatchEvent(e), this.company.dispatchEvent(e)
                        },
                        l = () => {
                            ga("send", "event", "subscribe", "submit");
                            const e = new XMLHttpRequest,
                                t = {
                                    u: "f2fc7b29f5c89248c176859e3",
                                    id: "613f777617",
                                    MERGE0: this.email.value,
                                    MERGE1: this.firstName.value,
                                    MERGE2: this.lastName.value,
                                    MERGE3: this.company.value
                                },
                                n = Object.keys(t).map((e => encodeURIComponent(e) + "=" + encodeURIComponent(t[e]))).join("&");
                            e.open("POST", "https://hyperframe.us14.list-manage.com/subscribe/post"), e.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), e.send(n)
                        };
                    (() => {
                        if (this.element = document.querySelector("#request-demo-modal"), "open-form" == this.element.getAttribute("data-state") && ga("send", "event", "subscribe", "open"), this.backdrop = this.element.querySelector(".backdrop"), !this.element) throw new Error('"Request a Demo" modal markup not present on page');
                        var e = this.element.querySelector(".close-button");
                        e && e.addEventListener("click", (e => {
                            e.preventDefault(), o() && this.close()
                        })), this.element.querySelector("a.submit").addEventListener("click", (e => {
                            e.preventDefault(), o() && i()
                        })), this.scrollContent = this.element.querySelector(".demo-form"), this.firstName = this.element.querySelector("#first-name"), this.lastName = this.element.querySelector("#last-name"), this.email = this.element.querySelector("#email"), this.company = this.element.querySelector("#company"), this.firstNameError = this.element.querySelector("#first-name-container > .error"), this.firstNameErrorIcon = this.element.querySelector("#first-name-container > div > .error-icon"), this.lastNameError = this.element.querySelector("#last-name-container > .error"), this.lastNameErrorIcon = this.element.querySelector("#last-name-container > div > .error-icon"), this.emailError = this.element.querySelector("#email-container > .error"), this.emailErrorIcon = this.element.querySelector("#email-container > div > .error-icon"), this.companyError = this.element.querySelector("#company-container > .error"), this.companyErrorIcon = this.element.querySelector("#company-container > div > .error-icon"), t("First name", this.firstName, this.firstNameError, this.firstNameErrorIcon), t("Last name", this.lastName, this.lastNameError, this.lastNameErrorIcon), t("Email", this.email, this.emailError, this.emailErrorIcon), t("Company", this.company, this.companyError, this.companyErrorIcon)
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
                    uniques: function (e, n) {
                        let o = t(e, n),
                            r = t(n, e);
                        return o.concat(r)
                    },
                    intersection: function (e, t) {
                        return e.filter((e => t.includes(e)))
                    },
                    map: function (e, t, n, o, r) {
                        return (e - t) * (r - o) / (n - t) + o
                    },
                    lerp: function (e, t, n) {
                        return (1 - n) * e + n * t
                    },
                    debounce: function (e, t, n) {
                        var o;
                        return function () {
                            var r = this,
                                i = arguments,
                                s = function () {
                                    o = null, n || e.apply(r, i)
                                },
                                a = n && !o;
                            clearTimeout(o), o = setTimeout(s, t), a && e.apply(r, i)
                        }
                    },
                    throttle: function (e, t, n) {
                        var o, r, i, s, a = 0;
                        n || (n = {});
                        var l = function () {
                                a = !1 === n.leading ? 0 : Date.now(), o = null, s = e.apply(r, i), o || (r = i = null)
                            },
                            c = function () {
                                var c = Date.now();
                                a || !1 !== n.leading || (a = c);
                                var h = t - (c - a);
                                return r = this, i = arguments, h <= 0 || h > t ? (o && (clearTimeout(o), o = null), a = c, s = e.apply(r, i), o || (r = i = null)) : o || !1 === n.trailing || (o = setTimeout(l, h)), s
                            };
                        return c.cancel = function () {
                            clearTimeout(o), a = 0, o = r = i = null
                        }, c
                    },
                    clamp: function (e, t, n) {
                        return Math.max(Math.min(e, Math.max(t, n)), Math.min(t, n))
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

    function n(o) {
        var r = t[o];
        if (void 0 !== r) return r.exports;
        var i = t[o] = {
            exports: {}
        };
        return e[o](i, i.exports, n), i.exports
    }
    n.d = (e, t) => {
        for (var o in t) n.o(t, o) && !n.o(e, o) && Object.defineProperty(e, o, {
            enumerable: !0,
            get: t[o]
        })
    }, n.g = function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
        const e = n(406);
        var t = n(620);
        const o = n(832).ClientEvents,
            r = n(172),
            i = n(651);
        let s, a, l;

        function c(e, t = (() => {})) {
            e.addEventListener("click", (e => {
                e.preventDefault(), a.open(), t()
            }))
        }
        var h = () => window.screen.width < 960,
            d = () => {
                l = h() ? document.querySelector("#hf-nav-mobile").getBoundingClientRect().height / 2 : document.querySelector("#hf-nav").getBoundingClientRect().height / 2
            },
            u = (e, t, n) => {
                n.logoPaths.forEach((t => t.style.fill = e ? "#e6e6e6" : "#191919")), n.navLinks.forEach((e => {
                    e.style.color = t ? "#e6e6e6" : "#191919"
                })), n.locationDots.forEach((e => {
                    e.style.backgroundColor = t ? "#e6e6e6" : "#191919"
                })), n.demoLink.style.color = t ? "#ff7714" : "#191919", n.demoButton.style.backgroundColor = t ? "#ff7714" : "#191919", n.demoArrowLine1.style.stroke = t ? "#191919" : "#e6e6e6", n.demoArrowPath1.style.fill = t ? "#191919" : "#e6e6e6", n.demoArrowLine2.style.stroke = t ? "#191919" : "#e6e6e6", n.demoArrowPath2.style.fill = t ? "#191919" : "#e6e6e6", n.mobileBtn.style.backgroundColor = t ? "#ff7714" : "#191919", n.mobileBtnPath.style.stroke = t ? "#191919" : "#e6e6e6", n.mobileBtnLines.forEach((e => {
                    e.style.stroke = t ? "#191919" : "#e6e6e6"
                }))
            };
        s = new o, history.scrollRestoration = "manual",
            function () {
                a = new t;
                var e = document.querySelectorAll("[data-request-demo-launcher]");
                for (let t = 0; t < e.length; t++) c(e[t])
            }(), (() => {
                var e = new IntersectionObserver((e => {
                    e.forEach((e => {
                        e.isIntersecting && e.target.setAttribute("data-revealed", "true")
                    }))
                }), {
                    threshold: .2
                });
                let t = document.querySelectorAll(".scroll-reveal");
                for (var n = 0; n < t.length; n++) {
                    let r = t[n],
                        i = r.querySelectorAll(".reveal-item");
                    for (var o = 0; o < i.length; o++) i[o].style.animationDelay = 100 * o + "ms";
                    e.observe(r)
                }
            })(),
            function () {
                const e = document.querySelector(".nav-mobile-container > .circle-button");
                e.addEventListener("click", (t => {
                    t.preventDefault();
                    let n = e.querySelector(".markup").innerHTML,
                        o = new r;
                    o.open(null, n, !1), c(document.querySelector("#mobile-nav-request-demo"), (() => {
                        o.close()
                    }))
                }))
            }(), (() => {
                const e = document.querySelectorAll(".hf-nav-logo > svg > path"),
                    t = document.querySelectorAll(".nav-link"),
                    n = document.querySelectorAll(".location-dot"),
                    o = document.querySelector(".hf-nav-items > .demo > a"),
                    r = o.querySelector(".circle-button"),
                    i = r.querySelector("svg:nth-child(1) > line"),
                    a = r.querySelector("svg:nth-child(1) > path"),
                    c = r.querySelector("svg:nth-child(2) > line"),
                    m = r.querySelector("svg:nth-child(2) > path"),
                    p = document.querySelector("#hf-nav-mobile > .nav-mobile-container > .circle-button"),
                    v = p.querySelector("path"),
                    f = p.querySelectorAll("line"),
                    y = p.querySelectorAll("stop"),
                    g = {
                        logoPaths: e,
                        navLinks: t,
                        locationDots: n,
                        demoLink: o,
                        demoButton: r,
                        demoArrowLine1: i,
                        demoArrowPath1: a,
                        demoArrowLine2: c,
                        demoArrowPath2: m,
                        mobileBtn: p,
                        mobileBtnPath: v,
                        mobileBtnLines: f,
                        mobileBtnStops: y
                    };
                d(), s.on("windowresizeend", (() => {
                    d()
                }));
                let b = [];
                window.location.pathname.includes("installation") ? b = [{
                    selector: "#hf-footer",
                    property: "top",
                    logoBgDark: !1,
                    navBgDark: !1
                }, {
                    selector: "#request-demo",
                    property: "top",
                    logoBgDark: !0,
                    navBgDark: !0
                }, {
                    selector: "#process > .sequence",
                    property: "top",
                    logoBgDark: !0,
                    navBgDark: !1
                }, {
                    selector: "#process > .intro > .container",
                    property: "bottom",
                    logoBgDark: !0,
                    navBgDark: !0
                }, {
                    selector: "#process > .intro > .container",
                    property: "top",
                    logoBgDark: !0,
                    navBgDark: !1
                }, {
                    selector: "#main",
                    property: "top",
                    logoBgDark: !0,
                    navBgDark: !0
                }] : window.location.pathname.includes("about") ? b = [{
                    selector: "#hf-footer",
                    property: "top",
                    logoBgDark: !1,
                    navBgDark: !1
                }, {
                    selector: "#three-goals > .container",
                    property: "bottom",
                    logoBgDark: !0,
                    navBgDark: !0
                }, {
                    selector: "#three-goals",
                    property: "top",
                    logoBgDark: !1,
                    navBgDark: !1
                }, {
                    selector: "#founding-team",
                    property: "top",
                    logoBgDark: !0,
                    navBgDark: !0
                }, {
                    selector: "#origin-story > .offset-block-bg",
                    property: "top",
                    logoBgDark: !0,
                    navBgDark: !1
                }, {
                    selector: "#origin-story",
                    property: "top",
                    logoBgDark: !0,
                    navBgDark: !0
                }, {
                    selector: "#hero",
                    property: "top",
                    logoBgDark: !1,
                    navBgDark: !1
                }] : window.location.pathname.includes("components") || window.location.pathname.includes("specs") || window.location.pathname.includes("patents") ? b = [{
                    selector: "#request-demo",
                    property: "top",
                    logoBgDark: !1,
                    navBgDark: !1
                }, {
                    selector: "#intro",
                    property: "top",
                    logoBgDark: !0,
                    navBgDark: !0
                }] : "/" == window.location.pathname && (b = [{
                    selector: "#request-demo",
                    property: "top",
                    logoBgDark: !1,
                    navBgDark: !1
                }, {
                    selector: "#calculator",
                    property: "top",
                    logoBgDark: !0,
                    navBgDark: !1
                }, {
                    selector: "#testimonials",
                    property: "top",
                    logoBgDark: !0,
                    navBgDark: !0
                }, {
                    selector: "#compliance > .container",
                    mobileSelector: "#compliance",
                    property: "top",
                    logoBgDark: !1,
                    navBgDark: !1
                }, {
                    selector: "#benefits",
                    property: "top",
                    logoBgDark: !0,
                    navBgDark: !0
                }, {
                    selector: "#time-is-money > .content-area",
                    mobileSelector: "#time-is-money",
                    property: "top",
                    logoBgDark: !0,
                    navBgDark: !1
                }, {
                    selector: "#install-on-site",
                    property: "top",
                    logoBgDark: !0,
                    navBgDark: !0
                }, {
                    selector: "#reimagined",
                    property: "top",
                    logoBgDark: !0,
                    navBgDark: !1
                }, {
                    selector: "#intro > .snap-sequence-scroll-content",
                    property: "top",
                    logoBgDark: !0,
                    navBgDark: !0
                }]);
                const w = () => {
                    for (var e = 0; e < b.length; ++e) {
                        var t = b[e],
                            n = h() && t.mobileSelector ? t.mobileSelector : t.selector;
                        if (document.querySelector(n).getBoundingClientRect()[t.property] < l) {
                            u(t.logoBgDark, t.navBgDark, g);
                            break
                        }
                    }
                };
                s.on("scroll", w), s.on("windowresizeend", w)
            })(),
            function () {
                let e = !0;
                const t = document.querySelector(".scroll-indicator");
                t && s.on("scroll", (n => {
                    n && 0 === Object.keys(n).length && n.constructor === Object && (n = 0), e && n > 0 ? (t.setAttribute("data-hide", "true"), e = !1) : e || 0 != n || (t.setAttribute("data-hide", "false"), e = !0)
                }))
            }(), (() => {
                let e;
                document.URL.includes("installation") ? e = document.querySelector("#installation-nav > .location-dot") : document.URL.includes("specs") ? e = document.querySelector("#specifications-nav > .location-dot") : document.URL.includes("about") && (e = document.querySelector("#about-nav > .location-dot")), e && (e.style.animationName = "locationDotFadeInUp")
            })(), new i({
                launchers: document.querySelectorAll("[data-hypermodal-launcher]")
            }), new e
    })()
})();