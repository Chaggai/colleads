import CreateLeadButton from "../components/Friends/CreateReferenceButton";
import Reference, { TReference } from "../components/Reference";

import data from "../../public/data/references.json";

const FirstTime = () => {
  const references: TReference[] = data;

  return (
    <div className="p-7">
      <CreateLeadButton />
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
      <div className="flex items-end">
        <i className="before:content-pin"></i>
        <span className="mr-4">לוח הפניות ציבורי</span>
        <i className="mr-auto before:content-tune"></i>
      </div>
      <div className="mt-4 flex max-h-[550px] flex-wrap gap-4 overflow-y-scroll">
        {references.map((ref) => (
          <Reference key={ref.id} reference={ref} />
        ))}
      </div>
    </div>
  );
};
export default FirstTime;
