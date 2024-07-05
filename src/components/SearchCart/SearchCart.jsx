import React from "react";
import { IMAGE_URL } from "../../constants/image";
import "../SearchCart/searchCart.css";
import SearchCartMenu from "./SearchCartMenu";

export const SearchCart = ({ item }) => {
  return (
    <>
      <li className="box">
        <div className="box__img">
          <img
            src={`${IMAGE_URL}/w188_and_h282_bestv2/${item.poster_path}`}
            alt={item.original_title}
          />
        </div>
        <div className="box__article">
          <p>{item.title}</p>
          <p>
            <b>Release Date:</b> {item.release_date}
          </p>
          <p>
            <b>Rating:</b> {item.vote_average}%
          </p>
          <p>
            <b>Vote Count:</b>
            {item.vote_count}
          </p>
          <p>{item.overview}</p>
        </div>
      </li>
    </>
  );
};
