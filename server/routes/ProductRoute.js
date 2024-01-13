import express from "express";
const router = express.Router();

// cretaed  function to create a product
router.post("/products", savedProduct);

module.exports = router;
