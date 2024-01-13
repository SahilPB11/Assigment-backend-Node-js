import express from "express";
import {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  searchProducts,
} from "../controller/productController.js";
const router = express.Router();

// cretaed  function to create a product
router.post("/products", createProduct);
router.get("/products", getProducts);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);
router.get("/products/search", searchProducts);

export default router;
