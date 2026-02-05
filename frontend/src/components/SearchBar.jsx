import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Search iPhone, sasta iphone, iphone 50k..."
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
