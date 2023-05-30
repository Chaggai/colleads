import { useNavigate } from "react-router-dom";

const Step3 = () => {
  const navigate = useNavigate();
  return (
    <div>
      צעד שלישי
      <br />
      <button
        className="btn mx-1 bg-site-green"
        onClick={() => navigate("/signup/2")}
      >
        הקודם
      </button>
    </div>
  );
};
export default Step3;
