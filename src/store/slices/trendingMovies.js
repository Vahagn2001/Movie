import { createSlice } from "@reduxjs/toolkit";
import { fetchTrendingMovies } from "../thunks/trendingMovies";

export const trendingMoviesSlice = createSlice({
  name: "trendingMovies",
  initialState: {
    isLoading: false,
    error: false,
    list: [],
  },
  extraReducers(builder) {
    builder.addCase(fetchTrendingMovies.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTrendingMovies.fulfilled, (state, action) => {
      state.list = action.payload.results;
      state.isLoading = false;
    });
    builder.addCase(fetchTrendingMovies.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });
  },
  selectors: {
    getIsLoading: (state) => state.isLoading,
    getError: (state) => state.error,
    getList: (state) => state.list,
  },
});

export const { getIsLoading, getError, getList } =
  trendingMoviesSlice.selectors;

export default trendingMoviesSlice.reducer;
