(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[31],{226:function(e,t,n){"use strict";n.r(t),n.d(t,"Block",(function(){return m}));var c=n(0),r=n(1),s=n(4),o=n.n(s),a=n(25),i=n(86),l=n(53),u=n(136);n(268);const b=e=>{const{rating:t,reviews:n,parentClassName:s}=e,a={width:t/5*100+"%"},i=Object(r.sprintf)(
/* translators: %f is referring to the average rating value */
Object(r.__)("Rated %f out of 5","woo-gutenberg-products-block"),t),l={__html:Object(r.sprintf)(
/* translators: %1$s is referring to the average rating value, %2$s is referring to the number of ratings */
Object(r._n)("Rated %1$s out of 5 based on %2$s customer rating","Rated %1$s out of 5 based on %2$s customer ratings",n,"woo-gutenberg-products-block"),Object(r.sprintf)('<strong class="rating">%f</strong>',t),Object(r.sprintf)('<span class="rating">%d</span>',n))};return Object(c.createElement)("div",{className:o()("wc-block-components-product-rating__stars",s+"__product-rating__stars"),role:"img","aria-label":i},Object(c.createElement)("span",{style:a,dangerouslySetInnerHTML:l}))},p=e=>{const{href:t}=e,n=Object(r.__)("Add review","woo-gutenberg-products-block");return t?Object(c.createElement)("a",{className:"wc-block-components-product-rating__link",href:t},n):null},d=e=>{const{reviews:t}=e,n=Object(r.sprintf)(
/* translators: %s is referring to the total of reviews for a product */
Object(r._n)("(%s customer review)","(%s customer reviews)",t,"woo-gutenberg-products-block"),t);return Object(c.createElement)("span",{className:"wc-block-components-product-rating__reviews_count"},n)},m=e=>{const{textAlign:t,isDescendentOfSingleProductBlock:n}=e,r=Object(i.a)(e),{parentClassName:s}=Object(a.useInnerBlockLayoutContext)(),{product:l}=Object(a.useProductDataContext)(),m=(e=>{const t=parseFloat(e.average_rating);return Number.isFinite(t)&&t>0?t:0})(l),g=(e=>{const t=Object(u.a)(e.review_count)?e.review_count:parseInt(e.review_count,10);return Number.isFinite(t)&&t>0?t:0})(l),w=(e=>{const{permalink:t}=e;return t+"#reviews"})(l),_=o()(r.className,"wc-block-components-product-rating",{[s+"__product-rating"]:s,["has-text-align-"+t]:t}),O=g?Object(c.createElement)(b,{rating:m,reviews:g,parentClassName:s}):Object(c.createElement)(p,{href:w});return Object(c.createElement)("div",{className:_,style:r.style},Object(c.createElement)("div",{className:"wc-block-components-product-rating__container"},O,g&&n?Object(c.createElement)(d,{reviews:g}):null))};t.default=Object(l.withProductDataContext)(m)},268:function(e,t){}}]);