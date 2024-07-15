import{e as C,j as f,w as V,o as m,A as g,B as k,l as t,b as w,u as i,D as p,k as D,F as $,H as P,G as M,J as G,P as R,T as H,a0 as Y,a1 as j}from"./vue.esm-bundler-CYPfFjdk.js";import{s as T,u as E}from"./schemas-74JEr9Jm.js";import{u as J,a as N,M as W,A as F}from"./preview-D0Pi-YKn.js";import{_ as z}from"./VDataFilters-2mcnRfw0.js";import{_ as L}from"./FeedbackWarning-iVsjxw1W.js";import{I as K}from"./IconTickMarkCircle-2_sKm8Jk.js";import{_ as Q}from"./VActionButton-W6KHmnSu.js";import{_ as X}from"./_plugin-vue_export-helper-x3n3nnut.js";import"./index-LmGWO5sK.js";import"./vue-router-E7v71uM3.js";import"./routes-WhYxSpGG.js";import"./models-qWR1FMGP.js";import"./chunk-UXHY756F-iEg6Hh0Y.js";import"./index-C1vJkiWb.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./preview-errors-7FWlPnjy.js";import"./index-PPLHz8o0.js";import"./PDays-npMhi6Nw.js";import"./index-baqd9Qr3.js";import"./index-TCXC35p5.js";import"./index-05uTbNHo.js";import"./PPopoverPanel-RNuJphX8.js";import"./headlessui-float-sqR0azf2.js";import"./transition-qpXhaAaU.js";import"./keyboard-64MH3N5t.js";import"./open-closed-nhb_Ydho.js";import"./use-root-containers-gEPBKDr2.js";import"./use-resolve-button-type-49aRxFpo.js";import"./iframe-ufxlS10p.js";import"../sb-preview/runtime.js";import"./query-G1AwWss6.js";import"./ChevronDownIcon-AgxEjrtE.js";import"./listbox-3RN1mHPV.js";import"./form-TGXPuq_M.js";import"./DepartureList-w5NrqMJ9.js";import"./DepartureAssignStaffAndVehicles-8AoBdfT8.js";import"./api-B2HcjM2j.js";import"./api-cJzoLyfI.js";import"./PButton-h9_xezBg.js";import"./index-VqpYtbVe.js";import"./PInput-iZb_REtl.js";import"./POverlay-3jPNvx4x.js";import"./PSpinner-cF72MsvC.js";import"./IconBus-0QPjtZ9u.js";import"./IconPerson-i3ljUCnk.js";import"./SuggestedUser-4kWsZiWj.js";import"./PAvatar-wq6oK0Zr.js";import"./PlusCircleIcon-aSiXn_Mr.js";import"./SuggestedVehicle-r1TyKt-D.js";import"./ScheduledUser-esbe3tjU.js";import"./VehicleTitle-0pOySBND.js";import"./XMarkIcon-_tXc_TyD.js";import"./PPhoneLink-wKLYRG_F.js";import"./PAlert-quHLeqTA.js";import"./CheckCircleIcon-akbq8cGf.js";import"./XMarkIcon-t43a1P5Z.js";import"./PDialogTitle-rfxNVwSR.js";import"./description-LPuBJoU_.js";import"./DepartureListItem-I88AIHqM.js";import"./DepartureUpdateComment-2rt04tFb.js";import"./PTextarea-Wrr33MR5.js";import"./DepartureUpdateCommentPopover-euFlcGix.js";import"./DepartureUpdateStatus-zdhd3wV8.js";import"./PListboxLabel-U39qo3cm.js";import"./CheckIcon-WRJIoum8.js";import"./lib-Fy6oBlQ3.js";import"./PToggle-mLVcOzrp.js";import"./PRadio-sGATo2dT.js";import"./index-bhXQ3okY.js";import"./isNativeReflectConstruct-ubdnbphT.js";import"./mock-vjhcKIQW.js";import"./index-1aVAeLWL.js";import"./mock-UR5nntqf.js";import"./mock-CzN7Q16W.js";import"./mock-YoOI-P8k.js";import"./mock-psFphV_9.js";import"./mock-OgPWcINV.js";import"./useDepartment-RZahlhen.js";import"./useOperationalBase-kvvO22e1.js";import"./useRole-JNprELZd.js";import"./ProgressSpinner-lCLkagxy.js";import"./useAuth-8d_1_S6I.js";import"./IconAlert-B2oaG4cc.js";function Z(){const{apiClient:o}=J(),{addToActionsInProgress:d,removeFromActionsInProgress:c,processActionError:y,processActionSuccess:h,resetActionsInError:S,resetActionsInSuccess:_}=N(),{user:n}=T(E()),r={sendDailySummary:{id:"sendDailySummary",successMessage:"Daily Summary sent successfully.",errorMessage:"There was a problem sending the Daily Summary."},getDailySummaryByDate:{id:"getDailySummaryByDate",successMessage:"Daily Summary retrieved successfully.",errorMessage:"There was a problem retrieving the Daily Summary."}};return{user:n,dailySummaryActions:r,apiGetDailySummaryByOpBaseAndDate:async(e,l)=>{S(),d(r.getDailySummaryByDate);try{const u=await o.get("/api/daily-summary",{params:{selectedOperationalBaseId:e.id,selectedDate:l}});return c(r.getDailySummaryByDate),u.data}catch(u){y(r.getDailySummaryByDate,u)}},sendDailySummary:async e=>{S(),_(),d(r.sendDailySummary);try{await o.post("/api/daily-summary",e),c(r.sendDailySummary),h(r.sendDailySummary),setTimeout(()=>{_()},3e3)}catch(l){console.log(l),y(r.sendDailySummary,l)}}}}const ee=o=>(Y("data-v-602d2887"),o=o(),j(),o),te=ee(()=>t("p",{class:"mt-3 text-sm text-gray-500"}," This report is emailed to the contacts in the daily summary event notification for this department. It is a quick way to communicate any issues that might have arisen during the day. ",-1)),ae={class:"space-y-8 divide-y divide-gray-200 sm:space-y-5"},se={class:"space-y-6 sm:space-y-5"},re={key:2,class:"max-w-[1280px] space-y-6 sm:space-y-5"},ie={for:"departures",class:"block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"},me={class:"mt-1 sm:col-span-2 sm:mt-0"},oe=["onUpdate:modelValue"],le={class:"mt-2 text-sm text-gray-500"},ne={key:0,class:"fixed inset-x-0 top-0 flex justify-center p-2"},de={class:"w-64 rounded-md border border-green-100 bg-green-50 p-3 md:p-4"},ue={class:"flex"},pe={class:"shrink-0"},ce={class:"ml-3"},ye=["innerHTML"],O=C({__name:"Index",setup(o){const{actionIsInProgress:d,getActionSuccessMessage:c,actionIsInSuccess:y,validateForm:h}=N(),{sendDailySummary:S,apiGetDailySummaryByOpBaseAndDate:_,dailySummaryActions:n}=Z(),{user:r}=T(E()),I=f(null),a=f({selectedDepartment:null,selectedOperationalBase:null,selectedRole:null,selectedMonth:"",selectedDate:""}),e=f(null),l=f(!0),u=async v=>{a.value=v},U=async()=>{await h(I.value,async()=>{e.value&&(e.value.user=r.value,await S(e.value))})};return V(()=>a.value,async(v,b)=>{if(v!==b&&a.value.selectedDepartment&&a.value.selectedOperationalBase&&a.value.selectedDate){const s=await _(a.value.selectedOperationalBase,a.value.selectedDate);s?e.value={id:s.id,departmentId:s.departmentId,dailySummaryFormId:s.dailySummaryFormId,user:s.user?s.user:null,date:s.date,dailySummaryFormItems:s.dailySummaryFormItems,dailySummaryLogItems:s.dailySummaryLogItems,dailySummaryLogMedia:s.dailySummaryLogMedia}:e.value=null,l.value=!1}}),(v,b)=>(m(),g(W,{"main-content-title":"Daily Summary"},{default:k(()=>{var s,B;return[t("form",{ref_key:"dailySummaryFormElement",ref:I,class:"space-y-8 divide-y divide-gray-200"},[t("div",null,[w(z,{"department-permissions-required":[i(F).VIEW_DAILY_SUMMARY],"filter-by-operational-bases":"","filter-by-date":"","filter-state":a.value,onFilterStateUpdated:u},null,8,["department-permissions-required","filter-state"]),te]),t("div",ae,[t("div",se,[!l.value&&!e.value&&!i(d)(i(n).getDailySummaryByDate)?(m(),g(L,{key:0,title:"No Daily Summary form found",message:"We couldn't find a Daily Summary form for the selected department and operational base!"})):p("",!0),e.value&&e.value.id?(m(),g(L,{key:1,title:"Just so you know...",message:`A Daily Summary for ${a.value.selectedDate} was already submitted by ${(s=e.value.user)==null?void 0:s.fullName} for ${(B=a.value.selectedOperationalBase)==null?void 0:B.name}.`},null,8,["message"])):p("",!0),e.value?(m(),D("div",re,[(m(!0),D($,null,P(e.value.dailySummaryFormItems,(A,x)=>(m(),D("div",{key:x,class:"sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5"},[t("label",ie,M(A.label),1),t("div",me,[G(t("textarea",{"onUpdate:modelValue":q=>e.value.dailySummaryLogItems[x].answer=q,rows:"3",class:"block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm",maxlength:"1000",required:""},null,8,oe),[[R,e.value.dailySummaryLogItems[x].answer]]),t("p",le,M(A.question),1)])]))),128))])):p("",!0)])]),e.value&&a.value.selectedDepartment?(m(),g(Q,{key:0,action:U,"permission-required":{permission:i(F).SEND_DAILY_SUMMARIES,department:a.value.selectedDepartment},loading:i(d)(i(n).sendDailySummary),label:"Save Daily Summary"},null,8,["permission-required","loading"])):p("",!0),w(H,{name:"save"},{default:k(()=>[i(y)(i(n).sendDailySummary)?(m(),D("div",ne,[t("div",de,[t("div",ue,[t("div",pe,[w(K,{class:"h-5 w-5 fill-green-400"})]),t("div",ce,[t("p",{class:"text-sm text-green-700",innerHTML:i(c)(i(n).sendDailySummary)},null,8,ye)])])])])):p("",!0)]),_:1})],512)]}),_:1}))}}),Ht=X(O,[["__scopeId","data-v-602d2887"]]);O.__docgenInfo={exportName:"default",displayName:"daily-summary",description:"",tags:{},sourceFiles:["D:/work/server/htdocs/aa-portal.is/src/pages/daily-summary/Index.vue"]};export{Ht as default};