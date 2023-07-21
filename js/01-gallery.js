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
  // console.dir(event.target);
  if (event.target.tagName !== "IMG") {
    return;
  }
  // console.log(event.currentTarget);
  console.log(event.target.dataset.source);
}

function openModal() {
  
}


// function onKey(evt) {
//   console.log(evt);
//   // if(evt.code === 'Escape' || evt.code === 'Enter'){
//   //     container.classList.toggle('tog')
//   // }

//   if (evt.ctrlKey && (evt.code === "KeyC")) {
//     console.log('try copy');
//     evt.preventDefault()
//     // alert("Копіюєш?");
//     return;
//   }
// }