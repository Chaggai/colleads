const CreateReferenceButton = () => {
  const classes = [
    "relative",
    "mx-6",
    "rounded-full",
    "border-[5px]",
    "border-site-lightblue",
    "bg-white",
    "pl-8",
    "text-left",
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
    "before:absolute",
    "before:-right-2",
    "before:-top-2",
    "before:flex",
    "before:h-[75px]",
    "before:w-[75px]",
    "before:items-center",
    "before:justify-center",
    "before:rounded-full",
    "before:border-[5px]",
    "before:border-site-lightblue",
    "before:bg-white",
    "before:leading-none",
    "before:content-document-with-stars",
  ];
  return (
    <button className={`${classes.join(" ")} ${sudoClasses.join(" ")}`}>
      יצירת הפניה בצ׳יק!
    </button>
  );
};
export default CreateReferenceButton;
