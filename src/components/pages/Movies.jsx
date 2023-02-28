import { fetchSearchMovies } from "components/API/moviesAPI";
import { useState } from "react"

export default function Movies() {

    const [movieSearch, setMovieSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleChangeSearch = e => {
        setMovieSearch(e.target.value.toLowerCase());
    }

    const handleSearch = () => {

        if (movieSearch.trim() === '') {
            return;
        }

        fetchSearchMovies(movieSearch)
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
                <input placeholder="Let's find a movie for you" onChange={handleChangeSearch} value={movieSearch}></input>
                <button type="button" onClick={handleSearch}>Search</button>
        

                <ul>
                    {
                        searchResults.map(movie => {
                            return (
                                <li key={movie.id}>
                                    <h2>{movie.title}</h2>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}