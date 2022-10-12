import axios from "axios";

export const API_URL = "https://reqres.in/api/login"; 
export const API_KEY = '9e93d5b2ea1d076ea74934dcf140c559'
export const IMG_URL = 'https://image.tmdb.org/t/p/w500'

export const createStorageSync = (keys: string, values: string) => {
  return localStorage.setItem(keys, values);
};

export const getStorageSync = (key: string) => {
  return localStorage.getItem(key);
};

export const loginService = async (username: string, password: string) => {
  const response = await axios
    .post(API_URL, {
      username,
      password,
    });
    return response.data
};

export const logoutService = () => {
  localStorage.removeItem("user");
};

