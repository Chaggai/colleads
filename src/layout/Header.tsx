import NotificationsCounter from "../components/Controlls/NotificationsCounter";
import SvgIcon from "../components/SvgIcon";

const Header = () => {
  return (
    <header className="flex justify-between px-8 pb-4 pt-10">
      <div className="flex">
        <button className="ml-4">
          <SvgIcon name="menu-dots" />
        </button>
        <button className="relative">
          <SvgIcon name="bell" />
          <NotificationsCounter count={8} />
        </button>
      </div>
      <img src="/brand.svg" className="w-32" alt="" />
    </header>
  );
};
export default Header;
