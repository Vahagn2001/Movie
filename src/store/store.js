import { configureStore } from "@reduxjs/toolkit";
import trendingMovies from "./slices/trendingMovies";
import searchMovie from "./slices/searchMovieSlice";

export default configureStore({
  reducer: {
    trendingMovies,
    searchMovie,
  },
});
