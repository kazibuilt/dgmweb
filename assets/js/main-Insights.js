import{g as t,a as c}from"./main.js";import{H as g}from"./main-HeaderAnimation.js";t.registerPlugin(c);class v{constructor(r,o){o.scrollTo(0,{force:!0,immediate:!0,offset:0});let l=$("main"),i=$(".loader");t.set(i,{clipPath:"circle(0% at 50% 50%)"});let n=$(".nav__logo"),f=$(".nav__list").children(),e=$(".featured"),s=e.find(".featured__bg"),a=e.find(".featured__content"),d=a.children(),u=e.find(".featured__btn");g(.4),t.set([l,$(".nav")],{autoAlpha:1}),t.timeline({defaults:{duration:.8,ease:"power3"},onStart:r}).fromTo([n,f],{opacity:0},{opacity:1,stagger:.2},.2).fromTo([s,a,d,u],{opacity:0},{opacity:1,stagger:.2},"<0.7")}}export{v as default};