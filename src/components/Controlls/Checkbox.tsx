import { useState } from "react";
import SvgIcon from "../SvgIcon";

type Props = {
  checked?: boolean;
  label?: string | JSX.Element;
  className?: string;
};
const Checkbox = ({ label, checked = false, className }: Props) => {
  const [isChecked, setIsChecked] = useState(checked);

  return (
    <label className={`flex ${className ? className : ""}`}>
      <input
        className="hidden"
        onChange={() => setIsChecked(!isChecked)}
        checked={isChecked}
        type="checkbox"
      />
      {isChecked ? (
        <SvgIcon name="checkbox-checked" className="ml-4" />
      ) : (
        <SvgIcon name="checkbox" className="ml-4" />
      )}
      {label && <span>{label}</span>}
    </label>
  );
};
export default Checkbox;
