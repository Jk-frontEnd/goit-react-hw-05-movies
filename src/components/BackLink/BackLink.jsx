import React from "react";
import {  useLocation, useNavigate } from "react-router-dom";
import styles from './BackLink.module.css';

const BackLink = ({ children, to }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const goBackHandler = () => {
        // Check if the user came from the Movies page
        if (location.state && location.state.fromMovies) {
        navigate(-1); // Go back to the previous page (equivalent to history.goBack())
        } else {
        // If not, navigate to the Home page
        navigate('/');
        }
    };
    return (
        <button to={to} onClick={goBackHandler} className={styles.backLink}>
            {children}
        </button>
    );
}

export default BackLink;
