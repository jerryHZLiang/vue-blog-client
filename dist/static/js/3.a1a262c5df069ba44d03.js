webpackJsonp([3],{FOpc:function(e,n){},yTJC:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t("Dd8w"),s=t.n(r),o=t("NYxO"),a={name:"Login",data:function(){return{username:"",password:""}},methods:s()({},Object(o.b)(["login"]),{onLogin:function(){var e=this;this.login({username:this.username,password:this.password}).then(function(){e.$router.push({path:e.$route.query.redirect||"/"})})}})},i={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"login"}},[t("h4",[e._v("用户名")]),e._v(" "),t("el-input",{attrs:{placeholder:"用户名"},model:{value:e.username,callback:function(n){e.username=n},expression:"username"}}),e._v(" "),t("h4",[e._v("密码")]),e._v(" "),t("el-input",{attrs:{type:"password",placeholder:"密码"},nativeOn:{keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.onLogin(n)}},model:{value:e.password,callback:function(n){e.password=n},expression:"password"}}),e._v(" "),t("el-button",{attrs:{size:"medium"},on:{click:e.onLogin}},[e._v("立即登录")]),e._v(" "),t("p",{staticClass:"notice"},[e._v("没有账号？"),t("router-link",{attrs:{to:"/register"}},[e._v("注册新用户")])],1)],1)},staticRenderFns:[]};var u=t("VU/8")(a,i,!1,function(e){t("FOpc")},null,null);n.default=u.exports}});
//# sourceMappingURL=3.a1a262c5df069ba44d03.js.map