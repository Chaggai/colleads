type Props = {
  label: string;
  className?: string;
  click?: () => void;
};
const Button = ({ label, className, click }: Props) => {
  return (
    <button
      className={`rounded-full text-sm font-semibold ${
        className ? className : ""
      }`}
      onClick={click}
    >
      {label}
    </button>
  );
};
export default Button;
