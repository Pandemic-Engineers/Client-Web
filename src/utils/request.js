import axios from "axios";
import { REACT_APP_API_ROOT_URL, REACT_APP_JWT_KEY } from "../config";
const client = axios.create();
client.defaults.baseURL = REACT_APP_API_ROOT_URL;
client.defaults.headers.post["Content-Type"] = "application/json";
client.defaults.headers.post["Accept"] = "application/json";
client.interceptors.request.use(
  config => {
    const token = window.localStorage.getItem(REACT_APP_JWT_KEY);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);
const responseData = res => res.data;

export default {
  delete: url => client.delete(url).then(responseData),
  get: url => client.get(url).then(responseData),
  put: (url, body) => client.put(url, body).then(responseData),
  post: (url, body) => client.post(url, body).then(responseData)
};
