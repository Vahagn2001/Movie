import { useParams } from "react-router";
import { IMAGE_URL } from "../../constants/image";
import style from "./MovieCasting.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { movieCasting } from "../../api/movieCasting";
import { useQuery } from "@tanstack/react-query";

const breakpoints = {
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
}
const modules = [Navigation]

export const MovieCasting = () => {
    const { movieId } = useParams();
    const { isPending, error, data } = useQuery({
        queryKey: ['movieCasting', movieId],
        queryFn: () =>
            movieCasting(movieId)
    })

    if (isPending) return 'Loading...';
    if (error) return 'An error has occurred: ' + error.message;

    return (
        <section>
            <h1 className={style.movieCastTitle}>Top Billed Cast</h1>
            <div className={style.movieCastSwiper}>
                <Swiper
                    modules={modules}
                    navigation
                    spaceBetween={50}
                    slidesPerView={5}
                    breakpoints={breakpoints}
                >
                    {data.cast.map((cast) => (
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
    );
};