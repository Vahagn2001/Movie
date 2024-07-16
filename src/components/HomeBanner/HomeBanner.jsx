import SearchForm from "../SearchForm/SearchForm";
import style from "../HomeBanner/HomeBanner.module.css";

export const HomeBanner = () => {
  return (
    <article className={style.article}>
      <h1 className={style.article__tittle}>
        Welcome.
        <br />
        Millions of movies, TV shows and people to discover. Explore now.
      </h1>

      <SearchForm />
    </article>
  );
};
