import { fetchTopRatedMovies } from "components/API/moviesAPI"
import { paths } from "components/paths/paths";
import { useEffect, useState } from "react"
import { generatePath, Link } from "react-router-dom";

export default function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchTopRatedMovies()
            .then(({ data }) => {
                setMovies(data.results)
                console.log(data.results);
            })
    }, []);

    return (
        <div>
            <h2>Trending Today</h2>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>
                        <Link to={generatePath(paths.movie, { movieId: movie.id })}>{movie.title ?? movie.original_title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )

}