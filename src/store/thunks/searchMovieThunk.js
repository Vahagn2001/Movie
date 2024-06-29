import { searchMovie } from "../../api/searchMovie";
import { createAsyncThunk } from "@reduxjs/toolkit";



export const searchFetchMovie=createAsyncThunk(
    "searchMovie/fetch",
    searchMovie
)



