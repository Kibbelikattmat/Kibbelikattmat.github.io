import{S as F,i as K,s as V,k as f,q as L,a as k,l as h,m as y,r as B,h as v,c as E,n as l,b as G,D as t,_ as N,K as A,u as J,B as C,M as Q}from"../../../chunks/index-95745f91.js";function R(a){let n,s,p,d,e,i,w,I,o,T,b,M,U,u,D,_,z,H,g,P,S,q;return{c(){n=f("main"),s=f("h1"),p=L("Logga in (om du kan)"),d=k(),e=f("div"),i=f("label"),w=L("Email:"),I=k(),o=f("input"),T=k(),b=f("label"),M=L("Lösenord:"),U=k(),u=f("input"),D=k(),_=f("button"),z=L(a[0]),H=k(),g=f("button"),P=L("Logga In"),this.h()},l(c){n=h(c,"MAIN",{class:!0});var m=y(n);s=h(m,"H1",{});var O=y(s);p=B(O,"Logga in (om du kan)"),O.forEach(v),d=E(m),e=h(m,"DIV",{class:!0});var r=y(e);i=h(r,"LABEL",{for:!0});var W=y(i);w=B(W,"Email:"),W.forEach(v),I=E(r),o=h(r,"INPUT",{id:!0,type:!0,name:!0,class:!0}),T=E(r),b=h(r,"LABEL",{for:!0});var X=y(b);M=B(X,"Lösenord:"),X.forEach(v),U=E(r),u=h(r,"INPUT",{id:!0,type:!0,name:!0,class:!0}),D=E(r),_=h(r,"BUTTON",{type:!0,class:!0});var Y=y(_);z=B(Y,a[0]),Y.forEach(v),H=E(r),g=h(r,"BUTTON",{id:!0,class:!0});var j=y(g);P=B(j,"Logga In"),j.forEach(v),r.forEach(v),m.forEach(v),this.h()},h(){l(i,"for","email"),l(o,"id","email"),l(o,"type","email"),l(o,"name","email"),l(o,"class","svelte-wz9bip"),l(b,"for","password"),l(u,"id","password"),l(u,"type","password"),l(u,"name","password"),l(u,"class","svelte-wz9bip"),l(_,"type","submit"),l(_,"class","svelte-wz9bip"),l(g,"id","realbutton"),l(g,"class","svelte-wz9bip"),l(e,"class","svelte-wz9bip"),l(n,"class","svelte-wz9bip")},m(c,m){G(c,n,m),t(n,s),t(s,p),t(n,d),t(n,e),t(e,i),t(i,w),t(e,I),t(e,o),N(o,a[2]),t(e,T),t(e,b),t(b,M),t(e,U),t(e,u),N(u,a[3]),t(e,D),t(e,_),t(_,z),t(e,H),t(e,g),t(g,P),S||(q=[A(o,"input",a[5]),A(u,"input",a[6]),A(_,"click",a[7]),A(g,"click",a[8])],S=!0)},p(c,[m]){m&4&&o.value!==c[2]&&N(o,c[2]),m&8&&u.value!==c[3]&&N(u,c[3]),m&1&&J(z,c[0])},i:C,o:C,d(c){c&&v(n),S=!1,Q(q)}}}function Z(a){const n=window.innerWidth-a.offsetWidth,s=window.innerHeight-a.offsetHeight,p=Math.random()*n,d=Math.random()*s;a.style.left=`${p}px`,a.style.top=`${d}px`,a.style.opacity=1,setTimeout(()=>a.style.opacity=0,200)}function x(a,n,s){let p="Logga In",d,e,i;function w(){alert("Bra jobbat, du är nu inloggad"),s(0,p="Logga In"),clearInterval(d),document.getElementById("realbutton"),s(3,i=""),s(2,e="")}function I(){e=this.value,s(2,e)}function o(){i=this.value,s(3,i)}return[p,d,e,i,w,I,o,()=>{s(0,p="Försöker logga in dig..."),s(1,d=1),setTimeout(()=>{s(0,p="Något gick fel, du klickade nog på fel knapp"),s(1,d=setInterval(()=>{Z(document.getElementById("realbutton"))},500))},1e4)},()=>{w()}]}class ee extends F{constructor(n){super(),K(this,n,x,R,V,{})}}export{ee as default};
