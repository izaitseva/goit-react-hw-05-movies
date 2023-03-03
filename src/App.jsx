import { Route, Routes } from "react-router-dom";
import { paths } from "./components/paths/paths";
import "./styles.css";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Cast from "components/components/Cast";
import Reviews from "components/components/Reviews";
import { NotFound } from "components/components/NotFound";
import { Main } from "components/components/Main";
import MovieDetails from "components/components/MovieDetails";


export default function App() {

  return (
    <Routes>
      <Route path={paths.main} element={<Main />}>
        <Route path={paths.home} element={<Home />} />
        <Route path={paths.movies} element={<Movies />} />

        <Route path={paths.movieDetails} element={<MovieDetails />}>
          <Route path={paths.cast} element={<Cast />} />
          <Route path={paths.reviews} element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes >
  );
};