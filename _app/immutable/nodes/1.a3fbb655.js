import{S,i as g,s as k,k as u,r as h,a as q,l as v,m as d,u as b,h as m,c as y,b as _,D as E,v as $,n as x,N as C}from"../chunks/index.9d99f0a2.js";import{p as D}from"../chunks/stores.72b29456.js";function H(l){var f;let a,t=l[0].status+"",r,o,n,p=((f=l[0].error)==null?void 0:f.message)+"",c;return{c(){a=u("h1"),r=h(t),o=q(),n=u("p"),c=h(p)},l(e){a=v(e,"H1",{});var s=d(a);r=b(s,t),s.forEach(m),o=y(e),n=v(e,"P",{});var i=d(n);c=b(i,p),i.forEach(m)},m(e,s){_(e,a,s),E(a,r),_(e,o,s),_(e,n,s),E(n,c)},p(e,[s]){var i;s&1&&t!==(t=e[0].status+"")&&$(r,t),s&1&&p!==(p=((i=e[0].error)==null?void 0:i.message)+"")&&$(c,p)},i:x,o:x,d(e){e&&m(a),e&&m(o),e&&m(n)}}}function N(l,a,t){let r;return C(l,D,o=>t(0,r=o)),[r]}class w extends S{constructor(a){super(),g(this,a,N,H,k,{})}}export{w as component};
