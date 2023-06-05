import { useState } from "react";
import NotificationsCounter from "../components/Controlls/NotificationsCounter";
import Notifications from "../components/Notifications/Notifications";
import SvgIcon from "../components/SvgIcon";
import Menu from "../components/Menu/Menu";
import Drawer from "../components/Controlls/Drawer";

const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header className="absolute top-0 flex h-header w-full items-center justify-between px-8">
        <div className="flex">
          <button onClick={() => setShowMenu(true)} className="ml-4">
            <SvgIcon name="menu-dots" />
          </button>
          <button
            onClick={() => setShowNotifications(true)}
            className="relative"
          >
            <SvgIcon name="bell" />
            <NotificationsCounter count={8} />
          </button>
        </div>
        <img src="/brand.svg" className="w-32" alt="" />
      </header>
      <Drawer
        show={showNotifications}
        click={setShowNotifications}
        position="top"
      >
        <Notifications />
      </Drawer>
      <Drawer position="right" show={showMenu} click={setShowMenu}>
        <Menu />
      </Drawer>
    </>
  );
};
export default Header;
