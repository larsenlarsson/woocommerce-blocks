(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[78,75],{22:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r}));const o=t=>!(t=>null===t)(t)&&t instanceof Object&&t.constructor===Object;function r(t,e){return o(t)&&e in t}},276:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var o=function(){return(o=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};Object.create,Object.create},277:function(t,e,n){"use strict";function o(t){return t.toLowerCase()}n.d(e,"a",(function(){return l}));var r=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],c=/[^A-Z0-9]+/gi;function l(t,e){void 0===e&&(e={});for(var n=e.splitRegexp,l=void 0===n?r:n,a=e.stripRegexp,i=void 0===a?c:a,u=e.transform,d=void 0===u?o:u,f=e.delimiter,v=void 0===f?" ":f,b=s(s(t,l,"$1\0$2"),i,"\0"),m=0,p=b.length;"\0"===b.charAt(m);)m++;for(;"\0"===b.charAt(p-1);)p--;return b.slice(m,p).split("\0").map(d).join(v)}function s(t,e,n){return e instanceof RegExp?t.replace(e,n):e.reduce((function(t,e){return t.replace(e,n)}),t)}},284:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var o=n(276),r=n(277);function c(t,e){return void 0===e&&(e={}),function(t,e){return void 0===e&&(e={}),Object(r.a)(t,Object(o.a)({delimiter:"."},e))}(t,Object(o.a)({delimiter:"-"},e))}},286:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var o=n(4),r=n.n(o),c=n(22),l=n(27);const s=t=>Object(l.a)(t)?JSON.parse(t)||{}:Object(c.a)(t)?t:{};var a=n(284),i=n(130);function u(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const e={};return Object(i.getCSSRules)(t,{selector:""}).forEach(t=>{e[t.key]=t.value}),e}function d(t,e){return t&&e?`has-${Object(a.a)(e)}-${t}`:""}const f=t=>{const e=Object(c.a)(t)?t:{style:{}},n=s(e.style),o=function(t){var e,n,o,l,s,a,i;const{backgroundColor:f,textColor:v,gradient:b,style:m}=t,p=d("background-color",f),y=d("color",v),g=function(t){if(t)return`has-${t}-gradient-background`}(b),O=g||(null==m||null===(e=m.color)||void 0===e?void 0:e.gradient);return{className:r()(y,g,{[p]:!O&&!!p,"has-text-color":v||(null==m||null===(n=m.color)||void 0===n?void 0:n.text),"has-background":f||(null==m||null===(o=m.color)||void 0===o?void 0:o.background)||b||(null==m||null===(l=m.color)||void 0===l?void 0:l.gradient),"has-link-color":Object(c.a)(null==m||null===(s=m.elements)||void 0===s?void 0:s.link)?null==m||null===(a=m.elements)||void 0===a||null===(i=a.link)||void 0===i?void 0:i.color:void 0})||void 0,style:u({color:(null==m?void 0:m.color)||{}})}}({...e,style:n}),a=function(t){var e;const n=(null===(e=t.style)||void 0===e?void 0:e.border)||{};return{className:function(t){var e;const{borderColor:n,style:o}=t,c=n?d("border-color",n):"";return r()({"has-border-color":n||(null==o||null===(e=o.border)||void 0===e?void 0:e.color),borderColorClass:c})}(t)||void 0,style:u({border:n})}}({...e,style:n}),i=function(t){const{style:e}=t;return{className:void 0,style:u({spacing:(null==e?void 0:e.spacing)||{}})}}({...e,style:n}),f=(t=>{const e=s(t.style),n=Object(c.a)(e.typography)?e.typography:{},o=Object(l.a)(n.fontFamily)?n.fontFamily:"";return{className:t.fontFamily?`has-${t.fontFamily}-font-family`:o,style:{fontSize:t.fontSize?`var(--wp--preset--font-size--${t.fontSize})`:n.fontSize,fontStyle:n.fontStyle,fontWeight:n.fontWeight,letterSpacing:n.letterSpacing,lineHeight:n.lineHeight,textDecoration:n.textDecoration,textTransform:n.textTransform}}})(e);return{className:r()(f.className,o.className,a.className,i.className),style:{...f.style,...o.style,...a.style,...i.style}}}},423:function(t,e){},466:function(t,e,n){"use strict";n.r(e);var o=n(13),r=n.n(o),c=n(0),l=n(1),s=n(4),a=n.n(s),i=n(60),u=n(144),d=n(286);n(423);const f=t=>{let{parentClassName:e,sku:n,className:o,style:r}=t;return Object(c.createElement)("div",{className:a()(o,{[e+"__product-sku"]:e}),style:r},Object(l.__)("SKU:","woo-gutenberg-products-block")," ",Object(c.createElement)("strong",null,n))};e.default=Object(u.withProductDataContext)(t=>{const{className:e}=t,n=Object(d.a)(t),{parentClassName:o}=Object(i.useInnerBlockLayoutContext)(),{product:l}=Object(i.useProductDataContext)(),s=l.sku;return t.isDescendentOfSingleProductTemplate?Object(c.createElement)(f,{parentClassName:o,className:e,sku:"Product SKU"}):s?Object(c.createElement)(f,r()({className:e,parentClassName:o,sku:s},t.isDescendantOfAllProducts&&{className:a()(e,"wc-block-components-product-sku wp-block-woocommerce-product-sku",n.className),style:{...n.style}})):null})}}]);