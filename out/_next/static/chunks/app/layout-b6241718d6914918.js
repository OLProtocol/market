(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3185],{94654:function(e,t,i){Promise.resolve().then(i.bind(i,15272))},15272:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return e_}});var r=i(57437);i(86013),i(34332),i(40052);var s=i(88961),a=i.n(s),l=i(2265),n=i(53690),o=i(16463),c=i(85169);function d(e){let{children:t,themeProps:i}=e,s=(0,o.useRouter)();return(0,r.jsx)(n.w,{navigate:s.push,children:(0,r.jsx)(c.f,{...i,children:t})})}var _=i(62121),u=i(77446),m=i(55568),p=i(53891),h=i(86425),f=i(86778),b=i(98319),g=i(48728),x=i(25689),y=i(68826),v=i(75945),k=i(14003),j=i(57818),T=i(90089),S=i(64069),N=i(92692),w=i(90720),O=i(76890),D=i(2428),M=i(19355);let C=()=>{let{i18n:e}=(0,T.$G)(),[t,i]=(0,l.useState)(new Set([e.language]));return(0,l.useMemo)(()=>Array.from(t).join(", ").replaceAll("_"," "),[t]),(0,r.jsxs)(S.F,{children:[(0,r.jsx)(N.S,{children:(0,r.jsx)(w.A,{variant:"light",isIconOnly:!0,className:"capitalize",children:(0,r.jsx)(M.JO,{icon:"iconoir:language",className:"text-xl"})})}),(0,r.jsx)(O.a,{"aria-label":"Single selection example",variant:"flat",disallowEmptySelection:!0,selectionMode:"single",selectedKeys:t,onSelectionChange:t=>{let r=Array.from(t)[0];r&&e.changeLanguage(r),i(t)},children:[{key:"en",label:"Engish"},{key:"zh-CN",label:"中文"}].map(e=>(0,r.jsx)(D.W,{children:e.label},e.key))})]})};var A=i(87138),P=i(31989),Y=i(75900),R=i(95256),B=i(47971),F=i(87586),U=i(91617),I=i(65647);let L=()=>{let{setAppVersion:e}=(0,I.Ee)(),{t}=(0,T.$G)(),[i,s]=(0,l.useState)(!1),a=()=>{s(!0)};(0,U.ZP)("getAppVersion-".concat(248),()=>(0,F.Sf)(),{refreshInterval:12e4,onSuccess:e=>{console.log(e),e&&Number(e)>248&&a()}});let n=(0,l.useRef)(),o=()=>{n.current&&clearTimeout(n.current),n.current=setTimeout(()=>{},3e5),s(!1)};return(0,l.useEffect)(()=>{e(248)},[]),(0,r.jsx)(P.R,{backdrop:"blur",isDismissable:!1,isOpen:i,onClose:o,children:(0,r.jsxs)(Y.A,{children:[(0,r.jsx)(R.k,{className:"",children:t("pages.app.version_update_title")}),(0,r.jsxs)(B.R,{children:[(0,r.jsx)(w.A,{color:"primary",variant:"light",onPress:o,children:t("buttons.talk_later")}),(0,r.jsx)(w.A,{color:"danger",onPress:()=>{s(!1),window.location.reload()},children:t("buttons.update_now")})]})]})})};var E=i(90523),z=i(81887),H=i(24481);let X=e=>{let{label:t,value:i,onClick:s,className:a}=e;return(0,r.jsxs)("div",{className:"w-full h-30 p-2 cursor-pointer bg-gray-500 rounded-lg text-center border-2  ".concat(a),onClick:s,children:[(0,r.jsx)("div",{className:"text-lg font-bold",children:t}),(0,r.jsxs)("div",{className:"flex justify-center items-center",children:[(0,r.jsx)("span",{className:"mr-2 text-xl text-orange-400 font-bold",children:i}),(0,r.jsx)("span",{children:"sats/vB"})]})]})};var V=i(24842);let J=e=>{let{onChange:t,feeRateData:i,value:s,feeType:a}=e,{t:n,i18n:o}=(0,T.$G)(),{network:c}=(0,V.$)(e=>e),[d,u]=(0,l.useState)("Normal"),[m,p]=(0,l.useState)(1),[h,f]=(0,l.useState)(1),[b,g]=(0,l.useState)(1),[x,y]=(0,l.useState)(1),[v,k]=(0,l.useState)(500),j=(e,i)=>{d!==e&&(u(e),null==t||t({type:e,value:i}))},S=async()=>{console.log("setRecommendFee",i);let e="testnet"===c?1:10;f((null==i?void 0:i.economyFee)||e),g((null==i?void 0:i.halfHourFee)||e),p((null==i?void 0:i.fastestFee)||e),y((null==i?void 0:i.minimumFee)||1),u("Normal")},N=(0,l.useMemo)(()=>[{label:"Economy",name:n("common.fee_economy"),value:h},{label:"Normal",name:n("common.fee_normal"),value:b},{label:"Custom",name:n("common.fee_custom"),value:m}],[h,b,m,o.language]);return(0,l.useEffect)(()=>{S()},[i]),(0,l.useEffect)(()=>{"Custom"===d&&(null==t||t({value:m,type:"Custom"}))},[m]),(0,l.useEffect)(()=>{"Custom"===a&&s?(p(s),u(a)):a&&u(a)},[a,s]),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"grid grid-cols-3 gap-3 mb-2",children:N.map(e=>(0,r.jsx)(X,{className:d===e.label?" border-orange-400 ":"border-gray-500",label:e.name,value:e.value,onClick:()=>j(e.label,e.value)},e.label))}),"Custom"===d&&(0,r.jsxs)("div",{className:"flex items-center gap-4",children:[(0,r.jsx)(_.Y,{type:"number",className:"w-30",placeholder:"1",value:m.toString(),onChange:e=>p(Number(e.target.value))}),(0,r.jsx)(H.L,{size:"sm",step:1,maxValue:v,minValue:x,className:"flex-1",value:[m],onChange:e=>{console.log(e),p(isNaN(e[0])?0:e[0])}})]})]})},W=()=>{let{t:e}=(0,T.$G)(),{network:t}=(0,V.$)(e=>e),{isOpen:i,onClose:s,onOpenChange:a,onOpen:n}=(0,E.q)(),[o,c]=(0,l.useState)({value:1,type:"Normal"}),{data:d,isLoading:_}=(0,U.ZP)("getRecommendedFees-".concat(t),()=>(0,F.sQ)(),{refreshInterval:6e5}),u=(0,l.useMemo)(()=>(null==d?void 0:d.code)===200?d.data:{},[d]),{setFeeRate:m,feeRate:p}=(0,I.Ee)(e=>e);return(0,l.useEffect)(()=>{if(null==u?void 0:u.halfHourFee){let e=null==u?void 0:u.halfHourFee;e&&m({value:(e=null==u?void 0:u.halfHourFee)||1,type:"Normal"})}},[u]),(0,r.jsxs)("div",{children:[(0,r.jsxs)(w.A,{variant:"ghost",isLoading:_,className:"bg-transparent",onClick:()=>n(),children:[(0,r.jsx)(M.JO,{icon:"mdi:gas-station",className:"text-xl0"}),p.value," ",(0,r.jsx)("span",{className:"dark:text-gray-400 text-slate-600",children:"sat/vB"})]}),(0,r.jsx)(P.R,{isOpen:i,onOpenChange:a,children:(0,r.jsxs)(Y.A,{children:[(0,r.jsx)(R.k,{className:"flex flex-col gap-1",children:e("common.gas_fee")}),(0,r.jsx)(z.I,{children:(0,r.jsx)(J,{onChange:e=>{console.log("fee",e),c(e)},value:p.value,feeType:p.type,feeRateData:u})}),(0,r.jsxs)(B.R,{children:[(0,r.jsx)(w.A,{color:"danger",variant:"light",onPress:()=>{s()},children:e("common.close")}),(0,r.jsx)(w.A,{color:"primary",onPress:()=>{m({value:o.value,type:o.type}),s()},children:e("common.ok")})]})]})})]})};var $=i(77634);let q=(0,j.default)(()=>Promise.all([i.e(1271),i.e(3440)]).then(i.bind(i,93440)),{loadableGenerated:{webpack:()=>[93440]},ssr:!1}),G=()=>{let{address:e,network:t}=(0,V.$)(),{setHeight:i,setBtcPrice:s,runtimeEnv:a,setEnv:n}=(0,I.Ee)(),{setList:c}=(0,I.YL)(),[d,j]=(0,l.useState)(!1),{t:S,i18n:N}=(0,T.$G)(),w=(0,o.usePathname)(),{data:O}=F.Ol.useBtcHeight(t),{data:D,trigger:M}=(0,$.Z)("getUtxoByValue-".concat(e,"-").concat(t),()=>(0,F.wt)({address:e,network:t,value:500})),{data:P}=(0,U.ZP)("getBTCPrice",()=>(0,F.UZ)());(0,l.useEffect)(()=>{var e,t;(null==D?void 0:null===(e=D.data)||void 0===e?void 0:e.length)&&c(null===(t=D.data)||void 0===t?void 0:t.map(e=>({status:"unspend",location:"remote",utxo:"".concat(e.txid,":").concat(e.vout),...e})))},[D]),(0,l.useEffect)(()=>{var e;let t=null==O?void 0:null===(e=O.data)||void 0===e?void 0:e.height;t&&i(t)},[O]),(0,l.useEffect)(()=>{var e,t;(null==P?void 0:null===(e=P.data)||void 0===e?void 0:e.amount)&&s(null==P?void 0:null===(t=P.data)||void 0===t?void 0:t.amount)},[P]),(0,l.useEffect)(()=>{e&&t&&M()},[e,t]),_.Y,u.C;let Y=e=>w===e,R=(0,l.useMemo)(()=>{let e=[{label:S("pages.market.title"),href:"/market",isActive:!0},{label:S("pages.inscribe.title"),href:"/inscribe",isActive:!0},{label:S("pages.explorer.title"),href:"".concat("https://app.sat20.org","/#/explorer"),target:"_blank",isActive:!0},{label:S("pages.my_assets.title"),href:"/account",isActive:!1}];return"prod"!==a&&e.push({label:S("pages.tools.title"),href:"/tools",isActive:!1}),e},[N.language,a]);return(0,l.useEffect)(()=>{location.hostname.startsWith("test")?n("test"):location.hostname.indexOf("ordx")>-1&&n("prod")},[]),(0,r.jsxs)(m.R,{maxWidth:"full",position:"sticky",isMenuOpen:d,isBordered:!0,onMenuOpenChange:j,children:[(0,r.jsxs)(p.U,{className:"basis-1/5 sm:basis-full",justify:"start",children:[(0,r.jsx)(h.H,{as:"li",className:"gap-3 max-w-fit",children:(0,r.jsxs)(A.default,{className:"flex justify-start items-center gap-1",href:"https://ordx.market/",children:[(0,r.jsx)(f.J,{radius:"none",src:"/logo.png",alt:"logo",classNames:{wrapper:"w-14 h-14 min-w-14"}}),(0,r.jsx)("p",{className:"font-bold text-purple-500/90 hidden md:block",children:"SAT20Market"})]})}),(0,r.jsx)("ul",{className:"hidden lg:flex gap-4 justify-start ml-2",children:R.map(e=>(0,r.jsx)(b.k,{isActive:Y(e.href),children:(0,r.jsx)(A.default,{href:e.href,target:e.target,color:"foreground",children:e.label})},e.href))})]}),(0,r.jsxs)(p.U,{className:" basis-1/5 sm:basis-full",justify:"end",children:[(0,r.jsx)(b.k,{className:"hidden sm:flex",children:(0,r.jsx)(W,{})}),(0,r.jsx)(b.k,{className:"hidden sm:flex gap-2",children:(0,r.jsx)(C,{})}),(0,r.jsx)(b.k,{className:"",children:(0,r.jsx)(q,{})}),(0,r.jsx)(b.k,{className:"lg:hidden h-full",children:(0,r.jsx)(g.L,{})})]}),d&&(0,r.jsx)(x.$,{children:(0,r.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,r.jsx)(y.h,{children:(0,r.jsxs)("div",{className:"flex items-center gap-4",children:[(0,r.jsx)(W,{}),(0,r.jsx)(C,{})]})}),(0,r.jsx)(v.j,{}),R.map(e=>(0,r.jsx)(y.h,{children:(0,r.jsx)(k.O,{href:e.href,onClick:()=>j(!1),children:e.label})},e.href))]})}),(0,r.jsx)(L,{})]})};var Z=i(44839),K=i(46027),Q=i(34583),ee=JSON.parse('{"tick":"Ticker","notice":"Notice","assets_name":"Assets Name","domain_name":"Domain Name","deploy":"Deploy","delete":"Delete","transfer":"Transfer","mint":"Mint","file":"File","analyze":"Analyze","address":"Address","block":"Block","split":"Split","content":"Content","selfmint":"Self Mint","max":"Max","my_blog":"Blog","rarity":"Rarity","deploy_time":"Deploy Time","deploy_height":"Deploy Height","reg":"Regular Expression","cn":"Consecutive Numbers","trz":"Trailing Zeros","limit_per_mint":"Limit Per Mint","limit":"Limit","repeat_mint":"Repeat Mint","description":"Description","price":"Price","price_change":"Change","tx_total_volume":"Volume","total_amount":"Market cap","tx_order_count":"Sales","holder_count":"Holders","lowest_price":"Floor Price","close":"Close","executed":"Sale","delist":"Unlist","invalid":"invalid","list":"List","sell":"sell","sell_unit_price":"Unit Price","history_sell":"Sell","history_buy":"Buy","buy":"buy","ok":"OK","time":"Time","tx":"Tx","from":"Seller","to":"Buyer","num":"Num","gas_fee":"Gas Fee","fee_rate":"Fee Rate","service_fee":"Service Fee","network_fee":"Network Fee","fee_economy":"Economy","fee_slow":"Slow","fee_normal":"Normal","fee_custom":"Custom","holder":"Holder","item":"Item","utxo":"Utxo","utxos":"Utxos","source":"Source","amount":"Amount","unit_price":"Unit Price","total":"Total","balance":"Balance","available_balance":"Available Balance","your_profits":"Your profits","not_sort":"Not Sort","sort_price_ascending":"Price Ascending","sort_price_descending":"Price Descending","sort_unit_price_ascending":"Unit Price Ascending","sort_unit_price_descending":"Unit Price Descending","sort_time_ascending":"Time Ascending","sort_time_descending":"Time Descending","order_num":"Listings","sale_num":"Num of Sale","asset_num":"Assets","tx_total_asset":"Total Assets Traded","onsell_order_count":"Listings","onsell_total_amount":"Amount(On Sale)","highest_price":"Best Offer","tx_history":"Trade History","my_listings":"My Listings","my_biils":"My Bills","holder_dispersion":"Unique owners","time_1D":"24h","time_7D":"7D","time_30D":"30D","time_all_time":"All Time","sort":"Sort","filter":"Filter","filter_all":"All","inscription_id":"Inscription ID","split_dummy_hint":"If the number of virtual Utxo is not enough, it will be automatically divided.","select_option":"Select Option"}'),et=JSON.parse('{"app":{"title":"SAT20 Market","version_update_title":"There is a new version, do you want to update it?"},"home":{"title":"Home"},"market":{"title":"MarketPlace"},"tools":{"title":"Toolbox","transaction":{"title":"Split, Merge & Transfer","description":"Batch Split and Transfer Tool","btn_split":"Use Now","input":"Input","output":"Output","available_utxo":"Plain UTXO","rare_sats":"Rare Sats","balance":"Balance","balance_des":"When the balance is less than 546 sats, the remaining balance is transferred to the miners.","network_fee":"Network Fee","btn_send":"Send"},"btc_transfer":"Transfer","search_sat":{"title":"Sat Hunting","description":"Search Rare Sats","btn_search":"Search","table_title":"Search Result","table_col1":"UTXO","table_col2":"Sats/BTC","table_col3":"Sat","table_col4":"Sat Ranges"}},"my_assets":{"title":"My Assets"},"order":{"title":"Order","modal_title":"Buy Order"},"explorer":{"title":"Explorer","subtitle":"Check out OrdX balance of the address.","des":"Recognize all operations including DEPLOY, MINT and TRANSFER.","list_title":"The full list of ordx","not_support":"Viewing the transferred balance is temporarily unavailable.","ordx_version":"OrdX Version"},"transfer":{"title":"Transfer","error_1":"Please provide a receiving address.","error_2":"The number of provided receiving addresses does not match the transfer quantity. "},"inscribe":{"title":"Inscribe","name":{"title":"Name","input_name":"Name","description":"Register a name on BTC","description_1":"Supports suffixes: for example, .btc, .x, .pizza, and no suffix. ","description_2":"Free minting: you can free mint names with the supported suffixes above until block 861778.","description_3":"Names left to minted after block 861778","name_placeholder":"Name must be 3-32 bytes long","select_placeholder":"Select Suffix","error_1":"Name must be 3-32 bytes long","error_2":"{{name}} has been minted","error_3":"The batch casting quantity cannot exceed 2000"},"files":{"name":"Files","upload_title":"Upload your files to begin","upload_des_1":"Drag and drop your files here, or click to select files","upload_des_2":".jpg, .webp, .png, .gif, .txt, .mp3, .mp4(h264) + more!"},"text":{"name":"Text","single_des":"Input what you want to inscribe on BTC","bulk_des":"If bulk, we will inscribe one for every new line.","single":"Single","bulk":"bulk","textarea_placeholder":"any text here"},"ordx":{"name":"OrdX","current_height":"Current Hieght: {{height}}","deploy_file":"Ticker display resource file","deploy_mode":"Mode","deploy_mode_fair":"Fair Launch","deploy_mode_project":"Project-Led","tick_placeholder":"Tick must be 3, 5-32 byte long","reg_placeholder":"like \\"^[1-9][0-9]*0{n}$\\"","cn_placeholder":"For example, cn=1000, 1000 consecutively numbered sats","trz_placeholder":"For example, trz=8, it means that the sat number has 8 zeros at the end.","block_helper":"The effective time of mint is approximately from {{start}} to {{end}}.","error_1":"Tick must be 3, 5-16 byte long","error_2":"Deploy must have Block or Rarity or Regular Expression","error_3":"{{tick}} has been deployed","error_4":"{{tick}}  has not been deployed","error_5":"Mint amount must be less than {{limit}}","error_6":"{{tick}} has not started mint yet","error_7":"{{tick}} has been minted","error_8":"{{tick}} contains special sat and cannot be cast","error_9":"The minimum height of the block is less than {{block}}, the ticker is invalid and will not be indexed by the indexer","error_10":"The starting height of the block must be less than the ending height","error_11":"Rarity cannot be empty","error_12":"Quantity cannot be empty","error_13":"Block, rarity must be set.","error_14":"The Max must be set","error_15":"The Block must be set","error_16":"The Max must must greater than limit","error_17":"{{tick}} cannot minted","error_18":"Not enough balance","error_19":"The quantity is too large, please split it first","rarity_helper":"Special sat attributes required for mint."},"step_two":{"title":"Please double check your text below before continuing:","des":"You are about to inscribe {{num}} {{type}}."},"step_three":{"items":"Items","select_fee":"Select the network fee you want to pay:","address_hint":"Please note the inscribing transaction delivers the inscription to the receiving address directly.","to_single":"To Single Address","to_multiple":"To to_multiple Addresses","output_one_utxo":"Whether to output a UTXO for batch inscriptions","tight_one_utxo":"Whether tight to output a UTXO for batch inscriptions","cycle_fill":"Loop through the above addresses to {{len}}","error_1":"Please provide a receiving address.","error_2":"The number of provided receiving addresses does not match the minting quantity. ","error_3":"Wallet address format is incorrect, please change it to a Taproot address."},"fee":{"fee_rate":"Fee Rate","inscription_size":"Inscription Size","network_fee":"Network Fee","service_fee":"Service Fee","service_hint":"Minimum value {{max}}","high_hint":"The current Bitcoin network is highly congested. please be patient and wait.","total_fee":"Total Fee","no_fee":"Free during the promotion period."},"order":{"name":"Order List","local":"Local Order","id":"Order Id","status":"Status","created":"Create Date","continue":"(If an error message appears during the process, please click the button to continue trying again.)"},"pay":{"title":"Inscribing Order","created_text":"Order created at","files":"Files","step_one":{"name":"Payment"},"step_two":{"name":"Payment Result","des":"Please wait for the payment to be confirmed."},"step_three":{"name":"Start Inscribing","hint":"Minting in progress, please do not close!","des":"Please wait for the inscription to be confirmed."},"step_four":{"name":"Inscribe Result","des":"Congratulations on your successful inscription.","genesis_tx":"Genesis Transaction"}}},"blog":{"title":"Blog","step_1":"1. Select Blog Name:","step_2":"2. Inscribe Template: ","step_3":"3. Inscribe  Routing:","step_4":"4. Set Personal Information:","step_5":"5. Publish Content"},"event":{"totast":{"success":"Congratulations, you are eligible for the lottery! The list of winners will be announced on Twitter after the event, please stay tuned!","error":"Sorry, you need to continue to complete the task!"}}}'),ei=JSON.parse('{"category":{"number":{"1_digit":"1 Digit","2_digit":"2 Digits","3_digit":"3 Digits","4_digit":"4 Digits","5_digit":"5 Digits","6_digit":"6 Digits","7_digit":"7 Digits","8_digit":"8 Digits","11_digit":"11 Digits","12_digit":"12 Digits"},"letter":{"1_letter":"1 Letter","2_letters":"2 Letters","3_letters":"3 Letters","4_letters":"4 Letters","cvcv":"CVCV","same_letters":"Same Letters"},"chinese":{"1_han":"1 Han","2_han":"2 Han","3_han":"3 Han","4_han":"4 Han"},"nav":{"2_han":{"label":"2 Han"},"dal3":{"label":"3Mix","tooltip":"3char, digits and letters"},"cvcv":{"label":"CVCV"},"date":{"label":"Date/Birthday","tooltip":"YYMMDD, YYYYMM"},"lucky":{"label":" Luck-Digi"}},"other":{"date":"Date (YYMMDD, YYYYMM)","symmetric_digit":"Symmetric","consecutive_digit":"Consecutive","luck_digit":"Luck Digit","full_date":"Full Date (YYYYMMDD)","did":"DID (10-digit Web3DID)","c_mobile_number":"CMobileNumber (11-digit)","dal2":"2Mix: 2char, digits and letters","dal3":"3Mix: 3char, digits and letters","char2":"2Symbol Name","unclassified_digit_names":"Other unclassified digit names"}}}'),er=JSON.parse('{"connect":"Connect","my_assets":"My Assets","disconnect":"Disconnect","cancel":"Cancel","confirm":"Confirm","buy":"Buy","close":"Close","inscribe":"Inscribe","start_inscribe":"Start Inscribing","talk_later":"Talk Later","update_now":"Update Now","list_sale":"List","remove_sale":"Unlist","next":"Next","pay_wallet":"Pay with Wallet","submit_payment":"Submit & Pay invoice","back":"Back","remove_all":"Remove All","to_history":"Tx History"}'),es=JSON.parse('{"system_error":"System Error","insufficient_balance":"Insufficient balance","transfer_success_title":"Transfer success","transfer_error_title":"Transfer failed","split_success_title":"Split success","split_error_title":"Split failed","split_error_description":"Split failed, the split amount is not a multiple of 1000.","list_failed_title":"Listed failed","list_failed_min_amount":"The order amount is too small. The minimum order amount is 330 sats.","list_failed_p2tr_required":"The address is not a valid taproot address","list_success_title":"Listed successfully","list_success_description":"The order has been submitted successfully, please wait for the buyer to buy it.","lock_order_failed_title":"Lock order failed","order_unlock_failed_title":"Order cancel failed","order_cancel_success_title":"Order unlist successfully","order_cancel_success_description_1":"The order has been unlist successfully","order_cancel_failed_title":"Order unlist failed","order_cancel_failed_description_1":"The order is locked, please wait unlock it first","order_buy_success_title":"Order buy successfully","order_buy_success_description":"The order has been submitted successfully, please wait for the buyer to buy it.","order_buy_failed_title":"Order buy failed","order_buy_failed_description_1":"Lack dumy utxos","order_buy_failed_description_2":"Order Raw is empty","order_buy_failed_description_3":"dummyUtxos lack of two utxos","order_buy_failed_description_4":"Insufficient btc utxo","transaction_title":"Transaction","transaction_spilt_success":"Split & Send success","transaction_spilt_fail":"Split & Send failed","search_sats_title":"Search sats","website_notice":"The market will undergo system upgrade maintenance from 14:00 to 20:00 on August 18, 2024. During this period, market transactions may be affected. We apologize for the inconvenience. The recovery time will be notified via the official Twitter account as soon as possible. Thank you for your understanding and support."}'),ea=JSON.parse('{"tick":"Ticker","notice":"通知","assets_name":"资产","domain_name":"域名","price":"价格","transfer":"转移","delete":"删除","account":"账户","mint":"铸造","analyze":"分析","file":"文件","split":"分割","deploy":"部署","block":"区块","content":"内容","selfmint":"铸造比例","max":"总量","source":"来源","my_blog":"博客","rarity":"稀有度","deploy_time":"部署时间","deploy_height":"部署高度","description":"描述","reg":"正则表达式","cn":"连号的数量","trz":"尾部为零的数量","limit_per_mint":"每次铸造限制","limit":"限制","repeat_mint":"重复铸造","address":"地址","holders":"持有者","minted":"已铸造","minting":"铸造中","price_change":"涨跌幅","tx_total_volume":"交易额","total_amount":"市值","tx_order_count":"成交笔数","holder_count":"持有人","lowest_price":"地板价","close":"关闭","executed":"成交","delist":"下架","invalid":"无效","list":"上架","history_sell":"卖出","history_buy":"买入","sell":"上架","sell_unit_price":"每资产单价","buy":"购买","ok":"确定","time":"时间","tx":"交易","from":"卖家","to":"买家","num":"数量","gas_fee":"Gas费用","fee_rate":"费率","service_fee":"服务费","network_fee":"网络费","fee_economy":"经济","fee_slow":"慢","fee_normal":"经济","fee_custom":"自定义","holder":"持有人","item":"项目","utxo":"未使用的交易输出","utxos":"未使用的交易输出集","amount":"金额","unit_price":"单价","total":"总计","balance":"余额","available_balance":"可用余额","your_profits":"总金额","not_sort":"不排序","sort_price_ascending":"总价：从低到高","sort_price_descending":"总价：从高到低","sort_unit_price_ascending":"单价：从低到高","sort_unit_price_descending":"单价：从高到低","sort_time_ascending":"时间升序","sort_time_descending":"时间降序","order_num":"挂单数量","sale_num":"销售数量","asset_num":"资产数量","tx_total_asset":"总成交资产","onsell_order_count":"上架数","onsell_total_amount":"资产(在售)","highest_price":"最高出价","tx_history":"交易历史","my_listings":"我的挂单","my_biils":"我的账单","holder_dispersion":"持有分散度","time_1D":"24小时","time_7D":"7天","time_30D":"30天","time_all_time":"全部时间","sort":"排序","filter":"筛选","filter_all":"全部","inscription_id":"铭文ID","split_dummy_hint":"虚拟Utxo数量不够，会自动分割","select_option":"选择选项"}'),el=JSON.parse('{"app":{"title":"Sat20 Market","version_update_title":"有新版本，您想更新吗？"},"home":{"title":"首页"},"market":{"title":"市场"},"tools":{"title":"工具箱","transaction":{"title":"拆分、合并 & 转移","description":"提供批量拆分、合并及转移功能。","btn_split":"马上使用","input":"输入(UTXO)","output":"输出(UTXO)","available_utxo":"Plain UTXO","rare_sats":"Rare Sats","balance":"余额","balance_des":"余额小于546 sats时，会将余额转给矿工。","network_fee":"网络费用","btn_send":"发送"},"btc_transfer":"转移","search_sat":{"title":"搜索聪","description":"搜索特殊聪","btn_search":"搜索","table_title":"搜索结果","table_col1":"UTXO","table_col2":"Sats/BTC","table_col3":"Sat","table_col4":"Sat Ranges"}},"my_assets":{"title":"我的资产"},"order":{"title":"订单","modal_title":"购买订单"},"explorer":{"title":"浏览器","subtitle":"查看地址的 OrdX 余额","des":"识别包括部署、铸造和转账在内的所有操作。","list_title":"OrdX 的完整列表","not_support":"暂时不支持查看转移后的余额。","ordx_version":"OrdX 版本"},"transfer":{"title":"转移","error_1":"请提供一个接收地址。","error_2":"提供的接收地址数量与转移数量不匹配。"},"inscribe":{"title":"铭文","name":{"title":"名字","input_name":"名字","description":"在BTC上注册一个名字","description_1":"支持后缀：例如 .btc、.x、.pizza，以及无后缀。","description_2":"免费铸造：到达区块856000之前你可以免费铸造以上支持的名字类型。","description_3":"截止到区块861778，剩下可铸造的名字。","name_placeholder":"名字必须是3-32字节长","select_placeholder":"选择后缀","error_1":"名字必须是3-32字节长","error_2":"{{name}} 已被铸造","error_3":"批量铸造数量不能超过2000个"},"files":{"name":"文件","upload_title":"上传文件以开始","upload_des_1":"拖放文件到此处，或点击选择文件","upload_des_2":".jpg、.webp、.png、.gif、.txt、.mp3、.mp4(h264) + 更多!"},"text":{"name":"文本","single_des":"输入你想刻在BTC上的内容","bulk_des":"如果是批量，我们将为每一行铭刻一个铭文。","single":"单个","bulk":"批量","textarea_placeholder":"在此输入任何文本"},"ordx":{"name":"OrdX","current_height":"当前高度: {{height}}","deploy_file":"Ticker的显示资源文件","deploy_mode":"Mode","deploy_mode_fair":"公平发射","deploy_mode_project":"项目主导","tick_placeholder":"Tick必须是3、5-16字节长","reg_placeholder":"如\\"^[1-9][0-9]*0{n}$\\"","cn_placeholder":"如cn=1000，1000个连续编号的sat","trz_placeholder":"如trz=8，说明该sat的编号的尾部有8个零","block_helper":"铸造的有效时间大致为{{start}}至{{end}}。","error_1":"Tick必须是3、5-16字节长","error_2":"部署必须有区块、稀有度或正则表达式","error_3":"{{tick}} 已被部署","error_4":"{{tick}} 未被部署","error_5":"铸造数量必须少于{{limit}}","error_6":"{{tick}} 还未开始铸造","error_7":"{{tick}} 已铸造完","error_8":"{{tick}} 含有特殊sat属性，无法铸造","error_9":"区块的开始高度小于{{block}}, 该ticker无效，不会被索引器索引","error_10":"区块的开始高度必须小于结束高度","error_11":"稀有度不能为空","error_12":"数量不能为空","error_13":"区块、稀有度的数量必须设置一项","error_14":"总量必须设置","error_15":"区块必须设置","error_16":"总量必须大于每次铸造限制","error_17":"{{tick}} 无法铸造","error_18":"没有足够的余额","error_19":"数量过大，请先进行拆分","rarity_helper":"铸造需要特殊的 sat 属性。"},"step_two":{"title":"在继续之前，请仔细检查下面的文本:","des":"您即将铭文{{num}}个{{type}}。"},"step_three":{"items":"项目","select_fee":"选择要支付的网络费用:","address_hint":"请注意，铭文交易会将铭文直接发送到接收地址。","to_single":"至单个地址","to_multiple":"至多个地址","output_one_utxo":"是否把批量铭文铭刻输出一个UTXO","tight_one_utxo":"是否把批量铭文紧密铭刻输出一个UTXO","cycle_fill":"循环上面地址至{{len}}个","error_1":"请提供一个接收地址。","error_2":"提供的接收地址数量与铸造数量不匹配。","error_3":"钱包地址格式不符合，请更改为Taproot地址"},"fee":{"fee_rate":"费率","inscription_size":"铭文大小","network_fee":"网络费用","service_fee":"服务费","service_hint":"最低值{{max}}","high_hint":"当前比特币网络拥堵，请耐心等待。","total_fee":"总费用","no_fee":"推广期免费。"},"order":{"name":"订单列表","local":"本地订单","id":"订单编号","status":"状态","created":"创建日期","continue":"(如果过程中出现错误提示，请点击按钮继续重试。)"},"pay":{"title":"铭文订单","created_text":"订单创建于","files":"文件","step_one":{"name":"支付"},"step_two":{"name":"支付结果","des":"请等待支付确认。"},"step_three":{"name":"开始铭文","hint":"铸造中，请勿关闭！","des":"请等待铭文确认。"},"step_four":{"name":"铭文结果","des":"祝贺您成功完成铭文。","genesis_tx":"创世交易"}}},"blog":{"title":"博客","step_1":"1. 选择博客名字：","step_2":"2. 铭刻模板：","step_3":"3. 铭刻路由：","step_4":"4. 设置个人信息：","step_5":"5. 发布内容："},"event":{"totast":{"success":"恭喜，你已符合抽奖！中间名单将在活动结束后在推特公布，敬请留意！","error":"对不起，你需要继续完成任务！"}}}'),en=JSON.parse('{"category":{"number":{"1_digit":"1位数字","2_digit":"2位数字","3_digit":"3位数字","4_digit":"4位数字","5_digit":"5位数字","6_digit":"6位数字","7_digit":"7位数字","8_digit":"8位数字","11_digit":"11位数字","12_digit":"12位数字"},"letter":{"1_letter":"1个字母","2_letters":"2个字母","3_letters":"3个字母","4_letters":"4个字母","cvcv":"辅元音组合（CVCV）","same_letters":"相同字母"},"chinese":{"1_han":"1汉字","2_han":"2汉字","3_han":"3汉字","4_han":"4汉字"},"nav":{"2_han":{"label":"2汉字"},"dal3":{"label":"3杂","tooltip":"三个字符，必须有数字和字母"},"cvcv":{"label":"辅元音组合","tooltip":"CVCV"},"date":{"label":"日期/生日","tooltip":"YYMMDD, YYYYMM"},"lucky":{"label":"幸运数"}},"other":{"date":"日期（YYMMDD, YYYYMM）","symmetric_digit":"对称数字（123321）","consecutive_digit":"连续数","luck_digit":"幸运数（689）","full_date":"完整日期（YYYYMMDD）","did":"10位数字Web3DID","c_mobile_number":"中国11位手机号","dal2":"2杂（两个字符，必须有数字和字母）","dal3":"3杂（三个字符，必须有数字和字母）","char2":"2符号名字","unclassified_digit_names":"其他数字组合"}}}'),eo=JSON.parse('{"connect":"连接","my_assets":"我的资产","disconnect":"断开连接","cancel":"取消","confirm":"确认","inscribe":"铭文","start_inscribe":"开始铭文","buy":"购买","close":"关闭","talk_later":"稍后再谈","update_now":"现在更新","list_sale":"上架","remove_sale":"下架","next":"下一步","back":"返回","pay_wallet":"使用钱包支付","submit_payment":"提交并支付发票","remove_all":"移除所有","to_history":"交易历史"}'),ec=JSON.parse('{"system_error":"系统异常，请稍后再试。","insufficient_balance":"余额不足。","transfer_success_title":"转移成功","transfer_error_title":"转移失败","split_success_title":"转移成功","split_error_title":"转移失败","split_error_description":"拆分失败，拆分金额不是1000的整数倍。","list_failed_title":"挂单失败","list_failed_min_amount":"挂单金额太小，最小挂单金额为330聪。","list_failed_p2tr_required":"地址不是有效的Taproot地址","list_success_title":"挂单成功","list_success_description":"挂单已成功提交，请等待买家购买。","lock_order_failed_title":"锁定挂单失败","order_unlock_failed_title":"解除锁定失败","order_cancel_success_title":"下架成功","order_cancel_success_description_1":"下架成功，订单已被取消。","order_cancel_failed_title":"下架失败","order_cancel_failed_description_1":"下架失败，订单已被锁定","order_buy_success_title":"购买挂单成功","order_buy_success_description":"挂单已成功提交，请等待卖家发货。","order_buy_failed_title":"购买挂单失败","order_buy_failed_description_1":"缺少虚拟UTXO","order_buy_failed_description_2":"订单原始数据为空","order_buy_failed_description_3":"虚拟UTXO缺少两个UTXO","order_buy_failed_description_4":"余额不足","transaction_title":"交易","transaction_spilt_success":"拆分及转账成功","transaction_spilt_fail":"拆分及转账失败","search_sats_title":"搜索聪","website_notice":"市场将于 2024 年 8 月 18 日 14:00 至 20:00 进行系统升级维护。期间，市场交易可能会受到影响，由此带来的不便敬请谅解。恢复时间将通过官方推特第一时间通知，感谢您的理解与支持。"}');K.ZP.use(Q.Z).use(T.Db).init({resources:{en:{translation:{common:ee,pages:et,buttons:er,name:ei,notification:es}},"zh-CN":{translation:{common:ea,name:en,pages:el,notification:ec,buttons:eo}}},fallbackLng:"en",debug:!1,detection:{order:["localStorage","sessionStorage","cookie","htmlTag","navigator"]},interpolation:{escapeValue:!1}});var ed=i(14492);function e_(e){let{children:t}=e,{appVersion:i}=(0,I.Ee)();return(0,r.jsxs)("html",{lang:"en",suppressHydrationWarning:!0,className:"dark",children:[(0,r.jsxs)("head",{children:[["https://ord-testnet4.ordx.space/content/68bcab296d2d81537f8e1032cd75043a54c9d14ddb468283fc78b24c7101b105i0?seed=85f086ce2d0de811","https://ord-testnet4.ordx.space/content/0d8c75aa700204623dbf763632a0ff2f6be67d036ce36a793a060da4d1885104i0","https://ord-testnet4.ordx.space/content/3c470c76ffd2a3297359515de5e0be346c99bf5341b6947c5784d79bfeaa7064i0","https://ord-testnet4.ordx.space/content/6b10b685db67c812a82ca2b3a69599730385c5783113dce4f11828791d0f5f7ei0","https://ord-testnet4.ordx.space/content/99c8a13d6de4ee96d3949d45f494119f57f3ae92554adb2f20d0854380765465i0","https://ord-testnet4.ordx.space/content/114fc89be175aabc854c95f55c769c25c045620bd93b9f11b09bc0fe47e1bc8ci0","https://ord-testnet4.ordx.space/content/829ff79163eaf84ea2b81434ba50e089bff7dfaaf7366f1e6aae41aac2058a3fi0","https://ord-mainnet.ordx.space/content/4bd30e1f3877ebe25f8adc3f05229c4a3d02d05207d6064be85529a6dce7149bi0","https://ord-mainnet.ordx.space/content/645c642e818d3e874535315213f914ef7372d5ab92e1733d55ceb1b8b0914a07i0","https://ord-mainnet.ordx.space/content/fb13c2ef50866951b1fd064a355125dd228daa1e84d4ee13bc612a1c96042b6ci0","https://ord-mainnet.ordx.space/content/d5e65e2613fdeff85d40c2fe209c9c9d2e78cd3cf251fd3bc53236882a90f480i0","https://ord-mainnet.ordx.space/content/63d3feee80ddfc0325ced9abc0ded7878b8447077c1aa2264749d2ce9a0bcab7i0"].map((e,t)=>(0,r.jsx)("link",{rel:"preload",href:e,as:"script"},t)),(0,r.jsx)("title",{children:"Sat20 Market"})]}),(0,r.jsx)("body",{className:(0,Z.Z)("min-h-screen bg-background font-sans antialiased dark:text-white text-black",a().variable),children:(0,r.jsx)(d,{themeProps:{attribute:"class",defaultTheme:"dark"},children:(0,r.jsxs)("div",{className:"relative flex flex-col h-screen",children:[(0,r.jsx)(G,{}),(0,r.jsx)("main",{className:"mx-auto w-full px-2 md:px-4 flex-grow",children:t}),(0,r.jsx)("footer",{id:"footer",children:(0,r.jsxs)("ul",{className:"flex justify-center gap-4 items-center text-gray-500",children:[(0,r.jsx)("li",{children:(0,r.jsx)(k.O,{href:"https://twitter.com/Sat20Nexus/",target:"_blank",children:(0,r.jsx)(ed.h,{showFallback:!0,fallback:(0,r.jsx)(f.J,{src:"/twitter.png",alt:"sat20 twitter"})})})}),(0,r.jsx)("li",{className:"text-sm",children:"Copyrights\xa92024"}),(0,r.jsxs)("li",{children:["V1.0.",i]})]})})]})})})]})}},34332:function(){},40052:function(){}},function(e){e.O(0,[2769,7228,9155,3121,1866,1645,8218,5041,1277,4276,8807,6425,2822,8563,233,6007,10,3886,8926,1447,2971,7023,1744],function(){return e(e.s=94654)}),_N_E=e.O()}]);