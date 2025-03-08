// controllers/product.controller.js
import Product from '../models/products/product.model.js';

// Get all products
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch products" });
    }
};

// Create a new product
const createProduct = async (req, res) => {
    try {
        const { name, price, description } = req.body;
        const newProduct = new Product({ name, price, description });
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (err) {
        res.status(500).json({ error: "Failed to create product" });
    }
};

// Update a product by ID
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, price, description } = req.body;
        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            { name, price, description },
            { new: true, runValidators: true }
        );
        if (!updatedProduct) {
            return res.status(404).json({ error: "Product not found" });
        }
        res.json(updatedProduct);
    } catch (err) {
        res.status(500).json({ error: "Failed to update product" });
    }
};

// Delete a product by ID
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json({ error: "Product not found" });
        }
        res.json({ message: "Product deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: "Failed to delete product" });
    }
};

export default {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct,
};