import axios from "axios";

export const movieCasting = async (movieId) => {
  const { data } = await axios.get(
      `/movie/${movieId}/credits`
    );
  return data;
};
