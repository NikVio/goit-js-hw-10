 import axios from "axios";

 // axios.defaults.headers.common["x-api-key"] = "live_3JjO3G5iaBcyeHeFwSPTqlukICTvmEXXsQ64luQc5BlpjgfQDzxuZTMvAaQIEsdZ";

const URL_KEY = "live_3JjO3G5iaBcyeHeFwSPTqlukICTvmEXXsQ64luQc5BlpjgfQDzxuZTMvAaQIEsdZ";
const BASE_URL = 'https://api.thecatapi.com/v1';

export function fetchBreeds() {
    
    return fetch(`${BASE_URL}/breeds?api_key=${URL_KEY}`)
        .then(response => {
        if (!response.ok) {
            throw new Error(response.status)
        }
        return response.json();
    })
   
}



export function fetchCatByBreed(breedId) {
    return fetch(`${BASE_URL}/images/search?breed_ids=${breedId}&api_key=${URL_KEY}`)
        .then(response => {
       if (!response.ok) {
            throw new Error(response.status)
        }
         return response.json();
   })
}