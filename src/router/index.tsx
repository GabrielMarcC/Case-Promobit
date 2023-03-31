import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";

export const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
