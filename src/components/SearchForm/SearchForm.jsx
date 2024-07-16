import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import style from  "../SearchForm/indexForm.module.css";

const SearchForm = () => {
  const [movie, setMovie] = useState("");
  const navigate = useNavigate();

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
        placeholder="Search for a movie,TV Show,Person..."
      />
      <button type="submit" className={style.search__btn}>
        Search
      </button>
    </form>
  );
};

export default SearchForm;
