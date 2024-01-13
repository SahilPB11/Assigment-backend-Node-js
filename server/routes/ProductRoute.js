// Importing required modules and controllers
import express from "express";
import {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  getProductById,
  searchProducts,
} from "../controller/productController.js";

// Initialize the Express router
const router = express.Router();

// Define routes for managing products

// Route to search products by name, description, or variant name
// GET /api/products/search
router.get(
  "/products/search/",
  (req, res, next) => {
    // Your code here
    console.log("dff");
    next();
  },
  searchProducts
);

// Route to create a new product
// POST /api/products
router.post("/products", createProduct);

// Route to retrieve all products
// GET /api/products
router.get("/products", getProducts);

// Route to retrieve a single product by ID
router.get("/products/:id", getProductById);

// Route to update a product by ID
// PUT /api/products/:id
router.put("/products/:id", updateProduct);

// Route to delete a product by ID
// DELETE /api/products/:id
router.delete("/products/:id", deleteProduct);

// Export the router to be used in other parts of the application
export default router;
