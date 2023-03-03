(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[8],{285:function(e,t,n){"use strict";var r=n(15),c=n.n(r),s=n(0),o=n(6),a=n.n(o);n(286),t.a=e=>{let{children:t,className:n,headingLevel:r,...o}=e;const i=a()("wc-block-components-title",n),l="h"+r;return Object(s.createElement)(l,c()({className:i},o),t)}},286:function(e,t){},288:function(e,t){},289:function(e,t,n){"use strict";var r=n(1);t.a=e=>{let{defaultTitle:t=Object(r.__)("Step","woo-gutenberg-products-block"),defaultDescription:n=Object(r.__)("Step description text.","woo-gutenberg-products-block"),defaultShowStepNumber:c=!0}=e;return{title:{type:"string",default:t},description:{type:"string",default:n},showStepNumber:{type:"boolean",default:c}}}},30:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0),c=n(13),s=n.n(c);function o(e){const t=Object(r.useRef)(e);return s()(e,t.current)||(t.current=e),t.current}},306:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(7),c=n(3);const s=()=>{const{customerData:e,isInitialized:t}=Object(r.useSelect)(e=>{const t=e(c.CART_STORE_KEY);return{customerData:t.getCustomerData(),isInitialized:t.hasFinishedResolution("getCartData")}}),{setShippingAddress:n,setBillingAddress:s}=Object(r.useDispatch)(c.CART_STORE_KEY);return{isInitialized:t,billingAddress:e.billingAddress,shippingAddress:e.shippingAddress,setBillingAddress:s,setShippingAddress:n}}},311:function(e,t,n){"use strict";var r=n(0),c=n(6),s=n.n(c),o=n(285);n(288);const a=e=>{let{title:t,stepHeadingContent:n}=e;return Object(r.createElement)("div",{className:"wc-block-components-checkout-step__heading"},Object(r.createElement)(o.a,{"aria-hidden":"true",className:"wc-block-components-checkout-step__title",headingLevel:"2"},t),!!n&&Object(r.createElement)("span",{className:"wc-block-components-checkout-step__heading-content"},n))};t.a=e=>{let{id:t,className:n,title:c,legend:o,description:i,children:l,disabled:u=!1,showStepNumber:d=!0,stepHeadingContent:p=(()=>{})}=e;const b=o||c?"fieldset":"div";return Object(r.createElement)(b,{className:s()(n,"wc-block-components-checkout-step",{"wc-block-components-checkout-step--with-step-number":d,"wc-block-components-checkout-step--disabled":u}),id:t,disabled:u},!(!o&&!c)&&Object(r.createElement)("legend",{className:"screen-reader-text"},o||c),!!c&&Object(r.createElement)(a,{title:c,stepHeadingContent:p()}),Object(r.createElement)("div",{className:"wc-block-components-checkout-step__container"},!!i&&Object(r.createElement)("p",{className:"wc-block-components-checkout-step__description"},i),Object(r.createElement)("div",{className:"wc-block-components-checkout-step__content"},l)))}},331:function(e,t){},332:function(e,t){},333:function(e,t){},402:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(2),c=n(0),s=n(7),o=n(3),a=n(306),i=n(121);const l=()=>{const{needsShipping:e}=Object(i.a)(),{useShippingAsBilling:t,prefersCollection:n}=Object(s.useSelect)(e=>({useShippingAsBilling:e(o.CHECKOUT_STORE_KEY).getUseShippingAsBilling(),prefersCollection:e(o.CHECKOUT_STORE_KEY).prefersCollection()})),{__internalSetUseShippingAsBilling:l}=Object(s.useDispatch)(o.CHECKOUT_STORE_KEY),{billingAddress:u,setBillingAddress:d,shippingAddress:p,setShippingAddress:b}=Object(a.a)(),g=Object(c.useCallback)(e=>{d({email:e})},[d]),m=Object(c.useCallback)(e=>{d({phone:e})},[d]),f=Object(c.useCallback)(e=>{b({phone:e})},[b]),h=Object(r.getSetting)("forcedBillingAddress",!1);return{shippingAddress:p,billingAddress:u,setShippingAddress:b,setBillingAddress:d,setEmail:g,setBillingPhone:m,setShippingPhone:f,defaultAddressFields:r.defaultAddressFields,useShippingAsBilling:t,setUseShippingAsBilling:l,needsShipping:e,showShippingFields:!h&&e&&!n,showShippingMethods:e&&!n,showBillingFields:!e||!t||n,forcedBillingAddress:h,useBillingAsShipping:h||n}}},406:function(e,t,n){"use strict";var r=n(15),c=n.n(r),s=n(0),o=n(49),a=n(57);const i=["BUTTON","FIELDSET","INPUT","OPTGROUP","OPTION","SELECT","TEXTAREA","A"];t.a=e=>{let{children:t,style:n={},...r}=e;const l=Object(s.useRef)(null),u=()=>{l.current&&o.focus.focusable.find(l.current).forEach(e=>{i.includes(e.nodeName)&&e.setAttribute("tabindex","-1"),e.hasAttribute("contenteditable")&&e.setAttribute("contenteditable","false")})},d=Object(a.a)(u,0,{leading:!0});return Object(s.useLayoutEffect)(()=>{let e;return u(),l.current&&(e=new window.MutationObserver(d),e.observe(l.current,{childList:!0,attributes:!0,subtree:!0})),()=>{e&&e.disconnect(),d.cancel()}},[d]),Object(s.createElement)("div",c()({ref:l,"aria-disabled":"true",style:{userSelect:"none",pointerEvents:"none",cursor:"normal",...n}},r),t)}},407:function(e,t,n){"use strict";var r=n(0),c=n(1),s=n(11);t.a=e=>{let{id:t="phone",errorId:n="phone",isRequired:o=!1,value:a="",onChange:i}=e;return Object(r.createElement)(s.ValidatedTextInput,{id:t,errorId:n,type:"tel",autoComplete:"tel",required:o,label:o?Object(c.__)("Phone","woo-gutenberg-products-block"):Object(c.__)("Phone (optional)","woo-gutenberg-products-block"),value:a,onChange:i})}},408:function(e,t,n){"use strict";var r=n(0),c=n(11),s=n(15),o=n.n(s),a=n(37),i=n(1),l=n(31),u=n(6),d=n.n(u),p=n(9),b=n(512),g=n(20),m=n(7),f=n(3);n(332);var h=Object(p.withInstanceId)(e=>{let{id:t,className:n,label:s,onChange:o,options:a,value:l,required:u=!1,errorMessage:p=Object(i.__)("Please select a value.","woo-gutenberg-products-block"),errorId:h,instanceId:O="0",autoComplete:j="off"}=e;const E=Object(r.useRef)(null),v=t||"control-"+O,k=h||v,{setValidationErrors:C,clearValidationError:_}=Object(m.useDispatch)(f.VALIDATION_STORE_KEY),w=Object(m.useSelect)(e=>e(f.VALIDATION_STORE_KEY).getValidationError(k));return Object(r.useEffect)(()=>(!u||l?_(k):C({[k]:{message:p,hidden:!0}}),()=>{_(k)}),[_,l,k,p,u,C]),Object(r.createElement)("div",{id:v,className:d()("wc-block-components-combobox",n,{"is-active":l,"has-error":(null==w?void 0:w.message)&&!(null!=w&&w.hidden)}),ref:E},Object(r.createElement)(b.a,{className:"wc-block-components-combobox-control",label:s,onChange:o,onFilterValueChange:e=>{if(e.length){const t=Object(g.a)(E.current)?E.current.ownerDocument.activeElement:void 0;if(t&&Object(g.a)(E.current)&&E.current.contains(t))return;const n=e.toLocaleUpperCase(),r=a.find(e=>e.label.toLocaleUpperCase().startsWith(n)||e.value.toLocaleUpperCase()===n);r&&o(r.value)}},options:a,value:l||"",allowReset:!1,autoComplete:j,"aria-invalid":(null==w?void 0:w.message)&&!(null!=w&&w.hidden)}),Object(r.createElement)(c.ValidationInputError,{propertyName:k}))});n(331);var O=e=>{let{className:t,countries:n,id:c,label:s,onChange:o,value:a="",autoComplete:u="off",required:p=!1,errorId:b,errorMessage:g=Object(i.__)("Please select a country.","woo-gutenberg-products-block")}=e;const m=Object(r.useMemo)(()=>Object.entries(n).map(e=>{let[t,n]=e;return{value:t,label:Object(l.decodeEntities)(n)}}),[n]);return Object(r.createElement)("div",{className:d()(t,"wc-block-components-country-input")},Object(r.createElement)(h,{id:c,label:s,onChange:o,options:m,value:a,errorId:b,errorMessage:g,required:p,autoComplete:u}))},j=e=>Object(r.createElement)(O,o()({countries:a.h},e)),E=e=>Object(r.createElement)(O,o()({countries:a.a},e));n(333);const v=(e,t)=>{const n=t.find(t=>t.label.toLocaleUpperCase()===e.toLocaleUpperCase()||t.value.toLocaleUpperCase()===e.toLocaleUpperCase());return n?n.value:""};var k=e=>{let{className:t,id:n,states:s,country:o,label:a,onChange:u,autoComplete:p="off",value:b="",required:g=!1}=e;const m=s[o],f=Object(r.useMemo)(()=>m?Object.keys(m).map(e=>({value:e,label:Object(l.decodeEntities)(m[e])})):[],[m]),O=Object(r.useCallback)(e=>{u(f.length>0?v(e,f):e)},[u,f]),j=Object(r.useRef)(b);return Object(r.useEffect)(()=>{j.current!==b&&(j.current=b)},[b]),Object(r.useEffect)(()=>{if(f.length>0&&j.current){const e=v(j.current,f);e!==j.current&&O(e)}},[f,O]),f.length>0?Object(r.createElement)(h,{className:d()(t,"wc-block-components-state-input"),id:n,label:a,onChange:O,options:f,value:b,errorMessage:Object(i.__)("Please select a state.","woo-gutenberg-products-block"),required:g,autoComplete:p}):Object(r.createElement)(c.ValidatedTextInput,{className:t,id:n,label:a,onChange:O,autoComplete:p,value:b,required:g})},C=e=>Object(r.createElement)(k,o()({states:a.i},e)),_=e=>Object(r.createElement)(k,o()({states:a.b},e)),w=n(30),y=n(2),A=n(60);t.a=Object(p.withInstanceId)(e=>{let{id:t="",fields:n=Object.keys(y.defaultAddressFields),fieldConfig:s={},instanceId:o,onChange:a,type:l="shipping",values:u}=e;const{setValidationErrors:d,clearValidationError:p}=Object(m.useDispatch)(f.VALIDATION_STORE_KEY),b=Object(m.useSelect)(e=>e(f.VALIDATION_STORE_KEY).getValidationError("shipping_country")),g=Object(w.a)(n),h=Object(r.useMemo)(()=>Object(A.a)(g,s,u.country),[g,s,u.country]);return Object(r.useEffect)(()=>{h.forEach(e=>{e.hidden&&u[e.key]&&a({...u,[e.key]:""})})},[h,a,u]),Object(r.useEffect)(()=>{"shipping"===l&&((e,t,n,r)=>{r||e.country||!(e.city||e.state||e.postcode)||t({shipping_country:{message:Object(i.__)("Please select a country to calculate rates.","woo-gutenberg-products-block"),hidden:!1}}),r&&e.country&&n("shipping_country")})(u,d,p,!(null==b||!b.message||null!=b&&b.hidden))},[u,null==b?void 0:b.message,null==b?void 0:b.hidden,d,p,l]),t=t||o,Object(r.createElement)("div",{id:t,className:"wc-block-components-address-form"},h.map(e=>{if(e.hidden)return null;const n=`${l}_${e.key}`;if("country"===e.key){const c="shipping"===l?j:E;return Object(r.createElement)(c,{key:e.key,id:`${t}-${e.key}`,errorId:n,label:e.required?e.label:e.optionalLabel,value:u.country,autoComplete:e.autocomplete,onChange:e=>a({...u,country:e,state:""}),errorMessage:e.errorMessage,required:e.required})}if("state"===e.key){const c="shipping"===l?C:_;return Object(r.createElement)(c,{key:e.key,id:`${t}-${e.key}`,errorId:n,country:u.country,label:e.required?e.label:e.optionalLabel,value:u.state,autoComplete:e.autocomplete,onChange:e=>a({...u,state:e}),errorMessage:e.errorMessage,required:e.required})}return Object(r.createElement)(c.ValidatedTextInput,{key:e.key,id:`${t}-${e.key}`,errorId:n,className:"wc-block-components-address-form__"+e.key,label:e.required?e.label:e.optionalLabel,value:u[e.key],autoCapitalize:e.autocapitalize,autoComplete:e.autocomplete,onChange:t=>a({...u,[e.key]:t}),errorMessage:e.errorMessage,required:e.required})}))})},57:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(8);function c(e,t,n){var c=this,s=Object(r.useRef)(null),o=Object(r.useRef)(0),a=Object(r.useRef)(null),i=Object(r.useRef)([]),l=Object(r.useRef)(),u=Object(r.useRef)(),d=Object(r.useRef)(e),p=Object(r.useRef)(!0);d.current=e;var b=!t&&0!==t&&"undefined"!=typeof window;if("function"!=typeof e)throw new TypeError("Expected a function");t=+t||0;var g=!!(n=n||{}).leading,m=!("trailing"in n)||!!n.trailing,f="maxWait"in n,h=f?Math.max(+n.maxWait||0,t):null;return Object(r.useEffect)((function(){return p.current=!0,function(){p.current=!1}}),[]),Object(r.useMemo)((function(){var e=function(e){var t=i.current,n=l.current;return i.current=l.current=null,o.current=e,u.current=d.current.apply(n,t)},n=function(e,t){b&&cancelAnimationFrame(a.current),a.current=b?requestAnimationFrame(e):setTimeout(e,t)},r=function(e){if(!p.current)return!1;var n=e-s.current,r=e-o.current;return!s.current||n>=t||n<0||f&&r>=h},O=function(t){return a.current=null,m&&i.current?e(t):(i.current=l.current=null,u.current)},j=function(){var e=Date.now();if(r(e))return O(e);if(p.current){var c=e-s.current,a=e-o.current,i=t-c,l=f?Math.min(i,h-a):i;n(j,l)}},E=function(){for(var d=[],b=0;b<arguments.length;b++)d[b]=arguments[b];var m=Date.now(),h=r(m);if(i.current=d,l.current=c,s.current=m,h){if(!a.current&&p.current)return o.current=s.current,n(j,t),g?e(s.current):u.current;if(f)return n(j,t),e(s.current)}return a.current||n(j,t),u.current};return E.cancel=function(){a.current&&(b?cancelAnimationFrame(a.current):clearTimeout(a.current)),o.current=0,i.current=s.current=l.current=a.current=null},E.isPending=function(){return!!a.current},E.flush=function(){return a.current?O(Date.now()):u.current},E}),[g,f,t,h,m,b])}}}]);