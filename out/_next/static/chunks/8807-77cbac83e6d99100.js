"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8807],{77172:function(e,t,n){let r;n.d(t,{J:function(){return o}});let l=Symbol.for("react-aria.i18n.locale"),i=Symbol.for("react-aria.i18n.strings");class o{getStringForLocale(e,t){let n=this.getStringsForLocale(t)[e];if(!n)throw Error(`Could not find intl message ${e} in ${t} locale`);return n}getStringsForLocale(e){let t=this.strings[e];return t||(t=function(e,t,n="en-US"){if(t[e])return t[e];let r=Intl.Locale?new Intl.Locale(e).language:e.split("-")[0];if(t[r])return t[r];for(let e in t)if(e.startsWith(r+"-"))return t[e];return t[n]}(e,this.strings,this.defaultLocale),this.strings[e]=t),t}static getGlobalDictionaryForPackage(e){if("undefined"==typeof window)return null;let t=window[l];if(void 0===r){let e=window[i];if(!e)return null;for(let n in r={},e)r[n]=new o({[t]:e[n]},t)}let n=null==r?void 0:r[e];if(!n)throw Error(`Strings for package "${e}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`);return n}constructor(e,t="en-US"){this.strings=Object.fromEntries(Object.entries(e).filter(([,e])=>e)),this.defaultLocale=t}}},3225:function(e,t,n){n.d(t,{E:function(){return i}});let r=new Map,l=new Map;class i{format(e,t){let n=this.strings.getStringForLocale(e,this.locale);return"function"==typeof n?n(t,this):n}plural(e,t,n="cardinal"){let l=t["="+e];if(l)return"function"==typeof l?l():l;let i=this.locale+":"+n,o=r.get(i);return o||(o=new Intl.PluralRules(this.locale,{type:n}),r.set(i,o)),"function"==typeof(l=t[o.select(e)]||t.other)?l():l}number(e){let t=l.get(this.locale);return t||(t=new Intl.NumberFormat(this.locale),l.set(this.locale,t)),t.format(e)}select(e,t){let n=e[t]||e.other;return"function"==typeof n?n():n}constructor(e,t){this.locale=e,this.strings=t}}},15795:function(e,t,n){n.d(t,{X:function(){return i}});var r=n(34909);let l=new Map;function i(e){let{locale:t}=(0,r.j)(),n=t+(e?Object.entries(e).sort((e,t)=>e[0]<t[0]?-1:1).join():"");if(l.has(n))return l.get(n);let i=new Intl.Collator(t,e);return l.set(n,i),i}},88623:function(e,t,n){n.d(t,{q:function(){return a}});var r=n(34909),l=n(77172),i=n(3225),o=n(2265);let u=new WeakMap;function a(e,t){let n,{locale:a}=(0,r.j)(),s=t&&(0,l.J).getGlobalDictionaryForPackage(t)||((n=u.get(e))||(n=new l.J(e),u.set(e,n)),n);return(0,o.useMemo)(()=>new i.E(a,s),[a,s])}},52897:function(e,t,n){function r(e,t){return"function"==typeof t.getChildren?t.getChildren(e.key):e.childNodes}function l(e){return i(e,0)}function i(e,t){if(t<0)return;let n=0;for(let r of e){if(n===t)return r;n++}}function o(e){let t;for(let n of e)t=n;return t}n.d(t,{Em:function(){return i},_P:function(){return r},l8:function(){return l},s:function(){return o}})},34921:function(e,t,n){n.d(t,{K:function(){return u}});var r=n(2265);class l{build(e,t){return this.context=t,i(()=>this.iterateCollection(e))}*iterateCollection(e){let{children:t,items:n}=e;if("function"==typeof t){if(!n)throw Error("props.children was a function but props.items is missing");for(let n of e.items)yield*this.getFullNode({value:n},{renderer:t})}else{let e=[];r.Children.forEach(t,t=>{e.push(t)});let n=0;for(let t of e)for(let e of this.getFullNode({element:t,index:n},{}))n++,yield e}}getKey(e,t,n,r){if(null!=e.key)return e.key;if("cell"===t.type&&null!=t.key)return`${r}${t.key}`;let l=t.value;if(null!=l){var i;let e=null!==(i=l.key)&&void 0!==i?i:l.id;if(null==e)throw Error("No key found for item");return e}return r?`${r}.${t.index}`:`$.${t.index}`}getChildState(e,t){return{renderer:t.renderer||e.renderer}}*getFullNode(e,t,n,l){let u=e.element;if(!u&&e.value&&t&&t.renderer){let n=this.cache.get(e.value);if(n&&(!n.shouldInvalidate||!n.shouldInvalidate(this.context))){n.index=e.index,n.parentKey=l?l.key:null,yield n;return}u=t.renderer(e.value)}if(r.isValidElement(u)){let r=u.type;if("function"!=typeof r&&"function"!=typeof r.getCollectionNode){let e="function"==typeof u.type?u.type.name:u.type;throw Error(`Unknown element <${e}> in collection.`)}let i=r.getCollectionNode(u.props,this.context),a=e.index,s=i.next();for(;!s.done&&s.value;){let r=s.value;e.index=a;let c=r.key;c||(c=r.element?null:this.getKey(u,e,t,n));let f=[...this.getFullNode({...r,key:c,index:a,wrapper:function(e,t){return e&&t?n=>e(t(n)):e||t||void 0}(e.wrapper,r.wrapper)},this.getChildState(t,r),n?`${n}${u.key}`:u.key,l)];for(let t of f){if(t.value=r.value||e.value,t.value&&this.cache.set(t.value,t),e.type&&t.type!==e.type)throw Error(`Unsupported type <${o(t.type)}> in <${o(l.type)}>. Only <${o(e.type)}> is supported.`);a++,yield t}s=i.next(f)}return}if(null==e.key)return;let a=this,s={type:e.type,props:e.props,key:e.key,parentKey:l?l.key:null,value:e.value,level:l?l.level+1:0,index:e.index,rendered:e.rendered,textValue:e.textValue,"aria-label":e["aria-label"],wrapper:e.wrapper,shouldInvalidate:e.shouldInvalidate,hasChildNodes:e.hasChildNodes,childNodes:i(function*(){if(!e.hasChildNodes)return;let n=0;for(let r of e.childNodes())for(let e of(null!=r.key&&(r.key=`${s.key}${r.key}`),r.index=n,a.getFullNode(r,a.getChildState(t,r),s.key,s)))n++,yield e})};yield s}constructor(){this.cache=new WeakMap}}function i(e){let t=[],n=null;return{*[Symbol.iterator](){for(let e of t)yield e;for(let r of(n||(n=e()),n))t.push(r),yield r}}}function o(e){return e[0].toUpperCase()+e.slice(1)}function u(e,t,n){let i=(0,r.useMemo)(()=>new l,[]),{children:o,items:u,collection:a}=e;return(0,r.useMemo)(()=>a||t(i.build({children:o,items:u},n)),[i,o,u,a,n,t])}}}]);