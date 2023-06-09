import { t } from "i18next";
import { useNavigate } from "react-router-dom";

import TitleWithMessage from "../TitleWithMessage";
import Input from "../Controlls/Input";
import Select from "../Controlls/Select";
import Button from "../Controlls/Button";

const Step2 = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      <div className="mb-4">
        <TitleWithMessage h1={`${t("signup.stepTwo.title")}`}>
          <>{t("signup.stepTwo.message")}</>
        </TitleWithMessage>
      </div>
      <div className="mb-14">
        <Input
          className="w-full"
          type="text"
          placeholder={`${t("signup.input.firstname")}`}
        />
        <Input
          className="w-full"
          type="text"
          placeholder={`${t("signup.input.lastname")}`}
        />
        <Select
          options={["1", "2", "3", "4"]}
          defaultValue={`${t("signup.stepTwo.profession")}`}
          className="w-full"
        />
        <Input
          className="w-full"
          type="text"
          placeholder={`${t("signup.input.licenseNumber")}`}
        />
        <figure className="flex justify-between">
          <Input
            type="text"
            placeholder={`${t("signup.input.phoneNumber")}`}
            className="ml-4 w-2/3"
          />
          <Select
            className="w-1/3"
            defaultValue="05x"
            options={["050", "052", "053"]}
          />
        </figure>
      </div>
      <Button
        label={t("signup.stepTwo.button")}
        click={() => navigate("/signup/3")}
        className="btn h-[72px] bg-site-lightblue text-base text-white"
      />
    </div>
  );
};
export default Step2;
