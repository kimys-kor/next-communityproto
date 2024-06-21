"use client";
import { Fragment, useState } from "react";
import { Select, Option } from "@material-tailwind/react";

type Option = {
  value: string;
  label: string;
};

type SelectProps = {
  options: Option[];
  onChange: (value: string) => void;
  defaultValue?: string;
};

const SelectBox: React.FC<SelectProps> = ({
  options,
  onChange,
  defaultValue = "",
}) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedValue(value);
    onChange(value);
  };

  return (
    <div className="w-full flex">
      <select
        value={selectedValue}
        onChange={handleChange}
        className="block w-32 h-7  text-[13px] border-solid rounded-sm border-slate-300 border focus:outline-none   "
        // 포커스 되었을 때 스타일 추가
        onFocus={(e) =>
          e.currentTarget.classList.add("ring-2", "ring-indigo-500")
        }
        onBlur={(e) =>
          e.currentTarget.classList.remove("ring-2", "ring-indigo-500")
        }
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none z-0">
        <svg
          className="w-5 h-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>
    </div>
  );
};

export default SelectBox;
