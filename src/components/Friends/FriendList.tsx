import Card from "../Card";
import Friend from "./Friend";

const FriendList = () => {
  return (
    <Card className="max-h-96 overflow-y-scroll">
      <ul>
        <li>
          <Friend />
          <Friend />
          <Friend />
          <Friend />
          <Friend />
          <Friend />
          <Friend />
          <Friend />
          <Friend />
        </li>
      </ul>
    </Card>
  );
};
export default FriendList;
