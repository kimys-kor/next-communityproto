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
    },
    {
      href: "/verify",
      label: "먹튀검증",
      dropdown: [
        { href: "/verify", label: "검증" },
        { href: "/verify/case", label: "피해사례" },
      ],
    },
    {
      href: "/sport/soccer",
      label: "스포츠분석",
      dropdown: [
        { href: "/sport/soccer", label: "축구분석" },
        { href: "/sport/base", label: "야구분석" },
        { href: "/sport/basket", label: "농구분석" },
        { href: "/sport/volley", label: "배구분석" },
        { href: "/sport/hockey", label: "하키분석" },
      ],
    },
    {
      href: "/pickster",
      label: "분석존",
      dropdown: [
        { href: "/pickster/", label: "나는 분석왕" },
        { href: "/pickster/guide", label: "가이드" },
      ],
    },
    {
      href: "/community/photo",
      label: "커뮤니티",
      dropdown: [
        { href: "/community/photo", label: "안구정화" },
        { href: "/community/humor", label: "유머 & 이슈" },
        { href: "/community/free", label: "자유게시판" },
      ],
    },
    {
      href: "/event",
      label: "이벤트",
      dropdown: [
        { href: "/event", label: "이벤트공지" },
        { href: "/event/attd", label: "출석체크" },
      ],
    },
    {
      href: "/promotion",
      label: "홍보센터",
      dropdown: [
        { href: "/promotion", label: "일반홍보" },
        { href: "/promotion/ggong", label: "꽁머니홍보" },
        { href: "/promotion/hunting", label: "구인구직" },
      ],
    },
    {
      href: "/customer",
      label: "고객센터",
      dropdown: [
        { href: "/customer", label: "공지사항" },
        { href: "/customer/qalist", label: "1:1 문의" },
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
            </Link>
            {link.dropdown && (
              <div className="w-32 top-6 left-[-20px] invisible absolute z-50 flex  flex-col bg-indigo-500 text-white shadow-xl group-hover:visible">
                {link.dropdown.map((sublink) => (
                  <Link
                    key={sublink.href}
                    href={sublink.href}
                    className="w-full block p-4 text-white hover:scale-110  text-[1rem] "
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
