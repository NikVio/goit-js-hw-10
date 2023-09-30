 import axios from "axios";

 axios.defaults.headers.common["x-api-key"] = "live_3JjO3G5iaBcyeHeFwSPTqlukICTvmEXXsQ64luQc5BlpjgfQDzxuZTMvAaQIEsdZ";


const BASE_URL = 'https://api.thecatapi.com/v1';
export function fetchBreeds() {
    
    return axios.get(`${BASE_URL}/breeds`).then(resp => {
        if (resp.status !== 200) {
            throw new Error(error);
        }
        return resp.data;
    });
   
}



export function fetchCatByBreed(breedId) {
    return axios.get(`${BASE_URL}/images/search?breed_ids=${breedId}`).then(response => {
       if (!response.ok) {
            throw new Error(response.status)
        }
         return response.json();
   })
}