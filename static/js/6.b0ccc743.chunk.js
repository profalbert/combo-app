(this["webpackJsonpapp-minin"]=this["webpackJsonpapp-minin"]||[]).push([[6],{282:function(e,t,a){"use strict";function n(e){return e}a.d(t,"a",(function(){return n}))},305:function(e,t,a){"use strict";a.r(t);var n=a(70),o=a(0),c=a.n(o),r=a(34),l=a(5),i=a(282),s=a(2),d=a(1),p=(a(4),a(3));var u=o.createContext(),m=o.forwardRef((function(e,t){var a=e.classes,n=e.className,c=e.component,r=void 0===c?"table":c,l=e.padding,i=void 0===l?"default":l,m=e.size,b=void 0===m?"medium":m,g=e.stickyHeader,f=void 0!==g&&g,h=Object(s.a)(e,["classes","className","component","padding","size","stickyHeader"]),v=o.useMemo((function(){return{padding:i,size:b,stickyHeader:f}}),[i,b,f]);return o.createElement(u.Provider,{value:v},o.createElement(r,Object(d.a)({role:"table"===r?null:"table",ref:t,className:Object(p.a)(a.root,n,f&&a.stickyHeader)},h)))})),b=Object(l.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(d.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(m);var g=o.createContext(),f={variant:"body"},h=o.forwardRef((function(e,t){var a=e.classes,n=e.className,c=e.component,r=void 0===c?"tbody":c,l=Object(s.a)(e,["classes","className","component"]);return(o.createElement(g.Provider,{value:f},o.createElement(r,Object(d.a)({className:Object(p.a)(a.root,n),ref:t,role:"tbody"===r?null:"rowgroup"},l))))})),v=Object(l.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(h),y=a(10),j=a(18),O=o.forwardRef((function(e,t){var a,n,c=e.align,r=void 0===c?"inherit":c,l=e.classes,i=e.className,m=e.component,b=e.padding,f=e.scope,h=e.size,v=e.sortDirection,j=e.variant,O=Object(s.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),x=o.useContext(u),E=o.useContext(g),C=E&&"head"===E.variant;m?(n=m,a=C?"columnheader":"cell"):n=C?"th":"td";var N=f;!N&&C&&(N="col");var w=b||(x&&x.padding?x.padding:"default"),k=h||(x&&x.size?x.size:"medium"),R=j||E&&E.variant,z=null;return v&&(z="asc"===v?"ascending":"descending"),o.createElement(n,Object(d.a)({ref:t,className:Object(p.a)(l.root,l[R],i,"inherit"!==r&&l["align".concat(Object(y.a)(r))],"default"!==w&&l["padding".concat(Object(y.a)(w))],"medium"!==k&&l["size".concat(Object(y.a)(k))],"head"===R&&x&&x.stickyHeader&&l.stickyHeader),"aria-sort":z,role:a,scope:N},O))})),x=Object(l.a)((function(e){return{root:Object(d.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(j.d)(Object(j.b)(e.palette.divider,1),.88):Object(j.a)(Object(j.b)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0px 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(O),E=o.forwardRef((function(e,t){var a=e.classes,n=e.className,c=e.component,r=void 0===c?"div":c,l=Object(s.a)(e,["classes","className","component"]);return(o.createElement(r,Object(d.a)({ref:t,className:Object(p.a)(a.root,n)},l)))})),C=Object(l.a)({root:{width:"100%",overflowX:"auto"}},{name:"MuiTableContainer"})(E),N={variant:"head"},w=o.forwardRef((function(e,t){var a=e.classes,n=e.className,c=e.component,r=void 0===c?"thead":c,l=Object(s.a)(e,["classes","className","component"]);return(o.createElement(g.Provider,{value:N},o.createElement(r,Object(d.a)({className:Object(p.a)(a.root,n),ref:t,role:"thead"===r?null:"rowgroup"},l))))})),k=Object(l.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(w),R=o.forwardRef((function(e,t){var a=e.classes,n=e.className,c=e.component,r=void 0===c?"tr":c,l=e.hover,i=void 0!==l&&l,u=e.selected,m=void 0!==u&&u,b=Object(s.a)(e,["classes","className","component","hover","selected"]),f=o.useContext(g);return o.createElement(r,Object(d.a)({ref:t,className:Object(p.a)(a.root,n,f&&{head:a.head,footer:a.footer}[f.variant],i&&a.hover,m&&a.selected),role:"tr"===r?null:"row"},b))})),z=Object(l.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:Object(j.b)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(R),T=a(212),A=a(57),H=a(56),M=a(58),P=a(35),S=a(47),L=Object(l.a)((function(e){return Object(i.a)({head:{backgroundColor:A.a[500],color:e.palette.common.white},body:{fontSize:14}})}))(x),$=Object(l.a)((function(e){return Object(i.a)({root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.background.default}}})}))(z),q={requestCoins:P.d},D=Object(r.b)((function(e){return{coinsProps:e.mainApp.coins}}),q)((function(e){var t=e.coinsProps,a=e.requestCoins,r=Object(o.useState)(t),l=Object(n.a)(r,2),i=l[0],s=l[1],d=Object(o.useState)(!1),p=Object(n.a)(d,2),u=p[0],m=p[1];return Object(o.useEffect)((function(){u||(a(),s(t),console.log("Redraw coins"),m(!0),setTimeout((function(){m(!1)}),3e3))}),[i,u,t,a]),i.length<1?c.a.createElement("div",{className:"secondPreloader"},c.a.createElement(S.a,null)):c.a.createElement("div",{className:"CryptoContainer"},c.a.createElement("h1",{className:"CryptoTitle"},"Crypto currencies and their courses"),c.a.createElement(C,{component:T.a},c.a.createElement(b,{className:"coinsTable","aria-label":"customized table"},c.a.createElement(k,null,c.a.createElement(z,null,c.a.createElement(L,null,"Pair"),c.a.createElement(L,null,"Coin"),c.a.createElement(L,null,"Last price"),c.a.createElement(L,{align:"right"},"24h change"))),c.a.createElement(v,null,i.map((function(e){return c.a.createElement($,{key:e.s},c.a.createElement(L,{component:"th",scope:"row"},c.a.createElement("span",null,"".concat(e.b)),c.a.createElement("span",{className:"CryptoContainerPairSecondary"}," ","/ ".concat(e.q))),c.a.createElement(L,null,e.an),c.a.createElement(L,null,e.c),c.a.createElement(L,{style:{color:e.c<e.o?H.a.A400:e.c>e.o?M.a.A700:"#000000de"},align:"right"},"\n                                  ".concat(e.c<e.o?"-":e.c>e.o?"+":"").concat(Math.abs(100*(e.c/e.o-1)).toFixed(2),"%")))}))))))}));t.default=D}}]);
//# sourceMappingURL=6.b0ccc743.chunk.js.map