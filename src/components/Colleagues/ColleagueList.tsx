import Card from "../Card";
import Colleague, { TColleague } from "./Colleague";

import data from "../../../public/data/colleagues.json";

const ColleagueList = () => {
  const colleagues: TColleague[] = data;

  return (
    <Card className="max-h-96 overflow-y-scroll">
      <ul>
        {colleagues.map((coll) => (
          <li key={coll.id}>
            <Colleague colleague={coll} />
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default ColleagueList;
