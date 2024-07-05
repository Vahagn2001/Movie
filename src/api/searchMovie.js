import axios from "axios";

export const searchMovie = async (query) => {
  const { data } = await axios.get(
    `/search/movie?query=${query}&language=en-US&page=1`
  );
  return data;
};

export const searchMovieKeywords = async (query) => {
  const { data } = await axios.get(
    `/search/keyword?page=1&query=${query}`
  );
  return data;
};
