import{a as E,S as P,i as s}from"./assets/vendor-Do60_h77.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const q="8392183-8e71f5162b0cd4e1a7a250d40",B="https://pixabay.com/api/";async function f(t,o){const a={key:q,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15};return(await E.get(B,{params:a})).data}const g=document.querySelector(".gallery"),y=document.querySelector(".loader"),p=document.querySelector(".load-more"),R=new P(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function m(t){const o=t.map(({webformatURL:a,largeImageURL:n,tags:e,likes:r,views:l,comments:S,downloads:v})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${n}">
        <img class="gallery-image" src="${a}" alt="${e}" loading="lazy" />
      </a>
      <ul class="gallery-info">
        <li class="gallery-info-item">
          <span class="gallery-info-label">Likes</span>
          <span class="gallery-info-value">${r}</span>
        </li>
        <li class="gallery-info-item">
          <span class="gallery-info-label">Views</span>
          <span class="gallery-info-value">${l}</span>
        </li>
        <li class="gallery-info-item">
          <span class="gallery-info-label">Comments</span>
          <span class="gallery-info-value">${S}</span>
        </li>
        <li class="gallery-info-item">
          <span class="gallery-info-label">Downloads</span>
          <span class="gallery-info-value">${v}</span>
        </li>
      </ul>
    </li>`).join("");g.insertAdjacentHTML("beforeend",o),R.refresh()}function M(){g.innerHTML=""}function h(){y.classList.remove("is-hidden")}function L(){y.classList.add("is-hidden")}function b(){p.classList.remove("is-hidden")}function u(){p.classList.add("is-hidden")}const $=document.querySelector(".form"),C=document.querySelector(".load-more"),w=15;let d="",i=1,c=0;$.addEventListener("submit",O);C.addEventListener("click",x);async function O(t){t.preventDefault();const o=t.currentTarget.elements["search-text"].value.trim();if(o===""){s.warning({title:"Caution",message:"Please enter a search query.",position:"topRight"});return}d=o,i=1,c=0,M(),u(),h();try{const a=await f(d,i);if(!a.hits||a.hits.length===0){s.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}c=a.totalHits,m(a.hits),i*w>=c?(u(),s.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):b()}catch{s.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{L(),t.target.reset()}}async function x(){i+=1,u(),h();try{const t=await f(d,i);m(t.hits),A(),i*w>=c?(u(),s.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):b()}catch{s.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{L()}}function A(){const t=document.querySelector(".gallery .gallery-item");if(!t)return;const{height:o}=t.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
