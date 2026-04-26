import{a as g,S as p,i}from"./assets/vendor-D1AWmRWP.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const y="8392183-8e71f5162b0cd4e1a7a250d40",m="https://pixabay.com/api/";function d(s){const a={key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return g.get(m,{params:a}).then(r=>r.data)}const n=document.querySelector(".gallery"),c=document.querySelector(".loader"),h=new p(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function b(s){const a=s.map(({webformatURL:r,largeImageURL:o,tags:e,likes:t,views:l,comments:u,downloads:f})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${o}">
        <img class="gallery-image" src="${r}" alt="${e}" loading="lazy" />
      </a>
      <ul class="gallery-info">
        <li class="gallery-info-item">
          <span class="gallery-info-label">Likes</span>
          <span class="gallery-info-value">${t}</span>
        </li>
        <li class="gallery-info-item">
          <span class="gallery-info-label">Views</span>
          <span class="gallery-info-value">${l}</span>
        </li>
        <li class="gallery-info-item">
          <span class="gallery-info-label">Comments</span>
          <span class="gallery-info-value">${u}</span>
        </li>
        <li class="gallery-info-item">
          <span class="gallery-info-label">Downloads</span>
          <span class="gallery-info-value">${f}</span>
        </li>
      </ul>
    </li>`).join("");n.insertAdjacentHTML("beforeend",a),h.refresh()}function L(){n.innerHTML=""}function S(){c.classList.remove("is-hidden")}function P(){c.classList.add("is-hidden")}const q=document.querySelector(".form");q.addEventListener("submit",v);function v(s){s.preventDefault();const a=s.currentTarget.elements["search-text"].value.trim();if(a===""){i.warning({title:"Caution",message:"Please enter a search query.",position:"topRight"});return}L(),S(),d(a).then(r=>{if(!r.hits||r.hits.length===0){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(r.hits)}).catch(r=>{i.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(r)}).finally(()=>{P(),s.target.reset()})}
//# sourceMappingURL=index.js.map
