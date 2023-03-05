import { fetchTopRatedMovies } from "moviesAPI";
import NotFound from "./NotFound";
import { paths } from "components/paths/paths";
import { useEffect, useState } from "react"
import { generatePath, Link, useLocation } from "react-router-dom";

export default function Home() {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const location = useLocation();

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

    }, []);

    return (
        <div>
            {error && <NotFound />}
            {loading && <p>Please wait...</p>}
            <h2>Trending Today</h2>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>
                        <Link to={generatePath(paths.movieDetails, { movieId: movie.id })} state={{ from: location }}>{movie.title ?? movie.original_title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}