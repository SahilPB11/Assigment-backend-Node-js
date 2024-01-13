import Variant from "../Models/Variant.js";
import Product from "../Models/Product.js";
import ErrorHandler from "../utils/ErrorHandler.js";

// Create a new product with variants
export const createProduct = async (req, res, next) => {
  try {
    const { name, description, price, variants } = req.body;
    const product = new Product({ name, description, price });
    const savedProduct = await product.save();

    if (variants && variants.length > 0) {
      for (const variant of variants) {
        const newVariant = new Variant({ ...variant });
        savedProduct.variants.push(newVariant);
        await newVariant.save();
      }
      await savedProduct.save();
    }
    res.status(201).json({ success: true, data: savedProduct });
  } catch (error) {
    next(new ErrorHandler(error.message, 500));
  }
};

// Get all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find().populate("variants");
    res.status(200).json({ success: true, data: savedProduct });
  } catch (error) {
    next(new ErrorHandler(error.message, 500));
  }
};

// Update a product by ID
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price } = req.body;
    const product = await Product.findByIdAndUpdate(
      id,
      { name, description, price },
      { new: true }
    );
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    next(new ErrorHandler(error.message, 500));
  }
};

// Delete a product by ID
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    next(new ErrorHandler(error.message, 500));
  }
};

// Search products by name, description, or variant name
export const searchProducts = async (req, res) => {
  try {
    const { query } = req.query;
    const products = await Product.find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        { description: { $regex: query, $options: "i" } },
      ],
    }).populate("variants");
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    next(new ErrorHandler(error.message, 500));
  }
};
