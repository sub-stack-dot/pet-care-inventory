import Order from "../models/orders/Order.model.js"; // Ensure the correct path

// 📌 CREATE Order
export const createOrder = async (req, res) => {
  try {
    const { product, quantity, customerName, contact } = req.body;
    if (!product || !quantity || !customerName || !contact) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const newOrder = new Order({ product, quantity, customerName, contact });
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// 📌 READ Orders
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
};

// 📌 UPDATE Order
export const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedOrder = await Order.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedOrder) return res.status(404).json({ error: "Order not found" });
    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(500).json({ error: "Failed to update order" });
  }
};

// 📌 DELETE Order (Make sure this function exists)
export const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedOrder = await Order.findByIdAndDelete(id);
    if (!deletedOrder) return res.status(404).json({ error: "Order not found" });
    res.status(200).json({ message: "Order deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete order" });
  }
};
