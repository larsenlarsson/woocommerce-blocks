(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[27,34],{121:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r(5),c=r(20),a=r(83);const s=e=>{const t=Object(c.b)(e)?e:{},r=Object(a.a)(t.style);return Object(n.__experimentalUseBorderProps)({...t,style:r})}},147:function(e,t,r){"use strict";r.r(t),r.d(t,"Block",(function(){return m}));var n=r(0),c=r(1),a=r(4),s=r.n(a),o=r(30),i=r(27),l=r(121),d=r(110),u=r(97),p=r(106),b=r(52);r(261);const m=e=>{const{className:t,align:r}=e,{parentClassName:a}=Object(i.useInnerBlockLayoutContext)(),{product:b}=Object(i.useProductDataContext)(),m=Object(l.a)(e),_=Object(d.a)(e),g=Object(u.a)(e),E=Object(p.a)(e);if(!b.id||!b.on_sale)return null;const O="string"==typeof r?"wc-block-components-product-sale-badge--align-"+r:"";return Object(n.createElement)("div",{className:s()("wc-block-components-product-sale-badge",t,O,{[a+"__product-onsale"]:a},_.className,m.className,g.className),style:{..._.style,...m.style,...g.style,...E.style}},Object(n.createElement)(o.a,{label:Object(c.__)("Sale","woo-gutenberg-products-block"),screenReaderLabel:Object(c.__)("Product on sale","woo-gutenberg-products-block")}))};t.default=Object(b.withProductDataContext)(m)},209:function(e,t,r){"use strict";r.d(t,"a",(function(){return h}));var n=r(6),c=r.n(n),a=r(0),s=r(1),o=r(4),i=r.n(o),l=r(3),d=r(27),u=r(97),p=r(121),b=r(106),m=r(52),_=r(89),g=r(147),E=(r(264),r(57));const O=()=>Object(a.createElement)("img",{src:l.PLACEHOLDER_IMG_SRC,alt:"",width:void 0,height:void 0}),f=e=>{let{image:t,loaded:r,showFullSize:n,fallbackAlt:s}=e;const{thumbnail:o,src:i,srcset:l,sizes:d,alt:u}=t||{},p={alt:u||s,hidden:!r,src:o,...n&&{src:i,srcSet:l,sizes:d}};return Object(a.createElement)(a.Fragment,null,p.src&&Object(a.createElement)("img",c()({"data-testid":"product-image"},p)),!t&&Object(a.createElement)(O,null))},h=e=>{const{className:t,imageSizing:r=E.a.SINGLE,showProductLink:n=!0,showSaleBadge:o,saleBadgeAlign:l="right",...m}=e,{parentClassName:h}=Object(d.useInnerBlockLayoutContext)(),{product:w,isLoading:v}=Object(d.useProductDataContext)(),{dispatchStoreEvent:y}=Object(_.a)(),j=Object(u.a)(e),C=Object(p.a)(e),S=Object(b.a)(e);if(!w.id)return Object(a.createElement)("div",{className:i()(t,"wc-block-components-product-image",{[h+"__product-image"]:h},C.className),style:{...j.style,...C.style,...S.style}},Object(a.createElement)(O,null));const R=!!w.images.length,T=R?w.images[0]:null,k=n?"a":a.Fragment,P=Object(s.sprintf)(
/* translators: %s is referring to the product name */
Object(s.__)("Link to %s","woo-gutenberg-products-block"),w.name),L={href:w.permalink,...!R&&{"aria-label":P},onClick:()=>{y("product-view-link",{product:w})}};return Object(a.createElement)("div",{className:i()(t,"wc-block-components-product-image",{[h+"__product-image"]:h},C.className),style:{...j.style,...C.style,...S.style}},Object(a.createElement)(k,n&&L,!!o&&Object(a.createElement)(g.default,c()({align:l},m)),Object(a.createElement)(f,{fallbackAlt:w.name,image:T,loaded:!v,showFullSize:r!==E.a.THUMBNAIL})))};t.b=Object(m.withProductDataContext)(h)},259:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return s}));const n=window.CustomEvent||null,c=(e,t)=>{let{bubbles:r=!1,cancelable:c=!1,element:a,detail:s={}}=t;if(!n)return;a||(a=document.body);const o=new n(e,{bubbles:r,cancelable:c,detail:s});a.dispatchEvent(o)},a=e=>{let{preserveCartData:t=!1}=e;c("wc-blocks_added_to_cart",{bubbles:!0,cancelable:!0,detail:{preserveCartData:t}})},s=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if("function"!=typeof jQuery)return()=>{};const a=()=>{c(t,{bubbles:r,cancelable:n})};return jQuery(document).on(e,a),()=>jQuery(document).off(e,a)}},260:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return i}));var n=r(98),c=(r(16),r(3)),a=r(15);const s=e=>{const t=Object.keys(c.defaultAddressFields),r=Object(n.a)(t,{},e.country),a=Object.assign({},e);return r.forEach(t=>{let{key:r="",hidden:n=!1}=t;n&&((e,t)=>e in t)(r,e)&&(a[r]="")}),a},o=e=>{if(0===Object.values(e).length)return null;const t=Object(c.getSetting)("shippingCountries",{}),r=Object(c.getSetting)("shippingStates",{}),n="string"==typeof t[e.country]?Object(a.decodeEntities)(t[e.country]):"",s="object"==typeof r[e.country]&&"string"==typeof r[e.country][e.state]?Object(a.decodeEntities)(r[e.country][e.state]):e.state,o=[];o.push(e.postcode.toUpperCase()),o.push(e.city),o.push(s),o.push(n);return o.filter(Boolean).join(", ")||null},i=e=>!!e.city&&!!e.country},261:function(e,t){},264:function(e,t){},30:function(e,t,r){"use strict";var n=r(0),c=r(4),a=r.n(c);t.a=e=>{let t,{label:r,screenReaderLabel:c,wrapperElement:s,wrapperProps:o={}}=e;const i=null!=r,l=null!=c;return!i&&l?(t=s||"span",o={...o,className:a()(o.className,"screen-reader-text")},Object(n.createElement)(t,o,c)):(t=s||n.Fragment,i&&l&&r!==c?Object(n.createElement)(t,o,Object(n.createElement)("span",{"aria-hidden":"true"},r),Object(n.createElement)("span",{className:"screen-reader-text"},c)):Object(n.createElement)(t,o,r))}},326:function(e,t,r){"use strict";const n={showProductLink:{type:"boolean",default:!0},showSaleBadge:{type:"boolean",default:!0},saleBadgeAlign:{type:"string",default:"right"},imageSizing:{type:"string",default:r(57).a.SINGLE},productId:{type:"number",default:0},isDescendentOfQueryLoop:{type:"boolean",default:!1},isDescendentOfSingleProductBlock:{type:"boolean",default:!1}};t.a=n},47:function(e,t,r){"use strict";r.d(t,"a",(function(){return h}));var n=r(9),c=r(0),a=r(10),s=r(7),o=r(15),i=r(260),l=r(88);var d=r(259);const u=e=>{const t=null==e?void 0:e.detail;t&&t.preserveCartData||Object(s.dispatch)(a.CART_STORE_KEY).invalidateResolutionForStore()},p=e=>{(null!=e&&e.persisted||"back_forward"===(window.performance&&window.performance.getEntriesByType("navigation").length?window.performance.getEntriesByType("navigation")[0].type:""))&&Object(s.dispatch)(a.CART_STORE_KEY).invalidateResolutionForStore()},b=()=>{1===window.wcBlocksStoreCartListeners.count&&window.wcBlocksStoreCartListeners.remove(),window.wcBlocksStoreCartListeners.count--},m=()=>{Object(c.useEffect)(()=>((()=>{if(window.wcBlocksStoreCartListeners||(window.wcBlocksStoreCartListeners={count:0,remove:()=>{}}),(null===(e=window.wcBlocksStoreCartListeners)||void 0===e?void 0:e.count)>0)return void window.wcBlocksStoreCartListeners.count++;var e;document.body.addEventListener("wc-blocks_added_to_cart",u),document.body.addEventListener("wc-blocks_removed_from_cart",u),window.addEventListener("pageshow",p);const t=Object(d.a)("added_to_cart","wc-blocks_added_to_cart"),r=Object(d.a)("removed_from_cart","wc-blocks_removed_from_cart");window.wcBlocksStoreCartListeners.count=1,window.wcBlocksStoreCartListeners.remove=()=>{document.body.removeEventListener("wc-blocks_added_to_cart",u),document.body.removeEventListener("wc-blocks_removed_from_cart",u),window.removeEventListener("pageshow",p),t(),r()}})(),b),[])},_={first_name:"",last_name:"",company:"",address_1:"",address_2:"",city:"",state:"",postcode:"",country:"",phone:""},g={..._,email:""},E={total_items:"",total_items_tax:"",total_fees:"",total_fees_tax:"",total_discount:"",total_discount_tax:"",total_shipping:"",total_shipping_tax:"",total_price:"",total_tax:"",tax_lines:a.EMPTY_TAX_LINES,currency_code:"",currency_symbol:"",currency_minor_unit:2,currency_decimal_separator:"",currency_thousand_separator:"",currency_prefix:"",currency_suffix:""},O=e=>Object.fromEntries(Object.entries(e).map(e=>{let[t,r]=e;return[t,Object(o.decodeEntities)(r)]})),f={cartCoupons:a.EMPTY_CART_COUPONS,cartItems:a.EMPTY_CART_ITEMS,cartFees:a.EMPTY_CART_FEES,cartItemsCount:0,cartItemsWeight:0,crossSellsProducts:a.EMPTY_CART_CROSS_SELLS,cartNeedsPayment:!0,cartNeedsShipping:!0,cartItemErrors:a.EMPTY_CART_ITEM_ERRORS,cartTotals:E,cartIsLoading:!0,cartErrors:a.EMPTY_CART_ERRORS,billingAddress:g,shippingAddress:_,shippingRates:a.EMPTY_SHIPPING_RATES,isLoadingRates:!1,cartHasCalculatedShipping:!1,paymentMethods:a.EMPTY_PAYMENT_METHODS,paymentRequirements:a.EMPTY_PAYMENT_REQUIREMENTS,receiveCart:()=>{},receiveCartContents:()=>{},extensions:a.EMPTY_EXTENSIONS},h=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{shouldSelect:!0};const{isEditor:t,previewData:r}=Object(l.b)(),o=null==r?void 0:r.previewCart,{shouldSelect:d}=e,u=Object(c.useRef)();m();const p=Object(s.useSelect)((e,r)=>{let{dispatch:n}=r;if(!d)return f;if(t)return{cartCoupons:o.coupons,cartItems:o.items,crossSellsProducts:o.cross_sells,cartFees:o.fees,cartItemsCount:o.items_count,cartItemsWeight:o.items_weight,cartNeedsPayment:o.needs_payment,cartNeedsShipping:o.needs_shipping,cartItemErrors:a.EMPTY_CART_ITEM_ERRORS,cartTotals:o.totals,cartIsLoading:!1,cartErrors:a.EMPTY_CART_ERRORS,billingData:g,billingAddress:g,shippingAddress:_,extensions:a.EMPTY_EXTENSIONS,shippingRates:o.shipping_rates,isLoadingRates:!1,cartHasCalculatedShipping:o.has_calculated_shipping,paymentRequirements:o.paymentRequirements,receiveCart:"function"==typeof(null==o?void 0:o.receiveCart)?o.receiveCart:()=>{},receiveCartContents:"function"==typeof(null==o?void 0:o.receiveCartContents)?o.receiveCartContents:()=>{}};const c=e(a.CART_STORE_KEY),s=c.getCartData(),l=c.getCartErrors(),u=c.getCartTotals(),p=!c.hasFinishedResolution("getCartData"),b=c.isCustomerDataUpdating(),{receiveCart:m,receiveCartContents:E}=n(a.CART_STORE_KEY),h=O(s.billingAddress),w=s.needsShipping?O(s.shippingAddress):h,v=s.fees.length>0?s.fees.map(e=>O(e)):a.EMPTY_CART_FEES;return{cartCoupons:s.coupons.length>0?s.coupons.map(e=>({...e,label:e.code})):a.EMPTY_CART_COUPONS,cartItems:s.items,crossSellsProducts:s.crossSells,cartFees:v,cartItemsCount:s.itemsCount,cartItemsWeight:s.itemsWeight,cartNeedsPayment:s.needsPayment,cartNeedsShipping:s.needsShipping,cartItemErrors:s.errors,cartTotals:u,cartIsLoading:p,cartErrors:l,billingData:Object(i.a)(h),billingAddress:Object(i.a)(h),shippingAddress:Object(i.a)(w),extensions:s.extensions,shippingRates:s.shippingRates,isLoadingRates:b,cartHasCalculatedShipping:s.hasCalculatedShipping,paymentRequirements:s.paymentRequirements,receiveCart:m,receiveCartContents:E}},[d]);return u.current&&Object(n.isEqual)(u.current,p)||(u.current=p),u.current}},589:function(e,t,r){"use strict";r.r(t);var n=r(52),c=r(209),a=r(326);t.default=Object(n.withFilteredAttributes)(a.a)(c.b)},88:function(e,t,r){"use strict";r.d(t,"b",(function(){return s})),r.d(t,"a",(function(){return o}));var n=r(0),c=r(7);const a=Object(n.createContext)({isEditor:!1,currentPostId:0,currentView:"",previewData:{},getPreviewData:()=>({})}),s=()=>Object(n.useContext)(a),o=e=>{let{children:t,currentPostId:r=0,previewData:s={},currentView:o="",isPreview:i=!1}=e;const l=Object(c.useSelect)(e=>r||e("core/editor").getCurrentPostId(),[r]),d=Object(n.useCallback)(e=>s&&e in s?s[e]:{},[s]),u={isEditor:!0,currentPostId:l,currentView:o,previewData:s,getPreviewData:d,isPreview:i};return Object(n.createElement)(a.Provider,{value:u},t)}},89:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r(46),c=r(0),a=r(47);const s=()=>{const e=Object(a.a)(),t=Object(c.useRef)(e);return Object(c.useEffect)(()=>{t.current=e},[e]),{dispatchStoreEvent:Object(c.useCallback)((function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{Object(n.doAction)("experimental__woocommerce_blocks-"+e,t)}catch(e){console.error(e)}}),[]),dispatchCheckoutEvent:Object(c.useCallback)((function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{Object(n.doAction)("experimental__woocommerce_blocks-checkout-"+e,{...r,storeCart:t.current})}catch(e){console.error(e)}}),[])}}},98:function(e,t,r){"use strict";var n=r(3),c=r(1),a=r(152),s=r(68);const o=Object(n.getSetting)("countryLocale",{}),i=e=>{const t={};return void 0!==e.label&&(t.label=e.label),void 0!==e.required&&(t.required=e.required),void 0!==e.hidden&&(t.hidden=e.hidden),void 0===e.label||e.optionalLabel||(t.optionalLabel=Object(c.sprintf)(
/* translators: %s Field label. */
Object(c.__)("%s (optional)","woo-gutenberg-products-block"),e.label)),e.priority&&(Object(a.a)(e.priority)&&(t.index=e.priority),Object(s.a)(e.priority)&&(t.index=parseInt(e.priority,10))),e.hidden&&(t.required=!1),t},l=Object.entries(o).map(e=>{let[t,r]=e;return[t,Object.entries(r).map(e=>{let[t,r]=e;return[t,i(r)]}).reduce((e,t)=>{let[r,n]=t;return e[r]=n,e},{})]}).reduce((e,t)=>{let[r,n]=t;return e[r]=n,e},{});t.a=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";const c=r&&void 0!==l[r]?l[r]:{};return e.map(e=>({key:e,...n.defaultAddressFields[e]||{},...c[e]||{},...t[e]||{}})).sort((e,t)=>e.index-t.index)}}}]);