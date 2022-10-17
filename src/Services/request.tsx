import axios from "axios";
import { API_URL_MOVIES, API_KEY } from "./index";

export const getPopularListAPI = () => {
  const url = `${API_URL_MOVIES}/movie/popular?api_key=${API_KEY}`;
  return axios.get(url);
};

export const getMovieAPI = (id: string) => {
  const url = `${API_URL_MOVIES}/movie/${id}?api_key=${API_KEY}`;
  return axios.get(url);
};
export const getMovieRecomendationAPI = (id: string) => {
  const url = `${API_URL_MOVIES}/movie/${id}/recommendations?api_key=${API_KEY}`;
  return axios.get(url);
};

export const getSearchMovieAPI = (search: string) => {
  const url = `${API_URL_MOVIES}/search/movie?api_key=${API_KEY}&query=${search}&page=1`;
  return axios.get(url);
};

