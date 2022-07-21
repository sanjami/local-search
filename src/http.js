import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.VUE_APP_URL,
});

const defaultOptions = () => ({
  headers: {
    'Content-Type': 'application/json',
  },
});

const http = {
  get: (url, options) => instance.get(url, { ...defaultOptions(), ...(options || {}) }),
  post: (url, data, options) => instance
    .post(url, data, { ...defaultOptions(), ...(options || {}) }),
  patch: (url, data, options) => instance
    .patch(url, data, { ...defaultOptions(), ...(options || {}) }),
  put: (url, data, options) => instance.put(url, data, { ...defaultOptions(), ...(options || {}) }),
  delete: (url, options) => instance.delete(url, { ...defaultOptions(), ...(options || {}) }),
};

export default http;
