import axios from "axios";
import { API_URL, API_KEY } from "./index";

export const getPopularListAPI = () => {
  const url = `${API_URL}/movie/popular?api_key=${API_KEY}`;
  return axios.get(url);
};
