import { Navigate, Route, Routes } from "react-router-dom";
import { paths } from "./paths/paths";
import "./styles.css";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Cast from "./containers/Cast";
import Reviews from "./containers/Reviews";
import Movie from "./containers/Movie";
import { Main } from "./pages/Main";
import { NotFound } from "./containers/NotFound";

export default function App() {

  return (
    <Routes>
      <Route path={paths.main} element={<Main />}>
        <Route path={paths.home} element={<Home />} />
        <Route path={paths.movies} element={<Movies />} />
        <Route path="*" element={<NotFound/>} />

        <Route path={paths.movie} element={<Movie />}>
          <Route path={paths.cast} element={<Cast />} />
          <Route path={paths.reviews} element={<Reviews />} />
        </Route>
      </Route>
    </Routes >
  );
};