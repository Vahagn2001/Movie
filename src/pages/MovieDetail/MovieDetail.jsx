import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetail } from "../../store/thunks/movieDetail";
import { getData, getIsLoading } from "../../store/slices/movieDetail";
import { useParams } from "react-router";
import { IMAGE_URL } from "../../constants/image";

export const MovieDetail = () => {
  const dispatch = useDispatch();
  const details = useSelector(getData)
  const isLoading = useSelector(getIsLoading)
  const { movieId } = useParams();

  useEffect(() => {
    dispatch(fetchMovieDetail(movieId));
  }, [dispatch]);

  if (isLoading) return <div>Loading...</div>

  return (
    <div>
      <img src={`${IMAGE_URL}/w300_and_h450_bestv2${details.poster_path}`} alt="poster" />
      <div>
        <h1>{details.title}</h1>
        <p>Release Date: {details.release_date}</p>
        <p>Rating: {details.vote_average}%</p>
        <h3>«{details.tagline}»</h3>
        <h2>Review</h2>
        <p>{details.overview}</p>
      </div>
    </div>
  );
};
