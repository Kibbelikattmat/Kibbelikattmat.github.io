import{S as z,i as H,s as O,k as G,a as D,q as T,l as k,m as y,h as b,c as J,r as j,n as f,b as R,D as _,u as K,B as W,L as Q,J as C,V as B,K as S,M as U}from"../../../chunks/index-be19f804.js";function F(s,e,l){const o=s.slice();return o[13]=e[l],o[15]=l,o}function L(s){let e,l,o,a,n,m,v,u,g;function P(){return s[5](s[13])}function E(){return s[6](s[13])}return{c(){e=G("div"),l=G("img"),a=D(),n=G("img"),v=D(),this.h()},l(p){e=k(p,"DIV",{class:!0});var d=y(e);l=k(d,"IMG",{class:!0,src:!0,alt:!0}),a=J(d),n=k(d,"IMG",{class:!0,src:!0,alt:!0}),v=J(d),d.forEach(b),this.h()},h(){f(l,"class","front svelte-1oc0d2t"),C(l.src,o=s[13].img)||f(l,"src",o),f(l,"alt",""),f(n,"class","back svelte-1oc0d2t"),C(n.src,m="front.webp")||f(n,"src",m),f(n,"alt",""),f(e,"class","card svelte-1oc0d2t"),B(e,"flipped",s[13].flipped)},m(p,d){R(p,e,d),_(e,l),_(e,a),_(e,n),_(e,v),u||(g=[S(e,"click",P),S(e,"keypress",E)],u=!0)},p(p,d){s=p,d&8&&!C(l.src,o=s[13].img)&&f(l,"src",o),d&8&&B(e,"flipped",s[13].flipped)},d(p){p&&b(e),u=!1,U(g)}}}function X(s){let e,l,o,a,n,m,v,u,g,P,E,p,d,V,I,t=s[3],r=[];for(let i=0;i<t.length;i+=1)r[i]=L(F(s,t,i));return{c(){e=G("main"),l=G("div");for(let i=0;i<r.length;i+=1)r[i].c();o=D(),a=G("div"),n=G("p"),m=T(s[0]),v=D(),u=G("div"),g=G("p"),P=T(s[1]),E=D(),p=G("div"),V=D(),I=G("div"),this.h()},l(i){e=k(i,"MAIN",{class:!0});var h=y(e);l=k(h,"DIV",{class:!0});var c=y(l);for(let A=0;A<r.length;A+=1)r[A].l(c);c.forEach(b),o=J(h),a=k(h,"DIV",{class:!0,id:!0});var M=y(a);n=k(M,"P",{});var x=y(n);m=j(x,s[0]),x.forEach(b),M.forEach(b),v=J(h),u=k(h,"DIV",{class:!0,id:!0});var q=y(u);g=k(q,"P",{});var w=y(g);P=j(w,s[1]),w.forEach(b),q.forEach(b),E=J(h),p=k(h,"DIV",{class:!0,id:!0,style:!0}),y(p).forEach(b),V=J(h),I=k(h,"DIV",{style:!0}),y(I).forEach(b),h.forEach(b),this.h()},h(){f(l,"class","row svelte-1oc0d2t"),f(a,"class","box svelte-1oc0d2t"),f(a,"id","red-box"),f(u,"class","box svelte-1oc0d2t"),f(u,"id","blue-box"),f(p,"class","box svelte-1oc0d2t"),f(p,"id","green-box"),f(p,"style",d=s[2]?"right: 10px;":"left:10px"),f(I,"style","width:600px; height:800px; background- color:bisque;"),f(e,"class","svelte-1oc0d2t")},m(i,h){R(i,e,h),_(e,l);for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(l,null);_(e,o),_(e,a),_(a,n),_(n,m),_(e,v),_(e,u),_(u,g),_(g,P),_(e,E),_(e,p),_(e,V),_(e,I)},p(i,[h]){if(h&24){t=i[3];let c;for(c=0;c<t.length;c+=1){const M=F(i,t,c);r[c]?r[c].p(M,h):(r[c]=L(M),r[c].c(),r[c].m(l,null))}for(;c<r.length;c+=1)r[c].d(1);r.length=t.length}h&1&&K(m,i[0]),h&2&&K(P,i[1]),h&4&&d!==(d=i[2]?"right: 10px;":"left:10px")&&f(p,"style",d)},i:W,o:W,d(i){i&&b(e),Q(r,i)}}}function N(s){for(let e=s.length-1;e>0;e--){const l=Math.floor(Math.random()*(e+1));[s[e],s[l]]=[s[l],s[e]]}}function Y(s,e,l){let o=0,a=0,n=!0,m=[];const v=["DD_designs_21.jpg","DD_designs_21.jpg","God Arvid.JPG","God Arvid.JPG","God Axel.JPG","God Axel.JPG","God Einar.JPG","God Einar.JPG","God Ismael.JPG","God Ismael.JPG","God Kasper.JPG","God Kasper.JPG"];N(v);for(let t=0;t<12;t++)m.push({id:Math.floor(t/2),img:v[t],flipped:!1,completed:!1});let u=0,g=null;function P(){l(0,o=0),l(1,a=0),l(2,n=!0),N(v),l(3,m=[]);for(let t=0;t<12;t++)m.push({id:Math.floor(t/2),img:v[t],flipped:!1,completed:!1});document.body.style.backgroundColor=""}function E(){return m.every(t=>t.completed)}function p(){let t="",r="";o>a?(r="red",t="Red Player Wins!"):a>o?(r="blue",t="Blue Player Wins!"):(r="purple",t="It's a Tie!"),document.body.style.backgroundColor=r,setTimeout(()=>{alert(t)},500)}function d(t){!t.flipped&&u<2?(t.flipped=!0,u++,u===1?g=t:u===2&&(t.img===g.img&&(t.completed=!0,g.completed=!0,n?l(1,a++,a):l(0,o++,o)),setTimeout(()=>{m.forEach(r=>{r.completed||(r.flipped=!1)}),u=0,g=null,l(3,m),E()&&(p(),setTimeout(()=>{P()},2e3),t.img===g.img&&(n?l(1,a++,a):l(0,o++,o))),l(2,n=!n)},1e3))):!t.completed&&u>=2&&alert("chill"),l(3,m)}return[o,a,n,m,d,t=>{d(t)},t=>{d(t)}]}class $ extends z{constructor(e){super(),H(this,e,Y,X,O,{})}}export{$ as default};
