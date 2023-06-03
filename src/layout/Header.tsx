import Notifications from "../components/Controlls/Notifications";
import SvgIcon from "../components/SvgIcon";

const Header = () => {
  return (
    <header className="flex justify-between px-8 pb-4 pt-10">
      <div className="flex">
        <button>
          <SvgIcon name="menu-dots" />
        </button>
        <button className="relative">
          <SvgIcon name="bell" />
          <Notifications count={8} />
        </button>
      </div>
      <img src="/brand.svg" className="w-32" alt="" />
    </header>
  );
};
export default Header;
