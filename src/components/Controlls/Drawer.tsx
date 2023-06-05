import { Dispatch, SetStateAction } from "react";
import Backdrop from "./Backdrop";

type Props = {
  click: Dispatch<SetStateAction<boolean>>;
  show: boolean;
  children: JSX.Element;
  position: "right" | "top" | "bottom";
};

const Drawer = ({ click, show, children, position }: Props) => {
  {
    show
      ? document.body.classList.add("drawer")
      : document.body.classList.remove("drawer");
  }

  const positionClasses = {
    right: {
      classes: "rounded-l-[40px] w-3/5 top-0",
      show: "translate-x-0",
      hide: "translate-x-full",
    },
    bottom: {
      classes: "rounded-t-[40px] w-full bottom-0",
      show: "translate-y-0",
      hide: "translate-y-full",
    },
    top: {
      classes: "rounded-b-[40px] w-full top-0",
      show: "translate-y-0",
      hide: "-translate-y-full",
    },
  };

  return (
    <>
      <Backdrop show={show} click={click} />
      <div
        className={`fixed z-20 overflow-hidden bg-site-bg transition-all 
          ${position === "right" ? "h-full" : null}
          ${positionClasses[position].classes} 
          ${
            show
              ? positionClasses[position].show
              : positionClasses[position].hide
          }
        `}
      >
        {children}
        {position === "top" && (
          <button
            onClick={() => click(false)}
            className="flex h-12 w-full items-center justify-center bg-white"
          >
            <div className="h-1 w-10 rounded-full bg-site-bg"></div>
          </button>
        )}
      </div>
    </>
  );
};
export default Drawer;
