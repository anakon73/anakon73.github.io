import{e as F,I as E,z as O,o as r,k as l,J,U as H,u as a,l as K,m as Q,L as X,C,y as w,D as b,j as Y,b as h,F as Z}from"./vue.esm-bundler-CYPfFjdk.js";import{u as ee,a as k}from"./index-baqd9Qr3.js";import{u as ae}from"./index-bhXQ3okY.js";const se=["id","value"],te=["for"],ne={key:1,class:"text-gray-500"},S=F({inheritAttrs:!1,__name:"PCheckbox",props:{id:{},class:{},modelValue:{},value:{},rootClass:{},inline:{type:Boolean},rightLabel:{type:Boolean}},emits:["update:modelValue"],setup(n,{emit:t}){const e=n,f=t,o=E(),{id:$}=O(e),g=ee(e,"modelValue",f),y=ae($);return(s,v)=>(r(),l("div",{class:C(a(k)("flex items-start gap-3",s.rightLabel&&"flex-row-reverse",e.rootClass??""))},[J(K("input",Q(s.$attrs,{id:a(y),"onUpdate:modelValue":v[0]||(v[0]=z=>X(g)?g.value=z:null),value:s.value,class:a(k)([`size-4 cursor-pointer rounded border-gray-300
        text-indigo-600 focus:ring-indigo-600`],e.class),type:"checkbox"}),null,16,se),[[H,a(g)]]),a(o).default||a(o).description?(r(),l("div",{key:0,class:C([s.inline?"gap-1":" flex-col gap-2","flex flex-wrap text-sm leading-4"])},[a(o).default?(r(),l("label",{key:0,for:a(y),class:"font-medium text-gray-900"},[w(s.$slots,"default")],8,te)):b("",!0),a(o).description?(r(),l("p",ne,[w(s.$slots,"description")])):b("",!0)],2)):b("",!0)],2))}});S.__docgenInfo={exportName:"default",displayName:"PCheckbox",description:"",tags:{},props:[{name:"id",required:!1,type:{name:"string"}},{name:"class",required:!1,type:{name:"ClassValue"}},{name:"modelValue",required:!1,type:{name:"union",elements:[{name:"TModel"},{name:"TSTypeOperator"}]}},{name:"value",required:!1,type:{name:"TValue"}},{name:"rootClass",required:!1,type:{name:"ClassValue"}},{name:"inline",required:!1,type:{name:"boolean"}},{name:"rightLabel",required:!1,type:{name:"boolean"}}],events:[{name:"update:modelValue",type:{names:["TValue"]}}],slots:[{name:"default"},{name:"description"}],sourceFiles:["D:/work/server/htdocs/aa-portal.is/src/shared/ui/PCheckbox/PCheckbox.vue"]};const ie={title:"Shared/UI/PCheckbox",component:S,tags:["autodocs"],args:{inline:!1,rightLabel:!1,modelValue:!1},argTypes:{inline:{control:"boolean"},rightLabel:{control:"boolean"},modelValue:{control:"boolean"},id:{table:{disable:!0}},class:{table:{disable:!0}},rootClass:{table:{disable:!0}},value:{table:{disable:!0}},"update:modelValue":{table:{disable:!0}},default:{control:"text"},description:{control:"text"}}},i={},d={args:{default:"Comments"}},c={args:{default:"Comments",description:"Get notified when a candidate applies for a job."}},m={args:{default:"New comments",description:"New comments you always know what's happening.",inline:!0}},u={args:{default:"New comments",description:"New comments you always know what's happening.",rightLabel:!0}},p={render:()=>({setup(){const n=[{id:"small",name:"Small",description:"4 GB RAM / 2 CPUS / 80 GB SSD Storage"},{id:"medium",name:"Medium",description:"8 GB RAM / 4 CPUS / 160 GB SSD Storage"},{id:"large",name:"Large",description:"16 GB RAM / 8 CPUS / 320 GB SSD Storage"}],t=Y([n[0].id]);return()=>h(Z,null,[h("div",{class:"mb-4 flex flex-col gap-3"},[n.map(e=>h(S,{id:e.id,key:e.id,name:"plan",modelValue:t.value,"onUpdate:modelValue":f=>t.value=f,value:e.id},{default:()=>e.name,description:()=>e.description}))]),t.value.join(", ")])}})};var x,V,B;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(B=(V=i.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var G,M,P;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    default: 'Comments'
  }
}`,...(P=(M=d.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var D,N,L;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    default: 'Comments',
    description: 'Get notified when a candidate applies for a job.'
  }
}`,...(L=(N=c.parameters)==null?void 0:N.docs)==null?void 0:L.source}}};var R,U,A;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    default: 'New comments',
    description: 'New comments you always know what\\'s happening.',
    inline: true
  }
}`,...(A=(U=m.parameters)==null?void 0:U.docs)==null?void 0:A.source}}};var _,T,q;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    default: 'New comments',
    description: 'New comments you always know what\\'s happening.',
    rightLabel: true
  }
}`,...(q=(T=u.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var I,j,W;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => ({
    setup() {
      const plans = ([{
        id: 'small',
        name: 'Small',
        description: '4 GB RAM / 2 CPUS / 80 GB SSD Storage'
      }, {
        id: 'medium',
        name: 'Medium',
        description: '8 GB RAM / 4 CPUS / 160 GB SSD Storage'
      }, {
        id: 'large',
        name: 'Large',
        description: '16 GB RAM / 8 CPUS / 320 GB SSD Storage'
      }] as const);
      const selected = ref<typeof plans[number]['id'][]>([plans[0].id]);
      return () => <>\r
          <div class="mb-4 flex flex-col gap-3">\r
            {plans.map(plan => <PCheckbox id={plan.id} key={plan.id} name="plan" v-model={selected.value} v-slots={{
            default: () => plan.name,
            description: () => plan.description
          }} value={plan.id} />)}\r
          </div>\r
\r
          {selected.value.join(', ')}\r
        </>;
    }
  })
}`,...(W=(j=p.parameters)==null?void 0:j.docs)==null?void 0:W.source}}};const de=["Default","WithTitle","WithDescription","Inline","RightLabel","ArrayModelValue"];export{p as ArrayModelValue,i as Default,m as Inline,u as RightLabel,c as WithDescription,d as WithTitle,de as __namedExportsOrder,ie as default};
