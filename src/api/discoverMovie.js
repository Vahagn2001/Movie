import axios from "axios";

export const getMoviesByPopularity = async () => {
  const { data } = await axios.get(
    "/discover/movie?language=en-US&page=1&sort_by=popularity.desc"
  );
  return data;
};
