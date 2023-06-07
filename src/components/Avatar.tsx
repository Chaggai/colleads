type Props = {
  image?: string;
  name: string;
  className?: string;
  imgClassName?: string;
  borderColor?: string;
};
const Avatar = ({
  image,
  name,
  className,
  imgClassName,
  borderColor,
}: Props) => {
  const nameInitials = name.split(" ")[0][0] + name.split(" ")[1][0];

  const colors = [
    "border-site-lightblue",
    "border-site-purple",
    "border-site-blue",
    "border-site-torquoise",
    "border-site-green",
    "border-site-yellow",
    "border-site-orange",
    "border-site-pink",
  ];

  return (
    <div
      className={`flex items-center justify-center overflow-hidden rounded-full border-[3px] ${
        !borderColor
          ? colors[Math.floor(Math.random() * colors.length)]
          : borderColor
      } ${!image && "border-0 bg-[#FAFAEA]"} ${className ? className : ""}`}
    >
      {image ? (
        <img
          className={imgClassName ? imgClassName : ""}
          src={image}
          alt={name}
        />
      ) : (
        <span className="text-xl uppercase">{nameInitials}</span>
      )}
    </div>
  );
};
export default Avatar;
