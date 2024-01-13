import Product from "../Models/Product.js";
import ErrorHandler from "../utils/ErrorHandler.js";

// Create a new product with variants
export const createProduct = async (req, res, next) => {
  try {
    const { name, description, price, variants } = req.body;

    const product = new Product({
      name,
      description,
      price,
      variants, // Embed variants directly
    });

    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    next(new ErrorHandler(error.message, 500));
  }
};

// Get all products
export const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    next(new ErrorHandler(error.message, 500));
  }
};

// Retrieve a single product by ID with embedded variants
export const getProductById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found." });
    }
    res.status(200).json(product);
  } catch (error) {
    next(new ErrorHandler(error.message, 500));
  }
};

// Update a product by ID
export const updateProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found." });
    }
    res.status(200).json(product);
  } catch (error) {
    next(new ErrorHandler(error.message, 500));
  }
};

// Delete a product by ID
export const deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found." });
    }
    res
      .status(200)
      .json({ success: true, message: "Product deleted successfully." });
  } catch (error) {
    next(new ErrorHandler(error.message, 500));
  }
};

// Search products by name, description, or variant name
export const searchProducts = async (req, res, next) => {
  try {
    console.log("dokg");
    const query = req.query.query;
    // Log the query for debugging
    console.log("Search Query:", query);
    // Ensure the query is a valid string before executing the search
    if (typeof query !== "string") {
      return res
        .status(400)
        .json({ success: false, message: "Invalid search query." });
    }
    const products = await Product.find({
      $or: [
        { name: { $regex: query, $options: "i" } }, // Search by product name
        { description: { $regex: query, $options: "i" } }, // Search by product description
        { "variants.name": { $regex: query, $options: "i" } }, // Search by variant name
      ],
    });
    res.status(200).json(products);
  } catch (error) {
    console.log("hii");
    next(new ErrorHandler(error.message, 500));
  }
};
