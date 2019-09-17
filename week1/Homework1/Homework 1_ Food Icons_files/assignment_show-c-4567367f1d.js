(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[246,575],{KuFa:function(e,t,n){"use strict"
n.r(t)
var r=n("An8g")
var o=n("u7Gu")
var i=n("EcmN")
var a=n("ouhR")
var c=n.n(a)
var s=n("q1tI")
var l=n.n(s)
var p=n("i8i4")
var u=n.n(p)
var d=n("x1Tw")
var f=n("Qyje")
var h=n.n(f)
var g=n("Et5h")
var b=n("7FZx")
var _=n("FIFq")
var v=n.n(_)
var m=function(e,t){return function(){return e.apply(t,arguments)}},E=function(e,t){for(var n in t)L.call(t,n)&&(e[n]=t[n])
function r(){this.constructor=e}r.prototype=t.prototype
e.prototype=new r
e.__super__=t.prototype
return e},L={}.hasOwnProperty
var y=function(e){E(t,e)
function t(){this.toggleSpeedgraderLink=m(this.toggleSpeedgraderLink,this)
return t.__super__.constructor.apply(this,arguments)}t.prototype.initialize=function(){t.__super__.initialize.apply(this,arguments)
return this.model.on("change:published",this.toggleSpeedgraderLink)}
t.prototype.toggleSpeedgraderLink=function(){return this.model.get("published")?this.$el.removeClass("hidden"):this.$el.addClass("hidden")}
return t}(v.a.View)
var H=n("goGJ")
var k=n("oMlh")
var B=n("GXQz")
n("/j35")
n("Z+Ib")
var w=n("y8OA")
var G=n("H4Sz")
n("17x9")
var x=n("kVW1")
var S=n.n(x)
function C(e){return Object(r["a"])("option",{value:e.id},e.id,e.name)}function O(e){return Object(r["a"])("optgroup",{label:e.name},"group_category_".concat(e.id),e.groups.map(e=>C(e)))}function I(e){return Object(r["a"])(S.a,{id:"student-group-filter",label:e.label},void 0,Object(r["a"])("select",{onChange:t=>{e.onChange(t.target.value)},style:{margin:"0",width:"100%"},value:e.value||"0"},void 0,Object(r["a"])("option",{"aria-disabled":"true",disabled:"disabled",value:"0"},"0",i["a"].t("Select One")),e.categories.map(e=>O(e))))}var N=I
var z=n("rePB")
var T=n("X9ng")
var R=n.n(T)
function D(e,t){var n=Object.keys(e)
if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e)
t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))
n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?D(n,true).forEach(function(t){Object(z["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function j(e){return l.a.createElement("a",Object.assign({className:"icon-speed-grader",rel:"noopener noreferrer",target:"_blank"},e),i["a"].t("SpeedGrader™"))}function A(e){let t={href:e.href}
e.disabled&&(t=M({},t,{"aria-disabled":"true","aria-describedby":e.disabledTip,onClick:e=>{e.preventDefault()},role:"button",style:{opacity:.5}}))
return e.disabled?Object(r["a"])(R.a,{placement:"bottom",tip:e.disabledTip,variant:"inverse"},void 0,j(t)):j(t)}var P=A
const W=new w["default"]
W.init({itemType:"assignment",page:"show"})
function q(e){if("0"!==e){d["default"].put("/api/v1/courses/".concat(ENV.COURSE_ID,"/gradebook_settings"),h.a.stringify({gradebook_settings:{filter_rows_by:{student_group_id:e}}}))
ENV.selected_student_group_id=e
V()
F()}}function F(){const e=ENV.SETTINGS.filter_speed_grader_by_student_group&&!ENV.selected_student_group_id
const t=document.getElementById("speed_grader_link_mount_point")
t&&u.a.render(Object(r["a"])(P,{disabled:e,href:ENV.speed_grader_url,disabledTip:i["a"].t("Must select a student group first")}),t)}function V(){const e=document.getElementById("student_group_filter_mount_point")
e&&u.a.render(Object(r["a"])(N,{categories:ENV.group_categories,label:i["a"].t("Select Group to Grade"),onChange:q,value:ENV.selected_student_group_id}),e)}c()(()=>{const e=c()("#assignment_publish_button")
if(e.length>0){const t=new g["a"]({id:e.attr("data-id"),unpublishable:!e.hasClass("disabled"),published:e.hasClass("published")})
t.doNotParse()
new y({model:t,el:"#assignment-speedgrader-link"}).render()
const n=new b["a"]({model:t,el:e})
n.render()
n.on("publish",()=>c()("#moderated_grading_button").show())
n.on("unpublish",()=>c()("#moderated_grading_button").hide())}c()("#sequence_footer").moduleSequenceFooter({courseID:ENV.COURSE_ID,assetType:"Assignment",assetID:ENV.ASSIGNMENT_ID,location:location})
return Object(H["a"])()})
c()(()=>c()("#content").on("click","#mark-as-done-checkbox",function(){return k["a"].toggle(this)}))
c()(()=>{if(ENV.speed_grader_url){ENV.SETTINGS.filter_speed_grader_by_student_group&&V()
F()}})
c()(()=>{c()(".upload_submissions_link").click(e=>{e.preventDefault()
c()("#re_upload_submissions_form").slideToggle()})
c()(".download_submissions_link").click(function(e){e.preventDefault()
o["a"].downloadSubmissions(c()(this).attr("href"))
c()(".upload_submissions_link").slideDown()})
c()("#re_upload_submissions_form").submit(function(e){const t=c()(this).getFormData()
if(t.submissions_zip){if(!t.submissions_zip.match(/\.zip$/)){e.preventDefault()
e.stopPropagation()
c()(this).formErrors({submissions_zip:i["a"].t("Please upload files as a .zip")})}}else{e.preventDefault()
e.stopPropagation()}})
c()("#edit_assignment_form").bind("assignment_updated",(e,t)=>{t.assignment&&t.assignment.peer_reviews?c()(".assignment_peer_reviews_link").slideDown():c()(".assignment_peer_reviews_link").slideUp()})})
c()(()=>{const e=document.getElementById("crs-graphs")
const t=document.getElementById("not_right_side")
B["default"].init(e,t)
document.getElementById("assignment_external_tools")&&G["a"].attach(document.getElementById("assignment_external_tools"),"assignment_view",parseInt(ENV.COURSE_ID,10),parseInt(ENV.ASSIGNMENT_ID,10))})},PY7K:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=r
function r(e){var t=e.colors,n=e.borders,r=e.spacing,o=e.typography,i=e.shadows
return{background:t.backgroundLightest,color:t.textDarkest,marginTop:r.small,borderRadius:n.radiusMedium,borderWidth:n.widthMedium,borderStyle:n.style,contentPadding:"".concat(r.small," ").concat(r.medium),contentFontSize:o.fontSizeMedium,contentFontFamily:o.fontFamily,contentFontWeight:o.fontWeightNormal,contentLineHeight:o.lineHeightCondensed,closeButtonMarginTop:r.xSmall,closeButtonMarginRight:r.xxSmall,iconColor:t.textLightest,iconBackground:t.backgroundLightest,successBorderColor:t.borderSuccess,successIconBackground:t.backgroundSuccess,infoBorderColor:t.borderInfo,infoIconBackground:t.backgroundInfo,warningBorderColor:t.borderWarning,warningIconBackground:t.backgroundWarning,dangerBorderColor:t.borderDanger,dangerIconBackground:t.backgroundDanger,boxShadow:i.depth2}}r.canvas=function(e){return{color:e["ic-brand-font-color-dark"]}}},TZKM:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=i
var o=r(n("MVZn"))
function i(e){var t=e.typography,n=e.colors,r=e.spacing
return(0,o.default)({},t,{primaryInverseColor:n.textLightest,primaryColor:n.textDarkest,secondaryColor:n.textDark,secondaryInverseColor:n.textLight,warningColor:n.textWarning,brandColor:n.textBrand,errorColor:n.textDanger,successColor:n.textSuccess,paragraphMargin:"".concat(r.medium," 0")})}i.canvas=function(e){return{primaryColor:e["ic-brand-font-color-dark"],brandColor:e["ic-brand-primary"]}}},Wb6P:function(e,t,n){"use strict"
var r=n("284h")
var o=n("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var i=o(n("MVZn"))
var a=o(n("lwsE"))
var c=o(n("W8MJ"))
var s=o(n("a1gu"))
var l=o(n("Nsbk"))
var p=o(n("7W2i"))
var u=r(n("q1tI"))
var d=o(n("q3EI"))
var f=u.default.createElement("path",{d:"M568.13.012L392 176.142l783.864 783.989L392 1743.87 568.13 1920l960.118-959.87z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var h=function(e){(0,p.default)(t,e)
function t(){(0,a.default)(this,t)
return(0,s.default)(this,(0,l.default)(t).apply(this,arguments))}(0,c.default)(t,[{key:"render",value:function(){return u.default.createElement(d.default,Object.assign({},this.props,{name:"IconArrowOpenEnd",viewBox:"0 0 1920 1920",bidirectional:true}),f)}}])
t.displayName="IconArrowOpenEnd"
return t}(u.Component)
t.default=h
h.glyphName="arrow-open-end"
h.variant="Solid"
h.propTypes=(0,i.default)({},d.default.propTypes)},YSFS:function(e,t,n){"use strict"
var r=n("284h")
var o=n("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var i=o(n("MVZn"))
var a=o(n("lwsE"))
var c=o(n("W8MJ"))
var s=o(n("a1gu"))
var l=o(n("Nsbk"))
var p=o(n("7W2i"))
var u=r(n("q1tI"))
var d=o(n("17x9"))
var f=o(n("kibL"))
var h=n("2lwo")
var g=function(e){(0,p.default)(t,e)
function t(){(0,a.default)(this,t)
return(0,s.default)(this,(0,l.default)(t).apply(this,arguments))}(0,c.default)(t,[{key:"render",value:function(){var e=(0,i.default)({},(0,h.omitProps)(this.props,t.propTypes),{"aria-hidden":"true"})
var n=(0,f.default)(t,this.props)
return u.default.createElement(n,e,this.props.children)}}])
t.displayName="PresentationContent"
return t}(u.Component)
g.propTypes={children:d.default.node,as:d.default.elementType}
g.defaultProps={as:"span",children:null}
var b=g
t.default=b},YTJb:function(e,t,n){"use strict"
var r=n("TqRt")
var o=n("284h")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var i=r(n("lSNA"))
var a=r(n("lwsE"))
var c=r(n("W8MJ"))
var s=r(n("a1gu"))
var l=r(n("Nsbk"))
var p=r(n("7W2i"))
var u=o(n("q1tI"))
var d=r(n("17x9"))
var f=r(n("TSYQ"))
var h=r(n("J2CL"))
var g=r(n("kibL"))
var b=n("2lwo")
var _=r(n("TZKM"))
var v,m,E,L
var y={componentId:"ELpHc",template:function(e){return"\n\n.ELpHc_bGBk{font-family:".concat(e.fontFamily||"inherit","}\n\n.ELpHc_bGBk sub,.ELpHc_bGBk sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}\n\n.ELpHc_bGBk sup{top:-0.4em}\n\n.ELpHc_bGBk sub{bottom:-0.4em}\n\n.ELpHc_bGBk code,.ELpHc_bGBk pre{all:initial;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-family:").concat(e.fontFamilyMonospace||"inherit",";font-size:medium;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto}\n\n.ELpHc_bGBk em,.ELpHc_bGBk i{font-style:italic}\n\n.ELpHc_bGBk b,.ELpHc_bGBk strong{font-weight:").concat(e.fontWeightBold||"inherit","}\n\n.ELpHc_bGBk p{display:block;margin:").concat(e.paragraphMargin||"inherit",";padding:0}\n\ninput.ELpHc_bGBk[type]{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:none;border:none;border-radius:0;box-shadow:none;box-sizing:border-box;color:inherit;display:block;height:auto;line-height:inherit;margin:0;outline:0;padding:0;text-align:start;width:100%}\n\n[dir=ltr] input.ELpHc_bGBk[type]{text-align:left}\n\n[dir=rtl] input.ELpHc_bGBk[type]{text-align:right}\n\n.ELpHc_bGBk:focus,input.ELpHc_bGBk[type]:focus{outline:none}\n\n.ELpHc_bGBk.ELpHc_qFsi,input.ELpHc_bGBk[type].ELpHc_qFsi{color:").concat(e.primaryColor||"inherit","}\n\n.ELpHc_bGBk.ELpHc_bLsb,input.ELpHc_bGBk[type].ELpHc_bLsb{color:").concat(e.secondaryColor||"inherit","}\n\n.ELpHc_bGBk.ELpHc_ezBQ,input.ELpHc_bGBk[type].ELpHc_ezBQ{color:").concat(e.primaryInverseColor||"inherit","}\n\n.ELpHc_bGBk.ELpHc_dlnd,input.ELpHc_bGBk[type].ELpHc_dlnd{color:").concat(e.secondaryInverseColor||"inherit","}\n\n.ELpHc_bGBk.ELpHc_cJLh,input.ELpHc_bGBk[type].ELpHc_cJLh{color:").concat(e.successColor||"inherit","}\n\n.ELpHc_bGBk.ELpHc_fpfC,input.ELpHc_bGBk[type].ELpHc_fpfC{color:").concat(e.brandColor||"inherit","}\n\n.ELpHc_bGBk.ELpHc_eHcp,input.ELpHc_bGBk[type].ELpHc_eHcp{color:").concat(e.warningColor||"inherit","}\n\n.ELpHc_bGBk.ELpHc_dwua,input.ELpHc_bGBk[type].ELpHc_dwua{color:").concat(e.errorColor||"inherit","}\n\n.ELpHc_bGBk.ELpHc_drST,input.ELpHc_bGBk[type].ELpHc_drST{font-weight:").concat(e.fontWeightNormal||"inherit","}\n\n.ELpHc_bGBk.ELpHc_pEgL,input.ELpHc_bGBk[type].ELpHc_pEgL{font-weight:").concat(e.fontWeightLight||"inherit","}\n\n.ELpHc_bGBk.ELpHc_bdMA,input.ELpHc_bGBk[type].ELpHc_bdMA{font-weight:").concat(e.fontWeightBold||"inherit","}\n\n.ELpHc_bGBk.ELpHc_ijuF,input.ELpHc_bGBk[type].ELpHc_ijuF{font-style:normal}\n\n.ELpHc_bGBk.ELpHc_fetN,input.ELpHc_bGBk[type].ELpHc_fetN{font-style:italic}\n\n.ELpHc_bGBk.ELpHc_dfBC,input.ELpHc_bGBk[type].ELpHc_dfBC{font-size:").concat(e.fontSizeXSmall||"inherit","}\n\n.ELpHc_bGBk.ELpHc_doqw,input.ELpHc_bGBk[type].ELpHc_doqw{font-size:").concat(e.fontSizeSmall||"inherit","}\n\n.ELpHc_bGBk.ELpHc_ycrn,input.ELpHc_bGBk[type].ELpHc_ycrn{font-size:").concat(e.fontSizeMedium||"inherit","}\n\n.ELpHc_bGBk.ELpHc_cMDj,input.ELpHc_bGBk[type].ELpHc_cMDj{font-size:").concat(e.fontSizeLarge||"inherit","}\n\n.ELpHc_bGBk.ELpHc_eoMd,input.ELpHc_bGBk[type].ELpHc_eoMd{font-size:").concat(e.fontSizeXLarge||"inherit","}\n\n.ELpHc_bGBk.ELpHc_fdca,input.ELpHc_bGBk[type].ELpHc_fdca{font-size:").concat(e.fontSizeXXLarge||"inherit","}\n\n.ELpHc_bGBk.ELpHc_fEWX,input.ELpHc_bGBk[type].ELpHc_fEWX{line-height:").concat(e.lineHeight||"inherit","}\n\n.ELpHc_bGBk.ELpHc_fNIu,input.ELpHc_bGBk[type].ELpHc_fNIu{line-height:").concat(e.lineHeightFit||"inherit","}\n\n.ELpHc_bGBk.ELpHc_dfDs,input.ELpHc_bGBk[type].ELpHc_dfDs{line-height:").concat(e.lineHeightCondensed||"inherit","}\n\n.ELpHc_bGBk.ELpHc_bDjL,input.ELpHc_bGBk[type].ELpHc_bDjL{line-height:").concat(e.lineHeightDouble||"inherit","}\n\n.ELpHc_bGBk.ELpHc_eQnG,input.ELpHc_bGBk[type].ELpHc_eQnG{letter-spacing:").concat(e.letterSpacingNormal||"inherit","}\n\n.ELpHc_bGBk.ELpHc_bbUA,input.ELpHc_bGBk[type].ELpHc_bbUA{letter-spacing:").concat(e.letterSpacingCondensed||"inherit","}\n\n.ELpHc_bGBk.ELpHc_bRWU,input.ELpHc_bGBk[type].ELpHc_bRWU{letter-spacing:").concat(e.letterSpacingExpanded||"inherit","}\n\n.ELpHc_bGBk.ELpHc_wZsr,input.ELpHc_bGBk[type].ELpHc_wZsr{text-transform:none}\n\n.ELpHc_bGBk.ELpHc_fCZK,input.ELpHc_bGBk[type].ELpHc_fCZK{text-transform:capitalize}\n\n.ELpHc_bGBk.ELpHc_dsRi,input.ELpHc_bGBk[type].ELpHc_dsRi{text-transform:uppercase}\n\n.ELpHc_bGBk.ELpHc_bLtD,input.ELpHc_bGBk[type].ELpHc_bLtD{text-transform:lowercase}")},root:"ELpHc_bGBk","color-primary":"ELpHc_qFsi","color-secondary":"ELpHc_bLsb","color-primary-inverse":"ELpHc_ezBQ","color-secondary-inverse":"ELpHc_dlnd","color-success":"ELpHc_cJLh","color-brand":"ELpHc_fpfC","color-warning":"ELpHc_eHcp","color-error":"ELpHc_dwua","weight-normal":"ELpHc_drST","weight-light":"ELpHc_pEgL","weight-bold":"ELpHc_bdMA","style-normal":"ELpHc_ijuF","style-italic":"ELpHc_fetN","x-small":"ELpHc_dfBC",small:"ELpHc_doqw",medium:"ELpHc_ycrn",large:"ELpHc_cMDj","x-large":"ELpHc_eoMd","xx-large":"ELpHc_fdca","lineHeight-default":"ELpHc_fEWX","lineHeight-fit":"ELpHc_fNIu","lineHeight-condensed":"ELpHc_dfDs","lineHeight-double":"ELpHc_bDjL","letterSpacing-normal":"ELpHc_eQnG","letterSpacing-condensed":"ELpHc_bbUA","letterSpacing-expanded":"ELpHc_bRWU","transform-none":"ELpHc_wZsr","transform-capitalize":"ELpHc_fCZK","transform-uppercase":"ELpHc_dsRi","transform-lowercase":"ELpHc_bLtD"}
var H=(v=(0,h.default)(_.default,y),v(m=(L=E=function(e){(0,p.default)(t,e)
function t(){(0,a.default)(this,t)
return(0,s.default)(this,(0,l.default)(t).apply(this,arguments))}(0,c.default)(t,[{key:"render",value:function(){var e
var n=this.props,r=n.weight,o=n.fontStyle,a=n.size,c=n.lineHeight,s=n.letterSpacing,l=n.transform,p=n.color,d=n.children
var h=(0,g.default)(t,this.props)
return u.default.createElement(h,Object.assign({},(0,b.omitProps)(this.props,t.propTypes),{className:(0,f.default)((e={},(0,i.default)(e,y.root,true),(0,i.default)(e,y[a],a),(0,i.default)(e,y["weight-".concat(r)],r),(0,i.default)(e,y["style-".concat(o)],o),(0,i.default)(e,y["transform-".concat(l)],l),(0,i.default)(e,y["lineHeight-".concat(c)],c),(0,i.default)(e,y["letterSpacing-".concat(s)],s),(0,i.default)(e,y["color-".concat(p)],p),e)),ref:this.props.elementRef}),d)}}])
t.displayName="Text"
return t}(u.Component),E.propTypes={as:d.default.elementType,weight:d.default.oneOf(["normal","light","bold"]),fontStyle:d.default.oneOf(["italic","normal"]),size:d.default.oneOf(["x-small","small","medium","large","x-large","xx-large"]),lineHeight:d.default.oneOf(["default","fit","condensed","double"]),letterSpacing:d.default.oneOf(["normal","condensed","expanded"]),transform:d.default.oneOf(["none","capitalize","uppercase","lowercase"]),color:d.default.oneOf(["primary","secondary","primary-inverse","secondary-inverse","success","error","warning","brand"]),children:d.default.node,elementRef:d.default.func},E.defaultProps={as:"span",size:"medium",letterSpacing:"normal",children:null,elementRef:void 0,color:void 0,transform:void 0,lineHeight:void 0,fontStyle:void 0,weight:void 0},L))||m)
t.default=H},h8gV:function(e,t,n){"use strict"
var r=n("TqRt")
var o=n("284h")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var i=r(n("lwsE"))
var a=r(n("W8MJ"))
var c=r(n("a1gu"))
var s=r(n("Nsbk"))
var l=r(n("7W2i"))
n("TEfk")
var p=o(n("q1tI"))
var u=r(n("i8i4"))
var d=r(n("17x9"))
var f=r(n("TSYQ"))
var h=r(n("3zPy"))
var g=r(n("SJAx"))
var b=r(n("XbQQ"))
var _=r(n("qnOc"))
var v=r(n("EefQ"))
var m=r(n("SoT/"))
var E=r(n("+VrF"))
var L=r(n("vRP1"))
var y=r(n("BXe7"))
var H=r(n("J2CL"))
var k=r(n("5WdN"))
var B=r(n("ZJ40"))
var w=r(n("oxAU"))
var G=r(n("PY7K"))
var x,S,C,O,I
var N={componentId:"cvphu",template:function(e){return"\n\n.cvphu_bgqc{background:".concat(e.background||"inherit",";border-radius:").concat(e.borderRadius||"inherit",";border-style:").concat(e.borderStyle||"inherit",";border-width:").concat(e.borderWidth||"inherit",";box-shadow:").concat(e.boxShadow||"inherit",";color:").concat(e.color||"inherit",";display:flex;min-width:12rem}\n\n.cvphu_bgqc,.cvphu_caGd{box-sizing:border-box}\n\n.cvphu_caGd{flex:1;font-family:").concat(e.contentFontFamily||"inherit",";font-size:").concat(e.contentFontSize||"inherit",";font-weight:").concat(e.contentFontWeight||"inherit",";line-height:").concat(e.contentLineHeight||"inherit",";min-width:0.0625rem;padding:").concat(e.contentPadding||"inherit","}\n\n.cvphu_dnnz{align-items:center;border-right:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit",";color:").concat(e.iconColor||"inherit",";flex:0 0 2.5rem;font-size:1.125rem;justify-content:center}\n\n.cvphu_fsGh,.cvphu_dnnz{box-sizing:border-box;display:flex}\n\n.cvphu_fsGh{align-items:flex-start;margin-right:").concat(e.closeButtonMarginRight||"inherit",";margin-top:").concat(e.closeButtonMarginTop||"inherit",";order:1}\n\n.cvphu_cOXX{border-color:").concat(e.successBorderColor||"inherit","}\n\n.cvphu_cOXX .cvphu_dnnz{background-color:").concat(e.successIconBackground||"inherit",";border-right-color:").concat(e.successIconBackground||"inherit","}\n\n.cvphu_pypk{border-color:").concat(e.infoBorderColor||"inherit","}\n\n.cvphu_pypk .cvphu_dnnz{background:").concat(e.infoIconBackground||"inherit",";border-right-color:").concat(e.infoIconBackground||"inherit","}\n\n.cvphu_ddvR{border-color:").concat(e.dangerBorderColor||"inherit","}\n\n.cvphu_ddvR .cvphu_dnnz{background:").concat(e.dangerIconBackground||"inherit",";border-right-color:").concat(e.dangerIconBackground||"inherit","}\n\n.cvphu_eRqw{border-color:").concat(e.warningBorderColor||"inherit","}\n\n.cvphu_eRqw .cvphu_dnnz{background:").concat(e.warningIconBackground||"inherit",";border-right-color:").concat(e.warningIconBackground||"inherit","}")},alert:"cvphu_bgqc",content:"cvphu_caGd",icon:"cvphu_dnnz",closeButton:"cvphu_fsGh",success:"cvphu_cOXX",info:"cvphu_pypk",error:"cvphu_ddvR",warning:"cvphu_eRqw"}
var z=(x=(0,B.default)("3.0.0",{dismissable:true,onClose:"onDismiss",transitionType:"transition",isOpen:"open"}),S=(0,H.default)(G.default,N),x(C=S(C=(I=O=function(e){(0,l.default)(t,e)
function t(e){var n;(0,i.default)(this,t)
n=(0,c.default)(this,(0,s.default)(t).call(this,e))
n._timeouts=[]
n.handleTimeout=function(){n.props.timeout>0&&n._timeouts.push(setTimeout(function(){n.close()},n.props.timeout))}
n.onExitTransition=function(){n.props.onDismiss&&n.props.onDismiss()}
n.close=function(){n.clearTimeouts()
n.removeScreenreaderAlert()
n.setState({open:false},function(){n.props.onDismiss&&"none"===n.props.transition&&n.props.onDismiss()})}
n.handleKeyUp=function(e){n.props.closeButtonLabel&&e.keyCode===h.default.codes.esc&&n.close()}
n.state={open:true}
return n}(0,a.default)(t,[{key:"variantUI",value:function(){return{error:{Icon:L.default,classNames:(0,f.default)(N.alert,N.error)},info:{Icon:m.default,classNames:(0,f.default)(N.alert,N.info)},success:{Icon:v.default,classNames:(0,f.default)(N.alert,N.success)},warning:{Icon:E.default,classNames:(0,f.default)(N.alert,N.warning)}}[this.props.variant]}},{key:"clearTimeouts",value:function(){this._timeouts.forEach(function(e){return clearTimeout(e)})
this._timeouts=[]}},{key:"isDOMNode",value:function(e){return e&&"object"===typeof e&&1===e.nodeType}},{key:"getLiveRegion",value:function(){var e=null
"function"===typeof this.props.liveRegion&&(e=this.props.liveRegion())
return this.isDOMNode(e)?e:null}},{key:"initLiveRegion",value:function(e){e.getAttribute("role")
if(e){e.setAttribute("aria-live",this.props.liveRegionPoliteness)
e.setAttribute("aria-relevant","additions text")
e.setAttribute("aria-atomic","false")}}},{key:"createScreenreaderContentNode",value:function(){return p.default.createElement(_.default,null,this.props.children)}},{key:"createScreenreaderAlert",value:function(){var e=this.getLiveRegion()
if(e){this.srid=(0,w.default)("Alert")
var t=document.createElement("div")
t.setAttribute("id",this.srid)
var n=this.createScreenreaderContentNode()
u.default.render(n,t)
e.appendChild(t)}}},{key:"updateScreenreaderAlert",value:function(){if(this.getLiveRegion()){var e=document.getElementById(this.srid)
if(e){u.default.unmountComponentAtNode(e)
var t=this.createScreenreaderContentNode()
u.default.render(t,e)}}}},{key:"removeScreenreaderAlert",value:function(){var e=this.getLiveRegion()
if(e){var t=document.getElementById(this.srid)
if(t){e.removeAttribute("aria-live")
e.removeAttribute("aria-relevant")
e.removeAttribute("aria-atomic")
u.default.unmountComponentAtNode(t)
t.parentNode.removeChild(t)
this.initLiveRegion(e)}}}},{key:"componentWillMount",value:function(){var e=this.getLiveRegion()
e&&this.initLiveRegion(e)}},{key:"componentDidMount",value:function(){this.handleTimeout()
this.createScreenreaderAlert()}},{key:"componentDidUpdate",value:function(e){false===!!this.props.open&&!!this.props.open!==!!e.open?this.close():this.updateScreenreaderAlert()}},{key:"componentWillUnmount",value:function(){this.removeScreenreaderAlert()
this.clearTimeouts()}},{key:"renderIcon",value:function(){var e=this.variantUI(),t=e.Icon
return p.default.createElement("div",{className:N.icon},p.default.createElement(t,{className:N.alertIcon}))}},{key:"renderCloseButton",value:function(){return this.props.closeButtonLabel?p.default.createElement("div",{className:N.closeButton,key:"closeButton"},p.default.createElement(g.default,{onClick:this.close,size:"small",variant:"icon"},this.props.closeButtonLabel)):null}},{key:"renderAlert",value:function(){var e=this.variantUI(),t=e.classNames
return p.default.createElement(b.default,{as:"div",margin:this.props.margin,className:t,onKeyUp:this.handleKeyUp},this.renderIcon(),p.default.createElement("div",{className:N.content},this.props.children),this.renderCloseButton())}},{key:"render",value:function(){if(this.props.screenReaderOnly){this.getLiveRegion()
return null}if("none"===this.props.transition)return this.state.open?this.renderAlert():null
return p.default.createElement(y.default,{type:this.props.transition,transitionOnMount:true,in:this.state.open,unmountOnExit:true,onExited:this.onExitTransition},this.renderAlert())}}])
t.displayName="Alert"
return t}(p.Component),O.propTypes={children:d.default.node,variant:d.default.oneOf(["info","success","warning","error"]),margin:k.default.spacing,liveRegion:d.default.func,liveRegionPoliteness:d.default.oneOf(["polite","assertive"]),screenReaderOnly:d.default.bool,timeout:d.default.number,closeButtonLabel:d.default.string,onDismiss:d.default.func,transition:d.default.oneOf(["none","fade"]),open:d.default.bool},O.defaultProps={variant:"info",margin:"x-small 0",timeout:0,transition:"fade",open:true,screenReaderOnly:false,liveRegionPoliteness:"assertive",onDismiss:void 0,liveRegion:void 0,closeButtonLabel:void 0,children:null},I))||C)||C)
t.default=z},mykf:function(e,t,n){"use strict"
const r=()=>{const e=ENV.LTI_LAUNCH_FRAME_ALLOWANCES||[]
return e.join("; ")}
t["a"]=r},oMlh:function(e,t,n){"use strict"
var r=n("ouhR")
var o=n.n(r)
n("jYyc")
t["a"]={toggle(e){const t=o()(e).data.bind(o()(e))
return o.a.ajaxJSON(t("url"),t("isChecked")?"DELETE":"PUT",{},()=>{t("isChecked",!t("isChecked"))
o()(e).toggleClass("btn-success")
o()("i",e).toggleClass("icon-empty icon-complete")
o()(".mark-done-labels span",e).toggleClass("visible")})}}},zLVn:function(e,t,n){"use strict"
n.d(t,"a",function(){return r})
function r(e,t){if(null==e)return{}
var n={}
var r=Object.keys(e)
var o,i
for(i=0;i<r.length;i++){o=r[i]
if(t.indexOf(o)>=0)continue
n[o]=e[o]}return n}}}])

//# sourceMappingURL=assignment_show-c-4567367f1d.js.map