import { useSelector } from "react-redux";
import { SearchLayout } from "../../components/SearchLayout/SearchLayout";
import { getKeywords } from "../../store/slices/searchMovieSlice";
import style from "../../components/SearchList/index.module.css";

export const SearchKeywords = () => {
  const list = useSelector(getKeywords);

  return (
    <SearchLayout>
      <ul className={style.boxes}>
        {list.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </SearchLayout>
  );
};
