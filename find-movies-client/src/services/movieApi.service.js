const API_URL = 'https://api.tvmaze.com/show';

const getAllMovies = async () => {
    const req = await fetch(API_URL);
    const res = await req.json();

    return res;
}

const moviesService = {
    getAllMovies,
}

export default moviesService;