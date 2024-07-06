import React from "react";
import { SearchCart } from "../SearchCart/SearchCart";

const SearchList = ({ list }) => {
  return (
    <ul className="boxes">
      {list.map((item) => {
        return <SearchCart key={item.id} item={item} />;
      })}
    </ul>
  );
};

export default SearchList;
