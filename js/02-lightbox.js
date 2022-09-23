import { galleryItems } from './gallery-items.js';
// Change code below this line
function galleryItemsMarkup(){
  return galleryItems.map(image => {
      return `
        <a class="gallery__item" href="${image.original}">
            <img loading="lazy" class="gallery__image" src="${image.preview}" alt="${image.description}" />
        </a>`;
    }).join('');
}

const galleryBoxEl = document.querySelector(".gallery");
galleryBoxEl.innerHTML = galleryItemsMarkup();
const imgEl = document.querySelector('.gallery__image');




let lightbox = new SimpleLightbox('.gallery a', {
    overlayOpacity: 0.5,
    // captions: true,
    // captionSelector: 'img',
    // captionType: 'attr',
    captionsData: 'alt',
    captionPosition: 'top',
    captionDelay: 250,
    captionClass: 'overlay-caption'
    });
