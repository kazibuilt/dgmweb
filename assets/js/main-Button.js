import{a as e,g as s}from"./main.js";s.registerPlugin(e);class d{constructor(){$(".btn").each((u,n)=>{let t=$(n),a=t.find(".btn__text").eq(0),l=t.find(".btn__text").eq(1),i=new e(a,{type:"chars"}),o=new e(l,{type:"chars"}),r=s.timeline({paused:!0,defaults:{duration:.6,ease:"power2",stagger:.02}});r.to(i.chars,{yPercent:-100}).fromTo(o.chars,{yPercent:100},{yPercent:0},.15),t.on("mouseenter",()=>r.restart())})}}export{d as default};
