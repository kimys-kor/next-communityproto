"use client";

import { useState } from "react";
import NewIcon from "./NewIcon";
import HotIcon from "./HotIcon";

type Tab = {
  label: string;
  content: string[];
};

const Tabs: React.FC<{ tabs: Tab[] }> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full container flex flex-col gap-6">
      {/* button */}
      <div className="flex justify-start">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`cursor-pointer text-sm px-4 transition-all border-b-2 border-solid  hover:text-pink-500
              ${
                activeTab === index
                  ? "text-pink-500 border-b-2 border-rose-500 border-solid"
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
      <div className="text-sm w-full ">
        {tabs[activeTab].content.map((title, index) => (
          <div
            key={index}
            className="px-3 flex justify-between hover:bg-slate-200 hover:cursor-pointer border-b border-solid border-slate-200"
          >
            <div className={`flex gap-2 items-center p-2`}>
              <NewIcon />
              <HotIcon />
              <div className="text-xs">{title}</div>
            </div>
            <div className="flex justify-center items-center">06-13</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
