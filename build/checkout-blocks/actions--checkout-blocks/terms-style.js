(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[11],{944:function(e,s,t){"use strict";t.d(s,"a",(function(){return c}));var i=t(10),o=t(7),n=t(168),r=t(311);const c=()=>{const{isCalculating:e,isBeforeProcessing:s,isProcessing:t,isAfterProcessing:c,isComplete:a,hasError:l}=Object(o.useSelect)(e=>{const s=e(i.CHECKOUT_STORE_KEY);return{isCalculating:s.isCalculating(),isBeforeProcessing:s.isBeforeProcessing(),isProcessing:s.isProcessing(),isAfterProcessing:s.isAfterProcessing(),isComplete:s.isComplete(),hasError:s.hasError()}}),{activePaymentMethod:u,isExpressPaymentMethodActive:g}=Object(o.useSelect)(e=>{const s=e(i.PAYMENT_STORE_KEY);return{activePaymentMethod:s.getActivePaymentMethod(),isExpressPaymentMethodActive:s.isExpressPaymentMethodActive()}}),{onSubmit:P}=Object(n.b)(),{paymentMethods:d={}}=Object(r.b)(),p=t||c||s,b=a&&!l;return{paymentMethodButtonLabel:(d[u]||{}).placeOrderButtonLabel,onSubmit:P,isCalculating:e,isDisabled:t||g,waitingForProcessing:p,waitingForRedirect:b}}}}]);