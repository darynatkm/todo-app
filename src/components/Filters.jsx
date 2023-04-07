import { useContext} from "react";
import Context from "../Context";

const Filters = () => {

  const { showAll, showDone} = useContext(Context);


  return (
    <div className="filters">
        <button className="filters-btn" onClick={() => showDone()}>Show Done</button>
        <button className="filters-btn" onClick={() => showAll()}>Show All</button>
    </div>
  );
};

export default Filters;