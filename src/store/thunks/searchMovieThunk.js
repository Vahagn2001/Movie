import { searchMovie, searchMovieKeywords,searchMovieTVShow} from "../../api/searchMovie";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const searchFetchMovie = createAsyncThunk(
  "searchMovie/fetch",
  searchMovie
);

export const searchFetchMovieKeywords = createAsyncThunk(
  "searchMovie/keywords",
  searchMovieKeywords
);


export const searchFetchMovieTVShow=createAsyncThunk(
  "searchMovie/TVShow",
  searchMovieTVShow
);
