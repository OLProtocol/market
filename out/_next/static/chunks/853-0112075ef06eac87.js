"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[853],{42853:function(e,t,r){r.d(t,{ZP:function(){return ee}});var n,i=r(2265),a=r(26272);let u=()=>{},l=u(),o=Object,s=e=>e===l,d=e=>"function"==typeof e,c=(e,t)=>({...e,...t}),f=e=>d(e.then),g=new WeakMap,E=0,h=e=>{let t,r;let n=typeof e,i=e&&e.constructor,a=i==Date;if(o(e)!==e||a||i==RegExp)t=a?e.toJSON():"symbol"==n?e.toString():"string"==n?JSON.stringify(e):""+e;else{if(t=g.get(e))return t;if(t=++E+"~",g.set(e,t),i==Array){for(r=0,t="@";r<e.length;r++)t+=h(e[r])+",";g.set(e,t)}if(i==o){t="#";let n=o.keys(e).sort();for(;!s(r=n.pop());)s(e[r])||(t+=r+":"+h(e[r])+",");g.set(e,t)}}return t},w=new WeakMap,_={},p={},v="undefined",R=typeof window!=v,y=typeof document!=v,T=()=>R&&typeof window.requestAnimationFrame!=v,m=(e,t)=>{let r=w.get(e);return[()=>!s(t)&&e.get(t)||_,n=>{if(!s(t)){let i=e.get(t);t in p||(p[t]=i),r[5](t,c(i,n),i||_)}},r[6],()=>!s(t)&&t in p?p[t]:!s(t)&&e.get(t)||_]},b=!0,[O,V]=R&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[u,u],L={initFocus:e=>(y&&document.addEventListener("visibilitychange",e),O("focus",e),()=>{y&&document.removeEventListener("visibilitychange",e),V("focus",e)}),initReconnect:e=>{let t=()=>{b=!0,e()},r=()=>{b=!1};return O("online",t),O("offline",r),()=>{V("online",t),V("offline",r)}}},S=!i.useId,k=!R||"Deno"in window,C=e=>T()?window.requestAnimationFrame(e):setTimeout(e,1),N=k?i.useEffect:i.useLayoutEffect,D="undefined"!=typeof navigator&&navigator.connection,A=!k&&D&&(["slow-2g","2g"].includes(D.effectiveType)||D.saveData),I=e=>{if(d(e))try{e=e()}catch(t){e=""}let t=e;return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?h(e):"",t]},F=0,P=()=>++F;var M={ERROR_REVALIDATE_EVENT:3,FOCUS_EVENT:0,MUTATE_EVENT:2,RECONNECT_EVENT:1};async function x(...e){let[t,r,n,i]=e,a=c({populateCache:!0,throwOnError:!0},"boolean"==typeof i?{revalidate:i}:i||{}),u=a.populateCache,o=a.rollbackOnError,g=a.optimisticData,E=e=>"function"==typeof o?o(e):!1!==o,h=a.throwOnError;if(d(r)){let e=[],n=t.keys();for(let i of n)!/^\$(inf|sub)\$/.test(i)&&r(t.get(i)._k)&&e.push(i);return Promise.all(e.map(_))}return _(r);async function _(r){let i;let[o]=I(r);if(!o)return;let[c,_]=m(t,o),[p,v,R,y]=w.get(t),T=()=>{let e=p[o],t=d(a.revalidate)?a.revalidate(c().data,r):!1!==a.revalidate;return t&&(delete R[o],delete y[o],e&&e[0])?e[0](2).then(()=>c().data):c().data};if(e.length<3)return T();let b=n,O=P();v[o]=[O,0];let V=!s(g),L=c(),S=L.data,k=L._c,C=s(k)?S:k;if(V&&_({data:g=d(g)?g(C,S):g,_c:C}),d(b))try{b=b(C)}catch(e){i=e}if(b&&f(b)){if(b=await b.catch(e=>{i=e}),O!==v[o][0]){if(i)throw i;return b}i&&V&&E(i)&&(u=!0,_({data:C,_c:l}))}if(u&&!i){if(d(u)){let e=u(b,C);_({data:e,error:l,_c:l})}else _({data:b,error:l,_c:l})}if(v[o][1]=P(),Promise.resolve(T()).then(()=>{_({_c:l})}),i){if(h)throw i;return}return b}}let U=(e,t)=>{for(let r in e)e[r][0]&&e[r][0](t)},W=(e,t)=>{if(!w.has(e)){let r=c(L,t),n={},i=x.bind(l,e),a=u,o={},s=(e,t)=>{let r=o[e]||[];return o[e]=r,r.push(t),()=>r.splice(r.indexOf(t),1)},d=(t,r,n)=>{e.set(t,r);let i=o[t];if(i)for(let e of i)e(r,n)},f=()=>{if(!w.has(e)&&(w.set(e,[n,{},{},{},i,d,s]),!k)){let t=r.initFocus(setTimeout.bind(l,U.bind(l,n,0))),i=r.initReconnect(setTimeout.bind(l,U.bind(l,n,1)));a=()=>{t&&t(),i&&i(),w.delete(e)}}};return f(),[e,i,f,a]}return[e,w.get(e)[4]]},[$,j]=W(new Map),q=c({onLoadingSlow:u,onSuccess:u,onError:u,onErrorRetry:(e,t,r,n,i)=>{let a=r.errorRetryCount,u=i.retryCount,l=~~((Math.random()+.5)*(1<<(u<8?u:8)))*r.errorRetryInterval;(s(a)||!(u>a))&&setTimeout(n,l,i)},onDiscarded:u,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:A?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:A?5e3:3e3,compare:(e,t)=>h(e)==h(t),isPaused:()=>!1,cache:$,mutate:j,fallback:{}},{isOnline:()=>b,isVisible:()=>{let e=y&&document.visibilityState;return s(e)||"hidden"!==e}}),J=(e,t)=>{let r=c(e,t);if(t){let{use:n,fallback:i}=e,{use:a,fallback:u}=t;n&&a&&(r.use=n.concat(a)),i&&u&&(r.fallback=c(i,u))}return r},Z=(0,i.createContext)({}),z=R&&window.__SWR_DEVTOOLS_USE__,B=z?window.__SWR_DEVTOOLS_USE__:[],G=e=>d(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}],H=()=>c(q,(0,i.useContext)(Z)),K=B.concat(e=>(t,r,n)=>{let i=r&&((...e)=>{let[n]=I(t),[,,,i]=w.get($);if(n.startsWith("$inf$"))return r(...e);let a=i[n];return s(a)?r(...e):(delete i[n],a)});return e(t,i,n)}),Q=(e,t,r)=>{let n=t[e]||(t[e]=[]);return n.push(r),()=>{let e=n.indexOf(r);e>=0&&(n[e]=n[n.length-1],n.pop())}};z&&(window.__SWR_DEVTOOLS_REACT__=i);let X=i.use||(e=>{if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;if("rejected"===e.status)throw e.reason;throw e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t}),e}),Y={dedupe:!0};o.defineProperty(e=>{let{value:t}=e,r=(0,i.useContext)(Z),n=d(t),a=(0,i.useMemo)(()=>n?t(r):t,[n,r,t]),u=(0,i.useMemo)(()=>n?a:J(r,a),[n,r,a]),o=a&&a.provider,s=(0,i.useRef)(l);o&&!s.current&&(s.current=W(o(u.cache||$),a));let f=s.current;return f&&(u.cache=f[0],u.mutate=f[1]),N(()=>{if(f)return f[2]&&f[2](),f[3]},[]),(0,i.createElement)(Z.Provider,c(e,{value:u}))},"defaultValue",{value:q});let ee=(n=(e,t,r)=>{let{cache:n,compare:u,suspense:o,fallbackData:f,revalidateOnMount:g,revalidateIfStale:E,refreshInterval:h,refreshWhenHidden:_,refreshWhenOffline:p,keepPreviousData:v}=r,[R,y,T,b]=w.get(n),[O,V]=I(e),L=(0,i.useRef)(!1),D=(0,i.useRef)(!1),A=(0,i.useRef)(O),F=(0,i.useRef)(t),U=(0,i.useRef)(r),W=()=>U.current,$=()=>W().isVisible()&&W().isOnline(),[j,q,J,Z]=m(n,O),z=(0,i.useRef)({}).current,B=s(f)?r.fallback[O]:f,G=(e,t)=>{for(let r in z)if("data"===r){if(!u(e[r],t[r])&&(!s(e[r])||!u(eu,t[r])))return!1}else if(t[r]!==e[r])return!1;return!0},H=(0,i.useMemo)(()=>{let e=!!O&&!!t&&(s(g)?!W().isPaused()&&!o&&(!!s(E)||E):g),r=t=>{let r=c(t);return(delete r._k,e)?{isValidating:!0,isLoading:!0,...r}:r},n=j(),i=Z(),a=r(n),u=n===i?a:r(i),l=a;return[()=>{let e=r(j()),t=G(e,l);return t?(l.data=e.data,l.isLoading=e.isLoading,l.isValidating=e.isValidating,l.error=e.error,l):(l=e,e)},()=>u]},[n,O]),K=(0,a.useSyncExternalStore)((0,i.useCallback)(e=>J(O,(t,r)=>{G(r,t)||e()}),[n,O]),H[0],H[1]),ee=!L.current,et=R[O]&&R[O].length>0,er=K.data,en=s(er)?B:er,ei=K.error,ea=(0,i.useRef)(en),eu=v?s(er)?ea.current:er:en,el=(!et||!!s(ei))&&(ee&&!s(g)?g:!W().isPaused()&&(o?!s(en)&&E:s(en)||E)),eo=!!(O&&t&&ee&&el),es=s(K.isValidating)?eo:K.isValidating,ed=s(K.isLoading)?eo:K.isLoading,ec=(0,i.useCallback)(async e=>{let t,n;let i=F.current;if(!O||!i||D.current||W().isPaused())return!1;let a=!0,o=e||{},c=!T[O]||!o.dedupe,f=()=>S?!D.current&&O===A.current&&L.current:O===A.current,g={isValidating:!1,isLoading:!1},E=()=>{q(g)},h=()=>{let e=T[O];e&&e[1]===n&&delete T[O]},w={isValidating:!0};s(j().data)&&(w.isLoading=!0);try{if(c&&(q(w),r.loadingTimeout&&s(j().data)&&setTimeout(()=>{a&&f()&&W().onLoadingSlow(O,r)},r.loadingTimeout),T[O]=[i(V),P()]),[t,n]=T[O],t=await t,c&&setTimeout(h,r.dedupingInterval),!T[O]||T[O][1]!==n)return c&&f()&&W().onDiscarded(O),!1;g.error=l;let e=y[O];if(!s(e)&&(n<=e[0]||n<=e[1]||0===e[1]))return E(),c&&f()&&W().onDiscarded(O),!1;let o=j().data;g.data=u(o,t)?o:t,c&&f()&&W().onSuccess(t,O,r)}catch(r){h();let e=W(),{shouldRetryOnError:t}=e;!e.isPaused()&&(g.error=r,c&&f()&&(e.onError(r,O,e),(!0===t||d(t)&&t(r))&&(!W().revalidateOnFocus||!W().revalidateOnReconnect||$())&&e.onErrorRetry(r,O,e,e=>{let t=R[O];t&&t[0]&&t[0](M.ERROR_REVALIDATE_EVENT,e)},{retryCount:(o.retryCount||0)+1,dedupe:!0})))}return a=!1,E(),!0},[O,n]),ef=(0,i.useCallback)((...e)=>x(n,A.current,...e),[]);if(N(()=>{F.current=t,U.current=r,s(er)||(ea.current=er)}),N(()=>{if(!O)return;let e=ec.bind(l,Y),t=0,r=Q(O,R,(r,n={})=>{if(r==M.FOCUS_EVENT){let r=Date.now();W().revalidateOnFocus&&r>t&&$()&&(t=r+W().focusThrottleInterval,e())}else if(r==M.RECONNECT_EVENT)W().revalidateOnReconnect&&$()&&e();else if(r==M.MUTATE_EVENT)return ec();else if(r==M.ERROR_REVALIDATE_EVENT)return ec(n)});return D.current=!1,A.current=O,L.current=!0,q({_k:V}),el&&(s(en)||k?e():C(e)),()=>{D.current=!0,r()}},[O]),N(()=>{let e;function t(){let t=d(h)?h(j().data):h;t&&-1!==e&&(e=setTimeout(r,t))}function r(){!j().error&&(_||W().isVisible())&&(p||W().isOnline())?ec(Y).then(t):t()}return t(),()=>{e&&(clearTimeout(e),e=-1)}},[h,_,p,O]),(0,i.useDebugValue)(eu),o&&s(en)&&O){if(!S&&k)throw Error("Fallback data is required when using suspense in SSR.");F.current=t,U.current=r,D.current=!1;let e=b[O];if(!s(e)){let t=ef(e);X(t)}if(s(ei)){let e=ec(Y);s(eu)||(e.status="fulfilled",e.value=!0),X(e)}else throw ei}return{mutate:ef,get data(){return z.data=!0,eu},get error(){return z.error=!0,ei},get isValidating(){return z.isValidating=!0,es},get isLoading(){return z.isLoading=!0,ed}}},function(...e){let t=H(),[r,i,a]=G(e),u=J(t,a),l=n,{use:o}=u,s=(o||[]).concat(K);for(let e=s.length;e--;)l=s[e](l);return l(r,i||u.fetcher||null,u)})}}]);