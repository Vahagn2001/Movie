import { Link } from "react-router-dom";
import { IMAGE_URL } from "../../constants/image";

export const TrendingMovie = ({ movie }) => {
  return (
    <>
      <Link to={`/movie/${movie.id}`}>
        <img
          style={{ width: 100 }}
          src={`${IMAGE_URL}/w440_and_h660_face/${movie.poster_path}`}
          alt={movie.title}
        />
      </Link>
      <h3>{movie.title}</h3>
      <p>{movie.overview}</p>
    </>
  );
};
