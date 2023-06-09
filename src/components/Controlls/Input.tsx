import { useState } from "react";

type Props = {
  type: "text" | "password" | "email" | "number";
  value?: string;
  name: string;
  placeholder: string;
  className?: string;
};
const Input = ({ placeholder, type, value, name, className }: Props) => {
  const [currentValue, setCurrentValue] = useState(value);
  return (
    <input
      className={`mb-[18px] h-[57px] rounded-full bg-white px-4 ${
        className ? className : ""
      }`}
      value={currentValue}
      onChange={(e) => setCurrentValue(e.target.value)}
      name={name}
      type={type}
      placeholder={placeholder}
    />
  );
};
export default Input;
