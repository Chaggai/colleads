type Props = {
  type: "text" | "password" | "email" | "number";
  placeholder: string;
  className?: string;
};
const Input = ({ placeholder, type, className }: Props) => {
  return (
    <input
      className={`mb-[18px] h-[57px] w-full rounded-full bg-white px-4 ${
        className ? className : ""
      }`}
      type={type}
      placeholder={placeholder}
    />
  );
};
export default Input;
