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
    <div className="w-full container mx-auto p-3">
      <div className="flex justify-center">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`outline outline-slate-300 outline-1 cursor-pointer text-base py-2 px-4 font-medium transition-all duration-300
              ${
                activeTab === index
                  ? "text-white bg-purple-600 border-b-4 border-purple-800 transform scale-105"
                  : "text-gray-700 "
              }
              ${index === 0 ? "rounded-l-md" : ""}
              ${index === tabs.length - 1 ? "rounded-r-md" : ""}
              ${index !== tabs.length - 1 ? "border-r border-white" : ""}
            `}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className="text-sm w-full mt-4 p-4">
        {tabs[activeTab].content.map((title, index) => (
          <div
            key={index}
            className={` flex gap-2 items-center p-2 ${
              index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"
            }`}
          >
            <NewIcon />
            <HotIcon />
            <div className="text-xs">{title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
