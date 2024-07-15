import{e as Ve,o as V,A as ze,B as De,C as z,u as d,Y as _e,k as w,D as F,y as we,b as a,l as Fe,i as Ce}from"./vue.esm-bundler-CYPfFjdk.js";import{a as qe}from"./index-baqd9Qr3.js";import{c as D}from"./index-VqpYtbVe.js";import{r as Ne}from"./XMarkIcon-t43a1P5Z.js";const i=["error","warn","success","primary","secondary","dark-blue","purple","pink"],Re=["sm","lg"],je=D({base:"inline-flex select-none items-center text-xs font-medium  ring-inset",variants:{variant:{error:"bg-red-50 text-red-700 ring-red-600/10 fill-red-500",warn:"bg-yellow-50 text-yellow-800 ring-yellow-600/20 fill-yellow-500",success:"bg-green-50 text-green-700 ring-green-600/20 fill-green-500",primary:"bg-blue-50 text-blue-700 ring-blue-700/10 fill-blue-500",secondary:"bg-gray-50 text-gray-600 ring-gray-500/10 fill-gray-400","dark-blue":"bg-indigo-50 text-indigo-700 ring-indigo-700/10 fill-indigo-500",purple:"bg-purple-50 text-purple-700 ring-purple-700/10 fill-purple-500",pink:"bg-pink-50 text-pink-700 ring-pink-700/10 fill-pink-500"},size:{sm:"px-1.5 py-0.5",lg:"px-2 py-1"},dot:{false:"",true:"gap-x-1.5"},pill:{false:"rounded-md",true:"rounded-full"},flat:{false:"ring-1",true:""},removable:{false:"",true:"gap-x-1"}}}),Oe=D({base:"h-1.5 w-1.5",variants:{variant:{error:"fill-red-500",warn:"fill-yellow-500",success:"fill-green-500",primary:"fill-blue-500",secondary:"fill-gray-400","dark-blue":"fill-indigo-500",purple:"fill-purple-500",pink:"fill-pink-500"}}}),$e=D({base:"h-3.5 w-3.5 rounded transition",variants:{variant:{error:"text-red-600/50 hover:text-red-600/75 hover:bg-red-600/20",warn:"text-yellow-700/50 hover:text-yellow-700/75 hover:bg-yellow-600/20",success:"text-green-700/50 hover:text-green-700/75 hover:bg-green-600/20",primary:"text-blue-700/50 hover:text-blue-700/75 hover:bg-blue-600/20",secondary:"text-gray-600/50 hover:text-gray-600/75 hover:bg-gray-500/20","dark-blue":"text-indigo-600/50 hover:text-indigo-600/75 hover:bg-indigo-600/20",purple:"text-purple-600/50 hover:text-purple-600/75 hover:bg-purple-600/20",pink:"text-pink-700/50 hover:text-pink-700/75 hover:bg-pink-600/20"}}}),Ae=Fe("circle",{cx:"3",cy:"3",r:"3"},null,-1),Ee=[Ae],l=Ve({__name:"PBadge",props:{class:{},as:{default:"span"},variant:{default:"primary"},size:{default:"lg"},dot:{type:Boolean},pill:{type:Boolean},flat:{type:Boolean},removable:{type:Boolean}},emits:["remove"],setup(e){const r=e;return(s,_)=>(V(),ze(_e(s.as),{class:z(d(qe)(d(je)({variant:s.variant,size:s.size,dot:s.dot,pill:s.pill,flat:s.flat,removable:s.removable}),r.class??""))},{default:De(()=>[s.dot?(V(),w("svg",{key:0,class:z(d(Oe)({variant:s.variant})),viewBox:"0 0 6 6"},Ee,2)):F("",!0),we(s.$slots,"default"),s.removable?(V(),w("button",{key:1,"aria-label":"remove",class:z(d($e)({variant:s.variant})),onClick:_[0]||(_[0]=Ie=>s.$emit("remove"))},[a(d(Ne))],2)):F("",!0)]),_:3},8,["class"]))}});l.__docgenInfo={exportName:"default",displayName:"PBadge",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"ClassValue"}},{name:"as",required:!1,type:{name:"union",elements:[{name:"Component"},{name:"AsTag"}]},defaultValue:{func:!1,value:"'span'"}},{name:"variant",required:!1,type:{name:"Variant"},defaultValue:{func:!1,value:"'primary'"}},{name:"size",required:!1,type:{name:"Size"},defaultValue:{func:!1,value:"'lg'"}},{name:"dot",required:!1,type:{name:"boolean"}},{name:"pill",required:!1,type:{name:"boolean"}},{name:"flat",required:!1,type:{name:"boolean"}},{name:"removable",required:!1,type:{name:"boolean"}}],events:[{name:"remove"}],slots:[{name:"default"}],sourceFiles:["D:/work/server/htdocs/aa-portal.is/src/shared/ui/PBadge/PBadge.vue"]};function n(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Ce(e)}const t="Badge",Ge={title:"Shared/UI/PBadge",component:l,tags:["autodocs"],argTypes:{variant:{control:"select",options:i},size:{control:"select",options:Re},class:{table:{disable:!0}},as:{table:{disable:!0}},default:{table:{disable:!0}},remove:{table:{disable:!0}}},args:{size:"lg",variant:"primary",flat:!1,pill:!1,removable:!1,dot:!1,default:t}},p={},o=(e,{slots:r})=>{var s;return a("div",{class:"flex items-center justify-center gap-12"},[(s=r.default)==null?void 0:s.call(r)])},u={render:()=>()=>{let e;return a("div",null,[a(o,null,n(e=i.map(r=>a(l,{key:r,variant:r},n(t)?t:{default:()=>[t]})))?e:{default:()=>[e]})])}},m={render:()=>()=>{let e;return a("div",null,[a(o,null,n(e=i.map(r=>a(l,{dot:!0,key:r,variant:r},n(t)?t:{default:()=>[t]})))?e:{default:()=>[e]})])}},c={render:()=>()=>{let e;return a("div",null,[a(o,null,n(e=i.map(r=>a(l,{key:r,pill:!0,variant:r},n(t)?t:{default:()=>[t]})))?e:{default:()=>[e]})])}},v={render:()=>()=>{let e;return a("div",null,[a(o,null,n(e=i.map(r=>a(l,{dot:!0,key:r,pill:!0,variant:r},n(t)?t:{default:()=>[t]})))?e:{default:()=>[e]})])}},g={render:()=>()=>{let e;return a("div",null,[a(o,null,n(e=i.map(r=>a(l,{key:r,removable:!0,variant:r},n(t)?t:{default:()=>[t]})))?e:{default:()=>[e]})])}},f={render:()=>()=>{let e;return a("div",null,[a(o,null,n(e=i.map(r=>a(l,{flat:!0,key:r,variant:r},n(t)?t:{default:()=>[t]})))?e:{default:()=>[e]})])}},B={render:()=>()=>{let e;return a("div",null,[a(o,null,n(e=i.map(r=>a(l,{flat:!0,key:r,pill:!0,variant:r},n(t)?t:{default:()=>[t]})))?e:{default:()=>[e]})])}},y={render:()=>()=>{let e;return a("div",null,[a(o,null,n(e=i.map(r=>a(l,{dot:!0,flat:!0,key:r,variant:r},n(t)?t:{default:()=>[t]})))?e:{default:()=>[e]})])}},b={render:()=>()=>{let e;return a("div",null,[a(o,null,n(e=i.map(r=>a(l,{dot:!0,flat:!0,key:r,pill:!0,variant:r},n(t)?t:{default:()=>[t]})))?e:{default:()=>[e]})])}},k={render:()=>()=>{let e;return a("div",null,[a(o,null,n(e=i.map(r=>a(l,{flat:!0,key:r,removable:!0,variant:r},n(t)?t:{default:()=>[t]})))?e:{default:()=>[e]})])}},P={render:()=>()=>{let e;return a("div",null,[a(o,null,n(e=i.map(r=>a(l,{key:r,size:"sm",variant:r},n(t)?t:{default:()=>[t]})))?e:{default:()=>[e]})])}},W={render:()=>()=>{let e;return a("div",null,[a(o,null,n(e=i.map(r=>a(l,{flat:!0,key:r,size:"sm",variant:r},n(t)?t:{default:()=>[t]})))?e:{default:()=>[e]})])}},x={render:()=>()=>{let e;return a("div",null,[a(o,null,n(e=i.map(r=>a(l,{key:r,pill:!0,size:"sm",variant:r},n(t)?t:{default:()=>[t]})))?e:{default:()=>[e]})])}},h={render:()=>()=>{let e;return a("div",null,[a(o,null,n(e=i.map(r=>a(l,{dot:!0,flat:!0,key:r,size:"sm",variant:r},n(t)?t:{default:()=>[t]})))?e:{default:()=>[e]})])}},S={render:()=>()=>{let e;return a("div",null,[a(o,null,n(e=i.map(r=>a(l,{dot:!0,flat:!0,key:r,pill:!0,size:"sm",variant:r},n(t)?t:{default:()=>[t]})))?e:{default:()=>[e]})])}};var C,q,N;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:"{}",...(N=(q=p.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};var R,j,O;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => () => <div>\r
      <BadgesWrapper>\r
        {Variant.map(variant => <PBadge key={variant} variant={variant}>\r
            {text}\r
          </PBadge>)}\r
      </BadgesWrapper>\r
    </div>
}`,...(O=(j=u.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};var $,A,E;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => () => <div>\r
      <BadgesWrapper>\r
        {Variant.map(variant => <PBadge dot key={variant} variant={variant}>\r
            {text}\r
          </PBadge>)}\r
      </BadgesWrapper>\r
    </div>
}`,...(E=(A=m.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var I,L,T;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => () => <div>\r
      <BadgesWrapper>\r
        {Variant.map(variant => <PBadge key={variant} pill variant={variant}>\r
            {text}\r
          </PBadge>)}\r
      </BadgesWrapper>\r
    </div>
}`,...(T=(L=c.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var U,Y,G;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => () => <div>\r
      <BadgesWrapper>\r
        {Variant.map(variant => <PBadge dot key={variant} pill variant={variant}>\r
            {text}\r
          </PBadge>)}\r
      </BadgesWrapper>\r
    </div>
}`,...(G=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var H,J,K;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => () => <div>\r
      <BadgesWrapper>\r
        {Variant.map(variant => <PBadge key={variant} removable variant={variant}>\r
            {text}\r
          </PBadge>)}\r
      </BadgesWrapper>\r
    </div>
}`,...(K=(J=g.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var M,Q,X;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => () => <div>\r
      <BadgesWrapper>\r
        {Variant.map(variant => <PBadge flat key={variant} variant={variant}>\r
            {text}\r
          </PBadge>)}\r
      </BadgesWrapper>\r
    </div>
}`,...(X=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,re;B.parameters={...B.parameters,docs:{...(Z=B.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => () => <div>\r
      <BadgesWrapper>\r
        {Variant.map(variant => <PBadge flat key={variant} pill variant={variant}>\r
            {text}\r
          </PBadge>)}\r
      </BadgesWrapper>\r
    </div>
}`,...(re=(ee=B.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,te,ne;y.parameters={...y.parameters,docs:{...(ae=y.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => () => <div>\r
      <BadgesWrapper>\r
        {Variant.map(variant => <PBadge dot flat key={variant} variant={variant}>\r
            {text}\r
          </PBadge>)}\r
      </BadgesWrapper>\r
    </div>
}`,...(ne=(te=y.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var le,se,ie;b.parameters={...b.parameters,docs:{...(le=b.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => () => <div>\r
      <BadgesWrapper>\r
        {Variant.map(variant => <PBadge dot flat key={variant} pill variant={variant}>\r
            {text}\r
          </PBadge>)}\r
      </BadgesWrapper>\r
    </div>
}`,...(ie=(se=b.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var oe,de,pe;k.parameters={...k.parameters,docs:{...(oe=k.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => () => <div>\r
      <BadgesWrapper>\r
        {Variant.map(variant => <PBadge flat key={variant} removable variant={variant}>\r
            {text}\r
          </PBadge>)}\r
      </BadgesWrapper>\r
    </div>
}`,...(pe=(de=k.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var ue,me,ce;P.parameters={...P.parameters,docs:{...(ue=P.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => () => <div>\r
      <BadgesWrapper>\r
        {Variant.map(variant => <PBadge key={variant} size='sm' variant={variant}>\r
            {text}\r
          </PBadge>)}\r
      </BadgesWrapper>\r
    </div>
}`,...(ce=(me=P.parameters)==null?void 0:me.docs)==null?void 0:ce.source}}};var ve,ge,fe;W.parameters={...W.parameters,docs:{...(ve=W.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: () => () => <div>\r
      <BadgesWrapper>\r
        {Variant.map(variant => <PBadge flat key={variant} size='sm' variant={variant}>\r
            {text}\r
          </PBadge>)}\r
      </BadgesWrapper>\r
    </div>
}`,...(fe=(ge=W.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};var Be,ye,be;x.parameters={...x.parameters,docs:{...(Be=x.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  render: () => () => <div>\r
      <BadgesWrapper>\r
        {Variant.map(variant => <PBadge key={variant} pill size='sm' variant={variant}>\r
            {text}\r
          </PBadge>)}\r
      </BadgesWrapper>\r
    </div>
}`,...(be=(ye=x.parameters)==null?void 0:ye.docs)==null?void 0:be.source}}};var ke,Pe,We;h.parameters={...h.parameters,docs:{...(ke=h.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: () => () => <div>\r
      <BadgesWrapper>\r
        {Variant.map(variant => <PBadge dot flat key={variant} size='sm' variant={variant}>\r
            {text}\r
          </PBadge>)}\r
      </BadgesWrapper>\r
    </div>
}`,...(We=(Pe=h.parameters)==null?void 0:Pe.docs)==null?void 0:We.source}}};var xe,he,Se;S.parameters={...S.parameters,docs:{...(xe=S.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => () => <div>\r
      <BadgesWrapper>\r
        {Variant.map(variant => <PBadge dot flat key={variant} pill size='sm' variant={variant}>\r
            {text}\r
          </PBadge>)}\r
      </BadgesWrapper>\r
    </div>
}`,...(Se=(he=S.parameters)==null?void 0:he.docs)==null?void 0:Se.source}}};const He=["Default","Large","WithDot","Pill","PillWithDot","WithRemoveButton","Flat","FlatPill","FlatWithDot","FlatPillWithDot","FlatWithRemoveButton","Small","SmallFlat","SmallPill","SmallFlatWithDot","SmallFlatPillWithDot"];export{p as Default,f as Flat,B as FlatPill,b as FlatPillWithDot,y as FlatWithDot,k as FlatWithRemoveButton,u as Large,c as Pill,v as PillWithDot,P as Small,W as SmallFlat,S as SmallFlatPillWithDot,h as SmallFlatWithDot,x as SmallPill,m as WithDot,g as WithRemoveButton,He as __namedExportsOrder,Ge as default};
