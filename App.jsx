import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./navbar";
import Home from "./home";
import Services from "./services";
import Awareness from "./Awareness";
import Booking from "./booking";
import ScrollToTop from "./ScrollToTop";

import Login from "./admin/Login";
import AdminLayout from "./admin/AdminLayout";
import Dashboard from "./admin/Dashboard";
import Bookings from "./admin/Bookings";
import Slots from "./admin/Slots";
import Staff from "./admin/Staff";
import ProtectedRoute from "./auth/ProtectedRoute";

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
        <Route path="/admin/login" element={<Login />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={["admin", "staff"]}>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="slots" element={<Slots />} />
          <Route
            path="staff"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <Staff />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
