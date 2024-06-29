
import { imageUrl } from "../../constants/image";
export const TrendingMovie = ({ movie }) => {
  return (
    <>
      <img
        style={{ width: 100 }}
        src={`${imageUrl}/w440_and_h660_face/${movie.poster_path}`}
        alt={movie.title}
      />
      <h3>{movie.title}</h3>
      <p>{movie.overview}</p>
    </>
  );
};
