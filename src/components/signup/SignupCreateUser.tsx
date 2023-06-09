import { t } from "i18next";
// import { useNavigate } from "react-router-dom";

import TitleWithMessage from "../TitleWithMessage";
import Input from "../Controlls/Input";
import Select from "../Controlls/Select";
import Button from "../Controlls/Button";
import { useUpdateDocument } from "../../hooks/useUpdateDocument";
import { IUserDetails } from "./SignupWith";
import { FormEvent } from "react";
import { auth } from "../../configs/firebase";

const SignupCreateUser = () => {
  // const navigate = useNavigate();

  const { updateDocument } =
    useUpdateDocument<Omit<IUserDetails, "reciveNewsletter">>("Users");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const phoneNumber = `${e.currentTarget.phonePrefix.value}-${e.currentTarget.phoneNumber.value}`;

    const userDetails: Omit<IUserDetails, "reciveNewsletter"> = {
      id: auth.currentUser?.uid as string,
      firstname: e.currentTarget.firstname.value,
      lastname: e.currentTarget.lastname.value,
      proffession: e.currentTarget.proffession.value,
      licenseNumber: e.currentTarget.licenseNumber.value,
      phoneNumber: phoneNumber,
    };

    updateDocument(userDetails);
  };

  const user = {
    firstname: auth.currentUser?.displayName?.split(" ")[0].trim(),
    lastname: auth.currentUser?.displayName?.split(" ")[1].trim(),
  };

  return (
    <div className="flex flex-col">
      <div className="mb-4">
        <TitleWithMessage h1={`${t("signup.stepTwo.title")}`}>
          <>{t("signup.stepTwo.message")}</>
        </TitleWithMessage>
      </div>
      <form className="mb-14" onSubmit={handleSubmit}>
        <Input
          className="w-full"
          type="text"
          name="firstname"
          value={user.firstname}
          placeholder={`${t("signup.input.firstname")}`}
        />
        <Input
          className="w-full"
          type="text"
          value={user.lastname}
          name="lastname"
          placeholder={`${t("signup.input.lastname")}`}
        />
        <Select
          options={["פסיכולוגיה", "עו״ס", "ריפוי בעיסוק", "קלינאות תקשורת"]}
          name="proffession"
          defaultValue={`${t("signup.stepTwo.profession")}`}
          className="w-full"
        />
        <Input
          className="w-full"
          type="text"
          name={"licenseNumber"}
          placeholder={`${t("signup.input.licenseNumber")}`}
        />
        <figure className="flex justify-between">
          <Input
            type="text"
            name="phoneNumber"
            placeholder={`${t("signup.input.phoneNumber")}`}
            className="ml-4 w-2/3"
          />
          <Select
            className="w-1/3"
            defaultValue="05x"
            options={["050", "052", "053"]}
            name="phonePrefix"
          />
        </figure>
        <Button
          label={t("signup.stepTwo.button")}
          className="btn h-[72px] bg-site-lightblue text-base text-white"
        />
      </form>
    </div>
  );
};
export default SignupCreateUser;
