(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[37],{336:function(o,c,t){"use strict";t.r(c),t.d(c,"Block",(function(){return p}));var e=t(6),n=t.n(e),s=t(0),r=t(1),a=t(4),l=t.n(a),i=t(27),k=t(110),u=t(97),d=t(106),b=t(52);t(358);const p=o=>{const{className:c}=o,{parentClassName:t}=Object(i.useInnerBlockLayoutContext)(),{product:e}=Object(i.useProductDataContext)(),a=Object(k.a)(o),b=Object(u.a)(o),p=Object(d.a)(o);if(!e.id)return null;const w=!!e.is_in_stock,m=e.low_stock_remaining,O=e.is_on_backorder;return Object(s.createElement)("div",n()({className:l()(c,{[t+"__stock-indicator"]:t,"wc-block-components-product-stock-indicator--in-stock":w,"wc-block-components-product-stock-indicator--out-of-stock":!w,"wc-block-components-product-stock-indicator--low-stock":!!m,"wc-block-components-product-stock-indicator--available-on-backorder":!!O,...o.isDescendantOfAllProducts&&{[a.className]:a.className,[b.className]:b.className,"wc-block-components-product-stock-indicator wp-block-woocommerce-product-stock-indicator":!0}})},o.isDescendantOfAllProducts&&{style:{...a.style,...b.style,...p.style}}),(o=>{let{isInStock:c=!1,isLowStock:t=!1,lowStockAmount:e=null,isOnBackorder:n=!1}=o;return t&&null!==e?Object(r.sprintf)(
/* translators: %d stock amount (number of items in stock for product) */
Object(r.__)("%d left in stock","woo-gutenberg-products-block"),e):n?Object(r.__)("Available on backorder","woo-gutenberg-products-block"):c?Object(r.__)("In stock","woo-gutenberg-products-block"):Object(r.__)("Out of stock","woo-gutenberg-products-block")})({isInStock:w,isLowStock:!!m,lowStockAmount:m,isOnBackorder:O}))};c.default=Object(b.withProductDataContext)(p)},358:function(o,c){}}]);