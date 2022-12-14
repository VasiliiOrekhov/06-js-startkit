import { placesList } from './constants.js';

export function renderCard(name, link) {
  const template = `<div class="place-card">
      <div class="place-card__image"
          style="background-image: url(${link})">
          <button class="place-card__delete-icon"></button>
      </div>
      <div class="place-card__description">
          <h3 class="place-card__name">${name}</h3>
          <button class="place-card__like-icon"></button>
      </div>
  </div>`;
  placesList.insertAdjacentHTML('beforeend', template);
}
