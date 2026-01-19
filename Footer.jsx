import download from "./download.png";
import { FaInstagram, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-col">
          <h2 className="logo"><h2 className="logo">
  <img src={download}/>
</h2></h2>
          <p>
            Follow us on Instagram for daily wellness vibes.
          </p>
        </div>

        {/* Office */}
        <div className="footer-col">
          <div className="title-row">
            <h3>Office</h3>
            <span className="line"></span>
          </div>
          <p>At Samavesh, Auqa Therapy Centre,</p><p>Plot no - 3, SD jain school lane, </p><p>opp. livestream cafe, indianbank,</p> <p>Piplod, Surat, Gujarat 395007</p>
          <p className="phone">+91 92270 25160</p>
        </div>

        {/* Links */}
        <div className="footer-col">
          <div className="title-row">
            <h3>Links</h3>
            <span className="line"></span>
          </div>

          <ul className="links-list">
  <li>
  <a
    href="#"
    onClick={(e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }}
  >
    Home
  </a>
</li>

  <li><a href="/services">Services</a></li>
  <li><a href="/about">About Us</a></li>
  <li><a href="/features">Features</a></li>
  <li><a href="/contact">Contacts</a></li>
</ul>

        </div>

        {/* Newsletter */}
        <div className="footer-col">
          <div className="title-row">
            <h3>Newsletter</h3>
            <span className="line"></span>
          </div>

          <div className="newsletter">
            <input type="email" placeholder="Enter your email id" />
            <button>→</button>
          </div>

      <div className="social">
  <a
    href="https://www.instagram.com/chill.thrive/?hl=en"
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon"
  >
    <FaInstagram />
  </a>

  <a href="tel:+919227025160" className="social-icon">
    <FaPhoneAlt />
  </a>
</div>

        </div>

      </div>

      <hr />
      <p className="copyright">
        © 2026 Chill Thrive. All rights reserved.
      </p>
    </footer>
  );
}
