import React from "react";

const Board = () => {
  // 가상의 데이터
  const items = [
    {
      id: 1,
      title: "게시물 제목",
      name: "사용자 이름",
      date: "2024-06-19",
      views: 100,
      likes: 20,
      dislikes: 5,
    },
    {
      id: 2,
      title: "다른 게시물 제목",
      name: "다른 사용자",
      date: "2024-06-18",
      views: 150,
      likes: 30,
      dislikes: 10,
    },
    // 추가적인 데이터 항목들
  ];

  return (
    <div className="overflow-x-auto">
      <div className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        {/* 헤더 */}
        <div className="grid grid-cols-12 bg-gray-200 text-gray-600">
          <div className="truncate col-span-1 py-3 px-6 text-center font-bold">
            번호
          </div>
          <div className="truncate col-span-5 py-3 px-6 text-center font-bold">
            제목
          </div>
          <div className="truncate col-span-1 py-3 px-6 text-center font-bold">
            이름
          </div>
          <div className="truncate col-span-2 py-3 px-6 text-center font-bold">
            날짜
          </div>
          <div className="truncate col-span-1 py-3 px-6 text-center font-bold">
            조회
          </div>
          <div className="truncate col-span-1 py-3 px-6 text-center font-bold">
            추천
          </div>
          <div className="truncate col-span-1 py-3 px-6 text-center font-bold">
            비추
          </div>
        </div>

        {/* 항목들 */}
        {items.map((item) => (
          <div key={item.id} className="grid grid-cols-12 border-t">
            <div className="truncate col-span-1 py-4 px-6 text-left">
              {item.id}
            </div>
            <div className="truncate col-span-5 py-4 px-6 text-left">
              {item.title}
            </div>
            <div className="truncate col-span-1 py-4 px-6 text-left">
              {item.name}
            </div>
            <div className="truncate col-span-2 py-4 px-6 text-left">
              {item.date}
            </div>
            <div className="truncate col-span-1 py-4 px-6 text-left">
              {item.views}
            </div>
            <div className="truncate col-span-1 py-4 px-6 text-left">
              {item.likes}
            </div>
            <div className="truncate col-span-1 py-4 px-6 text-left">
              {item.dislikes}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;
