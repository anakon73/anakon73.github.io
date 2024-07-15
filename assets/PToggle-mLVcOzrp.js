import{j as B,p as D,g,e as V,q as O,v as H,u as e,f as N,w as W,h as E,F as Y,I as J,z as Q,o as m,A as L,B as k,C as v,k as b,y as P,D as h,b as T,l as w,m as X,L as Z}from"./vue.esm-bundler-CYPfFjdk.js";import{u as ee,a as te}from"./index-baqd9Qr3.js";import{c as j}from"./index-VqpYtbVe.js";import{d as ae,p as oe}from"./form-TGXPuq_M.js";import{t as q,A as $,o as le,f as re,E as se,s as ne,T as ie,a as _}from"./keyboard-64MH3N5t.js";import{s as ue}from"./use-resolve-button-type-49aRxFpo.js";import{S as de,k as pe}from"./description-LPuBJoU_.js";import{r as ce}from"./XMarkIcon-_tXc_TyD.js";let A=Symbol("LabelContext");function F(){let t=N(A,null);if(t===null){let i=new Error("You used a <Label /> component, but it is not inside a parent.");throw Error.captureStackTrace&&Error.captureStackTrace(i,F),i}return t}function me({slot:t={},name:i="Label",props:u={}}={}){let r=B([]);function n(a){return r.value.push(a),()=>{let o=r.value.indexOf(a);o!==-1&&r.value.splice(o,1)}}return D(A,{register:n,slot:t,name:i,props:u}),g(()=>r.value.length>0?r.value.join(" "):void 0)}let fe=V({name:"Label",props:{as:{type:[Object,String],default:"label"},passive:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-label-${q()}`}},setup(t,{slots:i,attrs:u}){let r=F();return O(()=>H(r.register(t.id))),()=>{let{name:n="Label",slot:a={},props:o={}}=r,{id:p,passive:s,...f}=t,d={...Object.entries(o).reduce((S,[x,C])=>Object.assign(S,{[x]:e(C)}),{}),id:p};return s&&(delete d.onClick,delete d.htmlFor,delete f.onClick),$({ourProps:d,theirProps:f,slot:a,attrs:u,slots:i,name:n})}}}),I=Symbol("GroupContext"),he=V({name:"SwitchGroup",props:{as:{type:[Object,String],default:"template"}},setup(t,{slots:i,attrs:u}){let r=B(null),n=me({name:"SwitchLabel",props:{htmlFor:g(()=>{var o;return(o=r.value)==null?void 0:o.id}),onClick(o){r.value&&(o.currentTarget.tagName==="LABEL"&&o.preventDefault(),r.value.click(),r.value.focus({preventScroll:!0}))}}}),a=de({name:"SwitchDescription"});return D(I,{switchRef:r,labelledby:n,describedby:a}),()=>$({theirProps:t,ourProps:{},slot:{},slots:i,attrs:u,name:"SwitchGroup"})}}),ve=V({name:"Switch",emits:{"update:modelValue":t=>!0},props:{as:{type:[Object,String],default:"button"},modelValue:{type:Boolean,default:void 0},defaultChecked:{type:Boolean,optional:!0},form:{type:String,optional:!0},name:{type:String,optional:!0},value:{type:String,optional:!0},id:{type:String,default:()=>`headlessui-switch-${q()}`}},inheritAttrs:!1,setup(t,{emit:i,attrs:u,slots:r,expose:n}){let a=N(I,null),[o,p]=ae(g(()=>t.modelValue),l=>i("update:modelValue",l),g(()=>t.defaultChecked));function s(){p(!o.value)}let f=B(null),d=a===null?f:a.switchRef,S=ue(g(()=>({as:t.as,type:u.type})),d);n({el:d,$el:d});function x(l){l.preventDefault(),s()}function C(l){l.key===_.Space?(l.preventDefault(),s()):l.key===_.Enter&&oe(l.currentTarget)}function M(l){l.preventDefault()}let y=g(()=>{var l,c;return(c=(l=le(d))==null?void 0:l.closest)==null?void 0:c.call(l,"form")});return O(()=>{W([y],()=>{if(!y.value||t.defaultChecked===void 0)return;function l(){p(t.defaultChecked)}return y.value.addEventListener("reset",l),()=>{var c;(c=y.value)==null||c.removeEventListener("reset",l)}},{immediate:!0})}),()=>{let{id:l,name:c,value:R,form:G,...K}=t,z={checked:o.value},U={id:l,ref:d,role:"switch",type:S.value,tabIndex:0,"aria-checked":o.value,"aria-labelledby":a==null?void 0:a.labelledby.value,"aria-describedby":a==null?void 0:a.describedby.value,onClick:x,onKeyup:C,onKeypress:M};return E(Y,[c!=null&&o.value!=null?E(re,se({features:ne.Hidden,as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:o.value,form:G,name:c,value:R})):null,$({ourProps:U,theirProps:{...u,...ie(K,["modelValue","defaultChecked"])},slot:z,attrs:u,slots:r,name:"Switch"})])}}}),ge=fe,be=pe;const ye=j({base:`
  relative inline-flex shrink-0 cursor-pointer rounded-full
  focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2
  `,variants:{short:{false:`
      h-6 w-11 border-2 border-transparent
      transition-colors duration-200 ease-in-out
      `,true:"group h-5 w-10 items-center justify-center"},modelValue:{false:"bg-gray-200",true:"bg-indigo-600"}}}),ke=j({base:`
  pointer-events-none inline-block h-5 w-5 rounded-full
  border border-gray-200 bg-white shadow ring-0 duration-200 ease-in-out
  `,variants:{short:{false:"relative transition",true:"absolute left-0 transition-transform"},modelValue:{false:"translate-x-0",true:"translate-x-5"}}}),we=j({base:`
  pointer-events-none inline-block h-5 w-5 rounded-full
  bg-white shadow ring-0 duration-200 ease-in-out
  `,variants:{short:{false:"transition-transform",true:"absolute left-0 border border-gray-200 transition"},modelValue:{false:"translate-x-0",true:"translate-x-5"}}}),Ve={key:0,class:"flex grow flex-col"},Se={key:0,"aria-hidden":"true",class:"pointer-events-none absolute h-full w-full rounded-md bg-white"},xe=w("svg",{class:"h-3 w-3 text-gray-400",fill:"none",viewBox:"0 0 12 12"},[w("path",{d:"M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),Ce=[xe],Le=V({inheritAttrs:!1,__name:"PToggle",props:{modelValue:{type:Boolean},icon:{type:Boolean},short:{type:Boolean},rightLabel:{type:Boolean}},emits:["update:modelValue"],setup(t,{emit:i}){const u=t,r=i,n=J(),{short:a,icon:o}=Q(u),p=ee(u,"modelValue",r);return(s,f)=>(m(),L(e(he),{as:"div",class:v(e(te)((e(n).default||e(n).description)&&"flex items-center justify-between gap-3",s.rightLabel&&"flex-row-reverse"))},{default:k(()=>[e(n).default||e(n).description?(m(),b("div",Ve,[e(n).default?(m(),L(e(ge),{key:0,as:"span",class:"text-sm font-medium leading-6 text-gray-900",passive:""},{default:k(()=>[P(s.$slots,"default")]),_:3})):h("",!0),e(n).description?(m(),L(e(be),{key:1,as:"span",class:"text-sm text-gray-500"},{default:k(()=>[P(s.$slots,"description")]),_:3})):h("",!0)])):h("",!0),T(e(ve),X(s.$attrs,{modelValue:e(p),"onUpdate:modelValue":f[0]||(f[0]=d=>Z(p)?p.value=d:null),class:e(ye)({short:e(a),modelValue:s.modelValue})}),{default:k(()=>[e(a)?(m(),b("span",Se)):h("",!0),e(a)?(m(),b("span",{key:1,"aria-hidden":"true",class:v(["pointer-events-none absolute mx-auto h-4 w-9 rounded-full transition-colors duration-200 ease-in-out",[s.modelValue?"bg-indigo-600":"bg-gray-200"]])},null,2)):h("",!0),e(o)?h("",!0):(m(),b("span",{key:2,"aria-hidden":"true",class:v(e(we)({short:e(a),modelValue:s.modelValue}))},null,2)),e(o)?(m(),b("span",{key:3,class:v(e(ke)({short:e(a),modelValue:s.modelValue}))},[w("span",{class:v(["absolute inset-0 flex h-full w-full items-center justify-center transition-opacity",[s.modelValue?"opacity-0 duration-100 ease-out":"opacity-100 duration-200 ease-in"]]),"aria-hidden":"true"},Ce,2),w("span",{class:v(["absolute inset-0 flex h-full w-full items-center justify-center transition-opacity",[s.modelValue?"opacity-100 duration-200 ease-in":"opacity-0 duration-100 ease-out"]]),"aria-hidden":"true"},[T(e(ce),{class:"h-3 w-3 text-indigo-600"})],2)],2)):h("",!0)]),_:1},16,["modelValue","class"])]),_:3},8,["class"]))}});Le.__docgenInfo={exportName:"default",displayName:"PToggle",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"boolean"}},{name:"icon",required:!1,type:{name:"boolean"}},{name:"short",required:!1,type:{name:"boolean"}},{name:"rightLabel",required:!1,type:{name:"boolean"}}],events:[{name:"update:modelValue",type:{names:["boolean"]}}],slots:[{name:"default"},{name:"description"}],sourceFiles:["D:/work/server/htdocs/aa-portal.is/src/shared/ui/PToggle/PToggle.vue"]};export{Le as _,ve as i};