import Breadcrumb from "@/app/components/BreadCrumb";
import WarrantyBanner from "@/app/warranty/(components)/WarrantyBanner";
import React from "react";
import Board from "../(components)/Board";

function page() {
  const breadcrumbItems = {
    title: "먹튀검증",
    subMenu: ["검증", "피해사례"],
  };

  const headers = ["번호", "제목", "이름", "날짜", "조회", "추천", "비추"];
  const posts = [
    {
      no: 1,
      title: "First Post",
      name: "John Doe",
      date: "2023-06-19",
      views: 100,
      likes: 10,
      dislikes: 0,
    },
    {
      no: 2,
      title: "Second Post",
      name: "Jane Smith",
      date: "2023-06-18",
      views: 150,
      likes: 20,
      dislikes: 1,
    },
    // Additional posts...
  ];

  return (
    <div className="flex flex-col max-w-[1200px] gap-3">
      <WarrantyBanner></WarrantyBanner>
      <Breadcrumb breadcrumbData={breadcrumbItems} active={1}></Breadcrumb>
      <Board headers={headers} posts={posts} />
    </div>
  );
}

export default page;
