import { createAsyncThunk } from "@reduxjs/toolkit";
import { movieCasting } from "../../api/movieCasting";

export const fetchMovieCasting = createAsyncThunk(
    "movieCasting/fetch",
    movieCasting
);
