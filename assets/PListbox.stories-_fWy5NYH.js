import{j as i,b as p}from"./vue.esm-bundler-CYPfFjdk.js";import{_ as t}from"./PListboxLabel-U39qo3cm.js";import"./index-baqd9Qr3.js";import"./listbox-3RN1mHPV.js";import"./form-TGXPuq_M.js";import"./keyboard-64MH3N5t.js";import"./open-closed-nhb_Ydho.js";import"./use-resolve-button-type-49aRxFpo.js";import"./CheckIcon-WRJIoum8.js";const s=[{value:1,label:"Option 1"},{value:2,label:"Option 2"}],_={title:"Shared/UI/PListbox",component:t,tags:["autodocs"],argTypes:{}},e={render:()=>({components:{PListbox:t},setup(){const o=i(s[0].value);return()=>p(t,{class:"min-w-40",list:s,modelValue:o.value,"onUpdate:modelValue":l=>o.value=l},{label:"Assigned to"})}})};var n,a,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => ({
    components: {
      PListbox
    },
    setup() {
      const selected = ref(options[0].value);
      return () => <PListbox class="min-w-40" list={options} v-model={selected.value} v-slots={{
        label: 'Assigned to'
      }} />;
    }
  })
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const L=["Default"];export{e as Default,L as __namedExportsOrder,_ as default};
