var pr = Object.defineProperty;
var dr = (te, ee, re) => ee in te ? pr(te, ee, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: re
}) : te[ee] = re;
var Jt = (te, ee, re) => (dr(te, typeof ee != "symbol" ? ee + "" : ee, re), re);
var style = "";
const scriptRel = "modulepreload",
    assetsURL = function (te) {
        return "https://www.d-g-m.com/" + te
    },
    seen = {},
    __vitePreload = function (ee, re, ie) {
        if (!re || re.length === 0) return ee();
        const ne = document.getElementsByTagName("link");
        return Promise.all(re.map(se => {
            if (se = assetsURL(se), se in seen) return;
            seen[se] = !0;
            const ae = se.endsWith(".css"),
                oe = ae ? '[rel="stylesheet"]' : "";
            if (!!ie)
                for (let fe = ne.length - 1; fe >= 0; fe--) {
                    const _e = ne[fe];
                    if (_e.href === se && (!ae || _e.rel === "stylesheet")) return
                } else if (document.querySelector(`link[href="${se}"]${oe}`)) return;
            const he = document.createElement("link");
            if (he.rel = ae ? "stylesheet" : scriptRel, ae || (he.as = "script", he.crossOrigin = ""), he.href = se, document.head.appendChild(he), ae) return new Promise((fe, _e) => {
                he.addEventListener("load", fe), he.addEventListener("error", () => _e(new Error(`Unable to preload CSS for ${se}`)))
            })
        })).then(() => ee()).catch(se => {
            const ae = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (ae.payload = se, window.dispatchEvent(ae), !ae.defaultPrevented) throw se
        })
    };

function t$2(te, ee) {
    for (var re = 0; re < ee.length; re++) {
        var ie = ee[re];
        ie.enumerable = ie.enumerable || !1, ie.configurable = !0, "value" in ie && (ie.writable = !0), Object.defineProperty(te, ie.key, ie)
    }
}

function n$1(te, ee, re) {
    return ee && t$2(te.prototype, ee), re && t$2(te, re), te
}

function r() {
    return (r = Object.assign || function (te) {
        for (var ee = 1; ee < arguments.length; ee++) {
            var re = arguments[ee];
            for (var ie in re) Object.prototype.hasOwnProperty.call(re, ie) && (te[ie] = re[ie])
        }
        return te
    }).apply(this, arguments)
}

function i$1(te, ee) {
    te.prototype = Object.create(ee.prototype), te.prototype.constructor = te, te.__proto__ = ee
}

function e$1(te) {
    return (e$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function (ee) {
        return ee.__proto__ || Object.getPrototypeOf(ee)
    })(te)
}

function o(te, ee) {
    return (o = Object.setPrototypeOf || function (re, ie) {
        return re.__proto__ = ie, re
    })(te, ee)
}

function u(te, ee, re) {
    return (u = function () {
        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
        if (typeof Proxy == "function") return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
        } catch {
            return !1
        }
    }() ? Reflect.construct : function (ie, ne, se) {
        var ae = [null];
        ae.push.apply(ae, ne);
        var oe = new(Function.bind.apply(ie, ae));
        return se && o(oe, se.prototype), oe
    }).apply(null, arguments)
}

function s(te) {
    var ee = typeof Map == "function" ? new Map : void 0;
    return (s = function (re) {
        if (re === null || Function.toString.call(re).indexOf("[native code]") === -1) return re;
        if (typeof re != "function") throw new TypeError("Super expression must either be null or a function");
        if (ee !== void 0) {
            if (ee.has(re)) return ee.get(re);
            ee.set(re, ie)
        }

        function ie() {
            return u(re, arguments, e$1(this).constructor)
        }
        return ie.prototype = Object.create(re.prototype, {
            constructor: {
                value: ie,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), o(ie, re)
    })(te)
}

function f(te, ee) {
    try {
        var re = te()
    } catch (ie) {
        return ee(ie)
    }
    return re && re.then ? re.then(void 0, ee) : re
}
typeof Symbol < "u" && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))), typeof Symbol < "u" && (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
var c, a = "2.9.7",
    h = function () {};
(function (te) {
    te[te.off = 0] = "off", te[te.error = 1] = "error", te[te.warning = 2] = "warning", te[te.info = 3] = "info", te[te.debug = 4] = "debug"
})(c || (c = {}));
var v = c.off,
    l = function () {
        function te(re) {
            this.t = re
        }
        te.getLevel = function () {
            return v
        }, te.setLevel = function (re) {
            return v = c[re]
        };
        var ee = te.prototype;
        return ee.error = function () {
            for (var re = arguments.length, ie = new Array(re), ne = 0; ne < re; ne++) ie[ne] = arguments[ne];
            this.i(console.error, c.error, ie)
        }, ee.warn = function () {
            for (var re = arguments.length, ie = new Array(re), ne = 0; ne < re; ne++) ie[ne] = arguments[ne];
            this.i(console.warn, c.warning, ie)
        }, ee.info = function () {
            for (var re = arguments.length, ie = new Array(re), ne = 0; ne < re; ne++) ie[ne] = arguments[ne];
            this.i(console.info, c.info, ie)
        }, ee.debug = function () {
            for (var re = arguments.length, ie = new Array(re), ne = 0; ne < re; ne++) ie[ne] = arguments[ne];
            this.i(console.log, c.debug, ie)
        }, ee.i = function (re, ie, ne) {
            ie <= te.getLevel() && re.apply(console, ["[" + this.t + "] "].concat(ne))
        }, te
    }(),
    d = O,
    m = E,
    w = g,
    p = x,
    b = T,
    y = "/",
    P = new RegExp(["(\\\\.)", "(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"), "g");

function g(te, ee) {
    for (var re, ie = [], ne = 0, se = 0, ae = "", oe = ee && ee.delimiter || y, le = ee && ee.whitelist || void 0, he = !1;
        (re = P.exec(te)) !== null;) {
        var fe = re[0],
            _e = re[1],
            ue = re.index;
        if (ae += te.slice(se, ue), se = ue + fe.length, _e) ae += _e[1], he = !0;
        else {
            var de = "",
                me = re[2],
                ce = re[3],
                Ce = re[4],
                pe = re[5];
            if (!he && ae.length) {
                var ve = ae.length - 1,
                    ge = ae[ve];
                (!le || le.indexOf(ge) > -1) && (de = ge, ae = ae.slice(0, ve))
            }
            ae && (ie.push(ae), ae = "", he = !1);
            var ye = ce || Ce,
                Ee = de || oe;
            ie.push({
                name: me || ne++,
                prefix: de,
                delimiter: Ee,
                optional: pe === "?" || pe === "*",
                repeat: pe === "+" || pe === "*",
                pattern: ye ? A(ye) : "[^" + k(Ee === oe ? Ee : Ee + oe) + "]+?"
            })
        }
    }
    return (ae || se < te.length) && ie.push(ae + te.substr(se)), ie
}

function E(te, ee) {
    return function (re, ie) {
        var ne = te.exec(re);
        if (!ne) return !1;
        for (var se = ne[0], ae = ne.index, oe = {}, le = ie && ie.decode || decodeURIComponent, he = 1; he < ne.length; he++)
            if (ne[he] !== void 0) {
                var fe = ee[he - 1];
                oe[fe.name] = fe.repeat ? ne[he].split(fe.delimiter).map(function (_e) {
                    return le(_e, fe)
                }) : le(ne[he], fe)
            } return {
            path: se,
            index: ae,
            params: oe
        }
    }
}

function x(te, ee) {
    for (var re = new Array(te.length), ie = 0; ie < te.length; ie++) typeof te[ie] == "object" && (re[ie] = new RegExp("^(?:" + te[ie].pattern + ")$", R(ee)));
    return function (ne, se) {
        for (var ae = "", oe = se && se.encode || encodeURIComponent, le = !se || se.validate !== !1, he = 0; he < te.length; he++) {
            var fe = te[he];
            if (typeof fe != "string") {
                var _e, ue = ne ? ne[fe.name] : void 0;
                if (Array.isArray(ue)) {
                    if (!fe.repeat) throw new TypeError('Expected "' + fe.name + '" to not repeat, but got array');
                    if (ue.length === 0) {
                        if (fe.optional) continue;
                        throw new TypeError('Expected "' + fe.name + '" to not be empty')
                    }
                    for (var de = 0; de < ue.length; de++) {
                        if (_e = oe(ue[de], fe), le && !re[he].test(_e)) throw new TypeError('Expected all "' + fe.name + '" to match "' + fe.pattern + '"');
                        ae += (de === 0 ? fe.prefix : fe.delimiter) + _e
                    }
                } else if (typeof ue != "string" && typeof ue != "number" && typeof ue != "boolean") {
                    if (!fe.optional) throw new TypeError('Expected "' + fe.name + '" to be ' + (fe.repeat ? "an array" : "a string"))
                } else {
                    if (_e = oe(String(ue), fe), le && !re[he].test(_e)) throw new TypeError('Expected "' + fe.name + '" to match "' + fe.pattern + '", but got "' + _e + '"');
                    ae += fe.prefix + _e
                }
            } else ae += fe
        }
        return ae
    }
}

function k(te) {
    return te.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
}

function A(te) {
    return te.replace(/([=!:$/()])/g, "\\$1")
}

function R(te) {
    return te && te.sensitive ? "" : "i"
}

function T(te, ee, re) {
    for (var ie = (re = re || {}).strict, ne = re.start !== !1, se = re.end !== !1, ae = re.delimiter || y, oe = [].concat(re.endsWith || []).map(k).concat("$").join("|"), le = ne ? "^" : "", he = 0; he < te.length; he++) {
        var fe = te[he];
        if (typeof fe == "string") le += k(fe);
        else {
            var _e = fe.repeat ? "(?:" + fe.pattern + ")(?:" + k(fe.delimiter) + "(?:" + fe.pattern + "))*" : fe.pattern;
            ee && ee.push(fe), le += fe.optional ? fe.prefix ? "(?:" + k(fe.prefix) + "(" + _e + "))?" : "(" + _e + ")?" : k(fe.prefix) + "(" + _e + ")"
        }
    }
    if (se) ie || (le += "(?:" + k(ae) + ")?"), le += oe === "$" ? "$" : "(?=" + oe + ")";
    else {
        var ue = te[te.length - 1],
            de = typeof ue == "string" ? ue[ue.length - 1] === ae : ue === void 0;
        ie || (le += "(?:" + k(ae) + "(?=" + oe + "))?"), de || (le += "(?=" + k(ae) + "|" + oe + ")")
    }
    return new RegExp(le, R(re))
}

function O(te, ee, re) {
    return te instanceof RegExp ? function (ie, ne) {
        if (!ne) return ie;
        var se = ie.source.match(/\((?!\?)/g);
        if (se)
            for (var ae = 0; ae < se.length; ae++) ne.push({
                name: ae,
                prefix: null,
                delimiter: null,
                optional: !1,
                repeat: !1,
                pattern: null
            });
        return ie
    }(te, ee) : Array.isArray(te) ? function (ie, ne, se) {
        for (var ae = [], oe = 0; oe < ie.length; oe++) ae.push(O(ie[oe], ne, se).source);
        return new RegExp("(?:" + ae.join("|") + ")", R(se))
    }(te, ee, re) : function (ie, ne, se) {
        return T(g(ie, se), ne, se)
    }(te, ee, re)
}
d.match = function (te, ee) {
    var re = [];
    return E(O(te, re, ee), re)
}, d.regexpToFunction = m, d.parse = w, d.compile = function (te, ee) {
    return x(g(te, ee), ee)
}, d.tokensToFunction = p, d.tokensToRegExp = b;
var S = {
        container: "container",
        history: "history",
        namespace: "namespace",
        prefix: "data-barba",
        prevent: "prevent",
        wrapper: "wrapper"
    },
    j = new(function () {
        function te() {
            this.o = S, this.u = new DOMParser
        }
        var ee = te.prototype;
        return ee.toString = function (re) {
            return re.outerHTML
        }, ee.toDocument = function (re) {
            return this.u.parseFromString(re, "text/html")
        }, ee.toElement = function (re) {
            var ie = document.createElement("div");
            return ie.innerHTML = re, ie
        }, ee.getHtml = function (re) {
            return re === void 0 && (re = document), this.toString(re.documentElement)
        }, ee.getWrapper = function (re) {
            return re === void 0 && (re = document), re.querySelector("[" + this.o.prefix + '="' + this.o.wrapper + '"]')
        }, ee.getContainer = function (re) {
            return re === void 0 && (re = document), re.querySelector("[" + this.o.prefix + '="' + this.o.container + '"]')
        }, ee.removeContainer = function (re) {
            document.body.contains(re) && re.parentNode.removeChild(re)
        }, ee.addContainer = function (re, ie) {
            var ne = this.getContainer();
            ne ? this.s(re, ne) : ie.appendChild(re)
        }, ee.getNamespace = function (re) {
            re === void 0 && (re = document);
            var ie = re.querySelector("[" + this.o.prefix + "-" + this.o.namespace + "]");
            return ie ? ie.getAttribute(this.o.prefix + "-" + this.o.namespace) : null
        }, ee.getHref = function (re) {
            if (re.tagName && re.tagName.toLowerCase() === "a") {
                if (typeof re.href == "string") return re.href;
                var ie = re.getAttribute("href") || re.getAttribute("xlink:href");
                if (ie) return this.resolveUrl(ie.baseVal || ie)
            }
            return null
        }, ee.resolveUrl = function () {
            for (var re = arguments.length, ie = new Array(re), ne = 0; ne < re; ne++) ie[ne] = arguments[ne];
            var se = ie.length;
            if (se === 0) throw new Error("resolveUrl requires at least one argument; got none.");
            var ae = document.createElement("base");
            if (ae.href = arguments[0], se === 1) return ae.href;
            var oe = document.getElementsByTagName("head")[0];
            oe.insertBefore(ae, oe.firstChild);
            for (var le, he = document.createElement("a"), fe = 1; fe < se; fe++) he.href = arguments[fe], ae.href = le = he.href;
            return oe.removeChild(ae), le
        }, ee.s = function (re, ie) {
            ie.parentNode.insertBefore(re, ie.nextSibling)
        }, te
    }()),
    M = new(function () {
        function te() {
            this.h = [], this.v = -1
        }
        var ee = te.prototype;
        return ee.init = function (re, ie) {
            this.l = "barba";
            var ne = {
                ns: ie,
                scroll: {
                    x: window.scrollX,
                    y: window.scrollY
                },
                url: re
            };
            this.h.push(ne), this.v = 0;
            var se = {
                from: this.l,
                index: 0,
                states: [].concat(this.h)
            };
            window.history && window.history.replaceState(se, "", re)
        }, ee.change = function (re, ie, ne) {
            if (ne && ne.state) {
                var se = ne.state,
                    ae = se.index;
                ie = this.m(this.v - ae), this.replace(se.states), this.v = ae
            } else this.add(re, ie);
            return ie
        }, ee.add = function (re, ie) {
            var ne = this.size,
                se = this.p(ie),
                ae = {
                    ns: "tmp",
                    scroll: {
                        x: window.scrollX,
                        y: window.scrollY
                    },
                    url: re
                };
            this.h.push(ae), this.v = ne;
            var oe = {
                from: this.l,
                index: ne,
                states: [].concat(this.h)
            };
            switch (se) {
                case "push":
                    window.history && window.history.pushState(oe, "", re);
                    break;
                case "replace":
                    window.history && window.history.replaceState(oe, "", re)
            }
        }, ee.update = function (re, ie) {
            var ne = ie || this.v,
                se = r({}, this.get(ne), {}, re);
            this.set(ne, se)
        }, ee.remove = function (re) {
            re ? this.h.splice(re, 1) : this.h.pop(), this.v--
        }, ee.clear = function () {
            this.h = [], this.v = -1
        }, ee.replace = function (re) {
            this.h = re
        }, ee.get = function (re) {
            return this.h[re]
        }, ee.set = function (re, ie) {
            return this.h[re] = ie
        }, ee.p = function (re) {
            var ie = "push",
                ne = re,
                se = S.prefix + "-" + S.history;
            return ne.hasAttribute && ne.hasAttribute(se) && (ie = ne.getAttribute(se)), ie
        }, ee.m = function (re) {
            return Math.abs(re) > 1 ? re > 0 ? "forward" : "back" : re === 0 ? "popstate" : re > 0 ? "back" : "forward"
        }, n$1(te, [{
            key: "current",
            get: function () {
                return this.h[this.v]
            }
        }, {
            key: "state",
            get: function () {
                return this.h[this.h.length - 1]
            }
        }, {
            key: "previous",
            get: function () {
                return this.v < 1 ? null : this.h[this.v - 1]
            }
        }, {
            key: "size",
            get: function () {
                return this.h.length
            }
        }]), te
    }()),
    L = function (te, ee) {
        try {
            var re = function () {
                if (!ee.next.html) return Promise.resolve(te).then(function (ie) {
                    var ne = ee.next;
                    if (ie) {
                        var se = j.toElement(ie);
                        ne.namespace = j.getNamespace(se), ne.container = j.getContainer(se), ne.html = ie, M.update({
                            ns: ne.namespace
                        });
                        var ae = j.toDocument(ie);
                        document.title = ae.title
                    }
                })
            }();
            return Promise.resolve(re && re.then ? re.then(function () {}) : void 0)
        } catch (ie) {
            return Promise.reject(ie)
        }
    },
    $$1 = d,
    _ = {
        __proto__: null,
        update: L,
        nextTick: function () {
            return new Promise(function (te) {
                window.requestAnimationFrame(te)
            })
        },
        pathToRegexp: $$1
    },
    q = function () {
        return window.location.origin
    },
    B = function (te) {
        return te === void 0 && (te = window.location.href), U(te).port
    },
    U = function (te) {
        var ee, re = te.match(/:\d+/);
        if (re === null) /^http/.test(te) && (ee = 80), /^https/.test(te) && (ee = 443);
        else {
            var ie = re[0].substring(1);
            ee = parseInt(ie, 10)
        }
        var ne, se = te.replace(q(), ""),
            ae = {},
            oe = se.indexOf("#");
        oe >= 0 && (ne = se.slice(oe + 1), se = se.slice(0, oe));
        var le = se.indexOf("?");
        return le >= 0 && (ae = D(se.slice(le + 1)), se = se.slice(0, le)), {
            hash: ne,
            path: se,
            port: ee,
            query: ae
        }
    },
    D = function (te) {
        return te.split("&").reduce(function (ee, re) {
            var ie = re.split("=");
            return ee[ie[0]] = ie[1], ee
        }, {})
    },
    F = function (te) {
        return te === void 0 && (te = window.location.href), te.replace(/(\/#.*|\/|#.*)$/, "")
    },
    H = {
        __proto__: null,
        getHref: function () {
            return window.location.href
        },
        getOrigin: q,
        getPort: B,
        getPath: function (te) {
            return te === void 0 && (te = window.location.href), U(te).path
        },
        parse: U,
        parseQuery: D,
        clean: F
    };

function I(te, ee, re) {
    return ee === void 0 && (ee = 2e3), new Promise(function (ie, ne) {
        var se = new XMLHttpRequest;
        se.onreadystatechange = function () {
            if (se.readyState === XMLHttpRequest.DONE) {
                if (se.status === 200) ie(se.responseText);
                else if (se.status) {
                    var ae = {
                        status: se.status,
                        statusText: se.statusText
                    };
                    re(te, ae), ne(ae)
                }
            }
        }, se.ontimeout = function () {
            var ae = new Error("Timeout error [" + ee + "]");
            re(te, ae), ne(ae)
        }, se.onerror = function () {
            var ae = new Error("Fetch error");
            re(te, ae), ne(ae)
        }, se.open("GET", te), se.timeout = ee, se.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml"), se.setRequestHeader("x-barba", "yes"), se.send()
    })
}
var C = function (te) {
    return !!te && (typeof te == "object" || typeof te == "function") && typeof te.then == "function"
};

function N(te, ee) {
    return ee === void 0 && (ee = {}),
        function () {
            for (var re = arguments.length, ie = new Array(re), ne = 0; ne < re; ne++) ie[ne] = arguments[ne];
            var se = !1,
                ae = new Promise(function (oe, le) {
                    ee.async = function () {
                        return se = !0,
                            function (fe, _e) {
                                fe ? le(fe) : oe(_e)
                            }
                    };
                    var he = te.apply(ee, ie);
                    se || (C(he) ? he.then(oe, le) : oe(he))
                });
            return ae
        }
}
var X = new(function (te) {
        function ee() {
            var ie;
            return (ie = te.call(this) || this).logger = new l("@barba/core"), ie.all = ["ready", "page", "reset", "currentAdded", "currentRemoved", "nextAdded", "nextRemoved", "beforeOnce", "once", "afterOnce", "before", "beforeLeave", "leave", "afterLeave", "beforeEnter", "enter", "afterEnter", "after"], ie.registered = new Map, ie.init(), ie
        }
        i$1(ee, te);
        var re = ee.prototype;
        return re.init = function () {
            var ie = this;
            this.registered.clear(), this.all.forEach(function (ne) {
                ie[ne] || (ie[ne] = function (se, ae) {
                    ie.registered.has(ne) || ie.registered.set(ne, new Set), ie.registered.get(ne).add({
                        ctx: ae || {},
                        fn: se
                    })
                })
            })
        }, re.do = function (ie) {
            for (var ne = this, se = arguments.length, ae = new Array(se > 1 ? se - 1 : 0), oe = 1; oe < se; oe++) ae[oe - 1] = arguments[oe];
            if (this.registered.has(ie)) {
                var le = Promise.resolve();
                return this.registered.get(ie).forEach(function (he) {
                    le = le.then(function () {
                        return N(he.fn, he.ctx).apply(void 0, ae)
                    })
                }), le.catch(function (he) {
                    ne.logger.debug("Hook error [" + ie + "]"), ne.logger.error(he)
                })
            }
            return Promise.resolve()
        }, re.clear = function () {
            var ie = this;
            this.all.forEach(function (ne) {
                delete ie[ne]
            }), this.init()
        }, re.help = function () {
            this.logger.info("Available hooks: " + this.all.join(","));
            var ie = [];
            this.registered.forEach(function (ne, se) {
                return ie.push(se)
            }), this.logger.info("Registered hooks: " + ie.join(","))
        }, ee
    }(h)),
    z = function () {
        function te(ee) {
            if (this.P = [], typeof ee == "boolean") this.g = ee;
            else {
                var re = Array.isArray(ee) ? ee : [ee];
                this.P = re.map(function (ie) {
                    return $$1(ie)
                })
            }
        }
        return te.prototype.checkHref = function (ee) {
            if (typeof this.g == "boolean") return this.g;
            var re = U(ee).path;
            return this.P.some(function (ie) {
                return ie.exec(re) !== null
            })
        }, te
    }(),
    G = function (te) {
        function ee(ie) {
            var ne;
            return (ne = te.call(this, ie) || this).k = new Map, ne
        }
        i$1(ee, te);
        var re = ee.prototype;
        return re.set = function (ie, ne, se) {
            return this.k.set(ie, {
                action: se,
                request: ne
            }), {
                action: se,
                request: ne
            }
        }, re.get = function (ie) {
            return this.k.get(ie)
        }, re.getRequest = function (ie) {
            return this.k.get(ie).request
        }, re.getAction = function (ie) {
            return this.k.get(ie).action
        }, re.has = function (ie) {
            return !this.checkHref(ie) && this.k.has(ie)
        }, re.delete = function (ie) {
            return this.k.delete(ie)
        }, re.update = function (ie, ne) {
            var se = r({}, this.k.get(ie), {}, ne);
            return this.k.set(ie, se), se
        }, ee
    }(z),
    Q = function () {
        return !window.history.pushState
    },
    W = function (te) {
        return !te.el || !te.href
    },
    J = function (te) {
        var ee = te.event;
        return ee.which > 1 || ee.metaKey || ee.ctrlKey || ee.shiftKey || ee.altKey
    },
    K = function (te) {
        var ee = te.el;
        return ee.hasAttribute("target") && ee.target === "_blank"
    },
    V = function (te) {
        var ee = te.el;
        return ee.protocol !== void 0 && window.location.protocol !== ee.protocol || ee.hostname !== void 0 && window.location.hostname !== ee.hostname
    },
    Y = function (te) {
        var ee = te.el;
        return ee.port !== void 0 && B() !== B(ee.href)
    },
    Z = function (te) {
        var ee = te.el;
        return ee.getAttribute && typeof ee.getAttribute("download") == "string"
    },
    tt = function (te) {
        return te.el.hasAttribute(S.prefix + "-" + S.prevent)
    },
    nt = function (te) {
        return !!te.el.closest("[" + S.prefix + "-" + S.prevent + '="all"]')
    },
    rt = function (te) {
        var ee = te.href;
        return F(ee) === F() && B(ee) === B()
    },
    it = function (te) {
        function ee(ie) {
            var ne;
            return (ne = te.call(this, ie) || this).suite = [], ne.tests = new Map, ne.init(), ne
        }
        i$1(ee, te);
        var re = ee.prototype;
        return re.init = function () {
            this.add("pushState", Q), this.add("exists", W), this.add("newTab", J), this.add("blank", K), this.add("corsDomain", V), this.add("corsPort", Y), this.add("download", Z), this.add("preventSelf", tt), this.add("preventAll", nt), this.add("sameUrl", rt, !1)
        }, re.add = function (ie, ne, se) {
            se === void 0 && (se = !0), this.tests.set(ie, ne), se && this.suite.push(ie)
        }, re.run = function (ie, ne, se, ae) {
            return this.tests.get(ie)({
                el: ne,
                event: se,
                href: ae
            })
        }, re.checkLink = function (ie, ne, se) {
            var ae = this;
            return this.suite.some(function (oe) {
                return ae.run(oe, ie, ne, se)
            })
        }, ee
    }(z),
    et = function (te) {
        function ee(re, ie) {
            var ne;
            ie === void 0 && (ie = "Barba error");
            for (var se = arguments.length, ae = new Array(se > 2 ? se - 2 : 0), oe = 2; oe < se; oe++) ae[oe - 2] = arguments[oe];
            return (ne = te.call.apply(te, [this].concat(ae)) || this).error = re, ne.label = ie, Error.captureStackTrace && Error.captureStackTrace(function (le) {
                if (le === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return le
            }(ne), ee), ne.name = "BarbaError", ne
        }
        return i$1(ee, te), ee
    }(s(Error)),
    ot = function () {
        function te(re) {
            re === void 0 && (re = []), this.logger = new l("@barba/core"), this.all = [], this.page = [], this.once = [], this.A = [{
                name: "namespace",
                type: "strings"
            }, {
                name: "custom",
                type: "function"
            }], re && (this.all = this.all.concat(re)), this.update()
        }
        var ee = te.prototype;
        return ee.add = function (re, ie) {
            switch (re) {
                case "rule":
                    this.A.splice(ie.position || 0, 0, ie.value);
                    break;
                case "transition":
                default:
                    this.all.push(ie)
            }
            this.update()
        }, ee.resolve = function (re, ie) {
            var ne = this;
            ie === void 0 && (ie = {});
            var se = ie.once ? this.once : this.page;
            se = se.filter(ie.self ? function (ue) {
                return ue.name && ue.name === "self"
            } : function (ue) {
                return !ue.name || ue.name !== "self"
            });
            var ae = new Map,
                oe = se.find(function (ue) {
                    var de = !0,
                        me = {};
                    return !(!ie.self || ue.name !== "self") || (ne.A.reverse().forEach(function (ce) {
                        de && (de = ne.R(ue, ce, re, me), ue.from && ue.to && (de = ne.R(ue, ce, re, me, "from") && ne.R(ue, ce, re, me, "to")), ue.from && !ue.to && (de = ne.R(ue, ce, re, me, "from")), !ue.from && ue.to && (de = ne.R(ue, ce, re, me, "to")))
                    }), ae.set(ue, me), de)
                }),
                le = ae.get(oe),
                he = [];
            if (he.push(ie.once ? "once" : "page"), ie.self && he.push("self"), le) {
                var fe, _e = [oe];
                Object.keys(le).length > 0 && _e.push(le), (fe = this.logger).info.apply(fe, ["Transition found [" + he.join(",") + "]"].concat(_e))
            } else this.logger.info("No transition found [" + he.join(",") + "]");
            return oe
        }, ee.update = function () {
            var re = this;
            this.all = this.all.map(function (ie) {
                return re.T(ie)
            }).sort(function (ie, ne) {
                return ie.priority - ne.priority
            }).reverse().map(function (ie) {
                return delete ie.priority, ie
            }), this.page = this.all.filter(function (ie) {
                return ie.leave !== void 0 || ie.enter !== void 0
            }), this.once = this.all.filter(function (ie) {
                return ie.once !== void 0
            })
        }, ee.R = function (re, ie, ne, se, ae) {
            var oe = !0,
                le = !1,
                he = re,
                fe = ie.name,
                _e = fe,
                ue = fe,
                de = fe,
                me = ae ? he[ae] : he,
                ce = ae === "to" ? ne.next : ne.current;
            if (ae ? me && me[fe] : me[fe]) {
                switch (ie.type) {
                    case "strings":
                    default:
                        var Ce = Array.isArray(me[_e]) ? me[_e] : [me[_e]];
                        ce[_e] && Ce.indexOf(ce[_e]) !== -1 && (le = !0), Ce.indexOf(ce[_e]) === -1 && (oe = !1);
                        break;
                    case "object":
                        var pe = Array.isArray(me[ue]) ? me[ue] : [me[ue]];
                        ce[ue] ? (ce[ue].name && pe.indexOf(ce[ue].name) !== -1 && (le = !0), pe.indexOf(ce[ue].name) === -1 && (oe = !1)) : oe = !1;
                        break;
                    case "function":
                        me[de](ne) ? le = !0 : oe = !1
                }
                le && (ae ? (se[ae] = se[ae] || {}, se[ae][fe] = he[ae][fe]) : se[fe] = he[fe])
            }
            return oe
        }, ee.O = function (re, ie, ne) {
            var se = 0;
            return (re[ie] || re.from && re.from[ie] || re.to && re.to[ie]) && (se += Math.pow(10, ne), re.from && re.from[ie] && (se += 1), re.to && re.to[ie] && (se += 2)), se
        }, ee.T = function (re) {
            var ie = this;
            re.priority = 0;
            var ne = 0;
            return this.A.forEach(function (se, ae) {
                ne += ie.O(re, se.name, ae + 1)
            }), re.priority = ne, re
        }, te
    }(),
    ut = function () {
        function te(re) {
            re === void 0 && (re = []), this.logger = new l("@barba/core"), this.S = !1, this.store = new ot(re)
        }
        var ee = te.prototype;
        return ee.get = function (re, ie) {
            return this.store.resolve(re, ie)
        }, ee.doOnce = function (re) {
            var ie = re.data,
                ne = re.transition;
            try {
                var se = function () {
                        ae.S = !1
                    },
                    ae = this,
                    oe = ne || {};
                ae.S = !0;
                var le = f(function () {
                    return Promise.resolve(ae.j("beforeOnce", ie, oe)).then(function () {
                        return Promise.resolve(ae.once(ie, oe)).then(function () {
                            return Promise.resolve(ae.j("afterOnce", ie, oe)).then(function () {})
                        })
                    })
                }, function (he) {
                    ae.S = !1, ae.logger.debug("Transition error [before/after/once]"), ae.logger.error(he)
                });
                return Promise.resolve(le && le.then ? le.then(se) : se())
            } catch (he) {
                return Promise.reject(he)
            }
        }, ee.doPage = function (re) {
            var ie = re.data,
                ne = re.transition,
                se = re.page,
                ae = re.wrapper;
            try {
                var oe = function (de) {
                        if (le) return de;
                        he.S = !1
                    },
                    le = !1,
                    he = this,
                    fe = ne || {},
                    _e = fe.sync === !0 || !1;
                he.S = !0;
                var ue = f(function () {
                    function de() {
                        return Promise.resolve(he.j("before", ie, fe)).then(function () {
                            var ce = !1;

                            function Ce(ve) {
                                return ce ? ve : Promise.resolve(he.remove(ie)).then(function () {
                                    return Promise.resolve(he.j("after", ie, fe)).then(function () {})
                                })
                            }
                            var pe = function () {
                                if (_e) return f(function () {
                                    return Promise.resolve(he.add(ie, ae)).then(function () {
                                        return Promise.resolve(he.j("beforeLeave", ie, fe)).then(function () {
                                            return Promise.resolve(he.j("beforeEnter", ie, fe)).then(function () {
                                                return Promise.resolve(Promise.all([he.leave(ie, fe), he.enter(ie, fe)])).then(function () {
                                                    return Promise.resolve(he.j("afterLeave", ie, fe)).then(function () {
                                                        return Promise.resolve(he.j("afterEnter", ie, fe)).then(function () {})
                                                    })
                                                })
                                            })
                                        })
                                    })
                                }, function (Ee) {
                                    if (he.M(Ee)) throw new et(Ee, "Transition error [sync]")
                                });
                                var ve = function (Ee) {
                                        return ce ? Ee : f(function () {
                                            var Pe = function () {
                                                if (ge !== !1) return Promise.resolve(he.add(ie, ae)).then(function () {
                                                    return Promise.resolve(he.j("beforeEnter", ie, fe)).then(function () {
                                                        return Promise.resolve(he.enter(ie, fe, ge)).then(function () {
                                                            return Promise.resolve(he.j("afterEnter", ie, fe)).then(function () {})
                                                        })
                                                    })
                                                })
                                            }();
                                            if (Pe && Pe.then) return Pe.then(function () {})
                                        }, function (Pe) {
                                            if (he.M(Pe)) throw new et(Pe, "Transition error [before/after/enter]")
                                        })
                                    },
                                    ge = !1,
                                    ye = f(function () {
                                        return Promise.resolve(he.j("beforeLeave", ie, fe)).then(function () {
                                            return Promise.resolve(Promise.all([he.leave(ie, fe), L(se, ie)]).then(function (Ee) {
                                                return Ee[0]
                                            })).then(function (Ee) {
                                                return ge = Ee, Promise.resolve(he.j("afterLeave", ie, fe)).then(function () {})
                                            })
                                        })
                                    }, function (Ee) {
                                        if (he.M(Ee)) throw new et(Ee, "Transition error [before/after/leave]")
                                    });
                                return ye && ye.then ? ye.then(ve) : ve(ye)
                            }();
                            return pe && pe.then ? pe.then(Ce) : Ce(pe)
                        })
                    }
                    var me = function () {
                        if (_e) return Promise.resolve(L(se, ie)).then(function () {})
                    }();
                    return me && me.then ? me.then(de) : de()
                }, function (de) {
                    throw he.S = !1, de.name && de.name === "BarbaError" ? (he.logger.debug(de.label), he.logger.error(de.error), de) : (he.logger.debug("Transition error [page]"), he.logger.error(de), de)
                });
                return Promise.resolve(ue && ue.then ? ue.then(oe) : oe(ue))
            } catch (de) {
                return Promise.reject(de)
            }
        }, ee.once = function (re, ie) {
            try {
                return Promise.resolve(X.do("once", re, ie)).then(function () {
                    return ie.once ? N(ie.once, ie)(re) : Promise.resolve()
                })
            } catch (ne) {
                return Promise.reject(ne)
            }
        }, ee.leave = function (re, ie) {
            try {
                return Promise.resolve(X.do("leave", re, ie)).then(function () {
                    return ie.leave ? N(ie.leave, ie)(re) : Promise.resolve()
                })
            } catch (ne) {
                return Promise.reject(ne)
            }
        }, ee.enter = function (re, ie, ne) {
            try {
                return Promise.resolve(X.do("enter", re, ie)).then(function () {
                    return ie.enter ? N(ie.enter, ie)(re, ne) : Promise.resolve()
                })
            } catch (se) {
                return Promise.reject(se)
            }
        }, ee.add = function (re, ie) {
            try {
                return j.addContainer(re.next.container, ie), X.do("nextAdded", re), Promise.resolve()
            } catch (ne) {
                return Promise.reject(ne)
            }
        }, ee.remove = function (re) {
            try {
                return j.removeContainer(re.current.container), X.do("currentRemoved", re), Promise.resolve()
            } catch (ie) {
                return Promise.reject(ie)
            }
        }, ee.M = function (re) {
            return re.message ? !/Timeout error|Fetch error/.test(re.message) : !re.status
        }, ee.j = function (re, ie, ne) {
            try {
                return Promise.resolve(X.do(re, ie, ne)).then(function () {
                    return ne[re] ? N(ne[re], ne)(ie) : Promise.resolve()
                })
            } catch (se) {
                return Promise.reject(se)
            }
        }, n$1(te, [{
            key: "isRunning",
            get: function () {
                return this.S
            },
            set: function (re) {
                this.S = re
            }
        }, {
            key: "hasOnce",
            get: function () {
                return this.store.once.length > 0
            }
        }, {
            key: "hasSelf",
            get: function () {
                return this.store.all.some(function (re) {
                    return re.name === "self"
                })
            }
        }, {
            key: "shouldWait",
            get: function () {
                return this.store.all.some(function (re) {
                    return re.to && !re.to.route || re.sync
                })
            }
        }]), te
    }(),
    st = function () {
        function te(ee) {
            var re = this;
            this.names = ["beforeLeave", "afterLeave", "beforeEnter", "afterEnter"], this.byNamespace = new Map, ee.length !== 0 && (ee.forEach(function (ie) {
                re.byNamespace.set(ie.namespace, ie)
            }), this.names.forEach(function (ie) {
                X[ie](re.L(ie))
            }))
        }
        return te.prototype.L = function (ee) {
            var re = this;
            return function (ie) {
                var ne = ee.match(/enter/i) ? ie.next : ie.current,
                    se = re.byNamespace.get(ne.namespace);
                return se && se[ee] ? N(se[ee], se)(ie) : Promise.resolve()
            }
        }, te
    }();
Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function (te) {
    var ee = this;
    do {
        if (ee.matches(te)) return ee;
        ee = ee.parentElement || ee.parentNode
    } while (ee !== null && ee.nodeType === 1);
    return null
});
var ft = {
        container: null,
        html: "",
        namespace: "",
        url: {
            hash: "",
            href: "",
            path: "",
            port: null,
            query: {}
        }
    },
    ct = new(function () {
        function te() {
            this.version = a, this.schemaPage = ft, this.Logger = l, this.logger = new l("@barba/core"), this.plugins = [], this.hooks = X, this.dom = j, this.helpers = _, this.history = M, this.request = I, this.url = H
        }
        var ee = te.prototype;
        return ee.use = function (re, ie) {
            var ne = this.plugins;
            ne.indexOf(re) > -1 ? this.logger.warn("Plugin [" + re.name + "] already installed.") : typeof re.install == "function" ? (re.install(this, ie), ne.push(re)) : this.logger.warn("Plugin [" + re.name + '] has no "install" method.')
        }, ee.init = function (re) {
            var ie = re === void 0 ? {} : re,
                ne = ie.transitions,
                se = ne === void 0 ? [] : ne,
                ae = ie.views,
                oe = ae === void 0 ? [] : ae,
                le = ie.schema,
                he = le === void 0 ? S : le,
                fe = ie.requestError,
                _e = ie.timeout,
                ue = _e === void 0 ? 2e3 : _e,
                de = ie.cacheIgnore,
                me = de !== void 0 && de,
                ce = ie.prefetchIgnore,
                Ce = ce !== void 0 && ce,
                pe = ie.preventRunning,
                ve = pe !== void 0 && pe,
                ge = ie.prevent,
                ye = ge === void 0 ? null : ge,
                Ee = ie.debug,
                Pe = ie.logLevel;
            if (l.setLevel((Ee !== void 0 && Ee) === !0 ? "debug" : Pe === void 0 ? "off" : Pe), this.logger.info(this.version), Object.keys(he).forEach(function (Fe) {
                    S[Fe] && (S[Fe] = he[Fe])
                }), this.$ = fe, this.timeout = ue, this.cacheIgnore = me, this.prefetchIgnore = Ce, this.preventRunning = ve, this._ = this.dom.getWrapper(), !this._) throw new Error("[@barba/core] No Barba wrapper found");
            this._.setAttribute("aria-live", "polite"), this.q();
            var xe = this.data.current;
            if (!xe.container) throw new Error("[@barba/core] No Barba container found");
            if (this.cache = new G(me), this.prevent = new it(Ce), this.transitions = new ut(se), this.views = new st(oe), ye !== null) {
                if (typeof ye != "function") throw new Error("[@barba/core] Prevent should be a function");
                this.prevent.add("preventCustom", ye)
            }
            this.history.init(xe.url.href, xe.namespace), this.B = this.B.bind(this), this.U = this.U.bind(this), this.D = this.D.bind(this), this.F(), this.plugins.forEach(function (Fe) {
                return Fe.init()
            });
            var we = this.data;
            we.trigger = "barba", we.next = we.current, we.current = r({}, this.schemaPage), this.hooks.do("ready", we), this.once(we), this.q()
        }, ee.destroy = function () {
            this.q(), this.H(), this.history.clear(), this.hooks.clear(), this.plugins = []
        }, ee.force = function (re) {
            window.location.assign(re)
        }, ee.go = function (re, ie, ne) {
            var se;
            if (ie === void 0 && (ie = "barba"), this.transitions.isRunning) this.force(re);
            else if (!(se = ie === "popstate" ? this.history.current && this.url.getPath(this.history.current.url) === this.url.getPath(re) : this.prevent.run("sameUrl", null, null, re)) || this.transitions.hasSelf) return ie = this.history.change(re, ie, ne), ne && (ne.stopPropagation(), ne.preventDefault()), this.page(re, ie, se)
        }, ee.once = function (re) {
            try {
                var ie = this;
                return Promise.resolve(ie.hooks.do("beforeEnter", re)).then(function () {
                    function ne() {
                        return Promise.resolve(ie.hooks.do("afterEnter", re)).then(function () {})
                    }
                    var se = function () {
                        if (ie.transitions.hasOnce) {
                            var ae = ie.transitions.get(re, {
                                once: !0
                            });
                            return Promise.resolve(ie.transitions.doOnce({
                                transition: ae,
                                data: re
                            })).then(function () {})
                        }
                    }();
                    return se && se.then ? se.then(ne) : ne()
                })
            } catch (ne) {
                return Promise.reject(ne)
            }
        }, ee.page = function (re, ie, ne) {
            try {
                var se = function () {
                        var he = ae.data;
                        return Promise.resolve(ae.hooks.do("page", he)).then(function () {
                            var fe = f(function () {
                                var _e = ae.transitions.get(he, {
                                    once: !1,
                                    self: ne
                                });
                                return Promise.resolve(ae.transitions.doPage({
                                    data: he,
                                    page: oe,
                                    transition: _e,
                                    wrapper: ae._
                                })).then(function () {
                                    ae.q()
                                })
                            }, function () {
                                l.getLevel() === 0 && ae.force(he.current.url.href)
                            });
                            if (fe && fe.then) return fe.then(function () {})
                        })
                    },
                    ae = this;
                ae.data.next.url = r({
                    href: re
                }, ae.url.parse(re)), ae.data.trigger = ie;
                var oe = ae.cache.has(re) ? ae.cache.update(re, {
                        action: "click"
                    }).request : ae.cache.set(re, ae.request(re, ae.timeout, ae.onRequestError.bind(ae, ie)), "click").request,
                    le = function () {
                        if (ae.transitions.shouldWait) return Promise.resolve(L(oe, ae.data)).then(function () {})
                    }();
                return Promise.resolve(le && le.then ? le.then(se) : se())
            } catch (he) {
                return Promise.reject(he)
            }
        }, ee.onRequestError = function (re) {
            this.transitions.isRunning = !1;
            for (var ie = arguments.length, ne = new Array(ie > 1 ? ie - 1 : 0), se = 1; se < ie; se++) ne[se - 1] = arguments[se];
            var ae = ne[0],
                oe = ne[1],
                le = this.cache.getAction(ae);
            return this.cache.delete(ae), !(this.$ && this.$(re, le, ae, oe) === !1 || (le === "click" && this.force(ae), 1))
        }, ee.prefetch = function (re) {
            var ie = this;
            this.cache.has(re) || this.cache.set(re, this.request(re, this.timeout, this.onRequestError.bind(this, "barba")).catch(function (ne) {
                ie.logger.error(ne)
            }), "prefetch")
        }, ee.F = function () {
            this.prefetchIgnore !== !0 && (document.addEventListener("mouseover", this.B), document.addEventListener("touchstart", this.B)), document.addEventListener("click", this.U), window.addEventListener("popstate", this.D)
        }, ee.H = function () {
            this.prefetchIgnore !== !0 && (document.removeEventListener("mouseover", this.B), document.removeEventListener("touchstart", this.B)), document.removeEventListener("click", this.U), window.removeEventListener("popstate", this.D)
        }, ee.B = function (re) {
            var ie = this,
                ne = this.I(re);
            if (ne) {
                var se = this.dom.getHref(ne);
                this.prevent.checkHref(se) || this.cache.has(se) || this.cache.set(se, this.request(se, this.timeout, this.onRequestError.bind(this, ne)).catch(function (ae) {
                    ie.logger.error(ae)
                }), "enter")
            }
        }, ee.U = function (re) {
            var ie = this.I(re);
            if (ie) return this.transitions.isRunning && this.preventRunning ? (re.preventDefault(), void re.stopPropagation()) : void this.go(this.dom.getHref(ie), ie, re)
        }, ee.D = function (re) {
            this.go(this.url.getHref(), "popstate", re)
        }, ee.I = function (re) {
            for (var ie = re.target; ie && !this.dom.getHref(ie);) ie = ie.parentNode;
            if (ie && !this.prevent.checkLink(ie, re, this.dom.getHref(ie))) return ie
        }, ee.q = function () {
            var re = this.url.getHref(),
                ie = {
                    container: this.dom.getContainer(),
                    html: this.dom.getHtml(),
                    namespace: this.dom.getNamespace(),
                    url: r({
                        href: re
                    }, this.url.parse(re))
                };
            this.C = {
                current: ie,
                next: r({}, this.schemaPage),
                trigger: void 0
            }, this.hooks.do("reset", this.data)
        }, n$1(te, [{
            key: "data",
            get: function () {
                return this.C
            }
        }, {
            key: "wrapper",
            get: function () {
                return this._
            }
        }]), te
    }()),
    t$1 = "2.1.10",
    i = window.requestIdleCallback || function (te) {
        var ee = Date.now();
        return setTimeout(function () {
            te({
                didTimeout: !1,
                timeRemaining: function () {
                    return Math.max(0, 50 - (Date.now() - ee))
                }
            })
        }, 1)
    },
    n = new(function () {
        function te() {
            this.name = "@barba/prefetch", this.version = t$1, this.toPrefetch = new Set
        }
        var ee = te.prototype;
        return ee.install = function (re, ie) {
            var ne = ie === void 0 ? {} : ie,
                se = ne.root,
                ae = se === void 0 ? document.body : se,
                oe = ne.timeout,
                le = oe === void 0 ? 2e3 : oe;
            this.logger = new re.Logger(this.name), this.logger.info(this.version), this.barba = re, this.root = ae, this.timeout = le
        }, ee.init = function () {
            var re = this;
            this.barba.prefetchIgnore ? this.logger.warn("barba.prefetchIgnore is enabled") : this.barba.cacheIgnore ? this.logger.warn("barba.cacheIgnore is enabled") : (this.observer = new IntersectionObserver(function (ie) {
                ie.forEach(function (ne) {
                    if (ne.isIntersecting) {
                        var se = ne.target,
                            ae = re.barba.dom.getHref(se);
                        re.toPrefetch.has(ae) && (re.observer.unobserve(se), re.barba.cache.has(ae) ? re.barba.cache.update(ae, {
                            action: "prefetch"
                        }) : re.barba.cache.set(ae, re.barba.request(ae, re.barba.timeout, re.barba.onRequestError.bind(re.barba, "barba")).catch(function (oe) {
                            re.logger.error(oe)
                        }), "prefetch"))
                    }
                })
            }), this.observe(), this.barba.hooks.after(this.observe, this))
        }, ee.observe = function () {
            var re = this;
            i(function () {
                re.root.querySelectorAll("a").forEach(function (ie) {
                    var ne = ie,
                        se = re.barba.dom.getHref(ne);
                    re.barba.cache.has(se) || re.barba.prevent.checkHref(se) || re.barba.prevent.checkLink(ne, {}, se) || (re.observer.observe(ie), re.toPrefetch.add(se))
                })
            }, {
                timeout: this.timeout
            })
        }, te
    }()),
    commonjsGlobal = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function getDefaultExportFromCjs(te) {
    return te && te.__esModule && Object.prototype.hasOwnProperty.call(te, "default") ? te.default : te
}
var fontfaceobserver_standalone = {
    exports: {}
};
(function (te) {
    (function () {
        function ee(ce, Ce) {
            document.addEventListener ? ce.addEventListener("scroll", Ce, !1) : ce.attachEvent("scroll", Ce)
        }

        function re(ce) {
            document.body ? ce() : document.addEventListener ? document.addEventListener("DOMContentLoaded", function Ce() {
                document.removeEventListener("DOMContentLoaded", Ce), ce()
            }) : document.attachEvent("onreadystatechange", function Ce() {
                (document.readyState == "interactive" || document.readyState == "complete") && (document.detachEvent("onreadystatechange", Ce), ce())
            })
        }

        function ie(ce) {
            this.g = document.createElement("div"), this.g.setAttribute("aria-hidden", "true"), this.g.appendChild(document.createTextNode(ce)), this.h = document.createElement("span"), this.i = document.createElement("span"), this.m = document.createElement("span"), this.j = document.createElement("span"), this.l = -1, this.h.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.i.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.j.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.m.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;", this.h.appendChild(this.m), this.i.appendChild(this.j), this.g.appendChild(this.h), this.g.appendChild(this.i)
        }

        function ne(ce, Ce) {
            ce.g.style.cssText = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" + Ce + ";"
        }

        function se(ce) {
            var Ce = ce.g.offsetWidth,
                pe = Ce + 100;
            return ce.j.style.width = pe + "px", ce.i.scrollLeft = pe, ce.h.scrollLeft = ce.h.scrollWidth + 100, ce.l !== Ce ? (ce.l = Ce, !0) : !1
        }

        function ae(ce, Ce) {
            function pe() {
                var ge = ve;
                se(ge) && ge.g.parentNode !== null && Ce(ge.l)
            }
            var ve = ce;
            ee(ce.h, pe), ee(ce.i, pe), se(ce)
        }

        function oe(ce, Ce, pe) {
            Ce = Ce || {}, pe = pe || window, this.family = ce, this.style = Ce.style || "normal", this.weight = Ce.weight || "normal", this.stretch = Ce.stretch || "normal", this.context = pe
        }
        var le = null,
            he = null,
            fe = null,
            _e = null;

        function ue(ce) {
            return he === null && (de(ce) && /Apple/.test(window.navigator.vendor) ? (ce = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent), he = !!ce && 603 > parseInt(ce[1], 10)) : he = !1), he
        }

        function de(ce) {
            return _e === null && (_e = !!ce.document.fonts), _e
        }

        function me(ce, Ce) {
            var pe = ce.style,
                ve = ce.weight;
            if (fe === null) {
                var ge = document.createElement("div");
                try {
                    ge.style.font = "condensed 100px sans-serif"
                } catch {}
                fe = ge.style.font !== ""
            }
            return [pe, ve, fe ? ce.stretch : "", "100px", Ce].join(" ")
        }
        oe.prototype.load = function (ce, Ce) {
            var pe = this,
                ve = ce || "BESbswy",
                ge = 0,
                ye = Ce || 3e3,
                Ee = new Date().getTime();
            return new Promise(function (Pe, xe) {
                if (de(pe.context) && !ue(pe.context)) {
                    var we = new Promise(function (Le, Re) {
                            function Me() {
                                new Date().getTime() - Ee >= ye ? Re(Error("" + ye + "ms timeout exceeded")) : pe.context.document.fonts.load(me(pe, '"' + pe.family + '"'), ve).then(function ($e) {
                                    1 <= $e.length ? Le() : setTimeout(Me, 25)
                                }, Re)
                            }
                            Me()
                        }),
                        Fe = new Promise(function (Le, Re) {
                            ge = setTimeout(function () {
                                Re(Error("" + ye + "ms timeout exceeded"))
                            }, ye)
                        });
                    Promise.race([Fe, we]).then(function () {
                        clearTimeout(ge), Pe(pe)
                    }, xe)
                } else re(function () {
                    function Le() {
                        var Ve;
                        (Ve = Ie != -1 && Se != -1 || Ie != -1 && Ae != -1 || Se != -1 && Ae != -1) && ((Ve = Ie != Se && Ie != Ae && Se != Ae) || (le === null && (Ve = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent), le = !!Ve && (536 > parseInt(Ve[1], 10) || parseInt(Ve[1], 10) === 536 && 11 >= parseInt(Ve[2], 10))), Ve = le && (Ie == be && Se == be && Ae == be || Ie == De && Se == De && Ae == De || Ie == Te && Se == Te && Ae == Te)), Ve = !Ve), Ve && (ke.parentNode !== null && ke.parentNode.removeChild(ke), clearTimeout(ge), Pe(pe))
                    }

                    function Re() {
                        if (new Date().getTime() - Ee >= ye) ke.parentNode !== null && ke.parentNode.removeChild(ke), xe(Error("" + ye + "ms timeout exceeded"));
                        else {
                            var Ve = pe.context.document.hidden;
                            (Ve === !0 || Ve === void 0) && (Ie = Me.g.offsetWidth, Se = $e.g.offsetWidth, Ae = Be.g.offsetWidth, Le()), ge = setTimeout(Re, 50)
                        }
                    }
                    var Me = new ie(ve),
                        $e = new ie(ve),
                        Be = new ie(ve),
                        Ie = -1,
                        Se = -1,
                        Ae = -1,
                        be = -1,
                        De = -1,
                        Te = -1,
                        ke = document.createElement("div");
                    ke.dir = "ltr", ne(Me, me(pe, "sans-serif")), ne($e, me(pe, "serif")), ne(Be, me(pe, "monospace")), ke.appendChild(Me.g), ke.appendChild($e.g), ke.appendChild(Be.g), pe.context.document.body.appendChild(ke), be = Me.g.offsetWidth, De = $e.g.offsetWidth, Te = Be.g.offsetWidth, Re(), ae(Me, function (Ve) {
                        Ie = Ve, Le()
                    }), ne(Me, me(pe, '"' + pe.family + '",sans-serif')), ae($e, function (Ve) {
                        Se = Ve, Le()
                    }), ne($e, me(pe, '"' + pe.family + '",serif')), ae(Be, function (Ve) {
                        Ae = Ve, Le()
                    }), ne(Be, me(pe, '"' + pe.family + '",monospace'))
                })
            })
        }, te.exports = oe
    })()
})(fontfaceobserver_standalone);
var fontfaceobserver_standaloneExports = fontfaceobserver_standalone.exports,
    FontFaceObserver = getDefaultExportFromCjs(fontfaceobserver_standaloneExports);

function t(te, ee, re) {
    return Math.max(te, Math.min(ee, re))
}
class Animate {
    advance(ee) {
        var oe;
        if (!this.isRunning) return;
        let re = !1;
        if (this.lerp) this.value = (ie = this.value, ne = this.to, se = 60 * this.lerp, ae = ee, function (le, he, fe) {
            return (1 - fe) * le + fe * he
        }(ie, ne, 1 - Math.exp(-se * ae))), Math.round(this.value) === this.to && (this.value = this.to, re = !0);
        else {
            this.currentTime += ee;
            const le = t(0, this.currentTime / this.duration, 1);
            re = le >= 1;
            const he = re ? 1 : this.easing(le);
            this.value = this.from + (this.to - this.from) * he
        }
        var ie, ne, se, ae;
        (oe = this.onUpdate) == null || oe.call(this, this.value, re), re && this.stop()
    }
    stop() {
        this.isRunning = !1
    }
    fromTo(ee, re, {
        lerp: ie = .1,
        duration: ne = 1,
        easing: se = le => le,
        onStart: ae,
        onUpdate: oe
    }) {
        this.from = this.value = ee, this.to = re, this.lerp = ie, this.duration = ne, this.easing = se, this.currentTime = 0, this.isRunning = !0, ae == null || ae(), this.onUpdate = oe
    }
}
class Dimensions {
    constructor({
        wrapper: ee,
        content: re,
        autoResize: ie = !0,
        debounce: ne = 250
    } = {}) {
        Jt(this, "resize", () => {
            this.onWrapperResize(), this.onContentResize()
        });
        Jt(this, "onWrapperResize", () => {
            this.wrapper === window ? (this.width = window.innerWidth, this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight)
        });
        Jt(this, "onContentResize", () => {
            this.wrapper === window ? (this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth) : (this.scrollHeight = this.wrapper.scrollHeight, this.scrollWidth = this.wrapper.scrollWidth)
        });
        this.wrapper = ee, this.content = re, ie && (this.debouncedResize = function (se, ae) {
            let oe;
            return function () {
                let le = arguments,
                    he = this;
                clearTimeout(oe), oe = setTimeout(function () {
                    se.apply(he, le)
                }, ae)
            }
        }(this.resize, ne), this.wrapper === window ? window.addEventListener("resize", this.debouncedResize, !1) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize()
    }
    destroy() {
        var ee, re;
        (ee = this.wrapperResizeObserver) == null || ee.disconnect(), (re = this.contentResizeObserver) == null || re.disconnect(), window.removeEventListener("resize", this.debouncedResize, !1)
    }
    get limit() {
        return {
            x: this.scrollWidth - this.width,
            y: this.scrollHeight - this.height
        }
    }
}
class Emitter {
    constructor() {
        this.events = {}
    }
    emit(ee, ...re) {
        let ie = this.events[ee] || [];
        for (let ne = 0, se = ie.length; ne < se; ne++) ie[ne](...re)
    }
    on(ee, re) {
        var ie;
        return (ie = this.events[ee]) != null && ie.push(re) || (this.events[ee] = [re]), () => {
            var ne;
            this.events[ee] = (ne = this.events[ee]) == null ? void 0 : ne.filter(se => re !== se)
        }
    }
    off(ee, re) {
        var ie;
        this.events[ee] = (ie = this.events[ee]) == null ? void 0 : ie.filter(ne => re !== ne)
    }
    destroy() {
        this.events = {}
    }
}
const e = 100 / 6;
class VirtualScroll {
    constructor(ee, {
        wheelMultiplier: re = 1,
        touchMultiplier: ie = 1
    }) {
        Jt(this, "onTouchStart", ee => {
            const {
                clientX: re,
                clientY: ie
            } = ee.targetTouches ? ee.targetTouches[0] : ee;
            this.touchStart.x = re, this.touchStart.y = ie, this.lastDelta = {
                x: 0,
                y: 0
            }, this.emitter.emit("scroll", {
                deltaX: 0,
                deltaY: 0,
                event: ee
            })
        });
        Jt(this, "onTouchMove", ee => {
            const {
                clientX: re,
                clientY: ie
            } = ee.targetTouches ? ee.targetTouches[0] : ee, ne = -(re - this.touchStart.x) * this.touchMultiplier, se = -(ie - this.touchStart.y) * this.touchMultiplier;
            this.touchStart.x = re, this.touchStart.y = ie, this.lastDelta = {
                x: ne,
                y: se
            }, this.emitter.emit("scroll", {
                deltaX: ne,
                deltaY: se,
                event: ee
            })
        });
        Jt(this, "onTouchEnd", ee => {
            this.emitter.emit("scroll", {
                deltaX: this.lastDelta.x,
                deltaY: this.lastDelta.y,
                event: ee
            })
        });
        Jt(this, "onWheel", ee => {
            let {
                deltaX: re,
                deltaY: ie,
                deltaMode: ne
            } = ee;
            re *= ne === 1 ? e : ne === 2 ? this.windowWidth : 1, ie *= ne === 1 ? e : ne === 2 ? this.windowHeight : 1, re *= this.wheelMultiplier, ie *= this.wheelMultiplier, this.emitter.emit("scroll", {
                deltaX: re,
                deltaY: ie,
                event: ee
            })
        });
        Jt(this, "onWindowResize", () => {
            this.windowWidth = window.innerWidth, this.windowHeight = window.innerHeight
        });
        this.element = ee, this.wheelMultiplier = re, this.touchMultiplier = ie, this.touchStart = {
            x: null,
            y: null
        }, this.emitter = new Emitter, window.addEventListener("resize", this.onWindowResize, !1), this.onWindowResize(), this.element.addEventListener("wheel", this.onWheel, {
            passive: !1
        }), this.element.addEventListener("touchstart", this.onTouchStart, {
            passive: !1
        }), this.element.addEventListener("touchmove", this.onTouchMove, {
            passive: !1
        }), this.element.addEventListener("touchend", this.onTouchEnd, {
            passive: !1
        })
    }
    on(ee, re) {
        return this.emitter.on(ee, re)
    }
    destroy() {
        this.emitter.destroy(), window.removeEventListener("resize", this.onWindowResize, !1), this.element.removeEventListener("wheel", this.onWheel, {
            passive: !1
        }), this.element.removeEventListener("touchstart", this.onTouchStart, {
            passive: !1
        }), this.element.removeEventListener("touchmove", this.onTouchMove, {
            passive: !1
        }), this.element.removeEventListener("touchend", this.onTouchEnd, {
            passive: !1
        })
    }
}
class Lenis {
    constructor({
        wrapper: ee = window,
        content: re = document.documentElement,
        wheelEventsTarget: ie = ee,
        eventsTarget: ne = ie,
        smoothWheel: se = !0,
        syncTouch: ae = !1,
        syncTouchLerp: oe = .075,
        touchInertiaMultiplier: le = 35,
        duration: he,
        easing: fe = ge => Math.min(1, 1.001 - Math.pow(2, -10 * ge)),
        lerp: _e = !he && .1,
        infinite: ue = !1,
        orientation: de = "vertical",
        gestureOrientation: me = "vertical",
        touchMultiplier: ce = 1,
        wheelMultiplier: Ce = 1,
        autoResize: pe = !0,
        __experimental__naiveDimensions: ve = !1
    } = {}) {
        this.__isSmooth = !1, this.__isScrolling = !1, this.__isStopped = !1, this.__isLocked = !1, this.onVirtualScroll = ({
            deltaX: ge,
            deltaY: ye,
            event: Ee
        }) => {
            if (Ee.ctrlKey) return;
            const Pe = Ee.type.includes("touch"),
                xe = Ee.type.includes("wheel");
            if (this.options.syncTouch && Pe && Ee.type === "touchstart" && !this.isStopped && !this.isLocked) return void this.reset();
            const we = ge === 0 && ye === 0,
                Fe = this.options.gestureOrientation === "vertical" && ye === 0 || this.options.gestureOrientation === "horizontal" && ge === 0;
            if (we || Fe) return;
            let Le = Ee.composedPath();
            if (Le = Le.slice(0, Le.indexOf(this.rootElement)), Le.find(Be => {
                    var Ie, Se, Ae, be, De;
                    return ((Ie = Be.hasAttribute) === null || Ie === void 0 ? void 0 : Ie.call(Be, "data-lenis-prevent")) || Pe && ((Se = Be.hasAttribute) === null || Se === void 0 ? void 0 : Se.call(Be, "data-lenis-prevent-touch")) || xe && ((Ae = Be.hasAttribute) === null || Ae === void 0 ? void 0 : Ae.call(Be, "data-lenis-prevent-wheel")) || ((be = Be.classList) === null || be === void 0 ? void 0 : be.contains("lenis")) && !(!((De = Be.classList) === null || De === void 0) && De.contains("lenis-stopped"))
                })) return;
            if (this.isStopped || this.isLocked) return void Ee.preventDefault();
            if (this.isSmooth = this.options.syncTouch && Pe || this.options.smoothWheel && xe, !this.isSmooth) return this.isScrolling = !1, void this.animate.stop();
            Ee.preventDefault();
            let Re = ye;
            this.options.gestureOrientation === "both" ? Re = Math.abs(ye) > Math.abs(ge) ? ye : ge : this.options.gestureOrientation === "horizontal" && (Re = ge);
            const Me = Pe && this.options.syncTouch,
                $e = Pe && Ee.type === "touchend" && Math.abs(Re) > 5;
            $e && (Re = this.velocity * this.options.touchInertiaMultiplier), this.scrollTo(this.targetScroll + Re, Object.assign({
                programmatic: !1
            }, Me ? {
                lerp: $e ? this.options.syncTouchLerp : 1
            } : {
                lerp: this.options.lerp,
                duration: this.options.duration,
                easing: this.options.easing
            }))
        }, this.onNativeScroll = () => {
            if (!this.__preventNextScrollEvent && !this.isScrolling) {
                const ge = this.animatedScroll;
                this.animatedScroll = this.targetScroll = this.actualScroll, this.velocity = 0, this.direction = Math.sign(this.animatedScroll - ge), this.emit()
            }
        }, window.lenisVersion = "1.0.42", ee !== document.documentElement && ee !== document.body || (ee = window), this.options = {
            wrapper: ee,
            content: re,
            wheelEventsTarget: ie,
            eventsTarget: ne,
            smoothWheel: se,
            syncTouch: ae,
            syncTouchLerp: oe,
            touchInertiaMultiplier: le,
            duration: he,
            easing: fe,
            lerp: _e,
            infinite: ue,
            gestureOrientation: me,
            orientation: de,
            touchMultiplier: ce,
            wheelMultiplier: Ce,
            autoResize: pe,
            __experimental__naiveDimensions: ve
        }, this.animate = new Animate, this.emitter = new Emitter, this.dimensions = new Dimensions({
            wrapper: ee,
            content: re,
            autoResize: pe
        }), this.toggleClassName("lenis", !0), this.velocity = 0, this.isLocked = !1, this.isStopped = !1, this.isSmooth = ae || se, this.isScrolling = !1, this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll, !1), this.virtualScroll = new VirtualScroll(ne, {
            touchMultiplier: ce,
            wheelMultiplier: Ce
        }), this.virtualScroll.on("scroll", this.onVirtualScroll)
    }
    destroy() {
        this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, !1), this.virtualScroll.destroy(), this.dimensions.destroy(), this.toggleClassName("lenis", !1), this.toggleClassName("lenis-smooth", !1), this.toggleClassName("lenis-scrolling", !1), this.toggleClassName("lenis-stopped", !1), this.toggleClassName("lenis-locked", !1)
    }
    on(ee, re) {
        return this.emitter.on(ee, re)
    }
    off(ee, re) {
        return this.emitter.off(ee, re)
    }
    setScroll(ee) {
        this.isHorizontal ? this.rootElement.scrollLeft = ee : this.rootElement.scrollTop = ee
    }
    resize() {
        this.dimensions.resize()
    }
    emit() {
        this.emitter.emit("scroll", this)
    }
    reset() {
        this.isLocked = !1, this.isScrolling = !1, this.animatedScroll = this.targetScroll = this.actualScroll, this.velocity = 0, this.animate.stop()
    }
    start() {
        this.isStopped && (this.isStopped = !1, this.reset())
    }
    stop() {
        this.isStopped || (this.isStopped = !0, this.animate.stop(), this.reset())
    }
    raf(ee) {
        const re = ee - (this.time || ee);
        this.time = ee, this.animate.advance(.001 * re)
    }
    scrollTo(ee, {
        offset: re = 0,
        immediate: ie = !1,
        lock: ne = !1,
        duration: se = this.options.duration,
        easing: ae = this.options.easing,
        lerp: oe = !se && this.options.lerp,
        onComplete: le,
        force: he = !1,
        programmatic: fe = !0
    } = {}) {
        if (!this.isStopped && !this.isLocked || he) {
            if (["top", "left", "start"].includes(ee)) ee = 0;
            else if (["bottom", "right", "end"].includes(ee)) ee = this.limit;
            else {
                let _e;
                if (typeof ee == "string" ? _e = document.querySelector(ee) : ee != null && ee.nodeType && (_e = ee), _e) {
                    if (this.options.wrapper !== window) {
                        const de = this.options.wrapper.getBoundingClientRect();
                        re -= this.isHorizontal ? de.left : de.top
                    }
                    const ue = _e.getBoundingClientRect();
                    ee = (this.isHorizontal ? ue.left : ue.top) + this.animatedScroll
                }
            }
            if (typeof ee == "number") {
                if (ee += re, ee = Math.round(ee), this.options.infinite ? fe && (this.targetScroll = this.animatedScroll = this.scroll) : ee = t(0, ee, this.limit), ie) return this.animatedScroll = this.targetScroll = ee, this.setScroll(this.scroll), this.reset(), void(le == null || le(this));
                if (!fe) {
                    if (ee === this.targetScroll) return;
                    this.targetScroll = ee
                }
                this.animate.fromTo(this.animatedScroll, ee, {
                    duration: se,
                    easing: ae,
                    lerp: oe,
                    onStart: () => {
                        ne && (this.isLocked = !0), this.isScrolling = !0
                    },
                    onUpdate: (_e, ue) => {
                        this.isScrolling = !0, this.velocity = _e - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = _e, this.setScroll(this.scroll), fe && (this.targetScroll = _e), ue || this.emit(), ue && (this.reset(), this.emit(), le == null || le(this), this.__preventNextScrollEvent = !0, requestAnimationFrame(() => {
                            delete this.__preventNextScrollEvent
                        }))
                    }
                })
            }
        }
    }
    get rootElement() {
        return this.options.wrapper === window ? document.documentElement : this.options.wrapper
    }
    get limit() {
        return this.options.__experimental__naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? "x" : "y"]
    }
    get isHorizontal() {
        return this.options.orientation === "horizontal"
    }
    get actualScroll() {
        return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop
    }
    get scroll() {
        return this.options.infinite ? (ee = this.animatedScroll, re = this.limit, (ee % re + re) % re) : this.animatedScroll;
        var ee, re
    }
    get progress() {
        return this.limit === 0 ? 1 : this.scroll / this.limit
    }
    get isSmooth() {
        return this.__isSmooth
    }
    set isSmooth(ee) {
        this.__isSmooth !== ee && (this.__isSmooth = ee, this.toggleClassName("lenis-smooth", ee))
    }
    get isScrolling() {
        return this.__isScrolling
    }
    set isScrolling(ee) {
        this.__isScrolling !== ee && (this.__isScrolling = ee, this.toggleClassName("lenis-scrolling", ee))
    }
    get isStopped() {
        return this.__isStopped
    }
    set isStopped(ee) {
        this.__isStopped !== ee && (this.__isStopped = ee, this.toggleClassName("lenis-stopped", ee))
    }
    get isLocked() {
        return this.__isLocked
    }
    set isLocked(ee) {
        this.__isLocked !== ee && (this.__isLocked = ee, this.toggleClassName("lenis-locked", ee))
    }
    get className() {
        let ee = "lenis";
        return this.isStopped && (ee += " lenis-stopped"), this.isLocked && (ee += " lenis-locked"), this.isScrolling && (ee += " lenis-scrolling"), this.isSmooth && (ee += " lenis-smooth"), ee
    }
    toggleClassName(ee, re) {
        this.rootElement.classList.toggle(ee, re), this.emitter.emit("className change", this)
    }
}

function _assertThisInitialized(te) {
    if (te === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return te
}

function _inheritsLoose(te, ee) {
    te.prototype = Object.create(ee.prototype), te.prototype.constructor = te, te.__proto__ = ee
}
/*!
 * GSAP 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var _config = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
            lineHeight: ""
        }
    },
    _defaults$1 = {
        duration: .5,
        overwrite: !1,
        delay: 0
    },
    _suppressOverwrites$1, _reverting$1, _context$3, _bigNum$1 = 1e8,
    _tinyNum = 1 / _bigNum$1,
    _2PI = Math.PI * 2,
    _HALF_PI = _2PI / 4,
    _gsID = 0,
    _sqrt = Math.sqrt,
    _cos = Math.cos,
    _sin = Math.sin,
    _isString$1 = function (ee) {
        return typeof ee == "string"
    },
    _isFunction$1 = function (ee) {
        return typeof ee == "function"
    },
    _isNumber$1 = function (ee) {
        return typeof ee == "number"
    },
    _isUndefined = function (ee) {
        return typeof ee > "u"
    },
    _isObject$1 = function (ee) {
        return typeof ee == "object"
    },
    _isNotFalse = function (ee) {
        return ee !== !1
    },
    _windowExists$2 = function () {
        return typeof window < "u"
    },
    _isFuncOrString = function (ee) {
        return _isFunction$1(ee) || _isString$1(ee)
    },
    _isTypedArray = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function () {},
    _isArray = Array.isArray,
    _strictNumExp = /(?:-?\.?\d|\.)+/gi,
    _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    _relExp = /[+-]=-?[.\d]+/,
    _delimitedValueExp = /[^,'"\[\]\s]+/gi,
    _unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    _globalTimeline, _win$4, _coreInitted$3, _doc$4, _globals = {},
    _installScope = {},
    _coreReady, _install = function (ee) {
        return (_installScope = _merge(ee, _globals)) && gsap$3
    },
    _missingPlugin = function (ee, re) {
        return console.warn("Invalid property", ee, "set to", re, "Missing plugin? gsap.registerPlugin()")
    },
    _warn = function (ee, re) {
        return !re && console.warn(ee)
    },
    _addGlobal = function (ee, re) {
        return ee && (_globals[ee] = re) && _installScope && (_installScope[ee] = re) || _globals
    },
    _emptyFunc = function () {
        return 0
    },
    _startAtRevertConfig = {
        suppressEvents: !0,
        isStart: !0,
        kill: !1
    },
    _revertConfigNoKill = {
        suppressEvents: !0,
        kill: !1
    },
    _revertConfig = {
        suppressEvents: !0
    },
    _reservedProps = {},
    _lazyTweens = [],
    _lazyLookup = {},
    _lastRenderedFrame, _plugins = {},
    _effects = {},
    _nextGCFrame = 30,
    _harnessPlugins = [],
    _callbackNames = "",
    _harness = function (ee) {
        var re = ee[0],
            ie, ne;
        if (_isObject$1(re) || _isFunction$1(re) || (ee = [ee]), !(ie = (re._gsap || {}).harness)) {
            for (ne = _harnessPlugins.length; ne-- && !_harnessPlugins[ne].targetTest(re););
            ie = _harnessPlugins[ne]
        }
        for (ne = ee.length; ne--;) ee[ne] && (ee[ne]._gsap || (ee[ne]._gsap = new GSCache(ee[ne], ie))) || ee.splice(ne, 1);
        return ee
    },
    _getCache = function (ee) {
        return ee._gsap || _harness(toArray(ee))[0]._gsap
    },
    _getProperty = function (ee, re, ie) {
        return (ie = ee[re]) && _isFunction$1(ie) ? ee[re]() : _isUndefined(ie) && ee.getAttribute && ee.getAttribute(re) || ie
    },
    _forEachName = function (ee, re) {
        return (ee = ee.split(",")).forEach(re) || ee
    },
    _round$1 = function (ee) {
        return Math.round(ee * 1e5) / 1e5 || 0
    },
    _roundPrecise = function (ee) {
        return Math.round(ee * 1e7) / 1e7 || 0
    },
    _parseRelative = function (ee, re) {
        var ie = re.charAt(0),
            ne = parseFloat(re.substr(2));
        return ee = parseFloat(ee), ie === "+" ? ee + ne : ie === "-" ? ee - ne : ie === "*" ? ee * ne : ee / ne
    },
    _arrayContainsAny = function (ee, re) {
        for (var ie = re.length, ne = 0; ee.indexOf(re[ne]) < 0 && ++ne < ie;);
        return ne < ie
    },
    _lazyRender = function () {
        var ee = _lazyTweens.length,
            re = _lazyTweens.slice(0),
            ie, ne;
        for (_lazyLookup = {}, _lazyTweens.length = 0, ie = 0; ie < ee; ie++) ne = re[ie], ne && ne._lazy && (ne.render(ne._lazy[0], ne._lazy[1], !0)._lazy = 0)
    },
    _lazySafeRender = function (ee, re, ie, ne) {
        _lazyTweens.length && !_reverting$1 && _lazyRender(), ee.render(re, ie, ne || _reverting$1 && re < 0 && (ee._initted || ee._startAt)), _lazyTweens.length && !_reverting$1 && _lazyRender()
    },
    _numericIfPossible = function (ee) {
        var re = parseFloat(ee);
        return (re || re === 0) && (ee + "").match(_delimitedValueExp).length < 2 ? re : _isString$1(ee) ? ee.trim() : ee
    },
    _passThrough$1 = function (ee) {
        return ee
    },
    _setDefaults$1 = function (ee, re) {
        for (var ie in re) ie in ee || (ee[ie] = re[ie]);
        return ee
    },
    _setKeyframeDefaults = function (ee) {
        return function (re, ie) {
            for (var ne in ie) ne in re || ne === "duration" && ee || ne === "ease" || (re[ne] = ie[ne])
        }
    },
    _merge = function (ee, re) {
        for (var ie in re) ee[ie] = re[ie];
        return ee
    },
    _mergeDeep = function te(ee, re) {
        for (var ie in re) ie !== "__proto__" && ie !== "constructor" && ie !== "prototype" && (ee[ie] = _isObject$1(re[ie]) ? te(ee[ie] || (ee[ie] = {}), re[ie]) : re[ie]);
        return ee
    },
    _copyExcluding = function (ee, re) {
        var ie = {},
            ne;
        for (ne in ee) ne in re || (ie[ne] = ee[ne]);
        return ie
    },
    _inheritDefaults = function (ee) {
        var re = ee.parent || _globalTimeline,
            ie = ee.keyframes ? _setKeyframeDefaults(_isArray(ee.keyframes)) : _setDefaults$1;
        if (_isNotFalse(ee.inherit))
            for (; re;) ie(ee, re.vars.defaults), re = re.parent || re._dp;
        return ee
    },
    _arraysMatch = function (ee, re) {
        for (var ie = ee.length, ne = ie === re.length; ne && ie-- && ee[ie] === re[ie];);
        return ie < 0
    },
    _addLinkedListItem = function (ee, re, ie, ne, se) {
        ie === void 0 && (ie = "_first"), ne === void 0 && (ne = "_last");
        var ae = ee[ne],
            oe;
        if (se)
            for (oe = re[se]; ae && ae[se] > oe;) ae = ae._prev;
        return ae ? (re._next = ae._next, ae._next = re) : (re._next = ee[ie], ee[ie] = re), re._next ? re._next._prev = re : ee[ne] = re, re._prev = ae, re.parent = re._dp = ee, re
    },
    _removeLinkedListItem = function (ee, re, ie, ne) {
        ie === void 0 && (ie = "_first"), ne === void 0 && (ne = "_last");
        var se = re._prev,
            ae = re._next;
        se ? se._next = ae : ee[ie] === re && (ee[ie] = ae), ae ? ae._prev = se : ee[ne] === re && (ee[ne] = se), re._next = re._prev = re.parent = null
    },
    _removeFromParent = function (ee, re) {
        ee.parent && (!re || ee.parent.autoRemoveChildren) && ee.parent.remove(ee), ee._act = 0
    },
    _uncache = function (ee, re) {
        if (ee && (!re || re._end > ee._dur || re._start < 0))
            for (var ie = ee; ie;) ie._dirty = 1, ie = ie.parent;
        return ee
    },
    _recacheAncestors = function (ee) {
        for (var re = ee.parent; re && re.parent;) re._dirty = 1, re.totalDuration(), re = re.parent;
        return ee
    },
    _rewindStartAt = function (ee, re, ie, ne) {
        return ee._startAt && (_reverting$1 ? ee._startAt.revert(_revertConfigNoKill) : ee.vars.immediateRender && !ee.vars.autoRevert || ee._startAt.render(re, !0, ne))
    },
    _hasNoPausedAncestors = function te(ee) {
        return !ee || ee._ts && te(ee.parent)
    },
    _elapsedCycleDuration = function (ee) {
        return ee._repeat ? _animationCycle(ee._tTime, ee = ee.duration() + ee._rDelay) * ee : 0
    },
    _animationCycle = function (ee, re) {
        var ie = Math.floor(ee /= re);
        return ee && ie === ee ? ie - 1 : ie
    },
    _parentToChildTotalTime = function (ee, re) {
        return (ee - re._start) * re._ts + (re._ts >= 0 ? 0 : re._dirty ? re.totalDuration() : re._tDur)
    },
    _setEnd = function (ee) {
        return ee._end = _roundPrecise(ee._start + (ee._tDur / Math.abs(ee._ts || ee._rts || _tinyNum) || 0))
    },
    _alignPlayhead = function (ee, re) {
        var ie = ee._dp;
        return ie && ie.smoothChildTiming && ee._ts && (ee._start = _roundPrecise(ie._time - (ee._ts > 0 ? re / ee._ts : ((ee._dirty ? ee.totalDuration() : ee._tDur) - re) / -ee._ts)), _setEnd(ee), ie._dirty || _uncache(ie, ee)), ee
    },
    _postAddChecks = function (ee, re) {
        var ie;
        if ((re._time || re._initted && !re._dur) && (ie = _parentToChildTotalTime(ee.rawTime(), re), (!re._dur || _clamp$1(0, re.totalDuration(), ie) - re._tTime > _tinyNum) && re.render(ie, !0)), _uncache(ee, re)._dp && ee._initted && ee._time >= ee._dur && ee._ts) {
            if (ee._dur < ee.duration())
                for (ie = ee; ie._dp;) ie.rawTime() >= 0 && ie.totalTime(ie._tTime), ie = ie._dp;
            ee._zTime = -_tinyNum
        }
    },
    _addToTimeline = function (ee, re, ie, ne) {
        return re.parent && _removeFromParent(re), re._start = _roundPrecise((_isNumber$1(ie) ? ie : ie || ee !== _globalTimeline ? _parsePosition$1(ee, ie, re) : ee._time) + re._delay), re._end = _roundPrecise(re._start + (re.totalDuration() / Math.abs(re.timeScale()) || 0)), _addLinkedListItem(ee, re, "_first", "_last", ee._sort ? "_start" : 0), _isFromOrFromStart(re) || (ee._recent = re), ne || _postAddChecks(ee, re), ee._ts < 0 && _alignPlayhead(ee, ee._tTime), ee
    },
    _scrollTrigger = function (ee, re) {
        return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", re)) && _globals.ScrollTrigger.create(re, ee)
    },
    _attemptInitTween = function (ee, re, ie, ne, se) {
        if (_initTween(ee, re, se), !ee._initted) return 1;
        if (!ie && ee._pt && !_reverting$1 && (ee._dur && ee.vars.lazy !== !1 || !ee._dur && ee.vars.lazy) && _lastRenderedFrame !== _ticker.frame) return _lazyTweens.push(ee), ee._lazy = [se, ne], 1
    },
    _parentPlayheadIsBeforeStart = function te(ee) {
        var re = ee.parent;
        return re && re._ts && re._initted && !re._lock && (re.rawTime() < 0 || te(re))
    },
    _isFromOrFromStart = function (ee) {
        var re = ee.data;
        return re === "isFromStart" || re === "isStart"
    },
    _renderZeroDurationTween = function (ee, re, ie, ne) {
        var se = ee.ratio,
            ae = re < 0 || !re && (!ee._start && _parentPlayheadIsBeforeStart(ee) && !(!ee._initted && _isFromOrFromStart(ee)) || (ee._ts < 0 || ee._dp._ts < 0) && !_isFromOrFromStart(ee)) ? 0 : 1,
            oe = ee._rDelay,
            le = 0,
            he, fe, _e;
        if (oe && ee._repeat && (le = _clamp$1(0, ee._tDur, re), fe = _animationCycle(le, oe), ee._yoyo && fe & 1 && (ae = 1 - ae), fe !== _animationCycle(ee._tTime, oe) && (se = 1 - ae, ee.vars.repeatRefresh && ee._initted && ee.invalidate())), ae !== se || _reverting$1 || ne || ee._zTime === _tinyNum || !re && ee._zTime) {
            if (!ee._initted && _attemptInitTween(ee, re, ne, ie, le)) return;
            for (_e = ee._zTime, ee._zTime = re || (ie ? _tinyNum : 0), ie || (ie = re && !_e), ee.ratio = ae, ee._from && (ae = 1 - ae), ee._time = 0, ee._tTime = le, he = ee._pt; he;) he.r(ae, he.d), he = he._next;
            re < 0 && _rewindStartAt(ee, re, ie, !0), ee._onUpdate && !ie && _callback$1(ee, "onUpdate"), le && ee._repeat && !ie && ee.parent && _callback$1(ee, "onRepeat"), (re >= ee._tDur || re < 0) && ee.ratio === ae && (ae && _removeFromParent(ee, 1), !ie && !_reverting$1 && (_callback$1(ee, ae ? "onComplete" : "onReverseComplete", !0), ee._prom && ee._prom()))
        } else ee._zTime || (ee._zTime = re)
    },
    _findNextPauseTween = function (ee, re, ie) {
        var ne;
        if (ie > re)
            for (ne = ee._first; ne && ne._start <= ie;) {
                if (ne.data === "isPause" && ne._start > re) return ne;
                ne = ne._next
            } else
                for (ne = ee._last; ne && ne._start >= ie;) {
                    if (ne.data === "isPause" && ne._start < re) return ne;
                    ne = ne._prev
                }
    },
    _setDuration = function (ee, re, ie, ne) {
        var se = ee._repeat,
            ae = _roundPrecise(re) || 0,
            oe = ee._tTime / ee._tDur;
        return oe && !ne && (ee._time *= ae / ee._dur), ee._dur = ae, ee._tDur = se ? se < 0 ? 1e10 : _roundPrecise(ae * (se + 1) + ee._rDelay * se) : ae, oe > 0 && !ne && _alignPlayhead(ee, ee._tTime = ee._tDur * oe), ee.parent && _setEnd(ee), ie || _uncache(ee.parent, ee), ee
    },
    _onUpdateTotalDuration = function (ee) {
        return ee instanceof Timeline ? _uncache(ee) : _setDuration(ee, ee._dur)
    },
    _zeroPosition = {
        _start: 0,
        endTime: _emptyFunc,
        totalDuration: _emptyFunc
    },
    _parsePosition$1 = function te(ee, re, ie) {
        var ne = ee.labels,
            se = ee._recent || _zeroPosition,
            ae = ee.duration() >= _bigNum$1 ? se.endTime(!1) : ee._dur,
            oe, le, he;
        return _isString$1(re) && (isNaN(re) || re in ne) ? (le = re.charAt(0), he = re.substr(-1) === "%", oe = re.indexOf("="), le === "<" || le === ">" ? (oe >= 0 && (re = re.replace(/=/, "")), (le === "<" ? se._start : se.endTime(se._repeat >= 0)) + (parseFloat(re.substr(1)) || 0) * (he ? (oe < 0 ? se : ie).totalDuration() / 100 : 1)) : oe < 0 ? (re in ne || (ne[re] = ae), ne[re]) : (le = parseFloat(re.charAt(oe - 1) + re.substr(oe + 1)), he && ie && (le = le / 100 * (_isArray(ie) ? ie[0] : ie).totalDuration()), oe > 1 ? te(ee, re.substr(0, oe - 1), ie) + le : ae + le)) : re == null ? ae : +re
    },
    _createTweenType = function (ee, re, ie) {
        var ne = _isNumber$1(re[1]),
            se = (ne ? 2 : 1) + (ee < 2 ? 0 : 1),
            ae = re[se],
            oe, le;
        if (ne && (ae.duration = re[1]), ae.parent = ie, ee) {
            for (oe = ae, le = ie; le && !("immediateRender" in oe);) oe = le.vars.defaults || {}, le = _isNotFalse(le.vars.inherit) && le.parent;
            ae.immediateRender = _isNotFalse(oe.immediateRender), ee < 2 ? ae.runBackwards = 1 : ae.startAt = re[se - 1]
        }
        return new Tween(re[0], ae, re[se + 1])
    },
    _conditionalReturn = function (ee, re) {
        return ee || ee === 0 ? re(ee) : re
    },
    _clamp$1 = function (ee, re, ie) {
        return ie < ee ? ee : ie > re ? re : ie
    },
    getUnit = function (ee, re) {
        return !_isString$1(ee) || !(re = _unitExp.exec(ee)) ? "" : re[1]
    },
    clamp = function (ee, re, ie) {
        return _conditionalReturn(ie, function (ne) {
            return _clamp$1(ee, re, ne)
        })
    },
    _slice = [].slice,
    _isArrayLike = function (ee, re) {
        return ee && _isObject$1(ee) && "length" in ee && (!re && !ee.length || ee.length - 1 in ee && _isObject$1(ee[0])) && !ee.nodeType && ee !== _win$4
    },
    _flatten = function (ee, re, ie) {
        return ie === void 0 && (ie = []), ee.forEach(function (ne) {
            var se;
            return _isString$1(ne) && !re || _isArrayLike(ne, 1) ? (se = ie).push.apply(se, toArray(ne)) : ie.push(ne)
        }) || ie
    },
    toArray = function (ee, re, ie) {
        return _context$3 && !re && _context$3.selector ? _context$3.selector(ee) : _isString$1(ee) && !ie && (_coreInitted$3 || !_wake()) ? _slice.call((re || _doc$4).querySelectorAll(ee), 0) : _isArray(ee) ? _flatten(ee, ie) : _isArrayLike(ee) ? _slice.call(ee, 0) : ee ? [ee] : []
    },
    selector = function (ee) {
        return ee = toArray(ee)[0] || _warn("Invalid scope") || {},
            function (re) {
                var ie = ee.current || ee.nativeElement || ee;
                return toArray(re, ie.querySelectorAll ? ie : ie === ee ? _warn("Invalid scope") || _doc$4.createElement("div") : ee)
            }
    },
    shuffle = function (ee) {
        return ee.sort(function () {
            return .5 - Math.random()
        })
    },
    distribute = function (ee) {
        if (_isFunction$1(ee)) return ee;
        var re = _isObject$1(ee) ? ee : {
                each: ee
            },
            ie = _parseEase(re.ease),
            ne = re.from || 0,
            se = parseFloat(re.base) || 0,
            ae = {},
            oe = ne > 0 && ne < 1,
            le = isNaN(ne) || oe,
            he = re.axis,
            fe = ne,
            _e = ne;
        return _isString$1(ne) ? fe = _e = {
                center: .5,
                edges: .5,
                end: 1
            } [ne] || 0 : !oe && le && (fe = ne[0], _e = ne[1]),
            function (ue, de, me) {
                var ce = (me || re).length,
                    Ce = ae[ce],
                    pe, ve, ge, ye, Ee, Pe, xe, we, Fe;
                if (!Ce) {
                    if (Fe = re.grid === "auto" ? 0 : (re.grid || [1, _bigNum$1])[1], !Fe) {
                        for (xe = -_bigNum$1; xe < (xe = me[Fe++].getBoundingClientRect().left) && Fe < ce;);
                        Fe--
                    }
                    for (Ce = ae[ce] = [], pe = le ? Math.min(Fe, ce) * fe - .5 : ne % Fe, ve = Fe === _bigNum$1 ? 0 : le ? ce * _e / Fe - .5 : ne / Fe | 0, xe = 0, we = _bigNum$1, Pe = 0; Pe < ce; Pe++) ge = Pe % Fe - pe, ye = ve - (Pe / Fe | 0), Ce[Pe] = Ee = he ? Math.abs(he === "y" ? ye : ge) : _sqrt(ge * ge + ye * ye), Ee > xe && (xe = Ee), Ee < we && (we = Ee);
                    ne === "random" && shuffle(Ce), Ce.max = xe - we, Ce.min = we, Ce.v = ce = (parseFloat(re.amount) || parseFloat(re.each) * (Fe > ce ? ce - 1 : he ? he === "y" ? ce / Fe : Fe : Math.max(Fe, ce / Fe)) || 0) * (ne === "edges" ? -1 : 1), Ce.b = ce < 0 ? se - ce : se, Ce.u = getUnit(re.amount || re.each) || 0, ie = ie && ce < 0 ? _invertEase(ie) : ie
                }
                return ce = (Ce[ue] - Ce.min) / Ce.max || 0, _roundPrecise(Ce.b + (ie ? ie(ce) : ce) * Ce.v) + Ce.u
            }
    },
    _roundModifier = function (ee) {
        var re = Math.pow(10, ((ee + "").split(".")[1] || "").length);
        return function (ie) {
            var ne = _roundPrecise(Math.round(parseFloat(ie) / ee) * ee * re);
            return (ne - ne % 1) / re + (_isNumber$1(ie) ? 0 : getUnit(ie))
        }
    },
    snap = function (ee, re) {
        var ie = _isArray(ee),
            ne, se;
        return !ie && _isObject$1(ee) && (ne = ie = ee.radius || _bigNum$1, ee.values ? (ee = toArray(ee.values), (se = !_isNumber$1(ee[0])) && (ne *= ne)) : ee = _roundModifier(ee.increment)), _conditionalReturn(re, ie ? _isFunction$1(ee) ? function (ae) {
            return se = ee(ae), Math.abs(se - ae) <= ne ? se : ae
        } : function (ae) {
            for (var oe = parseFloat(se ? ae.x : ae), le = parseFloat(se ? ae.y : 0), he = _bigNum$1, fe = 0, _e = ee.length, ue, de; _e--;) se ? (ue = ee[_e].x - oe, de = ee[_e].y - le, ue = ue * ue + de * de) : ue = Math.abs(ee[_e] - oe), ue < he && (he = ue, fe = _e);
            return fe = !ne || he <= ne ? ee[fe] : ae, se || fe === ae || _isNumber$1(ae) ? fe : fe + getUnit(ae)
        } : _roundModifier(ee))
    },
    random = function (ee, re, ie, ne) {
        return _conditionalReturn(_isArray(ee) ? !re : ie === !0 ? !!(ie = 0) : !ne, function () {
            return _isArray(ee) ? ee[~~(Math.random() * ee.length)] : (ie = ie || 1e-5) && (ne = ie < 1 ? Math.pow(10, (ie + "").length - 2) : 1) && Math.floor(Math.round((ee - ie / 2 + Math.random() * (re - ee + ie * .99)) / ie) * ie * ne) / ne
        })
    },
    pipe = function () {
        for (var ee = arguments.length, re = new Array(ee), ie = 0; ie < ee; ie++) re[ie] = arguments[ie];
        return function (ne) {
            return re.reduce(function (se, ae) {
                return ae(se)
            }, ne)
        }
    },
    unitize = function (ee, re) {
        return function (ie) {
            return ee(parseFloat(ie)) + (re || getUnit(ie))
        }
    },
    normalize = function (ee, re, ie) {
        return mapRange(ee, re, 0, 1, ie)
    },
    _wrapArray = function (ee, re, ie) {
        return _conditionalReturn(ie, function (ne) {
            return ee[~~re(ne)]
        })
    },
    wrap = function te(ee, re, ie) {
        var ne = re - ee;
        return _isArray(ee) ? _wrapArray(ee, te(0, ee.length), re) : _conditionalReturn(ie, function (se) {
            return (ne + (se - ee) % ne) % ne + ee
        })
    },
    wrapYoyo = function te(ee, re, ie) {
        var ne = re - ee,
            se = ne * 2;
        return _isArray(ee) ? _wrapArray(ee, te(0, ee.length - 1), re) : _conditionalReturn(ie, function (ae) {
            return ae = (se + (ae - ee) % se) % se || 0, ee + (ae > ne ? se - ae : ae)
        })
    },
    _replaceRandom = function (ee) {
        for (var re = 0, ie = "", ne, se, ae, oe; ~(ne = ee.indexOf("random(", re));) ae = ee.indexOf(")", ne), oe = ee.charAt(ne + 7) === "[", se = ee.substr(ne + 7, ae - ne - 7).match(oe ? _delimitedValueExp : _strictNumExp), ie += ee.substr(re, ne - re) + random(oe ? se : +se[0], oe ? 0 : +se[1], +se[2] || 1e-5), re = ae + 1;
        return ie + ee.substr(re, ee.length - re)
    },
    mapRange = function (ee, re, ie, ne, se) {
        var ae = re - ee,
            oe = ne - ie;
        return _conditionalReturn(se, function (le) {
            return ie + ((le - ee) / ae * oe || 0)
        })
    },
    interpolate = function te(ee, re, ie, ne) {
        var se = isNaN(ee + re) ? 0 : function (de) {
            return (1 - de) * ee + de * re
        };
        if (!se) {
            var ae = _isString$1(ee),
                oe = {},
                le, he, fe, _e, ue;
            if (ie === !0 && (ne = 1) && (ie = null), ae) ee = {
                p: ee
            }, re = {
                p: re
            };
            else if (_isArray(ee) && !_isArray(re)) {
                for (fe = [], _e = ee.length, ue = _e - 2, he = 1; he < _e; he++) fe.push(te(ee[he - 1], ee[he]));
                _e--, se = function (me) {
                    me *= _e;
                    var ce = Math.min(ue, ~~me);
                    return fe[ce](me - ce)
                }, ie = re
            } else ne || (ee = _merge(_isArray(ee) ? [] : {}, ee));
            if (!fe) {
                for (le in re) _addPropTween.call(oe, ee, le, "get", re[le]);
                se = function (me) {
                    return _renderPropTweens(me, oe) || (ae ? ee.p : ee)
                }
            }
        }
        return _conditionalReturn(ie, se)
    },
    _getLabelInDirection = function (ee, re, ie) {
        var ne = ee.labels,
            se = _bigNum$1,
            ae, oe, le;
        for (ae in ne) oe = ne[ae] - re, oe < 0 == !!ie && oe && se > (oe = Math.abs(oe)) && (le = ae, se = oe);
        return le
    },
    _callback$1 = function (ee, re, ie) {
        var ne = ee.vars,
            se = ne[re],
            ae = _context$3,
            oe = ee._ctx,
            le, he, fe;
        if (se) return le = ne[re + "Params"], he = ne.callbackScope || ee, ie && _lazyTweens.length && _lazyRender(), oe && (_context$3 = oe), fe = le ? se.apply(he, le) : se.call(he), _context$3 = ae, fe
    },
    _interrupt = function (ee) {
        return _removeFromParent(ee), ee.scrollTrigger && ee.scrollTrigger.kill(!!_reverting$1), ee.progress() < 1 && _callback$1(ee, "onInterrupt"), ee
    },
    _quickTween, _createPlugin = function (ee) {
        ee = !ee.name && ee.default || ee;
        var re = ee.name,
            ie = _isFunction$1(ee),
            ne = re && !ie && ee.init ? function () {
                this._props = []
            } : ee,
            se = {
                init: _emptyFunc,
                render: _renderPropTweens,
                add: _addPropTween,
                kill: _killPropTweensOf,
                modifier: _addPluginModifier,
                rawVars: 0
            },
            ae = {
                targetTest: 0,
                get: 0,
                getSetter: _getSetter,
                aliases: {},
                register: 0
            };
        if (_wake(), ee !== ne) {
            if (_plugins[re]) return;
            _setDefaults$1(ne, _setDefaults$1(_copyExcluding(ee, se), ae)), _merge(ne.prototype, _merge(se, _copyExcluding(ee, ae))), _plugins[ne.prop = re] = ne, ee.targetTest && (_harnessPlugins.push(ne), _reservedProps[re] = 1), re = (re === "css" ? "CSS" : re.charAt(0).toUpperCase() + re.substr(1)) + "Plugin"
        }
        _addGlobal(re, ne), ee.register && ee.register(gsap$3, ne, PropTween)
    },
    _255 = 255,
    _colorLookup = {
        aqua: [0, _255, _255],
        lime: [0, _255, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, _255],
        navy: [0, 0, 128],
        white: [_255, _255, _255],
        olive: [128, 128, 0],
        yellow: [_255, _255, 0],
        orange: [_255, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [_255, 0, 0],
        pink: [_255, 192, 203],
        cyan: [0, _255, _255],
        transparent: [_255, _255, _255, 0]
    },
    _hue = function (ee, re, ie) {
        return ee += ee < 0 ? 1 : ee > 1 ? -1 : 0, (ee * 6 < 1 ? re + (ie - re) * ee * 6 : ee < .5 ? ie : ee * 3 < 2 ? re + (ie - re) * (2 / 3 - ee) * 6 : re) * _255 + .5 | 0
    },
    splitColor = function (ee, re, ie) {
        var ne = ee ? _isNumber$1(ee) ? [ee >> 16, ee >> 8 & _255, ee & _255] : 0 : _colorLookup.black,
            se, ae, oe, le, he, fe, _e, ue, de, me;
        if (!ne) {
            if (ee.substr(-1) === "," && (ee = ee.substr(0, ee.length - 1)), _colorLookup[ee]) ne = _colorLookup[ee];
            else if (ee.charAt(0) === "#") {
                if (ee.length < 6 && (se = ee.charAt(1), ae = ee.charAt(2), oe = ee.charAt(3), ee = "#" + se + se + ae + ae + oe + oe + (ee.length === 5 ? ee.charAt(4) + ee.charAt(4) : "")), ee.length === 9) return ne = parseInt(ee.substr(1, 6), 16), [ne >> 16, ne >> 8 & _255, ne & _255, parseInt(ee.substr(7), 16) / 255];
                ee = parseInt(ee.substr(1), 16), ne = [ee >> 16, ee >> 8 & _255, ee & _255]
            } else if (ee.substr(0, 3) === "hsl") {
                if (ne = me = ee.match(_strictNumExp), !re) le = +ne[0] % 360 / 360, he = +ne[1] / 100, fe = +ne[2] / 100, ae = fe <= .5 ? fe * (he + 1) : fe + he - fe * he, se = fe * 2 - ae, ne.length > 3 && (ne[3] *= 1), ne[0] = _hue(le + 1 / 3, se, ae), ne[1] = _hue(le, se, ae), ne[2] = _hue(le - 1 / 3, se, ae);
                else if (~ee.indexOf("=")) return ne = ee.match(_numExp), ie && ne.length < 4 && (ne[3] = 1), ne
            } else ne = ee.match(_strictNumExp) || _colorLookup.transparent;
            ne = ne.map(Number)
        }
        return re && !me && (se = ne[0] / _255, ae = ne[1] / _255, oe = ne[2] / _255, _e = Math.max(se, ae, oe), ue = Math.min(se, ae, oe), fe = (_e + ue) / 2, _e === ue ? le = he = 0 : (de = _e - ue, he = fe > .5 ? de / (2 - _e - ue) : de / (_e + ue), le = _e === se ? (ae - oe) / de + (ae < oe ? 6 : 0) : _e === ae ? (oe - se) / de + 2 : (se - ae) / de + 4, le *= 60), ne[0] = ~~(le + .5), ne[1] = ~~(he * 100 + .5), ne[2] = ~~(fe * 100 + .5)), ie && ne.length < 4 && (ne[3] = 1), ne
    },
    _colorOrderData = function (ee) {
        var re = [],
            ie = [],
            ne = -1;
        return ee.split(_colorExp).forEach(function (se) {
            var ae = se.match(_numWithUnitExp) || [];
            re.push.apply(re, ae), ie.push(ne += ae.length + 1)
        }), re.c = ie, re
    },
    _formatColors = function (ee, re, ie) {
        var ne = "",
            se = (ee + ne).match(_colorExp),
            ae = re ? "hsla(" : "rgba(",
            oe = 0,
            le, he, fe, _e;
        if (!se) return ee;
        if (se = se.map(function (ue) {
                return (ue = splitColor(ue, re, 1)) && ae + (re ? ue[0] + "," + ue[1] + "%," + ue[2] + "%," + ue[3] : ue.join(",")) + ")"
            }), ie && (fe = _colorOrderData(ee), le = ie.c, le.join(ne) !== fe.c.join(ne)))
            for (he = ee.replace(_colorExp, "1").split(_numWithUnitExp), _e = he.length - 1; oe < _e; oe++) ne += he[oe] + (~le.indexOf(oe) ? se.shift() || ae + "0,0,0,0)" : (fe.length ? fe : se.length ? se : ie).shift());
        if (!he)
            for (he = ee.split(_colorExp), _e = he.length - 1; oe < _e; oe++) ne += he[oe] + se[oe];
        return ne + he[_e]
    },
    _colorExp = function () {
        var te = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
            ee;
        for (ee in _colorLookup) te += "|" + ee + "\\b";
        return new RegExp(te + ")", "gi")
    }(),
    _hslExp = /hsl[a]?\(/,
    _colorStringFilter = function (ee) {
        var re = ee.join(" "),
            ie;
        if (_colorExp.lastIndex = 0, _colorExp.test(re)) return ie = _hslExp.test(re), ee[1] = _formatColors(ee[1], ie), ee[0] = _formatColors(ee[0], ie, _colorOrderData(ee[1])), !0
    },
    _tickerActive, _ticker = function () {
        var te = Date.now,
            ee = 500,
            re = 33,
            ie = te(),
            ne = ie,
            se = 1e3 / 240,
            ae = se,
            oe = [],
            le, he, fe, _e, ue, de, me = function ce(Ce) {
                var pe = te() - ne,
                    ve = Ce === !0,
                    ge, ye, Ee, Pe;
                if (pe > ee && (ie += pe - re), ne += pe, Ee = ne - ie, ge = Ee - ae, (ge > 0 || ve) && (Pe = ++_e.frame, ue = Ee - _e.time * 1e3, _e.time = Ee = Ee / 1e3, ae += ge + (ge >= se ? 4 : se - ge), ye = 1), ve || (le = he(ce)), ye)
                    for (de = 0; de < oe.length; de++) oe[de](Ee, ue, Pe, Ce)
            };
        return _e = {
            time: 0,
            frame: 0,
            tick: function () {
                me(!0)
            },
            deltaRatio: function (Ce) {
                return ue / (1e3 / (Ce || 60))
            },
            wake: function () {
                _coreReady && (!_coreInitted$3 && _windowExists$2() && (_win$4 = _coreInitted$3 = window, _doc$4 = _win$4.document || {}, _globals.gsap = gsap$3, (_win$4.gsapVersions || (_win$4.gsapVersions = [])).push(gsap$3.version), _install(_installScope || _win$4.GreenSockGlobals || !_win$4.gsap && _win$4 || {}), fe = _win$4.requestAnimationFrame), le && _e.sleep(), he = fe || function (Ce) {
                    return setTimeout(Ce, ae - _e.time * 1e3 + 1 | 0)
                }, _tickerActive = 1, me(2))
            },
            sleep: function () {
                (fe ? _win$4.cancelAnimationFrame : clearTimeout)(le), _tickerActive = 0, he = _emptyFunc
            },
            lagSmoothing: function (Ce, pe) {
                ee = Ce || 1 / 0, re = Math.min(pe || 33, ee)
            },
            fps: function (Ce) {
                se = 1e3 / (Ce || 240), ae = _e.time * 1e3 + se
            },
            add: function (Ce, pe, ve) {
                var ge = pe ? function (ye, Ee, Pe, xe) {
                    Ce(ye, Ee, Pe, xe), _e.remove(ge)
                } : Ce;
                return _e.remove(Ce), oe[ve ? "unshift" : "push"](ge), _wake(), ge
            },
            remove: function (Ce, pe) {
                ~(pe = oe.indexOf(Ce)) && oe.splice(pe, 1) && de >= pe && de--
            },
            _listeners: oe
        }, _e
    }(),
    _wake = function () {
        return !_tickerActive && _ticker.wake()
    },
    _easeMap = {},
    _customEaseExp = /^[\d.\-M][\d.\-,\s]/,
    _quotesExp = /["']/g,
    _parseObjectInString = function (ee) {
        for (var re = {}, ie = ee.substr(1, ee.length - 3).split(":"), ne = ie[0], se = 1, ae = ie.length, oe, le, he; se < ae; se++) le = ie[se], oe = se !== ae - 1 ? le.lastIndexOf(",") : le.length, he = le.substr(0, oe), re[ne] = isNaN(he) ? he.replace(_quotesExp, "").trim() : +he, ne = le.substr(oe + 1).trim();
        return re
    },
    _valueInParentheses = function (ee) {
        var re = ee.indexOf("(") + 1,
            ie = ee.indexOf(")"),
            ne = ee.indexOf("(", re);
        return ee.substring(re, ~ne && ne < ie ? ee.indexOf(")", ie + 1) : ie)
    },
    _configEaseFromString = function (ee) {
        var re = (ee + "").split("("),
            ie = _easeMap[re[0]];
        return ie && re.length > 1 && ie.config ? ie.config.apply(null, ~ee.indexOf("{") ? [_parseObjectInString(re[1])] : _valueInParentheses(ee).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(ee) ? _easeMap._CE("", ee) : ie
    },
    _invertEase = function (ee) {
        return function (re) {
            return 1 - ee(1 - re)
        }
    },
    _propagateYoyoEase = function te(ee, re) {
        for (var ie = ee._first, ne; ie;) ie instanceof Timeline ? te(ie, re) : ie.vars.yoyoEase && (!ie._yoyo || !ie._repeat) && ie._yoyo !== re && (ie.timeline ? te(ie.timeline, re) : (ne = ie._ease, ie._ease = ie._yEase, ie._yEase = ne, ie._yoyo = re)), ie = ie._next
    },
    _parseEase = function (ee, re) {
        return ee && (_isFunction$1(ee) ? ee : _easeMap[ee] || _configEaseFromString(ee)) || re
    },
    _insertEase = function (ee, re, ie, ne) {
        ie === void 0 && (ie = function (le) {
            return 1 - re(1 - le)
        }), ne === void 0 && (ne = function (le) {
            return le < .5 ? re(le * 2) / 2 : 1 - re((1 - le) * 2) / 2
        });
        var se = {
                easeIn: re,
                easeOut: ie,
                easeInOut: ne
            },
            ae;
        return _forEachName(ee, function (oe) {
            _easeMap[oe] = _globals[oe] = se, _easeMap[ae = oe.toLowerCase()] = ie;
            for (var le in se) _easeMap[ae + (le === "easeIn" ? ".in" : le === "easeOut" ? ".out" : ".inOut")] = _easeMap[oe + "." + le] = se[le]
        }), se
    },
    _easeInOutFromOut = function (ee) {
        return function (re) {
            return re < .5 ? (1 - ee(1 - re * 2)) / 2 : .5 + ee((re - .5) * 2) / 2
        }
    },
    _configElastic = function te(ee, re, ie) {
        var ne = re >= 1 ? re : 1,
            se = (ie || (ee ? .3 : .45)) / (re < 1 ? re : 1),
            ae = se / _2PI * (Math.asin(1 / ne) || 0),
            oe = function (fe) {
                return fe === 1 ? 1 : ne * Math.pow(2, -10 * fe) * _sin((fe - ae) * se) + 1
            },
            le = ee === "out" ? oe : ee === "in" ? function (he) {
                return 1 - oe(1 - he)
            } : _easeInOutFromOut(oe);
        return se = _2PI / se, le.config = function (he, fe) {
            return te(ee, he, fe)
        }, le
    },
    _configBack = function te(ee, re) {
        re === void 0 && (re = 1.70158);
        var ie = function (ae) {
                return ae ? --ae * ae * ((re + 1) * ae + re) + 1 : 0
            },
            ne = ee === "out" ? ie : ee === "in" ? function (se) {
                return 1 - ie(1 - se)
            } : _easeInOutFromOut(ie);
        return ne.config = function (se) {
            return te(ee, se)
        }, ne
    };
_forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function (te, ee) {
    var re = ee < 5 ? ee + 1 : ee;
    _insertEase(te + ",Power" + (re - 1), ee ? function (ie) {
        return Math.pow(ie, re)
    } : function (ie) {
        return ie
    }, function (ie) {
        return 1 - Math.pow(1 - ie, re)
    }, function (ie) {
        return ie < .5 ? Math.pow(ie * 2, re) / 2 : 1 - Math.pow((1 - ie) * 2, re) / 2
    })
});
_easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
_insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());
(function (te, ee) {
    var re = 1 / ee,
        ie = 2 * re,
        ne = 2.5 * re,
        se = function (oe) {
            return oe < re ? te * oe * oe : oe < ie ? te * Math.pow(oe - 1.5 / ee, 2) + .75 : oe < ne ? te * (oe -= 2.25 / ee) * oe + .9375 : te * Math.pow(oe - 2.625 / ee, 2) + .984375
        };
    _insertEase("Bounce", function (ae) {
        return 1 - se(1 - ae)
    }, se)
})(7.5625, 2.75);
_insertEase("Expo", function (te) {
    return te ? Math.pow(2, 10 * (te - 1)) : 0
});
_insertEase("Circ", function (te) {
    return -(_sqrt(1 - te * te) - 1)
});
_insertEase("Sine", function (te) {
    return te === 1 ? 1 : -_cos(te * _HALF_PI) + 1
});
_insertEase("Back", _configBack("in"), _configBack("out"), _configBack());
_easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
    config: function (ee, re) {
        ee === void 0 && (ee = 1);
        var ie = 1 / ee,
            ne = ee + (re ? 0 : 1),
            se = re ? 1 : 0,
            ae = 1 - _tinyNum;
        return function (oe) {
            return ((ne * _clamp$1(0, ae, oe) | 0) + se) * ie
        }
    }
};
_defaults$1.ease = _easeMap["quad.out"];
_forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (te) {
    return _callbackNames += te + "," + te + "Params,"
});
var GSCache = function (ee, re) {
        this.id = _gsID++, ee._gsap = this, this.target = ee, this.harness = re, this.get = re ? re.get : _getProperty, this.set = re ? re.getSetter : _getSetter
    },
    Animation = function () {
        function te(re) {
            this.vars = re, this._delay = +re.delay || 0, (this._repeat = re.repeat === 1 / 0 ? -2 : re.repeat || 0) && (this._rDelay = re.repeatDelay || 0, this._yoyo = !!re.yoyo || !!re.yoyoEase), this._ts = 1, _setDuration(this, +re.duration, 1, 1), this.data = re.data, _context$3 && (this._ctx = _context$3, _context$3.data.push(this)), _tickerActive || _ticker.wake()
        }
        var ee = te.prototype;
        return ee.delay = function (ie) {
            return ie || ie === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + ie - this._delay), this._delay = ie, this) : this._delay
        }, ee.duration = function (ie) {
            return arguments.length ? this.totalDuration(this._repeat > 0 ? ie + (ie + this._rDelay) * this._repeat : ie) : this.totalDuration() && this._dur
        }, ee.totalDuration = function (ie) {
            return arguments.length ? (this._dirty = 0, _setDuration(this, this._repeat < 0 ? ie : (ie - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }, ee.totalTime = function (ie, ne) {
            if (_wake(), !arguments.length) return this._tTime;
            var se = this._dp;
            if (se && se.smoothChildTiming && this._ts) {
                for (_alignPlayhead(this, ie), !se._dp || se.parent || _postAddChecks(se, this); se && se.parent;) se.parent._time !== se._start + (se._ts >= 0 ? se._tTime / se._ts : (se.totalDuration() - se._tTime) / -se._ts) && se.totalTime(se._tTime, !0), se = se.parent;
                !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && ie < this._tDur || this._ts < 0 && ie > 0 || !this._tDur && !ie) && _addToTimeline(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== ie || !this._dur && !ne || this._initted && Math.abs(this._zTime) === _tinyNum || !ie && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = ie), _lazySafeRender(this, ie, ne)), this
        }, ee.time = function (ie, ne) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), ie + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (ie ? this._dur : 0), ne) : this._time
        }, ee.totalProgress = function (ie, ne) {
            return arguments.length ? this.totalTime(this.totalDuration() * ie, ne) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
        }, ee.progress = function (ie, ne) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - ie : ie) + _elapsedCycleDuration(this), ne) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
        }, ee.iteration = function (ie, ne) {
            var se = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (ie - 1) * se, ne) : this._repeat ? _animationCycle(this._tTime, se) + 1 : 1
        }, ee.timeScale = function (ie) {
            if (!arguments.length) return this._rts === -_tinyNum ? 0 : this._rts;
            if (this._rts === ie) return this;
            var ne = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime;
            return this._rts = +ie || 0, this._ts = this._ps || ie === -_tinyNum ? 0 : this._rts, this.totalTime(_clamp$1(-this._delay, this._tDur, ne), !0), _setEnd(this), _recacheAncestors(this)
        }, ee.paused = function (ie) {
            return arguments.length ? (this._ps !== ie && (this._ps = ie, ie ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (_wake(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum)))), this) : this._ps
        }, ee.startTime = function (ie) {
            if (arguments.length) {
                this._start = ie;
                var ne = this.parent || this._dp;
                return ne && (ne._sort || !this.parent) && _addToTimeline(ne, this, ie - this._delay), this
            }
            return this._start
        }, ee.endTime = function (ie) {
            return this._start + (_isNotFalse(ie) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
        }, ee.rawTime = function (ie) {
            var ne = this.parent || this._dp;
            return ne ? ie && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? _parentToChildTotalTime(ne.rawTime(ie), this) : this._tTime : this._tTime
        }, ee.revert = function (ie) {
            ie === void 0 && (ie = _revertConfig);
            var ne = _reverting$1;
            return _reverting$1 = ie, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(ie), this.totalTime(-.01, ie.suppressEvents)), this.data !== "nested" && ie.kill !== !1 && this.kill(), _reverting$1 = ne, this
        }, ee.globalTime = function (ie) {
            for (var ne = this, se = arguments.length ? ie : ne.rawTime(); ne;) se = ne._start + se / (ne._ts || 1), ne = ne._dp;
            return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 : this._sat.globalTime(ie) : se
        }, ee.repeat = function (ie) {
            return arguments.length ? (this._repeat = ie === 1 / 0 ? -2 : ie, _onUpdateTotalDuration(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
        }, ee.repeatDelay = function (ie) {
            if (arguments.length) {
                var ne = this._time;
                return this._rDelay = ie, _onUpdateTotalDuration(this), ne ? this.time(ne) : this
            }
            return this._rDelay
        }, ee.yoyo = function (ie) {
            return arguments.length ? (this._yoyo = ie, this) : this._yoyo
        }, ee.seek = function (ie, ne) {
            return this.totalTime(_parsePosition$1(this, ie), _isNotFalse(ne))
        }, ee.restart = function (ie, ne) {
            return this.play().totalTime(ie ? -this._delay : 0, _isNotFalse(ne))
        }, ee.play = function (ie, ne) {
            return ie != null && this.seek(ie, ne), this.reversed(!1).paused(!1)
        }, ee.reverse = function (ie, ne) {
            return ie != null && this.seek(ie || this.totalDuration(), ne), this.reversed(!0).paused(!1)
        }, ee.pause = function (ie, ne) {
            return ie != null && this.seek(ie, ne), this.paused(!0)
        }, ee.resume = function () {
            return this.paused(!1)
        }, ee.reversed = function (ie) {
            return arguments.length ? (!!ie !== this.reversed() && this.timeScale(-this._rts || (ie ? -_tinyNum : 0)), this) : this._rts < 0
        }, ee.invalidate = function () {
            return this._initted = this._act = 0, this._zTime = -_tinyNum, this
        }, ee.isActive = function () {
            var ie = this.parent || this._dp,
                ne = this._start,
                se;
            return !!(!ie || this._ts && this._initted && ie.isActive() && (se = ie.rawTime(!0)) >= ne && se < this.endTime(!0) - _tinyNum)
        }, ee.eventCallback = function (ie, ne, se) {
            var ae = this.vars;
            return arguments.length > 1 ? (ne ? (ae[ie] = ne, se && (ae[ie + "Params"] = se), ie === "onUpdate" && (this._onUpdate = ne)) : delete ae[ie], this) : ae[ie]
        }, ee.then = function (ie) {
            var ne = this;
            return new Promise(function (se) {
                var ae = _isFunction$1(ie) ? ie : _passThrough$1,
                    oe = function () {
                        var he = ne.then;
                        ne.then = null, _isFunction$1(ae) && (ae = ae(ne)) && (ae.then || ae === ne) && (ne.then = he), se(ae), ne.then = he
                    };
                ne._initted && ne.totalProgress() === 1 && ne._ts >= 0 || !ne._tTime && ne._ts < 0 ? oe() : ne._prom = oe
            })
        }, ee.kill = function () {
            _interrupt(this)
        }, te
    }();
_setDefaults$1(Animation.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -_tinyNum,
    _prom: 0,
    _ps: !1,
    _rts: 1
});
var Timeline = function (te) {
    _inheritsLoose(ee, te);

    function ee(ie, ne) {
        var se;
        return ie === void 0 && (ie = {}), se = te.call(this, ie) || this, se.labels = {}, se.smoothChildTiming = !!ie.smoothChildTiming, se.autoRemoveChildren = !!ie.autoRemoveChildren, se._sort = _isNotFalse(ie.sortChildren), _globalTimeline && _addToTimeline(ie.parent || _globalTimeline, _assertThisInitialized(se), ne), ie.reversed && se.reverse(), ie.paused && se.paused(!0), ie.scrollTrigger && _scrollTrigger(_assertThisInitialized(se), ie.scrollTrigger), se
    }
    var re = ee.prototype;
    return re.to = function (ne, se, ae) {
        return _createTweenType(0, arguments, this), this
    }, re.from = function (ne, se, ae) {
        return _createTweenType(1, arguments, this), this
    }, re.fromTo = function (ne, se, ae, oe) {
        return _createTweenType(2, arguments, this), this
    }, re.set = function (ne, se, ae) {
        return se.duration = 0, se.parent = this, _inheritDefaults(se).repeatDelay || (se.repeat = 0), se.immediateRender = !!se.immediateRender, new Tween(ne, se, _parsePosition$1(this, ae), 1), this
    }, re.call = function (ne, se, ae) {
        return _addToTimeline(this, Tween.delayedCall(0, ne, se), ae)
    }, re.staggerTo = function (ne, se, ae, oe, le, he, fe) {
        return ae.duration = se, ae.stagger = ae.stagger || oe, ae.onComplete = he, ae.onCompleteParams = fe, ae.parent = this, new Tween(ne, ae, _parsePosition$1(this, le)), this
    }, re.staggerFrom = function (ne, se, ae, oe, le, he, fe) {
        return ae.runBackwards = 1, _inheritDefaults(ae).immediateRender = _isNotFalse(ae.immediateRender), this.staggerTo(ne, se, ae, oe, le, he, fe)
    }, re.staggerFromTo = function (ne, se, ae, oe, le, he, fe, _e) {
        return oe.startAt = ae, _inheritDefaults(oe).immediateRender = _isNotFalse(oe.immediateRender), this.staggerTo(ne, se, oe, le, he, fe, _e)
    }, re.render = function (ne, se, ae) {
        var oe = this._time,
            le = this._dirty ? this.totalDuration() : this._tDur,
            he = this._dur,
            fe = ne <= 0 ? 0 : _roundPrecise(ne),
            _e = this._zTime < 0 != ne < 0 && (this._initted || !he),
            ue, de, me, ce, Ce, pe, ve, ge, ye, Ee, Pe, xe;
        if (this !== _globalTimeline && fe > le && ne >= 0 && (fe = le), fe !== this._tTime || ae || _e) {
            if (oe !== this._time && he && (fe += this._time - oe, ne += this._time - oe), ue = fe, ye = this._start, ge = this._ts, pe = !ge, _e && (he || (oe = this._zTime), (ne || !se) && (this._zTime = ne)), this._repeat) {
                if (Pe = this._yoyo, Ce = he + this._rDelay, this._repeat < -1 && ne < 0) return this.totalTime(Ce * 100 + ne, se, ae);
                if (ue = _roundPrecise(fe % Ce), fe === le ? (ce = this._repeat, ue = he) : (ce = ~~(fe / Ce), ce && ce === fe / Ce && (ue = he, ce--), ue > he && (ue = he)), Ee = _animationCycle(this._tTime, Ce), !oe && this._tTime && Ee !== ce && (Ee = ce), Pe && ce & 1 && (ue = he - ue, xe = 1), ce !== Ee && !this._lock) {
                    var we = Pe && Ee & 1,
                        Fe = we === (Pe && ce & 1);
                    if (ce < Ee && (we = !we), oe = we ? 0 : he, this._lock = 1, this.render(oe || (xe ? 0 : _roundPrecise(ce * Ce)), se, !he)._lock = 0, this._tTime = fe, !se && this.parent && _callback$1(this, "onRepeat"), this.vars.repeatRefresh && !xe && (this.invalidate()._lock = 1), oe && oe !== this._time || pe !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                    if (he = this._dur, le = this._tDur, Fe && (this._lock = 2, oe = we ? he : -1e-4, this.render(oe, !0), this.vars.repeatRefresh && !xe && this.invalidate()), this._lock = 0, !this._ts && !pe) return this;
                    _propagateYoyoEase(this, xe)
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (ve = _findNextPauseTween(this, _roundPrecise(oe), _roundPrecise(ue)), ve && (fe -= ue - (ue = ve._start))), this._tTime = fe, this._time = ue, this._act = !ge, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = ne, oe = 0), !oe && ue && !se && (_callback$1(this, "onStart"), this._tTime !== fe)) return this;
            if (ue >= oe && ne >= 0)
                for (de = this._first; de;) {
                    if (me = de._next, (de._act || ue >= de._start) && de._ts && ve !== de) {
                        if (de.parent !== this) return this.render(ne, se, ae);
                        if (de.render(de._ts > 0 ? (ue - de._start) * de._ts : (de._dirty ? de.totalDuration() : de._tDur) + (ue - de._start) * de._ts, se, ae), ue !== this._time || !this._ts && !pe) {
                            ve = 0, me && (fe += this._zTime = -_tinyNum);
                            break
                        }
                    }
                    de = me
                } else {
                    de = this._last;
                    for (var Le = ne < 0 ? ne : ue; de;) {
                        if (me = de._prev, (de._act || Le <= de._end) && de._ts && ve !== de) {
                            if (de.parent !== this) return this.render(ne, se, ae);
                            if (de.render(de._ts > 0 ? (Le - de._start) * de._ts : (de._dirty ? de.totalDuration() : de._tDur) + (Le - de._start) * de._ts, se, ae || _reverting$1 && (de._initted || de._startAt)), ue !== this._time || !this._ts && !pe) {
                                ve = 0, me && (fe += this._zTime = Le ? -_tinyNum : _tinyNum);
                                break
                            }
                        }
                        de = me
                    }
                }
            if (ve && !se && (this.pause(), ve.render(ue >= oe ? 0 : -_tinyNum)._zTime = ue >= oe ? 1 : -1, this._ts)) return this._start = ye, _setEnd(this), this.render(ne, se, ae);
            this._onUpdate && !se && _callback$1(this, "onUpdate", !0), (fe === le && this._tTime >= this.totalDuration() || !fe && oe) && (ye === this._start || Math.abs(ge) !== Math.abs(this._ts)) && (this._lock || ((ne || !he) && (fe === le && this._ts > 0 || !fe && this._ts < 0) && _removeFromParent(this, 1), !se && !(ne < 0 && !oe) && (fe || oe || !le) && (_callback$1(this, fe === le && ne >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(fe < le && this.timeScale() > 0) && this._prom())))
        }
        return this
    }, re.add = function (ne, se) {
        var ae = this;
        if (_isNumber$1(se) || (se = _parsePosition$1(this, se, ne)), !(ne instanceof Animation)) {
            if (_isArray(ne)) return ne.forEach(function (oe) {
                return ae.add(oe, se)
            }), this;
            if (_isString$1(ne)) return this.addLabel(ne, se);
            if (_isFunction$1(ne)) ne = Tween.delayedCall(0, ne);
            else return this
        }
        return this !== ne ? _addToTimeline(this, ne, se) : this
    }, re.getChildren = function (ne, se, ae, oe) {
        ne === void 0 && (ne = !0), se === void 0 && (se = !0), ae === void 0 && (ae = !0), oe === void 0 && (oe = -_bigNum$1);
        for (var le = [], he = this._first; he;) he._start >= oe && (he instanceof Tween ? se && le.push(he) : (ae && le.push(he), ne && le.push.apply(le, he.getChildren(!0, se, ae)))), he = he._next;
        return le
    }, re.getById = function (ne) {
        for (var se = this.getChildren(1, 1, 1), ae = se.length; ae--;)
            if (se[ae].vars.id === ne) return se[ae]
    }, re.remove = function (ne) {
        return _isString$1(ne) ? this.removeLabel(ne) : _isFunction$1(ne) ? this.killTweensOf(ne) : (_removeLinkedListItem(this, ne), ne === this._recent && (this._recent = this._last), _uncache(this))
    }, re.totalTime = function (ne, se) {
        return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? ne / this._ts : (this.totalDuration() - ne) / -this._ts))), te.prototype.totalTime.call(this, ne, se), this._forcing = 0, this) : this._tTime
    }, re.addLabel = function (ne, se) {
        return this.labels[ne] = _parsePosition$1(this, se), this
    }, re.removeLabel = function (ne) {
        return delete this.labels[ne], this
    }, re.addPause = function (ne, se, ae) {
        var oe = Tween.delayedCall(0, se || _emptyFunc, ae);
        return oe.data = "isPause", this._hasPause = 1, _addToTimeline(this, oe, _parsePosition$1(this, ne))
    }, re.removePause = function (ne) {
        var se = this._first;
        for (ne = _parsePosition$1(this, ne); se;) se._start === ne && se.data === "isPause" && _removeFromParent(se), se = se._next
    }, re.killTweensOf = function (ne, se, ae) {
        for (var oe = this.getTweensOf(ne, ae), le = oe.length; le--;) _overwritingTween !== oe[le] && oe[le].kill(ne, se);
        return this
    }, re.getTweensOf = function (ne, se) {
        for (var ae = [], oe = toArray(ne), le = this._first, he = _isNumber$1(se), fe; le;) le instanceof Tween ? _arrayContainsAny(le._targets, oe) && (he ? (!_overwritingTween || le._initted && le._ts) && le.globalTime(0) <= se && le.globalTime(le.totalDuration()) > se : !se || le.isActive()) && ae.push(le) : (fe = le.getTweensOf(oe, se)).length && ae.push.apply(ae, fe), le = le._next;
        return ae
    }, re.tweenTo = function (ne, se) {
        se = se || {};
        var ae = this,
            oe = _parsePosition$1(ae, ne),
            le = se,
            he = le.startAt,
            fe = le.onStart,
            _e = le.onStartParams,
            ue = le.immediateRender,
            de, me = Tween.to(ae, _setDefaults$1({
                ease: se.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: oe,
                overwrite: "auto",
                duration: se.duration || Math.abs((oe - (he && "time" in he ? he.time : ae._time)) / ae.timeScale()) || _tinyNum,
                onStart: function () {
                    if (ae.pause(), !de) {
                        var Ce = se.duration || Math.abs((oe - (he && "time" in he ? he.time : ae._time)) / ae.timeScale());
                        me._dur !== Ce && _setDuration(me, Ce, 0, 1).render(me._time, !0, !0), de = 1
                    }
                    fe && fe.apply(me, _e || [])
                }
            }, se));
        return ue ? me.render(0) : me
    }, re.tweenFromTo = function (ne, se, ae) {
        return this.tweenTo(se, _setDefaults$1({
            startAt: {
                time: _parsePosition$1(this, ne)
            }
        }, ae))
    }, re.recent = function () {
        return this._recent
    }, re.nextLabel = function (ne) {
        return ne === void 0 && (ne = this._time), _getLabelInDirection(this, _parsePosition$1(this, ne))
    }, re.previousLabel = function (ne) {
        return ne === void 0 && (ne = this._time), _getLabelInDirection(this, _parsePosition$1(this, ne), 1)
    }, re.currentLabel = function (ne) {
        return arguments.length ? this.seek(ne, !0) : this.previousLabel(this._time + _tinyNum)
    }, re.shiftChildren = function (ne, se, ae) {
        ae === void 0 && (ae = 0);
        for (var oe = this._first, le = this.labels, he; oe;) oe._start >= ae && (oe._start += ne, oe._end += ne), oe = oe._next;
        if (se)
            for (he in le) le[he] >= ae && (le[he] += ne);
        return _uncache(this)
    }, re.invalidate = function (ne) {
        var se = this._first;
        for (this._lock = 0; se;) se.invalidate(ne), se = se._next;
        return te.prototype.invalidate.call(this, ne)
    }, re.clear = function (ne) {
        ne === void 0 && (ne = !0);
        for (var se = this._first, ae; se;) ae = se._next, this.remove(se), se = ae;
        return this._dp && (this._time = this._tTime = this._pTime = 0), ne && (this.labels = {}), _uncache(this)
    }, re.totalDuration = function (ne) {
        var se = 0,
            ae = this,
            oe = ae._last,
            le = _bigNum$1,
            he, fe, _e;
        if (arguments.length) return ae.timeScale((ae._repeat < 0 ? ae.duration() : ae.totalDuration()) / (ae.reversed() ? -ne : ne));
        if (ae._dirty) {
            for (_e = ae.parent; oe;) he = oe._prev, oe._dirty && oe.totalDuration(), fe = oe._start, fe > le && ae._sort && oe._ts && !ae._lock ? (ae._lock = 1, _addToTimeline(ae, oe, fe - oe._delay, 1)._lock = 0) : le = fe, fe < 0 && oe._ts && (se -= fe, (!_e && !ae._dp || _e && _e.smoothChildTiming) && (ae._start += fe / ae._ts, ae._time -= fe, ae._tTime -= fe), ae.shiftChildren(-fe, !1, -1 / 0), le = 0), oe._end > se && oe._ts && (se = oe._end), oe = he;
            _setDuration(ae, ae === _globalTimeline && ae._time > se ? ae._time : se, 1, 1), ae._dirty = 0
        }
        return ae._tDur
    }, ee.updateRoot = function (ne) {
        if (_globalTimeline._ts && (_lazySafeRender(_globalTimeline, _parentToChildTotalTime(ne, _globalTimeline)), _lastRenderedFrame = _ticker.frame), _ticker.frame >= _nextGCFrame) {
            _nextGCFrame += _config.autoSleep || 120;
            var se = _globalTimeline._first;
            if ((!se || !se._ts) && _config.autoSleep && _ticker._listeners.length < 2) {
                for (; se && !se._ts;) se = se._next;
                se || _ticker.sleep()
            }
        }
    }, ee
}(Animation);
_setDefaults$1(Timeline.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var _addComplexStringPropTween = function (ee, re, ie, ne, se, ae, oe) {
        var le = new PropTween(this._pt, ee, re, 0, 1, _renderComplexString, null, se),
            he = 0,
            fe = 0,
            _e, ue, de, me, ce, Ce, pe, ve;
        for (le.b = ie, le.e = ne, ie += "", ne += "", (pe = ~ne.indexOf("random(")) && (ne = _replaceRandom(ne)), ae && (ve = [ie, ne], ae(ve, ee, re), ie = ve[0], ne = ve[1]), ue = ie.match(_complexStringNumExp) || []; _e = _complexStringNumExp.exec(ne);) me = _e[0], ce = ne.substring(he, _e.index), de ? de = (de + 1) % 5 : ce.substr(-5) === "rgba(" && (de = 1), me !== ue[fe++] && (Ce = parseFloat(ue[fe - 1]) || 0, le._pt = {
            _next: le._pt,
            p: ce || fe === 1 ? ce : ",",
            s: Ce,
            c: me.charAt(1) === "=" ? _parseRelative(Ce, me) - Ce : parseFloat(me) - Ce,
            m: de && de < 4 ? Math.round : 0
        }, he = _complexStringNumExp.lastIndex);
        return le.c = he < ne.length ? ne.substring(he, ne.length) : "", le.fp = oe, (_relExp.test(ne) || pe) && (le.e = 0), this._pt = le, le
    },
    _addPropTween = function (ee, re, ie, ne, se, ae, oe, le, he, fe) {
        _isFunction$1(ne) && (ne = ne(se || 0, ee, ae));
        var _e = ee[re],
            ue = ie !== "get" ? ie : _isFunction$1(_e) ? he ? ee[re.indexOf("set") || !_isFunction$1(ee["get" + re.substr(3)]) ? re : "get" + re.substr(3)](he) : ee[re]() : _e,
            de = _isFunction$1(_e) ? he ? _setterFuncWithParam : _setterFunc : _setterPlain,
            me;
        if (_isString$1(ne) && (~ne.indexOf("random(") && (ne = _replaceRandom(ne)), ne.charAt(1) === "=" && (me = _parseRelative(ue, ne) + (getUnit(ue) || 0), (me || me === 0) && (ne = me))), !fe || ue !== ne || _forceAllPropTweens) return !isNaN(ue * ne) && ne !== "" ? (me = new PropTween(this._pt, ee, re, +ue || 0, ne - (ue || 0), typeof _e == "boolean" ? _renderBoolean : _renderPlain, 0, de), he && (me.fp = he), oe && me.modifier(oe, this, ee), this._pt = me) : (!_e && !(re in ee) && _missingPlugin(re, ne), _addComplexStringPropTween.call(this, ee, re, ue, ne, de, le || _config.stringFilter, he))
    },
    _processVars = function (ee, re, ie, ne, se) {
        if (_isFunction$1(ee) && (ee = _parseFuncOrString(ee, se, re, ie, ne)), !_isObject$1(ee) || ee.style && ee.nodeType || _isArray(ee) || _isTypedArray(ee)) return _isString$1(ee) ? _parseFuncOrString(ee, se, re, ie, ne) : ee;
        var ae = {},
            oe;
        for (oe in ee) ae[oe] = _parseFuncOrString(ee[oe], se, re, ie, ne);
        return ae
    },
    _checkPlugin = function (ee, re, ie, ne, se, ae) {
        var oe, le, he, fe;
        if (_plugins[ee] && (oe = new _plugins[ee]).init(se, oe.rawVars ? re[ee] : _processVars(re[ee], ne, se, ae, ie), ie, ne, ae) !== !1 && (ie._pt = le = new PropTween(ie._pt, se, ee, 0, 1, oe.render, oe, 0, oe.priority), ie !== _quickTween))
            for (he = ie._ptLookup[ie._targets.indexOf(se)], fe = oe._props.length; fe--;) he[oe._props[fe]] = le;
        return oe
    },
    _overwritingTween, _forceAllPropTweens, _initTween = function te(ee, re, ie) {
        var ne = ee.vars,
            se = ne.ease,
            ae = ne.startAt,
            oe = ne.immediateRender,
            le = ne.lazy,
            he = ne.onUpdate,
            fe = ne.onUpdateParams,
            _e = ne.callbackScope,
            ue = ne.runBackwards,
            de = ne.yoyoEase,
            me = ne.keyframes,
            ce = ne.autoRevert,
            Ce = ee._dur,
            pe = ee._startAt,
            ve = ee._targets,
            ge = ee.parent,
            ye = ge && ge.data === "nested" ? ge.vars.targets : ve,
            Ee = ee._overwrite === "auto" && !_suppressOverwrites$1,
            Pe = ee.timeline,
            xe, we, Fe, Le, Re, Me, $e, Be, Ie, Se, Ae, be, De;
        if (Pe && (!me || !se) && (se = "none"), ee._ease = _parseEase(se, _defaults$1.ease), ee._yEase = de ? _invertEase(_parseEase(de === !0 ? se : de, _defaults$1.ease)) : 0, de && ee._yoyo && !ee._repeat && (de = ee._yEase, ee._yEase = ee._ease, ee._ease = de), ee._from = !Pe && !!ne.runBackwards, !Pe || me && !ne.stagger) {
            if (Be = ve[0] ? _getCache(ve[0]).harness : 0, be = Be && ne[Be.prop], xe = _copyExcluding(ne, _reservedProps), pe && (pe._zTime < 0 && pe.progress(1), re < 0 && ue && oe && !ce ? pe.render(-1, !0) : pe.revert(ue && Ce ? _revertConfigNoKill : _startAtRevertConfig), pe._lazy = 0), ae) {
                if (_removeFromParent(ee._startAt = Tween.set(ve, _setDefaults$1({
                        data: "isStart",
                        overwrite: !1,
                        parent: ge,
                        immediateRender: !0,
                        lazy: !pe && _isNotFalse(le),
                        startAt: null,
                        delay: 0,
                        onUpdate: he,
                        onUpdateParams: fe,
                        callbackScope: _e,
                        stagger: 0
                    }, ae))), ee._startAt._dp = 0, ee._startAt._sat = ee, re < 0 && (_reverting$1 || !oe && !ce) && ee._startAt.revert(_revertConfigNoKill), oe && Ce && re <= 0 && ie <= 0) {
                    re && (ee._zTime = re);
                    return
                }
            } else if (ue && Ce && !pe) {
                if (re && (oe = !1), Fe = _setDefaults$1({
                        overwrite: !1,
                        data: "isFromStart",
                        lazy: oe && !pe && _isNotFalse(le),
                        immediateRender: oe,
                        stagger: 0,
                        parent: ge
                    }, xe), be && (Fe[Be.prop] = be), _removeFromParent(ee._startAt = Tween.set(ve, Fe)), ee._startAt._dp = 0, ee._startAt._sat = ee, re < 0 && (_reverting$1 ? ee._startAt.revert(_revertConfigNoKill) : ee._startAt.render(-1, !0)), ee._zTime = re, !oe) te(ee._startAt, _tinyNum, _tinyNum);
                else if (!re) return
            }
            for (ee._pt = ee._ptCache = 0, le = Ce && _isNotFalse(le) || le && !Ce, we = 0; we < ve.length; we++) {
                if (Re = ve[we], $e = Re._gsap || _harness(ve)[we]._gsap, ee._ptLookup[we] = Se = {}, _lazyLookup[$e.id] && _lazyTweens.length && _lazyRender(), Ae = ye === ve ? we : ye.indexOf(Re), Be && (Ie = new Be).init(Re, be || xe, ee, Ae, ye) !== !1 && (ee._pt = Le = new PropTween(ee._pt, Re, Ie.name, 0, 1, Ie.render, Ie, 0, Ie.priority), Ie._props.forEach(function (Te) {
                        Se[Te] = Le
                    }), Ie.priority && (Me = 1)), !Be || be)
                    for (Fe in xe) _plugins[Fe] && (Ie = _checkPlugin(Fe, xe, ee, Ae, Re, ye)) ? Ie.priority && (Me = 1) : Se[Fe] = Le = _addPropTween.call(ee, Re, Fe, "get", xe[Fe], Ae, ye, 0, ne.stringFilter);
                ee._op && ee._op[we] && ee.kill(Re, ee._op[we]), Ee && ee._pt && (_overwritingTween = ee, _globalTimeline.killTweensOf(Re, Se, ee.globalTime(re)), De = !ee.parent, _overwritingTween = 0), ee._pt && le && (_lazyLookup[$e.id] = 1)
            }
            Me && _sortPropTweensByPriority(ee), ee._onInit && ee._onInit(ee)
        }
        ee._onUpdate = he, ee._initted = (!ee._op || ee._pt) && !De, me && re <= 0 && Pe.render(_bigNum$1, !0, !0)
    },
    _updatePropTweens = function (ee, re, ie, ne, se, ae, oe) {
        var le = (ee._pt && ee._ptCache || (ee._ptCache = {}))[re],
            he, fe, _e, ue;
        if (!le)
            for (le = ee._ptCache[re] = [], _e = ee._ptLookup, ue = ee._targets.length; ue--;) {
                if (he = _e[ue][re], he && he.d && he.d._pt)
                    for (he = he.d._pt; he && he.p !== re && he.fp !== re;) he = he._next;
                if (!he) return _forceAllPropTweens = 1, ee.vars[re] = "+=0", _initTween(ee, oe), _forceAllPropTweens = 0, 1;
                le.push(he)
            }
        for (ue = le.length; ue--;) fe = le[ue], he = fe._pt || fe, he.s = (ne || ne === 0) && !se ? ne : he.s + (ne || 0) + ae * he.c, he.c = ie - he.s, fe.e && (fe.e = _round$1(ie) + getUnit(fe.e)), fe.b && (fe.b = he.s + getUnit(fe.b))
    },
    _addAliasesToVars = function (ee, re) {
        var ie = ee[0] ? _getCache(ee[0]).harness : 0,
            ne = ie && ie.aliases,
            se, ae, oe, le;
        if (!ne) return re;
        se = _merge({}, re);
        for (ae in ne)
            if (ae in se)
                for (le = ne[ae].split(","), oe = le.length; oe--;) se[le[oe]] = se[ae];
        return se
    },
    _parseKeyframe = function (ee, re, ie, ne) {
        var se = re.ease || ne || "power1.inOut",
            ae, oe;
        if (_isArray(re)) oe = ie[ee] || (ie[ee] = []), re.forEach(function (le, he) {
            return oe.push({
                t: he / (re.length - 1) * 100,
                v: le,
                e: se
            })
        });
        else
            for (ae in re) oe = ie[ae] || (ie[ae] = []), ae === "ease" || oe.push({
                t: parseFloat(ee),
                v: re[ae],
                e: se
            })
    },
    _parseFuncOrString = function (ee, re, ie, ne, se) {
        return _isFunction$1(ee) ? ee.call(re, ie, ne, se) : _isString$1(ee) && ~ee.indexOf("random(") ? _replaceRandom(ee) : ee
    },
    _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    _staggerPropsToSkip = {};
_forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function (te) {
    return _staggerPropsToSkip[te] = 1
});
var Tween = function (te) {
    _inheritsLoose(ee, te);

    function ee(ie, ne, se, ae) {
        var oe;
        typeof ne == "number" && (se.duration = ne, ne = se, se = null), oe = te.call(this, ae ? ne : _inheritDefaults(ne)) || this;
        var le = oe.vars,
            he = le.duration,
            fe = le.delay,
            _e = le.immediateRender,
            ue = le.stagger,
            de = le.overwrite,
            me = le.keyframes,
            ce = le.defaults,
            Ce = le.scrollTrigger,
            pe = le.yoyoEase,
            ve = ne.parent || _globalTimeline,
            ge = (_isArray(ie) || _isTypedArray(ie) ? _isNumber$1(ie[0]) : "length" in ne) ? [ie] : toArray(ie),
            ye, Ee, Pe, xe, we, Fe, Le, Re;
        if (oe._targets = ge.length ? _harness(ge) : _warn("GSAP target " + ie + " not found. https://greensock.com", !_config.nullTargetWarn) || [], oe._ptLookup = [], oe._overwrite = de, me || ue || _isFuncOrString(he) || _isFuncOrString(fe)) {
            if (ne = oe.vars, ye = oe.timeline = new Timeline({
                    data: "nested",
                    defaults: ce || {},
                    targets: ve && ve.data === "nested" ? ve.vars.targets : ge
                }), ye.kill(), ye.parent = ye._dp = _assertThisInitialized(oe), ye._start = 0, ue || _isFuncOrString(he) || _isFuncOrString(fe)) {
                if (xe = ge.length, Le = ue && distribute(ue), _isObject$1(ue))
                    for (we in ue) ~_staggerTweenProps.indexOf(we) && (Re || (Re = {}), Re[we] = ue[we]);
                for (Ee = 0; Ee < xe; Ee++) Pe = _copyExcluding(ne, _staggerPropsToSkip), Pe.stagger = 0, pe && (Pe.yoyoEase = pe), Re && _merge(Pe, Re), Fe = ge[Ee], Pe.duration = +_parseFuncOrString(he, _assertThisInitialized(oe), Ee, Fe, ge), Pe.delay = (+_parseFuncOrString(fe, _assertThisInitialized(oe), Ee, Fe, ge) || 0) - oe._delay, !ue && xe === 1 && Pe.delay && (oe._delay = fe = Pe.delay, oe._start += fe, Pe.delay = 0), ye.to(Fe, Pe, Le ? Le(Ee, Fe, ge) : 0), ye._ease = _easeMap.none;
                ye.duration() ? he = fe = 0 : oe.timeline = 0
            } else if (me) {
                _inheritDefaults(_setDefaults$1(ye.vars.defaults, {
                    ease: "none"
                })), ye._ease = _parseEase(me.ease || ne.ease || "none");
                var Me = 0,
                    $e, Be, Ie;
                if (_isArray(me)) me.forEach(function (Se) {
                    return ye.to(ge, Se, ">")
                }), ye.duration();
                else {
                    Pe = {};
                    for (we in me) we === "ease" || we === "easeEach" || _parseKeyframe(we, me[we], Pe, me.easeEach);
                    for (we in Pe)
                        for ($e = Pe[we].sort(function (Se, Ae) {
                                return Se.t - Ae.t
                            }), Me = 0, Ee = 0; Ee < $e.length; Ee++) Be = $e[Ee], Ie = {
                            ease: Be.e,
                            duration: (Be.t - (Ee ? $e[Ee - 1].t : 0)) / 100 * he
                        }, Ie[we] = Be.v, ye.to(ge, Ie, Me), Me += Ie.duration;
                    ye.duration() < he && ye.to({}, {
                        duration: he - ye.duration()
                    })
                }
            }
            he || oe.duration(he = ye.duration())
        } else oe.timeline = 0;
        return de === !0 && !_suppressOverwrites$1 && (_overwritingTween = _assertThisInitialized(oe), _globalTimeline.killTweensOf(ge), _overwritingTween = 0), _addToTimeline(ve, _assertThisInitialized(oe), se), ne.reversed && oe.reverse(), ne.paused && oe.paused(!0), (_e || !he && !me && oe._start === _roundPrecise(ve._time) && _isNotFalse(_e) && _hasNoPausedAncestors(_assertThisInitialized(oe)) && ve.data !== "nested") && (oe._tTime = -_tinyNum, oe.render(Math.max(0, -fe) || 0)), Ce && _scrollTrigger(_assertThisInitialized(oe), Ce), oe
    }
    var re = ee.prototype;
    return re.render = function (ne, se, ae) {
        var oe = this._time,
            le = this._tDur,
            he = this._dur,
            fe = ne < 0,
            _e = ne > le - _tinyNum && !fe ? le : ne < _tinyNum ? 0 : ne,
            ue, de, me, ce, Ce, pe, ve, ge, ye;
        if (!he) _renderZeroDurationTween(this, ne, se, ae);
        else if (_e !== this._tTime || !ne || ae || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== fe) {
            if (ue = _e, ge = this.timeline, this._repeat) {
                if (ce = he + this._rDelay, this._repeat < -1 && fe) return this.totalTime(ce * 100 + ne, se, ae);
                if (ue = _roundPrecise(_e % ce), _e === le ? (me = this._repeat, ue = he) : (me = ~~(_e / ce), me && me === _e / ce && (ue = he, me--), ue > he && (ue = he)), pe = this._yoyo && me & 1, pe && (ye = this._yEase, ue = he - ue), Ce = _animationCycle(this._tTime, ce), ue === oe && !ae && this._initted) return this._tTime = _e, this;
                me !== Ce && (ge && this._yEase && _propagateYoyoEase(ge, pe), this.vars.repeatRefresh && !pe && !this._lock && (this._lock = ae = 1, this.render(_roundPrecise(ce * me), !0).invalidate()._lock = 0))
            }
            if (!this._initted) {
                if (_attemptInitTween(this, fe ? ne : ue, ae, se, _e)) return this._tTime = 0, this;
                if (oe !== this._time) return this;
                if (he !== this._dur) return this.render(ne, se, ae)
            }
            if (this._tTime = _e, this._time = ue, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = ve = (ye || this._ease)(ue / he), this._from && (this.ratio = ve = 1 - ve), ue && !oe && !se && (_callback$1(this, "onStart"), this._tTime !== _e)) return this;
            for (de = this._pt; de;) de.r(ve, de.d), de = de._next;
            ge && ge.render(ne < 0 ? ne : !ue && pe ? -_tinyNum : ge._dur * ge._ease(ue / this._dur), se, ae) || this._startAt && (this._zTime = ne), this._onUpdate && !se && (fe && _rewindStartAt(this, ne, se, ae), _callback$1(this, "onUpdate")), this._repeat && me !== Ce && this.vars.onRepeat && !se && this.parent && _callback$1(this, "onRepeat"), (_e === this._tDur || !_e) && this._tTime === _e && (fe && !this._onUpdate && _rewindStartAt(this, ne, !0, !0), (ne || !he) && (_e === this._tDur && this._ts > 0 || !_e && this._ts < 0) && _removeFromParent(this, 1), !se && !(fe && !oe) && (_e || oe || pe) && (_callback$1(this, _e === le ? "onComplete" : "onReverseComplete", !0), this._prom && !(_e < le && this.timeScale() > 0) && this._prom()))
        }
        return this
    }, re.targets = function () {
        return this._targets
    }, re.invalidate = function (ne) {
        return (!ne || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(ne), te.prototype.invalidate.call(this, ne)
    }, re.resetTo = function (ne, se, ae, oe) {
        _tickerActive || _ticker.wake(), this._ts || this.play();
        var le = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
            he;
        return this._initted || _initTween(this, le), he = this._ease(le / this._dur), _updatePropTweens(this, ne, se, ae, oe, he, le) ? this.resetTo(ne, se, ae, oe) : (_alignPlayhead(this, 0), this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
    }, re.kill = function (ne, se) {
        if (se === void 0 && (se = "all"), !ne && (!se || se === "all")) return this._lazy = this._pt = 0, this.parent ? _interrupt(this) : this;
        if (this.timeline) {
            var ae = this.timeline.totalDuration();
            return this.timeline.killTweensOf(ne, se, _overwritingTween && _overwritingTween.vars.overwrite !== !0)._first || _interrupt(this), this.parent && ae !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / ae, 0, 1), this
        }
        var oe = this._targets,
            le = ne ? toArray(ne) : oe,
            he = this._ptLookup,
            fe = this._pt,
            _e, ue, de, me, ce, Ce, pe;
        if ((!se || se === "all") && _arraysMatch(oe, le)) return se === "all" && (this._pt = 0), _interrupt(this);
        for (_e = this._op = this._op || [], se !== "all" && (_isString$1(se) && (ce = {}, _forEachName(se, function (ve) {
                return ce[ve] = 1
            }), se = ce), se = _addAliasesToVars(oe, se)), pe = oe.length; pe--;)
            if (~le.indexOf(oe[pe])) {
                ue = he[pe], se === "all" ? (_e[pe] = se, me = ue, de = {}) : (de = _e[pe] = _e[pe] || {}, me = se);
                for (ce in me) Ce = ue && ue[ce], Ce && ((!("kill" in Ce.d) || Ce.d.kill(ce) === !0) && _removeLinkedListItem(this, Ce, "_pt"), delete ue[ce]), de !== "all" && (de[ce] = 1)
            } return this._initted && !this._pt && fe && _interrupt(this), this
    }, ee.to = function (ne, se) {
        return new ee(ne, se, arguments[2])
    }, ee.from = function (ne, se) {
        return _createTweenType(1, arguments)
    }, ee.delayedCall = function (ne, se, ae, oe) {
        return new ee(se, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: ne,
            onComplete: se,
            onReverseComplete: se,
            onCompleteParams: ae,
            onReverseCompleteParams: ae,
            callbackScope: oe
        })
    }, ee.fromTo = function (ne, se, ae) {
        return _createTweenType(2, arguments)
    }, ee.set = function (ne, se) {
        return se.duration = 0, se.repeatDelay || (se.repeat = 0), new ee(ne, se)
    }, ee.killTweensOf = function (ne, se, ae) {
        return _globalTimeline.killTweensOf(ne, se, ae)
    }, ee
}(Animation);
_setDefaults$1(Tween.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
});
_forEachName("staggerTo,staggerFrom,staggerFromTo", function (te) {
    Tween[te] = function () {
        var ee = new Timeline,
            re = _slice.call(arguments, 0);
        return re.splice(te === "staggerFromTo" ? 5 : 4, 0, 0), ee[te].apply(ee, re)
    }
});
var _setterPlain = function (ee, re, ie) {
        return ee[re] = ie
    },
    _setterFunc = function (ee, re, ie) {
        return ee[re](ie)
    },
    _setterFuncWithParam = function (ee, re, ie, ne) {
        return ee[re](ne.fp, ie)
    },
    _setterAttribute = function (ee, re, ie) {
        return ee.setAttribute(re, ie)
    },
    _getSetter = function (ee, re) {
        return _isFunction$1(ee[re]) ? _setterFunc : _isUndefined(ee[re]) && ee.setAttribute ? _setterAttribute : _setterPlain
    },
    _renderPlain = function (ee, re) {
        return re.set(re.t, re.p, Math.round((re.s + re.c * ee) * 1e6) / 1e6, re)
    },
    _renderBoolean = function (ee, re) {
        return re.set(re.t, re.p, !!(re.s + re.c * ee), re)
    },
    _renderComplexString = function (ee, re) {
        var ie = re._pt,
            ne = "";
        if (!ee && re.b) ne = re.b;
        else if (ee === 1 && re.e) ne = re.e;
        else {
            for (; ie;) ne = ie.p + (ie.m ? ie.m(ie.s + ie.c * ee) : Math.round((ie.s + ie.c * ee) * 1e4) / 1e4) + ne, ie = ie._next;
            ne += re.c
        }
        re.set(re.t, re.p, ne, re)
    },
    _renderPropTweens = function (ee, re) {
        for (var ie = re._pt; ie;) ie.r(ee, ie.d), ie = ie._next
    },
    _addPluginModifier = function (ee, re, ie, ne) {
        for (var se = this._pt, ae; se;) ae = se._next, se.p === ne && se.modifier(ee, re, ie), se = ae
    },
    _killPropTweensOf = function (ee) {
        for (var re = this._pt, ie, ne; re;) ne = re._next, re.p === ee && !re.op || re.op === ee ? _removeLinkedListItem(this, re, "_pt") : re.dep || (ie = 1), re = ne;
        return !ie
    },
    _setterWithModifier = function (ee, re, ie, ne) {
        ne.mSet(ee, re, ne.m.call(ne.tween, ie, ne.mt), ne)
    },
    _sortPropTweensByPriority = function (ee) {
        for (var re = ee._pt, ie, ne, se, ae; re;) {
            for (ie = re._next, ne = se; ne && ne.pr > re.pr;) ne = ne._next;
            (re._prev = ne ? ne._prev : ae) ? re._prev._next = re: se = re, (re._next = ne) ? ne._prev = re : ae = re, re = ie
        }
        ee._pt = se
    },
    PropTween = function () {
        function te(re, ie, ne, se, ae, oe, le, he, fe) {
            this.t = ie, this.s = se, this.c = ae, this.p = ne, this.r = oe || _renderPlain, this.d = le || this, this.set = he || _setterPlain, this.pr = fe || 0, this._next = re, re && (re._prev = this)
        }
        var ee = te.prototype;
        return ee.modifier = function (ie, ne, se) {
            this.mSet = this.mSet || this.set, this.set = _setterWithModifier, this.m = ie, this.mt = se, this.tween = ne
        }, te
    }();
_forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (te) {
    return _reservedProps[te] = 1
});
_globals.TweenMax = _globals.TweenLite = Tween;
_globals.TimelineLite = _globals.TimelineMax = Timeline;
_globalTimeline = new Timeline({
    sortChildren: !1,
    defaults: _defaults$1,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
});
_config.stringFilter = _colorStringFilter;
var _media = [],
    _listeners$1 = {},
    _emptyArray$1 = [],
    _lastMediaTime = 0,
    _dispatch$1 = function (ee) {
        return (_listeners$1[ee] || _emptyArray$1).map(function (re) {
            return re()
        })
    },
    _onMediaChange = function () {
        var ee = Date.now(),
            re = [];
        ee - _lastMediaTime > 2 && (_dispatch$1("matchMediaInit"), _media.forEach(function (ie) {
            var ne = ie.queries,
                se = ie.conditions,
                ae, oe, le, he;
            for (oe in ne) ae = _win$4.matchMedia(ne[oe]).matches, ae && (le = 1), ae !== se[oe] && (se[oe] = ae, he = 1);
            he && (ie.revert(), le && re.push(ie))
        }), _dispatch$1("matchMediaRevert"), re.forEach(function (ie) {
            return ie.onMatch(ie)
        }), _lastMediaTime = ee, _dispatch$1("matchMedia"))
    },
    Context = function () {
        function te(re, ie) {
            this.selector = ie && selector(ie), this.data = [], this._r = [], this.isReverted = !1, re && this.add(re)
        }
        var ee = te.prototype;
        return ee.add = function (ie, ne, se) {
            _isFunction$1(ie) && (se = ne, ne = ie, ie = _isFunction$1);
            var ae = this,
                oe = function () {
                    var he = _context$3,
                        fe = ae.selector,
                        _e;
                    return he && he !== ae && he.data.push(ae), se && (ae.selector = selector(se)), _context$3 = ae, _e = ne.apply(ae, arguments), _isFunction$1(_e) && ae._r.push(_e), _context$3 = he, ae.selector = fe, ae.isReverted = !1, _e
                };
            return ae.last = oe, ie === _isFunction$1 ? oe(ae) : ie ? ae[ie] = oe : oe
        }, ee.ignore = function (ie) {
            var ne = _context$3;
            _context$3 = null, ie(this), _context$3 = ne
        }, ee.getTweens = function () {
            var ie = [];
            return this.data.forEach(function (ne) {
                return ne instanceof te ? ie.push.apply(ie, ne.getTweens()) : ne instanceof Tween && !(ne.parent && ne.parent.data === "nested") && ie.push(ne)
            }), ie
        }, ee.clear = function () {
            this._r.length = this.data.length = 0
        }, ee.kill = function (ie, ne) {
            var se = this;
            if (ie) {
                var ae = this.getTweens();
                this.data.forEach(function (le) {
                    le.data === "isFlip" && (le.revert(), le.getChildren(!0, !0, !1).forEach(function (he) {
                        return ae.splice(ae.indexOf(he), 1)
                    }))
                }), ae.map(function (le) {
                    return {
                        g: le.globalTime(0),
                        t: le
                    }
                }).sort(function (le, he) {
                    return he.g - le.g || -1
                }).forEach(function (le) {
                    return le.t.revert(ie)
                }), this.data.forEach(function (le) {
                    return !(le instanceof Animation) && le.revert && le.revert(ie)
                }), this._r.forEach(function (le) {
                    return le(ie, se)
                }), this.isReverted = !0
            } else this.data.forEach(function (le) {
                return le.kill && le.kill()
            });
            if (this.clear(), ne) {
                var oe = _media.indexOf(this);
                ~oe && _media.splice(oe, 1)
            }
        }, ee.revert = function (ie) {
            this.kill(ie || {})
        }, te
    }(),
    MatchMedia = function () {
        function te(re) {
            this.contexts = [], this.scope = re
        }
        var ee = te.prototype;
        return ee.add = function (ie, ne, se) {
            _isObject$1(ie) || (ie = {
                matches: ie
            });
            var ae = new Context(0, se || this.scope),
                oe = ae.conditions = {},
                le, he, fe;
            this.contexts.push(ae), ne = ae.add("onMatch", ne), ae.queries = ie;
            for (he in ie) he === "all" ? fe = 1 : (le = _win$4.matchMedia(ie[he]), le && (_media.indexOf(ae) < 0 && _media.push(ae), (oe[he] = le.matches) && (fe = 1), le.addListener ? le.addListener(_onMediaChange) : le.addEventListener("change", _onMediaChange)));
            return fe && ne(ae), this
        }, ee.revert = function (ie) {
            this.kill(ie || {})
        }, ee.kill = function (ie) {
            this.contexts.forEach(function (ne) {
                return ne.kill(ie, !0)
            })
        }, te
    }(),
    _gsap = {
        registerPlugin: function () {
            for (var ee = arguments.length, re = new Array(ee), ie = 0; ie < ee; ie++) re[ie] = arguments[ie];
            re.forEach(function (ne) {
                return _createPlugin(ne)
            })
        },
        timeline: function (ee) {
            return new Timeline(ee)
        },
        getTweensOf: function (ee, re) {
            return _globalTimeline.getTweensOf(ee, re)
        },
        getProperty: function (ee, re, ie, ne) {
            _isString$1(ee) && (ee = toArray(ee)[0]);
            var se = _getCache(ee || {}).get,
                ae = ie ? _passThrough$1 : _numericIfPossible;
            return ie === "native" && (ie = ""), ee && (re ? ae((_plugins[re] && _plugins[re].get || se)(ee, re, ie, ne)) : function (oe, le, he) {
                return ae((_plugins[oe] && _plugins[oe].get || se)(ee, oe, le, he))
            })
        },
        quickSetter: function (ee, re, ie) {
            if (ee = toArray(ee), ee.length > 1) {
                var ne = ee.map(function (fe) {
                        return gsap$3.quickSetter(fe, re, ie)
                    }),
                    se = ne.length;
                return function (fe) {
                    for (var _e = se; _e--;) ne[_e](fe)
                }
            }
            ee = ee[0] || {};
            var ae = _plugins[re],
                oe = _getCache(ee),
                le = oe.harness && (oe.harness.aliases || {})[re] || re,
                he = ae ? function (fe) {
                    var _e = new ae;
                    _quickTween._pt = 0, _e.init(ee, ie ? fe + ie : fe, _quickTween, 0, [ee]), _e.render(1, _e), _quickTween._pt && _renderPropTweens(1, _quickTween)
                } : oe.set(ee, le);
            return ae ? he : function (fe) {
                return he(ee, le, ie ? fe + ie : fe, oe, 1)
            }
        },
        quickTo: function (ee, re, ie) {
            var ne, se = gsap$3.to(ee, _merge((ne = {}, ne[re] = "+=0.1", ne.paused = !0, ne), ie || {})),
                ae = function (le, he, fe) {
                    return se.resetTo(re, le, he, fe)
                };
            return ae.tween = se, ae
        },
        isTweening: function (ee) {
            return _globalTimeline.getTweensOf(ee, !0).length > 0
        },
        defaults: function (ee) {
            return ee && ee.ease && (ee.ease = _parseEase(ee.ease, _defaults$1.ease)), _mergeDeep(_defaults$1, ee || {})
        },
        config: function (ee) {
            return _mergeDeep(_config, ee || {})
        },
        registerEffect: function (ee) {
            var re = ee.name,
                ie = ee.effect,
                ne = ee.plugins,
                se = ee.defaults,
                ae = ee.extendTimeline;
            (ne || "").split(",").forEach(function (oe) {
                return oe && !_plugins[oe] && !_globals[oe] && _warn(re + " effect requires " + oe + " plugin.")
            }), _effects[re] = function (oe, le, he) {
                return ie(toArray(oe), _setDefaults$1(le || {}, se), he)
            }, ae && (Timeline.prototype[re] = function (oe, le, he) {
                return this.add(_effects[re](oe, _isObject$1(le) ? le : (he = le) && {}, this), he)
            })
        },
        registerEase: function (ee, re) {
            _easeMap[ee] = _parseEase(re)
        },
        parseEase: function (ee, re) {
            return arguments.length ? _parseEase(ee, re) : _easeMap
        },
        getById: function (ee) {
            return _globalTimeline.getById(ee)
        },
        exportRoot: function (ee, re) {
            ee === void 0 && (ee = {});
            var ie = new Timeline(ee),
                ne, se;
            for (ie.smoothChildTiming = _isNotFalse(ee.smoothChildTiming), _globalTimeline.remove(ie), ie._dp = 0, ie._time = ie._tTime = _globalTimeline._time, ne = _globalTimeline._first; ne;) se = ne._next, (re || !(!ne._dur && ne instanceof Tween && ne.vars.onComplete === ne._targets[0])) && _addToTimeline(ie, ne, ne._start - ne._delay), ne = se;
            return _addToTimeline(_globalTimeline, ie, 0), ie
        },
        context: function (ee, re) {
            return ee ? new Context(ee, re) : _context$3
        },
        matchMedia: function (ee) {
            return new MatchMedia(ee)
        },
        matchMediaRefresh: function () {
            return _media.forEach(function (ee) {
                var re = ee.conditions,
                    ie, ne;
                for (ne in re) re[ne] && (re[ne] = !1, ie = 1);
                ie && ee.revert()
            }) || _onMediaChange()
        },
        addEventListener: function (ee, re) {
            var ie = _listeners$1[ee] || (_listeners$1[ee] = []);
            ~ie.indexOf(re) || ie.push(re)
        },
        removeEventListener: function (ee, re) {
            var ie = _listeners$1[ee],
                ne = ie && ie.indexOf(re);
            ne >= 0 && ie.splice(ne, 1)
        },
        utils: {
            wrap,
            wrapYoyo,
            distribute,
            random,
            snap,
            normalize,
            getUnit,
            clamp,
            splitColor,
            toArray,
            selector,
            mapRange,
            pipe,
            unitize,
            interpolate,
            shuffle
        },
        install: _install,
        effects: _effects,
        ticker: _ticker,
        updateRoot: Timeline.updateRoot,
        plugins: _plugins,
        globalTimeline: _globalTimeline,
        core: {
            PropTween,
            globals: _addGlobal,
            Tween,
            Timeline,
            Animation,
            getCache: _getCache,
            _removeLinkedListItem,
            reverting: function () {
                return _reverting$1
            },
            context: function (ee) {
                return ee && _context$3 && (_context$3.data.push(ee), ee._ctx = _context$3), _context$3
            },
            suppressOverwrites: function (ee) {
                return _suppressOverwrites$1 = ee
            }
        }
    };
_forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function (te) {
    return _gsap[te] = Tween[te]
});
_ticker.add(Timeline.updateRoot);
_quickTween = _gsap.to({}, {
    duration: 0
});
var _getPluginPropTween = function (ee, re) {
        for (var ie = ee._pt; ie && ie.p !== re && ie.op !== re && ie.fp !== re;) ie = ie._next;
        return ie
    },
    _addModifiers = function (ee, re) {
        var ie = ee._targets,
            ne, se, ae;
        for (ne in re)
            for (se = ie.length; se--;) ae = ee._ptLookup[se][ne], ae && (ae = ae.d) && (ae._pt && (ae = _getPluginPropTween(ae, ne)), ae && ae.modifier && ae.modifier(re[ne], ee, ie[se], ne))
    },
    _buildModifierPlugin = function (ee, re) {
        return {
            name: ee,
            rawVars: 1,
            init: function (ne, se, ae) {
                ae._onInit = function (oe) {
                    var le, he;
                    if (_isString$1(se) && (le = {}, _forEachName(se, function (fe) {
                            return le[fe] = 1
                        }), se = le), re) {
                        le = {};
                        for (he in se) le[he] = re(se[he]);
                        se = le
                    }
                    _addModifiers(oe, se)
                }
            }
        }
    },
    gsap$3 = _gsap.registerPlugin({
        name: "attr",
        init: function (ee, re, ie, ne, se) {
            var ae, oe, le;
            this.tween = ie;
            for (ae in re) le = ee.getAttribute(ae) || "", oe = this.add(ee, "setAttribute", (le || 0) + "", re[ae], ne, se, 0, 0, ae), oe.op = ae, oe.b = le, this._props.push(ae)
        },
        render: function (ee, re) {
            for (var ie = re._pt; ie;) _reverting$1 ? ie.set(ie.t, ie.p, ie.b, ie) : ie.r(ee, ie.d), ie = ie._next
        }
    }, {
        name: "endArray",
        init: function (ee, re) {
            for (var ie = re.length; ie--;) this.add(ee, ie, ee[ie] || 0, re[ie], 0, 0, 0, 0, 0, 1)
        }
    }, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap;
Tween.version = Timeline.version = gsap$3.version = "3.11.4";
_coreReady = 1;
_windowExists$2() && _wake();
_easeMap.Power0;
_easeMap.Power1;
_easeMap.Power2;
_easeMap.Power3;
_easeMap.Power4;
_easeMap.Linear;
_easeMap.Quad;
_easeMap.Cubic;
_easeMap.Quart;
_easeMap.Quint;
_easeMap.Strong;
_easeMap.Elastic;
_easeMap.Back;
_easeMap.SteppedEase;
_easeMap.Bounce;
_easeMap.Sine;
_easeMap.Expo;
_easeMap.Circ;
/*!
 * CSSPlugin 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var _win$3, _doc$3, _docElement, _pluginInitted, _tempDiv, _recentSetterPlugin, _reverting, _windowExists$1 = function () {
        return typeof window < "u"
    },
    _transformProps = {},
    _RAD2DEG = 180 / Math.PI,
    _DEG2RAD = Math.PI / 180,
    _atan2 = Math.atan2,
    _bigNum = 1e8,
    _capsExp$1 = /([A-Z])/g,
    _horizontalExp = /(left|right|width|margin|padding|x)/i,
    _complexExp = /[\s,\(]\S/,
    _propertyAliases = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
    },
    _renderCSSProp = function (ee, re) {
        return re.set(re.t, re.p, Math.round((re.s + re.c * ee) * 1e4) / 1e4 + re.u, re)
    },
    _renderPropWithEnd = function (ee, re) {
        return re.set(re.t, re.p, ee === 1 ? re.e : Math.round((re.s + re.c * ee) * 1e4) / 1e4 + re.u, re)
    },
    _renderCSSPropWithBeginning = function (ee, re) {
        return re.set(re.t, re.p, ee ? Math.round((re.s + re.c * ee) * 1e4) / 1e4 + re.u : re.b, re)
    },
    _renderRoundedCSSProp = function (ee, re) {
        var ie = re.s + re.c * ee;
        re.set(re.t, re.p, ~~(ie + (ie < 0 ? -.5 : .5)) + re.u, re)
    },
    _renderNonTweeningValue = function (ee, re) {
        return re.set(re.t, re.p, ee ? re.e : re.b, re)
    },
    _renderNonTweeningValueOnlyAtEnd = function (ee, re) {
        return re.set(re.t, re.p, ee !== 1 ? re.b : re.e, re)
    },
    _setterCSSStyle = function (ee, re, ie) {
        return ee.style[re] = ie
    },
    _setterCSSProp = function (ee, re, ie) {
        return ee.style.setProperty(re, ie)
    },
    _setterTransform = function (ee, re, ie) {
        return ee._gsap[re] = ie
    },
    _setterScale = function (ee, re, ie) {
        return ee._gsap.scaleX = ee._gsap.scaleY = ie
    },
    _setterScaleWithRender = function (ee, re, ie, ne, se) {
        var ae = ee._gsap;
        ae.scaleX = ae.scaleY = ie, ae.renderTransform(se, ae)
    },
    _setterTransformWithRender = function (ee, re, ie, ne, se) {
        var ae = ee._gsap;
        ae[re] = ie, ae.renderTransform(se, ae)
    },
    _transformProp$1 = "transform",
    _transformOriginProp = _transformProp$1 + "Origin",
    _saveStyle = function (ee, re) {
        var ie = this,
            ne = this.target,
            se = ne.style;
        if (ee in _transformProps) {
            if (this.tfm = this.tfm || {}, ee !== "transform" && (ee = _propertyAliases[ee] || ee, ~ee.indexOf(",") ? ee.split(",").forEach(function (ae) {
                    return ie.tfm[ae] = _get(ne, ae)
                }) : this.tfm[ee] = ne._gsap.x ? ne._gsap[ee] : _get(ne, ee)), this.props.indexOf(_transformProp$1) >= 0) return;
            ne._gsap.svg && (this.svgo = ne.getAttribute("data-svg-origin"), this.props.push(_transformOriginProp, re, "")), ee = _transformProp$1
        }(se || re) && this.props.push(ee, re, se[ee])
    },
    _removeIndependentTransforms = function (ee) {
        ee.translate && (ee.removeProperty("translate"), ee.removeProperty("scale"), ee.removeProperty("rotate"))
    },
    _revertStyle = function () {
        var ee = this.props,
            re = this.target,
            ie = re.style,
            ne = re._gsap,
            se, ae;
        for (se = 0; se < ee.length; se += 3) ee[se + 1] ? re[ee[se]] = ee[se + 2] : ee[se + 2] ? ie[ee[se]] = ee[se + 2] : ie.removeProperty(ee[se].replace(_capsExp$1, "-$1").toLowerCase());
        if (this.tfm) {
            for (ae in this.tfm) ne[ae] = this.tfm[ae];
            ne.svg && (ne.renderTransform(), re.setAttribute("data-svg-origin", this.svgo || "")), se = _reverting(), se && !se.isStart && !ie[_transformProp$1] && (_removeIndependentTransforms(ie), ne.uncache = 1)
        }
    },
    _getStyleSaver = function (ee, re) {
        var ie = {
            target: ee,
            props: [],
            revert: _revertStyle,
            save: _saveStyle
        };
        return re && re.split(",").forEach(function (ne) {
            return ie.save(ne)
        }), ie
    },
    _supports3D, _createElement = function (ee, re) {
        var ie = _doc$3.createElementNS ? _doc$3.createElementNS((re || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), ee) : _doc$3.createElement(ee);
        return ie.style ? ie : _doc$3.createElement(ee)
    },
    _getComputedProperty = function te(ee, re, ie) {
        var ne = getComputedStyle(ee);
        return ne[re] || ne.getPropertyValue(re.replace(_capsExp$1, "-$1").toLowerCase()) || ne.getPropertyValue(re) || !ie && te(ee, _checkPropPrefix(re) || re, 1) || ""
    },
    _prefixes = "O,Moz,ms,Ms,Webkit".split(","),
    _checkPropPrefix = function (ee, re, ie) {
        var ne = re || _tempDiv,
            se = ne.style,
            ae = 5;
        if (ee in se && !ie) return ee;
        for (ee = ee.charAt(0).toUpperCase() + ee.substr(1); ae-- && !(_prefixes[ae] + ee in se););
        return ae < 0 ? null : (ae === 3 ? "ms" : ae >= 0 ? _prefixes[ae] : "") + ee
    },
    _initCore$2 = function () {
        _windowExists$1() && window.document && (_win$3 = window, _doc$3 = _win$3.document, _docElement = _doc$3.documentElement, _tempDiv = _createElement("div") || {
            style: {}
        }, _createElement("div"), _transformProp$1 = _checkPropPrefix(_transformProp$1), _transformOriginProp = _transformProp$1 + "Origin", _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", _supports3D = !!_checkPropPrefix("perspective"), _reverting = gsap$3.core.reverting, _pluginInitted = 1)
    },
    _getBBoxHack = function te(ee) {
        var re = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            ie = this.parentNode,
            ne = this.nextSibling,
            se = this.style.cssText,
            ae;
        if (_docElement.appendChild(re), re.appendChild(this), this.style.display = "block", ee) try {
            ae = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = te
        } catch {} else this._gsapBBox && (ae = this._gsapBBox());
        return ie && (ne ? ie.insertBefore(this, ne) : ie.appendChild(this)), _docElement.removeChild(re), this.style.cssText = se, ae
    },
    _getAttributeFallbacks = function (ee, re) {
        for (var ie = re.length; ie--;)
            if (ee.hasAttribute(re[ie])) return ee.getAttribute(re[ie])
    },
    _getBBox = function (ee) {
        var re;
        try {
            re = ee.getBBox()
        } catch {
            re = _getBBoxHack.call(ee, !0)
        }
        return re && (re.width || re.height) || ee.getBBox === _getBBoxHack || (re = _getBBoxHack.call(ee, !0)), re && !re.width && !re.x && !re.y ? {
            x: +_getAttributeFallbacks(ee, ["x", "cx", "x1"]) || 0,
            y: +_getAttributeFallbacks(ee, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        } : re
    },
    _isSVG = function (ee) {
        return !!(ee.getCTM && (!ee.parentNode || ee.ownerSVGElement) && _getBBox(ee))
    },
    _removeProperty = function (ee, re) {
        if (re) {
            var ie = ee.style;
            re in _transformProps && re !== _transformOriginProp && (re = _transformProp$1), ie.removeProperty ? ((re.substr(0, 2) === "ms" || re.substr(0, 6) === "webkit") && (re = "-" + re), ie.removeProperty(re.replace(_capsExp$1, "-$1").toLowerCase())) : ie.removeAttribute(re)
        }
    },
    _addNonTweeningPT = function (ee, re, ie, ne, se, ae) {
        var oe = new PropTween(ee._pt, re, ie, 0, 1, ae ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
        return ee._pt = oe, oe.b = ne, oe.e = se, ee._props.push(ie), oe
    },
    _nonConvertibleUnits = {
        deg: 1,
        rad: 1,
        turn: 1
    },
    _nonStandardLayouts = {
        grid: 1,
        flex: 1
    },
    _convertToUnit = function te(ee, re, ie, ne) {
        var se = parseFloat(ie) || 0,
            ae = (ie + "").trim().substr((se + "").length) || "px",
            oe = _tempDiv.style,
            le = _horizontalExp.test(re),
            he = ee.tagName.toLowerCase() === "svg",
            fe = (he ? "client" : "offset") + (le ? "Width" : "Height"),
            _e = 100,
            ue = ne === "px",
            de = ne === "%",
            me, ce, Ce, pe;
        return ne === ae || !se || _nonConvertibleUnits[ne] || _nonConvertibleUnits[ae] ? se : (ae !== "px" && !ue && (se = te(ee, re, ie, "px")), pe = ee.getCTM && _isSVG(ee), (de || ae === "%") && (_transformProps[re] || ~re.indexOf("adius")) ? (me = pe ? ee.getBBox()[le ? "width" : "height"] : ee[fe], _round$1(de ? se / me * _e : se / 100 * me)) : (oe[le ? "width" : "height"] = _e + (ue ? ae : ne), ce = ~re.indexOf("adius") || ne === "em" && ee.appendChild && !he ? ee : ee.parentNode, pe && (ce = (ee.ownerSVGElement || {}).parentNode), (!ce || ce === _doc$3 || !ce.appendChild) && (ce = _doc$3.body), Ce = ce._gsap, Ce && de && Ce.width && le && Ce.time === _ticker.time && !Ce.uncache ? _round$1(se / Ce.width * _e) : ((de || ae === "%") && !_nonStandardLayouts[_getComputedProperty(ce, "display")] && (oe.position = _getComputedProperty(ee, "position")), ce === ee && (oe.position = "static"), ce.appendChild(_tempDiv), me = _tempDiv[fe], ce.removeChild(_tempDiv), oe.position = "absolute", le && de && (Ce = _getCache(ce), Ce.time = _ticker.time, Ce.width = ce[fe]), _round$1(ue ? me * se / _e : me && se ? _e / me * se : 0))))
    },
    _get = function (ee, re, ie, ne) {
        var se;
        return _pluginInitted || _initCore$2(), re in _propertyAliases && re !== "transform" && (re = _propertyAliases[re], ~re.indexOf(",") && (re = re.split(",")[0])), _transformProps[re] && re !== "transform" ? (se = _parseTransform(ee, ne), se = re !== "transformOrigin" ? se[re] : se.svg ? se.origin : _firstTwoOnly(_getComputedProperty(ee, _transformOriginProp)) + " " + se.zOrigin + "px") : (se = ee.style[re], (!se || se === "auto" || ne || ~(se + "").indexOf("calc(")) && (se = _specialProps[re] && _specialProps[re](ee, re, ie) || _getComputedProperty(ee, re) || _getProperty(ee, re) || (re === "opacity" ? 1 : 0))), ie && !~(se + "").trim().indexOf(" ") ? _convertToUnit(ee, re, se, ie) + ie : se
    },
    _tweenComplexCSSString = function (ee, re, ie, ne) {
        if (!ie || ie === "none") {
            var se = _checkPropPrefix(re, ee, 1),
                ae = se && _getComputedProperty(ee, se, 1);
            ae && ae !== ie ? (re = se, ie = ae) : re === "borderColor" && (ie = _getComputedProperty(ee, "borderTopColor"))
        }
        var oe = new PropTween(this._pt, ee.style, re, 0, 1, _renderComplexString),
            le = 0,
            he = 0,
            fe, _e, ue, de, me, ce, Ce, pe, ve, ge, ye, Ee;
        if (oe.b = ie, oe.e = ne, ie += "", ne += "", ne === "auto" && (ee.style[re] = ne, ne = _getComputedProperty(ee, re) || ne, ee.style[re] = ie), fe = [ie, ne], _colorStringFilter(fe), ie = fe[0], ne = fe[1], ue = ie.match(_numWithUnitExp) || [], Ee = ne.match(_numWithUnitExp) || [], Ee.length) {
            for (; _e = _numWithUnitExp.exec(ne);) Ce = _e[0], ve = ne.substring(le, _e.index), me ? me = (me + 1) % 5 : (ve.substr(-5) === "rgba(" || ve.substr(-5) === "hsla(") && (me = 1), Ce !== (ce = ue[he++] || "") && (de = parseFloat(ce) || 0, ye = ce.substr((de + "").length), Ce.charAt(1) === "=" && (Ce = _parseRelative(de, Ce) + ye), pe = parseFloat(Ce), ge = Ce.substr((pe + "").length), le = _numWithUnitExp.lastIndex - ge.length, ge || (ge = ge || _config.units[re] || ye, le === ne.length && (ne += ge, oe.e += ge)), ye !== ge && (de = _convertToUnit(ee, re, ce, ge) || 0), oe._pt = {
                _next: oe._pt,
                p: ve || he === 1 ? ve : ",",
                s: de,
                c: pe - de,
                m: me && me < 4 || re === "zIndex" ? Math.round : 0
            });
            oe.c = le < ne.length ? ne.substring(le, ne.length) : ""
        } else oe.r = re === "display" && ne === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
        return _relExp.test(ne) && (oe.e = 0), this._pt = oe, oe
    },
    _keywordToPercent = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
    },
    _convertKeywordsToPercentages = function (ee) {
        var re = ee.split(" "),
            ie = re[0],
            ne = re[1] || "50%";
        return (ie === "top" || ie === "bottom" || ne === "left" || ne === "right") && (ee = ie, ie = ne, ne = ee), re[0] = _keywordToPercent[ie] || ie, re[1] = _keywordToPercent[ne] || ne, re.join(" ")
    },
    _renderClearProps = function (ee, re) {
        if (re.tween && re.tween._time === re.tween._dur) {
            var ie = re.t,
                ne = ie.style,
                se = re.u,
                ae = ie._gsap,
                oe, le, he;
            if (se === "all" || se === !0) ne.cssText = "", le = 1;
            else
                for (se = se.split(","), he = se.length; --he > -1;) oe = se[he], _transformProps[oe] && (le = 1, oe = oe === "transformOrigin" ? _transformOriginProp : _transformProp$1), _removeProperty(ie, oe);
            le && (_removeProperty(ie, _transformProp$1), ae && (ae.svg && ie.removeAttribute("transform"), _parseTransform(ie, 1), ae.uncache = 1, _removeIndependentTransforms(ne)))
        }
    },
    _specialProps = {
        clearProps: function (ee, re, ie, ne, se) {
            if (se.data !== "isFromStart") {
                var ae = ee._pt = new PropTween(ee._pt, re, ie, 0, 0, _renderClearProps);
                return ae.u = ne, ae.pr = -10, ae.tween = se, ee._props.push(ie), 1
            }
        }
    },
    _identity2DMatrix = [1, 0, 0, 1, 0, 0],
    _rotationalProperties = {},
    _isNullTransform = function (ee) {
        return ee === "matrix(1, 0, 0, 1, 0, 0)" || ee === "none" || !ee
    },
    _getComputedTransformMatrixAsArray = function (ee) {
        var re = _getComputedProperty(ee, _transformProp$1);
        return _isNullTransform(re) ? _identity2DMatrix : re.substr(7).match(_numExp).map(_round$1)
    },
    _getMatrix = function (ee, re) {
        var ie = ee._gsap || _getCache(ee),
            ne = ee.style,
            se = _getComputedTransformMatrixAsArray(ee),
            ae, oe, le, he;
        return ie.svg && ee.getAttribute("transform") ? (le = ee.transform.baseVal.consolidate().matrix, se = [le.a, le.b, le.c, le.d, le.e, le.f], se.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : se) : (se === _identity2DMatrix && !ee.offsetParent && ee !== _docElement && !ie.svg && (le = ne.display, ne.display = "block", ae = ee.parentNode, (!ae || !ee.offsetParent) && (he = 1, oe = ee.nextElementSibling, _docElement.appendChild(ee)), se = _getComputedTransformMatrixAsArray(ee), le ? ne.display = le : _removeProperty(ee, "display"), he && (oe ? ae.insertBefore(ee, oe) : ae ? ae.appendChild(ee) : _docElement.removeChild(ee))), re && se.length > 6 ? [se[0], se[1], se[4], se[5], se[12], se[13]] : se)
    },
    _applySVGOrigin = function (ee, re, ie, ne, se, ae) {
        var oe = ee._gsap,
            le = se || _getMatrix(ee, !0),
            he = oe.xOrigin || 0,
            fe = oe.yOrigin || 0,
            _e = oe.xOffset || 0,
            ue = oe.yOffset || 0,
            de = le[0],
            me = le[1],
            ce = le[2],
            Ce = le[3],
            pe = le[4],
            ve = le[5],
            ge = re.split(" "),
            ye = parseFloat(ge[0]) || 0,
            Ee = parseFloat(ge[1]) || 0,
            Pe, xe, we, Fe;
        ie ? le !== _identity2DMatrix && (xe = de * Ce - me * ce) && (we = ye * (Ce / xe) + Ee * (-ce / xe) + (ce * ve - Ce * pe) / xe, Fe = ye * (-me / xe) + Ee * (de / xe) - (de * ve - me * pe) / xe, ye = we, Ee = Fe) : (Pe = _getBBox(ee), ye = Pe.x + (~ge[0].indexOf("%") ? ye / 100 * Pe.width : ye), Ee = Pe.y + (~(ge[1] || ge[0]).indexOf("%") ? Ee / 100 * Pe.height : Ee)), ne || ne !== !1 && oe.smooth ? (pe = ye - he, ve = Ee - fe, oe.xOffset = _e + (pe * de + ve * ce) - pe, oe.yOffset = ue + (pe * me + ve * Ce) - ve) : oe.xOffset = oe.yOffset = 0, oe.xOrigin = ye, oe.yOrigin = Ee, oe.smooth = !!ne, oe.origin = re, oe.originIsAbsolute = !!ie, ee.style[_transformOriginProp] = "0px 0px", ae && (_addNonTweeningPT(ae, oe, "xOrigin", he, ye), _addNonTweeningPT(ae, oe, "yOrigin", fe, Ee), _addNonTweeningPT(ae, oe, "xOffset", _e, oe.xOffset), _addNonTweeningPT(ae, oe, "yOffset", ue, oe.yOffset)), ee.setAttribute("data-svg-origin", ye + " " + Ee)
    },
    _parseTransform = function (ee, re) {
        var ie = ee._gsap || new GSCache(ee);
        if ("x" in ie && !re && !ie.uncache) return ie;
        var ne = ee.style,
            se = ie.scaleX < 0,
            ae = "px",
            oe = "deg",
            le = getComputedStyle(ee),
            he = _getComputedProperty(ee, _transformOriginProp) || "0",
            fe, _e, ue, de, me, ce, Ce, pe, ve, ge, ye, Ee, Pe, xe, we, Fe, Le, Re, Me, $e, Be, Ie, Se, Ae, be, De, Te, ke, Ve, We, Ne, He;
        return fe = _e = ue = ce = Ce = pe = ve = ge = ye = 0, de = me = 1, ie.svg = !!(ee.getCTM && _isSVG(ee)), le.translate && ((le.translate !== "none" || le.scale !== "none" || le.rotate !== "none") && (ne[_transformProp$1] = (le.translate !== "none" ? "translate3d(" + (le.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (le.rotate !== "none" ? "rotate(" + le.rotate + ") " : "") + (le.scale !== "none" ? "scale(" + le.scale.split(" ").join(",") + ") " : "") + (le[_transformProp$1] !== "none" ? le[_transformProp$1] : "")), ne.scale = ne.rotate = ne.translate = "none"), xe = _getMatrix(ee, ie.svg), ie.svg && (ie.uncache ? (be = ee.getBBox(), he = ie.xOrigin - be.x + "px " + (ie.yOrigin - be.y) + "px", Ae = "") : Ae = !re && ee.getAttribute("data-svg-origin"), _applySVGOrigin(ee, Ae || he, !!Ae || ie.originIsAbsolute, ie.smooth !== !1, xe)), Ee = ie.xOrigin || 0, Pe = ie.yOrigin || 0, xe !== _identity2DMatrix && (Re = xe[0], Me = xe[1], $e = xe[2], Be = xe[3], fe = Ie = xe[4], _e = Se = xe[5], xe.length === 6 ? (de = Math.sqrt(Re * Re + Me * Me), me = Math.sqrt(Be * Be + $e * $e), ce = Re || Me ? _atan2(Me, Re) * _RAD2DEG : 0, ve = $e || Be ? _atan2($e, Be) * _RAD2DEG + ce : 0, ve && (me *= Math.abs(Math.cos(ve * _DEG2RAD))), ie.svg && (fe -= Ee - (Ee * Re + Pe * $e), _e -= Pe - (Ee * Me + Pe * Be))) : (He = xe[6], We = xe[7], Te = xe[8], ke = xe[9], Ve = xe[10], Ne = xe[11], fe = xe[12], _e = xe[13], ue = xe[14], we = _atan2(He, Ve), Ce = we * _RAD2DEG, we && (Fe = Math.cos(-we), Le = Math.sin(-we), Ae = Ie * Fe + Te * Le, be = Se * Fe + ke * Le, De = He * Fe + Ve * Le, Te = Ie * -Le + Te * Fe, ke = Se * -Le + ke * Fe, Ve = He * -Le + Ve * Fe, Ne = We * -Le + Ne * Fe, Ie = Ae, Se = be, He = De), we = _atan2(-$e, Ve), pe = we * _RAD2DEG, we && (Fe = Math.cos(-we), Le = Math.sin(-we), Ae = Re * Fe - Te * Le, be = Me * Fe - ke * Le, De = $e * Fe - Ve * Le, Ne = Be * Le + Ne * Fe, Re = Ae, Me = be, $e = De), we = _atan2(Me, Re), ce = we * _RAD2DEG, we && (Fe = Math.cos(we), Le = Math.sin(we), Ae = Re * Fe + Me * Le, be = Ie * Fe + Se * Le, Me = Me * Fe - Re * Le, Se = Se * Fe - Ie * Le, Re = Ae, Ie = be), Ce && Math.abs(Ce) + Math.abs(ce) > 359.9 && (Ce = ce = 0, pe = 180 - pe), de = _round$1(Math.sqrt(Re * Re + Me * Me + $e * $e)), me = _round$1(Math.sqrt(Se * Se + He * He)), we = _atan2(Ie, Se), ve = Math.abs(we) > 2e-4 ? we * _RAD2DEG : 0, ye = Ne ? 1 / (Ne < 0 ? -Ne : Ne) : 0), ie.svg && (Ae = ee.getAttribute("transform"), ie.forceCSS = ee.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(ee, _transformProp$1)), Ae && ee.setAttribute("transform", Ae))), Math.abs(ve) > 90 && Math.abs(ve) < 270 && (se ? (de *= -1, ve += ce <= 0 ? 180 : -180, ce += ce <= 0 ? 180 : -180) : (me *= -1, ve += ve <= 0 ? 180 : -180)), re = re || ie.uncache, ie.x = fe - ((ie.xPercent = fe && (!re && ie.xPercent || (Math.round(ee.offsetWidth / 2) === Math.round(-fe) ? -50 : 0))) ? ee.offsetWidth * ie.xPercent / 100 : 0) + ae, ie.y = _e - ((ie.yPercent = _e && (!re && ie.yPercent || (Math.round(ee.offsetHeight / 2) === Math.round(-_e) ? -50 : 0))) ? ee.offsetHeight * ie.yPercent / 100 : 0) + ae, ie.z = ue + ae, ie.scaleX = _round$1(de), ie.scaleY = _round$1(me), ie.rotation = _round$1(ce) + oe, ie.rotationX = _round$1(Ce) + oe, ie.rotationY = _round$1(pe) + oe, ie.skewX = ve + oe, ie.skewY = ge + oe, ie.transformPerspective = ye + ae, (ie.zOrigin = parseFloat(he.split(" ")[2]) || 0) && (ne[_transformOriginProp] = _firstTwoOnly(he)), ie.xOffset = ie.yOffset = 0, ie.force3D = _config.force3D, ie.renderTransform = ie.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms, ie.uncache = 0, ie
    },
    _firstTwoOnly = function (ee) {
        return (ee = ee.split(" "))[0] + " " + ee[1]
    },
    _addPxTranslate = function (ee, re, ie) {
        var ne = getUnit(re);
        return _round$1(parseFloat(re) + parseFloat(_convertToUnit(ee, "x", ie + "px", ne))) + ne
    },
    _renderNon3DTransforms = function (ee, re) {
        re.z = "0px", re.rotationY = re.rotationX = "0deg", re.force3D = 0, _renderCSSTransforms(ee, re)
    },
    _zeroDeg = "0deg",
    _zeroPx = "0px",
    _endParenthesis = ") ",
    _renderCSSTransforms = function (ee, re) {
        var ie = re || this,
            ne = ie.xPercent,
            se = ie.yPercent,
            ae = ie.x,
            oe = ie.y,
            le = ie.z,
            he = ie.rotation,
            fe = ie.rotationY,
            _e = ie.rotationX,
            ue = ie.skewX,
            de = ie.skewY,
            me = ie.scaleX,
            ce = ie.scaleY,
            Ce = ie.transformPerspective,
            pe = ie.force3D,
            ve = ie.target,
            ge = ie.zOrigin,
            ye = "",
            Ee = pe === "auto" && ee && ee !== 1 || pe === !0;
        if (ge && (_e !== _zeroDeg || fe !== _zeroDeg)) {
            var Pe = parseFloat(fe) * _DEG2RAD,
                xe = Math.sin(Pe),
                we = Math.cos(Pe),
                Fe;
            Pe = parseFloat(_e) * _DEG2RAD, Fe = Math.cos(Pe), ae = _addPxTranslate(ve, ae, xe * Fe * -ge), oe = _addPxTranslate(ve, oe, -Math.sin(Pe) * -ge), le = _addPxTranslate(ve, le, we * Fe * -ge + ge)
        }
        Ce !== _zeroPx && (ye += "perspective(" + Ce + _endParenthesis), (ne || se) && (ye += "translate(" + ne + "%, " + se + "%) "), (Ee || ae !== _zeroPx || oe !== _zeroPx || le !== _zeroPx) && (ye += le !== _zeroPx || Ee ? "translate3d(" + ae + ", " + oe + ", " + le + ") " : "translate(" + ae + ", " + oe + _endParenthesis), he !== _zeroDeg && (ye += "rotate(" + he + _endParenthesis), fe !== _zeroDeg && (ye += "rotateY(" + fe + _endParenthesis), _e !== _zeroDeg && (ye += "rotateX(" + _e + _endParenthesis), (ue !== _zeroDeg || de !== _zeroDeg) && (ye += "skew(" + ue + ", " + de + _endParenthesis), (me !== 1 || ce !== 1) && (ye += "scale(" + me + ", " + ce + _endParenthesis), ve.style[_transformProp$1] = ye || "translate(0, 0)"
    },
    _renderSVGTransforms = function (ee, re) {
        var ie = re || this,
            ne = ie.xPercent,
            se = ie.yPercent,
            ae = ie.x,
            oe = ie.y,
            le = ie.rotation,
            he = ie.skewX,
            fe = ie.skewY,
            _e = ie.scaleX,
            ue = ie.scaleY,
            de = ie.target,
            me = ie.xOrigin,
            ce = ie.yOrigin,
            Ce = ie.xOffset,
            pe = ie.yOffset,
            ve = ie.forceCSS,
            ge = parseFloat(ae),
            ye = parseFloat(oe),
            Ee, Pe, xe, we, Fe;
        le = parseFloat(le), he = parseFloat(he), fe = parseFloat(fe), fe && (fe = parseFloat(fe), he += fe, le += fe), le || he ? (le *= _DEG2RAD, he *= _DEG2RAD, Ee = Math.cos(le) * _e, Pe = Math.sin(le) * _e, xe = Math.sin(le - he) * -ue, we = Math.cos(le - he) * ue, he && (fe *= _DEG2RAD, Fe = Math.tan(he - fe), Fe = Math.sqrt(1 + Fe * Fe), xe *= Fe, we *= Fe, fe && (Fe = Math.tan(fe), Fe = Math.sqrt(1 + Fe * Fe), Ee *= Fe, Pe *= Fe)), Ee = _round$1(Ee), Pe = _round$1(Pe), xe = _round$1(xe), we = _round$1(we)) : (Ee = _e, we = ue, Pe = xe = 0), (ge && !~(ae + "").indexOf("px") || ye && !~(oe + "").indexOf("px")) && (ge = _convertToUnit(de, "x", ae, "px"), ye = _convertToUnit(de, "y", oe, "px")), (me || ce || Ce || pe) && (ge = _round$1(ge + me - (me * Ee + ce * xe) + Ce), ye = _round$1(ye + ce - (me * Pe + ce * we) + pe)), (ne || se) && (Fe = de.getBBox(), ge = _round$1(ge + ne / 100 * Fe.width), ye = _round$1(ye + se / 100 * Fe.height)), Fe = "matrix(" + Ee + "," + Pe + "," + xe + "," + we + "," + ge + "," + ye + ")", de.setAttribute("transform", Fe), ve && (de.style[_transformProp$1] = Fe)
    },
    _addRotationalPropTween = function (ee, re, ie, ne, se) {
        var ae = 360,
            oe = _isString$1(se),
            le = parseFloat(se) * (oe && ~se.indexOf("rad") ? _RAD2DEG : 1),
            he = le - ne,
            fe = ne + he + "deg",
            _e, ue;
        return oe && (_e = se.split("_")[1], _e === "short" && (he %= ae, he !== he % (ae / 2) && (he += he < 0 ? ae : -ae)), _e === "cw" && he < 0 ? he = (he + ae * _bigNum) % ae - ~~(he / ae) * ae : _e === "ccw" && he > 0 && (he = (he - ae * _bigNum) % ae - ~~(he / ae) * ae)), ee._pt = ue = new PropTween(ee._pt, re, ie, ne, he, _renderPropWithEnd), ue.e = fe, ue.u = "deg", ee._props.push(ie), ue
    },
    _assign = function (ee, re) {
        for (var ie in re) ee[ie] = re[ie];
        return ee
    },
    _addRawTransformPTs = function (ee, re, ie) {
        var ne = _assign({}, ie._gsap),
            se = "perspective,force3D,transformOrigin,svgOrigin",
            ae = ie.style,
            oe, le, he, fe, _e, ue, de, me;
        ne.svg ? (he = ie.getAttribute("transform"), ie.setAttribute("transform", ""), ae[_transformProp$1] = re, oe = _parseTransform(ie, 1), _removeProperty(ie, _transformProp$1), ie.setAttribute("transform", he)) : (he = getComputedStyle(ie)[_transformProp$1], ae[_transformProp$1] = re, oe = _parseTransform(ie, 1), ae[_transformProp$1] = he);
        for (le in _transformProps) he = ne[le], fe = oe[le], he !== fe && se.indexOf(le) < 0 && (de = getUnit(he), me = getUnit(fe), _e = de !== me ? _convertToUnit(ie, le, he, me) : parseFloat(he), ue = parseFloat(fe), ee._pt = new PropTween(ee._pt, oe, le, _e, ue - _e, _renderCSSProp), ee._pt.u = me || 0, ee._props.push(le));
        _assign(oe, ne)
    };
_forEachName("padding,margin,Width,Radius", function (te, ee) {
    var re = "Top",
        ie = "Right",
        ne = "Bottom",
        se = "Left",
        ae = (ee < 3 ? [re, ie, ne, se] : [re + se, re + ie, ne + ie, ne + se]).map(function (oe) {
            return ee < 2 ? te + oe : "border" + oe + te
        });
    _specialProps[ee > 1 ? "border" + te : te] = function (oe, le, he, fe, _e) {
        var ue, de;
        if (arguments.length < 4) return ue = ae.map(function (me) {
            return _get(oe, me, he)
        }), de = ue.join(" "), de.split(ue[0]).length === 5 ? ue[0] : de;
        ue = (fe + "").split(" "), de = {}, ae.forEach(function (me, ce) {
            return de[me] = ue[ce] = ue[ce] || ue[(ce - 1) / 2 | 0]
        }), oe.init(le, de, _e)
    }
});
var CSSPlugin = {
    name: "css",
    register: _initCore$2,
    targetTest: function (ee) {
        return ee.style && ee.nodeType
    },
    init: function (ee, re, ie, ne, se) {
        var ae = this._props,
            oe = ee.style,
            le = ie.vars.startAt,
            he, fe, _e, ue, de, me, ce, Ce, pe, ve, ge, ye, Ee, Pe, xe, we;
        _pluginInitted || _initCore$2(), this.styles = this.styles || _getStyleSaver(ee), we = this.styles.props, this.tween = ie;
        for (ce in re)
            if (ce !== "autoRound" && (fe = re[ce], !(_plugins[ce] && _checkPlugin(ce, re, ie, ne, ee, se)))) {
                if (de = typeof fe, me = _specialProps[ce], de === "function" && (fe = fe.call(ie, ne, ee, se), de = typeof fe), de === "string" && ~fe.indexOf("random(") && (fe = _replaceRandom(fe)), me) me(this, ee, ce, fe, ie) && (xe = 1);
                else if (ce.substr(0, 2) === "--") he = (getComputedStyle(ee).getPropertyValue(ce) + "").trim(), fe += "", _colorExp.lastIndex = 0, _colorExp.test(he) || (Ce = getUnit(he), pe = getUnit(fe)), pe ? Ce !== pe && (he = _convertToUnit(ee, ce, he, pe) + pe) : Ce && (fe += Ce), this.add(oe, "setProperty", he, fe, ne, se, 0, 0, ce), ae.push(ce), we.push(ce, 0, oe[ce]);
                else if (de !== "undefined") {
                    if (le && ce in le ? (he = typeof le[ce] == "function" ? le[ce].call(ie, ne, ee, se) : le[ce], _isString$1(he) && ~he.indexOf("random(") && (he = _replaceRandom(he)), getUnit(he + "") || (he += _config.units[ce] || getUnit(_get(ee, ce)) || ""), (he + "").charAt(1) === "=" && (he = _get(ee, ce))) : he = _get(ee, ce), ue = parseFloat(he), ve = de === "string" && fe.charAt(1) === "=" && fe.substr(0, 2), ve && (fe = fe.substr(2)), _e = parseFloat(fe), ce in _propertyAliases && (ce === "autoAlpha" && (ue === 1 && _get(ee, "visibility") === "hidden" && _e && (ue = 0), we.push("visibility", 0, oe.visibility), _addNonTweeningPT(this, oe, "visibility", ue ? "inherit" : "hidden", _e ? "inherit" : "hidden", !_e)), ce !== "scale" && ce !== "transform" && (ce = _propertyAliases[ce], ~ce.indexOf(",") && (ce = ce.split(",")[0]))), ge = ce in _transformProps, ge) {
                        if (this.styles.save(ce), ye || (Ee = ee._gsap, Ee.renderTransform && !re.parseTransform || _parseTransform(ee, re.parseTransform), Pe = re.smoothOrigin !== !1 && Ee.smooth, ye = this._pt = new PropTween(this._pt, oe, _transformProp$1, 0, 1, Ee.renderTransform, Ee, 0, -1), ye.dep = 1), ce === "scale") this._pt = new PropTween(this._pt, Ee, "scaleY", Ee.scaleY, (ve ? _parseRelative(Ee.scaleY, ve + _e) : _e) - Ee.scaleY || 0, _renderCSSProp), this._pt.u = 0, ae.push("scaleY", ce), ce += "X";
                        else if (ce === "transformOrigin") {
                            we.push(_transformOriginProp, 0, oe[_transformOriginProp]), fe = _convertKeywordsToPercentages(fe), Ee.svg ? _applySVGOrigin(ee, fe, 0, Pe, 0, this) : (pe = parseFloat(fe.split(" ")[2]) || 0, pe !== Ee.zOrigin && _addNonTweeningPT(this, Ee, "zOrigin", Ee.zOrigin, pe), _addNonTweeningPT(this, oe, ce, _firstTwoOnly(he), _firstTwoOnly(fe)));
                            continue
                        } else if (ce === "svgOrigin") {
                            _applySVGOrigin(ee, fe, 1, Pe, 0, this);
                            continue
                        } else if (ce in _rotationalProperties) {
                            _addRotationalPropTween(this, Ee, ce, ue, ve ? _parseRelative(ue, ve + fe) : fe);
                            continue
                        } else if (ce === "smoothOrigin") {
                            _addNonTweeningPT(this, Ee, "smooth", Ee.smooth, fe);
                            continue
                        } else if (ce === "force3D") {
                            Ee[ce] = fe;
                            continue
                        } else if (ce === "transform") {
                            _addRawTransformPTs(this, fe, ee);
                            continue
                        }
                    } else ce in oe || (ce = _checkPropPrefix(ce) || ce);
                    if (ge || (_e || _e === 0) && (ue || ue === 0) && !_complexExp.test(fe) && ce in oe) Ce = (he + "").substr((ue + "").length), _e || (_e = 0), pe = getUnit(fe) || (ce in _config.units ? _config.units[ce] : Ce), Ce !== pe && (ue = _convertToUnit(ee, ce, he, pe)), this._pt = new PropTween(this._pt, ge ? Ee : oe, ce, ue, (ve ? _parseRelative(ue, ve + _e) : _e) - ue, !ge && (pe === "px" || ce === "zIndex") && re.autoRound !== !1 ? _renderRoundedCSSProp : _renderCSSProp), this._pt.u = pe || 0, Ce !== pe && pe !== "%" && (this._pt.b = he, this._pt.r = _renderCSSPropWithBeginning);
                    else if (ce in oe) _tweenComplexCSSString.call(this, ee, ce, he, ve ? ve + fe : fe);
                    else if (ce in ee) this.add(ee, ce, he || ee[ce], ve ? ve + fe : fe, ne, se);
                    else if (ce !== "parseTransform") {
                        _missingPlugin(ce, fe);
                        continue
                    }
                    ge || (ce in oe ? we.push(ce, 0, oe[ce]) : we.push(ce, 1, he || ee[ce])), ae.push(ce)
                }
            } xe && _sortPropTweensByPriority(this)
    },
    render: function (ee, re) {
        if (re.tween._time || !_reverting())
            for (var ie = re._pt; ie;) ie.r(ee, ie.d), ie = ie._next;
        else re.styles.revert()
    },
    get: _get,
    aliases: _propertyAliases,
    getSetter: function (ee, re, ie) {
        var ne = _propertyAliases[re];
        return ne && ne.indexOf(",") < 0 && (re = ne), re in _transformProps && re !== _transformOriginProp && (ee._gsap.x || _get(ee, "x")) ? ie && _recentSetterPlugin === ie ? re === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = ie || {}) && (re === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : ee.style && !_isUndefined(ee.style[re]) ? _setterCSSStyle : ~re.indexOf("-") ? _setterCSSProp : _getSetter(ee, re)
    },
    core: {
        _removeProperty,
        _getMatrix
    }
};
gsap$3.utils.checkPrefix = _checkPropPrefix;
gsap$3.core.getStyleSaver = _getStyleSaver;
(function (te, ee, re, ie) {
    var ne = _forEachName(te + "," + ee + "," + re, function (se) {
        _transformProps[se] = 1
    });
    _forEachName(ee, function (se) {
        _config.units[se] = "deg", _rotationalProperties[se] = 1
    }), _propertyAliases[ne[13]] = te + "," + ee, _forEachName(ie, function (se) {
        var ae = se.split(":");
        _propertyAliases[ae[1]] = ne[ae[0]]
    })
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
_forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (te) {
    _config.units[te] = "px"
});
gsap$3.registerPlugin(CSSPlugin);
var gsapWithCSS = gsap$3.registerPlugin(CSSPlugin) || gsap$3;
gsapWithCSS.core.Tween;

function _defineProperties(te, ee) {
    for (var re = 0; re < ee.length; re++) {
        var ie = ee[re];
        ie.enumerable = ie.enumerable || !1, ie.configurable = !0, "value" in ie && (ie.writable = !0), Object.defineProperty(te, ie.key, ie)
    }
}

function _createClass(te, ee, re) {
    return ee && _defineProperties(te.prototype, ee), re && _defineProperties(te, re), te
}
/*!
 * Observer 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var gsap$2, _coreInitted$2, _win$2, _doc$2, _docEl$1, _body$1, _isTouch, _pointerType, ScrollTrigger$1, _root$1, _normalizer$1, _eventTypes, _context$2, _getGSAP$1 = function () {
        return gsap$2 || typeof window < "u" && (gsap$2 = window.gsap) && gsap$2.registerPlugin && gsap$2
    },
    _startup$1 = 1,
    _observers = [],
    _scrollers = [],
    _proxies = [],
    _getTime$1 = Date.now,
    _bridge = function (ee, re) {
        return re
    },
    _integrate = function () {
        var ee = ScrollTrigger$1.core,
            re = ee.bridge || {},
            ie = ee._scrollers,
            ne = ee._proxies;
        ie.push.apply(ie, _scrollers), ne.push.apply(ne, _proxies), _scrollers = ie, _proxies = ne, _bridge = function (ae, oe) {
            return re[ae](oe)
        }
    },
    _getProxyProp = function (ee, re) {
        return ~_proxies.indexOf(ee) && _proxies[_proxies.indexOf(ee) + 1][re]
    },
    _isViewport$1 = function (ee) {
        return !!~_root$1.indexOf(ee)
    },
    _addListener$1 = function (ee, re, ie, ne, se) {
        return ee.addEventListener(re, ie, {
            passive: !ne,
            capture: !!se
        })
    },
    _removeListener$1 = function (ee, re, ie, ne) {
        return ee.removeEventListener(re, ie, !!ne)
    },
    _scrollLeft = "scrollLeft",
    _scrollTop = "scrollTop",
    _onScroll$1 = function () {
        return _normalizer$1 && _normalizer$1.isPressed || _scrollers.cache++
    },
    _scrollCacheFunc = function (ee, re) {
        var ie = function ne(se) {
            if (se || se === 0) {
                _startup$1 && (_win$2.history.scrollRestoration = "manual");
                var ae = _normalizer$1 && _normalizer$1.isPressed;
                se = ne.v = Math.round(se) || (_normalizer$1 && _normalizer$1.iOS ? 1 : 0), ee(se), ne.cacheID = _scrollers.cache, ae && _bridge("ss", se)
            } else(re || _scrollers.cache !== ne.cacheID || _bridge("ref")) && (ne.cacheID = _scrollers.cache, ne.v = ee());
            return ne.v + ne.offset
        };
        return ie.offset = 0, ee && ie
    },
    _horizontal = {
        s: _scrollLeft,
        p: "left",
        p2: "Left",
        os: "right",
        os2: "Right",
        d: "width",
        d2: "Width",
        a: "x",
        sc: _scrollCacheFunc(function (te) {
            return arguments.length ? _win$2.scrollTo(te, _vertical.sc()) : _win$2.pageXOffset || _doc$2[_scrollLeft] || _docEl$1[_scrollLeft] || _body$1[_scrollLeft] || 0
        })
    },
    _vertical = {
        s: _scrollTop,
        p: "top",
        p2: "Top",
        os: "bottom",
        os2: "Bottom",
        d: "height",
        d2: "Height",
        a: "y",
        op: _horizontal,
        sc: _scrollCacheFunc(function (te) {
            return arguments.length ? _win$2.scrollTo(_horizontal.sc(), te) : _win$2.pageYOffset || _doc$2[_scrollTop] || _docEl$1[_scrollTop] || _body$1[_scrollTop] || 0
        })
    },
    _getTarget = function (ee) {
        return gsap$2.utils.toArray(ee)[0] || (typeof ee == "string" && gsap$2.config().nullTargetWarn !== !1 ? console.warn("Element not found:", ee) : null)
    },
    _getScrollFunc = function (ee, re) {
        var ie = re.s,
            ne = re.sc;
        _isViewport$1(ee) && (ee = _doc$2.scrollingElement || _docEl$1);
        var se = _scrollers.indexOf(ee),
            ae = ne === _vertical.sc ? 1 : 2;
        !~se && (se = _scrollers.push(ee) - 1), _scrollers[se + ae] || ee.addEventListener("scroll", _onScroll$1);
        var oe = _scrollers[se + ae],
            le = oe || (_scrollers[se + ae] = _scrollCacheFunc(_getProxyProp(ee, ie), !0) || (_isViewport$1(ee) ? ne : _scrollCacheFunc(function (he) {
                return arguments.length ? ee[ie] = he : ee[ie]
            })));
        return le.target = ee, oe || (le.smooth = gsap$2.getProperty(ee, "scrollBehavior") === "smooth"), le
    },
    _getVelocityProp = function (ee, re, ie) {
        var ne = ee,
            se = ee,
            ae = _getTime$1(),
            oe = ae,
            le = re || 50,
            he = Math.max(500, le * 3),
            fe = function (me, ce) {
                var Ce = _getTime$1();
                ce || Ce - ae > le ? (se = ne, ne = me, oe = ae, ae = Ce) : ie ? ne += me : ne = se + (me - se) / (Ce - oe) * (ae - oe)
            },
            _e = function () {
                se = ne = ie ? 0 : ne, oe = ae = 0
            },
            ue = function (me) {
                var ce = oe,
                    Ce = se,
                    pe = _getTime$1();
                return (me || me === 0) && me !== ne && fe(me), ae === oe || pe - oe > he ? 0 : (ne + (ie ? Ce : -Ce)) / ((ie ? pe : ae) - ce) * 1e3
            };
        return {
            update: fe,
            reset: _e,
            getVelocity: ue
        }
    },
    _getEvent = function (ee, re) {
        return re && !ee._gsapAllow && ee.preventDefault(), ee.changedTouches ? ee.changedTouches[0] : ee
    },
    _getAbsoluteMax = function (ee) {
        var re = Math.max.apply(Math, ee),
            ie = Math.min.apply(Math, ee);
        return Math.abs(re) >= Math.abs(ie) ? re : ie
    },
    _setScrollTrigger = function () {
        ScrollTrigger$1 = gsap$2.core.globals().ScrollTrigger, ScrollTrigger$1 && ScrollTrigger$1.core && _integrate()
    },
    _initCore$1 = function (ee) {
        return gsap$2 = ee || _getGSAP$1(), gsap$2 && typeof document < "u" && document.body && (_win$2 = window, _doc$2 = document, _docEl$1 = _doc$2.documentElement, _body$1 = _doc$2.body, _root$1 = [_win$2, _doc$2, _docEl$1, _body$1], gsap$2.utils.clamp, _context$2 = gsap$2.core.context || function () {}, _pointerType = "onpointerenter" in _body$1 ? "pointer" : "mouse", _isTouch = Observer.isTouch = _win$2.matchMedia && _win$2.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in _win$2 || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, _eventTypes = Observer.eventTypes = ("ontouchstart" in _docEl$1 ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in _docEl$1 ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function () {
            return _startup$1 = 0
        }, 500), _setScrollTrigger(), _coreInitted$2 = 1), _coreInitted$2
    };
_horizontal.op = _vertical;
_scrollers.cache = 0;
var Observer = function () {
    function te(re) {
        this.init(re)
    }
    var ee = te.prototype;
    return ee.init = function (ie) {
        _coreInitted$2 || _initCore$1(gsap$2) || console.warn("Please gsap.registerPlugin(Observer)"), ScrollTrigger$1 || _setScrollTrigger();
        var ne = ie.tolerance,
            se = ie.dragMinimum,
            ae = ie.type,
            oe = ie.target,
            le = ie.lineHeight,
            he = ie.debounce,
            fe = ie.preventDefault,
            _e = ie.onStop,
            ue = ie.onStopDelay,
            de = ie.ignore,
            me = ie.wheelSpeed,
            ce = ie.event,
            Ce = ie.onDragStart,
            pe = ie.onDragEnd,
            ve = ie.onDrag,
            ge = ie.onPress,
            ye = ie.onRelease,
            Ee = ie.onRight,
            Pe = ie.onLeft,
            xe = ie.onUp,
            we = ie.onDown,
            Fe = ie.onChangeX,
            Le = ie.onChangeY,
            Re = ie.onChange,
            Me = ie.onToggleX,
            $e = ie.onToggleY,
            Be = ie.onHover,
            Ie = ie.onHoverEnd,
            Se = ie.onMove,
            Ae = ie.ignoreCheck,
            be = ie.isNormalizer,
            De = ie.onGestureStart,
            Te = ie.onGestureEnd,
            ke = ie.onWheel,
            Ve = ie.onEnable,
            We = ie.onDisable,
            Ne = ie.onClick,
            He = ie.scrollSpeed,
            qe = ie.capture,
            Ue = ie.allowClicks,
            dt = ie.lockAxis,
            $t = ie.onLockAxis;
        this.target = oe = _getTarget(oe) || _docEl$1, this.vars = ie, de && (de = gsap$2.utils.toArray(de)), ne = ne || 1e-9, se = se || 0, me = me || 1, He = He || 1, ae = ae || "wheel,touch,pointer", he = he !== !1, le || (le = parseFloat(_win$2.getComputedStyle(_body$1).lineHeight) || 22);
        var gt, mt, Ke, Ze, Ge, xt, vt, Oe = this,
            Tt = 0,
            lt = 0,
            It = _getScrollFunc(oe, _horizontal),
            bt = _getScrollFunc(oe, _vertical),
            Vt = It(),
            yt = bt(),
            Ot = ~ae.indexOf("touch") && !~ae.indexOf("pointer") && _eventTypes[0] === "pointerdown",
            Bt = _isViewport$1(oe),
            ht = oe.ownerDocument || _doc$2,
            St = [0, 0, 0],
            wt = [0, 0, 0],
            Ht = 0,
            At = function () {
                return Ht = _getTime$1()
            },
            Wt = function (je, ze) {
                return (Oe.event = je) && de && ~de.indexOf(je.target) || ze && Ot && je.pointerType !== "touch" || Ae && Ae(je, ze)
            },
            or = function () {
                Oe._vx.reset(), Oe._vy.reset(), mt.pause(), _e && _e(Oe)
            },
            Qt = function () {
                var je = Oe.deltaX = _getAbsoluteMax(St),
                    ze = Oe.deltaY = _getAbsoluteMax(wt),
                    Ye = Math.abs(je) >= ne,
                    Xe = Math.abs(ze) >= ne;
                Re && (Ye || Xe) && Re(Oe, je, ze, St, wt), Ye && (Ee && Oe.deltaX > 0 && Ee(Oe), Pe && Oe.deltaX < 0 && Pe(Oe), Fe && Fe(Oe), Me && Oe.deltaX < 0 != Tt < 0 && Me(Oe), Tt = Oe.deltaX, St[0] = St[1] = St[2] = 0), Xe && (we && Oe.deltaY > 0 && we(Oe), xe && Oe.deltaY < 0 && xe(Oe), Le && Le(Oe), $e && Oe.deltaY < 0 != lt < 0 && $e(Oe), lt = Oe.deltaY, wt[0] = wt[1] = wt[2] = 0), (Ze || Ke) && (Se && Se(Oe), Ke && (ve(Oe), Ke = !1), Ze = !1), xt && !(xt = !1) && $t && $t(Oe), Ge && (ke(Oe), Ge = !1), gt = 0
            },
            nr = function (je, ze, Ye) {
                St[Ye] += je, wt[Ye] += ze, Oe._vx.update(je), Oe._vy.update(ze), he ? gt || (gt = requestAnimationFrame(Qt)) : Qt()
            },
            er = function (je, ze) {
                dt && !vt && (Oe.axis = vt = Math.abs(je) > Math.abs(ze) ? "x" : "y", xt = !0), vt !== "y" && (St[2] += je, Oe._vx.update(je, !0)), vt !== "x" && (wt[2] += ze, Oe._vy.update(ze, !0)), he ? gt || (gt = requestAnimationFrame(Qt)) : Qt()
            },
            tr = function (je) {
                if (!Wt(je, 1)) {
                    je = _getEvent(je, fe);
                    var ze = je.clientX,
                        Ye = je.clientY,
                        Xe = ze - Oe.x,
                        Je = Ye - Oe.y,
                        Lt = Oe.isDragging;
                    Oe.x = ze, Oe.y = Ye, (Lt || Math.abs(Oe.startX - ze) >= se || Math.abs(Oe.startY - Ye) >= se) && (ve && (Ke = !0), Lt || (Oe.isDragging = !0), er(Xe, Je), Lt || Ce && Ce(Oe))
                }
            },
            pt = Oe.onPress = function (at) {
                Wt(at, 1) || (Oe.axis = vt = null, mt.pause(), Oe.isPressed = !0, at = _getEvent(at), Tt = lt = 0, Oe.startX = Oe.x = at.clientX, Oe.startY = Oe.y = at.clientY, Oe._vx.reset(), Oe._vy.reset(), _addListener$1(be ? oe : ht, _eventTypes[1], tr, fe, !0), Oe.deltaX = Oe.deltaY = 0, ge && ge(Oe))
            },
            Ut = function (je) {
                if (!Wt(je, 1)) {
                    _removeListener$1(be ? oe : ht, _eventTypes[1], tr, !0);
                    var ze = !isNaN(Oe.y - Oe.startY),
                        Ye = Oe.isDragging && (Math.abs(Oe.x - Oe.startX) > 3 || Math.abs(Oe.y - Oe.startY) > 3),
                        Xe = _getEvent(je);
                    !Ye && ze && (Oe._vx.reset(), Oe._vy.reset(), fe && Ue && gsap$2.delayedCall(.08, function () {
                        if (_getTime$1() - Ht > 300 && !je.defaultPrevented) {
                            if (je.target.click) je.target.click();
                            else if (ht.createEvent) {
                                var Je = ht.createEvent("MouseEvents");
                                Je.initMouseEvent("click", !0, !0, _win$2, 1, Xe.screenX, Xe.screenY, Xe.clientX, Xe.clientY, !1, !1, !1, !1, 0, null), je.target.dispatchEvent(Je)
                            }
                        }
                    })), Oe.isDragging = Oe.isGesturing = Oe.isPressed = !1, _e && !be && mt.restart(!0), pe && Ye && pe(Oe), ye && ye(Oe, Ye)
                }
            },
            zt = function (je) {
                return je.touches && je.touches.length > 1 && (Oe.isGesturing = !0) && De(je, Oe.isDragging)
            },
            Nt = function () {
                return (Oe.isGesturing = !1) || Te(Oe)
            },
            qt = function (je) {
                if (!Wt(je)) {
                    var ze = It(),
                        Ye = bt();
                    nr((ze - Vt) * He, (Ye - yt) * He, 1), Vt = ze, yt = Ye, _e && mt.restart(!0)
                }
            },
            jt = function (je) {
                if (!Wt(je)) {
                    je = _getEvent(je, fe), ke && (Ge = !0);
                    var ze = (je.deltaMode === 1 ? le : je.deltaMode === 2 ? _win$2.innerHeight : 1) * me;
                    nr(je.deltaX * ze, je.deltaY * ze, 0), _e && !be && mt.restart(!0)
                }
            },
            rr = function (je) {
                if (!Wt(je)) {
                    var ze = je.clientX,
                        Ye = je.clientY,
                        Xe = ze - Oe.x,
                        Je = Ye - Oe.y;
                    Oe.x = ze, Oe.y = Ye, Ze = !0, (Xe || Je) && er(Xe, Je)
                }
            },
            sr = function (je) {
                Oe.event = je, Be(Oe)
            },
            Kt = function (je) {
                Oe.event = je, Ie(Oe)
            },
            lr = function (je) {
                return Wt(je) || _getEvent(je, fe) && Ne(Oe)
            };
        mt = Oe._dc = gsap$2.delayedCall(ue || .25, or).pause(), Oe.deltaX = Oe.deltaY = 0, Oe._vx = _getVelocityProp(0, 50, !0), Oe._vy = _getVelocityProp(0, 50, !0), Oe.scrollX = It, Oe.scrollY = bt, Oe.isDragging = Oe.isGesturing = Oe.isPressed = !1, _context$2(this), Oe.enable = function (at) {
            return Oe.isEnabled || (_addListener$1(Bt ? ht : oe, "scroll", _onScroll$1), ae.indexOf("scroll") >= 0 && _addListener$1(Bt ? ht : oe, "scroll", qt, fe, qe), ae.indexOf("wheel") >= 0 && _addListener$1(oe, "wheel", jt, fe, qe), (ae.indexOf("touch") >= 0 && _isTouch || ae.indexOf("pointer") >= 0) && (_addListener$1(oe, _eventTypes[0], pt, fe, qe), _addListener$1(ht, _eventTypes[2], Ut), _addListener$1(ht, _eventTypes[3], Ut), Ue && _addListener$1(oe, "click", At, !1, !0), Ne && _addListener$1(oe, "click", lr), De && _addListener$1(ht, "gesturestart", zt), Te && _addListener$1(ht, "gestureend", Nt), Be && _addListener$1(oe, _pointerType + "enter", sr), Ie && _addListener$1(oe, _pointerType + "leave", Kt), Se && _addListener$1(oe, _pointerType + "move", rr)), Oe.isEnabled = !0, at && at.type && pt(at), Ve && Ve(Oe)), Oe
        }, Oe.disable = function () {
            Oe.isEnabled && (_observers.filter(function (at) {
                return at !== Oe && _isViewport$1(at.target)
            }).length || _removeListener$1(Bt ? ht : oe, "scroll", _onScroll$1), Oe.isPressed && (Oe._vx.reset(), Oe._vy.reset(), _removeListener$1(be ? oe : ht, _eventTypes[1], tr, !0)), _removeListener$1(Bt ? ht : oe, "scroll", qt, qe), _removeListener$1(oe, "wheel", jt, qe), _removeListener$1(oe, _eventTypes[0], pt, qe), _removeListener$1(ht, _eventTypes[2], Ut), _removeListener$1(ht, _eventTypes[3], Ut), _removeListener$1(oe, "click", At, !0), _removeListener$1(oe, "click", lr), _removeListener$1(ht, "gesturestart", zt), _removeListener$1(ht, "gestureend", Nt), _removeListener$1(oe, _pointerType + "enter", sr), _removeListener$1(oe, _pointerType + "leave", Kt), _removeListener$1(oe, _pointerType + "move", rr), Oe.isEnabled = Oe.isPressed = Oe.isDragging = !1, We && We(Oe))
        }, Oe.kill = Oe.revert = function () {
            Oe.disable();
            var at = _observers.indexOf(Oe);
            at >= 0 && _observers.splice(at, 1), _normalizer$1 === Oe && (_normalizer$1 = 0)
        }, _observers.push(Oe), be && _isViewport$1(oe) && (_normalizer$1 = Oe), Oe.enable(ce)
    }, _createClass(te, [{
        key: "velocityX",
        get: function () {
            return this._vx.getVelocity()
        }
    }, {
        key: "velocityY",
        get: function () {
            return this._vy.getVelocity()
        }
    }]), te
}();
Observer.version = "3.11.4";
Observer.create = function (te) {
    return new Observer(te)
};
Observer.register = _initCore$1;
Observer.getAll = function () {
    return _observers.slice()
};
Observer.getById = function (te) {
    return _observers.filter(function (ee) {
        return ee.vars.id === te
    })[0]
};
_getGSAP$1() && gsap$2.registerPlugin(Observer);
/*!
 * ScrollTrigger 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var gsap$1, _coreInitted$1, _win$1, _doc$1, _docEl, _body, _root, _resizeDelay, _toArray$1, _clamp, _time2, _syncInterval, _refreshing, _pointerIsDown, _transformProp, _i, _prevWidth, _prevHeight, _autoRefresh, _sort, _suppressOverwrites, _ignoreResize, _normalizer, _ignoreMobileResize, _baseScreenHeight, _baseScreenWidth, _fixIOSBug, _context$1, _scrollRestoration, _limitCallbacks, _startup = 1,
    _getTime = Date.now,
    _time1 = _getTime(),
    _lastScrollTime = 0,
    _enabled = 0,
    _pointerDownHandler = function () {
        return _pointerIsDown = 1
    },
    _pointerUpHandler = function () {
        return _pointerIsDown = 0
    },
    _passThrough = function (ee) {
        return ee
    },
    _round = function (ee) {
        return Math.round(ee * 1e5) / 1e5 || 0
    },
    _windowExists = function () {
        return typeof window < "u"
    },
    _getGSAP = function () {
        return gsap$1 || _windowExists() && (gsap$1 = window.gsap) && gsap$1.registerPlugin && gsap$1
    },
    _isViewport = function (ee) {
        return !!~_root.indexOf(ee)
    },
    _getBoundsFunc = function (ee) {
        return _getProxyProp(ee, "getBoundingClientRect") || (_isViewport(ee) ? function () {
            return _winOffsets.width = _win$1.innerWidth, _winOffsets.height = _win$1.innerHeight, _winOffsets
        } : function () {
            return _getBounds(ee)
        })
    },
    _getSizeFunc = function (ee, re, ie) {
        var ne = ie.d,
            se = ie.d2,
            ae = ie.a;
        return (ae = _getProxyProp(ee, "getBoundingClientRect")) ? function () {
            return ae()[ne]
        } : function () {
            return (re ? _win$1["inner" + se] : ee["client" + se]) || 0
        }
    },
    _getOffsetsFunc = function (ee, re) {
        return !re || ~_proxies.indexOf(ee) ? _getBoundsFunc(ee) : function () {
            return _winOffsets
        }
    },
    _maxScroll = function (ee, re) {
        var ie = re.s,
            ne = re.d2,
            se = re.d,
            ae = re.a;
        return (ie = "scroll" + ne) && (ae = _getProxyProp(ee, ie)) ? ae() - _getBoundsFunc(ee)()[se] : _isViewport(ee) ? (_docEl[ie] || _body[ie]) - (_win$1["inner" + ne] || _docEl["client" + ne] || _body["client" + ne]) : ee[ie] - ee["offset" + ne]
    },
    _iterateAutoRefresh = function (ee, re) {
        for (var ie = 0; ie < _autoRefresh.length; ie += 3)(!re || ~re.indexOf(_autoRefresh[ie + 1])) && ee(_autoRefresh[ie], _autoRefresh[ie + 1], _autoRefresh[ie + 2])
    },
    _isString = function (ee) {
        return typeof ee == "string"
    },
    _isFunction = function (ee) {
        return typeof ee == "function"
    },
    _isNumber = function (ee) {
        return typeof ee == "number"
    },
    _isObject = function (ee) {
        return typeof ee == "object"
    },
    _endAnimation = function (ee, re, ie) {
        return ee && ee.progress(re ? 0 : 1) && ie && ee.pause()
    },
    _callback = function (ee, re) {
        if (ee.enabled) {
            var ie = re(ee);
            ie && ie.totalTime && (ee.callbackAnimation = ie)
        }
    },
    _abs = Math.abs,
    _left = "left",
    _top = "top",
    _right = "right",
    _bottom = "bottom",
    _width = "width",
    _height = "height",
    _Right = "Right",
    _Left = "Left",
    _Top = "Top",
    _Bottom = "Bottom",
    _padding = "padding",
    _margin = "margin",
    _Width = "Width",
    _Height = "Height",
    _px = "px",
    _getComputedStyle$1 = function (ee) {
        return _win$1.getComputedStyle(ee)
    },
    _makePositionable = function (ee) {
        var re = _getComputedStyle$1(ee).position;
        ee.style.position = re === "absolute" || re === "fixed" ? re : "relative"
    },
    _setDefaults = function (ee, re) {
        for (var ie in re) ie in ee || (ee[ie] = re[ie]);
        return ee
    },
    _getBounds = function (ee, re) {
        var ie = re && _getComputedStyle$1(ee)[_transformProp] !== "matrix(1, 0, 0, 1, 0, 0)" && gsap$1.to(ee, {
                x: 0,
                y: 0,
                xPercent: 0,
                yPercent: 0,
                rotation: 0,
                rotationX: 0,
                rotationY: 0,
                scale: 1,
                skewX: 0,
                skewY: 0
            }).progress(1),
            ne = ee.getBoundingClientRect();
        return ie && ie.progress(0).kill(), ne
    },
    _getSize = function (ee, re) {
        var ie = re.d2;
        return ee["offset" + ie] || ee["client" + ie] || 0
    },
    _getLabelRatioArray = function (ee) {
        var re = [],
            ie = ee.labels,
            ne = ee.duration(),
            se;
        for (se in ie) re.push(ie[se] / ne);
        return re
    },
    _getClosestLabel = function (ee) {
        return function (re) {
            return gsap$1.utils.snap(_getLabelRatioArray(ee), re)
        }
    },
    _snapDirectional = function (ee) {
        var re = gsap$1.utils.snap(ee),
            ie = Array.isArray(ee) && ee.slice(0).sort(function (ne, se) {
                return ne - se
            });
        return ie ? function (ne, se, ae) {
            ae === void 0 && (ae = .001);
            var oe;
            if (!se) return re(ne);
            if (se > 0) {
                for (ne -= ae, oe = 0; oe < ie.length; oe++)
                    if (ie[oe] >= ne) return ie[oe];
                return ie[oe - 1]
            } else
                for (oe = ie.length, ne += ae; oe--;)
                    if (ie[oe] <= ne) return ie[oe];
            return ie[0]
        } : function (ne, se, ae) {
            ae === void 0 && (ae = .001);
            var oe = re(ne);
            return !se || Math.abs(oe - ne) < ae || oe - ne < 0 == se < 0 ? oe : re(se < 0 ? ne - ee : ne + ee)
        }
    },
    _getLabelAtDirection = function (ee) {
        return function (re, ie) {
            return _snapDirectional(_getLabelRatioArray(ee))(re, ie.direction)
        }
    },
    _multiListener = function (ee, re, ie, ne) {
        return ie.split(",").forEach(function (se) {
            return ee(re, se, ne)
        })
    },
    _addListener = function (ee, re, ie, ne, se) {
        return ee.addEventListener(re, ie, {
            passive: !ne,
            capture: !!se
        })
    },
    _removeListener = function (ee, re, ie, ne) {
        return ee.removeEventListener(re, ie, !!ne)
    },
    _wheelListener = function (ee, re, ie) {
        return ie && ie.wheelHandler && ee(re, "wheel", ie)
    },
    _markerDefaults = {
        startColor: "green",
        endColor: "red",
        indent: 0,
        fontSize: "16px",
        fontWeight: "normal"
    },
    _defaults = {
        toggleActions: "play",
        anticipatePin: 0
    },
    _keywords = {
        top: 0,
        left: 0,
        center: .5,
        bottom: 1,
        right: 1
    },
    _offsetToPx = function (ee, re) {
        if (_isString(ee)) {
            var ie = ee.indexOf("="),
                ne = ~ie ? +(ee.charAt(ie - 1) + 1) * parseFloat(ee.substr(ie + 1)) : 0;
            ~ie && (ee.indexOf("%") > ie && (ne *= re / 100), ee = ee.substr(0, ie - 1)), ee = ne + (ee in _keywords ? _keywords[ee] * re : ~ee.indexOf("%") ? parseFloat(ee) * re / 100 : parseFloat(ee) || 0)
        }
        return ee
    },
    _createMarker = function (ee, re, ie, ne, se, ae, oe, le) {
        var he = se.startColor,
            fe = se.endColor,
            _e = se.fontSize,
            ue = se.indent,
            de = se.fontWeight,
            me = _doc$1.createElement("div"),
            ce = _isViewport(ie) || _getProxyProp(ie, "pinType") === "fixed",
            Ce = ee.indexOf("scroller") !== -1,
            pe = ce ? _body : ie,
            ve = ee.indexOf("start") !== -1,
            ge = ve ? he : fe,
            ye = "border-color:" + ge + ";font-size:" + _e + ";color:" + ge + ";font-weight:" + de + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return ye += "position:" + ((Ce || le) && ce ? "fixed;" : "absolute;"), (Ce || le || !ce) && (ye += (ne === _vertical ? _right : _bottom) + ":" + (ae + parseFloat(ue)) + "px;"), oe && (ye += "box-sizing:border-box;text-align:left;width:" + oe.offsetWidth + "px;"), me._isStart = ve, me.setAttribute("class", "gsap-marker-" + ee + (re ? " marker-" + re : "")), me.style.cssText = ye, me.innerText = re || re === 0 ? ee + "-" + re : ee, pe.children[0] ? pe.insertBefore(me, pe.children[0]) : pe.appendChild(me), me._offset = me["offset" + ne.op.d2], _positionMarker(me, 0, ne, ve), me
    },
    _positionMarker = function (ee, re, ie, ne) {
        var se = {
                display: "block"
            },
            ae = ie[ne ? "os2" : "p2"],
            oe = ie[ne ? "p2" : "os2"];
        ee._isFlipped = ne, se[ie.a + "Percent"] = ne ? -100 : 0, se[ie.a] = ne ? "1px" : 0, se["border" + ae + _Width] = 1, se["border" + oe + _Width] = 0, se[ie.p] = re + "px", gsap$1.set(ee, se)
    },
    _triggers = [],
    _ids = {},
    _rafID, _sync = function () {
        return _getTime() - _lastScrollTime > 34 && (_rafID || (_rafID = requestAnimationFrame(_updateAll)))
    },
    _onScroll = function () {
        (!_normalizer || !_normalizer.isPressed || _normalizer.startX > _body.clientWidth) && (_scrollers.cache++, _normalizer ? _rafID || (_rafID = requestAnimationFrame(_updateAll)) : _updateAll(), _lastScrollTime || _dispatch("scrollStart"), _lastScrollTime = _getTime())
    },
    _setBaseDimensions = function () {
        _baseScreenWidth = _win$1.innerWidth, _baseScreenHeight = _win$1.innerHeight
    },
    _onResize = function () {
        _scrollers.cache++, !_refreshing && !_ignoreResize && !_doc$1.fullscreenElement && !_doc$1.webkitFullscreenElement && (!_ignoreMobileResize || _baseScreenWidth !== _win$1.innerWidth || Math.abs(_win$1.innerHeight - _baseScreenHeight) > _win$1.innerHeight * .25) && _resizeDelay.restart(!0)
    },
    _listeners = {},
    _emptyArray = [],
    _softRefresh = function te() {
        return _removeListener(ScrollTrigger, "scrollEnd", te) || _refreshAll(!0)
    },
    _dispatch = function (ee) {
        return _listeners[ee] && _listeners[ee].map(function (re) {
            return re()
        }) || _emptyArray
    },
    _savedStyles = [],
    _revertRecorded = function (ee) {
        for (var re = 0; re < _savedStyles.length; re += 5)(!ee || _savedStyles[re + 4] && _savedStyles[re + 4].query === ee) && (_savedStyles[re].style.cssText = _savedStyles[re + 1], _savedStyles[re].getBBox && _savedStyles[re].setAttribute("transform", _savedStyles[re + 2] || ""), _savedStyles[re + 3].uncache = 1)
    },
    _revertAll = function (ee, re) {
        var ie;
        for (_i = 0; _i < _triggers.length; _i++) ie = _triggers[_i], ie && (!re || ie._ctx === re) && (ee ? ie.kill(1) : ie.revert(!0, !0));
        re && _revertRecorded(re), re || _dispatch("revert")
    },
    _clearScrollMemory = function (ee, re) {
        _scrollers.cache++, (re || !_refreshingAll) && _scrollers.forEach(function (ie) {
            return _isFunction(ie) && ie.cacheID++ && (ie.rec = 0)
        }), _isString(ee) && (_win$1.history.scrollRestoration = _scrollRestoration = ee)
    },
    _refreshingAll, _refreshID = 0,
    _queueRefreshID, _queueRefreshAll = function () {
        if (_queueRefreshID !== _refreshID) {
            var ee = _queueRefreshID = _refreshID;
            requestAnimationFrame(function () {
                return ee === _refreshID && _refreshAll(!0)
            })
        }
    },
    _refreshAll = function (ee, re) {
        if (_lastScrollTime && !ee) {
            _addListener(ScrollTrigger, "scrollEnd", _softRefresh);
            return
        }
        _refreshingAll = ScrollTrigger.isRefreshing = !0, _scrollers.forEach(function (ne) {
            return _isFunction(ne) && ne.cacheID++ && (ne.rec = ne())
        });
        var ie = _dispatch("refreshInit");
        _sort && ScrollTrigger.sort(), re || _revertAll(), _scrollers.forEach(function (ne) {
            _isFunction(ne) && (ne.smooth && (ne.target.style.scrollBehavior = "auto"), ne(0))
        }), _triggers.slice(0).forEach(function (ne) {
            return ne.refresh()
        }), _triggers.forEach(function (ne, se) {
            if (ne._subPinOffset && ne.pin) {
                var ae = ne.vars.horizontal ? "offsetWidth" : "offsetHeight",
                    oe = ne.pin[ae];
                ne.revert(!0, 1), ne.adjustPinSpacing(ne.pin[ae] - oe), ne.revert(!1, 1)
            }
        }), _triggers.forEach(function (ne) {
            return ne.vars.end === "max" && ne.setPositions(ne.start, Math.max(ne.start + 1, _maxScroll(ne.scroller, ne._dir)))
        }), ie.forEach(function (ne) {
            return ne && ne.render && ne.render(-1)
        }), _scrollers.forEach(function (ne) {
            _isFunction(ne) && (ne.smooth && requestAnimationFrame(function () {
                return ne.target.style.scrollBehavior = "smooth"
            }), ne.rec && ne(ne.rec))
        }), _clearScrollMemory(_scrollRestoration, 1), _resizeDelay.pause(), _refreshID++, _updateAll(2), _triggers.forEach(function (ne) {
            return _isFunction(ne.vars.onRefresh) && ne.vars.onRefresh(ne)
        }), _refreshingAll = ScrollTrigger.isRefreshing = !1, _dispatch("refresh")
    },
    _lastScroll = 0,
    _direction = 1,
    _primary, _updateAll = function (ee) {
        if (!_refreshingAll || ee === 2) {
            ScrollTrigger.isUpdating = !0, _primary && _primary.update(0);
            var re = _triggers.length,
                ie = _getTime(),
                ne = ie - _time1 >= 50,
                se = re && _triggers[0].scroll();
            if (_direction = _lastScroll > se ? -1 : 1, _lastScroll = se, ne && (_lastScrollTime && !_pointerIsDown && ie - _lastScrollTime > 200 && (_lastScrollTime = 0, _dispatch("scrollEnd")), _time2 = _time1, _time1 = ie), _direction < 0) {
                for (_i = re; _i-- > 0;) _triggers[_i] && _triggers[_i].update(0, ne);
                _direction = 1
            } else
                for (_i = 0; _i < re; _i++) _triggers[_i] && _triggers[_i].update(0, ne);
            ScrollTrigger.isUpdating = !1
        }
        _rafID = 0
    },
    _propNamesToCopy = [_left, _top, _bottom, _right, _margin + _Bottom, _margin + _Right, _margin + _Top, _margin + _Left, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
    _stateProps = _propNamesToCopy.concat([_width, _height, "boxSizing", "max" + _Width, "max" + _Height, "position", _margin, _padding, _padding + _Top, _padding + _Right, _padding + _Bottom, _padding + _Left]),
    _swapPinOut = function (ee, re, ie) {
        _setState(ie);
        var ne = ee._gsap;
        if (ne.spacerIsNative) _setState(ne.spacerState);
        else if (ee._gsap.swappedIn) {
            var se = re.parentNode;
            se && (se.insertBefore(ee, re), se.removeChild(re))
        }
        ee._gsap.swappedIn = !1
    },
    _swapPinIn = function (ee, re, ie, ne) {
        if (!ee._gsap.swappedIn) {
            for (var se = _propNamesToCopy.length, ae = re.style, oe = ee.style, le; se--;) le = _propNamesToCopy[se], ae[le] = ie[le];
            ae.position = ie.position === "absolute" ? "absolute" : "relative", ie.display === "inline" && (ae.display = "inline-block"), oe[_bottom] = oe[_right] = "auto", ae.flexBasis = ie.flexBasis || "auto", ae.overflow = "visible", ae.boxSizing = "border-box", ae[_width] = _getSize(ee, _horizontal) + _px, ae[_height] = _getSize(ee, _vertical) + _px, ae[_padding] = oe[_margin] = oe[_top] = oe[_left] = "0", _setState(ne), oe[_width] = oe["max" + _Width] = ie[_width], oe[_height] = oe["max" + _Height] = ie[_height], oe[_padding] = ie[_padding], ee.parentNode !== re && (ee.parentNode.insertBefore(re, ee), re.appendChild(ee)), ee._gsap.swappedIn = !0
        }
    },
    _capsExp = /([A-Z])/g,
    _setState = function (ee) {
        if (ee) {
            var re = ee.t.style,
                ie = ee.length,
                ne = 0,
                se, ae;
            for ((ee.t._gsap || gsap$1.core.getCache(ee.t)).uncache = 1; ne < ie; ne += 2) ae = ee[ne + 1], se = ee[ne], ae ? re[se] = ae : re[se] && re.removeProperty(se.replace(_capsExp, "-$1").toLowerCase())
        }
    },
    _getState = function (ee) {
        for (var re = _stateProps.length, ie = ee.style, ne = [], se = 0; se < re; se++) ne.push(_stateProps[se], ie[_stateProps[se]]);
        return ne.t = ee, ne
    },
    _copyState = function (ee, re, ie) {
        for (var ne = [], se = ee.length, ae = ie ? 8 : 0, oe; ae < se; ae += 2) oe = ee[ae], ne.push(oe, oe in re ? re[oe] : ee[ae + 1]);
        return ne.t = ee.t, ne
    },
    _winOffsets = {
        left: 0,
        top: 0
    },
    _parsePosition = function (ee, re, ie, ne, se, ae, oe, le, he, fe, _e, ue, de) {
        _isFunction(ee) && (ee = ee(le)), _isString(ee) && ee.substr(0, 3) === "max" && (ee = ue + (ee.charAt(4) === "=" ? _offsetToPx("0" + ee.substr(3), ie) : 0));
        var me = de ? de.time() : 0,
            ce, Ce, pe;
        if (de && de.seek(0), _isNumber(ee)) oe && _positionMarker(oe, ie, ne, !0);
        else {
            _isFunction(re) && (re = re(le));
            var ve = (ee || "0").split(" "),
                ge, ye, Ee, Pe;
            pe = _getTarget(re) || _body, ge = _getBounds(pe) || {}, (!ge || !ge.left && !ge.top) && _getComputedStyle$1(pe).display === "none" && (Pe = pe.style.display, pe.style.display = "block", ge = _getBounds(pe), Pe ? pe.style.display = Pe : pe.style.removeProperty("display")), ye = _offsetToPx(ve[0], ge[ne.d]), Ee = _offsetToPx(ve[1] || "0", ie), ee = ge[ne.p] - he[ne.p] - fe + ye + se - Ee, oe && _positionMarker(oe, Ee, ne, ie - Ee < 20 || oe._isStart && Ee > 20), ie -= ie - Ee
        }
        if (ae) {
            var xe = ee + ie,
                we = ae._isStart;
            ce = "scroll" + ne.d2, _positionMarker(ae, xe, ne, we && xe > 20 || !we && (_e ? Math.max(_body[ce], _docEl[ce]) : ae.parentNode[ce]) <= xe + 1), _e && (he = _getBounds(oe), _e && (ae.style[ne.op.p] = he[ne.op.p] - ne.op.m - ae._offset + _px))
        }
        return de && pe && (ce = _getBounds(pe), de.seek(ue), Ce = _getBounds(pe), de._caScrollDist = ce[ne.p] - Ce[ne.p], ee = ee / de._caScrollDist * ue), de && de.seek(me), de ? ee : Math.round(ee)
    },
    _prefixExp = /(webkit|moz|length|cssText|inset)/i,
    _reparent = function (ee, re, ie, ne) {
        if (ee.parentNode !== re) {
            var se = ee.style,
                ae, oe;
            if (re === _body) {
                ee._stOrig = se.cssText, oe = _getComputedStyle$1(ee);
                for (ae in oe) !+ae && !_prefixExp.test(ae) && oe[ae] && typeof se[ae] == "string" && ae !== "0" && (se[ae] = oe[ae]);
                se.top = ie, se.left = ne
            } else se.cssText = ee._stOrig;
            gsap$1.core.getCache(ee).uncache = 1, re.appendChild(ee)
        }
    },
    _getTweenCreator = function (ee, re) {
        var ie = _getScrollFunc(ee, re),
            ne = "_scroll" + re.p2,
            se, ae, oe = function le(he, fe, _e, ue, de) {
                var me = le.tween,
                    ce = fe.onComplete,
                    Ce = {};
                return _e = _e || ie(), de = ue && de || 0, ue = ue || he - _e, me && me.kill(), se = Math.round(_e), fe[ne] = he, fe.modifiers = Ce, Ce[ne] = function (pe) {
                    return pe = Math.round(ie()), pe !== se && pe !== ae && Math.abs(pe - se) > 3 && Math.abs(pe - ae) > 3 ? (me.kill(), le.tween = 0) : pe = _e + ue * me.ratio + de * me.ratio * me.ratio, ae = se, se = Math.round(pe)
                }, fe.onUpdate = function () {
                    _scrollers.cache++, _updateAll()
                }, fe.onComplete = function () {
                    le.tween = 0, ce && ce.call(me)
                }, me = le.tween = gsap$1.to(ee, fe), me
            };
        return ee[ne] = ie, ie.wheelHandler = function () {
            return oe.tween && oe.tween.kill() && (oe.tween = 0)
        }, _addListener(ee, "wheel", ie.wheelHandler), oe
    },
    ScrollTrigger = function () {
        function te(re, ie) {
            _coreInitted$1 || te.register(gsap$1) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(re, ie)
        }
        var ee = te.prototype;
        return ee.init = function (ie, ne) {
            if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !_enabled) {
                this.update = this.refresh = this.kill = _passThrough;
                return
            }
            ie = _setDefaults(_isString(ie) || _isNumber(ie) || ie.nodeType ? {
                trigger: ie
            } : ie, _defaults);
            var se = ie,
                ae = se.onUpdate,
                oe = se.toggleClass,
                le = se.id,
                he = se.onToggle,
                fe = se.onRefresh,
                _e = se.scrub,
                ue = se.trigger,
                de = se.pin,
                me = se.pinSpacing,
                ce = se.invalidateOnRefresh,
                Ce = se.anticipatePin,
                pe = se.onScrubComplete,
                ve = se.onSnapComplete,
                ge = se.once,
                ye = se.snap,
                Ee = se.pinReparent,
                Pe = se.pinSpacer,
                xe = se.containerAnimation,
                we = se.fastScrollEnd,
                Fe = se.preventOverlaps,
                Le = ie.horizontal || ie.containerAnimation && ie.horizontal !== !1 ? _horizontal : _vertical,
                Re = !_e && _e !== 0,
                Me = _getTarget(ie.scroller || _win$1),
                $e = gsap$1.core.getCache(Me),
                Be = _isViewport(Me),
                Ie = ("pinType" in ie ? ie.pinType : _getProxyProp(Me, "pinType") || Be && "fixed") === "fixed",
                Se = [ie.onEnter, ie.onLeave, ie.onEnterBack, ie.onLeaveBack],
                Ae = Re && ie.toggleActions.split(" "),
                be = "markers" in ie ? ie.markers : _defaults.markers,
                De = Be ? 0 : parseFloat(_getComputedStyle$1(Me)["border" + Le.p2 + _Width]) || 0,
                Te = this,
                ke = ie.onRefreshInit && function () {
                    return ie.onRefreshInit(Te)
                },
                Ve = _getSizeFunc(Me, Be, Le),
                We = _getOffsetsFunc(Me, Be),
                Ne = 0,
                He = 0,
                qe = _getScrollFunc(Me, Le),
                Ue, dt, $t, gt, mt, Ke, Ze, Ge, xt, vt, Oe, Tt, lt, It, bt, Vt, yt, Ot, Bt, ht, St, wt, Ht, At, Wt, or, Qt, nr, er, tr, pt, Ut, zt, Nt, qt, jt, rr, sr, Kt;
            if (_context$1(Te), Te._dir = Le, Ce *= 45, Te.scroller = Me, Te.scroll = xe ? xe.time.bind(xe) : qe, gt = qe(), Te.vars = ie, ne = ne || ie.animation, "refreshPriority" in ie && (_sort = 1, ie.refreshPriority === -9999 && (_primary = Te)), $e.tweenScroll = $e.tweenScroll || {
                    top: _getTweenCreator(Me, _vertical),
                    left: _getTweenCreator(Me, _horizontal)
                }, Te.tweenTo = Ue = $e.tweenScroll[Le.p], Te.scrubDuration = function (ze) {
                    Ut = _isNumber(ze) && ze, Ut ? pt ? pt.duration(ze) : pt = gsap$1.to(ne, {
                        ease: "expo",
                        totalProgress: "+=0.001",
                        duration: Ut,
                        paused: !0,
                        onComplete: function () {
                            return pe && pe(Te)
                        }
                    }) : (pt && pt.progress(1).kill(), pt = 0)
                }, ne && (ne.vars.lazy = !1, ne._initted || ne.vars.immediateRender !== !1 && ie.immediateRender !== !1 && ne.duration() && ne.render(0, !0, !0), Te.animation = ne.pause(), ne.scrollTrigger = Te, Te.scrubDuration(_e), er = 0, le || (le = ne.vars.id)), _triggers.push(Te), ye && ((!_isObject(ye) || ye.push) && (ye = {
                    snapTo: ye
                }), "scrollBehavior" in _body.style && gsap$1.set(Be ? [_body, _docEl] : Me, {
                    scrollBehavior: "auto"
                }), _scrollers.forEach(function (ze) {
                    return _isFunction(ze) && ze.target === (Be ? _doc$1.scrollingElement || _docEl : Me) && (ze.smooth = !1)
                }), $t = _isFunction(ye.snapTo) ? ye.snapTo : ye.snapTo === "labels" ? _getClosestLabel(ne) : ye.snapTo === "labelsDirectional" ? _getLabelAtDirection(ne) : ye.directional !== !1 ? function (ze, Ye) {
                    return _snapDirectional(ye.snapTo)(ze, _getTime() - He < 500 ? 0 : Ye.direction)
                } : gsap$1.utils.snap(ye.snapTo), zt = ye.duration || {
                    min: .1,
                    max: 2
                }, zt = _isObject(zt) ? _clamp(zt.min, zt.max) : _clamp(zt, zt), Nt = gsap$1.delayedCall(ye.delay || Ut / 2 || .1, function () {
                    var ze = qe(),
                        Ye = _getTime() - He < 500,
                        Xe = Ue.tween;
                    if ((Ye || Math.abs(Te.getVelocity()) < 10) && !Xe && !_pointerIsDown && Ne !== ze) {
                        var Je = (ze - Ke) / lt,
                            Lt = ne && !Re ? ne.totalProgress() : Je,
                            Qe = Ye ? 0 : (Lt - tr) / (_getTime() - _time2) * 1e3 || 0,
                            Ft = gsap$1.utils.clamp(-Je, 1 - Je, _abs(Qe / 2) * Qe / .185),
                            Ct = Je + (ye.inertia === !1 ? 0 : Ft),
                            Yt = _clamp(0, 1, $t(Ct, Te)),
                            _t = Math.round(Ke + Yt * lt),
                            Rt = ye,
                            Gt = Rt.onStart,
                            Dt = Rt.onInterrupt,
                            Et = Rt.onComplete;
                        if (ze <= Ze && ze >= Ke && _t !== ze) {
                            if (Xe && !Xe._initted && Xe.data <= _abs(_t - ze)) return;
                            ye.inertia === !1 && (Ft = Yt - Je), Ue(_t, {
                                duration: zt(_abs(Math.max(_abs(Ct - Lt), _abs(Yt - Lt)) * .185 / Qe / .05 || 0)),
                                ease: ye.ease || "power3",
                                data: _abs(_t - ze),
                                onInterrupt: function () {
                                    return Nt.restart(!0) && Dt && Dt(Te)
                                },
                                onComplete: function () {
                                    Te.update(), Ne = qe(), er = tr = ne && !Re ? ne.totalProgress() : Te.progress, ve && ve(Te), Et && Et(Te)
                                }
                            }, ze, Ft * lt, _t - ze - Ft * lt), Gt && Gt(Te, Ue.tween)
                        }
                    } else Te.isActive && Ne !== ze && Nt.restart(!0)
                }).pause()), le && (_ids[le] = Te), ue = Te.trigger = _getTarget(ue || de), Kt = ue && ue._gsap && ue._gsap.stRevert, Kt && (Kt = Kt(Te)), de = de === !0 ? ue : _getTarget(de), _isString(oe) && (oe = {
                    targets: ue,
                    className: oe
                }), de && (me === !1 || me === _margin || (me = !me && de.parentNode && de.parentNode.style && _getComputedStyle$1(de.parentNode).display === "flex" ? !1 : _padding), Te.pin = de, dt = gsap$1.core.getCache(de), dt.spacer ? It = dt.pinState : (Pe && (Pe = _getTarget(Pe), Pe && !Pe.nodeType && (Pe = Pe.current || Pe.nativeElement), dt.spacerIsNative = !!Pe, Pe && (dt.spacerState = _getState(Pe))), dt.spacer = yt = Pe || _doc$1.createElement("div"), yt.classList.add("pin-spacer"), le && yt.classList.add("pin-spacer-" + le), dt.pinState = It = _getState(de)), ie.force3D !== !1 && gsap$1.set(de, {
                    force3D: !0
                }), Te.spacer = yt = dt.spacer, nr = _getComputedStyle$1(de), Ht = nr[me + Le.os2], Bt = gsap$1.getProperty(de), ht = gsap$1.quickSetter(de, Le.a, _px), _swapPinIn(de, yt, nr), Vt = _getState(de)), be) {
                Tt = _isObject(be) ? _setDefaults(be, _markerDefaults) : _markerDefaults, vt = _createMarker("scroller-start", le, Me, Le, Tt, 0), Oe = _createMarker("scroller-end", le, Me, Le, Tt, 0, vt), Ot = vt["offset" + Le.op.d2];
                var lr = _getTarget(_getProxyProp(Me, "content") || Me);
                Ge = this.markerStart = _createMarker("start", le, lr, Le, Tt, Ot, 0, xe), xt = this.markerEnd = _createMarker("end", le, lr, Le, Tt, Ot, 0, xe), xe && (sr = gsap$1.quickSetter([Ge, xt], Le.a, _px)), !Ie && !(_proxies.length && _getProxyProp(Me, "fixedMarkers") === !0) && (_makePositionable(Be ? _body : Me), gsap$1.set([vt, Oe], {
                    force3D: !0
                }), Wt = gsap$1.quickSetter(vt, Le.a, _px), Qt = gsap$1.quickSetter(Oe, Le.a, _px))
            }
            if (xe) {
                var at = xe.vars.onUpdate,
                    je = xe.vars.onUpdateParams;
                xe.eventCallback("onUpdate", function () {
                    Te.update(0, 0, 1), at && at.apply(je || [])
                })
            }
            Te.previous = function () {
                return _triggers[_triggers.indexOf(Te) - 1]
            }, Te.next = function () {
                return _triggers[_triggers.indexOf(Te) + 1]
            }, Te.revert = function (ze, Ye) {
                if (!Ye) return Te.kill(!0);
                var Xe = ze !== !1 || !Te.enabled,
                    Je = _refreshing;
                Xe !== Te.isReverted && (Xe && (jt = Math.max(qe(), Te.scroll.rec || 0), qt = Te.progress, rr = ne && ne.progress()), Ge && [Ge, xt, vt, Oe].forEach(function (Lt) {
                    return Lt.style.display = Xe ? "none" : "block"
                }), Xe && (_refreshing = 1, Te.update(Xe)), de && (!Ee || !Te.isActive) && (Xe ? _swapPinOut(de, yt, It) : _swapPinIn(de, yt, _getComputedStyle$1(de), At)), Xe || Te.update(Xe), _refreshing = Je, Te.isReverted = Xe)
            }, Te.refresh = function (ze, Ye) {
                if (!((_refreshing || !Te.enabled) && !Ye)) {
                    if (de && ze && _lastScrollTime) {
                        _addListener(te, "scrollEnd", _softRefresh);
                        return
                    }!_refreshingAll && ke && ke(Te), _refreshing = 1, He = _getTime(), Ue.tween && (Ue.tween.kill(), Ue.tween = 0), pt && pt.pause(), ce && ne && ne.revert({
                        kill: !1
                    }).invalidate(), Te.isReverted || Te.revert(!0, !0), Te._subPinOffset = !1;
                    for (var Xe = Ve(), Je = We(), Lt = xe ? xe.duration() : _maxScroll(Me, Le), Qe = 0, Ft = 0, Ct = ie.end, Yt = ie.endTrigger || ue, _t = ie.start || (ie.start === 0 || !ue ? 0 : de ? "0 0" : "0 100%"), Rt = Te.pinnedContainer = ie.pinnedContainer && _getTarget(ie.pinnedContainer), Gt = ue && Math.max(0, _triggers.indexOf(Te)) || 0, Dt = Gt, Et, kt, ar, ir, Mt, Pt, Zt, ur, cr, hr, Xt; Dt--;) Pt = _triggers[Dt], Pt.end || Pt.refresh(0, 1) || (_refreshing = 1), Zt = Pt.pin, Zt && (Zt === ue || Zt === de) && !Pt.isReverted && (hr || (hr = []), hr.unshift(Pt), Pt.revert(!0, !0)), Pt !== _triggers[Dt] && (Gt--, Dt--);
                    for (_isFunction(_t) && (_t = _t(Te)), Ke = _parsePosition(_t, ue, Xe, Le, qe(), Ge, vt, Te, Je, De, Ie, Lt, xe) || (de ? -.001 : 0), _isFunction(Ct) && (Ct = Ct(Te)), _isString(Ct) && !Ct.indexOf("+=") && (~Ct.indexOf(" ") ? Ct = (_isString(_t) ? _t.split(" ")[0] : "") + Ct : (Qe = _offsetToPx(Ct.substr(2), Xe), Ct = _isString(_t) ? _t : Ke + Qe, Yt = ue)), Ze = Math.max(Ke, _parsePosition(Ct || (Yt ? "100% 0" : Lt), Yt, Xe, Le, qe() + Qe, xt, Oe, Te, Je, De, Ie, Lt, xe)) || -.001, lt = Ze - Ke || (Ke -= .01) && .001, Qe = 0, Dt = Gt; Dt--;) Pt = _triggers[Dt], Zt = Pt.pin, Zt && Pt.start - Pt._pinPush <= Ke && !xe && Pt.end > 0 && (Et = Pt.end - Pt.start, (Zt === ue && Pt.start - Pt._pinPush < Ke || Zt === Rt) && !_isNumber(_t) && (Qe += Et * (1 - Pt.progress)), Zt === de && (Ft += Et));
                    if (Ke += Qe, Ze += Qe, Te._pinPush = Ft, Ge && Qe && (Et = {}, Et[Le.a] = "+=" + Qe, Rt && (Et[Le.p] = "-=" + qe()), gsap$1.set([Ge, xt], Et)), de) Et = _getComputedStyle$1(de), ir = Le === _vertical, ar = qe(), St = parseFloat(Bt(Le.a)) + Ft, !Lt && Ze > 1 && (Xt = (Be ? _doc$1.scrollingElement || _docEl : Me).style, Xt = {
                        style: Xt,
                        value: Xt["overflow" + Le.a.toUpperCase()]
                    }, Xt["overflow" + Le.a.toUpperCase()] = "scroll"), _swapPinIn(de, yt, Et), Vt = _getState(de), kt = _getBounds(de, !0), ur = Ie && _getScrollFunc(Me, ir ? _horizontal : _vertical)(), me && (At = [me + Le.os2, lt + Ft + _px], At.t = yt, Dt = me === _padding ? _getSize(de, Le) + lt + Ft : 0, Dt && At.push(Le.d, Dt + _px), _setState(At), Rt && _triggers.forEach(function (fr) {
                        fr.pin === Rt && fr.vars.pinSpacing !== !1 && (fr._subPinOffset = !0)
                    }), Ie && qe(jt)), Ie && (Mt = {
                        top: kt.top + (ir ? ar - Ke : ur) + _px,
                        left: kt.left + (ir ? ur : ar - Ke) + _px,
                        boxSizing: "border-box",
                        position: "fixed"
                    }, Mt[_width] = Mt["max" + _Width] = Math.ceil(kt.width) + _px, Mt[_height] = Mt["max" + _Height] = Math.ceil(kt.height) + _px, Mt[_margin] = Mt[_margin + _Top] = Mt[_margin + _Right] = Mt[_margin + _Bottom] = Mt[_margin + _Left] = "0", Mt[_padding] = Et[_padding], Mt[_padding + _Top] = Et[_padding + _Top], Mt[_padding + _Right] = Et[_padding + _Right], Mt[_padding + _Bottom] = Et[_padding + _Bottom], Mt[_padding + _Left] = Et[_padding + _Left], bt = _copyState(It, Mt, Ee), _refreshingAll && qe(0)), ne ? (cr = ne._initted, _suppressOverwrites(1), ne.render(ne.duration(), !0, !0), wt = Bt(Le.a) - St + lt + Ft, or = Math.abs(lt - wt) > 1, Ie && or && bt.splice(bt.length - 2, 2), ne.render(0, !0, !0), cr || ne.invalidate(!0), ne.parent || ne.totalTime(ne.totalTime()), _suppressOverwrites(0)) : wt = lt, Xt && (Xt.value ? Xt.style["overflow" + Le.a.toUpperCase()] = Xt.value : Xt.style.removeProperty("overflow-" + Le.a));
                    else if (ue && qe() && !xe)
                        for (kt = ue.parentNode; kt && kt !== _body;) kt._pinOffset && (Ke -= kt._pinOffset, Ze -= kt._pinOffset), kt = kt.parentNode;
                    hr && hr.forEach(function (fr) {
                        return fr.revert(!1, !0)
                    }), Te.start = Ke, Te.end = Ze, gt = mt = _refreshingAll ? jt : qe(), !xe && !_refreshingAll && (gt < jt && qe(jt), Te.scroll.rec = 0), Te.revert(!1, !0), Nt && (Ne = -1, Te.isActive && qe(Ke + lt * qt), Nt.restart(!0)), _refreshing = 0, ne && Re && (ne._initted || rr) && ne.progress() !== rr && ne.progress(rr, !0).render(ne.time(), !0, !0), (qt !== Te.progress || xe) && (ne && !Re && ne.totalProgress(qt, !0), Te.progress = (gt - Ke) / lt === qt ? 0 : qt), de && me && (yt._pinOffset = Math.round(Te.progress * wt)), fe && !_refreshingAll && fe(Te)
                }
            }, Te.getVelocity = function () {
                return (qe() - mt) / (_getTime() - _time2) * 1e3 || 0
            }, Te.endAnimation = function () {
                _endAnimation(Te.callbackAnimation), ne && (pt ? pt.progress(1) : ne.paused() ? Re || _endAnimation(ne, Te.direction < 0, 1) : _endAnimation(ne, ne.reversed()))
            }, Te.labelToScroll = function (ze) {
                return ne && ne.labels && (Ke || Te.refresh() || Ke) + ne.labels[ze] / ne.duration() * lt || 0
            }, Te.getTrailing = function (ze) {
                var Ye = _triggers.indexOf(Te),
                    Xe = Te.direction > 0 ? _triggers.slice(0, Ye).reverse() : _triggers.slice(Ye + 1);
                return (_isString(ze) ? Xe.filter(function (Je) {
                    return Je.vars.preventOverlaps === ze
                }) : Xe).filter(function (Je) {
                    return Te.direction > 0 ? Je.end <= Ke : Je.start >= Ze
                })
            }, Te.update = function (ze, Ye, Xe) {
                if (!(xe && !Xe && !ze)) {
                    var Je = _refreshingAll ? jt : Te.scroll(),
                        Lt = ze ? 0 : (Je - Ke) / lt,
                        Qe = Lt < 0 ? 0 : Lt > 1 ? 1 : Lt || 0,
                        Ft = Te.progress,
                        Ct, Yt, _t, Rt, Gt, Dt, Et, kt;
                    if (Ye && (mt = gt, gt = xe ? qe() : Je, ye && (tr = er, er = ne && !Re ? ne.totalProgress() : Qe)), Ce && !Qe && de && !_refreshing && !_startup && _lastScrollTime && Ke < Je + (Je - mt) / (_getTime() - _time2) * Ce && (Qe = 1e-4), Qe !== Ft && Te.enabled) {
                        if (Ct = Te.isActive = !!Qe && Qe < 1, Yt = !!Ft && Ft < 1, Dt = Ct !== Yt, Gt = Dt || !!Qe != !!Ft, Te.direction = Qe > Ft ? 1 : -1, Te.progress = Qe, Gt && !_refreshing && (_t = Qe && !Ft ? 0 : Qe === 1 ? 1 : Ft === 1 ? 2 : 3, Re && (Rt = !Dt && Ae[_t + 1] !== "none" && Ae[_t + 1] || Ae[_t], kt = ne && (Rt === "complete" || Rt === "reset" || Rt in ne))), Fe && (Dt || kt) && (kt || _e || !ne) && (_isFunction(Fe) ? Fe(Te) : Te.getTrailing(Fe).forEach(function (Pt) {
                                return Pt.endAnimation()
                            })), Re || (pt && !_refreshing && !_startup ? (pt._dp._time - pt._start !== pt._time && pt.render(pt._dp._time - pt._start), pt.resetTo ? pt.resetTo("totalProgress", Qe, ne._tTime / ne._tDur) : (pt.vars.totalProgress = Qe, pt.invalidate().restart())) : ne && ne.totalProgress(Qe, !!_refreshing)), de) {
                            if (ze && me && (yt.style[me + Le.os2] = Ht), !Ie) ht(_round(St + wt * Qe));
                            else if (Gt) {
                                if (Et = !ze && Qe > Ft && Ze + 1 > Je && Je + 1 >= _maxScroll(Me, Le), Ee)
                                    if (!ze && (Ct || Et)) {
                                        var ar = _getBounds(de, !0),
                                            ir = Je - Ke;
                                        _reparent(de, _body, ar.top + (Le === _vertical ? ir : 0) + _px, ar.left + (Le === _vertical ? 0 : ir) + _px)
                                    } else _reparent(de, yt);
                                _setState(Ct || Et ? bt : Vt), or && Qe < 1 && Ct || ht(St + (Qe === 1 && !Et ? wt : 0))
                            }
                        }
                        ye && !Ue.tween && !_refreshing && !_startup && Nt.restart(!0), oe && (Dt || ge && Qe && (Qe < 1 || !_limitCallbacks)) && _toArray$1(oe.targets).forEach(function (Pt) {
                            return Pt.classList[Ct || ge ? "add" : "remove"](oe.className)
                        }), ae && !Re && !ze && ae(Te), Gt && !_refreshing ? (Re && (kt && (Rt === "complete" ? ne.pause().totalProgress(1) : Rt === "reset" ? ne.restart(!0).pause() : Rt === "restart" ? ne.restart(!0) : ne[Rt]()), ae && ae(Te)), (Dt || !_limitCallbacks) && (he && Dt && _callback(Te, he), Se[_t] && _callback(Te, Se[_t]), ge && (Qe === 1 ? Te.kill(!1, 1) : Se[_t] = 0), Dt || (_t = Qe === 1 ? 1 : 3, Se[_t] && _callback(Te, Se[_t]))), we && !Ct && Math.abs(Te.getVelocity()) > (_isNumber(we) ? we : 2500) && (_endAnimation(Te.callbackAnimation), pt ? pt.progress(1) : _endAnimation(ne, Rt === "reverse" ? 1 : !Qe, 1))) : Re && ae && !_refreshing && ae(Te)
                    }
                    if (Qt) {
                        var Mt = xe ? Je / xe.duration() * (xe._caScrollDist || 0) : Je;
                        Wt(Mt + (vt._isFlipped ? 1 : 0)), Qt(Mt)
                    }
                    sr && sr(-Je / xe.duration() * (xe._caScrollDist || 0))
                }
            }, Te.enable = function (ze, Ye) {
                Te.enabled || (Te.enabled = !0, _addListener(Me, "resize", _onResize), _addListener(Be ? _doc$1 : Me, "scroll", _onScroll), ke && _addListener(te, "refreshInit", ke), ze !== !1 && (Te.progress = qt = 0, gt = mt = Ne = qe()), Ye !== !1 && Te.refresh())
            }, Te.getTween = function (ze) {
                return ze && Ue ? Ue.tween : pt
            }, Te.setPositions = function (ze, Ye) {
                de && (St += ze - Ke, wt += Ye - ze - lt, me === _padding && Te.adjustPinSpacing(Ye - ze - lt)), Te.start = Ke = ze, Te.end = Ze = Ye, lt = Ye - ze, Te.update()
            }, Te.adjustPinSpacing = function (ze) {
                if (At) {
                    var Ye = At.indexOf(Le.d) + 1;
                    At[Ye] = parseFloat(At[Ye]) + ze + _px, At[1] = parseFloat(At[1]) + ze + _px, _setState(At)
                }
            }, Te.disable = function (ze, Ye) {
                if (Te.enabled && (ze !== !1 && Te.revert(!0, !0), Te.enabled = Te.isActive = !1, Ye || pt && pt.pause(), jt = 0, dt && (dt.uncache = 1), ke && _removeListener(te, "refreshInit", ke), Nt && (Nt.pause(), Ue.tween && Ue.tween.kill() && (Ue.tween = 0)), !Be)) {
                    for (var Xe = _triggers.length; Xe--;)
                        if (_triggers[Xe].scroller === Me && _triggers[Xe] !== Te) return;
                    _removeListener(Me, "resize", _onResize), _removeListener(Me, "scroll", _onScroll)
                }
            }, Te.kill = function (ze, Ye) {
                Te.disable(ze, Ye), pt && !Ye && pt.kill(), le && delete _ids[le];
                var Xe = _triggers.indexOf(Te);
                Xe >= 0 && _triggers.splice(Xe, 1), Xe === _i && _direction > 0 && _i--, Xe = 0, _triggers.forEach(function (Je) {
                    return Je.scroller === Te.scroller && (Xe = 1)
                }), Xe || _refreshingAll || (Te.scroll.rec = 0), ne && (ne.scrollTrigger = null, ze && ne.revert({
                    kill: !1
                }), Ye || ne.kill()), Ge && [Ge, xt, vt, Oe].forEach(function (Je) {
                    return Je.parentNode && Je.parentNode.removeChild(Je)
                }), _primary === Te && (_primary = 0), de && (dt && (dt.uncache = 1), Xe = 0, _triggers.forEach(function (Je) {
                    return Je.pin === de && Xe++
                }), Xe || (dt.spacer = 0)), ie.onKill && ie.onKill(Te)
            }, Te.enable(!1, !1), Kt && Kt(Te), !ne || !ne.add || lt ? Te.refresh() : gsap$1.delayedCall(.01, function () {
                return Ke || Ze || Te.refresh()
            }) && (lt = .01) && (Ke = Ze = 0), de && _queueRefreshAll()
        }, te.register = function (ie) {
            return _coreInitted$1 || (gsap$1 = ie || _getGSAP(), _windowExists() && window.document && te.enable(), _coreInitted$1 = _enabled), _coreInitted$1
        }, te.defaults = function (ie) {
            if (ie)
                for (var ne in ie) _defaults[ne] = ie[ne];
            return _defaults
        }, te.disable = function (ie, ne) {
            _enabled = 0, _triggers.forEach(function (ae) {
                return ae[ne ? "kill" : "disable"](ie)
            }), _removeListener(_win$1, "wheel", _onScroll), _removeListener(_doc$1, "scroll", _onScroll), clearInterval(_syncInterval), _removeListener(_doc$1, "touchcancel", _passThrough), _removeListener(_body, "touchstart", _passThrough), _multiListener(_removeListener, _doc$1, "pointerdown,touchstart,mousedown", _pointerDownHandler), _multiListener(_removeListener, _doc$1, "pointerup,touchend,mouseup", _pointerUpHandler), _resizeDelay.kill(), _iterateAutoRefresh(_removeListener);
            for (var se = 0; se < _scrollers.length; se += 3) _wheelListener(_removeListener, _scrollers[se], _scrollers[se + 1]), _wheelListener(_removeListener, _scrollers[se], _scrollers[se + 2])
        }, te.enable = function () {
            if (_win$1 = window, _doc$1 = document, _docEl = _doc$1.documentElement, _body = _doc$1.body, gsap$1 && (_toArray$1 = gsap$1.utils.toArray, _clamp = gsap$1.utils.clamp, _context$1 = gsap$1.core.context || _passThrough, _suppressOverwrites = gsap$1.core.suppressOverwrites || _passThrough, _scrollRestoration = _win$1.history.scrollRestoration || "auto", gsap$1.core.globals("ScrollTrigger", te), _body)) {
                _enabled = 1, Observer.register(gsap$1), te.isTouch = Observer.isTouch, _fixIOSBug = Observer.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), _addListener(_win$1, "wheel", _onScroll), _root = [_win$1, _doc$1, _docEl, _body], gsap$1.matchMedia ? (te.matchMedia = function (le) {
                    var he = gsap$1.matchMedia(),
                        fe;
                    for (fe in le) he.add(fe, le[fe]);
                    return he
                }, gsap$1.addEventListener("matchMediaInit", function () {
                    return _revertAll()
                }), gsap$1.addEventListener("matchMediaRevert", function () {
                    return _revertRecorded()
                }), gsap$1.addEventListener("matchMedia", function () {
                    _refreshAll(0, 1), _dispatch("matchMedia")
                }), gsap$1.matchMedia("(orientation: portrait)", function () {
                    return _setBaseDimensions(), _setBaseDimensions
                })) : console.warn("Requires GSAP 3.11.0 or later"), _setBaseDimensions(), _addListener(_doc$1, "scroll", _onScroll);
                var ie = _body.style,
                    ne = ie.borderTopStyle,
                    se = gsap$1.core.Animation.prototype,
                    ae, oe;
                for (se.revert || Object.defineProperty(se, "revert", {
                        value: function () {
                            return this.time(-.01, !0)
                        }
                    }), ie.borderTopStyle = "solid", ae = _getBounds(_body), _vertical.m = Math.round(ae.top + _vertical.sc()) || 0, _horizontal.m = Math.round(ae.left + _horizontal.sc()) || 0, ne ? ie.borderTopStyle = ne : ie.removeProperty("border-top-style"), _syncInterval = setInterval(_sync, 250), gsap$1.delayedCall(.5, function () {
                        return _startup = 0
                    }), _addListener(_doc$1, "touchcancel", _passThrough), _addListener(_body, "touchstart", _passThrough), _multiListener(_addListener, _doc$1, "pointerdown,touchstart,mousedown", _pointerDownHandler), _multiListener(_addListener, _doc$1, "pointerup,touchend,mouseup", _pointerUpHandler), _transformProp = gsap$1.utils.checkPrefix("transform"), _stateProps.push(_transformProp), _coreInitted$1 = _getTime(), _resizeDelay = gsap$1.delayedCall(.2, _refreshAll).pause(), _autoRefresh = [_doc$1, "visibilitychange", function () {
                        var le = _win$1.innerWidth,
                            he = _win$1.innerHeight;
                        _doc$1.hidden ? (_prevWidth = le, _prevHeight = he) : (_prevWidth !== le || _prevHeight !== he) && _onResize()
                    }, _doc$1, "DOMContentLoaded", _refreshAll, _win$1, "load", _refreshAll, _win$1, "resize", _onResize], _iterateAutoRefresh(_addListener), _triggers.forEach(function (le) {
                        return le.enable(0, 1)
                    }), oe = 0; oe < _scrollers.length; oe += 3) _wheelListener(_removeListener, _scrollers[oe], _scrollers[oe + 1]), _wheelListener(_removeListener, _scrollers[oe], _scrollers[oe + 2])
            }
        }, te.config = function (ie) {
            "limitCallbacks" in ie && (_limitCallbacks = !!ie.limitCallbacks);
            var ne = ie.syncInterval;
            ne && clearInterval(_syncInterval) || (_syncInterval = ne) && setInterval(_sync, ne), "ignoreMobileResize" in ie && (_ignoreMobileResize = te.isTouch === 1 && ie.ignoreMobileResize), "autoRefreshEvents" in ie && (_iterateAutoRefresh(_removeListener) || _iterateAutoRefresh(_addListener, ie.autoRefreshEvents || "none"), _ignoreResize = (ie.autoRefreshEvents + "").indexOf("resize") === -1)
        }, te.scrollerProxy = function (ie, ne) {
            var se = _getTarget(ie),
                ae = _scrollers.indexOf(se),
                oe = _isViewport(se);
            ~ae && _scrollers.splice(ae, oe ? 6 : 2), ne && (oe ? _proxies.unshift(_win$1, ne, _body, ne, _docEl, ne) : _proxies.unshift(se, ne))
        }, te.clearMatchMedia = function (ie) {
            _triggers.forEach(function (ne) {
                return ne._ctx && ne._ctx.query === ie && ne._ctx.kill(!0, !0)
            })
        }, te.isInViewport = function (ie, ne, se) {
            var ae = (_isString(ie) ? _getTarget(ie) : ie).getBoundingClientRect(),
                oe = ae[se ? _width : _height] * ne || 0;
            return se ? ae.right - oe > 0 && ae.left + oe < _win$1.innerWidth : ae.bottom - oe > 0 && ae.top + oe < _win$1.innerHeight
        }, te.positionInViewport = function (ie, ne, se) {
            _isString(ie) && (ie = _getTarget(ie));
            var ae = ie.getBoundingClientRect(),
                oe = ae[se ? _width : _height],
                le = ne == null ? oe / 2 : ne in _keywords ? _keywords[ne] * oe : ~ne.indexOf("%") ? parseFloat(ne) * oe / 100 : parseFloat(ne) || 0;
            return se ? (ae.left + le) / _win$1.innerWidth : (ae.top + le) / _win$1.innerHeight
        }, te.killAll = function (ie) {
            if (_triggers.slice(0).forEach(function (se) {
                    return se.vars.id !== "ScrollSmoother" && se.kill()
                }), ie !== !0) {
                var ne = _listeners.killAll || [];
                _listeners = {}, ne.forEach(function (se) {
                    return se()
                })
            }
        }, te
    }();
ScrollTrigger.version = "3.11.4";
ScrollTrigger.saveStyles = function (te) {
    return te ? _toArray$1(te).forEach(function (ee) {
        if (ee && ee.style) {
            var re = _savedStyles.indexOf(ee);
            re >= 0 && _savedStyles.splice(re, 5), _savedStyles.push(ee, ee.style.cssText, ee.getBBox && ee.getAttribute("transform"), gsap$1.core.getCache(ee), _context$1())
        }
    }) : _savedStyles
};
ScrollTrigger.revert = function (te, ee) {
    return _revertAll(!te, ee)
};
ScrollTrigger.create = function (te, ee) {
    return new ScrollTrigger(te, ee)
};
ScrollTrigger.refresh = function (te) {
    return te ? _onResize() : (_coreInitted$1 || ScrollTrigger.register()) && _refreshAll(!0)
};
ScrollTrigger.update = function (te) {
    return ++_scrollers.cache && _updateAll(te === !0 ? 2 : 0)
};
ScrollTrigger.clearScrollMemory = _clearScrollMemory;
ScrollTrigger.maxScroll = function (te, ee) {
    return _maxScroll(te, ee ? _horizontal : _vertical)
};
ScrollTrigger.getScrollFunc = function (te, ee) {
    return _getScrollFunc(_getTarget(te), ee ? _horizontal : _vertical)
};
ScrollTrigger.getById = function (te) {
    return _ids[te]
};
ScrollTrigger.getAll = function () {
    return _triggers.filter(function (te) {
        return te.vars.id !== "ScrollSmoother"
    })
};
ScrollTrigger.isScrolling = function () {
    return !!_lastScrollTime
};
ScrollTrigger.snapDirectional = _snapDirectional;
ScrollTrigger.addEventListener = function (te, ee) {
    var re = _listeners[te] || (_listeners[te] = []);
    ~re.indexOf(ee) || re.push(ee)
};
ScrollTrigger.removeEventListener = function (te, ee) {
    var re = _listeners[te],
        ie = re && re.indexOf(ee);
    ie >= 0 && re.splice(ie, 1)
};
ScrollTrigger.batch = function (te, ee) {
    var re = [],
        ie = {},
        ne = ee.interval || .016,
        se = ee.batchMax || 1e9,
        ae = function (he, fe) {
            var _e = [],
                ue = [],
                de = gsap$1.delayedCall(ne, function () {
                    fe(_e, ue), _e = [], ue = []
                }).pause();
            return function (me) {
                _e.length || de.restart(!0), _e.push(me.trigger), ue.push(me), se <= _e.length && de.progress(1)
            }
        },
        oe;
    for (oe in ee) ie[oe] = oe.substr(0, 2) === "on" && _isFunction(ee[oe]) && oe !== "onRefreshInit" ? ae(oe, ee[oe]) : ee[oe];
    return _isFunction(se) && (se = se(), _addListener(ScrollTrigger, "refresh", function () {
        return se = ee.batchMax()
    })), _toArray$1(te).forEach(function (le) {
        var he = {};
        for (oe in ie) he[oe] = ie[oe];
        he.trigger = le, re.push(ScrollTrigger.create(he))
    }), re
};
var _clampScrollAndGetDurationMultiplier = function (ee, re, ie, ne) {
        return re > ne ? ee(ne) : re < 0 && ee(0), ie > ne ? (ne - re) / (ie - re) : ie < 0 ? re / (re - ie) : 1
    },
    _allowNativePanning = function te(ee, re) {
        re === !0 ? ee.style.removeProperty("touch-action") : ee.style.touchAction = re === !0 ? "auto" : re ? "pan-" + re + (Observer.isTouch ? " pinch-zoom" : "") : "none", ee === _docEl && te(_body, re)
    },
    _overflow = {
        auto: 1,
        scroll: 1
    },
    _nestedScroll = function (ee) {
        var re = ee.event,
            ie = ee.target,
            ne = ee.axis,
            se = (re.changedTouches ? re.changedTouches[0] : re).target,
            ae = se._gsap || gsap$1.core.getCache(se),
            oe = _getTime(),
            le;
        if (!ae._isScrollT || oe - ae._isScrollT > 2e3) {
            for (; se && se !== _body && (se.scrollHeight <= se.clientHeight && se.scrollWidth <= se.clientWidth || !(_overflow[(le = _getComputedStyle$1(se)).overflowY] || _overflow[le.overflowX]));) se = se.parentNode;
            ae._isScroll = se && se !== ie && !_isViewport(se) && (_overflow[(le = _getComputedStyle$1(se)).overflowY] || _overflow[le.overflowX]), ae._isScrollT = oe
        }(ae._isScroll || ne === "x") && (re.stopPropagation(), re._gsapAllow = !0)
    },
    _inputObserver = function (ee, re, ie, ne) {
        return Observer.create({
            target: ee,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: re,
            onWheel: ne = ne && _nestedScroll,
            onPress: ne,
            onDrag: ne,
            onScroll: ne,
            onEnable: function () {
                return ie && _addListener(_doc$1, Observer.eventTypes[0], _captureInputs, !1, !0)
            },
            onDisable: function () {
                return _removeListener(_doc$1, Observer.eventTypes[0], _captureInputs, !0)
            }
        })
    },
    _inputExp = /(input|label|select|textarea)/i,
    _inputIsFocused, _captureInputs = function (ee) {
        var re = _inputExp.test(ee.target.tagName);
        (re || _inputIsFocused) && (ee._gsapAllow = !0, _inputIsFocused = re)
    },
    _getScrollNormalizer = function (ee) {
        _isObject(ee) || (ee = {}), ee.preventDefault = ee.isNormalizer = ee.allowClicks = !0, ee.type || (ee.type = "wheel,touch"), ee.debounce = !!ee.debounce, ee.id = ee.id || "normalizer";
        var re = ee,
            ie = re.normalizeScrollX,
            ne = re.momentum,
            se = re.allowNestedScroll,
            ae, oe, le = _getTarget(ee.target) || _docEl,
            he = gsap$1.core.globals().ScrollSmoother,
            fe = he && he.get(),
            _e = _fixIOSBug && (ee.content && _getTarget(ee.content) || fe && ee.content !== !1 && !fe.smooth() && fe.content()),
            ue = _getScrollFunc(le, _vertical),
            de = _getScrollFunc(le, _horizontal),
            me = 1,
            ce = (Observer.isTouch && _win$1.visualViewport ? _win$1.visualViewport.scale * _win$1.visualViewport.width : _win$1.outerWidth) / _win$1.innerWidth,
            Ce = 0,
            pe = _isFunction(ne) ? function () {
                return ne(ae)
            } : function () {
                return ne || 2.8
            },
            ve, ge, ye = _inputObserver(le, ee.type, !0, se),
            Ee = function () {
                return ge = !1
            },
            Pe = _passThrough,
            xe = _passThrough,
            we = function () {
                oe = _maxScroll(le, _vertical), xe = _clamp(_fixIOSBug ? 1 : 0, oe), ie && (Pe = _clamp(0, _maxScroll(le, _horizontal))), ve = _refreshID
            },
            Fe = function () {
                _e._gsap.y = _round(parseFloat(_e._gsap.y) + ue.offset) + "px", _e.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(_e._gsap.y) + ", 0, 1)", ue.offset = ue.cacheID = 0
            },
            Le = function () {
                if (ge) {
                    requestAnimationFrame(Ee);
                    var Ae = _round(ae.deltaY / 2),
                        be = xe(ue.v - Ae);
                    if (_e && be !== ue.v + ue.offset) {
                        ue.offset = be - ue.v;
                        var De = _round((parseFloat(_e && _e._gsap.y) || 0) - ue.offset);
                        _e.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + De + ", 0, 1)", _e._gsap.y = De + "px", ue.cacheID = _scrollers.cache, _updateAll()
                    }
                    return !0
                }
                ue.offset && Fe(), ge = !0
            },
            Re, Me, $e, Be, Ie = function () {
                we(), Re.isActive() && Re.vars.scrollY > oe && (ue() > oe ? Re.progress(1) && ue(oe) : Re.resetTo("scrollY", oe))
            };
        return _e && gsap$1.set(_e, {
            y: "+=0"
        }), ee.ignoreCheck = function (Se) {
            return _fixIOSBug && Se.type === "touchmove" && Le() || me > 1.05 && Se.type !== "touchstart" || ae.isGesturing || Se.touches && Se.touches.length > 1
        }, ee.onPress = function () {
            var Se = me;
            me = _round((_win$1.visualViewport && _win$1.visualViewport.scale || 1) / ce), Re.pause(), Se !== me && _allowNativePanning(le, me > 1.01 ? !0 : ie ? !1 : "x"), Me = de(), $e = ue(), we(), ve = _refreshID
        }, ee.onRelease = ee.onGestureStart = function (Se, Ae) {
            if (ue.offset && Fe(), !Ae) Be.restart(!0);
            else {
                _scrollers.cache++;
                var be = pe(),
                    De, Te;
                ie && (De = de(), Te = De + be * .05 * -Se.velocityX / .227, be *= _clampScrollAndGetDurationMultiplier(de, De, Te, _maxScroll(le, _horizontal)), Re.vars.scrollX = Pe(Te)), De = ue(), Te = De + be * .05 * -Se.velocityY / .227, be *= _clampScrollAndGetDurationMultiplier(ue, De, Te, _maxScroll(le, _vertical)), Re.vars.scrollY = xe(Te), Re.invalidate().duration(be).play(.01), (_fixIOSBug && Re.vars.scrollY >= oe || De >= oe - 1) && gsap$1.to({}, {
                    onUpdate: Ie,
                    duration: be
                })
            }
        }, ee.onWheel = function () {
            Re._ts && Re.pause(), _getTime() - Ce > 1e3 && (ve = 0, Ce = _getTime())
        }, ee.onChange = function (Se, Ae, be, De, Te) {
            if (_refreshID !== ve && we(), Ae && ie && de(Pe(De[2] === Ae ? Me + (Se.startX - Se.x) : de() + Ae - De[1])), be) {
                ue.offset && Fe();
                var ke = Te[2] === be,
                    Ve = ke ? $e + Se.startY - Se.y : ue() + be - Te[1],
                    We = xe(Ve);
                ke && Ve !== We && ($e += We - Ve), ue(We)
            }(be || Ae) && _updateAll()
        }, ee.onEnable = function () {
            _allowNativePanning(le, ie ? !1 : "x"), ScrollTrigger.addEventListener("refresh", Ie), _addListener(_win$1, "resize", Ie), ue.smooth && (ue.target.style.scrollBehavior = "auto", ue.smooth = de.smooth = !1), ye.enable()
        }, ee.onDisable = function () {
            _allowNativePanning(le, !0), _removeListener(_win$1, "resize", Ie), ScrollTrigger.removeEventListener("refresh", Ie), ye.kill()
        }, ee.lockAxis = ee.lockAxis !== !1, ae = new Observer(ee), ae.iOS = _fixIOSBug, _fixIOSBug && !ue() && ue(1), _fixIOSBug && gsap$1.ticker.add(_passThrough), Be = ae._dc, Re = gsap$1.to(ae, {
            ease: "power4",
            paused: !0,
            scrollX: ie ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            onComplete: Be.vars.onComplete
        }), ae
    };
ScrollTrigger.sort = function (te) {
    return _triggers.sort(te || function (ee, re) {
        return (ee.vars.refreshPriority || 0) * -1e6 + ee.start - (re.start + (re.vars.refreshPriority || 0) * -1e6)
    })
};
ScrollTrigger.observe = function (te) {
    return new Observer(te)
};
ScrollTrigger.normalizeScroll = function (te) {
    if (typeof te > "u") return _normalizer;
    if (te === !0 && _normalizer) return _normalizer.enable();
    if (te === !1) return _normalizer && _normalizer.kill();
    var ee = te instanceof Observer ? te : _getScrollNormalizer(te);
    return _normalizer && _normalizer.target === ee.target && _normalizer.kill(), _isViewport(ee.target) && (_normalizer = ee), ee
};
ScrollTrigger.core = {
    _getVelocityProp,
    _inputObserver,
    _scrollers,
    _proxies,
    bridge: {
        ss: function () {
            _lastScrollTime || _dispatch("scrollStart"), _lastScrollTime = _getTime()
        },
        ref: function () {
            return _refreshing
        }
    }
};
_getGSAP() && gsap$1.registerPlugin(ScrollTrigger);
gsapWithCSS.registerPlugin(ScrollTrigger);
let instance$1 = null;
class Scroll {
    constructor() {
        if (instance$1) return instance$1;
        instance$1 = this, this.lenis = new Lenis({
            duration: .8,
            easing: ie => Math.min(1, 1.001 - Math.pow(2, -10 * ie)),
            direction: "vertical",
            gestureDirection: "vertical",
            smoothWheel: !0,
            smoothTouch: !1,
            wheelMultiplier: 2,
            smoothTouch: !1
        });
        let ee = this;

        function re(ie) {
            ee.lenis.raf(ie), requestAnimationFrame(re)
        }
        requestAnimationFrame(re), $(".cta__scroll").on("click", () => {
            this.lenis.scrollTo(0)
        }), ScrollTrigger.addEventListener("refresh", () => this.lenis.resize())
    }
}

function AppendLogo(te) {
    let ee = `
  <svg width="234" height="40" viewBox="0 0 234 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0H55.8C57.2667 0 58.65 0.383333 59.95 1.15C61.25 1.91667 62.3 2.95 63.1 4.25C63.9 5.55 64.3 6.98333 64.3 8.55V31.4C64.3 32.9333 63.9 34.3667 63.1 35.7C62.3 37 61.25 38.05 59.95 38.85C58.65 39.6167 57.2667 40 55.8 40H0V0ZM55.05 34.15C56.0167 34.15 56.8167 33.8333 57.45 33.2C58.1167 32.5333 58.45 31.6833 58.45 30.65L58.4 9.25C58.4 8.21667 58.0833 7.38333 57.45 6.75C56.8167 6.11667 56 5.8 55 5.8H5.85V34.15H55.05Z" fill="currentColor"/>
<path d="M90.5 40C89.0333 40 87.6333 39.6167 86.3 38.85C85 38.05 83.95 37 83.15 35.7C82.3833 34.4 82 32.9833 82 31.45V8.55C82 6.98333 82.4 5.55 83.2 4.25C84 2.91666 85.05 1.88333 86.35 1.15C87.65 0.383333 89.0333 0 90.5 0H137.85C139.317 0 140.7 0.383333 142 1.15C143.333 1.91667 144.383 2.96667 145.15 4.3C145.95 5.6 146.35 7.01667 146.35 8.55V14.15H140.55V9.3C140.55 8.26667 140.217 7.43333 139.55 6.8C138.917 6.13333 138.117 5.8 137.15 5.8H91.25C90.2833 5.8 89.4667 6.13333 88.8 6.8C88.1667 7.43333 87.85 8.26667 87.85 9.3V30.65C87.85 31.6833 88.1833 32.5333 88.85 33.2C89.5167 33.8333 90.3333 34.15 91.3 34.15H137.1C138.1 34.15 138.917 33.8333 139.55 33.2C140.183 32.5333 140.5 31.7 140.5 30.7L140.55 23.55H114.15V18.55H146.35V31.45C146.35 33.0167 145.95 34.45 145.15 35.75C144.35 37.05 143.283 38.0833 141.95 38.85C140.65 39.6167 139.267 40 137.8 40H90.5Z" fill="currentColor"/>
<path d="M164 0H169.65L198.8 24.1L227.95 0H233.85V40H228V7.35L199.65 30.8H197.95L169.85 7.6V40H164V0Z" fill="currentColor"/>
</svg>
    `;
    te.append(ee)
}
const loadPage = async te => {
    switch (te) {
        case "home":
            const {
                default: ee
            } = await __vitePreload(() => import("./main-index.js"), ["main-index.js", "main-Base.js", "main-InsertVideo.js", "main-ImgParallax.js", "main-style2.css"]);
            return new ee;
        case "solutions":
            const {
                default: re
            } = await __vitePreload(() => import("./main-index2.js"), ["main-index2.js", "main-Base.js", "main-InsertVideo.js", "main-ImgParallax.js", "main-style2.css"]);
            return new re;
        case "about":
            const {
                default: ie
            } = await __vitePreload(() => import("./main-index3.js"), ["main-index3.js", "main-Base.js", "main-InsertVideo.js", "main-ImgParallax.js", "main-style2.css"]);
            return new ie;
        case "casestudies":
            const {
                default: ne
            } = await __vitePreload(() => import("./main-index4.js"), ["main-index4.js", "main-Base.js", "main-InsertVideo.js", "main-ImgParallax.js", "main-style2.css"]);
            return new ne;
        case "case":
            const {
                default: se
            } = await __vitePreload(() => import("./main-index5.js"), ["main-index5.js", "main-Base.js", "main-InsertVideo.js", "main-ImgParallax.js", "main-style2.css"]);
            return new se;
        case "careers":
            const {
                default: ae
            } = await __vitePreload(() => import("./main-index6.js"), ["main-index6.js", "main-Base.js", "main-InsertVideo.js", "main-ImgParallax.js", "main-style2.css"]);
            return new ae;
        case "contact":
            const {
                default: oe
            } = await __vitePreload(() => import("./main-index7.js"), ["main-index7.js", "main-Base.js", "main-InsertVideo.js", "main-ImgParallax.js", "main-style2.css"]);
            return new oe;
        case "team":
            const {
                default: le
            } = await __vitePreload(() => import("./main-index8.js"), ["main-index8.js", "main-Base.js", "main-InsertVideo.js", "main-ImgParallax.js", "main-style2.css"]);
            return new le;
        case "privacypolicy":
            const {
                default: he
            } = await __vitePreload(() => import("./main-index9.js"), []);
            return new he;
        case "category":
            const {
                default: fe
            } = await __vitePreload(() => import("./main-index10.js"), ["main-index10.js", "main-Base.js", "main-InsertVideo.js", "main-ImgParallax.js", "main-style2.css"]);
            return new fe;
        case "post":
            const {
                default: _e
            } = await __vitePreload(() => import("./main-index11.js"), ["main-index11.js", "main-ImgParallax.js"]);
            return new _e;
        case "insights":
            const {
                default: ue
            } = await __vitePreload(() => import("./main-index12.js"), ["main-index12.js", "main-ImgParallax.js"]);
            return new ue;
        case "terms-of-use":
            await __vitePreload(() => import("./main-index13.js"), ["main-index13.js", "main-Base.js", "main-InsertVideo.js", "main-ImgParallax.js", "main-style2.css"]);
        case "inner":
            const {
                default: de
            } = await __vitePreload(() => import("./main-Inner.js"), ["main-Inner.js", "main-Base.js", "main-InsertVideo.js", "main-ImgParallax.js", "main-style2.css"]);
            return new de;
        case "404":
            const {
                default: me
            } = await __vitePreload(() => import("./main-index14.js"), []);
            return new me;
        default:
            console.warn("Invalid page");
            return
    }
};
/*!
 * strings: 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var emojiExp = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;

function getText(te) {
    var ee = te.nodeType,
        re = "";
    if (ee === 1 || ee === 9 || ee === 11) {
        if (typeof te.textContent == "string") return te.textContent;
        for (te = te.firstChild; te; te = te.nextSibling) re += getText(te)
    } else if (ee === 3 || ee === 4) return te.nodeValue;
    return re
}
/*!
 * SplitText: 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var _doc, _win, _coreInitted, gsap, _context, _toArray, _stripExp = /(?:\r|\n|\t\t)/g,
    _multipleSpacesExp = /(?:\s\s+)/g,
    _initCore = function (ee) {
        _doc = document, _win = window, gsap = gsap || ee || _win.gsap || console.warn("Please gsap.registerPlugin(SplitText)"), gsap && (_toArray = gsap.utils.toArray, _context = gsap.core.context || function () {}, _coreInitted = 1)
    },
    _getComputedStyle = function (ee) {
        return _win.getComputedStyle(ee)
    },
    _isAbsolute = function (ee) {
        return ee.position === "absolute" || ee.absolute === !0
    },
    _findSpecialChars = function (ee, re) {
        for (var ie = re.length, ne; --ie > -1;)
            if (ne = re[ie], ee.substr(0, ne.length) === ne) return ne.length
    },
    _divStart = " style='position:relative;display:inline-block;'",
    _cssClassFunc = function (ee, re) {
        ee === void 0 && (ee = "");
        var ie = ~ee.indexOf("++"),
            ne = 1;
        return ie && (ee = ee.split("++").join("")),
            function () {
                return "<" + re + _divStart + (ee ? " class='" + ee + (ie ? ne++ : "") + "'>" : ">")
            }
    },
    _swapText = function te(ee, re, ie) {
        var ne = ee.nodeType;
        if (ne === 1 || ne === 9 || ne === 11)
            for (ee = ee.firstChild; ee; ee = ee.nextSibling) te(ee, re, ie);
        else(ne === 3 || ne === 4) && (ee.nodeValue = ee.nodeValue.split(re).join(ie))
    },
    _pushReversed = function (ee, re) {
        for (var ie = re.length; --ie > -1;) ee.push(re[ie])
    },
    _isBeforeWordDelimiter = function (ee, re, ie) {
        for (var ne; ee && ee !== re;) {
            if (ne = ee._next || ee.nextSibling, ne) return ne.textContent.charAt(0) === ie;
            ee = ee.parentNode || ee._parent
        }
    },
    _deWordify = function te(ee) {
        var re = _toArray(ee.childNodes),
            ie = re.length,
            ne, se;
        for (ne = 0; ne < ie; ne++) se = re[ne], se._isSplit ? te(se) : ne && se.previousSibling && se.previousSibling.nodeType === 3 ? (se.previousSibling.nodeValue += se.nodeType === 3 ? se.nodeValue : se.firstChild.nodeValue, ee.removeChild(se)) : se.nodeType !== 3 && (ee.insertBefore(se.firstChild, se), ee.removeChild(se))
    },
    _getStyleAsNumber = function (ee, re) {
        return parseFloat(re[ee]) || 0
    },
    _setPositionsAfterSplit = function (ee, re, ie, ne, se, ae, oe) {
        var le = _getComputedStyle(ee),
            he = _getStyleAsNumber("paddingLeft", le),
            fe = -999,
            _e = _getStyleAsNumber("borderBottomWidth", le) + _getStyleAsNumber("borderTopWidth", le),
            ue = _getStyleAsNumber("borderLeftWidth", le) + _getStyleAsNumber("borderRightWidth", le),
            de = _getStyleAsNumber("paddingTop", le) + _getStyleAsNumber("paddingBottom", le),
            me = _getStyleAsNumber("paddingLeft", le) + _getStyleAsNumber("paddingRight", le),
            ce = _getStyleAsNumber("fontSize", le) * (re.lineThreshold || .2),
            Ce = le.textAlign,
            pe = [],
            ve = [],
            ge = [],
            ye = re.wordDelimiter || " ",
            Ee = re.tag ? re.tag : re.span ? "span" : "div",
            Pe = re.type || re.split || "chars,words,lines",
            xe = se && ~Pe.indexOf("lines") ? [] : null,
            we = ~Pe.indexOf("words"),
            Fe = ~Pe.indexOf("chars"),
            Le = _isAbsolute(re),
            Re = re.linesClass,
            Me = ~(Re || "").indexOf("++"),
            $e = [],
            Be = le.display === "flex",
            Ie = ee.style.display,
            Se, Ae, be, De, Te, ke, Ve, We, Ne, He, qe, Ue;
        for (Me && (Re = Re.split("++").join("")), Be && (ee.style.display = "block"), Ae = ee.getElementsByTagName("*"), be = Ae.length, Te = [], Se = 0; Se < be; Se++) Te[Se] = Ae[Se];
        if (xe || Le)
            for (Se = 0; Se < be; Se++) De = Te[Se], ke = De.parentNode === ee, (ke || Le || Fe && !we) && (Ue = De.offsetTop, xe && ke && Math.abs(Ue - fe) > ce && (De.nodeName !== "BR" || Se === 0) && (Ve = [], xe.push(Ve), fe = Ue), Le && (De._x = De.offsetLeft, De._y = Ue, De._w = De.offsetWidth, De._h = De.offsetHeight), xe && ((De._isSplit && ke || !Fe && ke || we && ke || !we && De.parentNode.parentNode === ee && !De.parentNode._isSplit) && (Ve.push(De), De._x -= he, _isBeforeWordDelimiter(De, ee, ye) && (De._wordEnd = !0)), De.nodeName === "BR" && (De.nextSibling && De.nextSibling.nodeName === "BR" || Se === 0) && xe.push([])));
        for (Se = 0; Se < be; Se++) {
            if (De = Te[Se], ke = De.parentNode === ee, De.nodeName === "BR") {
                xe || Le ? (De.parentNode && De.parentNode.removeChild(De), Te.splice(Se--, 1), be--) : we || ee.appendChild(De);
                continue
            }
            if (Le && (Ne = De.style, !we && !ke && (De._x += De.parentNode._x, De._y += De.parentNode._y), Ne.left = De._x + "px", Ne.top = De._y + "px", Ne.position = "absolute", Ne.display = "block", Ne.width = De._w + 1 + "px", Ne.height = De._h + "px"), !we && Fe)
                if (De._isSplit)
                    for (De._next = Ae = De.nextSibling, De.parentNode.appendChild(De); Ae && Ae.nodeType === 3 && Ae.textContent === " ";) De._next = Ae.nextSibling, De.parentNode.appendChild(Ae), Ae = Ae.nextSibling;
                else De.parentNode._isSplit ? (De._parent = De.parentNode, !De.previousSibling && De.firstChild && (De.firstChild._isFirst = !0), De.nextSibling && De.nextSibling.textContent === " " && !De.nextSibling.nextSibling && $e.push(De.nextSibling), De._next = De.nextSibling && De.nextSibling._isFirst ? null : De.nextSibling, De.parentNode.removeChild(De), Te.splice(Se--, 1), be--) : ke || (Ue = !De.nextSibling && _isBeforeWordDelimiter(De.parentNode, ee, ye), De.parentNode._parent && De.parentNode._parent.appendChild(De), Ue && De.parentNode.appendChild(_doc.createTextNode(" ")), Ee === "span" && (De.style.display = "inline"), pe.push(De));
            else De.parentNode._isSplit && !De._isSplit && De.innerHTML !== "" ? ve.push(De) : Fe && !De._isSplit && (Ee === "span" && (De.style.display = "inline"), pe.push(De))
        }
        for (Se = $e.length; --Se > -1;) $e[Se].parentNode.removeChild($e[Se]);
        if (xe) {
            for (Le && (He = _doc.createElement(Ee), ee.appendChild(He), qe = He.offsetWidth + "px", Ue = He.offsetParent === ee ? 0 : ee.offsetLeft, ee.removeChild(He)), Ne = ee.style.cssText, ee.style.cssText = "display:none;"; ee.firstChild;) ee.removeChild(ee.firstChild);
            for (We = ye === " " && (!Le || !we && !Fe), Se = 0; Se < xe.length; Se++) {
                for (Ve = xe[Se], He = _doc.createElement(Ee), He.style.cssText = "display:block;text-align:" + Ce + ";position:" + (Le ? "absolute;" : "relative;"), Re && (He.className = Re + (Me ? Se + 1 : "")), ge.push(He), be = Ve.length, Ae = 0; Ae < be; Ae++) Ve[Ae].nodeName !== "BR" && (De = Ve[Ae], He.appendChild(De), We && De._wordEnd && He.appendChild(_doc.createTextNode(" ")), Le && (Ae === 0 && (He.style.top = De._y + "px", He.style.left = he + Ue + "px"), De.style.top = "0px", Ue && (De.style.left = De._x - Ue + "px")));
                be === 0 ? He.innerHTML = "&nbsp;" : !we && !Fe && (_deWordify(He), _swapText(He, String.fromCharCode(160), " ")), Le && (He.style.width = qe, He.style.height = De._h + "px"), ee.appendChild(He)
            }
            ee.style.cssText = Ne
        }
        Le && (oe > ee.clientHeight && (ee.style.height = oe - de + "px", ee.clientHeight < oe && (ee.style.height = oe + _e + "px")), ae > ee.clientWidth && (ee.style.width = ae - me + "px", ee.clientWidth < ae && (ee.style.width = ae + ue + "px"))), Be && (Ie ? ee.style.display = Ie : ee.style.removeProperty("display")), _pushReversed(ie, pe), we && _pushReversed(ne, ve), _pushReversed(se, ge)
    },
    _splitRawText = function (ee, re, ie, ne) {
        var se = re.tag ? re.tag : re.span ? "span" : "div",
            ae = re.type || re.split || "chars,words,lines",
            oe = ~ae.indexOf("chars"),
            le = _isAbsolute(re),
            he = re.wordDelimiter || " ",
            fe = he !== " " ? "" : le ? "&#173; " : " ",
            _e = "</" + se + ">",
            ue = 1,
            de = re.specialChars ? typeof re.specialChars == "function" ? re.specialChars : _findSpecialChars : null,
            me, ce, Ce, pe, ve, ge, ye, Ee, Pe = _doc.createElement("div"),
            xe = ee.parentNode;
        for (xe.insertBefore(Pe, ee), Pe.textContent = ee.nodeValue, xe.removeChild(ee), ee = Pe, me = getText(ee), ye = me.indexOf("<") !== -1, re.reduceWhiteSpace !== !1 && (me = me.replace(_multipleSpacesExp, " ").replace(_stripExp, "")), ye && (me = me.split("<").join("{{LT}}")), ve = me.length, ce = (me.charAt(0) === " " ? fe : "") + ie(), Ce = 0; Ce < ve; Ce++)
            if (ge = me.charAt(Ce), de && (Ee = de(me.substr(Ce), re.specialChars))) ge = me.substr(Ce, Ee || 1), ce += oe && ge !== " " ? ne() + ge + "</" + se + ">" : ge, Ce += Ee - 1;
            else if (ge === he && me.charAt(Ce - 1) !== he && Ce) {
            for (ce += ue ? _e : "", ue = 0; me.charAt(Ce + 1) === he;) ce += fe, Ce++;
            Ce === ve - 1 ? ce += fe : me.charAt(Ce + 1) !== ")" && (ce += fe + ie(), ue = 1)
        } else ge === "{" && me.substr(Ce, 6) === "{{LT}}" ? (ce += oe ? ne() + "{{LT}}</" + se + ">" : "{{LT}}", Ce += 5) : ge.charCodeAt(0) >= 55296 && ge.charCodeAt(0) <= 56319 || me.charCodeAt(Ce + 1) >= 65024 && me.charCodeAt(Ce + 1) <= 65039 ? (pe = ((me.substr(Ce, 12).split(emojiExp) || [])[1] || "").length || 2, ce += oe && ge !== " " ? ne() + me.substr(Ce, pe) + "</" + se + ">" : me.substr(Ce, pe), Ce += pe - 1) : ce += oe && ge !== " " ? ne() + ge + "</" + se + ">" : ge;
        ee.outerHTML = ce + (ue ? _e : ""), ye && _swapText(xe, "{{LT}}", "<")
    },
    _split = function te(ee, re, ie, ne) {
        var se = _toArray(ee.childNodes),
            ae = se.length,
            oe = _isAbsolute(re),
            le, he;
        if (ee.nodeType !== 3 || ae > 1) {
            for (re.absolute = !1, le = 0; le < ae; le++) he = se[le], he._next = he._isFirst = he._parent = he._wordEnd = null, (he.nodeType !== 3 || /\S+/.test(he.nodeValue)) && (oe && he.nodeType !== 3 && _getComputedStyle(he).display === "inline" && (he.style.display = "inline-block", he.style.position = "relative"), he._isSplit = !0, te(he, re, ie, ne));
            re.absolute = oe, ee._isSplit = !0;
            return
        }
        _splitRawText(ee, re, ie, ne)
    },
    SplitText = function () {
        function te(re, ie) {
            _coreInitted || _initCore(), this.elements = _toArray(re), this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = ie || {}, _context(this), this.split(ie)
        }
        var ee = te.prototype;
        return ee.split = function (ie) {
            this.isSplit && this.revert(), this.vars = ie = ie || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
            for (var ne = this.elements.length, se = ie.tag ? ie.tag : ie.span ? "span" : "div", ae = _cssClassFunc(ie.wordsClass, se), oe = _cssClassFunc(ie.charsClass, se), le, he, fe; --ne > -1;) fe = this.elements[ne], this._originals[ne] = fe.innerHTML, le = fe.clientHeight, he = fe.clientWidth, _split(fe, ie, ae, oe), _setPositionsAfterSplit(fe, ie, this.chars, this.words, this.lines, he, le);
            return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
        }, ee.revert = function () {
            var ie = this._originals;
            if (!ie) throw "revert() call wasn't scoped properly.";
            return this.elements.forEach(function (ne, se) {
                return ne.innerHTML = ie[se]
            }), this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
        }, te.create = function (ie, ne) {
            return new te(ie, ne)
        }, te
    }();
SplitText.version = "3.11.4";
SplitText.register = _initCore;
gsapWithCSS.registerPlugin(SplitText);
class LinksHover {
    constructor(ee) {
        ee == null ? ee = $("[link-hover]") : ee = ee, ee.each((re, ie) => {
            let ne = $(ie),
                se = ne.find(".link-text").children(),
                ae = se.clone();
            ne.find(".link-text").append(ae);
            let oe = ne.find(".link-text").children().eq(1);
            if (oe.length === 0) return;
            let le = new SplitText(se, {
                    type: "chars, lines"
                }),
                he = new SplitText(oe, {
                    type: "chars, lines"
                }),
                fe = gsapWithCSS.timeline({
                    paused: !0,
                    defaults: {
                        duration: .6,
                        ease: "power2",
                        stagger: .02
                    }
                });
            gsapWithCSS.set(ne, {
                overflow: "hidden",
                position: "relative"
            }), gsapWithCSS.set(oe, {
                position: "absolute",
                top: "100%",
                left: 0,
                width: "100%"
            }), fe.to(le.chars, {
                yPercent: -100
            }, 0).to(he.chars, {
                yPercent: -100
            }, "<0.1"), ne.on("mouseenter", () => fe.restart())
        })
    }
}
class Nav {
    constructor() {
        const re = new App().scroll.lenis;
        this.body = $("body"), this.nav = $(".nav");
        let ie, ne;
        re.on("scroll", se => {
            ne = ie, ie = se.direction, ie === 0 ? ie = ne : ie = ie, ie !== 1 ? this.body.removeClass("scroll-down") : this.body.addClass("scroll-down")
        }), new LinksHover($(".link-hover")), this.hoverWhenHide()
    }
    hoverWhenHide() {
        this.nav.on("mousemove, mouseenter", () => {
            this.body.hasClass("scroll-down") && this.body.removeClass("scroll-down")
        })
    }
}
class Burger {
    constructor() {
        this.app = new App, this.lenis = this.app.scroll.lenis, this.icon = $(".nav__burger"), this.body = $("body"), this.burger = $(".burger"), this.items = this.burger.find(".burger__item"), this.open(), this.addDelay()
    }
    open() {
        this.icon.on("click", () => {
            this.body.hasClass("burger-open") ? (this.body.removeClass("burger-open"), this.lenis.start()) : (this.body.addClass("burger-open"), this.lenis.stop())
        })
    }
    addDelay() {
        this.items.each((ee, re) => {
            $(re).css("--delay", `${.05*ee+.3}s`)
        })
    }
}

function forceRender() {
    document.body.style.display = "none", document.body.offsetHeight, document.body.style.display = ""
}
var lottie$1 = {
    exports: {}
};
(function (module, exports) {
    typeof navigator < "u" && function (te, ee) {
        module.exports = ee()
    }(commonjsGlobal, function () {
        var svgNS = "http://www.w3.org/2000/svg",
            locationHref = "",
            _useWebWorker = !1,
            initialDefaultFrame = -999999,
            setWebWorker = function (ee) {
                _useWebWorker = !!ee
            },
            getWebWorker = function () {
                return _useWebWorker
            },
            setLocationHref = function (ee) {
                locationHref = ee
            },
            getLocationHref = function () {
                return locationHref
            };

        function createTag(te) {
            return document.createElement(te)
        }

        function extendPrototype(te, ee) {
            var re, ie = te.length,
                ne;
            for (re = 0; re < ie; re += 1) {
                ne = te[re].prototype;
                for (var se in ne) Object.prototype.hasOwnProperty.call(ne, se) && (ee.prototype[se] = ne[se])
            }
        }

        function getDescriptor(te, ee) {
            return Object.getOwnPropertyDescriptor(te, ee)
        }

        function createProxyFunction(te) {
            function ee() {}
            return ee.prototype = te, ee
        }
        var audioControllerFactory = function () {
                function te(ee) {
                    this.audios = [], this.audioFactory = ee, this._volume = 1, this._isMuted = !1
                }
                return te.prototype = {
                        addAudio: function (re) {
                            this.audios.push(re)
                        },
                        pause: function () {
                            var re, ie = this.audios.length;
                            for (re = 0; re < ie; re += 1) this.audios[re].pause()
                        },
                        resume: function () {
                            var re, ie = this.audios.length;
                            for (re = 0; re < ie; re += 1) this.audios[re].resume()
                        },
                        setRate: function (re) {
                            var ie, ne = this.audios.length;
                            for (ie = 0; ie < ne; ie += 1) this.audios[ie].setRate(re)
                        },
                        createAudio: function (re) {
                            return this.audioFactory ? this.audioFactory(re) : window.Howl ? new window.Howl({
                                src: [re]
                            }) : {
                                isPlaying: !1,
                                play: function () {
                                    this.isPlaying = !0
                                },
                                seek: function () {
                                    this.isPlaying = !1
                                },
                                playing: function () {},
                                rate: function () {},
                                setVolume: function () {}
                            }
                        },
                        setAudioFactory: function (re) {
                            this.audioFactory = re
                        },
                        setVolume: function (re) {
                            this._volume = re, this._updateVolume()
                        },
                        mute: function () {
                            this._isMuted = !0, this._updateVolume()
                        },
                        unmute: function () {
                            this._isMuted = !1, this._updateVolume()
                        },
                        getVolume: function () {
                            return this._volume
                        },
                        _updateVolume: function () {
                            var re, ie = this.audios.length;
                            for (re = 0; re < ie; re += 1) this.audios[re].volume(this._volume * (this._isMuted ? 0 : 1))
                        }
                    },
                    function () {
                        return new te
                    }
            }(),
            createTypedArray = function () {
                function te(re, ie) {
                    var ne = 0,
                        se = [],
                        ae;
                    switch (re) {
                        case "int16":
                        case "uint8c":
                            ae = 1;
                            break;
                        default:
                            ae = 1.1;
                            break
                    }
                    for (ne = 0; ne < ie; ne += 1) se.push(ae);
                    return se
                }

                function ee(re, ie) {
                    return re === "float32" ? new Float32Array(ie) : re === "int16" ? new Int16Array(ie) : re === "uint8c" ? new Uint8ClampedArray(ie) : te(re, ie)
                }
                return typeof Uint8ClampedArray == "function" && typeof Float32Array == "function" ? ee : te
            }();

        function createSizedArray(te) {
            return Array.apply(null, {
                length: te
            })
        }

        function _typeof$6(te) {
            "@babel/helpers - typeof";
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$6 = function (re) {
                return typeof re
            } : _typeof$6 = function (re) {
                return re && typeof Symbol == "function" && re.constructor === Symbol && re !== Symbol.prototype ? "symbol" : typeof re
            }, _typeof$6(te)
        }
        var subframeEnabled = !0,
            expressionsPlugin = null,
            expressionsInterfaces = null,
            idPrefix$1 = "",
            isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
            bmPow = Math.pow,
            bmSqrt = Math.sqrt,
            bmFloor = Math.floor,
            bmMax = Math.max,
            bmMin = Math.min,
            BMMath = {};
        (function () {
            var te = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
                ee, re = te.length;
            for (ee = 0; ee < re; ee += 1) BMMath[te[ee]] = Math[te[ee]]
        })(), BMMath.random = Math.random, BMMath.abs = function (te) {
            var ee = _typeof$6(te);
            if (ee === "object" && te.length) {
                var re = createSizedArray(te.length),
                    ie, ne = te.length;
                for (ie = 0; ie < ne; ie += 1) re[ie] = Math.abs(te[ie]);
                return re
            }
            return Math.abs(te)
        };
        var defaultCurveSegments = 150,
            degToRads = Math.PI / 180,
            roundCorner = .5519;

        function styleDiv(te) {
            te.style.position = "absolute", te.style.top = 0, te.style.left = 0, te.style.display = "block", te.style.transformOrigin = "0 0", te.style.webkitTransformOrigin = "0 0", te.style.backfaceVisibility = "visible", te.style.webkitBackfaceVisibility = "visible", te.style.transformStyle = "preserve-3d", te.style.webkitTransformStyle = "preserve-3d", te.style.mozTransformStyle = "preserve-3d"
        }

        function BMEnterFrameEvent(te, ee, re, ie) {
            this.type = te, this.currentTime = ee, this.totalTime = re, this.direction = ie < 0 ? -1 : 1
        }

        function BMCompleteEvent(te, ee) {
            this.type = te, this.direction = ee < 0 ? -1 : 1
        }

        function BMCompleteLoopEvent(te, ee, re, ie) {
            this.type = te, this.currentLoop = re, this.totalLoops = ee, this.direction = ie < 0 ? -1 : 1
        }

        function BMSegmentStartEvent(te, ee, re) {
            this.type = te, this.firstFrame = ee, this.totalFrames = re
        }

        function BMDestroyEvent(te, ee) {
            this.type = te, this.target = ee
        }

        function BMRenderFrameErrorEvent(te, ee) {
            this.type = "renderFrameError", this.nativeError = te, this.currentTime = ee
        }

        function BMConfigErrorEvent(te) {
            this.type = "configError", this.nativeError = te
        }
        var createElementID = function () {
            var te = 0;
            return function () {
                return te += 1, idPrefix$1 + "__lottie_element_" + te
            }
        }();

        function HSVtoRGB(te, ee, re) {
            var ie, ne, se, ae, oe, le, he, fe;
            switch (ae = Math.floor(te * 6), oe = te * 6 - ae, le = re * (1 - ee), he = re * (1 - oe * ee), fe = re * (1 - (1 - oe) * ee), ae % 6) {
                case 0:
                    ie = re, ne = fe, se = le;
                    break;
                case 1:
                    ie = he, ne = re, se = le;
                    break;
                case 2:
                    ie = le, ne = re, se = fe;
                    break;
                case 3:
                    ie = le, ne = he, se = re;
                    break;
                case 4:
                    ie = fe, ne = le, se = re;
                    break;
                case 5:
                    ie = re, ne = le, se = he;
                    break
            }
            return [ie, ne, se]
        }

        function RGBtoHSV(te, ee, re) {
            var ie = Math.max(te, ee, re),
                ne = Math.min(te, ee, re),
                se = ie - ne,
                ae, oe = ie === 0 ? 0 : se / ie,
                le = ie / 255;
            switch (ie) {
                case ne:
                    ae = 0;
                    break;
                case te:
                    ae = ee - re + se * (ee < re ? 6 : 0), ae /= 6 * se;
                    break;
                case ee:
                    ae = re - te + se * 2, ae /= 6 * se;
                    break;
                case re:
                    ae = te - ee + se * 4, ae /= 6 * se;
                    break
            }
            return [ae, oe, le]
        }

        function addSaturationToRGB(te, ee) {
            var re = RGBtoHSV(te[0] * 255, te[1] * 255, te[2] * 255);
            return re[1] += ee, re[1] > 1 ? re[1] = 1 : re[1] <= 0 && (re[1] = 0), HSVtoRGB(re[0], re[1], re[2])
        }

        function addBrightnessToRGB(te, ee) {
            var re = RGBtoHSV(te[0] * 255, te[1] * 255, te[2] * 255);
            return re[2] += ee, re[2] > 1 ? re[2] = 1 : re[2] < 0 && (re[2] = 0), HSVtoRGB(re[0], re[1], re[2])
        }

        function addHueToRGB(te, ee) {
            var re = RGBtoHSV(te[0] * 255, te[1] * 255, te[2] * 255);
            return re[0] += ee / 360, re[0] > 1 ? re[0] -= 1 : re[0] < 0 && (re[0] += 1), HSVtoRGB(re[0], re[1], re[2])
        }
        var rgbToHex = function () {
                var te = [],
                    ee, re;
                for (ee = 0; ee < 256; ee += 1) re = ee.toString(16), te[ee] = re.length === 1 ? "0" + re : re;
                return function (ie, ne, se) {
                    return ie < 0 && (ie = 0), ne < 0 && (ne = 0), se < 0 && (se = 0), "#" + te[ie] + te[ne] + te[se]
                }
            }(),
            setSubframeEnabled = function (ee) {
                subframeEnabled = !!ee
            },
            getSubframeEnabled = function () {
                return subframeEnabled
            },
            setExpressionsPlugin = function (ee) {
                expressionsPlugin = ee
            },
            getExpressionsPlugin = function () {
                return expressionsPlugin
            },
            setExpressionInterfaces = function (ee) {
                expressionsInterfaces = ee
            },
            getExpressionInterfaces = function () {
                return expressionsInterfaces
            },
            setDefaultCurveSegments = function (ee) {
                defaultCurveSegments = ee
            },
            getDefaultCurveSegments = function () {
                return defaultCurveSegments
            },
            setIdPrefix = function (ee) {
                idPrefix$1 = ee
            };

        function createNS(te) {
            return document.createElementNS(svgNS, te)
        }

        function _typeof$5(te) {
            "@babel/helpers - typeof";
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$5 = function (re) {
                return typeof re
            } : _typeof$5 = function (re) {
                return re && typeof Symbol == "function" && re.constructor === Symbol && re !== Symbol.prototype ? "symbol" : typeof re
            }, _typeof$5(te)
        }
        var dataManager = function () {
                var te = 1,
                    ee = [],
                    re, ie, ne = {
                        onmessage: function () {},
                        postMessage: function (de) {
                            re({
                                data: de
                            })
                        }
                    },
                    se = {
                        postMessage: function (de) {
                            ne.onmessage({
                                data: de
                            })
                        }
                    };

                function ae(ue) {
                    if (window.Worker && window.Blob && getWebWorker()) {
                        var de = new Blob(["var _workerSelf = self; self.onmessage = ", ue.toString()], {
                                type: "text/javascript"
                            }),
                            me = URL.createObjectURL(de);
                        return new Worker(me)
                    }
                    return re = ue, ne
                }

                function oe() {
                    ie || (ie = ae(function (de) {
                        function me() {
                            function Ce(Ie, Se) {
                                var Ae, be, De = Ie.length,
                                    Te, ke, Ve, We;
                                for (be = 0; be < De; be += 1)
                                    if (Ae = Ie[be], "ks" in Ae && !Ae.completed) {
                                        if (Ae.completed = !0, Ae.hasMask) {
                                            var Ne = Ae.masksProperties;
                                            for (ke = Ne.length, Te = 0; Te < ke; Te += 1)
                                                if (Ne[Te].pt.k.i) Ee(Ne[Te].pt.k);
                                                else
                                                    for (We = Ne[Te].pt.k.length, Ve = 0; Ve < We; Ve += 1) Ne[Te].pt.k[Ve].s && Ee(Ne[Te].pt.k[Ve].s[0]), Ne[Te].pt.k[Ve].e && Ee(Ne[Te].pt.k[Ve].e[0])
                                        }
                                        Ae.ty === 0 ? (Ae.layers = ge(Ae.refId, Se), Ce(Ae.layers, Se)) : Ae.ty === 4 ? ye(Ae.shapes) : Ae.ty === 5 && $e(Ae)
                                    }
                            }

                            function pe(Ie, Se) {
                                if (Ie) {
                                    var Ae = 0,
                                        be = Ie.length;
                                    for (Ae = 0; Ae < be; Ae += 1) Ie[Ae].t === 1 && (Ie[Ae].data.layers = ge(Ie[Ae].data.refId, Se), Ce(Ie[Ae].data.layers, Se))
                                }
                            }

                            function ve(Ie, Se) {
                                for (var Ae = 0, be = Se.length; Ae < be;) {
                                    if (Se[Ae].id === Ie) return Se[Ae];
                                    Ae += 1
                                }
                                return null
                            }

                            function ge(Ie, Se) {
                                var Ae = ve(Ie, Se);
                                return Ae ? Ae.layers.__used ? JSON.parse(JSON.stringify(Ae.layers)) : (Ae.layers.__used = !0, Ae.layers) : null
                            }

                            function ye(Ie) {
                                var Se, Ae = Ie.length,
                                    be, De;
                                for (Se = Ae - 1; Se >= 0; Se -= 1)
                                    if (Ie[Se].ty === "sh")
                                        if (Ie[Se].ks.k.i) Ee(Ie[Se].ks.k);
                                        else
                                            for (De = Ie[Se].ks.k.length, be = 0; be < De; be += 1) Ie[Se].ks.k[be].s && Ee(Ie[Se].ks.k[be].s[0]), Ie[Se].ks.k[be].e && Ee(Ie[Se].ks.k[be].e[0]);
                                else Ie[Se].ty === "gr" && ye(Ie[Se].it)
                            }

                            function Ee(Ie) {
                                var Se, Ae = Ie.i.length;
                                for (Se = 0; Se < Ae; Se += 1) Ie.i[Se][0] += Ie.v[Se][0], Ie.i[Se][1] += Ie.v[Se][1], Ie.o[Se][0] += Ie.v[Se][0], Ie.o[Se][1] += Ie.v[Se][1]
                            }

                            function Pe(Ie, Se) {
                                var Ae = Se ? Se.split(".") : [100, 100, 100];
                                return Ie[0] > Ae[0] ? !0 : Ae[0] > Ie[0] ? !1 : Ie[1] > Ae[1] ? !0 : Ae[1] > Ie[1] ? !1 : Ie[2] > Ae[2] ? !0 : Ae[2] > Ie[2] ? !1 : null
                            }
                            var xe = function () {
                                    var Ie = [4, 4, 14];

                                    function Se(be) {
                                        var De = be.t.d;
                                        be.t.d = {
                                            k: [{
                                                s: De,
                                                t: 0
                                            }]
                                        }
                                    }

                                    function Ae(be) {
                                        var De, Te = be.length;
                                        for (De = 0; De < Te; De += 1) be[De].ty === 5 && Se(be[De])
                                    }
                                    return function (be) {
                                        if (Pe(Ie, be.v) && (Ae(be.layers), be.assets)) {
                                            var De, Te = be.assets.length;
                                            for (De = 0; De < Te; De += 1) be.assets[De].layers && Ae(be.assets[De].layers)
                                        }
                                    }
                                }(),
                                we = function () {
                                    var Ie = [4, 7, 99];
                                    return function (Se) {
                                        if (Se.chars && !Pe(Ie, Se.v)) {
                                            var Ae, be = Se.chars.length;
                                            for (Ae = 0; Ae < be; Ae += 1) {
                                                var De = Se.chars[Ae];
                                                De.data && De.data.shapes && (ye(De.data.shapes), De.data.ip = 0, De.data.op = 99999, De.data.st = 0, De.data.sr = 1, De.data.ks = {
                                                    p: {
                                                        k: [0, 0],
                                                        a: 0
                                                    },
                                                    s: {
                                                        k: [100, 100],
                                                        a: 0
                                                    },
                                                    a: {
                                                        k: [0, 0],
                                                        a: 0
                                                    },
                                                    r: {
                                                        k: 0,
                                                        a: 0
                                                    },
                                                    o: {
                                                        k: 100,
                                                        a: 0
                                                    }
                                                }, Se.chars[Ae].t || (De.data.shapes.push({
                                                    ty: "no"
                                                }), De.data.shapes[0].it.push({
                                                    p: {
                                                        k: [0, 0],
                                                        a: 0
                                                    },
                                                    s: {
                                                        k: [100, 100],
                                                        a: 0
                                                    },
                                                    a: {
                                                        k: [0, 0],
                                                        a: 0
                                                    },
                                                    r: {
                                                        k: 0,
                                                        a: 0
                                                    },
                                                    o: {
                                                        k: 100,
                                                        a: 0
                                                    },
                                                    sk: {
                                                        k: 0,
                                                        a: 0
                                                    },
                                                    sa: {
                                                        k: 0,
                                                        a: 0
                                                    },
                                                    ty: "tr"
                                                })))
                                            }
                                        }
                                    }
                                }(),
                                Fe = function () {
                                    var Ie = [5, 7, 15];

                                    function Se(be) {
                                        var De = be.t.p;
                                        typeof De.a == "number" && (De.a = {
                                            a: 0,
                                            k: De.a
                                        }), typeof De.p == "number" && (De.p = {
                                            a: 0,
                                            k: De.p
                                        }), typeof De.r == "number" && (De.r = {
                                            a: 0,
                                            k: De.r
                                        })
                                    }

                                    function Ae(be) {
                                        var De, Te = be.length;
                                        for (De = 0; De < Te; De += 1) be[De].ty === 5 && Se(be[De])
                                    }
                                    return function (be) {
                                        if (Pe(Ie, be.v) && (Ae(be.layers), be.assets)) {
                                            var De, Te = be.assets.length;
                                            for (De = 0; De < Te; De += 1) be.assets[De].layers && Ae(be.assets[De].layers)
                                        }
                                    }
                                }(),
                                Le = function () {
                                    var Ie = [4, 1, 9];

                                    function Se(be) {
                                        var De, Te = be.length,
                                            ke, Ve;
                                        for (De = 0; De < Te; De += 1)
                                            if (be[De].ty === "gr") Se(be[De].it);
                                            else if (be[De].ty === "fl" || be[De].ty === "st")
                                            if (be[De].c.k && be[De].c.k[0].i)
                                                for (Ve = be[De].c.k.length, ke = 0; ke < Ve; ke += 1) be[De].c.k[ke].s && (be[De].c.k[ke].s[0] /= 255, be[De].c.k[ke].s[1] /= 255, be[De].c.k[ke].s[2] /= 255, be[De].c.k[ke].s[3] /= 255), be[De].c.k[ke].e && (be[De].c.k[ke].e[0] /= 255, be[De].c.k[ke].e[1] /= 255, be[De].c.k[ke].e[2] /= 255, be[De].c.k[ke].e[3] /= 255);
                                            else be[De].c.k[0] /= 255, be[De].c.k[1] /= 255, be[De].c.k[2] /= 255, be[De].c.k[3] /= 255
                                    }

                                    function Ae(be) {
                                        var De, Te = be.length;
                                        for (De = 0; De < Te; De += 1) be[De].ty === 4 && Se(be[De].shapes)
                                    }
                                    return function (be) {
                                        if (Pe(Ie, be.v) && (Ae(be.layers), be.assets)) {
                                            var De, Te = be.assets.length;
                                            for (De = 0; De < Te; De += 1) be.assets[De].layers && Ae(be.assets[De].layers)
                                        }
                                    }
                                }(),
                                Re = function () {
                                    var Ie = [4, 4, 18];

                                    function Se(be) {
                                        var De, Te = be.length,
                                            ke, Ve;
                                        for (De = Te - 1; De >= 0; De -= 1)
                                            if (be[De].ty === "sh")
                                                if (be[De].ks.k.i) be[De].ks.k.c = be[De].closed;
                                                else
                                                    for (Ve = be[De].ks.k.length, ke = 0; ke < Ve; ke += 1) be[De].ks.k[ke].s && (be[De].ks.k[ke].s[0].c = be[De].closed), be[De].ks.k[ke].e && (be[De].ks.k[ke].e[0].c = be[De].closed);
                                        else be[De].ty === "gr" && Se(be[De].it)
                                    }

                                    function Ae(be) {
                                        var De, Te, ke = be.length,
                                            Ve, We, Ne, He;
                                        for (Te = 0; Te < ke; Te += 1) {
                                            if (De = be[Te], De.hasMask) {
                                                var qe = De.masksProperties;
                                                for (We = qe.length, Ve = 0; Ve < We; Ve += 1)
                                                    if (qe[Ve].pt.k.i) qe[Ve].pt.k.c = qe[Ve].cl;
                                                    else
                                                        for (He = qe[Ve].pt.k.length, Ne = 0; Ne < He; Ne += 1) qe[Ve].pt.k[Ne].s && (qe[Ve].pt.k[Ne].s[0].c = qe[Ve].cl), qe[Ve].pt.k[Ne].e && (qe[Ve].pt.k[Ne].e[0].c = qe[Ve].cl)
                                            }
                                            De.ty === 4 && Se(De.shapes)
                                        }
                                    }
                                    return function (be) {
                                        if (Pe(Ie, be.v) && (Ae(be.layers), be.assets)) {
                                            var De, Te = be.assets.length;
                                            for (De = 0; De < Te; De += 1) be.assets[De].layers && Ae(be.assets[De].layers)
                                        }
                                    }
                                }();

                            function Me(Ie) {
                                Ie.__complete || (Le(Ie), xe(Ie), we(Ie), Fe(Ie), Re(Ie), Ce(Ie.layers, Ie.assets), pe(Ie.chars, Ie.assets), Ie.__complete = !0)
                            }

                            function $e(Ie) {
                                Ie.t.a.length === 0 && "m" in Ie.t.p
                            }
                            var Be = {};
                            return Be.completeData = Me, Be.checkColors = Le, Be.checkChars = we, Be.checkPathProperties = Fe, Be.checkShapes = Re, Be.completeLayers = Ce, Be
                        }
                        if (se.dataManager || (se.dataManager = me()), se.assetLoader || (se.assetLoader = function () {
                                function Ce(ve) {
                                    var ge = ve.getResponseHeader("content-type");
                                    return ge && ve.responseType === "json" && ge.indexOf("json") !== -1 || ve.response && _typeof$5(ve.response) === "object" ? ve.response : ve.response && typeof ve.response == "string" ? JSON.parse(ve.response) : ve.responseText ? JSON.parse(ve.responseText) : null
                                }

                                function pe(ve, ge, ye, Ee) {
                                    var Pe, xe = new XMLHttpRequest;
                                    try {
                                        xe.responseType = "json"
                                    } catch {}
                                    xe.onreadystatechange = function () {
                                        if (xe.readyState === 4)
                                            if (xe.status === 200) Pe = Ce(xe), ye(Pe);
                                            else try {
                                                Pe = Ce(xe), ye(Pe)
                                            } catch (we) {
                                                Ee && Ee(we)
                                            }
                                    };
                                    try {
                                        xe.open(["G", "E", "T"].join(""), ve, !0)
                                    } catch {
                                        xe.open(["G", "E", "T"].join(""), ge + "/" + ve, !0)
                                    }
                                    xe.send()
                                }
                                return {
                                    load: pe
                                }
                            }()), de.data.type === "loadAnimation") se.assetLoader.load(de.data.path, de.data.fullPath, function (Ce) {
                            se.dataManager.completeData(Ce), se.postMessage({
                                id: de.data.id,
                                payload: Ce,
                                status: "success"
                            })
                        }, function () {
                            se.postMessage({
                                id: de.data.id,
                                status: "error"
                            })
                        });
                        else if (de.data.type === "complete") {
                            var ce = de.data.animation;
                            se.dataManager.completeData(ce), se.postMessage({
                                id: de.data.id,
                                payload: ce,
                                status: "success"
                            })
                        } else de.data.type === "loadData" && se.assetLoader.load(de.data.path, de.data.fullPath, function (Ce) {
                            se.postMessage({
                                id: de.data.id,
                                payload: Ce,
                                status: "success"
                            })
                        }, function () {
                            se.postMessage({
                                id: de.data.id,
                                status: "error"
                            })
                        })
                    }), ie.onmessage = function (ue) {
                        var de = ue.data,
                            me = de.id,
                            ce = ee[me];
                        ee[me] = null, de.status === "success" ? ce.onComplete(de.payload) : ce.onError && ce.onError()
                    })
                }

                function le(ue, de) {
                    te += 1;
                    var me = "processId_" + te;
                    return ee[me] = {
                        onComplete: ue,
                        onError: de
                    }, me
                }

                function he(ue, de, me) {
                    oe();
                    var ce = le(de, me);
                    ie.postMessage({
                        type: "loadAnimation",
                        path: ue,
                        fullPath: window.location.origin + window.location.pathname,
                        id: ce
                    })
                }

                function fe(ue, de, me) {
                    oe();
                    var ce = le(de, me);
                    ie.postMessage({
                        type: "loadData",
                        path: ue,
                        fullPath: window.location.origin + window.location.pathname,
                        id: ce
                    })
                }

                function _e(ue, de, me) {
                    oe();
                    var ce = le(de, me);
                    ie.postMessage({
                        type: "complete",
                        animation: ue,
                        id: ce
                    })
                }
                return {
                    loadAnimation: he,
                    loadData: fe,
                    completeAnimation: _e
                }
            }(),
            ImagePreloader = function () {
                var te = function () {
                    var pe = createTag("canvas");
                    pe.width = 1, pe.height = 1;
                    var ve = pe.getContext("2d");
                    return ve.fillStyle = "rgba(0,0,0,0)", ve.fillRect(0, 0, 1, 1), pe
                }();

                function ee() {
                    this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                }

                function re() {
                    this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                }

                function ie(pe, ve, ge) {
                    var ye = "";
                    if (pe.e) ye = pe.p;
                    else if (ve) {
                        var Ee = pe.p;
                        Ee.indexOf("images/") !== -1 && (Ee = Ee.split("/")[1]), ye = ve + Ee
                    } else ye = ge, ye += pe.u ? pe.u : "", ye += pe.p;
                    return ye
                }

                function ne(pe) {
                    var ve = 0,
                        ge = setInterval((function () {
                            var ye = pe.getBBox();
                            (ye.width || ve > 500) && (this._imageLoaded(), clearInterval(ge)), ve += 1
                        }).bind(this), 50)
                }

                function se(pe) {
                    var ve = ie(pe, this.assetsPath, this.path),
                        ge = createNS("image");
                    isSafari ? this.testImageLoaded(ge) : ge.addEventListener("load", this._imageLoaded, !1), ge.addEventListener("error", (function () {
                        ye.img = te, this._imageLoaded()
                    }).bind(this), !1), ge.setAttributeNS("http://www.w3.org/1999/xlink", "href", ve), this._elementHelper.append ? this._elementHelper.append(ge) : this._elementHelper.appendChild(ge);
                    var ye = {
                        img: ge,
                        assetData: pe
                    };
                    return ye
                }

                function ae(pe) {
                    var ve = ie(pe, this.assetsPath, this.path),
                        ge = createTag("img");
                    ge.crossOrigin = "anonymous", ge.addEventListener("load", this._imageLoaded, !1), ge.addEventListener("error", (function () {
                        ye.img = te, this._imageLoaded()
                    }).bind(this), !1), ge.src = ve;
                    var ye = {
                        img: ge,
                        assetData: pe
                    };
                    return ye
                }

                function oe(pe) {
                    var ve = {
                            assetData: pe
                        },
                        ge = ie(pe, this.assetsPath, this.path);
                    return dataManager.loadData(ge, (function (ye) {
                        ve.img = ye, this._footageLoaded()
                    }).bind(this), (function () {
                        ve.img = {}, this._footageLoaded()
                    }).bind(this)), ve
                }

                function le(pe, ve) {
                    this.imagesLoadedCb = ve;
                    var ge, ye = pe.length;
                    for (ge = 0; ge < ye; ge += 1) pe[ge].layers || (!pe[ge].t || pe[ge].t === "seq" ? (this.totalImages += 1, this.images.push(this._createImageData(pe[ge]))) : pe[ge].t === 3 && (this.totalFootages += 1, this.images.push(this.createFootageData(pe[ge]))))
                }

                function he(pe) {
                    this.path = pe || ""
                }

                function fe(pe) {
                    this.assetsPath = pe || ""
                }

                function _e(pe) {
                    for (var ve = 0, ge = this.images.length; ve < ge;) {
                        if (this.images[ve].assetData === pe) return this.images[ve].img;
                        ve += 1
                    }
                    return null
                }

                function ue() {
                    this.imagesLoadedCb = null, this.images.length = 0
                }

                function de() {
                    return this.totalImages === this.loadedAssets
                }

                function me() {
                    return this.totalFootages === this.loadedFootagesCount
                }

                function ce(pe, ve) {
                    pe === "svg" ? (this._elementHelper = ve, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this)
                }

                function Ce() {
                    this._imageLoaded = ee.bind(this), this._footageLoaded = re.bind(this), this.testImageLoaded = ne.bind(this), this.createFootageData = oe.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = []
                }
                return Ce.prototype = {
                    loadAssets: le,
                    setAssetsPath: fe,
                    setPath: he,
                    loadedImages: de,
                    loadedFootages: me,
                    destroy: ue,
                    getAsset: _e,
                    createImgData: ae,
                    createImageData: se,
                    imageLoaded: ee,
                    footageLoaded: re,
                    setCacheType: ce
                }, Ce
            }();

        function BaseEvent() {}
        BaseEvent.prototype = {
            triggerEvent: function (ee, re) {
                if (this._cbs[ee])
                    for (var ie = this._cbs[ee], ne = 0; ne < ie.length; ne += 1) ie[ne](re)
            },
            addEventListener: function (ee, re) {
                return this._cbs[ee] || (this._cbs[ee] = []), this._cbs[ee].push(re), (function () {
                    this.removeEventListener(ee, re)
                }).bind(this)
            },
            removeEventListener: function (ee, re) {
                if (!re) this._cbs[ee] = null;
                else if (this._cbs[ee]) {
                    for (var ie = 0, ne = this._cbs[ee].length; ie < ne;) this._cbs[ee][ie] === re && (this._cbs[ee].splice(ie, 1), ie -= 1, ne -= 1), ie += 1;
                    this._cbs[ee].length || (this._cbs[ee] = null)
                }
            }
        };
        var markerParser = function () {
                function te(ee) {
                    for (var re = ee.split(`\r
`), ie = {}, ne, se = 0, ae = 0; ae < re.length; ae += 1) ne = re[ae].split(":"), ne.length === 2 && (ie[ne[0]] = ne[1].trim(), se += 1);
                    if (se === 0) throw new Error;
                    return ie
                }
                return function (ee) {
                    for (var re = [], ie = 0; ie < ee.length; ie += 1) {
                        var ne = ee[ie],
                            se = {
                                time: ne.tm,
                                duration: ne.dr
                            };
                        try {
                            se.payload = JSON.parse(ee[ie].cm)
                        } catch {
                            try {
                                se.payload = te(ee[ie].cm)
                            } catch {
                                se.payload = {
                                    name: ee[ie].cm
                                }
                            }
                        }
                        re.push(se)
                    }
                    return re
                }
            }(),
            ProjectInterface = function () {
                function te(ee) {
                    this.compositions.push(ee)
                }
                return function () {
                    function ee(re) {
                        for (var ie = 0, ne = this.compositions.length; ie < ne;) {
                            if (this.compositions[ie].data && this.compositions[ie].data.nm === re) return this.compositions[ie].prepareFrame && this.compositions[ie].data.xt && this.compositions[ie].prepareFrame(this.currentFrame), this.compositions[ie].compInterface;
                            ie += 1
                        }
                        return null
                    }
                    return ee.compositions = [], ee.currentFrame = 0, ee.registerComposition = te, ee
                }
            }(),
            renderers = {},
            registerRenderer = function (ee, re) {
                renderers[ee] = re
            };

        function getRenderer(te) {
            return renderers[te]
        }

        function getRegisteredRenderer() {
            if (renderers.canvas) return "canvas";
            for (var te in renderers)
                if (renderers[te]) return te;
            return ""
        }

        function _typeof$4(te) {
            "@babel/helpers - typeof";
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$4 = function (re) {
                return typeof re
            } : _typeof$4 = function (re) {
                return re && typeof Symbol == "function" && re.constructor === Symbol && re !== Symbol.prototype ? "symbol" : typeof re
            }, _typeof$4(te)
        }
        var AnimationItem = function () {
            this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = getSubframeEnabled(), this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader, this.audioController = audioControllerFactory(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame", 0, 0, 0), this.expressionsPlugin = getExpressionsPlugin()
        };
        extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function (te) {
            (te.wrapper || te.container) && (this.wrapper = te.wrapper || te.container);
            var ee = "svg";
            te.animType ? ee = te.animType : te.renderer && (ee = te.renderer);
            var re = getRenderer(ee);
            this.renderer = new re(this, te.rendererSettings), this.imagePreloader.setCacheType(ee, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = ee, te.loop === "" || te.loop === null || te.loop === void 0 || te.loop === !0 ? this.loop = !0 : te.loop === !1 ? this.loop = !1 : this.loop = parseInt(te.loop, 10), this.autoplay = "autoplay" in te ? te.autoplay : !0, this.name = te.name ? te.name : "", this.autoloadSegments = Object.prototype.hasOwnProperty.call(te, "autoloadSegments") ? te.autoloadSegments : !0, this.assetsPath = te.assetsPath, this.initialSegment = te.initialSegment, te.audioFactory && this.audioController.setAudioFactory(te.audioFactory), te.animationData ? this.setupAnimation(te.animationData) : te.path && (te.path.lastIndexOf("\\") !== -1 ? this.path = te.path.substr(0, te.path.lastIndexOf("\\") + 1) : this.path = te.path.substr(0, te.path.lastIndexOf("/") + 1), this.fileName = te.path.substr(te.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), dataManager.loadAnimation(te.path, this.configAnimation, this.onSetupError))
        }, AnimationItem.prototype.onSetupError = function () {
            this.trigger("data_failed")
        }, AnimationItem.prototype.setupAnimation = function (te) {
            dataManager.completeAnimation(te, this.configAnimation)
        }, AnimationItem.prototype.setData = function (te, ee) {
            ee && _typeof$4(ee) !== "object" && (ee = JSON.parse(ee));
            var re = {
                    wrapper: te,
                    animationData: ee
                },
                ie = te.attributes;
            re.path = ie.getNamedItem("data-animation-path") ? ie.getNamedItem("data-animation-path").value : ie.getNamedItem("data-bm-path") ? ie.getNamedItem("data-bm-path").value : ie.getNamedItem("bm-path") ? ie.getNamedItem("bm-path").value : "", re.animType = ie.getNamedItem("data-anim-type") ? ie.getNamedItem("data-anim-type").value : ie.getNamedItem("data-bm-type") ? ie.getNamedItem("data-bm-type").value : ie.getNamedItem("bm-type") ? ie.getNamedItem("bm-type").value : ie.getNamedItem("data-bm-renderer") ? ie.getNamedItem("data-bm-renderer").value : ie.getNamedItem("bm-renderer") ? ie.getNamedItem("bm-renderer").value : getRegisteredRenderer() || "canvas";
            var ne = ie.getNamedItem("data-anim-loop") ? ie.getNamedItem("data-anim-loop").value : ie.getNamedItem("data-bm-loop") ? ie.getNamedItem("data-bm-loop").value : ie.getNamedItem("bm-loop") ? ie.getNamedItem("bm-loop").value : "";
            ne === "false" ? re.loop = !1 : ne === "true" ? re.loop = !0 : ne !== "" && (re.loop = parseInt(ne, 10));
            var se = ie.getNamedItem("data-anim-autoplay") ? ie.getNamedItem("data-anim-autoplay").value : ie.getNamedItem("data-bm-autoplay") ? ie.getNamedItem("data-bm-autoplay").value : ie.getNamedItem("bm-autoplay") ? ie.getNamedItem("bm-autoplay").value : !0;
            re.autoplay = se !== "false", re.name = ie.getNamedItem("data-name") ? ie.getNamedItem("data-name").value : ie.getNamedItem("data-bm-name") ? ie.getNamedItem("data-bm-name").value : ie.getNamedItem("bm-name") ? ie.getNamedItem("bm-name").value : "";
            var ae = ie.getNamedItem("data-anim-prerender") ? ie.getNamedItem("data-anim-prerender").value : ie.getNamedItem("data-bm-prerender") ? ie.getNamedItem("data-bm-prerender").value : ie.getNamedItem("bm-prerender") ? ie.getNamedItem("bm-prerender").value : "";
            ae === "false" && (re.prerender = !1), re.path ? this.setParams(re) : this.trigger("destroy")
        }, AnimationItem.prototype.includeLayers = function (te) {
            te.op > this.animationData.op && (this.animationData.op = te.op, this.totalFrames = Math.floor(te.op - this.animationData.ip));
            var ee = this.animationData.layers,
                re, ie = ee.length,
                ne = te.layers,
                se, ae = ne.length;
            for (se = 0; se < ae; se += 1)
                for (re = 0; re < ie;) {
                    if (ee[re].id === ne[se].id) {
                        ee[re] = ne[se];
                        break
                    }
                    re += 1
                }
            if ((te.chars || te.fonts) && (this.renderer.globalData.fontManager.addChars(te.chars), this.renderer.globalData.fontManager.addFonts(te.fonts, this.renderer.globalData.defs)), te.assets)
                for (ie = te.assets.length, re = 0; re < ie; re += 1) this.animationData.assets.push(te.assets[re]);
            this.animationData.__complete = !1, dataManager.completeAnimation(this.animationData, this.onSegmentComplete)
        }, AnimationItem.prototype.onSegmentComplete = function (te) {
            this.animationData = te;
            var ee = getExpressionsPlugin();
            ee && ee.initExpressions(this), this.loadNextSegment()
        }, AnimationItem.prototype.loadNextSegment = function () {
            var te = this.animationData.segments;
            if (!te || te.length === 0 || !this.autoloadSegments) {
                this.trigger("data_ready"), this.timeCompleted = this.totalFrames;
                return
            }
            var ee = te.shift();
            this.timeCompleted = ee.time * this.frameRate;
            var re = this.path + this.fileName + "_" + this.segmentPos + ".json";
            this.segmentPos += 1, dataManager.loadData(re, this.includeLayers.bind(this), (function () {
                this.trigger("data_failed")
            }).bind(this))
        }, AnimationItem.prototype.loadSegments = function () {
            var te = this.animationData.segments;
            te || (this.timeCompleted = this.totalFrames), this.loadNextSegment()
        }, AnimationItem.prototype.imagesLoaded = function () {
            this.trigger("loaded_images"), this.checkLoaded()
        }, AnimationItem.prototype.preloadImages = function () {
            this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
        }, AnimationItem.prototype.configAnimation = function (te) {
            if (this.renderer) try {
                this.animationData = te, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(te), te.assets || (te.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(te.assets), this.markers = markerParser(te.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause()
            } catch (ee) {
                this.triggerConfigError(ee)
            }
        }, AnimationItem.prototype.waitForFontsLoaded = function () {
            this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
        }, AnimationItem.prototype.checkLoaded = function () {
            if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || this.renderer.rendererType !== "canvas") && this.imagePreloader.loadedFootages()) {
                this.isLoaded = !0;
                var te = getExpressionsPlugin();
                te && te.initExpressions(this), this.renderer.initItems(), setTimeout((function () {
                    this.trigger("DOMLoaded")
                }).bind(this), 0), this.gotoFrame(), this.autoplay && this.play()
            }
        }, AnimationItem.prototype.resize = function (te, ee) {
            var re = typeof te == "number" ? te : void 0,
                ie = typeof ee == "number" ? ee : void 0;
            this.renderer.updateContainerSize(re, ie)
        }, AnimationItem.prototype.setSubframe = function (te) {
            this.isSubframeEnabled = !!te
        }, AnimationItem.prototype.gotoFrame = function () {
            this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame")
        }, AnimationItem.prototype.renderFrame = function () {
            if (!(this.isLoaded === !1 || !this.renderer)) try {
                this.expressionsPlugin && this.expressionsPlugin.resetFrame(), this.renderer.renderFrame(this.currentFrame + this.firstFrame)
            } catch (te) {
                this.triggerRenderFrameError(te)
            }
        }, AnimationItem.prototype.play = function (te) {
            te && this.name !== te || this.isPaused === !0 && (this.isPaused = !1, this.trigger("_play"), this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")))
        }, AnimationItem.prototype.pause = function (te) {
            te && this.name !== te || this.isPaused === !1 && (this.isPaused = !0, this.trigger("_pause"), this._idle = !0, this.trigger("_idle"), this.audioController.pause())
        }, AnimationItem.prototype.togglePause = function (te) {
            te && this.name !== te || (this.isPaused === !0 ? this.play() : this.pause())
        }, AnimationItem.prototype.stop = function (te) {
            te && this.name !== te || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0))
        }, AnimationItem.prototype.getMarkerData = function (te) {
            for (var ee, re = 0; re < this.markers.length; re += 1)
                if (ee = this.markers[re], ee.payload && ee.payload.name === te) return ee;
            return null
        }, AnimationItem.prototype.goToAndStop = function (te, ee, re) {
            if (!(re && this.name !== re)) {
                var ie = Number(te);
                if (isNaN(ie)) {
                    var ne = this.getMarkerData(te);
                    ne && this.goToAndStop(ne.time, !0)
                } else ee ? this.setCurrentRawFrameValue(te) : this.setCurrentRawFrameValue(te * this.frameModifier);
                this.pause()
            }
        }, AnimationItem.prototype.goToAndPlay = function (te, ee, re) {
            if (!(re && this.name !== re)) {
                var ie = Number(te);
                if (isNaN(ie)) {
                    var ne = this.getMarkerData(te);
                    ne && (ne.duration ? this.playSegments([ne.time, ne.time + ne.duration], !0) : this.goToAndStop(ne.time, !0))
                } else this.goToAndStop(ie, ee, re);
                this.play()
            }
        }, AnimationItem.prototype.advanceTime = function (te) {
            if (!(this.isPaused === !0 || this.isLoaded === !1)) {
                var ee = this.currentRawFrame + te * this.frameModifier,
                    re = !1;
                ee >= this.totalFrames - 1 && this.frameModifier > 0 ? !this.loop || this.playCount === this.loop ? this.checkSegments(ee > this.totalFrames ? ee % this.totalFrames : 0) || (re = !0, ee = this.totalFrames - 1) : ee >= this.totalFrames ? (this.playCount += 1, this.checkSegments(ee % this.totalFrames) || (this.setCurrentRawFrameValue(ee % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(ee) : ee < 0 ? this.checkSegments(ee % this.totalFrames) || (this.loop && !(this.playCount-- <= 0 && this.loop !== !0) ? (this.setCurrentRawFrameValue(this.totalFrames + ee % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0) : (re = !0, ee = 0)) : this.setCurrentRawFrameValue(ee), re && (this.setCurrentRawFrameValue(ee), this.pause(), this.trigger("complete"))
            }
        }, AnimationItem.prototype.adjustSegment = function (te, ee) {
            this.playCount = 0, te[1] < te[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = te[0] - te[1], this.timeCompleted = this.totalFrames, this.firstFrame = te[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - ee)) : te[1] > te[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = te[1] - te[0], this.timeCompleted = this.totalFrames, this.firstFrame = te[0], this.setCurrentRawFrameValue(.001 + ee)), this.trigger("segmentStart")
        }, AnimationItem.prototype.setSegment = function (te, ee) {
            var re = -1;
            this.isPaused && (this.currentRawFrame + this.firstFrame < te ? re = te : this.currentRawFrame + this.firstFrame > ee && (re = ee - te)), this.firstFrame = te, this.totalFrames = ee - te, this.timeCompleted = this.totalFrames, re !== -1 && this.goToAndStop(re, !0)
        }, AnimationItem.prototype.playSegments = function (te, ee) {
            if (ee && (this.segments.length = 0), _typeof$4(te[0]) === "object") {
                var re, ie = te.length;
                for (re = 0; re < ie; re += 1) this.segments.push(te[re])
            } else this.segments.push(te);
            this.segments.length && ee && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play()
        }, AnimationItem.prototype.resetSegments = function (te) {
            this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), te && this.checkSegments(0)
        }, AnimationItem.prototype.checkSegments = function (te) {
            return this.segments.length ? (this.adjustSegment(this.segments.shift(), te), !0) : !1
        }, AnimationItem.prototype.destroy = function (te) {
            te && this.name !== te || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.expressionsPlugin = null, this.imagePreloader = null, this.projectInterface = null)
        }, AnimationItem.prototype.setCurrentRawFrameValue = function (te) {
            this.currentRawFrame = te, this.gotoFrame()
        }, AnimationItem.prototype.setSpeed = function (te) {
            this.playSpeed = te, this.updaFrameModifier()
        }, AnimationItem.prototype.setDirection = function (te) {
            this.playDirection = te < 0 ? -1 : 1, this.updaFrameModifier()
        }, AnimationItem.prototype.setLoop = function (te) {
            this.loop = te
        }, AnimationItem.prototype.setVolume = function (te, ee) {
            ee && this.name !== ee || this.audioController.setVolume(te)
        }, AnimationItem.prototype.getVolume = function () {
            return this.audioController.getVolume()
        }, AnimationItem.prototype.mute = function (te) {
            te && this.name !== te || this.audioController.mute()
        }, AnimationItem.prototype.unmute = function (te) {
            te && this.name !== te || this.audioController.unmute()
        }, AnimationItem.prototype.updaFrameModifier = function () {
            this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection)
        }, AnimationItem.prototype.getPath = function () {
            return this.path
        }, AnimationItem.prototype.getAssetsPath = function (te) {
            var ee = "";
            if (te.e) ee = te.p;
            else if (this.assetsPath) {
                var re = te.p;
                re.indexOf("images/") !== -1 && (re = re.split("/")[1]), ee = this.assetsPath + re
            } else ee = this.path, ee += te.u ? te.u : "", ee += te.p;
            return ee
        }, AnimationItem.prototype.getAssetData = function (te) {
            for (var ee = 0, re = this.assets.length; ee < re;) {
                if (te === this.assets[ee].id) return this.assets[ee];
                ee += 1
            }
            return null
        }, AnimationItem.prototype.hide = function () {
            this.renderer.hide()
        }, AnimationItem.prototype.show = function () {
            this.renderer.show()
        }, AnimationItem.prototype.getDuration = function (te) {
            return te ? this.totalFrames : this.totalFrames / this.frameRate
        }, AnimationItem.prototype.updateDocumentData = function (te, ee, re) {
            try {
                var ie = this.renderer.getElementByPath(te);
                ie.updateDocumentData(ee, re)
            } catch {}
        }, AnimationItem.prototype.trigger = function (te) {
            if (this._cbs && this._cbs[te]) switch (te) {
                case "enterFrame":
                    this.triggerEvent(te, new BMEnterFrameEvent(te, this.currentFrame, this.totalFrames, this.frameModifier));
                    break;
                case "drawnFrame":
                    this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(te, this.drawnFrameEvent);
                    break;
                case "loopComplete":
                    this.triggerEvent(te, new BMCompleteLoopEvent(te, this.loop, this.playCount, this.frameMult));
                    break;
                case "complete":
                    this.triggerEvent(te, new BMCompleteEvent(te, this.frameMult));
                    break;
                case "segmentStart":
                    this.triggerEvent(te, new BMSegmentStartEvent(te, this.firstFrame, this.totalFrames));
                    break;
                case "destroy":
                    this.triggerEvent(te, new BMDestroyEvent(te, this));
                    break;
                default:
                    this.triggerEvent(te)
            }
            te === "enterFrame" && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(te, this.currentFrame, this.totalFrames, this.frameMult)), te === "loopComplete" && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(te, this.loop, this.playCount, this.frameMult)), te === "complete" && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(te, this.frameMult)), te === "segmentStart" && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(te, this.firstFrame, this.totalFrames)), te === "destroy" && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(te, this))
        }, AnimationItem.prototype.triggerRenderFrameError = function (te) {
            var ee = new BMRenderFrameErrorEvent(te, this.currentFrame);
            this.triggerEvent("error", ee), this.onError && this.onError.call(this, ee)
        }, AnimationItem.prototype.triggerConfigError = function (te) {
            var ee = new BMConfigErrorEvent(te, this.currentFrame);
            this.triggerEvent("error", ee), this.onError && this.onError.call(this, ee)
        };
        var animationManager = function () {
                var te = {},
                    ee = [],
                    re = 0,
                    ie = 0,
                    ne = 0,
                    se = !0,
                    ae = !1;

                function oe(Se) {
                    for (var Ae = 0, be = Se.target; Ae < ie;) ee[Ae].animation === be && (ee.splice(Ae, 1), Ae -= 1, ie -= 1, be.isPaused || _e()), Ae += 1
                }

                function le(Se, Ae) {
                    if (!Se) return null;
                    for (var be = 0; be < ie;) {
                        if (ee[be].elem === Se && ee[be].elem !== null) return ee[be].animation;
                        be += 1
                    }
                    var De = new AnimationItem;
                    return ue(De, Se), De.setData(Se, Ae), De
                }

                function he() {
                    var Se, Ae = ee.length,
                        be = [];
                    for (Se = 0; Se < Ae; Se += 1) be.push(ee[Se].animation);
                    return be
                }

                function fe() {
                    ne += 1, Le()
                }

                function _e() {
                    ne -= 1
                }

                function ue(Se, Ae) {
                    Se.addEventListener("destroy", oe), Se.addEventListener("_active", fe), Se.addEventListener("_idle", _e), ee.push({
                        elem: Ae,
                        animation: Se
                    }), ie += 1
                }

                function de(Se) {
                    var Ae = new AnimationItem;
                    return ue(Ae, null), Ae.setParams(Se), Ae
                }

                function me(Se, Ae) {
                    var be;
                    for (be = 0; be < ie; be += 1) ee[be].animation.setSpeed(Se, Ae)
                }

                function ce(Se, Ae) {
                    var be;
                    for (be = 0; be < ie; be += 1) ee[be].animation.setDirection(Se, Ae)
                }

                function Ce(Se) {
                    var Ae;
                    for (Ae = 0; Ae < ie; Ae += 1) ee[Ae].animation.play(Se)
                }

                function pe(Se) {
                    var Ae = Se - re,
                        be;
                    for (be = 0; be < ie; be += 1) ee[be].animation.advanceTime(Ae);
                    re = Se, ne && !ae ? window.requestAnimationFrame(pe) : se = !0
                }

                function ve(Se) {
                    re = Se, window.requestAnimationFrame(pe)
                }

                function ge(Se) {
                    var Ae;
                    for (Ae = 0; Ae < ie; Ae += 1) ee[Ae].animation.pause(Se)
                }

                function ye(Se, Ae, be) {
                    var De;
                    for (De = 0; De < ie; De += 1) ee[De].animation.goToAndStop(Se, Ae, be)
                }

                function Ee(Se) {
                    var Ae;
                    for (Ae = 0; Ae < ie; Ae += 1) ee[Ae].animation.stop(Se)
                }

                function Pe(Se) {
                    var Ae;
                    for (Ae = 0; Ae < ie; Ae += 1) ee[Ae].animation.togglePause(Se)
                }

                function xe(Se) {
                    var Ae;
                    for (Ae = ie - 1; Ae >= 0; Ae -= 1) ee[Ae].animation.destroy(Se)
                }

                function we(Se, Ae, be) {
                    var De = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
                        Te, ke = De.length;
                    for (Te = 0; Te < ke; Te += 1) be && De[Te].setAttribute("data-bm-type", be), le(De[Te], Se);
                    if (Ae && ke === 0) {
                        be || (be = "svg");
                        var Ve = document.getElementsByTagName("body")[0];
                        Ve.innerText = "";
                        var We = createTag("div");
                        We.style.width = "100%", We.style.height = "100%", We.setAttribute("data-bm-type", be), Ve.appendChild(We), le(We, Se)
                    }
                }

                function Fe() {
                    var Se;
                    for (Se = 0; Se < ie; Se += 1) ee[Se].animation.resize()
                }

                function Le() {
                    !ae && ne && se && (window.requestAnimationFrame(ve), se = !1)
                }

                function Re() {
                    ae = !0
                }

                function Me() {
                    ae = !1, Le()
                }

                function $e(Se, Ae) {
                    var be;
                    for (be = 0; be < ie; be += 1) ee[be].animation.setVolume(Se, Ae)
                }

                function Be(Se) {
                    var Ae;
                    for (Ae = 0; Ae < ie; Ae += 1) ee[Ae].animation.mute(Se)
                }

                function Ie(Se) {
                    var Ae;
                    for (Ae = 0; Ae < ie; Ae += 1) ee[Ae].animation.unmute(Se)
                }
                return te.registerAnimation = le, te.loadAnimation = de, te.setSpeed = me, te.setDirection = ce, te.play = Ce, te.pause = ge, te.stop = Ee, te.togglePause = Pe, te.searchAnimations = we, te.resize = Fe, te.goToAndStop = ye, te.destroy = xe, te.freeze = Re, te.unfreeze = Me, te.setVolume = $e, te.mute = Be, te.unmute = Ie, te.getRegisteredAnimations = he, te
            }(),
            BezierFactory = function () {
                var te = {};
                te.getBezierEasing = re;
                var ee = {};

                function re(ve, ge, ye, Ee, Pe) {
                    var xe = Pe || ("bez_" + ve + "_" + ge + "_" + ye + "_" + Ee).replace(/\./g, "p");
                    if (ee[xe]) return ee[xe];
                    var we = new pe([ve, ge, ye, Ee]);
                    return ee[xe] = we, we
                }
                var ie = 4,
                    ne = .001,
                    se = 1e-7,
                    ae = 10,
                    oe = 11,
                    le = 1 / (oe - 1),
                    he = typeof Float32Array == "function";

                function fe(ve, ge) {
                    return 1 - 3 * ge + 3 * ve
                }

                function _e(ve, ge) {
                    return 3 * ge - 6 * ve
                }

                function ue(ve) {
                    return 3 * ve
                }

                function de(ve, ge, ye) {
                    return ((fe(ge, ye) * ve + _e(ge, ye)) * ve + ue(ge)) * ve
                }

                function me(ve, ge, ye) {
                    return 3 * fe(ge, ye) * ve * ve + 2 * _e(ge, ye) * ve + ue(ge)
                }

                function ce(ve, ge, ye, Ee, Pe) {
                    var xe, we, Fe = 0;
                    do we = ge + (ye - ge) / 2, xe = de(we, Ee, Pe) - ve, xe > 0 ? ye = we : ge = we; while (Math.abs(xe) > se && ++Fe < ae);
                    return we
                }

                function Ce(ve, ge, ye, Ee) {
                    for (var Pe = 0; Pe < ie; ++Pe) {
                        var xe = me(ge, ye, Ee);
                        if (xe === 0) return ge;
                        var we = de(ge, ye, Ee) - ve;
                        ge -= we / xe
                    }
                    return ge
                }

                function pe(ve) {
                    this._p = ve, this._mSampleValues = he ? new Float32Array(oe) : new Array(oe), this._precomputed = !1, this.get = this.get.bind(this)
                }
                return pe.prototype = {
                    get: function (ge) {
                        var ye = this._p[0],
                            Ee = this._p[1],
                            Pe = this._p[2],
                            xe = this._p[3];
                        return this._precomputed || this._precompute(), ye === Ee && Pe === xe ? ge : ge === 0 ? 0 : ge === 1 ? 1 : de(this._getTForX(ge), Ee, xe)
                    },
                    _precompute: function () {
                        var ge = this._p[0],
                            ye = this._p[1],
                            Ee = this._p[2],
                            Pe = this._p[3];
                        this._precomputed = !0, (ge !== ye || Ee !== Pe) && this._calcSampleValues()
                    },
                    _calcSampleValues: function () {
                        for (var ge = this._p[0], ye = this._p[2], Ee = 0; Ee < oe; ++Ee) this._mSampleValues[Ee] = de(Ee * le, ge, ye)
                    },
                    _getTForX: function (ge) {
                        for (var ye = this._p[0], Ee = this._p[2], Pe = this._mSampleValues, xe = 0, we = 1, Fe = oe - 1; we !== Fe && Pe[we] <= ge; ++we) xe += le;
                        --we;
                        var Le = (ge - Pe[we]) / (Pe[we + 1] - Pe[we]),
                            Re = xe + Le * le,
                            Me = me(Re, ye, Ee);
                        return Me >= ne ? Ce(ge, Re, ye, Ee) : Me === 0 ? Re : ce(ge, xe, xe + le, ye, Ee)
                    }
                }, te
            }(),
            pooling = function () {
                function te(ee) {
                    return ee.concat(createSizedArray(ee.length))
                }
                return {
                    double: te
                }
            }(),
            poolFactory = function () {
                return function (te, ee, re) {
                    var ie = 0,
                        ne = te,
                        se = createSizedArray(ne),
                        ae = {
                            newElement: oe,
                            release: le
                        };

                    function oe() {
                        var he;
                        return ie ? (ie -= 1, he = se[ie]) : he = ee(), he
                    }

                    function le(he) {
                        ie === ne && (se = pooling.double(se), ne *= 2), re && re(he), se[ie] = he, ie += 1
                    }
                    return ae
                }
            }(),
            bezierLengthPool = function () {
                function te() {
                    return {
                        addedLength: 0,
                        percents: createTypedArray("float32", getDefaultCurveSegments()),
                        lengths: createTypedArray("float32", getDefaultCurveSegments())
                    }
                }
                return poolFactory(8, te)
            }(),
            segmentsLengthPool = function () {
                function te() {
                    return {
                        lengths: [],
                        totalLength: 0
                    }
                }

                function ee(re) {
                    var ie, ne = re.lengths.length;
                    for (ie = 0; ie < ne; ie += 1) bezierLengthPool.release(re.lengths[ie]);
                    re.lengths.length = 0
                }
                return poolFactory(8, te, ee)
            }();

        function bezFunction() {
            var te = Math;

            function ee(ue, de, me, ce, Ce, pe) {
                var ve = ue * ce + de * Ce + me * pe - Ce * ce - pe * ue - me * de;
                return ve > -.001 && ve < .001
            }

            function re(ue, de, me, ce, Ce, pe, ve, ge, ye) {
                if (me === 0 && pe === 0 && ye === 0) return ee(ue, de, ce, Ce, ve, ge);
                var Ee = te.sqrt(te.pow(ce - ue, 2) + te.pow(Ce - de, 2) + te.pow(pe - me, 2)),
                    Pe = te.sqrt(te.pow(ve - ue, 2) + te.pow(ge - de, 2) + te.pow(ye - me, 2)),
                    xe = te.sqrt(te.pow(ve - ce, 2) + te.pow(ge - Ce, 2) + te.pow(ye - pe, 2)),
                    we;
                return Ee > Pe ? Ee > xe ? we = Ee - Pe - xe : we = xe - Pe - Ee : xe > Pe ? we = xe - Pe - Ee : we = Pe - Ee - xe, we > -1e-4 && we < 1e-4
            }
            var ie = function () {
                return function (ue, de, me, ce) {
                    var Ce = getDefaultCurveSegments(),
                        pe, ve, ge, ye, Ee, Pe = 0,
                        xe, we = [],
                        Fe = [],
                        Le = bezierLengthPool.newElement();
                    for (ge = me.length, pe = 0; pe < Ce; pe += 1) {
                        for (Ee = pe / (Ce - 1), xe = 0, ve = 0; ve < ge; ve += 1) ye = bmPow(1 - Ee, 3) * ue[ve] + 3 * bmPow(1 - Ee, 2) * Ee * me[ve] + 3 * (1 - Ee) * bmPow(Ee, 2) * ce[ve] + bmPow(Ee, 3) * de[ve], we[ve] = ye, Fe[ve] !== null && (xe += bmPow(we[ve] - Fe[ve], 2)), Fe[ve] = we[ve];
                        xe && (xe = bmSqrt(xe), Pe += xe), Le.percents[pe] = Ee, Le.lengths[pe] = Pe
                    }
                    return Le.addedLength = Pe, Le
                }
            }();

            function ne(ue) {
                var de = segmentsLengthPool.newElement(),
                    me = ue.c,
                    ce = ue.v,
                    Ce = ue.o,
                    pe = ue.i,
                    ve, ge = ue._length,
                    ye = de.lengths,
                    Ee = 0;
                for (ve = 0; ve < ge - 1; ve += 1) ye[ve] = ie(ce[ve], ce[ve + 1], Ce[ve], pe[ve + 1]), Ee += ye[ve].addedLength;
                return me && ge && (ye[ve] = ie(ce[ve], ce[0], Ce[ve], pe[0]), Ee += ye[ve].addedLength), de.totalLength = Ee, de
            }

            function se(ue) {
                this.segmentLength = 0, this.points = new Array(ue)
            }

            function ae(ue, de) {
                this.partialLength = ue, this.point = de
            }
            var oe = function () {
                var ue = {};
                return function (de, me, ce, Ce) {
                    var pe = (de[0] + "_" + de[1] + "_" + me[0] + "_" + me[1] + "_" + ce[0] + "_" + ce[1] + "_" + Ce[0] + "_" + Ce[1]).replace(/\./g, "p");
                    if (!ue[pe]) {
                        var ve = getDefaultCurveSegments(),
                            ge, ye, Ee, Pe, xe, we = 0,
                            Fe, Le, Re = null;
                        de.length === 2 && (de[0] !== me[0] || de[1] !== me[1]) && ee(de[0], de[1], me[0], me[1], de[0] + ce[0], de[1] + ce[1]) && ee(de[0], de[1], me[0], me[1], me[0] + Ce[0], me[1] + Ce[1]) && (ve = 2);
                        var Me = new se(ve);
                        for (Ee = ce.length, ge = 0; ge < ve; ge += 1) {
                            for (Le = createSizedArray(Ee), xe = ge / (ve - 1), Fe = 0, ye = 0; ye < Ee; ye += 1) Pe = bmPow(1 - xe, 3) * de[ye] + 3 * bmPow(1 - xe, 2) * xe * (de[ye] + ce[ye]) + 3 * (1 - xe) * bmPow(xe, 2) * (me[ye] + Ce[ye]) + bmPow(xe, 3) * me[ye], Le[ye] = Pe, Re !== null && (Fe += bmPow(Le[ye] - Re[ye], 2));
                            Fe = bmSqrt(Fe), we += Fe, Me.points[ge] = new ae(Fe, Le), Re = Le
                        }
                        Me.segmentLength = we, ue[pe] = Me
                    }
                    return ue[pe]
                }
            }();

            function le(ue, de) {
                var me = de.percents,
                    ce = de.lengths,
                    Ce = me.length,
                    pe = bmFloor((Ce - 1) * ue),
                    ve = ue * de.addedLength,
                    ge = 0;
                if (pe === Ce - 1 || pe === 0 || ve === ce[pe]) return me[pe];
                for (var ye = ce[pe] > ve ? -1 : 1, Ee = !0; Ee;)
                    if (ce[pe] <= ve && ce[pe + 1] > ve ? (ge = (ve - ce[pe]) / (ce[pe + 1] - ce[pe]), Ee = !1) : pe += ye, pe < 0 || pe >= Ce - 1) {
                        if (pe === Ce - 1) return me[pe];
                        Ee = !1
                    } return me[pe] + (me[pe + 1] - me[pe]) * ge
            }

            function he(ue, de, me, ce, Ce, pe) {
                var ve = le(Ce, pe),
                    ge = 1 - ve,
                    ye = te.round((ge * ge * ge * ue[0] + (ve * ge * ge + ge * ve * ge + ge * ge * ve) * me[0] + (ve * ve * ge + ge * ve * ve + ve * ge * ve) * ce[0] + ve * ve * ve * de[0]) * 1e3) / 1e3,
                    Ee = te.round((ge * ge * ge * ue[1] + (ve * ge * ge + ge * ve * ge + ge * ge * ve) * me[1] + (ve * ve * ge + ge * ve * ve + ve * ge * ve) * ce[1] + ve * ve * ve * de[1]) * 1e3) / 1e3;
                return [ye, Ee]
            }
            var fe = createTypedArray("float32", 8);

            function _e(ue, de, me, ce, Ce, pe, ve) {
                Ce < 0 ? Ce = 0 : Ce > 1 && (Ce = 1);
                var ge = le(Ce, ve);
                pe = pe > 1 ? 1 : pe;
                var ye = le(pe, ve),
                    Ee, Pe = ue.length,
                    xe = 1 - ge,
                    we = 1 - ye,
                    Fe = xe * xe * xe,
                    Le = ge * xe * xe * 3,
                    Re = ge * ge * xe * 3,
                    Me = ge * ge * ge,
                    $e = xe * xe * we,
                    Be = ge * xe * we + xe * ge * we + xe * xe * ye,
                    Ie = ge * ge * we + xe * ge * ye + ge * xe * ye,
                    Se = ge * ge * ye,
                    Ae = xe * we * we,
                    be = ge * we * we + xe * ye * we + xe * we * ye,
                    De = ge * ye * we + xe * ye * ye + ge * we * ye,
                    Te = ge * ye * ye,
                    ke = we * we * we,
                    Ve = ye * we * we + we * ye * we + we * we * ye,
                    We = ye * ye * we + we * ye * ye + ye * we * ye,
                    Ne = ye * ye * ye;
                for (Ee = 0; Ee < Pe; Ee += 1) fe[Ee * 4] = te.round((Fe * ue[Ee] + Le * me[Ee] + Re * ce[Ee] + Me * de[Ee]) * 1e3) / 1e3, fe[Ee * 4 + 1] = te.round(($e * ue[Ee] + Be * me[Ee] + Ie * ce[Ee] + Se * de[Ee]) * 1e3) / 1e3, fe[Ee * 4 + 2] = te.round((Ae * ue[Ee] + be * me[Ee] + De * ce[Ee] + Te * de[Ee]) * 1e3) / 1e3, fe[Ee * 4 + 3] = te.round((ke * ue[Ee] + Ve * me[Ee] + We * ce[Ee] + Ne * de[Ee]) * 1e3) / 1e3;
                return fe
            }
            return {
                getSegmentsLength: ne,
                getNewSegment: _e,
                getPointInSegment: he,
                buildBezierData: oe,
                pointOnLine2D: ee,
                pointOnLine3D: re
            }
        }
        var bez = bezFunction(),
            initFrame = initialDefaultFrame,
            mathAbs = Math.abs;

        function interpolateValue(te, ee) {
            var re = this.offsetTime,
                ie;
            this.propType === "multidimensional" && (ie = createTypedArray("float32", this.pv.length));
            for (var ne = ee.lastIndex, se = ne, ae = this.keyframes.length - 1, oe = !0, le, he, fe; oe;) {
                if (le = this.keyframes[se], he = this.keyframes[se + 1], se === ae - 1 && te >= he.t - re) {
                    le.h && (le = he), ne = 0;
                    break
                }
                if (he.t - re > te) {
                    ne = se;
                    break
                }
                se < ae - 1 ? se += 1 : (ne = 0, oe = !1)
            }
            fe = this.keyframesMetadata[se] || {};
            var _e, ue, de, me, ce, Ce, pe = he.t - re,
                ve = le.t - re,
                ge;
            if (le.to) {
                fe.bezierData || (fe.bezierData = bez.buildBezierData(le.s, he.s || le.e, le.to, le.ti));
                var ye = fe.bezierData;
                if (te >= pe || te < ve) {
                    var Ee = te >= pe ? ye.points.length - 1 : 0;
                    for (ue = ye.points[Ee].point.length, _e = 0; _e < ue; _e += 1) ie[_e] = ye.points[Ee].point[_e]
                } else {
                    fe.__fnct ? Ce = fe.__fnct : (Ce = BezierFactory.getBezierEasing(le.o.x, le.o.y, le.i.x, le.i.y, le.n).get, fe.__fnct = Ce), de = Ce((te - ve) / (pe - ve));
                    var Pe = ye.segmentLength * de,
                        xe, we = ee.lastFrame < te && ee._lastKeyframeIndex === se ? ee._lastAddedLength : 0;
                    for (ce = ee.lastFrame < te && ee._lastKeyframeIndex === se ? ee._lastPoint : 0, oe = !0, me = ye.points.length; oe;) {
                        if (we += ye.points[ce].partialLength, Pe === 0 || de === 0 || ce === ye.points.length - 1) {
                            for (ue = ye.points[ce].point.length, _e = 0; _e < ue; _e += 1) ie[_e] = ye.points[ce].point[_e];
                            break
                        } else if (Pe >= we && Pe < we + ye.points[ce + 1].partialLength) {
                            for (xe = (Pe - we) / ye.points[ce + 1].partialLength, ue = ye.points[ce].point.length, _e = 0; _e < ue; _e += 1) ie[_e] = ye.points[ce].point[_e] + (ye.points[ce + 1].point[_e] - ye.points[ce].point[_e]) * xe;
                            break
                        }
                        ce < me - 1 ? ce += 1 : oe = !1
                    }
                    ee._lastPoint = ce, ee._lastAddedLength = we - ye.points[ce].partialLength, ee._lastKeyframeIndex = se
                }
            } else {
                var Fe, Le, Re, Me, $e;
                if (ae = le.s.length, ge = he.s || le.e, this.sh && le.h !== 1)
                    if (te >= pe) ie[0] = ge[0], ie[1] = ge[1], ie[2] = ge[2];
                    else if (te <= ve) ie[0] = le.s[0], ie[1] = le.s[1], ie[2] = le.s[2];
                else {
                    var Be = createQuaternion(le.s),
                        Ie = createQuaternion(ge),
                        Se = (te - ve) / (pe - ve);
                    quaternionToEuler(ie, slerp(Be, Ie, Se))
                } else
                    for (se = 0; se < ae; se += 1) le.h !== 1 && (te >= pe ? de = 1 : te < ve ? de = 0 : (le.o.x.constructor === Array ? (fe.__fnct || (fe.__fnct = []), fe.__fnct[se] ? Ce = fe.__fnct[se] : (Fe = le.o.x[se] === void 0 ? le.o.x[0] : le.o.x[se], Le = le.o.y[se] === void 0 ? le.o.y[0] : le.o.y[se], Re = le.i.x[se] === void 0 ? le.i.x[0] : le.i.x[se], Me = le.i.y[se] === void 0 ? le.i.y[0] : le.i.y[se], Ce = BezierFactory.getBezierEasing(Fe, Le, Re, Me).get, fe.__fnct[se] = Ce)) : fe.__fnct ? Ce = fe.__fnct : (Fe = le.o.x, Le = le.o.y, Re = le.i.x, Me = le.i.y, Ce = BezierFactory.getBezierEasing(Fe, Le, Re, Me).get, le.keyframeMetadata = Ce), de = Ce((te - ve) / (pe - ve)))), ge = he.s || le.e, $e = le.h === 1 ? le.s[se] : le.s[se] + (ge[se] - le.s[se]) * de, this.propType === "multidimensional" ? ie[se] = $e : ie = $e
            }
            return ee.lastIndex = ne, ie
        }

        function slerp(te, ee, re) {
            var ie = [],
                ne = te[0],
                se = te[1],
                ae = te[2],
                oe = te[3],
                le = ee[0],
                he = ee[1],
                fe = ee[2],
                _e = ee[3],
                ue, de, me, ce, Ce;
            return de = ne * le + se * he + ae * fe + oe * _e, de < 0 && (de = -de, le = -le, he = -he, fe = -fe, _e = -_e), 1 - de > 1e-6 ? (ue = Math.acos(de), me = Math.sin(ue), ce = Math.sin((1 - re) * ue) / me, Ce = Math.sin(re * ue) / me) : (ce = 1 - re, Ce = re), ie[0] = ce * ne + Ce * le, ie[1] = ce * se + Ce * he, ie[2] = ce * ae + Ce * fe, ie[3] = ce * oe + Ce * _e, ie
        }

        function quaternionToEuler(te, ee) {
            var re = ee[0],
                ie = ee[1],
                ne = ee[2],
                se = ee[3],
                ae = Math.atan2(2 * ie * se - 2 * re * ne, 1 - 2 * ie * ie - 2 * ne * ne),
                oe = Math.asin(2 * re * ie + 2 * ne * se),
                le = Math.atan2(2 * re * se - 2 * ie * ne, 1 - 2 * re * re - 2 * ne * ne);
            te[0] = ae / degToRads, te[1] = oe / degToRads, te[2] = le / degToRads
        }

        function createQuaternion(te) {
            var ee = te[0] * degToRads,
                re = te[1] * degToRads,
                ie = te[2] * degToRads,
                ne = Math.cos(ee / 2),
                se = Math.cos(re / 2),
                ae = Math.cos(ie / 2),
                oe = Math.sin(ee / 2),
                le = Math.sin(re / 2),
                he = Math.sin(ie / 2),
                fe = ne * se * ae - oe * le * he,
                _e = oe * le * ae + ne * se * he,
                ue = oe * se * ae + ne * le * he,
                de = ne * le * ae - oe * se * he;
            return [_e, ue, de, fe]
        }

        function getValueAtCurrentTime() {
            var te = this.comp.renderedFrame - this.offsetTime,
                ee = this.keyframes[0].t - this.offsetTime,
                re = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
            if (!(te === this._caching.lastFrame || this._caching.lastFrame !== initFrame && (this._caching.lastFrame >= re && te >= re || this._caching.lastFrame < ee && te < ee))) {
                this._caching.lastFrame >= te && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
                var ie = this.interpolateValue(te, this._caching);
                this.pv = ie
            }
            return this._caching.lastFrame = te, this.pv
        }

        function setVValue(te) {
            var ee;
            if (this.propType === "unidimensional") ee = te * this.mult, mathAbs(this.v - ee) > 1e-5 && (this.v = ee, this._mdf = !0);
            else
                for (var re = 0, ie = this.v.length; re < ie;) ee = te[re] * this.mult, mathAbs(this.v[re] - ee) > 1e-5 && (this.v[re] = ee, this._mdf = !0), re += 1
        }

        function processEffectsSequence() {
            if (!(this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length)) {
                if (this.lock) {
                    this.setVValue(this.pv);
                    return
                }
                this.lock = !0, this._mdf = this._isFirstFrame;
                var te, ee = this.effectsSequence.length,
                    re = this.kf ? this.pv : this.data.k;
                for (te = 0; te < ee; te += 1) re = this.effectsSequence[te](re);
                this.setVValue(re), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
            }
        }

        function addEffect(te) {
            this.effectsSequence.push(te), this.container.addDynamicProperty(this)
        }

        function ValueProperty(te, ee, re, ie) {
            this.propType = "unidimensional", this.mult = re || 1, this.data = ee, this.v = re ? ee.k * re : ee.k, this.pv = ee.k, this._mdf = !1, this.elem = te, this.container = ie, this.comp = te.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect
        }

        function MultiDimensionalProperty(te, ee, re, ie) {
            this.propType = "multidimensional", this.mult = re || 1, this.data = ee, this._mdf = !1, this.elem = te, this.container = ie, this.comp = te.comp, this.k = !1, this.kf = !1, this.frameId = -1;
            var ne, se = ee.k.length;
            for (this.v = createTypedArray("float32", se), this.pv = createTypedArray("float32", se), this.vel = createTypedArray("float32", se), ne = 0; ne < se; ne += 1) this.v[ne] = ee.k[ne] * this.mult, this.pv[ne] = ee.k[ne];
            this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect
        }

        function KeyframedValueProperty(te, ee, re, ie) {
            this.propType = "unidimensional", this.keyframes = ee.k, this.keyframesMetadata = [], this.offsetTime = te.data.st, this.frameId = -1, this._caching = {
                lastFrame: initFrame,
                lastIndex: 0,
                value: 0,
                _lastKeyframeIndex: -1
            }, this.k = !0, this.kf = !0, this.data = ee, this.mult = re || 1, this.elem = te, this.container = ie, this.comp = te.comp, this.v = initFrame, this.pv = initFrame, this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.addEffect = addEffect
        }

        function KeyframedMultidimensionalProperty(te, ee, re, ie) {
            this.propType = "multidimensional";
            var ne, se = ee.k.length,
                ae, oe, le, he;
            for (ne = 0; ne < se - 1; ne += 1) ee.k[ne].to && ee.k[ne].s && ee.k[ne + 1] && ee.k[ne + 1].s && (ae = ee.k[ne].s, oe = ee.k[ne + 1].s, le = ee.k[ne].to, he = ee.k[ne].ti, (ae.length === 2 && !(ae[0] === oe[0] && ae[1] === oe[1]) && bez.pointOnLine2D(ae[0], ae[1], oe[0], oe[1], ae[0] + le[0], ae[1] + le[1]) && bez.pointOnLine2D(ae[0], ae[1], oe[0], oe[1], oe[0] + he[0], oe[1] + he[1]) || ae.length === 3 && !(ae[0] === oe[0] && ae[1] === oe[1] && ae[2] === oe[2]) && bez.pointOnLine3D(ae[0], ae[1], ae[2], oe[0], oe[1], oe[2], ae[0] + le[0], ae[1] + le[1], ae[2] + le[2]) && bez.pointOnLine3D(ae[0], ae[1], ae[2], oe[0], oe[1], oe[2], oe[0] + he[0], oe[1] + he[1], oe[2] + he[2])) && (ee.k[ne].to = null, ee.k[ne].ti = null), ae[0] === oe[0] && ae[1] === oe[1] && le[0] === 0 && le[1] === 0 && he[0] === 0 && he[1] === 0 && (ae.length === 2 || ae[2] === oe[2] && le[2] === 0 && he[2] === 0) && (ee.k[ne].to = null, ee.k[ne].ti = null));
            this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.data = ee, this.keyframes = ee.k, this.keyframesMetadata = [], this.offsetTime = te.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = re || 1, this.elem = te, this.container = ie, this.comp = te.comp, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.frameId = -1;
            var fe = ee.k[0].s.length;
            for (this.v = createTypedArray("float32", fe), this.pv = createTypedArray("float32", fe), ne = 0; ne < fe; ne += 1) this.v[ne] = initFrame, this.pv[ne] = initFrame;
            this._caching = {
                lastFrame: initFrame,
                lastIndex: 0,
                value: createTypedArray("float32", fe)
            }, this.addEffect = addEffect
        }
        var PropertyFactory = function () {
            function te(re, ie, ne, se, ae) {
                ie.sid && (ie = re.globalData.slotManager.getProp(ie));
                var oe;
                if (!ie.k.length) oe = new ValueProperty(re, ie, se, ae);
                else if (typeof ie.k[0] == "number") oe = new MultiDimensionalProperty(re, ie, se, ae);
                else switch (ne) {
                    case 0:
                        oe = new KeyframedValueProperty(re, ie, se, ae);
                        break;
                    case 1:
                        oe = new KeyframedMultidimensionalProperty(re, ie, se, ae);
                        break
                }
                return oe.effectsSequence.length && ae.addDynamicProperty(oe), oe
            }
            var ee = {
                getProp: te
            };
            return ee
        }();

        function DynamicPropertyContainer() {}
        DynamicPropertyContainer.prototype = {
            addDynamicProperty: function (ee) {
                this.dynamicProperties.indexOf(ee) === -1 && (this.dynamicProperties.push(ee), this.container.addDynamicProperty(this), this._isAnimated = !0)
            },
            iterateDynamicProperties: function () {
                this._mdf = !1;
                var ee, re = this.dynamicProperties.length;
                for (ee = 0; ee < re; ee += 1) this.dynamicProperties[ee].getValue(), this.dynamicProperties[ee]._mdf && (this._mdf = !0)
            },
            initDynamicPropertyContainer: function (ee) {
                this.container = ee, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1
            }
        };
        var pointPool = function () {
            function te() {
                return createTypedArray("float32", 2)
            }
            return poolFactory(8, te)
        }();

        function ShapePath() {
            this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength)
        }
        ShapePath.prototype.setPathData = function (te, ee) {
            this.c = te, this.setLength(ee);
            for (var re = 0; re < ee;) this.v[re] = pointPool.newElement(), this.o[re] = pointPool.newElement(), this.i[re] = pointPool.newElement(), re += 1
        }, ShapePath.prototype.setLength = function (te) {
            for (; this._maxLength < te;) this.doubleArrayLength();
            this._length = te
        }, ShapePath.prototype.doubleArrayLength = function () {
            this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2
        }, ShapePath.prototype.setXYAt = function (te, ee, re, ie, ne) {
            var se;
            switch (this._length = Math.max(this._length, ie + 1), this._length >= this._maxLength && this.doubleArrayLength(), re) {
                case "v":
                    se = this.v;
                    break;
                case "i":
                    se = this.i;
                    break;
                case "o":
                    se = this.o;
                    break;
                default:
                    se = [];
                    break
            }(!se[ie] || se[ie] && !ne) && (se[ie] = pointPool.newElement()), se[ie][0] = te, se[ie][1] = ee
        }, ShapePath.prototype.setTripleAt = function (te, ee, re, ie, ne, se, ae, oe) {
            this.setXYAt(te, ee, "v", ae, oe), this.setXYAt(re, ie, "o", ae, oe), this.setXYAt(ne, se, "i", ae, oe)
        }, ShapePath.prototype.reverse = function () {
            var te = new ShapePath;
            te.setPathData(this.c, this._length);
            var ee = this.v,
                re = this.o,
                ie = this.i,
                ne = 0;
            this.c && (te.setTripleAt(ee[0][0], ee[0][1], ie[0][0], ie[0][1], re[0][0], re[0][1], 0, !1), ne = 1);
            var se = this._length - 1,
                ae = this._length,
                oe;
            for (oe = ne; oe < ae; oe += 1) te.setTripleAt(ee[se][0], ee[se][1], ie[se][0], ie[se][1], re[se][0], re[se][1], oe, !1), se -= 1;
            return te
        }, ShapePath.prototype.length = function () {
            return this._length
        };
        var shapePool = function () {
            function te() {
                return new ShapePath
            }

            function ee(ne) {
                var se = ne._length,
                    ae;
                for (ae = 0; ae < se; ae += 1) pointPool.release(ne.v[ae]), pointPool.release(ne.i[ae]), pointPool.release(ne.o[ae]), ne.v[ae] = null, ne.i[ae] = null, ne.o[ae] = null;
                ne._length = 0, ne.c = !1
            }

            function re(ne) {
                var se = ie.newElement(),
                    ae, oe = ne._length === void 0 ? ne.v.length : ne._length;
                for (se.setLength(oe), se.c = ne.c, ae = 0; ae < oe; ae += 1) se.setTripleAt(ne.v[ae][0], ne.v[ae][1], ne.o[ae][0], ne.o[ae][1], ne.i[ae][0], ne.i[ae][1], ae);
                return se
            }
            var ie = poolFactory(4, te, ee);
            return ie.clone = re, ie
        }();

        function ShapeCollection() {
            this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength)
        }
        ShapeCollection.prototype.addShape = function (te) {
            this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = te, this._length += 1
        }, ShapeCollection.prototype.releaseShapes = function () {
            var te;
            for (te = 0; te < this._length; te += 1) shapePool.release(this.shapes[te]);
            this._length = 0
        };
        var shapeCollectionPool = function () {
                var te = {
                        newShapeCollection: ne,
                        release: se
                    },
                    ee = 0,
                    re = 4,
                    ie = createSizedArray(re);

                function ne() {
                    var ae;
                    return ee ? (ee -= 1, ae = ie[ee]) : ae = new ShapeCollection, ae
                }

                function se(ae) {
                    var oe, le = ae._length;
                    for (oe = 0; oe < le; oe += 1) shapePool.release(ae.shapes[oe]);
                    ae._length = 0, ee === re && (ie = pooling.double(ie), re *= 2), ie[ee] = ae, ee += 1
                }
                return te
            }(),
            ShapePropertyFactory = function () {
                var te = -999999;

                function ee(pe, ve, ge) {
                    var ye = ge.lastIndex,
                        Ee, Pe, xe, we, Fe, Le, Re, Me, $e, Be = this.keyframes;
                    if (pe < Be[0].t - this.offsetTime) Ee = Be[0].s[0], xe = !0, ye = 0;
                    else if (pe >= Be[Be.length - 1].t - this.offsetTime) Ee = Be[Be.length - 1].s ? Be[Be.length - 1].s[0] : Be[Be.length - 2].e[0], xe = !0;
                    else {
                        for (var Ie = ye, Se = Be.length - 1, Ae = !0, be, De, Te; Ae && (be = Be[Ie], De = Be[Ie + 1], !(De.t - this.offsetTime > pe));) Ie < Se - 1 ? Ie += 1 : Ae = !1;
                        if (Te = this.keyframesMetadata[Ie] || {}, xe = be.h === 1, ye = Ie, !xe) {
                            if (pe >= De.t - this.offsetTime) Me = 1;
                            else if (pe < be.t - this.offsetTime) Me = 0;
                            else {
                                var ke;
                                Te.__fnct ? ke = Te.__fnct : (ke = BezierFactory.getBezierEasing(be.o.x, be.o.y, be.i.x, be.i.y).get, Te.__fnct = ke), Me = ke((pe - (be.t - this.offsetTime)) / (De.t - this.offsetTime - (be.t - this.offsetTime)))
                            }
                            Pe = De.s ? De.s[0] : be.e[0]
                        }
                        Ee = be.s[0]
                    }
                    for (Le = ve._length, Re = Ee.i[0].length, ge.lastIndex = ye, we = 0; we < Le; we += 1)
                        for (Fe = 0; Fe < Re; Fe += 1) $e = xe ? Ee.i[we][Fe] : Ee.i[we][Fe] + (Pe.i[we][Fe] - Ee.i[we][Fe]) * Me, ve.i[we][Fe] = $e, $e = xe ? Ee.o[we][Fe] : Ee.o[we][Fe] + (Pe.o[we][Fe] - Ee.o[we][Fe]) * Me, ve.o[we][Fe] = $e, $e = xe ? Ee.v[we][Fe] : Ee.v[we][Fe] + (Pe.v[we][Fe] - Ee.v[we][Fe]) * Me, ve.v[we][Fe] = $e
                }

                function re() {
                    var pe = this.comp.renderedFrame - this.offsetTime,
                        ve = this.keyframes[0].t - this.offsetTime,
                        ge = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                        ye = this._caching.lastFrame;
                    return ye !== te && (ye < ve && pe < ve || ye > ge && pe > ge) || (this._caching.lastIndex = ye < pe ? this._caching.lastIndex : 0, this.interpolateShape(pe, this.pv, this._caching)), this._caching.lastFrame = pe, this.pv
                }

                function ie() {
                    this.paths = this.localShapeCollection
                }

                function ne(pe, ve) {
                    if (pe._length !== ve._length || pe.c !== ve.c) return !1;
                    var ge, ye = pe._length;
                    for (ge = 0; ge < ye; ge += 1)
                        if (pe.v[ge][0] !== ve.v[ge][0] || pe.v[ge][1] !== ve.v[ge][1] || pe.o[ge][0] !== ve.o[ge][0] || pe.o[ge][1] !== ve.o[ge][1] || pe.i[ge][0] !== ve.i[ge][0] || pe.i[ge][1] !== ve.i[ge][1]) return !1;
                    return !0
                }

                function se(pe) {
                    ne(this.v, pe) || (this.v = shapePool.clone(pe), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
                }

                function ae() {
                    if (this.elem.globalData.frameId !== this.frameId) {
                        if (!this.effectsSequence.length) {
                            this._mdf = !1;
                            return
                        }
                        if (this.lock) {
                            this.setVValue(this.pv);
                            return
                        }
                        this.lock = !0, this._mdf = !1;
                        var pe;
                        this.kf ? pe = this.pv : this.data.ks ? pe = this.data.ks.k : pe = this.data.pt.k;
                        var ve, ge = this.effectsSequence.length;
                        for (ve = 0; ve < ge; ve += 1) pe = this.effectsSequence[ve](pe);
                        this.setVValue(pe), this.lock = !1, this.frameId = this.elem.globalData.frameId
                    }
                }

                function oe(pe, ve, ge) {
                    this.propType = "shape", this.comp = pe.comp, this.container = pe, this.elem = pe, this.data = ve, this.k = !1, this.kf = !1, this._mdf = !1;
                    var ye = ge === 3 ? ve.pt.k : ve.ks.k;
                    this.v = shapePool.clone(ye), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = ie, this.effectsSequence = []
                }

                function le(pe) {
                    this.effectsSequence.push(pe), this.container.addDynamicProperty(this)
                }
                oe.prototype.interpolateShape = ee, oe.prototype.getValue = ae, oe.prototype.setVValue = se, oe.prototype.addEffect = le;

                function he(pe, ve, ge) {
                    this.propType = "shape", this.comp = pe.comp, this.elem = pe, this.container = pe, this.offsetTime = pe.data.st, this.keyframes = ge === 3 ? ve.pt.k : ve.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
                    var ye = this.keyframes[0].s[0].i.length;
                    this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, ye), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = te, this.reset = ie, this._caching = {
                        lastFrame: te,
                        lastIndex: 0
                    }, this.effectsSequence = [re.bind(this)]
                }
                he.prototype.getValue = ae, he.prototype.interpolateShape = ee, he.prototype.setVValue = se, he.prototype.addEffect = le;
                var fe = function () {
                        var pe = roundCorner;

                        function ve(ge, ye) {
                            this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = ye.d, this.elem = ge, this.comp = ge.comp, this.frameId = -1, this.initDynamicPropertyContainer(ge), this.p = PropertyFactory.getProp(ge, ye.p, 1, 0, this), this.s = PropertyFactory.getProp(ge, ye.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
                        }
                        return ve.prototype = {
                            reset: ie,
                            getValue: function () {
                                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
                            },
                            convertEllToPath: function () {
                                var ye = this.p.v[0],
                                    Ee = this.p.v[1],
                                    Pe = this.s.v[0] / 2,
                                    xe = this.s.v[1] / 2,
                                    we = this.d !== 3,
                                    Fe = this.v;
                                Fe.v[0][0] = ye, Fe.v[0][1] = Ee - xe, Fe.v[1][0] = we ? ye + Pe : ye - Pe, Fe.v[1][1] = Ee, Fe.v[2][0] = ye, Fe.v[2][1] = Ee + xe, Fe.v[3][0] = we ? ye - Pe : ye + Pe, Fe.v[3][1] = Ee, Fe.i[0][0] = we ? ye - Pe * pe : ye + Pe * pe, Fe.i[0][1] = Ee - xe, Fe.i[1][0] = we ? ye + Pe : ye - Pe, Fe.i[1][1] = Ee - xe * pe, Fe.i[2][0] = we ? ye + Pe * pe : ye - Pe * pe, Fe.i[2][1] = Ee + xe, Fe.i[3][0] = we ? ye - Pe : ye + Pe, Fe.i[3][1] = Ee + xe * pe, Fe.o[0][0] = we ? ye + Pe * pe : ye - Pe * pe, Fe.o[0][1] = Ee - xe, Fe.o[1][0] = we ? ye + Pe : ye - Pe, Fe.o[1][1] = Ee + xe * pe, Fe.o[2][0] = we ? ye - Pe * pe : ye + Pe * pe, Fe.o[2][1] = Ee + xe, Fe.o[3][0] = we ? ye - Pe : ye + Pe, Fe.o[3][1] = Ee - xe * pe
                            }
                        }, extendPrototype([DynamicPropertyContainer], ve), ve
                    }(),
                    _e = function () {
                        function pe(ve, ge) {
                            this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = ve, this.comp = ve.comp, this.data = ge, this.frameId = -1, this.d = ge.d, this.initDynamicPropertyContainer(ve), ge.sy === 1 ? (this.ir = PropertyFactory.getProp(ve, ge.ir, 0, 0, this), this.is = PropertyFactory.getProp(ve, ge.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(ve, ge.pt, 0, 0, this), this.p = PropertyFactory.getProp(ve, ge.p, 1, 0, this), this.r = PropertyFactory.getProp(ve, ge.r, 0, degToRads, this), this.or = PropertyFactory.getProp(ve, ge.or, 0, 0, this), this.os = PropertyFactory.getProp(ve, ge.os, 0, .01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
                        }
                        return pe.prototype = {
                            reset: ie,
                            getValue: function () {
                                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
                            },
                            convertStarToPath: function () {
                                var ge = Math.floor(this.pt.v) * 2,
                                    ye = Math.PI * 2 / ge,
                                    Ee = !0,
                                    Pe = this.or.v,
                                    xe = this.ir.v,
                                    we = this.os.v,
                                    Fe = this.is.v,
                                    Le = 2 * Math.PI * Pe / (ge * 2),
                                    Re = 2 * Math.PI * xe / (ge * 2),
                                    Me, $e, Be, Ie, Se = -Math.PI / 2;
                                Se += this.r.v;
                                var Ae = this.data.d === 3 ? -1 : 1;
                                for (this.v._length = 0, Me = 0; Me < ge; Me += 1) {
                                    $e = Ee ? Pe : xe, Be = Ee ? we : Fe, Ie = Ee ? Le : Re;
                                    var be = $e * Math.cos(Se),
                                        De = $e * Math.sin(Se),
                                        Te = be === 0 && De === 0 ? 0 : De / Math.sqrt(be * be + De * De),
                                        ke = be === 0 && De === 0 ? 0 : -be / Math.sqrt(be * be + De * De);
                                    be += +this.p.v[0], De += +this.p.v[1], this.v.setTripleAt(be, De, be - Te * Ie * Be * Ae, De - ke * Ie * Be * Ae, be + Te * Ie * Be * Ae, De + ke * Ie * Be * Ae, Me, !0), Ee = !Ee, Se += ye * Ae
                                }
                            },
                            convertPolygonToPath: function () {
                                var ge = Math.floor(this.pt.v),
                                    ye = Math.PI * 2 / ge,
                                    Ee = this.or.v,
                                    Pe = this.os.v,
                                    xe = 2 * Math.PI * Ee / (ge * 4),
                                    we, Fe = -Math.PI * .5,
                                    Le = this.data.d === 3 ? -1 : 1;
                                for (Fe += this.r.v, this.v._length = 0, we = 0; we < ge; we += 1) {
                                    var Re = Ee * Math.cos(Fe),
                                        Me = Ee * Math.sin(Fe),
                                        $e = Re === 0 && Me === 0 ? 0 : Me / Math.sqrt(Re * Re + Me * Me),
                                        Be = Re === 0 && Me === 0 ? 0 : -Re / Math.sqrt(Re * Re + Me * Me);
                                    Re += +this.p.v[0], Me += +this.p.v[1], this.v.setTripleAt(Re, Me, Re - $e * xe * Pe * Le, Me - Be * xe * Pe * Le, Re + $e * xe * Pe * Le, Me + Be * xe * Pe * Le, we, !0), Fe += ye * Le
                                }
                                this.paths.length = 0, this.paths[0] = this.v
                            }
                        }, extendPrototype([DynamicPropertyContainer], pe), pe
                    }(),
                    ue = function () {
                        function pe(ve, ge) {
                            this.v = shapePool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = ve, this.comp = ve.comp, this.frameId = -1, this.d = ge.d, this.initDynamicPropertyContainer(ve), this.p = PropertyFactory.getProp(ve, ge.p, 1, 0, this), this.s = PropertyFactory.getProp(ve, ge.s, 1, 0, this), this.r = PropertyFactory.getProp(ve, ge.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
                        }
                        return pe.prototype = {
                            convertRectToPath: function () {
                                var ge = this.p.v[0],
                                    ye = this.p.v[1],
                                    Ee = this.s.v[0] / 2,
                                    Pe = this.s.v[1] / 2,
                                    xe = bmMin(Ee, Pe, this.r.v),
                                    we = xe * (1 - roundCorner);
                                this.v._length = 0, this.d === 2 || this.d === 1 ? (this.v.setTripleAt(ge + Ee, ye - Pe + xe, ge + Ee, ye - Pe + xe, ge + Ee, ye - Pe + we, 0, !0), this.v.setTripleAt(ge + Ee, ye + Pe - xe, ge + Ee, ye + Pe - we, ge + Ee, ye + Pe - xe, 1, !0), xe !== 0 ? (this.v.setTripleAt(ge + Ee - xe, ye + Pe, ge + Ee - xe, ye + Pe, ge + Ee - we, ye + Pe, 2, !0), this.v.setTripleAt(ge - Ee + xe, ye + Pe, ge - Ee + we, ye + Pe, ge - Ee + xe, ye + Pe, 3, !0), this.v.setTripleAt(ge - Ee, ye + Pe - xe, ge - Ee, ye + Pe - xe, ge - Ee, ye + Pe - we, 4, !0), this.v.setTripleAt(ge - Ee, ye - Pe + xe, ge - Ee, ye - Pe + we, ge - Ee, ye - Pe + xe, 5, !0), this.v.setTripleAt(ge - Ee + xe, ye - Pe, ge - Ee + xe, ye - Pe, ge - Ee + we, ye - Pe, 6, !0), this.v.setTripleAt(ge + Ee - xe, ye - Pe, ge + Ee - we, ye - Pe, ge + Ee - xe, ye - Pe, 7, !0)) : (this.v.setTripleAt(ge - Ee, ye + Pe, ge - Ee + we, ye + Pe, ge - Ee, ye + Pe, 2), this.v.setTripleAt(ge - Ee, ye - Pe, ge - Ee, ye - Pe + we, ge - Ee, ye - Pe, 3))) : (this.v.setTripleAt(ge + Ee, ye - Pe + xe, ge + Ee, ye - Pe + we, ge + Ee, ye - Pe + xe, 0, !0), xe !== 0 ? (this.v.setTripleAt(ge + Ee - xe, ye - Pe, ge + Ee - xe, ye - Pe, ge + Ee - we, ye - Pe, 1, !0), this.v.setTripleAt(ge - Ee + xe, ye - Pe, ge - Ee + we, ye - Pe, ge - Ee + xe, ye - Pe, 2, !0), this.v.setTripleAt(ge - Ee, ye - Pe + xe, ge - Ee, ye - Pe + xe, ge - Ee, ye - Pe + we, 3, !0), this.v.setTripleAt(ge - Ee, ye + Pe - xe, ge - Ee, ye + Pe - we, ge - Ee, ye + Pe - xe, 4, !0), this.v.setTripleAt(ge - Ee + xe, ye + Pe, ge - Ee + xe, ye + Pe, ge - Ee + we, ye + Pe, 5, !0), this.v.setTripleAt(ge + Ee - xe, ye + Pe, ge + Ee - we, ye + Pe, ge + Ee - xe, ye + Pe, 6, !0), this.v.setTripleAt(ge + Ee, ye + Pe - xe, ge + Ee, ye + Pe - xe, ge + Ee, ye + Pe - we, 7, !0)) : (this.v.setTripleAt(ge - Ee, ye - Pe, ge - Ee + we, ye - Pe, ge - Ee, ye - Pe, 1, !0), this.v.setTripleAt(ge - Ee, ye + Pe, ge - Ee, ye + Pe - we, ge - Ee, ye + Pe, 2, !0), this.v.setTripleAt(ge + Ee, ye + Pe, ge + Ee - we, ye + Pe, ge + Ee, ye + Pe, 3, !0)))
                            },
                            getValue: function () {
                                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
                            },
                            reset: ie
                        }, extendPrototype([DynamicPropertyContainer], pe), pe
                    }();

                function de(pe, ve, ge) {
                    var ye;
                    if (ge === 3 || ge === 4) {
                        var Ee = ge === 3 ? ve.pt : ve.ks,
                            Pe = Ee.k;
                        Pe.length ? ye = new he(pe, ve, ge) : ye = new oe(pe, ve, ge)
                    } else ge === 5 ? ye = new ue(pe, ve) : ge === 6 ? ye = new fe(pe, ve) : ge === 7 && (ye = new _e(pe, ve));
                    return ye.k && pe.addDynamicProperty(ye), ye
                }

                function me() {
                    return oe
                }

                function ce() {
                    return he
                }
                var Ce = {};
                return Ce.getShapeProp = de, Ce.getConstructorFunction = me, Ce.getKeyframedConstructorFunction = ce, Ce
            }();
        /*!
         Transformation Matrix v2.0
         (c) Epistemex 2014-2015
         www.epistemex.com
         By Ken Fyrstenberg
         Contributions by leeoniya.
         License: MIT, header required.
         */
        var Matrix = function () {
            var te = Math.cos,
                ee = Math.sin,
                re = Math.tan,
                ie = Math.round;

            function ne() {
                return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
            }

            function se(be) {
                if (be === 0) return this;
                var De = te(be),
                    Te = ee(be);
                return this._t(De, -Te, 0, 0, Te, De, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }

            function ae(be) {
                if (be === 0) return this;
                var De = te(be),
                    Te = ee(be);
                return this._t(1, 0, 0, 0, 0, De, -Te, 0, 0, Te, De, 0, 0, 0, 0, 1)
            }

            function oe(be) {
                if (be === 0) return this;
                var De = te(be),
                    Te = ee(be);
                return this._t(De, 0, Te, 0, 0, 1, 0, 0, -Te, 0, De, 0, 0, 0, 0, 1)
            }

            function le(be) {
                if (be === 0) return this;
                var De = te(be),
                    Te = ee(be);
                return this._t(De, -Te, 0, 0, Te, De, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }

            function he(be, De) {
                return this._t(1, De, be, 1, 0, 0)
            }

            function fe(be, De) {
                return this.shear(re(be), re(De))
            }

            function _e(be, De) {
                var Te = te(De),
                    ke = ee(De);
                return this._t(Te, ke, 0, 0, -ke, Te, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, re(be), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(Te, -ke, 0, 0, ke, Te, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }

            function ue(be, De, Te) {
                return !Te && Te !== 0 && (Te = 1), be === 1 && De === 1 && Te === 1 ? this : this._t(be, 0, 0, 0, 0, De, 0, 0, 0, 0, Te, 0, 0, 0, 0, 1)
            }

            function de(be, De, Te, ke, Ve, We, Ne, He, qe, Ue, dt, $t, gt, mt, Ke, Ze) {
                return this.props[0] = be, this.props[1] = De, this.props[2] = Te, this.props[3] = ke, this.props[4] = Ve, this.props[5] = We, this.props[6] = Ne, this.props[7] = He, this.props[8] = qe, this.props[9] = Ue, this.props[10] = dt, this.props[11] = $t, this.props[12] = gt, this.props[13] = mt, this.props[14] = Ke, this.props[15] = Ze, this
            }

            function me(be, De, Te) {
                return Te = Te || 0, be !== 0 || De !== 0 || Te !== 0 ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, be, De, Te, 1) : this
            }

            function ce(be, De, Te, ke, Ve, We, Ne, He, qe, Ue, dt, $t, gt, mt, Ke, Ze) {
                var Ge = this.props;
                if (be === 1 && De === 0 && Te === 0 && ke === 0 && Ve === 0 && We === 1 && Ne === 0 && He === 0 && qe === 0 && Ue === 0 && dt === 1 && $t === 0) return Ge[12] = Ge[12] * be + Ge[15] * gt, Ge[13] = Ge[13] * We + Ge[15] * mt, Ge[14] = Ge[14] * dt + Ge[15] * Ke, Ge[15] *= Ze, this._identityCalculated = !1, this;
                var xt = Ge[0],
                    vt = Ge[1],
                    Oe = Ge[2],
                    Tt = Ge[3],
                    lt = Ge[4],
                    It = Ge[5],
                    bt = Ge[6],
                    Vt = Ge[7],
                    yt = Ge[8],
                    Ot = Ge[9],
                    Bt = Ge[10],
                    ht = Ge[11],
                    St = Ge[12],
                    wt = Ge[13],
                    Ht = Ge[14],
                    At = Ge[15];
                return Ge[0] = xt * be + vt * Ve + Oe * qe + Tt * gt, Ge[1] = xt * De + vt * We + Oe * Ue + Tt * mt, Ge[2] = xt * Te + vt * Ne + Oe * dt + Tt * Ke, Ge[3] = xt * ke + vt * He + Oe * $t + Tt * Ze, Ge[4] = lt * be + It * Ve + bt * qe + Vt * gt, Ge[5] = lt * De + It * We + bt * Ue + Vt * mt, Ge[6] = lt * Te + It * Ne + bt * dt + Vt * Ke, Ge[7] = lt * ke + It * He + bt * $t + Vt * Ze, Ge[8] = yt * be + Ot * Ve + Bt * qe + ht * gt, Ge[9] = yt * De + Ot * We + Bt * Ue + ht * mt, Ge[10] = yt * Te + Ot * Ne + Bt * dt + ht * Ke, Ge[11] = yt * ke + Ot * He + Bt * $t + ht * Ze, Ge[12] = St * be + wt * Ve + Ht * qe + At * gt, Ge[13] = St * De + wt * We + Ht * Ue + At * mt, Ge[14] = St * Te + wt * Ne + Ht * dt + At * Ke, Ge[15] = St * ke + wt * He + Ht * $t + At * Ze, this._identityCalculated = !1, this
            }

            function Ce(be) {
                var De = be.props;
                return this.transform(De[0], De[1], De[2], De[3], De[4], De[5], De[6], De[7], De[8], De[9], De[10], De[11], De[12], De[13], De[14], De[15])
            }

            function pe() {
                return this._identityCalculated || (this._identity = !(this.props[0] !== 1 || this.props[1] !== 0 || this.props[2] !== 0 || this.props[3] !== 0 || this.props[4] !== 0 || this.props[5] !== 1 || this.props[6] !== 0 || this.props[7] !== 0 || this.props[8] !== 0 || this.props[9] !== 0 || this.props[10] !== 1 || this.props[11] !== 0 || this.props[12] !== 0 || this.props[13] !== 0 || this.props[14] !== 0 || this.props[15] !== 1), this._identityCalculated = !0), this._identity
            }

            function ve(be) {
                for (var De = 0; De < 16;) {
                    if (be.props[De] !== this.props[De]) return !1;
                    De += 1
                }
                return !0
            }

            function ge(be) {
                var De;
                for (De = 0; De < 16; De += 1) be.props[De] = this.props[De];
                return be
            }

            function ye(be) {
                var De;
                for (De = 0; De < 16; De += 1) this.props[De] = be[De]
            }

            function Ee(be, De, Te) {
                return {
                    x: be * this.props[0] + De * this.props[4] + Te * this.props[8] + this.props[12],
                    y: be * this.props[1] + De * this.props[5] + Te * this.props[9] + this.props[13],
                    z: be * this.props[2] + De * this.props[6] + Te * this.props[10] + this.props[14]
                }
            }

            function Pe(be, De, Te) {
                return be * this.props[0] + De * this.props[4] + Te * this.props[8] + this.props[12]
            }

            function xe(be, De, Te) {
                return be * this.props[1] + De * this.props[5] + Te * this.props[9] + this.props[13]
            }

            function we(be, De, Te) {
                return be * this.props[2] + De * this.props[6] + Te * this.props[10] + this.props[14]
            }

            function Fe() {
                var be = this.props[0] * this.props[5] - this.props[1] * this.props[4],
                    De = this.props[5] / be,
                    Te = -this.props[1] / be,
                    ke = -this.props[4] / be,
                    Ve = this.props[0] / be,
                    We = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / be,
                    Ne = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / be,
                    He = new Matrix;
                return He.props[0] = De, He.props[1] = Te, He.props[4] = ke, He.props[5] = Ve, He.props[12] = We, He.props[13] = Ne, He
            }

            function Le(be) {
                var De = this.getInverseMatrix();
                return De.applyToPointArray(be[0], be[1], be[2] || 0)
            }

            function Re(be) {
                var De, Te = be.length,
                    ke = [];
                for (De = 0; De < Te; De += 1) ke[De] = Le(be[De]);
                return ke
            }

            function Me(be, De, Te) {
                var ke = createTypedArray("float32", 6);
                if (this.isIdentity()) ke[0] = be[0], ke[1] = be[1], ke[2] = De[0], ke[3] = De[1], ke[4] = Te[0], ke[5] = Te[1];
                else {
                    var Ve = this.props[0],
                        We = this.props[1],
                        Ne = this.props[4],
                        He = this.props[5],
                        qe = this.props[12],
                        Ue = this.props[13];
                    ke[0] = be[0] * Ve + be[1] * Ne + qe, ke[1] = be[0] * We + be[1] * He + Ue, ke[2] = De[0] * Ve + De[1] * Ne + qe, ke[3] = De[0] * We + De[1] * He + Ue, ke[4] = Te[0] * Ve + Te[1] * Ne + qe, ke[5] = Te[0] * We + Te[1] * He + Ue
                }
                return ke
            }

            function $e(be, De, Te) {
                var ke;
                return this.isIdentity() ? ke = [be, De, Te] : ke = [be * this.props[0] + De * this.props[4] + Te * this.props[8] + this.props[12], be * this.props[1] + De * this.props[5] + Te * this.props[9] + this.props[13], be * this.props[2] + De * this.props[6] + Te * this.props[10] + this.props[14]], ke
            }

            function Be(be, De) {
                if (this.isIdentity()) return be + "," + De;
                var Te = this.props;
                return Math.round((be * Te[0] + De * Te[4] + Te[12]) * 100) / 100 + "," + Math.round((be * Te[1] + De * Te[5] + Te[13]) * 100) / 100
            }

            function Ie() {
                for (var be = 0, De = this.props, Te = "matrix3d(", ke = 1e4; be < 16;) Te += ie(De[be] * ke) / ke, Te += be === 15 ? ")" : ",", be += 1;
                return Te
            }

            function Se(be) {
                var De = 1e4;
                return be < 1e-6 && be > 0 || be > -1e-6 && be < 0 ? ie(be * De) / De : be
            }

            function Ae() {
                var be = this.props,
                    De = Se(be[0]),
                    Te = Se(be[1]),
                    ke = Se(be[4]),
                    Ve = Se(be[5]),
                    We = Se(be[12]),
                    Ne = Se(be[13]);
                return "matrix(" + De + "," + Te + "," + ke + "," + Ve + "," + We + "," + Ne + ")"
            }
            return function () {
                this.reset = ne, this.rotate = se, this.rotateX = ae, this.rotateY = oe, this.rotateZ = le, this.skew = fe, this.skewFromAxis = _e, this.shear = he, this.scale = ue, this.setTransform = de, this.translate = me, this.transform = ce, this.multiply = Ce, this.applyToPoint = Ee, this.applyToX = Pe, this.applyToY = xe, this.applyToZ = we, this.applyToPointArray = $e, this.applyToTriplePoints = Me, this.applyToPointStringified = Be, this.toCSS = Ie, this.to2dCSS = Ae, this.clone = ge, this.cloneFromProps = ye, this.equals = ve, this.inversePoints = Re, this.inversePoint = Le, this.getInverseMatrix = Fe, this._t = this.transform, this.isIdentity = pe, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset()
            }
        }();

        function _typeof$3(te) {
            "@babel/helpers - typeof";
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$3 = function (re) {
                return typeof re
            } : _typeof$3 = function (re) {
                return re && typeof Symbol == "function" && re.constructor === Symbol && re !== Symbol.prototype ? "symbol" : typeof re
            }, _typeof$3(te)
        }
        var lottie = {};

        function setLocation(te) {
            setLocationHref(te)
        }

        function searchAnimations() {
            animationManager.searchAnimations()
        }

        function setSubframeRendering(te) {
            setSubframeEnabled(te)
        }

        function setPrefix(te) {
            setIdPrefix(te)
        }

        function loadAnimation(te) {
            return animationManager.loadAnimation(te)
        }

        function setQuality(te) {
            if (typeof te == "string") switch (te) {
                case "high":
                    setDefaultCurveSegments(200);
                    break;
                default:
                case "medium":
                    setDefaultCurveSegments(50);
                    break;
                case "low":
                    setDefaultCurveSegments(10);
                    break
            } else !isNaN(te) && te > 1 && setDefaultCurveSegments(te)
        }

        function inBrowser() {
            return typeof navigator < "u"
        }

        function installPlugin(te, ee) {
            te === "expressions" && setExpressionsPlugin(ee)
        }

        function getFactory(te) {
            switch (te) {
                case "propertyFactory":
                    return PropertyFactory;
                case "shapePropertyFactory":
                    return ShapePropertyFactory;
                case "matrix":
                    return Matrix;
                default:
                    return null
            }
        }
        lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocation, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.useWebWorker = setWebWorker, lottie.setIDPrefix = setPrefix, lottie.__getFactory = getFactory, lottie.version = "5.12.2";

        function checkReady() {
            document.readyState === "complete" && (clearInterval(readyStateCheckInterval), searchAnimations())
        }

        function getQueryVariable(te) {
            for (var ee = queryString.split("&"), re = 0; re < ee.length; re += 1) {
                var ie = ee[re].split("=");
                if (decodeURIComponent(ie[0]) == te) return decodeURIComponent(ie[1])
            }
            return null
        }
        var queryString = ""; {
            var scripts = document.getElementsByTagName("script"),
                index = scripts.length - 1,
                myScript = scripts[index] || {
                    src: ""
                };
            queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, "") : "", getQueryVariable("renderer")
        }
        var readyStateCheckInterval = setInterval(checkReady, 100);
        try {
            _typeof$3(exports) !== "object" && (window.bodymovin = lottie)
        } catch (te) {}
        var ShapeModifiers = function () {
            var te = {},
                ee = {};
            te.registerModifier = re, te.getModifier = ie;

            function re(ne, se) {
                ee[ne] || (ee[ne] = se)
            }

            function ie(ne, se, ae) {
                return new ee[ne](se, ae)
            }
            return te
        }();

        function ShapeModifier() {}
        ShapeModifier.prototype.initModifierProperties = function () {}, ShapeModifier.prototype.addShapeToModifier = function () {}, ShapeModifier.prototype.addShape = function (te) {
            if (!this.closed) {
                te.sh.container.addDynamicProperty(te.sh);
                var ee = {
                    shape: te.sh,
                    data: te,
                    localShapeCollection: shapeCollectionPool.newShapeCollection()
                };
                this.shapes.push(ee), this.addShapeToModifier(ee), this._isAnimated && te.setAsAnimated()
            }
        }, ShapeModifier.prototype.init = function (te, ee) {
            this.shapes = [], this.elem = te, this.initDynamicPropertyContainer(te), this.initModifierProperties(te, ee), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
        }, ShapeModifier.prototype.processKeys = function () {
            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
        }, extendPrototype([DynamicPropertyContainer], ShapeModifier);

        function TrimModifier() {}
        extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function (te, ee) {
            this.s = PropertyFactory.getProp(te, ee.s, 0, .01, this), this.e = PropertyFactory.getProp(te, ee.e, 0, .01, this), this.o = PropertyFactory.getProp(te, ee.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = ee.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
        }, TrimModifier.prototype.addShapeToModifier = function (te) {
            te.pathsData = []
        }, TrimModifier.prototype.calculateShapeEdges = function (te, ee, re, ie, ne) {
            var se = [];
            ee <= 1 ? se.push({
                s: te,
                e: ee
            }) : te >= 1 ? se.push({
                s: te - 1,
                e: ee - 1
            }) : (se.push({
                s: te,
                e: 1
            }), se.push({
                s: 0,
                e: ee - 1
            }));
            var ae = [],
                oe, le = se.length,
                he;
            for (oe = 0; oe < le; oe += 1)
                if (he = se[oe], !(he.e * ne < ie || he.s * ne > ie + re)) {
                    var fe, _e;
                    he.s * ne <= ie ? fe = 0 : fe = (he.s * ne - ie) / re, he.e * ne >= ie + re ? _e = 1 : _e = (he.e * ne - ie) / re, ae.push([fe, _e])
                } return ae.length || ae.push([0, 0]), ae
        }, TrimModifier.prototype.releasePathsData = function (te) {
            var ee, re = te.length;
            for (ee = 0; ee < re; ee += 1) segmentsLengthPool.release(te[ee]);
            return te.length = 0, te
        }, TrimModifier.prototype.processShapes = function (te) {
            var ee, re;
            if (this._mdf || te) {
                var ie = this.o.v % 360 / 360;
                if (ie < 0 && (ie += 1), this.s.v > 1 ? ee = 1 + ie : this.s.v < 0 ? ee = 0 + ie : ee = this.s.v + ie, this.e.v > 1 ? re = 1 + ie : this.e.v < 0 ? re = 0 + ie : re = this.e.v + ie, ee > re) {
                    var ne = ee;
                    ee = re, re = ne
                }
                ee = Math.round(ee * 1e4) * 1e-4, re = Math.round(re * 1e4) * 1e-4, this.sValue = ee, this.eValue = re
            } else ee = this.sValue, re = this.eValue;
            var se, ae, oe = this.shapes.length,
                le, he, fe, _e, ue, de = 0;
            if (re === ee)
                for (ae = 0; ae < oe; ae += 1) this.shapes[ae].localShapeCollection.releaseShapes(), this.shapes[ae].shape._mdf = !0, this.shapes[ae].shape.paths = this.shapes[ae].localShapeCollection, this._mdf && (this.shapes[ae].pathsData.length = 0);
            else if (re === 1 && ee === 0 || re === 0 && ee === 1) {
                if (this._mdf)
                    for (ae = 0; ae < oe; ae += 1) this.shapes[ae].pathsData.length = 0, this.shapes[ae].shape._mdf = !0
            } else {
                var me = [],
                    ce, Ce;
                for (ae = 0; ae < oe; ae += 1)
                    if (ce = this.shapes[ae], !ce.shape._mdf && !this._mdf && !te && this.m !== 2) ce.shape.paths = ce.localShapeCollection;
                    else {
                        if (se = ce.shape.paths, he = se._length, ue = 0, !ce.shape._mdf && ce.pathsData.length) ue = ce.totalShapeLength;
                        else {
                            for (fe = this.releasePathsData(ce.pathsData), le = 0; le < he; le += 1) _e = bez.getSegmentsLength(se.shapes[le]), fe.push(_e), ue += _e.totalLength;
                            ce.totalShapeLength = ue, ce.pathsData = fe
                        }
                        de += ue, ce.shape._mdf = !0
                    } var pe = ee,
                    ve = re,
                    ge = 0,
                    ye;
                for (ae = oe - 1; ae >= 0; ae -= 1)
                    if (ce = this.shapes[ae], ce.shape._mdf) {
                        for (Ce = ce.localShapeCollection, Ce.releaseShapes(), this.m === 2 && oe > 1 ? (ye = this.calculateShapeEdges(ee, re, ce.totalShapeLength, ge, de), ge += ce.totalShapeLength) : ye = [
                                [pe, ve]
                            ], he = ye.length, le = 0; le < he; le += 1) {
                            pe = ye[le][0], ve = ye[le][1], me.length = 0, ve <= 1 ? me.push({
                                s: ce.totalShapeLength * pe,
                                e: ce.totalShapeLength * ve
                            }) : pe >= 1 ? me.push({
                                s: ce.totalShapeLength * (pe - 1),
                                e: ce.totalShapeLength * (ve - 1)
                            }) : (me.push({
                                s: ce.totalShapeLength * pe,
                                e: ce.totalShapeLength
                            }), me.push({
                                s: 0,
                                e: ce.totalShapeLength * (ve - 1)
                            }));
                            var Ee = this.addShapes(ce, me[0]);
                            if (me[0].s !== me[0].e) {
                                if (me.length > 1) {
                                    var Pe = ce.shape.paths.shapes[ce.shape.paths._length - 1];
                                    if (Pe.c) {
                                        var xe = Ee.pop();
                                        this.addPaths(Ee, Ce), Ee = this.addShapes(ce, me[1], xe)
                                    } else this.addPaths(Ee, Ce), Ee = this.addShapes(ce, me[1])
                                }
                                this.addPaths(Ee, Ce)
                            }
                        }
                        ce.shape.paths = Ce
                    }
            }
        }, TrimModifier.prototype.addPaths = function (te, ee) {
            var re, ie = te.length;
            for (re = 0; re < ie; re += 1) ee.addShape(te[re])
        }, TrimModifier.prototype.addSegment = function (te, ee, re, ie, ne, se, ae) {
            ne.setXYAt(ee[0], ee[1], "o", se), ne.setXYAt(re[0], re[1], "i", se + 1), ae && ne.setXYAt(te[0], te[1], "v", se), ne.setXYAt(ie[0], ie[1], "v", se + 1)
        }, TrimModifier.prototype.addSegmentFromArray = function (te, ee, re, ie) {
            ee.setXYAt(te[1], te[5], "o", re), ee.setXYAt(te[2], te[6], "i", re + 1), ie && ee.setXYAt(te[0], te[4], "v", re), ee.setXYAt(te[3], te[7], "v", re + 1)
        }, TrimModifier.prototype.addShapes = function (te, ee, re) {
            var ie = te.pathsData,
                ne = te.shape.paths.shapes,
                se, ae = te.shape.paths._length,
                oe, le, he = 0,
                fe, _e, ue, de, me = [],
                ce, Ce = !0;
            for (re ? (_e = re._length, ce = re._length) : (re = shapePool.newElement(), _e = 0, ce = 0), me.push(re), se = 0; se < ae; se += 1) {
                for (ue = ie[se].lengths, re.c = ne[se].c, le = ne[se].c ? ue.length : ue.length + 1, oe = 1; oe < le; oe += 1)
                    if (fe = ue[oe - 1], he + fe.addedLength < ee.s) he += fe.addedLength, re.c = !1;
                    else if (he > ee.e) {
                    re.c = !1;
                    break
                } else ee.s <= he && ee.e >= he + fe.addedLength ? (this.addSegment(ne[se].v[oe - 1], ne[se].o[oe - 1], ne[se].i[oe], ne[se].v[oe], re, _e, Ce), Ce = !1) : (de = bez.getNewSegment(ne[se].v[oe - 1], ne[se].v[oe], ne[se].o[oe - 1], ne[se].i[oe], (ee.s - he) / fe.addedLength, (ee.e - he) / fe.addedLength, ue[oe - 1]), this.addSegmentFromArray(de, re, _e, Ce), Ce = !1, re.c = !1), he += fe.addedLength, _e += 1;
                if (ne[se].c && ue.length) {
                    if (fe = ue[oe - 1], he <= ee.e) {
                        var pe = ue[oe - 1].addedLength;
                        ee.s <= he && ee.e >= he + pe ? (this.addSegment(ne[se].v[oe - 1], ne[se].o[oe - 1], ne[se].i[0], ne[se].v[0], re, _e, Ce), Ce = !1) : (de = bez.getNewSegment(ne[se].v[oe - 1], ne[se].v[0], ne[se].o[oe - 1], ne[se].i[0], (ee.s - he) / pe, (ee.e - he) / pe, ue[oe - 1]), this.addSegmentFromArray(de, re, _e, Ce), Ce = !1, re.c = !1)
                    } else re.c = !1;
                    he += fe.addedLength, _e += 1
                }
                if (re._length && (re.setXYAt(re.v[ce][0], re.v[ce][1], "i", ce), re.setXYAt(re.v[re._length - 1][0], re.v[re._length - 1][1], "o", re._length - 1)), he > ee.e) break;
                se < ae - 1 && (re = shapePool.newElement(), Ce = !0, me.push(re), _e = 0)
            }
            return me
        };

        function PuckerAndBloatModifier() {}
        extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function (te, ee) {
            this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(te, ee.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length
        }, PuckerAndBloatModifier.prototype.processPath = function (te, ee) {
            var re = ee / 100,
                ie = [0, 0],
                ne = te._length,
                se = 0;
            for (se = 0; se < ne; se += 1) ie[0] += te.v[se][0], ie[1] += te.v[se][1];
            ie[0] /= ne, ie[1] /= ne;
            var ae = shapePool.newElement();
            ae.c = te.c;
            var oe, le, he, fe, _e, ue;
            for (se = 0; se < ne; se += 1) oe = te.v[se][0] + (ie[0] - te.v[se][0]) * re, le = te.v[se][1] + (ie[1] - te.v[se][1]) * re, he = te.o[se][0] + (ie[0] - te.o[se][0]) * -re, fe = te.o[se][1] + (ie[1] - te.o[se][1]) * -re, _e = te.i[se][0] + (ie[0] - te.i[se][0]) * -re, ue = te.i[se][1] + (ie[1] - te.i[se][1]) * -re, ae.setTripleAt(oe, le, he, fe, _e, ue, se);
            return ae
        }, PuckerAndBloatModifier.prototype.processShapes = function (te) {
            var ee, re, ie = this.shapes.length,
                ne, se, ae = this.amount.v;
            if (ae !== 0) {
                var oe, le;
                for (re = 0; re < ie; re += 1) {
                    if (oe = this.shapes[re], le = oe.localShapeCollection, !(!oe.shape._mdf && !this._mdf && !te))
                        for (le.releaseShapes(), oe.shape._mdf = !0, ee = oe.shape.paths.shapes, se = oe.shape.paths._length, ne = 0; ne < se; ne += 1) le.addShape(this.processPath(ee[ne], ae));
                    oe.shape.paths = oe.localShapeCollection
                }
            }
            this.dynamicProperties.length || (this._mdf = !1)
        };
        var TransformPropertyFactory = function () {
            var te = [0, 0];

            function ee(le) {
                var he = this._mdf;
                this.iterateDynamicProperties(), this._mdf = this._mdf || he, this.a && le.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && le.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && le.skewFromAxis(-this.sk.v, this.sa.v), this.r ? le.rotate(-this.r.v) : le.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? le.translate(this.px.v, this.py.v, -this.pz.v) : le.translate(this.px.v, this.py.v, 0) : le.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
            }

            function re(le) {
                if (this.elem.globalData.frameId !== this.frameId) {
                    if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || le) {
                        var he;
                        if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                            var fe, _e;
                            if (he = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (fe = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / he, 0), _e = this.p.getValueAtTime(this.p.keyframes[0].t / he, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (fe = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / he, 0), _e = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / he, 0)) : (fe = this.p.pv, _e = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / he, this.p.offsetTime));
                            else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                fe = [], _e = [];
                                var ue = this.px,
                                    de = this.py;
                                ue._caching.lastFrame + ue.offsetTime <= ue.keyframes[0].t ? (fe[0] = ue.getValueAtTime((ue.keyframes[0].t + .01) / he, 0), fe[1] = de.getValueAtTime((de.keyframes[0].t + .01) / he, 0), _e[0] = ue.getValueAtTime(ue.keyframes[0].t / he, 0), _e[1] = de.getValueAtTime(de.keyframes[0].t / he, 0)) : ue._caching.lastFrame + ue.offsetTime >= ue.keyframes[ue.keyframes.length - 1].t ? (fe[0] = ue.getValueAtTime(ue.keyframes[ue.keyframes.length - 1].t / he, 0), fe[1] = de.getValueAtTime(de.keyframes[de.keyframes.length - 1].t / he, 0), _e[0] = ue.getValueAtTime((ue.keyframes[ue.keyframes.length - 1].t - .01) / he, 0), _e[1] = de.getValueAtTime((de.keyframes[de.keyframes.length - 1].t - .01) / he, 0)) : (fe = [ue.pv, de.pv], _e[0] = ue.getValueAtTime((ue._caching.lastFrame + ue.offsetTime - .01) / he, ue.offsetTime), _e[1] = de.getValueAtTime((de._caching.lastFrame + de.offsetTime - .01) / he, de.offsetTime))
                            } else _e = te, fe = _e;
                            this.v.rotate(-Math.atan2(fe[1] - _e[1], fe[0] - _e[0]))
                        }
                        this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                    }
                    this.frameId = this.elem.globalData.frameId
                }
            }

            function ie() {
                if (this.appliedTransformations = 0, this.pre.reset(), !this.a.effectsSequence.length) this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1;
                else return;
                if (!this.s.effectsSequence.length) this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2;
                else return;
                if (this.sk)
                    if (!this.sk.effectsSequence.length && !this.sa.effectsSequence.length) this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3;
                    else return;
                this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : !this.rz.effectsSequence.length && !this.ry.effectsSequence.length && !this.rx.effectsSequence.length && !this.or.effectsSequence.length && (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4)
            }

            function ne() {}

            function se(le) {
                this._addDynamicProperty(le), this.elem.addDynamicProperty(le), this._isDirty = !0
            }

            function ae(le, he, fe) {
                if (this.elem = le, this.frameId = -1, this.propType = "transform", this.data = he, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(fe || le), he.p && he.p.s ? (this.px = PropertyFactory.getProp(le, he.p.x, 0, 0, this), this.py = PropertyFactory.getProp(le, he.p.y, 0, 0, this), he.p.z && (this.pz = PropertyFactory.getProp(le, he.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(le, he.p || {
                        k: [0, 0, 0]
                    }, 1, 0, this), he.rx) {
                    if (this.rx = PropertyFactory.getProp(le, he.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(le, he.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(le, he.rz, 0, degToRads, this), he.or.k[0].ti) {
                        var _e, ue = he.or.k.length;
                        for (_e = 0; _e < ue; _e += 1) he.or.k[_e].to = null, he.or.k[_e].ti = null
                    }
                    this.or = PropertyFactory.getProp(le, he.or, 1, degToRads, this), this.or.sh = !0
                } else this.r = PropertyFactory.getProp(le, he.r || {
                    k: 0
                }, 0, degToRads, this);
                he.sk && (this.sk = PropertyFactory.getProp(le, he.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(le, he.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(le, he.a || {
                    k: [0, 0, 0]
                }, 1, 0, this), this.s = PropertyFactory.getProp(le, he.s || {
                    k: [100, 100, 100]
                }, 1, .01, this), he.o ? this.o = PropertyFactory.getProp(le, he.o, 0, .01, le) : this.o = {
                    _mdf: !1,
                    v: 1
                }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0)
            }
            ae.prototype = {
                applyToMatrix: ee,
                getValue: re,
                precalculateMatrix: ie,
                autoOrient: ne
            }, extendPrototype([DynamicPropertyContainer], ae), ae.prototype.addDynamicProperty = se, ae.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty;

            function oe(le, he, fe) {
                return new ae(le, he, fe)
            }
            return {
                getTransformProperty: oe
            }
        }();

        function RepeaterModifier() {}
        extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function (te, ee) {
            this.getValue = this.processKeys, this.c = PropertyFactory.getProp(te, ee.c, 0, null, this), this.o = PropertyFactory.getProp(te, ee.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(te, ee.tr, this), this.so = PropertyFactory.getProp(te, ee.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(te, ee.tr.eo, 0, .01, this), this.data = ee, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix
        }, RepeaterModifier.prototype.applyTransforms = function (te, ee, re, ie, ne, se) {
            var ae = se ? -1 : 1,
                oe = ie.s.v[0] + (1 - ie.s.v[0]) * (1 - ne),
                le = ie.s.v[1] + (1 - ie.s.v[1]) * (1 - ne);
            te.translate(ie.p.v[0] * ae * ne, ie.p.v[1] * ae * ne, ie.p.v[2]), ee.translate(-ie.a.v[0], -ie.a.v[1], ie.a.v[2]), ee.rotate(-ie.r.v * ae * ne), ee.translate(ie.a.v[0], ie.a.v[1], ie.a.v[2]), re.translate(-ie.a.v[0], -ie.a.v[1], ie.a.v[2]), re.scale(se ? 1 / oe : oe, se ? 1 / le : le), re.translate(ie.a.v[0], ie.a.v[1], ie.a.v[2])
        }, RepeaterModifier.prototype.init = function (te, ee, re, ie) {
            for (this.elem = te, this.arr = ee, this.pos = re, this.elemsData = ie, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(te), this.initModifierProperties(te, ee[re]); re > 0;) re -= 1, this._elements.unshift(ee[re]);
            this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
        }, RepeaterModifier.prototype.resetElements = function (te) {
            var ee, re = te.length;
            for (ee = 0; ee < re; ee += 1) te[ee]._processed = !1, te[ee].ty === "gr" && this.resetElements(te[ee].it)
        }, RepeaterModifier.prototype.cloneElements = function (te) {
            var ee = JSON.parse(JSON.stringify(te));
            return this.resetElements(ee), ee
        }, RepeaterModifier.prototype.changeGroupRender = function (te, ee) {
            var re, ie = te.length;
            for (re = 0; re < ie; re += 1) te[re]._render = ee, te[re].ty === "gr" && this.changeGroupRender(te[re].it, ee)
        }, RepeaterModifier.prototype.processShapes = function (te) {
            var ee, re, ie, ne, se, ae = !1;
            if (this._mdf || te) {
                var oe = Math.ceil(this.c.v);
                if (this._groups.length < oe) {
                    for (; this._groups.length < oe;) {
                        var le = {
                            it: this.cloneElements(this._elements),
                            ty: "gr"
                        };
                        le.it.push({
                            a: {
                                a: 0,
                                ix: 1,
                                k: [0, 0]
                            },
                            nm: "Transform",
                            o: {
                                a: 0,
                                ix: 7,
                                k: 100
                            },
                            p: {
                                a: 0,
                                ix: 2,
                                k: [0, 0]
                            },
                            r: {
                                a: 1,
                                ix: 6,
                                k: [{
                                    s: 0,
                                    e: 0,
                                    t: 0
                                }, {
                                    s: 0,
                                    e: 0,
                                    t: 1
                                }]
                            },
                            s: {
                                a: 0,
                                ix: 3,
                                k: [100, 100]
                            },
                            sa: {
                                a: 0,
                                ix: 5,
                                k: 0
                            },
                            sk: {
                                a: 0,
                                ix: 4,
                                k: 0
                            },
                            ty: "tr"
                        }), this.arr.splice(0, 0, le), this._groups.splice(0, 0, le), this._currentCopies += 1
                    }
                    this.elem.reloadShapes(), ae = !0
                }
                se = 0;
                var he;
                for (ie = 0; ie <= this._groups.length - 1; ie += 1) {
                    if (he = se < oe, this._groups[ie]._render = he, this.changeGroupRender(this._groups[ie].it, he), !he) {
                        var fe = this.elemsData[ie].it,
                            _e = fe[fe.length - 1];
                        _e.transform.op.v !== 0 ? (_e.transform.op._mdf = !0, _e.transform.op.v = 0) : _e.transform.op._mdf = !1
                    }
                    se += 1
                }
                this._currentCopies = oe;
                var ue = this.o.v,
                    de = ue % 1,
                    me = ue > 0 ? Math.floor(ue) : Math.ceil(ue),
                    ce = this.pMatrix.props,
                    Ce = this.rMatrix.props,
                    pe = this.sMatrix.props;
                this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
                var ve = 0;
                if (ue > 0) {
                    for (; ve < me;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), ve += 1;
                    de && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, de, !1), ve += de)
                } else if (ue < 0) {
                    for (; ve > me;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), ve -= 1;
                    de && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -de, !0), ve -= de)
                }
                ie = this.data.m === 1 ? 0 : this._currentCopies - 1, ne = this.data.m === 1 ? 1 : -1, se = this._currentCopies;
                for (var ge, ye; se;) {
                    if (ee = this.elemsData[ie].it, re = ee[ee.length - 1].transform.mProps.v.props, ye = re.length, ee[ee.length - 1].transform.mProps._mdf = !0, ee[ee.length - 1].transform.op._mdf = !0, ee[ee.length - 1].transform.op.v = this._currentCopies === 1 ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (ie / (this._currentCopies - 1)), ve !== 0) {
                        for ((ie !== 0 && ne === 1 || ie !== this._currentCopies - 1 && ne === -1) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(Ce[0], Ce[1], Ce[2], Ce[3], Ce[4], Ce[5], Ce[6], Ce[7], Ce[8], Ce[9], Ce[10], Ce[11], Ce[12], Ce[13], Ce[14], Ce[15]), this.matrix.transform(pe[0], pe[1], pe[2], pe[3], pe[4], pe[5], pe[6], pe[7], pe[8], pe[9], pe[10], pe[11], pe[12], pe[13], pe[14], pe[15]), this.matrix.transform(ce[0], ce[1], ce[2], ce[3], ce[4], ce[5], ce[6], ce[7], ce[8], ce[9], ce[10], ce[11], ce[12], ce[13], ce[14], ce[15]), ge = 0; ge < ye; ge += 1) re[ge] = this.matrix.props[ge];
                        this.matrix.reset()
                    } else
                        for (this.matrix.reset(), ge = 0; ge < ye; ge += 1) re[ge] = this.matrix.props[ge];
                    ve += 1, se -= 1, ie += ne
                }
            } else
                for (se = this._currentCopies, ie = 0, ne = 1; se;) ee = this.elemsData[ie].it, re = ee[ee.length - 1].transform.mProps.v.props, ee[ee.length - 1].transform.mProps._mdf = !1, ee[ee.length - 1].transform.op._mdf = !1, se -= 1, ie += ne;
            return ae
        }, RepeaterModifier.prototype.addShape = function () {};

        function RoundCornersModifier() {}
        extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function (te, ee) {
            this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(te, ee.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
        }, RoundCornersModifier.prototype.processPath = function (te, ee) {
            var re = shapePool.newElement();
            re.c = te.c;
            var ie, ne = te._length,
                se, ae, oe, le, he, fe, _e = 0,
                ue, de, me, ce, Ce, pe;
            for (ie = 0; ie < ne; ie += 1) se = te.v[ie], oe = te.o[ie], ae = te.i[ie], se[0] === oe[0] && se[1] === oe[1] && se[0] === ae[0] && se[1] === ae[1] ? (ie === 0 || ie === ne - 1) && !te.c ? (re.setTripleAt(se[0], se[1], oe[0], oe[1], ae[0], ae[1], _e), _e += 1) : (ie === 0 ? le = te.v[ne - 1] : le = te.v[ie - 1], he = Math.sqrt(Math.pow(se[0] - le[0], 2) + Math.pow(se[1] - le[1], 2)), fe = he ? Math.min(he / 2, ee) / he : 0, Ce = se[0] + (le[0] - se[0]) * fe, ue = Ce, pe = se[1] - (se[1] - le[1]) * fe, de = pe, me = ue - (ue - se[0]) * roundCorner, ce = de - (de - se[1]) * roundCorner, re.setTripleAt(ue, de, me, ce, Ce, pe, _e), _e += 1, ie === ne - 1 ? le = te.v[0] : le = te.v[ie + 1], he = Math.sqrt(Math.pow(se[0] - le[0], 2) + Math.pow(se[1] - le[1], 2)), fe = he ? Math.min(he / 2, ee) / he : 0, me = se[0] + (le[0] - se[0]) * fe, ue = me, ce = se[1] + (le[1] - se[1]) * fe, de = ce, Ce = ue - (ue - se[0]) * roundCorner, pe = de - (de - se[1]) * roundCorner, re.setTripleAt(ue, de, me, ce, Ce, pe, _e), _e += 1) : (re.setTripleAt(te.v[ie][0], te.v[ie][1], te.o[ie][0], te.o[ie][1], te.i[ie][0], te.i[ie][1], _e), _e += 1);
            return re
        }, RoundCornersModifier.prototype.processShapes = function (te) {
            var ee, re, ie = this.shapes.length,
                ne, se, ae = this.rd.v;
            if (ae !== 0) {
                var oe, le;
                for (re = 0; re < ie; re += 1) {
                    if (oe = this.shapes[re], le = oe.localShapeCollection, !(!oe.shape._mdf && !this._mdf && !te))
                        for (le.releaseShapes(), oe.shape._mdf = !0, ee = oe.shape.paths.shapes, se = oe.shape.paths._length, ne = 0; ne < se; ne += 1) le.addShape(this.processPath(ee[ne], ae));
                    oe.shape.paths = oe.localShapeCollection
                }
            }
            this.dynamicProperties.length || (this._mdf = !1)
        };

        function floatEqual(te, ee) {
            return Math.abs(te - ee) * 1e5 <= Math.min(Math.abs(te), Math.abs(ee))
        }

        function floatZero(te) {
            return Math.abs(te) <= 1e-5
        }

        function lerp(te, ee, re) {
            return te * (1 - re) + ee * re
        }

        function lerpPoint(te, ee, re) {
            return [lerp(te[0], ee[0], re), lerp(te[1], ee[1], re)]
        }

        function quadRoots(te, ee, re) {
            if (te === 0) return [];
            var ie = ee * ee - 4 * te * re;
            if (ie < 0) return [];
            var ne = -ee / (2 * te);
            if (ie === 0) return [ne];
            var se = Math.sqrt(ie) / (2 * te);
            return [ne - se, ne + se]
        }

        function polynomialCoefficients(te, ee, re, ie) {
            return [-te + 3 * ee - 3 * re + ie, 3 * te - 6 * ee + 3 * re, -3 * te + 3 * ee, te]
        }

        function singlePoint(te) {
            return new PolynomialBezier(te, te, te, te, !1)
        }

        function PolynomialBezier(te, ee, re, ie, ne) {
            ne && pointEqual(te, ee) && (ee = lerpPoint(te, ie, 1 / 3)), ne && pointEqual(re, ie) && (re = lerpPoint(te, ie, 2 / 3));
            var se = polynomialCoefficients(te[0], ee[0], re[0], ie[0]),
                ae = polynomialCoefficients(te[1], ee[1], re[1], ie[1]);
            this.a = [se[0], ae[0]], this.b = [se[1], ae[1]], this.c = [se[2], ae[2]], this.d = [se[3], ae[3]], this.points = [te, ee, re, ie]
        }
        PolynomialBezier.prototype.point = function (te) {
            return [((this.a[0] * te + this.b[0]) * te + this.c[0]) * te + this.d[0], ((this.a[1] * te + this.b[1]) * te + this.c[1]) * te + this.d[1]]
        }, PolynomialBezier.prototype.derivative = function (te) {
            return [(3 * te * this.a[0] + 2 * this.b[0]) * te + this.c[0], (3 * te * this.a[1] + 2 * this.b[1]) * te + this.c[1]]
        }, PolynomialBezier.prototype.tangentAngle = function (te) {
            var ee = this.derivative(te);
            return Math.atan2(ee[1], ee[0])
        }, PolynomialBezier.prototype.normalAngle = function (te) {
            var ee = this.derivative(te);
            return Math.atan2(ee[0], ee[1])
        }, PolynomialBezier.prototype.inflectionPoints = function () {
            var te = this.a[1] * this.b[0] - this.a[0] * this.b[1];
            if (floatZero(te)) return [];
            var ee = -.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / te,
                re = ee * ee - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / te;
            if (re < 0) return [];
            var ie = Math.sqrt(re);
            return floatZero(ie) ? ie > 0 && ie < 1 ? [ee] : [] : [ee - ie, ee + ie].filter(function (ne) {
                return ne > 0 && ne < 1
            })
        }, PolynomialBezier.prototype.split = function (te) {
            if (te <= 0) return [singlePoint(this.points[0]), this];
            if (te >= 1) return [this, singlePoint(this.points[this.points.length - 1])];
            var ee = lerpPoint(this.points[0], this.points[1], te),
                re = lerpPoint(this.points[1], this.points[2], te),
                ie = lerpPoint(this.points[2], this.points[3], te),
                ne = lerpPoint(ee, re, te),
                se = lerpPoint(re, ie, te),
                ae = lerpPoint(ne, se, te);
            return [new PolynomialBezier(this.points[0], ee, ne, ae, !0), new PolynomialBezier(ae, se, ie, this.points[3], !0)]
        };

        function extrema(te, ee) {
            var re = te.points[0][ee],
                ie = te.points[te.points.length - 1][ee];
            if (re > ie) {
                var ne = ie;
                ie = re, re = ne
            }
            for (var se = quadRoots(3 * te.a[ee], 2 * te.b[ee], te.c[ee]), ae = 0; ae < se.length; ae += 1)
                if (se[ae] > 0 && se[ae] < 1) {
                    var oe = te.point(se[ae])[ee];
                    oe < re ? re = oe : oe > ie && (ie = oe)
                } return {
                min: re,
                max: ie
            }
        }
        PolynomialBezier.prototype.bounds = function () {
            return {
                x: extrema(this, 0),
                y: extrema(this, 1)
            }
        }, PolynomialBezier.prototype.boundingBox = function () {
            var te = this.bounds();
            return {
                left: te.x.min,
                right: te.x.max,
                top: te.y.min,
                bottom: te.y.max,
                width: te.x.max - te.x.min,
                height: te.y.max - te.y.min,
                cx: (te.x.max + te.x.min) / 2,
                cy: (te.y.max + te.y.min) / 2
            }
        };

        function intersectData(te, ee, re) {
            var ie = te.boundingBox();
            return {
                cx: ie.cx,
                cy: ie.cy,
                width: ie.width,
                height: ie.height,
                bez: te,
                t: (ee + re) / 2,
                t1: ee,
                t2: re
            }
        }

        function splitData(te) {
            var ee = te.bez.split(.5);
            return [intersectData(ee[0], te.t1, te.t), intersectData(ee[1], te.t, te.t2)]
        }

        function boxIntersect(te, ee) {
            return Math.abs(te.cx - ee.cx) * 2 < te.width + ee.width && Math.abs(te.cy - ee.cy) * 2 < te.height + ee.height
        }

        function intersectsImpl(te, ee, re, ie, ne, se) {
            if (boxIntersect(te, ee)) {
                if (re >= se || te.width <= ie && te.height <= ie && ee.width <= ie && ee.height <= ie) {
                    ne.push([te.t, ee.t]);
                    return
                }
                var ae = splitData(te),
                    oe = splitData(ee);
                intersectsImpl(ae[0], oe[0], re + 1, ie, ne, se), intersectsImpl(ae[0], oe[1], re + 1, ie, ne, se), intersectsImpl(ae[1], oe[0], re + 1, ie, ne, se), intersectsImpl(ae[1], oe[1], re + 1, ie, ne, se)
            }
        }
        PolynomialBezier.prototype.intersections = function (te, ee, re) {
            ee === void 0 && (ee = 2), re === void 0 && (re = 7);
            var ie = [];
            return intersectsImpl(intersectData(this, 0, 1), intersectData(te, 0, 1), 0, ee, ie, re), ie
        }, PolynomialBezier.shapeSegment = function (te, ee) {
            var re = (ee + 1) % te.length();
            return new PolynomialBezier(te.v[ee], te.o[ee], te.i[re], te.v[re], !0)
        }, PolynomialBezier.shapeSegmentInverted = function (te, ee) {
            var re = (ee + 1) % te.length();
            return new PolynomialBezier(te.v[re], te.i[re], te.o[ee], te.v[ee], !0)
        };

        function crossProduct(te, ee) {
            return [te[1] * ee[2] - te[2] * ee[1], te[2] * ee[0] - te[0] * ee[2], te[0] * ee[1] - te[1] * ee[0]]
        }

        function lineIntersection(te, ee, re, ie) {
            var ne = [te[0], te[1], 1],
                se = [ee[0], ee[1], 1],
                ae = [re[0], re[1], 1],
                oe = [ie[0], ie[1], 1],
                le = crossProduct(crossProduct(ne, se), crossProduct(ae, oe));
            return floatZero(le[2]) ? null : [le[0] / le[2], le[1] / le[2]]
        }

        function polarOffset(te, ee, re) {
            return [te[0] + Math.cos(ee) * re, te[1] - Math.sin(ee) * re]
        }

        function pointDistance(te, ee) {
            return Math.hypot(te[0] - ee[0], te[1] - ee[1])
        }

        function pointEqual(te, ee) {
            return floatEqual(te[0], ee[0]) && floatEqual(te[1], ee[1])
        }

        function ZigZagModifier() {}
        extendPrototype([ShapeModifier], ZigZagModifier), ZigZagModifier.prototype.initModifierProperties = function (te, ee) {
            this.getValue = this.processKeys, this.amplitude = PropertyFactory.getProp(te, ee.s, 0, null, this), this.frequency = PropertyFactory.getProp(te, ee.r, 0, null, this), this.pointsType = PropertyFactory.getProp(te, ee.pt, 0, null, this), this._isAnimated = this.amplitude.effectsSequence.length !== 0 || this.frequency.effectsSequence.length !== 0 || this.pointsType.effectsSequence.length !== 0
        };

        function setPoint(te, ee, re, ie, ne, se, ae) {
            var oe = re - Math.PI / 2,
                le = re + Math.PI / 2,
                he = ee[0] + Math.cos(re) * ie * ne,
                fe = ee[1] - Math.sin(re) * ie * ne;
            te.setTripleAt(he, fe, he + Math.cos(oe) * se, fe - Math.sin(oe) * se, he + Math.cos(le) * ae, fe - Math.sin(le) * ae, te.length())
        }

        function getPerpendicularVector(te, ee) {
            var re = [ee[0] - te[0], ee[1] - te[1]],
                ie = -Math.PI * .5,
                ne = [Math.cos(ie) * re[0] - Math.sin(ie) * re[1], Math.sin(ie) * re[0] + Math.cos(ie) * re[1]];
            return ne
        }

        function getProjectingAngle(te, ee) {
            var re = ee === 0 ? te.length() - 1 : ee - 1,
                ie = (ee + 1) % te.length(),
                ne = te.v[re],
                se = te.v[ie],
                ae = getPerpendicularVector(ne, se);
            return Math.atan2(0, 1) - Math.atan2(ae[1], ae[0])
        }

        function zigZagCorner(te, ee, re, ie, ne, se, ae) {
            var oe = getProjectingAngle(ee, re),
                le = ee.v[re % ee._length],
                he = ee.v[re === 0 ? ee._length - 1 : re - 1],
                fe = ee.v[(re + 1) % ee._length],
                _e = se === 2 ? Math.sqrt(Math.pow(le[0] - he[0], 2) + Math.pow(le[1] - he[1], 2)) : 0,
                ue = se === 2 ? Math.sqrt(Math.pow(le[0] - fe[0], 2) + Math.pow(le[1] - fe[1], 2)) : 0;
            setPoint(te, ee.v[re % ee._length], oe, ae, ie, ue / ((ne + 1) * 2), _e / ((ne + 1) * 2))
        }

        function zigZagSegment(te, ee, re, ie, ne, se) {
            for (var ae = 0; ae < ie; ae += 1) {
                var oe = (ae + 1) / (ie + 1),
                    le = ne === 2 ? Math.sqrt(Math.pow(ee.points[3][0] - ee.points[0][0], 2) + Math.pow(ee.points[3][1] - ee.points[0][1], 2)) : 0,
                    he = ee.normalAngle(oe),
                    fe = ee.point(oe);
                setPoint(te, fe, he, se, re, le / ((ie + 1) * 2), le / ((ie + 1) * 2)), se = -se
            }
            return se
        }
        ZigZagModifier.prototype.processPath = function (te, ee, re, ie) {
            var ne = te._length,
                se = shapePool.newElement();
            if (se.c = te.c, te.c || (ne -= 1), ne === 0) return se;
            var ae = -1,
                oe = PolynomialBezier.shapeSegment(te, 0);
            zigZagCorner(se, te, 0, ee, re, ie, ae);
            for (var le = 0; le < ne; le += 1) ae = zigZagSegment(se, oe, ee, re, ie, -ae), le === ne - 1 && !te.c ? oe = null : oe = PolynomialBezier.shapeSegment(te, (le + 1) % ne), zigZagCorner(se, te, le + 1, ee, re, ie, ae);
            return se
        }, ZigZagModifier.prototype.processShapes = function (te) {
            var ee, re, ie = this.shapes.length,
                ne, se, ae = this.amplitude.v,
                oe = Math.max(0, Math.round(this.frequency.v)),
                le = this.pointsType.v;
            if (ae !== 0) {
                var he, fe;
                for (re = 0; re < ie; re += 1) {
                    if (he = this.shapes[re], fe = he.localShapeCollection, !(!he.shape._mdf && !this._mdf && !te))
                        for (fe.releaseShapes(), he.shape._mdf = !0, ee = he.shape.paths.shapes, se = he.shape.paths._length, ne = 0; ne < se; ne += 1) fe.addShape(this.processPath(ee[ne], ae, oe, le));
                    he.shape.paths = he.localShapeCollection
                }
            }
            this.dynamicProperties.length || (this._mdf = !1)
        };

        function linearOffset(te, ee, re) {
            var ie = Math.atan2(ee[0] - te[0], ee[1] - te[1]);
            return [polarOffset(te, ie, re), polarOffset(ee, ie, re)]
        }

        function offsetSegment(te, ee) {
            var re, ie, ne, se, ae, oe, le;
            le = linearOffset(te.points[0], te.points[1], ee), re = le[0], ie = le[1], le = linearOffset(te.points[1], te.points[2], ee), ne = le[0], se = le[1], le = linearOffset(te.points[2], te.points[3], ee), ae = le[0], oe = le[1];
            var he = lineIntersection(re, ie, ne, se);
            he === null && (he = ie);
            var fe = lineIntersection(ae, oe, ne, se);
            return fe === null && (fe = ae), new PolynomialBezier(re, he, fe, oe)
        }

        function joinLines(te, ee, re, ie, ne) {
            var se = ee.points[3],
                ae = re.points[0];
            if (ie === 3 || pointEqual(se, ae)) return se;
            if (ie === 2) {
                var oe = -ee.tangentAngle(1),
                    le = -re.tangentAngle(0) + Math.PI,
                    he = lineIntersection(se, polarOffset(se, oe + Math.PI / 2, 100), ae, polarOffset(ae, oe + Math.PI / 2, 100)),
                    fe = he ? pointDistance(he, se) : pointDistance(se, ae) / 2,
                    _e = polarOffset(se, oe, 2 * fe * roundCorner);
                return te.setXYAt(_e[0], _e[1], "o", te.length() - 1), _e = polarOffset(ae, le, 2 * fe * roundCorner), te.setTripleAt(ae[0], ae[1], ae[0], ae[1], _e[0], _e[1], te.length()), ae
            }
            var ue = pointEqual(se, ee.points[2]) ? ee.points[0] : ee.points[2],
                de = pointEqual(ae, re.points[1]) ? re.points[3] : re.points[1],
                me = lineIntersection(ue, se, ae, de);
            return me && pointDistance(me, se) < ne ? (te.setTripleAt(me[0], me[1], me[0], me[1], me[0], me[1], te.length()), me) : se
        }

        function getIntersection(te, ee) {
            var re = te.intersections(ee);
            return re.length && floatEqual(re[0][0], 1) && re.shift(), re.length ? re[0] : null
        }

        function pruneSegmentIntersection(te, ee) {
            var re = te.slice(),
                ie = ee.slice(),
                ne = getIntersection(te[te.length - 1], ee[0]);
            return ne && (re[te.length - 1] = te[te.length - 1].split(ne[0])[0], ie[0] = ee[0].split(ne[1])[1]), te.length > 1 && ee.length > 1 && (ne = getIntersection(te[0], ee[ee.length - 1]), ne) ? [
                [te[0].split(ne[0])[0]],
                [ee[ee.length - 1].split(ne[1])[1]]
            ] : [re, ie]
        }

        function pruneIntersections(te) {
            for (var ee, re = 1; re < te.length; re += 1) ee = pruneSegmentIntersection(te[re - 1], te[re]), te[re - 1] = ee[0], te[re] = ee[1];
            return te.length > 1 && (ee = pruneSegmentIntersection(te[te.length - 1], te[0]), te[te.length - 1] = ee[0], te[0] = ee[1]), te
        }

        function offsetSegmentSplit(te, ee) {
            var re = te.inflectionPoints(),
                ie, ne, se, ae;
            if (re.length === 0) return [offsetSegment(te, ee)];
            if (re.length === 1 || floatEqual(re[1], 1)) return se = te.split(re[0]), ie = se[0], ne = se[1], [offsetSegment(ie, ee), offsetSegment(ne, ee)];
            se = te.split(re[0]), ie = se[0];
            var oe = (re[1] - re[0]) / (1 - re[0]);
            return se = se[1].split(oe), ae = se[0], ne = se[1], [offsetSegment(ie, ee), offsetSegment(ae, ee), offsetSegment(ne, ee)]
        }

        function OffsetPathModifier() {}
        extendPrototype([ShapeModifier], OffsetPathModifier), OffsetPathModifier.prototype.initModifierProperties = function (te, ee) {
            this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(te, ee.a, 0, null, this), this.miterLimit = PropertyFactory.getProp(te, ee.ml, 0, null, this), this.lineJoin = ee.lj, this._isAnimated = this.amount.effectsSequence.length !== 0
        }, OffsetPathModifier.prototype.processPath = function (te, ee, re, ie) {
            var ne = shapePool.newElement();
            ne.c = te.c;
            var se = te.length();
            te.c || (se -= 1);
            var ae, oe, le, he = [];
            for (ae = 0; ae < se; ae += 1) le = PolynomialBezier.shapeSegment(te, ae), he.push(offsetSegmentSplit(le, ee));
            if (!te.c)
                for (ae = se - 1; ae >= 0; ae -= 1) le = PolynomialBezier.shapeSegmentInverted(te, ae), he.push(offsetSegmentSplit(le, ee));
            he = pruneIntersections(he);
            var fe = null,
                _e = null;
            for (ae = 0; ae < he.length; ae += 1) {
                var ue = he[ae];
                for (_e && (fe = joinLines(ne, _e, ue[0], re, ie)), _e = ue[ue.length - 1], oe = 0; oe < ue.length; oe += 1) le = ue[oe], fe && pointEqual(le.points[0], fe) ? ne.setXYAt(le.points[1][0], le.points[1][1], "o", ne.length() - 1) : ne.setTripleAt(le.points[0][0], le.points[0][1], le.points[1][0], le.points[1][1], le.points[0][0], le.points[0][1], ne.length()), ne.setTripleAt(le.points[3][0], le.points[3][1], le.points[3][0], le.points[3][1], le.points[2][0], le.points[2][1], ne.length()), fe = le.points[3]
            }
            return he.length && joinLines(ne, _e, he[0][0], re, ie), ne
        }, OffsetPathModifier.prototype.processShapes = function (te) {
            var ee, re, ie = this.shapes.length,
                ne, se, ae = this.amount.v,
                oe = this.miterLimit.v,
                le = this.lineJoin;
            if (ae !== 0) {
                var he, fe;
                for (re = 0; re < ie; re += 1) {
                    if (he = this.shapes[re], fe = he.localShapeCollection, !(!he.shape._mdf && !this._mdf && !te))
                        for (fe.releaseShapes(), he.shape._mdf = !0, ee = he.shape.paths.shapes, se = he.shape.paths._length, ne = 0; ne < se; ne += 1) fe.addShape(this.processPath(ee[ne], ae, le, oe));
                    he.shape.paths = he.localShapeCollection
                }
            }
            this.dynamicProperties.length || (this._mdf = !1)
        };

        function getFontProperties(te) {
            for (var ee = te.fStyle ? te.fStyle.split(" ") : [], re = "normal", ie = "normal", ne = ee.length, se, ae = 0; ae < ne; ae += 1) switch (se = ee[ae].toLowerCase(), se) {
                case "italic":
                    ie = "italic";
                    break;
                case "bold":
                    re = "700";
                    break;
                case "black":
                    re = "900";
                    break;
                case "medium":
                    re = "500";
                    break;
                case "regular":
                case "normal":
                    re = "400";
                    break;
                case "light":
                case "thin":
                    re = "200";
                    break
            }
            return {
                style: ie,
                weight: te.fWeight || re
            }
        }
        var FontManager = function () {
            var te = 5e3,
                ee = {
                    w: 0,
                    size: 0,
                    shapes: [],
                    data: {
                        shapes: []
                    }
                },
                re = [];
            re = re.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
            var ie = 127988,
                ne = 917631,
                se = 917601,
                ae = 917626,
                oe = 65039,
                le = 8205,
                he = 127462,
                fe = 127487,
                _e = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"];

            function ue(Se) {
                var Ae = Se.split(","),
                    be, De = Ae.length,
                    Te = [];
                for (be = 0; be < De; be += 1) Ae[be] !== "sans-serif" && Ae[be] !== "monospace" && Te.push(Ae[be]);
                return Te.join(",")
            }

            function de(Se, Ae) {
                var be = createTag("span");
                be.setAttribute("aria-hidden", !0), be.style.fontFamily = Ae;
                var De = createTag("span");
                De.innerText = "giItT1WQy@!-/#", be.style.position = "absolute", be.style.left = "-10000px", be.style.top = "-10000px", be.style.fontSize = "300px", be.style.fontVariant = "normal", be.style.fontStyle = "normal", be.style.fontWeight = "normal", be.style.letterSpacing = "0", be.appendChild(De), document.body.appendChild(be);
                var Te = De.offsetWidth;
                return De.style.fontFamily = ue(Se) + ", " + Ae, {
                    node: De,
                    w: Te,
                    parent: be
                }
            }

            function me() {
                var Se, Ae = this.fonts.length,
                    be, De, Te = Ae;
                for (Se = 0; Se < Ae; Se += 1) this.fonts[Se].loaded ? Te -= 1 : this.fonts[Se].fOrigin === "n" || this.fonts[Se].origin === 0 ? this.fonts[Se].loaded = !0 : (be = this.fonts[Se].monoCase.node, De = this.fonts[Se].monoCase.w, be.offsetWidth !== De ? (Te -= 1, this.fonts[Se].loaded = !0) : (be = this.fonts[Se].sansCase.node, De = this.fonts[Se].sansCase.w, be.offsetWidth !== De && (Te -= 1, this.fonts[Se].loaded = !0)), this.fonts[Se].loaded && (this.fonts[Se].sansCase.parent.parentNode.removeChild(this.fonts[Se].sansCase.parent), this.fonts[Se].monoCase.parent.parentNode.removeChild(this.fonts[Se].monoCase.parent)));
                Te !== 0 && Date.now() - this.initTime < te ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
            }

            function ce(Se, Ae) {
                var be = document.body && Ae ? "svg" : "canvas",
                    De, Te = getFontProperties(Se);
                if (be === "svg") {
                    var ke = createNS("text");
                    ke.style.fontSize = "100px", ke.setAttribute("font-family", Se.fFamily), ke.setAttribute("font-style", Te.style), ke.setAttribute("font-weight", Te.weight), ke.textContent = "1", Se.fClass ? (ke.style.fontFamily = "inherit", ke.setAttribute("class", Se.fClass)) : ke.style.fontFamily = Se.fFamily, Ae.appendChild(ke), De = ke
                } else {
                    var Ve = new OffscreenCanvas(500, 500).getContext("2d");
                    Ve.font = Te.style + " " + Te.weight + " 100px " + Se.fFamily, De = Ve
                }

                function We(Ne) {
                    return be === "svg" ? (De.textContent = Ne, De.getComputedTextLength()) : De.measureText(Ne).width
                }
                return {
                    measureText: We
                }
            }

            function Ce(Se, Ae) {
                if (!Se) {
                    this.isLoaded = !0;
                    return
                }
                if (this.chars) {
                    this.isLoaded = !0, this.fonts = Se.list;
                    return
                }
                if (!document.body) {
                    this.isLoaded = !0, Se.list.forEach(function (dt) {
                        dt.helper = ce(dt), dt.cache = {}
                    }), this.fonts = Se.list;
                    return
                }
                var be = Se.list,
                    De, Te = be.length,
                    ke = Te;
                for (De = 0; De < Te; De += 1) {
                    var Ve = !0,
                        We, Ne;
                    if (be[De].loaded = !1, be[De].monoCase = de(be[De].fFamily, "monospace"), be[De].sansCase = de(be[De].fFamily, "sans-serif"), !be[De].fPath) be[De].loaded = !0, ke -= 1;
                    else if (be[De].fOrigin === "p" || be[De].origin === 3) {
                        if (We = document.querySelectorAll('style[f-forigin="p"][f-family="' + be[De].fFamily + '"], style[f-origin="3"][f-family="' + be[De].fFamily + '"]'), We.length > 0 && (Ve = !1), Ve) {
                            var He = createTag("style");
                            He.setAttribute("f-forigin", be[De].fOrigin), He.setAttribute("f-origin", be[De].origin), He.setAttribute("f-family", be[De].fFamily), He.type = "text/css", He.innerText = "@font-face {font-family: " + be[De].fFamily + "; font-style: normal; src: url('" + be[De].fPath + "');}", Ae.appendChild(He)
                        }
                    } else if (be[De].fOrigin === "g" || be[De].origin === 1) {
                        for (We = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), Ne = 0; Ne < We.length; Ne += 1) We[Ne].href.indexOf(be[De].fPath) !== -1 && (Ve = !1);
                        if (Ve) {
                            var qe = createTag("link");
                            qe.setAttribute("f-forigin", be[De].fOrigin), qe.setAttribute("f-origin", be[De].origin), qe.type = "text/css", qe.rel = "stylesheet", qe.href = be[De].fPath, document.body.appendChild(qe)
                        }
                    } else if (be[De].fOrigin === "t" || be[De].origin === 2) {
                        for (We = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), Ne = 0; Ne < We.length; Ne += 1) be[De].fPath === We[Ne].src && (Ve = !1);
                        if (Ve) {
                            var Ue = createTag("link");
                            Ue.setAttribute("f-forigin", be[De].fOrigin), Ue.setAttribute("f-origin", be[De].origin), Ue.setAttribute("rel", "stylesheet"), Ue.setAttribute("href", be[De].fPath), Ae.appendChild(Ue)
                        }
                    }
                    be[De].helper = ce(be[De], Ae), be[De].cache = {}, this.fonts.push(be[De])
                }
                ke === 0 ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
            }

            function pe(Se) {
                if (Se) {
                    this.chars || (this.chars = []);
                    var Ae, be = Se.length,
                        De, Te = this.chars.length,
                        ke;
                    for (Ae = 0; Ae < be; Ae += 1) {
                        for (De = 0, ke = !1; De < Te;) this.chars[De].style === Se[Ae].style && this.chars[De].fFamily === Se[Ae].fFamily && this.chars[De].ch === Se[Ae].ch && (ke = !0), De += 1;
                        ke || (this.chars.push(Se[Ae]), Te += 1)
                    }
                }
            }

            function ve(Se, Ae, be) {
                for (var De = 0, Te = this.chars.length; De < Te;) {
                    if (this.chars[De].ch === Se && this.chars[De].style === Ae && this.chars[De].fFamily === be) return this.chars[De];
                    De += 1
                }
                return (typeof Se == "string" && Se.charCodeAt(0) !== 13 || !Se) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", Se, Ae, be)), ee
            }

            function ge(Se, Ae, be) {
                var De = this.getFontByName(Ae),
                    Te = Se;
                if (!De.cache[Te]) {
                    var ke = De.helper;
                    if (Se === " ") {
                        var Ve = ke.measureText("|" + Se + "|"),
                            We = ke.measureText("||");
                        De.cache[Te] = (Ve - We) / 100
                    } else De.cache[Te] = ke.measureText(Se) / 100
                }
                return De.cache[Te] * be
            }

            function ye(Se) {
                for (var Ae = 0, be = this.fonts.length; Ae < be;) {
                    if (this.fonts[Ae].fName === Se) return this.fonts[Ae];
                    Ae += 1
                }
                return this.fonts[0]
            }

            function Ee(Se) {
                var Ae = 0,
                    be = Se.charCodeAt(0);
                if (be >= 55296 && be <= 56319) {
                    var De = Se.charCodeAt(1);
                    De >= 56320 && De <= 57343 && (Ae = (be - 55296) * 1024 + De - 56320 + 65536)
                }
                return Ae
            }

            function Pe(Se, Ae) {
                var be = Se.toString(16) + Ae.toString(16);
                return _e.indexOf(be) !== -1
            }

            function xe(Se) {
                return Se === le
            }

            function we(Se) {
                return Se === oe
            }

            function Fe(Se) {
                var Ae = Ee(Se);
                return Ae >= he && Ae <= fe
            }

            function Le(Se) {
                return Fe(Se.substr(0, 2)) && Fe(Se.substr(2, 2))
            }

            function Re(Se) {
                return re.indexOf(Se) !== -1
            }

            function Me(Se, Ae) {
                var be = Ee(Se.substr(Ae, 2));
                if (be !== ie) return !1;
                var De = 0;
                for (Ae += 2; De < 5;) {
                    if (be = Ee(Se.substr(Ae, 2)), be < se || be > ae) return !1;
                    De += 1, Ae += 2
                }
                return Ee(Se.substr(Ae, 2)) === ne
            }

            function $e() {
                this.isLoaded = !0
            }
            var Be = function () {
                this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)
            };
            Be.isModifier = Pe, Be.isZeroWidthJoiner = xe, Be.isFlagEmoji = Le, Be.isRegionalCode = Fe, Be.isCombinedCharacter = Re, Be.isRegionalFlag = Me, Be.isVariationSelector = we, Be.BLACK_FLAG_CODE_POINT = ie;
            var Ie = {
                addChars: pe,
                addFonts: Ce,
                getCharData: ve,
                getFontByName: ye,
                measureText: ge,
                checkLoadedFonts: me,
                setIsLoaded: $e
            };
            return Be.prototype = Ie, Be
        }();

        function SlotManager(te) {
            this.animationData = te
        }
        SlotManager.prototype.getProp = function (te) {
            return this.animationData.slots && this.animationData.slots[te.sid] ? Object.assign(te, this.animationData.slots[te.sid].p) : te
        };

        function slotFactory(te) {
            return new SlotManager(te)
        }

        function RenderableElement() {}
        RenderableElement.prototype = {
            initRenderable: function () {
                this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = []
            },
            addRenderableComponent: function (ee) {
                this.renderableComponents.indexOf(ee) === -1 && this.renderableComponents.push(ee)
            },
            removeRenderableComponent: function (ee) {
                this.renderableComponents.indexOf(ee) !== -1 && this.renderableComponents.splice(this.renderableComponents.indexOf(ee), 1)
            },
            prepareRenderableFrame: function (ee) {
                this.checkLayerLimits(ee)
            },
            checkTransparency: function () {
                this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show())
            },
            checkLayerLimits: function (ee) {
                this.data.ip - this.data.st <= ee && this.data.op - this.data.st > ee ? this.isInRange !== !0 && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : this.isInRange !== !1 && (this.globalData._mdf = !0, this.isInRange = !1, this.hide())
            },
            renderRenderable: function () {
                var ee, re = this.renderableComponents.length;
                for (ee = 0; ee < re; ee += 1) this.renderableComponents[ee].renderFrame(this._isFirstFrame)
            },
            sourceRectAtTime: function () {
                return {
                    top: 0,
                    left: 0,
                    width: 100,
                    height: 100
                }
            },
            getLayerSize: function () {
                return this.data.ty === 5 ? {
                    w: this.data.textData.width,
                    h: this.data.textData.height
                } : {
                    w: this.data.width,
                    h: this.data.height
                }
            }
        };
        var getBlendMode = function () {
            var te = {
                0: "source-over",
                1: "multiply",
                2: "screen",
                3: "overlay",
                4: "darken",
                5: "lighten",
                6: "color-dodge",
                7: "color-burn",
                8: "hard-light",
                9: "soft-light",
                10: "difference",
                11: "exclusion",
                12: "hue",
                13: "saturation",
                14: "color",
                15: "luminosity"
            };
            return function (ee) {
                return te[ee] || ""
            }
        }();

        function SliderEffect(te, ee, re) {
            this.p = PropertyFactory.getProp(ee, te.v, 0, 0, re)
        }

        function AngleEffect(te, ee, re) {
            this.p = PropertyFactory.getProp(ee, te.v, 0, 0, re)
        }

        function ColorEffect(te, ee, re) {
            this.p = PropertyFactory.getProp(ee, te.v, 1, 0, re)
        }

        function PointEffect(te, ee, re) {
            this.p = PropertyFactory.getProp(ee, te.v, 1, 0, re)
        }

        function LayerIndexEffect(te, ee, re) {
            this.p = PropertyFactory.getProp(ee, te.v, 0, 0, re)
        }

        function MaskIndexEffect(te, ee, re) {
            this.p = PropertyFactory.getProp(ee, te.v, 0, 0, re)
        }

        function CheckboxEffect(te, ee, re) {
            this.p = PropertyFactory.getProp(ee, te.v, 0, 0, re)
        }

        function NoValueEffect() {
            this.p = {}
        }

        function EffectsManager(te, ee) {
            var re = te.ef || [];
            this.effectElements = [];
            var ie, ne = re.length,
                se;
            for (ie = 0; ie < ne; ie += 1) se = new GroupEffect(re[ie], ee), this.effectElements.push(se)
        }

        function GroupEffect(te, ee) {
            this.init(te, ee)
        }
        extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function (te, ee) {
            this.data = te, this.effectElements = [], this.initDynamicPropertyContainer(ee);
            var re, ie = this.data.ef.length,
                ne, se = this.data.ef;
            for (re = 0; re < ie; re += 1) {
                switch (ne = null, se[re].ty) {
                    case 0:
                        ne = new SliderEffect(se[re], ee, this);
                        break;
                    case 1:
                        ne = new AngleEffect(se[re], ee, this);
                        break;
                    case 2:
                        ne = new ColorEffect(se[re], ee, this);
                        break;
                    case 3:
                        ne = new PointEffect(se[re], ee, this);
                        break;
                    case 4:
                    case 7:
                        ne = new CheckboxEffect(se[re], ee, this);
                        break;
                    case 10:
                        ne = new LayerIndexEffect(se[re], ee, this);
                        break;
                    case 11:
                        ne = new MaskIndexEffect(se[re], ee, this);
                        break;
                    case 5:
                        ne = new EffectsManager(se[re], ee);
                        break;
                    default:
                        ne = new NoValueEffect(se[re]);
                        break
                }
                ne && this.effectElements.push(ne)
            }
        };

        function BaseElement() {}
        BaseElement.prototype = {
            checkMasks: function () {
                if (!this.data.hasMask) return !1;
                for (var ee = 0, re = this.data.masksProperties.length; ee < re;) {
                    if (this.data.masksProperties[ee].mode !== "n" && this.data.masksProperties[ee].cl !== !1) return !0;
                    ee += 1
                }
                return !1
            },
            initExpressions: function () {
                var ee = getExpressionInterfaces();
                if (ee) {
                    var re = ee("layer"),
                        ie = ee("effects"),
                        ne = ee("shape"),
                        se = ee("text"),
                        ae = ee("comp");
                    this.layerInterface = re(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
                    var oe = ie.createEffectsInterface(this, this.layerInterface);
                    this.layerInterface.registerEffectsInterface(oe), this.data.ty === 0 || this.data.xt ? this.compInterface = ae(this) : this.data.ty === 4 ? (this.layerInterface.shapeInterface = ne(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : this.data.ty === 5 && (this.layerInterface.textInterface = se(this), this.layerInterface.text = this.layerInterface.textInterface)
                }
            },
            setBlendMode: function () {
                var ee = getBlendMode(this.data.bm),
                    re = this.baseElement || this.layerElement;
                re.style["mix-blend-mode"] = ee
            },
            initBaseData: function (ee, re, ie) {
                this.globalData = re, this.comp = ie, this.data = ee, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties)
            },
            getType: function () {
                return this.type
            },
            sourceRectAtTime: function () {}
        };

        function FrameElement() {}
        FrameElement.prototype = {
            initFrame: function () {
                this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1
            },
            prepareProperties: function (ee, re) {
                var ie, ne = this.dynamicProperties.length;
                for (ie = 0; ie < ne; ie += 1)(re || this._isParent && this.dynamicProperties[ie].propType === "transform") && (this.dynamicProperties[ie].getValue(), this.dynamicProperties[ie]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
            },
            addDynamicProperty: function (ee) {
                this.dynamicProperties.indexOf(ee) === -1 && this.dynamicProperties.push(ee)
            }
        };

        function FootageElement(te, ee, re) {
            this.initFrame(), this.initRenderable(), this.assetData = ee.getAssetData(te.refId), this.footageData = ee.imageLoader.getAsset(this.assetData), this.initBaseData(te, ee, re)
        }
        FootageElement.prototype.prepareFrame = function () {}, extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement), FootageElement.prototype.getBaseElement = function () {
            return null
        }, FootageElement.prototype.renderFrame = function () {}, FootageElement.prototype.destroy = function () {}, FootageElement.prototype.initExpressions = function () {
            var te = getExpressionInterfaces();
            if (te) {
                var ee = te("footage");
                this.layerInterface = ee(this)
            }
        }, FootageElement.prototype.getFootageData = function () {
            return this.footageData
        };

        function AudioElement(te, ee, re) {
            this.initFrame(), this.initRenderable(), this.assetData = ee.getAssetData(te.refId), this.initBaseData(te, ee, re), this._isPlaying = !1, this._canPlay = !1;
            var ie = this.globalData.getAssetsPath(this.assetData);
            this.audio = this.globalData.audioController.createAudio(ie), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = te.tm ? PropertyFactory.getProp(this, te.tm, 0, ee.frameRate, this) : {
                _placeholder: !0
            }, this.lv = PropertyFactory.getProp(this, te.au && te.au.lv ? te.au.lv : {
                k: [100]
            }, 1, .01, this)
        }
        AudioElement.prototype.prepareFrame = function (te) {
            if (this.prepareRenderableFrame(te, !0), this.prepareProperties(te, !0), this.tm._placeholder) this._currentTime = te / this.data.sr;
            else {
                var ee = this.tm.v;
                this._currentTime = ee
            }
            this._volume = this.lv.v[0];
            var re = this._volume * this._volumeMultiplier;
            this._previousVolume !== re && (this._previousVolume = re, this.audio.volume(re))
        }, extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement), AudioElement.prototype.renderFrame = function () {
            this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0))
        }, AudioElement.prototype.show = function () {}, AudioElement.prototype.hide = function () {
            this.audio.pause(), this._isPlaying = !1
        }, AudioElement.prototype.pause = function () {
            this.audio.pause(), this._isPlaying = !1, this._canPlay = !1
        }, AudioElement.prototype.resume = function () {
            this._canPlay = !0
        }, AudioElement.prototype.setRate = function (te) {
            this.audio.rate(te)
        }, AudioElement.prototype.volume = function (te) {
            this._volumeMultiplier = te, this._previousVolume = te * this._volume, this.audio.volume(this._previousVolume)
        }, AudioElement.prototype.getBaseElement = function () {
            return null
        }, AudioElement.prototype.destroy = function () {}, AudioElement.prototype.sourceRectAtTime = function () {}, AudioElement.prototype.initExpressions = function () {};

        function BaseRenderer() {}
        BaseRenderer.prototype.checkLayers = function (te) {
            var ee, re = this.layers.length,
                ie;
            for (this.completeLayers = !0, ee = re - 1; ee >= 0; ee -= 1) this.elements[ee] || (ie = this.layers[ee], ie.ip - ie.st <= te - this.layers[ee].st && ie.op - ie.st > te - this.layers[ee].st && this.buildItem(ee)), this.completeLayers = this.elements[ee] ? this.completeLayers : !1;
            this.checkPendingElements()
        }, BaseRenderer.prototype.createItem = function (te) {
            switch (te.ty) {
                case 2:
                    return this.createImage(te);
                case 0:
                    return this.createComp(te);
                case 1:
                    return this.createSolid(te);
                case 3:
                    return this.createNull(te);
                case 4:
                    return this.createShape(te);
                case 5:
                    return this.createText(te);
                case 6:
                    return this.createAudio(te);
                case 13:
                    return this.createCamera(te);
                case 15:
                    return this.createFootage(te);
                default:
                    return this.createNull(te)
            }
        }, BaseRenderer.prototype.createCamera = function () {
            throw new Error("You're using a 3d camera. Try the html renderer.")
        }, BaseRenderer.prototype.createAudio = function (te) {
            return new AudioElement(te, this.globalData, this)
        }, BaseRenderer.prototype.createFootage = function (te) {
            return new FootageElement(te, this.globalData, this)
        }, BaseRenderer.prototype.buildAllItems = function () {
            var te, ee = this.layers.length;
            for (te = 0; te < ee; te += 1) this.buildItem(te);
            this.checkPendingElements()
        }, BaseRenderer.prototype.includeLayers = function (te) {
            this.completeLayers = !1;
            var ee, re = te.length,
                ie, ne = this.layers.length;
            for (ee = 0; ee < re; ee += 1)
                for (ie = 0; ie < ne;) {
                    if (this.layers[ie].id === te[ee].id) {
                        this.layers[ie] = te[ee];
                        break
                    }
                    ie += 1
                }
        }, BaseRenderer.prototype.setProjectInterface = function (te) {
            this.globalData.projectInterface = te
        }, BaseRenderer.prototype.initItems = function () {
            this.globalData.progressiveLoad || this.buildAllItems()
        }, BaseRenderer.prototype.buildElementParenting = function (te, ee, re) {
            for (var ie = this.elements, ne = this.layers, se = 0, ae = ne.length; se < ae;) ne[se].ind == ee && (!ie[se] || ie[se] === !0 ? (this.buildItem(se), this.addPendingElement(te)) : (re.push(ie[se]), ie[se].setAsParent(), ne[se].parent !== void 0 ? this.buildElementParenting(te, ne[se].parent, re) : te.setHierarchy(re))), se += 1
        }, BaseRenderer.prototype.addPendingElement = function (te) {
            this.pendingElements.push(te)
        }, BaseRenderer.prototype.searchExtraCompositions = function (te) {
            var ee, re = te.length;
            for (ee = 0; ee < re; ee += 1)
                if (te[ee].xt) {
                    var ie = this.createComp(te[ee]);
                    ie.initExpressions(), this.globalData.projectInterface.registerComposition(ie)
                }
        }, BaseRenderer.prototype.getElementById = function (te) {
            var ee, re = this.elements.length;
            for (ee = 0; ee < re; ee += 1)
                if (this.elements[ee].data.ind === te) return this.elements[ee];
            return null
        }, BaseRenderer.prototype.getElementByPath = function (te) {
            var ee = te.shift(),
                re;
            if (typeof ee == "number") re = this.elements[ee];
            else {
                var ie, ne = this.elements.length;
                for (ie = 0; ie < ne; ie += 1)
                    if (this.elements[ie].data.nm === ee) {
                        re = this.elements[ie];
                        break
                    }
            }
            return te.length === 0 ? re : re.getElementByPath(te)
        }, BaseRenderer.prototype.setupGlobalData = function (te, ee) {
            this.globalData.fontManager = new FontManager, this.globalData.slotManager = slotFactory(te), this.globalData.fontManager.addChars(te.chars), this.globalData.fontManager.addFonts(te.fonts, ee), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = te.fr, this.globalData.nm = te.nm, this.globalData.compSize = {
                w: te.w,
                h: te.h
            }
        };
        var effectTypes = {
            TRANSFORM_EFFECT: "transformEFfect"
        };

        function TransformElement() {}
        TransformElement.prototype = {
            initTransform: function () {
                var ee = new Matrix;
                this.finalTransform = {
                    mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
                        o: 0
                    },
                    _matMdf: !1,
                    _localMatMdf: !1,
                    _opMdf: !1,
                    mat: ee,
                    localMat: ee,
                    localOpacity: 1
                }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty
            },
            renderTransform: function () {
                if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
                    var ee, re = this.finalTransform.mat,
                        ie = 0,
                        ne = this.hierarchy.length;
                    if (!this.finalTransform._matMdf)
                        for (; ie < ne;) {
                            if (this.hierarchy[ie].finalTransform.mProp._mdf) {
                                this.finalTransform._matMdf = !0;
                                break
                            }
                            ie += 1
                        }
                    if (this.finalTransform._matMdf)
                        for (ee = this.finalTransform.mProp.v.props, re.cloneFromProps(ee), ie = 0; ie < ne; ie += 1) re.multiply(this.hierarchy[ie].finalTransform.mProp.v)
                }
                this.finalTransform._matMdf && (this.finalTransform._localMatMdf = this.finalTransform._matMdf), this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v)
            },
            renderLocalTransform: function () {
                if (this.localTransforms) {
                    var ee = 0,
                        re = this.localTransforms.length;
                    if (this.finalTransform._localMatMdf = this.finalTransform._matMdf, !this.finalTransform._localMatMdf || !this.finalTransform._opMdf)
                        for (; ee < re;) this.localTransforms[ee]._mdf && (this.finalTransform._localMatMdf = !0), this.localTransforms[ee]._opMdf && !this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v, this.finalTransform._opMdf = !0), ee += 1;
                    if (this.finalTransform._localMatMdf) {
                        var ie = this.finalTransform.localMat;
                        for (this.localTransforms[0].matrix.clone(ie), ee = 1; ee < re; ee += 1) {
                            var ne = this.localTransforms[ee].matrix;
                            ie.multiply(ne)
                        }
                        ie.multiply(this.finalTransform.mat)
                    }
                    if (this.finalTransform._opMdf) {
                        var se = this.finalTransform.localOpacity;
                        for (ee = 0; ee < re; ee += 1) se *= this.localTransforms[ee].opacity * .01;
                        this.finalTransform.localOpacity = se
                    }
                }
            },
            searchEffectTransforms: function () {
                if (this.renderableEffectsManager) {
                    var ee = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
                    if (ee.length) {
                        this.localTransforms = [], this.finalTransform.localMat = new Matrix;
                        var re = 0,
                            ie = ee.length;
                        for (re = 0; re < ie; re += 1) this.localTransforms.push(ee[re])
                    }
                }
            },
            globalToLocal: function (ee) {
                var re = [];
                re.push(this.finalTransform);
                for (var ie = !0, ne = this.comp; ie;) ne.finalTransform ? (ne.data.hasMask && re.splice(0, 0, ne.finalTransform), ne = ne.comp) : ie = !1;
                var se, ae = re.length,
                    oe;
                for (se = 0; se < ae; se += 1) oe = re[se].mat.applyToPointArray(0, 0, 0), ee = [ee[0] - oe[0], ee[1] - oe[1], 0];
                return ee
            },
            mHelper: new Matrix
        };

        function MaskElement(te, ee, re) {
            this.data = te, this.element = ee, this.globalData = re, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
            var ie = this.globalData.defs,
                ne, se = this.masksProperties ? this.masksProperties.length : 0;
            this.viewData = createSizedArray(se), this.solidPath = "";
            var ae, oe = this.masksProperties,
                le = 0,
                he = [],
                fe, _e, ue = createElementID(),
                de, me, ce, Ce, pe = "clipPath",
                ve = "clip-path";
            for (ne = 0; ne < se; ne += 1)
                if ((oe[ne].mode !== "a" && oe[ne].mode !== "n" || oe[ne].inv || oe[ne].o.k !== 100 || oe[ne].o.x) && (pe = "mask", ve = "mask"), (oe[ne].mode === "s" || oe[ne].mode === "i") && le === 0 ? (de = createNS("rect"), de.setAttribute("fill", "#ffffff"), de.setAttribute("width", this.element.comp.data.w || 0), de.setAttribute("height", this.element.comp.data.h || 0), he.push(de)) : de = null, ae = createNS("path"), oe[ne].mode === "n") this.viewData[ne] = {
                    op: PropertyFactory.getProp(this.element, oe[ne].o, 0, .01, this.element),
                    prop: ShapePropertyFactory.getShapeProp(this.element, oe[ne], 3),
                    elem: ae,
                    lastPath: ""
                }, ie.appendChild(ae);
                else {
                    le += 1, ae.setAttribute("fill", oe[ne].mode === "s" ? "#000000" : "#ffffff"), ae.setAttribute("clip-rule", "nonzero");
                    var ge;
                    if (oe[ne].x.k !== 0 ? (pe = "mask", ve = "mask", Ce = PropertyFactory.getProp(this.element, oe[ne].x, 0, null, this.element), ge = createElementID(), me = createNS("filter"), me.setAttribute("id", ge), ce = createNS("feMorphology"), ce.setAttribute("operator", "erode"), ce.setAttribute("in", "SourceGraphic"), ce.setAttribute("radius", "0"), me.appendChild(ce), ie.appendChild(me), ae.setAttribute("stroke", oe[ne].mode === "s" ? "#000000" : "#ffffff")) : (ce = null, Ce = null), this.storedData[ne] = {
                            elem: ae,
                            x: Ce,
                            expan: ce,
                            lastPath: "",
                            lastOperator: "",
                            filterId: ge,
                            lastRadius: 0
                        }, oe[ne].mode === "i") {
                        _e = he.length;
                        var ye = createNS("g");
                        for (fe = 0; fe < _e; fe += 1) ye.appendChild(he[fe]);
                        var Ee = createNS("mask");
                        Ee.setAttribute("mask-type", "alpha"), Ee.setAttribute("id", ue + "_" + le), Ee.appendChild(ae), ie.appendChild(Ee), ye.setAttribute("mask", "url(" + getLocationHref() + "#" + ue + "_" + le + ")"), he.length = 0, he.push(ye)
                    } else he.push(ae);
                    oe[ne].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[ne] = {
                        elem: ae,
                        lastPath: "",
                        op: PropertyFactory.getProp(this.element, oe[ne].o, 0, .01, this.element),
                        prop: ShapePropertyFactory.getShapeProp(this.element, oe[ne], 3),
                        invRect: de
                    }, this.viewData[ne].prop.k || this.drawPath(oe[ne], this.viewData[ne].prop.v, this.viewData[ne])
                } for (this.maskElement = createNS(pe), se = he.length, ne = 0; ne < se; ne += 1) this.maskElement.appendChild(he[ne]);
            le > 0 && (this.maskElement.setAttribute("id", ue), this.element.maskedElement.setAttribute(ve, "url(" + getLocationHref() + "#" + ue + ")"), ie.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
        }
        MaskElement.prototype.getMaskProperty = function (te) {
            return this.viewData[te].prop
        }, MaskElement.prototype.renderFrame = function (te) {
            var ee = this.element.finalTransform.mat,
                re, ie = this.masksProperties.length;
            for (re = 0; re < ie; re += 1)
                if ((this.viewData[re].prop._mdf || te) && this.drawPath(this.masksProperties[re], this.viewData[re].prop.v, this.viewData[re]), (this.viewData[re].op._mdf || te) && this.viewData[re].elem.setAttribute("fill-opacity", this.viewData[re].op.v), this.masksProperties[re].mode !== "n" && (this.viewData[re].invRect && (this.element.finalTransform.mProp._mdf || te) && this.viewData[re].invRect.setAttribute("transform", ee.getInverseMatrix().to2dCSS()), this.storedData[re].x && (this.storedData[re].x._mdf || te))) {
                    var ne = this.storedData[re].expan;
                    this.storedData[re].x.v < 0 ? (this.storedData[re].lastOperator !== "erode" && (this.storedData[re].lastOperator = "erode", this.storedData[re].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[re].filterId + ")")), ne.setAttribute("radius", -this.storedData[re].x.v)) : (this.storedData[re].lastOperator !== "dilate" && (this.storedData[re].lastOperator = "dilate", this.storedData[re].elem.setAttribute("filter", null)), this.storedData[re].elem.setAttribute("stroke-width", this.storedData[re].x.v * 2))
                }
        }, MaskElement.prototype.getMaskelement = function () {
            return this.maskElement
        }, MaskElement.prototype.createLayerSolidPath = function () {
            var te = "M0,0 ";
            return te += " h" + this.globalData.compSize.w, te += " v" + this.globalData.compSize.h, te += " h-" + this.globalData.compSize.w, te += " v-" + this.globalData.compSize.h + " ", te
        }, MaskElement.prototype.drawPath = function (te, ee, re) {
            var ie = " M" + ee.v[0][0] + "," + ee.v[0][1],
                ne, se;
            for (se = ee._length, ne = 1; ne < se; ne += 1) ie += " C" + ee.o[ne - 1][0] + "," + ee.o[ne - 1][1] + " " + ee.i[ne][0] + "," + ee.i[ne][1] + " " + ee.v[ne][0] + "," + ee.v[ne][1];
            if (ee.c && se > 1 && (ie += " C" + ee.o[ne - 1][0] + "," + ee.o[ne - 1][1] + " " + ee.i[0][0] + "," + ee.i[0][1] + " " + ee.v[0][0] + "," + ee.v[0][1]), re.lastPath !== ie) {
                var ae = "";
                re.elem && (ee.c && (ae = te.inv ? this.solidPath + ie : ie), re.elem.setAttribute("d", ae)), re.lastPath = ie
            }
        }, MaskElement.prototype.destroy = function () {
            this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
        };
        var filtersFactory = function () {
                var te = {};
                te.createFilter = ee, te.createAlphaToLuminanceFilter = re;

                function ee(ie, ne) {
                    var se = createNS("filter");
                    return se.setAttribute("id", ie), ne !== !0 && (se.setAttribute("filterUnits", "objectBoundingBox"), se.setAttribute("x", "0%"), se.setAttribute("y", "0%"), se.setAttribute("width", "100%"), se.setAttribute("height", "100%")), se
                }

                function re() {
                    var ie = createNS("feColorMatrix");
                    return ie.setAttribute("type", "matrix"), ie.setAttribute("color-interpolation-filters", "sRGB"), ie.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), ie
                }
                return te
            }(),
            featureSupport = function () {
                var te = {
                    maskType: !0,
                    svgLumaHidden: !0,
                    offscreenCanvas: typeof OffscreenCanvas < "u"
                };
                return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (te.maskType = !1), /firefox/i.test(navigator.userAgent) && (te.svgLumaHidden = !1), te
            }(),
            registeredEffects$1 = {},
            idPrefix = "filter_result_";

        function SVGEffects(te) {
            var ee, re = "SourceGraphic",
                ie = te.data.ef ? te.data.ef.length : 0,
                ne = createElementID(),
                se = filtersFactory.createFilter(ne, !0),
                ae = 0;
            this.filters = [];
            var oe;
            for (ee = 0; ee < ie; ee += 1) {
                oe = null;
                var le = te.data.ef[ee].ty;
                if (registeredEffects$1[le]) {
                    var he = registeredEffects$1[le].effect;
                    oe = new he(se, te.effectsManager.effectElements[ee], te, idPrefix + ae, re), re = idPrefix + ae, registeredEffects$1[le].countsAsEffect && (ae += 1)
                }
                oe && this.filters.push(oe)
            }
            ae && (te.globalData.defs.appendChild(se), te.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + ne + ")")), this.filters.length && te.addRenderableComponent(this)
        }
        SVGEffects.prototype.renderFrame = function (te) {
            var ee, re = this.filters.length;
            for (ee = 0; ee < re; ee += 1) this.filters[ee].renderFrame(te)
        }, SVGEffects.prototype.getEffects = function (te) {
            var ee, re = this.filters.length,
                ie = [];
            for (ee = 0; ee < re; ee += 1) this.filters[ee].type === te && ie.push(this.filters[ee]);
            return ie
        };

        function registerEffect$1(te, ee, re) {
            registeredEffects$1[te] = {
                effect: ee,
                countsAsEffect: re
            }
        }

        function SVGBaseElement() {}
        SVGBaseElement.prototype = {
            initRendererElement: function () {
                this.layerElement = createNS("g")
            },
            createContainerElements: function () {
                this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
                var ee = null;
                if (this.data.td) {
                    this.matteMasks = {};
                    var re = createNS("g");
                    re.setAttribute("id", this.layerId), re.appendChild(this.layerElement), ee = re, this.globalData.defs.appendChild(re)
                } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), ee = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
                if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), this.data.ty === 0 && !this.data.hd) {
                    var ie = createNS("clipPath"),
                        ne = createNS("path");
                    ne.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
                    var se = createElementID();
                    if (ie.setAttribute("id", se), ie.appendChild(ne), this.globalData.defs.appendChild(ie), this.checkMasks()) {
                        var ae = createNS("g");
                        ae.setAttribute("clip-path", "url(" + getLocationHref() + "#" + se + ")"), ae.appendChild(this.layerElement), this.transformedElement = ae, ee ? ee.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
                    } else this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + se + ")")
                }
                this.data.bm !== 0 && this.setBlendMode()
            },
            renderElement: function () {
                this.finalTransform._localMatMdf && this.transformedElement.setAttribute("transform", this.finalTransform.localMat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.localOpacity)
            },
            destroyBaseElement: function () {
                this.layerElement = null, this.matteElement = null, this.maskManager.destroy()
            },
            getBaseElement: function () {
                return this.data.hd ? null : this.baseElement
            },
            createRenderableComponents: function () {
                this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this), this.searchEffectTransforms()
            },
            getMatte: function (ee) {
                if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[ee]) {
                    var re = this.layerId + "_" + ee,
                        ie, ne, se, ae;
                    if (ee === 1 || ee === 3) {
                        var oe = createNS("mask");
                        oe.setAttribute("id", re), oe.setAttribute("mask-type", ee === 3 ? "luminance" : "alpha"), se = createNS("use"), se.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), oe.appendChild(se), this.globalData.defs.appendChild(oe), !featureSupport.maskType && ee === 1 && (oe.setAttribute("mask-type", "luminance"), ie = createElementID(), ne = filtersFactory.createFilter(ie), this.globalData.defs.appendChild(ne), ne.appendChild(filtersFactory.createAlphaToLuminanceFilter()), ae = createNS("g"), ae.appendChild(se), oe.appendChild(ae), ae.setAttribute("filter", "url(" + getLocationHref() + "#" + ie + ")"))
                    } else if (ee === 2) {
                        var le = createNS("mask");
                        le.setAttribute("id", re), le.setAttribute("mask-type", "alpha");
                        var he = createNS("g");
                        le.appendChild(he), ie = createElementID(), ne = filtersFactory.createFilter(ie);
                        var fe = createNS("feComponentTransfer");
                        fe.setAttribute("in", "SourceGraphic"), ne.appendChild(fe);
                        var _e = createNS("feFuncA");
                        _e.setAttribute("type", "table"), _e.setAttribute("tableValues", "1.0 0.0"), fe.appendChild(_e), this.globalData.defs.appendChild(ne);
                        var ue = createNS("rect");
                        ue.setAttribute("width", this.comp.data.w), ue.setAttribute("height", this.comp.data.h), ue.setAttribute("x", "0"), ue.setAttribute("y", "0"), ue.setAttribute("fill", "#ffffff"), ue.setAttribute("opacity", "0"), he.setAttribute("filter", "url(" + getLocationHref() + "#" + ie + ")"), he.appendChild(ue), se = createNS("use"), se.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), he.appendChild(se), featureSupport.maskType || (le.setAttribute("mask-type", "luminance"), ne.appendChild(filtersFactory.createAlphaToLuminanceFilter()), ae = createNS("g"), he.appendChild(ue), ae.appendChild(this.layerElement), he.appendChild(ae)), this.globalData.defs.appendChild(le)
                    }
                    this.matteMasks[ee] = re
                }
                return this.matteMasks[ee]
            },
            setMatte: function (ee) {
                this.matteElement && this.matteElement.setAttribute("mask", "url(" + getLocationHref() + "#" + ee + ")")
            }
        };

        function HierarchyElement() {}
        HierarchyElement.prototype = {
            initHierarchy: function () {
                this.hierarchy = [], this._isParent = !1, this.checkParenting()
            },
            setHierarchy: function (ee) {
                this.hierarchy = ee
            },
            setAsParent: function () {
                this._isParent = !0
            },
            checkParenting: function () {
                this.data.parent !== void 0 && this.comp.buildElementParenting(this, this.data.parent, [])
            }
        };

        function RenderableDOMElement() {}(function () {
            var te = {
                initElement: function (re, ie, ne) {
                    this.initFrame(), this.initBaseData(re, ie, ne), this.initTransform(re, ie, ne), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide()
                },
                hide: function () {
                    if (!this.hidden && (!this.isInRange || this.isTransparent)) {
                        var re = this.baseElement || this.layerElement;
                        re.style.display = "none", this.hidden = !0
                    }
                },
                show: function () {
                    if (this.isInRange && !this.isTransparent) {
                        if (!this.data.hd) {
                            var re = this.baseElement || this.layerElement;
                            re.style.display = "block"
                        }
                        this.hidden = !1, this._isFirstFrame = !0
                    }
                },
                renderFrame: function () {
                    this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
                },
                renderInnerContent: function () {},
                prepareFrame: function (re) {
                    this._mdf = !1, this.prepareRenderableFrame(re), this.prepareProperties(re, this.isInRange), this.checkTransparency()
                },
                destroy: function () {
                    this.innerElem = null, this.destroyBaseElement()
                }
            };
            extendPrototype([RenderableElement, createProxyFunction(te)], RenderableDOMElement)
        })();

        function IImageElement(te, ee, re) {
            this.assetData = ee.getAssetData(te.refId), this.assetData && this.assetData.sid && (this.assetData = ee.slotManager.getProp(this.assetData)), this.initElement(te, ee, re), this.sourceRect = {
                top: 0,
                left: 0,
                width: this.assetData.w,
                height: this.assetData.h
            }
        }
        extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function () {
            var te = this.globalData.getAssetsPath(this.assetData);
            this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", te), this.layerElement.appendChild(this.innerElem)
        }, IImageElement.prototype.sourceRectAtTime = function () {
            return this.sourceRect
        };

        function ProcessedElement(te, ee) {
            this.elem = te, this.pos = ee
        }

        function IShapeElement() {}
        IShapeElement.prototype = {
            addShapeToModifiers: function (ee) {
                var re, ie = this.shapeModifiers.length;
                for (re = 0; re < ie; re += 1) this.shapeModifiers[re].addShape(ee)
            },
            isShapeInAnimatedModifiers: function (ee) {
                for (var re = 0, ie = this.shapeModifiers.length; re < ie;)
                    if (this.shapeModifiers[re].isAnimatedWithShape(ee)) return !0;
                return !1
            },
            renderModifiers: function () {
                if (this.shapeModifiers.length) {
                    var ee, re = this.shapes.length;
                    for (ee = 0; ee < re; ee += 1) this.shapes[ee].sh.reset();
                    re = this.shapeModifiers.length;
                    var ie;
                    for (ee = re - 1; ee >= 0 && (ie = this.shapeModifiers[ee].processShapes(this._isFirstFrame), !ie); ee -= 1);
                }
            },
            searchProcessedElement: function (ee) {
                for (var re = this.processedElements, ie = 0, ne = re.length; ie < ne;) {
                    if (re[ie].elem === ee) return re[ie].pos;
                    ie += 1
                }
                return 0
            },
            addProcessedElement: function (ee, re) {
                for (var ie = this.processedElements, ne = ie.length; ne;)
                    if (ne -= 1, ie[ne].elem === ee) {
                        ie[ne].pos = re;
                        return
                    } ie.push(new ProcessedElement(ee, re))
            },
            prepareFrame: function (ee) {
                this.prepareRenderableFrame(ee), this.prepareProperties(ee, this.isInRange)
            }
        };
        var lineCapEnum = {
                1: "butt",
                2: "round",
                3: "square"
            },
            lineJoinEnum = {
                1: "miter",
                2: "round",
                3: "bevel"
            };

        function SVGShapeData(te, ee, re) {
            this.caches = [], this.styles = [], this.transformers = te, this.lStr = "", this.sh = re, this.lvl = ee, this._isAnimated = !!re.k;
            for (var ie = 0, ne = te.length; ie < ne;) {
                if (te[ie].mProps.dynamicProperties.length) {
                    this._isAnimated = !0;
                    break
                }
                ie += 1
            }
        }
        SVGShapeData.prototype.setAsAnimated = function () {
            this._isAnimated = !0
        };

        function SVGStyleData(te, ee) {
            this.data = te, this.type = te.ty, this.d = "", this.lvl = ee, this._mdf = !1, this.closed = te.hd === !0, this.pElem = createNS("path"), this.msElem = null
        }
        SVGStyleData.prototype.reset = function () {
            this.d = "", this._mdf = !1
        };

        function DashProperty(te, ee, re, ie) {
            this.elem = te, this.frameId = -1, this.dataProps = createSizedArray(ee.length), this.renderer = re, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", ee.length ? ee.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(ie);
            var ne, se = ee.length || 0,
                ae;
            for (ne = 0; ne < se; ne += 1) ae = PropertyFactory.getProp(te, ee[ne].v, 0, 0, this), this.k = ae.k || this.k, this.dataProps[ne] = {
                n: ee[ne].n,
                p: ae
            };
            this.k || this.getValue(!0), this._isAnimated = this.k
        }
        DashProperty.prototype.getValue = function (te) {
            if (!(this.elem.globalData.frameId === this.frameId && !te) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || te, this._mdf)) {
                var ee = 0,
                    re = this.dataProps.length;
                for (this.renderer === "svg" && (this.dashStr = ""), ee = 0; ee < re; ee += 1) this.dataProps[ee].n !== "o" ? this.renderer === "svg" ? this.dashStr += " " + this.dataProps[ee].p.v : this.dashArray[ee] = this.dataProps[ee].p.v : this.dashoffset[0] = this.dataProps[ee].p.v
            }
        }, extendPrototype([DynamicPropertyContainer], DashProperty);

        function SVGStrokeStyleData(te, ee, re) {
            this.initDynamicPropertyContainer(te), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(te, ee.o, 0, .01, this), this.w = PropertyFactory.getProp(te, ee.w, 0, null, this), this.d = new DashProperty(te, ee.d || {}, "svg", this), this.c = PropertyFactory.getProp(te, ee.c, 1, 255, this), this.style = re, this._isAnimated = !!this._isAnimated
        }
        extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData);

        function SVGFillStyleData(te, ee, re) {
            this.initDynamicPropertyContainer(te), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(te, ee.o, 0, .01, this), this.c = PropertyFactory.getProp(te, ee.c, 1, 255, this), this.style = re
        }
        extendPrototype([DynamicPropertyContainer], SVGFillStyleData);

        function SVGNoStyleData(te, ee, re) {
            this.initDynamicPropertyContainer(te), this.getValue = this.iterateDynamicProperties, this.style = re
        }
        extendPrototype([DynamicPropertyContainer], SVGNoStyleData);

        function GradientProperty(te, ee, re) {
            this.data = ee, this.c = createTypedArray("uint8c", ee.p * 4);
            var ie = ee.k.k[0].s ? ee.k.k[0].s.length - ee.p * 4 : ee.k.k.length - ee.p * 4;
            this.o = createTypedArray("float32", ie), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = ie, this.initDynamicPropertyContainer(re), this.prop = PropertyFactory.getProp(te, ee.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
        }
        GradientProperty.prototype.comparePoints = function (te, ee) {
            for (var re = 0, ie = this.o.length / 2, ne; re < ie;) {
                if (ne = Math.abs(te[re * 4] - te[ee * 4 + re * 2]), ne > .01) return !1;
                re += 1
            }
            return !0
        }, GradientProperty.prototype.checkCollapsable = function () {
            if (this.o.length / 2 !== this.c.length / 4) return !1;
            if (this.data.k.k[0].s)
                for (var te = 0, ee = this.data.k.k.length; te < ee;) {
                    if (!this.comparePoints(this.data.k.k[te].s, this.data.p)) return !1;
                    te += 1
                } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
            return !0
        }, GradientProperty.prototype.getValue = function (te) {
            if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || te) {
                var ee, re = this.data.p * 4,
                    ie, ne;
                for (ee = 0; ee < re; ee += 1) ie = ee % 4 === 0 ? 100 : 255, ne = Math.round(this.prop.v[ee] * ie), this.c[ee] !== ne && (this.c[ee] = ne, this._cmdf = !te);
                if (this.o.length)
                    for (re = this.prop.v.length, ee = this.data.p * 4; ee < re; ee += 1) ie = ee % 2 === 0 ? 100 : 1, ne = ee % 2 === 0 ? Math.round(this.prop.v[ee] * 100) : this.prop.v[ee], this.o[ee - this.data.p * 4] !== ne && (this.o[ee - this.data.p * 4] = ne, this._omdf = !te);
                this._mdf = !te
            }
        }, extendPrototype([DynamicPropertyContainer], GradientProperty);

        function SVGGradientFillStyleData(te, ee, re) {
            this.initDynamicPropertyContainer(te), this.getValue = this.iterateDynamicProperties, this.initGradientData(te, ee, re)
        }
        SVGGradientFillStyleData.prototype.initGradientData = function (te, ee, re) {
            this.o = PropertyFactory.getProp(te, ee.o, 0, .01, this), this.s = PropertyFactory.getProp(te, ee.s, 1, null, this), this.e = PropertyFactory.getProp(te, ee.e, 1, null, this), this.h = PropertyFactory.getProp(te, ee.h || {
                k: 0
            }, 0, .01, this), this.a = PropertyFactory.getProp(te, ee.a || {
                k: 0
            }, 0, degToRads, this), this.g = new GradientProperty(te, ee.g, this), this.style = re, this.stops = [], this.setGradientData(re.pElem, ee), this.setGradientOpacity(ee, re), this._isAnimated = !!this._isAnimated
        }, SVGGradientFillStyleData.prototype.setGradientData = function (te, ee) {
            var re = createElementID(),
                ie = createNS(ee.t === 1 ? "linearGradient" : "radialGradient");
            ie.setAttribute("id", re), ie.setAttribute("spreadMethod", "pad"), ie.setAttribute("gradientUnits", "userSpaceOnUse");
            var ne = [],
                se, ae, oe;
            for (oe = ee.g.p * 4, ae = 0; ae < oe; ae += 4) se = createNS("stop"), ie.appendChild(se), ne.push(se);
            te.setAttribute(ee.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + re + ")"), this.gf = ie, this.cst = ne
        }, SVGGradientFillStyleData.prototype.setGradientOpacity = function (te, ee) {
            if (this.g._hasOpacity && !this.g._collapsable) {
                var re, ie, ne, se = createNS("mask"),
                    ae = createNS("path");
                se.appendChild(ae);
                var oe = createElementID(),
                    le = createElementID();
                se.setAttribute("id", le);
                var he = createNS(te.t === 1 ? "linearGradient" : "radialGradient");
                he.setAttribute("id", oe), he.setAttribute("spreadMethod", "pad"), he.setAttribute("gradientUnits", "userSpaceOnUse"), ne = te.g.k.k[0].s ? te.g.k.k[0].s.length : te.g.k.k.length;
                var fe = this.stops;
                for (ie = te.g.p * 4; ie < ne; ie += 2) re = createNS("stop"), re.setAttribute("stop-color", "rgb(255,255,255)"), he.appendChild(re), fe.push(re);
                ae.setAttribute(te.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + oe + ")"), te.ty === "gs" && (ae.setAttribute("stroke-linecap", lineCapEnum[te.lc || 2]), ae.setAttribute("stroke-linejoin", lineJoinEnum[te.lj || 2]), te.lj === 1 && ae.setAttribute("stroke-miterlimit", te.ml)), this.of = he, this.ms = se, this.ost = fe, this.maskId = le, ee.msElem = ae
            }
        }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData);

        function SVGGradientStrokeStyleData(te, ee, re) {
            this.initDynamicPropertyContainer(te), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(te, ee.w, 0, null, this), this.d = new DashProperty(te, ee.d || {}, "svg", this), this.initGradientData(te, ee, re), this._isAnimated = !!this._isAnimated
        }
        extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);

        function ShapeGroupData() {
            this.it = [], this.prevViewData = [], this.gr = createNS("g")
        }

        function SVGTransformData(te, ee, re) {
            this.transform = {
                mProps: te,
                op: ee,
                container: re
            }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
        }
        var buildShapeString = function (ee, re, ie, ne) {
                if (re === 0) return "";
                var se = ee.o,
                    ae = ee.i,
                    oe = ee.v,
                    le, he = " M" + ne.applyToPointStringified(oe[0][0], oe[0][1]);
                for (le = 1; le < re; le += 1) he += " C" + ne.applyToPointStringified(se[le - 1][0], se[le - 1][1]) + " " + ne.applyToPointStringified(ae[le][0], ae[le][1]) + " " + ne.applyToPointStringified(oe[le][0], oe[le][1]);
                return ie && re && (he += " C" + ne.applyToPointStringified(se[le - 1][0], se[le - 1][1]) + " " + ne.applyToPointStringified(ae[0][0], ae[0][1]) + " " + ne.applyToPointStringified(oe[0][0], oe[0][1]), he += "z"), he
            },
            SVGElementsRenderer = function () {
                var te = new Matrix,
                    ee = new Matrix,
                    re = {
                        createRenderFunction: ie
                    };

                function ie(_e) {
                    switch (_e.ty) {
                        case "fl":
                            return oe;
                        case "gf":
                            return he;
                        case "gs":
                            return le;
                        case "st":
                            return fe;
                        case "sh":
                        case "el":
                        case "rc":
                        case "sr":
                            return ae;
                        case "tr":
                            return ne;
                        case "no":
                            return se;
                        default:
                            return null
                    }
                }

                function ne(_e, ue, de) {
                    (de || ue.transform.op._mdf) && ue.transform.container.setAttribute("opacity", ue.transform.op.v), (de || ue.transform.mProps._mdf) && ue.transform.container.setAttribute("transform", ue.transform.mProps.v.to2dCSS())
                }

                function se() {}

                function ae(_e, ue, de) {
                    var me, ce, Ce, pe, ve, ge, ye = ue.styles.length,
                        Ee = ue.lvl,
                        Pe, xe, we, Fe;
                    for (ge = 0; ge < ye; ge += 1) {
                        if (pe = ue.sh._mdf || de, ue.styles[ge].lvl < Ee) {
                            for (xe = ee.reset(), we = Ee - ue.styles[ge].lvl, Fe = ue.transformers.length - 1; !pe && we > 0;) pe = ue.transformers[Fe].mProps._mdf || pe, we -= 1, Fe -= 1;
                            if (pe)
                                for (we = Ee - ue.styles[ge].lvl, Fe = ue.transformers.length - 1; we > 0;) xe.multiply(ue.transformers[Fe].mProps.v), we -= 1, Fe -= 1
                        } else xe = te;
                        if (Pe = ue.sh.paths, ce = Pe._length, pe) {
                            for (Ce = "", me = 0; me < ce; me += 1) ve = Pe.shapes[me], ve && ve._length && (Ce += buildShapeString(ve, ve._length, ve.c, xe));
                            ue.caches[ge] = Ce
                        } else Ce = ue.caches[ge];
                        ue.styles[ge].d += _e.hd === !0 ? "" : Ce, ue.styles[ge]._mdf = pe || ue.styles[ge]._mdf
                    }
                }

                function oe(_e, ue, de) {
                    var me = ue.style;
                    (ue.c._mdf || de) && me.pElem.setAttribute("fill", "rgb(" + bmFloor(ue.c.v[0]) + "," + bmFloor(ue.c.v[1]) + "," + bmFloor(ue.c.v[2]) + ")"), (ue.o._mdf || de) && me.pElem.setAttribute("fill-opacity", ue.o.v)
                }

                function le(_e, ue, de) {
                    he(_e, ue, de), fe(_e, ue, de)
                }

                function he(_e, ue, de) {
                    var me = ue.gf,
                        ce = ue.g._hasOpacity,
                        Ce = ue.s.v,
                        pe = ue.e.v;
                    if (ue.o._mdf || de) {
                        var ve = _e.ty === "gf" ? "fill-opacity" : "stroke-opacity";
                        ue.style.pElem.setAttribute(ve, ue.o.v)
                    }
                    if (ue.s._mdf || de) {
                        var ge = _e.t === 1 ? "x1" : "cx",
                            ye = ge === "x1" ? "y1" : "cy";
                        me.setAttribute(ge, Ce[0]), me.setAttribute(ye, Ce[1]), ce && !ue.g._collapsable && (ue.of.setAttribute(ge, Ce[0]), ue.of.setAttribute(ye, Ce[1]))
                    }
                    var Ee, Pe, xe, we;
                    if (ue.g._cmdf || de) {
                        Ee = ue.cst;
                        var Fe = ue.g.c;
                        for (xe = Ee.length, Pe = 0; Pe < xe; Pe += 1) we = Ee[Pe], we.setAttribute("offset", Fe[Pe * 4] + "%"), we.setAttribute("stop-color", "rgb(" + Fe[Pe * 4 + 1] + "," + Fe[Pe * 4 + 2] + "," + Fe[Pe * 4 + 3] + ")")
                    }
                    if (ce && (ue.g._omdf || de)) {
                        var Le = ue.g.o;
                        for (ue.g._collapsable ? Ee = ue.cst : Ee = ue.ost, xe = Ee.length, Pe = 0; Pe < xe; Pe += 1) we = Ee[Pe], ue.g._collapsable || we.setAttribute("offset", Le[Pe * 2] + "%"), we.setAttribute("stop-opacity", Le[Pe * 2 + 1])
                    }
                    if (_e.t === 1)(ue.e._mdf || de) && (me.setAttribute("x2", pe[0]), me.setAttribute("y2", pe[1]), ce && !ue.g._collapsable && (ue.of.setAttribute("x2", pe[0]), ue.of.setAttribute("y2", pe[1])));
                    else {
                        var Re;
                        if ((ue.s._mdf || ue.e._mdf || de) && (Re = Math.sqrt(Math.pow(Ce[0] - pe[0], 2) + Math.pow(Ce[1] - pe[1], 2)), me.setAttribute("r", Re), ce && !ue.g._collapsable && ue.of.setAttribute("r", Re)), ue.e._mdf || ue.h._mdf || ue.a._mdf || de) {
                            Re || (Re = Math.sqrt(Math.pow(Ce[0] - pe[0], 2) + Math.pow(Ce[1] - pe[1], 2)));
                            var Me = Math.atan2(pe[1] - Ce[1], pe[0] - Ce[0]),
                                $e = ue.h.v;
                            $e >= 1 ? $e = .99 : $e <= -1 && ($e = -.99);
                            var Be = Re * $e,
                                Ie = Math.cos(Me + ue.a.v) * Be + Ce[0],
                                Se = Math.sin(Me + ue.a.v) * Be + Ce[1];
                            me.setAttribute("fx", Ie), me.setAttribute("fy", Se), ce && !ue.g._collapsable && (ue.of.setAttribute("fx", Ie), ue.of.setAttribute("fy", Se))
                        }
                    }
                }

                function fe(_e, ue, de) {
                    var me = ue.style,
                        ce = ue.d;
                    ce && (ce._mdf || de) && ce.dashStr && (me.pElem.setAttribute("stroke-dasharray", ce.dashStr), me.pElem.setAttribute("stroke-dashoffset", ce.dashoffset[0])), ue.c && (ue.c._mdf || de) && me.pElem.setAttribute("stroke", "rgb(" + bmFloor(ue.c.v[0]) + "," + bmFloor(ue.c.v[1]) + "," + bmFloor(ue.c.v[2]) + ")"), (ue.o._mdf || de) && me.pElem.setAttribute("stroke-opacity", ue.o.v), (ue.w._mdf || de) && (me.pElem.setAttribute("stroke-width", ue.w.v), me.msElem && me.msElem.setAttribute("stroke-width", ue.w.v))
                }
                return re
            }();

        function SVGShapeElement(te, ee, re) {
            this.shapes = [], this.shapesData = te.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(te, ee, re), this.prevViewData = []
        }
        extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function () {}, SVGShapeElement.prototype.identityMatrix = new Matrix, SVGShapeElement.prototype.buildExpressionInterface = function () {}, SVGShapeElement.prototype.createContent = function () {
            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes()
        }, SVGShapeElement.prototype.filterUniqueShapes = function () {
            var te, ee = this.shapes.length,
                re, ie, ne = this.stylesList.length,
                se, ae = [],
                oe = !1;
            for (ie = 0; ie < ne; ie += 1) {
                for (se = this.stylesList[ie], oe = !1, ae.length = 0, te = 0; te < ee; te += 1) re = this.shapes[te], re.styles.indexOf(se) !== -1 && (ae.push(re), oe = re._isAnimated || oe);
                ae.length > 1 && oe && this.setShapesAsAnimated(ae)
            }
        }, SVGShapeElement.prototype.setShapesAsAnimated = function (te) {
            var ee, re = te.length;
            for (ee = 0; ee < re; ee += 1) te[ee].setAsAnimated()
        }, SVGShapeElement.prototype.createStyleElement = function (te, ee) {
            var re, ie = new SVGStyleData(te, ee),
                ne = ie.pElem;
            if (te.ty === "st") re = new SVGStrokeStyleData(this, te, ie);
            else if (te.ty === "fl") re = new SVGFillStyleData(this, te, ie);
            else if (te.ty === "gf" || te.ty === "gs") {
                var se = te.ty === "gf" ? SVGGradientFillStyleData : SVGGradientStrokeStyleData;
                re = new se(this, te, ie), this.globalData.defs.appendChild(re.gf), re.maskId && (this.globalData.defs.appendChild(re.ms), this.globalData.defs.appendChild(re.of), ne.setAttribute("mask", "url(" + getLocationHref() + "#" + re.maskId + ")"))
            } else te.ty === "no" && (re = new SVGNoStyleData(this, te, ie));
            return (te.ty === "st" || te.ty === "gs") && (ne.setAttribute("stroke-linecap", lineCapEnum[te.lc || 2]), ne.setAttribute("stroke-linejoin", lineJoinEnum[te.lj || 2]), ne.setAttribute("fill-opacity", "0"), te.lj === 1 && ne.setAttribute("stroke-miterlimit", te.ml)), te.r === 2 && ne.setAttribute("fill-rule", "evenodd"), te.ln && ne.setAttribute("id", te.ln), te.cl && ne.setAttribute("class", te.cl), te.bm && (ne.style["mix-blend-mode"] = getBlendMode(te.bm)), this.stylesList.push(ie), this.addToAnimatedContents(te, re), re
        }, SVGShapeElement.prototype.createGroupElement = function (te) {
            var ee = new ShapeGroupData;
            return te.ln && ee.gr.setAttribute("id", te.ln), te.cl && ee.gr.setAttribute("class", te.cl), te.bm && (ee.gr.style["mix-blend-mode"] = getBlendMode(te.bm)), ee
        }, SVGShapeElement.prototype.createTransformElement = function (te, ee) {
            var re = TransformPropertyFactory.getTransformProperty(this, te, this),
                ie = new SVGTransformData(re, re.o, ee);
            return this.addToAnimatedContents(te, ie), ie
        }, SVGShapeElement.prototype.createShapeElement = function (te, ee, re) {
            var ie = 4;
            te.ty === "rc" ? ie = 5 : te.ty === "el" ? ie = 6 : te.ty === "sr" && (ie = 7);
            var ne = ShapePropertyFactory.getShapeProp(this, te, ie, this),
                se = new SVGShapeData(ee, re, ne);
            return this.shapes.push(se), this.addShapeToModifiers(se), this.addToAnimatedContents(te, se), se
        }, SVGShapeElement.prototype.addToAnimatedContents = function (te, ee) {
            for (var re = 0, ie = this.animatedContents.length; re < ie;) {
                if (this.animatedContents[re].element === ee) return;
                re += 1
            }
            this.animatedContents.push({
                fn: SVGElementsRenderer.createRenderFunction(te),
                element: ee,
                data: te
            })
        }, SVGShapeElement.prototype.setElementStyles = function (te) {
            var ee = te.styles,
                re, ie = this.stylesList.length;
            for (re = 0; re < ie; re += 1) this.stylesList[re].closed || ee.push(this.stylesList[re])
        }, SVGShapeElement.prototype.reloadShapes = function () {
            this._isFirstFrame = !0;
            var te, ee = this.itemsData.length;
            for (te = 0; te < ee; te += 1) this.prevViewData[te] = this.itemsData[te];
            for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), ee = this.dynamicProperties.length, te = 0; te < ee; te += 1) this.dynamicProperties[te].getValue();
            this.renderModifiers()
        }, SVGShapeElement.prototype.searchShapes = function (te, ee, re, ie, ne, se, ae) {
            var oe = [].concat(se),
                le, he = te.length - 1,
                fe, _e, ue = [],
                de = [],
                me, ce, Ce;
            for (le = he; le >= 0; le -= 1) {
                if (Ce = this.searchProcessedElement(te[le]), Ce ? ee[le] = re[Ce - 1] : te[le]._render = ae, te[le].ty === "fl" || te[le].ty === "st" || te[le].ty === "gf" || te[le].ty === "gs" || te[le].ty === "no") Ce ? ee[le].style.closed = !1 : ee[le] = this.createStyleElement(te[le], ne), te[le]._render && ee[le].style.pElem.parentNode !== ie && ie.appendChild(ee[le].style.pElem), ue.push(ee[le].style);
                else if (te[le].ty === "gr") {
                    if (!Ce) ee[le] = this.createGroupElement(te[le]);
                    else
                        for (_e = ee[le].it.length, fe = 0; fe < _e; fe += 1) ee[le].prevViewData[fe] = ee[le].it[fe];
                    this.searchShapes(te[le].it, ee[le].it, ee[le].prevViewData, ee[le].gr, ne + 1, oe, ae), te[le]._render && ee[le].gr.parentNode !== ie && ie.appendChild(ee[le].gr)
                } else te[le].ty === "tr" ? (Ce || (ee[le] = this.createTransformElement(te[le], ie)), me = ee[le].transform, oe.push(me)) : te[le].ty === "sh" || te[le].ty === "rc" || te[le].ty === "el" || te[le].ty === "sr" ? (Ce || (ee[le] = this.createShapeElement(te[le], oe, ne)), this.setElementStyles(ee[le])) : te[le].ty === "tm" || te[le].ty === "rd" || te[le].ty === "ms" || te[le].ty === "pb" || te[le].ty === "zz" || te[le].ty === "op" ? (Ce ? (ce = ee[le], ce.closed = !1) : (ce = ShapeModifiers.getModifier(te[le].ty), ce.init(this, te[le]), ee[le] = ce, this.shapeModifiers.push(ce)), de.push(ce)) : te[le].ty === "rp" && (Ce ? (ce = ee[le], ce.closed = !0) : (ce = ShapeModifiers.getModifier(te[le].ty), ee[le] = ce, ce.init(this, te, le, ee), this.shapeModifiers.push(ce), ae = !1), de.push(ce));
                this.addProcessedElement(te[le], le + 1)
            }
            for (he = ue.length, le = 0; le < he; le += 1) ue[le].closed = !0;
            for (he = de.length, le = 0; le < he; le += 1) de[le].closed = !0
        }, SVGShapeElement.prototype.renderInnerContent = function () {
            this.renderModifiers();
            var te, ee = this.stylesList.length;
            for (te = 0; te < ee; te += 1) this.stylesList[te].reset();
            for (this.renderShape(), te = 0; te < ee; te += 1)(this.stylesList[te]._mdf || this._isFirstFrame) && (this.stylesList[te].msElem && (this.stylesList[te].msElem.setAttribute("d", this.stylesList[te].d), this.stylesList[te].d = "M0 0" + this.stylesList[te].d), this.stylesList[te].pElem.setAttribute("d", this.stylesList[te].d || "M0 0"))
        }, SVGShapeElement.prototype.renderShape = function () {
            var te, ee = this.animatedContents.length,
                re;
            for (te = 0; te < ee; te += 1) re = this.animatedContents[te], (this._isFirstFrame || re.element._isAnimated) && re.data !== !0 && re.fn(re.data, re.element, this._isFirstFrame)
        }, SVGShapeElement.prototype.destroy = function () {
            this.destroyBaseElement(), this.shapesData = null, this.itemsData = null
        };

        function LetterProps(te, ee, re, ie, ne, se) {
            this.o = te, this.sw = ee, this.sc = re, this.fc = ie, this.m = ne, this.p = se, this._mdf = {
                o: !0,
                sw: !!ee,
                sc: !!re,
                fc: !!ie,
                m: !0,
                p: !0
            }
        }
        LetterProps.prototype.update = function (te, ee, re, ie, ne, se) {
            this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
            var ae = !1;
            return this.o !== te && (this.o = te, this._mdf.o = !0, ae = !0), this.sw !== ee && (this.sw = ee, this._mdf.sw = !0, ae = !0), this.sc !== re && (this.sc = re, this._mdf.sc = !0, ae = !0), this.fc !== ie && (this.fc = ie, this._mdf.fc = !0, ae = !0), this.m !== ne && (this.m = ne, this._mdf.m = !0, ae = !0), se.length && (this.p[0] !== se[0] || this.p[1] !== se[1] || this.p[4] !== se[4] || this.p[5] !== se[5] || this.p[12] !== se[12] || this.p[13] !== se[13]) && (this.p = se, this._mdf.p = !0, ae = !0), ae
        };

        function TextProperty(te, ee) {
            this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, ee.d && ee.d.sid && (ee.d = te.globalData.slotManager.getProp(ee.d)), this.data = ee, this.elem = te, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
                ascent: 0,
                boxWidth: this.defaultBoxWidth,
                f: "",
                fStyle: "",
                fWeight: "",
                fc: "",
                j: "",
                justifyOffset: "",
                l: [],
                lh: 0,
                lineWidths: [],
                ls: "",
                of: "",
                s: "",
                sc: "",
                sw: 0,
                t: 0,
                tr: 0,
                sz: 0,
                ps: null,
                fillColorAnim: !1,
                strokeColorAnim: !1,
                strokeWidthAnim: !1,
                yOffset: 0,
                finalSize: 0,
                finalText: [],
                finalLineHeight: 0,
                __complete: !1
            }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData)
        }
        TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function (te, ee) {
            for (var re in ee) Object.prototype.hasOwnProperty.call(ee, re) && (te[re] = ee[re]);
            return te
        }, TextProperty.prototype.setCurrentData = function (te) {
            te.__complete || this.completeTextData(te), this.currentData = te, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0
        }, TextProperty.prototype.searchProperty = function () {
            return this.searchKeyframes()
        }, TextProperty.prototype.searchKeyframes = function () {
            return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf
        }, TextProperty.prototype.addEffect = function (te) {
            this.effectsSequence.push(te), this.elem.addDynamicProperty(this)
        }, TextProperty.prototype.getValue = function (te) {
            if (!((this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length) && !te)) {
                this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                var ee = this.currentData,
                    re = this.keysIndex;
                if (this.lock) {
                    this.setCurrentData(this.currentData);
                    return
                }
                this.lock = !0, this._mdf = !1;
                var ie, ne = this.effectsSequence.length,
                    se = te || this.data.d.k[this.keysIndex].s;
                for (ie = 0; ie < ne; ie += 1) re !== this.keysIndex ? se = this.effectsSequence[ie](se, se.t) : se = this.effectsSequence[ie](this.currentData, se.t);
                ee !== se && this.setCurrentData(se), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId
            }
        }, TextProperty.prototype.getKeyframeValue = function () {
            for (var te = this.data.d.k, ee = this.elem.comp.renderedFrame, re = 0, ie = te.length; re <= ie - 1 && !(re === ie - 1 || te[re + 1].t > ee);) re += 1;
            return this.keysIndex !== re && (this.keysIndex = re), this.data.d.k[this.keysIndex].s
        }, TextProperty.prototype.buildFinalText = function (te) {
            for (var ee = [], re = 0, ie = te.length, ne, se, ae = !1, oe = !1, le = ""; re < ie;) ae = oe, oe = !1, ne = te.charCodeAt(re), le = te.charAt(re), FontManager.isCombinedCharacter(ne) ? ae = !0 : ne >= 55296 && ne <= 56319 ? FontManager.isRegionalFlag(te, re) ? le = te.substr(re, 14) : (se = te.charCodeAt(re + 1), se >= 56320 && se <= 57343 && (FontManager.isModifier(ne, se) ? (le = te.substr(re, 2), ae = !0) : FontManager.isFlagEmoji(te.substr(re, 4)) ? le = te.substr(re, 4) : le = te.substr(re, 2))) : ne > 56319 ? (se = te.charCodeAt(re + 1), FontManager.isVariationSelector(ne) && (ae = !0)) : FontManager.isZeroWidthJoiner(ne) && (ae = !0, oe = !0), ae ? (ee[ee.length - 1] += le, ae = !1) : ee.push(le), re += le.length;
            return ee
        }, TextProperty.prototype.completeTextData = function (te) {
            te.__complete = !0;
            var ee = this.elem.globalData.fontManager,
                re = this.data,
                ie = [],
                ne, se, ae, oe = 0,
                le, he = re.m.g,
                fe = 0,
                _e = 0,
                ue = 0,
                de = [],
                me = 0,
                ce = 0,
                Ce, pe, ve = ee.getFontByName(te.f),
                ge, ye = 0,
                Ee = getFontProperties(ve);
            te.fWeight = Ee.weight, te.fStyle = Ee.style, te.finalSize = te.s, te.finalText = this.buildFinalText(te.t), se = te.finalText.length, te.finalLineHeight = te.lh;
            var Pe = te.tr / 1e3 * te.finalSize,
                xe;
            if (te.sz)
                for (var we = !0, Fe = te.sz[0], Le = te.sz[1], Re, Me; we;) {
                    Me = this.buildFinalText(te.t), Re = 0, me = 0, se = Me.length, Pe = te.tr / 1e3 * te.finalSize;
                    var $e = -1;
                    for (ne = 0; ne < se; ne += 1) xe = Me[ne].charCodeAt(0), ae = !1, Me[ne] === " " ? $e = ne : (xe === 13 || xe === 3) && (me = 0, ae = !0, Re += te.finalLineHeight || te.finalSize * 1.2), ee.chars ? (ge = ee.getCharData(Me[ne], ve.fStyle, ve.fFamily), ye = ae ? 0 : ge.w * te.finalSize / 100) : ye = ee.measureText(Me[ne], te.f, te.finalSize), me + ye > Fe && Me[ne] !== " " ? ($e === -1 ? se += 1 : ne = $e, Re += te.finalLineHeight || te.finalSize * 1.2, Me.splice(ne, $e === ne ? 1 : 0, "\r"), $e = -1, me = 0) : (me += ye, me += Pe);
                    Re += ve.ascent * te.finalSize / 100, this.canResize && te.finalSize > this.minimumFontSize && Le < Re ? (te.finalSize -= 1, te.finalLineHeight = te.finalSize * te.lh / te.s) : (te.finalText = Me, se = te.finalText.length, we = !1)
                }
            me = -Pe, ye = 0;
            var Be = 0,
                Ie;
            for (ne = 0; ne < se; ne += 1)
                if (ae = !1, Ie = te.finalText[ne], xe = Ie.charCodeAt(0), xe === 13 || xe === 3 ? (Be = 0, de.push(me), ce = me > ce ? me : ce, me = -2 * Pe, le = "", ae = !0, ue += 1) : le = Ie, ee.chars ? (ge = ee.getCharData(Ie, ve.fStyle, ee.getFontByName(te.f).fFamily), ye = ae ? 0 : ge.w * te.finalSize / 100) : ye = ee.measureText(le, te.f, te.finalSize), Ie === " " ? Be += ye + Pe : (me += ye + Pe + Be, Be = 0), ie.push({
                        l: ye,
                        an: ye,
                        add: fe,
                        n: ae,
                        anIndexes: [],
                        val: le,
                        line: ue,
                        animatorJustifyOffset: 0
                    }), he == 2) {
                    if (fe += ye, le === "" || le === " " || ne === se - 1) {
                        for ((le === "" || le === " ") && (fe -= ye); _e <= ne;) ie[_e].an = fe, ie[_e].ind = oe, ie[_e].extra = ye, _e += 1;
                        oe += 1, fe = 0
                    }
                } else if (he == 3) {
                if (fe += ye, le === "" || ne === se - 1) {
                    for (le === "" && (fe -= ye); _e <= ne;) ie[_e].an = fe, ie[_e].ind = oe, ie[_e].extra = ye, _e += 1;
                    fe = 0, oe += 1
                }
            } else ie[oe].ind = oe, ie[oe].extra = 0, oe += 1;
            if (te.l = ie, ce = me > ce ? me : ce, de.push(me), te.sz) te.boxWidth = te.sz[0], te.justifyOffset = 0;
            else switch (te.boxWidth = ce, te.j) {
                case 1:
                    te.justifyOffset = -te.boxWidth;
                    break;
                case 2:
                    te.justifyOffset = -te.boxWidth / 2;
                    break;
                default:
                    te.justifyOffset = 0
            }
            te.lineWidths = de;
            var Se = re.a,
                Ae, be;
            pe = Se.length;
            var De, Te, ke = [];
            for (Ce = 0; Ce < pe; Ce += 1) {
                for (Ae = Se[Ce], Ae.a.sc && (te.strokeColorAnim = !0), Ae.a.sw && (te.strokeWidthAnim = !0), (Ae.a.fc || Ae.a.fh || Ae.a.fs || Ae.a.fb) && (te.fillColorAnim = !0), Te = 0, De = Ae.s.b, ne = 0; ne < se; ne += 1) be = ie[ne], be.anIndexes[Ce] = Te, (De == 1 && be.val !== "" || De == 2 && be.val !== "" && be.val !== " " || De == 3 && (be.n || be.val == " " || ne == se - 1) || De == 4 && (be.n || ne == se - 1)) && (Ae.s.rn === 1 && ke.push(Te), Te += 1);
                re.a[Ce].s.totalChars = Te;
                var Ve = -1,
                    We;
                if (Ae.s.rn === 1)
                    for (ne = 0; ne < se; ne += 1) be = ie[ne], Ve != be.anIndexes[Ce] && (Ve = be.anIndexes[Ce], We = ke.splice(Math.floor(Math.random() * ke.length), 1)[0]), be.anIndexes[Ce] = We
            }
            te.yOffset = te.finalLineHeight || te.finalSize * 1.2, te.ls = te.ls || 0, te.ascent = ve.ascent * te.finalSize / 100
        }, TextProperty.prototype.updateDocumentData = function (te, ee) {
            ee = ee === void 0 ? this.keysIndex : ee;
            var re = this.copyData({}, this.data.d.k[ee].s);
            re = this.copyData(re, te), this.data.d.k[ee].s = re, this.recalculate(ee), this.setCurrentData(re), this.elem.addDynamicProperty(this)
        }, TextProperty.prototype.recalculate = function (te) {
            var ee = this.data.d.k[te].s;
            ee.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(ee)
        }, TextProperty.prototype.canResizeFont = function (te) {
            this.canResize = te, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
        }, TextProperty.prototype.setMinimumFontSize = function (te) {
            this.minimumFontSize = Math.floor(te) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
        };
        var TextSelectorProp = function () {
            var te = Math.max,
                ee = Math.min,
                re = Math.floor;

            function ie(se, ae) {
                this._currentTextLength = -1, this.k = !1, this.data = ae, this.elem = se, this.comp = se.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(se), this.s = PropertyFactory.getProp(se, ae.s || {
                    k: 0
                }, 0, 0, this), "e" in ae ? this.e = PropertyFactory.getProp(se, ae.e, 0, 0, this) : this.e = {
                    v: 100
                }, this.o = PropertyFactory.getProp(se, ae.o || {
                    k: 0
                }, 0, 0, this), this.xe = PropertyFactory.getProp(se, ae.xe || {
                    k: 0
                }, 0, 0, this), this.ne = PropertyFactory.getProp(se, ae.ne || {
                    k: 0
                }, 0, 0, this), this.sm = PropertyFactory.getProp(se, ae.sm || {
                    k: 100
                }, 0, 0, this), this.a = PropertyFactory.getProp(se, ae.a, 0, .01, this), this.dynamicProperties.length || this.getValue()
            }
            ie.prototype = {
                getMult: function (ae) {
                    this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                    var oe = 0,
                        le = 0,
                        he = 1,
                        fe = 1;
                    this.ne.v > 0 ? oe = this.ne.v / 100 : le = -this.ne.v / 100, this.xe.v > 0 ? he = 1 - this.xe.v / 100 : fe = 1 + this.xe.v / 100;
                    var _e = BezierFactory.getBezierEasing(oe, le, he, fe).get,
                        ue = 0,
                        de = this.finalS,
                        me = this.finalE,
                        ce = this.data.sh;
                    if (ce === 2) me === de ? ue = ae >= me ? 1 : 0 : ue = te(0, ee(.5 / (me - de) + (ae - de) / (me - de), 1)), ue = _e(ue);
                    else if (ce === 3) me === de ? ue = ae >= me ? 0 : 1 : ue = 1 - te(0, ee(.5 / (me - de) + (ae - de) / (me - de), 1)), ue = _e(ue);
                    else if (ce === 4) me === de ? ue = 0 : (ue = te(0, ee(.5 / (me - de) + (ae - de) / (me - de), 1)), ue < .5 ? ue *= 2 : ue = 1 - 2 * (ue - .5)), ue = _e(ue);
                    else if (ce === 5) {
                        if (me === de) ue = 0;
                        else {
                            var Ce = me - de;
                            ae = ee(te(0, ae + .5 - de), me - de);
                            var pe = -Ce / 2 + ae,
                                ve = Ce / 2;
                            ue = Math.sqrt(1 - pe * pe / (ve * ve))
                        }
                        ue = _e(ue)
                    } else ce === 6 ? (me === de ? ue = 0 : (ae = ee(te(0, ae + .5 - de), me - de), ue = (1 + Math.cos(Math.PI + Math.PI * 2 * ae / (me - de))) / 2), ue = _e(ue)) : (ae >= re(de) && (ae - de < 0 ? ue = te(0, ee(ee(me, 1) - (de - ae), 1)) : ue = te(0, ee(me - ae, 1))), ue = _e(ue));
                    if (this.sm.v !== 100) {
                        var ge = this.sm.v * .01;
                        ge === 0 && (ge = 1e-8);
                        var ye = .5 - ge * .5;
                        ue < ye ? ue = 0 : (ue = (ue - ye) / ge, ue > 1 && (ue = 1))
                    }
                    return ue * this.a.v
                },
                getValue: function (ae) {
                    this.iterateDynamicProperties(), this._mdf = ae || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, ae && this.data.r === 2 && (this.e.v = this._currentTextLength);
                    var oe = this.data.r === 2 ? 1 : 100 / this.data.totalChars,
                        le = this.o.v / oe,
                        he = this.s.v / oe + le,
                        fe = this.e.v / oe + le;
                    if (he > fe) {
                        var _e = he;
                        he = fe, fe = _e
                    }
                    this.finalS = he, this.finalE = fe
                }
            }, extendPrototype([DynamicPropertyContainer], ie);

            function ne(se, ae, oe) {
                return new ie(se, ae)
            }
            return {
                getTextSelectorProp: ne
            }
        }();

        function TextAnimatorDataProperty(te, ee, re) {
            var ie = {
                    propType: !1
                },
                ne = PropertyFactory.getProp,
                se = ee.a;
            this.a = {
                r: se.r ? ne(te, se.r, 0, degToRads, re) : ie,
                rx: se.rx ? ne(te, se.rx, 0, degToRads, re) : ie,
                ry: se.ry ? ne(te, se.ry, 0, degToRads, re) : ie,
                sk: se.sk ? ne(te, se.sk, 0, degToRads, re) : ie,
                sa: se.sa ? ne(te, se.sa, 0, degToRads, re) : ie,
                s: se.s ? ne(te, se.s, 1, .01, re) : ie,
                a: se.a ? ne(te, se.a, 1, 0, re) : ie,
                o: se.o ? ne(te, se.o, 0, .01, re) : ie,
                p: se.p ? ne(te, se.p, 1, 0, re) : ie,
                sw: se.sw ? ne(te, se.sw, 0, 0, re) : ie,
                sc: se.sc ? ne(te, se.sc, 1, 0, re) : ie,
                fc: se.fc ? ne(te, se.fc, 1, 0, re) : ie,
                fh: se.fh ? ne(te, se.fh, 0, 0, re) : ie,
                fs: se.fs ? ne(te, se.fs, 0, .01, re) : ie,
                fb: se.fb ? ne(te, se.fb, 0, .01, re) : ie,
                t: se.t ? ne(te, se.t, 0, 0, re) : ie
            }, this.s = TextSelectorProp.getTextSelectorProp(te, ee.s, re), this.s.t = ee.s.t
        }

        function TextAnimatorProperty(te, ee, re) {
            this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = te, this._renderType = ee, this._elem = re, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = {
                alignment: {}
            }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(re)
        }
        TextAnimatorProperty.prototype.searchProperties = function () {
            var te, ee = this._textData.a.length,
                re, ie = PropertyFactory.getProp;
            for (te = 0; te < ee; te += 1) re = this._textData.a[te], this._animatorsData[te] = new TextAnimatorDataProperty(this._elem, re, this);
            this._textData.p && "m" in this._textData.p ? (this._pathData = {
                a: ie(this._elem, this._textData.p.a, 0, 0, this),
                f: ie(this._elem, this._textData.p.f, 0, 0, this),
                l: ie(this._elem, this._textData.p.l, 0, 0, this),
                r: ie(this._elem, this._textData.p.r, 0, 0, this),
                p: ie(this._elem, this._textData.p.p, 0, 0, this),
                m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
            }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = ie(this._elem, this._textData.m.a, 1, 0, this)
        }, TextAnimatorProperty.prototype.getMeasures = function (te, ee) {
            if (this.lettersChangedFlag = ee, !(!this._mdf && !this._isFirstFrame && !ee && (!this._hasMaskedPath || !this._pathData.m._mdf))) {
                this._isFirstFrame = !1;
                var re = this._moreOptions.alignment.v,
                    ie = this._animatorsData,
                    ne = this._textData,
                    se = this.mHelper,
                    ae = this._renderType,
                    oe = this.renderedLetters.length,
                    le, he, fe, _e, ue = te.l,
                    de, me, ce, Ce, pe, ve, ge, ye, Ee, Pe, xe, we, Fe, Le, Re;
                if (this._hasMaskedPath) {
                    if (Re = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                        var Me = Re.v;
                        this._pathData.r.v && (Me = Me.reverse()), de = {
                            tLength: 0,
                            segments: []
                        }, _e = Me._length - 1;
                        var $e;
                        for (we = 0, fe = 0; fe < _e; fe += 1) $e = bez.buildBezierData(Me.v[fe], Me.v[fe + 1], [Me.o[fe][0] - Me.v[fe][0], Me.o[fe][1] - Me.v[fe][1]], [Me.i[fe + 1][0] - Me.v[fe + 1][0], Me.i[fe + 1][1] - Me.v[fe + 1][1]]), de.tLength += $e.segmentLength, de.segments.push($e), we += $e.segmentLength;
                        fe = _e, Re.v.c && ($e = bez.buildBezierData(Me.v[fe], Me.v[0], [Me.o[fe][0] - Me.v[fe][0], Me.o[fe][1] - Me.v[fe][1]], [Me.i[0][0] - Me.v[0][0], Me.i[0][1] - Me.v[0][1]]), de.tLength += $e.segmentLength, de.segments.push($e), we += $e.segmentLength), this._pathData.pi = de
                    }
                    if (de = this._pathData.pi, me = this._pathData.f.v, ge = 0, ve = 1, Ce = 0, pe = !0, Pe = de.segments, me < 0 && Re.v.c)
                        for (de.tLength < Math.abs(me) && (me = -Math.abs(me) % de.tLength), ge = Pe.length - 1, Ee = Pe[ge].points, ve = Ee.length - 1; me < 0;) me += Ee[ve].partialLength, ve -= 1, ve < 0 && (ge -= 1, Ee = Pe[ge].points, ve = Ee.length - 1);
                    Ee = Pe[ge].points, ye = Ee[ve - 1], ce = Ee[ve], xe = ce.partialLength
                }
                _e = ue.length, le = 0, he = 0;
                var Be = te.finalSize * 1.2 * .714,
                    Ie = !0,
                    Se, Ae, be, De, Te;
                De = ie.length;
                var ke, Ve = -1,
                    We, Ne, He, qe = me,
                    Ue = ge,
                    dt = ve,
                    $t = -1,
                    gt, mt, Ke, Ze, Ge, xt, vt, Oe, Tt = "",
                    lt = this.defaultPropsArray,
                    It;
                if (te.j === 2 || te.j === 1) {
                    var bt = 0,
                        Vt = 0,
                        yt = te.j === 2 ? -.5 : -1,
                        Ot = 0,
                        Bt = !0;
                    for (fe = 0; fe < _e; fe += 1)
                        if (ue[fe].n) {
                            for (bt && (bt += Vt); Ot < fe;) ue[Ot].animatorJustifyOffset = bt, Ot += 1;
                            bt = 0, Bt = !0
                        } else {
                            for (be = 0; be < De; be += 1) Se = ie[be].a, Se.t.propType && (Bt && te.j === 2 && (Vt += Se.t.v * yt), Ae = ie[be].s, ke = Ae.getMult(ue[fe].anIndexes[be], ne.a[be].s.totalChars), ke.length ? bt += Se.t.v * ke[0] * yt : bt += Se.t.v * ke * yt);
                            Bt = !1
                        } for (bt && (bt += Vt); Ot < fe;) ue[Ot].animatorJustifyOffset = bt, Ot += 1
                }
                for (fe = 0; fe < _e; fe += 1) {
                    if (se.reset(), gt = 1, ue[fe].n) le = 0, he += te.yOffset, he += Ie ? 1 : 0, me = qe, Ie = !1, this._hasMaskedPath && (ge = Ue, ve = dt, Ee = Pe[ge].points, ye = Ee[ve - 1], ce = Ee[ve], xe = ce.partialLength, Ce = 0), Tt = "", Oe = "", xt = "", It = "", lt = this.defaultPropsArray;
                    else {
                        if (this._hasMaskedPath) {
                            if ($t !== ue[fe].line) {
                                switch (te.j) {
                                    case 1:
                                        me += we - te.lineWidths[ue[fe].line];
                                        break;
                                    case 2:
                                        me += (we - te.lineWidths[ue[fe].line]) / 2;
                                        break
                                }
                                $t = ue[fe].line
                            }
                            Ve !== ue[fe].ind && (ue[Ve] && (me += ue[Ve].extra), me += ue[fe].an / 2, Ve = ue[fe].ind), me += re[0] * ue[fe].an * .005;
                            var ht = 0;
                            for (be = 0; be < De; be += 1) Se = ie[be].a, Se.p.propType && (Ae = ie[be].s, ke = Ae.getMult(ue[fe].anIndexes[be], ne.a[be].s.totalChars), ke.length ? ht += Se.p.v[0] * ke[0] : ht += Se.p.v[0] * ke), Se.a.propType && (Ae = ie[be].s, ke = Ae.getMult(ue[fe].anIndexes[be], ne.a[be].s.totalChars), ke.length ? ht += Se.a.v[0] * ke[0] : ht += Se.a.v[0] * ke);
                            for (pe = !0, this._pathData.a.v && (me = ue[0].an * .5 + (we - this._pathData.f.v - ue[0].an * .5 - ue[ue.length - 1].an * .5) * Ve / (_e - 1), me += this._pathData.f.v); pe;) Ce + xe >= me + ht || !Ee ? (Fe = (me + ht - Ce) / ce.partialLength, Ne = ye.point[0] + (ce.point[0] - ye.point[0]) * Fe, He = ye.point[1] + (ce.point[1] - ye.point[1]) * Fe, se.translate(-re[0] * ue[fe].an * .005, -(re[1] * Be) * .01), pe = !1) : Ee && (Ce += ce.partialLength, ve += 1, ve >= Ee.length && (ve = 0, ge += 1, Pe[ge] ? Ee = Pe[ge].points : Re.v.c ? (ve = 0, ge = 0, Ee = Pe[ge].points) : (Ce -= ce.partialLength, Ee = null)), Ee && (ye = ce, ce = Ee[ve], xe = ce.partialLength));
                            We = ue[fe].an / 2 - ue[fe].add, se.translate(-We, 0, 0)
                        } else We = ue[fe].an / 2 - ue[fe].add, se.translate(-We, 0, 0), se.translate(-re[0] * ue[fe].an * .005, -re[1] * Be * .01, 0);
                        for (be = 0; be < De; be += 1) Se = ie[be].a, Se.t.propType && (Ae = ie[be].s, ke = Ae.getMult(ue[fe].anIndexes[be], ne.a[be].s.totalChars), (le !== 0 || te.j !== 0) && (this._hasMaskedPath ? ke.length ? me += Se.t.v * ke[0] : me += Se.t.v * ke : ke.length ? le += Se.t.v * ke[0] : le += Se.t.v * ke));
                        for (te.strokeWidthAnim && (Ke = te.sw || 0), te.strokeColorAnim && (te.sc ? mt = [te.sc[0], te.sc[1], te.sc[2]] : mt = [0, 0, 0]), te.fillColorAnim && te.fc && (Ze = [te.fc[0], te.fc[1], te.fc[2]]), be = 0; be < De; be += 1) Se = ie[be].a, Se.a.propType && (Ae = ie[be].s, ke = Ae.getMult(ue[fe].anIndexes[be], ne.a[be].s.totalChars), ke.length ? se.translate(-Se.a.v[0] * ke[0], -Se.a.v[1] * ke[1], Se.a.v[2] * ke[2]) : se.translate(-Se.a.v[0] * ke, -Se.a.v[1] * ke, Se.a.v[2] * ke));
                        for (be = 0; be < De; be += 1) Se = ie[be].a, Se.s.propType && (Ae = ie[be].s, ke = Ae.getMult(ue[fe].anIndexes[be], ne.a[be].s.totalChars), ke.length ? se.scale(1 + (Se.s.v[0] - 1) * ke[0], 1 + (Se.s.v[1] - 1) * ke[1], 1) : se.scale(1 + (Se.s.v[0] - 1) * ke, 1 + (Se.s.v[1] - 1) * ke, 1));
                        for (be = 0; be < De; be += 1) {
                            if (Se = ie[be].a, Ae = ie[be].s, ke = Ae.getMult(ue[fe].anIndexes[be], ne.a[be].s.totalChars), Se.sk.propType && (ke.length ? se.skewFromAxis(-Se.sk.v * ke[0], Se.sa.v * ke[1]) : se.skewFromAxis(-Se.sk.v * ke, Se.sa.v * ke)), Se.r.propType && (ke.length ? se.rotateZ(-Se.r.v * ke[2]) : se.rotateZ(-Se.r.v * ke)), Se.ry.propType && (ke.length ? se.rotateY(Se.ry.v * ke[1]) : se.rotateY(Se.ry.v * ke)), Se.rx.propType && (ke.length ? se.rotateX(Se.rx.v * ke[0]) : se.rotateX(Se.rx.v * ke)), Se.o.propType && (ke.length ? gt += (Se.o.v * ke[0] - gt) * ke[0] : gt += (Se.o.v * ke - gt) * ke), te.strokeWidthAnim && Se.sw.propType && (ke.length ? Ke += Se.sw.v * ke[0] : Ke += Se.sw.v * ke), te.strokeColorAnim && Se.sc.propType)
                                for (Ge = 0; Ge < 3; Ge += 1) ke.length ? mt[Ge] += (Se.sc.v[Ge] - mt[Ge]) * ke[0] : mt[Ge] += (Se.sc.v[Ge] - mt[Ge]) * ke;
                            if (te.fillColorAnim && te.fc) {
                                if (Se.fc.propType)
                                    for (Ge = 0; Ge < 3; Ge += 1) ke.length ? Ze[Ge] += (Se.fc.v[Ge] - Ze[Ge]) * ke[0] : Ze[Ge] += (Se.fc.v[Ge] - Ze[Ge]) * ke;
                                Se.fh.propType && (ke.length ? Ze = addHueToRGB(Ze, Se.fh.v * ke[0]) : Ze = addHueToRGB(Ze, Se.fh.v * ke)), Se.fs.propType && (ke.length ? Ze = addSaturationToRGB(Ze, Se.fs.v * ke[0]) : Ze = addSaturationToRGB(Ze, Se.fs.v * ke)), Se.fb.propType && (ke.length ? Ze = addBrightnessToRGB(Ze, Se.fb.v * ke[0]) : Ze = addBrightnessToRGB(Ze, Se.fb.v * ke))
                            }
                        }
                        for (be = 0; be < De; be += 1) Se = ie[be].a, Se.p.propType && (Ae = ie[be].s, ke = Ae.getMult(ue[fe].anIndexes[be], ne.a[be].s.totalChars), this._hasMaskedPath ? ke.length ? se.translate(0, Se.p.v[1] * ke[0], -Se.p.v[2] * ke[1]) : se.translate(0, Se.p.v[1] * ke, -Se.p.v[2] * ke) : ke.length ? se.translate(Se.p.v[0] * ke[0], Se.p.v[1] * ke[1], -Se.p.v[2] * ke[2]) : se.translate(Se.p.v[0] * ke, Se.p.v[1] * ke, -Se.p.v[2] * ke));
                        if (te.strokeWidthAnim && (xt = Ke < 0 ? 0 : Ke), te.strokeColorAnim && (vt = "rgb(" + Math.round(mt[0] * 255) + "," + Math.round(mt[1] * 255) + "," + Math.round(mt[2] * 255) + ")"), te.fillColorAnim && te.fc && (Oe = "rgb(" + Math.round(Ze[0] * 255) + "," + Math.round(Ze[1] * 255) + "," + Math.round(Ze[2] * 255) + ")"), this._hasMaskedPath) {
                            if (se.translate(0, -te.ls), se.translate(0, re[1] * Be * .01 + he, 0), this._pathData.p.v) {
                                Le = (ce.point[1] - ye.point[1]) / (ce.point[0] - ye.point[0]);
                                var St = Math.atan(Le) * 180 / Math.PI;
                                ce.point[0] < ye.point[0] && (St += 180), se.rotate(-St * Math.PI / 180)
                            }
                            se.translate(Ne, He, 0), me -= re[0] * ue[fe].an * .005, ue[fe + 1] && Ve !== ue[fe + 1].ind && (me += ue[fe].an / 2, me += te.tr * .001 * te.finalSize)
                        } else {
                            switch (se.translate(le, he, 0), te.ps && se.translate(te.ps[0], te.ps[1] + te.ascent, 0), te.j) {
                                case 1:
                                    se.translate(ue[fe].animatorJustifyOffset + te.justifyOffset + (te.boxWidth - te.lineWidths[ue[fe].line]), 0, 0);
                                    break;
                                case 2:
                                    se.translate(ue[fe].animatorJustifyOffset + te.justifyOffset + (te.boxWidth - te.lineWidths[ue[fe].line]) / 2, 0, 0);
                                    break
                            }
                            se.translate(0, -te.ls), se.translate(We, 0, 0), se.translate(re[0] * ue[fe].an * .005, re[1] * Be * .01, 0), le += ue[fe].l + te.tr * .001 * te.finalSize
                        }
                        ae === "html" ? Tt = se.toCSS() : ae === "svg" ? Tt = se.to2dCSS() : lt = [se.props[0], se.props[1], se.props[2], se.props[3], se.props[4], se.props[5], se.props[6], se.props[7], se.props[8], se.props[9], se.props[10], se.props[11], se.props[12], se.props[13], se.props[14], se.props[15]], It = gt
                    }
                    oe <= fe ? (Te = new LetterProps(It, xt, vt, Oe, Tt, lt), this.renderedLetters.push(Te), oe += 1, this.lettersChangedFlag = !0) : (Te = this.renderedLetters[fe], this.lettersChangedFlag = Te.update(It, xt, vt, Oe, Tt, lt) || this.lettersChangedFlag)
                }
            }
        }, TextAnimatorProperty.prototype.getValue = function () {
            this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
        }, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty);

        function ITextElement() {}
        ITextElement.prototype.initElement = function (te, ee, re) {
            this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(te, ee, re), this.textProperty = new TextProperty(this, te.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(te.t, this.renderType, this), this.initTransform(te, ee, re), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
        }, ITextElement.prototype.prepareFrame = function (te) {
            this._mdf = !1, this.prepareRenderableFrame(te), this.prepareProperties(te, this.isInRange)
        }, ITextElement.prototype.createPathShape = function (te, ee) {
            var re, ie = ee.length,
                ne, se = "";
            for (re = 0; re < ie; re += 1) ee[re].ty === "sh" && (ne = ee[re].ks.k, se += buildShapeString(ne, ne.i.length, !0, te));
            return se
        }, ITextElement.prototype.updateDocumentData = function (te, ee) {
            this.textProperty.updateDocumentData(te, ee)
        }, ITextElement.prototype.canResizeFont = function (te) {
            this.textProperty.canResizeFont(te)
        }, ITextElement.prototype.setMinimumFontSize = function (te) {
            this.textProperty.setMinimumFontSize(te)
        }, ITextElement.prototype.applyTextPropertiesToMatrix = function (te, ee, re, ie, ne) {
            switch (te.ps && ee.translate(te.ps[0], te.ps[1] + te.ascent, 0), ee.translate(0, -te.ls, 0), te.j) {
                case 1:
                    ee.translate(te.justifyOffset + (te.boxWidth - te.lineWidths[re]), 0, 0);
                    break;
                case 2:
                    ee.translate(te.justifyOffset + (te.boxWidth - te.lineWidths[re]) / 2, 0, 0);
                    break
            }
            ee.translate(ie, ne, 0)
        }, ITextElement.prototype.buildColor = function (te) {
            return "rgb(" + Math.round(te[0] * 255) + "," + Math.round(te[1] * 255) + "," + Math.round(te[2] * 255) + ")"
        }, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function () {}, ITextElement.prototype.validateText = function () {
            (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
        };
        var emptyShapeData = {
            shapes: []
        };

        function SVGTextLottieElement(te, ee, re) {
            this.textSpans = [], this.renderType = "svg", this.initElement(te, ee, re)
        }
        extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement), SVGTextLottieElement.prototype.createContent = function () {
            this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"))
        }, SVGTextLottieElement.prototype.buildTextContents = function (te) {
            for (var ee = 0, re = te.length, ie = [], ne = ""; ee < re;) te[ee] === String.fromCharCode(13) || te[ee] === String.fromCharCode(3) ? (ie.push(ne), ne = "") : ne += te[ee], ee += 1;
            return ie.push(ne), ie
        }, SVGTextLottieElement.prototype.buildShapeData = function (te, ee) {
            if (te.shapes && te.shapes.length) {
                var re = te.shapes[0];
                if (re.it) {
                    var ie = re.it[re.it.length - 1];
                    ie.s && (ie.s.k[0] = ee, ie.s.k[1] = ee)
                }
            }
            return te
        }, SVGTextLottieElement.prototype.buildNewText = function () {
            this.addDynamicProperty(this);
            var te, ee, re = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(re ? re.l.length : 0), re.fc ? this.layerElement.setAttribute("fill", this.buildColor(re.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), re.sc && (this.layerElement.setAttribute("stroke", this.buildColor(re.sc)), this.layerElement.setAttribute("stroke-width", re.sw)), this.layerElement.setAttribute("font-size", re.finalSize);
            var ie = this.globalData.fontManager.getFontByName(re.f);
            if (ie.fClass) this.layerElement.setAttribute("class", ie.fClass);
            else {
                this.layerElement.setAttribute("font-family", ie.fFamily);
                var ne = re.fWeight,
                    se = re.fStyle;
                this.layerElement.setAttribute("font-style", se), this.layerElement.setAttribute("font-weight", ne)
            }
            this.layerElement.setAttribute("aria-label", re.t);
            var ae = re.l || [],
                oe = !!this.globalData.fontManager.chars;
            ee = ae.length;
            var le, he = this.mHelper,
                fe = "",
                _e = this.data.singleShape,
                ue = 0,
                de = 0,
                me = !0,
                ce = re.tr * .001 * re.finalSize;
            if (_e && !oe && !re.sz) {
                var Ce = this.textContainer,
                    pe = "start";
                switch (re.j) {
                    case 1:
                        pe = "end";
                        break;
                    case 2:
                        pe = "middle";
                        break;
                    default:
                        pe = "start";
                        break
                }
                Ce.setAttribute("text-anchor", pe), Ce.setAttribute("letter-spacing", ce);
                var ve = this.buildTextContents(re.finalText);
                for (ee = ve.length, de = re.ps ? re.ps[1] + re.ascent : 0, te = 0; te < ee; te += 1) le = this.textSpans[te].span || createNS("tspan"), le.textContent = ve[te], le.setAttribute("x", 0), le.setAttribute("y", de), le.style.display = "inherit", Ce.appendChild(le), this.textSpans[te] || (this.textSpans[te] = {
                    span: null,
                    glyph: null
                }), this.textSpans[te].span = le, de += re.finalLineHeight;
                this.layerElement.appendChild(Ce)
            } else {
                var ge = this.textSpans.length,
                    ye;
                for (te = 0; te < ee; te += 1) {
                    if (this.textSpans[te] || (this.textSpans[te] = {
                            span: null,
                            childSpan: null,
                            glyph: null
                        }), !oe || !_e || te === 0) {
                        if (le = ge > te ? this.textSpans[te].span : createNS(oe ? "g" : "text"), ge <= te) {
                            if (le.setAttribute("stroke-linecap", "butt"), le.setAttribute("stroke-linejoin", "round"), le.setAttribute("stroke-miterlimit", "4"), this.textSpans[te].span = le, oe) {
                                var Ee = createNS("g");
                                le.appendChild(Ee), this.textSpans[te].childSpan = Ee
                            }
                            this.textSpans[te].span = le, this.layerElement.appendChild(le)
                        }
                        le.style.display = "inherit"
                    }
                    if (he.reset(), _e && (ae[te].n && (ue = -ce, de += re.yOffset, de += me ? 1 : 0, me = !1), this.applyTextPropertiesToMatrix(re, he, ae[te].line, ue, de), ue += ae[te].l || 0, ue += ce), oe) {
                        ye = this.globalData.fontManager.getCharData(re.finalText[te], ie.fStyle, this.globalData.fontManager.getFontByName(re.f).fFamily);
                        var Pe;
                        if (ye.t === 1) Pe = new SVGCompElement(ye.data, this.globalData, this);
                        else {
                            var xe = emptyShapeData;
                            ye.data && ye.data.shapes && (xe = this.buildShapeData(ye.data, re.finalSize)), Pe = new SVGShapeElement(xe, this.globalData, this)
                        }
                        if (this.textSpans[te].glyph) {
                            var we = this.textSpans[te].glyph;
                            this.textSpans[te].childSpan.removeChild(we.layerElement), we.destroy()
                        }
                        this.textSpans[te].glyph = Pe, Pe._debug = !0, Pe.prepareFrame(0), Pe.renderFrame(), this.textSpans[te].childSpan.appendChild(Pe.layerElement), ye.t === 1 && this.textSpans[te].childSpan.setAttribute("transform", "scale(" + re.finalSize / 100 + "," + re.finalSize / 100 + ")")
                    } else _e && le.setAttribute("transform", "translate(" + he.props[12] + "," + he.props[13] + ")"), le.textContent = ae[te].val, le.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve")
                }
                _e && le && le.setAttribute("d", fe)
            }
            for (; te < this.textSpans.length;) this.textSpans[te].span.style.display = "none", te += 1;
            this._sizeChanged = !0
        }, SVGTextLottieElement.prototype.sourceRectAtTime = function () {
            if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
                this._sizeChanged = !1;
                var te = this.layerElement.getBBox();
                this.bbox = {
                    top: te.y,
                    left: te.x,
                    width: te.width,
                    height: te.height
                }
            }
            return this.bbox
        }, SVGTextLottieElement.prototype.getValue = function () {
            var te, ee = this.textSpans.length,
                re;
            for (this.renderedFrame = this.comp.renderedFrame, te = 0; te < ee; te += 1) re = this.textSpans[te].glyph, re && (re.prepareFrame(this.comp.renderedFrame - this.data.st), re._mdf && (this._mdf = !0))
        }, SVGTextLottieElement.prototype.renderInnerContent = function () {
            if (this.validateText(), (!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
                this._sizeChanged = !0;
                var te, ee, re = this.textAnimator.renderedLetters,
                    ie = this.textProperty.currentData.l;
                ee = ie.length;
                var ne, se, ae;
                for (te = 0; te < ee; te += 1) ie[te].n || (ne = re[te], se = this.textSpans[te].span, ae = this.textSpans[te].glyph, ae && ae.renderFrame(), ne._mdf.m && se.setAttribute("transform", ne.m), ne._mdf.o && se.setAttribute("opacity", ne.o), ne._mdf.sw && se.setAttribute("stroke-width", ne.sw), ne._mdf.sc && se.setAttribute("stroke", ne.sc), ne._mdf.fc && se.setAttribute("fill", ne.fc))
            }
        };

        function ISolidElement(te, ee, re) {
            this.initElement(te, ee, re)
        }
        extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function () {
            var te = createNS("rect");
            te.setAttribute("width", this.data.sw), te.setAttribute("height", this.data.sh), te.setAttribute("fill", this.data.sc), this.layerElement.appendChild(te)
        };

        function NullElement(te, ee, re) {
            this.initFrame(), this.initBaseData(te, ee, re), this.initFrame(), this.initTransform(te, ee, re), this.initHierarchy()
        }
        NullElement.prototype.prepareFrame = function (te) {
            this.prepareProperties(te, !0)
        }, NullElement.prototype.renderFrame = function () {}, NullElement.prototype.getBaseElement = function () {
            return null
        }, NullElement.prototype.destroy = function () {}, NullElement.prototype.sourceRectAtTime = function () {}, NullElement.prototype.hide = function () {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement);

        function SVGRendererBase() {}
        extendPrototype([BaseRenderer], SVGRendererBase), SVGRendererBase.prototype.createNull = function (te) {
            return new NullElement(te, this.globalData, this)
        }, SVGRendererBase.prototype.createShape = function (te) {
            return new SVGShapeElement(te, this.globalData, this)
        }, SVGRendererBase.prototype.createText = function (te) {
            return new SVGTextLottieElement(te, this.globalData, this)
        }, SVGRendererBase.prototype.createImage = function (te) {
            return new IImageElement(te, this.globalData, this)
        }, SVGRendererBase.prototype.createSolid = function (te) {
            return new ISolidElement(te, this.globalData, this)
        }, SVGRendererBase.prototype.configAnimation = function (te) {
            this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + te.w + " " + te.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", te.w), this.svgElement.setAttribute("height", te.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), this.renderConfig.focusable !== void 0 && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
            var ee = this.globalData.defs;
            this.setupGlobalData(te, ee), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = te;
            var re = createNS("clipPath"),
                ie = createNS("rect");
            ie.setAttribute("width", te.w), ie.setAttribute("height", te.h), ie.setAttribute("x", 0), ie.setAttribute("y", 0);
            var ne = createElementID();
            re.setAttribute("id", ne), re.appendChild(ie), this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + ne + ")"), ee.appendChild(re), this.layers = te.layers, this.elements = createSizedArray(te.layers.length)
        }, SVGRendererBase.prototype.destroy = function () {
            this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
            var te, ee = this.layers ? this.layers.length : 0;
            for (te = 0; te < ee; te += 1) this.elements[te] && this.elements[te].destroy && this.elements[te].destroy();
            this.elements.length = 0, this.destroyed = !0, this.animationItem = null
        }, SVGRendererBase.prototype.updateContainerSize = function () {}, SVGRendererBase.prototype.findIndexByInd = function (te) {
            var ee = 0,
                re = this.layers.length;
            for (ee = 0; ee < re; ee += 1)
                if (this.layers[ee].ind === te) return ee;
            return -1
        }, SVGRendererBase.prototype.buildItem = function (te) {
            var ee = this.elements;
            if (!(ee[te] || this.layers[te].ty === 99)) {
                ee[te] = !0;
                var re = this.createItem(this.layers[te]);
                if (ee[te] = re, getExpressionsPlugin() && (this.layers[te].ty === 0 && this.globalData.projectInterface.registerComposition(re), re.initExpressions()), this.appendElementInPos(re, te), this.layers[te].tt) {
                    var ie = "tp" in this.layers[te] ? this.findIndexByInd(this.layers[te].tp) : te - 1;
                    if (ie === -1) return;
                    if (!this.elements[ie] || this.elements[ie] === !0) this.buildItem(ie), this.addPendingElement(re);
                    else {
                        var ne = ee[ie],
                            se = ne.getMatte(this.layers[te].tt);
                        re.setMatte(se)
                    }
                }
            }
        }, SVGRendererBase.prototype.checkPendingElements = function () {
            for (; this.pendingElements.length;) {
                var te = this.pendingElements.pop();
                if (te.checkParenting(), te.data.tt)
                    for (var ee = 0, re = this.elements.length; ee < re;) {
                        if (this.elements[ee] === te) {
                            var ie = "tp" in te.data ? this.findIndexByInd(te.data.tp) : ee - 1,
                                ne = this.elements[ie],
                                se = ne.getMatte(this.layers[ee].tt);
                            te.setMatte(se);
                            break
                        }
                        ee += 1
                    }
            }
        }, SVGRendererBase.prototype.renderFrame = function (te) {
            if (!(this.renderedFrame === te || this.destroyed)) {
                te === null ? te = this.renderedFrame : this.renderedFrame = te, this.globalData.frameNum = te, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = te, this.globalData._mdf = !1;
                var ee, re = this.layers.length;
                for (this.completeLayers || this.checkLayers(te), ee = re - 1; ee >= 0; ee -= 1)(this.completeLayers || this.elements[ee]) && this.elements[ee].prepareFrame(te - this.layers[ee].st);
                if (this.globalData._mdf)
                    for (ee = 0; ee < re; ee += 1)(this.completeLayers || this.elements[ee]) && this.elements[ee].renderFrame()
            }
        }, SVGRendererBase.prototype.appendElementInPos = function (te, ee) {
            var re = te.getBaseElement();
            if (re) {
                for (var ie = 0, ne; ie < ee;) this.elements[ie] && this.elements[ie] !== !0 && this.elements[ie].getBaseElement() && (ne = this.elements[ie].getBaseElement()), ie += 1;
                ne ? this.layerElement.insertBefore(re, ne) : this.layerElement.appendChild(re)
            }
        }, SVGRendererBase.prototype.hide = function () {
            this.layerElement.style.display = "none"
        }, SVGRendererBase.prototype.show = function () {
            this.layerElement.style.display = "block"
        };

        function ICompElement() {}
        extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function (te, ee, re) {
            this.initFrame(), this.initBaseData(te, ee, re), this.initTransform(te, ee, re), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), (this.data.xt || !ee.progressiveLoad) && this.buildAllItems(), this.hide()
        }, ICompElement.prototype.prepareFrame = function (te) {
            if (this._mdf = !1, this.prepareRenderableFrame(te), this.prepareProperties(te, this.isInRange), !(!this.isInRange && !this.data.xt)) {
                if (this.tm._placeholder) this.renderedFrame = te / this.data.sr;
                else {
                    var ee = this.tm.v;
                    ee === this.data.op && (ee = this.data.op - 1), this.renderedFrame = ee
                }
                var re, ie = this.elements.length;
                for (this.completeLayers || this.checkLayers(this.renderedFrame), re = ie - 1; re >= 0; re -= 1)(this.completeLayers || this.elements[re]) && (this.elements[re].prepareFrame(this.renderedFrame - this.layers[re].st), this.elements[re]._mdf && (this._mdf = !0))
            }
        }, ICompElement.prototype.renderInnerContent = function () {
            var te, ee = this.layers.length;
            for (te = 0; te < ee; te += 1)(this.completeLayers || this.elements[te]) && this.elements[te].renderFrame()
        }, ICompElement.prototype.setElements = function (te) {
            this.elements = te
        }, ICompElement.prototype.getElements = function () {
            return this.elements
        }, ICompElement.prototype.destroyElements = function () {
            var te, ee = this.layers.length;
            for (te = 0; te < ee; te += 1) this.elements[te] && this.elements[te].destroy()
        }, ICompElement.prototype.destroy = function () {
            this.destroyElements(), this.destroyBaseElement()
        };

        function SVGCompElement(te, ee, re) {
            this.layers = te.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(te, ee, re), this.tm = te.tm ? PropertyFactory.getProp(this, te.tm, 0, ee.frameRate, this) : {
                _placeholder: !0
            }
        }
        extendPrototype([SVGRendererBase, ICompElement, SVGBaseElement], SVGCompElement), SVGCompElement.prototype.createComp = function (te) {
            return new SVGCompElement(te, this.globalData, this)
        };

        function SVGRenderer(te, ee) {
            this.animationItem = te, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
            var re = "";
            if (ee && ee.title) {
                var ie = createNS("title"),
                    ne = createElementID();
                ie.setAttribute("id", ne), ie.textContent = ee.title, this.svgElement.appendChild(ie), re += ne
            }
            if (ee && ee.description) {
                var se = createNS("desc"),
                    ae = createElementID();
                se.setAttribute("id", ae), se.textContent = ee.description, this.svgElement.appendChild(se), re += " " + ae
            }
            re && this.svgElement.setAttribute("aria-labelledby", re);
            var oe = createNS("defs");
            this.svgElement.appendChild(oe);
            var le = createNS("g");
            this.svgElement.appendChild(le), this.layerElement = le, this.renderConfig = {
                preserveAspectRatio: ee && ee.preserveAspectRatio || "xMidYMid meet",
                imagePreserveAspectRatio: ee && ee.imagePreserveAspectRatio || "xMidYMid slice",
                contentVisibility: ee && ee.contentVisibility || "visible",
                progressiveLoad: ee && ee.progressiveLoad || !1,
                hideOnTransparent: !(ee && ee.hideOnTransparent === !1),
                viewBoxOnly: ee && ee.viewBoxOnly || !1,
                viewBoxSize: ee && ee.viewBoxSize || !1,
                className: ee && ee.className || "",
                id: ee && ee.id || "",
                focusable: ee && ee.focusable,
                filterSize: {
                    width: ee && ee.filterSize && ee.filterSize.width || "100%",
                    height: ee && ee.filterSize && ee.filterSize.height || "100%",
                    x: ee && ee.filterSize && ee.filterSize.x || "0%",
                    y: ee && ee.filterSize && ee.filterSize.y || "0%"
                },
                width: ee && ee.width,
                height: ee && ee.height,
                runExpressions: !ee || ee.runExpressions === void 0 || ee.runExpressions
            }, this.globalData = {
                _mdf: !1,
                frameNum: -1,
                defs: oe,
                renderConfig: this.renderConfig
            }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg"
        }
        extendPrototype([SVGRendererBase], SVGRenderer), SVGRenderer.prototype.createComp = function (te) {
            return new SVGCompElement(te, this.globalData, this)
        };

        function ShapeTransformManager() {
            this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0
        }
        ShapeTransformManager.prototype = {
            addTransformSequence: function (ee) {
                var re, ie = ee.length,
                    ne = "_";
                for (re = 0; re < ie; re += 1) ne += ee[re].transform.key + "_";
                var se = this.sequences[ne];
                return se || (se = {
                    transforms: [].concat(ee),
                    finalTransform: new Matrix,
                    _mdf: !1
                }, this.sequences[ne] = se, this.sequenceList.push(se)), se
            },
            processSequence: function (ee, re) {
                for (var ie = 0, ne = ee.transforms.length, se = re; ie < ne && !re;) {
                    if (ee.transforms[ie].transform.mProps._mdf) {
                        se = !0;
                        break
                    }
                    ie += 1
                }
                if (se)
                    for (ee.finalTransform.reset(), ie = ne - 1; ie >= 0; ie -= 1) ee.finalTransform.multiply(ee.transforms[ie].transform.mProps.v);
                ee._mdf = se
            },
            processSequences: function (ee) {
                var re, ie = this.sequenceList.length;
                for (re = 0; re < ie; re += 1) this.processSequence(this.sequenceList[re], ee)
            },
            getNewKey: function () {
                return this.transform_key_count += 1, "_" + this.transform_key_count
            }
        };
        var lumaLoader = function () {
            var ee = "__lottie_element_luma_buffer",
                re = null,
                ie = null,
                ne = null;

            function se() {
                var le = createNS("svg"),
                    he = createNS("filter"),
                    fe = createNS("feColorMatrix");
                return he.setAttribute("id", ee), fe.setAttribute("type", "matrix"), fe.setAttribute("color-interpolation-filters", "sRGB"), fe.setAttribute("values", "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"), he.appendChild(fe), le.appendChild(he), le.setAttribute("id", ee + "_svg"), featureSupport.svgLumaHidden && (le.style.display = "none"), le
            }

            function ae() {
                re || (ne = se(), document.body.appendChild(ne), re = createTag("canvas"), ie = re.getContext("2d"), ie.filter = "url(#" + ee + ")", ie.fillStyle = "rgba(0,0,0,0)", ie.fillRect(0, 0, 1, 1))
            }

            function oe(le) {
                return re || ae(), re.width = le.width, re.height = le.height, ie.filter = "url(#" + ee + ")", re
            }
            return {
                load: ae,
                get: oe
            }
        };

        function createCanvas(te, ee) {
            if (featureSupport.offscreenCanvas) return new OffscreenCanvas(te, ee);
            var re = createTag("canvas");
            return re.width = te, re.height = ee, re
        }
        var assetLoader = function () {
                return {
                    loadLumaCanvas: lumaLoader.load,
                    getLumaCanvas: lumaLoader.get,
                    createCanvas
                }
            }(),
            registeredEffects = {};

        function CVEffects(te) {
            var ee, re = te.data.ef ? te.data.ef.length : 0;
            this.filters = [];
            var ie;
            for (ee = 0; ee < re; ee += 1) {
                ie = null;
                var ne = te.data.ef[ee].ty;
                if (registeredEffects[ne]) {
                    var se = registeredEffects[ne].effect;
                    ie = new se(te.effectsManager.effectElements[ee], te)
                }
                ie && this.filters.push(ie)
            }
            this.filters.length && te.addRenderableComponent(this)
        }
        CVEffects.prototype.renderFrame = function (te) {
            var ee, re = this.filters.length;
            for (ee = 0; ee < re; ee += 1) this.filters[ee].renderFrame(te)
        }, CVEffects.prototype.getEffects = function (te) {
            var ee, re = this.filters.length,
                ie = [];
            for (ee = 0; ee < re; ee += 1) this.filters[ee].type === te && ie.push(this.filters[ee]);
            return ie
        };

        function registerEffect(te, ee) {
            registeredEffects[te] = {
                effect: ee
            }
        }

        function CVMaskElement(te, ee) {
            this.data = te, this.element = ee, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
            var re, ie = this.masksProperties.length,
                ne = !1;
            for (re = 0; re < ie; re += 1) this.masksProperties[re].mode !== "n" && (ne = !0), this.viewData[re] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[re], 3);
            this.hasMasks = ne, ne && this.element.addRenderableComponent(this)
        }
        CVMaskElement.prototype.renderFrame = function () {
            if (this.hasMasks) {
                var te = this.element.finalTransform.mat,
                    ee = this.element.canvasContext,
                    re, ie = this.masksProperties.length,
                    ne, se, ae;
                for (ee.beginPath(), re = 0; re < ie; re += 1)
                    if (this.masksProperties[re].mode !== "n") {
                        this.masksProperties[re].inv && (ee.moveTo(0, 0), ee.lineTo(this.element.globalData.compSize.w, 0), ee.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), ee.lineTo(0, this.element.globalData.compSize.h), ee.lineTo(0, 0)), ae = this.viewData[re].v, ne = te.applyToPointArray(ae.v[0][0], ae.v[0][1], 0), ee.moveTo(ne[0], ne[1]);
                        var oe, le = ae._length;
                        for (oe = 1; oe < le; oe += 1) se = te.applyToTriplePoints(ae.o[oe - 1], ae.i[oe], ae.v[oe]), ee.bezierCurveTo(se[0], se[1], se[2], se[3], se[4], se[5]);
                        se = te.applyToTriplePoints(ae.o[oe - 1], ae.i[0], ae.v[0]), ee.bezierCurveTo(se[0], se[1], se[2], se[3], se[4], se[5])
                    } this.element.globalData.renderer.save(!0), ee.clip()
            }
        }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function () {
            this.element = null
        };

        function CVBaseElement() {}
        var operationsMap = {
            1: "source-in",
            2: "source-out",
            3: "source-in",
            4: "source-out"
        };
        CVBaseElement.prototype = {
            createElements: function () {},
            initRendererElement: function () {},
            createContainerElements: function () {
                if (this.data.tt >= 1) {
                    this.buffers = [];
                    var ee = this.globalData.canvasContext,
                        re = assetLoader.createCanvas(ee.canvas.width, ee.canvas.height);
                    this.buffers.push(re);
                    var ie = assetLoader.createCanvas(ee.canvas.width, ee.canvas.height);
                    this.buffers.push(ie), this.data.tt >= 3 && !document._isProxy && assetLoader.loadLumaCanvas()
                }
                this.canvasContext = this.globalData.canvasContext, this.transformCanvas = this.globalData.transformCanvas, this.renderableEffectsManager = new CVEffects(this), this.searchEffectTransforms()
            },
            createContent: function () {},
            setBlendMode: function () {
                var ee = this.globalData;
                if (ee.blendMode !== this.data.bm) {
                    ee.blendMode = this.data.bm;
                    var re = getBlendMode(this.data.bm);
                    ee.canvasContext.globalCompositeOperation = re
                }
            },
            createRenderableComponents: function () {
                this.maskManager = new CVMaskElement(this.data, this), this.transformEffects = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT)
            },
            hideElement: function () {
                !this.hidden && (!this.isInRange || this.isTransparent) && (this.hidden = !0)
            },
            showElement: function () {
                this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0)
            },
            clearCanvas: function (ee) {
                ee.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy)
            },
            prepareLayer: function () {
                if (this.data.tt >= 1) {
                    var ee = this.buffers[0],
                        re = ee.getContext("2d");
                    this.clearCanvas(re), re.drawImage(this.canvasContext.canvas, 0, 0), this.currentTransform = this.canvasContext.getTransform(), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform)
                }
            },
            exitLayer: function () {
                if (this.data.tt >= 1) {
                    var ee = this.buffers[1],
                        re = ee.getContext("2d");
                    this.clearCanvas(re), re.drawImage(this.canvasContext.canvas, 0, 0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform);
                    var ie = this.comp.getElementById("tp" in this.data ? this.data.tp : this.data.ind - 1);
                    if (ie.renderFrame(!0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.data.tt >= 3 && !document._isProxy) {
                        var ne = assetLoader.getLumaCanvas(this.canvasContext.canvas),
                            se = ne.getContext("2d");
                        se.drawImage(this.canvasContext.canvas, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.drawImage(ne, 0, 0)
                    }
                    this.canvasContext.globalCompositeOperation = operationsMap[this.data.tt], this.canvasContext.drawImage(ee, 0, 0), this.canvasContext.globalCompositeOperation = "destination-over", this.canvasContext.drawImage(this.buffers[0], 0, 0), this.canvasContext.setTransform(this.currentTransform), this.canvasContext.globalCompositeOperation = "source-over"
                }
            },
            renderFrame: function (ee) {
                if (!(this.hidden || this.data.hd) && !(this.data.td === 1 && !ee)) {
                    this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.setBlendMode();
                    var re = this.data.ty === 0;
                    this.prepareLayer(), this.globalData.renderer.save(re), this.globalData.renderer.ctxTransform(this.finalTransform.localMat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.localOpacity), this.renderInnerContent(), this.globalData.renderer.restore(re), this.exitLayer(), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1)
                }
            },
            destroy: function () {
                this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy()
            },
            mHelper: new Matrix
        }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement;

        function CVShapeData(te, ee, re, ie) {
            this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
            var ne = 4;
            ee.ty === "rc" ? ne = 5 : ee.ty === "el" ? ne = 6 : ee.ty === "sr" && (ne = 7), this.sh = ShapePropertyFactory.getShapeProp(te, ee, ne, te);
            var se, ae = re.length,
                oe;
            for (se = 0; se < ae; se += 1) re[se].closed || (oe = {
                transforms: ie.addTransformSequence(re[se].transforms),
                trNodes: []
            }, this.styledShapes.push(oe), re[se].elements.push(oe))
        }
        CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated;

        function CVShapeElement(te, ee, re) {
            this.shapes = [], this.shapesData = te.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager, this.initElement(te, ee, re)
        }
        extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = {
            opacity: 1,
            _opMdf: !1
        }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function () {
            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, [])
        }, CVShapeElement.prototype.createStyleElement = function (te, ee) {
            var re = {
                    data: te,
                    type: te.ty,
                    preTransforms: this.transformsManager.addTransformSequence(ee),
                    transforms: [],
                    elements: [],
                    closed: te.hd === !0
                },
                ie = {};
            if (te.ty === "fl" || te.ty === "st" ? (ie.c = PropertyFactory.getProp(this, te.c, 1, 255, this), ie.c.k || (re.co = "rgb(" + bmFloor(ie.c.v[0]) + "," + bmFloor(ie.c.v[1]) + "," + bmFloor(ie.c.v[2]) + ")")) : (te.ty === "gf" || te.ty === "gs") && (ie.s = PropertyFactory.getProp(this, te.s, 1, null, this), ie.e = PropertyFactory.getProp(this, te.e, 1, null, this), ie.h = PropertyFactory.getProp(this, te.h || {
                    k: 0
                }, 0, .01, this), ie.a = PropertyFactory.getProp(this, te.a || {
                    k: 0
                }, 0, degToRads, this), ie.g = new GradientProperty(this, te.g, this)), ie.o = PropertyFactory.getProp(this, te.o, 0, .01, this), te.ty === "st" || te.ty === "gs") {
                if (re.lc = lineCapEnum[te.lc || 2], re.lj = lineJoinEnum[te.lj || 2], te.lj == 1 && (re.ml = te.ml), ie.w = PropertyFactory.getProp(this, te.w, 0, null, this), ie.w.k || (re.wi = ie.w.v), te.d) {
                    var ne = new DashProperty(this, te.d, "canvas", this);
                    ie.d = ne, ie.d.k || (re.da = ie.d.dashArray, re.do = ie.d.dashoffset[0])
                }
            } else re.r = te.r === 2 ? "evenodd" : "nonzero";
            return this.stylesList.push(re), ie.style = re, ie
        }, CVShapeElement.prototype.createGroupElement = function () {
            var te = {
                it: [],
                prevViewData: []
            };
            return te
        }, CVShapeElement.prototype.createTransformElement = function (te) {
            var ee = {
                transform: {
                    opacity: 1,
                    _opMdf: !1,
                    key: this.transformsManager.getNewKey(),
                    op: PropertyFactory.getProp(this, te.o, 0, .01, this),
                    mProps: TransformPropertyFactory.getTransformProperty(this, te, this)
                }
            };
            return ee
        }, CVShapeElement.prototype.createShapeElement = function (te) {
            var ee = new CVShapeData(this, te, this.stylesList, this.transformsManager);
            return this.shapes.push(ee), this.addShapeToModifiers(ee), ee
        }, CVShapeElement.prototype.reloadShapes = function () {
            this._isFirstFrame = !0;
            var te, ee = this.itemsData.length;
            for (te = 0; te < ee; te += 1) this.prevViewData[te] = this.itemsData[te];
            for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), ee = this.dynamicProperties.length, te = 0; te < ee; te += 1) this.dynamicProperties[te].getValue();
            this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame)
        }, CVShapeElement.prototype.addTransformToStyleList = function (te) {
            var ee, re = this.stylesList.length;
            for (ee = 0; ee < re; ee += 1) this.stylesList[ee].closed || this.stylesList[ee].transforms.push(te)
        }, CVShapeElement.prototype.removeTransformFromStyleList = function () {
            var te, ee = this.stylesList.length;
            for (te = 0; te < ee; te += 1) this.stylesList[te].closed || this.stylesList[te].transforms.pop()
        }, CVShapeElement.prototype.closeStyles = function (te) {
            var ee, re = te.length;
            for (ee = 0; ee < re; ee += 1) te[ee].closed = !0
        }, CVShapeElement.prototype.searchShapes = function (te, ee, re, ie, ne) {
            var se, ae = te.length - 1,
                oe, le, he = [],
                fe = [],
                _e, ue, de, me = [].concat(ne);
            for (se = ae; se >= 0; se -= 1) {
                if (_e = this.searchProcessedElement(te[se]), _e ? ee[se] = re[_e - 1] : te[se]._shouldRender = ie, te[se].ty === "fl" || te[se].ty === "st" || te[se].ty === "gf" || te[se].ty === "gs") _e ? ee[se].style.closed = !1 : ee[se] = this.createStyleElement(te[se], me), he.push(ee[se].style);
                else if (te[se].ty === "gr") {
                    if (!_e) ee[se] = this.createGroupElement(te[se]);
                    else
                        for (le = ee[se].it.length, oe = 0; oe < le; oe += 1) ee[se].prevViewData[oe] = ee[se].it[oe];
                    this.searchShapes(te[se].it, ee[se].it, ee[se].prevViewData, ie, me)
                } else te[se].ty === "tr" ? (_e || (de = this.createTransformElement(te[se]), ee[se] = de), me.push(ee[se]), this.addTransformToStyleList(ee[se])) : te[se].ty === "sh" || te[se].ty === "rc" || te[se].ty === "el" || te[se].ty === "sr" ? _e || (ee[se] = this.createShapeElement(te[se])) : te[se].ty === "tm" || te[se].ty === "rd" || te[se].ty === "pb" || te[se].ty === "zz" || te[se].ty === "op" ? (_e ? (ue = ee[se], ue.closed = !1) : (ue = ShapeModifiers.getModifier(te[se].ty), ue.init(this, te[se]), ee[se] = ue, this.shapeModifiers.push(ue)), fe.push(ue)) : te[se].ty === "rp" && (_e ? (ue = ee[se], ue.closed = !0) : (ue = ShapeModifiers.getModifier(te[se].ty), ee[se] = ue, ue.init(this, te, se, ee), this.shapeModifiers.push(ue), ie = !1), fe.push(ue));
                this.addProcessedElement(te[se], se + 1)
            }
            for (this.removeTransformFromStyleList(), this.closeStyles(he), ae = fe.length, se = 0; se < ae; se += 1) fe[se].closed = !0
        }, CVShapeElement.prototype.renderInnerContent = function () {
            this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
        }, CVShapeElement.prototype.renderShapeTransform = function (te, ee) {
            (te._opMdf || ee.op._mdf || this._isFirstFrame) && (ee.opacity = te.opacity, ee.opacity *= ee.op.v, ee._opMdf = !0)
        }, CVShapeElement.prototype.drawLayer = function () {
            var te, ee = this.stylesList.length,
                re, ie, ne, se, ae, oe, le = this.globalData.renderer,
                he = this.globalData.canvasContext,
                fe, _e;
            for (te = 0; te < ee; te += 1)
                if (_e = this.stylesList[te], fe = _e.type, !((fe === "st" || fe === "gs") && _e.wi === 0 || !_e.data._shouldRender || _e.coOp === 0 || this.globalData.currentGlobalAlpha === 0)) {
                    for (le.save(), ae = _e.elements, fe === "st" || fe === "gs" ? (le.ctxStrokeStyle(fe === "st" ? _e.co : _e.grd), le.ctxLineWidth(_e.wi), le.ctxLineCap(_e.lc), le.ctxLineJoin(_e.lj), le.ctxMiterLimit(_e.ml || 0)) : le.ctxFillStyle(fe === "fl" ? _e.co : _e.grd), le.ctxOpacity(_e.coOp), fe !== "st" && fe !== "gs" && he.beginPath(), le.ctxTransform(_e.preTransforms.finalTransform.props), ie = ae.length, re = 0; re < ie; re += 1) {
                        for ((fe === "st" || fe === "gs") && (he.beginPath(), _e.da && (he.setLineDash(_e.da), he.lineDashOffset = _e.do)), oe = ae[re].trNodes, se = oe.length, ne = 0; ne < se; ne += 1) oe[ne].t === "m" ? he.moveTo(oe[ne].p[0], oe[ne].p[1]) : oe[ne].t === "c" ? he.bezierCurveTo(oe[ne].pts[0], oe[ne].pts[1], oe[ne].pts[2], oe[ne].pts[3], oe[ne].pts[4], oe[ne].pts[5]) : he.closePath();
                        (fe === "st" || fe === "gs") && (le.ctxStroke(), _e.da && he.setLineDash(this.dashResetter))
                    }
                    fe !== "st" && fe !== "gs" && this.globalData.renderer.ctxFill(_e.r), le.restore()
                }
        }, CVShapeElement.prototype.renderShape = function (te, ee, re, ie) {
            var ne, se = ee.length - 1,
                ae;
            for (ae = te, ne = se; ne >= 0; ne -= 1) ee[ne].ty === "tr" ? (ae = re[ne].transform, this.renderShapeTransform(te, ae)) : ee[ne].ty === "sh" || ee[ne].ty === "el" || ee[ne].ty === "rc" || ee[ne].ty === "sr" ? this.renderPath(ee[ne], re[ne]) : ee[ne].ty === "fl" ? this.renderFill(ee[ne], re[ne], ae) : ee[ne].ty === "st" ? this.renderStroke(ee[ne], re[ne], ae) : ee[ne].ty === "gf" || ee[ne].ty === "gs" ? this.renderGradientFill(ee[ne], re[ne], ae) : ee[ne].ty === "gr" ? this.renderShape(ae, ee[ne].it, re[ne].it) : ee[ne].ty;
            ie && this.drawLayer()
        }, CVShapeElement.prototype.renderStyledShape = function (te, ee) {
            if (this._isFirstFrame || ee._mdf || te.transforms._mdf) {
                var re = te.trNodes,
                    ie = ee.paths,
                    ne, se, ae, oe = ie._length;
                re.length = 0;
                var le = te.transforms.finalTransform;
                for (ae = 0; ae < oe; ae += 1) {
                    var he = ie.shapes[ae];
                    if (he && he.v) {
                        for (se = he._length, ne = 1; ne < se; ne += 1) ne === 1 && re.push({
                            t: "m",
                            p: le.applyToPointArray(he.v[0][0], he.v[0][1], 0)
                        }), re.push({
                            t: "c",
                            pts: le.applyToTriplePoints(he.o[ne - 1], he.i[ne], he.v[ne])
                        });
                        se === 1 && re.push({
                            t: "m",
                            p: le.applyToPointArray(he.v[0][0], he.v[0][1], 0)
                        }), he.c && se && (re.push({
                            t: "c",
                            pts: le.applyToTriplePoints(he.o[ne - 1], he.i[0], he.v[0])
                        }), re.push({
                            t: "z"
                        }))
                    }
                }
                te.trNodes = re
            }
        }, CVShapeElement.prototype.renderPath = function (te, ee) {
            if (te.hd !== !0 && te._shouldRender) {
                var re, ie = ee.styledShapes.length;
                for (re = 0; re < ie; re += 1) this.renderStyledShape(ee.styledShapes[re], ee.sh)
            }
        }, CVShapeElement.prototype.renderFill = function (te, ee, re) {
            var ie = ee.style;
            (ee.c._mdf || this._isFirstFrame) && (ie.co = "rgb(" + bmFloor(ee.c.v[0]) + "," + bmFloor(ee.c.v[1]) + "," + bmFloor(ee.c.v[2]) + ")"), (ee.o._mdf || re._opMdf || this._isFirstFrame) && (ie.coOp = ee.o.v * re.opacity)
        }, CVShapeElement.prototype.renderGradientFill = function (te, ee, re) {
            var ie = ee.style,
                ne;
            if (!ie.grd || ee.g._mdf || ee.s._mdf || ee.e._mdf || te.t !== 1 && (ee.h._mdf || ee.a._mdf)) {
                var se = this.globalData.canvasContext,
                    ae = ee.s.v,
                    oe = ee.e.v;
                if (te.t === 1) ne = se.createLinearGradient(ae[0], ae[1], oe[0], oe[1]);
                else {
                    var le = Math.sqrt(Math.pow(ae[0] - oe[0], 2) + Math.pow(ae[1] - oe[1], 2)),
                        he = Math.atan2(oe[1] - ae[1], oe[0] - ae[0]),
                        fe = ee.h.v;
                    fe >= 1 ? fe = .99 : fe <= -1 && (fe = -.99);
                    var _e = le * fe,
                        ue = Math.cos(he + ee.a.v) * _e + ae[0],
                        de = Math.sin(he + ee.a.v) * _e + ae[1];
                    ne = se.createRadialGradient(ue, de, 0, ae[0], ae[1], le)
                }
                var me, ce = te.g.p,
                    Ce = ee.g.c,
                    pe = 1;
                for (me = 0; me < ce; me += 1) ee.g._hasOpacity && ee.g._collapsable && (pe = ee.g.o[me * 2 + 1]), ne.addColorStop(Ce[me * 4] / 100, "rgba(" + Ce[me * 4 + 1] + "," + Ce[me * 4 + 2] + "," + Ce[me * 4 + 3] + "," + pe + ")");
                ie.grd = ne
            }
            ie.coOp = ee.o.v * re.opacity
        }, CVShapeElement.prototype.renderStroke = function (te, ee, re) {
            var ie = ee.style,
                ne = ee.d;
            ne && (ne._mdf || this._isFirstFrame) && (ie.da = ne.dashArray, ie.do = ne.dashoffset[0]), (ee.c._mdf || this._isFirstFrame) && (ie.co = "rgb(" + bmFloor(ee.c.v[0]) + "," + bmFloor(ee.c.v[1]) + "," + bmFloor(ee.c.v[2]) + ")"), (ee.o._mdf || re._opMdf || this._isFirstFrame) && (ie.coOp = ee.o.v * re.opacity), (ee.w._mdf || this._isFirstFrame) && (ie.wi = ee.w.v)
        }, CVShapeElement.prototype.destroy = function () {
            this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0
        };

        function CVTextElement(te, ee, re) {
            this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
                fill: "rgba(0,0,0,0)",
                stroke: "rgba(0,0,0,0)",
                sWidth: 0,
                fValue: ""
            }, this.initElement(te, ee, re)
        }
        extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function () {
            var te = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(te.l ? te.l.length : 0);
            var ee = !1;
            te.fc ? (ee = !0, this.values.fill = this.buildColor(te.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = ee;
            var re = !1;
            te.sc && (re = !0, this.values.stroke = this.buildColor(te.sc), this.values.sWidth = te.sw);
            var ie = this.globalData.fontManager.getFontByName(te.f),
                ne, se, ae = te.l,
                oe = this.mHelper;
            this.stroke = re, this.values.fValue = te.finalSize + "px " + this.globalData.fontManager.getFontByName(te.f).fFamily, se = te.finalText.length;
            var le, he, fe, _e, ue, de, me, ce, Ce, pe, ve = this.data.singleShape,
                ge = te.tr * .001 * te.finalSize,
                ye = 0,
                Ee = 0,
                Pe = !0,
                xe = 0;
            for (ne = 0; ne < se; ne += 1) {
                le = this.globalData.fontManager.getCharData(te.finalText[ne], ie.fStyle, this.globalData.fontManager.getFontByName(te.f).fFamily), he = le && le.data || {}, oe.reset(), ve && ae[ne].n && (ye = -ge, Ee += te.yOffset, Ee += Pe ? 1 : 0, Pe = !1), ue = he.shapes ? he.shapes[0].it : [], me = ue.length, oe.scale(te.finalSize / 100, te.finalSize / 100), ve && this.applyTextPropertiesToMatrix(te, oe, ae[ne].line, ye, Ee), Ce = createSizedArray(me - 1);
                var we = 0;
                for (de = 0; de < me; de += 1)
                    if (ue[de].ty === "sh") {
                        for (_e = ue[de].ks.k.i.length, ce = ue[de].ks.k, pe = [], fe = 1; fe < _e; fe += 1) fe === 1 && pe.push(oe.applyToX(ce.v[0][0], ce.v[0][1], 0), oe.applyToY(ce.v[0][0], ce.v[0][1], 0)), pe.push(oe.applyToX(ce.o[fe - 1][0], ce.o[fe - 1][1], 0), oe.applyToY(ce.o[fe - 1][0], ce.o[fe - 1][1], 0), oe.applyToX(ce.i[fe][0], ce.i[fe][1], 0), oe.applyToY(ce.i[fe][0], ce.i[fe][1], 0), oe.applyToX(ce.v[fe][0], ce.v[fe][1], 0), oe.applyToY(ce.v[fe][0], ce.v[fe][1], 0));
                        pe.push(oe.applyToX(ce.o[fe - 1][0], ce.o[fe - 1][1], 0), oe.applyToY(ce.o[fe - 1][0], ce.o[fe - 1][1], 0), oe.applyToX(ce.i[0][0], ce.i[0][1], 0), oe.applyToY(ce.i[0][0], ce.i[0][1], 0), oe.applyToX(ce.v[0][0], ce.v[0][1], 0), oe.applyToY(ce.v[0][0], ce.v[0][1], 0)), Ce[we] = pe, we += 1
                    } ve && (ye += ae[ne].l, ye += ge), this.textSpans[xe] ? this.textSpans[xe].elem = Ce : this.textSpans[xe] = {
                    elem: Ce
                }, xe += 1
            }
        }, CVTextElement.prototype.renderInnerContent = function () {
            this.validateText();
            var te = this.canvasContext;
            te.font = this.values.fValue, this.globalData.renderer.ctxLineCap("butt"), this.globalData.renderer.ctxLineJoin("miter"), this.globalData.renderer.ctxMiterLimit(4), this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
            var ee, re, ie, ne, se, ae, oe = this.textAnimator.renderedLetters,
                le = this.textProperty.currentData.l;
            re = le.length;
            var he, fe = null,
                _e = null,
                ue = null,
                de, me, ce = this.globalData.renderer;
            for (ee = 0; ee < re; ee += 1)
                if (!le[ee].n) {
                    if (he = oe[ee], he && (ce.save(), ce.ctxTransform(he.p), ce.ctxOpacity(he.o)), this.fill) {
                        for (he && he.fc ? fe !== he.fc && (ce.ctxFillStyle(he.fc), fe = he.fc) : fe !== this.values.fill && (fe = this.values.fill, ce.ctxFillStyle(this.values.fill)), de = this.textSpans[ee].elem, ne = de.length, this.globalData.canvasContext.beginPath(), ie = 0; ie < ne; ie += 1)
                            for (me = de[ie], ae = me.length, this.globalData.canvasContext.moveTo(me[0], me[1]), se = 2; se < ae; se += 6) this.globalData.canvasContext.bezierCurveTo(me[se], me[se + 1], me[se + 2], me[se + 3], me[se + 4], me[se + 5]);
                        this.globalData.canvasContext.closePath(), ce.ctxFill()
                    }
                    if (this.stroke) {
                        for (he && he.sw ? ue !== he.sw && (ue = he.sw, ce.ctxLineWidth(he.sw)) : ue !== this.values.sWidth && (ue = this.values.sWidth, ce.ctxLineWidth(this.values.sWidth)), he && he.sc ? _e !== he.sc && (_e = he.sc, ce.ctxStrokeStyle(he.sc)) : _e !== this.values.stroke && (_e = this.values.stroke, ce.ctxStrokeStyle(this.values.stroke)), de = this.textSpans[ee].elem, ne = de.length, this.globalData.canvasContext.beginPath(), ie = 0; ie < ne; ie += 1)
                            for (me = de[ie], ae = me.length, this.globalData.canvasContext.moveTo(me[0], me[1]), se = 2; se < ae; se += 6) this.globalData.canvasContext.bezierCurveTo(me[se], me[se + 1], me[se + 2], me[se + 3], me[se + 4], me[se + 5]);
                        this.globalData.canvasContext.closePath(), ce.ctxStroke()
                    }
                    he && this.globalData.renderer.restore()
                }
        };

        function CVImageElement(te, ee, re) {
            this.assetData = ee.getAssetData(te.refId), this.img = ee.imageLoader.getAsset(this.assetData), this.initElement(te, ee, re)
        }
        extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function () {
            if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
                var te = createTag("canvas");
                te.width = this.assetData.w, te.height = this.assetData.h;
                var ee = te.getContext("2d"),
                    re = this.img.width,
                    ie = this.img.height,
                    ne = re / ie,
                    se = this.assetData.w / this.assetData.h,
                    ae, oe, le = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
                ne > se && le === "xMidYMid slice" || ne < se && le !== "xMidYMid slice" ? (oe = ie, ae = oe * se) : (ae = re, oe = ae / se), ee.drawImage(this.img, (re - ae) / 2, (ie - oe) / 2, ae, oe, 0, 0, this.assetData.w, this.assetData.h), this.img = te
            }
        }, CVImageElement.prototype.renderInnerContent = function () {
            this.canvasContext.drawImage(this.img, 0, 0)
        }, CVImageElement.prototype.destroy = function () {
            this.img = null
        };

        function CVSolidElement(te, ee, re) {
            this.initElement(te, ee, re)
        }
        extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function () {
            this.globalData.renderer.ctxFillStyle(this.data.sc), this.globalData.renderer.ctxFillRect(0, 0, this.data.sw, this.data.sh)
        };

        function CanvasRendererBase() {}
        extendPrototype([BaseRenderer], CanvasRendererBase), CanvasRendererBase.prototype.createShape = function (te) {
            return new CVShapeElement(te, this.globalData, this)
        }, CanvasRendererBase.prototype.createText = function (te) {
            return new CVTextElement(te, this.globalData, this)
        }, CanvasRendererBase.prototype.createImage = function (te) {
            return new CVImageElement(te, this.globalData, this)
        }, CanvasRendererBase.prototype.createSolid = function (te) {
            return new CVSolidElement(te, this.globalData, this)
        }, CanvasRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRendererBase.prototype.ctxTransform = function (te) {
            te[0] === 1 && te[1] === 0 && te[4] === 0 && te[5] === 1 && te[12] === 0 && te[13] === 0 || this.canvasContext.transform(te[0], te[1], te[4], te[5], te[12], te[13])
        }, CanvasRendererBase.prototype.ctxOpacity = function (te) {
            this.canvasContext.globalAlpha *= te < 0 ? 0 : te
        }, CanvasRendererBase.prototype.ctxFillStyle = function (te) {
            this.canvasContext.fillStyle = te
        }, CanvasRendererBase.prototype.ctxStrokeStyle = function (te) {
            this.canvasContext.strokeStyle = te
        }, CanvasRendererBase.prototype.ctxLineWidth = function (te) {
            this.canvasContext.lineWidth = te
        }, CanvasRendererBase.prototype.ctxLineCap = function (te) {
            this.canvasContext.lineCap = te
        }, CanvasRendererBase.prototype.ctxLineJoin = function (te) {
            this.canvasContext.lineJoin = te
        }, CanvasRendererBase.prototype.ctxMiterLimit = function (te) {
            this.canvasContext.miterLimit = te
        }, CanvasRendererBase.prototype.ctxFill = function (te) {
            this.canvasContext.fill(te)
        }, CanvasRendererBase.prototype.ctxFillRect = function (te, ee, re, ie) {
            this.canvasContext.fillRect(te, ee, re, ie)
        }, CanvasRendererBase.prototype.ctxStroke = function () {
            this.canvasContext.stroke()
        }, CanvasRendererBase.prototype.reset = function () {
            if (!this.renderConfig.clearCanvas) {
                this.canvasContext.restore();
                return
            }
            this.contextData.reset()
        }, CanvasRendererBase.prototype.save = function () {
            this.canvasContext.save()
        }, CanvasRendererBase.prototype.restore = function (te) {
            if (!this.renderConfig.clearCanvas) {
                this.canvasContext.restore();
                return
            }
            te && (this.globalData.blendMode = "source-over"), this.contextData.restore(te)
        }, CanvasRendererBase.prototype.configAnimation = function (te) {
            if (this.animationItem.wrapper) {
                this.animationItem.container = createTag("canvas");
                var ee = this.animationItem.container.style;
                ee.width = "100%", ee.height = "100%";
                var re = "0px 0px 0px";
                ee.transformOrigin = re, ee.mozTransformOrigin = re, ee.webkitTransformOrigin = re, ee["-webkit-transform"] = re, ee.contentVisibility = this.renderConfig.contentVisibility, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id)
            } else this.canvasContext = this.renderConfig.context;
            this.contextData.setContext(this.canvasContext), this.data = te, this.layers = te.layers, this.transformCanvas = {
                w: te.w,
                h: te.h,
                sx: 0,
                sy: 0,
                tx: 0,
                ty: 0
            }, this.setupGlobalData(te, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(te.layers.length), this.updateContainerSize()
        }, CanvasRendererBase.prototype.updateContainerSize = function (te, ee) {
            this.reset();
            var re, ie;
            te ? (re = te, ie = ee, this.canvasContext.canvas.width = re, this.canvasContext.canvas.height = ie) : (this.animationItem.wrapper && this.animationItem.container ? (re = this.animationItem.wrapper.offsetWidth, ie = this.animationItem.wrapper.offsetHeight) : (re = this.canvasContext.canvas.width, ie = this.canvasContext.canvas.height), this.canvasContext.canvas.width = re * this.renderConfig.dpr, this.canvasContext.canvas.height = ie * this.renderConfig.dpr);
            var ne, se;
            if (this.renderConfig.preserveAspectRatio.indexOf("meet") !== -1 || this.renderConfig.preserveAspectRatio.indexOf("slice") !== -1) {
                var ae = this.renderConfig.preserveAspectRatio.split(" "),
                    oe = ae[1] || "meet",
                    le = ae[0] || "xMidYMid",
                    he = le.substr(0, 4),
                    fe = le.substr(4);
                ne = re / ie, se = this.transformCanvas.w / this.transformCanvas.h, se > ne && oe === "meet" || se < ne && oe === "slice" ? (this.transformCanvas.sx = re / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = re / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = ie / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = ie / (this.transformCanvas.h / this.renderConfig.dpr)), he === "xMid" && (se < ne && oe === "meet" || se > ne && oe === "slice") ? this.transformCanvas.tx = (re - this.transformCanvas.w * (ie / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : he === "xMax" && (se < ne && oe === "meet" || se > ne && oe === "slice") ? this.transformCanvas.tx = (re - this.transformCanvas.w * (ie / this.transformCanvas.h)) * this.renderConfig.dpr : this.transformCanvas.tx = 0, fe === "YMid" && (se > ne && oe === "meet" || se < ne && oe === "slice") ? this.transformCanvas.ty = (ie - this.transformCanvas.h * (re / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : fe === "YMax" && (se > ne && oe === "meet" || se < ne && oe === "slice") ? this.transformCanvas.ty = (ie - this.transformCanvas.h * (re / this.transformCanvas.w)) * this.renderConfig.dpr : this.transformCanvas.ty = 0
            } else this.renderConfig.preserveAspectRatio === "none" ? (this.transformCanvas.sx = re / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = ie / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
            this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0)
        }, CanvasRendererBase.prototype.destroy = function () {
            this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = "");
            var te, ee = this.layers ? this.layers.length : 0;
            for (te = ee - 1; te >= 0; te -= 1) this.elements[te] && this.elements[te].destroy && this.elements[te].destroy();
            this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0
        }, CanvasRendererBase.prototype.renderFrame = function (te, ee) {
            if (!(this.renderedFrame === te && this.renderConfig.clearCanvas === !0 && !ee || this.destroyed || te === -1)) {
                this.renderedFrame = te, this.globalData.frameNum = te - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || ee, this.globalData.projectInterface.currentFrame = te;
                var re, ie = this.layers.length;
                for (this.completeLayers || this.checkLayers(te), re = ie - 1; re >= 0; re -= 1)(this.completeLayers || this.elements[re]) && this.elements[re].prepareFrame(te - this.layers[re].st);
                if (this.globalData._mdf) {
                    for (this.renderConfig.clearCanvas === !0 ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), re = ie - 1; re >= 0; re -= 1)(this.completeLayers || this.elements[re]) && this.elements[re].renderFrame();
                    this.renderConfig.clearCanvas !== !0 && this.restore()
                }
            }
        }, CanvasRendererBase.prototype.buildItem = function (te) {
            var ee = this.elements;
            if (!(ee[te] || this.layers[te].ty === 99)) {
                var re = this.createItem(this.layers[te], this, this.globalData);
                ee[te] = re, re.initExpressions()
            }
        }, CanvasRendererBase.prototype.checkPendingElements = function () {
            for (; this.pendingElements.length;) {
                var te = this.pendingElements.pop();
                te.checkParenting()
            }
        }, CanvasRendererBase.prototype.hide = function () {
            this.animationItem.container.style.display = "none"
        }, CanvasRendererBase.prototype.show = function () {
            this.animationItem.container.style.display = "block"
        };

        function CanvasContext() {
            this.opacity = -1, this.transform = createTypedArray("float32", 16), this.fillStyle = "", this.strokeStyle = "", this.lineWidth = "", this.lineCap = "", this.lineJoin = "", this.miterLimit = "", this.id = Math.random()
        }

        function CVContextData() {
            this.stack = [], this.cArrPos = 0, this.cTr = new Matrix;
            var te, ee = 15;
            for (te = 0; te < ee; te += 1) {
                var re = new CanvasContext;
                this.stack[te] = re
            }
            this._length = ee, this.nativeContext = null, this.transformMat = new Matrix, this.currentOpacity = 1, this.currentFillStyle = "", this.appliedFillStyle = "", this.currentStrokeStyle = "", this.appliedStrokeStyle = "", this.currentLineWidth = "", this.appliedLineWidth = "", this.currentLineCap = "", this.appliedLineCap = "", this.currentLineJoin = "", this.appliedLineJoin = "", this.appliedMiterLimit = "", this.currentMiterLimit = ""
        }
        CVContextData.prototype.duplicate = function () {
            var te = this._length * 2,
                ee = 0;
            for (ee = this._length; ee < te; ee += 1) this.stack[ee] = new CanvasContext;
            this._length = te
        }, CVContextData.prototype.reset = function () {
            this.cArrPos = 0, this.cTr.reset(), this.stack[this.cArrPos].opacity = 1
        }, CVContextData.prototype.restore = function (te) {
            this.cArrPos -= 1;
            var ee = this.stack[this.cArrPos],
                re = ee.transform,
                ie, ne = this.cTr.props;
            for (ie = 0; ie < 16; ie += 1) ne[ie] = re[ie];
            if (te) {
                this.nativeContext.restore();
                var se = this.stack[this.cArrPos + 1];
                this.appliedFillStyle = se.fillStyle, this.appliedStrokeStyle = se.strokeStyle, this.appliedLineWidth = se.lineWidth, this.appliedLineCap = se.lineCap, this.appliedLineJoin = se.lineJoin, this.appliedMiterLimit = se.miterLimit
            }
            this.nativeContext.setTransform(re[0], re[1], re[4], re[5], re[12], re[13]), (te || ee.opacity !== -1 && this.currentOpacity !== ee.opacity) && (this.nativeContext.globalAlpha = ee.opacity, this.currentOpacity = ee.opacity), this.currentFillStyle = ee.fillStyle, this.currentStrokeStyle = ee.strokeStyle, this.currentLineWidth = ee.lineWidth, this.currentLineCap = ee.lineCap, this.currentLineJoin = ee.lineJoin, this.currentMiterLimit = ee.miterLimit
        }, CVContextData.prototype.save = function (te) {
            te && this.nativeContext.save();
            var ee = this.cTr.props;
            this._length <= this.cArrPos && this.duplicate();
            var re = this.stack[this.cArrPos],
                ie;
            for (ie = 0; ie < 16; ie += 1) re.transform[ie] = ee[ie];
            this.cArrPos += 1;
            var ne = this.stack[this.cArrPos];
            ne.opacity = re.opacity, ne.fillStyle = re.fillStyle, ne.strokeStyle = re.strokeStyle, ne.lineWidth = re.lineWidth, ne.lineCap = re.lineCap, ne.lineJoin = re.lineJoin, ne.miterLimit = re.miterLimit
        }, CVContextData.prototype.setOpacity = function (te) {
            this.stack[this.cArrPos].opacity = te
        }, CVContextData.prototype.setContext = function (te) {
            this.nativeContext = te
        }, CVContextData.prototype.fillStyle = function (te) {
            this.stack[this.cArrPos].fillStyle !== te && (this.currentFillStyle = te, this.stack[this.cArrPos].fillStyle = te)
        }, CVContextData.prototype.strokeStyle = function (te) {
            this.stack[this.cArrPos].strokeStyle !== te && (this.currentStrokeStyle = te, this.stack[this.cArrPos].strokeStyle = te)
        }, CVContextData.prototype.lineWidth = function (te) {
            this.stack[this.cArrPos].lineWidth !== te && (this.currentLineWidth = te, this.stack[this.cArrPos].lineWidth = te)
        }, CVContextData.prototype.lineCap = function (te) {
            this.stack[this.cArrPos].lineCap !== te && (this.currentLineCap = te, this.stack[this.cArrPos].lineCap = te)
        }, CVContextData.prototype.lineJoin = function (te) {
            this.stack[this.cArrPos].lineJoin !== te && (this.currentLineJoin = te, this.stack[this.cArrPos].lineJoin = te)
        }, CVContextData.prototype.miterLimit = function (te) {
            this.stack[this.cArrPos].miterLimit !== te && (this.currentMiterLimit = te, this.stack[this.cArrPos].miterLimit = te)
        }, CVContextData.prototype.transform = function (te) {
            this.transformMat.cloneFromProps(te);
            var ee = this.cTr;
            this.transformMat.multiply(ee), ee.cloneFromProps(this.transformMat.props);
            var re = ee.props;
            this.nativeContext.setTransform(re[0], re[1], re[4], re[5], re[12], re[13])
        }, CVContextData.prototype.opacity = function (te) {
            var ee = this.stack[this.cArrPos].opacity;
            ee *= te < 0 ? 0 : te, this.stack[this.cArrPos].opacity !== ee && (this.currentOpacity !== te && (this.nativeContext.globalAlpha = te, this.currentOpacity = te), this.stack[this.cArrPos].opacity = ee)
        }, CVContextData.prototype.fill = function (te) {
            this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fill(te)
        }, CVContextData.prototype.fillRect = function (te, ee, re, ie) {
            this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fillRect(te, ee, re, ie)
        }, CVContextData.prototype.stroke = function () {
            this.appliedStrokeStyle !== this.currentStrokeStyle && (this.appliedStrokeStyle = this.currentStrokeStyle, this.nativeContext.strokeStyle = this.appliedStrokeStyle), this.appliedLineWidth !== this.currentLineWidth && (this.appliedLineWidth = this.currentLineWidth, this.nativeContext.lineWidth = this.appliedLineWidth), this.appliedLineCap !== this.currentLineCap && (this.appliedLineCap = this.currentLineCap, this.nativeContext.lineCap = this.appliedLineCap), this.appliedLineJoin !== this.currentLineJoin && (this.appliedLineJoin = this.currentLineJoin, this.nativeContext.lineJoin = this.appliedLineJoin), this.appliedMiterLimit !== this.currentMiterLimit && (this.appliedMiterLimit = this.currentMiterLimit, this.nativeContext.miterLimit = this.appliedMiterLimit), this.nativeContext.stroke()
        };

        function CVCompElement(te, ee, re) {
            this.completeLayers = !1, this.layers = te.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(te, ee, re), this.tm = te.tm ? PropertyFactory.getProp(this, te.tm, 0, ee.frameRate, this) : {
                _placeholder: !0
            }
        }
        extendPrototype([CanvasRendererBase, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function () {
            var te = this.canvasContext;
            te.beginPath(), te.moveTo(0, 0), te.lineTo(this.data.w, 0), te.lineTo(this.data.w, this.data.h), te.lineTo(0, this.data.h), te.lineTo(0, 0), te.clip();
            var ee, re = this.layers.length;
            for (ee = re - 1; ee >= 0; ee -= 1)(this.completeLayers || this.elements[ee]) && this.elements[ee].renderFrame()
        }, CVCompElement.prototype.destroy = function () {
            var te, ee = this.layers.length;
            for (te = ee - 1; te >= 0; te -= 1) this.elements[te] && this.elements[te].destroy();
            this.layers = null, this.elements = null
        }, CVCompElement.prototype.createComp = function (te) {
            return new CVCompElement(te, this.globalData, this)
        };

        function CanvasRenderer(te, ee) {
            this.animationItem = te, this.renderConfig = {
                clearCanvas: ee && ee.clearCanvas !== void 0 ? ee.clearCanvas : !0,
                context: ee && ee.context || null,
                progressiveLoad: ee && ee.progressiveLoad || !1,
                preserveAspectRatio: ee && ee.preserveAspectRatio || "xMidYMid meet",
                imagePreserveAspectRatio: ee && ee.imagePreserveAspectRatio || "xMidYMid slice",
                contentVisibility: ee && ee.contentVisibility || "visible",
                className: ee && ee.className || "",
                id: ee && ee.id || "",
                runExpressions: !ee || ee.runExpressions === void 0 || ee.runExpressions
            }, this.renderConfig.dpr = ee && ee.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = ee && ee.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
                frameNum: -1,
                _mdf: !1,
                renderConfig: this.renderConfig,
                currentGlobalAlpha: -1
            }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas", this.renderConfig.clearCanvas && (this.ctxTransform = this.contextData.transform.bind(this.contextData), this.ctxOpacity = this.contextData.opacity.bind(this.contextData), this.ctxFillStyle = this.contextData.fillStyle.bind(this.contextData), this.ctxStrokeStyle = this.contextData.strokeStyle.bind(this.contextData), this.ctxLineWidth = this.contextData.lineWidth.bind(this.contextData), this.ctxLineCap = this.contextData.lineCap.bind(this.contextData), this.ctxLineJoin = this.contextData.lineJoin.bind(this.contextData), this.ctxMiterLimit = this.contextData.miterLimit.bind(this.contextData), this.ctxFill = this.contextData.fill.bind(this.contextData), this.ctxFillRect = this.contextData.fillRect.bind(this.contextData), this.ctxStroke = this.contextData.stroke.bind(this.contextData), this.save = this.contextData.save.bind(this.contextData))
        }
        extendPrototype([CanvasRendererBase], CanvasRenderer), CanvasRenderer.prototype.createComp = function (te) {
            return new CVCompElement(te, this.globalData, this)
        };

        function HBaseElement() {}
        HBaseElement.prototype = {
            checkBlendMode: function () {},
            initRendererElement: function () {
                this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement)
            },
            createContainerElements: function () {
                this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), this.data.bm !== 0 && this.setBlendMode()
            },
            renderElement: function () {
                var ee = this.transformedElement ? this.transformedElement.style : {};
                if (this.finalTransform._matMdf) {
                    var re = this.finalTransform.mat.toCSS();
                    ee.transform = re, ee.webkitTransform = re
                }
                this.finalTransform._opMdf && (ee.opacity = this.finalTransform.mProp.o.v)
            },
            renderFrame: function () {
                this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
            },
            destroy: function () {
                this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null)
            },
            createRenderableComponents: function () {
                this.maskManager = new MaskElement(this.data, this, this.globalData)
            },
            addEffects: function () {},
            setMatte: function () {}
        }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = BaseRenderer.prototype.buildElementParenting;

        function HSolidElement(te, ee, re) {
            this.initElement(te, ee, re)
        }
        extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function () {
            var te;
            this.data.hasMask ? (te = createNS("rect"), te.setAttribute("width", this.data.sw), te.setAttribute("height", this.data.sh), te.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : (te = createTag("div"), te.style.width = this.data.sw + "px", te.style.height = this.data.sh + "px", te.style.backgroundColor = this.data.sc), this.layerElement.appendChild(te)
        };

        function HShapeElement(te, ee, re) {
            this.shapes = [], this.shapesData = te.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(te, ee, re), this.prevViewData = [], this.currentBBox = {
                x: 999999,
                y: -999999,
                h: 0,
                w: 0
            }
        }
        extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function () {
            var te;
            if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), te = this.svgElement;
            else {
                te = createNS("svg");
                var ee = this.comp.data ? this.comp.data : this.globalData.compSize;
                te.setAttribute("width", ee.w), te.setAttribute("height", ee.h), te.appendChild(this.shapesContainer), this.layerElement.appendChild(te)
            }
            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = te
        }, HShapeElement.prototype.getTransformedPoint = function (te, ee) {
            var re, ie = te.length;
            for (re = 0; re < ie; re += 1) ee = te[re].mProps.v.applyToPointArray(ee[0], ee[1], 0);
            return ee
        }, HShapeElement.prototype.calculateShapeBoundingBox = function (te, ee) {
            var re = te.sh.v,
                ie = te.transformers,
                ne, se = re._length,
                ae, oe, le, he;
            if (!(se <= 1)) {
                for (ne = 0; ne < se - 1; ne += 1) ae = this.getTransformedPoint(ie, re.v[ne]), oe = this.getTransformedPoint(ie, re.o[ne]), le = this.getTransformedPoint(ie, re.i[ne + 1]), he = this.getTransformedPoint(ie, re.v[ne + 1]), this.checkBounds(ae, oe, le, he, ee);
                re.c && (ae = this.getTransformedPoint(ie, re.v[ne]), oe = this.getTransformedPoint(ie, re.o[ne]), le = this.getTransformedPoint(ie, re.i[0]), he = this.getTransformedPoint(ie, re.v[0]), this.checkBounds(ae, oe, le, he, ee))
            }
        }, HShapeElement.prototype.checkBounds = function (te, ee, re, ie, ne) {
            this.getBoundsOfCurve(te, ee, re, ie);
            var se = this.shapeBoundingBox;
            ne.x = bmMin(se.left, ne.x), ne.xMax = bmMax(se.right, ne.xMax), ne.y = bmMin(se.top, ne.y), ne.yMax = bmMax(se.bottom, ne.yMax)
        }, HShapeElement.prototype.shapeBoundingBox = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        }, HShapeElement.prototype.tempBoundingBox = {
            x: 0,
            xMax: 0,
            y: 0,
            yMax: 0,
            width: 0,
            height: 0
        }, HShapeElement.prototype.getBoundsOfCurve = function (te, ee, re, ie) {
            for (var ne = [
                    [te[0], ie[0]],
                    [te[1], ie[1]]
                ], se, ae, oe, le, he, fe, _e, ue = 0; ue < 2; ++ue) ae = 6 * te[ue] - 12 * ee[ue] + 6 * re[ue], se = -3 * te[ue] + 9 * ee[ue] - 9 * re[ue] + 3 * ie[ue], oe = 3 * ee[ue] - 3 * te[ue], ae |= 0, se |= 0, oe |= 0, se === 0 && ae === 0 || (se === 0 ? (le = -oe / ae, le > 0 && le < 1 && ne[ue].push(this.calculateF(le, te, ee, re, ie, ue))) : (he = ae * ae - 4 * oe * se, he >= 0 && (fe = (-ae + bmSqrt(he)) / (2 * se), fe > 0 && fe < 1 && ne[ue].push(this.calculateF(fe, te, ee, re, ie, ue)), _e = (-ae - bmSqrt(he)) / (2 * se), _e > 0 && _e < 1 && ne[ue].push(this.calculateF(_e, te, ee, re, ie, ue)))));
            this.shapeBoundingBox.left = bmMin.apply(null, ne[0]), this.shapeBoundingBox.top = bmMin.apply(null, ne[1]), this.shapeBoundingBox.right = bmMax.apply(null, ne[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, ne[1])
        }, HShapeElement.prototype.calculateF = function (te, ee, re, ie, ne, se) {
            return bmPow(1 - te, 3) * ee[se] + 3 * bmPow(1 - te, 2) * te * re[se] + 3 * (1 - te) * bmPow(te, 2) * ie[se] + bmPow(te, 3) * ne[se]
        }, HShapeElement.prototype.calculateBoundingBox = function (te, ee) {
            var re, ie = te.length;
            for (re = 0; re < ie; re += 1) te[re] && te[re].sh ? this.calculateShapeBoundingBox(te[re], ee) : te[re] && te[re].it ? this.calculateBoundingBox(te[re].it, ee) : te[re] && te[re].style && te[re].w && this.expandStrokeBoundingBox(te[re].w, ee)
        }, HShapeElement.prototype.expandStrokeBoundingBox = function (te, ee) {
            var re = 0;
            if (te.keyframes) {
                for (var ie = 0; ie < te.keyframes.length; ie += 1) {
                    var ne = te.keyframes[ie].s;
                    ne > re && (re = ne)
                }
                re *= te.mult
            } else re = te.v * te.mult;
            ee.x -= re, ee.xMax += re, ee.y -= re, ee.yMax += re
        }, HShapeElement.prototype.currentBoxContains = function (te) {
            return this.currentBBox.x <= te.x && this.currentBBox.y <= te.y && this.currentBBox.width + this.currentBBox.x >= te.x + te.width && this.currentBBox.height + this.currentBBox.y >= te.y + te.height
        }, HShapeElement.prototype.renderInnerContent = function () {
            if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
                var te = this.tempBoundingBox,
                    ee = 999999;
                if (te.x = ee, te.xMax = -ee, te.y = ee, te.yMax = -ee, this.calculateBoundingBox(this.itemsData, te), te.width = te.xMax < te.x ? 0 : te.xMax - te.x, te.height = te.yMax < te.y ? 0 : te.yMax - te.y, this.currentBoxContains(te)) return;
                var re = !1;
                if (this.currentBBox.w !== te.width && (this.currentBBox.w = te.width, this.shapeCont.setAttribute("width", te.width), re = !0), this.currentBBox.h !== te.height && (this.currentBBox.h = te.height, this.shapeCont.setAttribute("height", te.height), re = !0), re || this.currentBBox.x !== te.x || this.currentBBox.y !== te.y) {
                    this.currentBBox.w = te.width, this.currentBBox.h = te.height, this.currentBBox.x = te.x, this.currentBBox.y = te.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
                    var ie = this.shapeCont.style,
                        ne = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                    ie.transform = ne, ie.webkitTransform = ne
                }
            }
        };

        function HTextElement(te, ee, re) {
            this.textSpans = [], this.textPaths = [], this.currentBBox = {
                x: 999999,
                y: -999999,
                h: 0,
                w: 0
            }, this.renderType = "svg", this.isMasked = !1, this.initElement(te, ee, re)
        }
        extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function () {
            if (this.isMasked = this.checkMasks(), this.isMasked) {
                this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
                var te = createNS("g");
                this.maskedElement.appendChild(te), this.innerElem = te
            } else this.renderType = "html", this.innerElem = this.layerElement;
            this.checkParenting()
        }, HTextElement.prototype.buildNewText = function () {
            var te = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(te.l ? te.l.length : 0);
            var ee = this.innerElem.style,
                re = te.fc ? this.buildColor(te.fc) : "rgba(0,0,0,0)";
            ee.fill = re, ee.color = re, te.sc && (ee.stroke = this.buildColor(te.sc), ee.strokeWidth = te.sw + "px");
            var ie = this.globalData.fontManager.getFontByName(te.f);
            if (!this.globalData.fontManager.chars)
                if (ee.fontSize = te.finalSize + "px", ee.lineHeight = te.finalSize + "px", ie.fClass) this.innerElem.className = ie.fClass;
                else {
                    ee.fontFamily = ie.fFamily;
                    var ne = te.fWeight,
                        se = te.fStyle;
                    ee.fontStyle = se, ee.fontWeight = ne
                } var ae, oe, le = te.l;
            oe = le.length;
            var he, fe, _e, ue = this.mHelper,
                de, me = "",
                ce = 0;
            for (ae = 0; ae < oe; ae += 1) {
                if (this.globalData.fontManager.chars ? (this.textPaths[ce] ? he = this.textPaths[ce] : (he = createNS("path"), he.setAttribute("stroke-linecap", lineCapEnum[1]), he.setAttribute("stroke-linejoin", lineJoinEnum[2]), he.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[ce] ? (fe = this.textSpans[ce], _e = fe.children[0]) : (fe = createTag("div"), fe.style.lineHeight = 0, _e = createNS("svg"), _e.appendChild(he), styleDiv(fe)))) : this.isMasked ? he = this.textPaths[ce] ? this.textPaths[ce] : createNS("text") : this.textSpans[ce] ? (fe = this.textSpans[ce], he = this.textPaths[ce]) : (fe = createTag("span"), styleDiv(fe), he = createTag("span"), styleDiv(he), fe.appendChild(he)), this.globalData.fontManager.chars) {
                    var Ce = this.globalData.fontManager.getCharData(te.finalText[ae], ie.fStyle, this.globalData.fontManager.getFontByName(te.f).fFamily),
                        pe;
                    if (Ce ? pe = Ce.data : pe = null, ue.reset(), pe && pe.shapes && pe.shapes.length && (de = pe.shapes[0].it, ue.scale(te.finalSize / 100, te.finalSize / 100), me = this.createPathShape(ue, de), he.setAttribute("d", me)), this.isMasked) this.innerElem.appendChild(he);
                    else {
                        if (this.innerElem.appendChild(fe), pe && pe.shapes) {
                            document.body.appendChild(_e);
                            var ve = _e.getBBox();
                            _e.setAttribute("width", ve.width + 2), _e.setAttribute("height", ve.height + 2), _e.setAttribute("viewBox", ve.x - 1 + " " + (ve.y - 1) + " " + (ve.width + 2) + " " + (ve.height + 2));
                            var ge = _e.style,
                                ye = "translate(" + (ve.x - 1) + "px," + (ve.y - 1) + "px)";
                            ge.transform = ye, ge.webkitTransform = ye, le[ae].yOffset = ve.y - 1
                        } else _e.setAttribute("width", 1), _e.setAttribute("height", 1);
                        fe.appendChild(_e)
                    }
                } else if (he.textContent = le[ae].val, he.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked) this.innerElem.appendChild(he);
                else {
                    this.innerElem.appendChild(fe);
                    var Ee = he.style,
                        Pe = "translate3d(0," + -te.finalSize / 1.2 + "px,0)";
                    Ee.transform = Pe, Ee.webkitTransform = Pe
                }
                this.isMasked ? this.textSpans[ce] = he : this.textSpans[ce] = fe, this.textSpans[ce].style.display = "block", this.textPaths[ce] = he, ce += 1
            }
            for (; ce < this.textSpans.length;) this.textSpans[ce].style.display = "none", ce += 1
        }, HTextElement.prototype.renderInnerContent = function () {
            this.validateText();
            var te;
            if (this.data.singleShape) {
                if (!this._isFirstFrame && !this.lettersChangedFlag) return;
                if (this.isMasked && this.finalTransform._matMdf) {
                    this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), te = this.svgElement.style;
                    var ee = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
                    te.transform = ee, te.webkitTransform = ee
                }
            }
            if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), !(!this.lettersChangedFlag && !this.textAnimator.lettersChangedFlag)) {
                var re, ie, ne = 0,
                    se = this.textAnimator.renderedLetters,
                    ae = this.textProperty.currentData.l;
                ie = ae.length;
                var oe, le, he;
                for (re = 0; re < ie; re += 1) ae[re].n ? ne += 1 : (le = this.textSpans[re], he = this.textPaths[re], oe = se[ne], ne += 1, oe._mdf.m && (this.isMasked ? le.setAttribute("transform", oe.m) : (le.style.webkitTransform = oe.m, le.style.transform = oe.m)), le.style.opacity = oe.o, oe.sw && oe._mdf.sw && he.setAttribute("stroke-width", oe.sw), oe.sc && oe._mdf.sc && he.setAttribute("stroke", oe.sc), oe.fc && oe._mdf.fc && (he.setAttribute("fill", oe.fc), he.style.color = oe.fc));
                if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
                    var fe = this.innerElem.getBBox();
                    this.currentBBox.w !== fe.width && (this.currentBBox.w = fe.width, this.svgElement.setAttribute("width", fe.width)), this.currentBBox.h !== fe.height && (this.currentBBox.h = fe.height, this.svgElement.setAttribute("height", fe.height));
                    var _e = 1;
                    if (this.currentBBox.w !== fe.width + _e * 2 || this.currentBBox.h !== fe.height + _e * 2 || this.currentBBox.x !== fe.x - _e || this.currentBBox.y !== fe.y - _e) {
                        this.currentBBox.w = fe.width + _e * 2, this.currentBBox.h = fe.height + _e * 2, this.currentBBox.x = fe.x - _e, this.currentBBox.y = fe.y - _e, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), te = this.svgElement.style;
                        var ue = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                        te.transform = ue, te.webkitTransform = ue
                    }
                }
            }
        };

        function HCameraElement(te, ee, re) {
            this.initFrame(), this.initBaseData(te, ee, re), this.initHierarchy();
            var ie = PropertyFactory.getProp;
            if (this.pe = ie(this, te.pe, 0, 0, this), te.ks.p.s ? (this.px = ie(this, te.ks.p.x, 1, 0, this), this.py = ie(this, te.ks.p.y, 1, 0, this), this.pz = ie(this, te.ks.p.z, 1, 0, this)) : this.p = ie(this, te.ks.p, 1, 0, this), te.ks.a && (this.a = ie(this, te.ks.a, 1, 0, this)), te.ks.or.k.length && te.ks.or.k[0].to) {
                var ne, se = te.ks.or.k.length;
                for (ne = 0; ne < se; ne += 1) te.ks.or.k[ne].to = null, te.ks.or.k[ne].ti = null
            }
            this.or = ie(this, te.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = ie(this, te.ks.rx, 0, degToRads, this), this.ry = ie(this, te.ks.ry, 0, degToRads, this), this.rz = ie(this, te.ks.rz, 0, degToRads, this), this.mat = new Matrix, this._prevMat = new Matrix, this._isFirstFrame = !0, this.finalTransform = {
                mProp: this
            }
        }
        extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function () {
            var te, ee = this.comp.threeDElements.length,
                re, ie, ne;
            for (te = 0; te < ee; te += 1)
                if (re = this.comp.threeDElements[te], re.type === "3d") {
                    ie = re.perspectiveElem.style, ne = re.container.style;
                    var se = this.pe.v + "px",
                        ae = "0px 0px 0px",
                        oe = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                    ie.perspective = se, ie.webkitPerspective = se, ne.transformOrigin = ae, ne.mozTransformOrigin = ae, ne.webkitTransformOrigin = ae, ie.transform = oe, ie.webkitTransform = oe
                }
        }, HCameraElement.prototype.createElements = function () {}, HCameraElement.prototype.hide = function () {}, HCameraElement.prototype.renderFrame = function () {
            var te = this._isFirstFrame,
                ee, re;
            if (this.hierarchy)
                for (re = this.hierarchy.length, ee = 0; ee < re; ee += 1) te = this.hierarchy[ee].finalTransform.mProp._mdf || te;
            if (te || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
                if (this.mat.reset(), this.hierarchy)
                    for (re = this.hierarchy.length - 1, ee = re; ee >= 0; ee -= 1) {
                        var ie = this.hierarchy[ee].finalTransform.mProp;
                        this.mat.translate(-ie.p.v[0], -ie.p.v[1], ie.p.v[2]), this.mat.rotateX(-ie.or.v[0]).rotateY(-ie.or.v[1]).rotateZ(ie.or.v[2]), this.mat.rotateX(-ie.rx.v).rotateY(-ie.ry.v).rotateZ(ie.rz.v), this.mat.scale(1 / ie.s.v[0], 1 / ie.s.v[1], 1 / ie.s.v[2]), this.mat.translate(ie.a.v[0], ie.a.v[1], ie.a.v[2])
                    }
                if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
                    var ne;
                    this.p ? ne = [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : ne = [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
                    var se = Math.sqrt(Math.pow(ne[0], 2) + Math.pow(ne[1], 2) + Math.pow(ne[2], 2)),
                        ae = [ne[0] / se, ne[1] / se, ne[2] / se],
                        oe = Math.sqrt(ae[2] * ae[2] + ae[0] * ae[0]),
                        le = Math.atan2(ae[1], oe),
                        he = Math.atan2(ae[0], -ae[2]);
                    this.mat.rotateY(he).rotateX(-le)
                }
                this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
                var fe = !this._prevMat.equals(this.mat);
                if ((fe || this.pe._mdf) && this.comp.threeDElements) {
                    re = this.comp.threeDElements.length;
                    var _e, ue, de;
                    for (ee = 0; ee < re; ee += 1)
                        if (_e = this.comp.threeDElements[ee], _e.type === "3d") {
                            if (fe) {
                                var me = this.mat.toCSS();
                                de = _e.container.style, de.transform = me, de.webkitTransform = me
                            }
                            this.pe._mdf && (ue = _e.perspectiveElem.style, ue.perspective = this.pe.v + "px", ue.webkitPerspective = this.pe.v + "px")
                        } this.mat.clone(this._prevMat)
                }
            }
            this._isFirstFrame = !1
        }, HCameraElement.prototype.prepareFrame = function (te) {
            this.prepareProperties(te, !0)
        }, HCameraElement.prototype.destroy = function () {}, HCameraElement.prototype.getBaseElement = function () {
            return null
        };

        function HImageElement(te, ee, re) {
            this.assetData = ee.getAssetData(te.refId), this.initElement(te, ee, re)
        }
        extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function () {
            var te = this.globalData.getAssetsPath(this.assetData),
                ee = new Image;
            this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", te), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(ee), ee.crossOrigin = "anonymous", ee.src = te, this.data.ln && this.baseElement.setAttribute("id", this.data.ln)
        };

        function HybridRendererBase(te, ee) {
            this.animationItem = te, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
                className: ee && ee.className || "",
                imagePreserveAspectRatio: ee && ee.imagePreserveAspectRatio || "xMidYMid slice",
                hideOnTransparent: !(ee && ee.hideOnTransparent === !1),
                filterSize: {
                    width: ee && ee.filterSize && ee.filterSize.width || "400%",
                    height: ee && ee.filterSize && ee.filterSize.height || "400%",
                    x: ee && ee.filterSize && ee.filterSize.x || "-100%",
                    y: ee && ee.filterSize && ee.filterSize.y || "-100%"
                }
            }, this.globalData = {
                _mdf: !1,
                frameNum: -1,
                renderConfig: this.renderConfig
            }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
        }
        extendPrototype([BaseRenderer], HybridRendererBase), HybridRendererBase.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRendererBase.prototype.checkPendingElements = function () {
            for (; this.pendingElements.length;) {
                var te = this.pendingElements.pop();
                te.checkParenting()
            }
        }, HybridRendererBase.prototype.appendElementInPos = function (te, ee) {
            var re = te.getBaseElement();
            if (re) {
                var ie = this.layers[ee];
                if (!ie.ddd || !this.supports3d)
                    if (this.threeDElements) this.addTo3dContainer(re, ee);
                    else {
                        for (var ne = 0, se, ae, oe; ne < ee;) this.elements[ne] && this.elements[ne] !== !0 && this.elements[ne].getBaseElement && (ae = this.elements[ne], oe = this.layers[ne].ddd ? this.getThreeDContainerByPos(ne) : ae.getBaseElement(), se = oe || se), ne += 1;
                        se ? (!ie.ddd || !this.supports3d) && this.layerElement.insertBefore(re, se) : (!ie.ddd || !this.supports3d) && this.layerElement.appendChild(re)
                    }
                else this.addTo3dContainer(re, ee)
            }
        }, HybridRendererBase.prototype.createShape = function (te) {
            return this.supports3d ? new HShapeElement(te, this.globalData, this) : new SVGShapeElement(te, this.globalData, this)
        }, HybridRendererBase.prototype.createText = function (te) {
            return this.supports3d ? new HTextElement(te, this.globalData, this) : new SVGTextLottieElement(te, this.globalData, this)
        }, HybridRendererBase.prototype.createCamera = function (te) {
            return this.camera = new HCameraElement(te, this.globalData, this), this.camera
        }, HybridRendererBase.prototype.createImage = function (te) {
            return this.supports3d ? new HImageElement(te, this.globalData, this) : new IImageElement(te, this.globalData, this)
        }, HybridRendererBase.prototype.createSolid = function (te) {
            return this.supports3d ? new HSolidElement(te, this.globalData, this) : new ISolidElement(te, this.globalData, this)
        }, HybridRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, HybridRendererBase.prototype.getThreeDContainerByPos = function (te) {
            for (var ee = 0, re = this.threeDElements.length; ee < re;) {
                if (this.threeDElements[ee].startPos <= te && this.threeDElements[ee].endPos >= te) return this.threeDElements[ee].perspectiveElem;
                ee += 1
            }
            return null
        }, HybridRendererBase.prototype.createThreeDContainer = function (te, ee) {
            var re = createTag("div"),
                ie, ne;
            styleDiv(re);
            var se = createTag("div");
            if (styleDiv(se), ee === "3d") {
                ie = re.style, ie.width = this.globalData.compSize.w + "px", ie.height = this.globalData.compSize.h + "px";
                var ae = "50% 50%";
                ie.webkitTransformOrigin = ae, ie.mozTransformOrigin = ae, ie.transformOrigin = ae, ne = se.style;
                var oe = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                ne.transform = oe, ne.webkitTransform = oe
            }
            re.appendChild(se);
            var le = {
                container: se,
                perspectiveElem: re,
                startPos: te,
                endPos: te,
                type: ee
            };
            return this.threeDElements.push(le), le
        }, HybridRendererBase.prototype.build3dContainers = function () {
            var te, ee = this.layers.length,
                re, ie = "";
            for (te = 0; te < ee; te += 1) this.layers[te].ddd && this.layers[te].ty !== 3 ? (ie !== "3d" && (ie = "3d", re = this.createThreeDContainer(te, "3d")), re.endPos = Math.max(re.endPos, te)) : (ie !== "2d" && (ie = "2d", re = this.createThreeDContainer(te, "2d")), re.endPos = Math.max(re.endPos, te));
            for (ee = this.threeDElements.length, te = ee - 1; te >= 0; te -= 1) this.resizerElem.appendChild(this.threeDElements[te].perspectiveElem)
        }, HybridRendererBase.prototype.addTo3dContainer = function (te, ee) {
            for (var re = 0, ie = this.threeDElements.length; re < ie;) {
                if (ee <= this.threeDElements[re].endPos) {
                    for (var ne = this.threeDElements[re].startPos, se; ne < ee;) this.elements[ne] && this.elements[ne].getBaseElement && (se = this.elements[ne].getBaseElement()), ne += 1;
                    se ? this.threeDElements[re].container.insertBefore(te, se) : this.threeDElements[re].container.appendChild(te);
                    break
                }
                re += 1
            }
        }, HybridRendererBase.prototype.configAnimation = function (te) {
            var ee = createTag("div"),
                re = this.animationItem.wrapper,
                ie = ee.style;
            ie.width = te.w + "px", ie.height = te.h + "px", this.resizerElem = ee, styleDiv(ee), ie.transformStyle = "flat", ie.mozTransformStyle = "flat", ie.webkitTransformStyle = "flat", this.renderConfig.className && ee.setAttribute("class", this.renderConfig.className), re.appendChild(ee), ie.overflow = "hidden";
            var ne = createNS("svg");
            ne.setAttribute("width", "1"), ne.setAttribute("height", "1"), styleDiv(ne), this.resizerElem.appendChild(ne);
            var se = createNS("defs");
            ne.appendChild(se), this.data = te, this.setupGlobalData(te, ne), this.globalData.defs = se, this.layers = te.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize()
        }, HybridRendererBase.prototype.destroy = function () {
            this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
            var te, ee = this.layers ? this.layers.length : 0;
            for (te = 0; te < ee; te += 1) this.elements[te] && this.elements[te].destroy && this.elements[te].destroy();
            this.elements.length = 0, this.destroyed = !0, this.animationItem = null
        }, HybridRendererBase.prototype.updateContainerSize = function () {
            var te = this.animationItem.wrapper.offsetWidth,
                ee = this.animationItem.wrapper.offsetHeight,
                re = te / ee,
                ie = this.globalData.compSize.w / this.globalData.compSize.h,
                ne, se, ae, oe;
            ie > re ? (ne = te / this.globalData.compSize.w, se = te / this.globalData.compSize.w, ae = 0, oe = (ee - this.globalData.compSize.h * (te / this.globalData.compSize.w)) / 2) : (ne = ee / this.globalData.compSize.h, se = ee / this.globalData.compSize.h, ae = (te - this.globalData.compSize.w * (ee / this.globalData.compSize.h)) / 2, oe = 0);
            var le = this.resizerElem.style;
            le.webkitTransform = "matrix3d(" + ne + ",0,0,0,0," + se + ",0,0,0,0,1,0," + ae + "," + oe + ",0,1)", le.transform = le.webkitTransform
        }, HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRendererBase.prototype.hide = function () {
            this.resizerElem.style.display = "none"
        }, HybridRendererBase.prototype.show = function () {
            this.resizerElem.style.display = "block"
        }, HybridRendererBase.prototype.initItems = function () {
            if (this.buildAllItems(), this.camera) this.camera.setup();
            else {
                var te = this.globalData.compSize.w,
                    ee = this.globalData.compSize.h,
                    re, ie = this.threeDElements.length;
                for (re = 0; re < ie; re += 1) {
                    var ne = this.threeDElements[re].perspectiveElem.style;
                    ne.webkitPerspective = Math.sqrt(Math.pow(te, 2) + Math.pow(ee, 2)) + "px", ne.perspective = ne.webkitPerspective
                }
            }
        }, HybridRendererBase.prototype.searchExtraCompositions = function (te) {
            var ee, re = te.length,
                ie = createTag("div");
            for (ee = 0; ee < re; ee += 1)
                if (te[ee].xt) {
                    var ne = this.createComp(te[ee], ie, this.globalData.comp, null);
                    ne.initExpressions(), this.globalData.projectInterface.registerComposition(ne)
                }
        };

        function HCompElement(te, ee, re) {
            this.layers = te.layers, this.supports3d = !te.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(te, ee, re), this.tm = te.tm ? PropertyFactory.getProp(this, te.tm, 0, ee.frameRate, this) : {
                _placeholder: !0
            }
        }
        extendPrototype([HybridRendererBase, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function () {
            this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement
        }, HCompElement.prototype.addTo3dContainer = function (te, ee) {
            for (var re = 0, ie; re < ee;) this.elements[re] && this.elements[re].getBaseElement && (ie = this.elements[re].getBaseElement()), re += 1;
            ie ? this.layerElement.insertBefore(te, ie) : this.layerElement.appendChild(te)
        }, HCompElement.prototype.createComp = function (te) {
            return this.supports3d ? new HCompElement(te, this.globalData, this) : new SVGCompElement(te, this.globalData, this)
        };

        function HybridRenderer(te, ee) {
            this.animationItem = te, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
                className: ee && ee.className || "",
                imagePreserveAspectRatio: ee && ee.imagePreserveAspectRatio || "xMidYMid slice",
                hideOnTransparent: !(ee && ee.hideOnTransparent === !1),
                filterSize: {
                    width: ee && ee.filterSize && ee.filterSize.width || "400%",
                    height: ee && ee.filterSize && ee.filterSize.height || "400%",
                    x: ee && ee.filterSize && ee.filterSize.x || "-100%",
                    y: ee && ee.filterSize && ee.filterSize.y || "-100%"
                },
                runExpressions: !ee || ee.runExpressions === void 0 || ee.runExpressions
            }, this.globalData = {
                _mdf: !1,
                frameNum: -1,
                renderConfig: this.renderConfig
            }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
        }
        extendPrototype([HybridRendererBase], HybridRenderer), HybridRenderer.prototype.createComp = function (te) {
            return this.supports3d ? new HCompElement(te, this.globalData, this) : new SVGCompElement(te, this.globalData, this)
        };
        var CompExpressionInterface = function () {
            return function (te) {
                function ee(re) {
                    for (var ie = 0, ne = te.layers.length; ie < ne;) {
                        if (te.layers[ie].nm === re || te.layers[ie].ind === re) return te.elements[ie].layerInterface;
                        ie += 1
                    }
                    return null
                }
                return Object.defineProperty(ee, "_name", {
                    value: te.data.nm
                }), ee.layer = ee, ee.pixelAspect = 1, ee.height = te.data.h || te.globalData.compSize.h, ee.width = te.data.w || te.globalData.compSize.w, ee.pixelAspect = 1, ee.frameDuration = 1 / te.globalData.frameRate, ee.displayStartTime = 0, ee.numLayers = te.layers.length, ee
            }
        }();

        function _typeof$2(te) {
            "@babel/helpers - typeof";
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$2 = function (re) {
                return typeof re
            } : _typeof$2 = function (re) {
                return re && typeof Symbol == "function" && re.constructor === Symbol && re !== Symbol.prototype ? "symbol" : typeof re
            }, _typeof$2(te)
        }

        function seedRandom(te, ee) {
            var re = this,
                ie = 256,
                ne = 6,
                se = 52,
                ae = "random",
                oe = ee.pow(ie, ne),
                le = ee.pow(2, se),
                he = le * 2,
                fe = ie - 1,
                _e;

            function ue(ge, ye, Ee) {
                var Pe = [];
                ye = ye === !0 ? {
                    entropy: !0
                } : ye || {};
                var xe = Ce(ce(ye.entropy ? [ge, ve(te)] : ge === null ? pe() : ge, 3), Pe),
                    we = new de(Pe),
                    Fe = function () {
                        for (var Re = we.g(ne), Me = oe, $e = 0; Re < le;) Re = (Re + $e) * ie, Me *= ie, $e = we.g(1);
                        for (; Re >= he;) Re /= 2, Me /= 2, $e >>>= 1;
                        return (Re + $e) / Me
                    };
                return Fe.int32 = function () {
                    return we.g(4) | 0
                }, Fe.quick = function () {
                    return we.g(4) / 4294967296
                }, Fe.double = Fe, Ce(ve(we.S), te), (ye.pass || Ee || function (Le, Re, Me, $e) {
                    return $e && ($e.S && me($e, we), Le.state = function () {
                        return me(we, {})
                    }), Me ? (ee[ae] = Le, Re) : Le
                })(Fe, xe, "global" in ye ? ye.global : this == ee, ye.state)
            }
            ee["seed" + ae] = ue;

            function de(ge) {
                var ye, Ee = ge.length,
                    Pe = this,
                    xe = 0,
                    we = Pe.i = Pe.j = 0,
                    Fe = Pe.S = [];
                for (Ee || (ge = [Ee++]); xe < ie;) Fe[xe] = xe++;
                for (xe = 0; xe < ie; xe++) Fe[xe] = Fe[we = fe & we + ge[xe % Ee] + (ye = Fe[xe])], Fe[we] = ye;
                Pe.g = function (Le) {
                    for (var Re, Me = 0, $e = Pe.i, Be = Pe.j, Ie = Pe.S; Le--;) Re = Ie[$e = fe & $e + 1], Me = Me * ie + Ie[fe & (Ie[$e] = Ie[Be = fe & Be + Re]) + (Ie[Be] = Re)];
                    return Pe.i = $e, Pe.j = Be, Me
                }
            }

            function me(ge, ye) {
                return ye.i = ge.i, ye.j = ge.j, ye.S = ge.S.slice(), ye
            }

            function ce(ge, ye) {
                var Ee = [],
                    Pe = _typeof$2(ge),
                    xe;
                if (ye && Pe == "object")
                    for (xe in ge) try {
                        Ee.push(ce(ge[xe], ye - 1))
                    } catch {}
                return Ee.length ? Ee : Pe == "string" ? ge : ge + "\0"
            }

            function Ce(ge, ye) {
                for (var Ee = ge + "", Pe, xe = 0; xe < Ee.length;) ye[fe & xe] = fe & (Pe ^= ye[fe & xe] * 19) + Ee.charCodeAt(xe++);
                return ve(ye)
            }

            function pe() {
                try {
                    var ge = new Uint8Array(ie);
                    return (re.crypto || re.msCrypto).getRandomValues(ge), ve(ge)
                } catch {
                    var ye = re.navigator,
                        Ee = ye && ye.plugins;
                    return [+new Date, re, Ee, re.screen, ve(te)]
                }
            }

            function ve(ge) {
                return String.fromCharCode.apply(0, ge)
            }
            Ce(ee.random(), te)
        }

        function initialize$2(te) {
            seedRandom([], te)
        }
        var propTypes = {
            SHAPE: "shape"
        };

        function _typeof$1(te) {
            "@babel/helpers - typeof";
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$1 = function (re) {
                return typeof re
            } : _typeof$1 = function (re) {
                return re && typeof Symbol == "function" && re.constructor === Symbol && re !== Symbol.prototype ? "symbol" : typeof re
            }, _typeof$1(te)
        }
        var ExpressionManager = function () {
                var ob = {},
                    Math = BMMath,
                    window = null,
                    document = null,
                    XMLHttpRequest = null,
                    fetch = null,
                    frames = null,
                    _lottieGlobal = {};
                initialize$2(BMMath);

                function resetFrame() {
                    _lottieGlobal = {}
                }

                function $bm_isInstanceOfArray(te) {
                    return te.constructor === Array || te.constructor === Float32Array
                }

                function isNumerable(te, ee) {
                    return te === "number" || ee instanceof Number || te === "boolean" || te === "string"
                }

                function $bm_neg(te) {
                    var ee = _typeof$1(te);
                    if (ee === "number" || te instanceof Number || ee === "boolean") return -te;
                    if ($bm_isInstanceOfArray(te)) {
                        var re, ie = te.length,
                            ne = [];
                        for (re = 0; re < ie; re += 1) ne[re] = -te[re];
                        return ne
                    }
                    return te.propType ? te.v : -te
                }
                var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get,
                    easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get,
                    easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;

                function sum(te, ee) {
                    var re = _typeof$1(te),
                        ie = _typeof$1(ee);
                    if (isNumerable(re, te) && isNumerable(ie, ee) || re === "string" || ie === "string") return te + ee;
                    if ($bm_isInstanceOfArray(te) && isNumerable(ie, ee)) return te = te.slice(0), te[0] += ee, te;
                    if (isNumerable(re, te) && $bm_isInstanceOfArray(ee)) return ee = ee.slice(0), ee[0] = te + ee[0], ee;
                    if ($bm_isInstanceOfArray(te) && $bm_isInstanceOfArray(ee)) {
                        for (var ne = 0, se = te.length, ae = ee.length, oe = []; ne < se || ne < ae;)(typeof te[ne] == "number" || te[ne] instanceof Number) && (typeof ee[ne] == "number" || ee[ne] instanceof Number) ? oe[ne] = te[ne] + ee[ne] : oe[ne] = ee[ne] === void 0 ? te[ne] : te[ne] || ee[ne], ne += 1;
                        return oe
                    }
                    return 0
                }
                var add = sum;

                function sub(te, ee) {
                    var re = _typeof$1(te),
                        ie = _typeof$1(ee);
                    if (isNumerable(re, te) && isNumerable(ie, ee)) return re === "string" && (te = parseInt(te, 10)), ie === "string" && (ee = parseInt(ee, 10)), te - ee;
                    if ($bm_isInstanceOfArray(te) && isNumerable(ie, ee)) return te = te.slice(0), te[0] -= ee, te;
                    if (isNumerable(re, te) && $bm_isInstanceOfArray(ee)) return ee = ee.slice(0), ee[0] = te - ee[0], ee;
                    if ($bm_isInstanceOfArray(te) && $bm_isInstanceOfArray(ee)) {
                        for (var ne = 0, se = te.length, ae = ee.length, oe = []; ne < se || ne < ae;)(typeof te[ne] == "number" || te[ne] instanceof Number) && (typeof ee[ne] == "number" || ee[ne] instanceof Number) ? oe[ne] = te[ne] - ee[ne] : oe[ne] = ee[ne] === void 0 ? te[ne] : te[ne] || ee[ne], ne += 1;
                        return oe
                    }
                    return 0
                }

                function mul(te, ee) {
                    var re = _typeof$1(te),
                        ie = _typeof$1(ee),
                        ne;
                    if (isNumerable(re, te) && isNumerable(ie, ee)) return te * ee;
                    var se, ae;
                    if ($bm_isInstanceOfArray(te) && isNumerable(ie, ee)) {
                        for (ae = te.length, ne = createTypedArray("float32", ae), se = 0; se < ae; se += 1) ne[se] = te[se] * ee;
                        return ne
                    }
                    if (isNumerable(re, te) && $bm_isInstanceOfArray(ee)) {
                        for (ae = ee.length, ne = createTypedArray("float32", ae), se = 0; se < ae; se += 1) ne[se] = te * ee[se];
                        return ne
                    }
                    return 0
                }

                function div(te, ee) {
                    var re = _typeof$1(te),
                        ie = _typeof$1(ee),
                        ne;
                    if (isNumerable(re, te) && isNumerable(ie, ee)) return te / ee;
                    var se, ae;
                    if ($bm_isInstanceOfArray(te) && isNumerable(ie, ee)) {
                        for (ae = te.length, ne = createTypedArray("float32", ae), se = 0; se < ae; se += 1) ne[se] = te[se] / ee;
                        return ne
                    }
                    if (isNumerable(re, te) && $bm_isInstanceOfArray(ee)) {
                        for (ae = ee.length, ne = createTypedArray("float32", ae), se = 0; se < ae; se += 1) ne[se] = te / ee[se];
                        return ne
                    }
                    return 0
                }

                function mod(te, ee) {
                    return typeof te == "string" && (te = parseInt(te, 10)), typeof ee == "string" && (ee = parseInt(ee, 10)), te % ee
                }
                var $bm_sum = sum,
                    $bm_sub = sub,
                    $bm_mul = mul,
                    $bm_div = div,
                    $bm_mod = mod;

                function clamp(te, ee, re) {
                    if (ee > re) {
                        var ie = re;
                        re = ee, ee = ie
                    }
                    return Math.min(Math.max(te, ee), re)
                }

                function radiansToDegrees(te) {
                    return te / degToRads
                }
                var radians_to_degrees = radiansToDegrees;

                function degreesToRadians(te) {
                    return te * degToRads
                }
                var degrees_to_radians = radiansToDegrees,
                    helperLengthArray = [0, 0, 0, 0, 0, 0];

                function length(te, ee) {
                    if (typeof te == "number" || te instanceof Number) return ee = ee || 0, Math.abs(te - ee);
                    ee || (ee = helperLengthArray);
                    var re, ie = Math.min(te.length, ee.length),
                        ne = 0;
                    for (re = 0; re < ie; re += 1) ne += Math.pow(ee[re] - te[re], 2);
                    return Math.sqrt(ne)
                }

                function normalize(te) {
                    return div(te, length(te))
                }

                function rgbToHsl(te) {
                    var ee = te[0],
                        re = te[1],
                        ie = te[2],
                        ne = Math.max(ee, re, ie),
                        se = Math.min(ee, re, ie),
                        ae, oe, le = (ne + se) / 2;
                    if (ne === se) ae = 0, oe = 0;
                    else {
                        var he = ne - se;
                        switch (oe = le > .5 ? he / (2 - ne - se) : he / (ne + se), ne) {
                            case ee:
                                ae = (re - ie) / he + (re < ie ? 6 : 0);
                                break;
                            case re:
                                ae = (ie - ee) / he + 2;
                                break;
                            case ie:
                                ae = (ee - re) / he + 4;
                                break
                        }
                        ae /= 6
                    }
                    return [ae, oe, le, te[3]]
                }

                function hue2rgb(te, ee, re) {
                    return re < 0 && (re += 1), re > 1 && (re -= 1), re < 1 / 6 ? te + (ee - te) * 6 * re : re < 1 / 2 ? ee : re < 2 / 3 ? te + (ee - te) * (2 / 3 - re) * 6 : te
                }

                function hslToRgb(te) {
                    var ee = te[0],
                        re = te[1],
                        ie = te[2],
                        ne, se, ae;
                    if (re === 0) ne = ie, ae = ie, se = ie;
                    else {
                        var oe = ie < .5 ? ie * (1 + re) : ie + re - ie * re,
                            le = 2 * ie - oe;
                        ne = hue2rgb(le, oe, ee + 1 / 3), se = hue2rgb(le, oe, ee), ae = hue2rgb(le, oe, ee - 1 / 3)
                    }
                    return [ne, se, ae, te[3]]
                }

                function linear(te, ee, re, ie, ne) {
                    if ((ie === void 0 || ne === void 0) && (ie = ee, ne = re, ee = 0, re = 1), re < ee) {
                        var se = re;
                        re = ee, ee = se
                    }
                    if (te <= ee) return ie;
                    if (te >= re) return ne;
                    var ae = re === ee ? 0 : (te - ee) / (re - ee);
                    if (!ie.length) return ie + (ne - ie) * ae;
                    var oe, le = ie.length,
                        he = createTypedArray("float32", le);
                    for (oe = 0; oe < le; oe += 1) he[oe] = ie[oe] + (ne[oe] - ie[oe]) * ae;
                    return he
                }

                function random(te, ee) {
                    if (ee === void 0 && (te === void 0 ? (te = 0, ee = 1) : (ee = te, te = void 0)), ee.length) {
                        var re, ie = ee.length;
                        te || (te = createTypedArray("float32", ie));
                        var ne = createTypedArray("float32", ie),
                            se = BMMath.random();
                        for (re = 0; re < ie; re += 1) ne[re] = te[re] + se * (ee[re] - te[re]);
                        return ne
                    }
                    te === void 0 && (te = 0);
                    var ae = BMMath.random();
                    return te + ae * (ee - te)
                }

                function createPath(te, ee, re, ie) {
                    var ne, se = te.length,
                        ae = shapePool.newElement();
                    ae.setPathData(!!ie, se);
                    var oe = [0, 0],
                        le, he;
                    for (ne = 0; ne < se; ne += 1) le = ee && ee[ne] ? ee[ne] : oe, he = re && re[ne] ? re[ne] : oe, ae.setTripleAt(te[ne][0], te[ne][1], he[0] + te[ne][0], he[1] + te[ne][1], le[0] + te[ne][0], le[1] + te[ne][1], ne, !0);
                    return ae
                }

                function initiateExpression(elem, data, property) {
                    function noOp(te) {
                        return te
                    }
                    if (!elem.globalData.renderConfig.runExpressions) return noOp;
                    var val = data.x,
                        needsVelocity = /velocity(?![\w\d])/.test(val),
                        _needsRandom = val.indexOf("random") !== -1,
                        elemType = elem.data.ty,
                        transform, $bm_transform, content, effect, thisProperty = property;
                    thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", {
                        get: function () {
                            return thisProperty.v
                        }
                    }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
                    var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
                        outPoint = elem.data.op / elem.comp.globalData.frameRate,
                        width = elem.data.sw ? elem.data.sw : 0,
                        height = elem.data.sh ? elem.data.sh : 0,
                        name = elem.data.nm,
                        loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0],
                        numKeys = property.kf ? data.k.length : 0,
                        active = !this.data || this.data.hd !== !0,
                        wiggle = (function te(ee, re) {
                            var ie, ne, se = this.pv.length ? this.pv.length : 1,
                                ae = createTypedArray("float32", se);
                            ee = 5;
                            var oe = Math.floor(time * ee);
                            for (ie = 0, ne = 0; ie < oe;) {
                                for (ne = 0; ne < se; ne += 1) ae[ne] += -re + re * 2 * BMMath.random();
                                ie += 1
                            }
                            var le = time * ee,
                                he = le - Math.floor(le),
                                fe = createTypedArray("float32", se);
                            if (se > 1) {
                                for (ne = 0; ne < se; ne += 1) fe[ne] = this.pv[ne] + ae[ne] + (-re + re * 2 * BMMath.random()) * he;
                                return fe
                            }
                            return this.pv + ae[0] + (-re + re * 2 * BMMath.random()) * he
                        }).bind(this);
                    thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty));

                    function loopInDuration(te, ee) {
                        return loopIn(te, ee, !0)
                    }

                    function loopOutDuration(te, ee) {
                        return loopOut(te, ee, !0)
                    }
                    this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
                    var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface);

                    function lookAt(te, ee) {
                        var re = [ee[0] - te[0], ee[1] - te[1], ee[2] - te[2]],
                            ie = Math.atan2(re[0], Math.sqrt(re[1] * re[1] + re[2] * re[2])) / degToRads,
                            ne = -Math.atan2(re[1], re[2]) / degToRads;
                        return [ne, ie, 0]
                    }

                    function easeOut(te, ee, re, ie, ne) {
                        return applyEase(easeOutBez, te, ee, re, ie, ne)
                    }

                    function easeIn(te, ee, re, ie, ne) {
                        return applyEase(easeInBez, te, ee, re, ie, ne)
                    }

                    function ease(te, ee, re, ie, ne) {
                        return applyEase(easeInOutBez, te, ee, re, ie, ne)
                    }

                    function applyEase(te, ee, re, ie, ne, se) {
                        ne === void 0 ? (ne = re, se = ie) : ee = (ee - re) / (ie - re), ee > 1 ? ee = 1 : ee < 0 && (ee = 0);
                        var ae = te(ee);
                        if ($bm_isInstanceOfArray(ne)) {
                            var oe, le = ne.length,
                                he = createTypedArray("float32", le);
                            for (oe = 0; oe < le; oe += 1) he[oe] = (se[oe] - ne[oe]) * ae + ne[oe];
                            return he
                        }
                        return (se - ne) * ae + ne
                    }

                    function nearestKey(te) {
                        var ee, re = data.k.length,
                            ie, ne;
                        if (!data.k.length || typeof data.k[0] == "number") ie = 0, ne = 0;
                        else if (ie = -1, te *= elem.comp.globalData.frameRate, te < data.k[0].t) ie = 1, ne = data.k[0].t;
                        else {
                            for (ee = 0; ee < re - 1; ee += 1)
                                if (te === data.k[ee].t) {
                                    ie = ee + 1, ne = data.k[ee].t;
                                    break
                                } else if (te > data.k[ee].t && te < data.k[ee + 1].t) {
                                te - data.k[ee].t > data.k[ee + 1].t - te ? (ie = ee + 2, ne = data.k[ee + 1].t) : (ie = ee + 1, ne = data.k[ee].t);
                                break
                            }
                            ie === -1 && (ie = ee + 1, ne = data.k[ee].t)
                        }
                        var se = {};
                        return se.index = ie, se.time = ne / elem.comp.globalData.frameRate, se
                    }

                    function key(te) {
                        var ee, re, ie;
                        if (!data.k.length || typeof data.k[0] == "number") throw new Error("The property has no keyframe at index " + te);
                        te -= 1, ee = {
                            time: data.k[te].t / elem.comp.globalData.frameRate,
                            value: []
                        };
                        var ne = Object.prototype.hasOwnProperty.call(data.k[te], "s") ? data.k[te].s : data.k[te - 1].e;
                        for (ie = ne.length, re = 0; re < ie; re += 1) ee[re] = ne[re], ee.value[re] = ne[re];
                        return ee
                    }

                    function framesToTime(te, ee) {
                        return ee || (ee = elem.comp.globalData.frameRate), te / ee
                    }

                    function timeToFrames(te, ee) {
                        return !te && te !== 0 && (te = time), ee || (ee = elem.comp.globalData.frameRate), te * ee
                    }

                    function seedRandom(te) {
                        BMMath.seedrandom(randSeed + te)
                    }

                    function sourceRectAtTime() {
                        return elem.sourceRectAtTime()
                    }

                    function substring(te, ee) {
                        return typeof value == "string" ? ee === void 0 ? value.substring(te) : value.substring(te, ee) : ""
                    }

                    function substr(te, ee) {
                        return typeof value == "string" ? ee === void 0 ? value.substr(te) : value.substr(te, ee) : ""
                    }

                    function posterizeTime(te) {
                        time = te === 0 ? 0 : Math.floor(time * te) / te, value = valueAtTime(time)
                    }
                    var time, velocity, value, text, textIndex, textTotal, selectorValue, index = elem.data.ind,
                        hasParent = !!(elem.hierarchy && elem.hierarchy.length),
                        parent, randSeed = Math.floor(Math.random() * 1e6),
                        globalData = elem.globalData;

                    function executeExpression(te) {
                        return value = te, this.frameExpressionId === elem.globalData.frameId && this.propType !== "textSelector" ? value : (this.propType === "textSelector" && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), $bm_transform = transform, transform && (anchorPoint = transform.anchorPoint)), elemType === 4 && !content && (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), hasParent = !!(elem.hierarchy && elem.hierarchy.length), hasParent && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, _needsRandom && seedRandom(randSeed + time), needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt, scoped_bm_rt)
                    }
                    return executeExpression.__preventDeadCodeRemoval = [$bm_transform, anchorPoint, time, velocity, inPoint, outPoint, width, height, name, loop_in, loop_out, smooth, toComp, fromCompToSurface, toWorld, fromWorld, mask, position, rotation, scale, thisComp, numKeys, active, wiggle, loopInDuration, loopOutDuration, comp, lookAt, easeOut, easeIn, ease, nearestKey, key, text, textIndex, textTotal, selectorValue, framesToTime, timeToFrames, sourceRectAtTime, substring, substr, posterizeTime, index, globalData], executeExpression
                }
                return ob.initiateExpression = initiateExpression, ob.__preventDeadCodeRemoval = [window, document, XMLHttpRequest, fetch, frames, $bm_neg, add, $bm_sum, $bm_sub, $bm_mul, $bm_div, $bm_mod, clamp, radians_to_degrees, degreesToRadians, degrees_to_radians, normalize, rgbToHsl, hslToRgb, linear, random, createPath, _lottieGlobal], ob.resetFrame = resetFrame, ob
            }(),
            Expressions = function () {
                var te = {};
                te.initExpressions = ee, te.resetFrame = ExpressionManager.resetFrame;

                function ee(re) {
                    var ie = 0,
                        ne = [];

                    function se() {
                        ie += 1
                    }

                    function ae() {
                        ie -= 1, ie === 0 && le()
                    }

                    function oe(he) {
                        ne.indexOf(he) === -1 && ne.push(he)
                    }

                    function le() {
                        var he, fe = ne.length;
                        for (he = 0; he < fe; he += 1) ne[he].release();
                        ne.length = 0
                    }
                    re.renderer.compInterface = CompExpressionInterface(re.renderer), re.renderer.globalData.projectInterface.registerComposition(re.renderer), re.renderer.globalData.pushExpression = se, re.renderer.globalData.popExpression = ae, re.renderer.globalData.registerExpressionProperty = oe
                }
                return te
            }(),
            MaskManagerInterface = function () {
                function te(re, ie) {
                    this._mask = re, this._data = ie
                }
                Object.defineProperty(te.prototype, "maskPath", {
                    get: function () {
                        return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop
                    }
                }), Object.defineProperty(te.prototype, "maskOpacity", {
                    get: function () {
                        return this._mask.op.k && this._mask.op.getValue(), this._mask.op.v * 100
                    }
                });
                var ee = function (ie) {
                    var ne = createSizedArray(ie.viewData.length),
                        se, ae = ie.viewData.length;
                    for (se = 0; se < ae; se += 1) ne[se] = new te(ie.viewData[se], ie.masksProperties[se]);
                    var oe = function (he) {
                        for (se = 0; se < ae;) {
                            if (ie.masksProperties[se].nm === he) return ne[se];
                            se += 1
                        }
                        return null
                    };
                    return oe
                };
                return ee
            }(),
            ExpressionPropertyInterface = function () {
                var te = {
                        pv: 0,
                        v: 0,
                        mult: 1
                    },
                    ee = {
                        pv: [0, 0, 0],
                        v: [0, 0, 0],
                        mult: 1
                    };

                function re(ae, oe, le) {
                    Object.defineProperty(ae, "velocity", {
                        get: function () {
                            return oe.getVelocityAtTime(oe.comp.currentFrame)
                        }
                    }), ae.numKeys = oe.keyframes ? oe.keyframes.length : 0, ae.key = function (he) {
                        if (!ae.numKeys) return 0;
                        var fe = "";
                        "s" in oe.keyframes[he - 1] ? fe = oe.keyframes[he - 1].s : "e" in oe.keyframes[he - 2] ? fe = oe.keyframes[he - 2].e : fe = oe.keyframes[he - 2].s;
                        var _e = le === "unidimensional" ? new Number(fe) : Object.assign({}, fe);
                        return _e.time = oe.keyframes[he - 1].t / oe.elem.comp.globalData.frameRate, _e.value = le === "unidimensional" ? fe[0] : fe, _e
                    }, ae.valueAtTime = oe.getValueAtTime, ae.speedAtTime = oe.getSpeedAtTime, ae.velocityAtTime = oe.getVelocityAtTime, ae.propertyGroup = oe.propertyGroup
                }

                function ie(ae) {
                    (!ae || !("pv" in ae)) && (ae = te);
                    var oe = 1 / ae.mult,
                        le = ae.pv * oe,
                        he = new Number(le);
                    return he.value = le, re(he, ae, "unidimensional"),
                        function () {
                            return ae.k && ae.getValue(), le = ae.v * oe, he.value !== le && (he = new Number(le), he.value = le, re(he, ae, "unidimensional")), he
                        }
                }

                function ne(ae) {
                    (!ae || !("pv" in ae)) && (ae = ee);
                    var oe = 1 / ae.mult,
                        le = ae.data && ae.data.l || ae.pv.length,
                        he = createTypedArray("float32", le),
                        fe = createTypedArray("float32", le);
                    return he.value = fe, re(he, ae, "multidimensional"),
                        function () {
                            ae.k && ae.getValue();
                            for (var _e = 0; _e < le; _e += 1) fe[_e] = ae.v[_e] * oe, he[_e] = fe[_e];
                            return he
                        }
                }

                function se() {
                    return te
                }
                return function (ae) {
                    return ae ? ae.propType === "unidimensional" ? ie(ae) : ne(ae) : se
                }
            }(),
            TransformExpressionInterface = function () {
                return function (te) {
                    function ee(ae) {
                        switch (ae) {
                            case "scale":
                            case "Scale":
                            case "ADBE Scale":
                            case 6:
                                return ee.scale;
                            case "rotation":
                            case "Rotation":
                            case "ADBE Rotation":
                            case "ADBE Rotate Z":
                            case 10:
                                return ee.rotation;
                            case "ADBE Rotate X":
                                return ee.xRotation;
                            case "ADBE Rotate Y":
                                return ee.yRotation;
                            case "position":
                            case "Position":
                            case "ADBE Position":
                            case 2:
                                return ee.position;
                            case "ADBE Position_0":
                                return ee.xPosition;
                            case "ADBE Position_1":
                                return ee.yPosition;
                            case "ADBE Position_2":
                                return ee.zPosition;
                            case "anchorPoint":
                            case "AnchorPoint":
                            case "Anchor Point":
                            case "ADBE AnchorPoint":
                            case 1:
                                return ee.anchorPoint;
                            case "opacity":
                            case "Opacity":
                            case 11:
                                return ee.opacity;
                            default:
                                return null
                        }
                    }
                    Object.defineProperty(ee, "rotation", {
                        get: ExpressionPropertyInterface(te.r || te.rz)
                    }), Object.defineProperty(ee, "zRotation", {
                        get: ExpressionPropertyInterface(te.rz || te.r)
                    }), Object.defineProperty(ee, "xRotation", {
                        get: ExpressionPropertyInterface(te.rx)
                    }), Object.defineProperty(ee, "yRotation", {
                        get: ExpressionPropertyInterface(te.ry)
                    }), Object.defineProperty(ee, "scale", {
                        get: ExpressionPropertyInterface(te.s)
                    });
                    var re, ie, ne, se;
                    return te.p ? se = ExpressionPropertyInterface(te.p) : (re = ExpressionPropertyInterface(te.px), ie = ExpressionPropertyInterface(te.py), te.pz && (ne = ExpressionPropertyInterface(te.pz))), Object.defineProperty(ee, "position", {
                        get: function () {
                            return te.p ? se() : [re(), ie(), ne ? ne() : 0]
                        }
                    }), Object.defineProperty(ee, "xPosition", {
                        get: ExpressionPropertyInterface(te.px)
                    }), Object.defineProperty(ee, "yPosition", {
                        get: ExpressionPropertyInterface(te.py)
                    }), Object.defineProperty(ee, "zPosition", {
                        get: ExpressionPropertyInterface(te.pz)
                    }), Object.defineProperty(ee, "anchorPoint", {
                        get: ExpressionPropertyInterface(te.a)
                    }), Object.defineProperty(ee, "opacity", {
                        get: ExpressionPropertyInterface(te.o)
                    }), Object.defineProperty(ee, "skew", {
                        get: ExpressionPropertyInterface(te.sk)
                    }), Object.defineProperty(ee, "skewAxis", {
                        get: ExpressionPropertyInterface(te.sa)
                    }), Object.defineProperty(ee, "orientation", {
                        get: ExpressionPropertyInterface(te.or)
                    }), ee
                }
            }(),
            LayerExpressionInterface = function () {
                function te(he) {
                    var fe = new Matrix;
                    if (he !== void 0) {
                        var _e = this._elem.finalTransform.mProp.getValueAtTime(he);
                        _e.clone(fe)
                    } else {
                        var ue = this._elem.finalTransform.mProp;
                        ue.applyToMatrix(fe)
                    }
                    return fe
                }

                function ee(he, fe) {
                    var _e = this.getMatrix(fe);
                    return _e.props[12] = 0, _e.props[13] = 0, _e.props[14] = 0, this.applyPoint(_e, he)
                }

                function re(he, fe) {
                    var _e = this.getMatrix(fe);
                    return this.applyPoint(_e, he)
                }

                function ie(he, fe) {
                    var _e = this.getMatrix(fe);
                    return _e.props[12] = 0, _e.props[13] = 0, _e.props[14] = 0, this.invertPoint(_e, he)
                }

                function ne(he, fe) {
                    var _e = this.getMatrix(fe);
                    return this.invertPoint(_e, he)
                }

                function se(he, fe) {
                    if (this._elem.hierarchy && this._elem.hierarchy.length) {
                        var _e, ue = this._elem.hierarchy.length;
                        for (_e = 0; _e < ue; _e += 1) this._elem.hierarchy[_e].finalTransform.mProp.applyToMatrix(he)
                    }
                    return he.applyToPointArray(fe[0], fe[1], fe[2] || 0)
                }

                function ae(he, fe) {
                    if (this._elem.hierarchy && this._elem.hierarchy.length) {
                        var _e, ue = this._elem.hierarchy.length;
                        for (_e = 0; _e < ue; _e += 1) this._elem.hierarchy[_e].finalTransform.mProp.applyToMatrix(he)
                    }
                    return he.inversePoint(fe)
                }

                function oe(he) {
                    var fe = new Matrix;
                    if (fe.reset(), this._elem.finalTransform.mProp.applyToMatrix(fe), this._elem.hierarchy && this._elem.hierarchy.length) {
                        var _e, ue = this._elem.hierarchy.length;
                        for (_e = 0; _e < ue; _e += 1) this._elem.hierarchy[_e].finalTransform.mProp.applyToMatrix(fe);
                        return fe.inversePoint(he)
                    }
                    return fe.inversePoint(he)
                }

                function le() {
                    return [1, 1, 1, 1]
                }
                return function (he) {
                    var fe;

                    function _e(ce) {
                        de.mask = new MaskManagerInterface(ce, he)
                    }

                    function ue(ce) {
                        de.effect = ce
                    }

                    function de(ce) {
                        switch (ce) {
                            case "ADBE Root Vectors Group":
                            case "Contents":
                            case 2:
                                return de.shapeInterface;
                            case 1:
                            case 6:
                            case "Transform":
                            case "transform":
                            case "ADBE Transform Group":
                                return fe;
                            case 4:
                            case "ADBE Effect Parade":
                            case "effects":
                            case "Effects":
                                return de.effect;
                            case "ADBE Text Properties":
                                return de.textInterface;
                            default:
                                return null
                        }
                    }
                    de.getMatrix = te, de.invertPoint = ae, de.applyPoint = se, de.toWorld = re, de.toWorldVec = ee, de.fromWorld = ne, de.fromWorldVec = ie, de.toComp = re, de.fromComp = oe, de.sampleImage = le, de.sourceRectAtTime = he.sourceRectAtTime.bind(he), de._elem = he, fe = TransformExpressionInterface(he.finalTransform.mProp);
                    var me = getDescriptor(fe, "anchorPoint");
                    return Object.defineProperties(de, {
                        hasParent: {
                            get: function () {
                                return he.hierarchy.length
                            }
                        },
                        parent: {
                            get: function () {
                                return he.hierarchy[0].layerInterface
                            }
                        },
                        rotation: getDescriptor(fe, "rotation"),
                        scale: getDescriptor(fe, "scale"),
                        position: getDescriptor(fe, "position"),
                        opacity: getDescriptor(fe, "opacity"),
                        anchorPoint: me,
                        anchor_point: me,
                        transform: {
                            get: function () {
                                return fe
                            }
                        },
                        active: {
                            get: function () {
                                return he.isInRange
                            }
                        }
                    }), de.startTime = he.data.st, de.index = he.data.ind, de.source = he.data.refId, de.height = he.data.ty === 0 ? he.data.h : 100, de.width = he.data.ty === 0 ? he.data.w : 100, de.inPoint = he.data.ip / he.comp.globalData.frameRate, de.outPoint = he.data.op / he.comp.globalData.frameRate, de._name = he.data.nm, de.registerMaskInterface = _e, de.registerEffectsInterface = ue, de
                }
            }(),
            propertyGroupFactory = function () {
                return function (te, ee) {
                    return function (re) {
                        return re = re === void 0 ? 1 : re, re <= 0 ? te : ee(re - 1)
                    }
                }
            }(),
            PropertyInterface = function () {
                return function (te, ee) {
                    var re = {
                        _name: te
                    };

                    function ie(ne) {
                        return ne = ne === void 0 ? 1 : ne, ne <= 0 ? re : ee(ne - 1)
                    }
                    return ie
                }
            }(),
            EffectsExpressionInterface = function () {
                var te = {
                    createEffectsInterface: ee
                };

                function ee(ne, se) {
                    if (ne.effectsManager) {
                        var ae = [],
                            oe = ne.data.ef,
                            le, he = ne.effectsManager.effectElements.length;
                        for (le = 0; le < he; le += 1) ae.push(re(oe[le], ne.effectsManager.effectElements[le], se, ne));
                        var fe = ne.data.ef || [],
                            _e = function (de) {
                                for (le = 0, he = fe.length; le < he;) {
                                    if (de === fe[le].nm || de === fe[le].mn || de === fe[le].ix) return ae[le];
                                    le += 1
                                }
                                return null
                            };
                        return Object.defineProperty(_e, "numProperties", {
                            get: function () {
                                return fe.length
                            }
                        }), _e
                    }
                    return null
                }

                function re(ne, se, ae, oe) {
                    function le(de) {
                        for (var me = ne.ef, ce = 0, Ce = me.length; ce < Ce;) {
                            if (de === me[ce].nm || de === me[ce].mn || de === me[ce].ix) return me[ce].ty === 5 ? fe[ce] : fe[ce]();
                            ce += 1
                        }
                        throw new Error
                    }
                    var he = propertyGroupFactory(le, ae),
                        fe = [],
                        _e, ue = ne.ef.length;
                    for (_e = 0; _e < ue; _e += 1) ne.ef[_e].ty === 5 ? fe.push(re(ne.ef[_e], se.effectElements[_e], se.effectElements[_e].propertyGroup, oe)) : fe.push(ie(se.effectElements[_e], ne.ef[_e].ty, oe, he));
                    return ne.mn === "ADBE Color Control" && Object.defineProperty(le, "color", {
                        get: function () {
                            return fe[0]()
                        }
                    }), Object.defineProperties(le, {
                        numProperties: {
                            get: function () {
                                return ne.np
                            }
                        },
                        _name: {
                            value: ne.nm
                        },
                        propertyGroup: {
                            value: he
                        }
                    }), le.enabled = ne.en !== 0, le.active = le.enabled, le
                }

                function ie(ne, se, ae, oe) {
                    var le = ExpressionPropertyInterface(ne.p);

                    function he() {
                        return se === 10 ? ae.comp.compInterface(ne.p.v) : le()
                    }
                    return ne.p.setGroupProperty && ne.p.setGroupProperty(PropertyInterface("", oe)), he
                }
                return te
            }(),
            ShapePathInterface = function () {
                return function (ee, re, ie) {
                    var ne = re.sh;

                    function se(oe) {
                        return oe === "Shape" || oe === "shape" || oe === "Path" || oe === "path" || oe === "ADBE Vector Shape" || oe === 2 ? se.path : null
                    }
                    var ae = propertyGroupFactory(se, ie);
                    return ne.setGroupProperty(PropertyInterface("Path", ae)), Object.defineProperties(se, {
                        path: {
                            get: function () {
                                return ne.k && ne.getValue(), ne
                            }
                        },
                        shape: {
                            get: function () {
                                return ne.k && ne.getValue(), ne
                            }
                        },
                        _name: {
                            value: ee.nm
                        },
                        ix: {
                            value: ee.ix
                        },
                        propertyIndex: {
                            value: ee.ix
                        },
                        mn: {
                            value: ee.mn
                        },
                        propertyGroup: {
                            value: ie
                        }
                    }), se
                }
            }(),
            ShapeExpressionInterface = function () {
                function te(me, ce, Ce) {
                    var pe = [],
                        ve, ge = me ? me.length : 0;
                    for (ve = 0; ve < ge; ve += 1) me[ve].ty === "gr" ? pe.push(re(me[ve], ce[ve], Ce)) : me[ve].ty === "fl" ? pe.push(ie(me[ve], ce[ve], Ce)) : me[ve].ty === "st" ? pe.push(ae(me[ve], ce[ve], Ce)) : me[ve].ty === "tm" ? pe.push(oe(me[ve], ce[ve], Ce)) : me[ve].ty === "tr" || (me[ve].ty === "el" ? pe.push(he(me[ve], ce[ve], Ce)) : me[ve].ty === "sr" ? pe.push(fe(me[ve], ce[ve], Ce)) : me[ve].ty === "sh" ? pe.push(ShapePathInterface(me[ve], ce[ve], Ce)) : me[ve].ty === "rc" ? pe.push(_e(me[ve], ce[ve], Ce)) : me[ve].ty === "rd" ? pe.push(ue(me[ve], ce[ve], Ce)) : me[ve].ty === "rp" ? pe.push(de(me[ve], ce[ve], Ce)) : me[ve].ty === "gf" ? pe.push(ne(me[ve], ce[ve], Ce)) : pe.push(se(me[ve], ce[ve])));
                    return pe
                }

                function ee(me, ce, Ce) {
                    var pe, ve = function (Ee) {
                        for (var Pe = 0, xe = pe.length; Pe < xe;) {
                            if (pe[Pe]._name === Ee || pe[Pe].mn === Ee || pe[Pe].propertyIndex === Ee || pe[Pe].ix === Ee || pe[Pe].ind === Ee) return pe[Pe];
                            Pe += 1
                        }
                        return typeof Ee == "number" ? pe[Ee - 1] : null
                    };
                    ve.propertyGroup = propertyGroupFactory(ve, Ce), pe = te(me.it, ce.it, ve.propertyGroup), ve.numProperties = pe.length;
                    var ge = le(me.it[me.it.length - 1], ce.it[ce.it.length - 1], ve.propertyGroup);
                    return ve.transform = ge, ve.propertyIndex = me.cix, ve._name = me.nm, ve
                }

                function re(me, ce, Ce) {
                    var pe = function (Ee) {
                        switch (Ee) {
                            case "ADBE Vectors Group":
                            case "Contents":
                            case 2:
                                return pe.content;
                            default:
                                return pe.transform
                        }
                    };
                    pe.propertyGroup = propertyGroupFactory(pe, Ce);
                    var ve = ee(me, ce, pe.propertyGroup),
                        ge = le(me.it[me.it.length - 1], ce.it[ce.it.length - 1], pe.propertyGroup);
                    return pe.content = ve, pe.transform = ge, Object.defineProperty(pe, "_name", {
                        get: function () {
                            return me.nm
                        }
                    }), pe.numProperties = me.np, pe.propertyIndex = me.ix, pe.nm = me.nm, pe.mn = me.mn, pe
                }

                function ie(me, ce, Ce) {
                    function pe(ve) {
                        return ve === "Color" || ve === "color" ? pe.color : ve === "Opacity" || ve === "opacity" ? pe.opacity : null
                    }
                    return Object.defineProperties(pe, {
                        color: {
                            get: ExpressionPropertyInterface(ce.c)
                        },
                        opacity: {
                            get: ExpressionPropertyInterface(ce.o)
                        },
                        _name: {
                            value: me.nm
                        },
                        mn: {
                            value: me.mn
                        }
                    }), ce.c.setGroupProperty(PropertyInterface("Color", Ce)), ce.o.setGroupProperty(PropertyInterface("Opacity", Ce)), pe
                }

                function ne(me, ce, Ce) {
                    function pe(ve) {
                        return ve === "Start Point" || ve === "start point" ? pe.startPoint : ve === "End Point" || ve === "end point" ? pe.endPoint : ve === "Opacity" || ve === "opacity" ? pe.opacity : null
                    }
                    return Object.defineProperties(pe, {
                        startPoint: {
                            get: ExpressionPropertyInterface(ce.s)
                        },
                        endPoint: {
                            get: ExpressionPropertyInterface(ce.e)
                        },
                        opacity: {
                            get: ExpressionPropertyInterface(ce.o)
                        },
                        type: {
                            get: function () {
                                return "a"
                            }
                        },
                        _name: {
                            value: me.nm
                        },
                        mn: {
                            value: me.mn
                        }
                    }), ce.s.setGroupProperty(PropertyInterface("Start Point", Ce)), ce.e.setGroupProperty(PropertyInterface("End Point", Ce)), ce.o.setGroupProperty(PropertyInterface("Opacity", Ce)), pe
                }

                function se() {
                    function me() {
                        return null
                    }
                    return me
                }

                function ae(me, ce, Ce) {
                    var pe = propertyGroupFactory(xe, Ce),
                        ve = propertyGroupFactory(Pe, pe);

                    function ge(we) {
                        Object.defineProperty(Pe, me.d[we].nm, {
                            get: ExpressionPropertyInterface(ce.d.dataProps[we].p)
                        })
                    }
                    var ye, Ee = me.d ? me.d.length : 0,
                        Pe = {};
                    for (ye = 0; ye < Ee; ye += 1) ge(ye), ce.d.dataProps[ye].p.setGroupProperty(ve);

                    function xe(we) {
                        return we === "Color" || we === "color" ? xe.color : we === "Opacity" || we === "opacity" ? xe.opacity : we === "Stroke Width" || we === "stroke width" ? xe.strokeWidth : null
                    }
                    return Object.defineProperties(xe, {
                        color: {
                            get: ExpressionPropertyInterface(ce.c)
                        },
                        opacity: {
                            get: ExpressionPropertyInterface(ce.o)
                        },
                        strokeWidth: {
                            get: ExpressionPropertyInterface(ce.w)
                        },
                        dash: {
                            get: function () {
                                return Pe
                            }
                        },
                        _name: {
                            value: me.nm
                        },
                        mn: {
                            value: me.mn
                        }
                    }), ce.c.setGroupProperty(PropertyInterface("Color", pe)), ce.o.setGroupProperty(PropertyInterface("Opacity", pe)), ce.w.setGroupProperty(PropertyInterface("Stroke Width", pe)), xe
                }

                function oe(me, ce, Ce) {
                    function pe(ge) {
                        return ge === me.e.ix || ge === "End" || ge === "end" ? pe.end : ge === me.s.ix ? pe.start : ge === me.o.ix ? pe.offset : null
                    }
                    var ve = propertyGroupFactory(pe, Ce);
                    return pe.propertyIndex = me.ix, ce.s.setGroupProperty(PropertyInterface("Start", ve)), ce.e.setGroupProperty(PropertyInterface("End", ve)), ce.o.setGroupProperty(PropertyInterface("Offset", ve)), pe.propertyIndex = me.ix, pe.propertyGroup = Ce, Object.defineProperties(pe, {
                        start: {
                            get: ExpressionPropertyInterface(ce.s)
                        },
                        end: {
                            get: ExpressionPropertyInterface(ce.e)
                        },
                        offset: {
                            get: ExpressionPropertyInterface(ce.o)
                        },
                        _name: {
                            value: me.nm
                        }
                    }), pe.mn = me.mn, pe
                }

                function le(me, ce, Ce) {
                    function pe(ge) {
                        return me.a.ix === ge || ge === "Anchor Point" ? pe.anchorPoint : me.o.ix === ge || ge === "Opacity" ? pe.opacity : me.p.ix === ge || ge === "Position" ? pe.position : me.r.ix === ge || ge === "Rotation" || ge === "ADBE Vector Rotation" ? pe.rotation : me.s.ix === ge || ge === "Scale" ? pe.scale : me.sk && me.sk.ix === ge || ge === "Skew" ? pe.skew : me.sa && me.sa.ix === ge || ge === "Skew Axis" ? pe.skewAxis : null
                    }
                    var ve = propertyGroupFactory(pe, Ce);
                    return ce.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", ve)), ce.transform.mProps.p.setGroupProperty(PropertyInterface("Position", ve)), ce.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", ve)), ce.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", ve)), ce.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", ve)), ce.transform.mProps.sk && (ce.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", ve)), ce.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", ve))), ce.transform.op.setGroupProperty(PropertyInterface("Opacity", ve)), Object.defineProperties(pe, {
                        opacity: {
                            get: ExpressionPropertyInterface(ce.transform.mProps.o)
                        },
                        position: {
                            get: ExpressionPropertyInterface(ce.transform.mProps.p)
                        },
                        anchorPoint: {
                            get: ExpressionPropertyInterface(ce.transform.mProps.a)
                        },
                        scale: {
                            get: ExpressionPropertyInterface(ce.transform.mProps.s)
                        },
                        rotation: {
                            get: ExpressionPropertyInterface(ce.transform.mProps.r)
                        },
                        skew: {
                            get: ExpressionPropertyInterface(ce.transform.mProps.sk)
                        },
                        skewAxis: {
                            get: ExpressionPropertyInterface(ce.transform.mProps.sa)
                        },
                        _name: {
                            value: me.nm
                        }
                    }), pe.ty = "tr", pe.mn = me.mn, pe.propertyGroup = Ce, pe
                }

                function he(me, ce, Ce) {
                    function pe(ye) {
                        return me.p.ix === ye ? pe.position : me.s.ix === ye ? pe.size : null
                    }
                    var ve = propertyGroupFactory(pe, Ce);
                    pe.propertyIndex = me.ix;
                    var ge = ce.sh.ty === "tm" ? ce.sh.prop : ce.sh;
                    return ge.s.setGroupProperty(PropertyInterface("Size", ve)), ge.p.setGroupProperty(PropertyInterface("Position", ve)), Object.defineProperties(pe, {
                        size: {
                            get: ExpressionPropertyInterface(ge.s)
                        },
                        position: {
                            get: ExpressionPropertyInterface(ge.p)
                        },
                        _name: {
                            value: me.nm
                        }
                    }), pe.mn = me.mn, pe
                }

                function fe(me, ce, Ce) {
                    function pe(ye) {
                        return me.p.ix === ye ? pe.position : me.r.ix === ye ? pe.rotation : me.pt.ix === ye ? pe.points : me.or.ix === ye || ye === "ADBE Vector Star Outer Radius" ? pe.outerRadius : me.os.ix === ye ? pe.outerRoundness : me.ir && (me.ir.ix === ye || ye === "ADBE Vector Star Inner Radius") ? pe.innerRadius : me.is && me.is.ix === ye ? pe.innerRoundness : null
                    }
                    var ve = propertyGroupFactory(pe, Ce),
                        ge = ce.sh.ty === "tm" ? ce.sh.prop : ce.sh;
                    return pe.propertyIndex = me.ix, ge.or.setGroupProperty(PropertyInterface("Outer Radius", ve)), ge.os.setGroupProperty(PropertyInterface("Outer Roundness", ve)), ge.pt.setGroupProperty(PropertyInterface("Points", ve)), ge.p.setGroupProperty(PropertyInterface("Position", ve)), ge.r.setGroupProperty(PropertyInterface("Rotation", ve)), me.ir && (ge.ir.setGroupProperty(PropertyInterface("Inner Radius", ve)), ge.is.setGroupProperty(PropertyInterface("Inner Roundness", ve))), Object.defineProperties(pe, {
                        position: {
                            get: ExpressionPropertyInterface(ge.p)
                        },
                        rotation: {
                            get: ExpressionPropertyInterface(ge.r)
                        },
                        points: {
                            get: ExpressionPropertyInterface(ge.pt)
                        },
                        outerRadius: {
                            get: ExpressionPropertyInterface(ge.or)
                        },
                        outerRoundness: {
                            get: ExpressionPropertyInterface(ge.os)
                        },
                        innerRadius: {
                            get: ExpressionPropertyInterface(ge.ir)
                        },
                        innerRoundness: {
                            get: ExpressionPropertyInterface(ge.is)
                        },
                        _name: {
                            value: me.nm
                        }
                    }), pe.mn = me.mn, pe
                }

                function _e(me, ce, Ce) {
                    function pe(ye) {
                        return me.p.ix === ye ? pe.position : me.r.ix === ye ? pe.roundness : me.s.ix === ye || ye === "Size" || ye === "ADBE Vector Rect Size" ? pe.size : null
                    }
                    var ve = propertyGroupFactory(pe, Ce),
                        ge = ce.sh.ty === "tm" ? ce.sh.prop : ce.sh;
                    return pe.propertyIndex = me.ix, ge.p.setGroupProperty(PropertyInterface("Position", ve)), ge.s.setGroupProperty(PropertyInterface("Size", ve)), ge.r.setGroupProperty(PropertyInterface("Rotation", ve)), Object.defineProperties(pe, {
                        position: {
                            get: ExpressionPropertyInterface(ge.p)
                        },
                        roundness: {
                            get: ExpressionPropertyInterface(ge.r)
                        },
                        size: {
                            get: ExpressionPropertyInterface(ge.s)
                        },
                        _name: {
                            value: me.nm
                        }
                    }), pe.mn = me.mn, pe
                }

                function ue(me, ce, Ce) {
                    function pe(ye) {
                        return me.r.ix === ye || ye === "Round Corners 1" ? pe.radius : null
                    }
                    var ve = propertyGroupFactory(pe, Ce),
                        ge = ce;
                    return pe.propertyIndex = me.ix, ge.rd.setGroupProperty(PropertyInterface("Radius", ve)), Object.defineProperties(pe, {
                        radius: {
                            get: ExpressionPropertyInterface(ge.rd)
                        },
                        _name: {
                            value: me.nm
                        }
                    }), pe.mn = me.mn, pe
                }

                function de(me, ce, Ce) {
                    function pe(ye) {
                        return me.c.ix === ye || ye === "Copies" ? pe.copies : me.o.ix === ye || ye === "Offset" ? pe.offset : null
                    }
                    var ve = propertyGroupFactory(pe, Ce),
                        ge = ce;
                    return pe.propertyIndex = me.ix, ge.c.setGroupProperty(PropertyInterface("Copies", ve)), ge.o.setGroupProperty(PropertyInterface("Offset", ve)), Object.defineProperties(pe, {
                        copies: {
                            get: ExpressionPropertyInterface(ge.c)
                        },
                        offset: {
                            get: ExpressionPropertyInterface(ge.o)
                        },
                        _name: {
                            value: me.nm
                        }
                    }), pe.mn = me.mn, pe
                }
                return function (me, ce, Ce) {
                    var pe;

                    function ve(ye) {
                        if (typeof ye == "number") return ye = ye === void 0 ? 1 : ye, ye === 0 ? Ce : pe[ye - 1];
                        for (var Ee = 0, Pe = pe.length; Ee < Pe;) {
                            if (pe[Ee]._name === ye) return pe[Ee];
                            Ee += 1
                        }
                        return null
                    }

                    function ge() {
                        return Ce
                    }
                    return ve.propertyGroup = propertyGroupFactory(ve, ge), pe = te(me, ce, ve.propertyGroup), ve.numProperties = pe.length, ve._name = "Contents", ve
                }
            }(),
            TextExpressionInterface = function () {
                return function (te) {
                    var ee;

                    function re(ie) {
                        switch (ie) {
                            case "ADBE Text Document":
                                return re.sourceText;
                            default:
                                return null
                        }
                    }
                    return Object.defineProperty(re, "sourceText", {
                        get: function () {
                            te.textProperty.getValue();
                            var ne = te.textProperty.currentData.t;
                            return (!ee || ne !== ee.value) && (ee = new String(ne), ee.value = ne || new String(ne), Object.defineProperty(ee, "style", {
                                get: function () {
                                    return {
                                        fillColor: te.textProperty.currentData.fc
                                    }
                                }
                            })), ee
                        }
                    }), re
                }
            }();

        function _typeof(te) {
            "@babel/helpers - typeof";
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof = function (re) {
                return typeof re
            } : _typeof = function (re) {
                return re && typeof Symbol == "function" && re.constructor === Symbol && re !== Symbol.prototype ? "symbol" : typeof re
            }, _typeof(te)
        }
        var FootageInterface = function () {
                var te = function (ie) {
                        var ne = "",
                            se = ie.getFootageData();

                        function ae() {
                            return ne = "", se = ie.getFootageData(), oe
                        }

                        function oe(le) {
                            if (se[le]) return ne = le, se = se[le], _typeof(se) === "object" ? oe : se;
                            var he = le.indexOf(ne);
                            if (he !== -1) {
                                var fe = parseInt(le.substr(he + ne.length), 10);
                                return se = se[fe], _typeof(se) === "object" ? oe : se
                            }
                            return ""
                        }
                        return ae
                    },
                    ee = function (ie) {
                        function ne(se) {
                            return se === "Outline" ? ne.outlineInterface() : null
                        }
                        return ne._name = "Outline", ne.outlineInterface = te(ie), ne
                    };
                return function (re) {
                    function ie(ne) {
                        return ne === "Data" ? ie.dataInterface : null
                    }
                    return ie._name = "Data", ie.dataInterface = ee(re), ie
                }
            }(),
            interfaces = {
                layer: LayerExpressionInterface,
                effects: EffectsExpressionInterface,
                comp: CompExpressionInterface,
                shape: ShapeExpressionInterface,
                text: TextExpressionInterface,
                footage: FootageInterface
            };

        function getInterface(te) {
            return interfaces[te] || null
        }
        var expressionHelpers = function () {
            function te(ae, oe, le) {
                oe.x && (le.k = !0, le.x = !0, le.initiateExpression = ExpressionManager.initiateExpression, le.effectsSequence.push(le.initiateExpression(ae, oe, le).bind(le)))
            }

            function ee(ae) {
                return ae *= this.elem.globalData.frameRate, ae -= this.offsetTime, ae !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < ae ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(ae, this._cachingAtTime), this._cachingAtTime.lastFrame = ae), this._cachingAtTime.value
            }

            function re(ae) {
                var oe = -.01,
                    le = this.getValueAtTime(ae),
                    he = this.getValueAtTime(ae + oe),
                    fe = 0;
                if (le.length) {
                    var _e;
                    for (_e = 0; _e < le.length; _e += 1) fe += Math.pow(he[_e] - le[_e], 2);
                    fe = Math.sqrt(fe) * 100
                } else fe = 0;
                return fe
            }

            function ie(ae) {
                if (this.vel !== void 0) return this.vel;
                var oe = -.001,
                    le = this.getValueAtTime(ae),
                    he = this.getValueAtTime(ae + oe),
                    fe;
                if (le.length) {
                    fe = createTypedArray("float32", le.length);
                    var _e;
                    for (_e = 0; _e < le.length; _e += 1) fe[_e] = (he[_e] - le[_e]) / oe
                } else fe = (he - le) / oe;
                return fe
            }

            function ne() {
                return this.pv
            }

            function se(ae) {
                this.propertyGroup = ae
            }
            return {
                searchExpressions: te,
                getSpeedAtTime: re,
                getVelocityAtTime: ie,
                getValueAtTime: ee,
                getStaticValueAtTime: ne,
                setGroupProperty: se
            }
        }();

        function addPropertyDecorator() {
            function te(ue, de, me) {
                if (!this.k || !this.keyframes) return this.pv;
                ue = ue ? ue.toLowerCase() : "";
                var ce = this.comp.renderedFrame,
                    Ce = this.keyframes,
                    pe = Ce[Ce.length - 1].t;
                if (ce <= pe) return this.pv;
                var ve, ge;
                me ? (de ? ve = Math.abs(pe - this.elem.comp.globalData.frameRate * de) : ve = Math.max(0, pe - this.elem.data.ip), ge = pe - ve) : ((!de || de > Ce.length - 1) && (de = Ce.length - 1), ge = Ce[Ce.length - 1 - de].t, ve = pe - ge);
                var ye, Ee, Pe;
                if (ue === "pingpong") {
                    var xe = Math.floor((ce - ge) / ve);
                    if (xe % 2 !== 0) return this.getValueAtTime((ve - (ce - ge) % ve + ge) / this.comp.globalData.frameRate, 0)
                } else if (ue === "offset") {
                    var we = this.getValueAtTime(ge / this.comp.globalData.frameRate, 0),
                        Fe = this.getValueAtTime(pe / this.comp.globalData.frameRate, 0),
                        Le = this.getValueAtTime(((ce - ge) % ve + ge) / this.comp.globalData.frameRate, 0),
                        Re = Math.floor((ce - ge) / ve);
                    if (this.pv.length) {
                        for (Pe = new Array(we.length), Ee = Pe.length, ye = 0; ye < Ee; ye += 1) Pe[ye] = (Fe[ye] - we[ye]) * Re + Le[ye];
                        return Pe
                    }
                    return (Fe - we) * Re + Le
                } else if (ue === "continue") {
                    var Me = this.getValueAtTime(pe / this.comp.globalData.frameRate, 0),
                        $e = this.getValueAtTime((pe - .001) / this.comp.globalData.frameRate, 0);
                    if (this.pv.length) {
                        for (Pe = new Array(Me.length), Ee = Pe.length, ye = 0; ye < Ee; ye += 1) Pe[ye] = Me[ye] + (Me[ye] - $e[ye]) * ((ce - pe) / this.comp.globalData.frameRate) / 5e-4;
                        return Pe
                    }
                    return Me + (Me - $e) * ((ce - pe) / .001)
                }
                return this.getValueAtTime(((ce - ge) % ve + ge) / this.comp.globalData.frameRate, 0)
            }

            function ee(ue, de, me) {
                if (!this.k) return this.pv;
                ue = ue ? ue.toLowerCase() : "";
                var ce = this.comp.renderedFrame,
                    Ce = this.keyframes,
                    pe = Ce[0].t;
                if (ce >= pe) return this.pv;
                var ve, ge;
                me ? (de ? ve = Math.abs(this.elem.comp.globalData.frameRate * de) : ve = Math.max(0, this.elem.data.op - pe), ge = pe + ve) : ((!de || de > Ce.length - 1) && (de = Ce.length - 1), ge = Ce[de].t, ve = ge - pe);
                var ye, Ee, Pe;
                if (ue === "pingpong") {
                    var xe = Math.floor((pe - ce) / ve);
                    if (xe % 2 === 0) return this.getValueAtTime(((pe - ce) % ve + pe) / this.comp.globalData.frameRate, 0)
                } else if (ue === "offset") {
                    var we = this.getValueAtTime(pe / this.comp.globalData.frameRate, 0),
                        Fe = this.getValueAtTime(ge / this.comp.globalData.frameRate, 0),
                        Le = this.getValueAtTime((ve - (pe - ce) % ve + pe) / this.comp.globalData.frameRate, 0),
                        Re = Math.floor((pe - ce) / ve) + 1;
                    if (this.pv.length) {
                        for (Pe = new Array(we.length), Ee = Pe.length, ye = 0; ye < Ee; ye += 1) Pe[ye] = Le[ye] - (Fe[ye] - we[ye]) * Re;
                        return Pe
                    }
                    return Le - (Fe - we) * Re
                } else if (ue === "continue") {
                    var Me = this.getValueAtTime(pe / this.comp.globalData.frameRate, 0),
                        $e = this.getValueAtTime((pe + .001) / this.comp.globalData.frameRate, 0);
                    if (this.pv.length) {
                        for (Pe = new Array(Me.length), Ee = Pe.length, ye = 0; ye < Ee; ye += 1) Pe[ye] = Me[ye] + (Me[ye] - $e[ye]) * (pe - ce) / .001;
                        return Pe
                    }
                    return Me + (Me - $e) * (pe - ce) / .001
                }
                return this.getValueAtTime((ve - ((pe - ce) % ve + pe)) / this.comp.globalData.frameRate, 0)
            }

            function re(ue, de) {
                if (!this.k) return this.pv;
                if (ue = (ue || .4) * .5, de = Math.floor(de || 5), de <= 1) return this.pv;
                var me = this.comp.renderedFrame / this.comp.globalData.frameRate,
                    ce = me - ue,
                    Ce = me + ue,
                    pe = de > 1 ? (Ce - ce) / (de - 1) : 1,
                    ve = 0,
                    ge = 0,
                    ye;
                this.pv.length ? ye = createTypedArray("float32", this.pv.length) : ye = 0;
                for (var Ee; ve < de;) {
                    if (Ee = this.getValueAtTime(ce + ve * pe), this.pv.length)
                        for (ge = 0; ge < this.pv.length; ge += 1) ye[ge] += Ee[ge];
                    else ye += Ee;
                    ve += 1
                }
                if (this.pv.length)
                    for (ge = 0; ge < this.pv.length; ge += 1) ye[ge] /= de;
                else ye /= de;
                return ye
            }

            function ie(ue) {
                this._transformCachingAtTime || (this._transformCachingAtTime = {
                    v: new Matrix
                });
                var de = this._transformCachingAtTime.v;
                if (de.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
                    var me = this.a.getValueAtTime(ue);
                    de.translate(-me[0] * this.a.mult, -me[1] * this.a.mult, me[2] * this.a.mult)
                }
                if (this.appliedTransformations < 2) {
                    var ce = this.s.getValueAtTime(ue);
                    de.scale(ce[0] * this.s.mult, ce[1] * this.s.mult, ce[2] * this.s.mult)
                }
                if (this.sk && this.appliedTransformations < 3) {
                    var Ce = this.sk.getValueAtTime(ue),
                        pe = this.sa.getValueAtTime(ue);
                    de.skewFromAxis(-Ce * this.sk.mult, pe * this.sa.mult)
                }
                if (this.r && this.appliedTransformations < 4) {
                    var ve = this.r.getValueAtTime(ue);
                    de.rotate(-ve * this.r.mult)
                } else if (!this.r && this.appliedTransformations < 4) {
                    var ge = this.rz.getValueAtTime(ue),
                        ye = this.ry.getValueAtTime(ue),
                        Ee = this.rx.getValueAtTime(ue),
                        Pe = this.or.getValueAtTime(ue);
                    de.rotateZ(-ge * this.rz.mult).rotateY(ye * this.ry.mult).rotateX(Ee * this.rx.mult).rotateZ(-Pe[2] * this.or.mult).rotateY(Pe[1] * this.or.mult).rotateX(Pe[0] * this.or.mult)
                }
                if (this.data.p && this.data.p.s) {
                    var xe = this.px.getValueAtTime(ue),
                        we = this.py.getValueAtTime(ue);
                    if (this.data.p.z) {
                        var Fe = this.pz.getValueAtTime(ue);
                        de.translate(xe * this.px.mult, we * this.py.mult, -Fe * this.pz.mult)
                    } else de.translate(xe * this.px.mult, we * this.py.mult, 0)
                } else {
                    var Le = this.p.getValueAtTime(ue);
                    de.translate(Le[0] * this.p.mult, Le[1] * this.p.mult, -Le[2] * this.p.mult)
                }
                return de
            }

            function ne() {
                return this.v.clone(new Matrix)
            }
            var se = TransformPropertyFactory.getTransformProperty;
            TransformPropertyFactory.getTransformProperty = function (ue, de, me) {
                var ce = se(ue, de, me);
                return ce.dynamicProperties.length ? ce.getValueAtTime = ie.bind(ce) : ce.getValueAtTime = ne.bind(ce), ce.setGroupProperty = expressionHelpers.setGroupProperty, ce
            };
            var ae = PropertyFactory.getProp;
            PropertyFactory.getProp = function (ue, de, me, ce, Ce) {
                var pe = ae(ue, de, me, ce, Ce);
                pe.kf ? pe.getValueAtTime = expressionHelpers.getValueAtTime.bind(pe) : pe.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(pe), pe.setGroupProperty = expressionHelpers.setGroupProperty, pe.loopOut = te, pe.loopIn = ee, pe.smooth = re, pe.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(pe), pe.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(pe), pe.numKeys = de.a === 1 ? de.k.length : 0, pe.propertyIndex = de.ix;
                var ve = 0;
                return me !== 0 && (ve = createTypedArray("float32", de.a === 1 ? de.k[0].s.length : de.k.length)), pe._cachingAtTime = {
                    lastFrame: initialDefaultFrame,
                    lastIndex: 0,
                    value: ve
                }, expressionHelpers.searchExpressions(ue, de, pe), pe.k && Ce.addDynamicProperty(pe), pe
            };

            function oe(ue) {
                return this._cachingAtTime || (this._cachingAtTime = {
                    shapeValue: shapePool.clone(this.pv),
                    lastIndex: 0,
                    lastTime: initialDefaultFrame
                }), ue *= this.elem.globalData.frameRate, ue -= this.offsetTime, ue !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < ue ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = ue, this.interpolateShape(ue, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue
            }
            var le = ShapePropertyFactory.getConstructorFunction(),
                he = ShapePropertyFactory.getKeyframedConstructorFunction();

            function fe() {}
            fe.prototype = {
                vertices: function (de, me) {
                    this.k && this.getValue();
                    var ce = this.v;
                    me !== void 0 && (ce = this.getValueAtTime(me, 0));
                    var Ce, pe = ce._length,
                        ve = ce[de],
                        ge = ce.v,
                        ye = createSizedArray(pe);
                    for (Ce = 0; Ce < pe; Ce += 1) de === "i" || de === "o" ? ye[Ce] = [ve[Ce][0] - ge[Ce][0], ve[Ce][1] - ge[Ce][1]] : ye[Ce] = [ve[Ce][0], ve[Ce][1]];
                    return ye
                },
                points: function (de) {
                    return this.vertices("v", de)
                },
                inTangents: function (de) {
                    return this.vertices("i", de)
                },
                outTangents: function (de) {
                    return this.vertices("o", de)
                },
                isClosed: function () {
                    return this.v.c
                },
                pointOnPath: function (de, me) {
                    var ce = this.v;
                    me !== void 0 && (ce = this.getValueAtTime(me, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(ce));
                    for (var Ce = this._segmentsLength, pe = Ce.lengths, ve = Ce.totalLength * de, ge = 0, ye = pe.length, Ee = 0, Pe; ge < ye;) {
                        if (Ee + pe[ge].addedLength > ve) {
                            var xe = ge,
                                we = ce.c && ge === ye - 1 ? 0 : ge + 1,
                                Fe = (ve - Ee) / pe[ge].addedLength;
                            Pe = bez.getPointInSegment(ce.v[xe], ce.v[we], ce.o[xe], ce.i[we], Fe, pe[ge]);
                            break
                        } else Ee += pe[ge].addedLength;
                        ge += 1
                    }
                    return Pe || (Pe = ce.c ? [ce.v[0][0], ce.v[0][1]] : [ce.v[ce._length - 1][0], ce.v[ce._length - 1][1]]), Pe
                },
                vectorOnPath: function (de, me, ce) {
                    de == 1 ? de = this.v.c : de == 0 && (de = .999);
                    var Ce = this.pointOnPath(de, me),
                        pe = this.pointOnPath(de + .001, me),
                        ve = pe[0] - Ce[0],
                        ge = pe[1] - Ce[1],
                        ye = Math.sqrt(Math.pow(ve, 2) + Math.pow(ge, 2));
                    if (ye === 0) return [0, 0];
                    var Ee = ce === "tangent" ? [ve / ye, ge / ye] : [-ge / ye, ve / ye];
                    return Ee
                },
                tangentOnPath: function (de, me) {
                    return this.vectorOnPath(de, me, "tangent")
                },
                normalOnPath: function (de, me) {
                    return this.vectorOnPath(de, me, "normal")
                },
                setGroupProperty: expressionHelpers.setGroupProperty,
                getValueAtTime: expressionHelpers.getStaticValueAtTime
            }, extendPrototype([fe], le), extendPrototype([fe], he), he.prototype.getValueAtTime = oe, he.prototype.initiateExpression = ExpressionManager.initiateExpression;
            var _e = ShapePropertyFactory.getShapeProp;
            ShapePropertyFactory.getShapeProp = function (ue, de, me, ce, Ce) {
                var pe = _e(ue, de, me, ce, Ce);
                return pe.propertyIndex = de.ix, pe.lock = !1, me === 3 ? expressionHelpers.searchExpressions(ue, de.pt, pe) : me === 4 && expressionHelpers.searchExpressions(ue, de.ks, pe), pe.k && ue.addDynamicProperty(pe), pe
            }
        }

        function initialize$1() {
            addPropertyDecorator()
        }

        function addDecorator() {
            function te() {
                return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0) : null
            }
            TextProperty.prototype.getExpressionValue = function (ee, re) {
                var ie = this.calculateExpression(re);
                if (ee.t !== ie) {
                    var ne = {};
                    return this.copyData(ne, ee), ne.t = ie.toString(), ne.__complete = !1, ne
                }
                return ee
            }, TextProperty.prototype.searchProperty = function () {
                var ee = this.searchKeyframes(),
                    re = this.searchExpressions();
                return this.kf = ee || re, this.kf
            }, TextProperty.prototype.searchExpressions = te
        }

        function initialize() {
            addDecorator()
        }

        function SVGComposableEffect() {}
        SVGComposableEffect.prototype = {
            createMergeNode: function te(ee, re) {
                var ie = createNS("feMerge");
                ie.setAttribute("result", ee);
                var ne, se;
                for (se = 0; se < re.length; se += 1) ne = createNS("feMergeNode"), ne.setAttribute("in", re[se]), ie.appendChild(ne), ie.appendChild(ne);
                return ie
            }
        };
        var linearFilterValue = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";

        function SVGTintFilter(te, ee, re, ie, ne) {
            this.filterManager = ee;
            var se = createNS("feColorMatrix");
            se.setAttribute("type", "matrix"), se.setAttribute("color-interpolation-filters", "linearRGB"), se.setAttribute("values", linearFilterValue + " 1 0"), this.linearFilter = se, se.setAttribute("result", ie + "_tint_1"), te.appendChild(se), se = createNS("feColorMatrix"), se.setAttribute("type", "matrix"), se.setAttribute("color-interpolation-filters", "sRGB"), se.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), se.setAttribute("result", ie + "_tint_2"), te.appendChild(se), this.matrixFilter = se;
            var ae = this.createMergeNode(ie, [ne, ie + "_tint_1", ie + "_tint_2"]);
            te.appendChild(ae)
        }
        extendPrototype([SVGComposableEffect], SVGTintFilter), SVGTintFilter.prototype.renderFrame = function (te) {
            if (te || this.filterManager._mdf) {
                var ee = this.filterManager.effectElements[0].p.v,
                    re = this.filterManager.effectElements[1].p.v,
                    ie = this.filterManager.effectElements[2].p.v / 100;
                this.linearFilter.setAttribute("values", linearFilterValue + " " + ie + " 0"), this.matrixFilter.setAttribute("values", re[0] - ee[0] + " 0 0 0 " + ee[0] + " " + (re[1] - ee[1]) + " 0 0 0 " + ee[1] + " " + (re[2] - ee[2]) + " 0 0 0 " + ee[2] + " 0 0 0 1 0")
            }
        };

        function SVGFillFilter(te, ee, re, ie) {
            this.filterManager = ee;
            var ne = createNS("feColorMatrix");
            ne.setAttribute("type", "matrix"), ne.setAttribute("color-interpolation-filters", "sRGB"), ne.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), ne.setAttribute("result", ie), te.appendChild(ne), this.matrixFilter = ne
        }
        SVGFillFilter.prototype.renderFrame = function (te) {
            if (te || this.filterManager._mdf) {
                var ee = this.filterManager.effectElements[2].p.v,
                    re = this.filterManager.effectElements[6].p.v;
                this.matrixFilter.setAttribute("values", "0 0 0 0 " + ee[0] + " 0 0 0 0 " + ee[1] + " 0 0 0 0 " + ee[2] + " 0 0 0 " + re + " 0")
            }
        };

        function SVGStrokeEffect(te, ee, re) {
            this.initialized = !1, this.filterManager = ee, this.elem = re, this.paths = []
        }
        SVGStrokeEffect.prototype.initialize = function () {
            var te = this.elem.layerElement.children || this.elem.layerElement.childNodes,
                ee, re, ie, ne;
            for (this.filterManager.effectElements[1].p.v === 1 ? (ne = this.elem.maskManager.masksProperties.length, ie = 0) : (ie = this.filterManager.effectElements[0].p.v - 1, ne = ie + 1), re = createNS("g"), re.setAttribute("fill", "none"), re.setAttribute("stroke-linecap", "round"), re.setAttribute("stroke-dashoffset", 1), ie; ie < ne; ie += 1) ee = createNS("path"), re.appendChild(ee), this.paths.push({
                p: ee,
                m: ie
            });
            if (this.filterManager.effectElements[10].p.v === 3) {
                var se = createNS("mask"),
                    ae = createElementID();
                se.setAttribute("id", ae), se.setAttribute("mask-type", "alpha"), se.appendChild(re), this.elem.globalData.defs.appendChild(se);
                var oe = createNS("g");
                for (oe.setAttribute("mask", "url(" + getLocationHref() + "#" + ae + ")"); te[0];) oe.appendChild(te[0]);
                this.elem.layerElement.appendChild(oe), this.masker = se, re.setAttribute("stroke", "#fff")
            } else if (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) {
                if (this.filterManager.effectElements[10].p.v === 2)
                    for (te = this.elem.layerElement.children || this.elem.layerElement.childNodes; te.length;) this.elem.layerElement.removeChild(te[0]);
                this.elem.layerElement.appendChild(re), this.elem.layerElement.removeAttribute("mask"), re.setAttribute("stroke", "#fff")
            }
            this.initialized = !0, this.pathMasker = re
        }, SVGStrokeEffect.prototype.renderFrame = function (te) {
            this.initialized || this.initialize();
            var ee, re = this.paths.length,
                ie, ne;
            for (ee = 0; ee < re; ee += 1)
                if (this.paths[ee].m !== -1 && (ie = this.elem.maskManager.viewData[this.paths[ee].m], ne = this.paths[ee].p, (te || this.filterManager._mdf || ie.prop._mdf) && ne.setAttribute("d", ie.lastPath), te || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || ie.prop._mdf)) {
                    var se;
                    if (this.filterManager.effectElements[7].p.v !== 0 || this.filterManager.effectElements[8].p.v !== 100) {
                        var ae = Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) * .01,
                            oe = Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) * .01,
                            le = ne.getTotalLength();
                        se = "0 0 0 " + le * ae + " ";
                        var he = le * (oe - ae),
                            fe = 1 + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * .01,
                            _e = Math.floor(he / fe),
                            ue;
                        for (ue = 0; ue < _e; ue += 1) se += "1 " + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * .01 + " ";
                        se += "0 " + le * 10 + " 0 0"
                    } else se = "1 " + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * .01;
                    ne.setAttribute("stroke-dasharray", se)
                } if ((te || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", this.filterManager.effectElements[4].p.v * 2), (te || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) && (te || this.filterManager.effectElements[3].p._mdf)) {
                var de = this.filterManager.effectElements[3].p.v;
                this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(de[0] * 255) + "," + bmFloor(de[1] * 255) + "," + bmFloor(de[2] * 255) + ")")
            }
        };

        function SVGTritoneFilter(te, ee, re, ie) {
            this.filterManager = ee;
            var ne = createNS("feColorMatrix");
            ne.setAttribute("type", "matrix"), ne.setAttribute("color-interpolation-filters", "linearRGB"), ne.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), te.appendChild(ne);
            var se = createNS("feComponentTransfer");
            se.setAttribute("color-interpolation-filters", "sRGB"), se.setAttribute("result", ie), this.matrixFilter = se;
            var ae = createNS("feFuncR");
            ae.setAttribute("type", "table"), se.appendChild(ae), this.feFuncR = ae;
            var oe = createNS("feFuncG");
            oe.setAttribute("type", "table"), se.appendChild(oe), this.feFuncG = oe;
            var le = createNS("feFuncB");
            le.setAttribute("type", "table"), se.appendChild(le), this.feFuncB = le, te.appendChild(se)
        }
        SVGTritoneFilter.prototype.renderFrame = function (te) {
            if (te || this.filterManager._mdf) {
                var ee = this.filterManager.effectElements[0].p.v,
                    re = this.filterManager.effectElements[1].p.v,
                    ie = this.filterManager.effectElements[2].p.v,
                    ne = ie[0] + " " + re[0] + " " + ee[0],
                    se = ie[1] + " " + re[1] + " " + ee[1],
                    ae = ie[2] + " " + re[2] + " " + ee[2];
                this.feFuncR.setAttribute("tableValues", ne), this.feFuncG.setAttribute("tableValues", se), this.feFuncB.setAttribute("tableValues", ae)
            }
        };

        function SVGProLevelsFilter(te, ee, re, ie) {
            this.filterManager = ee;
            var ne = this.filterManager.effectElements,
                se = createNS("feComponentTransfer");
            (ne[10].p.k || ne[10].p.v !== 0 || ne[11].p.k || ne[11].p.v !== 1 || ne[12].p.k || ne[12].p.v !== 1 || ne[13].p.k || ne[13].p.v !== 0 || ne[14].p.k || ne[14].p.v !== 1) && (this.feFuncR = this.createFeFunc("feFuncR", se)), (ne[17].p.k || ne[17].p.v !== 0 || ne[18].p.k || ne[18].p.v !== 1 || ne[19].p.k || ne[19].p.v !== 1 || ne[20].p.k || ne[20].p.v !== 0 || ne[21].p.k || ne[21].p.v !== 1) && (this.feFuncG = this.createFeFunc("feFuncG", se)), (ne[24].p.k || ne[24].p.v !== 0 || ne[25].p.k || ne[25].p.v !== 1 || ne[26].p.k || ne[26].p.v !== 1 || ne[27].p.k || ne[27].p.v !== 0 || ne[28].p.k || ne[28].p.v !== 1) && (this.feFuncB = this.createFeFunc("feFuncB", se)), (ne[31].p.k || ne[31].p.v !== 0 || ne[32].p.k || ne[32].p.v !== 1 || ne[33].p.k || ne[33].p.v !== 1 || ne[34].p.k || ne[34].p.v !== 0 || ne[35].p.k || ne[35].p.v !== 1) && (this.feFuncA = this.createFeFunc("feFuncA", se)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (se.setAttribute("color-interpolation-filters", "sRGB"), te.appendChild(se)), (ne[3].p.k || ne[3].p.v !== 0 || ne[4].p.k || ne[4].p.v !== 1 || ne[5].p.k || ne[5].p.v !== 1 || ne[6].p.k || ne[6].p.v !== 0 || ne[7].p.k || ne[7].p.v !== 1) && (se = createNS("feComponentTransfer"), se.setAttribute("color-interpolation-filters", "sRGB"), se.setAttribute("result", ie), te.appendChild(se), this.feFuncRComposed = this.createFeFunc("feFuncR", se), this.feFuncGComposed = this.createFeFunc("feFuncG", se), this.feFuncBComposed = this.createFeFunc("feFuncB", se))
        }
        SVGProLevelsFilter.prototype.createFeFunc = function (te, ee) {
            var re = createNS(te);
            return re.setAttribute("type", "table"), ee.appendChild(re), re
        }, SVGProLevelsFilter.prototype.getTableValue = function (te, ee, re, ie, ne) {
            for (var se = 0, ae = 256, oe, le = Math.min(te, ee), he = Math.max(te, ee), fe = Array.call(null, {
                    length: ae
                }), _e, ue = 0, de = ne - ie, me = ee - te; se <= 256;) oe = se / 256, oe <= le ? _e = me < 0 ? ne : ie : oe >= he ? _e = me < 0 ? ie : ne : _e = ie + de * Math.pow((oe - te) / me, 1 / re), fe[ue] = _e, ue += 1, se += 256 / (ae - 1);
            return fe.join(" ")
        }, SVGProLevelsFilter.prototype.renderFrame = function (te) {
            if (te || this.filterManager._mdf) {
                var ee, re = this.filterManager.effectElements;
                this.feFuncRComposed && (te || re[3].p._mdf || re[4].p._mdf || re[5].p._mdf || re[6].p._mdf || re[7].p._mdf) && (ee = this.getTableValue(re[3].p.v, re[4].p.v, re[5].p.v, re[6].p.v, re[7].p.v), this.feFuncRComposed.setAttribute("tableValues", ee), this.feFuncGComposed.setAttribute("tableValues", ee), this.feFuncBComposed.setAttribute("tableValues", ee)), this.feFuncR && (te || re[10].p._mdf || re[11].p._mdf || re[12].p._mdf || re[13].p._mdf || re[14].p._mdf) && (ee = this.getTableValue(re[10].p.v, re[11].p.v, re[12].p.v, re[13].p.v, re[14].p.v), this.feFuncR.setAttribute("tableValues", ee)), this.feFuncG && (te || re[17].p._mdf || re[18].p._mdf || re[19].p._mdf || re[20].p._mdf || re[21].p._mdf) && (ee = this.getTableValue(re[17].p.v, re[18].p.v, re[19].p.v, re[20].p.v, re[21].p.v), this.feFuncG.setAttribute("tableValues", ee)), this.feFuncB && (te || re[24].p._mdf || re[25].p._mdf || re[26].p._mdf || re[27].p._mdf || re[28].p._mdf) && (ee = this.getTableValue(re[24].p.v, re[25].p.v, re[26].p.v, re[27].p.v, re[28].p.v), this.feFuncB.setAttribute("tableValues", ee)), this.feFuncA && (te || re[31].p._mdf || re[32].p._mdf || re[33].p._mdf || re[34].p._mdf || re[35].p._mdf) && (ee = this.getTableValue(re[31].p.v, re[32].p.v, re[33].p.v, re[34].p.v, re[35].p.v), this.feFuncA.setAttribute("tableValues", ee))
            }
        };

        function SVGDropShadowEffect(te, ee, re, ie, ne) {
            var se = ee.container.globalData.renderConfig.filterSize,
                ae = ee.data.fs || se;
            te.setAttribute("x", ae.x || se.x), te.setAttribute("y", ae.y || se.y), te.setAttribute("width", ae.width || se.width), te.setAttribute("height", ae.height || se.height), this.filterManager = ee;
            var oe = createNS("feGaussianBlur");
            oe.setAttribute("in", "SourceAlpha"), oe.setAttribute("result", ie + "_drop_shadow_1"), oe.setAttribute("stdDeviation", "0"), this.feGaussianBlur = oe, te.appendChild(oe);
            var le = createNS("feOffset");
            le.setAttribute("dx", "25"), le.setAttribute("dy", "0"), le.setAttribute("in", ie + "_drop_shadow_1"), le.setAttribute("result", ie + "_drop_shadow_2"), this.feOffset = le, te.appendChild(le);
            var he = createNS("feFlood");
            he.setAttribute("flood-color", "#00ff00"), he.setAttribute("flood-opacity", "1"), he.setAttribute("result", ie + "_drop_shadow_3"), this.feFlood = he, te.appendChild(he);
            var fe = createNS("feComposite");
            fe.setAttribute("in", ie + "_drop_shadow_3"), fe.setAttribute("in2", ie + "_drop_shadow_2"), fe.setAttribute("operator", "in"), fe.setAttribute("result", ie + "_drop_shadow_4"), te.appendChild(fe);
            var _e = this.createMergeNode(ie, [ie + "_drop_shadow_4", ne]);
            te.appendChild(_e)
        }
        extendPrototype([SVGComposableEffect], SVGDropShadowEffect), SVGDropShadowEffect.prototype.renderFrame = function (te) {
            if (te || this.filterManager._mdf) {
                if ((te || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), te || this.filterManager.effectElements[0].p._mdf) {
                    var ee = this.filterManager.effectElements[0].p.v;
                    this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(ee[0] * 255), Math.round(ee[1] * 255), Math.round(ee[2] * 255)))
                }
                if ((te || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), te || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
                    var re = this.filterManager.effectElements[3].p.v,
                        ie = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
                        ne = re * Math.cos(ie),
                        se = re * Math.sin(ie);
                    this.feOffset.setAttribute("dx", ne), this.feOffset.setAttribute("dy", se)
                }
            }
        };
        var _svgMatteSymbols = [];

        function SVGMatte3Effect(te, ee, re) {
            this.initialized = !1, this.filterManager = ee, this.filterElem = te, this.elem = re, re.matteElement = createNS("g"), re.matteElement.appendChild(re.layerElement), re.matteElement.appendChild(re.transformedElement), re.baseElement = re.matteElement
        }
        SVGMatte3Effect.prototype.findSymbol = function (te) {
            for (var ee = 0, re = _svgMatteSymbols.length; ee < re;) {
                if (_svgMatteSymbols[ee] === te) return _svgMatteSymbols[ee];
                ee += 1
            }
            return null
        }, SVGMatte3Effect.prototype.replaceInParent = function (te, ee) {
            var re = te.layerElement.parentNode;
            if (re) {
                for (var ie = re.children, ne = 0, se = ie.length; ne < se && ie[ne] !== te.layerElement;) ne += 1;
                var ae;
                ne <= se - 2 && (ae = ie[ne + 1]);
                var oe = createNS("use");
                oe.setAttribute("href", "#" + ee), ae ? re.insertBefore(oe, ae) : re.appendChild(oe)
            }
        }, SVGMatte3Effect.prototype.setElementAsMask = function (te, ee) {
            if (!this.findSymbol(ee)) {
                var re = createElementID(),
                    ie = createNS("mask");
                ie.setAttribute("id", ee.layerId), ie.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(ee);
                var ne = te.globalData.defs;
                ne.appendChild(ie);
                var se = createNS("symbol");
                se.setAttribute("id", re), this.replaceInParent(ee, re), se.appendChild(ee.layerElement), ne.appendChild(se);
                var ae = createNS("use");
                ae.setAttribute("href", "#" + re), ie.appendChild(ae), ee.data.hd = !1, ee.show()
            }
            te.setMatte(ee.layerId)
        }, SVGMatte3Effect.prototype.initialize = function () {
            for (var te = this.filterManager.effectElements[0].p.v, ee = this.elem.comp.elements, re = 0, ie = ee.length; re < ie;) ee[re] && ee[re].data.ind === te && this.setElementAsMask(this.elem, ee[re]), re += 1;
            this.initialized = !0
        }, SVGMatte3Effect.prototype.renderFrame = function () {
            this.initialized || this.initialize()
        };

        function SVGGaussianBlurEffect(te, ee, re, ie) {
            te.setAttribute("x", "-100%"), te.setAttribute("y", "-100%"), te.setAttribute("width", "300%"), te.setAttribute("height", "300%"), this.filterManager = ee;
            var ne = createNS("feGaussianBlur");
            ne.setAttribute("result", ie), te.appendChild(ne), this.feGaussianBlur = ne
        }
        SVGGaussianBlurEffect.prototype.renderFrame = function (te) {
            if (te || this.filterManager._mdf) {
                var ee = .3,
                    re = this.filterManager.effectElements[0].p.v * ee,
                    ie = this.filterManager.effectElements[1].p.v,
                    ne = ie == 3 ? 0 : re,
                    se = ie == 2 ? 0 : re;
                this.feGaussianBlur.setAttribute("stdDeviation", ne + " " + se);
                var ae = this.filterManager.effectElements[2].p.v == 1 ? "wrap" : "duplicate";
                this.feGaussianBlur.setAttribute("edgeMode", ae)
            }
        };

        function TransformEffect() {}
        TransformEffect.prototype.init = function (te) {
            this.effectsManager = te, this.type = effectTypes.TRANSFORM_EFFECT, this.matrix = new Matrix, this.opacity = -1, this._mdf = !1, this._opMdf = !1
        }, TransformEffect.prototype.renderFrame = function (te) {
            if (this._opMdf = !1, this._mdf = !1, te || this.effectsManager._mdf) {
                var ee = this.effectsManager.effectElements,
                    re = ee[0].p.v,
                    ie = ee[1].p.v,
                    ne = ee[2].p.v === 1,
                    se = ee[3].p.v,
                    ae = ne ? se : ee[4].p.v,
                    oe = ee[5].p.v,
                    le = ee[6].p.v,
                    he = ee[7].p.v;
                this.matrix.reset(), this.matrix.translate(-re[0], -re[1], re[2]), this.matrix.scale(ae * .01, se * .01, 1), this.matrix.rotate(-he * degToRads), this.matrix.skewFromAxis(-oe * degToRads, (le + 90) * degToRads), this.matrix.translate(ie[0], ie[1], 0), this._mdf = !0, this.opacity !== ee[8].p.v && (this.opacity = ee[8].p.v, this._opMdf = !0)
            }
        };

        function SVGTransformEffect(te, ee) {
            this.init(ee)
        }
        extendPrototype([TransformEffect], SVGTransformEffect);

        function CVTransformEffect(te) {
            this.init(te)
        }
        return extendPrototype([TransformEffect], CVTransformEffect), registerRenderer("canvas", CanvasRenderer), registerRenderer("html", HybridRenderer), registerRenderer("svg", SVGRenderer), ShapeModifiers.registerModifier("tm", TrimModifier), ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeModifiers.registerModifier("rd", RoundCornersModifier), ShapeModifiers.registerModifier("zz", ZigZagModifier), ShapeModifiers.registerModifier("op", OffsetPathModifier), setExpressionsPlugin(Expressions), setExpressionInterfaces(getInterface), initialize$1(), initialize(), registerEffect$1(20, SVGTintFilter, !0), registerEffect$1(21, SVGFillFilter, !0), registerEffect$1(22, SVGStrokeEffect, !1), registerEffect$1(23, SVGTritoneFilter, !0), registerEffect$1(24, SVGProLevelsFilter, !0), registerEffect$1(25, SVGDropShadowEffect, !0), registerEffect$1(28, SVGMatte3Effect, !1), registerEffect$1(29, SVGGaussianBlurEffect, !0), registerEffect$1(35, SVGTransformEffect, !1), registerEffect(35, CVTransformEffect), lottie
    })
})(lottie$1, lottie$1.exports);
var lottieExports = lottie$1.exports,
    lottie = getDefaultExportFromCjs(lottieExports);
class LoaderLottie {
    constructor() {
        let ee = "/assets/json/65777a2f32ae49f10c7c9562_loader.json",
            re = $(".loader__logo"),
            ie = {
                frame: 0
            },
            ne = lottie.loadAnimation({
                container: re[0],
                renderer: "svg",
                loop: !1,
                autoplay: !1,
                path: ee
            }),
            se = gsapWithCSS.timeline({
                repeat: -1
            });
        ne.addEventListener("DOMLoaded", function () {
            se.to(ie, {
                frame: ne.totalFrames - 1,
                ease: "none",
                onUpdate: () => ne.goToAndStop(ie.frame, !0),
                duration: ne.totalFrames / 17
            })
        })
    }
}
class FaviconUpdater {
    constructor() {
        this.colorKeys = {
            white: "#ffffff",
            black: "#000000",
            "light-blue": "#AEDEE0",
            "lighter-blue": "#D6F2F3",
            salmon: "#EF9D71",
            "light-purple": "#E9BBFF",
            "light-pink": "#F6E3FF",
            "light-red": "#E9D4D1",
            yellow: "#F5F19C",
            tan: "#E9E0CC",
            "light-tan": "#F2F1E7",
            blue: "#2544EE",
            clear: "#FFFFFF",
            "black-blue": "#000000",
            purple: "#704b98"
        }, this.faviconLink = document.querySelector('link[rel="shortcut icon"]'), this.observeThemeChanges(), this.updateFavicon(this.getThemeValue())
    }
    updateFavicon(ee) {
        var re = document.createElement("canvas");
        re.width = 16, re.height = 16;
        var ie = re.getContext("2d");
        ie.fillStyle = ee, ie.beginPath(), ie.arc(8, 8, 8, 0, 2 * Math.PI), ie.fill();
        var ne = re.toDataURL("image/png"),
            se = document.querySelector('link[rel="icon"]');
        se ? (se.href = ne, this.faviconLink && (this.faviconLink.href = ne)) : (se = document.createElement("link"), se.rel = "icon", se.type = "image/x-icon", se.href = ne, document.head.appendChild(se), this.faviconLink && (this.faviconLink.href = ne))
    }
    getThemeValue() {
        var ee = document.body.getAttribute("theme");
        if (this.colorKeys.hasOwnProperty(ee)) return this.colorKeys[ee] || "#000000"
    }
    observeThemeChanges() {
        var ee = new MutationObserver(ie => {
            ie.forEach(ne => {
                if (ne.type === "attributes" && ne.attributeName === "theme") {
                    var se = document.body.getAttribute("theme");
                    this.colorKeys.hasOwnProperty(se) && this.updateFavicon(this.colorKeys[se])
                }
            })
        });
        ee.observe(document.body, {
            attributes: !0
        });
        var re = new MutationObserver(ie => {
            ie.forEach(ne => {
                if (ne.type === "attributes" && ne.attributeName === "class") {
                    var se = document.querySelector(".loader").getAttribute("theme");
                    this.colorKeys.hasOwnProperty(se) && this.updateFavicon(this.colorKeys[se])
                }
            })
        });
        re.observe(document.querySelector(".loader"), {
            attributes: !0
        })
    }
}
class FooterYear {
    constructor() {
        this.yearElement = $(".footer__copy .year"), this.updateYear()
    }
    updateYear() {
        const ee = new Date().getFullYear();
        this.yearElement.text(ee)
    }
}
class EventEmitter {
    constructor() {
        this.callbacks = {}, this.callbacks.base = {}
    }
    on(ee, re) {
        return typeof ee > "u" || ee === "" ? (console.warn("wrong names"), !1) : typeof re > "u" ? (console.warn("wrong callback"), !1) : (this.resolveNames(ee).forEach(ne => {
            const se = this.resolveName(ne);
            this.callbacks[se.namespace] instanceof Object || (this.callbacks[se.namespace] = {}), this.callbacks[se.namespace][se.value] instanceof Array || (this.callbacks[se.namespace][se.value] = []), this.callbacks[se.namespace][se.value].push(re)
        }), this)
    }
    off(ee) {
        return typeof ee > "u" || ee === "" ? (console.warn("wrong name"), !1) : (this.resolveNames(ee).forEach(ie => {
            const ne = this.resolveName(ie);
            if (ne.namespace !== "base" && ne.value === "") delete this.callbacks[ne.namespace];
            else if (ne.namespace === "base")
                for (const se in this.callbacks) this.callbacks[se] instanceof Object && this.callbacks[se][ne.value] instanceof Array && (delete this.callbacks[se][ne.value], Object.keys(this.callbacks[se]).length === 0 && delete this.callbacks[se]);
            else this.callbacks[ne.namespace] instanceof Object && this.callbacks[ne.namespace][ne.value] instanceof Array && (delete this.callbacks[ne.namespace][ne.value], Object.keys(this.callbacks[ne.namespace]).length === 0 && delete this.callbacks[ne.namespace])
        }), this)
    }
    trigger(ee, re) {
        if (typeof ee > "u" || ee === "") return console.warn("wrong name"), !1;
        let ie = null;
        const ne = re instanceof Array ? re : [];
        let se = this.resolveNames(ee);
        if (se = this.resolveName(se[0]), se.namespace === "base")
            for (const ae in this.callbacks) this.callbacks[ae] instanceof Object && this.callbacks[ae][se.value] instanceof Array && this.callbacks[ae][se.value].forEach(function (oe) {
                oe.apply(this, ne)
            });
        else if (this.callbacks[se.namespace] instanceof Object) {
            if (se.value === "") return console.warn("wrong name"), this;
            this.callbacks[se.namespace][se.value].forEach(function (ae) {
                ae.apply(this, ne)
            })
        }
        return ie
    }
    resolveNames(ee) {
        let re = ee;
        return re = re.replace(/[^a-zA-Z0-9 ,/.]/g, ""), re = re.replace(/[,/]+/g, " "), re = re.split(" "), re
    }
    resolveName(ee) {
        const re = {},
            ie = ee.split(".");
        return re.original = ee, re.value = ie[0], re.namespace = "base", ie.length > 1 && ie[1] !== "" && (re.namespace = ie[1]), re
    }
}
let instance = null;
class App extends EventEmitter {
    constructor() {
        if (super(), history.scrollRestoration = "manual", instance) return instance;
        instance = this, new FontFaceObserver("Pp Neue Machina").load(), this.init()
    }
    init() {
        this.isMobile = window.innerWidth <= 768, this.scroll = new Scroll, this.nav = new Nav, this.footerYear = new FooterYear;
        let ee = this.scroll.lenis,
            re = "data-barba-namespace";
        const ie = async () => {
            let se = $("main");
            const [{
                default: ae
            }, {
                default: oe
            }, {
                default: le
            }, {
                default: he
            }, {
                default: fe
            }, {
                default: _e
            }, {
                default: ue
            }, {
                default: de
            }, {
                default: me
            }] = await Promise.all([__vitePreload(() => import("./main-Utils.js"), []), __vitePreload(() => import("./main-ChangeColor.js"), []), __vitePreload(() => import("./main-Title.js"), []), __vitePreload(() => import("./main-Batch.js"), []), __vitePreload(() => import("./main-Button.js"), []), __vitePreload(() => import("./main-Footer.js"), []), __vitePreload(() => import("./main-Forms.js"), []), __vitePreload(() => import("./main-FadePrevSection.js"), []), __vitePreload(() => import("./main-Sizes.js"), [])]);
            this.utils = new ae, this.changeColor = new oe, this.titleAnimation = new le, this.batch = new he, this.btn = new fe, this.footer = new _e, this.form = new ue, this.fadePrevSection = new de, this.favicon = new FaviconUpdater, this.sizes = new me, this.sizes.on("resize", () => this.trigger("resize")), await loadPage(se.attr(re)), ee.resize()
        }, ne = async se => {
            switch (se) {
                case "home":
                    const {
                        default: ae
                    } = await __vitePreload(() => import("./main-Home.js"), ["main-Home.js", "main-InsertVideo.js"]);
                    return new ae(ie, ee);
                case "solutions":
                    const {
                        default: oe
                    } = await __vitePreload(() => import("./main-Solutions.js"), ["main-Solutions.js", "main-HeaderAnimation.js"]);
                    return new oe(ie, ee);
                case "about":
                    const {
                        default: le
                    } = await __vitePreload(() => import("./main-About.js"), ["main-About.js", "main-HeaderAnimation.js"]);
                    return new le(ie, ee);
                case "casestudies":
                    const {
                        default: he
                    } = await __vitePreload(() => import("./main-Casestudies.js"), ["main-Casestudies.js", "main-HeaderAnimation.js"]);
                    return new he(ie, ee);
                case "case":
                    const {
                        default: fe
                    } = await __vitePreload(() => import("./main-Case.js"), ["main-Case.js", "main-HeaderAnimation.js"]);
                    return new fe(ie, ee);
                case "careers":
                    const {
                        default: _e
                    } = await __vitePreload(() => import("./main-Careers.js"), ["main-Careers.js", "main-HeaderAnimation.js"]);
                    return new _e(ie, ee);
                case "contact":
                    const {
                        default: ue
                    } = await __vitePreload(() => import("./main-Contact.js"), ["main-Contact.js", "main-HeaderAnimation.js"]);
                    return new ue(ie, ee);
                case "team":
                    const {
                        default: de
                    } = await __vitePreload(() => import("./main-Team.js"), ["main-Team.js", "main-HeaderAnimation.js"]);
                    return new de(ie, ee);
                case "category":
                    const {
                        default: me
                    } = await __vitePreload(() => import("./main-Category.js"), ["main-Category.js", "main-HeaderAnimation.js"]);
                    return new me(ie, ee);
                case "insights":
                    const {
                        default: ce
                    } = await __vitePreload(() => import("./main-Insights.js"), ["main-Insights.js", "main-HeaderAnimation.js"]);
                    return new ce(ie, ee);
                case "post":
                    const {
                        default: Ce
                    } = await __vitePreload(() => import("./main-Post.js"), ["main-Post.js", "main-HeaderAnimation.js"]);
                    return new Ce(ie, ee);
                case "privacypolicy":
                    const {
                        default: pe
                    } = await __vitePreload(() => import("./main-PrivacyPolicy.js"), []);
                    return new pe(ie, ee);
                case "terms-of-use":
                    const {
                        default: ve
                    } = await __vitePreload(() => import("./main-TermsOfUse.js"), []);
                    return new ve(ie, ee);
                case "404":
                    const {
                        default: ge
                    } = await __vitePreload(() => import("./main-FourZeroFour.js"), ["main-FourZeroFour.js", "main-HeaderAnimation.js"]);
                    return new ge(ie, ee);
                default:
                    const {
                        default: ye
                    } = await __vitePreload(() => import("./main-Basic.js"), ["main-Basic.js", "main-Base.js", "main-InsertVideo.js", "main-ImgParallax.js", "main-style2.css", "main-HeaderAnimation.js"]);
                    return new ye(ie, ee)
            }
        };
        this.bodyClick(), ct.use(n), ct.init({
            debug: !1,
            timeout: 7e3,
            prevent: ({
                el: se
            }) => se.classList && se.classList.contains("prevent") || se.closest(".prevent"),
            transitions: [{
                name: "once",
                async once(se) {
                    new LoaderLottie;
                    let ae = se.next.namespace;
                    AppendLogo($(".nav__logo")), new Burger, ne(ae)
                }
            }, {
                name: "transition",
                async leave(se) {
                    const ae = this.async();
                    instance.leave = await __vitePreload(() => import("./main-Leave.js"), []).then(oe => new oe.default(se.current.container, ae, instance.left, instance.top, se.next.container))
                },
                async enter(se) {
                    let ae = se.next.namespace;
                    instance.enter = await __vitePreload(() => import("./main-Enter.js"), []).then(oe => new oe.default(se.next.container, ne, ae))
                }
            }, {
                name: "self",
                async leave(se) {
                    const ae = this.async();
                    instance.leave = await __vitePreload(() => import("./main-Leave.js"), []).then(oe => new oe.default(se.current.container, ae, null, null, se.next.container))
                },
                async enter(se) {
                    let ae = se.next.namespace;
                    instance.enter = await __vitePreload(() => import("./main-Enter.js"), []).then(oe => new oe.default(se.next.container, ne, ae))
                }
            }]
        }), ct.hooks.after(async se => {
            (await __vitePreload(() => import("./main-index15.js"), [])).restartWebflow()
        }), ct.hooks.enter(se => {
            se.next.container.querySelectorAll("video").forEach(function (oe) {
                oe.load()
            })
        }), this.isMobile && setTimeout(() => {
            forceRender()
        }, 1e3)
    }
    bodyClick() {
        document.addEventListener("click", ee => {
            this.top = ee.clientY / window.innerHeight * 100, this.left = ee.clientX / window.innerWidth * 100
        })
    }
}
new App;
export {
    App as A, EventEmitter as E, FontFaceObserver as F, LinksHover as L, Observer as O, ScrollTrigger as S, __vitePreload as _, SplitText as a, forceRender as f, gsapWithCSS as g, lottie as l
};