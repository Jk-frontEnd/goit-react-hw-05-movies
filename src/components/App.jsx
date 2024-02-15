import { Home } from "pages/Home/Home";
import { Navbar } from "components/Navbar/Navbar";
import { Movies} from "pages/Movies/Movies";
import { NotFound } from "pages/NotFound/NotFound";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
import { Cast } from "./Cast/Cast";
import { Reviews } from "pages/Reviews/Reviews";
//import { lazy } from "react";

export const App = () => {
  const [movies, setMovies] = useState([]);
  const apiKey = '6ec0ba8fa041ffdfd513a6b00a854a64';
  const apiUrlTrend = `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`;

  const getTrendMovie = useCallback(async () => {
    try {
      const response = await fetch(apiUrlTrend);
      const json = await response.json();
      setMovies(json.results);
    } catch (error) {
      console.error('Error fetching trending movies:', error);
    }
  }, [apiUrlTrend]);

  console.log(movies);
  useEffect(() => {
    getTrendMovie();
  }, [getTrendMovie]);


  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/movies"
            element={<Movies />}
          />
            <Route path="/movies/:movieId/*" element={<MovieDetails />}>
            <Route index element={<MovieDetails />} />
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};