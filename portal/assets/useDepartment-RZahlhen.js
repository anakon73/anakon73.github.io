import{d as i,s as u}from"./schemas-74JEr9Jm.js";import{u as D,a as d}from"./preview-D0Pi-YKn.js";import{j as g}from"./vue.esm-bundler-CYPfFjdk.js";const o=i("departments",()=>{const t=g([]);function r(a){t.value=a}function n(){t.value=[]}return{setDepartments:r,departments:t,clearDepartments:n}});function h(){const{apiClient:t}=D(),{addToActionsInProgress:r,removeFromActionsInProgress:n,processActionError:a,resetActionsInError:p}=d(),{setDepartments:m}=o(),{departments:c}=u(o()),s={getDepartments:{id:"getDepartments",successMessage:"Departments retrieved successfully.",errorMessage:"There was a problem retrieving the departments."}};return{apiGetDepartments:async()=>{p(),r(s.getDepartments);try{const e=await t.get("/api/departments");return n(s.getDepartments),e.data.departments}catch(e){console.log(e),a(s.getDepartments,e)}},storeGetDepartments:()=>c.value,storeSetDepartments:e=>{m(e)},departmentActions:s}}export{h as u};