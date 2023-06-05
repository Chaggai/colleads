import { t } from "i18next";
import { useNavigate } from "react-router-dom";

import TitleWithMessage from "../TitleWithMessage";
import Checkbox from "../Controlls/Checkbox";
import LoginButton from "../Controlls/LoginButton";

const Step1 = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      <div className="mb-20">
        <TitleWithMessage h1={`${t("signup.stepOne.title")}`}>
          <>{t("signup.stepOne.subTitle")}</>
        </TitleWithMessage>
      </div>
      <div className="mb-10">
        <LoginButton logo={"google"} click={() => navigate("/signup/2")} />
        <LoginButton logo={"facebook"} click={() => navigate("/signup/2")} />
        <LoginButton logo={"apple"} click={() => navigate("/signup/2")} />
      </div>
      <div className="mb-20">
        <Checkbox
          className="mb-4"
          label={
            <>
              קראתי ואישרתי את{" "}
              <a className="text-site-lightblue" href="#">
                תנאי השימוש{" "}
              </a>
              ואת <br />
              <a className="text-site-lightblue" href="#">
                תנאי הפרטיות
              </a>
            </>
          }
        />

        <Checkbox label="אשמח לקבל עדכונים וטיפים למייל" />
      </div>
      <div className="text-center">
        כבר נרשמת?{" "}
        <a className="text-site-lightblue" href="#">
          הכניסה מכאן
        </a>
      </div>
    </div>
  );
};
export default Step1;
