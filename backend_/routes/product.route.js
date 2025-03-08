import express from "express";
import productController from "../controllers/product.controller.js";

const router = express.Router();

// GET all products
router.get("/", productController.getAllProducts);

// POST a new product
router.post("/", productController.createProduct);

// PUT update a product by ID
router.put("/:id", productController.updateProduct);

// DELETE a product by ID
router.delete("/:id", productController.deleteProduct);

export default router;