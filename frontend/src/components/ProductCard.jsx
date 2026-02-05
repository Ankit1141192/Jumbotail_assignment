const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden">
      
  
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-900 line-clamp-1">
          {product.title}
        </h3>

        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
          {product.description}
        </p>
        <div className="mt-4 flex items-center gap-2">
          <span className="text-lg font-bold text-green-600">
            ₹{product.sellingPrice}
          </span>
          <span className="text-sm text-gray-400 line-through">
            ₹{product.mrp}
          </span>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <span
            className={`text-xs font-medium px-3 py-1 rounded-full ${
              product.stock > 0
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </span>

          <span className="text-xs text-gray-400">
            ID: {product.productId}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
