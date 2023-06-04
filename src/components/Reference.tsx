import Avatar from "./Avatar";
import Card from "./Card";
import Button from "./Controlls/Button";

export type TReference = {
  id: string;
  image: string;
  type: string;
  interesting: string;
  age?: number;
  area: string;
};

type Props = {
  reference: TReference;
};
const Reference = ({ reference }: Props) => {
  return (
    <Card className="relative flex-two-columns pt-12 text-center leading-6 text-gray-500 shadow">
      <div className="flex h-full flex-col">
        <Avatar
          className="absolute right-[8px] top-[8px] h-[35px] w-[35px]"
          name="Avner Gadasi"
          image={reference.image}
        />
        <ul className="mb-4 text-sm">
          <li>
            <strong className="text-black">{reference.type}</strong>
          </li>
          <li>מעוניינים ב: {reference.interesting}</li>
          {reference.age && <li>עבור: בן {reference.age}</li>}
          <li>איזור: {reference.area}</li>
        </ul>
        <Button
          label="עוד פרטים"
          className="mt-auto h-[38px] bg-site-lightblue text-white"
        />
      </div>
    </Card>
  );
};
export default Reference;
