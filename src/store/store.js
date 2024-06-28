import { configureStore } from "@reduxjs/toolkit";
import trendingMovies from "./slices/trendingMovies";

export default configureStore({
  reducer: {
    trendingMovies,
  },
});
