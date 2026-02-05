module.exports = (product, queryIntent) => {
  let score = 0;
  score += product.rating * 2;
  score += Math.log(product.salesCount + 1);
  if (product.stock > 0) score += 2;
  else score -= 5;
  if (queryIntent?.maxPrice && product.price <= queryIntent.maxPrice) {
    score += 3;
  }
  score -= product.returnRate;

  return score;
};
