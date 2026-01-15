import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./navbar";
import Home from "./home";
import Services from "./services";
import Awareness from "./Awareness";
import Booking from "./booking";
import ScrollToTop from "./ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/awareness" element={<Awareness />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  );
}
