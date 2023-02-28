import { fetchSearchMovies, imageUrl } from "components/API/moviesAPI";
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

                            const img = imageUrl(movie?.poster_path);

                            return (
                                <li key={movie?.id}>
                                    <div>
                                        <img src={img} alt="" width={250} />
                                        <h2> {movie?.title} </h2>
                                        <p>User rating: {movie?.vote_average.toFixed(1)}</p>
                                        <h4>Overview</h4>
                                        <p>{movie?.overview}</p>
                                        <h4>Genres</h4>
                                        <p>{movie?.genre_ids.map(x => x.name).join(', ')}</p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}