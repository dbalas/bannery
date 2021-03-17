var e=Object.assign;import{o as t,c as a,a as n,w as o,v as l,t as r,b as s,F as d,r as i,d as u,f as c,e as p,s as m,g as b,h as y,i as f,K as g,u as h,C as v,j as w,k as x,l as S,m as _,n as q,V as j}from"./vendor.ff445402.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(a){const n=new URL(e,location),o=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((a,l)=>{const r=new URL(e,n);if(self[t].moduleMap[r])return a(self[t].moduleMap[r]);const s=new Blob([`import * as m from '${r}';`,`${t}.moduleMap['${r}']=m;`],{type:"text/javascript"}),d=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(s),onerror(){l(new Error(`Failed to import: ${e}`)),o(d)},onload(){a(self[t].moduleMap[r]),o(d)}});document.head.appendChild(d)})),self[t].moduleMap={}}}("assets/");const k={props:{modelValue:{required:!0},required:{type:Boolean,default:!1},label:{type:String,required:!0},config:{type:Object,default:()=>({type:"text"})},readOnly:{type:Boolean,default:!1},uuid:{type:Number,default:0},validation:{type:Object,default:()=>({})},type:{type:String,default:"text"},validations:{type:Object,default:()=>({})}},computed:{labelHtml(){const e=this.validations._exclusive&&this.validations._exclusive.required?' <span class="label--required">*</span>':"";return this.label+e}},methods:{update(e){this.$emit("update:modelValue",e)}}},O={class:"mb-5"};k.render=function(e,s,d,i,u,c){return t(),a("div",O,[n("label",{class:"text-gray-700",for:d.uuid,innerHTML:c.labelHtml},null,8,["for","innerHTML"]),n("input",{class:"mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0",type:d.type,value:d.modelValue,required:d.required,id:d.uuid,disabled:d.readOnly,onInput:s[1]||(s[1]=e=>c.update(e.target.value))},null,40,["type","value","required","id","disabled"]),o(n("p",{textContent:r(d.validation.errorMessage)},null,8,["textContent"]),[[l,d.validation.errorMessage]])])};const V={props:{modelValue:{required:!0},required:{type:Boolean,default:!1},label:{type:String,required:!0},config:{type:Object,default:()=>({type:"text"})},readOnly:{type:Boolean,default:!1},uuid:{type:Number,default:0},validation:{type:Object,default:()=>({})},type:{type:String,default:"text"},validations:{type:Object,default:()=>({})}},computed:{labelHtml(){const e=this.validations._exclusive&&this.validations._exclusive.required?' <span class="label--required">*</span>':"";return this.label+e}},methods:{update(e){this.$emit("update:modelValue",e)}}},L={class:"mb-5"};V.render=function(e,s,d,i,u,c){return t(),a("div",L,[n("label",{class:"text-gray-700",for:d.uuid,innerHTML:c.labelHtml},null,8,["for","innerHTML"]),n("textarea",{class:"mt-1 block w-full bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 resize border rounded-md whitespace-pre",rows:"6",value:d.modelValue,required:d.required,id:d.uuid,disabled:d.readOnly,onInput:s[1]||(s[1]=e=>c.update(e.target.value))},null,40,["value","required","id","disabled"]),o(n("p",{textContent:r(d.validation.errorMessage)},null,8,["textContent"]),[[l,d.validation.errorMessage]])])};const M={props:{modelValue:{required:!0},required:{type:Boolean,default:!1},config:{type:Object,default:()=>{}},uuid:{type:Number,default:0},label:{type:String,required:!0},options:{type:Array,required:!0},disableNoSelection:{type:Boolean,default:!1},validations:{type:Object,default:()=>({})}},computed:{labelHtml(){const e=this.validations._exclusive&&this.validations._exclusive.required?' <span class="label--required">*</span>':"";return this.label+e}},methods:{update(e){this.$emit("update:modelValue",e)}}},C={class:"mb-5"},H={key:0};M.render=function(e,o,l,u,c,p){return t(),a("div",C,[n("label",{class:"text-gray-700",for:l.uuid,innerHTML:p.labelHtml},null,8,["for","innerHTML"]),n("select",{class:"block w-full mt-1 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0",value:l.modelValue,required:l.required,id:l.uuid,onInput:o[1]||(o[1]=e=>p.update(e.target.value))},[l.disableNoSelection?s("",!0):(t(),a("option",H)),(t(!0),a(d,null,i(l.options,(e=>(t(),a("option",{key:e,value:e,selected:e===l.modelValue},r(e),9,["value","selected"])))),128))],40,["value","required","id"])])};const T={props:{modelValue:{required:!0},required:{type:Boolean,default:!1},config:{type:Object,default:()=>{}},label:{type:String,required:!0}},methods:{update(e){this.$emit("update:modelValue",e)}}},D={class:"mb-5"},B={class:"text-gray-700 inline-flex items-center"};T.render=function(e,o,l,s,d,i){return t(),a("div",D,[n("label",B,[n("input",{class:"rounded bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 text-gray-700 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 mr-2",type:"checkbox",checked:l.modelValue,onInput:o[1]||(o[1]=e=>i.update(e.target.checked))},null,40,["checked"]),u(" "+r(l.label),1)])])};const U=new Date,F=new Date(U);F.setDate(F.getDate()+1);const N={title:"**Bannery**",description:"Simple embeddable component for displaying a banner",position:"bottom",enabled:!0,buttons:{primaryLink:"https://github.com/embedmode/bannery/releases",primaryText:"Join us",secondaryText:"Close"},display:{startDate:U,endDate:F,mode:""},themeClass:"bannery-default-theme",animation:"slide-up-fade",css:".bannery-default-theme {\n  background: #4b5971;\n  font-family: Roboto;\n}\n\n.bannery-default-theme .bannery__buttons__primary {\n  color: white;\n  background: #ed8b00;\n}\n\n.bannery-default-theme .bannery__buttons__primary:hover {\n  background: #c77500;\n}\n\n.bannery-default-theme .bannery__buttons__secondary {\n  color: white;\n  background: transparent;\n}\n\n.bannery-default-theme .bannery__buttons__secondary:hover {\n  text-decoration: none;\n}\n\n.bannery-default-theme .bannery__title {\n  color: white;\n}\n\n.bannery-default-theme .bannery__description {\n  color: white;\n}"},R={display:{component:c.SchemaForm,schema:{startDate:{component:k,label:"Start date",type:"datetime-local"},endDate:{component:k,label:"End date",type:"datetime-local"},mode:{component:M,label:"Mode",options:["session","cookie"]}}}},$={themeClass:{component:k,label:"Theme class"},animation:{component:k,label:"Animation"},css:{component:V,label:"CSS"}},E={title:{component:k,label:"Title"},description:{component:k,label:"Description"},position:{component:M,label:"Position",options:["top","bottom"]},enabled:{component:T,label:"Enabled"},buttons:{component:c.SchemaForm,schema:{primaryLink:{component:k,label:"Primary link",type:"url"},primaryText:{component:k,label:"Primary text"},secondaryText:{component:k,label:"Secondary text"}}}},P={components:{SchemaForm:c.SchemaForm},setup(){const t=p(e({},N)),a=m(E),n=m(R),o=m($);function l(e){for(var t in e)if("object"==typeof e[t]&&Object.keys(e[t]).length)l(e[t]);else if("boolean"!=typeof e[t]&&"[object Date]"!==Object.prototype.toString.call(e[t])&&(0===Object.keys(e[t]).length||""===e[t])){delete e[t];continue}}function r(){if(window.innerHeight+window.pageYOffset-100>=document.body.offsetHeight)return;document.querySelector(".json").style.marginTop=window.scrollY+"px"}const s=b((()=>{const e=JSON.parse(JSON.stringify(t.value));return l(e),e}));return y((()=>{window.addEventListener("scroll",r)})),f((()=>{window.removeEventListener("scroll",r)})),{data:t,schema:a,displaySchema:n,styleSchema:o,clear:function(){t.value=e({},N)},copy:function(){const e=h();v(JSON.stringify(s.value,null,2)),e.success("Copied!",{timeout:1500,hideProgressBar:!0})},show:function(){g({options:s.value})},cleanData:s}}},I={class:"container mx-auto p-4 grid grid-cols-2 gap-6"},J=n("h1",{class:"text-3xl border-b py-4 mb-4"},"Bannery options generator",-1),A={class:"json relative"},Y={class:"overflow-auto"},z={class:"language-json rounded-lg p-5"},K={class:"py-5"};P.render=function(e,l,s,d,i,u){const c=w("SchemaForm"),p=x("highlightjs");return t(),a("div",I,[n("form",{onSubmit:l[4]||(l[4]=S(((...t)=>e.formSubmit&&e.formSubmit(...t)),["prevent"]))},[J,n(c,{class:"bg-white shadow-lg rounded-lg overflow-hidden p-7 mb-7",schema:d.schema,modelValue:d.data,"onUpdate:modelValue":l[1]||(l[1]=e=>d.data=e)},null,8,["schema","modelValue"]),n(c,{class:"bg-white shadow-lg rounded-lg overflow-hidden p-7 mb-7",schema:d.displaySchema,modelValue:d.data,"onUpdate:modelValue":l[2]||(l[2]=e=>d.data=e)},null,8,["schema","modelValue"]),n(c,{class:"bg-white shadow-lg rounded-lg overflow-hidden p-7 mb-7",schema:d.styleSchema,modelValue:d.data,"onUpdate:modelValue":l[3]||(l[3]=e=>d.data=e)},null,8,["schema","modelValue"])],32),n("div",A,[o(n("pre",Y,[n("code",z,r(d.cleanData),1)],512),[[p]]),n("div",K,[n("button",{class:"border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-8 py-2 mr-4 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline",onClick:l[5]||(l[5]=(...e)=>d.clear&&d.clear(...e)),type:"button"}," Reset "),n("button",{class:"border border-gray-700 bg-gray-700 text-white rounded-md px-8 py-2 mr-4 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline",onClick:l[6]||(l[6]=(...e)=>d.show&&d.show(...e))}," Show "),n("button",{class:"border border-blue-400 bg-blue-400 text-white rounded-md px-8 py-2 transition duration-500 ease select-none hover:bg-blue-500 focus:outline-none focus:shadow-outline",onClick:l[7]||(l[7]=(...e)=>d.copy&&d.copy(...e)),type:"button"}," Copy ")])])])};const G=_(P);G.use(q),G.use(j,{}),G.mount("#app");
