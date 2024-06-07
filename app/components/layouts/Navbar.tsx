"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Container from "../Container";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    // 페이지가 로드될 때 현재 URL을 설정
    setActiveLink(window.location.pathname);
  }, []);

  const handleLinkClick = (path: string) => {
    setActiveLink(path);
  };

  const links = [
    { href: "/", label: "홈" },
    { href: "/warranty", label: "보증업체" },
    { href: "/verify", label: "먹튀검증" },
    { href: "/sport", label: "스포츠분석" },
    { href: "/pickster", label: "분석존" },
    { href: "/community", label: "커뮤니티" },
    { href: "/promotion", label: "홍보센터" },
    { href: "/customer", label: "고객센터" },
  ];

  return (
    <Container>
      <div className="w-full h-14 flex items-center gap-10 truncate p-6 bg-indigo-500/75 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2">
        {links.map((link) => (
          <Link
            key={link.href}
            prefetch
            href={link.href}
            className="w-20 text-base cursor-pointer hover:text-xl text-white transition-all duration-300 ease-in-out"
            onClick={() => handleLinkClick(link.href)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default Navbar;
