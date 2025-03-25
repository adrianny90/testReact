import { useState } from "react";

import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Journal from "./pages/Journal";
import Navbar from "./pages/Navbar";
import Layout from "./layout/Layout.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="JOURNAL" element={<Journal />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
