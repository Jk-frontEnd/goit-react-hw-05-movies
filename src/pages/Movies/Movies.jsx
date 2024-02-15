import React, { useState, useCallback } from 'react';
import styles from './Movies.module.css';
import { Link, useNavigate } from 'react-router-dom';

export const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [fittingMovies, setMovies] = useState([]);
  const [api_key] = useState('6ec0ba8fa041ffdfd513a6b00a854a64');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchSearchResults = useCallback(async (newQuery) => {
    const apiUrlSearch = `https://api.themoviedb.org/3/search/movie?query=${newQuery}&api_key=${api_key}`;

    try {
      setLoading(true);
      const response = await fetch(apiUrlSearch);
      const json = await response.json();

      if (response.ok) {
        setMovies(json.results);
        setError(null);
      } else {
        setError('Failed to fetch search results');
        setMovies([]);
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
      setError('Failed to fetch search results');
      setMovies([]);
    } finally {
      setLoading(false);
    }
  }, [api_key]);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      try {
        await fetchSearchResults(searchQuery);
        // Use navigate to change the URL
        navigate(`/movies?query=${searchQuery}`);
      } catch (error) {
        console.error('Error during search:', error);
      }
    }
  };

  return (
    <div className={styles.MoviesBox}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          onChange={handleChange}
          type="text"
          value={searchQuery}
        />
        <button className={styles.btn} type="submit">
          Search
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {fittingMovies.length > 0 && (
        <ul className={styles.searchResults}>
          {fittingMovies.map((fittingMovie) => (
            <li className={styles.item} key={fittingMovie.id}>
              {fittingMovie.original_title && (
                <Link className={styles.link} to={`/movies/${fittingMovie.id}`}>
                  {fittingMovie.original_title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
