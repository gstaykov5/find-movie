import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import favoriteMoviesService from '../../services/favoriteMovies.service';
import moviesService from '../../services/movieApi.service';

const initialState = {
    movies: [],
    favoriteMovies: [],
    movieDetail: [],
    isLoading: false,
    favIsLoading: false,
    error: null,
};

export const fetchMovies = createAsyncThunk(
    'movies/fetchMovies',
    async () => {
        const movies = await moviesService.getAllMovies();

        return movies;
    }
)

export const fetchMovieDetail = createAsyncThunk(
    'movies/fetchMovieDetail',
    async (movieTitel) => {
        const movieDetail = await moviesService.getMovieDetails(movieTitel);

        return movieDetail;
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
    async (movieId) => {
        const movie = await favoriteMoviesService.postFavoriteMovie(movieId);

        return movie;
    }
)

export const updateFavoriteMovie = createAsyncThunk(
    'movies/updateFavoriteMovie',
    async (movieAndCollectionId) => {
        const { movieId, collectionId, action } = movieAndCollectionId;
        const movie = await favoriteMoviesService.updateFavoriteMovie(movieId, collectionId, action);

        return movie;
    }
)

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addToFavorites: (state, action) => {
            state.favoriteMovies[0].favorites.push(action.payload);
        },
        removeToFavorites: (state, action) => {
            state.favoriteMovies[0].favorites.pop(action.payload);
        }
    },
    extraReducers: {
        // fetch all movies
        [fetchMovies.pending]: state => {
            state.isLoading = true;
        },
        [fetchMovies.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.movies = action.payload
        },
        [fetchMovies.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },

        // fetch movie detail
        [fetchMovieDetail.pending]: state => {
            state.isLoading = true;
            console.log(state.isLoading)
        },
        [fetchMovieDetail.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.movieDetail = action.payload[0].show;
        },
        [fetchMovieDetail.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },

        // fetch all favorite movies
        [getFavoriteMovies.pending]: state => {
            state.favIsLoading = true;
        },
        [getFavoriteMovies.fulfilled]: (state, action) => {
            state.favIsLoading = false;
            state.favoriteMovies = action.payload.favorites;
        },
        [getFavoriteMovies.rejected]: (state, action) => {
            state.favIsLoading = false;
            state.error = action.payload;
        },

        [postFavoriteMovie.fulfilled]: (state, action) => {
            console.log(action.payload.favorites)
            state.favoriteMovies.push(action.payload.favorites);
        }
    }
});

export const { addToFavorites, removeToFavorites } = moviesSlice.actions;

export const allMovies = (state) => state.movies.movies;
export const allFavoriteMovies = state => state.movies.favoriteMovies;
export const detail = state => state.movies.movieDetail;
export const isLoading = state => state.movies.isLoading;
export const favIsLoading = state => state.movies.favIsLoading;
export const error = state => state.movies.error;

export default moviesSlice.reducer;