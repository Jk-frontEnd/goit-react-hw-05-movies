import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from 'components/Navbar/Navbar';

const Home = React.lazy(() => import('pages/Home/Home'));
const Movies = React.lazy(() => import('pages/Movies/Movies'));
const MovieDetails = React.lazy(() => import('pages/MovieDetails/MovieDetails'));
const NotFound = React.lazy(() => import('pages/NotFound/NotFound'));

 const App = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId/*" element={<MovieDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default App;