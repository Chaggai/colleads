import { useState } from "react";
import SvgIcon from "../SvgIcon";

type Props = {
  label: string;
};
const FilterItem = ({ label }: Props) => {
  const [checked, setChecked] = useState(false);

  return (
    <label className="mb-4 flex items-start">
      <input
        className="hidden"
        onChange={() => setChecked(!checked)}
        checked={checked}
        type="checkbox"
      />
      {checked ? (
        <SvgIcon name="checkbox-rect-checked" className="ml-4 mt-1" />
      ) : (
        <SvgIcon name="checkbox-rect" className="ml-4 mt-1" />
      )}
      {label && <span>{label}</span>}
    </label>
  );
};
export default FilterItem;
