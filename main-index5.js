import{B as c}from"./main-Base.js";import{a as r,g as s,S as l}from"./main.js";import"./main-InsertVideo.js";import"./main-ImgParallax.js";import"/assets/js/jquery.validate.min.js";s.registerPlugin(l,r);class d{constructor(){this.section=$(".case-testimonial"),this.text=this.section.find(".case-testimonial_text").children(),this.init(),this.resizeFunc()}init(){this.split=new r(this.text,{type:"lines, chars"}),s.set(this.split.chars,{opacity:.33}),this.tl=s.timeline({scrollTrigger:{trigger:this.text,start:"top 80%",end:"top 25%",scrub:!0,invalidateOnRefresh:!0}}),this.tl.to(this.split.chars,{opacity:1,stagger:.04})}resizeFunc(){let i=window.innerWidth;const o=()=>{let t=window.innerWidth;if(i!==t){if(i>=1440)return;this.split.revert(),this.tl.kill(),this.init()}i=window.innerWidth};function h(t){let e;return function(a){e&&clearTimeout(e),e=setTimeout(t,300,a)}}window.addEventListener("resize",h(function(t){o()}))}}class w extends c{constructor(){super(),this.phrase=new d}}export{w as default};
