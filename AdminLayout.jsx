import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import "./admin.css";

export default function AdminLayout() {
  const { user, logout } = useAuth();

  return (
    <div className="admin-layout">
      <aside className="sidebar">
        <h3>ChillThrive</h3>

        <NavLink to="/admin">Dashboard</NavLink>
        <NavLink to="/admin/bookings">Bookings</NavLink>
        <NavLink to="/admin/slots">Time Slots</NavLink>

        {user.role === "admin" && (
          <NavLink to="/admin/staff">Staff</NavLink>
        )}

        <button onClick={logout}>Logout</button>
      </aside>

      <main className="admin-main">
        <header className="admin-header">
          <span>Role: {user.role.toUpperCase()}</span>
        </header>

        <Outlet />
      </main>
    </div>
  );
}
