"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8513],{82159:(e,t,r)=>{Object.defineProperty(t,"$",{enumerable:!0,get:function(){return o}});let n=r(62067);function o(e){let{createServerReference:t}=r(72888);return t(e,n.callServer)}},12928:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(83331);let o=function(e,t){var r=(0,n.useState)(null),o=r[0],l=r[1];return(0,n.useEffect)(function(){if(e.current&&"function"==typeof IntersectionObserver){var r=new IntersectionObserver(function(e){l(e[0])},t);return r.observe(e.current),function(){l(null),r.disconnect()}}return function(){}},[e.current,t.threshold,t.root,t.rootMargin]),o}},13:(e,t,r)=>{r.d(t,{Z:()=>c});var n,o,l=r(83331),a=r(9479);let i="undefined"!=typeof window&&(null!=(n=window.document)&&n.createElement||(null==(o=window.navigator)?void 0:o.product)==="ReactNative")?l.useLayoutEffect:l.useEffect;function c(){let e=(0,a.Ue)(e=>({current:[],version:0,set:e}));return{In:({children:t})=>{let r=e(e=>e.set),n=e(e=>e.version);return i(()=>{r(e=>({version:e.version+1}))},[]),i(()=>(r(({current:e})=>({current:[...e,t]})),()=>r(({current:e})=>({current:e.filter(e=>e!==t)}))),[t,n]),null},Out:()=>{let t=e(e=>e.current);return l.createElement(l.Fragment,null,t)}}}},80333:(e,t,r)=>{r.d(t,{VY:()=>ee,ck:()=>Q,fC:()=>J,xz:()=>X});var n=r(3138),o=r(83331),l=r(85462),a=r(88253),i=r(30338),c=r(24776),d=r(64123),s=r(39336),u=r(91417),p=r(8859),f=r(97790);let m="Collapsible",[b,v]=(0,l.b)(m),[g,w]=b(m),E=(0,o.forwardRef)((e,t)=>{let{__scopeCollapsible:r,open:l,defaultOpen:a,disabled:i,onOpenChange:c,...u}=e,[p=!1,m]=(0,d.T)({prop:l,defaultProp:a,onChange:c});return(0,o.createElement)(g,{scope:r,disabled:i,contentId:(0,f.M)(),open:p,onOpenToggle:(0,o.useCallback)(()=>m(e=>!e),[m])},(0,o.createElement)(s.WV.div,(0,n.Z)({"data-state":A(p),"data-disabled":i?"":void 0},u,{ref:t})))}),y=(0,o.forwardRef)((e,t)=>{let{__scopeCollapsible:r,...l}=e,a=w("CollapsibleTrigger",r);return(0,o.createElement)(s.WV.button,(0,n.Z)({type:"button","aria-controls":a.contentId,"aria-expanded":a.open||!1,"data-state":A(a.open),"data-disabled":a.disabled?"":void 0,disabled:a.disabled},l,{ref:t,onClick:(0,c.M)(e.onClick,a.onOpenToggle)}))}),h="CollapsibleContent",_=(0,o.forwardRef)((e,t)=>{let{forceMount:r,...l}=e,a=w(h,e.__scopeCollapsible);return(0,o.createElement)(p.z,{present:r||a.open},({present:e})=>(0,o.createElement)(C,(0,n.Z)({},l,{ref:t,present:e})))}),C=(0,o.forwardRef)((e,t)=>{let{__scopeCollapsible:r,present:l,children:a,...c}=e,d=w(h,r),[p,f]=(0,o.useState)(l),m=(0,o.useRef)(null),b=(0,i.e)(t,m),v=(0,o.useRef)(0),g=v.current,E=(0,o.useRef)(0),y=E.current,_=d.open||p,C=(0,o.useRef)(_),R=(0,o.useRef)();return(0,o.useEffect)(()=>{let e=requestAnimationFrame(()=>C.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,u.b)(()=>{let e=m.current;if(e){R.current=R.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";let t=e.getBoundingClientRect();v.current=t.height,E.current=t.width,C.current||(e.style.transitionDuration=R.current.transitionDuration,e.style.animationName=R.current.animationName),f(l)}},[d.open,l]),(0,o.createElement)(s.WV.div,(0,n.Z)({"data-state":A(d.open),"data-disabled":d.disabled?"":void 0,id:d.contentId,hidden:!_},c,{ref:b,style:{"--radix-collapsible-content-height":g?`${g}px`:void 0,"--radix-collapsible-content-width":y?`${y}px`:void 0,...e.style}}),_&&a)});function A(e){return e?"open":"closed"}var R=r(79969);let I="Accordion",k=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[x,Z,O]=(0,a.B)(I),[V,D]=(0,l.b)(I,[O,v]),N=v(),T=o.forwardRef((e,t)=>{let{type:r,...l}=e;return o.createElement(x.Provider,{scope:e.__scopeAccordion},"multiple"===r?o.createElement(F,(0,n.Z)({},l,{ref:t})):o.createElement(W,(0,n.Z)({},l,{ref:t})))});T.propTypes={type(e){let t=e.value||e.defaultValue;return e.type&&!["single","multiple"].includes(e.type)?Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`."):"multiple"===e.type&&"string"==typeof t?Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`."):"single"===e.type&&Array.isArray(t)?Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`."):null}};let[M,S]=V(I),[P,z]=V(I,{collapsible:!1}),W=o.forwardRef((e,t)=>{let{value:r,defaultValue:l,onValueChange:a=()=>{},collapsible:i=!1,...c}=e,[s,u]=(0,d.T)({prop:r,defaultProp:l,onChange:a});return o.createElement(M,{scope:e.__scopeAccordion,value:s?[s]:[],onItemOpen:u,onItemClose:o.useCallback(()=>i&&u(""),[i,u])},o.createElement(P,{scope:e.__scopeAccordion,collapsible:i},o.createElement($,(0,n.Z)({},c,{ref:t}))))}),F=o.forwardRef((e,t)=>{let{value:r,defaultValue:l,onValueChange:a=()=>{},...i}=e,[c=[],s]=(0,d.T)({prop:r,defaultProp:l,onChange:a}),u=o.useCallback(e=>s((t=[])=>[...t,e]),[s]),p=o.useCallback(e=>s((t=[])=>t.filter(t=>t!==e)),[s]);return o.createElement(M,{scope:e.__scopeAccordion,value:c,onItemOpen:u,onItemClose:p},o.createElement(P,{scope:e.__scopeAccordion,collapsible:!0},o.createElement($,(0,n.Z)({},i,{ref:t}))))}),[L,U]=V(I),$=o.forwardRef((e,t)=>{let{__scopeAccordion:r,disabled:l,dir:a,orientation:d="vertical",...u}=e,p=o.useRef(null),f=(0,i.e)(p,t),m=Z(r),b="ltr"===(0,R.gm)(a),v=(0,c.M)(e.onKeyDown,e=>{var t;if(!k.includes(e.key))return;let r=e.target,n=m().filter(e=>{var t;return!(null!==(t=e.ref.current)&&void 0!==t&&t.disabled)}),o=n.findIndex(e=>e.ref.current===r),l=n.length;if(-1===o)return;e.preventDefault();let a=o,i=l-1,c=()=>{(a=o+1)>i&&(a=0)},s=()=>{(a=o-1)<0&&(a=i)};switch(e.key){case"Home":a=0;break;case"End":a=i;break;case"ArrowRight":"horizontal"===d&&(b?c():s());break;case"ArrowDown":"vertical"===d&&c();break;case"ArrowLeft":"horizontal"===d&&(b?s():c());break;case"ArrowUp":"vertical"===d&&s()}null===(t=n[a%l].ref.current)||void 0===t||t.focus()});return o.createElement(L,{scope:r,disabled:l,direction:a,orientation:d},o.createElement(x.Slot,{scope:r},o.createElement(s.WV.div,(0,n.Z)({},u,{"data-orientation":d,ref:f,onKeyDown:l?void 0:v}))))}),B="AccordionItem",[H,K]=V(B),j=o.forwardRef((e,t)=>{let{__scopeAccordion:r,value:l,...a}=e,i=U(B,r),c=S(B,r),d=N(r),s=(0,f.M)(),u=l&&c.value.includes(l)||!1,p=i.disabled||e.disabled;return o.createElement(H,{scope:r,open:u,disabled:p,triggerId:s},o.createElement(E,(0,n.Z)({"data-orientation":i.orientation,"data-state":function(e){return e?"open":"closed"}(u)},d,a,{ref:t,disabled:p,open:u,onOpenChange:e=>{e?c.onItemOpen(l):c.onItemClose(l)}})))}),q="AccordionTrigger",Y=o.forwardRef((e,t)=>{let{__scopeAccordion:r,...l}=e,a=U(I,r),i=K(q,r),c=z(q,r),d=N(r);return o.createElement(x.ItemSlot,{scope:r},o.createElement(y,(0,n.Z)({"aria-disabled":i.open&&!c.collapsible||void 0,"data-orientation":a.orientation,id:i.triggerId},d,l,{ref:t})))}),G=o.forwardRef((e,t)=>{let{__scopeAccordion:r,...l}=e,a=U(I,r),i=K("AccordionContent",r),c=N(r);return o.createElement(_,(0,n.Z)({role:"region","aria-labelledby":i.triggerId,"data-orientation":a.orientation},c,l,{ref:t,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}}))}),J=T,Q=j,X=Y,ee=G}}]);