webpackJsonp([6],{"9Xhq":function(t,e,a){"use strict";var i=a("Eoz/"),r=a.n(i);e.a={data:function(){return{dateFormat:"D, MMM h a"}},methods:{formattedDate:function(t){var e="";return t&&(e=r()(t,this.dateFormat)),e}}}},Frut:function(t,e,a){"use strict";var i=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"device-editor-container"},[e("div",[e("editor")],1)])};i._withStripped=!0;var r={render:i,staticRenderFns:[]};e.a=r},Hcfe:function(t,e,a){"use strict";var i=a("tNhc");e.a={layout:"admin",components:{Editor:i.a}}},TYXO:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"form[data-v-277a5424]{display:grid;grid-gap:15px;grid-template-columns:50% 50%}#category[data-v-277a5424],#title[data-v-277a5424]{grid-column:1/2}#desc[data-v-277a5424],#file[data-v-277a5424]{grid-column:2/3}button[data-v-277a5424]{grid-column:1/-1}.fa[data-v-277a5424]{cursor:pointer;color:#cd5c5c;position:absolute;top:-60px;right:10px}@media(max-width:767px){form[data-v-277a5424]{grid-template-columns:100%}#category[data-v-277a5424],#desc[data-v-277a5424],#file[data-v-277a5424],#title[data-v-277a5424],button[data-v-277a5424]{grid-column:1/-1}}",""])},auW9:function(t,e,a){var i=a("TYXO");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("120db5e2",i,!1,{sourceMap:!1})},hCCh:function(t,e,a){var i=a("kTjF");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("52d4007e",i,!1,{sourceMap:!1})},kTjF:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".device-editor-container{min-height:100vh;display:grid;-ms-flex-line-pack:center;align-content:center;background:#333}.device-editor-container div{margin:0 auto}",""])},qy93:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{attrs:{id:"galleryForm"}},[a("span",{on:{click:function(e){return e.preventDefault(),t.resetForm(e)}}},[a("i",{staticClass:"fa fa-asterisk fa-3x"})]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.details.title,expression:"details.title"}],attrs:{type:"text",id:"title",placeholder:"Title",autocomplete:"title"},domProps:{value:t.details.title},on:{input:function(e){e.target.composing||t.$set(t.details,"title",e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.details.description,expression:"details.description"}],attrs:{type:"text",id:"desc",placeholder:"Description",autocomplete:"description"},domProps:{value:t.details.description},on:{input:function(e){e.target.composing||t.$set(t.details,"description",e.target.value)}}}),a("input",{attrs:{type:"text",id:"datepicker-trigger",placeholder:"Select start date"},domProps:{value:t.formattedDate(t.details.start_date)},on:{focus:t.clearField}}),a("AirbnbStyleDatepicker",{attrs:{"trigger-element-id":"datepicker-trigger",mode:"single","fullscreen-mobile":!0,"date-one":t.details.start_date,"months-to-show":1},on:{"date-one-selected":function(e){t.details.start_date=e}}}),a("input",{attrs:{type:"text",id:"datepicker-trigger1",placeholder:"Select end date"},domProps:{value:t.formattedDate(t.details.end_date)},on:{focus:t.clearField}}),a("AirbnbStyleDatepicker",{attrs:{"trigger-element-id":"datepicker-trigger1",mode:"single","fullscreen-mobile":!0,"date-one":t.details.end_date,"months-to-show":1},on:{"date-one-selected":function(e){t.details.end_date=e}}}),a("select",{directives:[{name:"model",rawName:"v-model",value:t.details.category_id,expression:"details.category_id"}],attrs:{id:"category"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.details,"category_id",e.target.multiple?a:a[0])}}},[a("option",[t._v("Select category")]),t._l(t.categories,function(e){return t.categories?a("option",{domProps:{value:e.id}},[t._v("\n            "+t._s(e.title)+"\n        ")]):t._e()})],2),a("input",{attrs:{type:"file",accept:"image/*",id:"file"},on:{change:t.onImageChange}}),a("button",{on:{click:function(e){return e.preventDefault(),t.submitForm(e)}}},[t._v(t._s(t.submitTxt))])],1)};i._withStripped=!0;var r={render:i,staticRenderFns:[]};e.a=r},rFpY:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("Hcfe"),r=a("Frut"),n=!1;var s=function(t){n||a("hCCh")},o=a("VU/8")(i.a,r.a,!1,s,null,null);o.options.__file="resources/nuxt/pages/admin/events/_id/edit.vue",e.default=o.exports},tNhc:function(t,e,a){"use strict";var i=a("zVvZ"),r=a("qy93"),n=!1;var s=function(t){n||a("auW9")},o=a("VU/8")(i.a,r.a,!1,s,"data-v-277a5424",null);o.options.__file="resources/nuxt/components/events/editor.vue",e.a=o.exports},zVvZ:function(t,e,a){"use strict";var i=a("Xxa5"),r=a.n(i),n=a("exGp"),s=a.n(n),o=a("9Xhq");e.a={mixins:[o.a],data:function(){return{details:{title:"",description:"",start_date:"",end_date:"",category_id:"Select category",image:""},categories:"",invalidArrivalDate:null,invalidDepartureDate:null,submitTxt:"Submit"}},methods:{onImageChange:function(t){t.target.files.length&&(this.details.image=t.target.files[0])},resetForm:function(){this.details.title="",this.details.description="",this.details.start_date="",this.details.end_date="",this.details.category_id="",this.details.image="",this.$emit("cancelForm")},getEvents:function(){var t=this;this.$route.params.id&&this.$store.state.events.allEvents?this.details=this.$store.state.events.allEvents.filter(function(e){return e.id==t.$route.params.id})[0]:this.$route.params.id&&this.loadGallery()},submitForm:function(){var t=s()(r.a.mark(function t(){var e,a,i;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.submitTxt="Submitting ...",(e=new FormData).append("title",this.details.title),e.append("description",this.details.description),e.append("image",this.details.image),e.append("start_date",this.details.start_date),e.append("end_date",this.details.end_date),e.append("category_id",this.details.category_id),!this.$route.params.id){t.next=22;break}return t.prev=9,t.next=12,this.$axios.$put("/api/programs/"+this.$route.params.id,this.details);case 12:return a=t.sent,t.abrupt("return",console.log(a));case 17:t.prev=17,t.t0=t.catch(9),console.log(t.t0);case 20:t.next=33;break;case 22:return t.prev=22,t.next=25,this.$axios.$post("/api/programs",e);case 25:i=t.sent,this.$store.dispatch("events/allEvents",i),this.$emit("cancelForm"),t.next=33;break;case 30:t.prev=30,t.t1=t.catch(22),console.log(t.t1);case 33:case"end":return t.stop()}},t,this,[[9,17],[22,30]])}));return function(){return t.apply(this,arguments)}}(),clearField:function(){this.invalidArrivalDate=this.invalidDepartureDate=""},getCategories:function(){var t=s()(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$axios.$get("/api/categories");case 3:this.categories=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}},t,this,[[0,6]])}));return function(){return t.apply(this,arguments)}}(),loadGallery:function(){var t=s()(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$axios.$get("/api/programs/"+this.$route.params.id);case 3:this.details=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),this.errors=t.t0;case 9:case"end":return t.stop()}},t,this,[[0,6]])}));return function(){return t.apply(this,arguments)}}()},mounted:function(){this.getEvents(),this.getCategories()}}}});