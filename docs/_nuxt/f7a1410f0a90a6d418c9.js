(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{191:function(t,e,r){"use strict";r(63);var n=r(80),o={name:"Directory",extends:r(17).a,data:function(){return{}},computed:{},methods:{},components:{List:n.a},mounted:function(){},props:{items:{type:Array,required:!0},margin:{type:String,required:!1,default:"mb2"},depth:{type:Number,required:!1,default:3},filters:{type:Array,required:!1,default:function(){return this.$store.state.filters}}}},c=r(7),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.filtered(t.items,t.filters).length>0?r("div",{staticClass:"directory"},[t._m(0),r("div",{staticClass:"columns"},t._l(t.filtered(t.items,t.filters),(function(p,i){return r("div",{key:i,staticClass:"column",class:[t.margin]},[r("list",{staticClass:"recursive-header",attrs:{entry:p,filters:t.filters,depth:t.depth,useIcon:!1}})],1)})),0)]):t._e()}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"markdown"},[e("hr")])}],!1,null,null,null);e.a=component.exports},192:function(t,e,r){"use strict";r(28);var n=r(17),o=r(80),c=r(191),l={extends:n.a,props:["entry","intro","items","document","showDoc"],components:{List:o.a,Directory:c.a},computed:{},data:function(){return{filters:this.$store.state.filters}},methods:{divide:function(){},getSrc:function(t){var e=this;if(!t.children)return!1;if(t.children.length<=0)return!1;var r=!1;return t.children.forEach((function(i){"src"===e.data[i].name&&(r=e.data[i])})),r}},created:function(){},mounted:function(){}},d=r(7),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"list-page"},[r("div",{staticClass:"inner",attrs:{id:"list-body"}},[t.document&&t.showDoc?r("div",{staticClass:"markdown pt2"},[r("div",{staticClass:"html",domProps:{innerHTML:t._s(t.document)}})]):t._e(),t.filtered(t.entry.children,t.filters).length>0?r("div",{staticClass:"direct"},[t._m(0),t._l(t.filtered(t.entry.children,t.filters),(function(e,i){return r("div",{key:i,staticClass:"nrow"},[r("div",{staticClass:"ncol-left"},[r("nuxt-link",{staticClass:"pink ptb1",attrs:{to:e.path},domProps:{innerHTML:t._s(e.name)}})],1),e.children?r("div",{staticClass:"ncol-columns mb1"},[r("div",{staticClass:"flow",class:{"no-cols":t.filtered(e.children,t.filters).length<=4}},[t._l(t.filtered(e.children,t.filters),(function(e,n){return r("nuxt-link",{key:n,attrs:{to:e.path},domProps:{innerHTML:t._s(e.name.replace(" (functions)","<span>functions</span>"))}})})),t.getSrc(e)?r("span",{staticClass:"extra"},t._l(t.filtered(t.getSrc(e).children,t.filters),(function(e,n){return r("nuxt-link",{key:n,attrs:{to:e.path},domProps:{innerHTML:t._s(e.name.replace(" (functions)","<span>functions</span>"))}})})),1):t._e()],2)]):t._e()])}))],2):t._e()])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"markdown pb1"},[e("hr")])}],!1,null,null,null);e.a=component.exports},194:function(t,e,r){"use strict";r.r(e);r(28),r(37);var n=r(4),o=(r(18),r(14),r(36),r(17)),c=r(191),l=r(192),d={extends:o.a,components:{Directory:c.a,ListPage:l.a},computed:{navStructure:function(){var t=this,e={};return this.$store.state.navigation.forEach((function(r){e[r[0]]=t.structure[r[0]]})),e},tweakedPage:function(){var t=this;return this.page.entry.children=[],Object.keys(this.structure).forEach((function(e){t.page.entry.children.push(t.structure[e].id)})),this.page}},data:function(){return{page:null,title:"Documentation, examples & code | openFrameworks | ofDocs"}},head:function(){return{title:this.title,meta:[{property:"og:title",content:this.title,vmid:"og:title"},{property:"og:image",content:"/files/images/ofw-logo.png",vmid:"og:image"}]}},asyncData:function(t){var e=t.$axios,r=(t.app,t.store,t.route,t.params,t.query,t.env,t.isDev,t.isHMR,t.redirect,t.error,t.payload);return Object(n.a)(regeneratorRuntime.mark((function t(){var path;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=5;break}return console.log("🚜  [Homepage.vue] payload:",r.entry.name),t.abrupt("return",{page:r});case 5:return path="/ofdocs/readme?as=json",console.log("🚜  [Homepage.vue] api:",path),t.prev=7,t.next=10,e.$get(path);case 10:return t.t0=t.sent,t.abrupt("return",{page:t.t0});case 14:t.prev=14,t.t1=t.catch(7),console.error("❌  [Homepage.vue] api:",t.t1.response.statusText,path);case 17:case"end":return t.stop()}}),t,null,[[7,14]])})))()},methods:{},created:function(){},mounted:function(){}},f=r(7),component=Object(f.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"homepage"}},[this._m(0),e("list-page",this._b({staticClass:"homepage",attrs:{showDoc:!1}},"list-page",this.tweakedPage,!1))],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"inner markdown mt4 mb4"},[r("p",[r("span",[r("a",{attrs:{href:"https://github.com/Autr/ofDocs"}},[t._v("ofDocs ")]),r("span",[t._v("is an alternative documentation, examples and code browser for ")])]),r("a",{attrs:{href:"https://openframeworks.cc/"}},[t._v("openFrameworks")]),r("span",[t._v(", which mirrors a list of files and folders into a website using Nuxt and Vue. Currently it is set up to serve documentation from ")]),r("a",{attrs:{href:"https://github.com/openframeworks/ofSite"}},[t._v("ofSite")]),r("span",[t._v(", READMEs and code from the ")]),r("a",{attrs:{href:"https://github.com/openframeworks/openFrameworks"}},[t._v("openFrameworks repository")]),r("span",[t._v(", and optionally ")]),r("a",{attrs:{href:"https://ofxaddons.com"}},[t._v("user-installed addons")]),r("span",[t._v(". ")])])])}],!1,null,null,null);e.default=component.exports}}]);