import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react"
import { fetchSearchMovies } from "moviesAPI";
import NotFound from "./NotFound";
import MovieList from "components/components/MovieList";

export default function Movies() {

    const [movieSearch, setMovieSearch] = useSearchParams({ query: "" });
    const [query, setQuery] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);

    const link = movieSearch.get("query");

    const handleChangeSearch = e => {
        const newSearchValue = e.target.value.toLowerCase();
        setQuery(newSearchValue);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (query.trim() === '') {
            return;
        }
        setMovieSearch({ query });
    }

    useEffect(() => {
        const getSearchMovies = async () => {
            try {
                setLoading(true);
                const { data } = await fetchSearchMovies(link);
                setMovies(data.results);
 
            } catch {
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        getSearchMovies()
    }, [link])

    return (
        <div>
            <div>
                {error && <NotFound />}
                {loading && <h2>Please wait...</h2>}
                <form onSubmit={handleSubmit}>
                    <input placeholder="Let's find a movie for you" onChange={handleChangeSearch} value={query}></input>
                    <button type="submit">Search</button>
                </form>
                {movies && <MovieList movies={movies} />}
            </div>
        </div>
    )
}