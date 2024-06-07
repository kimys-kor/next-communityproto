"use client";

import React, { useState } from "react";

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="container mx-auto my-4 ">
      <div className="flex gap-3">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`rounded-md text-white text-lg py-2 px-4 font-medium ${
              activeTab === index ? "text-blue-500" : "text-gray-500"
            } focus:outline-none bg-gradient-to-r from-blue-600 to-violet-600 `}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4">{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tabs;
