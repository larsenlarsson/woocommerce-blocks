!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=258)}({1:function(t,e){t.exports=window.wp.i18n},115:function(t,e,n){"use strict";n.d(e,"b",(function(){return o}));const o=()=>window.performance&&window.performance.getEntriesByType("navigation").length?window.performance.getEntriesByType("navigation")[0].type:"";e.a=o},2:function(t,e){t.exports=window.wc.wcSettings},258:function(t,e,n){t.exports=n(272)},272:function(t,e,n){"use strict";n.r(e);var o=t=>{let{handle:e,src:n,version:o}=t;const r=n.split("?");(null==r?void 0:r.length)>1&&(n=r[0]);const c=`#${e}-js, #${e}-js-prefetch, script[src*="${n}"]`;if(0===document.querySelectorAll(c).length){const t=document.createElement("link");t.href=o?`${n}?ver=${o}`:n,t.rel="preload",t.as="script",t.id=e+"-js-prefetch",document.head.appendChild(t)}},r=n(28);const c=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";var n,o;if("wc-blocks-registry-js"===t&&"object"==typeof(null===(n=window)||void 0===n||null===(o=n.wc)||void 0===o?void 0:o.wcBlocksRegistry))return!0;const r=e.split("?");(null==r?void 0:r.length)>1&&(e=r[0]);const c=e?`script#${t}, script[src*="${e}"]`:"script#"+t,i=document.querySelectorAll(c);return i.length>0},i=t=>{if(!Object(r.a)(t.id)||c(t.id,null==t?void 0:t.src))return;const e=document.createElement("script");for(const n in t){if(!t.hasOwnProperty(n))continue;const o=n;if("onload"===o||"onerror"===o)continue;const c=t[o];Object(r.a)(c)&&(e[o]=c)}"function"==typeof t.onload&&(e.onload=t.onload),"function"==typeof t.onerror&&(e.onerror=t.onerror),document.body.appendChild(e)};var a=t=>{let{handle:e,src:n,version:o,after:r,before:a,translations:s}=t;return new Promise((t,l)=>{c(e+"-js",n)&&t(),s&&i({id:e+"-js-translations",innerHTML:s}),a&&i({id:e+"-js-before",innerHTML:a}),i({id:e+"-js",onerror:l,onload:()=>{r&&i({id:e+"-js-after",innerHTML:r}),t()},src:o?`${n}?ver=${o}`:n})})},s=n(115),l=n(87),d=n(1),u=n(39),f=n(65),b=n(2);const m=t=>{if(!t)return;const[e,n]=t,o=Object(b.getSettingWithCoercion)("displayCartPricesIncludingTax",!1,f.a),r=((t,e)=>{const n=Object(u.getCurrencyFromPriceResponse)(t),o=e?parseInt(t.total_items,10)+parseInt(t.total_items_tax,10):parseInt(t.total_items,10);return Object(u.formatPrice)(o,n)})(e,o),c=document.querySelectorAll(".wc-block-mini-cart"),i=document.querySelectorAll(".wc-block-mini-cart__badge"),a=document.querySelectorAll(".wc-block-mini-cart__amount");c.forEach(t=>{if(!(t instanceof HTMLElement))return;const o=t.querySelector(".wc-block-mini-cart__button");null==o||o.setAttribute("aria-label",t.dataset.hasHiddenPrice?Object(d.sprintf)(
/* translators: %s number of products in cart. */
Object(d._n)("%1$d item in cart","%1$d items in cart",n,"woo-gutenberg-products-block"),n):Object(d.sprintf)(
/* translators: %1$d is the number of products in the cart. %2$s is the cart total */
Object(d._n)("%1$d item in cart, total price of %2$s","%1$d items in cart, total price of %2$s",n,"woo-gutenberg-products-block"),n,r)),t.dataset.cartTotals=JSON.stringify(e),t.dataset.cartItemsCount=n.toString()}),i.forEach(t=>{(n>0||""!==t.textContent)&&(t.textContent=n.toString())}),a.forEach(t=>{t.textContent=r}),n>0&&document.querySelectorAll(".wc-block-mini-cart__tax-label").forEach(t=>{t.removeAttribute("hidden")})};function p(t,e){if(!t)return null;const n=window.getComputedStyle(t)[e];return"rgba(0, 0, 0, 0)"!==n&&"transparent"!==n?n:p(t.parentElement,e)}m((()=>{const t=localStorage.getItem("wc-blocks_mini_cart_totals");if(!t)return;const e=JSON.parse(t);return[e.totals,e.itemsCount]})()),(async()=>fetch("/wp-json/wc/store/v1/cart/").then(t=>{if(!t.ok)throw new Error;return t.json()}).then(t=>(localStorage.setItem("wc-blocks_mini_cart_totals",JSON.stringify({totals:t.totals,itemsCount:t.items_count})),[t.totals,t.items_count])).catch(t=>{console.error(t)}))().then(m),function(){const t=document.createElement("style"),e=getComputedStyle(document.body).backgroundColor,n=document.querySelector(".wc-block-mini-cart__button"),o=p(n,"backgroundColor")||"#fff",r=p(n,"color")||"#000";t.appendChild(document.createTextNode(`:where(.wp-block-woocommerce-mini-cart-contents) {\n\t\t\t\tbackground-color: ${e};\n\t\t\t}\n\t\t\t:where(.wc-block-mini-cart__badge) {\n\t\t\t\tbackground-color: ${r};\n\t\t\t\tcolor: ${o};\n\t\t\t}`)),document.head.appendChild(t)}(),window.addEventListener("load",()=>{const t=document.querySelectorAll(".wc-block-mini-cart");let e=!1;if(0===t.length)return;const n=window.wcBlocksMiniCartFrontendDependencies;for(const t in n){const e=n[t];o({handle:t,...e})}const r=Object(l.b)("adding_to_cart","wc-blocks_adding_to_cart"),c=Object(l.b)("added_to_cart","wc-blocks_added_to_cart"),i=Object(l.b)("removed_from_cart","wc-blocks_removed_from_cart"),d=async()=>{if(!e){e=!0,document.body.removeEventListener("wc-blocks_adding_to_cart",d),r();for(const t in n){const e=n[t];await a({handle:t,...e})}}};document.body.addEventListener("wc-blocks_adding_to_cart",d),window.addEventListener("pageshow",t=>{(null!=t&&t.persisted||"back_forward"===Object(s.a)())&&d()}),t.forEach((t,n)=>{if(!(t instanceof HTMLElement))return;const o=t.querySelector(".wc-block-mini-cart__button"),r=t.querySelector(".wc-block-components-drawer__screen-overlay");if(!o||!r)return;const a=()=>{e||d(),document.body.removeEventListener("wc-blocks_added_to_cart",u),document.body.removeEventListener("wc-blocks_removed_from_cart",l),c(),i()},s=()=>{t.dataset.isInitiallyOpen="true",r.classList.add("wc-block-components-drawer__screen-overlay--with-slide-in"),r.classList.remove("wc-block-components-drawer__screen-overlay--is-hidden"),a()},l=()=>{t.dataset.isInitiallyOpen="false",a()};o.addEventListener("mouseover",d),o.addEventListener("focus",d),o.addEventListener("click",s);const u="open_drawer"===t.dataset.addToCartBehaviour?()=>{s()}:l;0===n&&(document.body.addEventListener("wc-blocks_added_to_cart",u),document.body.addEventListener("wc-blocks_removed_from_cart",l))})})},28:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));const o=t=>"string"==typeof t},39:function(t,e){t.exports=window.wc.priceFormat},65:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));const o=t=>"boolean"==typeof t},87:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"c",(function(){return c})),n.d(e,"b",(function(){return i}));const o=window.CustomEvent||null,r=(t,e)=>{let{bubbles:n=!1,cancelable:r=!1,element:c,detail:i={}}=e;if(!o)return;c||(c=document.body);const a=new o(t,{bubbles:n,cancelable:r,detail:i});c.dispatchEvent(a)},c=t=>{let{preserveCartData:e=!1}=t;r("wc-blocks_added_to_cart",{bubbles:!0,cancelable:!0,detail:{preserveCartData:e}})},i=function(t,e){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if("function"!=typeof jQuery)return()=>{};const c=()=>{r(e,{bubbles:n,cancelable:o})};return jQuery(document).on(t,c),()=>jQuery(document).off(t,c)}}});