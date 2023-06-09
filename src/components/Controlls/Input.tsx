type Props = {
  type: "text" | "password" | "email" | "number";
  name: string;
  placeholder: string;
  className?: string;
};
const Input = ({ placeholder, type, name, className }: Props) => {
  return (
    <input
      className={`mb-[18px] h-[57px] rounded-full bg-white px-4 ${
        className ? className : ""
      }`}
      name={name}
      type={type}
      placeholder={placeholder}
    />
  );
};
export default Input;
