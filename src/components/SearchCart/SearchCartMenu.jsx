import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getKeywordsQty, getTVShowQty } from "../../store/slices/searchMovieSlice";
import style from  "../SearchCart/searchCart.module.css";

const SearchCartMenu = ({q}) => {
  const keywordsQty = useSelector(getKeywordsQty);
  const tvShowQty=useSelector(getTVShowQty)

  return (
    <div className={style.menu}>
      <h2 className={style.menu__title}>Search Results</h2>
      <div>
        <ul className={style.menu__list}>
          <li className={style.menu__listItem}>
            <span>Movie</span>
            <span>4</span>
          </li>
          <li className={style.menu__listItem}>
            <Link to={`/search/tvShow?q=${q}`}>
            <span>TV Show</span>
            <span>{tvShowQty}</span>
            </Link>
            
          </li>
          <li className={style.menu__listItem}>
            <span>People</span>
            <span>6</span>
          </li>
          <li className={style.menu__listItem}>
            <span>Companies</span>
            <span>7</span>
          </li>
          <li className={style.menu__listItem}>
            <Link to={`/search/keywords?q=${q}`}>
              <span>Keywords</span>
              <span>{keywordsQty}</span>
            </Link>
          </li>
          <li className={style.menu__listItem}>
            <span>Collections</span>
            <span>9</span>
          </li>
          <li className={style.menu__listItem}>
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
