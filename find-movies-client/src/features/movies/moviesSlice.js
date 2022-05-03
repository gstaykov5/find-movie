import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import favoriteMoviesService from '../../services/favoriteMovies.service';
import moviesService from '../../services/movieApi.service';

const initialState = {
    movies: [],
    isLoading: false,
};

export const fetchMovies = createAsyncThunk(
    'movies/fetchMovies',
    async () => {
        const movies = await moviesService.getAllMovies();

        return movies;
    }
)

export const getFavoriteMovies = createAsyncThunk(
    'movies/fetchFavoriteMovies',
    async () => {
        const movies = await favoriteMoviesService.getFavoriteMovies();

        return movies;
    }
)

export const postFavoriteMovie = createAsyncThunk(
    'movies/postNewFavoriteMovie',
    async (id) => {
        const movie = await favoriteMoviesService.postFavoriteMovie(id);

        return movie;
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