"use strict";(()=>{var s=(t,e)=>{if("IntersectionObserver"in window){let n=new IntersectionObserver(o=>{o.forEach(r=>{r.isIntersecting&&(typeof e=="function"&&e(r.target),n.unobserve(r.target))})}),i=document.querySelectorAll(t);i.length>0&&[...i].forEach(o=>{n.observe(o)})}},l=t=>{let e=t.getElementsByTagName("template")[0].content.cloneNode(!0);t.appendChild(e),Webflow.require("lottie").lottie.loadAnimation(e),Webflow.require("lottie").init()};window.Webflow||(window.Webflow=[]);window.Webflow.push(()=>{s('[s-lazy-load="lottie"]',l)});})();
