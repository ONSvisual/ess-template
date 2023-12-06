//js
import{P as It}from"../chunks/public.73b3fb0a.js";import{b as $}from"../chunks/paths.92b098c0.js";import{g as X}from"../chunks/utils.e79e846d.js";import{S as La,i as Aa,s as Ia,k as l,q as T,a as S,l as r,m as s,r as O,h as t,c as H,n as a,b as ee,C as e,u as N,D as Re,E as Mt,F as V,G as k,H as Lt,I as Dt,y as $a,J as Ct,z as Fa,A as za,K as St,L as Ht,M as Tt,g as ka,d as ya,B as Ba,N as Ot,O as x}from"../chunks/index.a4eaa56d.js";import{p as Pt}from"../chunks/stores.c86a9650.js";import{d as sa}from"../chunks/config.caad78aa.js";const Gt=It,Nt="always";async function Zt({fetch:o}){const n=await X(`${$}/data/config-data/geography/areas.csv`,o),i=await X(`${$}/data/config-data/geography/areas-parents-lookup.csv`,o),d=await X(`${$}/data/config-data/geography/areas-geog-level.csv`,o),c=await X(`${$}/data/config-data/geography/areas-geog-info.csv`,o),u=await X(`${$}/data/config-data/indicators/indicators-lookup.csv`,o),p=await X(`${$}/data/config-data/indicators/indicators-calculations.csv`,o),m=await X(`${$}/data/config-data/indicators/indicators-metadata.csv`,o),y=await X(`${$}/data/csv/data.csv`,o),h=await X(`${$}/data/config-data/periods/unique-periods-lookup.csv`,o),g=await X(`${$}/data/config-data/clusters/clusters-info.csv`,o),M=await X(`${$}/data/config-data/clusters/clusters-lookup.csv`,o),L=await X(`${$}/data/csv/beeswarmKeyData.csv`,o);return{areas:n,areasParentsLookup:i,areasGeogLevel:d,areasGeogInfo:c,indicators:u,indicatorsCalculations:p,indicatorsMetadata:m,combinedData:y,periodsLookup:h,beeswarmKeyData:L,clustersInfo:g,clustersLookup:M}}const os=Object.freeze(Object.defineProperty({__proto__:null,load:Zt,prerender:Gt,trailingSlash:Nt},Symbol.toStringTag,{value:"Module"}));function $t(o){let n,i,d;return{c(){n=T("This is a new service – to help improve it please "),i=l("a"),d=T("give us your feedback"),this.h()},l(c){n=O(c,"This is a new service – to help improve it please "),i=r(c,"A",{href:!0,rel:!0,class:!0});var u=s(i);d=O(u,"give us your feedback"),u.forEach(t),this.h()},h(){a(i,"href",o[1]),a(i,"rel","external"),a(i,"class","svelte-i6xez8")},m(c,u){ee(c,n,u),ee(c,i,u),e(i,d)},p(c,u){u&2&&a(i,"href",c[1])},d(c){c&&t(n),c&&t(i)}}}function Ft(o){let n,i,d;return{c(){n=T("This is a protoype – to help improve it please "),i=l("a"),d=T("give us your feedback"),this.h()},l(c){n=O(c,"This is a protoype – to help improve it please "),i=r(c,"A",{href:!0,rel:!0,class:!0});var u=s(i);d=O(u,"give us your feedback"),u.forEach(t),this.h()},h(){a(i,"href",o[1]),a(i,"rel","external"),a(i,"class","svelte-i6xez8")},m(c,u){ee(c,n,u),ee(c,i,u),e(i,d)},p(c,u){u&2&&a(i,"href",c[1])},d(c){c&&t(n),c&&t(i)}}}function zt(o){let n,i,d,c,u,p,m,y,h;function g(A,_){return A[0]=="Prototype"?Ft:$t}let M=g(o),L=M(o);return{c(){n=l("aside"),i=l("div"),d=l("div"),c=l("div"),u=l("h3"),p=T(o[0]),m=S(),y=l("div"),h=l("p"),L.c(),this.h()},l(A){n=r(A,"ASIDE",{class:!0});var _=s(n);i=r(_,"DIV",{class:!0});var I=s(i);d=r(I,"DIV",{class:!0});var G=s(d);c=r(G,"DIV",{class:!0});var C=s(c);u=r(C,"H3",{class:!0});var P=s(u);p=O(P,o[0]),P.forEach(t),C.forEach(t),m=H(G),y=r(G,"DIV",{class:!0});var Z=s(y);h=r(Z,"P",{class:!0});var D=s(h);L.l(D),D.forEach(t),Z.forEach(t),G.forEach(t),I.forEach(t),_.forEach(t),this.h()},h(){a(u,"class","ons-phase-banner__badge svelte-i6xez8"),a(c,"class","ons-grid__col ons-col-auto ons-u-flex-no-grow ons-u-flex-no-shrink svelte-i6xez8"),a(h,"class","ons-phase-banner__desc svelte-i6xez8"),a(y,"class","ons-grid__col ons-col-auto ons-u-flex-shrink svelte-i6xez8"),a(d,"class","ons-grid svelte-i6xez8"),a(i,"class","wrapper"),a(n,"class","ons-phase-banner svelte-i6xez8")},m(A,_){ee(A,n,_),e(n,i),e(i,d),e(d,c),e(c,u),e(u,p),e(d,m),e(d,y),e(y,h),L.m(h,null)},p(A,[_]){_&1&&N(p,A[0]),M===(M=g(A))&&L?L.p(A,_):(L.d(1),L=M(A),L&&(L.c(),L.m(h,null)))},i:Re,o:Re,d(A){A&&t(n),L.d()}}}function Bt(o,n,i){let{phase:d="Prototype"}=n,{url:c="//www.ons.gov.uk/feedback"}=n;return o.$$set=u=>{"phase"in u&&i(0,d=u.phase),"url"in u&&i(1,c=u.url)},[d,c]}class Kt extends La{constructor(n){super(),Aa(this,n,Bt,zt,Ia,{phase:0,url:1})}}function Ut(o){let n,i,d=o[2]("Footer links",o[0])+"",c,u,p,m,y,h,g,M,L=o[2]("Help",o[0])+"",A,_,I,G,C,P=o[2]("Accessibility",o[0])+"",Z,D,f,w,F,ae=o[2]("Cookies",o[0])+"",oe,le,fe,W,q,te=o[2]("Privacy",o[0])+"",re,ne,de,j,R,se=o[2]("Terms and conditions",o[0])+"",ie,ce,ve,K,Y,U=o[2]("About ONS",o[0])+"",J,Ie,B,pe,he,me=o[2]("What we do",o[0])+"",ue,ke,Me,_e,E,We=o[2]("Careers",o[0])+"",oa,la,Ma,De,ye,je=o[2]("Contact us",o[0])+"",ra,na,Da,Ce,Le,Ye=o[2]("Freedom of Information",o[0])+"",ia,ca,Ca,ge,Se,Je=o[2]("Connect with us",o[0])+"",ha,Sa,z,He,Te,Qe=o[2]("Twitter",o[0])+"",ua,Ha,Oe,Pe,Xe=o[2]("Facebook",o[0])+"",fa,Ta,Ge,Ne,xe=o[2]("LinkedIn",o[0])+"",da,Oa,Ze,$e,ea=o[2]("Consultations",o[0])+"",va,Pa,Fe,ze,aa=o[2]("Discussion forums",o[0])+"",pa,Ga,Be,Ke,ta=o[2]("Email alerts",o[0])+"",_a,Na,Ue,Ee,we,Ka,Za,Ae,ma=o[2]("All content is available under the <a href='http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/'>Open Government Licence v3.0</a>, except where otherwise stated",o[0])+"";return{c(){n=l("footer"),i=l("h2"),c=T(d),u=S(),p=l("div"),m=l("div"),y=l("nav"),h=l("div"),g=l("div"),M=l("h3"),A=T(L),_=S(),I=l("ul"),G=l("li"),C=l("a"),Z=T(P),f=S(),w=l("li"),F=l("a"),oe=T(ae),fe=S(),W=l("li"),q=l("a"),re=T(te),de=S(),j=l("li"),R=l("a"),ie=T(se),ve=S(),K=l("div"),Y=l("h3"),J=T(U),Ie=S(),B=l("ul"),pe=l("li"),he=l("a"),ue=T(me),Me=S(),_e=l("li"),E=l("a"),oa=T(We),Ma=S(),De=l("li"),ye=l("a"),ra=T(je),Da=S(),Ce=l("li"),Le=l("a"),ia=T(Ye),Ca=S(),ge=l("div"),Se=l("h3"),ha=T(Je),Sa=S(),z=l("ul"),He=l("li"),Te=l("a"),ua=T(Qe),Ha=S(),Oe=l("li"),Pe=l("a"),fa=T(Xe),Ta=S(),Ge=l("li"),Ne=l("a"),da=T(xe),Oa=S(),Ze=l("li"),$e=l("a"),va=T(ea),Pa=S(),Fe=l("li"),ze=l("a"),pa=T(aa),Ga=S(),Be=l("li"),Ke=l("a"),_a=T(ta),Na=S(),Ue=l("div"),Ee=l("div"),we=l("img"),Za=S(),Ae=l("p"),this.h()},l(v){n=r(v,"FOOTER",{class:!0});var b=s(n);i=r(b,"H2",{class:!0});var Ua=s(i);c=O(Ua,d),Ua.forEach(t),u=H(b),p=r(b,"DIV",{class:!0});var ga=s(p);m=r(ga,"DIV",{class:!0});var qa=s(m);y=r(qa,"NAV",{"aria-label":!0});var Ra=s(y);h=r(Ra,"DIV",{class:!0});var qe=s(h);g=r(qe,"DIV",{class:!0});var Ea=s(g);M=r(Ea,"H3",{class:!0});var Wa=s(M);A=O(Wa,L),Wa.forEach(t),_=H(Ea),I=r(Ea,"UL",{class:!0});var be=s(I);G=r(be,"LI",{class:!0});var ja=s(G);C=r(ja,"A",{href:!0});var Ya=s(C);Z=O(Ya,P),Ya.forEach(t),ja.forEach(t),f=H(be),w=r(be,"LI",{class:!0});var Ja=s(w);F=r(Ja,"A",{href:!0});var Qa=s(F);oe=O(Qa,ae),Qa.forEach(t),Ja.forEach(t),fe=H(be),W=r(be,"LI",{class:!0});var Xa=s(W);q=r(Xa,"A",{href:!0});var xa=s(q);re=O(xa,te),xa.forEach(t),Xa.forEach(t),de=H(be),j=r(be,"LI",{class:!0});var et=s(j);R=r(et,"A",{href:!0});var at=s(R);ie=O(at,se),at.forEach(t),et.forEach(t),be.forEach(t),Ea.forEach(t),ve=H(qe),K=r(qe,"DIV",{class:!0});var wa=s(K);Y=r(wa,"H3",{class:!0});var tt=s(Y);J=O(tt,U),tt.forEach(t),Ie=H(wa),B=r(wa,"UL",{class:!0});var Ve=s(B);pe=r(Ve,"LI",{class:!0});var st=s(pe);he=r(st,"A",{href:!0});var ot=s(he);ue=O(ot,me),ot.forEach(t),st.forEach(t),Me=H(Ve),_e=r(Ve,"LI",{class:!0});var lt=s(_e);E=r(lt,"A",{href:!0});var rt=s(E);oa=O(rt,We),rt.forEach(t),lt.forEach(t),Ma=H(Ve),De=r(Ve,"LI",{class:!0});var nt=s(De);ye=r(nt,"A",{href:!0});var it=s(ye);ra=O(it,je),it.forEach(t),nt.forEach(t),Da=H(Ve),Ce=r(Ve,"LI",{class:!0});var ct=s(Ce);Le=r(ct,"A",{href:!0});var ht=s(Le);ia=O(ht,Ye),ht.forEach(t),ct.forEach(t),Ve.forEach(t),wa.forEach(t),Ca=H(qe),ge=r(qe,"DIV",{class:!0});var ba=s(ge);Se=r(ba,"H3",{class:!0});var ut=s(Se);ha=O(ut,Je),ut.forEach(t),Sa=H(ba),z=r(ba,"UL",{class:!0});var Q=s(z);He=r(Q,"LI",{class:!0});var ft=s(He);Te=r(ft,"A",{href:!0});var dt=s(Te);ua=O(dt,Qe),dt.forEach(t),ft.forEach(t),Ha=H(Q),Oe=r(Q,"LI",{class:!0});var vt=s(Oe);Pe=r(vt,"A",{href:!0});var pt=s(Pe);fa=O(pt,Xe),pt.forEach(t),vt.forEach(t),Ta=H(Q),Ge=r(Q,"LI",{class:!0});var _t=s(Ge);Ne=r(_t,"A",{href:!0});var mt=s(Ne);da=O(mt,xe),mt.forEach(t),_t.forEach(t),Oa=H(Q),Ze=r(Q,"LI",{class:!0});var gt=s(Ze);$e=r(gt,"A",{href:!0});var Et=s($e);va=O(Et,ea),Et.forEach(t),gt.forEach(t),Pa=H(Q),Fe=r(Q,"LI",{class:!0});var wt=s(Fe);ze=r(wt,"A",{href:!0});var bt=s(ze);pa=O(bt,aa),bt.forEach(t),wt.forEach(t),Ga=H(Q),Be=r(Q,"LI",{class:!0});var Vt=s(Be);Ke=r(Vt,"A",{href:!0});var kt=s(Ke);_a=O(kt,ta),kt.forEach(t),Vt.forEach(t),Q.forEach(t),ba.forEach(t),qe.forEach(t),Ra.forEach(t),qa.forEach(t),Na=H(ga),Ue=r(ga,"DIV",{class:!0});var yt=s(Ue);Ee=r(yt,"DIV",{class:!0});var Va=s(Ee);we=r(Va,"IMG",{class:!0,alt:!0,width:!0,src:!0}),Za=H(Va),Ae=r(Va,"P",{class:!0});var At=s(Ae);At.forEach(t),Va.forEach(t),yt.forEach(t),ga.forEach(t),b.forEach(t),this.h()},h(){a(i,"class","visuallyhidden"),a(M,"class","footer-nav__heading"),a(C,"href",D=o[1]+"/help/accessibility"),a(G,"class","footer-nav__item"),a(F,"href",le=o[1]+"/cookies"),a(w,"class","footer-nav__item"),a(q,"href",ne=o[1]+"/help/privacynotice"),a(W,"class","footer-nav__item"),a(R,"href",ce=o[1]+"/help/termsandconditions"),a(j,"class","footer-nav__item"),a(I,"class","footer-nav__list"),a(g,"class","col col--lg-one-third col--md-one-third"),a(Y,"class","footer-nav__heading"),a(he,"href",ke=o[1]+"/aboutus/whatwedo"),a(pe,"class","footer-nav__item"),a(E,"href",la=o[1]+"/aboutus/careers"),a(_e,"class","footer-nav__item"),a(ye,"href",na=o[1]+"/aboutus/contactus"),a(De,"class","footer-nav__item"),a(Le,"href",ca=o[1]+"/aboutus/transparencyandgovernance/freedomofinformationfoi"),a(Ce,"class","footer-nav__item"),a(B,"class","footer-nav__list"),a(K,"class","col col--lg-one-third col--md-one-third"),a(Se,"class","footer-nav__heading"),a(Te,"href","https://twitter.com/ONS"),a(He,"class","footer-nav__item"),a(Pe,"href","https://www.facebook.com/ONS"),a(Oe,"class","footer-nav__item"),a(Ne,"href","https://www.linkedin.com/company/office-for-national-statistics"),a(Ge,"class","footer-nav__item"),a($e,"href","https://consultations.ons.gov.uk/"),a(Ze,"class","footer-nav__item"),a(ze,"href","https://www.statsusernet.org.uk/login"),a(Fe,"class","footer-nav__item"),a(Ke,"href","https://public.govdelivery.com/accounts/UKONS/subscribers/new"),a(Be,"class","footer-nav__item"),a(z,"class","footer-nav__list"),a(ge,"class","col col--lg-one-third col--md-one-third"),a(h,"class","footer-nav col-wrap"),a(y,"aria-label","Footer links"),a(m,"class","wrapper"),a(we,"class","footer-license__img"),a(we,"alt","OGL"),a(we,"width","60"),Mt(we.src,Ka="https://cdn.ons.gov.uk/assets/images/logo-ogl-footer.svg")||a(we,"src",Ka),a(Ae,"class","footer-license__text margin-left-sm--0"),a(Ee,"class","footer-license"),a(Ue,"class","wrapper"),a(p,"class","footer"),a(n,"class","print--hide margin-top--4")},m(v,b){ee(v,n,b),e(n,i),e(i,c),e(n,u),e(n,p),e(p,m),e(m,y),e(y,h),e(h,g),e(g,M),e(M,A),e(g,_),e(g,I),e(I,G),e(G,C),e(C,Z),e(I,f),e(I,w),e(w,F),e(F,oe),e(I,fe),e(I,W),e(W,q),e(q,re),e(I,de),e(I,j),e(j,R),e(R,ie),e(h,ve),e(h,K),e(K,Y),e(Y,J),e(K,Ie),e(K,B),e(B,pe),e(pe,he),e(he,ue),e(B,Me),e(B,_e),e(_e,E),e(E,oa),e(B,Ma),e(B,De),e(De,ye),e(ye,ra),e(B,Da),e(B,Ce),e(Ce,Le),e(Le,ia),e(h,Ca),e(h,ge),e(ge,Se),e(Se,ha),e(ge,Sa),e(ge,z),e(z,He),e(He,Te),e(Te,ua),e(z,Ha),e(z,Oe),e(Oe,Pe),e(Pe,fa),e(z,Ta),e(z,Ge),e(Ge,Ne),e(Ne,da),e(z,Oa),e(z,Ze),e(Ze,$e),e($e,va),e(z,Pa),e(z,Fe),e(Fe,ze),e(ze,pa),e(z,Ga),e(z,Be),e(Be,Ke),e(Ke,_a),e(p,Na),e(p,Ue),e(Ue,Ee),e(Ee,we),e(Ee,Za),e(Ee,Ae),Ae.innerHTML=ma},p(v,[b]){b&1&&d!==(d=v[2]("Footer links",v[0])+"")&&N(c,d),b&1&&L!==(L=v[2]("Help",v[0])+"")&&N(A,L),b&1&&P!==(P=v[2]("Accessibility",v[0])+"")&&N(Z,P),b&2&&D!==(D=v[1]+"/help/accessibility")&&a(C,"href",D),b&1&&ae!==(ae=v[2]("Cookies",v[0])+"")&&N(oe,ae),b&2&&le!==(le=v[1]+"/cookies")&&a(F,"href",le),b&1&&te!==(te=v[2]("Privacy",v[0])+"")&&N(re,te),b&2&&ne!==(ne=v[1]+"/help/privacynotice")&&a(q,"href",ne),b&1&&se!==(se=v[2]("Terms and conditions",v[0])+"")&&N(ie,se),b&2&&ce!==(ce=v[1]+"/help/termsandconditions")&&a(R,"href",ce),b&1&&U!==(U=v[2]("About ONS",v[0])+"")&&N(J,U),b&1&&me!==(me=v[2]("What we do",v[0])+"")&&N(ue,me),b&2&&ke!==(ke=v[1]+"/aboutus/whatwedo")&&a(he,"href",ke),b&1&&We!==(We=v[2]("Careers",v[0])+"")&&N(oa,We),b&2&&la!==(la=v[1]+"/aboutus/careers")&&a(E,"href",la),b&1&&je!==(je=v[2]("Contact us",v[0])+"")&&N(ra,je),b&2&&na!==(na=v[1]+"/aboutus/contactus")&&a(ye,"href",na),b&1&&Ye!==(Ye=v[2]("Freedom of Information",v[0])+"")&&N(ia,Ye),b&2&&ca!==(ca=v[1]+"/aboutus/transparencyandgovernance/freedomofinformationfoi")&&a(Le,"href",ca),b&1&&Je!==(Je=v[2]("Connect with us",v[0])+"")&&N(ha,Je),b&1&&Qe!==(Qe=v[2]("Twitter",v[0])+"")&&N(ua,Qe),b&1&&Xe!==(Xe=v[2]("Facebook",v[0])+"")&&N(fa,Xe),b&1&&xe!==(xe=v[2]("LinkedIn",v[0])+"")&&N(da,xe),b&1&&ea!==(ea=v[2]("Consultations",v[0])+"")&&N(va,ea),b&1&&aa!==(aa=v[2]("Discussion forums",v[0])+"")&&N(pa,aa),b&1&&ta!==(ta=v[2]("Email alerts",v[0])+"")&&N(_a,ta),b&1&&ma!==(ma=v[2]("All content is available under the <a href='http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/'>Open Government Licence v3.0</a>, except where otherwise stated",v[0])+"")&&(Ae.innerHTML=ma)},i:Re,o:Re,d(v){v&&t(n)}}}function qt(o,n,i){let{lang:d="en"}=n,{baseurl:c="//www.ons.gov.uk"}=n;const u={"Footer links":"",Help:"Cymorth",Accessibility:"Hygyrchedd",Cookies:"Cookies",Privacy:"Privacy","Terms and conditions":"Telerau ac amodau","About ONS":"Ynglŷn ag SYG","What we do":"Beth rydym yn ei wneud",Careers:"Gyrfaoedd","Contact us":"Cysylltu â ni","Freedom of Information":"Rhyddid Gwybodaeth","Connect with us":"Cysylltu â ni",Twitter:"Twitter",Facebook:"Facebook",LinkedIn:"LinkedIn",Consulations:"Consulations","Discussion forums":"Discussion forums","Email alerts":"Rhybuddion ebost","All content is available under the <a href='http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/'>Open Government Licence v3.0</a>, except where otherwise stated":"Mae'r holl gynnwys ar gael o dan delerau'r <a href='https://www.nationalarchives.gov.uk/doc/open-government-licence-cymraeg/version/3/'>Drwydded Llywodraeth Agored f3.0"};function p(m,y){return y=="cy"&&u[m]?u[m]:m}return o.$$set=m=>{"lang"in m&&i(0,d=m.lang),"baseurl"in m&&i(1,c=m.baseurl)},[d,c,p]}class Rt extends La{constructor(n){super(),Aa(this,n,qt,Ut,Ia,{lang:0,baseurl:1})}}function Wt(o){let n,i,d,c,u,p,m,y,h,g,M,L,A,_,I,G,C,P,Z,D,f,w,F,ae,oe,le,fe,W,q,te,re,ne,de,j,R,se,ie,ce,ve,K,Y;return{c(){n=l("div"),i=l("div"),d=l("div"),c=l("div"),u=l("div"),p=l("a"),m=V("svg"),y=V("title"),h=T("Office for National Statistics logo"),g=V("g"),M=V("path"),L=V("g"),A=V("path"),_=V("g"),I=V("path"),G=V("path"),C=V("path"),P=V("path"),Z=V("path"),D=V("path"),f=V("path"),w=V("path"),F=V("path"),ae=V("path"),oe=V("path"),le=V("path"),fe=V("path"),W=V("path"),q=V("path"),te=V("path"),re=V("polygon"),ne=V("path"),de=V("path"),j=V("path"),R=V("path"),se=V("path"),ie=V("path"),ce=V("path"),ve=V("path"),K=V("path"),Y=V("path"),this.h()},l(U){n=r(U,"DIV",{class:!0});var J=s(n);i=r(J,"DIV",{class:!0});var Ie=s(i);d=r(Ie,"DIV",{class:!0});var B=s(d);c=r(B,"DIV",{class:!0});var pe=s(c);u=r(pe,"DIV",{class:!0});var he=s(u);p=r(he,"A",{class:!0,href:!0});var me=s(p);m=k(me,"svg",{class:!0,xmlns:!0,width:!0,height:!0,viewBox:!0});var ue=s(m);y=k(ue,"title",{id:!0});var ke=s(y);h=O(ke,"Office for National Statistics logo"),ke.forEach(t),g=k(ue,"g",{class:!0,fill:!0});var Me=s(g);M=k(Me,"path",{d:!0}),s(M).forEach(t),Me.forEach(t),L=k(ue,"g",{class:!0,fill:!0});var _e=s(L);A=k(_e,"path",{d:!0}),s(A).forEach(t),_e.forEach(t),_=k(ue,"g",{class:!0,fill:!0});var E=s(_);I=k(E,"path",{d:!0}),s(I).forEach(t),G=k(E,"path",{d:!0}),s(G).forEach(t),C=k(E,"path",{d:!0}),s(C).forEach(t),P=k(E,"path",{d:!0}),s(P).forEach(t),Z=k(E,"path",{d:!0}),s(Z).forEach(t),D=k(E,"path",{d:!0}),s(D).forEach(t),f=k(E,"path",{d:!0}),s(f).forEach(t),w=k(E,"path",{d:!0}),s(w).forEach(t),F=k(E,"path",{d:!0}),s(F).forEach(t),ae=k(E,"path",{d:!0}),s(ae).forEach(t),oe=k(E,"path",{d:!0}),s(oe).forEach(t),le=k(E,"path",{d:!0}),s(le).forEach(t),fe=k(E,"path",{d:!0}),s(fe).forEach(t),W=k(E,"path",{d:!0}),s(W).forEach(t),q=k(E,"path",{d:!0}),s(q).forEach(t),te=k(E,"path",{d:!0}),s(te).forEach(t),re=k(E,"polygon",{points:!0}),s(re).forEach(t),ne=k(E,"path",{d:!0}),s(ne).forEach(t),de=k(E,"path",{d:!0}),s(de).forEach(t),j=k(E,"path",{d:!0}),s(j).forEach(t),R=k(E,"path",{d:!0}),s(R).forEach(t),se=k(E,"path",{d:!0}),s(se).forEach(t),ie=k(E,"path",{d:!0}),s(ie).forEach(t),ce=k(E,"path",{d:!0}),s(ce).forEach(t),ve=k(E,"path",{d:!0}),s(ve).forEach(t),K=k(E,"path",{d:!0}),s(K).forEach(t),Y=k(E,"path",{d:!0}),s(Y).forEach(t),E.forEach(t),ue.forEach(t),me.forEach(t),he.forEach(t),pe.forEach(t),B.forEach(t),Ie.forEach(t),J.forEach(t),this.h()},h(){a(y,"id","ons-logo-en-alt"),a(M,"d","M0,34.6c.8-1.69,1.39-3,2.32-4.6A38.28,38.28,0,0,1,0,23.4V34.6M5,3S0,3,0,9.25v1A62.12,62.12,0,0,0,4.2,27a43.77,43.77,0,0,1,9.42-10.79C21.69,9.21,31.16,5.13,45.9,3Z"),a(g,"class","ons-svg-logo__group ons-svg-logo__group--secondary"),a(g,"fill","#a8bd3a"),a(A,"d","M53.06,6.42C36.2,8,24.68,12.92,16.43,20.07A41.46,41.46,0,0,0,6.4,32.2C12.87,44.93,28.88,57,46.6,57H47s6.32.21,6.32-6.91V6.36a1.22,1.22,0,0,1-.26.06M9.72,42.67a44.25,44.25,0,0,1-5-7.42A80.59,80.59,0,0,0,0,46.38V56.91L31.06,57c-9.83-3-15.74-7.64-21.34-14.3"),a(L,"class","ons-svg-logo__group ons-svg-logo__group--primary"),a(L,"fill","#003c57"),a(I,"d","M82,47.49c-9.07,0-13.13-7.51-13.13-16.77S72.91,14,82,14s13.1,7.61,13.1,16.77S91.1,47.54,82,47.54m0-30.91c-6.69,0-9.07,7.33-9.07,14.05s2.16,13.9,9.07,13.9,9-7.28,9-13.9-2.34-14-9-14"),a(G,"d","M106.36,23.81V46.88h-3.67V23.81H98.93V21.56h3.76V17.9c0-4.61,2.72-7.95,8.08-7.95.38,0,.86.05.86.05v2.35h-.43c-2.55,0-4.84,1.64-4.84,5.12v4.09h5.27v2.25Z"),a(C,"d","M121.53,23.81V46.88h-3.67V23.81H114.1V21.56h3.76V17.9c0-4.61,2.72-7.95,8.08-7.95.38,0,.86.05.86.05v2.35h-.43c-2.55,0-4.84,1.64-4.84,5.12v4.09h5.27v2.25Z"),a(P,"d","M132.85,16.72a2.28,2.28,0,0,1-2.33-2.23v0a2.34,2.34,0,0,1,4.67,0,2.28,2.28,0,0,1-2.3,2.26h0M131,21.56h3.71V46.88H131Z"),a(Z,"d","M150.53,47.49c-6,0-10.63-5.16-10.63-13.29S144.52,21,150.66,21a9.76,9.76,0,0,1,6.17,1.74l-1,2.25a7.53,7.53,0,0,0-4.4-1.36c-5.15,0-7.78,4.46-7.78,10.48,0,6.2,3,10.62,7.65,10.62a8,8,0,0,0,4.49-1.37l1,2.45a10.21,10.21,0,0,1-6.3,1.73"),a(D,"d","M162.84,35.75c.48,6,3.76,9,8.9,9a14.66,14.66,0,0,0,6.88-1.55l1.08,2.59a18,18,0,0,1-8.22,1.73c-7.12,0-12.18-4.23-12.18-13.34,0-8.69,4.67-13.2,11-13.2s10.37,3.95,10.37,12.4Zm7.35-12.41c-4.1,0-7.56,3.2-7.52,10.29l14.39-2c0-5.87-2.81-8.32-6.87-8.32"),a(f,"d","M198.57,23.81V46.88H194.9V23.81h-3.76V21.56h3.76V17.9c0-4.61,2.72-7.95,8.08-7.95.39,0,.87.05.87.05v2.35h-.44c-2.54,0-4.84,1.64-4.84,5.12v4.09h5.28v2.25Z"),a(w,"d","M217.28,47.49c-7.47,0-10.89-5.78-10.89-13.24S209.81,21,217.28,21s10.85,5.82,10.85,13.3-3.37,13.24-10.85,13.24m0-24c-5.53,0-7.13,5.59-7.13,10.81s1.73,10.56,7.13,10.56,7.13-5.35,7.13-10.56-1.6-10.81-7.13-10.81"),a(F,"d","M244.08,23.91c-2.34-.61-5.75-.52-7.35.47v22.5H233V22.69c2.67-1.13,5.36-1.74,10.11-1.74H245Z"),a(ae,"d","M277.42,47.13,263.07,25a32.2,32.2,0,0,1-1.85-3.29h-.09s.13,1.88.13,3.85V47.13h-4.71V14.8h5.31l13.61,20.82A28.76,28.76,0,0,1,277.38,39h.08s-.17-1.84-.17-3.77V14.8H282V47.13Z"),a(oe,"d","M297.52,47.79c-7.43,0-10.93-3-10.93-7.81,0-6.8,7.12-8.64,15.59-9.39V29.13c0-3.47-2.37-4.51-5.83-4.51a18,18,0,0,0-6.87,1.46L288.23,23a24,24,0,0,1,9.12-1.83c5.61,0,9.93,2.3,9.93,8.78V46a22.71,22.71,0,0,1-9.76,1.83m4.66-14.67c-6.26.67-10.45,1.84-10.45,6.73,0,3.42,2.42,4.88,6.22,4.88a10.09,10.09,0,0,0,4.23-.84Z"),a(le,"d","M322,47.69c-5.31,0-7.34-3.43-7.34-6.86V25.09h-3.55V21.81h3.55V16.12l5.4-1.5v7.19H325v3.28h-5V40.55a3.26,3.26,0,0,0,3,3.52h.5a5.5,5.5,0,0,0,1.46-.23v3.33a7.69,7.69,0,0,1-3,.52"),a(fe,"d","M331.91,17.43a3,3,0,0,1-3.15-2.81,3.17,3.17,0,0,1,6.31,0,3,3,0,0,1-3.16,2.81m-2.72,4.38h5.44V47.13h-5.44Z"),a(W,"d","M350.88,47.79c-7.73,0-11.57-5.74-11.57-13.3s3.84-13.34,11.57-13.34,11.54,5.78,11.54,13.34-3.8,13.3-11.54,13.3m0-23.17c-4.66,0-6.05,4.89-6.05,9.82s1.47,9.63,6.05,9.63,6.05-4.7,6.05-9.63-1.38-9.82-6.05-9.82"),a(q,"d","M382.52,47.13V29c0-3.24-2.77-4.47-5.88-4.47a12.3,12.3,0,0,0-4.37.76v21.8h-5.39V23a26.81,26.81,0,0,1,10.06-1.83c6.61,0,11,2.25,11,7.8V47.13Z"),a(te,"d","M403.18,47.79c-7.43,0-10.94-3-10.94-7.81,0-6.8,7.13-8.64,15.6-9.39V29.13c0-3.47-2.37-4.51-5.83-4.51a18,18,0,0,0-6.87,1.46L393.89,23A24,24,0,0,1,403,21.15c5.62,0,9.94,2.3,9.94,8.78V46a22.71,22.71,0,0,1-9.76,1.83m4.66-14.67c-6.27.67-10.46,1.84-10.46,6.73,0,3.42,2.43,4.88,6.23,4.88a10.09,10.09,0,0,0,4.23-.84Z"),a(re,"points","418.52 47.13 418.52 34.91 418.52 10.25 423.92 10.25 423.92 22.76 423.92 47.13 418.52 47.13"),a(ne,"d","M445.39,47.79A19.11,19.11,0,0,1,436.58,46l1.51-4a13.48,13.48,0,0,0,6.22,1.55c3.76,0,6.44-2.21,6.44-5.41,0-7.09-13.44-4.36-13.44-14.42,0-5.13,4.15-9.59,10.72-9.59A15.82,15.82,0,0,1,455.8,16l-1.38,3.52a11.93,11.93,0,0,0-5.66-1.5c-3.5,0-5.79,2.11-5.79,5.12,0,7,13.74,3.94,13.74,14.65,0,5.74-4.71,10-11.32,10"),a(de,"d","M470.41,47.69c-5.31,0-7.34-3.43-7.34-6.86V25.09h-3.54V21.81h3.54V16.12l5.4-1.5v7.19h4.92v3.28h-4.92V40.55a3.27,3.27,0,0,0,3,3.52h.48a5.12,5.12,0,0,0,1.46-.23v3.33a7.69,7.69,0,0,1-3,.52"),a(j,"d","M487.27,47.79c-7.44,0-10.93-3-10.93-7.81,0-6.8,7.13-8.64,15.6-9.39V29.13c0-3.47-2.38-4.51-5.84-4.51a18,18,0,0,0-6.87,1.46L478,23a23.94,23.94,0,0,1,9.11-1.83c5.62,0,9.94,2.3,9.94,8.78V46a22.71,22.71,0,0,1-9.76,1.83M492,33.16c-6.27.67-10.46,1.84-10.46,6.73,0,3.42,2.42,4.88,6.22,4.88a10,10,0,0,0,4.24-.84Z"),a(R,"d","M511.73,47.69c-5.32,0-7.35-3.43-7.35-6.86V25.09h-3.54V21.81h3.54V16.12l5.4-1.5v7.19h4.92v3.28h-4.92V40.55a3.26,3.26,0,0,0,3,3.52h.5a5.5,5.5,0,0,0,1.46-.23v3.33a7.69,7.69,0,0,1-3,.52"),a(se,"d","M521.66,17.43a3,3,0,0,1-3.15-2.81,3.17,3.17,0,0,1,6.31,0,3,3,0,0,1-3.16,2.81m-2.72,4.38h5.45V47.13h-5.45Z"),a(ie,"d","M536.19,47.79A15.9,15.9,0,0,1,528.54,46L530,42.48a10.53,10.53,0,0,0,5.52,1.5c2.77,0,5-1.78,5-3.94,0-6-11.1-3.2-11.1-11.47,0-3.76,3.37-7.42,8.86-7.42A13.56,13.56,0,0,1,545.34,23l-1.42,3.14a8.47,8.47,0,0,0-4.62-1.45c-2.81,0-4.54,1.69-4.54,3.62,0,5.64,11.32,3.14,11.32,11.6,0,4-3.85,7.9-9.89,7.9"),a(ce,"d","M559.83,47.69c-5.31,0-7.35-3.43-7.35-6.86V25.09h-3.54V21.81h3.54V16.12l5.4-1.5v7.19h4.93v3.28h-4.93V40.55a3.27,3.27,0,0,0,3,3.52h.48a5.64,5.64,0,0,0,1.47-.23v3.33a7.72,7.72,0,0,1-3,.52"),a(ve,"d","M569.77,17.43a3,3,0,0,1-3.15-2.81,3.17,3.17,0,0,1,6.31,0,3,3,0,0,1-3.16,2.81m-2.72,4.38h5.44V47.13h-5.44Z"),a(K,"d","M588.14,47.79c-6.23,0-11-5.08-11-13.35s4.88-13.29,11-13.29A10.51,10.51,0,0,1,594.66,23l-1.21,3a6.87,6.87,0,0,0-4-1.22c-4.4,0-6.69,3.81-6.69,9.49s2.63,9.59,6.61,9.59a6.74,6.74,0,0,0,4-1.28L594.7,46c-1.12.94-3.33,1.84-6.56,1.84"),a(Y,"d","M605.1,47.79A15.9,15.9,0,0,1,597.45,46l1.42-3.47A10.54,10.54,0,0,0,604.4,44c2.77,0,5-1.78,5-3.94,0-6-11.1-3.2-11.1-11.47,0-3.76,3.37-7.42,8.85-7.42a13.49,13.49,0,0,1,7.1,1.83l-1.42,3.14a8.42,8.42,0,0,0-4.63-1.45c-2.8,0-4.53,1.69-4.53,3.62,0,5.64,11.32,3.14,11.32,11.6,0,4-3.85,7.9-9.89,7.9"),a(_,"class","ons-svg-logo__group ons-svg-logo__group--text"),a(_,"fill","#003c57"),a(m,"class","ons-svg-logo"),a(m,"xmlns","http://www.w3.org/2000/svg"),a(m,"width","197"),a(m,"height","19"),a(m,"viewBox","33 2 552 60"),a(p,"class","ons-header__logo-link svelte-13hf06c"),a(p,"href",o[0]),a(u,"class","ons-header__logo--large svelte-13hf06c"),a(c,"class","ons-grid__col svelte-13hf06c"),a(d,"class","ons-grid svelte-13hf06c"),a(i,"class","wrapper"),a(n,"class","ons-header__top svelte-13hf06c"),Lt(n,"baseline",o[1])},m(U,J){ee(U,n,J),e(n,i),e(i,d),e(d,c),e(c,u),e(u,p),e(p,m),e(m,y),e(y,h),e(m,g),e(g,M),e(m,L),e(L,A),e(m,_),e(_,I),e(_,G),e(_,C),e(_,P),e(_,Z),e(_,D),e(_,f),e(_,w),e(_,F),e(_,ae),e(_,oe),e(_,le),e(_,fe),e(_,W),e(_,q),e(_,te),e(_,re),e(_,ne),e(_,de),e(_,j),e(_,R),e(_,se),e(_,ie),e(_,ce),e(_,ve),e(_,K),e(_,Y)},p(U,[J]){J&1&&a(p,"href",U[0]),J&2&&Lt(n,"baseline",U[1])},i:Re,o:Re,d(U){U&&t(n)}}}function jt(o,n,i){let{baseurl:d="//www.ons.gov.uk"}=n,{baseline:c=!1}=n;return o.$$set=u=>{"baseurl"in u&&i(0,d=u.baseurl),"baseline"in u&&i(1,c=u.baseline)},[d,c]}class Yt extends La{constructor(n){super(),Aa(this,n,jt,Wt,Ia,{baseurl:0,baseline:1})}}function Jt(o){let n,i,d,c,u,p,m,y,h,g,M,L,A,_,I,G,C,P;M=new Kt({}),A=new Yt({props:{baseline:!0}});const Z=o[3].default,D=Dt(Z,o,o[2],null);return C=new Rt({}),{c(){n=l("meta"),i=l("meta"),d=l("link"),c=l("link"),p=l("meta"),y=l("meta"),h=l("meta"),g=S(),$a(M.$$.fragment),L=S(),$a(A.$$.fragment),_=S(),I=l("main"),D&&D.c(),G=S(),$a(C.$$.fragment),this.h()},l(f){const w=Ct("svelte-htfz23",document.head);n=r(w,"META",{property:!0,content:!0}),i=r(w,"META",{property:!0,content:!0}),d=r(w,"LINK",{rel:!0,href:!0}),c=r(w,"LINK",{rel:!0,href:!0}),p=r(w,"META",{property:!0,content:!0}),y=r(w,"META",{name:!0,content:!0}),h=r(w,"META",{property:!0,content:!0}),w.forEach(t),g=H(f),Fa(M.$$.fragment,f),L=H(f),Fa(A.$$.fragment,f),_=H(f),I=r(f,"MAIN",{id:!0,tabindex:!0});var F=s(I);D&&D.l(F),F.forEach(t),G=H(f),Fa(C.$$.fragment,f),this.h()},h(){document.title="Explore subnational statistics - ONS",a(n,"property","og:title"),a(n,"content","Explore subnational statistics - ONS"),a(i,"property","og:type"),a(i,"content","website"),a(d,"rel","icon"),a(d,"href",sa+$+"/favicon.ico"),a(c,"rel","canonical"),a(c,"href",u=""+(sa+$+o[0].url.pathname)),a(p,"property","og:url"),a(p,"content",m=""+(sa+$+o[0].url.pathname)),a(y,"name","description"),a(y,"content","Get data about people and the communities they live in, includes population, economy and health."),a(h,"property","og:description"),a(h,"content","Get data about people and the communities they live in, includes population, economy and health."),a(I,"id","main"),a(I,"tabindex","-1")},m(f,w){e(document.head,n),e(document.head,i),e(document.head,d),e(document.head,c),e(document.head,p),e(document.head,y),e(document.head,h),ee(f,g,w),za(M,f,w),ee(f,L,w),za(A,f,w),ee(f,_,w),ee(f,I,w),D&&D.m(I,null),ee(f,G,w),za(C,f,w),P=!0},p(f,[w]){(!P||w&1&&u!==(u=""+(sa+$+f[0].url.pathname)))&&a(c,"href",u),(!P||w&1&&m!==(m=""+(sa+$+f[0].url.pathname)))&&a(p,"content",m),D&&D.p&&(!P||w&4)&&St(D,Z,f,f[2],P?Tt(Z,f[2],w,null):Ht(f[2]),null)},i(f){P||(ka(M.$$.fragment,f),ka(A.$$.fragment,f),ka(D,f),ka(C.$$.fragment,f),P=!0)},o(f){ya(M.$$.fragment,f),ya(A.$$.fragment,f),ya(D,f),ya(C.$$.fragment,f),P=!1},d(f){t(n),t(i),t(d),t(c),t(p),t(y),t(h),f&&t(g),Ba(M,f),f&&t(L),Ba(A,f),f&&t(_),f&&t(I),D&&D.d(f),f&&t(G),Ba(C,f)}}}function Qt(o,n,i){let d;Ot(o,Pt,h=>i(0,d=h));let{$$slots:c={},$$scope:u}=n,{data:p}=n;x("areas",p.areas),x("areasParentsLookup",p.areasParentsLookup),x("areasGeogLevel",p.areasGeogLevel),x("areasGeogInfo",p.areasGeogInfo);let m=p.indicators.map(h=>({...h,label:p.indicatorsMetadata.find(g=>h.code==g.code).label,data:p.combinedData.filter(g=>g.id===h.id)}));x("indicators",m),x("indicatorsCalculations",p.indicatorsCalculations),p.indicatorsMetadata.forEach(h=>{h.prefix=h.prefix==null?"":h.prefix.replace("GBPSign","£"),h.suffix=h.suffix==null?"":h.suffix}),x("indicatorsMetadata",p.indicatorsMetadata),x("periodsLookup",p.periodsLookup),x("clustersInfo",p.clustersInfo),x("clustersLookup",p.clustersLookup),x("beeswarmKeyData",p.beeswarmKeyData);let y=[...new Set(m.map(h=>h.topic))].map(h=>({name:h,indicatorsList:m.filter(g=>g.topic===h).map(g=>g.id),subTopicsList:[...new Set(m.filter(g=>g.topic===h).map(g=>g.subTopic))]})).sort((h,g)=>h.name-g.name);return x("topics",y),d.url.pathname,d.url.hostname.split(".")[0]=="cy",o.$$set=h=>{"data"in h&&i(1,p=h.data),"$$scope"in h&&i(2,u=h.$$scope)},[d,p,u,c]}class ls extends La{constructor(n){super(),Aa(this,n,Qt,Jt,Ia,{data:1})}}export{ls as component,os as universal};