import axios from 'axios';

const API_URL = 'https://mern-backend.onrender.com'; 

export const fetchItems = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createItem = async (itemData) => {
  const response = await axios.post(API_URL, itemData);
  return response.data;
};

export const updateItem = async (id, itemData) => {
  const response = await axios.put(`${API_URL}/${id}`, itemData);
  return response.data;
};

export const deleteItem = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};