this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["handpicked-products"]=function(e){function t(t){for(var r,o,a=t[0],i=t[1],s=t[2],d=0,b=[];d<a.length;d++)o=a[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&b.push(n[o][0]),n[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(u&&u(t);b.length;)b.shift()();return l.push.apply(l,s||[]),c()}function c(){for(var e,t=0;t<l.length;t++){for(var c=l[t],r=!0,a=1;a<c.length;a++){var i=c[a];0!==n[i]&&(r=!1)}r&&(l.splice(t--,1),e=o(o.s=c[0]))}return e}var r={},n={16:0},l=[];function o(t){if(r[t])return r[t].exports;var c=r[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,o),c.l=!0,c.exports}o.m=e,o.c=r,o.d=function(e,t,c){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(o.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(c,r,function(t){return e[t]}.bind(null,r));return c},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var a=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var u=i;return l.push([487,0]),c()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},10:function(e,t){e.exports=window.wp.primitives},100:function(e,t,c){"use strict";c.d(t,"a",(function(){return y}));var r=c(6),n=c.n(r),l=c(0),o=c(1),a=c(2),i=c(76),s=c(595),u=c(4),d=c.n(u),b=c(11),m=c(17),p=c(36),g=c(594),h=c(16);const E=e=>{let{id:t,label:c,popoverContents:r,remove:n,screenReaderLabel:s,className:u=""}=e;const[m,p]=Object(l.useState)(!1),O=Object(b.useInstanceId)(E);if(s=s||c,!c)return null;c=Object(h.decodeEntities)(c);const j=d()("woocommerce-tag",u,{"has-remove":!!n}),f="woocommerce-tag__label-"+O,w=Object(l.createElement)(l.Fragment,null,Object(l.createElement)("span",{className:"screen-reader-text"},s),Object(l.createElement)("span",{"aria-hidden":"true"},c));return Object(l.createElement)("span",{className:j},r?Object(l.createElement)(a.Button,{className:"woocommerce-tag__text",id:f,onClick:()=>p(!0)},w):Object(l.createElement)("span",{className:"woocommerce-tag__text",id:f},w),r&&m&&Object(l.createElement)(a.Popover,{onClose:()=>p(!1)},r),n&&Object(l.createElement)(a.Button,{className:"woocommerce-tag__remove",onClick:n(t),label:Object(o.sprintf)(// Translators: %s label.
Object(o.__)("Remove %s","woo-gutenberg-products-block"),c),"aria-describedby":f},Object(l.createElement)(i.a,{icon:g.a,size:20,className:"clear-icon"})))};var O=E;c(56);const j=e=>Object(l.createElement)(p.b,e),f=e=>{const{list:t,selected:c,renderItem:r,depth:o=0,onSelect:a,instanceId:i,isSingle:s,search:u,useExpandedPanelId:d}=e,[b]=d;return t?Object(l.createElement)(l.Fragment,null,t.map(t=>{var m,p;const g=null!==(m=t.children)&&void 0!==m&&m.length&&!s?t.children.every(e=>{let{id:t}=e;return c.find(e=>e.id===t)}):!!c.find(e=>{let{id:c}=e;return c===t.id}),h=(null===(p=t.children)||void 0===p?void 0:p.length)&&b===t.id;return Object(l.createElement)(l.Fragment,{key:t.id},Object(l.createElement)("li",null,r({item:t,isSelected:g,onSelect:a,isSingle:s,selected:c,search:u,depth:o,useExpandedPanelId:d,controlId:i})),h?Object(l.createElement)(f,n()({},e,{list:t.children,depth:o+1})):null)})):null},w=e=>{let{isLoading:t,isSingle:c,selected:r,messages:n,onChange:i,onRemove:s}=e;if(t||c||!r)return null;const u=r.length;return Object(l.createElement)("div",{className:"woocommerce-search-list__selected"},Object(l.createElement)("div",{className:"woocommerce-search-list__selected-header"},Object(l.createElement)("strong",null,n.selected(u)),u>0?Object(l.createElement)(a.Button,{isLink:!0,isDestructive:!0,onClick:()=>i([]),"aria-label":n.clear},Object(o.__)("Clear all","woo-gutenberg-products-block")):null),u>0?Object(l.createElement)("ul",null,r.map((e,t)=>Object(l.createElement)("li",{key:t},Object(l.createElement)(O,{label:e.name,id:e.id,remove:s})))):null)},_=e=>{let{filteredList:t,search:c,onSelect:r,instanceId:n,useExpandedPanelId:a,...u}=e;const{messages:d,renderItem:b,selected:m,isSingle:p}=u,g=b||j;return 0===t.length?Object(l.createElement)("div",{className:"woocommerce-search-list__list is-not-found"},Object(l.createElement)("span",{className:"woocommerce-search-list__not-found-icon"},Object(l.createElement)(i.a,{icon:s.a})),Object(l.createElement)("span",{className:"woocommerce-search-list__not-found-text"},c?Object(o.sprintf)(d.noResults,c):d.noItems)):Object(l.createElement)("ul",{className:"woocommerce-search-list__list"},Object(l.createElement)(f,{useExpandedPanelId:a,list:t,selected:m,renderItem:g,onSelect:r,instanceId:n,isSingle:p,search:c}))},y=e=>{const{className:t="",isCompact:c,isHierarchical:r,isLoading:i,isSingle:s,list:u,messages:p=m.a,onChange:g,onSearch:h,selected:E,type:O="text",debouncedSpeak:j}=e,[f,x]=Object(l.useState)(""),k=Object(l.useState)(-1),v=Object(b.useInstanceId)(y),S=Object(l.useMemo)(()=>({...m.a,...p}),[p]),C=Object(l.useMemo)(()=>Object(m.c)(u,f,r),[u,f,r]);Object(l.useEffect)(()=>{j&&j(S.updated)},[j,S]),Object(l.useEffect)(()=>{"function"==typeof h&&h(f)},[f,h]);const P=Object(l.useCallback)(e=>()=>{s&&g([]);const t=E.findIndex(t=>{let{id:c}=t;return c===e});g([...E.slice(0,t),...E.slice(t+1)])},[s,E,g]),N=Object(l.useCallback)(e=>()=>{Array.isArray(e)?g(e):-1===E.findIndex(t=>{let{id:c}=t;return c===e.id})?g(s?[e]:[...E,e]):P(e.id)()},[s,P,g,E]),A=Object(l.useCallback)(e=>{const[t]=E.filter(t=>!e.find(e=>t.id===e.id));P(t.id)()},[P,E]);return Object(l.createElement)("div",{className:d()("woocommerce-search-list",t,{"is-compact":c,"is-loading":i,"is-token":"token"===O})},"text"===O&&Object(l.createElement)(w,n()({},e,{onRemove:P,messages:S})),Object(l.createElement)("div",{className:"woocommerce-search-list__search"},"text"===O?Object(l.createElement)(a.TextControl,{label:S.search,type:"search",value:f,onChange:e=>x(e)}):Object(l.createElement)(a.FormTokenField,{disabled:i,label:S.search,onChange:A,onInputChange:e=>x(e),suggestions:[],__experimentalValidateInput:()=>!1,value:i?[Object(o.__)("Loading…","woo-gutenberg-products-block")]:E.map(e=>({...e,value:e.name})),__experimentalShowHowTo:!1})),i?Object(l.createElement)("div",{className:"woocommerce-search-list__list"},Object(l.createElement)(a.Spinner,null)):Object(l.createElement)(_,n()({},e,{search:f,filteredList:C,messages:S,onSelect:N,instanceId:v,useExpandedPanelId:k})))};Object(a.withSpokenMessages)(y)},11:function(e,t){e.exports=window.wp.compose},115:function(e,t,c){"use strict";var r=c(0),n=c(1),l=c(2);t.a=e=>{let{value:t,setAttributes:c}=e;return Object(r.createElement)(l.SelectControl,{label:Object(n.__)("Order products by","woo-gutenberg-products-block"),value:t,options:[{label:Object(n.__)("Newness - newest first","woo-gutenberg-products-block"),value:"date"},{label:Object(n.__)("Price - low to high","woo-gutenberg-products-block"),value:"price_asc"},{label:Object(n.__)("Price - high to low","woo-gutenberg-products-block"),value:"price_desc"},{label:Object(n.__)("Rating - highest first","woo-gutenberg-products-block"),value:"rating"},{label:Object(n.__)("Sales - most first","woo-gutenberg-products-block"),value:"popularity"},{label:Object(n.__)("Title - alphabetical","woo-gutenberg-products-block"),value:"title"},{label:Object(n.__)("Menu Order","woo-gutenberg-products-block"),value:"menu_order"}],onChange:e=>c({orderby:e})})}},14:function(e,t){e.exports=window.wp.apiFetch},15:function(e,t){e.exports=window.wp.url},16:function(e,t){e.exports=window.wp.htmlEntities},165:function(e,t,c){"use strict";c.d(t,"a",(function(){return n}));var r=c(0);const n=Object(r.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 230 250",style:{width:"100%"}},Object(r.createElement)("title",null,"Grid Block Preview"),Object(r.createElement)("rect",{width:"65.374",height:"65.374",x:".162",y:".779",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"47.266",height:"5.148",x:"9.216",y:"76.153",fill:"#E1E3E6",rx:"2.574"}),Object(r.createElement)("rect",{width:"62.8",height:"15",x:"1.565",y:"101.448",fill:"#E1E3E6",rx:"5"}),Object(r.createElement)("rect",{width:"65.374",height:"65.374",x:".162",y:"136.277",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"47.266",height:"5.148",x:"9.216",y:"211.651",fill:"#E1E3E6",rx:"2.574"}),Object(r.createElement)("rect",{width:"62.8",height:"15",x:"1.565",y:"236.946",fill:"#E1E3E6",rx:"5"}),Object(r.createElement)("rect",{width:"65.374",height:"65.374",x:"82.478",y:".779",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"47.266",height:"5.148",x:"91.532",y:"76.153",fill:"#E1E3E6",rx:"2.574"}),Object(r.createElement)("rect",{width:"62.8",height:"15",x:"83.882",y:"101.448",fill:"#E1E3E6",rx:"5"}),Object(r.createElement)("rect",{width:"65.374",height:"65.374",x:"82.478",y:"136.277",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"47.266",height:"5.148",x:"91.532",y:"211.651",fill:"#E1E3E6",rx:"2.574"}),Object(r.createElement)("rect",{width:"62.8",height:"15",x:"83.882",y:"236.946",fill:"#E1E3E6",rx:"5"}),Object(r.createElement)("rect",{width:"65.374",height:"65.374",x:"164.788",y:".779",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"47.266",height:"5.148",x:"173.843",y:"76.153",fill:"#E1E3E6",rx:"2.574"}),Object(r.createElement)("rect",{width:"62.8",height:"15",x:"166.192",y:"101.448",fill:"#E1E3E6",rx:"5"}),Object(r.createElement)("rect",{width:"65.374",height:"65.374",x:"164.788",y:"136.277",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"47.266",height:"5.148",x:"173.843",y:"211.651",fill:"#E1E3E6",rx:"2.574"}),Object(r.createElement)("rect",{width:"62.8",height:"15",x:"166.192",y:"236.946",fill:"#E1E3E6",rx:"5"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"13.283",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"21.498",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"29.713",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"37.927",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"46.238",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"95.599",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"103.814",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"112.029",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"120.243",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"128.554",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"177.909",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"186.124",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"194.339",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"202.553",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"210.864",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"13.283",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"21.498",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"29.713",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"37.927",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"46.238",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"95.599",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"103.814",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"112.029",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"120.243",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"128.554",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"177.909",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"186.124",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"194.339",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"202.553",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"210.864",y:"221.798",fill:"#E1E3E6",rx:"3"}))},17:function(e,t,c){"use strict";c.d(t,"a",(function(){return o})),c.d(t,"c",(function(){return i})),c.d(t,"d",(function(){return s})),c.d(t,"b",(function(){return u}));var r=c(0),n=c(1),l=c(58);const o={clear:Object(n.__)("Clear all selected items","woo-gutenberg-products-block"),noItems:Object(n.__)("No items found.","woo-gutenberg-products-block"),
/* Translators: %s search term */
noResults:Object(n.__)("No results for %s","woo-gutenberg-products-block"),search:Object(n.__)("Search for items","woo-gutenberg-products-block"),selected:e=>Object(n.sprintf)(
/* translators: Number of items selected from list. */
Object(n._n)("%d item selected","%d items selected",e,"woo-gutenberg-products-block"),e),updated:Object(n.__)("Search results updated.","woo-gutenberg-products-block")},a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e;const c=e.reduce((e,t)=>{const c=t.parent||0;return e[c]||(e[c]=[]),e[c].push(t),e},{}),r=Object(l.a)(t,"id"),n=["0"],o=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!e.parent)return e.name?[e.name]:[];const t=o(r[e.parent]);return[...t,e.name]},a=e=>e.map(e=>{const t=c[e.id];return n.push(""+e.id),{...e,breadcrumbs:o(r[e.parent]),children:t&&t.length?a(t):[]}}),i=a(c[0]||[]);return Object.entries(c).forEach(e=>{let[t,c]=e;n.includes(t)||i.push(...a(c||[]))}),i},i=(e,t,c)=>{if(!t)return c?a(e):e;const r=new RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"i"),n=e.map(e=>!!r.test(e.name)&&e).filter(Boolean);return c?a(n,e):n},s=(e,t)=>{if(!t)return e;const c=new RegExp(`(${t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")})`,"ig");return e.split(c).map((e,t)=>c.test(e)?Object(r.createElement)("strong",{key:t},e):Object(r.createElement)(r.Fragment,{key:t},e))},u=e=>1===e.length?e.slice(0,1).toString():2===e.length?e.slice(0,1).toString()+" › "+e.slice(-1).toString():e.slice(0,1).toString()+" … "+e.slice(-1).toString()},18:function(e,t,c){"use strict";c.d(t,"p",(function(){return l})),c.d(t,"n",(function(){return o})),c.d(t,"m",(function(){return a})),c.d(t,"o",(function(){return i})),c.d(t,"k",(function(){return s})),c.d(t,"e",(function(){return u})),c.d(t,"h",(function(){return d})),c.d(t,"l",(function(){return b})),c.d(t,"c",(function(){return m})),c.d(t,"d",(function(){return p})),c.d(t,"g",(function(){return g})),c.d(t,"a",(function(){return O})),c.d(t,"b",(function(){return j})),c.d(t,"i",(function(){return f})),c.d(t,"j",(function(){return w})),c.d(t,"f",(function(){return _}));var r,n=c(3);const l=Object(n.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),o=l.pluginUrl+"images/",a=l.pluginUrl+"build/",i=l.buildPhase,s=null===(r=n.STORE_PAGES.shop)||void 0===r?void 0:r.permalink,u=n.STORE_PAGES.checkout.id,d=(n.STORE_PAGES.checkout.permalink,n.STORE_PAGES.privacy.permalink),b=(n.STORE_PAGES.privacy.title,n.STORE_PAGES.terms.permalink),m=(n.STORE_PAGES.terms.title,n.STORE_PAGES.cart.id),p=n.STORE_PAGES.cart.permalink,g=(n.STORE_PAGES.myaccount.permalink?n.STORE_PAGES.myaccount.permalink:Object(n.getSetting)("wpLoginUrl","/wp-login.php"),Object(n.getSetting)("localPickupEnabled",!1)),h=Object(n.getSetting)("countries",{}),E=Object(n.getSetting)("countryData",{}),O=Object.fromEntries(Object.keys(E).filter(e=>!0===E[e].allowBilling).map(e=>[e,h[e]||""])),j=Object.fromEntries(Object.keys(E).filter(e=>!0===E[e].allowBilling).map(e=>[e,E[e].states||[]])),f=Object.fromEntries(Object.keys(E).filter(e=>!0===E[e].allowShipping).map(e=>[e,h[e]||""])),w=Object.fromEntries(Object.keys(E).filter(e=>!0===E[e].allowShipping).map(e=>[e,E[e].states||[]])),_=Object.fromEntries(Object.keys(E).map(e=>[e,E[e].locale||[]]))},2:function(e,t){e.exports=window.wp.components},217:function(e,t,c){"use strict";var r=c(6),n=c.n(r),l=c(0),o=c(18),a=c(22),i=c(117),s=c(29);t.a=e=>t=>{let{selected:c,...r}=t;const[u,d]=Object(l.useState)(!0),[b,m]=Object(l.useState)(null),[p,g]=Object(l.useState)([]),h=o.p.productCount>100,E=async e=>{const t=await Object(s.a)(e);m(t),d(!1)},O=Object(l.useRef)(c);Object(l.useEffect)(()=>{Object(a.h)({selected:O.current}).then(e=>{g(e),d(!1)}).catch(E)},[O]);const j=Object(i.a)(e=>{Object(a.h)({selected:c,search:e}).then(e=>{g(e),d(!1)}).catch(E)},400),f=Object(l.useCallback)(e=>{d(!0),j(e)},[d,j]);return Object(l.createElement)(e,n()({},r,{selected:c,error:b,products:p,isLoading:u,onSearch:h?f:null}))}},22:function(e,t,c){"use strict";c.d(t,"h",(function(){return s})),c.d(t,"e",(function(){return u})),c.d(t,"b",(function(){return d})),c.d(t,"i",(function(){return b})),c.d(t,"f",(function(){return m})),c.d(t,"c",(function(){return p})),c.d(t,"d",(function(){return g})),c.d(t,"g",(function(){return h})),c.d(t,"a",(function(){return E}));var r=c(15),n=c(14),l=c.n(n),o=c(3),a=c(18);const i=(e,t)=>{const c=new Map;return e.filter(e=>{const r=t(e);return!c.has(r)&&(c.set(r,e),!0)})},s=e=>{let{selected:t=[],search:c="",queryArgs:n={}}=e;const o=(e=>{let{selected:t=[],search:c="",queryArgs:n={}}=e;const l=a.p.productCount>100,o={per_page:l?100:0,catalog_visibility:"any",search:c,orderby:"title",order:"asc"},i=[Object(r.addQueryArgs)("/wc/store/v1/products",{...o,...n})];return l&&t.length&&i.push(Object(r.addQueryArgs)("/wc/store/v1/products",{catalog_visibility:"any",include:t,per_page:0})),i})({selected:t,search:c,queryArgs:n});return Promise.all(o.map(e=>l()({path:e}))).then(e=>{const t=e.flat();return i(t,e=>e.id).map(e=>({...e,parent:0}))}).catch(e=>{throw e})},u=e=>l()({path:"/wc/store/v1/products/"+e}),d=()=>l()({path:"wc/store/v1/products/attributes"}),b=e=>l()({path:`wc/store/v1/products/attributes/${e}/terms`}),m=e=>{let{selected:t=[],search:c}=e;const n=(e=>{let{selected:t=[],search:c}=e;const n=Object(o.getSetting)("limitTags",!1),l=[Object(r.addQueryArgs)("wc/store/v1/products/tags",{per_page:n?100:0,orderby:n?"count":"name",order:n?"desc":"asc",search:c})];return n&&t.length&&l.push(Object(r.addQueryArgs)("wc/store/v1/products/tags",{include:t})),l})({selected:t,search:c});return Promise.all(n.map(e=>l()({path:e}))).then(e=>{const t=e.flat();return i(t,e=>e.id)})},p=e=>l()({path:Object(r.addQueryArgs)("wc/store/v1/products/categories",{per_page:0,...e})}),g=e=>l()({path:"wc/store/v1/products/categories/"+e}),h=e=>l()({path:Object(r.addQueryArgs)("wc/store/v1/products",{per_page:0,type:"variation",parent:e})}),E=(e,t)=>{if(!e.title.raw)return e.slug;const c=1===t.filter(t=>t.title.raw===e.title.raw).length;return e.title.raw+(c?"":" - "+e.slug)}},27:function(e,t){e.exports=window.React},29:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));const r=async e=>{if("function"==typeof e.json)try{const t=await e.json();return{message:t.message,type:t.type||"api"}}catch(e){return{message:e.message,type:"general"}}return{message:e.message,type:e.type||"general"}}},3:function(e,t){e.exports=window.wc.wcSettings},31:function(e,t){e.exports=window.wp.escapeHtml},325:function(e){e.exports=JSON.parse('{"name":"woocommerce/handpicked-products","title":"Hand-picked Products","category":"woocommerce","keywords":["Handpicked Products","WooCommerce"],"description":"Display a selection of hand-picked products in a grid.","supports":{"align":["wide","full"],"html":false},"attributes":{"align":{"type":"string"},"columns":{"type":"number","default":3},"contentVisibility":{"type":"object","default":{"image":true,"title":true,"price":true,"rating":true,"button":true},"properties":{"image":{"type":"boolean","image":true},"title":{"type":"boolean","title":true},"price":{"type":"boolean","price":true},"rating":{"type":"boolean","rating":true},"button":{"type":"boolean","button":true}}},"orderby":{"type":"string","enum":["date","popularity","price_asc","price_desc","rating","title","menu_order"],"default":"date"},"products":{"type":"array","default":[]},"alignButtons":{"type":"boolean","default":false},"isPreview":{"type":"boolean","default":false}},"textdomain":"woo-gutenberg-products-block","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}')},35:function(e,t,c){"use strict";var r=c(0),n=c(1),l=c(31);t.a=e=>{let{error:t}=e;return Object(r.createElement)("div",{className:"wc-block-error-message"},(e=>{let{message:t,type:c}=e;return t?"general"===c?Object(r.createElement)("span",null,Object(n.__)("The following error was returned","woo-gutenberg-products-block"),Object(r.createElement)("br",null),Object(r.createElement)("code",null,Object(l.escapeHTML)(t))):"api"===c?Object(r.createElement)("span",null,Object(n.__)("The following error was returned from the API","woo-gutenberg-products-block"),Object(r.createElement)("br",null),Object(r.createElement)("code",null,Object(l.escapeHTML)(t))):t:Object(n.__)("An error has prevented the block from being updated.","woo-gutenberg-products-block")})(t))}},36:function(e,t,c){"use strict";c.d(t,"a",(function(){return p}));var r=c(6),n=c.n(r),l=c(0),o=c(4),a=c.n(o),i=c(2);function s(e,t,c){const r=new Set(t.map(e=>e[c]));return e.filter(e=>!r.has(e[c]))}var u=c(16),d=c(17);const b=e=>{let{label:t}=e;return Object(l.createElement)("span",{className:"woocommerce-search-list__item-count"},t)},m=e=>{const{item:t,search:c}=e,r=t.breadcrumbs&&t.breadcrumbs.length;return Object(l.createElement)("span",{className:"woocommerce-search-list__item-label"},r?Object(l.createElement)("span",{className:"woocommerce-search-list__item-prefix"},Object(d.b)(t.breadcrumbs)):null,Object(l.createElement)("span",{className:"woocommerce-search-list__item-name"},Object(d.d)(Object(u.decodeEntities)(t.name),c)))},p=e=>{var t,c;let{countLabel:r,className:o,depth:u=0,controlId:p="",item:g,isSelected:h,isSingle:E,onSelect:O,search:j="",selected:f,useExpandedPanelId:w,..._}=e;const[y,x]=w,k=null!=r&&void 0!==g.count&&null!==g.count,v=!(null===(t=g.breadcrumbs)||void 0===t||!t.length),S=!(null===(c=g.children)||void 0===c||!c.length),C=y===g.id,P=a()(["woocommerce-search-list__item","depth-"+u,o],{"has-breadcrumbs":v,"has-children":S,"has-count":k,"is-expanded":C,"is-radio-button":E}),N=_.name||"search-list-item-"+p,A=`${N}-${g.id}`,I=Object(l.useCallback)(()=>{x(C?-1:Number(g.id))},[C,g.id,x]);return S?Object(l.createElement)("div",{className:P,onClick:I,onKeyDown:e=>"Enter"===e.key||" "===e.key?I():null,role:"treeitem",tabIndex:0},E?Object(l.createElement)(l.Fragment,null,Object(l.createElement)("input",n()({type:"radio",id:A,name:N,value:g.value,onChange:O(g),onClick:e=>e.stopPropagation(),checked:h,className:"woocommerce-search-list__item-input"},_)),Object(l.createElement)(m,{item:g,search:j}),k?Object(l.createElement)(b,{label:r||g.count}):null):Object(l.createElement)(l.Fragment,null,Object(l.createElement)(i.CheckboxControl,n()({className:"woocommerce-search-list__item-input",checked:h},!h&&g.children.some(e=>f.find(t=>t.id===e.id))?{indeterminate:!0}:{},{label:Object(d.d)(g.name,j),onChange:()=>{h?O(s(f,g.children,"id"))():O(function(e,t,c){const r=s(t,e,"id");return[...e,...r]}(f,g.children))()},onClick:e=>e.stopPropagation()})),k?Object(l.createElement)(b,{label:r||g.count}):null)):Object(l.createElement)("label",{htmlFor:A,className:P},E?Object(l.createElement)("input",n()({type:"radio",id:A,name:N,value:g.value,onChange:O(g),checked:h,className:"woocommerce-search-list__item-input"},_)):Object(l.createElement)("input",n()({type:"checkbox",id:A,name:N,value:g.value,onChange:O(g),checked:h,className:"woocommerce-search-list__item-input"},_)),Object(l.createElement)(m,{item:g,search:j}),k?Object(l.createElement)(b,{label:r||g.count}):null)};t.b=p},362:function(e,t){},487:function(e,t,c){e.exports=c(555)},5:function(e,t){e.exports=window.wp.blockEditor},555:function(e,t,c){"use strict";c.r(t);var r=c(0),n=c(8),l=c(3),o=c(76),a=c(625),i=(c(362),c(325)),s=c(6),u=c.n(s),d=c(5),b=c(2),m=c(1),p=c(73),g=c(115),h=c(100),E=c(217),O=c(35),j=c(16);const f=e=>{let{error:t,onChange:c,onSearch:n,selected:l,products:o,isLoading:a,isCompact:i}=e;const s={clear:Object(m.__)("Clear all products","woo-gutenberg-products-block"),list:Object(m.__)("Products","woo-gutenberg-products-block"),noItems:Object(m.__)("Your store doesn't have any products.","woo-gutenberg-products-block"),search:Object(m.__)("Search for products to display","woo-gutenberg-products-block"),selected:e=>Object(m.sprintf)(
/* translators: %d is the number of selected products. */
Object(m._n)("%d product selected","%d products selected",e,"woo-gutenberg-products-block"),e),updated:Object(m.__)("Product search results updated.","woo-gutenberg-products-block")};return t?Object(r.createElement)(O.a,{error:t}):Object(r.createElement)(h.a,{className:"woocommerce-products",list:o.map(e=>{const t=e.sku?" ("+e.sku+")":"";return{...e,name:`${Object(j.decodeEntities)(e.name)}${t}`}}),isCompact:i,isLoading:a,selected:o.filter(e=>{let{id:t}=e;return l.includes(t)}),onSearch:n,onChange:c,messages:s})};f.defaultProps={selected:[],products:[],isCompact:!1,isLoading:!0};var w=Object(E.a)(f);const _=e=>{const{attributes:t,setAttributes:c}=e,{columns:n,contentVisibility:o,orderby:a,alignButtons:i}=t;return Object(r.createElement)(d.InspectorControls,{key:"inspector"},Object(r.createElement)(b.PanelBody,{title:Object(m.__)("Layout","woo-gutenberg-products-block"),initialOpen:!0},Object(r.createElement)(b.RangeControl,{label:Object(m.__)("Columns","woo-gutenberg-products-block"),value:n,onChange:e=>c({columns:e}),min:Object(l.getSetting)("min_columns",1),max:Object(l.getSetting)("max_columns",6)}),Object(r.createElement)(b.ToggleControl,{label:Object(m.__)("Align Buttons","woo-gutenberg-products-block"),help:i?Object(m.__)("Buttons are aligned vertically.","woo-gutenberg-products-block"):Object(m.__)("Buttons follow content.","woo-gutenberg-products-block"),checked:i,onChange:()=>c({alignButtons:!i})})),Object(r.createElement)(b.PanelBody,{title:Object(m.__)("Content","woo-gutenberg-products-block"),initialOpen:!0},Object(r.createElement)(p.a,{settings:o,onChange:e=>c({contentVisibility:e})})),Object(r.createElement)(b.PanelBody,{title:Object(m.__)("Order By","woo-gutenberg-products-block"),initialOpen:!1},Object(r.createElement)(g.a,{setAttributes:c,value:a})),Object(r.createElement)(b.PanelBody,{title:Object(m.__)("Products","woo-gutenberg-products-block"),initialOpen:!1},Object(r.createElement)(w,{selected:t.products,onChange:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];const t=e.map(e=>{let{id:t}=e;return t});c({products:t})},isCompact:!0})))},y=e=>{const{attributes:t,setAttributes:c,debouncedSpeak:n,isEditing:l,setIsEditing:i}=e;return Object(r.createElement)(b.Placeholder,{icon:Object(r.createElement)(o.a,{icon:a.a}),label:Object(m.__)("Hand-picked Products","woo-gutenberg-products-block"),className:"wc-block-products-grid wc-block-handpicked-products"},Object(m.__)("Display a selection of hand-picked products in a grid.","woo-gutenberg-products-block"),Object(r.createElement)("div",{className:"wc-block-handpicked-products__selection"},Object(r.createElement)(w,{selected:t.products,onChange:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];const t=e.map(e=>{let{id:t}=e;return t});c({products:t})}}),Object(r.createElement)(b.Button,{isPrimary:!0,onClick:()=>{i(!l),n(Object(m.__)("Now displaying a preview of the Hand-picked Products block.","woo-gutenberg-products-block"))}},Object(m.__)("Done","woo-gutenberg-products-block"))))};var x=c(63),k=c.n(x),v=c(165);const S=e=>{const{attributes:t,name:c}=e;return t.isPreview?v.a:Object(r.createElement)(k.a,{block:c,attributes:t})},C=Object(b.withSpokenMessages)(e=>{const t=Object(d.useBlockProps)(),{attributes:{products:c}}=e,[n,l]=Object(r.useState)(!c.length);return Object(r.createElement)("div",t,Object(r.createElement)(d.BlockControls,null,Object(r.createElement)(b.ToolbarGroup,{controls:[{icon:"edit",title:Object(m.__)("Edit selected products","woo-gutenberg-products-block"),onClick:()=>l(!n),isActive:n}]})),Object(r.createElement)(_,e),n?Object(r.createElement)(y,u()({isEditing:n,setIsEditing:l},e)):Object(r.createElement)(b.Disabled,null,Object(r.createElement)(S,e)))});Object(n.registerBlockType)(i,{icon:{src:Object(r.createElement)(o.a,{icon:a.a,className:"wc-block-editor-components-block-icon"})},attributes:{...i.attributes,columns:{type:"number",default:Object(l.getSetting)("default_columns",3)}},edit:C,save:()=>null})},56:function(e,t){},58:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));const r=(e,t)=>e.reduce((e,c)=>(e[String(t?c[t]:c)]=c,e),{})},63:function(e,t){e.exports=window.wp.serverSideRender},73:function(e,t,c){"use strict";var r=c(0),n=c(1),l=c(2);t.a=e=>{let{onChange:t,settings:c}=e;const{image:o,button:a,price:i,rating:s,title:u}=c,d=!1!==o;return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(l.ToggleControl,{label:Object(n.__)("Product image","woo-gutenberg-products-block"),checked:d,onChange:()=>t({...c,image:!d})}),Object(r.createElement)(l.ToggleControl,{label:Object(n.__)("Product title","woo-gutenberg-products-block"),checked:u,onChange:()=>t({...c,title:!u})}),Object(r.createElement)(l.ToggleControl,{label:Object(n.__)("Product price","woo-gutenberg-products-block"),checked:i,onChange:()=>t({...c,price:!i})}),Object(r.createElement)(l.ToggleControl,{label:Object(n.__)("Product rating","woo-gutenberg-products-block"),checked:s,onChange:()=>t({...c,rating:!s})}),Object(r.createElement)(l.ToggleControl,{label:Object(n.__)("Add to Cart button","woo-gutenberg-products-block"),checked:a,onChange:()=>t({...c,button:!a})}))}},8:function(e,t){e.exports=window.wp.blocks}});