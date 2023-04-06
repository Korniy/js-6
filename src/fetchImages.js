import axios from 'axios';

export async function fetchImages() {
  const KEY = '35102712-8af4928d6ff69b4cac4795091';
  const BASE_URL = 'https://pixabay.com/api/';

  const response = await axios.get(
    `${BASE_URL}?key=${KEY}&q=image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=1`
  );
  const images = await response.json();
  return images;
}
