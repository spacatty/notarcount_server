(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["5fb99b50"],{8041:function(t,o,e){"use strict";var a=e("af78"),r=e.n(a);r.a},"8b24":function(t,o,e){"use strict";e.r(o);var a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("q-page",[e("div",{staticClass:"flex flex-center"},[e("div",{},[e("div",{staticClass:"q-gutter-y-md",staticStyle:{width:"100vw"}},[e("q-tabs",{staticClass:"bg-yellow shadow-2",model:{value:t.tab,callback:function(o){t.tab=o},expression:"tab"}},[e("q-tab",{attrs:{name:"create",icon:"mail",label:"Создание"}}),e("q-tab",{attrs:{name:"watch",icon:"alarm",label:"Просмотр"}},[e("q-badge",{attrs:{color:"white","text-color":"black",floating:""}},[t._v(t._s(t.entriesCount))])],1)],1),e("q-separator"),e("q-tab-panels",{attrs:{animated:""},model:{value:t.tab,callback:function(o){t.tab=o},expression:"tab"}},[e("q-tab-panel",{attrs:{name:"create"}},[e("div",{staticClass:"q-pa-md"},[e("div",{staticClass:"flex flex-center"},[e("q-table",{attrs:{data:t.totalData,columns:t.totalColumns,"rows-per-page-options":[],"row-key":"name"},scopedSlots:t._u([{key:"top",fn:function(){return[e("q-space"),e("q-btn",{attrs:{flat:"",dense:"",color:"primary",icon:"sync"},on:{click:t.countTotalCount}}),e("q-btn",{staticClass:"on-right",attrs:{flat:"",dense:"",color:"primary",icon:"send"},on:{click:t.sendEntry}})]},proxy:!0},{key:"body",fn:function(o){return[e("q-tr",{attrs:{props:o}},[e("q-td",{key:"totalIncome",attrs:{props:o}},[t._v(t._s(o.row.totalIncome))]),e("q-td",{key:"totalExpense",attrs:{props:o}},[t._v(t._s(o.row.totalExpense))]),e("q-td",{key:"totalCount",attrs:{props:o}},[t._v(t._s(o.row.totalCount))])],1)]}}])})],1)]),e("div",{staticClass:"q-pa-md"},[e("div",{staticClass:"flex flex-center"},[e("q-table",{attrs:{data:t.secondData,columns:t.secondColumns,"rows-per-page-options":[],"row-key":"name"},scopedSlots:t._u([{key:"body",fn:function(o){return[e("q-tr",{attrs:{props:o}},[e("q-td",{key:"courierCost",attrs:{props:o}},[t._v("\n                        "+t._s(o.row.courierCost)+"\n                        "),e("q-popup-edit",{attrs:{buttons:""},scopedSlots:t._u([{key:"title",fn:function(){},proxy:!0}],null,!0),model:{value:o.row.courierCost,callback:function(e){t.$set(o.row,"courierCost",t._n(e))},expression:"props.row.courierCost"}},[e("q-input",{attrs:{dense:"",autofocus:""},model:{value:o.row.courierCost,callback:function(e){t.$set(o.row,"courierCost",t._n(e))},expression:"props.row.courierCost"}})],1)],1),e("q-td",{key:"manager",attrs:{props:o}},[t._v("\n                        "+t._s(o.row.manager)+"\n                        "),e("q-popup-edit",{attrs:{buttons:""},scopedSlots:t._u([{key:"title",fn:function(){},proxy:!0}],null,!0),model:{value:o.row.manager,callback:function(e){t.$set(o.row,"manager",t._n(e))},expression:"props.row.manager"}},[e("q-input",{attrs:{dense:"",autofocus:""},model:{value:o.row.manager,callback:function(e){t.$set(o.row,"manager",t._n(e))},expression:"props.row.manager"}})],1)],1),e("q-td",{key:"seller",attrs:{props:o}},[t._v("\n                        "+t._s(o.row.seller)+"\n                        "),e("q-popup-edit",{attrs:{buttons:""},scopedSlots:t._u([{key:"title",fn:function(){},proxy:!0}],null,!0),model:{value:o.row.seller,callback:function(e){t.$set(o.row,"seller",t._n(e))},expression:"props.row.seller"}},[e("q-input",{attrs:{dense:"",autofocus:""},model:{value:o.row.seller,callback:function(e){t.$set(o.row,"seller",t._n(e))},expression:"props.row.seller"}})],1)],1),e("q-td",{key:"hhold",attrs:{props:o}},[t._v("\n                        "+t._s(o.row.hhold)+"\n                        "),e("q-popup-edit",{attrs:{buttons:""},scopedSlots:t._u([{key:"title",fn:function(){},proxy:!0}],null,!0),model:{value:o.row.hhold,callback:function(e){t.$set(o.row,"hhold",t._n(e))},expression:"props.row.hhold"}},[e("q-input",{attrs:{dense:"",autofocus:""},model:{value:o.row.hhold,callback:function(e){t.$set(o.row,"hhold",t._n(e))},expression:"props.row.hhold"}})],1)],1)],1)]}}])})],1)]),e("div",{staticClass:"q-pa-md"},[e("div",{staticClass:"flex flex-center"},[e("q-table",{attrs:{data:t.firstData,columns:t.firstColumns,"rows-per-page-options":[],"row-key":"name"},scopedSlots:t._u([{key:"top",fn:function(){return[e("q-btn",{attrs:{flat:"",dense:"",color:"primary",icon:"add"},on:{click:t.addRow}}),e("q-btn",{staticClass:"on-right",attrs:{flat:"",dense:"",color:"primary",icon:"remove"},on:{click:t.removeRow}}),e("q-space")]},proxy:!0},{key:"body",fn:function(o){return[e("q-tr",{attrs:{props:o}},[e("q-td",{key:"partnerName",attrs:{props:o}},[t._v("\n                        "+t._s(o.row.partnerName)+"\n                        "),e("q-popup-edit",{attrs:{buttons:""},model:{value:o.row.partnerName,callback:function(e){t.$set(o.row,"partnerName",e)},expression:"props.row.partnerName"}},[e("q-input",{attrs:{dense:"",autofocus:"",counter:""},model:{value:o.row.partnerName,callback:function(e){t.$set(o.row,"partnerName",e)},expression:"props.row.partnerName"}})],1)],1),e("q-td",{key:"documentsCount",attrs:{props:o}},[t._v("\n                        "+t._s(o.row.documentsCount)+"\n                        "),e("q-popup-edit",{attrs:{buttons:""},model:{value:o.row.documentsCount,callback:function(e){t.$set(o.row,"documentsCount",t._n(e))},expression:"props.row.documentsCount"}},[e("q-input",{attrs:{type:"number",dense:"",autofocus:""},model:{value:o.row.documentsCount,callback:function(e){t.$set(o.row,"documentsCount",t._n(e))},expression:"props.row.documentsCount"}})],1)],1),e("q-td",{key:"notariusCost",attrs:{props:o}},[t._v("\n                        "+t._s(o.row.notariusCost)+"\n                        "),e("q-popup-edit",{attrs:{buttons:""},model:{value:o.row.notariusCost,callback:function(e){t.$set(o.row,"notariusCost",t._n(e))},expression:"props.row.notariusCost"}},[e("q-input",{attrs:{type:"number",dense:"",autofocus:""},model:{value:o.row.notariusCost,callback:function(e){t.$set(o.row,"notariusCost",t._n(e))},expression:"props.row.notariusCost"}})],1)],1),e("q-td",{key:"translatorCost",attrs:{props:o}},[t._v("\n                        "+t._s(o.row.translatorCost)+"\n                        "),e("q-popup-edit",{attrs:{buttons:""},model:{value:o.row.translatorCost,callback:function(e){t.$set(o.row,"translatorCost",t._n(e))},expression:"props.row.translatorCost"}},[e("q-input",{attrs:{type:"number",dense:"",autofocus:""},model:{value:o.row.translatorCost,callback:function(e){t.$set(o.row,"translatorCost",t._n(e))},expression:"props.row.translatorCost"}})],1)],1),e("q-td",{key:"totalAmount",attrs:{props:o}},[t._v("\n                        "+t._s(o.row.totalAmount)+"\n                        "),e("q-popup-edit",{attrs:{buttons:""},model:{value:o.row.totalAmount,callback:function(e){t.$set(o.row,"totalAmount",t._n(e))},expression:"props.row.totalAmount"}},[e("q-input",{attrs:{type:"number",dense:"",autofocus:""},model:{value:o.row.totalAmount,callback:function(e){t.$set(o.row,"totalAmount",t._n(e))},expression:"props.row.totalAmount"}})],1)],1),e("q-td",{key:"revenueAmount",attrs:{props:o}},[t._v(t._s(o.row.totalAmount-(o.row.notariusCost+o.row.translatorCost)))])],1)]}}])})],1)])]),e("q-tab-panel",{attrs:{name:"watch"}},t._l(t.fetchData,(function(o){return e("div",{key:o._id,staticClass:"flex flex-center"},[e("div",{staticClass:"q-mt-md"},[e("q-expansion-item",{staticClass:"shadow-1 overflow-hidden",staticStyle:{"border-radius":"30px"},attrs:{icon:"explore","header-style":{width:"60vw",height:"5vh",textAlign:"center"},dense:"",label:o.createdAt,"header-class":"bg-grey-2 text-red","expand-icon-class":"text-white"}},[e("div",{staticClass:"q-pa-md"},[e("div",{staticClass:"flex flex-center"},[e("q-table",{attrs:{data:o.entries.totalData,columns:t.totalColumns,"rows-per-page-options":[],"row-key":"name"},scopedSlots:t._u([{key:"body",fn:function(o){return[e("q-tr",{attrs:{props:o}},[e("q-td",{key:"totalIncome",attrs:{props:o}},[t._v(t._s(o.row.totalIncome))]),e("q-td",{key:"totalExpense",attrs:{props:o}},[t._v(t._s(o.row.totalExpense))]),e("q-td",{key:"totalCount",attrs:{props:o}},[t._v(t._s(o.row.totalCount))])],1)]}}],null,!0)})],1)]),e("div",{staticClass:"q-pa-md"},[e("div",{staticClass:"flex flex-center"},[e("q-table",{attrs:{data:o.entries.secondData,columns:t.secondColumns,"rows-per-page-options":[],"row-key":"name"},scopedSlots:t._u([{key:"body",fn:function(o){return[e("q-tr",{attrs:{props:o}},[e("q-td",{key:"courierCost",attrs:{props:o}},[t._v("\n                              "+t._s(o.row.courierCost)+"\n                              "),e("q-popup-edit",{attrs:{buttons:""},scopedSlots:t._u([{key:"title",fn:function(){},proxy:!0}],null,!0),model:{value:o.row.courierCost,callback:function(e){t.$set(o.row,"courierCost",t._n(e))},expression:"props.row.courierCost"}},[e("q-input",{attrs:{dense:"",autofocus:""},model:{value:o.row.courierCost,callback:function(e){t.$set(o.row,"courierCost",t._n(e))},expression:"props.row.courierCost"}})],1)],1),e("q-td",{key:"manager",attrs:{props:o}},[t._v("\n                              "+t._s(o.row.manager)+"\n                              "),e("q-popup-edit",{attrs:{buttons:""},scopedSlots:t._u([{key:"title",fn:function(){},proxy:!0}],null,!0),model:{value:o.row.manager,callback:function(e){t.$set(o.row,"manager",t._n(e))},expression:"props.row.manager"}},[e("q-input",{attrs:{dense:"",autofocus:""},model:{value:o.row.manager,callback:function(e){t.$set(o.row,"manager",t._n(e))},expression:"props.row.manager"}})],1)],1),e("q-td",{key:"seller",attrs:{props:o}},[t._v("\n                              "+t._s(o.row.seller)+"\n                              "),e("q-popup-edit",{attrs:{buttons:""},scopedSlots:t._u([{key:"title",fn:function(){},proxy:!0}],null,!0),model:{value:o.row.seller,callback:function(e){t.$set(o.row,"seller",t._n(e))},expression:"props.row.seller"}},[e("q-input",{attrs:{dense:"",autofocus:""},model:{value:o.row.seller,callback:function(e){t.$set(o.row,"seller",t._n(e))},expression:"props.row.seller"}})],1)],1),e("q-td",{key:"hhold",attrs:{props:o}},[t._v("\n                              "+t._s(o.row.hhold)+"\n                              "),e("q-popup-edit",{attrs:{buttons:""},scopedSlots:t._u([{key:"title",fn:function(){},proxy:!0}],null,!0),model:{value:o.row.hhold,callback:function(e){t.$set(o.row,"hhold",t._n(e))},expression:"props.row.hhold"}},[e("q-input",{attrs:{dense:"",autofocus:""},model:{value:o.row.hhold,callback:function(e){t.$set(o.row,"hhold",t._n(e))},expression:"props.row.hhold"}})],1)],1)],1)]}}],null,!0)})],1)]),e("div",{staticClass:"q-pa-md"},[e("div",{staticClass:"flex flex-center"},[e("q-table",{attrs:{data:o.entries.firstData,columns:t.firstColumns,"rows-per-page-options":[],"row-key":"name"},scopedSlots:t._u([{key:"top",fn:function(){return[e("q-btn",{attrs:{flat:"",dense:"",color:"primary",icon:"add"},on:{click:t.addRow}}),e("q-btn",{staticClass:"on-right",attrs:{flat:"",dense:"",color:"primary",icon:"remove"},on:{click:t.removeRow}}),e("q-space")]},proxy:!0},{key:"body",fn:function(o){return[e("q-tr",{attrs:{props:o}},[e("q-td",{key:"partnerName",attrs:{props:o}},[t._v("\n                              "+t._s(o.row.partnerName)+"\n                              "),e("q-popup-edit",{attrs:{buttons:""},model:{value:o.row.partnerName,callback:function(e){t.$set(o.row,"partnerName",e)},expression:"props.row.partnerName"}},[e("q-input",{attrs:{dense:"",autofocus:"",counter:""},model:{value:o.row.partnerName,callback:function(e){t.$set(o.row,"partnerName",e)},expression:"props.row.partnerName"}})],1)],1),e("q-td",{key:"documentsCount",attrs:{props:o}},[t._v("\n                              "+t._s(o.row.documentsCount)+"\n                              "),e("q-popup-edit",{attrs:{buttons:""},model:{value:o.row.documentsCount,callback:function(e){t.$set(o.row,"documentsCount",t._n(e))},expression:"props.row.documentsCount"}},[e("q-input",{attrs:{type:"number",dense:"",autofocus:""},model:{value:o.row.documentsCount,callback:function(e){t.$set(o.row,"documentsCount",t._n(e))},expression:"props.row.documentsCount"}})],1)],1),e("q-td",{key:"notariusCost",attrs:{props:o}},[t._v("\n                              "+t._s(o.row.notariusCost)+"\n                              "),e("q-popup-edit",{attrs:{buttons:""},model:{value:o.row.notariusCost,callback:function(e){t.$set(o.row,"notariusCost",t._n(e))},expression:"props.row.notariusCost"}},[e("q-input",{attrs:{type:"number",dense:"",autofocus:""},model:{value:o.row.notariusCost,callback:function(e){t.$set(o.row,"notariusCost",t._n(e))},expression:"props.row.notariusCost"}})],1)],1),e("q-td",{key:"translatorCost",attrs:{props:o}},[t._v("\n                              "+t._s(o.row.translatorCost)+"\n                              "),e("q-popup-edit",{attrs:{buttons:""},model:{value:o.row.translatorCost,callback:function(e){t.$set(o.row,"translatorCost",t._n(e))},expression:"props.row.translatorCost"}},[e("q-input",{attrs:{type:"number",dense:"",autofocus:""},model:{value:o.row.translatorCost,callback:function(e){t.$set(o.row,"translatorCost",t._n(e))},expression:"props.row.translatorCost"}})],1)],1),e("q-td",{key:"totalAmount",attrs:{props:o}},[t._v("\n                              "+t._s(o.row.totalAmount)+"\n                              "),e("q-popup-edit",{attrs:{buttons:""},model:{value:o.row.totalAmount,callback:function(e){t.$set(o.row,"totalAmount",t._n(e))},expression:"props.row.totalAmount"}},[e("q-input",{attrs:{type:"number",dense:"",autofocus:""},model:{value:o.row.totalAmount,callback:function(e){t.$set(o.row,"totalAmount",t._n(e))},expression:"props.row.totalAmount"}})],1)],1),e("q-td",{key:"revenueAmount",attrs:{props:o}},[t._v(t._s(o.row.totalAmount-(o.row.notariusCost+o.row.translatorCost)))])],1)]}}],null,!0)})],1)])])],1)])})),0)],1)],1)])])])},r=[],n=(e("8e6e"),e("8a81"),e("456d"),e("ac6a"),e("cadf"),e("06db"),e("4db1")),s=e.n(n),l=e("c47a"),u=e.n(l),i=e("bc3a"),c=e.n(i);function p(t,o){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);o&&(a=a.filter((function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable}))),e.push.apply(e,a)}return e}function d(t){for(var o=1;o<arguments.length;o++){var e=null!=arguments[o]?arguments[o]:{};o%2?p(Object(e),!0).forEach((function(o){u()(t,o,e[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):p(Object(e)).forEach((function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(e,o))}))}return t}var m=[{name:"partnerName",align:"left",label:"Партнёр",field:"partnerName"},{name:"documentsCount",align:"center",label:"Количество (шт.)",field:"documentsCount"},{name:"notariusCost",align:"center",label:"Нотариус (₽)",field:"notariusCost"},{name:"translatorCost",align:"center",label:"Переводчик (₽)",field:"center"},{name:"totalAmount",align:"center",label:"Цена (₽)",field:"totalAmount"},{name:"revenueAmount",align:"center",label:"Доход (₽)",field:"revenueAmount"}],f=[{name:"courierCost",align:"center",label:"Курьер (₽)",field:"courierCost"},{name:"manager",align:"center",label:"Менеджер (₽)",field:"manager"},{name:"seller",align:"center",label:"Продавец (₽)",field:"seller"},{name:"hhold",align:"center",label:"ХР (₽)",field:"hhold"}],w=[{name:"totalIncome",align:"center",label:"Доходы (₽)",field:"totalIncome"},{name:"totalExpense",align:"center",label:"Расходы (₽)",field:"totalExpense"},{name:"totalCount",align:"center",label:"Выручка (₽)",field:"totalCount"}],b={name:"PageIndex",data:function(){return{tab:"create",partnerName:"Партнёр",entriesCount:0,rowCount:0,firstData:[],secondData:[{courierCost:800,manager:1e3,seller:800,hhold:0}],totalData:[],fetchData:[],firstColumns:m,secondColumns:f,totalColumns:w}},methods:{addRow:function(){var t=Math.floor(Math.random()*(this.firstData.length+1)),o={partnerName:"Партнёр",notariusCost:250,translatorCost:100,totalAmount:7e3,documentsCount:0,revenueAmount:0};0===this.firstData.length&&(this.rowCount=0),o.id=++this.rowCount;var e=d({},o);this.firstData=[].concat(s()(this.firstData.slice(0,t)),[e],s()(this.firstData.slice(t)))},removeRow:function(){var t=Math.floor(Math.random()*this.firstData.length);this.firstData=[].concat(s()(this.firstData.slice(0,t)),s()(this.firstData.slice(t+1)))},sendEntry:function(){var t=this;this.$q.loading.show({message:"Регистрация"});var o={firstData:this.firstData,secondData:this.secondData,totalData:this.totalData},e={entryData:JSON.stringify(o)};c.a.post("/entries/create",e).then((function(o){t.$q.loading.hide(),t.$q.notify({message:"Зарегистрирован. Для просмотра обновите страницу.",color:"green",position:"center"})})).catch((function(o){t.$q.loading.hide(),t.$q.notify({message:"Ошибка",color:"red",position:"center"})}))},countTotalCount:function(){var t=0,o=0,e=0;this.firstData.forEach((function(t){t.revenueAmount=t.totalAmount-(t.notariusCost+t.translatorCost),e+=t.revenueAmount})),this.secondData.forEach((function(t){o+=t.courierCost+t.hhold+t.manager+t.seller})),t=e-o,this.totalData=[{totalIncome:e,totalExpense:o,totalCount:t}]}},created:function(){var t=this;this.$q.loading.show({message:"Подгружаем отчеты..."}),c.a.get("/entries").then((function(o){t.entriesCount=o.data.length,o.data.reverse(),console.log(o.data),o.data.forEach((function(e){if(e.entries){e.entries=JSON.parse(e.entries);var a=new Date(e.createdAt);e.createdAt=a.toLocaleString()}t.fetchData=o.data,t.fetchData.forEach((function(t){t.entries=JSON.parse(t.entries)})),console.log(t.fetchData)})),t.$q.loading.hide()})).catch((function(o){t.$q.loading.hide(),console.log(o)}))}},C=b,v=(e("8041"),e("2877")),h=e("9989"),q=e("429b"),y=e("7460"),_=e("58a8"),k=e("eb85"),g=e("adad"),x=e("823b"),$=e("eaac"),D=e("2c91"),A=e("9c40"),S=e("bd08"),N=e("db86"),O=e("42a1"),E=e("27f9"),Q=e("3b73"),j=Object(v["a"])(C,a,r,!1,null,null,null);o["default"]=j.exports;j.options.components=Object.assign({QPage:h["a"],QTabs:q["a"],QTab:y["a"],QBadge:_["a"],QSeparator:k["a"],QTabPanels:g["a"],QTabPanel:x["a"],QTable:$["a"],QSpace:D["a"],QBtn:A["a"],QTr:S["a"],QTd:N["a"],QPopupEdit:O["a"],QInput:E["a"],QExpansionItem:Q["a"]},j.options.components)},af78:function(t,o,e){}}]);