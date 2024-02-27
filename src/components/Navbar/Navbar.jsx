import { NavLink } from "react-router-dom";
import styles from './Navbar.module.css';

export const Navbar = () => {

    const navLinkStyles = ({ isActive }) => {
        return {
            color: isActive ? '#ff0054' : 'inherit',  
        }
    }
    
    return (
        <nav className={styles.NavbarBox}>
            <NavLink to="/" style={navLinkStyles} className={styles.link} >
                Home
            </NavLink>
            <NavLink to="/movies" style={navLinkStyles} className={styles.link} >
                Movies
            </NavLink>
        </nav>
    );
};