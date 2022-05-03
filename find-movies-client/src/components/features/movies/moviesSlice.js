import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    isLoading: false,
};

export const fetchMovies = createAsyncThunk(
    'movies/fetchMovies',
    async () => {
        const res = await fetch('https://api.tvmaze.com/show');
        const movies = await res.json();

        return movies;
    }
)

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchMovies.pending]: state => {
            state.isLoading = true;
        },
        [fetchMovies.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.movies = action.payload
        },
        [fetchMovies.rejected]: state => {
            state.isLoading = false;
        }
    }
});

// export const {  } = moviesSlice.actions;

export default moviesSlice.reducer;