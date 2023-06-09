import { Dispatch, SetStateAction } from "react";
import SvgIcon from "../SvgIcon";

type Props = {
  checked?: boolean;
  onCheck: Dispatch<SetStateAction<boolean>>;
  label?: string | JSX.Element;
  className?: string;
};
const Checkbox = ({ label, checked = false, className, onCheck }: Props) => {
  return (
    <label className={`flex items-start ${className ? className : ""}`}>
      <input
        className="hidden"
        onChange={() => onCheck(!checked)}
        checked={checked}
        type="checkbox"
      />
      {checked ? (
        <SvgIcon name="checkbox-checked" className="ml-4" />
      ) : (
        <SvgIcon name="checkbox" className="ml-4" />
      )}
      {label && <span>{label}</span>}
    </label>
  );
};
export default Checkbox;
