import Reference, { TReference } from "../components/Reference";

import data from "../../public/data/references.json";
import SvgIcon from "../components/SvgIcon";
import CreateReferenceButton from "../components/Colleagues/CreateReferenceButton";

const FirstTime = () => {
  const references: TReference[] = data;

  return (
    <div className="p-7 pb-0">
      <CreateReferenceButton />
      <div className="mb-10 text-center">
        <h1 className="mb-2 text-xl font-bold">היי יעל,</h1>
        <h2 className="mb-2 font-bold">איזה כיף שהצטרפת אלינו!</h2>
        <p className="text-sm">
          בכפתור למעלה אפשר ליצור הפניות חדשות,
          <br /> פה למטה אפשר לצפות בלוח ההפניות הציבורי
          <br /> ובסרגל שבתחתית המסך יש עוד הרבה
          <br /> אפשרויות בשבילך...
        </p>
      </div>
      <div className="mb-6 flex items-end">
        <button className="relative -top-1">
          <SvgIcon name="pin" />
        </button>
        <span className="mr-4">לוח הפניות ציבורי</span>
        <button className="mr-auto">
          <SvgIcon name="tune" />
        </button>
      </div>
      <div className="flex max-h-[550px] flex-wrap gap-2 overflow-y-scroll pb-1">
        {references.map((ref) => (
          <Reference key={ref.id} reference={ref} />
        ))}
      </div>
    </div>
  );
};
export default FirstTime;
