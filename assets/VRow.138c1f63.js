import{p as f,c as d,V as b,W as h,X as S,Y as A,Z as E,b as u,R,n as G,l as z,q as B,_ as U,t as _,m as O,$ as M,J as F,a0 as J,a1 as Y}from"./index.de81e860.js";import{u as q}from"./_plugin-vue_export-helper.f584d174.js";const x=f({tag:{type:String,default:"div"}},"tag");function V(e){return b(()=>{const a=[],t={};return e.value.background&&(S(e.value.background)?t.backgroundColor=e.value.background:a.push(`bg-${e.value.background}`)),e.value.text&&(S(e.value.text)?(t.color=e.value.text,t.caretColor=e.value.text):a.push(`text-${e.value.text}`)),{colorClasses:a,colorStyles:t}})}function D(e,a){const t=d(()=>({text:h(e)?e.value:a?e[a]:null})),{colorClasses:n,colorStyles:s}=V(t);return{textColorClasses:n,textColorStyles:s}}function se(e,a){const t=d(()=>({background:h(e)?e.value:a?e[a]:null})),{colorClasses:n,colorStyles:s}=V(t);return{backgroundColorClasses:n,backgroundColorStyles:s}}const K=["x-small","small","default","large","x-large"],W=f({size:{type:[String,Number],default:"default"}},"size");function X(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:A();return b(()=>{let t,n;return E(K,e.size)?t=`${a}--size-${e.size}`:e.size&&(n={width:u(e.size),height:u(e.size)}),{sizeClasses:t,sizeStyles:n}})}const Z=f({color:String,start:Boolean,end:Boolean,icon:R,...W(),...x({tag:"i"}),...G()},"v-icon"),le=z()({name:"VIcon",props:Z(),setup(e,a){let{attrs:t,slots:n}=a,s;n.default&&(s=d(()=>{var y,m;const i=(y=n.default)==null?void 0:y.call(n);if(!!i)return(m=i.filter(g=>g.type===M&&g.children&&typeof g.children=="string")[0])==null?void 0:m.children}));const{themeClasses:l}=B(e),{iconData:o}=U(s||e),{sizeClasses:c}=X(e),{textColorClasses:r,textColorStyles:L}=D(_(e,"color"));return q(()=>O(o.value.component,{tag:e.tag,icon:o.value.icon,class:["v-icon","notranslate",l.value,c.value,r.value,{"v-icon--clickable":!!t.onClick,"v-icon--start":e.start,"v-icon--end":e.end}],style:[c.value?void 0:{fontSize:u(e.size),height:u(e.size),width:u(e.size)},L.value],role:t.onClick?"button":void 0,"aria-hidden":!t.onClick},{default:()=>{var i;return[(i=n.default)==null?void 0:i.call(n)]}})),{}}});const C=["start","end","center"],j=["space-between","space-around","space-evenly"];function v(e,a){return J.reduce((t,n)=>{const s=e+Y(n);return t[s]=a(),t},{})}const H=[...C,"baseline","stretch"],I=e=>H.includes(e),N=v("align",()=>({type:String,default:null,validator:I})),Q=[...C,...j],$=e=>Q.includes(e),w=v("justify",()=>({type:String,default:null,validator:$})),p=[...C,...j,"stretch"],T=e=>p.includes(e),P=v("alignContent",()=>({type:String,default:null,validator:T})),k={align:Object.keys(N),justify:Object.keys(w),alignContent:Object.keys(P)},ee={align:"align",justify:"justify",alignContent:"align-content"};function te(e,a,t){let n=ee[e];if(t!=null){if(a){const s=a.replace(e,"");n+=`-${s}`}return n+=`-${t}`,n.toLowerCase()}}const oe=z()({name:"VRow",props:{dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:I},...N,justify:{type:String,default:null,validator:$},...w,alignContent:{type:String,default:null,validator:T},...P,...x()},setup(e,a){let{slots:t}=a;const n=d(()=>{const s=[];let l;for(l in k)k[l].forEach(o=>{const c=e[o],r=te(l,o,c);r&&s.push(r)});return s.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),s});return()=>{var s;return F(e.tag,{class:["v-row",n.value]},(s=t.default)==null?void 0:s.call(t))}}});export{oe as V,W as a,X as b,D as c,le as d,V as e,x as m,se as u};