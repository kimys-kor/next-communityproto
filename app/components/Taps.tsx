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
    <div className="container mx-auto my-4">
      <h1 className="text-3xl font-bold mb-4">Modern Tabs</h1>
      <div className="flex">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`text-lg py-2 px-4 font-medium ${
              activeTab === index ? "text-blue-500" : "text-gray-500"
            } focus:outline-none`}
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
