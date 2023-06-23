(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[79,75],{22:function(t,o,n){"use strict";n.d(o,"a",(function(){return e})),n.d(o,"b",(function(){return c}));const e=t=>!(t=>null===t)(t)&&t instanceof Object&&t.constructor===Object;function c(t,o){return e(t)&&o in t}},279:function(t,o,n){"use strict";n.d(o,"a",(function(){return e}));var e=function(){return(e=Object.assign||function(t){for(var o,n=1,e=arguments.length;n<e;n++)for(var c in o=arguments[n])Object.prototype.hasOwnProperty.call(o,c)&&(t[c]=o[c]);return t}).apply(this,arguments)};Object.create,Object.create},280:function(t,o,n){"use strict";function e(t){return t.toLowerCase()}n.d(o,"a",(function(){return l}));var c=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],r=/[^A-Z0-9]+/gi;function l(t,o){void 0===o&&(o={});for(var n=o.splitRegexp,l=void 0===n?c:n,s=o.stripRegexp,a=void 0===s?r:s,u=o.transform,d=void 0===u?e:u,f=o.delimiter,b=void 0===f?" ":f,k=i(i(t,l,"$1\0$2"),a,"\0"),p=0,v=k.length;"\0"===k.charAt(p);)p++;for(;"\0"===k.charAt(v-1);)v--;return k.slice(p,v).split("\0").map(d).join(b)}function i(t,o,n){return o instanceof RegExp?t.replace(o,n):o.reduce((function(t,o){return t.replace(o,n)}),t)}},285:function(t,o,n){"use strict";n.d(o,"a",(function(){return r}));var e=n(279),c=n(280);function r(t,o){return void 0===o&&(o={}),function(t,o){return void 0===o&&(o={}),Object(c.a)(t,Object(e.a)({delimiter:"."},o))}(t,Object(e.a)({delimiter:"-"},o))}},287:function(t,o,n){"use strict";n.d(o,"a",(function(){return d}));var e=n(5),c=n.n(e),r=n(22),l=n(28),i=n(285),s=n(130);function a(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const o={};return Object(s.getCSSRules)(t,{selector:""}).forEach(t=>{o[t.key]=t.value}),o}function u(t,o){return t&&o?`has-${Object(i.a)(o)}-${t}`:""}const d=t=>{const o=(t=>{const o=Object(r.a)(t)?t:{style:{}};let n=o.style;return Object(l.a)(n)&&(n=JSON.parse(n)||{}),Object(r.a)(n)||(n={}),{...o,style:n}})(t),n=function(t){var o,n,e,l,i,s,d;const{backgroundColor:f,textColor:b,gradient:k,style:p}=t,v=u("background-color",f),g=u("color",b),m=function(t){if(t)return`has-${t}-gradient-background`}(k),y=m||(null==p||null===(o=p.color)||void 0===o?void 0:o.gradient);return{className:c()(g,m,{[v]:!y&&!!v,"has-text-color":b||(null==p||null===(n=p.color)||void 0===n?void 0:n.text),"has-background":f||(null==p||null===(e=p.color)||void 0===e?void 0:e.background)||k||(null==p||null===(l=p.color)||void 0===l?void 0:l.gradient),"has-link-color":Object(r.a)(null==p||null===(i=p.elements)||void 0===i?void 0:i.link)?null==p||null===(s=p.elements)||void 0===s||null===(d=s.link)||void 0===d?void 0:d.color:void 0}),style:a({color:(null==p?void 0:p.color)||{}})}}(o),e=function(t){var o;const n=(null===(o=t.style)||void 0===o?void 0:o.border)||{};return{className:function(t){var o;const{borderColor:n,style:e}=t,r=n?u("border-color",n):"";return c()({"has-border-color":n||(null==e||null===(o=e.border)||void 0===o?void 0:o.color),borderColorClass:r})}(t),style:a({border:n})}}(o),i=function(t){var o;return{className:void 0,style:a({spacing:(null===(o=t.style)||void 0===o?void 0:o.spacing)||{}})}}(o),s=(t=>{const o=Object(r.a)(t.style.typography)?t.style.typography:{},n=Object(l.a)(o.fontFamily)?o.fontFamily:"";return{className:t.fontFamily?`has-${t.fontFamily}-font-family`:n,style:{fontSize:t.fontSize?`var(--wp--preset--font-size--${t.fontSize})`:o.fontSize,fontStyle:o.fontStyle,fontWeight:o.fontWeight,letterSpacing:o.letterSpacing,lineHeight:o.lineHeight,textDecoration:o.textDecoration,textTransform:o.textTransform}}})(o);return{className:c()(s.className,n.className,e.className,i.className),style:{...s.style,...n.style,...e.style,...i.style}}}},425:function(t,o){},468:function(t,o,n){"use strict";n.r(o),n.d(o,"Block",(function(){return f}));var e=n(13),c=n.n(e),r=n(0),l=n(1),i=n(5),s=n.n(i),a=n(60),u=n(287),d=n(145);n(425);const f=t=>{const{className:o}=t,n=Object(u.a)(t),{parentClassName:e}=Object(a.useInnerBlockLayoutContext)(),{product:i}=Object(a.useProductDataContext)();if(!i.id)return null;const d=!!i.is_in_stock,f=i.low_stock_remaining,b=i.is_on_backorder;return Object(r.createElement)("div",c()({className:s()(o,{[e+"__stock-indicator"]:e,"wc-block-components-product-stock-indicator--in-stock":d,"wc-block-components-product-stock-indicator--out-of-stock":!d,"wc-block-components-product-stock-indicator--low-stock":!!f,"wc-block-components-product-stock-indicator--available-on-backorder":!!b,...t.isDescendantOfAllProducts&&{[n.className]:n.className,"wc-block-components-product-stock-indicator wp-block-woocommerce-product-stock-indicator":!0}})},t.isDescendantOfAllProducts&&{style:n.style}),(t=>{let{isInStock:o=!1,isLowStock:n=!1,lowStockAmount:e=null,isOnBackorder:c=!1}=t;return n&&null!==e?Object(l.sprintf)(
/* translators: %d stock amount (number of items in stock for product) */
Object(l.__)("%d left in stock","woo-gutenberg-products-block"),e):c?Object(l.__)("Available on backorder","woo-gutenberg-products-block"):o?Object(l.__)("In stock","woo-gutenberg-products-block"):Object(l.__)("Out of stock","woo-gutenberg-products-block")})({isInStock:d,isLowStock:!!f,lowStockAmount:f,isOnBackorder:b}))};o.default=Object(d.withProductDataContext)(f)}}]);