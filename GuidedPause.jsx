import { useState } from "react";
import { motion } from "framer-motion";
import "../Home.css";

const moods = ["Overwhelmed", "Tired", "Stressed", "Lost", "Okay", "Hopeful"];

const scrollToWhy = () => {
  const el = document.getElementById("why-chill-thrive");
  if (el) el.scrollIntoView({ behavior: "smooth" });
};


export default function GuidedPause() {
  const [active, setActive] = useState("Stressed");

  const scrollToWhy = () => {
    const el = document.getElementById("why-chill-thrive");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="guided-wrap">
      <div className="guided-bg" />

      <div className="guided-content">
        <h2>How are you feeling right now?</h2>

        <div className="mood-bar">
  {moods.map((m) => (
    <button
      key={m}
      className={`mood-pill ${active === m ? "active" : ""}`}
      onClick={() => setActive(m)}
    >
      {m}
    </button>
  ))}
</div>

        <motion.p
          key={active}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="guided-text"
        >
          You deserve a space that understands this.
        </motion.p>

        <button className="guided-cta" onClick={scrollToWhy}>
          Start Your Recovery Journey Today →
        </button>
      </div>
    </section>
  );
}
