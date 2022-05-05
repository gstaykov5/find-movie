const API_URL = 'https://api.tvmaze.com/show';
const SEARCH_BY_TITLE = 'https://api.tvmaze.com/search/shows?q='

const getAllMovies = async () => {
    const req = await fetch(API_URL);
    const res = await req.json();

    return res;
}

const getMovieDetails = async (movieTitle) => {
    const req = await fetch(`${SEARCH_BY_TITLE}${movieTitle}`);
    const res = await req.json();

    return res;
}

const moviesService = {
    getAllMovies,
    getMovieDetails
}

export default moviesService;