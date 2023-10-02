
import { fetchBreeds, fetchCatByBreed } from './cat-api';

import SlimSelect from 'slim-select'

import { Report } from 'notiflix/build/notiflix-report-aio';







const refs = {
  select: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
  container: document.querySelector('.cat-info')
}


refs.loader.hidden = false;
refs.select.hidden = true;

fetchBreeds().then(data => {
  
  const creatMarcup = data.map(({ id, name }) => `<option value="${id}">${name}</option>`).join('');
  refs.select.insertAdjacentHTML('beforeend', creatMarcup);
  

  new SlimSelect({
    select: '#selectElement'
  })

  refs.loader.hidden = true;
  refs.select.hidden = false;
  
})
  .catch(err => {
    Report.failure(
      'Oops! Something went wrong!',
      'Please try again later',
      'Okay',
    );
    refs.loader.hidden = true;
    console.log(err);
  });


refs.select.addEventListener('change', onChange);

function onChange(evt) {
  let id = evt.target.value;
   refs.container.classList.add("is-hidden");
  refs.loader.hidden = false;
  fetchCatByBreed(id)
    .then(data => {
      
      let imgCat = data[0].url;
      let nameCat = data[0].breeds[0].name;
      let temperament = data[0].breeds[0].temperament;
      let descr = data[0].breeds[0].description
      
      refs.container.innerHTML = marcup(imgCat, nameCat, temperament, descr);
      
      
      refs.container.classList.remove("is-hidden");
       refs.loader.hidden = true;
      
    })
    .catch(err => {
      Report.failure(
        'Oops! Something went wrong!',
        'Please try again later',
        'Okay',
      );
      refs.loader.hidden = true;
      refs.select.hidden = false;
     refs.container.classList.add("is-hidden");
      console.log(err);
    })
}

function marcup(imgCat, nameCat, temperament, descr) {

  return  `
  <div class="container">
   <img class="img-cat" src="${imgCat}" alt="${nameCat}">
    <div class="box-cat">
      <h2 class="name-cat">${nameCat}</h2>
      <p class="info-cat">${descr}</p>
      <h3 class="temp-cat">Temperament:</h3>
      <p>${temperament}</p>
    </div>
    </div>`;
}

