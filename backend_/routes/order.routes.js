import express from "express";
import { createOrder, getOrders, updateOrder, deleteOrder } from "../controllers/order.controller.js";

const router = express.Router();

// Create an order (POST)
router.post("/create-order", createOrder);

// Get all orders (GET)
router.get("/orders", getOrders);

// Update an order (PUT)
router.put("/update-order/:id", updateOrder);

// Delete an order (DELETE)
router.delete("/delete-order/:id", deleteOrder);

export default router;
