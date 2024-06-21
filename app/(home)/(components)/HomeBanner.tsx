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
    <main className="w-full h-auto bg-white/25 rounded-2xl shadow-md flex flex-col items-center ">
      <div className="w-full flex justify-center items-center gap-5 py-3">
        <span className="text-3xl  text-indigo-500 ">먹튀타파</span>
        <span className="text-3xl  text-black ">공식 보증업체</span>
      </div>
      <ul className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 p-3">
        {imgContent.map((item, index) => (
          <li key={index}>
            <img
              className="w-full h-auto"
              src={item.img}
              alt={`homeBanner ${index + 1}`}
            />
          </li>
        ))}
        {imgContent.map((item, index) => (
          <li key={index}>
            <img
              className="w-full h-auto"
              src={item.img}
              alt={`homeBanner ${index + 1}`}
            />
          </li>
        ))}
        {imgContent.map((item, index) => (
          <li key={index}>
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
