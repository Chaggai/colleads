import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Step2 = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="grid grid-rows-6">
      <div className="row-span-1 mb-4">
        <h1>{t("signup.stepTwo.title")}</h1>
        <p>{t("signup.stepTwo.message")}</p>
      </div>
      <div className="row-span-4">
        <input
          className="input"
          type="text"
          placeholder={`${t("signup.input.firstname")}`}
        />
        <input
          className="input"
          type="text"
          placeholder={`${t("signup.input.lastname")}`}
        />
        <select
          className="select"
          name="profession"
          defaultValue={"profession"}
          id="profession"
        >
          <option value="profession" disabled>
            {t("signup.stepTwo.profession")}
          </option>
          <option value="אחד">אחד</option>
          <option value="שתיים">שתיים</option>
          <option value="שלוש">שלוש</option>
        </select>
        <input
          className="input"
          type="text"
          placeholder={`${t("signup.input.licenseNumber")}`}
        />
        <figure className="flex justify-between">
          <input
            className="input"
            type="text"
            placeholder={`${t("signup.input.phoneNumber")}`}
          />
          <select
            className="select w-28"
            name="profession"
            id="profession"
            defaultValue={"050"}
          >
            <option value="050">050</option>
            <option value="052">052</option>
            <option value="054">054</option>
          </select>
        </figure>
      </div>
      <button
        onClick={() => navigate("/signup/3")}
        className="btn row-span-1 h-16 bg-site-lightblue text-white"
      >
        {t("signup.stepTwo.button")}
      </button>
    </div>
  );
};
export default Step2;
