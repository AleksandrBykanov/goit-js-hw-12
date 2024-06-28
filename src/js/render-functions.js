import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { refs } from '../main';

export function cards(arr) {
  const markup = arr.map(card).join('\n');
  return markup;
}

export function card(images) {
  return `<li class="gallery-item"
      <a class="gallery-link" href="${images.largeImageURL}">
    <img
      width=360;
      height=200;
      class="gallery-image"
      src="${images.webformatURL}"
      alt="${images.tags} " />
          <div class="image-info">
               <p>LIKES: ${images.likes}</p>
                    <p>VIEWS: ${images.views}</p>
                    <p>COMMENTS: ${images.comments}</p>
                    <p>DOWNLOADS: ${images.downloads}</p>
                </div>
            </a>
            </li>
        `;
}

export const lightbox = new SimpleLightbox('.gallery li', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function showLoader() {
  refs.loader.classList.remove('hidden');
}

export function hideLoader() {
  refs.loader.classList.add('hidden');
}

export function showBtn() {
  refs.loadBtn.classList.remove('hide');
}

export function hideBtn() {
  refs.loadBtn.classList.add('hide');
}