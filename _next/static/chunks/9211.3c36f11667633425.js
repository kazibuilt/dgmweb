(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9211],{74133:function(e){var t;t=function(){var e=function(){function t(e){return l.appendChild(e.dom),e}function r(e){for(var t=0;t<l.children.length;t++)l.children[t].style.display=t===e?"block":"none";n=e}var n=0,l=document.createElement("div");l.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",l.addEventListener("click",function(e){e.preventDefault(),r(++n%l.children.length)},!1);var a=(performance||Date).now(),o=a,i=0,s=t(new e.Panel("FPS","#0ff","#002")),c=t(new e.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var u=t(new e.Panel("MB","#f08","#201"));return r(0),{REVISION:16,dom:l,addPanel:t,showPanel:r,begin:function(){a=(performance||Date).now()},end:function(){i++;var e=(performance||Date).now();if(c.update(e-a,200),e>o+1e3&&(s.update(1e3*i/(e-o),100),o=e,i=0,u)){var t=performance.memory;u.update(t.usedJSHeapSize/1048576,t.jsHeapSizeLimit/1048576)}return e},update:function(){a=this.end()},domElement:l,setMode:r}};return e.Panel=function(e,t,r){var n=1/0,l=0,a=Math.round,o=a(window.devicePixelRatio||1),i=80*o,s=48*o,c=3*o,u=2*o,d=3*o,f=15*o,p=74*o,m=30*o,h=document.createElement("canvas");h.width=i,h.height=s,h.style.cssText="width:80px;height:48px";var v=h.getContext("2d");return v.font="bold "+9*o+"px Helvetica,Arial,sans-serif",v.textBaseline="top",v.fillStyle=r,v.fillRect(0,0,i,s),v.fillStyle=t,v.fillText(e,c,u),v.fillRect(d,f,p,m),v.fillStyle=r,v.globalAlpha=.9,v.fillRect(d,f,p,m),{dom:h,update:function(s,x){n=Math.min(n,s),l=Math.max(l,s),v.fillStyle=r,v.globalAlpha=1,v.fillRect(0,0,i,f),v.fillStyle=t,v.fillText(a(s)+" "+e+" ("+a(n)+"-"+a(l)+")",c,u),v.drawImage(h,d+o,f,p-o,m,d,f,p-o,m),v.fillRect(d+p-o,f,o,m),v.fillStyle=r,v.globalAlpha=.9,v.fillRect(d+p-o,f,o,a((1-s/x)*m))}}},e},e.exports=t()},13:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n,l,a=r(83331),o=r(9479);let i="undefined"!=typeof window&&(null!=(n=window.document)&&n.createElement||(null==(l=window.navigator)?void 0:l.product)==="ReactNative")?a.useLayoutEffect:a.useEffect;function s(){let e=(0,o.Ue)(e=>({current:[],version:0,set:e}));return{In:({children:t})=>{let r=e(e=>e.set),n=e(e=>e.version);return i(()=>{r(e=>({version:e.version+1}))},[]),i(()=>(r(({current:e})=>({current:[...e,t]})),()=>r(({current:e})=>({current:e.filter(e=>e!==t)}))),[t,n]),null},Out:()=>{let t=e(e=>e.current);return a.createElement(a.Fragment,null,t)}}}},73832:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>eu});var n=r(37859),l=r(7590),a=r(83331),o=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,f=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&f(e,r,t[r]);if(c)for(var r of c(t))d.call(t,r)&&f(e,r,t[r]);return e},m=(e,t)=>i(e,s(t));function h(e){try{return Object.defineProperties(e,{_currentRenderer:{get:()=>null,set(){}},_currentRenderer2:{get:()=>null,set(){}}})}catch(t){return e}}let v=h(a.createContext(null));class x extends a.Component{render(){return a.createElement(v.Provider,{value:this._reactInternals},this.props.children)}}let{ReactCurrentOwner:g,ReactCurrentDispatcher:b}=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;var w=r(74461);let y={click:["onClick",!1],pointerup:["onPointerUp",!0],pointerdown:["onPointerDown",!0],pointermove:["onPointerMove",!0]},j={connected:!1,connect(e,t){var r,n,l;null==(n=(r=t.events).disconnect)||n.call(r,e,t);let{handleEvent:a}=(0,w.nj)(t);for(let r in t.events.handlers=Object.entries(y).reduce((e,[t,[r]])=>({...e,[t]:e=>a(e,r)}),{}),y){let n=null==(l=t.events.handlers)?void 0:l[r];if(n){let[,t]=y[r];e.addEventListener(r,n,{passive:t})}}t.events.connected=!0},disconnect(e,t){var r;for(let n in y){let l=null==(r=t.events.handlers)?void 0:r[n];l&&e.removeEventListener(n,l)}t.events.connected=!1}};var S=r(679),C=r(60112),E=r(23491),M=r(40645);let R=a.forwardRef(function(e,t){let{resize:r,children:l,style:o,renderer:i,dpr:s,camera:c,orthographic:u,frameloop:d,events:f=j,onCreated:y,gl:R,...k}=e,P=function(){let e=function(){var e,t;let r=function(){let e=a.useContext(v);if(null===e)throw Error("its-fine: useFiber must be called within a <FiberProvider />!");let t=a.useId();return a.useMemo(()=>{for(let r of[null==g?void 0:g.current,e,null==e?void 0:e.alternate]){if(!r)continue;let e=function e(t,r,n){if(!t)return;if(!0===n(t))return t;let l=r?t.return:t.child;for(;l;){let t=e(l,r,n);if(t)return t;l=r?null:l.sibling}}(r,!1,e=>{let r=e.memoizedState;for(;r;){if(r.memoizedState===t)return!0;r=r.next}});if(e)return e}},[e,t])}(),[n]=a.useState(()=>new Map);n.clear();let l=r;for(;l;){let r=null==(e=l.type)?void 0:e._context;r&&r!==v&&!n.has(r)&&n.set(r,null==(t=null==b?void 0:b.current)?void 0:t.readContext(h(r))),l=l.return}return n}();return a.useMemo(()=>Array.from(e.keys()).reduce((t,r)=>n=>a.createElement(t,null,a.createElement(r.Provider,m(p({},n),{value:e.get(r)}))),e=>a.createElement(x,p({},e))),[e])}(),O=a.useRef(R.canvas),[_]=a.useState(R.canvas),[I,{width:F,height:A}]=(0,C.Z)({scroll:!0,debounce:{scroll:50,resize:0},...r}),[N,H]=a.useState(!1),[z,L]=a.useState(!1);if(a.useImperativeHandle(t,()=>O.current),N)throw N;if(z)throw z;_&&F>0&&A>0&&E.C5&&(0,S.sY)((0,n.jsx)(P,{children:(0,n.jsx)(w.SV,{set:L,children:(0,n.jsx)(a.Suspense,{fallback:(0,n.jsx)(w.gO,{set:H}),children:l})})}),_,{size:{width:F,height:A},orthographic:u,frameloop:d,renderer:i,dpr:s,camera:c,events:f,onCreated:y});let V=a.useRef(null);return a.useEffect(()=>{M.f.setState({canvasElement:_})},[_]),a.useEffect(()=>{let e=V.current;if(e)return O.current.style.display="block",e.appendChild(O.current),()=>{(0,S.uy)(O.current)}},[V,R,i]),(0,n.jsx)("div",{...k,ref:e=>{I(e),V.current=e},style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",...o}})}),k=a.forwardRef(function(e,t){return(0,n.jsx)(x,{children:(0,n.jsx)(R,{...e,dpr:1,ref:t})})});var P=r(13574);let O=e=>{let{messages:t}=e;return(0,n.jsx)(P.h,{children:(0,n.jsx)("div",{className:"fixed bottom-0 right-0 flex",children:t.map((e,t)=>e&&(0,n.jsxs)("div",{className:"flex items-center h-6 px-2 font-mono text-sm text-white uppercase bg-gray-900 gap-x-2",children:[(0,n.jsx)("span",{className:"inline-block w-2 h-2 bg-yellow-400 rounded-full"}),(0,n.jsx)("span",{children:e})]},t))})})};var _=r(92560),I=r(86130),F=r.n(I);let A=function(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1];a.useEffect(()=>{if(t)return e.forEach(e=>{let{keys:t,callback:r,action:n}=e;return F().bind(t,r,n)}),()=>{e.forEach(e=>{let{keys:t}=e;return F().unbind(t)})}},[e,t])},N=e=>e.toUpperCase().replace("SHIFT+","⬆"),H=e=>{let{folder:t,key:r,label:n,shortcut:l,defaultValue:o,onChange:i}=e,s="".concat("string"==typeof n?n:r).concat("string"==typeof l?" (".concat(N(l),")"):""),[c,u]=(0,_.M4)(()=>{let e={[r]:{label:s,folder:t,value:"boolean"==typeof o&&o,onChange:e=>{i&&i(e)},transient:!1}};return"string"==typeof t?{[t]:(0,_.so)(e)}:e});l&&A([{keys:l,callback:()=>{u({[r]:!c[r]})}}]);let d=(0,a.useMemo)(()=>e=>{u({[r]:e})},[r,u]);return[c[r],d]};var z=r(88208),L=r(23860),V=r(4775),D=r(8966);let T=new z.V(l.xR,{aspect:45});T.position.set(0,15,30);let U=()=>{let e="orbit"===(0,M.f)(e=>e.activeCamera),t=(0,a.useMemo)(()=>new L.q(T,{target:new V.A(0,0,0),enabled:!1}),[]);return(0,a.useEffect)(()=>{t.enabled=e},[e]),(0,D.xQ)(e=>{let{size:r}=e,n=r.width/r.height;T.perspective({aspect:n}),t.update()}),(0,n.jsx)("primitive",{dispose:null,object:T})};var Z=r(21225);let Q=e=>{let{divisions:t,size:r}=e,l=(0,D.Cp)(e=>e.gl),o=(0,a.useMemo)(()=>new Z.V(l,{divisions:t,size:r}),[l,t,r]);return(0,n.jsx)("primitive",{object:o})};var B=r(31291),G=r(67055),W=r(92132),X=r(10502);let q="\n  attribute vec3 position;\n\n  uniform mat4 modelViewMatrix;\n  uniform mat4 projectionMatrix;\n\n  void main() {\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n  }\n",Y="\n  precision highp float;\n\n  uniform vec3 uColor;\n\n  void main() {\n    gl_FragColor = vec4(uColor, 1.0);\n  }\n";new X.$(l.xR,{vertex:q,fragment:Y,uniforms:{uColor:{value:null}}});var J=r(6384);let $=(e,t)=>e.length===t.length&&e.every((e,r)=>e===t[r]),K=e=>{let{near:t,far:r,top:n,bottom:a,left:o,right:i}=e;return new B.Z(l.xR,{position:{size:3,data:new Float32Array([0,0,0,+o,+a,-t,+o,+a,-t,+i,+a,-t,+i,+a,-t,0,0,0,0,0,0,+i,+n,-t,+i,+n,-t,+o,+n,-t,+o,+n,-t,+i,+a,-t,+i,+a,-t,+i,+n,-t,+i,+n,-t,+o,+a,-t,+o,+a,-t,+o,+n,-t,+o,+n,-t,0,0,0,+o,+a,-t,+o,+a,-r,+o,+a,-r,+i,+a,-r,+i,+a,-r,+i,+a,-t,+i,+a,-t,+o,+a,-r,+o,+a,-r,+o,+n,-r,+o,+n,-r,+o,+n,-t,+o,+n,-t,+o,+a,-r,+o,+a,-r,+i,+n,-r,+i,+n,-r,+o,+n,-r,+o,+n,-r,+i,+a,-r,+i,+a,-r,+i,+n,-r,+i,+n,-r,+i,+a,-t,+i,+a,-t,+i,+n,-t,+i,+n,-t,+i,+n,-r,+i,+n,-r,+o,+n,-t])},normal:{size:3,data:new Float32Array([])}})},ee=()=>{let e=(0,a.useRef)(),t=(0,a.useRef)(null),r=(0,J.G)(e=>e.light),o=(0,a.useRef)({position:new V.A,rotation:new G.U,near:0,far:0,top:0,bottom:0,left:0,right:0});(0,D.xQ)(()=>{var n,l,a;(!(!(r.position.distance(o.current.position)>0)&&$(r.rotation.toArray(),o.current.rotation.toArray()))||r.near!==o.current.near||r.far!==o.current.far||r.top!==o.current.top||r.bottom!==o.current.bottom||r.left!==o.current.left||r.right!==o.current.right)&&(o.current.position.copy(r.position),o.current.rotation.copy(r.rotation),o.current.near=r.near,o.current.far=r.far,o.current.top=r.top,o.current.bottom=r.bottom,o.current.left=r.left,o.current.right=r.right,null===(n=e.current)||void 0===n||n.position.copy(r.position),null===(l=e.current)||void 0===l||l.rotation.copy(r.rotation),null===(a=e.current)||void 0===a||a.updateMatrixWorld(),t.current&&(t.current.geometry=K(r),t.current.updateMatrixWorld(),t.current.updateMatrix()))});let i=(0,a.useMemo)(()=>K(r),[]);return(0,n.jsxs)("transform",{ref:e,children:[(0,n.jsx)("mesh",{ref:t,geometry:i,mode:l.xR.LINES,children:(0,n.jsx)("program",{vertex:q,fragment:Y,uniforms:{uColor:{value:new W.I(16711680)}}})}),(0,n.jsxs)("mesh",{children:[(0,n.jsx)("plane",{args:[1,1]}),(0,n.jsx)("normalProgram",{})]})]})};var et=r(74133);let er=new(r.n(et)()),en=()=>((0,a.useEffect)(()=>(er.showPanel(0),document.body.appendChild(er.dom),()=>{document.body.removeChild(er.dom)}),[]),(0,D.xQ)(()=>{er.end(),er.begin()}),(0,n.jsx)(n.Fragment,{}));var el=r(26418);let ea=["main","orbit","shadow"],eo=()=>{let{isDebug:e}=(0,M.f)(),[t]=H({folder:"Helpers",key:"lightHelper",label:"Light",shortcut:"l",defaultValue:!1}),[r]=H({folder:"Helpers",key:"gridHelper",label:"Grid",shortcut:"g",defaultValue:!1}),[l]=H({folder:"Helpers",key:"showStats",label:"Stats",shortcut:"t",defaultValue:e}),[o,i]=H({folder:"Helpers",key:"showShadowScene",label:"Shadow Scene",shortcut:"shift+s",defaultValue:!1}),s=(0,M.f)(e=>e.activeCamera),[,c]=(0,_.M4)(()=>({camera:{label:"Camera (C)",value:"main",options:{"Main (M)":"main","Orbit (O)":"orbit","Shadow (S)":"shadow"},onChange:e=>{M.f.setState({activeCamera:e,multiplyCanvas:"main"===e}),i("main"!==e)},transient:!1}}));return(0,a.useEffect)(()=>{c({camera:s})},[s]),A([{keys:"c",callback:()=>{let e=ea[(ea.indexOf(M.f.getState().activeCamera)+1)%ea.length];M.f.setState({activeCamera:e})}},{keys:"m",callback:()=>{M.f.setState({activeCamera:"main"})}},{keys:"o",callback:()=>{M.f.setState({activeCamera:"orbit"})}},{keys:"s",callback:()=>{M.f.setState({activeCamera:"shadow"})}}]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(U,{}),t&&(0,n.jsx)(ee,{}),r&&(0,n.jsx)(Q,{size:20,divisions:20}),l&&(0,n.jsx)(en,{}),o&&(0,n.jsx)(el.g,{})]})},ei=()=>{let e=(0,D.Cp)(e=>e.set),t=(0,D.Cp)(e=>e.scene),r=(0,D.Cp)(e=>e.renderer),o=(0,M.f)(e=>e.activeCamera),i=(0,M.f)(e=>e.hasRendered),s=(0,M.f)(e=>e.setHasRendered),c=(0,M.f)(e=>e.glBackground),u=(0,D.Cp)(e=>e.camera),d=(0,J.G)(e=>e.light),f=(0,a.useMemo)(()=>"shadow"===o?d:"orbit"===o?T:u,[o,d,u]);return(0,a.useEffect)(()=>(e(()=>({priority:1})),()=>{e(()=>({priority:0}))}),[]),(0,D.xQ)(()=>{r.gl.scissor(l.em.x,l.em.y,l.em.width,l.em.height),r.gl.clearColor(c.r,c.g,c.b,1),r.render({scene:t,camera:f}),i||s()}),(0,n.jsx)(n.Fragment,{})};var es=r(91329),ec=r(7539);let eu=()=>{let{isDebug:e,multiplyCanvas:t,hasRendered:r}=(0,M.f)();return(0,n.jsxs)("div",{id:"canvas-container",className:(0,es.Z)("fixed top-0 left-0 w-full h-screen z-canvas opacity-0",t&&"pointer-events-none",r?"opacity-100":"opacity-0"),children:[e&&(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(O,{messages:["Debug Mode"]})}),(0,n.jsx)("div",{className:"w-full h-full",children:(0,n.jsxs)(k,{camera:l.r8,frameloop:"always",gl:l.xR,renderer:l.ui,children:[(0,n.jsx)("primitive",{dispose:null,object:l.r8,position:[0,0,6.3]}),(0,n.jsx)(ei,{}),(0,n.jsx)(ec.X.Out,{}),e&&(0,n.jsx)(eo,{})]})})]})}},7539:(e,t,r)=>{"use strict";r.d(t,{X:()=>c});var n=r(37859),l=r(83331),a=r(13),o=r(83203);let i=(0,a.Z)(),s=i.In,c={Out:i.Out,In:e=>{let{id:t,lazy:r=!0,...a}=e,[i,c]=(0,l.useState)(!r),u=(0,o.q)(e=>e.highPriorityAnimationRunning);return(0,l.useEffect)(()=>{i||u||!r||c(!0)},[u,r,i]),(0,n.jsx)(s,{...a,children:i?(0,n.jsx)(l.Fragment,{children:a.children},t):null})}}},56233:(e,t,r)=>{"use strict";r.d(t,{Id:()=>o,XL:()=>i,jM:()=>a,ol:()=>l,t7:()=>n,uZ:()=>c,wQ:()=>s});let n=(e,t,r)=>e*(1-r)+t*r,l=(e,t,r,n,l)=>(e-t)*(l-n)/(r-t)+n,a=(e,t,r)=>t*r/e,o=e=>e*Math.PI/180,i=e=>e/1e3,s=(e,t)=>(e%t+t)%t,c=(e,t,r)=>Math.min(Math.max(r,e),t)}}]);