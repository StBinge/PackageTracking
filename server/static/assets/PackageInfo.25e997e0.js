import{u as Se,h as J,f as $e,a as Pe,v as Q,b as Ee,_ as Re}from"./Scanner.a031c341.js";import{a$ as Te,d as F,B as d,D as Z,E as b,G as m,b0 as Fe,H as f,I as a,aP as Be,aQ as Ie,K as O,J as M,L as q,g as R,N as G,a6 as I,aW as Ne,a8 as j,a5 as N,b1 as ke,a0 as De,r as K,a4 as ie,Z as ae,S as le,ab as Le,aL as Me,b2 as Ae,ag as je,a3 as Oe,z as se,b3 as de,$ as X,W as He,b4 as Ve,V as Y,e as We,m as Ue,c as ee,a as H,h as T,w as E,i as V,j as te,ad as Ke,O as oe,o as L,l as W,aT as U,b5 as Ze,aS as qe,_ as Ge}from"./index.fb16821d.js";import{c as Je,e as Qe,_ as Xe,a as Ye}from"./InputGroup.b8fb5fa4.js";let re=!1;function et(){if(!!Te&&!!window.CSS&&!re&&(re=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}var tt=F({name:"ChevronLeft",render(){return d("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L6.20711 8L10.3536 12.1464C10.5488 12.3417 10.5488 12.6583 10.3536 12.8536C10.1583 13.0488 9.84171 13.0488 9.64645 12.8536L5.14645 8.35355C4.95118 8.15829 4.95118 7.84171 5.14645 7.64645L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z",fill:"currentColor"}))}}),ot=F({name:"ChevronRight",render(){return d("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),rt={paddingSmall:"12px 16px 12px",paddingMedium:"19px 24px 20px",paddingLarge:"23px 32px 24px",paddingHuge:"27px 40px 28px",titleFontSizeSmall:"16px",titleFontSizeMedium:"18px",titleFontSizeLarge:"18px",titleFontSizeHuge:"18px",closeIconSize:"18px",closeSize:"22px"};const nt=e=>{const{primaryColor:s,borderRadius:i,lineHeight:t,fontSize:o,cardColor:n,textColor2:p,textColor1:v,dividerColor:u,fontWeightStrong:l,closeIconColor:x,closeIconColorHover:c,closeIconColorPressed:r,closeColorHover:h,closeColorPressed:y,modalColor:_,boxShadow1:g,popoverColor:C,actionColor:z}=e;return Object.assign(Object.assign({},rt),{lineHeight:t,color:n,colorModal:_,colorPopover:C,colorTarget:s,colorEmbedded:z,colorEmbeddedModal:z,colorEmbeddedPopover:z,textColor:p,titleTextColor:v,borderColor:u,actionColor:z,titleFontWeight:l,closeColorHover:h,closeColorPressed:y,closeBorderRadius:i,closeIconColor:x,closeIconColorHover:c,closeIconColorPressed:r,fontSizeSmall:o,fontSizeMedium:o,fontSizeLarge:o,fontSizeHuge:o,boxShadow:g,borderRadius:i})},it={name:"Card",common:Z,self:nt};var at=it,lt=b([m("card",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[Fe({background:"var(--n-color-modal)"}),f("hoverable",[b("&:hover","box-shadow: var(--n-box-shadow);")]),f("content-segmented",[b(">",[a("content",{paddingTop:"var(--n-padding-bottom)"})])]),f("content-soft-segmented",[b(">",[a("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),f("footer-segmented",[b(">",[a("footer",{paddingTop:"var(--n-padding-bottom)"})])]),f("footer-soft-segmented",[b(">",[a("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),b(">",[m("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[a("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),a("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),a("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),a("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),a("content","flex: 1; min-width: 0;"),a("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[b("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),a("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),m("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[b("img",`
 display: block;
 width: 100%;
 `)]),f("bordered",`
 border: 1px solid var(--n-border-color);
 `,[b("&:target","border-color: var(--n-color-target);")]),f("action-segmented",[b(">",[a("action",[b("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),f("content-segmented, content-soft-segmented",[b(">",[a("content",{transition:"border-color 0.3s var(--n-bezier)"},[b("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),f("footer-segmented, footer-soft-segmented",[b(">",[a("footer",{transition:"border-color 0.3s var(--n-bezier)"},[b("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),f("embedded",`
 background-color: var(--n-color-embedded);
 `)]),Be(m("card",`
 background: var(--n-color-modal);
 `,[f("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),Ie(m("card",`
 background: var(--n-color-popover);
 `,[f("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]);const st={title:String,contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],headerExtraClass:String,headerExtraStyle:[Object,String],footerClass:String,footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"}},dt=Object.assign(Object.assign({},M.props),st);var ct=F({name:"Card",props:dt,setup(e){const s=()=>{const{onClose:l}=e;l&&j(l)},{inlineThemeDisabled:i,mergedClsPrefixRef:t,mergedRtlRef:o}=O(e),n=M("Card","-card",lt,at,e,t),p=q("Card",o,t),v=R(()=>{const{size:l}=e,{self:{color:x,colorModal:c,colorTarget:r,textColor:h,titleTextColor:y,titleFontWeight:_,borderColor:g,actionColor:C,borderRadius:z,lineHeight:$,closeIconColor:w,closeIconColorHover:B,closeIconColorPressed:k,closeColorHover:A,closeColorPressed:D,closeBorderRadius:P,closeIconSize:S,closeSize:ue,boxShadow:pe,colorPopover:ge,colorEmbedded:fe,colorEmbeddedModal:ve,colorEmbeddedPopover:he,[N("padding",l)]:be,[N("fontSize",l)]:xe,[N("titleFontSize",l)]:Ce},common:{cubicBezierEaseInOut:_e}}=n.value,{top:ze,left:ye,bottom:we}=Je(be);return{"--n-bezier":_e,"--n-border-radius":z,"--n-color":x,"--n-color-modal":c,"--n-color-popover":ge,"--n-color-embedded":fe,"--n-color-embedded-modal":ve,"--n-color-embedded-popover":he,"--n-color-target":r,"--n-text-color":h,"--n-line-height":$,"--n-action-color":C,"--n-title-text-color":y,"--n-title-font-weight":_,"--n-close-icon-color":w,"--n-close-icon-color-hover":B,"--n-close-icon-color-pressed":k,"--n-close-color-hover":A,"--n-close-color-pressed":D,"--n-border-color":g,"--n-box-shadow":pe,"--n-padding-top":ze,"--n-padding-bottom":we,"--n-padding-left":ye,"--n-font-size":xe,"--n-title-font-size":Ce,"--n-close-size":ue,"--n-close-icon-size":S,"--n-close-border-radius":P}}),u=i?G("card",R(()=>e.size[0]),v,e):void 0;return{rtlEnabled:p,mergedClsPrefix:t,mergedTheme:n,handleCloseClick:s,cssVars:i?void 0:v,themeClass:u==null?void 0:u.themeClass,onRender:u==null?void 0:u.onRender}},render(){const{segmented:e,bordered:s,hoverable:i,mergedClsPrefix:t,rtlEnabled:o,onRender:n,embedded:p,tag:v,$slots:u}=this;return n==null||n(),d(v,{class:[`${t}-card`,this.themeClass,p&&`${t}-card--embedded`,{[`${t}-card--rtl`]:o,[`${t}-card--content${typeof e!="boolean"&&e.content==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.content,[`${t}-card--footer${typeof e!="boolean"&&e.footer==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.footer,[`${t}-card--action-segmented`]:e===!0||e!==!1&&e.action,[`${t}-card--bordered`]:s,[`${t}-card--hoverable`]:i}],style:this.cssVars,role:this.role},I(u.cover,l=>l&&d("div",{class:`${t}-card-cover`,role:"none"},l)),I(u.header,l=>l||this.title||this.closable?d("div",{class:[`${t}-card-header`,this.headerClass],style:this.headerStyle},d("div",{class:`${t}-card-header__main`,role:"heading"},l||this.title),I(u["header-extra"],x=>x&&d("div",{class:[`${t}-card-header__extra`,this.headerExtraClass],style:this.headerExtraStyle},x)),this.closable?d(Ne,{clsPrefix:t,class:`${t}-card-header__close`,onClick:this.handleCloseClick,absolute:!0}):null):null),I(u.default,l=>l&&d("div",{class:[`${t}-card__content`,this.contentClass],style:this.contentStyle,role:"none"},l)),I(u.footer,l=>l&&[d("div",{class:[`${t}-card__footer`,this.footerClass],style:this.footerStyle,role:"none"},l)]),I(u.action,l=>l&&d("div",{class:`${t}-card__action`,role:"none"},l)))}});const mt=e=>{const{fontWeight:s,textColor1:i,textColor2:t,textColorDisabled:o,dividerColor:n,fontSize:p}=e;return{titleFontSize:p,titleFontWeight:s,dividerColor:n,titleTextColor:i,titleTextColorDisabled:o,fontSize:p,textColor:t,arrowColor:t,arrowColorDisabled:o,itemMargin:"16px 0 0 0",titlePadding:"16px 0 0 0"}},ut={name:"Collapse",common:Z,self:mt};var pt=ut,gt=m("collapse","width: 100%;",[m("collapse-item",`
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 margin: var(--n-item-margin);
 `,[f("disabled",[a("header","cursor: not-allowed;",[a("header-main",`
 color: var(--n-title-text-color-disabled);
 `),m("collapse-item-arrow",`
 color: var(--n-arrow-color-disabled);
 `)])]),m("collapse-item","margin-left: 32px;"),b("&:first-child","margin-top: 0;"),b("&:first-child >",[a("header","padding-top: 0;")]),f("left-arrow-placement",[a("header",[m("collapse-item-arrow","margin-right: 4px;")])]),f("right-arrow-placement",[a("header",[m("collapse-item-arrow","margin-left: 4px;")])]),a("content-wrapper",[a("content-inner","padding-top: 16px;"),ke({duration:"0.15s"})]),f("active",[a("header",[f("active",[m("collapse-item-arrow","transform: rotate(90deg);")])])]),b("&:not(:first-child)","border-top: 1px solid var(--n-divider-color);"),De("disabled",[f("trigger-area-main",[a("header",[a("header-main","cursor: pointer;"),m("collapse-item-arrow","cursor: default;")])]),f("trigger-area-arrow",[a("header",[m("collapse-item-arrow","cursor: pointer;")])]),f("trigger-area-extra",[a("header",[a("header-extra","cursor: pointer;")])])]),a("header",`
 font-size: var(--n-title-font-size);
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition: color .3s var(--n-bezier);
 position: relative;
 padding: var(--n-title-padding);
 color: var(--n-title-text-color);
 `,[a("header-main",`
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 color: var(--n-title-text-color);
 `),a("header-extra",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),m("collapse-item-arrow",`
 display: flex;
 transition:
 transform .15s var(--n-bezier),
 color .3s var(--n-bezier);
 font-size: 18px;
 color: var(--n-arrow-color);
 `)])])]);const ft=Object.assign(Object.assign({},M.props),{defaultExpandedNames:{type:[Array,String],default:null},expandedNames:[Array,String],arrowPlacement:{type:String,default:"left"},accordion:{type:Boolean,default:!1},displayDirective:{type:String,default:"if"},triggerAreas:{type:Array,default:()=>["main","extra","arrow"]},onItemHeaderClick:[Function,Array],"onUpdate:expandedNames":[Function,Array],onUpdateExpandedNames:[Function,Array],onExpandedNamesChange:{type:[Function,Array],validator:()=>!0,default:void 0}}),ce=ae("n-collapse");var vt=F({name:"Collapse",props:ft,setup(e,{slots:s}){const{mergedClsPrefixRef:i,inlineThemeDisabled:t,mergedRtlRef:o}=O(e),n=K(e.defaultExpandedNames),p=R(()=>e.expandedNames),v=Qe(p,n),u=M("Collapse","-collapse",gt,pt,e,i);function l(_){const{"onUpdate:expandedNames":g,onUpdateExpandedNames:C,onExpandedNamesChange:z}=e;C&&j(C,_),g&&j(g,_),z&&j(z,_),n.value=_}function x(_){const{onItemHeaderClick:g}=e;g&&j(g,_)}function c(_,g,C){const{accordion:z}=e,{value:$}=v;if(z)_?(l([g]),x({name:g,expanded:!0,event:C})):(l([]),x({name:g,expanded:!1,event:C}));else if(!Array.isArray($))l([g]),x({name:g,expanded:!0,event:C});else{const w=$.slice(),B=w.findIndex(k=>g===k);~B?(w.splice(B,1),l(w),x({name:g,expanded:!1,event:C})):(w.push(g),l(w),x({name:g,expanded:!0,event:C}))}}ie(ce,{props:e,mergedClsPrefixRef:i,expandedNamesRef:v,slots:s,toggleItem:c});const r=q("Collapse",o,i),h=R(()=>{const{common:{cubicBezierEaseInOut:_},self:{titleFontWeight:g,dividerColor:C,titlePadding:z,titleTextColor:$,titleTextColorDisabled:w,textColor:B,arrowColor:k,fontSize:A,titleFontSize:D,arrowColorDisabled:P,itemMargin:S}}=u.value;return{"--n-font-size":A,"--n-bezier":_,"--n-text-color":B,"--n-divider-color":C,"--n-title-padding":z,"--n-title-font-size":D,"--n-title-text-color":$,"--n-title-text-color-disabled":w,"--n-title-font-weight":g,"--n-arrow-color":k,"--n-arrow-color-disabled":P,"--n-item-margin":S}}),y=t?G("collapse",void 0,h,e):void 0;return{rtlEnabled:r,mergedTheme:u,mergedClsPrefix:i,cssVars:t?void 0:h,themeClass:y==null?void 0:y.themeClass,onRender:y==null?void 0:y.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),d("div",{class:[`${this.mergedClsPrefix}-collapse`,this.rtlEnabled&&`${this.mergedClsPrefix}-collapse--rtl`,this.themeClass],style:this.cssVars},this.$slots)}}),ht=F({name:"CollapseItemContent",props:{displayDirective:{type:String,required:!0},show:Boolean,clsPrefix:{type:String,required:!0}},setup(e){return{onceTrue:Se(le(e,"show"))}},render(){return d(Ae,null,{default:()=>{const{show:e,displayDirective:s,onceTrue:i,clsPrefix:t}=this,o=s==="show"&&i,n=d("div",{class:`${t}-collapse-item__content-wrapper`},d("div",{class:`${t}-collapse-item__content-inner`},this.$slots));return o?Le(n,[[Me,e]]):e?n:null}})}});const bt={title:String,name:[String,Number],disabled:Boolean,displayDirective:String};var xt=F({name:"CollapseItem",props:bt,setup(e){const{mergedRtlRef:s}=O(e),i=je(),t=Oe(()=>{var c;return(c=e.name)!==null&&c!==void 0?c:i}),o=se(ce);o||de("collapse-item","`n-collapse-item` must be placed inside `n-collapse`.");const{expandedNamesRef:n,props:p,mergedClsPrefixRef:v,slots:u}=o,l=R(()=>{const{value:c}=n;if(Array.isArray(c)){const{value:r}=t;return!~c.findIndex(h=>h===r)}else if(c){const{value:r}=t;return r!==c}return!0});return{rtlEnabled:q("Collapse",s,v),collapseSlots:u,randomName:i,mergedClsPrefix:v,collapsed:l,triggerAreas:le(p,"triggerAreas"),mergedDisplayDirective:R(()=>{const{displayDirective:c}=e;return c||p.displayDirective}),arrowPlacement:R(()=>p.arrowPlacement),handleClick(c){let r="main";J(c,"arrow")&&(r="arrow"),J(c,"extra")&&(r="extra"),!!p.triggerAreas.includes(r)&&o&&!e.disabled&&o.toggleItem(l.value,t.value,c)}}},render(){const{collapseSlots:e,$slots:s,arrowPlacement:i,collapsed:t,mergedDisplayDirective:o,mergedClsPrefix:n,disabled:p,triggerAreas:v}=this,u=X(s.header,{collapsed:t},()=>[this.title]),l=s["header-extra"]||e["header-extra"],x=s.arrow||e.arrow;return d("div",{class:[`${n}-collapse-item`,`${n}-collapse-item--${i}-arrow-placement`,p&&`${n}-collapse-item--disabled`,!t&&`${n}-collapse-item--active`,v.map(c=>`${n}-collapse-item--trigger-area-${c}`)]},d("div",{class:[`${n}-collapse-item__header`,!t&&`${n}-collapse-item__header--active`]},d("div",{class:`${n}-collapse-item__header-main`,onClick:this.handleClick},i==="right"&&u,d("div",{class:`${n}-collapse-item-arrow`,key:this.rtlEnabled?0:1,"data-arrow":!0},X(x,{collapsed:t},()=>{var c;return[d(He,{clsPrefix:n},{default:(c=e.expandIcon)!==null&&c!==void 0?c:()=>this.rtlEnabled?d(tt,null):d(ot,null)})]})),i==="left"&&u),Ve(l,{collapsed:t},c=>d("div",{class:`${n}-collapse-item__header-extra`,onClick:this.handleClick,"data-extra":!0},c))),d(ht,{clsPrefix:n,displayDirective:o,show:!t},s))}}),Ct={titleMarginMedium:"0 0 6px 0",titleMarginLarge:"-2px 0 6px 0",titleFontSizeMedium:"14px",titleFontSizeLarge:"16px",iconSizeMedium:"14px",iconSizeLarge:"14px"};const _t=e=>{const{textColor3:s,infoColor:i,errorColor:t,successColor:o,warningColor:n,textColor1:p,textColor2:v,railColor:u,fontWeightStrong:l,fontSize:x}=e;return Object.assign(Object.assign({},Ct),{contentFontSize:x,titleFontWeight:l,circleBorder:`2px solid ${s}`,circleBorderInfo:`2px solid ${i}`,circleBorderError:`2px solid ${t}`,circleBorderSuccess:`2px solid ${o}`,circleBorderWarning:`2px solid ${n}`,iconColor:s,iconColorInfo:i,iconColorError:t,iconColorSuccess:o,iconColorWarning:n,titleTextColor:p,contentTextColor:v,metaTextColor:s,lineColor:u})},zt={name:"Timeline",common:Z,self:_t};var yt=zt;const ne=1.25;var wt=m("timeline",`
 position: relative;
 width: 100%;
 display: flex;
 flex-direction: column;
 line-height: ${ne};
`,[f("horizontal",`
 flex-direction: row;
 `,[b(">",[m("timeline-item",`
 flex-shrink: 0;
 padding-right: 40px;
 `,[f("dashed-line-type",[b(">",[m("timeline-item-timeline",[a("line",`
 background-image: linear-gradient(90deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 10px 1px;
 `)])])]),b(">",[m("timeline-item-content",`
 margin-top: calc(var(--n-icon-size) + 12px);
 `,[b(">",[a("meta",`
 margin-top: 6px;
 margin-bottom: unset;
 `)])]),m("timeline-item-timeline",`
 width: 100%;
 height: calc(var(--n-icon-size) + 12px);
 `,[a("line",`
 left: var(--n-icon-size);
 top: calc(var(--n-icon-size) / 2 - 1px);
 right: 0px;
 width: unset;
 height: 2px;
 `)])])])])]),f("right-placement",[m("timeline-item",[m("timeline-item-content",`
 text-align: right;
 margin-right: calc(var(--n-icon-size) + 12px);
 `),m("timeline-item-timeline",`
 width: var(--n-icon-size);
 right: 0;
 `)])]),f("left-placement",[m("timeline-item",[m("timeline-item-content",`
 margin-left: calc(var(--n-icon-size) + 12px);
 `),m("timeline-item-timeline",`
 left: 0;
 `)])]),m("timeline-item",`
 position: relative;
 `,[b("&:last-child",[m("timeline-item-timeline",[a("line",`
 display: none;
 `)]),m("timeline-item-content",[a("meta",`
 margin-bottom: 0;
 `)])]),m("timeline-item-content",[a("title",`
 margin: var(--n-title-margin);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),a("content",`
 transition: color .3s var(--n-bezier);
 font-size: var(--n-content-font-size);
 color: var(--n-content-text-color);
 `),a("meta",`
 transition: color .3s var(--n-bezier);
 font-size: 12px;
 margin-top: 6px;
 margin-bottom: 20px;
 color: var(--n-meta-text-color);
 `)]),f("dashed-line-type",[m("timeline-item-timeline",[a("line",`
 --n-color-start: var(--n-line-color);
 transition: --n-color-start .3s var(--n-bezier);
 background-color: transparent;
 background-image: linear-gradient(180deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 1px 10px;
 `)])]),m("timeline-item-timeline",`
 width: calc(var(--n-icon-size) + 12px);
 position: absolute;
 top: calc(var(--n-title-font-size) * ${ne} / 2 - var(--n-icon-size) / 2);
 height: 100%;
 `,[a("circle",`
 border: var(--n-circle-border);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 border-radius: var(--n-icon-size);
 box-sizing: border-box;
 `),a("icon",`
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 display: flex;
 align-items: center;
 justify-content: center;
 `),a("line",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 top: var(--n-icon-size);
 left: calc(var(--n-icon-size) / 2 - 1px);
 bottom: 0px;
 width: 2px;
 background-color: var(--n-line-color);
 `)])])]);const St=Object.assign(Object.assign({},M.props),{horizontal:Boolean,itemPlacement:{type:String,default:"left"},size:{type:String,default:"medium"},iconSize:Number}),me=ae("n-timeline");var $t=F({name:"Timeline",props:St,setup(e,{slots:s}){const{mergedClsPrefixRef:i}=O(e),t=M("Timeline","-timeline",wt,yt,e,i);return ie(me,{props:e,mergedThemeRef:t,mergedClsPrefixRef:i}),()=>{const{value:o}=i;return d("div",{class:[`${o}-timeline`,e.horizontal&&`${o}-timeline--horizontal`,`${o}-timeline--${e.size}-size`,!e.horizontal&&`${o}-timeline--${e.itemPlacement}-placement`]},s)}}});const Pt={time:[String,Number],title:String,content:String,color:String,lineType:{type:String,default:"default"},type:{type:String,default:"default"}};var Et=F({name:"TimelineItem",props:Pt,setup(e){const s=se(me);s||de("timeline-item","`n-timeline-item` must be placed inside `n-timeline`."),et();const{inlineThemeDisabled:i}=O(),t=R(()=>{const{props:{size:n,iconSize:p},mergedThemeRef:v}=s,{type:u}=e,{self:{titleTextColor:l,contentTextColor:x,metaTextColor:c,lineColor:r,titleFontWeight:h,contentFontSize:y,[N("iconSize",n)]:_,[N("titleMargin",n)]:g,[N("titleFontSize",n)]:C,[N("circleBorder",u)]:z,[N("iconColor",u)]:$},common:{cubicBezierEaseInOut:w}}=v.value;return{"--n-bezier":w,"--n-circle-border":z,"--n-icon-color":$,"--n-content-font-size":y,"--n-content-text-color":x,"--n-line-color":r,"--n-meta-text-color":c,"--n-title-font-size":C,"--n-title-font-weight":h,"--n-title-margin":g,"--n-title-text-color":l,"--n-icon-size":$e(p)||_}}),o=i?G("timeline-item",R(()=>{const{props:{size:n,iconSize:p}}=s,{type:v}=e;return`${n[0]}${p||"a"}${v[0]}`}),t,s.props):void 0;return{mergedClsPrefix:s.mergedClsPrefixRef,cssVars:i?void 0:t,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){const{mergedClsPrefix:e,color:s,onRender:i,$slots:t}=this;return i==null||i(),d("div",{class:[`${e}-timeline-item`,this.themeClass,`${e}-timeline-item--${this.type}-type`,`${e}-timeline-item--${this.lineType}-line-type`],style:this.cssVars},d("div",{class:`${e}-timeline-item-timeline`},d("div",{class:`${e}-timeline-item-timeline__line`}),I(t.icon,o=>o?d("div",{class:`${e}-timeline-item-timeline__icon`,style:{color:s}},o):d("div",{class:`${e}-timeline-item-timeline__circle`,style:{borderColor:s}}))),d("div",{class:`${e}-timeline-item-content`},I(t.header,o=>o||this.title?d("div",{class:`${e}-timeline-item-content__title`},o||this.title):null),d("div",{class:`${e}-timeline-item-content__content`},Y(t.default,()=>[this.content])),d("div",{class:`${e}-timeline-item-content__meta`},Y(t.footer,()=>[this.time]))))}});const Rt={class:"info-panel"},Tt={class:"package-info"},Ft={class:"records-info"};var Bt=F({__name:"PackageInfo",setup(e){const s=We(),i=K(!1),t=K(""),o=K(),n=R(()=>t.value?Q(t.value)?"success":"error":"warning");Ue(t,async r=>{if(Q(r))try{o.value=await Ee(r,!0),o.value||s.warning("\u672A\u67E5\u8BE2\u5230\u5305\u88F9, \u8BF7\u786E\u8BA4\u5305\u88F9\u662F\u5426\u53D1\u51FA!")}catch(h){s.error("\u83B7\u53D6\u5305\u88F9\u4FE1\u606F\u5931\u8D25:"+h)}});function p(r){console.debug("Get Code from scanner:",r),t.value=r,i.value=!1}function v(r){const h=new Map;return h.set("\u5B8C\u6574","success"),h.set("\u635F\u574F","warning"),h.set("\u4E22\u5931","error"),h.get(r.status)||"default"}function u(r){return r!=null&&r.signed?"success":"default"}function l(r){return r?r.signed?"\u5DF2\u7B7E\u6536":r.posted?"\u8FD0\u9001\u4E2D":"\u672A\u53D1\u51FA":"\u5305\u88F9\u4E0D\u5B58\u5728"}function x(r){return!(r!=null&&r.records)||r.records.length==0?"error":v(r.records[r.records.length-1])}function c(r){return!(r!=null&&r.records)||r.records.length==0?"":r.records[r.records.length-1].status}return(r,h)=>{var D;const y=Ye,_=qe,g=Xe,C=Re,z=ct,$=xt,w=vt,B=Et,k=$t,A=Pe;return L(),ee(oe,null,[H("div",Rt,[H("div",Tt,[T(g,null,{default:E(()=>[T(y,{status:n.value,value:t.value,"onUpdate:value":h[0]||(h[0]=P=>t.value=P),placeholder:"\u8BF7\u8F93\u5165\u5305\u88F9\u7801\u6216\u8005\u626B\u7801"},null,8,["status","value"]),T(_,{type:"primary",onClick:h[1]||(h[1]=P=>i.value=!0)},{default:E(()=>[W("\u626B\u7801")]),_:1})]),_:1}),o.value?(L(),V(z,{key:0,title:(D=o.value)==null?void 0:D.content,size:"small"},{default:E(()=>[T(C,{type:u(o.value)},{default:E(()=>[W(U(l(o.value)),1)]),_:1},8,["type"]),T(C,{type:x(o.value)},{default:E(()=>[W(U(c(o.value)),1)]),_:1},8,["type"])]),_:1},8,["title"])):te("",!0)]),H("div",Ft,[T(k,null,{default:E(()=>{var P;return[(L(!0),ee(oe,null,Ze((P=o.value)==null?void 0:P.records,S=>(L(),V(B,{type:v(S),title:S.location,time:S.datetime},{default:E(()=>[T(w,null,{default:E(()=>[T($,{title:S.user},{default:E(()=>[T(C,{type:v(S)},{default:E(()=>[W(U(S.status),1)]),_:2},1032,["type"]),H("p",null,U(S.comment),1)]),_:2},1032,["title"])]),_:2},1024)]),_:2},1032,["type","title","time"]))),256))]}),_:1})])]),(L(),V(Ke,{to:"body"},[i.value?(L(),V(A,{key:0,onClose:h[2]||(h[2]=P=>i.value=!1),onOk:p})):te("",!0)]))],64)}}});var Dt=Ge(Bt,[["__scopeId","data-v-4c4371dc"]]);export{Dt as default};
