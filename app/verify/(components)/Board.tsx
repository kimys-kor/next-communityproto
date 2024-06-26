"use client";
import React from "react";
import Paging from "@/app/components/Paging";
import SelectBox from "@/app/components/SelectBox";
import SearchBox from "@/app/components/search/SearchBox";
import Link from "next/link";

const Board = () => {
  // 가상의 데이터
  const items = [
    {
      id: 1,
      title: "게시물 제목",
      name: "사용자 이름",
      date: "2024.06.19",
      views: 100,
      likes: 20,
      dislikes: 5,
    },
    {
      id: 2,
      title: "다른 게시물 제목",
      name: "다른 사용자",
      date: "2024.06.18",
      views: 150,
      likes: 30,
      dislikes: 10,
    },
    {
      id: 3,
      title: "다른 게시물 제목",
      name: "다른 사용자",
      date: "2024.06.18",
      views: 150,
      likes: 30,
      dislikes: 10,
    },
    {
      id: 4,
      title: "다른 게시물 제목",
      name: "사용자",
      date: "2024.06.18",
      views: 150,
      likes: 30,
      dislikes: 10,
    },
  ];

  const setPage = function () {
    console.log("온체인지");
  };

  const options = [
    { value: "1", label: "전체" },
    { value: "2", label: "제목" },
    { value: "3", label: "제목+내용" },
    { value: "4", label: "작성자" },
  ];
  const handleChange = (value: string) => {
    console.log("Selected value:", value);
    // 여기에 선택된 값 처리 로직 추가
  };

  async function handleSearch() {
    console.log("전체검색");
  }

  return (
    <section className="flex flex-col gap-3 mt-10">
      <div className="flex justify-between items-center w-full">
        <p className="text-[#888888] font-light text-xs">전체 34,006건</p>
        <article className="flex justify-end gap-2 ">
          <SelectBox
            options={options}
            onChange={handleChange}
            defaultValue="1"
          />
          <SearchBox
            handleSearch={handleSearch}
            placeholderText="검색어를 입력해 주세요."
          ></SearchBox>
        </article>
      </div>
      <table className="min-w-full bg-white shadow-md overflow-hidden overflow-x-auto text-[14px]">
        {/* Header */}
        <thead>
          <tr className="flex border-solid border-t-[3px] border-indigo-400 border-b">
            <th className="w-12 truncate py-3 px-2 text-center">번호</th>
            <th className="grow truncate py-3 px-2 text-center">제목</th>
            <th className="w-28 truncate py-3 px-2 text-center">이름</th>
            <th className="w-32 truncate py-3 px-2 text-center">날짜</th>
            <th className="w-20 truncate py-3 px-2 text-center">조회</th>
            <th className="w-20 truncate py-3 px-2 text-center">추천</th>
          </tr>
        </thead>

        {/* Items */}
        <tbody className="font-light">
          {items.map((item, index) => (
            <tr
              key={item.id}
              className={`flex border-solid border-b border-gray-200 ${
                index % 2 == 0 ? "bg-slate-50" : ""
              }`}
            >
              <td className="w-12 truncate py-4 px-2 text-center">{item.id}</td>
              <td className="grow truncate py-4 px-2 text-left">
                {item.title}
              </td>
              <td className="w-20 py-4 px-2 text-center">{item.name}</td>
              <td className="w-32 truncate py-4 px-2 text-center">
                {item.date}
              </td>
              <td className="w-20 truncate py-4 px-2 text-center">
                {item.views}
              </td>
              <td className="w-20 truncate py-4 px-2 text-center">
                {item.likes}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <span className="w-full flex justify-end">
        <Link href={"/verify/case/write"}>
          <button className="bg-indigo-400 text-white  hover:bg-indigo-500 shadow-md rounded-sm text-[13px] font-light px-2 py-2">
            글작성하기
          </button>
        </Link>
      </span>
      <Paging page={1} count={15} setPage={setPage}></Paging>
    </section>
  );
};

export default Board;
