import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getKeywordsQty } from "../../store/slices/searchMovieSlice";
import "../SearchCart/searchCart.css";

const SearchCartMenu = ({q}) => {
  const keywordsQty = useSelector(getKeywordsQty);

  return (
    <div className="menu">
      <h2 className="menu__title ">Search Results</h2>
      <div>
        <ul className="menu__list">
          <li className="menu__list-item">
            <span>Movie</span>
            <span>4</span>
          </li>
          <li className="menu__list-item">
            <span>TV Show</span>
            <span>5</span>
          </li>
          <li className="menu__list-item">
            <span>People</span>
            <span>6</span>
          </li>
          <li className="menu__list-item">
            <span>Companies</span>
            <span>7</span>
          </li>
          <li className="menu__list-item">
            <Link to={`/search/keywords?q=${q}`}>
              <span>Keywords</span>
              <span>{keywordsQty}</span>
            </Link>
          </li>
          <li className="menu__list-item">
            <span>Collections</span>
            <span>9</span>
          </li>
          <li className="menu__list-item">
            <span>Networks</span>
            <span>10</span>
          </li>
        </ul>
      </div>

      <p className="menu__setting">
        Tip: You can use the 'y:' filter to narrow your results by year.
        Example: 'star wars y:1977'.
      </p>
    </div>
  );
};

export default SearchCartMenu;
