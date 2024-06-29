import { Link } from "react-router-dom";

export const TrendingMovie = ({ movie }) => {
  return (
    <>
      <Link to={`/movie/${movie.id}`}>
        <img
          style={{ width: 100 }}
          src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${movie.poster_path}`}
          alt={movie.title}
        />
      </Link>
      <h3>{movie.title}</h3>
      <p>{movie.overview}</p>

    </>
  );
};
