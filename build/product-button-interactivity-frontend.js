!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=270)}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},10:function(e,t){e.exports=window.wp.primitives},11:function(e,t){e.exports=window.wp.compose},112:function(e,t,n){"use strict";var o=n(0),r=n(57),c=n(4),i=n.n(c),s=n(79);n(134),t.a=({className:e,showSpinner:t=!1,children:n,variant:c="contained",...a})=>{const l=i()("wc-block-components-button","wp-element-button",e,c,{"wc-block-components-button--loading":t});return Object(o.createElement)(r.a,{className:l,...a},t&&Object(o.createElement)(s.a,null),Object(o.createElement)("span",{className:"wc-block-components-button__text"},n))}},114:function(e,t){},127:function(e,t){e.exports=window.wc.__experimentalInteractivity},134:function(e,t){},14:function(e,t){e.exports=window.wp.isShallowEqual},149:function(e,t,n){"use strict";var o=n(0),r=n(4),c=n.n(r),i=n(1),s=n(76),a=n(225),l=(n(223),n(280)),u=n(10),m=Object(o.createElement)(u.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(o.createElement)(u.Path,{d:"M12 3.2c-4.8 0-8.8 3.9-8.8 8.8 0 4.8 3.9 8.8 8.8 8.8 4.8 0 8.8-3.9 8.8-8.8 0-4.8-4-8.8-8.8-8.8zm0 16c-4 0-7.2-3.3-7.2-7.2C4.8 8 8 4.8 12 4.8s7.2 3.3 7.2 7.2c0 4-3.2 7.2-7.2 7.2zM11 17h2v-6h-2v6zm0-8h2V7h-2v2z"})),d=Object(o.createElement)(u.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(o.createElement)(u.Path,{fillRule:"evenodd",d:"M6.863 13.644L5 13.25h-.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5H5L18 6.5h2V16h-2l-3.854-.815.026.008a3.75 3.75 0 01-7.31-1.549zm1.477.313a2.251 2.251 0 004.356.921l-4.356-.921zm-2.84-3.28L18.157 8h.343v6.5h-.343L5.5 11.823v-1.146z",clipRule:"evenodd"}));const p=e=>{switch(e){case"success":case"warning":case"info":case"default":return"polite";default:return"assertive"}},f=e=>{switch(e){case"success":return l.a;case"warning":case"info":case"error":return m;default:return d}};var b=n(112),h=n(25);t.a=({className:e,status:t="default",children:n,spokenMessage:r=n,onRemove:l=(()=>{}),isDismissible:u=!0,politeness:m=p(t),summary:d})=>(((e,t)=>{const n="string"==typeof e?e:Object(o.renderToString)(e);Object(o.useEffect)((()=>{n&&Object(h.speak)(n,t)}),[n,t])})(r,m),Object(o.createElement)("div",{className:c()(e,"wc-block-components-notice-banner","is-"+t,{"is-dismissible":u})},Object(o.createElement)(s.a,{icon:f(t)}),Object(o.createElement)("div",{className:"wc-block-components-notice-banner__content"},d&&Object(o.createElement)("p",{className:"wc-block-components-notice-banner__summary"},d),n),!!u&&Object(o.createElement)(b.a,{className:"wc-block-components-notice-banner__dismiss",icon:a.a,label:Object(i.__)("Dismiss this notice","woo-gutenberg-products-block"),onClick:e=>{"function"==typeof(null==e?void 0:e.preventDefault)&&e.preventDefault&&e.preventDefault(),l()},showTooltip:!1})))},16:function(e,t){e.exports=window.wp.deprecated},223:function(e,t){},225:function(e,t,n){"use strict";var o=n(0),r=n(10);const c=Object(o.createElement)(r.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(o.createElement)(r.Path,{d:"M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"}));t.a=c},25:function(e,t){e.exports=window.wp.a11y},26:function(e,t,n){"use strict";(function(e){var o=n(0);n(46);const r=Object(o.createContext)({slots:{},fills:{},registerSlot:()=>{void 0!==e&&e.env},updateSlot:()=>{},unregisterSlot:()=>{},registerFill:()=>{},unregisterFill:()=>{}});t.a=r}).call(this,n(75))},270:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(3),c=n(127),i=n(5),s=n(149),a=function(e){return e.IDLE="IDLE",e.SLIDE_OUT="SLIDE-OUT",e.SLIDE_IN="SLIDE-IN",e}(a||{});const l=".wc-block-store-notices",u=({addToCartText:e,inTheCartText:t,numberOfItems:n})=>0===n?e:t.replace("###",n.toString()),m={woocommerce:{addToCartText:e=>{const{context:t,state:n,selectors:o}=e;return t.woocommerce.animationStatus===a.IDLE||t.woocommerce.animationStatus===a.SLIDE_OUT?u({addToCartText:t.woocommerce.addToCartText,inTheCartText:n.woocommerce.inTheCartText,numberOfItems:t.woocommerce.temporaryNumberOfItems}):u({addToCartText:t.woocommerce.addToCartText,inTheCartText:n.woocommerce.inTheCartText,numberOfItems:o.woocommerce.numberOfItemsInTheCart(e)})},displayViewCart:e=>{const{context:t,selectors:n}=e;return!!t.woocommerce.displayViewCart&&(n.woocommerce.hasCartLoaded(e)?n.woocommerce.numberOfItemsInTheCart(e)>0:t.woocommerce.temporaryNumberOfItems>0)},hasCartLoaded:({state:e})=>void 0!==e.woocommerce.cart,numberOfItemsInTheCart:({state:e,context:t})=>{const n=(o=e.woocommerce.cart,r=t.woocommerce.productId,null==o?void 0:o.items.find((e=>e.id===r)));var o,r;return(null==n?void 0:n.quantity)||0},slideOutAnimation:({context:e})=>e.woocommerce.animationStatus===a.SLIDE_OUT,slideInAnimation:({context:e})=>e.woocommerce.animationStatus===a.SLIDE_IN}};Object(c.store)({selectors:m,actions:{woocommerce:{addToCart:async e=>{const{context:t,selectors:n,ref:c}=e;if(!c.classList.contains("ajax_add_to_cart"))return;t.woocommerce.isLoading=!0;const a=new CustomEvent("should_send_ajax_request.adding_to_cart",{detail:[c],cancelable:!0});if(!1===document.body.dispatchEvent(a)){const e=new CustomEvent("ajax_request_not_sent.adding_to_cart",{detail:[!1,!1,c]});return document.body.dispatchEvent(e),!0}try{await Object(i.dispatch)(r.CART_STORE_KEY).addItemToCart(t.woocommerce.productId,t.woocommerce.quantityToAdd),t.woocommerce.temporaryNumberOfItems=n.woocommerce.numberOfItemsInTheCart(e)}catch(e){const t=document.querySelector(l);var u;t||null===(u=document.querySelector(".entry-content"))||void 0===u||u.prepend((()=>{const e=document.createElement("div");return e.classList.add(l.replace(".","")),e})());const n=null!=t?t:document.querySelector(l);n&&((e,t)=>{const n=Object(o.createRoot)(e);n.render(Object(o.createElement)(s.a,{status:"error",onRemove:()=>n.unmount()},t)),null==e||e.scrollIntoView({behavior:"smooth",inline:"nearest"})})(n,e.message),console.error(e)}finally{t.woocommerce.displayViewCart=!0,t.woocommerce.isLoading=!1}},handleAnimationEnd:e=>{const{event:t,context:n,selectors:o}=e;"slideOut"===t.animationName?n.woocommerce.animationStatus=a.SLIDE_IN:"slideIn"===t.animationName&&(n.woocommerce.temporaryNumberOfItems=o.woocommerce.numberOfItemsInTheCart(e),n.woocommerce.animationStatus=a.IDLE)}}},effects:{woocommerce:{startAnimation:e=>{const{context:t,selectors:n}=e;n.woocommerce.hasCartLoaded(e)&&t.woocommerce.temporaryNumberOfItems!==n.woocommerce.numberOfItemsInTheCart(e)&&!t.woocommerce.isLoading&&t.woocommerce.animationStatus===a.IDLE&&(t.woocommerce.animationStatus=a.SLIDE_OUT)}}}},{afterLoad:e=>{const{state:t,selectors:n}=e;Object(i.subscribe)((()=>{const e=Object(i.select)(r.CART_STORE_KEY).getCartData();Object(i.select)(r.CART_STORE_KEY).hasFinishedResolution("getCartData")&&(t.woocommerce.cart=e)}),r.CART_STORE_KEY),requestIdleCallback((()=>{n.woocommerce.hasCartLoaded(e)||Object(i.select)(r.CART_STORE_KEY).getCartData()}))}})},280:function(e,t,n){"use strict";var o=n(0),r=n(10);const c=Object(o.createElement)(r.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(o.createElement)(r.Path,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"}));t.a=c},3:function(e,t){e.exports=window.wc.wcBlocksData},36:function(e,t,n){"use strict";var o=n(4),r=n.n(o),c=n(0);t.a=Object(c.forwardRef)((function({as:e="div",className:t,...n},o){return function({as:e="div",...t}){return"function"==typeof t.children?t.children(t):Object(c.createElement)(e,t)}({as:e,className:r()("components-visually-hidden",t),...n,ref:o})}))},4:function(e,t,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var c=typeof o;if("string"===c||"number"===c)e.push(o);else if(Array.isArray(o)){if(o.length){var i=r.apply(null,o);i&&e.push(i)}}else if("object"===c)if(o.toString===Object.prototype.toString)for(var s in o)n.call(o,s)&&o[s]&&e.push(s);else e.push(o.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()},46:function(e,t){e.exports=window.wp.warning},47:function(e,t){e.exports=window.wp.dom},5:function(e,t){e.exports=window.wp.data},57:function(e,t,n){"use strict";var o=n(8),r=n(0),c=n(4),i=n.n(c),s=n(7),a=n(16),l=n.n(a),u=n(11),m=n(47),d=n(10),p=Object(r.createElement)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(r.createElement)(d.Path,{d:"M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"})),f=n(1);function b(e,t,n){const{defaultView:o}=t,{frameElement:r}=o;if(!r||t===n.ownerDocument)return e;const c=r.getBoundingClientRect();return new o.DOMRect(e.left+c.left,e.top+c.top,e.width,e.height)}let h=0;function w(e){const t=document.scrollingElement||document.body;e&&(h=t.scrollTop);const n=e?"add":"remove";t.classList[n]("lockscroll"),document.documentElement.classList[n]("lockscroll"),e||(t.scrollTop=h)}let O=0;function g(){return Object(r.useEffect)((()=>(0===O&&w(!0),++O,()=>{1===O&&w(!1),--O})),[]),null}var v=n(26);function j(e){const t=Object(r.useContext)(v.a),n=t.slots[e]||{},o=t.fills[e],c=Object(r.useMemo)((()=>o||[]),[o]);return{...n,updateSlot:Object(r.useCallback)((n=>{t.updateSlot(e,n)}),[e,t.updateSlot]),unregisterSlot:Object(r.useCallback)((n=>{t.unregisterSlot(e,n)}),[e,t.unregisterSlot]),fills:c,registerFill:Object(r.useCallback)((n=>{t.registerFill(e,n)}),[e,t.registerFill]),unregisterFill:Object(r.useCallback)((n=>{t.unregisterFill(e,n)}),[e,t.unregisterFill])}}var E=Object(r.createContext)({registerSlot:()=>{},unregisterSlot:()=>{},registerFill:()=>{},unregisterFill:()=>{},getSlot:()=>{},getFills:()=>{},subscribe:()=>{}});function y({name:e,children:t,registerFill:n,unregisterFill:o}){const c=(e=>{const{getSlot:t,subscribe:n}=Object(r.useContext)(E),[o,c]=Object(r.useState)(t(e));return Object(r.useEffect)((()=>(c(t(e)),n((()=>{c(t(e))})))),[e]),o})(e),i=Object(r.useRef)({name:e,children:t});return Object(r.useLayoutEffect)((()=>(n(e,i.current),()=>o(e,i.current))),[]),Object(r.useLayoutEffect)((()=>{i.current.children=t,c&&c.forceUpdate()}),[t]),Object(r.useLayoutEffect)((()=>{e!==i.current.name&&(o(i.current.name,i.current),i.current.name=e,n(e,i.current))}),[e]),c&&c.node?(Object(s.isFunction)(t)&&(t=t(c.props.fillProps)),Object(r.createPortal)(t,c.node)):null}var x=e=>Object(r.createElement)(E.Consumer,null,(({registerFill:t,unregisterFill:n})=>Object(r.createElement)(y,Object(o.a)({},e,{registerFill:t,unregisterFill:n}))));class T extends r.Component{constructor(){super(...arguments),this.isUnmounted=!1,this.bindNode=this.bindNode.bind(this)}componentDidMount(){const{registerSlot:e}=this.props;e(this.props.name,this)}componentWillUnmount(){const{unregisterSlot:e}=this.props;this.isUnmounted=!0,e(this.props.name,this)}componentDidUpdate(e){const{name:t,unregisterSlot:n,registerSlot:o}=this.props;e.name!==t&&(n(e.name),o(t,this))}bindNode(e){this.node=e}forceUpdate(){this.isUnmounted||super.forceUpdate()}render(){const{children:e,name:t,fillProps:n={},getFills:o}=this.props,c=Object(s.map)(o(t,this),(e=>{const t=Object(s.isFunction)(e.children)?e.children(n):e.children;return r.Children.map(t,((e,t)=>{if(!e||Object(s.isString)(e))return e;const n=e.key||t;return Object(r.cloneElement)(e,{key:n})}))})).filter(Object(s.negate)(r.isEmptyElement));return Object(r.createElement)(r.Fragment,null,Object(s.isFunction)(e)?e(c):c)}}var S=e=>Object(r.createElement)(E.Consumer,null,(({registerSlot:t,unregisterSlot:n,getFills:c})=>Object(r.createElement)(T,Object(o.a)({},e,{registerSlot:t,unregisterSlot:n,getFills:c}))));function C(){const[,e]=Object(r.useState)({}),t=Object(r.useRef)(!0);return Object(r.useEffect)((()=>()=>{t.current=!1}),[]),()=>{t.current&&e({})}}function _({name:e,children:t}){const n=j(e),o=Object(r.useRef)({rerender:C()});return Object(r.useEffect)((()=>(n.registerFill(o),()=>{n.unregisterFill(o)})),[n.registerFill,n.unregisterFill]),n.ref&&n.ref.current?("function"==typeof t&&(t=t(n.fillProps)),Object(r.createPortal)(t,n.ref.current)):null}var L=Object(r.forwardRef)((function({name:e,fillProps:t={},as:n="div",...c},i){const s=Object(r.useContext)(v.a),a=Object(r.useRef)();return Object(r.useLayoutEffect)((()=>(s.registerSlot(e,a,t),()=>{s.unregisterSlot(e,a)})),[s.registerSlot,s.unregisterSlot,e]),Object(r.useLayoutEffect)((()=>{s.updateSlot(e,t)})),Object(r.createElement)(n,Object(o.a)({ref:Object(u.useMergeRefs)([i,a])},c))}));function R(e){return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(x,e),Object(r.createElement)(_,e))}n(14),r.Component;const I=Object(r.forwardRef)((({bubblesVirtually:e,...t},n)=>e?Object(r.createElement)(L,Object(o.a)({},t,{ref:n})):Object(r.createElement)(S,t)));function D(e){return"appear"===e?"top":"left"}const N="Popover";function F(e,t){const{paddingTop:n,paddingBottom:o,paddingLeft:r,paddingRight:c}=(i=t).ownerDocument.defaultView.getComputedStyle(i);var i;const s=n?parseInt(n,10):0,a=o?parseInt(o,10):0,l=r?parseInt(r,10):0,u=c?parseInt(c,10):0;return{x:e.left+l,y:e.top+s,width:e.width-l-u,height:e.height-s-a,left:e.left+l,right:e.right-u,top:e.top+s,bottom:e.bottom-a}}function k(e,t,n){n?e.getAttribute(t)!==n&&e.setAttribute(t,n):e.hasAttribute(t)&&e.removeAttribute(t)}function M(e,t,n=""){e.style[t]!==n&&(e.style[t]=n)}function A(e,t,n){n?e.classList.contains(t)||e.classList.add(t):e.classList.contains(t)&&e.classList.remove(t)}const P=Object(r.forwardRef)((({headerTitle:e,onClose:t,children:n,className:c,noArrow:s=!0,isAlternate:a,position:d="bottom right",range:h,focusOnMount:w="firstElement",anchorRef:O,shouldAnchorIncludePadding:v,anchorRect:E,getAnchorRect:y,expandOnMobile:x,animate:T=!0,onClickOutside:S,onFocusOutside:C,__unstableStickyBoundaryElement:_,__unstableSlotName:L=N,__unstableObserveElement:I,__unstableBoundaryParent:P,__unstableForcePosition:B,__unstableForceXAlignment:V,...W},z)=>{const H=Object(r.useRef)(null),U=Object(r.useRef)(null),q=Object(r.useRef)(),G=Object(u.useViewportMatch)("medium","<"),[K,Y]=Object(r.useState)(),X=j(L),Q=x&&G,[Z,$]=Object(u.useResizeObserver)();s=Q||s,Object(r.useLayoutEffect)((()=>{if(Q)return A(q.current,"is-without-arrow",s),A(q.current,"is-alternate",a),k(q.current,"data-x-axis"),k(q.current,"data-y-axis"),M(q.current,"top"),M(q.current,"left"),M(U.current,"maxHeight"),void M(U.current,"maxWidth");const e=()=>{if(!q.current||!U.current)return;let e=function(e,t,n,o=!1,r,c){if(t)return t;if(n){if(!e.current)return;const t=n(e.current);return b(t,t.ownerDocument||e.current.ownerDocument,c)}if(!1!==o){if(!(o&&window.Range&&window.Element&&window.DOMRect))return;if("function"==typeof(null==o?void 0:o.cloneRange))return b(Object(m.getRectangleFromRange)(o),o.endContainer.ownerDocument,c);if("function"==typeof(null==o?void 0:o.getBoundingClientRect)){const e=b(o.getBoundingClientRect(),o.ownerDocument,c);return r?e:F(e,o)}const{top:e,bottom:t}=o,n=e.getBoundingClientRect(),i=t.getBoundingClientRect(),s=b(new window.DOMRect(n.left,n.top,n.width,i.bottom-n.top),e.ownerDocument,c);return r?s:F(s,o)}if(!e.current)return;const{parentNode:i}=e.current,s=i.getBoundingClientRect();return r?s:F(s,i)}(H,E,y,O,v,q.current);if(!e)return;const{offsetParent:t,ownerDocument:n}=q.current;let o,r=0;if(t&&t!==n.body){const n=t.getBoundingClientRect();r=n.top,e=new window.DOMRect(e.left-n.left,e.top-n.top,e.width,e.height)}var c;P&&(o=null===(c=q.current.closest(".popover-slot"))||void 0===c?void 0:c.parentNode);const i=$.height?$:U.current.getBoundingClientRect(),{popoverTop:l,popoverLeft:u,xAxis:p,yAxis:h,contentHeight:w,contentWidth:g}=function(e,t,n="top",o,r,c,i,s,a){const[l,u="center",m]=n.split(" "),d=function(e,t,n,o,r,c,i,s){const{height:a}=t;if(r){const t=r.getBoundingClientRect().top+a-i;if(e.top<=t)return{yAxis:n,popoverTop:Math.min(e.bottom,t)}}let l=e.top+e.height/2;"bottom"===o?l=e.bottom:"top"===o&&(l=e.top);const u={popoverTop:l,contentHeight:(l-a/2>0?a/2:l)+(l+a/2>window.innerHeight?window.innerHeight-l:a/2)},m={popoverTop:e.top,contentHeight:e.top-10-a>0?a:e.top-10},d={popoverTop:e.bottom,contentHeight:e.bottom+10+a>window.innerHeight?window.innerHeight-10-e.bottom:a};let p,f=n,b=null;if(!r&&!s)if("middle"===n&&u.contentHeight===a)f="middle";else if("top"===n&&m.contentHeight===a)f="top";else if("bottom"===n&&d.contentHeight===a)f="bottom";else{f=m.contentHeight>d.contentHeight?"top":"bottom";const e="top"===f?m.contentHeight:d.contentHeight;b=e!==a?e:null}return p="middle"===f?u.popoverTop:"top"===f?m.popoverTop:d.popoverTop,{yAxis:f,popoverTop:p,contentHeight:b}}(e,t,l,m,o,0,c,s),p=function(e,t,n,o,r,c,i,s,a){const{width:l}=t;"left"===n&&Object(f.isRTL)()?n="right":"right"===n&&Object(f.isRTL)()&&(n="left"),"left"===o&&Object(f.isRTL)()?o="right":"right"===o&&Object(f.isRTL)()&&(o="left");const u=Math.round(e.left+e.width/2),m={popoverLeft:u,contentWidth:(u-l/2>0?l/2:u)+(u+l/2>window.innerWidth?window.innerWidth-u:l/2)};let d=e.left;"right"===o?d=e.right:"middle"===c||a||(d=u);let p=e.right;"left"===o?p=e.left:"middle"===c||a||(p=u);const b={popoverLeft:d,contentWidth:d-l>0?l:d},h={popoverLeft:p,contentWidth:p+l>window.innerWidth?window.innerWidth-p:l};let w,O=n,g=null;if(!r&&!s)if("center"===n&&m.contentWidth===l)O="center";else if("left"===n&&b.contentWidth===l)O="left";else if("right"===n&&h.contentWidth===l)O="right";else{O=b.contentWidth>h.contentWidth?"left":"right";const e="left"===O?b.contentWidth:h.contentWidth;l>window.innerWidth&&(g=window.innerWidth),e!==l&&(O="center",m.popoverLeft=window.innerWidth/2)}if(w="center"===O?m.popoverLeft:"left"===O?b.popoverLeft:h.popoverLeft,i){const e=i.getBoundingClientRect();w=Math.min(w,e.right-l),Object(f.isRTL)()||(w=Math.max(w,0))}return{xAxis:O,popoverLeft:w,contentWidth:g}}(e,t,u,m,o,d.yAxis,i,s,a);return{...p,...d}}(e,i,d,_,q.current,r,o,B,V);"number"==typeof l&&"number"==typeof u&&(M(q.current,"top",l+"px"),M(q.current,"left",u+"px")),A(q.current,"is-without-arrow",s||"center"===p&&"middle"===h),A(q.current,"is-alternate",a),k(q.current,"data-x-axis",p),k(q.current,"data-y-axis",h),M(U.current,"maxHeight","number"==typeof w?w+"px":""),M(U.current,"maxWidth","number"==typeof g?g+"px":""),Y(({left:"right",right:"left"}[p]||"center")+" "+({top:"bottom",bottom:"top"}[h]||"middle"))};e();const{ownerDocument:t}=q.current,{defaultView:n}=t,o=n.setInterval(e,500);let r;const c=()=>{n.cancelAnimationFrame(r),r=n.requestAnimationFrame(e)};n.addEventListener("click",c),n.addEventListener("resize",e),n.addEventListener("scroll",e,!0);const i=function(e){if(e)return e.endContainer?e.endContainer.ownerDocument:e.top?e.top.ownerDocument:e.ownerDocument}(O);let l;return i&&i!==t&&(i.defaultView.addEventListener("resize",e),i.defaultView.addEventListener("scroll",e,!0)),I&&(l=new n.MutationObserver(e),l.observe(I,{attributes:!0})),()=>{n.clearInterval(o),n.removeEventListener("resize",e),n.removeEventListener("scroll",e,!0),n.removeEventListener("click",c),n.cancelAnimationFrame(r),i&&i!==t&&(i.defaultView.removeEventListener("resize",e),i.defaultView.removeEventListener("scroll",e,!0)),l&&l.disconnect()}}),[Q,E,y,O,v,d,$,_,I,P]);const ee=(e,n)=>{if("focus-outside"===e&&C)C(n);else if("focus-outside"===e&&S){const e=new window.MouseEvent("click");Object.defineProperty(e,"target",{get:()=>n.relatedTarget}),l()("Popover onClickOutside prop",{since:"5.3",alternative:"onFocusOutside"}),S(e)}else t&&t()},[te,ne]=Object(u.__experimentalUseDialog)({focusOnMount:w,__unstableOnClose:ee,onClose:ee}),oe=Object(u.useMergeRefs)([q,te,z]),re=Boolean(T&&K)&&function(e){if("loading"===e.type)return i()("components-animate__loading");const{type:t,origin:n=D(t)}=e;if("appear"===t){const[e,t="center"]=n.split(" ");return i()("components-animate__appear",{["is-from-"+t]:"center"!==t,["is-from-"+e]:"middle"!==e})}return"slide-in"===t?i()("components-animate__slide-in","is-from-"+n):void 0}({type:"appear",origin:K});let ce=Object(r.createElement)("div",Object(o.a)({className:i()("components-popover",c,re,{"is-expanded":Q,"is-without-arrow":s,"is-alternate":a})},W,{ref:oe},ne,{tabIndex:"-1"}),Q&&Object(r.createElement)(g,null),Q&&Object(r.createElement)("div",{className:"components-popover__header"},Object(r.createElement)("span",{className:"components-popover__header-title"},e),Object(r.createElement)(J,{className:"components-popover__close",icon:p,onClick:t})),Object(r.createElement)("div",{ref:U,className:"components-popover__content"},Object(r.createElement)("div",{style:{position:"relative"}},Z,n)));return X.ref&&(ce=Object(r.createElement)(R,{name:L},ce)),O||E?ce:Object(r.createElement)("span",{ref:H},ce)}));P.Slot=Object(r.forwardRef)((function({name:e=N},t){return Object(r.createElement)(I,{bubblesVirtually:!0,name:e,className:"popover-slot",ref:t})}));var B=P,V=function({shortcut:e,className:t}){if(!e)return null;let n,o;return Object(s.isString)(e)&&(n=e),Object(s.isObject)(e)&&(n=e.display,o=e.ariaLabel),Object(r.createElement)("span",{className:t,"aria-label":o},n)};const W=Object(r.createElement)("div",{className:"event-catcher"}),z=({eventHandlers:e,child:t,childrenWithPopover:n})=>Object(r.cloneElement)(Object(r.createElement)("span",{className:"disabled-element-wrapper"},Object(r.cloneElement)(W,e),Object(r.cloneElement)(t,{children:n}),","),e),H=({child:e,eventHandlers:t,childrenWithPopover:n})=>Object(r.cloneElement)(e,{...t,children:n}),U=(e,t,n)=>{if(1!==r.Children.count(e))return;const o=r.Children.only(e);"function"==typeof o.props[t]&&o.props[t](n)};var q=function({children:e,position:t,text:n,shortcut:o}){const[c,i]=Object(r.useState)(!1),[a,l]=Object(r.useState)(!1),m=Object(u.useDebounce)(l,700),d=t=>{U(e,"onMouseDown",t),document.addEventListener("mouseup",b),i(!0)},p=t=>{U(e,"onMouseUp",t),document.removeEventListener("mouseup",b),i(!1)},f=e=>"mouseUp"===e?p:"mouseDown"===e?d:void 0,b=f("mouseUp"),h=(t,n)=>o=>{if(U(e,t,o),o.currentTarget.disabled)return;if("focus"===o.type&&c)return;m.cancel();const r=Object(s.includes)(["focus","mouseenter"],o.type);r!==a&&(n?m(r):l(r))},w=()=>{m.cancel(),document.removeEventListener("mouseup",b)};if(Object(r.useEffect)((()=>w),[]),1!==r.Children.count(e))return e;const O={onMouseEnter:h("onMouseEnter",!0),onMouseLeave:h("onMouseLeave"),onClick:h("onClick"),onFocus:h("onFocus"),onBlur:h("onBlur"),onMouseDown:f("mouseDown")},g=r.Children.only(e),{children:v,disabled:j}=g.props,E=j?z:H,y=(({grandchildren:e,isOver:t,position:n,text:o,shortcut:c})=>Object(r.concatChildren)(e,t&&Object(r.createElement)(B,{focusOnMount:!1,position:n,className:"components-tooltip","aria-hidden":"true",animate:!1,noArrow:!0},o,Object(r.createElement)(V,{className:"components-tooltip__shortcut",shortcut:c}))))({grandchildren:v,isOver:a,position:t,text:n,shortcut:o});return E({child:g,eventHandlers:O,childrenWithPopover:y})},G=function({icon:e,className:t,...n}){const c=["dashicon","dashicons","dashicons-"+e,t].filter(Boolean).join(" ");return Object(r.createElement)("span",Object(o.a)({className:c},n))},K=function({icon:e=null,size:t=24,...n}){if("string"==typeof e)return Object(r.createElement)(G,Object(o.a)({icon:e},n));if(Object(r.isValidElement)(e)&&G===e.type)return Object(r.cloneElement)(e,{...n});if("function"==typeof e)return e.prototype instanceof r.Component?Object(r.createElement)(e,{size:t,...n}):e({size:t,...n});if(e&&("svg"===e.type||e.type===d.SVG)){const o={width:t,height:t,...e.props,...n};return Object(r.createElement)(d.SVG,o)}return Object(r.isValidElement)(e)?Object(r.cloneElement)(e,{size:t,...n}):e},Y=n(36);const X=["onMouseDown","onClick"];var J=t.a=Object(r.forwardRef)((function(e,t){const{href:n,target:c,isSmall:a,isPressed:u,isBusy:m,isDestructive:d,className:p,disabled:f,icon:b,iconPosition:h="left",iconSize:w,showTooltip:O,tooltipPosition:g,shortcut:v,label:j,children:E,text:y,variant:x,__experimentalIsFocusable:T,describedBy:S,...C}=function({isDefault:e,isPrimary:t,isSecondary:n,isTertiary:o,isLink:r,variant:c,...i}){let s=c;var a,u,m,d,p;return t&&(null!==(a=s)&&void 0!==a||(s="primary")),o&&(null!==(u=s)&&void 0!==u||(s="tertiary")),n&&(null!==(m=s)&&void 0!==m||(s="secondary")),e&&(l()("Button isDefault prop",{since:"5.4",alternative:'variant="secondary"'}),null!==(d=s)&&void 0!==d||(s="secondary")),r&&(null!==(p=s)&&void 0!==p||(s="link")),{...i,variant:s}}(e),_=i()("components-button",p,{"is-secondary":"secondary"===x,"is-primary":"primary"===x,"is-small":a,"is-tertiary":"tertiary"===x,"is-pressed":u,"is-busy":m,"is-link":"link"===x,"is-destructive":d,"has-text":!!b&&!!E,"has-icon":!!b}),L=f&&!T,R=void 0===n||L?"button":"a",I="a"===R?{href:n,target:c}:{type:"button",disabled:L,"aria-pressed":u};if(f&&T){I["aria-disabled"]=!0;for(const e of X)C[e]=e=>{e.stopPropagation(),e.preventDefault()}}const D=!L&&(O&&j||v||!!j&&(!E||Object(s.isArray)(E)&&!E.length)&&!1!==O),N=S?Object(s.uniqueId)():null,F=C["aria-describedby"]||N,k=Object(r.createElement)(R,Object(o.a)({},I,C,{className:_,"aria-label":C["aria-label"]||j,"aria-describedby":F,ref:t}),b&&"left"===h&&Object(r.createElement)(K,{icon:b,size:w}),y&&Object(r.createElement)(r.Fragment,null,y),b&&"right"===h&&Object(r.createElement)(K,{icon:b,size:w}),E);return D?Object(r.createElement)(r.Fragment,null,Object(r.createElement)(q,{text:S||j,shortcut:v,position:g},k),S&&Object(r.createElement)(Y.a,null,Object(r.createElement)("span",{id:N},S))):Object(r.createElement)(r.Fragment,null,k,S&&Object(r.createElement)(Y.a,null,Object(r.createElement)("span",{id:N},S)))}))},7:function(e,t){e.exports=window.lodash},75:function(e,t){var n,o,r=e.exports={};function c(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===c||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:c}catch(e){n=c}try{o="function"==typeof clearTimeout?clearTimeout:i}catch(e){o=i}}();var a,l=[],u=!1,m=-1;function d(){u&&a&&(u=!1,a.length?l=a.concat(l):m=-1,l.length&&p())}function p(){if(!u){var e=s(d);u=!0;for(var t=l.length;t;){for(a=l,l=[];++m<t;)a&&a[m].run();m=-1,t=l.length}a=null,u=!1,function(e){if(o===clearTimeout)return clearTimeout(e);if((o===i||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(e);try{return o(e)}catch(t){try{return o.call(null,e)}catch(t){return o.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function b(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new f(e,t)),1!==l.length||u||s(p)},f.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=b,r.addListener=b,r.once=b,r.off=b,r.removeListener=b,r.removeAllListeners=b,r.emit=b,r.prependListener=b,r.prependOnceListener=b,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},76:function(e,t,n){"use strict";var o=n(0);t.a=function(e){let{icon:t,size:n=24,...r}=e;return Object(o.cloneElement)(t,{width:n,height:n,...r})}},79:function(e,t,n){"use strict";var o=n(0);n(114),t.a=()=>Object(o.createElement)("span",{className:"wc-block-components-spinner","aria-hidden":"true"})},8:function(e,t,n){"use strict";function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},o.apply(this,arguments)}n.d(t,"a",(function(){return o}))}});