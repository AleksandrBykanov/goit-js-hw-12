import{a as w,S as v,i as d}from"./assets/vendor-b11e2a50.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();async function u(e,r){const s="https://pixabay.com",i="/api/",t=new URLSearchParams({key:"44411867-7607aa296582669a38968dfd5",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}),o=`${s}${i}?${t}`;return(await w.get(o)).data}function f(e){return e.map(S).join(`
`)}function S(e){return`<li class="gallery-item"
      <a class="gallery-link" href="${e.largeImageURL}">
    <img
      width=360;
      height=200;
      class="gallery-image"
      src="${e.webformatURL}"
      alt="${e.tags} " />
          <div class="image-info">
               <p>LIKES: ${e.likes}</p>
                    <p>VIEWS: ${e.views}</p>
                    <p>COMMENTS: ${e.comments}</p>
                    <p>DOWNLOADS: ${e.downloads}</p>
                </div>
            </a>
            </li>
        `}const p=new v(".gallery li",{captionsData:"alt",captionDelay:250});function h(){a.loader.classList.remove("hidden")}function m(){a.loader.classList.add("hidden")}function b(){a.loadBtn.classList.remove("hide")}function g(){a.loadBtn.classList.add("hide")}const a={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadBtn:document.querySelector(".load-btn")};let c="",n=1,y=1;const E=15;a.form.addEventListener("submit",async e=>{if(e.preventDefault(),c=e.target.elements.search.value.trim(),n=1,c==="")return d.warning({title:"warning",message:"Enter a word for the query, please.",position:"topRight",displayMode:"once"});h();try{const r=await u(c,n);y=Math.ceil(r.totalHits/E),r.hits.length===0&&d.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",displayMode:"once"});const s=f(r.hits);a.gallery.innerHTML=s,p.refresh()}catch{}m(),L(),a.form.reset()});a.loadBtn.addEventListener("click",async()=>{h(),g();try{n++;const e=await u(c,n),r=f(e.hits);a.gallery.insertAdjacentHTML("beforeend",r),p.refresh(),B()}catch{d.error({title:"Error",message:"Illegal operation",displayMode:"once"})}m(),L()});function L(){n>=y?(d.show({message:"We're sorry, but you've reached the end of search results.",position:"bottomCenter",displayMode:"once"}),g()):b()}function B(){const r=a.gallery.firstElementChild.getBoundingClientRect().height;scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
