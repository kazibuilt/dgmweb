import {
    g as w,
    a as D,
    S as T,
    A as W,
    O as Ie,
    _ as $e
} from "./main.js";
import {
    I as we
} from "./main-InsertVideo.js";
import {
    I as Se
} from "./main-ImgParallax.js";
import "https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.3/jquery.validate.min.js";

function R() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}
w.registerPlugin(T, D);
class Le {
    constructor() {
        this.hero = $("header"), this.rowsScroll(), this.imageScroll(), this.chanceTheme();
        let e = this.hero.find(".hero");
        w.timeline({
            scrollTrigger: {
                trigger: this.hero.parent(),
                start: "bottom center",
                end: "bottom top",
                scrub: !0
            },
            defaults: {
                ease: "none",
                force3D: !0
            },
            duration: 1
        }).to(e, {
            opacity: 0
        }, 0)
    }
    rowsScroll() {
        const e = window.innerWidth <= 768;
        this.hero.find(".hero__row");
        let t = this.hero.find(".hero__row").eq(0),
            i = this.hero.find(".hero__row").eq(1),
            r = this.hero.find(".hero__row").eq(2),
            n = this.hero.find(".hero__row").eq(3),
            o = w.timeline({
                scrollTrigger: {
                    trigger: this.hero.parent(),
                    start: "bottom bottom+=120%",
                    end: () => `+=${window.innerHeight*4}`,
                    scrub: !0
                },
                defaults: {
                    ease: "none",
                    force3D: !0
                },
                duration: 1
            }),
            l = e ? "40%" : "8%";
        o.to(t, {
            x: "+=" + l,
            force3D: !0
        }, 0).to(i, {
            x: "-=" + l,
            force3D: !0
        }, "<").to(r, {
            x: "+=" + l,
            force3D: !0
        }, "<").to(n, {
            x: "-=" + l,
            force3D: !0
        }, "<")
    }
    circleVideos() {
        this.hero.find(".hero__circle").each((t, i) => {
            let r = $(i);
            new we(r)
        })
    }
    imageScroll() {
        let e = this.hero.find(".hero__video"),
            t = this.hero.find(".hero__rows"),
            r = this.hero.find(".hero__circle").find("img"),
            n = this.hero.find(".hero__subtitle").children(),
            o = new D(n, {
                type: "lines, chars"
            });
        w.set(n.parent(), {
            autoAlpha: 1
        }), w.set(t, {
            "--scale": 20
        });
        let l = w.timeline({
            scrollTrigger: {
                trigger: this.hero.parent(),
                start: "top top",
                end: "bottom bottom",
                scrub: !0
            },
            defaults: {
                ease: "none"
            }
        });
        const a = w.timeline({
                defaults: {
                    force3D: !0
                }
            }),
            d = .5;
        r.each(function (u, h) {
            const f = Math.random() * d;
            a.fromTo(h, {
                opacity: 0
            }, {
                opacity: 1,
                duration: .5
            }, f)
        });
        let c = R() ? "power3" : "power4";
        l.to(e, {
            "--cliping": "0%",
            duration: R() ? 5 : 5.3,
            ease: c
        }, 0).to(t, {
            "--scale": 1,
            duration: R() ? 4.3 : 4,
            ease: "power2"
        }, "<").add(a, 0).to(e, {
            opacity: 0,
            duration: .08
        }, R() ? 2.35 : 2.65).fromTo(o.chars, {
            opacity: 0
        }, {
            opacity: 1,
            stagger: .02,
            duration: 1.6
        }, 2.4)
    }
    chanceTheme() {
        let e = this.hero.parent();
        T.create({
            trigger: e,
            start: () => `bottom ${window.innerHeight/2-10}`,
            onLeaveBack: () => {
                $("body").attr("theme", "black")
            }
        })
    }
}
w.registerPlugin(T, D);
class Ae {
    constructor() {
        let e = $(".horizontal"),
            t = e.find(".horizontal__list"),
            i = 46 / 1440 * 100,
            r = e.find(".horizontal__img");
        this.isMobile = window.innerWidth <= 768;
        const n = () => {
                let d = 0;
                return t.children().each(function () {
                    d += $(this).outerWidth()
                }), d += i * window.innerWidth / 100 * 2, -(d - window.innerWidth)
            },
            o = w.to(t, {
                x: n,
                ease: "none",
                force3D: !0
            });
        T.create({
            trigger: e,
            start: "top top",
            end: "bottom bottom",
            animation: o,
            scrub: !0
        });
        const l = [.0025, .004, .0075, .0035, .005, .006, .008, .009];
        let a = () => l.length > 0 ? l.shift() : 0;
        r.each((d, c) => {
            let u = $(c);
            u.find("img");
            let h = a(),
                f = w.timeline();
            this.isMobile || f.to(u, {
                x: (p, g) => -T.maxScroll(window) * h,
                ease: "none"
            }), T.create({
                trigger: u,
                containerAnimation: o,
                scrub: 1,
                start: "left 100%",
                end: "left 0%",
                animation: f
            })
        }), this.removeLastImg(r, e), !this.isMobile && this.counter(o, e)
    }
    removeLastImg(e, t) {
        let i = w.to(e, {
            opacity: 0,
            duration: .5,
            ease: "none"
        });
        T.create({
            trigger: t,
            start: "bottom 80%",
            end: "bottom 40%",
            scrub: !0,
            animation: i
        })
    }
    counter(e, t) {
        let i = [t.find(".horizontal__content").eq(1), t.find(".horizontal__content").eq(2), t.find(".horizontal__content").eq(3)];

        function r(n) {
            const o = n.match(/([\d,\.]+)\s*([^0-9]*)/);
            return {
                numericValue: o ? parseFloat(o[1].replace(",", "")) : 0,
                suffix: o ? o[2] : ""
            }
        }
        i.forEach(n => {
            let o = $(n),
                l = o.children().eq(0),
                a = l.text(),
                {
                    numericValue: d,
                    suffix: c
                } = r(a);
            a = d;
            let u = c === "%" ? .5 : .8,
                h = {
                    value: a * u
                },
                f = w.fromTo(h, {
                    value: a * u
                }, {
                    value: a,
                    duration: .8,
                    onUpdate: () => {
                        let p;
                        Number.isInteger(d) ? p = Math.round(h.value).toLocaleString() : p = h.value.toFixed(1), p += c, l.text(p)
                    },
                    paused: !0
                });
            T.create({
                trigger: o,
                containerAnimation: e,
                start: "left 70%",
                onEnter: () => f.play()
            })
        })
    }
}
w.registerPlugin(Ie, T, D);
class ke {
    constructor() {
        this.mm = w.matchMedia(), this.isDesktop = "(min-width: 480px)", this.isMob = "(max-width: 5000px)";
        const e = new W;
        this.lenis = e.scroll.lenis, this.sliderSection = $("section:has(.slider)"), this.slider = this.sliderSection.find(".slider"), this.visible = !(this.sliderSection.find(".slider").parents("section.hide").length > 0), this.visible && (this.allowScrollTop = !0, this.allowScroll = !0, this.observer, this.currentIndex = 0, this.animating, this.bot = $(".slider__bot"), this.btns = $(".slider__btns--item"), this.items = this.sliderSection.find(".slider__item"), this.titles = this.sliderSection.find(".slider__titles").find(".slider__title--item"), this.titlesSplit = new D(this.titles.children(), {
            type: "lines, chars",
            charsClass: "slider__char",
            linesClass: "slider__line"
        }), this.items.eq(this.currentIndex).addClass("active"), this.addIndexes(), this.allowScrolling(), this.mobScroll(), this.charsDelay(), this.chengeThemeOnScroll(), this.titles.eq(0).addClass("active"))
    }
    openFirstTitle() {
        let e = w.timeline({
                paused: !0,
                defaults: {
                    duration: .8,
                    ease: "power2",
                    stagger: .06
                }
            }),
            t = this.titles.eq(0).find(this.titlesSplit.chars);
        e.to(t, {
            opacity: 1,
            rotateX: 0,
            yPercent: 0,
            stagger: .03
        }), T.create({
            trigger: this.titles.eq(0),
            start: "top 80%",
            onEnter: () => e.play(),
            once: !0
        })
    }
    scrollTop() {
        this.allowScrollTop == !0 && (this.lenis.scrollTo(this.slider[0], {
            force: !0,
            immediate: !0
        }), this.allowScrollTop = !1)
    }
    addIndexes() {
        this.items.each((e, t) => {
            let i = $(t);
            i.attr("index", e), i.css("--index", e)
        })
    }
    changeTheme(e) {
        let t = e.attr("slide-theme");
        $("body").attr("theme", t)
    }
    charsAnimation(e, t) {
        let i = t.index(),
            n = this.titles.eq(i).find(this.titlesSplit.chars);
        e.to(this.titlesSplit.chars, {
            opacity: 0,
            duration: .1
        }, 0), e.to(this.titlesSplit.chars, {
            rotateX: 45,
            yPercent: 100,
            duration: 0
        }, .1), e.to(n, {
            opacity: 1,
            rotateX: 0,
            yPercent: 0,
            stagger: .03
        }, .1), this.bot.removeClass("active"), this.bot.eq(i).addClass("active")
    }
    animation(e) {
        this.animating = !0;
        const t = (r, n) => {
            let o = null;
            if (r > .1)
                if (o !== !0) {
                    this.items.removeClass("active");
                    let l = $('.slider__item[index="0"]');
                    l.addClass("active"), this.changeTheme(l), this.charsAnimation(n, l), o = !0
                } else return
        };
        let i = w.timeline({
            defaults: {
                duration: .8,
                ease: "back.out(4)"
            },
            onComplete: () => this.animating = !1,
            onUpdate: () => t(i.progress(), i)
        });
        this.items.each((r, n) => {
            let o = $(n),
                l = parseInt(o.attr("index"));
            i.to(o, {
                "--index": `+=${e}`
            }, 0), o.attr("index", `${l+e}`)
        })
    }
    allowScrolling() {
        T.create({
            trigger: this.slider,
            start: () => `top ${window.innerHeight*2}`,
            end: () => `bottom -${window.innerHeight}`,
            onEnter: () => this.allowScrollTop = !0,
            onLeave: () => this.allowScrollTop = !0
        })
    }
    mobAnimation(e) {
        let t = this.items.eq(e);
        this.items.removeClass("active"), t.addClass("active"), this.titles.eq(e).addClass("active").siblings().removeClass("active"), this.bot.removeClass("active"), this.bot.eq(e).addClass("active"), this.btns.removeClass("active"), this.btns.eq(e).addClass("active"), this.changeTheme(t);
        let i = w.timeline({
            defaults: {
                duration: 1.2,
                ease: "power4.out"
            }
        });
        this.items.each((r, n) => {
            let o = $(n),
                l = r - e;
            i.to(o, {
                "--index": `${l}`
            }, 0), o.attr("index", `${l}`)
        })
    }
    mobScroll() {
        this.mm.add(this.isMob, () => {
            this.slider.append('<div class="slider__triggers"></div>'), this.triggersParent = this.slider.find(".slider__triggers"), this.items.each((e, t) => {
                this.triggersParent.append(`<div class="slider__trigger" index="${e}"></div>`)
            }), this.trigger = this.slider.find(".slider__trigger"), this.trigger.each((e, t) => {
                let i = $(t);
                T.create({
                    trigger: i,
                    start: "top top",
                    end: "bottom bottom",
                    onEnter: () => {
                        this.mobAnimation(e), e != 0 && (this.lenis.stop(), setTimeout(() => this.lenis.start(), 500))
                    },
                    onEnterBack: () => {
                        if (this.mobAnimation(e), e != this.trigger.length - 1) {
                            if ($("body").hasClass("force-scroll-top")) return;
                            this.lenis.stop(), setTimeout(() => this.lenis.start(), 500)
                        }
                    }
                })
            })
        })
    }
    charsDelay() {
        this.titles.each((e, t) => {
            $(t).find(this.titlesSplit.chars).each((n, o) => {
                $(o).css("--delay", `${n*.03+.1}s`)
            })
        }), this.titles.each((e, t) => {
            $(t).find(this.titlesSplit.lines).each((n, o) => {
                $(o).css("--delay", `${n*.03+.1}s`)
            })
        })
    }
    chengeThemeOnScroll() {
        T.create({
            trigger: this.sliderSection,
            start: () => `top ${window.innerHeight/2+10}`,
            end: () => `bottom ${window.innerHeight/2-10}`,
            onEnter: () => $("body").attr("theme", `${this.items.eq(0).attr("slide-theme")}`),
            onEnterBack: () => $("body").attr("theme", `${this.items.last().attr("slide-theme")}`)
        })
    }
}
class Oe {
    constructor() {
        this.list = $(".meet__list"), this.item = $(".meet__item"), this.imgMove(), this.showImg();
        let e = 0,
            t;
        document.addEventListener("mousemove", r => {
            const n = r.clientY;
            t = i(n), e = n
        });

        function i(r) {
            return r > e
        }
        document.querySelectorAll(".meet__row").forEach(r => {
            r.addEventListener("mouseenter", n => {
                w.set(r, {
                    "--transform-origin": t ? "top center" : "bottom center"
                })
            }), r.addEventListener("mouseleave", n => {
                w.set(r, {
                    "--transform-origin": t ? "bottom center" : "top center"
                })
            })
        })
    }
    showImg() {
        this.item.each((e, t) => {
            let i = $(t),
                r = i.find(".meet__map");
            i.on("mouseenter", () => r.addClass("show")), i.on("mouseleave", () => r.removeClass("show"))
        })
    }
    imgMove() {
        let e, t, i = this.item.find(".meet__map");
        const r = n => {
            e = (n.clientX / window.innerWidth - .5) * 100 / 3.5, t = ((n.clientY - this.list[0].getBoundingClientRect().top) / this.list[0].clientHeight - .5) * 100, w.to(i, {
                duration: .3,
                "--x": e + "%",
                "--y": t + "%"
            })
        };
        this.list[0].addEventListener("mousemove", n => r(n))
    }
}
w.registerPlugin(T, D);
class ze {
    constructor() {
        this.item = $(".article__item"), this.item.each((e, t) => {
            let i = $(t),
                r = i.parent();
            w.timeline({
                scrollTrigger: {
                    trigger: r,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: !0
                }
            }).to(i, {
                "--y": e % 2 == 0 ? "10%" : "-10%"
            }, 0)
        }), this.hover()
    }
    hover() {
        this.item.each((e, t) => {
            let i = $(t),
                r = i.find(".article__tag"),
                n = r.find(".f-16").eq(0),
                o = r.find(".f-16").eq(1),
                l = new D(n, {
                    type: "chars"
                }),
                a = new D(o, {
                    type: "chars"
                }),
                d = w.timeline({
                    paused: !0,
                    defaults: {
                        duration: .6,
                        ease: "power2",
                        stagger: .02
                    }
                });
            d.to(l.chars, {
                yPercent: -100
            }).fromTo(a.chars, {
                yPercent: 100
            }, {
                yPercent: 0
            }, .15), i.on("mouseenter", () => d.restart())
        })
    }
}
w.registerPlugin(T, D);
class De {
    constructor() {
        this.app = new W, this.section = $(".carousel__container"), this.carousel = $(".carousel__borderwrap"), this.slides = this.carousel.find(".cases__item"), this.controls = this.section.find(".controls"), this.nextButton = this.controls.find(".forward_button"), this.prevButton = this.controls.find(".back_button"), this.currentSlide = 0, this.autoPlay = !0, this.setupPagination(), this.setActiveSlide(0), this.setupTitleAnimatins(), this.initEvents()
    }
    setupPagination() {
        let e = this.controls.find(".indicators");
        this.slides.each((t, i) => {
            let r = '<button class="pagination__dot"></button>';
            e.append(r), this.controls.find(".pagination__dot").eq(t).on("click", () => this.changeSlide(t))
        })
    }
    setupTitleAnimatins() {
        this.title = this.slides.find(".f-32"), this.titleSplit = new D(this.title, {
            type: "lines, chars",
            charsClass: "slider__char"
        }), this.title.each((e, t) => {
            $(t).find(this.titleSplit.chars).each((n, o) => {
                $(o).css("--delay", `${n*.01+.1}s`)
            })
        })
    }
    changeTheme(e) {
        let t = e.attr("slide-theme");
        this.carousel.attr("theme", t)
    }
    setActiveSlide(e) {
        let t = this.slides.eq(e);
        this.controls.find(".pagination__dot").eq(e).addClass("active"), t.addClass("active"), this.changeTheme(t), this.getheight()
    }
    changeSlide(e) {
        this.slides.eq(this.currentSlide).removeClass("active"), this.controls.find(".pagination__dot").eq(this.currentSlide).removeClass("active"), this.currentSlide = e, this.setActiveSlide(e)
    }
    showNextSlide() {
        let e = (this.currentSlide + 1) % this.slides.length;
        this.changeSlide(e)
    }
    showPreviousSlide() {
        let e = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.changeSlide(e)
    }
    initEvents() {
        this.nextButton.on("click", () => this.showNextSlide()), this.prevButton.on("click", () => this.showPreviousSlide()), this.controls.on("mouseenter", () => this.autoPlay = !1), this.controls.on("mouseleave", () => this.autoPlay = !0)
    }
    startAutoPlay() {
        T.create({
            trigger: this.carousel,
            start: "top bottom",
            onEnter: () => this.autoPlay = !0,
            onLeaveBack: () => this.autoPlay = !1
        }), setInterval(() => {
            this.autoPlay && this.showNextSlide()
        }, 6e3)
    }
    getheight() {
        const e = () => {
            let i = $(".cases__item.active").outerHeight();
            this.carousel.css("--height", i + "px")
        };
        e(), this.app.on("resize", () => e())
    }
}

