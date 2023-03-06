import { fetchTopRatedMovies } from "moviesAPI";
import NotFound from "./NotFound";
import { useEffect, useState } from "react"
import MovieList from "components/components/MovieList";
import { useParams } from "react-router-dom";

export default function Home() {

    const [movies, setMovies] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const { movieId } = useParams();

    useEffect(() => {

        const fetchMovie = async () => {

            try {
                setLoading(true);
                const { data } = await fetchTopRatedMovies();
                setMovies(data.results)

            } catch {
                setError(true)
            } finally {
                setLoading(false);
            }
        }

        fetchMovie();

    }, [movieId]);

    return (
        <div>
            {error && <NotFound />}
            {loading && <p>Please wait...</p>}
            <h2>Trending Today</h2>
            {movies && <MovieList movies={movies} />}
        </div>
    )
}