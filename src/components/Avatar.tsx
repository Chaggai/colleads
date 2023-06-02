type Props = {
  image?: string;
  name: string;
  className?: string;
  borderColor?: string;
};
const Avatar = ({ image, name, className, borderColor }: Props) => {
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
      className={`flex h-[68px] w-[68px] items-center justify-center overflow-hidden rounded-full border-4 ${
        !borderColor
          ? colors[Math.floor(Math.random() * colors.length)]
          : borderColor
      } ${className ? className : ""} ${!image && "border-0 bg-[#FAFAEA]"}`}
    >
      {image ? (
        <img src={image} alt={name} />
      ) : (
        <span className="text-xl uppercase">{nameInitials}</span>
      )}
    </div>
  );
};
export default Avatar;
