(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[71],{100:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return a}));var c=r(4);let s;!function(e){e.ADD_EVENT_CALLBACK="add_event_callback",e.REMOVE_EVENT_CALLBACK="remove_event_callback"}(s||(s={}));const n={addEventCallback:function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;return{id:Object(c.uniqueId)(),type:s.ADD_EVENT_CALLBACK,eventType:e,callback:t,priority:r}},removeEventCallback:(e,t)=>({id:t,type:s.REMOVE_EVENT_CALLBACK,eventType:e})},o={},a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,{type:t,eventType:r,id:c,callback:n,priority:a}=arguments.length>1?arguments[1]:void 0;const i=e.hasOwnProperty(r)?new Map(e[r]):new Map;switch(t){case s.ADD_EVENT_CALLBACK:return i.set(c,{priority:a,callback:n}),{...e,[r]:i};case s.REMOVE_EVENT_CALLBACK:return i.delete(c),{...e,[r]:i}}}},143:function(e,t,r){"use strict";var c=r(0);r(214),t.a=()=>Object(c.createElement)("span",{className:"wc-block-components-spinner","aria-hidden":"true"})},20:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return s}));const c=e=>!(e=>null===e)(e)&&e instanceof Object&&e.constructor===Object;function s(e,t){return c(e)&&t in e}},214:function(e,t){},221:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var c=r(100);const s=(e,t)=>function(r){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;const n=c.a.addEventCallback(e,r,s);return t(n),()=>{t(c.a.removeEventCallback(e,n.id))}}},229:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return a}));var c=r(45),s=r(20);const n=e=>Object(s.a)(e)&&Object(s.b)(e,"type"),o=async(e,t,r)=>{const s=Object(c.a)(e,t),n=[];for(const e of s)try{const t=await Promise.resolve(e.callback(r));"object"==typeof t&&n.push(t)}catch(e){console.error(e)}return!n.length||n},a=async(e,t,r)=>{const s=[],o=Object(c.a)(e,t);for(const e of o)try{const t=await Promise.resolve(e.callback(r));if(!n(t))continue;if(!t.hasOwnProperty("type"))throw new Error("Returned objects from event emitter observers must return an object with a type property");if(Object(c.b)(t)||Object(c.c)(t))return s.push(t),s;s.push(t)}catch(e){return console.error(e),s.push({type:c.e.ERROR}),s}return s}},275:function(e,t,r){"use strict";var c=r(13),s=r.n(c),n=r(0),o=r(63),a=r(5),i=r.n(a),u=r(143);r(276),t.a=e=>{let{className:t,showSpinner:r=!1,children:c,variant:a="contained",...l}=e;const d=i()("wc-block-components-button","wp-element-button",t,a,{"wc-block-components-button--loading":r});return Object(n.createElement)(o.a,s()({className:d},l),r&&Object(n.createElement)(u.a,null),Object(n.createElement)("span",{className:"wc-block-components-button__text"},c))}},276:function(e,t){},393:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var c=r(0),s=r(6),n=r(3),o=r(22),a=r(42);const i=(e,t)=>{const r=e.find(e=>{let{id:r}=e;return r===t});return r?r.quantity:0},u=e=>{const{addItemToCart:t}=Object(s.useDispatch)(n.CART_STORE_KEY),{cartItems:r,cartIsLoading:u}=Object(a.a)(),{createErrorNotice:l,removeNotice:d}=Object(s.useDispatch)("core/notices"),[b,E]=Object(c.useState)(!1),p=Object(c.useRef)(i(r,e));return Object(c.useEffect)(()=>{const t=i(r,e);t!==p.current&&(p.current=t)},[r,e]),{cartQuantity:Number.isFinite(p.current)?p.current:0,addingToCart:b,cartIsLoading:u,addToCart:function(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return E(!0),t(e,r).then(()=>{d("add-to-cart")}).catch(e=>{l(Object(o.decodeEntities)(e.message),{id:"add-to-cart",context:"wc/all-products",isDismissible:!0})}).finally(()=>{E(!1)})}}}},422:function(e,t){},423:function(e,t){},45:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"e",(function(){return n})),r.d(t,"d",(function(){return o})),r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return u}));var c=r(20);const s=(e,t)=>e[t]?Array.from(e[t].values()).sort((e,t)=>e.priority-t.priority):[];let n,o;!function(e){e.SUCCESS="success",e.FAIL="failure",e.ERROR="error"}(n||(n={})),function(e){e.CART="wc/cart",e.CHECKOUT="wc/checkout",e.PAYMENTS="wc/checkout/payments",e.EXPRESS_PAYMENTS="wc/checkout/express-payments",e.CONTACT_INFORMATION="wc/checkout/contact-information",e.SHIPPING_ADDRESS="wc/checkout/shipping-address",e.BILLING_ADDRESS="wc/checkout/billing-address",e.SHIPPING_METHODS="wc/checkout/shipping-methods",e.CHECKOUT_ACTIONS="wc/checkout/checkout-actions"}(o||(o={}));const a=(e,t)=>Object(c.a)(e)&&"type"in e&&e.type===t,i=e=>a(e,n.ERROR),u=e=>a(e,n.FAIL)},491:function(e,t,r){"use strict";r.r(t);var c=r(142),s=r(0),n=r(5),o=r.n(n),a=r(1),i=r(27);const u=e=>e.is_purchasable||!1;var l=r(6),d=r(3);const b={PRISTINE:"pristine",IDLE:"idle",DISABLED:"disabled",PROCESSING:"processing",BEFORE_PROCESSING:"before_processing",AFTER_PROCESSING:"after_processing"},E={status:b.PRISTINE,hasError:!1,quantity:0,processingResponse:null,requestParams:{}},p={SET_PRISTINE:"set_pristine",SET_IDLE:"set_idle",SET_DISABLED:"set_disabled",SET_PROCESSING:"set_processing",SET_BEFORE_PROCESSING:"set_before_processing",SET_AFTER_PROCESSING:"set_after_processing",SET_PROCESSING_RESPONSE:"set_processing_response",SET_HAS_ERROR:"set_has_error",SET_NO_ERROR:"set_no_error",SET_QUANTITY:"set_quantity",SET_REQUEST_PARAMS:"set_request_params"},{SET_PRISTINE:m,SET_IDLE:O,SET_DISABLED:_,SET_PROCESSING:h,SET_BEFORE_PROCESSING:f,SET_AFTER_PROCESSING:S,SET_PROCESSING_RESPONSE:j,SET_HAS_ERROR:g,SET_NO_ERROR:v,SET_QUANTITY:R,SET_REQUEST_PARAMS:T}=p,y=()=>({type:O}),A=function(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const t=e?g:v;return{type:t}},{SET_PRISTINE:P,SET_IDLE:C,SET_DISABLED:N,SET_PROCESSING:I,SET_BEFORE_PROCESSING:w,SET_AFTER_PROCESSING:k,SET_PROCESSING_RESPONSE:D,SET_HAS_ERROR:F,SET_NO_ERROR:L,SET_QUANTITY:B,SET_REQUEST_PARAMS:q}=p,{PRISTINE:x,IDLE:G,DISABLED:M,PROCESSING:V,BEFORE_PROCESSING:Q,AFTER_PROCESSING:H}=b,K=function(){let e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,{quantity:r,type:c,data:s}=arguments.length>1?arguments[1]:void 0;switch(c){case P:e=E;break;case C:e=t.status!==G?{...t,status:G}:t;break;case N:e=t.status!==M?{...t,status:M}:t;break;case B:e=r!==t.quantity?{...t,quantity:r}:t;break;case q:e={...t,requestParams:{...t.requestParams,...s}};break;case D:e={...t,processingResponse:s};break;case I:e=t.status!==V?{...t,status:V,hasError:!1}:t,e=!1===e.hasError?e:{...e,hasError:!1};break;case w:e=t.status!==Q?{...t,status:Q,hasError:!1}:t;break;case k:e=t.status!==H?{...t,status:H}:t;break;case F:e=t.hasError?t:{...t,hasError:!0},e=t.status===V||t.status===Q?{...e,status:G}:e;break;case L:e=t.hasError?{...t,hasError:!1}:t}return e!==t&&c!==P&&e.status===x&&(e.status=G),e};var W=r(100),Y=r(221);const U=e=>({onAddToCartAfterProcessingWithSuccess:Object(Y.a)("add_to_cart_after_processing_with_success",e),onAddToCartProcessingWithError:Object(Y.a)("add_to_cart_after_processing_with_error",e),onAddToCartBeforeProcessing:Object(Y.a)("add_to_cart_before_processing",e)});var J=r(229),X=r(45);const z=Object(s.createContext)({product:{},productType:"simple",productIsPurchasable:!0,productHasOptions:!1,supportsFormElements:!0,showFormElements:!1,quantity:0,minQuantity:1,maxQuantity:99,requestParams:{},isIdle:!1,isDisabled:!1,isProcessing:!1,isBeforeProcessing:!1,isAfterProcessing:!1,hasError:!1,eventRegistration:{onAddToCartAfterProcessingWithSuccess:e=>{},onAddToCartAfterProcessingWithError:e=>{},onAddToCartBeforeProcessing:e=>{}},dispatchActions:{resetForm:()=>{},submitForm:()=>{},setQuantity:e=>{},setHasError:e=>{},setAfterProcessing:e=>{},setRequestParams:e=>{}}}),Z=()=>Object(s.useContext)(z),$=e=>{var t,r,c,n;let{children:o,product:p,showFormElements:O}=e;const[g,v]=Object(s.useReducer)(K,E),[P,C]=Object(s.useReducer)(W.b,{}),N=Object(i.a)(P),{createErrorNotice:I}=Object(l.useDispatch)("core/notices"),{setValidationErrors:w}=Object(l.useDispatch)(d.VALIDATION_STORE_KEY),k=Object(s.useMemo)(()=>({onAddToCartAfterProcessingWithSuccess:U(C).onAddToCartAfterProcessingWithSuccess,onAddToCartAfterProcessingWithError:U(C).onAddToCartAfterProcessingWithError,onAddToCartBeforeProcessing:U(C).onAddToCartBeforeProcessing}),[C]),D=Object(s.useMemo)(()=>({resetForm:()=>{v({type:m})},submitForm:()=>{v({type:f})},setQuantity:e=>{v((e=>({type:R,quantity:e}))(e))},setHasError:e=>{v(A(e))},setRequestParams:e=>{v((e=>({type:T,data:e}))(e))},setAfterProcessing:e=>{v({type:j,data:e}),v({type:S})}}),[]);Object(s.useEffect)(()=>{const e=g.status,t=!p.id||!u(p);e!==b.DISABLED||t?e!==b.DISABLED&&t&&v({type:_}):v(y())},[g.status,p,v]),Object(s.useEffect)(()=>{g.status===b.BEFORE_PROCESSING&&(((e,t)=>{const r=Object(l.select)("core/notices").getNotices("wc/add-to-cart"),{removeNotice:c}=Object(l.dispatch)("core/notices");r.filter(e=>"error"===e.status).forEach(e=>c(e.id,"wc/add-to-cart"))})(),Object(J.a)(N,"add_to_cart_before_processing",{}).then(e=>{!0!==e?(Array.isArray(e)&&e.forEach(e=>{let{errorMessage:t,validationErrors:r}=e;t&&I(t,{context:"wc/add-to-cart"}),r&&w(r)}),v(y())):v({type:h})}))},[g.status,w,I,v,N,null==p?void 0:p.id]),Object(s.useEffect)(()=>{if(g.status===b.AFTER_PROCESSING){const e={processingResponse:g.processingResponse},t=e=>{let t=!1;return e.forEach(e=>{const{message:r,messageContext:c}=e;(Object(X.b)(e)||Object(X.c)(e))&&r&&(t=!0,I(r,c?{context:c}:void 0))}),t};if(g.hasError)return void Object(J.b)(N,"add_to_cart_after_processing_with_error",e).then(r=>{if(!t(r)){var c;const t=(null===(c=e.processingResponse)||void 0===c?void 0:c.message)||Object(a.__)("Something went wrong. Please contact us for assistance.","woo-gutenberg-products-block");I(t,{id:"add-to-cart",context:"woocommerce/single-product/"+((null==p?void 0:p.id)||0)})}v(y())});Object(J.b)(N,"add_to_cart_after_processing_with_success",e).then(e=>{t(e)?v(A(!0)):v(y())})}},[g.status,g.hasError,g.processingResponse,D,I,N,null==p?void 0:p.id]);const F=(e=>["simple","variable"].includes(e.type||"simple"))(p),L={product:p,productType:p.type||"simple",productIsPurchasable:u(p),productHasOptions:p.has_options||!1,supportsFormElements:F,showFormElements:O&&F,quantity:g.quantity||(null==p||null===(t=p.add_to_cart)||void 0===t?void 0:t.minimum)||1,minQuantity:(null==p||null===(r=p.add_to_cart)||void 0===r?void 0:r.minimum)||1,maxQuantity:(null==p||null===(c=p.add_to_cart)||void 0===c?void 0:c.maximum)||99,multipleOf:(null==p||null===(n=p.add_to_cart)||void 0===n?void 0:n.multiple_of)||1,requestParams:g.requestParams,isIdle:g.status===b.IDLE,isDisabled:g.status===b.DISABLED,isProcessing:g.status===b.PROCESSING,isBeforeProcessing:g.status===b.BEFORE_PROCESSING,isAfterProcessing:g.status===b.AFTER_PROCESSING,hasError:g.hasError,eventRegistration:k,dispatchActions:D};return Object(s.createElement)(z.Provider,{value:L},o)};var ee=r(44),te=r.n(ee),re=r(22),ce=r(83),se=r(42),ne=()=>{const{dispatchActions:e,product:t,quantity:r,eventRegistration:c,hasError:n,isProcessing:o,requestParams:i}=Z(),{showAllValidationErrors:u}=Object(l.useDispatch)(d.VALIDATION_STORE_KEY),b=Object(l.useSelect)(e=>e(d.VALIDATION_STORE_KEY).hasValidationErrors),{createErrorNotice:E,removeNotice:p}=Object(l.useDispatch)("core/notices"),{receiveCart:m}=Object(se.a)(),[O,_]=Object(s.useState)(!1),h=!n&&o,f=Object(s.useCallback)(()=>!b()||(u(),{type:"error"}),[b,u]);Object(s.useEffect)(()=>{const e=c.onAddToCartBeforeProcessing(f,0);return()=>{e()}},[c,f]);const S=Object(s.useCallback)(()=>{_(!0),p("add-to-cart","woocommerce/single-product/"+((null==t?void 0:t.id)||0));const c={id:t.id||0,quantity:r,...i};te()({path:"/wc/store/v1/cart/add-item",method:"POST",data:c,cache:"no-store",parse:!1}).then(r=>{te.a.setNonce(r.headers),r.json().then((function(c){r.ok?m(c):(c.body&&c.body.message?E(Object(re.decodeEntities)(c.body.message),{id:"add-to-cart",context:"woocommerce/single-product/"+((null==t?void 0:t.id)||0)}):E(Object(a.__)("Something went wrong. Please contact us for assistance.","woo-gutenberg-products-block"),{id:"add-to-cart",context:"woocommerce/single-product/"+((null==t?void 0:t.id)||0)}),e.setHasError()),Object(ce.c)({preserveCartData:!0}),e.setAfterProcessing(c),_(!1)}))}).catch(t=>{t.json().then((function(t){var r;null!==(r=t.data)&&void 0!==r&&r.cart&&m(t.data.cart),e.setHasError(),e.setAfterProcessing(t),_(!1)}))})},[t,E,p,m,e,r,i]);return Object(s.useEffect)(()=>{h&&!O&&S()},[h,S,O]),null};const oe=e=>{let{children:t,product:r,showFormElements:c}=e;return Object(s.createElement)($,{product:r,showFormElements:c},t,Object(s.createElement)(ne,null))};var ae=r(59),ie=r(4),ue=(r(422),r(275)),le=r(81),de=r(336),be=r(72),Ee=r(393);const pe=e=>{let{className:t,href:r,text:c,onClick:n}=e;return Object(s.createElement)(ue.a,{className:t,href:r,onClick:n,rel:"nofollow"},c)},me=e=>{let{className:t,quantityInCart:r,isProcessing:c,isDisabled:n,isDone:o,onClick:i}=e;return Object(s.createElement)(ue.a,{className:t,disabled:n,showSpinner:c,onClick:i},o&&r>0?Object(a.sprintf)(
/* translators: %s number of products in cart. */
Object(a._n)("%d in cart","%d in cart",r,"woo-gutenberg-products-block"),r):Object(a.__)("Add to cart","woo-gutenberg-products-block"),!!o&&Object(s.createElement)(le.a,{icon:de.a}))};var Oe=()=>{const{showFormElements:e,productIsPurchasable:t,productHasOptions:r,product:c,productType:n,isDisabled:o,isProcessing:i,eventRegistration:u,hasError:l,dispatchActions:d}=Z(),{parentName:b}=Object(ae.useInnerBlockLayoutContext)(),{dispatchStoreEvent:E}=Object(be.a)(),{cartQuantity:p}=Object(Ee.a)(c.id||0),[m,O]=Object(s.useState)(!1),_=c.add_to_cart||{url:"",text:""};return Object(s.useEffect)(()=>{const e=u.onAddToCartAfterProcessingWithSuccess(()=>(l||O(!0),!0),0);return()=>{e()}},[u,l]),(e||!r&&"simple"===n)&&t?Object(s.createElement)(me,{className:"wc-block-components-product-add-to-cart-button",quantityInCart:p,isDisabled:o,isProcessing:i,isDone:m,onClick:()=>{d.submitForm("woocommerce/single-product/"+((null==c?void 0:c.id)||0)),E("cart-add-item",{product:c,listName:b})}}):Object(s.createElement)(pe,{className:"wc-block-components-product-add-to-cart-button",href:_.url,text:_.text||Object(a.__)("View Product","woo-gutenberg-products-block"),onClick:()=>{E("product-view-link",{product:c,listName:b})}})},_e=r(51),he=e=>{let{disabled:t,min:r,max:c,step:n=1,value:o,onChange:a}=e;const i=void 0!==c,u=Object(_e.a)(e=>{let t=e;i&&(t=Math.min(t,Math.floor(c/n)*n)),t=Math.max(t,Math.ceil(r/n)*n),t=Math.floor(t/n)*n,t!==e&&(null==a||a(t))},300);return Object(s.createElement)("input",{className:"wc-block-components-product-add-to-cart-quantity",type:"number",value:o,min:r,max:c,step:n,hidden:1===c,disabled:t,onChange:e=>{null==a||a(e.target.value),u(Number(e.target.value))}})},fe=e=>{let{reason:t=Object(a.__)("Sorry, this product cannot be purchased.","woo-gutenberg-products-block")}=e;return Object(s.createElement)("div",{className:"wc-block-components-product-add-to-cart-unavailable"},t)},Se=()=>{const{product:e,quantity:t,minQuantity:r,maxQuantity:c,multipleOf:n,dispatchActions:o,isDisabled:i}=Z();return e.id&&!e.is_purchasable?Object(s.createElement)(fe,null):e.id&&!e.is_in_stock?Object(s.createElement)(fe,{reason:Object(a.__)("This product is currently out of stock and cannot be purchased.","woo-gutenberg-products-block")}):Object(s.createElement)(s.Fragment,null,Object(s.createElement)(he,{value:t,min:r,max:c,step:n,disabled:i,onChange:o.setQuantity}),Object(s.createElement)(Oe,null))},je=(r(423),r(492)),ge=r(11);const ve={value:"",label:Object(a.__)("Select an option","woo-gutenberg-products-block")};var Re=e=>{let{attributeName:t,options:r=[],value:c="",onChange:n=(()=>{}),errorMessage:i=Object(a.__)("Please select a value.","woo-gutenberg-products-block")}=e;const u=t,{setValidationErrors:b,clearValidationError:E}=Object(l.useDispatch)(d.VALIDATION_STORE_KEY),{error:p}=Object(l.useSelect)(e=>({error:e(d.VALIDATION_STORE_KEY).getValidationError(u)||{}}));return Object(s.useEffect)(()=>{c?E(u):b({[u]:{message:i,hidden:!0}})},[c,u,i,E,b]),Object(s.useEffect)(()=>()=>{E(u)},[u,E]),Object(s.createElement)("div",{className:"wc-block-components-product-add-to-cart-attribute-picker__container"},Object(s.createElement)(je.a,{label:Object(re.decodeEntities)(t),value:c||"",options:[ve,...r],onChange:n,required:!0,className:o()("wc-block-components-product-add-to-cart-attribute-picker__select",{"has-error":(null==p?void 0:p.message)&&!(null!=p&&p.hidden)})}),Object(s.createElement)(ge.ValidationInputError,{propertyName:u,elementId:u}))},Te=r(20);const ye=(e,t,r)=>{const c=Object.values(t).map(e=>{let{id:t}=e;return t});if(Object.values(r).every(e=>""===e))return c;const s=Object.keys(e);return c.filter(e=>s.every(c=>{const s=r[c]||"",n=t["id:"+e].attributes[c];return""===s||null===n||n===s}))};var Ae=e=>{let{attributes:t,variationAttributes:r,setRequestParams:c}=e;const n=Object(i.a)(t),o=Object(i.a)(r),[a,u]=Object(s.useState)(0),[l,d]=Object(s.useState)({}),[b,E]=Object(s.useState)(!1),p=Object(s.useMemo)(()=>((e,t,r)=>{const c={},s=Object.keys(e),n=Object.values(r).filter(Boolean).length>0;return s.forEach(s=>{const o=e[s],a={...r,[s]:null},i=n?ye(e,t,a):null,u=null!==i?i.map(e=>t["id:"+e].attributes[s]):null;c[s]=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return Object.values(e).map(e=>{let{name:r,slug:c}=e;return null===t||t.includes(null)||t.includes(c)?{value:c,label:Object(re.decodeEntities)(r)}:null}).filter(Boolean)}(o.terms,u)}),c})(n,o,l),[l,n,o]);return Object(s.useEffect)(()=>{if(!b){const e=(e=>Object(Te.a)(e)?0===Object.keys(e).length?{}:Object.values(e).reduce((e,t)=>{const r=t.terms.filter(e=>e.default);var c;return r.length>0&&(e[t.name]=null===(c=r[0])||void 0===c?void 0:c.slug),e},{}):{})(t);e&&d({...e}),E(!0)}},[l,t,b]),Object(s.useEffect)(()=>{Object.values(l).filter(e=>""!==e).length===Object.keys(n).length?u(((e,t,r)=>ye(e,t,r)[0]||0)(n,o,l)):a>0&&u(0)},[l,a,n,o]),Object(s.useEffect)(()=>{c({id:a,variation:Object.keys(l).map(e=>({attribute:e,value:l[e]}))})},[c,a,l]),Object(s.createElement)("div",{className:"wc-block-components-product-add-to-cart-attribute-picker"},Object.keys(n).map(e=>Object(s.createElement)(Re,{key:e,attributeName:e,options:p[e].filter(Boolean),value:l[e],onChange:t=>{d({...l,[e]:t})}})))},Pe=e=>{let{dispatchers:t,product:r}=e;const c=(e=>e?Object(ie.keyBy)(Object.values(e).filter(e=>{let{has_variations:t}=e;return t}),"name"):{})(r.attributes),n=(e=>{if(!e)return{};const t={};return e.forEach(e=>{let{id:r,attributes:c}=e;t["id:"+r]={id:r,attributes:c.reduce((e,t)=>{let{name:r,value:c}=t;return e[r]=c,e},{})}}),t})(r.variations);return 0===Object.keys(c).length||0===Object.keys(n).length?null:Object(s.createElement)(Ae,{attributes:c,variationAttributes:n,setRequestParams:t.setRequestParams})},Ce=()=>{const{product:e,quantity:t,minQuantity:r,maxQuantity:c,multipleOf:n,dispatchActions:o,isDisabled:i}=Z();return e.id&&!e.is_purchasable?Object(s.createElement)(fe,null):e.id&&!e.is_in_stock?Object(s.createElement)(fe,{reason:Object(a.__)("This product is currently out of stock and cannot be purchased.","woo-gutenberg-products-block")}):Object(s.createElement)(s.Fragment,null,Object(s.createElement)(Pe,{product:e,dispatchers:o}),Object(s.createElement)(he,{value:t,min:r,max:c,step:n,disabled:i,onChange:o.setQuantity}),Object(s.createElement)(Oe,null))},Ne=()=>Object(s.createElement)(Oe,null),Ie=()=>Object(s.createElement)("p",null,"This is a placeholder for the grouped products form element.");const we=()=>{const{showFormElements:e,productType:t}=Z();return e?"variable"===t?Object(s.createElement)(Ce,null):"grouped"===t?Object(s.createElement)(Ie,null):"external"===t?Object(s.createElement)(Ne,null):"simple"===t||"variation"===t?Object(s.createElement)(Se,null):null:Object(s.createElement)(Oe,null)};var ke=Object(c.withProductDataContext)(e=>{let{className:t,showFormElements:r}=e;const{product:c}=Object(ae.useProductDataContext)(),n=o()(t,"wc-block-components-product-add-to-cart",{"wc-block-components-product-add-to-cart--placeholder":Object(ie.isEmpty)(c)});return Object(s.createElement)(oe,{product:c,showFormElements:r},Object(s.createElement)("div",{className:n},Object(s.createElement)(we,null)))});t.default=Object(c.withFilteredAttributes)({showFormElements:{type:"boolean",default:!1},productId:{type:"number",default:0}})(ke)}}]);