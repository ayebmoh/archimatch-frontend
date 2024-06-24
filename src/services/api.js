import axios from 'axios';
import Cookies from 'js-cookie';

export const getTokenFromCookies = () => {
  return Cookies.get('authToken');
};

const BASE_URL = 'http://127.0.0.1:8000/';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: getTokenFromCookies() ? `Bearer ${getTokenFromCookies()}` : '',
  },
});
const axiosInstanceFile = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: getTokenFromCookies() ? `Bearer ${getTokenFromCookies()}` : '',
    ContentType: 'multipart/form-data',
  },
});

export const fetchData = async (endpoint) => {
  return await axiosInstance.get(endpoint);
};

export const postData = async (endpoint, data) => {
  return axiosInstance.post(endpoint, data);
};

export const postDataFile = async (endpoint, data) => {
  return axiosInstanceFile.post(endpoint, data);
};
