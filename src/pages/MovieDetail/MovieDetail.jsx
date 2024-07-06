import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetail } from "../../store/thunks/movieDetail";
import { getData, getIsLoading } from "../../store/slices/movieDetail";
import { useParams } from "react-router";
import { IMAGE_URL } from "../../constants/image";
import style from "./MovieDetail.module.css";
import { getCasting } from "../../store/slices/movieCasting";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { fetchMovieCasting } from "../../store/thunks/movieCasting";

export const MovieDetail = () => {
  const dispatch = useDispatch();
  const details = useSelector(getData);
  const isLoading = useSelector(getIsLoading);
  const { movieId } = useParams();
  const casting = useSelector(getCasting);

  console.log(casting);
  useEffect(() => {
    dispatch(fetchMovieDetail(movieId));
    dispatch(fetchMovieCasting(movieId));
  }, [dispatch, movieId]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <div style={{
        backgroundImage: `url("${IMAGE_URL}/w1920_and_h800_multi_faces/${details.backdrop_path}")`
      }} className={style.movieDetailBg}>
        <div className={style.movieDetail}>
          <img src={`${IMAGE_URL}/w300_and_h450_bestv2${details.poster_path}`} alt="poster" />
          <section>
            <h1>{details.title}</h1>
            <p>Release Date: {details.release_date}</p>
            <p>Rating: {details.vote_average}%</p>
            <h3>«{details.tagline}»</h3>
            <h2>Review</h2>
            <p>{details.overview}</p>
          </section>
        </div>
      </div>
      <section>
        <h1 className={style.movieCastTitle}>Top Billed Cast</h1>
        <div className={style.movieCastSwiper}>
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={50}
            slidesPerView={5}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
          >
            {casting && casting.cast && Array.isArray(casting.cast) && casting.cast.map((cast) => (
              <SwiperSlide key={cast.id} className={style.movieCastSlide}>
                <div>
                  <img
                    src={`${IMAGE_URL}/w300_and_h450_bestv2${cast.profile_path}`}
                    alt={cast.name}
                    className={style.movieCastImage}
                  />
                  <h4>{cast.name}</h4>
                  <p>{cast.character}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};