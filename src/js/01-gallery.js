import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line
const galleryList = document.querySelector('.gallery');

const cardsMarkup = listOfItems(galleryItems);
console.log(galleryItems);

galleryList.insertAdjacentHTML('beforeend', cardsMarkup);

function listOfItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <div class='gallery__item'>
        <a class='gallery__link' href='${original}'>
          <img
            class='gallery__image'
            src='${preview}'
            alt='Image ${description}'
          />
        </a>
      </div>`;
    })
    .join('');
}
var lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250
});
