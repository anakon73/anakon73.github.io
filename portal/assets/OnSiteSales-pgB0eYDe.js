import{j as g,o as _,k as n,l as e,e as W,q as X,A as z,B as tt,E as et,J as q,P as at,S as lt,G as a,u as h,D as m,x as s,C as l,b as r,F as G,H as J,a0 as st,a1 as ot}from"./vue.esm-bundler-CYPfFjdk.js";import{u as _t,a as R,M as nt}from"./preview-D0Pi-YKn.js";import{I as j,a as L}from"./IconCreditCard-JAdiU-bP.js";import{u as rt}from"./useHelpers-Uc_HlRzD.js";import{_ as A}from"./_plugin-vue_export-helper-x3n3nnut.js";import{P as it}from"./ProgressSpinner-lCLkagxy.js";import{L as x}from"./schemas-74JEr9Jm.js";import"./chunk-UXHY756F-iEg6Hh0Y.js";import"./index-C1vJkiWb.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./vue-router-E7v71uM3.js";import"./preview-errors-7FWlPnjy.js";import"./index-PPLHz8o0.js";import"./PDays-npMhi6Nw.js";import"./index-baqd9Qr3.js";import"./index-TCXC35p5.js";import"./index-05uTbNHo.js";import"./PPopoverPanel-RNuJphX8.js";import"./index-LmGWO5sK.js";import"./headlessui-float-sqR0azf2.js";import"./transition-qpXhaAaU.js";import"./keyboard-64MH3N5t.js";import"./open-closed-nhb_Ydho.js";import"./use-root-containers-gEPBKDr2.js";import"./use-resolve-button-type-49aRxFpo.js";import"./iframe-ufxlS10p.js";import"../sb-preview/runtime.js";import"./query-G1AwWss6.js";import"./ChevronDownIcon-AgxEjrtE.js";import"./listbox-3RN1mHPV.js";import"./form-TGXPuq_M.js";import"./DepartureList-w5NrqMJ9.js";import"./DepartureAssignStaffAndVehicles-8AoBdfT8.js";import"./api-B2HcjM2j.js";import"./api-cJzoLyfI.js";import"./PButton-h9_xezBg.js";import"./index-VqpYtbVe.js";import"./PInput-iZb_REtl.js";import"./POverlay-3jPNvx4x.js";import"./PSpinner-cF72MsvC.js";import"./IconBus-0QPjtZ9u.js";import"./IconPerson-i3ljUCnk.js";import"./SuggestedUser-4kWsZiWj.js";import"./PAvatar-wq6oK0Zr.js";import"./PlusCircleIcon-aSiXn_Mr.js";import"./SuggestedVehicle-r1TyKt-D.js";import"./ScheduledUser-esbe3tjU.js";import"./VehicleTitle-0pOySBND.js";import"./XMarkIcon-_tXc_TyD.js";import"./PPhoneLink-wKLYRG_F.js";import"./PAlert-quHLeqTA.js";import"./CheckCircleIcon-akbq8cGf.js";import"./XMarkIcon-t43a1P5Z.js";import"./PDialogTitle-rfxNVwSR.js";import"./description-LPuBJoU_.js";import"./DepartureListItem-I88AIHqM.js";import"./DepartureUpdateComment-2rt04tFb.js";import"./PTextarea-Wrr33MR5.js";import"./DepartureUpdateCommentPopover-euFlcGix.js";import"./DepartureUpdateStatus-zdhd3wV8.js";import"./models-qWR1FMGP.js";import"./PListboxLabel-U39qo3cm.js";import"./CheckIcon-WRJIoum8.js";import"./lib-Fy6oBlQ3.js";import"./routes-WhYxSpGG.js";import"./PToggle-mLVcOzrp.js";import"./PRadio-sGATo2dT.js";import"./index-bhXQ3okY.js";import"./isNativeReflectConstruct-ubdnbphT.js";import"./mock-vjhcKIQW.js";import"./index-1aVAeLWL.js";import"./mock-UR5nntqf.js";import"./mock-CzN7Q16W.js";import"./mock-YoOI-P8k.js";import"./mock-psFphV_9.js";import"./mock-OgPWcINV.js";function ct(){const{apiClient:f}=_t(),{resetActionsInError:y,addToActionsInProgress:H,resetActionsInSuccess:I,processActionError:F,processActionSuccess:M,removeFromActionsInProgress:D}=R(),k={getMonthlyBreakdown:{id:"getMonthlyBreakdown",successMessage:"Monthly Breakdown retrieved successfully.",errorMessage:"There was a problem retrieving the Monthly Breakdown."}},K=async d=>{y(),I(),H(k.getMonthlyBreakdown);try{const c=await f.post("/api/metrics/on-site-sales/monthly-sales",{month:d});return D(k.getMonthlyBreakdown),M(k.getMonthlyBreakdown),c.data}catch(c){console.log(c),F(k.getMonthlyBreakdown,c)}},b=g({chart:{type:"bar",stacked:!0,stackType:"100%"},plotOptions:{bar:{horizontal:!0}},stroke:{width:1,colors:["#fff"]},xaxis:{categories:[]},yaxis:{labels:{align:"left"}}}),T=g([]),C=async d=>{try{const c=await f.post("/api/metrics/on-site-sales/category-by-month",{date:d});b.value={...b.value,xaxis:{categories:c.data.categories}},T.value=c.data.series}catch(c){console.log(c)}},S=g({chart:{type:"pie"},legend:{position:"bottom"},labels:[]}),B=g([]),t=async d=>{try{const c=await f.post("/api/metrics/on-site-sales/category-breakdown-for-skaftafell",{date:d});S.value={...S.value,labels:c.data.labels},B.value=c.data.series}catch(c){console.log(c)}},u=g({chart:{type:"pie"},legend:{position:"bottom"},labels:[]}),v=g([]);return{getMonthlySalesData:K,onSiteSalesMetricsActions:k,chartDataCategoryByMonthOptions:b,chartDataCategoryByMonthSeries:T,getCategoryByMonthData:C,chartDataCategoryBreakdownForSkaftafellOptions:S,chartDataCategoryBreakdownForSkaftafellSeries:B,getCategoryBreakdownForSkaftafellOptionsData:t,chartDataCategoryBreakdownForSolheimajokullOptions:u,chartDataCategoryBreakdownForSolheimajokullSeries:v,getCategoryBreakdownForSolheimajokullOptionsData:async d=>{try{const c=await f.post("/api/metrics/on-site-sales/category-breakdown-for-solheimajokull",{date:d});u.value={...u.value,labels:c.data.labels},v.value=c.data.series}catch(c){console.log(c)}}}}const Y={},mt={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},ht=e("path",{d:"M7.41,18.41L6,17L12,11L18,17L16.59,18.41L12,13.83L7.41,18.41M7.41,12.41L6,11L12,5L18,11L16.59,12.41L12,7.83L7.41,12.41Z"},null,-1),ut=[ht];function dt(f,y){return _(),n("svg",mt,ut)}const p=A(Y,[["render",dt]]);Y.__docgenInfo={displayName:"IconChevronDoubleUp",description:"",tags:{},sourceFiles:["D:/work/server/htdocs/aa-portal.is/src/shared/ui/icons/IconChevronDoubleUp.vue"]};const Z={},ft={viewBox:"0 0 20 20"},vt=e("path",{"fill-rule":"evenodd",d:"M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z","clip-rule":"evenodd"},null,-1),pt=[vt];function xt(f,y){return _(),n("svg",ft,pt)}const w=A(Z,[["render",xt]]);Z.__docgenInfo={displayName:"IconArrowUpThin",description:"",tags:{},sourceFiles:["D:/work/server/htdocs/aa-portal.is/src/shared/ui/icons/IconArrowUpThin.vue"]};const o=f=>(st("data-v-3ac39069"),f=f(),ot(),f),gt={class:"my-6 flex gap-3"},kt=o(()=>e("p",{class:"my-6 text-sm text-gray-500"}," The following charts are based on the data from the EOD reports. ",-1)),yt={key:0,class:"mb-6"},bt=o(()=>e("h1",{class:"mb-6 text-xl font-semibold leading-6 text-gray-900"}," Skaftafell ",-1)),wt={class:"my-5 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-3 md:divide-x md:divide-y-0"},St={class:"flex flex-col px-4 py-5 sm:p-6"},jt=o(()=>e("dt",{class:"text-base font-normal text-gray-900"}," All Totals ",-1)),Lt={class:"mt-1 flex items-baseline justify-between"},It={class:"text-2xl font-semibold text-blue-600"},Mt=o(()=>e("span",{class:"text-lg"},"ISK",-1)),Dt={class:"text-xs italic text-gray-500"},Kt=["innerHTML"],Tt={class:"text-xs italic text-gray-500"},Ct=["innerHTML"],Bt={class:"flex flex-col px-4 py-5 sm:p-6"},Ht=o(()=>e("dt",{class:"text-base font-normal text-gray-900"}," Total Cash ",-1)),Ft={class:"mt-1 flex items-baseline justify-between"},Ut={class:"text-2xl font-semibold text-blue-600"},Ot=o(()=>e("span",{class:"text-lg"},"ISK",-1)),At={class:"text-xs italic text-gray-500"},Nt=["innerHTML"],$t={class:"text-xs italic text-gray-500"},Pt=["innerHTML"],Vt={class:"flex flex-col px-4 py-5 sm:p-6"},Et=o(()=>e("dt",{class:"text-base font-normal text-gray-900"}," Total Card ",-1)),zt={class:"mt-1 flex items-baseline justify-between"},qt={class:"text-2xl font-semibold text-blue-600"},Gt=o(()=>e("span",{class:"text-lg"},"ISK",-1)),Jt={class:"text-xs italic text-gray-500"},Rt=["innerHTML"],Yt={class:"text-xs italic text-gray-500"},Zt=["innerHTML"],Qt={key:1,class:"mb-6"},Wt=o(()=>e("h1",{class:"mb-6 text-xl font-semibold leading-6 text-gray-900"}," Solheimajokull ",-1)),Xt={class:"my-5 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-3 md:divide-x md:divide-y-0"},te={class:"flex flex-col px-4 py-5 sm:p-6"},ee=o(()=>e("dt",{class:"text-base font-normal text-gray-900"}," All Totals ",-1)),ae={class:"mt-1 flex items-baseline justify-between"},le={class:"text-2xl font-semibold text-blue-600"},se=o(()=>e("span",{class:"text-lg"},"ISK",-1)),oe={class:"text-xs italic text-gray-500"},_e=["innerHTML"],ne={class:"text-xs italic text-gray-500"},re=["innerHTML"],ie={class:"flex flex-col px-4 py-5 sm:p-6"},ce=o(()=>e("dt",{class:"text-base font-normal text-gray-900"}," Total Cash ",-1)),me={class:"mt-1 flex items-baseline justify-between"},he={class:"text-2xl font-semibold text-blue-600"},ue=o(()=>e("span",{class:"text-lg"},"ISK",-1)),de={class:"text-xs italic text-gray-500"},fe=["innerHTML"],ve={class:"text-xs italic text-gray-500"},pe=["innerHTML"],xe={class:"flex flex-col px-4 py-5 sm:p-6"},ge=o(()=>e("dt",{class:"text-base font-normal text-gray-900"}," Total Card ",-1)),ke={class:"mt-1 flex items-baseline justify-between"},ye={class:"text-2xl font-semibold text-blue-600"},be=o(()=>e("span",{class:"text-lg"},"ISK",-1)),we={class:"text-xs italic text-gray-500"},Se=["innerHTML"],je={class:"text-xs italic text-gray-500"},Le=["innerHTML"],Ie={class:"mb-12"},Me={class:"mt-4 flow-root"},De={class:"-mx-4 -my-2 overflow-x-auto scrollbar scrollbar-track-gray-100 scrollbar-thumb-blue-500/20 sm:-mx-6 lg:-mx-8"},Ke={class:"inline-block min-w-full py-2 align-middle"},Te={class:"min-w-full divide-y divide-gray-300"},Ce=o(()=>e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"}," Date ",-1)),Be=o(()=>e("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"}," Rentals ",-1)),He=o(()=>e("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"}," Activities ",-1)),Fe={key:0,scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"},Ue={key:0,class:"bg-white"},Oe=["colspan"],Ae={key:0,class:"grid min-w-[200px] grid-cols-2 gap-3"},Ne={class:"flex items-center"},$e=o(()=>e("span",{class:"mr-0.5 text-xs"},"ISK",-1)),Pe={class:"text-black"},Ve={class:"flex items-center"},Ee={key:1,class:"text-xs font-medium italic text-rose-500/60"},ze={key:0,class:"whitespace-nowrap bg-yellow-50/30 px-3 py-1 text-sm text-gray-500"},qe={class:"grid min-w-[200px] grid-cols-2 gap-3"},Ge={class:"flex items-center"},Je={class:"flex items-center"},Re={key:1,class:"whitespace-nowrap bg-blue-50/40 px-3 py-1 text-sm text-gray-500"},Ye={class:"grid min-w-[200px] grid-cols-2 gap-3"},Ze={class:"flex items-center"},Qe={class:"flex items-center"},We={key:0,class:"border-t border-gray-100"},Xe=o(()=>e("td",{class:"whitespace-nowrap py-4 pl-4 pr-3 text-center text-gray-500 sm:pl-3"}," Totals ",-1)),ta={class:"whitespace-nowrap bg-green-50/40 px-3 py-4 text-center text-sm text-gray-500"},ea={class:"flex flex-col"},aa=o(()=>e("span",{class:"mr-1 text-xs"},"ISK",-1)),la={class:"text-xl text-black"},sa=o(()=>e("p",{class:"text-xs italic text-gray-400"}," vs. last month ",-1)),oa={key:0},_a=o(()=>e("p",{class:"text-xs italic text-gray-400"}," vs. same month last year ",-1)),na={key:0},ra={class:"whitespace-nowrap bg-yellow-50/30 px-3 py-4 text-center text-sm text-gray-500"},ia={class:"flex flex-col"},ca=o(()=>e("span",{class:"mr-1 text-xs"},"ISK",-1)),ma={class:"text-xl text-black"},ha=o(()=>e("p",{class:"text-xs italic text-gray-400"}," vs. last month ",-1)),ua={key:0},da=o(()=>e("p",{class:"text-xs italic text-gray-400"}," vs. same month last year ",-1)),fa={key:0},va={key:0,class:"whitespace-nowrap bg-blue-50/40 px-3 py-4 text-center text-sm text-gray-500"},pa={class:"flex flex-col"},xa=o(()=>e("span",{class:"mr-1 text-xs"},"ISK",-1)),ga={class:"text-xl text-black"},ka=o(()=>e("p",{class:"text-xs italic text-gray-400"}," vs. last month ",-1)),ya={key:0},ba=o(()=>e("p",{class:"text-xs italic text-gray-400"}," vs. same month last year ",-1)),wa={key:0},Sa={key:1,class:"bg-white"},ja=["colspan"],La={key:0,class:"grid min-w-[200px] grid-cols-2 gap-3"},Ia={class:"flex items-center"},Ma=o(()=>e("span",{class:"mr-0.5 text-xs"},"ISK",-1)),Da={class:"text-black"},Ka={class:"flex items-center"},Ta={key:1,class:"text-xs font-medium italic text-rose-500/60"},Ca={key:0,class:"whitespace-nowrap bg-yellow-50/30 px-3 py-1 text-sm text-gray-500"},Ba={class:"grid min-w-[200px] grid-cols-2 gap-3"},Ha={class:"flex items-center"},Fa={class:"flex items-center"},Ua={key:0,class:"border-t border-gray-100"},Oa=o(()=>e("td",{class:"whitespace-nowrap py-4 pl-4 pr-3 text-center text-gray-500 sm:pl-3"}," Totals ",-1)),Aa={class:"whitespace-nowrap bg-green-50/40 px-3 py-4 text-center text-sm text-gray-500"},Na={class:"flex flex-col"},$a=o(()=>e("span",{class:"mr-1 text-xs"},"ISK",-1)),Pa={class:"text-xl text-black"},Va=o(()=>e("p",{class:"text-xs italic text-gray-400"}," vs. last month ",-1)),Ea={key:0},za=o(()=>e("p",{class:"text-xs italic text-gray-400"}," vs. same month last year ",-1)),qa={key:0},Ga={class:"whitespace-nowrap bg-yellow-50/30 px-3 py-4 text-center text-sm text-gray-500"},Ja={class:"flex flex-col"},Ra=o(()=>e("span",{class:"mr-1 text-xs"},"ISK",-1)),Ya={class:"text-xl text-black"},Za=o(()=>e("p",{class:"text-xs italic text-gray-400"}," vs. last month ",-1)),Qa={key:0},Wa=o(()=>e("p",{class:"text-xs italic text-gray-400"}," vs. same month last year ",-1)),Xa={key:0},tl={class:"flex flex-wrap gap-3"},el={class:"col-span-2 flex w-full flex-col rounded-2xl border bg-white shadow"},al={class:"xl:p-3"},ll=o(()=>e("p",{class:"mt-auto border-t bg-gray-50 p-3 text-xs italic text-neutral-500"}," Distribution of items sold by category and month. ",-1)),sl={class:"flex w-full flex-col lg:flex-row"},ol={class:"flex w-full flex-col rounded-2xl border bg-white shadow lg:w-1/2"},_l={class:"flex flex-1 items-center justify-center xl:p-3"},nl={class:"mt-auto border-t bg-gray-50 p-3 text-xs italic text-neutral-500"},rl={class:"flex w-full flex-col rounded-2xl border bg-white shadow lg:w-1/2"},il={class:"flex flex-1 items-center justify-center xl:p-3"},cl={class:"mt-auto border-t bg-gray-50 p-3 text-xs italic text-neutral-500"},Q=W({__name:"OnSiteSales",setup(f){const{getMonthlySalesData:y,onSiteSalesMetricsActions:H,chartDataCategoryByMonthOptions:I,chartDataCategoryByMonthSeries:F,getCategoryByMonthData:M,chartDataCategoryBreakdownForSkaftafellOptions:D,chartDataCategoryBreakdownForSkaftafellSeries:k,getCategoryBreakdownForSkaftafellOptionsData:K,chartDataCategoryBreakdownForSolheimajokullOptions:b,chartDataCategoryBreakdownForSolheimajokullSeries:T,getCategoryBreakdownForSolheimajokullOptionsData:C}=ct(),{getCurrentDateInYmdFormat:S}=rt(),{actionIsInProgress:B}=R(),t=g(null),u=g(S()),v=g(x.Skaftafell);X(async()=>{const[d]=await Promise.all([y(u.value),M(u.value),K(u.value),C(u.value)]);d&&(t.value=d)});const N=async d=>{if(d.target instanceof HTMLInputElement){u.value=d.target.value;const[c]=await Promise.all([y(u.value),M(u.value),K(u.value),C(u.value)]);c&&(t.value=c)}};return(d,c)=>{const U=et("apexchart");return _(),z(nt,{"main-content-title":"On Site Sales"},{default:tt(()=>{var $,P,V,E;return[e("div",gt,[q(e("input",{id:"date","onUpdate:modelValue":c[0]||(c[0]=i=>u.value=i),type:"date",class:"rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm",onChange:N},null,544),[[at,u.value]]),q(e("select",{"onUpdate:modelValue":c[1]||(c[1]=i=>v.value=i),class:"rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"},[e("option",null,a(h(x).Skaftafell),1),e("option",null,a(h(x).Solheimajokull),1)],512),[[lt,v.value]])]),h(B)(h(H).getMonthlyBreakdown)?(_(),z(it,{key:0,class:"h-5 w-5 text-blue-500"})):m("",!0),e("div",null,[kt,t.value&&v.value===h(x).Skaftafell?(_(),n("div",yt,[bt,e("dl",wt,[e("div",St,[jt,e("dd",Lt,[e("p",It,[Mt,s(" "+a(t.value.current_month_skaftafell_total.toLocaleString()),1)]),e("div",{class:l(["flex items-center rounded-full px-2.5 py-0.5 text-sm font-medium md:mt-2 lg:mt-0",t.value.skaftafell_total_monthly_change<0?" bg-red-100 text-red-800":" bg-green-100 text-green-800"])},[e("div",{class:l(t.value.skaftafell_total_monthly_change<0?"rotate-180":"")},[r(w,{class:l(["h-4 w-4",t.value.skaftafell_total_monthly_change<0?"fill-red-500":"fill-green-500"])},null,8,["class"])],2),s(" "+a(t.value.skaftafell_total_monthly_change.toFixed(0))+"% ",1)],2)]),e("span",Dt,[e("span",{class:l(t.value.previous_month_skaftafell_total<t.value.current_month_skaftafell_total?"text-green-500":"text-red-500"),innerHTML:t.value.previous_month_skaftafell_total<t.value.current_month_skaftafell_total?"Up":"Down"},null,10,Kt),s(" ISK "+a(Math.abs(t.value.previous_month_skaftafell_total-t.value.current_month_skaftafell_total).toLocaleString())+" from ISK "+a(t.value.previous_month_skaftafell_total.toLocaleString())+" in "+a(t.value.display_previous_month),1)]),e("span",Tt,[e("span",{class:l(t.value.same_month_last_year_skaftafell_total<t.value.current_month_skaftafell_total?"text-green-500":"text-red-500"),innerHTML:t.value.same_month_last_year_skaftafell_total<t.value.current_month_skaftafell_total?"Up":"Down"},null,10,Ct),s(" ISK "+a(Math.abs(t.value.same_month_last_year_skaftafell_total-t.value.current_month_skaftafell_total).toLocaleString())+" from ISK "+a(t.value.same_month_last_year_skaftafell_total.toLocaleString())+" in "+a(t.value.display_same_month_last_year),1)])]),e("div",Bt,[Ht,e("dd",Ft,[e("p",Ut,[Ot,s(" "+a(t.value.current_month_skaftafell_cash_total.toLocaleString()),1)]),e("div",{class:l(["flex items-center rounded-full px-2.5 py-0.5 text-sm font-medium md:mt-2 lg:mt-0",t.value.skaftafell_cash_total_monthly_change<0?" bg-red-100 text-red-800":" bg-green-100 text-green-800"])},[e("div",{class:l(t.value.skaftafell_cash_total_monthly_change<0?"rotate-180":"")},[r(w,{class:l(["h-4 w-4",t.value.skaftafell_cash_total_monthly_change<0?"fill-red-500":"fill-green-500"])},null,8,["class"])],2),s(" "+a(t.value.skaftafell_cash_total_monthly_change.toFixed(0))+"% ",1)],2)]),e("span",At,[e("span",{class:l(t.value.previous_month_skaftafell_cash_total<t.value.current_month_skaftafell_cash_total?"text-green-500":"text-red-500"),innerHTML:t.value.previous_month_skaftafell_cash_total<t.value.current_month_skaftafell_cash_total?"Up":"Down"},null,10,Nt),s(" ISK "+a(Math.abs(t.value.previous_month_skaftafell_cash_total-t.value.current_month_skaftafell_cash_total).toLocaleString())+" from ISK "+a(t.value.previous_month_skaftafell_cash_total.toLocaleString())+" in "+a(t.value.display_previous_month),1)]),e("span",$t,[e("span",{class:l(t.value.same_month_last_year_skaftafell_cash_total<t.value.current_month_skaftafell_cash_total?"text-green-500":"text-red-500"),innerHTML:t.value.same_month_last_year_skaftafell_cash_total<t.value.current_month_skaftafell_cash_total?"Up":"Down"},null,10,Pt),s(" ISK "+a(Math.abs(t.value.same_month_last_year_skaftafell_cash_total-t.value.current_month_skaftafell_cash_total).toLocaleString())+" from ISK "+a(t.value.same_month_last_year_skaftafell_cash_total.toLocaleString())+" in "+a(t.value.display_same_month_last_year),1)])]),e("div",Vt,[Et,e("dd",zt,[e("p",qt,[Gt,s(" "+a(t.value.current_month_skaftafell_card_total.toLocaleString()),1)]),e("div",{class:l(["flex items-center rounded-full px-2.5 py-0.5 text-sm font-medium md:mt-2 lg:mt-0",t.value.skaftafell_card_total_monthly_change<0?" bg-red-100 text-red-800":" bg-green-100 text-green-800"])},[e("div",{class:l(t.value.skaftafell_card_total_monthly_change<0?"rotate-180":"")},[r(w,{class:l(["h-4 w-4",t.value.skaftafell_card_total_monthly_change<0?"fill-red-500":"fill-green-500"])},null,8,["class"])],2),s(" "+a(t.value.skaftafell_card_total_monthly_change.toFixed(0))+"% ",1)],2)]),e("span",Jt,[e("span",{class:l(t.value.previous_month_skaftafell_card_total<t.value.current_month_skaftafell_card_total?"text-green-500":"text-red-500"),innerHTML:t.value.previous_month_skaftafell_card_total<t.value.current_month_skaftafell_card_total?"Up":"Down"},null,10,Rt),s(" ISK "+a(Math.abs(t.value.previous_month_skaftafell_card_total-t.value.current_month_skaftafell_card_total).toLocaleString())+" from ISK "+a(t.value.previous_month_skaftafell_card_total.toLocaleString())+" in "+a(t.value.display_previous_month),1)]),e("span",Yt,[e("span",{class:l(t.value.same_month_last_year_skaftafell_card_total<t.value.current_month_skaftafell_card_total?"text-green-500":"text-red-500"),innerHTML:t.value.same_month_last_year_skaftafell_card_total<t.value.current_month_skaftafell_card_total?"Up":"Down"},null,10,Zt),s(" ISK "+a(Math.abs(t.value.same_month_last_year_skaftafell_card_total-t.value.current_month_skaftafell_card_total).toLocaleString())+" from ISK "+a(t.value.same_month_last_year_skaftafell_card_total.toLocaleString())+" in "+a(t.value.display_same_month_last_year),1)])])])])):m("",!0),t.value&&v.value===h(x).Solheimajokull?(_(),n("div",Qt,[Wt,e("dl",Xt,[e("div",te,[ee,e("dd",ae,[e("p",le,[se,s(" "+a(t.value.current_month_solheimajokull_total.toLocaleString()),1)]),e("div",{class:l(["flex items-center rounded-full px-2.5 py-0.5 text-sm font-medium md:mt-2 lg:mt-0",t.value.solheimajokull_total_monthly_change<0?" bg-red-100 text-red-800":" bg-green-100 text-green-800"])},[e("div",{class:l(t.value.solheimajokull_total_monthly_change<0?"rotate-180":"")},[r(w,{class:l(["h-4 w-4",t.value.solheimajokull_total_monthly_change<0?"fill-red-500":"fill-green-500"])},null,8,["class"])],2),s(" "+a(t.value.solheimajokull_total_monthly_change.toFixed(0))+"% ",1)],2)]),e("span",oe,[e("span",{class:l(t.value.previous_month_solheimajokull_total<t.value.current_month_solheimajokull_total?"text-green-500":"text-red-500"),innerHTML:t.value.previous_month_solheimajokull_total<t.value.current_month_solheimajokull_total?"Up":"Down"},null,10,_e),s(" ISK "+a(Math.abs(t.value.previous_month_solheimajokull_total-t.value.current_month_solheimajokull_total).toLocaleString())+" from ISK "+a(t.value.previous_month_solheimajokull_total.toLocaleString())+" in "+a(t.value.display_previous_month),1)]),e("span",ne,[e("span",{class:l(t.value.same_month_last_year_solheimajokull_total<t.value.current_month_solheimajokull_total?"text-green-500":"text-red-500"),innerHTML:t.value.same_month_last_year_solheimajokull_total<t.value.current_month_solheimajokull_total?"Up":"Down"},null,10,re),s(" ISK "+a(Math.abs(t.value.same_month_last_year_solheimajokull_total-t.value.current_month_solheimajokull_total).toLocaleString())+" from ISK "+a(t.value.same_month_last_year_solheimajokull_total.toLocaleString())+" in "+a(t.value.display_same_month_last_year),1)])]),e("div",ie,[ce,e("dd",me,[e("p",he,[ue,s(" "+a(t.value.current_month_solheimajokull_cash_total.toLocaleString()),1)]),e("div",{class:l(["flex items-center rounded-full px-2.5 py-0.5 text-sm font-medium md:mt-2 lg:mt-0",t.value.solheimajokull_cash_total_monthly_change<0?" bg-red-100 text-red-800":" bg-green-100 text-green-800"])},[e("div",{class:l(t.value.solheimajokull_cash_total_monthly_change<0?"rotate-180":"")},[r(w,{class:l(["h-4 w-4",t.value.solheimajokull_cash_total_monthly_change<0?"fill-red-500":"fill-green-500"])},null,8,["class"])],2),s(" "+a(t.value.solheimajokull_cash_total_monthly_change.toFixed(0))+"% ",1)],2)]),e("span",de,[e("span",{class:l(t.value.previous_month_solheimajokull_cash_total<t.value.current_month_solheimajokull_cash_total?"text-green-500":"text-red-500"),innerHTML:t.value.previous_month_solheimajokull_cash_total<t.value.current_month_solheimajokull_cash_total?"Up":"Down"},null,10,fe),s(" ISK "+a(Math.abs(t.value.previous_month_solheimajokull_cash_total-t.value.current_month_solheimajokull_cash_total).toLocaleString())+" from ISK "+a(t.value.previous_month_solheimajokull_cash_total.toLocaleString())+" in "+a(t.value.display_previous_month),1)]),e("span",ve,[e("span",{class:l(t.value.same_month_last_year_solheimajokull_cash_total<t.value.current_month_solheimajokull_cash_total?"text-green-500":"text-red-500"),innerHTML:t.value.same_month_last_year_solheimajokull_cash_total<t.value.current_month_solheimajokull_cash_total?"Up":"Down"},null,10,pe),s(" ISK "+a(Math.abs(t.value.same_month_last_year_solheimajokull_cash_total-t.value.current_month_solheimajokull_cash_total).toLocaleString())+" from ISK "+a(t.value.same_month_last_year_solheimajokull_cash_total.toLocaleString())+" in "+a(t.value.display_same_month_last_year),1)])]),e("div",xe,[ge,e("dd",ke,[e("p",ye,[be,s(" "+a(t.value.current_month_solheimajokull_card_total.toLocaleString()),1)]),e("div",{class:l(["flex items-center rounded-full px-2.5 py-0.5 text-sm font-medium md:mt-2 lg:mt-0",t.value.solheimajokull_card_total_monthly_change<0?" bg-red-100 text-red-800":" bg-green-100 text-green-800"])},[e("div",{class:l(t.value.solheimajokull_card_total_monthly_change<0?"rotate-180":"")},[r(w,{class:l(["h-4 w-4",t.value.solheimajokull_card_total_monthly_change<0?"fill-red-500":"fill-green-500"])},null,8,["class"])],2),s(" "+a(t.value.solheimajokull_card_total_monthly_change.toFixed(0))+"% ",1)],2)]),e("span",we,[e("span",{class:l(t.value.previous_month_solheimajokull_card_total<t.value.current_month_solheimajokull_card_total?"text-green-500":"text-red-500"),innerHTML:t.value.previous_month_solheimajokull_card_total<t.value.current_month_solheimajokull_card_total?"Up":"Down"},null,10,Se),s(" ISK "+a(Math.abs(t.value.previous_month_solheimajokull_card_total-t.value.current_month_solheimajokull_card_total).toLocaleString())+" from ISK "+a(t.value.previous_month_solheimajokull_card_total.toLocaleString())+" in "+a(t.value.display_previous_month),1)]),e("span",je,[e("span",{class:l(t.value.same_month_last_year_solheimajokull_card_total<t.value.current_month_solheimajokull_card_total?"text-green-500":"text-red-500"),innerHTML:t.value.same_month_last_year_solheimajokull_card_total<t.value.current_month_solheimajokull_card_total?"Up":"Down"},null,10,Le),s(" ISK "+a(Math.abs(t.value.same_month_last_year_solheimajokull_card_total-t.value.current_month_solheimajokull_card_total).toLocaleString())+" from ISK "+a(t.value.same_month_last_year_solheimajokull_card_total.toLocaleString())+" in "+a(t.value.display_same_month_last_year),1)])])])])):m("",!0),e("div",Ie,[e("div",Me,[e("div",De,[e("div",Ke,[e("table",Te,[e("thead",null,[e("tr",null,[Ce,Be,He,v.value===h(x).Skaftafell?(_(),n("th",Fe," Merchandise ")):m("",!0)])]),v.value===h(x).Skaftafell?(_(),n("tbody",Ue,[(_(!0),n(G,null,J(($=t.value)==null?void 0:$.skaftafell_daily_breakdown,(i,O)=>(_(),n("tr",{key:O},[e("td",{class:l(["whitespace-nowrap py-1 pl-4 pr-3 text-xs text-gray-500 sm:pl-3",i.report_saved?"":"bg-red-50/70 border-y border-red-100 text-rose-600/60"])},a(i.date),3),e("td",{class:l(["whitespace-nowrap px-3 py-1 text-sm text-gray-500",i.report_saved?"bg-green-50/40":"bg-red-50/70 border-y border-red-100"]),colspan:i.report_saved?"1":"3"},[i.report_saved?(_(),n("div",Ae,[e("span",Ne,[r(j,{class:"mr-1 h-4 w-4 fill-gray-600/60"}),$e,e("span",Pe,a(i.rentals.card_total.toLocaleString()),1)]),e("span",Ve,[r(L,{class:"mr-1 h-5 w-5 fill-green-600/50"}),s(" ISK "+a(i.rentals.cash_total.toLocaleString()),1)])])):(_(),n("span",Ee," No report saved. "))],10,Oe),i.report_saved?(_(),n("td",ze,[e("div",qe,[e("span",Ge,[r(j,{class:"mr-1 h-4 w-4 fill-gray-600/60"}),s(" ISK "+a(i.activities.card_total.toLocaleString()),1)]),e("span",Je,[r(L,{class:"mr-1 h-5 w-5 fill-green-600/50"}),s(" ISK "+a(i.activities.cash_total.toLocaleString()),1)])])])):m("",!0),i.report_saved?(_(),n("td",Re,[e("div",Ye,[e("span",Ze,[r(j,{class:"mr-1 h-4 w-4 fill-gray-600/60"}),s(" ISK "+a(i.merchandise.card_total.toLocaleString()),1)]),e("span",Qe,[r(L,{class:"mr-1 h-5 w-5 fill-green-600/50"}),s(" ISK "+a(i.merchandise.cash_total.toLocaleString()),1)])])])):m("",!0)]))),128)),t.value?(_(),n("tr",We,[Xe,e("td",ta,[e("div",ea,[e("div",null,[aa,e("span",la,a(t.value.current_month_skaftafell_rentals_total.toLocaleString()),1)]),sa,e("div",{class:l(["ml-1 flex items-center justify-center text-xs",t.value.current_month_skaftafell_rentals_total>t.value.last_month_skaftafell_rentals_total?"text-green-500":"text-rose-500/60"])},[t.value.current_month_skaftafell_rentals_total>t.value.last_month_skaftafell_rentals_total?(_(),n("span",oa," + ")):m("",!0),s(" "+a((t.value.current_month_skaftafell_rentals_total-t.value.last_month_skaftafell_rentals_total).toLocaleString())+" ",1),e("div",{class:l({"rotate-180":t.value.current_month_skaftafell_rentals_total<t.value.last_month_skaftafell_rentals_total})},[r(p,{class:l(["inline-block h-3 w-3 animate-bounce",t.value.current_month_skaftafell_rentals_total>t.value.last_month_skaftafell_rentals_total?"fill-green-600":"fill-rose-600"])},null,8,["class"])],2)],2),_a,e("div",{class:l(["ml-1 flex items-center justify-center text-xs",t.value.same_month_last_year_skaftafell_rentals_total<t.value.current_month_skaftafell_rentals_total?"text-green-500":"text-rose-500/60"])},[t.value.same_month_last_year_skaftafell_rentals_total<t.value.current_month_skaftafell_rentals_total?(_(),n("span",na," + ")):m("",!0),s(" "+a((t.value.current_month_skaftafell_rentals_total-t.value.same_month_last_year_skaftafell_rentals_total).toLocaleString())+" ",1),e("div",{class:l({"rotate-180":t.value.same_month_last_year_skaftafell_rentals_total>t.value.current_month_skaftafell_rentals_total})},[r(p,{class:l(["inline-block h-3 w-3 animate-bounce",t.value.same_month_last_year_skaftafell_rentals_total<t.value.current_month_skaftafell_rentals_total?"fill-green-600":"fill-rose-600"])},null,8,["class"])],2)],2)])]),e("td",ra,[e("div",ia,[e("div",null,[ca,e("span",ma,a(t.value.current_month_skaftafell_activities_total.toLocaleString()),1)]),ha,e("div",{class:l(["ml-1 flex items-center justify-center text-xs",t.value.current_month_skaftafell_activities_total>t.value.last_month_skaftafell_activities_total?"text-green-500":"text-rose-500/60"])},[t.value.current_month_skaftafell_activities_total>t.value.last_month_skaftafell_activities_total?(_(),n("span",ua," + ")):m("",!0),s(" "+a((t.value.current_month_skaftafell_activities_total-t.value.last_month_skaftafell_activities_total).toLocaleString())+" ",1),e("div",{class:l({"rotate-180":t.value.current_month_skaftafell_activities_total<t.value.last_month_skaftafell_activities_total})},[r(p,{class:l(["inline-block h-3 w-3 animate-bounce",t.value.current_month_skaftafell_activities_total>t.value.last_month_skaftafell_activities_total?"fill-green-600":"fill-rose-600"])},null,8,["class"])],2)],2),da,e("div",{class:l(["ml-1 flex items-center justify-center text-xs",t.value.same_month_last_year_skaftafell_activities_total<t.value.current_month_skaftafell_activities_total?"text-green-500":"text-rose-500/60"])},[t.value.same_month_last_year_skaftafell_activities_total<t.value.current_month_skaftafell_activities_total?(_(),n("span",fa," + ")):m("",!0),s(" "+a((t.value.current_month_skaftafell_activities_total-t.value.same_month_last_year_skaftafell_activities_total).toLocaleString())+" ",1),e("div",{class:l({"rotate-180":t.value.same_month_last_year_skaftafell_activities_total>t.value.current_month_skaftafell_activities_total})},[r(p,{class:l(["inline-block h-3 w-3 animate-bounce",t.value.same_month_last_year_skaftafell_activities_total<t.value.current_month_skaftafell_activities_total?"fill-green-600":"fill-rose-600"])},null,8,["class"])],2)],2)])]),v.value===h(x).Skaftafell?(_(),n("td",va,[e("div",pa,[e("div",null,[xa,e("span",ga,a(t.value.current_month_skaftafell_merchandise_total.toLocaleString()),1)]),ka,e("div",{class:l(["ml-1 flex items-center justify-center text-xs",t.value.current_month_skaftafell_merchandise_total>t.value.last_month_skaftafell_merchandise_total?"text-green-500":"text-rose-500/60"])},[t.value.current_month_skaftafell_merchandise_total>t.value.last_month_skaftafell_merchandise_total?(_(),n("span",ya," + ")):m("",!0),s(" "+a((t.value.current_month_skaftafell_merchandise_total-t.value.last_month_skaftafell_merchandise_total).toLocaleString())+" ",1),e("div",{class:l({"rotate-180":t.value.current_month_skaftafell_merchandise_total<t.value.last_month_skaftafell_merchandise_total})},[r(p,{class:l(["inline-block h-3 w-3 animate-bounce",t.value.current_month_skaftafell_merchandise_total>t.value.last_month_skaftafell_merchandise_total?"fill-green-600":"fill-rose-600"])},null,8,["class"])],2)],2),ba,e("div",{class:l(["ml-1 flex items-center justify-center text-xs",t.value.same_month_last_year_skaftafell_merchandise_total<t.value.current_month_skaftafell_merchandise_total?"text-green-500":"text-rose-500/60"])},[t.value.same_month_last_year_skaftafell_merchandise_total<t.value.current_month_skaftafell_merchandise_total?(_(),n("span",wa," + ")):m("",!0),s(" "+a((t.value.current_month_skaftafell_merchandise_total-t.value.same_month_last_year_skaftafell_merchandise_total).toLocaleString())+" ",1),e("div",{class:l({"rotate-180":t.value.same_month_last_year_skaftafell_merchandise_total>t.value.current_month_skaftafell_merchandise_total})},[r(p,{class:l(["inline-block h-3 w-3 animate-bounce",t.value.same_month_last_year_skaftafell_merchandise_total<t.value.current_month_skaftafell_merchandise_total?"fill-green-600":"fill-rose-600"])},null,8,["class"])],2)],2)])])):m("",!0)])):m("",!0)])):m("",!0),v.value===h(x).Solheimajokull?(_(),n("tbody",Sa,[(_(!0),n(G,null,J((P=t.value)==null?void 0:P.solheimajokull_daily_breakdown,(i,O)=>(_(),n("tr",{key:`solo${O}`},[e("td",{class:l(["whitespace-nowrap py-1 pl-4 pr-3 text-xs text-gray-500 sm:pl-3",i.report_saved?"":"bg-red-50/70 border-y border-red-100 text-rose-600/60"])},a(i.date),3),e("td",{class:l(["whitespace-nowrap px-3 py-1 text-sm text-gray-500",i.report_saved?"bg-green-50/40":"bg-red-50/70 border-y border-red-100"]),colspan:i.report_saved?"1":"3"},[i.report_saved?(_(),n("div",La,[e("span",Ia,[r(j,{class:"mr-1 h-4 w-4 fill-gray-600/60"}),Ma,e("span",Da,a(i.rentals.card_total.toLocaleString()),1)]),e("span",Ka,[r(L,{class:"mr-1 h-5 w-5 fill-green-600/50"}),s(" ISK "+a(i.rentals.cash_total.toLocaleString()),1)])])):(_(),n("span",Ta," No report saved. "))],10,ja),i.report_saved?(_(),n("td",Ca,[e("div",Ba,[e("span",Ha,[r(j,{class:"mr-1 h-4 w-4 fill-gray-600/60"}),s(" ISK "+a(i.activities.card_total.toLocaleString()),1)]),e("span",Fa,[r(L,{class:"mr-1 h-5 w-5 fill-green-600/50"}),s(" ISK "+a(i.activities.cash_total.toLocaleString()),1)])])])):m("",!0)]))),128)),t.value?(_(),n("tr",Ua,[Oa,e("td",Aa,[e("div",Na,[e("div",null,[$a,e("span",Pa,a(t.value.current_month_solheimajokull_rentals_total.toLocaleString()),1)]),Va,e("div",{class:l(["ml-1 flex items-center justify-center text-xs",t.value.current_month_solheimajokull_rentals_total>t.value.last_month_solheimajokull_rentals_total?"text-green-500":"text-rose-500/60"])},[t.value.current_month_solheimajokull_rentals_total>t.value.last_month_solheimajokull_rentals_total?(_(),n("span",Ea," + ")):m("",!0),s(" "+a((t.value.current_month_solheimajokull_rentals_total-t.value.last_month_solheimajokull_rentals_total).toLocaleString())+" ",1),e("div",{class:l({"rotate-180":t.value.current_month_solheimajokull_rentals_total<t.value.last_month_solheimajokull_rentals_total})},[r(p,{class:l(["inline-block h-3 w-3 animate-bounce",t.value.current_month_solheimajokull_rentals_total>t.value.last_month_solheimajokull_rentals_total?"fill-green-600":"fill-rose-600"])},null,8,["class"])],2)],2),za,e("div",{class:l(["ml-1 flex items-center justify-center text-xs",t.value.same_month_last_year_solheimajokull_rentals_total<t.value.current_month_solheimajokull_rentals_total?"text-green-500":"text-rose-500/60"])},[t.value.same_month_last_year_solheimajokull_rentals_total<t.value.current_month_solheimajokull_rentals_total?(_(),n("span",qa," + ")):m("",!0),s(" "+a((t.value.current_month_solheimajokull_rentals_total-t.value.same_month_last_year_solheimajokull_rentals_total).toLocaleString())+" ",1),e("div",{class:l({"rotate-180":t.value.same_month_last_year_solheimajokull_rentals_total>t.value.current_month_solheimajokull_rentals_total})},[r(p,{class:l(["inline-block h-3 w-3 animate-bounce",t.value.same_month_last_year_solheimajokull_rentals_total<t.value.current_month_solheimajokull_rentals_total?"fill-green-600":"fill-rose-600"])},null,8,["class"])],2)],2)])]),e("td",Ga,[e("div",Ja,[e("div",null,[Ra,e("span",Ya,a(t.value.current_month_solheimajokull_activities_total.toLocaleString()),1)]),Za,e("div",{class:l(["ml-1 flex items-center justify-center text-xs",t.value.current_month_solheimajokull_activities_total>t.value.last_month_solheimajokull_activities_total?"text-green-500":"text-rose-500/60"])},[t.value.current_month_solheimajokull_activities_total>t.value.last_month_solheimajokull_activities_total?(_(),n("span",Qa," + ")):m("",!0),s(" "+a((t.value.current_month_solheimajokull_activities_total-t.value.last_month_solheimajokull_activities_total).toLocaleString())+" ",1),e("div",{class:l({"rotate-180":t.value.current_month_solheimajokull_activities_total<t.value.last_month_solheimajokull_activities_total})},[r(p,{class:l(["inline-block h-3 w-3 animate-bounce",t.value.current_month_solheimajokull_activities_total>t.value.last_month_solheimajokull_activities_total?"fill-green-600":"fill-rose-600"])},null,8,["class"])],2)],2),Wa,e("div",{class:l(["ml-1 flex items-center justify-center text-xs",t.value.same_month_last_year_solheimajokull_activities_total<t.value.current_month_solheimajokull_activities_total?"text-green-500":"text-rose-500/60"])},[t.value.same_month_last_year_solheimajokull_activities_total<t.value.current_month_solheimajokull_activities_total?(_(),n("span",Xa," + ")):m("",!0),s(" "+a((t.value.current_month_solheimajokull_activities_total-t.value.same_month_last_year_solheimajokull_activities_total).toLocaleString())+" ",1),e("div",{class:l({"rotate-180":t.value.same_month_last_year_solheimajokull_activities_total>t.value.current_month_solheimajokull_activities_total})},[r(p,{class:l(["inline-block h-3 w-3 animate-bounce",t.value.same_month_last_year_solheimajokull_activities_total<t.value.current_month_solheimajokull_activities_total?"fill-green-600":"fill-rose-600"])},null,8,["class"])],2)],2)])])])):m("",!0)])):m("",!0)])])])])]),e("div",tl,[e("div",el,[e("div",al,[r(U,{width:"100%",type:h(I).chart.type,options:h(I),series:h(F)},null,8,["type","options","series"])]),ll]),e("div",sl,[e("div",ol,[e("div",_l,[r(U,{width:"100%",type:h(D).chart.type,options:h(D),series:h(k)},null,8,["type","options","series"])]),e("p",nl," Distribution of sales by category for Skaftafell for "+a((V=t.value)==null?void 0:V.display_current_month)+". ",1)]),e("div",rl,[e("div",il,[r(U,{width:"100%",type:h(b).chart.type,options:h(b),series:h(T)},null,8,["type","options","series"])]),e("p",cl," Distribution of sales by category for Sólheimajökull for "+a((E=t.value)==null?void 0:E.display_current_month)+". ",1)])])])])]}),_:1})}}}),Bs=A(Q,[["__scopeId","data-v-3ac39069"]]);Q.__docgenInfo={exportName:"default",displayName:"OnSiteSales",description:"",tags:{},sourceFiles:["D:/work/server/htdocs/aa-portal.is/src/pages/metrics/OnSiteSales.vue"]};export{Bs as default};
