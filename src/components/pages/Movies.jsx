import Header from "components/containers/Header";
import Cast from "../containers/Cast";
import Reviews from "../containers/Reviews";

export default function Movies() {

    return (
        <div>
            <Header />
            <h2>The movie name</h2>
            <p>User score: </p>

            <p>Additional information</p>
            <ul>
                <Cast />
                <Reviews />
            </ul>
        </div>
    )
}