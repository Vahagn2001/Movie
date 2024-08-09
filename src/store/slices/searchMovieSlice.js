import {
  searchFetchMovie,
  searchFetchMovieKeywords,
  searchFetchMovieTVShow,
  searchFetchMoviePeople,
} from "../thunks/searchMovieThunk";
import { createSlice } from "@reduxjs/toolkit";

const searchMovieSlices = createSlice({
  name: "searchMovie",
  initialState: {
    isLoading: false,
    searchList: [],
    keywords: [],
    keywordsQty: 0,
    peoples:[],
    peoplesQty:0,
    tvShow: [],
    tvShowQty: 0,
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

    builder.addCase(searchFetchMovie.rejected, (state) => {
      state.error = true;
    });

    builder.addCase(searchFetchMoviePeople.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(searchFetchMoviePeople.fulfilled,(state,action)=>{
      state.isLoading=false,
      state.peoples=action.payload
    })

    builder.addCase(searchFetchMovieKeywords.fulfilled, (state, action) => {
      state.keywords = action.payload.results;
      state.keywordsQty = action.payload.total_results;
    });

    builder.addCase(searchFetchMovieTVShow.fulfilled, (state, action) => {
      (state.tvShow = action.payload.results),
        (state.tvShowQty = action.payload.total_results);
    });
  },
  selectors: {
    getIsLoading: (state) => state.isLoading,
    getList: (state) => state.searchList,
    getKeywordsQty: (state) => state.keywordsQty,
    getKeywords: (state) => state.keywords,
    getTVShow: (state) => state.tvShow,
    getTVShowQty: (state) => state.tvShowQty,
    getIsError: (state) => state.error,
  },
});

export const {
  getIsLoading,
  getList,
  getIsError,
  getKeywordsQty,
  getKeywords,
  getTVShow,
  getTVShowQty,
} = searchMovieSlices.selectors;

export default searchMovieSlices.reducer;
