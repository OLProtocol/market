(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9849],{74928:function(e,t,s){Promise.resolve().then(s.bind(s,82023))},82023:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return b}});var l=s(57437),i=s(2794),r=s(34191),a=s(62121),n=s(26978),o=s(90720),c=s(1271),u=s(65703),d=s(65647),f=s(2265),m=s(14498),h=s(69077),x=s(24842),p=s(90089),g=s(18182);function b(){let{t:e}=(0,p.$G)(),[t,s]=(0,f.useState)(!1),{list:b,remove:y}=(0,d.JU)(),{feeRate:w}=(0,d.Ee)(),{getUnspendUtxos:N}=(0,d.YL)(),[v,_]=(0,f.useState)("single"),{network:j,btcWallet:C,address:S}=(0,x.$)(e=>e),[k,P]=(0,f.useState)(""),[E,I]=(0,f.useState)(""),[V,Z]=(0,f.useState)(!1),[A,L]=(0,f.useState)(),[U,O]=(0,f.useState)(0),[G,K]=(0,f.useState)("");console.log("app.account.sell.page: list: ",b);let Y=t=>{for(let s of t)if(!(0,m.Sd)(s,j))return I(e("pages.inscribe.step_three.error_3")),!1;return!0};(0,f.useMemo)(()=>"single"===v?Array.from({length:b.length}).fill(k.trim()).filter(e=>!!e):G.split("\n").map(e=>e.trim()).filter(e=>""!==e),[G,k,v,b]);let $=async()=>{s(!0),L(void 0);let[t,l]=await (0,g.vU)(u.lI.getAllUtxos)({address:S,network:j});if(t){console.error("Get utxo failed",t),c.ZP.error({message:e("notification.system_error")}),s(!1);return}let i=l.otherutxos.map(e=>({...e,utxo:"".concat(e.txid,":").concat(e.vout)})),r=l.plainutxos;console.log(k);let a=[k];if(0===a.length){I(e("pages.transfer.error_1")),s(!1);return}if(Y(a))try{let e=await (0,h.ZN)({inscriptionUtxos:i,addresses:a,network:j,oneOutput:V,utxos:r,feeRate:w.value});console.log(e);let t=await e.calNetworkFee();O(t),L(e)}catch(t){console.error("List failed",t),c.ZP.error({message:e("notification.transfer_error_title"),description:t.message})}finally{s(!1)}},B=async()=>{s(!0);try{if(!A)throw Error("No transaction");if(!C)throw Error("No wallet connected");let t=await C.signPsbt(A.toPsbt().toHex());t&&await C.pushPsbt(t),c.ZP.success({message:e("notification.transfer_success_title")})}catch(t){console.error("Confirm failed",t),c.ZP.error({message:e("notification.transfer_error_title"),description:t.message})}finally{s(!1)}};return(0,l.jsxs)("div",{className:"py-2 max-w-4xl mx-auto",children:[(0,l.jsxs)("div",{className:"flex flex-col justify-between gap-4 mb-4",children:[(0,l.jsx)("div",{className:"flex-1 mb-2 md:mb-0"}),(0,l.jsx)("div",{className:"max-w-full",children:(0,l.jsx)(i.n,{"aria-label":"address tabs",className:"w-full",selectedKey:v,onSelectionChange:e=>_(e),children:(0,l.jsx)(r.r,{title:e("pages.inscribe.step_three.to_single"),children:(0,l.jsxs)("div",{className:"mb-4",children:[(0,l.jsx)("div",{children:(0,l.jsx)(a.Y,{placeholder:"Basic usage",value:k,onChange:e=>P(e.target.value)})}),(0,l.jsx)("div",{className:"mb-4",children:(0,l.jsx)(n.K,{isSelected:V,onValueChange:e=>Z(e),children:"合并到一个utxo"})})]})},"single")})})]}),!!E&&(0,l.jsx)("div",{className:"text-red-500 text-center mb-4",children:E}),A?(0,l.jsxs)(o.A,{color:"primary",isLoading:t,className:"mx-auto max-w-full w-56 block",onClick:B,children:["确认（gas费用：",U," sat）"]}):(0,l.jsx)(o.A,{color:"primary",isLoading:t,className:"mx-auto max-w-full w-56 block",onClick:$,children:"转移所有资产"})]})}},82563:function(e,t,s){"use strict";s.d(t,{c:function(){return r}});var l=s(2265);function i(e){return null}i.getCollectionNode=function*(e,t){let{childItems:s,title:i,children:r}=e,a=e.title||e.children,n=e.textValue||("string"==typeof a?a:"")||e["aria-label"]||"";n||(null==t?void 0:t.suppressTextValueWarning)||console.warn("<Item> with non-plain text contents is unsupported by type to select for accessibility. Please add a `textValue` prop."),yield{type:"item",props:e,rendered:a,textValue:n,"aria-label":e["aria-label"],hasChildNodes:null!=e.hasChildItems?e.hasChildItems:!!(e.childItems||e.title&&l.Children.count(e.children)>0),*childNodes(){if(s)for(let e of s)yield{type:"item",value:e};else if(i){let e=[];l.Children.forEach(r,t=>{e.push({type:"item",element:t})}),yield*e}}}};let r=i}},function(e){e.O(0,[3121,1866,1645,8218,5041,1277,1271,4276,6425,2292,6015,1447,2971,7023,1744],function(){return e(e.s=74928)}),_N_E=e.O()}]);