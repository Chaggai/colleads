import data from "../../data/references.json";
import Reference, { TReference } from "./Reference";

const ReferenceList = () => {
  const references: TReference[] = data;
  return (
    <div className="flex max-h-[550px] flex-wrap gap-3 overflow-y-scroll p-1">
      {/* <div className="flex flex-wrap gap-3 p-1"> */}
      {references.map((ref) => (
        <Reference key={ref.id} reference={ref} />
      ))}
    </div>
  );
};
export default ReferenceList;
