import Avatar from "../Avatar";
import Checkbox from "../Controlls/Checkbox";

export type TColleague = {
  id: string;
  image: string;
  name: string;
  ocupation: string;
};

type Props = {
  colleague: TColleague;
};

const Colleague = ({ colleague }: Props) => {
  return (
    <figure className="mb-4 flex items-center">
      <Avatar
        className="h-[68px] w-[68px]"
        image={colleague.image}
        name={colleague.name}
      />
      <div className="mx-6 flex flex-col">
        <span>{colleague.name}</span>
        <small>{colleague.ocupation}</small>
      </div>
      <Checkbox className="mr-auto" />
    </figure>
  );
};
export default Colleague;
