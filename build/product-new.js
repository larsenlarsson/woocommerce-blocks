this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["product-new"]=function(e){function t(t){for(var r,l,a=t[0],i=t[1],s=t[2],d=0,b=[];d<a.length;d++)l=a[d],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&b.push(n[l][0]),n[l]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(u&&u(t);b.length;)b.shift()();return o.push.apply(o,s||[]),c()}function c(){for(var e,t=0;t<o.length;t++){for(var c=o[t],r=!0,a=1;a<c.length;a++){var i=c[a];0!==n[i]&&(r=!1)}r&&(o.splice(t--,1),e=l(l.s=c[0]))}return e}var r={},n={27:0},o=[];function l(t){if(r[t])return r[t].exports;var c=r[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,l),c.l=!0,c.exports}l.m=e,l.c=r,l.d=function(e,t,c){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(l.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(c,r,function(t){return e[t]}.bind(null,r));return c},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var a=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var u=i;return o.push([479,0]),c()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},10:function(e,t){e.exports=window.wp.primitives},100:function(e,t,c){"use strict";c.d(t,"a",(function(){return x}));var r=c(6),n=c.n(r),o=c(0),l=c(1),a=c(2),i=c(74),s=c(555),u=c(4),d=c.n(u),b=c(11),m=c(17),g=c(38),h=c(554),p=c(14);const E=e=>{let{id:t,label:c,popoverContents:r,remove:n,screenReaderLabel:s,className:u=""}=e;const[m,g]=Object(o.useState)(!1),O=Object(b.useInstanceId)(E);if(s=s||c,!c)return null;c=Object(p.decodeEntities)(c);const j=d()("woocommerce-tag",u,{"has-remove":!!n}),w="woocommerce-tag__label-"+O,f=Object(o.createElement)(o.Fragment,null,Object(o.createElement)("span",{className:"screen-reader-text"},s),Object(o.createElement)("span",{"aria-hidden":"true"},c));return Object(o.createElement)("span",{className:j},r?Object(o.createElement)(a.Button,{className:"woocommerce-tag__text",id:w,onClick:()=>g(!0)},f):Object(o.createElement)("span",{className:"woocommerce-tag__text",id:w},f),r&&m&&Object(o.createElement)(a.Popover,{onClose:()=>g(!1)},r),n&&Object(o.createElement)(a.Button,{className:"woocommerce-tag__remove",onClick:n(t),label:Object(l.sprintf)(// Translators: %s label.
Object(l.__)("Remove %s","woo-gutenberg-products-block"),c),"aria-describedby":w},Object(o.createElement)(i.a,{icon:h.a,size:20,className:"clear-icon"})))};var O=E;const j=e=>Object(o.createElement)(g.b,e),w=e=>{const{list:t,selected:c,renderItem:r,depth:l=0,onSelect:a,instanceId:i,isSingle:s,search:u,useExpandedPanelId:d}=e,[b]=d;return t?Object(o.createElement)(o.Fragment,null,t.map(t=>{var m,g;const h=null!==(m=t.children)&&void 0!==m&&m.length&&!s?t.children.every(e=>{let{id:t}=e;return c.find(e=>e.id===t)}):!!c.find(e=>{let{id:c}=e;return c===t.id}),p=(null===(g=t.children)||void 0===g?void 0:g.length)&&b===t.id;return Object(o.createElement)(o.Fragment,{key:t.id},Object(o.createElement)("li",null,r({item:t,isSelected:h,onSelect:a,isSingle:s,selected:c,search:u,depth:l,useExpandedPanelId:d,controlId:i})),p?Object(o.createElement)(w,n()({},e,{list:t.children,depth:l+1})):null)})):null},f=e=>{let{isLoading:t,isSingle:c,selected:r,messages:n,onChange:i,onRemove:s}=e;if(t||c||!r)return null;const u=r.length;return Object(o.createElement)("div",{className:"woocommerce-search-list__selected"},Object(o.createElement)("div",{className:"woocommerce-search-list__selected-header"},Object(o.createElement)("strong",null,n.selected(u)),u>0?Object(o.createElement)(a.Button,{isLink:!0,isDestructive:!0,onClick:()=>i([]),"aria-label":n.clear},Object(l.__)("Clear all","woo-gutenberg-products-block")):null),u>0?Object(o.createElement)("ul",null,r.map((e,t)=>Object(o.createElement)("li",{key:t},Object(o.createElement)(O,{label:e.name,id:e.id,remove:s})))):null)},_=e=>{let{filteredList:t,search:c,onSelect:r,instanceId:n,useExpandedPanelId:a,...u}=e;const{messages:d,renderItem:b,selected:m,isSingle:g}=u,h=b||j;return 0===t.length?Object(o.createElement)("div",{className:"woocommerce-search-list__list is-not-found"},Object(o.createElement)("span",{className:"woocommerce-search-list__not-found-icon"},Object(o.createElement)(i.a,{icon:s.a})),Object(o.createElement)("span",{className:"woocommerce-search-list__not-found-text"},c?Object(l.sprintf)(d.noResults,c):d.noItems)):Object(o.createElement)("ul",{className:"woocommerce-search-list__list"},Object(o.createElement)(w,{useExpandedPanelId:a,list:t,selected:m,renderItem:h,onSelect:r,instanceId:n,isSingle:g,search:c}))},x=e=>{const{className:t="",isCompact:c,isHierarchical:r,isLoading:i,isSingle:s,list:u,messages:g=m.a,onChange:h,onSearch:p,selected:E,type:O="text",debouncedSpeak:j}=e,[w,y]=Object(o.useState)(""),k=Object(o.useState)(-1),v=Object(b.useInstanceId)(x),S=Object(o.useMemo)(()=>({...m.a,...g}),[g]),C=Object(o.useMemo)(()=>Object(m.c)(u,w,r),[u,w,r]);Object(o.useEffect)(()=>{j&&j(S.updated)},[j,S]),Object(o.useEffect)(()=>{"function"==typeof p&&p(w)},[w,p]);const P=Object(o.useCallback)(e=>()=>{s&&h([]);const t=E.findIndex(t=>{let{id:c}=t;return c===e});h([...E.slice(0,t),...E.slice(t+1)])},[s,E,h]),N=Object(o.useCallback)(e=>()=>{Array.isArray(e)?h(e):-1===E.findIndex(t=>{let{id:c}=t;return c===e.id})?h(s?[e]:[...E,e]):P(e.id)()},[s,P,h,E]),A=Object(o.useCallback)(e=>{const[t]=E.filter(t=>!e.find(e=>t.id===e.id));P(t.id)()},[P,E]);return Object(o.createElement)("div",{className:d()("woocommerce-search-list",t,{"is-compact":c,"is-loading":i,"is-token":"token"===O})},"text"===O&&Object(o.createElement)(f,n()({},e,{onRemove:P,messages:S})),Object(o.createElement)("div",{className:"woocommerce-search-list__search"},"text"===O?Object(o.createElement)(a.TextControl,{label:S.search,type:"search",value:w,onChange:e=>y(e)}):Object(o.createElement)(a.FormTokenField,{disabled:i,label:S.search,onChange:A,onInputChange:e=>y(e),suggestions:[],__experimentalValidateInput:()=>!1,value:i?[Object(l.__)("Loading…","woo-gutenberg-products-block")]:E.map(e=>({...e,value:e.name})),__experimentalShowHowTo:!1})),i?Object(o.createElement)("div",{className:"woocommerce-search-list__list"},Object(o.createElement)(a.Spinner,null)):Object(o.createElement)(_,n()({},e,{search:w,filteredList:C,messages:S,onSelect:N,instanceId:v,useExpandedPanelId:k})))};Object(a.withSpokenMessages)(x)},11:function(e,t){e.exports=window.wp.compose},14:function(e,t){e.exports=window.wp.htmlEntities},15:function(e,t){e.exports=window.wp.url},159:function(e,t,c){"use strict";c.d(t,"a",(function(){return n}));var r=c(0);const n=Object(r.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 230 250",style:{width:"100%"}},Object(r.createElement)("title",null,"Grid Block Preview"),Object(r.createElement)("rect",{width:"65.374",height:"65.374",x:".162",y:".779",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"47.266",height:"5.148",x:"9.216",y:"76.153",fill:"#E1E3E6",rx:"2.574"}),Object(r.createElement)("rect",{width:"62.8",height:"15",x:"1.565",y:"101.448",fill:"#E1E3E6",rx:"5"}),Object(r.createElement)("rect",{width:"65.374",height:"65.374",x:".162",y:"136.277",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"47.266",height:"5.148",x:"9.216",y:"211.651",fill:"#E1E3E6",rx:"2.574"}),Object(r.createElement)("rect",{width:"62.8",height:"15",x:"1.565",y:"236.946",fill:"#E1E3E6",rx:"5"}),Object(r.createElement)("rect",{width:"65.374",height:"65.374",x:"82.478",y:".779",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"47.266",height:"5.148",x:"91.532",y:"76.153",fill:"#E1E3E6",rx:"2.574"}),Object(r.createElement)("rect",{width:"62.8",height:"15",x:"83.882",y:"101.448",fill:"#E1E3E6",rx:"5"}),Object(r.createElement)("rect",{width:"65.374",height:"65.374",x:"82.478",y:"136.277",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"47.266",height:"5.148",x:"91.532",y:"211.651",fill:"#E1E3E6",rx:"2.574"}),Object(r.createElement)("rect",{width:"62.8",height:"15",x:"83.882",y:"236.946",fill:"#E1E3E6",rx:"5"}),Object(r.createElement)("rect",{width:"65.374",height:"65.374",x:"164.788",y:".779",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"47.266",height:"5.148",x:"173.843",y:"76.153",fill:"#E1E3E6",rx:"2.574"}),Object(r.createElement)("rect",{width:"62.8",height:"15",x:"166.192",y:"101.448",fill:"#E1E3E6",rx:"5"}),Object(r.createElement)("rect",{width:"65.374",height:"65.374",x:"164.788",y:"136.277",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"47.266",height:"5.148",x:"173.843",y:"211.651",fill:"#E1E3E6",rx:"2.574"}),Object(r.createElement)("rect",{width:"62.8",height:"15",x:"166.192",y:"236.946",fill:"#E1E3E6",rx:"5"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"13.283",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"21.498",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"29.713",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"37.927",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"46.238",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"95.599",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"103.814",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"112.029",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"120.243",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"128.554",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"177.909",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"186.124",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"194.339",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"202.553",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"210.864",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"13.283",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"21.498",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"29.713",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"37.927",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"46.238",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"95.599",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"103.814",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"112.029",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"120.243",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"128.554",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"177.909",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"186.124",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"194.339",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"202.553",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"210.864",y:"221.798",fill:"#E1E3E6",rx:"3"}))},16:function(e,t){e.exports=window.wp.apiFetch},17:function(e,t,c){"use strict";c.d(t,"a",(function(){return l})),c.d(t,"c",(function(){return i})),c.d(t,"d",(function(){return s})),c.d(t,"b",(function(){return u}));var r=c(0),n=c(1),o=c(56);const l={clear:Object(n.__)("Clear all selected items","woo-gutenberg-products-block"),noItems:Object(n.__)("No items found.","woo-gutenberg-products-block"),
/* Translators: %s search term */
noResults:Object(n.__)("No results for %s","woo-gutenberg-products-block"),search:Object(n.__)("Search for items","woo-gutenberg-products-block"),selected:e=>Object(n.sprintf)(
/* translators: Number of items selected from list. */
Object(n._n)("%d item selected","%d items selected",e,"woo-gutenberg-products-block"),e),updated:Object(n.__)("Search results updated.","woo-gutenberg-products-block")},a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e;const c=e.reduce((e,t)=>{const c=t.parent||0;return e[c]||(e[c]=[]),e[c].push(t),e},{}),r=Object(o.a)(t,"id"),n=["0"],l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!e.parent)return e.name?[e.name]:[];const t=l(r[e.parent]);return[...t,e.name]},a=e=>e.map(e=>{const t=c[e.id];return n.push(""+e.id),{...e,breadcrumbs:l(r[e.parent]),children:t&&t.length?a(t):[]}}),i=a(c[0]||[]);return Object.entries(c).forEach(e=>{let[t,c]=e;n.includes(t)||i.push(...a(c||[]))}),i},i=(e,t,c)=>{if(!t)return c?a(e):e;const r=new RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"i"),n=e.map(e=>!!r.test(e.name)&&e).filter(Boolean);return c?a(n,e):n},s=(e,t)=>{if(!t)return e;const c=new RegExp(`(${t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")})`,"ig");return e.split(c).map((e,t)=>c.test(e)?Object(r.createElement)("strong",{key:t},e):Object(r.createElement)(r.Fragment,{key:t},e))},u=e=>1===e.length?e.slice(0,1).toString():2===e.length?e.slice(0,1).toString()+" › "+e.slice(-1).toString():e.slice(0,1).toString()+" … "+e.slice(-1).toString()},18:function(e,t,c){"use strict";c.d(t,"o",(function(){return o})),c.d(t,"m",(function(){return l})),c.d(t,"l",(function(){return a})),c.d(t,"n",(function(){return i})),c.d(t,"j",(function(){return s})),c.d(t,"e",(function(){return u})),c.d(t,"g",(function(){return d})),c.d(t,"k",(function(){return b})),c.d(t,"c",(function(){return m})),c.d(t,"d",(function(){return g})),c.d(t,"h",(function(){return h})),c.d(t,"a",(function(){return p})),c.d(t,"i",(function(){return E})),c.d(t,"b",(function(){return O})),c.d(t,"f",(function(){return j}));var r,n=c(3);const o=Object(n.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),l=o.pluginUrl+"images/",a=o.pluginUrl+"build/",i=o.buildPhase,s=null===(r=n.STORE_PAGES.shop)||void 0===r?void 0:r.permalink,u=n.STORE_PAGES.checkout.id,d=(n.STORE_PAGES.checkout.permalink,n.STORE_PAGES.privacy.permalink),b=(n.STORE_PAGES.privacy.title,n.STORE_PAGES.terms.permalink),m=(n.STORE_PAGES.terms.title,n.STORE_PAGES.cart.id),g=n.STORE_PAGES.cart.permalink,h=(n.STORE_PAGES.myaccount.permalink?n.STORE_PAGES.myaccount.permalink:Object(n.getSetting)("wpLoginUrl","/wp-login.php"),Object(n.getSetting)("shippingCountries",{})),p=Object(n.getSetting)("allowedCountries",{}),E=Object(n.getSetting)("shippingStates",{}),O=Object(n.getSetting)("allowedStates",{}),j=Object(n.getSetting)("localPickupEnabled",!1)},2:function(e,t){e.exports=window.wp.components},23:function(e,t,c){"use strict";c.d(t,"h",(function(){return s})),c.d(t,"e",(function(){return u})),c.d(t,"b",(function(){return d})),c.d(t,"i",(function(){return b})),c.d(t,"f",(function(){return m})),c.d(t,"c",(function(){return g})),c.d(t,"d",(function(){return h})),c.d(t,"g",(function(){return p})),c.d(t,"a",(function(){return E}));var r=c(15),n=c(16),o=c.n(n),l=c(3),a=c(18);const i=(e,t)=>{const c=new Map;return e.filter(e=>{const r=t(e);return!c.has(r)&&(c.set(r,e),!0)})},s=e=>{let{selected:t=[],search:c="",queryArgs:n={}}=e;const l=(e=>{let{selected:t=[],search:c="",queryArgs:n={}}=e;const o=a.o.productCount>100,l={per_page:o?100:0,catalog_visibility:"any",search:c,orderby:"title",order:"asc"},i=[Object(r.addQueryArgs)("/wc/store/v1/products",{...l,...n})];return o&&t.length&&i.push(Object(r.addQueryArgs)("/wc/store/v1/products",{catalog_visibility:"any",include:t,per_page:0})),i})({selected:t,search:c,queryArgs:n});return Promise.all(l.map(e=>o()({path:e}))).then(e=>{const t=e.flat();return i(t,e=>e.id).map(e=>({...e,parent:0}))}).catch(e=>{throw e})},u=e=>o()({path:"/wc/store/v1/products/"+e}),d=()=>o()({path:"wc/store/v1/products/attributes"}),b=e=>o()({path:`wc/store/v1/products/attributes/${e}/terms`}),m=e=>{let{selected:t=[],search:c}=e;const n=(e=>{let{selected:t=[],search:c}=e;const n=Object(l.getSetting)("limitTags",!1),o=[Object(r.addQueryArgs)("wc/store/v1/products/tags",{per_page:n?100:0,orderby:n?"count":"name",order:n?"desc":"asc",search:c})];return n&&t.length&&o.push(Object(r.addQueryArgs)("wc/store/v1/products/tags",{include:t})),o})({selected:t,search:c});return Promise.all(n.map(e=>o()({path:e}))).then(e=>{const t=e.flat();return i(t,e=>e.id)})},g=e=>o()({path:Object(r.addQueryArgs)("wc/store/v1/products/categories",{per_page:0,...e})}),h=e=>o()({path:"wc/store/v1/products/categories/"+e}),p=e=>o()({path:Object(r.addQueryArgs)("wc/store/v1/products",{per_page:0,type:"variation",parent:e})}),E=(e,t)=>{if(!e.title.raw)return e.slug;const c=1===t.filter(t=>t.title.raw===e.title.raw).length;return e.title.raw+(c?"":" - "+e.slug)}},3:function(e,t){e.exports=window.wc.wcSettings},31:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));const r=async e=>{if("function"==typeof e.json)try{const t=await e.json();return{message:t.message,type:t.type||"api"}}catch(e){return{message:e.message,type:"general"}}return{message:e.message,type:e.type||"general"}}},35:function(e,t){e.exports=window.wp.escapeHtml},36:function(e,t,c){"use strict";var r=c(0),n=c(1),o=c(35);t.a=e=>{let{error:t}=e;return Object(r.createElement)("div",{className:"wc-block-error-message"},(e=>{let{message:t,type:c}=e;return t?"general"===c?Object(r.createElement)("span",null,Object(n.__)("The following error was returned","woo-gutenberg-products-block"),Object(r.createElement)("br",null),Object(r.createElement)("code",null,Object(o.escapeHTML)(t))):"api"===c?Object(r.createElement)("span",null,Object(n.__)("The following error was returned from the API","woo-gutenberg-products-block"),Object(r.createElement)("br",null),Object(r.createElement)("code",null,Object(o.escapeHTML)(t))):t:Object(n.__)("An error has prevented the block from being updated.","woo-gutenberg-products-block")})(t))}},38:function(e,t,c){"use strict";c.d(t,"a",(function(){return g}));var r=c(6),n=c.n(r),o=c(0),l=c(4),a=c.n(l),i=c(2);function s(e,t,c){const r=new Set(t.map(e=>e[c]));return e.filter(e=>!r.has(e[c]))}var u=c(14),d=c(17);const b=e=>{let{label:t}=e;return Object(o.createElement)("span",{className:"woocommerce-search-list__item-count"},t)},m=e=>{const{item:t,search:c}=e,r=t.breadcrumbs&&t.breadcrumbs.length;return Object(o.createElement)("span",{className:"woocommerce-search-list__item-label"},r?Object(o.createElement)("span",{className:"woocommerce-search-list__item-prefix"},Object(d.b)(t.breadcrumbs)):null,Object(o.createElement)("span",{className:"woocommerce-search-list__item-name"},Object(d.d)(Object(u.decodeEntities)(t.name),c)))},g=e=>{var t,c;let{countLabel:r,className:l,depth:u=0,controlId:g="",item:h,isSelected:p,isSingle:E,onSelect:O,search:j="",selected:w,useExpandedPanelId:f,..._}=e;const[x,y]=f,k=null!=r&&void 0!==h.count&&null!==h.count,v=!(null===(t=h.breadcrumbs)||void 0===t||!t.length),S=!(null===(c=h.children)||void 0===c||!c.length),C=x===h.id,P=a()(["woocommerce-search-list__item","depth-"+u,l],{"has-breadcrumbs":v,"has-children":S,"has-count":k,"is-expanded":C,"is-radio-button":E}),N=_.name||"search-list-item-"+g,A=`${N}-${h.id}`,I=Object(o.useCallback)(()=>{y(C?-1:Number(h.id))},[C,h.id,y]);return S?Object(o.createElement)("div",{className:P,onClick:I,onKeyDown:e=>"Enter"===e.key||" "===e.key?I():null,role:"treeitem",tabIndex:0},E?Object(o.createElement)(o.Fragment,null,Object(o.createElement)("input",n()({type:"radio",id:A,name:N,value:h.value,onChange:O(h),onClick:e=>e.stopPropagation(),checked:p,className:"woocommerce-search-list__item-input"},_)),Object(o.createElement)(m,{item:h,search:j}),k?Object(o.createElement)(b,{label:r||h.count}):null):Object(o.createElement)(o.Fragment,null,Object(o.createElement)(i.CheckboxControl,n()({className:"woocommerce-search-list__item-input",checked:p},!p&&h.children.some(e=>w.find(t=>t.id===e.id))?{indeterminate:!0}:{},{label:Object(d.d)(h.name,j),onChange:()=>{p?O(s(w,h.children,"id"))():O(function(e,t,c){const r=s(t,e,"id");return[...e,...r]}(w,h.children))()},onClick:e=>e.stopPropagation()})),k?Object(o.createElement)(b,{label:r||h.count}):null)):Object(o.createElement)("label",{htmlFor:A,className:P},E?Object(o.createElement)("input",n()({type:"radio",id:A,name:N,value:h.value,onChange:O(h),checked:p,className:"woocommerce-search-list__item-input"},_)):Object(o.createElement)("input",n()({type:"checkbox",id:A,name:N,value:h.value,onChange:O(h),checked:p,className:"woocommerce-search-list__item-input"},_)),Object(o.createElement)(m,{item:h,search:j}),k?Object(o.createElement)(b,{label:r||h.count}):null)};t.b=g},479:function(e,t,c){e.exports=c(536)},5:function(e,t){e.exports=window.wp.blockEditor},536:function(e,t,c){"use strict";c.r(t);var r=c(0),n=c(1),o=c(8),l=c(74),a=c(589),i=c(2),s=c(5),u=c(59),d=c.n(u),b=c(68),m=c(67),g=c(60),h=c(90),p=c(159),E=c(3);class O extends r.Component{getInspectorControls(){const{attributes:e,setAttributes:t}=this.props,{categories:c,catOperator:o,columns:l,contentVisibility:a,rows:u,alignButtons:d,stockStatus:p}=e;return Object(r.createElement)(s.InspectorControls,{key:"inspector"},Object(r.createElement)(i.PanelBody,{title:Object(n.__)("Layout","woo-gutenberg-products-block"),initialOpen:!0},Object(r.createElement)(m.a,{columns:l,rows:u,alignButtons:d,setAttributes:t,minColumns:Object(E.getSetting)("min_columns",1),maxColumns:Object(E.getSetting)("max_columns",6),minRows:Object(E.getSetting)("min_rows",1),maxRows:Object(E.getSetting)("max_rows",6)})),Object(r.createElement)(i.PanelBody,{title:Object(n.__)("Content","woo-gutenberg-products-block"),initialOpen:!0},Object(r.createElement)(b.a,{settings:a,onChange:e=>t({contentVisibility:e})})),Object(r.createElement)(i.PanelBody,{title:Object(n.__)("Filter by stock status","woo-gutenberg-products-block"),initialOpen:!1},Object(r.createElement)(h.a,{setAttributes:t,value:p})),Object(r.createElement)(i.PanelBody,{title:Object(n.__)("Filter by Product Category","woo-gutenberg-products-block"),initialOpen:!1},Object(r.createElement)(g.a,{selected:c,onChange:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];const c=e.map(e=>{let{id:t}=e;return t});t({categories:c})},operator:o,onOperatorChange:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"any";return t({catOperator:e})}})))}render(){const{attributes:e,name:t}=this.props;return e.isPreview?p.a:Object(r.createElement)(r.Fragment,null,this.getInspectorControls(),Object(r.createElement)(i.Disabled,null,Object(r.createElement)(d.a,{block:t,attributes:e})))}}var j=O,w=c(82);Object(o.registerBlockType)("woocommerce/product-new",{title:Object(n.__)("Newest Products","woo-gutenberg-products-block"),icon:{src:Object(r.createElement)(l.a,{icon:a.a,className:"wc-block-editor-components-block-icon wc-block-editor-components-block-icon--sparkles"})},category:"woocommerce",keywords:[Object(n.__)("WooCommerce","woo-gutenberg-products-block")],description:Object(n.__)("Display a grid of your newest products.","woo-gutenberg-products-block"),supports:{align:["wide","full"],html:!1},attributes:{...w.a},transforms:{from:[{type:"block",blocks:w.b.filter(e=>"woocommerce/product-new"!==e),transform:e=>Object(o.createBlock)("woocommerce/product-new",e)}]},edit:e=>Object(r.createElement)(j,e),save:()=>null})},56:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));const r=(e,t)=>e.reduce((e,c)=>(e[String(t?c[t]:c)]=c,e),{})},59:function(e,t){e.exports=window.wp.serverSideRender},60:function(e,t,c){"use strict";var r=c(6),n=c.n(r),o=c(0),l=c(1),a=c(38),i=c(100),s=c(2),u=c(11),d=c(23),b=c(31),m=Object(u.createHigherOrderComponent)(e=>class extends o.Component{constructor(){super(...arguments),this.state={error:null,loading:!1,categories:[]},this.loadCategories=this.loadCategories.bind(this)}componentDidMount(){this.loadCategories()}loadCategories(){this.setState({loading:!0}),Object(d.c)().then(e=>{this.setState({categories:e,loading:!1,error:null})}).catch(async e=>{const t=await Object(b.a)(e);this.setState({categories:[],loading:!1,error:t})})}render(){const{error:t,loading:c,categories:r}=this.state;return Object(o.createElement)(e,n()({},this.props,{error:t,isLoading:c,categories:r}))}},"withCategories"),g=c(36),h=c(4),p=c.n(h);c(99);const E=e=>{let{categories:t,error:c,isLoading:r,onChange:u,onOperatorChange:d,operator:b,selected:m,isCompact:h,isSingle:E,showReviewCount:O}=e;const j={clear:Object(l.__)("Clear all product categories","woo-gutenberg-products-block"),list:Object(l.__)("Product Categories","woo-gutenberg-products-block"),noItems:Object(l.__)("Your store doesn't have any product categories.","woo-gutenberg-products-block"),search:Object(l.__)("Search for product categories","woo-gutenberg-products-block"),selected:e=>Object(l.sprintf)(
/* translators: %d is the count of selected categories. */
Object(l._n)("%d category selected","%d categories selected",e,"woo-gutenberg-products-block"),e),updated:Object(l.__)("Category search results updated.","woo-gutenberg-products-block")};return c?Object(o.createElement)(g.a,{error:c}):Object(o.createElement)(o.Fragment,null,Object(o.createElement)(i.a,{className:"woocommerce-product-categories",list:t,isLoading:r,selected:m.map(e=>t.find(t=>t.id===e)).filter(Boolean),onChange:u,renderItem:e=>{const{item:t,search:c,depth:r=0}=e,i=t.breadcrumbs.length?`${t.breadcrumbs.join(", ")}, ${t.name}`:t.name,s=O?Object(l.sprintf)(
/* translators: %1$s is the item name, %2$d is the count of reviews for the item. */
Object(l._n)("%1$s, has %2$d review","%1$s, has %2$d reviews",t.review_count,"woo-gutenberg-products-block"),i,t.review_count):Object(l.sprintf)(
/* translators: %1$s is the item name, %2$d is the count of products for the item. */
Object(l._n)("%1$s, has %2$d product","%1$s, has %2$d products",t.count,"woo-gutenberg-products-block"),i,t.count),u=O?Object(l.sprintf)(
/* translators: %d is the count of reviews. */
Object(l._n)("%d review","%d reviews",t.review_count,"woo-gutenberg-products-block"),t.review_count):Object(l.sprintf)(
/* translators: %d is the count of products. */
Object(l._n)("%d product","%d products",t.count,"woo-gutenberg-products-block"),t.count);return Object(o.createElement)(a.a,n()({className:p()("woocommerce-product-categories__item","has-count",{"is-searching":c.length>0,"is-skip-level":0===r&&0!==t.parent})},e,{countLabel:u,"aria-label":s}))},messages:j,isCompact:h,isHierarchical:!0,isSingle:E}),!!d&&Object(o.createElement)("div",{hidden:m.length<2},Object(o.createElement)(s.SelectControl,{className:"woocommerce-product-categories__operator",label:Object(l.__)("Display products matching","woo-gutenberg-products-block"),help:Object(l.__)("Pick at least two categories to use this setting.","woo-gutenberg-products-block"),value:b,onChange:d,options:[{label:Object(l.__)("Any selected categories","woo-gutenberg-products-block"),value:"any"},{label:Object(l.__)("All selected categories","woo-gutenberg-products-block"),value:"all"}]})))};E.defaultProps={operator:"any",isCompact:!1,isSingle:!1},t.a=m(E)},67:function(e,t,c){"use strict";var r=c(0),n=c(1),o=c(2);const l=(e,t,c)=>c?Math.min(e,t)===e?t:Math.max(e,c)===e?c:e:Math.max(e,t)===t?e:t;t.a=e=>{let{columns:t,rows:c,setAttributes:a,alignButtons:i,minColumns:s=1,maxColumns:u=6,minRows:d=1,maxRows:b=6}=e;return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(o.RangeControl,{label:Object(n.__)("Columns","woo-gutenberg-products-block"),value:t,onChange:e=>{const t=l(e,s,u);a({columns:Number.isNaN(t)?"":t})},min:s,max:u}),Object(r.createElement)(o.RangeControl,{label:Object(n.__)("Rows","woo-gutenberg-products-block"),value:c,onChange:e=>{const t=l(e,d,b);a({rows:Number.isNaN(t)?"":t})},min:d,max:b}),Object(r.createElement)(o.ToggleControl,{label:Object(n.__)("Align the last block to the bottom","woo-gutenberg-products-block"),help:i?Object(n.__)("Align the last block to the bottom.","woo-gutenberg-products-block"):Object(n.__)("The last inner block will follow other content.","woo-gutenberg-products-block"),checked:i,onChange:()=>a({alignButtons:!i})}))}},68:function(e,t,c){"use strict";var r=c(0),n=c(1),o=c(2);t.a=e=>{let{onChange:t,settings:c}=e;const{image:l,button:a,price:i,rating:s,title:u}=c,d=!1!==l;return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(o.ToggleControl,{label:Object(n.__)("Product image","woo-gutenberg-products-block"),checked:d,onChange:()=>t({...c,image:!d})}),Object(r.createElement)(o.ToggleControl,{label:Object(n.__)("Product title","woo-gutenberg-products-block"),checked:u,onChange:()=>t({...c,title:!u})}),Object(r.createElement)(o.ToggleControl,{label:Object(n.__)("Product price","woo-gutenberg-products-block"),checked:i,onChange:()=>t({...c,price:!i})}),Object(r.createElement)(o.ToggleControl,{label:Object(n.__)("Product rating","woo-gutenberg-products-block"),checked:s,onChange:()=>t({...c,rating:!s})}),Object(r.createElement)(o.ToggleControl,{label:Object(n.__)("Add to Cart button","woo-gutenberg-products-block"),checked:a,onChange:()=>t({...c,button:!a})}))}},8:function(e,t){e.exports=window.wp.blocks},82:function(e,t,c){"use strict";c.d(t,"b",(function(){return n}));var r=c(3);const n=["woocommerce/product-best-sellers","woocommerce/product-category","woocommerce/product-new","woocommerce/product-on-sale","woocommerce/product-top-rated"];t.a={columns:{type:"number",default:Object(r.getSetting)("default_columns",3)},rows:{type:"number",default:Object(r.getSetting)("default_rows",3)},alignButtons:{type:"boolean",default:!1},categories:{type:"array",default:[]},catOperator:{type:"string",default:"any"},contentVisibility:{type:"object",default:{image:!0,title:!0,price:!0,rating:!0,button:!0}},isPreview:{type:"boolean",default:!1},stockStatus:{type:"array",default:Object.keys(Object(r.getSetting)("stockStatusOptions",[]))}}},90:function(e,t,c){"use strict";var r=c(0),n=c(1),o=c(3),l=c(2);const a=Object(o.getSetting)("hideOutOfStockItems",!1),i=Object(o.getSetting)("stockStatusOptions",{});t.a=e=>{let{value:t,setAttributes:c}=e;const{outofstock:o,...s}=i,u=a?s:i,d=Object.entries(u).map(e=>{let[t,c]=e;return{value:t,label:c}}).filter(e=>!!e.label),[b,m]=Object(r.useState)(t);Object(r.useEffect)(()=>{c({stockStatus:["",...b]})},[b,c]);const g=Object(r.useCallback)(e=>{const t=b.includes(e),c=b.filter(t=>t!==e);t||(c.push(e),c.sort()),m(c)},[b]);return Object(r.createElement)(r.Fragment,null,d.map(e=>{const t=b.includes(e.value)?
/* translators: %s stock status. */
Object(n.__)('Stock status "%s" visible.',"woo-gutenberg-products-block"):
/* translators: %s stock status. */
Object(n.__)('Stock status "%s" hidden.',"woo-gutenberg-products-block");return Object(r.createElement)(l.ToggleControl,{label:e.label,key:e.value,help:Object(n.sprintf)(t,e.label),checked:b.includes(e.value),onChange:()=>g(e.value)})}))}},99:function(e,t){}});