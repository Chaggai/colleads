import { Link, useNavigate } from "react-router-dom";
import { t } from "i18next";

import FriendList from "../Friends/FriendList";
import TitleWithMessage from "../TitleWithMessage";

const Step3 = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      <div className="mb-4">
        <TitleWithMessage
          title={t("signup.stepThree.title")}
          message={t("signup.stepThree.message")}
        />
      </div>
      <div className="mb-6">
        <FriendList />
      </div>
      <button
        onClick={() => navigate("/signup/4")}
        className="btn h-[72px] bg-site-lightblue text-white"
      >
        {t("signup.stepThree.button")}
      </button>
      <Link
        className="mt-6 text-center font-bold text-site-lightblue"
        to="/loading"
      >
        דלג
      </Link>
    </div>
  );
};
export default Step3;
