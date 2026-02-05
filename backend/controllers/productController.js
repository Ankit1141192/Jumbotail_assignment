const Product = require("../models/Product");

exports.createProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({ productId: product._id });
  } catch (err) {
    next(err);
  }
};

exports.updateMetadata = async (req, res, next) => {
  try {
    const { productId, metadata } = req.body;

    const product = await Product.findByIdAndUpdate(
      productId,
      { metadata },
      { new: true }
    );

    if (!product) return res.status(404).json({ message: "Product not found" });

    res.json({ productId: product._id, metadata: product.metadata });
  } catch (err) {
    next(err);
  }
};
