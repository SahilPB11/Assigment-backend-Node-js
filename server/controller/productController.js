import Product from "../Models/Product.js";
import Variant from "../models/Variant.js";
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
