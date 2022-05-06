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

const postCommentRating = async (data) => {
    console.log(data)
    const req = await fetch(`${API_URL}/comment-rating/details`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const res = req.json();

    return res;
}

const getCommentRating = async (movieId) => {
    const req = await fetch(`${API_URL}/comment-rating/details/${movieId}`);
    const res = await req.json();

    return res;
}

const favoriteMoviesService = {
    postFavoriteMovie,
    getFavoriteMovies,
    updateFavoriteMovie,
    postCommentRating,
    getCommentRating,
};

export default favoriteMoviesService;