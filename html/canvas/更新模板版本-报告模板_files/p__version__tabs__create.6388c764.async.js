(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{GucE:function(e,a,t){"use strict";t.r(a);t("vfyZ");var s=t("Up4J"),r=(t("zqst"),t("CFjf")),c=(t("Lo2g"),t("7HK3")),n=t("ULjY"),i=t("tGGB"),o=(t("zXTq"),t("eZa8")),l=t("Vhn3"),p=(t("5WGq"),t("eVNJ")),d=(t("ZNKu"),t("tvny")),b=(t("rC1n"),t("iOW0")),m=t("1QO0"),h=t("jvAD"),v=t("6ocA"),j=t("gO/O"),u=t("9kvl"),x=t("mqUw"),O=t("t12N"),g=b["a"].confirm,_=d["a"].Option,w=p["a"].TabPane,f=e=>{var a=e.match.params,t=a.id?"\u7f16\u8f91":"\u65b0\u589e",b=o["a"].useForm(),f=Object(l["a"])(b,1),C=f[0],y=[{path:"",breadcrumbName:"\u62a5\u544a\u6a21\u677f\u7ba1\u7406"},{path:"/template/versions/list",breadcrumbName:"\u6a21\u677f\u7248\u672c"},{path:"",breadcrumbName:`${t}\uff1a\u6a21\u677f\u7248\u672c`}],I=Object(u["i"])("version",(e=>({versionDetail:e.versionDetail,show:e.show,create:e.create,update:e.update,clear:e.clear}))),q=I.show,N=I.versionDetail,S=I.create,z=I.update,A=I.clear,L=Object(u["i"])("template",(e=>({searchAction:e.searchAction,templateList:e.templateList}))),k=L.searchAction,J=L.templateList;Object(m["useEffect"])((()=>(a.id&&q({id:a.id}),()=>{A()})),[]);var D=e=>{g({title:"\u63d0\u4ea4\uff1f",onOk:function(){var a=Object(i["a"])((function*(){if(N&&N.id){var a=Object(n["a"])({},e);"string"===typeof e.template_id&&(a.template_id=N.template_id),e.css_content||(a.css_content=N.css_content),e.data_content||(a.data_content=N.data_content),yield z(Object(n["a"])(Object(n["a"])({},a),{},{id:N.id}))}else{var t=yield S(Object(n["a"])({},e));t&&C.resetFields()}}));function t(){return a.apply(this,arguments)}return t}()})},F=e=>{k({name:e,page_size:10})},G=e=>(e&&F(e),Promise.resolve()),T=Object(j["a"])(G,{debounceInterval:500,manual:!0}),K=()=>Object(O["jsxs"])(o["a"],{"data-inspector-line":"122","data-inspector-column":"4","data-inspector-relative-path":"src/pages/version/tabs/create.tsx",form:C,labelCol:{span:6},wrapperCol:{span:12},initialValues:N?Object(n["a"])(Object(n["a"])({},N),{},{template_id:`${N.template.name} - ${N.template.slug}`}):void 0,layout:"horizontal",size:"small",onFinish:D,children:[Object(O["jsx"])(o["a"].Item,{"data-inspector-line":"139","data-inspector-column":"6","data-inspector-relative-path":"src/pages/version/tabs/create.tsx",label:"\u6a21\u677f",name:"template_id",rules:[{required:!0,message:"\u8bf7\u8f93\u5165"}],children:Object(O["jsx"])(d["a"],{"data-inspector-line":"149","data-inspector-column":"8","data-inspector-relative-path":"src/pages/version/tabs/create.tsx",allowClear:!0,showSearch:!0,placeholder:"\u8bf7\u8f93\u5165",filterOption:!1,onSearch:T.run,disabled:!!a.id,children:J.map((e=>Object(O["jsxs"])(_,{"data-inspector-line":"158","data-inspector-column":"12","data-inspector-relative-path":"src/pages/version/tabs/create.tsx",value:e.id,children:[e.name," - ",e.slug]},e.id)))})}),Object(O["jsx"])(o["a"].Item,{"data-inspector-line":"164","data-inspector-column":"6","data-inspector-relative-path":"src/pages/version/tabs/create.tsx",label:"\u6807\u7b7e",name:"tag",children:Object(O["jsx"])(c["a"],{"data-inspector-line":"165","data-inspector-column":"8","data-inspector-relative-path":"src/pages/version/tabs/create.tsx",disabled:!!a.id,placeholder:"\u8bf7\u8f93\u5165"})}),Object(O["jsx"])(o["a"].Item,{"data-inspector-line":"167","data-inspector-column":"6","data-inspector-relative-path":"src/pages/version/tabs/create.tsx",label:"\u6807\u7b7e\u8bf4\u660e",name:"tag_description",children:Object(O["jsx"])(c["a"],{"data-inspector-line":"168","data-inspector-column":"8","data-inspector-relative-path":"src/pages/version/tabs/create.tsx",placeholder:"\u8bf7\u8f93\u5165"})}),Object(O["jsx"])(o["a"].Item,{"data-inspector-line":"170","data-inspector-column":"6","data-inspector-relative-path":"src/pages/version/tabs/create.tsx",label:"\u9759\u6001\u6587\u4ef6OSS\u5730\u5740",name:"static_osspath",rules:[{required:!0,message:"\u8bf7\u8f93\u5165"}],children:Object(O["jsx"])(c["a"],{"data-inspector-line":"180","data-inspector-column":"8","data-inspector-relative-path":"src/pages/version/tabs/create.tsx",placeholder:"\u8bf7\u8f93\u5165"})}),Object(O["jsxs"])(p["a"],{"data-inspector-line":"182","data-inspector-column":"6","data-inspector-relative-path":"src/pages/version/tabs/create.tsx",defaultActiveKey:"1",centered:!0,children:[Object(O["jsx"])(w,{"data-inspector-line":"183","data-inspector-column":"8","data-inspector-relative-path":"src/pages/version/tabs/create.tsx",tab:"HTML",children:Object(O["jsx"])(o["a"].Item,{"data-inspector-line":"184","data-inspector-column":"10","data-inspector-relative-path":"src/pages/version/tabs/create.tsx",labelCol:{span:0},wrapperCol:{span:24},name:"html_content",rules:a.id?[]:[{required:!0,message:"\u8bf7\u8f93\u5165"}],children:Object(O["jsx"])(x["a"],{"data-inspector-line":"200","data-inspector-column":"12","data-inspector-relative-path":"src/pages/version/tabs/create.tsx",lang:"html"})})},"1"),Object(O["jsx"])(w,{"data-inspector-line":"203","data-inspector-column":"8","data-inspector-relative-path":"src/pages/version/tabs/create.tsx",tab:"CSS",children:Object(O["jsx"])(o["a"].Item,{"data-inspector-line":"204","data-inspector-column":"10","data-inspector-relative-path":"src/pages/version/tabs/create.tsx",name:"css_content",labelCol:{span:0},wrapperCol:{span:24},rules:a.id?[]:[{required:!0,message:"\u8bf7\u8f93\u5165"}],children:Object(O["jsx"])(x["a"],{"data-inspector-line":"219","data-inspector-column":"12","data-inspector-relative-path":"src/pages/version/tabs/create.tsx",lang:"css"})})},"2"),Object(O["jsx"])(w,{"data-inspector-line":"222","data-inspector-column":"8","data-inspector-relative-path":"src/pages/version/tabs/create.tsx",tab:"(\u6570\u636e)JSON",children:Object(O["jsx"])(o["a"].Item,{"data-inspector-line":"223","data-inspector-column":"10","data-inspector-relative-path":"src/pages/version/tabs/create.tsx",name:"data_content",labelCol:{span:0},wrapperCol:{span:24},children:Object(O["jsx"])(x["a"],{"data-inspector-line":"224","data-inspector-column":"12","data-inspector-relative-path":"src/pages/version/tabs/create.tsx",lang:"json"})})},"3")]}),Object(O["jsx"])(o["a"].Item,{"data-inspector-line":"228","data-inspector-column":"6","data-inspector-relative-path":"src/pages/version/tabs/create.tsx",label:"\u5907\u6ce8",name:"commit",children:Object(O["jsx"])(c["a"],{"data-inspector-line":"229","data-inspector-column":"8","data-inspector-relative-path":"src/pages/version/tabs/create.tsx",placeholder:"\u8bf7\u8f93\u5165"})}),Object(O["jsx"])(h["a"],{"data-inspector-line":"231","data-inspector-column":"6","data-inspector-relative-path":"src/pages/version/tabs/create.tsx",children:Object(O["jsx"])(r["a"],{"data-inspector-line":"232","data-inspector-column":"8","data-inspector-relative-path":"src/pages/version/tabs/create.tsx",type:"primary",htmlType:"submit",children:"\u63d0\u4ea4"})})]});return Object(O["jsx"])(v["a"],{"data-inspector-line":"245","data-inspector-column":"4","data-inspector-relative-path":"src/pages/version/tabs/create.tsx",title:!1,breadcrumb:{routes:y,itemRender:e=>Object(O["jsx"])("span",{"data-inspector-line":"250","data-inspector-column":"10","data-inspector-relative-path":"src/pages/version/tabs/create.tsx",onClick:()=>e.path&&u["c"].push(e.path),children:e.breadcrumbName})},children:Object(O["jsx"])(s["a"],{"data-inspector-line":"254","data-inspector-column":"6","data-inspector-relative-path":"src/pages/version/tabs/create.tsx",size:"small",title:t,children:a.id?N&&K():K()})})};a["default"]=f}}]);