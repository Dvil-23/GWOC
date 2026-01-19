import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Home.css";
import iceBath from "./ice bath.jpeg";
import jacuzzi from "./jacuzzi.jpeg";
import steambath from "./steam bath.jpeg";
import icevideo from "./icevideo.mp4";

const items = [
  {
    title: "Ice Bath",
    img: iceBath,
    video: icevideo,
  },
  {
    title: "Jacuzzi",
    img: jacuzzi,
    video: "/videos/jacuzzi.mp4",
  },
  {
    title: "Steam Bath",
    img: steambath,
    video: "/videos/steam.mp4",
  },
  {
    title: "Combo Therapy",
    img: "/images/combo.jpg",
    video: "/videos/combo.mp4",
  },
];

export default function ServicePreview() {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="prime-section">
      <div className="prime-header">
        <h2>Featured Therapies</h2>
        <span className="see-more" onClick={() => navigate("/services")}>
          See more →
        </span>
      </div>

      <div className="prime-row">
        {items.map((item, i) => (
          <div
            key={i}
            className={`prime-card ${active === i ? "active" : ""}`}
            onMouseEnter={() => setActive(i)}
          >
            {active === i ? (
              <video
                src={item.video}
                autoPlay
                muted
                loop
                playsInline
                className="card-media"
              />
            ) : (
              <img src={item.img} alt={item.title} className="card-media" />
            )}

            <div className="prime-overlay">
              <h3>{item.title}</h3>
               <span className="see-more" onClick={() => navigate("/services")}>
          Know more →
        </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
