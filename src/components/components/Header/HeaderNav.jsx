import { paths } from "components/paths/paths";
import { NavLink } from "react-router-dom";
import "./HeaderNav.css";

export const HeaderNav = ({ isDesktop = true }) => {

    return (
        <nav>
            <header className="HeaderNav">
                <NavLink to={paths.main}>
                    Home
                </NavLink>
                <NavLink to={paths.movies}>
                    Movies
                </NavLink>
            </header>
        </nav>
    )
}

