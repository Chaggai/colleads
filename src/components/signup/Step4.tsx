import { useEffect } from "react";
import Avatar from "../Avatar";
import { useNavigate } from "react-router-dom";

const Step4 = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => navigate("/first-time"), 5000);
  }, [navigate]);
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="mb-4 flex">
        <Avatar
          className="relative -left-1 border"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/1280px-Outdoors-man-portrait_%28cropped%29.jpg"
          name="Avner Gadasias"
        />
        <Avatar
          className="border"
          image="https://www.lofficielusa.com/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F39109%2F1611085012-1609881742604438-modelo.jpg%3Fauto%3Dformat%252Ccompress%26cs%3Dsrgb&w=3840&q=75"
          name="Avner Gadasias"
        />
        <Avatar
          className="relative -right-1 border"
          image="https://imglarger.com/Images/before-after/ai-image-enlarger-1-after-2.jpg"
          name="Avner Gadasias"
        />
      </div>
      <strong>בחירה מעולה!</strong>
    </div>
  );
};
export default Step4;
