(function(e){function t(t){for(var a,i,s=t[0],l=t[1],u=t[2],p=0,d=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&d.push(n[i][0]),n[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);c&&c(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],a=!0,s=1;s<r.length;s++){var l=r[s];0!==n[l]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var a={},n={app:0},o=[];function i(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=a,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(r,a,function(t){return e[t]}.bind(null,a));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var c=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{staticStyle:{"text-align":"center",margin:"20px"}},[r("el-upload",{attrs:{action:"/","show-file-list":!1,"before-upload":e.submit,drag:""}},[r("i",{staticClass:"el-icon-upload"}),r("div",{staticClass:"el-upload__text"},[e._v("将文件拖到此处，或"),r("em",[e._v("点击上传")])])])],1),r("tbody",{staticStyle:{"text-align":"center"}},[r("tr",[e._m(0),e._l([0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"],(function(t,a){return r("td",{key:t,staticClass:"headerX",attrs:{rowspan:"1",colspan:"1"}},[r("div",{staticClass:"cell-box"},[r("div",{staticClass:"cell shadow headerX",staticStyle:{"background-color":"#f0f0f0"},on:{mouseleave:function(){return e.hover(-1,-1)},mouseenter:function(){return e.hover(a,-1)}}},[e._v(" "+e._s(t)+" ")]),r("div",{staticClass:"cell headerX",staticStyle:{"background-color":"#f0f0f0"},on:{mouseleave:function(){return e.hover(-1,-1)},mouseenter:function(){return e.hover(a,-1)}}},[e._v(" "+e._s(t)+" ")])])])}))],2)]),r("div",{staticClass:"scroll-view"},[r("tbody",{staticStyle:{"text-align":"center"}},e._l(e.showData,(function(t,a){return r("tr",{key:a+"_"+e.randerTime},[r("td",{staticClass:"headerY",attrs:{rowspan:"1",colspan:"1"}},[r("div",{staticClass:"cell-box"},[r("div",{staticClass:"cell shadow headerY",staticStyle:{"background-color":"#f0f0f0"},on:{mouseleave:function(){return e.hover(-1,-1)},mouseenter:function(){return e.hover(-1,a)}}},[e._v(" "+e._s((a+(e.param.page-1)*e.param.size).toString(16).toLocaleUpperCase())+" ")]),r("div",{staticClass:"cell headerY",staticStyle:{"background-color":"#f0f0f0"},on:{mouseleave:function(){return e.hover(-1,-1)},mouseenter:function(){return e.hover(-1,a)}}},[e._v(" "+e._s((a+(e.param.page-1)*e.param.size).toString(16).toLocaleUpperCase())+" ")])])]),e._l(t,(function(t,n){return r("td",{key:t+"_"+n,attrs:{rowspan:"1",colspan:"1"}},[r("div",{staticClass:"cell-box"},[r("div",{staticClass:"cell shadow",style:{fontStyle:null==t?"italic":null,backgroundColor:e.param.hoverX==n&&e.param.hoverY==a?"#409EFF":e.param.hoverX==n||e.param.hoverY==a?"rgb(179, 216, 255)":null==t?"#a0a0a0":null},on:{mouseleave:function(){return e.hover(-1,-1)},mouseenter:function(){return e.hover(n,a)}}},[e._v(" "+e._s(e.toChar(t))+" ")]),r("div",{staticClass:"cell",style:{backgroundColor:e.param.hoverX==n&&e.param.hoverY==a?"#409EFF":e.param.hoverX==n||e.param.hoverY==a?"rgb(179, 216, 255)":null==t?"#a0a0a0":null},on:{mouseleave:function(){return e.hover(-1,-1)},mouseenter:function(){return e.hover(n,a)}}},[e._v(" "+e._s(e.toHex(t))+" ")])])])}))],2)})),0)]),r("div",{staticStyle:{"text-align":"center",margin:"8px"}},[r("el-pagination",{attrs:{"current-page":e.param.page,"page-size":e.param.size,total:e.dataView.byteLength/16,layout:"total, sizes, prev, pager, next, jumper","page-sizes":[16,64,128,256,512,1024]},on:{"update:currentPage":function(t){return e.$set(e.param,"page",t)},"update:current-page":function(t){return e.$set(e.param,"page",t)},"update:pageSize":function(t){return e.$set(e.param,"size",t)},"update:page-size":function(t){return e.$set(e.param,"size",t)}}})],1)])},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("td",{attrs:{rowspan:"1",colspan:"1"}},[r("div",{staticClass:"cell-box"},[r("div",{staticClass:"cell shadow",staticStyle:{width:"5vw",border:"none"}}),r("div",{staticClass:"cell",staticStyle:{width:"5vw",border:"none",padding:"1px"}})])])}],i=(r("d3b7"),r("25f0"),{name:"app",computed:{showData:function(){for(var e=this.dataView,t=(this.param.page-1)*this.param.size*16,r=this.param.page*this.param.size*16,a=[],n=t;n<r;n+=16){var o=[];a.push(o);for(var i=0;i<16;i++)n+i<e.byteLength?o.push(e.getUint8(n+i)):o.push(null)}return a}},data:function(){return{param:{page:1,size:16,hoverX:-1,hoverY:-1},randerTime:0,dataView:{byteLength:0}}},methods:{hover:function(e,t){this.param.hoverX=e,this.param.hoverY=t},toChar:function(e){return null==e?"(null)":String.fromCharCode(e)},toHex:function(e){if(null==e)return"-";var t=e.toString(16).toLocaleUpperCase();while(t.length<2)t="0"+t;return t},submit:function(e){var t=this,r=new FileReader;return r.onload=function(e){var r=new DataView(e.target.result);t.dataView=r,t.randerTime++},r.readAsArrayBuffer(e),!1}}}),s=i,l=(r("f0e6"),r("2877")),u=Object(l["a"])(s,n,o,!1,null,"151bdbba",null),c=u.exports,p=r("5c96"),d=r.n(p);r("0fae");a["default"].use(d.a),a["default"].config.productionTip=!1,new a["default"]({render:function(e){return e(c)}}).$mount("#app")},c51e:function(e,t,r){},f0e6:function(e,t,r){"use strict";r("c51e")}});
//# sourceMappingURL=app.3e32f204.js.map