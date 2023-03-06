import { getMovieById, imageUrl } from "moviesAPI";
import { paths } from "components/paths/paths";
import { Suspense, useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";

const MovieDetails = () => {

    const params = useParams();
    const { movieId } = params;
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const linkBack = location?.state?.from ?? paths.home;
    const handleClick = () => navigate(linkBack);

    useEffect(() => {

        const getMovie = async () => {
            try {
                setLoading(true);
                const { data } = await getMovieById(movieId);
                setMovie(data);
            } catch {
                setError(true);
            } finally {
                setLoading(false);
            }


        };
        getMovie();
    }, [movieId]);

    const date = ` (${movie?.release_date.split('-')[0]})`;
    const vote = movie?.vote_average.toFixed(1);
    const img = imageUrl(movie?.poster_path);

    if (loading) {
        return <>Loading...</>;
    }    

    return (
        <div>
            {error && <h2>There's nothing to see here</h2>}
            {loading && <h2>Please wait...</h2>}
            <button onClick={handleClick}>Go back</button>
            <div>
                {movie?.poster_path
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
                    <Link to={paths.cast} state={{ from: linkBack }}>Cast</Link>
                    <Link to={paths.reviews} state={{ from: linkBack }}>Reviews</Link>
                </div>
            </div>
            <Suspense fallback={<p>Loading Page</p>}>
                <Outlet />
            </Suspense>
        </div>
    )
}

export default MovieDetails;