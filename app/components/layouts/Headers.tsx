import React from "react";

import Logo from "../Logo";
import Link from "next/link";
import SearchBox from "../search/SearchBox";

function Headers() {
  async function handleSearch() {
    "use server";
    console.log("전체검색");
  }

  return (
    <header className="fixed w-full h-20 bg-white z-10 border-solid border-b border-gray-200">
      <div className="py-4">
        <div className="max-w-[1300px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
          <nav className="w-full flex flex-row items-center justify-between gap-3 md:gap-0 ">
            <Link prefetch href="/">
              <Logo></Logo>
            </Link>

            <div className="flex gap-2 justify-between h-7">
              <SearchBox
                handleSearch={handleSearch}
                placeholderText="검색어를 입력하세요."
              ></SearchBox>
              <div className="flex gap-2 justify-center items-center">
                <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                  <svg
                    className="absolute w-12 h-12 text-gray-400 -left-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Headers;
