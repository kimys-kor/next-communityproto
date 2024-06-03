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
