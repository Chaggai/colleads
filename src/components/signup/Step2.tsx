import { t } from "i18next";
import { useNavigate } from "react-router-dom";

import TitleWithMessage from "../TitleWithMessage";
import Input from "../Controlls/Input";
import Select from "../Controlls/Select";

const Step2 = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      <div className="mb-4">
        <TitleWithMessage
          title={t("signup.stepTwo.title")}
          message={t("signup.stepTwo.message")}
        />
      </div>
      <div className="mb-14">
        <Input type="text" placeholder={`${t("signup.input.firstname")}`} />
        <Input type="text" placeholder={`${t("signup.input.lastname")}`} />
        <Select
          options={["1", "2", "3", "4"]}
          defaultValue={`${t("signup.stepTwo.profession")}`}
        />
        <Input type="text" placeholder={`${t("signup.input.licenseNumber")}`} />
        <figure className="flex justify-between">
          <Input
            className="w-48"
            type="text"
            placeholder={`${t("signup.input.phoneNumber")}`}
          />
          <Select
            defaultValue="05x"
            options={["050", "052", "053"]}
            className="w-24"
          />
        </figure>
      </div>
      <button
        onClick={() => navigate("/signup/3")}
        className="btn h-[72px] bg-site-lightblue text-white"
      >
        {t("signup.stepTwo.button")}
      </button>
    </div>
  );
};
export default Step2;
