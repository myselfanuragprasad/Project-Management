import{aK as j,bv as V,bl as B,bw as P,f as b,a as r,u as d,w as c,F as v,bx as D,o as i,X as U,b as s,j as m,v as h,d as N,t as n,c as g,aO as T,aQ as A,be as E}from"./app-463fd668.js";import{_ as F,a as J}from"./AuthenticatedLayout-06a6203f.js";import{a as G}from"./TextInput-3146addd.js";import{_ as K}from"./PrimaryButton-7fb30eb4.js";import{_ as L}from"./SelectInput-a5a50211.js";import{_ as k}from"./DangerButton-824dd117.js";import{_ as M,a as Q}from"./Pagination-8a4f8e31.js";import{T as x,h as _,P as X}from"./SwitchLangNavbar-ce8b6596.js";import q from"./Create-a8d6069e.js";import z from"./Edit-de505dd1.js";import H from"./Delete-fbae2924.js";import R from"./DeleteBulk-6be0393a.js";import{_ as W}from"./Checkbox-4d1ef948.js";import"./SecondaryButton-3f05993d.js";const Y={class:"space-y-4"},Z={class:"px-4 sm:px-0"},ee={class:"rounded-lg overflow-hidden w-fit"},se={class:"relative bg-white dark:bg-gray-800 shadow sm:rounded-lg"},te={class:"flex justify-between p-2"},ae={class:"flex space-x-2"},le={class:"overflow-x-auto scrollbar-table"},re={class:"w-full"},oe={class:"uppercase text-sm border-t border-gray-200 dark:border-gray-700"},ne={class:"dark:bg-gray-900/50 text-left"},de={class:"px-2 py-4 text-center"},ie=s("th",{class:"px-2 py-4 text-center"},"#",-1),pe={class:"flex justify-between items-center"},ce={class:"flex justify-between items-center"},me=s("span",null,"Guard",-1),ue={class:"flex justify-between items-center"},fe={class:"flex justify-between items-center"},he=s("th",{class:"px-2 py-4 sr-only"},"Action",-1),_e={class:"whitespace-nowrap py-4 px-2 sm:py-3 text-center"},ye=["value"],be={class:"whitespace-nowrap py-4 px-2 sm:py-3 text-center"},ge={class:"whitespace-nowrap py-4 px-2 sm:py-3"},we={class:"whitespace-nowrap py-4 px-2 sm:py-3"},ve={class:"whitespace-nowrap py-4 px-2 sm:py-3"},ke={class:"whitespace-nowrap py-4 px-2 sm:py-3"},xe={class:"whitespace-nowrap py-4 px-2 sm:py-3"},$e={class:"flex justify-center items-center"},Oe={class:"rounded-md overflow-hidden"},Ce={class:"flex justify-between items-center p-2 border-t border-gray-200 dark:border-gray-700"},Ge={__name:"Index",props:{title:String,filters:Object,permissions:Object,breadcrumbs:Object,perPage:Number},setup(u){const o=u,{_:$,debounce:O,pickBy:C}=D,e=j({params:{search:o.filters.search,field:o.filters.field,order:o.filters.order,perPage:o.perPage},selectedId:[],multipleSelect:!1,createOpen:!1,editOpen:!1,deleteOpen:!1,deleteBulkOpen:!1,permission:null,dataSet:V().props.app.perpage}),f=l=>{e.params.field=l,e.params.order=e.params.order==="asc"?"desc":"asc"};B(()=>$.cloneDeep(e.params),O(()=>{let l=C(e.params);P.get(route("permission.index"),l,{replace:!0,preserveState:!0,preserveScroll:!0})},150));const I=l=>{var t;l.target.checked===!1?e.selectedId=[]:(t=o.permissions)==null||t.data.forEach(p=>{e.selectedId.push(p.id)})},S=()=>{var l;((l=o.permissions)==null?void 0:l.data.length)==e.selectedId.length?e.multipleSelect=!0:e.multipleSelect=!1};return(l,t)=>{const p=A("tooltip");return i(),b(v,null,[r(d(U),{title:o.title},null,8,["title"]),r(F,null,{default:c(()=>[r(J,{title:u.title,breadcrumbs:u.breadcrumbs},null,8,["title","breadcrumbs"]),s("div",Y,[s("div",Z,[s("div",ee,[m(r(K,{class:"rounded-none",onClick:t[0]||(t[0]=a=>e.createOpen=!0)},{default:c(()=>[N(n(l.lang().button.add),1)]),_:1},512),[[h,l.can(["create permission"])]]),r(q,{show:e.createOpen,onClose:t[1]||(t[1]=a=>e.createOpen=!1),title:o.title},null,8,["show","title"]),r(z,{show:e.editOpen,onClose:t[2]||(t[2]=a=>e.editOpen=!1),permission:e.permission,title:o.title},null,8,["show","permission","title"]),r(H,{show:e.deleteOpen,onClose:t[3]||(t[3]=a=>e.deleteOpen=!1),permission:e.permission,title:o.title},null,8,["show","permission","title"]),r(R,{show:e.deleteBulkOpen,onClose:t[4]||(t[4]=a=>(e.deleteBulkOpen=!1,e.multipleSelect=!1,e.selectedId=[])),selectedId:e.selectedId,title:o.title},null,8,["show","selectedId","title"])])]),s("div",se,[s("div",te,[s("div",ae,[r(L,{modelValue:e.params.perPage,"onUpdate:modelValue":t[5]||(t[5]=a=>e.params.perPage=a),dataSet:e.dataSet},null,8,["modelValue","dataSet"]),m((i(),g(k,{onClick:t[6]||(t[6]=a=>e.deleteBulkOpen=!0),class:"px-3 py-1.5"},{default:c(()=>[r(d(x),{class:"w-5 h-5"})]),_:1})),[[h,e.selectedId.length!=0&&l.can(["delete permission"])],[p,l.lang().tooltip.delete_selected]])]),r(G,{modelValue:e.params.search,"onUpdate:modelValue":t[7]||(t[7]=a=>e.params.search=a),type:"text",class:"block w-3/6 md:w-2/6 lg:w-1/6 rounded-lg",placeholder:l.lang().placeholder.search},null,8,["modelValue","placeholder"])]),s("div",le,[s("table",re,[s("thead",oe,[s("tr",ne,[s("th",de,[r(W,{checked:e.multipleSelect,"onUpdate:checked":t[8]||(t[8]=a=>e.multipleSelect=a),onChange:I},null,8,["checked"])]),ie,s("th",{class:"px-2 py-4 cursor-pointer",onClick:t[9]||(t[9]=a=>f("name"))},[s("div",pe,[s("span",null,n(l.lang().label.name),1),r(d(_),{class:"w-4 h-4"})])]),s("th",{class:"px-2 py-4 cursor-pointer",onClick:t[10]||(t[10]=a=>f("guard"))},[s("div",ce,[me,r(d(_),{class:"w-4 h-4"})])]),s("th",{class:"px-2 py-4 cursor-pointer",onClick:t[11]||(t[11]=a=>f("created_at"))},[s("div",ue,[s("span",null,n(l.lang().label.created),1),r(d(_),{class:"w-4 h-4"})])]),s("th",{class:"px-2 py-4 cursor-pointer",onClick:t[12]||(t[12]=a=>f("updated_at"))},[s("div",fe,[s("span",null,n(l.lang().label.updated),1),r(d(_),{class:"w-4 h-4"})])]),he])]),s("tbody",null,[(i(!0),b(v,null,T(u.permissions.data,(a,w)=>(i(),b("tr",{key:w,class:"border-t border-gray-200 dark:border-gray-700 hover:bg-gray-200/30 hover:dark:bg-gray-900/20"},[s("td",_e,[m(s("input",{class:"rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-primary dark:text-primary shadow-sm focus:ring-primary/80 dark:focus:ring-primary dark:focus:ring-offset-gray-800 dark:checked:bg-primary dark:checked:border-primary",type:"checkbox",onChange:S,value:a.id,"onUpdate:modelValue":t[13]||(t[13]=y=>e.selectedId=y)},null,40,ye),[[E,e.selectedId]])]),s("td",be,n(++w),1),s("td",ge,n(a.name),1),s("td",we,n(a.guard_name),1),s("td",ve,n(a.created_at),1),s("td",ke,n(a.updated_at),1),s("td",xe,[s("div",$e,[s("div",Oe,[m((i(),g(Q,{type:"button",onClick:y=>(e.editOpen=!0,e.permission=a),class:"px-2 py-1.5 rounded-none"},{default:c(()=>[r(d(X),{class:"w-4 h-4"})]),_:2},1032,["onClick"])),[[h,l.can(["update permission"])],[p,l.lang().tooltip.edit]]),m((i(),g(k,{type:"button",onClick:y=>(e.deleteOpen=!0,e.permission=a),class:"px-2 py-1.5 rounded-none"},{default:c(()=>[r(d(x),{class:"w-4 h-4"})]),_:2},1032,["onClick"])),[[h,l.can(["delete permission"])],[p,l.lang().tooltip.delete]])])])])]))),128))])])]),s("div",Ce,[r(M,{links:o.permissions,filters:e.params},null,8,["links","filters"])])])])]),_:1})],64)}}};export{Ge as default};
