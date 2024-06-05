import React from "react";
import Link from "next/link";
import Container from "../Container";

function Navbar() {
  return (
    <Container>
      <div className="w-full  h-14 flex items-center gap-10 truncate p-6  bg-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
        <Link
          prefetch
          href="/warranty"
          className="w-20 text-lg cursor-pointer hover:text-xl hover:text-white transition-all duration-300 ease-in-out"
        >
          보증업체
        </Link>
        <Link
          prefetch
          href="/verify"
          className="w-20 text-lg cursor-pointer hover:text-xl hover:text-white transition-all duration-300 ease-in-out"
        >
          먹튀검증
        </Link>
        <Link
          prefetch
          href="/sport"
          className="w-20 text-lg cursor-pointer hover:text-xl hover:text-white transition-all duration-300 ease-in-out"
        >
          스포츠분석
        </Link>
        <Link
          prefetch
          href="/pickster"
          className="w-20 text-lg cursor-pointer hover:text-xl hover:text-white transition-all duration-300 ease-in-out"
        >
          분석존
        </Link>
        <Link
          prefetch
          href="/community"
          className="w-20 text-lg cursor-pointer hover:text-xl hover:text-white transition-all duration-300 ease-in-out"
        >
          커뮤니티
        </Link>
        <Link
          prefetch
          href="/promotion"
          className="w-20 text-lg cursor-pointer hover:text-xl hover:text-white transition-all duration-300 ease-in-out"
        >
          홍보센터
        </Link>
        <Link
          prefetch
          href="/customer"
          className="w-20 text-lg cursor-pointer hover:text-xl hover:text-white transition-all duration-300 ease-in-out"
        >
          고객센터
        </Link>
      </div>
    </Container>
  );
}

export default Navbar;
