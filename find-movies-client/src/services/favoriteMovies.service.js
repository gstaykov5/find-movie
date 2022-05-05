const API_URL = "http://localhost:5000";

const postFavoriteMovie = async movieId => {
    const req = await fetch(`${API_URL}/favorite/movies`, {
        method: 'POST',
        body: JSON.stringify(movieId),
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

const updateFavoriteMovie = async (movieId, collectionId, action) => {
    const req = await fetch(`${API_URL}/favorite/movies/${collectionId}`, {
        method: 'POST',
        body: JSON.stringify({movieId, action}),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const res = await req.json();

    return res;
}

const favoriteMoviesService = {
    postFavoriteMovie,
    getFavoriteMovies,
    updateFavoriteMovie,
};

export default favoriteMoviesService;