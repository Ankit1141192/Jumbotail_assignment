const ProductCard = ({ product }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="font-semibold text-lg">{product.title}</h3>
      <p className="text-sm text-gray-600 mt-1">
        {product.description}
      </p>

      <div className="mt-3 flex justify-between items-center">
        <div>a
          <p className="text-gray-500 line-through text-sm">
            ₹{product.mrp}
          </p>
          <p className="text-xl font-bold text-green-600">
            ₹{product.sellingPrice}
          </p>
        </div>

        <span
          className={`text-sm px-3 py-1 rounded-full ${
            product.stock > 0
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {product.stock > 0 ? "In Stock" : "Out of Stock"}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
