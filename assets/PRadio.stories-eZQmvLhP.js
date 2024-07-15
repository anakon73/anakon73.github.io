import{j as h,b as i,F as _}from"./vue.esm-bundler-CYPfFjdk.js";import{_ as d}from"./PRadio-sGATo2dT.js";import"./index-baqd9Qr3.js";import"./index-bhXQ3okY.js";const m=["one","two"],T={title:"Shared/UI/PRadio",component:d,tags:["autodocs"],args:{inline:!1,leftLabel:!1,modelValue:"one",value:"two"},argTypes:{inline:{control:"boolean"},leftLabel:{control:"boolean"},class:{table:{disable:!0}},rootClass:{table:{disable:!0}},modelValue:{control:"select",options:m},value:{control:"select",options:m},"update:modelValue":{table:{disable:!0}},default:{control:"text"},description:{control:"text"}}},a={},r={args:{default:"Email"}},o={args:{default:"Small",description:"4 GB RAM / 2 CPUS / 80 GB SSD Storage"}},t={args:{default:"Small",description:"4 GB RAM / 2 CPUS / 80 GB SSD Storage",inline:!0}},n={args:{default:"Small",description:"4 GB RAM / 2 CPUS / 80 GB SSD Storage",leftLabel:!0}},s={render:()=>({components:{PRadio:d},setup(){const c=[{id:"small",name:"Small",description:"4 GB RAM / 2 CPUS / 80 GB SSD Storage"},{id:"medium",name:"Medium",description:"8 GB RAM / 4 CPUS / 160 GB SSD Storage"},{id:"large",name:"Large",description:"16 GB RAM / 8 CPUS / 320 GB SSD Storage"}],l=h(c[0].id);return()=>i(_,null,[i("div",{class:"mb-4 flex flex-col gap-3"},[c.map(e=>i(d,{key:e.id,modelValue:l.value,"onUpdate:modelValue":L=>l.value=L,value:e.id},{default:()=>e.name,description:()=>e.description}))]),l.value])}})};var p,u,S;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(S=(u=a.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};var g,f,B;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    default: 'Email'
  }
}`,...(B=(f=r.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var G,R,b;o.parameters={...o.parameters,docs:{...(G=o.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    default: 'Small',
    description: '4 GB RAM / 2 CPUS / 80 GB SSD Storage'
  }
}`,...(b=(R=o.parameters)==null?void 0:R.docs)==null?void 0:b.source}}};var M,P,D;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    default: 'Small',
    description: '4 GB RAM / 2 CPUS / 80 GB SSD Storage',
    inline: true
  }
}`,...(D=(P=t.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var v,U,C;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    default: 'Small',
    description: '4 GB RAM / 2 CPUS / 80 GB SSD Storage',
    leftLabel: true
  }
}`,...(C=(U=n.parameters)==null?void 0:U.docs)==null?void 0:C.source}}};var A,V,x;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => ({
    components: {
      PRadio
    },
    setup() {
      const plans = [{
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
      }];
      const selected = ref(plans[0].id);
      return () => <>\r
          <div class="mb-4 flex flex-col gap-3">\r
            {plans.map(plan => <PRadio key={plan.id} v-model={selected.value} v-slots={{
            default: () => plan.name,
            description: () => plan.description
          }} value={plan.id} />)}\r
          </div>\r
\r
          {selected.value}\r
        </>;
    }
  })
}`,...(x=(V=s.parameters)==null?void 0:V.docs)==null?void 0:x.source}}};const k=["Default","WithTitle","WithDescription","Inline","RightLabel","ModelValue"];export{a as Default,t as Inline,s as ModelValue,n as RightLabel,o as WithDescription,r as WithTitle,k as __namedExportsOrder,T as default};
