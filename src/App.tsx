import BaseLayout from "./components/layouts/BaseLayout/BaseLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import CityPage from "./pages/CityPage/CityPage";
import { ThemeProvider } from './components/themes/ThemeContext/ThemeContext';
import CityJournalPage from "./pages/CityJournalPage/CityJournalPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider>
          <BaseLayout>
            <Routes>
              <Route
                path="/"
                element={<HomePage />}
              />
              <Route
                path="/error"
                element={<ErrorPage />}
              />
              <Route
                path="/city"
                element={<CityPage />}
              />
              <Route
                path="/cityJournal"
                element={<CityJournalPage />}
              />
            </Routes>
          </BaseLayout>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
};

export default App;