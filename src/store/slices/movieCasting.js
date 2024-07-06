import { createSlice } from "@reduxjs/toolkit";
import { fetchMovieCasting } from "../thunks/movieCasting";

export const movieCastingSlice = createSlice({
    name: "movieCasting",
    initialState: {
        isLoading: true,
        error: false,
        casting: []
    },
    extraReducers(builder) {
        builder.addCase(fetchMovieCasting.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchMovieCasting.fulfilled, (state, action) => {
            state.casting = action.payload;
            state.isLoading = false;
        });
        builder.addCase(fetchMovieCasting.rejected, (state) => {
            state.isLoading = false;
            state.error = true;
        });
    },
    selectors: {
        getIsLoading: (state) => state.isLoading,
        getError: (state) => state.error,
        getCasting: (state) => state.casting,
    },
});

export const { getIsLoading, getError, getCasting } =
    movieCastingSlice.selectors;

export default movieCastingSlice.reducer;
