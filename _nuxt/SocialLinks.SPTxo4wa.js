import{d as m,T as c,r as _,b as v,c as n,j as p,i as g,f as L,h as r,t as u,I as S,m as B,e as f,G as C,F as d,p as i,q as N,_ as w,x as h,k as I}from"./entry.msGjDD6P.js";const M={class:"index"},R=m({__name:"Pill",props:{hasSeparator:{type:Boolean,default:!1},link:{},number:{},theme:{default:c.Orange}},setup(k){const e=_(null),t=_(null);let a;v(()=>{a&&a.kill()});const l=()=>{e.value&&t.value&&(a=i.timeline({paused:!0}),a.addLabel("start").to(e.value,{y:-50,duration:.3,ease:"power3.in"},"start").fromTo(t.value,{autoAlpha:1,y:50},{y:0,duration:.3,ease:"power3.out"},"start+=0.15").set(e.value,{y:0}).set(t.value,{autoAlpha:0,y:50}),a.play())},o=()=>{a&&a.kill(),e.value&&t.value&&(i.set(e.value,{y:0}),i.set(t.value,{y:50}))};return(s,V)=>{const b=N,y=w;return n(),p(d,null,[g(b,{class:S(["pill",s.theme===B(c).OffWhite&&"off-white"]),target:s.link.target,to:s.link.href,onMouseenter:l,onMouseleave:o},{default:L(()=>[r("span",M,u(s.number),1),r("span",{ref_key:"firstLabelRef",ref:e,class:"label"},u(s.link.label),513),r("span",{ref_key:"secondLabelRef",ref:t,"aria-label":"hidden",class:"label"},u(s.link.label),513)]),_:1},8,["class","target","to"]),s.hasSeparator?(n(),f(y,{key:0,class:"separator",name:"Slash"})):C("",!0)],64)}}}),$=h(R,[["__scopeId","data-v-c8d06eb0"]]),O={class:"social-links"},T=m({__name:"SocialLinks",props:{links:{},theme:{default:c.Orange}},setup(k){return(e,t)=>{const a=$;return n(),p("div",O,[(n(!0),p(d,null,I(e.links,(l,o)=>(n(),f(a,{key:l._uid,link:l,"has-separator":o<e.links.length-1,number:`${o+1}.0`,theme:e.theme},null,8,["link","has-separator","number","theme"]))),128))])}}}),E=h(T,[["__scopeId","data-v-b10ad2c0"]]);export{E as _};