import Checkbox from "../Controlls/Checkbox";

type Props = {
  label: string;
};

const FilterItem = ({ label }: Props) => {
  return <Checkbox className="mb-4 items-center" label={label} />;
};
export default FilterItem;
