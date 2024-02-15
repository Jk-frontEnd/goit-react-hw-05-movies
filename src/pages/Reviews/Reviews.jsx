import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const apiKey = '6ec0ba8fa041ffdfd513a6b00a854a64';
  const apiUrl = `https://api.themoviedb.org/3/movies/${movieId}/reviews?api_key=${apiKey}`;

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(apiUrl);
        const json = await response.json();
        setReviews(json.results);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, [apiUrl]);

  return (
    <div>
      <h2>Movie Reviews</h2>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews available for this movie.</p>
      )}
    </div>
  );
};