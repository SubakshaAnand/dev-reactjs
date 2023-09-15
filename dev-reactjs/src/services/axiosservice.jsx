import axios from 'axios';
import { API_URL } from './config';

const instance = axios.create({
  baseURL: API_URL, // Replace with your API's base URL
  timeout: 5000, // Adjust as needed
});

// GET request
export const axiosGet = async (url, params = {}) => {
  try {
    const response = await instance.get(url, { params });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// POST request
export const axiosPost = async (url, data = {}) => {
  try {
    const response = await instance.post(url, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// PUT request
export const axiosPut = async (url, data = {}) => {
  try {
    const response = await instance.put(url, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// DELETE request
export const axiosRemove = async (url) => {
  try {
    const response = await instance.delete(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default instance;
