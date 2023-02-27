import axios from "axios";

const URL = `https://api.themoviedb.org/3`
const TOP_RATED_URL = "https://api.themoviedb.org/3/movie/top_rated";
const KEY = "c86b3c21f50eab5c7ad4f0c864f19af2";
const SEARCH_URL =` ${URL}/search/multi?api_key=${KEY}`;
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
const CAST = "";

export const fetchSearchMovies =() => {
    return axios.get(`${SEARCH_URL}`);
}

export const fetchTopRatedMovies = () => {
    return axios.get(`${TOP_RATED_URL}?api_key=${KEY}`)
}

export const fetchMovieById = (movieId) => {
    return axios.get(`${URL}/movie/${movieId}?api_key=${KEY}`)
}

export const imageUrl = (imagePath) => {
    return `${IMAGE_URL}${imagePath}`;
}

export const getMovieReviews= (movieId) => {
    return `${URL}/movie/${movieId}/reviews`;
}