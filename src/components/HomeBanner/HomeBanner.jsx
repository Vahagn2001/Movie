import SearchForm from "../SearchForm/SearchForm";
import style from "../HomeBanner/HomeBanner.module.css";
import { useTranslation } from 'react-i18next';


export const HomeBanner = () => {

const { t, i18n } = useTranslation();

  return (
    <article className={style.article}>
      <h1 className={style.article__tittle}>
       {t("Welcome.")}

        <br />
        
        {t("Millions of movies, TV shows and people to discover. Explore now.")}
      </h1>

      <SearchForm />
    </article>
  );
};