function ue(s) {
    return s !== null && typeof s == "object" && "constructor" in s && s.constructor === Object
}

function le(s, e) {
    s === void 0 && (s = {}), e === void 0 && (e = {}), Object.keys(e).forEach(t => {
        typeof s[t] > "u" ? s[t] = e[t] : ue(e[t]) && ue(s[t]) && Object.keys(e[t]).length > 0 && le(s[t], e[t])
    })
}
const Te = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: {
        blur() {},
        nodeName: ""
    },
    querySelector() {
        return null
    },
    querySelectorAll() {
        return []
    },
    getElementById() {
        return null
    },
    createEvent() {
        return {
            initEvent() {}
        }
    },
    createElement() {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName() {
                return []
            }
        }
    },
    createElementNS() {
        return {}
    },
    importNode() {
        return null
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    }
};

function H() {
    const s = typeof document < "u" ? document : {};
    return le(s, Te), s
}
const Ge = {
    document: Te,
    navigator: {
        userAgent: ""
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    },
    history: {
        replaceState() {},
        pushState() {},
        go() {},
        back() {}
    },
    CustomEvent: function () {
        return this
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle() {
        return {
            getPropertyValue() {
                return ""
            }
        }
    },
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia() {
        return {}
    },
    requestAnimationFrame(s) {
        return typeof setTimeout > "u" ? (s(), null) : setTimeout(s, 0)
    },
    cancelAnimationFrame(s) {
        typeof setTimeout > "u" || clearTimeout(s)
    }
};

function O() {
    const s = typeof window < "u" ? window : {};
    return le(s, Ge), s
}

function Ve(s) {
    return s === void 0 && (s = ""), s.trim().split(" ").filter(e => !!e.trim())
}

function Be(s) {
    const e = s;
    Object.keys(e).forEach(t => {
        try {
            e[t] = null
        } catch {}
        try {
            delete e[t]
        } catch {}
    })
}

function re(s, e) {
    return e === void 0 && (e = 0), setTimeout(s, e)
}

function U() {
    return Date.now()
}

function qe(s) {
    const e = O();
    let t;
    return e.getComputedStyle && (t = e.getComputedStyle(s, null)), !t && s.currentStyle && (t = s.currentStyle), t || (t = s.style), t
}

function Fe(s, e) {
    e === void 0 && (e = "x");
    const t = O();
    let i, r, n;
    const o = qe(s);
    return t.WebKitCSSMatrix ? (r = o.transform || o.webkitTransform, r.split(",").length > 6 && (r = r.split(", ").map(l => l.replace(",", ".")).join(", ")), n = new t.WebKitCSSMatrix(r === "none" ? "" : r)) : (n = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = n.toString().split(",")), e === "x" && (t.WebKitCSSMatrix ? r = n.m41 : i.length === 16 ? r = parseFloat(i[12]) : r = parseFloat(i[4])), e === "y" && (t.WebKitCSSMatrix ? r = n.m42 : i.length === 16 ? r = parseFloat(i[13]) : r = parseFloat(i[5])), r || 0
}

function j(s) {
    return typeof s == "object" && s !== null && s.constructor && Object.prototype.toString.call(s).slice(8, -1) === "Object"
}

function He(s) {
    return typeof window < "u" && typeof window.HTMLElement < "u" ? s instanceof HTMLElement : s && (s.nodeType === 1 || s.nodeType === 11)
}

function k() {
    const s = Object(arguments.length <= 0 ? void 0 : arguments[0]),
        e = ["__proto__", "constructor", "prototype"];
    for (let t = 1; t < arguments.length; t += 1) {
        const i = t < 0 || arguments.length <= t ? void 0 : arguments[t];
        if (i != null && !He(i)) {
            const r = Object.keys(Object(i)).filter(n => e.indexOf(n) < 0);
            for (let n = 0, o = r.length; n < o; n += 1) {
                const l = r[n],
                    a = Object.getOwnPropertyDescriptor(i, l);
                a !== void 0 && a.enumerable && (j(s[l]) && j(i[l]) ? i[l].__swiper__ ? s[l] = i[l] : k(s[l], i[l]) : !j(s[l]) && j(i[l]) ? (s[l] = {}, i[l].__swiper__ ? s[l] = i[l] : k(s[l], i[l])) : s[l] = i[l])
            }
        }
    }
    return s
}

function Y(s, e, t) {
    s.style.setProperty(e, t)
}

function be(s) {
    let {
        swiper: e,
        targetPosition: t,
        side: i
    } = s;
    const r = O(),
        n = -e.translate;
    let o = null,
        l;
    const a = e.params.speed;
    e.wrapperEl.style.scrollSnapType = "none", r.cancelAnimationFrame(e.cssModeFrameID);
    const d = t > n ? "next" : "prev",
        c = (h, f) => d === "next" && h >= f || d === "prev" && h <= f,
        u = () => {
            l = new Date().getTime(), o === null && (o = l);
            const h = Math.max(Math.min((l - o) / a, 1), 0),
                f = .5 - Math.cos(h * Math.PI) / 2;
            let p = n + f * (t - n);
            if (c(p, t) && (p = t), e.wrapperEl.scrollTo({
                    [i]: p
                }), c(p, t)) {
                e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
                    e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({
                        [i]: p
                    })
                }), r.cancelAnimationFrame(e.cssModeFrameID);
                return
            }
            e.cssModeFrameID = r.requestAnimationFrame(u)
        };
    u()
}

function G(s, e) {
    return e === void 0 && (e = ""), [...s.children].filter(t => t.matches(e))
}

function J(s) {
    try {
        console.warn(s);
        return
    } catch {}
}

function ne(s, e) {
    e === void 0 && (e = []);
    const t = document.createElement(s);
    return t.classList.add(...Array.isArray(e) ? e : Ve(e)), t
}

function Ne(s, e) {
    const t = [];
    for (; s.previousElementSibling;) {
        const i = s.previousElementSibling;
        e ? i.matches(e) && t.push(i) : t.push(i), s = i
    }
    return t
}

function We(s, e) {
    const t = [];
    for (; s.nextElementSibling;) {
        const i = s.nextElementSibling;
        e ? i.matches(e) && t.push(i) : t.push(i), s = i
    }
    return t
}

function B(s, e) {
    return O().getComputedStyle(s, null).getPropertyValue(e)
}

function fe(s) {
    let e = s,
        t;
    if (e) {
        for (t = 0;
            (e = e.previousSibling) !== null;) e.nodeType === 1 && (t += 1);
        return t
    }
}

function Re(s, e) {
    const t = [];
    let i = s.parentElement;
    for (; i;) e ? i.matches(e) && t.push(i) : t.push(i), i = i.parentElement;
    return t
}

function he(s, e, t) {
    const i = O();
    return t ? s[e === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(i.getComputedStyle(s, null).getPropertyValue(e === "width" ? "margin-right" : "margin-top")) + parseFloat(i.getComputedStyle(s, null).getPropertyValue(e === "width" ? "margin-left" : "margin-bottom")) : s.offsetWidth
}
let K;

function je() {
    const s = O(),
        e = H();
    return {
        smoothScroll: e.documentElement && e.documentElement.style && "scrollBehavior" in e.documentElement.style,
        touch: !!("ontouchstart" in s || s.DocumentTouch && e instanceof s.DocumentTouch)
    }
}

function ye() {
    return K || (K = je()), K
}
let Q;

function Ye(s) {
    let {
        userAgent: e
    } = s === void 0 ? {} : s;
    const t = ye(),
        i = O(),
        r = i.navigator.platform,
        n = e || i.navigator.userAgent,
        o = {
            ios: !1,
            android: !1
        },
        l = i.screen.width,
        a = i.screen.height,
        d = n.match(/(Android);?[\s\/]+([\d.]+)?/);
    let c = n.match(/(iPad).*OS\s([\d_]+)/);
    const u = n.match(/(iPod)(.*OS\s([\d_]+))?/),
        h = !c && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
        f = r === "Win32";
    let p = r === "MacIntel";
    const g = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    return !c && p && t.touch && g.indexOf(`${l}x${a}`) >= 0 && (c = n.match(/(Version)\/([\d.]+)/), c || (c = [0, 1, "13_0_0"]), p = !1), d && !f && (o.os = "android", o.android = !0), (c || h || u) && (o.os = "ios", o.ios = !0), o
}

function xe(s) {
    return s === void 0 && (s = {}), Q || (Q = Ye(s)), Q
}
let Z;

function Xe() {
    const s = O(),
        e = xe();
    let t = !1;

    function i() {
        const l = s.navigator.userAgent.toLowerCase();
        return l.indexOf("safari") >= 0 && l.indexOf("chrome") < 0 && l.indexOf("android") < 0
    }
    if (i()) {
        const l = String(s.navigator.userAgent);
        if (l.includes("Version/")) {
            const [a, d] = l.split("Version/")[1].split(" ")[0].split(".").map(c => Number(c));
            t = a < 16 || a === 16 && d < 2
        }
    }
    const r = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(s.navigator.userAgent),
        n = i(),
        o = n || r && e.ios;
    return {
        isSafari: t || n,
        needPerspectiveFix: t,
        need3dFix: o,
        isWebView: r
    }
}

function Ue() {
    return Z || (Z = Xe()), Z
}

function Je(s) {
    let {
        swiper: e,
        on: t,
        emit: i
    } = s;
    const r = O();
    let n = null,
        o = null;
    const l = () => {
            !e || e.destroyed || !e.initialized || (i("beforeResize"), i("resize"))
        },
        a = () => {
            !e || e.destroyed || !e.initialized || (n = new ResizeObserver(u => {
                o = r.requestAnimationFrame(() => {
                    const {
                        width: h,
                        height: f
                    } = e;
                    let p = h,
                        g = f;
                    u.forEach(E => {
                        let {
                            contentBoxSize: v,
                            contentRect: C,
                            target: m
                        } = E;
                        m && m !== e.el || (p = C ? C.width : (v[0] || v).inlineSize, g = C ? C.height : (v[0] || v).blockSize)
                    }), (p !== h || g !== f) && l()
                })
            }), n.observe(e.el))
        },
        d = () => {
            o && r.cancelAnimationFrame(o), n && n.unobserve && e.el && (n.unobserve(e.el), n = null)
        },
        c = () => {
            !e || e.destroyed || !e.initialized || i("orientationchange")
        };
    t("init", () => {
        if (e.params.resizeObserver && typeof r.ResizeObserver < "u") {
            a();
            return
        }
        r.addEventListener("resize", l), r.addEventListener("orientationchange", c)
    }), t("destroy", () => {
        d(), r.removeEventListener("resize", l), r.removeEventListener("orientationchange", c)
    })
}

function Ke(s) {
    let {
        swiper: e,
        extendParams: t,
        on: i,
        emit: r
    } = s;
    const n = [],
        o = O(),
        l = function (c, u) {
            u === void 0 && (u = {});
            const h = o.MutationObserver || o.WebkitMutationObserver,
                f = new h(p => {
                    if (e.__preventObserver__) return;
                    if (p.length === 1) {
                        r("observerUpdate", p[0]);
                        return
                    }
                    const g = function () {
                        r("observerUpdate", p[0])
                    };
                    o.requestAnimationFrame ? o.requestAnimationFrame(g) : o.setTimeout(g, 0)
                });
            f.observe(c, {
                attributes: typeof u.attributes > "u" ? !0 : u.attributes,
                childList: typeof u.childList > "u" ? !0 : u.childList,
                characterData: typeof u.characterData > "u" ? !0 : u.characterData
            }), n.push(f)
        },
        a = () => {
            if (e.params.observer) {
                if (e.params.observeParents) {
                    const c = Re(e.hostEl);
                    for (let u = 0; u < c.length; u += 1) l(c[u])
                }
                l(e.hostEl, {
                    childList: e.params.observeSlideChildren
                }), l(e.wrapperEl, {
                    attributes: !1
                })
            }
        },
        d = () => {
            n.forEach(c => {
                c.disconnect()
            }), n.splice(0, n.length)
        };
    t({
        observer: !1,
        observeParents: !1,
        observeSlideChildren: !1
    }), i("init", a), i("destroy", d)
}
var Qe = {
    on(s, e, t) {
        const i = this;
        if (!i.eventsListeners || i.destroyed || typeof e != "function") return i;
        const r = t ? "unshift" : "push";
        return s.split(" ").forEach(n => {
            i.eventsListeners[n] || (i.eventsListeners[n] = []), i.eventsListeners[n][r](e)
        }), i
    },
    once(s, e, t) {
        const i = this;
        if (!i.eventsListeners || i.destroyed || typeof e != "function") return i;

        function r() {
            i.off(s, r), r.__emitterProxy && delete r.__emitterProxy;
            for (var n = arguments.length, o = new Array(n), l = 0; l < n; l++) o[l] = arguments[l];
            e.apply(i, o)
        }
        return r.__emitterProxy = e, i.on(s, r, t)
    },
    onAny(s, e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed || typeof s != "function") return t;
        const i = e ? "unshift" : "push";
        return t.eventsAnyListeners.indexOf(s) < 0 && t.eventsAnyListeners[i](s), t
    },
    offAny(s) {
        const e = this;
        if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e;
        const t = e.eventsAnyListeners.indexOf(s);
        return t >= 0 && e.eventsAnyListeners.splice(t, 1), e
    },
    off(s, e) {
        const t = this;
        return !t.eventsListeners || t.destroyed || !t.eventsListeners || s.split(" ").forEach(i => {
            typeof e > "u" ? t.eventsListeners[i] = [] : t.eventsListeners[i] && t.eventsListeners[i].forEach((r, n) => {
                (r === e || r.__emitterProxy && r.__emitterProxy === e) && t.eventsListeners[i].splice(n, 1)
            })
        }), t
    },
    emit() {
        const s = this;
        if (!s.eventsListeners || s.destroyed || !s.eventsListeners) return s;
        let e, t, i;
        for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o];
        return typeof n[0] == "string" || Array.isArray(n[0]) ? (e = n[0], t = n.slice(1, n.length), i = s) : (e = n[0].events, t = n[0].data, i = n[0].context || s), t.unshift(i), (Array.isArray(e) ? e : e.split(" ")).forEach(a => {
            s.eventsAnyListeners && s.eventsAnyListeners.length && s.eventsAnyListeners.forEach(d => {
                d.apply(i, [a, ...t])
            }), s.eventsListeners && s.eventsListeners[a] && s.eventsListeners[a].forEach(d => {
                d.apply(i, t)
            })
        }), s
    }
};

function Ze() {
    const s = this;
    let e, t;
    const i = s.el;
    typeof s.params.width < "u" && s.params.width !== null ? e = s.params.width : e = i.clientWidth, typeof s.params.height < "u" && s.params.height !== null ? t = s.params.height : t = i.clientHeight, !(e === 0 && s.isHorizontal() || t === 0 && s.isVertical()) && (e = e - parseInt(B(i, "padding-left") || 0, 10) - parseInt(B(i, "padding-right") || 0, 10), t = t - parseInt(B(i, "padding-top") || 0, 10) - parseInt(B(i, "padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), Object.assign(s, {
        width: e,
        height: t,
        size: s.isHorizontal() ? e : t
    }))
}

