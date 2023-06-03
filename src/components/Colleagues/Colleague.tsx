import Avatar from "../Avatar";
import Checkbox from "../Controlls/Checkbox";

const Colleague = () => {
  return (
    <figure className="mb-4 flex items-center">
      <Avatar
        className="h-[68px] w-[68px]"
        image="https://imglarger.com/Images/before-after/ai-image-enlarger-1-after-2.jpg"
        name="Avner Gadasi"
      />
      <div className="mx-6 flex flex-col">
        <span>אסף רפפורט</span>
        <small>ריפוי בעיסוק</small>
      </div>
      <Checkbox className="mr-auto" />
    </figure>
  );
};
export default Colleague;
