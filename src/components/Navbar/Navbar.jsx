import { NavLink } from "react-router-dom";
import styles from './Navbar.module.css'

export const Navbar = () => {
    return (
        <nav className={styles.NavbarBox}>
            <NavLink to="/" className={styles.link}>
                Home
            </NavLink>
            <NavLink to="/movies" className={styles.link}>
                Movies
            </NavLink>
        </nav>
    );
};
