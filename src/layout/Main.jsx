import Header from "../components/Header";

import LeftSegment from "../components/LeftSegment";
import Scheduals from "../components/Scheduals";

const Main = () => {
  return (
    <div>
      <div className="col-span-full">
        <Header></Header>
      </div>

      <div className="grid md:grid-cols-3">
        <div className="md:col-span-1">
          <LeftSegment></LeftSegment>
        </div>
        <div className="md:col-span-2">
          <Scheduals></Scheduals>
        </div>
      </div>
    </div>
  );
};

export default Main;
