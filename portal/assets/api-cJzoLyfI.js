import{P as c,V as o,b as m,c as l}from"./schemas-74JEr9Jm.js";import{o as g}from"./index-LmGWO5sK.js";function h(e){return g(e,["id","title","registrationNumber","maxCapacity"])}const d={getAll:{url:"/v1/vehicles",method:"get",schema:c(o)}},P=m(async e=>{const{url:t,method:a,schema:s}=d.getAll,n=new URLSearchParams({page:e.toString()}).toString(),{data:r,...i}=await l[a](`${t}?${n}`,s);return{data:r.map(h),...i}});export{d as e,P as g,h as n};
