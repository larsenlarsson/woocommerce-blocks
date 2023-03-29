(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[81],{100:function(e,t){},101:function(e,t){},107:function(e,t,c){"use strict";c.d(t,"c",(function(){return a})),c.d(t,"b",(function(){return s})),c.d(t,"a",(function(){return l})),c.d(t,"d",(function(){return u}));var n=c(24),r=c(71),o=c(144);const a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"filter_rating";const t=Object(r.d)(e);if(!t)return[];const c=Object(n.a)(t)?t.split(","):t;return c};function s(){return Math.floor(Math.random()*Date.now())}const l=e=>e.trim().replace(/\s/g,"-").replace(/_/g,"-").replace(/-+/g,"-").replace(/[^a-zA-Z0-9-]/g,""),u=e=>({showFilterButton:"true"===(null==e?void 0:e.showFilterButton),showCounts:"false"!==(null==e?void 0:e.showCounts),isPreview:!1,displayStyle:Object(n.a)(null==e?void 0:e.displayStyle)&&e.displayStyle||o.attributes.displayStyle.default,selectType:Object(n.a)(null==e?void 0:e.selectType)&&e.selectType||o.attributes.selectType.default})},113:function(e,t,c){"use strict";c.d(t,"a",(function(){return o}));var n=c(24),r=c(22);const o=e=>Object(n.a)(e)?JSON.parse(e)||{}:Object(r.a)(e)?e:{}},114:function(e,t){},115:function(e,t){},136:function(e,t,c){"use strict";c.d(t,"a",(function(){return b}));var n=c(0),r=c(96),o=c(5),a=c(30),s=c(22),l=c(32),u=c(60),i=c(26);const b=e=>{let{queryAttribute:t,queryPrices:c,queryStock:b,queryRating:d,queryState:O,productIds:j,isEditor:f=!1}=e,m=Object(i.a)();m+="-collection-data";const[g]=Object(l.a)(m),[p,_]=Object(l.b)("calculate_attribute_counts",[],m),[y,w]=Object(l.b)("calculate_price_range",null,m),[h,v]=Object(l.b)("calculate_stock_status_counts",null,m),[E,k]=Object(l.b)("calculate_rating_counts",null,m),S=Object(a.a)(t||{}),C=Object(a.a)(c),N=Object(a.a)(b),R=Object(a.a)(d);Object(n.useEffect)(()=>{"object"==typeof S&&Object.keys(S).length&&(p.find(e=>Object(s.b)(S,"taxonomy")&&e.taxonomy===S.taxonomy)||_([...p,S]))},[S,p,_]),Object(n.useEffect)(()=>{y!==C&&void 0!==C&&w(C)},[C,w,y]),Object(n.useEffect)(()=>{h!==N&&void 0!==N&&v(N)},[N,v,h]),Object(n.useEffect)(()=>{E!==R&&void 0!==R&&k(R)},[R,k,E]);const[x,T]=Object(n.useState)(f),[P]=Object(r.a)(x,200);x||T(!0);const L=Object(n.useMemo)(()=>(e=>{const t=e;return Array.isArray(e.calculate_attribute_counts)&&(t.calculate_attribute_counts=Object(o.sortBy)(e.calculate_attribute_counts.map(e=>{let{taxonomy:t,queryType:c}=e;return{taxonomy:t,query_type:c}}),["taxonomy","query_type"])),t})(g),[g]);return Object(u.a)({namespace:"/wc/store/v1",resourceName:"products/collection-data",query:{...O,page:void 0,per_page:void 0,orderby:void 0,order:void 0,...!Object(o.isEmpty)(j)&&{include:j},...L},shouldSelect:P})}},144:function(e){e.exports=JSON.parse('{"name":"woocommerce/rating-filter","version":"1.0.0","title":"Filter by Rating Controls","description":"Enable customers to filter the product grid by rating.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"html":false,"multiple":false,"color":true,"inserter":false,"lock":false},"attributes":{"className":{"type":"string","default":""},"showCounts":{"type":"boolean","default":true},"displayStyle":{"type":"string","default":"list"},"showFilterButton":{"type":"boolean","default":false},"selectType":{"type":"string","default":"multiple"},"isPreview":{"type":"boolean","default":false}},"textdomain":"woo-gutenberg-products-block","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}')},150:function(e,t,c){"use strict";c.d(t,"a",(function(){return a}));var n=c(64),r=c(22),o=c(113);const a=e=>{const t=Object(r.a)(e)?e:{},c=Object(o.a)(t.style);return Object(n.__experimentalUseBorderProps)({...t,style:c})}},160:function(e,t,c){"use strict";var n=c(0),r=c(1),o=c(31),a=c(74),s=c(152),l=c(6),u=c.n(l),i=e=>{let{className:t,rating:c,ratedProductsCount:o}=e;const a=u()("wc-block-components-product-rating",t),s={width:c/5*100+"%"},l=Object(r.sprintf)(
/* translators: %f is referring to the average rating value */
Object(r.__)("Rated %f out of 5","woo-gutenberg-products-block"),c),i={__html:Object(r.sprintf)(
/* translators: %s is the rating value wrapped in HTML strong tags. */
Object(r.__)("Rated %s out of 5","woo-gutenberg-products-block"),Object(r.sprintf)('<strong class="rating">%f</strong>',c))};return Object(n.createElement)("div",{className:a},Object(n.createElement)("div",{className:"wc-block-components-product-rating__stars",role:"img","aria-label":l},Object(n.createElement)("span",{style:s,dangerouslySetInnerHTML:i})),null!==o?Object(n.createElement)("span",{className:"wc-block-components-product-rating-count"},"(",o,")"):null)},b=c(150),d=c(30),O=c(62),j=c(32),f=c(136),m=c(2),g=c(73),p=c(22),_=c(14),y=c.n(_),w=c(92),h=c(69),v=c(68),E=c(91),k=c(15),S=c(71),C=c(5);const N=[{label:Object(n.createElement)(i,{className:"",key:5,rating:5,ratedProductsCount:5}),value:"5"},{label:Object(n.createElement)(i,{className:"",key:4,rating:4,ratedProductsCount:4}),value:"4"},{label:Object(n.createElement)(i,{className:"",key:3,rating:3,ratedProductsCount:3}),value:"3"},{label:Object(n.createElement)(i,{className:"",key:2,rating:2,ratedProductsCount:2}),value:"2"},{label:Object(n.createElement)(i,{className:"",key:1,rating:1,ratedProductsCount:1}),value:"1"}];c(225);var R=c(107),x=c(45);const T=e=>Object(r.sprintf)(
/* translators: %s is referring to the average rating value */
Object(r.__)("Rated %s out of 5 filter added.","woo-gutenberg-products-block"),e),P=e=>Object(r.sprintf)(
/* translators: %s is referring to the average rating value */
Object(r.__)("Rated %s out of 5 filter added.","woo-gutenberg-products-block"),e);t.a=e=>{let{attributes:t,isEditor:c,noRatingsNotice:l=null}=e;const _=Object(x.b)(),L=Object(m.getSettingWithCoercion)("is_rendering_php_template",!1,g.a),[F,A]=Object(n.useState)(!1),[q]=Object(j.a)(),{results:M,isLoading:Q}=Object(f.a)({queryRating:!0,queryState:q,isEditor:c}),[B,Y]=Object(n.useState)(t.isPreview?N:[]),I=!t.isPreview&&Q&&0===B.length,V=!t.isPreview&&Q,K=Object(n.useMemo)(()=>Object(R.c)("rating_filter"),[]),[U,W]=Object(n.useState)(K),[D,J]=Object(j.b)("rating",K),[z,H]=Object(n.useState)(Object(R.b)()),Z=Object(b.a)(t),[$,G]=Object(n.useState)(!1),X="single"!==t.selectType,ee=X?!I&&U.length<B.length:!I&&0===U.length,te=Object(n.useCallback)(e=>{c||(e&&!L&&J(e),(e=>{if(!window)return;if(0===e.length){const e=Object(k.removeQueryArgs)(window.location.href,"rating_filter");return void(e!==window.location.href&&Object(S.c)(e))}const t=Object(k.addQueryArgs)(window.location.href,{rating_filter:e.join(",")});t!==window.location.href&&Object(S.c)(t)})(e))},[c,J,L]);Object(n.useEffect)(()=>{t.showFilterButton||te(U)},[t.showFilterButton,U,te]);const ce=Object(n.useMemo)(()=>D,[D]),ne=Object(d.a)(ce),re=Object(O.a)(ne);Object(n.useEffect)(()=>{y()(re,ne)||y()(U,ne)||W(ne)},[U,ne,re]),Object(n.useEffect)(()=>{F||(J(K),A(!0))},[J,F,A,K]),Object(n.useEffect)(()=>{if(Q||t.isPreview)return;const e=!Q&&Object(p.b)(M,"rating_counts")&&Array.isArray(M.rating_counts)?[...M.rating_counts].reverse():[];if(c&&0===e.length)return Y(N),void G(!0);const r=e.filter(e=>Object(p.a)(e)&&Object.keys(e).length>0).map(e=>{var c;return{label:Object(n.createElement)(i,{key:null==e?void 0:e.rating,rating:null==e?void 0:e.rating,ratedProductsCount:t.showCounts?null==e?void 0:e.count:null}),value:null==e||null===(c=e.rating)||void 0===c?void 0:c.toString()}});Y(r),H(Object(R.b)())},[t.showCounts,t.isPreview,M,Q,D,c]);const oe=Object(n.useCallback)(e=>{const t=U.includes(e);if(!X){const c=t?[]:[e];return Object(o.speak)(t?P(e):T(e)),void W(c)}if(t){const t=U.filter(t=>t!==e);return Object(o.speak)(P(e)),void W(t)}const c=[...U,e].sort((e,t)=>Number(t)-Number(e));Object(o.speak)(T(e)),W(c)},[U,X]);return(Q||0!==B.length)&&Object(m.getSettingWithCoercion)("has_filterable_products",!1,g.a)?(_(!0),Object(n.createElement)(n.Fragment,null,$&&l,Object(n.createElement)("div",{className:u()("wc-block-rating-filter","style-"+t.displayStyle,{"is-loading":I})},"dropdown"===t.displayStyle?Object(n.createElement)(n.Fragment,null,Object(n.createElement)(E.a,{key:z,className:u()(Z.className,{"single-selection":!X,"is-loading":I}),style:{...Z.style,borderStyle:"none"},suggestions:B.filter(e=>!U.includes(e.value)).map(e=>e.value),disabled:I,placeholder:Object(r.__)("Select Rating","woo-gutenberg-products-block"),onChange:e=>{!X&&e.length>1&&(e=[e[e.length-1]]),e=e.map(e=>{const t=B.find(t=>t.value===e);return t?t.value:e});const t=Object(C.difference)(e,U);if(1===t.length)return oe(t[0]);const c=Object(C.difference)(U,e);1===c.length&&oe(c[0])},value:U,displayTransform:e=>{const t={value:e,label:Object(n.createElement)(i,{key:Number(e),rating:Number(e),ratedProductsCount:0})},c=B.find(t=>t.value===e)||t,{label:r,value:o}=c;return Object.assign({},r,{toLocaleLowerCase:()=>o,substring:(e,t)=>0===e&&1===t?r:""})},saveTransform:R.a,messages:{added:Object(r.__)("Rating filter added.","woo-gutenberg-products-block"),removed:Object(r.__)("Rating filter removed.","woo-gutenberg-products-block"),remove:Object(r.__)("Remove rating filter.","woo-gutenberg-products-block"),__experimentalInvalid:Object(r.__)("Invalid rating filter.","woo-gutenberg-products-block")}}),ee&&Object(n.createElement)(a.a,{icon:s.a,size:30})):Object(n.createElement)(w.a,{className:"wc-block-rating-filter-list",options:B,checked:U,onChange:e=>{oe(e.toString())},isLoading:I,isDisabled:V})),Object(n.createElement)("div",{className:"wc-block-rating-filter__actions"},(U.length>0||c)&&!I&&Object(n.createElement)(v.a,{onClick:()=>{W([]),J([]),te([])},screenReaderLabel:Object(r.__)("Reset rating filter","woo-gutenberg-products-block")}),t.showFilterButton&&Object(n.createElement)(h.a,{className:"wc-block-rating-filter__button",isLoading:I,disabled:I||V,onClick:()=>te(U)})))):(_(!1),null)}},22:function(e,t,c){"use strict";c.d(t,"a",(function(){return n})),c.d(t,"b",(function(){return r}));const n=e=>!(e=>null===e)(e)&&e instanceof Object&&e.constructor===Object;function r(e,t){return n(e)&&t in e}},225:function(e,t){},23:function(e,t,c){"use strict";var n=c(0),r=c(6),o=c.n(r);t.a=e=>{let t,{label:c,screenReaderLabel:r,wrapperElement:a,wrapperProps:s={}}=e;const l=null!=c,u=null!=r;return!l&&u?(t=a||"span",s={...s,className:o()(s.className,"screen-reader-text")},Object(n.createElement)(t,s,r)):(t=a||n.Fragment,l&&u&&c!==r?Object(n.createElement)(t,s,Object(n.createElement)("span",{"aria-hidden":"true"},c),Object(n.createElement)("span",{className:"screen-reader-text"},r)):Object(n.createElement)(t,s,c))}},24:function(e,t,c){"use strict";c.d(t,"a",(function(){return n}));const n=e=>"string"==typeof e},26:function(e,t,c){"use strict";c.d(t,"a",(function(){return o}));var n=c(0);const r=Object(n.createContext)("page"),o=()=>Object(n.useContext)(r);r.Provider},285:function(e,t,c){"use strict";c.d(t,"a",(function(){return a}));var n=c(64),r=c(22),o=c(113);const a=e=>{const t=Object(r.a)(e)?e:{},c=Object(o.a)(t.style);return Object(n.__experimentalUseColorProps)({...t,style:c})}},30:function(e,t,c){"use strict";c.d(t,"a",(function(){return a}));var n=c(0),r=c(14),o=c.n(r);function a(e){const t=Object(n.useRef)(e);return o()(e,t.current)||(t.current=e),t.current}},32:function(e,t,c){"use strict";c.d(t,"a",(function(){return b})),c.d(t,"b",(function(){return d})),c.d(t,"c",(function(){return O}));var n=c(3),r=c(7),o=c(0),a=c(14),s=c.n(a),l=c(30),u=c(62),i=c(26);const b=e=>{const t=Object(i.a)();e=e||t;const c=Object(r.useSelect)(t=>t(n.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0),[e]),{setValueForQueryContext:a}=Object(r.useDispatch)(n.QUERY_STATE_STORE_KEY);return[c,Object(o.useCallback)(t=>{a(e,t)},[e,a])]},d=(e,t,c)=>{const a=Object(i.a)();c=c||a;const s=Object(r.useSelect)(r=>r(n.QUERY_STATE_STORE_KEY).getValueForQueryKey(c,e,t),[c,e]),{setQueryValue:l}=Object(r.useDispatch)(n.QUERY_STATE_STORE_KEY);return[s,Object(o.useCallback)(t=>{l(c,e,t)},[c,e,l])]},O=(e,t)=>{const c=Object(i.a)();t=t||c;const[n,r]=b(t),a=Object(l.a)(n),d=Object(l.a)(e),O=Object(u.a)(d),j=Object(o.useRef)(!1);return Object(o.useEffect)(()=>{s()(O,d)||(r(Object.assign({},a,d)),j.current=!0)},[a,d,O,r]),j.current?[n,r]:[e,r]}},483:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(285),o=c(24),a=c(160),s=c(107);t.default=e=>{const t=Object(r.a)(e);return Object(n.createElement)("div",{className:Object(o.a)(e.className)?e.className:"",style:{...t.style}},Object(n.createElement)(a.a,{isEditor:!1,attributes:Object(s.d)(e)}))}},60:function(e,t,c){"use strict";c.d(t,"a",(function(){return s}));var n=c(3),r=c(7),o=c(0),a=c(30);const s=e=>{const{namespace:t,resourceName:c,resourceValues:s=[],query:l={},shouldSelect:u=!0}=e;if(!t||!c)throw new Error("The options object must have valid values for the namespace and the resource properties.");const i=Object(o.useRef)({results:[],isLoading:!0}),b=Object(a.a)(l),d=Object(a.a)(s),O=(()=>{const[,e]=Object(o.useState)();return Object(o.useCallback)(t=>{e(()=>{throw t})},[])})(),j=Object(r.useSelect)(e=>{if(!u)return null;const r=e(n.COLLECTIONS_STORE_KEY),o=[t,c,b,d],a=r.getCollectionError(...o);if(a){if(!(a instanceof Error))throw new Error("TypeError: `error` object is not an instance of Error constructor");O(a)}return{results:r.getCollection(...o),isLoading:!r.hasFinishedResolution("getCollection",o)}},[t,c,d,b,u]);return null!==j&&(i.current=j),i.current}},62:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));var n=c(0);function r(e,t){const c=Object(n.useRef)();return Object(n.useEffect)(()=>{c.current===e||t&&!t(e,c.current)||(c.current=e)},[e,t]),c.current}},68:function(e,t,c){"use strict";var n=c(0),r=c(1),o=c(6),a=c.n(o),s=c(23);c(100),t.a=e=>{let{className:t,label:
/* translators: Reset button text for filters. */
c=Object(r.__)("Reset","woo-gutenberg-products-block"),onClick:o,screenReaderLabel:l=Object(r.__)("Reset filter","woo-gutenberg-products-block")}=e;return Object(n.createElement)("button",{className:a()("wc-block-components-filter-reset-button",t),onClick:o},Object(n.createElement)(s.a,{label:c,screenReaderLabel:l}))}},69:function(e,t,c){"use strict";var n=c(0),r=c(1),o=c(6),a=c.n(o),s=c(23);c(101),t.a=e=>{let{className:t,isLoading:c,disabled:o,label:
/* translators: Submit button text for filters. */
l=Object(r.__)("Apply","woo-gutenberg-products-block"),onClick:u,screenReaderLabel:i=Object(r.__)("Apply filter","woo-gutenberg-products-block")}=e;return Object(n.createElement)("button",{type:"submit",className:a()("wp-block-button__link","wc-block-filter-submit-button","wc-block-components-filter-submit-button",{"is-loading":c},t),disabled:o,onClick:u},Object(n.createElement)(s.a,{label:l,screenReaderLabel:i}))}},71:function(e,t,c){"use strict";c.d(t,"b",(function(){return s})),c.d(t,"a",(function(){return l})),c.d(t,"d",(function(){return u})),c.d(t,"c",(function(){return i}));var n=c(15),r=c(2),o=c(73);const a=Object(r.getSettingWithCoercion)("is_rendering_php_template",!1,o.a),s="query_type_",l="filter_";function u(e){return window?Object(n.getQueryArg)(window.location.href,e):null}function i(e){a?window.location.href=e:window.history.replaceState({},"",e)}},73:function(e,t,c){"use strict";c.d(t,"a",(function(){return n}));const n=e=>"boolean"==typeof e},91:function(e,t,c){"use strict";var n=c(13),r=c.n(n),o=c(0),a=c(126),s=c(6),l=c.n(s);c(114),t.a=e=>{let{className:t,style:c,suggestions:n,multiple:s=!0,saveTransform:u=(e=>e.trim().replace(/\s/g,"-")),messages:i={},validateInput:b=(e=>n.includes(e)),label:d="",...O}=e;return Object(o.createElement)("div",{className:l()("wc-blocks-components-form-token-field-wrapper",t,{"single-selection":!s}),style:c},Object(o.createElement)(a.a,r()({label:d,__experimentalExpandOnFocus:!0,__experimentalShowHowTo:!1,__experimentalValidateInput:b,saveTransform:u,maxLength:s?void 0:1,suggestions:n,messages:i},O)))}},92:function(e,t,c){"use strict";var n=c(0),r=c(1),o=c(6),a=c.n(o),s=c(11);c(115),t.a=e=>{let{className:t,onChange:c,options:o=[],checked:l=[],isLoading:u=!1,isDisabled:i=!1,limit:b=10}=e;const[d,O]=Object(n.useState)(!1),j=Object(n.useMemo)(()=>[...Array(5)].map((e,t)=>Object(n.createElement)("li",{key:t,style:{width:Math.floor(75*Math.random())+25+"%"}})),[]),f=Object(n.useMemo)(()=>{const e=o.length-b;return!d&&Object(n.createElement)("li",{key:"show-more",className:"show-more"},Object(n.createElement)("button",{onClick:()=>{O(!0)},"aria-expanded":!1,"aria-label":Object(r.sprintf)(
/* translators: %s is referring the remaining count of options */
Object(r._n)("Show %s more option","Show %s more options",e,"woo-gutenberg-products-block"),e)},Object(r.sprintf)(
/* translators: %s number of options to reveal. */
Object(r._n)("Show %s more","Show %s more",e,"woo-gutenberg-products-block"),e)))},[o,b,d]),m=Object(n.useMemo)(()=>d&&Object(n.createElement)("li",{key:"show-less",className:"show-less"},Object(n.createElement)("button",{onClick:()=>{O(!1)},"aria-expanded":!0,"aria-label":Object(r.__)("Show less options","woo-gutenberg-products-block")},Object(r.__)("Show less","woo-gutenberg-products-block"))),[d]),g=Object(n.useMemo)(()=>{const e=o.length>b+5;return Object(n.createElement)(n.Fragment,null,o.map((t,r)=>Object(n.createElement)(n.Fragment,{key:t.value},Object(n.createElement)("li",e&&!d&&r>=b&&{hidden:!0},Object(n.createElement)(s.CheckboxControl,{id:t.value,className:"wc-block-checkbox-list__checkbox",label:t.label,checked:l.includes(t.value),onChange:()=>{c(t.value)},disabled:i})),e&&r===b-1&&f)),e&&m)},[o,c,l,d,b,m,f,i]),p=a()("wc-block-checkbox-list","wc-block-components-checkbox-list",{"is-loading":u},t);return Object(n.createElement)("ul",{className:p},u?j:g)}}}]);