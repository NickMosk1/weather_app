import BaseLayout from "./components/layouts/BaseLayout/BaseLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from './components/themes/ThemeContext/ThemeContext';
import HomePage from "./pages/HomePage/HomePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import CityJournalPage from "./pages/CityJournalPage/CityJournalPage";
import CityForecastPage from "./pages/CityForecastPage/CityForecastPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider>
          <BaseLayout>
            <Routes>
              <Route
                path="/"
                element={<HomePage/>}
              />
              <Route
                path="/error"
                element={<ErrorPage/>}
              />
              <Route
                path="/cityForecast"
                element={<CityForecastPage/>}
              />
              <Route
                path="/cityJournal"
                element={<CityJournalPage/>}
              />
            </Routes>
          </BaseLayout>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
};

export default App;