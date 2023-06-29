import { useNavigate } from "react-router-dom";
import Avatar from "../components/Avatar";
import SvgIcon from "../components/SvgIcon";
import { useCurrentUser } from "../hooks/useCurrentUser";

const Footer = () => {
  const navigate = useNavigate();

  const currentUser = useCurrentUser();

  return (
    <footer className="absolute bottom-0 flex h-footer w-full items-center justify-between px-8">
      {currentUser.user?.displayName && currentUser.user?.photoURL ? (
        <button onClick={() => navigate("/profile")}>
          <Avatar
            className="h-[40px] w-[40px] border-none"
            name={currentUser.user?.displayName}
            image={currentUser.user?.photoURL}
          />
        </button>
      ) : null}
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
