this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks.breadcrumbs=function(t){function e(e){for(var r,c,u=e[0],s=e[1],a=e[2],p=0,d=[];p<u.length;p++)c=u[p],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);for(l&&l(e);d.length;)d.shift()();return i.push.apply(i,a||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,u=1;u<n.length;u++){var s=n[u];0!==o[s]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={9:0},i=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var u=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var a=0;a<u.length;a++)e(u[a]);var l=s;return i.push([398,0]),n()}({0:function(t,e){t.exports=window.wp.element},1:function(t,e){t.exports=window.wp.i18n},11:function(t,e){t.exports=window.wp.primitives},19:function(t,e,n){"use strict";n.d(e,"o",(function(){return i})),n.d(e,"m",(function(){return c})),n.d(e,"l",(function(){return u})),n.d(e,"n",(function(){return s})),n.d(e,"j",(function(){return a})),n.d(e,"e",(function(){return l})),n.d(e,"g",(function(){return p})),n.d(e,"k",(function(){return d})),n.d(e,"c",(function(){return f})),n.d(e,"d",(function(){return b})),n.d(e,"h",(function(){return g})),n.d(e,"a",(function(){return m})),n.d(e,"i",(function(){return w})),n.d(e,"b",(function(){return S})),n.d(e,"f",(function(){return h}));var r,o=n(3);const i=Object(o.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),c=i.pluginUrl+"images/",u=i.pluginUrl+"build/",s=i.buildPhase,a=null===(r=o.STORE_PAGES.shop)||void 0===r?void 0:r.permalink,l=o.STORE_PAGES.checkout.id,p=(o.STORE_PAGES.checkout.permalink,o.STORE_PAGES.privacy.permalink),d=(o.STORE_PAGES.privacy.title,o.STORE_PAGES.terms.permalink),f=(o.STORE_PAGES.terms.title,o.STORE_PAGES.cart.id),b=o.STORE_PAGES.cart.permalink,g=(o.STORE_PAGES.myaccount.permalink?o.STORE_PAGES.myaccount.permalink:Object(o.getSetting)("wpLoginUrl","/wp-login.php"),Object(o.getSetting)("shippingCountries",{})),m=Object(o.getSetting)("allowedCountries",{}),w=Object(o.getSetting)("shippingStates",{}),S=Object(o.getSetting)("allowedStates",{}),h=Object(o.getSetting)("localPickupEnabled",!1)},2:function(t,e){t.exports=window.wp.components},243:function(t){t.exports=JSON.parse('{"name":"woocommerce/breadcrumbs","version":"1.0.0","title":"Store Breadcrumbs","description":"Enable customers to keep track of their location within the store and navigate back to parent pages.","category":"woocommerce","keywords":["WooCommerce"],"textdomain":"woo-gutenberg-products-block","attributes":{"contentJustification":{"type":"string"},"fontSize":{"type":"string","default":"small"},"align":{"type":"string","default":"wide"}},"supports":{"align":["wide","full"],"color":{"background":false,"link":true},"html":false,"typography":{"fontSize":true,"lineHeight":true}},"apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}')},3:function(t,e){t.exports=window.wc.wcSettings},398:function(t,e,n){t.exports=n(527)},5:function(t,e){t.exports=window.wp.blockEditor},527:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(8),i=n(91),c=n(73),u=n(565),s=n(243),a=n(5),l=n(2),p=n(1);const d={...s.supports,...Object(i.b)()&&{typography:{...s.supports.typography,__experimentalFontFamily:!0,__experimentalFontStyle:!0,__experimentalFontWeight:!0,__experimentalTextTransform:!0,__experimentalDefaultControls:{fontSize:!0}}}};Object(o.registerBlockType)(s,{icon:{src:Object(r.createElement)(c.a,{icon:u.a,className:"wc-block-editor-components-block-icon"})},attributes:{...s.attributes},supports:{...d},edit:()=>{const t=Object(a.useBlockProps)({className:"woocommerce wc-block-breadcrumbs"});return Object(r.createElement)("div",t,Object(r.createElement)(l.Disabled,null,Object(r.createElement)("a",{href:"/"},Object(p.__)("Breadcrumbs","woo-gutenberg-products-block")),Object(p.__)(" / Navigation / Path","woo-gutenberg-products-block")))},save:()=>null})},8:function(t,e){t.exports=window.wp.blocks},91:function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return u}));var r=n(8),o=n(19);const i=(t,e)=>{if(o.n>2)return Object(r.registerBlockType)(t,e)},c=()=>o.n>2,u=()=>o.n>1}});