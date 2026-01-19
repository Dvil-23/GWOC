/*import { NavLink } from "react-router-dom";
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
}*/

import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import download from "../Home page/download.png";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useState } from "react";
import SignUp from "./SignUp";




function Header() {

  const [openAuth, setOpenAuth] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector(".navbar");
      if (!nav) return;

      if (window.scrollY > 50) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="navbar">
        <img src={download} style={{ height: "50px", width: "120px" }} />

        <ul>
          <li><NavLink to="/home" className={({ isActive }) => isActive ? "active-link" : "nav-link"}>Home</NavLink></li>
          <li><NavLink to="/services" className={({ isActive }) => isActive ? "active-link" : "nav-link"}>Services</NavLink></li>
          <li><NavLink to="/awareness" className={({ isActive }) => isActive ? "active-link" : "nav-link"}>Awareness</NavLink></li>
          <li><NavLink to="/bookings" className={({ isActive }) => isActive ? "active-link" : "nav-link"}>Bookings</NavLink></li>
          <li><NavLink to="/Aboutus" className={({ isActive }) => isActive ? "active-link" : "nav-link"}>About Us</NavLink></li>
        </ul>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
  {/* Notifications Button */}
  <IconButton
    size="large"
    aria-label="show notifications"
    className="nav-icon"
  >
    <Badge badgeContent={3} color="error">
      <NotificationsIcon />
    </Badge>
  </IconButton>

  {/* User Profile Button */}
  <IconButton
    size="large"
    edge="end"
    aria-label="account of current user"
    className="nav-icon"
    onClick={() => setOpenAuth(true)}>
    <AccountCircle />
  </IconButton>

  
      {/* Popup */}
      <SignUp
        open={openAuth}
        onClose={() => setOpenAuth(false)}
      />

</Box>

      </div>

      

      <div className="homepg"></div>
    </>
  );
}

export default Header;
