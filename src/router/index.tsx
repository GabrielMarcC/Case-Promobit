import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MovieDetails } from "../pages/MovieDetails";
import { Home } from "../pages/Home";

export const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/moviedetails/:id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
