type Props = {
  title: string;
  message: string;
};
const TitleWithMessage = ({ title, message }: Props) => {
  return (
    <>
      <h1 className="mb-2 text-xl">{title}</h1>
      <p>{message}</p>
    </>
  );
};

export default TitleWithMessage;
