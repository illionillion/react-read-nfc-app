if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let f={};const t=e=>n(e,o),c={module:{uri:o},exports:f,require:t};i[o]=Promise.all(s.map((e=>c[e]||t(e)))).then((e=>(r(...e),f)))}}define(["./workbox-27b29e6f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-91180e72.js",revision:null},{url:"index.html",revision:"0503fc1f1361bf8f667e315ef2dbd6fc"},{url:"registerSW.js",revision:"4ff2997b8ee0914ef878cd0e46814e3e"},{url:"favicon.ico",revision:"b75d41004f5770ad906b8c4c46c9ff74"},{url:"logo192.png",revision:"e2b11f9b0e2932ec848e6fb2480381dd"},{url:"logo512.png",revision:"1fd283386b354bf3ecc3d5b1e844abd2"},{url:"manifest.webmanifest",revision:"eb457ce4971c74e6a1e14172c824de0f"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
