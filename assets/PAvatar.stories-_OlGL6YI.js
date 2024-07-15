import{b as r,x as g,i as M}from"./vue.esm-bundler-CYPfFjdk.js";import{_ as s}from"./PAvatar-wq6oK0Zr.js";import"./index-baqd9Qr3.js";import"./index-VqpYtbVe.js";const o=["xs","sm","base","lg","xl"];function h(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!M(e)}const F={title:"Shared/UI/PAvatar",component:s,tags:["autodocs"],args:{size:"base",square:!1,placeholderName:"John Doe"},argTypes:{size:{control:"select",options:o},square:{control:"boolean"},placeholderName:{control:"text"},class:{table:{disable:!0}},src:{table:{disable:!0}},default:{table:{disable:!0}},description:{table:{disable:!0}},rootClass:{table:{disable:!0}}}},t=["https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80","https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80","https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80","https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"],i={args:{src:t[0]}},n={},c=(e,{slots:a})=>{var v;return r("div",{class:"flex items-center justify-center gap-12"},[(v=a.default)==null?void 0:v.call(a)])},l={render:()=>()=>r(c,null,{default:()=>[r("div",{class:"flex -space-x-1 overflow-hidden"},[t.map(e=>r(s,{key:e,size:"xs",src:e},null))]),r("div",{class:"flex -space-x-2 overflow-hidden"},[t.map(e=>r(s,{key:e,size:"sm",src:e},null))]),r("div",{class:"flex -space-x-2 overflow-hidden"},[t.map(e=>r(s,{key:e,size:"base",src:e},null))])]})},p={render:()=>()=>{let e;return r(c,null,h(e=o.map(a=>r(s,{key:a,size:a,src:t[0]},null)))?e:{default:()=>[e]})}},d={render:()=>()=>{let e;return r(c,null,h(e=o.map(a=>r(s,{key:a,size:a,square:!0,src:t[0]},null)))?e:{default:()=>[e]})}},m={render:()=>()=>{let e;return r(c,null,h(e=o.map(a=>r(s,{key:a,size:a},null)))?e:{default:()=>[e]})}},u={render:()=>()=>{let e;return r(c,null,h(e=o.map(a=>r(s,{key:a,placeholderName:"John Doe",size:a},null)))?e:{default:()=>[e]})}},f={args:{src:t[0],default:()=>r("p",null,[g("Tom Cook")]),description:()=>r("p",null,[g("View profile")])}};var x,b,z;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    src: images[0]
  }
}`,...(z=(b=i.parameters)==null?void 0:b.docs)==null?void 0:z.source}}};var y,A,k;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(k=(A=n.parameters)==null?void 0:A.docs)==null?void 0:k.source}}};var S,W,P;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => () => <AvatarsWrapper>\r
      <div class="flex -space-x-1 overflow-hidden">\r
        {images.map(img => <PAvatar key={img} size='xs' src={img} />)}\r
      </div>\r
\r
      <div class="flex -space-x-2 overflow-hidden">\r
        {images.map(img => <PAvatar key={img} size='sm' src={img} />)}\r
      </div>\r
\r
      <div class="flex -space-x-2 overflow-hidden">\r
        {images.map(img => <PAvatar key={img} size='base' src={img} />)}\r
      </div>\r
    </AvatarsWrapper>
}`,...(P=(W=l.parameters)==null?void 0:W.docs)==null?void 0:P.source}}};var w,_,T;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => () => <AvatarsWrapper>\r
      {Size.map(size => <PAvatar key={size} size={size} src={images[0]}>\r
        </PAvatar>)}\r
    </AvatarsWrapper>
}`,...(T=(_=p.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};var q,D,j;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => () => <AvatarsWrapper>\r
      {Size.map(size => <PAvatar key={size} size={size} square src={images[0]}>\r
        </PAvatar>)}\r
    </AvatarsWrapper>
}`,...(j=(D=d.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};var I,N,J;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => () => <AvatarsWrapper>\r
      {Size.map(size => <PAvatar key={size} size={size}>\r
        </PAvatar>)}\r
    </AvatarsWrapper>
}`,...(J=(N=m.parameters)==null?void 0:N.docs)==null?void 0:J.source}}};var O,B,C;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => () => <AvatarsWrapper>\r
      {Size.map(size => <PAvatar key={size} placeholderName='John Doe' size={size}>\r
        </PAvatar>)}\r
    </AvatarsWrapper>
}`,...(C=(B=u.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var V,E,H;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    src: images[0],
    default: () => <p>Tom Cook</p>,
    description: () => <p>View profile</p>
  }
}`,...(H=(E=f.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};const K=["Default","WithoutImage","GroupStackedBottomToTop","Circular","Rounded","PlaceholderIcon","PlaceholderInitials","WithText"];export{p as Circular,i as Default,l as GroupStackedBottomToTop,m as PlaceholderIcon,u as PlaceholderInitials,d as Rounded,f as WithText,n as WithoutImage,K as __namedExportsOrder,F as default};
