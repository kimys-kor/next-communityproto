import React from "react";

interface imgContent {
  img: string;
}
[];

function HomeBanner() {
  const imgContent: imgContent[] = [
    { img: "/images/homebanner/1.jpg" },
    { img: "/images/homebanner/2.png" },
    { img: "/images/homebanner/3.jpg" },
    { img: "/images/homebanner/4.jpg" },
    { img: "/images/homebanner/5.jpg" },
    { img: "/images/homebanner/6.jpg" },
  ];

  return (
    <main className="w-full h-auto px-12 py-11 bg-white/25 rounded-2xl shadow-md flex flex-col gap-4 items-center">
      <h1 className="text-3xl">먹튀타파 공식 보증업체</h1>
      <ul className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3">
        {imgContent.map((item, index) => (
          <li>
            <img
              className="w-full h-auto"
              src={item.img}
              alt={`homeBanner ${index + 1}`}
            />
          </li>
        ))}
        {imgContent.map((item, index) => (
          <li>
            <img
              className="w-full h-auto"
              src={item.img}
              alt={`homeBanner ${index + 1}`}
            />
          </li>
        ))}
        {imgContent.map((item, index) => (
          <li>
            <img
              className="w-full h-auto"
              src={item.img}
              alt={`homeBanner ${index + 1}`}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default HomeBanner;
