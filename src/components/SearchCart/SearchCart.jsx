import React from "react";
import { imageUrl } from "../../constants/image";

const SearchCart = ({ item }) => {
  return (
    <li>
      <img
        src={`${imageUrl}/w188_and_h282_bestv2/${item.poster_path}`}
        alt={item.original_title}
      />
    </li>
  );
};

export default SearchCart;
