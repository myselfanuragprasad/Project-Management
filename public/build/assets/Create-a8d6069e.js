import{P as f,bm as _,f as g,a as l,w as m,o as b,b as t,t as n,u as s,d as u,n as h,e as w}from"./app-463fd668.js";import{_ as v,a as y,b as $}from"./TextInput-3146addd.js";import{_ as k,a as C}from"./SecondaryButton-3f05993d.js";import{_ as S}from"./PrimaryButton-7fb30eb4.js";const V={class:"space-y-6"},B=["onSubmit"],x={class:"text-lg font-medium text-gray-900 dark:text-gray-100"},E={class:"my-6 space-y-4"},N={class:"flex justify-end"},F={__name:"Create",props:{show:Boolean,title:String},emits:["close"],setup(p,{emit:r}){const i=p,e=f({name:""}),c=()=>{e.post(route("permission.store"),{preserveScroll:!0,onSuccess:()=>{r("close"),e.reset()},onError:()=>null,onFinish:()=>null})};return _(()=>{i.show&&(e.errors={})}),(a,o)=>(b(),g("section",V,[l(k,{show:i.show,onClose:o[2]||(o[2]=d=>r("close"))},{default:m(()=>[t("form",{class:"p-6",onSubmit:w(c,["prevent"])},[t("h2",x,n(a.lang().label.add)+" "+n(i.title),1),t("div",E,[t("div",null,[l(v,{for:"name",value:a.lang().label.role},null,8,["value"]),l(y,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:s(e).name,"onUpdate:modelValue":o[0]||(o[0]=d=>s(e).name=d),required:"",placeholder:a.lang().placeholder.name,error:s(e).errors.name},null,8,["modelValue","placeholder","error"]),l($,{class:"mt-2",message:s(e).errors.name},null,8,["message"])])]),t("div",N,[l(C,{disabled:s(e).processing,onClick:o[1]||(o[1]=d=>r("close"))},{default:m(()=>[u(n(a.lang().button.close),1)]),_:1},8,["disabled"]),l(S,{class:h(["ml-3",{"opacity-25":s(e).processing}]),disabled:s(e).processing,onClick:c},{default:m(()=>[u(n(s(e).processing?a.lang().button.add+"...":a.lang().button.add),1)]),_:1},8,["class","disabled"])])],40,B)]),_:1},8,["show"])]))}};export{F as default};