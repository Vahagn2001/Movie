import { useSelector } from "react-redux";
import { SearchCart } from "../../components/SearchCart/SearchCart";
import { SearchLayout } from "../../components/SearchLayout/SearchLayout";
import {
  getIsError,
  getIsLoading,
  getList,
} from "../../store/slices/searchMovieSlice";
import SearchList from "../../components/SearchList/SearchList";

export const Search = () => {
  const isLoading = useSelector(getIsLoading);
  const list = useSelector(getList);
  const isError = useSelector(getIsError);

  if (isError) return <div>Something is wrong!!!!</div>;

  return (
    <SearchLayout>
      {isLoading ? <div>Loading...</div> : <SearchList list={list} />}
    </SearchLayout>
  );
};
