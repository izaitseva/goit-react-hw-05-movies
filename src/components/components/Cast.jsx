import { getCast, imageUrl } from "moviesAPI";

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export default function Cast() {

    const { movieId } = useParams();
    const [cast, setCast] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchCast = async () => {
            try {
                setLoading(true);
                const { data: { cast } } = await getCast(movieId)
                setCast(cast)
            } catch {
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        fetchCast()
    }, [movieId])

    return (
        <div>
            {error && <h2>There's nothing to see here</h2>}
            {loading && <h2>Please wait...</h2>}
            <ul>
                {cast?.map(cast => (
                    <li key={cast.id}>
                        {cast.profile_path
                            ? <img src={imageUrl(cast.profile_path)} alt="actor's pic" width={90} />
                            : <img src="https://rb.gy/ycrvka" alt="no pic" width={90} />
                        }
                        <h4>{cast.name}</h4>
                        <p>Character: {cast.character}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}