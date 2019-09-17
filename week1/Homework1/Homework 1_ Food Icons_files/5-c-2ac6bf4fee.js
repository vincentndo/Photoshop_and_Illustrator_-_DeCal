(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[5],{"3zPy":function(r,e){function t(r){if(r&&"object"===typeof r){var e=r.which||r.keyCode||r.charCode
e&&(r=e)}if("number"===typeof r)return s[r]
var t=String(r)
var i=a[t.toLowerCase()]
if(i)return i
i=n[t.toLowerCase()]
if(i)return i
if(1===t.length)return t.charCodeAt(0)
return}t.isEventKey=function(r,e){if(r&&"object"===typeof r){var t=r.which||r.keyCode||r.charCode
if(null===t||void 0===t)return false
if("string"===typeof e){var i=a[e.toLowerCase()]
if(i)return i===t
i=n[e.toLowerCase()]
if(i)return i===t}else if("number"===typeof e)return e===t
return false}}
e=r.exports=t
var a=e.code=e.codes={backspace:8,tab:9,enter:13,shift:16,ctrl:17,alt:18,"pause/break":19,"caps lock":20,esc:27,space:32,"page up":33,"page down":34,end:35,home:36,left:37,up:38,right:39,down:40,insert:45,delete:46,command:91,"left command":91,"right command":93,"numpad *":106,"numpad +":107,"numpad -":109,"numpad .":110,"numpad /":111,"num lock":144,"scroll lock":145,"my computer":182,"my calculator":183,";":186,"=":187,",":188,"-":189,".":190,"/":191,"`":192,"[":219,"\\":220,"]":221,"'":222}
var n=e.aliases={windows:91,"⇧":16,"⌥":18,"⌃":17,"⌘":91,ctl:17,control:17,option:18,pause:19,break:19,caps:20,return:13,escape:27,spc:32,spacebar:32,pgup:33,pgdn:34,ins:45,del:46,cmd:91}
for(i=97;i<123;i++)a[String.fromCharCode(i)]=i-32
for(var i=48;i<58;i++)a[i-48]=i
for(i=1;i<13;i++)a["f"+i]=i+111
for(i=0;i<10;i++)a["numpad "+i]=i+96
var s=e.names=e.title={}
for(i in a)s[a[i]]=i
for(var o in n)a[o]=n[o]},Zss7:function(r,e,t){var a;(function(n){var i=/^\s+/,s=/\s+$/,o=0,f=n.round,u=n.min,l=n.max,h=n.random
function c(r,e){r=r||""
e=e||{}
if(r instanceof c)return r
if(!(this instanceof c))return new c(r,e)
var t=g(r)
this._originalInput=r,this._r=t.r,this._g=t.g,this._b=t.b,this._a=t.a,this._roundA=f(100*this._a)/100,this._format=e.format||t.format
this._gradientType=e.gradientType
this._r<1&&(this._r=f(this._r))
this._g<1&&(this._g=f(this._g))
this._b<1&&(this._b=f(this._b))
this._ok=t.ok
this._tc_id=o++}c.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var r=this.toRgb()
return(299*r.r+587*r.g+114*r.b)/1e3},getLuminance:function(){var r=this.toRgb()
var e,t,a,i,s,o
e=r.r/255
t=r.g/255
a=r.b/255
i=e<=.03928?e/12.92:n.pow((e+.055)/1.055,2.4)
s=t<=.03928?t/12.92:n.pow((t+.055)/1.055,2.4)
o=a<=.03928?a/12.92:n.pow((a+.055)/1.055,2.4)
return.2126*i+.7152*s+.0722*o},setAlpha:function(r){this._a=P(r)
this._roundA=f(100*this._a)/100
return this},toHsv:function(){var r=v(this._r,this._g,this._b)
return{h:360*r.h,s:r.s,v:r.v,a:this._a}},toHsvString:function(){var r=v(this._r,this._g,this._b)
var e=f(360*r.h),t=f(100*r.s),a=f(100*r.v)
return 1==this._a?"hsv("+e+", "+t+"%, "+a+"%)":"hsva("+e+", "+t+"%, "+a+"%, "+this._roundA+")"},toHsl:function(){var r=b(this._r,this._g,this._b)
return{h:360*r.h,s:r.s,l:r.l,a:this._a}},toHslString:function(){var r=b(this._r,this._g,this._b)
var e=f(360*r.h),t=f(100*r.s),a=f(100*r.l)
return 1==this._a?"hsl("+e+", "+t+"%, "+a+"%)":"hsla("+e+", "+t+"%, "+a+"%, "+this._roundA+")"},toHex:function(r){return _(this._r,this._g,this._b,r)},toHexString:function(r){return"#"+this.toHex(r)},toHex8:function(r){return y(this._r,this._g,this._b,this._a,r)},toHex8String:function(r){return"#"+this.toHex8(r)},toRgb:function(){return{r:f(this._r),g:f(this._g),b:f(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+f(this._r)+", "+f(this._g)+", "+f(this._b)+")":"rgba("+f(this._r)+", "+f(this._g)+", "+f(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:f(100*T(this._r,255))+"%",g:f(100*T(this._g,255))+"%",b:f(100*T(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+f(100*T(this._r,255))+"%, "+f(100*T(this._g,255))+"%, "+f(100*T(this._b,255))+"%)":"rgba("+f(100*T(this._r,255))+"%, "+f(100*T(this._g,255))+"%, "+f(100*T(this._b,255))+"%, "+this._roundA+")"},toName:function(){if(0===this._a)return"transparent"
if(this._a<1)return false
return I[_(this._r,this._g,this._b,true)]||false},toFilter:function(r){var e="#"+A(this._r,this._g,this._b,this._a)
var t=e
var a=this._gradientType?"GradientType = 1, ":""
if(r){var n=c(r)
t="#"+A(n._r,n._g,n._b,n._a)}return"progid:DXImageTransform.Microsoft.gradient("+a+"startColorstr="+e+",endColorstr="+t+")"},toString:function(r){var e=!!r
r=r||this._format
var t=false
var a=this._a<1&&this._a>=0
var n=!e&&a&&("hex"===r||"hex6"===r||"hex3"===r||"hex4"===r||"hex8"===r||"name"===r)
if(n){if("name"===r&&0===this._a)return this.toName()
return this.toRgbString()}"rgb"===r&&(t=this.toRgbString())
"prgb"===r&&(t=this.toPercentageRgbString())
"hex"!==r&&"hex6"!==r||(t=this.toHexString())
"hex3"===r&&(t=this.toHexString(true))
"hex4"===r&&(t=this.toHex8String(true))
"hex8"===r&&(t=this.toHex8String())
"name"===r&&(t=this.toName())
"hsl"===r&&(t=this.toHslString())
"hsv"===r&&(t=this.toHsvString())
return t||this.toHexString()},clone:function(){return c(this.toString())},_applyModification:function(r,e){var t=r.apply(null,[this].concat([].slice.call(e)))
this._r=t._r
this._g=t._g
this._b=t._b
this.setAlpha(t._a)
return this},lighten:function(){return this._applyModification(S,arguments)},brighten:function(){return this._applyModification(H,arguments)},darken:function(){return this._applyModification(C,arguments)},desaturate:function(){return this._applyModification(x,arguments)},saturate:function(){return this._applyModification(k,arguments)},greyscale:function(){return this._applyModification(w,arguments)},spin:function(){return this._applyModification(R,arguments)},_applyCombination:function(r,e){return r.apply(null,[this].concat([].slice.call(e)))},analogous:function(){return this._applyCombination(j,arguments)},complement:function(){return this._applyCombination(F,arguments)},monochromatic:function(){return this._applyCombination(z,arguments)},splitcomplement:function(){return this._applyCombination(M,arguments)},triad:function(){return this._applyCombination(L,arguments)},tetrad:function(){return this._applyCombination(q,arguments)}}
c.fromRatio=function(r,e){if("object"==typeof r){var t={}
for(var a in r)r.hasOwnProperty(a)&&(t[a]="a"===a?r[a]:J(r[a]))
r=t}return c(r,e)}
function g(r){var e={r:0,g:0,b:0}
var t=1
var a=null
var n=null
var i=null
var s=false
var o=false
"string"==typeof r&&(r=er(r))
if("object"==typeof r){if(rr(r.r)&&rr(r.g)&&rr(r.b)){e=d(r.r,r.g,r.b)
s=true
o="%"===String(r.r).substr(-1)?"prgb":"rgb"}else if(rr(r.h)&&rr(r.s)&&rr(r.v)){a=J(r.s)
n=J(r.v)
e=m(r.h,a,n)
s=true
o="hsv"}else if(rr(r.h)&&rr(r.s)&&rr(r.l)){a=J(r.s)
i=J(r.l)
e=p(r.h,a,i)
s=true
o="hsl"}r.hasOwnProperty("a")&&(t=r.a)}t=P(t)
return{ok:s,format:r.format||o,r:u(255,l(e.r,0)),g:u(255,l(e.g,0)),b:u(255,l(e.b,0)),a:t}}function d(r,e,t){return{r:255*T(r,255),g:255*T(e,255),b:255*T(t,255)}}function b(r,e,t){r=T(r,255)
e=T(e,255)
t=T(t,255)
var a=l(r,e,t),n=u(r,e,t)
var i,s,o=(a+n)/2
if(a==n)i=s=0
else{var f=a-n
s=o>.5?f/(2-a-n):f/(a+n)
switch(a){case r:i=(e-t)/f+(e<t?6:0)
break
case e:i=(t-r)/f+2
break
case t:i=(r-e)/f+4}i/=6}return{h:i,s:s,l:o}}function p(r,e,t){var a,n,i
r=T(r,360)
e=T(e,100)
t=T(t,100)
function s(r,e,t){t<0&&(t+=1)
t>1&&(t-=1)
if(t<1/6)return r+6*(e-r)*t
if(t<.5)return e
if(t<2/3)return r+(e-r)*(2/3-t)*6
return r}if(0===e)a=n=i=t
else{var o=t<.5?t*(1+e):t+e-t*e
var f=2*t-o
a=s(f,o,r+1/3)
n=s(f,o,r)
i=s(f,o,r-1/3)}return{r:255*a,g:255*n,b:255*i}}function v(r,e,t){r=T(r,255)
e=T(e,255)
t=T(t,255)
var a=l(r,e,t),n=u(r,e,t)
var i,s,o=a
var f=a-n
s=0===a?0:f/a
if(a==n)i=0
else{switch(a){case r:i=(e-t)/f+(e<t?6:0)
break
case e:i=(t-r)/f+2
break
case t:i=(r-e)/f+4}i/=6}return{h:i,s:s,v:o}}function m(r,e,t){r=6*T(r,360)
e=T(e,100)
t=T(t,100)
var a=n.floor(r),i=r-a,s=t*(1-e),o=t*(1-i*e),f=t*(1-(1-i)*e),u=a%6,l=[t,o,s,s,f,t][u],h=[f,t,t,o,s,s][u],c=[s,s,f,t,t,o][u]
return{r:255*l,g:255*h,b:255*c}}function _(r,e,t,a){var n=[B(f(r).toString(16)),B(f(e).toString(16)),B(f(t).toString(16))]
if(a&&n[0].charAt(0)==n[0].charAt(1)&&n[1].charAt(0)==n[1].charAt(1)&&n[2].charAt(0)==n[2].charAt(1))return n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0)
return n.join("")}function y(r,e,t,a,n){var i=[B(f(r).toString(16)),B(f(e).toString(16)),B(f(t).toString(16)),B(W(a))]
if(n&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)&&i[3].charAt(0)==i[3].charAt(1))return i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0)
return i.join("")}function A(r,e,t,a){var n=[B(W(a)),B(f(r).toString(16)),B(f(e).toString(16)),B(f(t).toString(16))]
return n.join("")}c.equals=function(r,e){if(!r||!e)return false
return c(r).toRgbString()==c(e).toRgbString()}
c.random=function(){return c.fromRatio({r:h(),g:h(),b:h()})}
function x(r,e){e=0===e?0:e||10
var t=c(r).toHsl()
t.s-=e/100
t.s=O(t.s)
return c(t)}function k(r,e){e=0===e?0:e||10
var t=c(r).toHsl()
t.s+=e/100
t.s=O(t.s)
return c(t)}function w(r){return c(r).desaturate(100)}function S(r,e){e=0===e?0:e||10
var t=c(r).toHsl()
t.l+=e/100
t.l=O(t.l)
return c(t)}function H(r,e){e=0===e?0:e||10
var t=c(r).toRgb()
t.r=l(0,u(255,t.r-f(-e/100*255)))
t.g=l(0,u(255,t.g-f(-e/100*255)))
t.b=l(0,u(255,t.b-f(-e/100*255)))
return c(t)}function C(r,e){e=0===e?0:e||10
var t=c(r).toHsl()
t.l-=e/100
t.l=O(t.l)
return c(t)}function R(r,e){var t=c(r).toHsl()
var a=(t.h+e)%360
t.h=a<0?360+a:a
return c(t)}function F(r){var e=c(r).toHsl()
e.h=(e.h+180)%360
return c(e)}function L(r){var e=c(r).toHsl()
var t=e.h
return[c(r),c({h:(t+120)%360,s:e.s,l:e.l}),c({h:(t+240)%360,s:e.s,l:e.l})]}function q(r){var e=c(r).toHsl()
var t=e.h
return[c(r),c({h:(t+90)%360,s:e.s,l:e.l}),c({h:(t+180)%360,s:e.s,l:e.l}),c({h:(t+270)%360,s:e.s,l:e.l})]}function M(r){var e=c(r).toHsl()
var t=e.h
return[c(r),c({h:(t+72)%360,s:e.s,l:e.l}),c({h:(t+216)%360,s:e.s,l:e.l})]}function j(r,e,t){e=e||6
t=t||30
var a=c(r).toHsl()
var n=360/t
var i=[c(r)]
for(a.h=(a.h-(n*e>>1)+720)%360;--e;){a.h=(a.h+n)%360
i.push(c(a))}return i}function z(r,e){e=e||6
var t=c(r).toHsv()
var a=t.h,n=t.s,i=t.v
var s=[]
var o=1/e
while(e--){s.push(c({h:a,s:n,v:i}))
i=(i+o)%1}return s}c.mix=function(r,e,t){t=0===t?0:t||50
var a=c(r).toRgb()
var n=c(e).toRgb()
var i=t/100
var s={r:(n.r-a.r)*i+a.r,g:(n.g-a.g)*i+a.g,b:(n.b-a.b)*i+a.b,a:(n.a-a.a)*i+a.a}
return c(s)}
c.readability=function(r,e){var t=c(r)
var a=c(e)
return(n.max(t.getLuminance(),a.getLuminance())+.05)/(n.min(t.getLuminance(),a.getLuminance())+.05)}
c.isReadable=function(r,e,t){var a=c.readability(r,e)
var n,i
i=false
n=tr(t)
switch(n.level+n.size){case"AAsmall":case"AAAlarge":i=a>=4.5
break
case"AAlarge":i=a>=3
break
case"AAAsmall":i=a>=7}return i}
c.mostReadable=function(r,e,t){var a=null
var n=0
var i
var s,o,f
t=t||{}
s=t.includeFallbackColors
o=t.level
f=t.size
for(var u=0;u<e.length;u++){i=c.readability(r,e[u])
if(i>n){n=i
a=c(e[u])}}if(c.isReadable(r,a,{level:o,size:f})||!s)return a
t.includeFallbackColors=false
return c.mostReadable(r,["#fff","#000"],t)}
var E=c.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"}
var I=c.hexNames=N(E)
function N(r){var e={}
for(var t in r)r.hasOwnProperty(t)&&(e[r[t]]=t)
return e}function P(r){r=parseFloat(r);(isNaN(r)||r<0||r>1)&&(r=1)
return r}function T(r,e){D(r)&&(r="100%")
var t=U(r)
r=u(e,l(0,parseFloat(r)))
t&&(r=parseInt(r*e,10)/100)
if(n.abs(r-e)<1e-6)return 1
return r%e/parseFloat(e)}function O(r){return u(1,l(0,r))}function $(r){return parseInt(r,16)}function D(r){return"string"==typeof r&&-1!=r.indexOf(".")&&1===parseFloat(r)}function U(r){return"string"===typeof r&&-1!=r.indexOf("%")}function B(r){return 1==r.length?"0"+r:""+r}function J(r){r<=1&&(r=100*r+"%")
return r}function W(r){return n.round(255*parseFloat(r)).toString(16)}function G(r){return $(r)/255}var K=(V="[-\\+]?\\d+%?",X="[-\\+]?\\d*\\.\\d+%?",Z="(?:"+X+")|(?:"+V+")",Q="[\\s|\\(]+("+Z+")[,|\\s]+("+Z+")[,|\\s]+("+Z+")\\s*\\)?",Y="[\\s|\\(]+("+Z+")[,|\\s]+("+Z+")[,|\\s]+("+Z+")[,|\\s]+("+Z+")\\s*\\)?",{CSS_UNIT:new RegExp(Z),rgb:new RegExp("rgb"+Q),rgba:new RegExp("rgba"+Y),hsl:new RegExp("hsl"+Q),hsla:new RegExp("hsla"+Y),hsv:new RegExp("hsv"+Q),hsva:new RegExp("hsva"+Y),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/})
var V,X,Z,Q,Y
function rr(r){return!!K.CSS_UNIT.exec(r)}function er(r){r=r.replace(i,"").replace(s,"").toLowerCase()
var e=false
if(E[r]){r=E[r]
e=true}else if("transparent"==r)return{r:0,g:0,b:0,a:0,format:"name"}
var t
if(t=K.rgb.exec(r))return{r:t[1],g:t[2],b:t[3]}
if(t=K.rgba.exec(r))return{r:t[1],g:t[2],b:t[3],a:t[4]}
if(t=K.hsl.exec(r))return{h:t[1],s:t[2],l:t[3]}
if(t=K.hsla.exec(r))return{h:t[1],s:t[2],l:t[3],a:t[4]}
if(t=K.hsv.exec(r))return{h:t[1],s:t[2],v:t[3]}
if(t=K.hsva.exec(r))return{h:t[1],s:t[2],v:t[3],a:t[4]}
if(t=K.hex8.exec(r))return{r:$(t[1]),g:$(t[2]),b:$(t[3]),a:G(t[4]),format:e?"name":"hex8"}
if(t=K.hex6.exec(r))return{r:$(t[1]),g:$(t[2]),b:$(t[3]),format:e?"name":"hex"}
if(t=K.hex4.exec(r))return{r:$(t[1]+""+t[1]),g:$(t[2]+""+t[2]),b:$(t[3]+""+t[3]),a:G(t[4]+""+t[4]),format:e?"name":"hex8"}
if(t=K.hex3.exec(r))return{r:$(t[1]+""+t[1]),g:$(t[2]+""+t[2]),b:$(t[3]+""+t[3]),format:e?"name":"hex"}
return false}function tr(r){var e,t
r=r||{level:"AA",size:"small"}
e=(r.level||"AA").toUpperCase()
t=(r.size||"small").toLowerCase()
"AA"!==e&&"AAA"!==e&&(e="AA")
"small"!==t&&"large"!==t&&(t="small")
return{level:e,size:t}}if(r.exports)r.exports=c
else{a=function(){return c}.call(e,t,e,r),void 0!==a&&(r.exports=a)}})(Math)}}])

//# sourceMappingURL=5-c-2ac6bf4fee.js.map