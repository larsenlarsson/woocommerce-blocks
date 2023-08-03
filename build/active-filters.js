this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["active-filters"]=function(e){function t(t){for(var c,l,a=t[0],i=t[1],s=t[2],b=0,p=[];b<a.length;b++)l=a[b],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&p.push(n[l][0]),n[l]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);for(u&&u(t);p.length;)p.shift()();return o.push.apply(o,s||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],c=!0,a=1;a<r.length;a++){var i=r[a];0!==n[i]&&(c=!1)}c&&(o.splice(t--,1),e=l(l.s=r[0]))}return e}var c={},n={4:0,1:0},o=[];function l(t){if(c[t])return c[t].exports;var r=c[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=c,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)l.d(r,c,function(t){return e[t]}.bind(null,c));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var a=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var u=i;return o.push([396,0]),r()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},10:function(e,t){e.exports=window.wp.primitives},101:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var c=r(0);function n(e,t){const r=Object(c.useRef)();return Object(c.useEffect)(()=>{r.current===e||t&&!t(e,r.current)||(r.current=e)},[e,t]),r.current}},11:function(e,t){e.exports=window.wp.compose},112:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));const c=e=>"string"==typeof e},114:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var c=r(0);const n=Object(c.createContext)({}),o=()=>{const{wrapper:e}=Object(c.useContext)(n);return t=>{e&&e.current&&(e.current.hidden=!t)}}},119:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var c=r(9),n=r(7),o=r(0),l=r(47);const a=e=>{const{namespace:t,resourceName:r,resourceValues:a=[],query:i={},shouldSelect:s=!0}=e;if(!t||!r)throw new Error("The options object must have valid values for the namespace and the resource properties.");const u=Object(o.useRef)({results:[],isLoading:!0}),b=Object(l.a)(i),p=Object(l.a)(a),d=(()=>{const[,e]=Object(o.useState)();return Object(o.useCallback)(t=>{e(()=>{throw t})},[])})(),m=Object(n.useSelect)(e=>{if(!s)return null;const n=e(c.COLLECTIONS_STORE_KEY),o=[t,r,b,p],l=n.getCollectionError(...o);if(l){if(!(l instanceof Error))throw new Error("TypeError: `error` object is not an instance of Error constructor");d(l)}return{results:n.getCollection(...o),isLoading:!n.hasFinishedResolution("getCollection",o)}},[t,r,p,b,s]);return null!==m&&(u.current=m),u.current}},134:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var c=r(0),n=r(1),o=r(8),l=r(7),a=r(2),i=r(5);const s=e=>{let{clientId:t,setAttributes:r,filterType:s,attributes:u}=e;const{replaceBlock:b}=Object(l.useDispatch)("core/block-editor"),{heading:p,headingLevel:d}=u;if(Object(l.useSelect)(e=>{const{getBlockParentsByBlockName:r}=e("core/block-editor");return r(t,"woocommerce/filter-wrapper").length>0},[t])||!s)return null;const m=[Object(c.createElement)(a.Button,{key:"convert",onClick:()=>{const e=[Object(o.createBlock)("woocommerce/"+s,{...u,heading:""})];p&&""!==p&&e.unshift(Object(o.createBlock)("core/heading",{content:p,level:null!=d?d:2})),b(t,Object(o.createBlock)("woocommerce/filter-wrapper",{heading:p,filterType:s},[...e])),r({heading:"",lock:{remove:!0}})},variant:"primary"},Object(n.__)("Upgrade block","woo-gutenberg-products-block"))];return Object(c.createElement)(i.Warning,{actions:m},Object(n.__)("Filter block: We have improved this block to make styling easier. Upgrade it using the button below.","woo-gutenberg-products-block"))}},135:function(e,t,r){"use strict";var c=r(0),n=r(5),o=r(11),l=r(1);r(188),t.a=Object(o.withInstanceId)(e=>{let{className:t,headingLevel:r,onChange:o,heading:a,instanceId:i}=e;const s="h"+r;return Object(c.createElement)(s,{className:t},Object(c.createElement)("label",{className:"screen-reader-text",htmlFor:"block-title-"+i},Object(l.__)("Block title","woo-gutenberg-products-block")),Object(c.createElement)(n.PlainText,{id:"block-title-"+i,className:"wc-block-editor-components-title",value:a,onChange:o,style:{backgroundColor:"transparent"}}))})},136:function(e,t,r){"use strict";var c=r(0);r(189),t.a=e=>{let{children:t}=e;return Object(c.createElement)("div",{className:"wc-block-filter-title-placeholder"},t)}},141:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return o})),r.d(t,"a",(function(){return a}));var c=r(21);const n=e=>Object(c.c)(e,"count")&&Object(c.c)(e,"description")&&Object(c.c)(e,"id")&&Object(c.c)(e,"name")&&Object(c.c)(e,"parent")&&Object(c.c)(e,"slug")&&"number"==typeof e.count&&"string"==typeof e.description&&"number"==typeof e.id&&"string"==typeof e.name&&"number"==typeof e.parent&&"string"==typeof e.slug,o=e=>Array.isArray(e)&&e.every(n),l=e=>Object(c.c)(e,"attribute")&&Object(c.c)(e,"operator")&&Object(c.c)(e,"slug")&&"string"==typeof e.attribute&&"string"==typeof e.operator&&Array.isArray(e.slug)&&e.slug.every(e=>"string"==typeof e),a=e=>Array.isArray(e)&&e.every(l)},15:function(e,t){e.exports=window.wp.url},155:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return s})),r.d(t,"d",(function(){return u}));var c=r(3),n=r(141),o=r(7);const l=Object(c.getSetting)("attributes",[]).reduce((e,t)=>{const r=(c=t)&&c.attribute_name?{id:parseInt(c.attribute_id,10),name:c.attribute_name,taxonomy:"pa_"+c.attribute_name,label:c.attribute_label}:null;var c;return r&&r.id&&e.push(r),e},[]),a=e=>{const{count:t,id:r,name:c,parent:o}=e;return{count:t,id:r,name:c,parent:o,breadcrumbs:[],children:[],value:Object(n.b)(e)?e.attr_slug:""}},i=e=>{if(e)return l.find(t=>t.id===e)},s=e=>{if(e)return l.find(t=>t.taxonomy===e)},u=(e,t,r,c)=>{const n=Object(o.select)("core/block-editor"),l=Object(o.dispatch)("core/block-editor"),a=n.getBlockParents(e);let i="";a.forEach(e=>{const t=n.getBlock(e).innerBlocks.find(e=>e.name===c);t&&(i=t.clientId)}),l.updateBlockAttributes(i,{[t]:r})}},16:function(e,t){e.exports=window.wp.htmlEntities},179:function(e){e.exports=JSON.parse('{"name":"woocommerce/active-filters","version":"1.0.0","title":"Active Filters Controls","description":"Display the currently active filters.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"html":false,"multiple":false,"inserter":false,"color":{"text":true,"background":false},"lock":false},"attributes":{"displayStyle":{"type":"string","default":"list"},"headingLevel":{"type":"number","default":3}},"textdomain":"woo-gutenberg-products-block","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}')},188:function(e,t){},189:function(e,t){},2:function(e,t){e.exports=window.wp.components},204:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return o}));var c=r(103);const n=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";const o=e.filter(e=>e.attribute===r.taxonomy),l=o.length?o[0]:null;if(!(l&&l.slug&&Array.isArray(l.slug)&&l.slug.includes(n)))return;const a=l.slug.filter(e=>e!==n),i=e.filter(e=>e.attribute!==r.taxonomy);a.length>0&&(l.slug=a.sort(),i.push(l)),t(Object(c.a)(i).asc("attribute"))},o=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"in";if(!r||!r.taxonomy)return[];const l=e.filter(e=>e.attribute!==r.taxonomy);return 0===n.length?t(l):(l.push({attribute:r.taxonomy,operator:o,slug:n.map(e=>{let{slug:t}=e;return t}).sort()}),t(Object(c.a)(l).asc("attribute"))),l}},21:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return o})),r.d(t,"a",(function(){return l}));var c=r(42);const n=e=>!Object(c.a)(e)&&e instanceof Object&&e.constructor===Object;function o(e,t){return n(e)&&t in e}const l=e=>0===Object.keys(e).length},215:function(e,t){},23:function(e,t){e.exports=window.wc.priceFormat},25:function(e,t){e.exports=window.wp.isShallowEqual},257:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return i})),r.d(t,"d",(function(){return s})),r.d(t,"c",(function(){return u})),r.d(t,"e",(function(){return b}));var c=r(15),n=r(3),o=r(91);const l=Object(n.getSettingWithCoercion)("is_rendering_php_template",!1,o.a),a="query_type_",i="filter_";function s(e){return window?Object(c.getQueryArg)(window.location.href,e):null}function u(e){l?window.location.href=e:window.history.replaceState({},"",e)}const b=e=>{const t=Object(c.getQueryArgs)(e);return Object(c.addQueryArgs)(e,t)}},270:function(e,t,r){"use strict";var c=r(6),n=r.n(c),o=r(0),l=r(4),a=r.n(l),i=r(1),s=r(76),u=r(592);r(215);var b=e=>{let{text:t,screenReaderText:r="",element:c="li",className:l="",radius:i="small",children:s=null,...u}=e;const b=c,p=a()(l,"wc-block-components-chip","wc-block-components-chip--radius-"+i),d=Boolean(r&&r!==t);return Object(o.createElement)(b,n()({className:p},u),Object(o.createElement)("span",{"aria-hidden":d,className:"wc-block-components-chip__text"},t),d&&Object(o.createElement)("span",{className:"screen-reader-text"},r),s)};t.a=e=>{let{ariaLabel:t="",className:r="",disabled:c=!1,onRemove:l=(()=>{}),removeOnAnyClick:p=!1,text:d,screenReaderText:m="",...f}=e;const g=p?"span":"button";if(!t){const e=m&&"string"==typeof m?m:d;t="string"!=typeof e?
/* translators: Remove chip. */
Object(i.__)("Remove","woo-gutenberg-products-block"):Object(i.sprintf)(
/* translators: %s text of the chip to remove. */
Object(i.__)('Remove "%s"',"woo-gutenberg-products-block"),e)}const O={"aria-label":t,disabled:c,onClick:l,onKeyDown:e=>{"Backspace"!==e.key&&"Delete"!==e.key||l()}},j=p?O:{},y=p?{"aria-hidden":!0}:O;return Object(o.createElement)(b,n()({},f,j,{className:a()(r,"is-removable"),element:p?"button":f.element,screenReaderText:m,text:d}),Object(o.createElement)(g,n()({className:"wc-block-components-chip__remove"},y),Object(o.createElement)(s.a,{className:"wc-block-components-chip__remove-icon",icon:u.a,size:16})))}},3:function(e,t){e.exports=window.wc.wcSettings},30:function(e,t,r){"use strict";var c=r(0),n=r(4),o=r.n(n);t.a=e=>{let t,{label:r,screenReaderLabel:n,wrapperElement:l,wrapperProps:a={}}=e;const i=null!=r,s=null!=n;return!i&&s?(t=l||"span",a={...a,className:o()(a.className,"screen-reader-text")},Object(c.createElement)(t,a,n)):(t=l||c.Fragment,i&&s&&r!==n?Object(c.createElement)(t,a,Object(c.createElement)("span",{"aria-hidden":"true"},r),Object(c.createElement)("span",{className:"screen-reader-text"},n)):Object(c.createElement)(t,a,r))}},396:function(e,t,r){e.exports=r(542)},397:function(e,t,r){"use strict";var c=r(0),n=r(10);const o=Object(c.createElement)(n.SVG,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24"},Object(c.createElement)("path",{fill:"none",d:"M0 0h24v24H0z"}),Object(c.createElement)("path",{d:"M17 6H7c-3.31 0-6 2.69-6 6s2.69 6 6 6h10c3.31 0 6-2.69 6-6s-2.69-6-6-6zm0 10H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h10c2.21 0 4 1.79 4 4s-1.79 4-4 4zm0-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}));t.a=o},398:function(e,t){},399:function(e,t){},42:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));const c=e=>null===e},47:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var c=r(0),n=r(25),o=r.n(n);function l(e){const t=Object(c.useRef)(e);return o()(e,t.current)||(t.current=e),t.current}},5:function(e,t){e.exports=window.wp.blockEditor},50:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var c=r(0);const n=Object(c.createContext)("page"),o=()=>Object(c.useContext)(n);n.Provider},542:function(e,t,r){"use strict";r.r(t);var c=r(0),n=r(8),o=r(397),l=r(76),a=r(4),i=r.n(a),s=r(5),u=r(1),b=r(135),p=r(2),d=r(61),m=r(3),f=r(30),g=r(91),O=r(21),j=r(141),y=r(257),w=r(136);r(399);var _=r(155),h=r(23),v=r(270),k=r(15),E=r(592),S=(r(112),r(179));const x=(e,t)=>Number.isFinite(e)&&Number.isFinite(t)?Object(u.sprintf)(
/* translators: %1$s min price, %2$s max price */
Object(u.__)("Between %1$s and %2$s","woo-gutenberg-products-block"),Object(h.formatPrice)(e),Object(h.formatPrice)(t)):Number.isFinite(e)?Object(u.sprintf)(
/* translators: %s min price */
Object(u.__)("From %s","woo-gutenberg-products-block"),Object(h.formatPrice)(e)):Object(u.sprintf)(
/* translators: %s max price */
Object(u.__)("Up to %s","woo-gutenberg-products-block"),Object(h.formatPrice)(t)),N=e=>{let{type:t,name:r,prefix:n="",removeCallback:o=(()=>null),showLabel:a=!0,displayStyle:i}=e;const s=n?Object(c.createElement)(c.Fragment,null,n," ",r):r,b=Object(u.sprintf)(
/* translators: %s attribute value used in the filter. For example: yellow, green, small, large. */
Object(u.__)("Remove %s filter","woo-gutenberg-products-block"),r);return Object(c.createElement)("li",{className:"wc-block-active-filters__list-item",key:t+":"+r},a&&Object(c.createElement)("span",{className:"wc-block-active-filters__list-item-type"},t+": "),"chips"===i?Object(c.createElement)(v.a,{element:"span",text:s,onRemove:o,radius:"large",ariaLabel:b}):Object(c.createElement)("span",{className:"wc-block-active-filters__list-item-name"},Object(c.createElement)("button",{className:"wc-block-active-filters__list-item-remove",onClick:o},Object(c.createElement)(l.a,{className:"wc-block-components-chip__remove-icon",icon:E.a,size:16}),Object(c.createElement)(f.a,{screenReaderLabel:b})),s))},C=function(){if(!window)return;const e=window.location.href,t=Object(k.getQueryArgs)(e),r=Object(k.removeQueryArgs)(e,...Object.keys(t));for(var c=arguments.length,n=new Array(c),o=0;o<c;o++)n[o]=arguments[o];n.forEach(e=>{if("string"==typeof e)return delete t[e];if("object"==typeof e){const r=Object.keys(e)[0],c=t[r].toString().split(",");t[r]=c.filter(t=>t!==e[r]).join(",")}});const l=Object.fromEntries(Object.entries(t).filter(e=>{let[,t]=e;return t})),a=Object(k.addQueryArgs)(r,l);Object(y.c)(a)},A=["min_price","max_price","rating_filter","filter_","query_type_"],T=e=>{let t=!1;for(let r=0;A.length>r;r++){const c=A[r];if(c===e.substring(0,c.length)){t=!0;break}}return t};var R=r(119),L=r(16),B=r(204),F=e=>{let{attributeObject:t,slugs:r=[],operator:n="in",displayStyle:o,isLoadingCallback:l}=e;const{results:a,isLoading:i}=Object(R.a)({namespace:"/wc/store/v1",resourceName:"products/attributes/terms",resourceValues:[t.id]}),[s,b]=Object(d.b)("attributes",[]);if(Object(c.useEffect)(()=>{l(i)},[i,l]),!Array.isArray(a)||!Object(j.c)(a)||!Object(j.a)(s))return null;const p=t.label,f=Object(m.getSettingWithCoercion)("is_rendering_php_template",!1,g.a);return Object(c.createElement)("li",null,Object(c.createElement)("span",{className:"wc-block-active-filters__list-item-type"},p,":"),Object(c.createElement)("ul",null,r.map((e,r)=>{const l=a.find(t=>t.slug===e);if(!l)return null;let d="";return r>0&&"and"===n&&(d=Object(c.createElement)("span",{className:"wc-block-active-filters__list-item-operator"},Object(u.__)("All","woo-gutenberg-products-block"))),N({type:p,name:Object(L.decodeEntities)(l.name||e),prefix:d,isLoading:i,removeCallback:()=>{const r=s.find(e=>{let{attribute:r}=e;return r==="pa_"+t.name});1===(null==r?void 0:r.slug.length)?C("query_type_"+t.name,"filter_"+t.name):C({["filter_"+t.name]:e}),f||Object(B.a)(s,b,t,e)},showLabel:!1,displayStyle:o})})))},P=e=>{let{displayStyle:t,isLoading:r}=e;return r?Object(c.createElement)(c.Fragment,null,[...Array("list"===t?2:3)].map((e,r)=>Object(c.createElement)("li",{className:"list"===t?"show-loading-state-list":"show-loading-state-chips",key:r},Object(c.createElement)("span",{className:"show-loading-state__inner"})))):null},Q=r(114),M=e=>{let{attributes:t,isEditor:r=!1}=e;const n=Object(Q.a)(),o=function(){const e=Object(c.useRef)(!1);return Object(c.useEffect)(()=>(e.current=!0,()=>{e.current=!1}),[]),Object(c.useCallback)(()=>e.current,[])}()(),l=Object(m.getSettingWithCoercion)("is_rendering_php_template",!1,g.a),[a,s]=Object(c.useState)(!0),b=(()=>{if(!window)return!1;const e=window.location.href,t=Object(k.getQueryArgs)(e),r=Object.keys(t);let c=!1;for(let e=0;r.length>e;e++){const t=r[e];if(T(t)){c=!0;break}}return c})()&&!r&&a,[p,h]=Object(d.b)("attributes",[]),[v,E]=Object(d.b)("stock_status",[]),[S,A]=Object(d.b)("min_price"),[R,L]=Object(d.b)("max_price"),[B,M]=Object(d.b)("rating"),D=Object(m.getSetting)("stockStatusOptions",[]),I=Object(m.getSetting)("attributes",[]),V=Object(c.useMemo)(()=>{if(b||0===v.length||(e=v,!Array.isArray(e)||!e.every(e=>["instock","outofstock","onbackorder"].includes(e)))||!(e=>Object(O.b)(e)&&Object.keys(e).every(e=>["instock","outofstock","onbackorder"].includes(e)))(D))return null;var e;const r=Object(u.__)("Stock Status","woo-gutenberg-products-block");return Object(c.createElement)("li",null,Object(c.createElement)("span",{className:"wc-block-active-filters__list-item-type"},r,":"),Object(c.createElement)("ul",null,v.map(e=>N({type:r,name:D[e],removeCallback:()=>{if(C({filter_stock_status:e}),!l){const t=v.filter(t=>t!==e);E(t)}},showLabel:!1,displayStyle:t.displayStyle}))))},[b,D,v,E,t.displayStyle,l]),W=Object(c.useMemo)(()=>b||!Number.isFinite(S)&&!Number.isFinite(R)?null:N({type:Object(u.__)("Price","woo-gutenberg-products-block"),name:x(S,R),removeCallback:()=>{C("max_price","min_price"),l||(A(void 0),L(void 0))},displayStyle:t.displayStyle}),[b,S,R,t.displayStyle,A,L,l]),Y=Object(c.useMemo)(()=>!Object(j.a)(p)&&o||!p.length&&!(e=>{if(!window)return!1;const t=e.map(e=>"filter_"+e.attribute_name),r=window.location.href,c=Object(k.getQueryArgs)(r),n=Object.keys(c);let o=!1;for(let e=0;n.length>e;e++){const r=n[e];if(t.includes(r)){o=!0;break}}return o})(I)?(a&&s(!1),null):p.map(e=>{const r=Object(_.c)(e.attribute);return r?Object(c.createElement)(F,{attributeObject:r,displayStyle:t.displayStyle,slugs:e.slug,key:e.attribute,operator:e.operator,isLoadingCallback:s}):(a&&s(!1),null)}),[p,o,I,a,t.displayStyle]);Object(c.useEffect)(()=>{var e;if(!l)return;if(B.length&&B.length>0)return;const t=null===(e=Object(y.d)("rating_filter"))||void 0===e?void 0:e.toString();t&&M(t.split(","))},[l,B,M]);const z=Object(c.useMemo)(()=>{if(b||0===B.length||(e=B,!Array.isArray(e)||!e.every(e=>["1","2","3","4","5"].includes(e))))return null;var e;const r=Object(u.__)("Rating","woo-gutenberg-products-block");return Object(c.createElement)("li",null,Object(c.createElement)("span",{className:"wc-block-active-filters__list-item-type"},r,":"),Object(c.createElement)("ul",null,B.map(e=>N({type:r,name:Object(u.sprintf)(
/* translators: %s is referring to the average rating value */
Object(u.__)("Rated %s out of 5","woo-gutenberg-products-block"),e),removeCallback:()=>{if(C({rating_filter:e}),!l){const t=B.filter(t=>t!==e);M(t)}},showLabel:!1,displayStyle:t.displayStyle}))))},[b,B,M,t.displayStyle,l]);if(!b&&!(p.length>0||v.length>0||B.length>0||Number.isFinite(S)||Number.isFinite(R))&&!r)return n(!1),null;const K="h"+t.headingLevel,U=Object(c.createElement)(K,{className:"wc-block-active-filters__title"},t.heading),q=b?Object(c.createElement)(w.a,null,U):U;if(!Object(m.getSettingWithCoercion)("has_filterable_products",!1,g.a))return n(!1),null;n(!0);const G=i()("wc-block-active-filters__list",{"wc-block-active-filters__list--chips":"chips"===t.displayStyle,"wc-block-active-filters--loading":b});return Object(c.createElement)(c.Fragment,null,!r&&t.heading&&q,Object(c.createElement)("div",{className:"wc-block-active-filters"},Object(c.createElement)("ul",{className:G},r?Object(c.createElement)(c.Fragment,null,N({type:Object(u.__)("Size","woo-gutenberg-products-block"),name:Object(u.__)("Small","woo-gutenberg-products-block"),displayStyle:t.displayStyle}),N({type:Object(u.__)("Color","woo-gutenberg-products-block"),name:Object(u.__)("Blue","woo-gutenberg-products-block"),displayStyle:t.displayStyle})):Object(c.createElement)(c.Fragment,null,Object(c.createElement)(P,{isLoading:b,displayStyle:t.displayStyle}),W,V,Y,z)),b?Object(c.createElement)("span",{className:"wc-block-active-filters__clear-all-placeholder"}):Object(c.createElement)("button",{className:"wc-block-active-filters__clear-all",onClick:()=>{(()=>{if(!window)return;const e=window.location.href,t=Object(k.getQueryArgs)(e),r=Object(k.removeQueryArgs)(e,...Object.keys(t)),c=Object.fromEntries(Object.keys(t).filter(e=>!T(e)).map(e=>[e,t[e]])),n=Object(k.addQueryArgs)(r,c);Object(y.c)(n)})(),l||(A(void 0),L(void 0),h([]),E([]),M([]))}},Object(c.createElement)(f.a,{label:Object(u.__)("Clear All","woo-gutenberg-products-block"),screenReaderLabel:Object(u.__)("Clear All Filters","woo-gutenberg-products-block")}))))},D=(r(398),r(134)),I=Object(p.withSpokenMessages)(e=>{let{attributes:t,setAttributes:r,clientId:n}=e;const{className:o,displayStyle:l,heading:a,headingLevel:i}=t,d=Object(s.useBlockProps)({className:o});return Object(c.createElement)("div",d,Object(c.createElement)(s.InspectorControls,{key:"inspector"},Object(c.createElement)(p.PanelBody,{title:Object(u.__)("Display Settings","woo-gutenberg-products-block")},Object(c.createElement)(p.__experimentalToggleGroupControl,{label:Object(u.__)("Display Style","woo-gutenberg-products-block"),value:l,onChange:e=>r({displayStyle:e}),className:"wc-block-active-filter__style-toggle"},Object(c.createElement)(p.__experimentalToggleGroupControlOption,{value:"list",label:Object(u.__)("List","woo-gutenberg-products-block")}),Object(c.createElement)(p.__experimentalToggleGroupControlOption,{value:"chips",label:Object(u.__)("Chips","woo-gutenberg-products-block")})))),Object(c.createElement)(D.a,{attributes:t,clientId:n,setAttributes:r,filterType:"active-filters"}),a&&Object(c.createElement)(b.a,{className:"wc-block-active-filters__title",headingLevel:i,heading:a,onChange:e=>r({heading:e})}),Object(c.createElement)(p.Disabled,null,Object(c.createElement)(M,{attributes:t,isEditor:!0})))});const V={heading:{type:"string",default:Object(u.__)("Active filters","woo-gutenberg-products-block")}};var W=r(6),Y=r.n(W),z=[{attributes:{...S.attributes,...V},save:e=>{let{attributes:t}=e;const{className:r,displayStyle:n,heading:o,headingLevel:l}=t,a={"data-display-style":n,"data-heading":o,"data-heading-level":l};return Object(c.createElement)("div",Y()({},s.useBlockProps.save({className:i()("is-loading",r)}),a),Object(c.createElement)("span",{"aria-hidden":!0,className:"wc-block-active-filters__placeholder"}))}}];Object(n.registerBlockType)(S,{icon:{src:Object(c.createElement)(l.a,{icon:o.a,className:"wc-block-editor-components-block-icon"})},attributes:{...S.attributes,...V},edit:I,save(e){let{attributes:t}=e;const{className:r}=t;return Object(c.createElement)("div",s.useBlockProps.save({className:i()("is-loading",r)}),Object(c.createElement)("span",{"aria-hidden":!0,className:"wc-block-active-filters__placeholder"}))},deprecated:z})},61:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return p})),r.d(t,"c",(function(){return d}));var c=r(9),n=r(7),o=r(0),l=r(25),a=r.n(l),i=r(47),s=r(101),u=r(50);const b=e=>{const t=Object(u.a)();e=e||t;const r=Object(n.useSelect)(t=>t(c.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0),[e]),{setValueForQueryContext:l}=Object(n.useDispatch)(c.QUERY_STATE_STORE_KEY);return[r,Object(o.useCallback)(t=>{l(e,t)},[e,l])]},p=(e,t,r)=>{const l=Object(u.a)();r=r||l;const a=Object(n.useSelect)(n=>n(c.QUERY_STATE_STORE_KEY).getValueForQueryKey(r,e,t),[r,e]),{setQueryValue:i}=Object(n.useDispatch)(c.QUERY_STATE_STORE_KEY);return[a,Object(o.useCallback)(t=>{i(r,e,t)},[r,e,i])]},d=(e,t)=>{const r=Object(u.a)();t=t||r;const[c,n]=b(t),l=Object(i.a)(c),p=Object(i.a)(e),d=Object(s.a)(p),m=Object(o.useRef)(!1);return Object(o.useEffect)(()=>{a()(d,p)||(n(Object.assign({},l,p)),m.current=!0)},[l,p,d,n]),m.current?[c,n]:[e,n]}},7:function(e,t){e.exports=window.wp.data},8:function(e,t){e.exports=window.wp.blocks},9:function(e,t){e.exports=window.wc.wcBlocksData},91:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));const c=e=>"boolean"==typeof e}});