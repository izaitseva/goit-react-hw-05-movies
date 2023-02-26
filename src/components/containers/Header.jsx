import { paths } from "components/paths/paths";
import { Link } from "react-router-dom";

export default function Header() {

    return (
        <header className="Header">
            <Link to={paths.home}>Home</Link>
            <Link to={paths.movies}>Movies</Link>
        </header>
    )
}