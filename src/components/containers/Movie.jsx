import { paths } from "components/paths/paths";
import { Link } from "react-router-dom";
import Header from "./Header";

const Movie = () => {

    return (
        <div>
            <Header />
            <h2>movie title</h2>
            <p>User score: </p>
            <p>Additional information</p>
            <ul>
                <Link to={paths.cast}>Cast</Link>
                <Link to={paths.reviews}>Reviews</Link>
            </ul>
        </div>
    )
}

export default Movie;