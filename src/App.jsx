import { useState } from "react";

import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Journal from "./pages/Journal";
import Layout from "./layout/Layout.jsx";
import Movie from "./pages/Movie.jsx";
import RenderMovie from "./pages/RenderMovie.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="/journal" element={<Journal />} /> */}
          {/* <Route path="/" element={<RenderMovie />} /> */}
          <Route path="/:movieId" element={<Movie />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
