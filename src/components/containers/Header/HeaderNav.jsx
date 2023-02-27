import { paths } from "components/paths/paths";
import { NavLink } from "react-router-dom";
import styles from './HeaderNav.module.css';

export const HeaderNav = ({ isDesktop = true }) => {

    return (
        <header className={styles.NavList}>
            <NavLink to={paths.home} style={({ isActive }) => {
                if (isActive) return { color: 'orange' }
            }}>
                Home
            </NavLink>
            <NavLink to={paths.movies} style={({ isActive }) => {
                if (isActive) return { color: 'orange' }
            }}>
                Movies
            </NavLink>
        </header>
    )
}