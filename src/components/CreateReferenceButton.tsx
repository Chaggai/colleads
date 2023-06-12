import SvgIcon from "./SvgIcon";

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
    "justify-center",
    "items-center",
    "text-site-lightblue",
    "w-[276px]",
    "mx-auto",
    "mb-12",
    "pr-16",
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
