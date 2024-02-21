import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import SignInPage from "./pages/SignInPage/SignInPage";
// import AllMonthsPage from "./pages/AllMonthsPage/AllMonthsPage";
import NewDateFormPage from "./components/NewDateForm/NewDateForm";

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/register" element={<RegisterPage />} /> */}
        {/* <Route path="/all-months" element={<AllMonthsPage />} /> */}
        <Route path="/new-date-form" element={<NewDateFormPage />} />
        {/* <Route path="/all-months/{month}" element={<MonthPage />} /> */}
        {/* <Route path="/all-months/{month}/form" element={<FormPage />} /> */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
