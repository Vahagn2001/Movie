import React, { useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import SearchCartMenu from "../SearchCart/SearchCartMenu";
import {
  searchFetchMovie,
  searchFetchMovieKeywords,
  searchFetchMovieTVShow,
} from "../../store/thunks/searchMovieThunk";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import style from "../SearchList/Index.module.css"

export const SearchLayout = ({ children }) => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q");

  useEffect(() => {
    dispatch(searchFetchMovieKeywords(q));
    dispatch(searchFetchMovie(q));
    dispatch(searchFetchMovieTVShow(q));
  }, [dispatch, q]);

  return (
    <div className={style.container}>
      <SearchForm />
      <div className={style.cont}>
        <SearchCartMenu q={q} />
        {children}
      </div>
    </div>
  );
};
