import { searchFetchMovie } from "../thunks/searchMovieThunk";
import { createSlice } from "@reduxjs/toolkit";

const searchMovieSlices = createSlice({
  name: "searchMovie",
  initialState: {
    isLoading: false,
    searchList: [],
    error: false,
  },

  extraReducers(builder) {
    builder.addCase(searchFetchMovie.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(searchFetchMovie.fulfilled, (state, action) => {
      state.isLoading = false;
      state.searchList = action.payload.results;
    });

    builder.addCase(searchFetchMovie.rejected, (state, action) => {
      state.error = true;
    });
  },
  selectors: {
    getIsLoading: (state) => state.isLoading,
    getList: (state) => state.searchList,
    getIsError: (state) => state.error,
  },
});

export const { getIsLoading, getList, getIsError } =
  searchMovieSlices.selectors;

export default searchMovieSlices.reducer;
