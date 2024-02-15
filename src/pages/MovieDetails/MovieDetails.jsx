import React, { useState, useEffect } from 'react';
import { useParams, Link, Routes, Route, Outlet } from 'react-router-dom';
import styles from './MovieDetails.module.css';
import { Cast } from '../../components/Cast/Cast';
import { Reviews } from 'pages/Reviews/Reviews';

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const apiKey = '6ec0ba8fa041ffdfd513a6b00a854a64';
  const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;

  useEffect(() => {
    const fetchMovieDetails = async () => {
      
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setMovieDetails(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [apiUrl]);



  const date = movieDetails ? movieDetails.release_date.slice(0, 4) : '';

  return (
    <div className={styles.container}>
      <Link to='/' className={styles.backLink}>
        Back to Movies
      </Link>
      {movieDetails && (
        <div className={styles.mainDiv}>
          <div className={styles.posterPlaceholder}>
            {movieDetails.poster_path ? (
              <img
                className={styles.poster}
                src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                alt={movieDetails.title}
                height="440px"
              />
            ) : (
              <div className={styles.placeholderText}>No Poster Available</div>
            )}
          </div>
          <div className={styles.info}>
            <h1>{`${movieDetails.title} (${date})`}</h1>
            <p>User Score: {movieDetails.vote_average}</p>
            <h2>Overview</h2>
            <p>{movieDetails.overview}</p>
            <h2>Genres</h2>
            {movieDetails.genres && (
              <ul>
                {movieDetails.genres.map((genre) => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
      <div className="linkBox">
        <Link to={`/movies/${movieId}/cast`}>Cast</Link>
        <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
      </div>
      <Outlet />
      <Routes>
        <Route path="/cast" element={<Cast movieId={movieId}/>} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </div>
  );
};
