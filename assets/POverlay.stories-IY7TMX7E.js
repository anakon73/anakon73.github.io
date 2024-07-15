import{b as a,x as p}from"./vue.esm-bundler-CYPfFjdk.js";import{_ as m}from"./PButton-h9_xezBg.js";import{S as u}from"./types-bB0xgXEW.js";import{_ as s}from"./POverlay-3jPNvx4x.js";import"./vue-router-E7v71uM3.js";import"./index-baqd9Qr3.js";import"./index-VqpYtbVe.js";import"./PSpinner-cF72MsvC.js";const y={title:"Shared/UI/POverlay",component:s,args:{show:!0,spinnerSize:"base"},argTypes:{show:{control:"boolean"},spinnerSize:{control:"select",options:u},class:{table:{disable:!0}},default:{table:{disable:!0}},spinner:{table:{disable:!0}}}},r={render:e=>()=>a("div",{class:"h-32 w-32"},[a(s,e,{default:()=>[p("Content")]})])},t={render:e=>()=>a(s,e,{default:()=>[a(m,{size:e.spinnerSize},{default:()=>[p("Button")]})]})};var o,n,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => () => <div class="h-32 w-32">\r
      <POverlay {...args}>\r
        Content\r
      </POverlay>\r
    </div>
}`,...(i=(n=r.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var l,c,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => () => <POverlay {...args}>\r
      <PButton size={args.spinnerSize}>Button</PButton>\r
    </POverlay>
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const z=["Default","OverButton"];export{r as Default,t as OverButton,z as __namedExportsOrder,y as default};
