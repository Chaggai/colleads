type Props = {
  children: JSX.Element;
  className?: string;
};
const Card = ({ children, className }: Props) => {
  return (
    <div className={`rounded-3xl bg-white p-4 ${className ? className : ""}`}>
      {children}
    </div>
  );
};
export default Card;
