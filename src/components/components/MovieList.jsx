import { paths } from "components/paths/paths";
// import PropTypes from "prop-types";
import { generatePath, Link, useLocation } from "react-router-dom";

const MovieList = ({ movies }) => {

    const location = useLocation();

    return (
        <ul>
            {movies.map(movie => (
                <li key={movie.id}>
                    <Link to={generatePath(paths.movieDetails, { movieId: movie.id })} state={{ from: location }}>
                        {movie.title ?? movie.original_title}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

// MovieList.propTypes = {
//     movies: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             title: PropTypes.string,
//             original_title: PropTypes.string,
//         })
//     ).isRequired,
// };

export default MovieList;