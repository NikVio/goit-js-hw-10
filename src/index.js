
import { fetchBreeds, fetchCatByBreed } from './cat-api';

import SlimSelect from 'slim-select'









const refs = {
  select: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
  container: document.querySelector('.cat-info')
}

console.log(refs);

fetchBreeds().then(data => {
  const creatMarcup = data.map(({ id, name }) => `<option value="${id}">${name}</option>`).join('');
  refs.select.insertAdjacentHTML('beforeend', creatMarcup);

  new SlimSelect({
    select: '#selectElement'
  })
  
}).catch(err => {
  refs.error.hidden = false;
}).finally(() => refs.loader.hidden = false);