(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[17],{110:function(e,t,c){"use strict";var n=c(13),r=c.n(n),a=c(0),l=c(145),s=c(5),o=c.n(s);c(215);const i=e=>({thousandSeparator:null==e?void 0:e.thousandSeparator,decimalSeparator:null==e?void 0:e.decimalSeparator,fixedDecimalScale:!0,prefix:null==e?void 0:e.prefix,suffix:null==e?void 0:e.suffix,isNumericString:!0});t.a=e=>{var t;let{className:c,value:n,currency:s,onValueChange:u,displayType:d="text",...m}=e;const b="string"==typeof n?parseInt(n,10):n;if(!Number.isFinite(b))return null;const p=b/10**s.minorUnit;if(!Number.isFinite(p))return null;const O=o()("wc-block-formatted-money-amount","wc-block-components-formatted-money-amount",c),j=null!==(t=m.decimalScale)&&void 0!==t?t:null==s?void 0:s.minorUnit,g={...m,...i(s),decimalScale:j,value:void 0,currency:void 0,onValueChange:void 0},y=u?e=>{const t=+e.value*10**s.minorUnit;u(t)}:()=>{};return Object(a.createElement)(l.a,r()({className:O,displayType:d},g,{value:p,onValueChange:y}))}},111:function(e,t,c){"use strict";c.d(t,"a",(function(){return a}));var n=c(26),r=c(20);const a=e=>Object(n.a)(e)?JSON.parse(e)||{}:Object(r.a)(e)?e:{}},146:function(e,t,c){"use strict";c.d(t,"a",(function(){return l}));var n=c(55),r=c(20),a=c(111);const l=e=>{const t=Object(r.a)(e)?e:{},c=Object(a.a)(t.style);return Object(n.__experimentalUseBorderProps)({...t,style:c})}},21:function(e,t,c){"use strict";var n=c(0),r=c(5),a=c.n(r);t.a=e=>{let t,{label:c,screenReaderLabel:r,wrapperElement:l,wrapperProps:s={}}=e;const o=null!=c,i=null!=r;return!o&&i?(t=l||"span",s={...s,className:a()(s.className,"screen-reader-text")},Object(n.createElement)(t,s,r)):(t=l||n.Fragment,o&&i&&c!==r?Object(n.createElement)(t,s,Object(n.createElement)("span",{"aria-hidden":"true"},c),Object(n.createElement)("span",{className:"screen-reader-text"},r)):Object(n.createElement)(t,s,c))}},215:function(e,t){},279:function(e,t,c){"use strict";c.d(t,"a",(function(){return l}));var n=c(55),r=c(20),a=c(111);const l=e=>{const t=Object(r.a)(e)?e:{},c=Object(a.a)(t.style);return Object(n.__experimentalUseColorProps)({...t,style:c})}},286:function(e,t,c){"use strict";c.d(t,"a",(function(){return l}));var n=c(20),r=c(26),a=c(111);const l=e=>{const t=Object(n.a)(e)?e:{},c=Object(a.a)(t.style),l=Object(n.a)(c.typography)?c.typography:{},s=Object(r.a)(l.fontFamily)?l.fontFamily:"";return{className:t.fontFamily?`has-${t.fontFamily}-font-family`:s,style:{fontSize:t.fontSize?`var(--wp--preset--font-size--${t.fontSize})`:l.fontSize,fontStyle:l.fontStyle,fontWeight:l.fontWeight,letterSpacing:l.letterSpacing,lineHeight:l.lineHeight,textDecoration:l.textDecoration,textTransform:l.textTransform}}}},287:function(e,t,c){"use strict";c.d(t,"a",(function(){return l}));var n=c(55),r=c(20),a=c(111);const l=e=>{if("function"!=typeof n.__experimentalGetSpacingClassesAndStyles)return{style:{}};const t=Object(r.a)(e)?e:{},c=Object(a.a)(t.style);return Object(n.__experimentalGetSpacingClassesAndStyles)({...t,style:c})}},301:function(e,t,c){"use strict";var n=c(0),r=c(1),a=c(110),l=c(5),s=c.n(l),o=c(41);c(302);const i=e=>{let{currency:t,maxPrice:c,minPrice:l,priceClassName:i,priceStyle:u={}}=e;return Object(n.createElement)(n.Fragment,null,Object(n.createElement)("span",{className:"screen-reader-text"},Object(r.sprintf)(
/* translators: %1$s min price, %2$s max price */
Object(r.__)("Price between %1$s and %2$s","woo-gutenberg-products-block"),Object(o.formatPrice)(l),Object(o.formatPrice)(c))),Object(n.createElement)("span",{"aria-hidden":!0},Object(n.createElement)(a.a,{className:s()("wc-block-components-product-price__value",i),currency:t,value:l,style:u})," — ",Object(n.createElement)(a.a,{className:s()("wc-block-components-product-price__value",i),currency:t,value:c,style:u})))},u=e=>{let{currency:t,regularPriceClassName:c,regularPriceStyle:l,regularPrice:o,priceClassName:i,priceStyle:u,price:d}=e;return Object(n.createElement)(n.Fragment,null,Object(n.createElement)("span",{className:"screen-reader-text"},Object(r.__)("Previous price:","woo-gutenberg-products-block")),Object(n.createElement)(a.a,{currency:t,renderText:e=>Object(n.createElement)("del",{className:s()("wc-block-components-product-price__regular",c),style:l},e),value:o}),Object(n.createElement)("span",{className:"screen-reader-text"},Object(r.__)("Discounted price:","woo-gutenberg-products-block")),Object(n.createElement)(a.a,{currency:t,renderText:e=>Object(n.createElement)("ins",{className:s()("wc-block-components-product-price__value","is-discounted",i),style:u},e),value:d}))};t.a=e=>{let{align:t,className:c,currency:r,format:l="<price/>",maxPrice:o,minPrice:d,price:m,priceClassName:b,priceStyle:p,regularPrice:O,regularPriceClassName:j,regularPriceStyle:g,spacingStyle:y}=e;const f=s()(c,"price","wc-block-components-product-price",{["wc-block-components-product-price--align-"+t]:t});l.includes("<price/>")||(l="<price/>",console.error("Price formats need to include the `<price/>` tag."));const _=O&&m!==O;let N=Object(n.createElement)("span",{className:s()("wc-block-components-product-price__value",b)});return _?N=Object(n.createElement)(u,{currency:r,price:m,priceClassName:b,priceStyle:p,regularPrice:O,regularPriceClassName:j,regularPriceStyle:g}):void 0!==d&&void 0!==o?N=Object(n.createElement)(i,{currency:r,maxPrice:o,minPrice:d,priceClassName:b,priceStyle:p}):m&&(N=Object(n.createElement)(a.a,{className:s()("wc-block-components-product-price__value",b),currency:r,value:m,style:p})),Object(n.createElement)("span",{className:f,style:y},Object(n.createInterpolateElement)(l,{price:N}))}},302:function(e,t){},303:function(e,t,c){"use strict";var n=c(13),r=c.n(n),a=c(0),l=c(22),s=c(5),o=c.n(s);c(304),t.a=e=>{let{className:t="",disabled:c=!1,name:n,permalink:s="",target:i,rel:u,style:d,onClick:m,...b}=e;const p=o()("wc-block-components-product-name",t);if(c){const e=b;return Object(a.createElement)("span",r()({className:p},e,{dangerouslySetInnerHTML:{__html:Object(l.decodeEntities)(n)}}))}return Object(a.createElement)("a",r()({className:p,href:s,target:i},b,{dangerouslySetInnerHTML:{__html:Object(l.decodeEntities)(n)},style:d}))}},304:function(e,t){},333:function(e,t,c){"use strict";c.r(t),c.d(t,"Block",(function(){return p}));var n=c(0),r=c(1),a=c(5),l=c.n(a),s=c(21),o=c(59),i=c(146),u=c(279),d=c(286),m=c(287),b=c(142);c(334);const p=e=>{const{className:t,align:c}=e,{parentClassName:a}=Object(o.useInnerBlockLayoutContext)(),{product:b}=Object(o.useProductDataContext)(),p=Object(i.a)(e),O=Object(u.a)(e),j=Object(d.a)(e),g=Object(m.a)(e);if(!b.id||!b.on_sale)return null;const y="string"==typeof c?"wc-block-components-product-sale-badge--align-"+c:"";return Object(n.createElement)("div",{className:l()("wc-block-components-product-sale-badge",t,y,{[a+"__product-onsale"]:a},O.className,p.className,j.className),style:{...O.style,...p.style,...j.style,...g.style}},Object(n.createElement)(s.a,{label:Object(r.__)("Sale","woo-gutenberg-products-block"),screenReaderLabel:Object(r.__)("Product on sale","woo-gutenberg-products-block")}))};t.default=Object(b.withProductDataContext)(p)},334:function(e,t){},335:function(e,t,c){"use strict";let n;c.d(t,"a",(function(){return n})),function(e){e.SINGLE="single",e.THUMBNAIL="thumbnail"}(n||(n={}))},358:function(e,t){},359:function(e,t,c){"use strict";c.d(t,"a",(function(){return _}));var n=c(13),r=c.n(n),a=c(0),l=c(1),s=c(5),o=c.n(s),i=c(2),u=c(59),d=c(286),m=c(146),b=c(287),p=c(142),O=c(72),j=c(333),g=(c(360),c(335));const y=()=>Object(a.createElement)("img",{src:i.PLACEHOLDER_IMG_SRC,alt:"",width:void 0,height:void 0}),f=e=>{let{image:t,loaded:c,showFullSize:n,fallbackAlt:l}=e;const{thumbnail:s,src:o,srcset:i,sizes:u,alt:d}=t||{},m={alt:d||l,hidden:!c,src:s,...n&&{src:o,srcSet:i,sizes:u}};return Object(a.createElement)(a.Fragment,null,m.src&&Object(a.createElement)("img",r()({"data-testid":"product-image"},m)),!t&&Object(a.createElement)(y,null))},_=e=>{const{className:t,imageSizing:c=g.a.SINGLE,showProductLink:n=!0,showSaleBadge:s,saleBadgeAlign:i="right",...p}=e,{parentClassName:_}=Object(u.useInnerBlockLayoutContext)(),{product:N,isLoading:v}=Object(u.useProductDataContext)(),{dispatchStoreEvent:k}=Object(O.a)(),E=Object(d.a)(e),w=Object(m.a)(e),h=Object(b.a)(e);if(!N.id)return Object(a.createElement)("div",{className:o()(t,"wc-block-components-product-image",{[_+"__product-image"]:_},w.className),style:{...E.style,...w.style,...h.style}},Object(a.createElement)(y,null));const S=!!N.images.length,C=S?N.images[0]:null,x=n?"a":a.Fragment,P=Object(l.sprintf)(
/* translators: %s is referring to the product name */
Object(l.__)("Link to %s","woo-gutenberg-products-block"),N.name),L={href:N.permalink,...!S&&{"aria-label":P},onClick:()=>{k("product-view-link",{product:N})}};return Object(a.createElement)("div",{className:o()(t,"wc-block-components-product-image",{[_+"__product-image"]:_},w.className),style:{...E.style,...w.style,...h.style}},Object(a.createElement)(x,n&&L,!!s&&Object(a.createElement)(j.default,r()({align:i},p)),Object(a.createElement)(f,{fallbackAlt:N.name,image:C,loaded:!v,showFullSize:c!==g.a.THUMBNAIL})))};t.b=Object(p.withProductDataContext)(_)},360:function(e,t){},361:function(e,t,c){"use strict";c.d(t,"a",(function(){return O}));var n=c(0),r=c(5),a=c.n(r),l=c(59),s=c(418),o=c(142),i=c(303),u=c(72),d=c(279),m=c(287),b=c(286);c(362);const p=e=>{let{children:t,headingLevel:c,elementType:r="h"+c,...a}=e;return Object(n.createElement)(r,a,t)},O=e=>{const{className:t,headingLevel:c=2,showProductLink:r=!0,linkTarget:o,align:O}=e,{parentClassName:j}=Object(l.useInnerBlockLayoutContext)(),{product:g}=Object(l.useProductDataContext)(),{dispatchStoreEvent:y}=Object(u.a)(),f=Object(d.a)(e),_=Object(m.a)(e),N=Object(b.a)(e);return g.id?Object(n.createElement)(p,{headingLevel:c,className:a()(t,f.className,"wc-block-components-product-title",{[j+"__product-title"]:j,["wc-block-components-product-title--align-"+O]:O&&Object(s.a)()}),style:Object(s.a)()?{..._.style,...N.style,...f.style}:{}},Object(n.createElement)(i.a,{disabled:!r,name:g.name,permalink:g.permalink,target:o,onClick:()=>{y("product-view-link",{product:g})}})):Object(n.createElement)(p,{headingLevel:c,className:a()(t,f.className,"wc-block-components-product-title",{[j+"__product-title"]:j,["wc-block-components-product-title--align-"+O]:O&&Object(s.a)()}),style:Object(s.a)()?{..._.style,...N.style,...f.style}:{}})};t.b=Object(o.withProductDataContext)(O)},362:function(e,t){},363:function(e,t){},364:function(e,t){},390:function(e,t,c){"use strict";c.r(t),c.d(t,"Block",(function(){return b}));var n=c(0),r=c(5),a=c.n(r),l=c(301),s=c(41),o=c(59),i=c(279),u=c(287),d=c(286),m=c(142);c(358);const b=e=>{var t,c;const{className:r,textAlign:m,isDescendentOfSingleProductTemplate:b}=e,{parentClassName:p}=Object(o.useInnerBlockLayoutContext)(),{product:O}=Object(o.useProductDataContext)(),j=Object(i.a)(e),g=Object(u.a)(e),y=Object(d.a)(e),f=a()("wc-block-components-product-price",r,j.className,{[p+"__product-price"]:p},y.className);if(!O.id&&!b)return Object(n.createElement)(l.a,{align:m,className:f});const _={...j.style,...y.style},N={...g.style},v=O.prices,k=b?Object(s.getCurrencyFromPriceResponse)():Object(s.getCurrencyFromPriceResponse)(v),E=v.price!==v.regular_price,w=a()({[p+"__product-price__value"]:p,[p+"__product-price__value--on-sale"]:E});return Object(n.createElement)(l.a,{align:m,className:f,regularPriceStyle:_,priceStyle:_,priceClassName:w,currency:k,price:b?"5000":v.price,minPrice:null==v||null===(t=v.price_range)||void 0===t?void 0:t.min_amount,maxPrice:null==v||null===(c=v.price_range)||void 0===c?void 0:c.max_amount,regularPrice:b?"5000":v.regular_price,regularPriceClassName:a()({[p+"__product-price__regular"]:p}),spacingStyle:N})};t.default=e=>e.isDescendentOfSingleProductTemplate?Object(n.createElement)(b,e):Object(m.withProductDataContext)(b)(e)},391:function(e,t,c){"use strict";c.r(t),c.d(t,"Block",(function(){return O}));var n=c(0),r=c(1),a=c(5),l=c.n(a),s=c(59),o=c(279),i=c(286),u=c(287),d=c(142),m=c(106);c(363);const b=e=>{const{rating:t,reviews:c,parentClassName:a}=e,s={width:t/5*100+"%"},o=Object(r.sprintf)(
/* translators: %f is referring to the average rating value */
Object(r.__)("Rated %f out of 5","woo-gutenberg-products-block"),t),i={__html:Object(r.sprintf)(
/* translators: %1$s is referring to the average rating value, %2$s is referring to the number of ratings */
Object(r._n)("Rated %1$s out of 5 based on %2$s customer rating","Rated %1$s out of 5 based on %2$s customer ratings",c,"woo-gutenberg-products-block"),Object(r.sprintf)('<strong class="rating">%f</strong>',t),Object(r.sprintf)('<span class="rating">%d</span>',c))};return Object(n.createElement)("div",{className:l()("wc-block-components-product-rating__stars",a+"__product-rating__stars"),role:"img","aria-label":o},Object(n.createElement)("span",{style:s,dangerouslySetInnerHTML:i}))},p=e=>{const{href:t}=e,c=Object(r.__)("Add review","woo-gutenberg-products-block");return t?Object(n.createElement)("a",{className:"wc-block-components-product-rating__link",href:t},c):null},O=e=>{const{textAlign:t}=e,{parentClassName:c}=Object(s.useInnerBlockLayoutContext)(),{product:r}=Object(s.useProductDataContext)(),a=(e=>{const t=parseFloat(e.average_rating);return Number.isFinite(t)&&t>0?t:0})(r),d=Object(o.a)(e),O=Object(i.a)(e),j=Object(u.a)(e),g=(e=>{const t=Object(m.a)(e.review_count)?e.review_count:parseInt(e.review_count,10);return Number.isFinite(t)&&t>0?t:0})(r),y=(e=>{const{permalink:t}=e;return t+"#reviews"})(r),f=l()(d.className,"wc-block-components-product-rating",{[c+"__product-rating"]:c,["has-text-align-"+t]:t}),_=g?Object(n.createElement)(b,{rating:a,reviews:g,parentClassName:c}):Object(n.createElement)(p,{href:y});return Object(n.createElement)("div",{className:f,style:{...d.style,...O.style,...j.style}},_)};t.default=Object(d.withProductDataContext)(O)},392:function(e,t,c){"use strict";c.r(t),c.d(t,"Block",(function(){return v}));var n=c(13),r=c.n(n),a=c(0),l=c(5),s=c.n(l),o=c(1),i=c(72),u=c(393),d=c(279),m=c(146),b=c(286),p=c(287),O=c(22),j=c(56),g=c(2),y=c(59),f=c(142);c(364);const _=e=>{let{product:t,colorStyles:c,borderStyles:n,typographyStyles:l,spacingStyles:d,textAlign:m}=e;const{id:b,permalink:p,add_to_cart:y,has_options:f,is_purchasable:_,is_in_stock:N}=t,{dispatchStoreEvent:v}=Object(i.a)(),{cartQuantity:k,addingToCart:E,addToCart:w}=Object(u.a)(b),h=Number.isFinite(k)&&k>0,S=!f&&_&&N,C=Object(O.decodeEntities)((null==y?void 0:y.description)||""),x=h?Object(o.sprintf)(
/* translators: %s number of products in cart. */
Object(o._n)("%d in cart","%d in cart",k,"woo-gutenberg-products-block"),k):Object(O.decodeEntities)((null==y?void 0:y.text)||Object(o.__)("Add to cart","woo-gutenberg-products-block")),P=S?"button":"a",L={};return S?L.onClick=async()=>{await w(),v("cart-add-item",{product:t});const{cartRedirectAfterAdd:e}=Object(g.getSetting)("productsSettings");e&&(window.location.href=j.c)}:(L.href=p,L.rel="nofollow",L.onClick=()=>{v("product-view-link",{product:t})}),Object(a.createElement)(P,r()({"aria-label":C,className:s()("wp-block-button__link","wp-element-button","add_to_cart_button","wc-block-components-product-button__button",c.className,n.className,{loading:E,added:h},{["has-text-align-"+m]:m}),style:{...c.style,...n.style,...l.style,...d.style},disabled:E},L),x)},N=e=>{let{colorStyles:t,borderStyles:c,typographyStyles:n,spacingStyles:r}=e;return Object(a.createElement)("button",{className:s()("wp-block-button__link","wp-element-button","add_to_cart_button","wc-block-components-product-button__button","wc-block-components-product-button__button--placeholder",t.className,c.className),style:{...t.style,...c.style,...n.style,...r.style},disabled:!0})},v=e=>{const{className:t,textAlign:c}=e,{parentClassName:n}=Object(y.useInnerBlockLayoutContext)(),{product:r}=Object(y.useProductDataContext)(),l=Object(d.a)(e),o=Object(m.a)(e),i=Object(b.a)(e),u=Object(p.a)(e);return Object(a.createElement)("div",{className:s()(t,"wp-block-button","wc-block-components-product-button",{[n+"__product-add-to-cart"]:n},{["has-text-align-"+c]:c})},r.id?Object(a.createElement)(_,{product:r,colorStyles:l,borderStyles:o,typographyStyles:i,spacingStyles:u}):Object(a.createElement)(N,{colorStyles:l,borderStyles:o,typographyStyles:i,spacingStyles:u}))};t.default=Object(f.withProductDataContext)(v)},393:function(e,t,c){"use strict";c.d(t,"a",(function(){return i}));var n=c(0),r=c(6),a=c(3),l=c(22),s=c(42);const o=(e,t)=>{const c=e.find(e=>{let{id:c}=e;return c===t});return c?c.quantity:0},i=e=>{const{addItemToCart:t}=Object(r.useDispatch)(a.CART_STORE_KEY),{cartItems:c,cartIsLoading:i}=Object(s.a)(),{createErrorNotice:u,removeNotice:d}=Object(r.useDispatch)("core/notices"),[m,b]=Object(n.useState)(!1),p=Object(n.useRef)(o(c,e));return Object(n.useEffect)(()=>{const t=o(c,e);t!==p.current&&(p.current=t)},[c,e]),{cartQuantity:Number.isFinite(p.current)?p.current:0,addingToCart:m,cartIsLoading:i,addToCart:function(){let c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return b(!0),t(e,c).then(()=>{d("add-to-cart")}).catch(e=>{u(Object(l.decodeEntities)(e.message),{id:"add-to-cart",context:"wc/all-products",isDismissible:!0})}).finally(()=>{b(!1)})}}}},418:function(e,t,c){"use strict";c.d(t,"a",(function(){return r})),c(227);var n=c(56);const r=()=>n.n>1},501:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(42),a=c(59),l=c(359),s=c(361),o=c(391),i=c(333),u=c(390),d=c(392),m=c(335),b=e=>{let{product:t}=e;return Object(n.createElement)("div",{className:"cross-sells-product"},Object(n.createElement)(a.InnerBlockLayoutContextProvider,{parentName:"woocommerce/cart-cross-sells-block",parentClassName:"wp-block-cart-cross-sells-product"},Object(n.createElement)(a.ProductDataContextProvider,{isLoading:!1,product:t},Object(n.createElement)("div",null,Object(n.createElement)(l.a,{className:"",showSaleBadge:!1,productId:t.id,showProductLink:!1,saleBadgeAlign:"left",imageSizing:m.a.SINGLE,isDescendentOfQueryLoop:!1}),Object(n.createElement)(s.a,{align:"",headingLevel:3,showProductLink:!0}),Object(n.createElement)(o.Block,null),Object(n.createElement)(i.Block,{productId:t.id,align:"left"}),Object(n.createElement)(u.Block,null)),Object(n.createElement)(d.Block,null))))},p=e=>{let{products:t,columns:c}=e;const r=t.map((e,t)=>t>=c?null:Object(n.createElement)(b,{isLoading:!1,product:e,key:e.id}));return Object(n.createElement)("div",null,r)},O=c(158);t.default=e=>{let{className:t,columns:c}=e;const{crossSellsProducts:a}=Object(r.a)();return void 0===c&&(c=O.attributes.columns.default),Object(n.createElement)(p,{className:t,columns:c,products:a})}}}]);