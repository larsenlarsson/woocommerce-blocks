(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[50],{112:function(e,t,c){"use strict";var n=c(13),r=c.n(n),a=c(0),o=c(147),l=c(4),s=c.n(l);c(216);const i=e=>({thousandSeparator:null==e?void 0:e.thousandSeparator,decimalSeparator:null==e?void 0:e.decimalSeparator,fixedDecimalScale:!0,prefix:null==e?void 0:e.prefix,suffix:null==e?void 0:e.suffix,isNumericString:!0});t.a=e=>{var t;let{className:c,value:n,currency:l,onValueChange:u,displayType:p="text",...d}=e;const m="string"==typeof n?parseInt(n,10):n;if(!Number.isFinite(m))return null;const b=m/10**l.minorUnit;if(!Number.isFinite(b))return null;const O=s()("wc-block-formatted-money-amount","wc-block-components-formatted-money-amount",c),g=null!==(t=d.decimalScale)&&void 0!==t?t:null==l?void 0:l.minorUnit,j={...d,...i(l),decimalScale:g,value:void 0,currency:void 0,onValueChange:void 0},k=u?e=>{const t=+e.value*10**l.minorUnit;u(t)}:()=>{};return Object(a.createElement)(o.a,r()({className:O,displayType:p},j,{value:b,onValueChange:k}))}},19:function(e,t,c){"use strict";var n=c(0),r=c(4),a=c.n(r);t.a=e=>{let t,{label:c,screenReaderLabel:r,wrapperElement:o,wrapperProps:l={}}=e;const s=null!=c,i=null!=r;return!s&&i?(t=o||"span",l={...l,className:a()(l.className,"screen-reader-text")},Object(n.createElement)(t,l,r)):(t=o||n.Fragment,s&&i&&c!==r?Object(n.createElement)(t,l,Object(n.createElement)("span",{"aria-hidden":"true"},c),Object(n.createElement)("span",{className:"screen-reader-text"},r)):Object(n.createElement)(t,l,c))}},216:function(e,t){},283:function(e,t,c){"use strict";var n=c(0),r=c(4),a=c.n(r),o=c(285);t.a=e=>{let{checked:t,name:c,onChange:r,option:l}=e;const{value:s,label:i,description:u,secondaryLabel:p,secondaryDescription:d}=l;return Object(n.createElement)("label",{className:a()("wc-block-components-radio-control__option",{"wc-block-components-radio-control__option-checked":t}),htmlFor:`${c}-${s}`},Object(n.createElement)("input",{id:`${c}-${s}`,className:"wc-block-components-radio-control__input",type:"radio",name:c,value:s,onChange:e=>r(e.target.value),checked:t,"aria-describedby":a()({[`${c}-${s}__label`]:i,[`${c}-${s}__secondary-label`]:p,[`${c}-${s}__description`]:u,[`${c}-${s}__secondary-description`]:d})}),Object(n.createElement)(o.a,{id:`${c}-${s}`,label:i,secondaryLabel:p,description:u,secondaryDescription:d}))}},285:function(e,t,c){"use strict";var n=c(0);t.a=e=>{let{label:t,secondaryLabel:c,description:r,secondaryDescription:a,id:o}=e;return Object(n.createElement)("div",{className:"wc-block-components-radio-control__option-layout"},Object(n.createElement)("div",{className:"wc-block-components-radio-control__label-group"},t&&Object(n.createElement)("span",{id:o&&o+"__label",className:"wc-block-components-radio-control__label"},t),c&&Object(n.createElement)("span",{id:o&&o+"__secondary-label",className:"wc-block-components-radio-control__secondary-label"},c)),(r||a)&&Object(n.createElement)("div",{className:"wc-block-components-radio-control__description-group"},r&&Object(n.createElement)("span",{id:o&&o+"__description",className:"wc-block-components-radio-control__description"},r),a&&Object(n.createElement)("span",{id:o&&o+"__secondary-description",className:"wc-block-components-radio-control__secondary-description"},a)))}},287:function(e,t,c){"use strict";var n=c(13),r=c.n(n),a=c(0),o=c(4),l=c.n(o);c(288),t.a=e=>{let{children:t,className:c,headingLevel:n,...o}=e;const s=l()("wc-block-components-title",c),i="h"+n;return Object(a.createElement)(i,r()({className:s},o),t)}},288:function(e,t){},289:function(e,t){},290:function(e,t,c){"use strict";var n=c(1);t.a=e=>{let{defaultTitle:t=Object(n.__)("Step","woo-gutenberg-products-block"),defaultDescription:c=Object(n.__)("Step description text.","woo-gutenberg-products-block"),defaultShowStepNumber:r=!0}=e;return{title:{type:"string",default:t},description:{type:"string",default:c},showStepNumber:{type:"boolean",default:r}}}},293:function(e,t,c){"use strict";var n=c(0),r=c(4),a=c.n(r),o=c(10),l=c(283);c(296);const s=e=>{let{className:t="",id:c,selected:r="",onChange:i,options:u=[]}=e;const p=Object(o.useInstanceId)(s),d=c||p;return u.length?Object(n.createElement)("div",{className:a()("wc-block-components-radio-control",t)},u.map(e=>Object(n.createElement)(l.a,{key:`${d}-${e.value}`,name:"radio-control-"+d,checked:e.value===r,option:e,onChange:t=>{i(t),"function"==typeof e.onChange&&e.onChange(t)}}))):null};t.a=s},296:function(e,t){},308:function(e,t){},310:function(e,t,c){"use strict";var n=c(0),r=c(4),a=c.n(r),o=c(1),l=c(21),s=c(11),i=c(19),u=c(115),p=c(73),d=c(313),m=c.n(d);const b=["a","b","em","i","strong","p","br"],O=["target","href","rel","name","download"],g=(e,t)=>{const c=(null==t?void 0:t.tags)||b,n=(null==t?void 0:t.attr)||O;return m.a.sanitize(e,{ALLOWED_TAGS:c,ALLOWED_ATTR:n})};var j=c(53),k=c(293),f=c(285),_=c(41),v=c(112),h=c(2);const E=e=>{const t=Object(h.getSetting)("displayCartPricesIncludingTax",!1)?parseInt(e.price,10)+parseInt(e.taxes,10):parseInt(e.price,10);return{label:Object(l.decodeEntities)(e.name),value:e.rate_id,description:Object(n.createElement)(n.Fragment,null,Number.isFinite(t)&&Object(n.createElement)(v.a,{currency:Object(_.getCurrencyFromPriceResponse)(e),value:t}),Number.isFinite(t)&&e.delivery_time?" — ":null,Object(l.decodeEntities)(e.delivery_time))}};var w=e=>{let{className:t="",noResultsMessage:c,onSelectRate:r,rates:a,renderOption:o=E,selectedRate:l}=e;const s=(null==l?void 0:l.rate_id)||"",[i,u]=Object(n.useState)(s);if(Object(n.useEffect)(()=>{s&&u(s)},[s]),Object(n.useEffect)(()=>{!i&&a[0]&&(u(a[0].rate_id),r(a[0].rate_id))},[r,a,i]),0===a.length)return c;if(a.length>1)return Object(n.createElement)(k.a,{className:t,onChange:e=>{u(e),r(e)},selected:i,options:a.map(o)});const{label:p,secondaryLabel:d,description:m,secondaryDescription:b}=o(a[0]);return Object(n.createElement)(f.a,{label:p,secondaryLabel:d,description:m,secondaryDescription:b})};c(308),t.a=e=>{let{packageId:t,className:c="",noResultsMessage:r,renderOption:d,packageData:m,collapsible:b,showItems:O}=e;const{selectShippingRate:k}=Object(u.a)(),{dispatchCheckoutEvent:f}=Object(p.a)(),_=document.querySelectorAll(".wc-block-components-shipping-rates-control__package").length>1,v=null!=O?O:_,h=null!=b?b:_,E=Object(n.createElement)(n.Fragment,null,(h||v)&&Object(n.createElement)("div",{className:"wc-block-components-shipping-rates-control__package-title",dangerouslySetInnerHTML:{__html:g(m.name)}}),v&&Object(n.createElement)("ul",{className:"wc-block-components-shipping-rates-control__package-items"},Object.values(m.items).map(e=>{const t=Object(l.decodeEntities)(e.name),c=e.quantity;return Object(n.createElement)("li",{key:e.key,className:"wc-block-components-shipping-rates-control__package-item"},Object(n.createElement)(i.a,{label:c>1?`${t} × ${c}`:""+t,screenReaderLabel:Object(o.sprintf)(
/* translators: %1$s name of the product (ie: Sunglasses), %2$d number of units in the current cart package */
Object(o._n)("%1$s (%2$d unit)","%1$s (%2$d units)",c,"woo-gutenberg-products-block"),t,c)}))}))),y=Object(n.useCallback)(e=>{k(e,t),f("set-selected-shipping-rate",{shippingRateId:e})},[f,t,k]),N=Object(j.a)(y,1e3),S={className:c,noResultsMessage:r,rates:m.shipping_rates,onSelectRate:N,selectedRate:m.shipping_rates.find(e=>e.selected),renderOption:d};return h?Object(n.createElement)(s.Panel,{className:"wc-block-components-shipping-rates-control__package",initialOpen:!1,title:E},Object(n.createElement)(w,S)):Object(n.createElement)("div",{className:a()("wc-block-components-shipping-rates-control__package",c)},E,Object(n.createElement)(w,S))}},314:function(e,t,c){"use strict";var n=c(0),r=c(4),a=c.n(r),o=c(287);c(289);const l=e=>{let{title:t,stepHeadingContent:c}=e;return Object(n.createElement)("div",{className:"wc-block-components-checkout-step__heading"},Object(n.createElement)(o.a,{"aria-hidden":"true",className:"wc-block-components-checkout-step__title",headingLevel:"2"},t),!!c&&Object(n.createElement)("span",{className:"wc-block-components-checkout-step__heading-content"},c))};t.a=e=>{let{id:t,className:c,title:r,legend:o,description:s,children:i,disabled:u=!1,showStepNumber:p=!0,stepHeadingContent:d=(()=>{})}=e;const m=o||r?"fieldset":"div";return Object(n.createElement)(m,{className:a()(c,"wc-block-components-checkout-step",{"wc-block-components-checkout-step--with-step-number":p,"wc-block-components-checkout-step--disabled":u}),id:t,disabled:u},!(!o&&!r)&&Object(n.createElement)("legend",{className:"screen-reader-text"},o||r),!!r&&Object(n.createElement)(l,{title:r,stepHeadingContent:d()}),Object(n.createElement)("div",{className:"wc-block-components-checkout-step__container"},!!s&&Object(n.createElement)("p",{className:"wc-block-components-checkout-step__description"},s),Object(n.createElement)("div",{className:"wc-block-components-checkout-step__content"},i)))}},448:function(e,t){},501:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(4),a=c.n(r),o=c(144),l=c(314),s=c(5),i=c(3),u=c(57),p=c(1),d=c(115),m=c(43),b=c(41),O=c(112),g=c(21),j=c(2),k=c(79),f=c(12),_=Object(n.createElement)(f.SVG,{xmlns:"https://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(n.createElement)(f.Path,{d:"M12 9c-.8 0-1.5.7-1.5 1.5S11.2 12 12 12s1.5-.7 1.5-1.5S12.8 9 12 9zm0-5c-3.6 0-6.5 2.8-6.5 6.2 0 .8.3 1.8.9 3.1.5 1.1 1.2 2.3 2 3.6.7 1 3 3.8 3.2 3.9l.4.5.4-.5c.2-.2 2.6-2.9 3.2-3.9.8-1.2 1.5-2.5 2-3.6.6-1.3.9-2.3.9-3.1C18.5 6.8 15.6 4 12 4zm4.3 8.7c-.5 1-1.1 2.2-1.9 3.4-.5.7-1.7 2.2-2.4 3-.7-.8-1.9-2.3-2.4-3-.8-1.2-1.4-2.3-1.9-3.3-.6-1.4-.7-2.2-.7-2.5 0-2.6 2.2-4.7 5-4.7s5 2.1 5 4.7c0 .2-.1 1-.7 2.4z"})),v=c(246),h=c(11),E=c(293);const w=e=>{let{title:t,setSelectedOption:c,selectedOption:r,pickupLocations:a,onSelectRate:o,renderPickupLocation:l,packageCount:s}=e;const i=document.querySelectorAll(".wc-block-components-local-pickup-select .wc-block-components-radio-control").length>1;return Object(n.createElement)("div",{className:"wc-block-components-local-pickup-select"},!(!i||!t)&&Object(n.createElement)("div",null,t),Object(n.createElement)(E.a,{onChange:e=>{c(e),o(e)},selected:r,options:a.map(e=>l(e,s))}))};c(448);var y=c(310);const N=(e,t)=>{const c=Object(j.getSetting)("displayCartPricesIncludingTax",!1)?parseInt(e.price,10)+parseInt(e.taxes,10):e.price,r=(e=>{if(null!=e&&e.meta_data){const t=e.meta_data.find(e=>"pickup_location"===e.key);return t?t.value:""}return""})(e),a=(e=>{if(null!=e&&e.meta_data){const t=e.meta_data.find(e=>"pickup_address"===e.key);return t?t.value:""}return""})(e),o=(e=>{if(null!=e&&e.meta_data){const t=e.meta_data.find(e=>"pickup_details"===e.key);return t?t.value:""}return""})(e);let l=Object(n.createElement)("em",null,Object(p.__)("free","woo-gutenberg-products-block"));return parseInt(c,10)>0&&(l=1===t?Object(n.createElement)(O.a,{currency:Object(b.getCurrencyFromPriceResponse)(e),value:c}):Object(n.createInterpolateElement)(
/* translators: <price/> is the price of the package, <packageCount/> is the number of packages. These must appear in the translated string. */
Object(p._n)("<price/> x <packageCount/> package","<price/> x <packageCount/> packages",t,"woo-gutenberg-products-block"),{price:Object(n.createElement)(O.a,{currency:Object(b.getCurrencyFromPriceResponse)(e),value:c}),packageCount:Object(n.createElement)(n.Fragment,null,t)})),{value:e.rate_id,label:r?Object(g.decodeEntities)(r):Object(g.decodeEntities)(e.name),secondaryLabel:l,description:Object(g.decodeEntities)(o),secondaryDescription:a?Object(n.createElement)(n.Fragment,null,Object(n.createElement)(k.a,{icon:_,className:"wc-block-editor-components-block-icon"}),Object(g.decodeEntities)(a)):void 0}};var S=()=>{var e;const{shippingRates:t,selectShippingRate:c}=Object(d.a)(),r=((null===(e=t[0])||void 0===e?void 0:e.shipping_rates)||[]).filter(v.d),[a,o]=Object(n.useState)(()=>{var e;return(null===(e=r.find(e=>e.selected))||void 0===e?void 0:e.rate_id)||""}),l=Object(n.useCallback)(e=>{c(e)},[c]),{extensions:s,receiveCart:i,...u}=Object(m.a)(),p={extensions:s,cart:u,components:{ShippingRatesControlPackage:y.a,LocalPickupSelect:w},renderPickupLocation:N};Object(n.useEffect)(()=>{!a&&r[0]&&(o(r[0].rate_id),l(r[0].rate_id))},[l,r,a]);const b=Object(v.a)(t);return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(h.ExperimentalOrderLocalPickupPackages.Slot,p),Object(n.createElement)(h.ExperimentalOrderLocalPickupPackages,null,Object(n.createElement)(w,{title:t[0].name,setSelectedOption:o,onSelectRate:l,selectedOption:a,renderPickupLocation:N,pickupLocations:r,packageCount:b})))},C=c(290),R={...Object(C.a)({defaultTitle:Object(p.__)("Pickup options","woo-gutenberg-products-block"),defaultDescription:""}),className:{type:"string",default:""},lock:{type:"object",default:{move:!0,remove:!0}}};t.default=Object(o.withFilteredAttributes)(R)(e=>{let{title:t,description:c,showStepNumber:r,children:o,className:p}=e;const{checkoutIsProcessing:d,prefersCollection:m}=Object(s.useSelect)(e=>{const t=e(i.CHECKOUT_STORE_KEY);return{checkoutIsProcessing:t.isProcessing(),prefersCollection:t.prefersCollection()}});return m&&u.e?Object(n.createElement)(l.a,{id:"pickup-options",disabled:d,className:a()("wc-block-checkout__pickup-options",p),title:t,description:c,showStepNumber:r},Object(n.createElement)(S,null),o):null})},53:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));var n=c(8);function r(e,t,c){var r=this,a=Object(n.useRef)(null),o=Object(n.useRef)(0),l=Object(n.useRef)(null),s=Object(n.useRef)([]),i=Object(n.useRef)(),u=Object(n.useRef)(),p=Object(n.useRef)(e),d=Object(n.useRef)(!0);p.current=e;var m=!t&&0!==t&&"undefined"!=typeof window;if("function"!=typeof e)throw new TypeError("Expected a function");t=+t||0;var b=!!(c=c||{}).leading,O=!("trailing"in c)||!!c.trailing,g="maxWait"in c,j=g?Math.max(+c.maxWait||0,t):null;return Object(n.useEffect)((function(){return d.current=!0,function(){d.current=!1}}),[]),Object(n.useMemo)((function(){var e=function(e){var t=s.current,c=i.current;return s.current=i.current=null,o.current=e,u.current=p.current.apply(c,t)},c=function(e,t){m&&cancelAnimationFrame(l.current),l.current=m?requestAnimationFrame(e):setTimeout(e,t)},n=function(e){if(!d.current)return!1;var c=e-a.current,n=e-o.current;return!a.current||c>=t||c<0||g&&n>=j},k=function(t){return l.current=null,O&&s.current?e(t):(s.current=i.current=null,u.current)},f=function(){var e=Date.now();if(n(e))return k(e);if(d.current){var r=e-a.current,l=e-o.current,s=t-r,i=g?Math.min(s,j-l):s;c(f,i)}},_=function(){for(var p=[],m=0;m<arguments.length;m++)p[m]=arguments[m];var O=Date.now(),j=n(O);if(s.current=p,i.current=r,a.current=O,j){if(!l.current&&d.current)return o.current=a.current,c(f,t),b?e(a.current):u.current;if(g)return c(f,t),e(a.current)}return l.current||c(f,t),u.current};return _.cancel=function(){l.current&&(m?cancelAnimationFrame(l.current):clearTimeout(l.current)),o.current=0,s.current=a.current=i.current=l.current=null},_.isPending=function(){return!!l.current},_.flush=function(){return l.current?k(Date.now()):u.current},_}),[b,g,t,j,O,m])}}}]);