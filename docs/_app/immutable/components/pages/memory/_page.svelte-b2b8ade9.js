import{S as Q,i as z,s as H,k as b,a as I,q as w,l as k,m as y,h as G,c as j,r as T,n as o,b as F,D as p,u as W,B,J as L,P as A,Q as K,N,R as O}from"../../../chunks/index-da927ca8.js";function R(s,e,l){const n=s.slice();return n[12]=e[l],n[14]=l,n}function S(s){let e,l,n,u,c,m,P,f,v;function x(){return s[5](s[12])}function E(){return s[6](s[12])}return{c(){e=b("div"),l=b("img"),u=I(),c=b("img"),P=I(),this.h()},l(i){e=k(i,"DIV",{class:!0});var h=y(e);l=k(h,"IMG",{class:!0,src:!0,alt:!0}),u=j(h),c=k(h,"IMG",{class:!0,src:!0,alt:!0}),P=j(h),h.forEach(G),this.h()},h(){o(l,"class","front svelte-cxjmf0"),A(l.src,n=s[12].img)||o(l,"src",n),o(l,"alt",""),o(c,"class","back svelte-cxjmf0"),A(c.src,m="front.webp")||o(c,"src",m),o(c,"alt",""),o(e,"class","card svelte-cxjmf0"),K(e,"flipped",s[12].flipped)},m(i,h){F(i,e,h),p(e,l),p(e,u),p(e,c),p(e,P),f||(v=[N(e,"click",x),N(e,"keypress",E)],f=!0)},p(i,h){s=i,h&8&&!A(l.src,n=s[12].img)&&o(l,"src",n),h&8&&K(e,"flipped",s[12].flipped)},d(i){i&&G(e),f=!1,O(v)}}}function U(s){let e,l,n,u,c,m,P,f,v,x,E,i,h,J,t,g=s[3],_=[];for(let r=0;r<g.length;r+=1)_[r]=S(R(s,g,r));return{c(){e=b("main"),l=b("div");for(let r=0;r<_.length;r+=1)_[r].c();n=I(),u=b("div"),c=b("p"),m=w(s[0]),P=I(),f=b("div"),v=b("p"),x=w(s[1]),E=I(),i=b("div"),J=I(),t=b("div"),this.h()},l(r){e=k(r,"MAIN",{class:!0});var d=y(e);l=k(d,"DIV",{class:!0});var a=y(l);for(let M=0;M<_.length;M+=1)_[M].l(a);a.forEach(G),n=j(d),u=k(d,"DIV",{class:!0,id:!0});var D=y(u);c=k(D,"P",{});var V=y(c);m=T(V,s[0]),V.forEach(G),D.forEach(G),P=j(d),f=k(d,"DIV",{class:!0,id:!0});var C=y(f);v=k(C,"P",{});var q=y(v);x=T(q,s[1]),q.forEach(G),C.forEach(G),E=j(d),i=k(d,"DIV",{class:!0,id:!0,style:!0}),y(i).forEach(G),J=j(d),t=k(d,"DIV",{style:!0}),y(t).forEach(G),d.forEach(G),this.h()},h(){o(l,"class","row svelte-cxjmf0"),o(u,"class","box svelte-cxjmf0"),o(u,"id","red-box"),o(f,"class","box svelte-cxjmf0"),o(f,"id","blue-box"),o(i,"class","box svelte-cxjmf0"),o(i,"id","green-box"),o(i,"style",h=s[2]?"right: 10px;":"left:10px"),o(t,"style","width:600px; height:800px; background- color:bisque;"),o(e,"class","svelte-cxjmf0")},m(r,d){F(r,e,d),p(e,l);for(let a=0;a<_.length;a+=1)_[a].m(l,null);p(e,n),p(e,u),p(u,c),p(c,m),p(e,P),p(e,f),p(f,v),p(v,x),p(e,E),p(e,i),p(e,J),p(e,t)},p(r,[d]){if(d&24){g=r[3];let a;for(a=0;a<g.length;a+=1){const D=R(r,g,a);_[a]?_[a].p(D,d):(_[a]=S(D),_[a].c(),_[a].m(l,null))}for(;a<_.length;a+=1)_[a].d(1);_.length=g.length}d&1&&W(m,r[0]),d&2&&W(x,r[1]),d&4&&h!==(h=r[2]?"right: 10px;":"left:10px")&&o(i,"style",h)},i:B,o:B,d(r){r&&G(e),L(_,r)}}}function X(s){for(let e=s.length-1;e>0;e--){const l=Math.floor(Math.random()*(e+1));[s[e],s[l]]=[s[l],s[e]]}}function Y(s,e,l){let n=0,u=0,c=!0,m=[];const P=["DD_designs_21.jpg","DD_designs_21.jpg","God Arvid.JPG","God Arvid.JPG","God Axel.JPG","God Axel.JPG","God Einar.JPG","God Einar.JPG","God Ismael.JPG","God Ismael.JPG","God Kasper.JPG","God Kasper.JPG"];X(P);for(let t=0;t<12;t++)m.push({id:Math.floor(t/2),img:P[t],flipped:!1,completed:!1});let f=0,v=null;function x(){return m.every(t=>t.completed)}function E(){let t="",g="";n>u?(g="red",t="Red Player Wins!"):u>n?(g="blue",t="Blue Player Wins!"):(g="green",t="It's a Tie!"),document.body.style.backgroundColor=g,setTimeout(()=>{alert(t)},500)}function i(t){!t.flipped&&f<2?(t.flipped=!0,f++,f===1?v=t:f===2&&(t.img===v.img&&(t.completed=!0,v.completed=!0,c?l(1,u++,u):l(0,n++,n)),setTimeout(()=>{m.forEach(g=>{g.completed||(g.flipped=!1)}),f=0,v=null,l(3,m),x()&&E(),l(2,c=!c)},1e3))):!t.completed&&f>=2&&alert("chill"),l(3,m)}return[n,u,c,m,i,t=>{i(t)},t=>{i(t)}]}class $ extends Q{constructor(e){super(),z(this,e,Y,U,H,{})}}export{$ as default};
