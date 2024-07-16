import React from "react";
import { SearchCart } from "../SearchCart/SearchCart";

import style from "../SearchList/Index.module.css"

const SearchList = ({ list }) => {
  return (
    <ul className={style.boxes}>
      {list.map((item) => {
        return <SearchCart key={item.id} item={item} />;
      })}
    </ul>
  );
};

export default SearchList;
