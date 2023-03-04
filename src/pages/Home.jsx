import { fetchTopRatedMovies } from "components/API/moviesAPI"
import NotFound from "./NotFound";
import { paths } from "components/paths/paths";
import { useEffect, useState } from "react"
import { generatePath, Link } from "react-router-dom";

export default function Home() {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetchTopRatedMovies()
            .then(({ data }) => {
                setMovies(data.results)
            })
            .catch(() => {
                setError(true)
            })
    }, []);

    return (
        <div>
            {error && <NotFound />}
            <h2>Trending Today</h2>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>
                        <Link to={generatePath(paths.movieDetails, { movieId: movie.id })}>{movie.title ?? movie.original_title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )

}