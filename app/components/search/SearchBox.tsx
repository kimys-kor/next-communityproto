"use client";

import React, { useState } from "react";

const SearchBox: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    console.log("Search term:", searchTerm);
    // 추가적인 검색 로직을 여기에 구현할 수 있습니다.
  };

  return (
    <div className="relative w-92 flex items-center py-2 rounded-md">
      <input
        type="text"
        id="searchKeyword"
        className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-3 px-10 leading-tight "
        placeholder="검색어를 입력하세요..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        className="absolute right-8 flex-shrink-0 bg-sky-300 hover:bg-sky-700 border-sky-300 hover:border-sky-700 text-sm border-4 text-white py-1 px-2 rounded"
        type="button"
        onClick={handleSearch}
      >
        <svg
          className="fill-current w-4 h-3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M12.9 14.32a8 8 0 111.41-1.41l5.18 5.17-1.41 1.42-5.18-5.18zM8 14a6 6 0 100-12 6 6 0 000 12z" />
        </svg>
      </button>
    </div>
  );
};

export default SearchBox;
