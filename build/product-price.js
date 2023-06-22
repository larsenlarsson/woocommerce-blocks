(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[29],{147:function(e,c){},176:function(e,c){},225:function(e,c,r){"use strict";r.r(c),r.d(c,"Block",(function(){return m}));var t=r(0),a=r(4),n=r.n(a),l=r(84),o=r(21),i=r(25),s=r(86),u=r(53);r(266);const m=e=>{var c,r;const{className:a,textAlign:u,isDescendentOfSingleProductTemplate:m}=e,p=Object(s.a)(e),{parentName:d,parentClassName:b}=Object(i.useInnerBlockLayoutContext)(),{product:y}=Object(i.useProductDataContext)(),g="woocommerce/all-products"===d,v=n()("wc-block-components-product-price",a,p.className,{[b+"__product-price"]:b});if(!y.id&&!m){const e=Object(t.createElement)(l.a,{align:u,className:v});return g?Object(t.createElement)("div",{className:"wp-block-woocommerce-product-price"},e):e}const O=y.prices,_=m?Object(o.getCurrencyFromPriceResponse)():Object(o.getCurrencyFromPriceResponse)(O),j=O.price!==O.regular_price,N=n()({[b+"__product-price__value"]:b,[b+"__product-price__value--on-sale"]:j}),P=Object(t.createElement)(l.a,{align:u,className:v,style:p.style,regularPriceStyle:p.style,priceStyle:p.style,priceClassName:N,currency:_,price:m?"5000":O.price,minPrice:null==O||null===(c=O.price_range)||void 0===c?void 0:c.min_amount,maxPrice:null==O||null===(r=O.price_range)||void 0===r?void 0:r.max_amount,regularPrice:m?"5000":O.regular_price,regularPriceClassName:n()({[b+"__product-price__regular"]:b})});return g?Object(t.createElement)("div",{className:"wp-block-woocommerce-product-price"},P):P};c.default=e=>e.isDescendentOfSingleProductTemplate?Object(t.createElement)(m,e):Object(u.withProductDataContext)(m)(e)},266:function(e,c){},39:function(e,c,r){"use strict";var t=r(6),a=r.n(t),n=r(0),l=r(140),o=r(4),i=r.n(o);r(147);const s=e=>({thousandSeparator:null==e?void 0:e.thousandSeparator,decimalSeparator:null==e?void 0:e.decimalSeparator,fixedDecimalScale:!0,prefix:null==e?void 0:e.prefix,suffix:null==e?void 0:e.suffix,isNumericString:!0});c.a=e=>{var c;let{className:r,value:t,currency:o,onValueChange:u,displayType:m="text",...p}=e;const d="string"==typeof t?parseInt(t,10):t;if(!Number.isFinite(d))return null;const b=d/10**o.minorUnit;if(!Number.isFinite(b))return null;const y=i()("wc-block-formatted-money-amount","wc-block-components-formatted-money-amount",r),g=null!==(c=p.decimalScale)&&void 0!==c?c:null==o?void 0:o.minorUnit,v={...p,...s(o),decimalScale:g,value:void 0,currency:void 0,onValueChange:void 0},O=u?e=>{const c=+e.value*10**o.minorUnit;u(c)}:()=>{};return Object(n.createElement)(l.a,a()({className:y,displayType:m},v,{value:b,onValueChange:O}))}},84:function(e,c,r){"use strict";var t=r(0),a=r(1),n=r(39),l=r(4),o=r.n(l),i=r(21);r(176);const s=e=>{let{currency:c,maxPrice:r,minPrice:l,priceClassName:s,priceStyle:u={}}=e;return Object(t.createElement)(t.Fragment,null,Object(t.createElement)("span",{className:"screen-reader-text"},Object(a.sprintf)(
/* translators: %1$s min price, %2$s max price */
Object(a.__)("Price between %1$s and %2$s","woo-gutenberg-products-block"),Object(i.formatPrice)(l),Object(i.formatPrice)(r))),Object(t.createElement)("span",{"aria-hidden":!0},Object(t.createElement)(n.a,{className:o()("wc-block-components-product-price__value",s),currency:c,value:l,style:u})," — ",Object(t.createElement)(n.a,{className:o()("wc-block-components-product-price__value",s),currency:c,value:r,style:u})))},u=e=>{let{currency:c,regularPriceClassName:r,regularPriceStyle:l,regularPrice:i,priceClassName:s,priceStyle:u,price:m}=e;return Object(t.createElement)(t.Fragment,null,Object(t.createElement)("span",{className:"screen-reader-text"},Object(a.__)("Previous price:","woo-gutenberg-products-block")),Object(t.createElement)(n.a,{currency:c,renderText:e=>Object(t.createElement)("del",{className:o()("wc-block-components-product-price__regular",r),style:l},e),value:i}),Object(t.createElement)("span",{className:"screen-reader-text"},Object(a.__)("Discounted price:","woo-gutenberg-products-block")),Object(t.createElement)(n.a,{currency:c,renderText:e=>Object(t.createElement)("ins",{className:o()("wc-block-components-product-price__value","is-discounted",s),style:u},e),value:m}))};c.a=e=>{let{align:c,className:r,currency:a,format:l="<price/>",maxPrice:i,minPrice:m,price:p,priceClassName:d,priceStyle:b,regularPrice:y,regularPriceClassName:g,regularPriceStyle:v,style:O}=e;const _=o()(r,"price","wc-block-components-product-price",{["wc-block-components-product-price--align-"+c]:c});l.includes("<price/>")||(l="<price/>",console.error("Price formats need to include the `<price/>` tag."));const j=y&&p!==y;let N=Object(t.createElement)("span",{className:o()("wc-block-components-product-price__value",d)});return j?N=Object(t.createElement)(u,{currency:a,price:p,priceClassName:d,priceStyle:b,regularPrice:y,regularPriceClassName:g,regularPriceStyle:v}):void 0!==m&&void 0!==i?N=Object(t.createElement)(s,{currency:a,maxPrice:i,minPrice:m,priceClassName:d,priceStyle:b}):p&&(N=Object(t.createElement)(n.a,{className:o()("wc-block-components-product-price__value",d),currency:a,value:p,style:b})),Object(t.createElement)("span",{className:_,style:O},Object(t.createInterpolateElement)(l,{price:N}))}}}]);