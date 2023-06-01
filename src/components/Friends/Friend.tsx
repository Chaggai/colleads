import Avatar from "../Avatar";

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
      <input type="checkbox" className="ml-3 mr-auto" name="" id="" />
    </figure>
  );
};
export default Friend;
