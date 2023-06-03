import Card from "../Card";
import Colleague from "./Colleague";

const ColleagueList = () => {
  return (
    <Card className="max-h-96 overflow-y-scroll">
      <ul>
        <li>
          <Colleague />
          <Colleague />
          <Colleague />
          <Colleague />
          <Colleague />
          <Colleague />
          <Colleague />
          <Colleague />
          <Colleague />
        </li>
      </ul>
    </Card>
  );
};
export default ColleagueList;
