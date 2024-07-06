import React from "react";

import Logo from "../Logo";
import Link from "next/link";
import SearchBox from "../search/SearchBox";
import Avatar from "/public/images/icon/avatar.svg";

function Headers() {
  async function handleSearch() {
    "use server";
    console.log("전체검색");
  }

  return (
    <header className="fixed w-full h-20 bg-white z-10 border-gray-200">
      <div className="max-w-[1300px] mx-auto px-3 py-4">
        <nav className="w-full flex flex-row items-center justify-between gap-3 md:gap-0 ">
          <Link prefetch href="/">
            <Logo></Logo>
          </Link>

          <div className="flex gap-5 justify-between h-7">
            <SearchBox
              handleSearch={handleSearch}
              placeholderText="검색어를 입력하세요."
            ></SearchBox>
            <div className="flex gap-2 justify-center items-center">
              <Avatar className="relative"></Avatar>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Headers;
