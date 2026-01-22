import Video1 from "../Home page/Video1.mp4";
import { useNavigate } from "react-router-dom";
import download from "../Home page/download.png";
import { motion } from "framer-motion";

export default function Hero() {
  const navigate = useNavigate();

  return (
  <>
    <div>

      
      {/* Background Video */}
      <video autoPlay loop muted playsinline className="back-video">
        <source src={Video1} type="video/mp4"></source>

      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Centered Text */}
      <div className ="content">
      <div className="text-box">
        <img className="big" src={download}></img>
        <h1 className="chillthrive">
          CHILL THRIVE
        </h1>

        <p className="p1">
        Where Recovery Meets Resilience
        </p>
        <p className="p2">
         Rejuvenate your body. Reset your mind.
        </p>
        <div class="hero-buttons">
        <motion.button
  onClick={() => navigate("/home")}
  className="exp"
  whileHover={{ scale: 1.05, y: -2 }}
  whileTap={{ scale: 0.9, y: 1 }}
  transition={{ type: "spring", stiffness: 300 }}
>
  Explore now
</motion.button>


<motion.button
  onClick={() => navigate("/services")}
  className="exp"
  whileHover={{ scale: 1.05, y: -2 }}
  whileTap={{ scale: 0.9, y: 1 }}
  transition={{ type: "spring", stiffness: 300 }}
>
  Book Session
</motion.button>

</div>
</div>
      </div>

      <div class="footer-text" >
  © 2026 Chill Thrive. All rights reserved.
</div>
      </div>
  </>
  );
}

