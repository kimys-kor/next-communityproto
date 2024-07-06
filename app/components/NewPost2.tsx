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
    <div className="truncate w-full bg-white rounded-2xl flex flex-col gap-5 border border-solid border-gray-200">
      <div className="w-full flex flex-col">
        {/* button */}
        <div className="h-12 px-3 flex justify-start items-center gap-1 rounded-t bg-[#FAFAFA]">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`border-solid border rounded-2xl cursor-pointer font-semibold text-sm px-2 py-1 transition-all hover:text-[#3461FF]
                ${activeTab === index ? "text-[#3461FF] border-[#3461FF] bg-[#F2F5FF]" : "text-[#999999] border-[#999999]"}
            `}
              onClick={() => setActiveTab(index)}
            >
              <div className="flex justify-center items-center gap-1">
                {tab.label}
              </div>
            </div>
          ))}
        </div>
        {/* content */}
        <div className="text-sm w-full p-3">
          {activeTab === 0 ? (
            <div className="grid grid-cols-4 gap-4 delay-500">
              {(tabs[0].content as TabContent).map((item, index) => (
                <div key={index} className="flex flex-col items-center ">
                  <img
                    className="w-full h-auto"
                    src={item.img}
                    alt={`Dog ${index + 1}`}
                  />
                  <div className="mt-2 text-center">
                    <div className="text-sm font-semibold">{item.title}</div>
                    <div className="text-sm text-gray-500">{item.date}</div>
                    <div className="text-sm text-gray-500">{item.writer}</div>
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
