(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[346],{99502:function(e,s,l){Promise.resolve().then(l.bind(l,96657))},96657:function(e,s,l){"use strict";l.r(s),l.d(s,{default:function(){return b}});var r=l(57437),i=l(42272),t=l(46802),n=l(42853),d=l(48749),a=l(13479),c=l(62478),o=l(89860),u=l(2265),x=l(87714),h=l(31197),m=l(28034),v=l(23310),f=l(21507),j=l(89571),g=l(12765),p=l(25677);let N=e=>{var s;let{item:l,onSell:i,onCancelOrder:t}=e,[n,d]=(0,u.useState)(!1),a=async()=>{d(!0),await i(l),d(!1)};return(0,r.jsxs)(v.w,{radius:"lg",className:"border-none w-full  h-[14rem] md:h-[20rem]",children:[(0,r.jsx)(f.G,{children:(0,r.jsx)("div",{className:"flex-1 text-sm md:text-base",children:null==l?void 0:null===(s=l.tickers)||void 0===s?void 0:s.map(e=>(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{children:["Ticker: ",e.ticker]}),(0,r.jsxs)("div",{children:["Amount: ",e.amount]})]},e.inscriptionnum))})}),(0,r.jsx)(j.j,{}),(0,r.jsx)(g.i,{className:"",children:(0,r.jsx)("div",{className:"flex-1",children:(0,r.jsx)("div",{children:0===l.order_id?(0,r.jsx)(p.A,{className:"text-tiny ",variant:"flat",fullWidth:!0,color:"default",radius:"lg",onClick:a,children:"上架"}):(0,r.jsxs)(p.A,{className:"text-tiny",fullWidth:!0,variant:"flat",color:"default",radius:"lg",onClick:t,children:["下架（",l.price," ",l.currency,"）"]})})})})]})};var y=l(24033);let k=()=>{let e=(0,y.useRouter)(),{address:s}=(0,o.$)(e=>e),{add:l,reset:i}=(0,x.J)(e=>e),[t,v]=(0,u.useState)(1),[f,j]=(0,u.useState)(10),g=(0,u.useMemo)(()=>"/ordx/GetAddressOrdxAssets-".concat(s,"-").concat(t,"-").concat(f),[s,t,f]),{data:p,isLoading:k,mutate:_}=(0,n.ZP)(g,()=>(0,c.Ro)({address:s,offset:(t-1)*f,size:f}),{revalidateOnMount:!0}),b=async s=>{l(s),e.push("/account/sell")},C=async e=>{let l=await (0,c.sl)({address:s,order_id:e.order_id});200===l.code?(d.ZP.success({message:"Cancel order successfully",description:"The order has been canceled successfully"}),_(g)):d.ZP.error({message:"Cancel order failed",description:l.msg})},w=(0,u.useMemo)(()=>{var e,s;return(null==p?void 0:null===(e=p.data)||void 0===e?void 0:e.total)?Math.ceil((null==p?void 0:null===(s=p.data)||void 0===s?void 0:s.total)/10):0},[p]),O=(0,u.useMemo)(()=>{var e;return(null==p?void 0:null===(e=p.data)||void 0===e?void 0:e.assets)||[]},[p]);return(0,u.useEffect)(()=>{i()},[]),(0,r.jsxs)("div",{className:"p-4",children:[(0,r.jsxs)(m.V,{loading:k,children:[!O.length&&(0,r.jsx)(a.Z,{className:"mt-10"}),(0,r.jsx)("div",{className:"min-h-[30rem] grid  grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4",children:O.map(e=>(0,r.jsx)(N,{item:e,onSell:()=>b(e),onCancelOrder:()=>C(e)},e.utxo))})]}),w>1&&(0,r.jsx)("div",{className:"flex justify-center",children:(0,r.jsx)(h.t,{total:w,offset:t,size:f,onChange:(e,s)=>{v(e)}})})]})};var _=l(41298);function b(){let{address:e}=(0,o.$)(e=>e);return(0,r.jsx)("div",{children:(0,r.jsxs)(i.n,{"aria-label":"Options",children:[(0,r.jsx)(t.r,{title:"我的资产",children:(0,r.jsx)(k,{})},"utxo"),(0,r.jsx)(t.r,{title:"交易历史",children:(0,r.jsx)(_.K,{address:e})},"history")]})})}}},function(e){e.O(0,[121,645,551,677,920,257,328,26,853,750,736,60,971,472,744],function(){return e(e.s=99502)}),_N_E=e.O()}]);