function et() {
    const s = this;

    function e(S, _) {
        return parseFloat(S.getPropertyValue(s.getDirectionLabel(_)) || 0)
    }
    const t = s.params,
        {
            wrapperEl: i,
            slidesEl: r,
            size: n,
            rtlTranslate: o,
            wrongRTL: l
        } = s,
        a = s.virtual && t.virtual.enabled,
        d = a ? s.virtual.slides.length : s.slides.length,
        c = G(r, `.${s.params.slideClass}, swiper-slide`),
        u = a ? s.virtual.slides.length : c.length;
    let h = [];
    const f = [],
        p = [];
    let g = t.slidesOffsetBefore;
    typeof g == "function" && (g = t.slidesOffsetBefore.call(s));
    let E = t.slidesOffsetAfter;
    typeof E == "function" && (E = t.slidesOffsetAfter.call(s));
    const v = s.snapGrid.length,
        C = s.slidesGrid.length;
    let m = t.spaceBetween,
        b = -g,
        y = 0,
        M = 0;
    if (typeof n > "u") return;
    typeof m == "string" && m.indexOf("%") >= 0 ? m = parseFloat(m.replace("%", "")) / 100 * n : typeof m == "string" && (m = parseFloat(m)), s.virtualSize = -m, c.forEach(S => {
        o ? S.style.marginLeft = "" : S.style.marginRight = "", S.style.marginBottom = "", S.style.marginTop = ""
    }), t.centeredSlides && t.cssMode && (Y(i, "--swiper-centered-offset-before", ""), Y(i, "--swiper-centered-offset-after", ""));
    const q = t.grid && t.grid.rows > 1 && s.grid;
    q ? s.grid.initSlides(c) : s.grid && s.grid.unsetSlides();
    let I;
    const F = t.slidesPerView === "auto" && t.breakpoints && Object.keys(t.breakpoints).filter(S => typeof t.breakpoints[S].slidesPerView < "u").length > 0;
    for (let S = 0; S < u; S += 1) {
        I = 0;
        let _;
        if (c[S] && (_ = c[S]), q && s.grid.updateSlide(S, _, c), !(c[S] && B(_, "display") === "none")) {
            if (t.slidesPerView === "auto") {
                F && (c[S].style[s.getDirectionLabel("width")] = "");
                const P = getComputedStyle(_),
                    x = _.style.transform,
                    L = _.style.webkitTransform;
                if (x && (_.style.transform = "none"), L && (_.style.webkitTransform = "none"), t.roundLengths) I = s.isHorizontal() ? he(_, "width", !0) : he(_, "height", !0);
                else {
                    const A = e(P, "width"),
                        V = e(P, "padding-left"),
                        Ee = e(P, "padding-right"),
                        ae = e(P, "margin-left"),
                        de = e(P, "margin-right"),
                        ce = P.getPropertyValue("box-sizing");
                    if (ce && ce === "border-box") I = A + ae + de;
                    else {
                        const {
                            clientWidth: Pe,
                            offsetWidth: Me
                        } = _;
                        I = A + V + Ee + ae + de + (Me - Pe)
                    }
                }
                x && (_.style.transform = x), L && (_.style.webkitTransform = L), t.roundLengths && (I = Math.floor(I))
            } else I = (n - (t.slidesPerView - 1) * m) / t.slidesPerView, t.roundLengths && (I = Math.floor(I)), c[S] && (c[S].style[s.getDirectionLabel("width")] = `${I}px`);
            c[S] && (c[S].swiperSlideSize = I), p.push(I), t.centeredSlides ? (b = b + I / 2 + y / 2 + m, y === 0 && S !== 0 && (b = b - n / 2 - m), S === 0 && (b = b - n / 2 - m), Math.abs(b) < 1 / 1e3 && (b = 0), t.roundLengths && (b = Math.floor(b)), M % t.slidesPerGroup === 0 && h.push(b), f.push(b)) : (t.roundLengths && (b = Math.floor(b)), (M - Math.min(s.params.slidesPerGroupSkip, M)) % s.params.slidesPerGroup === 0 && h.push(b), f.push(b), b = b + I + m), s.virtualSize += I + m, y = I, M += 1
        }
    }
    if (s.virtualSize = Math.max(s.virtualSize, n) + E, o && l && (t.effect === "slide" || t.effect === "coverflow") && (i.style.width = `${s.virtualSize+m}px`), t.setWrapperSize && (i.style[s.getDirectionLabel("width")] = `${s.virtualSize+m}px`), q && s.grid.updateWrapperSize(I, h), !t.centeredSlides) {
        const S = [];
        for (let _ = 0; _ < h.length; _ += 1) {
            let P = h[_];
            t.roundLengths && (P = Math.floor(P)), h[_] <= s.virtualSize - n && S.push(P)
        }
        h = S, Math.floor(s.virtualSize - n) - Math.floor(h[h.length - 1]) > 1 && h.push(s.virtualSize - n)
    }
    if (a && t.loop) {
        const S = p[0] + m;
        if (t.slidesPerGroup > 1) {
            const _ = Math.ceil((s.virtual.slidesBefore + s.virtual.slidesAfter) / t.slidesPerGroup),
                P = S * t.slidesPerGroup;
            for (let x = 0; x < _; x += 1) h.push(h[h.length - 1] + P)
        }
        for (let _ = 0; _ < s.virtual.slidesBefore + s.virtual.slidesAfter; _ += 1) t.slidesPerGroup === 1 && h.push(h[h.length - 1] + S), f.push(f[f.length - 1] + S), s.virtualSize += S
    }
    if (h.length === 0 && (h = [0]), m !== 0) {
        const S = s.isHorizontal() && o ? "marginLeft" : s.getDirectionLabel("marginRight");
        c.filter((_, P) => !t.cssMode || t.loop ? !0 : P !== c.length - 1).forEach(_ => {
            _.style[S] = `${m}px`
        })
    }
    if (t.centeredSlides && t.centeredSlidesBounds) {
        let S = 0;
        p.forEach(P => {
            S += P + (m || 0)
        }), S -= m;
        const _ = S - n;
        h = h.map(P => P <= 0 ? -g : P > _ ? _ + E : P)
    }
    if (t.centerInsufficientSlides) {
        let S = 0;
        if (p.forEach(_ => {
                S += _ + (m || 0)
            }), S -= m, S < n) {
            const _ = (n - S) / 2;
            h.forEach((P, x) => {
                h[x] = P - _
            }), f.forEach((P, x) => {
                f[x] = P + _
            })
        }
    }
    if (Object.assign(s, {
            slides: c,
            snapGrid: h,
            slidesGrid: f,
            slidesSizesGrid: p
        }), t.centeredSlides && t.cssMode && !t.centeredSlidesBounds) {
        Y(i, "--swiper-centered-offset-before", `${-h[0]}px`), Y(i, "--swiper-centered-offset-after", `${s.size/2-p[p.length-1]/2}px`);
        const S = -s.snapGrid[0],
            _ = -s.slidesGrid[0];
        s.snapGrid = s.snapGrid.map(P => P + S), s.slidesGrid = s.slidesGrid.map(P => P + _)
    }
    if (u !== d && s.emit("slidesLengthChange"), h.length !== v && (s.params.watchOverflow && s.checkOverflow(), s.emit("snapGridLengthChange")), f.length !== C && s.emit("slidesGridLengthChange"), t.watchSlidesProgress && s.updateSlidesOffset(), s.emit("slidesUpdated"), !a && !t.cssMode && (t.effect === "slide" || t.effect === "fade")) {
        const S = `${t.containerModifierClass}backface-hidden`,
            _ = s.el.classList.contains(S);
        u <= t.maxBackfaceHiddenSlides ? _ || s.el.classList.add(S) : _ && s.el.classList.remove(S)
    }
}

function tt(s) {
    const e = this,
        t = [],
        i = e.virtual && e.params.virtual.enabled;
    let r = 0,
        n;
    typeof s == "number" ? e.setTransition(s) : s === !0 && e.setTransition(e.params.speed);
    const o = l => i ? e.slides[e.getSlideIndexByData(l)] : e.slides[l];
    if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
        if (e.params.centeredSlides)(e.visibleSlides || []).forEach(l => {
            t.push(l)
        });
        else
            for (n = 0; n < Math.ceil(e.params.slidesPerView); n += 1) {
                const l = e.activeIndex + n;
                if (l > e.slides.length && !i) break;
                t.push(o(l))
            } else t.push(o(e.activeIndex));
    for (n = 0; n < t.length; n += 1)
        if (typeof t[n] < "u") {
            const l = t[n].offsetHeight;
            r = l > r ? l : r
        }(r || r === 0) && (e.wrapperEl.style.height = `${r}px`)
}

function it() {
    const s = this,
        e = s.slides,
        t = s.isElement ? s.isHorizontal() ? s.wrapperEl.offsetLeft : s.wrapperEl.offsetTop : 0;
    for (let i = 0; i < e.length; i += 1) e[i].swiperSlideOffset = (s.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop) - t - s.cssOverflowAdjustment()
}

