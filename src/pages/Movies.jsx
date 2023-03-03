import { fetchSearchMovies, imageUrl } from "components/API/moviesAPI";
import { useState } from "react"
import { useSearchParams } from "react-router-dom";

export default function Movies() {

    const [movieSearch, setMovieSearch] = useSearchParams({ query:"" });
    const [searchResults, setSearchResults] = useState([]);
    
    const link = movieSearch.get("query");

    const handleChangeSearch = e => {
        const newSearchValue = e.target.value.toLowerCase();
        setMovieSearch({ query:newSearchValue });
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
                <ul style={{
                    display: "flex",
                    gap: " 20px",
                    flexWrap: "wrap",
                    justifyContent: "center",
                }}>
                    {
                        searchResults.map(movie => {

                            const img = imageUrl(movie?.poster_path);
                            const date = ` (${movie?.release_date.split('-')[0]})`;

                            return (
                                <li key={movie?.id}
                                    style={{
                                        listStyle: "none",
                                        backgroundColor: "#f7f4f4",
                                        width: "400px",
                                        border: "solid black 1px",
                                        borderRadius: "6px",
                                    }}>
                                    <div>
                                        {movie.poster_path
                                            ? <img src={img} alt="poster" style={{
                                                width: "100%",
                                                minHeight: "599px"

                                            }} />
                                            : <img src="https://rb.gy/ycrvka" alt="no pic" style={{
                                                width: "100%"
                                            }} />
                                        }
                                        <div style={{
                                            marginLeft: "15px",
                                            marginRight: "15px"
                                        }}>
                                            <h2> {movie?.title + date} </h2>
                                            <p>User rating: {movie?.vote_average.toFixed(1)}</p>
                                            <h4>Overview</h4>
                                            <p>{movie?.overview}</p>
                                        </div>
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