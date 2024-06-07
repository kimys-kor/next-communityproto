import React from "react";

import Container from "../Container";
import Logo from "../Logo";
import Link from "next/link";
import SearchBox from "../search/SearchBox";

function Headers() {
  return (
    <header className="fixed w-full h-20 bg-white z-10 ">
      <div className="py-4">
        <Container>
          <nav className="flex flex-row items-center justify-between gap-3 md:gap-0 ">
            <Link prefetch href="/">
              <Logo></Logo>
            </Link>

            <div className="w-1/3 flex gap-2 justify-between">
              <SearchBox></SearchBox>
              <div className="flex gap-2 justify-center items-center">
                <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                  <svg
                    className="absolute w-12 h-12 text-gray-400 -left-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
}

export default Headers;
