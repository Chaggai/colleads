import { t } from "i18next";
import { useNavigate } from "react-router-dom";

import TitleWithMessage from "../TitleWithMessage";

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
        <button
          onClick={() => navigate("/signup/2")}
          className="btn relative mb-6 h-14 w-full bg-white after:absolute after:left-4 after:top-1 after:pt-1.5 after:content-google"
        >
          {t("signup.stepOne.withGoogle")}
        </button>
        <button
          onClick={() => navigate("/signup/2")}
          className="btn relative mb-6 h-14 w-full bg-white after:absolute after:left-4 after:top-1 after:pt-1.5 after:content-facebook"
        >
          {t("signup.stepOne.withFacebook")}
        </button>
        <button
          onClick={() => navigate("/signup/2")}
          className="btn relative mb-6 h-14 w-full bg-white after:absolute after:left-4 after:top-1 after:pt-1.5 after:content-apple"
        >
          {t("signup.stepOne.withApple")}
        </button>
      </div>
      <div className="mb-20">
        <label className="mb-4 block">
          {/* TODO: Move text to i18n */}
          <input className="ml-3" type="checkbox" />
          קראתי ואישרתי את{" "}
          <a className="text-site-lightblue" href="#">
            תנאי השימוש{" "}
          </a>
          ואת{" "}
          <a className="text-site-lightblue" href="#">
            תנאי הפרטיות
          </a>
        </label>
        <label className="block">
          <input className="ml-3" type="checkbox" />
          אשמח לקבל עדכונים וטיפים למייל
        </label>
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
