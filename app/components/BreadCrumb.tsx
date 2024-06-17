import React from "react";

interface BreadcrumbItem {
  title: string;
  subMenu: string[];
}

interface BreadcrumbProps {
  breadcrumbData: BreadcrumbItem;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ breadcrumbData }) => {
  return (
    <nav className="w-full bg-white/25 rounded-2xl shadow-md flex items-center">
      <div className="h-12 font-bold bg-indigo-400 w-1/5 rounded-l-2xl flex justify-center items-center text-white">
        <p className="tracking-wider text-[1.25rem] font-light">
          {breadcrumbData.title}
        </p>
      </div>
      <div className="border-solid border-indigo-400 border-4 w-4/5 h-12 flex items-center rounded-r-2xl gap-3 pl-4">
        {breadcrumbData.subMenu.map((item, index) => (
          <span key={index} className="text-gray-700">
            {item}
          </span>
        ))}
      </div>
    </nav>
  );
};

export default Breadcrumb;
