import{S as x,i as ee,s as te,I as Te,k as O,l as G,m as B,h as g,p as h,q as ae,b as N,K as Ve,L as Ke,M as Pe,g as A,d as L,n as le,Q as ie,N as fe,r as M,a as C,u as T,c as H,D as w,v as q,F as W,e as U,G as Y,w as Q,f as J,o as ze,z as V,A as K,B as P,C as z,U as Fe,V as We}from"../chunks/index.9d99f0a2.js";import{b as re}from"../chunks/paths.4ca26ec7.js";import{g as he}from"../chunks/index.f4553b3e.js";import{T as Ye,H as Ue,S as je}from"../chunks/Cards.48de5c2b.js";import{l as ne,a as de,S as qe,K as Qe,b as Je,D as Xe,M as Ze,L as xe}from"../chunks/DotPlot.svelte_svelte_type_style_lang.822f1a20.js";import{A as et}from"../chunks/AreaNav.373b4b87.js";import{s as Me,f as tt,c as at}from"../chunks/selectedAreasStore.14e2c450.js";import{l as oe,i as rt}from"../chunks/config.1134aefb.js";function lt(l){let e,t=`${l[0]}px`,a=`${l[1]}px`,r;const n=l[3].default,i=Te(n,l,l[2],null);return{c(){e=O("div"),i&&i.c(),this.h()},l(o){e=G(o,"DIV",{class:!0});var c=B(e);i&&i.l(c),c.forEach(g),this.h()},h(){h(e,"class","placeholder-container svelte-1mhohmc"),ae(e,"height",t),ae(e,"margin-bottom",a)},m(o,c){N(o,e,c),i&&i.m(e,null),r=!0},p(o,[c]){i&&i.p&&(!r||c&4)&&Ve(i,n,o,o[2],r?Pe(n,o[2],c,null):Ke(o[2]),null),c&1&&t!==(t=`${o[0]}px`)&&ae(e,"height",t),c&2&&a!==(a=`${o[1]}px`)&&ae(e,"margin-bottom",a)},i(o){r||(A(i,o),r=!0)},o(o){L(i,o),r=!1},d(o){o&&g(e),i&&i.d(o)}}}function nt(l,e,t){let{$$slots:a={},$$scope:r}=e,{height:n=400}=e,{margin:i=40}=e;return l.$$set=o=>{"height"in o&&t(0,n=o.height),"margin"in o&&t(1,i=o.margin),"$$scope"in o&&t(2,r=o.$$scope)},[n,i,r,a]}class it extends x{constructor(e){super(),ee(this,e,nt,lt,te,{height:0,margin:1})}}function me(l,e,t){const a=l.slice();return a[9]=e[t],a[11]=t,a}function _e(l){let e,t=l[9].indicator.subText+"",a;return{c(){e=O("h5"),a=M(t)},l(r){e=G(r,"H5",{});var n=B(e);a=T(n,t),n.forEach(g)},m(r,n){N(r,e,n),w(e,a)},p(r,n){n&2&&t!==(t=r[9].indicator.subText+"")&&q(a,t)},d(r){r&&g(e)}}}function ge(l){let e,t,a,r=l[9].indicator.label+"",n,i,o,c=("prefix"in l[9].indicator?l[9].indicator.prefix:"")+Math.round(l[0].main.value[l[9].code+"_"+l[9].indicator.years[1]]).toLocaleString()+("suffix"in l[9].indicator?l[9].indicator.suffix:"")+"",b,u,y,f,m,s=l[9].sentence1+"",d,E,v=l[9].indicator.subText&&_e(l);return{c(){e=O("div"),t=O("div"),a=O("h3"),n=M(r),i=C(),o=O("h1"),b=M(c),u=C(),v&&v.c(),y=C(),f=O("div"),m=O("p"),d=M(s),E=C(),this.h()},l(_){e=G(_,"DIV",{class:!0});var R=B(e);t=G(R,"DIV",{class:!0});var k=B(t);a=G(k,"H3",{class:!0});var D=B(a);n=T(D,r),D.forEach(g),i=H(k),o=G(k,"H1",{class:!0});var j=B(o);b=T(j,c),j.forEach(g),u=H(k),v&&v.l(k),k.forEach(g),y=H(R),f=G(R,"DIV",{class:!0});var I=B(f);m=G(I,"P",{class:!0});var p=B(m);d=T(p,s),p.forEach(g),I.forEach(g),E=H(R),R.forEach(g),this.h()},h(){h(a,"class","svelte-f4bu62"),h(o,"class","svelte-f4bu62"),h(t,"class","left svelte-f4bu62"),h(m,"class","svelte-f4bu62"),h(f,"class","right svelte-f4bu62"),h(e,"class","indicatorContainer svelte-f4bu62")},m(_,R){N(_,e,R),w(e,t),w(t,a),w(a,n),w(t,i),w(t,o),w(o,b),w(t,u),v&&v.m(t,null),w(e,y),w(e,f),w(f,m),w(m,d),w(e,E)},p(_,R){R&2&&r!==(r=_[9].indicator.label+"")&&q(n,r),R&3&&c!==(c=("prefix"in _[9].indicator?_[9].indicator.prefix:"")+Math.round(_[0].main.value[_[9].code+"_"+_[9].indicator.years[1]]).toLocaleString()+("suffix"in _[9].indicator?_[9].indicator.suffix:"")+"")&&q(b,c),_[9].indicator.subText?v?v.p(_,R):(v=_e(_),v.c(),v.m(t,null)):v&&(v.d(1),v=null),R&2&&s!==(s=_[9].sentence1+"")&&q(d,s)},d(_){_&&g(e),v&&v.d()}}}function ot(l){let e,t=l[1],a=[];for(let r=0;r<t.length;r+=1)a[r]=ge(me(l,t,r));return{c(){e=O("div");for(let r=0;r<a.length;r+=1)a[r].c();this.h()},l(r){e=G(r,"DIV",{class:!0});var n=B(e);for(let i=0;i<a.length;i+=1)a[i].l(n);n.forEach(g),this.h()},h(){h(e,"class","keyIndicatorsContainer svelte-f4bu62")},m(r,n){N(r,e,n);for(let i=0;i<a.length;i+=1)a[i].m(e,null)},p(r,[n]){if(n&3){t=r[1];let i;for(i=0;i<t.length;i+=1){const o=me(r,t,i);a[i]?a[i].p(o,n):(a[i]=ge(o),a[i].c(),a[i].m(e,null))}for(;i<a.length;i+=1)a[i].d(1);a.length=t.length}},i:le,o:le,d(r){r&&g(e),ie(a,r)}}}function st(l,e,t){let a;fe(l,Me,f=>t(4,a=f));let{data:r,keyIndicatorBlocks:n,countByGeoLevel:i,countOfNulls:o}=e,c=a.parentcd==="E92000001"?"regions":a.parentcd==="K02000001"?"countries":"local authorities",b={E:"England",N:"Northern Ireland",S:"Scotland",W:"Wales"}[a.areacd.slice(0,1)],u=c==="local authorities"?"countrycd":"parentcd",y=i.find(f=>f.category===(u==="countrycd"?a.countrycd:u==="regions"?"E92000001":"Y")&f.geoLevel===(u==="countrycd"?"countrycd":u==="regions"?"parentcd":"country")).count;return n.forEach(f=>{let m=r.main.rank[f.code+"_"+u+"_"+f.indicator.years[1]],s=o.find(v=>v.category===(u==="_countrycd_"?a.countrycd:u==="regions"?"E92000001":"Y")&v.geoLevel===(u==="_countrycd_"?"countrycd":u==="regions"?"parentcd":"country")&v.indicator===f.code),d=s!==void 0?s.count:0,E=Math.round(m/(y-d)*100);f.sentence1=a.areanm+" is in the "+(E>50?"top":"bottom")+" "+(E>50?100-E:1+E)+"% of "+c+" in "+(["local authorities","regions"].includes(c)?b:"United Kingdom")+" for "+f.indicator.label.toLowerCase()+"."}),l.$$set=f=>{"data"in f&&t(0,r=f.data),"keyIndicatorBlocks"in f&&t(1,n=f.keyIndicatorBlocks),"countByGeoLevel"in f&&t(2,i=f.countByGeoLevel),"countOfNulls"in f&&t(3,o=f.countOfNulls)},[r,n,i,o]}class ft extends x{constructor(e){super(),ee(this,e,st,ot,te,{data:0,keyIndicatorBlocks:1,countByGeoLevel:2,countOfNulls:3})}}function pe(l){let e,t,a;return{c(){e=W("g"),t=W("rect"),this.h()},l(r){e=Y(r,"g",{transform:!0});var n=B(e);t=Y(n,"rect",{x:!0,y:!0,stroke:!0,fill:!0,"stroke-width":!0,width:!0,height:!0}),B(t).forEach(g),n.forEach(g),this.h()},h(){h(t,"x","-5"),h(t,"y","-5"),h(t,"stroke","white"),h(t,"fill",oe.parent),h(t,"stroke-width","1px"),h(t,"width","10"),h(t,"height","10"),h(e,"transform",a="translate("+l[4](l[0].parentRaw)+",0)")},m(r,n){N(r,e,n),w(e,t)},p(r,n){n&17&&a!==(a="translate("+r[4](r[0].parentRaw)+",0)")&&h(e,"transform",a)},d(r){r&&g(e)}}}function ve(l){let e,t,a;return{c(){e=W("g"),t=W("rect"),this.h()},l(r){e=Y(r,"g",{transform:!0});var n=B(e);t=Y(n,"rect",{transform:!0,x:!0,y:!0,stroke:!0,fill:!0,"stroke-width":!0,width:!0,height:!0}),B(t).forEach(g),n.forEach(g),this.h()},h(){h(t,"transform","rotate(45)"),h(t,"x","-5"),h(t,"y","-5"),h(t,"stroke","white"),h(t,"fill",oe.country),h(t,"stroke-width","1px"),h(t,"width","10"),h(t,"height","10"),h(e,"transform",a="translate("+l[4](l[0].countryRaw)+",0)")},m(r,n){N(r,e,n),w(e,t)},p(r,n){n&17&&a!==(a="translate("+r[4](r[0].countryRaw)+",0)")&&h(e,"transform",a)},d(r){r&&g(e)}}}function be(l){let e,t,a;return{c(){e=W("g"),t=W("rect"),this.h()},l(r){e=Y(r,"g",{transform:!0});var n=B(e);t=Y(n,"rect",{transform:!0,x:!0,y:!0,stroke:!0,fill:!0,"stroke-width":!0,width:!0,height:!0}),B(t).forEach(g),n.forEach(g),this.h()},h(){h(t,"transform","rotate(45)"),h(t,"x","-5"),h(t,"y","-5"),h(t,"stroke","white"),h(t,"fill",oe.uk),h(t,"stroke-width","1px"),h(t,"width","10"),h(t,"height","10"),h(e,"transform",a="translate("+l[4](l[0].ukRaw)+",0)")},m(r,n){N(r,e,n),w(e,t)},p(r,n){n&17&&a!==(a="translate("+r[4](r[0].ukRaw)+",0)")&&h(e,"transform",a)},d(r){r&&g(e)}}}function ut(l){let e,t,a,r,n,i=l[0].parentRaw!==void 0&l[3].includes("parent"),o,c=l[0].countryRaw!==void 0&l[3].includes("country"),b,u=l[0].ukRaw!==void 0&l[3].includes("uk"),y,f,m,s=i&&pe(l),d=c&&ve(l),E=u&&be(l);return{c(){e=W("g"),t=W("path"),r=W("path"),s&&s.c(),o=U(),d&&d.c(),b=U(),E&&E.c(),y=W("circle"),this.h()},l(v){e=Y(v,"g",{class:!0,transform:!0});var _=B(e);t=Y(_,"path",{d:!0,stroke:!0,fill:!0,opacity:!0}),B(t).forEach(g),r=Y(_,"path",{d:!0,stroke:!0,fill:!0,opacity:!0}),B(r).forEach(g),s&&s.l(_),o=U(),d&&d.l(_),b=U(),E&&E.l(_),y=Y(_,"circle",{transform:!0,r:!0,stroke:!0,fill:!0,"stroke-width":!0}),B(y).forEach(g),_.forEach(g),this.h()},h(){h(t,"d",a=l[6](l[1])),h(t,"stroke","none"),h(t,"fill","#e0dede"),h(t,"opacity","1"),h(r,"d",n=l[5](l[1])),h(r,"stroke","none"),h(r,"fill","#e0dede"),h(r,"opacity","1"),h(y,"transform",f="translate("+l[4](l[0].mainRaw)+",0)"),h(y,"r","6"),h(y,"stroke","white"),h(y,"fill",oe.main),h(y,"stroke-width","1px"),h(e,"class","plot-group"),h(e,"transform",m="translate("+0+","+l[2]/2+")")},m(v,_){N(v,e,_),w(e,t),w(e,r),s&&s.m(e,null),w(e,o),d&&d.m(e,null),w(e,b),E&&E.m(e,null),w(e,y)},p(v,[_]){_&66&&a!==(a=v[6](v[1]))&&h(t,"d",a),_&34&&n!==(n=v[5](v[1]))&&h(r,"d",n),_&9&&(i=v[0].parentRaw!==void 0&v[3].includes("parent")),i?s?s.p(v,_):(s=pe(v),s.c(),s.m(e,o)):s&&(s.d(1),s=null),_&9&&(c=v[0].countryRaw!==void 0&v[3].includes("country")),c?d?d.p(v,_):(d=ve(v),d.c(),d.m(e,b)):d&&(d.d(1),d=null),_&9&&(u=v[0].ukRaw!==void 0&v[3].includes("uk")),u?E?E.p(v,_):(E=be(v),E.c(),E.m(e,y)):E&&(E.d(1),E=null),_&17&&f!==(f="translate("+v[4](v[0].mainRaw)+",0)")&&h(y,"transform",f),_&4&&m!==(m="translate("+0+","+v[2]/2+")")&&h(e,"transform",m)},i:le,o:le,d(v){v&&g(e),s&&s.d(),d&&d.d(),E&&E.d()}}}function ct(l,e,t){let a,r,n,i,o,c,{row:b,distributionData:u,width:y,height:f,rolesArray:m}=e;return l.$$set=s=>{"row"in s&&t(0,b=s.row),"distributionData"in s&&t(1,u=s.distributionData),"width"in s&&t(7,y=s.width),"height"in s&&t(2,f=s.height),"rolesArray"in s&&t(3,m=s.rolesArray)},l.$$.update=()=>{l.$$.dirty&2&&t(10,a=[0,Math.max(...u.map(s=>s.midpoint))]),l.$$.dirty&1152&&t(4,r=ne().domain(a).range([0,y])),l.$$.dirty&2&&t(9,n=[0,Math.max(...u.map(s=>s.count))]),l.$$.dirty&516&&t(8,i=ne().domain(n).range([0,f/2])),l.$$.dirty&272&&t(6,o=de().x(s=>r(s.midpoint)).y(s=>i(s.count))),l.$$.dirty&272&&t(5,c=de().x(s=>r(s.midpoint)).y(s=>-i(s.count)))},[b,u,f,m,r,c,o,y,i,n,a]}class ht extends x{constructor(e){super(),ee(this,e,ct,ut,te,{row:0,distributionData:1,width:7,height:2,rolesArray:3})}}function ye(l,e,t){const a=l.slice();return a[21]=e[t],a[23]=t,a}function ke(l){let e,t,a,r,n,i,o,c,b,u;i=new qe({props:{areas:l[3],comparisonAreaOptionsArray:["parent","country","uk"]}}),c=new Qe({props:{rolesArray:l[5].filter(Ee),radius:"5",line:!1,visibleAreas:l[2]}});let y=l[6],f=[];for(let s=0;s<y.length;s+=1)f[s]=we(ye(l,y,s));const m=s=>L(f[s],1,1,()=>{f[s]=null});return{c(){e=O("div"),t=O("div"),a=O("h3"),r=M("Robo text goes here"),n=C(),V(i.$$.fragment),o=C(),V(c.$$.fragment),b=C();for(let s=0;s<f.length;s+=1)f[s].c();this.h()},l(s){e=G(s,"DIV",{class:!0});var d=B(e);t=G(d,"DIV",{class:!0});var E=B(t);a=G(E,"H3",{});var v=B(a);r=T(v,"Robo text goes here"),v.forEach(g),E.forEach(g),n=H(d),K(i.$$.fragment,d),o=H(d),K(c.$$.fragment,d),b=H(d);for(let _=0;_<f.length;_+=1)f[_].l(d);d.forEach(g),this.h()},h(){h(t,"class","chart-title"),h(e,"class","multiScatter")},m(s,d){N(s,e,d),w(e,t),w(t,a),w(a,r),w(e,n),P(i,e,null),w(e,o),P(c,e,null),w(e,b);for(let E=0;E<f.length;E+=1)f[E].m(e,null);u=!0},p(s,d){const E={};d&8&&(E.areas=s[3]),i.$set(E);const v={};if(d&32&&(v.rolesArray=s[5].filter(Ee)),d&4&&(v.visibleAreas=s[2]),c.$set(v),d&99){y=s[6];let _;for(_=0;_<y.length;_+=1){const R=ye(s,y,_);f[_]?(f[_].p(R,d),A(f[_],1)):(f[_]=we(R),f[_].c(),A(f[_],1),f[_].m(e,null))}for(Q(),_=y.length;_<f.length;_+=1)m(_);J()}},i(s){if(!u){A(i.$$.fragment,s),A(c.$$.fragment,s);for(let d=0;d<y.length;d+=1)A(f[d]);u=!0}},o(s){L(i.$$.fragment,s),L(c.$$.fragment,s),f=f.filter(Boolean);for(let d=0;d<f.length;d+=1)L(f[d]);u=!1},d(s){s&&g(e),z(i),z(c),ie(f,s)}}}function we(l){let e,t,a=l[21].indicator.label+"",r,n,i,o,c,b,u,y;return o=new ht({props:{width:l[0]-200,height:ue,row:l[21],distributionData:l[1][l[21].indicator.code],rolesArray:l[5]}}),{c(){e=O("div"),t=O("p"),r=M(a),n=C(),i=W("svg"),V(o.$$.fragment),b=C(),this.h()},l(f){e=G(f,"DIV",{class:!0});var m=B(e);t=G(m,"P",{class:!0});var s=B(t);r=T(s,a),s.forEach(g),n=H(m),i=Y(m,"svg",{width:!0,height:!0,class:!0});var d=B(i);K(o.$$.fragment,d),d.forEach(g),b=H(m),m.forEach(g),this.h()},h(){h(t,"class","svelte-oiywmg"),h(i,"width",c=l[0]-200),h(i,"height",ue),h(i,"class","svelte-oiywmg"),h(e,"class","rowContainer svelte-oiywmg"),Fe(()=>l[15].call(e))},m(f,m){N(f,e,m),w(e,t),w(t,r),w(e,n),w(e,i),P(o,i,null),w(e,b),u=We(e,l[15].bind(e)),y=!0},p(f,m){const s={};m&1&&(s.width=f[0]-200),m&2&&(s.distributionData=f[1][f[21].indicator.code]),m&32&&(s.rolesArray=f[5]),o.$set(s),(!y||m&1&&c!==(c=f[0]-200))&&h(i,"width",c)},i(f){y||(A(o.$$.fragment,f),y=!0)},o(f){L(o.$$.fragment,f),y=!1},d(f){f&&g(e),z(o),u()}}}function dt(l){let e,t,a=l[4]&&ke(l);return{c(){a&&a.c(),e=U()},l(r){a&&a.l(r),e=U()},m(r,n){a&&a.m(r,n),N(r,e,n),t=!0},p(r,[n]){r[4]?a?(a.p(r,n),n&16&&A(a,1)):(a=ke(r),a.c(),A(a,1),a.m(e.parentNode,e)):a&&(Q(),L(a,1,1,()=>{a=null}),J())},i(r){t||(A(a),t=!0)},o(r){L(a),t=!1},d(r){a&&a.d(r),r&&g(e)}}}let ue=80;const Ee=l=>!["neighbour","similar"].includes(l);function mt(l,e,t){let a,r,n,i,o,{component:c,data:b,distributionData:u,visibleAreas:y,countByGeoLevel:f,countOfNulls:m,areas:s,width:d=360}=e,E=[],v=!1,_=f.find(k=>k.geoLevel==="localauthority"&k.category==="Y").count;c.code.forEach(k=>{let D=rt.find($=>$.code==k),j=m.filter($=>$.geoLevel==="localauthority"&$.category==="Y"&$.indicator===k&$.year===D.years[1]),I=Math.ceil(100*b.main.rank[k+"_localauthority_"+D.years[1]]/_-(j.length>0?j[0].count:0)),p={indicator:D,mainName:b.main.value.areanm,mainPercentile:I,mainRaw:b.main.value[k+"_"+D.years[1]],parentName:b.parent.value.areanm,parentRaw:b.parent.value[k+"_"+D.years[1]],countryName:b.country.value.areanm,countryRaw:b.country.value[k+"_"+D.years[1]],ukName:"United Kingdom",ukRaw:b.uk.value[k+"_"+D.years[1]]};E.push(p)}),ze(()=>{t(4,v=!0)});function R(){d=this.clientWidth,t(0,d)}return l.$$set=k=>{"component"in k&&t(7,c=k.component),"data"in k&&t(8,b=k.data),"distributionData"in k&&t(1,u=k.distributionData),"visibleAreas"in k&&t(2,y=k.visibleAreas),"countByGeoLevel"in k&&t(9,f=k.countByGeoLevel),"countOfNulls"in k&&t(10,m=k.countOfNulls),"areas"in k&&t(3,s=k.areas),"width"in k&&t(0,d=k.width)},l.$$.update=()=>{l.$$.dirty&4&&t(5,a=[...new Set(y.map(k=>k.role))]),l.$$.dirty&4&&y.filter(k=>k.role.slice(0,6)==="custom"),l.$$.dirty&16385&&t(12,n=d-r.left-r.right),l.$$.dirty&12288&&ne().domain(i).range([0,n]),l.$$.dirty&2048&&ne().domain(o).range([ue,0])},t(14,r={top:10,left:70,right:20,bottom:40}),t(13,i=[0,100]),t(11,o=[0,100]),[d,u,y,s,v,a,E,c,b,f,m,o,n,i,r,R]}class _t extends x{constructor(e){super(),ee(this,e,mt,dt,te,{component:7,data:8,distributionData:1,visibleAreas:2,countByGeoLevel:9,countOfNulls:10,areas:3,width:0})}}function $e(l,e,t){const a=l.slice();return a[7]=e[t],a[9]=t,a}function Ae(l,e,t){const a=l.slice();return a[10]=e[t],a[9]=t,a}function Be(l){let e,t,a,r,n,i;return e=new Ye({props:{breadcrumb:[{label:"Home",url:"/"},{label:"Explore subnational statistics",url:`${re}/`},{label:"Find a local area",url:`${re}/areas`},{label:l[1].areanm}],$$slots:{default:[vt]},$$scope:{ctx:l}}}),a=new et({}),n=new Je({props:{contentsLabel:"Explore this area",$$slots:{default:[Et]},$$scope:{ctx:l}}}),{c(){V(e.$$.fragment),t=C(),V(a.$$.fragment),r=C(),V(n.$$.fragment)},l(o){K(e.$$.fragment,o),t=H(o),K(a.$$.fragment,o),r=H(o),K(n.$$.fragment,o)},m(o,c){P(e,o,c),N(o,t,c),P(a,o,c),N(o,r,c),P(n,o,c),i=!0},p(o,c){const b={};c&2&&(b.breadcrumb=[{label:"Home",url:"/"},{label:"Explore subnational statistics",url:`${re}/`},{label:"Find a local area",url:`${re}/areas`},{label:o[1].areanm}]),c&4098&&(b.$$scope={dirty:c,ctx:o}),e.$set(b);const u={};c&4109&&(u.$$scope={dirty:c,ctx:o}),n.$set(u)},i(o){i||(A(e.$$.fragment,o),A(a.$$.fragment,o),A(n.$$.fragment,o),i=!0)},o(o){L(e.$$.fragment,o),L(a.$$.fragment,o),L(n.$$.fragment,o),i=!1},d(o){z(e,o),o&&g(t),z(a,o),o&&g(r),z(n,o)}}}function gt(l){let e=l[1].areanm+"",t;return{c(){t=M(e)},l(a){t=T(a,e)},m(a,r){N(a,t,r)},p(a,r){r&2&&e!==(e=a[1].areanm+"")&&q(t,e)},d(a){a&&g(t)}}}function pt(l){let e,t=he(l[1],"the")+"",a;return{c(){e=M("Get localised data, insights and trends for "),a=M(t)},l(r){e=T(r,"Get localised data, insights and trends for "),a=T(r,t)},m(r,n){N(r,e,n),N(r,a,n)},p(r,n){n&2&&t!==(t=he(r[1],"the")+"")&&q(a,t)},d(r){r&&g(e),r&&g(a)}}}function vt(l){let e,t,a,r;return e=new Ue({props:{$$slots:{default:[gt]},$$scope:{ctx:l}}}),a=new je({props:{$$slots:{default:[pt]},$$scope:{ctx:l}}}),{c(){V(e.$$.fragment),t=C(),V(a.$$.fragment)},l(n){K(e.$$.fragment,n),t=H(n),K(a.$$.fragment,n)},m(n,i){P(e,n,i),N(n,t,i),P(a,n,i),r=!0},p(n,i){const o={};i&4098&&(o.$$scope={dirty:i,ctx:n}),e.$set(o);const c={};i&4098&&(c.$$scope={dirty:i,ctx:n}),a.$set(c)},i(n){r||(A(e.$$.fragment,n),A(a.$$.fragment,n),r=!0)},o(n){L(e.$$.fragment,n),L(a.$$.fragment,n),r=!1},d(n){z(e,n),n&&g(t),z(a,n)}}}function bt(l){let e,t;return e=new Xe({props:{id:l[9],areas:l[0].areas,data:l[0].indicatorBasedData["all-years-"+l[10].code].filter(Re),indicator:l[10].indicator,visibleAreas:l[2].map(Se)}}),{c(){V(e.$$.fragment)},l(a){K(e.$$.fragment,a)},m(a,r){P(e,a,r),t=!0},p(a,r){const n={};r&1&&(n.areas=a[0].areas),r&9&&(n.data=a[0].indicatorBasedData["all-years-"+a[10].code].filter(Re)),r&9&&(n.indicator=a[10].indicator),r&4&&(n.visibleAreas=a[2].map(Se)),e.$set(n)},i(a){t||(A(e.$$.fragment,a),t=!0)},o(a){L(e.$$.fragment,a),t=!1},d(a){z(e,a)}}}function yt(l){let e,t,a;function r(...n){return l[6](l[10],...n)}return t=new Ze({props:{indicator:l[10].indicator,data:("latest-year-"+l[10].code in l[0].indicatorBasedData?l[0].indicatorBasedData["latest-year-"+l[10].code]:l[0].indicatorBasedData["all-years-"+l[10].code]).filter(r)}}),{c(){e=O("div"),V(t.$$.fragment),this.h()},l(n){e=G(n,"DIV",{class:!0});var i=B(e);K(t.$$.fragment,i),i.forEach(g),this.h()},h(){h(e,"class","mapContainer")},m(n,i){N(n,e,i),P(t,e,null),a=!0},p(n,i){l=n;const o={};i&9&&(o.indicator=l[10].indicator),i&9&&(o.data=("latest-year-"+l[10].code in l[0].indicatorBasedData?l[0].indicatorBasedData["latest-year-"+l[10].code]:l[0].indicatorBasedData["all-years-"+l[10].code]).filter(r)),t.$set(o)},i(n){a||(A(t.$$.fragment,n),a=!0)},o(n){L(t.$$.fragment,n),a=!1},d(n){n&&g(e),z(t)}}}function kt(l){let e,t;return e=new xe({props:{id:l[9],areas:l[0].areas,data:l[0].indicatorBasedData["all-years-"+l[10].code].filter(Oe),indicator:l[10].indicator,zeroBaseline:l[10].indicator.zeroBaseline,visibleAreas:l[2].map(Ge)}}),{c(){V(e.$$.fragment)},l(a){K(e.$$.fragment,a)},m(a,r){P(e,a,r),t=!0},p(a,r){const n={};r&1&&(n.areas=a[0].areas),r&9&&(n.data=a[0].indicatorBasedData["all-years-"+a[10].code].filter(Oe)),r&9&&(n.indicator=a[10].indicator),r&9&&(n.zeroBaseline=a[10].indicator.zeroBaseline),r&4&&(n.visibleAreas=a[2].map(Ge)),e.$set(n)},i(a){t||(A(e.$$.fragment,a),t=!0)},o(a){L(e.$$.fragment,a),t=!1},d(a){z(e,a)}}}function De(l){let e,t,a,r;const n=[kt,yt,bt],i=[];function o(c,b){return c[10].type==="line"?0:c[10].type==="map"?1:c[10].type==="double-beeswarm"?2:-1}return~(e=o(l))&&(t=i[e]=n[e](l)),{c(){t&&t.c(),a=U()},l(c){t&&t.l(c),a=U()},m(c,b){~e&&i[e].m(c,b),N(c,a,b),r=!0},p(c,b){let u=e;e=o(c),e===u?~e&&i[e].p(c,b):(t&&(Q(),L(i[u],1,1,()=>{i[u]=null}),J()),~e?(t=i[e],t?t.p(c,b):(t=i[e]=n[e](c),t.c()),A(t,1),t.m(a.parentNode,a)):t=null)},i(c){r||(A(t),r=!0)},o(c){L(t),r=!1},d(c){~e&&i[e].d(c),c&&g(a)}}}function Ne(l){let e,t,a=l[7]+"",r,n,i,o;function c(...f){return l[5](l[7],...f)}let b=l[0].componentsArray.filter(c),u=[];for(let f=0;f<b.length;f+=1)u[f]=De(Ae(l,b,f));const y=f=>L(u[f],1,1,()=>{u[f]=null});return{c(){e=O("section"),t=O("h1"),r=M(a),n=C();for(let f=0;f<u.length;f+=1)u[f].c();this.h()},l(f){e=G(f,"SECTION",{title:!0,class:!0});var m=B(e);t=G(m,"H1",{});var s=B(t);r=T(s,a),s.forEach(g),n=H(m);for(let d=0;d<u.length;d+=1)u[d].l(m);m.forEach(g),this.h()},h(){h(e,"title",i=l[7]),h(e,"class","svelte-r2srs5")},m(f,m){N(f,e,m),w(e,t),w(t,r),w(e,n);for(let s=0;s<u.length;s+=1)u[s].m(e,null);o=!0},p(f,m){if(l=f,(!o||m&8)&&a!==(a=l[7]+"")&&q(r,a),m&13){b=l[0].componentsArray.filter(c);let s;for(s=0;s<b.length;s+=1){const d=Ae(l,b,s);u[s]?(u[s].p(d,m),A(u[s],1)):(u[s]=De(d),u[s].c(),A(u[s],1),u[s].m(e,null))}for(Q(),s=b.length;s<u.length;s+=1)y(s);J()}(!o||m&8&&i!==(i=l[7]))&&h(e,"title",i)},i(f){if(!o){for(let m=0;m<b.length;m+=1)A(u[m]);o=!0}},o(f){u=u.filter(Boolean);for(let m=0;m<u.length;m+=1)L(u[m]);o=!1},d(f){f&&g(e),ie(u,f)}}}function Le(l){let e,t,a;return t=new _t({props:{distributionData:l[0].distributionData,component:l[0].componentsArray.find(Ce),data:l[0].areaBasedData,areas:l[0].areas,visibleAreas:l[2].map(He),countByGeoLevel:l[0].countByGeoLevel,countOfNulls:l[0].countOfNulls}}),{c(){e=O("section"),V(t.$$.fragment),this.h()},l(r){e=G(r,"SECTION",{title:!0,class:!0});var n=B(e);K(t.$$.fragment,n),n.forEach(g),this.h()},h(){h(e,"title","Multi scatter"),h(e,"class","svelte-r2srs5")},m(r,n){N(r,e,n),P(t,e,null),a=!0},p(r,n){const i={};n&1&&(i.distributionData=r[0].distributionData),n&1&&(i.component=r[0].componentsArray.find(Ce)),n&1&&(i.data=r[0].areaBasedData),n&1&&(i.areas=r[0].areas),n&4&&(i.visibleAreas=r[2].map(He)),n&1&&(i.countByGeoLevel=r[0].countByGeoLevel),n&1&&(i.countOfNulls=r[0].countOfNulls),t.$set(i)},i(r){a||(A(t.$$.fragment,r),a=!0)},o(r){L(t.$$.fragment,r),a=!1},d(r){r&&g(e),z(t)}}}function wt(l){let e;return{c(){e=M("Find parent, child and neighbouring areas")},l(t){e=T(t,"Find parent, child and neighbouring areas")},m(t,a){N(t,e,a)},d(t){t&&g(e)}}}function Et(l){let e,t,a,r,n,i,o,c=l[0].componentsArray.filter(Ie).length>0,b,u,y,f,m,s,d,E,v,_,R;n=new ft({props:{keyIndicatorBlocks:l[0].keyIndicatorBlocks,data:l[0].areaBasedData,countByGeoLevel:l[0].countByGeoLevel,countOfNulls:l[0].countOfNulls}});let k=l[3],D=[];for(let p=0;p<k.length;p+=1)D[p]=Ne($e(l,k,p));const j=p=>L(D[p],1,1,()=>{D[p]=null});let I=c&&Le(l);return y=new it({props:{$$slots:{default:[wt]},$$scope:{ctx:l}}}),{c(){e=O("section"),t=O("h1"),a=M("Key indicators"),r=C(),V(n.$$.fragment),i=C();for(let p=0;p<D.length;p+=1)D[p].c();o=C(),I&&I.c(),b=C(),u=O("section"),V(y.$$.fragment),f=C(),m=O("section"),s=O("h2"),d=M("Get the data"),E=C(),v=O("p"),_=M("Here, you can find information and links to the data."),this.h()},l(p){e=G(p,"SECTION",{title:!0,class:!0});var $=B(e);t=G($,"H1",{});var F=B(t);a=T(F,"Key indicators"),F.forEach(g),r=H($),K(n.$$.fragment,$),$.forEach(g),i=H(p);for(let se=0;se<D.length;se+=1)D[se].l(p);o=H(p),I&&I.l(p),b=H(p),u=G(p,"SECTION",{title:!0,class:!0});var X=B(u);K(y.$$.fragment,X),X.forEach(g),f=H(p),m=G(p,"SECTION",{title:!0,class:!0});var S=B(m);s=G(S,"H2",{class:!0});var Z=B(s);d=T(Z,"Get the data"),Z.forEach(g),E=H(S),v=G(S,"P",{});var ce=B(v);_=T(ce,"Here, you can find information and links to the data."),ce.forEach(g),S.forEach(g),this.h()},h(){h(e,"title","Key indicators"),h(e,"class","svelte-r2srs5"),h(u,"title","Related areas"),h(u,"class","svelte-r2srs5"),h(s,"class","ons-u-mt-xl"),h(m,"title","Get the data"),h(m,"class","svelte-r2srs5")},m(p,$){N(p,e,$),w(e,t),w(t,a),w(e,r),P(n,e,null),N(p,i,$);for(let F=0;F<D.length;F+=1)D[F].m(p,$);N(p,o,$),I&&I.m(p,$),N(p,b,$),N(p,u,$),P(y,u,null),N(p,f,$),N(p,m,$),w(m,s),w(s,d),w(m,E),w(m,v),w(v,_),R=!0},p(p,$){const F={};if($&1&&(F.keyIndicatorBlocks=p[0].keyIndicatorBlocks),$&1&&(F.data=p[0].areaBasedData),$&1&&(F.countByGeoLevel=p[0].countByGeoLevel),$&1&&(F.countOfNulls=p[0].countOfNulls),n.$set(F),$&13){k=p[3];let S;for(S=0;S<k.length;S+=1){const Z=$e(p,k,S);D[S]?(D[S].p(Z,$),A(D[S],1)):(D[S]=Ne(Z),D[S].c(),A(D[S],1),D[S].m(o.parentNode,o))}for(Q(),S=k.length;S<D.length;S+=1)j(S);J()}$&1&&(c=p[0].componentsArray.filter(Ie).length>0),c?I?(I.p(p,$),$&1&&A(I,1)):(I=Le(p),I.c(),A(I,1),I.m(b.parentNode,b)):I&&(Q(),L(I,1,1,()=>{I=null}),J());const X={};$&4096&&(X.$$scope={dirty:$,ctx:p}),y.$set(X)},i(p){if(!R){A(n.$$.fragment,p);for(let $=0;$<k.length;$+=1)A(D[$]);A(I),A(y.$$.fragment,p),R=!0}},o(p){L(n.$$.fragment,p),D=D.filter(Boolean);for(let $=0;$<D.length;$+=1)L(D[$]);L(I),L(y.$$.fragment,p),R=!1},d(p){p&&g(e),z(n),p&&g(i),ie(D,p),p&&g(o),I&&I.d(p),p&&g(b),p&&g(u),z(y),p&&g(f),p&&g(m)}}}function $t(l){let e,t,a=l[1]&&Be(l);return{c(){a&&a.c(),e=U()},l(r){a&&a.l(r),e=U()},m(r,n){a&&a.m(r,n),N(r,e,n),t=!0},p(r,[n]){r[1]?a?(a.p(r,n),n&2&&A(a,1)):(a=Be(r),a.c(),A(a,1),a.m(e.parentNode,e)):a&&(Q(),L(a,1,1,()=>{a=null}),J())},i(r){t||(A(a),t=!0)},o(r){L(a),t=!1},d(r){a&&a.d(r),r&&g(e)}}}const Ie=l=>l.type==="multi-scatter",Oe=l=>l.value!=="NA",Ge=l=>({...l}),Re=l=>l.value!=="NA",Se=l=>({...l}),Ce=l=>l.type==="multi-scatter",He=l=>({...l});function At(l,e,t){let a,r,n,i;fe(l,at,u=>t(4,n=u)),fe(l,Me,u=>t(1,i=u));let{data:o}=e;const c=(u,y,f)=>y.section===u,b=(u,y)=>y.value!=="NA"&y.year==u.indicator.years[1];return l.$$set=u=>{"data"in u&&t(0,o=u.data)},l.$$.update=()=>{l.$$.dirty&1&&t(3,a=[...new Set(o.componentsArray.filter(u=>u.type!=="multi-scatter").map(u=>u.section))]),l.$$.dirty&19&&t(2,r=tt(i,n,o.areas))},[o,i,r,a,n,c,b]}class St extends x{constructor(e){super(),ee(this,e,At,$t,te,{data:0})}}export{St as component};
