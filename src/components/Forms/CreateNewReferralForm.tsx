import { SubmitHandler, useForm } from "react-hook-form";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { useNavigate } from "react-router-dom";
import { useUpdateDocument } from "../../hooks/useUpdateDocument";
import { ChangeEvent, useState } from "react";

import data from "../../data/services.json";

type ILeadForm = {
  id: string;
  service: string;
  area: string;
  sector: string;
  forWho?: string;
  forAge?: number;
};

const CreateNewReferralForm = () => {
  const navigate = useNavigate();

  const [showFreeText, setshowFreeText] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;

    if (selectedValue === "התייעצות מקצועית (“אני רק שאלה”)") {
      setshowFreeText(true);
    } else {
      setshowFreeText(false);
    }
  };

  const { user } = useCurrentUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILeadForm>();

  const { updateDocument, error, isUpdating } = useUpdateDocument("Leads");

  const onSubmit: SubmitHandler<ILeadForm> = async (data) => {
    const newLead: ILeadForm = {
      id: "1234",
      service: data.service,
      area: data.area,
      sector: data.sector,
    };

    try {
      await updateDocument(newLead);
      navigate("/signup/4");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <select
        {...register("service", { required: true })}
        className="select"
        name="service"
        id="service"
        onChange={handleChange}
      >
        {data.services.map((service) =>
          typeof service === "object" ? (
            <optgroup label={service.title}>
              {service.items.map((item) => (
                <option value={item}>{item}</option>
              ))}
            </optgroup>
          ) : (
            <option value={service}>{service}</option>
          )
        )}
      </select>
      {showFreeText && (
        <textarea
          className="mb-[18px] min-h-[100px] w-full rounded-3xl bg-white p-4"
          placeholder="שאלה"
        />
      )}
    </form>
  );
};
export default CreateNewReferralForm;
