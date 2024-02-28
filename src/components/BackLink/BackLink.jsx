import { Link } from "react-router-dom";
import styles from './BackLink.module.css';

const BackLink = ({ children, to }) => {
    return (
        <Link to={to} className={styles.backLink}>
            {children}
        </Link>
    );
}

export default BackLink;