(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5923],{35923:(e,i,n)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});var r=n(83331),t=function(e){return e&&"object"==typeof e&&"default"in e?e.default:e}(r),o=n(31696),a=new o,s=a.getBrowser(),u=a.getCPU(),l=a.getDevice(),d=a.getEngine(),c=a.getOS(),b=a.getUA(),w=function(e){return a.setUA(e)},m=function(e){if(!e){console.error("No userAgent string was provided");return}var i=new o(e);return{UA:i,browser:i.getBrowser(),cpu:i.getCPU(),device:i.getDevice(),engine:i.getEngine(),os:i.getOS(),ua:i.getUA(),setUserAgent:function(e){return i.setUA(e)}}},f=Object.freeze({ClientUAInstance:a,browser:s,cpu:u,device:l,engine:d,os:c,ua:b,setUa:w,parseUserAgent:m});function p(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);i&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(){return(g=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,i){return(y=Object.setPrototypeOf||function(e,i){return e.__proto__=i,e})(e,i)}function x(e,i){if(null==e)return{};var n,r,t=function(e,i){if(null==e)return{};var n,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],i.indexOf(n)>=0||(t[n]=e[n]);return t}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],!(i.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}function k(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e,i){(null==i||i>e.length)&&(i=e.length);for(var n=0,r=Array(i);n<i;n++)r[n]=e[n];return r}var E={Mobile:"mobile",Tablet:"tablet",SmartTv:"smarttv",Console:"console",Wearable:"wearable",Embedded:"embedded",Browser:void 0},S={Chrome:"Chrome",Firefox:"Firefox",Opera:"Opera",Yandex:"Yandex",Safari:"Safari",InternetExplorer:"Internet Explorer",Edge:"Edge",Chromium:"Chromium",Ie:"IE",MobileSafari:"Mobile Safari",EdgeChromium:"Edge Chromium",MIUI:"MIUI Browser",SamsungBrowser:"Samsung Browser"},C={IOS:"iOS",Android:"Android",WindowsPhone:"Windows Phone",Windows:"Windows",MAC_OS:"Mac OS"},P={isMobile:!1,isTablet:!1,isBrowser:!1,isSmartTV:!1,isConsole:!1,isWearable:!1},A=function(e){switch(e){case E.Mobile:return{isMobile:!0};case E.Tablet:return{isTablet:!0};case E.SmartTv:return{isSmartTV:!0};case E.Console:return{isConsole:!0};case E.Wearable:return{isWearable:!0};case E.Browser:return{isBrowser:!0};case E.Embedded:return{isEmbedded:!0};default:return P}},T=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";return e||i},M=function(){return!!("undefined"!=typeof window&&(window.navigator||navigator))&&(window.navigator||navigator)},W=function(e){var i=M();return i&&i.platform&&(-1!==i.platform.indexOf(e)||"MacIntel"===i.platform&&i.maxTouchPoints>1&&!window.MSStream)},V=function(e){return e.type===E.Mobile},_=function(e){return e.type===E.Tablet},j=function(e){var i=e.type;return i===E.Mobile||i===E.Tablet},N=function(e){return e.type===E.SmartTv},F=function(e){return e.type===E.Browser},I=function(e){return e.type===E.Wearable},U=function(e){return e.type===E.Console},B=function(e){return e.type===E.Embedded},L=function(e){return T(e.vendor)},z=function(e){return T(e.model)},q=function(e){return T(e.type,"browser")},D=function(e){return e.name===C.Android},R=function(e){return e.name===C.Windows},H=function(e){return e.name===C.MAC_OS},G=function(e){return e.name===C.WindowsPhone},Y=function(e){return e.name===C.IOS},Z=function(e){return T(e.version)},$=function(e){return T(e.name)},X=function(e){return e.name===S.Chrome},K=function(e){return e.name===S.Firefox},Q=function(e){return e.name===S.Chromium},J=function(e){return e.name===S.Edge},ee=function(e){return e.name===S.Yandex},ei=function(e){var i=e.name;return i===S.Safari||i===S.MobileSafari},en=function(e){return e.name===S.MobileSafari},er=function(e){return e.name===S.Opera},et=function(e){var i=e.name;return i===S.InternetExplorer||i===S.Ie},eo=function(e){return e.name===S.MIUI},ea=function(e){return e.name===S.SamsungBrowser},es=function(e){return T(e.version)},eu=function(e){return T(e.major)},el=function(e){return T(e.name)},ed=function(e){return T(e.name)},ec=function(e){return T(e.version)},eb=function(){var e=M(),i=e&&e.userAgent&&e.userAgent.toLowerCase();return"string"==typeof i&&/electron/.test(i)},ew=function(e){return"string"==typeof e&&-1!==e.indexOf("Edg/")},em=function(){var e=M();return e&&(/iPad|iPhone|iPod/.test(e.platform)||"MacIntel"===e.platform&&e.maxTouchPoints>1)&&!window.MSStream},ef=function(){return W("iPad")},ep=function(){return W("iPhone")},eh=function(){return W("iPod")},eg=function(e){return T(e)};function ev(e){var i=e||f,n=i.device,r=i.browser,t=i.os,o=i.engine,a=i.ua;return{isSmartTV:N(n),isConsole:U(n),isWearable:I(n),isEmbedded:B(n),isMobileSafari:en(r)||ef(),isChromium:Q(r),isMobile:j(n)||ef(),isMobileOnly:V(n),isTablet:_(n)||ef(),isBrowser:F(n),isDesktop:F(n),isAndroid:D(t),isWinPhone:G(t),isIOS:Y(t)||ef(),isChrome:X(r),isFirefox:K(r),isSafari:ei(r),isOpera:er(r),isIE:et(r),osVersion:Z(t),osName:$(t),fullBrowserVersion:es(r),browserVersion:eu(r),browserName:el(r),mobileVendor:L(n),mobileModel:z(n),engineName:ed(o),engineVersion:ec(o),getUA:eg(a),isEdge:J(r)||ew(a),isYandex:ee(r),deviceType:q(n),isIOS13:em(),isIPad13:ef(),isIPhone13:ep(),isIPod13:eh(),isElectron:eb(),isEdgeChromium:ew(a),isLegacyEdge:J(r)&&!ew(a),isWindows:R(t),isMacOs:H(t),isMIUI:eo(r),isSamsungBrowser:ea(r)}}var ey=N(l),ex=U(l),ek=I(l),eO=B(l),eE=en(s)||ef(),eS=Q(s),eC=j(l)||ef(),eP=V(l),eA=_(l)||ef(),eT=F(l),eM=F(l),eW=D(c),eV=G(c),e_=Y(c)||ef(),ej=X(s),eN=K(s),eF=ei(s),eI=er(s),eU=et(s),eB=Z(c),eL=$(c),ez=es(s),eq=eu(s),eD=el(s),eR=L(l),eH=z(l),eG=ed(d),eY=ec(d),eZ=eg(b),e$=J(s)||ew(b),eX=ee(s),eK=q(l),eQ=em(),eJ=ef(),e0=ep(),e1=eh(),e2=eb(),e3=ew(b),e6=J(s)&&!ew(b),e4=R(c),e9=H(c),e5=eo(s),e8=ea(s);function e7(e){return m(e||window.navigator.userAgent)}i.AndroidView=function(e){var i=e.renderWithFragment,n=e.children,o=x(e,["renderWithFragment","children"]);return eW?i?t.createElement(r.Fragment,null,n):t.createElement("div",o,n):null},i.BrowserTypes=S,i.BrowserView=function(e){var i=e.renderWithFragment,n=e.children,o=x(e,["renderWithFragment","children"]);return eT?i?t.createElement(r.Fragment,null,n):t.createElement("div",o,n):null},i.ConsoleView=function(e){var i=e.renderWithFragment,n=e.children,o=x(e,["renderWithFragment","children"]);return ex?i?t.createElement(r.Fragment,null,n):t.createElement("div",o,n):null},i.CustomView=function(e){var i=e.renderWithFragment,n=e.children,o=(e.viewClassName,e.style,e.condition),a=x(e,["renderWithFragment","children","viewClassName","style","condition"]);return o?i?t.createElement(r.Fragment,null,n):t.createElement("div",a,n):null},i.IEView=function(e){var i=e.renderWithFragment,n=e.children,o=x(e,["renderWithFragment","children"]);return eU?i?t.createElement(r.Fragment,null,n):t.createElement("div",o,n):null},i.IOSView=function(e){var i=e.renderWithFragment,n=e.children,o=x(e,["renderWithFragment","children"]);return e_?i?t.createElement(r.Fragment,null,n):t.createElement("div",o,n):null},i.MobileOnlyView=function(e){var i=e.renderWithFragment,n=e.children,o=(e.viewClassName,e.style,x(e,["renderWithFragment","children","viewClassName","style"]));return eP?i?t.createElement(r.Fragment,null,n):t.createElement("div",o,n):null},i.MobileView=function(e){var i=e.renderWithFragment,n=e.children,o=x(e,["renderWithFragment","children"]);return eC?i?t.createElement(r.Fragment,null,n):t.createElement("div",o,n):null},i.OsTypes=C,i.SmartTVView=function(e){var i=e.renderWithFragment,n=e.children,o=x(e,["renderWithFragment","children"]);return ey?i?t.createElement(r.Fragment,null,n):t.createElement("div",o,n):null},i.TabletView=function(e){var i=e.renderWithFragment,n=e.children,o=x(e,["renderWithFragment","children"]);return eA?i?t.createElement(r.Fragment,null,n):t.createElement("div",o,n):null},i.WearableView=function(e){var i=e.renderWithFragment,n=e.children,o=x(e,["renderWithFragment","children"]);return ek?i?t.createElement(r.Fragment,null,n):t.createElement("div",o,n):null},i.WinPhoneView=function(e){var i=e.renderWithFragment,n=e.children,o=x(e,["renderWithFragment","children"]);return eV?i?t.createElement(r.Fragment,null,n):t.createElement("div",o,n):null},i.browserName=eD,i.browserVersion=eq,i.deviceDetect=function(e){var i=e?m(e):f,n=i.device,r=i.browser,t=i.engine,o=i.os,a=i.ua,s=A(n.type),u=s.isBrowser,l=s.isMobile,d=s.isTablet,c=s.isSmartTV,b=s.isConsole,w=s.isWearable,h=s.isEmbedded;return u?{isBrowser:u,browserMajorVersion:T(r.major),browserFullVersion:T(r.version),browserName:T(r.name),engineName:T(t.name),engineVersion:T(t.version),osName:T(o.name),osVersion:T(o.version),userAgent:T(a)}:c?{isSmartTV:c,engineName:T(t.name),engineVersion:T(t.version),osName:T(o.name),osVersion:T(o.version),userAgent:T(a)}:b?{isConsole:b,engineName:T(t.name),engineVersion:T(t.version),osName:T(o.name),osVersion:T(o.version),userAgent:T(a)}:l||d?function(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?p(Object(n),!0).forEach(function(i){var r;r=n[i],i in e?Object.defineProperty(e,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[i]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}({},s,{vendor:T(n.vendor),model:T(n.model),os:T(o.name),osVersion:T(o.version),ua:T(a)}):w?{isWearable:w,engineName:T(t.name),engineVersion:T(t.version),osName:T(o.name),osVersion:T(o.version),userAgent:T(a)}:h?{isEmbedded:h,vendor:T(n.vendor),model:T(n.model),engineName:T(t.name),engineVersion:T(t.version),osName:T(o.name),osVersion:T(o.version),userAgent:T(a)}:void 0},i.deviceType=eK,i.engineName=eG,i.engineVersion=eY,i.fullBrowserVersion=ez,i.getSelectorsByUserAgent=function(e){if(!e||"string"!=typeof e){console.error("No valid user agent string was provided");return}var i=m(e);return ev({device:i.device,browser:i.browser,os:i.os,engine:i.engine,ua:i.ua})},i.getUA=eZ,i.isAndroid=eW,i.isBrowser=eT,i.isChrome=ej,i.isChromium=eS,i.isConsole=ex,i.isDesktop=eM,i.isEdge=e$,i.isEdgeChromium=e3,i.isElectron=e2,i.isEmbedded=eO,i.isFirefox=eN,i.isIE=eU,i.isIOS=e_,i.isIOS13=eQ,i.isIPad13=eJ,i.isIPhone13=e0,i.isIPod13=e1,i.isLegacyEdge=e6,i.isMIUI=e5,i.isMacOs=e9,i.isMobile=eC,i.isMobileOnly=eP,i.isMobileSafari=eE,i.isOpera=eI,i.isSafari=eF,i.isSamsungBrowser=e8,i.isSmartTV=ey,i.isTablet=eA,i.isWearable=ek,i.isWinPhone=eV,i.isWindows=e4,i.isYandex=eX,i.mobileModel=eH,i.mobileVendor=eR,i.osName=eL,i.osVersion=eB,i.parseUserAgent=m,i.setUserAgent=function(e){return w(e)},i.useDeviceData=e7,i.useDeviceSelectors=function(e){var i=e7(e||window.navigator.userAgent);return[ev(i),i]},i.useMobileOrientation=function(){var e,i=function(e){if(Array.isArray(e))return e}(e=r.useState(function(){var e=window.innerWidth>window.innerHeight?90:0;return{isPortrait:0===e,isLandscape:90===e,orientation:0===e?"portrait":"landscape"}}))||function(e,i){var n,r,t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var o=[],a=!0,s=!1;try{for(t=t.call(e);!(a=(n=t.next()).done)&&(o.push(n.value),2!==o.length);a=!0);}catch(e){s=!0,r=e}finally{try{a||null==t.return||t.return()}finally{if(s)throw r}}return o}}(e,2)||function(e,i){if(e){if("string"==typeof e)return O(e,2);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return O(e,2)}}(e,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),n=i[0],t=i[1],o=r.useCallback(function(){var e=window.innerWidth>window.innerHeight?90:0,i={isPortrait:0===e,isLandscape:90===e,orientation:0===e?"portrait":"landscape"};n.orientation!==i.orientation&&t(i)},[n.orientation]);return r.useEffect(function(){return("undefined"==typeof window?"undefined":h(window))!==void 0&&eC&&(o(),window.addEventListener("load",o,!1),window.addEventListener("resize",o,!1)),function(){window.removeEventListener("resize",o,!1),window.removeEventListener("load",o,!1)}},[o]),n},i.withOrientationChange=function(e){return function(i){var n;function r(e){var i;return function(e,i){if(!(e instanceof i))throw TypeError("Cannot call a class as a function")}(this,r),(i=function(e,i){if(i&&("object"==typeof i||"function"==typeof i))return i;if(void 0!==i)throw TypeError("Derived constructors may only return object or undefined");return k(e)}(this,v(r).call(this,e))).isEventListenerAdded=!1,i.handleOrientationChange=i.handleOrientationChange.bind(k(i)),i.onOrientationChange=i.onOrientationChange.bind(k(i)),i.onPageLoad=i.onPageLoad.bind(k(i)),i.state={isLandscape:!1,isPortrait:!1},i}return function(e,i){if("function"!=typeof i&&null!==i)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(i&&i.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),i&&y(e,i)}(r,i),n=[{key:"handleOrientationChange",value:function(){this.isEventListenerAdded||(this.isEventListenerAdded=!0);var e=window.innerWidth>window.innerHeight?90:0;this.setState({isPortrait:0===e,isLandscape:90===e})}},{key:"onOrientationChange",value:function(){this.handleOrientationChange()}},{key:"onPageLoad",value:function(){this.handleOrientationChange()}},{key:"componentDidMount",value:function(){("undefined"==typeof window?"undefined":h(window))!==void 0&&eC&&(this.isEventListenerAdded?window.removeEventListener("load",this.onPageLoad,!1):(this.handleOrientationChange(),window.addEventListener("load",this.onPageLoad,!1)),window.addEventListener("resize",this.onOrientationChange,!1))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onOrientationChange,!1)}},{key:"render",value:function(){return t.createElement(e,g({},this.props,{isLandscape:this.state.isLandscape,isPortrait:this.state.isPortrait}))}}],function(e,i){for(var n=0;n<i.length;n++){var r=i[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(r.prototype,n),r}(t.Component)}},31696:function(e,i,n){var r;!function(t,o){"use strict";var a="function",s="undefined",u="object",l="string",d="major",c="model",b="name",w="type",m="vendor",f="version",p="architecture",h="console",g="mobile",v="tablet",y="smarttv",x="wearable",k="embedded",O="Amazon",E="Apple",S="ASUS",C="BlackBerry",P="Browser",A="Chrome",T="Firefox",M="Google",W="Huawei",V="Microsoft",_="Motorola",j="Opera",N="Samsung",F="Sharp",I="Sony",U="Xiaomi",B="Zebra",L="Facebook",z="Chromium OS",q="Mac OS",D=function(e,i){var n={};for(var r in e)i[r]&&i[r].length%2==0?n[r]=i[r].concat(e[r]):n[r]=e[r];return n},R=function(e){for(var i={},n=0;n<e.length;n++)i[e[n].toUpperCase()]=e[n];return i},H=function(e,i){return typeof e===l&&-1!==G(i).indexOf(G(e))},G=function(e){return e.toLowerCase()},Y=function(e,i){if(typeof e===l)return e=e.replace(/^\s\s*/,""),typeof i===s?e:e.substring(0,500)},Z=function(e,i){for(var n,r,t,s,l,d,c=0;c<i.length&&!l;){var b=i[c],w=i[c+1];for(n=r=0;n<b.length&&!l&&b[n];)if(l=b[n++].exec(e))for(t=0;t<w.length;t++)d=l[++r],typeof(s=w[t])===u&&s.length>0?2===s.length?typeof s[1]==a?this[s[0]]=s[1].call(this,d):this[s[0]]=s[1]:3===s.length?typeof s[1]!==a||s[1].exec&&s[1].test?this[s[0]]=d?d.replace(s[1],s[2]):void 0:this[s[0]]=d?s[1].call(this,d,s[2]):void 0:4===s.length&&(this[s[0]]=d?s[3].call(this,d.replace(s[1],s[2])):void 0):this[s]=d||o;c+=2}},$=function(e,i){for(var n in i)if(typeof i[n]===u&&i[n].length>0){for(var r=0;r<i[n].length;r++)if(H(i[n][r],e))return"?"===n?o:n}else if(H(i[n],e))return"?"===n?o:n;return e},X={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},K={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[f,[b,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[f,[b,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[b,f],[/opios[\/ ]+([\w\.]+)/i],[f,[b,j+" Mini"]],[/\bopr\/([\w\.]+)/i],[f,[b,j]],[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],[f,[b,"Baidu"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[b,f],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[f,[b,"UC"+P]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i,/micromessenger\/([\w\.]+)/i],[f,[b,"WeChat"]],[/konqueror\/([\w\.]+)/i],[f,[b,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[f,[b,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[f,[b,"Yandex"]],[/slbrowser\/([\w\.]+)/i],[f,[b,"Smart Lenovo "+P]],[/(avast|avg)\/([\w\.]+)/i],[[b,/(.+)/,"$1 Secure "+P],f],[/\bfocus\/([\w\.]+)/i],[f,[b,T+" Focus"]],[/\bopt\/([\w\.]+)/i],[f,[b,j+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[f,[b,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[f,[b,"Dolphin"]],[/coast\/([\w\.]+)/i],[f,[b,j+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[f,[b,"MIUI "+P]],[/fxios\/([-\w\.]+)/i],[f,[b,T]],[/\bqihu|(qi?ho?o?|360)browser/i],[[b,"360 "+P]],[/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i],[[b,/(.+)/,"$1 "+P],f],[/samsungbrowser\/([\w\.]+)/i],[f,[b,N+" Internet"]],[/(comodo_dragon)\/([\w\.]+)/i],[[b,/_/g," "],f],[/metasr[\/ ]?([\d\.]+)/i],[f,[b,"Sogou Explorer"]],[/(sogou)mo\w+\/([\d\.]+)/i],[[b,"Sogou Mobile"],f],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i],[b,f],[/(lbbrowser)/i,/\[(linkedin)app\]/i],[b],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[b,L],f],[/(Klarna)\/([\w\.]+)/i,/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(alipay)client\/([\w\.]+)/i,/(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],[b,f],[/\bgsa\/([\w\.]+) .*safari\//i],[f,[b,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[f,[b,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[f,[b,A+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[b,A+" WebView"],f],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[f,[b,"Android "+P]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[b,f],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[f,[b,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[f,b],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[b,[f,$,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[b,f],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[b,"Netscape"],f],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[f,[b,T+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[b,f],[/(cobalt)\/([\w\.]+)/i],[b,[f,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[p,"amd64"]],[/(ia32(?=;))/i],[[p,G]],[/((?:i[346]|x)86)[;\)]/i],[[p,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[p,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[p,"armhf"]],[/windows (ce|mobile); ppc;/i],[[p,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[p,/ower/,"",G]],[/(sun4\w)[;\)]/i],[[p,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[p,G]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[c,[m,N],[w,v]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[c,[m,N],[w,g]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[c,[m,E],[w,g]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[c,[m,E],[w,v]],[/(macintosh);/i],[c,[m,E]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[c,[m,F],[w,g]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[c,[m,W],[w,v]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[c,[m,W],[w,g]],[/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[c,/_/g," "],[m,U],[w,g]],[/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[c,/_/g," "],[m,U],[w,v]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[c,[m,"OPPO"],[w,g]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[c,[m,"Vivo"],[w,g]],[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],[c,[m,"Realme"],[w,g]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[c,[m,_],[w,g]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[c,[m,_],[w,v]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[c,[m,"LG"],[w,v]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[c,[m,"LG"],[w,g]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[c,[m,"Lenovo"],[w,v]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[c,/_/g," "],[m,"Nokia"],[w,g]],[/(pixel c)\b/i],[c,[m,M],[w,v]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[c,[m,M],[w,g]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[c,[m,I],[w,g]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[c,"Xperia Tablet"],[m,I],[w,v]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[c,[m,"OnePlus"],[w,g]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[c,[m,O],[w,v]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[c,/(.+)/g,"Fire Phone $1"],[m,O],[w,g]],[/(playbook);[-\w\),; ]+(rim)/i],[c,m,[w,v]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[c,[m,C],[w,g]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[c,[m,S],[w,v]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[c,[m,S],[w,g]],[/(nexus 9)/i],[c,[m,"HTC"],[w,v]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[m,[c,/_/g," "],[w,g]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[c,[m,"Acer"],[w,v]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[c,[m,"Meizu"],[w,g]],[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],[c,[m,"Ulefone"],[w,g]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[m,c,[w,g]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[m,c,[w,v]],[/(surface duo)/i],[c,[m,V],[w,v]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[c,[m,"Fairphone"],[w,g]],[/(u304aa)/i],[c,[m,"AT&T"],[w,g]],[/\bsie-(\w*)/i],[c,[m,"Siemens"],[w,g]],[/\b(rct\w+) b/i],[c,[m,"RCA"],[w,v]],[/\b(venue[\d ]{2,7}) b/i],[c,[m,"Dell"],[w,v]],[/\b(q(?:mv|ta)\w+) b/i],[c,[m,"Verizon"],[w,v]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[c,[m,"Barnes & Noble"],[w,v]],[/\b(tm\d{3}\w+) b/i],[c,[m,"NuVision"],[w,v]],[/\b(k88) b/i],[c,[m,"ZTE"],[w,v]],[/\b(nx\d{3}j) b/i],[c,[m,"ZTE"],[w,g]],[/\b(gen\d{3}) b.+49h/i],[c,[m,"Swiss"],[w,g]],[/\b(zur\d{3}) b/i],[c,[m,"Swiss"],[w,v]],[/\b((zeki)?tb.*\b) b/i],[c,[m,"Zeki"],[w,v]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[m,"Dragon Touch"],c,[w,v]],[/\b(ns-?\w{0,9}) b/i],[c,[m,"Insignia"],[w,v]],[/\b((nxa|next)-?\w{0,9}) b/i],[c,[m,"NextBook"],[w,v]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[m,"Voice"],c,[w,g]],[/\b(lvtel\-)?(v1[12]) b/i],[[m,"LvTel"],c,[w,g]],[/\b(ph-1) /i],[c,[m,"Essential"],[w,g]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[c,[m,"Envizen"],[w,v]],[/\b(trio[-\w\. ]+) b/i],[c,[m,"MachSpeed"],[w,v]],[/\btu_(1491) b/i],[c,[m,"Rotor"],[w,v]],[/(shield[\w ]+) b/i],[c,[m,"Nvidia"],[w,v]],[/(sprint) (\w+)/i],[m,c,[w,g]],[/(kin\.[onetw]{3})/i],[[c,/\./g," "],[m,V],[w,g]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[c,[m,B],[w,v]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[c,[m,B],[w,g]],[/smart-tv.+(samsung)/i],[m,[w,y]],[/hbbtv.+maple;(\d+)/i],[[c,/^/,"SmartTV"],[m,N],[w,y]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[m,"LG"],[w,y]],[/(apple) ?tv/i],[m,[c,E+" TV"],[w,y]],[/crkey/i],[[c,A+"cast"],[m,M],[w,y]],[/droid.+aft(\w+)( bui|\))/i],[c,[m,O],[w,y]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[c,[m,F],[w,y]],[/(bravia[\w ]+)( bui|\))/i],[c,[m,I],[w,y]],[/(mitv-\w{5}) bui/i],[c,[m,U],[w,y]],[/Hbbtv.*(technisat) (.*);/i],[m,c,[w,y]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[m,Y],[c,Y],[w,y]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[w,y]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[m,c,[w,h]],[/droid.+; (shield) bui/i],[c,[m,"Nvidia"],[w,h]],[/(playstation [345portablevi]+)/i],[c,[m,I],[w,h]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[c,[m,V],[w,h]],[/((pebble))app/i],[m,c,[w,x]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[c,[m,E],[w,x]],[/droid.+; (glass) \d/i],[c,[m,M],[w,x]],[/droid.+; (wt63?0{2,3})\)/i],[c,[m,B],[w,x]],[/(quest( 2| pro)?)/i],[c,[m,L],[w,x]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[m,[w,k]],[/(aeobc)\b/i],[c,[m,O],[w,k]],[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],[c,[w,g]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[c,[w,v]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[w,v]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[w,g]],[/(android[-\w\. ]{0,9});.+buil/i],[c,[m,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[f,[b,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[f,[b,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[b,f],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[f,b]],os:[[/microsoft (windows) (vista|xp)/i],[b,f],[/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],[b,[f,$,X]],[/windows nt 6\.2; (arm)/i,/windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,/(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[f,$,X],[b,"Windows"]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[f,/_/g,"."],[b,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[b,q],[f,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[f,b],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[b,f],[/\(bb(10);/i],[f,[b,C]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[f,[b,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[f,[b,T+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[f,[b,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[f,[b,"watchOS"]],[/crkey\/([\d\.]+)/i],[f,[b,A+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[b,z],f],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[b,f],[/(sunos) ?([\w\.\d]*)/i],[[b,"Solaris"],f],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[b,f]]},Q=function(e,i){if(typeof e===u&&(i=e,e=o),!(this instanceof Q))return new Q(e,i).getResult();var n=typeof t!==s&&t.navigator?t.navigator:o,r=e||(n&&n.userAgent?n.userAgent:""),h=n&&n.userAgentData?n.userAgentData:o,y=i?D(K,i):K,x=n&&n.userAgent==r;return this.getBrowser=function(){var e,i={};return i[b]=o,i[f]=o,Z.call(i,r,y.browser),i[d]=typeof(e=i[f])===l?e.replace(/[^\d\.]/g,"").split(".")[0]:o,x&&n&&n.brave&&typeof n.brave.isBrave==a&&(i[b]="Brave"),i},this.getCPU=function(){var e={};return e[p]=o,Z.call(e,r,y.cpu),e},this.getDevice=function(){var e={};return e[m]=o,e[c]=o,e[w]=o,Z.call(e,r,y.device),x&&!e[w]&&h&&h.mobile&&(e[w]=g),x&&"Macintosh"==e[c]&&n&&typeof n.standalone!==s&&n.maxTouchPoints&&n.maxTouchPoints>2&&(e[c]="iPad",e[w]=v),e},this.getEngine=function(){var e={};return e[b]=o,e[f]=o,Z.call(e,r,y.engine),e},this.getOS=function(){var e={};return e[b]=o,e[f]=o,Z.call(e,r,y.os),x&&!e[b]&&h&&"Unknown"!=h.platform&&(e[b]=h.platform.replace(/chrome os/i,z).replace(/macos/i,q)),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return r},this.setUA=function(e){return r=typeof e===l&&e.length>500?Y(e,500):e,this},this.setUA(r),this};Q.VERSION="1.0.37",Q.BROWSER=R([b,f,d]),Q.CPU=R([p]),Q.DEVICE=R([c,m,w,h,g,y,v,x,k]),Q.ENGINE=Q.OS=R([b,f]),typeof i!==s?(e.exports&&(i=e.exports=Q),i.UAParser=Q):n.amdO?o!==(r=(function(){return Q}).call(i,n,i,e))&&(e.exports=r):typeof t!==s&&(t.UAParser=Q);var J=typeof t!==s&&(t.jQuery||t.Zepto);if(J&&!J.ua){var ee=new Q;J.ua=ee.getResult(),J.ua.get=function(){return ee.getUA()},J.ua.set=function(e){ee.setUA(e);var i=ee.getResult();for(var n in i)J.ua[n]=i[n]}}}("object"==typeof window?window:this)}}]);