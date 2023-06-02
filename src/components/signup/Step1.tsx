import { t } from "i18next";
import { useNavigate } from "react-router-dom";

import TitleWithMessage from "../TitleWithMessage";
import Checkbox from "../Controlls/Checkbox";
import Button from "../Controlls/Button";

const Step1 = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      <div className="mb-20">
        <TitleWithMessage
          title={t("signup.stepOne.title")}
          message={t("signup.stepOne.subTitle")}
        />
      </div>
      <div className="mb-10">
        <Button
          label={t("signup.stepOne.withGoogle")}
          click={() => navigate("/signup/2")}
          className="btn relative mb-6 h-14 w-full bg-white after:absolute after:left-4 after:top-1 after:pt-1.5 after:content-google"
        />
        <Button
          label={t("signup.stepOne.withFacebook")}
          click={() => navigate("/signup/2")}
          className="btn relative mb-6 h-14 w-full bg-white after:absolute after:left-4 after:top-1 after:pt-1.5 after:content-facebook"
        />
        <Button
          label={t("signup.stepOne.withApple")}
          click={() => navigate("/signup/2")}
          className="btn relative mb-6 h-14 w-full bg-white after:absolute after:left-4 after:top-1 after:pt-1.5 after:content-apple"
        />
      </div>
      <div className="mb-20">
        <Checkbox
          className="mb-4"
          iconClassName="ml-6"
          label={
            <>
              קראתי ואישרתי את{" "}
              <a className="text-site-lightblue" href="#">
                תנאי השימוש{" "}
              </a>
              ואת{" "}
              <a className="text-site-lightblue" href="#">
                תנאי הפרטיות
              </a>
            </>
          }
        />

        <Checkbox iconClassName="ml-6" label="אשמח לקבל עדכונים וטיפים למייל" />
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
