import{g as t,S as e,a as m}from"./main.js";import{B as n}from"./main-Base.js";import{H as p}from"./main-HeaderAnimation.js";import"./main-InsertVideo.js";import"./main-ImgParallax.js";import"/assets/js/jquery.validate.min.js";t.registerPlugin(m,e);class T{constructor(a,o){o.scrollTo(0,{force:!0,immediate:!0,offset:0});let r=$("main"),i=$(".loader");t.set(i,{clipPath:"circle(0% at 50% 50%)"});let l=$(".nav__logo"),s=$(".nav__list").children();t.set([r,$(".nav")],{autoAlpha:1}),t.timeline({defaults:{duration:.8,ease:"power3"},onStart:a,onComplete:()=>e.refresh()}).fromTo([l,s],{opacity:0},{opacity:1,stagger:.2},.2),p(.4),this.base=new n}}export{T as default};
