type Props = {
  text: string;
  className?: string;
  click: () => void;
};
const Button = ({ text, click, className }: Props) => {
  return (
    <button
      onClick={click}
      className={`relative rounded-full bg-site-lightblue px-10 leading-9 text-white ${
        className ? className : ""
      }`}
    >
      {text}
    </button>
  );
};
export default Button;
