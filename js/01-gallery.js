import { galleryItems } from './gallery-items.js';

function galleryItemsMarkup(){
  return galleryItems.map(image => {
      return `
      <div class="gallery__item">
      <a class="gallery__link" href="${image.original}">
        <img
          class="gallery__image"
          src="${image.preview}"
          data-source="${image.original}"
          alt="${image.description}"
        />
      </a>
    </div>`;
  }).join('');
}

const galleryBoxEl = document.querySelector(".gallery");
galleryBoxEl.innerHTML = galleryItemsMarkup();
galleryBoxEl.addEventListener('click', handleGalleryClick);

function handleGalleryClick(event){
  event.preventDefault();
  
  if(event.target.nodeName !== "IMG"){
    return;
  }

  const instance = basicLightbox.create(`<img
  class= "gallery__image"
  src= "${event.target.getAttribute('data-source')}"
  />`);
  instance.show();

  if (instance.visible()){
    subscribeToEscapePress(instance);
  }

  if(!instance.visible()){
    document.removeEventListener("keydown", (event) => {
      if (event.code === "Escape"){
        lightboxInstance.close(); 
      }
    });
  }
}

function subscribeToEscapePress(lightboxInstance) {
  document.addEventListener("keydown", (event) => {
    if (event.code === "Escape"){
      lightboxInstance.close(); 
    }
  });

}
