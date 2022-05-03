const API_URL = "http://localhost:5000";

const postFavoriteMovie = async id => {
    const req = await fetch(`${API_URL}/favorite/movies`, {
        method: 'POST',
        body: JSON.stringify(id),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const res = await req.json();

    return res;
}

const getFavoriteMovies = async () => {
    const req = await fetch(`${API_URL}/favorite/movies`);
    const res = await req.json();

    return res;
}

const favoriteMoviesService = {
    postFavoriteMovie,
    getFavoriteMovies,
};

export default favoriteMoviesService;