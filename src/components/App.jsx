import { Route, Routes } from "react-router-dom";
import { paths } from "./paths/paths";
import "./styles.css";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Cast from "./containers/Cast";
import Reviews from "./containers/Reviews";


export default function App() {

  return (
    <Routes>
      <Route path={paths.home} element={<Home />} />
      <Route path={paths.movies} element={<Movies />} />
      <Route path={paths.cast} element={<Cast />} />
      <Route path={paths.reviews} element={<Reviews />} />
      <Route path="*" element={"Page is not found"}/>
    </Routes>
  );
};