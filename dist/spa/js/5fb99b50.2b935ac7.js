(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["5fb99b50"],{8041:function(t,e,o){"use strict";var a=o("af78"),r=o.n(a);r.a},"8b24":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-page",[o("div",{staticClass:"flex flex-center"},[o("div",{},[o("div",{staticClass:"q-gutter-y-md",staticStyle:{width:"100vw"}},[o("q-tabs",{staticClass:"bg-yellow shadow-2",model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[o("q-tab",{attrs:{name:"create",icon:"mail",label:"Создание"}}),o("q-tab",{attrs:{name:"watch",icon:"alarm",label:"Просмотр"}},[o("q-badge",{attrs:{color:"white","text-color":"black",floating:""}},[t._v(t._s(t.entriesCount))])],1)],1),o("q-separator"),o("q-tab-panels",{attrs:{animated:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[o("q-tab-panel",{attrs:{name:"create"}},[o("div",{staticClass:"q-pa-md"},[o("div",{staticClass:"flex flex-center"},[o("q-table",{attrs:{data:t.totalData,columns:t.totalColumns,"rows-per-page-options":[],"row-key":"name"},scopedSlots:t._u([{key:"top",fn:function(){return[o("q-space"),o("q-btn",{attrs:{flat:"",dense:"",color:"primary",icon:"sync"},on:{click:t.countTotalCount}}),o("q-btn",{staticClass:"on-right",attrs:{flat:"",dense:"",color:"primary",icon:"send"},on:{click:t.sendEntry}})]},proxy:!0},{key:"body",fn:function(e){return[o("q-tr",{attrs:{props:e}},[o("q-td",{key:"totalIncome",attrs:{props:e}},[t._v(t._s(e.row.totalIncome))]),o("q-td",{key:"totalExpense",attrs:{props:e}},[t._v(t._s(e.row.totalExpense))]),o("q-td",{key:"totalCount",attrs:{props:e}},[t._v(t._s(e.row.totalCount))])],1)]}}])})],1)]),o("div",{staticClass:"q-pa-md"},[o("div",{staticClass:"flex flex-center"},[o("q-table",{attrs:{data:t.secondData,columns:t.secondColumns,"rows-per-page-options":[],"row-key":"name"},scopedSlots:t._u([{key:"body",fn:function(e){return[o("q-tr",{attrs:{props:e}},[o("q-td",{key:"courierCost",attrs:{props:e}},[t._v("\n                        "+t._s(e.row.courierCost)+"\n                        "),o("q-popup-edit",{attrs:{buttons:""},scopedSlots:t._u([{key:"title",fn:function(){},proxy:!0}],null,!0),model:{value:e.row.courierCost,callback:function(o){t.$set(e.row,"courierCost",t._n(o))},expression:"props.row.courierCost"}},[o("q-input",{attrs:{dense:"",autofocus:""},model:{value:e.row.courierCost,callback:function(o){t.$set(e.row,"courierCost",t._n(o))},expression:"props.row.courierCost"}})],1)],1),o("q-td",{key:"manager",attrs:{props:e}},[t._v("\n                        "+t._s(e.row.manager)+"\n                        "),o("q-popup-edit",{attrs:{buttons:""},scopedSlots:t._u([{key:"title",fn:function(){},proxy:!0}],null,!0),model:{value:e.row.manager,callback:function(o){t.$set(e.row,"manager",t._n(o))},expression:"props.row.manager"}},[o("q-input",{attrs:{dense:"",autofocus:""},model:{value:e.row.manager,callback:function(o){t.$set(e.row,"manager",t._n(o))},expression:"props.row.manager"}})],1)],1),o("q-td",{key:"seller",attrs:{props:e}},[t._v("\n                        "+t._s(e.row.seller)+"\n                        "),o("q-popup-edit",{attrs:{buttons:""},scopedSlots:t._u([{key:"title",fn:function(){},proxy:!0}],null,!0),model:{value:e.row.seller,callback:function(o){t.$set(e.row,"seller",t._n(o))},expression:"props.row.seller"}},[o("q-input",{attrs:{dense:"",autofocus:""},model:{value:e.row.seller,callback:function(o){t.$set(e.row,"seller",t._n(o))},expression:"props.row.seller"}})],1)],1),o("q-td",{key:"hhold",attrs:{props:e}},[t._v("\n                        "+t._s(e.row.hhold)+"\n                        "),o("q-popup-edit",{attrs:{buttons:""},scopedSlots:t._u([{key:"title",fn:function(){},proxy:!0}],null,!0),model:{value:e.row.hhold,callback:function(o){t.$set(e.row,"hhold",t._n(o))},expression:"props.row.hhold"}},[o("q-input",{attrs:{dense:"",autofocus:""},model:{value:e.row.hhold,callback:function(o){t.$set(e.row,"hhold",t._n(o))},expression:"props.row.hhold"}})],1)],1)],1)]}}])})],1)]),o("div",{staticClass:"q-pa-md"},[o("div",{staticClass:"flex flex-center"},[o("q-table",{attrs:{data:t.firstData,columns:t.firstColumns,"rows-per-page-options":[],"row-key":"name"},scopedSlots:t._u([{key:"top",fn:function(){return[o("q-btn",{attrs:{flat:"",dense:"",color:"primary",icon:"add"},on:{click:t.addRow}}),o("q-btn",{staticClass:"on-right",attrs:{flat:"",dense:"",color:"primary",icon:"remove"},on:{click:t.removeRow}}),o("q-space")]},proxy:!0},{key:"body",fn:function(e){return[o("q-tr",{attrs:{props:e}},[o("q-td",{key:"partnerName",attrs:{props:e}},[t._v("\n                        "+t._s(e.row.partnerName)+"\n                        "),o("q-popup-edit",{attrs:{buttons:""},model:{value:e.row.partnerName,callback:function(o){t.$set(e.row,"partnerName",o)},expression:"props.row.partnerName"}},[o("q-input",{attrs:{dense:"",autofocus:"",counter:""},model:{value:e.row.partnerName,callback:function(o){t.$set(e.row,"partnerName",o)},expression:"props.row.partnerName"}})],1)],1),o("q-td",{key:"documentsCount",attrs:{props:e}},[t._v("\n                        "+t._s(e.row.documentsCount)+"\n                        "),o("q-popup-edit",{attrs:{buttons:""},model:{value:e.row.documentsCount,callback:function(o){t.$set(e.row,"documentsCount",t._n(o))},expression:"props.row.documentsCount"}},[o("q-input",{attrs:{type:"number",dense:"",autofocus:""},model:{value:e.row.documentsCount,callback:function(o){t.$set(e.row,"documentsCount",t._n(o))},expression:"props.row.documentsCount"}})],1)],1),o("q-td",{key:"notariusCost",attrs:{props:e}},[t._v("\n                        "+t._s(e.row.notariusCost)+"\n                        "),o("q-popup-edit",{attrs:{buttons:""},model:{value:e.row.notariusCost,callback:function(o){t.$set(e.row,"notariusCost",t._n(o))},expression:"props.row.notariusCost"}},[o("q-input",{attrs:{type:"number",dense:"",autofocus:""},model:{value:e.row.notariusCost,callback:function(o){t.$set(e.row,"notariusCost",t._n(o))},expression:"props.row.notariusCost"}})],1)],1),o("q-td",{key:"translatorCost",attrs:{props:e}},[t._v("\n                        "+t._s(e.row.translatorCost)+"\n                        "),o("q-popup-edit",{attrs:{buttons:""},model:{value:e.row.translatorCost,callback:function(o){t.$set(e.row,"translatorCost",t._n(o))},expression:"props.row.translatorCost"}},[o("q-input",{attrs:{type:"number",dense:"",autofocus:""},model:{value:e.row.translatorCost,callback:function(o){t.$set(e.row,"translatorCost",t._n(o))},expression:"props.row.translatorCost"}})],1)],1),o("q-td",{key:"totalAmount",attrs:{props:e}},[t._v("\n                        "+t._s(e.row.totalAmount)+"\n                        "),o("q-popup-edit",{attrs:{buttons:""},model:{value:e.row.totalAmount,callback:function(o){t.$set(e.row,"totalAmount",t._n(o))},expression:"props.row.totalAmount"}},[o("q-input",{attrs:{type:"number",dense:"",autofocus:""},model:{value:e.row.totalAmount,callback:function(o){t.$set(e.row,"totalAmount",t._n(o))},expression:"props.row.totalAmount"}})],1)],1),o("q-td",{key:"revenueAmount",attrs:{props:e}},[t._v(t._s(e.row.totalAmount-(e.row.notariusCost+e.row.translatorCost)))])],1)]}}])})],1)])]),o("q-tab-panel",{attrs:{name:"watch"}},t._l(t.weeks,(function(e,a){return o("div",{key:a},[o("div",{staticClass:"q-mt-md"},[o("q-expansion-item",{staticClass:"shadow-1 overflow-hidden",staticStyle:{"border-radius":"30px"},attrs:{icon:5===e.length?"done":"calendar_today","header-style":{height:"7vh",textAlign:"center"},dense:"",label:t.getLabel(e),"header-class":5===e.length?"bg-grey-2 text-green":"bg-grey-2 text-red","expand-icon-class":"text-white"}},t._l(e,(function(e){return o("div",{key:e._id},[o("div",{staticClass:"q-mt-md"},[o("q-expansion-item",{staticClass:"shadow-1 overflow-hidden",staticStyle:{"border-radius":"30px"},attrs:{icon:"explore","header-style":{height:"5vh",textAlign:"center"},dense:"",label:e.createdAt,"header-class":"bg-grey-2 text-red","expand-icon-class":"text-white"}},[o("div",{staticClass:"q-pa-md"},[o("div",{staticClass:"flex flex-center"},[o("q-table",{attrs:{data:e.entries.totalData,columns:t.totalColumns,"rows-per-page-options":[],"row-key":"name"},scopedSlots:t._u([{key:"body",fn:function(e){return[o("q-tr",{attrs:{props:e}},[o("q-td",{key:"totalIncome",attrs:{props:e}},[t._v(t._s(e.row.totalIncome))]),o("q-td",{key:"totalExpense",attrs:{props:e}},[t._v(t._s(e.row.totalExpense))]),o("q-td",{key:"totalCount",attrs:{props:e}},[t._v(t._s(e.row.totalCount))])],1)]}}],null,!0)})],1)]),o("div",{staticClass:"q-pa-md"},[o("div",{staticClass:"flex flex-center"},[o("q-table",{attrs:{data:e.entries.secondData,columns:t.secondColumns,"rows-per-page-options":[],"row-key":"name"},scopedSlots:t._u([{key:"body",fn:function(e){return[o("q-tr",{attrs:{props:e}},[o("q-td",{key:"courierCost",attrs:{props:e}},[t._v(t._s(e.row.courierCost))]),o("q-td",{key:"manager",attrs:{props:e}},[t._v(t._s(e.row.manager))]),o("q-td",{key:"seller",attrs:{props:e}},[t._v(t._s(e.row.seller))]),o("q-td",{key:"hhold",attrs:{props:e}},[t._v(t._s(e.row.hhold))])],1)]}}],null,!0)})],1)]),o("div",{staticClass:"q-pa-md"},[o("div",{staticClass:"flex flex-center"},[o("q-table",{attrs:{data:e.entries.firstData,columns:t.firstColumns,"rows-per-page-options":[],"row-key":"name"},scopedSlots:t._u([{key:"body",fn:function(e){return[o("q-tr",{attrs:{props:e}},[o("q-td",{key:"partnerName",attrs:{props:e}},[t._v(t._s(e.row.partnerName))]),o("q-td",{key:"documentsCount",attrs:{props:e}},[t._v(t._s(e.row.documentsCount))]),o("q-td",{key:"notariusCost",attrs:{props:e}},[t._v(t._s(e.row.notariusCost))]),o("q-td",{key:"translatorCost",attrs:{props:e}},[t._v(t._s(e.row.translatorCost))]),o("q-td",{key:"totalAmount",attrs:{props:e}},[t._v(t._s(e.row.totalAmount))]),o("q-td",{key:"revenueAmount",attrs:{props:e}},[t._v(t._s(e.row.totalAmount-(e.row.notariusCost+e.row.translatorCost)))])],1)]}}],null,!0)})],1)])])],1)])})),0)],1)])})),0)],1)],1)])])])},r=[],n=(o("8e6e"),o("8a81"),o("456d"),o("ac6a"),o("cadf"),o("06db"),o("4db1")),s=o.n(n),l=o("c47a"),i=o.n(l),c=o("bc3a"),u=o.n(c);o("3022");function p(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,a)}return o}function d(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?p(Object(o),!0).forEach((function(e){i()(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):p(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var m=[{name:"partnerName",align:"left",label:"Партнёр",field:"partnerName"},{name:"documentsCount",align:"center",label:"Количество (шт.)",field:"documentsCount"},{name:"notariusCost",align:"center",label:"Нотариус (₽)",field:"notariusCost"},{name:"translatorCost",align:"center",label:"Переводчик (₽)",field:"center"},{name:"totalAmount",align:"center",label:"Цена (₽)",field:"totalAmount"},{name:"revenueAmount",align:"center",label:"Доход (₽)",field:"revenueAmount"}],f=[{name:"courierCost",align:"center",label:"Курьер (₽)",field:"courierCost"},{name:"manager",align:"center",label:"Менеджер (₽)",field:"manager"},{name:"seller",align:"center",label:"Продавец (₽)",field:"seller"},{name:"hhold",align:"center",label:"ХР (₽)",field:"hhold"}],w=[{name:"totalIncome",align:"center",label:"Доходы (₽)",field:"totalIncome"},{name:"totalExpense",align:"center",label:"Расходы (₽)",field:"totalExpense"},{name:"totalCount",align:"center",label:"Выручка (₽)",field:"totalCount"}],b={name:"PageIndex",data:function(){return{tab:"create",partnerName:"Партнёр",entriesCount:0,rowCount:0,firstData:[],secondData:[{courierCost:800,manager:1e3,seller:800,hhold:0}],totalData:[],fetchData:[],weeks:[],firstColumns:m,secondColumns:f,totalColumns:w}},methods:{addRow:function(){var t=Math.floor(Math.random()*(this.firstData.length+1)),e={partnerName:"Партнёр",notariusCost:250,translatorCost:100,totalAmount:7e3,documentsCount:0,revenueAmount:0};0===this.firstData.length&&(this.rowCount=0),e.id=++this.rowCount;var o=d({},e);this.firstData=[].concat(s()(this.firstData.slice(0,t)),[o],s()(this.firstData.slice(t)))},removeRow:function(){var t=Math.floor(Math.random()*this.firstData.length);this.firstData=[].concat(s()(this.firstData.slice(0,t)),s()(this.firstData.slice(t+1)))},getLabel:function(t){var e=t[0].createdAt,o=t[t.length-1].createdAt,a=0;return t.forEach((function(t){a+=t.entries.totalData[0].totalCount})),"".concat(e.substring(0,e.indexOf(","))," - ").concat(o.substring(0,o.indexOf(","))," | ").concat(a," ₽")},sendEntry:function(){var t=this;this.$q.loading.show({message:"Регистрация"});var e={firstData:this.firstData,secondData:this.secondData,totalData:this.totalData},o={entryData:JSON.stringify(e)};u.a.post("/entries/create",o).then((function(e){t.$q.loading.hide(),t.$q.notify({message:"Зарегистрирован. Для просмотра обновите страницу.",color:"green",position:"center"})})).catch((function(e){t.$q.loading.hide(),t.$q.notify({message:"Ошибка",color:"red",position:"center"})}))},countTotalCount:function(){var t=0,e=0,o=0;this.firstData.forEach((function(t){t.revenueAmount=t.totalAmount-(t.notariusCost+t.translatorCost),o+=t.revenueAmount})),this.secondData.forEach((function(t){e+=t.courierCost+t.hhold+t.manager+t.seller})),t=o-e,this.totalData=[{totalIncome:o,totalExpense:e,totalCount:t}]}},created:function(){var t=this;this.$q.loading.show({message:"Подгружаем отчеты..."}),u.a.get("/entries").then((function(e){t.entriesCount=e.data.length,e.data.forEach((function(t){var e=new Date(t.createdAt);t.createdAt=e.toLocaleString(),t.entries=JSON.parse(JSON.parse(t.entries))}));for(var o=0,a=e.data.length;o<a;o+=5)t.weeks.push(e.data.slice(o,o+5));t.weeks.reverse(),t.$q.loading.hide()})).catch((function(e){t.$q.loading.hide(),console.log(e)}))}},h=b,C=(o("8041"),o("2877")),v=o("9989"),y=o("429b"),q=o("7460"),g=o("58a8"),_=o("eb85"),k=o("adad"),x=o("823b"),D=o("eaac"),A=o("2c91"),$=o("9c40"),O=o("bd08"),S=o("db86"),E=o("42a1"),N=o("27f9"),Q=o("3b73"),j=Object(C["a"])(h,a,r,!1,null,null,null);e["default"]=j.exports;j.options.components=Object.assign({QPage:v["a"],QTabs:y["a"],QTab:q["a"],QBadge:g["a"],QSeparator:_["a"],QTabPanels:k["a"],QTabPanel:x["a"],QTable:D["a"],QSpace:A["a"],QBtn:$["a"],QTr:O["a"],QTd:S["a"],QPopupEdit:E["a"],QInput:N["a"],QExpansionItem:Q["a"]},j.options.components)},af78:function(t,e,o){}}]);