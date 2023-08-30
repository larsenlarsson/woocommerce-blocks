(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[36],{27:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var s=n(0),c=n(14),o=n.n(c);function i(e){const t=Object(s.useRef)(e);return o()(e,t.current)||(t.current=e),t.current}},297:function(e,t,n){"use strict";var s=n(0),c=n(4),o=n.n(c);n(298),t.a=({children:e,className:t,headingLevel:n,...c})=>{const i=o()("wc-block-components-title",t),r=`h${n}`;return Object(s.createElement)(r,{className:i,...c},e)}},298:function(e,t){},299:function(e,t){},300:function(e,t,n){"use strict";var s=n(1);t.a=({defaultTitle:e=Object(s.__)("Step","woo-gutenberg-products-block"),defaultDescription:t=Object(s.__)("Step description text.","woo-gutenberg-products-block"),defaultShowStepNumber:n=!0})=>({title:{type:"string",default:e},description:{type:"string",default:t},showStepNumber:{type:"boolean",default:n}})},305:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var s=n(5),c=n(3);const o=()=>{const{customerData:e,isInitialized:t}=Object(s.useSelect)((e=>{const t=e(c.CART_STORE_KEY);return{customerData:t.getCustomerData(),isInitialized:t.hasFinishedResolution("getCartData")}})),{setShippingAddress:n,setBillingAddress:o}=Object(s.useDispatch)(c.CART_STORE_KEY);return{isInitialized:t,billingAddress:e.billingAddress,shippingAddress:e.shippingAddress,setBillingAddress:o,setShippingAddress:n}}},317:function(e,t){},318:function(e,t){},319:function(e,t){},321:function(e,t,n){"use strict";var s=n(0),c=n(4),o=n.n(c),i=n(297);n(299);const r=({title:e,stepHeadingContent:t})=>Object(s.createElement)("div",{className:"wc-block-components-checkout-step__heading"},Object(s.createElement)(i.a,{"aria-hidden":"true",className:"wc-block-components-checkout-step__title",headingLevel:"2"},e),!!t&&Object(s.createElement)("span",{className:"wc-block-components-checkout-step__heading-content"},t));t.a=({id:e,className:t,title:n,legend:c,description:i,children:l,disabled:a=!1,showStepNumber:d=!0,stepHeadingContent:u=(()=>{})})=>{const p=c||n?"fieldset":"div";return Object(s.createElement)(p,{className:o()(t,"wc-block-components-checkout-step",{"wc-block-components-checkout-step--with-step-number":d,"wc-block-components-checkout-step--disabled":a}),id:e,disabled:a},!(!c&&!n)&&Object(s.createElement)("legend",{className:"screen-reader-text"},c||n),!!n&&Object(s.createElement)(r,{title:n,stepHeadingContent:u()}),Object(s.createElement)("div",{className:"wc-block-components-checkout-step__container"},!!i&&Object(s.createElement)("p",{className:"wc-block-components-checkout-step__description"},i),Object(s.createElement)("div",{className:"wc-block-components-checkout-step__content"},l)))}},388:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var s=n(2),c=n(0),o=n(5),i=n(3),r=n(305),l=n(93);const a=()=>{const{needsShipping:e}=Object(l.a)(),{useShippingAsBilling:t,prefersCollection:n}=Object(o.useSelect)((e=>({useShippingAsBilling:e(i.CHECKOUT_STORE_KEY).getUseShippingAsBilling(),prefersCollection:e(i.CHECKOUT_STORE_KEY).prefersCollection()}))),{__internalSetUseShippingAsBilling:a}=Object(o.useDispatch)(i.CHECKOUT_STORE_KEY),{billingAddress:d,setBillingAddress:u,shippingAddress:p,setShippingAddress:b}=Object(r.a)(),h=Object(c.useCallback)((e=>{u({email:e})}),[u]),g=Object(c.useCallback)((e=>{u({phone:e})}),[u]),m=Object(c.useCallback)((e=>{b({phone:e})}),[b]),O=Object(s.getSetting)("forcedBillingAddress",!1);return{shippingAddress:p,billingAddress:d,setShippingAddress:b,setBillingAddress:u,setEmail:h,setBillingPhone:g,setShippingPhone:m,defaultAddressFields:s.defaultAddressFields,useShippingAsBilling:t,setUseShippingAsBilling:a,needsShipping:e,showShippingFields:!O&&e&&!n,showShippingMethods:e&&!n,showBillingFields:!e||!t||n,forcedBillingAddress:O,useBillingAsShipping:O||n}}},392:function(e,t,n){"use strict";var s=n(0),c=n(47),o=n(44);const i=["BUTTON","FIELDSET","INPUT","OPTGROUP","OPTION","SELECT","TEXTAREA","A"];t.a=({children:e,style:t={},...n})=>{const r=Object(s.useRef)(null),l=()=>{r.current&&c.focus.focusable.find(r.current).forEach((e=>{i.includes(e.nodeName)&&e.setAttribute("tabindex","-1"),e.hasAttribute("contenteditable")&&e.setAttribute("contenteditable","false")}))},a=Object(o.b)(l,0,{leading:!0});return Object(s.useLayoutEffect)((()=>{let e;return l(),r.current&&(e=new window.MutationObserver(a),e.observe(r.current,{childList:!0,attributes:!0,subtree:!0})),()=>{e&&e.disconnect(),a.cancel()}}),[a]),Object(s.createElement)("div",{ref:r,"aria-disabled":"true",style:{userSelect:"none",pointerEvents:"none",cursor:"normal",...t},...n},e)}},393:function(e,t,n){"use strict";var s=n(0),c=n(1),o=n(12);t.a=({id:e="phone",errorId:t="phone",isRequired:n=!1,value:i="",onChange:r})=>Object(s.createElement)(o.ValidatedTextInput,{id:e,errorId:t,type:"tel",autoComplete:"tel",required:n,label:n?Object(c.__)("Phone","woo-gutenberg-products-block"):Object(c.__)("Phone (optional)","woo-gutenberg-products-block"),value:i,onChange:r})},394:function(e,t,n){"use strict";var s=n(0),c=n(12),o=n(30),i=n(1),r=n(23),l=n(4),a=n.n(l),d=n(11),u=n(420),p=n(20),b=n(5),h=n(3);n(318);var g=Object(d.withInstanceId)((({id:e,className:t,label:n,onChange:o,options:r,value:l,required:d=!1,errorMessage:g=Object(i.__)("Please select a value.","woo-gutenberg-products-block"),errorId:m,instanceId:O="0",autoComplete:j="off"})=>{const f=Object(s.useRef)(null),E=e||"control-"+O,_=m||E,{setValidationErrors:k,clearValidationError:C}=Object(b.useDispatch)(h.VALIDATION_STORE_KEY),v=Object(b.useSelect)((e=>e(h.VALIDATION_STORE_KEY).getValidationError(_)));return Object(s.useEffect)((()=>(!d||l?C(_):k({[_]:{message:g,hidden:!0}}),()=>{C(_)})),[C,l,_,g,d,k]),Object(s.createElement)("div",{id:E,className:a()("wc-block-components-combobox",t,{"is-active":l,"has-error":(null==v?void 0:v.message)&&!(null!=v&&v.hidden)}),ref:f},Object(s.createElement)(u.a,{className:"wc-block-components-combobox-control",label:n,onChange:o,onFilterValueChange:e=>{if(e.length){const t=Object(p.a)(f.current)?f.current.ownerDocument.activeElement:void 0;if(t&&Object(p.a)(f.current)&&f.current.contains(t))return;const n=e.toLocaleUpperCase(),s=r.find((e=>e.label.toLocaleUpperCase().startsWith(n)||e.value.toLocaleUpperCase()===n));s&&o(s.value)}},options:r,value:l||"",allowReset:!1,autoComplete:j,"aria-invalid":(null==v?void 0:v.message)&&!(null!=v&&v.hidden)}),Object(s.createElement)(c.ValidationInputError,{propertyName:_}))}));n(317);var m=({className:e,countries:t,id:n,label:c,onChange:o,value:l="",autoComplete:d="off",required:u=!1,errorId:p,errorMessage:b=Object(i.__)("Please select a country","woo-gutenberg-products-block")})=>{const h=Object(s.useMemo)((()=>Object.entries(t).map((([e,t])=>({value:e,label:Object(r.decodeEntities)(t)})))),[t]);return Object(s.createElement)("div",{className:a()(e,"wc-block-components-country-input")},Object(s.createElement)(g,{id:n,label:c,onChange:o,options:h,value:l,errorId:p,errorMessage:b,required:u,autoComplete:d}))},O=e=>Object(s.createElement)(m,{countries:o.i,...e}),j=e=>Object(s.createElement)(m,{countries:o.a,...e});n(319);const f=(e,t)=>{const n=t.find((t=>t.label.toLocaleUpperCase()===e.toLocaleUpperCase()||t.value.toLocaleUpperCase()===e.toLocaleUpperCase()));return n?n.value:""};var E=({className:e,id:t,states:n,country:o,label:l,onChange:d,autoComplete:u="off",value:p="",required:b=!1,errorId:h=""})=>{const m=n[o],O=Object(s.useMemo)((()=>m?Object.keys(m).map((e=>({value:e,label:Object(r.decodeEntities)(m[e])}))):[]),[m]),j=Object(s.useCallback)((e=>{const t=O.length>0?f(e,O):e;t!==p&&d(t)}),[d,O,p]),E=Object(s.useRef)(p);return Object(s.useEffect)((()=>{E.current!==p&&(E.current=p)}),[p]),Object(s.useEffect)((()=>{if(O.length>0&&E.current){const e=f(E.current,O);e!==E.current&&j(e)}}),[O,j]),O.length>0?Object(s.createElement)(g,{className:a()(e,"wc-block-components-state-input"),id:t,label:l,onChange:j,options:O,value:p,errorMessage:Object(i.__)("Please select a state.","woo-gutenberg-products-block"),errorId:h,required:b,autoComplete:u}):Object(s.createElement)(c.ValidatedTextInput,{className:e,id:t,label:l,onChange:j,autoComplete:u,value:p,required:b})},_=e=>Object(s.createElement)(E,{states:o.j,...e}),k=e=>Object(s.createElement)(E,{states:o.b,...e}),C=n(27),v=n(2),w=n(14),y=n.n(w),A=n(84);const S=Object.keys(v.defaultAddressFields);t.a=Object(d.withInstanceId)((({id:e="",fields:t=S,fieldConfig:n={},instanceId:o,onChange:r,type:l="shipping",values:a})=>{const d=Object(C.a)(t),u=Object(C.a)(n),p=Object(C.a)(a.country),g=Object(s.useMemo)((()=>{const e=Object(A.a)(d,u,p);return{fields:e,type:l,required:e.filter((e=>e.required)),hidden:e.filter((e=>e.hidden))}}),[d,u,p,l]),m=Object(s.useRef)({});return Object(s.useEffect)((()=>{const e={...a,...Object.fromEntries(g.hidden.map((e=>[e.key,""])))};y()(a,e)||r(e)}),[r,g,a]),Object(s.useEffect)((()=>{"shipping"===l&&(e=>{const t="shipping_country",n=Object(b.select)(h.VALIDATION_STORE_KEY).getValidationError(t);!e.country&&(e.city||e.state||e.postcode)&&(n?Object(b.dispatch)(h.VALIDATION_STORE_KEY).showValidationError(t):Object(b.dispatch)(h.VALIDATION_STORE_KEY).setValidationErrors({[t]:{message:Object(i.__)("Please select your country","woo-gutenberg-products-block"),hidden:!1}})),n&&e.country&&Object(b.dispatch)(h.VALIDATION_STORE_KEY).clearValidationError(t)})(a)}),[a,l]),Object(s.useEffect)((()=>{var e,t;null===(e=m.current)||void 0===e||null===(t=e.postcode)||void 0===t||t.revalidate()}),[p]),e=e||o,Object(s.createElement)("div",{id:e,className:"wc-block-components-address-form"},g.fields.map((t=>{if(t.hidden)return null;const n={id:`${e}-${t.key}`,errorId:`${l}_${t.key}`,label:t.required?t.label:t.optionalLabel,autoCapitalize:t.autocapitalize,autoComplete:t.autocomplete,errorMessage:t.errorMessage,required:t.required,className:`wc-block-components-address-form__${t.key}`};if("country"===t.key){const e="shipping"===l?O:j;return Object(s.createElement)(e,{key:t.key,...n,value:a.country,onChange:e=>{const t={...a,country:e,state:""};a.postcode&&!Object(c.isPostcode)({postcode:a.postcode,country:e})&&(t.postcode=""),r(t)}})}if("state"===t.key){const e="shipping"===l?_:k;return Object(s.createElement)(e,{key:t.key,...n,country:a.country,value:a.state,onChange:e=>r({...a,state:e})})}return Object(s.createElement)(c.ValidatedTextInput,{key:t.key,ref:e=>m.current[t.key]=e,...n,value:a[t.key],onChange:e=>r({...a,[t.key]:e}),customFormatter:e=>"postcode"===t.key?e.trimStart().toUpperCase():e,customValidation:e=>((e,t,n)=>!((e.required||e.value)&&"postcode"===t&&n.country&&!Object(c.isPostcode)({postcode:e.value,country:n.country})&&(e.setCustomValidity(Object(i.__)("Please enter a valid postcode","woo-gutenberg-products-block")),1)))(e,t.key,a)})})))}))},507:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n(4),o=n.n(c),i=n(146),r=n(321),l=n(388),a=n(5),d=n(3),u=n(73),p=n(58),b=n(37),h=n(394),g=n(392),m=n(12),O=n(393),j=({showCompanyField:e=!1,showApartmentField:t=!1,showPhoneField:n=!1,requireCompanyField:c=!1,requirePhoneField:o=!1})=>{const{defaultAddressFields:i,billingAddress:r,setBillingAddress:a,setShippingAddress:d,setBillingPhone:j,setShippingPhone:f,useBillingAsShipping:E}=Object(l.a)(),{dispatchCheckoutEvent:_}=Object(u.a)(),{isEditor:k}=Object(p.a)();Object(s.useEffect)((()=>{n||j("")}),[n,j]);const[C,v]=Object(s.useState)(!1);Object(s.useEffect)((()=>{C||(E&&d(r),v(!0))}),[C,d,r,E]);const w=Object(s.useMemo)((()=>({company:{hidden:!e,required:c},address_2:{hidden:!t}})),[e,c,t]),y=Object(s.useCallback)((e=>{a(e),E&&(d(e),_("set-shipping-address")),_("set-billing-address")}),[_,a,d,E]),A=k?g.a:s.Fragment,S=E?[b.d.BILLING_ADDRESS,b.d.SHIPPING_ADDRESS]:[b.d.BILLING_ADDRESS];return Object(s.createElement)(A,null,Object(s.createElement)(m.StoreNoticesContainer,{context:S}),Object(s.createElement)(h.a,{id:"billing",type:"billing",onChange:y,values:r,fields:Object.keys(i),fieldConfig:w}),n&&Object(s.createElement)(O.a,{id:"billing-phone",errorId:"billing_phone",isRequired:o,value:r.phone,onChange:e=>{j(e),_("set-phone-number",{step:"billing"}),E&&(f(e),_("set-phone-number",{step:"shipping"}))}}))},f=n(300),E=n(1);const _=Object(E.__)("Billing address","woo-gutenberg-products-block"),k=Object(E.__)("Enter the billing address that matches your payment method.","woo-gutenberg-products-block"),C=Object(E.__)("Billing and shipping address","woo-gutenberg-products-block"),v=Object(E.__)("Enter the billing and shipping address that matches your payment method.","woo-gutenberg-products-block");var w={...Object(f.a)({defaultTitle:_,defaultDescription:k}),className:{type:"string",default:""},lock:{type:"object",default:{move:!0,remove:!0}}},y=n(156);t.default=Object(i.withFilteredAttributes)(w)((({title:e,description:t,showStepNumber:n,children:c,className:i})=>{const u=Object(a.useSelect)((e=>e(d.CHECKOUT_STORE_KEY).isProcessing())),{requireCompanyField:p,requirePhoneField:b,showApartmentField:h,showCompanyField:g,showPhoneField:m}=Object(y.b)(),{showBillingFields:O,forcedBillingAddress:f,useBillingAsShipping:E}=Object(l.a)();return O||E?(e=((e,t)=>t?e===_?C:e:e===C?_:e)(e,f),t=((e,t)=>t?e===k?v:e:e===v?k:e)(t,f),Object(s.createElement)(r.a,{id:"billing-fields",disabled:u,className:o()("wc-block-checkout__billing-fields",i),title:e,description:t,showStepNumber:n},Object(s.createElement)(j,{requireCompanyField:p,showApartmentField:h,showCompanyField:g,showPhoneField:m,requirePhoneField:b}),c)):null}))}}]);