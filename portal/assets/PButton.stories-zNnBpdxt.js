import{b as a,i as Se}from"./vue.esm-bundler-CYPfFjdk.js";import{R as ye}from"./routes-WhYxSpGG.js";import{V as he,S as s}from"./types-bB0xgXEW.js";import{_ as o}from"./PButton-h9_xezBg.js";import{r as R}from"./CheckCircleIcon-akbq8cGf.js";import{r as ze}from"./PlusIcon-Ow_R-r7y.js";import"./vue-router-E7v71uM3.js";import"./index-baqd9Qr3.js";import"./index-VqpYtbVe.js";function n(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Se(e)}const t="Button text",ve={title:"Shared/UI/PButton",component:o,tags:["autodocs"],argTypes:{variant:{control:"select",options:he},size:{control:"select",options:s},rounded:{control:"boolean"},icon:{control:"boolean"},class:{table:{disable:!0}},as:{table:{disable:!0}},type:{table:{disable:!0}},default:{table:{disable:!0}},prepend:{table:{disable:!0}},append:{table:{disable:!0}}},args:{variant:"primary",size:"base",rounded:!1,icon:!1,default:t},parameters:{design:{type:"figma",url:"https://www.figma.com/file/eL9ftYgFd36rOgWblDpWCM/tailwind-ui-figma-kit-2021-07-14?type=design&node-id=1-1183&mode=dev"}}},c={},u={args:{variant:"secondary"}},p={args:{variant:"soft"}},i={args:{rounded:!0}},l={args:{to:{name:ye.Dashboard}}},m={args:{prepend:()=>a(R,{"aria-hidden":"true",class:"h-5 w-5"},null)}},f={args:{append:()=>a(R,{"aria-hidden":"true",class:"h-5 w-5"},null)}},g={args:{rounded:!0,icon:!0,default:()=>a(ze,{"aria-hidden":"true",class:"h-5 w-5"},null)}},d=(e,{slots:r})=>{var b;return a("div",{class:"flex items-center justify-center gap-16"},[(b=r.default)==null?void 0:b.call(r)])},z={render:()=>()=>{let e;return a(d,null,n(e=s.map(r=>a(o,{key:r,size:r},n(t)?t:{default:()=>[t]})))?e:{default:()=>[e]})}},S={render:()=>()=>{let e;return a(d,null,n(e=s.map(r=>a(o,{key:r,size:r,variant:"secondary"},n(t)?t:{default:()=>[t]})))?e:{default:()=>[e]})}},y={render:()=>()=>{let e;return a(d,null,n(e=s.map(r=>a(o,{key:r,size:r,variant:"soft"},n(t)?t:{default:()=>[t]})))?e:{default:()=>[e]})}},h={render:()=>()=>{let e;return a(d,null,n(e=s.map(r=>a(o,{key:r,rounded:!0,size:r},n(t)?t:{default:()=>[t]})))?e:{default:()=>[e]})}},B={render:()=>()=>{let e;return a(d,null,n(e=s.map(r=>a(o,{key:r,size:r},{default:()=>t,prepend:()=>a(R,{"aria-hidden":"true",class:"h-5 w-5"},null)})))?e:{default:()=>[e]})}},w={render:()=>()=>{let e;return a(d,null,n(e=s.map(r=>a(o,{key:r,size:r},{default:()=>t,append:()=>a(R,{"aria-hidden":"true",class:"h-5 w-5"},null)})))?e:{default:()=>[e]})}},P={render:()=>()=>{let e;return a(d,null,n(e=s.map(r=>a(o,{icon:!0,key:r,rounded:!0,size:r},{default:()=>[a(ze,{"aria-hidden":"true",class:"h-5 w-5"},null)]})))?e:{default:()=>[e]})}};var k,I,W;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:"{}",...(W=(I=c.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var _,v,x;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...(x=(v=u.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var C,j,A;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: 'soft'
  }
}`,...(A=(j=p.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var O,V,D;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    rounded: true
  }
}`,...(D=(V=i.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var L,N,E;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    to: {
      name: Routes.Dashboard
    }
  }
}`,...(E=(N=l.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var F,M,T;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    prepend: () => <CheckCircleIcon aria-hidden="true" class="h-5 w-5" />
  }
}`,...(T=(M=m.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var U,Y,$;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    append: () => <CheckCircleIcon aria-hidden="true" class="h-5 w-5" />
  }
}`,...($=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var q,G,H;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    rounded: true,
    icon: true,
    default: () => <PlusIcon aria-hidden="true" class="h-5 w-5" />
  }
}`,...(H=(G=g.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,Q;z.parameters={...z.parameters,docs:{...(J=z.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => () => <ButtonsWrapper>\r
      {Size.map(size => <PButton key={size} size={size}>\r
          {text}\r
        </PButton>)}\r
    </ButtonsWrapper>
}`,...(Q=(K=z.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Z,ee;S.parameters={...S.parameters,docs:{...(X=S.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => () => <ButtonsWrapper>\r
      {Size.map(size => <PButton key={size} size={size} variant='secondary'>\r
          {text}\r
        </PButton>)}\r
    </ButtonsWrapper>
}`,...(ee=(Z=S.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,ae,te;y.parameters={...y.parameters,docs:{...(re=y.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => () => <ButtonsWrapper>\r
      {Size.map(size => <PButton key={size} size={size} variant='soft'>\r
          {text}\r
        </PButton>)}\r
    </ButtonsWrapper>
}`,...(te=(ae=y.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var ne,se,oe;h.parameters={...h.parameters,docs:{...(ne=h.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => () => <ButtonsWrapper>\r
      {Size.map(size => <PButton key={size} rounded size={size}>\r
          {text}\r
        </PButton>)}\r
    </ButtonsWrapper>
}`,...(oe=(se=h.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var de,ce,ue;B.parameters={...B.parameters,docs:{...(de=B.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => () => <ButtonsWrapper>\r
      {Size.map(size => <PButton key={size} size={size}>\r
          {{
        default: () => text,
        prepend: () => <CheckCircleIcon aria-hidden="true" class="h-5 w-5" />
      }}\r
\r
        </PButton>)}\r
    </ButtonsWrapper>
}`,...(ue=(ce=B.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var pe,ie,le;w.parameters={...w.parameters,docs:{...(pe=w.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => () => <ButtonsWrapper>\r
      {Size.map(size => <PButton key={size} size={size}>\r
          {{
        default: () => text,
        append: () => <CheckCircleIcon aria-hidden="true" class="h-5 w-5" />
      }}\r
\r
        </PButton>)}\r
    </ButtonsWrapper>
}`,...(le=(ie=w.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var me,fe,ge;P.parameters={...P.parameters,docs:{...(me=P.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => () => <ButtonsWrapper>\r
      {Size.map(size => <PButton icon key={size} rounded size={size}>\r
          <PlusIcon aria-hidden="true" class="h-5 w-5" />\r
\r
        </PButton>)}\r
    </ButtonsWrapper>
}`,...(ge=(fe=P.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};const xe=["Primary","Secondary","Soft","Rounded","RouterLink","PrependIcon","AppendIcon","Icon","PrimaryRow","SecondaryRow","SoftRow","RoundedRow","PrependIconRow","AppendIconRow","IconRow"];export{f as AppendIcon,w as AppendIconRow,g as Icon,P as IconRow,m as PrependIcon,B as PrependIconRow,c as Primary,z as PrimaryRow,i as Rounded,h as RoundedRow,l as RouterLink,u as Secondary,S as SecondaryRow,p as Soft,y as SoftRow,xe as __namedExportsOrder,ve as default};
