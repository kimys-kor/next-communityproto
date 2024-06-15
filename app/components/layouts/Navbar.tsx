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
    {
      href: "/warranty",
      label: "보증업체",
      dropdown: [
        { href: "/pickster/tip1", label: "Tip 1" },
        { href: "/pickster/tip2", label: "Tip 2" },
      ],
    },
    {
      href: "/verify",
      label: "먹튀검증",
      dropdown: [
        { href: "/pickster/tip1", label: "Tip 1" },
        { href: "/pickster/tip2", label: "Tip 2" },
      ],
    },
    {
      href: "/sport",
      label: "스포츠분석",
      dropdown: [
        { href: "/pickster/tip1", label: "Tip 1" },
        { href: "/pickster/tip2", label: "Tip 2" },
      ],
    },
    {
      href: "/pickster",
      label: "분석존",
      dropdown: [
        { href: "/pickster/tip1", label: "Tip 1" },
        { href: "/pickster/tip2", label: "Tip 2" },
      ],
    },
    {
      href: "/community",
      label: "커뮤니티",
      dropdown: [
        { href: "/pickster/tip1", label: "Tip 1" },
        { href: "/pickster/tip2", label: "Tip 2" },
      ],
    },
    {
      href: "/promotion",
      label: "홍보센터",
      dropdown: [
        { href: "/pickster/tip1", label: "Tip 1" },
        { href: "/pickster/tip2", label: "Tip 2" },
      ],
    },
    {
      href: "/customer",
      label: "고객센터",
      dropdown: [
        { href: "/pickster/tip1", label: "Tip 1" },
        { href: "/pickster/tip2", label: "Tip 2" },
      ],
    },
  ];

  const handleLinkClick = (path: string) => {
    setActiveLink(path);
  };

  return (
    <Container>
      <nav className="w-full h-14 flex items-center gap-10 p-6 bg-indigo-500/75 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 relative">
        {links.map((link) => (
          <div key={link.href} className="relative group cursor-pointer">
            <Link
              href={link.href}
              className={`w-20 text-base cursor-pointer transition-all duration-300 ease-in-out menu-hover ${
                activeLink === link.href
                  ? "text-white"
                  : "text-white/55 hover:text-white"
              }`}
              onClick={() => handleLinkClick(link.href)}
            >
              {link.label}
              {/* <ul className="absolute left-0 mt-1 bg-gray-100 shadow-md px-2 py-1 rounded-md hidden group-hover:block">
                <li className="text-sm text-gray-800 hover:text-blue-300">
                  드롭메뉴1
                </li>
                <li className="text-sm text-gray-800 hover:text-blue-300">
                  드롭메뉴2
                </li>
                <li className="text-sm text-gray-800 hover:text-blue-300">
                  드롭메뉴3
                </li>
              </ul> */}
            </Link>
            {link.dropdown && (
              <div className="w-24 top-6 left-[-10px] invisible absolute z-50 flex  flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
                {link.dropdown.map((sublink) => (
                  <Link
                    key={sublink.href}
                    href={sublink.href}
                    className="w-full block p-4 text-gray-800 hover:bg-gray-200 hover:text-white"
                    onClick={() => handleLinkClick(sublink.href)}
                  >
                    {sublink.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </Container>
  );
};

export default Navbar;
