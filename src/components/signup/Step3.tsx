import { Link, useNavigate } from "react-router-dom";
import { t } from "i18next";

import TitleWithMessage from "../TitleWithMessage";
import Button from "../Controlls/Button";
import ColleagueList from "../Colleagues/ColleagueList";

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
        <ColleagueList />
      </div>
      <Button
        label={t("signup.stepThree.button")}
        click={() => navigate("/signup/4")}
        className="h-[72px] bg-site-lightblue text-white"
      />
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
