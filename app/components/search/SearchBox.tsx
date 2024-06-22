"use client";

import { useState } from "react";

interface SearchBoxProps {
  handleSearch: () => void;
  placeholderText: string;
}

const SearchBox: React.FC<SearchBoxProps> = ({
  handleSearch,
  placeholderText,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleClick = () => {
    handleSearch();
  };

  return (
    <div className="relative w-68 h-[1.75rem] flex items-center justify-center">
      <input
        type="text"
        id="searchKeyword"
        className="w-full pl-2 h-full box-border bg-white border border-gray-300 focus:outline-none text-xs text-black font-light block leading-tight"
        placeholder={placeholderText}
        value={searchTerm}
        onChange={handleChange}
        onFocus={(e) =>
          e.currentTarget.classList.add("ring-2", "ring-indigo-500")
        }
        onBlur={(e) =>
          e.currentTarget.classList.remove("ring-2", "ring-indigo-500")
        }
      />
      <button
        className="hover:text-md absolute right-1 flex-shrink-0 py-1 px-2 rounded"
        type="button"
        onClick={handleClick}
      >
        <svg
          className="fill-slate-400 w-5 h-4 hover:fill-slate-600"
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
