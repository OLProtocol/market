"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[705],{95705:function(e,t,n){n.d(t,{Z:function(){return ee}});var r,o,a,s,i,d={solid:{default:"bg-default text-default-foreground",primary:"bg-primary text-primary-foreground",secondary:"bg-secondary text-secondary-foreground",success:"bg-success text-success-foreground",warning:"bg-warning text-warning-foreground",danger:"bg-danger text-danger-foreground",foreground:"bg-foreground text-background"},shadow:{default:"shadow-lg shadow-default/50 bg-default text-default-foreground",primary:"shadow-lg shadow-primary/40 bg-primary text-primary-foreground",secondary:"shadow-lg shadow-secondary/40 bg-secondary text-secondary-foreground",success:"shadow-lg shadow-success/40 bg-success text-success-foreground",warning:"shadow-lg shadow-warning/40 bg-warning text-warning-foreground",danger:"shadow-lg shadow-danger/40 bg-danger text-danger-foreground",foreground:"shadow-lg shadow-foreground/40 bg-foreground text-background"},bordered:{default:"bg-transparent border-default text-foreground",primary:"bg-transparent border-primary text-primary",secondary:"bg-transparent border-secondary text-secondary",success:"bg-transparent border-success text-success",warning:"bg-transparent border-warning text-warning",danger:"bg-transparent border-danger text-danger",foreground:"bg-transparent border-foreground text-foreground"},flat:{default:"bg-default/40 text-default-foreground",primary:"bg-primary/20 text-primary",secondary:"bg-secondary/20 text-secondary",success:"bg-success/20 text-success-600 dark:text-success",warning:"bg-warning/20 text-warning-600 dark:text-warning",danger:"bg-danger/20 text-danger dark:text-danger-500",foreground:"bg-foreground/10 text-foreground"}},l=["0","xs","sm","md","lg","xl","2xl","3xl","4xl","5xl","6xl","7xl","8xl","9xl","1","2","3","3.5","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","20","24","28","32","36","40","44","48","52","56","60","64","72","80","96"].map(e=>`unit-${e}`),u=n(68876),c=["small","medium","large"],f=(r={slots:{base:"inline-flex items-center justify-between h-fit rounded-large gap-2",pre:"bg-transparent text-inherit font-mono font-normal inline-block whitespace-nowrap",content:"flex flex-col",symbol:"select-none",copyButton:["group","relative","z-10","text-large","text-inherit","data-[hover=true]:bg-transparent"],copyIcon:["absolute text-inherit opacity-100 scale-100 group-data-[copied=true]:opacity-0 group-data-[copied=true]:scale-50"],checkIcon:["absolute text-inherit opacity-0 scale-50 group-data-[copied=true]:opacity-100 group-data-[copied=true]:scale-100"]},variants:{variant:{flat:"",solid:"",bordered:"border-medium bg-transparent",shadow:""},color:{default:{},primary:{},secondary:{},success:{},warning:{},danger:{}},size:{sm:{base:"px-1.5 py-0.5 text-tiny rounded-small"},md:{base:"px-3 py-1.5 text-small rounded-medium"},lg:{base:"px-4 py-2 text-medium rounded-large"}},radius:{none:{base:"rounded-none"},sm:{base:"rounded-small"},md:{base:"rounded-medium"},lg:{base:"rounded-large"}},fullWidth:{true:{base:"w-full"}},disableAnimation:{true:{},false:{copyIcon:"transition-transform-opacity",checkIcon:"transition-transform-opacity"}}},defaultVariants:{color:"default",variant:"flat",size:"md",fullWidth:!1,disableAnimation:!1},compoundVariants:[{variant:["solid","shadow"],color:"default",class:{copyButton:"data-[focus-visible]:outline-default-foreground"}},{variant:["solid","shadow"],color:"primary",class:{copyButton:"data-[focus-visible]:outline-primary-foreground"}},{variant:["solid","shadow"],color:"secondary",class:{copyButton:"data-[focus-visible]:outline-secondary-foreground"}},{variant:["solid","shadow"],color:"success",class:{copyButton:"data-[focus-visible]:outline-success-foreground"}},{variant:["solid","shadow"],color:"warning",class:{copyButton:"data-[focus-visible]:outline-warning-foreground"}},{variant:["solid","shadow"],color:"danger",class:{copyButton:"data-[focus-visible]:outline-danger-foreground"}},{variant:"flat",color:"default",class:{base:d.flat.default}},{variant:"flat",color:"primary",class:{base:d.flat.primary}},{variant:"flat",color:"secondary",class:{base:d.flat.secondary}},{variant:"flat",color:"success",class:{base:d.flat.success}},{variant:"flat",color:"warning",class:{base:d.flat.warning}},{variant:"flat",color:"danger",class:{base:d.flat.danger}},{variant:"solid",color:"default",class:{base:d.solid.default}},{variant:"solid",color:"primary",class:{base:d.solid.primary}},{variant:"solid",color:"secondary",class:{base:d.solid.secondary}},{variant:"solid",color:"success",class:{base:d.solid.success}},{variant:"solid",color:"warning",class:{base:d.solid.warning}},{variant:"solid",color:"danger",class:{base:d.solid.danger}},{variant:"shadow",color:"default",class:{base:d.shadow.default}},{variant:"shadow",color:"primary",class:{base:d.shadow.primary}},{variant:"shadow",color:"secondary",class:{base:d.shadow.secondary}},{variant:"shadow",color:"success",class:{base:d.shadow.success}},{variant:"shadow",color:"warning",class:{base:d.shadow.warning}},{variant:"shadow",color:"danger",class:{base:d.shadow.danger}},{variant:"bordered",color:"default",class:{base:d.bordered.default}},{variant:"bordered",color:"primary",class:{base:d.bordered.primary}},{variant:"bordered",color:"secondary",class:{base:d.bordered.secondary}},{variant:"bordered",color:"success",class:{base:d.bordered.success}},{variant:"bordered",color:"warning",class:{base:d.bordered.warning}},{variant:"bordered",color:"danger",class:{base:d.bordered.danger}}]},(0,u.tv)(r,{...o,twMerge:null==(a=null==o?void 0:o.twMerge)||a,twMergeConfig:{...null==o?void 0:o.twMergeConfig,theme:{...null==(s=null==o?void 0:o.twMergeConfig)?void 0:s.theme,opacity:["disabled"],spacing:["divider","unit",...l],borderWidth:c,borderRadius:c},classGroups:{...null==(i=null==o?void 0:o.twMergeConfig)?void 0:i.classGroups,shadow:[{shadow:c}],"font-size":[{text:["tiny",...c]}],"bg-image":["bg-stripe-gradient"],"min-w":[{"min-w":["unit",...l]}],"min-h":[{"min-h":["unit",...l]}]}}})),p=n(34480),g=n(25312),v=n(19815),b=n(59762),m=n(48794),h=n(2265);let y="undefined"!=typeof document?h.useLayoutEffect:()=>{};"undefined"!=typeof window&&window.document&&window.document.createElement;let w=e=>{var t;return null!==(t=null==e?void 0:e.ownerDocument)&&void 0!==t?t:document},x=e=>{if(e&&"window"in e&&e.window===e)return e;let t=w(e);return t.defaultView||window},E=new Map,k=new Set;function L(){if("undefined"==typeof window)return;function e(e){return"propertyName"in e}let t=n=>{if(!e(n)||!n.target)return;let r=E.get(n.target);if(r&&(r.delete(n.propertyName),0===r.size&&(n.target.removeEventListener("transitioncancel",t),E.delete(n.target)),0===E.size)){for(let e of k)e();k.clear()}};document.body.addEventListener("transitionrun",n=>{if(!e(n)||!n.target)return;let r=E.get(n.target);r||(r=new Set,E.set(n.target,r),n.target.addEventListener("transitioncancel",t,{once:!0})),r.add(n.propertyName)}),document.body.addEventListener("transitionend",t)}"undefined"!=typeof document&&("loading"!==document.readyState?L():document.addEventListener("DOMContentLoaded",L)),"undefined"!=typeof document&&window.visualViewport,new WeakMap;let T=h.createContext({register:()=>{}});T.displayName="PressResponderContext";Symbol("linkClicked");let C=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);class M{isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}constructor(e,t){this.nativeEvent=t,this.target=t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget,this.bubbles=t.bubbles,this.cancelable=t.cancelable,this.defaultPrevented=t.defaultPrevented,this.eventPhase=t.eventPhase,this.isTrusted=t.isTrusted,this.timeStamp=t.timeStamp,this.type=e}}function F(e){let t=(0,h.useRef)({isFocused:!1,observer:null});y(()=>{let e=t.current;return()=>{e.observer&&(e.observer.disconnect(),e.observer=null)}},[]);let n=function(e){let t=(0,h.useRef)(null);return y(()=>{t.current=e},[e]),(0,h.useCallback)((...e)=>{let n=t.current;return null==n?void 0:n(...e)},[])}(t=>{null==e||e(t)});return(0,h.useCallback)(e=>{if(e.target instanceof HTMLButtonElement||e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement||e.target instanceof HTMLSelectElement){t.current.isFocused=!0;let r=e.target;r.addEventListener("focusout",e=>{t.current.isFocused=!1,r.disabled&&n(new M("blur",e)),t.current.observer&&(t.current.observer.disconnect(),t.current.observer=null)},{once:!0}),t.current.observer=new MutationObserver(()=>{if(t.current.isFocused&&r.disabled){var e;null===(e=t.current.observer)||void 0===e||e.disconnect();let n=r===document.activeElement?null:document.activeElement;r.dispatchEvent(new FocusEvent("blur",{relatedTarget:n})),r.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:n}))}}),t.current.observer.observe(r,{attributes:!0,attributeFilter:["disabled"]})}},[n])}let R=null,j=new Set,P=new Map,S=!1,N=!1,B={Tab:!0,Escape:!0};function W(e,t){for(let n of j)n(e,t)}function D(e){var t,n;S=!0,e.metaKey||(t=/^Mac/i,!("undefined"!=typeof window&&null!=window.navigator&&t.test((null===(n=window.navigator.userAgentData)||void 0===n?void 0:n.platform)||window.navigator.platform))&&e.altKey)||e.ctrlKey||"Control"===e.key||"Shift"===e.key||"Meta"===e.key||(R="keyboard",W("keyboard",e))}function A(e){R="pointer",("mousedown"===e.type||"pointerdown"===e.type)&&(S=!0,W("pointer",e))}function H(e){var t,n;(0===e.mozInputSource&&e.isTrusted||((t=/Android/i,"undefined"!=typeof window&&null!=window.navigator&&((null===(n=window.navigator.userAgentData)||void 0===n?void 0:n.brands.some(e=>t.test(e.brand)))||t.test(window.navigator.userAgent))&&e.pointerType)?"click"===e.type&&1===e.buttons:0===e.detail&&!e.pointerType))&&(S=!0,R="virtual")}function I(e){e.target!==window&&e.target!==document&&(S||N||(R="virtual",W("virtual",e)),S=!1,N=!1)}function z(){S=!1,N=!0}function V(e){if("undefined"==typeof window||P.get(x(e)))return;let t=x(e),n=w(e),r=t.HTMLElement.prototype.focus;t.HTMLElement.prototype.focus=function(){S=!0,r.apply(this,arguments)},n.addEventListener("keydown",D,!0),n.addEventListener("keyup",D,!0),n.addEventListener("click",H,!0),t.addEventListener("focus",I,!0),t.addEventListener("blur",z,!1),"undefined"!=typeof PointerEvent?(n.addEventListener("pointerdown",A,!0),n.addEventListener("pointermove",A,!0),n.addEventListener("pointerup",A,!0)):(n.addEventListener("mousedown",A,!0),n.addEventListener("mousemove",A,!0),n.addEventListener("mouseup",A,!0)),t.addEventListener("beforeunload",()=>{O(e)},{once:!0}),P.set(t,{focus:r})}let O=(e,t)=>{let n=x(e),r=w(e);t&&r.removeEventListener("DOMContentLoaded",t),P.has(n)&&(n.HTMLElement.prototype.focus=P.get(n).focus,r.removeEventListener("keydown",D,!0),r.removeEventListener("keyup",D,!0),r.removeEventListener("click",H,!0),n.removeEventListener("focus",I,!0),n.removeEventListener("blur",z,!1),"undefined"!=typeof PointerEvent?(r.removeEventListener("pointerdown",A,!0),r.removeEventListener("pointermove",A,!0),r.removeEventListener("pointerup",A,!0)):(r.removeEventListener("mousedown",A,!0),r.removeEventListener("mousemove",A,!0),r.removeEventListener("mouseup",A,!0)),P.delete(n))};function K(){return"pointer"!==R}"undefined"!=typeof document&&function(e){let t;let n=w(e);"loading"!==n.readyState?V(e):(t=()=>{V(e)},n.addEventListener("DOMContentLoaded",t)),()=>O(e,t)}();let $=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]),_=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]"];_.join(":not([hidden]),"),_.push('[tabindex]:not([tabindex="-1"]):not([disabled])'),_.join(':not([hidden]):not([tabindex="-1"]),');class G{get size(){return this.fastMap.size}getTreeNode(e){return this.fastMap.get(e)}addTreeNode(e,t,n){let r=this.fastMap.get(null!=t?t:null);if(!r)return;let o=new Z({scopeRef:e});r.addChild(o),o.parent=r,this.fastMap.set(e,o),n&&(o.nodeToRestore=n)}addNode(e){this.fastMap.set(e.scopeRef,e)}removeTreeNode(e){if(null===e)return;let t=this.fastMap.get(e);if(!t)return;let n=t.parent;for(let e of this.traverse())e!==t&&t.nodeToRestore&&e.nodeToRestore&&t.scopeRef&&t.scopeRef.current&&function(e,t){return!!e&&!!t&&t.some(t=>t.contains(e))}(e.nodeToRestore,t.scopeRef.current)&&(e.nodeToRestore=t.nodeToRestore);let r=t.children;n&&(n.removeChild(t),r.size>0&&r.forEach(e=>n&&n.addChild(e))),this.fastMap.delete(t.scopeRef)}*traverse(e=this.root){if(null!=e.scopeRef&&(yield e),e.children.size>0)for(let t of e.children)yield*this.traverse(t)}clone(){var e,t;let n=new G;for(let r of this.traverse())n.addTreeNode(r.scopeRef,null!==(t=null===(e=r.parent)||void 0===e?void 0:e.scopeRef)&&void 0!==t?t:null,r.nodeToRestore);return n}constructor(){this.fastMap=new Map,this.root=new Z({scopeRef:null}),this.fastMap.set(null,this.root)}}class Z{addChild(e){this.children.add(e),e.parent=this}removeChild(e){this.children.delete(e),e.parent=void 0}constructor(e){this.children=new Set,this.contain=!1,this.scopeRef=e.scopeRef}}new G;var U=n(91162),q=n(57437),J=e=>(0,q.jsxs)("svg",{"aria-hidden":"true",fill:"none",focusable:"false",height:"1em",role:"presentation",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",viewBox:"0 0 24 24",width:"1em",...e,children:[(0,q.jsx)("path",{d:"M16 17.1c0 3.5-1.4 4.9-4.9 4.9H6.9C3.4 22 2 20.6 2 17.1v-4.2C2 9.4 3.4 8 6.9 8h4.2c3.5 0 4.9 1.4 4.9 4.9Z"}),(0,q.jsx)("path",{d:"M8 8V6.9C8 3.4 9.4 2 12.9 2h4.2C20.6 2 22 3.4 22 6.9v4.2c0 3.5-1.4 4.9-4.9 4.9H16"}),(0,q.jsx)("path",{d:"M16 12.9C16 9.4 14.6 8 11.1 8"})]}),Q=e=>(0,q.jsx)("svg",{"aria-hidden":"true",fill:"none",focusable:"false",height:"1em",role:"presentation",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,viewBox:"0 0 24 24",width:"1em",...e,children:(0,q.jsx)("polyline",{points:"20 6 9 17 4 12"})}),X=n(19505),Y=(0,p.Gp)((e,t)=>{let{Component:n,domRef:r,preRef:o,children:a,slots:s,classNames:i,copied:d,copyIcon:l=(0,q.jsx)(J,{}),checkIcon:u=(0,q.jsx)(Q,{}),symbolBefore:c,disableCopy:y,disableTooltip:w,hideSymbol:E,hideCopyButton:k,tooltipProps:L,isMultiLine:T,onCopy:C,getSnippetProps:M,getCopyButtonProps:R}=function(e){var t,n;let[r,o]=(0,p.oe)(e,f.variantKeys),{ref:a,as:s,children:i,symbol:d="$",classNames:l,timeout:u,copyIcon:c,checkIcon:y,codeString:w,disableCopy:E=!1,disableTooltip:k=!1,hideCopyButton:L=!1,autoFocus:T=!1,hideSymbol:C=!1,onCopy:M,tooltipProps:R={},copyButtonProps:P={},className:S,...N}=r,W=s||"div",D="string"==typeof W,A={offset:15,delay:1e3,content:"Copy to clipboard",color:null!=(n=null==e?void 0:e.color)?n:null==(t=f.defaultVariants)?void 0:t.color,isDisabled:r.disableCopy,...R},H=(0,g.gy)(a),I=(0,h.useRef)(null),{copy:z,copied:O}=function({timeout:e=2e3}={}){let[t,n]=(0,h.useState)(null),[r,o]=(0,h.useState)(!1),[a,s]=(0,h.useState)(null),i=()=>{a&&clearTimeout(a)},d=t=>{i(),s(setTimeout(()=>o(!1),e)),o(t)};return{copy:e=>{"clipboard"in navigator?navigator.clipboard.writeText(e).then(()=>d(!0)).catch(e=>n(e)):n(Error("useClipboard: navigator.clipboard is not supported"))},reset:()=>{o(!1),n(null),i()},error:t,copied:r}}({timeout:u}),_=i&&Array.isArray(i),{isFocusVisible:G,isFocused:Z,focusProps:U}=function(e={}){var t,n;let{autoFocus:r=!1,isTextInput:o,within:a}=e,s=(0,h.useRef)({isFocused:!1,isFocusVisible:r||K()}),[i,d]=(0,h.useState)(!1),[l,u]=(0,h.useState)(()=>s.current.isFocused&&s.current.isFocusVisible),c=(0,h.useCallback)(()=>u(s.current.isFocused&&s.current.isFocusVisible),[]),f=(0,h.useCallback)(e=>{s.current.isFocused=e,d(e),c()},[c]);t=e=>{s.current.isFocusVisible=e,c()},n={isTextInput:o},V(),(0,h.useEffect)(()=>{let e=(e,r)=>{(function(e,t,n){var r;let o="undefined"!=typeof window?x(null==n?void 0:n.target).HTMLInputElement:HTMLInputElement,a="undefined"!=typeof window?x(null==n?void 0:n.target).HTMLTextAreaElement:HTMLTextAreaElement,s="undefined"!=typeof window?x(null==n?void 0:n.target).HTMLElement:HTMLElement,i="undefined"!=typeof window?x(null==n?void 0:n.target).KeyboardEvent:KeyboardEvent;return!((e=e||(null==n?void 0:n.target)instanceof o&&!$.has(null==n?void 0:null===(r=n.target)||void 0===r?void 0:r.type)||(null==n?void 0:n.target)instanceof a||(null==n?void 0:n.target)instanceof s&&(null==n?void 0:n.target.isContentEditable))&&"keyboard"===t&&n instanceof i&&!B[n.key])})(!!(null==n?void 0:n.isTextInput),e,r)&&t(K())};return j.add(e),()=>{j.delete(e)}},[]);let{focusProps:p}=function(e){let{isDisabled:t,onFocus:n,onBlur:r,onFocusChange:o}=e,a=(0,h.useCallback)(e=>{if(e.target===e.currentTarget)return r&&r(e),o&&o(!1),!0},[r,o]),s=F(a),i=(0,h.useCallback)(e=>{e.target===e.currentTarget&&document.activeElement===e.target&&(n&&n(e),o&&o(!0),s(e))},[o,n,s]);return{focusProps:{onFocus:!t&&(n||o||r)?i:void 0,onBlur:!t&&(r||o)?a:void 0}}}({isDisabled:a,onFocusChange:f}),{focusWithinProps:g}=function(e){let{isDisabled:t,onBlurWithin:n,onFocusWithin:r,onFocusWithinChange:o}=e,a=(0,h.useRef)({isFocusWithin:!1}),s=(0,h.useCallback)(e=>{a.current.isFocusWithin&&!e.currentTarget.contains(e.relatedTarget)&&(a.current.isFocusWithin=!1,n&&n(e),o&&o(!1))},[n,o,a]),i=F(s),d=(0,h.useCallback)(e=>{a.current.isFocusWithin||document.activeElement!==e.target||(r&&r(e),o&&o(!0),a.current.isFocusWithin=!0,i(e))},[r,o,i]);return t?{focusWithinProps:{onFocus:void 0,onBlur:void 0}}:{focusWithinProps:{onFocus:d,onBlur:s}}}({isDisabled:!a,onFocusWithinChange:f});return{isFocused:i,isFocusVisible:l,focusProps:a?g:p}}({autoFocus:T}),q=(0,h.useMemo)(()=>f({...o}),[...Object.values(o)]),J=(0,h.useMemo)(()=>{if(!d||"string"!=typeof d)return d;let e=d.trim();return e?`${e} `:""},[d]),Q=(0,b.W)(null==l?void 0:l.base,S),X=(0,h.useCallback)(()=>({className:q.base({class:Q}),...(0,v.z)(N,{enabled:D})}),[q,Q,_,N]),Y=(0,h.useCallback)(()=>{var e;if(E)return;let t="";"string"==typeof i?t=i:Array.isArray(i)&&i.forEach(e=>{var n,r;let o="string"==typeof e?e:null==(r=null==(n=null==e?void 0:e.props)?void 0:n.children)?void 0:r.toString();o&&(t+=o+"\n")});let n=w||t||(null==(e=I.current)?void 0:e.textContent)||"";z(n),null==M||M(n)},[z,w,E,M,i]),ee={"aria-label":"string"==typeof A.content?A.content:"Copy to clipboard",size:"sm",variant:"light",isDisabled:E,onPress:Y,isIconOnly:!0,...P},et=(0,h.useCallback)(()=>({...ee,"data-copied":(0,m.PB)(O),className:q.copyButton({class:(0,b.W)(null==l?void 0:l.copyButton)})}),[q,G,Z,E,null==l?void 0:l.copyButton,ee,U]);return{Component:W,as:s,domRef:H,preRef:I,children:i,slots:q,classNames:l,copied:O,onCopy:Y,copyIcon:c,checkIcon:y,symbolBefore:J,isMultiLine:_,isFocusVisible:G,hideCopyButton:L,disableCopy:E,disableTooltip:k,hideSymbol:C,tooltipProps:A,getSnippetProps:X,getCopyButtonProps:et}}({...e,ref:t}),P=(0,h.useCallback)(({children:e})=>(0,q.jsx)(U.e,{...L,isDisabled:d||L.isDisabled,children:e}),[...Object.values(L)]),S=(0,h.useMemo)(()=>{if(k)return null;let e=u&&(0,h.cloneElement)(u,{className:s.checkIcon()}),t=l&&(0,h.cloneElement)(l,{className:s.copyIcon()}),n=(0,q.jsxs)(X.A,{...R(),children:[e,t]});return w?n:(0,q.jsx)(P,{children:n})},[s,null==i?void 0:i.copyButton,d,u,l,C,P,y,w,k]),N=(0,h.useMemo)(()=>T&&a&&Array.isArray(a)?(0,q.jsx)("div",{className:s.content({class:null==i?void 0:i.content}),children:a.map((e,t)=>(0,q.jsxs)("pre",{className:s.pre({class:null==i?void 0:i.pre}),children:[!E&&(0,q.jsx)("span",{className:s.symbol({class:null==i?void 0:i.symbol}),children:c}),e]},`${t}-${e}`))}):(0,q.jsxs)("pre",{ref:o,className:s.pre({class:null==i?void 0:i.pre}),children:[!E&&(0,q.jsx)("span",{className:s.symbol({class:null==i?void 0:i.symbol}),children:c}),a]}),[a,E,T,c,null==i?void 0:i.pre,s]);return(0,q.jsxs)(n,{ref:r,...M(),children:[N,S]})});Y.displayName="NextUI.Snippet";var ee=Y}}]);