import{g as e,S as t,a as n}from"./main.js";e.registerPlugin(n,t);class p{constructor(a,l){l.scrollTo(0,{force:!0,immediate:!0,offset:0});let o=$("main"),r=$(".loader");e.set(r,{clipPath:"circle(0% at 50% 50%)"});let s=$(".nav__logo"),i=$(".nav__list").children();e.set([o,$(".nav")],{autoAlpha:1}),e.timeline({defaults:{duration:.8,ease:"power3"},onStart:a,onComplete:()=>t.refresh()}).fromTo([s,i],{opacity:0},{opacity:1,stagger:.2},.2)}}export{p as default};