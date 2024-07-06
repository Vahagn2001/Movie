import { configureStore } from "@reduxjs/toolkit";
import trendingMovies from "./slices/trendingMovies";
import movieDetail from "./slices/movieDetail";
import searchMovie from "./slices/searchMovieSlice";

export default configureStore({
  reducer: {
    trendingMovies,
    movieDetail,
    searchMovie,
  },
});
