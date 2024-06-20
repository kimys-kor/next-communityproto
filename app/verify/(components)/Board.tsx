import React from "react";

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

  return (
    <table className="min-w-full bg-white shadow-md overflow-hidden overflow-x-auto mt-10 text-[14px]">
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
      <tbody>
        {items.map((item, index) => (
          <tr
            key={item.id}
            className={`flex border-solid border-b border-gray-200 ${
              index % 2 == 0 ? "bg-slate-50" : ""
            }`}
          >
            <td className="w-12 truncate py-4 px-2 text-center">{item.id}</td>
            <td className="grow truncate py-4 px-2 text-left">{item.title}</td>
            <td className="w-20 py-4 px-2 text-center">{item.name}</td>
            <td className="w-32 truncate py-4 px-2 text-center">{item.date}</td>
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
  );
};

export default Board;
