webpackJsonp([2],{"8O13":function(t,e,a){var i=a("m56w");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("fea1f846",i,!1,{sourceMap:!1})},"8qi7":function(t,e,a){"use strict";var i=a("bemy"),s=a("mM44"),r=!1;var n=function(t){r||a("8O13")},o=a("VU/8")(i.a,s.a,!1,n,"data-v-7f828c6e",null);o.options.__file="resources/nuxt/components/itemAction.vue",e.a=o.exports},"9Xhq":function(t,e,a){"use strict";var i=a("Eoz/"),s=a.n(i);e.a={data:function(){return{dateFormat:"D, MMM h a"}},methods:{formattedDate:function(t){var e="";return t&&(e=s()(t,this.dateFormat)),e}}}},"9tdF":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("KZCL"),s=a("kb/4"),r=!1;var n=function(t){r||a("lQFf")},o=a("VU/8")(i.a,s.a,!1,n,null,null);o.options.__file="resources/nuxt/pages/admin/events/index.vue",e.default=o.exports},CCtq:function(t,e,a){"use strict";var i=a("uUg2"),s=a("ZL+6"),r=!1;var n=function(t){r||a("gwUU")},o=a("VU/8")(i.a,s.a,!1,n,"data-v-59f92a42",null);o.options.__file="resources/nuxt/components/events/list.vue",e.a=o.exports},DOaK:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".gallery-list[data-v-59f92a42]{background:#f9f9f9}.gallery-item[data-v-59f92a42]{color:#333;margin:10px 20px;display:grid;grid-gap:15px;grid-template-columns:1fr 1fr 200px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-bottom:1px solid #ccc;padding:20px 10px}.gallery-item[data-v-59f92a42]:last-child{border-bottom:none}.title[data-v-59f92a42]{margin:0;font-weight:700;display:block}.desc[data-v-59f92a42]{margin-top:5px}.gallery-item img[data-v-59f92a42]{width:100px}@media(max-width:767px){.gallery-item[data-v-59f92a42]{grid-template-columns:1fr 1fr 10px;margin:10px 0}.gallery-item img[data-v-59f92a42]{width:100px}}",""])},E5oW:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".show-modal{position:fixed;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:30%;padding:50px}.backdrop{width:100%;height:100%;background-color:hsla(0,0%,48%,.8);z-index:1000;position:fixed;top:0;left:0}.gallery-lists{margin:10px auto;width:60%;display:grid}.gallery-lists button{margin-bottom:10px}@media(max-width:767px){.gallery-lists,.show-modal{width:100%}}",""])},KZCL:function(t,e,a){"use strict";var i=a("CCtq"),s=a("tNhc");e.a={layout:"admin",components:{EventList:i.a,EventEditor:s.a},data:function(){return{addEvent:!1}}}},TYXO:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"form[data-v-277a5424]{display:grid;grid-gap:15px;grid-template-columns:50% 50%}#category[data-v-277a5424],#title[data-v-277a5424]{grid-column:1/2}#desc[data-v-277a5424],#file[data-v-277a5424]{grid-column:2/3}button[data-v-277a5424]{grid-column:1/-1}.fa[data-v-277a5424]{cursor:pointer;color:#cd5c5c;position:absolute;top:-60px;right:10px}@media(max-width:767px){form[data-v-277a5424]{grid-template-columns:100%}#category[data-v-277a5424],#desc[data-v-277a5424],#file[data-v-277a5424],#title[data-v-277a5424],button[data-v-277a5424]{grid-column:1/-1}}",""])},"ZL+6":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"gallery-list"},t._l(t.events,function(e){return a("div",{staticClass:"gallery-item"},[a("div",[a("span",{staticClass:"title"},[t._v(t._s(e.title))]),a("span",{staticClass:"desc"},[t._v(t._s(e.description))])]),a("img",{attrs:{src:"/"+e.image.file_path,alt:"bfa image"}}),a("div",[a("ItemAction",{attrs:{item:e,route:t.route,deleteApi:t.deleteApi,selectedItemStore:t.selectedItemStore,redirectUser:t.route,selectedItem:t.selectedItem}})],1)])}))};i._withStripped=!0;var s={render:i,staticRenderFns:[]};e.a=s},auW9:function(t,e,a){var i=a("TYXO");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("120db5e2",i,!1,{sourceMap:!1})},bemy:function(t,e,a){"use strict";e.a={props:["selectedItem","item","route","deleteApi","selectedItemStore","dispatchAction","redirectUser"],methods:{unsetSelected:function(){this.$store.dispatch(this.selectedItemStore,null)},setSelected:function(){this.$store.dispatch(this.selectedItemStore,this.item)}}}},gwUU:function(t,e,a){var i=a("DOaK");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("4a3e2ae0",i,!1,{sourceMap:!1})},"kb/4":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"gallery-container"},[a("div",{staticClass:"gallery-lists"},[a("button",{on:{click:function(e){e.preventDefault(),t.addEvent=!t.addEvent}}},[t._v("Add Program")]),a("event-list")],1),a("div",{class:{backdrop:t.addEvent}},[t.addEvent?a("div",{staticClass:"gallery-editor",class:{"show-modal":t.addEvent}},[a("event-editor",{attrs:{addEvent:t.addEvent},on:{cancelForm:function(e){t.addEvent=!1}}})],1):t._e()])])};i._withStripped=!0;var s={render:i,staticRenderFns:[]};e.a=s},lQFf:function(t,e,a){var i=a("E5oW");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("6cb8d91e",i,!1,{sourceMap:!1})},m56w:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".item-action[data-v-7f828c6e]{position:relative}.ellipsis[data-v-7f828c6e]{cursor:pointer;-webkit-transition:1s ease;transition:1s ease;color:#4d1f56;position:absolute;top:-15px;right:50px}.fa-times-circle[data-v-7f828c6e]{position:absolute;top:25px;right:-25px;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.selected-item[data-v-7f828c6e]{position:relative}.selected-item-action[data-v-7f828c6e]{position:absolute;right:100px}.selected-item-action i[data-v-7f828c6e]{margin:0 5px;font-size:19.2px;font-size:1.2rem;cursor:pointer}.fa-eye[data-v-7f828c6e]{color:#24bf83}.fa-pencil[data-v-7f828c6e]{color:#333}.fa-trash[data-v-7f828c6e]{color:#cd5c5c}@media(max-width:767px){.ellipsis[data-v-7f828c6e]{right:20px}.selected-item-action[data-v-7f828c6e]{right:5px;top:-50px}.fa-times-circle[data-v-7f828c6e]{position:absolute;top:40px;right:-25px;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.action-link[data-v-7f828c6e]{margin-bottom:9px}}",""])},mM44:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"item-action"},[t.selectedItem?a("div",{class:[{"selected-item":t.selectedItem},{"unselected-item":!t.selectedItem}]},[a("div",[t.selectedItem.id==t.item.id?a("span",{staticClass:"selected-item-action"},[a("a",{staticClass:"action-link",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.$router.push(t.route+"/"+t.item.id+"/edit")}}},[a("i",{staticClass:"fa fa-pencil"})]),a("a",{staticClass:"action-link",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.$router.push({path:t.route+"/"+t.item.id+"/delete",params:t.item.id,query:{deleteApi:t.deleteApi,redirectUser:t.redirectUser}})}}},[a("i",{staticClass:"fa fa-trash"})])]):t._e()])]):t._e(),a("span",{staticClass:"ellipsis",on:{click:function(e){t.setSelected(t.item)}}},[t.selectedItem&&t.selectedItem.id==t.item.id?a("i",{staticClass:"fa fa-times-circle fa-2x",on:{click:function(e){return e.stopPropagation(),t.unsetSelected(e)},mouseout:function(t){t.stopPropagation()}}}):a("i",{staticClass:"fa fa-ellipsis-v fa-2x"})])])};i._withStripped=!0;var s={render:i,staticRenderFns:[]};e.a=s},qy93:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{attrs:{id:"galleryForm"}},[a("span",{on:{click:function(e){return e.preventDefault(),t.resetForm(e)}}},[a("i",{staticClass:"fa fa-asterisk fa-3x"})]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.details.title,expression:"details.title"}],attrs:{type:"text",id:"title",placeholder:"Title",autocomplete:"title"},domProps:{value:t.details.title},on:{input:function(e){e.target.composing||t.$set(t.details,"title",e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.details.description,expression:"details.description"}],attrs:{type:"text",id:"desc",placeholder:"Description",autocomplete:"description"},domProps:{value:t.details.description},on:{input:function(e){e.target.composing||t.$set(t.details,"description",e.target.value)}}}),a("input",{attrs:{type:"text",id:"datepicker-trigger",placeholder:"Select start date"},domProps:{value:t.formattedDate(t.details.start_date)},on:{focus:t.clearField}}),a("AirbnbStyleDatepicker",{attrs:{"trigger-element-id":"datepicker-trigger",mode:"single","fullscreen-mobile":!0,"date-one":t.details.start_date,"months-to-show":1},on:{"date-one-selected":function(e){t.details.start_date=e}}}),a("input",{attrs:{type:"text",id:"datepicker-trigger1",placeholder:"Select end date"},domProps:{value:t.formattedDate(t.details.end_date)},on:{focus:t.clearField}}),a("AirbnbStyleDatepicker",{attrs:{"trigger-element-id":"datepicker-trigger1",mode:"single","fullscreen-mobile":!0,"date-one":t.details.end_date,"months-to-show":1},on:{"date-one-selected":function(e){t.details.end_date=e}}}),a("select",{directives:[{name:"model",rawName:"v-model",value:t.details.category_id,expression:"details.category_id"}],attrs:{id:"category"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.details,"category_id",e.target.multiple?a:a[0])}}},[a("option",[t._v("Select category")]),t._l(t.categories,function(e){return t.categories?a("option",{domProps:{value:e.id}},[t._v("\n            "+t._s(e.title)+"\n        ")]):t._e()})],2),a("input",{attrs:{type:"file",accept:"image/*",id:"file"},on:{change:t.onImageChange}}),a("button",{on:{click:function(e){return e.preventDefault(),t.submitForm(e)}}},[t._v(t._s(t.submitTxt))])],1)};i._withStripped=!0;var s={render:i,staticRenderFns:[]};e.a=s},tNhc:function(t,e,a){"use strict";var i=a("zVvZ"),s=a("qy93"),r=!1;var n=function(t){r||a("auW9")},o=a("VU/8")(i.a,s.a,!1,n,"data-v-277a5424",null);o.options.__file="resources/nuxt/components/events/editor.vue",e.a=o.exports},uUg2:function(t,e,a){"use strict";var i=a("8qi7");e.a={components:{ItemAction:i.a},data:function(){return{route:"/admin/events",deleteApi:"/api/programs",selectedItemStore:"events/selectedItem"}},computed:{events:function(){return this.$store.getters["events/allEvents"]},selectedItem:function(){return this.$store.getters["events/selectedItem"]}},mounted:function(){this.$store.dispatch("events/allEvents")}}},zVvZ:function(t,e,a){"use strict";var i=a("Xxa5"),s=a.n(i),r=a("exGp"),n=a.n(r),o=a("9Xhq");e.a={mixins:[o.a],data:function(){return{details:{title:"",description:"",start_date:"",end_date:"",category_id:"Select category",image:""},categories:"",invalidArrivalDate:null,invalidDepartureDate:null,submitTxt:"Submit"}},methods:{onImageChange:function(t){t.target.files.length&&(this.details.image=t.target.files[0])},resetForm:function(){this.details.title="",this.details.description="",this.details.start_date="",this.details.end_date="",this.details.category_id="",this.details.image="",this.$emit("cancelForm")},getEvents:function(){var t=this;this.$route.params.id&&this.$store.state.events.allEvents?this.details=this.$store.state.events.allEvents.filter(function(e){return e.id==t.$route.params.id})[0]:this.$route.params.id&&this.loadGallery()},submitForm:function(){var t=n()(s.a.mark(function t(){var e,a,i;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.submitTxt="Submitting ...",(e=new FormData).append("title",this.details.title),e.append("description",this.details.description),e.append("image",this.details.image),e.append("start_date",this.details.start_date),e.append("end_date",this.details.end_date),e.append("category_id",this.details.category_id),!this.$route.params.id){t.next=22;break}return t.prev=9,t.next=12,this.$axios.$put("/api/programs/"+this.$route.params.id,this.details);case 12:return a=t.sent,t.abrupt("return",console.log(a));case 17:t.prev=17,t.t0=t.catch(9),console.log(t.t0);case 20:t.next=33;break;case 22:return t.prev=22,t.next=25,this.$axios.$post("/api/programs",e);case 25:i=t.sent,this.$store.dispatch("events/allEvents",i),this.$emit("cancelForm"),t.next=33;break;case 30:t.prev=30,t.t1=t.catch(22),console.log(t.t1);case 33:case"end":return t.stop()}},t,this,[[9,17],[22,30]])}));return function(){return t.apply(this,arguments)}}(),clearField:function(){this.invalidArrivalDate=this.invalidDepartureDate=""},getCategories:function(){var t=n()(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$axios.$get("/api/categories");case 3:this.categories=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}},t,this,[[0,6]])}));return function(){return t.apply(this,arguments)}}(),loadGallery:function(){var t=n()(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$axios.$get("/api/programs/"+this.$route.params.id);case 3:this.details=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),this.errors=t.t0;case 9:case"end":return t.stop()}},t,this,[[0,6]])}));return function(){return t.apply(this,arguments)}}()},mounted:function(){this.getEvents(),this.getCategories()}}}});