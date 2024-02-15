import React, { useState, useCallback } from 'react';
import styles from './Movies.module.css';
import { Link } from 'react-router-dom';

export const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [fittingMovies, setMovies] = useState([]);
  const [api_key] = useState('6ec0ba8fa041ffdfd513a6b00a854a64');

  const fetchSearchResults = async (query) => {
    const apiUrlSearch = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${api_key}`;

    try {
      const response = await fetch(apiUrlSearch);
      const json = await response.json();
      return json.results;
    } catch (error) {
      console.error('Error fetching search results:', error);
      return [];
    }
  };

  const handleSearch = useCallback(async (newQuery) => {
    try {
      const searchResults = await fetchSearchResults(newQuery);
      setMovies(searchResults);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  }, [fetchSearchResults]);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchQuery);
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
      {fittingMovies.length > 0 && (
        <ul className={styles.searchResults}>
          {fittingMovies.map((fittingMovie) => (
            <li className={styles.item} key={fittingMovie.id}>
                {fittingMovie.original_title && (
                    <Link className={styles.link} to={`/movies/${fittingMovie.id}`}>{fittingMovie.original_title}</Link>
                )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
