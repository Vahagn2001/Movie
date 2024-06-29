import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

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
    <form onSubmit={handleSubmit}>
      <input type="text" value={movie} onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;