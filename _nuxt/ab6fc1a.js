(window.webpackJsonp=window.webpackJsonp||[]).push([[19,15],{272:function(e,t,r){var content=r(285);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(75).default)("1f42bb44",content,!0,{sourceMap:!1})},284:function(e,t,r){"use strict";r(272)},285:function(e,t,r){var n=r(74)(!1);n.push([e.i,".user[data-v-e961438e]{margin:30px 0}.user strong[data-v-e961438e]{font-weight:700}",""]),e.exports=n},314:function(e,t,r){"use strict";r.r(t);var n={computed:{users:function(){return this.$store.getters["users/users"]}}},o=(r(284),r(33)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[e.users.length?r("div",{staticClass:"container"},[r("h1",[e._v("Current users")]),e._v(" "),e._l(e.users,(function(t){return r("div",{key:t.id,staticClass:"user"},[r("div",{staticClass:"user-item"},[r("strong",[e._v("ID:")]),e._v(" "+e._s(t.id)+" ")]),e._v(" "),r("div",{staticClass:"user-item"},[r("strong",[e._v("Name:")]),e._v(" "+e._s(t.first_name)+" "+e._s(t.last_name)+" ")]),e._v(" "),r("div",{staticClass:"user-item"},[r("strong",[e._v("Company:")]),e._v(" "+e._s(t.company)+" ")]),e._v(" "),r("div",{staticClass:"user-item"},[r("strong",[e._v("Email:")]),e._v(" "+e._s(t.email)+" ")]),e._v(" "),r("div",{staticClass:"user-item"},[r("strong",[e._v("Phone:")]),e._v(" "+e._s(t.phone))]),e._v(" "),e._l(JSON.parse(t.quiz),(function(t){return r("div",{staticClass:"user-item"},[r("strong",[e._v(e._s(t.question)+":")]),e._v(" "+e._s(t.answer))])}))],2)}))],2):r("h3",[e._v("There are no users added yet!")])])}),[],!1,null,"e961438e",null);t.default=component.exports},334:function(e,t,r){"use strict";r.r(t);var n=r(8),o=(r(51),{fetch:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==(r=e.store).getters["users/users"].length){t.next=4;break}return t.next=4,r.dispatch("users/fetch");case 4:case"end":return t.stop()}}),t)})))()}}),c=r(33),component=Object(c.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("section",{staticClass:"page page-user"},[t("div",{staticClass:"container"},[t("UsersList")],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{UsersList:r(314).default})}}]);