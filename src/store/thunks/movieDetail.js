import { createAsyncThunk } from "@reduxjs/toolkit";
import { searchMovieById } from "../../api/searchMovieById";

export const fetchMovieDetail = createAsyncThunk(
    "movieDetail/fetch",
    searchMovieById
);
