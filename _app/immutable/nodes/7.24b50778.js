//js
import{S as B,i as I,s as P,F as R,G as j,m as V,h as m,n as u,H as T,b as H,C as v,D as q,k as w,q as A,a as C,y as d,l as S,r as N,c as k,z as $,p as D,A as z,u as J,g,d as p,B as b,U,N as Y,e as K,v as Z,f as x,V as e1}from"../chunks/index.41a710f4.js";import{b as X}from"../chunks/paths.7a202470.js";import{T as t1,H as s1,S as n1}from"../chunks/Subhead.1fd07bf4.js";/* empty css                                                     */import{C as l1,a as a1}from"../chunks/Cards.c4ec08ea.js";import{S as r1}from"../chunks/Spacer.230c1723.js";function c1(r){let e,n,s;return{c(){e=R("svg"),n=R("path"),this.h()},l(l){e=j(l,"svg",{class:!0,viewBox:!0,"fill-rule":!0,"clip-rule":!0,"aria-hidden":!0,focusable:!0,style:!0});var t=V(e);n=j(t,"path",{d:!0}),V(n).forEach(m),t.forEach(m),this.h()},h(){u(n,"d",s=r[4][r[0]]),u(e,"class","ico svelte-r1yv6i"),u(e,"viewBox","0 0 24 24"),u(e,"fill-rule","evenodd"),u(e,"clip-rule","evenodd"),u(e,"aria-hidden","true"),u(e,"focusable","false"),u(e,"style",r[3]),T(e,"margin",r[2]),T(e,"noclick",!r[1])},m(l,t){H(l,e,t),v(e,n)},p(l,[t]){t&1&&s!==(s=l[4][l[0]])&&u(n,"d",s),t&8&&u(e,"style",l[3]),t&4&&T(e,"margin",l[2]),t&2&&T(e,"noclick",!l[1])},i:q,o:q,d(l){l&&m(e)}}}function o1(r,e,n){let s,{type:l="compass"}=e,{rotation:t=0}=e,{position:a="inline"}=e,{clickable:c=!1}=e,{margin:o=!1}=e;const h={compass:"M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10 10-4.48 10-10zm-10 1H8v-2h4V8l4 4-4 4v-3z",info:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1-8h-2V7h2v2z",chart:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8 17c-.55 0-1-.45-1-1v-5c0-.55.45-1 1-1s1 .45 1 1v5c0 .55-.45 1-1 1zm4 0c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v8c0 .55-.45 1-1 1zm4 0c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1z",share:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z",chevron:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z",full:"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z",full_exit:"M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z",shuffle:"M10.59 9.17 5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z",replay:"M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z",save:"M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67 2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z",tick:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",cross:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z",arrow:"M5,13h11.2l-2.9,2.9c-0.4,0.4-0.4,1,0,1.4s1,0.4,1.4,0l4.6-4.6c0.4-0.4,0.4-1,0-1.4l-4.6-4.6c-0.4-0.4-1-0.4-1.4,0c0,0,0,0,0,0c-0.4,0.4-0.4,1,0,1.4l2.9,2.9H5c-0.6,0-1,0.4-1,1S4.4,13,5,13z",plus:"M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z",minus:"M18 13H6c-.55 0-1-.45-1-1s.45-1 1-1h12c.55 0 1 .45 1 1s-.45 1-1 1z",subdir:"m19 15-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z",touch:"M9 11.24V7.5C9 6.12 10.12 5 11.5 5S14 6.12 14 7.5v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74c-3.6-.76-3.54-.75-3.67-.75-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z",launch:"M18 19H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h5c.55 0 1-.45 1-1s-.45-1-1-1H5c-1.11 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55-.45 1-1 1zM14 4c0 .55.45 1 1 1h2.59l-9.13 9.13c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L19 6.41V9c0 .55.45 1 1 1s1-.45 1-1V3h-6c-.55 0-1 .45-1 1z",close:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",error:"M 12 2 C 6.48 2 2 6.48 2 12 s 4.48 10 10 10 s 10 -4.48 10 -10 S 17.52 2 12 2 z m 1 15 h -2 v -2 h 2 v 2 z m 0 -4 h -2 V 7 h 2 v 6 z"};return r.$$set=i=>{"type"in i&&n(0,l=i.type),"rotation"in i&&n(5,t=i.rotation),"position"in i&&n(6,a=i.position),"clickable"in i&&n(1,c=i.clickable),"margin"in i&&n(2,o=i.margin)},r.$$.update=()=>{r.$$.dirty&96&&n(3,s=`transform: translate(0, 15%) scale(1.5) rotate(${-t}deg);${["left","right"].includes(a)?` position: absolute; ${a}: 10px;`:""}`)},[l,c,o,s,h,t,a]}class i1 extends B{constructor(e){super(),I(this,e,o1,c1,P,{type:0,rotation:5,position:6,clickable:1,margin:2})}}function f1(r){let e,n,s,l,t,a,c,o,h,i,L=`span ${r[1]&&r[5]<3?r[5]:r[0]==1?1:r[0]>r[5]?r[5]:r[0]}`,M;return c=new i1({props:{type:"chevron"}}),{c(){e=w("article"),n=w("a"),s=w("div"),l=w("span"),t=A(r[2]),a=C(),d(c.$$.fragment),o=C(),h=w("span"),i=A(r[3]),this.h()},l(f){e=S(f,"ARTICLE",{class:!0});var _=V(e);n=S(_,"A",{href:!0,class:!0});var y=V(n);s=S(y,"DIV",{class:!0});var E=V(s);l=S(E,"SPAN",{});var F=V(l);t=N(F,r[2]),F.forEach(m),a=k(E),$(c.$$.fragment,E),E.forEach(m),o=k(y),h=S(y,"SPAN",{class:!0});var G=V(h);i=N(G,r[3]),G.forEach(m),y.forEach(m),_.forEach(m),this.h()},h(){u(s,"class","title svelte-1gh56h0"),u(h,"class","description svelte-1gh56h0"),u(n,"href",r[4]),u(n,"class","svelte-1gh56h0"),u(e,"class","blank svelte-1gh56h0"),D(e,"grid-column",L),D(e,"grid-column-end",r[1]?r[5]+1:null)},m(f,_){H(f,e,_),v(e,n),v(n,s),v(s,l),v(l,t),v(s,a),z(c,s,null),v(n,o),v(n,h),v(h,i),M=!0},p(f,[_]){(!M||_&4)&&J(t,f[2]),(!M||_&8)&&J(i,f[3]),(!M||_&16)&&u(n,"href",f[4]),_&35&&L!==(L=`span ${f[1]&&f[5]<3?f[5]:f[0]==1?1:f[0]>f[5]?f[5]:f[0]}`)&&D(e,"grid-column",L),_&34&&D(e,"grid-column-end",f[1]?f[5]+1:null)},i(f){M||(g(c.$$.fragment,f),M=!0)},o(f){p(c.$$.fragment,f),M=!1},d(f){f&&m(e),b(c)}}}function u1(r,e,n){let s,{colspan:l=1}=e,{grow:t=!1}=e,{title:a="Title"}=e,{description:c="Description"}=e,{href:o="#"}=e;const{cols:h}=U("tiles");return Y(r,h,i=>n(5,s=i)),r.$$set=i=>{"colspan"in i&&n(0,l=i.colspan),"grow"in i&&n(1,t=i.grow),"title"in i&&n(2,a=i.title),"description"in i&&n(3,c=i.description),"href"in i&&n(4,o=i.href)},[l,t,a,c,o,s,h]}class m1 extends B{constructor(e){super(),I(this,e,u1,f1,P,{colspan:0,grow:1,title:2,description:3,href:4})}}function O(r,e,n){const s=r.slice();return s[3]=e[n],s}function Q(r){let e,n;return e=new m1({props:{title:r[3][0].toUpperCase()+r[3].substring(1),description:"Description of topic",href:X+"/indicators/"+r[3],blank:!0}}),{c(){d(e.$$.fragment)},l(s){$(e.$$.fragment,s)},m(s,l){z(e,s,l),n=!0},p:q,i(s){n||(g(e.$$.fragment,s),n=!0)},o(s){p(e.$$.fragment,s),n=!1},d(s){b(e,s)}}}function h1(r){let e,n,s=[...new Set(r[0].map(W))],l=[];for(let a=0;a<s.length;a+=1)l[a]=Q(O(r,s,a));const t=a=>p(l[a],1,1,()=>{l[a]=null});return{c(){for(let a=0;a<l.length;a+=1)l[a].c();e=K()},l(a){for(let c=0;c<l.length;c+=1)l[c].l(a);e=K()},m(a,c){for(let o=0;o<l.length;o+=1)l[o]&&l[o].m(a,c);H(a,e,c),n=!0},p(a,c){if(c&1){s=[...new Set(a[0].map(W))];let o;for(o=0;o<s.length;o+=1){const h=O(a,s,o);l[o]?(l[o].p(h,c),g(l[o],1)):(l[o]=Q(h),l[o].c(),g(l[o],1),l[o].m(e.parentNode,e))}for(Z(),o=s.length;o<l.length;o+=1)t(o);x()}},i(a){if(!n){for(let c=0;c<s.length;c+=1)g(l[c]);n=!0}},o(a){l=l.filter(Boolean);for(let c=0;c<l.length;c+=1)p(l[c]);n=!1},d(a){e1(l,a),a&&m(e)}}}function g1(r){let e,n,s,l;return e=new a1({props:{rowgap:"12",colgap:"32",$$slots:{default:[h1]},$$scope:{ctx:r}}}),s=new r1({}),{c(){d(e.$$.fragment),n=C(),d(s.$$.fragment)},l(t){$(e.$$.fragment,t),n=k(t),$(s.$$.fragment,t)},m(t,a){z(e,t,a),H(t,n,a),z(s,t,a),l=!0},p(t,a){const c={};a&64&&(c.$$scope={dirty:a,ctx:t}),e.$set(c)},i(t){l||(g(e.$$.fragment,t),g(s.$$.fragment,t),l=!0)},o(t){p(e.$$.fragment,t),p(s.$$.fragment,t),l=!1},d(t){b(e,t),t&&m(n),b(s,t)}}}function p1(r){let e,n;return e=new l1({props:{$$slots:{default:[g1]},$$scope:{ctx:r}}}),{c(){d(e.$$.fragment)},l(s){$(e.$$.fragment,s)},m(s,l){z(e,s,l),n=!0},p(s,[l]){const t={};l&64&&(t.$$scope={dirty:l,ctx:s}),e.$set(t)},i(s){n||(g(e.$$.fragment,s),n=!0)},o(s){p(e.$$.fragment,s),n=!1},d(s){b(e,s)}}}const W=r=>r.name;function _1(r){let e=U("topics");return U("indicators"),console.log(e),[e]}class v1 extends B{constructor(e){super(),I(this,e,_1,p1,P,{})}}function d1(r){let e;return{c(){e=A("Explore topics")},l(n){e=N(n,"Explore topics")},m(n,s){H(n,e,s)},d(n){n&&m(e)}}}function $1(r){let e;return{c(){e=A("Discover national and regional trends with maps, charts and headline indicators")},l(n){e=N(n,"Discover national and regional trends with maps, charts and headline indicators")},m(n,s){H(n,e,s)},d(n){n&&m(e)}}}function z1(r){let e,n,s,l;return e=new s1({props:{$$slots:{default:[d1]},$$scope:{ctx:r}}}),s=new n1({props:{$$slots:{default:[$1]},$$scope:{ctx:r}}}),{c(){d(e.$$.fragment),n=C(),d(s.$$.fragment)},l(t){$(e.$$.fragment,t),n=k(t),$(s.$$.fragment,t)},m(t,a){z(e,t,a),H(t,n,a),z(s,t,a),l=!0},p(t,a){const c={};a&1&&(c.$$scope={dirty:a,ctx:t}),e.$set(c);const o={};a&1&&(o.$$scope={dirty:a,ctx:t}),s.$set(o)},i(t){l||(g(e.$$.fragment,t),g(s.$$.fragment,t),l=!0)},o(t){p(e.$$.fragment,t),p(s.$$.fragment,t),l=!1},d(t){b(e,t),t&&m(n),b(s,t)}}}function b1(r){let e,n,s,l;return e=new t1({props:{breadcrumb:[{label:"Home",url:"/"},{label:"Explore subnational statistics",url:`${X}/`},{label:"Expore topics"}],$$slots:{default:[z1]},$$scope:{ctx:r}}}),s=new v1({props:{open:!0}}),{c(){d(e.$$.fragment),n=C(),d(s.$$.fragment)},l(t){$(e.$$.fragment,t),n=k(t),$(s.$$.fragment,t)},m(t,a){z(e,t,a),H(t,n,a),z(s,t,a),l=!0},p(t,[a]){const c={};a&1&&(c.$$scope={dirty:a,ctx:t}),e.$set(c)},i(t){l||(g(e.$$.fragment,t),g(s.$$.fragment,t),l=!0)},o(t){p(e.$$.fragment,t),p(s.$$.fragment,t),l=!1},d(t){b(e,t),t&&m(n),b(s,t)}}}class k1 extends B{constructor(e){super(),I(this,e,null,b1,P,{})}}export{k1 as component};
