import React from "react";

import Container from "../Container";
import Logo from "./navbar/Logo";

function Headers() {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-start justify-between gap-3 md:gap-0 ">
            <Logo></Logo>
            먹튀타파
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Headers;
