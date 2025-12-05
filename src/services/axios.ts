import axios from "axios";
export const publicAxios = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: false,
});

export const privateAxios = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
});
