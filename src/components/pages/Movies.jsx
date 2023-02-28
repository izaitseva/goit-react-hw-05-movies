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
                <ul style={{
                    display: "flex",
                    gap: " 20px",
                    flexWrap: "wrap",
                }}>
                    {
                        searchResults.map(movie => {

                            const img = imageUrl(movie?.poster_path);
                            const date = ` (${movie?.release_date.split('-')[0]})`;

                            return (
                                <li key={movie?.id}
                                    style={{
                                        listStyle: "none",
                                        backgroundColor: "#e2e2e2",
                                        width: "300px",
                                        border: "solid black 1px",
                                        borderRadius: "6px",
                                    }}>
                                    <div>
                                        {movie.poster_path
                                            ? <img src={img} alt="poster" style={{
                                                width: "100%"
                                            }} />
                                            : <img src="https://rb.gy/ycrvka" alt="no pic" style={{
                                                width: "100%"
                                            }} />
                                        }
                                        <h2> {movie?.title + date} </h2>
                                        <p>User rating: {movie?.vote_average.toFixed(1)}</p>
                                        <h4>Overview</h4>
                                        <p>{movie?.overview}</p>
                                        {/* <h4>Genres</h4>
                                        <p>{movie?.genre_ids.map(x => x.name).join(', ')}</p> */}
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