import { configureStore } from "@reduxjs/toolkit";
import trendingMovies from "./slices/trendingMovies";
import movieDetail from "./slices/movieDetail";
import searchMovie from "./slices/searchMovieSlice";
import movieCasting from "./slices/movieCasting";

export default configureStore({
  reducer: {
    trendingMovies,
    movieDetail,
    searchMovie,
    movieCasting,
  },
});
