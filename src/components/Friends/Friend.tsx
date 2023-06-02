import Avatar from "../Avatar";
import Checkbox from "../Controlls/Checkbox";

const Friend = () => {
  return (
    <figure className="mb-4 flex items-center">
      <Avatar
        image="https://imglarger.com/Images/before-after/ai-image-enlarger-1-after-2.jpg"
        name="Avner Gadasias"
      />
      <div className="mx-6 flex flex-col">
        <span>אסף רפפורט</span>
        <small>ריפוי בעיסוק</small>
      </div>
      <Checkbox className="mr-auto" />
    </figure>
  );
};
export default Friend;
