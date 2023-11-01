//js
import{c as cr,f as sr}from"./_commonjsHelpers.25897ecf.js";import"./config.09e429ba.js";var rr={},P={},J=34,z=10,Z=13;function or(e){return new Function("d","return {"+e.map(function(t,n){return JSON.stringify(t)+": d["+n+'] || ""'}).join(",")+"}")}function hr(e,t){var n=or(e);return function(o,i){return t(n(o),i,e)}}function er(e){var t=Object.create(null),n=[];return e.forEach(function(o){for(var i in o)i in t||n.push(t[i]=i)}),n}function y(e,t){var n=e+"",o=n.length;return o<t?new Array(t-o+1).join(0)+n:n}function fr(e){return e<0?"-"+y(-e,6):e>9999?"+"+y(e,6):y(e,4)}function gr(e){var t=e.getUTCHours(),n=e.getUTCMinutes(),o=e.getUTCSeconds(),i=e.getUTCMilliseconds();return isNaN(e)?"Invalid Date":fr(e.getUTCFullYear())+"-"+y(e.getUTCMonth()+1,2)+"-"+y(e.getUTCDate(),2)+(i?"T"+y(t,2)+":"+y(n,2)+":"+y(o,2)+"."+y(i,3)+"Z":o?"T"+y(t,2)+":"+y(n,2)+":"+y(o,2)+"Z":n||t?"T"+y(t,2)+":"+y(n,2)+"Z":"")}function dr(e){var t=new RegExp('["'+e+`
\r]`),n=e.charCodeAt(0);function o(s,h){var w,m,f=i(s,function(k,p){if(w)return w(k,p-1);m=k,w=h?hr(k,h):or(k)});return f.columns=m||[],f}function i(s,h){var w=[],m=s.length,f=0,k=0,p,L=m<=0,M=!1;s.charCodeAt(m-1)===z&&--m,s.charCodeAt(m-1)===Z&&--m;function _(){if(L)return P;if(M)return M=!1,rr;var V,F=f,x;if(s.charCodeAt(F)===J){for(;f++<m&&s.charCodeAt(f)!==J||s.charCodeAt(++f)===J;);return(V=f)>=m?L=!0:(x=s.charCodeAt(f++))===z?M=!0:x===Z&&(M=!0,s.charCodeAt(f)===z&&++f),s.slice(F+1,V-1).replace(/""/g,'"')}for(;f<m;){if((x=s.charCodeAt(V=f++))===z)M=!0;else if(x===Z)M=!0,s.charCodeAt(f)===z&&++f;else if(x!==n)continue;return s.slice(F,V)}return L=!0,s.slice(F,m)}for(;(p=_())!==P;){for(var O=[];p!==rr&&p!==P;)O.push(p),p=_();h&&(O=h(O,k++))==null||w.push(O)}return w}function a(s,h){return s.map(function(w){return h.map(function(m){return U(w[m])}).join(e)})}function u(s,h){return h==null&&(h=er(s)),[h.map(U).join(e)].concat(a(s,h)).join(`
`)}function l(s,h){return h==null&&(h=er(s)),a(s,h).join(`
`)}function c(s){return s.map(d).join(`
`)}function d(s){return s.map(U).join(e)}function U(s){return s==null?"":s instanceof Date?gr(s):t.test(s+="")?'"'+s.replace(/"/g,'""')+'"':s}return{parse:o,parseRows:i,format:u,formatBody:l,formatRows:c,formatRow:d,formatValue:U}}var br=dr(","),mr=br.parse;(function(){}).call(cr);sr({decimal:".",thousands:",",grouping:[3],currency:["£",""]}).format;var yr={rgb2hsl:A,rgb2hsv:I,rgb2hwb:T,rgb2cmyk:R,rgb2keyword:q,rgb2xyz:H,rgb2lab:Q,rgb2lch:wr,hsl2rgb:D,hsl2hsv:pr,hsl2hwb:vr,hsl2cmyk:kr,hsl2keyword:Mr,hsv2rgb:B,hsv2hsl:Cr,hsv2hwb:xr,hsv2cmyk:zr,hsv2keyword:jr,hwb2rgb:E,hwb2hsl:Ar,hwb2hsv:Tr,hwb2cmyk:Rr,hwb2keyword:qr,cmyk2rgb:S,cmyk2hsl:Er,cmyk2hsv:Sr,cmyk2hwb:Nr,cmyk2keyword:Ur,keyword2rgb:v,keyword2hsl:Ir,keyword2hsv:Dr,keyword2hwb:Br,keyword2cmyk:Lr,keyword2lab:Pr,keyword2xyz:Jr,xyz2rgb:ar,xyz2lab:ir,xyz2lch:Or,lab2xyz:W,lab2rgb:ur,lab2lch:$,lch2lab:X,lch2xyz:Vr,lch2rgb:Fr};function A(e){var t=e[0]/255,n=e[1]/255,o=e[2]/255,i=Math.min(t,n,o),a=Math.max(t,n,o),u=a-i,l,c,d;return a==i?l=0:t==a?l=(n-o)/u:n==a?l=2+(o-t)/u:o==a&&(l=4+(t-n)/u),l=Math.min(l*60,360),l<0&&(l+=360),d=(i+a)/2,a==i?c=0:d<=.5?c=u/(a+i):c=u/(2-a-i),[l,c*100,d*100]}function I(e){var t=e[0],n=e[1],o=e[2],i=Math.min(t,n,o),a=Math.max(t,n,o),u=a-i,l,c,d;return a==0?c=0:c=u/a*1e3/10,a==i?l=0:t==a?l=(n-o)/u:n==a?l=2+(o-t)/u:o==a&&(l=4+(t-n)/u),l=Math.min(l*60,360),l<0&&(l+=360),d=a/255*1e3/10,[l,c,d]}function T(e){var t=e[0],n=e[1],a=e[2],o=A(e)[0],i=1/255*Math.min(t,Math.min(n,a)),a=1-1/255*Math.max(t,Math.max(n,a));return[o,i*100,a*100]}function R(e){var t=e[0]/255,n=e[1]/255,o=e[2]/255,i,a,u,l;return l=Math.min(1-t,1-n,1-o),i=(1-t-l)/(1-l)||0,a=(1-n-l)/(1-l)||0,u=(1-o-l)/(1-l)||0,[i*100,a*100,u*100,l*100]}function q(e){return lr[JSON.stringify(e)]}function H(e){var t=e[0]/255,n=e[1]/255,o=e[2]/255;t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92,n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92,o=o>.04045?Math.pow((o+.055)/1.055,2.4):o/12.92;var i=t*.4124+n*.3576+o*.1805,a=t*.2126+n*.7152+o*.0722,u=t*.0193+n*.1192+o*.9505;return[i*100,a*100,u*100]}function Q(e){var t=H(e),n=t[0],o=t[1],i=t[2],a,u,l;return n/=95.047,o/=100,i/=108.883,n=n>.008856?Math.pow(n,1/3):7.787*n+16/116,o=o>.008856?Math.pow(o,1/3):7.787*o+16/116,i=i>.008856?Math.pow(i,1/3):7.787*i+16/116,a=116*o-16,u=500*(n-o),l=200*(o-i),[a,u,l]}function wr(e){return $(Q(e))}function D(e){var t=e[0]/360,n=e[1]/100,o=e[2]/100,i,a,u,l,c;if(n==0)return c=o*255,[c,c,c];o<.5?a=o*(1+n):a=o+n-o*n,i=2*o-a,l=[0,0,0];for(var d=0;d<3;d++)u=t+1/3*-(d-1),u<0&&u++,u>1&&u--,6*u<1?c=i+(a-i)*6*u:2*u<1?c=a:3*u<2?c=i+(a-i)*(2/3-u)*6:c=i,l[d]=c*255;return l}function pr(e){var t=e[0],n=e[1]/100,o=e[2]/100,i,a;return o===0?[0,0,0]:(o*=2,n*=o<=1?o:2-o,a=(o+n)/2,i=2*n/(o+n),[t,i*100,a*100])}function vr(e){return T(D(e))}function kr(e){return R(D(e))}function Mr(e){return q(D(e))}function B(e){var t=e[0]/60,n=e[1]/100,c=e[2]/100,o=Math.floor(t)%6,i=t-Math.floor(t),a=255*c*(1-n),u=255*c*(1-n*i),l=255*c*(1-n*(1-i)),c=255*c;switch(o){case 0:return[c,l,a];case 1:return[u,c,a];case 2:return[a,c,l];case 3:return[a,u,c];case 4:return[l,a,c];case 5:return[c,a,u]}}function Cr(e){var t=e[0],n=e[1]/100,o=e[2]/100,i,a;return a=(2-n)*o,i=n*o,i/=a<=1?a:2-a,i=i||0,a/=2,[t,i*100,a*100]}function xr(e){return T(B(e))}function zr(e){return R(B(e))}function jr(e){return q(B(e))}function E(e){var t=e[0]/360,n=e[1]/100,o=e[2]/100,i=n+o,a,u,l,c;switch(i>1&&(n/=i,o/=i),a=Math.floor(6*t),u=1-o,l=6*t-a,a&1&&(l=1-l),c=n+l*(u-n),a){default:case 6:case 0:r=u,g=c,b=n;break;case 1:r=c,g=u,b=n;break;case 2:r=n,g=u,b=c;break;case 3:r=n,g=c,b=u;break;case 4:r=c,g=n,b=u;break;case 5:r=u,g=n,b=c;break}return[r*255,g*255,b*255]}function Ar(e){return A(E(e))}function Tr(e){return I(E(e))}function Rr(e){return R(E(e))}function qr(e){return q(E(e))}function S(e){var t=e[0]/100,n=e[1]/100,o=e[2]/100,i=e[3]/100,a,u,l;return a=1-Math.min(1,t*(1-i)+i),u=1-Math.min(1,n*(1-i)+i),l=1-Math.min(1,o*(1-i)+i),[a*255,u*255,l*255]}function Er(e){return A(S(e))}function Sr(e){return I(S(e))}function Nr(e){return T(S(e))}function Ur(e){return q(S(e))}function ar(e){var t=e[0]/100,n=e[1]/100,o=e[2]/100,i,a,u;return i=t*3.2406+n*-1.5372+o*-.4986,a=t*-.9689+n*1.8758+o*.0415,u=t*.0557+n*-.204+o*1.057,i=i>.0031308?1.055*Math.pow(i,1/2.4)-.055:i=i*12.92,a=a>.0031308?1.055*Math.pow(a,1/2.4)-.055:a=a*12.92,u=u>.0031308?1.055*Math.pow(u,1/2.4)-.055:u=u*12.92,i=Math.min(Math.max(0,i),1),a=Math.min(Math.max(0,a),1),u=Math.min(Math.max(0,u),1),[i*255,a*255,u*255]}function ir(e){var t=e[0],n=e[1],o=e[2],i,a,u;return t/=95.047,n/=100,o/=108.883,t=t>.008856?Math.pow(t,1/3):7.787*t+16/116,n=n>.008856?Math.pow(n,1/3):7.787*n+16/116,o=o>.008856?Math.pow(o,1/3):7.787*o+16/116,i=116*n-16,a=500*(t-n),u=200*(n-o),[i,a,u]}function Or(e){return $(ir(e))}function W(e){var t=e[0],n=e[1],o=e[2],i,a,u,l;return t<=8?(a=t*100/903.3,l=7.787*(a/100)+16/116):(a=100*Math.pow((t+16)/116,3),l=Math.pow(a/100,1/3)),i=i/95.047<=.008856?i=95.047*(n/500+l-16/116)/7.787:95.047*Math.pow(n/500+l,3),u=u/108.883<=.008859?u=108.883*(l-o/200-16/116)/7.787:108.883*Math.pow(l-o/200,3),[i,a,u]}function $(e){var t=e[0],n=e[1],o=e[2],i,a,u;return i=Math.atan2(o,n),a=i*360/2/Math.PI,a<0&&(a+=360),u=Math.sqrt(n*n+o*o),[t,u,a]}function ur(e){return ar(W(e))}function X(e){var t=e[0],n=e[1],o=e[2],i,a,u;return u=o/360*2*Math.PI,i=n*Math.cos(u),a=n*Math.sin(u),[t,i,a]}function Vr(e){return W(X(e))}function Fr(e){return ur(X(e))}function v(e){return G[e]}function Ir(e){return A(v(e))}function Dr(e){return I(v(e))}function Br(e){return T(v(e))}function Lr(e){return R(v(e))}function Pr(e){return Q(v(e))}function Jr(e){return H(v(e))}var G={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},lr={};for(var nr in G)lr[JSON.stringify(G[nr])]=nr;var K=yr,C=function(){return new N};for(var j in K){C[j+"Raw"]=function(e){return function(t){return typeof t=="number"&&(t=Array.prototype.slice.call(arguments)),K[e](t)}}(j);var tr=/(\w+)2(\w+)/.exec(j),Y=tr[1],Zr=tr[2];C[Y]=C[Y]||{},C[Y][Zr]=C[j]=function(e){return function(t){typeof t=="number"&&(t=Array.prototype.slice.call(arguments));var n=K[e](t);if(typeof n=="string"||n===void 0)return n;for(var o=0;o<n.length;o++)n[o]=Math.round(n[o]);return n}}(j)}var N=function(){this.convs={}};N.prototype.routeSpace=function(e,t){var n=t[0];return n===void 0?this.getValues(e):(typeof n=="number"&&(n=Array.prototype.slice.call(t)),this.setValues(e,n))};N.prototype.setValues=function(e,t){return this.space=e,this.convs={},this.convs[e]=t,this};N.prototype.getValues=function(e){var t=this.convs[e];if(!t){var n=this.space,o=this.convs[n];t=C[n][e](o),this.convs[e]=t}return t};["rgb","hsl","hsv","cmyk","keyword"].forEach(function(e){N.prototype[e]=function(t){return this.routeSpace(e,arguments)}});async function Gr(e,t=window.fetch){let o=await(await t(e)).text(),i;return i=mr(o,a=>{for(const u in a)a.hasOwnProperty(u)&&(a[u]=String(a[u]));return a}),i}function Hr(e){return e.toLowerCase().replace(/(^|\s)\S/g,function(t){return t.toUpperCase()})}function Qr(e,t){let n=Math.pow(10,t);return(Math.round(e*n)/n).toFixed(t)}function Wr(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function $r(e){console.log(e);const t=e[0],n=e[e.length-1],o=e[Math.floor(e.length*.2)],i=e[Math.floor(e.length*.4)],a=e[Math.floor(e.length*.6)],u=e[Math.floor(e.length*.8)];return[t,o,i,a,u,n]}function Xr(e,t){const n=e.map(i=>parseFloat(i[t]));n.sort((i,a)=>i-a);const o=n.length;if(o%2===0){const i=n[o/2-1],a=n[o/2];return(i+a)/2}else return n[Math.floor(o/2)]}function _r(e,t,n,o,i,a,u,l){return e<a&&t>i&&n<l&&o>u}export{Wr as a,Xr as b,$r as c,_r as d,Gr as g,Qr as r,Hr as t};
