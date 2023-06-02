import Notifications from "../components/Controlls/Notifications";

const Header = () => {
  return (
    <header className="flex justify-between px-8 pb-4 pt-10">
      <div className="flex">
        <i className="ml-4 after:content-menu-dots"></i>
        <i className="after:content-bell">
          <Notifications amount={8} />
        </i>
      </div>
      <img src="/brand.svg" className="w-32" alt="" />
    </header>
  );
};
export default Header;
