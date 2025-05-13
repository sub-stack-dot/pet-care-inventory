import express from "express";
import { createOrder, getOrders, updateOrder, deleteOrder } from "../controllers/order.controller.js";

const router = express.Router();

// Create an order (POST)
router.post("/", createOrder);

// Get all orders (GET)
router.get("/", getOrders);

// Update an order (PUT)
router.put("/:id", updateOrder);

// Delete an order (DELETE)
router.delete("/:id", deleteOrder);

export default router;
