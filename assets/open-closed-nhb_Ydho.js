import{n as L,t as g,j as O,g as P,f as I,p as A}from"./vue.esm-bundler-CYPfFjdk.js";import{o as b,u as M}from"./keyboard-64MH3N5t.js";var T=Object.defineProperty,$=(e,t,n)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,E=(e,t,n)=>($(e,typeof t!="symbol"?t+"":t,n),n);let C=class{constructor(){E(this,"current",this.detect()),E(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}},p=new C;function y(e){if(p.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=b(e);if(t)return t.ownerDocument}return document}let h=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var D=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(D||{}),_=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(_||{}),j=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(j||{});function x(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(h)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var N=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(N||{});function F(e,t=0){var n;return e===((n=y(e))==null?void 0:n.body)?!1:M(t,{0(){return e.matches(h)},1(){let i=e;for(;i!==null;){if(i.matches(h))return!0;i=i.parentElement}return!1}})}function Z(e){let t=y(e);L(()=>{t&&!F(t.activeElement,0)&&K(e)})}var k=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(k||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function K(e){e==null||e.focus({preventScroll:!0})}let G=["textarea","input"].join(",");function H(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,G))!=null?n:!1}function R(e,t=n=>n){return e.slice().sort((n,i)=>{let s=t(n),r=t(i);if(s===null||r===null)return 0;let u=s.compareDocumentPosition(r);return u&Node.DOCUMENT_POSITION_FOLLOWING?-1:u&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function ee(e,t){return U(x(),t,{relativeTo:e})}function U(e,t,{sorted:n=!0,relativeTo:i=null,skipElements:s=[]}={}){var r;let u=(r=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?r:document,o=Array.isArray(e)?n?R(e):e:x(e);s.length>0&&o.length>1&&(o=o.filter(c=>!s.includes(c))),i=i??u.activeElement;let w=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),a=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,o.indexOf(i))-1;if(t&4)return Math.max(0,o.indexOf(i))+1;if(t&8)return o.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),l=t&32?{preventScroll:!0}:{},v=0,f=o.length,d;do{if(v>=f||v+f<=0)return 0;let c=a+v;if(t&16)c=(c+f)%f;else{if(c<0)return 3;if(c>=f)return 1}d=o[c],d==null||d.focus(l),v+=w}while(d!==u.activeElement);return t&6&&H(d)&&d.select(),2}function V(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function W(){return/Android/gi.test(window.navigator.userAgent)}function X(){return V()||W()}function m(e,t,n){p.isServer||g(i=>{document.addEventListener(e,t,n),i(()=>document.removeEventListener(e,t,n))})}function q(e,t,n){p.isServer||g(i=>{window.addEventListener(e,t,n),i(()=>window.removeEventListener(e,t,n))})}function te(e,t,n=P(()=>!0)){function i(r,u){if(!n.value||r.defaultPrevented)return;let o=u(r);if(o===null||!o.getRootNode().contains(o))return;let w=function a(l){return typeof l=="function"?a(l()):Array.isArray(l)||l instanceof Set?l:[l]}(e);for(let a of w){if(a===null)continue;let l=a instanceof HTMLElement?a:b(a);if(l!=null&&l.contains(o)||r.composed&&r.composedPath().includes(l))return}return!F(o,N.Loose)&&o.tabIndex!==-1&&r.preventDefault(),t(r,o)}let s=O(null);m("pointerdown",r=>{var u,o;n.value&&(s.value=((o=(u=r.composedPath)==null?void 0:u.call(r))==null?void 0:o[0])||r.target)},!0),m("mousedown",r=>{var u,o;n.value&&(s.value=((o=(u=r.composedPath)==null?void 0:u.call(r))==null?void 0:o[0])||r.target)},!0),m("click",r=>{X()||s.value&&(i(r,()=>s.value),s.value=null)},!0),m("touchend",r=>i(r,()=>r.target instanceof HTMLElement?r.target:null),!0),q("blur",r=>i(r,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}let S=Symbol("Context");var z=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(z||{});function ne(){return B()!==null}function B(){return I(S,null)}function re(e){A(S,e)}export{x as E,D as N,R as O,U as P,K as S,_ as T,Z as _,te as a,F as b,p as c,z as d,V as e,N as h,y as i,B as l,ne as s,re as t,ee as v,q as w};