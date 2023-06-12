import { t } from "i18next";
import { ChangeEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import Button from "../Controlls/Button";
import TitleWithMessage from "../TitleWithMessage";
import { IUserDetails } from "./SignupWith";
import { useUpdateDocument } from "../../hooks/useUpdateDocument";
import { auth } from "../../configs/firebase";
import LoadingPage from "../../pages/LoadingPage";

import profesions from "../../data/professions.json";

type IFormInput = {
  firstname: string;
  lastname: string;
  profession: string;
  licenseNumber: number;
  phoneNumber: number;
  phonePrefix: number;
};

const CreateUser = () => {
  const navigate = useNavigate();

  const { updateDocument, error, isUpdating } =
    useUpdateDocument<Omit<IUserDetails, "reciveNewsletter">>("Users");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const userDetails: Omit<IUserDetails, "reciveNewsletter"> = {
      id: auth.currentUser?.uid as string,
      firstname: data.firstname,
      lastname: data.lastname,
      profession: data.profession,
      licenseNumber: data.licenseNumber,
      phoneNumber: `${data.phonePrefix}-${data.phoneNumber}`,
    };

    try {
      await updateDocument(userDetails);
      navigate("/signup/4");
    } catch (error) {
      console.log(error);
    }
  };

  const [selectedProfession, setSelectedProfession] = useState("");
  const handleProfessionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedProfession(event.target.value);
  };
  const [selectedPrefix, setSelectedPrefix] = useState("");
  const handlePrefixChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedPrefix(event.target.value);
  };

  return (
    <>
      {isUpdating && <LoadingPage />}
      {error ? (
        <span className="-mt-3 mb-4 mr-4 text-red-400">{error}</span>
      ) : null}
      <div className="flex flex-col">
        <div className="mb-4">
          <TitleWithMessage h1={`${t("signup.stepTwo.title")}`}>
            <>{t("signup.stepTwo.message")}</>
          </TitleWithMessage>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <input
            className={`input ${errors.firstname ? "error" : ""}`}
            type="text"
            placeholder="שם פרטי"
            {...register("firstname", { required: true })}
          />
          {errors.firstname && (
            <span className="-mt-3 mb-4 mr-4 text-red-400">
              נא להזין שם פרטי
            </span>
          )}

          <input
            className={`input ${errors.firstname ? "error" : ""}`}
            type="text"
            placeholder="שם משפחה"
            {...register("lastname", { required: true })}
          />
          {errors.lastname && (
            <span className="-mt-3 mb-4 mr-4 text-red-400">
              נא להזין שם משפחה
            </span>
          )}
          <select
            {...register("profession", { required: true })}
            className={`mb-[18px] h-[57px] w-full rounded-full bg-white px-4 ${
              errors.profession ? "border border-red-400" : ""
            } ${selectedProfession ? "text-black" : "text-gray-400"}`}
            value={selectedProfession}
            onChange={handleProfessionChange}
          >
            <option value="" disabled hidden>
              מקצוע טיפולי
            </option>
            {profesions.map((prof) => (
              <option key={prof} value={prof}>
                {prof}
              </option>
            ))}
          </select>
          {errors.profession && (
            <span className="-mt-3 mb-4 mr-4 text-red-400">
              נא לבחור מקצוע טיפולי
            </span>
          )}
          <input
            className={`input ${errors.firstname ? "error" : ""}`}
            type="number"
            placeholder="מספר רשיון"
            {...register("licenseNumber", { required: true })}
          />
          {errors.licenseNumber && (
            <span className="-mt-3 mb-4 mr-4 text-red-400">
              נא להזין מספר רשיון
            </span>
          )}
          <figure className="flex justify-between gap-2">
            <input
              className={`input ${errors.firstname ? "error" : ""}`}
              type="number"
              placeholder="מספר טלפון"
              {...register("phoneNumber", {
                required: true,
                pattern: /^\d{7}$/i,
              })}
            />
            <select
              {...register("phonePrefix", { required: true })}
              className={`mb-[18px] h-[57px] w-1/3 rounded-full bg-white px-4 ${
                errors.phonePrefix ? "border border-red-400" : ""
              } ${selectedPrefix ? "text-black" : "text-gray-400"}`}
              value={selectedPrefix}
              onChange={handlePrefixChange}
            >
              <option value="" disabled hidden>
                05x
              </option>
              <option value="050">050</option>
              <option value="052">052</option>
              <option value="053">053</option>
              <option value="054">054</option>
            </select>
          </figure>
          {errors.phoneNumber?.type === "required" && (
            <span className="-mt-3 mb-4 mr-4 text-red-400">
              נא להזין מספר טלפון
            </span>
          )}
          {errors.phonePrefix && (
            <span className="-mt-3 mb-4 mr-4 text-red-400">
              נא לבחור קידומת
            </span>
          )}
          {errors.phoneNumber?.type === "pattern" && (
            <span className="-mt-3 mb-4 mr-4 text-red-400">
              נא להזין מס׳ טלפון תקין
            </span>
          )}

          <Button
            label={t("signup.stepTwo.button")}
            className="mt-auto h-[72px] w-full bg-site-lightblue text-base text-white"
          />
        </form>
      </div>
    </>
  );
};
export default CreateUser;
