import Notiflix from 'notiflix';
import { fetchImages } from './fetchImages';

const formEl = document.querySelector('.search-form');
const divEl = document.querySelector('.gallery');
const btnEl = document.querySelector('.load-more');

formEl.addEventListener('submit', onFormSubmit);

async function onFormSubmit(event) {
  event.preventDefault();
  const inputValue = event.currentTarget.elements.searchQuery.value.trim();

  try {
  } catch (error) {
    console.log(error.message);
  }
}

async function SearchImages() {}

function createImagesListMarcup(imageCard) {
  const marcup = imageCard
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return ` <div class="photo-card">
                  <a class='link-card' href='${largeImageURL}'>
                    <img src="${webformatURL}" alt="${tags}" loading="lazy" />
                      <div class="info">
                        <p class="info-item">
                          <b>${likes}</b>
                        </p>
                        <p class="info-item">
                          <b>${views}</b>
                        </p>
                        <p class="info-item">
                          <b>${comments}</b>
                        </p>
                        <p class="info-item">
                          <b>${downloads}</b>
                        </p>
                      </div>
                  </a>
                </div>`;
      }
    )
    .join('');

  divEl.insertAdjacentHTML('beforeend', marcup);
}

function resetMarcup() {
  divEl.innerHTML = '';
}
