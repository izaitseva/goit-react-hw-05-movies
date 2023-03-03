import { fetchSearchMovies } from "components/API/moviesAPI";
import { paths } from "components/paths/paths";
import { useState } from "react"
import { generatePath, Link, useSearchParams } from "react-router-dom";

export default function Movies() {

    const [movieSearch, setMovieSearch] = useSearchParams({ query: "" });
    const [searchResults, setSearchResults] = useState([]);

    const link = movieSearch.get("query");

    const handleChangeSearch = e => {
        const newSearchValue = e.target.value.toLowerCase();
        setMovieSearch({ query: newSearchValue });
    }

    const handleSearch = () => {

        if (link.trim() === '') {
            return;
        }

        fetchSearchMovies(link)
            .then(res => {
                const movies = res.data.results;

                console.log(movies);
                setSearchResults(movies);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <div>
                <input placeholder="Let's find a movie for you" onChange={handleChangeSearch} value={link}></input>
                <button type="button" onClick={handleSearch}>Search</button>
                <ul>
                    {
                        searchResults.map(movie => {

                            return (
                                <li key={movie.id}>
                                    <Link to={generatePath(paths.movieDetails, { movieId: movie.id })}>{movie.title ?? movie.original_title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}