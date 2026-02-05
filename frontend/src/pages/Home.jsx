import { useState } from "react";
import SearchBar from "../components/SearchBar";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    setLoading(true);
    try {
      const res = await fetch(
        `http://localhost:5000/api/v1/search/product?query=${query}`
      );
      const data = await res.json();
      setProducts(data.data || []);
    } catch (err) {
      console.error("Search error", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        🔍 CatalogIQ Search
      </h1>

      <SearchBar onSearch={handleSearch} />

      {loading && (
        <p className="text-center mt-6 text-gray-500">
          Searching products...
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {products.map((product) => (
          <ProductCard key={product.productId} product={product} />
        ))}
      </div>

      {!loading && products.length === 0 && (
        <p className="text-center mt-10 text-gray-400">
          No products found. Try another query.
        </p>
      )}
    </div>
  );
};

export default Home;
