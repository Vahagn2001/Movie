import { useSelector } from "react-redux";
import { SearchCart } from "../../components/SearchCart/SearchCart";
import { SearchLayout } from "../../components/SearchLayout/SearchLayout";
import {
  getIsError,
  getIsLoading,
  getList,
} from "../../store/slices/searchMovieSlice";
import "../Search/index.css";

export const Search = () => {
  const isLoading = useSelector(getIsLoading);
  const list = useSelector(getList);
  const isError = useSelector(getIsError);

  if (isError) return <div>Something is wrong!!!!</div>;

  return (
    <SearchLayout>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul className="boxes">
          {list.map((item) => {
            return <SearchCart key={item.id} item={item} />;
          })}
        </ul>
      )}
    </SearchLayout>
  );
};
