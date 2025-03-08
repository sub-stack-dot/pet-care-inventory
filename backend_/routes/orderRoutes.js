// import express from "express";
// import Order from "../models/Order.model.js";

// const router = express.Router();

// // POST a new order
// router.post("/", async (req, res) => {
//     try {
//         const newOrder = new Order(req.body);
//         await newOrder.save();
//         res.status(201).json(newOrder);
//     } catch (err) {
//         res.status(400).json({ error: "Failed to create order" });
//     }
// });

// export default router;