import axios from "axios";


export const movieDetailsById = async (movieId) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`
  );
  return data;
};

export const MovieDetail = () => {

  return (
    <section>
      
    </section>
  )
};
