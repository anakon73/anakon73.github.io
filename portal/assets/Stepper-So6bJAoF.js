import{o as e,k as t,l,e as _,F as h,H as b,C as n,b as u,u as d,G as p,D as m}from"./vue.esm-bundler-CYPfFjdk.js";import{_ as x}from"./PCircularProgress-gD-yL9l9.js";function y(f,r){return e(),t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[l("path",{"fill-rule":"evenodd",d:"M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z","clip-rule":"evenodd"})])}const v={class:"flex items-center justify-center text-xs text-gray-400"},w=["onClick"],g={key:2,class:"relative flex cursor-pointer justify-center"},k=["onClick"],C=["textContent"],j=_({__name:"Stepper",props:{steps:{}},setup(f){return(r,S)=>(e(),t("div",v,[(e(!0),t(h,null,b(r.steps,({title:i,progress:s,action:c,active:o},a)=>(e(),t("div",{key:i},[l("div",{class:"relative flex cursor-pointer items-center justify-center",onClick:c},[s===100?(e(),t("div",{key:0,class:n(["flex min-h-12 min-w-12 items-center justify-center rounded-full border bg-blue-500 md:h-12 md:w-12",o&&"text-blue-500 border-blue-500"])},[u(d(y),{class:"h-5 w-5 text-white"})],2)):s===0?(e(),t("div",{key:1,class:n(["flex min-h-12 min-w-12 items-center justify-center rounded-full border text-base md:h-12 md:w-12",o?"text-blue-500 border-blue-500":"border-gray-400"])},p(a+1),3)):s<100?(e(),t("div",g,[u(d(x),{"initial-progress":s},null,8,["initial-progress"])])):m("",!0),r.steps.length!==a+1?(e(),t("div",{key:3,class:n(["h-0.5 w-full min-w-20",r.steps[a].progress===100?"bg-blue-500":"bg-gray-400"])},null,2)):m("",!0)],8,w),l("div",{class:"absolute mt-2 flex w-12 cursor-pointer justify-center text-center",onClick:c},[l("p",{class:n(o&&"text-blue-500"),textContent:p(i)},null,10,C)],8,k)]))),128))]))}});j.__docgenInfo={exportName:"default",displayName:"Stepper",description:"",tags:{},props:[{name:"steps",required:!0,type:{name:"Array",elements:[{name:"Step"}]}}],sourceFiles:["D:/work/server/htdocs/aa-portal.is/src/features/Stepper/Stepper.vue"]};export{j as _};