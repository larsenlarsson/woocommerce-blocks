(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[54],{27:function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));var n=s(0),c=s(14),r=s.n(c);function a(e){const t=Object(n.useRef)(e);return r()(e,t.current)||(t.current=e),t.current}},324:function(e,t,s){"use strict";s.d(t,"b",(function(){return i})),s.d(t,"a",(function(){return l}));var n=s(27),c=s(21),r=s(5),a=s(3);const o=(e=!1)=>{const{paymentMethodsInitialized:t,expressPaymentMethodsInitialized:s,availablePaymentMethods:o,availableExpressPaymentMethods:i}=Object(r.useSelect)((e=>{const t=e(a.PAYMENT_STORE_KEY);return{paymentMethodsInitialized:t.paymentMethodsInitialized(),expressPaymentMethodsInitialized:t.expressPaymentMethodsInitialized(),availableExpressPaymentMethods:t.getAvailableExpressPaymentMethods(),availablePaymentMethods:t.getAvailablePaymentMethods()}})),l=Object.values(o).map((({name:e})=>e)),d=Object.values(i).map((({name:e})=>e)),u=Object(c.getPaymentMethods)(),b=Object(c.getExpressPaymentMethods)(),m=Object.keys(u).reduce(((e,t)=>(l.includes(t)&&(e[t]=u[t]),e)),{}),h=Object.keys(b).reduce(((e,t)=>(d.includes(t)&&(e[t]=b[t]),e)),{}),g=Object(n.a)(m),p=Object(n.a)(h);return{paymentMethods:e?p:g,isInitialized:e?s:t}},i=()=>o(!1),l=()=>o(!0)},457:function(e,t,s){"use strict";s.d(t,"a",(function(){return o}));var n=s(3),c=s(5),r=s(77),a=s(324);const o=()=>{const{isCalculating:e,isBeforeProcessing:t,isProcessing:s,isAfterProcessing:o,isComplete:i,hasError:l}=Object(c.useSelect)((e=>{const t=e(n.CHECKOUT_STORE_KEY);return{isCalculating:t.isCalculating(),isBeforeProcessing:t.isBeforeProcessing(),isProcessing:t.isProcessing(),isAfterProcessing:t.isAfterProcessing(),isComplete:t.isComplete(),hasError:t.hasError()}})),{activePaymentMethod:d,isExpressPaymentMethodActive:u}=Object(c.useSelect)((e=>{const t=e(n.PAYMENT_STORE_KEY);return{activePaymentMethod:t.getActivePaymentMethod(),isExpressPaymentMethodActive:t.isExpressPaymentMethodActive()}})),{onSubmit:b}=Object(r.b)(),{paymentMethods:m={}}=Object(a.b)(),h=s||o||t,g=i&&!l;return{paymentMethodButtonLabel:(m[d]||{}).placeOrderButtonLabel,onSubmit:b,isCalculating:e,isDisabled:s||u,waitingForProcessing:h,waitingForRedirect:g}}},530:function(e,t,s){"use strict";s.r(t);var n=s(0),c=s(1),r=s(4),a=s.n(r),o=s(12),i=s(457),l=s(11),d=s(5),u=s(3),b=s(30);const m=b.l?`<a href="${b.l}" target="_blank">${Object(c.__)("Terms and Conditions","woo-gutenberg-products-block")}</a>`:Object(c.__)("Terms and Conditions","woo-gutenberg-products-block"),h=b.h?`<a href="${b.h}" target="_blank">${Object(c.__)("Privacy Policy","woo-gutenberg-products-block")}</a>`:Object(c.__)("Privacy Policy","woo-gutenberg-products-block"),g=Object(c.sprintf)(/* translators: %1$s terms page link, %2$s privacy page link. */
Object(c.__)("By proceeding with your purchase you agree to our %1$s and %2$s","woo-gutenberg-products-block"),m,h),p=Object(c.sprintf)(/* translators: %1$s terms page link, %2$s privacy page link. */
Object(c.__)("You must accept our %1$s and %2$s to continue with your purchase.","woo-gutenberg-products-block"),m,h);t.default=Object(l.withInstanceId)((({text:e,checkbox:t,instanceId:s,className:r})=>{const[l,b]=Object(n.useState)(!1),{isDisabled:m}=Object(i.a)(),h="terms-and-conditions-"+s,{setValidationErrors:O,clearValidationError:y}=Object(d.useDispatch)(u.VALIDATION_STORE_KEY),j=Object(d.useSelect)((e=>e(u.VALIDATION_STORE_KEY).getValidationError(h))),P=!(null==j||!j.message||null!=j&&j.hidden);return Object(n.useEffect)((()=>{if(t)return l?y(h):O({[h]:{message:Object(c.__)("Please read and accept the terms and conditions.","woo-gutenberg-products-block"),hidden:!0}}),()=>{y(h)}}),[t,l,h,y,O]),Object(n.createElement)("div",{className:a()("wc-block-checkout__terms",{"wc-block-checkout__terms--disabled":m},r)},t?Object(n.createElement)(n.Fragment,null,Object(n.createElement)(o.CheckboxControl,{id:"terms-and-conditions",checked:l,onChange:()=>b((e=>!e)),hasError:P,disabled:m},Object(n.createElement)("span",{dangerouslySetInnerHTML:{__html:e||p}}))):Object(n.createElement)("span",{dangerouslySetInnerHTML:{__html:e||g}}))}))}}]);