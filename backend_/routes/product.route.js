import express from "express";
import { createProduct, deleteProduct, getAllProducts, updateProduct } from "../controllers/product.controller.js";


const router = express.Router();

// GET all products
router.get("/get-all-products", getAllProducts);

// POST a new product
router.post("/create-new-product", createProduct);

// PUT update a product by ID
router.put("/update-product/:id", updateProduct);

// DELETE a product by ID
router.delete("/delete-product/:id", deleteProduct);

export default router;