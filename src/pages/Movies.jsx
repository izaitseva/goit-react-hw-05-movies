import { fetchSearchMovies } from "components/API/moviesAPI";
import { NotFound } from "components/components/NotFound";
import { paths } from "components/paths/paths";
import { useEffect, useState } from "react"
import { generatePath, Link, useSearchParams } from "react-router-dom";

export default function Movies() {

    const [movieSearch, setMovieSearch] = useSearchParams({ query: "" });
    const [searchResults, setSearchResults] = useState([]);
    const [query, setQuery] = useState("");
    const [error, setError] = useState(false);

    const link = movieSearch.get("query");

    const handleChangeSearch = e => {
        const newSearchValue = e.target.value.toLowerCase();
        setQuery(newSearchValue);
    }

    const handleSubmit = () => {

        if (query.trim() === '') {
            return;
        }
        setMovieSearch({ query });
    }


    useEffect(() => {
        fetchSearchMovies(link)
            .then(res => {
                const movies = res.data.results;

                console.log(movies);
                setSearchResults(movies);
            })
            .catch(() => {
                setError(true);
            });
    }, [link])

    return (
        <div>
            <div>
                {error && <NotFound />}
                <form action="URL">
                    <input placeholder="Let's find a movie for you" onChange={handleChangeSearch} value={query}></input>
                    <button type="button" onClick={handleSubmit}>Search</button>
                </form>
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