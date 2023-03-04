import { fetchMovieById, imageUrl } from "moviesAPI";
import { paths } from "components/paths/paths";
import { Suspense, useEffect, useState } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";

const MovieDetails = () => {

    const params = useParams();
    const { movieId } = params;
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState('idle');
    // const location = useLocation();
    const navigate = useNavigate();

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
            <Link to={paths.home}> HOME</Link>
        </div>
    }

    const date = ` (${movie?.release_date.split('-')[0]})`;
    const vote = movie?.vote_average.toFixed(1);
    const img = imageUrl(movie?.poster_path);

    return (
        <div>

            <Link onClick={() => navigate(-1)}>Go back</Link>
            <div>
                {movie.poster_path
                    ? <img src={img} alt="actor's pic" width={350} />
                    : <img src="https://rb.gy/ycrvka" alt="no pic" width={350} />
                }
                <h2> {movie?.title + date} </h2>
                <p>User rating: {vote}</p>
                <h4>Overview</h4>
                <p>{movie?.overview}</p>
                <h4>Genres</h4>
                <p>{movie?.genres.map(x => x.name).join(', ')}</p>
            </div>

            <div>
                <p>Additional information</p>
                <div>
                    <Link to={paths.cast}>Cast</Link>
                    <Link to={paths.reviews}>Reviews</Link>
                </div>
            </div>
            <Suspense fallback={<p>Loading Page</p>}>
                <Outlet />
            </Suspense>
        </div>
    )
}

export default MovieDetails;