import{P as f,bm as v,f as y,a as n,u as l,w as _,o as b,X as V,b as t,e as h,t as u,n as w,d as U}from"./app-463fd668.js";import{_ as s,a as i,b as c}from"./TextInput-3146addd.js";import{_ as B,a as S}from"./AuthenticatedLayout-06a6203f.js";import{_ as $}from"./PrimaryButton-7fb30eb4.js";import"./SwitchLangNavbar-ce8b6596.js";const k={class:"space-y-6"},D={class:"form-container"},C=["onSubmit"],E={class:"text-lg font-medium text-gray-900 dark:text-gray-100"},N={class:"my-6 grid gap-4 grid-cols-1 sm:grid-cols-2"},j={class:"input-group input-group-merge"},z={class:"flex justify-end"},X={__name:"BasicDetails",props:{title:String,breadcrumbs:Object},emits:["close"],setup(d,{emit:g}){const m=d,e=f({client_name:"",client_id:"",client_erp_id:"",client_type:"",client_cat:"",client_sec:"",client_inds:"",client_logo:"",client_code:"",parent_company:""}),p=()=>{e.post(route("client.basicdetails.store"),{preserveScroll:!0,onSuccess:()=>{g("close"),e.reset()},onError:()=>null,onFinish:()=>null})};return v(()=>{m.show&&(e.errors={})}),(a,r)=>(b(),y("section",k,[n(l(V),{title:m.title},null,8,["title"]),n(B,null,{default:_(()=>[n(S,{title:d.title,breadcrumbs:d.breadcrumbs},null,8,["title","breadcrumbs"]),t("div",D,[t("form",{class:"p-6",onSubmit:h(p,["prevent"])},[t("h2",E,u(a.lang().label.add)+" "+u(m.title),1),t("div",N,[t("div",null,[n(s,{for:"client_id",value:a.lang().label.client_id},null,8,["value"]),n(i,{class:"form-control w-full",modelValue:l(e).client_id,"onUpdate:modelValue":r[0]||(r[0]=o=>l(e).client_id=o),type:"text",id:"client_id",name:"client_id",placeholder:a.lang().placeholder.client_id,error:l(e).errors.client_id},null,8,["modelValue","placeholder","error"]),n(c,{class:"mt-2",message:l(e).errors.client_id},null,8,["message"])]),t("div",null,[n(s,{for:"client_name",value:a.lang().label.client_name},null,8,["value"]),n(i,{class:"form-control w-full",modelValue:l(e).client_name,"onUpdate:modelValue":r[1]||(r[1]=o=>l(e).client_name=o),type:"text",name:"client_name",id:"client_name",placeholder:a.lang().placeholder.client_name,error:l(e).errors.client_name},null,8,["modelValue","placeholder","error"]),n(c,{class:"mt-2",message:l(e).errors.client_name},null,8,["message"])]),t("div",null,[n(s,{value:a.lang().label.client_logo,for:"client_logo"},null,8,["value"]),n(i,{class:"form-control w-full bg-gray-100 rounded p-2",modelValue:l(e).client_logo,"onUpdate:modelValue":r[2]||(r[2]=o=>l(e).client_logo=o),type:"file",name:"client_logo",id:"client_logo",error:l(e).errors.client_logo},null,8,["modelValue","error"]),n(c,{class:"mt-2",message:l(e).errors.client_logo},null,8,["message"])]),t("div",null,[n(s,{value:a.lang().label.client_code,for:"client_code"},null,8,["value"]),n(i,{class:"form-control w-full",type:"number",modelValue:l(e).client_code,"onUpdate:modelValue":r[3]||(r[3]=o=>l(e).client_code=o),name:"client_code",id:"client_code",placeholder:a.lang().placeholder.client_code,error:l(e).errors.client_code},null,8,["modelValue","placeholder","error"]),n(c,{class:"mt-2",message:l(e).errors.client_code},null,8,["message"])]),t("div",null,[n(s,{value:a.lang().label.client_erp_id,for:"client_erp_id",class:"form-label"},null,8,["value"]),n(i,{class:"form-control w-full",modelValue:l(e).client_erp_id,"onUpdate:modelValue":r[4]||(r[4]=o=>l(e).client_erp_id=o),type:"text",name:"client_erp_id",id:"client_erp_id",placeholder:a.lang().placeholder.client_erp_id,error:l(e).errors.client_erp_id},null,8,["modelValue","placeholder","error"]),n(c,{class:"mt-2",message:l(e).errors.client_erp_id},null,8,["message"])]),t("div",null,[n(s,{value:a.lang().label.client_cat,class:"form-label",for:"client_cat"},null,8,["value"]),t("div",j,[n(i,{type:"text",id:"client_cat",name:"client_cat",class:"form-control w-full",modelValue:l(e).client_cat,"onUpdate:modelValue":r[5]||(r[5]=o=>l(e).client_cat=o),placeholder:a.lang().placeholder.client_cat,error:l(e).errors.client_cat},null,8,["modelValue","placeholder","error"]),n(c,{class:"mt-2",message:l(e).errors.client_cat},null,8,["message"])])]),t("div",null,[n(s,{value:a.lang().label.client_sec,for:"client_sec",class:"form-label"},null,8,["value"]),n(i,{class:"form-control w-full",modelValue:l(e).client_sec,"onUpdate:modelValue":r[6]||(r[6]=o=>l(e).client_sec=o),type:"text",name:"client_sec",id:"client_sec",placeholder:a.lang().placeholder.client_sec,error:l(e).errors.client_sec},null,8,["modelValue","placeholder","error"]),n(c,{class:"mt-2",message:l(e).errors.client_sec},null,8,["message"])]),t("div",null,[n(s,{value:a.lang().label.client_inds,for:"client_inds",class:"form-label"},null,8,["value"]),n(i,{class:"form-control w-full",modelValue:l(e).client_inds,"onUpdate:modelValue":r[7]||(r[7]=o=>l(e).client_inds=o),type:"text",name:"client_inds",id:"client_inds",placeholder:a.lang().placeholder.client_inds,error:l(e).errors.client_inds},null,8,["modelValue","placeholder","error"]),n(c,{class:"mt-2",message:l(e).errors.client_inds},null,8,["message"])]),t("div",null,[n(s,{value:a.lang().label.client_type,for:"client_type",class:"form-label"},null,8,["value"]),n(i,{class:"form-control w-full",modelValue:l(e).client_type,"onUpdate:modelValue":r[8]||(r[8]=o=>l(e).client_type=o),type:"text",name:"client_type",id:"client_type",placeholder:a.lang().placeholder.client_type,error:l(e).errors.client_type},null,8,["modelValue","placeholder","error"]),n(c,{class:"mt-2",message:l(e).errors.client_type},null,8,["message"])]),t("div",null,[n(s,{value:a.lang().label.parent_company,for:"parent_company",class:"form-label"},null,8,["value"]),n(i,{class:"form-control w-full",modelValue:l(e).parent_company,"onUpdate:modelValue":r[9]||(r[9]=o=>l(e).parent_company=o),type:"text",name:"parent_company",id:"parent_company",placeholder:a.lang().placeholder.parent_company,error:l(e).errors.client_sec},null,8,["modelValue","placeholder","error"]),n(c,{class:"mt-2",message:l(e).errors.parent_company},null,8,["message"])])]),t("div",z,[n($,{class:w(["ml-3",{"opacity-25":l(e).processing}]),disabled:l(e).processing,onClick:p},{default:_(()=>[U(u(l(e).processing?a.lang().button.save+"...":a.lang().button.save),1)]),_:1},8,["class","disabled"])])],40,C)])]),_:1})]))}};export{X as default};
