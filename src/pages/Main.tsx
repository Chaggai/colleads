import SvgIcon from "../components/SvgIcon";
import CreateReferenceButton from "../components/CreateReferenceButton";
import TitleWithMessage from "../components/TitleWithMessage";
import ReferenceList from "../components/References/ReferenceList";
import Drawer from "../components/Controlls/Drawer";
import { useState } from "react";
import Filter from "../components/Filter/Filter";

const Main = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <>
      <Drawer position="right" show={showDrawer} click={setShowDrawer}>
        <Filter />
      </Drawer>
      <div className="p-5 pb-0">
        <CreateReferenceButton />
        <div className="mb-10 text-center">
          <TitleWithMessage h1="היי יעל,">
            <>
              עד כה קיבלת{" "}
              <a href="/" className="text-site-lightblue">
                17 הפניות
              </a>{" "}
              באמצעות Colleads{" "}
              <strong>
                {" "}
                וההפניות שיצרת התאימו ל{" "}
                <a href="/" className="text-site-lightblue">
                  6 קולגות
                </a>{" "}
                !
              </strong>
            </>
          </TitleWithMessage>
          <SvgIcon className="mx-auto my-2" name="document-with-stars-green" />
          <small>פעילות אחרונה בתאריך 17.3.23</small>
        </div>
        <div className="mb-6 flex items-end">
          <button className="relative -top-1">
            <SvgIcon name="pin" />
          </button>
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
export default Main;
