import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = createGalleryHTMLMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener('click', onClick);

function createGalleryHTMLMarkup(galleryItems) { 
  return galleryItems.map(
    ({ preview, original, description }) => `
  <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`)
    .join("");
}

function onClick(event) {
  event.preventDefault();
  if (event.target.tagName !== "IMG") {
    return;
  }
  openModal(event.target.dataset.source);
}

function openModal(target) {
  const instance = basicLightbox.create(`
    <img src="${target}" width="800" height="600">
`)
  instance.show();

  document.addEventListener("keydown", event => {
    if (event.code === "Escape") { 
       instance.close();
    }
 })

}
