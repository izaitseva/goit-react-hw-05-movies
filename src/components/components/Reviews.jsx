import { getMovieReviews } from "components/API/moviesAPI";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Reviews = () => {

    const params = useParams();
    const { movieId } = params;
    const [review, setReview] = useState([]);
    const [status, setStatus] = useState('idle');

    useEffect(() => {

        getMovieReviews(movieId)
            .then(({ data: { results } }) => {
                setReview(results)
            })
            .catch(() => {
                setStatus('error')
            })
    }, [movieId]);

    if (status === 'error' || review.length === 0) {
        return <p>There are no reviews.</p>
    }

    return (
        <ul>
            {
                review?.map(x => (
                    <li key={x.id}>
                        <h4>Author: {x?.author_details.username} </h4>
                        <p>{x?.content}</p>
                    </li>

                ))
            }
        </ul>
    )

}

export default Reviews;