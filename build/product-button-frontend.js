(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[72],{111:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var c=n(26),o=n(20);const r=t=>Object(c.a)(t)?JSON.parse(t)||{}:Object(o.a)(t)?t:{}},146:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var c=n(55),o=n(20),r=n(111);const a=t=>{const e=Object(o.a)(t)?t:{},n=Object(r.a)(e.style);return Object(c.__experimentalUseBorderProps)({...e,style:n})}},20:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return o}));const c=t=>!(t=>null===t)(t)&&t instanceof Object&&t.constructor===Object;function o(t,e){return c(t)&&e in t}},279:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var c=n(55),o=n(20),r=n(111);const a=t=>{const e=Object(o.a)(t)?t:{},n=Object(r.a)(e.style);return Object(c.__experimentalUseColorProps)({...e,style:n})}},286:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var c=n(20),o=n(26),r=n(111);const a=t=>{const e=Object(c.a)(t)?t:{},n=Object(r.a)(e.style),a=Object(c.a)(n.typography)?n.typography:{},s=Object(o.a)(a.fontFamily)?a.fontFamily:"";return{className:e.fontFamily?`has-${e.fontFamily}-font-family`:s,style:{fontSize:e.fontSize?`var(--wp--preset--font-size--${e.fontSize})`:a.fontSize,fontStyle:a.fontStyle,fontWeight:a.fontWeight,letterSpacing:a.letterSpacing,lineHeight:a.lineHeight,textDecoration:a.textDecoration,textTransform:a.textTransform}}}},287:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var c=n(55),o=n(20),r=n(111);const a=t=>{if("function"!=typeof c.__experimentalGetSpacingClassesAndStyles)return{style:{}};const e=Object(o.a)(t)?t:{},n=Object(r.a)(e.style);return Object(c.__experimentalGetSpacingClassesAndStyles)({...e,style:n})}},364:function(t,e){},392:function(t,e,n){"use strict";n.r(e),n.d(e,"Block",(function(){return h}));var c=n(13),o=n.n(c),r=n(0),a=n(5),s=n.n(a),i=n(1),l=n(72),u=n(393),d=n(279),b=n(146),p=n(286),y=n(287),f=n(22),O=n(56),j=n(2),m=n(59),_=n(142);n(364);const g=t=>{let{product:e,colorStyles:n,borderStyles:c,typographyStyles:a,spacingStyles:d,textAlign:b}=t;const{id:p,permalink:y,add_to_cart:m,has_options:_,is_purchasable:g,is_in_stock:S}=e,{dispatchStoreEvent:h}=Object(l.a)(),{cartQuantity:w,addingToCart:k,addToCart:x}=Object(u.a)(p),v=Number.isFinite(w)&&w>0,C=!_&&g&&S,N=Object(f.decodeEntities)((null==m?void 0:m.description)||""),E=v?Object(i.sprintf)(
/* translators: %s number of products in cart. */
Object(i._n)("%d in cart","%d in cart",w,"woo-gutenberg-products-block"),w):Object(f.decodeEntities)((null==m?void 0:m.text)||Object(i.__)("Add to cart","woo-gutenberg-products-block")),T=C?"button":"a",A={};return C?A.onClick=async()=>{await x(),h("cart-add-item",{product:e});const{cartRedirectAfterAdd:t}=Object(j.getSetting)("productsSettings");t&&(window.location.href=O.c)}:(A.href=y,A.rel="nofollow",A.onClick=()=>{h("product-view-link",{product:e})}),Object(r.createElement)(T,o()({"aria-label":N,className:s()("wp-block-button__link","wp-element-button","add_to_cart_button","wc-block-components-product-button__button",n.className,c.className,{loading:k,added:v},{["has-text-align-"+b]:b}),style:{...n.style,...c.style,...a.style,...d.style},disabled:k},A),E)},S=t=>{let{colorStyles:e,borderStyles:n,typographyStyles:c,spacingStyles:o}=t;return Object(r.createElement)("button",{className:s()("wp-block-button__link","wp-element-button","add_to_cart_button","wc-block-components-product-button__button","wc-block-components-product-button__button--placeholder",e.className,n.className),style:{...e.style,...n.style,...c.style,...o.style},disabled:!0})},h=t=>{const{className:e,textAlign:n}=t,{parentClassName:c}=Object(m.useInnerBlockLayoutContext)(),{product:o}=Object(m.useProductDataContext)(),a=Object(d.a)(t),i=Object(b.a)(t),l=Object(p.a)(t),u=Object(y.a)(t);return Object(r.createElement)("div",{className:s()(e,"wp-block-button","wc-block-components-product-button",{[c+"__product-add-to-cart"]:c},{["has-text-align-"+n]:n})},o.id?Object(r.createElement)(g,{product:o,colorStyles:a,borderStyles:i,typographyStyles:l,spacingStyles:u}):Object(r.createElement)(S,{colorStyles:a,borderStyles:i,typographyStyles:l,spacingStyles:u}))};e.default=Object(_.withProductDataContext)(h)},393:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var c=n(0),o=n(6),r=n(3),a=n(22),s=n(42);const i=(t,e)=>{const n=t.find(t=>{let{id:n}=t;return n===e});return n?n.quantity:0},l=t=>{const{addItemToCart:e}=Object(o.useDispatch)(r.CART_STORE_KEY),{cartItems:n,cartIsLoading:l}=Object(s.a)(),{createErrorNotice:u,removeNotice:d}=Object(o.useDispatch)("core/notices"),[b,p]=Object(c.useState)(!1),y=Object(c.useRef)(i(n,t));return Object(c.useEffect)(()=>{const e=i(n,t);e!==y.current&&(y.current=e)},[n,t]),{cartQuantity:Number.isFinite(y.current)?y.current:0,addingToCart:b,cartIsLoading:l,addToCart:function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return p(!0),e(t,n).then(()=>{d("add-to-cart")}).catch(t=>{u(Object(a.decodeEntities)(t.message),{id:"add-to-cart",context:"wc/all-products",isDismissible:!0})}).finally(()=>{p(!1)})}}}}}]);