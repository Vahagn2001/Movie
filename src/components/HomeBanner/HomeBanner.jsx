import SearchForm from "../SearchForm/SearchForm";
import "../HomeBanner/homeBanner.css";

export const HomeBanner = () => {
  return (
    <article className="article">
      <h1 className="article__tittle">
        Welcome.
        <br />
        Millions of movies, TV shows and people to discover. Explore now.
      </h1>

      <SearchForm />
    </article>
  );
};
