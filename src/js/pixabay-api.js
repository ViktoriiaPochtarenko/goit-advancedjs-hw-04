import axios from 'axios';


const API_KEY = '8392183-8e71f5162b0cd4e1a7a250d40';
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  return axios.get(BASE_URL, { params }).then(response => response.data);
}
