var $=Object.defineProperty;var q=(e,t,n)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var w=(e,t,n)=>q(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();const F=()=>{const e=new Set;return{subscribe:o=>e.add(o),notify:()=>e.forEach(o=>o())}},V=(e,t)=>{const{subscribe:n,notify:o}=F();let s={...e};const l=u=>{s={...s,...u},o()},a=()=>({...s}),i=Object.fromEntries(Object.entries(t).map(([u,H])=>[u,(...T)=>l(H(a(),...T))]));return{getState:a,setState:l,subscribe:n,actions:i}},_=(e,t=window.localStorage)=>({get:()=>JSON.parse(t.getItem(e)),set:l=>t.setItem(e,JSON.stringify(l)),reset:()=>t.removeItem(e)}),B="/front_5th_chapter1-2/",G=e=>e.replace(B,"/");function r(e,t,...n){return{type:e,props:t,children:n.flat(1/0).filter(o=>o!=null&&o!==!1)}}const f=new Map;let h=null;function J(e){e!==h&&(h=e,f.forEach((t,n)=>{I(e,n)}))}function U(e,t,n){f.has(t)||f.set(t,[]),h&&I(h,t),f.get(t).push({element:e,handler:n})}function v(e,t,n){if(!f.has(t))return;const o=f.get(t);if(n){const l=o.findIndex(a=>a.element===e&&a.handler===n);l!==-1&&o.splice(l,1);return}const s=o.filter(l=>l.element!==e);f.set(t,s)}function I(e,t){if(e._delegatedHandlers||(e._delegatedHandlers={}),!e._delegatedHandlers[t]){const n=o=>{let s=o.target;const l=f.get(t)||[];for(;s&&s!==e;)l.forEach(({element:a,handler:i})=>{a===s&&i.call(a,o)}),s=s.parentElement};e._delegatedHandlers[t]=n,e.addEventListener(t,n)}}function g(e){!e||e.nodeType!==1||(f.forEach((t,n)=>{v(e,n)}),e.childNodes&&Array.from(e.childNodes).forEach(t=>{t.nodeType===1&&g(t)}))}function d(e){if(e==null||typeof e=="boolean")return document.createTextNode("");if(typeof e=="string"||typeof e=="number")return document.createTextNode(e);if(Array.isArray(e)){const n=document.createDocumentFragment();return e.children?e.children.forEach(o=>{const s=d(o);n.appendChild(s)}):e.forEach(o=>{const s=d(o);n.appendChild(s)}),n}const t=document.createElement(e.type);return e.props&&K(t,e.props),e.children.forEach(n=>{if(!n)return;const o=d(n);o&&t.appendChild(o)}),t}function K(e,t){const n=Object.keys(t);for(const o of n)if(typeof t[o]=="function"){const s=o.toLowerCase().substring(2);U(e,s,t[o])}else o==="className"?e.setAttribute("class",t[o]):e.setAttribute(o,t[o])}function k(e){if(e==null||typeof e=="boolean")return"";if(typeof e=="string"||typeof e=="number")return`${e}`;if(typeof e.type=="function"){const n=e.type({...e.props,children:e.children});return k(n)}const t=e.children.filter(n=>n!=null&&typeof n!="boolean").map(n=>k(n));return{...e,children:t}}function D(e,t,n,o=0){const s=e.childNodes[o];if(!t&&s)return g(s),e.removeChild(s),null;if(!s){const l=d(t);return e.childNodes.length<=o?e.appendChild(l):e.insertBefore(l,e.childNodes[o]),l}if(typeof t=="string"||typeof t=="number"){if(s.nodeType===3)return s.textContent!==`${t}`&&(s.textContent=t),s;{const l=document.createTextNode(`${t}`);return g(s),e.replaceChild(l,s),l}}if(s.nodeType===3){const l=d(t);return e.replaceChild(l,s),l}if(n&&n.type!==t.type){const l=d(t);return g(s),e.replaceChild(l,s),l}return W(s,t.props||{},(n==null?void 0:n.props)||{}),z(s,t.children||[],(n==null?void 0:n.children)||[]),s}function W(e,t,n){const o=new Set([...Object.keys(t),...Object.keys(n)]);o.delete("children");for(const s of o){const l=t[s],a=n[s];if(l!==a){if(!(s in t)){if(s.startsWith("on")){const i=s.toLowerCase().substring(2);v(e,i,l)}else s==="className"?e.removeAttribute("class"):s==="style"?e.style="":e.removeAttribute(s);continue}if(s.startsWith("on")){const i=s.toLowerCase().substring(2);a&&v(e,i,a),l&&U(e,i,l)}else s==="style"?typeof l=="object"?Object.assign(e.style,l):e.style.cssText=l:s==="className"?e.setAttribute("class",l):s==="value"?e.value=l:typeof l=="boolean"?l?e.setAttribute(s,""):e.removeAttribute(s):e.setAttribute(s,l)}}}function z(e,t,n){const o=t.length,s=n.length,l=Math.max(o,s);for(let a=0;a<l;a++){const i=a<o?t[a]:null,u=a<s?n[a]:null;D(e,i,u,a)}}const S=new Map;function R(e,t){const n=k(e);if(t.innerHTML===""){const s=d(n);t.appendChild(s),J(t),S.set(t,n);return}console.log("updating...");const o=S.get(t);S.set(t,n),D(t,n,o)}const Y=1e3,P=Y*60,A=P*60,Q=A*24,X=e=>{const t=Date.now()-e;return t<P?"방금 전":t<A?`${Math.floor(t/P)}분 전`:t<Q?`${Math.floor(t/A)}시간 전`:new Date(e).toLocaleString()},p=_("user"),Z=1e3,m=Z*60,ee=m*60,c=V({currentUser:p.get(),loggedIn:!!p.get(),posts:[{id:1,author:"홍길동",time:Date.now()-5*m,content:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!",likeUsers:[]},{id:2,author:"김철수",time:Date.now()-15*m,content:"새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!",likeUsers:[]},{id:3,author:"이영희",time:Date.now()-30*m,content:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?",likeUsers:[]},{id:4,author:"박민수",time:Date.now()-30*m,content:"주말에 등산 가실 분 계신가요? 함께 가요!",likeUsers:[]},{id:5,author:"정수연",time:Date.now()-2*ee,content:"새로 나온 영화 재미있대요. 같이 보러 갈 사람?",likeUsers:[]}],error:null},{logout(e){return p.reset(),{...e,currentUser:null,loggedIn:!1}},addPost(e,{content:t}){const n={id:e.posts.length+1,author:e.currentUser.username,time:Date.now()-0*m,content:t,likeUsers:[]};return{...e,posts:[...e.posts,n]}},likePost(e,t){console.log(t);const{username:n}=e.currentUser,o=e.posts.findIndex(a=>a.id===t),s=e.posts[o].likeUsers;if(e.posts[o].likeUsers.includes(n)){const a=s.findIndex(i=>i===n);s.splice(a,1)}else s.push(n);const l=[...e.posts];return l[o]={...l[o],likeUsers:s},{...e,posts:l}}}),te=({id:e,author:t,time:n,content:o,likeUsers:s,activationLike:l=!1})=>{const{loggedIn:a}=c.getState(),{likePost:i}=c.actions,u=()=>{if(!a){alert("로그인 후 이용해주세요");return}i(e)};return r("div",{className:"bg-white rounded-lg shadow p-4 mb-4"},r("div",{className:"flex items-center mb-2"},r("div",null,r("div",{className:"font-bold"},t),r("div",{className:"text-gray-500 text-sm"},X(n)))),r("p",null,o),r("div",{className:"mt-2 flex justify-between text-gray-500"},r("span",{onClick:u,className:`like-button cursor-pointer${l?" text-blue-500":""}`},"좋아요 ",s.length),r("span",null,"댓글"),r("span",null,"공유")))},se=()=>{const{addPost:e}=c.actions;return r("div",{className:"mb-4 bg-white rounded-lg shadow p-4"},r("textarea",{id:"post-content",placeholder:"무슨 생각을 하고 계신가요?",className:"w-full p-2 border rounded"}),r("button",{id:"post-submit",className:"mt-2 bg-blue-600 text-white px-4 py-2 rounded",onClick:n=>{n.preventDefault();const o=document.querySelector("#post-content").value;e({content:o}),document.querySelector("#post-content").value=""}},"게시"))},O=()=>r("header",{className:"bg-blue-600 text-white p-4 sticky top-0"},r("h1",{className:"text-2xl font-bold"},"항해플러스")),j=()=>r("footer",{className:"bg-gray-200 p-4 text-center"},r("p",null,"© $",new Date().getFullYear()," 항해플러스. All rights reserved.")),b={value:null,get(){return this.value},set(e){this.value=e}},N=e=>{const t=window.location.hash?window.location.hash.slice(1)||"/":window.location.pathname;return G(t)===e?"text-blue-600 font-bold":"text-gray-600"};function E({onClick:e,children:t,...n}){return r("a",{onClick:s=>{s.preventDefault(),e==null||e(),b.get().push(s.target.href.replace(window.location.origin,""))},...n},t)}const M=()=>{const{loggedIn:e}=c.getState(),{logout:t}=c.actions;return r("nav",{className:"bg-white shadow-md p-2 sticky top-14"},r("ul",{className:"flex justify-around"},r("li",null,r(E,{href:"/",className:N("/")},"홈")),!e&&r("li",null,r(E,{href:"/login",className:N("/login")},"로그인")),e&&r("li",null,r(E,{href:"/profile",className:N("/profile")},"프로필")),e&&r("li",null,r("a",{href:"#",id:"logout",className:"text-gray-600",onClick:n=>{n.preventDefault(),t()}},"로그아웃"))))},ae=()=>{const{posts:e,loggedIn:t,currentUser:n}=c.getState();return r("div",{className:"bg-gray-100 min-h-screen flex justify-center"},r("div",{className:"max-w-md w-full"},r(O,null),r(M,null),r("main",{className:"p-4"},t&&r(se,null),r("div",{id:"posts-container",className:"space-y-4"},[...e].sort((o,s)=>s.time-o.time).map(o=>{const s=t?o.likeUsers.includes(n.username):!1;return r(te,{...o,activationLike:s})}))),r(j,null)))};function ne(e){const t={username:e,email:"",bio:""};c.setState({currentUser:t,loggedIn:!0}),p.set(t)}const ie=()=>r("div",{className:"bg-gray-100 flex items-center justify-center min-h-screen"},r("div",{className:"bg-white p-8 rounded-lg shadow-md w-full max-w-md"},r("h1",{className:"text-2xl font-bold text-center text-blue-600 mb-8"},"항해플러스"),r("form",{id:"login-form",onSubmit:t=>{t.preventDefault();const n=document.getElementById("username").value;ne(n)}},r("input",{type:"text",id:"username",placeholder:"사용자 이름",className:"w-full p-2 mb-4 border rounded",required:!0}),r("input",{type:"password",placeholder:"비밀번호",className:"w-full p-2 mb-6 border rounded",required:!0}),r("button",{type:"submit",className:"w-full bg-blue-600 text-white p-2 rounded"},"로그인")),r("div",{className:"mt-4 text-center"},r("a",{href:"#",className:"text-blue-600 text-sm"},"비밀번호를 잊으셨나요?")),r("hr",{className:"my-6"}),r("div",{className:"text-center"},r("button",{className:"bg-green-500 text-white px-4 py-2 rounded"},"새 계정 만들기")))),re=()=>r("main",{className:"bg-gray-100 flex items-center justify-center min-h-screen"},r("div",{className:"bg-white p-8 rounded-lg shadow-md w-full text-center",style:"max-width: 480px"},r("h1",{className:"text-2xl font-bold text-blue-600 mb-4"},"항해플러스"),r("p",{className:"text-4xl font-bold text-gray-800 mb-4"},"404"),r("p",{className:"text-xl text-gray-600 mb-8"},"페이지를 찾을 수 없습니다"),r("p",{className:"text-gray-600 mb-8"},"요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다."),r("a",{href:"/","data-link":"",className:"bg-blue-600 text-white px-4 py-2 rounded font-bold"},"홈으로 돌아가기")));function oe(e){const t={...c.getState().currentUser,...e};c.setState({currentUser:t}),p.set(t),alert("프로필이 업데이트되었습니다.")}const ce=()=>{const{loggedIn:e,currentUser:t}=c.getState(),{username:n="",email:o="",bio:s=""}=t??{};return r("div",{className:"bg-gray-100 min-h-screen flex justify-center"},r("div",{className:"max-w-md w-full"},r(O,null),r(M,{loggedIn:e}),r("main",{className:"p-4"},r("div",{className:"bg-white p-8 rounded-lg shadow-md"},r("h2",{className:"text-2xl font-bold text-center text-blue-600 mb-8"},"내 프로필"),r("form",{id:"profile-form",onSubmit:a=>{a.preventDefault();const i=new FormData(a.target),u=Object.fromEntries(i);oe(u)}},r("div",{className:"mb-4"},r("label",{for:"username",className:"block text-gray-700 text-sm font-bold mb-2"},"사용자 이름"),r("input",{type:"text",id:"username",name:"username",className:"w-full p-2 border rounded",value:n,required:!0})),r("div",{className:"mb-4"},r("label",{for:"email",className:"block text-gray-700 text-sm font-bold mb-2"},"이메일"),r("input",{type:"email",id:"email",name:"email",className:"w-full p-2 border rounded",value:o,required:!0})),r("div",{className:"mb-6"},r("label",{for:"bio",className:"block text-gray-700 text-sm font-bold mb-2"},"자기소개"),r("textarea",{id:"bio",name:"bio",rows:"4",className:"w-full p-2 border rounded"},s)),r("button",{type:"submit",className:"w-full bg-blue-600 text-white p-2 rounded font-bold"},"프로필 업데이트")))),r(j,null)))},y=class y extends Error{constructor(){super(y.MESSAGE)}};w(y,"MESSAGE","ForbiddenError");let L=y;const x=class x extends Error{constructor(){super(x.MESSAGE)}};w(x,"MESSAGE","UnauthorizedError");let C=x;function ue(){const e=b.get().getTarget()??re,t=document.querySelector("#root");try{R(r(e,null),t)}catch(n){if(n instanceof L){b.get().push("/");return}if(n instanceof C){b.get().push("/login");return}console.error(n)}}export{L as F,ae as H,ie as L,ce as P,C as U,ue as a,r as b,F as c,G as f,c as g,b as r};
