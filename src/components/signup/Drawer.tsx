import { Dispatch, SetStateAction } from "react";
import Backdrop from "../Controlls/Backdrop";

type Props = {
  click: Dispatch<SetStateAction<boolean>>;
  show: boolean;
  children: JSX.Element;
};

const Drawer = ({ click, show, children }: Props) => {
  const positionClasses = {
    right: "rounded-l-[40px] w-3/5 top-0",
    bottom: "rounded-t-[40px] w-full bottom-0",
    top: "rounded-b-[40px] w-full top-0",
  };

  return (
    <>
      <Backdrop show={show} click={click} />
      <div
        className={`absolute z-20 overflow-hidden bg-site-bg transition-all ${
          show ? "translate-x-0" : "translate-x-full"
        } ${positionClasses["right"]}`}
      >
        {children}
      </div>
    </>
  );
};
export default Drawer;