function st(s) {
    s === void 0 && (s = this && this.translate || 0);
    const e = this,
        t = e.params,
        {
            slides: i,
            rtlTranslate: r,
            snapGrid: n
        } = e;
    if (i.length === 0) return;
    typeof i[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
    let o = -s;
    r && (o = s), i.forEach(a => {
        a.classList.remove(t.slideVisibleClass, t.slideFullyVisibleClass)
    }), e.visibleSlidesIndexes = [], e.visibleSlides = [];
    let l = t.spaceBetween;
    typeof l == "string" && l.indexOf("%") >= 0 ? l = parseFloat(l.replace("%", "")) / 100 * e.size : typeof l == "string" && (l = parseFloat(l));
    for (let a = 0; a < i.length; a += 1) {
        const d = i[a];
        let c = d.swiperSlideOffset;
        t.cssMode && t.centeredSlides && (c -= i[0].swiperSlideOffset);
        const u = (o + (t.centeredSlides ? e.minTranslate() : 0) - c) / (d.swiperSlideSize + l),
            h = (o - n[0] + (t.centeredSlides ? e.minTranslate() : 0) - c) / (d.swiperSlideSize + l),
            f = -(o - c),
            p = f + e.slidesSizesGrid[a],
            g = f >= 0 && f <= e.size - e.slidesSizesGrid[a];
        (f >= 0 && f < e.size - 1 || p > 1 && p <= e.size || f <= 0 && p >= e.size) && (e.visibleSlides.push(d), e.visibleSlidesIndexes.push(a), i[a].classList.add(t.slideVisibleClass)), g && i[a].classList.add(t.slideFullyVisibleClass), d.progress = r ? -u : u, d.originalProgress = r ? -h : h
    }
}

function rt(s) {
    const e = this;
    if (typeof s > "u") {
        const c = e.rtlTranslate ? -1 : 1;
        s = e && e.translate && e.translate * c || 0
    }
    const t = e.params,
        i = e.maxTranslate() - e.minTranslate();
    let {
        progress: r,
        isBeginning: n,
        isEnd: o,
        progressLoop: l
    } = e;
    const a = n,
        d = o;
    if (i === 0) r = 0, n = !0, o = !0;
    else {
        r = (s - e.minTranslate()) / i;
        const c = Math.abs(s - e.minTranslate()) < 1,
            u = Math.abs(s - e.maxTranslate()) < 1;
        n = c || r <= 0, o = u || r >= 1, c && (r = 0), u && (r = 1)
    }
    if (t.loop) {
        const c = e.getSlideIndexByData(0),
            u = e.getSlideIndexByData(e.slides.length - 1),
            h = e.slidesGrid[c],
            f = e.slidesGrid[u],
            p = e.slidesGrid[e.slidesGrid.length - 1],
            g = Math.abs(s);
        g >= h ? l = (g - h) / p : l = (g + p - f) / p, l > 1 && (l -= 1)
    }
    Object.assign(e, {
        progress: r,
        progressLoop: l,
        isBeginning: n,
        isEnd: o
    }), (t.watchSlidesProgress || t.centeredSlides && t.autoHeight) && e.updateSlidesProgress(s), n && !a && e.emit("reachBeginning toEdge"), o && !d && e.emit("reachEnd toEdge"), (a && !n || d && !o) && e.emit("fromEdge"), e.emit("progress", r)
}
const ee = (s, e, t) => {
    e && !s.classList.contains(t) ? s.classList.add(t) : !e && s.classList.contains(t) && s.classList.remove(t)
};

function nt() {
    const s = this,
        {
            slides: e,
            params: t,
            slidesEl: i,
            activeIndex: r
        } = s,
        n = s.virtual && t.virtual.enabled,
        o = s.grid && t.grid && t.grid.rows > 1,
        l = u => G(i, `.${t.slideClass}${u}, swiper-slide${u}`)[0];
    let a, d, c;
    if (n)
        if (t.loop) {
            let u = r - s.virtual.slidesBefore;
            u < 0 && (u = s.virtual.slides.length + u), u >= s.virtual.slides.length && (u -= s.virtual.slides.length), a = l(`[data-swiper-slide-index="${u}"]`)
        } else a = l(`[data-swiper-slide-index="${r}"]`);
    else o ? (a = e.filter(u => u.column === r)[0], c = e.filter(u => u.column === r + 1)[0], d = e.filter(u => u.column === r - 1)[0]) : a = e[r];
    a && (o || (c = We(a, `.${t.slideClass}, swiper-slide`)[0], t.loop && !c && (c = e[0]), d = Ne(a, `.${t.slideClass}, swiper-slide`)[0], t.loop && !d === 0 && (d = e[e.length - 1]))), e.forEach(u => {
        ee(u, u === a, t.slideActiveClass), ee(u, u === c, t.slideNextClass), ee(u, u === d, t.slidePrevClass)
    }), s.emitSlidesClasses()
}
const X = (s, e) => {
        if (!s || s.destroyed || !s.params) return;
        const t = () => s.isElement ? "swiper-slide" : `.${s.params.slideClass}`,
            i = e.closest(t());
        if (i) {
            let r = i.querySelector(`.${s.params.lazyPreloaderClass}`);
            !r && s.isElement && (i.shadowRoot ? r = i.shadowRoot.querySelector(`.${s.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
                i.shadowRoot && (r = i.shadowRoot.querySelector(`.${s.params.lazyPreloaderClass}`), r && r.remove())
            })), r && r.remove()
        }
    },
    te = (s, e) => {
        if (!s.slides[e]) return;
        const t = s.slides[e].querySelector('[loading="lazy"]');
        t && t.removeAttribute("loading")
    },
    oe = s => {
        if (!s || s.destroyed || !s.params) return;
        let e = s.params.lazyPreloadPrevNext;
        const t = s.slides.length;
        if (!t || !e || e < 0) return;
        e = Math.min(e, t);
        const i = s.params.slidesPerView === "auto" ? s.slidesPerViewDynamic() : Math.ceil(s.params.slidesPerView),
            r = s.activeIndex;
        if (s.params.grid && s.params.grid.rows > 1) {
            const o = r,
                l = [o - e];
            l.push(...Array.from({
                length: e
            }).map((a, d) => o + i + d)), s.slides.forEach((a, d) => {
                l.includes(a.column) && te(s, d)
            });
            return
        }
        const n = r + i - 1;
        if (s.params.rewind || s.params.loop)
            for (let o = r - e; o <= n + e; o += 1) {
                const l = (o % t + t) % t;
                (l < r || l > n) && te(s, l)
            } else
                for (let o = Math.max(r - e, 0); o <= Math.min(n + e, t - 1); o += 1) o !== r && (o > n || o < r) && te(s, o)
    };

function ot(s) {
    const {
        slidesGrid: e,
        params: t
    } = s, i = s.rtlTranslate ? s.translate : -s.translate;
    let r;
    for (let n = 0; n < e.length; n += 1) typeof e[n + 1] < "u" ? i >= e[n] && i < e[n + 1] - (e[n + 1] - e[n]) / 2 ? r = n : i >= e[n] && i < e[n + 1] && (r = n + 1) : i >= e[n] && (r = n);
    return t.normalizeSlideIndex && (r < 0 || typeof r > "u") && (r = 0), r
}

function lt(s) {
    const e = this,
        t = e.rtlTranslate ? e.translate : -e.translate,
        {
            snapGrid: i,
            params: r,
            activeIndex: n,
            realIndex: o,
            snapIndex: l
        } = e;
    let a = s,
        d;
    const c = f => {
        let p = f - e.virtual.slidesBefore;
        return p < 0 && (p = e.virtual.slides.length + p), p >= e.virtual.slides.length && (p -= e.virtual.slides.length), p
    };
    if (typeof a > "u" && (a = ot(e)), i.indexOf(t) >= 0) d = i.indexOf(t);
    else {
        const f = Math.min(r.slidesPerGroupSkip, a);
        d = f + Math.floor((a - f) / r.slidesPerGroup)
    }
    if (d >= i.length && (d = i.length - 1), a === n && !e.params.loop) {
        d !== l && (e.snapIndex = d, e.emit("snapIndexChange"));
        return
    }
    if (a === n && e.params.loop && e.virtual && e.params.virtual.enabled) {
        e.realIndex = c(a);
        return
    }
    const u = e.grid && r.grid && r.grid.rows > 1;
    let h;
    if (e.virtual && r.virtual.enabled && r.loop) h = c(a);
    else if (u) {
        const f = e.slides.filter(g => g.column === a)[0];
        let p = parseInt(f.getAttribute("data-swiper-slide-index"), 10);
        Number.isNaN(p) && (p = Math.max(e.slides.indexOf(f), 0)), h = Math.floor(p / r.grid.rows)
    } else if (e.slides[a]) {
        const f = e.slides[a].getAttribute("data-swiper-slide-index");
        f ? h = parseInt(f, 10) : h = a
    } else h = a;
    Object.assign(e, {
        previousSnapIndex: l,
        snapIndex: d,
        previousRealIndex: o,
        realIndex: h,
        previousIndex: n,
        activeIndex: a
    }), e.initialized && oe(e), e.emit("activeIndexChange"), e.emit("snapIndexChange"), (e.initialized || e.params.runCallbacksOnInit) && (o !== h && e.emit("realIndexChange"), e.emit("slideChange"))
}

function at(s, e) {
    const t = this,
        i = t.params;
    let r = s.closest(`.${i.slideClass}, swiper-slide`);
    !r && t.isElement && e && e.length > 1 && e.includes(s) && [...e.slice(e.indexOf(s) + 1, e.length)].forEach(l => {
        !r && l.matches && l.matches(`.${i.slideClass}, swiper-slide`) && (r = l)
    });
    let n = !1,
        o;
    if (r) {
        for (let l = 0; l < t.slides.length; l += 1)
            if (t.slides[l] === r) {
                n = !0, o = l;
                break
            }
    }
    if (r && n) t.clickedSlide = r, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(r.getAttribute("data-swiper-slide-index"), 10) : t.clickedIndex = o;
    else {
        t.clickedSlide = void 0, t.clickedIndex = void 0;
        return
    }
    i.slideToClickedSlide && t.clickedIndex !== void 0 && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
}
var dt = {
    updateSize: Ze,
    updateSlides: et,
    updateAutoHeight: tt,
    updateSlidesOffset: it,
    updateSlidesProgress: st,
    updateProgress: rt,
    updateSlidesClasses: nt,
    updateActiveIndex: lt,
    updateClickedSlide: at
};

function ct(s) {
    s === void 0 && (s = this.isHorizontal() ? "x" : "y");
    const e = this,
        {
            params: t,
            rtlTranslate: i,
            translate: r,
            wrapperEl: n
        } = e;
    if (t.virtualTranslate) return i ? -r : r;
    if (t.cssMode) return r;
    let o = Fe(n, s);
    return o += e.cssOverflowAdjustment(), i && (o = -o), o || 0
}

function ut(s, e) {
    const t = this,
        {
            rtlTranslate: i,
            params: r,
            wrapperEl: n,
            progress: o
        } = t;
    let l = 0,
        a = 0;
    const d = 0;
    t.isHorizontal() ? l = i ? -s : s : a = s, r.roundLengths && (l = Math.floor(l), a = Math.floor(a)), t.previousTranslate = t.translate, t.translate = t.isHorizontal() ? l : a, r.cssMode ? n[t.isHorizontal() ? "scrollLeft" : "scrollTop"] = t.isHorizontal() ? -l : -a : r.virtualTranslate || (t.isHorizontal() ? l -= t.cssOverflowAdjustment() : a -= t.cssOverflowAdjustment(), n.style.transform = `translate3d(${l}px, ${a}px, ${d}px)`);
    let c;
    const u = t.maxTranslate() - t.minTranslate();
    u === 0 ? c = 0 : c = (s - t.minTranslate()) / u, c !== o && t.updateProgress(s), t.emit("setTranslate", t.translate, e)
}

function ft() {
    return -this.snapGrid[0]
}

function ht() {
    return -this.snapGrid[this.snapGrid.length - 1]
}

function pt(s, e, t, i, r) {
    s === void 0 && (s = 0), e === void 0 && (e = this.params.speed), t === void 0 && (t = !0), i === void 0 && (i = !0);
    const n = this,
        {
            params: o,
            wrapperEl: l
        } = n;
    if (n.animating && o.preventInteractionOnTransition) return !1;
    const a = n.minTranslate(),
        d = n.maxTranslate();
    let c;
    if (i && s > a ? c = a : i && s < d ? c = d : c = s, n.updateProgress(c), o.cssMode) {
        const u = n.isHorizontal();
        if (e === 0) l[u ? "scrollLeft" : "scrollTop"] = -c;
        else {
            if (!n.support.smoothScroll) return be({
                swiper: n,
                targetPosition: -c,
                side: u ? "left" : "top"
            }), !0;
            l.scrollTo({
                [u ? "left" : "top"]: -c,
                behavior: "smooth"
            })
        }
        return !0
    }
    return e === 0 ? (n.setTransition(0), n.setTranslate(c), t && (n.emit("beforeTransitionStart", e, r), n.emit("transitionEnd"))) : (n.setTransition(e), n.setTranslate(c), t && (n.emit("beforeTransitionStart", e, r), n.emit("transitionStart")), n.animating || (n.animating = !0, n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function (h) {
        !n || n.destroyed || h.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.onTranslateToWrapperTransitionEnd = null, delete n.onTranslateToWrapperTransitionEnd, n.animating = !1, t && n.emit("transitionEnd"))
    }), n.wrapperEl.addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd))), !0
}
var mt = {
    getTranslate: ct,
    setTranslate: ut,
    minTranslate: ft,
    maxTranslate: ht,
    translateTo: pt
};

function gt(s, e) {
    const t = this;
    t.params.cssMode || (t.wrapperEl.style.transitionDuration = `${s}ms`, t.wrapperEl.style.transitionDelay = s === 0 ? "0ms" : ""), t.emit("setTransition", s, e)
}

function _e(s) {
    let {
        swiper: e,
        runCallbacks: t,
        direction: i,
        step: r
    } = s;
    const {
        activeIndex: n,
        previousIndex: o
    } = e;
    let l = i;
    if (l || (n > o ? l = "next" : n < o ? l = "prev" : l = "reset"), e.emit(`transition${r}`), t && n !== o) {
        if (l === "reset") {
            e.emit(`slideResetTransition${r}`);
            return
        }
        e.emit(`slideChangeTransition${r}`), l === "next" ? e.emit(`slideNextTransition${r}`) : e.emit(`slidePrevTransition${r}`)
    }
}

function vt(s, e) {
    s === void 0 && (s = !0);
    const t = this,
        {
            params: i
        } = t;
    i.cssMode || (i.autoHeight && t.updateAutoHeight(), _e({
        swiper: t,
        runCallbacks: s,
        direction: e,
        step: "Start"
    }))
}

function wt(s, e) {
    s === void 0 && (s = !0);
    const t = this,
        {
            params: i
        } = t;
    t.animating = !1, !i.cssMode && (t.setTransition(0), _e({
        swiper: t,
        runCallbacks: s,
        direction: e,
        step: "End"
    }))
}
var St = {
    setTransition: gt,
    transitionStart: vt,
    transitionEnd: wt
};

function Tt(s, e, t, i, r) {
    s === void 0 && (s = 0), t === void 0 && (t = !0), typeof s == "string" && (s = parseInt(s, 10));
    const n = this;
    let o = s;
    o < 0 && (o = 0);
    const {
        params: l,
        snapGrid: a,
        slidesGrid: d,
        previousIndex: c,
        activeIndex: u,
        rtlTranslate: h,
        wrapperEl: f,
        enabled: p
    } = n;
    if (!p && !i && !r || n.destroyed || n.animating && l.preventInteractionOnTransition) return !1;
    typeof e > "u" && (e = n.params.speed);
    const g = Math.min(n.params.slidesPerGroupSkip, o);
    let E = g + Math.floor((o - g) / n.params.slidesPerGroup);
    E >= a.length && (E = a.length - 1);
    const v = -a[E];
    if (l.normalizeSlideIndex)
        for (let m = 0; m < d.length; m += 1) {
            const b = -Math.floor(v * 100),
                y = Math.floor(d[m] * 100),
                M = Math.floor(d[m + 1] * 100);
            typeof d[m + 1] < "u" ? b >= y && b < M - (M - y) / 2 ? o = m : b >= y && b < M && (o = m + 1) : b >= y && (o = m)
        }
    if (n.initialized && o !== u && (!n.allowSlideNext && (h ? v > n.translate && v > n.minTranslate() : v < n.translate && v < n.minTranslate()) || !n.allowSlidePrev && v > n.translate && v > n.maxTranslate() && (u || 0) !== o)) return !1;
    o !== (c || 0) && t && n.emit("beforeSlideChangeStart"), n.updateProgress(v);
    let C;
    if (o > u ? C = "next" : o < u ? C = "prev" : C = "reset", h && -v === n.translate || !h && v === n.translate) return n.updateActiveIndex(o), l.autoHeight && n.updateAutoHeight(), n.updateSlidesClasses(), l.effect !== "slide" && n.setTranslate(v), C !== "reset" && (n.transitionStart(t, C), n.transitionEnd(t, C)), !1;
    if (l.cssMode) {
        const m = n.isHorizontal(),
            b = h ? v : -v;
        if (e === 0) {
            const y = n.virtual && n.params.virtual.enabled;
            y && (n.wrapperEl.style.scrollSnapType = "none", n._immediateVirtual = !0), y && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0 ? (n._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
                f[m ? "scrollLeft" : "scrollTop"] = b
            })) : f[m ? "scrollLeft" : "scrollTop"] = b, y && requestAnimationFrame(() => {
                n.wrapperEl.style.scrollSnapType = "", n._immediateVirtual = !1
            })
        } else {
            if (!n.support.smoothScroll) return be({
                swiper: n,
                targetPosition: b,
                side: m ? "left" : "top"
            }), !0;
            f.scrollTo({
                [m ? "left" : "top"]: b,
                behavior: "smooth"
            })
        }
        return !0
    }
    return n.setTransition(e), n.setTranslate(v), n.updateActiveIndex(o), n.updateSlidesClasses(), n.emit("beforeTransitionStart", e, i), n.transitionStart(t, C), e === 0 ? n.transitionEnd(t, C) : n.animating || (n.animating = !0, n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function (b) {
        !n || n.destroyed || b.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.onSlideToWrapperTransitionEnd = null, delete n.onSlideToWrapperTransitionEnd, n.transitionEnd(t, C))
    }), n.wrapperEl.addEventListener("transitionend", n.onSlideToWrapperTransitionEnd)), !0
}

function bt(s, e, t, i) {
    s === void 0 && (s = 0), t === void 0 && (t = !0), typeof s == "string" && (s = parseInt(s, 10));
    const r = this;
    if (r.destroyed) return;
    typeof e > "u" && (e = r.params.speed);
    const n = r.grid && r.params.grid && r.params.grid.rows > 1;
    let o = s;
    if (r.params.loop)
        if (r.virtual && r.params.virtual.enabled) o = o + r.virtual.slidesBefore;
        else {
            let l;
            if (n) {
                const h = o * r.params.grid.rows;
                l = r.slides.filter(f => f.getAttribute("data-swiper-slide-index") * 1 === h)[0].column
            } else l = r.getSlideIndexByData(o);
            const a = n ? Math.ceil(r.slides.length / r.params.grid.rows) : r.slides.length,
                {
                    centeredSlides: d
                } = r.params;
            let c = r.params.slidesPerView;
            c === "auto" ? c = r.slidesPerViewDynamic() : (c = Math.ceil(parseFloat(r.params.slidesPerView, 10)), d && c % 2 === 0 && (c = c + 1));
            let u = a - l < c;
            if (d && (u = u || l < Math.ceil(c / 2)), i && d && r.params.slidesPerView !== "auto" && !n && (u = !1), u) {
                const h = d ? l < r.activeIndex ? "prev" : "next" : l - r.activeIndex - 1 < r.params.slidesPerView ? "next" : "prev";
                r.loopFix({
                    direction: h,
                    slideTo: !0,
                    activeSlideIndex: h === "next" ? l + 1 : l - a + 1,
                    slideRealIndex: h === "next" ? r.realIndex : void 0
                })
            }
            if (n) {
                const h = o * r.params.grid.rows;
                o = r.slides.filter(f => f.getAttribute("data-swiper-slide-index") * 1 === h)[0].column
            } else o = r.getSlideIndexByData(o)
        } return requestAnimationFrame(() => {
        r.slideTo(o, e, t, i)
    }), r
}

function yt(s, e, t) {
    e === void 0 && (e = !0);
    const i = this,
        {
            enabled: r,
            params: n,
            animating: o
        } = i;
    if (!r || i.destroyed) return i;
    typeof s > "u" && (s = i.params.speed);
    let l = n.slidesPerGroup;
    n.slidesPerView === "auto" && n.slidesPerGroup === 1 && n.slidesPerGroupAuto && (l = Math.max(i.slidesPerViewDynamic("current", !0), 1));
    const a = i.activeIndex < n.slidesPerGroupSkip ? 1 : l,
        d = i.virtual && n.virtual.enabled;
    if (n.loop) {
        if (o && !d && n.loopPreventsSliding) return !1;
        if (i.loopFix({
                direction: "next"
            }), i._clientLeft = i.wrapperEl.clientLeft, i.activeIndex === i.slides.length - 1 && n.cssMode) return requestAnimationFrame(() => {
            i.slideTo(i.activeIndex + a, s, e, t)
        }), !0
    }
    return n.rewind && i.isEnd ? i.slideTo(0, s, e, t) : i.slideTo(i.activeIndex + a, s, e, t)
}

function xt(s, e, t) {
    e === void 0 && (e = !0);
    const i = this,
        {
            params: r,
            snapGrid: n,
            slidesGrid: o,
            rtlTranslate: l,
            enabled: a,
            animating: d
        } = i;
    if (!a || i.destroyed) return i;
    typeof s > "u" && (s = i.params.speed);
    const c = i.virtual && r.virtual.enabled;
    if (r.loop) {
        if (d && !c && r.loopPreventsSliding) return !1;
        i.loopFix({
            direction: "prev"
        }), i._clientLeft = i.wrapperEl.clientLeft
    }
    const u = l ? i.translate : -i.translate;

    function h(v) {
        return v < 0 ? -Math.floor(Math.abs(v)) : Math.floor(v)
    }
    const f = h(u),
        p = n.map(v => h(v));
    let g = n[p.indexOf(f) - 1];
    if (typeof g > "u" && r.cssMode) {
        let v;
        n.forEach((C, m) => {
            f >= C && (v = m)
        }), typeof v < "u" && (g = n[v > 0 ? v - 1 : v])
    }
    let E = 0;
    if (typeof g < "u" && (E = o.indexOf(g), E < 0 && (E = i.activeIndex - 1), r.slidesPerView === "auto" && r.slidesPerGroup === 1 && r.slidesPerGroupAuto && (E = E - i.slidesPerViewDynamic("previous", !0) + 1, E = Math.max(E, 0))), r.rewind && i.isBeginning) {
        const v = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
        return i.slideTo(v, s, e, t)
    } else if (r.loop && i.activeIndex === 0 && r.cssMode) return requestAnimationFrame(() => {
        i.slideTo(E, s, e, t)
    }), !0;
    return i.slideTo(E, s, e, t)
}

function _t(s, e, t) {
    e === void 0 && (e = !0);
    const i = this;
    if (!i.destroyed) return typeof s > "u" && (s = i.params.speed), i.slideTo(i.activeIndex, s, e, t)
}

function Ct(s, e, t, i) {
    e === void 0 && (e = !0), i === void 0 && (i = .5);
    const r = this;
    if (r.destroyed) return;
    typeof s > "u" && (s = r.params.speed);
    let n = r.activeIndex;
    const o = Math.min(r.params.slidesPerGroupSkip, n),
        l = o + Math.floor((n - o) / r.params.slidesPerGroup),
        a = r.rtlTranslate ? r.translate : -r.translate;
    if (a >= r.snapGrid[l]) {
        const d = r.snapGrid[l],
            c = r.snapGrid[l + 1];
        a - d > (c - d) * i && (n += r.params.slidesPerGroup)
    } else {
        const d = r.snapGrid[l - 1],
            c = r.snapGrid[l];
        a - d <= (c - d) * i && (n -= r.params.slidesPerGroup)
    }
    return n = Math.max(n, 0), n = Math.min(n, r.slidesGrid.length - 1), r.slideTo(n, s, e, t)
}

function Et() {
    const s = this;
    if (s.destroyed) return;
    const {
        params: e,
        slidesEl: t
    } = s, i = e.slidesPerView === "auto" ? s.slidesPerViewDynamic() : e.slidesPerView;
    let r = s.clickedIndex,
        n;
    const o = s.isElement ? "swiper-slide" : `.${e.slideClass}`;
    if (e.loop) {
        if (s.animating) return;
        n = parseInt(s.clickedSlide.getAttribute("data-swiper-slide-index"), 10), e.centeredSlides ? r < s.loopedSlides - i / 2 || r > s.slides.length - s.loopedSlides + i / 2 ? (s.loopFix(), r = s.getSlideIndex(G(t, `${o}[data-swiper-slide-index="${n}"]`)[0]), re(() => {
            s.slideTo(r)
        })) : s.slideTo(r) : r > s.slides.length - i ? (s.loopFix(), r = s.getSlideIndex(G(t, `${o}[data-swiper-slide-index="${n}"]`)[0]), re(() => {
            s.slideTo(r)
        })) : s.slideTo(r)
    } else s.slideTo(r)
}
var Pt = {
    slideTo: Tt,
    slideToLoop: bt,
    slideNext: yt,
    slidePrev: xt,
    slideReset: _t,
    slideToClosest: Ct,
    slideToClickedSlide: Et
};

function Mt(s) {
    const e = this,
        {
            params: t,
            slidesEl: i
        } = e;
    if (!t.loop || e.virtual && e.params.virtual.enabled) return;
    const r = () => {
            G(i, `.${t.slideClass}, swiper-slide`).forEach((u, h) => {
                u.setAttribute("data-swiper-slide-index", h)
            })
        },
        n = e.grid && t.grid && t.grid.rows > 1,
        o = t.slidesPerGroup * (n ? t.grid.rows : 1),
        l = e.slides.length % o !== 0,
        a = n && e.slides.length % t.grid.rows !== 0,
        d = c => {
            for (let u = 0; u < c; u += 1) {
                const h = e.isElement ? ne("swiper-slide", [t.slideBlankClass]) : ne("div", [t.slideClass, t.slideBlankClass]);
                e.slidesEl.append(h)
            }
        };
    if (l) {
        if (t.loopAddBlankSlides) {
            const c = o - e.slides.length % o;
            d(c), e.recalcSlides(), e.updateSlides()
        } else J("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        r()
    } else if (a) {
        if (t.loopAddBlankSlides) {
            const c = t.grid.rows - e.slides.length % t.grid.rows;
            d(c), e.recalcSlides(), e.updateSlides()
        } else J("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        r()
    } else r();
    e.loopFix({
        slideRealIndex: s,
        direction: t.centeredSlides ? void 0 : "next"
    })
}

function It(s) {
    let {
        slideRealIndex: e,
        slideTo: t = !0,
        direction: i,
        setTranslate: r,
        activeSlideIndex: n,
        byController: o,
        byMousewheel: l
    } = s === void 0 ? {} : s;
    const a = this;
    if (!a.params.loop) return;
    a.emit("beforeLoopFix");
    const {
        slides: d,
        allowSlidePrev: c,
        allowSlideNext: u,
        slidesEl: h,
        params: f
    } = a, {
        centeredSlides: p
    } = f;
    if (a.allowSlidePrev = !0, a.allowSlideNext = !0, a.virtual && f.virtual.enabled) {
        t && (!f.centeredSlides && a.snapIndex === 0 ? a.slideTo(a.virtual.slides.length, 0, !1, !0) : f.centeredSlides && a.snapIndex < f.slidesPerView ? a.slideTo(a.virtual.slides.length + a.snapIndex, 0, !1, !0) : a.snapIndex === a.snapGrid.length - 1 && a.slideTo(a.virtual.slidesBefore, 0, !1, !0)), a.allowSlidePrev = c, a.allowSlideNext = u, a.emit("loopFix");
        return
    }
    let g = f.slidesPerView;
    g === "auto" ? g = a.slidesPerViewDynamic() : (g = Math.ceil(parseFloat(f.slidesPerView, 10)), p && g % 2 === 0 && (g = g + 1));
    const E = f.slidesPerGroupAuto ? g : f.slidesPerGroup;
    let v = E;
    v % E !== 0 && (v += E - v % E), v += f.loopAdditionalSlides, a.loopedSlides = v;
    const C = a.grid && f.grid && f.grid.rows > 1;
    d.length < g + v ? J("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : C && f.grid.fill === "row" && J("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
    const m = [],
        b = [];
    let y = a.activeIndex;
    typeof n > "u" ? n = a.getSlideIndex(d.filter(x => x.classList.contains(f.slideActiveClass))[0]) : y = n;
    const M = i === "next" || !i,
        q = i === "prev" || !i;
    let I = 0,
        F = 0;
    const S = C ? Math.ceil(d.length / f.grid.rows) : d.length,
        P = (C ? d[n].column : n) + (p && typeof r > "u" ? -g / 2 + .5 : 0);
    if (P < v) {
        I = Math.max(v - P, E);
        for (let x = 0; x < v - P; x += 1) {
            const L = x - Math.floor(x / S) * S;
            if (C) {
                const A = S - L - 1;
                for (let V = d.length - 1; V >= 0; V -= 1) d[V].column === A && m.push(V)
            } else m.push(S - L - 1)
        }
    } else if (P + g > S - v) {
        F = Math.max(P - (S - v * 2), E);
        for (let x = 0; x < F; x += 1) {
            const L = x - Math.floor(x / S) * S;
            C ? d.forEach((A, V) => {
                A.column === L && b.push(V)
            }) : b.push(L)
        }
    }
    if (a.__preventObserver__ = !0, requestAnimationFrame(() => {
            a.__preventObserver__ = !1
        }), q && m.forEach(x => {
            d[x].swiperLoopMoveDOM = !0, h.prepend(d[x]), d[x].swiperLoopMoveDOM = !1
        }), M && b.forEach(x => {
            d[x].swiperLoopMoveDOM = !0, h.append(d[x]), d[x].swiperLoopMoveDOM = !1
        }), a.recalcSlides(), f.slidesPerView === "auto" ? a.updateSlides() : C && (m.length > 0 && q || b.length > 0 && M) && a.slides.forEach((x, L) => {
            a.grid.updateSlide(L, x, a.slides)
        }), f.watchSlidesProgress && a.updateSlidesOffset(), t) {
        if (m.length > 0 && q) {
            if (typeof e > "u") {
                const x = a.slidesGrid[y],
                    A = a.slidesGrid[y + I] - x;
                l ? a.setTranslate(a.translate - A) : (a.slideTo(y + Math.ceil(I), 0, !1, !0), r && (a.touchEventsData.startTranslate = a.touchEventsData.startTranslate - A, a.touchEventsData.currentTranslate = a.touchEventsData.currentTranslate - A))
            } else if (r) {
                const x = C ? m.length / f.grid.rows : m.length;
                a.slideTo(a.activeIndex + x, 0, !1, !0), a.touchEventsData.currentTranslate = a.translate
            }
        } else if (b.length > 0 && M)
            if (typeof e > "u") {
                const x = a.slidesGrid[y],
                    A = a.slidesGrid[y - F] - x;
                l ? a.setTranslate(a.translate - A) : (a.slideTo(y - F, 0, !1, !0), r && (a.touchEventsData.startTranslate = a.touchEventsData.startTranslate - A, a.touchEventsData.currentTranslate = a.touchEventsData.currentTranslate - A))
            } else {
                const x = C ? b.length / f.grid.rows : b.length;
                a.slideTo(a.activeIndex - x, 0, !1, !0)
            }
    }
    if (a.allowSlidePrev = c, a.allowSlideNext = u, a.controller && a.controller.control && !o) {
        const x = {
            slideRealIndex: e,
            direction: i,
            setTranslate: r,
            activeSlideIndex: n,
            byController: !0
        };
        Array.isArray(a.controller.control) ? a.controller.control.forEach(L => {
            !L.destroyed && L.params.loop && L.loopFix({
                ...x,
                slideTo: L.params.slidesPerView === f.slidesPerView ? t : !1
            })
        }) : a.controller.control instanceof a.constructor && a.controller.control.params.loop && a.controller.control.loopFix({
            ...x,
            slideTo: a.controller.control.params.slidesPerView === f.slidesPerView ? t : !1
        })
    }
    a.emit("loopFix")
}

function $t() {
    const s = this,
        {
            params: e,
            slidesEl: t
        } = s;
    if (!e.loop || s.virtual && s.params.virtual.enabled) return;
    s.recalcSlides();
    const i = [];
    s.slides.forEach(r => {
        const n = typeof r.swiperSlideIndex > "u" ? r.getAttribute("data-swiper-slide-index") * 1 : r.swiperSlideIndex;
        i[n] = r
    }), s.slides.forEach(r => {
        r.removeAttribute("data-swiper-slide-index")
    }), i.forEach(r => {
        t.append(r)
    }), s.recalcSlides(), s.slideTo(s.realIndex, 0)
}
var Lt = {
    loopCreate: Mt,
    loopFix: It,
    loopDestroy: $t
};

function At(s) {
    const e = this;
    if (!e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode) return;
    const t = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
    e.isElement && (e.__preventObserver__ = !0), t.style.cursor = "move", t.style.cursor = s ? "grabbing" : "grab", e.isElement && requestAnimationFrame(() => {
        e.__preventObserver__ = !1
    })
}

function kt() {
    const s = this;
    s.params.watchOverflow && s.isLocked || s.params.cssMode || (s.isElement && (s.__preventObserver__ = !0), s[s.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "", s.isElement && requestAnimationFrame(() => {
        s.__preventObserver__ = !1
    }))
}
var Ot = {
    setGrabCursor: At,
    unsetGrabCursor: kt
};

function zt(s, e) {
    e === void 0 && (e = this);

    function t(i) {
        if (!i || i === H() || i === O()) return null;
        i.assignedSlot && (i = i.assignedSlot);
        const r = i.closest(s);
        return !r && !i.getRootNode ? null : r || t(i.getRootNode().host)
    }
    return t(e)
}

function pe(s, e, t) {
    const i = O(),
        {
            params: r
        } = s,
        n = r.edgeSwipeDetection,
        o = r.edgeSwipeThreshold;
    return n && (t <= o || t >= i.innerWidth - o) ? n === "prevent" ? (e.preventDefault(), !0) : !1 : !0
}

function Dt(s) {
    const e = this,
        t = H();
    let i = s;
    i.originalEvent && (i = i.originalEvent);
    const r = e.touchEventsData;
    if (i.type === "pointerdown") {
        if (r.pointerId !== null && r.pointerId !== i.pointerId) return;
        r.pointerId = i.pointerId
    } else i.type === "touchstart" && i.targetTouches.length === 1 && (r.touchId = i.targetTouches[0].identifier);
    if (i.type === "touchstart") {
        pe(e, i, i.targetTouches[0].pageX);
        return
    }
    const {
        params: n,
        touches: o,
        enabled: l
    } = e;
    if (!l || !n.simulateTouch && i.pointerType === "mouse" || e.animating && n.preventInteractionOnTransition) return;
    !e.animating && n.cssMode && n.loop && e.loopFix();
    let a = i.target;
    if (n.touchEventsTarget === "wrapper" && !e.wrapperEl.contains(a) || "which" in i && i.which === 3 || "button" in i && i.button > 0 || r.isTouched && r.isMoved) return;
    const d = !!n.noSwipingClass && n.noSwipingClass !== "",
        c = i.composedPath ? i.composedPath() : i.path;
    d && i.target && i.target.shadowRoot && c && (a = c[0]);
    const u = n.noSwipingSelector ? n.noSwipingSelector : `.${n.noSwipingClass}`,
        h = !!(i.target && i.target.shadowRoot);
    if (n.noSwiping && (h ? zt(u, a) : a.closest(u))) {
        e.allowClick = !0;
        return
    }
    if (n.swipeHandler && !a.closest(n.swipeHandler)) return;
    o.currentX = i.pageX, o.currentY = i.pageY;
    const f = o.currentX,
        p = o.currentY;
    if (!pe(e, i, f)) return;
    Object.assign(r, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0
    }), o.startX = f, o.startY = p, r.touchStartTime = U(), e.allowClick = !0, e.updateSize(), e.swipeDirection = void 0, n.threshold > 0 && (r.allowThresholdMove = !1);
    let g = !0;
    a.matches(r.focusableElements) && (g = !1, a.nodeName === "SELECT" && (r.isTouched = !1)), t.activeElement && t.activeElement.matches(r.focusableElements) && t.activeElement !== a && t.activeElement.blur();
    const E = g && e.allowTouchMove && n.touchStartPreventDefault;
    (n.touchStartForcePreventDefault || E) && !a.isContentEditable && i.preventDefault(), n.freeMode && n.freeMode.enabled && e.freeMode && e.animating && !n.cssMode && e.freeMode.onTouchStart(), e.emit("touchStart", i)
}

function Gt(s) {
    const e = H(),
        t = this,
        i = t.touchEventsData,
        {
            params: r,
            touches: n,
            rtlTranslate: o,
            enabled: l
        } = t;
    if (!l || !r.simulateTouch && s.pointerType === "mouse") return;
    let a = s;
    if (a.originalEvent && (a = a.originalEvent), a.type === "pointermove" && (i.touchId !== null || a.pointerId !== i.pointerId)) return;
    let d;
    if (a.type === "touchmove") {
        if (d = [...a.changedTouches].filter(M => M.identifier === i.touchId)[0], !d || d.identifier !== i.touchId) return
    } else d = a;
    if (!i.isTouched) {
        i.startMoving && i.isScrolling && t.emit("touchMoveOpposite", a);
        return
    }
    const c = d.pageX,
        u = d.pageY;
    if (a.preventedByNestedSwiper) {
        n.startX = c, n.startY = u;
        return
    }
    if (!t.allowTouchMove) {
        a.target.matches(i.focusableElements) || (t.allowClick = !1), i.isTouched && (Object.assign(n, {
            startX: c,
            startY: u,
            currentX: c,
            currentY: u
        }), i.touchStartTime = U());
        return
    }
    if (r.touchReleaseOnEdges && !r.loop) {
        if (t.isVertical()) {
            if (u < n.startY && t.translate <= t.maxTranslate() || u > n.startY && t.translate >= t.minTranslate()) {
                i.isTouched = !1, i.isMoved = !1;
                return
            }
        } else if (c < n.startX && t.translate <= t.maxTranslate() || c > n.startX && t.translate >= t.minTranslate()) return
    }
    if (e.activeElement && a.target === e.activeElement && a.target.matches(i.focusableElements)) {
        i.isMoved = !0, t.allowClick = !1;
        return
    }
    i.allowTouchCallbacks && t.emit("touchMove", a), n.previousX = n.currentX, n.previousY = n.currentY, n.currentX = c, n.currentY = u;
    const h = n.currentX - n.startX,
        f = n.currentY - n.startY;
    if (t.params.threshold && Math.sqrt(h ** 2 + f ** 2) < t.params.threshold) return;
    if (typeof i.isScrolling > "u") {
        let M;
        t.isHorizontal() && n.currentY === n.startY || t.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : h * h + f * f >= 25 && (M = Math.atan2(Math.abs(f), Math.abs(h)) * 180 / Math.PI, i.isScrolling = t.isHorizontal() ? M > r.touchAngle : 90 - M > r.touchAngle)
    }
    if (i.isScrolling && t.emit("touchMoveOpposite", a), typeof i.startMoving > "u" && (n.currentX !== n.startX || n.currentY !== n.startY) && (i.startMoving = !0), i.isScrolling || a.type === "touchmove" && i.preventTouchMoveFromPointerMove) {
        i.isTouched = !1;
        return
    }
    if (!i.startMoving) return;
    t.allowClick = !1, !r.cssMode && a.cancelable && a.preventDefault(), r.touchMoveStopPropagation && !r.nested && a.stopPropagation();
    let p = t.isHorizontal() ? h : f,
        g = t.isHorizontal() ? n.currentX - n.previousX : n.currentY - n.previousY;
    r.oneWayMovement && (p = Math.abs(p) * (o ? 1 : -1), g = Math.abs(g) * (o ? 1 : -1)), n.diff = p, p *= r.touchRatio, o && (p = -p, g = -g);
    const E = t.touchesDirection;
    t.swipeDirection = p > 0 ? "prev" : "next", t.touchesDirection = g > 0 ? "prev" : "next";
    const v = t.params.loop && !r.cssMode,
        C = t.touchesDirection === "next" && t.allowSlideNext || t.touchesDirection === "prev" && t.allowSlidePrev;
    if (!i.isMoved) {
        if (v && C && t.loopFix({
                direction: t.swipeDirection
            }), i.startTranslate = t.getTranslate(), t.setTransition(0), t.animating) {
            const M = new window.CustomEvent("transitionend", {
                bubbles: !0,
                cancelable: !0
            });
            t.wrapperEl.dispatchEvent(M)
        }
        i.allowMomentumBounce = !1, r.grabCursor && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!0), t.emit("sliderFirstMove", a)
    }
    let m;
    if (new Date().getTime(), i.isMoved && i.allowThresholdMove && E !== t.touchesDirection && v && C && Math.abs(p) >= 1) {
        Object.assign(n, {
            startX: c,
            startY: u,
            currentX: c,
            currentY: u,
            startTranslate: i.currentTranslate
        }), i.loopSwapReset = !0, i.startTranslate = i.currentTranslate;
        return
    }
    t.emit("sliderMove", a), i.isMoved = !0, i.currentTranslate = p + i.startTranslate;
    let b = !0,
        y = r.resistanceRatio;
    if (r.touchReleaseOnEdges && (y = 0), p > 0 ? (v && C && !m && i.allowThresholdMove && i.currentTranslate > (r.centeredSlides ? t.minTranslate() - t.slidesSizesGrid[t.activeIndex + 1] : t.minTranslate()) && t.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0
        }), i.currentTranslate > t.minTranslate() && (b = !1, r.resistance && (i.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + i.startTranslate + p) ** y))) : p < 0 && (v && C && !m && i.allowThresholdMove && i.currentTranslate < (r.centeredSlides ? t.maxTranslate() + t.slidesSizesGrid[t.slidesSizesGrid.length - 1] : t.maxTranslate()) && t.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex: t.slides.length - (r.slidesPerView === "auto" ? t.slidesPerViewDynamic() : Math.ceil(parseFloat(r.slidesPerView, 10)))
        }), i.currentTranslate < t.maxTranslate() && (b = !1, r.resistance && (i.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - i.startTranslate - p) ** y))), b && (a.preventedByNestedSwiper = !0), !t.allowSlideNext && t.swipeDirection === "next" && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !t.allowSlidePrev && t.swipeDirection === "prev" && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), !t.allowSlidePrev && !t.allowSlideNext && (i.currentTranslate = i.startTranslate), r.threshold > 0)
        if (Math.abs(p) > r.threshold || i.allowThresholdMove) {
            if (!i.allowThresholdMove) {
                i.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, i.currentTranslate = i.startTranslate, n.diff = t.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY;
                return
            }
        } else {
            i.currentTranslate = i.startTranslate;
            return
        }! r.followFinger || r.cssMode || ((r.freeMode && r.freeMode.enabled && t.freeMode || r.watchSlidesProgress) && (t.updateActiveIndex(), t.updateSlidesClasses()), r.freeMode && r.freeMode.enabled && t.freeMode && t.freeMode.onTouchMove(), t.updateProgress(i.currentTranslate), t.setTranslate(i.currentTranslate))
}

function Vt(s) {
    const e = this,
        t = e.touchEventsData;
    let i = s;
    i.originalEvent && (i = i.originalEvent);
    let r;
    if (i.type === "touchend" || i.type === "touchcancel") {
        if (r = [...i.changedTouches].filter(y => y.identifier === t.touchId)[0], !r || r.identifier !== t.touchId) return
    } else {
        if (t.touchId !== null || i.pointerId !== t.pointerId) return;
        r = i
    }
    if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(i.type) && !(["pointercancel", "contextmenu"].includes(i.type) && (e.browser.isSafari || e.browser.isWebView))) return;
    t.pointerId = null, t.touchId = null;
    const {
        params: o,
        touches: l,
        rtlTranslate: a,
        slidesGrid: d,
        enabled: c
    } = e;
    if (!c || !o.simulateTouch && i.pointerType === "mouse") return;
    if (t.allowTouchCallbacks && e.emit("touchEnd", i), t.allowTouchCallbacks = !1, !t.isTouched) {
        t.isMoved && o.grabCursor && e.setGrabCursor(!1), t.isMoved = !1, t.startMoving = !1;
        return
    }
    o.grabCursor && t.isMoved && t.isTouched && (e.allowSlideNext === !0 || e.allowSlidePrev === !0) && e.setGrabCursor(!1);
    const u = U(),
        h = u - t.touchStartTime;
    if (e.allowClick) {
        const y = i.path || i.composedPath && i.composedPath();
        e.updateClickedSlide(y && y[0] || i.target, y), e.emit("tap click", i), h < 300 && u - t.lastClickTime < 300 && e.emit("doubleTap doubleClick", i)
    }
    if (t.lastClickTime = U(), re(() => {
            e.destroyed || (e.allowClick = !0)
        }), !t.isTouched || !t.isMoved || !e.swipeDirection || l.diff === 0 && !t.loopSwapReset || t.currentTranslate === t.startTranslate && !t.loopSwapReset) {
        t.isTouched = !1, t.isMoved = !1, t.startMoving = !1;
        return
    }
    t.isTouched = !1, t.isMoved = !1, t.startMoving = !1;
    let f;
    if (o.followFinger ? f = a ? e.translate : -e.translate : f = -t.currentTranslate, o.cssMode) return;
    if (o.freeMode && o.freeMode.enabled) {
        e.freeMode.onTouchEnd({
            currentPos: f
        });
        return
    }
    const p = f >= -e.maxTranslate() && !e.params.loop;
    let g = 0,
        E = e.slidesSizesGrid[0];
    for (let y = 0; y < d.length; y += y < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup) {
        const M = y < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
        typeof d[y + M] < "u" ? (p || f >= d[y] && f < d[y + M]) && (g = y, E = d[y + M] - d[y]) : (p || f >= d[y]) && (g = y, E = d[d.length - 1] - d[d.length - 2])
    }
    let v = null,
        C = null;
    o.rewind && (e.isBeginning ? C = o.virtual && o.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1 : e.isEnd && (v = 0));
    const m = (f - d[g]) / E,
        b = g < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
    if (h > o.longSwipesMs) {
        if (!o.longSwipes) {
            e.slideTo(e.activeIndex);
            return
        }
        e.swipeDirection === "next" && (m >= o.longSwipesRatio ? e.slideTo(o.rewind && e.isEnd ? v : g + b) : e.slideTo(g)), e.swipeDirection === "prev" && (m > 1 - o.longSwipesRatio ? e.slideTo(g + b) : C !== null && m < 0 && Math.abs(m) > o.longSwipesRatio ? e.slideTo(C) : e.slideTo(g))
    } else {
        if (!o.shortSwipes) {
            e.slideTo(e.activeIndex);
            return
        }
        e.navigation && (i.target === e.navigation.nextEl || i.target === e.navigation.prevEl) ? i.target === e.navigation.nextEl ? e.slideTo(g + b) : e.slideTo(g) : (e.swipeDirection === "next" && e.slideTo(v !== null ? v : g + b), e.swipeDirection === "prev" && e.slideTo(C !== null ? C : g))
    }
}

function me() {
    const s = this,
        {
            params: e,
            el: t
        } = s;
    if (t && t.offsetWidth === 0) return;
    e.breakpoints && s.setBreakpoint();
    const {
        allowSlideNext: i,
        allowSlidePrev: r,
        snapGrid: n
    } = s, o = s.virtual && s.params.virtual.enabled;
    s.allowSlideNext = !0, s.allowSlidePrev = !0, s.updateSize(), s.updateSlides(), s.updateSlidesClasses();
    const l = o && e.loop;
    (e.slidesPerView === "auto" || e.slidesPerView > 1) && s.isEnd && !s.isBeginning && !s.params.centeredSlides && !l ? s.slideTo(s.slides.length - 1, 0, !1, !0) : s.params.loop && !o ? s.slideToLoop(s.realIndex, 0, !1, !0) : s.slideTo(s.activeIndex, 0, !1, !0), s.autoplay && s.autoplay.running && s.autoplay.paused && (clearTimeout(s.autoplay.resizeTimeout), s.autoplay.resizeTimeout = setTimeout(() => {
        s.autoplay && s.autoplay.running && s.autoplay.paused && s.autoplay.resume()
    }, 500)), s.allowSlidePrev = r, s.allowSlideNext = i, s.params.watchOverflow && n !== s.snapGrid && s.checkOverflow()
}

function Bt(s) {
    const e = this;
    e.enabled && (e.allowClick || (e.params.preventClicks && s.preventDefault(), e.params.preventClicksPropagation && e.animating && (s.stopPropagation(), s.stopImmediatePropagation())))
}

function qt() {
    const s = this,
        {
            wrapperEl: e,
            rtlTranslate: t,
            enabled: i
        } = s;
    if (!i) return;
    s.previousTranslate = s.translate, s.isHorizontal() ? s.translate = -e.scrollLeft : s.translate = -e.scrollTop, s.translate === 0 && (s.translate = 0), s.updateActiveIndex(), s.updateSlidesClasses();
    let r;
    const n = s.maxTranslate() - s.minTranslate();
    n === 0 ? r = 0 : r = (s.translate - s.minTranslate()) / n, r !== s.progress && s.updateProgress(t ? -s.translate : s.translate), s.emit("setTranslate", s.translate, !1)
}

function Ft(s) {
    const e = this;
    X(e, s.target), !(e.params.cssMode || e.params.slidesPerView !== "auto" && !e.params.autoHeight) && e.update()
}

function Ht() {
    const s = this;
    s.documentTouchHandlerProceeded || (s.documentTouchHandlerProceeded = !0, s.params.touchReleaseOnEdges && (s.el.style.touchAction = "auto"))
}
const Ce = (s, e) => {
    const t = H(),
        {
            params: i,
            el: r,
            wrapperEl: n,
            device: o
        } = s,
        l = !!i.nested,
        a = e === "on" ? "addEventListener" : "removeEventListener",
        d = e;
    t[a]("touchstart", s.onDocumentTouchStart, {
        passive: !1,
        capture: l
    }), r[a]("touchstart", s.onTouchStart, {
        passive: !1
    }), r[a]("pointerdown", s.onTouchStart, {
        passive: !1
    }), t[a]("touchmove", s.onTouchMove, {
        passive: !1,
        capture: l
    }), t[a]("pointermove", s.onTouchMove, {
        passive: !1,
        capture: l
    }), t[a]("touchend", s.onTouchEnd, {
        passive: !0
    }), t[a]("pointerup", s.onTouchEnd, {
        passive: !0
    }), t[a]("pointercancel", s.onTouchEnd, {
        passive: !0
    }), t[a]("touchcancel", s.onTouchEnd, {
        passive: !0
    }), t[a]("pointerout", s.onTouchEnd, {
        passive: !0
    }), t[a]("pointerleave", s.onTouchEnd, {
        passive: !0
    }), t[a]("contextmenu", s.onTouchEnd, {
        passive: !0
    }), (i.preventClicks || i.preventClicksPropagation) && r[a]("click", s.onClick, !0), i.cssMode && n[a]("scroll", s.onScroll), i.updateOnWindowResize ? s[d](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", me, !0) : s[d]("observerUpdate", me, !0), r[a]("load", s.onLoad, {
        capture: !0
    })
};

function Nt() {
    const s = this,
        {
            params: e
        } = s;
    s.onTouchStart = Dt.bind(s), s.onTouchMove = Gt.bind(s), s.onTouchEnd = Vt.bind(s), s.onDocumentTouchStart = Ht.bind(s), e.cssMode && (s.onScroll = qt.bind(s)), s.onClick = Bt.bind(s), s.onLoad = Ft.bind(s), Ce(s, "on")
}

function Wt() {
    Ce(this, "off")
}
var Rt = {
    attachEvents: Nt,
    detachEvents: Wt
};
const ge = (s, e) => s.grid && e.grid && e.grid.rows > 1;

function jt() {
    const s = this,
        {
            realIndex: e,
            initialized: t,
            params: i,
            el: r
        } = s,
        n = i.breakpoints;
    if (!n || n && Object.keys(n).length === 0) return;
    const o = s.getBreakpoint(n, s.params.breakpointsBase, s.el);
    if (!o || s.currentBreakpoint === o) return;
    const a = (o in n ? n[o] : void 0) || s.originalParams,
        d = ge(s, i),
        c = ge(s, a),
        u = s.params.grabCursor,
        h = a.grabCursor,
        f = i.enabled;
    d && !c ? (r.classList.remove(`${i.containerModifierClass}grid`, `${i.containerModifierClass}grid-column`), s.emitContainerClasses()) : !d && c && (r.classList.add(`${i.containerModifierClass}grid`), (a.grid.fill && a.grid.fill === "column" || !a.grid.fill && i.grid.fill === "column") && r.classList.add(`${i.containerModifierClass}grid-column`), s.emitContainerClasses()), u && !h ? s.unsetGrabCursor() : !u && h && s.setGrabCursor(), ["navigation", "pagination", "scrollbar"].forEach(m => {
        if (typeof a[m] > "u") return;
        const b = i[m] && i[m].enabled,
            y = a[m] && a[m].enabled;
        b && !y && s[m].disable(), !b && y && s[m].enable()
    });
    const p = a.direction && a.direction !== i.direction,
        g = i.loop && (a.slidesPerView !== i.slidesPerView || p),
        E = i.loop;
    p && t && s.changeDirection(), k(s.params, a);
    const v = s.params.enabled,
        C = s.params.loop;
    Object.assign(s, {
        allowTouchMove: s.params.allowTouchMove,
        allowSlideNext: s.params.allowSlideNext,
        allowSlidePrev: s.params.allowSlidePrev
    }), f && !v ? s.disable() : !f && v && s.enable(), s.currentBreakpoint = o, s.emit("_beforeBreakpoint", a), t && (g ? (s.loopDestroy(), s.loopCreate(e), s.updateSlides()) : !E && C ? (s.loopCreate(e), s.updateSlides()) : E && !C && s.loopDestroy()), s.emit("breakpoint", a)
}

function Yt(s, e, t) {
    if (e === void 0 && (e = "window"), !s || e === "container" && !t) return;
    let i = !1;
    const r = O(),
        n = e === "window" ? r.innerHeight : t.clientHeight,
        o = Object.keys(s).map(l => {
            if (typeof l == "string" && l.indexOf("@") === 0) {
                const a = parseFloat(l.substr(1));
                return {
                    value: n * a,
                    point: l
                }
            }
            return {
                value: l,
                point: l
            }
        });
    o.sort((l, a) => parseInt(l.value, 10) - parseInt(a.value, 10));
    for (let l = 0; l < o.length; l += 1) {
        const {
            point: a,
            value: d
        } = o[l];
        e === "window" ? r.matchMedia(`(min-width: ${d}px)`).matches && (i = a) : d <= t.clientWidth && (i = a)
    }
    return i || "max"
}
var Xt = {
    setBreakpoint: jt,
    getBreakpoint: Yt
};

function Ut(s, e) {
    const t = [];
    return s.forEach(i => {
        typeof i == "object" ? Object.keys(i).forEach(r => {
            i[r] && t.push(e + r)
        }) : typeof i == "string" && t.push(e + i)
    }), t
}

function Jt() {
    const s = this,
        {
            classNames: e,
            params: t,
            rtl: i,
            el: r,
            device: n
        } = s,
        o = Ut(["initialized", t.direction, {
            "free-mode": s.params.freeMode && t.freeMode.enabled
        }, {
            autoheight: t.autoHeight
        }, {
            rtl: i
        }, {
            grid: t.grid && t.grid.rows > 1
        }, {
            "grid-column": t.grid && t.grid.rows > 1 && t.grid.fill === "column"
        }, {
            android: n.android
        }, {
            ios: n.ios
        }, {
            "css-mode": t.cssMode
        }, {
            centered: t.cssMode && t.centeredSlides
        }, {
            "watch-progress": t.watchSlidesProgress
        }], t.containerModifierClass);
    e.push(...o), r.classList.add(...e), s.emitContainerClasses()
}

function Kt() {
    const s = this,
        {
            el: e,
            classNames: t
        } = s;
    e.classList.remove(...t), s.emitContainerClasses()
}
var Qt = {
    addClasses: Jt,
    removeClasses: Kt
};

function Zt() {
    const s = this,
        {
            isLocked: e,
            params: t
        } = s,
        {
            slidesOffsetBefore: i
        } = t;
    if (i) {
        const r = s.slides.length - 1,
            n = s.slidesGrid[r] + s.slidesSizesGrid[r] + i * 2;
        s.isLocked = s.size > n
    } else s.isLocked = s.snapGrid.length === 1;
    t.allowSlideNext === !0 && (s.allowSlideNext = !s.isLocked), t.allowSlidePrev === !0 && (s.allowSlidePrev = !s.isLocked), e && e !== s.isLocked && (s.isEnd = !1), e !== s.isLocked && s.emit(s.isLocked ? "lock" : "unlock")
}
var ei = {
        checkOverflow: Zt
    },
    ve = {
        init: !0,
        direction: "horizontal",
        oneWayMovement: !1,
        swiperElementNodeName: "SWIPER-CONTAINER",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        eventsPrefix: "swiper",
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopAddBlankSlides: !0,
        loopAdditionalSlides: 0,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-blank",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideFullyVisibleClass: "swiper-slide-fully-visible",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        lazyPreloaderClass: "swiper-lazy-preloader",
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1
    };

function ti(s, e) {
    return function (i) {
        i === void 0 && (i = {});
        const r = Object.keys(i)[0],
            n = i[r];
        if (typeof n != "object" || n === null) {
            k(e, i);
            return
        }
        if (s[r] === !0 && (s[r] = {
                enabled: !0
            }), r === "navigation" && s[r] && s[r].enabled && !s[r].prevEl && !s[r].nextEl && (s[r].auto = !0), ["pagination", "scrollbar"].indexOf(r) >= 0 && s[r] && s[r].enabled && !s[r].el && (s[r].auto = !0), !(r in s && "enabled" in n)) {
            k(e, i);
            return
        }
        typeof s[r] == "object" && !("enabled" in s[r]) && (s[r].enabled = !0), s[r] || (s[r] = {
            enabled: !1
        }), k(e, i)
    }
}
const ie = {
        eventsEmitter: Qe,
        update: dt,
        translate: mt,
        transition: St,
        slide: Pt,
        loop: Lt,
        grabCursor: Ot,
        events: Rt,
        breakpoints: Xt,
        checkOverflow: ei,
        classes: Qt
    },
    se = {};
class z {
    constructor() {
        let e, t;
        for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++) r[n] = arguments[n];
        r.length === 1 && r[0].constructor && Object.prototype.toString.call(r[0]).slice(8, -1) === "Object" ? t = r[0] : [e, t] = r, t || (t = {}), t = k({}, t), e && !t.el && (t.el = e);
        const o = H();
        if (t.el && typeof t.el == "string" && o.querySelectorAll(t.el).length > 1) {
            const c = [];
            return o.querySelectorAll(t.el).forEach(u => {
                const h = k({}, t, {
                    el: u
                });
                c.push(new z(h))
            }), c
        }
        const l = this;
        l.__swiper__ = !0, l.support = ye(), l.device = xe({
            userAgent: t.userAgent
        }), l.browser = Ue(), l.eventsListeners = {}, l.eventsAnyListeners = [], l.modules = [...l.__modules__], t.modules && Array.isArray(t.modules) && l.modules.push(...t.modules);
        const a = {};
        l.modules.forEach(c => {
            c({
                params: t,
                swiper: l,
                extendParams: ti(t, a),
                on: l.on.bind(l),
                once: l.once.bind(l),
                off: l.off.bind(l),
                emit: l.emit.bind(l)
            })
        });
        const d = k({}, ve, a);
        return l.params = k({}, d, se, t), l.originalParams = k({}, l.params), l.passedParams = k({}, t), l.params && l.params.on && Object.keys(l.params.on).forEach(c => {
            l.on(c, l.params.on[c])
        }), l.params && l.params.onAny && l.onAny(l.params.onAny), Object.assign(l, {
            enabled: l.params.enabled,
            el: e,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal() {
                return l.params.direction === "horizontal"
            },
            isVertical() {
                return l.params.direction === "vertical"
            },
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            cssOverflowAdjustment() {
                return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
            },
            allowSlideNext: l.params.allowSlideNext,
            allowSlidePrev: l.params.allowSlidePrev,
            touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: l.params.focusableElements,
                lastClickTime: 0,
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                startMoving: void 0,
                pointerId: null,
                touchId: null
            },
            allowClick: !0,
            allowTouchMove: l.params.allowTouchMove,
            touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
        }), l.emit("_swiper"), l.params.init && l.init(), l
    }
    getDirectionLabel(e) {
        return this.isHorizontal() ? e : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom"
        } [e]
    }
    getSlideIndex(e) {
        const {
            slidesEl: t,
            params: i
        } = this, r = G(t, `.${i.slideClass}, swiper-slide`), n = fe(r[0]);
        return fe(e) - n
    }
    getSlideIndexByData(e) {
        return this.getSlideIndex(this.slides.filter(t => t.getAttribute("data-swiper-slide-index") * 1 === e)[0])
    }
    recalcSlides() {
        const e = this,
            {
                slidesEl: t,
                params: i
            } = e;
        e.slides = G(t, `.${i.slideClass}, swiper-slide`)
    }
    enable() {
        const e = this;
        e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
    }
    disable() {
        const e = this;
        e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
    }
    setProgress(e, t) {
        const i = this;
        e = Math.min(Math.max(e, 0), 1);
        const r = i.minTranslate(),
            o = (i.maxTranslate() - r) * e + r;
        i.translateTo(o, typeof t > "u" ? 0 : t), i.updateActiveIndex(), i.updateSlidesClasses()
    }
    emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className.split(" ").filter(i => i.indexOf("swiper") === 0 || i.indexOf(e.params.containerModifierClass) === 0);
        e.emit("_containerClasses", t.join(" "))
    }
    getSlideClasses(e) {
        const t = this;
        return t.destroyed ? "" : e.className.split(" ").filter(i => i.indexOf("swiper-slide") === 0 || i.indexOf(t.params.slideClass) === 0).join(" ")
    }
    emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.forEach(i => {
            const r = e.getSlideClasses(i);
            t.push({
                slideEl: i,
                classNames: r
            }), e.emit("_slideClass", i, r)
        }), e.emit("_slideClasses", t)
    }
    slidesPerViewDynamic(e, t) {
        e === void 0 && (e = "current"), t === void 0 && (t = !1);
        const i = this,
            {
                params: r,
                slides: n,
                slidesGrid: o,
                slidesSizesGrid: l,
                size: a,
                activeIndex: d
            } = i;
        let c = 1;
        if (typeof r.slidesPerView == "number") return r.slidesPerView;
        if (r.centeredSlides) {
            let u = n[d] ? Math.ceil(n[d].swiperSlideSize) : 0,
                h;
            for (let f = d + 1; f < n.length; f += 1) n[f] && !h && (u += Math.ceil(n[f].swiperSlideSize), c += 1, u > a && (h = !0));
            for (let f = d - 1; f >= 0; f -= 1) n[f] && !h && (u += n[f].swiperSlideSize, c += 1, u > a && (h = !0))
        } else if (e === "current")
            for (let u = d + 1; u < n.length; u += 1)(t ? o[u] + l[u] - o[d] < a : o[u] - o[d] < a) && (c += 1);
        else
            for (let u = d - 1; u >= 0; u -= 1) o[d] - o[u] < a && (c += 1);
        return c
    }
    update() {
        const e = this;
        if (!e || e.destroyed) return;
        const {
            snapGrid: t,
            params: i
        } = e;
        i.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach(o => {
            o.complete && X(e, o)
        }), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses();

        function r() {
            const o = e.rtlTranslate ? e.translate * -1 : e.translate,
                l = Math.min(Math.max(o, e.maxTranslate()), e.minTranslate());
            e.setTranslate(l), e.updateActiveIndex(), e.updateSlidesClasses()
        }
        let n;
        if (i.freeMode && i.freeMode.enabled && !i.cssMode) r(), i.autoHeight && e.updateAutoHeight();
        else {
            if ((i.slidesPerView === "auto" || i.slidesPerView > 1) && e.isEnd && !i.centeredSlides) {
                const o = e.virtual && i.virtual.enabled ? e.virtual.slides : e.slides;
                n = e.slideTo(o.length - 1, 0, !1, !0)
            } else n = e.slideTo(e.activeIndex, 0, !1, !0);
            n || r()
        }
        i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
    }
    changeDirection(e, t) {
        t === void 0 && (t = !0);
        const i = this,
            r = i.params.direction;
        return e || (e = r === "horizontal" ? "vertical" : "horizontal"), e === r || e !== "horizontal" && e !== "vertical" || (i.el.classList.remove(`${i.params.containerModifierClass}${r}`), i.el.classList.add(`${i.params.containerModifierClass}${e}`), i.emitContainerClasses(), i.params.direction = e, i.slides.forEach(n => {
            e === "vertical" ? n.style.width = "" : n.style.height = ""
        }), i.emit("changeDirection"), t && i.update()), i
    }
    changeLanguageDirection(e) {
        const t = this;
        t.rtl && e === "rtl" || !t.rtl && e === "ltr" || (t.rtl = e === "rtl", t.rtlTranslate = t.params.direction === "horizontal" && t.rtl, t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
    }
    mount(e) {
        const t = this;
        if (t.mounted) return !0;
        let i = e || t.params.el;
        if (typeof i == "string" && (i = document.querySelector(i)), !i) return !1;
        i.swiper = t, i.parentNode && i.parentNode.host && i.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
        const r = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;
        let o = (() => i && i.shadowRoot && i.shadowRoot.querySelector ? i.shadowRoot.querySelector(r()) : G(i, r())[0])();
        return !o && t.params.createElements && (o = ne("div", t.params.wrapperClass), i.append(o), G(i, `.${t.params.slideClass}`).forEach(l => {
            o.append(l)
        })), Object.assign(t, {
            el: i,
            wrapperEl: o,
            slidesEl: t.isElement && !i.parentNode.host.slideSlots ? i.parentNode.host : o,
            hostEl: t.isElement ? i.parentNode.host : i,
            mounted: !0,
            rtl: i.dir.toLowerCase() === "rtl" || B(i, "direction") === "rtl",
            rtlTranslate: t.params.direction === "horizontal" && (i.dir.toLowerCase() === "rtl" || B(i, "direction") === "rtl"),
            wrongRTL: B(o, "display") === "-webkit-box"
        }), !0
    }
    init(e) {
        const t = this;
        if (t.initialized || t.mount(e) === !1) return t;
        t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents();
        const r = [...t.el.querySelectorAll('[loading="lazy"]')];
        return t.isElement && r.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), r.forEach(n => {
            n.complete ? X(t, n) : n.addEventListener("load", o => {
                X(t, o.target)
            })
        }), oe(t), t.initialized = !0, oe(t), t.emit("init"), t.emit("afterInit"), t
    }
    destroy(e, t) {
        e === void 0 && (e = !0), t === void 0 && (t = !0);
        const i = this,
            {
                params: r,
                el: n,
                wrapperEl: o,
                slides: l
            } = i;
        return typeof i.params > "u" || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), r.loop && i.loopDestroy(), t && (i.removeClasses(), n.removeAttribute("style"), o.removeAttribute("style"), l && l.length && l.forEach(a => {
            a.classList.remove(r.slideVisibleClass, r.slideFullyVisibleClass, r.slideActiveClass, r.slideNextClass, r.slidePrevClass), a.removeAttribute("style"), a.removeAttribute("data-swiper-slide-index")
        })), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(a => {
            i.off(a)
        }), e !== !1 && (i.el.swiper = null, Be(i)), i.destroyed = !0), null
    }
    static extendDefaults(e) {
        k(se, e)
    }
    static get extendedDefaults() {
        return se
    }
    static get defaults() {
        return ve
    }
    static installModule(e) {
        z.prototype.__modules__ || (z.prototype.__modules__ = []);
        const t = z.prototype.__modules__;
        typeof e == "function" && t.indexOf(e) < 0 && t.push(e)
    }
    static use(e) {
        return Array.isArray(e) ? (e.forEach(t => z.installModule(t)), z) : (z.installModule(e), z)
    }
}
Object.keys(ie).forEach(s => {
    Object.keys(ie[s]).forEach(e => {
        z.prototype[e] = ie[s][e]
    })
});
z.use([Je, Ke]);
w.registerPlugin(T);
class ii {
    constructor(e, t) {
        this.sections = $(t), this.slider = this.sections.find(".testimonials__wrapper"), this.items = this.slider.find(".testimonials__item"), this.swiper = null, this.nav = this.sections.find(".testimonials__nav"), this.dotsList = this.sections.find(".testimonials__dots"), this.navLeft = this.nav.find(".testimonials__arrow").eq(0), this.navRight = this.nav.find(".testimonials__arrow").eq(1), this.removeSlides(), this.getMinHeight(), this.createDots(), this.init(), window.addEventListener("resize", () => this.getMinHeight())
    }
    removeSlides() {
        this.items.each((e, t) => {
            t.classList.contains("w-condition-invisible") && t.remove()
        }), this.items = this.slider.find(".testimonials__item")
    }
    getMinHeight() {
        let e = 0;
        this.items.each((t, i) => {
            let r = $(i).outerHeight();
            r > e && (e = r)
        }), this.items.css("--height", `${e}px`)
    }
    createDots() {
        this.items.each((e, t) => {
            let i = '<div class="testimonials__dot"></div>';
            this.dotsList.append(i)
        }), this.dot = this.dotsList.children(), this.dot.eq(0).addClass("active")
    }
    init() {
        this.swiper = new z(this.slider[0], {
            loop: !1,
            slidesPerView: 1,
            spaceBetween: 225,
            speed: 1e3,
            preventInteractionOnTransition: !1,
            breakpoints: {
                320: {
                    spaceBetween: 10
                },
                480: {
                    spaceBetween: 225
                }
            }
        }), this.swiper.on("slideChange", () => {
            this.updateCurrentIndex()
        }), this.changeActive(), T.refresh()
    }
    changeActive() {
        this.navLeft.on("click", () => {
            this.swiper.slidePrev(), this.updateCurrentIndex()
        }), this.navRight.on("click", () => {
            this.swiper.slideNext(), this.updateCurrentIndex()
        }), this.dot.each((e, t) => {
            $(t).on("click", () => {
                this.swiper.slideTo(e), this.updateCurrentIndex()
            })
        })
    }
    updateCurrentIndex() {
        this.swiper.realIndex + 1, this.dot.removeClass("active"), this.dot.eq(this.swiper.realIndex).addClass("active")
    }
}
class si {
    constructor() {
        this.list = $(".team__list"), this.item = $(".team__item"), this.setNumber(), this.imgMove(), this.showImg();
        let e = 0,
            t;
        document.addEventListener("mousemove", r => {
            const n = r.clientY;
            t = i(n), e = n
        });

        function i(r) {
            return r > e
        }
        document.querySelectorAll(".team__row").forEach(r => {
            r.addEventListener("mouseenter", n => {
                w.set(r, {
                    "--transform-origin": t ? "top center" : "bottom center"
                })
            }), r.addEventListener("mouseleave", n => {
                w.set(r, {
                    "--transform-origin": t ? "bottom center" : "top center"
                })
            })
        })
    }
    setNumber() {
        this.item.each((e, t) => {
            let r = $(t).find(".team__index").children(),
                n = e + 1;
            r.attr("style", "display: block !important;"), e < 9 ? r.text(`0${n}`) : r.text(n)
        })
    }
    showImg() {
        this.item.each((e, t) => {
            let i = $(t),
                r = i.find(".team__avatar");
            i.on("mouseenter", () => r.addClass("show")), i.on("mouseleave", () => r.removeClass("show"))
        })
    }
    imgMove() {
        let e, t, i = this.item.find(".team__avatar");
        const r = n => {
            e = (n.clientX / window.innerWidth - .5) * 100, t = (n.clientY / window.innerHeight - .5) * 100, w.to(i, {
                duration: .3,
                "--x": e + "%",
                "--y": t + "vh"
            })
        };
        this.list[0].addEventListener("mousemove", n => r(n))
    }
}
w.registerPlugin(T);
class N {
    constructor(e, t, i) {
        this.mm = w.matchMedia(), this.isMobile = "(max-width: 767px)", this.offsetElement = i, this.section = e, this.cards = this.section.find(t), this.padding = 65 / 375 * 100, this.mm.add(this.isMobile, () => this.animation()), this.getCenterCard()
    }
    getCenterCard() {
        let e = this.section.offset().top,
            t = this.cards.offset().top,
            i = window.innerHeight,
            r = t - e - i / 2 + this.cards.eq(0).outerHeight() / 2;
        this.offsetElement && (r = this.offsetElement.position().top), this.section.css("--top", r + "px")
    }
    animation() {
        const e = () => -(this.cards.eq(0).outerWidth() * this.cards.length + this.padding * window.innerWidth / 100 * 2 - window.innerWidth),
            t = w.to(this.cards, {
                x: e,
                ease: "none"
            });
        T.create({
            trigger: this.cards.eq(0),
            start: "top center",
            endTrigger: this.section.parent(),
            end: "bottom bottom",
            scrub: !0,
            animation: t
        })
    }
}
w.registerPlugin(T);
class ri {
    constructor() {
        $(".cards__item").each((t, i) => {
            let r = $(i);
            T.create({
                trigger: r,
                start: "top 60%",
                end: "bottom 10%",
                onEnter: () => r.addClass("active"),
                onEnterBack: () => r.addClass("active"),
                onLeaveBack: () => r.removeClass("active")
            })
        }), this.mob = new N($(".cards"), $(".cards__item"), $(".cards").find(".section-title"))
    }
}
class ni {
    constructor() {
        this.moCards = new N($(".benefits"), $(".cards__item-2"), $(".benefits").find(".eyebrow"))
    }
}
w.registerPlugin(T);
class oi {
    constructor() {
        this.init_order(), this.init_animation(), this.moStats = new N($(".stats"), $(".stats__item"), $(".stats").find(".section-title"))
    }
    init_order() {
        this.mm = w.matchMedia(), this.isMobile = "(max-width: 479px)", this.mm.add(this.isMobile, () => {
            var e = $(".stats__right > .stats__col:first-child > .stats__item:first-child"),
                t = $(".stats__right > .stats__col:first-child > .stats__item:nth-child(2)"),
                i = $(".stats__right > .stats__col:nth-child(2) > .stats__item:first-child"),
                r = e.detach(),
                n = t.detach(),
                o = i.detach();
            $(".stats__right > .stats__col:nth-child(2)").prepend(r), $(".stats__right > .stats__col:first-child").prepend(n), $(".stats__right > .stats__col:first-child").append(o)
        })
    }
    init_animation() {
        this.section = $(".stats"), this.col1 = this.section.find(".stats__col").eq(0), this.col2 = this.section.find(".stats__col").eq(1), this.right = this.section.find(".stats__right"), this.tl = w.timeline({
            scrollTrigger: {
                trigger: this.section,
                start: "top 30%",
                end: "bottom center",
                scrub: !0
            },
            duration: 3
        }), this.tl.fromTo(this.right, {
            opacity: 0
        }, {
            opacity: 1,
            ease: "none",
            duration: .2
        }, 0).to(this.col1, {
            "--y": "10%"
        }, 0).to(this.col2, {
            "--y": "-30%"
        }, 0)
    }
}
w.registerPlugin(T);
class li {
    constructor() {
        this.init_animation(), this.moCards = new N($(".values"), $(".values__item"))
    }
    init_animation() {
        this.section = $(".values"), this.right = this.section.find(".values__right"), this.rightColItems = this.right.find(".values__col").eq(1).find(".values__item"), this.tl = w.timeline({
            scrollTrigger: {
                trigger: this.section,
                start: "top bottom",
                end: "bottom+=50% top",
                scrub: !0
            }
        }), this.tl.fromTo(this.right, {
            "--y": "100px"
        }, {
            "--y": "-600px",
            ease: "none"
        }), this.tl.to(this.rightColItems, {
            "--y": "600px",
            ease: "none"
        }, "<")
    }
}
w.registerPlugin(T);
class ai {
    constructor() {
        this.container = $(".reel"), this.isMobile = window.innerWidth <= 768, this.desktopLink = this.container.attr("desktop-link"), this.mobileLink = this.container.attr("mobile-link"), this.videoLink = this.isMobile ? this.mobileLink : this.desktopLink, this.video = this.container.find("video"), this.img = this.container.find("img"), this.video.append(`<source src="${this.videoLink}" type="video/mp4">`), this.video[0].load(), this.video[0].addEventListener("canplay", () => {
            this.img.css("display", "none"), this.video[0].play(), this.playVideo()
        }), this.btnMove(), this.pauseOnScroll()
    }
    playVideo() {
        this.init != !0 && this.container.on("click", () => {
            this.container.hasClass("playing") ? (this.container.removeClass("playing"), this.video[0].muted = !0) : (this.container.addClass("playing"), this.video[0].muted = !1, this.video[0].currentTime = 0)
        }), this.init = !0
    }
    pauseOnScroll() {
        T.create({
            trigger: this.container,
            start: "bottom -100%",
            onEnter: () => {
                this.container.removeClass("playing"), this.video[0].muted = !0
            }
        })
    }
    btnMove() {
        let e, t, i = this.container.find(".reel__btn");
        const r = n => {
            e = (n.clientX / window.innerWidth - .5) * 100, t = ((n.clientY - this.container[0].getBoundingClientRect().top) / this.container[0].clientHeight - .5) * 100, w.to(i, {
                duration: .3,
                "--x": e + "%",
                "--y": t + "%"
            })
        };
        this.container[0].addEventListener("mousemove", n => r(n)), this.container[0].addEventListener("mouseleave", n => {
            w.to(i, {
                duration: .3,
                "--x": "0%",
                "--y": "0%"
            })
        })
    }
    refresh() {
        T.create({
            trigger: this.container,
            start: "top bottom",
            onLeave: () => T.refresh()
        })
    }
}
w.registerPlugin(T);
class di {
    constructor() {
        this.app = new W, this.lenis = this.app.scroll.lenis, this.section = $(".journey"), this.list = this.section.find(".journey__list"), this.item = this.section.find(".journey__item"), this.side = this.section.find(".journey__side"), this.content = this.section.find(".journey__content--parent"), this.getWidth(), this.hovers(), window.matchMedia("(min-width: 767px)").matches && this.mobile(), this.app.on("resize", () => this.getWidth())
    }
    mobile() {
        this.item.each((e, t) => {
            let i = $(t);
            i.hasClass("active") && window.innerWidth >= 767 || i.on("click", () => {
                this.lenis.scrollTo(this.list[0], {
                    duration: .5,
                    offset: -100
                })
            })
        })
    }
    getWidth() {
        this.sideWidth = this.side.outerWidth(), this.side.css("--width", this.sideWidth + "px"), this.sectionWidth = this.section.outerWidth(), this.contentSpace = this.sectionWidth - this.sideWidth * this.side.length, this.content.css("--width", this.contentSpace + "px")
    }
    hovers() {
        this.item.eq(0).addClass("active"), setTimeout(() => T.refresh(), 450), this.item.each((e, t) => {
            let i = $(t);
            i.on("click", () => {
                i.siblings().removeClass("active"), i.addClass("active"), setTimeout(() => T.refresh(), 450)
            })
        })
    }
}
w.registerPlugin(T);
class ci {
    constructor() {
        this.init_animation(), this.moStats = new N($(".stats"), $(".stats__item"), $(".stats").find(".section-title"))
    }
    init_animation() {
        this.section = $(".stats"), this.col1 = this.section.find(".stats__col").eq(0), this.col2 = this.section.find(".stats__col").eq(1), this.right = this.section.find(".stats__right"), this.tl = w.timeline({
            scrollTrigger: {
                trigger: this.section,
                start: "top 30%",
                end: "bottom bottom",
                scrub: !0
            },
            duration: 3
        }), this.tl.fromTo(this.right, {
            opacity: 0
        }, {
            opacity: 1,
            ease: "none",
            duration: .2
        }, 0).to(this.col1, {
            "--y": "10%"
        }, 0).to(this.col2, {
            "--y": "-20%"
        }, 0)
    }
}
w.registerPlugin(T);
class ui {
    constructor() {
        this.app = new W, this.section = $(".certification"), this.right = this.section.find(".certification__right"), this.interval = 40, this.tl = w.timeline({
            scrollTrigger: {
                trigger: this.section,
                start: () => "top 30%",
                end: () => "bottom bottom",
                scrub: !0,
                invalidateOnRefresh: !0
            }
        }), this.tl.fromTo(this.right, {
            y: () => `${window.innerHeight}px`
        }, {
            y: () => `${window.innerHeight/2*-1}px`,
            ease: "none"
        }, 0), this.toggleActive(), this.app.on("resize", () => {
            this.toggle.kill(), this.toggleActive()
        })
    }
    toggleActive() {
        this.right.find(".certification__item").each((e, t) => {
            let i = $(t),
                r = i.find(".certification__icon");
            this.toggle = T.create({
                trigger: i,
                start: () => `top center-=${this.interval}px`,
                end: () => "bottom center+=20px",
                invalidateOnRefresh: !0,
                onEnter() {
                    i.siblings().removeClass("active"), i.addClass("active"), r.addClass("active")
                },
                onLeaveBack() {
                    r.removeClass("active")
                },
                onEnterBack() {
                    i.siblings().removeClass("active"), i.addClass("active")
                }
            })
        })
    }
}
class fi {
    constructor() {
        this.imgParallax = new Se
    }
}
w.registerPlugin(T);
class hi {
    constructor() {
        this.proxy_url = "https://significo-proxy.vercel.app/api/proxy/", this.fetchJobs()
    }
    fetchJobs() {
        fetch(this.proxy_url).then(e => e.json()).then(e => {
            const t = document.getElementById("job-template");
            e.length === 0 ? t.innerHTML = '<p class="f-18">There are no open positions at this time.</p>' : this.displayJobs(e), this.drawerInit()
        }).catch(e => console.error("Error:", e))
    }
    displayJobs(e) {
        if (!Array.isArray(e) || e.length === 0) {
            console.error("No jobs data provided or jobs is not an array.");
            return
        }
        const t = document.getElementById("job-template");
        if (!t) {
            console.error("Job template element not found.");
            return
        }
        const i = t.parentElement;
        if (!i) {
            console.error("Parent container of the job template not found.");
            return
        }
        e.forEach((r, n) => {
            if (!r || !r.title || !r.city || !r.state || !r.country_id || !r.board_code || !r.type) {
                console.error("Incomplete job data:", r), t.remove();
                return
            }
            const o = t.cloneNode(!0),
                l = o.querySelector('[title=""]'),
                a = o.querySelector('[location=""]'),
                d = o.querySelector('[job-link=""]');
            l && (l.textContent = r.title), a && (a.textContent = `${r.city}, ${r.state}, ${r.country_id}  —  ${r.type}`), d && (d.href = `https://significo.applytojob.com/apply/${r.board_code}`), o.style.display = "block", i.appendChild(o), n === 0 && t.remove()
        })
    }
    drawerInit() {
        console.log("drawerInit"), this.item = $(".job__department"), this.item.eq(0).addClass("open"), setTimeout(() => T.refresh(), 450), this.item.each((e, t) => {
            let i = $(t);
            i.find(".job__top").on("click", () => {
                i.hasClass("open") ? i.removeClass("open") : i.addClass("open"), i.siblings().removeClass("open"), setTimeout(() => T.refresh(), 450)
            })
        })
    }
}
class pi {
    constructor() {
        this.list = $(".location__list"), this.item = $(".location__item"), this.imgMove(), this.showImg()
    }
    showImg() {
        this.item.each((e, t) => {
            let i = $(t),
                r = i.find(".location__map");
            i.on("mouseenter", () => r.addClass("show")), i.on("mouseleave", () => r.removeClass("show"))
        })
    }
    imgMove() {
        let e, t, i = this.item.find(".location__map");
        const r = n => {
            e = (n.clientX / window.innerWidth - .5) * 100 / 3.5, t = ((n.clientY - this.list[0].getBoundingClientRect().top) / this.list[0].clientHeight - .5) * 100, w.to(i, {
                duration: .3,
                "--x": e + "%",
                "--y": t + "%"
            })
        };
        this.list[0].addEventListener("mousemove", n => r(n))
    }
}
class mi {
    constructor() {
        $("select").each(function () {
            let e = $(this),
                t = $(this).children("option").length;
            e.addClass("s-hidden"), e.wrap('<div class="select"></div>'), e.after('<div class="styledParent"><div class="styledSelect"></div></div>');
            let i = e.next(".styledParent"),
                r = i.find(".styledSelect");
            r.text(e.children("option").eq(0).text());
            let n = $("<ul />", {
                class: "options"
            }).insertAfter(r);
            i.attr("aria-label", "Custom Select"), n.attr("role", "listbox");
            for (let l = 1; l < t; l++) $("<li />", {
                text: e.children("option").eq(l).text(),
                rel: e.children("option").eq(l).val(),
                role: "option",
                "aria-selected": l === 0 ? "true" : "false"
            }).appendTo(n);
            let o = n.children("li");
            i.attr("role", "button").attr("aria-expanded", "false").keydown(function (l) {
                (l.keyCode == 13 || l.keyCode == 32) && (l.preventDefault(), $(this).click())
            }).click(function (l) {
                l.stopPropagation(), $(this).hasClass("active") ? $(this).find("ul.options").removeClass("active") : $(this).find("ul.options").addClass("active"), $(this).toggleClass("active");
                let a = $(this).hasClass("active");
                $(this).attr("aria-expanded", a)
            }), o.click(function (l) {
                l.stopPropagation(), r.text($(this).text()), i.removeClass("active"), e.val($(this).attr("rel")), n.removeClass("active"), r.addClass("checked"), $(this).attr("aria-selected", "true").siblings().attr("aria-selected", "false"), e.add(i).removeClass("error"), e.siblings("label").addClass("hide"), $(this).addClass("checked").siblings().removeClass("checked")
            }), $(document).click(function () {
                i.removeClass("active"), n.removeClass("active")
            })
        }), $(".select-states").find("ul").attr("data-lenis-prevent", "")
    }
}
w.registerPlugin(T);
class gi {
    constructor() {
        $("form").on("submit", () => {
            setTimeout(() => T.refresh(), 1e3), this.checkError()
        })
    }
    checkError() {
        $('input[type="text"], input[type="email"]').each((t, i) => {
            let r = $(i);
            setTimeout(() => {
                r.hasClass("error") && r.attr("placeholder", "* Required")
            }, 100)
        })
    }
}
class vi {
    constructor() {
        this.select = new mi, this.submit = new gi;
        var e = $('[module-name="ContactForm"]');
        if (e.find("form").length === 0) {
            var t = document.createElement("script");
            t.src = "//js-eu1.hsforms.net/forms/embed/v2.js", t.type = "text/javascript", t.charset = "utf-8", t.onload = function () {
                hbspt.forms.create({
                    region: "eu1",
                    portalId: "26527046",
                    formId: "33284d15-0239-4780-9bb1-8dfb122de61d"
                })
            }, document.body.appendChild(t)
        }
    }
}
w.registerPlugin(T);
class wi {
    constructor() {
        this.item = $(".faq__item, [faq-item]"), this.lists = [], this.item.each((e, t) => {
            let r = $(t).parent();
            this.lists.push(r)
        }), this.array = this.lists.filter((e, t, i) => i.map(r => r.prop("className")).indexOf(e.prop("className")) === t), this.array.forEach(e => {
            const t = $(e).find(".faq__item, [faq-item]");
            this.init(t)
        })
    }
    init(e) {
        e.eq(0).addClass("open"), setTimeout(() => T.refresh(), 400), e.each((t, i) => {
            let r = $(i),
                n = r.find(".faq__top");
            n.length === 0 && (n = r.find("[faq-top]")), n.on("click", () => {
                r.hasClass("open") ? r.removeClass("open") : r.addClass("open"), r.siblings().removeClass("open"), setTimeout(() => T.refresh(), 400)
            }), this.setIndex(r, t)
        })
    }
    setIndex(e, t) {
        let i = e.find(".faq__index").children(),
            r = t + 1,
            n = r < 10 ? `0${r}` : r;
        i.text(n)
    }
}
w.registerPlugin(T, D);
class Si {
    constructor() {
        this.app = new W, this.lenis = this.app.scroll.lenis, this.section = $(".cases"), this.item = this.section.find(".cases__item"), this.title = this.item.find(".f-64"), this.titleSplit = new D(this.title, {
            type: "lines, chars",
            charsClass: "slider__char",
            linesClass: "slider__line"
        }), this.item.eq(this.currentIndex).addClass("active"), this.charsDelay(), this.addActive()
    }
    addActive() {
        this.item.each((e, t) => {
            let i = $(t);
            T.create({
                trigger: i,
                start: "top 70%",
                end: "bottom center",
                onEnter: () => {
                    i.addClass("active"), this.changeTheme(i)
                },
                onEnterBack: () => this.changeTheme(i)
            })
        })
    }
    setHeight() {
        let e = this.item.length * 100 + "dvh";
        this.section.css("--height", e), T.refresh()
    }
    changeTheme(e) {
        let t = e.attr("slide-theme");
        $("body").attr("theme", t)
    }
    animation(e) {
        let t = this.item.eq(e);
        this.item.removeClass("active"), t.addClass("active"), this.changeTheme(t)
    }
    scroll() {
        this.section.append('<div class="slider__triggers"></div>'), this.triggersParent = this.section.find(".slider__triggers"), this.item.each((e, t) => {
            this.triggersParent.append(`<div class="slider__trigger" index="${e}"></div>`)
        }), this.trigger = this.section.find(".slider__trigger"), this.trigger.each((e, t) => {
            let i = $(t);
            T.create({
                trigger: i,
                start: () => `top ${window.innerHeight/2+10}`,
                end: () => `bottom ${window.innerHeight/2-10}`,
                invalidateOnRefresh: !0,
                onEnter: () => {
                    this.animation(e), e != 0 && e != this.trigger.length - 1 && (this.lenis.stop(), setTimeout(() => {
                        this.lenis.start(), T.refresh()
                    }, 500))
                },
                onEnterBack: () => {
                    if (this.animation(e), e != 0 && e != this.trigger.length - 1) {
                        if ($("body").hasClass("force-scroll-top")) return;
                        this.lenis.stop(), setTimeout(() => this.lenis.start(), 500)
                    }
                }
            })
        })
    }
    charsDelay() {
        this.title.each((e, t) => {
            $(t).find(this.titleSplit.chars).each((n, o) => {
                $(o).css("--delay", `${n*.01+.1}s`)
            })
        }), this.title.each((e, t) => {
            $(t).find(this.titleSplit.lines).each((n, o) => {
                $(o).css("--delay", `${n*.01+.1}s`)
            })
        })
    }
}
w.registerPlugin(T);
class Ti {
    constructor() {
        this.section = $(".gallery"), this.item = this.section.find(".gallery__item"), this.animation()
    }
    animation() {
        this.item.each((e, t) => {
            let i = $(t),
                r = e % 2 == 0 ? 20 : -20;
            w.timeline({
                scrollTrigger: {
                    trigger: this.section,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: !0
                }
            }).to(i, {
                yPercent: r
            })
        })
    }
}
class bi {
    constructor() {
        this.moCards = new N($(".solutions"), $(".solutions__item"))
    }
}
w.registerPlugin(T);
class yi {
    constructor() {
        this.section = document.querySelector('[module-name="FutureBlock"]'), this.items = [this.section.querySelector(".sol-split__side"), this.section.querySelector(".sol-split__img")], window.matchMedia("(min-width: 480px)").matches && this.items.forEach((e, t) => {
            let i = e,
                r = i.parentNode;
            w.timeline({
                scrollTrigger: {
                    trigger: r,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: !0
                }
            }).to(i, {
                y: t % 2 == 0 ? "10%" : "-40%"
            }, 0)
        })
    }
}
w.registerPlugin(T);
class xi {
    constructor() {
        this.section = document.querySelector('[module-name="StatsBlock"]'), this.items = this.section.querySelectorAll(".stats_container__item"), w.from(this.items, {
            scrollTrigger: {
                trigger: this.section,
                start: "center bottom",
                end: "center center"
            },
            opacity: 0,
            yPercent: 50,
            stagger: .2,
            delay: .3
        })
    }
}
class _i {
    constructor(e, t) {
        this.section = $(t), this.items = this.section.find('[role="listitem"]'), this.items.each((i, r) => {
            this.setIndex($(r), i)
        })
    }
    setIndex(e, t) {
        let i = e.find("[index-item]").children(),
            r = t + 1,
            n = r < 10 ? `0${r}` : r;
        i.text(n)
    }
}
const Ci = s => {
    hbspt.forms.create({
        region: "eu1",
        portalId: "26527046",
        formId: "33284d15-0239-4780-9bb1-8dfb122de61d",
        target: s
    })
};
var Ei = Ci;
w.registerPlugin(T);
class Pi {
    constructor(e, t, i) {
        this.imorts(i)
    }
    imorts(e) {
        function t(r) {
            const n = `https://js-eu1.hsforms.net/forms/embed/v2.js?${r}`;
            Promise.all([$e(() => import(n), [])]).then(([o]) => {
                Ei(e), T.refresh()
            })
        }
        const i = new Date().getMilliseconds();
        t(i)
    }
}
class Ai {
    constructor() {
        this.modules = {
            HeroScroll: {
                module: Le
            },
            HorizontalStats: {
                module: Ae
            },
            caseStudySlider: {
                module: ke
            },
            iconCards: {
                module: ri
            },
            TeamSection: {
                module: si
            },
            Testimonials: {
                module: ii
            },
            Meet: {
                module: Oe
            },
            Articles: {
                module: ze
            },
            wideVideo: {
                module: we,
                args: $("[desktop-link]")
            },
            CaseStudyCarousel: {
                module: De
            },
            ImgParallax: {
                module: Se
            },
            SolutionCards: {
                module: ni
            },
            SlidingStats: {
                module: oi
            },
            Reel: {
                module: ai
            },
            ValuesSlider: {
                module: li
            },
            AboutTimeline: {
                module: di
            },
            EggSlideStats: {
                module: ci
            },
            Certification: {
                module: ui
            },
            ImageCopyBlock: {
                module: fi
            },
            Jobs: {
                module: hi
            },
            Location: {
                module: pi
            },
            ContactForm: {
                module: vi
            },
            Faq: {
                module: wi
            },
            CaseStudyList: {
                module: Si
            },
            Gallery: {
                module: Ti
            },
            SolutionsProvidedCards: {
                module: bi
            },
            FutureBlock: {
                module: yi
            },
            StatsBlock: {
                module: xi
            },
            setIndex: {
                module: _i
            },
            createForm: {
                module: Pi,
                args: $('[module-name="createForm"]')
            }
        }, this.loadModules()
    }
    loadModules() {
        const e = document.querySelectorAll("[module-name]");
        for (const t of e) {
            const i = t.getAttribute("module-name");
            if (!this.modules[i]) {
                console.warn(`Module not found: ${i}`);
                continue
            }
            const r = this.modules[i].module,
                n = t.getAttribute("utils"),
                o = this.modules[i].args || null;
            if (!r) {
                console.warn(`Invalid module name: ${i}`);
                continue
            }
            new r(o, t, n)
        }
    }
}
export {
    Ai as B
};