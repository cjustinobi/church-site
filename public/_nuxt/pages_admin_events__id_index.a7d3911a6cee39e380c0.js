webpackJsonp([14],{"/3Ek":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"device-node-container"},[a("span",{staticClass:"span"},[a("span",[t._v("Title: ")]),t._v(t._s(t.gallery.title))]),a("span",{staticClass:"span"},[a("span",[t._v("Description: ")]),t._v(t._s(t.gallery.description))])])};s._withStripped=!0;var n={render:s,staticRenderFns:[]};e.a=n},BHox:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("sJY3"),n=a("/3Ek"),r=!1;var i=function(t){r||a("KNlt")},l=a("VU/8")(s.a,n.a,!1,i,"data-v-57b2b436",null);l.options.__file="resources/nuxt/pages/admin/events/_id/index.vue",e.default=l.exports},KNlt:function(t,e,a){var s=a("l24E");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("8e14a520",s,!1,{sourceMap:!1})},l24E:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".span[data-v-57b2b436]{display:block}.span span[data-v-57b2b436]{font-weight:700;color:#333}",""])},sJY3:function(t,e,a){"use strict";var s=a("Xxa5"),n=a.n(s),r=a("exGp"),i=a.n(r);e.a={layout:"admin",data:function(){return{gallery:""}},methods:{loadGallery:function(){var t=i()(n.a.mark(function t(){var e;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$axios.$get("/api/galleries/"+this.$route.params.id);case 3:e=t.sent,this.gallery=e,t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}},t,this,[[0,7]])}));return function(){return t.apply(this,arguments)}}(),getGallery:function(){var t=this;if(null===this.$store.state.user.allDeviceNodes)return this.loadGallery();this.gallery=this.$store.state.gallery.allGalleries.filter(function(e){return e.id==t.$route.params.id})[0]}},mounted:function(){this.getGallery()}}}});