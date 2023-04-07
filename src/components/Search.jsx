import { useContext, useRef } from "react";
import Context from "../Context";

const SearchBar = ({filterSearch}) => {

  const inputEl = useRef(null);


  return (
    <div className="search">
        <input  ref={ inputEl } className="search-input"  type="text" placeholder="Search.."></input>
        <button onClick={ () => { filterSearch(inputEl.current.value) } } className="search-btn">Search</button>

    </div>
  );
};

export default SearchBar;