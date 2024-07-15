var S=Object.defineProperty;var g=(t,e,i)=>e in t?S(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var r=(t,e,i)=>(g(t,typeof e!="symbol"?e+"":e,i),i);const w=(t,e="flex")=>new Promise(i=>{t.style.opacity="0",t.style.display=e,function n(){const s=parseFloat(t.style.opacity);if(s>=1){i();return}const o=s+.1;t.style.opacity=o.toString(),requestAnimationFrame(n)}()}),C=t=>new Promise(e=>{t.style.opacity="1",function i(){const s=parseFloat(t.style.opacity)-.1;t.style.opacity=s.toString(),s<=0?(t.style.display="none",e()):requestAnimationFrame(i)}()});class K{constructor({element:e,copyData:i,successText:n,errorText:s,notificationDuration:o,successCSSClass:c}){r(this,"element");r(this,"hiddenTrigger");r(this,"successCSSClass");r(this,"textNode");r(this,"copyData");r(this,"successText","Copied!");r(this,"errorText","Something went wrong");r(this,"notificationDuration",500);r(this,"notificationActive",!1);r(this,"originalText");this.element=e,this.copyData=i,n&&(this.successText=n),s&&(this.errorText=s),o&&(this.notificationDuration=o),c&&(this.successCSSClass=c),this.textNode=y(e)||e,this.originalText=this.textNode.textContent||"",this.hiddenTrigger=this.createHiddenTrigger(),this.init()}init(){const{element:e,hiddenTrigger:i}=this;e.addEventListener("click",n=>this.handleClick(n)),i.addEventListener("copy",n=>this.handleCopy(n))}createHiddenTrigger(){const{element:e}=this,i=document.createElement("button");return i.contentEditable="true",Object.assign(i.style,{position:"absolute",clip:"rect(1px, 1px, 1px, 1px)",clipPath:"inset(0px 0px 99.9% 99.9%)",overflow:"hidden",height:"1px",width:"1px",padding:"0",border:"0"}),(e.parentElement||document.body).appendChild(i),i}handleClick(e){e.preventDefault(),this.hiddenTrigger.focus(),document.execCommand("copy")}handleCopy(e){var i;try{(i=e.clipboardData)==null||i.setData("application/json",JSON.stringify(this.copyData).trim()),e.preventDefault(),this.triggerNotification("success")}catch{this.triggerNotification("error")}}triggerNotification(e){const{notificationActive:i,notificationDuration:n,originalText:s,element:o,successCSSClass:c,successText:a,errorText:l}=this;i||(this.notificationActive=!0,this.textNode.textContent=e==="success"?a:l,c&&o.classList.add(c),window.setTimeout(()=>{this.textNode.textContent=s,c&&o.classList.remove(c),this.notificationActive=!1},n))}updateCopyData(e){this.copyData=e}updateTextContent(e){this.textNode.textContent=e,this.originalText=e}}class p{static activateAlerts(){this.alertsActivated=!0}static alert(e,i){if(this.alertsActivated&&window.alert(e),i==="error")throw new Error(e)}}r(p,"alertsActivated",!1);const x=()=>{};function U(t,e,i,n){return t?(t.addEventListener(e,i,n),()=>t.removeEventListener(e,i,n)):x}const X=t=>t instanceof File,G=t=>t instanceof Node,J=t=>t instanceof Element,E=t=>t instanceof HTMLElement,d=t=>t instanceof HTMLInputElement,v=t=>t instanceof HTMLSelectElement,T=t=>t instanceof HTMLTextAreaElement,z=t=>t instanceof HTMLVideoElement,Q=t=>t instanceof HTMLAnchorElement,Y=t=>t instanceof HTMLImageElement,Z=t=>t instanceof HTMLOptionElement,tt=t=>t instanceof HTMLButtonElement,et=t=>d(t)||v(t)||T(t),L=(t,e)=>!!t&&e.includes(t),it=t=>t!=null,nt=t=>typeof t=="string",st=t=>typeof t=="number",ot=t=>typeof t=="bigint",rt=t=>typeof t=="boolean",ct=t=>typeof t=="symbol",at=t=>t===void 0,lt=t=>t===null,ut=t=>typeof t=="function",dt=t=>t!==null&&typeof t=="object",ft="w--current",pt="w-richtext",ht="w-embed",yt={slider:"w-slider",slide:"w-slide",sliderMask:"w-slider-mask",sliderNav:"w-slider-nav",sliderDot:"w-slider-dot",activeSliderDot:"w-active"},mt={tabs:"w-tabs",tabsContent:"w-tab-content",tabPane:"w-tab-pane",tabsMenu:"w-tab-menu",tabLink:"w-tab-link",activeTab:"w--tab-active"},bt={navMenu:"w-nav-menu"},h={wrapper:"w-dyn-list",list:"w-dyn-items",item:"w-dyn-item",paginationWrapper:"w-pagination-wrapper",paginationNext:"w-pagination-next",paginationPrevious:"w-pagination-previous",pageCount:"w-page-count",emptyState:"w-dyn-empty"},k={formBlock:"w-form",checkboxField:"w-checkbox",checkboxInput:"w-checkbox-input",radioField:"w-radio",radioInput:"w-radio-input",checkboxOrRadioLabel:"w-form-label",checkboxOrRadioFocus:"w--redirected-focus",checkboxOrRadioChecked:"w--redirected-checked",successMessage:"w-form-done",errorMessage:"w-form-fail"},St={dropdown:"w-dropdown",dropdownToggle:"w-dropdown-toggle",dropdownList:"w-dropdown-list"},gt={addToCartForm:"w-commerce-commerceaddtocartform"},wt={trigger:"w-lightbox"},u=(t,e)=>(Array.isArray(e)||(e=[e]),e.map(n=>t.dispatchEvent(new Event(n,{bubbles:!0}))).every(n=>n)),{radioInput:N,checkboxOrRadioFocus:O,checkboxOrRadioChecked:A}=k,Ct=(t,e=[])=>{const{type:i}=t;if(d(t)&&["checkbox","radio"].includes(i)){if(!t.checked||(t.checked=!1,u(t,["click","input","change"].filter(o=>!e.includes(o))),i==="checkbox"))return;const{parentElement:n}=t;if(!n)return;const s=n.querySelector(`.${N}`);if(!s)return;s.classList.remove(O,A);return}t.value="",u(t,["input","change"].filter(n=>!e.includes(n)))},xt=(t,e=!0)=>t.cloneNode(e);function Et(t,e,i,n=!0){const s=i?[i]:[];if(!t)return s;const o=t.split(",").reduce((c,a)=>{const l=a.trim();return(!n||l)&&c.push(l),c},[]);if(e){const c=o.filter(a=>L(a,e));return c.length?c:s}return o}const vt=t=>{const e=parseFloat(t.replace(/[^0-9.-]+/g,""));return isNaN(e)?null:e},Tt=t=>{const e=t.split("-"),i=parseInt(e[e.length-1]);if(!isNaN(i))return i},y=t=>{var i;let e;for(const n of t.childNodes)if(E(n)&&n.childNodes.length?e=y(n):n.nodeType===Node.TEXT_NODE&&((i=n.textContent)!=null&&i.trim())&&(e=n),e)break;return e},Lt=t=>{const e=[],i=({parentElement:n})=>{n&&!n.isEqualNode(document.body)&&(e.push(n),i(n))};return i(t),e},kt=t=>{const e=t.getBoundingClientRect(),i=window.pageYOffset||(document.documentElement||document.body.parentNode||document.body).scrollTop;return e.top+i},Nt=t=>{var i;let{value:e}=t;if(t.type==="checkbox"&&(e=t.checked.toString()),t.type==="radio"){const n=(i=t.closest("form"))==null?void 0:i.querySelector(`input[name="${t.name}"]:checked`);e=d(n)?n.value:""}return e.toString()},Ot=t=>{if(f(t))return;let e=t;const i=({parentElement:n})=>{n&&(f(n)||(e=n,i(n)))};return i(t),e},At=t=>Object.entries(t),Mt=t=>Object.keys(t),_t=t=>{const{overflow:e}=getComputedStyle(t);return e==="auto"||e==="scroll"},f=t=>!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length),m=(t,e,i=document)=>{const n=i.querySelector(t);if(n instanceof e)return n},Ht=(t,e)=>{t.querySelectorAll(e||"*").forEach(n=>n.remove())},Pt=t=>t.replace(/\s/g,""),Ft=t=>t.replace(/\/+$/,""),Dt=(t,e)=>t.every(i=>e.includes(i))&&e.every(i=>t.includes(i)),qt=(t,e=!0)=>(e!==t.checked&&(t.checked=e,u(t,["click","input","change"])),t.type==="checkbox"?t.checked:t.value),It=(t,e)=>{const{type:i}=t,n=i==="radio";if(n||i==="checkbox"){if(!d(t)||typeof e!="boolean"||e===t.checked||n&&e===!1)return;t.checked=e}else{if(t.value===e)return;t.value=e.toString()}u(t,["click","input","change"])},Rt=t=>{throw new Error(t)},M=t=>new Promise(e=>setTimeout(e,t));class _{constructor({element:e,duration:i}){r(this,"element");r(this,"active",!1);r(this,"running",!1);r(this,"runningPromise");r(this,"duration");r(this,"isActive",()=>this.active);r(this,"isRunning",()=>this.running);r(this,"untilFinished",()=>this.runningPromise);this.element=typeof e=="string"?m(e,HTMLElement)||p.alert(`No interaction with the ${e} selector was found.`,"error"):e,this.duration={first:typeof i=="number"?i:(i==null?void 0:i.first)??0,second:typeof i=="number"?i:(i==null?void 0:i.second)??0}}async trigger(e){return e==="first"&&this.active||e==="second"&&!this.active?!1:(e||(e=this.active?"second":"first"),u(this.element,"click"),this.running=!0,this.runningPromise=M(this.duration[e]),await this.runningPromise,this.running=!1,this.active=e==="first",!0)}}class H{constructor({element:e,interaction:i,displayProperty:n,noTransition:s,startsHidden:o}){r(this,"interaction");r(this,"noTransition");r(this,"displayProperty");r(this,"visible");r(this,"element");r(this,"isVisible",()=>this.visible);if(this.element=typeof e=="string"?m(e,HTMLElement)||p.alert(`No element with the ${e} selector was found.`,"error"):e,this.noTransition=s,this.displayProperty=n||"block",o?(this.element.style.display="none",this.visible=!1):this.visible=f(this.element),i){const{element:c,duration:a}=i;this.interaction=new _({element:c,duration:a})}}async show(){this.visible||(this.interaction?await this.interaction.trigger("first"):this.noTransition?this.element.style.display=this.displayProperty:await w(this.element,this.displayProperty),this.visible=!0)}async hide(){this.visible&&(this.interaction?await this.interaction.trigger("second"):this.noTransition?this.element.style.display="none":await C(this.element),this.visible=!1)}}r(H,"displayProperties",["block","flex","grid","inline-block","inline"]);class Bt{constructor(e){r(this,"value");r(this,"subscribeCallbacks",[]);this.value=e}get(){return this.value}set(e){this.value=e,this.subscribeCallbacks.forEach(i=>i(e))}update(e){this.set(e(this.value))}subscribe(e){return this.subscribeCallbacks.push(e),e(this.value),()=>{this.subscribeCallbacks=this.subscribeCallbacks.filter(i=>e!==i)}}}var Wt=Object.freeze({__proto__:null});const P=new Map([["tiny","(max-width: 479px)"],["small","(max-width: 767px)"],["medium","(max-width: 991px)"],["main","(min-width: 992px)"]]),$t=(t,e=!0)=>{e&&t.focus(),u(t,"w-close")},{wrapper:F,list:D,paginationWrapper:q,paginationNext:I,paginationPrevious:R,emptyState:B,pageCount:W}=h;function $(t,e,i=document){const n=typeof t=="string"?i.querySelector(t):t;if(!n)return;const s=n.closest(`.${F}`);if(!s)return;const o=s.querySelector(`.${D}`);return e==="wrapper"?s:e==="list"?o:e==="items"?[...(o==null?void 0:o.children)||[]]:e==="pageCount"?s.querySelector(`.${W}`):e==="empty"?s.querySelector(`:scope > .${B}`):e==="pagination"?s.querySelector(`.${q}`):s.querySelector(`.${e==="next"?I:R}`)}const jt=(t,e=document)=>{t=t.filter(o=>o);const i=t.join(", ")||`.${h.wrapper}`;return[...e.querySelectorAll(i)].reduce((o,c)=>{if(!c)return o;const a=$(c,"wrapper");return!a||o.includes(a)||o.push(a),o},[])},Vt=()=>{for(const[t,e]of P)if(window.matchMedia(e).matches)return t;return"main"},Kt=(t=document)=>{var i;const e="Last Published:";for(const n of t.childNodes)if(n.nodeType===Node.COMMENT_NODE&&((i=n.textContent)!=null&&i.includes(e))){const s=n.textContent.trim().split(e)[1];if(s)return new Date(s)}},j=(t=document)=>t.documentElement.getAttribute("data-wf-site"),Ut=(t,e)=>{for(const i of e){const[n,s]=typeof i=="string"?[i,i]:i,o=new Option(n,s);t.options.add(o)}},Xt=({options:t},e=!1)=>{for(const i of[...t])e&&!i.value||i.remove()},Gt=async t=>{var i,n;const{Webflow:e}=window;if(!(!e||!("destroy"in e)||!("ready"in e)||!("require"in e))&&!(t&&!t.length)){if(t||(e.destroy(),e.ready()),!t||t.includes("ix2")){const s=e.require("ix2");if(s){const{store:o,actions:c}=s,{eventState:a}=o.getState().ixSession,l=Object.entries(a);t||s.destroy(),s.init(),await Promise.all(l.map(b=>o.dispatch(c.eventStateChanged(...b))))}}if(!t||t.includes("commerce")){const s=e.require("commerce"),o=j();s&&o&&(s.destroy(),s.init({siteId:o,apiUrl:"https://render.webflow.com"}))}if(t!=null&&t.includes("lightbox")&&((i=e.require("lightbox"))==null||i.ready()),t!=null&&t.includes("slider")){const s=e.require("slider");s&&(s.redraw(),s.ready())}return t!=null&&t.includes("tabs")&&((n=e.require("tabs"))==null||n.redraw()),new Promise(s=>e.push(()=>s(void 0)))}};export{h as CMS_CSS_CLASSES,gt as COMMERCE_CSS_CLASSES,ft as CURRENT_CSS_CLASS,K as CopyJSONButton,St as DROPDOWN_CSS_CLASSES,p as Debug,H as DisplayController,k as FORM_CSS_CLASSES,Wt as Greenhouse,ht as HTML_EMBED_CSS_CLASS,_ as Interaction,wt as LIGHTBOX_CSS_CLASSES,bt as NAVBAR_CSS_CLASSES,pt as RICH_TEXT_BLOCK_CSS_CLASS,yt as SLIDER_CSS_CLASSES,mt as TABS_CSS_CLASSES,P as WEBFLOW_BREAKPOINTS,Bt as WritableStore,U as addListener,Ct as clearFormField,xt as cloneNode,$t as closeDropdown,Et as extractCommaSeparatedValues,vt as extractNumberFromString,Tt as extractNumberSuffix,w as fadeIn,C as fadeOut,y as findTextNode,Lt as getAllParents,$ as getCollectionElements,jt as getCollectionListWrappers,Vt as getCurrentBreakpoint,kt as getDistanceFromTop,Nt as getFormFieldValue,Ot as getHiddenParent,At as getObjectEntries,Mt as getObjectKeys,Kt as getPublishDate,j as getSiteId,ot as isBigint,rt as isBoolean,J as isElement,X as isFile,et as isFormField,ut as isFunction,Q as isHTMLAnchorElement,tt as isHTMLButtonElement,E as isHTMLElement,Y as isHTMLImageElement,d as isHTMLInputElement,Z as isHTMLOptionElement,v as isHTMLSelectElement,T as isHTMLTextAreaElement,z as isHTMLVideoElement,L as isKeyOf,G as isNode,it as isNotEmpty,lt as isNull,st as isNumber,dt as isObject,_t as isScrollable,nt as isString,ct as isSymbol,at as isUndefined,f as isVisible,x as noop,Ut as populateSelectOptions,m as queryElement,Ht as removeChildElements,Xt as removeSelectOptions,Pt as removeSpaces,Ft as removeTrailingSlash,Gt as restartWebflow,Dt as sameValues,qt as selectInputElement,It as setFormFieldValue,u as simulateEvent,Rt as throwError,M as wait};