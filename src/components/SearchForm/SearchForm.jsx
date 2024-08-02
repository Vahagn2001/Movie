import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import style from "../SearchForm/IndexForm.module.css";
import { useTranslation } from "react-i18next";

const SearchForm = () => {
  const [movie, setMovie] = useState("");
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  function handleChange(e) {
    setMovie(e.target.value);
  }

  function handleSubmit() {
    navigate(`/search?q=${movie}`);
  }

  return (
    <form onSubmit={handleSubmit} className={style.search}>
      <input
        type="text"
        value={movie}
        onChange={handleChange}
        className={style.search__inp}
        placeholder={t("Search for a movie,TV Show,Person...")}
      />
      <button type="submit" className={style.search__btn}>
        {t("Search")}
      </button>
    </form>
  );
};

export default SearchForm;
