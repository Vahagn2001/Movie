import React from "react";
import { IMAGE_URL } from "../../constants/image";
import style from "../SearchCart/SearchCart.module.css";
import style2 from "../SearchList/Index.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';


export const SearchCart = ({ item }) => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <li className={style2.box}>
        <div className={style.box__img}>
          <Link to={`/movie/${item.id}`}><img className={style.img}
            src={`${IMAGE_URL}/w188_and_h282_bestv2/${item.poster_path}`}
            alt={item.original_title}
          /></Link>
        </div>
        <div className={style.box__article}>
          <p>{item.title}</p>
          <p>
            <b>Release date:</b> {item.release_date}
          </p>
          <p>
            <b>Rating:</b> {item.vote_average}%
          </p>
          <p>
            <b>Vote Count:</b>
            {item.vote_count}
          </p>
          <p>item.overview</p>
        </div>
      </li>
    </>
  );
};
