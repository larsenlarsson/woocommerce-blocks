(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[76,75],{22:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));const r=t=>!(t=>null===t)(t)&&t instanceof Object&&t.constructor===Object;function o(t,e){return r(t)&&e in t}},276:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};Object.create,Object.create},277:function(t,e,n){"use strict";function r(t){return t.toLowerCase()}n.d(e,"a",(function(){return s}));var o=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],c=/[^A-Z0-9]+/gi;function s(t,e){void 0===e&&(e={});for(var n=e.splitRegexp,s=void 0===n?o:n,l=e.stripRegexp,i=void 0===l?c:l,u=e.transform,d=void 0===u?r:u,b=e.delimiter,f=void 0===b?" ":b,p=a(a(t,s,"$1\0$2"),i,"\0"),v=0,g=p.length;"\0"===p.charAt(v);)v++;for(;"\0"===p.charAt(g-1);)g--;return p.slice(v,g).split("\0").map(d).join(f)}function a(t,e,n){return e instanceof RegExp?t.replace(e,n):e.reduce((function(t,e){return t.replace(e,n)}),t)}},284:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(276),o=n(277);function c(t,e){return void 0===e&&(e={}),function(t,e){return void 0===e&&(e={}),Object(o.a)(t,Object(r.a)({delimiter:"."},e))}(t,Object(r.a)({delimiter:"-"},e))}},286:function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var r=n(4),o=n.n(r),c=n(22),s=n(27);const a=t=>Object(s.a)(t)?JSON.parse(t)||{}:Object(c.a)(t)?t:{};var l=n(284),i=n(130);function u(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const e={};return Object(i.getCSSRules)(t,{selector:""}).forEach(t=>{e[t.key]=t.value}),e}function d(t,e){return t&&e?`has-${Object(l.a)(e)}-${t}`:""}const b=t=>{const e=Object(c.a)(t)?t:{style:{}},n=a(e.style),r=function(t){var e,n,r,s,a,l,i;const{backgroundColor:b,textColor:f,gradient:p,style:v}=t,g=d("background-color",b),m=d("color",f),O=function(t){if(t)return`has-${t}-gradient-background`}(p),j=O||(null==v||null===(e=v.color)||void 0===e?void 0:e.gradient);return{className:o()(m,O,{[g]:!j&&!!g,"has-text-color":f||(null==v||null===(n=v.color)||void 0===n?void 0:n.text),"has-background":b||(null==v||null===(r=v.color)||void 0===r?void 0:r.background)||p||(null==v||null===(s=v.color)||void 0===s?void 0:s.gradient),"has-link-color":Object(c.a)(null==v||null===(a=v.elements)||void 0===a?void 0:a.link)?null==v||null===(l=v.elements)||void 0===l||null===(i=l.link)||void 0===i?void 0:i.color:void 0})||void 0,style:u({color:(null==v?void 0:v.color)||{}})}}({...e,style:n}),l=function(t){var e;const n=(null===(e=t.style)||void 0===e?void 0:e.border)||{};return{className:function(t){var e;const{borderColor:n,style:r}=t,c=n?d("border-color",n):"";return o()({"has-border-color":n||(null==r||null===(e=r.border)||void 0===e?void 0:e.color),borderColorClass:c})}(t)||void 0,style:u({border:n})}}({...e,style:n}),i=function(t){const{style:e}=t;return{className:void 0,style:u({spacing:(null==e?void 0:e.spacing)||{}})}}({...e,style:n}),b=(t=>{const e=a(t.style),n=Object(c.a)(e.typography)?e.typography:{},r=Object(s.a)(n.fontFamily)?n.fontFamily:"";return{className:t.fontFamily?`has-${t.fontFamily}-font-family`:r,style:{fontSize:t.fontSize?`var(--wp--preset--font-size--${t.fontSize})`:n.fontSize,fontStyle:n.fontStyle,fontWeight:n.fontWeight,letterSpacing:n.letterSpacing,lineHeight:n.lineHeight,textDecoration:n.textDecoration,textTransform:n.textTransform}}})(e);return{className:o()(b.className,r.className,l.className,i.className),style:{...b.style,...r.style,...l.style,...i.style}}}},363:function(t,e){},388:function(t,e,n){"use strict";n.r(e),n.d(e,"Block",(function(){return p}));var r=n(0),o=n(1),c=n(4),s=n.n(c),a=n(60),l=n(286),i=n(144),u=n(108);n(363);const d=t=>{const{rating:e,reviews:n,parentClassName:c}=t,a={width:e/5*100+"%"},l=Object(o.sprintf)(
/* translators: %f is referring to the average rating value */
Object(o.__)("Rated %f out of 5","woo-gutenberg-products-block"),e),i={__html:Object(o.sprintf)(
/* translators: %1$s is referring to the average rating value, %2$s is referring to the number of ratings */
Object(o._n)("Rated %1$s out of 5 based on %2$s customer rating","Rated %1$s out of 5 based on %2$s customer ratings",n,"woo-gutenberg-products-block"),Object(o.sprintf)('<strong class="rating">%f</strong>',e),Object(o.sprintf)('<span class="rating">%d</span>',n))};return Object(r.createElement)("div",{className:s()("wc-block-components-product-rating__stars",c+"__product-rating__stars"),role:"img","aria-label":l},Object(r.createElement)("span",{style:a,dangerouslySetInnerHTML:i}))},b=t=>{const{href:e}=t,n=Object(o.__)("Add review","woo-gutenberg-products-block");return e?Object(r.createElement)("a",{className:"wc-block-components-product-rating__link",href:e},n):null},f=t=>{const{reviews:e}=t,n=Object(o.sprintf)(
/* translators: %s is referring to the total of reviews for a product */
Object(o._n)("(%s customer review)","(%s customer reviews)",e,"woo-gutenberg-products-block"),e);return Object(r.createElement)("span",{className:"wc-block-components-product-rating__reviews_count"},n)},p=t=>{const{textAlign:e,isDescendentOfSingleProductBlock:n}=t,o=Object(l.a)(t),{parentClassName:c}=Object(a.useInnerBlockLayoutContext)(),{product:i}=Object(a.useProductDataContext)(),p=(t=>{const e=parseFloat(t.average_rating);return Number.isFinite(e)&&e>0?e:0})(i),v=(t=>{const e=Object(u.a)(t.review_count)?t.review_count:parseInt(t.review_count,10);return Number.isFinite(e)&&e>0?e:0})(i),g=(t=>{const{permalink:e}=t;return e+"#reviews"})(i),m=s()(o.className,"wc-block-components-product-rating",{[c+"__product-rating"]:c,["has-text-align-"+e]:e}),O=v?Object(r.createElement)(d,{rating:p,reviews:v,parentClassName:c}):Object(r.createElement)(b,{href:g});return Object(r.createElement)("div",{className:m,style:o.style},Object(r.createElement)("div",{className:"wc-block-components-product-rating__container"},O,v&&n?Object(r.createElement)(f,{reviews:v}):null))};e.default=Object(i.withProductDataContext)(p)}}]);