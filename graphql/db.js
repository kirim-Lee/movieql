import fetch from 'node-fetch';
import { isRegExp } from 'util';
const API_URLS = "https://yts.ag/api/v2/list_movies.json";

export const getMovies = (limit,rating) => {
  let REQUEST_URLS = API_URLS;
  const Option = [];
  if(limit>0) Option.push(`limit=${limit}`);
  if(rating>0) Option.push(`minimum_rating=${rating}`);
  if(Option.length) REQUEST_URLS +=`?${Option.join('&')}`;
  return fetch(REQUEST_URLS)
    .then(res => res.json())
    .then(json=>json.data.movies)
};

