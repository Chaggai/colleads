import { t } from "i18next";
import { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { auth, googleAuthProvider } from "../../configs/firebase";

import TitleWithMessage from "../TitleWithMessage";
import Checkbox from "../Controlls/Checkbox";
import LoginButton from "../Controlls/LoginButton";
import { useCreateDocument } from "../../hooks/useCreateDocument";

export interface IUserDetails {
  id: string;
  reciveNewsletter: boolean;
  firstname: string;
  lastname: string;
  proffession: string;
  licenseNumber: string;
  phoneNumber: string;
}

const SignupWith = () => {
  const [error, setError] = useState<string | null>(null);
  const [termsChecked, setTermsChecked] = useState<boolean>(false);
  const [newsletterChecked, setNewsletterChecked] = useState<boolean>(false);

  const navigate = useNavigate();

  const { createDocument } =
    useCreateDocument<Pick<IUserDetails, "id" | "reciveNewsletter">>("Users");

  const handleGoogleClick = async () => {
    try {
      if (!termsChecked) {
        return setError(t("signup.error.checkTerms"));
      }

      await signInWithPopup(auth, googleAuthProvider);

      if (auth?.currentUser?.uid) {
        createDocument({
          id: auth?.currentUser?.uid,
          reciveNewsletter: newsletterChecked,
        });
      }

      navigate("/signup/2");
    } catch (error) {
      setError(`${error}`);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="mb-20">
        <TitleWithMessage h1={`${t("signup.stepOne.title")}`}>
          <>{t("signup.stepOne.subTitle")}</>
        </TitleWithMessage>
      </div>
      <div className="mb-10">
        <LoginButton logo={"google"} click={handleGoogleClick} />
        <LoginButton logo={"facebook"} click={() => navigate("/signup/2")} />
        <LoginButton logo={"apple"} click={() => navigate("/signup/2")} />
      </div>
      <div className="mb-20">
        <Checkbox
          className="mb-4"
          checked={termsChecked}
          onCheck={setTermsChecked}
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

        <Checkbox
          checked={newsletterChecked}
          onCheck={setNewsletterChecked}
          label="אשמח לקבל עדכונים וטיפים למייל"
        />
        {error ? (
          <div className="mt-4 text-center text-sm text-red-400">{error}</div>
        ) : null}
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
export default SignupWith;
