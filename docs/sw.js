if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const c=e=>n(e,o),l={module:{uri:o},exports:t,require:c};i[o]=Promise.all(r.map((e=>l[e]||c(e)))).then((e=>(s(...e),t)))}}define(["./workbox-27b29e6f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"473daeb7d127c9707d6944c3b1d75d83"},{url:"assets/index-a0097158.js",revision:null},{url:"index.html",revision:"e50b8223627b3e7213be76b994c081c9"},{url:"registerSW.js",revision:"4ff2997b8ee0914ef878cd0e46814e3e"},{url:"favicon.ico",revision:"b75d41004f5770ad906b8c4c46c9ff74"},{url:"logo192.png",revision:"e2b11f9b0e2932ec848e6fb2480381dd"},{url:"logo512.png",revision:"1fd283386b354bf3ecc3d5b1e844abd2"},{url:"manifest.webmanifest",revision:"eb457ce4971c74e6a1e14172c824de0f"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
