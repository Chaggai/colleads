type Props = {
  title: string;
  content: string;
};
const SliderItem = ({ title, content }: Props) => {
  return (
    <div>
      <h1 className="mb-6 w-full text-2xl">{title}</h1>
      <p className="leading-5">{content}</p>
    </div>
  );
};
export default SliderItem;
