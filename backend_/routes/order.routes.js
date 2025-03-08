import express from "express";
import { createOrder } from "../controllers/order.controller.js";

const router = express.Router();

// POST a new order
router.post("/create-order", createOrder);


export default router;