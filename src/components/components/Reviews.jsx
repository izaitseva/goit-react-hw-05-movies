import { getMovieReviews } from "moviesAPI";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Reviews = () => {

    const { movieId } = useParams();
    const [review, setReview] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {

        const fetchMovieReviews = async () => {
            try {
                setLoading(true);
                const { data: { results } } = await getMovieReviews(movieId)
                setReview(results)
            } catch {
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        fetchMovieReviews();
    }, [movieId]);

    return (
        <div>
            {error && <p>There are no reviews...</p>}
            {loading && <p>Please wait...</p>}
            <ul>
                {
                    review?.map(review => (
                        <li key={review.id}>
                            <h4>Author: {review?.author_details.username} </h4>
                            <p>{review?.content}</p>
                        </li>

                    ))
                }
            </ul>
        </div>
    )

}

export default Reviews;