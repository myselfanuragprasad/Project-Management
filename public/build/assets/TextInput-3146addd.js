import{j as l,v as c,o as a,f as t,b as i,t as u,r as m,k as p,l as f,n as g}from"./app-463fd668.js";const k={class:"text-sm text-red-600 dark:text-red-400"},h={__name:"InputError",props:["message"],setup(e){return(s,r)=>l((a(),t("div",null,[i("p",k,u(e.message),1)],512)),[[c,e.message]])}},_={class:"block font-medium text-sm text-gray-700 dark:text-gray-300"},y={key:0},b={key:1},$={__name:"InputLabel",props:["value"],setup(e){return(s,r)=>(a(),t("label",_,[e.value?(a(),t("span",y,u(e.value),1)):(a(),t("span",b,[m(s.$slots,"default")]))]))}},v=["value"],S={__name:"TextInput",props:{modelValue:String,error:{type:String,default:null}},emits:["update:modelValue"],setup(e,{expose:s}){const r=p(null);return f(()=>{r.value.hasAttribute("autofocus")&&r.value.focus()}),s({focus:()=>r.value.focus()}),(d,o)=>(a(),t("input",{class:g([e.error?"border-red-500 dark:border-red-400 dark:bg-gray-900 dark:text-gray-300 focus:border-red-500 dark:focus:border-red-400 focus:ring-red-500 dark:focus:ring-red-400":"border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-primary dark:focus:border-primary focus:ring-primary dark:focus:ring-primary","rounded-md shadow-sm placeholder:text-gray-400 placeholder:dark:text-gray-400/50"]),value:e.modelValue,onInput:o[0]||(o[0]=n=>d.$emit("update:modelValue",n.target.value)),ref_key:"input",ref:r},null,42,v))}};export{$ as _,S as a,h as b};
