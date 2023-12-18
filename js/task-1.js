const gallery = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const ul = document.querySelector('.gallery');
let string = '';
gallery.forEach(elem => {
  string += `<li class="gallery__item">
    <a
      class="gallery__link"
      href="${elem.original}"
    >
      <img
        class="gallery__image"
        src="${elem.preview}"
        data-source="${elem.original}"
        alt="${elem.description}"
      />
      <span class="gallery__icon">
        <i class="material-icons">zoom_out_map</i>
      </span>
    </a>
  </li>`;
});

ul.insertAdjacentHTML('afterbegin', string);

const ulListner = document.querySelector('.js-gallery');
const modalListner = document.querySelector('.lightbox');
const modal = document.querySelector('.js-lightbox');
const fullImg = document.querySelector('.lightbox__image');

function showModal(event) {
  event.preventDefault();
  if (event.target.nodeName != 'IMG') {
    return;
  }
  modal.classList.add('is-open');
  const bigImgTake = event.target.dataset.source;
  const altTake = event.target.getAttribute('alt');
  fullImg.setAttribute('src', `${bigImgTake}`);
  fullImg.setAttribute('alt', `${altTake}`);
}

function hideModal(event) {
  if (
    event.target.dataset.action !== 'close-lightbox' &&
    event.target.nodeName !== 'I' &&
    !event.target.classList.contains('lightbox__content') &&
    event.code !== 'Escape'
  ) {
    return;
  }
  modal.classList.remove('is-open');
  fullImg.setAttribute('src', '#');
}

ulListner.addEventListener('click', showModal);
document.addEventListener('click', hideModal);
document.addEventListener('keyup', hideModal);
