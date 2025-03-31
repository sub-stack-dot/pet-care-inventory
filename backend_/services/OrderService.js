import axios from "axios";

const API_URL = "http://localhost:3004/api/orders"; // Make sure the URL matches your backend

// 📌 CREATE Order
export const createOrder = async (orderData) => {
  return await axios.post(`${API_URL}/create-order`, orderData);
};

// 📌 READ Orders
export const getOrders = async () => {
  return await axios.get(`${API_URL}/orders`);
};

// 📌 UPDATE Order
export const updateOrder = async (id, updatedData) => {
  return await axios.put(`${API_URL}/update-order/${id}`, updatedData);
};

// 📌 DELETE Order
export const deleteOrder = async (id) => {
  return await axios.delete(`${API_URL}/delete-order/${id}`);
};
