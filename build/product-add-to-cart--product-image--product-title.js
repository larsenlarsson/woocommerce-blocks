(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[4],{99:function(c,e,t){"use strict";t.d(e,"a",(function(){return s}));var o=t(43),r=t(6),a=t(0);const s=()=>({dispatchStoreEvent:Object(a.useCallback)(((c,e={})=>{try{Object(o.doAction)(`experimental__woocommerce_blocks-${c}`,e)}catch(c){console.error(c)}}),[]),dispatchCheckoutEvent:Object(a.useCallback)(((c,e={})=>{try{Object(o.doAction)(`experimental__woocommerce_blocks-checkout-${c}`,{...e,storeCart:Object(r.select)("wc/store/cart").getCartData()})}catch(c){console.error(c)}}),[])})}}]);