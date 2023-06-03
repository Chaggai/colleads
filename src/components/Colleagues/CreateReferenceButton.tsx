import SvgIcon from "../SvgIcon";

const CreateReferenceButton = () => {
  const classes = [
    "relative",
    "rounded-full",
    "border-[5px]",
    "border-site-lightblue",
    "bg-white",
    "pl-8",
    "font-bold",
    "h-[68px]",
    "flex",
    "justify-end",
    "items-center",
    "text-site-lightblue",
    "w-[75%]",
    "mx-auto",
    "mb-12",
  ];
  const sudoClasses = [
    "absolute",
    "-right-2",
    "-top-2",
    "h-[75px]",
    "w-[75px]",
    "rounded-full",
    "border-[5px]",
    "border-site-lightblue",
    "bg-white",
  ];
  return (
    <button className={`${classes.join(" ")}`}>
      <div>
        <SvgIcon
          className={`${sudoClasses.join(" ")}`}
          name="document-with-stars"
        />
      </div>
      יצירת הפניה בצ׳יק!
    </button>
  );
};
export default CreateReferenceButton;
