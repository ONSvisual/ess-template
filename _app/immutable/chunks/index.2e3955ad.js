//js
function C(){}const Et=t=>t;function kt(t,e){for(const n in e)t[n]=e[n];return t}function ct(t){return t()}function et(){return Object.create(null)}function E(t){t.forEach(ct)}function Y(t){return typeof t=="function"}function ne(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let H;function ie(t,e){return H||(H=document.createElement("a")),H.href=e,t===H.href}function Tt(t){return Object.keys(t).length===0}function At(t,...e){if(t==null)return C;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function se(t,e,n){t.$$.on_destroy.push(At(e,n))}function re(t,e,n,i){if(t){const s=lt(t,e,n,i);return t[0](s)}}function lt(t,e,n,i){return t[1]&&i?kt(n.ctx.slice(),t[1](i(e))):n.ctx}function oe(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const l=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)l[o]=e.dirty[o]|s[o];return l}return e.dirty|s}return e.dirty}function ce(t,e,n,i,s,l){if(s){const r=lt(e,n,i,l);t.p(r,s)}}function le(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function ae(t){return t??""}const at=typeof window<"u";let Nt=at?()=>window.performance.now():()=>Date.now(),Z=at?t=>requestAnimationFrame(t):C;const M=new Set;function ut(t){M.forEach(e=>{e.c(t)||(M.delete(e),e.f())}),M.size!==0&&Z(ut)}function Mt(t){let e;return M.size===0&&Z(ut),{promise:new Promise(n=>{M.add(e={c:t,f:n})}),abort(){M.delete(e)}}}const ft=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;class G{constructor(e){this.options=e,this._listeners="WeakMap"in ft?new WeakMap:void 0}observe(e,n){return this._listeners.set(e,n),this._getObserver().observe(e,this.options),()=>{this._listeners.delete(e),this._observer.unobserve(e)}}_getObserver(){var e;return(e=this._observer)!==null&&e!==void 0?e:this._observer=new ResizeObserver(n=>{var i;for(const s of n)G.entries.set(s.target,s),(i=this._listeners.get(s.target))===null||i===void 0||i(s)})}}G.entries="WeakMap"in ft?new WeakMap:void 0;let I=!1;function St(){I=!0}function Ct(){I=!1}function Ot(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function jt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let a=0;a<e.length;a++){const f=e[a];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const a=e[c].claim_order,f=(s>0&&e[n[s]].claim_order<=a?s+1:Ot(1,s,h=>e[n[h]].claim_order,a))-1;i[c]=n[f]+1;const d=f+1;n[d]=c,s=Math.max(d,s)}const l=[],r=[];let o=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);o>=c;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);l.reverse(),r.sort((c,a)=>c.claim_order-a.claim_order);for(let c=0,a=0;c<r.length;c++){for(;a<l.length&&r[c].claim_order>=l[a].claim_order;)a++;const f=a<l.length?l[a]:null;t.insertBefore(r[c],f)}}function dt(t,e){t.appendChild(e)}function _t(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Dt(t){const e=U("style");return Lt(_t(t),e),e.sheet}function Lt(t,e){return dt(t.head||t,e),e.sheet}function Pt(t,e){if(I){for(jt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function zt(t,e,n){t.insertBefore(e,n||null)}function Ht(t,e,n){I&&!n?Pt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function O(t){t.parentNode&&t.parentNode.removeChild(t)}function ue(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function U(t){return document.createElement(t)}function ht(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function tt(t){return document.createTextNode(t)}function fe(){return tt(" ")}function de(){return tt("")}function nt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function _e(t){return function(e){return e.preventDefault(),t.call(this,e)}}function mt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const Wt=["width","height"];function he(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&Wt.indexOf(i)===-1?t[i]=e[i]:mt(t,i,e[i])}function me(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:mt(t,e,n)}function pe(t,e,n){const i=new Set;for(let s=0;s<t.length;s+=1)t[s].checked&&i.add(t[s].__value);return n||i.delete(e),Array.from(i)}function ye(t){let e;return{p(...n){e=n,e.forEach(i=>t.push(i))},r(){e.forEach(n=>t.splice(t.indexOf(n),1))}}}function Rt(t){return Array.from(t.childNodes)}function pt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function yt(t,e,n,i,s=!1){pt(t);const l=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function gt(t,e,n,i){return yt(t,s=>s.nodeName===e,s=>{const l=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||l.push(o.name)}l.forEach(r=>s.removeAttribute(r))},()=>i(e))}function ge(t,e,n){return gt(t,e,n,U)}function be(t,e,n){return gt(t,e,n,ht)}function qt(t,e){return yt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>tt(e),!0)}function we(t){return qt(t," ")}function it(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function xe(t,e){const n=it(t,"HTML_TAG_START",0),i=it(t,"HTML_TAG_END",n);if(n===i)return new st(void 0,e);pt(t);const s=t.splice(n,i-n+1);O(s[0]),O(s[s.length-1]);const l=s.slice(1,s.length-1);for(const r of l)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new st(l,e)}function $e(t,e){e=""+e,t.data!==e&&(t.data=e)}function ve(t,e){t.value=e??""}function Ee(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function ke(t,e,n){for(let i=0;i<t.options.length;i+=1){const s=t.options[i];if(s.__value===e){s.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function Te(t){const e=t.querySelector(":checked");return e&&e.__value}let W;function Bt(){if(W===void 0){W=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{W=!0}}return W}function Ae(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=U("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const s=Bt();let l;return s?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",l=nt(window,"message",r=>{r.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{l=nt(i.contentWindow,"resize",e),e()}),dt(t,i),()=>{(s||l&&i.contentWindow)&&l(),O(i)}}const Ne=new G({box:"content-box"});function Me(t,e,n){t.classList[n?"add":"remove"](e)}function bt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function Se(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const l=s.textContent.trim();l===`HEAD_${t}_END`?(i-=1,n.push(s)):l===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class Ft{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=ht(n.nodeName):this.e=U(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)zt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(O)}}class st extends Ft{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)Ht(this.t,this.n[n],e)}}function Ce(t,e){return new t(e)}const q=new Map;let B=0;function Gt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function It(t,e){const n={stylesheet:Dt(e),rules:{}};return q.set(t,n),n}function rt(t,e,n,i,s,l,r,o=0){const c=16.666/i;let a=`{
`;for(let y=0;y<=1;y+=c){const g=e+(n-e)*l(y);a+=y*100+`%{${r(g,1-g)}}
`}const f=a+`100% {${r(n,1-n)}}
}`,d=`__svelte_${Gt(f)}_${o}`,h=_t(t),{stylesheet:u,rules:_}=q.get(h)||It(h,t);_[d]||(_[d]=!0,u.insertRule(`@keyframes ${d} ${f}`,u.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${d} ${i}ms linear ${s}ms 1 both`,B+=1,d}function Ut(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),B-=s,B||Jt())}function Jt(){Z(()=>{B||(q.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&O(e)}),q.clear())})}let L;function D(t){L=t}function k(){if(!L)throw new Error("Function called outside component initialization");return L}function Oe(t){k().$$.before_update.push(t)}function je(t){k().$$.on_mount.push(t)}function De(t){k().$$.after_update.push(t)}function Le(t){k().$$.on_destroy.push(t)}function Pe(){const t=k();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const l=bt(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,l)}),!l.defaultPrevented}return!0}}function ze(t,e){return k().$$.context.set(t,e),e}function He(t){return k().$$.context.get(t)}function We(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const N=[],ot=[];let S=[];const V=[],wt=Promise.resolve();let X=!1;function xt(){X||(X=!0,wt.then($t))}function Re(){return xt(),wt}function F(t){S.push(t)}function qe(t){V.push(t)}const K=new Set;let A=0;function $t(){if(A!==0)return;const t=L;do{try{for(;A<N.length;){const e=N[A];A++,D(e),Kt(e.$$)}}catch(e){throw N.length=0,A=0,e}for(D(null),N.length=0,A=0;ot.length;)ot.pop()();for(let e=0;e<S.length;e+=1){const n=S[e];K.has(n)||(K.add(n),n())}S.length=0}while(N.length);for(;V.length;)V.pop()();X=!1,K.clear(),D(t)}function Kt(t){if(t.fragment!==null){t.update(),E(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(F)}}function Qt(t){const e=[],n=[];S.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),S=e}let j;function Vt(){return j||(j=Promise.resolve(),j.then(()=>{j=null})),j}function Q(t,e,n){t.dispatchEvent(bt(`${e?"intro":"outro"}${n}`))}const R=new Set;let x;function Be(){x={r:0,c:[],p:x}}function Fe(){x.r||E(x.c),x=x.p}function vt(t,e){t&&t.i&&(R.delete(t),t.i(e))}function Xt(t,e,n,i){if(t&&t.o){if(R.has(t))return;R.add(t),x.c.push(()=>{R.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Yt={duration:0};function Ge(t,e,n,i){const s={direction:"both"};let l=e(t,n,s),r=i?0:1,o=null,c=null,a=null;function f(){a&&Ut(t,a)}function d(u,_){const p=u.b-r;return _*=Math.abs(p),{a:r,b:u.b,d:p,duration:_,start:u.start,end:u.start+_,group:u.group}}function h(u){const{delay:_=0,duration:p=300,easing:y=Et,tick:g=C,css:$}=l||Yt,T={start:Nt()+_,b:u};u||(T.group=x,x.r+=1),o||c?c=T:($&&(f(),a=rt(t,r,u,p,_,y,$)),u&&g(0,1),o=d(T,p),F(()=>Q(t,u,"start")),Mt(v=>{if(c&&v>c.start&&(o=d(c,p),c=null,Q(t,o.b,"start"),$&&(f(),a=rt(t,r,o.b,o.duration,0,y,l.css))),o){if(v>=o.end)g(r=o.b,1-r),Q(t,o.b,"end"),c||(o.b?f():--o.group.r||E(o.group.c)),o=null;else if(v>=o.start){const P=v-o.start;r=o.a+o.d*y(P/o.duration),g(r,1-r)}}return!!(o||c)}))}return{run(u){Y(l)?Vt().then(()=>{l=l(s),h(u)}):h(u)},end(){f(),o=c=null}}}function Ie(t,e){Xt(t,1,1,()=>{e.delete(t.key)})}function Ue(t,e,n,i,s,l,r,o,c,a,f,d){let h=t.length,u=l.length,_=h;const p={};for(;_--;)p[t[_].key]=_;const y=[],g=new Map,$=new Map,T=[];for(_=u;_--;){const m=d(s,l,_),b=n(m);let w=r.get(b);w?i&&T.push(()=>w.p(m,e)):(w=a(b,m),w.c()),g.set(b,y[_]=w),b in p&&$.set(b,Math.abs(_-p[b]))}const v=new Set,P=new Set;function J(m){vt(m,1),m.m(o,f),r.set(m.key,m),f=m.first,u--}for(;h&&u;){const m=y[u-1],b=t[h-1],w=m.key,z=b.key;m===b?(f=m.first,h--,u--):g.has(z)?!r.has(w)||v.has(w)?J(m):P.has(z)?h--:$.get(w)>$.get(z)?(P.add(w),J(m)):(v.add(z),h--):(c(b,r),h--)}for(;h--;){const m=t[h];g.has(m.key)||c(m,r)}for(;u;)J(y[u-1]);return E(T),y}function Je(t,e){const n={},i={},s={$$scope:1};let l=t.length;for(;l--;){const r=t[l],o=e[l];if(o){for(const c in r)c in o||(i[c]=1);for(const c in o)s[c]||(n[c]=o[c],s[c]=1);t[l]=o}else for(const c in r)s[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function Ke(t){return typeof t=="object"&&t!==null?t:{}}function Qe(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Ve(t){t&&t.c()}function Xe(t,e){t&&t.l(e)}function Zt(t,e,n,i){const{fragment:s,after_update:l}=t.$$;s&&s.m(e,n),i||F(()=>{const r=t.$$.on_mount.map(ct).filter(Y);t.$$.on_destroy?t.$$.on_destroy.push(...r):E(r),t.$$.on_mount=[]}),l.forEach(F)}function te(t,e){const n=t.$$;n.fragment!==null&&(Qt(n.after_update),E(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ee(t,e){t.$$.dirty[0]===-1&&(N.push(t),xt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ye(t,e,n,i,s,l,r,o=[-1]){const c=L;D(t);const a=t.$$={fragment:null,ctx:[],props:l,update:C,not_equal:s,bound:et(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:et(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};r&&r(a.root);let f=!1;if(a.ctx=n?n(t,e.props||{},(d,h,...u)=>{const _=u.length?u[0]:h;return a.ctx&&s(a.ctx[d],a.ctx[d]=_)&&(!a.skip_bound&&a.bound[d]&&a.bound[d](_),f&&ee(t,d)),h}):[],a.update(),f=!0,E(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){St();const d=Rt(e.target);a.fragment&&a.fragment.l(d),d.forEach(O)}else a.fragment&&a.fragment.c();e.intro&&vt(t.$$.fragment),Zt(t,e.target,e.anchor,e.customElement),Ct(),$t()}D(c)}class Ze{$destroy(){te(this,1),this.$destroy=C}$on(e,n){if(!Y(n))return C;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!Tt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Ge as $,Zt as A,te as B,Pt as C,C as D,ie as E,ht as F,be as G,Me as H,re as I,Se as J,ce as K,le as L,oe as M,se as N,ze as O,Pe as P,Qe as Q,qe as R,Ze as S,We as T,He as U,ue as V,ae as W,F as X,Ae as Y,Ne as Z,G as _,fe as a,ye as a0,nt as a1,pe as a2,Le as a3,ft as a4,E as a5,Oe as a6,me as a7,Ue as a8,Ie as a9,kt as aa,he as ab,ve as ac,Je as ad,Ke as ae,_e as af,st as ag,xe as ah,ke as ai,Te as aj,Ht as b,we as c,Xt as d,de as e,Fe as f,vt as g,O as h,Ye as i,De as j,U as k,ge as l,Rt as m,mt as n,je as o,Ee as p,tt as q,qt as r,ne as s,Re as t,$e as u,Be as v,ot as w,Ce as x,Ve as y,Xe as z};