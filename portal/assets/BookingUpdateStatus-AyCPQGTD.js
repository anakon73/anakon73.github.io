import{o as r,k as c,l,e as F,z as L,A as p,B as o,u as e,b as s,C as n,D as u,x as U,G as y,F as w,N as V,H as M}from"./vue.esm-bundler-CYPfFjdk.js";import{n as T}from"./schemas-74JEr9Jm.js";import{M as z}from"./headlessui-float-sqR0azf2.js";import{B as t}from"./models-qWR1FMGP.js";import{i as D}from"./index-LmGWO5sK.js";import{a as f}from"./index-baqd9Qr3.js";import{_ as $}from"./POverlay-3jPNvx4x.js";import"./query-G1AwWss6.js";import{u as Z}from"./query-RcMfahOO.js";import{j as E,A as G,F as H,I as P}from"./listbox-3RN1mHPV.js";import{r as R}from"./CheckCircleIcon-akbq8cGf.js";import{r as J}from"./ChevronDownIcon-AgxEjrtE.js";function K(g,v){return r(),c("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[l("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z","clip-rule":"evenodd"})])}const O={key:2,class:"h-5 w-5 rounded-full border-2 border-dashed border-gray-500 transition-transform group-hover:animate-spin"},Q={class:"flex items-center justify-center justify-items-center gap-1 border-l px-4 transition-colors hover:bg-gray-100"},W=F({__name:"BookingUpdateStatus",props:{tourBookingId:{},status:{},totalCount:{},arrivedCount:{},hideLabel:{type:Boolean}},setup(g){const v=g,{arrivedCount:C,tourBookingId:k,totalCount:x,status:a}=L(v),_=[{label:"Confirmed",value:t.Confirmed,color:f("bg-gray-500")},{label:"Arrived",value:t.Arrived,color:f("bg-green-500")},{label:"No Show",value:t.Cancelled,color:f("bg-red-500")}],{mutate:B,isPending:S}=Z(),h=i=>{B({tourBookingId:k.value,status:i},{onSuccess(){T.success({message:"Booking status updated"})}})},A=()=>{a.value!==t.Cancelled&&h(a.value===t.Confirmed?t.Arrived:t.Confirmed)};return(i,b)=>(r(),p(e(P),{"onUpdate:modelValue":b[0]||(b[0]=m=>h(m))},{default:o(({open:m})=>[s(e(z),{as:"div",class:n(["relative",i.hideLabel?"min-w-36":"min-w-48"]),placement:"bottom","floating-as":"template",enter:"transition duration-200 ease-out","enter-from":"scale-90 opacity-0","enter-to":"scale-100 opacity-100",leave:"transition duration-150 ease-in","leave-from":"scale-100 opacity-100","leave-to":"scale-90 opacity-0","tailwindcss-origin-class":"",flip:""},{default:o(()=>[s(e($),{show:e(S)},{default:o(()=>[s(e(E),{class:"flex w-full select-none items-stretch rounded-md border border-gray-200 shadow-md transition-shadow hover:shadow-lg"},{default:o(()=>[l("div",{class:n(["group flex grow items-center justify-center gap-2 px-4 py-2.5 transition-colors",[e(a)!==e(t).Cancelled&&"hover:bg-gray-100",e(a)===e(t).Cancelled&&"cursor-not-allowed"]]),onClick:V(A,["stop"])},[e(a)===e(t).Arrived?(r(),p(e(R),{key:0,class:n(["h-6 w-6 group-hover:animate-pulse",e(C)!==e(x)?"text-green-300":"text-green-500"])},null,8,["class"])):u("",!0),e(a)===e(t).Cancelled?(r(),p(e(K),{key:1,class:"h-6 w-6 rotate-45 text-red-500"})):u("",!0),e(a)===e(t).Confirmed?(r(),c("span",O)):u("",!0),i.hideLabel?u("",!0):(r(),c(w,{key:3},[U(y(e(D)([e(t).Confirmed,e(t).Arrived],e(a))?"Arrived":"No show"),1)],64))],2),l("div",Q,[s(e(J),{class:n(["size-6 transition-transform",[m&&"-scale-100"]])},null,8,["class"])])]),_:2},1024)]),_:2},1032,["show"]),s(e(G),{as:"ul",class:"flex w-full flex-col justify-between rounded-md border border-gray-200 shadow-md"},{default:o(()=>[(r(),c(w,null,M(_,({label:I,value:d,color:N})=>s(e(H),{key:d,value:d,as:"li",class:"cursor-default",disabled:d===e(a)},{default:o(({active:j,disabled:q})=>[l("button",{class:n(["flex w-full items-center gap-2 px-5 py-2 transition-colors",[j||e(a)===d?"bg-gray-200":"bg-white",q&&"pointer-events-none cursor-default"]])},[l("div",{class:n(["h-1.5 w-1.5 rounded-full",N])},null,2),l("p",null,y(I),1)],2)]),_:2},1032,["value","disabled"])),64))]),_:1})]),_:2},1032,["class"])]),_:1}))}});W.__docgenInfo={exportName:"default",displayName:"BookingUpdateStatus",description:"",tags:{},props:[{name:"tourBookingId",required:!0,type:{name:"TSIndexedAccessType"}},{name:"status",required:!0,type:{name:"Status"}},{name:"totalCount",required:!0,type:{name:"number"}},{name:"arrivedCount",required:!0,type:{name:"union",elements:[{name:"number"},{name:"null"}]}},{name:"hideLabel",required:!1,type:{name:"boolean"}}],sourceFiles:["D:/work/server/htdocs/aa-portal.is/src/features/booking/update-booking-status/BookingUpdateStatus.vue"]};export{W as _};