import{S as k,i as C,s as G,y as S,z as b,A as q,g as T,d as O,B as z,U as A,E,I,J,K}from"./index.bb22ce14.js";import{G as U}from"./Grid.1d11c9a1.js";import"./Table.svelte_svelte_type_style_lang.ca6fdd6c.js";function j(m){let i;const l=m[13].default,e=E(l,m,m[14],null);return{c(){e&&e.c()},l(t){e&&e.l(t)},m(t,f){e&&e.m(t,f),i=!0},p(t,f){e&&e.p&&(!i||f&16384)&&I(e,l,t,t[14],i?K(l,t[14],f,null):J(t[14]),null)},i(t){i||(T(e,t),i=!0)},o(t){O(e,t),i=!1},d(t){e&&e.d(t)}}}function D(m){let i,l;return i=new U({props:{id:m[0],cls:m[1],width:m[2],height:m[10],title:m[3],hideTitle:m[4],theme:m[5],themeOverrides:m[6],marginTop:m[7],marginBottom:m[8],colwidth:m[9],gap:m[11],$$slots:{default:[j]},$$scope:{ctx:m}}}),{c(){S(i.$$.fragment)},l(e){b(i.$$.fragment,e)},m(e,t){q(i,e,t),l=!0},p(e,[t]){const f={};t&1&&(f.id=e[0]),t&2&&(f.cls=e[1]),t&4&&(f.width=e[2]),t&1024&&(f.height=e[10]),t&8&&(f.title=e[3]),t&16&&(f.hideTitle=e[4]),t&32&&(f.theme=e[5]),t&64&&(f.themeOverrides=e[6]),t&128&&(f.marginTop=e[7]),t&256&&(f.marginBottom=e[8]),t&512&&(f.colwidth=e[9]),t&2048&&(f.gap=e[11]),t&16384&&(f.$$scope={dirty:t,ctx:e}),i.$set(f)},i(e){l||(T(i.$$.fragment,e),l=!0)},o(e){O(i.$$.fragment,e),l=!1},d(e){z(i,e)}}}function F(m,i,l){let{$$slots:e={},$$scope:t}=i,{id:f=null}=i,{cls:h="ons-cards"}=i,{width:o="wide"}=i,{title:g=""}=i,{hideTitle:u=!1}=i,{theme:s=null}=i,{themeOverrides:d=null}=i,{marginTop:_=!1}=i,{marginBottom:r=!0}=i,{colwidth:c="medium"}=i,{height:w=200}=i,{noBackground:a=!1}=i,{gap:B=a?36:16}=i;return A("noBackground",a),m.$$set=n=>{"id"in n&&l(0,f=n.id),"cls"in n&&l(1,h=n.cls),"width"in n&&l(2,o=n.width),"title"in n&&l(3,g=n.title),"hideTitle"in n&&l(4,u=n.hideTitle),"theme"in n&&l(5,s=n.theme),"themeOverrides"in n&&l(6,d=n.themeOverrides),"marginTop"in n&&l(7,_=n.marginTop),"marginBottom"in n&&l(8,r=n.marginBottom),"colwidth"in n&&l(9,c=n.colwidth),"height"in n&&l(10,w=n.height),"noBackground"in n&&l(12,a=n.noBackground),"gap"in n&&l(11,B=n.gap),"$$scope"in n&&l(14,t=n.$$scope)},[f,h,o,g,u,s,d,_,r,c,w,B,a,e,t]}class N extends k{constructor(i){super(),C(this,i,F,D,G,{id:0,cls:1,width:2,title:3,hideTitle:4,theme:5,themeOverrides:6,marginTop:7,marginBottom:8,colwidth:9,height:10,noBackground:12,gap:11})}}export{N as C};