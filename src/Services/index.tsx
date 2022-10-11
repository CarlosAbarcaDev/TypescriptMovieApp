import axios from "axios";

const API_URL = "https://reqres.in/api/login"; 


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

