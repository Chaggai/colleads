type Props = {
  h1?: string;
  h2?: string;
  children?: JSX.Element;
};

const TitleWithMessage = ({ h1, h2, children }: Props) => {
  return (
    <>
      {h1 && <h1 className="mb-2 text-xl font-bold">{h1}</h1>}
      {h2 && <h2 className="mb-2 text-lg font-bold">{h2}</h2>}
      {children && <p className="leading-6">{children}</p>}
    </>
  );
};

export default TitleWithMessage;
