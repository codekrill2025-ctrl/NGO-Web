import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import DonationPage from "./pages/DonationPage";
import GetInTouch from "./pages/Contact/GetInTouch";
import Faq from "./pages/Contact/F&Q";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/donation" element={<DonationPage />} />
      <Route path="/contact" element={<GetInTouch />} />
    <Route path="/f&q" element={<Faq />} />
    </Routes>
  );
}