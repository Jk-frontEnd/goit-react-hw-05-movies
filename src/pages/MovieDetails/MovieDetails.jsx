import React, { useState, useEffect, lazy, Suspense } from 'react';
import { useParams, Link, useLocation, useNavigate, Route, Routes, Outlet } from 'react-router-dom';
import styles from './MovieDetails.module.css';
import { fetchMovieDetails } from '../../components/fetch/fetchMovieDetail';

const Cast = lazy(() => import('../../components/Cast/Cast'));
const Reviews = lazy(() => import('../../components/Reviews/Reviews'));
const BackLink = lazy(() => import('../../components/BackLink/BackLink'));

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await fetchMovieDetails(movieId);
        setMovieDetails(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchDetails();
  }, [movieId]);

  console.log(location)
  useEffect(() => {
    if (location.state) {
      navigate(location.state.previousUrl);
    }
  }, [location.state, navigate]);

  const date = movieDetails ? movieDetails.release_date?.slice(0, 4) : '';

  return (
    <div className={styles.container}>
      <Suspense fallback={<div>Loading...</div>}>
        <BackLink to={location.state?.previousUrl || '/'}>
          Go back
        </BackLink>
      </Suspense>
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
            {movieDetails.genres && movieDetails.genres.length > 0 ? (
              <ul>
                {movieDetails.genres.map((genre) => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            ) : (
              <p>Oops! <br /> No genres assigned for this movie.</p>
            )}
          </div>
        </div>
      )}
      <div className={styles.linkBox}>
        <Link className={styles.link} to={`/movies/${movieId}/cast`}>
          Cast
        </Link>
        <Link className={styles.link} to={`/movies/${movieId}/reviews`}>
          Reviews
        </Link>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Outlet />} />
          <Route path="cast" element={<Cast movieId={movieId} />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default MovieDetails;
