import{e as p,g as n,J as c,O as i,o as f,k as y,C as v,u as I}from"./vue.esm-bundler-CYPfFjdk.js";import{a as V}from"./index-baqd9Qr3.js";const _=["type"],b=p({__name:"PInput",props:{class:{},type:{},modelValue:{}},emits:["update:modelValue"],setup(u,{emit:r}){const t=u,a=n(()=>t.type??"text"),l=n(()=>t.modelValue),d=r,o=n({get(){const e=l.value;if(e!==void 0)switch(a.value){case"date":return e.toISOString().slice(0,10);default:return e}return l.value},set(e){let s=e;if(console.log(e),e!=null&&e!=="")switch(a.value){case"number":s=+e;break;case"date":s=new Date(e);break}else s=null;d("update:modelValue",s)}});return(e,s)=>c((f(),y("input",{"onUpdate:modelValue":s[0]||(s[0]=m=>o.value=m),type:a.value,class:v(I(V)(`block w-full rounded-md border-gray-300 shadow-sm
      focus:border-blue-500 focus:ring-blue-500 sm:text-sm`,t.class))},null,10,_)),[[i,o.value]])}});b.__docgenInfo={exportName:"default",displayName:"PInput",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"ClassValue"}},{name:"type",required:!1,type:{name:"TInputType"}},{name:"modelValue",required:!1,type:{name:"union",elements:[{name:"TSIndexedAccessType"},{name:"null"}]}}],events:[{name:"update:modelValue",type:{names:["TSIndexedAccessType"]}}],sourceFiles:["D:/work/server/htdocs/aa-portal.is/src/shared/ui/PInput/PInput.vue"]};export{b as _};
