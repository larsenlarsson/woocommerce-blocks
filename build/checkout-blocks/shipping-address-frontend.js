(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[51],{505:function(e,t,i){"use strict";i.r(t);var s=i(0),n=i(6),o=i.n(n),c=i(133),l=i(309),r=i(400),d=i(7),a=i(3),p=i(1),h=i(406),u=i(72),b=i(44),g=i(46),m=i(11),w=i(404),O=i(405),j=e=>{let{showCompanyField:t=!1,showApartmentField:i=!1,showPhoneField:n=!1,requireCompanyField:o=!1,requirePhoneField:c=!1}=e;const{defaultAddressFields:l,setShippingAddress:d,setBillingAddress:a,shippingAddress:j,setShippingPhone:F,useShippingAsBilling:S,setUseShippingAsBilling:E}=Object(r.a)(),{dispatchCheckoutEvent:f}=Object(u.a)(),{isEditor:_}=Object(b.a)(),[k,C]=Object(s.useState)(!1);Object(s.useEffect)(()=>{n||F("")},[n,F]),Object(s.useEffect)(()=>{k||(S&&a(j),C(!0))},[k,a,j,S]);const y=Object(s.useMemo)(()=>({company:{hidden:!t,required:o},address_2:{hidden:!i}}),[t,o,i]),A=_?w.a:s.Fragment,P=S?[g.d.SHIPPING_ADDRESS,g.d.BILLING_ADDRESS]:[g.d.SHIPPING_ADDRESS];return Object(s.createElement)(s.Fragment,null,Object(s.createElement)(A,null,Object(s.createElement)(m.StoreNoticesContainer,{context:P}),Object(s.createElement)(h.a,{id:"shipping",type:"shipping",onChange:e=>{d(e),S&&a(e),f("set-shipping-address")},values:j,fields:Object.keys(l),fieldConfig:y}),n&&Object(s.createElement)(O.a,{id:"shipping-phone",errorId:"shipping_phone",isRequired:c,value:j.phone,onChange:e=>{F(e),f("set-phone-number",{step:"shipping"})}})),Object(s.createElement)(m.CheckboxControl,{className:"wc-block-checkout__use-address-for-billing",label:Object(p.__)("Use same address for billing","woo-gutenberg-products-block"),checked:S,onChange:e=>{E(e),e&&a(j)}}))},F=i(287),S={...Object(F.a)({defaultTitle:Object(p.__)("Shipping address","woo-gutenberg-products-block"),defaultDescription:Object(p.__)("Enter the address where you want your order delivered.","woo-gutenberg-products-block")}),className:{type:"string",default:""},lock:{type:"object",default:{move:!0,remove:!0}}},E=i(153);t.default=Object(c.withFilteredAttributes)(S)(e=>{let{title:t,description:i,showStepNumber:n,children:c,className:p}=e;const h=Object(d.useSelect)(e=>e(a.CHECKOUT_STORE_KEY).isProcessing()),{showShippingFields:u}=Object(r.a)(),{requireCompanyField:b,requirePhoneField:g,showApartmentField:m,showCompanyField:w,showPhoneField:O}=Object(E.b)();return u?Object(s.createElement)(l.a,{id:"shipping-fields",disabled:h,className:o()("wc-block-checkout__shipping-fields",p),title:t,description:i,showStepNumber:n},Object(s.createElement)(j,{requireCompanyField:b,requirePhoneField:g,showApartmentField:m,showCompanyField:w,showPhoneField:O}),c):null})}}]);