!function(N) {
    if ("object" == typeof exports && "undefined" != typeof module)
        module.exports = N();
    else if ("function" == typeof define && define.amd)
        define([], N);
    else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).MapboxGeocoder = N()
    }
}(function() {
    return function v(_, T, a) {
        function u(n, h) {
            if (!T[n]) {
                if (!_[n]) {
                    var l = "function" == typeof require && require;
                    if (!h && l)
                        return l(n, !0);
                    if (i)
                        return i(n, !0);
                    var r = new Error("Cannot find module '" + n + "'");
                    throw r.code = "MODULE_NOT_FOUND", r
                }
                var s = T[n] = {
                    exports: {}
                };
                _[n][0].call(s.exports, function(d) {
                    return u(_[n][1][d] || d)
                }, s, s.exports, v, _, T, a)
            }
            return T[n].exports
        }
        for (var i = "function" == typeof require && require, o = 0; o < a.length; o++)
            u(a[o]);
        return u
    }({
        1: [function(v, _, T) {
            "use strict";
            function a(i) {
                this.origin = i.origin || "https://api.mapbox.com",
                this.endpoint = "events/v2",
                this.access_token = i.accessToken,
                this.version = "0.2.0",
                this.sessionID = this.generateSessionID(),
                this.userAgent = this.getUserAgent(),
                this.options = i,
                this.send = this.send.bind(this),
                this.countries = i.countries ? i.countries.split(",") : null,
                this.types = i.types ? i.types.split(",") : null,
                this.bbox = i.bbox ? i.bbox : null,
                this.language = i.language ? i.language.split(",") : null,
                this.limit = i.limit ? +i.limit : null,
                this.locale = navigator.language || null,
                this.enableEventLogging = this.shouldEnableLogging(i),
                this.eventQueue = new Array,
                this.flushInterval = i.flushInterval || 1e3,
                this.maxQueueSize = i.maxQueueSize || 100,
                this.timer = this.flushInterval ? setTimeout(this.flush.bind(this), this.flushInterval) : null,
                this.lastSentInput = "",
                this.lastSentIndex = 0
            }
            var u = v("nanoid");
            a.prototype = {
                select: function(i, o) {
                    var n = this.getSelectedIndex(i, o),
                        h = this.getEventPayload("search.select", o);
                    if (h.resultIndex = n, h.resultPlaceName = i.place_name, h.resultId = i.id, (n !== this.lastSentIndex || h.queryString !== this.lastSentInput) && -1 != n && (this.lastSentIndex = n, this.lastSentInput = h.queryString, h.queryString))
                        return this.push(h)
                },
                start: function(i) {
                    var o = this.getEventPayload("search.start", i);
                    if (o.queryString)
                        return this.push(o)
                },
                keyevent: function(i, o) {
                    if (i.key && !i.metaKey && -1 === [9, 27, 37, 39, 13, 38, 40].indexOf(i.keyCode)) {
                        var n = this.getEventPayload("search.keystroke", o);
                        if (n.lastAction = i.key, n.queryString)
                            return this.push(n)
                    }
                },
                send: function(i, o) {
                    if (this.enableEventLogging) {
                        var n = this.getRequestOptions(i);
                        this.request(n, function(h) {
                            return h ? this.handleError(h, o) : o ? o() : void 0
                        }.bind(this))
                    } else if (o)
                        return o()
                },
                getRequestOptions: function(i) {
                    return Array.isArray(i) || (i = [i]), {
                        method: "POST",
                        host: this.origin,
                        path: this.endpoint + "?access_token=" + this.access_token,
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(i)
                    }
                },
                getEventPayload: function(i, o) {
                    var n;
                    n = o.options.proximity ? [o.options.proximity.longitude, o.options.proximity.latitude] : null;
                    var h = o._map ? o._map.getZoom() : void 0,
                        l = {
                            event: i,
                            created: +new Date,
                            sessionIdentifier: this.sessionID,
                            country: this.countries,
                            userAgent: this.userAgent,
                            language: this.language,
                            bbox: this.bbox,
                            types: this.types,
                            endpoint: "mapbox.places",
                            autocomplete: o.options.autocomplete,
                            fuzzyMatch: o.options.fuzzyMatch,
                            proximity: n,
                            limit: o.options.limit,
                            routing: o.options.routing,
                            worldview: o.options.worldview,
                            mapZoom: h,
                            keyboardLocale: this.locale
                        };
                    return "search.select" === i ? l.queryString = o.inputString : "search.select" != i && o._inputEl ? l.queryString = o._inputEl.value : l.queryString = o.inputString, l
                },
                request: function(i, o) {
                    var n = new XMLHttpRequest;
                    for (var h in n.onreadystatechange = function() {
                        if (4 == this.readyState)
                            return o(204 == this.status ? null : this.statusText)
                    }, n.open(i.method, i.host + "/" + i.path, !0), i.headers) {
                        var l = i.headers[h];
                        n.setRequestHeader(h, l)
                    }
                    n.send(i.body)
                },
                handleError: function(i, o) {
                    if (o)
                        return o(i)
                },
                generateSessionID: function() {
                    return u()
                },
                getUserAgent: function() {
                    return "mapbox-gl-geocoder." + this.version + "." + navigator.userAgent
                },
                getSelectedIndex: function(i, o) {
                    if (o._typeahead) {
                        var n = o._typeahead.data,
                            h = i.id;
                        return n.map(function(l) {
                            return l.id
                        }).indexOf(h)
                    }
                },
                shouldEnableLogging: function(i) {
                    return !(!1 === i.enableEventLogging || i.origin && -1 == i.origin.indexOf("api.mapbox.com") || i.localGeocoder || i.filter)
                },
                flush: function() {
                    this.eventQueue.length > 0 && (this.send(this.eventQueue), this.eventQueue = new Array),
                    this.timer && clearTimeout(this.timer),
                    this.flushInterval && (this.timer = setTimeout(this.flush.bind(this), this.flushInterval))
                },
                push: function(i, o) {
                    this.eventQueue.push(i),
                    (this.eventQueue.length >= this.maxQueueSize || o) && this.flush()
                },
                remove: function() {
                    this.flush()
                }
            },
            _.exports = a
        }, {
            nanoid: 30
        }],
        2: [function(v, _, T) {
            _.exports = {
                fr: {
                    name: "France",
                    bbox: [[-4.59235, 41.380007], [9.560016, 51.148506]]
                },
                us: {
                    name: "United States",
                    bbox: [[-171.791111, 18.91619], [-66.96466, 71.357764]]
                },
                ru: {
                    name: "Russia",
                    bbox: [[19.66064, 41.151416], [190.10042, 81.2504]]
                },
                ca: {
                    name: "Canada",
                    bbox: [[-140.99778, 41.675105], [-52.648099, 83.23324]]
                }
            }
        }, {}],
        3: [function(v, _, T) {
            "use strict";
            function a(e) {
                this._eventEmitter = new n,
                this.options = o({}, this.options, e),
                this.inputString = "",
                this.fresh = !0,
                this.lastSelected = null
            }
            var u = v("suggestions"),
                i = v("lodash.debounce"),
                o = v("xtend"),
                n = v("events").EventEmitter,
                h = v("./exceptions"),
                l = v("@mapbox/mapbox-sdk"),
                r = v("@mapbox/mapbox-sdk/services/geocoding"),
                s = v("./events"),
                d = v("./localization"),
                m = v("subtag");
            const y_FORWARD = 0,
                y_LOCAL = 1,
                y_REVERSE = 2;
            a.prototype = {
                options: {
                    zoom: 16,
                    flyTo: !0,
                    trackProximity: !0,
                    minLength: 2,
                    reverseGeocode: !1,
                    limit: 5,
                    origin: "https://api.mapbox.com",
                    enableEventLogging: !0,
                    marker: !0,
                    mapboxgl: null,
                    collapsed: !1,
                    clearAndBlurOnEsc: !1,
                    clearOnBlur: !1,
                    getItemValue: function(e) {
                        return e.place_name
                    },
                    render: function(e) {
                        var t = e.place_name.split(",");
                        return '<div class="mapboxgl-ctrl-geocoder--suggestion"><div class="mapboxgl-ctrl-geocoder--suggestion-title">' + t[0] + '</div><div class="mapboxgl-ctrl-geocoder--suggestion-address">' + t.splice(1, t.length).join(",") + "</div></div>"
                    }
                },
                addTo: function(e) {
                    function t(c, p) {
                        if (!document.body.contains(p))
                            throw new Error("Element provided to #addTo() exists, but is not in the DOM");
                        const f = c.onAdd();
                        p.appendChild(f)
                    }
                    if (e._controlContainer)
                        e.addControl(this);
                    else if (e instanceof HTMLElement)
                        t(this, e);
                    else {
                        if ("string" != typeof e)
                            throw new Error("Error: addTo must be a mapbox-gl-js map, an html element, or a CSS selector query for a single html element");
                        const c = document.querySelectorAll(e);
                        if (0 === c.length)
                            throw new Error("Element ", e, "not found.");
                        if (c.length > 1)
                            throw new Error("Geocoder can only be added to a single html element");
                        t(this, c[0])
                    }
                },
                onAdd: function(e) {
                    if (e && "string" != typeof e && (this._map = e), this.setLanguage(), this.options.localGeocoderOnly || (this.geocoderService = r(l({
                        accessToken: this.options.accessToken,
                        origin: this.options.origin
                    }))), this.options.localGeocoderOnly && !this.options.localGeocoder)
                        throw new Error("A localGeocoder function must be specified to use localGeocoderOnly mode");
                    this.eventManager = new s(this.options),
                    this._onChange = this._onChange.bind(this),
                    this._onKeyDown = this._onKeyDown.bind(this),
                    this._onPaste = this._onPaste.bind(this),
                    this._onBlur = this._onBlur.bind(this),
                    this._showButton = this._showButton.bind(this),
                    this._hideButton = this._hideButton.bind(this),
                    this._onQueryResult = this._onQueryResult.bind(this),
                    this.clear = this.clear.bind(this),
                    this._updateProximity = this._updateProximity.bind(this),
                    this._collapse = this._collapse.bind(this),
                    this._unCollapse = this._unCollapse.bind(this),
                    this._clear = this._clear.bind(this),
                    this._clearOnBlur = this._clearOnBlur.bind(this);
                    var t = this.container = document.createElement("div");
                    t.className = "mapboxgl-ctrl-geocoder mapboxgl-ctrl";
                    var c = this.createIcon("search", '<path d="M7.4 2.5c-2.7 0-4.9 2.2-4.9 4.9s2.2 4.9 4.9 4.9c1 0 1.8-.2 2.5-.8l3.7 3.7c.2.2.4.3.8.3.7 0 1.1-.4 1.1-1.1 0-.3-.1-.5-.3-.8L11.4 10c.4-.8.8-1.6.8-2.5.1-2.8-2.1-5-4.8-5zm0 1.6c1.8 0 3.2 1.4 3.2 3.2s-1.4 3.2-3.2 3.2-3.3-1.3-3.3-3.1 1.4-3.3 3.3-3.3z"/>');
                    this._inputEl = document.createElement("input"),
                    this._inputEl.type = "text",
                    this._inputEl.className = "mapboxgl-ctrl-geocoder--input",
                    this.setPlaceholder(),
                    this.options.collapsed && (this._collapse(), this.container.addEventListener("mouseenter", this._unCollapse), this.container.addEventListener("mouseleave", this._collapse), this._inputEl.addEventListener("focus", this._unCollapse)),
                    (this.options.collapsed || this.options.clearOnBlur) && this._inputEl.addEventListener("blur", this._onBlur),
                    this._inputEl.addEventListener("keydown", i(this._onKeyDown, 200)),
                    this._inputEl.addEventListener("paste", this._onPaste),
                    this._inputEl.addEventListener("change", this._onChange),
                    this.container.addEventListener("mouseenter", this._showButton),
                    this.container.addEventListener("mouseleave", this._hideButton),
                    this._inputEl.addEventListener("keyup", function(b) {
                        this.eventManager.keyevent(b, this)
                    }.bind(this));
                    var p = document.createElement("div");
                    p.classList.add("mapboxgl-ctrl-geocoder--pin-right"),
                    this._clearEl = document.createElement("button"),
                    this._clearEl.setAttribute("aria-label", "Clear"),
                    this._clearEl.addEventListener("click", this.clear),
                    this._clearEl.className = "mapboxgl-ctrl-geocoder--button";
                    var f = this.createIcon("close", '<path d="M3.8 2.5c-.6 0-1.3.7-1.3 1.3 0 .3.2.7.5.8L7.2 9 3 13.2c-.3.3-.5.7-.5 1 0 .6.7 1.3 1.3 1.3.3 0 .7-.2 1-.5L9 10.8l4.2 4.2c.2.3.7.3 1 .3.6 0 1.3-.7 1.3-1.3 0-.3-.2-.7-.3-1l-4.4-4L15 4.6c.3-.2.5-.5.5-.8 0-.7-.7-1.3-1.3-1.3-.3 0-.7.2-1 .3L9 7.1 4.8 2.8c-.3-.1-.7-.3-1-.3z"/>');
                    return this._clearEl.appendChild(f), this._loadingEl = this.createIcon("loading", '<path fill="#333" d="M4.4 4.4l.8.8c2.1-2.1 5.5-2.1 7.6 0l.8-.8c-2.5-2.5-6.7-2.5-9.2 0z"/><path opacity=".1" d="M12.8 12.9c-2.1 2.1-5.5 2.1-7.6 0-2.1-2.1-2.1-5.5 0-7.7l-.8-.8c-2.5 2.5-2.5 6.7 0 9.2s6.6 2.5 9.2 0 2.5-6.6 0-9.2l-.8.8c2.2 2.1 2.2 5.6 0 7.7z"/>'), p.appendChild(this._clearEl), p.appendChild(this._loadingEl), t.appendChild(c), t.appendChild(this._inputEl), t.appendChild(p), this._typeahead = new u(this._inputEl, [], {
                        filter: !1,
                        minLength: this.options.minLength,
                        limit: this.options.limit
                    }), this.setRenderFunction(this.options.render), this._typeahead.getItemValue = this.options.getItemValue, this.mapMarker = null, this._handleMarker = this._handleMarker.bind(this), this._map && (this.options.trackProximity && (this._updateProximity(), this._map.on("moveend", this._updateProximity)), this._mapboxgl = this.options.mapboxgl, !this._mapboxgl && this.options.marker && (console.error("No mapboxgl detected in options. Map markers are disabled. Please set options.mapboxgl."), this.options.marker = !1)), t
                },
                createIcon: function(e, t) {
                    var c = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                    if (c.setAttribute("class", "mapboxgl-ctrl-geocoder--icon mapboxgl-ctrl-geocoder--icon-" + e), c.setAttribute("viewBox", "0 0 18 18"), c.setAttribute("xml:space", "preserve"), c.setAttribute("width", 18), c.setAttribute("height", 18), "innerHTML" in c)
                        c.innerHTML = t;
                    else {
                        var p = document.createElement("div");
                        p.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
                        var b = p.firstChild.firstChild;
                        c.appendChild(b)
                    }
                    return c
                },
                onRemove: function() {
                    return this.container.parentNode.removeChild(this.container), this.options.trackProximity && this._map && this._map.off("moveend", this._updateProximity), this._removeMarker(), this._map = null, this
                },
                _onPaste: function(e) {
                    var t = (e.clipboardData || window.clipboardData).getData("text");
                    t.length >= this.options.minLength && this._geocode(t)
                },
                _onKeyDown: function(e) {
                    if (27 === e.keyCode && this.options.clearAndBlurOnEsc)
                        return this._clear(e), this._inputEl.blur();
                    var t = e.target && e.target.shadowRoot ? e.target.shadowRoot.activeElement : e.target;
                    if (!t || !t.value)
                        return this.fresh = !0, 9 !== e.keyCode && this.clear(e), this._clearEl.style.display = "none";
                    e.metaKey || -1 !== [9, 27, 37, 39, 13, 38, 40].indexOf(e.keyCode) || t.value.length >= this.options.minLength && this._geocode(t.value)
                },
                _showButton: function() {
                    this._typeahead.selected && (this._clearEl.style.display = "block")
                },
                _hideButton: function() {
                    this._typeahead.selected && (this._clearEl.style.display = "none")
                },
                _onBlur: function(e) {
                    this.options.clearOnBlur && this._clearOnBlur(e),
                    this.options.collapsed && this._collapse()
                },
                _onChange: function() {
                    var e = this._typeahead.selected;
                    if (e && JSON.stringify(e) !== this.lastSelected) {
                        var t;
                        if (this._clearEl.style.display = "none", this.options.flyTo)
                            if (e.properties && h[e.properties.short_code])
                                t = o({}, this.options.flyTo),
                                this._map && this._map.fitBounds(h[e.properties.short_code].bbox, t);
                            else if (e.bbox) {
                                var c = e.bbox;
                                t = o({}, this.options.flyTo),
                                this._map && this._map.fitBounds([[c[0], c[1]], [c[2], c[3]]], t)
                            } else {
                                var p = {
                                    zoom: this.options.zoom
                                };
                                t = o({}, p, this.options.flyTo),
                                e.center ? t.center = e.center : e.geometry && e.geometry.type && "Point" === e.geometry.type && e.geometry.coordinates && (t.center = e.geometry.coordinates),
                                this._map && this._map.flyTo(t)
                            }
                        this.options.marker && this._mapboxgl && this._handleMarker(e),
                        this._inputEl.focus(),
                        this._inputEl.scrollLeft = 0,
                        this._inputEl.setSelectionRange(0, 0),
                        this.lastSelected = JSON.stringify(e),
                        this._eventEmitter.emit("result", {
                            result: e
                        }),
                        this.eventManager.select(e, this)
                    }
                },
                _requestType: function(e, t) {
                    return e.localGeocoderOnly ? y_LOCAL : e.reverseGeocode && /^[ ]*(-?\d+\.?\d*)[, ]+(-?\d+\.?\d*)[ ]*$/.test(t) ? y_REVERSE : y_FORWARD
                },
                _setupConfig: function(e, t) {
                    const p = /[\s,]+/;
                    var f = this,
                        b = ["bbox", "limit", "proximity", "countries", "types", "language", "reverseMode", "mode", "autocomplete", "fuzzyMatch", "routing", "worldview"].reduce(function(O, k) {
                            if (void 0 === f.options[k] || null === f.options[k])
                                return O;
                            ["countries", "types", "language"].indexOf(k) > -1 ? O[k] = f.options[k].split(p) : O[k] = f.options[k];
                            const I = "number" == typeof f.options[k].longitude && "number" == typeof f.options[k].latitude;
                            if ("proximity" === k && I) {
                                const R = f.options[k].longitude,
                                    q = f.options[k].latitude;
                                O[k] = [R, q]
                            }
                            return O
                        }, {});
                    switch (e) {
                    case y_REVERSE:
                        var C = t.split(p).map(function(O) {
                            return parseFloat(O, 10)
                        }).reverse();
                        b.types && b.types[0],
                        b = o(b, {
                            query: C,
                            limit: 1
                        }),
                        ["proximity", "autocomplete", "fuzzyMatch", "bbox"].forEach(function(O) {
                            O in b && delete b[O]
                        });
                        break;
                    case y_FORWARD:
                        /^[ ]*(-?\d+\.?\d*)[, ]+(-?\d+\.?\d*)*[ ]*$/.test(t) && (t = t.replace(/,/g, " ")),
                        b = o(b, {
                            query: t
                        })
                    }
                    return b
                },
                _geocode: function(e) {
                    this.inputString = e,
                    this._loadingEl.style.display = "block",
                    this._eventEmitter.emit("loading", {
                        query: e
                    });
                    const t = this._requestType(this.options, e),
                        c = this._setupConfig(t, e);
                    var p;
                    switch (t) {
                    case y_LOCAL:
                        p = Promise.resolve();
                        break;
                    case y_FORWARD:
                        p = this.geocoderService.forwardGeocode(c).send();
                        break;
                    case y_REVERSE:
                        p = this.geocoderService.reverseGeocode(c).send()
                    }
                    var f = this.options.localGeocoder && this.options.localGeocoder(e) || [],
                        b = [],
                        C = null;
                    return p.catch(function(O) {
                        C = O
                    }.bind(this)).then(function(O) {
                        this._loadingEl.style.display = "none";
                        var k = {};
                        return O ? "200" == O.statusCode && ((k = O.body).request = O.request, k.headers = O.headers) : k = {
                            type: "FeatureCollection",
                            features: []
                        }, k.config = c, this.fresh && (this.eventManager.start(this), this.fresh = !1), k.features = k.features ? f.concat(k.features) : f, this.options.externalGeocoder ? (b = this.options.externalGeocoder(e, k.features) || []).then(function(I) {
                            return k.features = k.features ? I.concat(k.features) : I, k
                        }, function() {
                            return k
                        }) : k
                    }.bind(this)).then(function(O) {
                        if (C)
                            throw C;
                        this.options.filter && O.features.length && (O.features = O.features.filter(this.options.filter)),
                        O.features.length ? (this._clearEl.style.display = "block", this._eventEmitter.emit("results", O), this._typeahead.update(O.features)) : (this._clearEl.style.display = "none", this._typeahead.selected = null, this._renderNoResults(), this._eventEmitter.emit("results", O))
                    }.bind(this)).catch(function(O) {
                        this._loadingEl.style.display = "none",
                        f.length && this.options.localGeocoder || b.length && this.options.externalGeocoder ? (this._clearEl.style.display = "block", this._typeahead.update(f)) : (this._clearEl.style.display = "none", this._typeahead.selected = null, this._renderError()),
                        this._eventEmitter.emit("results", {
                            features: f
                        }),
                        this._eventEmitter.emit("error", {
                            error: O
                        })
                    }.bind(this)), p
                },
                _clear: function(e) {
                    e && e.preventDefault(),
                    this._inputEl.value = "",
                    this._typeahead.selected = null,
                    this._typeahead.clear(),
                    this._onChange(),
                    this._clearEl.style.display = "none",
                    this._removeMarker(),
                    this.lastSelected = null,
                    this._eventEmitter.emit("clear"),
                    this.fresh = !0
                },
                clear: function(e) {
                    this._clear(e),
                    this._inputEl.focus()
                },
                _clearOnBlur: function(e) {
                    e.relatedTarget && this._clear(e)
                },
                _onQueryResult: function(e) {
                    var t = e.body;
                    if (t.features.length) {
                        var c = t.features[0];
                        this._typeahead.selected = c,
                        this._inputEl.value = c.place_name,
                        this._onChange()
                    }
                },
                _updateProximity: function() {
                    if (this._map)
                        if (this._map.getZoom() > 9) {
                            var e = this._map.getCenter().wrap();
                            this.setProximity({
                                longitude: e.lng,
                                latitude: e.lat
                            })
                        } else
                            this.setProximity(null)
                },
                _collapse: function() {
                    this._inputEl.value || this._inputEl === document.activeElement || this.container.classList.add("mapboxgl-ctrl-geocoder--collapsed")
                },
                _unCollapse: function() {
                    this.container.classList.remove("mapboxgl-ctrl-geocoder--collapsed")
                },
                query: function(e) {
                    return this._geocode(e).then(this._onQueryResult), this
                },
                _renderError: function() {
                    this._renderMessage("<div class='mapbox-gl-geocoder--error'>There was an error reaching the server</div>")
                },
                _renderNoResults: function() {
                    this._renderMessage("<div class='mapbox-gl-geocoder--error mapbox-gl-geocoder--no-results'>No results found</div>")
                },
                _renderMessage: function(e) {
                    this._typeahead.update([]),
                    this._typeahead.selected = null,
                    this._typeahead.clear(),
                    this._typeahead.renderError(e)
                },
                _getPlaceholderText: function() {
                    if (this.options.placeholder)
                        return this.options.placeholder;
                    if (this.options.language) {
                        var e = this.options.language.split(",")[0],
                            t = m.language(e),
                            c = d.placeholder[t];
                        if (c)
                            return c
                    }
                    return "Search"
                },
                setInput: function(e) {
                    return this._inputEl.value = e, this._typeahead.selected = null, this._typeahead.clear(), e.length >= this.options.minLength && this._geocode(e), this
                },
                setProximity: function(e) {
                    return this.options.proximity = e, this
                },
                getProximity: function() {
                    return this.options.proximity
                },
                setRenderFunction: function(e) {
                    return e && "function" == typeof e && (this._typeahead.render = e), this
                },
                getRenderFunction: function() {
                    return this._typeahead.render
                },
                setLanguage: function(e) {
                    var t = navigator.language || navigator.userLanguage || navigator.browserLanguage;
                    return this.options.language = e || this.options.language || t, this
                },
                getLanguage: function() {
                    return this.options.language
                },
                getZoom: function() {
                    return this.options.zoom
                },
                setZoom: function(e) {
                    return this.options.zoom = e, this
                },
                getFlyTo: function() {
                    return this.options.flyTo
                },
                setFlyTo: function(e) {
                    return this.options.flyTo = e, this
                },
                getPlaceholder: function() {
                    return this.options.placeholder
                },
                setPlaceholder: function(e) {
                    return this.placeholder = e || this._getPlaceholderText(), this._inputEl.placeholder = this.placeholder, this._inputEl.setAttribute("aria-label", this.placeholder), this
                },
                getBbox: function() {
                    return this.options.bbox
                },
                setBbox: function(e) {
                    return this.options.bbox = e, this
                },
                getCountries: function() {
                    return this.options.countries
                },
                setCountries: function(e) {
                    return this.options.countries = e, this
                },
                getTypes: function() {
                    return this.options.types
                },
                setTypes: function(e) {
                    return this.options.types = e, this
                },
                getMinLength: function() {
                    return this.options.minLength
                },
                setMinLength: function(e) {
                    return this.options.minLength = e, this._typeahead && (this._typeahead.options.minLength = e), this
                },
                getLimit: function() {
                    return this.options.limit
                },
                setLimit: function(e) {
                    return this.options.limit = e, this._typeahead && (this._typeahead.options.limit = e), this
                },
                getFilter: function() {
                    return this.options.filter
                },
                setFilter: function(e) {
                    return this.options.filter = e, this
                },
                setOrigin: function(e) {
                    return this.options.origin = e, this.geocoderService = r(l({
                        accessToken: this.options.accessToken,
                        origin: this.options.origin
                    })), this
                },
                getOrigin: function() {
                    return this.options.origin
                },
                setAutocomplete: function(e) {
                    return this.options.autocomplete = e, this
                },
                getAutocomplete: function() {
                    return this.options.autocomplete
                },
                setFuzzyMatch: function(e) {
                    return this.options.fuzzyMatch = e, this
                },
                getFuzzyMatch: function() {
                    return this.options.fuzzyMatch
                },
                setRouting: function(e) {
                    return this.options.routing = e, this
                },
                getRouting: function() {
                    return this.options.routing
                },
                setWorldview: function(e) {
                    return this.options.worldview = e, this
                },
                getWorldview: function() {
                    return this.options.worldview
                },
                _handleMarker: function(e) {
                    if (this._map) {
                        this._removeMarker();
                        var c = o({}, {
                            color: "#4668F2"
                        }, this.options.marker);
                        return this.mapMarker = new this._mapboxgl.Marker(c), e.center ? this.mapMarker.setLngLat(e.center).addTo(this._map) : e.geometry && e.geometry.type && "Point" === e.geometry.type && e.geometry.coordinates && this.mapMarker.setLngLat(e.geometry.coordinates).addTo(this._map), this
                    }
                },
                _removeMarker: function() {
                    this.mapMarker && (this.mapMarker.remove(), this.mapMarker = null)
                },
                on: function(e, t) {
                    return this._eventEmitter.on(e, t), this
                },
                off: function(e, t) {
                    return this._eventEmitter.removeListener(e, t), this.eventManager.remove(), this
                }
            },
            _.exports = a
        }, {
            "./events": 1,
            "./exceptions": 2,
            "./localization": 4,
            "@mapbox/mapbox-sdk": 6,
            "@mapbox/mapbox-sdk/services/geocoding": 17,
            events: 26,
            "lodash.debounce": 29,
            subtag: 32,
            suggestions: 33,
            xtend: 36
        }],
        4: [function(v, _, T) {
            "use strict";
            _.exports = {
                placeholder: {
                    de: "Suche",
                    it: "Ricerca",
                    en: "Search",
                    nl: "Zoeken",
                    fr: "Chercher",
                    ca: "Cerca",
                    he: "\u05dc\u05d7\u05e4\u05e9",
                    ja: "\u30b5\u30fc\u30c1",
                    lv: "Mekl\u0113t",
                    pt: "Procurar",
                    sr: "\u041f\u0440\u0435\u0442\u0440\u0430\u0433\u0430",
                    zh: "\u641c\u7d22",
                    cs: "Vyhled\xe1v\xe1n\xed",
                    hu: "Keres\xe9s",
                    ka: "\u10eb\u10d8\u10d4\u10d1\u10d0",
                    nb: "S\xf8ke",
                    sk: "Vyh\u013ead\xe1vanie",
                    th: "\u0e04\u0e49\u0e19\u0e2b\u0e32",
                    fi: "Hae",
                    is: "Leita",
                    ko: "\uc218\uc0c9",
                    pl: "Szukaj",
                    sl: "Iskanje",
                    fa: "\u062c\u0633\u062a\u062c\u0648",
                    ru: "\u041f\u043e\u0438\u0441\u043a"
                }
            }
        }, {}],
        5: [function(v, _, T) {
            "use strict";
            function a(t) {
                var c = Array.isArray(t),
                    p = function(f) {
                        return c ? t[f] : t
                    };
                return function(f) {
                    var b = u(e.plainArray, f);
                    if (b)
                        return b;
                    if (c && f.length !== t.length)
                        return "an array with " + t.length + " items";
                    for (var C = 0; C < f.length; C++)
                        if (b = u(p(C), f[C]))
                            return [C].concat(b)
                }
            }
            function u(t, c) {
                if (null != c || t.hasOwnProperty("__required")) {
                    var p = t(c);
                    return p ? Array.isArray(p) ? p : [p] : void 0
                }
            }
            function i(t, c) {
                var p = t.length,
                    f = t[p - 1],
                    b = t.slice(0, p - 1);
                return 0 === b.length && (b = [y]), c = m(c, {
                    path: b
                }), "function" == typeof f ? f(c) : l(c, function n(t) {
                    return "must be " + function h(t) {
                        return /^an? /.test(t) ? t : /^[aeiou]/i.test(t) ? "an " + t : /^[a-z]/i.test(t) ? "a " + t : t
                    }(t) + "."
                }(f))
            }
            function o(t) {
                return t.length < 2 ? t[0] : 2 === t.length ? t.join(" or ") : t.slice(0, -1).join(", ") + ", or " + t.slice(-1)
            }
            function l(t, c) {
                return (r(t.path) ? "Item at position " : "") + (t.path.join(".") + " " + c)
            }
            function r(t) {
                return "number" == typeof t[t.length - 1] || "number" == typeof t[0]
            }
            var d = v("is-plain-obj"),
                m = v("xtend"),
                y = "value",
                e = {
                    assert: function(t, c) {
                        return c = c || {}, function(p) {
                            var f = u(t, p);
                            if (f) {
                                var b = i(f, c);
                                throw c.apiName && (b = c.apiName + ": " + b), new Error(b)
                            }
                        }
                    }
                };
            e.shape = function(t) {
                var c = function s(t) {
                    return Object.keys(t || {}).map(function(c) {
                        return {
                            key: c,
                            value: t[c]
                        }
                    })
                }(t);
                return function(p) {
                    var f = u(e.plainObject, p);
                    if (f)
                        return f;
                    for (var b, O = [], k = 0; k < c.length; k++)
                        b = c[k].key,
                        (f = u(c[k].value, p[b])) && O.push([b].concat(f));
                    return O.length < 2 ? O[0] : function(I) {
                        O = O.map(function(q) {
                            return "- " + q[0] + ": " + i(q, I).split("\n").join("\n  ")
                        });
                        var R = I.path.join(".");
                        return "The following properties" + (R === y ? "" : " of " + R) + " have invalid values:\n  " + O.join("\n  ")
                    }
                }
            },
            e.strictShape = function(t) {
                var c = e.shape(t);
                return function(p) {
                    var f = c(p);
                    if (f)
                        return f;
                    var b = Object.keys(p).reduce(function(C, O) {
                        return void 0 === t[O] && C.push(O), C
                    }, []);
                    return 0 !== b.length ? function() {
                        return "The following keys are invalid: " + b.join(", ")
                    } : void 0
                }
            },
            e.arrayOf = function(t) {
                return a(t)
            },
            e.tuple = function() {
                return a(Array.isArray(arguments[0]) ? arguments[0] : Array.prototype.slice.call(arguments))
            },
            e.required = function(t) {
                function c(p) {
                    return null == p ? function(f) {
                        return l(f, r(f.path) ? "cannot be undefined/null." : "is required.")
                    } : t.apply(this, arguments)
                }
                return c.__required = !0, c
            },
            e.oneOfType = function() {
                var t = Array.isArray(arguments[0]) ? arguments[0] : Array.prototype.slice.call(arguments);
                return function(c) {
                    var p = t.map(function(f) {
                        return u(f, c)
                    }).filter(Boolean);
                    if (p.length === t.length)
                        return p.every(function(f) {
                            return 1 === f.length && "string" == typeof f[0]
                        }) ? o(p.map(function(f) {
                            return f[0]
                        })) : p.reduce(function(f, b) {
                            return b.length > f.length ? b : f
                        })
                }
            },
            e.equal = function(t) {
                return function(c) {
                    if (c !== t)
                        return JSON.stringify(t)
                }
            },
            e.oneOf = function() {
                var t = Array.isArray(arguments[0]) ? arguments[0] : Array.prototype.slice.call(arguments),
                    c = t.map(function(p) {
                        return e.equal(p)
                    });
                return e.oneOfType.apply(this, c)
            },
            e.range = function(t) {
                var c = t[0],
                    p = t[1];
                return function(f) {
                    if (u(e.number, f) || f < c || f > p)
                        return "number between " + c + " & " + p + " (inclusive)"
                }
            },
            e.any = function() {},
            e.boolean = function(t) {
                if ("boolean" != typeof t)
                    return "boolean"
            },
            e.number = function(t) {
                if ("number" != typeof t)
                    return "number"
            },
            e.plainArray = function(t) {
                if (!Array.isArray(t))
                    return "array"
            },
            e.plainObject = function(t) {
                if (!d(t))
                    return "object"
            },
            e.string = function(t) {
                if ("string" != typeof t)
                    return "string"
            },
            e.func = function(t) {
                if ("function" != typeof t)
                    return "function"
            },
            e.validate = u,
            e.processMessage = i,
            _.exports = e
        }, {
            "is-plain-obj": 28,
            xtend: 36
        }],
        6: [function(v, _, T) {
            "use strict";
            var a = v("./lib/client");
            _.exports = a
        }, {
            "./lib/client": 7
        }],
        7: [function(v, _, T) {
            "use strict";
            function a(n) {
                o.call(this, n)
            }
            var i = v("./browser-layer"),
                o = v("../classes/mapi-client");
            a.prototype = Object.create(o.prototype),
            a.prototype.constructor = a,
            a.prototype.sendRequest = i.browserSend,
            a.prototype.abortRequest = i.browserAbort,
            _.exports = function u(n) {
                return new a(n)
            }
        }, {
            "../classes/mapi-client": 9,
            "./browser-layer": 8
        }],
        8: [function(v, _, T) {
            "use strict";
            function i(y) {
                var e = y.total,
                    t = y.loaded;
                return {
                    total: e,
                    transferred: t,
                    percent: 100 * t / e
                }
            }
            function o(y, e) {
                return new Promise(function(t, c) {
                    e.onprogress = function(b) {
                        y.emitter.emit(s.EVENT_PROGRESS_DOWNLOAD, i(b))
                    };
                    var p = y.file;
                    p && (e.upload.onprogress = function(b) {
                        y.emitter.emit(s.EVENT_PROGRESS_UPLOAD, i(b))
                    }),
                    e.onerror = function(b) {
                        c(b)
                    },
                    e.onabort = function() {
                        var b = new r({
                            request: y,
                            type: s.ERROR_REQUEST_ABORTED
                        });
                        c(b)
                    },
                    e.onload = function() {
                        if (delete m[y.id], e.status < 200 || e.status >= 400) {
                            var b = new r({
                                request: y,
                                body: e.response,
                                statusCode: e.status
                            });
                            c(b)
                        } else
                            t(e)
                    };
                    var f = y.body;
                    "string" == typeof f ? e.send(f) : f ? e.send(JSON.stringify(f)) : p ? e.send(p) : e.send(),
                    m[y.id] = e
                }).then(function(t) {
                    return function u(y, e) {
                        return new l(y, {
                            body: e.response,
                            headers: d(e.getAllResponseHeaders()),
                            statusCode: e.status
                        })
                    }(y, t)
                })
            }
            function n(y, e) {
                var t = y.url(e),
                    c = new window.XMLHttpRequest;
                return c.open(y.method, t), Object.keys(y.headers).forEach(function(p) {
                    c.setRequestHeader(p, y.headers[p])
                }), c
            }
            var l = v("../classes/mapi-response"),
                r = v("../classes/mapi-error"),
                s = v("../constants"),
                d = v("../helpers/parse-headers"),
                m = {};
            _.exports = {
                browserAbort: function a(y) {
                    var e = m[y.id];
                    e && (e.abort(), delete m[y.id])
                },
                sendRequestXhr: o,
                browserSend: function h(y) {
                    return Promise.resolve().then(function() {
                        var e = n(y, y.client.accessToken);
                        return o(y, e)
                    })
                },
                createRequestXhr: n
            }
        }, {
            "../classes/mapi-error": 10,
            "../classes/mapi-response": 12,
            "../constants": 13,
            "../helpers/parse-headers": 14
        }],
        9: [function(v, _, T) {
            "use strict";
            function a(n) {
                if (!n || !n.accessToken)
                    throw new Error("Cannot create a client without an access token");
                u(n.accessToken),
                this.accessToken = n.accessToken,
                this.origin = n.origin || o.API_ORIGIN
            }
            var u = v("@mapbox/parse-mapbox-token"),
                i = v("./mapi-request"),
                o = v("../constants");
            a.prototype.createRequest = function(n) {
                return new i(this, n)
            },
            _.exports = a
        }, {
            "../constants": 13,
            "./mapi-request": 11,
            "@mapbox/parse-mapbox-token": 23
        }],
        10: [function(v, _, T) {
            "use strict";
            var u = v("../constants");
            _.exports = function a(i) {
                var o,
                    n = i.type || u.ERROR_HTTP;
                if (i.body)
                    try {
                        o = JSON.parse(i.body)
                    } catch (l) {
                        o = i.body
                    }
                else
                    o = null;
                var h = i.message || null;
                h || ("string" == typeof o ? h = o : o && "string" == typeof o.message ? h = o.message : n === u.ERROR_REQUEST_ABORTED && (h = "Request aborted")),
                this.message = h,
                this.type = n,
                this.statusCode = i.statusCode || null,
                this.request = i.request,
                this.body = o
            }
        }, {
            "../constants": 13
        }],
        11: [function(v, _, T) {
            "use strict";
            function a(r, s) {
                if (!r)
                    throw new Error("MapiRequest requires a client");
                if (!s || !s.path || !s.method)
                    throw new Error("MapiRequest requires an options object with path and method properties");
                var d = {};
                s.body && (d["content-type"] = "application/json");
                var m = i(d, s.headers),
                    y = Object.keys(m).reduce(function(e, t) {
                        return e[t.toLowerCase()] = m[t], e
                    }, {});
                this.id = l++,
                this._options = s,
                this.emitter = new o,
                this.client = r,
                this.response = null,
                this.error = null,
                this.sent = !1,
                this.aborted = !1,
                this.path = s.path,
                this.method = s.method,
                this.origin = s.origin || r.origin,
                this.query = s.query || {},
                this.params = s.params || {},
                this.body = s.body || null,
                this.file = s.file || null,
                this.encoding = s.encoding || "utf8",
                this.sendFileAs = s.sendFileAs || null,
                this.headers = y
            }
            var u = v("@mapbox/parse-mapbox-token"),
                i = v("xtend"),
                o = v("eventemitter3"),
                n = v("../helpers/url-utils"),
                h = v("../constants"),
                l = 1;
            a.prototype.url = function(r) {
                var s = n.prependOrigin(this.path, this.origin);
                s = n.appendQueryObject(s, this.query);
                var d = this.params,
                    m = null == r ? this.client.accessToken : r;
                if (m) {
                    s = n.appendQueryParam(s, "access_token", m);
                    var y = u(m).user;
                    d = i({
                        ownerId: y
                    }, d)
                }
                return s = n.interpolateRouteParams(s, d)
            },
            a.prototype.send = function() {
                var r = this;
                if (r.sent)
                    throw new Error("This request has already been sent. Check the response and error properties. Create a new request with clone().");
                return r.sent = !0, r.client.sendRequest(r).then(function(s) {
                    return r.response = s, r.emitter.emit(h.EVENT_RESPONSE, s), s
                }, function(s) {
                    throw r.error = s, r.emitter.emit(h.EVENT_ERROR, s), s
                })
            },
            a.prototype.abort = function() {
                this._nextPageRequest && (this._nextPageRequest.abort(), delete this._nextPageRequest),
                this.response || this.error || this.aborted || (this.aborted = !0, this.client.abortRequest(this))
            },
            a.prototype.eachPage = function(r) {
                function s(e) {
                    r(null, e, function t() {
                        delete y._nextPageRequest;
                        var c = e.nextPage();
                        c && (y._nextPageRequest = c, m(c))
                    })
                }
                function d(e) {
                    r(e, null, function() {})
                }
                function m(e) {
                    e.send().then(s, d)
                }
                var y = this;
                m(this)
            },
            a.prototype.clone = function() {
                return this._extend()
            },
            a.prototype._extend = function(r) {
                var s = i(this._options, r);
                return new a(this.client, s)
            },
            _.exports = a
        }, {
            "../constants": 13,
            "../helpers/url-utils": 16,
            "@mapbox/parse-mapbox-token": 23,
            eventemitter3: 25,
            xtend: 36
        }],
        12: [function(v, _, T) {
            "use strict";
            function a(i, o) {
                this.request = i,
                this.headers = o.headers,
                this.rawBody = o.body,
                this.statusCode = o.statusCode;
                try {
                    this.body = JSON.parse(o.body || "{}")
                } catch (n) {
                    this.body = o.body
                }
                this.links = u(this.headers.link)
            }
            var u = v("../helpers/parse-link-header");
            a.prototype.hasNextPage = function() {
                return !!this.links.next
            },
            a.prototype.nextPage = function() {
                return this.hasNextPage() ? this.request._extend({
                    path: this.links.next.url
                }) : null
            },
            _.exports = a
        }, {
            "../helpers/parse-link-header": 15
        }],
        13: [function(v, _, T) {
            "use strict";
            _.exports = {
                API_ORIGIN: "https://api.mapbox.com",
                EVENT_PROGRESS_DOWNLOAD: "downloadProgress",
                EVENT_PROGRESS_UPLOAD: "uploadProgress",
                EVENT_ERROR: "error",
                EVENT_RESPONSE: "response",
                ERROR_HTTP: "HttpError",
                ERROR_REQUEST_ABORTED: "RequestAbortedError"
            }
        }, {}],
        14: [function(v, _, T) {
            "use strict";
            _.exports = function u(i) {
                var o = {};
                return i && i.trim().split(/[\r|\n]+/).forEach(function(n) {
                    var h = function a(i) {
                        var o = i.indexOf(":");
                        return {
                            name: i.substring(0, o).trim().toLowerCase(),
                            value: i.substring(o + 1).trim()
                        }
                    }(n);
                    o[h.name] = h.value
                }), o
            }
        }, {}],
        15: [function(v, _, T) {
            "use strict";
            _.exports = function i(o) {
                return o ? o.split(/,\s*</).reduce(function(n, h) {
                    var l = function u(o) {
                        var n = o.match(/<?([^>]*)>(.*)/);
                        if (!n)
                            return null;
                        var h = n[1],
                            l = n[2].split(";"),
                            r = null,
                            s = l.reduce(function(d, m) {
                                var y = function a(o) {
                                    var n = o.match(/\s*(.+)\s*=\s*"?([^"]+)"?/);
                                    return n ? {
                                        key: n[1],
                                        value: n[2]
                                    } : null
                                }(m);
                                return y ? "rel" === y.key ? (r || (r = y.value), d) : (d[y.key] = y.value, d) : d
                            }, {});
                        return r ? {
                            url: h,
                            rel: r,
                            params: s
                        } : null
                    }(h);
                    return l && l.rel.split(/\s+/).forEach(function(r) {
                        n[r] || (n[r] = {
                            url: l.url,
                            params: l.params
                        })
                    }), n
                }, {}) : {}
            }
        }, {}],
        16: [function(v, _, T) {
            "use strict";
            function u(l) {
                return Array.isArray(l) ? function a(l) {
                    return l.map(encodeURIComponent).join(",")
                }(l) : encodeURIComponent(String(l))
            }
            function i(l, r, s) {
                if (!1 === s || null === s)
                    return l;
                var d = /\?/.test(l) ? "&" : "?",
                    m = encodeURIComponent(r);
                return void 0 !== s && "" !== s && !0 !== s && (m += "=" + u(s)), "" + l + d + m
            }
            _.exports = {
                appendQueryObject: function o(l, r) {
                    if (!r)
                        return l;
                    var s = l;
                    return Object.keys(r).forEach(function(d) {
                        var m = r[d];
                        void 0 !== m && (Array.isArray(m) && (m = m.filter(function(y) {
                            return null != y
                        }).join(",")), s = i(s, d, m))
                    }), s
                },
                appendQueryParam: i,
                prependOrigin: function n(l, r) {
                    if (!r || "http" === l.slice(0, 4))
                        return l;
                    var s = "/" === l[0] ? "" : "/";
                    return "" + r.replace(/\/$/, "") + s + l
                },
                interpolateRouteParams: function h(l, r) {
                    return r ? l.replace(/\/:([a-zA-Z0-9]+)/g, function(s, d) {
                        var m = r[d];
                        if (void 0 === m)
                            throw new Error("Unspecified route parameter " + d);
                        return "/" + u(m)
                    }) : l
                }
            }
        }, {}],
        17: [function(v, _, T) {
            "use strict";
            var a = v("xtend"),
                u = v("./service-helpers/validator"),
                i = v("./service-helpers/pick"),
                o = v("./service-helpers/stringify-booleans"),
                n = v("./service-helpers/create-service-factory"),
                h = {},
                l = ["country", "region", "postcode", "district", "place", "locality", "neighborhood", "address", "poi", "poi.landmark"];
            h.forwardGeocode = function(r) {
                u.assertShape({
                    query: u.required(u.string),
                    mode: u.oneOf("mapbox.places", "mapbox.places-permanent"),
                    countries: u.arrayOf(u.string),
                    proximity: u.coordinates,
                    types: u.arrayOf(u.oneOf(l)),
                    autocomplete: u.boolean,
                    bbox: u.arrayOf(u.number),
                    limit: u.number,
                    language: u.arrayOf(u.string),
                    routing: u.boolean,
                    fuzzyMatch: u.boolean,
                    worldview: u.string
                })(r),
                r.mode = r.mode || "mapbox.places";
                var s = o(a({
                    country: r.countries
                }, i(r, ["proximity", "types", "autocomplete", "bbox", "limit", "language", "routing", "fuzzyMatch", "worldview"])));
                return this.client.createRequest({
                    method: "GET",
                    path: "/geocoding/v5/:mode/:query.json",
                    params: i(r, ["mode", "query"]),
                    query: s
                })
            },
            h.reverseGeocode = function(r) {
                u.assertShape({
                    query: u.required(u.coordinates),
                    mode: u.oneOf("mapbox.places", "mapbox.places-permanent"),
                    countries: u.arrayOf(u.string),
                    types: u.arrayOf(u.oneOf(l)),
                    bbox: u.arrayOf(u.number),
                    limit: u.number,
                    language: u.arrayOf(u.string),
                    reverseMode: u.oneOf("distance", "score"),
                    routing: u.boolean,
                    worldview: u.string
                })(r),
                r.mode = r.mode || "mapbox.places";
                var s = o(a({
                    country: r.countries
                }, i(r, ["country", "types", "bbox", "limit", "language", "reverseMode", "routing", "worldview"])));
                return this.client.createRequest({
                    method: "GET",
                    path: "/geocoding/v5/:mode/:query.json",
                    params: i(r, ["mode", "query"]),
                    query: s
                })
            },
            _.exports = n(h)
        }, {
            "./service-helpers/create-service-factory": 18,
            "./service-helpers/pick": 20,
            "./service-helpers/stringify-booleans": 21,
            "./service-helpers/validator": 22,
            xtend: 36
        }],
        18: [function(v, _, T) {
            "use strict";
            var u = v("../../lib/classes/mapi-client"),
                i = v("../../lib/client");
            _.exports = function a(o) {
                return function(n) {
                    var h;
                    h = u.prototype.isPrototypeOf(n) ? n : i(n);
                    var l = Object.create(o);
                    return l.client = h, l
                }
            }
        }, {
            "../../lib/classes/mapi-client": 9,
            "../../lib/client": 7
        }],
        19: [function(v, _, T) {
            "use strict";
            _.exports = function a(u, i) {
                return Object.keys(u).reduce(function(o, n) {
                    return o[n] = i(n, u[n]), o
                }, {})
            }
        }, {}],
        20: [function(v, _, T) {
            "use strict";
            _.exports = function a(u, i) {
                var o = function(n, h) {
                    return -1 !== i.indexOf(n) && void 0 !== h
                };
                return "function" == typeof i && (o = i), Object.keys(u).filter(function(n) {
                    return o(n, u[n])
                }).reduce(function(n, h) {
                    return n[h] = u[h], n
                }, {})
            }
        }, {}],
        21: [function(v, _, T) {
            "use strict";
            var u = v("./object-map");
            _.exports = function a(i) {
                return u(i, function(o, n) {
                    return "boolean" == typeof n ? JSON.stringify(n) : n
                })
            }
        }, {
            "./object-map": 19
        }],
        22: [function(v, _, T) {
            (function(a) {
                (function() {
                    "use strict";
                    var h = v("xtend"),
                        l = v("@mapbox/fusspot");
                    _.exports = h(l, {
                        file: function u(r) {
                            return "undefined" != typeof window ? r instanceof a.Blob || r instanceof a.ArrayBuffer ? void 0 : "Blob or ArrayBuffer" : "string" != typeof r && void 0 === r.pipe ? "Filename or Readable stream" : void 0
                        },
                        date: function o(r) {
                            if ("boolean" == typeof r)
                                return "date";
                            try {
                                var s = new Date(r);
                                if (s.getTime && isNaN(s.getTime()))
                                    return "date"
                            } catch (d) {
                                return "date"
                            }
                        },
                        coordinates: function n(r) {
                            return l.tuple(l.number, l.number)(r)
                        },
                        assertShape: function i(r, s) {
                            return l.assert(l.strictShape(r), s)
                        }
                    })
                }).call(this)
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
            "@mapbox/fusspot": 5,
            xtend: 36
        }],
        23: [function(v, _, T) {
            "use strict";
            function i(h, l) {
                return Object.prototype.hasOwnProperty.call(h, l)
            }
            var o = v("base-64"),
                n = {};
            _.exports = function a(h) {
                if (n[h])
                    return n[h];
                var l = h.split("."),
                    r = l[0],
                    s = l[1];
                if (!s)
                    throw new Error("Invalid token");
                var d = function u(h) {
                        try {
                            return JSON.parse(o.decode(h))
                        } catch (l) {
                            throw new Error("Invalid token")
                        }
                    }(s),
                    m = {
                        usage: r,
                        user: d.u
                    };
                return i(d, "a") && (m.authorization = d.a), i(d, "exp") && (m.expires = 1e3 * d.exp), i(d, "iat") && (m.created = 1e3 * d.iat), i(d, "scopes") && (m.scopes = d.scopes), i(d, "client") && (m.client = d.client), i(d, "ll") && (m.lastLogin = d.ll), i(d, "iu") && (m.impersonator = d.iu), n[h] = m, m
            }
        }, {
            "base-64": 24
        }],
        24: [function(v, _, T) {
            (function(a) {
                (function() {
                    !function(u) {
                        var i = "object" == typeof T && T,
                            o = "object" == typeof _ && _ && _.exports == i && _,
                            n = "object" == typeof a && a;
                        n.global !== n && n.window !== n || (u = n);
                        var h = function(t) {
                            this.message = t
                        };
                        h.prototype = new Error,
                        h.prototype.name = "InvalidCharacterError";
                        var l = function(t) {
                                throw new h(t)
                            },
                            r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                            s = /[\t\n\f\r ]/g,
                            y = {
                                encode: function(t) {
                                    t = String(t),
                                    /[^\0-\xFF]/.test(t) && l("The string to be encoded contains characters outside of the Latin1 range.");
                                    for (var b, C = t.length % 3, O = "", k = -1, I = t.length - C; ++k < I;)
                                        b = (t.charCodeAt(k) << 16) + (t.charCodeAt(++k) << 8) + t.charCodeAt(++k),
                                        O += r.charAt(b >> 18 & 63) + r.charAt(b >> 12 & 63) + r.charAt(b >> 6 & 63) + r.charAt(63 & b);
                                    return 2 == C ? (b = (t.charCodeAt(k) << 8) + t.charCodeAt(++k), O += r.charAt(b >> 10) + r.charAt(b >> 4 & 63) + r.charAt(b << 2 & 63) + "=") : 1 == C && (b = t.charCodeAt(k), O += r.charAt(b >> 2) + r.charAt(b << 4 & 63) + "=="), O
                                },
                                decode: function(t) {
                                    var c = (t = String(t).replace(s, "")).length;
                                    c % 4 == 0 && (c = (t = t.replace(/==?$/, "")).length),
                                    (c % 4 == 1 || /[^+a-zA-Z0-9\/]/.test(t)) && l("Invalid character: the string to be decoded is not correctly encoded.");
                                    for (var p, f, b = 0, C = "", O = -1; ++O < c;)
                                        f = r.indexOf(t.charAt(O)),
                                        p = b % 4 ? 64 * p + f : f,
                                        b++ % 4 && (C += String.fromCharCode(255 & p >> (-2 * b & 6)));
                                    return C
                                },
                                version: "0.1.0"
                            };
                        if (i && !i.nodeType)
                            if (o)
                                o.exports = y;
                            else
                                for (var e in y)
                                    y.hasOwnProperty(e) && (i[e] = y[e]);
                        else
                            u.base64 = y
                    }(this)
                }).call(this)
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}],
        25: [function(v, _, T) {
            "use strict";
            function a() {}
            function u(r, s, d) {
                this.fn = r,
                this.context = s,
                this.once = d || !1
            }
            function i(r, s, d, m, y) {
                if ("function" != typeof d)
                    throw new TypeError("The listener must be a function");
                var e = new u(d, m || r, y),
                    t = l ? l + s : s;
                return r._events[t] ? r._events[t].fn ? r._events[t] = [r._events[t], e] : r._events[t].push(e) : (r._events[t] = e, r._eventsCount++), r
            }
            function o(r, s) {
                0 == --r._eventsCount ? r._events = new a : delete r._events[s]
            }
            function n() {
                this._events = new a,
                this._eventsCount = 0
            }
            var h = Object.prototype.hasOwnProperty,
                l = "~";
            Object.create && (a.prototype = Object.create(null), (new a).__proto__ || (l = !1)),
            n.prototype.eventNames = function() {
                var r,
                    s,
                    d = [];
                if (0 === this._eventsCount)
                    return d;
                for (s in r = this._events)
                    h.call(r, s) && d.push(l ? s.slice(1) : s);
                return Object.getOwnPropertySymbols ? d.concat(Object.getOwnPropertySymbols(r)) : d
            },
            n.prototype.listeners = function(r) {
                var s = l ? l + r : r,
                    d = this._events[s];
                if (!d)
                    return [];
                if (d.fn)
                    return [d.fn];
                for (var m = 0, y = d.length, e = new Array(y); m < y; m++)
                    e[m] = d[m].fn;
                return e
            },
            n.prototype.listenerCount = function(r) {
                var s = l ? l + r : r,
                    d = this._events[s];
                return d ? d.fn ? 1 : d.length : 0
            },
            n.prototype.emit = function(r, s, d, m, y, e) {
                var t = l ? l + r : r;
                if (!this._events[t])
                    return !1;
                var c,
                    p,
                    f = this._events[t],
                    b = arguments.length;
                if (f.fn) {
                    switch (f.once && this.removeListener(r, f.fn, void 0, !0), b) {
                    case 1:
                        return f.fn.call(f.context), !0;
                    case 2:
                        return f.fn.call(f.context, s), !0;
                    case 3:
                        return f.fn.call(f.context, s, d), !0;
                    case 4:
                        return f.fn.call(f.context, s, d, m), !0;
                    case 5:
                        return f.fn.call(f.context, s, d, m, y), !0;
                    case 6:
                        return f.fn.call(f.context, s, d, m, y, e), !0
                    }
                    for (p = 1, c = new Array(b - 1); p < b; p++)
                        c[p - 1] = arguments[p];
                    f.fn.apply(f.context, c)
                } else {
                    var C,
                        O = f.length;
                    for (p = 0; p < O; p++)
                        switch (f[p].once && this.removeListener(r, f[p].fn, void 0, !0), b) {
                        case 1:
                            f[p].fn.call(f[p].context);
                            break;
                        case 2:
                            f[p].fn.call(f[p].context, s);
                            break;
                        case 3:
                            f[p].fn.call(f[p].context, s, d);
                            break;
                        case 4:
                            f[p].fn.call(f[p].context, s, d, m);
                            break;
                        default:
                            if (!c)
                                for (C = 1, c = new Array(b - 1); C < b; C++)
                                    c[C - 1] = arguments[C];
                            f[p].fn.apply(f[p].context, c)
                        }
                }
                return !0
            },
            n.prototype.on = function(r, s, d) {
                return i(this, r, s, d, !1)
            },
            n.prototype.once = function(r, s, d) {
                return i(this, r, s, d, !0)
            },
            n.prototype.removeListener = function(r, s, d, m) {
                var y = l ? l + r : r;
                if (!this._events[y])
                    return this;
                if (!s)
                    return o(this, y), this;
                var e = this._events[y];
                if (e.fn)
                    e.fn !== s || m && !e.once || d && e.context !== d || o(this, y);
                else {
                    for (var t = 0, c = [], p = e.length; t < p; t++)
                        (e[t].fn !== s || m && !e[t].once || d && e[t].context !== d) && c.push(e[t]);
                    c.length ? this._events[y] = 1 === c.length ? c[0] : c : o(this, y)
                }
                return this
            },
            n.prototype.removeAllListeners = function(r) {
                var s;
                return r ? (s = l ? l + r : r, this._events[s] && o(this, s)) : (this._events = new a, this._eventsCount = 0), this
            },
            n.prototype.off = n.prototype.removeListener,
            n.prototype.addListener = n.prototype.on,
            n.prefixed = l,
            n.EventEmitter = n,
            void 0 !== _ && (_.exports = n)
        }, {}],
        26: [function(v, _, T) {
            function a() {
                this._events && Object.prototype.hasOwnProperty.call(this, "_events") || (this._events = C(null), this._eventsCount = 0),
                this._maxListeners = this._maxListeners || void 0
            }
            function u(g) {
                return void 0 === g._maxListeners ? a.defaultMaxListeners : g._maxListeners
            }
            function i(g, w, x) {
                if (w)
                    g.call(x);
                else
                    for (var E = g.length, L = t(g, E), A = 0; A < E; ++A)
                        L[A].call(x)
            }
            function o(g, w, x, E) {
                if (w)
                    g.call(x, E);
                else
                    for (var L = g.length, A = t(g, L), S = 0; S < L; ++S)
                        A[S].call(x, E)
            }
            function n(g, w, x, E, L) {
                if (w)
                    g.call(x, E, L);
                else
                    for (var A = g.length, S = t(g, A), P = 0; P < A; ++P)
                        S[P].call(x, E, L)
            }
            function h(g, w, x, E, L, A) {
                if (w)
                    g.call(x, E, L, A);
                else
                    for (var S = g.length, P = t(g, S), D = 0; D < S; ++D)
                        P[D].call(x, E, L, A)
            }
            function l(g, w, x, E) {
                if (w)
                    g.apply(x, E);
                else
                    for (var L = g.length, A = t(g, L), S = 0; S < L; ++S)
                        A[S].apply(x, E)
            }
            function r(g, w, x, E) {
                var L,
                    A,
                    S;
                if ("function" != typeof x)
                    throw new TypeError('"listener" argument must be a function');
                if ((A = g._events) ? (A.newListener && (g.emit("newListener", w, x.listener ? x.listener : x), A = g._events), S = A[w]) : (A = g._events = C(null), g._eventsCount = 0), S) {
                    if ("function" == typeof S ? S = A[w] = E ? [x, S] : [S, x] : E ? S.unshift(x) : S.push(x), !S.warned && (L = u(g)) && L > 0 && S.length > L) {
                        S.warned = !0;
                        var P = new Error("Possible EventEmitter memory leak detected. " + S.length + ' "' + String(w) + '" listeners added. Use emitter.setMaxListeners() to increase limit.');
                        P.name = "MaxListenersExceededWarning",
                        P.emitter = g,
                        P.type = w,
                        P.count = S.length,
                        "object" == typeof console && console.warn && console.warn("%s: %s", P.name, P.message)
                    }
                } else
                    S = A[w] = x,
                    ++g._eventsCount;
                return g
            }
            function s() {
                if (!this.fired)
                    switch (this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length) {
                    case 0:
                        return this.listener.call(this.target);
                    case 1:
                        return this.listener.call(this.target, arguments[0]);
                    case 2:
                        return this.listener.call(this.target, arguments[0], arguments[1]);
                    case 3:
                        return this.listener.call(this.target, arguments[0], arguments[1], arguments[2]);
                    default:
                        for (var g = new Array(arguments.length), w = 0; w < g.length; ++w)
                            g[w] = arguments[w];
                        this.listener.apply(this.target, g)
                    }
            }
            function d(g, w, x) {
                var E = {
                        fired: !1,
                        wrapFn: void 0,
                        target: g,
                        type: w,
                        listener: x
                    },
                    L = k.call(s, E);
                return L.listener = x, E.wrapFn = L, L
            }
            function m(g, w, x) {
                var E = g._events;
                if (!E)
                    return [];
                var L = E[w];
                return L ? "function" == typeof L ? x ? [L.listener || L] : [L] : x ? function c(g) {
                    for (var w = new Array(g.length), x = 0; x < w.length; ++x)
                        w[x] = g[x].listener || g[x];
                    return w
                }(L) : t(L, L.length) : []
            }
            function y(g) {
                var w = this._events;
                if (w) {
                    var x = w[g];
                    if ("function" == typeof x)
                        return 1;
                    if (x)
                        return x.length
                }
                return 0
            }
            function t(g, w) {
                for (var x = new Array(w), E = 0; E < w; ++E)
                    x[E] = g[E];
                return x
            }
            var C = Object.create || function p(g) {
                    var w = function() {};
                    return w.prototype = g, new w
                },
                O = Object.keys || function f(g) {
                    var w = [];
                    for (var x in g)
                        Object.prototype.hasOwnProperty.call(g, x) && w.push(x);
                    return x
                },
                k = Function.prototype.bind || function b(g) {
                    var w = this;
                    return function() {
                        return w.apply(g, arguments)
                    }
                };
            _.exports = a,
            a.EventEmitter = a,
            a.prototype._events = void 0,
            a.prototype._maxListeners = void 0;
            var I,
                R = 10;
            try {
                var q = {};
                Object.defineProperty && Object.defineProperty(q, "x", {
                    value: 0
                }),
                I = 0 === q.x
            } catch (g) {
                I = !1
            }
            I ? Object.defineProperty(a, "defaultMaxListeners", {
                enumerable: !0,
                get: function() {
                    return R
                },
                set: function(g) {
                    if ("number" != typeof g || g < 0 || g != g)
                        throw new TypeError('"defaultMaxListeners" must be a positive number');
                    R = g
                }
            }) : a.defaultMaxListeners = R,
            a.prototype.setMaxListeners = function(g) {
                if ("number" != typeof g || g < 0 || isNaN(g))
                    throw new TypeError('"n" argument must be a positive number');
                return this._maxListeners = g, this
            },
            a.prototype.getMaxListeners = function() {
                return u(this)
            },
            a.prototype.emit = function(g) {
                var w,
                    x,
                    E,
                    L,
                    A,
                    S,
                    P = "error" === g;
                if (S = this._events)
                    P = P && null == S.error;
                else if (!P)
                    return !1;
                if (P) {
                    if (arguments.length > 1 && (w = arguments[1]), w instanceof Error)
                        throw w;
                    var D = new Error('Unhandled "error" event. (' + w + ")");
                    throw D.context = w, D
                }
                if (!(x = S[g]))
                    return !1;
                var z = "function" == typeof x;
                switch (E = arguments.length) {
                case 1:
                    i(x, z, this);
                    break;
                case 2:
                    o(x, z, this, arguments[1]);
                    break;
                case 3:
                    n(x, z, this, arguments[1], arguments[2]);
                    break;
                case 4:
                    h(x, z, this, arguments[1], arguments[2], arguments[3]);
                    break;
                default:
                    for (L = new Array(E - 1), A = 1; A < E; A++)
                        L[A - 1] = arguments[A];
                    l(x, z, this, L)
                }
                return !0
            },
            a.prototype.addListener = function(g, w) {
                return r(this, g, w, !1)
            },
            a.prototype.on = a.prototype.addListener,
            a.prototype.prependListener = function(g, w) {
                return r(this, g, w, !0)
            },
            a.prototype.once = function(g, w) {
                if ("function" != typeof w)
                    throw new TypeError('"listener" argument must be a function');
                return this.on(g, d(this, g, w)), this
            },
            a.prototype.prependOnceListener = function(g, w) {
                if ("function" != typeof w)
                    throw new TypeError('"listener" argument must be a function');
                return this.prependListener(g, d(this, g, w)), this
            },
            a.prototype.removeListener = function(g, w) {
                var x,
                    E,
                    L,
                    A,
                    S;
                if ("function" != typeof w)
                    throw new TypeError('"listener" argument must be a function');
                if (!(E = this._events))
                    return this;
                if (!(x = E[g]))
                    return this;
                if (x === w || x.listener === w)
                    0 == --this._eventsCount ? this._events = C(null) : (delete E[g], E.removeListener && this.emit("removeListener", g, x.listener || w));
                else if ("function" != typeof x) {
                    for (L = -1, A = x.length - 1; A >= 0; A--)
                        if (x[A] === w || x[A].listener === w) {
                            S = x[A].listener,
                            L = A;
                            break
                        }
                    if (L < 0)
                        return this;
                    0 === L ? x.shift() : function e(g, w) {
                        for (var x = w, E = x + 1, L = g.length; E < L; x += 1, E += 1)
                            g[x] = g[E];
                        g.pop()
                    }(x, L),
                    1 === x.length && (E[g] = x[0]),
                    E.removeListener && this.emit("removeListener", g, S || w)
                }
                return this
            },
            a.prototype.removeAllListeners = function(g) {
                var w,
                    x,
                    E;
                if (!(x = this._events))
                    return this;
                if (!x.removeListener)
                    return 0 === arguments.length ? (this._events = C(null), this._eventsCount = 0) : x[g] && (0 == --this._eventsCount ? this._events = C(null) : delete x[g]), this;
                if (0 === arguments.length) {
                    var L,
                        A = O(x);
                    for (E = 0; E < A.length; ++E)
                        "removeListener" !== (L = A[E]) && this.removeAllListeners(L);
                    return this.removeAllListeners("removeListener"), this._events = C(null), this._eventsCount = 0, this
                }
                if ("function" == typeof (w = x[g]))
                    this.removeListener(g, w);
                else if (w)
                    for (E = w.length - 1; E >= 0; E--)
                        this.removeListener(g, w[E]);
                return this
            },
            a.prototype.listeners = function(g) {
                return m(this, g, !0)
            },
            a.prototype.rawListeners = function(g) {
                return m(this, g, !1)
            },
            a.listenerCount = function(g, w) {
                return "function" == typeof g.listenerCount ? g.listenerCount(w) : y.call(g, w)
            },
            a.prototype.listenerCount = y,
            a.prototype.eventNames = function() {
                return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : []
            }
        }, {}],
        27: [function(v, _, T) {
            !function() {
                var u = {};
                void 0 !== T ? _.exports = u : this.fuzzy = u,
                u.simpleFilter = function(i, o) {
                    return o.filter(function(n) {
                        return u.test(i, n)
                    })
                },
                u.test = function(i, o) {
                    return null !== u.match(i, o)
                },
                u.match = function(i, o, n) {
                    n = n || {};
                    var h,
                        l = 0,
                        r = [],
                        s = o.length,
                        d = 0,
                        m = 0,
                        y = n.pre || "",
                        e = n.post || "",
                        t = n.caseSensitive && o || o.toLowerCase();
                    i = n.caseSensitive && i || i.toLowerCase();
                    for (var c = 0; c < s; c++)
                        h = o[c],
                        t[c] === i[l] ? (h = y + h + e, l += 1, m += 1 + m) : m = 0,
                        d += m,
                        r[r.length] = h;
                    return l === i.length ? (d = t === i ? 1 / 0 : d, {
                        rendered: r.join(""),
                        score: d
                    }) : null
                },
                u.filter = function(i, o, n) {
                    return o && 0 !== o.length ? "string" != typeof i ? o : (n = n || {}, o.reduce(function(h, l, r, s) {
                        var d = l;
                        n.extract && (d = n.extract(l));
                        var m = u.match(i, d, n);
                        return null != m && (h[h.length] = {
                            string: m.rendered,
                            score: m.score,
                            index: r,
                            original: l
                        }), h
                    }, []).sort(function(h, l) {
                        return l.score - h.score || h.index - l.index
                    })) : []
                }
            }()
        }, {}],
        28: [function(v, _, T) {
            "use strict";
            var a = Object.prototype.toString;
            _.exports = function(u) {
                var i;
                return "[object Object]" === a.call(u) && (null === (i = Object.getPrototypeOf(u)) || i === Object.getPrototypeOf({}))
            }
        }, {}],
        29: [function(v, _, T) {
            (function(a) {
                (function() {
                    function i(R) {
                        var q = typeof R;
                        return !!R && ("object" == q || "function" == q)
                    }
                    function h(R) {
                        if ("number" == typeof R)
                            return R;
                        if (function n(R) {
                            return "symbol" == typeof R || function o(R) {
                                    return !!R && "object" == typeof R
                                }(R) && C.call(R) == s
                        }(R))
                            return r;
                        if (i(R)) {
                            var q = "function" == typeof R.valueOf ? R.valueOf() : R;
                            R = i(q) ? q + "" : q
                        }
                        if ("string" != typeof R)
                            return 0 === R ? R : +R;
                        R = R.replace(d, "");
                        var g = y.test(R);
                        return g || e.test(R) ? t(R.slice(2), g ? 2 : 8) : m.test(R) ? r : +R
                    }
                    var l = "Expected a function",
                        r = NaN,
                        s = "[object Symbol]",
                        d = /^\s+|\s+$/g,
                        m = /^[-+]0x[0-9a-f]+$/i,
                        y = /^0b[01]+$/i,
                        e = /^0o[0-7]+$/i,
                        t = parseInt,
                        c = "object" == typeof a && a && a.Object === Object && a,
                        p = "object" == typeof self && self && self.Object === Object && self,
                        f = c || p || Function("return this")(),
                        C = Object.prototype.toString,
                        O = Math.max,
                        k = Math.min,
                        I = function() {
                            return f.Date.now()
                        };
                    _.exports = function u(R, q, g) {
                        function w(j) {
                            var B = V,
                                Z = G;
                            return V = G = void 0, Q = j, U = R.apply(Z, B)
                        }
                        function x(j) {
                            return Q = j, M = setTimeout(A, q), W ? w(j) : U
                        }
                        function L(j) {
                            var B = j - F;
                            return void 0 === F || B >= q || B < 0 || H && j - Q >= $
                        }
                        function A() {
                            var j = I();
                            if (L(j))
                                return S(j);
                            M = setTimeout(A, function E(j) {
                                var J = q - (j - F);
                                return H ? k(J, $ - (j - Q)) : J
                            }(j))
                        }
                        function S(j) {
                            return M = void 0, K && V ? w(j) : (V = G = void 0, U)
                        }
                        function z() {
                            var j = I(),
                                B = L(j);
                            if (V = arguments, G = this, F = j, B) {
                                if (void 0 === M)
                                    return x(F);
                                if (H)
                                    return M = setTimeout(A, q), w(F)
                            }
                            return void 0 === M && (M = setTimeout(A, q)), U
                        }
                        var V,
                            G,
                            $,
                            U,
                            M,
                            F,
                            Q = 0,
                            W = !1,
                            H = !1,
                            K = !0;
                        if ("function" != typeof R)
                            throw new TypeError(l);
                        return q = h(q) || 0, i(g) && (W = !!g.leading, $ = (H = "maxWait" in g) ? O(h(g.maxWait) || 0, q) : $, K = "trailing" in g ? !!g.trailing : K), z.cancel = function P() {
                            void 0 !== M && clearTimeout(M),
                            Q = 0,
                            V = F = G = M = void 0
                        }, z.flush = function D() {
                            return void 0 === M ? U : S(I())
                        }, z
                    }
                }).call(this)
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}],
        30: [function(v, _, T) {
            (function(a) {
                (function() {
                    if ("production" !== a.env.NODE_ENV) {
                        if ("undefined" != typeof navigator && "ReactNative" === navigator.product)
                            throw new Error("React Native does not have a built-in secure random generator. If you don\u2019t need unpredictable IDs, you can use `nanoid/non-secure`. For secure ID install `expo-random` locally and use `nanoid/async`.");
                        if ("undefined" == typeof self || !self.crypto && !self.msCrypto)
                            throw new Error("Your browser does not have secure random generator. If you don\u2019t need unpredictable IDs, you can use nanoid/non-secure.")
                    }
                    for (var u = self.crypto || self.msCrypto, i = "-_", o = 36; o--;)
                        i += o.toString(36);
                    for (o = 36; o-- - 10;)
                        i += o.toString(36).toUpperCase();
                    _.exports = function(n) {
                        var h = "",
                            l = u.getRandomValues(new Uint8Array(n || 21));
                        for (o = n || 21; o--;)
                            h += i[63 & l[o]];
                        return h
                    }
                }).call(this)
            }).call(this, v("_process"))
        }, {
            _process: 31
        }],
        31: [function(v, _, T) {
            function a() {
                throw new Error("setTimeout has not been defined")
            }
            function u() {
                throw new Error("clearTimeout has not been defined")
            }
            function i(p) {
                if (s === setTimeout)
                    return setTimeout(p, 0);
                if ((s === a || !s) && setTimeout)
                    return s = setTimeout, setTimeout(p, 0);
                try {
                    return s(p, 0)
                } catch (f) {
                    try {
                        return s.call(null, p, 0)
                    } catch (b) {
                        return s.call(this, p, 0)
                    }
                }
            }
            function n() {
                t && y && (t = !1, y.length ? e = y.concat(e) : c = -1, e.length && h())
            }
            function h() {
                if (!t) {
                    var p = i(n);
                    t = !0;
                    for (var f = e.length; f;) {
                        for (y = e, e = []; ++c < f;)
                            y && y[c].run();
                        c = -1,
                        f = e.length
                    }
                    y = null,
                    t = !1,
                    function o(p) {
                        if (d === clearTimeout)
                            return clearTimeout(p);
                        if ((d === u || !d) && clearTimeout)
                            return d = clearTimeout, clearTimeout(p);
                        try {
                            return d(p)
                        } catch (f) {
                            try {
                                return d.call(null, p)
                            } catch (b) {
                                return d.call(this, p)
                            }
                        }
                    }(p)
                }
            }
            function l(p, f) {
                this.fun = p,
                this.array = f
            }
            function r() {}
            var s,
                d,
                m = _.exports = {};
            !function() {
                try {
                    s = "function" == typeof setTimeout ? setTimeout : a
                } catch (p) {
                    s = a
                }
                try {
                    d = "function" == typeof clearTimeout ? clearTimeout : u
                } catch (p) {
                    d = u
                }
            }();
            var y,
                e = [],
                t = !1,
                c = -1;
            m.nextTick = function(p) {
                var f = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var b = 1; b < arguments.length; b++)
                        f[b - 1] = arguments[b];
                e.push(new l(p, f)),
                1 !== e.length || t || i(h)
            },
            l.prototype.run = function() {
                this.fun.apply(null, this.array)
            },
            m.title = "browser",
            m.browser = !0,
            m.env = {},
            m.argv = [],
            m.version = "",
            m.versions = {},
            m.on = r,
            m.addListener = r,
            m.once = r,
            m.off = r,
            m.removeListener = r,
            m.removeAllListeners = r,
            m.emit = r,
            m.prependListener = r,
            m.prependOnceListener = r,
            m.listeners = function(p) {
                return []
            },
            m.binding = function(p) {
                throw new Error("process.binding is not supported")
            },
            m.cwd = function() {
                return "/"
            },
            m.chdir = function(p) {
                throw new Error("process.chdir is not supported")
            },
            m.umask = function() {
                return 0
            }
        }, {}],
        32: [function(v, _, T) {
            var a,
                i;
            a = this,
            i = function() {
                function a(r) {
                    return r.match(l) || []
                }
                function i(r) {
                    return {
                        language: (r = a(r))[1] || h,
                        extlang: r[2] || h,
                        script: r[3] || h,
                        region: r[4] || h
                    }
                }
                function o(r, s, d) {
                    Object.defineProperty(r, s, {
                        value: d,
                        enumerable: !0
                    })
                }
                function n(r, s, d) {
                    function m(y) {
                        return a(y)[r] || h
                    }
                    o(m, "pattern", s),
                    o(i, d, m)
                }
                var h = "",
                    l = /^([a-zA-Z]{2,3})(?:[_-]+([a-zA-Z]{3})(?=$|[_-]+))?(?:[_-]+([a-zA-Z]{4})(?=$|[_-]+))?(?:[_-]+([a-zA-Z]{2}|[0-9]{3})(?=$|[_-]+))?/;
                return n(1, /^[a-zA-Z]{2,3}$/, "language"), n(2, /^[a-zA-Z]{3}$/, "extlang"), n(3, /^[a-zA-Z]{4}$/, "script"), n(4, /^[a-zA-Z]{2}$|^[0-9]{3}$/, "region"), o(i, "split", function u(r) {
                    return a(r).filter(function(s, d) {
                        return s && d
                    })
                }), i
            },
            void 0 !== _ && _.exports ? _.exports = i() : a.subtag = i()
        }, {}],
        33: [function(v, _, T) {
            "use strict";
            var a = v("./src/suggestions");
            _.exports = a,
            "undefined" != typeof window && (window.Suggestions = a)
        }, {
            "./src/suggestions": 35
        }],
        34: [function(v, _, T) {
            "use strict";
            var a = function(u) {
                return this.component = u, this.items = [], this.active = 0, this.wrapper = document.createElement("div"), this.wrapper.className = "suggestions-wrapper", this.element = document.createElement("ul"), this.element.className = "suggestions", this.wrapper.appendChild(this.element), this.selectingListItem = !1, u.el.parentNode.insertBefore(this.wrapper, u.el.nextSibling), this
            };
            a.prototype.show = function() {
                this.element.style.display = "block"
            },
            a.prototype.hide = function() {
                this.element.style.display = "none"
            },
            a.prototype.add = function(u) {
                this.items.push(u)
            },
            a.prototype.clear = function() {
                this.items = [],
                this.active = 0
            },
            a.prototype.isEmpty = function() {
                return !this.items.length
            },
            a.prototype.isVisible = function() {
                return "block" === this.element.style.display
            },
            a.prototype.draw = function() {
                if (this.element.innerHTML = "", 0 !== this.items.length) {
                    for (var u = 0; u < this.items.length; u++)
                        this.drawItem(this.items[u], this.active === u);
                    this.show()
                } else
                    this.hide()
            },
            a.prototype.drawItem = function(u, i) {
                var o = document.createElement("li"),
                    n = document.createElement("a");
                i && (o.className += " active"),
                n.innerHTML = u.string,
                o.appendChild(n),
                this.element.appendChild(o),
                o.addEventListener("mousedown", function() {
                    this.selectingListItem = !0
                }.bind(this)),
                o.addEventListener("mouseup", function() {
                    this.handleMouseUp.call(this, u)
                }.bind(this))
            },
            a.prototype.handleMouseUp = function(u) {
                this.selectingListItem = !1,
                this.component.value(u.original),
                this.clear(),
                this.draw()
            },
            a.prototype.move = function(u) {
                this.active = u,
                this.draw()
            },
            a.prototype.previous = function() {
                this.move(0 === this.active ? this.items.length - 1 : this.active - 1)
            },
            a.prototype.next = function() {
                this.move(this.active === this.items.length - 1 ? 0 : this.active + 1)
            },
            a.prototype.drawError = function(u) {
                var i = document.createElement("li");
                i.innerHTML = u,
                this.element.appendChild(i),
                this.show()
            },
            _.exports = a
        }, {}],
        35: [function(v, _, T) {
            "use strict";
            var a = v("xtend"),
                u = v("fuzzy"),
                i = v("./list"),
                o = function(n, h, l) {
                    return l = l || {}, this.options = a({
                        minLength: 2,
                        limit: 5,
                        filter: !0,
                        hideOnBlur: !0
                    }, l), this.el = n, this.data = h || [], this.list = new i(this), this.query = "", this.selected = null, this.list.draw(), this.el.addEventListener("keyup", function(r) {
                        this.handleKeyUp(r.keyCode)
                    }.bind(this), !1), this.el.addEventListener("keydown", function(r) {
                        this.handleKeyDown(r)
                    }.bind(this)), this.el.addEventListener("focus", function() {
                        this.handleFocus()
                    }.bind(this)), this.el.addEventListener("blur", function() {
                        this.handleBlur()
                    }.bind(this)), this.el.addEventListener("paste", function(r) {
                        this.handlePaste(r)
                    }.bind(this)), this.render = this.options.render ? this.options.render.bind(this) : this.render.bind(this), this.getItemValue = this.options.getItemValue ? this.options.getItemValue.bind(this) : this.getItemValue.bind(this), this
                };
            o.prototype.handleKeyUp = function(n) {
                40 !== n && 38 !== n && 27 !== n && 13 !== n && 9 !== n && this.handleInputChange(this.el.value)
            },
            o.prototype.handleKeyDown = function(n) {
                switch (n.keyCode) {
                case 13:
                case 9:
                    this.list.isEmpty() || (this.list.isVisible() && n.preventDefault(), this.value(this.list.items[this.list.active].original), this.list.hide());
                    break;
                case 27:
                    this.list.isEmpty() || this.list.hide();
                    break;
                case 38:
                    this.list.previous();
                    break;
                case 40:
                    this.list.next()
                }
            },
            o.prototype.handleBlur = function() {
                !this.list.selectingListItem && this.options.hideOnBlur && this.list.hide()
            },
            o.prototype.handlePaste = function(n) {
                if (n.clipboardData)
                    this.handleInputChange(n.clipboardData.getData("Text"));
                else {
                    var h = this;
                    setTimeout(function() {
                        h.handleInputChange(n.target.value)
                    }, 100)
                }
            },
            o.prototype.handleInputChange = function(n) {
                this.query = this.normalize(n),
                this.list.clear(),
                this.query.length < this.options.minLength ? this.list.draw() : this.getCandidates(function(h) {
                    for (var l = 0; l < h.length && (this.list.add(h[l]), l !== this.options.limit - 1); l++)
                        ;
                    this.list.draw()
                }.bind(this))
            },
            o.prototype.handleFocus = function() {
                this.list.isEmpty() || this.list.show(),
                this.list.selectingListItem = !1
            },
            o.prototype.update = function(n) {
                this.data = n,
                this.handleKeyUp()
            },
            o.prototype.clear = function() {
                this.data = [],
                this.list.clear()
            },
            o.prototype.normalize = function(n) {
                return n.toLowerCase()
            },
            o.prototype.match = function(n, h) {
                return n.indexOf(h) > -1
            },
            o.prototype.value = function(n) {
                if (this.selected = n, this.el.value = this.getItemValue(n), document.createEvent) {
                    var h = document.createEvent("HTMLEvents");
                    h.initEvent("change", !0, !1),
                    this.el.dispatchEvent(h)
                } else
                    this.el.fireEvent("onchange")
            },
            o.prototype.getCandidates = function(n) {
                var h,
                    l = {
                        pre: "<strong>",
                        post: "</strong>",
                        extract: function(r) {
                            return this.getItemValue(r)
                        }.bind(this)
                    };
                this.options.filter ? h = (h = u.filter(this.query, this.data, l)).map(function(r) {
                    return {
                        original: r.original,
                        string: this.render(r.original, r.string)
                    }
                }.bind(this)) : h = this.data.map(function(r) {
                    return {
                        original: r,
                        string: this.render(r)
                    }
                }.bind(this)),
                n(h)
            },
            o.prototype.getItemValue = function(n) {
                return n
            },
            o.prototype.render = function(n, h) {
                if (h)
                    return h;
                for (var l = n.original ? this.getItemValue(n.original) : this.getItemValue(n), r = this.normalize(l), s = r.lastIndexOf(this.query); s > -1;) {
                    var d = s + this.query.length;
                    l = l.slice(0, s) + "<strong>" + l.slice(s, d) + "</strong>" + l.slice(d),
                    s = r.slice(0, s).lastIndexOf(this.query)
                }
                return l
            },
            o.prototype.renderError = function(n) {
                this.list.drawError(n)
            },
            _.exports = o
        }, {
            "./list": 34,
            fuzzy: 27,
            xtend: 36
        }],
        36: [function(v, _, T) {
            _.exports = function a() {
                for (var i = {}, o = 0; o < arguments.length; o++) {
                    var n = arguments[o];
                    for (var h in n)
                        u.call(n, h) && (i[h] = n[h])
                }
                return i
            };
            var u = Object.prototype.hasOwnProperty
        }, {}]
    }, {}, [3])(3)
});
