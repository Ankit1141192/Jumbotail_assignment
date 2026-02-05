import { useState } from "react";
import SearchBar from "../components/SearchBar";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    if (!query.trim()) return;

    setLoading(true);
    try {
      const res = await fetch(
        `https://jumbotail-assignment.onrender.com/api/v1/search/product?query=${query}`
      );
      const data = await res.json();
      setProducts(data?.data || []);
    } catch (err) {
      console.error("Search error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900">
            CatalogIQ
          </h1>
          <p className="text-gray-600 mt-2">
            Smart product search for electronics
          </p>
        </div>

        {/* Search */}
        <SearchBar onSearch={handleSearch} />

        {/* Loading */}
        {loading && (
          <div className="text-center mt-10 text-gray-500">
            Searching products...
          </div>
        )}

        {/* Product Grid */}
        {!loading && products.length > 0 && (
          <div className="grid gap-6 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard
                key={product.productId}
                product={product}
              />
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && products.length === 0 && (
          <div className="text-center mt-16 text-gray-400">
            No products found. Try searching something else.
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
