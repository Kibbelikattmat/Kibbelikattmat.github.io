import{S as z,i as F,s as H,V as W,k,a as S,l as y,m as T,h as d,c as A,n as M,b as D,D as h,K,t as X,d as Q,f as B,L as R,M as U,q as I,r as P,p as C,J as j,g as Z,u as G,B as J,W as $,X as x}from"../../../chunks/index-95745f91.js";import{f as ee,a as le}from"../../../chunks/index-2bfd0734.js";function L(s,t,n){const f=s.slice();return f[9]=t[n],f}function N(s){let t,n=(s[9],O(s[4],s[9])+""),f,i,o,_;return{c(){t=k("p"),f=I(n),i=S(),o=k("img"),this.h()},l(l){t=y(l,"P",{});var e=T(t);f=P(e,n),e.forEach(d),i=A(l),o=y(l,"IMG",{style:!0,src:!0,alt:!0,class:!0}),this.h()},h(){C(o,"transform","translate(0, "+(s[1]<2?s[1]*O(s[4],s[9]):-s[1]*O(s[4],s[9])/(s[4].length-1))+"px)"),j(o.src,_=s[9])||M(o,"src",_),M(o,"alt",`parallax layer ${O(s[4],s[9])}`),M(o,"class","svelte-8foeaa")},m(l,e){D(l,t,e),h(t,f),D(l,i,e),D(l,o,e)},p(l,e){e&2&&C(o,"transform","translate(0, "+(l[1]<2?l[1]*O(l[4],l[9]):-l[1]*O(l[4],l[9])/(l[4].length-1))+"px)")},d(l){l&&d(t),l&&d(i),l&&d(o)}}}function te(s){let t,n,f,i,o,_,l;return{c(){t=k("p"),n=I("You have scrolled "),f=I(s[1]),i=I(" pixels"),o=S(),_=k("p"),l=I(s[3])},l(e){t=y(e,"P",{});var a=T(t);n=P(a,"You have scrolled "),f=P(a,s[1]),i=P(a," pixels"),a.forEach(d),o=A(e),_=y(e,"P",{});var p=T(_);l=P(p,s[3]),p.forEach(d)},m(e,a){D(e,t,a),h(t,n),h(t,f),h(t,i),D(e,o,a),D(e,_,a),h(_,l)},p(e,a){a&2&&G(f,e[1]),a&8&&G(l,e[3])},i:J,o:J,d(e){e&&d(t),e&&d(o),e&&d(_)}}}function se(s){let t,n,f,i,o,_,l,e,a,p,Y,E,b,u;return{c(){t=k("div"),n=k("p"),f=I("You have scrolled "),i=I(s[1]),o=I(" pixels"),_=S(),l=k("p"),e=I(s[3]),a=S(),p=k("img"),this.h()},l(v){t=y(v,"DIV",{class:!0});var c=T(t);n=y(c,"P",{});var V=T(n);f=P(V,"You have scrolled "),i=P(V,s[1]),o=P(V," pixels"),V.forEach(d),_=A(c),l=y(c,"P",{});var r=T(l);e=P(r,s[3]),r.forEach(d),a=A(c),p=y(c,"IMG",{class:!0,src:!0,alt:!0}),c.forEach(d),this.h()},h(){M(p,"class","cool svelte-8foeaa"),j(p.src,Y="/pixel_ship_yellow.png")||M(p,"src",Y),M(p,"alt","hmmmmmm"),M(t,"class","story svelte-8foeaa")},m(v,c){D(v,t,c),h(t,n),h(n,f),h(n,i),h(n,o),h(t,_),h(t,l),h(l,e),h(t,a),h(t,p),u=!0},p(v,c){(!u||c&2)&&G(i,v[1]),(!u||c&8)&&G(e,v[3])},i(v){u||(W(()=>{b&&b.end(1),E=$(t,ee,{y:200,duration:0}),E.start()}),u=!0)},o(v){E&&E.invalidate(),b=x(t,le,{}),u=!1},d(v){v&&d(t),v&&b&&b.end()}}}function ae(s){let t=!1,n=()=>{t=!1},f,i,o,_,l,e,a,p,Y,E;W(s[6]);let b=s[4],u=[];for(let r=0;r<b.length;r+=1)u[r]=N(L(s,b,r));const v=[se,te],c=[];function V(r,g){return r[2]&&r[0]>0?0:r[0]===0?1:-1}return~(e=V(s))&&(a=c[e]=v[e](s)),{c(){i=k("main"),o=k("div");for(let r=0;r<u.length;r+=1)u[r].c();_=S(),l=k("div"),a&&a.c(),this.h()},l(r){i=y(r,"MAIN",{class:!0});var g=T(i);o=y(g,"DIV",{class:!0});var w=T(o);for(let q=0;q<u.length;q+=1)u[q].l(w);w.forEach(d),_=A(g),l=y(g,"DIV",{class:!0});var m=T(l);a&&a.l(m),m.forEach(d),g.forEach(d),this.h()},h(){M(o,"class","container svelte-8foeaa"),M(l,"class","text svelte-8foeaa"),M(i,"class","svelte-8foeaa")},m(r,g){D(r,i,g),h(i,o);for(let w=0;w<u.length;w+=1)u[w].m(o,null);h(i,_),h(i,l),~e&&c[e].m(l,null),p=!0,Y||(E=[K(window,"scroll",s[5]),K(window,"scroll",()=>{t=!0,clearTimeout(f),f=setTimeout(n,100),s[6]()})],Y=!0)},p(r,[g]){if(g&2&&!t&&(t=!0,clearTimeout(f),scrollTo(window.pageXOffset,r[1]),f=setTimeout(n,100)),g&18){b=r[4];let m;for(m=0;m<b.length;m+=1){const q=L(r,b,m);u[m]?u[m].p(q,g):(u[m]=N(q),u[m].c(),u[m].m(o,null))}for(;m<u.length;m+=1)u[m].d(1);u.length=b.length}let w=e;e=V(r),e===w?~e&&c[e].p(r,g):(a&&(Z(),X(c[w],1,1,()=>{c[w]=null}),Q()),~e?(a=c[e],a?a.p(r,g):(a=c[e]=v[e](r),a.c()),B(a,1),a.m(l,null)):a=null)},i(r){p||(B(a),p=!0)},o(r){X(a),p=!1},d(r){r&&d(i),R(u,r),~e&&c[e].d(),Y=!1,U(E)}}}function O(s,t){return s.indexOf(t)+1}function re(s,t,n){let f;const i=["/pixel_ship_blue_small.png","/pixel_ship_green_small.png","/pixel_ship_red_small.png"],o=["Keep scrolling...","More scrolling...","Almost there..."];let _=0,l=0,e=!0;const a=Math.floor(4400/o.length);function p(){const E=l;n(0,l=Math.max(0,Math.floor(_/a))),n(2,e=l===E)}function Y(){n(1,_=window.pageYOffset)}return s.$$.update=()=>{s.$$.dirty&1&&n(3,f=o[l])},[l,_,e,f,i,p,Y]}class ne extends z{constructor(t){super(),F(this,t,re,ae,H,{})}}export{ne as default};
