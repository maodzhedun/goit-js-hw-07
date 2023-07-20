import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
// console.dir(galleryContainer);

const galleryMarkup = createGalleryHTMLMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener()

function createGalleryHTMLMarkup(galleryItems) { 
  return galleryItems.map(
    ({ preview, fullimage,description }) => `
  <li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${fullimage}"
      alt="${description}"
    />
  </a>
</li>`)
    .join("");
}

