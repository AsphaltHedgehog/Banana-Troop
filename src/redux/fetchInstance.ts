import axios from "axios";

export const instance = axios.create({
  baseURL: "", // "https://monkey-plant.onrender.com/",
});

export const setToken = (token: string) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const clearToken = () => {
  instance.defaults.headers.common.Authorization = "";
};
