webpackJsonp([0,2],[,function(t,s,e){e(6);var i=e(0)(e(10),e(4),null,null);t.exports=i.exports},,function(t,s,e){e(7);var i=e(0)(e(11),e(5),"data-v-7c4f269e",null);t.exports=i.exports},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[t._m(0),t._v(" "),e("div",{staticClass:"content"},[t._m(1),t._v(" "),e("h1",{staticClass:"example"},[t._v("Example")]),t._v(" "),e("div",{staticClass:"item"},[e("h1",[t._v("default")]),t._v(" "),e("slider",t._b({staticClass:"innlineblock"},"slider",t.setting)),t._v(" "),t._m(2)],1),t._v(" "),e("div",{staticClass:"item"},[e("h1",[t._v("Setting1")]),t._v(" "),e("slider",t._b({staticClass:"innlineblock"},"slider",t.setting1)),t._v(" "),t._m(3)],1),t._v(" "),e("div",{staticClass:"item"},[e("h1",[t._v("Setting2")]),t._v(" "),e("slider",t._b({staticClass:"innlineblock"},"slider",t.setting2)),t._v(" "),t._m(4)],1)])])},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"header"},[t._v("\n        vue-image-scroll"),e("br"),t._v(" "),e("a",{staticClass:"btn",attrs:{href:"https://github.com/ShanaMaid/vue-image-scroll"}},[t._v("View on GitHub")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"start"},[e("h1",[t._v("Quick Start")]),t._v(" "),e("h2",[t._v("Installation(安装)")]),t._v(" "),e("div",{staticClass:"code white"},[e("br"),t._v("\n                npm install vue-image-scroll\n            "),e("br"),e("br")]),t._v(" "),e("br"),t._v(" "),e("h2",[t._v("Usage(使用方法)")]),t._v(" "),e("div",{staticClass:"code white"},[e("pre",[t._v('\n    <template>\n      <div>\n       <slider v-bind="setting">'),t._v("\n      </div>\n    </template>\n\n    <script>\n    import slider from 'vue-image-scroll';\n\n    export default {\n      components: {\n        slider\n      },\n      data: function() {\n        return {\n          setting: {\n            image: ['1.jpg', '2.jpg', '3.jpg']\n          }\n        }\n      }\n    }\n    </script>\n          ")])]),t._v(" "),e("br"),t._v(" "),e("h2",[t._v("Value-Default(默认值)")]),t._v(" "),e("div",{staticClass:"code "},[e("pre",[t._v("\n  "),e("span",{staticClass:"white"},[t._v("{")]),t._v("\n    "),e("span",{staticClass:"keyword"},[t._v("styleObject")]),t._v(":{\n       width: '750',\n       height: '250'\n    }, "),e("span",{staticClass:"gray"},[t._v("//滚动框样式 宽度默认750px 高度默认250px 其余样式小驼峰命名\n        background-color => backgroundColor")]),t._v("\n    "),e("span",{staticClass:"keyword"},[t._v("image")]),t._v(": null, "),e("span",{staticClass:"gray"},[t._v("//图片数组")]),t._v("\n    "),e("span",{staticClass:"keyword"},[t._v("interval")]),t._v(":2000, "),e("span",{staticClass:"gray"},[t._v("//滚动间隔,单位ms,默认2000")]),t._v("\n    "),e("span",{staticClass:"keyword"},[t._v("imgStyle")]),t._v(":null,"),e("span",{staticClass:"gray"},[t._v("//图片样式，宽度和高度不可设置，样式名字小驼峰命名")]),t._v("\n    "),e("span",{staticClass:"keyword"},[t._v("autoRoll")]),t._v(":true, "),e("span",{staticClass:"gray"},[t._v("//自动滚动")]),t._v("\n    "),e("span",{staticClass:"keyword"},[t._v("direction")]),t._v(":left "),e("span",{staticClass:"gray"},[t._v("//滚动方向, left or right")]),t._v("\n  "),e("span",{staticClass:"white"},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"code"},[e("pre",[t._v("\n  "),e("span",{staticClass:"white"},[t._v("{")]),t._v("\n    "),e("span",{staticClass:"keyword"},[t._v("image")]),t._v(": [\n     'static/img/1-1.jpg', \n     'static/img/1-2.jpg', \n     'static/img/1-3.jpg', \n     'static/img/1-4.jpg', \n     'static/img/1-5.jpg'\n    ]\n  "),e("span",{staticClass:"white"},[t._v("}")]),t._v("\n          ")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"code"},[e("pre",[t._v("\n  "),e("span",{staticClass:"white"},[t._v("{")]),t._v("\n    "),e("span",{staticClass:"keyword"},[t._v("styleObject")]),t._v(": {\n      width: '550',\n      height: '250',\n      backgroundColor: 'rgba(0,225,226,0.2)',\n      borderRadius: '20px'\n    },\n    "),e("span",{staticClass:"keyword"},[t._v("image")]),t._v(": [\n        {\n          src: 'static/img/1-1.jpg',\n          tagName: '我是标签1',  "),e("span",{staticClass:"gray"},[t._v("//标签内容")]),t._v("\n          tagStyle: {           "),e("span",{staticClass:"gray"},[t._v("//标签样式")]),t._v("\n            backgroundColor: 'blue',  \n          }\n        },\n        {\n          src: 'static/img/1-2.jpg',\n          tagName: '我是标签2',\n          tagStyle: {\n            backgroundColor: 'greeen',\n            color: 'black',\n            fontSize: '20px'\n          }\n        },\n        {\n          src: 'static/img/1-3.jpg',\n          tagName: '我是标签2'\n        },\n        {\n          src: 'static/img/1-4.jpg',\n          tagName: '我是标签4'\n        },\n        {\n          src: 'static/img/1-5.jpg',\n          tagName: '我是标签5'\n        },\n        ],\n    interval: 1000,\n    "),e("span",{staticClass:"keyword"},[t._v("imgStyle")]),t._v(": {\n      borderRadius: '20px'\n    },\n   "),e("span",{staticClass:"keyword"},[t._v("autoRoll")]),t._v(": true,\n   "),e("span",{staticClass:"keyword"},[t._v("direction")]),t._v(": 'right'\n  "),e("span",{staticClass:"white"},[t._v("}")]),t._v("\n          ")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"code"},[e("pre",[t._v("\n  "),e("span",{staticClass:"white"},[t._v("{")]),t._v("\n    "),e("span",{staticClass:"keyword"},[t._v("styleObject")]),t._v(": {\n      width: '250',\n      height: '150'\n    },\n    "),e("span",{staticClass:"keyword"},[t._v("image")]),t._v(": [\n    'static/img/1-1.jpg', \n    'static/img/1-2.jpg', \n    'static/img/1-3.jpg', \n    'static/img/1-4.jpg', \n    'static/img/1-5.jpg'],\n    "),e("span",{staticClass:"keyword"},[t._v("imgStyle")]),t._v(": {\n      borderRadius: '20px'\n    },\n    "),e("span",{staticClass:"keyword"},[t._v("autoRoll")]),t._v(": false,\n   "),e("span",{staticClass:"white"},[t._v("}")]),t._v("\n          ")])])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",{staticClass:"slider",style:t.styleObject},[t._l(t.image,function(s,i){return e("li",{class:[t.move[i]]},["object"==typeof s?[e("img",{style:t.imgStyle,attrs:{src:s.src},on:{click:function(s){t.target(i)}}}),t._v(" "),e("span",{class:{tag:s.tagName},style:s.tagStyle},[t._v(t._s(s.tagName))])]:t._e(),t._v(" "),"string"==typeof s?[e("img",{style:t.imgStyle,attrs:{src:s},on:{click:function(s){t.target(i)}}})]:t._e()],2)}),t._v(" "),e("li",{staticClass:"button"},t._l(t.image,function(s,i){return e("em",{class:[t.move[i]],on:{click:function(s){t.target(i)}}})})),t._v(" "),e("li",{staticClass:"control"},[e("em",{on:{click:t.prePic}}),t._v(" "),e("em",{on:{click:t.nextPic}})])],2)},staticRenderFns:[]}},function(t,s){},function(t,s){},,,function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(3),a=e.n(i);s.default={name:"app",components:{slider:a.a},data:function(){return{setting:{image:["static/img/1-1.jpg","static/img/1-2.jpg","static/img/1-3.jpg","static/img/1-4.jpg","static/img/1-5.jpg"]},setting1:{styleObject:{width:"550",height:"250",backgroundColor:"rgba(0,225,226,0.2)",borderRadius:"20px"},image:[{src:"static/img/1-1.jpg",tagName:"我是标签1",tagStyle:{backgroundColor:"blue"}},{src:"static/img/1-2.jpg",tagName:"我是标签2",tagStyle:{backgroundColor:"greeen",color:"black",fontSize:"20px"}},{src:"static/img/1-3.jpg",tagName:"我是标签2"},{src:"static/img/1-4.jpg",tagName:"我是标签4"},{src:"static/img/1-5.jpg",tagName:"我是标签5"}],interval:1e3,imgStyle:{borderRadius:"20px"},autoRoll:!0,direction:"right"},setting2:{styleObject:{width:"250",height:"150"},image:["static/img/1-1.jpg","static/img/1-2.jpg","static/img/1-3.jpg","static/img/1-4.jpg","static/img/1-5.jpg"],imgStyle:{borderRadius:"20px"},autoRoll:!1,direction:"right"}}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"slider",props:{styleObject:{default:{width:"750",height:"250"}},image:{require:!0,type:Array,validator:function(t){return t.length>=3}},interval:{default:2e3},imgStyle:{default:{}},autoRoll:{default:!0},direction:{default:"left"}},mounted:function(){var t=parseInt(this.styleObject.width),s=parseInt(this.styleObject.height);this.imgStyle.width=.7*t+"px",this.imgStyle.height=.9*s+"px",this.styleObject.width+="px",this.styleObject.height+="px";for(var e=3;e<this.image.length;e++)this.move[e]="wait";this.autoRoll&&("left"===this.direction?setInterval(this.nextPic,this.interval):setInterval(this.prePic,this.interval))},data:function(){return{move:["left","center","right"]}},methods:{nextPic:function(t){var s=this.move.pop();this.move.unshift(s)},prePic:function(t){var s=this.move.shift();this.move.push(s)},target:function(t){for(var s=this.imgSrc.length,e=0;e<s;e++)this.move[e]="wait";this.move[t]="center",this.move[t+1<s?t+1:0]="right",this.move[t-1===-1?s-1:t-1]="left",this.move=this.move.concat()}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(2),a=e(1),n=e.n(a);i.a.config.productionTip=!1,new i.a({el:"#app",template:"<App/>",components:{App:n.a}})}],[12]);
//# sourceMappingURL=app.1eceefce7b24f11baa15.js.map