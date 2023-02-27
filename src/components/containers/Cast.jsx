import { getCast, imageUrl } from "components/API/moviesAPI"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export default function Cast() {

    const params = useParams();
    const { movieId } = params;
    const [cast, setCast] = useState([]);

    useEffect(() => {
        getCast(movieId)
            .then(({ data: { cast } }) => {
                setCast(cast)
            })
    }, [movieId])

    return (
        <div>
            <ul>
                {
                    cast?.map(x => (
                        <li key={x.id}>
                            <img src={imageUrl(x.profile_path)} alt="actor's pic" width={90} />
                            <h4>{x.name}</h4>
                            <p>Character: {x.character}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}