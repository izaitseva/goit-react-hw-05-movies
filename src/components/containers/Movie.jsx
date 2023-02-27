import { fetchMovieById, imageUrl } from "components/API/moviesAPI";
import { paths } from "components/paths/paths";
import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";

const Movie = () => {

    const params = useParams();
    const { movieId } = params;
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState('idle');

    useEffect(() => {
        setIsLoading(true);
        setStatus('loading');

        fetchMovieById(movieId)
            .then(({ data }) => {
                setMovie(data)
            })
            .catch((error) => {
                setStatus('error')
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, [movieId]);

    if (status === 'idle' || isLoading) {
        return <>Loading...</>;
    }
    if (status === 'error') {
        return <div>There was an error. Please return
            <Link to={paths.home}>HOME</Link>
        </div>
    }

    const date = ` (${movie?.release_date.split('-')[0]})`;
    const vote = movie?.vote_average.toFixed(1);
    const img = imageUrl(movie?.poster_path);

    return (
        <div>
            <Link to={paths.home}>Go back</Link>
            <div>
                <img src={img} alt="" />
                <h2> {movie?.title + date} </h2>
                <p>User rating: {vote}</p>
                <h4>Overview</h4>
                <p>{movie?.overview}</p>
                <h4>Genres</h4>
                <p>{movie?.genres.map(x => x.name).join(', ')}</p>
            </div>

            <div>
                <p>Additional information</p>
                <ul>
                    <Link to={paths.cast}>Cast</Link>
                    <Link to={paths.reviews}>Reviews</Link>
                </ul>
            </div>
            <Outlet />
        </div>
    )
}

export default Movie;