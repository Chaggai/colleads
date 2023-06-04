import { t } from "i18next";
import Input from "../Controlls/Input";
import Select from "../Controlls/Select";
import Checkbox from "../Controlls/Checkbox";
import Button from "../Controlls/Button";

const Step2 = () => {
  return (
    <div className="flex flex-col items-center pt-24">
      <img src="/brand-collapse.svg" className="mb-16 w-[116px]" alt="" />
      <figure className="mb-8 flex justify-between">
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
      <Checkbox label="השאר אותי מחובר במכשיר זה" />
      <Button
        label="שליחה"
        className="mb-8 mt-56 h-[72px] w-full bg-site-lightblue text-white"
      />
      <div className="text-center">
        אין לך חשבון?{" "}
        <a className="text-site-lightblue" href="#">
          ההרשמה מכאן
        </a>
      </div>
    </div>
  );
};
export default Step2;
