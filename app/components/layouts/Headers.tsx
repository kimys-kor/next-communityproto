import React from "react";

import Container from "../Container";
import Logo from "../Logo";
import Link from "next/link";
import SearchBox from "../search/SearchBox";

function Headers() {
  return (
    <header className="fixed w-full h-20 bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <nav className="flex flex-row items-center justify-between gap-3 md:gap-0 ">
            <Link prefetch href="/">
              <Logo></Logo>
            </Link>
            <div className="w-3/5 flex justify-start gap-5 text-lg md:text-base  ">
              <Link
                prefetch
                href="/warranty"
                className="cursor-pointer hover:text-blue"
              >
                보증업체
              </Link>
              <Link
                prefetch
                href="/verify"
                className="cursor-pointer hover:text-blue"
              >
                먹튀검증
              </Link>
              <Link
                prefetch
                href="/sport"
                className="cursor-pointer hover:text-blue"
              >
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
            <div>
              <SearchBox></SearchBox>
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
}

export default Headers;
