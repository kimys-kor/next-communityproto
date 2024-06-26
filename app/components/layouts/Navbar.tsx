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
      href: "/sport",
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
        { href: "/pickster", label: "나는 분석왕" },
        { href: "/pickster/guide", label: "가이드" },
      ],
    },
    {
      href: "/community",
      label: "커뮤니티",
      dropdown: [
        { href: "/community/free", label: "자유게시판" },
        { href: "/community/photo", label: "안구정화" },
        { href: "/community/humor", label: "유머 & 이슈" },
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

  const isActiveLink = (link: string) => {
    if (activeLink === link) return true;
    if (link === "/verify" && activeLink.startsWith("/verify")) return true;
    if (link === "/sport" && activeLink.startsWith("/sport")) return true;
    if (link === "/pickster" && activeLink.startsWith("/pickster")) return true;
    if (link === "/community" && activeLink.startsWith("/community"))
      return true;
    if (link === "/event" && activeLink.startsWith("/event")) return true;
    if (link === "/promotion" && activeLink.startsWith("/promotion"))
      return true;
    if (link === "/customer" && activeLink.startsWith("/customer")) return true;
    return false;
  };

  return (
    <Container>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex w-full h-14">
        <ul className="flex w-full h-14  bg-indigo-500/75 font-medium rounded-lg text-sm text-center mb-2 relative ">
          {links.map((link, index) => (
            <li
              key={index}
              className="w-28 h-14 relative group cursor-pointer md:grid-rows-2 flex flex-col justify-center items-center box-border"
            >
              <Link
                key={link.href}
                href={link.href}
                className={`bg-w-28 h-14 truncate text-base cursor-pointer transition-all flex justify-center items-center duration-300 ease-in-out menu-hover hover:text-white ${
                  isActiveLink(link.href) ? "text-white" : "text-white/55"
                }`}
                onClick={() => handleLinkClick(link.href)}
              >
                {link.label}
              </Link>
              <ul>
                {link.dropdown && (
                  <li className="w-28 left-[0px] invisible absolute z-50 flex flex-col bg-indigo-500 text-white shadow-xl group-hover:visible">
                    {link.dropdown.map((sublink) => (
                      <Link
                        key={sublink.href}
                        href={sublink.href}
                        className={`border-b border-solid border-gray-500 outline-white  w-full block p-4  text-[1rem] hover:bg-indigo-600`}
                        onClick={() => handleLinkClick(sublink.href)}
                      >
                        {sublink.label}
                      </Link>
                    ))}
                  </li>
                )}
              </ul>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation (Scrollable) */}
      <nav className="md:hidden w-full bg-indigo-500/75 font-medium rounded-lg text-sm text-white overflow-hidden">
        <div className="flex overflow-x-auto scrollbar-w-2 scrollbar-track-gray-200 scrollbar-thumb-indigo-600 ">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`px-4 py-2 flex-shrink-0 transition-colors duration-200 hover:bg-indigo-600 hover:text-white`}
              onClick={() => handleLinkClick(link.href)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
