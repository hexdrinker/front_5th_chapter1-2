import{c as u,f as d,r as i,a as t,g as r,H as b,U as w,b as s,P as f,F as h,L as p}from"./render-BGDUZdFj.js";const P=e=>{const{subscribe:g,notify:o}=u(),n=()=>d(window.location.pathname),l=()=>e[n()],c=a=>{console.log(a),window.history.pushState(null,null,a),o()};return window.addEventListener("popstate",()=>o()),{get path(){return n()},push:c,subscribe:g,getTarget:l}};i.set(P({"/":b,"/login":()=>{const{loggedIn:e}=r.getState();if(e)throw new h;return s(p,null)},"/profile":()=>{const{loggedIn:e}=r.getState();if(!e)throw new w;return s(f,null)}}));function m(){i.get().subscribe(t),r.subscribe(t),t()}m();
