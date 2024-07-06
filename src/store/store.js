import { configureStore } from "@reduxjs/toolkit";
import movieDetail from "./slices/movieDetail";
import searchMovie from "./slices/searchMovieSlice";

export default configureStore({
  reducer: {
    movieDetail,
    searchMovie,
  },
});
