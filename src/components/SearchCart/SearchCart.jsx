import React from "react";
import { IMAGE_URL } from "../../constants/image";

export const SearchCart = ({ item }) => {
  return (
    <li>
      <img
        src={`${IMAGE_URL}/w188_and_h282_bestv2/${item.poster_path}`}
        alt={item.original_title}
      />
    </li>
  );
};
