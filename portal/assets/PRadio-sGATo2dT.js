import{e as C,I as _,z as b,o as l,k as t,J as k,K as q,u as e,l as x,m as R,L as h,C as u,y as m,D as n}from"./vue.esm-bundler-CYPfFjdk.js";import{u as B,a as p}from"./index-baqd9Qr3.js";import{u as P}from"./index-bhXQ3okY.js";const w=["id","value"],I=["for"],L={key:1,class:"text-gray-500"},M=C({inheritAttrs:!1,__name:"PRadio",props:{id:{},class:{},rootClass:{},inline:{type:Boolean},leftLabel:{type:Boolean},modelValue:{},value:{}},emits:["update:modelValue"],setup(f,{emit:c}){const s=f,y=c,o=_(),{id:v,value:g}=b(s),r=B(s,"modelValue",y),i=P(v);return(a,d)=>(l(),t("div",{class:u(e(p)("flex items-start gap-3",a.leftLabel&&"flex-row-reverse",s.rootClass))},[k(x("input",R(a.$attrs,{id:e(i),"onUpdate:modelValue":d[0]||(d[0]=V=>h(r)?r.value=V:null),class:e(p)(`size-4 cursor-pointer border-gray-300 text-indigo-600
        focus:ring-indigo-600`,s.class),type:"radio",value:e(g)}),null,16,w),[[q,e(r)]]),e(o).default||e(o).description?(l(),t("div",{key:0,class:u([a.inline?"gap-1":"flex-col gap-2","flex flex-wrap text-sm leading-4"])},[e(o).default?(l(),t("label",{key:0,for:e(i),class:"font-medium text-gray-900"},[m(a.$slots,"default")],8,I)):n("",!0),e(o).description?(l(),t("p",L,[m(a.$slots,"description")])):n("",!0)],2)):n("",!0)],2))}});M.__docgenInfo={exportName:"default",displayName:"PRadio",description:"",tags:{},props:[{name:"id",required:!1,type:{name:"string"}},{name:"class",required:!1,type:{name:"ClassValue"}},{name:"rootClass",required:!1,type:{name:"ClassValue"}},{name:"inline",required:!1,type:{name:"boolean"}},{name:"leftLabel",required:!1,type:{name:"boolean"}},{name:"modelValue",required:!1,type:{name:"TModel"}},{name:"value",required:!1,type:{name:"TValue"}}],events:[{name:"update:modelValue",type:{names:["TValue"]}}],slots:[{name:"default"},{name:"description"}],sourceFiles:["D:/work/server/htdocs/aa-portal.is/src/shared/ui/PRadio/PRadio.vue"]};export{M as _};