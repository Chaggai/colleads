import { Dispatch, SetStateAction } from "react";

type Props = {
  click: Dispatch<SetStateAction<boolean>>;
  show: boolean;
};

const Backdrop = ({ click, show }: Props) => {
  return (
    <>
      {show && (
        <div
          onClick={() => click(false)}
          className="fixed left-0 top-0 z-10 h-screen w-screen overflow-hidden bg-black opacity-50"
        ></div>
      )}
    </>
  );
};
export default Backdrop;
