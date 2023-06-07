import { useNavigate } from "react-router-dom";
import Avatar from "../components/Avatar";
import SvgIcon from "../components/SvgIcon";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="absolute bottom-0 flex h-footer w-full items-center justify-between px-8">
      <button onClick={() => navigate("/profile")}>
        <Avatar
          className="h-[40px] w-[40px] border-none"
          name="אסף רפפורט"
          image="https://imglarger.com/Images/before-after/ai-image-enlarger-1-after-2.jpg"
        />
      </button>
      <button>
        <SvgIcon name="users" />
      </button>
      <button>
        <SvgIcon name="document" />
      </button>
      <button>
        <SvgIcon name="home" />
      </button>
    </footer>
  );
};
export default Footer;
