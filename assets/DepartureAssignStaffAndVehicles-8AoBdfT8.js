import{o as r,k as c,l as o,e as le,z as ae,g as _,j as F,b as v,B as h,u as n,G as k,F as y,H as I,A as f,D as R,N as re,Y as oe,x as w}from"./vue.esm-bundler-CYPfFjdk.js";import{r as ne,n as ue}from"./schemas-74JEr9Jm.js";import{b as ie,d as ce}from"./index-baqd9Qr3.js";import{a as de,n as B}from"./index-LmGWO5sK.js";import{l as L,q as M,m as me,o as ve}from"./query-G1AwWss6.js";import{g as he}from"./api-B2HcjM2j.js";import{g as fe}from"./api-cJzoLyfI.js";import{_ as pe}from"./PButton-h9_xezBg.js";import{_ as ge}from"./PInput-iZb_REtl.js";import{_ as z}from"./POverlay-3jPNvx4x.js";import{B as _e}from"./IconBus-0QPjtZ9u.js";import{I as ye}from"./IconPerson-i3ljUCnk.js";import{_ as be}from"./SuggestedUser-4kWsZiWj.js";import{_ as xe}from"./SuggestedVehicle-r1TyKt-D.js";import{_ as ke}from"./ScheduledUser-esbe3tjU.js";function we(p,S){return r(),c("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[o("path",{"fill-rule":"evenodd",d:"M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z","clip-rule":"evenodd"})])}const Ce="user",Ie={All:"all"},Se={all:[{entity:Ce,scope:Ie.All}]};function Ve(){return M({queryKey:Se.all,queryFn:he})}function Ue(){return L(Ve())}const Ae="vehicle",De={All:"all"},Ne={all:[{entity:Ae,scope:De.All}]};function $e(p={}){return M({queryKey:Ne.all,queryFn:fe,...p})}function Te(p={}){return L($e(p))}const qe={class:"flex h-full select-none items-center justify-center text-sm font-medium text-slate-400"},Fe={class:"flex items-center justify-between"},Re={class:"flex items-center gap-4"},Be=o("p",{class:"font-medium text-gray-900 sm:text-lg"}," Select guides and vehicles ",-1),ze={class:"hidden items-center gap-1 min-[420px]:flex"},Le={class:"rounded-md border-[0.5px] border-zinc-200 bg-gray-100 px-2.5 py-0.5 font-medium text-gray-900"},Me={class:"hidden items-center gap-1 min-[420px]:flex"},je={class:"rounded-md border-[0.5px] border-zinc-200 bg-gray-100 px-2.5 py-0.5 font-medium text-gray-900"},Pe={class:"text-xs text-gray-500 sm:text-sm"},Qe={class:"mt-4 flex h-72 flex-col gap-4 sm:flex-row"},Ee={class:"flex min-w-56 flex-col gap-2"},Ke={class:"relative"},Oe=o("div",{class:"text-xs font-medium text-gray-500"}," Suggested: ",-1),Ze={class:"h-full"},Ge={key:0},He={class:"h-52 w-full overflow-y-auto rounded-md bg-gray-50 py-1 shadow shadow-slate-400/40 scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-blue-500/25 sm:h-auto"},Ye={key:0},Je={class:"mt-4 flex items-center justify-between"},We=le({__name:"DepartureAssignStaffAndVehicles",props:{scheduledDepartureId:{},tourTime:{},tourName:{},scheduledUsers:{}},emits:["close"],setup(p,{emit:S}){const j=p,{scheduledDepartureId:V,scheduledUsers:U}=ae(j),P=S,{cloned:u}=ie(U),A=_(()=>!de(U.value,u.value)),i=F(null),Q=e=>{i.value=i.value!==e?e:null},{data:D,isFetching:E}=Ue(),{data:N,isFetching:K}=Te({enabled:ne(i,A)}),{data:$,isFetching:O}=me({scheduledDepartureId:V}),g=F(null),{mutate:Z,isPending:G}=ve(),H=e=>{var s;(s=u.value)==null||s.push({userId:e,vehicleId:null}),g.value=null},Y=e=>{u.value=u.value.filter(s=>s.userId!==e)},b=_(()=>{var e;return(e=u.value)==null?void 0:e.map(s=>{var a,l;const t=(a=D.value)==null?void 0:a.find(d=>d.id===s.userId);return t?{...t,vehicle:((l=N.value)==null?void 0:l.find(d=>d.id===s.vehicleId))??null}:null}).filter(B)}),T=_(()=>{var s,t;const e=((s=g.value)==null?void 0:s.toLowerCase().trim())??"";return(t=D.value)==null?void 0:t.filter(a=>{var l;return(l=$.value)==null?void 0:l.users.includes(a.id)}).filter(a=>!u.value.some(l=>l.userId===a.id)).filter(a=>a.name.toLowerCase().includes(e))}),q=_(()=>{var s,t;const e=((s=g.value)==null?void 0:s.toLowerCase().trim())??"";return(t=N.value)==null?void 0:t.filter(a=>{var l;return(l=$.value)==null?void 0:l.vehicles.includes(a.id)}).filter(a=>!u.value.some(l=>l.vehicleId===a.id)).filter(a=>a.title.toLowerCase().includes(e))}),J=_(()=>u.value.map(e=>e.vehicleId).filter(B).length),W=e=>{u.value.find(s=>s.userId===i.value).vehicleId=e,i.value=null,g.value=""},X=e=>{u.value.find(s=>s.userId===e).vehicleId=null},ee=()=>{u.value=[],i.value=null},se=()=>{Z({scheduledDepartureId:V.value,scheduledUsers:u.value},{onSuccess:()=>{ue.success("Staff and vehicles updated"),P("close")}})},[te,C]=ce();return(e,s)=>(r(),c("form",{onSubmit:re(se,["prevent"])},[v(n(te),null,{default:h(({$slots:t})=>[o("div",qe,[(r(),f(oe(t.default)))])]),_:1}),o("div",null,[o("div",Fe,[o("div",Re,[Be,o("div",ze,[v(ye,{class:"size-5 text-slate-400"}),o("div",Le,k(b.value.length),1)]),o("div",Me,[v(n(_e),{class:"size-5 text-slate-400"}),o("div",je,k(J.value),1)])])]),o("p",Pe,k(e.tourTime)+" "+k(e.tourName),1)]),o("div",Qe,[o("div",Ee,[o("div",Ke,[v(n(ge),{modelValue:g.value,"onUpdate:modelValue":s[0]||(s[0]=t=>g.value=t),placeholder:"Search guides"},null,8,["modelValue"]),v(n(we),{class:"absolute right-4 top-[11px] size-4 text-gray-500"})]),Oe,v(n(z),{class:"flex h-32 grow flex-col gap-1 overflow-y-auto rounded-md bg-gray-50 shadow shadow-slate-400/40 scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-blue-500/25 sm:h-auto",show:n(O)||n(E)||n(K)},{default:h(()=>{var t,a;return[o("div",Ze,[i.value?(r(),c(y,{key:1},[(a=q.value)!=null&&a.length?(r(),c("div",Ge,[(r(!0),c(y,null,I(q.value,({id:l,title:d,registrationNumber:m})=>(r(),f(n(xe),{key:l,"registration-number":m,title:d,onClick:x=>W(l)},null,8,["registration-number","title","onClick"]))),128))])):(r(),f(n(C),{key:1},{default:h(()=>[w(" Not available vehicles ")]),_:1}))],64)):(r(),c(y,{key:0},[(t=T.value)!=null&&t.length?(r(!0),c(y,{key:0},I(T.value,({id:l,name:d,avatar:m})=>(r(),f(n(be),{key:l,avatar:m,name:d,onClick:x=>H(l)},null,8,["avatar","name","onClick"]))),128)):(r(),f(n(C),{key:1},{default:h(()=>[w(" Not available staff ")]),_:1}))],64))])]}),_:1},8,["show"])]),o("div",He,[b.value.length?(r(),c("div",Ye,[(r(!0),c(y,null,I(b.value,({id:t,name:a,avatar:l,phone:d,vehicle:m})=>(r(),f(n(ke),{key:t,name:a,avatar:l,phone:d,"vehicle-title":(m==null?void 0:m.title)??null,selected:t===i.value,"disable-remove":!!i.value,onClick:x=>m?void 0:Q(t),onRemove:x=>Y(t),onRemoveVehicle:x=>X(t)},null,8,["name","avatar","phone","vehicle-title","selected","disable-remove","onClick","onRemove","onRemoveVehicle"]))),128))])):(r(),f(n(C),{key:1},{default:h(()=>[w(" Drop your staff for departure here ")]),_:1}))])]),o("div",Je,[b.value.length&&!i.value?(r(),c("button",{key:0,class:"select-none text-sm font-medium text-gray-500 transition-colors duration-200 hover:text-gray-600",type:"button",onClick:ee}," Clear all ")):R("",!0),i.value?(r(),c("button",{key:1,class:"select-none text-sm font-medium text-blue-600 transition-colors duration-200 hover:text-blue-500",type:"button",onClick:s[1]||(s[1]=t=>i.value=null)}," Cancel ")):R("",!0),v(n(z),{class:"ml-auto",show:n(G)},{default:h(()=>[v(n(pe),{class:"border border-gray-300 bg-white px-10 text-black disabled:pointer-events-none disabled:bg-gray-200 disabled:text-gray-500 hover:bg-blue-200 sm:w-auto",size:"lg",type:"submit",disabled:!A.value},{default:h(()=>[w(" Save ")]),_:1},8,["disabled"])]),_:1},8,["show"])])],32))}});We.__docgenInfo={exportName:"default",displayName:"DepartureAssignStaffAndVehicles",description:"",tags:{},props:[{name:"scheduledDepartureId",required:!0,type:{name:"union",elements:[{name:"TSIndexedAccessType"},{name:"null"}]}},{name:"tourTime",required:!0,type:{name:"string"}},{name:"tourName",required:!0,type:{name:"string"}},{name:"scheduledUsers",required:!0,type:{name:"TSIndexedAccessType"}}],events:[{name:"close"}],sourceFiles:["D:/work/server/htdocs/aa-portal.is/src/features/departure/assign-staff-and-vehicles/DepartureAssignStaffAndVehicles.vue"]};export{We as _,Te as a,Ue as u};
