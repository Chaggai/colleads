import { Dispatch, SetStateAction } from "react";
import Drawer from "../Controlls/Drawer";

type Props = {
  show: boolean;
  click: Dispatch<SetStateAction<boolean>>;
};

const Notifications = ({ show, click }: Props) => {
  return (
    <Drawer show={show} click={() => click(false)} position="top">
      <>
        <h1 className="mb-2 h-20 bg-white p-7 text-center font-bold">התראות</h1>
        <ul>
          <li>
            <div className="mb-0.5 flex flex-col bg-white px-16 py-6">
              <span>
                קיבלת <a href="/">הפניה חדשה</a> מ<strong>אסף רפפורט</strong>
              </span>
              <small>נשלחה במקביל לעוד 3 קולגות</small>
            </div>
          </li>
          <li>
            <div className="mb-0.5 flex flex-col bg-white px-16 py-6">
              <span>
                קיבלת <a href="/">הפניה חדשה</a> מ<strong>אסף רפפורט</strong>
              </span>
              <small>נשלחה במקביל לעוד 3 קולגות</small>
            </div>
          </li>
          <li>
            <div className="mb-0.5 flex flex-col bg-white px-16 py-6">
              <span>
                קיבלת <a href="/">הפניה חדשה</a> מ<strong>אסף רפפורט</strong>
              </span>
              <small>נשלחה במקביל לעוד 3 קולגות</small>
            </div>
          </li>
          <li>
            <div className="mb-0.5 flex flex-col bg-white px-16 py-6">
              <span>
                קיבלת <a href="/">הפניה חדשה</a> מ<strong>אסף רפפורט</strong>
              </span>
              <small>נשלחה במקביל לעוד 3 קולגות</small>
            </div>
          </li>
        </ul>
      </>
    </Drawer>
  );
};
export default Notifications;
