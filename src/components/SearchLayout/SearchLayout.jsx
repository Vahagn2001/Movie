import React, { useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import SearchCartMenu from "../SearchCart/SearchCartMenu";
import {
  searchFetchMovie,
  searchFetchMovieKeywords,
} from "../../store/thunks/searchMovieThunk";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

export const SearchLayout = ({ children }) => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q");

  useEffect(() => {
    dispatch(searchFetchMovieKeywords(q));
    dispatch(searchFetchMovie(q));
  }, [dispatch, q]);

  return (
    <div className="container">
      <SearchForm />
      <div className="cont">
        <SearchCartMenu q={q} />
        {children}
      </div>
    </div>
  );
};
