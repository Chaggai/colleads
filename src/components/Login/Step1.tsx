import { useNavigate } from "react-router-dom";
import LoginButton from "../Controlls/LoginButton";
import { t } from "i18next";

const Step1 = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center pt-24">
      <img src="/brand-collapse.svg" className="mb-16 w-[116px]" alt="" />
      <LoginButton
        logo="google"
        label={t("login.stepOne.withGoogle")}
        click={() => navigate("/login/2")}
      />
      <LoginButton
        logo="facebook"
        label={t("login.stepOne.withFacebook")}
        click={() => navigate("/")}
      />
      <LoginButton
        logo="apple"
        label={t("login.stepOne.withApple")}
        click={() => navigate("/")}
      />
      <div className="mt-40 text-center">
        אין לך חשבון?{" "}
        <a className="text-site-lightblue" href="#">
          ההרשמה מכאן
        </a>
      </div>
    </div>
  );
};
export default Step1;
