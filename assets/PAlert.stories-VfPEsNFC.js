import{b as e,x as r}from"./vue.esm-bundler-CYPfFjdk.js";import{_ as j}from"./PAlert-quHLeqTA.js";import"./index-baqd9Qr3.js";import"./index-VqpYtbVe.js";import"./CheckCircleIcon-akbq8cGf.js";import"./XMarkIcon-t43a1P5Z.js";const T=["info","success","warn","danger"],E={title:"Shared/UI/PAlert",component:j,tags:["autodocs"],argTypes:{variant:{control:"select",options:T},border:{control:"boolean"},iconless:{control:"boolean"},closable:{control:"boolean"},class:{table:{disable:!0}},icon:{table:{disable:!0}},default:{table:{disable:!0}},heading:{table:{disable:!0}}},args:{variant:"info",border:!1,iconless:!1,default:"Alert content"}},a={},s={args:{variant:"info",default:()=>e("div",{class:"flex-1 md:flex md:justify-between"},[e("p",null,[r("A new software update is available. See what’s new in version 2.0.4.")]),e("p",{class:"mt-3 md:ml-6 md:mt-0"},[e("a",{class:"whitespace-nowrap font-medium hover:text-blue-600",href:"#"},[r("Details")])])])}},t={args:{iconless:!0,variant:"info",default:()=>e("div",{class:"flex-1 md:flex md:justify-between"},[e("p",null,[r("A new software update is available. See what’s new in version 2.0.4.")]),e("p",{class:"mt-3 md:ml-6 md:mt-0"},[e("a",{class:"whitespace-nowrap font-medium hover:text-blue-600",href:"#"},[r("Details")])])])}},n={args:{variant:"danger",heading:()=>e("h3",null,[r("There were 2 errors with your submission")]),default:()=>e("div",null,[e("ul",{class:"list-disc space-y-1 pl-5",role:"list"},[e("li",null,[r("Your password must be at least 8 characters")]),e("li",null,[r("Your password must include at least one pro wrestling finishing move")])])])}},o={args:{variant:"warn",heading:()=>e("h3",null,[r("Attention needed")]),default:()=>e("div",{class:"text-sm text-yellow-700"},[e("p",null,[r("Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.")])])}},l={args:{variant:"warn",border:!0,default:()=>e("div",null,[e("p",{class:"text-sm text-yellow-700"},[r("You have no credits left.")," ",e("a",{class:"font-medium text-yellow-700 underline hover:text-yellow-600",href:"#"},[r("Upgrade your account to add more credits.")])])])}},i={args:{closable:!0,variant:"success",heading:()=>e("div",{class:"flex"},[e("div",null,[r("Successfully uploaded")])])}};var d,c,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(u=(c=a.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var m,p,f;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    default: () => <div class="flex-1 md:flex md:justify-between">\r
        <p>A new software update is available. See what’s new in version 2.0.4.</p>\r
\r
        <p class="mt-3 md:ml-6 md:mt-0">\r
          <a class="whitespace-nowrap font-medium hover:text-blue-600" href="#">\r
            Details\r
          </a>\r
        </p>\r
      </div>
  }
}`,...(f=(p=s.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var v,w,h;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    iconless: true,
    variant: 'info',
    default: () => <div class="flex-1 md:flex md:justify-between">\r
        <p>A new software update is available. See what’s new in version 2.0.4.</p>\r
\r
        <p class="mt-3 md:ml-6 md:mt-0">\r
          <a class="whitespace-nowrap font-medium hover:text-blue-600" href="#">\r
            Details\r
          </a>\r
        </p>\r
      </div>
  }
}`,...(h=(w=t.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};var g,b,x;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    heading: () => <h3>There were 2 errors with your submission</h3>,
    default: () => <div>\r
        <ul class="list-disc space-y-1 pl-5" role="list">\r
          <li>Your password must be at least 8 characters</li>\r
\r
          <li>Your password must include at least one pro wrestling finishing move</li>\r
        </ul>\r
      </div>
  }
}`,...(x=(b=n.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var y,S,A;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: 'warn',
    heading: () => <h3>Attention needed</h3>,
    default: () => <div class="text-sm text-yellow-700">\r
        <p>\r
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo\r
          totam eius aperiam dolorum.\r
        </p>\r
      </div>
  }
}`,...(A=(S=o.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var D,q,W;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: 'warn',
    border: true,
    default: () => <div>\r
        <p class="text-sm text-yellow-700">\r
          You have no credits left.\r
          {' '}\r
\r
          <a class="font-medium text-yellow-700 underline hover:text-yellow-600" href="#">\r
            Upgrade your account to add more credits.\r
          </a>\r
        </p>\r
      </div>
  }
}`,...(W=(q=l.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};var Y,_,I;i.parameters={...i.parameters,docs:{...(Y=i.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    closable: true,
    variant: 'success',
    heading: () => <div class="flex">\r
        <div>\r
          Successfully uploaded\r
        </div>\r
      </div>
  }
}`,...(I=(_=i.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};const O=["Default","Info","Iconless","Danger","Warn","WarnWithBorder","Success"];export{n as Danger,a as Default,t as Iconless,s as Info,i as Success,o as Warn,l as WarnWithBorder,O as __namedExportsOrder,E as default};
