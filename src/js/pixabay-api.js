import axios from 'axios';

export async function getImage(image, currentPage) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const params = new URLSearchParams({
    key: '44411867-7607aa296582669a38968dfd5',
    q: image,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: currentPage,
    per_page: 15
  });
  const url = `${BASE_URL}${END_POINT}?${params}`;
  const res = await axios.get(url)
  return res.data;
}

