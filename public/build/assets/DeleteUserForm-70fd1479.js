import{k as _,P as y,f as h,b as a,t as o,a as t,w as r,aq as w,o as k,d as i,u as l,br as b,n as v}from"./app-463fd668.js";import{_ as m}from"./DangerButton-824dd117.js";import{_ as x,a as C,b as V}from"./TextInput-3146addd.js";import{_ as $,a as U}from"./SecondaryButton-3f05993d.js";const D={class:"space-y-6"},B={class:"text-lg font-medium text-gray-900 dark:text-gray-100"},K={class:"mt-1 text-sm text-gray-600 dark:text-gray-400"},N={class:"p-6"},S={class:"text-lg font-medium text-gray-900 dark:text-gray-100"},E={class:"mt-1 text-sm text-gray-600 dark:text-gray-400"},F={class:"mt-6"},I={class:"mt-6 flex justify-end"},P={__name:"DeleteUserForm",setup(T){const n=_(!1),c=_(null),e=y({password:""}),f=()=>{n.value=!0,w(()=>c.value.focus())},u=()=>{e.delete(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>d(),onError:()=>c.value.focus(),onFinish:()=>e.reset()})},d=()=>{n.value=!1,e.reset()};return(s,p)=>(k(),h("section",D,[a("header",null,[a("h2",B,o(s.lang().profile.delete_account),1),a("p",K,o(s.lang().profile.delete_account_caption),1)]),t(m,{onClick:f},{default:r(()=>[i(o(s.lang().button.delete_account),1)]),_:1}),t($,{show:n.value,onClose:d},{default:r(()=>[a("div",N,[a("h2",S,o(s.lang().profile.delete_account_modal_title),1),a("p",E,o(s.lang().profile.delete_account_modal_caption),1),a("div",F,[t(x,{for:"password",value:s.lang().label.password,class:"sr-only"},null,8,["value"]),t(C,{id:"password",ref_key:"passwordInput",ref:c,modelValue:l(e).password,"onUpdate:modelValue":p[0]||(p[0]=g=>l(e).password=g),type:"password",class:"mt-1 block w-full",onKeyup:b(u,["enter"]),placeholder:s.lang().placeholder.password,error:l(e).errors.password},null,8,["modelValue","onKeyup","placeholder","error"]),t(V,{message:l(e).errors.password,class:"mt-2"},null,8,["message"])]),a("div",I,[t(U,{onClick:d},{default:r(()=>[i(o(s.lang().button.close),1)]),_:1}),t(m,{class:v(["ml-3",{"opacity-25":l(e).processing}]),disabled:l(e).processing,onClick:u},{default:r(()=>[i(o(l(e).processing?s.lang().button.delete_account+"...":s.lang().button.delete_account),1)]),_:1},8,["class","disabled"])])])]),_:1},8,["show"])]))}};export{P as default};