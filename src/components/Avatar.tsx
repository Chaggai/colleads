type Props = {
  image?: string;
  name: string;
};
const Avatar = ({ image, name }: Props) => {
  const nameInitials = name.split(" ")[0][0] + name.split(" ")[1][0];

  return (
    <div className="flex h-[68px] w-[68px] items-center justify-center overflow-hidden rounded-full border-4 border-site-lightblue">
      {image ? (
        <img src={image} alt={name} />
      ) : (
        <span className="text-xl uppercase">{nameInitials}</span>
      )}
    </div>
  );
};
export default Avatar;
