//js
import"./index.5803ca54.js";import"./config.d52a907b.js";var O={},E={},U=34,m=10,M=13;function D(n){return new Function("d","return {"+n.map(function(e,t){return JSON.stringify(e)+": d["+t+'] || ""'}).join(",")+"}")}function b(n,e){var t=D(n);return function(a,o){return e(t(a),o,n)}}function S(n){var e=Object.create(null),t=[];return n.forEach(function(a){for(var o in a)o in e||t.push(e[o]=o)}),t}function s(n,e){var t=n+"",a=t.length;return a<e?new Array(e-a+1).join(0)+t:t}function B(n){return n<0?"-"+s(-n,6):n>9999?"+"+s(n,6):s(n,4)}function L(n){var e=n.getUTCHours(),t=n.getUTCMinutes(),a=n.getUTCSeconds(),o=n.getUTCMilliseconds();return isNaN(n)?"Invalid Date":B(n.getUTCFullYear())+"-"+s(n.getUTCMonth()+1,2)+"-"+s(n.getUTCDate(),2)+(o?"T"+s(e,2)+":"+s(t,2)+":"+s(a,2)+"."+s(o,3)+"Z":a?"T"+s(e,2)+":"+s(t,2)+":"+s(a,2)+"Z":t||e?"T"+s(e,2)+":"+s(t,2)+"Z":"")}function y(n){var e=new RegExp('["'+n+`
\r]`),t=n.charCodeAt(0);function a(r,u){var l,f,i=o(r,function(g,h){if(l)return l(g,h-1);f=g,l=u?b(g,u):D(g)});return i.columns=f||[],i}function o(r,u){var l=[],f=r.length,i=0,g=0,h,R=f<=0,C=!1;r.charCodeAt(f-1)===m&&--f,r.charCodeAt(f-1)===M&&--f;function F(){if(R)return E;if(C)return C=!1,O;var w,j=i,d;if(r.charCodeAt(j)===U){for(;i++<f&&r.charCodeAt(i)!==U||r.charCodeAt(++i)===U;);return(w=i)>=f?R=!0:(d=r.charCodeAt(i++))===m?C=!0:d===M&&(C=!0,r.charCodeAt(i)===m&&++i),r.slice(j+1,w-1).replace(/""/g,'"')}for(;i<f;){if((d=r.charCodeAt(w=i++))===m)C=!0;else if(d===M)C=!0,r.charCodeAt(i)===m&&++i;else if(d!==t)continue;return r.slice(j,w)}return R=!0,r.slice(j,f)}for(;(h=F())!==E;){for(var T=[];h!==O&&h!==E;)T.push(h),h=F();u&&(T=u(T,g++))==null||l.push(T)}return l}function c(r,u){return r.map(function(l){return u.map(function(f){return v(l[f])}).join(n)})}function p(r,u){return u==null&&(u=S(r)),[u.map(v).join(n)].concat(c(r,u)).join(`
`)}function A(r,u){return u==null&&(u=S(r)),c(r,u).join(`
`)}function I(r){return r.map(N).join(`
`)}function N(r){return r.map(v).join(n)}function v(r){return r==null?"":r instanceof Date?L(r):e.test(r+="")?'"'+r.replace(/"/g,'""')+'"':r}return{parse:a,parseRows:o,format:p,formatBody:A,formatRows:I,formatRow:N,formatValue:v}}var Z=y(","),k=Z.parse;async function Y(n,e=window.fetch){let a=await(await e(n)).text(),o;return o=k(a,c=>{for(const p in c)c.hasOwnProperty(p)&&(c[p]=String(c[p]));return c}),o}function H(n){return n.toLowerCase().replace(/(^|\s)\S/g,function(e){return e.toUpperCase()})}function J(n,e){let t=Math.pow(10,e);return(Math.round(n*t)/t).toFixed(e)}function Q(n){return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function W(n,e=null){const t=n.map(o=>parseFloat(e==null?o:o[e]));t.sort((o,c)=>o-c);const a=t.length;if(a%2===0){const o=t[a/2-1],c=t[a/2];return(o+c)/2}else return t[Math.floor(a/2)]}function q(n,e,t,a,o,c,p,A){return n<c&&e>o&&t<A&&a>p}export{Q as a,W as c,q as d,Y as g,J as r,H as t};
