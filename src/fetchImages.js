import axios from 'axios';

export async function fetchImageCards(searchQuery, page, perPage) {
  const KEY = '35102712-8af4928d6ff69b4cac4795091';
  const BASE_URL = 'https://pixabay.com/api/';

  try {
    const response = await axios.get(
      `${BASE_URL}?key=${KEY}&q=${searchQuery}&image_type=photo
      &orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
