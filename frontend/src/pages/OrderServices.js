import axios from "axios";

const API_URL = "http://localhost:5000/api/orders"; // Adjust this to match your backend URL

// Create a new order
export const createOrder = async (orderData) => {
  return await axios.post(API_URL, orderData);
};

// Get all orders
export const getOrders = async () => {
  return await axios.get(API_URL);
};

// Update an existing order
export const updateOrder = async (orderId, updatedData) => {
  return await axios.put(`${API_URL}/${orderId}`, updatedData);
};

// Delete an order
export const deleteOrder = async (orderId) => {
  return await axios.delete(`${API_URL}/${orderId}`);
};
