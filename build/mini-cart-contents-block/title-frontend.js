(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[67,68,69],{288:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(){return r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},r.apply(this,arguments)};Object.create,Object.create},289:function(t,e,n){"use strict";function r(t){return t.toLowerCase()}n.d(e,"a",(function(){return c}));var o=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],l=/[^A-Z0-9]+/gi;function c(t,e){void 0===e&&(e={});for(var n=e.splitRegexp,c=void 0===n?o:n,s=e.stripRegexp,i=void 0===s?l:s,u=e.transform,d=void 0===u?r:u,f=e.delimiter,b=void 0===f?" ":f,v=a(a(t,c,"$1\0$2"),i,"\0"),m=0,y=v.length;"\0"===v.charAt(m);)m++;for(;"\0"===v.charAt(y-1);)y--;return v.slice(m,y).split("\0").map(d).join(b)}function a(t,e,n){return e instanceof RegExp?t.replace(e,n):e.reduce((function(t,e){return t.replace(e,n)}),t)}},292:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(288),o=n(289);function l(t,e){return void 0===e&&(e={}),function(t,e){return void 0===e&&(e={}),Object(o.a)(t,Object(r.a)({delimiter:"."},e))}(t,Object(r.a)({delimiter:"-"},e))}},293:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n(4),o=n.n(r),l=n(20),c=n(29),a=n(292),s=n(133);function i(t={}){const e={};return Object(s.getCSSRules)(t,{selector:""}).forEach((t=>{e[t.key]=t.value})),e}function u(t,e){return t&&e?`has-${Object(a.a)(e)}-${t}`:""}const d=t=>{const e=(t=>{const e=Object(l.a)(t)?t:{style:{}};let n=e.style;return Object(c.a)(n)&&(n=JSON.parse(n)||{}),Object(l.a)(n)||(n={}),{...e,style:n}})(t),n=function(t){var e,n,r,c,a,s,d;const{backgroundColor:f,textColor:b,gradient:v,style:m}=t,y=u("background-color",f),g=u("color",b),p=function(t){if(t)return`has-${t}-gradient-background`}(v),O=p||(null==m||null===(e=m.color)||void 0===e?void 0:e.gradient);return{className:o()(g,p,{[y]:!O&&!!y,"has-text-color":b||(null==m||null===(n=m.color)||void 0===n?void 0:n.text),"has-background":f||(null==m||null===(r=m.color)||void 0===r?void 0:r.background)||v||(null==m||null===(c=m.color)||void 0===c?void 0:c.gradient),"has-link-color":Object(l.a)(null==m||null===(a=m.elements)||void 0===a?void 0:a.link)?null==m||null===(s=m.elements)||void 0===s||null===(d=s.link)||void 0===d?void 0:d.color:void 0}),style:i({color:(null==m?void 0:m.color)||{}})}}(e),r=function(t){var e;const n=(null===(e=t.style)||void 0===e?void 0:e.border)||{};return{className:function(t){var e;const{borderColor:n,style:r}=t,l=n?u("border-color",n):"";return o()({"has-border-color":!!n||!(null==r||null===(e=r.border)||void 0===e||!e.color),[l]:!!l})}(t),style:i({border:n})}}(e),a=function(t){var e;return{className:void 0,style:i({spacing:(null===(e=t.style)||void 0===e?void 0:e.spacing)||{}})}}(e),s=(t=>{const e=Object(l.a)(t.style.typography)?t.style.typography:{},n=Object(c.a)(e.fontFamily)?e.fontFamily:"";return{className:t.fontFamily?`has-${t.fontFamily}-font-family`:n,style:{fontSize:t.fontSize?`var(--wp--preset--font-size--${t.fontSize})`:e.fontSize,fontStyle:e.fontStyle,fontWeight:e.fontWeight,letterSpacing:e.letterSpacing,lineHeight:e.lineHeight,textDecoration:e.textDecoration,textTransform:e.textTransform}}})(e);return{className:o()(s.className,n.className,r.className,a.className),style:{...s.style,...n.style,...r.style,...a.style}}}},302:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return l}));var r=n(20);const o=(t="",e)=>t.includes("is-style-outline")?"outlined":t.includes("is-style-fill")?"contained":e,l=t=>t.some((t=>Array.isArray(t)?l(t):Object(r.a)(t)&&null!==t.key))},419:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(72),l=n(4),c=n.n(l),a=n(1),s=n(293);e.default=t=>{const{cartItemsCount:e}=Object(o.a)(),n=Object(s.a)(t);return Object(r.createElement)("span",{className:c()(t.className,n.className),style:n.style},Object(a.sprintf)(/* translators: %d is the count of items in the cart. */
Object(a._n)("(%d item)","(%d items)",e,"woo-gutenberg-products-block"),e))}},421:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(293),l=n(4),c=n.n(l),a=n(1);const s=Object(a.__)("Your cart","woo-gutenberg-products-block");e.default=t=>{const e=Object(o.a)(t);return Object(r.createElement)("span",{className:c()(t.className,e.className),style:e.style},t.label||s)}},495:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(72),l=n(4),c=n.n(l),a=n(419),s=n(421),i=n(302);e.default=({children:t,className:e})=>{const{cartIsLoading:n}=Object(o.a)();if(n)return null;const l=Object(i.b)(t);return Object(r.createElement)("h2",{className:c()(e,"wc-block-mini-cart__title")},l?t:Object(r.createElement)(r.Fragment,null,Object(r.createElement)(s.default,null),Object(r.createElement)(a.default,null)))}}}]);