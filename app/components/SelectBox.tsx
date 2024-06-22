import { useState } from "react";

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
    <div className="relative w-32 h-[1.75rem]">
      <select
        value={selectedValue}
        onChange={handleChange}
        className="w-full h-full box-border block text-xs border text-slate-500 border-gray-300 rounded-sm focus:outline-none focus:border-indigo-500 text-red"
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
    </div>
  );
};

export default SelectBox;
