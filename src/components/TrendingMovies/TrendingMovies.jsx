import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { TrendingMovie } from "../TrendingMovie/TrendingMovie";
import { getMoviesByPopularity } from "../../api/discoverMovie";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

export const TrendingMovies = () => {
  const { t, i18n } = useTranslation();

  const { isLoading, isError, data } = useQuery({
    queryFn: getMoviesByPopularity,
    queryKey: ["popularMovies"],
  });

  if (isError) return <div>Something went wrong!</div>;

  if (isLoading) return <div>Loading...</div>;

  return (
    <section>
      <h2>{t("Trending Movies")}</h2>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={50}
        slidesPerView={5}
      >
        {data.results.map((movie) => (
          <SwiperSlide key={movie.id}>
            <TrendingMovie movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
