import SvgIcon from "../components/SvgIcon";
import CreateReferenceButton from "../components/CreateReferralButton";
import TitleWithMessage from "../components/TitleWithMessage";
import ReferenceList from "../components/References/ReferenceList";
import { useState } from "react";
import Drawer from "../components/Controlls/Drawer";
import Filter from "../components/Filter/Filter";
import { useCurrentUser } from "../hooks/useCurrentUser";

const FirstTime = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  const currentUser = useCurrentUser();

  return (
    <>
      <Drawer position="right" show={showDrawer} click={setShowDrawer}>
        <Filter />
      </Drawer>
      <div className="p-5 pb-0">
        <CreateReferenceButton />
        <div className="mb-10 text-center">
          <TitleWithMessage
            h1={`היי ${currentUser.user?.displayName?.split(" ")[0]},`}
            h2="איזה כיף שהצטרפת אלינו!"
          />
        </div>
        <div className="mb-6 flex items-end">
          <SvgIcon name="pin" className="relative -top-1" />
          <span className="mr-4">לוח הפניות ציבורי</span>
          <button onClick={() => setShowDrawer(true)} className="mr-auto">
            <SvgIcon name="tune" />
          </button>
        </div>
        <ReferenceList />
      </div>
    </>
  );
};
export default FirstTime;
