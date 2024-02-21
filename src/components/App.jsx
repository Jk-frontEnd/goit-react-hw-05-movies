import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from 'pages/Home/Home';
import { Navbar } from 'components/Navbar/Navbar';
import { Movies } from 'pages/Movies/Movies';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
import { NotFound } from 'pages/NotFound/NotFound';

export const App = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId/*" element={<MovieDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};
