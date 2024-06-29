import { configureStore } from "@reduxjs/toolkit";
import trendingMovies from "./slices/trendingMovies";
import movieDetail from "./slices/movieDetail";

export default configureStore({
  reducer: {
    trendingMovies,
    movieDetail
  },
});
