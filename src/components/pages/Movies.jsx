import Header from "components/containers/Header";
import { paths } from "components/paths/paths";
import { Link } from "react-router-dom";

export default function Movies() {

    return (
        <div>
            <Header />

            if() {
                <div>
                    <h2>The movie name</h2>
                    <p>User score: </p>

                    <p>Additional information</p>
                    <ul>
                        <Link to={paths.cast}>Cast</Link>
                        <Link to={paths.reviews}>Reviews</Link>
                    </ul>
                </div>
            } then {
                <div>
                    <input placeholder="Let's find a movie for you"></input>
                    <button>Search</button>
                </div>
            }

        </div>
    )
}