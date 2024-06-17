import React from "react";
import Link from "next/link";

interface BreadcrumbItem {
  href: string;
  label: string;
}

interface BreadcrumbProps {
  breadcrumbItems: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ breadcrumbItems }) => {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center space-x-1">
        {breadcrumbItems.map((item, index) => (
          <li key={index} className="flex items-center">
            <Link href={item.href} passHref>
              <span
                className={`px-3 py-2 flex items-center justify-center bg-indigo-500 text-white rounded-l-md transition-colors duration-300 cursor-pointer ${
                  index === breadcrumbItems.length - 1
                    ? "bg-indigo-600 cursor-default"
                    : "hover:bg-indigo-700"
                }`}
              >
                {item.label}
              </span>
            </Link>
            {index < breadcrumbItems.length - 1 && (
              <div className="relative">
                <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-indigo-500"></div>
              </div>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
