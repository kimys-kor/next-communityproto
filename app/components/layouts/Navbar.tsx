"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "../Container";

const Navbar = () => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined" && pathname) {
      setActiveLink(pathname);
    }
  }, [pathname]);

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

  const handleLinkClick = (path: string) => {
    setActiveLink(path);
  };

  return (
    <Container>
      <div className="w-full h-14 flex items-center gap-10 truncate p-6 bg-gradient-to-r from-gradient-start to-gradient-end bg-[length:200%_200%] animate-moveGrad font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`w-20 text-base cursor-pointer transition-all duration-300 ease-in-out ${
              activeLink === link.href
                ? "text-white"
                : "text-white/55 hover:text-white"
            }`}
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
