import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import ErrorPage from "./pages/ErrorPage/ErrorPage";

import CityPage from "./pages/CityPage/CityPage";

import HomePage from "./pages/HomePage/HomePage";

const App: React.FC = () => {

  return (

    <>

      <BrowserRouter>

        <Routes>

          <Route path="/" element={<HomePage />} />

          <Route path="/error" element={<ErrorPage />} />

          <Route path="/city" element={<CityPage />} />

        </Routes>

      </BrowserRouter>

    </>

  );

};

export default App;