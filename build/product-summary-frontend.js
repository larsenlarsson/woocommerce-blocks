(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[79],{111:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var c=n(26),o=n(20);const s=t=>Object(c.a)(t)?JSON.parse(t)||{}:Object(o.a)(t)?t:{}},20:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return o}));const c=t=>!(t=>null===t)(t)&&t instanceof Object&&t.constructor===Object;function o(t,e){return c(t)&&e in t}},279:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var c=n(55),o=n(20),s=n(111);const r=t=>{const e=Object(o.a)(t)?t:{},n=Object(s.a)(e.style);return Object(c.__experimentalUseColorProps)({...e,style:n})}},286:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var c=n(20),o=n(26),s=n(111);const r=t=>{const e=Object(c.a)(t)?t:{},n=Object(s.a)(e.style),r=Object(c.a)(n.typography)?n.typography:{},a=Object(o.a)(r.fontFamily)?r.fontFamily:"";return{className:e.fontFamily?`has-${e.fontFamily}-font-family`:a,style:{fontSize:e.fontSize?`var(--wp--preset--font-size--${e.fontSize})`:r.fontSize,fontStyle:r.fontStyle,fontWeight:r.fontWeight,letterSpacing:r.letterSpacing,lineHeight:r.lineHeight,textDecoration:r.textDecoration,textTransform:r.textTransform}}}},343:function(t,e,n){"use strict";var c=n(0),o=n(133),s=n(134);const r=t=>{const e=t.indexOf("</p>");return-1===e?t:t.substr(0,e+4)},a=t=>t.replace(/<\/?[a-z][^>]*?>/gi,""),i=(t,e)=>t.replace(/[\s|\.\,]+$/i,"")+e,u=function(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"&hellip;";const c=a(t),o=c.split(" ").splice(0,e).join(" ");return Object(s.autop)(i(o,n))},l=function(t,e){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"&hellip;";const o=a(t),r=o.slice(0,e);if(n)return Object(s.autop)(i(r,c));const u=r.match(/([\s]+)/g),l=u?u.length:0,p=o.slice(0,e+l);return Object(s.autop)(i(p,c))};e.a=t=>{let{source:e,maxLength:n=15,countType:a="words",className:i="",style:p={}}=t;const f=Object(c.useMemo)(()=>function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"words";const c=Object(s.autop)(t),a=Object(o.count)(c,n);if(a<=e)return c;const i=r(c),p=Object(o.count)(i,n);return p<=e?i:"words"===n?u(i,e):l(i,e,"characters_including_spaces"===n)}(e,n,a),[e,n,a]);return Object(c.createElement)(c.RawHTML,{style:p,className:i},f)}},419:function(t,e){},462:function(t,e,n){"use strict";n.r(e);var c=n(0),o=n(5),s=n.n(o),r=n(343),a=n(56),i=n(59),u=n(279),l=n(286),p=n(142);n(419),e.default=Object(p.withProductDataContext)(t=>{const{className:e}=t,{parentClassName:n}=Object(i.useInnerBlockLayoutContext)(),{product:o}=Object(i.useProductDataContext)(),p=Object(u.a)(t),f=Object(l.a)(t);if(!o)return Object(c.createElement)("div",{className:s()(e,"wc-block-components-product-summary",{[n+"__product-summary"]:n})});const m=o.short_description?o.short_description:o.description;return m?Object(c.createElement)(r.a,{className:s()(e,p.className,"wc-block-components-product-summary",{[n+"__product-summary"]:n}),source:m,maxLength:150,countType:a.o.wordCountType||"words",style:{...p.style,...f.style}}):null})}}]);