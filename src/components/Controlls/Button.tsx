type Props = {
  label: string;
  className?: string;
  click?: () => void;
  children?: JSX.Element;
};
const Button = ({ label, className, click, children }: Props) => {
  return (
    <button
      className={`rounded-full text-sm font-semibold ${
        className ? className : ""
      }`}
      onClick={click}
    >
      {label}
      {children && children}
    </button>
  );
};
export default Button;
