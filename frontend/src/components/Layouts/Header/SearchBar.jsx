import React from "react";

const SearchBar = () => {
  return (
    <div className="relative w-1/3 hidden sm:block">
      <input
        type="text"
        placeholder="Type here to search..."
        className="bg-gray-100 border border-gray-300 rounded-full pl-4 pr-10 py-1 text-sm w-full focus:outline-none"
      />
      <button
        type="button"
        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-700 p-1"
        aria-label="Search"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <circle cx="11" cy="11" r="7" strokeWidth="2" />
          <line x1="16.5" y1="16.5" x2="21" y2="21" strokeWidth="2" />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;