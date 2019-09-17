(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[100],{"0mGw":function(e,t,r){"use strict"
var n=r("284h")
var o=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var a=o(r("MVZn"))
var i=o(r("lwsE"))
var s=o(r("W8MJ"))
var l=o(r("a1gu"))
var c=o(r("Nsbk"))
var u=o(r("7W2i"))
var d=n(r("q1tI"))
var f=o(r("q3EI"))
var p=d.default.createElement("path",{d:"M1493.602 1468.294H225.837C523.211 387.9 755.305 1443.9 983.898 1115.918c284.612-408.283 590.57-405.685 710.174 352.376h-200.47zm-816-1129.412c124.8 0 225.882 101.196 225.882 225.883 0 124.687-101.082 225.882-225.882 225.882-124.687 0-225.882-101.195-225.882-225.882 0-124.687 101.195-225.883 225.882-225.883zM-.045 1807.118h1920V113h-1920v1694.118z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var h=function(e){(0,u.default)(t,e)
function t(){(0,i.default)(this,t)
return(0,l.default)(this,(0,c.default)(t).apply(this,arguments))}(0,s.default)(t,[{key:"render",value:function(){return d.default.createElement(f.default,Object.assign({},this.props,{name:"IconImage",viewBox:"0 0 1920 1920"}),p)}}])
t.displayName="IconImage"
return t}(d.Component)
t.default=h
h.glyphName="image"
h.variant="Solid"
h.propTypes=(0,a.default)({},f.default.propTypes)},"1A3U":function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=n
function n(e){var t=e.colors,r=e.borders,n=e.stacking
return{zIndex:n.topmost,background:"rgba(255, 255, 255, 0.75)",borderColor:"transparent",focusBorderColor:t.borderBrand,borderRadius:r.radiusMedium,borderWidth:r.widthSmall}}n.canvas=function(e){return{focusBorderColor:e["ic-brand-primary"]}}},"2LKJ":function(e,t,r){e.exports=m
m.Minimatch=g
var n={sep:"/"}
try{n=r("33yf")}catch(e){}var o=m.GLOBSTAR=g.GLOBSTAR={}
var a=r("TuBq")
var i={"!":{open:"(?:(?!(?:",close:"))[^/]*?)"},"?":{open:"(?:",close:")?"},"+":{open:"(?:",close:")+"},"*":{open:"(?:",close:")*"},"@":{open:"(?:",close:")"}}
var s="[^/]"
var l=s+"*?"
var c="(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?"
var u="(?:(?!(?:\\/|^)\\.).)*?"
var d=f("().*{}+?[]^$\\!")
function f(e){return e.split("").reduce(function(e,t){e[t]=true
return e},{})}var p=/\/+/
m.filter=h
function h(e,t){t=t||{}
return function(r,n,o){return m(r,e,t)}}function v(e,t){e=e||{}
t=t||{}
var r={}
Object.keys(t).forEach(function(e){r[e]=t[e]})
Object.keys(e).forEach(function(t){r[t]=e[t]})
return r}m.defaults=function(e){if(!e||!Object.keys(e).length)return m
var t=m
var r=function(r,n,o){return t.minimatch(r,n,v(e,o))}
r.Minimatch=function(r,n){return new t.Minimatch(r,v(e,n))}
return r}
g.defaults=function(e){if(!e||!Object.keys(e).length)return g
return m.defaults(e).Minimatch}
function m(e,t,r){if("string"!==typeof t)throw new TypeError("glob pattern string required")
r||(r={})
if(!r.nocomment&&"#"===t.charAt(0))return false
if(""===t.trim())return""===e
return new g(t,r).match(e)}function g(e,t){if(!(this instanceof g))return new g(e,t)
if("string"!==typeof e)throw new TypeError("glob pattern string required")
t||(t={})
e=e.trim()
"/"!==n.sep&&(e=e.split(n.sep).join("/"))
this.options=t
this.set=[]
this.pattern=e
this.regexp=null
this.negate=false
this.comment=false
this.empty=false
this.make()}g.prototype.debug=function(){}
g.prototype.make=b
function b(){if(this._made)return
var e=this.pattern
var t=this.options
if(!t.nocomment&&"#"===e.charAt(0)){this.comment=true
return}if(!e){this.empty=true
return}this.parseNegate()
var r=this.globSet=this.braceExpand()
t.debug&&(this.debug=console.error)
this.debug(this.pattern,r)
r=this.globParts=r.map(function(e){return e.split(p)})
this.debug(this.pattern,r)
r=r.map(function(e,t,r){return e.map(this.parse,this)},this)
this.debug(this.pattern,r)
r=r.filter(function(e){return-1===e.indexOf(false)})
this.debug(this.pattern,r)
this.set=r}g.prototype.parseNegate=y
function y(){var e=this.pattern
var t=false
var r=this.options
var n=0
if(r.nonegate)return
for(var o=0,a=e.length;o<a&&"!"===e.charAt(o);o++){t=!t
n++}n&&(this.pattern=e.substr(n))
this.negate=t}m.braceExpand=function(e,t){return E(e,t)}
g.prototype.braceExpand=E
function E(e,t){t||(t=this instanceof g?this.options:{})
e="undefined"===typeof e?this.pattern:e
if("undefined"===typeof e)throw new TypeError("undefined pattern")
if(t.nobrace||!e.match(/\{.*\}/))return[e]
return a(e)}g.prototype.parse=w
var _={}
function w(e,t){if(e.length>65536)throw new TypeError("pattern is too long")
var r=this.options
if(!r.noglobstar&&"**"===e)return o
if(""===e)return""
var n=""
var a=!!r.nocase
var c=false
var u=[]
var f=[]
var p
var h=false
var v=-1
var m=-1
var g="."===e.charAt(0)?"":r.dot?"(?!(?:^|\\/)\\.{1,2}(?:$|\\/))":"(?!\\.)"
var b=this
function y(){if(p){switch(p){case"*":n+=l
a=true
break
case"?":n+=s
a=true
break
default:n+="\\"+p}b.debug("clearStateChar %j %j",p,n)
p=false}}for(var E,w=0,k=e.length;w<k&&(E=e.charAt(w));w++){this.debug("%s\t%s %s %j",e,w,n,E)
if(c&&d[E]){n+="\\"+E
c=false
continue}switch(E){case"/":return false
case"\\":y()
c=true
continue
case"?":case"*":case"+":case"@":case"!":this.debug("%s\t%s %s %j <-- stateChar",e,w,n,E)
if(h){this.debug("  in class")
"!"===E&&w===m+1&&(E="^")
n+=E
continue}b.debug("call clearStateChar %j",p)
y()
p=E
r.noext&&y()
continue
case"(":if(h){n+="("
continue}if(!p){n+="\\("
continue}u.push({type:p,start:w-1,reStart:n.length,open:i[p].open,close:i[p].close})
n+="!"===p?"(?:(?!(?:":"(?:"
this.debug("plType %j %j",p,n)
p=false
continue
case")":if(h||!u.length){n+="\\)"
continue}y()
a=true
var x=u.pop()
n+=x.close
"!"===x.type&&f.push(x)
x.reEnd=n.length
continue
case"|":if(h||!u.length||c){n+="\\|"
c=false
continue}y()
n+="|"
continue
case"[":y()
if(h){n+="\\"+E
continue}h=true
m=w
v=n.length
n+=E
continue
case"]":if(w===m+1||!h){n+="\\"+E
c=false
continue}if(h){var O=e.substring(m+1,w)
try{RegExp("["+O+"]")}catch(e){var S=this.parse(O,_)
n=n.substr(0,v)+"\\["+S[0]+"\\]"
a=a||S[1]
h=false
continue}}a=true
h=false
n+=E
continue
default:y()
c?c=false:!d[E]||"^"===E&&h||(n+="\\")
n+=E}}if(h){O=e.substr(m+1)
S=this.parse(O,_)
n=n.substr(0,v)+"\\["+S[0]
a=a||S[1]}for(x=u.pop();x;x=u.pop()){var C=n.slice(x.reStart+x.open.length)
this.debug("setting tail",n,x)
C=C.replace(/((?:\\{2}){0,64})(\\?)\|/g,function(e,t,r){r||(r="\\")
return t+t+r+"|"})
this.debug("tail=%j\n   %s",C,C,x,n)
var F="*"===x.type?l:"?"===x.type?s:"\\"+x.type
a=true
n=n.slice(0,x.reStart)+F+"\\("+C}y()
c&&(n+="\\\\")
var A=false
switch(n.charAt(0)){case".":case"[":case"(":A=true}for(var T=f.length-1;T>-1;T--){var I=f[T]
var M=n.slice(0,I.reStart)
var W=n.slice(I.reStart,I.reEnd-8)
var B=n.slice(I.reEnd-8,I.reEnd)
var z=n.slice(I.reEnd)
B+=z
var D=M.split("(").length-1
var L=z
for(w=0;w<D;w++)L=L.replace(/\)[+*?]?/,"")
z=L
var R=""
""===z&&t!==_&&(R="$")
var N=M+W+z+R+B
n=N}""!==n&&a&&(n="(?=.)"+n)
A&&(n=g+n)
if(t===_)return[n,a]
if(!a)return j(e)
var P=r.nocase?"i":""
try{var U=new RegExp("^"+n+"$",P)}catch(e){return new RegExp("$.")}U._glob=e
U._src=n
return U}m.makeRe=function(e,t){return new g(e,t||{}).makeRe()}
g.prototype.makeRe=k
function k(){if(this.regexp||false===this.regexp)return this.regexp
var e=this.set
if(!e.length){this.regexp=false
return this.regexp}var t=this.options
var r=t.noglobstar?l:t.dot?c:u
var n=t.nocase?"i":""
var a=e.map(function(e){return e.map(function(e){return e===o?r:"string"===typeof e?O(e):e._src}).join("\\/")}).join("|")
a="^(?:"+a+")$"
this.negate&&(a="^(?!"+a+").*$")
try{this.regexp=new RegExp(a,n)}catch(e){this.regexp=false}return this.regexp}m.match=function(e,t,r){r=r||{}
var n=new g(t,r)
e=e.filter(function(e){return n.match(e)})
n.options.nonull&&!e.length&&e.push(t)
return e}
g.prototype.match=x
function x(e,t){this.debug("match",e,this.pattern)
if(this.comment)return false
if(this.empty)return""===e
if("/"===e&&t)return true
var r=this.options
"/"!==n.sep&&(e=e.split(n.sep).join("/"))
e=e.split(p)
this.debug(this.pattern,"split",e)
var o=this.set
this.debug(this.pattern,"set",o)
var a
var i
for(i=e.length-1;i>=0;i--){a=e[i]
if(a)break}for(i=0;i<o.length;i++){var s=o[i]
var l=e
r.matchBase&&1===s.length&&(l=[a])
var c=this.matchOne(l,s,t)
if(c){if(r.flipNegate)return true
return!this.negate}}if(r.flipNegate)return false
return this.negate}g.prototype.matchOne=function(e,t,r){var n=this.options
this.debug("matchOne",{this:this,file:e,pattern:t})
this.debug("matchOne",e.length,t.length)
for(var a=0,i=0,s=e.length,l=t.length;a<s&&i<l;a++,i++){this.debug("matchOne loop")
var c=t[i]
var u=e[a]
this.debug(t,c,u)
if(false===c)return false
if(c===o){this.debug("GLOBSTAR",[t,c,u])
var d=a
var f=i+1
if(f===l){this.debug("** at the end")
for(;a<s;a++)if("."===e[a]||".."===e[a]||!n.dot&&"."===e[a].charAt(0))return false
return true}while(d<s){var p=e[d]
this.debug("\nglobstar while",e,d,t,f,p)
if(this.matchOne(e.slice(d),t.slice(f),r)){this.debug("globstar found match!",d,s,p)
return true}if("."===p||".."===p||!n.dot&&"."===p.charAt(0)){this.debug("dot detected!",e,d,t,f)
break}this.debug("globstar swallow a segment, and continue")
d++}if(r){this.debug("\n>>> no match, partial?",e,d,t,f)
if(d===s)return true}return false}var h
if("string"===typeof c){h=n.nocase?u.toLowerCase()===c.toLowerCase():u===c
this.debug("string match",c,u,h)}else{h=u.match(c)
this.debug("pattern match",c,u,h)}if(!h)return false}if(a===s&&i===l)return true
if(a===s)return r
if(i===l){var v=a===s-1&&""===e[a]
return v}throw new Error("wtf?")}
function j(e){return e.replace(/\\(.)/g,"$1")}function O(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}},"33yf":function(e,t,r){(function(e){function r(e,t){var r=0
for(var n=e.length-1;n>=0;n--){var o=e[n]
if("."===o)e.splice(n,1)
else if(".."===o){e.splice(n,1)
r++}else if(r){e.splice(n,1)
r--}}if(t)for(;r--;r)e.unshift("..")
return e}t.resolve=function(){var t="",n=false
for(var a=arguments.length-1;a>=-1&&!n;a--){var i=a>=0?arguments[a]:e.cwd()
if("string"!==typeof i)throw new TypeError("Arguments to path.resolve must be strings")
if(!i)continue
t=i+"/"+t
n="/"===i.charAt(0)}t=r(o(t.split("/"),function(e){return!!e}),!n).join("/")
return(n?"/":"")+t||"."}
t.normalize=function(e){var n=t.isAbsolute(e),i="/"===a(e,-1)
e=r(o(e.split("/"),function(e){return!!e}),!n).join("/")
e||n||(e=".")
e&&i&&(e+="/")
return(n?"/":"")+e}
t.isAbsolute=function(e){return"/"===e.charAt(0)}
t.join=function(){var e=Array.prototype.slice.call(arguments,0)
return t.normalize(o(e,function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings")
return e}).join("/"))}
t.relative=function(e,r){e=t.resolve(e).substr(1)
r=t.resolve(r).substr(1)
function n(e){var t=0
for(;t<e.length;t++)if(""!==e[t])break
var r=e.length-1
for(;r>=0;r--)if(""!==e[r])break
if(t>r)return[]
return e.slice(t,r-t+1)}var o=n(e.split("/"))
var a=n(r.split("/"))
var i=Math.min(o.length,a.length)
var s=i
for(var l=0;l<i;l++)if(o[l]!==a[l]){s=l
break}var c=[]
for(l=s;l<o.length;l++)c.push("..")
c=c.concat(a.slice(s))
return c.join("/")}
t.sep="/"
t.delimiter=":"
t.dirname=function(e){"string"!==typeof e&&(e+="")
if(0===e.length)return"."
var t=e.charCodeAt(0)
var r=47===t
var n=-1
var o=true
for(var a=e.length-1;a>=1;--a){t=e.charCodeAt(a)
if(47===t){if(!o){n=a
break}}else o=false}if(-1===n)return r?"/":"."
if(r&&1===n)return"/"
return e.slice(0,n)}
function n(e){"string"!==typeof e&&(e+="")
var t=0
var r=-1
var n=true
var o
for(o=e.length-1;o>=0;--o)if(47===e.charCodeAt(o)){if(!n){t=o+1
break}}else if(-1===r){n=false
r=o+1}if(-1===r)return""
return e.slice(t,r)}t.basename=function(e,t){var r=n(e)
t&&r.substr(-1*t.length)===t&&(r=r.substr(0,r.length-t.length))
return r}
t.extname=function(e){"string"!==typeof e&&(e+="")
var t=-1
var r=0
var n=-1
var o=true
var a=0
for(var i=e.length-1;i>=0;--i){var s=e.charCodeAt(i)
if(47===s){if(!o){r=i+1
break}continue}if(-1===n){o=false
n=i+1}46===s?-1===t?t=i:1!==a&&(a=1):-1!==t&&(a=-1)}if(-1===t||-1===n||0===a||1===a&&t===n-1&&t===r+1)return""
return e.slice(t,n)}
function o(e,t){if(e.filter)return e.filter(t)
var r=[]
for(var n=0;n<e.length;n++)t(e[n],n,e)&&r.push(e[n])
return r}var a="b"==="ab".substr(-1)?function(e,t,r){return e.substr(t,r)}:function(e,t,r){t<0&&(t=e.length+t)
return e.substr(t,r)}}).call(this,r("8oxB"))},"HK1/":function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=n
function n(e){var t="".concat(e)
return[parseFloat(t,10),t.match(/[\d.\-\+]*\s*(.*)/)[1]||""]}},J4zp:function(e,t,r){var n=r("wTVA")
var o=r("m0LI")
var a=r("wkBT")
function i(e,t){return n(e)||o(e,t)||a()}e.exports=i},"Op/J":function(e,t,r){"use strict"
var n=r("An8g")
var o=r("rePB")
var a=r("M1Vv")
var i=r("q1tI")
var s=r.n(i)
var l=r("LvDl")
var c=r.n(l)
var u=r("ouhR")
var d=r.n(u)
var f=r("x1Tw")
var p=r("2LKJ")
var h=r.n(p)
var v=r("K5Sg")
var m=r.n(v)
var g=r("YTJb")
var b=r.n(g)
var y=r("VMdx")
var E=r.n(y)
var _=r("z+Bb")
var w=r.n(_)
var k=r("slAi")
var x=r.n(k)
var j=r("qnOc")
var O=r.n(j)
var S=r("Cf7h")
var C=r("w/Wh")
var F=r.n(C)
var A=r("is45")
var T=r.n(A)
var I=r("xQ1y")
var M=r.n(I)
var W=r("0mGw")
var B=r.n(W)
r("17x9")
function z(e,t){var r=Object.keys(e)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e)
t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))
r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{}
t%2?z(r,true).forEach(function(t){Object(o["a"])(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):z(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}const L={Accept:"application/json+canvas-string-ids"}
function R(e,t){return f["default"].get("/api/v1/".concat(e,"/").concat(t,"/folders/root"),L)}function N(e){const t=new FormData
Object.keys(e).forEach(r=>t.append(r,e[r]))
return t}function P(e,t,r,n){const o=N(D({},t.upload_params,{file:e}))
const a=D({"Content-Type":"multipart/form-data"},L)
f["default"].post(t.upload_url,o,a).then(e=>r(e.data)).catch(e=>n(e))}function U(e,t,r,n){f["default"].post("/api/v1/folders/".concat(t,"/files"),{name:e.name,size:e.size,parent_folder_id:t,on_duplicate:"rename"},L).then(t=>P(e,t.data,r,n)).catch(e=>n(e))}var q=r("XGn+")
var J=r("dqQ7")
var V=r("yE80")
function Q(e,t){var r=Object.keys(e)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e)
t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))
r.push.apply(r,n)}return r}function Y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{}
t%2?Q(r,true).forEach(function(t){Object(o["a"])(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}class G extends s.a.Component{constructor(e){var t
super(e)
t=this
this.populateCollectionsList=function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const n=c.a.cloneDeep(t.state.collections)
e.forEach(e=>{const o=t.formatFolderInfo(e,r)
n[o.id]=o
const a=e.parent_folder_id||0
const i=n[a].collections
if(!i.includes(o.id)){i.push(o.id)
n[a].collections=t.orderedIdsFromList(n,i)}})
t.setState({collections:n})
e.forEach(e=>{t.state.openFolders.includes(e.parent_folder_id)&&t.getFolderData(e.id)})}
this.populateItemsList=e=>{const t=c.a.cloneDeep(this.state.items)
const r=c.a.cloneDeep(this.state.collections)
e.forEach(e=>{if(this.contentTypeIsAllowed(e["content-type"])){const n=this.formatFileInfo(e)
t[n.id]=n
const o=e.folder_id
const a=r[o].items
if(!a.includes(n.id)){a.push(n.id)
r[o].items=this.orderedIdsFromList(t,a)}}})
this.setState({items:t,collections:r})}
this.onFolderToggle=e=>this.onFolderClick(e.id,e)
this.onFolderClick=(e,t)=>{const r=this.state.collections[e]
let n=[]
const o=this.state.openFolders
if(!r.locked&&o.includes(e))n=n.concat(o.filter(t=>t!==e))
else if(!r.locked){n=n.concat(o)
n.push(e)
r.collections.forEach(e=>this.getFolderData(e))}return this.setState({openFolders:n,uploadFolder:e})}
this.onFileClick=e=>{const t=this.findFolderForFile(e)
this.setState({uploadFolder:t&&t.id})
this.props.selectFile(this.state.items[e.id])}
this.onInputChange=e=>{e&&this.submitFile(e[0])}
this.submitFile=e=>{this.setState({uploading:true})
U(e,this.state.uploadFolder,this.onUploadSucceed,this.onUploadFail)}
this.onUploadSucceed=e=>{this.populateItemsList([e])
this.clearUploadInfo()
const t=this.state.collections[e.folder_id]
this.setSuccessMessage(a["a"].t("Success: File uploaded"))
0===d()("button:contains('".concat(e.display_name,"')")).length&&d()("button:contains('".concat(t&&t.name,"')")).click()
const r=d()("button:contains('".concat(e.display_name,"')"))
d()(".file-browser__tree").scrollTo(r)
r.click()}
this.onUploadFail=()=>{this.clearUploadInfo()
this.setFailureMessage(a["a"].t("File upload failed"))}
this.setSuccessMessage=e=>{Object(J["c"])(e)()}
this.setFailureMessage=e=>{Object(J["b"])(e)()}
this.selectLocalFile=()=>{this.uploadInput.click()}
this.state={collections:{0:{collections:[]}},items:{},openFolders:[],uploadFolder:null,uploading:false,loadingCount:0}}componentDidMount(){this.getRootFolders()}getContextName(e){return"courses"===e?a["a"].t("Course files"):a["a"].t("Group files")}getContextInfo(e){const t=Object(S["a"])(e)
if(t&&t[0]&&t[1]){const e=this.getContextName(t[0])
return{name:e,type:t[0],id:t[1]}}}getRootFolders(){this.props.useContextAssets&&this.getContextFolders()
this.getUserFolders()}getUserFolders(){this.getRootFolderData("users","self",{name:a["a"].t("My files")})}getContextFolders(){if(!ENV.context_asset_string)return
const e=this.getContextInfo(ENV.context_asset_string)
e&&e.type&&e.id&&this.getRootFolderData(e.type,e.id,{name:e.name})}increaseLoadingCount(){let e=this.state.loadingCount
e+=1
this.setState({loadingCount:e})}decreaseLoadingCount(){let e=this.state.loadingCount
e-=1
this.setState({loadingCount:e})}getRootFolderData(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
this.increaseLoadingCount()
R(e,t).then(e=>this.populateRootFolder(e.data,r)).catch(e=>{this.decreaseLoadingCount()
e.response&&401!==e.response.status&&this.setFailureMessage(a["a"].t("Something went wrong"))})}populateRootFolder(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
this.decreaseLoadingCount()
this.populateCollectionsList([e],t)
this.getFolderData(e.id)}getFolderData(e){const t=this.state.collections
if(!t[e].locked){this.getPaginatedData(this.folderFileApiUrl(e,"folders"),this.populateCollectionsList)
this.getPaginatedData(this.folderFileApiUrl(e),this.populateItemsList)}}getPaginatedData(e,t){f["default"].get(e).then(e=>{t(e.data)
const r=Object(q["a"])(e.headers.link).next
r&&this.getPaginatedData(r,t)})}folderFileApiUrl(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"files"
return"/api/v1/folders/".concat(e,"/").concat(t)}contentTypeIsAllowed(e){for(let t of this.props.contentTypes)if(h()(e,t))return true
return false}formatFolderInfo(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const r=e.locked_for_user?a["a"].t("Locked"):null
const n=Y({id:e.id,collections:[],items:[],name:e.name,context:"/".concat(e.context_type.toLowerCase(),"s/").concat(e.context_id),canUpload:e.can_upload,locked:e.locked_for_user,descriptor:r},t)
const o=this.state.collections[e.id]
Object.assign(n,o&&{collections:o.collections,items:o.items})
return n}formatFileInfo(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const r=this.state.collections
const n=r[e.folder_id].context
const o=Y({id:e.id,name:e.display_name,thumbnail:e.thumbnail_url,src:"".concat(n,"/files/").concat(e.id,"/preview").concat(n.includes("user")?"?verifier=".concat(e.uuid):""),alt:e.display_name},t)
return o}orderedIdsFromList(e,t){try{const r=t.sort((t,r)=>V["a"].strings(e[t].name,e[r].name))
return r}catch(e){console.error(e)
return t}}findFolderForFile(e){const t=this.state.collections
const r=Object.keys(t).find(r=>{const n=t[r].items
if(n&&n.includes(e.id))return r})
return t[r]}clearUploadInfo(){this.setState({uploading:false})
this.uploadInput.value=""}renderUploadDialog(){if(!this.props.allowUpload)return null
const e=this.state.collections[this.state.uploadFolder]
const t=!e||e.locked||!e.canUpload
const r=t?Object(n["a"])(O.a,{},void 0,a["a"].t("Upload not available for this folder")):""
const o=this.props.contentTypes.join(",")
return Object(n["a"])("div",{className:"image-upload__form"},void 0,s.a.createElement("input",{onChange:e=>this.onInputChange(e.target.files),ref:e=>{this.uploadInput=e},type:"file",accept:o,className:"hidden"}),Object(n["a"])(E.a,{id:"image-upload__upload",onClick:this.selectLocalFile,disabled:t,variant:"ghost",icon:M.a},void 0,a["a"].t("Upload File")," ",r))}renderMask(){return this.state.uploading?Object(n["a"])(w.a,{},void 0,Object(n["a"])(x.a,{className:"file-browser__uploading",title:a["a"].t("File uploading")})):null}renderLoading(){return this.state.loadingCount>0?Object(n["a"])(x.a,{className:"file-browser__loading",title:a["a"].t("Loading folders"),size:"small"}):null}render(){const e=Object(n["a"])("div",{className:"file-browser__container"},void 0,Object(n["a"])(b.a,{},void 0,a["a"].t("Available folders")),Object(n["a"])("div",{className:"file-browser__tree"},void 0,Object(n["a"])(m.a,{collections:this.state.collections,items:this.state.items,size:"medium",onCollectionToggle:this.onFolderToggle,onCollectionClick:this.onFolderClick,onItemClick:this.onFileClick,treeLabel:a["a"].t("Folder tree"),rootId:0,showRootCollection:false,defaultExpanded:this.state.openFolders,collectionIconExpanded:F.a,collectionIcon:T.a,itemIcon:B.a,selectionType:"single"}),this.renderMask(),this.renderLoading()),this.renderUploadDialog())
return e}}G.defaultProps={allowUpload:true,contentTypes:["*/*"],useContextAssets:true}
t["a"]=G},TuBq:function(e,t,r){var n=r("icBU")
var o=r("kbA8")
e.exports=h
var a="\0SLASH"+Math.random()+"\0"
var i="\0OPEN"+Math.random()+"\0"
var s="\0CLOSE"+Math.random()+"\0"
var l="\0COMMA"+Math.random()+"\0"
var c="\0PERIOD"+Math.random()+"\0"
function u(e){return parseInt(e,10)==e?parseInt(e,10):e.charCodeAt(0)}function d(e){return e.split("\\\\").join(a).split("\\{").join(i).split("\\}").join(s).split("\\,").join(l).split("\\.").join(c)}function f(e){return e.split(a).join("\\").split(i).join("{").split(s).join("}").split(l).join(",").split(c).join(".")}function p(e){if(!e)return[""]
var t=[]
var r=o("{","}",e)
if(!r)return e.split(",")
var n=r.pre
var a=r.body
var i=r.post
var s=n.split(",")
s[s.length-1]+="{"+a+"}"
var l=p(i)
if(i.length){s[s.length-1]+=l.shift()
s.push.apply(s,l)}t.push.apply(t,s)
return t}function h(e){if(!e)return[]
"{}"===e.substr(0,2)&&(e="\\{\\}"+e.substr(2))
return y(d(e),true).map(f)}function v(e){return"{"+e+"}"}function m(e){return/^-?0\d/.test(e)}function g(e,t){return e<=t}function b(e,t){return e>=t}function y(e,t){var r=[]
var a=o("{","}",e)
if(!a||/\$$/.test(a.pre))return[e]
var i=/^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(a.body)
var l=/^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(a.body)
var c=i||l
var d=a.body.indexOf(",")>=0
if(!c&&!d){if(a.post.match(/,.*\}/)){e=a.pre+"{"+a.body+s+a.post
return y(e)}return[e]}var f
if(c)f=a.body.split(/\.\./)
else{f=p(a.body)
if(1===f.length){f=y(f[0],false).map(v)
if(1===f.length){var h=a.post.length?y(a.post,false):[""]
return h.map(function(e){return a.pre+f[0]+e})}}}var E=a.pre
h=a.post.length?y(a.post,false):[""]
var _
if(c){var w=u(f[0])
var k=u(f[1])
var x=Math.max(f[0].length,f[1].length)
var j=3==f.length?Math.abs(u(f[2])):1
var O=g
var S=k<w
if(S){j*=-1
O=b}var C=f.some(m)
_=[]
for(var F=w;O(F,k);F+=j){var A
if(l){A=String.fromCharCode(F)
"\\"===A&&(A="")}else{A=String(F)
if(C){var T=x-A.length
if(T>0){var I=new Array(T+1).join("0")
A=F<0?"-"+I+A.slice(1):I+A}}}_.push(A)}}else _=n(f,function(e){return y(e,false)})
for(var M=0;M<_.length;M++)for(var W=0;W<h.length;W++){var B=E+_[M]+h[W];(!t||c||B)&&r.push(B)}return r}},eAd9:function(e,t,r){(function(t){var r=false
var n
var o
function a(){if("undefined"!==typeof n)return n
var e=document.documentElement
var t=document.createElement("div")
t.setAttribute("style","width:99px;height:99px;position:absolute;top:-9999px;overflow:scroll;")
e.appendChild(t)
n=t.offsetWidth-t.clientWidth
e.removeChild(t)
return n}function i(){return document.documentElement.scrollHeight>window.innerHeight}function s(e){if("undefined"===typeof document||r)return
var t=document.documentElement
o=window.pageYOffset
i()?t.style.width="calc(100% - "+a()+"px)":t.style.width="100%"
t.style.position="fixed"
t.style.top=-o+"px"
t.style.overflow="hidden"
r=true}function l(){if("undefined"===typeof document||!r)return
var e=document.documentElement
e.style.width=""
e.style.position=""
e.style.top=""
e.style.overflow=""
window.scroll(0,o)
r=false}function c(){if(r){l()
return}s()}var u={on:s,off:l,toggle:c}
"undefined"!==typeof e.exports?e.exports=u:t.noScroll=u})(this)},icBU:function(e,t){e.exports=function(e,t){var n=[]
for(var o=0;o<e.length;o++){var a=t(e[o],o)
r(a)?n.push.apply(n,a):n.push(a)}return n}
var r=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},is45:function(e,t,r){"use strict"
var n=r("284h")
var o=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var a=o(r("MVZn"))
var i=o(r("lwsE"))
var s=o(r("W8MJ"))
var l=o(r("a1gu"))
var c=o(r("Nsbk"))
var u=o(r("7W2i"))
var d=n(r("q1tI"))
var f=o(r("q3EI"))
var p=d.default.createElement("path",{d:"M225.882 564.765V451.824h764.386L764.386 113H0v1524.706c0 93.402 76.01 169.412 169.412 169.412h1581.176c93.403 0 169.412-76.01 169.412-169.412V564.765H225.882z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var h=function(e){(0,u.default)(t,e)
function t(){(0,i.default)(this,t)
return(0,l.default)(this,(0,c.default)(t).apply(this,arguments))}(0,s.default)(t,[{key:"render",value:function(){return d.default.createElement(f.default,Object.assign({},this.props,{name:"IconFolder",viewBox:"0 0 1920 1920",bidirectional:true}),p)}}])
t.displayName="IconFolder"
return t}(d.Component)
t.default=h
h.glyphName="folder"
h.variant="Solid"
h.propTypes=(0,a.default)({},f.default.propTypes)},kbA8:function(e,t,r){"use strict"
e.exports=n
function n(e,t,r){e instanceof RegExp&&(e=o(e,r))
t instanceof RegExp&&(t=o(t,r))
var n=a(e,t,r)
return n&&{start:n[0],end:n[1],pre:r.slice(0,n[0]),body:r.slice(n[0]+e.length,n[1]),post:r.slice(n[1]+t.length)}}function o(e,t){var r=t.match(e)
return r?r[0]:null}n.range=a
function a(e,t,r){var n,o,a,i,s
var l=r.indexOf(e)
var c=r.indexOf(t,l+1)
var u=l
if(l>=0&&c>0){n=[]
a=r.length
while(u>=0&&!s){if(u==l){n.push(u)
l=r.indexOf(e,u+1)}else if(1==n.length)s=[n.pop(),c]
else{o=n.pop()
if(o<a){a=o
i=c}c=r.indexOf(t,u+1)}u=l<c&&l>=0?l:c}n.length&&(s=[a,i])}return s}},m0LI:function(e,t){function r(e,t){var r=[]
var n=true
var o=false
var a=void 0
try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done);n=true){r.push(i.value)
if(t&&r.length===t)break}}catch(e){o=true
a=e}finally{try{n||null==s["return"]||s["return"]()}finally{if(o)throw a}}return r}e.exports=r},o5pS:function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=n
function n(e){var t=e.colors
return{trackColor:t.textLight,color:t.textBrand,xSmallSize:"1.5em",xSmallBorderWidth:"0.25em",smallSize:"3em",smallBorderWidth:"0.375em",mediumSize:"5em",mediumBorderWidth:"0.5em",largeSize:"7em",largeBorderWidth:"0.75em",inverseTrackColor:t.textDarkest,inverseColor:t.textBrand}}n.canvas=function(e){return{color:e["ic-brand-primary"],inverseColor:e["ic-brand-primary"],inverseTrackColor:e["ic-brand-font-color-dark"]}}},slAi:function(e,t,r){"use strict"
var n=r("TqRt")
var o=r("284h")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var a=n(r("lSNA"))
var i=n(r("lwsE"))
var s=n(r("W8MJ"))
var l=n(r("a1gu"))
var c=n(r("Nsbk"))
var u=n(r("7W2i"))
var d=o(r("q1tI"))
var f=n(r("17x9"))
var p=n(r("TSYQ"))
var h=n(r("XbQQ"))
var v=r("2lwo")
var m=n(r("J2CL"))
var g=n(r("DB1M"))
var b=n(r("5WdN"))
var y=n(r("oxAU"))
var E=n(r("Zuoh"))
var _=n(r("o5pS"))
var w,k,x,j,O
var S={componentId:"cvEmo",template:function(e){return"\n\n@keyframes cvEmo_dpDr{to{transform:rotate(360deg)}}\n\n@keyframes cvEmo_buIf{0%{stroke-dashoffset:190%}50%{stroke-dashoffset:50%;transform:rotate(90deg)}to{stroke-dashoffset:190%;transform:rotate(360deg)}}\n\n.cvEmo_bGBk{box-sizing:border-box;display:inline-block;overflow:hidden;position:relative;vertical-align:middle}\n\n.cvEmo_dfBC,.cvEmo_dfBC .cvEmo_cJVF{height:".concat(e.xSmallSize||"inherit",";width:").concat(e.xSmallSize||"inherit","}\n\n.cvEmo_dfBC .cvEmo_cUeT{stroke-width:calc(").concat(e.xSmallBorderWidth||"inherit","*1.75)}\n\n.cvEmo_dfBC .cvEmo_eWAY,.cvEmo_dfBC .cvEmo_dTxv{stroke-width:").concat(e.xSmallBorderWidth||"inherit","}\n\n.cvEmo_dfBC .cvEmo_eWAY{stroke-dasharray:3em;transform-origin:calc(").concat(e.xSmallSize||"inherit","/2) calc(").concat(e.xSmallSize||"inherit","/2)}\n\n.cvEmo_doqw,.cvEmo_doqw .cvEmo_cJVF{height:").concat(e.smallSize||"inherit",";width:").concat(e.smallSize||"inherit","}\n\n.cvEmo_doqw .cvEmo_cUeT{stroke-width:calc(").concat(e.smallBorderWidth||"inherit","*1.75)}\n\n.cvEmo_doqw .cvEmo_eWAY,.cvEmo_doqw .cvEmo_dTxv{stroke-width:").concat(e.smallBorderWidth||"inherit","}\n\n.cvEmo_doqw .cvEmo_eWAY{stroke-dasharray:6em;transform-origin:calc(").concat(e.smallSize||"inherit","/2) calc(").concat(e.smallSize||"inherit","/2)}\n\n.cvEmo_ycrn,.cvEmo_ycrn .cvEmo_cJVF{height:").concat(e.mediumSize||"inherit",";width:").concat(e.mediumSize||"inherit","}\n\n.cvEmo_ycrn .cvEmo_cJVF{stroke-width:").concat(e.mediumBorderWidth||"inherit","}\n\n.cvEmo_ycrn .cvEmo_cUeT{stroke-width:calc(").concat(e.mediumBorderWidth||"inherit","*1.75)}\n\n.cvEmo_ycrn .cvEmo_eWAY,.cvEmo_ycrn .cvEmo_dTxv{stroke-width:").concat(e.mediumBorderWidth||"inherit","}\n\n.cvEmo_ycrn .cvEmo_eWAY{stroke-dasharray:10.5em;transform-origin:calc(").concat(e.mediumSize||"inherit","/2) calc(").concat(e.mediumSize||"inherit","/2)}\n\n.cvEmo_cMDj,.cvEmo_cMDj .cvEmo_cJVF{height:").concat(e.largeSize||"inherit",";width:").concat(e.largeSize||"inherit","}\n\n.cvEmo_cMDj .cvEmo_cJVF{stroke-width:").concat(e.largeBorderWidth||"inherit","}\n\n.cvEmo_cMDj .cvEmo_cUeT{stroke-width:calc(").concat(e.largeBorderWidth||"inherit","*1.75)}\n\n.cvEmo_cMDj .cvEmo_eWAY,.cvEmo_cMDj .cvEmo_dTxv{stroke-width:").concat(e.largeBorderWidth||"inherit","}\n\n.cvEmo_cMDj .cvEmo_eWAY{stroke-dasharray:14em;transform-origin:calc(").concat(e.largeSize||"inherit","/2) calc(").concat(e.largeSize||"inherit","/2)}\n\n.cvEmo_cJVF{animation-duration:2.25s;animation-iteration-count:infinite;animation-name:cvEmo_dpDr;animation-timing-function:linear;display:block;left:0;position:absolute;top:0}\n\n.cvEmo_cUeT,.cvEmo_eWAY,.cvEmo_dTxv{fill:none}\n\n.cvEmo_eWAY{stroke-linecap:round}\n\n.cvEmo_bGBk:not(.cvEmo_eoSs) .cvEmo_eWAY{animation-duration:1.75s;animation-iteration-count:infinite;animation-name:cvEmo_buIf;animation-timing-function:ease}\n\n.cvEmo_bGBk.cvEmo_eoSs .cvEmo_eWAY{stroke-dashoffset:100%}\n\n.cvEmo_ddES .cvEmo_cUeT{stroke:none}\n\n.cvEmo_ddES .cvEmo_dTxv{stroke:").concat(e.trackColor||"inherit","}\n\n.cvEmo_ddES .cvEmo_eWAY{stroke:").concat(e.color||"inherit","}\n\n.cvEmo_enfx .cvEmo_cUeT{stroke:rgba(0,0,0,0.3)}\n\n.cvEmo_enfx .cvEmo_dTxv{stroke:").concat(e.inverseTrackColor||"inherit","}\n\n.cvEmo_enfx .cvEmo_eWAY{stroke:").concat(e.inverseColor||"inherit","}")},root:"cvEmo_bGBk","x-small":"cvEmo_dfBC",circle:"cvEmo_cJVF",circleShadow:"cvEmo_cUeT",circleSpin:"cvEmo_eWAY",circleTrack:"cvEmo_dTxv",small:"cvEmo_doqw",medium:"cvEmo_ycrn",large:"cvEmo_cMDj",rotate:"cvEmo_dpDr",ie11:"cvEmo_eoSs",morph:"cvEmo_buIf",default:"cvEmo_ddES",inverse:"cvEmo_enfx"}
var C=(w=(0,E.default)(),k=(0,m.default)(_.default,S),w(x=k(x=(O=j=function(e){(0,u.default)(t,e)
function t(e){var r;(0,i.default)(this,t)
r=(0,l.default)(this,(0,c.default)(t).call(this))
r.titleId=(0,y.default)("Spinner")
return r}(0,s.default)(t,[{key:"radius",value:function(){switch(this.props.size){case"x-small":return"0.5em"
case"small":return"1em"
case"large":return"2.25em"
default:return"1.75em"}}},{key:"render",value:function(){var e
var r=g.default.msie&&g.default.version>10
var n=(e={},(0,a.default)(e,S.root,true),(0,a.default)(e,S[this.props.size],true),(0,a.default)(e,S[this.props.variant],true),(0,a.default)(e,S.ie11,r),e)
var o=h.default.omitViewProps((0,v.omitProps)(this.props,t.propTypes),t)
return d.default.createElement(h.default,Object.assign({},o,{as:this.props.as,elementRef:this.props.elementRef,className:(0,p.default)(n),margin:this.props.margin}),d.default.createElement("svg",{className:S.circle,role:"img","aria-labelledby":this.titleId,focusable:"false"},d.default.createElement("title",{id:this.titleId},this.props.title),d.default.createElement("g",{role:"presentation"},d.default.createElement("circle",{className:S.circleShadow,cx:"50%",cy:"50%",r:this.radius()}),d.default.createElement("circle",{className:S.circleTrack,cx:"50%",cy:"50%",r:this.radius()}),d.default.createElement("circle",{className:S.circleSpin,cx:"50%",cy:"50%",r:this.radius()}))))}}])
t.displayName="Spinner"
return t}(d.Component),j.propTypes={title:f.default.string.isRequired,size:f.default.oneOf(["x-small","small","medium","large"]),variant:f.default.oneOf(["default","inverse"]),margin:b.default.spacing,elementRef:f.default.func,as:f.default.elementType},j.defaultProps={as:"div",size:"medium",variant:"default",margin:void 0,elementRef:void 0},O))||x)||x)
t.default=C},"w/Wh":function(e,t,r){"use strict"
var n=r("284h")
var o=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var a=o(r("MVZn"))
var i=o(r("lwsE"))
var s=o(r("W8MJ"))
var l=o(r("a1gu"))
var c=o(r("Nsbk"))
var u=o(r("7W2i"))
var d=n(r("q1tI"))
var f=o(r("q3EI"))
var p=d.default.createElement("path",{d:"M572.501 747l-254.933 815.893-101.867-31.786 278.507-890.774h1105.813v-320H783.808L612.181 107H.021v1546.667c0 88.213 71.787 160 160 160h1388.054c75.946 0 141.973-54.08 156.906-128.64L1892.608 747H572.501z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var h=function(e){(0,u.default)(t,e)
function t(){(0,i.default)(this,t)
return(0,l.default)(this,(0,c.default)(t).apply(this,arguments))}(0,s.default)(t,[{key:"render",value:function(){return d.default.createElement(f.default,Object.assign({},this.props,{name:"IconOpenFolder",viewBox:"0 0 1920 1920",bidirectional:true}),p)}}])
t.displayName="IconOpenFolder"
return t}(d.Component)
t.default=h
h.glyphName="open-folder"
h.variant="Solid"
h.propTypes=(0,a.default)({},f.default.propTypes)},wTVA:function(e,t){function r(e){if(Array.isArray(e))return e}e.exports=r},wkBT:function(e,t){function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}e.exports=r},xQ1y:function(e,t,r){"use strict"
var n=r("284h")
var o=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var a=o(r("MVZn"))
var i=o(r("lwsE"))
var s=o(r("W8MJ"))
var l=o(r("a1gu"))
var c=o(r("Nsbk"))
var u=o(r("7W2i"))
var d=n(r("q1tI"))
var f=o(r("q3EI"))
var p=d.default.createElement("path",{d:"M1467.552 1700.252l297.428-297.428 155.362 155.362L1558.527 1920H368.814L7 1558.186l155.361-155.362 297.429 297.428h1007.762zM965.902 0l517.175 517.176-155.361 155.361-251.941-251.94v1002.708H856.028V420.597l-251.941 251.94-155.362-155.361L965.901 0z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var h=function(e){(0,u.default)(t,e)
function t(){(0,i.default)(this,t)
return(0,l.default)(this,(0,c.default)(t).apply(this,arguments))}(0,s.default)(t,[{key:"render",value:function(){return d.default.createElement(f.default,Object.assign({},this.props,{name:"IconUpload",viewBox:"0 0 1920 1920"}),p)}}])
t.displayName="IconUpload"
return t}(d.Component)
t.default=h
h.glyphName="upload"
h.variant="Solid"
h.propTypes=(0,a.default)({},f.default.propTypes)},"z+Bb":function(e,t,r){"use strict"
var n=r("TqRt")
var o=r("284h")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var a=n(r("lSNA"))
var i=n(r("lwsE"))
var s=n(r("W8MJ"))
var l=n(r("a1gu"))
var c=n(r("Nsbk"))
var u=n(r("7W2i"))
var d=o(r("q1tI"))
var f=n(r("17x9"))
var p=n(r("TSYQ"))
var h=n(r("eAd9"))
var v=n(r("J2CL"))
var m=n(r("lGJA"))
var g=n(r("ZJ40"))
var b=r("2lwo")
var y=n(r("1A3U"))
var E,_,w,k,x
var j={componentId:"fvvQs",template:function(e){return"\n\n.fvvQs_bGBk{background:".concat(e.background||"inherit",";border:").concat(e.borderWidth||"inherit"," solid ").concat(e.borderColor||"inherit",";border-radius:").concat(e.borderRadius||"inherit",";bottom:0;box-sizing:border-box;display:flex;justify-content:center;left:0;outline:none;overflow:auto;position:absolute;right:0;top:0;z-index:").concat(e.zIndex||"inherit","}\n\n.fvvQs_bGBk:focus{border-color:").concat(e.focusBorderColor||"inherit","}\n\n.fvvQs_cMOR{position:fixed}\n\n.fvvQs_dacV{align-items:flex-start}\n\n.fvvQs_cwzs{align-items:center}\n\n.fvvQs_cGWj{align-items:flex-end}\n\n.fvvQs_eFiI{align-items:stretch}")},root:"fvvQs_bGBk",fullscreen:"fvvQs_cMOR",top:"fvvQs_dacV",center:"fvvQs_cwzs",bottom:"fvvQs_cGWj",stretch:"fvvQs_eFiI"}
var O=(E=(0,g.default)("5.0.0",{fullScreen:"fullscreen"}),_=(0,v.default)(y.default,j),E(w=_(w=(x=k=function(e){(0,u.default)(t,e)
function t(){var e
var r;(0,i.default)(this,t)
for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a]
r=(0,l.default)(this,(e=(0,c.default)(t)).call.apply(e,[this].concat(o)))
r.contentRef=function(e){r._content=e}
return r}(0,s.default)(t,[{key:"componentDidMount",value:function(){(this.props.fullscreen||this.props.fullScreen)&&h.default.on()}},{key:"componentWillUnmount",value:function(){(this.props.fullscreen||this.props.fullScreen)&&h.default.off()}},{key:"render",value:function(){var e
var r=(0,m.default)(this.props.children,{ref:this.contentRef})
var n=(0,p.default)((e={},(0,a.default)(e,j.root,true),(0,a.default)(e,j[this.props.placement],true),(0,a.default)(e,j.fullscreen,this.props.fullscreen||this.props.fullScreen),e))
var o=(0,b.omitProps)(this.props,t.propTypes)
o.className=n
if("function"===typeof this.props.onClick){o.onClick=this.props.onClick
o.tabIndex=-1}return d.default.createElement("span",o,r)}}])
t.displayName="Mask"
return t}(d.Component),k.propTypes={onDismiss:f.default.func,placement:f.default.oneOf(["top","center","bottom","stretch"]),fullscreen:f.default.bool,children:f.default.node,onClick:f.default.func},k.defaultProps={placement:"center",fullscreen:false,onDismiss:void 0,children:null,onClick:void 0},x))||w)||w)
var S=O
t.default=S}}])

//# sourceMappingURL=100-c-5208f2ffeb.js.map