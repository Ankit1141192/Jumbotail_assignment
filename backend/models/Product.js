const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: { type: String, index: "text" },
    description: { type: String, index: "text" },
    rating: Number,
    stock: Number,
    price: Number,
    mrp: Number,
    currency: String,

    salesCount: { type: Number, default: 0 },
    returnRate: { type: Number, default: 0 },

    metadata: {
      ram: String,
      storage: String,
      color: String,
      screenSize: String,
      brightness: String,
      model: String
    }
  },
  { timestamps: true }
);

productSchema.index({ title: "text", description: "text" });

module.exports = mongoose.model("Product", productSchema);
