import { createSlice } from "@reduxjs/toolkit";
import { fetchMovieDetail } from "../thunks/movieDetail";

export const movieSlice = createSlice({
  name: "movieDetail",
  initialState: {
    isLoading: true,
    error: false,
    data: null
  },
  extraReducers(builder) {
    builder.addCase(fetchMovieDetail.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMovieDetail.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchMovieDetail.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });
  },
  selectors: {
    getIsLoading: (state) => state.isLoading,
    getError: (state) => state.error,
    getData: (state) => state.data,
  },
});

export const { getIsLoading, getError, getData } =
  movieSlice.selectors;

export default movieSlice.reducer;
