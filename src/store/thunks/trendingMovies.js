import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMoviesByPopularity } from "../../api/discoverMovie";

export const fetchTrendingMovies = createAsyncThunk(
  "trendingMovies/fetch",
  getMoviesByPopularity
);
