import {
    g as l,
    a as n
} from "./main.js";
l.registerPlugin(n);
const p = c => {
    const e = $(".header");
    if (e.length === 0) return;
    const f = e.find(".header__divider");
    let t = e.find(".eyebrow");
    const d = e.find(".f-64"),
        i = e.find(".f-18");
    t.length === 0 && (t = e.find(".back"));
    const o = new n(d, {
        type: "lines, chars"
    });
    let r;
    i.length > 0 && (r = new n(i, {
        type: "lines"
    }));
    const s = l.timeline({
        defaults: {
            duration: .8,
            ease: "power2",
            stagger: .06
        }
    });
    s.fromTo(f, {
        scaleX: 0
    }, {
        scaleX: 1,
        transformOrigin: "left"
    }, c).fromTo(t, {
        opacity: 0
    }, {
        opacity: 1
    }, "<0.2").fromTo(o.chars, {
        opacity: 0,
        rotateX: 45,
        yPercent: 100
    }, {
        opacity: 1,
        rotateX: 0,
        yPercent: 0,
        stagger: .03
    }, "<0.2"), i.length > 0 && s.fromTo(r.lines, {
        opacity: 0
    }, {
        opacity: 1,
        stagger: .02
    }, "<0.2");
    let a = !1;
    window.addEventListener("resize", () => {
        a || (a = !0, o.revert(), r.revert())
    })
};
export {
    p as H
};