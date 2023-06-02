import { useState } from "react";

type Props = {
  checked?: boolean;
  label?: string | JSX.Element;
  className?: string;
  iconClassName?: string;
};
const Checkbox = ({
  label,
  checked = false,
  className,
  iconClassName,
}: Props) => {
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
        <i
          className={`after:content-checkbox-checked ${
            iconClassName ? iconClassName : ""
          }`}
        />
      ) : (
        <i
          className={`after:content-checkbox ${
            iconClassName ? iconClassName : ""
          }`}
        />
      )}
      {label && <span>{label}</span>}
    </label>
  );
};
export default Checkbox;
