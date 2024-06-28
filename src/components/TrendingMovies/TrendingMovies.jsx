import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrendingMovies } from "../../store/thunks/trendingMovies";
import {
  getError,
  getIsLoading,
  getList,
} from "../../store/slices/trendingMovies";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { TrendingMovie } from "../TrendingMovie/TrendingMovie";

export const TrendingMovies = () => {
  const dispatch = useDispatch();
  const list = useSelector(getList);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchTrendingMovies());
  }, [dispatch]);

  if (error) return <div>Something went wrong!</div>;

  if (isLoading) return <div>Loading...</div>;

  return (
    <section>
      <h2>Trending Movies</h2>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={50}
        slidesPerView={5}
      >
        {list.map((movie) => (
          <SwiperSlide key={movie.id}>
            <TrendingMovie movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
