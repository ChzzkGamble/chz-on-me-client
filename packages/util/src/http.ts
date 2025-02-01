import axios, { AxiosRequestConfig } from 'axios';

export const http = {
  get: async function get<Response = unknown>(url: string, options: AxiosRequestConfig = {}) {
    const res = await axios.get<Response>(url, {
      withCredentials: true,
      ...options,
    });
    return res.data;
  },
  post: async function post<Request = any, Response = unknown>(url: string, data?: Request) {
    const res = await axios.post<Response>(url, {
      ...data
    }, {
      withCredentials: true,
    });
    return res.data;
  },
  put: async function put<Request = any, Response = unknown>(url: string, data?: Request) {
    const res = await axios.put<Response>(url, {
      ...data
    }, {
      withCredentials: true,
    });
    return res.data;
  },
};
