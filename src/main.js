import { getImage } from './js/pixabay-api.js';
import {
  showLoader,
  hideLoader,
  showBtn,
  hideBtn,
  lightbox,
  cards,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export const refs = {
  form: document.querySelector('.form'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
  loadBtn: document.querySelector('.load-btn'),
};

let value = '';
let currentPage = 1;
let maxPage = 1;
const perPage = 15;

refs.form.addEventListener('submit', async e => {
  e.preventDefault();
  value = e.target.elements.search.value.trim();
  currentPage = 1;
  if (value === '') {
    return iziToast.warning({
      title: 'warning',
      message: 'Enter a word for the query, please.',
      position: 'topRight',
      displayMode: 'once',
    });
  }

  showLoader();
  try {
    const data = await getImage(value, currentPage);
    maxPage = Math.ceil(data.totalHits / perPage);
    if (data.hits.length === 0) {
      iziToast.show({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        displayMode: 'once',
      });
    }
    const elements = cards(data.hits);
    refs.gallery.innerHTML = elements;
    lightbox.refresh();
  } catch {}
  hideLoader();
  updateBtn();
  refs.form.reset();
});

refs.loadBtn.addEventListener('click', async () => {
  showLoader();
  hideBtn();
  try {
    currentPage++;
    const data = await getImage(value, currentPage);
    const elements = cards(data.hits);
    refs.gallery.insertAdjacentHTML('beforeend', elements);
    lightbox.refresh();
    skipImage();
  } catch {
    iziToast.error({
      title: 'Error',
      message: 'Illegal operation',
      displayMode: 'once',
    });
  }
  hideLoader();
  updateBtn();
});

function updateBtn() {
  if (currentPage >= maxPage) {
    iziToast.show({
      message: "We're sorry, but you've reached the end of search results.",
      position: 'bottomCenter',
      displayMode: 'once',
    });
    hideBtn();
  } else {
    showBtn();
  }
}

function skipImage() {
  const elem = refs.gallery.firstElementChild;
  const height = elem.getBoundingClientRect().height;
  scrollBy({
    top: height * 2,
    behavior: 'smooth',
  });
}
