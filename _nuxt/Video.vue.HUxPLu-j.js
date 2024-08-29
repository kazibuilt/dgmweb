import {
    d as u,
    r as l,
    w as r,
    o as i,
    b as p,
    c as d,
    j as c,
    h as f
} from "./entry.msGjDD6P.js";
const v = ["autoplay", "loop", "muted", "playsinline"],
    y = ["src"],
    _ = u({
        __name: "Video",
        props: {
            _uid: {},
            alt: {},
            autoplay: {
                type: Boolean,
                default: !0
            },
            loop: {
                type: Boolean,
                default: !0
            },
            muted: {
                type: Boolean,
                default: !0
            },
            playsinline: {
                type: Boolean,
                default: !0
            },
            poster: {},
            src: {},
            startLoading: {
                type: Boolean,
                default: !0
            },
            tag: {},
            type: {}
        },
        setup(n) {
            const t = n,
                e = l(null),
                a = l();
            r(() => t.startLoading, () => {
                e.value && e.value.load()
            }), i(() => {
                e.value && (a.value = new IntersectionObserver(s), a.value.observe(e.value))
            }), p(() => {
                a.value && a.value.disconnect()
            });
            const s = ([o]) => {
                o && o.isIntersecting ? e.value && t.autoplay && e.value.play() : e.value && e.value.pause()
            };
            return (o, m) => (d(), c("video", {
                ref_key: "videoRef",
                ref: e,
                autoplay: o.autoplay,
                loop: o.loop,
                muted: o.muted,
                playsinline: o.playsinline
            }, [f("source", {
                src: o.startLoading ? o.src : "",
                type: "video/mp4"
            }, null, 8, y)], 8, v))
        }
    });
export {
    _
};