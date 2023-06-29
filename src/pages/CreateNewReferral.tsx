import { useNavigate } from "react-router-dom";
import SvgIcon from "../components/SvgIcon";
import CreateNewReferralForm from "../components/Forms/CreateNewReferralForm";

const CreateNewReferral = () => {
  const navigate = useNavigate();

  return (
    <main>
      <header className="relative flex h-header items-center justify-center bg-white ">
        <button className="absolute right-4" onClick={() => navigate(-1)}>
          <SvgIcon name="chevron-right" />
        </button>
        יצירת הפניה
      </header>
      <section className="p-7">
        <p className="mt-6 text-center">
          ההפניה תופיע במסך ההפניות שלך ויהיה ניתן לשלוח ולערוך אותה בכל עת
        </p>
        <SvgIcon className="m-auto mt-6 h-28" name="document-with-stars" />
        <CreateNewReferralForm />
      </section>
    </main>
  );
};
export default CreateNewReferral;
