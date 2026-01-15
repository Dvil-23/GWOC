import { NavLink } from "react-router-dom";
import "./App.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-inner">
                <div className="nav-logo">
                    Chill<span>Thrive</span>
                </div>

                <div className="nav-links">
                    <NavLink to="/" className="nav-link">
                        Home
                    </NavLink>
                    <NavLink to="/awareness" className="nav-link">
                        Awareness
                    </NavLink>
                    <NavLink to="/services" className="nav-link">
                        Services
                    </NavLink>
                    <NavLink to="/booking" className="nav-link">
                        Book Now
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}
