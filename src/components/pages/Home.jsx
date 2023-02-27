import { fetchTopRatedMovies } from "components/API/moviesAPI"
import Header from "components/containers/Header"
import { paths } from "components/paths/paths";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchTopRatedMovies()
            .then(({ data }) => {
                setMovies(data.results)
            })
    }, []);

    return (
        <div>
            <Header />
            <h2>Trending Today</h2>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>
                        <Link to={paths.movies}>{movie.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )

}