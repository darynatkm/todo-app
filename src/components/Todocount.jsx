import { useContext } from "react";
import Context from "../Context";

const Todocount = () => {
  const { todoCount } = useContext(Context);

  return (
    <h3>Todo count: { todoCount }</h3>
  );
};

export default Todocount;