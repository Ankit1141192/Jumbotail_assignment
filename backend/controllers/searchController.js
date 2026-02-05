const Product = require("../models/Product");
const normalizeQuery = require("../utils/normalizeQuery");
const priceIntent = require("../utils/priceIntent");
const rank = require("../services/rankingService");

exports.searchProducts = async (req, res, next) => {
  try {
    const rawQuery = req.query.query;
    const query = normalizeQuery(rawQuery);

    const maxPrice = priceIntent(query);

    const products = await Product.find(
      { $text: { $search: query } },
      { score: { $meta: "textScore" } }
    );

    const ranked = products
      .map(p => ({
        product: p,
        score: rank(p, { maxPrice })
      }))
      .sort((a, b) => b.score - a.score)
      .map(r => ({
        productId: r.product._id,
        title: r.product.title,
        description: r.product.description,
        mrp: r.product.mrp,
        sellingPrice: r.product.price,
        metadata: r.product.metadata,
        stock: r.product.stock
      }));

    res.json({ data: ranked });
  } catch (err) {
    next(err);
  }
};
