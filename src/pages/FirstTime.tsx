import SvgIcon from "../components/SvgIcon";
import CreateReferenceButton from "../components/Colleagues/CreateReferenceButton";
import TitleWithMessage from "../components/TitleWithMessage";
import ReferenceList from "../components/References/ReferenceList";

const FirstTime = () => {
  return (
    <div className="p-5 pb-0">
      <CreateReferenceButton />
      <div className="mb-10 text-center">
        <TitleWithMessage h1="היי יעל," h2="איזה כיף שהצטרפת אלינו!" />
      </div>
      <div className="mb-6 flex items-end">
        <SvgIcon name="pin" className="relative -top-1" />
        <span className="mr-4">לוח הפניות ציבורי</span>
        <button className="mr-auto">
          <SvgIcon name="tune" />
        </button>
      </div>
      <ReferenceList />
    </div>
  );
};
export default FirstTime;
