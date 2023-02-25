import Cast from "./Cast";
import Reviews from "./Reviews";

export default function Movies() {

    return (
        <div>
            <h2></h2>
            <p>User score: </p>

            <p>Additional information</p>
            <ul>
                <Cast />
                <Reviews />
            </ul>
        </div>
    )

}