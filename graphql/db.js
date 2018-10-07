import fetch from 'node-fetch';
const API_URLS = "https://yts.ag/api/v2/list_movies.json";

export const getMovies = () => {
  return fetch(`${API_URLS}`)
    .then(res => res.json())
    .then(json=>json.data.movies)
};

