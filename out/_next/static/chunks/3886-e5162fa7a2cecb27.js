"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3886],{14492:function(e,r,t){t.d(r,{h:function(){return T}});var n=t(57437),a=()=>(0,n.jsxs)("svg",{"aria-hidden":"true",fill:"none",height:"80%",role:"presentation",viewBox:"0 0 24 24",width:"80%",children:[(0,n.jsx)("path",{d:"M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z",fill:"currentColor"}),(0,n.jsx)("path",{d:"M17.0809 14.1489C14.2909 12.2889 9.74094 12.2889 6.93094 14.1489C5.66094 14.9989 4.96094 16.1489 4.96094 17.3789C4.96094 18.6089 5.66094 19.7489 6.92094 20.5889C8.32094 21.5289 10.1609 21.9989 12.0009 21.9989C13.8409 21.9989 15.6809 21.5289 17.0809 20.5889C18.3409 19.7389 19.0409 18.5989 19.0409 17.3589C19.0309 16.1289 18.3409 14.9889 17.0809 14.1489Z",fill:"currentColor"})]}),[o,l]=(0,t(37561).k)({name:"AvatarGroupContext",strict:!1}),i=t(22226),s=t(2068),d=t(21616),u=(0,s.tv)({slots:{base:["flex","relative","justify-center","items-center","box-border","overflow-hidden","align-middle","text-white","z-0",...d.Dh],img:["flex","object-cover","w-full","h-full","transition-opacity","!duration-500","opacity-0","data-[loaded=true]:opacity-100"],fallback:[...d.z6,"flex","items-center","justify-center"],name:[...d.z6,"font-normal","text-center","text-inherit"],icon:[...d.z6,"flex","items-center","justify-center","text-inherit","w-full","h-full"]},variants:{size:{sm:{base:"w-8 h-8 text-tiny"},md:{base:"w-10 h-10 text-tiny"},lg:{base:"w-14 h-14 text-small"}},color:{default:{base:i.J.solid.default},primary:{base:i.J.solid.primary},secondary:{base:i.J.solid.secondary},success:{base:i.J.solid.success},warning:{base:i.J.solid.warning},danger:{base:i.J.solid.danger}},radius:{none:{base:"rounded-none"},sm:{base:"rounded-small"},md:{base:"rounded-medium"},lg:{base:"rounded-large"},full:{base:"rounded-full"}},isBordered:{true:{base:"ring-2 ring-offset-2 ring-offset-background dark:ring-offset-background-dark"}},isDisabled:{true:{base:"opacity-disabled"}},isInGroup:{true:{base:["-ms-2 data-[hover=true]:-translate-x-3 rtl:data-[hover=true]:translate-x-3 transition-transform","data-[focus-visible=true]:-translate-x-3 rtl:data-[focus-visible=true]:translate-x-3"]}},isInGridGroup:{true:{base:"m-0 data-[hover=true]:translate-x-0"}},disableAnimation:{true:{base:"transition-none",img:"transition-none"},false:{}}},defaultVariants:{size:"md",color:"default",radius:"full"},compoundVariants:[{color:"default",isBordered:!0,class:{base:"ring-default"}},{color:"primary",isBordered:!0,class:{base:"ring-primary"}},{color:"secondary",isBordered:!0,class:{base:"ring-secondary"}},{color:"success",isBordered:!0,class:{base:"ring-success"}},{color:"warning",isBordered:!0,class:{base:"ring-warning"}},{color:"danger",isBordered:!0,class:{base:"ring-danger"}}]});(0,s.tv)({slots:{base:"flex items-center justify-center h-auto w-max",count:"hover:-translate-x-0"},variants:{isGrid:{true:"inline-grid grid-cols-4 gap-3"}}});var c=t(12094),m=t(2265);"undefined"!=typeof window&&window.document&&window.document.createElement;let f=new Map;var g=t(44839);function p(...e){let r={...e[0]};for(let t=1;t<e.length;t++){let n=e[t];for(let e in n){let t=r[e],a=n[e];"function"==typeof t&&"function"==typeof a&&"o"===e[0]&&"n"===e[1]&&e.charCodeAt(2)>=65&&90>=e.charCodeAt(2)?r[e]=function(...e){return(...r)=>{for(let t of e)"function"==typeof t&&t(...r)}}(t,a):("className"===e||"UNSAFE_className"===e)&&"string"==typeof t&&"string"==typeof a?r[e]=(0,g.Z)(t,a):"id"===e&&t&&a?r.id=function(e,r){if(e===r)return e;let t=f.get(e);if(t)return t(r),r;let n=f.get(r);return n?(n(e),e):r}(t,a):r[e]=void 0!==a?a:t}}return r}var v=t(26242),b=t(75300),h=t(31887),w=t(65263),y=t(53640),x=t(42937),k=t(25137);let C=!1,E=0;function j(){C=!0,setTimeout(()=>{C=!1},50)}function z(e){"touch"===e.pointerType&&j()}function N(){if("undefined"!=typeof document)return"undefined"!=typeof PointerEvent?document.addEventListener("pointerup",z):document.addEventListener("touchend",j),E++,()=>{--E>0||("undefined"!=typeof PointerEvent?document.removeEventListener("pointerup",z):document.removeEventListener("touchend",j))}}var I=(0,t(62957).Gp)((e,r)=>{let{Component:t,ImgComponent:o,src:i,icon:s=(0,n.jsx)(a,{}),alt:d,classNames:f,slots:g,name:E,showFallback:j,fallback:z,getInitials:I,getAvatarProps:T,getImageProps:B}=function(){var e,r,t,n,a,o,i;let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},d=(0,c.w)(),f=l(),g=!!f,{as:E,ref:j,src:z,name:I,icon:T,classNames:B,fallback:M,alt:P=I||"avatar",imgRef:W,color:A=null!=(e=null==f?void 0:f.color)?e:"default",radius:G=null!=(r=null==f?void 0:f.radius)?r:"full",size:H=null!=(t=null==f?void 0:f.size)?t:"md",isBordered:S=null!=(n=null==f?void 0:f.isBordered)&&n,isDisabled:J=null!=(a=null==f?void 0:f.isDisabled)&&a,isFocusable:L=!1,getInitials:_=h.e,ignoreFallback:Z=!1,showFallback:D=!1,ImgComponent:F="img",imgProps:V,className:R,onError:U,...K}=s,O=E||"span",X=(0,v.gy)(j),q=(0,v.gy)(W),{isFocusVisible:Q,isFocused:Y,focusProps:$}=(0,x.F)(),{isHovered:ee,hoverProps:er}=function(e){let{onHoverStart:r,onHoverChange:t,onHoverEnd:n,isDisabled:a}=e,[o,l]=(0,m.useState)(!1),i=(0,m.useRef)({isHovered:!1,ignoreEmulatedMouseEvents:!1,pointerType:"",target:null}).current;(0,m.useEffect)(N,[]);let{hoverProps:s,triggerHoverEnd:d}=(0,m.useMemo)(()=>{let e=(e,n)=>{if(i.pointerType=n,a||"touch"===n||i.isHovered||!e.currentTarget.contains(e.target))return;i.isHovered=!0;let o=e.currentTarget;i.target=o,r&&r({type:"hoverstart",target:o,pointerType:n}),t&&t(!0),l(!0)},o=(e,r)=>{if(i.pointerType="",i.target=null,"touch"===r||!i.isHovered)return;i.isHovered=!1;let a=e.currentTarget;n&&n({type:"hoverend",target:a,pointerType:r}),t&&t(!1),l(!1)},s={};return"undefined"!=typeof PointerEvent?(s.onPointerEnter=r=>{C&&"mouse"===r.pointerType||e(r,r.pointerType)},s.onPointerLeave=e=>{!a&&e.currentTarget.contains(e.target)&&o(e,e.pointerType)}):(s.onTouchStart=()=>{i.ignoreEmulatedMouseEvents=!0},s.onMouseEnter=r=>{i.ignoreEmulatedMouseEvents||C||e(r,"mouse"),i.ignoreEmulatedMouseEvents=!1},s.onMouseLeave=e=>{!a&&e.currentTarget.contains(e.target)&&o(e,"mouse")}),{hoverProps:s,triggerHoverEnd:o}},[r,t,n,a,i]);return(0,m.useEffect)(()=>{a&&d({currentTarget:i.target},i.pointerType)},[a]),{hoverProps:s,isHovered:o}}({isDisabled:J}),et=null!=(i=null!=(o=s.disableAnimation)?o:null==d?void 0:d.disableAnimation)&&i,en="loaded"===(0,k.d)({src:z,onError:U,ignoreFallback:Z}),ea="string"==typeof F,eo=(!z||!en)&&D,el=(0,m.useMemo)(()=>{var e;return u({color:A,radius:G,size:H,isBordered:S,isDisabled:J,isInGroup:g,disableAnimation:et,isInGridGroup:null!=(e=null==f?void 0:f.isGrid)&&e})},[A,G,H,S,J,et,g,null==f?void 0:f.isGrid]),ei=(0,w.W)(null==B?void 0:B.base,R),es=(0,m.useMemo)(()=>L||"button"===E,[L,E]),ed=(0,m.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{ref:X,tabIndex:es?0:-1,"data-hover":(0,y.PB)(ee),"data-focus":(0,y.PB)(Y),"data-focus-visible":(0,y.PB)(Q),className:el.base({class:(0,w.W)(ei,null==e?void 0:e.className)}),...p(K,er,es?$:{})}},[es,el,ei,$,K]),eu=(0,m.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{ref:q,src:z,"data-loaded":(0,y.PB)(en),className:el.img({class:null==B?void 0:B.img}),...p(V,e,(0,b.z)({disableAnimation:et},{enabled:ea}))}},[el,en,V,et,z,q,ea]);return{Component:O,ImgComponent:F,src:z,alt:P,icon:T,name:I,imgRef:q,slots:el,classNames:B,fallback:M,isImgLoaded:en,showFallback:eo,ignoreFallback:Z,getInitials:_,getAvatarProps:ed,getImageProps:eu}}({...e,ref:r}),M=(0,m.useMemo)(()=>!j&&i?null:z?(0,n.jsx)("div",{"aria-label":d,className:g.fallback({class:null==f?void 0:f.fallback}),role:"img",children:z}):E?(0,n.jsx)("span",{"aria-label":d,className:g.name({class:null==f?void 0:f.name}),role:"img",children:I(E)}):(0,n.jsx)("span",{"aria-label":d,className:g.icon({class:null==f?void 0:f.icon}),role:"img",children:s}),[j,i,z,E,f]);return(0,n.jsxs)(t,{...T(),children:[i&&(0,n.jsx)(o,{...B(),alt:d}),M]})});I.displayName="NextUI.Avatar";var T=I},86778:function(e,r,t){t.d(r,{J:function(){return g}});var n=t(2265),a=t(12094),o=t(62957),l=(0,t(2068).tv)({slots:{wrapper:"relative shadow-black/5",zoomedWrapper:"relative overflow-hidden rounded-inherit",img:"relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100",blurredImg:["absolute","z-0","inset-0","w-full","h-full","object-cover","filter","blur-lg","scale-105","saturate-150","opacity-30","translate-y-1"]},variants:{radius:{none:{},sm:{},md:{},lg:{},full:{}},shadow:{none:{wrapper:"shadow-none",img:"shadow-none"},sm:{wrapper:"shadow-small",img:"shadow-small"},md:{wrapper:"shadow-medium",img:"shadow-medium"},lg:{wrapper:"shadow-large",img:"shadow-large"}},isZoomed:{true:{img:["object-cover","transform","hover:scale-125"]}},showSkeleton:{true:{wrapper:["group","relative","overflow-hidden","bg-content3 dark:bg-content2"],img:"opacity-0"}},disableAnimation:{true:{img:"transition-none"},false:{img:"transition-transform-opacity motion-reduce:transition-none !duration-300"}}},defaultVariants:{radius:"lg",shadow:"none",isZoomed:!1,isBlurred:!1,showSkeleton:!1},compoundVariants:[{showSkeleton:!0,disableAnimation:!1,class:{wrapper:["before:opacity-100","before:absolute","before:inset-0","before:-translate-x-full","before:animate-[shimmer_2s_infinite]","before:border-t","before:border-content4/30","before:bg-gradient-to-r","before:from-transparent","before:via-content4","dark:before:via-default-700/10","before:to-transparent","after:opacity-100","after:absolute","after:inset-0","after:-z-10","after:bg-content3","dark:after:bg-content2"]}}],compoundSlots:[{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"none",class:"rounded-none"},{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"full",class:"rounded-full"},{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"sm",class:"rounded-small"},{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"md",class:"rounded-md"},{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"lg",class:"rounded-large"}]}),i=t(26242),s=t(36222),d=t(65263),u=t(53640),c=t(25137),m=t(57437),f=(0,o.Gp)((e,r)=>{let{Component:t,domRef:f,slots:g,classNames:p,isBlurred:v,isZoomed:b,fallbackSrc:h,removeWrapper:w,disableSkeleton:y,getImgProps:x,getWrapperProps:k,getBlurredImgProps:C}=function(e){var r,t;let m=(0,a.w)(),[f,g]=(0,o.oe)(e,l.variantKeys),{ref:p,as:v,src:b,className:h,classNames:w,loading:y,isBlurred:x,fallbackSrc:k,isLoading:C,disableSkeleton:E=!!k,removeWrapper:j=!1,onError:z,onLoad:N,srcSet:I,sizes:T,crossOrigin:B,...M}=f,P=(0,c.d)({src:b,loading:y,onError:z,onLoad:N,ignoreFallback:!1,srcSet:I,sizes:T,crossOrigin:B}),W=null!=(t=null!=(r=e.disableAnimation)?r:null==m?void 0:m.disableAnimation)&&t,A="loaded"===P&&!C,G="loading"===P||C,H=e.isZoomed,S=(0,i.gy)(p),{w:J,h:L}=(0,n.useMemo)(()=>({w:f.width?"number"==typeof f.width?"".concat(f.width,"px"):f.width:"fit-content",h:f.height?"number"==typeof f.height?"".concat(f.height,"px"):f.height:"auto"}),[null==f?void 0:f.width,null==f?void 0:f.height]),_=(!b||!A)&&!!k,Z=G&&!E,D=(0,n.useMemo)(()=>l({...g,disableAnimation:W,showSkeleton:Z}),[(0,s.Xx)(g),W,Z]),F=(0,d.W)(h,null==w?void 0:w.img),V=(0,n.useCallback)(()=>{let e=_?{backgroundImage:"url(".concat(k,")")}:{};return{className:D.wrapper({class:null==w?void 0:w.wrapper}),style:{...e,maxWidth:J}}},[D,_,k,null==w?void 0:w.wrapper]),R=(0,n.useCallback)(()=>({src:b,"aria-hidden":(0,u.PB)(!0),className:D.blurredImg({class:null==w?void 0:w.blurredImg})}),[D,b,null==w?void 0:w.blurredImg]);return{Component:v||"img",domRef:S,slots:D,classNames:w,isBlurred:x,disableSkeleton:E,fallbackSrc:k,removeWrapper:j,isZoomed:H,isLoading:G,getImgProps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=(0,d.W)(F,null==e?void 0:e.className);return{src:b,ref:S,"data-loaded":(0,u.PB)(A),className:D.img({class:r}),loading:y,srcSet:I,sizes:T,crossOrigin:B,...M,style:{...(null==M?void 0:M.height)&&{height:L},...e.style,...M.style}}},getWrapperProps:V,getBlurredImgProps:R}}({...e,ref:r}),E=(0,m.jsx)(t,{ref:f,...x()});if(w)return E;let j=(0,m.jsx)("div",{className:g.zoomedWrapper({class:null==p?void 0:p.zoomedWrapper}),children:E});return v?(0,m.jsxs)("div",{...k(),children:[b?j:E,(0,n.cloneElement)(E,C())]}):b||!y||h?(0,m.jsxs)("div",{...k(),children:[" ",b?j:E]}):E});f.displayName="NextUI.Image";var g=f},25137:function(e,r,t){t.d(r,{d:function(){return o}});var n=t(2265),a=t(46896);function o(e={}){let{loading:r,src:t,srcSet:o,onLoad:l,onError:i,crossOrigin:s,sizes:d,ignoreFallback:u}=e,[c,m]=(0,n.useState)("pending");(0,n.useEffect)(()=>{m(t?"loading":"pending")},[t]);let f=(0,n.useRef)(),g=(0,n.useCallback)(()=>{if(!t)return;p();let e=new Image;e.src=t,s&&(e.crossOrigin=s),o&&(e.srcset=o),d&&(e.sizes=d),r&&(e.loading=r),e.onload=e=>{p(),m("loaded"),null==l||l(e)},e.onerror=e=>{p(),m("failed"),null==i||i(e)},f.current=e},[t,s,o,d,l,i,r]),p=()=>{f.current&&(f.current.onload=null,f.current.onerror=null,f.current=null)};return(0,a.G)(()=>{if(!u)return"loading"===c&&g(),()=>{p()}},[c,g,u]),u?"loaded":c}}}]);