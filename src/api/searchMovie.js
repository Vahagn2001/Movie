import axios from "axios";

export const searchMovie = async (query) => {
  const { data } = await axios.get(
    `/search/movie?query=${query}&language=en-US&page=1`
  );
  return data;
};
