import { useDispatch, useSelector } from "react-redux";
import { searchFetchMovie } from "../../store/thunks/searchMovieThunk";
import { useEffect } from "react";
import {
  getIsLoading,
  getList,
  getIsError,
} from "../../store/slices/searchMovieSlice";
import { SearchCart } from "../../components/SearchCart/SearchCart";
import { useSearchParams } from "react-router-dom";
import "../Search/index.css";
import SearchForm from "../../components/SearchForm/SearchForm";
import SearchCartMenu from "../../components/SearchCart/SearchCartMenu";

export const Search = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q");
  const isLoading = useSelector(getIsLoading);
  const list = useSelector(getList);
  const isError = useSelector(getIsError);

  useEffect(() => {
    dispatch(searchFetchMovie(q));
  }, [dispatch, q]);

  if (isError) return <div>Something is wrong!!!!</div>;

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="container">
      <SearchForm />
      <div className="cont">
        <SearchCartMenu />
        <ul className="boxes">
          {list.map((item) => {
            console.log(item);
            return <SearchCart key={item.id} item={item} />;
          })}
        </ul>
      </div>
    </div>
  );
};
