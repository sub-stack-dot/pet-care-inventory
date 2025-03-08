import Order from "../models/orders/Order.model.js";
import Product from "../models/products/product.model.js";

// Create a new order
export const createOrder = async (req, res) => {
    try {
      const { product, quantity, customerName, contact } = req.body;
  
      if (!product || !quantity || !customerName || !contact) {
        return res.status(400).json({ error: "All fields are required" });
      }
  
      const productData = await Product.findOne({ title: product });
  
      if (!productData) {
        return res.status(404).json({ error: "Product not found" });
      }
  
      if (productData.stock < quantity) {
        return res.status(400).json({ error: "Not enough stock available" });
      }
  
      // Deduct stock before saving order
      productData.stock -= quantity;
      await productData.save();
  
      const newOrder = new Order({
        product,
        quantity,
        customerName,
        contact,
      });
  
      await newOrder.save();
  
      res.status(201).json(newOrder);
    } catch (err) {
      console.error("Error creating order:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  

// Get all orders
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
};

// Get a single order by ID
export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch order" });
  }
};

// Update an order by ID
export const updateOrder = async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedOrder) {
      return res.status(404).json({ error: "Order not found" });
    }
    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(400).json({ error: "Failed to update order" });
  }
};

// Delete an order by ID
export const deleteOrder = async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id);
    if (!deletedOrder) {
      return res.status(404).json({ error: "Order not found" });
    }
    res.status(200).json({ message: "Order deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete order" });
  }
};