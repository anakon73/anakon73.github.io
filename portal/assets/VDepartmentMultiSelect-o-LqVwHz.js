import{e as j,Q as D,j as m,q as E,w as q,o,k as c,l as n,u as p,A as B,D as f,F as k,H as w,N as O,x as H,G as C}from"./vue.esm-bundler-CYPfFjdk.js";import{u as L}from"./useDepartment-RZahlhen.js";import{P as I}from"./ProgressSpinner-lCLkagxy.js";import{a as Q}from"./preview-D0Pi-YKn.js";import{u as S}from"./useOperationalBase-kvvO22e1.js";const R={class:"space-y-4"},T={class:"flex w-full items-center justify-between"},U=n("p",{class:"text-sm font-medium text-gray-700"}," Departments ",-1),z={class:"relative grid grid-cols-1 gap-3"},J={class:"flex h-5 items-center"},K=["id","checked","onChange"],W={class:"ml-3 text-sm"},X=["onClick"],Y={key:0,class:"flex gap-3"},Z=n("span",{class:"text-gray-500"}," Operational Base: ",-1),ee={class:"flex flex-wrap gap-3"},te={class:"flex h-5 items-center gap-2"},se=["id","checked","onChange"],ae=["onClick"],ne={class:"text-sm leading-none"},le=j({__name:"VDepartmentMultiSelect",props:{selectedDepartments:{default:()=>[]},selectedDepartmentsModifiers:{},selectedOperationalBases:{default:()=>[]},selectedOperationalBasesModifiers:{}},emits:["update:selectedDepartments","update:selectedOperationalBases"],setup(h){const{apiGetOperationalBasesByDepartments:M}=S(),l=D(h,"selectedDepartments"),i=D(h,"selectedOperationalBases"),d=m([]),{departmentActions:b,apiGetDepartments:F}=L(),{actionIsInProgress:g}=Q(),{operationalBaseActions:N}=S(),v=m(!0),_=m();E(async()=>{try{_.value=await F()}catch(e){console.log(e)}finally{v.value=!1}});const V=()=>new Promise(e=>{const a=window.confirm("Deselecting this department will remove all department-specific changes you've made. Are you sure?");e(a)}),x=async e=>{var s,t,r;e.primary=!1;let a=-1;(s=l.value)!=null&&s.length&&(a=l.value.findIndex(u=>u.id===e.id)),a>=0?await V()&&((t=l.value)==null||t.splice(a,1),i.value=i.value.filter(G=>G.department.id!==e.id)):(r=l.value)==null||r.push(e)},A=e=>{var a,s;return((a=l.value)==null?void 0:a.length)===0?!1:((s=l.value)==null?void 0:s.findIndex(t=>t.id===e.id))>=0},P=e=>i.value.findIndex(a=>a.id===e.id)>=0,$=async()=>{try{const e=await M(l.value);e&&(d.value=e)}catch(e){console.log(e)}finally{v.value=!1}},y=e=>{var s,t,r;let a=-1;(s=i.value)!=null&&s.length&&(a=i.value.findIndex(u=>u.id===e.id)),a>=0?(t=i.value)==null||t.splice(a,1):(r=i.value)==null||r.push(e)};return q(()=>l.value,async()=>{await $(),l.value.length>0&&l.value.forEach(e=>{const a=d.value.filter(s=>s.department.id===e.id);a.length>0&&i.value.filter(t=>t.department.id===e.id).length===0&&i.value.push(a[0])})},{deep:!0,immediate:!0}),(e,a)=>(o(),c("div",R,[n("div",T,[U,p(g)(p(b).getDepartments)?(o(),B(I,{key:0,class:"h-3 w-3 text-blue-500"})):f("",!0)]),n("div",z,[(o(!0),c(k,null,w(_.value,s=>(o(),c("div",{key:s.id,class:"flex items-start"},[n("div",J,[n("input",{id:s.id.toString(),type:"checkbox",checked:A(s),class:"h-4 w-4 cursor-pointer rounded border-gray-300 text-blue-600 focus:ring-blue-500",onChange:t=>x(s)},null,40,K)]),n("div",W,[n("button",{class:"flex items-center gap-1 font-medium text-gray-700",onClick:O(t=>x(s),["prevent"])},[H(C(s.name)+" ",1),p(g)(p(N).getOperationalBasesByDepartments)?(o(),B(I,{key:0,class:"h-3 w-3 text-blue-500"})):f("",!0)],8,X),d.value.filter(t=>t.department.id===s.id).length>1?(o(),c("div",Y,[Z,n("ul",ee,[(o(!0),c(k,null,w(d.value.filter(t=>t.department.id===s.id),t=>(o(),c("li",{key:t.id,class:"flex items-center gap-2"},[n("div",te,[n("input",{id:t.id.toString(),type:"checkbox",checked:P(t),class:"h-4 w-4 cursor-pointer rounded border-gray-300 text-blue-600 focus:ring-blue-500",onChange:r=>y(t)},null,40,se),n("button",{class:"flex items-start text-gray-700",onClick:O(r=>y(t),["prevent"])},[n("span",ne,C(t.name),1)],8,ae)])]))),128))])])):f("",!0)])]))),128))])]))}});le.__docgenInfo={exportName:"default",displayName:"VDepartmentMultiSelect",description:"",tags:{},sourceFiles:["D:/work/server/htdocs/aa-portal.is/src/shared/ui/inputs/VDepartmentMultiSelect.vue"]};export{le as _};
