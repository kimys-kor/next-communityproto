"use client";

import { useState } from "react";

type TabContent = {
  title: string;
  img: string;
  date: string;
  writer: string;
}[];

type Tab = {
  label: string;
  content: TabContent | string[];
};

const NewPost2: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs: Tab[] = [
    {
      label: "안구정화",
      content: [
        {
          title: "웰시코기",
          img: "/images/dog1.PNG",
          date: "06-12",
          writer: "커뮤관리자",
        },
        {
          title: "푸들",
          img: "/images/dog2.PNG",
          date: "06-12",
          writer: "커뮤관리자",
        },
        {
          title: "말티즈",
          img: "/images/dog3.PNG",
          date: "06-12",
          writer: "커뮤관리자",
        },
        {
          title: "말티즈",
          img: "/images/dog4.PNG",
          date: "06-12",
          writer: "커뮤관리자",
        },
      ],
    },
    {
      label: "이벤트",
      content: ["야구1", "야구2", "야구3", "야구4", "야구5"],
    },
    {
      label: "자유게시판",
      content: ["농구1", "농구2", "농구3", "농구4", "농구6"],
    },
    {
      label: "분석왕",
      content: ["배구1", "배구2", "배구3", "배구4", "배구5"],
    },
  ];

  return (
    <div className="container w-full bg-white rounded-2xl shadow-md p-5 flex flex-col gap-5">
      <div className="w-full container flex flex-col gap-6">
        {/* button */}
        <div className="flex justify-start">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`truncate cursor-pointer text-sm px-4 transition-all border-b-2 border-solid hover:text-blue-500
              ${
                activeTab === index
                  ? "text-blue-500 border-b-2 border-blue-500 border-solid"
                  : "text-gray-700 border-transparent"
              }
            `}
              onClick={() => setActiveTab(index)}
            >
              {tab.label}
            </div>
          ))}
        </div>
        {/* content */}
        <div className="text-sm w-full">
          {activeTab === 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 delay-500">
              {(tabs[0].content as TabContent).map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    className="w-full h-auto"
                    src={item.img}
                    alt={`Dog ${index + 1}`}
                  />
                  <div className="mt-2 text-center">
                    <div className="text-xs font-bold">{item.title}</div>
                    <div className="text-xs text-gray-500">{item.date}</div>
                    <div className="text-xs text-gray-500">{item.writer}</div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            (tabs[activeTab].content as string[]).map((title, index) => (
              <div
                key={index}
                className="px-3 flex justify-between hover:bg-slate-200 hover:cursor-pointer border-b border-solid border-slate-200"
              >
                <div className="flex gap-2 items-center p-2">
                  <div className="text-xs">{title}</div>
                </div>
                <div className="flex justify-center items-center">06-13</div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default NewPost2;
