if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const d=s=>i(s,r),t={module:{uri:r},exports:u,require:d};e[r]=Promise.all(n.map((s=>t[s]||d(s)))).then((s=>(l(...s),u)))}}define(["./workbox-bc55f1ff"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/index.00e95b54.js",revision:null},{url:"assets/index.05e4e1d8.js",revision:null},{url:"assets/index.11178584.js",revision:null},{url:"assets/index.142c9fd3.css",revision:null},{url:"assets/index.211ad3d6.js",revision:null},{url:"assets/index.226fadd3.css",revision:null},{url:"assets/index.2babe405.css",revision:null},{url:"assets/index.2d1bc97f.js",revision:null},{url:"assets/index.35302c9f.js",revision:null},{url:"assets/index.3c0b391a.css",revision:null},{url:"assets/index.4c215981.js",revision:null},{url:"assets/index.4f39cfbc.css",revision:null},{url:"assets/index.58778688.js",revision:null},{url:"assets/index.5c632b3d.css",revision:null},{url:"assets/index.65b8cb3f.css",revision:null},{url:"assets/index.72d74b33.js",revision:null},{url:"assets/index.78cf0466.js",revision:null},{url:"assets/index.94b05b40.css",revision:null},{url:"assets/index.94d7b5a8.css",revision:null},{url:"assets/index.a23384d1.js",revision:null},{url:"assets/index.a3f0ebec.css",revision:null},{url:"assets/index.a89253a1.js",revision:null},{url:"assets/index.afd297eb.js",revision:null},{url:"assets/index.b47be6d5.js",revision:null},{url:"assets/index.d3eb6358.css",revision:null},{url:"assets/index.da78854b.js",revision:null},{url:"assets/index.dee05b0f.js",revision:null},{url:"assets/index.e37800d0.css",revision:null},{url:"assets/index.f02ab4e1.css",revision:null},{url:"assets/index.f357b6f4.js",revision:null},{url:"assets/index.f63884ff.js",revision:null},{url:"assets/index.f7604e69.css",revision:null},{url:"assets/index.f7703c3f.js",revision:null},{url:"assets/index.fc23765b.css",revision:null},{url:"index.html",revision:"7bdb886937846202a4d3990f460f77df"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"f24ac1d0abc63bc4d3ab15be747537bd"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
