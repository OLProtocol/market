"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2822],{23663:function(e,t,n){n.d(t,{VS:function(){return o},Yv:function(){return i},Yx:function(){return r},sK:function(){return l}});var o=e=>{let t={top:{originY:1},bottom:{originY:0},left:{originX:1},right:{originX:0},"top-start":{originX:0,originY:1},"top-end":{originX:1,originY:1},"bottom-start":{originX:0,originY:0},"bottom-end":{originX:1,originY:0},"right-start":{originX:0,originY:0},"right-end":{originX:0,originY:1},"left-start":{originX:1,originY:0},"left-end":{originX:1,originY:1}};return(null==t?void 0:t[e])||{}},r=e=>({top:"top",bottom:"bottom",left:"left",right:"right","top-start":"top start","top-end":"top end","bottom-start":"bottom start","bottom-end":"bottom end","left-start":"left top","left-end":"left bottom","right-start":"right top","right-end":"right bottom"})[e],i=(e,t)=>{if(t.includes("-")){let[n]=t.split("-");if(n.includes(e))return!1}return!0},l=(e,t)=>{if(t.includes("-")){let[,n]=t.split("-");return"".concat(e,"-").concat(n)}return e}},79046:function(e,t,n){n.d(t,{Lj:function(){return o},y7:function(){return r}});var o={ease:[.36,.66,.4,1],easeIn:[.4,0,1,1],easeOut:[0,0,.2,1],easeInOut:[.4,0,.2,1],spring:[.155,1.105,.295,1.12],springOut:[.57,-.15,.62,.07],softSpring:[.16,1.11,.3,1.02]};o.easeOut,o.easeIn;var r={scaleSpring:{enter:{transform:"scale(1)",opacity:1,transition:{type:"spring",bounce:0,duration:.2}},exit:{transform:"scale(0.85)",opacity:0,transition:{type:"easeOut",duration:.15}}},scaleSpringOpacity:{initial:{opacity:0,transform:"scale(0.8)"},enter:{opacity:1,transform:"scale(1)",transition:{type:"spring",bounce:0,duration:.3}},exit:{opacity:0,transform:"scale(0.96)",transition:{type:"easeOut",bounce:0,duration:.15}}},scale:{enter:{scale:1},exit:{scale:.95}},scaleFadeIn:{enter:{transform:"scale(1)",opacity:1,transition:{duration:.25,ease:o.easeIn}},exit:{transform:"scale(0.95)",opacity:0,transition:{duration:.2,ease:o.easeOut}}},scaleInOut:{enter:{transform:"scale(1)",opacity:1,transition:{duration:.4,ease:o.ease}},exit:{transform:"scale(1.03)",opacity:0,transition:{duration:.3,ease:o.ease}}},fade:{enter:{opacity:1,transition:{duration:.4,ease:o.ease}},exit:{opacity:0,transition:{duration:.3,ease:o.ease}}},collapse:{enter:{opacity:1,height:"auto",transition:{height:{type:"spring",bounce:0,duration:.3},opacity:{easings:"ease",duration:.4}}},exit:{opacity:0,height:0,transition:{easings:"ease",duration:.3}}}}},93261:function(e,t,n){n.d(t,{v:function(){return l}});var o=n(22226),r=n(2068),i=n(21616),l=(0,r.tv)({slots:{base:["z-0","relative","bg-transparent","before:content-['']","before:hidden","before:z-[-1]","before:absolute","before:rotate-45","before:w-2.5","before:h-2.5","before:rounded-sm","data-[arrow=true]:before:block","data-[placement=top]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]","data-[placement=top]:before:left-1/2","data-[placement=top]:before:-translate-x-1/2","data-[placement=top-start]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]","data-[placement=top-start]:before:left-3","data-[placement=top-end]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]","data-[placement=top-end]:before:right-3","data-[placement=bottom]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]","data-[placement=bottom]:before:left-1/2","data-[placement=bottom]:before:-translate-x-1/2","data-[placement=bottom-start]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]","data-[placement=bottom-start]:before:left-3","data-[placement=bottom-end]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]","data-[placement=bottom-end]:before:right-3","data-[placement=left]:before:-right-[calc(theme(spacing.5)/4_-_2px)]","data-[placement=left]:before:top-1/2","data-[placement=left]:before:-translate-y-1/2","data-[placement=left-start]:before:-right-[calc(theme(spacing.5)/4_-_3px)]","data-[placement=left-start]:before:top-1/4","data-[placement=left-end]:before:-right-[calc(theme(spacing.5)/4_-_3px)]","data-[placement=left-end]:before:bottom-1/4","data-[placement=right]:before:-left-[calc(theme(spacing.5)/4_-_2px)]","data-[placement=right]:before:top-1/2","data-[placement=right]:before:-translate-y-1/2","data-[placement=right-start]:before:-left-[calc(theme(spacing.5)/4_-_3px)]","data-[placement=right-start]:before:top-1/4","data-[placement=right-end]:before:-left-[calc(theme(spacing.5)/4_-_3px)]","data-[placement=right-end]:before:bottom-1/4",...i.Dh],content:["z-10","px-2.5","py-1","w-full","inline-flex","flex-col","items-center","justify-center","box-border","subpixel-antialiased","outline-none","box-border"],trigger:["z-10"],backdrop:["hidden"],arrow:[]},variants:{size:{sm:{content:"text-tiny"},md:{content:"text-small"},lg:{content:"text-medium"}},color:{default:{base:"before:bg-content1 before:shadow-small",content:"bg-content1"},foreground:{base:"before:bg-foreground",content:o.J.solid.foreground},primary:{base:"before:bg-primary",content:o.J.solid.primary},secondary:{base:"before:bg-secondary",content:o.J.solid.secondary},success:{base:"before:bg-success",content:o.J.solid.success},warning:{base:"before:bg-warning",content:o.J.solid.warning},danger:{base:"before:bg-danger",content:o.J.solid.danger}},radius:{none:{content:"rounded-none"},sm:{content:"rounded-small"},md:{content:"rounded-medium"},lg:{content:"rounded-large"},full:{content:"rounded-full"}},shadow:{sm:{content:"shadow-small"},md:{content:"shadow-medium"},lg:{content:"shadow-large"}},backdrop:{transparent:{},opaque:{backdrop:"bg-overlay/50 backdrop-opacity-disabled"},blur:{backdrop:"backdrop-blur-sm backdrop-saturate-150 bg-overlay/30"}},triggerScaleOnOpen:{true:{trigger:["aria-expanded:scale-[0.97]","aria-expanded:opacity-70","subpixel-antialiased"]},false:{}},disableAnimation:{true:{base:"animate-none"}},isTriggerDisabled:{true:{trigger:"opacity-disabled pointer-events-none"},false:{}}},defaultVariants:{color:"default",radius:"lg",size:"md",shadow:"md",backdrop:"transparent",triggerScaleOnOpen:!0},compoundVariants:[{backdrop:["opaque","blur"],class:{backdrop:"block w-full h-full fixed inset-0 -z-30"}}]})},8381:function(e,t,n){n.d(t,{L:function(){return i}});var o=n(45668),r=n(2265);function i(e){let{isDisabled:t,onBlurWithin:n,onFocusWithin:i,onFocusWithinChange:l}=e,a=(0,r.useRef)({isFocusWithin:!1}),c=(0,r.useCallback)(e=>{a.current.isFocusWithin&&!e.currentTarget.contains(e.relatedTarget)&&(a.current.isFocusWithin=!1,n&&n(e),l&&l(!1))},[n,l,a]),s=(0,o.d)(c),u=(0,r.useCallback)(e=>{a.current.isFocusWithin||document.activeElement!==e.target||(i&&i(e),l&&l(!0),a.current.isFocusWithin=!0,s(e))},[i,l,s]);return t?{focusWithinProps:{onFocus:void 0,onBlur:void 0}}:{focusWithinProps:{onFocus:u,onBlur:c}}}},64292:function(e,t,n){n.d(t,{O:function(){return i},v:function(){return r}});var o=n(2265);let r=new WeakMap;function i(e){let{triggerRef:t,isOpen:n,onClose:i}=e;(0,o.useEffect)(()=>{if(!n||null===i)return;let e=e=>{let n=e.target;if(!t.current||n instanceof Node&&!n.contains(t.current))return;let o=i||r.get(t.current);o&&o()};return window.addEventListener("scroll",e,!0),()=>{window.removeEventListener("scroll",e,!0)}},[n,i,t])}},73699:function(e,t,n){n.d(t,{t:function(){return L}});var o=n(82306),r=n(50655);let i={top:"top",bottom:"top",left:"left",right:"left"},l={top:"bottom",bottom:"top",left:"right",right:"left"},a={top:"left",left:"top"},c={top:"height",left:"width"},s={width:"totalWidth",height:"totalHeight"},u={},d="undefined"!=typeof document&&window.visualViewport;function f(e){let t=0,n=0,r=0,i=0,l=0,a=0,c={},s=(null==d?void 0:d.scale)>1;if("BODY"===e.tagName){var u,f;let o=document.documentElement;r=o.clientWidth,i=o.clientHeight,t=null!==(u=null==d?void 0:d.width)&&void 0!==u?u:r,n=null!==(f=null==d?void 0:d.height)&&void 0!==f?f:i,c.top=o.scrollTop||e.scrollTop,c.left=o.scrollLeft||e.scrollLeft,d&&(l=d.offsetTop,a=d.offsetLeft)}else({width:t,height:n,top:l,left:a}=b(e)),c.top=e.scrollTop,c.left=e.scrollLeft,r=t,i=n;return(0,o.Pf)()&&("BODY"===e.tagName||"HTML"===e.tagName)&&s&&(c.top=0,c.left=0,l=d.pageTop,a=d.pageLeft),{width:t,height:n,totalWidth:r,totalHeight:i,scroll:c,top:l,left:a}}function p(e,t,n,o,r,l,a){let s=r.scroll[e],u=o[c[e]],d=o.scroll[i[e]]+l,f=u+o.scroll[i[e]]-l,p=t-s+a[e]-o[i[e]],m=t-s+n+a[e]-o[i[e]];return p<d?d-p:m>f?Math.max(f-m,d-p):0}function m(e){if(u[e])return u[e];let[t,n]=e.split(" "),o=i[t]||"right",r=a[o];i[n]||(n="center");let l=c[o],s=c[r];return u[e]={placement:t,crossPlacement:n,axis:o,crossAxis:r,size:l,crossSize:s},u[e]}function g(e,t,n,o,i,a,c,u,d,f){let{placement:p,crossPlacement:m,axis:g,crossAxis:h,size:b,crossSize:v}=o,w={};w[h]=e[h],"center"===m?w[h]+=(e[v]-n[v])/2:m!==h&&(w[h]+=e[v]-n[v]),w[h]+=a;let y=e[h]-n[v]+d+f,E=e[h]+e[v]-d-f;if(w[h]=(0,r.uZ)(w[h],y,E),p===g){let n=u?c[b]:t[s[b]];w[l[g]]=Math.floor(n-e[g]+i)}else w[g]=Math.floor(e[g]+e[b]+i);return w}function h(e,t,n,o,r,i){let{placement:a,axis:c,size:s}=i;return a===c?Math.max(0,n[c]-e[c]-e.scroll[c]+t[c]-o[c]-o[l[c]]-r):Math.max(0,e[s]+e[c]+e.scroll[c]-t[c]-n[c]-n[s]-o[c]-o[l[c]]-r)}function b(e){let{top:t,left:n,width:o,height:r}=e.getBoundingClientRect(),{scrollTop:i,scrollLeft:l,clientTop:a,clientLeft:c}=document.documentElement;return{top:t+i-a,left:n+l-c,width:o,height:r}}function v(e,t){let n,o=window.getComputedStyle(e);if("fixed"===o.position){let{top:t,left:o,width:r,height:i}=e.getBoundingClientRect();n={top:t,left:o,width:r,height:i}}else{n=b(e);let o=b(t),r=window.getComputedStyle(t);o.top+=(parseInt(r.borderTopWidth,10)||0)-t.scrollTop,o.left+=(parseInt(r.borderLeftWidth,10)||0)-t.scrollLeft,n.top-=o.top,n.left-=o.left}return n.top-=parseInt(o.marginTop,10)||0,n.left-=parseInt(o.marginLeft,10)||0,n}function w(e){let t=window.getComputedStyle(e);return"none"!==t.transform||/transform|perspective/.test(t.willChange)||"none"!==t.filter||"paint"===t.contain||"backdropFilter"in t&&"none"!==t.backdropFilter||"WebkitBackdropFilter"in t&&"none"!==t.WebkitBackdropFilter}var y=n(64292),E=n(2265),x=n(77594),N=n(34909);let T="undefined"!=typeof document&&window.visualViewport;function L(e){let{direction:t}=(0,N.j)(),{arrowSize:n=0,targetRef:o,overlayRef:i,scrollRef:a=i,placement:c="bottom",containerPadding:u=12,shouldFlip:d=!0,boundaryElement:L="undefined"!=typeof document?document.body:null,offset:R=0,crossOffset:C=0,shouldUpdatePosition:M=!0,isOpen:S=!0,onClose:O,maxHeight:z,arrowBoundaryOffset:k=0}=e,[F,H]=(0,E.useState)({position:{},arrowOffsetLeft:void 0,arrowOffsetTop:void 0,maxHeight:void 0,placement:void 0}),W=[M,c,i.current,o.current,a.current,u,d,L,R,C,S,t,z,k,n],_=(0,E.useRef)(null==T?void 0:T.scale);(0,E.useEffect)(()=>{S&&(_.current=null==T?void 0:T.scale)},[S]);let I=(0,E.useCallback)(()=>{var e,y;if(!1===M||!S||!i.current||!o.current||!a.current||!L||(null==T?void 0:T.scale)!==_.current)return;let E=i.current;!z&&i.current&&(E.style.top="0px",E.style.bottom="",E.style.maxHeight=(null!==(y=null===(e=window.visualViewport)||void 0===e?void 0:e.height)&&void 0!==y?y:window.innerHeight)+"px");let x=function(e){let t,{placement:n,targetNode:o,overlayNode:i,scrollNode:a,padding:c,shouldFlip:u,boundaryElement:d,offset:y,crossOffset:E,maxHeight:x,arrowSize:N=0,arrowBoundaryOffset:T=0}=e,L=i instanceof HTMLElement?function(e){let t=e.offsetParent;if(t&&t===document.body&&"static"===window.getComputedStyle(t).position&&!w(t)&&(t=document.documentElement),null==t)for(t=e.parentElement;t&&!w(t);)t=t.parentElement;return t||document.documentElement}(i):document.documentElement,R=L===document.documentElement,C=window.getComputedStyle(L).position,M=R?b(o):v(o,L);if(!R){let{marginTop:e,marginLeft:t}=window.getComputedStyle(o);M.top+=parseInt(e,10)||0,M.left+=parseInt(t,10)||0}let S=b(i),O={top:parseInt((t=window.getComputedStyle(i)).marginTop,10)||0,bottom:parseInt(t.marginBottom,10)||0,left:parseInt(t.marginLeft,10)||0,right:parseInt(t.marginRight,10)||0};S.width+=O.left+O.right,S.height+=O.top+O.bottom;let z={top:a.scrollTop,left:a.scrollLeft,width:a.scrollWidth,height:a.scrollHeight},k=f(d),F=f(L),H="BODY"===d.tagName?b(L):v(L,d);return"HTML"===L.tagName&&"BODY"===d.tagName&&(F.scroll.top=0,F.scroll.left=0),function(e,t,n,o,i,a,c,u,d,f,b,v,w,y,E,x){let N=m(e),{size:T,crossAxis:L,crossSize:R,placement:C,crossPlacement:M}=N,S=g(t,u,n,N,b,v,f,w,E,x),O=b,z=h(u,f,t,i,a+b,N);if(c&&o[T]>z){let e=m(`${l[C]} ${M}`),o=g(t,u,n,e,b,v,f,w,E,x);h(u,f,t,i,a+b,e)>z&&(N=e,S=o,O=b)}let k="bottom";"top"===N.axis?"top"===N.placement?k="top":"bottom"===N.placement&&(k="bottom"):"top"===N.crossAxis&&("top"===N.crossPlacement?k="bottom":"bottom"===N.crossPlacement&&(k="top"));let F=p(L,S[L],n[R],u,d,a,f);S[L]+=F;let H=function(e,t,n,o,r,i,l,a){let c=o?n.height:t[s.height],u=null!=e.top?n.top+e.top:n.top+(c-e.bottom-l),d="top"!==a?Math.max(0,t.height+t.top+t.scroll.top-u-(r.top+r.bottom+i)):Math.max(0,u+l-(t.top+t.scroll.top)-(r.top+r.bottom+i));return Math.min(t.height-2*i,d)}(S,u,f,w,i,a,n.height,k);y&&y<H&&(H=y),n.height=Math.min(n.height,H),F=p(L,(S=g(t,u,n,N,O,v,f,w,E,x))[L],n[R],u,d,a,f),S[L]+=F;let W={},_=t[L]+.5*t[R]-S[L],I=E/2+x,A=n[R]-E/2-x,P=t[L]-S[L]+E/2,Y=t[L]+t[R]-S[L]-E/2,B=(0,r.uZ)(_,P,Y);return W[L]=(0,r.uZ)(B,I,A),{position:S,maxHeight:H,arrowOffsetLeft:W.left,arrowOffsetTop:W.top,placement:N.placement}}(n,M,S,z,O,c,u,k,F,H,y,E,!!C&&"static"!==C,x,N,T)}({placement:"rtl"===t?c.replace("start","right").replace("end","left"):c.replace("start","left").replace("end","right"),overlayNode:i.current,targetNode:o.current,scrollNode:a.current,padding:u,shouldFlip:d,boundaryElement:L,offset:R,crossOffset:C,maxHeight:z,arrowSize:n,arrowBoundaryOffset:k});E.style.top="",E.style.bottom="",Object.keys(x.position).forEach(e=>E.style[e]=x.position[e]+"px"),E.style.maxHeight=null!=x.maxHeight?x.maxHeight+"px":void 0,H(x)},W);(0,x.b)(I,W),(0,x.b)(()=>(window.addEventListener("resize",I,!1),()=>{window.removeEventListener("resize",I,!1)}),[I]),function(e){let{ref:t,onResize:n}=e;(0,E.useEffect)(()=>{let e=null==t?void 0:t.current;if(e){if(!(void 0!==window.ResizeObserver))return window.addEventListener("resize",n,!1),()=>{window.removeEventListener("resize",n,!1)};{let t=new window.ResizeObserver(e=>{e.length&&n()});return t.observe(e),()=>{e&&t.unobserve(e)}}}},[n,t])}({ref:i,onResize:I});let A=(0,E.useRef)(!1);(0,x.b)(()=>{let e;let t=()=>{A.current=!0,clearTimeout(e),e=setTimeout(()=>{A.current=!1},500),I()},n=()=>{A.current&&t()};return null==T||T.addEventListener("resize",t),null==T||T.addEventListener("scroll",n),()=>{null==T||T.removeEventListener("resize",t),null==T||T.removeEventListener("scroll",n)}},[I]);let P=(0,E.useCallback)(()=>{A.current||O()},[O,A]);return(0,y.O)({triggerRef:o,isOpen:S,onClose:O&&P}),{overlayProps:{style:{position:"absolute",zIndex:1e5,...F.position,maxHeight:F.maxHeight}},placement:F.placement,arrowProps:{"aria-hidden":"true",role:"presentation",style:{left:F.arrowOffsetLeft,top:F.arrowOffsetTop}},updatePosition:I}}},84511:function(e,t,n){let o;n.d(t,{t:function(){return f}});var r=n(77594),i=n(82306);function l(...e){return(...t)=>{for(let n of e)"function"==typeof n&&n(...t)}}function a(e,t){let n=window.getComputedStyle(e),o=/(auto|scroll)/.test(n.overflow+n.overflowX+n.overflowY);return o&&t&&(o=e.scrollHeight!==e.clientHeight||e.scrollWidth!==e.clientWidth),o}function c(e,t){let n=e;for(a(n,t)&&(n=n.parentElement);n&&!a(n,t);)n=n.parentElement;return n||document.scrollingElement||document.documentElement}let s="undefined"!=typeof document&&window.visualViewport,u=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]),d=0;function f(e={}){let{isDisabled:t}=e;(0,r.b)(()=>{if(!t){let e,t,n,r,a;return 1==++d&&(o=(0,i.gn)()?(n=null,r=()=>{if(n)return;let e=window.pageXOffset,t=window.pageYOffset;n=l(m(window,"scroll",()=>{window.scrollTo(0,0)}),p(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`),p(document.documentElement,"overflow","hidden"),p(document.body,"marginTop",`-${t}px`),()=>{window.scrollTo(e,t)}),window.scrollTo(0,0)},a=l(m(document,"touchstart",n=>{((e=c(n.target,!0))!==document.documentElement||e!==document.body)&&e instanceof HTMLElement&&"auto"===window.getComputedStyle(e).overscrollBehavior&&(t=p(e,"overscrollBehavior","contain"))},{passive:!1,capture:!0}),m(document,"touchmove",t=>{if(!e||e===document.documentElement||e===document.body){t.preventDefault();return}e.scrollHeight===e.clientHeight&&e.scrollWidth===e.clientWidth&&t.preventDefault()},{passive:!1,capture:!0}),m(document,"touchend",e=>{let n=e.target;h(n)&&n!==document.activeElement&&(e.preventDefault(),r(),n.style.transform="translateY(-2000px)",n.focus(),requestAnimationFrame(()=>{n.style.transform=""})),t&&t()},{passive:!1,capture:!0}),m(document,"focus",e=>{let t=e.target;h(t)&&(r(),t.style.transform="translateY(-2000px)",requestAnimationFrame(()=>{t.style.transform="",s&&(s.height<window.innerHeight?requestAnimationFrame(()=>{g(t)}):s.addEventListener("resize",()=>g(t),{once:!0}))}))},!0)),()=>{null==t||t(),null==n||n(),a()}):l(p(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`),p(document.documentElement,"overflow","hidden"))),()=>{0==--d&&o()}}},[t])}function p(e,t,n){let o=e.style[t];return e.style[t]=n,()=>{e.style[t]=o}}function m(e,t,n,o){return e.addEventListener(t,n,o),()=>{e.removeEventListener(t,n,o)}}function g(e){let t=document.scrollingElement||document.documentElement;for(;e&&e!==t;){let t=c(e);if(t!==document.documentElement&&t!==document.body&&t!==e){let n=t.getBoundingClientRect().top,o=e.getBoundingClientRect().top;o>n+e.clientHeight&&(t.scrollTop+=o-n)}e=t.parentElement}}function h(e){return e instanceof HTMLInputElement&&!u.has(e.type)||e instanceof HTMLTextAreaElement||e instanceof HTMLElement&&e.isContentEditable}},11158:function(e,t,n){n.d(t,{MT:function(){return h},cW:function(){return T}});let o=e=>{var t;return null!==(t=null==e?void 0:e.ownerDocument)&&void 0!==t?t:document},r=e=>e&&"window"in e&&e.window===e?e:o(e).defaultView||window,i=new Map,l=new Set;function a(){if("undefined"==typeof window)return;function e(e){return"propertyName"in e}let t=n=>{if(!e(n)||!n.target)return;let o=i.get(n.target);if(o&&(o.delete(n.propertyName),0===o.size&&(n.target.removeEventListener("transitioncancel",t),i.delete(n.target)),0===i.size)){for(let e of l)e();l.clear()}};document.body.addEventListener("transitionrun",n=>{if(!e(n)||!n.target)return;let o=i.get(n.target);o||(o=new Set,i.set(n.target,o),n.target.addEventListener("transitioncancel",t,{once:!0})),o.add(n.propertyName)}),document.body.addEventListener("transitionend",t)}function c(e){if(function(){if(null==s){s=!1;try{document.createElement("div").focus({get preventScroll(){return s=!0,!0}})}catch(e){}}return s}())e.focus({preventScroll:!0});else{let t=function(e){let t=e.parentNode,n=[],o=document.scrollingElement||document.documentElement;for(;t instanceof HTMLElement&&t!==o;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&n.push({element:t,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}),t=t.parentNode;return o instanceof HTMLElement&&n.push({element:o,scrollTop:o.scrollTop,scrollLeft:o.scrollLeft}),n}(e);e.focus(),function(e){for(let{element:t,scrollTop:n,scrollLeft:o}of e)t.scrollTop=n,t.scrollLeft=o}(t)}}"undefined"!=typeof document&&("loading"!==document.readyState?a():document.addEventListener("DOMContentLoaded",a));let s=null;var u=n(95729),d=n(2265);let f="undefined"!=typeof document?d.useLayoutEffect:()=>{},p=d.createContext(null),m="react-aria-focus-scope-restore",g=null;function h(e){var t,n,r;let i,l,{children:a,contain:c,restoreFocus:s,autoFocus:u}=e,h=(0,d.useRef)(null),b=(0,d.useRef)(null),v=(0,d.useRef)([]),{parentNode:w}=(0,d.useContext)(p)||{},T=(0,d.useMemo)(()=>new k({scopeRef:v}),[v]);f(()=>{let e=w||F.root;if(F.getTreeNode(e.scopeRef)&&g&&!L(g,e.scopeRef)){let t=F.getTreeNode(g);t&&(e=t)}e.addChild(T),F.addNode(T)},[T,w]),f(()=>{let e=F.getTreeNode(v);e&&(e.contain=!!c)},[c]),f(()=>{var e;let t=null===(e=h.current)||void 0===e?void 0:e.nextSibling,n=[],o=e=>e.stopPropagation();for(;t&&t!==b.current;)n.push(t),t.addEventListener(m,o),t=t.nextSibling;return v.current=n,()=>{for(let e of n)e.removeEventListener(m,o)}},[a]),f(()=>{if(n||r)return;let e=t.current,i=o(e?e[0]:void 0),l=e=>{let n=e.target;x(n,t.current)?g=t:N(n)||(g=null)};return i.addEventListener("focusin",l,!1),null==e||e.forEach(e=>e.addEventListener("focusin",l,!1)),()=>{i.removeEventListener("focusin",l,!1),null==e||e.forEach(e=>e.removeEventListener("focusin",l,!1))}},[t=v,n=s,r=c]),i=(0,d.useRef)(void 0),l=(0,d.useRef)(void 0),f(()=>{let e=v.current;if(!c){l.current&&(cancelAnimationFrame(l.current),l.current=void 0);return}let t=o(e?e[0]:void 0),n=e=>{if("Tab"!==e.key||e.altKey||e.ctrlKey||e.metaKey||!E(v)||e.isComposing)return;let n=t.activeElement,o=v.current;if(!o||!x(n,o))return;let r=O(y(o),{tabbable:!0},o);if(!n)return;r.currentNode=n;let i=e.shiftKey?r.previousNode():r.nextNode();i||(r.currentNode=e.shiftKey?o[o.length-1].nextElementSibling:o[0].previousElementSibling,i=e.shiftKey?r.previousNode():r.nextNode()),e.preventDefault(),i&&R(i,!0)},r=e=>{(!g||L(g,v))&&x(e.target,v.current)?(g=v,i.current=e.target):E(v)&&!N(e.target,v)?i.current?i.current.focus():g&&g.current&&M(g.current):E(v)&&(i.current=e.target)},a=e=>{l.current&&cancelAnimationFrame(l.current),l.current=requestAnimationFrame(()=>{if(t.activeElement&&E(v)&&!N(t.activeElement,v)){if(g=v,t.body.contains(e.target)){var n;i.current=e.target,null===(n=i.current)||void 0===n||n.focus()}else g.current&&M(g.current)}})};return t.addEventListener("keydown",n,!1),t.addEventListener("focusin",r,!1),null==e||e.forEach(e=>e.addEventListener("focusin",r,!1)),null==e||e.forEach(e=>e.addEventListener("focusout",a,!1)),()=>{t.removeEventListener("keydown",n,!1),t.removeEventListener("focusin",r,!1),null==e||e.forEach(e=>e.removeEventListener("focusin",r,!1)),null==e||e.forEach(e=>e.removeEventListener("focusout",a,!1))}},[v,c]),f(()=>()=>{l.current&&cancelAnimationFrame(l.current)},[l]),function(e,t,n){let r=(0,d.useRef)("undefined"!=typeof document?o(e.current?e.current[0]:void 0).activeElement:null);f(()=>{let r=e.current,i=o(r?r[0]:void 0);if(!t||n)return;let l=()=>{(!g||L(g,e))&&x(i.activeElement,e.current)&&(g=e)};return i.addEventListener("focusin",l,!1),null==r||r.forEach(e=>e.addEventListener("focusin",l,!1)),()=>{i.removeEventListener("focusin",l,!1),null==r||r.forEach(e=>e.removeEventListener("focusin",l,!1))}},[e,n]),f(()=>{let r=o(e.current?e.current[0]:void 0);if(!t)return;let i=t=>{if("Tab"!==t.key||t.altKey||t.ctrlKey||t.metaKey||!E(e)||t.isComposing)return;let n=r.activeElement;if(!x(n,e.current))return;let o=F.getTreeNode(e);if(!o)return;let i=o.nodeToRestore,l=O(r.body,{tabbable:!0});l.currentNode=n;let a=t.shiftKey?l.previousNode():l.nextNode();if(i&&r.body.contains(i)&&i!==r.body||(i=void 0,o.nodeToRestore=void 0),(!a||!x(a,e.current))&&i){l.currentNode=i;do a=t.shiftKey?l.previousNode():l.nextNode();while(x(a,e.current));(t.preventDefault(),t.stopPropagation(),a)?R(a,!0):N(i)?R(i,!0):n.blur()}};return n||r.addEventListener("keydown",i,!0),()=>{n||r.removeEventListener("keydown",i,!0)}},[e,t,n]),f(()=>{var n;let i=o(e.current?e.current[0]:void 0);if(!t)return;let l=F.getTreeNode(e);if(l)return l.nodeToRestore=null!==(n=r.current)&&void 0!==n?n:void 0,()=>{let n=F.getTreeNode(e);if(!n)return;let o=n.nodeToRestore;if(t&&o&&(x(i.activeElement,e.current)||i.activeElement===i.body&&function(e){let t=F.getTreeNode(g);for(;t&&t.scopeRef!==e;){if(t.nodeToRestore)return!1;t=t.parent}return(null==t?void 0:t.scopeRef)===e}(e))){let t=F.clone();requestAnimationFrame(()=>{if(i.activeElement===i.body){let n=t.getTreeNode(e);for(;n;){if(n.nodeToRestore&&n.nodeToRestore.isConnected){S(n.nodeToRestore);return}n=n.parent}for(n=t.getTreeNode(e);n;){if(n.scopeRef&&n.scopeRef.current&&F.getTreeNode(n.scopeRef)){S(C(n.scopeRef.current,!0));return}n=n.parent}}})}}},[e,t])}(v,s,c),function(e,t){let n=d.useRef(t);(0,d.useEffect)(()=>{n.current&&(g=e,!x(o(e.current?e.current[0]:void 0).activeElement,g.current)&&e.current&&M(e.current)),n.current=!1},[e])}(v,u),(0,d.useEffect)(()=>{let e=o(v.current?v.current[0]:void 0).activeElement,t=null;if(x(e,v.current)){for(let n of F.traverse())n.scopeRef&&x(e,n.scopeRef.current)&&(t=n);t===F.getTreeNode(v)&&(g=t.scopeRef)}},[v]),f(()=>()=>{var e,t,n;let o=null!==(n=null===(t=F.getTreeNode(v))||void 0===t?void 0:null===(e=t.parent)||void 0===e?void 0:e.scopeRef)&&void 0!==n?n:null;(v===g||L(v,g))&&(!o||F.getTreeNode(o))&&(g=o),F.removeTreeNode(v)},[v]);let z=(0,d.useMemo)(()=>({focusNext(e={}){let t=v.current,{from:n,tabbable:r,wrap:i,accept:l}=e,a=n||o(t[0]).activeElement,c=t[0].previousElementSibling,s=O(y(t),{tabbable:r,accept:l},t);s.currentNode=x(a,t)?a:c;let u=s.nextNode();return!u&&i&&(s.currentNode=c,u=s.nextNode()),u&&R(u,!0),u},focusPrevious(e={}){let t=v.current,{from:n,tabbable:r,wrap:i,accept:l}=e,a=n||o(t[0]).activeElement,c=t[t.length-1].nextElementSibling,s=O(y(t),{tabbable:r,accept:l},t);s.currentNode=x(a,t)?a:c;let u=s.previousNode();return!u&&i&&(s.currentNode=c,u=s.previousNode()),u&&R(u,!0),u},focusFirst(e={}){let t=v.current,{tabbable:n,accept:o}=e,r=O(y(t),{tabbable:n,accept:o},t);r.currentNode=t[0].previousElementSibling;let i=r.nextNode();return i&&R(i,!0),i},focusLast(e={}){let t=v.current,{tabbable:n,accept:o}=e,r=O(y(t),{tabbable:n,accept:o},t);r.currentNode=t[t.length-1].nextElementSibling;let i=r.previousNode();return i&&R(i,!0),i}}),[]),H=(0,d.useMemo)(()=>({focusManager:z,parentNode:T}),[T,z]);return d.createElement(p.Provider,{value:H},d.createElement("span",{"data-focus-scope-start":!0,hidden:!0,ref:h}),a,d.createElement("span",{"data-focus-scope-end":!0,hidden:!0,ref:b}))}let b=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]"],v=b.join(":not([hidden]),")+",[tabindex]:not([disabled]):not([hidden])";b.push('[tabindex]:not([tabindex="-1"]):not([disabled])');let w=b.join(':not([hidden]):not([tabindex="-1"]),');function y(e){return e[0].parentElement}function E(e){let t=F.getTreeNode(g);for(;t&&t.scopeRef!==e;){if(t.contain)return!1;t=t.parent}return!0}function x(e,t){return!!e&&!!t&&t.some(t=>t.contains(e))}function N(e,t=null){if(e instanceof Element&&e.closest("[data-react-aria-top-layer]"))return!0;for(let{scopeRef:n}of F.traverse(F.getTreeNode(t)))if(n&&x(e,n.current))return!0;return!1}function T(e){return N(e,g)}function L(e,t){var n;let o=null===(n=F.getTreeNode(t))||void 0===n?void 0:n.parent;for(;o;){if(o.scopeRef===e)return!0;o=o.parent}return!1}function R(e,t=!1){if(null==e||t){if(null!=e)try{e.focus()}catch(e){}}else try{!function(e){let t=o(e);if("virtual"===(0,u.Jz)()){var n;let o=t.activeElement;n=()=>{t.activeElement===o&&e.isConnected&&c(e)},requestAnimationFrame(()=>{0===i.size?n():l.add(n)})}else c(e)}(e)}catch(e){}}function C(e,t=!0){let n=e[0].previousElementSibling,o=y(e),r=O(o,{tabbable:t},e);r.currentNode=n;let i=r.nextNode();return t&&!i&&((r=O(o=y(e),{tabbable:!1},e)).currentNode=n,i=r.nextNode()),i}function M(e,t=!0){R(C(e,t))}function S(e){e.dispatchEvent(new CustomEvent(m,{bubbles:!0,cancelable:!0}))&&R(e)}function O(e,t,n){let i=(null==t?void 0:t.tabbable)?w:v,l=o(e).createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode(e){var o;return(null==t?void 0:null===(o=t.from)||void 0===o?void 0:o.contains(e))?NodeFilter.FILTER_REJECT:e.matches(i)&&function e(t,n){return"#comment"!==t.nodeName&&function(e){let t=r(e);if(!(e instanceof t.HTMLElement)&&!(e instanceof t.SVGElement))return!1;let{display:n,visibility:o}=e.style,i="none"!==n&&"hidden"!==o&&"collapse"!==o;if(i){let{getComputedStyle:t}=e.ownerDocument.defaultView,{display:n,visibility:o}=t(e);i="none"!==n&&"hidden"!==o&&"collapse"!==o}return i}(t)&&!t.hasAttribute("hidden")&&!t.hasAttribute("data-react-aria-prevent-focus")&&("DETAILS"!==t.nodeName||!n||"SUMMARY"===n.nodeName||t.hasAttribute("open"))&&(!t.parentElement||e(t.parentElement,t))}(e)&&(!n||x(e,n))&&(!(null==t?void 0:t.accept)||t.accept(e))?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});return(null==t?void 0:t.from)&&(l.currentNode=t.from),l}class z{get size(){return this.fastMap.size}getTreeNode(e){return this.fastMap.get(e)}addTreeNode(e,t,n){let o=this.fastMap.get(null!=t?t:null);if(!o)return;let r=new k({scopeRef:e});o.addChild(r),r.parent=o,this.fastMap.set(e,r),n&&(r.nodeToRestore=n)}addNode(e){this.fastMap.set(e.scopeRef,e)}removeTreeNode(e){if(null===e)return;let t=this.fastMap.get(e);if(!t)return;let n=t.parent;for(let e of this.traverse())e!==t&&t.nodeToRestore&&e.nodeToRestore&&t.scopeRef&&t.scopeRef.current&&x(e.nodeToRestore,t.scopeRef.current)&&(e.nodeToRestore=t.nodeToRestore);let o=t.children;n&&(n.removeChild(t),o.size>0&&o.forEach(e=>n&&n.addChild(e))),this.fastMap.delete(t.scopeRef)}*traverse(e=this.root){if(null!=e.scopeRef&&(yield e),e.children.size>0)for(let t of e.children)yield*this.traverse(t)}clone(){var e,t;let n=new z;for(let o of this.traverse())n.addTreeNode(o.scopeRef,null!==(t=null===(e=o.parent)||void 0===e?void 0:e.scopeRef)&&void 0!==t?t:null,o.nodeToRestore);return n}constructor(){this.fastMap=new Map,this.root=new k({scopeRef:null}),this.fastMap.set(null,this.root)}}class k{addChild(e){this.children.add(e),e.parent=this}removeChild(e){this.children.delete(e),e.parent=void 0}constructor(e){this.children=new Set,this.contain=!1,this.scopeRef=e.scopeRef}}let F=new z},82306:function(e,t,n){function o(e){var t;return"undefined"!=typeof window&&null!=window.navigator&&((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.brands.some(t=>e.test(t.brand)))||e.test(window.navigator.userAgent))}function r(e){var t;return"undefined"!=typeof window&&null!=window.navigator&&e.test((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.platform)||window.navigator.platform)}function i(){return r(/^iPhone/i)||r(/^iPad/i)||r(/^Mac/i)&&navigator.maxTouchPoints>1}function l(){return o(/AppleWebKit/i)&&!o(/Chrome/i)}n.d(t,{Pf:function(){return l},gn:function(){return i}})},77594:function(e,t,n){n.d(t,{b:function(){return r}});var o=n(2265);let r="undefined"!=typeof document?o.useLayoutEffect:()=>{}},82563:function(e,t,n){n.d(t,{c:function(){return i}});var o=n(2265);function r(e){return null}r.getCollectionNode=function*(e,t){let{childItems:n,title:r,children:i}=e,l=e.title||e.children,a=e.textValue||("string"==typeof l?l:"")||e["aria-label"]||"";a||(null==t?void 0:t.suppressTextValueWarning)||console.warn("<Item> with non-plain text contents is unsupported by type to select for accessibility. Please add a `textValue` prop."),yield{type:"item",props:e,rendered:l,textValue:a,"aria-label":e["aria-label"],hasChildNodes:null!=e.hasChildItems?e.hasChildItems:!!(e.childItems||e.title&&o.Children.count(e.children)>0),*childNodes(){if(n)for(let e of n)yield{type:"item",value:e};else if(r){let e=[];o.Children.forEach(i,t=>{e.push({type:"item",element:t})}),yield*e}}}};let i=r},50655:function(e,t,n){function o(e,t=-1/0,n=1/0){return Math.min(Math.max(e,t),n)}function r(e,t){let n=e,o=t.toString(),r=o.indexOf("."),i=r>=0?o.length-r:0;if(i>0){let e=Math.pow(10,i);n=Math.round(n*e)/e}return n}function i(e,t,n,o){t=Number(t),n=Number(n);let i=(e-(isNaN(t)?0:t))%o,l=r(2*Math.abs(i)>=o?e+Math.sign(i)*(o-Math.abs(i)):e-i,o);return isNaN(t)?!isNaN(n)&&l>n&&(l=Math.floor(r(n/o,o))*o):l<t?l=t:!isNaN(n)&&l>n&&(l=t+Math.floor(r((n-t)/o,o))*o),l=r(l,o)}n.d(t,{N4:function(){return i},uZ:function(){return o}})}}]);