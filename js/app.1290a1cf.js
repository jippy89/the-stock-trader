(function(t){function e(e){for(var o,r,c=e[0],s=e[1],u=e[2],f=0,l=[];f<c.length;f++)r=c[f],i[r]&&l.push(i[r][0]),i[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);d&&d(e);while(l.length)l.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(o=!1)}o&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},r={app:0},i={app:0},a=[];function c(t){return s.p+"js/"+({portfolio:"portfolio",stocks:"stocks"}[t]||t)+"."+{portfolio:"f8f8c7cb",stocks:"74284093"}[t]+".js"}function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={portfolio:1,stocks:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise(function(e,n){for(var o="css/"+({portfolio:"portfolio",stocks:"stocks"}[t]||t)+"."+{portfolio:"54916c24",stocks:"68e6ae9f"}[t]+".css",i=s.p+o,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var u=a[c],f=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(f===o||f===i))return e()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){u=l[c],f=u.getAttribute("data-href");if(f===o||f===i)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var o=e&&e.target&&e.target.src||i,a=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete r[t],d.parentNode.removeChild(d),n(a)},d.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){r[t]=0}));var o=i[t];if(0!==o)if(o)e.push(o[2]);else{var a=new Promise(function(e,n){o=i[t]=[e,n]});e.push(o[2]=a);var u,f=document.createElement("script");f.charset="utf-8",f.timeout=120,s.nc&&f.setAttribute("nonce",s.nc),f.src=c(t),u=function(e){f.onerror=f.onload=null,clearTimeout(l);var n=i[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,a=new Error("Loading chunk "+t+" failed.\n("+o+": "+r+")");a.type=o,a.request=r,n[1](a)}i[t]=void 0}};var l=setTimeout(function(){u({type:"timeout",target:f})},12e4);f.onerror=f.onload=u,document.head.appendChild(f)}return Promise.all(e)},s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="https://jippy89.github.io/the-stock-trader/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],f=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var d=f;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"017c":function(t,e,n){"use strict";e["a"]={filters:{currency:function(t){return"$".concat(t.toLocaleString())}}}},"034f":function(t,e,n){"use strict";var o=n("64a9"),r=n.n(o);r.a},"56d7":function(t,e,n){"use strict";n.r(e);var o={};n.r(o),n.d(o,"loadData",function(){return J});n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),i=n("d847"),a=n.n(i),c=n("795b"),s=n.n(c),u=n("bc3a"),f=n.n(u);f.a.defaults.baseURL=Object({NODE_ENV:"production",BASE_URL:"https://jippy89.github.io/the-stock-trader/"}).baseURL||Object({NODE_ENV:"production",BASE_URL:"https://jippy89.github.io/the-stock-trader/"}).apiUrl||"https://vuejs-stocktrader-7b79c.firebaseio.com/";var l={},d=f.a.create(l);d.interceptors.request.use(function(t){return t},function(t){return s.a.reject(t)}),d.interceptors.response.use(function(t){return t},function(t){return s.a.reject(t)}),Plugin.install=function(t,e){t.axios=d,window.axios=d,a()(t.prototype,{axios:{get:function(){return d}},$axios:{get:function(){return d}}})},r["default"].use(Plugin);Plugin;var p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",{attrs:{id:"app"}},[n("el-header",[n("Header")],1),n("el-main",[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)],1)},m=[],h=n("cebc"),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",{attrs:{id:"navbar",type:"flex",gutter:3,align:"middle"}},[n("el-col",{attrs:{span:5}},[n("router-link",{attrs:{id:"brand",tag:"div",to:"/",exact:""}},[n("h1",[t._v("The Stock Trader")])])],1),n("el-col",{attrs:{span:4}},[n("el-menu",{attrs:{mode:"horizontal",router:!0,"default-active":t.$route.path,"background-color":"rgb(21,13,72)","text-color":"#fff","active-text-color":"lightgreen"}},[n("el-menu-item",{staticClass:"home",attrs:{index:"/"}}),n("el-menu-item",{attrs:{index:"/portfolio"}},[t._v("Portfolio")]),n("el-menu-item",{attrs:{index:"/stocks"}},[t._v("Stocks")])],1)],1),n("el-col",{staticClass:"funds",attrs:{offset:10,span:2}},[n("small",[t._v("Current Funds "),n("strong",[t._v(t._s(t._f("currency")(t.funds)))])])]),n("el-col",{attrs:{span:2}},[n("el-button",{attrs:{type:"warning"},on:{click:t.endDay}},[t._v("\n\t\t\tEnd Day\n\t\t")])],1)],1)},k=[],b=n("2f62"),g=n("017c"),y={mixins:[g["a"]],computed:{funds:function(){return this.$store.getters["funds"]}},methods:Object(h["a"])({},Object(b["b"])({randomizeStocks:"randomizeStocks",fetchData:"loadData"}),{endDay:function(){this.randomizeStocks()},saveData:function(){var t={funds:this.$store.getters.funds,stockPortfolio:this.$store.getters.stockPortfolio,stocks:this.$store.getters.stocks};axios.put("data.json",t)},loadData:function(){this.fetchData()}})},S=y,_=(n("f8ef"),n("2877")),O=Object(_["a"])(S,v,k,!1,null,"954423de",null),j=O.exports,T={components:{Header:j},methods:Object(h["a"])({},Object(b["b"])(["initStocks"])),created:function(){this.initStocks()}},E=T,x=(n("034f"),n("feba"),Object(_["a"])(E,p,m,!1,null,"4653cf7e",null)),w=x.exports,P=n("8c4f"),C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("h1",[t._v("Trade or View your portfolio")]),n("h6",[t._v("You may Save & Load your data")]),n("h6",[t._v("Click on 'End Day' to begin a New Day!")]),n("hr"),n("p",[t._v("Your current funds: "+t._s(t._f("currency")(t.funds)))])])},D=[],L={mixins:[g["a"]],name:"home",computed:Object(h["a"])({},Object(b["c"])(["funds"]))},N=L,q=(n("fcfb"),Object(_["a"])(N,C,D,!1,null,"d0970b70",null)),$=q.exports;r["default"].use(P["a"]);var A=new P["a"]({modes:"history",routes:[{path:"/",name:"home",component:$},{path:"/portfolio",name:"portfolio",component:function(){return n.e("portfolio").then(n.bind(null,"d66e"))}},{path:"/stocks",name:"stocks",component:function(){return n.e("stocks").then(n.bind(null,"fc58"))}}]}),K=(n("ac6a"),[{id:1,name:"BMW",price:110},{id:2,name:"Google",price:200},{id:3,name:"Apple",price:250},{id:4,name:"Twitter",price:250},{id:5,name:"Audi",price:120}]),B={stocks:[]},R={stocks:function(t){return t.stocks}},U={SET_STOCKS:function(t,e){t.stocks=e},RND_STOCKS:function(t){t.stocks.forEach(function(t){t.price=Math.round(t.price*(1+Math.random()-.5))})}},M={buyStock:function(t,e){var n=t.commit;n("BUY_STOCK",e)},initStocks:function(t){var e=t.commit;e("SET_STOCKS",K)},randomizeStocks:function(t){var e=t.commit;e("RND_STOCKS")}},z={state:B,getters:R,mutations:U,actions:M},I=(n("7f7f"),n("7514"),{funds:3e3,stocks:[]}),F={funds:function(t){return t.funds},stockPortfolio:function(t,e){return t.stocks.map(function(t){var n=e.stocks.find(function(e){return e.id==t.id});return{id:t.id,quantity:t.quantity,name:n.name,price:n.price}})}},Y={BUY_STOCK:function(t,e){var n=e.stockId,o=e.quantity,r=e.stockPrice,i=t.stocks.find(function(t){return t.id==n});i?i.quantity+=o:t.stocks.push({id:n,quantity:o}),t.funds-=r*o},SELL_STOCK:function(t,e){var n=e.stockId,o=e.quantity,r=e.stockPrice,i=t.stocks.find(function(t){return t.id==n});i.quantity>o?i.quantity-=o:t.stocks.splice(t.stocks.indexOf(i),1),t.funds+=r*o},SET_PORTFOLIO:function(t,e){var n=e.stockPortfolio,o=e.funds;t.funds=o,t.stocks=n||[]}},H={sellStock:function(t,e){var n=t.commit;n("SELL_STOCK",e)}},V={state:I,getters:F,mutations:Y,actions:H},J=function(t){var e=t.commit;axios.get("data.json").then(function(t){return t.data}).then(function(t){if(t){var n=t.stocks,o=t.funds,r=t.stockPortfolio,i={stockPortfolio:r,funds:o};e("SET_STOCKS",n),e("SET_PORTFOLIO",i)}}).catch(function(t){console.log(t)})};r["default"].use(b["a"]);var G=new b["a"].Store({actions:o,modules:[z,V]}),W=n("5c96"),Q=n.n(W),X=n("b2d6"),Z=n.n(X);n("0fae");r["default"].use(Q.a,{locale:Z.a}),r["default"].config.productionTip=!1,new r["default"]({router:A,store:G,render:function(t){return t(w)}}).$mount("#app")},"64a9":function(t,e,n){},"842c":function(t,e,n){},e64e:function(t,e,n){},f8ef:function(t,e,n){"use strict";var o=n("fd3b"),r=n.n(o);r.a},fcfb:function(t,e,n){"use strict";var o=n("e64e"),r=n.n(o);r.a},fd3b:function(t,e,n){},feba:function(t,e,n){"use strict";var o=n("842c"),r=n.n(o);r.a}});
//# sourceMappingURL=app.1290a1cf.js.map