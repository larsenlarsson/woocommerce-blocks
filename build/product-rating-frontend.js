(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[73],{115:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n(53);var r=n(37);const c=()=>r.n>1},116:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(23),c=n(20);const o=t=>Object(r.a)(t)?JSON.parse(t)||{}:Object(c.a)(t)?t:{}},20:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return c}));const r=t=>!(t=>null===t)(t)&&t instanceof Object&&t.constructor===Object;function c(t,e){return r(t)&&e in t}},287:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(66),c=n(115),o=n(20),s=n(116);const a=t=>{if(!Object(c.a)())return{className:"",style:{}};const e=Object(o.a)(t)?t:{},n=Object(s.a)(e.style);return Object(r.__experimentalUseColorProps)({...e,style:n})}},291:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n(20),c=n(23),o=n(116);const s=t=>{const e=Object(r.a)(t)?t:{},n=Object(o.a)(e.style),s=Object(r.a)(n.typography)?n.typography:{},a=Object(c.a)(s.fontFamily)?s.fontFamily:"";return{className:e.fontFamily?`has-${e.fontFamily}-font-family`:a,style:{fontSize:e.fontSize?`var(--wp--preset--font-size--${e.fontSize})`:s.fontSize,fontStyle:s.fontStyle,fontWeight:s.fontWeight,letterSpacing:s.letterSpacing,lineHeight:s.lineHeight,textDecoration:s.textDecoration,textTransform:s.textTransform}}}},308:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(66),c=n(115),o=n(20),s=n(116);const a=t=>{if(!Object(c.a)())return{style:{}};const e=Object(o.a)(t)?t:{},n=Object(s.a)(e.style);return Object(r.__experimentalGetSpacingClassesAndStyles)({...e,style:n})}},357:function(t,e){},382:function(t,e,n){"use strict";n.r(e),n.d(e,"Block",(function(){return j}));var r=n(0),c=n(1),o=n(6),s=n.n(o),a=n(52),i=n(287),u=n(291),l=n(308),f=n(137),p=n(91);n(357);const b=t=>{const{rating:e,reviews:n,parentClassName:o}=t,a={width:e/5*100+"%"},i=Object(c.sprintf)(
/* translators: %f is referring to the average rating value */
Object(c.__)("Rated %f out of 5","woo-gutenberg-products-block"),e),u={__html:Object(c.sprintf)(
/* translators: %1$s is referring to the average rating value, %2$s is referring to the number of ratings */
Object(c._n)("Rated %1$s out of 5 based on %2$s customer rating","Rated %1$s out of 5 based on %2$s customer ratings",n,"woo-gutenberg-products-block"),Object(c.sprintf)('<strong class="rating">%f</strong>',e),Object(c.sprintf)('<span class="rating">%d</span>',n))};return Object(r.createElement)("div",{className:s()("wc-block-components-product-rating__stars",o+"__product-rating__stars"),role:"img","aria-label":i},Object(r.createElement)("span",{style:a,dangerouslySetInnerHTML:u}))},g=t=>{const{href:e}=t,n=Object(c.__)("Add review","woo-gutenberg-products-block");return e?Object(r.createElement)("a",{className:"wc-block-components-product-rating__link",href:e},n):null},j=t=>{const{textAlign:e}=t,{parentClassName:n}=Object(a.useInnerBlockLayoutContext)(),{product:c}=Object(a.useProductDataContext)(),o=(t=>{const e=parseFloat(t.average_rating);return Number.isFinite(e)&&e>0?e:0})(c),f=Object(i.a)(t),j=Object(u.a)(t),O=Object(l.a)(t),d=(t=>{const e=Object(p.a)(t.review_count)?t.review_count:parseInt(t.review_count,10);return Number.isFinite(e)&&e>0?e:0})(c),m=(t=>{const{permalink:e}=t;return e+"#reviews"})(c),y=s()(f.className,"wc-block-components-product-rating",{[n+"__product-rating"]:n,["has-text-align-"+e]:e}),v=d?Object(r.createElement)(b,{rating:o,reviews:d,parentClassName:n}):Object(r.createElement)(g,{href:m});return Object(r.createElement)("div",{className:y,style:{...f.style,...j.style,...O.style}},v)};e.default=Object(f.withProductDataContext)(j)},6:function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function c(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var o=typeof r;if("string"===o||"number"===o)t.push(r);else if(Array.isArray(r)){if(r.length){var s=c.apply(null,r);s&&t.push(s)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var a in r)n.call(r,a)&&r[a]&&t.push(a);else t.push(r.toString())}}return t.join(" ")}t.exports?(c.default=c,t.exports=c):void 0===(r=function(){return c}.apply(e,[]))||(t.exports=r)}()}}]);