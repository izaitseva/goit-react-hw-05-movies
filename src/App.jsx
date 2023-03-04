import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { paths } from "./components/paths/paths";
import "./styles.css";

const Home = lazy(() => import("pages/Home"));
const Main = lazy(() => import("components/components/Main"));
const Movies = lazy(() => import("pages/Movies"));
const Cast = lazy(() => import("components/components/Cast"));
const Reviews = lazy(() => import("components/components/Reviews"));
const MovieDetails = lazy(() => import("pages/MovieDetails"));
const NotFound = lazy(() => import("pages/NotFound"));

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