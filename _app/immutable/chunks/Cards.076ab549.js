//js
import{S as j,i as H,s as K,I as y,k as C,l as k,m as E,h as d,n as g,b as I,C as q,K as D,L as V,M as z,g as w,d as b,a as L,c as O,a1 as A,p,a4 as B,v as F,f as G,O as J,q as N,r as P,u as Q}from"./index.713b2df5.js";import{w as R}from"./index.a66644df.js";function T(s){let e,a,i;const u=s[1].default,n=y(u,s,s[0],null);return{c(){e=C("div"),a=C("div"),n&&n.c(),this.h()},l(l){e=k(l,"DIV",{class:!0});var t=E(e);a=k(t,"DIV",{class:!0});var o=E(a);n&&n.l(o),o.forEach(d),t.forEach(d),this.h()},h(){g(a,"class","wrapper"),g(e,"class","page-content margin-bottom--2 svelte-gcpjxw")},m(l,t){I(l,e,t),q(e,a),n&&n.m(a,null),i=!0},p(l,[t]){n&&n.p&&(!i||t&1)&&D(n,u,l,l[0],i?z(u,l[0],t,null):V(l[0]),null)},i(l){i||(w(n,l),i=!0)},o(l){b(n,l),i=!1},d(l){l&&d(e),n&&n.d(l)}}}function U(s,e,a){let{$$slots:i={},$$scope:u}=e;return s.$$set=n=>{"$$scope"in n&&a(0,u=n.$$scope)},[u,i]}class ee extends j{constructor(e){super(),H(this,e,U,T,K,{})}}const X=s=>({}),M=s=>({});function S(s){let e,a,i,u;const n=s[10].meta,l=y(n,s,s[9],M);return{c(){e=C("h2"),a=N(s[0]),i=L(),l&&l.c(),this.h()},l(t){e=k(t,"H2",{id:!0,class:!0});var o=E(e);a=P(o,s[0]),o.forEach(d),i=O(t),l&&l.l(t),this.h()},h(){g(e,"id",s[1]),g(e,"class","svelte-1m5vqgx")},m(t,o){I(t,e,o),q(e,a),I(t,i,o),l&&l.m(t,o),u=!0},p(t,o){(!u||o&1)&&Q(a,t[0]),(!u||o&2)&&g(e,"id",t[1]),l&&l.p&&(!u||o&512)&&D(l,n,t,t[9],u?z(n,t[9],o,X):V(t[9]),M)},i(t){u||(w(l,t),u=!0)},o(t){b(l,t),u=!1},d(t){t&&d(e),t&&d(i),l&&l.d(t)}}}function Y(s){let e,a,i,u,n=`repeat(${s[2]=="full"?"1fr":"auto-fill, minmax(min("+s[6][s[2]].w+"px, 100%), 1fr))"}`,l=`${s[3]}px`,t=`${s[4]}px`,o,r=s[0]&&S(s);const h=s[10].default,c=y(h,s,s[9],null);return{c(){e=C("div"),r&&r.c(),a=L(),i=C("div"),c&&c.c(),this.h()},l(f){e=k(f,"DIV",{class:!0});var _=E(e);r&&r.l(_),a=O(_),i=k(_,"DIV",{class:!0});var v=E(i);c&&c.l(v),v.forEach(d),_.forEach(d),this.h()},h(){g(i,"class","tiles-grid margin-bottom svelte-1m5vqgx"),A(()=>s[11].call(i)),p(i,"grid-template-columns",n),p(i,"row-gap",l),p(i,"column-gap",t),g(e,"class","tiles")},m(f,_){I(f,e,_),r&&r.m(e,null),q(e,a),q(e,i),c&&c.m(i,null),u=B(i,s[11].bind(i)),o=!0},p(f,[_]){f[0]?r?(r.p(f,_),_&1&&w(r,1)):(r=S(f),r.c(),w(r,1),r.m(e,a)):r&&(F(),b(r,1,1,()=>{r=null}),G()),c&&c.p&&(!o||_&512)&&D(c,h,f,f[9],o?z(h,f[9],_,null):V(f[9]),null),_&4&&n!==(n=`repeat(${f[2]=="full"?"1fr":"auto-fill, minmax(min("+f[6][f[2]].w+"px, 100%), 1fr))"}`)&&p(i,"grid-template-columns",n),_&8&&l!==(l=`${f[3]}px`)&&p(i,"row-gap",l),_&16&&t!==(t=`${f[4]}px`)&&p(i,"column-gap",t)},i(f){o||(w(r),w(c,f),o=!0)},o(f){b(r),b(c,f),o=!1},d(f){f&&d(e),r&&r.d(),c&&c.d(f),u()}}}function Z(s,e,a){let i,{$$slots:u={},$$scope:n}=e,{title:l=null}=e,{id:t=null}=e,{colwidth:o="medium"}=e,{gridgap:r=16}=e,{rowgap:h=r}=e,{colgap:c=r}=e;const f={narrow:{w:190,c:4},medium:{w:280,c:3},wide:{w:380,c:2},full:{w:"100%",c:1}};let _;const v=R(f[o].c);J("tiles",{cols:v});function W(){_=this.clientWidth,a(5,_)}return s.$$set=m=>{"title"in m&&a(0,l=m.title),"id"in m&&a(1,t=m.id),"colwidth"in m&&a(2,o=m.colwidth),"gridgap"in m&&a(7,r=m.gridgap),"rowgap"in m&&a(3,h=m.rowgap),"colgap"in m&&a(4,c=m.colgap),"$$scope"in m&&a(9,n=m.$$scope)},s.$$.update=()=>{s.$$.dirty&52&&a(8,i=o=="full"?1:_?Math.floor((_+c)/(f[o].w+c)):f[o].c),s.$$.dirty&256&&v.set(i)},[l,t,o,h,c,_,f,r,i,n,u,W]}class te extends j{constructor(e){super(),H(this,e,Z,Y,K,{title:0,id:1,colwidth:2,gridgap:7,rowgap:3,colgap:4})}}export{ee as C,te as a};