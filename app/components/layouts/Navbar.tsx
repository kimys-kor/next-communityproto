import React from "react";
import Link from "next/link";
import Container from "../Container";

function Navbar() {
  return (
    <Container>
      <div className="w-full h-10 flex  items-center gap-5 truncate p-6 text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
        <div className="flex justify-center items-center text-white ">
          <Link
            prefetch
            href="/warranty"
            className="cursor-pointer hover:text-blue text-white md:text-lg sm:text-sm "
          >
            보증업체
          </Link>
        </div>
        <Link
          prefetch
          href="/verify"
          className="cursor-pointer hover:text-blue"
        >
          먹튀검증
        </Link>
        <Link prefetch href="/sport" className="cursor-pointer hover:text-blue">
          스포츠분석
        </Link>
        <Link
          prefetch
          href="/pickster"
          className="cursor-pointer hover:text-blue"
        >
          분석존
        </Link>
        <Link
          prefetch
          href="/community"
          className="cursor-pointer hover:text-blue"
        >
          커뮤니티
        </Link>
        <Link
          prefetch
          href="/promotion"
          className="cursor-pointer hover:text-blue"
        >
          홍보센터
        </Link>
        <Link
          prefetch
          href="/customer"
          className="cursor-pointer hover:text-blue"
        >
          고객센터
        </Link>
      </div>
    </Container>
  );
}

export default Navbar;
