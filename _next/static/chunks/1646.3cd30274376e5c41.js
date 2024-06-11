"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1646],{48024:(e,r,t)=>{t.d(r,{zl:()=>u});var n=t(15791);function u(e,r,t){var u=void 0===t?{}:t,a=u.leading,i=u.trailing;return function(e,r,t){var u=this,a=(0,n.useRef)(null),i=(0,n.useRef)(0),c=(0,n.useRef)(null),l=(0,n.useRef)([]),f=(0,n.useRef)(),o=(0,n.useRef)(),s=(0,n.useRef)(e),d=(0,n.useRef)(!0);s.current=e;var v="undefined"!=typeof window,h=!r&&0!==r&&v;if("function"!=typeof e)throw TypeError("Expected a function");r=+r||0;var m=!!(t=t||{}).leading,g=!("trailing"in t)||!!t.trailing,p="maxWait"in t,x="debounceOnServer"in t&&!!t.debounceOnServer,y=p?Math.max(+t.maxWait||0,r):null;return(0,n.useEffect)(function(){return d.current=!0,function(){d.current=!1}},[]),(0,n.useMemo)(function(){var e=function(e){var r=l.current,t=f.current;return l.current=f.current=null,i.current=e,o.current=s.current.apply(t,r)},t=function(e,r){h&&cancelAnimationFrame(c.current),c.current=h?requestAnimationFrame(e):setTimeout(e,r)},n=function(e){if(!d.current)return!1;var t=e-a.current;return!a.current||t>=r||t<0||p&&e-i.current>=y},w=function(r){return c.current=null,g&&l.current?e(r):(l.current=f.current=null,o.current)},R=function e(){var u=Date.now();if(n(u))return w(u);if(d.current){var c=r-(u-a.current);t(e,p?Math.min(c,y-(u-i.current)):c)}},b=function(){if(v||x){var s=Date.now(),h=n(s);if(l.current=[].slice.call(arguments),f.current=u,a.current=s,h){if(!c.current&&d.current)return i.current=a.current,t(R,r),m?e(a.current):o.current;if(p)return t(R,r),e(a.current)}return c.current||t(R,r),o.current}};return b.cancel=function(){c.current&&(h?cancelAnimationFrame(c.current):clearTimeout(c.current)),i.current=0,l.current=a.current=f.current=c.current=null},b.isPending=function(){return!!c.current},b.flush=function(){return c.current?w(Date.now()):o.current},b},[m,p,r,y,g,h,v,x])}(e,r,{maxWait:r,leading:void 0===a||a,trailing:void 0===i||i})}},61646:(e,r,t)=>{t.r(r),t.d(r,{default:()=>h,mix:()=>v});var n=t(69797),u=t(15791),a=t(48024),i=t(49291);let c=function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];(0,u.useEffect)(()=>{function r(r){e(1e3*r)}return i.ZP.ticker.add(r),()=>{i.ZP.ticker.remove(r)}},r)};var l=t(84862),f=t(37553),o=t(44562),s=t(82372),d=t(8840);let v={value:0},h=(0,u.memo)(()=>{let[e,r,{ctx:t}]=(0,l.A)({offscreen:!0,maxDpr:2,options:{alpha:!1,desynchronized:!0,willReadFrequently:!1}}),[i,h,m]=(0,o.r)(!1),g=(0,u.useMemo)(()=>{if(!t)return()=>{};let e=new Image,r=new DOMMatrix,n=!1;e.src="/textures/noise-2.png";let u=new Image,a=!1;u.src="/textures/halftone.png";let i=0,c=(e,r)=>{let n=Math.max(t.canvas.width,t.canvas.height),u=Math.sqrt(n*n+n*n);if(!(t instanceof OffscreenCanvasRenderingContext2D))return()=>{};t.clearRect(0,0,n,n),t.fillStyle="#777",t.globalAlpha=1,t.fillRect(0,0,t.canvas.width,t.canvas.height),t.save(),1!==v.value&&(t.globalAlpha=.7*(1-v.value),t.fillStyle=e,t.translate(n/2,n/2),t.rotate((0,d.Id)(45*i)),i++,t.fillRect(-u/2,-u/2,u,u),t.restore()),0!==v.value&&(t.globalAlpha=.3*v.value,t.fillStyle=r,t.fillRect(0,0,n,n))},l=null,f=()=>{if(!a||!n||!(t instanceof OffscreenCanvasRenderingContext2D))return;let i=t.createPattern(e,"repeat"),c=t.createPattern(u,"repeat");i&&c&&(i.setTransform(r.scale(.25,.25)),l={noisePattern:i,dottedPattern:c})};return u.onload=()=>{a=!0,f()},e.onload=()=>{n=!0,f()},()=>{l&&(m.current||h(!0),c(l.noisePattern,l.dottedPattern))}},[t]),p=(0,a.zl)(g,1e3/30);c(p,[p]);let x=(0,f.Fy)(e=>e.isFirefox),y=(0,f.Fy)(e=>e.isSafari),w=(0,f.Fy)(e=>e.isMobileSafari),R=(0,f.Fy)(e=>{var r;return(null===(r=e.gpu)||void 0===r?void 0:r.tier)||3}),b=(0,f.qo)();return x||y||w||R<=2||b?null:(0,n.jsx)("div",{style:{willChange:"transform",backfaceVisibility:"hidden"},id:"noise-canvas",className:(0,s.L)("fixed top-0 left-0 w-full opacity-0 pointer-events-none h-lvh z-modal mix-blend-overlay transition-opacity duration-700",i&&"opacity-100"),ref:r,children:(0,n.jsx)("canvas",{ref:e})})})},84862:(e,r,t)=>{t.d(r,{A:()=>a});var n=t(15791),u=t(98625);let a=e=>{let{offscreen:r=!1,onResize:t,maxDpr:a=2,options:i}=e,[c,l]=(0,n.useState)(null),[f,o]=(0,n.useState)(null),[s,d]=(0,n.useState)(1),[v,{width:h,height:m}]=(0,u.Z)({onChange:t});(0,n.useLayoutEffect)(()=>{d(Math.min(window.devicePixelRatio,a))},[h,m,a]),(0,n.useEffect)(()=>{null==f||f.scale(s,s)},[s,f]),(0,n.useEffect)(()=>{if(!c)return;let e=null==c?void 0:c.getContext("2d",i);e&&o(e)},[c]);let g=(0,n.useCallback)(e=>{if(e){if(r&&"transferControlToOffscreen"in e){l(e.transferControlToOffscreen());return}l(e)}},[r]);return(0,n.useEffect)(()=>{c&&(c.width=h*s,c.height=m*s)},[c,h,m,s]),[g,v,{canvas:c,ctx:f,dpr:s,width:h,height:m}]}},44562:(e,r,t)=>{t.d(r,{h:()=>a,r:()=>u});var n=t(15791);let u=e=>{let[r,t]=(0,n.useState)(e),u=(0,n.useRef)(r);return(0,n.useEffect)(()=>{u.current=r},[r]),[r,t,u]},a=e=>{let r=(0,n.useRef)(e);return(0,n.useEffect)(()=>{r.current=e},[e]),r}}}]);