import { paths } from "components/paths/paths";
import { Link } from "react-router-dom";

export default function NotFound() {

    return (
        <div>
            <div>
                <Link to={paths.home} > GO HOME </Link> 
            </div>
            <h1> Page is not found </h1>
            <img src="https://i.pinimg.com/originals/11/dc/96/11dc96d2e4daca3ea8ff6aa41299b5e1.gif" alt="what?"></img>
            
        </div>
    )
}