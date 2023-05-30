type Props = {
  title: string;
  content: string;
};
const SliderItem = ({ title, content }: Props) => {
  return (
    <div className="mb-4">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};
export default SliderItem;
