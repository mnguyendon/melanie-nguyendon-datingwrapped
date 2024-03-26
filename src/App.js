import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SignInPage from "./pages/SignInPage/SignInPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import NewDateFormPage from "./pages/NewDateFormPage/NewDateFormPage";
import NewPersonFormPage from "./pages/NewPersonFormPage/NewPersonFormPage";
import PersonDetailsPage from "./pages/PersonDetailsPage/PersonDetailsPage";
import PastDatesPage from "./pages/PastDatesPage/PastDatesPage";
import WrappedPage from "./pages/WrappedPage/WrappedPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/new-date" element={<NewDateFormPage />} />
        <Route path="/new-person" element={<NewPersonFormPage />} />
        <Route path="/past-dates" element={<PastDatesPage />} />
        <Route path="/past-dates/:id" element={<PersonDetailsPage />} />
        <Route path="/wrapped" element={<WrappedPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* <Route path="/all-months" element={<AllMonthsPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
