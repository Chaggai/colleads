import { useState } from "react";

type Props = {
  options: string[];
  defaultValue: string;
  className?: string;
};
const Select = ({ options, className, defaultValue }: Props) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <select
      className={`mb-[18px] h-[57px] w-full rounded-full bg-white px-4 selection:text-red-400 ${
        isSelected ? "text-black" : "text-gray-400"
      } ${className ? className : ""}`}
      name="profession"
      id="profession"
      onChange={() => setIsSelected(true)}
    >
      <option disabled selected>
        {defaultValue}
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
export default Select;
