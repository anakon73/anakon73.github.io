import{b as s,m as v,i as k}from"./vue.esm-bundler-CYPfFjdk.js";import"./PButton-h9_xezBg.js";import{_ as p}from"./PSpinner-cF72MsvC.js";import{S as c}from"./types-bB0xgXEW.js";import"./vue-router-E7v71uM3.js";import"./index-baqd9Qr3.js";import"./index-VqpYtbVe.js";const x=["primary","secondary"];function W(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!k(e)}const U={title:"Shared/UI/PSpinner",component:p,tags:["autodocs"],argTypes:{variant:{control:"select",options:x},size:{control:"select",options:c},class:{table:{disable:!0}},as:{table:{disable:!0}}},args:{variant:"primary",size:"base"}},n={args:{size:"sm"}},o={args:{size:"base"}},j=(e,{slots:r})=>{var a;return s("div",{class:"flex items-center justify-center gap-12"},[(a=r.default)==null?void 0:a.call(r)])},t={render:e=>{let r;return s(j,null,W(r=c.map(a=>s(p,v(e,{key:a,size:a}),null)))?r:{default:()=>[r]})}},i={args:{variant:"secondary"},render:e=>{let r;return s(j,null,W(r=c.map(a=>s(p,v(e,{key:a,size:a}),null)))?r:{default:()=>[r]})}};var m,d,l;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(l=(d=n.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var u,S,y;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: 'base'
  }
}`,...(y=(S=o.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var z,g,f;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => <SpinnerWrapper>\r
      {Size.map(size => <PSpinner {...args} key={size} size={size} />)}\r
    </SpinnerWrapper>
}`,...(f=(g=t.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var b,_,P;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  },
  render: args => <SpinnerWrapper>\r
      {Size.map(size => <PSpinner {...args} key={size} size={size} />)}\r
    </SpinnerWrapper>
}`,...(P=(_=i.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};const q=["Primary","Secondary","PrimarySizes","SecondarySizes"];export{n as Primary,t as PrimarySizes,o as Secondary,i as SecondarySizes,q as __namedExportsOrder,U as default};
