import { useEffect } from "react";
import Avatar from "../Avatar";
import { useNavigate } from "react-router-dom";

import data from "../../../public/data/colleagues.json";

const Step4 = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => navigate("/first-time"), 5000);
  }, [navigate]);
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="mb-4 flex">
        <Avatar
          className="relative -left-2 z-0 h-[68px] w-[68px]"
          borderColor="border-site-bg"
          image={data[0].image}
          name={data[0].name}
        />
        <Avatar
          borderColor="relative border-site-bg h-[68px] w-[68px] z-1"
          image={data[1].image}
          name={data[1].name}
        />
        <Avatar
          className="z-2 relative -right-2 h-[68px] w-[68px]"
          borderColor="border-site-bg"
          image={data[6].image}
          name={data[6].name}
        />
      </div>
      <strong>בחירה מעולה!</strong>
    </div>
  );
};
export default Step4;
