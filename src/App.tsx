import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import SingleDayPage from "./pages/SingleDayPage/SingleDayPage";
import JournalPage from "./pages/JournalPage/JournalPage";
import HomePage from "./pages/HomePage/HomePage";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/singleday" element={<SingleDayPage />} />
          <Route path="/journal" element={<JournalPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;