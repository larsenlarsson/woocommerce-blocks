(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[23],{227:function(t,e,r){"use strict";r.r(e),r.d(e,"Block",(function(){return C}));var n=r(6),c=r.n(n),o=r(0),s=r(4),a=r.n(s),i=r(1),d=r(89),l=r(273),u=r(86),p=r(14),b=r(18),_=r(3),m=r(25),g=r(53);r(269);const E=t=>{let{product:e,className:r,style:n,textAlign:s}=t;const{id:u,permalink:m,add_to_cart:g,has_options:E,is_purchasable:w,is_in_stock:C}=e,{dispatchStoreEvent:h}=Object(d.a)(),{cartQuantity:v,addingToCart:f,addToCart:O}=Object(l.a)(u),y=Number.isFinite(v)&&v>0,j=!E&&w&&C,S=Object(p.decodeEntities)((null==g?void 0:g.description)||""),T=y?Object(i.sprintf)(
/* translators: %s number of products in cart. */
Object(i._n)("%d in cart","%d in cart",v,"woo-gutenberg-products-block"),v):Object(p.decodeEntities)((null==g?void 0:g.text)||Object(i.__)("Add to cart","woo-gutenberg-products-block")),R=j?"button":"a",k={};return j?k.onClick=async()=>{await O(),h("cart-add-item",{product:e});const{cartRedirectAfterAdd:t}=Object(_.getSetting)("productsSettings");t&&(window.location.href=b.d)}:(k.href=m,k.rel="nofollow",k.onClick=()=>{h("product-view-link",{product:e})}),Object(o.createElement)(R,c()({},k,{"aria-label":S,disabled:f,className:a()(r,"wp-block-button__link","wp-element-button","add_to_cart_button","wc-block-components-product-button__button",{loading:f,added:y},{["has-text-align-"+s]:s}),style:n}),T)},w=t=>{let{className:e,style:r}=t;return Object(o.createElement)("button",{className:a()("wp-block-button__link","wp-element-button","add_to_cart_button","wc-block-components-product-button__button","wc-block-components-product-button__button--placeholder",e),style:r,disabled:!0})},C=t=>{const{className:e,textAlign:r}=t,n=Object(u.a)(t),{parentClassName:c}=Object(m.useInnerBlockLayoutContext)(),{product:s}=Object(m.useProductDataContext)();return Object(o.createElement)("div",{className:a()(e,"wp-block-button","wc-block-components-product-button",{[c+"__product-add-to-cart"]:c},{["has-text-align-"+r]:r})},s.id?Object(o.createElement)(E,{product:s,style:n.style,className:n.className}):Object(o.createElement)(w,{style:n.style,className:n.className}))};e.default=Object(g.withProductDataContext)(C)},262:function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"a",(function(){return s}));const n=window.CustomEvent||null,c=(t,e)=>{let{bubbles:r=!1,cancelable:c=!1,element:o,detail:s={}}=e;if(!n)return;o||(o=document.body);const a=new n(t,{bubbles:r,cancelable:c,detail:s});o.dispatchEvent(a)},o=t=>{let{preserveCartData:e=!1}=t;c("wc-blocks_added_to_cart",{bubbles:!0,cancelable:!0,detail:{preserveCartData:e}})},s=function(t,e){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if("function"!=typeof jQuery)return()=>{};const o=()=>{c(e,{bubbles:r,cancelable:n})};return jQuery(document).on(t,o),()=>jQuery(document).off(t,o)}},263:function(t,e,r){"use strict";r.d(e,"a",(function(){return s})),r.d(e,"b",(function(){return a})),r.d(e,"c",(function(){return i}));var n=r(98),c=(r(15),r(3)),o=r(14);const s=t=>{const e=Object.keys(c.defaultAddressFields),r=Object(n.a)(e,{},t.country),o=Object.assign({},t);return r.forEach(e=>{let{key:r="",hidden:n=!1}=e;n&&((t,e)=>t in e)(r,t)&&(o[r]="")}),o},a=t=>{if(0===Object.values(t).length)return null;const e=Object(c.getSetting)("shippingCountries",{}),r=Object(c.getSetting)("shippingStates",{}),n="string"==typeof e[t.country]?Object(o.decodeEntities)(e[t.country]):"",s="object"==typeof r[t.country]&&"string"==typeof r[t.country][t.state]?Object(o.decodeEntities)(r[t.country][t.state]):t.state,a=[];a.push(t.postcode.toUpperCase()),a.push(t.city),a.push(s),a.push(n);return a.filter(Boolean).join(", ")||null},i=t=>!!t.city&&!!t.country},269:function(t,e){},273:function(t,e,r){"use strict";r.d(e,"a",(function(){return d}));var n=r(0),c=r(7),o=r(9),s=r(14),a=r(47);const i=(t,e)=>{const r=t.find(t=>{let{id:r}=t;return r===e});return r?r.quantity:0},d=t=>{const{addItemToCart:e}=Object(c.useDispatch)(o.CART_STORE_KEY),{cartItems:r,cartIsLoading:d}=Object(a.a)(),{createErrorNotice:l,removeNotice:u}=Object(c.useDispatch)("core/notices"),[p,b]=Object(n.useState)(!1),_=Object(n.useRef)(i(r,t));return Object(n.useEffect)(()=>{const e=i(r,t);e!==_.current&&(_.current=e)},[r,t]),{cartQuantity:Number.isFinite(_.current)?_.current:0,addingToCart:p,cartIsLoading:d,addToCart:function(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return b(!0),e(t,r).then(()=>{u("add-to-cart")}).catch(t=>{l(Object(s.decodeEntities)(t.message),{id:"add-to-cart",context:"wc/all-products",isDismissible:!0})}).finally(()=>{b(!1)})}}}},47:function(t,e,r){"use strict";r.d(e,"a",(function(){return v}));var n=r(121),c=r.n(n),o=r(0),s=r(9),a=r(7),i=r(14),d=r(263),l=r(88);var u=r(262);const p=t=>{const e=null==t?void 0:t.detail;e&&e.preserveCartData||Object(a.dispatch)(s.CART_STORE_KEY).invalidateResolutionForStore()},b=t=>{(null!=t&&t.persisted||"back_forward"===(window.performance&&window.performance.getEntriesByType("navigation").length?window.performance.getEntriesByType("navigation")[0].type:""))&&Object(a.dispatch)(s.CART_STORE_KEY).invalidateResolutionForStore()},_=()=>{1===window.wcBlocksStoreCartListeners.count&&window.wcBlocksStoreCartListeners.remove(),window.wcBlocksStoreCartListeners.count--},m=()=>{Object(o.useEffect)(()=>((()=>{if(window.wcBlocksStoreCartListeners||(window.wcBlocksStoreCartListeners={count:0,remove:()=>{}}),(null===(t=window.wcBlocksStoreCartListeners)||void 0===t?void 0:t.count)>0)return void window.wcBlocksStoreCartListeners.count++;var t;document.body.addEventListener("wc-blocks_added_to_cart",p),document.body.addEventListener("wc-blocks_removed_from_cart",p),window.addEventListener("pageshow",b);const e=Object(u.a)("added_to_cart","wc-blocks_added_to_cart"),r=Object(u.a)("removed_from_cart","wc-blocks_removed_from_cart");window.wcBlocksStoreCartListeners.count=1,window.wcBlocksStoreCartListeners.remove=()=>{document.body.removeEventListener("wc-blocks_added_to_cart",p),document.body.removeEventListener("wc-blocks_removed_from_cart",p),window.removeEventListener("pageshow",b),e(),r()}})(),_),[])},g={first_name:"",last_name:"",company:"",address_1:"",address_2:"",city:"",state:"",postcode:"",country:"",phone:""},E={...g,email:""},w={total_items:"",total_items_tax:"",total_fees:"",total_fees_tax:"",total_discount:"",total_discount_tax:"",total_shipping:"",total_shipping_tax:"",total_price:"",total_tax:"",tax_lines:s.EMPTY_TAX_LINES,currency_code:"",currency_symbol:"",currency_minor_unit:2,currency_decimal_separator:"",currency_thousand_separator:"",currency_prefix:"",currency_suffix:""},C=t=>Object.fromEntries(Object.entries(t).map(t=>{let[e,r]=t;return[e,Object(i.decodeEntities)(r)]})),h={cartCoupons:s.EMPTY_CART_COUPONS,cartItems:s.EMPTY_CART_ITEMS,cartFees:s.EMPTY_CART_FEES,cartItemsCount:0,cartItemsWeight:0,crossSellsProducts:s.EMPTY_CART_CROSS_SELLS,cartNeedsPayment:!0,cartNeedsShipping:!0,cartItemErrors:s.EMPTY_CART_ITEM_ERRORS,cartTotals:w,cartIsLoading:!0,cartErrors:s.EMPTY_CART_ERRORS,billingAddress:E,shippingAddress:g,shippingRates:s.EMPTY_SHIPPING_RATES,isLoadingRates:!1,cartHasCalculatedShipping:!1,paymentMethods:s.EMPTY_PAYMENT_METHODS,paymentRequirements:s.EMPTY_PAYMENT_REQUIREMENTS,receiveCart:()=>{},receiveCartContents:()=>{},extensions:s.EMPTY_EXTENSIONS},v=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{shouldSelect:!0};const{isEditor:e,previewData:r}=Object(l.b)(),n=null==r?void 0:r.previewCart,{shouldSelect:i}=t,u=Object(o.useRef)();m();const p=Object(a.useSelect)((t,r)=>{let{dispatch:c}=r;if(!i)return h;if(e)return{cartCoupons:n.coupons,cartItems:n.items,crossSellsProducts:n.cross_sells,cartFees:n.fees,cartItemsCount:n.items_count,cartItemsWeight:n.items_weight,cartNeedsPayment:n.needs_payment,cartNeedsShipping:n.needs_shipping,cartItemErrors:s.EMPTY_CART_ITEM_ERRORS,cartTotals:n.totals,cartIsLoading:!1,cartErrors:s.EMPTY_CART_ERRORS,billingData:E,billingAddress:E,shippingAddress:g,extensions:s.EMPTY_EXTENSIONS,shippingRates:n.shipping_rates,isLoadingRates:!1,cartHasCalculatedShipping:n.has_calculated_shipping,paymentRequirements:n.paymentRequirements,receiveCart:"function"==typeof(null==n?void 0:n.receiveCart)?n.receiveCart:()=>{},receiveCartContents:"function"==typeof(null==n?void 0:n.receiveCartContents)?n.receiveCartContents:()=>{}};const o=t(s.CART_STORE_KEY),a=o.getCartData(),l=o.getCartErrors(),u=o.getCartTotals(),p=!o.hasFinishedResolution("getCartData"),b=o.isCustomerDataUpdating(),{receiveCart:_,receiveCartContents:m}=c(s.CART_STORE_KEY),w=C(a.billingAddress),v=a.needsShipping?C(a.shippingAddress):w,f=a.fees.length>0?a.fees.map(t=>C(t)):s.EMPTY_CART_FEES;return{cartCoupons:a.coupons.length>0?a.coupons.map(t=>({...t,label:t.code})):s.EMPTY_CART_COUPONS,cartItems:a.items,crossSellsProducts:a.crossSells,cartFees:f,cartItemsCount:a.itemsCount,cartItemsWeight:a.itemsWeight,cartNeedsPayment:a.needsPayment,cartNeedsShipping:a.needsShipping,cartItemErrors:a.errors,cartTotals:u,cartIsLoading:p,cartErrors:l,billingData:Object(d.a)(w),billingAddress:Object(d.a)(w),shippingAddress:Object(d.a)(v),extensions:a.extensions,shippingRates:a.shippingRates,isLoadingRates:b,cartHasCalculatedShipping:a.hasCalculatedShipping,paymentRequirements:a.paymentRequirements,receiveCart:_,receiveCartContents:m}},[i]);return u.current&&c()(u.current,p)||(u.current=p),u.current}},88:function(t,e,r){"use strict";r.d(e,"b",(function(){return s})),r.d(e,"a",(function(){return a}));var n=r(0),c=r(7);const o=Object(n.createContext)({isEditor:!1,currentPostId:0,currentView:"",previewData:{},getPreviewData:()=>({})}),s=()=>Object(n.useContext)(o),a=t=>{let{children:e,currentPostId:r=0,previewData:s={},currentView:a="",isPreview:i=!1}=t;const d=Object(c.useSelect)(t=>r||t("core/editor").getCurrentPostId(),[r]),l=Object(n.useCallback)(t=>s&&t in s?s[t]:{},[s]),u={isEditor:!0,currentPostId:d,currentView:a,previewData:s,getPreviewData:l,isPreview:i};return Object(n.createElement)(o.Provider,{value:u},e)}},89:function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));var n=r(46),c=r(0),o=r(47);const s=()=>{const t=Object(o.a)(),e=Object(c.useRef)(t);return Object(c.useEffect)(()=>{e.current=t},[t]),{dispatchStoreEvent:Object(c.useCallback)((function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{Object(n.doAction)("experimental__woocommerce_blocks-"+t,e)}catch(t){console.error(t)}}),[]),dispatchCheckoutEvent:Object(c.useCallback)((function(t){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{Object(n.doAction)("experimental__woocommerce_blocks-checkout-"+t,{...r,storeCart:e.current})}catch(t){console.error(t)}}),[])}}},98:function(t,e,r){"use strict";var n=r(3),c=r(1),o=r(136),s=r(106);const a=Object(n.getSetting)("countryLocale",{}),i=t=>{const e={};return void 0!==t.label&&(e.label=t.label),void 0!==t.required&&(e.required=t.required),void 0!==t.hidden&&(e.hidden=t.hidden),void 0===t.label||t.optionalLabel||(e.optionalLabel=Object(c.sprintf)(
/* translators: %s Field label. */
Object(c.__)("%s (optional)","woo-gutenberg-products-block"),t.label)),t.priority&&(Object(o.a)(t.priority)&&(e.index=t.priority),Object(s.a)(t.priority)&&(e.index=parseInt(t.priority,10))),t.hidden&&(e.required=!1),e},d=Object.entries(a).map(t=>{let[e,r]=t;return[e,Object.entries(r).map(t=>{let[e,r]=t;return[e,i(r)]}).reduce((t,e)=>{let[r,n]=e;return t[r]=n,t},{})]}).reduce((t,e)=>{let[r,n]=e;return t[r]=n,t},{});e.a=function(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";const c=r&&void 0!==d[r]?d[r]:{};return t.map(t=>({key:t,...n.defaultAddressFields[t]||{},...c[t]||{},...e[t]||{}})).sort((t,e)=>t.index-e.index)}}}]);